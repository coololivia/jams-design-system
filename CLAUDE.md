# JAMS Design System

이 프로젝트는 JAMS 디자인 시스템의 토큰, 컴포넌트 스펙, 패턴을 관리합니다.

## 시스템 구성

| 시스템 | 용도 | 상태 | 테마 | Color | Space/Radius/Component |
|--------|------|------|------|-------|------------------------|
| **Shared Primitives** | 전체 공유 raw 값 | 2.1이 소유 | 없음 | 정의 | 정의 |
| **JAMS 2.1** | B2C canonical | **정본** | JK/AM/JP × light/dark | **소유·정의** | **소유·정의** |
| **BizJAMS** | B2B | active | light/dark | 2.1 **상속** | **자체 정의** |
| **CommJAMS** | 커뮤니티·파트너·임베디드 | active | JK Light / AM Light | 2.1 **상속** | 2.1 **그대로** (서브셋) |
| ~~JAMS Core~~ | ~~레거시 호환~~ | **폐기** | — | — | — |

### 시스템 간 관계

```
Shared Primitives (color.*, spacing.*, radius.*)
        │
        ▼
   JAMS 2.1  ─────────────────────────────────────┐
   Color + Space 정의 소유                          │
   B2C 전체 컴포넌트 세트                            │ 상속
        │                                          │
        ├──────────────────────┐                   │
        ▼                      ▼                   ▼
    BizJAMS               CommJAMS
    Color: 2.1 상속        Color: 2.1 상속
    Space/Radius: 자체      Space/Radius: 2.1 그대로
    Component: 자체         Component: 2.1 서브셋
    테마: blue.600 primary  테마: JK Light 단일
```

### 소유 규칙
- **Color** — JAMS 2.1이 정의. BizJAMS/CommJAMS는 `$extends`로 상속 후 brand 색상만 override
- **Space** — JAMS 2.1이 정의. BizJAMS는 데스크톱 밀도에 맞게 자체 스케일 사용. CommJAMS는 2.1 그대로
- **Radius** — JAMS 2.1이 정의. BizJAMS는 더 각진(보수적) radius 사용. CommJAMS는 2.1 그대로
- **Component** — JAMS 2.1이 정의. BizJAMS는 자체 정의. CommJAMS는 2.1 서브셋만 허용
- **JP 브랜드 컬러** — 미확정. placeholder로 비워둠. Green은 JP 아님 (success 상태용)

---

## 토큰 계층 (DTCG 표준)

```
1. Primitive   tokens/primitives/primitives.tokens.json
               color.blue2.500 / spacing.16 / radius.10

2. Semantic    tokens/{system}/semantic.tokens.json
               color.bg.interactive / color.text.brand
               space.component.md / radius.component.md

3. Theme       tokens/{system}/theme-{brand}-{mode}.tokens.json
               color.bg.interactive → blue2.500 (JK) or orange.500 (AM)

4. Component   tokens/{system}/component.{name}.tokens.json
               button.filled.primary.lg
```

---

## 파일 구조

```
tokens/
  primitives/
    primitives.tokens.json          ← raw 값 전체 (color 8팔레트, spacing, radius, typography)

  jams-2.1/
    semantic.tokens.json            ← Color + Space + Radius semantic 정의 (light base)
    semantic-dark.tokens.json       ← Dark Mode neutral overrides (bg/text/border/icon 12개)
    component.button.tokens.json    ← 버튼 component 토큰 전체
    theme-jk.tokens.json            ← JK brand light (blue2, radius 10/6)
    theme-jk-dark.tokens.json       ← JK brand dark overrides (brand 계열만 ~10개)
    theme-am.tokens.json            ← AM brand light (orange, radius 16/12/8)
    theme-am-dark.tokens.json       ← AM brand dark overrides (brand 계열만 ~10개)
    theme-jp-light.tokens.json      ← JP (미확정 placeholder)
    theme-jp-dark.tokens.json

  biz-jams/
    semantic.tokens.json            ← Color: 2.1 상속 + B2B 전용(sidebar/data viz) 추가
                                      Space/Radius: 데스크톱 밀도용 자체 정의
    theme-light.tokens.json         ← blue.600 override (Biz primary)
    theme-dark.tokens.json

  comm-jams/
    semantic.tokens.json            ← Color/Space/Radius: 2.1 그대로
                                      component.allowed 목록만 명시
    theme-jk.tokens.json            ← JK Light (2.1 theme-jk 상속)
    theme-am.tokens.json            ← AM Light (2.1 theme-am 상속)
```

---

## 핵심 규칙

- 색상/간격/폰트를 하드코딩하지 말 것. 항상 시맨틱 토큰 참조
- 신규 B2C 개발 → **JAMS 2.1** 토큰 기준
- 신규 B2B 개발 → **BizJAMS** 토큰 기준 (color는 2.1 semantic 참조)
- 파트너/커뮤니티 제품 → **CommJAMS** `component.allowed` 목록 내에서만
- JAMS Core는 폐기됨. 참조 금지
- 컴포넌트 구현 시 해당 `.spec.json`의 props, states, accessibility 준수
- 접근성(WCAG 2.1 AA) 항상 준수

---

## 버튼 토큰 네이밍 (DTCG, 2026.04.02 확정)

패턴: `button.{군}.{variant}.{size}`
size: `lg`(52px) / `md`(48px) / `sm`(40px) / `xs`(32px)

| 군 | variants |
|---|---|
| `button.filled` | `primary` · `brand` · `brand-dim` · `subtle` |
| `button.outlined` | `default` · `brand` · `pill` |
| `button.borderless` | `default` · `pill` · `subtle` |
| `button.icon` | `primary` · `brand` · `outlined` · `circle` · `borderless` · `dark` |
| `button.iconlabel` | `lg` · `sm` · `no` — 아이콘+텍스트 세로형 (no = label 없음, IconOnly) |
| `button.emojilabel` | (variant 없음, size만) `lg` · `sm` — 이모지+텍스트 세로형 |
| `button.emoji` | (variant 없음, size만) `lg` · `sm` — 이모지+텍스트 가로형 pill |
| `button.text` | `brand` · `primary` · `secondary` · `link` |
| `button.filter` | `item` · `icon-text` · `icon-only` |
| `button.floating` | (size 없음) |
| `button.search` | `lg` · `sm` |
| `button.top` | (size 없음) |

이전 이름 → 새 이름 대조:
`theme-primary` → `button.filled.primary` /
`theme-brand50` → `button.filled.subtle` /
`theme-rounded` → `button.outlined.pill` /
`borderless-brand50` → `button.borderless.subtle`

---

## 디시전 로그

### 시스템 아키텍처 (2026.04.02)
- **JAMS Core 폐기** — CommJAMS로 대체
- **CommJAMS** = JAMS 2.1 경량 서브셋. JK Light / AM Light 테마, component.allowed 목록으로 사용 컴포넌트 제한
- **BizJAMS** = Color는 2.1 상속, Space/Radius/Component는 B2B 독자 정의
- **Color·Space 소유권** = JAMS 2.1. 다른 시스템은 상속 후 필요 부분만 override
- **JP 브랜드 컬러 미확정** — 새로 지정 예정. Green은 JP 아님 (success 상태용)
- **DTCG 토큰 네이밍** 전면 채택 (`theme-*` prefix 제거)
- **Figma ↔ 토큰 동기화** 양방향 (`figma-push`, `figma-pull`). API 토큰은 팀 확인 후 연결 예정

### 컬러 토큰
- 팔레트 8개 × 11단계(50~950) = 88색. JAMS 2.1 Figma 실제 hex
- JK = `color.blue2.500` (#1B55F6) / AM = `color.orange.500` (#FF6D12) / JP = 미확정
- BizJAMS primary = `color.blue.600` (#0060CC) — blue2가 아닌 blue 팔레트 사용

### 토큰 레이어 적용 순서 (CSS 빌드 기준)
```
:root                                    semantic.tokens.json (light neutral)
[data-mode="dark"]                       semantic-dark.tokens.json (neutral override)
[data-brand="jk"]                        theme-jk.tokens.json (brand light)
[data-mode="dark"][data-brand="jk"]      theme-jk-dark.tokens.json (brand dark)
[data-brand="am"]                        theme-am.tokens.json
[data-mode="dark"][data-brand="am"]      theme-am-dark.tokens.json
```
→ Dark mode = mode 플립만으로 동작. neutral 토큰은 semantic-dark 하나로 JK/AM 공유.

### 버튼 컴포넌트 — State 규칙
- **hover**: 토큰명 동일, Figma Variable Mode가 더 진한 값으로 resolve
- **disabled**: opacity 방식 아님 — bg/text 토큰 자체 교체 (`color.bg.interactive-disabled`, `color.text.disabled`)
- **loading**: bg 유지, label 숨김, spinner(`system-loading 20×20`) 대체. D-Button에만 있음
- **dark mode**: Component Variable Mode. 별도 토큰 불필요
- **JK/AM 테마**: 동일 시맨틱 → Theme Variable Mode에 따라 자동 resolve

### 버튼 컴포넌트 — D-Button Spec
- Radius: JK lg/md/sm=10px, xs=6px / AM lg/md=16px, sm=12px, xs=8px
- fontSize: lg/md=16px(b2), sm=14px(b4), xs=13px(c1)
- leftIcon: lg/md=20px, sm/xs=16px. rightIcon=14px 고정

### Figma 구조
- Button 페이지 12개 섹션
- 4블록 레이아웃: 가로=무게(Heavy/Light), 세로=테마(JK/AM)
- Ready for dev 패널 검색으로 컴포넌트 탐색

### 뷰어 & 문서
- GitHub Pages (`/docs`): https://coololivia.github.io/jams-design-system/
- 뷰어 버튼 클릭 → 토큰명 복사
- GitHub Discussions: 팀 공유용. MD 파일은 Claude Code용 SSOT

---

## NPM 스크립트

```bash
npm run validate        # 토큰 참조 무결성 검증
npm run generate:md     # JSON → MD 자동 생성
npm run sync:figma-push # JSON → Figma Variables 푸시
npm run sync:figma-pull # Figma Variables → JSON 풀
```
