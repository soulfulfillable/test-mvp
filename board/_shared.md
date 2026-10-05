# 공용 게시판 — 모든 세션이 같이 쓰는 것

## 공용 작업 중 (공용 파일을 고칠 때 먼저 적고, 끝나면 지운다)

| 세션(앱) | 무엇을 | 시작 | 상태 |
|---|---|---|---|
| mortgage | **`Release iOS` 서명 고침** — 업로드 뒤 배포 인증서를 지우던(revoke) 단계 때문에 심사 제출 시 **ITMS-90035 Invalid Signature** 반려(Glance Mortgage 빌드 22). 인증서를 지우지 않고 암호화해 `ci-signing` 브랜치에 보관·재사용하도록 `release-ios.yml`·`asc_signing.py` 수정 중. **그동안 Release iOS 실행 자제 부탁** | 10-05 | 작업 중 |

## 공용 작업 요청 (기획 파트너 → 다음에 `Release iOS` 를 돌리는 세션이 맡는다)

- ~~TestFlight 초대 자동화~~ → **완료** (속도계 세션 10-05, 아래 "이미 만들어진 공용 도구").

## 모든 앱 공통 규칙 (기획 파트너, 사용자 결정)

- **첫 심사 제출 전에 2.1 대비 자료를 미리 준비**한다 (2026-10-05 결정): App Review Notes 7항목 + 실기기 화면 녹화(30초 안팎).
  녹화는 사용자 폰이 필요하니 **TestFlight 단계에서 미리 부탁**하고, 무엇을 찍을지(화면 순서)를 짧게 적어 준다. 예시 `catdoku_app/store/review-reply.md`, `PLAYBOOK.md` 3장.
- 이번 주(10-05~)는 새 앱 없이 지금 9개를 출시까지 마무리한다.

## 디자인 규칙 적용 범위 (2026-10-05 사용자 결정)

- **`DESIGN.md` 는 앞으로 새로 만드는 앱·새 화면에만 적용한다. 이미 만든 앱은 디자인을 다시 손대지 않는다.**
  사용자: "지금까지 것은 만지지 말자, 나중에 만지면 이상해지는 것 같아서. 앞으로 것에 적용하자."
- 예외: Glance dB 는 그 전에 사용자 결정으로 이미 리터칭함(그대로 둔다).
- 기존 앱 세션은 기능 수정·버그 수정만. 디자인 리터칭 요청(이전 "공용 작업 요청 2")은 취소.

## 이미 만들어진 공용 도구 (다시 만들지 말 것)
- **Cupertino 부품 (소음 측정기 세션, 10-05)**: `decibel_app/flutter/lib/screens/widgets.dart` 의 `BackLink`(VoiceOver 되는 뒤로 — Flutter 기본 뒤로 버튼은 접근성 tap 없음), `SectionHeader`/`SectionFooter`(설정 앱 13pt 회색), `PrimaryButton`(다크 대비), `LevelNumber`. 공용 테마 패키지를 만들 세션은 여기서 가져가도 된다.

- **TestFlight 초대 자동화** (속도계 세션, 2026-10-05, 빌드 26 으로 실제 확인): `Release iOS` 가 성공하면 워크플로
  `TestFlight 초대`(`testflight-invite.yml` + `.github/scripts/asc_testflight.py`)가 **자동으로** 돈다 → 빌드 처리 대기(보통 2~15분)
  → 수출 규정 비어 있으면 "해당 없음" → 앱에 내부 그룹 없으면 `me` 생성(모든 빌드 자동 포함) → 계정 소유자를 테스터로 → 초대 메일.
  사용자는 메일의 "View in TestFlight"/Redeem 코드만. 이미 수락한 앱은 새 빌드가 TestFlight 앱에 바로 뜬다.
  안 됐으면: Actions → `TestFlight 초대` → Run workflow → 빌드 번호(= Release iOS 실행 번호)·앱 이름. 이메일은 로그에서 가리고 요약에 안 쓴다.
- ⚠️ **`Release iOS` 는 대기 줄이 1칸뿐이다** (concurrency group `release-ios`). 다른 앱이 돌고 있을 때 새로 누르면 **이미 대기 중이던 다른 앱 실행이 취소된다.**
  누르기 전에 Actions 목록에서 `pending`/`queued` 인 Release iOS 가 있는지 보고, 있으면 그게 시작(in_progress)될 때까지 기다린다.
  (물때 세션이 10-03 에 소음 측정기 대기분을 이렇게 취소시켰다 → 바로 내 것 취소 + 그 실행 re-run 으로 되돌림.)

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
