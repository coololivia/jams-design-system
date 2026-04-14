# Input (Textfield)

3가지 size × 7가지 state. 좌/우 아이콘 독립 토글, 레이블/플레이스홀더 표시 제어 가능.

## Sizes

| Size | Height | Padding H | Radius | Placeholder Font | Label Font | Icon Size |
|------|--------|-----------|--------|-----------------|------------|-----------|
| 52 | 52px | `unit-16` (16px) | `md` (10px) | Body/sm 15px regular→medium | Caption/base 12px regular | 24px |
| 48 | 48px | `unit-16` (16px) | `md` (10px) | Body/sm 15px regular→medium | — | 24px |
| 40 | 40px | `spacing-3` (12px) | `md` (10px) | Body/xs 14px regular→medium | — | 18px |

> Size 52에서만 focus/pressed/error 시 레이블이 축소(12px)되어 필드 안 상단에 표시됨.

## States

| State | Border | Background | Placeholder Color | 비고 |
|-------|--------|-----------|-------------------|------|
| **Default** | 1px `border/subtle` (#E2E6E8) | — | `typography/subtle` (#86919A) | 비어있는 초기 상태 |
| **Focus** | 2px `border/strong` (#131618) | — | — | 커서 표시, 레이블 축소(52만) |
| **Pressed** | 2px `border/strong` (#131618) | — | `typography/default` (#131618) | 입력 중, clear 버튼(closecircle-fill) 표시 |
| **Filled** | 1px `border/subtle` (#E2E6E8) | — | `typography/default` (#131618) | 입력 완료 |
| **Error** | 2px `border/danger` (#F22A23) | — | `typography/default` (#131618) | 하단에 에러 메시지 `typography/error` (#F22A23) 12px |
| **Errorpressed** | 2px `border/danger` (#F22A23) | — | `typography/default` (#131618) | 에러 상태에서 재입력 중, 커서+clear 버튼 표시 |
| **Disabled** | 1px `border/subtle` (#E2E6E8) | `fill/surface` (#F4F6F7) | `typography/disabled` (#9EA8AF) | 비활성 |

## Icon 구성
- `leftIcon`, `rightIcon`: 각각 독립 토글
- Pressed/Errorpressed 상태에서 clear 버튼(`closecircle-fill`)이 자동 표시됨
- 에러 메시지: `typography/error` (#F22A23), Caption/base 12px, 필드 하단에 표시
