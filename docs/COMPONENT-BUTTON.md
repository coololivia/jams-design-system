# Component: Button

> Figma 페이지: **Button** (`73:251`)
> 연결 문서: [DESIGN.md](../DESIGN.md) — Section 4 (Buttons)
> 토큰 파일: `tokens/jams-2.1/component.button.tokens.json`

## Overview

JAMS 디자인 시스템의 범용 버튼 컴포넌트. 3가지 변형(variant), 4가지 크기(size), 3가지 상태(state)를 지원하며, 아이콘 좌/우 배치 옵션을 제공한다.

## Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| `variant` | enum | `primary`, `secondary`, `monoline` | `primary` |
| `size` | enum | `52`, `48`, `40`, `32` | `52` |
| `state` | enum | `default`, `hover`, `disabled` | `default` |
| `iconLeft` | boolean | `true`, `false` | `true` |
| `iconRight` | boolean | `true`, `false` | `true` |

## Variants

### Primary

가장 강한 시각적 무게의 CTA 버튼. 화면 당 1개 권장.

| Token | Value |
|-------|-------|
| Background | `fillBrand` (Brand/500) |
| Text Color | `typographyInverse` (white on light, black on dark) |
| Font | Pretendard semibold (600), Body/base (16px) |
| Border | none |
| Radius | `brand-sm` (JK: 8px / AM: 10px) |

**State: hover**
- Background: `fillBrandHover` (Brand/700)

**State: disabled**
- Background: `fillDisabled` (Gray/100)
- Text: `typographyDisabled` (Gray/400)
- opacity 적용 또는 Gray 톤 다운

### Secondary

보조 액션, 취소 버튼. Primary와 함께 사용 시 시각적 위계 형성.

| Token | Value |
|-------|-------|
| Background | `fillSurface` (Gray/50 light / Gray/950 dark) |
| Text Color | `typographyDefault` |
| Font | Pretendard semibold (600), Body/base (16px) |
| Border | 1px solid `borderDefault` |
| Radius | `sm` (8px) |

**State: hover**
- Background: `fillSurfaceHover`
- Border: 1px solid `borderStrong`

**State: disabled**
- Background: `fillDisabled`
- Text: `typographyDisabled`
- Border: 1px solid `borderSubtle`

### Monoline

가장 낮은 시각적 무게. 텍스트만으로 액션을 표현.

| Token | Value |
|-------|-------|
| Background | transparent |
| Text Color | `typographyBrand` (Brand/500) |
| Font | Pretendard semibold (600), Body/base (16px) |
| Border | none |
| Radius | `sm` (8px) |

**State: hover**
- Text: `typographyBrandHover` (Brand/700)

**State: disabled**
- Text: `typographyDisabled` (Gray/400)

## Sizes

| Size | Height | Padding (V × H) | Font Size | Icon Size | 용도 |
|------|--------|------------------|-----------|-----------|------|
| 52 | 52px | spacing-3 (12px) × spacing-4 (16px) | 16px (Body/base) | 20px | 주요 CTA, 모달 확인 |
| 48 | 48px | spacing-3 (12px) × spacing-4 (16px) | 16px (Body/base) | 20px | 표준 버튼 (터치 최소 크기) |
| 40 | 40px | spacing-2 (8px) × spacing-3 (12px) | 15px (Body/sm) | 18px | 보조 버튼, 카드 내 액션 |
| 32 | 32px | spacing-1 (4px) × spacing-2 (8px) | 14px (Body/xs) | 16px | 인라인 버튼, 테이블 내 액션 |

## Icon Layout

아이콘은 좌측, 우측, 또는 양쪽에 배치 가능.

- `iconLeft: true` — 텍스트 좌측에 아이콘 배치
- `iconRight: true` — 텍스트 우측에 아이콘 배치
- 아이콘↔텍스트 간격: **spacing-1** (4px)
- 아이콘 없이 텍스트만도 가능 (`iconLeft: false, iconRight: false`)

## Usage Rules

1. **Primary는 화면 당 1개**: 가장 중요한 액션에만 사용
2. **최소 터치 타겟 48px**: size 32는 데스크톱 전용. 모바일에서는 size 48 이상 사용
3. **버튼 텍스트는 동사형**: "저장", "검색", "다음" 등 명확한 액션 표현
4. **Brand Radius 적용**: primary 버튼은 `brand-sm` 토큰으로 JK/AM 테마 자동 전환
5. **disabled 시 인터랙션 차단**: 클릭 불가, 커서 not-allowed

## Do / Don't

### Do
- Primary + Secondary 조합으로 시각적 위계 만들기
- 아이콘은 버튼 액션을 보강하는 용도로 사용
- 로딩 시 disabled + 로딩 아이콘 표시

### Don't
- Primary 버튼 2개를 나란히 배치하지 말 것
- 버튼 텍스트에 명사만 쓰지 말 것 (예: "설정" 대신 "설정하기" 또는 맥락에 맞는 동사)
- Monoline 버튼을 단독 CTA로 사용하지 말 것
