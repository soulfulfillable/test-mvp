# 공용 게시판 — 모든 세션이 같이 쓰는 것

## 공용 작업 중 (공용 파일을 고칠 때 먼저 적고, 끝나면 지운다)

| 세션(앱) | 무엇을 | 시작 | 상태 |
|---|---|---|---|
| catdoku(Dok) | `build-android.yml` 에 **업로드 키 자동 보관**(Secrets 없으면 ci-signing 브랜치에 ASC_KEY_P8 로 암호화해 생성·재사용, `android_keystore.py`) 추가 | 2026-10-31 | 진행 중 — catdoku 빌드로 확인 중 |
| tides | **물때를 Glance Solunar 에 합치기** (`solunar_app/` 에 물때 섹션 추가 — 계획 `plans/solunar-tides-merge.md`). 솔루나 세션은 이 작업 끝날 때까지 `solunar_app/` 를 고치기 전에 여기 확인 | 2026-10-20 | **보류** — 8개 앱 일괄 반려로 포트폴리오 통합 결정 대기. 사용자는 이 합치기에 동의함(통합안 재료로 써 달라) |

## 공용 작업 요청 (기획 파트너 → 다음에 `Release iOS` 를 돌리는 세션이 맡는다)

- ~~TestFlight 초대 자동화~~ → **완료** (속도계 세션 10-05, 아래 "이미 만들어진 공용 도구").

## 🛑 전 앱 4.3 스팸 거절 — 재제출·답장 전면 중지 (기획 파트너, 2026-10-20)

사용자 캡처(10-20): **FX · Tides · dB · Kitty Queens(1.1.0) · MPG · Tolle · Speed · Mortgage(1.1) 8개 모두 Rejected**, 사유 동일 —
**Guideline 4.3 Spam(4.3(a) 중복, 4.3(b) 흔한 것의 변형) + 4.2.6 템플릿/생성 서비스.** Solunar 는 미제출(Prepare for Submission).
- Apple 문구: "큰 변경 없이 재제출하면 또 거절 + 추가 사유". 해당 안 된다고 보면 재제출 말고 **9개 질문에 답장**(베타 테스트·스위트 앱끼리 차이·코드 공유·합칠 수 있는지 등).
- 원인 판단: 새 개인 계정이 2주 안에 **같은 'Glance' 이름·같은 구조의 유틸 7개 + 퍼즐·신앙 앱**을 연달아 제출 → 계정 단위로 '찍어 내기'로 분류된 것. 앱 하나하나의 품질 문제가 아님.
- **모든 세션: 사용자 결정이 나올 때까지 Resubmit·Update Review·답장 금지. 새 앱 제출도 금지.** 개발·TestFlight·웹 시제품은 계속해도 됨.
- 다른 개발자 계정을 새로 만들어 우회하는 것은 금지(계정 정지 사유).
- **🔄 변경(10-23, 사용자)**: **대표 앱 = Kitty Queens** 로 바꿈. How Things Work 는 보류. Kitty Queens 외부 베타 테스터를 모은 뒤 답장/재제출(Dok 세션). 나머지 앱은 여전히 답장·재제출 금지.
- ~~결정(10-20, 사용자 A A A)~~ (대표 앱 부분은 10-23 에 바뀜): 계정 보호 + 앱 1개 집중. **대표 앱 = How Things Work**(외부 베타 10명+ 거친 뒤 제출). **다른 앱은 답장·재제출하지 않고 그대로 둔다**(개발·TestFlight 내부 테스트는 계속 가능, 하지만 급할 것 없음 — 크레딧 아끼기).
  다음 앱은 대표 앱 통과 뒤 2~3주 간격, 순서는 기획 파트너가 정함. 유틸 7개를 'Glance' 하나로 합칠지는 그 뒤 검토.
- **4.3 교훈 (새 앱 모두)**: 같은 이름 접두(Glance)·같은 화면 틀을 여러 앱에 쓰지 않는다 / 포화 분야 단순 유틸은 내지 않는다 / **제출 전에 외부 베타 테스터 피드백을 실제로 받는다** / 심사 메모에 4.3 9문항 답을 미리 넣는다 / 계정당 제출 간격 2~3주.

## ⚠️ 계정 위험 알림 (속도계 세션, 2026-10-12)

- **Glance Speed 가 Guideline 5.6 (Developer Code of Conduct) 로 거절**(10-08): "fraudulent activity 와 흔히 연관된 이상 패턴 — 심사 중 의도적으로 숨긴 기능".
  빌드에 숨긴 기능은 없다(원격 설정·서버·지역/날짜 분기 없음). **새 개인 계정에서 비슷한 'Glance' 앱이 1주에 여러 개 제출된 패턴**이 걸렸을 가능성(추정).
  5.6 은 반복되면 **계정 정지**까지 갈 수 있다 → 다른 앱 세션: 같은 메시지가 오면 이 게시판에 적고, 앱을 바꿔 재제출하기 전에 사실 설명 답장부터(예시 `speedometer_app/store/review-reply-5.6.md`).
- **사용자 결정 (2026-10-16): 속도계 5.6 답이 올 때까지 다른 앱의 '새 심사 제출'은 잠깐 멈춘다.** 이미 심사 중인 건 그대로 둔다.
  개발·TestFlight 는 계속해도 된다 — 멈추는 건 ASC 의 Submit/Resubmit 만. 속도계 결과가 나오면 속도계 세션이 여기에 "재개"를 적는다.

## 모든 앱 공통 규칙 (기획 파트너, 사용자 결정)

- **✨ 품질 목표 (2026-10-16)**: 사용자 원문 — "전체적으로, 와 이정도까지한다고? 라는 고객 만족이 나올수있게 해야한다는걸 기억하게해놔줘 모두가".
  기능을 늘리는 게 아니라 **핵심 화면을 끝까지 다듬어서** 놀라게 한다. 앱마다 '와 포인트' 1개를 정하고 보고 때 보여 준다. 자세한 건 `CLAUDE.md` "품질 목표".

- **🔁 자주 저장 (2026-10-12)**: 단계마다 WIP 커밋·푸시 + 게시판 맨 위 "🔁 이어받기" 갱신(main 까지). 크레딧이 막히면 사용자가 다른 계정으로 최신 지점부터 잇는다. 한눈에: `docs/handoff.html`.

- **첫 심사 제출 전에 2.1 대비 자료를 미리 준비**한다 (2026-10-05 결정): App Review Notes 7항목 + 실기기 화면 녹화(30초 안팎).
  녹화는 사용자 폰이 필요하니 **TestFlight 단계에서 미리 부탁**하고, 무엇을 찍을지(화면 순서)를 짧게 적어 준다. 예시 `catdoku_app/store/review-reply.md`, `PLAYBOOK.md` 3장.
- 이번 주(10-05~)는 새 앱 없이 지금 9개를 출시까지 마무리한다.

## 디자인 규칙 적용 범위 (2026-10-05 사용자 결정)

- **`DESIGN.md` 는 앞으로 새로 만드는 앱·새 화면에만 적용한다. 이미 만든 앱은 디자인을 다시 손대지 않는다.**
  사용자: "지금까지 것은 만지지 말자, 나중에 만지면 이상해지는 것 같아서. 앞으로 것에 적용하자."
- 예외: Glance dB 는 그 전에 사용자 결정으로 이미 리터칭함(그대로 둔다).
- 기존 앱 세션은 기능 수정·버그 수정만. 디자인 리터칭 요청(이전 "공용 작업 요청 2")은 취소.

## 이미 만들어진 공용 도구 (다시 만들지 말 것)
- **⚠️ Release iOS 서명 수정 (mortgage 세션, 10-05) — 모든 앱 해당**: 예전 워크플로는 업로드 직후 배포 인증서를 **지웠다(revoke)**.
  그 빌드를 나중에 심사 제출하면 **ITMS-90035 Invalid Signature** 로 "Invalid Binary/Rejected" (Glance Mortgage 빌드 22 실제 발생, 제출 1.5일 뒤).
  → 이제 인증서 1개(`9BAX4TA7C3`)를 계속 쓴다: 개인 키를 `ASC_KEY_P8` 에서 만든 키로 암호화해 `ci-signing` 브랜치 `signing/state.json` 에 보관, 프로파일도 재사용.
  **developer.apple.com 에서 이 인증서를 지우지 말 것.** run 30(빌드 30)부터 적용.
  **run 29 이전 빌드로 심사 중인 앱(Glance FX 빌드 9·15, Kitty Queens 16, Glance dB 28 등)은 같은 메일이 올 수 있다** — 오면 새로 Release iOS 해서 그 빌드로 재제출.
  `App Store 등록 정보 채우기` 는 json 에 `versionString` 을 넣으면 편집 중인 버전 번호도 바꾼다.
- **Cupertino 부품 (소음 측정기 세션, 10-05)**: `decibel_app/flutter/lib/screens/widgets.dart` 의 `BackLink`(VoiceOver 되는 뒤로 — Flutter 기본 뒤로 버튼은 접근성 tap 없음), `SectionHeader`/`SectionFooter`(설정 앱 13pt 회색), `PrimaryButton`(다크 대비), `LevelNumber`. 공용 테마 패키지를 만들 세션은 여기서 가져가도 된다.

- **TestFlight 외부 테스트(공개 링크) 자동화** (Dok 세션, 2026-10-31, Kitty Queens 빌드 37 로 확인): Actions `TestFlight 외부 테스트`(`testflight-external.yml`,
  `asc_testflight.py external`) → build 번호·앱 선택 → 외부 그룹 "Beta Testers"(공개 링크, 정원 100) 생성 → 베타 설명·What to Test(`<앱>_app/store/testflight.json`, 없으면 기본 문구)
  → 연락처(App Review 것 복사) → 빌드 연결 → **Beta App Review 제출** → 요약에 공개 링크. 새 빌드마다 같은 워크플로를 다시 돌린다(외부 그룹은 자동 포함 안 됨).
  첫 빌드는 심사(보통 하루 안팎), 그 뒤 빌드는 대개 바로. 외부 베타는 4.3 답장 4번의 근거이니 **대표 앱(Kitty Queens) 외에는 기획 파트너와 상의 뒤에**.
- **TestFlight 초대 자동화** (속도계 세션, 2026-10-05, 빌드 26 으로 실제 확인): `Release iOS` 가 성공하면 워크플로
  `TestFlight 초대`(`testflight-invite.yml` + `.github/scripts/asc_testflight.py`)가 **자동으로** 돈다 → 빌드 처리 대기(보통 2~15분)
  → 수출 규정 비어 있으면 "해당 없음" → 앱에 내부 그룹 없으면 `me` 생성(모든 빌드 자동 포함) → 계정 소유자를 테스터로 → 초대 메일.
  사용자는 메일의 "View in TestFlight"/Redeem 코드만. 이미 수락한 앱은 새 빌드가 TestFlight 앱에 바로 뜬다.
  안 됐으면: Actions → `TestFlight 초대` → Run workflow → 빌드 번호(= Release iOS 실행 번호)·앱 이름. 이메일은 로그에서 가리고 요약에 안 쓴다.
- ⚠️ **`Release iOS` 는 대기 줄이 1칸뿐이다** (concurrency group `release-ios`). 다른 앱이 돌고 있을 때 새로 누르면 **이미 대기 중이던 다른 앱 실행이 취소된다.**
  누르기 전에 Actions 목록에서 `pending`/`queued` 인 Release iOS 가 있는지 보고, 있으면 그게 시작(in_progress)될 때까지 기다린다.
  (물때 세션이 10-03 에 소음 측정기 대기분을 이렇게 취소시켰다 → 바로 내 것 취소 + 그 실행 re-run 으로 되돌림.)

- **`Build Android (앱 선택 → AAB/APK)`** (Dok 세션, 10-31): `build-android.yml` 도 앱 선택형. Run workflow → app 고르면 `<앱>-aab`/`<앱>-apk` 아티팩트.
  versionCode = 실행 번호. 업로드 키는 Secrets `ANDROID_KEYSTORE_*` 하나를 모든 앱이 같이 쓴다 — 각 앱 `android/app/build.gradle.kts` 가 `key.properties` 를 읽게 해야 함(catdoku 것 복사).
  Play 비공개 테스트 순서·등록 자료 양식: `catdoku_app/store/play-listing.md`. 스토어 그래픽 생성기 `catdoku_app/store/play/make.js`(1080×2160 폰 스크린샷·1024×500 피처).
- `Release iOS` · `App Store 등록 정보 채우기` 워크플로: **앱 선택형으로 일반화됨** (Catdoku 세션, 2026-10-02).
  새 앱은 선택지(`options:`)에 자기 앱 이름만 추가한다 — 번들 ID 는 `com.soulfulfill.<이름>` 규칙으로 자동 (mortgage 세션, 10-03).
  번들 ID 가 이 규칙과 다르게 등록된 앱이 생기면 그때 매핑을 다시 넣는다.
- 번들 ID 등록 Actions (Catdoku 세션).
- AdMob 보상형 광고 처리(대기·실패·중간 닫기): `catdoku_app/` 참고.

## 계정 (어느 계정으로 로그인하나)

- **AdMob = `soulfulfillable` Google 계정** (게시자 ID `pub-4724352880074547`, Currency Exchange 앱이 있는 계정). 사용자 확인 2026-10-02.
  새 앱의 AdMob 앱·광고 단위도 **반드시 이 계정에** 만든다 — 수익이 한 계정에 모여야 지급 기준액에 빨리 닿고 결제·세금 정보도 한 번만.
  사용자가 어느 계정인지 헷갈려 하면: AdMob → Settings → Account information → Publisher ID 가 위 값인지 확인하게 한다.
- Apple 개발자·App Store Connect: 개인 Gmail 로 가입된 개인(Individual) 계정 (`ops/README.md`).

## 사용자 할 일 모음 페이지

- **https://soulfulfillable.github.io/test-mvp/todo.html** — Apple 앱 레코드·AdMob 처럼 사용자만 할 수 있는 일을 앱별로 복사 버튼과 함께 모아 둔 폰용 페이지 (`docs/todo.html`).
- 개발 세션은 사용자에게 콘솔 작업을 부탁할 때 **이 페이지의 `apps` 목록에 자기 앱 값(이름·번들·SKU·AdMob 이름)을 추가**하고 링크를 준다. 끝난 앱은 빼도 된다.
- 자동화 불가 확인(2026-10-03): ASC API 는 앱 생성(POST /v1/apps) 자체를 막음. AdMob API 의 앱·광고 단위 생성은 관리형(managed) 계정 전용 제한 접근.

## 사용자 공통 성향 (여러 세션에서 확인된 것, 기획 파트너가 정리)

- 출퇴근길에 **폰으로** 들어온다 → 질문은 짧게, A/B 로, 추천을 첫 번째에. 링크는 바로 눌러 볼 수 있게(Pages).
- "추천대로" 라고 자주 답한다 → 추천에 이유를 한 줄 붙인다.
- 나이·연령 표현으로 사용자를 규정하는 문구 싫어함. 결제보다 "영상 보고 계속" 광고를 선호.
- 증거 없는 "됐습니다" 를 싫어한다 → 스크린샷·테스트 결과와 같이.

- **⚠️ 4.3 두 번째 사례 (Glance Tides, 10-19)**: 물때 1.0 이 4.3+4.2.6 반려. 같은 계정 솔루나와 코드 공유·기능 겹침 → 답장 대신 **솔루나에 합치기**(사용자 결정 10-20). 교훈: 같은 계정에서 **겹치는 분야 앱은 처음부터 하나로** 낸다.
- **⚠️ 4.3 Spam + 4.2.6 첫 사례 (Catdoku, 10-19)**: Kitty Queens 1.1.0 이 "인기 앱 변형/중복" 으로 반려, 9문항(쓰임·대상·시장 공백·베타 피드백·스위트 여부·공유 코드 등) 답장 요구. 재제출 말고 답장(`catdoku_app/store/review-reply-4.3.md` 참고). 한 개인 계정에 앱이 많이 몰리면 4.3 이 잦아진다 — 새 앱은 기획서에 '이 앱만의 차별점'을 4.3 답장 문항 기준으로 먼저 적을 것.
  - **두 번째 사례 Tolle(성경 통독) 1.0, 10-19** — 첫 버전(1.0)도 걸림. 답장 `tolle_app/store/review-reply-4.3.md`. 7번(공유 코드)은 꾸미지 말고 사실대로(재사용한 래퍼·부품 이름까지).

- **🚨 계정 단위 일괄 반려 (10-19~20, 사용자 캡처)**: 심사 대기 중이던 **8개 앱이 한꺼번에 Rejected** — Glance FX·Tides·dB·MPG·Speed·Mortgage(1.1)·Tolle·Kitty Queens(1.1.0). Kitty Queens 사유는 4.3 Spam + 4.2.6. 나머지도 같은 사유일 가능성이 큼(앱별 메시지 확인 필요).
  원인 추정: 한 개인 계정이 2주 안에 같은 'Glance' 브랜드·같은 틀(Flutter·AdMob·같은 화면 구성)의 앱 8~10개를 낸 것 → Apple 이 '앱 찍어내기' 로 봄. **앱 하나씩 고쳐서는 안 풀린다.**
  **모든 세션: 기획 파트너·사용자 결정 전까지 재제출·새 앱 ASC 등록 금지.** 답장도 8개 동시에 보내지 말 것(같은 문장이면 더 스팸으로 보인다).
