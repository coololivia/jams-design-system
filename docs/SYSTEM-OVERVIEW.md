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
- **JAMS Core는 폐기됨**. CommJAMS로 대체. 참조 금지. (CLAUDE.md 디시전 로그 2026.04.02 확정)

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
  - **Violet**: #F5F3FF ~ #2E1065
  - ⚠ **JP 브랜드**: 컬러 미확정 — 새로 지정 예정
- 스페이싱 (4px 그리드 기반: 0~96px)
- 타이포그래피 (Pretendard, xs~5xl)
- 그림자 (sm, md, lg, xl)
- 모서리 반경 (none~full)
- 애니메이션 (fast 150ms, normal 250ms, slow 400ms)

## 3. JAMS 2.1 (B2C) — Canonical
소비자향 서비스를 위한 디자인 시스템입니다.
- **3개 브랜드 테마**: JK (Blue-Indigo #1B55F6), AM (Orange #FF6D12), JP (컬러 미확정 — 새로 지정 예정)
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

## 5. ~~JAMS Core~~ (폐기)
**폐기됨** — CommJAMS로 대체. 참조 금지. (2026.04.02 확정)

## 6. 토큰 계층 (3-Layer)

```
Primitive (primitives/)  → 순수 값: {color.blue2.500}, {spacing.16}, {radius.10}
    ↓ 참조
Semantic (semantic.json) → 의미: {color.bg.interactive}, {space.component.md}
    ↓ 오버라이드
Theme (theme-*.json)     → 테마별: {color.bg.interactive} → {color.blue2.500} (JK)
```

### 참조 규칙
- 코드에서는 **Semantic 토큰만 사용** (color.bg.interactive, color.text.primary 등)
- Primitive 토큰(color.blue2.500)은 직접 참조하지 않음
- 테마 전환은 theme 파일 교체로 자동 적용

## 7. 컴포넌트

| 컴포넌트 | 2.1 | Biz |
|----------|-----|-----|
| Button | filled/outlined/borderless + icon/text/filter/etc | 자체 정의 |
| Input | outlined/filled | 동일 |
| Modal | sm/md/lg/fullscreen | 동일 |
| Card | elevated/outlined/filled | 동일 |
| Badge | filled/outlined/subtle | 동일 |

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
| 주요 액션 배경 | `color.bg.interactive` |
| 주요 액션 텍스트 | `color.text.inverse` |
| 페이지 배경 | `color.bg.base` |
| 카드/섹션 배경 | `color.bg.surface` |
| 떠 있는 요소 배경 | `color.bg.elevated` |
| 기본 텍스트 | `color.text.primary` |
| 보조 텍스트 | `color.text.secondary` |
| 비활성 텍스트 | `color.text.disabled` |
| 기본 테두리 | `color.border.default` |
| 포커스 테두리 | `color.border.focus` |
| 에러 테두리 | `color.border.danger` |
| 위험 텍스트 | `color.text.danger` |
| 성공 텍스트 | `color.text.success` |
| 경고 | `color.status.warning` |
