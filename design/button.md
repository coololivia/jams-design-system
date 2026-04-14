# Button

3가지 variant × 4가지 size × 3가지 state. 아이콘은 좌/우 독립 토글 가능.

## Variants

| Variant | Background | Border | Text Color | 용도 |
|---------|-----------|--------|------------|------|
| **Primary** | `fill/brand` (#1B55F6) | 없음 | `typography/inverse` (white) | 가장 눈에 띄는 CTA — 브랜드 컬러 버튼 |
| **Secondary** | `fill/brand-subtle` (#EEF3FF) | 1px solid `border/brand` (#82AAFF) | `typography/brand` (#1B55F6) | 보조 액션, 부가 CTA |
| **Monoline** | `fill/default` (white) | 1px solid `border/default` (#D1D6DA) | `typography/default` (#131618) | 가장 낮은 시각적 무게, 중립 액션 |

## Sizes

| Size | Height | Padding H | Gap | Radius | Font | Icon Size |
|------|--------|-----------|-----|--------|------|-----------|
| 52 | 52px | `unit-16` (16px) | `spacing-1` (4px) | `brand-md` (JK:10px / AM:16px) | Body/base 16px **semibold** | 16px |
| 48 | 48px | `unit-16` (16px) | `spacing-1` (4px) | `brand-md` (JK:10px / AM:16px) | Body/base 16px **semibold** | 16px |
| 40 | 40px | `spacing-3` (12px) | `spacing-1` (4px) | `md` (10px) | Body/xs 14px **medium** | 14px |
| 32 | 32px | `spacing-2` (8px) | `spacing-0.5` (2px) | `brand-sm` (JK:8px / AM:10px) | Caption/lg 13px **medium** | 14px |

## States

| State | Primary | Secondary | Monoline |
|-------|---------|-----------|----------|
| **Default** | `fill/brand` 단색 | `fill/brand-subtle` + `border/brand` | `fill/default` + `border/default` |
| **Hover** | `fill/brand` + rgba(22,22,24, **0.12**) 오버레이 | `fill/brand-subtle` + rgba(22,22,24, **0.04**) 오버레이 | `fill/default` + rgba(22,22,24, **0.12**) 오버레이 |
| **Disabled** | bg=`fill/surface-raised` (#E2E6E8), text=`typography/inverse` | bg=`fill/default`, border=`border/subtle` (#E2E6E8), text=`typography/disabled` (#9EA8AF) | bg=`fill/default`, border=`border/subtle` (#E2E6E8), text=`typography/disabled` (#9EA8AF) |

## Icon 구성
- `iconLeft`, `iconRight`: 각각 독립 토글 (true/false)
- 아이콘 없이 텍스트만, 좌측만, 우측만, 양쪽 모두 가능
