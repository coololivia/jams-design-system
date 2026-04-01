/**
 * md-to-tokens.ts
 * MD 파일의 토큰 테이블을 파싱하여 JSON 토큰 파일을 업데이트합니다.
 *
 * MD 토큰 테이블 형식:
 *   | Token | Value | Type |
 *   |-------|-------|------|
 *   | `color.blue.500` | `#3B82F6` | color |
 *
 * 사용법: npx tsx scripts/md-to-tokens.ts <md-file>
 * 예: npx tsx scripts/md-to-tokens.ts docs/TOKENS-CORE.md
 */

import * as fs from "fs";
import * as path from "path";

const ROOT = path.resolve(__dirname, "..");

interface ParsedToken {
  path: string;
  value: string;
  type: string;
}

// Parse MD token tables
function parseTokenTables(mdContent: string): ParsedToken[] {
  const tokens: ParsedToken[] = [];
  const lines = mdContent.split("\n");

  let inTable = false;
  let headerParsed = false;

  for (const line of lines) {
    const trimmed = line.trim();

    // Detect table header
    if (trimmed.match(/^\|\s*Token\s*\|\s*Value\s*\|\s*Type\s*\|/i)) {
      inTable = true;
      headerParsed = false;
      continue;
    }

    // Skip separator line
    if (inTable && !headerParsed && trimmed.match(/^\|[-|:\s]+\|$/)) {
      headerParsed = true;
      continue;
    }

    // Parse table row
    if (inTable && headerParsed && trimmed.startsWith("|")) {
      const cells = trimmed
        .split("|")
        .slice(1, -1)
        .map((c) => c.trim());

      if (cells.length >= 3) {
        const tokenPath = cells[0].replace(/`/g, "").trim();
        const value = cells[1].replace(/`/g, "").trim();
        const type = cells[2].trim();

        if (tokenPath && value) {
          tokens.push({ path: tokenPath, value, type });
        }
      }
    } else if (inTable && !trimmed.startsWith("|")) {
      inTable = false;
      headerParsed = false;
    }
  }

  return tokens;
}

// Set a nested value in an object by dot-path
function setNestedValue(obj: Record<string, unknown>, dotPath: string, value: unknown, type: string) {
  const parts = dotPath.split(".");
  let current = obj;

  for (let i = 0; i < parts.length - 1; i++) {
    if (!current[parts[i]] || typeof current[parts[i]] !== "object") {
      current[parts[i]] = {};
    }
    current = current[parts[i]] as Record<string, unknown>;
  }

  const lastKey = parts[parts.length - 1];

  // Parse value: try number, try JSON object, otherwise string
  let parsedValue: unknown = value;
  if (value.startsWith("{") && value.endsWith("}") && !value.startsWith("{color")) {
    try {
      parsedValue = JSON.parse(value);
    } catch {
      // Keep as string (likely a token reference like {color.blue.500})
    }
  }
  if (typeof parsedValue === "string" && !isNaN(Number(parsedValue)) && !parsedValue.includes("#") && !parsedValue.includes("px") && !parsedValue.includes("ms")) {
    parsedValue = Number(parsedValue);
  }

  current[lastKey] = {
    $value: parsedValue,
    ...(type ? { $type: type } : {}),
  };
}

// Map MD file to its source JSON
function resolveTargetJson(mdFile: string): string | null {
  const basename = path.basename(mdFile);

  const mapping: Record<string, string> = {
    "TOKENS-PRIMITIVES.md": "tokens/primitives/primitives.tokens.json",
    "TOKENS-CORE.md": "tokens/jams-core/semantic.tokens.json",
    "TOKENS-JAMS21.md": "tokens/jams-2.1/semantic.tokens.json",
    "TOKENS-BIZ.md": "tokens/biz-jams/semantic.tokens.json",
  };

  return mapping[basename] || null;
}

function main() {
  const mdFile = process.argv[2];
  if (!mdFile) {
    console.error("Usage: npx tsx scripts/md-to-tokens.ts <md-file>");
    console.error("Example: npx tsx scripts/md-to-tokens.ts docs/TOKENS-CORE.md");
    process.exit(1);
  }

  const mdPath = path.resolve(ROOT, mdFile);
  if (!fs.existsSync(mdPath)) {
    console.error(`File not found: ${mdPath}`);
    process.exit(1);
  }

  const mdContent = fs.readFileSync(mdPath, "utf-8");
  const tokens = parseTokenTables(mdContent);

  if (tokens.length === 0) {
    console.log("No token tables found in MD file.");
    return;
  }

  console.log(`Parsed ${tokens.length} tokens from ${mdFile}`);

  const targetJsonRel = resolveTargetJson(path.basename(mdFile));
  if (!targetJsonRel) {
    console.error(`Cannot determine target JSON for ${mdFile}.`);
    console.error("Supported MD files: TOKENS-CORE.md, TOKENS-JAMS21.md, TOKENS-BIZ.md");
    process.exit(1);
  }

  const targetJsonPath = path.join(ROOT, targetJsonRel);
  const existingData = fs.existsSync(targetJsonPath)
    ? JSON.parse(fs.readFileSync(targetJsonPath, "utf-8"))
    : {};

  // Preserve $description
  const description = existingData.$description;

  // Rebuild from parsed tokens
  const newData: Record<string, unknown> = {};
  if (description) newData.$description = description;

  for (const token of tokens) {
    setNestedValue(newData, token.path, token.value, token.type);
  }

  fs.writeFileSync(targetJsonPath, JSON.stringify(newData, null, 2) + "\n");
  console.log(`Updated ${targetJsonRel}`);
  console.log("Run 'npm run validate' to verify token integrity.");
}

main();
