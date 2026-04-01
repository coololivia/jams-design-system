# JAMS Design System

이 프로젝트는 JAMS 디자인 시스템의 토큰, 컴포넌트 스펙, 패턴을 관리합니다.

## 시스템 구성

| 시스템 | 용도 | 상태 | 테마 |
|--------|------|------|------|
| **Shared Primitives** | 전체 공유 기본 값 | 2.1이 소유 | 없음 (raw values) |
| **JAMS 2.1** | B2C (canonical, 최신) | **정본** | JK/AM/JP × light/dark = 6 테마 |
| **Biz JAMS** | B2B | active | light/dark = 2 테마 |
| **JAMS Core** | 레거시 프로덕트 호환 | **legacy** | 없음 |

### 중요: 시스템 간 관계
- **JAMS 2.1이 정본(canonical)**입니다. 새 기능/토큰은 2.1에서 먼저 정의합니다.
- **Shared Primitives**는 2.1이 소유하는 기본 값이며, Core와 Biz도 이를 참조합니다.
- **JAMS Core는 호환 레이어**입니다. Core 전용 토큰은 `tokens/jams-core/`에 있으며, `$deprecated` 표시된 것은 2.1의 토큰으로 마이그레이션해야 합니다.
- Core의 일부 컴포넌트 스펙이 2.1과 다릅니다 → `component-overrides.tokens.json` 참조

## 토큰 계층

```
1. Primitives (tokens/primitives/)     → 순수 값 (color.blue.500, spacing.4)
2. Semantic   (tokens/*/semantic.json) → 의미 기반 (color.primary, color.bg.surface)
3. Theme      (tokens/*/theme-*.json)  → 테마별 오버라이드
```

## 파일 참조 순서 (코드 생성 시)

1. `docs/SYSTEM-OVERVIEW.md` — 전체 구조와 규칙
2. `docs/TOKENS-PRIMITIVES.md` — 공유 primitive 토큰 목록
3. `docs/TOKENS-*.md` — 사용할 시스템의 시맨틱 토큰 목록
4. `components/<name>/<name>.md` + `.spec.json` — 컴포넌트 가이드
5. `patterns/<name>/<name>.md` + `.spec.json` — 패턴 가이드

## 핵심 규칙

- 색상/간격/폰트를 하드코딩하지 말 것. 항상 시맨틱 토큰 참조
- 신규 개발은 **JAMS 2.1** 토큰 기준으로 작업
- Core 프로덕트 작업 시 `docs/TOKENS-CORE.md`의 deprecated 항목 확인
- 컴포넌트 구현 시 반드시 해당 .spec.json의 props, states, accessibility 준수
- 접근성(WCAG 2.1 AA)을 항상 준수

## NPM 스크립트

```bash
npm run validate        # 토큰 참조 무결성 검증 + deprecated 경고
npm run generate:md     # JSON → MD 자동 생성
npm run sync:md-push    # MD → JSON 역동기화
npm run sync:figma-push # JSON → Figma Variables 푸시
npm run sync:figma-pull # Figma Variables → JSON 풀
npm run sync:full       # validate + generate:md
```
