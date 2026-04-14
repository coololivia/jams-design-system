# Select Box

Input(Textfield)과 동일한 토큰 체계를 공유하는 드롭다운 선택 컴포넌트. 3가지 size × 5가지 state + Dropdown Open.

## Input과의 차이
- 우측 아이콘: clear 버튼 대신 `selectarrowdown-fill` / `selecarrowup-fill` 고정
- 좌측 아이콘 없음
- Pressed/Errorpressed 상태 없음 (터치 시 바로 드롭다운 Open)
- Dropdown Open 상태 추가 (옵션 리스트 펼침)

## Sizes

| Size | Height | Padding H | Radius | Text Font | Icon Size |
|------|--------|-----------|--------|-----------|-----------|
| 52 | 52px | `spacing-4` (16px) | `md` (10px) | Body/sm 15px regular→medium | 24px |
| 48 | 48px | `spacing-4` (16px) | `md` (10px) | Body/sm 15px regular→medium | 24px |
| 40 | 40px | `spacing-3` (12px) | `md` (10px) | Body/xs 14px regular→medium | 18px |

> Gap(아이콘↔텍스트): `spacing-2` (8px)

## States

| State | Border | Background | Text Color | 우측 아이콘 |
|-------|--------|-----------|------------|------------|
| **Default** | 1px `Border/subtle` | `Fill/default` | `Typography/subtle` | `selectarrowdown-fill` |
| **Focus** | 2px `Border/strong` | `Fill/default` | `Typography/subtle` | `selectarrowdown-fill` |
| **Filled** | 1px `Border/subtle` | `Fill/default` | `Typography/default` (medium) | `selectarrowdown-fill` |
| **Error** | 2px `Border/danger` | `Fill/default` | `Typography/default` (medium) | `selectarrowdown-fill` |
| **Disabled** | 1px `Border/subtle` | `Fill/surface` | `Typography/disabled` | `selectarrowdown-fill` |

- Error 상태: 하단에 에러 메시지 `Typography/error`, Caption/base 12px

## Dropdown Open

필드 클릭 시 아래로 옵션 리스트가 펼쳐지는 상태.

**필드 (Open 상태)**
- Border: 2px `Border/strong`
- 우측 아이콘: `selecarrowup-fill`로 전환

**옵션 리스트**
- Background: `Fill/default`
- Border: 1px `Border/subtle`
- Radius: `md` (10px)
- Shadow: `drop-shadow(0 4px 16px rgba(0,0,0,0.08))`
- Padding: 상하 8px

**옵션 아이템**

| Size | Option Height | Font |
|------|--------------|------|
| 52 | 48px | Body/sm 15px |
| 48 | 44px | Body/sm 15px |
| 40 | 36px | Body/xs 14px |

**옵션 상태**

| 상태 | Background | Text |
|------|-----------|------|
| 기본 | 없음 | `Typography/default` (regular) |
| 선택됨 | `Fill/brand-subtle` (#EEF3FF) | `Typography/brand` (semibold) |

## Figma 변수 바인딩

| 속성 | 변수 |
|------|------|
| Fill | `Fill/default`, `Fill/surface`, `Fill/brand-subtle` |
| Border | `Border/subtle`, `Border/strong`, `Border/danger` |
| Text | `Typography/default`, `Typography/subtle`, `Typography/disabled`, `Typography/error`, `Typography/brand` |
| Radius | `md` (Radius collection) |
| Spacing | `spacing-2` (gap), `spacing-3` (padding 40), `spacing-4` (padding 52/48) |
