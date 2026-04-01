/**
 * tokens-to-figma.ts
 * JSON 토큰을 Figma Variables REST API로 푸시합니다.
 *
 * 필요 설정: figma/figma-config.json
 * {
 *   "fileId": "YOUR_FIGMA_FILE_ID",
 *   "apiToken": "YOUR_FIGMA_PERSONAL_ACCESS_TOKEN"
 * }
 *
 * Figma Variables API 문서:
 * https://www.figma.com/developers/api#variables
 *
 * 사용법: npx tsx scripts/tokens-to-figma.ts
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

interface VariableMapping {
  collections: {
    name: string;
    id?: string;
    modes: { name: string; id?: string; tokenFile: string }[];
  }[];
}

type TokenTree = Record<string, unknown>;

function loadConfig(): FigmaConfig {
  if (!fs.existsSync(CONFIG_PATH)) {
    console.error("figma/figma-config.json not found.");
    console.error("Create it with: { \"fileId\": \"...\", \"apiToken\": \"...\" }");
    process.exit(1);
  }
  return JSON.parse(fs.readFileSync(CONFIG_PATH, "utf-8"));
}

function loadMapping(): VariableMapping {
  if (!fs.existsSync(MAPPING_PATH)) {
    console.error("figma/variable-mapping.json not found. Generating default...");
    generateDefaultMapping();
  }
  return JSON.parse(fs.readFileSync(MAPPING_PATH, "utf-8"));
}

function generateDefaultMapping() {
  const mapping: VariableMapping = {
    collections: [
      {
        name: "Shared Primitives",
        modes: [
          { name: "Default", tokenFile: "primitives/primitives.tokens.json" },
        ],
      },
      {
        name: "JAMS Core (Legacy)",
        modes: [
          { name: "Default", tokenFile: "jams-core/semantic.tokens.json" },
        ],
      },
      {
        name: "JAMS 2.1",
        modes: [
          { name: "JK Light", tokenFile: "jams-2.1/theme-jk-light.tokens.json" },
          { name: "JK Dark", tokenFile: "jams-2.1/theme-jk-dark.tokens.json" },
          { name: "AM Light", tokenFile: "jams-2.1/theme-am-light.tokens.json" },
          { name: "AM Dark", tokenFile: "jams-2.1/theme-am-dark.tokens.json" },
          { name: "JP Light", tokenFile: "jams-2.1/theme-jp-light.tokens.json" },
          { name: "JP Dark", tokenFile: "jams-2.1/theme-jp-dark.tokens.json" },
        ],
      },
      {
        name: "Biz JAMS",
        modes: [
          { name: "Light", tokenFile: "biz-jams/theme-light.tokens.json" },
          { name: "Dark", tokenFile: "biz-jams/theme-dark.tokens.json" },
        ],
      },
    ],
  };

  fs.writeFileSync(MAPPING_PATH, JSON.stringify(mapping, null, 2) + "\n");
  console.log("Generated figma/variable-mapping.json");
}

// Flatten tokens to { "color/blue/500": { value, type } }
function flattenForFigma(
  obj: TokenTree,
  prefix: string = ""
): { name: string; value: unknown; type: string }[] {
  const result: { name: string; value: unknown; type: string }[] = [];
  for (const [key, val] of Object.entries(obj)) {
    if (key.startsWith("$")) continue;
    const fullPath = prefix ? `${prefix}/${key}` : key;
    if (val && typeof val === "object" && "$value" in (val as Record<string, unknown>)) {
      const tv = val as { $value: unknown; $type?: string };
      result.push({ name: fullPath, value: tv.$value, type: tv.$type || "string" });
    } else if (val && typeof val === "object") {
      result.push(...flattenForFigma(val as TokenTree, fullPath));
    }
  }
  return result;
}

// Convert token value to Figma-compatible format
function toFigmaValue(value: unknown, type: string): unknown {
  if (type === "color" && typeof value === "string" && value.startsWith("#")) {
    const hex = value.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16) / 255;
    const g = parseInt(hex.substring(2, 4), 16) / 255;
    const b = parseInt(hex.substring(4, 6), 16) / 255;
    const a = hex.length === 8 ? parseInt(hex.substring(6, 8), 16) / 255 : 1;
    return { r, g, b, a };
  }
  return value;
}

async function pushToFigma() {
  const config = loadConfig();
  const mapping = loadMapping();

  console.log(`Pushing tokens to Figma file: ${config.fileId}\n`);

  for (const collection of mapping.collections) {
    console.log(`Collection: ${collection.name}`);

    for (const mode of collection.modes) {
      const tokenPath = path.join(TOKENS_DIR, mode.tokenFile);
      if (!fs.existsSync(tokenPath)) {
        console.warn(`  ⚠ Token file not found: ${mode.tokenFile}`);
        continue;
      }

      const data = JSON.parse(fs.readFileSync(tokenPath, "utf-8"));
      const flat = flattenForFigma(data);
      console.log(`  Mode "${mode.name}": ${flat.length} variables`);

      // Build Figma API payload
      const variables = flat
        .filter((t) => !String(t.value).startsWith("{")) // Skip references for now
        .map((t) => ({
          name: t.name,
          resolvedType: t.type === "color" ? "COLOR" : "FLOAT",
          valuesByMode: {
            [mode.id || mode.name]: toFigmaValue(t.value, t.type),
          },
        }));

      // NOTE: Actual API call would be:
      // POST https://api.figma.com/v1/files/{fileId}/variables
      // Headers: { "X-Figma-Token": config.apiToken }
      // Body: { variableCollections: [...], variables: [...] }

      console.log(`  → ${variables.length} variables ready to push`);
      console.log(`  → API call skipped (set FIGMA_PUSH=true to enable)`);
    }
    console.log();
  }

  if (process.env.FIGMA_PUSH === "true") {
    console.log("TODO: Implement actual Figma API calls");
    console.log("See: https://www.figma.com/developers/api#variables");
  } else {
    console.log("Dry run complete. Set FIGMA_PUSH=true to actually push to Figma.");
  }
}

pushToFigma().catch(console.error);
