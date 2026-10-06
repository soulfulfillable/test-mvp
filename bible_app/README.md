# 성경 통독 앱 (`bible_app/`)

기획서 `plans/bible-reading-app.md`, 게시판 `board/bible-reading.md`.

- `flutter/` — iOS 앱 (Cupertino, DESIGN.md 첫 적용). 웹 미리보기 → `docs/bible-reading-app/`
  - `lib/core/books_data.dart` 는 생성 파일: `python3 -I tools/bible/make_books.py <pythonbible 휠 푼 폴더>`
  - 테스트: `flutter test` (엔진 `plan_test.dart` + 로봇 `robot_test.dart`, 스크린샷 `build/robot_shots/`)
  - 웹 빌드: `flutter build web --release --base-href /test-mvp/bible-reading-app/` → `build/web` 을 `docs/bible-reading-app/` 로 (canvaskit 빼고)
- `qa/web-check.js` — 웹 미리보기 실제 터치 점검 (캣도쿠 하네스 사용)
- `store/` — 스토어 문구·연대순 근거
- 웹 주소 옵션: `?demo=40&behind=3`(예시 진행, 저장 안 함) · `?shots=1`(광고 자리 숨김) · `&order=chronological` · `&scope=newTestament`
