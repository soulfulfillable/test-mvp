# Cozy Coloring (Playables) — 개발 세션 게시판
마지막 갱신: 2026-11-09 23:30 (UTC)

## 🔁 이어받기
- 마지막 저장: 2026-11-09 23:30 UTC · 작업 브랜치 `claude/coloring-playables`(main 에 ff 반영) · 경로 `playables/coloring/`, 웹 `docs/coloring-playables/`
- 승인: 사용자 "추천대로"(11-08, B = 스도쿠 뒤) → 스도쿠 샌드박스 라이브(11-08) 확인 후 착수. 기획서 `plans/coloring-playables.md`. 보고는 쉬운 영어.
- 방금 끝낸 것: **v1.5.2 — 눈 버튼 꾹 누르기 아이폰 버그 수정**. 그 전 **v1.5.1 — 눈 버튼 = 누르는 동안만 보기**. 그 전 **v1.5.0 — 완성본 살짝 보기**(눈 버튼 + 잠긴 카드 흐린 컬러). 그 전 **v1.4.0 — 데일리 만다라 삭제**(사용자 "만다라 자체가 이상해"). 그 전 **v1.3.0 — 그림 20장 전부 폴리아트**(사용자 "ㄱㄱㄱ"). 그 전 **폴리아트 생성기 + 여우 샘플 1장**(사용자 "그림이 허접" → 추천 A). 미리보기 https://soulfulfillable.github.io/test-mvp/coloring-playables/#sample . 그 전 **v1.2.0 — 전면 리스타일**(사용자 "너무 밋밋" → frontend-design 스킬 적용: 자두색 스튜디오 갤러리·물감 워드마크·팔레트색 액자·마리골드 강조·팔레트 워시). 그 전 **v1.1.0 — 완성 연출 전면 교체**(사용자 "끝날 때 지루하다" → 조각 물결·빛 쓸기·반짝이·글로우·팔레트 폭죽·큰 글자·5초 뒤 다음 그림으로 자동 슬라이드). 그 전 **v1.0.0 전체** — ① 웹판(`docs/coloring-book.html`) 복사 + 배관(Bridge 2.4.0·storage·파일 음원 컨트롤러·전면/보상형 광고·세로/가로/1:1 레이아웃·로딩→game_ready) ② 그림 생성기 모듈 `coloring-pics.js`(기존 6장 + 새 모티프 14장 = 20장, 조각 40→173 오름차순 레벨, 잠금/해금, 완성 갤러리 필터, **데일리 만다라**(KST 날짜 시드, 400일 검증) ③ 소리: CC0 효과음 7개 + 잔잔한 어쿠스틱 기타 BGM 64초 루프("Still Pickin", Kevin MacLeod, FreePD CC0) + 음소거 ④ 광고: 전면 `picture_done`(완성 뒤 Next/Gallery), 보상형 `fill_color`(그림당 1회 "이 색 한 번에 채우기")·`unlock`(다음 그림 미리 해금, 첫 잠금 카드에만) — `isRewardedSupported` 일 때만 표시 ⑤ 로봇 `robot.js` **91/91**(실제 탭 182회) ⑥ build.sh → zip 1.81MB·Pages 복사 ⑦ Playgama 드래프트+폼+아카이브 PASSED+커버 3종.
- 진행 중이던 것: 없음.
- **다음 할 일**: ① 사용자 보고 → "편안하게 칠해지나요?" 답 기다림 ② **사용자 yes 면 `publish_sandbox`**(app `cmw9jhdfj067nog0hwx8ztp9j`, 아카이브 1.5.2 `cmwa62fcb108oog0hhlzmozz7`) → 공유 링크 → 게시판 ③ QA 툴 인증은 Codex(아래 양식) ④ 피드백은 **지목된 것만** 고치기(PLAYBOOK 11-08) ⑤ 예상 피드백 대비: 조각이 작다(핀치 줌 안내?) / 그림이 비슷하다(모티프 교체) / 소리가 심심하다(BGM 1곡 더) — 사용자가 말하면 그때.
- 사용자 대기 중인 것: ① 새 그림 20장 느낌(샌드박스에서) ② "un…" 플러그인 이름(급하지 않음). 샌드박스: https://playgama.ai/play/ncezmriqyxkqmr
- 이어받기 문장: `soulfulfillable/test-mvp 의 board/coloring-playables.md "🔁 이어받기" 와 plans/coloring-playables.md 를 읽고, "다음 할 일"부터 이어서 해줘. CLAUDE.md·DESIGN.md·PLAYBOOK.md 규칙대로. Playgama MCP 도구 있는지 먼저 확인.`

## 지금 상태 (3줄 이내)
- 미리보기 https://soulfulfillable.github.io/test-mvp/coloring-playables/ (Bridge mock: 저장 됨·광고 없음·보상형 버튼 숨김). 게임 v1.0.0, 로봇 91/91, 콘솔 0, 외부 요청 0, zip 1.81MB(22파일).
- Playgama 드래프트 **Cozy Coloring** `cmw9jhdfj067nog0hwx8ztp9j` — 폼 저장, 아카이브 `cozy-coloring-1.0.0`(`cmw9jlack06c8og0hfz7mta3s`) **PASSED, bridgeSdk FOUND 2.4.0**, 커버 3종 확정. 런치 단계: archive·bridge·covers DONE, form NO_CERTIFICATION(QA 툴), **current = sandbox(사용자 yes 대기)**.
- 결정(내가 한 것, 사용자가 바꾸면 한 줄): 레벨 잠금 = 바로 앞 그림 완성(숫자/자유 어느 모드든), 데일리는 항상 열림, 완성 데일리는 최근 30일만 갤러리에 보관.

## Playgama
- 드래프트 **Cozy Coloring** id `cmw9jhdfj067nog0hwx8ztp9j` (engine js, 2026-11-09 생성). **publish_sandbox 는 사용자 yes 뒤.**
- 폼 저장됨(category **drawing**, EN, iOS/Android/Desktop, 세로+가로, leaderboards·social·multiplayer 없음, description/howToPlay/story). 아카이브 **cozy-coloring-1.0.0 id `cmw9jlack06c8og0hfz7mta3s`** confirm 완료 → **빌드 체크 PASSED, bridgeSdk FOUND 2.4.0**. v1.1.0 아카이브 `cmw9rtvg60hmnm80htrt4e5p6` PASSED. v1.2.0 `cmw9tm3hh0lqhog0hvwkkraxf` PASSED. v1.3.0 `cmw9x5rrg0o4jm80h580ritnw` PASSED. v1.4.0 `cmwa4zkaq0yxpog0hj0v60mxy` PASSED. v1.5.0 `cmwa5eg9x0zi8og0hij14lahw` PASSED. v1.5.1 `cmwa5ny5d0x87m80h43owl46v` PASSED. **v1.5.2 아카이브 `cozy-coloring-1.5.2` id `cmwa62fcb108oog0hhlzmozz7`**(최신; 아이폰 꾹 누르기 수정). (빈 슬롯 `cmwa58fsw0wpum80hua1eiwd8` 은 크기 오기로 안 씀) 폼 description/story 갱신(만다라 문구 제거, 11-10). 새 커버 3종(해바라기) confirm: square `cmw9x5ugv0o4om80hbgi3nods`, portrait `cmw9x5wvj0o4tm80hj4isy5s9`, landscape `cmw9x5z9u0o4wm80hyxlplt6k`. 커버 3종 confirm 완료: square `cmw9qmtbj0g2om80hps2skzr0`, portrait `cmw9qnwls0hdyog0hfko1hjj3`, landscape `cmw9qp7wg0hgzog0h9u5f516a`.
- 이름 조사(11-09 WebSearch): "Cozy Coloring" **등록 상표 없음**. 가까운 것: 미국 상표 출원 **COZY COLORS**(serial 98875767, Maison Battat Inc., 28류 장난감, 2024-11 출원) — 소프트웨어 아님. 앱스토어엔 "Cozy Coloring Book for Adults", "Comfy Cute Cozy Coloring Book", "Cozy Color: Paint by Number" 등 비슷한 제목 다수 → 일반 표현이라 충돌 위험은 낮지만 **검색에서 묻힐 수 있음**. 확정은 기획 파트너(대안: "Cozy Coloring: Daily Mandala" 같은 부제).

### Playgama 체크리스트 점검표 (get_game_checklist 2026-11-09, 번호별)
| 번호 | 항목 | 상태 | 근거 |
|---|---|---|---|
| 1.1.1–1.1.2 | Bridge SDK 최신 + Required steps 8개 | ✅ | SDK 2.4.0 동봉, config 동봉, `<head>` 첫 스크립트, initialize 뒤 로드, language 읽음, storage 시작 1회 get·탭 뒤 1.2초 묶어 set(숨김/일시정지/나가기 땐 즉시), isAudioEnabled/pause 이벤트, 로딩 숨긴 뒤 `game_ready` 1회(로봇), 전면 광고 타이밍은 Bridge, 미지원 숨김(보상형 버튼 2개는 `isRewardedSupported` 일 때만 — 로봇이 mock 에서 숨김 확인) |
| 1.2.x | 외부 서비스·로그인·외부 자원 없음 | ✅ | 로봇 "external requests: 0", 로그인·링크·분석 SDK 없음 |
| 1.3.x | 300MB 이하, index.html 루트, 라틴 파일명 | ✅ | 1.81MB, 22파일 |
| 1.4.x | 모바일 전체 화면·키보드·방향·제스처·롱프레스 | ✅ | fixed 전체 화면, 입력칸 없음, 세로+가로 선언, 탭·핀치·한 손가락 끌기(줌 상태), user-select/callout 없음·contextmenu 차단 |
| 1.5.x | 데스크톱 키보드/마우스, Esc 미사용 | ✅ | 마우스 클릭·휠 줌 + 숫자키/+/-/M, 로봇 "Esc does nothing" |
| 1.6.x | 모든 비율·1:1·겹침·스크롤 없음·팝업 닫기 | ✅ | 로봇 14개 크기: 머리/그림/팔레트 겹침 0·화면 안·그림 ≥ 55%·스와치 ≥ 40px·가장 작은 숫자 ≥ 5.5px, 문서 스크롤 없음, 완성 패널은 그림을 탭하면 닫힘 + Gallery 버튼 |
| 1.7.x | 에러·멈춤 없음, 끝까지 플레이, 5개 브라우저 | ⚠️ 부분 | 콘솔/페이지 에러 0, 그림 3장(숫자·자유·숫자+보상형)을 실제 탭으로 100%, 데일리 400일 라벨 전수. **Safari·Firefox·Edge·Opera 실기기 미확인**(헤드리스 Chromium) — 사용자 폰 확인 필요 |
| 2.1.x | 전면 광고: Bridge 만, 논리적 멈춤, 실패해도 진행 | ✅ | `picture_done` = 완성 패널의 Next picture/Gallery(로봇: 호출 1회씩), 광고 중 소리 정지 |
| 2.2.x | 보상형: 옵트인·거절 가능·보너스만·`rewarded` 에서만 | ✅ | 버튼에 AD/WATCH AD 배지, 채우기 = 그림당 1회(보너스), 해금 = 다음 그림 미리(바로 앞을 끝내도 열림 → 보너스), closed/failed 미지급(로봇), 두 번 no-fill 이면 채우기 버튼 숨김 |
| 2.3–2.5 | 배너·결제·실물 없음 | ✅ | 해당 없음 |
| 3.1.x | 진행·난이도 상승·온보딩 | ✅ | 20레벨 조각 40→173 + 데일리, 설명 화면 0 — 선택한 색의 조각이 깜빡이고 숫자가 진해지는 게 안내 전부(웹판에서 검증된 방식) |
| 3.2.x | Bridge storage 만, 리로드 생존 | ✅ | localStorage 미사용, `progress`/`settings` 2키, 로봇 리로드: 완성 3장·데일리 5조각·해금·보상형 사용·음소거 복원 |
| 3.3.x | 음악+효과음, 파일 음원, 음소거, 플랫폼 음소거·일시정지, 숨김 시 무음 | ✅ | CC0 ogg+mp3 효과음 7 + BGM 1곡, 음소거 버튼(갤러리/플레이), hidden 시 suspend(로봇) |
| 3.4.x | 영어 기본, 언어는 Bridge 에서 | ✅ | 영어만, `platform.language` 읽기만 |
| 3.5.1 | 게임 안 제목 = 폼 제목 | ✅ | `<title>`·갤러리 h1·로딩 "Cozy Coloring" = 폼 |
| 4.1 | 금지 콘텐츠 | ✅ | 동물·풍경·무늬 |
| 4.2.x | 저작권·카탈로그 복제 아님 | ✅ | 그림 20장 전부 자체 생성기(코드), 음원 CC0(`CREDITS.md`) |
| 4.3.x | 생성형 AI 전용 아님, 이모지 없음 | ✅ | 이모지 0(로봇), 스트로크 SVG 아이콘(✓·자물쇠·붓·광고·별), 시스템 글꼴 |
| 4.4 | 사용자 데이터 | ✅ | 진행 상황만 로컬 저장 |

### 🖱️ Codex 에게 (브라우저 작업) — QA 툴 인증 (샌드박스 yes 와 무관하게 가능)
- URL: `get_archive_qa_tool_link`(app `cmw9jhdfj067nog0hwx8ztp9j`, 아카이브 `cmw9jlack06c8og0hfz7mta3s`) 로 받기 — 스도쿠 때 형식은 https://developer.playgama.com/qa-tool/<archiveId>
- 로그인 계정: Playgama 개발자 계정(Soulfulfill)
- 할 것: QA 툴 체크를 끝까지(모바일/데스크톱, 광고 상태, 저장 리로드). 결과 원문을 이 게시판 "QA 툴(날짜)" 줄로. 실패 항목 수정은 Claude 세션.
- 하지 않을 것: Submit for review, publish, 트래픽 캠페인, 결제.

## 다음 할 일 / 사용자에게 받을 것
- 사용자: ① "편안하게 칠해지나요?" ② 샌드박스 게시 yes/no.
- 아쉬운 점(숨기지 않음): ⓪ 확대(+) 버튼 14px 안쪽 조각은 탭이 버튼으로 끌려감(브라우저 터치 보정) — 확대·끌기로 비켜 칠해야 함 ⓪-2 그림이 커져서(130~510조각) 한 장 칠하는 시간이 이전의 2~3배 ① 실기기 사파리 미확인 ② 그림 오른쪽 아래 줌 버튼(+/−/1×)이 그 자리 조각을 가림 — 줌·끌기로 비켜 칠할 수 있지만 첫 사용자는 모를 수 있음(로봇은 그 자리 조각 1개를 디버그 탭으로 처리) ③ BGM 1곡뿐(스도쿠는 2곡) ④ 데일리 만다라는 매일 다르지만 모두 '동심원' 구조라 2~3주 지나면 비슷해 보일 수 있음 ⑤ 데스크톱 커서가 조각 위에서 바뀌지 않음(포인터 기본).

## 사용자 피드백 기록 (최신이 위, 원문 인용 + 어떻게 반영했나)
- 11-10 샌드박스 게시 질문에 **"응"** = yes → publish_sandbox 호출(아카이브 1.5.2 `cmwa62fcb108oog0hhlzmozz7`): **샌드박스 URL https://playgama.ai/play/ncezmriqyxkqmr** (siteId `ncezmriqyxkqmr`), **PUBLISHED**(publication `cmwagqjsl1bvum80hcczfg6mq`, release `cmwagqjsa1bvrm80h1avm7egi`, 2026-11-10 09:03Z).
- 11-10 (v1.5.2 실기기) **"아이제된다"** → 눈 버튼 꾹 누르기 아이폰에서 정상 확인(사용자 폰). 더 안 건드림.
- 11-10 (v1.5.1 뒤) **"오잉 눌러야지 나오는데 누르고잇으면 안나오고. 아까처럼"** → 원인: 아이폰 사파리는 누름이 '길게 누르기'로 바뀌는 순간 pointercancel·lostpointercapture 를 보내는데, 그걸 손 뗌으로 처리해 꺼 버렸다. v1.5.2: 터치는 touchstart/touchend 로 직접 받고(pointercancel 무시), 버튼에 touch-action:none·callout 끔, 마우스는 mousedown/window mouseup. 로봇이 누르는 중에 pointercancel 을 흉내 내는 검사 추가 — 옛 코드에서 FAIL 재현 확인 후 새 코드 PASS. 로봇 98/98. 실기기 확인은 사용자.
- 11-10 (v1.5.0 뒤) **"아니 눈 누르고잇을동안 켜지고 손떼면 꺼지고 로 하면 어때"** → v1.5.1: 누르는 동안만 완성본(포인터 캡처, 손 떼면/취소되면/창 포커스 잃으면 즉시 끔), 버튼에 touchstart preventDefault(iOS 길게 누르기 메뉴·확대 방지). 웹판 '꾹 누르기 → 시트 닫힘' 교훈은 이 판엔 해당 없음(전체 고정 화면, 스크롤 0 — 로봇이 1.2초 누르는 동안 스크롤 0 확인). 로봇 97/97.
- 11-10 **"어떤그림이 완성되는건디 살짝 보게되는그런거 해두면좋은가?"** → A(칠하는 화면 눈 버튼: 탭하면 완성본 1.5초 페이드 인·아웃, 꾹 누르기 없음) + B(잠긴 카드 = 흐린 완성 컬러 + 흰 자물쇠) 제안 → **"응 둘다"** → v1.5.0. 아직 안 칠한 열린 그림은 선만(완성 놀라움 유지). 로봇 97/97(눈 버튼·잠긴 미리보기 검사 추가). 스크린샷 `playables/coloring/qa/peek-sheet.png`.
- 11-10 (v1.3.0 뒤, 데일리 만다라도 바꿀까 물음에) **"만다라 자체가 이상해 저딴거하지마"** → **v1.4.0: 데일리 만다라 통째로 삭제**(갤러리 맨 위 줄, 생성기 `genDaily`, 옛 저장 'd:' 키 정리). 대체 기능은 안 얹음(묻지 않은 개선 금지). Playgama 폼 description/story 에서도 만다라 문구 제거. 로봇 95/95. **만다라 소재는 다시 시도하지 않는다.**
- 11-09 (폴리아트 여우 샘플 뒤) **"ㄱㄱㄱ"** → **v1.3.0: 20장 전부 폴리아트로 교체.** 무당벌레 130 → 해바라기 510조각 순서: Ladybug Leaf, Sunset Sail, Sleepy Kitten, Hot Air Balloon, Desert Noon, Mushroom Cottage, Whale Song, Lighthouse Cove, Mountain Lake, Penguin Pal, Bluebird Morning, Autumn Fox, Sea Turtle, Butterfly Garden, Moonlit Owl, Koi Pond, Hummingbird, Forest Deer, Tulip Field, Sunflower. 그림마다 팔레트·배경 분위기 다르게(12~21색). 계산은 `gen-data.js` 가 `coloring-data.js`(420KB)로 미리 해 둠 — 폰에서 20장 계산 2.6초 → 부팅 0.3초. 버그 잡은 것: 합칠 때 꼭짓점 순서 꼬임(구멍), 변 2개 공유 조각 합치기(겹침), 원 위 점들(달·해)이 Delaunay 를 깨뜨림(0.4px 흔들기). 로봇에 '조각 넓이 합 = 캔버스'(구멍·겹침 0) 검사 + 데이터 파일 최신 검사 추가. 로봇 97/97(실제 탭 498회). 데일리 만다라는 아직 옛 스타일.
- 11-09 (v1.2.0 뒤) **"근데 그림들이 너무 허접한거같애 어떡하지"** → A/B/C 제안(A 폴리아트 생성기 / B 기존 그림 다듬기 / C AI 그림 변환) → 사용자 **"추천대로"** = A. **샘플 1장(Autumn Fox)만** 먼저: `coloring-pics.js` 의 `polyArt()` — 영역 다각형(z순) + 거친 격자(배경 62px)·촘촘 격자(주인공 34px) + 영역 테두리 점 → Bowyer-Watson Delaunay → 무게중심으로 영역 결정 → 가짜 조명(돔 법선·세로 그라데이션)으로 명암 3단 → 실오라기 병합·같은 색 이웃 사각형 병합. 318조각, 15색, 저녁 하늘(파랑) 배경으로 주황 여우 대비. 미리보기 `#sample`. 비교 이미지 `playables/coloring/qa/poly-sample-compare.png`. **사용자 OK 면 20장 전부 이 방식으로 교체**(다음 할 일).
- 11-09 (v1.1.0 뒤) **"근데이게뭐지 오늘새로 깐거 그거 un 뭐 잇지않앗냐그거 적용된건가 너무 밋밋한데ㅠ"** → ① "un…"으로 시작하는 새 플러그인/스킬은 이 세션에서 안 보임(ListPlugins 0개, 리포엔 `frontend-design` 만 — 사용자에게 이름 되물음) ② 그 `frontend-design` 스킬을 내가 v1.0 때 **안 부르고** 웹판 디자인(크림+빨강+헤어라인+올캡 라벨+01/02+가운뎃점)을 그대로 복사한 게 원인 — 스킬이 꼽는 "AI 기본값" 그 자체였다 → **v1.2.0 전면 리스타일**: 갤러리 = 진한 자두색 스튜디오 벽 + 크림 카드, 워드마크 글자마다 다른 물감색, 카드 액자 테두리는 그 그림 팔레트 색, 강조색 1개 = 마리골드(버튼·진행바·완성 체크), 플레이 화면 = 그 그림 팔레트 색이 은은히 번진 종이 + 흰 캔버스 그림자, 스와치 54px 입체·선택 시 들림, 둥근 시스템 글꼴(`ui-rounded`). 올캡 라벨·가운뎃점·헤어라인 제거. 로봇 95/95.- 11-09 (v1.0.0 첫 플레이 뒤) **"뭐야 끝날때 겁나지루하게끝나네 막 부드럽고 현란하고 정신업섹하고 넘어가게하는게안낫냐"** → 완성 순간만 다시 만듦(v1.1.0), 다른 곳은 안 건드림: ① 마지막 탭 자리에서 조각들이 물결치듯 차례로 튀어오름(`#play.won`, 거리 × 2.4ms 지연) ② 빛 띠가 그림을 쓸고 지나감(`.shine`) ③ 반짝이 18개 ④ 액자 황금빛 글로우 + 숨쉬기 ⑤ 폭죽 = 그 그림 팔레트 색으로 양쪽 아래 대포 240개 + 비 90개(원·네모·리본) ⑥ 큰 글자 "Gorgeous!/Beautiful!/…" 튀어나옴 ⑦ 효과음 finish + 차임 2연타, 진동 5박 ⑧ 1.5초 뒤 패널, **5초 카운트다운 후 다음 그림으로 자동으로 미끄러져 넘어감**(완성작은 왼쪽으로, 다음 그림은 오른쪽에서) — 그림을 탭하면 멈추고 머무름. 뒤로가기도 완성 그림에서 나가면 전면 광고 자리. 프레임 스트립으로 눈 확인. 메모: Kitty Queens 의 "눈 아프다"(11-07) 는 **플레이 중** 효과였고, 이번 요청은 **완성 보상** 순간 — 둘은 다르다.

## 사용자 성향 — 원하는 것 / 불편해하는 것 (다른 게시판에서 가져옴)
- 첫 화면에서 '아는 모양'(스도쿠 11-08) → 여기선 해피컬러식 숫자 색칠 그대로, 설명 화면 없음.
- 게임이 말을 많이 하면 "이상하다"(Kitty Queens) → 글은 완성 패널 한 줄 + 잠금 안내 한 줄뿐.
- 번쩍임에 민감(Kitty Queens 11-07) → 효과는 물감 리플 + 완성 때 색종이 1회(110조각, reduced-motion 이면 끔)뿐.
- 폰으로 봄 → Pages 링크 하나로 바로.

## 다른 세션에 알리는 노하우 (다른 앱에서도 써먹을 것)
- **겹겹이 쌓인 SVG 조각의 숫자 라벨은 '보이는 점'에 둬야 탭이 된다.** 기본 중심이 위 조각에 가리면 bbox 격자(7→14→28)로 가장 가까운 보이는 점을 찾고, **테두리 위 점은 반칙**(±1.5px 네 방향 모두 fill 안이어야) — 테두리 위 점은 픽셀 반올림으로 옆 조각에 탭이 가는 걸 로봇이 잡았다(`inFillRobust`). 캔버스 밖 점도 제외. 라벨을 못 두면 `console.error` → 로봇 콘솔 0 검사에 걸리므로 그림 데이터 버그가 자동으로 드러난다. 강제 위치(lx/ly)도 같은 검사를 받게 할 것(웹판은 강제 위치가 바구니 밑에 숨어 있었다).
- **지터 모자이크 + 원판** 조합은 원판 가장자리에 '실오라기' 조각을 남긴다. 셀의 **실제(지터 적용) 꼭짓점 4개가 원 안이면 건너뛰기**(볼록 사각형은 꼭짓점 4개가 안이면 전부 안). 데일리처럼 시드가 매일 바뀌는 그림은 지터 0 + 격자 꼭짓점과 원 반지름 사이 ≥ 9px 보장되는 반지름 목록으로.
- SVG 조각 히트테스트는 `pointer-events: fill` — 안 그러면 옆 조각의 헤어라인 stroke 가 탭을 가져간다.
- **자동 '다음 색으로 이동'(240ms 뒤)은 사용자가 그 사이 고른 색을 덮어쓴다** → 타이머를 들고 있다가 팔레트 탭/키보드로 고르면 취소(`pickColor`). 로봇이 "고른 색과 다른 색으로 탭됨"을 잡아 준 사례.
- 로봇 실제 탭: 라벨 점 → `getScreenCTM()` 으로 화면 좌표, 팔레트는 `scrollIntoView` 뒤 **320ms** 기다렸다 재야 한다(선택 시 smooth 스크롤이 움직이는 중). 두 손가락 핀치는 CDP `Input.dispatchTouchEvent` 2포인트. 디버그 탭으로 때운 개수를 보고서에 따로 센다.
- Playgama MCP 가 이번에도 중간에 끊김(커버 confirm 전) → id 를 게시판에 먼저 커밋하고 ToolSearch 재로드 뒤 이어서 confirm. PUT(curl)은 끊김과 무관.
- 잔잔한 CC0 음악 구하기: `raw.githubusercontent.com/SoundSafari/CC0-1.0-Music/main/freepd.com/<제목>.mp3` 는 이 환경에서 열린다(api.github.com·codeload 는 403). 파일명은 FreePD 제목 그대로(공백 포함, URL 인코딩). 확인된 것: `Still Pickin.mp3`, `Ukulele Song.mp3`. 루프는 ffmpeg: 발췌 + 다음 2.5초를 페이드아웃해 앞에 겹치기(amix) + loudnorm −20 LUFS.

## 다른 세션·기획 파트너에게 묻고 싶은 것
- 이름 확정: "Cozy Coloring"(비슷한 제목 다수) vs 부제 붙이기("Cozy Coloring: Daily Mandala").
- 데일리 만다라만 매일 vs 다른 모티프(동물·풍경)도 날짜 시드로 — 사용자 반응 보고.
