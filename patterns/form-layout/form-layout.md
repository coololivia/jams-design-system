# Form Layout

## 사용 시스템
- JAMS Core, JAMS 2.1, Biz JAMS

## 설명
폼 입력 필드의 레이아웃과 유효성 검사 패턴입니다.

## Variants

| variant | 용도 |
|---------|------|
| vertical | 라벨이 입력 필드 위에 위치 (기본, 모바일 친화) |
| horizontal | 라벨이 입력 필드 왼쪽에 위치 (데스크톱, Biz JAMS 설정 화면) |
| inline | 입력 필드들이 한 줄에 나란히 (검색 필터 등) |

## 구조
```
<form>
  <form-group>        ← 반복
    <label>
    <input / select / textarea>
    <helper-text> 또는 <error-message>
  </form-group>
  <form-actions>
    <Button variant="primary">저장</Button>
    <Button variant="secondary">취소</Button>
  </form-actions>
</form>
```

## 토큰 매핑

| Property | Token |
|----------|-------|
| form-group 간격 | `spacing.4` (16px) |
| 라벨-입력 간격 | `spacing.1` (4px) |
| 헬퍼 텍스트 간격 | `spacing.1` (4px) |
| 헬퍼 텍스트 색상 | `color.text.secondary` |
| 에러 텍스트 색상 | `color.danger` |
| 액션 영역 간격 | `spacing.6` (24px, 상단 마진) |
| 버튼 간 간격 | `spacing.3` (12px) |

## 유효성 검사 규칙
- **첫 검사**: onBlur (필드를 벗어날 때)
- **재검사**: onChange (에러 발생 후에는 입력할 때마다)
- **표시**: 에러 아이콘 + 메시지를 필드 바로 아래에 표시

## 접근성
- `aria-describedby`: 에러/헬퍼 텍스트를 입력 필드에 연결
- `aria-invalid="true"`: 에러 상태일 때
- `aria-required="true"`: 필수 필드
- 에러 발생 시 해당 필드로 포커스 이동
