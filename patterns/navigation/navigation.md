# Navigation

## 사용 시스템
- JAMS 2.1 (B2C), Biz JAMS (B2B)

## 설명
앱 내비게이션 패턴입니다. 시스템과 플랫폼에 따라 다른 variant를 사용합니다.

## Variants

### Top Bar (JAMS 2.1 B2C — 웹)
상단 내비게이션 바. 로고, 메뉴, 액션 버튼이 수평 배치됩니다.

| Property | Token |
|----------|-------|
| 높이 | 56px |
| 배경 | `color.bg.elevated` |
| 그림자 | `shadow.sm` |
| 좌우 패딩 | `spacing.layout.md` |

### Sidebar (Biz JAMS B2B)
좌측 사이드바. 접기/펼치기 가능하며, 섹션별 메뉴 그룹화를 지원합니다.

| Property | Token |
|----------|-------|
| 펼침 너비 | 240px |
| 접힘 너비 | 64px |
| 배경 | `color.bg.sidebar` |
| 텍스트 | `color.text.on-sidebar` |
| 아이콘 | `color.icon.on-sidebar` |
| 메뉴 아이템 패딩 | `spacing.3` `spacing.4` |
| 활성 항목 배경 | rgba(255,255,255,0.1) |

### Tab Bar (JAMS 2.1 B2C — 모바일)
하단 탭바. 아이콘 + 라벨 구성, 최대 5개 탭 권장.

| Property | Token |
|----------|-------|
| 높이 | 56px |
| 배경 | `color.bg.elevated` |
| 그림자 | `shadow.md` |
| 활성 컬러 | `color.primary` |
| 비활성 컬러 | `color.icon.secondary` |

## 접근성
- `role="navigation"` + `aria-label`로 영역 구분
- `aria-current="page"` 로 현재 페이지 표시
- Tab, Arrow 키로 메뉴 아이템 이동
