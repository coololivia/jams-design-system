# Modal

> 자동 생성된 기본 구조입니다. 수동 보강 가능합니다.

## 사용 시스템

- jams-core
- jams-2.1
- biz-jams

## Props

| Prop | Type | Values | Default |
|------|------|--------|---------|
| `open` | boolean | boolean | false |
| `size` | enum | sm, md, lg, fullscreen | md |
| `title` | string | string | - |
| `showClose` | boolean | boolean | true |
| `closeOnOverlay` | boolean | boolean | true |
| `closeOnEsc` | boolean | boolean | true |

## 토큰 매핑

### container

| Property | Token |
|----------|-------|
| bg | `{color.bg.elevated}` |
| border-radius | `{radius.lg}` |
| shadow | `{shadow.xl}` |
| padding | `{spacing.6}` |

### overlay

| Property | Token |
|----------|-------|
| bg | `{color.bg.overlay}` |

### header

| Property | Token |
|----------|-------|
| font-size | `{typography.font-size.xl}` |
| font-weight | `{typography.font-weight.semibold}` |
| margin-bottom | `{spacing.4}` |

### footer

| Property | Token |
|----------|-------|
| margin-top | `{spacing.4}` |
| gap | `{spacing.3}` |

## States

- closed
- opening
- open
- closing

## 접근성

- Role: `dialog`
- Keyboard: Escape to close, Tab trapping within modal

