# Card

> 자동 생성된 기본 구조입니다. 수동 보강 가능합니다.

## 사용 시스템

- jams-core
- jams-2.1
- biz-jams

## Props

| Prop | Type | Values | Default |
|------|------|--------|---------|
| `variant` | enum | elevated, outlined, filled | elevated |
| `clickable` | boolean | boolean | false |
| `padding` | enum | none, sm, md, lg | md |

## 토큰 매핑

### elevated

| Property | Token |
|----------|-------|
| bg | `{color.bg.elevated}` |
| shadow | `{shadow.md}` |
| border-radius | `{radius.lg}` |

### outlined

| Property | Token |
|----------|-------|
| bg | `{color.bg.base}` |
| border | `{color.border.default}` |
| border-radius | `{radius.lg}` |

### filled

| Property | Token |
|----------|-------|
| bg | `{color.bg.surface}` |
| border-radius | `{radius.lg}` |

## States

- default
- hover
- active
- focus

## 접근성

- Role: `article (or button if clickable)`
- Keyboard: Enter/Space if clickable

