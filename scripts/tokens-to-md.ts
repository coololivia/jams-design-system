/**
 * tokens-to-md.ts
 * JSON 토큰 파일들을 읽어서 Claude Code가 참조할 MD 문서를 자동 생성합니다.
 *
 * 생성 파일:
 *   docs/TOKENS-CORE.md    — Core primitive 토큰 요약
 *   docs/TOKENS-JAMS21.md  — JAMS 2.1 시맨틱 + 테마 토큰 요약
 *   docs/TOKENS-BIZ.md     — Biz JAMS 시맨틱 + 테마 토큰 요약
 *   components/<name>/<name>.md — spec.json에서 MD 자동 생성
 */

import * as fs from "fs";
import * as path from "path";

const ROOT = path.resolve(__dirname, "..");
const TOKENS_DIR = path.join(ROOT, "tokens");
const DOCS_DIR = path.join(ROOT, "docs");
const COMPONENTS_DIR = path.join(ROOT, "components");

interface TokenValue {
  $value: unknown;
  $type?: string;
  $description?: string;
}

type TokenTree = {
  [key: string]: TokenTree | TokenValue | string;
};

function readJson(filePath: string): TokenTree {
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

// Flatten token tree into a table-friendly format
function flattenTokens(
  obj: TokenTree,
  prefix: string = ""
): { path: string; value: string; type: string }[] {
  const rows: { path: string; value: string; type: string }[] = [];
  for (const [key, val] of Object.entries(obj)) {
    if (key.startsWith("$")) continue;
    const fullPath = prefix ? `${prefix}.${key}` : key;
    if (
      val &&
      typeof val === "object" &&
      "$value" in (val as Record<string, unknown>)
    ) {
      const tv = val as TokenValue;
      const valueStr =
        typeof tv.$value === "object"
          ? JSON.stringify(tv.$value)
          : String(tv.$value);
      rows.push({ path: fullPath, value: valueStr, type: tv.$type || "" });
    } else if (val && typeof val === "object") {
      rows.push(...flattenTokens(val as TokenTree, fullPath));
    }
  }
  return rows;
}

function generateTokenTable(rows: { path: string; value: string; type: string }[]): string {
  const lines = ["| Token | Value | Type |", "|-------|-------|------|"];
  for (const r of rows) {
    lines.push(`| \`${r.path}\` | \`${r.value}\` | ${r.type} |`);
  }
  return lines.join("\n");
}

// Group tokens by top-level category
function groupByCategory(rows: { path: string; value: string; type: string }[]): Map<string, typeof rows> {
  const groups = new Map<string, typeof rows>();
  for (const row of rows) {
    const category = row.path.split(".")[0];
    if (!groups.has(category)) groups.set(category, []);
    groups.get(category)!.push(row);
  }
  return groups;
}

function generatePrimitivesDoc() {
  const data = readJson(path.join(TOKENS_DIR, "primitives", "primitives.tokens.json"));
  const rows = flattenTokens(data);
  const groups = groupByCategory(rows);

  let md = `# Shared Primitives\n\n`;
  md += `> 자동 생성 파일입니다. 수정 시 \`npm run generate:md\`로 재생성하거나, 이 파일을 직접 수정 후 \`npm run sync:md-push\`로 JSON에 반영하세요.\n\n`;
  md += `JAMS 2.1이 정의/소유하는 기본 값입니다. Core, Biz 모두 이 primitive를 참조합니다.\n\n`;

  for (const [category, catRows] of groups) {
    md += `## ${category}\n\n`;
    md += generateTokenTable(catRows);
    md += `\n\n`;
  }

  fs.writeFileSync(path.join(DOCS_DIR, "TOKENS-PRIMITIVES.md"), md);
  console.log("Generated docs/TOKENS-PRIMITIVES.md");
}

function generateCoreCompatDoc() {
  const semanticPath = path.join(TOKENS_DIR, "jams-core", "semantic.tokens.json");
  const overridesPath = path.join(TOKENS_DIR, "jams-core", "component-overrides.tokens.json");

  let md = `# JAMS Core (Legacy Compat Layer)\n\n`;
  md += `> 자동 생성 파일입니다.\n\n`;
  md += `**상태: Legacy** — JAMS 2.1이 canonical입니다. Core는 레거시 프로덕트 호환을 위해 유지됩니다.\n\n`;
  md += `Core를 직접 사용하는 프로덕트는 점진적으로 2.1로 마이그레이션하세요.\n\n`;

  if (fs.existsSync(semanticPath)) {
    const data = readJson(semanticPath);
    const rows = flattenTokens(data);
    const groups = groupByCategory(rows);

    md += `## Semantic Tokens\n\n`;
    // Mark deprecated tokens
    for (const [category, catRows] of groups) {
      md += `### ${category}\n\n`;
      const lines = ["| Token | Value | Type | Status |", "|-------|-------|------|--------|"];
      for (const r of catRows) {
        const deprecated = isDeprecated(data, r.path);
        const status = deprecated ? `⚠ deprecated: ${deprecated}` : "active";
        lines.push(`| \`${r.path}\` | \`${r.value}\` | ${r.type} | ${status} |`);
      }
      md += lines.join("\n");
      md += `\n\n`;
    }
  }

  if (fs.existsSync(overridesPath)) {
    md += `## Component Overrides\n\n`;
    md += `Core에서 2.1과 다르게 동작하는 컴포넌트 스펙:\n\n`;
    const data = readJson(overridesPath);
    for (const [key, val] of Object.entries(data)) {
      if (key.startsWith("$")) continue;
      const comp = val as Record<string, unknown>;
      md += `### ${key}\n\n`;
      if (comp.$description) md += `${comp.$description}\n\n`;
      const rows = flattenTokens(comp as TokenTree);
      if (rows.length > 0) {
        md += generateTokenTable(rows);
        md += `\n\n`;
      }
    }
  }

  fs.writeFileSync(path.join(DOCS_DIR, "TOKENS-CORE.md"), md);
  console.log("Generated docs/TOKENS-CORE.md");
}

// Check if a token path has $deprecated in the source data
function isDeprecated(data: TokenTree, dotPath: string): string | null {
  const parts = dotPath.split(".");
  let current: unknown = data;
  for (const part of parts) {
    if (!current || typeof current !== "object") return null;
    current = (current as Record<string, unknown>)[part];
  }
  if (current && typeof current === "object" && "$deprecated" in (current as Record<string, unknown>)) {
    return (current as Record<string, string>).$deprecated;
  }
  return null;
}

function generateSystemDoc(
  systemName: string,
  systemDir: string,
  outputFile: string,
  description: string
) {
  const semanticPath = path.join(systemDir, "semantic.tokens.json");
  const themeFiles = fs
    .readdirSync(systemDir)
    .filter((f) => f.startsWith("theme-") && f.endsWith(".tokens.json"))
    .sort();

  let md = `# ${systemName}\n\n`;
  md += `> 자동 생성 파일입니다.\n\n`;
  md += `${description}\n\n`;

  // Semantic tokens
  if (fs.existsSync(semanticPath)) {
    md += `## Semantic Tokens\n\n`;
    const data = readJson(semanticPath);
    const rows = flattenTokens(data);
    const groups = groupByCategory(rows);
    for (const [category, catRows] of groups) {
      md += `### ${category}\n\n`;
      md += generateTokenTable(catRows);
      md += `\n\n`;
    }
  }

  // Theme overrides
  for (const themeFile of themeFiles) {
    const themeName = themeFile
      .replace("theme-", "")
      .replace(".tokens.json", "")
      .toUpperCase();
    md += `## Theme: ${themeName}\n\n`;
    const data = readJson(path.join(systemDir, themeFile));
    const rows = flattenTokens(data);
    md += generateTokenTable(rows);
    md += `\n\n`;
  }

  fs.writeFileSync(path.join(DOCS_DIR, outputFile), md);
  console.log(`Generated docs/${outputFile}`);
}

// Generate component MD from spec.json
function generateComponentDocs() {
  if (!fs.existsSync(COMPONENTS_DIR)) return;

  const components = fs
    .readdirSync(COMPONENTS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory());

  const index: string[] = [];

  for (const comp of components) {
    const specPath = path.join(COMPONENTS_DIR, comp.name, `${comp.name}.spec.json`);
    const mdPath = path.join(COMPONENTS_DIR, comp.name, `${comp.name}.md`);

    if (!fs.existsSync(specPath)) continue;

    const spec = JSON.parse(fs.readFileSync(specPath, "utf-8"));
    let md = `# ${spec.name}\n\n`;
    md += `> 자동 생성된 기본 구조입니다. 수동 보강 가능합니다.\n\n`;

    // Systems
    if (spec.systems) {
      md += `## 사용 시스템\n\n`;
      md += spec.systems.map((s: string) => `- ${s}`).join("\n");
      md += `\n\n`;
    }

    // Props
    if (spec.props) {
      md += `## Props\n\n`;
      md += `| Prop | Type | Values | Default |\n`;
      md += `|------|------|--------|---------|\n`;
      for (const [propName, propDef] of Object.entries(spec.props)) {
        const p = propDef as Record<string, unknown>;
        const values = p.values
          ? (p.values as string[]).join(", ")
          : String(p.type);
        md += `| \`${propName}\` | ${p.type} | ${values} | ${p.default ?? "-"} |\n`;
      }
      md += `\n`;
    }

    // Token mappings
    if (spec.tokens) {
      md += `## 토큰 매핑\n\n`;
      for (const [variant, mapping] of Object.entries(spec.tokens)) {
        md += `### ${variant}\n\n`;
        md += `| Property | Token |\n`;
        md += `|----------|-------|\n`;
        for (const [prop, token] of Object.entries(
          mapping as Record<string, string>
        )) {
          md += `| ${prop} | \`${token}\` |\n`;
        }
        md += `\n`;
      }
    }

    // States
    if (spec.states) {
      md += `## States\n\n`;
      md += spec.states.map((s: string) => `- ${s}`).join("\n");
      md += `\n\n`;
    }

    // Accessibility
    if (spec.accessibility) {
      md += `## 접근성\n\n`;
      if (spec.accessibility.role) md += `- Role: \`${spec.accessibility.role}\`\n`;
      if (spec.accessibility.keyboard) {
        md += `- Keyboard: ${spec.accessibility.keyboard.join(", ")}\n`;
      }
      md += `\n`;
    }

    fs.writeFileSync(mdPath, md);
    console.log(`Generated components/${comp.name}/${comp.name}.md`);
    index.push(`- [${spec.name}](../components/${comp.name}/${comp.name}.md) — ${spec.systems?.join(", ") || "all"}`);
  }

  // Components index
  if (index.length > 0) {
    let indexMd = `# Components Index\n\n`;
    indexMd += `> 자동 생성 파일입니다.\n\n`;
    indexMd += index.join("\n") + "\n";
    fs.writeFileSync(path.join(DOCS_DIR, "COMPONENTS.md"), indexMd);
    console.log("Generated docs/COMPONENTS.md");
  }
}

// Main
function main() {
  fs.mkdirSync(DOCS_DIR, { recursive: true });

  generatePrimitivesDoc();
  generateCoreCompatDoc();

  generateSystemDoc(
    "JAMS 2.1 (B2C) Tokens",
    path.join(TOKENS_DIR, "jams-2.1"),
    "TOKENS-JAMS21.md",
    "B2C용 디자인 토큰. JK/AM/JP 브랜드별 컬러 테마와 라이트/다크 모드를 지원합니다."
  );

  generateSystemDoc(
    "Biz JAMS (B2B) Tokens",
    path.join(TOKENS_DIR, "biz-jams"),
    "TOKENS-BIZ.md",
    "B2B용 디자인 토큰. 사이드바, 데이터 시각화 등 비즈니스 앱 전용 토큰을 포함합니다."
  );

  generateComponentDocs();

  console.log("\nDone. All MD files generated.");
}

main();
