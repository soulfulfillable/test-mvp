# 3D 탈출 장애물 코스 — 시험판 — 개발 세션 게시판
## 🔁 이어받기
- 마지막 저장: 2026-11-10 (개발 세션) · 브랜치 `claude/escape-3d` → main 반영 · 링크 https://soulfulfillable.github.io/test-mvp/escape-3d/
- 방금 끝낸 것: (11-10 2차) 사용자 요청 "캐릭터 우리 강아지 닮게? 아니면 선택?" → **기본 = 강아지 닮은 Pup**(Quaternius 만화 늑대 CC0 를 살구·크림색으로 다시 칠하고 덥수룩한 털·처진 귀·수염·주황 하네스를 뼈에 붙임) + 오른쪽 위 버튼으로 **Pup / Kitty(주황 고양이) / Runner(원래 아이)** 선택(실제 3D 모델로 그린 초상, 선택 저장). 로봇 63/63. / 시험판 1차 완성, 로봇 58/58(자동 조종이 진짜 터치로 390×844·360×640 완주 23.2초, 가시·구덩이 복귀, HUD 8크기, 콘솔 0). 캐릭터 Kenney Mini Characters(CC0). 자세한 건 `plans/escape-3d-trial.md` 진행 기록.
- 사용자 대기: **"이 정도 퀄리티면 계속 갈까요?"** 답. 실기기(아이폰) 느낌·프레임도 같이 받기.
- 다음 할 일(답에 따라): **계속** → 기획 파트너가 코스 5개·Playgama 판 기획(`plans/`), 개발은 같은 틀(`playables/escape3d/` course.js 에 코스 추가, 로봇 legs 추가) / **접기** → 솔리테어로. 실기기에서 버벅이면 그림자 끄기·pixelRatio 1 부터.
- 이어받기 문장: `soulfulfillable/test-mvp 의 board/escape-3d.md 와 plans/escape-3d-trial.md 를 읽고 "다음 할 일"부터 이어서 해줘. CLAUDE.md·DESIGN.md·PLAYBOOK.md 규칙대로. 브랜치 claude/escape-3d.`
## 사용자 피드백
- 11-10 강아지·고양이 사진 16장과 함께: "캐릭터 우리 강아지 닮게할수잇나? 하면 좋을려나 아니면 선택할수잇게할까 이것도" → 둘 다 함(기본 강아지 + 선택). 사진의 개: 살구·크림색 덥수룩한 소형견, 처진 귀, 주황 하네스 / 주황 태비 고양이.
- 11-10 Playgama "Escape fro…" 3D 게임을 보고 "이런 거는 못 만들어?" → 시험판 B → "이제 저거 만들어 볼 때 안 됐나" → 착수.
