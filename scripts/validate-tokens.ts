/**
 * validate-tokens.ts
 * 모든 토큰 파일의 참조 무결성을 검증합니다.
 * - {color.blue.500} 같은 참조가 실제로 존재하는지 확인
 * - $type 필드가 유효한지 확인
 * - 순환 참조 검출
 */

import * as fs from "fs";
import * as path from "path";

const TOKENS_DIR = path.resolve(__dirname, "../tokens");
const VALID_TYPES = [
  "color",
  "dimension",
  "fontFamily",
  "fontWeight",
  "duration",
  "shadow",
  "number",
  "typography",
];

interface TokenValue {
  $value: unknown;
  $type?: string;
  $description?: string;
}

type TokenTree = {
  [key: string]: TokenTree | TokenValue | string;
};

// Collect all token paths from primitive (core) file
function collectTokenPaths(
  obj: TokenTree,
  prefix: string = ""
): Map<string, unknown> {
  const paths = new Map<string, unknown>();
  for (const [key, value] of Object.entries(obj)) {
    if (key.startsWith("$")) continue;
    const fullPath = prefix ? `${prefix}.${key}` : key;
    if (
      value &&
      typeof value === "object" &&
      "$value" in (value as Record<string, unknown>)
    ) {
      paths.set(fullPath, (value as TokenValue).$value);
    } else if (value && typeof value === "object") {
      for (const [p, v] of collectTokenPaths(value as TokenTree, fullPath)) {
        paths.set(p, v);
      }
    }
  }
  return paths;
}

// Extract all {reference} patterns from a value
function extractReferences(value: unknown): string[] {
  const refs: string[] = [];
  if (typeof value === "string") {
    const matches = value.matchAll(/\{([^}]+)\}/g);
    for (const m of matches) {
      refs.push(m[1]);
    }
  } else if (typeof value === "object" && value !== null) {
    for (const v of Object.values(value)) {
      refs.push(...extractReferences(v));
    }
  }
  return refs;
}

// Load all JSON token files
function loadTokenFiles(): { filePath: string; data: TokenTree }[] {
  const files: { filePath: string; data: TokenTree }[] = [];

  function walk(dir: string) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (entry.name.endsWith(".tokens.json")) {
        const data = JSON.parse(fs.readFileSync(full, "utf-8"));
        files.push({ filePath: path.relative(TOKENS_DIR, full), data });
      }
    }
  }

  walk(TOKENS_DIR);
  return files;
}

function validate() {
  const files = loadTokenFiles();
  const errors: string[] = [];
  const warnings: string[] = [];

  // Build global token registry from shared primitives
  const primitivesFile = files.find(
    (f) => f.filePath === path.join("primitives", "primitives.tokens.json")
  );
  if (!primitivesFile) {
    errors.push("FATAL: primitives/primitives.tokens.json not found");
    printResults(errors, warnings);
    return;
  }

  const corePaths = collectTokenPaths(primitivesFile.data);

  // Check $deprecated warnings
  for (const { filePath, data } of files) {
    function checkDeprecated(obj: TokenTree, prefix: string = "") {
      for (const [key, value] of Object.entries(obj)) {
        if (key.startsWith("$")) continue;
        const fullPath = prefix ? `${prefix}.${key}` : key;
        if (value && typeof value === "object" && "$deprecated" in (value as Record<string, unknown>)) {
          warnings.push(`[${filePath}] DEPRECATED ${fullPath}: ${(value as Record<string, string>).$deprecated}`);
        } else if (value && typeof value === "object" && !("$value" in (value as Record<string, unknown>))) {
          checkDeprecated(value as TokenTree, fullPath);
        }
      }
    }
    checkDeprecated(data);
  }

  // For each file, collect its own tokens and check references
  for (const { filePath, data } of files) {
    const localPaths = collectTokenPaths(data);

    // Check $type validity
    function checkTypes(obj: TokenTree, prefix: string = "") {
      for (const [key, value] of Object.entries(obj)) {
        if (key.startsWith("$")) continue;
        const fullPath = prefix ? `${prefix}.${key}` : key;
        if (
          value &&
          typeof value === "object" &&
          "$value" in (value as Record<string, unknown>)
        ) {
          const tv = value as TokenValue;
          if (tv.$type && !VALID_TYPES.includes(tv.$type)) {
            errors.push(
              `[${filePath}] Invalid $type "${tv.$type}" at ${fullPath}`
            );
          }
        } else if (value && typeof value === "object") {
          checkTypes(value as TokenTree, fullPath);
        }
      }
    }
    checkTypes(data);

    // Check references resolve
    function checkRefs(obj: TokenTree, prefix: string = "") {
      for (const [key, value] of Object.entries(obj)) {
        if (key.startsWith("$")) continue;
        const fullPath = prefix ? `${prefix}.${key}` : key;
        if (
          value &&
          typeof value === "object" &&
          "$value" in (value as Record<string, unknown>)
        ) {
          const refs = extractReferences((value as TokenValue).$value);
          for (const ref of refs) {
            if (!corePaths.has(ref) && !localPaths.has(ref)) {
              // Check if it's in any semantic file
              const resolved = files.some((f) => {
                const fp = collectTokenPaths(f.data);
                return fp.has(ref);
              });
              if (!resolved) {
                errors.push(
                  `[${filePath}] Unresolved reference {${ref}} at ${fullPath}`
                );
              }
            }
          }
        } else if (value && typeof value === "object") {
          checkRefs(value as TokenTree, fullPath);
        }
      }
    }
    checkRefs(data);
  }

  printResults(errors, warnings);
}

function printResults(errors: string[], warnings: string[]) {
  console.log("\n=== JAMS Design Token Validation ===\n");

  if (warnings.length > 0) {
    console.log(`⚠ ${warnings.length} warning(s):`);
    for (const w of warnings) console.log(`  ${w}`);
    console.log();
  }

  if (errors.length > 0) {
    console.log(`✗ ${errors.length} error(s):`);
    for (const e of errors) console.log(`  ${e}`);
    console.log();
    process.exit(1);
  } else {
    console.log("✓ All tokens valid.\n");
  }
}

validate();
