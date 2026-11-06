#!/usr/bin/env node
// Hidden Little Friends — QA robot. Serves hidden_friends/game over local http and plays it in headless Chromium with
// REAL input (touchscreen taps on phones, mouse clicks on desktop). Writes qa/report.json + screenshots.
// Run: NODE_PATH=/opt/node-tools/node_modules node hidden_friends/robot.cjs
'use strict';
const http = require('http'), fs = require('fs'), path = require('path');
const { chromium } = require('playwright');
const ROOT = path.join(__dirname, 'game'), OUT = path.join(__dirname, 'qa');
fs.mkdirSync(OUT, { recursive: true });
const MIME = { '.html':'text/html', '.mp3':'audio/mpeg', '.js':'text/javascript' };
const serve = () => new Promise(res => { const s = http.createServer((q, r) => {
  let p = decodeURIComponent(q.url.split('?')[0]); if (p === '/') p = '/index.html';
  const f = path.join(ROOT, p); if (!f.startsWith(ROOT) || !fs.existsSync(f)) { r.writeHead(404); return r.end(); }
  r.writeHead(200, { 'Content-Type': MIME[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(r);
}); s.listen(0, '127.0.0.1', () => res(s)); });

const results = []; let shotN = 0;
const check = (name, ok, info) => { results.push({ name, ok: !!ok, info }); console.log((ok ? 'PASS ' : 'FAIL ') + name + (info ? '  ' + JSON.stringify(info) : '')); };

async function run(dev, base) {
  const touch = dev.touch;
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: dev.w, height: dev.h }, deviceScaleFactor: 1, hasTouch: touch, isMobile: touch });
  const errors = [], external = [];
  page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('pageerror', e => errors.push(String(e)));
  page.on('request', r => { if (!r.url().startsWith(base)) external.push(r.url()); });
  const shot = async (n) => page.screenshot({ path: path.join(OUT, `${dev.name}-${String(++shotN).padStart(2, '0')}-${n}.png`) });
  const st = () => page.evaluate(() => window.__hlf.state());
  const tapAt = async (x, y) => { if (touch) await page.touchscreen.tap(x, y); else await page.mouse.click(x, y); };
  const tapEl = async (sel) => { const b = await page.locator(sel).boundingBox(); await tapAt(b.x + b.width / 2, b.y + b.height / 2); };
  // friend i of the current scene → screen point (+ hitbox radius in px)
  const friendPt = (i) => page.evaluate((i) => {
    const svg = document.getElementById('scene'), sc = window.__hlf.scenes.find(s => s.id === window.__hlf.state().scene), f = sc.friends[i];
    const m = svg.getScreenCTM(), p = svg.createSVGPoint(); p.x = f.x; p.y = f.y; const q = p.matrixTransform(m);
    return { x: q.x, y: q.y, rpx: f.r * m.a, n: sc.friends.length };
  }, i);

  await page.goto(base + '/');
  await page.evaluate(() => localStorage.clear()); await page.reload(); await page.waitForTimeout(600);
  await shot('first-frame');
  let s = await st();
  check(`${dev.name}: starts straight in scene 1 with the task`, s.scene === 'pond' && !s.sheet && (await page.textContent('#taskText')) === 'Find 5 frogs');

  // layout: HUD and bottom bar never overlap the scene picture; everything on screen
  const lay = await page.evaluate(() => {
    const r = (id) => document.getElementById(id).getBoundingClientRect();
    const svg = document.getElementById('scene'), m = svg.getScreenCTM();
    const pic = { top: m.f, left: m.e, bottom: m.f + 720 * m.d, right: m.e + 400 * m.a };
    return { top: r('top').bottom, bar: r('bar').top, pic, vw: innerWidth, vh: innerHeight, barBottom: r('bar').bottom, scale: m.a };
  });
  check(`${dev.name}: scene picture sits between HUD and bottom bar (no overlay on targets)`, lay.pic.top >= lay.top - 1 && lay.pic.bottom <= lay.bar + 1 && lay.pic.left >= -1 && lay.pic.right <= lay.vw + 1 && lay.barBottom <= lay.vh + 1, lay);

  // wrong tap → feedback, nothing counted
  const p0 = await friendPt(0);
  await tapAt(lay.pic.left + 12, lay.pic.bottom - 14);
  await page.waitForTimeout(60);
  const ring = await page.locator('.missRing').count(); s = await st();
  check(`${dev.name}: wrong tap shows a ripple and counts nothing`, ring >= 1 && s.found.length === 0, { ring });
  await shot('wrong-tap');

  // hint
  await tapEl('#hintBtn'); await page.waitForTimeout(700);
  const glow = await page.locator('.hintGlow').count(), dis = await page.locator('#hintBtn').isDisabled();
  check(`${dev.name}: hint shows a soft glow near a hidden friend, then cools down`, glow === 1 && dis);
  await shot('hint');
  await page.waitForTimeout(2200);

  const hitboxes = [];
  async function findAll(sceneId, opts = {}) {
    const n = (await friendPt(0)).n;
    for (let i = 0; i < n; i++) {
      s = await st(); if (s.found.includes(i)) continue;
      const p = await friendPt(i); hitboxes.push(Math.round(p.rpx * 2));
      // the tap point must land on the scene, not on any UI
      const onScene = await page.evaluate(([x, y]) => !!document.elementFromPoint(x, y)?.closest('#scene'), [p.x, p.y]);
      if (!onScene) check(`${dev.name}: ${sceneId} friend ${i} tap point is on the scene`, false, p);
      await tapAt(p.x, p.y); await page.waitForTimeout(140);
      s = await st();
      if (!s.found.includes(i)) check(`${dev.name}: ${sceneId} friend ${i} found by a real tap`, false, p);
      if (opts.midShot && i === 1) { await page.waitForTimeout(250); await shot(`${sceneId}-found-pop`); }
      await page.waitForTimeout(opts.fast ? 160 : 1200);
      if (opts.reloadAfter === i) {
        await page.reload(); await page.waitForTimeout(700); s = await st();
        const seated = await page.locator('[data-seated]').count();
        check(`${dev.name}: progress survives a reload (${s.found.length} found, ${seated} seated)`, s.found.length === i + 1 && seated === i + 1 && s.scene === sceneId);
        await shot(`${sceneId}-after-reload`);
      }
    }
    await page.waitForTimeout(4600);
    s = await st();
    check(`${dev.name}: ${sceneId} all ${n} friends found → finale → postcard`, s.found.length === n && s.complete && s.sheet === 'doneSheet' && s.done[sceneId]);
  }

  await findAll('pond', { reloadAfter: 1, midShot: true });
  await shot('pond-postcard');
  // play again resets
  await tapEl('#againBtn'); await page.waitForTimeout(500); s = await st();
  check(`${dev.name}: Play again resets the scene but keeps the postcard`, s.scene === 'pond' && s.found.length === 0 && !s.sheet && s.done.pond);
  await findAll('pond', { fast: true });
  await tapEl('#nextBtn'); await page.waitForTimeout(600); s = await st();
  check(`${dev.name}: Next scene → Hot Spring`, s.scene === 'spring' && !s.sheet);
  await shot('spring-start');
  await findAll('spring', { midShot: true });
  await shot('spring-postcard');
  await tapEl('#nextBtn'); await page.waitForTimeout(600); s = await st();
  check(`${dev.name}: Next scene → Night Garden`, s.scene === 'night');
  await shot('night-start');
  await findAll('night', { midShot: true });
  await shot('night-postcard');
  check(`${dev.name}: last scene offers the postcard collection`, (await page.textContent('#nextBtn')) === 'See all postcards');
  await tapEl('#nextBtn'); await page.waitForTimeout(600); s = await st();
  const collected = await page.textContent('#menuSub');
  check(`${dev.name}: collection shows 3 of 3 postcards`, s.sheet === 'menuSheet' && /3 of 3/.test(collected), collected);
  await shot('collection');
  const audio = await page.evaluate(() => window.__hlf.audio());
  check(`${dev.name}: all 30 sound files load and decode`, audio === 30, { decoded: audio });
  // reload keeps the collection; menu can reopen a scene and restart it
  await page.reload(); await page.waitForTimeout(900); s = await st();
  check(`${dev.name}: reload of a finished scene shows its postcard again`, s.scene === 'night' && s.sheet === 'doneSheet');
  await tapEl('#nextBtn'); await page.waitForTimeout(500);
  const txt = await page.textContent('#menuSub');
  check(`${dev.name}: collection survives reload`, /3 of 3/.test(txt), txt);
  await tapEl('.card[data-scene="1"]'); await page.waitForTimeout(600); s = await st();
  check(`${dev.name}: replaying a collected scene from the menu starts it fresh`, s.scene === 'spring' && s.found.length === 0 && !s.sheet);
  const q = await friendPt(2); await tapAt(q.x, q.y); await page.waitForTimeout(1400);
  await tapEl('#menuBtn'); await page.waitForTimeout(400); await tapEl('#restartBtn'); await page.waitForTimeout(500); s = await st();
  check(`${dev.name}: menu → Restart this scene clears its finds`, s.found.length === 0 && s.scene === 'spring');
  // sound toggle persists
  await tapEl('#soundBtn'); await page.reload(); await page.waitForTimeout(500);
  const muted = await page.evaluate(() => JSON.parse(localStorage.getItem('hlf.v1')).mute);
  check(`${dev.name}: sound toggle is saved`, muted === true);
  check(`${dev.name}: smallest friend hitbox ≥ 44px`, Math.min(...hitboxes) >= 44, { min: Math.min(...hitboxes), max: Math.max(...hitboxes) });
  check(`${dev.name}: console errors 0, page errors 0`, errors.length === 0, errors.slice(0, 5));
  check(`${dev.name}: no external requests`, external.length === 0, external.slice(0, 3));
  await browser.close();
}

(async () => {
  const srv = await serve(); const base = `http://127.0.0.1:${srv.address().port}`;
  const devs = [
    { name: 'phone-390x844', w: 390, h: 844, touch: true },
    { name: 'phone-375x667', w: 375, h: 667, touch: true },
    { name: 'desktop-1366x768', w: 1366, h: 768, touch: false },
  ];
  for (const d of devs) { shotN = 0; await run(d, base); }
  srv.close();
  const failed = results.filter(r => !r.ok);
  fs.writeFileSync(path.join(OUT, 'report.json'), JSON.stringify({ date: new Date().toISOString(), passed: results.length - failed.length, failed: failed.length, results }, null, 2));
  console.log(`\n${results.length - failed.length}/${results.length} passed`);
  process.exit(failed.length ? 1 : 0);
})();
