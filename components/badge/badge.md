# Badge

> 자동 생성된 기본 구조입니다. 수동 보강 가능합니다.

## 사용 시스템

- jams-core
- jams-2.1
- biz-jams

## Props

| Prop | Type | Values | Default |
|------|------|--------|---------|
| `variant` | enum | filled, outlined, subtle | filled |
| `color` | enum | primary, success, warning, danger, info, neutral | primary |
| `size` | enum | sm, md | md |
| `dot` | boolean | boolean | false |
| `removable` | boolean | boolean | false |

## 토큰 매핑

### filled-primary

| Property | Token |
|----------|-------|
| bg | `{color.primary}` |
| text | `{color.text.on-primary}` |
| border-radius | `{radius.full}` |

### filled-danger

| Property | Token |
|----------|-------|
| bg | `{color.danger}` |
| text | `{color.text.on-danger}` |
| border-radius | `{radius.full}` |

### subtle-primary

| Property | Token |
|----------|-------|
| bg | `{color.blue.50}` |
| text | `{color.primary}` |
| border-radius | `{radius.full}` |

### outlined-primary

| Property | Token |
|----------|-------|
| bg | `transparent` |
| border | `{color.primary}` |
| text | `{color.primary}` |
| border-radius | `{radius.full}` |

## States

- default
- hover (if removable)

## 접근성

- Role: `status`

