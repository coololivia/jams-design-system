# JAMS Design System Overview

## 1. 시스템 간 관계

```
                    ┌──────────────────────┐
                    │  Shared Primitives   │  ← 2.1이 소유/정의
                    │  (raw values)        │
                    └──────┬───────────────┘
                           │ 참조
              ┌────────────┼────────────┐
              ▼            ▼            ▼
     ┌────────────┐ ┌───────────┐ ┌──────────┐
     │ JAMS 2.1   │ │ Biz JAMS  │ │JAMS Core │
     │ (B2C)      │ │ (B2B)     │ │(Legacy)  │
     │ ★ CANONICAL│ │ active    │ │ compat   │
     └────────────┘ └───────────┘ └──────────┘
      6 themes       2 themes      no themes
      JK/AM/JP       light/dark
      ×light/dark
```

### 핵심 원칙
- **JAMS 2.1이 정본(canonical)**. 새 토큰/컴포넌트는 여기서 먼저 정의됩니다.
- **Shared Primitives**는 2.1이 소유합니다. 모든 시스템이 이 primitive를 참조합니다.
- **JAMS Core는 레거시 호환 레이어**입니다. 직접 사용하는 프로덕트가 있어 유지하되, 신규 개발은 2.1 기준입니다.
- Core에서 2.1과 다른 부분은 `tokens/jams-core/component-overrides.tokens.json`에 명시됩니다.
- Core의 `$deprecated` 표시된 토큰은 2.1의 토큰으로 마이그레이션 대상입니다.

## 2. Shared Primitives
모든 시스템이 공유하는 기본 값 라이브러리입니다.
- 컬러 팔레트:
  - **Base**: white (#FFFFFF), near-black (#1A1A1E)
  - **JK** (Blue-Indigo): #F0F2FA ~ #030F30 — JK 브랜드 프라이머리
  - **AM** (Orange): #FBF4EF ~ #301504 — AM 브랜드 프라이머리
  - **Gray**: #F1F2F3 ~ #1A1A1E — 공통 뉴트럴
  - **Blue**: #EFF5FD ~ #092855 — 시스템 블루 (링크, 포커스, Biz 프라이머리)
  - **Red**: #FBF5F5 ~ #450A0A — 에러/위험
  - **Yellow**: #FAF9EC ~ #4B2407 — 경고
  - **Green**: #EAFAF4 ~ #073B28 — 성공
  - **Violet**: #F5F3FF ~ #2E1065 — JP 브랜드 프라이머리
- 스페이싱 (4px 그리드 기반: 0~96px)
- 타이포그래피 (Pretendard, xs~5xl)
- 그림자 (sm, md, lg, xl)
- 모서리 반경 (none~full)
- 애니메이션 (fast 150ms, normal 250ms, slow 400ms)

## 3. JAMS 2.1 (B2C) — Canonical
소비자향 서비스를 위한 디자인 시스템입니다.
- **3개 브랜드 테마**: JK (Blue-Indigo #1B55F6), AM (Orange #FF6D12), JP (Violet #8B5CF6)
- **2개 모드**: 라이트/다크
- 총 6개 테마 조합
- **다크/라이트 모드 컬러 로직** (Figma "status" 프레임 기준):
  - 팔레트 50~400 → 다크 모드에서 주로 사용 (밝은 색, 어두운 배경 위)
  - 팔레트 500 → 경계점 (라이트 모드 기본 primary)
  - 팔레트 600~950 → 라이트 모드에서 주로 사용 (진한 색, 밝은 배경 위)
  - 다크 모드 primary는 400 단계, 라이트 모드 primary는 500 단계를 사용

## 4. Biz JAMS (B2B)
비즈니스 관리 도구를 위한 디자인 시스템입니다.
- 단일 브랜드 (Blue 계열, Primitives보다 한 단계 진한 색상)
- 2개 모드: 라이트/다크
- B2B 전용 토큰: 사이드바 색상, 데이터 시각화 컬러

## 5. JAMS Core (Legacy)
레거시 프로덕트 호환을 위한 시스템입니다.
- **상태**: legacy — 신규 프로덕트에서는 사용 금지
- 2.1과의 차이점:
  - `color.text.default`가 gray.800 (2.1은 near-black #1A1A1E)
  - `color.text.secondary`가 gray.500 (2.1은 gray.600)
  - spacing은 sm/md/lg alias 사용 (2.1은 숫자 기반)
  - Button에 ghost variant 없음
  - Input에 filled variant 없음
  - Modal에 fullscreen variant 없음
  - border-radius가 전반적으로 작음 (sm vs md)

## 6. 토큰 계층 (3-Layer)

```
Primitive (primitives/)  → 순수 값: #3B82F6, 16px, 700
    ↓ 참조
Semantic (semantic.json) → 의미: color.primary, spacing.component.md
    ↓ 오버라이드
Theme (theme-*.json)     → 테마별: JK-Light의 primary = blue.500
```

### 참조 규칙
- 코드에서는 **Semantic 토큰만 사용** (color.primary, color.bg.surface 등)
- Primitive 토큰(color.blue.500)은 직접 참조하지 않음
- 테마 전환은 theme 파일 교체로 자동 적용
- Core 작업 시 `$deprecated` 토큰을 발견하면 마이그레이션 검토

## 7. 컴포넌트

| 컴포넌트 | 2.1 | Biz | Core | Core 차이점 |
|----------|-----|-----|------|-------------|
| Button | primary/secondary/ghost/danger | 동일 | ghost 없음 | radius.sm |
| Input | outlined/filled | 동일 | filled 없음 | radius.sm |
| Modal | sm/md/lg/fullscreen | 동일 | fullscreen 없음 | radius.md |
| Card | elevated/outlined/filled | 동일 | 동일 | - |
| Badge | filled/outlined/subtle | 동일 | 동일 | - |

## 8. 패턴

| 패턴 | 시스템 | 설명 |
|------|--------|------|
| Form Layout | 2.1, Biz, Core | 폼 입력 레이아웃 + 유효성 검사 |
| Navigation | 2.1, Biz | 탑바(B2C), 사이드바(B2B), 탭바(모바일) |
| Data Table | Biz | 정렬/필터/페이지네이션 테이블 |

## 9. Figma ↔ MD 동기화

```
Figma Variables  ←→  tokens/*.json (SSOT)  ←→  docs/*.md
```

- `npm run sync:figma-pull` — Figma에서 토큰 가져오기
- `npm run sync:figma-push` — 토큰을 Figma에 반영
- `npm run generate:md` — JSON에서 MD 문서 생성
- `npm run sync:md-push <file>` — MD 수정 내용을 JSON에 반영

## 10. 컬러 토큰 참조 가이드

코드 작성 시 아래 시맨틱 토큰을 사용하세요:

| 용도 | 토큰 |
|------|------|
| 주요 액션 배경 | `color.primary` |
| 주요 액션 텍스트 | `color.text.on-primary` |
| 페이지 배경 | `color.bg.base` |
| 카드/섹션 배경 | `color.bg.surface` |
| 떠 있는 요소 배경 | `color.bg.elevated` |
| 기본 텍스트 | `color.text.default` |
| 보조 텍스트 | `color.text.secondary` |
| 비활성 텍스트 | `color.text.disabled` |
| 기본 테두리 | `color.border.default` |
| 포커스 테두리 | `color.border.focus` |
| 에러 테두리 | `color.border.error` |
| 위험 액션 | `color.danger` |
| 성공 | `color.success` |
| 경고 | `color.warning` |
