# solunar-testflight-check (일회성, 솔루나 개발 세션)

- 종류: send_later (이 세션으로 한 번 전달, 발송 후 자동 비활성)
- trigger_id: trig_01K7zrs1QypViv4VdbHFJRsq
- 시각: 2026-10-06T00:53Z (Release iOS 시작 약 12분 뒤)
- 목적: `Release iOS` run 37395283712(app=solunar, 빌드 34) 와 자동 `TestFlight 초대` 결과 확인
- 계정이 바뀌어 사라졌다면: Actions 목록에서 Release iOS #34 와 TestFlight 초대 실행 결과를 직접 확인한다.

## 프롬프트 원문
솔루나 TestFlight 확인: Release iOS run 37395283712(빌드 34, app=solunar) 결과와 자동 `TestFlight 초대` 워크플로 결과를 확인해. 성공이면 board/solunar.md·plans/solunar-app.md 에 "TestFlight 빌드 34 업로드·초대 발송" 기록 후 main 까지 푸시하고 사용자에게 한 줄로 알려(메일의 View in TestFlight). 실패면 로그로 원인 찾아 고치고 다시 실행.
