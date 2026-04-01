# Data Table

## 사용 시스템
- Biz JAMS (B2B)

## 설명
B2B 대시보드용 데이터 테이블 패턴입니다. 정렬, 필터, 페이지네이션, 행 선택을 지원합니다.

## 구조
```
<table-toolbar>
  <search>
  <filters>
  <actions> (내보내기, 일괄 작업)
</table-toolbar>
<table>
  <table-header>
    <column-header sortable>*
  </table-header>
  <table-body>
    <table-row>*
  </table-body>
</table>
<table-footer>
  <pagination>
  <row-count>
</table-footer>
```

## Props

| Prop | Type | Default | 설명 |
|------|------|---------|------|
| sortable | boolean | true | 컬럼 정렬 활성화 |
| selectable | boolean | false | 행 체크박스 선택 |
| stickyHeader | boolean | true | 헤더 고정 |
| striped | boolean | false | 줄무늬 배경 |
| dense | boolean | false | 컴팩트 행 높이 |
| loading | boolean | false | 로딩 스켈레톤 |

## 토큰 매핑

### Header
| Property | Token |
|----------|-------|
| 배경 | `color.bg.surface` |
| 텍스트 | `color.text.secondary` |
| 폰트 크기 | `typography.font-size.sm` |
| 폰트 굵기 | `typography.font-weight.semibold` |
| 패딩 | `spacing.3` `spacing.4` |
| 하단 테두리 | `color.border.strong` |

### Row
| Property | Token |
|----------|-------|
| 배경 | `color.bg.base` |
| 호버 배경 | `color.bg.surface` |
| 선택됨 배경 | `color.blue.50` |
| 줄무늬 배경 | `color.bg.surface` |
| 텍스트 | `color.text.default` |
| 폰트 크기 | `typography.font-size.sm` |
| 패딩 | `spacing.3` `spacing.4` |
| dense 패딩 | `spacing.2` `spacing.3` |

## 접근성
- `role="table"` (읽기 전용) 또는 `role="grid"` (인터랙티브)
- `aria-sort` 로 정렬 상태 표시
- `aria-selected` 로 선택된 행 표시
- Arrow 키로 셀 이동, Space로 행 선택
