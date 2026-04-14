# Component: Controls

> Figma 페이지: **Controls** (`298:3393`)
> 연결 문서: [DESIGN.md](../DESIGN.md) — Section 4 (Component Stylings)

## Overview

JAMS 디자인 시스템의 선택 컨트롤 컴포넌트 모음. **Checkbox**, **Radio**, **Check** 3가지 컴포넌트를 포함한다.

---

## Checkbox

다중 선택을 위한 체크박스 컴포넌트.

### Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| `checked` | enum | `off`, `on` | `off` |
| `size` | enum | `20`, `24` | `20` |
| `disabled` | boolean | `false`, `true` | `false` |
| `error` | boolean | `false`, `true` | `false` |

### States & Appearance

| State | Box | Check Icon | Border |
|-------|-----|------------|--------|
| **off + default** | 빈 사각형 | 없음 | `borderDefault` (Gray/200) |
| **off + error** | 빈 사각형 | 없음 | `borderDanger` (Red/500) |
| **off + disabled** | 회색 사각형 | 없음 | `borderSubtle`, `fillDisabled` 배경 |
| **on + default** | `fillBrand` (Brand/500) 배경 | 흰색 체크 아이콘 | none |
| **on + disabled** | 회색 배경 | 회색 체크 아이콘 | `fillDisabled` |

### Sizes

| Size | Dimension | 용도 |
|------|-----------|------|
| 20 | 20×20px | 기본 크기 — 폼, 리스트 아이템 |
| 24 | 24×24px | 대형 — 강조 선택, 넓은 터치 영역 |

### Styling Tokens

| Token | Value |
|-------|-------|
| Border Radius | 4px (`xs`) |
| Check Icon | 내부 체크마크, 크기는 box에 비례 |
| Active Color | `fillBrand` (Brand/500) |
| Error Color | `borderDanger` (Red/500) |
| Disabled Color | `fillDisabled` (Gray/100) |

---

## Radio

단일 선택을 위한 라디오 버튼 컴포넌트.

### Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| `checked` | boolean | `false`, `true` | `false` |
| `size` | enum | `20`, `24` | `20` |
| `disabled` | boolean | `false`, `true` | `false` |

### States & Appearance

| State | Circle | Inner Dot | Border |
|-------|--------|-----------|--------|
| **unchecked + default** | 빈 원형 | 없음 | `borderDefault` (Gray/200) |
| **unchecked + disabled** | 회색 원형 | 없음 | `borderSubtle`, `fillDisabled` 배경 |
| **checked + default** | `borderBrand` 테두리 | `fillBrand` (Brand/500) 내부 원 | Brand 컬러 |
| **checked + disabled** | 회색 테두리 | 회색 내부 원 | `fillDisabled` |

### Sizes

| Size | Dimension | Inner Dot | 용도 |
|------|-----------|-----------|------|
| 20 | 20×20px | ~10px | 기본 크기 — 폼, 옵션 선택 |
| 24 | 24×24px | ~12px | 대형 — 강조 선택 |

### Styling Tokens

| Token | Value |
|-------|-------|
| Border Radius | `full` (996px / 원형) |
| Active Color | `fillBrand` (Brand/500) |
| Disabled Color | `fillDisabled` (Gray/100) |

---

## Check

독립형 체크 아이콘 컴포넌트. Checkbox와 달리 박스 없이 체크마크만 표시.

### Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| `checked` | enum | `off`, `on` | `off` |
| `size` | enum | `16`, `20`, `24` | `20` |

### States & Appearance

| State | Appearance |
|-------|------------|
| **off** | 연한 회색 체크마크 (Gray/300) — 미선택 힌트 |
| **on** | `iconBrand` (Brand/500) 체크마크 — 선택 확인 |

### Sizes

| Size | Dimension | 용도 |
|------|-----------|------|
| 16 | 16×16px | 소형 인라인 확인 표시 |
| 20 | 20×20px | 기본 체크 표시 |
| 24 | 24×24px | 대형 체크 표시 |

---

## Usage Rules

### Checkbox vs Radio vs Check

| 컴포넌트 | 선택 방식 | 사용 맥락 |
|----------|---------|---------|
| **Checkbox** | 다중 선택 (0~N개) | 옵션 목록, 필터, 약관 동의 |
| **Radio** | 단일 선택 (정확히 1개) | 옵션 그룹, 설정 값 선택 |
| **Check** | 상태 표시 (선택적) | 완료 표시, 인라인 확인, 리스트 체크 |

### General Rules

1. **터치 타겟**: size 20/24 모두 최소 **44px** 터치 영역 확보 (패딩으로 확장)
2. **레이블 필수**: Checkbox/Radio는 반드시 텍스트 레이블과 함께 사용
3. **그룹 간격**: 체크박스/라디오 아이템 간 간격 **spacing-3** (12px) 이상
4. **에러 상태**: Checkbox만 error 속성 지원 — 필수 체크 미선택 시 사용
5. **브랜드 컬러 자동 전환**: `fillBrand` 토큰 사용으로 JK/AM 테마 자동 반영

## Do / Don't

### Do
- Radio 그룹에는 기본 선택 값 제공
- Checkbox 에러 시 "필수 항목입니다" 등 메시지 함께 표시
- Check 컴포넌트는 읽기 전용 상태 표시에 적합

### Don't
- Radio를 2개 미만의 옵션에 사용하지 말 것 — Toggle/Switch 사용
- Checkbox를 단일 선택 맥락에 사용하지 말 것 — Radio 사용
- disabled 상태를 남용하지 말 것 — 비활성 이유 설명 필요
