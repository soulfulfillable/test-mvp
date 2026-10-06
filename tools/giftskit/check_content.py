#!/usr/bin/env python3
"""은사·기질 문항 검사 — 개수·중복·금지어(상표·타사 진단지)·은사 이름 노출·길이.

사용: python3 tools/giftskit/check_content.py   (실패하면 종료 코드 1)
"""
import json, re, sys, pathlib

ROOT = pathlib.Path(__file__).resolve().parents[2] / "giftskit_app" / "content"
gifts = json.loads((ROOT / "gifts.json").read_text())
temp = json.loads((ROOT / "temperament.json").read_text())

errors = []
def fail(msg): errors.append(msg)

# 상표·타사 진단지 이름 — 문항·설명·이름 어디에도 나오면 안 된다
FORBIDDEN = [r"\bMBTI\b", r"Myers", r"Briggs", r"16\s*Personalit", r"Love\s+Language", r"Enneagram",
             r"RHETI", r"Lifeway", r"Fuller", r"Wagner", r"Houts", r"Team\s+Ministry", r"SpiritualGiftsTest",
             r"OEJTS", r"\b[EI][SN][TF][JP]\b",
             # 의료·진단 언어 (심사·표현 원칙)
             r"\bdiagnos", r"\bdisorder\b", r"\bclinical\b", r"\btherap"]
# 문항 안에 은사 이름(라벨)이 그대로 들어가면 답이 유도된다
LABEL_WORDS = {
    "teaching": [r"\bteach"], "serving": [r"\bserv(e|ing|ant)"], "mercy": [r"\bmerc(y|iful)"],
    "encouragement": [r"\bencourag"], "giving": [r"\bgiving\b", r"\bgenero"], "leadership": [r"\blead(er|ership)?\b"],
    "administration": [r"\badministr", r"\borganiz"], "wisdom": [r"\bwis(dom|e)\b"], "knowledge": [r"\bknowledge"],
    "faith": [r"\bfaith"], "discernment": [r"\bdiscern"], "evangelism": [r"\bevangel"],
    "shepherding": [r"\bshepherd", r"\bpastor"], "hospitality": [r"\bhospitab", r"\bhospitality"],
}
MAX_LEN = 110  # 폰 한 화면에 3줄 안쪽

all_text = json.dumps(gifts, ensure_ascii=False) + json.dumps(temp, ensure_ascii=False)
# 출처 표기(source 필드)는 IPIP 를 밝히는 곳이라 금지어 검사에서 뺀다
scan = re.sub(r'"source": "[^"]*"', "", all_text)
for pat in FORBIDDEN:
    for m in re.finditer(pat, scan, re.I):
        fail(f"금지어 '{m.group(0)}' 발견: …{scan[max(0, m.start()-40):m.end()+40]}…")

ids = set()
def check_item(it, where):
    if it["id"] in ids: fail(f"중복 id {it['id']}")
    ids.add(it["id"])
    for k in ("en", "ko"):
        if not it.get(k, "").strip(): fail(f"{it['id']} {k} 비어 있음")
    if len(it["en"]) > MAX_LEN: fail(f"{it['id']} 영어 {len(it['en'])}자 > {MAX_LEN}")

g = gifts["gifts"]
if len(g) != 14: fail(f"은사 {len(g)}개 (14 기대)")
texts = set()
for gift in g:
    if len(gift["items"]) != 5: fail(f"{gift['id']} 문항 {len(gift['items'])}개 (5 기대)")
    if len(gift["refs"]) < 3: fail(f"{gift['id']} 참고 구절 {len(gift['refs'])}개")
    for it in gift["items"]:
        check_item(it, gift["id"])
        if not it["id"].startswith(gift["id"] + "."): fail(f"{it['id']} 가 {gift['id']} 아래에 있음")
        for other, pats in LABEL_WORDS.items():
            for p in pats:
                if re.search(p, it["en"], re.I): fail(f"{it['id']} 에 은사 이름 '{other}' 노출: {it['en']}")
        t = re.sub(r"\W", "", it["en"].lower())
        if t in texts: fail(f"같은 문장 중복: {it['en']}")
        texts.add(t)

t5 = temp["traits"]
if len(t5) != 5: fail(f"기질 {len(t5)}개 (5 기대)")
for tr in t5:
    if len(tr["items"]) != 8: fail(f"{tr['id']} 문항 {len(tr['items'])}개 (8 기대)")
    keys = [it["key"] for it in tr["items"]]
    if not (1 in keys and -1 in keys): fail(f"{tr['id']} 정·역 문항이 섞여 있지 않음")
    for it in tr["items"]:
        check_item(it, tr["id"])
        if it["key"] not in (1, -1): fail(f"{it['id']} key={it['key']}")
        if not it.get("ipip"): fail(f"{it['id']} IPIP 원문 없음")

n_g = sum(len(x["items"]) for x in g); n_t = sum(len(x["items"]) for x in t5)
print(f"은사 {len(g)}개 × 5 = {n_g}문항, 기질 {len(t5)}개 × 8 = {n_t}문항")
print("가장 긴 영어 문항:", max(len(i["en"]) for x in g for i in x["items"]), "자")
if errors:
    print(f"실패 {len(errors)}건"); [print(" -", e) for e in errors]; sys.exit(1)
print("통과: 금지어 0, 은사 이름 노출 0, 중복 0, 길이 OK")
