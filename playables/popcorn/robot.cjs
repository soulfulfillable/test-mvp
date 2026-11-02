#!/usr/bin/env node
// Pop & Topple — headless play robot. Serves docs/popcorn over local http and plays it in Chromium. Writes screenshots
// + qa/report.json. Run: NODE_PATH=/opt/node-tools/node_modules node playables/popcorn/robot.cjs
//   checks: console/page errors 0, no external requests, HUD inside the viewport and not overlapping at 8 sizes,
//           level 1 first-screen essentials visible (sling, target, floor marker) on phone,
//           every level cleared by a REAL touch drag (the solver's pull replayed as a finger pull — qa/solutions.json),
//           a miss shows fuse → pop → settle → aim again; seeds count down; out of seeds → "Try again" → instant retry,
//           same pull twice → identical physics fingerprint (determinism), mute + level persist across reload,
//           phone 390×844 @3x (= 1170×2532 image) and desktop screenshots.
'use strict';
const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const ROOT = path.resolve(__dirname, '..', '..', 'docs', 'popcorn');
const OUT = process.argv[2] || path.join(__dirname, 'qa');
fs.mkdirSync(OUT, { recursive: true });
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.ogg': 'audio/ogg', '.mp3': 'audio/mpeg', '.png': 'image/png', '.md': 'text/markdown' };
const CHROME = process.env.CHROME || '/opt/pw-browsers/chromium-1243/chrome-linux64/chrome';

const SIZES = [
  ['phone-390x844', 390, 844], ['phone-360x640', 360, 640], ['phone-430x932', 430, 932],
  ['land-844x390', 844, 390], ['tablet-768x1024', 768, 1024], ['square-640x640', 640, 640],
  ['desk-1366x768', 1366, 768], ['desk-1920x1080', 1920, 1080],
];

const report = { startedAt: new Date().toISOString(), consoleErrors: [], pageErrors: [], externalRequests: [], checks: [], screenshots: [], levels: [] };
function check(name, ok, detail) { report.checks.push({ name, ok: !!ok, detail: detail === undefined ? '' : String(detail) }); console.log((ok ? 'PASS ' : 'FAIL ') + name + (detail !== undefined ? '  — ' + detail : '')); }
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function serve() {
  return new Promise((resolve) => {
    const srv = http.createServer((req, res) => {
      let p = decodeURIComponent(req.url.split('?')[0].split('#')[0]); if (p === '/') p = '/index.html';
      const file = path.join(ROOT, p);
      if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); res.end(); return; }
      res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] || 'application/octet-stream' }); fs.createReadStream(file).pipe(res);
    });
    srv.listen(0, '127.0.0.1', () => resolve(srv));
  });
}
async function newPage(browser, w, h, url, opts = {}) {
  const context = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: opts.dpr || 1, hasTouch: !!opts.touch, isMobile: !!opts.touch });
  const page = await context.newPage();
  page.on('console', (m) => { if (m.type() === 'error') report.consoleErrors.push(`[${w}x${h}] ` + m.text().slice(0, 300)); });
  page.on('pageerror', (e) => report.pageErrors.push(`[${w}x${h}] ` + e.message.slice(0, 300)));
  page.on('request', (r) => { const u = r.url(); if (!u.startsWith('http://127.0.0.1') && !u.startsWith('data:') && !u.startsWith('blob:')) report.externalRequests.push(u); });
  await page.goto(url);
  await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 60000 });
  await page.evaluate(() => { localStorage.clear(); PC.start(0); });
  await sleep(300);
  return { context, page };
}
async function shot(page, name) { const f = path.join(OUT, name + '.png'); await page.screenshot({ path: f }); report.screenshots.push(name + '.png'); }

// a real finger pull: touchStart → N touchMoves → touchEnd through CDP (Playwright's touchscreen only taps)
async function drag(page, from, to, steps = 14) {
  const cdp = await page.context().newCDPSession(page);
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: from.x, y: from.y }] });
  for (let i = 1; i <= steps; i++) { const t = i / steps; await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: from.x + (to.x - from.x) * t, y: from.y + (to.y - from.y) * t }] }); await sleep(16); }
  await sleep(100);
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
  await cdp.detach();
}
// world pull vector → a finger pull on screen (start on the kernel in the pouch, drag back = down-left)
async function pullFor(page, sol) {
  const u = await page.evaluate(() => PC.pxPerUnit());
  const from = await page.evaluate(() => PC.pouchPx());
  return { from, to: { x: from.x - sol.dx * u, y: from.y + sol.dy * u } };
}
async function waitState(page, states, ms) { try { await page.waitForFunction((s) => s.includes(PC.state), states, { timeout: ms }); return true; } catch (e) { return false; } }
async function waitFn(page, fn, ms) { try { await page.waitForFunction(fn, null, { timeout: ms }); return true; } catch (e) { return false; } }

(async () => {
  const srv = await serve(); const base = `http://127.0.0.1:${srv.address().port}/`;
  const browser = await chromium.launch({ executablePath: CHROME, args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required'] });
  const solutions = JSON.parse(fs.readFileSync(path.join(__dirname, 'qa', 'solutions.json'), 'utf8'));

  // ---- 1. layout at 8 sizes: HUD inside, no overlaps, canvas full ----
  for (const [name, w, h] of SIZES) {
    const { context, page } = await newPage(browser, w, h, base);
    const r = await page.evaluate(() => {
      const vw = innerWidth, vh = innerHeight, out = { inside: [], overlap: [], mode: document.body.dataset.mode };
      const els = ['#level', '#seeds', '#target', '.btns', '#hintwrap'].map((s) => [s, document.querySelector(s).getBoundingClientRect()]);
      for (const [s, b] of els) if (b.left < 0 || b.top < 0 || b.right > vw + 0.5 || b.bottom > vh + 0.5) out.inside.push(s);
      for (let i = 0; i < els.length; i++) for (let j = i + 1; j < els.length; j++) { const a = els[i][1], b = els[j][1]; if (a.left < b.right - 2 && b.left < a.right - 2 && a.top < b.bottom - 2 && b.top < a.bottom - 2) out.overlap.push(els[i][0] + '~' + els[j][0]); }
      const c = document.querySelector('#game').getBoundingClientRect(); out.canvas = Math.round(c.width) === vw && Math.round(c.height) === vh;
      // scene essentials on screen: pouch, the target cup, the floor line
      const v = PC.view, sim = PC.sim(); const cup = sim.snapshot().find((b) => b.target);
      out.pouch = v.sx(sim.pouch(0, 0).x) > 0 && v.sy(sim.pouch(0, 0).y) > 0 && v.sy(sim.pouch(0, 0).y) < vh;
      out.cup = v.sx(cup.x) > 0 && v.sx(cup.x) < vw && v.sy(cup.y) > 0 && v.sy(cup.y) < vh;
      out.floor = v.sy(0) > vh * 0.3 && v.sy(0) < vh - 20;
      out.scale = Math.round(v.scale);
      return out;
    });
    check(`layout ${name} (${r.mode}, ${r.scale}px/m)`, r.inside.length === 0 && r.overlap.length === 0 && r.canvas && r.pouch && r.cup && r.floor, (r.inside.length ? 'outside: ' + r.inside.join(',') : '') + (r.overlap.length ? ' overlap: ' + r.overlap.join(',') : '') + (r.canvas ? '' : ' canvas not full') + (r.pouch ? '' : ' pouch off-screen') + (r.cup ? '' : ' cup off-screen') + (r.floor ? '' : ' floor badly placed'));
    await shot(page, 'layout-' + name);
    await context.close();
  }
  // phone @3x (iPhone 13 pixels 1170×2532)
  { const { context, page } = await newPage(browser, 390, 844, base, { dpr: 3, touch: true }); await sleep(600); await shot(page, 'level1-first-screen-1170x2532'); await context.close(); }

  // ---- 2. clear every level with a real touch drag (phone, touch) ----
  const { context, page } = await newPage(browser, 390, 844, base, { touch: true });
  for (let i = 0; i < solutions.length; i++) {
    const sol = solutions[i];
    await page.evaluate((i) => PC.start(i), i);
    await waitState(page, ['aim'], 5000); await sleep(400);
    await shot(page, `level${i + 1}-aim`);
    const lv = { level: i + 1, name: sol.name, shots: [] };
    let won = false;
    for (let k = 0; k < (sol.solution || []).length; k++) {
      const d = await pullFor(page, sol.solution[k]);
      await waitState(page, ['aim'], 15000);
      const cdp = await page.context().newCDPSession(page);
      await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: d.from.x, y: d.from.y }] });
      for (let s = 1; s <= 14; s++) { const t = s / 14; await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: d.from.x + (d.to.x - d.from.x) * t, y: d.from.y + (d.to.y - d.from.y) * t }] }); await sleep(16); }
      await sleep(120); await shot(page, `level${i + 1}-shot${k + 1}-aiming`);
      await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] }); await cdp.detach();
      const flying = await waitState(page, ['flying', 'fuse', 'settling', 'won'], 2000);
      await sleep(350); await shot(page, `level${i + 1}-shot${k + 1}-flight`);
      const fused = await waitState(page, ['fuse', 'settling', 'won'], 8000);
      await shot(page, `level${i + 1}-shot${k + 1}-fuse`);
      const popped = await waitState(page, ['settling', 'won', 'aim', 'lost'], 3000);
      await sleep(350); await shot(page, `level${i + 1}-shot${k + 1}-pop`);
      const done = await waitState(page, ['aim', 'won', 'lost'], 15000);
      const st = await page.evaluate(() => ({ state: PC.state, seeds: PC.seedsLeft, targets: PC.targetsLeft }));
      lv.shots.push({ pull: sol.solution[k], flying, fused, popped, done, after: st });
      check(`level ${i + 1} shot ${k + 1}: drag → flight → fuse → pop → resolved`, flying && fused && popped && done, JSON.stringify(st));
      if (st.state === 'won') { won = true; break; }
    }
    await sleep(1400); await shot(page, `level${i + 1}-result`);
    const panel = await page.evaluate(() => ({ hidden: document.querySelector('#panel').classList.contains('hidden'), title: document.querySelector('#panel-title').textContent, count: document.querySelector('#tcount').textContent }));
    check(`level ${i + 1} (${sol.name}) cleared by touch drag`, won && !panel.hidden && /down|toppled/i.test(panel.title) && panel.count === '0', `panel="${panel.title}" targets-up=${panel.count}`);
    lv.won = won; report.levels.push(lv);
    if (!won) { // leave evidence of what happened
      await shot(page, `level${i + 1}-FAILED`);
    }
  }
  // ---- 3. determinism: same pull twice → same fingerprint ----
  const hashes = [];
  for (let k = 0; k < 2; k++) {
    await page.evaluate(() => PC.start(0)); await waitState(page, ['aim'], 5000); await sleep(200);
    await page.evaluate(() => PC.shoot(0.45, 0.3)); // a deliberate miss so things move
    await waitState(page, ['aim', 'lost'], 15000); await sleep(300);
    hashes.push(await page.evaluate(() => PC.hash()));
  }
  check('determinism (same pull twice → identical body positions)', hashes[0] === hashes[1], hashes.join(' vs '));
  // ---- 4. miss flow: seeds count down, out of seeds → Try again → instant retry on the same level ----
  await page.evaluate(() => PC.start(0)); await waitState(page, ['aim'], 5000);
  const seedsBefore = await page.evaluate(() => document.querySelectorAll('#seeds .kernel:not(.used)').length);
  const d0 = await pullFor(page, { dx: 0.2, dy: 0.1 }); await drag(page, d0.from, d0.to);
  await waitState(page, ['flying', 'fuse', 'settling'], 2000); await waitState(page, ['aim', 'lost'], 15000); await sleep(200);
  const seedsAfter = await page.evaluate(() => document.querySelectorAll('#seeds .kernel:not(.used)').length);
  check('HUD seeds count down after a shot', seedsBefore === 3 && seedsAfter === 2, `${seedsBefore} → ${seedsAfter}`);
  for (let k = 0; k < 2; k++) { await page.evaluate(() => PC.shoot(0.2, 0.1)); await waitState(page, ['aim', 'lost'], 15000); await sleep(200); }
  const lost = await waitFn(page, () => PC.state === 'lost' && !document.querySelector('#panel').classList.contains('hidden'), 4000);
  const lostTitle = await page.evaluate(() => document.querySelector('#panel-title').textContent);
  check('out of seeds → "Out of seeds" panel', lost && /out of seeds/i.test(lostTitle), lostTitle);
  await shot(page, 'out-of-seeds');
  await page.click('#panel-btn'); await sleep(300);
  const retry = await page.evaluate(() => ({ state: PC.state, level: PC.level, seeds: PC.seedsLeft, panelHidden: document.querySelector('#panel').classList.contains('hidden') }));
  check('Try again → same level, seeds refilled, instant', retry.state === 'aim' && retry.level === 0 && retry.seeds === 3 && retry.panelHidden, JSON.stringify(retry));
  // a short pull cancels (no seed spent)
  const d1 = await pullFor(page, { dx: 0.05, dy: 0.05 }); await drag(page, d1.from, d1.to); await sleep(300);
  check('too-short pull cancels, no seed spent', await page.evaluate(() => PC.state === 'aim' && PC.seedsLeft === 3));
  // ---- 5. restart button, mute + level persist across reload ----
  await page.evaluate(() => PC.shoot(0.3, 0.2)); await waitState(page, ['aim', 'lost'], 15000);
  await page.click('#btn-restart'); await sleep(200);
  check('restart button refills seeds', await page.evaluate(() => PC.state === 'aim' && PC.seedsLeft === 3));
  await page.click('#btn-sound'); await sleep(100);
  await page.evaluate(() => PC.start(2)); await sleep(200);
  await page.reload(); await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 60000 }); await sleep(300);
  check('mute persists after reload', await page.evaluate(() => document.querySelector('#btn-sound').classList.contains('off')));
  check('level progress persists after reload', await page.evaluate(() => PC.level === 2), await page.evaluate(() => PC.level));
  await context.close();

  // ---- 6. desktop: mouse drag clears level 1 ----
  { const { context, page } = await newPage(browser, 1366, 768, base);
    const d = await pullFor(page, solutions[0].solution[0]);
    await page.mouse.move(d.from.x, d.from.y); await page.mouse.down();
    for (let s = 1; s <= 12; s++) { await page.mouse.move(d.from.x + (d.to.x - d.from.x) * s / 12, d.from.y + (d.to.y - d.from.y) * s / 12); await sleep(16); }
    await sleep(100); await shot(page, 'desktop-aiming'); await page.mouse.up();
    const won = await waitState(page, ['won'], 15000); await sleep(1400); await shot(page, 'desktop-level1-won');
    check('desktop mouse drag clears level 1', won, await page.evaluate(() => PC.state));
    await context.close(); }

  check('console errors = 0', report.consoleErrors.length === 0, report.consoleErrors.join(' | '));
  check('page errors = 0', report.pageErrors.length === 0, report.pageErrors.join(' | '));
  check('no external requests', report.externalRequests.length === 0, report.externalRequests.slice(0, 5).join(' '));
  report.finishedAt = new Date().toISOString();
  report.passed = report.checks.filter((c) => c.ok).length; report.failed = report.checks.filter((c) => !c.ok).length;
  report.solver = solutions.map((s) => ({ level: s.level + 1, name: s.name, winPct: s.winPct, directPct: s.directPct, gapShots: s.gapShots, gapWins: s.gapWins, oneShotPct: s.oneShotPct, openedPct: s.openedPct, secondWinPct: s.secondWinPct, solution: s.solution }));
  fs.writeFileSync(path.join(OUT, 'report.json'), JSON.stringify(report, null, 1));
  console.log(`\n${report.passed} passed, ${report.failed} failed → ${path.join(OUT, 'report.json')}`);
  await browser.close(); srv.close();
  process.exit(report.failed ? 1 : 0);
})().catch((e) => { console.error(e); process.exit(2); });
