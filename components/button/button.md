# Button

> 자동 생성된 기본 구조입니다. 수동 보강 가능합니다.

## 사용 시스템

- jams-core
- jams-2.1
- biz-jams

## Props

| Prop | Type | Values | Default |
|------|------|--------|---------|
| `variant` | enum | primary, secondary, ghost, danger | primary |
| `size` | enum | sm, md, lg | md |
| `disabled` | boolean | boolean | false |
| `loading` | boolean | boolean | false |
| `fullWidth` | boolean | boolean | false |
| `iconLeft` | ReactNode | ReactNode | - |
| `iconRight` | ReactNode | ReactNode | - |

## 토큰 매핑

### primary

| Property | Token |
|----------|-------|
| bg | `{color.primary}` |
| bg-hover | `{color.primary-hover}` |
| bg-active | `{color.primary-active}` |
| text | `{color.text.on-primary}` |
| border-radius | `{radius.md}` |
| padding-x | `{spacing.4}` |
| padding-y | `{spacing.2}` |

### secondary

| Property | Token |
|----------|-------|
| bg | `transparent` |
| border | `{color.border.default}` |
| text | `{color.text.default}` |
| border-radius | `{radius.md}` |
| padding-x | `{spacing.4}` |
| padding-y | `{spacing.2}` |

### ghost

| Property | Token |
|----------|-------|
| bg | `transparent` |
| text | `{color.primary}` |
| border-radius | `{radius.md}` |
| padding-x | `{spacing.4}` |
| padding-y | `{spacing.2}` |

### danger

| Property | Token |
|----------|-------|
| bg | `{color.danger}` |
| bg-hover | `{color.danger-hover}` |
| text | `{color.text.on-danger}` |
| border-radius | `{radius.md}` |
| padding-x | `{spacing.4}` |
| padding-y | `{spacing.2}` |

## States

- default
- hover
- active
- focus
- disabled
- loading

## 접근성

- Role: `button`
- Keyboard: Enter, Space

