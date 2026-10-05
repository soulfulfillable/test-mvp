"""Wikimedia Commons 에서 영상 배경 후보 사진(퍼블릭 도메인/CC0 만)을 받는다.
작업 환경에선 Commons 가 막혀 있어 GitHub Actions 에서 돌린다 (fetch-ambient-photos.yml).
결과: tools/ambient/photos/<scene>/NN.jpg + meta.json (제목·라이선스·원본 주소), 장면별 미리보기 contact.jpg
상업 이용(유튜브 수익)이 가능하도록 PD·CC0 만 남긴다 — 출처 표시 의무가 있는 CC BY 도 제외(실수 방지)."""
import json, os, re, subprocess, urllib.parse, urllib.request

API = "https://commons.wikimedia.org/w/api.php"
UA = {"User-Agent": "soulfulfill-ambient/1.0 (github.com/soulfulfillable/test-mvp)"}
OK = re.compile(r"^(cc0|public domain|pd\b|pdm)", re.I)
SCENES = {
    "rain": ["rain on window glass night", "raindrops window bokeh", "rainy window city lights", "rain window blur"],
    "fire": ["fireplace fire logs", "campfire night", "cozy fireplace", "burning logs fireplace"],
    "cafe": ["cafe interior evening", "coffee cup window", "coffee shop interior warm light", "cafe window night"],
}
PER_SCENE = 12
OUT = os.path.join(os.path.dirname(__file__), "photos")


def get(params):
    url = API + "?" + urllib.parse.urlencode({**params, "format": "json"})
    with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=60) as r:
        return json.load(r)


for scene, queries in SCENES.items():
    d = os.path.join(OUT, scene); os.makedirs(d, exist_ok=True)
    seen, meta = set(), []
    for q in queries:
        if len(meta) >= PER_SCENE: break
        res = get({"action": "query", "generator": "search", "gsrnamespace": 6, "gsrsearch": q + " filetype:bitmap",
                   "gsrlimit": 50, "prop": "imageinfo", "iiprop": "url|size|extmetadata", "iiurlwidth": 1920,
                   "iiextmetadatafilter": "LicenseShortName|Artist|ImageDescription"})
        for p in sorted(res.get("query", {}).get("pages", {}).values(), key=lambda p: p.get("index", 0)):
            if len(meta) >= PER_SCENE: break
            ii = (p.get("imageinfo") or [{}])[0]
            lic = ii.get("extmetadata", {}).get("LicenseShortName", {}).get("value", "")
            w, h = ii.get("width", 0), ii.get("height", 0)
            if p["title"] in seen or not OK.match(lic.strip()) or w < 1600 or w < h * 1.3: continue
            seen.add(p["title"])
            fn = os.path.join(d, f"{len(meta) + 1:02d}.jpg")
            try:
                with urllib.request.urlopen(urllib.request.Request(ii["thumburl"], headers=UA), timeout=60) as r, open(fn, "wb") as f:
                    f.write(r.read())
            except Exception as e:
                print("skip", p["title"], e); continue
            meta.append({"file": os.path.basename(fn), "title": p["title"], "license": lic, "size": [w, h],
                         "page": ii.get("descriptionurl"), "artist": re.sub("<[^>]+>", "", ii.get("extmetadata", {}).get("Artist", {}).get("value", ""))[:120]})
            print(scene, len(meta), lic, p["title"])
    json.dump(meta, open(os.path.join(d, "meta.json"), "w"), ensure_ascii=False, indent=1)
    # 미리보기 한 장 (번호를 얹어 고르기 쉽게)
    if meta:
        files = [os.path.join(d, m["file"]) for m in meta]
        args = []
        for f in files: args += ["-i", f]
        n = len(files); cols = 3; rows = (n + cols - 1) // cols
        fc = "".join(f"[{i}]scale=480:270:force_original_aspect_ratio=increase,crop=480:270,drawtext=text='{i+1}':x=12:y=10:fontsize=36:fontcolor=white:box=1:boxcolor=black@0.5[v{i}];" for i in range(n))
        layout = "|".join(f"{(i % cols) * 480}_{(i // cols) * 270}" for i in range(n))
        fc += "".join(f"[v{i}]" for i in range(n)) + f"xstack=inputs={n}:layout={layout}:fill=black[o]" if n > 1 else "[v0]null[o]"
        subprocess.run(["ffmpeg", "-y", "-loglevel", "error", *args, "-filter_complex", fc, "-map", "[o]", "-q:v", "4", os.path.join(d, "contact.jpg")], check=False)
print("done")
