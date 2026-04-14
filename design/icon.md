# Icon

## 시맨틱 컬러 토큰

아이콘은 시맨틱 Icon 토큰을 사용한다. hex 하드코딩 금지.

| Token | Light | Dark | 용도 |
|-------|-------|------|------|
| `iconDefault` | Gray/500 `#86919A` | Gray/500 `#86919A` | 기본 아이콘 — Light/Dark 동일 |
| `iconBrand` | brand500 | brand500 | 브랜드 강조 아이콘, 활성 탭 |
| `iconInverse` | White `#FFFFFF` | — | 브랜드 배경 위 아이콘 |
| `iconSubtle` | Gray/300 `#B8BFC5` | Gray/700 `#484F56` | 서브틀/비강조 아이콘 |
| `iconDisabled` | Gray/400 `#9EA8AF` | Gray/600 `#636C74` | 비활성 상태 아이콘 |
| `iconInfo` | Blue `#2684FF` | Blue `#2684FF` | 정보 상태 아이콘 |
| `iconSuccess` | Green `#02B160` | Green `#02B160` | 성공 상태 아이콘 |
| `iconWarning` | Yellow `#FFBB00` | Yellow `#FFBB00` | 경고 상태 아이콘 |
| `iconDanger` | Red `#F22A23` | Red `#F22A23` | 에러/위험 상태 아이콘 |

## 아이콘 사이즈 스케일

아이콘은 **8단계 고정 사이즈**만 허용된다. 이 외의 크기를 임의로 만들지 마라.

| Size | 용도 |
|------|------|
| **12px** | TagMoney 배지 내부 아이콘 |
| **14px** | Button 40, Button 32 |
| **16px** | Button 52, Button 48 |
| **18px** | Input 40 |
| **20px** | Checkbox, Radio |
| **24px** | 기본 아이콘 사이즈, Input 52/48, Checkbox/Radio, Check |
| **32px** | 대형 아이콘, 빈 상태(empty state) |
| **48px** | 히어로/피처 아이콘 |

## 컴포넌트별 아이콘 사이즈

| 컴포넌트 | 사이즈 | 비고 |
|----------|--------|------|
| Button 52, 48 | 16px | — |
| Button 40 | 14px | — |
| Button 32 | 14px | — |
| Input 52, 48 | 24px | — |
| Input 40 | 18px | — |
| TagMoney 배지 | 12px | 텍스트 좌측 배치 |
| Check 컴포넌트 | 16px, 20px, 24px | 3가지 사이즈 |
| Navigation 탭 | 24px | `iconDefault`(비활성), `iconBrand`(활성) |

## 아이콘 스타일

모든 아이콘은 **line(아웃라인)**과 **fill(채움)** 두 가지 스타일로 제공된다. 기본 사이즈는 **24×24px**.

- **line**: 기본 상태, 비활성 상태에 사용. 가벼운 시각적 무게
- **fill**: 활성/선택 상태에 사용. 강한 시각적 무게

## 아이콘 인벤토리 (Figma 기준)

### Navigation & Arrow

| line | fill | 설명 |
|------|------|------|
| `back-line` | — | 뒤로가기 |
| `arrowleft-line` | — | 좌 화살표 |
| `arrowright-line` | — | 우 화살표 |
| `arrowdown-line` | — | 하 화살표 |
| `arrowup-line` | — | 상 화살표 |
| `arrowleft02-line` | — | 좌 화살표 (alt) |
| `arrowright02-line` | — | 우 화살표 (alt) |
| `arrowdown02-line` | — | 하 화살표 (alt) |
| `arrowup02-line` | — | 상 화살표 (alt) |
| `arrow02down-line` | — | 하 화살표 (variant) |
| `arrow02up-line` | — | 상 화살표 (variant) |
| `arrowgoback-line` | — | 되돌아가기 |
| `selectarrowdown-fill` | `selectarrowdown-fill` | 셀렉트 드롭다운 화살표 |
| `selecarrowup-fill` | `selecarrowup-fill` | 셀렉트 올림 화살표 |
| `up-line` | — | 위로 |
| `change-line` | — | 전환/교체 |
| — | `top-fill` | 맨 위로 |
| — | `direction-fill` | 방향 |

### Action & Edit

| line | fill | 설명 |
|------|------|------|
| `close-line` | — | 닫기 |
| `check-line` | — | 체크 |
| `plus-line` | — | 추가 |
| `minus-line` | — | 빼기 |
| `search-line` | — | 검색 |
| `setting-iline` | — | 설정 |
| `modify-line` | — | 수정 |
| `modify2-line` | — | 수정 (alt) |
| `delete-line` | — | 삭제 |
| `copy-line` | — | 복사 |
| `share-line` | — | 공유 |
| `share2-line` | — | 공유 (alt) |
| `link-line` | — | 링크 |
| `link2-line` | — | 링크 (alt) |
| `clip-line` | — | 첨부 |
| `filter-line` | — | 필터 |
| `filter02-line` | — | 필터 (alt) |
| `redo-line` | — | 다시하기 |
| `reply-line` | — | 답장 |
| `capture-line` | — | 캡처 |
| `download02-line` | — | 다운로드 |
| `downsave-line` | — | 저장(다운) |
| `upload-line` | — | 업로드 |
| `save-line` | — | 저장 |
| `rotation-line` | — | 회전 |
| `zoomin-line` | — | 확대 |
| `zoomout-line` | — | 축소 |
| `logout-line` | — | 로그아웃 |
| — | `agentsend-fill` | AI 전송 |
| — | `agentstop-fill` | AI 정지 |

### Status & Info

| line | fill | 설명 |
|------|------|------|
| `circlecheck-line` | `circlecheck-fill` | 원형 체크 |
| `closecircle-line` | `closecircle-fill` | 원형 닫기 / clear |
| `minuscircle-line` | — | 원형 마이너스 |
| `pluscircle-line` | — | 원형 플러스 |
| `info-line` | — | 정보 |
| `caution-line` | — | 주의 |
| `exclamation-line` | — | 느낌표 |
| `ban-line` | — | 금지 |
| `certify-line` | — | 인증 |
| `loading-line` | — | 로딩 |
| — | `tooltip1-fill` | 툴팁 1 |
| — | `tooltip2-fill` | 툴팁 2 |
| `tooltip3-line` | — | 툴팁 3 |
| `tooltip4-line` | — | 툴팁 4 |

### UI & Layout

| line | fill | 설명 |
|------|------|------|
| `list-line` | — | 리스트 |
| `list02-line` | — | 리스트 (alt) |
| `menu-line` | — | 메뉴 (햄버거) |
| `kebab-line` | — | 케밥 메뉴 (세로 점 3개) |
| `meatball-line` | — | 미트볼 메뉴 (가로 점 3개) |
| `view-line` | `view-fill` | 보기 |
| `hide-line` | — | 숨기기 |
| `mobile-line` | — | 모바일 |
| `monitor-line` | — | 모니터 |

### Social & Communication

| line | fill | 설명 |
|------|------|------|
| `heart-line` | `heart-fill` | 좋아요 |
| `scrap-line` | `scra-fill` | 스크랩 |
| `thumbsup-line` | `thumbsup-fill` | 엄지 위 |
| `thumbsdown-line` | `thumbsdown-fill` | 엄지 아래 |
| `comment-line` | `comment-fill` | 댓글 |
| `chat-line` | `chat-fill` | 채팅 |
| `mail-line` | — | 메일 |
| `community-line` | — | 커뮤니티 |
| `alram-line` | — | 알림 |
| — | `message-fill` | 메시지 |

### Place & Map

| line | fill | 설명 |
|------|------|------|
| `location-line` | — | 위치 |
| `pin-line` | `pin-fill` | 핀 |
| `pinslash-line` | — | 핀 해제 |
| `pixedpin-line` | `pixed-fill` | 고정 핀 |
| `map-line` | `map-fill` | 지도 |
| `map02-line` | — | 지도 (alt) |
| `target-line` | `target-fill` | 타겟/현위치 |
| `home-line` | — | 홈 |
| `home02-line` | `home02-fill` | 홈 (alt) |
| `company-line` | `company-fill` | 회사 |
| `school-line` | — | 학교 |
| `global-line` | — | 글로벌 |

### Media & Content

| line | fill | 설명 |
|------|------|------|
| `picture-line` | — | 사진 |
| `nopicture-line` | — | 사진 없음 |
| `camera-line` | — | 카메라 |
| `playcircle-line` | — | 재생 (원형) |
| `play2-line` | — | 재생 |
| `contents-line` | `contents-fill` | 콘텐츠 |
| `memo-line` | — | 메모 |
| `folder-line` | `folder-fill` | 폴더 |
| `flag-line` | `flag-fill` | 플래그 |
| — | `video-fill` | 비디오 |
| — | `new-fill` | 새로운 항목 표시 |

### Finance & Commerce

| line | fill | 설명 |
|------|------|------|
| `cash-line` | — | 현금 |
| `cash2-line` | — | 현금 (alt) |
| `cashtext-line` | — | 현금 텍스트 |
| `money2-line` | — | 돈 |
| `moneybag-line` | — | 돈 가방 |
| `card-line` | — | 카드 |
| `wallet-line` | — | 지갑 |
| `bankbook-line` | — | 통장 |
| `calculator-line` | — | 계산기 |
| — | `money-fill` | 돈 (fill) |
| — | `daypay-fill` | 일급/데이페이 |
| — | `discount-fill` | 할인 |

### Date & Time

| line | fill | 설명 |
|------|------|------|
| `calendar-line` | — | 달력 |
| `date-line` | — | 날짜 |
| `period-line` | — | 기간 |
| `clock-line` | — | 시계 |
| `recent-line` | `recent-fill` | 최근 |

### People & Identity

| line | fill | 설명 |
|------|------|------|
| `person-line` | `person-fill` | 사람 |
| `my-line` | — | 마이 |
| `idcard-line` | — | 신분증 |
| `career-line` | — | 커리어 |
| — | `presentation-fill` | 프레젠테이션 |
| `presentation-line` | — | 프레젠테이션 |

### AI & Tech

| line | fill | 설명 |
|------|------|------|
| `ai-line` | `ai-fill` | AI |
| `ai02-line` | `ai02-fill` | AI (alt) |
| `aisearch-line` | — | AI 검색 |
| `smart-line` | — | 스마트 |
| `atom-line` | — | 아톰 |
| `rocket-line` | — | 로켓 |
| `thunder-line` | `thunder-fill` | 번개 |
| `unicon-line` | — | 유니콘 |
| `growth-line` | — | 성장 |
| `risingsun-line` | — | 라이징썬 |
| `appdown-line` | — | 앱 다운로드 |
| `captiveportal-line` | — | 캡티브 포털 |
| `lockclosed-line` | — | 잠금(닫힘) |
| `lock-line` | — | 잠금 |
| — | `smartfit-fill` | 스마트핏 |
| — | `move-fill` | 이동 |
| `direct-line` | — | 다이렉트 |
| `z-line` | — | Z |
| `trash02-line` | — | 휴지통 |

## 아이콘 사용 규칙 (필수)

아이콘을 컴포넌트에 배치할 때 **반드시 `icon` 래퍼 프레임**을 통해 사용한다. 아이콘 리소스를 직접(다이렉트) 배치하지 마라.

```
✅ 올바른 구조:
icon (Frame, auto-layout)
  └─ iconsize (Instance of icon component)
       └─ primitiveResource (size variant)

❌ 잘못된 구조:
icon-arrow (Frame)          ← 이름을 임의로 지으면 안됨
  └─ selectarrowdown-fill   ← 아이콘을 직접 배치하면 안됨
```

- 프레임 이름은 항상 `icon` (용도별 접미사 없이)
- 내부에 `iconsize` 인스턴스를 넣어 사이즈 스케일을 제어
- 아이콘 컬러는 `iconsize` 내부가 아닌 `icon` 프레임에서 시맨틱 토큰으로 제어
- 이 구조를 지켜야 아이콘 교체(instance swap)와 사이즈 변경이 일관되게 동작함

### Figma에서 아이콘 추가 방법 (필수)

**반드시 `icon` 컴포넌트(ID: 20994:5124)의 인스턴스를 생성**한 뒤, 내부 `primitiveResource`에서 원하는 아이콘으로 swap한다.

```
1. iconComp = figma.getNodeById("20994:5124")  // icon 컴포넌트
2. instance = iconComp.createInstance()          // 인스턴스 생성
3. instance.name = "icon"                        // 이름은 항상 "icon"
4. instance 내부 iconsize의 size variant 설정     // 24, 18, 16, 14 등
5. primitiveResource 내부 아이콘을 swapComponent() // 원하는 아이콘으로 교체
```

**절대 하지 말 것:**
- 아이콘 컴포넌트를 직접 인스턴스화하지 말 것 (예: `selectarrowdown-fill.createInstance()`)
- 커스텀 벡터로 아이콘을 직접 그리지 말 것
- `icon-arrow`, `icon-search` 등 임의 이름을 붙이지 말 것

## 아이콘 배치 규칙

- **버튼**: `iconLeft`, `iconRight` 각각 독립 토글. 아이콘 없이/좌측만/우측만/양쪽 모두 가능
- **인풋**: `leftIcon`, `rightIcon` 각각 독립 토글. Pressed/Errorpressed 상태에서 clear 버튼(`closecircle-fill`)이 자동 표시
- **배지**: 아이콘은 항상 텍스트 좌측, 갭 2px
- **아이콘↔텍스트 갭**: spacing-1 (4px) 기본, 배지는 spacing-0.5 (2px)
