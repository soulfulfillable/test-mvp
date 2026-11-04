#!/usr/bin/env python3
"""Build docs/context-bible/data.json from the content file + public-domain texts, and check the content.

Checks (fail = exit 1):
- every verse the page shows exists in the source text files (texts are copied, never typed by hand)
- every anchor / highlight phrase really occurs in the WEB verse it points to
- grades and link kinds are known values; every insight has the plan-8 fields
- no copyrighted translation names, no click-bait wording
Run: python3 context_bible/build.py
"""
import json, re, sys, pathlib

ROOT = pathlib.Path(__file__).resolve().parent
content = json.loads((ROOT / "content/john1_43-51.json").read_text())
texts = json.loads((ROOT / "sources/texts.json").read_text())
errors = []


def expand(ref):
    m = re.fullmatch(r"(.+) (\d+):(\d+)(?:-(\d+))?", ref)
    book, ch, a, b = m.group(1), int(m.group(2)), int(m.group(3)), int(m.group(4) or m.group(3))
    return [f"{book} {ch}:{v}" for v in range(a, b + 1)]


need = {"WEB": set(), "KJV": set(), "ASV": set()}
p = content["passage"]
need["WEB"].update(expand(p["ref"]))
for ins in content["insights"]:
    for f in ["ref", "hook", "summary", "detail", "evidence", "views", "links", "checked"]:
        if f not in ins:
            errors.append(f"{ins['id']}: missing field {f}")
    v = f"{p['book']} {p['chapter']}:{ins['verse']}"
    if ins["anchor"] not in texts["WEB"][v]:
        errors.append(f"{ins['id']}: anchor not in {v}")
    tv = ins["detail"]["translation"]["verse"]
    for t in need:
        need[t].add(tv)
    for n in ins["detail"]["translation"]["notes"]:
        for r in n.get("refs", []):
            for t in need:
                need[t].add(r)
    for c in ins["detail"]["situation"]:
        if c["grade"] not in content["grades"]:
            errors.append(f"{ins['id']}: bad grade {c['grade']}")
    for lk in ins["links"]:
        if lk["kind"] not in content["linkKinds"]:
            errors.append(f"{ins['id']}: bad link kind {lk['kind']}")
        vs = expand(lk["ref"])
        need["WEB"].update(vs)
        for ph in lk["highlightSource"]:
            if ph not in texts["WEB"][v]:
                errors.append(f"{ins['id']}: source highlight '{ph}' not in {v}")
        for hv, phs in lk["highlight"].items():
            if hv not in vs:
                errors.append(f"{ins['id']}: highlight verse {hv} outside {lk['ref']}")
            for ph in phs:
                if ph not in texts["WEB"].get(hv, ""):
                    errors.append(f"{ins['id']}: highlight '{ph}' not in {hv}")
    for e in ins["evidence"]:
        if e["grade"] not in content["grades"]:
            errors.append(f"{ins['id']}: bad evidence grade")
for c in content["checks"]:
    for vline in c["verdict"]:
        for r in vline.get("refs", []):
            need["WEB"].update(expand(r))

out_texts = {}
for t, refs in need.items():
    out_texts[t] = {}
    for r in sorted(refs):
        if r not in texts[t]:
            errors.append(f"missing source text {t} {r}")
        else:
            out_texts[t][r] = texts[t][r]

blob = json.dumps(content, ensure_ascii=False)
for bad in [r"\bNIV\b", r"\bESV\b", r"\bNLT\b", r"(?i)hidden meaning", r"(?i)real meaning", r"(?i)shocking", r"(?i)what they don't tell you"]:
    if re.search(bad, blob):
        errors.append(f"banned wording: {bad}")

if errors:
    print("\n".join("FAIL " + e for e in errors))
    sys.exit(1)

data = dict(content)
data["texts"] = out_texts
out = ROOT.parent / "docs/context-bible/data.json"
out.write_text(json.dumps(data, ensure_ascii=False, indent=1))
print(f"OK  insights={len(content['insights'])} checks={len(content['checks'])} verses WEB={len(out_texts['WEB'])} KJV={len(out_texts['KJV'])} ASV={len(out_texts['ASV'])} -> {out.relative_to(ROOT.parent)}")
