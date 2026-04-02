# D-Button

JAMS 2.1 기본 버튼. 10 variants × 4 states × 4 sizes = 160 조합.

## Props

| Prop | Type | Values | Default |
|------|------|--------|---------|
| `variant` | enum | button.filled.primary, button.filled.brand, button.filled.brand-dim, button.filled.subtle, button.outlined.default, button.outlined.brand, button.outlined.pill, button.borderless.default, button.borderless.pill, button.borderless.subtle | button.filled.primary |
| `state` | enum | default, D-hover, disabled, loading | default |
| `size` | enum | lg(52), md(48), sm(40), xs(32) | lg |
| `D-leftIcon` | boolean | — | true |
| `label` | string | — | 버튼명 |
| `D-rightIcon` | boolean | — | true |

## Size Specs

| Size | Height | Padding | Gap | Radius JK | Radius AM | Font |
|------|--------|---------|-----|-----------|-----------|------|
| lg | 52px | 14/16 | 6 | 10 | 16 | 16px (b2) |
| md | 48px | 12/14 | 6 | 10 | 16 | 16px (b2) |
| sm | 40px | 10/12 | 4 | 10 | 12 | 14px (b4) |
| xs | 32px | 0/10  | 4 | 6  | 8  | 13px (c1) |

## 토큰 매핑

### filled

| Property | Token |
|----------|-------|
| bg | `color.bg.interactive` |
| text | `color.icon.inverse` |
| bg-hover | `color.bg.interactive-hover` |
| bg-disabled | `color.bg.interactive-disabled` |
| text-disabled | `color.text.disabled` |

### outlined

| Property | Token |
|----------|-------|
| bg | `color.bg.base` |
| border | `color.border.default` |
| text | `color.text.primary` |
| bg-hover | `color.bg.surface` |
| text-disabled | `color.text.disabled` |

### borderless

| Property | Token |
|----------|-------|
| bg | `color.bg.base` |
| text | `color.text.primary` |
| bg-hover | `color.bg.surface` |
| text-disabled | `color.text.disabled` |

## States

- **default**: variant 토큰 그대로 적용
- **D-hover**: 동일 토큰명, Figma Variable Mode가 hover 값으로 자동 resolve (opacity 아님)
- **disabled**: 토큰 교체. bg → `color.bg.interactive-disabled`, text → `color.text.disabled`
- **loading**: bg 유지, label 숨김, `system-loading 20×20` 스피너로 대체

## 접근성

- Role: `button`
- Keyboard: Enter, Space
- disabled → `aria-disabled`, loading → `aria-busy`
- iconOnly → `aria-label` 필수
