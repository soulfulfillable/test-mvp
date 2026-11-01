# YouTube Playables — 게시판 (기획 파트너가 염, 2026-10-30)

## 🔁 이어받기
- 마지막 저장: 2026-11-01 02:00 KST (개발 세션 ③-b) · 작업 브랜치: `claude/playables-molemash`
- 방금 끝낸 것: **Mole Mash Playgama 판 빌드 완료** `playables/molemash/`(index.html + playgama-bridge.js 2.4.0 로컬 + playgama-bridge-config.json + audio/ CC0 음원 ogg·mp3 + CREDITS.md). 플레이 로봇 `robot.js` 53/53 통과(콘솔 에러 0·외부 요청 0·game_ready 1회·게임오버·저장 리로드·음소거·일시정지·광고 상태·보상형 이어하기·14개 크기 레이아웃). 커버 3종 `covers/`. zip 은 `./build.sh` → `dist/molemash.zip`(2.9MB, git 제외). **Playgama 게임 생성됨: id `cmvxme9mt1hvbj80hj6q0lokb`, 제목 "Mole Mash", 상태 DRAFT.**
- 진행 중이던 것: 업로드 단계. 폼(update_application_form) → zip 업로드(start/confirm_archive_upload) → 커버 3종 → QA 툴 링크 → publish_sandbox → get_sandbox_share.
- **다음 할 일 (순서)**: ① 위 업로드 단계를 끝내고 샌드박스 링크를 이 게시판·사용자 보고에 ② 체크리스트 번호별 결과표를 아래 "11-01 업로드 전 점검"에 적기 ③ `PLAYBOOK.md` 6장·`PRODUCT.md` 결정 로그·main 반영 ④ 사용자가 콘솔에서 Submit for review(모더레이션)·트래픽 캠페인을 할지 결정 ⑤ 다음 게임 Chicken Cross 에 같은 틀 적용(어댑터·오디오 컨트롤러·레이아웃 코드는 molemash/index.html 에서 복사)
- 사용자 대기: 샌드박스 링크 받으면 폰에서 한 판(소리·음소거·이어하기 광고 느낌) → "Submit for review" 는 사용자가 콘솔에서 누름
- 이어받기 문장: `soulfulfillable/test-mvp 의 board/playables.md "🔁 이어받기" 를 읽고 "다음 할 일"부터 이어서 해줘. CLAUDE.md·PLAYBOOK.md 규칙대로. Playgama MCP 도구가 있는지 먼저 확인.`

### 이전 이어받기 (10-31)
- 마지막 저장: 2026-10-31 (개발 세션) · 작업 브랜치: `claude/playables-catalog` (main 반영됨)
- 결정(사용자 "추천대로 가자", `PRODUCT.md` 결정 로그 10-30): **A = 구글 관심 신청서 + 파트너(Playgama 등) 경유를 동시에.** 재료는 `docs/` 의 기존 HTML 게임. 퍼블리셔 채널 = 기존 Peblit(10-31).
- 방금 끝낸 것: ① **카탈로그 `docs/games.html`** (9개 카드: 실제 플레이 스크린샷·이름·장르·영문 한 줄·Play 버튼·파일 크기, 라이트/다크, 시스템 글꼴·강조색 1개) ② **영문 소개 `playables/pitch.md`** (스튜디오 한 줄·게임별 한 줄·Playables 적합 이유·신청서 답안) ③ 스크린샷 자동 캡처 `playables/capture.js`(1170×2532, 콘솔 에러 0·외부 요청 0 전부 확인) + 카드용 `playables/thumbs.js` ④ 아이스크림 탑 UI 를 영어로(Ice Cream Tower) — 9개 중 유일하게 한국어였음
- 진행 중이던 것: 없음
- **다음 할 일 (순서)**:
  ③ **사용자가 제출**: 구글 Playables 관심 신청서(developers.google.com/youtube/gaming/playables/support/contact 에서 링크) + Playgama 개발자 콘솔(캣도쿠·두더지 2개 먼저). 답안은 `playables/pitch.md` "Suggested answers" 를 그대로 복사. 채널 칸 = Peblit 채널 URL(채널 관리 권한이 신청 계정에 있어야 함). 제출하면 날짜·어느 쪽에 냈는지 이 게시판에 적기
  ③-b **Mole Mash 를 Playgama 요건에 맞춰 고치고 MCP 로 업로드**(위 요건 표 전부 → `playables/molemash/` 폴더에 index.html+audio+config 로 빌드, GitHub Pages 판은 그대로 두고 어댑터로 양쪽 동작) → create_application → 폼 → zip 업로드 → 커버 3종 → QA 툴 → 샌드박스 링크를 사용자에게. 이전 메모: create_application → 폼 → zip 업로드 → 커버 3종(`docs/assets/games/full/*.png` 에서 생성) → QA 툴 → 샌드박스 링크를 사용자에게. 커버·폼 문구는 `playables/pitch.md`.
  ④ **Playables SDK 연동 1개 시범**(두더지 잡기가 가장 단순): 게임 준비 신호(`gameReady`/first frame), 일시정지·재개, 음소거, 저장(SDK 저장소 우선·localStorage 폴백), 외부 호출 0(이미 확인됨), 초기 용량 30MB 이하(전부 60KB 이하). **이 환경은 developers.google.com·playables.in 접속이 막혀 있어** SDK 문서는 사용자가 PDF/캡처로 주거나 네트워크 허용 뒤에. 문서 없이 미리 할 수 있는 것: `window.ytgame` 유무를 보고 분기하는 어댑터 뼈대 + 광고 슬롯 자리(게임 오버 패널 뜨기 전) 표시
  ⑤ 승인/파트너 답이 오면 나머지 게임에 같은 틀 적용. 광고는 SDK 가 주는 방식만(AdMob 아님). 파트너가 아이콘·배너를 요구하면 `docs/assets/games/full/*.png`(1170×2532)에서 잘라 만든다
- **11-01 (기획 파트너) Playgama 진행 상황**: 사용자가 Playgama 개발자 계정 가입 완료(스튜디오명 Soulfulfill, Solo developer). 콘솔이 "Playgama MCP" 연결을 권함 → 사용자 "직접 할 수 있으면 좋겠다" → **MCP 로 연결해 세션이 직접 올리는 방식 채택.**
  - **Playgama MCP 사실(공개 README 확인)**: 원격 HTTP MCP `https://developer.playgama.com/api/mcp`, 인증 OAuth 2.1(처음 연결 때 브라우저 로그인, 토큰 채팅에 붙이지 말 것). 도구: 게임 생성·폼 수정, zip 빌드 업로드(≤300MB), 커버 업로드(800×800 / 1080×1920 / 1920×1080, ≤10MB), 인앱·리더보드, QA 툴, 샌드박스 게시(시간당 15회), Bridge SDK 문서·요건 체크리스트 읽기(`get_game_checklist`). 모든 쓰기 도구는 destructive 표시.
  - **연결 방법(클라우드 세션용)**: claude.ai → Settings → Connectors → **Add custom connector** → URL 위 주소 → Connect → 브라우저에서 Playgama 로그인·허용. 그 뒤 새로 여는 세션(또는 이 Playables 세션)에 `mcp__playgama...` 도구가 뜬다. (Claude Code CLI 는 `claude mcp add --transport http playgama-developer-console https://developer.playgama.com/api/mcp` 후 `/mcp` 로그인.) 이 클라우드 환경은 playgama.com 네트워크가 막혀 있으니 커넥터 방식이 맞다.
  - **⚠️ 업로드 전 필수**: Playgama 는 모든 게임에 **Playgama Bridge SDK(≥2.2.0)** 연동을 요구한다(npm `@playgama/bridge`). 우리 게임은 파일 1개·외부 호출 0 원칙이라 Bridge 를 **인라인으로 번들**하고, 플랫폼 감지로 Playgama 밖에서는 no-op 어댑터로 떨어지게 한다. 두더지 잡기 → 캣도쿠 순으로 시범. 정확한 요건은 연결 뒤 `get_game_checklist`·Bridge 문서 도구로 읽는다(이 환경에서 npm 레지스트리 접근이 되면 패키지 소스 확인 가능).
- ✅ **11-01 Playgama 커넥터 연결됨**(사용자) — 기획 세션에서 MCP 도구(`mcp__URL__*`, list_applications 등) 호출 확인. 계정에 게임 0개. 새로 여는 세션에는 같은 도구가 뜬다(기존 세션은 안 뜨면 새 세션으로).
- **11-01 요건 대조 (기획 파트너가 `get_game_checklist`·Bridge `api`/`setup`/`config` 읽고 9개 게임을 스캔)** — 우리 게임 전부에 공통으로 걸리는 것, 번호는 Playgama 규칙 번호:
  | 규칙 | 지금 우리 게임 | 해야 할 것 |
  |---|---|---|
  | **3.3.2 코드로 합성한 소리 불가** + 3.3.1 배경음악 필수 + 3.3.3 음소거 버튼 | 9개 전부 Web Audio 합성음(oscillator/noise), 음악 없음, 음원 파일 0 | **ogg/mp3 실제 음원**(효과음 + 루프 BGM)을 아카이브에 동봉. 출처: CC0 팩 또는 Everygen 커넥터(generate_audio/find_music — 라이선스 확인). 파일 1개 원칙은 Playgama 아카이브(zip, index.html + 폴더)에선 완화 |
  | **3.2.1 저장은 Bridge storage 만**(localStorage 금지) | 9개 전부 localStorage | 저장 어댑터: Playgama 안에서는 `bridge.storage`, 밖(GitHub Pages)에서는 localStorage 폴백. 시작 때 `storage.get([...])` 한 번, 의미 있는 변화 때만 쓰기 |
  | **4.3.2 이모지를 아이콘으로 쓰지 말 것** | 9개 전부 HUD 에 이모지(🏆🏅👥❤💔 등). **캣도쿠·Cats vs Dogs 는 말 자체가 🐱🐶** | HUD 아이콘 → 인라인 SVG. 캣도쿠류는 고양이 그림(SVG/Canvas)으로 교체 필요 → 뒤 순위 |
  | 1.1 Bridge SDK 필수 단계 8개 | 없음 | `<head>` 첫 스크립트로 `https://bridge.playgama.com/v2/stable/playgama-bridge.js`(CDN 권장; 외부 호출 금지 1.2.5 의 예외) → `bridge.initialize()` 대기 → `platform.language` → storage → 일시정지/오디오 이벤트 → `platform.sendMessage('game_ready')`(첫 플레이 가능 프레임) → 자연스런 멈춤마다 `showInterstitial()`(타이머 금지) → 미지원 기능 숨김. `playgama-bridge-config.json` 을 index.html 옆에 |
  | 2.1.2 전면 광고 필수, 2.2 보상형 규칙 | 광고 없음 | 게임 오버/라운드 끝에 interstitial. 보상형(이어하기)은 시도당 1회, `rewarded` 상태에서만 보상 |
  | 1.5 데스크톱 키보드/마우스, 1.5.2 Esc 금지 | keydown 있음: 두더지·치킨·계단·아이스크림·불길·똥 / 없음: 캣도쿠·CvD·색칠(마우스 탭으로 충분) | Esc 바인딩 없는지 확인 |
  | 1.6.8 정사각(1:1) 창에서도 꽉 차게, 1.6.1 모든 비율 | 전부 세로 고정 설계 | 레이아웃을 비율 대응으로(최소 1:1 과 가로) 또는 폼에 세로 전용 선언(1.4.3 — 모바일만 해당, 데스크톱 1:1 은 여전히 요구) |
  | 3.1.3 튜토리얼/온보딩, 3.1.2 난이도 상승 | 첫 화면 한 줄 설명 수준 | 첫 판 손가락 안내 1~2단계 |
  | 3.5.1 게임 안 제목 = 폼 제목 | OK | 폼 작성 때 맞추기 |
  | 1.3.2 index.html 루트, 라틴 파일명 | 파일명 OK | zip 구조: index.html + audio/ + playgama-bridge-config.json |
  **첫 게임 = Mole Mash**(그림이 코드 드로잉, 키보드 있음, 45초 라운드, 광고 자리 명확). 그다음 Chicken Cross → Daily Stairs → Ice Cream Tower. 캣도쿠·CvD 는 🐱🐶 교체가 커서 뒤로.
  **지금 당장 올리면 반려** — 위 표를 다 맞춘 뒤 `get_game_checklist` 를 다시 읽고 번호별로 체크한 다음 `start_archive_upload`.
- 11-01 작업 세션 `Playgama: Mole Mash` 가 ③-b 진행 중(기획 파트너가 엶). 이 게시판 이어받기는 그 세션이 갱신한다.
- 11-01 (기획 파트너, get_launch_steps 확인): archive ✅ bridge ✅ covers ✅ · **form = BLOCKED(NO_CERTIFICATION)** → `get_archive_qa_tool_link` 의 QA 툴을 **브라우저에서 돌려 인증**해야 폼이 열림(로그인 브라우저 작업 → 세션이 링크를 게시판에 적으면 **Codex** 몫) · sandbox = TODO(`publish_sandbox`, 사용자 동의 범위 안 — 개발 세션이 진행) · traffic 은 사용자 확인 전 안 함.
- **권한 프롬프트 안내**: Playgama 쓰기 도구(update_application_form, start/confirm_archive_upload, start/confirm_cover_upload, publish_sandbox)는 전부 `destructive` 표시라 Auto 모드에서도 허용 창이 뜰 수 있다. 범위 = Playgama 계정의 Mole Mash 게임 1개. 매번 뜨는 게 불편하면 이 도구들만 세션 설정에서 허용(전체 bypass 아님). 읽기 도구(get_*, list_*)는 프롬프트 없음.

### 🖱️ Codex 에게 (브라우저 작업) — 구글 Playables 관심 신청서
- URL: https://developers.google.com/youtube/gaming/playables/support/contact → 본문의 "Playables interest form" 링크
- 로그인 계정: Peblit 채널(https://www.youtube.com/@peblit) 관리 권한이 있는 개인 Google 계정
- 할 것: 폼 제출. 답안은 `playables/pitch.md` "Suggested answers" + "Studio (short paragraph)". 게임 URL 은 catdoku.html, 포트폴리오는 games.html. 회사명·실명·회사 메일 금지.
- 준비된 파일: `playables/pitch.md`, `docs/games.html`(배포됨)
- 확인할 결과: 제출 완료 화면/확인 메일. 끝나면 이 게시판 "사용자 대기"에 날짜 적기.

- 사용자 대기: 없음(신청서는 Codex, Playgama 업로드는 세션). 샌드박스 링크가 나오면 사용자가 폰에서 느낌 확인 → 그 뒤 Playgama 콘솔 "Submit for review" 를 Codex 가.
- 이어받기 문장: `soulfulfillable/test-mvp 의 board/playables.md "🔁 이어받기" 를 읽고 "다음 할 일"부터 이어서 해줘. CLAUDE.md·PLAYBOOK.md 규칙대로.`

## 📚 참고 연구: Hamster Escape(YouTube Playables)의 보상 루프 — 배우되 베끼지 않음 (기획 파트너, 2026-11-01)

**사용자 목표**: "광고 보기까지의 동기부여와 꾸미기/수집 구조를 배우고 싶다". 복제가 아니라 **놀이→진척→기대→선택→공개→장착→다음 판** 연결의 타이밍을 배우는 것.

**증거 수준** (Codex 분석, 2026-11-01)
- 📷 스크린샷 5장으로 확인: ①방·문·경비 시야콘을 피하는 짧은 스킬 게임(Level 3) ②"WHAT'S IN THE BOX?" 화면 — 큰 OPEN(영상 아이콘) + 작은 LOSE IT ③보상 화면 — 모자·단안경 코스튬 햄스터, EQUIP / MAYBE LATER ④CLOSET — SKINS·TRAILS 탭, 장착 체크, 잠긴 카드들, 하단 "SURPRISE GIFT! OPEN"(영상 아이콘 — 두 번째 광고 입구) ⑤Playables 목록의 제목.
- 🗣️ 사용자 설명(독립 검증 안 됨): 판을 돌면 상자 진행률이 차고, 다 차면 OPEN→광고→꾸미기 보상, 장착한 꾸미기가 다음 판에 보임. 트레일도 보상일 수 있음(불확실).
- ❓ 모름: 상자 임계값, 실패 시 보상, 중복 처리, LOSE IT 의 실제 효과, 광고 실패 시 동작, 저장 내구성. Codex 가 실제 플레이 링크를 열었으나 Unity 로딩에서 멈춰 **직접 플레이 검증 못 함.** 리텐션·수익 효과는 가설일 뿐 — 숫자 단정 금지.

**배울 점(설계 가설)**: 보상이 **얻기 전·중·후에 계속 보인다**(진행률 → 상자 → 공개 → 장착 → 플레이 중 노출 → 옷장의 다음 목표). 광고 제안은 **플레이어가 먼저 진척을 쌓은 뒤**에 와서 맥락이 있다. 꾸미기는 승패에 영향 없이 정체성 가치를 준다. **배우지 않을 점**: LOSE IT 식 손실 암시(가진 보상을 빼앗는 듯한 기만), 광고 실패 시 진척 삭제, 광고 없이는 다음 판 못 하게 하기.

**지금 Mole Mash Playgama 판에 실제 있는 것 (11-01 코드 확인)**: 보상형 광고는 **이어하기 1종**(`continue` 배치, +10초·하트 회복, 시도당 1회, `rewarded` 상태에서만 지급, 미지원 플랫폼에선 버튼 숨김). 전면 광고 `round_end`·`pause`. 저장은 `progress{best, played, ranks, name}` + `settings{muted}`. **꾸미기·수집·진행률 트랙은 없음.** 플레이 중 보이는 커스터마이즈 가능 요소 = 망치(탭할 때 그려짐), 두더지, 잔디/구멍 보드.

### 제안: 가장 작은 실험 1개 — "망치 수집" (사용자 OK 전엔 구현하지 않음)
- **범위**: 기존 라운드·점수·이어하기 광고는 그대로. 꾸미기 **1종류(망치)만**, 원작 디자인 5개(코드 드로잉, 예: 나무·고무·황금·사탕·프라이팬 — 햄스터·모자 같은 원작 요소 금지). 상점·화폐 없음.
- **루프**: 라운드 중 잡은 두더지 수가 **'선물 상자' 진행 바**를 채움(라운드 끝 패널에서 애니메이션으로 차오름) → 다 차면 `bonus_ready` → **OPEN 은 무료**(쌓아서 얻은 기본 보상, 광고 없음) → 공개 연출 → 새 망치 → **EQUIP / LATER**(LOSE IT 류 문구 금지) → 다음 판에 장착 망치가 보임 → 패널 하단에 5칸 망치 줄(보유/잠김)로 다음 목표.
- **광고의 자리(선택, 2.2 규칙 안)**: 상자가 열린 라운드 끝에만 "Watch an ad: open one more box now" **1회** — 추가 보너스일 뿐, 거절해도 다음 판 진행·무료 상자에 영향 없음. 같은 라운드 끝에 이어하기와 상자 광고가 동시에 뜨지 않게(이어하기가 떴으면 상자 광고는 다음에). 임계값은 로봇/실제 라운드 길이에서 **첫 상자가 2~3판 안에** 열리게 잡고 기록(원작 수치 추정 금지).
- **상태**: collecting → bonus_ready → (무료 open) reveal → owned/equipped. 광고 경로: ad_pending → reward_earned(`rewarded` 상태에서만) → reveal. 취소/실패/no-fill 이면 미개봉 상자·진행률 **그대로 유지**, 안내 한 줄.
- **중복·완주 정책(출시 전 확정)**: 5개 다 모으면 진행 바를 "All hammers collected" 로 바꾸고 상자 광고 버튼 숨김(중복 지급 없음).
- **저장**: `progress.hammers[]`, `progress.equipped`, `progress.boxFill`, `progress.boxesReady` 를 Bridge storage 에(라운드 끝·장착 때만 set). 비밀값 없음.
- **측정(Bridge analytics, 개인정보 없음)**: round_end, progress_shown, bonus_ready, box_opened_free, reward_offer_shown, ad_opt_in, ad_rewarded, ad_failed, reward_granted, equipped, next_round_started. 볼 것 = 옵트인율·보상 도달·다음 판 시작률·이탈, 광고 노출 수 단독은 보지 않음.
- **QA 체크리스트**: ①보상은 SDK `rewarded` 에서만, 더블클릭·중복 콜백·재시도·리로드에도 1회 ②no-fill/취소 때 상자 유지 ③광고 중 게임·소리 멈춤, 복귀 정상 ④리로드 후 보유·장착·진행률 유지(Bridge storage) ⑤5개 완주 상태 ⑥1:1·가로·세로에서 새 패널 안 깨짐 ⑦규칙 2.2.1~2.2.5·3.2.x·4.3.2(이모지 금지) 재점검 ⑧로봇 테스트에 위 경로 추가, 스크린샷 ⑨Playgama 테스트 광고 성공 ≠ 실서비스 준비 — 구분해 기록. YouTube Playables 로 갈 땐 광고·저장 API 가 다르므로 어댑터만 바꾸고 상태 기계는 유지.
- **적용 시점**: Mole Mash v1 샌드박스가 올라간 **뒤**, 같은 게임의 v1.1 로. 다른 8개 게임엔 결과 보고 나서.
- **사용자 결정 필요**: A. 위 실험 진행(샌드박스 v1 뒤) / B. 보류.

## 지금 상태
카탈로그 https://soulfulfillable.github.io/test-mvp/games.html + 영문 소개 `playables/pitch.md` 완료(10-31). 사용자 신청서 제출 대기. SDK 문서는 아직 없음.

## 다른 세션에 알리는 노하우
- 게임 스크린샷은 `playables/capture.js` 가 실제 플레이(시작 탭→조작)까지 해서 찍는다. 날짜 시드 게임(계단)은 게임과 같은 시드 함수를 복사해 정답 방향을 계산해야 죽은 화면이 안 찍힌다.
- Playwright `click()` 은 깜빡이는(animation) 버튼을 "not stable" 로 30초 기다리다 실패 → `{ force: true }`.
- `page.setContent()` 로 만든 페이지는 `file://` 이미지를 못 읽는다(빈 네모). 파일로 써서 `goto('file://…')`. 캔버스 `toDataURL` 로 파일 이미지를 내보내려면 `--allow-file-access-from-files`.
- `<img width height>` 속성과 CSS `aspect-ratio` 를 같이 쓰면 height 속성이 이겨서 카드가 세로로 터진다 → CSS 에 `height:auto`.
- Playwright 동봉 ffmpeg 는 `hstack` 같은 필터가 없다. 대조표는 브라우저 페이지로 만든다.

## 알아낸 것 (2026-10-30, 검색 요약 — 공식 문서는 이 환경에서 못 열었음)
- Playables = 유튜브 앱 안 HTML5 게임. 개발자 포털은 **초기 접근(승인제)**: 관심 신청서 → 승인 → SDK·테스트 스위트·인증 요건 제공 → 유튜브 인증 통과 후 게시. 승인 기간 공식 수치 없음(파트너 측 "몇 주~몇 달").
- 파트너 경유: Playgama(자체 Bridge SDK, 구글 개발자 계정 불필요, 24시간 안 피드백 주장, 비독점 주장), GameDistribution, Mediacube, FRVR 등. 수익 배분 비율 비공개 → 약관 확인.
- 기술: 개별 파일 30MiB·전체 250MiB(2024 기준), 초기 용량은 HTTP 압축 후 측정. 세로 화면. 외부 네트워크 호출·외부 분석 SDK 금지(제3자 가이드 주장). 지원 엔진 목록에 순수 JS 도 사실상 가능(Phaser/PixiJS 등 웹).
- 수익: 유튜브 수익 배분은 **시범 운영** 단계(선정 퍼블리셔) — 돈이 언제 들어오는지 불확실. 기대치는 "노출·플레이 수 확보" 우선.
- 사용자 캡처(Supersonic): 게임 정보 카드 = 이름·장르·따옴표 한 줄 설명·개발자·제작사·게시 날짜. 목록 = 세로 썸네일 + 플레이 버튼 + 플레이 횟수. 전부 하이퍼캐주얼(탭/드래그 1조작, 30초~1분).

## 사용자 피드백 기록
- 10-30 "유튜브 채널에 이렇게 게임으로 만들어놓네. 애플에 내려고 하는 거 계속 안 되는데 이쪽으로 해볼 수 있을까" → A 결정.
