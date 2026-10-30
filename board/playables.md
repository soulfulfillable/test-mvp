# YouTube Playables — 게시판 (기획 파트너가 염, 2026-10-30)

## 🔁 이어받기
- 마지막 저장: 2026-10-30 (기획 파트너) · 아직 개발 세션 없음 · 작업 브랜치 없음
- 결정(사용자 "추천대로 가자", `PRODUCT.md` 결정 로그 10-30): **A = 구글 관심 신청서 + 파트너(Playgama 등) 경유를 동시에.** 재료는 `docs/` 의 기존 HTML 게임.
- **다음 할 일 (순서)**:
  ① **게임 카탈로그 페이지 `docs/games.html`** — Supersonic 목록처럼 카드형(아이콘/스크린샷·이름·장르·한 줄 영문 설명·플레이 버튼). 대상 9개: catdoku(Kitty Queens), cats-vs-dogs, mole-mash, chicken-cross, daily-stairs, icecream-stack, firechase, poop-dodge, coloring-book. 헤드리스로 스크린샷 자동 캡처(1170×2532). 플레이 수 같은 지표는 없으니 적지 않는다
  ② **영문 소개 문안** `playables/pitch.md` — 스튜디오(Soulfulfill) 한 줄, 게임별 한 줄, 왜 Playables 에 맞는지(파일 1개·세로·탭 전용·오프라인·광고 자리 1곳). 회사명·실명 금지
  ③ **사용자가 제출**: 구글 Playables 관심 신청서(developers.google.com/youtube/gaming/playables/support/contact 에서 링크) + Playgama 개발자 콘솔(캣도쿠·두더지 2개 먼저). 어느 유튜브 채널을 퍼블리셔로 쓸지 사용자 결정 필요 — A. 기존 Peblit 채널 / B. 게임 전용 새 채널
  ④ **Playables SDK 연동 1개 시범**(두더지 잡기가 가장 단순): 게임 준비 신호(`gameReady`/first frame), 일시정지·재개, 음소거, 저장(SDK 저장소 우선·localStorage 폴백), 외부 호출 0(폰트·CDN 없음 확인), 초기 용량 30MB 이하. **이 환경은 developers.google.com·playables.in 접속이 막혀 있어** SDK 문서는 사용자가 PDF/캡처로 주거나 네트워크 허용 뒤에
  ⑤ 승인/파트너 답이 오면 나머지 게임에 같은 틀 적용. 광고는 SDK 가 주는 방식만(AdMob 아님)
- 사용자 대기: 퍼블리셔 채널 A/B, 신청서 제출(③)
- 이어받기 문장: `soulfulfillable/test-mvp 의 board/playables.md "🔁 이어받기" 를 읽고 "다음 할 일"부터 이어서 해줘. CLAUDE.md·PLAYBOOK.md 규칙대로.`

## 지금 상태
결정만 남. 코드 없음. 기존 게임 9개는 `docs/*.html` 에 그대로.

## 알아낸 것 (2026-10-30, 검색 요약 — 공식 문서는 이 환경에서 못 열었음)
- Playables = 유튜브 앱 안 HTML5 게임. 개발자 포털은 **초기 접근(승인제)**: 관심 신청서 → 승인 → SDK·테스트 스위트·인증 요건 제공 → 유튜브 인증 통과 후 게시. 승인 기간 공식 수치 없음(파트너 측 "몇 주~몇 달").
- 파트너 경유: Playgama(자체 Bridge SDK, 구글 개발자 계정 불필요, 24시간 안 피드백 주장, 비독점 주장), GameDistribution, Mediacube, FRVR 등. 수익 배분 비율 비공개 → 약관 확인.
- 기술: 개별 파일 30MiB·전체 250MiB(2024 기준), 초기 용량은 HTTP 압축 후 측정. 세로 화면. 외부 네트워크 호출·외부 분석 SDK 금지(제3자 가이드 주장). 지원 엔진 목록에 순수 JS 도 사실상 가능(Phaser/PixiJS 등 웹).
- 수익: 유튜브 수익 배분은 **시범 운영** 단계(선정 퍼블리셔) — 돈이 언제 들어오는지 불확실. 기대치는 "노출·플레이 수 확보" 우선.
- 사용자 캡처(Supersonic): 게임 정보 카드 = 이름·장르·따옴표 한 줄 설명·개발자·제작사·게시 날짜. 목록 = 세로 썸네일 + 플레이 버튼 + 플레이 횟수. 전부 하이퍼캐주얼(탭/드래그 1조작, 30초~1분).

## 사용자 피드백 기록
- 10-30 "유튜브 채널에 이렇게 게임으로 만들어놓네. 애플에 내려고 하는 거 계속 안 되는데 이쪽으로 해볼 수 있을까" → A 결정.
