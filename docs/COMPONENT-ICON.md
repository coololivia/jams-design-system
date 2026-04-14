# Component: Icon

> Figma 페이지: **Graphic** (`40:63098`)
> 연결 문서: [DESIGN.md](../DESIGN.md) — Section 2 (Icon 시맨틱 컬러), Section 4 (Component Stylings)

## Overview

JAMS 디자인 시스템의 아이콘 라이브러리. 모든 아이콘은 **line**(윤곽선)과 **fill**(채움) 두 가지 스타일을 지원하며, 8가지 크기로 제공된다.

## Sizes

| Size | px | 용도 |
|------|-----|------|
| 12 | 12×12 | 배지(TagMoney) 내부 아이콘 |
| 14 | 14×14 | 소형 인라인 표시 |
| 16 | 16×16 | 캡션 옆 보조 아이콘 |
| 18 | 18×18 | 헤더 액션 아이콘 |
| 20 | 20×20 | 컴포넌트 내 기본 아이콘 |
| 24 | 24×24 | **기본 크기** — 대부분의 UI에서 사용 |
| 32 | 32×32 | 강조 아이콘, 빈 상태 |
| 48 | 48×48 | 대형 일러스트 아이콘 |

## Styles

- **line**: 윤곽선 스타일. 기본 사용 권장
- **fill**: 채움 스타일. 활성/선택 상태 표현 시 사용 (예: 탭바 활성 탭)

## Color

아이콘 컬러는 시맨틱 토큰을 사용한다 (DESIGN.md §2 Semantic 참조):

| Token | 용도 |
|-------|------|
| `iconDefault` | 기본 아이콘 (Gray/500 `#86919A`) |
| `iconSubtle` | 비활성/보조 아이콘 |
| `iconBrand` | 브랜드 강조 (Brand/500) |
| `iconInverse` | 반전 배경 위 아이콘 (white) |
| `iconInfo` | 정보 상태 |
| `iconSuccess` | 성공 상태 |
| `iconWarning` | 경고 상태 |
| `iconDanger` | 에러/위험 상태 |

## Icon List

### Navigation / Arrow

| Name | Style | 설명 |
|------|-------|------|
| back | line | 뒤로 가기 |
| arrowleft | line | 좌측 화살표 |
| arrowright | line | 우측 화살표 |
| arrowup | line | 상단 화살표 |
| arrowdown | line | 하단 화살표 |
| arrow02down | line | 2차 하향 화살표 |
| arrow02up | line | 2차 상향 화살표 |
| arrowleft02 | line | 2차 좌측 화살표 |
| arrowright02 | line | 2차 우측 화살표 |
| arrowdown02 | line | 2차 하단 화살표 |
| arrowup02 | line | 2차 상단 화살표 |
| arrowgoback | line | 뒤로 되돌아가기 |
| up | line | 위로 |
| change | line | 변경/전환 |

### Select / Control

| Name | Style | 설명 |
|------|-------|------|
| selectarrowdown | fill | 셀렉트 드롭다운 화살표 |
| selecarrowup | fill | 셀렉트 올림 화살표 |
| check | line | 체크 표시 |
| checkcircle | line | 원형 체크 |
| circlecheck | line/fill | 원형 체크 (채움 포함) |

### Action

| Name | Style | 설명 |
|------|-------|------|
| plus | line | 추가 |
| minus | line | 제거 |
| close | line | 닫기 |
| search | line | 검색 |
| aisearch | line | AI 검색 |
| filter | line | 필터 |
| filter02 | line | 2차 필터 |
| setting | line | 설정 |
| modify | line | 수정 |
| modify2 | line | 수정 (대체) |
| delete | line | 삭제 |
| trash02 | line | 휴지통 |
| copy | line | 복사 |
| redo | line | 다시 실행 |
| reply | line | 답장 |
| share | line | 공유 |
| share2 | line | 공유 (대체) |
| download02 | line | 다운로드 |
| downsave | line | 저장 다운로드 |
| upload | line | 업로드 |
| capture | line | 캡처 |
| rotation | line | 회전 |
| zoomin | line | 확대 |
| zoomout | line | 축소 |
| list | line | 리스트 |
| list02 | line | 리스트 (대체) |
| menu | line | 메뉴 |
| kebab | line | 세로 더보기 |
| meatball | line | 가로 더보기 |
| save | line | 저장 |
| move | fill | 이동 |

### Communication

| Name | Style | 설명 |
|------|-------|------|
| comment | line/fill | 댓글 |
| chat | line/fill | 채팅 |
| mail | line | 메일 |
| direct | line | 다이렉트 메시지 |
| alram | line | 알림 |
| message | fill | 메시지 |

### Status / Info

| Name | Style | 설명 |
|------|-------|------|
| info | line | 정보 |
| caution | line | 주의 |
| exclamation | line | 경고 |
| ban | line | 금지 |
| closecircle | line/fill | 원형 닫기 |
| minuscircle | line | 원형 마이너스 |
| pluscircle | line | 원형 플러스 |
| playcircle | line | 원형 재생 |
| loading | line | 로딩 |
| tooltip1 | fill | 툴팁 1 |
| tooltip2 | fill | 툴팁 2 |
| tooltip3 | line | 툴팁 3 |
| tooltip4 | line | 툴팁 4 |
| new | fill | 새로운 항목 표시 |
| top | fill | 상단 고정 표시 |

### Engagement

| Name | Style | 설명 |
|------|-------|------|
| heart | line/fill | 좋아요 |
| scrap | line/fill | 스크랩 |
| thumbsup | line/fill | 추천 |
| thumbsdown | line/fill | 비추천 |
| recent | line/fill | 최근 본 |
| smart | line | 스마트 |
| thunder | line/fill | 번개 (빠른 액션) |
| view | line/fill | 조회 |
| hide | line | 숨기기 |
| target | line/fill | 타겟 |
| flag | line/fill | 깃발/신고 |

### Location / Map

| Name | Style | 설명 |
|------|-------|------|
| location | line | 위치 |
| map | line/fill | 지도 |
| map02 | line | 지도 (대체) |
| pin | line/fill | 핀 |
| pinslash | line | 핀 해제 |
| pixedpin | line/fill | 고정 핀 |
| home | line | 홈 |
| home02 | line/fill | 홈 (대체) |
| global | line | 글로벌 |
| direction | fill | 방향 |

### Finance

| Name | Style | 설명 |
|------|-------|------|
| cash | line | 현금 |
| cash2 | line | 현금 (대체) |
| cashtext | line | 현금 텍스트 |
| money2 | line | 돈 |
| money | fill | 돈 (채움) |
| moneybag | line | 머니백 |
| card | line | 카드 |
| bankbook | line | 통장 |
| wallet | line | 지갑 |
| calculator | line | 계산기 |
| discount | fill | 할인 |
| daypay | fill | 일급 |

### Media / Content

| Name | Style | 설명 |
|------|-------|------|
| camera | line | 카메라 |
| picture | line | 사진 |
| nopicture | line | 사진 없음 |
| play2 | line | 재생 |
| video | fill | 비디오 |
| contents | line/fill | 컨텐츠 |
| memo | line | 메모 |
| folder | line/fill | 폴더 |
| clip | line | 첨부 |
| presentation | line/fill | 프레젠테이션 |

### People / Account

| Name | Style | 설명 |
|------|-------|------|
| person | line/fill | 사람 |
| my | line | 마이페이지 |
| community | line | 커뮤니티 |
| company | line/fill | 회사 |
| idcard | line | 신분증 |
| logout | line | 로그아웃 |
| career | line | 경력 |
| school | line | 학교 |

### Device / Tech

| Name | Style | 설명 |
|------|-------|------|
| monitor | line | 모니터 |
| mobile | line | 모바일 |
| link | line | 링크 |
| link2 | line | 링크 (대체) |
| lock | line | 잠금 |
| lockclosed | line | 잠김 상태 |
| appdown | line | 앱 다운로드 |
| captiveportal | line | 캡티브 포탈 |

### Time / Date

| Name | Style | 설명 |
|------|-------|------|
| clock | line | 시계 |
| calendar | line | 캘린더 |
| date | line | 날짜 |
| period | line | 기간 |

### AI / Special

| Name | Style | 설명 |
|------|-------|------|
| ai | line/fill | AI |
| ai02 | line/fill | AI (대체) |
| aisearch | line | AI 검색 |
| agentsend | fill | 에이전트 보내기 |
| agentstop | fill | 에이전트 중지 |
| atom | line | 원자 |
| smartfit | fill | 스마트핏 |
| rocket | line | 로켓 |
| risingsun | line | 떠오르는 해 |
| growth | line | 성장 |
| certify | line | 인증 |
| unicon | line | 유니콘 |
| z | line | Z세대 |

## Usage Rules

1. 기본 아이콘 크기는 **24px**, 색상은 **iconDefault** (`#86919A`)
2. 활성/선택 상태에서는 **line → fill** 전환 + **iconBrand** 컬러
3. 비활성 상태에서는 **iconSubtle** 컬러
4. 아이콘과 텍스트 사이 간격: **spacing-1** (4px) ~ **spacing-2** (8px)
5. 터치 타겟은 아이콘 크기와 무관하게 최소 **44px** 확보
6. 절대 아이콘 색상을 hex로 하드코딩하지 말 것 — 시맨틱 토큰 사용
