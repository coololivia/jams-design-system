# Controls (Checkbox, Radio, Check)

## Checkbox

사각형 체크박스. 2가지 size × checked/unchecked × disabled × error.

| 속성 | 값 |
|------|-----|
| Sizes | 20px, 24px |
| Radius | `xs` (4px) |
| Unchecked default | bg=`fill/default` (white), border=1px `border/subtle` (#E2E6E8) |
| Unchecked error | bg=`fill/danger-subtle` (#FFF2F1), border=1px `border/danger` (#F22A23) |
| Unchecked disabled | bg=`fill/surface-raised` (#E2E6E8), border=1px `border/subtle` (#E2E6E8) |
| Checked default | bg=`fill/brand` (#1B55F6), 체크 아이콘 white |
| Checked disabled | bg=`fill/surface-raised` (#E2E6E8), 체크 아이콘 gray |

## Radio

원형 라디오 버튼. 2가지 size × checked/unchecked × disabled.

| 속성 | 값 |
|------|-----|
| Sizes | 20px, 24px |
| Radius | `unit-999` (999px) — 완전한 원 |
| Unchecked default | bg=`fill/default` (white), border=1px `border/subtle` (#E2E6E8) |
| Unchecked disabled | bg=`fill/surface-raised` (#E2E6E8), border 없음 |
| Checked default | bg=`fill/default` (white), border=1px `color-brand-primary` (#1B55F6), 내부 dot=brand |
| Checked disabled | bg=`fill/default` (white), border=1px `border/subtle` (#E2E6E8), 내부 dot=gray |

## Check (독립 체크 아이콘)

배경 없이 체크마크만 표시하는 아이콘 컴포넌트.

| 속성 | 값 |
|------|-----|
| Sizes | 16px, 20px, 24px |
| Unchecked | gray 체크 아이콘 (`typography/subtle` 계열) |
| Checked | blue 체크 아이콘 (`fill/brand` 계열) |
