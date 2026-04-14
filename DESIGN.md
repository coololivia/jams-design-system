# Design System: JAMS

## 세부 문서 경로

| 문서 | 경로 | 내용 |
|------|------|------|
| Color | [design/colors.md](design/colors.md) | 토큰 아키텍처, Brand/Primitive/Gray/System 팔레트 |
| Typography | [design/typography.md](design/typography.md) | 서체, Weight, Size Hierarchy, Figma 매핑 |
| Spacing & Radius | [design/spacing-radius.md](design/spacing-radius.md) | 4px 기반 17단계 스페이싱, Unit 토큰, Border Radius |
| Icon | [design/icon.md](design/icon.md) | 아이콘 시맨틱 컬러, 컴포넌트별 사이즈, 배치 규칙 |
| Button | [design/button.md](design/button.md) | 3 variant × 4 size × 3 state, 아이콘 토글 |
| Controls | [design/controls.md](design/controls.md) | Checkbox, Radio, Check 컴포넌트 |
| Input | [design/input.md](design/input.md) | Textfield 3 size × 7 state |
| Select | [design/select.md](design/select.md) | Select Box 3 size × 5 state + Dropdown Open |

---

## 1. Visual Theme & Atmosphere

JAMS는 채용 경험을 위한 듀얼 브랜드 플랫폼으로, 하나의 시스템 안에 두 개의 브랜드 성격을 품고 있다. **JK**는 정규직 채용 플랫폼으로 차분하고 신뢰감 있는 블루(`#1B55F6`)를, **AM**은 비정규직 채용 플랫폼으로 에너지 넘치고 친근한 오렌지(`#FF6D12`)를 주축으로 한다. 브랜드 모드가 바뀌면 액센트 색상뿐 아니라 border-radius까지 함께 전환되어, JK는 날카롭고 정돈된 인상을, AM은 부드럽고 따뜻한 인상을 준다.

두 브랜드 모두 **Light/Dark 모드**를 지원한다. Light 모드의 기본 배경은 순백(`#FFFFFF`)이 아닌 차분한 화이트이며, Dark 모드는 순흑(`#000000`)이 아닌 따뜻한 차콜(`#131618`)을 사용한다. 이 미묘한 톤 차이가 화면에 깊이감을 주고, 장시간 사용에도 눈의 피로를 줄여준다.

서체는 오직 **Pretendard** 하나만 사용한다. 한글과 라틴 모두에서 뛰어난 가독성을 보여주는 이 서체를, 크기(11–32px)와 굵기(400–700)의 조합만으로 명확한 위계를 만든다. 정보 밀도가 높은 채용 인터페이스에서 단일 서체 전략은 일관성과 빠른 스캔을 동시에 보장한다.

중립적인 Gray 팔레트(`Gray/50`–`Gray/950`)가 전체 구조를 지탱하고, 시스템 컬러(Red, Green, Blue, Yellow, Violet)는 오직 상태 전달(에러, 성공, 정보, 경고)에만 쓰인다. 채용 카테고리 구분을 위한 34개의 전용 데이터 컬러가 별도로 존재하여, 장식용 색상과 기능적 색상이 절대 섞이지 않는다.

**핵심 특징:**
- 듀얼 브랜드: JK 블루(`#1B55F6`) / AM 오렌지(`#FF6D12`) — 테마 토큰으로 전환
- Light/Dark 모드 전체 지원 — 모든 시맨틱 컬러가 양쪽 모드에서 해석됨
- Pretendard 단일 서체 — 크기·굵기 조합으로 11단계 타이포 위계
- 4px 기반 스페이싱 그리드 — 17개 이산 값(-1px ~ 80px)
- 테마별 border-radius — JK는 날카롭게, AM은 둥글게
- Gray 뉴트럴 백본 + 5개 시스템 컬러(상태 전용) + 34개 카테고리 데이터 컬러
- 시맨틱 토큰 6개 카테고리: Background, Typography, Icon, Fill, Border, Shadow
- 토큰 3계층 구조: Primitive(원천값) → Theme(브랜드 전환) → Semantic(용도 매핑)

---

## 2. Cards & Containers

- Background: `fillDefault` (white light / black dark)
- Border: 1px solid `borderDefault` (Gray/200 light / Gray/800 dark)
- Radius: md (10px) — 표준 카드; brand-md (JK: 10px / AM: 16px) — 브랜드 강조 카드
- 내부 패딩: spacing-6 (24px)
- 카드 간 간격: spacing-4 (16px)

## 3. Status Indicators

- **Info**: `fillInfo` 배경 + `borderInfo` 보더 + `iconInfo` 아이콘
- **Success**: `fillSuccess` 배경 + `borderSuccess` 보더 + `iconSuccess` 아이콘
- **Warning**: `fillWarning` 배경 + `borderWarning` 보더 + `iconWarning` 아이콘
- **Danger**: `fillDanger` 배경 + `borderDanger` 보더 + `iconDanger` 아이콘
- 모두 Radius sm (8px), 패딩 spacing-4 (16px)

## 4. Navigation

- Background: `backgroundDefault`
- 보더: 하단 1px solid `borderSubtle`
- 활성 탭: `typographyBrand` 텍스트 + `borderBrand` 하단 인디케이터
- 비활성 탭: `typographySubtle`
- 아이콘: `iconDefault` (비활성), `iconBrand` (활성)

## 5. Tags & Badges (Figma: TagMoney)

시스템 컬러별 Light/Dark 배경 페어를 사용하는 소형 정보 배지. Figma에서 확인된 실제 스펙:

- 높이: 20px 고정
- 텍스트: Pretendard semibold (600), **11px**, line-height 18px, letter-spacing 0
- 아이콘: 12×12px, 텍스트 좌측
- 패딩: 수직 `space-space-space2` (2px), 수평 `unit-6` (6px)
- 아이콘↔텍스트 갭: `space-space-space2` (2px)
- Radius: `unit/4` (4px)

**시스템 컬러별 배지 페어 (Light bg → Dark bg)**

| 컬러 | Light 배경 | Dark 배경 | 텍스트 색상 |
|------|-----------|----------|-----------|
| Red | `#FFF2F1` (Red/50) | `#421200` (AMorange/900) | `#E9312A` |
| Orange | `#FFF5EC` | `#421200` (AMorange/900) | `#FF6D12` (Orange/500) |
| Yellow | `#FFFCE8` (Yellow/50) | `#332500` (Yellow/900) | `#FFB700` |
| Gray | `#F4F6F7` (Gray/50) | `#1E2428` (Gray/900) | `#86919A` (Gray/500) |
| Blue | `#EBF5FF` (Blue/50) | `#001C46` (Blue/900) | `#2684FF` (Blue/500) |
| Blue2/Brand | `#EEF3FF` (JKblue/50) | `#06124A` (JKblue/900) | `#1B55F6` (JKblue/500) |
| Violet | `#F5F3FF` (Violet/50) | `#1D004F` (Violet/900) | `#7C3AED` (Violet/500) |

> Light 배경 = 50 단계, Dark 배경 = 900 단계. 텍스트는 해당 팔레트의 500 단계.

## 6. Recruitment-Specific Components

**카테고리 배지(Category Badge)**
- 배경: 해당 카테고리의 데이터 컬러
- 텍스트: white, Caption/base (12px medium)
- Radius: full (pill, 996px)
- 패딩: spacing-1 (4px) vertical, spacing-2 (8px) horizontal

**채용 정보 카드**
- 제목: Heading/sm (20px semibold), `typographyDefault`
- 상세: Body/base (16px regular), `typographySecondary`
- 카테고리 배지 + 정보의 수평 배치
- 간격: spacing-3 (12px)

## 7. Depth & Elevation

| Level | Treatment | 용도 |
|-------|-----------|------|
| Flat (Level 0) | 배경색만 | 페이지 배경, 인라인 텍스트 |
| Subtle (Level 1) | 1px solid `borderSubtle` | 구분선, 비강조 컨테이너 |
| Contained (Level 2) | 1px solid `borderDefault` | 표준 카드, 인풋 필드 |
| Strong (Level 3) | 1px solid `borderStrong` | 강조 컨테이너, 포커스 상태 |
| Raised (Level 4) | `fillSurfaceRaised` 배경 | 올림 표면 — 탭바, 헤더 |
| Brand (Level 5) | 1px solid `borderBrand` | 브랜드 강조 카드, 선택 상태 |

### Shadow (시맨틱 토큰)

Figma 토큰 구조에 Shadow가 시맨틱 카테고리로 존재한다. 보더가 1차 깊이 수단이지만, 모달/바텀시트/플로팅 요소에는 Shadow 토큰을 사용한다.

| 용도 | 설명 |
|------|------|
| 모달/다이얼로그 | 오버레이 위에 떠 있는 요소에 적용 |
| 바텀시트 | 화면 하단에서 올라오는 패널 |
| 플로팅 버튼(FAB) | 스크롤 위에 고정된 요소 |
| 드롭다운/팝오버 | 트리거 위에 떠 있는 메뉴 |

> Shadow 토큰의 구체적인 값은 Figma Variable에서 관리된다. 보더로 충분한 경우 Shadow를 추가하지 않는다.

**깊이 철학**: JAMS는 **보더와 표면색 차이**를 1차 깊이 수단으로 사용하고, **Shadow**는 떠 있는 오버레이 요소에만 보조적으로 사용한다. 채용 앱의 특성상 다양한 환경에서 사용되므로, 미묘한 그림자보다 명확한 보더가 더 효과적이다. 가장 강한 강조는 `borderBrand`로 — 브랜드 컬러 보더가 곧 "선택됨/활성" 시그널이다.

## 8. Grid & Layout

- 모바일 퍼스트 단일 컬럼 기본
- 좌우 페이지 마진: spacing-4 (16px) 모바일, spacing-6 (24px) 태블릿 이상
- 카드 그리드: 모바일 1열 → 태블릿 2열 → 데스크톱 3열
- 리스트: 풀 와이드, 아이템 간 `borderSubtle` 구분선

### Whitespace Philosophy
- **기능적 여백**: 채용 정보는 밀도가 높으므로, 여백은 "읽기 쉬움"을 위해 존재한다. 장식적 여백은 없다.
- **그룹 간 숨쉬기**: 관련 요소는 spacing-2–3으로 밀착, 다른 그룹과는 spacing-6–8로 분리. 근접성의 원리를 간격 토큰으로 강제한다.
- **수직 리듬**: 모든 요소의 높이와 간격이 4px 그리드에 정렬된다.

### Breakpoints
| Name | Width | 주요 변화 |
|------|-------|----------|
| Mobile | < 640px | 단일 컬럼, 풀 와이드 카드, Heading/lg 이하로 축소 |
| Tablet | 640–1024px | 2열 그리드 시작, 사이드 패딩 spacing-6 |
| Desktop | 1024px+ | 3열 그리드, 최대 타이포 스케일, 전체 네비게이션 |

### Touch Targets
- 버튼 최소 높이: 48px (spacing-12)
- 리스트 아이템 최소 높이: 56px (spacing-14)
- 탭/네비게이션 링크: 충분한 간격 확보
- 카테고리 배지: 최소 32px × 32px 터치 영역

### Collapsing Strategy
- **타이포**: Heading/xl (32px) → Heading/lg (28px) → Heading/base (24px) 축소
- **카드 그리드**: 3열 → 2열 → 1열 스택
- **네비게이션**: 풀 탭바 → 하단 탭바(모바일)
- **채용 정보**: 수평 → 수직 스택
- **간격**: spacing-16 → spacing-10 → spacing-8 비례 축소

---

## 9. Do's and Don'ts

### Do
- 시맨틱 토큰(`typographyDefault`, `fillBrand`)을 사용하라 — 절대 hex 값을 하드코딩하지 말 것
- Light/Dark 양쪽 모드를 반드시 테스트하라 — 비대칭 페어(Gray/50 ↔ Gray/950)는 의도된 것
- Brand/500을 primary 액션과 핵심 인터랙티브 요소에 사용하라
- brand-radius 토큰을 브랜드 컴포넌트에 적용하라 — JK/AM 간 전환됨
- `spacing-4` (16px)를 기본 컴포넌트 패딩으로 사용하라
- Gray/500 (`#86919A`)을 기본 아이콘 색상으로 사용하라 — Light/Dark 모두 동일
- 헤딩은 letter-spacing tight (-0.5px), 캡션은 wide (0.2px)를 적용하라
- 데이터 컬러는 카테고리 식별에만 사용하라

### Don't
- JK 블루와 AM 오렌지를 같은 테마 컨텍스트에서 섞지 마라
- Brand/500을 큰 면적의 배경색으로 사용하지 마라 — brand-subtle 토큰을 사용할 것
- 정의된 스페이싱 스케일 밖의 값을 만들어내지 마라 — 17개 토큰을 준수
- 순흑(`#000000`)을 사용하지 마라 — 시스템의 black은 `#131618`
- 헤딩 굵기(700)를 본문에, 본문 굵기(400)를 헤딩에 사용하지 마라
- brand-radius 토큰이 존재하는 곳에 고정 radius 값을 쓰지 마라 — 테마 반응형이다
- Red, Blue, Green, Yellow를 장식 목적으로 사용하지 마라 — 시맨틱 의미가 있다 (에러, 정보, 성공, 경고)
- 카테고리 데이터 컬러를 데이터 시각화 외 용도로 사용하지 마라
- 보더 없이 그림자만으로 깊이를 표현하지 마라 — 보더가 1차 깊이 수단이다

---

## 10. Agent Prompt Guide

### Quick Color Reference

```
Brand Primary:     JK #1B55F6 / AM #FF6D12  (theme.brand500)
Background Light:  #FFFFFF                    (semanticColor.light.backgroundDefault)
Background Dark:   #131618                    (semanticColor.dark.backgroundDefault)
Surface Light:     #F4F6F7                    (semanticColor.light.fillSurface)
Surface Dark:      #131618                    (semanticColor.dark.fillSurface)
Text Primary L:    #131618                    (semanticColor.light.typographyDefault)
Text Primary D:    #F4F6F7                    (semanticColor.dark.typographyDefault)
Text Secondary L:  #30363C                    (semanticColor.light.typographySecondary)
Text Secondary D:  #D1D6DA                    (semanticColor.dark.typographySecondary)
Text Subtle:       #86919A                    (both modes)
Border Default L:  #D1D6DA                    (semanticColor.light.borderDefault)
Border Default D:  #30363C                    (semanticColor.dark.borderDefault)
Link:              #2684FF                    (both modes)
Error:             #F22A23                    (both modes)
Success:           #02B160                    (both modes)
Warning:           #FFBB00                    (both modes)
```

### Quick Spacing Reference

```
4px   = spacing-1     (아이콘↔텍스트)
8px   = spacing-2     (밀집 요소)
12px  = spacing-3     (소형 패딩)
16px  = spacing-4     (표준 패딩) ← 가장 많이 쓰임
24px  = spacing-6     (그룹 간격)
32px  = spacing-8     (섹션 패딩)
48px  = spacing-12    (주요 섹션)
64px  = spacing-16    (페이지 레벨)
```

### Quick Radius Reference

```
4px   = xs           (태그, 배지)
8px   = sm           (버튼, 인풋)
10px  = md           (카드, 컨테이너)
16px  = lg           (대형 카드, 모달)
24px  = xl           (피처 섹션)
996px = full         (원형, 필)
```

### Example Component Prompts

- "Brand Primary 버튼을 만들어라. fillBrand 배경(Brand/500), typographyInverse 텍스트, 16px Pretendard semibold, 패딩 spacing-3 × spacing-4, radius brand-sm."
- "표준 카드를 만들어라. fillDefault 배경, borderDefault 보더(1px solid), radius md (10px), 패딩 spacing-6 (24px). 제목 Heading/xs (18px semibold), 본문 Body/base (16px regular) typographySecondary."
- "Info 알림을 만들어라. fillInfo 배경, borderInfo 보더, iconInfo 아이콘, Body/sm (15px) 텍스트 typographyDefault. 패딩 spacing-4, radius sm."
- "카테고리 배지를 만들어라. 해당 카테고리의 dataColor를 배경으로, 흰색 텍스트, radius full (pill), 패딩 spacing-1 × spacing-2."
- "섹션 헤더를 만들어라. Heading/lg (28px bold, letter-spacing tight) typographyDefault, 서브타이틀 Body/base (16px regular) typographySubtle. 둘 사이 간격 spacing-2. 섹션 상단 마진 spacing-16."
- "다크 모드 리스트를 만들어라. backgroundDefault (#131618) 위에 typographyDefault (#F4F6F7) 텍스트. 아이템 간 borderSubtle (#1E2428) 구분선. 아이템 패딩 spacing-4, 아이콘 iconDefault (#86919A)."
- "TagMoney 배지를 만들어라. 높이 20px, 아이콘 12×12 + Pretendard 600/11px/18px 텍스트, 갭 2px, 수평 패딩 6px, radius 4px. Red 배지: Light bg #FFF2F1 + text #E9312A, Dark bg #421200 + text #E9312A."

### Iteration Guide
1. 항상 시맨틱 토큰으로 해석하라 — 프로덕션에서 hex 하드코딩 금지
2. Light/Dark 양쪽을 테스트하라 — 비대칭 페어(Gray/50 ↔ Gray/950)는 의도된 설계
3. 브랜드 토큰은 JK(blue) ↔ AM(orange) 전환된다 — 양쪽 모두에서 동작해야 함
4. brand-radius도 전환된다 — AM이 JK보다 둥글다는 것은 디자인 의도
5. 스페이싱은 17개 이산 값 — 가장 가까운 토큰을 사용하고, 보간하지 마라
6. 시스템 컬러(Red, Green, Blue, Yellow)는 상태 시맨틱 전용
7. Pretendard가 유일한 서체 — 크기와 굵기만으로 위계를 조절하라
8. 카테고리 데이터 컬러 34개는 데이터 시각화 전용 — 다른 UI에 쓰지 마라
