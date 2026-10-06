#!/usr/bin/env python3
"""문항 JSON → 사용자 검토용 폰 페이지 docs/gifts-kit-items.html (외부 의존 없음).

사용: python3 tools/giftskit/build_review.py
"""
import json, pathlib, html

ROOT = pathlib.Path(__file__).resolve().parents[2]
C = ROOT / "giftskit_app" / "content"
gifts = json.loads((C / "gifts.json").read_text())
temp = json.loads((C / "temperament.json").read_text())
e = html.escape

def item_row(it, extra=""):
    return (f'<li class="it" data-id="{e(it["id"])}"><button class="flag" aria-label="이 문항 표시">'
            f'<span class="dot"></span></button><div><p class="en">{e(it["en"])}</p>'
            f'<p class="ko">{e(it["ko"])}</p>{extra}<p class="id">{e(it["id"])}</p></div></li>')

g_html = []
for i, g in enumerate(gifts["gifts"], 1):
    rows = "".join(item_row(it) for it in g["items"])
    g_html.append(
        f'<details class="grp"><summary><span class="n">{i}</span><span class="t">{e(g["ko"])}'
        f' <span class="sub">{e(g["en"])}</span></span></summary>'
        f'<p class="sum">{e(g["summary_ko"])}<br><span class="sub">{e(g["summary_en"])}</span></p>'
        f'<p class="refs">{e(" · ".join(g["refs"]))}</p><ol>{rows}</ol></details>')

t_html = []
for i, t in enumerate(temp["traits"], 1):
    rows = []
    for it in t["items"]:
        sign = "＋" if it["key"] == 1 else "－"
        orig = it["ipip"]
        changed = orig.rstrip(".").lower().replace("am ", "") not in it["en"].lower()
        extra = f'<p class="orig">{sign} 역방향' if it["key"] == -1 else f'<p class="orig">{sign} 정방향'
        extra += f' · IPIP 원문: {e(orig)}</p>' if changed else '</p>'
        rows.append(item_row(it, extra))
    t_html.append(
        f'<details class="grp"><summary><span class="n">{i}</span><span class="t">{e(t["ko"])}'
        f' <span class="sub">{e(t["low_en"])} ↔ {e(t["high_en"])}</span></span></summary>'
        f'<p class="sum">{e(t["low_ko"])} ↔ {e(t["high_ko"])} — 둘 다 좋은 쪽, 막대 하나로 보여 줌</p>'
        f'<ol>{"".join(rows)}</ol></details>')

n_g = sum(len(g["items"]) for g in gifts["gifts"])
n_t = sum(len(t["items"]) for t in temp["traits"])
scale = " · ".join(f"{a} ({b})" for a, b in zip(gifts["scale"]["en"], gifts["scale"]["ko"]))

page = f"""<!doctype html>
<html lang="ko"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>은사 키트 문항 검토</title>
<style>
:root{{--bg:#f2f2f7;--card:#fff;--ink:#1c1c1e;--mute:#6c6c70;--line:#d1d1d6;--accent:#2f6f5e;--flag:#c2410c}}
@media (prefers-color-scheme:dark){{:root:not([data-theme=light]){{--bg:#000;--card:#1c1c1e;--ink:#f2f2f7;--mute:#98989f;--line:#38383a;--accent:#6cc3a8;--flag:#fb923c}}}}
*{{box-sizing:border-box}}
body{{margin:0;background:var(--bg);color:var(--ink);font:17px/1.45 -apple-system,BlinkMacSystemFont,"SF Pro Text","Apple SD Gothic Neo",system-ui,sans-serif;-webkit-text-size-adjust:100%}}
main{{max-width:640px;margin:0 auto;padding:16px 16px 120px}}
h1{{font-size:28px;margin:12px 0 4px}} h2{{font-size:13px;font-weight:600;color:var(--mute);text-transform:uppercase;letter-spacing:.02em;margin:28px 4px 8px}}
.lead{{color:var(--mute);font-size:15px;margin:0 0 8px}}
.box{{background:var(--card);border-radius:12px;padding:14px 16px;margin:8px 0}}
.box p{{margin:0 0 8px}} .box p:last-child{{margin:0}}
.q b{{color:var(--accent)}}
.grp{{background:var(--card);border-radius:12px;margin:8px 0;overflow:hidden}}
summary{{-webkit-tap-highlight-color:transparent;outline:none;list-style:none;display:flex;gap:12px;align-items:center;padding:14px 16px;cursor:pointer;font-weight:600}}
summary::-webkit-details-marker{{display:none}}
summary .n{{width:24px;color:var(--mute);font-weight:400;font-variant-numeric:tabular-nums}}
summary::after{{content:"›";margin-left:auto;color:var(--mute);font-size:22px;transition:transform .2s}}
details[open] summary::after{{transform:rotate(90deg)}}
.sub{{color:var(--mute);font-weight:400;font-size:15px}}
.sum{{margin:0 16px 4px;font-size:15px}} .refs{{margin:0 16px 8px;font-size:13px;color:var(--accent)}}
ol{{list-style:none;margin:0;padding:0}}
.it{{display:flex;gap:10px;padding:12px 16px 12px 8px;border-top:.5px solid var(--line)}}
.it p{{margin:0}} .en{{font-size:16px}} .ko{{font-size:15px;color:var(--mute)}}
.orig{{font-size:13px;color:var(--mute);margin-top:4px!important}} .id{{font-size:11px;color:var(--mute);opacity:.7;margin-top:2px!important}}
.flag{{flex:none;width:36px;height:36px;border:0;background:none;padding:0;display:grid;place-items:center;cursor:pointer}}
.dot{{width:20px;height:20px;border-radius:50%;border:1.5px solid var(--line)}}
.it.on .dot{{background:var(--flag);border-color:var(--flag)}} .it.on .en{{color:var(--flag)}}
.bar{{position:fixed;left:0;right:0;bottom:0;background:var(--card);border-top:.5px solid var(--line);padding:10px 16px calc(10px + env(safe-area-inset-bottom));display:flex;gap:12px;align-items:center;justify-content:center}}
.bar span{{font-size:15px;color:var(--mute)}}
.bar button{{font:inherit;font-weight:600;border:0;border-radius:10px;padding:10px 16px;background:var(--accent);color:#fff}}
@media (prefers-color-scheme:dark){{.bar button{{color:#000}}}}
.bar button:disabled{{opacity:.4}}
</style></head><body><main>
<h1>문항 초안 검토</h1>
<p class="lead">소그룹 은사·기질 키트 · 초안 1 (2026-10-06) · 은사 {n_g}문항 + 기질 {n_t}문항</p>

<div class="box q">
<p><b>보는 법</b> — 은사·성향 이름을 눌러 펼치세요. 영어가 실제 앱 문장, 회색이 번역입니다.
걸리는 문항은 왼쪽 동그라미를 눌러 표시하고, 아래 <b>표시 복사</b>를 눌러 채팅에 붙여 주세요.</p>
<p>답 척도(5점): <span class="sub">{e(scale)}</span></p>
</div>

<h2>결정</h2>
<div class="box q">
<p><b>✓ 표적 은사(예언·방언·병 고침)</b>는 1차에서 빼기로 이미 확정 (10-06 결정 로그) — 그래서 아래 14개만 있습니다.</p>
<p><b>앱 언어</b><br>A. 미국 App Store용 영어(이 페이지의 영어 문장) — <b>추천</b>: 지금까지 앱 모두 미국 대상<br>B. 한국어</p>
</div>

<h2>은사 14개 × 5문항 — 새로 작성</h2>
{''.join(g_html)}

<h2>기질 5성향 × 8문항 — IPIP 공개 문항</h2>
<div class="box"><p class="sub">IPIP(퍼블릭 도메인) Big Five 문항을 그대로 또는 살짝 다듬어 씀. 다듬은 문항은 원문을 같이 적었습니다. 결과는 4글자 유형 없이 막대 5개.</p></div>
{''.join(t_html)}

<h2>지킨 것</h2>
<div class="box"><p class="sub">타사 진단지(Lifeway·Fuller·Team Ministry 등) 문항은 보지도 않고 성경 본문만 보고 작성 · MBTI·16 Personalities·5 Love Languages·Enneagram 이름 없음 · 문항에 은사 이름이 안 들어가게 자동 검사 · "진단" 대신 "자기 성찰 도구" 표기 예정. 자세한 근거: giftskit_app/content/SOURCES.md</p></div>
</main>
<div class="bar"><span id="cnt">표시 0개</span><button id="copy" disabled>표시 복사</button></div>
<script>
const KEY='giftskit-review-flags';
let flags=[];try{{flags=JSON.parse(localStorage.getItem(KEY)||'[]')}}catch(e){{}}
const save=()=>{{try{{localStorage.setItem(KEY,JSON.stringify(flags))}}catch(e){{}}}};
function render(){{
  document.querySelectorAll('.it').forEach(li=>li.classList.toggle('on',flags.includes(li.dataset.id)));
  document.getElementById('cnt').textContent='표시 '+flags.length+'개';
  document.getElementById('copy').disabled=!flags.length;
}}
document.querySelectorAll('.flag').forEach(b=>b.addEventListener('click',()=>{{
  const id=b.closest('.it').dataset.id;
  flags=flags.includes(id)?flags.filter(x=>x!==id):[...flags,id];save();render();
}}));
document.getElementById('copy').addEventListener('click',async()=>{{
  const txt='걸리는 문항: '+flags.join(', ');
  try{{await navigator.clipboard.writeText(txt);document.getElementById('copy').textContent='복사됨'}}
  catch(e){{prompt('복사해서 붙여 주세요',txt)}}
  setTimeout(()=>document.getElementById('copy').textContent='표시 복사',1500);
}});
render();
</script></body></html>
"""
(ROOT / "docs" / "gifts-kit-items.html").write_text(page)
print("docs/gifts-kit-items.html", len(page), "bytes")
