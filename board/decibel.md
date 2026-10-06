# Glance dB: Decibel Meter (소음 측정기, decibel 앱) — 개발 세션 게시판
마지막 갱신: 2026-10-06 22:00 (KST)

## 지금 상태 (3줄 이내)
1.0(빌드 28) 심사 결과 **"2.1 Information Needed - New App Submission"**(새 계정 이력 부족 — 환율·대출·속도계·물때와 같은 정형 요청). 앱 문제 지적 아님.
답장 페이지 `docs/decibel-review.html`(복사 버튼) → 사용자: Reply 에 글 + 어제 녹화(36초) 첨부 → **Resubmit to App Review**.
빌드 28 은 예전 서명(인증서 삭제)이지만 제출 때 Invalid Binary 로 안 걸렸다(속도계 26 은 걸림) — 재제출 때 걸리면 새 빌드로 교체.

## 다음 할 일 / 사용자에게 받을 것
- ⚠️ **빌드 28 은 예전 `Release iOS`(업로드 뒤 배포 인증서 삭제)로 만든 빌드** — 대출 계산기 빌드 22 가 같은 이유로 제출 후 **ITMS-90035 Invalid Signature** 반려(`_shared.md`). 반려 메일이 오면: 대출 세션의 서명 수정(6eb31aa, run 30 검증 중)이 통과한 뒤 `Release iOS`(decibel) 새 빌드 → ASC 에서 빌드 교체 → 재제출. 그 전엔 Release iOS 돌리지 않음(대출 세션 요청).
- ✅ 이름 A `Glance dB: Decibel Meter` / 번들 `com.soulfulfill.decibel` (사용자 확인) → ✅ Apple 번들 ID 등록 (Actions run 37065279691 로그 "새로 등록함").
- ✅ [사용자] ASC 앱 레코드(id 6818761495, Actions 로 "있음" 확인), ✅ AdMob 앱(iOS)·배너 단위 → 앱 ID `~4858015861`·배너 `/4222667601` 반영 (안드로이드는 테스트 ID 유지).
- ✅ [세션] `Release iOS`(decibel) → 빌드 19 업로드 성공 (iOS 첫 컴파일 통과: record·audio_session SwiftPM 문제없음). 같은 실행이 2번째 시도로 성공 — 1번째 시도를 누가 왜 다시 돌렸는지는 확인 못 함.
- [사용자] App Store Connect → Glance dB → TestFlight → 내부 테스트 그룹(＋) → 본인 추가 → 빌드 19 → 메일의 "View in TestFlight" 로 설치.
  써 볼 것: 조용한 방 / 대화 / TV 크게 — 숫자가 그럴듯한지, 리포트 저장·공유, 기록. (배너는 새 AdMob 앱이라 비어 있을 수 있음 — 정상)
- ✅ [세션] 스크린샷 5장 1290×2796 (`decibel_app/store/screenshots/`, 크롬 가짜 마이크에 합성 잡음 → **실제 측정값**), `ios-metadata.json`(심사 메모 7항목) → `App Store 등록 정보 채우기`(decibel). 1차는 빌드 연결 실패(앱 버전이 flutter 기본 0.1.0) → 1.0.0 으로 고쳐 **빌드 27** 업로드 → 연결 성공(run 37254733271).
- ✅ [세션] DESIGN.md 리터칭 (아래 '디자인 점검 결과') → 새 빌드 → 등록 정보 다시.
- [사용자] ASC 첫 제출 때 API 로 못 넣는 것: 저작권 `2026 Soulfulfill` · Content Rights(제3자 콘텐츠 없음) · 카테고리 Utilities/Lifestyle · App Privacy(AdMob: 기기 ID·사용 데이터·진단, 추적 안 함 → Publish) · 가격 Free·판매국(EU 제외) · 심사 연락처 → (권장) 30초 실기기 녹화 첨부 → **Add for Review → Submit**.
- [확인 못 함] 보정값 +94 가 실제 아이폰에서 맞는지 — 사용자 "괜찮아"는 전체 느낌, 숫자 비교는 아님. 리뷰·문의 오면 설정의 보정으로 대응.
- (완료된 안내) App Store Connect → 앱 → ＋ → 신규 앱: 플랫폼 iOS / 이름 `Glance dB: Decibel Meter` / 기본 언어 English (U.S.) /
  번들 ID `com.soulfulfill.decibel` 선택 / SKU `decibel` / 사용자 액세스 Full Access → 생성.
- [사용자] AdMob(**soulfulfillable 계정**, 게시자 ID pub-4724352880074547) → 앱 → 앱 추가 → iOS → "스토어에 등록되지 않음" → 이름 `Glance dB`
  → 광고 단위 추가 → **형식은 "배너(Banner)" 카드**, 이름은 직접 입력 `banner` → 앱 ID(`~` 포함)와 광고 단위 ID(`/` 포함) 두 개를 세션에 붙여넣기.
- [세션] 앱 레코드 생기면 같은 Actions 재실행으로 "앱 레코드: 있음" 확인 → AdMob ID 교체(`lib/core/ads.dart`·Info.plist) → `Release iOS`(decibel) → TestFlight.
- [세션, TestFlight 때] **기본 보정 +94 dB 확인** — 같은 아이폰에서 NIOSH SLM(무료)과 나란히 재서 맞춘다. 지금은 공개 자료 추정치(확인 못 함).
- `Release iOS`·`App Store 등록 정보 채우기` 선택지에 decibel 추가함 (번들 규칙 com.soulfulfill.<앱> 은 대출 계산기 세션이 만들어 둠).

## 사용자 피드백 기록 (최신이 위, 원문 인용 + 어떻게 반영했나)
| 날짜 | 원문 | 반영 |
|---|---|---|
| 10-06 | (ASC 캡처 + Apple 메시지 원문) Glance dB 1.0 (28) Rejected — "Guideline 2.1 - Information Needed - New App Submission" | 답장 페이지 `docs/decibel-review.html` 만들어 안내(글은 Notes 와 같은 내용을 Apple 6항목 번호에 맞춤, 영상은 어제 녹화 재사용). 빌드 28 은 그대로 재제출 |
| 10-06 | (Glance Speed 의 2.1 정보 요청 캡처를 이 세션에 보냄) | 속도계 세션이 만들어 둔 답장(`speedometer_app/store/review-reply.md`)으로 안내, `board/speedometer.md` 에 기록. Glance dB 도 같은 요청이 올 수 있어 `decibel_app/store/review-reply.md` 준비(메모·녹화는 이미 첨부) |
| 10-06 | "된건가?" (ASC 화면: 1.0 Waiting for Review, 스크린샷 5장 순서대로) | 제출 확인. 그 전에 겪은 것: 6.9"용 1290×2796 을 6.5" 칸에 넣어 거절 → 1284×2778 판(`store/screenshots/6.5in/`)을 만들어 줌, 중복 1장·순서 섞임 정리, 연령 등급 설문(Advertising 만 Yes → 4+) |
| 10-05 | 녹화 영상 보고 "실기기 숫자가 낮다(조용한 방 <20)" → A/B → "A. 지금 제출하고 1.0.1에서 고치기 … 아냐 조용한곳에 있었어서 그랫던거같은데" | 보정 +94 그대로 제출. 영상 속 측정은 실제로 조용했을 수 있음 — 숫자 비교는 여전히 **확인 못 함**, 출시 후 NIOSH SLM 과 나란히 재서 1.0.1 에 반영 |
| 10-05 | "비디오는 여기넣었어 이제 add for review할까" (ASC 화면 — 심사 메모가 옛 안내 화면 기준) | 제출 보류 → 심사 메모를 새 첫 화면(Start 바로)에 맞게 고침. 영상은 프레임으로 확인: 빌드 28 새 디자인 ✓ |
| 10-05 | (A/B) "DESIGN.md 에 걸리는데 제출 전에 고칠까요?" → "고치고 제출 (추천)" | 1.0 제출 보류 → Cupertino·iOS 스타일로 전면 리터칭(DESIGN.md 5장 dB 항목: 온보딩 목록 제거·브랜드 색·큰 숫자·시그니처) → 스크린샷 다시 → 새 빌드 → 제출 |
| 10-05 | "아지금 괜찮아" (TestFlight 빌드 19 써 본 뒤로 해석 — 주간 점검의 'TestFlight 느낌: dB' 에 대한 답) | 출시 진행: 실측 스크린샷 5장·등록 정보 입력. 보정값(+94)은 숫자 비교 확인이 아니라서 '확인 못 함'으로 남김 |
| 10-03 | "App Store Connect: 앱 이거해놨고 에드몸도 저기" (AdMob 배너 단위 생성 화면 스크린샷) | 앱 ID·배너 ID 를 코드·Info.plist 에 넣고 `Release iOS`(decibel) 실행 |
| 10-03 | (A/B 질문) 이름 → "A. Glance dB: Decibel Meter (추천)", 번들 → "decibel 로 등록 (추천)" | 이름 확정, Actions 로 번들 ID 등록. 스토어 초안·PRODUCT 결정 로그 반영 |
| 10-03 | "소음 측정기(데시벨) 앱 개발 시작해줘. plans/decibel-app.md 기획서대로 하고, 시작 전에 PLAYBOOK.md 와 board/ 전체를 읽어. 네 게시판은 board/decibel.md 야 — 내 피드백 받을 때마다, 단계 끝날 때마다 갱신해서 다른 세션들과 공유해줘." | 읽고 시작. 이 파일을 단계마다 갱신 |

## 사용자 성향 — 원하는 것 / 불편해하는 것 (이 앱에서 알게 된 것)
- (Catdoku 게시판에서 배움) 폰으로 바로 해 보는 링크를 먼저 원함 → 웹 미리보기부터 준다.
- 이름·번들 둘 다 **추천안을 바로 고름** (Catdoku 때와 같음) — 추천 이유 한 줄이면 충분.
- 웹 미리보기 '느낌' 피드백은 아직 없음.

## 디자인 점검 결과 (DESIGN.md 4장, 2026-10-05 리터칭 후 웹 스크린샷 라이트·다크)
1. 애플 기본 앱 옆에 어울림: 설정·기록·비유표·리포트 = 설정 앱식 묶음 목록·큰 제목, 측정 화면 = 큰 숫자 + 눈금 링 ✓
2. Material 흔적: 없음 (CupertinoApp, 리플·FAB·카드 더미·보라 틴트 없음) ✓
3. 글꼴: iOS 는 시스템 글꼴(SF) — 웹 미리보기는 기술적으로 SF 불가라 Roboto 로 보임(확인 못 함: 실기기 SF 렌더). 화면당 크기 3개(주인공·17·13)·굵기 2개(400/600) ✓
4. 주인공: 측정 숫자(화면 폭 기준 약 105pt) ✓
5. 강조색 1개(청록 #00848A / 다크 #2FD0D6) + iOS 의미 색(초록·노랑·주황·빨강), 그라데이션 없음 ✓
6. 이모지 아이콘 없음, 채우기용 아이콘 제거(비유표의 Material 아이콘 삭제) ✓
7. 간격: 게이지·그래프가 남는 높이를 상한까지 나눠 갖고 가운데 정렬 — 빈 띠 제거 ✓ / 그림자 없음 ✓
8. 큰 글씨 135%·다크·키보드: 로봇 테스트로 통과 ✓ (노랑 글씨 대비 문제 → 숫자는 기본 글자색 + 색 점으로)
9. 시그니처: VU 미터처럼 살짝 넘쳤다 돌아오는 바늘 + 구간 바뀔 때만 selectionClick 햅틱. 나머지는 조용 ✓ (햅틱 체감은 실기기에서만 — 확인 못 함)
10. 가짜 데이터 없음 (스크린샷도 합성 잡음을 실제로 측정) ✓

## 다른 세션에 알리는 노하우 (다른 앱에서도 써먹을 것)
- **ASC 화면에서 스크린샷을 직접 올릴 때는 그 칸 크기를 먼저 본다.** 버전 화면에 6.9" 대신 **6.5" Display** 칸만 보이면 1284×2778(또는 1242×2688)만 받는다 — 1290×2796 은 빨간 ⓘ 로 남고 "screenshot uploads in progress" 로 제출을 막는다. Delete All 후 맞는 크기로. 여러 장을 끌어 넣으면 순서가 섞이고 중복이 생길 수 있음 → 사용자에게 순서 목록을 같이 준다.
- **GitHub 호스트 러너가 안 잡힐 때가 있다** (2026-10-05 20시 UTC, `ubuntu-latest` 3번 연속 "The job was not acquired by Runner of type hosted even after multiple attempts" → 15분 대기 뒤 취소). 우리 설정 문제 아님. 사용자가 기다리는 중이면 **수동 대안(붙여넣을 글·파일)을 바로** 주는 게 낫다.
- **화면 흐름을 바꾸면 `ios-metadata.json` 의 심사 메모도 같이 고쳐라.** 리터칭으로 안내 화면을 없앴는데 메모는 "welcome screen … tap Continue" 그대로였다 — 사용자가 Add for Review 직전 화면을 보내 줘서 발견.
- **Cupertino 전환 때 재사용할 부품** (`decibel_app/flutter/lib/screens/widgets.dart`): `BackLink`(VoiceOver tap 있는 뒤로), `SectionHeader`/`SectionFooter`(설정 앱 13pt 회색 — Flutter `insetGrouped` 기본 머리글은 20pt 굵게!), `PrimaryButton`(다크에서 밝은 강조색 위 검정 글씨), `LevelNumber`(노랑 글씨 대신 색 점).
- **Flutter 기본 `CupertinoNavigationBarBackButton` 은 VoiceOver 누르기 동작이 없는 노드**를 만든다(버튼 안쪽 Semantics container) → 로봇 `expectButtonsTappable` 에 걸림. 위 `BackLink` 로 바꿔 해결.
- `cupertino_icons` 는 **^1.0.x** (Flutter 3.47 템플릿 값). `pub add` 가 2.0.0 을 넣는데 SDK 의 CupertinoIcons 코드포인트는 1.x 기준.
- 로봇에 `WidgetController.hitTestWarningShouldBeFatal = true` — 버튼을 눌렀는데 다른 게 맞으면 실패. 단 화면 안에 이미 보이는 버튼까지 `ensureVisible` 하면 큰 제목 막대가 접히는 중에 눌러 오탐 → 화면 밖일 때만 굴린다.
- 큰 글씨 테스트는 SDK Roboto 를 **`CupertinoSystemText`/`CupertinoSystemDisplay` 이름으로** `FontLoader` 에 넣어야 진짜에 가깝다(Ahem 오탐 6건이 0건으로).
- (연비 세션 교훈 적용 확인) `Semantics(button, excludeSemantics: true)` 버튼 4개·칩 1개가 VoiceOver 로 안 눌리는 상태였다 — 로봇 검사 `expectButtonsTappable` 를 넣자 바로 실패, `Semantics(onTap:)` 로 고침. **다른 앱도 이 검사를 꼭 넣어 보자.**
- **플랫폼 플러그인 호출을 `await` 하지 마라 (부가 기능일 때).** wakelock_plus 를 기다렸더니 위젯 테스트에서 응답이 안 와
  자동 저장이 통째로 멈췄다. `.catchError((_) {})` 로 흘려보내고 저장·상태 변경을 먼저.
- **입력칸은 화면 위쪽에.** 긴 ListView 아래 TextField 는 키보드가 뜨면 목록에서 빠져 포커스가 날아간다. 로봇 테스트에서
  `t.view.viewInsets = FakeViewPadding(bottom: 336*3)` 로 키보드를 흉내 내면 잡힌다.
- **테스트 통과 ≠ 화면 정상.** 리포트 막대가 높이 0 으로 안 보였는데 테스트는 통과. 웹 빌드 스크린샷을 화면마다 직접 봐서 잡았고,
  그다음 높이 검사 테스트를 넣어 고치기 전 코드에서 실패하는 것까지 확인했다. (`Row` 안 `Expanded(ColoredBox)` 는 `crossAxisAlignment: stretch` 필요)
- **마이크·카메라 앱 헤드리스 점검**: 크롬 `--use-fake-device-for-media-stream --use-fake-ui-for-media-stream` + `ctx.grantPermissions(['microphone'])`
  → 진짜 getUserMedia 경로. 거부 상황은 `--deny-permission-prompts`. 헬퍼 `decibel_app/qa/web-check.js` (Catdoku 하네스 + 플래그).
- **Flutter 웹 접근성 트리에서 글자 읽기**: 버튼이 아닌 글자는 `aria-label` 이 아니라 `flt-semantics` 의 textContent 에 들어간다.
- **iOS 마이크 정확도**: `record` 패키지는 기본으로 오디오 세션을 자기가 잡는다 → `recorder.ios?.manageAudioSession(false)` 후
  `audio_session` 으로 category `record` + mode `measurement` (자동 음량 보정 끔). 녹음 파일 없이 PCM 스트림만 숫자로.
- 측정 앱은 "시간"을 타이머가 아니라 **받은 샘플 수**로 센다 — 테스트(가짜 시계)와 실기기가 같은 숫자를 낸다.
- `flutter create` 템플릿은 `TARGETED_DEVICE_FAMILY = "1,2"`(아이패드 포함) → 아이폰 전용이면 3곳 `1` 로.

## 다른 세션·기획 파트너에게 묻고 싶은 것
- 기획 파트너: `docs/todo.html` 에 **③ 첫 심사 제출 체크리스트**(저작권·Content Rights·카테고리·App Privacy·가격·연락처·녹화 첨부)를 앱마다 넣어 주면 사용자가 폰으로 한 번에 할 수 있을 듯 (대출 계산기 세션이 정리한 항목 그대로).
- 기획 파트너: 보상형 광고 자리 — 기획서는 "긴 기록 리포트에만 검토". 지금은 리포트까지 전부 무료 + 배너만. 1차는 이대로 내고
  다운로드·리뷰 보고 정할지? (경쟁 앱이 유료로 막은 리포트를 무료로 푸는 게 차별점이라 막기 아깝다는 의견)
- (해결) `Release iOS` 선택지 충돌 걱정 → 대출 계산기 세션이 번들 규칙을 한 줄로 바꿔 둬서 선택지에 이름만 더하면 된다. 충돌 나면 선택지 전부 살려서 합치기.
