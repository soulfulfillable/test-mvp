# Knock Chain (가칭, 조준+물리 연쇄) — 개발 세션 게시판
마지막 갱신: 2026-11-01 21:10 (KST)

## 🔁 이어받기
- 마지막 저장: 2026-11-01 21:10 KST · 작업 브랜치: `claude/knockchain-art` (main 반영됨)
- 방금 끝낸 것: **1단계 = 레벨 1 정지 화면** 두 안(A·B) × 두 크기(1170×2532, 1170×1170) + 고양이 4상태 시트 2장. 폰에서 보기: https://soulfulfillable.github.io/test-mvp/knockchain-art.html
  - **A 절차적 2.5D** (`playables/knockchain/art/render-a.html`, Canvas 2D): 광원 1개(-1, 2, 0.6)·면 3단 음영·모든 물체 같은 함수로 바닥 그림자(광선 투영→볼록껍질→같은 블러·농도, 데크 면에 클립)·접촉 AO·선 두께 1종·팔레트 1벌. 외부 에셋 0. 고양이·새총은 벡터.
  - **B 3D** (`render-b.html`, three.js 0.170 + WebGL/SwiftShader): 직교 30° 등각 카메라, 방향광 1개 + 그림자 맵(PCF soft) + 반구광, 같은 좌표계·같은 광원 방향·같은 HUD. 블록·상자·새총은 프리미티브 + 캔버스로 그린 나무결 텍스처, 고양이만 CC0 모델(Quaternius, `art/assets/cat.glb`, npm `@netforge/asset-library-files` 경유 — 출처·검증은 `assets/NOTICE-netforge.txt`).
  - HUD 공용 `ui.js`: 시스템 글꼴, 강조색 1개(#1f7a8c), SVG 아이콘(이모지 0), 44pt 버튼. 두 안이 같은 HUD 를 씀(기준 ③).
  - C(Everygen 참고 이미지): **402 구독 없음** → 못 만듦. 외부 그림 사이트도 차단.
  - 재현: `cd playables/knockchain/art && npm install && NODE_PATH=/opt/node-tools/node_modules node render.js` → `out/*.png`, 콘솔 에러 0 검사 포함. 2단계에서 그대로 쓸 수 있는 것 — A 는 그 코드가 곧 게임 렌더러(박스·원기둥·그림자 함수), B 는 three.js 씬이 곧 게임 씬(물리 결과를 mesh 위치에 넣으면 됨). 고양이 애니는 B 가 공짜(Idle/Walk/Jump/Death 클립 내장), A 는 상태별 그림을 손으로 그려야 함.
- 진행 중이던 것: 없음
- **✅ 1단계 통과(11-01 사용자 "응 아 너무좋아졌어")**. 아직 못 받은 것: A/B 선택, 2단계 착수 승인.
- **다음 할 일**: ① 사용자에게 A/B 선택 + 2단계 승인 받기(추천 B: 조명·그림자·캐릭터 애니가 공짜, 캐릭터만 교체 검토) ② 승인되면 2단계 — 20초 코어 테스트(레벨 3개, 조준·발사·연쇄·개봉), 물리는 Planck.js 또는 Matter.js(MIT) 중 결정론(고정 타임스텝)으로, 로봇 = 각 레벨 클리어 가능·콘솔 0·크기 14종(Mole Mash `robot.js` 복사) ③ 실패면 아트 방침 재정의(예: B 로 가되 모델을 더 찾기 / 캐릭터만 2D 스프라이트 / 색·재질 톤 변경) ④ 2단계부터 효과음(CREDITS.md 의 목록, Kenney CC0 npm) 붙임
- 사용자 대기: ① A/B 중 어느 쪽으로 갈지 ② 2단계(20초 코어 테스트, 레벨 3개) 착수 승인
- 이어받기 문장: `soulfulfillable/test-mvp 의 board/knock-chain.md 와 plans/knock-chain.md 를 읽고 "다음 할 일"부터 이어서 해줘. CLAUDE.md·DESIGN.md·PLAYBOOK.md 규칙대로. 2단계는 사용자 승인 뒤에만.`

## 주제 (11-01 사용자)
잃은 양 한 마리를 끝까지 찾는 목자. 게임 오버 없음 — 빗나가면 장면이 바뀌고 계속 찾는다. 마지막은 항상 발견 + "Love conquers all". 핼러윈 밤 배경, 유령은 가면 쓴 아이들. 노출 수위는 A(암시형) 기준으로 그림 — `plans/knock-chain.md` 주제 절.

## 지금 상태
1단계 통과(사용자 "너무 좋아졌어"). 플레이 코드 없음. A/B 선택과 2단계 승인 대기.

## 아트 기준 5개 대조 (1단계 자체 점검)
| 기준 | A | B |
|---|---|---|
| ① 같은 팔레트·광원·선 두께 | 코드 상수 1벌(PAL, L, EDGE) | 조명 1개·재질 3종, 선 없음(음영) |
| ② 바닥 그림자 동일 | `castShadow()` 하나로 전부 | 그림자 맵 1장 |
| ③ UI 1세트 | 공용 `ui.js` | 공용 `ui.js` |
| ④ 캐릭터 4상태 | 벡터 시트(유휴·이동·성공·실패) `cat-sheet-a.png` | 모델 클립 4개 1프레임씩 `cat-sheet-b.png` |
| ⑤ 효과음 | 목록만(CREDITS.md 11개 동작) | 같음 |

**솔직한 아쉬운 점** (숨기지 않음):
- B 의 고양이는 Quaternius 저폴리 모델이라 **블록 모양(마인크래프트풍)** — 귀엽다기보다 각지다. 아틀라스 색이 어두워 단색 주황으로 바꿨다. A 의 벡터 고양이가 더 "캐릭터" 같다. 2단계로 가면 **B 씬 + 캐릭터는 다른 CC0 모델 또는 2D 스프라이트(빌보드)** 를 검토해야 한다.
- A 는 "코드 드로잉"의 한계가 남아 있다: 돌 블록·새총이 단순. 다만 과거 "최악" 평가(앰비언트)와 달리 광원·그림자·AO 규칙이 있어 한 덩어리로 보인다.
- B 의 유리는 투과(transmission) 없이 반투명만. SwiftShader 렌더 1장에 30~60초.
- 두 안 모두 "와 포인트"(쓰러지는 연쇄의 슬로모)는 정지 화면이라 못 보여 줌 — 2단계 몫.

## 사용자 피드백 기록
- 11-01 정지 화면 보고 "응 아 너무좋아졌어" → 1단계 통과. A/B 어느 쪽인지는 말하지 않음 → 되물음.
- 11-01 "(2) 아트 기준 한 화면부터 해봐" → 1단계 승인.

## 사용자 성향 — 원하는 것 / 불편해하는 것
- Cargo Sort(Playgama) 류 "진짜 게임 같은 그래픽": 입체 상자·일관된 그림자·UI. 코드로 그린 도형 나열은 "최악".
- 한눈에 뭘 하는 게임인지 읽혀야 함 → 이 화면은 새총→궤적 점선→유리 블록 과녁→스위치→상자 속 고양이로 인과를 한 줄에 놓음.

## 다른 세션에 알리는 노하우
- **npm 에 CC0 3D/2D 에셋이 있다**: `@netforge/asset-library-files`(Quaternius·Kenney 저폴리 GLB 222종 + 픽셀 58종, NOTICE 에 출처·검증). GLB 는 meshopt 압축이라 three.js `GLTFLoader.setMeshoptDecoder(MeshoptDecoder)` 필수. Kenney `crate.glb` 는 SF 보라 상자(Space Kit)라 이름만 믿지 말 것.
- Quaternius 동물 모델은 metalness 0.4 + 정점색이 들어 있어 환경맵 없는 씬에선 **거의 검게** 나온다 → `metalness=0, vertexColors=false`, 필요하면 `map=null` + 단색.
- 헤드리스 WebGL2: `--use-angle=swiftshader --enable-unsafe-swiftshader --allow-file-access-from-files`(PLAYBOOK 앰비언트 항목과 같음). importmap 으로 `./node_modules/three/...` 를 file:// 에서 바로 불러도 된다.
- three.js 로 HUD 를 겹칠 땐 renderer 캔버스를 `body.prepend` (append 하면 HUD 위를 덮는다).
- Everygen 은 이미지도 402(구독 없음). 참고 이미지는 포기하고 바로 만드는 게 빠르다.

## 다른 세션·기획 파트너에게 묻고 싶은 것
- 2단계 물리 엔진: Planck.js(Box2D 포팅, 결정론 좋음) vs Matter.js(쉬움, 결정론 약함). 추천은 Planck.js.
