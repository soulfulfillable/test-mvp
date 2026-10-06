"""Peblit 채널 자동 관리 (YouTube Data API v3, 표준 라이브러리만).

환경 변수(GitHub Secrets): YT_CLIENT_ID, YT_CLIENT_SECRET, YT_REFRESH_TOKEN
명령:
  python yt.py whoami                    연결 확인(채널 이름·구독자·영상 수만 출력)
  python yt.py channel channel.json      채널 설명·키워드·배너 바꾸기
  python yt.py hide-others <keep.txt>    지금 있는 영상(쇼츠 포함)을 비공개로 (삭제하지 않음, 되돌릴 수 있음)
  python yt.py upload video.json <mp4>   영상 업로드 + 썸네일, 영상 ID 를 video-id.txt 에
  --dry 를 붙이면 네트워크 없이 보낼 요청만 출력
주의: 공개 리포라 토큰·이메일은 절대 출력하지 않는다.
"""
import json, mimetypes, os, sys, urllib.error, urllib.parse, urllib.request

DRY = "--dry" in sys.argv
ARGS = [a for a in sys.argv[1:] if a != "--dry"]
HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, "../../.."))
API = "https://www.googleapis.com/youtube/v3"
UP = "https://www.googleapis.com/upload/youtube/v3"


def token():
    if DRY: return "DRY"
    body = urllib.parse.urlencode({"client_id": os.environ["YT_CLIENT_ID"], "client_secret": os.environ["YT_CLIENT_SECRET"],
                                   "refresh_token": os.environ["YT_REFRESH_TOKEN"], "grant_type": "refresh_token"}).encode()
    try:
        with urllib.request.urlopen("https://oauth2.googleapis.com/token", body, timeout=60) as r:
            return json.load(r)["access_token"]
    except urllib.error.HTTPError as e:
        sys.exit(f"토큰 갱신 실패 {e.code}: {e.read().decode()[:300]}\n→ refresh token 이 만료됐거나(동의 화면이 '테스트' 상태면 7일) 클라이언트 값이 틀림")


TOK = None


def call(method, url, params=None, body=None, data=None, ctype=None, extra=None):
    global TOK
    TOK = TOK or token()
    if params: url += "?" + urllib.parse.urlencode(params)
    if DRY:
        print("DRY", method, url, json.dumps(body)[:400] if body is not None else (f"<{len(data)} bytes {ctype}>" if data else ""))
        return {"id": "DRY", "items": [], "headers": {}}
    h = {"Authorization": f"Bearer {TOK}"}
    if body is not None: data, h["Content-Type"] = json.dumps(body).encode(), "application/json; charset=UTF-8"
    elif ctype: h["Content-Type"] = ctype
    h.update(extra or {})
    req = urllib.request.Request(url, data=data, method=method, headers=h)
    try:
        with urllib.request.urlopen(req, timeout=600) as r:
            txt = r.read().decode() or "{}"
            out = json.loads(txt); out["headers"] = dict(r.headers); return out
    except urllib.error.HTTPError as e:
        sys.exit(f"{method} {url.split('?')[0]} 실패 {e.code}: {e.read().decode()[:600]}")


def my_channel():
    r = call("GET", f"{API}/channels", {"part": "snippet,brandingSettings,statistics,contentDetails", "mine": "true"})
    if DRY: return {"id": "DRY", "brandingSettings": {"channel": {"title": "Peblit"}}, "contentDetails": {"relatedPlaylists": {"uploads": "DRY"}}, "snippet": {"title": "Peblit"}, "statistics": {}}
    if not r.get("items"): sys.exit("이 계정에 채널이 없음")
    return r["items"][0]


def whoami():
    c = my_channel(); s = c.get("statistics", {})
    print(f"채널: {c['snippet']['title']} · 구독 {s.get('subscriberCount')} · 영상 {s.get('videoCount')}")


def channel(cfg_path):
    cfg = json.load(open(cfg_path))
    c = my_channel()
    b = c.get("brandingSettings", {})
    ch = b.get("channel", {})
    ch["description"] = cfg["description"]
    if cfg.get("keywords"): ch["keywords"] = cfg["keywords"]
    ch.setdefault("title", c["snippet"]["title"])
    new = {"id": c["id"], "brandingSettings": {"channel": ch}}
    if cfg.get("banner"):
        p = os.path.join(ROOT, cfg["banner"]); img = open(p, "rb").read()
        r = call("POST", f"{UP}/channelBanners/insert", {"uploadType": "media"}, data=img, ctype="image/jpeg")
        new["brandingSettings"]["image"] = {"bannerExternalUrl": r.get("url", "DRY")}
        print("배너 올림")
    call("PUT", f"{API}/channels", {"part": "brandingSettings"}, body=new)
    print("채널 설명·키워드·배너 바꿈")


def uploads():
    c = my_channel(); pl = c["contentDetails"]["relatedPlaylists"]["uploads"]; ids, page = [], None
    while True:
        p = {"part": "contentDetails", "playlistId": pl, "maxResults": 50}
        if page: p["pageToken"] = page
        r = call("GET", f"{API}/playlistItems", p)
        ids += [i["contentDetails"]["videoId"] for i in r.get("items", [])]
        page = r.get("nextPageToken")
        if not page: return ids


def hide_others(keep_path=None):
    keep = set(open(keep_path).read().split()) if keep_path and os.path.exists(keep_path) else set()
    for vid in uploads():
        if vid in keep: continue
        r = call("GET", f"{API}/videos", {"part": "status,snippet", "id": vid})
        for v in r.get("items", []):
            if v["status"]["privacyStatus"] == "private": continue
            st = v["status"]; st["privacyStatus"] = "private"
            call("PUT", f"{API}/videos", {"part": "status"}, body={"id": vid, "status": st})
            print("비공개로 바꿈:", v["snippet"]["title"][:60])
    print("완료")


def upload(meta_path, mp4):
    m = json.load(open(meta_path))
    body = {"snippet": {"title": m["title"], "description": m["description"], "tags": m.get("tags", []),
                        "categoryId": m.get("categoryId", "10"), "defaultLanguage": "en", "defaultAudioLanguage": "zxx"},
            "status": {"privacyStatus": m.get("privacy", "public"), "selfDeclaredMadeForKids": False,
                       "containsSyntheticMedia": False, "embeddable": True, "license": "youtube"}}
    assert len(body["snippet"]["title"]) <= 100, "제목 100자 초과"
    size = os.path.getsize(mp4) if not DRY else 1
    r = call("POST", f"{UP}/videos", {"uploadType": "resumable", "part": "snippet,status"}, body=body,
             extra={"X-Upload-Content-Type": "video/mp4", "X-Upload-Content-Length": str(size)})
    loc = r["headers"].get("Location") or r["headers"].get("location")
    if DRY: print("DRY 영상 본문 업로드", mp4); vid = "DRY"
    else:
        # 32MB 조각으로 이어 올리기
        CH = 32 * 1024 * 1024; sent = 0; vid = None
        with open(mp4, "rb") as f:
            while sent < size:
                chunk = f.read(CH); end = sent + len(chunk) - 1
                req = urllib.request.Request(loc, data=chunk, method="PUT", headers={"Authorization": f"Bearer {TOK}", "Content-Length": str(len(chunk)), "Content-Range": f"bytes {sent}-{end}/{size}"})
                try:
                    with urllib.request.urlopen(req, timeout=900) as resp:
                        vid = json.load(resp)["id"]; sent = size
                except urllib.error.HTTPError as e:
                    if e.code != 308: sys.exit(f"업로드 실패 {e.code}: {e.read().decode()[:400]}")
                    rng = e.headers.get("Range"); sent = int(rng.split("-")[1]) + 1 if rng else sent + len(chunk)
                    f.seek(sent)
                print(f"  {sent * 100 // size}%", flush=True)
    print("영상 ID:", vid)
    open(os.path.join(os.getcwd(), "video-id.txt"), "w").write(vid)
    if m.get("thumbnail"):
        img = open(os.path.join(ROOT, m["thumbnail"]), "rb").read()
        try:
            call("POST", f"{UP}/thumbnails/set", {"videoId": vid, "uploadType": "media"}, data=img, ctype="image/jpeg")
            print("썸네일 올림")
        except SystemExit as e:
            print("썸네일 실패(계정 전화 인증 필요할 수 있음: youtube.com/verify):", str(e)[:200])
    if not DRY:
        st = call("GET", f"{API}/videos", {"part": "status", "id": vid})["items"][0]["status"]
        print("공개 상태:", st.get("privacyStatus"), "(미심사 앱이면 private 으로 고정 → Studio 에서 Public 으로)")


if __name__ == "__main__":
    cmd = ARGS[0] if ARGS else "whoami"
    {"whoami": lambda: whoami(), "channel": lambda: channel(ARGS[1]), "hide-others": lambda: hide_others(ARGS[1] if len(ARGS) > 1 else None),
     "upload": lambda: upload(ARGS[1], ARGS[2])}[cmd]()
