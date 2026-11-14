#!/usr/bin/env python3
"""대회마다 달력 파일(.ics)을 만든다: <데이터 폴더>/ics/<race_id>.ics
아이폰 사파리는 https 로 받은 text/calendar 파일을 '달력에 추가' 창으로 연다(data: 주소는 안 열림 — 실제 아이폰에서 확인).
사용: python3 make_ics.py docs/race-finder-data
"""
import json, glob, os, sys, shutil, datetime as dt

D = sys.argv[1]; OUT = os.path.join(D, "ics")
shutil.rmtree(OUT, ignore_errors=True); os.makedirs(OUT)

def esc(t): return str(t).replace("\\", "\\\\").replace(";", "\;").replace(",", "\\,").replace("\n", " ")
def fold(line):  # RFC 5545: 75옥텟 넘으면 접는다
    b = line.encode(); out = []
    while len(b) > 73:
        cut = 73
        while (b[cut] & 0xC0) == 0x80: cut -= 1
        out.append(b[:cut].decode()); b = b" " + b[cut:]
    out.append(b.decode()); return "\r\n".join(out)

stamp = dt.datetime.now(dt.timezone.utc).strftime("%Y%m%dT%H%M%SZ"); n = 0
for f in glob.glob(os.path.join(D, "t_*.json")):
    for r in json.load(open(f)):
        e = r["e"][0]
        start = dt.datetime.strptime(e["t"], "%Y-%m-%dT%H:%M"); end = start + dt.timedelta(hours=2)
        tz = (";TZID=" + r["tz"]) if r.get("tz") else ""
        loc = ", ".join(x for x in [r["st"], r["c"], r["s"], r["z"]] if x)
        lines = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Soulfulfill//Race Finder//EN", "CALSCALE:GREGORIAN", "METHOD:PUBLISH",
                 "BEGIN:VEVENT", "UID:race-%d@racefinder.soulfulfill" % r["i"], "DTSTAMP:" + stamp,
                 "DTSTART%s:%s" % (tz, start.strftime("%Y%m%dT%H%M%S")), "DTEND%s:%s" % (tz, end.strftime("%Y%m%dT%H%M%S")),
                 "SUMMARY:" + esc(r["n"]), "LOCATION:" + esc(loc), "URL:" + r["u"], "DESCRIPTION:" + esc("Sign up: " + r["u"]),
                 "END:VEVENT", "END:VCALENDAR"]
        open(os.path.join(OUT, "%d.ics" % r["i"]), "w", newline="").write("\r\n".join(fold(l) for l in lines) + "\r\n"); n += 1
print(n, "ics files")
