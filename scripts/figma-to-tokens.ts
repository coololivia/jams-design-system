/**
 * figma-to-tokens.ts
 * Figma Variables REST API에서 토큰을 추출하여 JSON 파일로 저장합니다.
 *
 * 필요 설정: figma/figma-config.json
 *
 * 사용법: npx tsx scripts/figma-to-tokens.ts
 */

import * as fs from "fs";
import * as path from "path";

const ROOT = path.resolve(__dirname, "..");
const CONFIG_PATH = path.join(ROOT, "figma", "figma-config.json");
const MAPPING_PATH = path.join(ROOT, "figma", "variable-mapping.json");
const TOKENS_DIR = path.join(ROOT, "tokens");

interface FigmaConfig {
  fileId: string;
  apiToken: string;
}

interface FigmaColor {
  r: number;
  g: number;
  b: number;
  a: number;
}

interface FigmaVariable {
  id: string;
  name: string;
  resolvedType: string;
  valuesByMode: Record<string, unknown>;
}

interface FigmaCollection {
  id: string;
  name: string;
  modes: { modeId: string; name: string }[];
  variableIds: string[];
}

function loadConfig(): FigmaConfig {
  if (!fs.existsSync(CONFIG_PATH)) {
    console.error("figma/figma-config.json not found.");
    process.exit(1);
  }
  return JSON.parse(fs.readFileSync(CONFIG_PATH, "utf-8"));
}

// Convert Figma RGBA to hex
function figmaColorToHex(color: FigmaColor): string {
  const toHex = (n: number) =>
    Math.round(n * 255)
      .toString(16)
      .padStart(2, "0");
  const hex = `#${toHex(color.r)}${toHex(color.g)}${toHex(color.b)}`;
  if (color.a < 1) {
    return `${hex}${toHex(color.a)}`;
  }
  return hex.toUpperCase();
}

// Convert Figma variable name (color/blue/500) to nested object
function setNestedToken(
  obj: Record<string, unknown>,
  figmaName: string,
  value: unknown,
  resolvedType: string
) {
  const parts = figmaName.split("/");
  let current = obj;

  for (let i = 0; i < parts.length - 1; i++) {
    if (!current[parts[i]] || typeof current[parts[i]] !== "object") {
      current[parts[i]] = {};
    }
    current = current[parts[i]] as Record<string, unknown>;
  }

  const lastKey = parts[parts.length - 1];
  let tokenType = "string";
  let tokenValue: unknown = value;

  if (resolvedType === "COLOR" && typeof value === "object" && value !== null) {
    tokenType = "color";
    tokenValue = figmaColorToHex(value as FigmaColor);
  } else if (resolvedType === "FLOAT") {
    tokenType = "dimension";
    tokenValue = `${value}px`;
  }

  current[lastKey] = { $value: tokenValue, $type: tokenType };
}

async function fetchFigmaVariables(config: FigmaConfig) {
  const url = `https://api.figma.com/v1/files/${config.fileId}/variables/local`;

  console.log(`Fetching variables from Figma file: ${config.fileId}`);

  const response = await fetch(url, {
    headers: { "X-Figma-Token": config.apiToken },
  });

  if (!response.ok) {
    console.error(`Figma API error: ${response.status} ${response.statusText}`);
    const body = await response.text();
    console.error(body);
    process.exit(1);
  }

  return response.json();
}

async function pullFromFigma() {
  const config = loadConfig();

  let data: {
    meta: {
      variableCollections: Record<string, FigmaCollection>;
      variables: Record<string, FigmaVariable>;
    };
  };

  try {
    data = await fetchFigmaVariables(config);
  } catch (err) {
    console.error("Failed to fetch from Figma:", err);
    console.error("\nMake sure figma/figma-config.json has valid fileId and apiToken.");
    process.exit(1);
  }

  const { variableCollections, variables } = data.meta;

  // Load mapping to know which collection → which token file
  let mapping: { collections: { name: string; modes: { name: string; tokenFile: string }[] }[] };
  if (fs.existsSync(MAPPING_PATH)) {
    mapping = JSON.parse(fs.readFileSync(MAPPING_PATH, "utf-8"));
  } else {
    console.error("figma/variable-mapping.json not found. Run tokens-to-figma.ts first.");
    process.exit(1);
  }

  for (const [, collection] of Object.entries(variableCollections)) {
    console.log(`\nCollection: ${collection.name}`);

    // Find matching mapping
    const mappedCollection = mapping.collections.find(
      (c) => c.name === collection.name
    );
    if (!mappedCollection) {
      console.warn(`  ⚠ No mapping found for collection "${collection.name}", skipping`);
      continue;
    }

    for (const mode of collection.modes) {
      const mappedMode = mappedCollection.modes.find(
        (m) => m.name === mode.name
      );
      if (!mappedMode) {
        console.warn(`  ⚠ No mapping for mode "${mode.name}", skipping`);
        continue;
      }

      const tokenData: Record<string, unknown> = {
        $description: `Auto-pulled from Figma — ${collection.name} / ${mode.name}`,
      };

      // Get all variables in this collection
      for (const varId of collection.variableIds) {
        const variable = variables[varId];
        if (!variable) continue;

        const modeValue = variable.valuesByMode[mode.modeId];
        if (modeValue === undefined) continue;

        setNestedToken(
          tokenData,
          variable.name,
          modeValue,
          variable.resolvedType
        );
      }

      const outputPath = path.join(TOKENS_DIR, mappedMode.tokenFile);
      fs.mkdirSync(path.dirname(outputPath), { recursive: true });
      fs.writeFileSync(outputPath, JSON.stringify(tokenData, null, 2) + "\n");
      console.log(`  → Wrote ${mappedMode.tokenFile}`);
    }
  }

  console.log("\nDone. Run 'npm run validate' to verify token integrity.");
}

pullFromFigma().catch(console.error);
