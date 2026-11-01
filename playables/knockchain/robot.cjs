#!/usr/bin/env node
// Knock Chain — headless play robot (stage 2 core test). Serves docs/knockchain over local http and plays it in
// Chromium (WebGL via SwiftShader). Writes screenshots + qa/report.json. Run: NODE_PATH=/opt/node-tools/node_modules node playables/knockchain/robot.cjs
//   checks: console errors 0, no external requests, HUD inside the viewport and not overlapping at 14 sizes,
//           every level cleared by a REAL touch drag (the solver's launch vector replayed as a finger pull),
//           same shot twice → identical physics fingerprint (determinism), 3 misses → no game over (hint changes),
//           pause/resume, mute persists across reload, progress (level) persists across reload.
'use strict';
const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const ROOT = path.resolve(__dirname, '..', '..', 'docs', 'knockchain');
const OUT = process.argv[2] || path.join(__dirname, 'qa');
fs.mkdirSync(OUT, { recursive: true });
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.ogg': 'audio/ogg', '.mp3': 'audio/mpeg', '.png': 'image/png', '.md': 'text/markdown', '.glb': 'model/gltf-binary' };
const CHROME = process.env.CHROME || '/opt/pw-browsers/chromium-1243/chrome-linux64/chrome';

const SIZES = [
  ['phone-360x640', 360, 640], ['phone-390x844', 390, 844], ['phone-430x932', 430, 932],
  ['land-844x390', 844, 390], ['land-915x412', 915, 412],
  ['tablet-768x1024', 768, 1024], ['tablet-1024x768', 1024, 768],
  ['square-640x640', 640, 640],
  ['iframe-800x450', 800, 450], ['iframe-1280x720', 1280, 720],
  ['desk-1366x768', 1366, 768], ['desk-1920x1080', 1920, 1080],
  ['tall-9x21-390x910', 390, 910], ['wide-21x9-910x390', 910, 390],
];

const report = { startedAt: new Date().toISOString(), consoleErrors: [], pageErrors: [], externalRequests: [], checks: [], screenshots: [] };
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
  const context = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1, hasTouch: !!opts.touch, isMobile: !!opts.touch, storageState: opts.storageState });
  const page = await context.newPage();
  page.on('console', (m) => { if (m.type() === 'error') report.consoleErrors.push(`[${w}x${h}] ` + m.text().slice(0, 300)); });
  page.on('pageerror', (e) => report.pageErrors.push(`[${w}x${h}] ` + e.message.slice(0, 300)));
  page.on('request', (r) => { const u = r.url(); if (!u.startsWith('http://127.0.0.1') && !u.startsWith('data:') && !u.startsWith('blob:')) report.externalRequests.push(u); });
  await page.goto(url);
  await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 90000 });
  await sleep(300);
  return { context, page };
}
async function shot(page, name) { const f = path.join(OUT, name + '.png'); await page.screenshot({ path: f }); report.screenshots.push(name + '.png'); }

// a real finger pull: touchStart → N touchMoves → touchEnd through CDP (Playwright's touchscreen only taps)
async function drag(page, from, to, steps = 12) {
  const cdp = await page.context().newCDPSession(page);
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: from.x, y: from.y }] });
  for (let i = 1; i <= steps; i++) { const t = i / steps; await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: from.x + (to.x - from.x) * t, y: from.y + (to.y - from.y) * t }] }); await sleep(16); }
  await sleep(120);
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
  await cdp.detach();
}
async function pullFor(page, sol) { // world launch vector → screen drag (start near the lower-left, pull down-left)
  const u = await page.evaluate(() => KC.pxPerUnit());
  const vp = page.viewportSize();
  const from = { x: vp.width * 0.42, y: vp.height * 0.5 };
  return { from, to: { x: from.x - sol.dx * u.x, y: from.y + sol.dy * u.y } };
}
async function waitState(page, states, ms) { try { await page.waitForFunction((s) => s.includes(KC.state), states, { timeout: ms }); return true; } catch (e) { return false; } }

(async () => {
  const srv = await serve(); const base = `http://127.0.0.1:${srv.address().port}/`;
  const browser = await chromium.launch({ executablePath: CHROME, args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--autoplay-policy=no-user-gesture-required'] });
  const levels = JSON.parse(fs.readFileSync(path.join(__dirname, 'qa', 'solutions.json'), 'utf8'));

  // ---- 1. layout at 14 sizes ----
  for (const [name, w, h] of SIZES) {
    const { context, page } = await newPage(browser, w, h, base);
    const r = await page.evaluate(() => {
      const vw = innerWidth, vh = innerHeight, out = { inside: [], overlap: [], mode: document.body.dataset.mode };
      const els = ['#search', '#level', '.btns', '.goal', '.hint', '.motto'].map((s) => [s, document.querySelector(s).getBoundingClientRect()]);
      for (const [s, b] of els) if (b.left < 0 || b.top < 0 || b.right > vw + 0.5 || b.bottom > vh + 0.5) out.inside.push(s);
      for (let i = 0; i < els.length; i++) for (let j = i + 1; j < els.length; j++) { const a = els[i][1], b = els[j][1]; if (a.left < b.right - 2 && b.left < a.right - 2 && a.top < b.bottom - 2 && b.top < a.bottom - 2) out.overlap.push(els[i][0] + '~' + els[j][0]); }
      const c = document.querySelector('#app canvas').getBoundingClientRect(); out.canvas = Math.round(c.width) === vw && Math.round(c.height) === vh;
      return out;
    });
    check(`layout ${name} (${r.mode})`, r.inside.length === 0 && r.overlap.length === 0 && r.canvas, (r.inside.length ? 'outside: ' + r.inside.join(',') : '') + (r.overlap.length ? ' overlap: ' + r.overlap.join(',') : '') + (r.canvas ? '' : ' canvas not full'));
    await shot(page, 'layout-' + name);
    await context.close();
  }

  // ---- 2. clear every level with a real touch drag ----
  const { context, page } = await newPage(browser, 390, 844, base, { touch: true });
  for (let i = 0; i < levels.length; i++) {
    await page.evaluate((i) => KC.start(i), i);
    await waitState(page, ['aim'], 20000); await sleep(300);
    await shot(page, `level${i + 1}-aim`);
    const d = await pullFor(page, levels[i]);
    await drag(page, d.from, d.to);
    await sleep(250); await shot(page, `level${i + 1}-flight`);
    const won = await waitState(page, ['won'], 15000);
    check(`level ${i + 1} cleared by touch drag`, won, `pull ${JSON.stringify(levels[i])} state=${await page.evaluate(() => KC.state)}`);
    await sleep(1700); await shot(page, `level${i + 1}-won`);
    const panelText = await page.evaluate(() => document.querySelector('#panel-title').textContent);
    check(`level ${i + 1} end panel`, /Found|Love conquers all/.test(panelText), panelText);
  }
  // ---- 3. determinism: same shot twice → same fingerprint ----
  const hashes = [];
  for (let k = 0; k < 2; k++) {
    await page.evaluate(() => KC.start(0)); await waitState(page, ['aim'], 20000); await sleep(200);
    await page.evaluate((s) => KC.shoot(s.dx, s.dy), { dx: 0.5, dy: 0.3 }); // a deliberate miss, so bodies move and settle
    await page.waitForFunction(() => KC.state === 'aim' && KC.settled(), null, { timeout: 20000 }).catch(() => {});
    hashes.push(await page.evaluate(() => KC.hash()));
  }
  check('determinism (same shot twice → same state)', hashes[0] === hashes[1], hashes.join(' vs '));
  // ---- 4. no game over: three misses → still aiming, hint changed, no panel ----
  await page.evaluate(() => KC.start(0)); await waitState(page, ['aim'], 20000);
  for (let k = 0; k < 3; k++) { await page.evaluate(() => KC.shoot(0.35, 0.12)); await page.waitForFunction((k) => KC.state === 'aim' && KC.misses === k + 1, k, { timeout: 25000 }).catch(() => {}); }
  const miss = await page.evaluate(() => ({ state: KC.state, misses: KC.misses, throws: KC.throws, hint: document.querySelector('#hint').textContent, panelHidden: document.querySelector('#panel').classList.contains('hidden'), search: document.querySelector('#search').textContent }));
  check('no game over: 3 misses → still aiming, hint changes, no panel', miss.state === 'aim' && miss.misses === 3 && miss.throws === 3 && miss.panelHidden && miss.hint !== 'Pull to aim' && /Still searching/.test(miss.search), JSON.stringify(miss));
  await shot(page, 'after-3-misses');
  // ---- 5. pause / resume ----
  await page.click('#btn-pause'); await sleep(200);
  check('pause shows panel', await page.evaluate(() => KC.state === 'paused' && !document.querySelector('#panel').classList.contains('hidden')));
  await shot(page, 'paused');
  await page.click('#panel-btns button'); await sleep(200);
  check('resume', await page.evaluate(() => KC.state === 'aim'));
  // ---- 6. mute + progress persist across reload ----
  await page.click('#btn-sound'); await sleep(100);
  await page.evaluate(() => KC.start(1)); await waitState(page, ['aim'], 20000);
  await page.reload(); await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 90000 }); await sleep(300);
  check('mute persists after reload', await page.evaluate(() => document.querySelector('#btn-sound').classList.contains('off')));
  check('level progress persists after reload', await page.evaluate(() => KC.level === 2), await page.evaluate(() => KC.level));
  await context.close();

  check('console errors = 0', report.consoleErrors.length === 0, report.consoleErrors.slice(0, 5).join(' | '));
  check('page errors = 0', report.pageErrors.length === 0, report.pageErrors.slice(0, 5).join(' | '));
  check('external requests = 0', report.externalRequests.length === 0, [...new Set(report.externalRequests)].slice(0, 5).join(' '));
  await browser.close(); srv.close();
  const pass = report.checks.filter((c) => c.ok).length;
  report.summary = `${pass}/${report.checks.length} passed`; report.finishedAt = new Date().toISOString();
  fs.writeFileSync(path.join(OUT, 'report.json'), JSON.stringify(report, null, 2));
  console.log('\n' + report.summary);
  process.exit(pass === report.checks.length ? 0 : 1);
})().catch((e) => { console.error(e); process.exit(1); });
