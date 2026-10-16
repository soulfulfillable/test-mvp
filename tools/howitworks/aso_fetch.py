"""How It Works 이름 조사: 미국 App Store 검색어별 '자동완성 순위(인기 대리값)'와 '경쟁 앱'을 받는다.
개발 환경에선 apple.com 이 막혀 Actions(`howitworks-aso.yml`)에서 돌리고 결과를 how-it-works-aso 브랜치에 커밋한다.
출력: tools/howitworks/aso/aso.json, aso.md
"""
import json, os, re, time, urllib.parse, urllib.request, plistlib

KEYWORDS = [
    "how things work", "how it works", "how stuff works", "how things are made", "how machines work",
    "engineering", "engineering explained", "learn engineering", "mechanical engineering", "engineering app",
    "daily learning", "micro learning", "learn something new", "daily facts", "fun facts",
    "science explained", "everyday science", "physics", "stem", "inventions", "curiosity", "smart",
    "brain", "knowledge", "learn",
]
NAMES = ["How Things Work", "Inside Things", "Cutaway", "Under the Hood", "Teardown", "Blueprint",
         "Workings", "Gizmo", "How It Works Daily", "Explained", "Daily Engineering", "Tinker"]
UA = {"User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)"}
OUT = os.path.join(os.path.dirname(__file__), "aso")


def get(url):
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read()


def hints(term):
    """App Store 자동완성. 앞에서부터 인기순. priority 가 오면 같이."""
    for url in [
        "https://search.itunes.apple.com/WebObjects/MZSearchHints.woa/wa/hints?clientApplication=Software&term=",
        "https://search.itunes.apple.com/WebObjects/MZSearchHints.woa/wa/hints?clientApplication=Software&media=software&term=",
    ]:
        try:
            raw = get(url + urllib.parse.quote(term))
            try:
                d = plistlib.loads(raw)
                return [{"term": h.get("term"), "priority": h.get("priority")} for h in d.get("hints", [])]
            except Exception:
                d = json.loads(raw)
                return [{"term": h.get("term"), "priority": h.get("priority")} for h in d.get("hints", [])]
        except Exception as e:
            err = str(e)
    return {"error": err}


def search(term, limit=50):
    q = urllib.parse.urlencode({"term": term, "country": "us", "entity": "software", "limit": limit})
    d = json.loads(get("https://itunes.apple.com/search?" + q))
    return [{"name": a.get("trackName"), "dev": a.get("artistName"), "ratings": a.get("userRatingCount", 0),
             "stars": round(a.get("averageUserRating", 0), 2), "price": a.get("formattedPrice"),
             "genre": a.get("primaryGenreName"), "released": (a.get("releaseDate") or "")[:10]} for a in d.get("results", [])]


def main():
    os.makedirs(OUT, exist_ok=True)
    res = {"keywords": {}, "names": {}, "prefix_hints": {}}
    for k in KEYWORDS:
        try:
            apps = search(k)
        except Exception as e:
            apps = {"error": str(e)}
        res["keywords"][k] = {"hints": hints(k), "apps": apps}
        time.sleep(1.5)
    # 접두어 자동완성: 사람들이 'how ', 'engineer' 를 치면 무엇이 뜨나
    for pre in ["how ", "how th", "how it", "engineer", "daily lear", "learn ", "science", "fun fact"]:
        res["prefix_hints"][pre] = hints(pre)
        time.sleep(1.5)
    for n in NAMES:
        try:
            apps = search(n, 25)
        except Exception as e:
            apps = {"error": str(e)}
        exact = [a for a in apps if isinstance(apps, list) and a["name"] and re.sub(r"\W", "", a["name"].lower()).startswith(re.sub(r"\W", "", n.lower()))]
        res["names"][n] = {"exact_or_prefix": exact, "top": apps[:8] if isinstance(apps, list) else apps}
        time.sleep(1.5)
    json.dump(res, open(os.path.join(OUT, "aso.json"), "w"), indent=1, ensure_ascii=False)

    md = ["# How It Works ASO 조사 (US App Store)\n"]
    md.append("## 접두어 자동완성 (앞이 인기)\n")
    for pre, h in res["prefix_hints"].items():
        md.append(f"- `{pre}` → " + (", ".join(f"{x['term']}({x['priority']})" for x in h) if isinstance(h, list) else str(h)))
    md.append("\n## 검색어별: 자동완성 / 상위 앱 평가 수\n")
    for k, v in res["keywords"].items():
        h = v["hints"]; apps = v["apps"]
        hs = ", ".join(f"{x['term']}({x['priority']})" for x in h[:6]) if isinstance(h, list) else str(h)
        if isinstance(apps, list):
            top = sorted(apps, key=lambda a: -a["ratings"])[:5]
            big = sum(1 for a in apps[:10] if a["ratings"] >= 10000)
            ts = "; ".join(f"{a['name']} [{a['ratings']}★{a['stars']}]" for a in top)
            md.append(f"### {k}\n- 자동완성: {hs}\n- 결과 {len(apps)}개, 상위10 중 평가 1만+ {big}개\n- 큰 앱: {ts}\n")
        else:
            md.append(f"### {k}\n- {apps}\n")
    md.append("\n## 이름 후보 충돌\n")
    for n, v in res["names"].items():
        ex = v["exact_or_prefix"]
        md.append(f"- **{n}**: 같은/앞부분 같은 이름 {len(ex)}개 " + "; ".join(f"{a['name']} ({a['dev']}, {a['ratings']}개)" for a in ex[:5]))
    open(os.path.join(OUT, "aso.md"), "w").write("\n".join(md))
    print("\n".join(md))


if __name__ == "__main__":
    main()
