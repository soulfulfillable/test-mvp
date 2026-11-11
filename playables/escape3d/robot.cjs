#!/usr/bin/env node
// Escape 3D — headless QA robot. Serves docs/escape-3d over local http and plays it in Chromium (WebGL via SwiftShader).
// Run: NODE_PATH=/opt/node-tools/node_modules node playables/escape3d/robot.cjs   → qa/report.json + qa/*.png
// Checks: console errors 0 · no external requests · total download < 5 MB · HUD (timer, sound, joystick, jump) inside the
// viewport and not overlapping at 8 sizes · exit visible on screen in the first frame and when play starts ·
// real CDP touch: joystick moves the hero, jump button lifts it · desktop keys (W, Space) · touching spikes → back to
// the checkpoint · falling in the pit → back to the checkpoint · autopilot (touch joystick + jump button) runs start →
// exit at 390×844 and 360×640 · finish panel + "Run again" · mute survives reload · frame timing.
'use strict';
const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const ROOT = path.resolve(__dirname, '..', '..', 'docs', 'escape-3d');
const OUT = process.argv[2] || path.join(__dirname, 'qa');
fs.mkdirSync(OUT, { recursive: true });
const AUTOPILOT = fs.readFileSync(path.join(__dirname, 'qa', 'autopilot.js'), 'utf8');
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.ogg': 'audio/ogg', '.mp3': 'audio/mpeg', '.png': 'image/png', '.md': 'text/markdown', '.glb': 'model/gltf-binary' };
const SIZES = [
  ['phone-390x844', 390, 844, true], ['phone-360x640', 360, 640, true], ['phone-430x932', 430, 932, true],
  ['land-844x390', 844, 390, true], ['tablet-768x1024', 768, 1024, true],
  ['desk-1280x720', 1280, 720, false], ['desk-1920x1080', 1920, 1080, false], ['iframe-800x450', 800, 450, false],
];
const report = { startedAt: new Date().toISOString(), consoleErrors: [], pageErrors: [], externalRequests: [], checks: [], screenshots: [], numbers: {} };
function check(name, ok, detail) { report.checks.push({ name, ok: !!ok, detail: detail === undefined ? '' : String(detail) }); console.log((ok ? 'PASS ' : 'FAIL ') + name + (detail !== undefined ? '  — ' + detail : '')); }
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let bytesServed = 0;

function serve() {
  return new Promise((resolve) => {
    const srv = http.createServer((req, res) => {
      let p = decodeURIComponent(req.url.split('?')[0].split('#')[0]); if (p === '/') p = '/index.html';
      const file = path.join(ROOT, p);
      if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); res.end(); return; }
      bytesServed += fs.statSync(file).size;
      res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] || 'application/octet-stream' }); fs.createReadStream(file).pipe(res);
    });
    srv.listen(0, '127.0.0.1', () => resolve(srv));
  });
}
async function newPage(browser, w, h, url, touch, storageState) {
  const context = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1, hasTouch: touch, isMobile: touch, storageState });
  const page = await context.newPage();
  page.on('console', (m) => { if (m.type() === 'error') report.consoleErrors.push(`[${w}x${h}] ` + m.text().slice(0, 300)); });
  page.on('pageerror', (e) => report.pageErrors.push(`[${w}x${h}] ` + e.message.slice(0, 300)));
  page.on('request', (r) => { const u = r.url(); if (!u.startsWith('http://127.0.0.1') && !u.startsWith('data:') && !u.startsWith('blob:')) report.externalRequests.push(u); });
  await page.goto(url);
  await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 90000 });
  return { context, page };
}
async function shot(page, name) { const f = path.join(OUT, name + '.png'); await page.screenshot({ path: f }); report.screenshots.push(name + '.png'); }
const st = (page) => page.evaluate(() => ({ state: __game.state, pos: __game.pos, cp: __game.cp, deaths: __game.deaths, falls: __game.falls, spikes: __game.spikes, finished: __game.finished, t: __game.t, runTime: __game.runTime, grounded: __game.grounded, anim: __game.anim }));
async function until(page, fn, arg, ms) { try { await page.waitForFunction(fn, arg, { timeout: ms, polling: 100 }); return true; } catch (e) { return false; } }

// CDP touch: a real finger on the screen
async function cdp(page) { return page.context().newCDPSession(page); }
async function touch(s, type, pts) { await s.send('Input.dispatchTouchEvent', { type, touchPoints: pts.map(([x, y, id]) => ({ x, y, id, radiusX: 8, radiusY: 8, force: 1 })) }); }

(async () => {
  const srv = await serve();
  const base = `http://127.0.0.1:${srv.address().port}/`;
  const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
  const total = fs.readdirSync(ROOT, { recursive: true }).map((f) => path.join(ROOT, f)).filter((f) => fs.statSync(f).isFile() && !f.endsWith('.md')).reduce((a, f) => a + fs.statSync(f).size, 0);
  check('total download < 5 MB', total < 5e6, (total / 1024).toFixed(0) + ' KB');
  report.numbers.totalKB = Math.round(total / 1024);

  // 1) layout at every size + the exit in view (intro first frame, and when play starts)
  for (const [name, w, h, t] of SIZES) {
    const { context, page } = await newPage(browser, w, h, base, t);
    await sleep(150);
    const ex0 = await page.evaluate(() => (() => { const e = __game.exitPos; return __game.project(e.x, e.y, e.z); })());
    if (name === 'phone-390x844' || name === 'desk-1280x720') await shot(page, name + '-0-intro');
    await until(page, () => __game.state === 'play', null, 20000);
    await sleep(400);
    const ex1 = await page.evaluate(() => (() => { const e = __game.exitPos; return __game.project(e.x, e.y, e.z); })());
    const inView = (e) => e.inFront && e.x > 0 && e.x < w && e.y > 0 && e.y < h;
    check(`${name}: exit on screen at first frame`, inView(ex0), `${ex0.x.toFixed(0)},${ex0.y.toFixed(0)}`);
    check(`${name}: exit on screen when play starts`, inView(ex1), `${ex1.x.toFixed(0)},${ex1.y.toFixed(0)}`);
    const boxes = await page.evaluate(() => Object.fromEntries(['bar', 'btn-hero', 'btn-sound', 'stick', 'jump', 'keys'].map((id) => {
      const el = document.getElementById(id); const r = el.getBoundingClientRect(); const cs = getComputedStyle(el);
      const vis = cs.display !== 'none' && cs.visibility !== 'hidden' && r.width > 0 && el.offsetParent !== null && !(id === 'keys' && document.body.classList.contains('touch'));
      return [id, { x: r.left, y: r.top, w: r.width, h: r.height, vis }];
    })));
    const shown = Object.entries(boxes).filter(([, b]) => b.vis);
    const outside = shown.filter(([, b]) => b.x < 0 || b.y < 0 || b.x + b.w > w + 0.5 || b.y + b.h > h + 0.5).map(([k]) => k);
    const over = [];
    for (let i = 0; i < shown.length; i++) for (let j = i + 1; j < shown.length; j++) {
      const [a, A] = shown[i], [b, B] = shown[j];
      if (A.x < B.x + B.w && B.x < A.x + A.w && A.y < B.y + B.h && B.y < A.y + A.h) over.push(a + '×' + b);
    }
    check(`${name}: HUD inside viewport, no overlap`, !outside.length && !over.length, `shown=${shown.map(([k]) => k).join(',')} out=[${outside}] overlap=[${over}]`);
    if (t) check(`${name}: joystick + jump shown on touch`, boxes.stick.vis && boxes.jump.vis);
    else check(`${name}: key hint shown on desktop`, boxes.keys.vis && !boxes.jump.vis);
    await shot(page, name + '-1-start');
    await context.close();
  }

  // 2) real CDP touch at 390×844 in real time: joystick up moves forward, jump lifts
  {
    const { context, page } = await newPage(browser, 390, 844, base + '?nointro', true);
    const s = await cdp(page);
    const z0 = (await st(page)).pos.z;
    const zr = await page.evaluate(() => { const r = document.getElementById('stick-zone').getBoundingClientRect(); return { x: r.left + 110, y: r.bottom - 120 }; });
    await touch(s, 'touchStart', [[zr.x, zr.y, 1]]);
    for (let i = 1; i <= 6; i++) { await touch(s, 'touchMove', [[zr.x, zr.y - i * 10, 1]]); await sleep(30); }
    await sleep(700);
    const mid = await st(page);
    await shot(page, 'touch-joystick-held');
    await touch(s, 'touchEnd', []);
    check('touch: joystick up moves the hero forward', mid.pos.z < z0 - 1.5, `z ${z0.toFixed(2)} → ${mid.pos.z.toFixed(2)}, anim ${mid.anim}`);
    const jb = await page.evaluate(() => { const r = document.getElementById('jump').getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 }; });
    await sleep(300);
    await touch(s, 'touchStart', [[jb.x, jb.y, 2]]);
    let maxY = 0; for (let i = 0; i < 8; i++) { await sleep(50); maxY = Math.max(maxY, (await st(page)).pos.y); }
    await touch(s, 'touchEnd', []);
    check('touch: jump button lifts the hero', maxY > 0.5, `peak y ${maxY.toFixed(2)}`);
    // two fingers at once: run + jump
    await touch(s, 'touchStart', [[zr.x, zr.y, 3]]); await touch(s, 'touchMove', [[zr.x + 2, zr.y - 60, 3]]); await sleep(150);
    await touch(s, 'touchStart', [[zr.x + 2, zr.y - 60, 3], [jb.x, jb.y, 4]]);
    let air = false; for (let i = 0; i < 8; i++) { await sleep(50); const q = await st(page); if (q.pos.y > 0.4) air = true; }
    await touch(s, 'touchEnd', []);
    check('touch: run + jump with two thumbs', air);
    await context.close();
  }

  // 3) desktop keys
  {
    const { context, page } = await newPage(browser, 1280, 720, base + '?nointro', false);
    const z0 = (await st(page)).pos.z;
    await page.keyboard.down('KeyW'); await until(page, (z) => __game.pos.z < z - 1.5, z0, 4000); const a = await st(page);
    await page.keyboard.down('Space'); let maxY = 0; for (let i = 0; i < 6; i++) { await sleep(60); maxY = Math.max(maxY, (await st(page)).pos.y); }
    await page.keyboard.up('Space'); await page.keyboard.up('KeyW');
    check('desktop: W moves forward', a.pos.z < z0 - 1.5, `z ${z0.toFixed(2)} → ${a.pos.z.toFixed(2)}`);
    check('desktop: Space jumps', maxY > 0.5, `peak y ${maxY.toFixed(2)}`);
    await context.close();
  }

  // 4) hazards (fixed 1/60 s steps: deterministic even when headless rendering is slow)
  {
    const { context, page } = await newPage(browser, 390, 844, base + '?nointro&dt=60', true);
    await page.addScriptTag({ content: AUTOPILOT });
    // walk straight into the first spike strip
    // the live puddle is behind-left of the start (camera yaw 0 → stick (−x, +z) walks south-west)
    await page.evaluate(() => __auto.stick(-0.55, 0.8));
    const hit = await until(page, () => __game.spikes >= 1, null, 30000);
    await page.evaluate(() => __auto.stick(0, 0));
    await sleep(200); await shot(page, 'hazard-spike-hit');
    const back = await until(page, () => __game.state === 'play', null, 10000);
    const s1 = await st(page);
    check('hazard: stepping in the live puddle counts a hit', hit, `spikes=${s1.spikes}`);
    check('hazard: hero is back on checkpoint 0 right away', back && Math.abs(s1.pos.z - 3.0) < 0.05 && Math.abs(s1.pos.x) < 0.05, JSON.stringify(s1.pos));
    await context.close();
  }

  // 5) full run with the autopilot (touch joystick + jump button), two phone sizes
  for (const [name, w, h] of [['phone-390x844', 390, 844], ['phone-360x640', 360, 640]]) {
    const { context, page } = await newPage(browser, w, h, base + '?nointro&dt=60', true);
    await page.addScriptTag({ content: AUTOPILOT });
    await page.evaluate(() => __auto.start());
    const shots = { 1: false, 2: false, pit: false, jumps: false };
    const t0 = Date.now(); let ok = false; let last = null;
    while (Date.now() - t0 < 600000) {
      last = await st(page);
      if (last.finished) { ok = true; break; }
      if (name === 'phone-390x844') {
        if (!shots.trap && last.pos.y > 3.4 && last.pos.z < -8 && last.pos.z > -10.4) { shots.trap = true; await shot(page, 'run-1-catwalk'); }
        if (!shots.pit && last.pos.y < -0.3 && last.pos.y > -0.8) { shots.pit = true; await shot(page, 'run-2-pallets'); }
        if (!shots.jumps && last.pos.z < -29.5 && last.pos.x > 10) { shots.jumps = true; await shot(page, 'run-3-yard'); }
        if (!shots.door && last.pos.z < -37.5 && last.pos.x > -3) { shots.door = true; await shot(page, 'run-4-door-opening'); }
      }
      await sleep(250);
    }
    const log = await page.evaluate(() => __auto.log);
    check(`${name}: autopilot reaches the exit (touch controls only)`, ok, `game time ${last.runTime.toFixed(1)} s, retries ${last.deaths} (falls ${last.falls}, spikes ${last.spikes}), wall ${(Date.now() - t0) / 1000 | 0} s`);
    report.numbers[name + '-run'] = { time: +last.runTime.toFixed(2), deaths: last.deaths, falls: last.falls, spikes: last.spikes, log };
    check(`${name}: all 4 checkpoints lit on the way`, last.cp === 3, `cp=${last.cp}`);
    if (ok) {
      await sleep(500); if (name === 'phone-390x844') await shot(page, 'run-5-escaped');
      const panel = await until(page, () => !document.getElementById('panel').classList.contains('hidden'), null, 20000);
      await sleep(400);
      await shot(page, name + '-finish');
      check(`${name}: finish panel shows the time`, panel && (await page.evaluate(() => document.getElementById('p-time').textContent)) !== '0:00.0');
      const btn = await page.evaluate(() => { const r = document.getElementById('btn-again').getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2, inside: r.bottom <= innerHeight && r.top >= 0 }; });
      check(`${name}: "Run again" button fully on screen`, btn.inside);
      await page.touchscreen.tap(btn.x, btn.y); await sleep(500);
      const r = await st(page);
      check(`${name}: "Run again" restarts at the start`, r.state === 'play' && Math.abs(r.pos.z - 3.0) < 0.1 && !r.finished && r.cp === 0, JSON.stringify({ s: r.state, z: r.pos.z, cp: r.cp }));
    }
    await context.close();
  }

  // 6) pit fall → back at the last checkpoint
  {
    const { context, page } = await newPage(browser, 390, 844, base + '?nointro&dt=60', true);
    await page.addScriptTag({ content: AUTOPILOT });
    await page.evaluate(() => __auto.start());
    await until(page, () => __game.cp >= 2, null, 300000);
    await page.evaluate(() => __auto.stop());
    const before = (await st(page)).falls;
    // from checkpoint 2 (laundry, east of the drain) walk west, slowly, straight into the drain water
    await page.evaluate(() => { const y = __game.camYaw, c = Math.cos(y), s = Math.sin(y); __auto.stick((-1 * c) * 0.35, (-1 * s) * 0.35); });
    const fell = await until(page, (b) => __game.falls > b, before, 30000);
    await page.evaluate(() => __auto.stick(0, 0));
    await sleep(200); await shot(page, 'hazard-fall');
    await until(page, () => __game.state === 'play', null, 10000);
    const s = await st(page);
    check('drain: falling in the water counts a fall', fell, `falls=${s.falls}`);
    check('drain: hero is back on checkpoint 2', fell && Math.abs(s.pos.z + 21.6) < 0.3 && Math.abs(s.pos.x - 19.6) < 0.3 && s.cp === 2, JSON.stringify(s.pos));
    await context.close();
  }

  // 6b) character picker: default is the pup; choose the kitty by tapping; it moves; the choice survives reload
  {
    const { context, page } = await newPage(browser, 390, 844, base + '?nointro', true);
    check('picker: default hero is the pup', (await page.evaluate(() => __game.hero)) === 'dog');
    await page.tap('#btn-hero'); await sleep(300);
    const tiles = await page.evaluate(() => [...document.querySelectorAll('.pick')].map((b) => { const r = b.getBoundingClientRect(); const img = b.querySelector('img'); return { h: b.dataset.hero, inside: r.left >= 0 && r.right <= innerWidth && r.top >= 0 && r.bottom <= innerHeight, img: img.complete && img.naturalWidth > 0 }; }));
    await shot(page, 'picker-open');
    check('picker: 3 portraits, all on screen', tiles.length === 3 && tiles.every((t) => t.inside && t.img), JSON.stringify(tiles));
    await page.tap('.pick[data-hero="cat"]'); await sleep(300);
    check('picker: tapping Kitty swaps the hero and closes the sheet', (await page.evaluate(() => __game.hero)) === 'cat' && (await page.evaluate(() => document.getElementById('pick').classList.contains('hidden'))));
    const z0 = (await st(page)).pos.z; await page.keyboard.down('KeyW');
    const ran = await until(page, (z) => __game.pos.z < z - 1, z0, 5000); await page.keyboard.up('KeyW');
    check('picker: the new hero runs', ran, `z ${z0.toFixed(2)} → ${(await st(page)).pos.z.toFixed(2)}`);
    await page.reload(); await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 90000 });
    check('picker: choice survives reload', (await page.evaluate(() => __game.hero)) === 'cat');
    await context.close();
  }

  // 7) mute survives reload
  {
    const { context, page } = await newPage(browser, 390, 844, base + '?nointro', true);
    await page.tap('#btn-sound'); await sleep(200);
    await page.reload(); await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 90000 });
    check('sound: mute survives reload', await page.evaluate(() => document.getElementById('btn-sound').classList.contains('off')));
    await context.close();
  }

  // 8) frame timing in real time (software WebGL here — a phone GPU is much faster; JS cost per frame is the useful number)
  {
    const { context, page } = await newPage(browser, 390, 844, base + '?nointro', true);
    await page.keyboard.down('KeyW'); await sleep(3000); await page.keyboard.up('KeyW');
    const f = await page.evaluate(() => { const fr = __game.frames().slice(-120); const cpu = []; return { avgMs: fr.reduce((a, b) => a + b, 0) / fr.length * 1000, calls: __game.calls(), tris: __game.tris(), cpu: __game.cpu(), pr: __game.pixelRatio }; });
    report.numbers.frame = f;
    check('frame: measured (headless software renderer)', true, `avg ${f.avgMs.toFixed(1)} ms/frame (${(1000 / f.avgMs).toFixed(0)} fps in SwiftShader), last frame CPU+submit ${f.cpu.toFixed(1)} ms, draw calls ${f.calls}, triangles ${f.tris}`);
    check('frame: draw calls ≤ 150', f.calls <= 150, f.calls);
    await context.close();
  }

  check('console errors = 0', report.consoleErrors.length === 0, report.consoleErrors.slice(0, 5).join(' | '));
  check('page errors = 0', report.pageErrors.length === 0, report.pageErrors.slice(0, 5).join(' | '));
  check('no external requests', report.externalRequests.length === 0, report.externalRequests.slice(0, 3).join(' '));
  report.finishedAt = new Date().toISOString();
  report.pass = report.checks.filter((c) => c.ok).length; report.fail = report.checks.filter((c) => !c.ok).length;
  fs.writeFileSync(path.join(OUT, 'report.json'), JSON.stringify(report, null, 2));
  console.log(`\n${report.pass}/${report.checks.length} passed`);
  await browser.close(); srv.close();
  process.exit(report.fail ? 1 : 0);
})();
