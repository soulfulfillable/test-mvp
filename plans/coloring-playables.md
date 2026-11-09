# Cozy Coloring — Playgama/YouTube 판 (기획 파트너, 2026-11-09, 사용자 B "스도쿠 뒤 착수" → 스도쿠 샌드박스 라이브로 착수)

## 바탕
웹판 `docs/coloring-book.html`(그림 6종·13색·숫자 모드/자유 모드·핀치 줌·조각 생성기·완성 컨페티). iOS 정식판은 그림 공급 문제로 보류(`plans/coloring-app.md`) — 이번은 **생성기 그림만** 쓰는 Playables 판이라 그 문제를 피한다.

## 범위
- `playables/coloring/`(웹판 복사 후 수정), 배포 `docs/coloring-playables/`. 웹판·iOS 계획은 그대로.
- 배관: `playables/sudoku/` 또는 `playables/catdoku/`의 Bridge 어댑터·storage·오디오(CC0)·광고·반응형·로봇·build.sh 복사.
- **그림**: 기존 6장 + 생성기 모티프 10~15장(만다라·기하 타일·꽃잎 링·동물 실루엣 조각 등, 시드 고정). 새 아트 외주 없음. 비슷해 보이지 않게 팔레트·조각 수·모티프를 섞는다.
- **진행(Playgama 3.1.2)**: 조각 수 기준 레벨 순서(40 → 150+), 갤러리에 완성작, 다음 그림 해금. 데일리 그림 1장(날짜 시드).
- **소리**: 붓 터치·색 완료·완성 효과음 + 잔잔한 BGM 루프(CC0) + 음소거(3.3).
- **광고**: 전면 = 그림 완성 사이(Bridge 타이밍). 보상형 = "이 색 한 번에 채우기" 1회/그림, "다음 그림 미리 해금"(2.2 규칙, rewarded 상태에서만, 미지원 숨김).
- **조작**: 탭 칠하기 + 핀치 줌 유지(Playgama 1.4.4 제스처 OK). 데스크톱: 마우스 + 휠 줌.
- 이모지 → SVG(✓⭐🎉). 1:1·가로 대응. 저장 = Bridge storage(진행·갤러리), Pages 폴백 localStorage.
- 표기 이름: **Cozy Coloring**(상표 충돌 짧게 조사 후 게시판에).
- 안 하는 것: 상점·결제·로그인, 사람 그림 수집, 경쟁 요소(릴랙스 앱).

## 검증
로봇: 그림 3장 끝까지 칠하기(숫자 모드·자유 모드), 보상형 경로, 저장 리로드, 핀치 줌, 14개 크기, 콘솔 0. Playgama 체크리스트 번호별 점검표. **publish_sandbox 는 사용자 yes 뒤.**
## 보고
미리보기 링크 + 스크린샷 2장(첫 그림, 갤러리) + 질문 1개("편안하게 칠해지나요?").

## 진행 기록
- **2026-11-09 v1.0.0 (개발 세션)** — 기획서 범위 전부 구현. `playables/coloring/`: `index.html`(게임), `coloring-pics.js`(그림 20장 + 데일리 생성기, 로봇이 node 에서도 읽음), `robot.js`(91/91, 실제 탭 182회, 14개 크기, 커버 3종), `build.sh`(zip 1.81MB + `docs/coloring-playables/`), `CREDITS.md`(CC0 음원 출처). 새 모티프 14장: Sleepy Kitten 40 · Desert Noon 53 · Autumn Fox 56 · Bluebird Morning 62 · Moonlit Owl 64 · Mountain Dawn 66 · Whale Song 69 · Honeycomb 76 · Koi Pond 91 · Diamond Quilt 92 · Rose Window 102 · Kaleidoscope 135 · Sunflower Field 152 · Lotus Mandala 173 (+ 기존 6장). 데일리 = 날짜 시드 만다라(배경 3종 × 링 3~5개 × 팔레트 6종, 59~183조각, 400일 라벨 전수 검증). 광고: 전면 `picture_done`, 보상형 `fill_color`(그림당 1회)·`unlock`. Playgama 드래프트 `cmw9jhdfj067nog0hwx8ztp9j`, 아카이브 PASSED, 커버 3종. **샌드박스 게시는 사용자 yes 뒤.** 와 포인트(기획서엔 없었음 → 내가 정함): 숫자 모드에서 색을 고르면 그 색 조각들이 은은히 숨 쉬고, 탭하면 손가락 자리에서 물감이 퍼진다 + 완성 순간 갤러리의 액자가 채워진다.
