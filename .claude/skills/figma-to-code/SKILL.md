---
name: figma-to-code
description: "Figma 디자인을 JAMS 디자인 시스템 기반 코드로 변환하는 스킬. design/*.md 문서를 자동 참조하여 시맨틱 토큰, 컴포넌트 스펙, 아이콘을 정확하게 매핑. 사용 시점: (1) Figma URL이 포함된 메시지, (2) '피그마', 'figma' 관련 코드 생성 요청, (3) UI 컴포넌트 구현 요청."
argument-hint: '[figma-url]'
---

# Figma to Code (JAMS Design System)

Figma 디자인 URL을 입력받아 JAMS 디자인 시스템 토큰 기반 코드를 생성한다.

## 호출 방법

```
/figma-to-code https://www.figma.com/design/{file-key}/{file-name}?node-id={node-id}
/figma-to-code  # URL 없으면 입력 요청
```

---

## Phase 0: 준비

### 0.1 Figma URL 파싱

```
URL: https://www.figma.com/design/{fileKey}/{fileName}?node-id={nodeId}
Branch URL: https://www.figma.com/design/{fileKey}/branch/{branchKey}/{fileName} → branchKey를 fileKey로 사용
```

전달된 인자: `$ARGUMENTS`

- URL이 없으면 AskUserQuestion으로 입력 요청
- `node-id`의 `-`는 `:`로 변환하여 사용

### 0.2 디자인 시스템 문서 로드

**반드시** 아래 문서를 Read 도구로 읽는다. 이 문서들이 토큰 변환의 기준이다:

| 문서 | 경로 | 용도 |
|------|------|------|
| 인덱스 | `DESIGN.md` | 전체 개요, Do/Don't, Agent Guide |
| Color | `design/colors.md` | 컬러 팔레트, Brand/Gray/System |
| Typography | `design/typography.md` | 서체, Size Hierarchy |
| Spacing & Radius | `design/spacing-radius.md` | 스페이싱, Border Radius |
| Icon | `design/icon.md` | 아이콘 인벤토리, 사이즈 스케일 |
| Button | `design/button.md` | 버튼 스펙 |
| Controls | `design/controls.md` | Checkbox, Radio, Check |
| Input | `design/input.md` | Textfield 스펙 |
| Select | `design/select.md` | Select Box 스펙 |

구현 대상에 따라 필요한 문서만 선택적으로 읽는다:
- **컬러/배경 관련** → colors.md
- **텍스트 스타일** → typography.md
- **레이아웃/간격** → spacing-radius.md
- **아이콘 사용** → icon.md
- **특정 컴포넌트** → 해당 컴포넌트 md 파일

---

## Phase 1: 분석

### 1.1 스크린샷 + 디자인 컨텍스트 동시 조회

```
ToolSearch: query="select:mcp__plugin_figma_figma__get_design_context,mcp__plugin_figma_figma__get_screenshot"

# 병렬 호출
mcp__plugin_figma_figma__get_screenshot({ fileKey, nodeId })
mcp__plugin_figma_figma__get_design_context({ fileKey, nodeId })
```

### 1.2 응답이 너무 크거나 truncated된 경우

```
ToolSearch: query="select:mcp__plugin_figma_figma__get_metadata"
mcp__plugin_figma_figma__get_metadata({ fileKey, nodeId })
```

메타데이터에서 자식 노드 ID를 확인 후, 개별 노드에 대해 `get_design_context`를 재호출한다.

### 1.3 분석 결과 정리

```markdown
## 분석 결과

### 컴포넌트 정보
- 이름: {name}
- 크기: {width} x {height}
- Variants: {variants}

### 사용된 디자인 토큰
| 카테고리 | Figma 값 | JAMS 시맨틱 토큰 |
|----------|----------|-----------------|
| 배경색 | #1B55F6 | fill/brand (brand500) |
| 텍스트 | #131618 | typography/default |
| 보더 | #D1D6DA | border/default |
```

---

## Phase 2: 토큰 매핑

Figma에서 추출한 값을 JAMS 시맨틱 토큰으로 변환한다. **hex 하드코딩 금지**.

### 2.1 컬러 매핑 (colors.md 기준)

**Brand 컬러** — JK/AM 테마 전환되므로 반드시 토큰명 사용:

| Figma Hex | JAMS 토큰 | 비고 |
|-----------|-----------|------|
| `#1B55F6` (JK) / `#FF6D12` (AM) | `fill/brand` | Primary CTA |
| `#EEF3FF` (JK) / `#FFF6EE` (AM) | `fill/brand-subtle` | 서브틀 배경 |
| `#82AAFF` (JK) / `#FFAB5E` (AM) | `border/brand` | 브랜드 보더 |

**Gray (Light/Dark 비대칭 페어):**

| Figma Hex | Light 토큰 | Dark 토큰 |
|-----------|-----------|-----------|
| `#FFFFFF` | `background/default` | — |
| `#131618` | `typography/default` | `background/default` |
| `#F4F6F7` | `fill/surface` | `typography/default` |
| `#D1D6DA` | `border/default` | `typography/secondary` |
| `#86919A` | `typography/subtle` | `typography/subtle` |
| `#E2E6E8` | `border/subtle` | — |
| `#30363C` | `typography/secondary` | `border/default` |

**System 컬러 — 상태 전용:**

| Figma Hex | 토큰 | 용도 |
|-----------|------|------|
| `#F22A23` | `border/danger`, `typography/error` | 에러 |
| `#02B160` | `icon/success` | 성공 |
| `#2684FF` | `icon/info` | 정보 |
| `#FFBB00` | `icon/warning` | 경고 |

### 2.2 타이포그래피 매핑 (typography.md 기준)

서체는 오직 **Pretendard**. fontSize + fontWeight 조합으로 역할을 매핑:

| Figma Size/Weight | JAMS 역할 | 용도 |
|-------------------|-----------|------|
| 32px / 700 | Heading/xl | 페이지 타이틀 |
| 28px / 700 | Heading/lg | 섹션 타이틀 |
| 24px / 700 | Heading/base | 카드 제목 |
| 20px / 600 | Heading/sm | 소제목, 모달 타이틀 |
| 18px / 600 | Heading/xs | 리스트 제목 |
| 17px / 400 | Body/lg | 인트로 단락 |
| 16px / 400 | Body/base | 기본 본문, 버튼 |
| 15px / 400 | Body/sm | 보조 본문 |
| 14px / 400 | Body/xs | 메타데이터 |
| 13px / 500 | Caption/lg | 캡션 |
| 12px / 500 | Caption/base | 가장 작은 본문 |
| 11px / 600 | Micro/size11 | 배지 전용 |

**letter-spacing 규칙:**
- Heading (32~24px): `-0.5px` (tight)
- Body/Caption: `0px` (normal)
- Caption (13~12px): `0.2px` (wide)

### 2.3 스페이싱 매핑 (spacing-radius.md 기준)

Figma의 padding/gap/margin을 가장 가까운 토큰으로 변환. **보간 금지**.

| Figma 값 | JAMS 토큰 |
|----------|-----------|
| 2px | spacing-0.5 |
| 4px | spacing-1 |
| 8px | spacing-2 |
| 12px | spacing-3 |
| 16px | spacing-4 |
| 20px | spacing-5 |
| 24px | spacing-6 |
| 32px | spacing-8 |
| 48px | spacing-12 |
| 64px | spacing-16 |

### 2.4 Border Radius 매핑

| Figma 값 | JAMS 토큰 | 비고 |
|----------|-----------|------|
| 4px | xs | 태그, 배지 |
| 8px | sm | — |
| 10px | md | 카드, 컨테이너 |
| 16px | lg | 대형 카드, 모달 |
| 24px | xl | 피처 섹션 |
| 996px | full | pill |
| JK:10px / AM:16px | brand-md | 버튼 52/48 |
| JK:8px / AM:10px | brand-sm | 버튼 32 |

### 2.5 아이콘 매핑 (icon.md 기준)

1. Figma 아이콘 이름 → icon.md 인벤토리에서 정확한 `{name}-line` 또는 `{name}-fill` 매칭
2. 사이즈는 **8단계만 허용**: 12, 14, 16, 18, 20, 24, 32, 48px
3. 컬러는 시맨틱 Icon 토큰 사용: `iconDefault`, `iconBrand`, `iconDanger` 등

### 2.6 기존 컴포넌트 매칭

Figma 컴포넌트가 JAMS에 이미 정의된 컴포넌트와 일치하면 해당 md 스펙을 따른다:

| Figma 컴포넌트 | 참조 문서 |
|---------------|-----------|
| Button (Primary/Secondary/Monoline) | design/button.md |
| Textfield / Input | design/input.md |
| Checkbox / Radio / Check | design/controls.md |
| Select / Dropdown | design/select.md |
| TagMoney / Badge | DESIGN.md §5 Tags & Badges |
| Card | DESIGN.md §2 Cards & Containers |
| Status Indicator | DESIGN.md §3 Status Indicators |
| Navigation Tab | DESIGN.md §4 Navigation |

---

## Phase 3: 코드 생성

### 3.1 AskUserQuestion으로 확인

```
질문: 코드 생성 설정을 확인합니다.
  1. 프레임워크: React / Vue / HTML+CSS / 기타
  2. 스타일링: CSS Variables / Tailwind / styled-components / 기타
  3. 파일 경로: 컴포넌트를 생성할 위치
```

### 3.2 코드 작성 규칙

1. **시맨틱 토큰 사용** — hex 하드코딩 절대 금지. CSS Variable이면 `var(--color-bg-default)`, Tailwind이면 설정된 토큰 클래스 사용
2. **Light/Dark 양쪽 지원** — 시맨틱 토큰을 쓰면 자동 지원됨. 특정 모드 분기 필요 시 `data-mode` 속성 활용
3. **JK/AM 브랜드 전환 지원** — brand 토큰을 쓰면 자동 전환. `data-brand` 속성으로 분기
4. **Pretendard 단일 서체** — 다른 폰트 사용 금지
5. **4px 그리드 준수** — 모든 간격은 spacing 토큰 사용
6. **아이콘은 프로젝트 에셋 참조** — SVG를 임의 생성하지 않음. icon.md 인벤토리의 이름으로 참조
7. **brand-radius 토큰** — 버튼 등 브랜드 컴포넌트는 고정 px 대신 brand-radius 토큰 사용

### 3.3 CSS Variable 방식 예시

```css
/* 시맨틱 토큰을 CSS Variable로 사용 */
.card {
  background: var(--color-bg-default);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-md);       /* 10px */
  padding: var(--spacing-6);             /* 24px */
}

.card-title {
  font-family: 'Pretendard', sans-serif;
  font-size: 18px;                       /* Heading/xs */
  font-weight: 600;                      /* semibold */
  line-height: 24px;
  color: var(--color-text-default);
}
```

### 3.4 컴포넌트 파일 생성

Write 도구로 파일을 생성한다. 주석과 에러 메시지는 한국어로 작성한다.

---

## Phase 4: 검증

### 4.1 토큰 검증 체크리스트

- [ ] hex 하드코딩 없음 — 모든 색상이 시맨틱 토큰 참조
- [ ] 정의된 spacing 토큰만 사용 (17개 이산 값)
- [ ] 정의된 radius 토큰만 사용
- [ ] 아이콘 사이즈가 8단계(12~48px) 중 하나
- [ ] 타이포그래피가 Size Hierarchy 11단계 중 하나
- [ ] Pretendard 외 다른 서체 없음

### 4.2 디자인 시스템 Do/Don't 검증

DESIGN.md §9 Do's and Don'ts 기준으로 최종 검증:

**위반 시 즉시 수정:**
- `#000000` 사용 → `#131618` (시스템 black)
- Brand/500 대면적 배경 → brand-subtle 토큰
- 시스템 컬러(Red/Blue/Green/Yellow)를 장식 목적 사용
- 보더 없이 그림자만으로 깊이 표현

### 4.3 완료 요약

```markdown
## Figma to Code 완료

### 생성 파일
| 파일 | 경로 |
|------|------|
| 컴포넌트 | {파일 경로} |

### 사용된 JAMS 토큰
| 카테고리 | 토큰 |
|----------|------|
| Color | fill/brand, typography/default, ... |
| Typography | Heading/xs, Body/base, ... |
| Spacing | spacing-4, spacing-6, ... |
| Radius | md, brand-md, ... |
| Icon | search-line (24px), ... |

### 검증 결과
- hex 하드코딩: 없음
- Light/Dark 지원: 시맨틱 토큰으로 자동 지원
- JK/AM 전환: brand 토큰으로 자동 지원
```

---

## 주의사항

- `get_design_context`가 반환하는 코드는 **참조용**이며, 반드시 JAMS 시맨틱 토큰으로 변환해야 한다
- 아이콘/SVG 등 디자인 자산을 임의로 생성하지 않는다 — 프로젝트 파일 참조
- `#000000` 순흑 사용 금지 — 시스템 black은 `#131618`
- 시스템 컬러(Red, Green, Blue, Yellow)는 상태 전달 전용
- brand-radius가 있는 곳에 고정 px 사용 금지
