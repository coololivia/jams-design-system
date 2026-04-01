# JAMS Core (Legacy Compat Layer)

> 자동 생성 파일입니다.

**상태: Legacy** — JAMS 2.1이 canonical입니다. Core는 레거시 프로덕트 호환을 위해 유지됩니다.

Core를 직접 사용하는 프로덕트는 점진적으로 2.1로 마이그레이션하세요.

## Semantic Tokens

### color

| Token | Value | Type | Status |
|-------|-------|------|--------|
| `color.primary` | `{color.jk.500}` | color | active |
| `color.primary-hover` | `{color.jk.600}` | color | active |
| `color.secondary` | `{color.gray.500}` | color | active |
| `color.danger` | `{color.red.500}` | color | active |
| `color.warning` | `{color.yellow.500}` | color | active |
| `color.success` | `{color.green.500}` | color | active |
| `color.bg.base` | `{color.white}` | color | active |
| `color.bg.surface` | `{color.gray.50}` | color | active |
| `color.bg.elevated` | `{color.white}` | color | active |
| `color.bg.overlay` | `rgba(0,0,0,0.5)` | color | active |
| `color.text.default` | `{color.gray.800}` | color | ⚠ deprecated: 2.1에서는 near-black(#1A1A1E) 사용 |
| `color.text.secondary` | `{color.gray.500}` | color | ⚠ deprecated: 2.1에서는 gray.600 사용 |
| `color.text.disabled` | `{color.gray.300}` | color | active |
| `color.text.on-primary` | `{color.white}` | color | active |
| `color.text.link` | `{color.blue.500}` | color | active |
| `color.border.default` | `{color.gray.200}` | color | active |
| `color.border.focus` | `{color.blue.500}` | color | active |

### spacing

| Token | Value | Type | Status |
|-------|-------|------|--------|
| `spacing.xs` | `{spacing.1}` | dimension | ⚠ deprecated: 2.1에서는 spacing.1 직접 참조 |
| `spacing.sm` | `{spacing.2}` | dimension | ⚠ deprecated: 2.1에서는 spacing.2 직접 참조 |
| `spacing.md` | `{spacing.4}` | dimension | ⚠ deprecated: 2.1에서는 spacing.4 직접 참조 |
| `spacing.lg` | `{spacing.6}` | dimension | ⚠ deprecated: 2.1에서는 spacing.6 직접 참조 |
| `spacing.xl` | `{spacing.8}` | dimension | ⚠ deprecated: 2.1에서는 spacing.8 직접 참조 |

## Component Overrides

Core에서 2.1과 다르게 동작하는 컴포넌트 스펙:

### button

Core Button은 2.1보다 border-radius가 작고, ghost variant 없음

| Token | Value | Type |
|-------|-------|------|
| `border-radius` | `{radius.sm}` | dimension |

### input

Core Input은 filled variant 없음 (outlined만)

| Token | Value | Type |
|-------|-------|------|
| `border-radius` | `{radius.sm}` | dimension |

### modal

Core Modal은 fullscreen variant 없음

| Token | Value | Type |
|-------|-------|------|
| `border-radius` | `{radius.md}` | dimension |

