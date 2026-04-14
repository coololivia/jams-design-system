# Typography Rules

## Font Family
- **유일한 서체**: `Pretendard` — 한글·라틴 동시 최적화 산세리프

## Weight Scale

| Token | Value | 용도 |
|-------|-------|------|
| regular | 400 | 본문, 설명 텍스트 |
| medium | 500 | 레이블, 강조 본문 |
| semibold | 600 | 소제목, 버튼 텍스트 |
| bold | 700 | 대제목, 강한 강조 |

## Size Hierarchy

| Role | Size | Weight | Line Height | Letter Spacing | 용도 |
|------|------|--------|-------------|----------------|------|
| Heading/xl | 32px | 700 (bold) | 40px | -0.5px (tight) | 페이지 타이틀, 히어로 |
| Heading/lg | 28px | 700 (bold) | 36px | -0.5px (tight) | 섹션 타이틀 |
| Heading/base | 24px | 700 (bold) | 32px | -0.5px (tight) | 카드 제목, 서브 섹션 |
| Heading/sm | 20px | 600 (semibold) | 28px | 0px (normal) | 소제목, 모달 타이틀 |
| Heading/xs | 18px | 600 (semibold) | 24px | 0px (normal) | 리스트 제목, 작은 헤딩 |
| Body/lg | 17px | 400 (regular) | 24px | 0px (normal) | 인트로 단락 |
| Body/base | 16px | 400 (regular) | 22px | 0px (normal) | 기본 본문, 버튼 |
| Body/sm | 15px | 400 (regular) | 22px | 0px (normal) | 보조 본문 |
| Body/xs | 14px | 400 (regular) | 20px | 0px (normal) | 메타데이터, 설명 |
| Caption/lg | 13px | 500 (medium) | 18px | 0.2px (wide) | 캡션, 타임스탬프 |
| Caption/base | 12px | 500 (medium) | 18px | 0.2px (wide) | 가장 작은 본문 텍스트 |
| Micro/size11 | 11px | 600 (semibold) | 18px | 0px (normal) | 배지(TagMoney), 칩 내부 텍스트 |

## Letter Spacing Scale

| Token | Value | 용도 |
|-------|-------|------|
| tight | -0.5px | 헤딩 — 큰 글자일수록 자간을 좁혀 응집력 확보 |
| normal | 0px | 본문 — 기본값 |
| wide | 0.2px | 캡션 — 작은 글자의 가독성 향상 |

## Line Height Scale
사용 가능한 값: **18, 20, 22, 24, 28, 32, 36, 40** (px)

## Figma Typography Variable 매핑

Figma에서 사용되는 변수명과 값의 대응:

| Figma Variable | Value | 설명 |
|---------------|-------|------|
| `typography-variant-size11-fontsize` | 11 | Micro 사이즈 |
| `typography-variant-size11-lineheight` | 18 | Micro 행간 |
| `typography-variant-size11-letterspacing` | 0 | Micro 자간 |
| `typography-weight-medium` | semibold (600) | 배지·칩 텍스트 굵기 |
| `Typography/size11-medium` | Pretendard 600 / 11px / 18px / 0px | 배지 전용 복합 스타일 |

## 원칙
- **단일 서체로 위계 확보**: Pretendard 하나로 모든 것을 해결한다. 서체를 섞지 않으므로, 크기와 굵기의 차이가 곧 위계다.
- **굵기가 곧 역할**: 700은 제목, 600은 소제목/버튼/배지, 500은 레이블, 400은 본문. 이 규칙을 깨면 위계가 무너진다.
- **헤딩은 타이트하게, 본문은 여유롭게**: 헤딩의 -0.5px 자간은 덩어리감을 주고, 캡션의 +0.2px 자간은 작은 글씨의 가독성을 보장한다.
- **Micro(11px)는 배지 전용**: 11px는 일반 UI 텍스트에 쓰지 않는다. 오직 TagMoney 등 배지/칩 내부 텍스트에만 허용.
- **1px 단위 본문 스케일**: 14–17px 사이의 촘촘한 스케일이 정보 밀도가 높은 교통 인터페이스에서 세밀한 위계 조절을 가능하게 한다.
