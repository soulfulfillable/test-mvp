#!/usr/bin/env python3
"""RunSignup 공개 대회 목록을 받아 웹 시제품용 조각(tile) JSON 으로 정리한다.

사용: python3 fetch_races.py <zips.json> <출력 폴더> [주 수=8]
- zips.json: {"07030":[40.745,-74.033], ...} (npm `zipcodes` 패키지에서 뽑음, BSD)
- 인증 없이 공개 대회만 받는다. API 키를 쓰지 않는다.
- 가상(virtual) 대회, 날짜가 범위 밖인 종목, 미국 밖·ZIP 없는 대회는 뺀다.
"""
import json, re, sys, time, math, urllib.request, urllib.parse, datetime as dt, os, html

ZIPS = json.load(open(sys.argv[1]))
OUT = sys.argv[2]
WEEKS = int(sys.argv[3]) if len(sys.argv) > 3 else 8
TODAY = dt.date.today()
END = TODAY + dt.timedelta(weeks=WEEKS)
API = "https://runsignup.com/Rest/races"

STATES = "AL AK AZ AR CA CO CT DE DC FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI WY".split()

def get(state, d0, d1):
    """한 주(state)·한 기간의 공개 대회. 인증 없는 호출은 한 번에 1,000개까지만 준다 →
    1,000개가 차면 기간을 반으로 나눠 다시 받는다(실제 앱은 사용자 ZIP+반경으로 조금씩만 받으면 된다)."""
    q = urllib.parse.urlencode(dict(format="json", results_per_page=1000, events="T", state=state,
        start_date=d0.isoformat(), end_date=d1.isoformat()))
    rs = None
    for attempt in range(4):
        try:
            with urllib.request.urlopen(urllib.request.Request(API + "?" + q, headers={"User-Agent": "race-finder-prototype"}), timeout=120) as r:
                rs = json.load(r)["races"]; break
        except Exception as e:
            print("retry", state, e, file=sys.stderr); time.sleep(4 * (attempt + 1))
    if rs is None: raise SystemExit("fetch failed %s" % state)
    time.sleep(1)
    if len(rs) >= 1000 and d1 > d0:
        mid = d0 + (d1 - d0) // 2
        return get(state, d0, mid) + get(state, mid + dt.timedelta(days=1), d1)
    if len(rs) >= 1000: print("WARN truncated", state, d0, file=sys.stderr)
    return rs

def pdt(s):
    """'11/22/2026 10:00' -> '2026-11-22T10:00' (대회 현지 시각 그대로)"""
    if not s: return None
    m = re.match(r"(\d+)/(\d+)/(\d+)(?:\s+(\d+):(\d+))?", s)
    if not m: return None
    mo, d, y, h, mi = m.groups()
    return "%04d-%02d-%02dT%02d:%02d" % (int(y), int(mo), int(d), int(h or 0), int(mi or 0))

def miles(dist):
    if not dist: return None
    m = re.match(r"\s*([\d.]+)\s*(k|km|kilometers?|mi|miles?|m|meters?|yards?)?\s*$", dist.strip(), re.I)
    if not m: return None
    v = float(m.group(1)); u = (m.group(2) or "").lower()
    if u.startswith("k"): return v * 0.621371
    if u in ("m", "meter", "meters"): return v / 1609.344
    if u.startswith("y"): return v / 1760
    return v

def cat(mi):
    if mi is None: return "other"
    if 3.0 <= mi <= 3.2: return "5k"
    if 6.1 <= mi <= 6.3: return "10k"
    if 13.0 <= mi <= 13.2: return "half"
    if 26.1 <= mi <= 26.3: return "full"
    return "other"

def fee(s):
    try: return round(float(s.replace("$", "").replace(",", "")), 2)
    except Exception: return None

races, seen, raw = [], set(), 0
for state in STATES:
    rs = get(state, TODAY, END); raw += len(rs)
    for x in rs:
        r = x["race"]
        if r["race_id"] in seen or r.get("is_private_race") == "T" or r.get("is_draft_race") == "T": continue
        a = r.get("address") or {}
        z = (a.get("zipcode") or "")[:5]
        if a.get("country_code") != "US" or z not in ZIPS: continue
        evs = []
        for e in r.get("events") or []:
            if e.get("event_type") == "virtual_race" or e.get("volunteer") == "T": continue
            t = pdt(e.get("start_time"))
            if not t or not (TODAY.isoformat() <= t[:10] <= END.isoformat()): continue
            mi = miles(e.get("distance"))
            ps = []
            for p in e.get("registration_periods") or []:
                f = fee(p.get("race_fee") or "")
                o, c = pdt(p.get("registration_opens")), pdt(p.get("registration_closes"))
                if f is None or not c: continue
                ps.append([o, c, f])
            ps.sort(key=lambda p: p[1])
            evs.append(dict(n=html.unescape(e.get("name") or "").strip()[:60], d=(e.get("distance") or "").strip(), k=cat(mi), t=t, p=ps))
        if not evs: continue
        seen.add(r["race_id"])
        la, lo = ZIPS[z]
        evs.sort(key=lambda e: e["t"])
        races.append(dict(i=r["race_id"], n=html.unescape(r["name"]).strip()[:90], u=r["url"], st=(a.get("street") or "").strip()[:60],
            c=(a.get("city") or "").strip(), s=a.get("state") or "", z=z, la=la, lo=lo, tz=r.get("timezone") or "", o=1 if r.get("is_registration_open") == "T" else 0, e=evs))
    print(state, len(rs), "kept", len(races), file=sys.stderr)

tiles = {}
for r in races:
    key = "%d_%d" % (math.floor(r["la"] / 2), math.floor(r["lo"] / 2))
    tiles.setdefault(key, []).append(r)
os.makedirs(OUT, exist_ok=True)
for f in os.listdir(OUT):
    if f.startswith("t_"): os.remove(os.path.join(OUT, f))
for k, v in tiles.items():
    json.dump(v, open(os.path.join(OUT, "t_%s.json" % k), "w"), separators=(",", ":"), ensure_ascii=False)
meta = dict(fetched=dt.datetime.now(dt.timezone.utc).strftime("%Y-%m-%dT%H:%MZ"), start=TODAY.isoformat(), end=END.isoformat(),
            races=len(races), raw=raw, tiles=sorted(tiles))
json.dump(meta, open(os.path.join(OUT, "meta.json"), "w"), separators=(",", ":"))
print(json.dumps(meta)[:300])
