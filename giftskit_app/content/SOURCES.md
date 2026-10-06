# 문항 출처·작성 기준 (소그룹 은사·기질 키트)

초안 1 — 2026-10-06, 개발 세션. 사용자 검토 전.
검사: `python3 tools/giftskit/check_content.py` (개수·중복·금지어·은사 이름 노출·길이).

## 1. 은사 문항 (`gifts.json`) — 전부 새로 작성

### 작성 기준
- **성경 본문만 보고 새로 썼다.** Lifeway·Fuller(Wagner-Modified Houts)·Team Ministry·SpiritualGiftsTest.com·ChurchGrowth.org 등
  기존 은사 진단지는 **열어 보지도, 참고하지도 않았다**(작업 환경에서 접속도 안 됨). 은사 이름은 성경 단어라 자유롭게 쓴다.
- 문항은 1인칭·현재형·**구체적인 행동이나 경험**("의자 놓기·설거지", "안 나오는 사람에게 연락")으로 쓴다. 막연한 자기 평가("나는 섬김을 잘한다") 금지.
- **문항 안에 은사 이름을 넣지 않는다**(답이 유도됨). 검사 스크립트가 다른 은사 이름까지 잡는다 — 초안에서 "teaching"·"faith" 가 섞인 4건을 잡아 고쳤다.
- 교회 소그룹 생활 장면(모임 날·행사·새 신자·식사) 위주. 직업·나이·성별을 가정하지 않는다.
- 답 척도는 5점("Not like me" ~ "Very much like me"). 은사마다 5문항 합계(5~25점)로 상위 3개.
- 영어 문항 110자 이하(폰 한 화면 3줄). 미국 사용자용 영어가 앱 문구, 한국어는 검토용 번역.

### 은사 목록과 근거 구절 (교단 중립 — 1차는 '섬김 은사' 중심, 기획서 결정 A 안)
| 은사 | 영어 | 근거 |
|---|---|---|
| 가르침 | Teaching | 롬 12:7, 고전 12:28, 엡 4:11, 행 18:24-28 |
| 섬김(돕는 것 포함) | Serving | 롬 12:7, 고전 12:28 "서로 돕는 것", 벧전 4:10-11, 행 6:1-3 |
| 긍휼 | Mercy | 롬 12:8, 눅 10:33-35, 마 25:35-36, 골 3:12 |
| 권면·격려 | Encouragement | 롬 12:8, 행 4:36(바나바), 살전 5:11, 히 10:24-25 |
| 구제·드림 | Giving | 롬 12:8, 고후 9:6-7, 행 4:34-37, 눅 21:1-4 |
| 다스림·이끎 | Leadership | 롬 12:8, 느 2:17-18, 히 13:17, 벧전 5:2-3 |
| 행정·조직 | Administration | 고전 12:28 "다스리는 것", 출 18:17-23, 눅 14:28-30, 행 6:1-4 |
| 지혜 | Wisdom | 고전 12:8, 약 1:5, 약 3:17, 잠 2:6 |
| 지식 | Knowledge | 고전 12:8, 잠 18:15, 행 17:11, 딤후 2:15 |
| 믿음 | Faith | 고전 12:9, 히 11:1, 히 11:6, 마 17:20 |
| 분별 | Discernment | 고전 12:10, 요일 4:1, 빌 1:9-10, 히 5:14 |
| 전도 | Evangelism | 엡 4:11, 행 8:26-35(빌립), 롬 10:14-15, 벧전 3:15 |
| 목양·돌봄 | Shepherding | 엡 4:11, 요 10:11-14, 행 20:28, 벧전 5:2-3 |
| 대접 | Hospitality | 벧전 4:9, 롬 12:13, 히 13:2, 행 16:15(루디아) |

- **1차에서 뺀 것**(결정 A 안): 예언·방언·방언 통역·병 고침·능력 행함(표적 은사 — 지속론/중지론 논쟁), 사도(교단마다 정의가 다름).
  분별은 '참과 거짓을 가려내는 것'으로만 설명하고 영 분별의 초자연적 해석은 넣지 않는다.
- 결과 화면의 구절 **본문은 WEB(World English Bible, 퍼블릭 도메인)** 으로 넣는다(2단계에서). KJV 는 영국 왕실 저작권이라 쓰지 않는다.

## 2. 기질 문항 (`temperament.json`) — IPIP 공개 문항을 다듬어 사용

- 출처: **IPIP(International Personality Item Pool) 50문항 Big-Five Factor Markers** (Goldberg, L. R. 1992, *Psychological Assessment* 4, 26-42), https://ipip.ori.org/
- 라이선스: IPIP 문항은 **퍼블릭 도메인** — 사이트에 "누구나 어떤 목적으로든(상업 포함) 허락·비용 없이 사용·수정 가능"이라고 밝혀 둔 것으로 알고 있다(기획서·`plans/novel-ideas.md` 조사와 같음, 원문 대조는 아래 ⚠️).
  (openpsychometrics 의 OEJTS 는 CC BY-NC 비상업이라 **쓰지 않는다**.)
- 50문항 중 성향마다 8개(정문항·역문항 섞음) = 40문항. 각 문항에 `ipip`(원문)·`en`(다듬은 문장)을 같이 둔다.
  다듬은 내용: 1인칭 "I" 추가, parties → gatherings, blue → down, 거친 표현 완화("Insult people." → "I can be harsh with people.",
  "Shirk my duties." → "I put off my duties."). 의미 방향(정/역)은 바꾸지 않았다.
- ⚠️ **확인 못 함**: 이 작업 환경에서 ipip.ori.org 접속이 막혀 있어 `ipip` 원문은 기억에 의존해 적었다. 출시 전에 사이트 원문과 한 줄씩 대조한다.
- 성향 이름은 앱 고유 표현으로 붙이고 **양쪽 끝을 모두 좋은 말로**(어느 쪽도 '나쁜 성격'이 아니게):
  Reserved ↔ Outgoing(외향), Direct ↔ Warm(친화), Flexible ↔ Structured(성실), Sensitive ↔ Calm(정서 안정), Practical ↔ Imaginative(개방).
- 결과는 5개 막대. **4글자 유형 코드·유형 이름은 만들지 않는다**(MBTI 류와 혼동 방지).

## 3. 상표·저작권 — 쓰지 않는 것 (검사 스크립트 금지어)
MBTI, Myers-Briggs, 16 Personalities, 4글자 유형(ENFP 등), 5 Love Languages(Moody 상표), Enneagram·RHETI,
Lifeway, Fuller, Wagner-Houts, Team Ministry, SpiritualGiftsTest.com, OEJTS. 의료 언어(diagnosis·disorder·clinical·therapy)도 금지.
앱 안 고지: "This is a reflection tool, not a psychological or clinical assessment."
