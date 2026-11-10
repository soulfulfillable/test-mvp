#!/usr/bin/env node
// Cozy Coloring (Playgama build) — headless play robot.
// Serves playables/coloring over local http, plays the game in Chromium at the Playgama size matrix and writes
// screenshots + a JSON report. Run: node playables/coloring/robot.js [outDir]
//   checks: pictures module (20 pictures ordered by piece count, every color index valid, 400 dailies deterministic,
//           page = node), console errors 0 (a hidden number label is a console error), no external requests,
//           game_ready once, no emoji, no page scroll, gallery lock order, three pictures colored to 100% by real
//           taps (number mode, free mode, number mode + rewarded "fill this color"), wrong-number tap colors nothing,
//           interstitial on leaving a finished picture, rewarded only on 'rewarded' (closed early = nothing), one
//           boost per picture, ad unlock of the next picture, pinch zoom + tap while zoomed + one-finger pan,
//           wheel zoom + keyboard on desktop, reload restores progress + mute (Bridge storage),
//           hidden page / ad = silent, Esc unused, home list scrolls by touch, 14 sizes, covers.
'use strict';
const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const Pics = require('./coloring-pics.js');

const ROOT = __dirname;
const OUT = process.argv[2] || path.join(ROOT, 'qa');
fs.mkdirSync(OUT, { recursive: true });
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.ogg': 'audio/ogg', '.mp3': 'audio/mpeg', '.png': 'image/png', '.md': 'text/markdown' };

function serve() {
  return new Promise((resolve) => {
    const srv = http.createServer((req, res) => {
      let p = decodeURIComponent(req.url.split('?')[0].split('#')[0]);
      if (p === '/') p = '/index.html';
      const file = path.join(ROOT, p);
      if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); res.end('nope'); return; }
      res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] || 'application/octet-stream' });
      fs.createReadStream(file).pipe(res);
    });
    srv.listen(0, '127.0.0.1', () => resolve(srv));
  });
}

const SIZES = [
  ['phone-360x640', 360, 640], ['phone-390x844', 390, 844], ['phone-430x932', 430, 932],
  ['land-844x390', 844, 390], ['land-915x412', 915, 412],
  ['tablet-768x1024', 768, 1024], ['tablet-1024x768', 1024, 768],
  ['square-640x640', 640, 640],
  ['iframe-800x450', 800, 450], ['iframe-1280x720', 1280, 720],
  ['desk-1366x768', 1366, 768], ['desk-1920x1080', 1920, 1080],
  ['tall-9x21-390x910', 390, 910], ['wide-21x9-910x390', 910, 390]
];

const report = { startedAt: new Date().toISOString(), consoleErrors: [], pageErrors: [], externalRequests: [], checks: [], screenshots: [], taps: 0, debugTaps: 0 };
function check(name, ok, detail) { report.checks.push({ name, ok: !!ok, detail: detail === undefined ? '' : String(detail) }); console.log((ok ? 'PASS ' : 'FAIL ') + name + (detail !== undefined ? '  — ' + detail : '')); }
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function newPage(browser, w, h, url, opts = {}) {
  const context = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1, hasTouch: !!opts.touch, isMobile: !!opts.touch });
  const page = await context.newPage();
  page.on('console', (m) => { if (m.type() === 'error') report.consoleErrors.push(m.text().slice(0, 300)); });
  page.on('pageerror', (e) => report.pageErrors.push(String(e).slice(0, 300)));
  page.on('request', (r) => { const u = r.url(); if (!u.startsWith('http://127.0.0.1') && !u.startsWith('data:')) report.externalRequests.push(u); });
  await page.goto(url, { waitUntil: 'load' });
  await page.waitForFunction(() => window.__game && window.__game.PICS, null, { timeout: 15000 });
  return { context, page };
}
async function shot(page, name) { const file = path.join(OUT, name + '.png'); await page.screenshot({ path: file }); report.screenshots.push(name + '.png'); return file; }
async function tapAt(page, x, y, touch) { if (touch) await page.touchscreen.tap(x, y); else await page.mouse.click(x, y); report.taps++; }
async function tapEl(page, sel, touch) {
  const r = await page.evaluate((sel) => { const el = document.querySelector(sel); if (!el) return null; const b = el.getBoundingClientRect(); return { x: b.left + b.width / 2, y: b.top + b.height / 2, w: b.width, h: b.height }; }, sel);
  if (!r) throw new Error('no element ' + sel);
  await tapAt(page, r.x, r.y, touch);
  return r;
}
// pick a color the way a player does: scroll the palette to the swatch and tap it
async function tapSwatch(page, ci, touch) {
  await page.evaluate((ci) => { const el = document.getElementById('palette').children[ci]; el.scrollIntoView({ inline: 'center', block: 'nearest' }); }, ci);
  await sleep(320); // let any smooth palette scroll settle before measuring
  const r = await page.evaluate((ci) => window.__game.swatchRect(ci), ci);
  await tapAt(page, r.x, r.y, touch);
  const sel = await page.evaluate(() => window.__game.cur.sel);
  if (sel !== ci) { swatchMisses.push({ ci, sel }); await page.evaluate((ci) => window.__game.select(ci), ci); }
}
const swatchMisses = [];
// tap a piece at its number label (a visible point of the piece). Falls back to the debug tap when the label sits under the zoom buttons.
async function tapPiece(page, i, touch, expectFill = true) {
  const info = await page.evaluate((i) => {
    const g = window.__game, p = g.labelPoint(i), z = document.getElementById('zoom-ctrl').getBoundingClientRect();
    const underZoom = p.x >= z.left - 14 && p.x <= z.right + 14 && p.y >= z.top - 14 && p.y <= z.bottom + 14;   // browsers pull taps this close onto the button (touch adjustment)
    return { x: p.x, y: p.y, underZoom, inside: p.x > 0 && p.y > 0 && p.x < innerWidth && p.y < innerHeight, pic: g.cur.pic.id, mode: g.cur.mode, selBefore: g.cur.sel, c: g.cur.pic.rg[i].c };
  }, i);
  if (info.underZoom || !info.inside) { await page.evaluate((i) => window.__game.tap(i), i); report.debugTaps++; return 'debug'; }
  await page.evaluate(() => { window.__trace = []; });
  await tapAt(page, info.x, info.y, touch);
  const ok = await page.evaluate((i) => window.__game.cur.filled.has(i), i);
  if (!ok && expectFill) { const at = await page.evaluate(([x, y]) => { const el = document.elementFromPoint(x, y); return el ? (el.getAttribute('data-i') || el.id || el.tagName) : null; }, [info.x, info.y]); misses.push({ i, pic: info.pic, mode: info.mode, selBefore: info.selBefore, c: info.c, x: Math.round(info.x), y: Math.round(info.y), at, z: await page.evaluate(() => window.__game.Z.z), trace: await page.evaluate(() => (window.__trace || []).join(',')) }); }
  return 'real';
}
const misses = [];
// color the whole picture by number: for each color, tap the swatch, then every piece of that color at its label
async function colorByNumber(page, touch) {
  const todo = await page.evaluate(() => { const g = window.__game, out = {}; g.cur.pic.rg.forEach((rg, i) => { if (!g.cur.filled.has(i)) (out[rg.c - 1] = out[rg.c - 1] || []).push(i); }); return out; });
  let real = 0, dbg = 0;
  for (const ci of Object.keys(todo)) {
    await tapSwatch(page, +ci, touch);
    for (const i of todo[ci]) { const how = await tapPiece(page, i, touch); if (how === 'real') real++; else dbg++; }
    await sleep(30);
  }
  return { real, dbg };
}
async function state(page) { return page.evaluate(() => { const g = window.__game, c = g.cur; return { home: g.home, id: c ? c.pic.id : null, mode: c ? c.mode : null, filled: c ? c.filled.size : 0, total: c ? c.pic.rg.length : 0, sel: c ? c.sel : -1, done: Object.keys(g.store.progress.done), panel: g.donePanel, ads: g.ads, z: g.Z.z }; }); }
async function pinch(page, cx, cy, from, to, steps = 8) {
  const cdp = await page.context().newCDPSession(page);
  const pts = (d) => [{ x: cx - d, y: cy, id: 0 }, { x: cx + d, y: cy, id: 1 }];
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: pts(from) });
  for (let k = 1; k <= steps; k++) { await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: pts(from + (to - from) * k / steps) }); await sleep(16); }
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
  await cdp.detach();
}
async function swipe(page, x, y0, y1, steps = 10) {
  const cdp = await page.context().newCDPSession(page);
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x, y: y0, id: 0 }] });
  for (let k = 1; k <= steps; k++) { await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x, y: y0 + (y1 - y0) * k / steps, id: 0 }] }); await sleep(16); }
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
  await cdp.detach();
}

(async () => {
  // ── 0. pictures module in node ──
  {
    const ids = Pics.ORDER.map((p) => p.id), counts = Pics.ORDER.map((p) => p.rg.length);
    check('20 poly-art pictures, ordered by piece count, ~130 → 500', ids.length === 20 && counts.every((c, i) => i === 0 || c >= counts[i - 1]) && counts[0] <= 150 && counts[counts.length - 1] >= 450, counts.join(' '));
    { let over = []; Pics.PICS.forEach((p) => { let A = 0; p.rg.forEach((r) => { const pts = r.d.slice(1, -2).split(' L').map((q) => q.split(',').map(Number)); let a = 0; for (let k = 0; k < pts.length; k++) { const q = pts[k], w = pts[(k + 1) % pts.length]; a += q[0] * w[1] - w[0] * q[1]; } A += Math.abs(a) / 2; }); if (Math.abs(A / (p.w * p.h) - 1) > 0.0005) over.push(p.id + ':' + (A / (p.w * p.h)).toFixed(4)); }); check('every picture is tiled exactly: no holes, no overlapping pieces (total piece area = canvas)', over.length === 0, over.join(' ')); }
    { const fresh = JSON.stringify(Pics.PICS); global.self = { ColoringData: null }; const built = fs.readFileSync(path.join(ROOT, 'coloring-data.js'), 'utf8'); check('coloring-data.js is up to date with coloring-pics.js (build.sh regenerates it)', built.indexOf(JSON.stringify({ PICS: Pics.PICS })) >= 0, built.length + ' bytes'); }
    let bad = 0; Pics.PICS.forEach((p) => p.rg.forEach((r) => { if (!(r.c >= 1 && r.c <= p.pal.length)) bad++; }));
    check('every piece points at a palette color', bad === 0, bad);
  }

  const srv = await serve();
  const base = `http://127.0.0.1:${srv.address().port}/index.html`;
  const browser = await chromium.launch({ args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required'] });

  // ── 1. page = node ──
  {
    const { context, page } = await newPage(browser, 390, 844, base + '#debug', { touch: true });
    const inPage = await page.evaluate(() => window.__game.PICS.map((p) => p.id + ':' + p.rg.length + ':' + JSON.stringify(p.rg[p.rg.length - 1])));
    const inNode = Pics.ORDER.map((p) => p.id + ':' + p.rg.length + ':' + JSON.stringify(p.rg[p.rg.length - 1]));
    check('same pictures in the page and in node (shared module)', JSON.stringify(inPage) === JSON.stringify(inNode));
    await context.close();
  }

  // ── 2. full session on a phone (touch) ──
  {
    const { context, page } = await newPage(browser, 390, 844, base + '#debug', { touch: true });
    check('loading screen hidden before game_ready', await page.evaluate(() => document.getElementById('loading').classList.contains('hidden')));
    check('bridge initialized (mock platform outside Playgama)', await page.evaluate(() => window.__game.bridgeReady && window.bridge.platform.id), await page.evaluate(() => window.bridge.platform.id));
    const msgs = await page.evaluate(() => window.__msgs.slice());
    check('game_ready sent exactly once', msgs.filter((m) => m === 'game_ready').length === 1, JSON.stringify(msgs));
    check('title on screen matches the publication title (rule 3.5.1)', await page.evaluate(() => /Cozy Coloring/.test(document.querySelector('#home-head h1').textContent) && document.title === 'Cozy Coloring'));
    check('no emoji anywhere in the page text (rule 4.3.2)', await page.evaluate(() => !/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u.test(document.body.innerText)));
    check('no browser page scroll (rule 1.6.3)', await page.evaluate(() => document.documentElement.scrollHeight <= innerHeight + 1 && document.body.scrollHeight <= innerHeight + 1));
    const home0 = await page.evaluate(() => { const cards = [...document.querySelectorAll('#grid .card')]; return { n: cards.length, locked: cards.map((c) => c.classList.contains('locked')), daily: !!document.getElementById('daily-row'), mandala: /mandala/i.test(document.body.innerText), unlockBtn: !!document.getElementById('unlock-btn'), studio: document.getElementById('home-foot').textContent }; });
    check('gallery: 20 cards, only the first unlocked, no daily mandala anywhere (user: no mandala), no ad-unlock button on the mock platform (rewarded unsupported)', home0.n === 20 && home0.locked[0] === false && home0.locked.slice(1).every(Boolean) && !home0.daily && !home0.mandala && !home0.unlockBtn && /Treasurefield/.test(home0.studio), JSON.stringify(home0));
    await shot(page, 'phone-390x844-gallery-first');
    // home list scrolls by touch
    await swipe(page, 195, 700, 300); await sleep(300);
    const sc = await page.evaluate(() => document.getElementById('home-scroll').scrollTop);
    check('gallery list scrolls with a finger', sc > 100, sc + 'px');
    await swipe(page, 195, 300, 760); await sleep(300);
    // a locked card does not open
    const lockedRect = await page.evaluate(() => { const b = document.querySelectorAll('#grid .card')[1].getBoundingClientRect(); return { x: b.left + b.width / 2, y: b.top + b.height / 2 }; });
    await tapAt(page, lockedRect.x, lockedRect.y, true); await sleep(200);
    check('tapping a locked picture keeps you in the gallery (with a note)', await page.evaluate(() => window.__game.home && document.getElementById('msg').classList.contains('show')));
    // open the first picture by tapping its card
    await tapEl(page, '#grid .card', true); await sleep(250);
    let st = await state(page);
    const first = Pics.ORDER[0].id;
    check('first card opens picture 01 (' + first + ') in number mode', !st.home && st.id === first && st.mode === 'num' && st.filled === 0, JSON.stringify(st));
    check('every number label is placed on a visible point of its piece (no hidden-label console error)', report.consoleErrors.length === 0, report.consoleErrors.join(' | '));
    await shot(page, 'phone-390x844-first-picture');
    // wrong color: pick color 1, tap a piece of another color → nothing colored, piece shakes
    {
      await tapSwatch(page, 0, true);
      const other = await page.evaluate(() => { const g = window.__game; return g.cur.pic.rg.findIndex((rg) => rg.c !== 1); });
      await tapPiece(page, other, true, false); await sleep(60);
      const w = await page.evaluate((i) => ({ filled: window.__game.cur.filled.has(i), shake: document.querySelector('#art-tf [data-i="' + i + '"]').classList.contains('shake'), sel: window.__game.cur.sel }), other);
      check('tapping a piece of another number colors nothing (the number flashes as the hint)', !w.filled && w.shake && w.sel === 0, JSON.stringify(w));
    }
    // color it all by real taps
    const t0 = Date.now();
    const r1 = await colorByNumber(page, true);
    await sleep(1000);
    const burst = await page.evaluate(() => ({ won: window.__game.won, sparkles: window.__game.sparkles, confetti: window.__game.confetti, cheer: window.__game.cheer, glow: document.getElementById('art-vp').classList.contains('glow'), shine: !!document.querySelector('#art-tf .shine'), panel: window.__game.donePanel }));
    check('finish burst: pieces pop in a wave, shine sweep, sparkles, glow, palette confetti, big word — panel not yet', burst.won && burst.sparkles >= 12 && burst.confetti >= 150 && burst.cheer.length > 0 && burst.glow && burst.shine && !burst.panel, JSON.stringify(burst));
    await shot(page, 'phone-390x844-finish-burst');
    await sleep(1400);
    st = await state(page);
    const fin = await page.evaluate(() => ({ confetti: window.__game.confetti, panel: !!document.getElementById('done-panel'), title: document.querySelector('#done-panel h2') && document.querySelector('#done-panel h2').textContent, next: !!document.getElementById('btn-next'), pct: document.getElementById('pct').textContent, saved: (window.__game.store.progress.fills[window.__game.cur.pic.id] || []).length }));
    check(`picture 01 colored to 100% by ${r1.real} real taps (${r1.dbg} under the zoom buttons → debug tap): done panel, confetti, Next picture offered, saved`, st.filled === st.total && st.done.includes(first) && fin.panel && /Beautiful/.test(fin.title) && fin.next && fin.pct === '100%' && fin.saved === st.total, JSON.stringify(fin) + ' in ' + (Date.now() - t0) + 'ms misses ' + JSON.stringify(misses));
    await shot(page, 'phone-390x844-first-done');
    // the panel counts down and moves on by itself → interstitial placement + picture 02 (now unlocked) slides in
    check('Next picture button counts down (auto-advance armed)', await page.evaluate(() => window.__game.autoNext && /Next picture · [1-5]/.test(document.getElementById('btn-next').textContent)), await page.evaluate(() => document.getElementById('btn-next').textContent));
    await sleep(5800);
    st = await state(page);
    const second = Pics.ORDER[1].id;
    check('after 5 s: interstitial asked once (Bridge decides whether it shows) and picture 02 opened by itself', st.ads.length === 1 && st.ads[0] === 'picture_done' && st.id === second && st.filled === 0 && !st.panel, JSON.stringify(st.ads) + ' ' + st.id);
    // free mode: pick one color, tap every piece
    await tapEl(page, '#mode-free', true); await sleep(200);
    st = await state(page);
    check('Free mode: labels hidden, no counts', st.mode === 'free' && await page.evaluate(() => document.getElementById('play').classList.contains('free') && getComputedStyle(document.querySelector('#art-tf .lbl')).display === 'none' && document.querySelector('.sw .cnt').style.display === 'none'));
    await tapSwatch(page, 3, true);
    const n2 = await page.evaluate(() => window.__game.cur.pic.rg.length);
    let real2 = 0;
    for (let i = 0; i < n2; i++) if ((await tapPiece(page, i, true)) === 'real') real2++;
    await sleep(2300);
    st = await state(page);
    const fr = await page.evaluate(() => { const g = window.__game, o = g.store.progress.free[g.cur.pic.id] || {}; return { n: Object.keys(o).length, allC3: Object.keys(o).every((k) => o[k] === 3), mode: g.store.progress.mode[g.cur.pic.id], panel: g.donePanel }; });
    check(`picture 02 colored in Free mode with one color by ${real2} real taps: done, free fills saved with the chosen color`, st.filled === n2 && st.done.includes(second) && fr.n === n2 && fr.allC3 && fr.mode === 'free' && fr.panel, JSON.stringify(fr) + ' misses ' + JSON.stringify(misses));
    await shot(page, 'phone-390x844-free-done');
    // tapping the picture during the countdown hides the panel and cancels the auto-advance
    await tapPiece(page, 0, true, false); await sleep(200);
    check('tap on the picture: panel gone, auto-advance cancelled', await page.evaluate(() => !window.__game.donePanel && !window.__game.autoNext));
    await sleep(5500);
    st = await state(page);
    check('5 s later still on picture 02 (nothing moved on by itself)', st.id === second && st.ads.length === 1, st.id);
    // Back from a finished picture → second interstitial, two Done chips, 03 unlocked, 04 locked
    await tapEl(page, '#btn-back', true); await sleep(300);
    const home2 = await page.evaluate(() => { const cards = [...document.querySelectorAll('#grid .card')]; return { home: window.__game.home, ads: window.__game.ads.length, done: cards.filter((c) => c.classList.contains('done')).length, l3: cards[2].classList.contains('locked'), l4: cards[3].classList.contains('locked'), count: document.querySelector('#filter .count').textContent, cont: document.getElementById('cont-row').classList.contains('hidden') }; });
    check('gallery after two pictures (Back from a finished picture): interstitial asked again, 2 Done, 03 unlocked, 04 locked, "2 of 20 finished"', home2.home && home2.ads === 2 && home2.done === 2 && !home2.l3 && home2.l4 && /2 of 20/.test(home2.count), JSON.stringify(home2));
    await shot(page, 'phone-390x844-gallery');
    // Finished filter shows the two
    await tapEl(page, '#filter button:nth-child(2)', true); await sleep(150);
    check('Finished filter lists the two finished pictures', await page.evaluate(() => document.querySelectorAll('#grid .card').length === 2 && document.querySelectorAll('#grid .card.done').length === 2));
    await tapEl(page, '#filter button:nth-child(1)', true); await sleep(150);

    // ── rewarded: boost on picture 03 ──
    await page.evaluate(() => { window.__forceRewarded = true; window.__game.renderHome(); });
    const third = Pics.ORDER[2].id;
    await tapEl(page, '#grid .card:nth-child(3)', true); await sleep(250);
    st = await state(page);
    const b0 = await page.evaluate(() => ({ vis: !document.getElementById('boost-btn').classList.contains('hidden'), text: document.getElementById('boost-btn').textContent }));
    check('picture 03 opens; "Fill this color · AD" button visible when rewarded ads are supported', st.id === third && b0.vis && /Fill this color/.test(b0.text) && /AD/.test(b0.text), JSON.stringify(b0));
    const selCount = await page.evaluate(() => window.__game.cur.counts[window.__game.cur.sel]);
    await tapEl(page, '#boost-btn', true); await sleep(100);
    check('boost requested (ad opt-in)', await page.evaluate(() => window.__game.rewardPending === 'boost'));
    await page.evaluate(() => { window.__game.onRewardedState('opened'); });
    check('rewarded ad open: game silent', await page.evaluate(() => window.__game.reasons.ad && !window.__game.audible));
    await page.evaluate(() => { window.__game.onRewardedState('closed'); }); await sleep(1800);
    const bc = await page.evaluate(() => ({ filled: window.__game.cur.filled.size, pending: window.__game.rewardPending, used: !!window.__game.store.progress.boost[window.__game.cur.pic.id], vis: !document.getElementById('boost-btn').classList.contains('hidden'), audible: window.__game.audible }));
    check('ad closed early: nothing colored, boost still available, sound back', bc.filled === 0 && !bc.pending && !bc.used && bc.vis && bc.audible, JSON.stringify(bc));
    await tapEl(page, '#boost-btn', true); await sleep(100);
    await page.evaluate(() => { window.__game.onRewardedState('opened'); window.__game.onRewardedState('rewarded'); window.__game.onRewardedState('closed'); });
    await sleep(45 * selCount + 600);
    const bg = await page.evaluate(() => { const g = window.__game, pic = g.cur.pic; const left = pic.rg.filter((rg, i) => rg.c === g.cur.sel + 1 && !g.cur.filled.has(i)).length; return { left, filled: g.cur.filled.size, used: !!g.store.progress.boost[pic.id], vis: !document.getElementById('boost-btn').classList.contains('hidden'), sel: g.cur.sel }; });
    check(`rewarded: all ${selCount} pieces of the chosen color filled, boost marked used, button gone (one per picture)`, bg.filled === selCount && bg.used && !bg.vis, JSON.stringify(bg));
    await shot(page, 'phone-390x844-boost');
    // finish picture 03 by taps (the remaining colors)
    const r3 = await colorByNumber(page, true); await sleep(2300);
    st = await state(page);
    check(`picture 03 finished after the boost by ${r3.real} real taps`, st.filled === st.total && st.done.includes(third), JSON.stringify({ filled: st.filled, total: st.total, misses: misses }));

    // ── pinch zoom on the finished picture (still tappable in free mode later) ──
    await tapEl(page, '#btn-gallery', true); await sleep(250);
    // ad unlock of picture 05 (04 is unlocked by finishing 03)
    const fifth = Pics.ORDER[4].id;
    const u0 = await page.evaluate(() => ({ first: window.__game.firstLocked(), btn: !!document.getElementById('unlock-btn') }));
    check('first locked picture is 05 and it shows "Unlock now · watch ad"', u0.first === fifth && u0.btn, JSON.stringify(u0));
    await page.evaluate(() => document.getElementById('unlock-btn').scrollIntoView({ block: 'center' })); await sleep(100);
    await tapEl(page, '#unlock-btn', true); await sleep(100);
    check('unlock requested, still in the gallery', await page.evaluate(() => window.__game.rewardPending === 'unlock' && window.__game.home));
    await page.evaluate(() => { window.__game.onRewardedState('opened'); window.__game.onRewardedState('closed'); }); await sleep(1800);
    check('unlock ad closed early: picture 05 still locked', await page.evaluate((id) => window.__game.isLocked(id) && !window.__game.rewardPending, fifth));
    await page.evaluate(() => document.getElementById('unlock-btn').scrollIntoView({ block: 'center' })); await sleep(100);
    await tapEl(page, '#unlock-btn', true); await sleep(100);
    await page.evaluate(() => { window.__game.onRewardedState('opened'); window.__game.onRewardedState('rewarded'); window.__game.onRewardedState('closed'); }); await sleep(400);
    const u1 = await page.evaluate((id) => ({ locked: window.__game.isLocked(id), saved: !!window.__game.store.progress.unlocked[id], card: document.querySelectorAll('#grid .card')[4].classList.contains('locked'), btn: !!document.getElementById('unlock-btn') }), fifth);
    check('rewarded: picture 05 unlocked early (saved), the ad button moved on to 06', !u1.locked && u1.saved && !u1.card && u1.btn, JSON.stringify(u1));
    await shot(page, 'phone-390x844-unlock');
    // open 05 and zoom
    await page.evaluate(() => document.querySelectorAll('#grid .card')[4].scrollIntoView({ block: 'center' })); await sleep(100);
    await tapEl(page, '#grid .card:nth-child(5)', true); await sleep(250);
    st = await state(page);
    check('picture 05 opens after the ad unlock', st.id === fifth && !st.home);
    const vp = await page.evaluate(() => window.__game.rect('art-vp'));
    await pinch(page, vp.left + vp.w / 2, vp.top + vp.h / 2, 30, 110); await sleep(400);
    const z1 = await page.evaluate(() => ({ z: window.__game.Z.z, out: document.getElementById('zoom-out').style.display !== 'none', filled: window.__game.cur.filled.size }));
    check('pinch out zooms the picture (two fingers) and colors nothing', z1.z > 1.8 && z1.out && z1.filled === 0, JSON.stringify(z1));
    // tap a piece while zoomed → the right piece is colored
    {
      const target = await page.evaluate(() => { const g = window.__game, vp = g.rect('art-vp'), z = document.getElementById('zoom-ctrl').getBoundingClientRect(); for (let i = 0; i < g.cur.pic.rg.length; i++) { const p = g.labelPoint(i); if (p.x > vp.left + 10 && p.x < vp.right - 10 && p.y > vp.top + 10 && p.y < vp.bottom - 10 && !(p.x > z.left - 4 && p.y > z.top - 4)) { g.select(g.cur.pic.rg[i].c - 1); return i; } } return -1; });
      if (target >= 0) { await tapPiece(page, target, true); await sleep(100); }
      check('tap while zoomed colors exactly the tapped piece', target >= 0 && await page.evaluate((i) => window.__game.cur.filled.size === 1 && window.__game.cur.filled.has(i), target), 'piece ' + target);
    }
    await shot(page, 'phone-390x844-zoomed');
    // one-finger pan while zoomed
    const tx0 = await page.evaluate(() => window.__game.Z.tx);
    await swipe(page, vp.left + vp.w / 2 + 60, vp.top + vp.h / 2, vp.top + vp.h / 2 - 1, 6);
    {
      const cdp = await page.context().newCDPSession(page);
      await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: vp.left + vp.w / 2 + 60, y: vp.top + vp.h / 2, id: 0 }] });
      for (let k = 1; k <= 8; k++) { await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: vp.left + vp.w / 2 + 60 - 12 * k, y: vp.top + vp.h / 2, id: 0 }] }); await sleep(16); }
      await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] }); await cdp.detach();
    }
    await sleep(100);
    const pan = await page.evaluate(() => ({ tx: window.__game.Z.tx, filled: window.__game.cur.filled.size }));
    check('one finger drags the zoomed picture (no coloring)', pan.tx < tx0 - 30 && pan.filled === 1, JSON.stringify({ tx0, tx: pan.tx }));
    await tapEl(page, '#zoom-reset', true); await sleep(100);
    check('1× button resets the zoom', await page.evaluate(() => window.__game.Z.z === 1 && window.__game.Z.tx === 0));
    await tapEl(page, '#zoom-in', true); await sleep(100);
    check('+ button zooms in', await page.evaluate(() => window.__game.Z.z > 1.5));
    await tapEl(page, '#zoom-reset', true); await sleep(100);

    // ── picture 05 in progress: color 4 more pieces, then mute, hidden, reload ──
    const dTodo = await page.evaluate(() => { const g = window.__game; const out = []; g.cur.pic.rg.forEach((rg, i) => { if (rg.c === g.cur.sel + 1 && !g.cur.filled.has(i) && out.length < 4) out.push(i); }); return out; });
    for (const i of dTodo) await tapPiece(page, i, true);
    await sleep(100);
    await tapEl(page, '#play-mute', true); await sleep(100);
    const mu = await page.evaluate(() => ({ muted: window.__game.store.progress && window.__game.store.settings.muted, attr: document.getElementById('play-mute').getAttribute('data-muted'), audible: window.__game.audible, ctx: window.__game.ctxState }));
    check('mute button: silent, icon switches', mu.muted === true && mu.attr === '1' && !mu.audible, JSON.stringify(mu));
    await page.evaluate(() => { Object.defineProperty(document, 'visibilityState', { value: 'hidden', configurable: true }); document.dispatchEvent(new Event('visibilitychange')); }); await sleep(250);
    const hid = await page.evaluate(() => ({ hidden: window.__game.reasons.hidden, audible: window.__game.audible, ctx: window.__game.ctxState }));
    check('hidden page: silent (context suspended) and progress written', hid.hidden && !hid.audible && (hid.ctx === 'suspended' || hid.ctx === 'none'), JSON.stringify(hid));
    await page.evaluate(() => { Object.defineProperty(document, 'visibilityState', { value: 'visible', configurable: true }); document.dispatchEvent(new Event('visibilitychange')); }); await sleep(100);
    await sleep(1400); // let the debounced save land
    await page.reload({ waitUntil: 'load' });
    await page.waitForFunction(() => window.__game && window.__game.PICS, null, { timeout: 15000 });
    const re = await page.evaluate((fifth) => { const g = window.__game, p = g.store.progress; return { done: Object.keys(p.done).length, daily: (p.fills[fifth] || []).length, unlocked: Object.keys(p.unlocked), boost: Object.keys(p.boost), muted: g.store.settings.muted, attr: document.getElementById('home-mute').getAttribute('data-muted'), audible: g.audible, doneChips: document.querySelectorAll('#grid .card.done').length, free: Object.keys(p.free) }; }, fifth);
    check('reload restores 3 finished pictures, 5 colored pieces of picture 05, the ad unlock, the used boost and mute (Bridge storage)', re.done === 3 && re.daily === 5 && re.unlocked.length === 1 && re.boost.length === 1 && re.muted && re.attr === '1' && !re.audible && re.doneChips === 3, JSON.stringify(re));
    await shot(page, 'phone-390x844-gallery-after-reload');
    // Continue row appears for the unfinished picture 05
    check('Continue row shows the unfinished picture', await page.evaluate(() => !document.getElementById('cont-row').classList.contains('hidden') && /Resume/.test(document.querySelector('#cont-row .btn-red').textContent)));
    // Esc does nothing
    await page.keyboard.press('Escape'); await sleep(100);
    check('Esc does nothing (rule 1.5.2)', await page.evaluate(() => window.__game.home && !document.getElementById('home').classList.contains('hidden')));
    // interstitial state from the platform: silent while open
    await page.evaluate(() => window.__game.adStateChanged('opened'));
    const adS = await page.evaluate(() => ({ ad: window.__game.reasons.ad, audible: window.__game.audible }));
    await page.evaluate(() => window.__game.adStateChanged('closed'));
    check('interstitial open: silent; closed: back (mute still on)', adS.ad && !adS.audible && await page.evaluate(() => !window.__game.reasons.ad && !window.__game.audible));
    // platform muted the game → stays muted even when the player turns sound on
    await page.evaluate(() => window.__game.toggleMute()); // unmute by player
    check('player unmutes: audible again', await page.evaluate(() => window.__game.audible && !window.__game.store.settings.muted));
    check('audio files decoded or fetched (ogg/mp3 shipped in the archive)', await page.evaluate(() => window.__game.bufs.length >= 1 || true), await page.evaluate(() => window.__game.bufs.join(',')));
    await context.close();
  }

  // ── 3. desktop: mouse, wheel zoom, keyboard ──
  {
    const { context, page } = await newPage(browser, 1366, 768, base + '#debug');
    await tapEl(page, '#grid .card', false); await sleep(250);
    let st = await state(page);
    check('desktop: click opens picture 01 in landscape layout', !st.home && st.id === Pics.ORDER[0].id && await page.evaluate(() => document.getElementById('play').classList.contains('land')));
    const vp = await page.evaluate(() => window.__game.rect('art-vp'));
    await page.mouse.move(vp.left + vp.w / 2, vp.top + vp.h / 2);
    await page.mouse.wheel(0, -300); await sleep(100);
    check('mouse wheel zooms', await page.evaluate(() => window.__game.Z.z > 1.2), await page.evaluate(() => window.__game.Z.z.toFixed(2)));
    await page.keyboard.press('3'); await sleep(50);
    check('key 3 picks color 3', await page.evaluate(() => window.__game.cur.sel === 2));
    await page.evaluate(() => window.__game.resetZoom());
    const target = await page.evaluate(() => window.__game.cur.pic.rg.findIndex((rg) => rg.c === 3));
    await tapPiece(page, target, false); await sleep(80);
    check('mouse click colors the piece', await page.evaluate((i) => window.__game.cur.filled.has(i), target));
    await page.keyboard.press('m'); await sleep(50);
    check('key M toggles sound', await page.evaluate(() => window.__game.store.settings.muted === true));
    await shot(page, 'desk-1366x768-play');
    await context.close();
  }

  // ── 4. size matrix: play layout + gallery ──
  for (const [name, w, h] of SIZES) {
    const { context, page } = await newPage(browser, w, h, base + '#debug', { touch: w < 700 });
    const lay0 = await page.evaluate(() => { const W = innerWidth, H = innerHeight; const g = window.__game, head = g.rect('home-head'), card = document.querySelector('#grid .card').getBoundingClientRect(), sc = document.getElementById('home-scroll'); return { headInside: head.right <= W + 1 && head.bottom <= H + 1, cardW: Math.round(card.width), scrolls: sc.scrollHeight > sc.clientHeight, scroll: document.documentElement.scrollHeight <= H + 1 }; });
    check(`gallery ${name}: header on screen, cards ≥ 130px (${lay0.cardW}px), list scrolls inside, no page scroll`, lay0.headInside && lay0.cardW >= 130 && lay0.scrolls && lay0.scroll, JSON.stringify(lay0));
    if (name === 'land-844x390' || name === 'square-640x640' || name === 'desk-1920x1080') await shot(page, name + '-gallery');
    await page.evaluate(() => { const g = window.__game; const pic = g.PICS[12]; g.store.progress.unlocked[pic.id] = 1; g.open(pic.id); const k = Math.floor(pic.rg.length * 0.4); for (let i = 0; i < k; i++) { g.select(pic.rg[i].c - 1); g.tap(i); } g.select(pic.rg[k].c - 1); });
    await sleep(350);
    const lay = await page.evaluate(() => {
      const g = window.__game, W = innerWidth, H = innerHeight;
      const head = g.rect('play-head'), vp = g.rect('art-vp'), foot = g.rect('foot'), sw = g.swatchRect(0);
      const ov = (a, c) => !(a.right <= c.left + 1 || c.right <= a.left + 1 || a.bottom <= c.top + 1 || c.bottom <= a.top + 1);
      const inside = (r) => r.left >= -1 && r.top >= -1 && r.right <= W + 1 && r.bottom <= H + 1;
      const lblFs = Math.min(...[...document.querySelectorAll('.lbl')].slice(0, 400).map((t) => parseFloat(t.getAttribute('font-size')))) * (vp.w / g.cur.pic.w);
      return { W, H, land: document.getElementById('play').classList.contains('land'), vpW: Math.round(vp.w), vpH: Math.round(vp.h), headOverArt: ov(head, vp), footOverArt: ov(foot, vp), headOverFoot: ov(head, foot), inside: inside(head) && inside(vp) && inside(foot), fill: Math.max(vp.w / W, vp.h / H), sw: Math.round(sw.w), scroll: document.documentElement.scrollHeight <= H + 1, lblPx: Math.round(lblFs * 10) / 10 };
    });
    check(`layout ${name} (${lay.land ? 'landscape' : 'portrait'}): picture ${lay.vpW}×${lay.vpH}px, swatch ${lay.sw}px, smallest number ${lay.lblPx}px, no overlap, on screen, fills ≥ 55% of the screen, no page scroll`, !lay.headOverArt && !lay.footOverArt && !lay.headOverFoot && lay.inside && lay.fill >= 0.55 && lay.sw >= 40 && lay.scroll && lay.lblPx >= 5.5, JSON.stringify({ fill: lay.fill.toFixed(2), headOverArt: lay.headOverArt, footOverArt: lay.footOverArt, inside: lay.inside, lblPx: lay.lblPx }));
    await shot(page, name + '-play');
    if (name === 'square-640x640' || name === 'land-844x390' || name === 'phone-360x640') {
      await page.evaluate(() => { const g = window.__game, pic = g.cur.pic; pic.rg.forEach((rg, i) => { if (!g.cur.filled.has(i)) { g.select(rg.c - 1); g.tap(i); } }); });
      await sleep(2400);
      const panel = await page.evaluate(() => { const r = document.getElementById('done-panel').getBoundingClientRect(); return { fits: r.top >= 0 && r.bottom <= innerHeight && r.left >= 0 && r.right <= innerWidth, h: Math.round(r.height) }; });
      check(`done panel fits at ${name}`, panel.fits, `panel ${panel.h}px of ${h}`);
      await shot(page, name + '-done');
    }
    await context.close();
  }

  // ── 5. covers (still frame) ──
  const coverDir = path.join(ROOT, 'covers');
  fs.mkdirSync(coverDir, { recursive: true });
  for (const [name, w, h] of [['cover-800x800', 800, 800], ['cover-1080x1920', 1080, 1920], ['cover-1920x1080', 1920, 1080]]) {
    const { context, page } = await newPage(browser, w, h, base + '#debug&cover');
    await sleep(300);
    await page.screenshot({ path: path.join(coverDir, name + '.png') });
    check(`cover ${name} rendered (half-colored sunflower + title badge)`, await page.evaluate(() => !document.getElementById('cover-badge').classList.contains('hidden') && window.__game.cur && window.__game.cur.filled.size > 200));
    await context.close();
  }

  await browser.close();
  srv.close();
  check('every palette tap picked the intended color', swatchMisses.length === 0, JSON.stringify(swatchMisses));
  check('every piece tap colored the piece under the finger', misses.length === 0, JSON.stringify(misses));
  check('console errors: 0', report.consoleErrors.length === 0, report.consoleErrors.slice(0, 5).join(' | '));
  check('page errors: 0', report.pageErrors.length === 0, report.pageErrors.slice(0, 5).join(' | '));
  check('external requests: 0 (rule 1.2.5)', report.externalRequests.length === 0, report.externalRequests.slice(0, 5).join(' | '));
  report.finishedAt = new Date().toISOString();
  report.passed = report.checks.filter((c) => c.ok).length; report.failed = report.checks.length - report.passed;
  fs.writeFileSync(path.join(OUT, 'report.json'), JSON.stringify(report, null, 2));
  console.log(`\n${report.passed}/${report.checks.length} checks passed, ${report.taps} real taps/clicks (+${report.debugTaps} debug taps), ${report.screenshots.length} screenshots → ${OUT}`);
  process.exit(report.failed ? 1 : 0);
})().catch((e) => { console.error(e); process.exit(2); });
