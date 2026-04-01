# Input

> 자동 생성된 기본 구조입니다. 수동 보강 가능합니다.

## 사용 시스템

- jams-core
- jams-2.1
- biz-jams

## Props

| Prop | Type | Values | Default |
|------|------|--------|---------|
| `type` | enum | text, email, password, number, tel, url, search | text |
| `size` | enum | sm, md, lg | md |
| `variant` | enum | outlined, filled | outlined |
| `disabled` | boolean | boolean | false |
| `readOnly` | boolean | boolean | false |
| `error` | boolean | boolean | false |
| `errorMessage` | string | string | - |
| `label` | string | string | - |
| `placeholder` | string | string | - |
| `helperText` | string | string | - |
| `prefixIcon` | ReactNode | ReactNode | - |
| `suffixIcon` | ReactNode | ReactNode | - |
| `clearable` | boolean | boolean | false |

## 토큰 매핑

### outlined

| Property | Token |
|----------|-------|
| bg | `{color.bg.base}` |
| border | `{color.border.default}` |
| border-focus | `{color.border.focus}` |
| border-error | `{color.border.error}` |
| text | `{color.text.default}` |
| placeholder | `{color.text.tertiary}` |
| border-radius | `{radius.md}` |
| padding-x | `{spacing.3}` |
| padding-y | `{spacing.2}` |

### filled

| Property | Token |
|----------|-------|
| bg | `{color.bg.surface}` |
| border | `transparent` |
| border-focus | `{color.border.focus}` |
| text | `{color.text.default}` |
| placeholder | `{color.text.tertiary}` |
| border-radius | `{radius.md}` |
| padding-x | `{spacing.3}` |
| padding-y | `{spacing.2}` |

## States

- default
- hover
- focus
- error
- disabled
- readOnly

## 접근성

- Role: `textbox`
- Keyboard: Tab to focus

