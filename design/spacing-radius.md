# Spacing & Radius

## Spacing System

기본 단위: **4px**. `4 × n` 패턴을 따르되, 미세 조정을 위한 반스텝 포함.

| Token | Value | 용도 |
|-------|-------|------|
| spacing-0.25 | -1px | 시각 보정(optical compensation) |
| spacing-0.5 | 2px | 인라인 최소 간격 |
| spacing-1 | 4px | 최소 갭, 아이콘↔텍스트 |
| spacing-2 | 8px | 밀집 요소 간격 |
| spacing-3 | 12px | 소형 컴포넌트 패딩 |
| spacing-4 | 16px | **표준 패딩** — 버튼, 인풋, 카드 내부 |
| spacing-5 | 20px | 중간 갭 |
| spacing-6 | 24px | 컴포넌트 그룹 간격 |
| spacing-7 | 28px | 섹션 내부 서브 간격 |
| spacing-8 | 32px | 섹션 패딩 |
| spacing-9 | 36px | 대형 갭 |
| spacing-10 | 40px | 섹션 간격 |
| spacing-12 | 48px | 주요 섹션 갭 |
| spacing-13 | 52px | 대형 섹션 갭 |
| spacing-14 | 56px | XL 섹션 갭 |
| spacing-16 | 64px | 페이지 레벨 섹션 간격 |
| spacing-20 | 80px | 최대 섹션 간격 |

## Unit Tokens (Figma 컴포넌트 내부용)

Spacing 토큰과 별도로, Figma 컴포넌트 내부에서 사용되는 세밀한 단위 토큰:

| Token | Value | 용도 |
|-------|-------|------|
| `unit/4` | 4px | 배지 border-radius, 소형 컴포넌트 radius |
| `unit-6` | 6px | 배지 수평 패딩, 소형 요소 내부 간격 |

> Unit 토큰은 컴포넌트 내부의 미세 조정에 사용된다. 레이아웃 간격에는 반드시 Spacing 토큰을 사용할 것.

## 간격 사용 가이드
- **인라인/아이콘 갭**: spacing-1 (4px) ~ spacing-2 (8px)
- **컴포넌트 내부 패딩**: spacing-3 (12px) ~ spacing-4 (16px)
- **컴포넌트 사이**: spacing-4 (16px) ~ spacing-6 (24px)
- **섹션 내부**: spacing-8 (32px) ~ spacing-10 (40px)
- **섹션 사이**: spacing-12 (48px) ~ spacing-16 (64px)
- **페이지 레벨**: spacing-16 (64px) ~ spacing-20 (80px)

## Border Radius

| Token | Value | 용도 |
|-------|-------|------|
| xs | 4px | 태그, 배지 |
| sm | 8px | 버튼, 인풋 |
| md | 10px | 카드, 컨테이너 |
| lg | 16px | 대형 카드, 모달 |
| xl | 24px | 피처 섹션 |
| full | 996px | 원형, 필 |

### Brand Radius (테마별 전환)

브랜드 radius 토큰은 JK/AM 테마에 따라 자동 전환된다. JK는 날카롭고, AM은 둥글다.

| Token | JK | AM | 용도 |
|-------|-----|-----|------|
| brand-sm | 8px | 10px | 소형 버튼(32) |
| brand-md | 10px | 16px | 표준 버튼(48, 52), 브랜드 강조 카드 |

- brand-radius 토큰이 존재하는 곳에 고정 radius 값을 쓰지 마라 — 테마 반응형이다
- 모바일에서도 radius 값은 변하지 않음 — 브랜드 일관성 유지
- full (996px)은 모든 브레이크포인트에서 pill 형태 유지
