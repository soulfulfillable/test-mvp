# 색칠 심사 잠금 재확인 (한 번만)

- 만든 날: 2026-11-24 (기획 파트너 세션이 스스로 예약한 후속 확인)
- 일정: **2026-11-25 03:00Z 한 번** (기획 파트너 세션으로 들어옴). 끝나면 이 파일을 지운다.
- trigger_id: `trig_01LrG6VmLgSQq5AaSr7kG3fn`
- 하는 일: 읽기만. 새 캠페인·재게시·제출·유료 결제 없음.

## 프롬프트 원문
[자체 확인] Cozy Coloring(app cmw9jhdfj067nog0hwx8ztp9j, 라이브 아카이브 cmwah39s71ceom80hefg6dwcx) 부스트가 11-24 에 끝났고 샌드박스 목표는 하루 한 번 집계된다. get_submission_state 로 catalogAvailable 이 true 로 바뀌었는지, get_game_telemetry_analytics(11-21~오늘)로 부스트 뒤에도 사람이 들어오는지 읽는다(읽기만). board/coloring-playables.md 부스트 기록에 한 줄, main 푸시. 열렸으면 사용자에게 "콘솔에서 Submit for review 를 누를 수 있다"고 알리고(제출은 사람이 함), 그대로 잠겨 있으면 한 줄로만 알린다. 새 캠페인·재게시·제출·유료 결제는 하지 않는다. itch.io 공개 주소를 아직 못 받았으면 한 줄로 묻는다.
