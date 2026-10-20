// How It Works: 웹 엔진(docs/how-it-works.html)의 레슨 30개를 Flutter 앱이 직접 그릴 수 있는 데이터로 뽑는다.
//   node tools/howitworks/export_lessons.js [--only key1,key2] [--fps 30]
// 출력: howitworks_app/flutter/assets/lessons/<key>.json.gz + index.json.gz (목록 + 정지 썸네일)
//
// 장면(scene) = 그림을 "잎(leaf: path 또는 text)" 목록으로 평탄화한 것. 잎마다 viewBox 좌표로 가는 행렬, 계산된 색·선 굵기·투명도,
// 소속 부품 번호(part)·최상위 그룹 정보(강조 때 흐릴지)·clip 을 담는다. CSS 는 브라우저가 계산한 값(getComputedStyle)을 그대로 쓴다.
// 움직임 = anim(t) 를 fps 로 돌려, 바뀌는 묶음(anchor: id 가 있는 가장 가까운 요소, 없으면 최상위 그룹)만 프레임별로 저장(중복 제거).
// 손떨림 필터는 앱이 직접 흉내 낸다(svgFor(withNums=false) 는 필터를 안 건다).
const { chromium } = require('/opt/node-tools/node_modules/playwright-core');
const path = require('path'), fs = require('fs'), zlib = require('zlib');
const ROOT = path.resolve(__dirname, '../..');
const args = process.argv.slice(2);
const opt = k => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : null; };
const FPS = +(opt('--fps') || 30);
const OUT = path.join(ROOT, 'howitworks_app/flutter/assets/lessons');

function pageExport(key, fps) {
  const L = LESSONS.find(l => l.key === key), p = 'x';
  const host = document.createElement('div');
  host.style.cssText = 'position:absolute;left:0;top:0;width:360px';
  host.innerHTML = svgFor(L, p, false);
  document.body.appendChild(host);
  const svg = host.querySelector('svg'), art = svg.querySelector('.art');
  const rootInv = svg.getScreenCTM().inverse();
  const r3 = v => Math.round(v * 1000) / 1000, r2 = v => Math.round(v * 100) / 100;
  const mat = el => { const m = rootInv.multiply(el.getScreenCTM()); return [m.a, m.b, m.c, m.d, m.e, m.f].map(r3); };
  const num = (el, a, d = 0) => { const v = el.getAttribute(a); return v == null || v === '' ? d : parseFloat(v); };
  function shapeD(el) {
    const t = el.tagName;
    if (t === 'path') return el.getAttribute('d') || '';
    if (t === 'rect') {
      const x = num(el, 'x'), y = num(el, 'y'), w = num(el, 'width'), h = num(el, 'height');
      if (!(w > 0 && h > 0)) return '';
      let rx = el.hasAttribute('rx') ? num(el, 'rx') : num(el, 'ry'), ry = el.hasAttribute('ry') ? num(el, 'ry') : rx;
      rx = Math.min(rx, w / 2); ry = Math.min(ry, h / 2);
      if (!rx || !ry) return `M${x},${y}H${x + w}V${y + h}H${x}Z`;
      return `M${x + rx},${y}H${x + w - rx}A${rx},${ry} 0 0 1 ${x + w},${y + ry}V${y + h - ry}A${rx},${ry} 0 0 1 ${x + w - rx},${y + h}H${x + rx}A${rx},${ry} 0 0 1 ${x},${y + h - ry}V${y + ry}A${rx},${ry} 0 0 1 ${x + rx},${y}Z`;
    }
    if (t === 'circle' || t === 'ellipse') {
      const cx = num(el, 'cx'), cy = num(el, 'cy');
      const rx = t === 'circle' ? num(el, 'r') : num(el, 'rx'), ry = t === 'circle' ? rx : num(el, 'ry');
      if (!(rx > 0 && ry > 0)) return '';
      return `M${cx - rx},${cy}A${rx},${ry} 0 1 0 ${cx + rx},${cy}A${rx},${ry} 0 1 0 ${cx - rx},${cy}Z`;
    }
    if (t === 'line') return `M${num(el, 'x1')},${num(el, 'y1')}L${num(el, 'x2')},${num(el, 'y2')}`;
    if (t === 'polyline' || t === 'polygon') {
      const pts = (el.getAttribute('points') || '').trim().split(/[\s,]+/).map(Number);
      if (pts.length < 4) return '';
      let d = `M${pts[0]},${pts[1]}`;
      for (let i = 2; i + 1 < pts.length; i += 2) d += `L${pts[i]},${pts[i + 1]}`;
      return t === 'polygon' ? d + 'Z' : d;
    }
    return '';
  }
  function paint(v) {           // computed fill/stroke → '#rrggbb' | '#rrggbbaa' | 'none' | 'grid'|'hatch'|'fabric'
    if (!v || v === 'none') return 'none';
    const u = v.match(/url\("?#x(\w+)"?\)/); if (u) return u[1];
    const m = v.match(/rgba?\(([^)]+)\)/); if (!m) return 'none';
    const c = m[1].split(',').map(s => parseFloat(s));
    const h = n => Math.round(n).toString(16).padStart(2, '0');
    if (c.length > 3 && c[3] < 1) return c[3] === 0 ? 'none' : '#' + h(c[0]) + h(c[1]) + h(c[2]) + h(c[3] * 255);
    return '#' + h(c[0]) + h(c[1]) + h(c[2]);
  }
  const clips = {};
  function clipFor(el) {
    for (let e = el; e && e !== svg; e = e.parentElement) {
      const cp = getComputedStyle(e).clipPath;
      const m = cp && cp.match(/url\("?#x(\w+)"?\)/);
      if (m) {
        const id = m[1] + '@' + mat(e).join(',');
        if (!clips[id]) {
          const cpEl = svg.querySelector('#x' + m[1]);
          const ds = cpEl ? [...cpEl.children].map(shapeD).filter(Boolean).join(' ') : '';
          clips[id] = { d: ds, m: mat(e) };
        }
        return id;
      }
    }
    return null;
  }
  function snapshot() {
    const leaves = [];
    const tops = [...art.children];
    const walk = el => {
      const cs = getComputedStyle(el);
      if (cs.display === 'none' || cs.visibility === 'hidden') return;
      const t = el.tagName;
      if (t === 'g' || t === 'svg') { [...el.children].forEach(walk); return; }
      if (t === 'clipPath' || t === 'defs' || t === 'pattern' || t === 'filter') return;
      let o = 1; for (let e = el; e && e !== svg; e = e.parentElement) o *= parseFloat(getComputedStyle(e).opacity);
      if (o < 0.003) return;
      const top = tops.find(tp => tp === el || tp.contains(el));
      const partEl = el.closest('[data-part]');
      let anchor = null;
      for (let e = el; e && e !== art; e = e.parentElement) if (e.id) { anchor = e.id; break; }
      if (!anchor) anchor = 'T' + tops.indexOf(top);
      const lf = { a: anchor };
      if (t === 'text') {
        const s = (el.textContent || '').trim(); if (!s) return;
        Object.assign(lf, { k: 't', tx: s, x: r2(num(el, 'x')), y: r2(num(el, 'y')), fs: r2(parseFloat(cs.fontSize)),
          ta: cs.textAnchor, hand: el.classList.contains('hand') ? 1 : 0, fw: +cs.fontWeight >= 600 ? 1 : 0, f: paint(cs.fill) });
      } else {
        const d = shapeD(el); if (!d) return;
        Object.assign(lf, { k: 'p', d, f: paint(cs.fill), s: paint(cs.stroke), sw: r2(parseFloat(cs.strokeWidth) || 0) });
        if (cs.fillRule === 'evenodd') lf.fr = 1;
        if (cs.strokeDasharray && cs.strokeDasharray !== 'none') lf.da = cs.strokeDasharray.split(/[\s,]+/).map(parseFloat).filter(v => !isNaN(v));
        if (cs.strokeLinecap === 'round') lf.lc = 1;
        if (cs.strokeLinejoin === 'round') lf.lj = 1;
        if (lf.f === 'none' && (lf.s === 'none' || !lf.sw)) return;
      }
      const m = mat(el); if (m.join() !== '1,0,0,1,0,0') lf.m = m;
      if (o < 0.999) lf.o = r3(o);
      if (el.classList.contains('ink')) lf.ink = 1;
      if (partEl && art.contains(partEl)) lf.part = +partEl.dataset.part;
      if (top && top.dataset.part) lf.tp = +top.dataset.part;
      if (top && !top.hasAttribute('opacity') && !/opacity/.test(top.getAttribute('style') || '')) lf.td = 1;
      const c = clipFor(el); if (c) lf.c = c;
      leaves.push(lf);
    };
    tops.forEach(walk);
    return leaves;
  }
  const lead = r => r ? Object.fromEntries(Object.entries(r).map(([n, [x, y]]) => [n, [r2(+x), r2(+y)]])) : null;
  const st0 = lead(L.anim(svg, p, null));
  const stat = snapshot();
  const group = ls => { const g = {}; ls.forEach(l => { const a = l.a; (g[a] = g[a] || []).push(l); }); return g; };
  const sg = group(stat);
  const n = Math.ceil(L.dur * fps);
  const frames = [], leaders = [];
  for (let i = 0; i < n; i++) {
    const r = L.anim(svg, p, i / fps);
    leaders.push(lead(r));
    frames.push(group(snapshot()));
  }
  L.anim(svg, p, null);
  // 바뀌는 묶음 찾기
  const ser = ls => JSON.stringify((ls || []).map(l => { const c = { ...l }; delete c.a; return c; }));
  const anchors = new Set([...Object.keys(sg), ...frames.flatMap(f => Object.keys(f))]);
  const dyn = {};
  for (const a of anchors) {
    const s0 = ser(sg[a]);
    const fs = frames.map(f => ser(f[a]));
    if (fs.some(s => s !== s0)) {
      const uniq = [], idx = [];
      fs.forEach((s, i) => { let k = uniq.indexOf(s); if (k < 0) { k = uniq.length; uniq.push(s); } idx.push(k); });
      dyn[a] = { u: uniq.map(s => JSON.parse(s)), f: idx };
    }
  }
  // 그리는 순서: 정지 그림의 잎 순서대로 묶음(run)을 만든다. 정지 그림에 없고 재생 때만 생기는 묶음은 같은 최상위 그룹의 끝에 붙인다.
  const runs = [];
  stat.forEach(l => {
    const last = runs[runs.length - 1];
    if (last && last.a === l.a) { if (!dyn[l.a]) last.l.push(strip(l)); return; }
    runs.push(dyn[l.a] ? { a: l.a, dyn: 1, s: (sg[l.a] || []).map(strip) } : { a: l.a, l: [strip(l)] });
  });
  function strip(l) { const c = { ...l }; delete c.a; return c; }
  for (const a of Object.keys(dyn)) if (!runs.some(r => r.a === a)) runs.push({ a, dyn: 1, s: [] });
  runs.forEach(r => { if (r.dyn) { r.u = dyn[r.a].u; r.f = dyn[r.a].f; } });
  const sameLead = leaders.every(x => JSON.stringify(x) === JSON.stringify(st0));
  host.remove();
  const meta = { ...L }; delete meta.art; delete meta.anim;
  return { ...meta, day: LESSONS.indexOf(L) + 1, scene: { fps, frames: n, runs, clips, lead0: st0, lead: sameLead ? null : leaders } };
}

(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--no-sandbox'] });
  const pg = await b.newPage({ viewport: { width: 390, height: 844 } });
  const errs = []; pg.on('pageerror', e => errs.push(String(e)));
  await pg.goto('file://' + path.join(ROOT, 'docs/how-it-works.html'));
  let keys = await pg.evaluate(() => LESSONS.map(l => l.key));
  if (opt('--only')) keys = keys.filter(k => opt('--only').split(',').includes(k));
  fs.mkdirSync(OUT, { recursive: true });
  const index = [];
  for (const k of keys) {
    const data = await pg.evaluate(`(${pageExport.toString()})(${JSON.stringify(k)}, ${FPS})`);
    const json = JSON.stringify(data);
    fs.writeFileSync(path.join(OUT, k + '.json.gz'), zlib.gzipSync(json, { level: 9 }));
    const dynRuns = data.scene.runs.filter(r => r.dyn);
    console.log(`${k}: ${(json.length / 1024).toFixed(0)} KB, 잎 ${data.scene.runs.reduce((s, r) => s + (r.l ? r.l.length : r.s.length), 0)}, 움직이는 묶음 ${dynRuns.length} (고유 프레임 ${dynRuns.reduce((s, r) => s + r.u.length, 0)})`);
    // 목록 썸네일: 정지 그림만 (움직임 프레임 없이)
    const thumb = { fps: data.scene.fps, frames: 0, clips: data.scene.clips, lead0: null,
      runs: data.scene.runs.map(r => ({ l: r.dyn ? r.s : r.l })) };
    index.push({ key: k, title: data.title, cat: data.cat, day: data.day, mins: data.mins, vb: data.vb, thumb });
  }
  if (!opt('--only')) { fs.writeFileSync(path.join(OUT, 'index.json.gz'), zlib.gzipSync(JSON.stringify(index), { level: 9 })); try { fs.unlinkSync(path.join(OUT, 'index.json')); } catch (e) {} }
  if (errs.length) { console.error('페이지 오류', errs); process.exit(1); }
  await b.close();
})();
