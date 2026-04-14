# Component: Input

> Figma 페이지: **Input** (`279:5`)
> 연결 문서: [DESIGN.md](../DESIGN.md) — Section 4 (Inputs & Forms)

## Overview

JAMS 디자인 시스템의 텍스트 입력 필드 컴포넌트. 7가지 상태(state)와 3가지 크기(size)를 지원하며, 좌측 아이콘/우측 액션 버튼 슬롯을 포함한다.

## Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| `state` | enum | `default`, `focus`, `pressed`, `filled`, `error`, `errorpressed`, `disabled` | `default` |
| `size` | enum | `52`, `48`, `40` | `52` |

## States

### default
초기 빈 상태.

| Token | Value |
|-------|-------|
| Background | `fillDefault` (white light / black dark) |
| Border | 1px solid `borderDefault` (Gray/200 light / Gray/800 dark) |
| Placeholder | `typographySubtle` (Gray/500) |
| Radius | `sm` (8px) |

### focus
입력 필드 포커스 시.

| Token | Value |
|-------|-------|
| Background | `fillDefault` |
| Border | 1px solid `borderBrand` (Brand/500) |
| Text | `typographyDefault` |
| Cursor | 표시 |

### pressed
입력 중 (타이핑 활성 상태).

| Token | Value |
|-------|-------|
| Background | `fillDefault` |
| Border | 1px solid `borderBrand` |
| Text | `typographyDefault` |
| 우측 액션 | clear 버튼 + 기능 아이콘 표시 |

### filled
입력 완료 후 포커스 해제.

| Token | Value |
|-------|-------|
| Background | `fillDefault` |
| Border | 1px solid `borderDefault` |
| Text | `typographyDefault` |
| 우측 | clear(X) 버튼 표시 |

### error
유효성 검증 실패.

| Token | Value |
|-------|-------|
| Background | `fillDefault` |
| Border | 1px solid `borderDanger` (Red/500) |
| Text | `typographyDefault` |
| Error Message | `typographyError` (Red/500), 필드 하단에 표시 |

### errorpressed
에러 상태에서 재입력 중.

| Token | Value |
|-------|-------|
| Background | `fillDefault` |
| Border | 1px solid `borderDanger` |
| Text | `typographyDefault` |
| Error Message | 유지, 우측 clear/action 버튼 활성 |

### disabled
비활성 상태.

| Token | Value |
|-------|-------|
| Background | `fillDisabled` (Gray/50) |
| Border | 1px solid `borderSubtle` |
| Text | `typographyDisabled` (Gray/400) |
| 인터랙션 | 불가 |

## Sizes

| Size | Height | Padding (V × H) | Font Size | Icon Size | 용도 |
|------|--------|------------------|-----------|-----------|------|
| 52 | 52px | spacing-3 (12px) × spacing-4 (16px) | 16px (Body/base) | 20px | 주요 입력 필드, 검색창 |
| 48 | 48px | spacing-3 (12px) × spacing-4 (16px) | 16px (Body/base) | 20px | 표준 폼 입력 (터치 최소 크기) |
| 40 | 40px | spacing-2 (8px) × spacing-3 (12px) | 15px (Body/sm) | 18px | 밀집 폼, 필터 인풋 |

## Anatomy

```
┌──────────────────────────────────────────────┐
│  [icon-left]  placeholder / text  [action] [X] │
└──────────────────────────────────────────────┘
                                    └── error message
```

- **icon-left**: 검색 아이콘 등 (선택 사항)
- **text area**: placeholder → 입력 텍스트
- **action**: 우측 기능 아이콘 (설정, 스크랩 등)
- **clear (X)**: pressed/filled 상태에서 표시, 입력 초기화
- **error message**: error/errorpressed 상태에서 필드 하단에 표시

## Usage Rules

1. **placeholder는 힌트**: 레이블 대용으로 사용하지 말 것. 별도 레이블 필요 시 필드 상단에 배치
2. **에러 메시지는 구체적으로**: "입력 오류" 대신 "최소 2글자 이상 입력해 주세요"
3. **모바일 최소 48px**: size 40은 데스크톱 밀집 UI 전용
4. **포커스 보더**: Brand 컬러 보더로 현재 입력 위치를 명확히 표시
5. **disabled 사용 최소화**: 비활성 이유를 tooltip 등으로 설명하는 것 권장

## Do / Don't

### Do
- 검색 필드에는 좌측 search 아이콘 배치
- 에러 → 재입력 시 errorpressed 상태 유지 (에러 문구 지속 표시)
- filled 상태에서 clear 버튼 제공

### Don't
- placeholder를 레이블 대체로 사용하지 말 것
- 에러 메시지 없이 border만 빨갛게 하지 말 것
- 여러 인풋의 에러를 한 번에 표시하지 말 것 — 각 필드별 개별 표시
