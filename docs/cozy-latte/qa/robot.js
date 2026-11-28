/* Cozy Latte test robot.  node docs/cozy-latte/qa/robot.js [baseUrl]
   Drives the real page in headless Chromium (software WebGL) with real touch events (CDP Input.dispatchTouchEvent).
   It checks WHAT happens. It cannot check how it FEELS: this browser renders ~15 frames a second. */
const { chromium } = require(process.env.PW || '/opt/node22/lib/node_modules/playwright');
const fs = require('fs'), path = require('path');
const G = require('./gestures.js');
const BASE = process.argv[2] || 'http://localhost:8765/cozy-latte/';
const OUT = __dirname;
const ARGS = ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'];
const results = [], problems = [];
const check = (name, pass, detail) => { results.push({ name, pass: !!pass, detail: detail === undefined ? '' : detail }); console.log((pass ? 'PASS ' : 'FAIL ') + name + (detail !== undefined ? '  — ' + (typeof detail === 'string' ? detail : JSON.stringify(detail)) : '')); };
const IGNORE = /GPU stall due to ReadPixels/;   // caused by the robot's own pixel probe, not by the page

async function open(browser, o = {}) {
  const ctx = await browser.newContext({ viewport: { width: o.w || 390, height: o.h || 844 }, deviceScaleFactor: o.dpr || 1, hasTouch: true, isMobile: o.mobile !== false, colorScheme: o.dark ? 'dark' : 'light' });
  const page = await ctx.newPage();
  page.on('console', m => { if ((m.type() === 'error' || m.type() === 'warning') && !IGNORE.test(m.text())) problems.push((o.tag || '') + ' console: ' + m.text()); });
  page.on('pageerror', e => problems.push((o.tag || '') + ' pageerror: ' + e.message));
  page.on('request', r => { if (!r.url().startsWith(BASE.replace(/cozy-latte\/.*$/, '')) && !r.url().startsWith('data:')) problems.push('external request: ' + r.url()); });
  if (!o.firstRun) await page.addInitScript(() => { try { localStorage.setItem('cozy-latte.demo.v1', '1'); } catch (e) { } });
  if (o.noGL) await page.addInitScript(() => { const g = HTMLCanvasElement.prototype.getContext; HTMLCanvasElement.prototype.getContext = function (t) { return /webgl/.test(t) ? null : g.apply(this, arguments); }; });
  const q = o.query || '';
  await page.goto(BASE + (o.orders ? q : q + (q ? '&' : '?') + 'mode=free'));
  await page.waitForTimeout(o.wait || 900);
  const cdp = await ctx.newCDPSession(page);
  const h = {
    ctx, page,
    st: () => page.evaluate(() => __latte.state()),
    touch: (type, x, y, id = 1) => cdp.send('Input.dispatchTouchEvent', { type, touchPoints: type === 'touchEnd' ? [] : [{ x, y, id }] }),
    touches: (type, pts) => cdp.send('Input.dispatchTouchEvent', { type, touchPoints: pts }),
    frames: async n => { const f0 = (await h.st()).frames; const t0 = Date.now(); while ((await h.st()).frames < f0 + n) { await page.waitForTimeout(25); if (Date.now() - t0 > 120000) throw new Error('frames stalled'); } },
    white: pts => page.evaluate(p => __latte.white(p), pts),
    grid: async () => {            // 17x17 probe points over the liquid; returns how many read as milk
      const g = (await h.st()).geo, R = g.Ro * g.rho * 0.9, pts = [];
      for (let i = -8; i <= 8; i++) for (let j = -8; j <= 8; j++) if (i * i + j * j <= 64) pts.push([g.cx + i / 8 * R, g.cy + j / 8 * R]);
      const w = await h.white(pts); return w.filter(v => v > 0.6).length;
    },
    shot: (name, clip) => page.screenshot({ path: path.join(OUT, name + '.png'), clip }),
  };
  return h;
}

(async () => {
  const browser = await chromium.launch({ args: ARGS });

  /* A. first screen at 14 sizes */
  const SIZES = [[320, 568], [360, 640], [375, 667], [390, 844], [393, 852], [412, 915], [414, 896], [430, 932], [768, 1024], [820, 1180], [1024, 768], [844, 390], [1280, 720], [390, 844, 3]];
  for (const [w, h, dpr] of SIZES) {
    const tag = dpr ? `${w * dpr}x${h * dpr}` : `${w}x${h}`;
    const t = await open(browser, { w, h, dpr: dpr || 1, tag, orders: true, query: '?level=' + (dpr ? 0 : 3) });
    const s = await t.st(), g = s.geo;
    const btn = await t.page.evaluate(() => { const r = document.getElementById('fresh').getBoundingClientRect(); return { l: r.left, t: r.top, r: r.right, b: r.bottom, op: +getComputedStyle(document.getElementById('fresh')).opacity }; });
    const centre = (await t.white([[g.cx, g.cy]]))[0];
    const okCup = g.cx - g.Ro >= 0 && g.cx + g.Ro <= w && g.cy - g.Ro >= 0 && g.cy + g.Ro <= h;
    const okHandle = g.cx + 1.44 * 0.766 * g.Ro <= w + 0.5 && g.cy + 1.44 * 0.643 * g.Ro <= h;
    const okBtn = btn.l >= 0 && btn.r <= w && btn.b <= h && btn.t >= g.cy + g.Ro - 1 && btn.op === 0;
    const dials = await t.page.evaluate(() => ['hgt', 'amt'].map(id => { const r = document.getElementById(id).getBoundingClientRect(); return { l: r.left, t: r.top, r: r.right, b: r.bottom }; }));
    const RL = g.Ro * 0.93;   // widest the liquid ever gets
    const okDials = dials.every(d => d.l >= 0 && d.r <= w && d.t >= 0 && d.b <= h && d.r - d.l >= 44 && d.b - d.t >= 100 &&
      Math.hypot(Math.max(d.l - g.cx, 0, g.cx - d.r), Math.max(d.t - g.cy, 0, g.cy - d.b)) > RL + 4 && (d.r < btn.l || d.l > btn.r));
    const tl = await t.page.evaluate(() => ({ tools: ['style', 'tex'].map(id => { const r = document.querySelector('#' + id + ' i').getBoundingClientRect(), b = document.getElementById(id).getBoundingClientRect(); return { l: r.left, t: r.top, r: r.right, b: b.bottom, w: r.width, label: document.querySelector('#' + id + ' span').textContent }; }),
      tags: [...document.querySelectorAll('.dial .tag')].map(e => { const r = e.getBoundingClientRect(); return { l: r.left, t: r.top, r: r.right, b: r.bottom, text: e.textContent }; }),
      help: (() => { const r = document.getElementById('help').getBoundingClientRect(); return { l: r.left, t: r.top, r: r.right, b: r.bottom }; })() }));
    const clr = d => Math.hypot(Math.max(d.l - g.cx, 0, g.cx - d.r), Math.max(d.t - g.cy, 0, g.cy - d.b)) > RL + 2;
    const okTools = tl.tools.every(d => d.l >= 0 && d.r <= w && d.b <= h && d.w >= 44 && clr(d) && d.label.length > 2 && dials.every(q => d.r < q.l || d.l > q.r)) &&
      tl.tags.length === 2 && tl.tags.every(d => d.l >= 0 && d.r <= w && d.t >= 0 && clr(d)) && tl.tags[0].text === 'Height · Low' && tl.tags[1].text === 'Flow · Medium' &&
      tl.help.r <= w && tl.help.t >= 0 && tl.help.r - tl.help.l >= 44 && clr(tl.help);
    const okCanvas = Math.abs(g.canvasW - w * (dpr || 1)) <= 1 && Math.abs(g.canvasH - h * (dpr || 1)) <= 1;
    check(`first screen ${tag}`, s.ok && okCup && okHandle && okBtn && okDials && okTools && okCanvas && centre < 0.35 && s.fill === 0,
      { cup: okCup, handle: okHandle, buttonHiddenAndClear: okBtn, dialsOnScreenClearOfCoffee: okDials, toolsTagsHelpOnScreenClearOfCoffee: okTools, canvas: okCanvas, centreIsCoffee: centre });
    await t.shot('first-' + tag);
    // order chip + mode button on screen and clear of the coffee; then serve a tiny pour and see that the result card fits
    const top = await t.page.evaluate(() => ['order', 'mode'].map(id => { const r = document.getElementById(id).getBoundingClientRect(); return { l: r.left, t: r.top, r: r.right, b: r.bottom }; }));
    const clear = d => Math.hypot(Math.max(d.l - g.cx, 0, g.cx - d.r), Math.max(d.t - g.cy, 0, g.cy - d.b)) > RL + 2;
    const okTop = top.every(d => d.l >= 0 && d.r <= w && d.t >= 0 && clear(d)) && top[0].r <= top[1].l && top[1].b - top[1].t >= 44 && s.mode === 'orders' && s.guideOn && s.order === 'circle';
    if (dpr) { check(`orders screen ${tag}: order chip and mode button (pour not driven: software renderer stalls at this pixel count; same layout as 390x844)`, okTop); await t.ctx.close(); continue; }
    await t.touch('touchStart', g.cx, g.cy); await t.frames(3); await t.touch('touchEnd'); await t.frames(2);
    const sv = await t.page.evaluate(() => { const r = document.querySelector('#serve i').getBoundingClientRect(); return [r.left + r.width / 2, r.top + r.height / 2, r.width, document.getElementById('serve').classList.contains('on')]; });
    await t.page.touchscreen.tap(sv[0], sv[1]);
    await t.page.waitForFunction(() => __latte.state().card, null, { timeout: 15000 }).catch(() => { }); await t.page.waitForTimeout(450);
    const cd = await t.page.evaluate(() => { const r = document.getElementById('card').getBoundingClientRect(); const b = [...document.querySelectorAll('#card button')].map(x => x.getBoundingClientRect()); return { l: r.left, t: r.top, r: r.right, b: r.bottom, btnH: Math.min(...b.map(x => x.height)), btnIn: b.every(x => x.left >= r.left && x.right <= r.right && x.bottom <= r.bottom), dialOp: +getComputedStyle(document.getElementById('hgt')).opacity, pct: document.getElementById('pct').textContent }; });
    const s9 = await t.st();
    const okCard = sv[3] && sv[2] >= 44 && s9.card && cd.l >= 0 && cd.r <= w && cd.t >= 0 && cd.b <= h && cd.btnH >= 44 && cd.btnIn && clear(cd) && cd.dialOp === 0 && /^\d+%$/.test(cd.pct);
    check(`orders screen ${tag}: order shown, serve works, result card fits`, okTop && okCard, { orderChipAndModeButton: okTop, serveVisible: sv[3], cardOnScreenClearOfCoffee: okCard, cardShows: cd.pct });
    if (tag === '320x568' || tag === '844x390') await t.shot('card-' + tag);
    await t.ctx.close();
  }

  /* B–F. pour, grow, unbroken line, push, split — iPhone size, real touches */
  {
    const t = await open(browser, { tag: 'pour', query: '?level=3' });
    const g = (await t.st()).geo, R = g.Ro * g.rho;
    const P = [g.cx, g.cy];
    const before = (await t.white([P]))[0];
    await t.touch('touchStart', P[0], P[1]);
    let fr = 0, w1 = 0;
    for (; fr < 6; fr++) { await t.frames(1); w1 = (await t.white([P]))[0]; if (w1 > 0.8) break; }
    check('touch puts milk at the touched point', before < 0.35 && w1 > 0.8, { before, after: w1 });
    await t.shot('pour-1-first-touch');
    const n1 = await t.grid();
    await t.frames(45);
    const n2 = await t.grid();
    check('holding still makes the white pool grow', n2 > n1 + 3, { probesWhiteAtStart: n1, after45Frames: n2 });
    await t.shot('pour-2-hold');
    await t.touch('touchEnd');
    await t.frames(3);

    // push: pour right next to the pool; the side of the pool facing the new milk must give way
    const edgeTo = async sign => { const pts = []; for (let x = 0; x <= R * 0.9; x += 1) pts.push([g.cx + sign * x, g.cy]); const w = await t.white(pts); let e = 0; while (e < w.length && w[e] > 0.5) e++; return e; };
    const left = await edgeTo(-1), e1 = await edgeTo(1);
    await t.touch('touchStart', g.cx - left - 16, g.cy);
    await t.frames(40);
    await t.touch('touchEnd'); await t.frames(2);
    const left2 = await edgeTo(-1), e2 = await edgeTo(1);
    check('pouring beside a pattern pushes it away', left2 <= left - 4 && e2 >= e1, { nearEdgePxFromCentreBefore: left, after: left2, farEdgeBefore: e1, farEdgeAfter: e2 });
    await t.shot('pour-3-push');

    // unbroken line from two far-apart events (a very fast finger): one touchStart, one touchMove 150px away
    const A = [g.cx - 75, g.cy - R * 0.62], B = [g.cx + 75, g.cy - R * 0.62];
    await t.touch('touchStart', A[0], A[1]);
    await t.touch('touchMove', B[0], B[1]);
    await t.frames(1);
    const lw = [];        // the flow nudges a thin line a few px, so probe a short column at each step and keep the whitest
    for (let k = 1; k < 20; k++) { const col = []; for (let dy = -20; dy <= 20; dy += 1.5) col.push([A[0] + (B[0] - A[0]) * k / 20, A[1] + dy]); lw.push(Math.max(...(await t.white(col)))); }
    await t.touch('touchEnd');
    check('a fast stroke is one unbroken line (no dots; coffee reads below 0.2)', Math.min(...lw) > 0.3, { minWhitenessAlongLine: Math.min(...lw), samples: lw.length });
    await t.shot('pour-4-fast-line');

    // split: a quick stroke straight through the pool leaves coffee-coloured lines inside it
    const scan = async () => { const pts = []; for (let x = -e2; x <= e2; x += 1) pts.push([g.cx + x, g.cy + 6]); const w = await t.white(pts); let runs = 0, inW = false; for (const v of w) { if (v > 0.6 && !inW) { runs++; inW = true; } else if (v < 0.45) inW = false; } return runs; };
    const r1 = await scan();
    const X = g.cx + (e2 - left) / 2;
    await t.touch('touchStart', X, g.cy - R * 0.45);
    for (let k = 1; k <= 7; k++) await t.touch('touchMove', X, g.cy - R * 0.45 + k * R * 0.13);
    await t.touch('touchEnd'); await t.frames(2);
    const r2 = await scan();
    check('a quick stroke through the pattern splits it', r2 > r1, { whiteRunsAcrossBefore: r1, after: r2 });
    await t.shot('pour-5-split');

    // second finger is ignored, nothing breaks
    await t.touches('touchStart', [{ x: g.cx, y: g.cy + R * 0.5, id: 1 }]);
    await t.touches('touchMove', [{ x: g.cx, y: g.cy + R * 0.5, id: 1 }, { x: g.cx + 60, y: g.cy + R * 0.6, id: 2 }]);
    await t.frames(3);
    await t.touches('touchEnd', []);
    await t.frames(2);
    check('two fingers: still running, pour released', (await t.st()).down === false && (await t.st()).ok);

    // cushion: a long downward drag must not scroll the page away
    const sc0 = await t.page.evaluate(() => ({ y: scrollY, room: document.documentElement.scrollHeight - innerHeight }));
    await t.touch('touchStart', g.cx + R * 0.5, g.cy - R * 0.2);
    for (let k = 1; k <= 8; k++) await t.touch('touchMove', g.cx + R * 0.5, g.cy - R * 0.2 + k * 45);
    await t.touch('touchEnd'); await t.page.waitForTimeout(400);
    const sc1 = await t.page.evaluate(() => scrollY);
    check('scroll cushion: 240px of room, parked at 120, a downward drag does not move it', sc0.room >= 240 && sc0.y === 120 && sc1 === 120, { room: sc0.room, before: sc0.y, afterDrag: sc1 });

    // resize / rotate keeps the cup
    const nb = await t.grid();
    await t.page.setViewportSize({ width: 844, height: 390 }); await t.page.waitForTimeout(600); await t.frames(2);
    const s2 = await t.st(); const na = await t.grid();
    check('rotating the phone keeps the pattern', na > nb * 0.7 && s2.geo.W === 844 && s2.geo.canvasW === 844, { probesBefore: nb, after: na });
    await t.shot('rotated-844x390');
    await t.ctx.close();
  }


  /* D. the two dials: pour height and milk flow */
  {
    const t = await open(browser, { tag: 'dials', query: '?level=3' });
    const g = (await t.st()).geo, R = g.Ro * g.rho;
    const rect = id => t.page.evaluate(i => { const r = document.getElementById(i).getBoundingClientRect(); return { x: r.left + r.width / 2, top: r.top, h: r.height }; }, id);
    const yFor = (r, v) => r.top + 20 + (1 - v) * (r.h - 40);
    const setDial = async (id, v, tid = 7) => { const r = await rect(id); await t.touches('touchStart', [{ x: r.x, y: yFor(r, 0.5), id: tid }]); await t.touches('touchMove', [{ x: r.x, y: yFor(r, v), id: tid }]); await t.touches('touchEnd', []); };
    const s0 = await t.st();
    check('dials start low jug / medium flow', Math.abs(s0.height - 0.15) < 0.01 && Math.abs(s0.amount - 0.5) < 0.01, { height: s0.height, amount: s0.amount });

    // jug held high: milk sinks — it pushes the surface but leaves no white
    await setDial('hgt', 1);
    const sH = await t.st();
    await t.touch('touchStart', g.cx, g.cy); await t.frames(25); await t.touch('touchEnd'); await t.frames(2);
    const nHigh = await t.grid(), fHigh = (await t.st()).fill;
    check('jug high: milk goes in (cup fills) but no white on top', sH.height > 0.97 && nHigh === 0 && fHigh > 0, { height: sH.height, whiteProbes: nHigh, fill: fHigh });
    await t.shot('dial-high-no-white');
    // jug low: white foam draws
    await setDial('hgt', 0);
    await t.touch('touchStart', g.cx, g.cy); await t.frames(25); await t.touch('touchEnd'); await t.frames(2);
    const nLow = await t.grid();
    check('jug low: white foam floats and draws', (await t.st()).height < 0.03 && nLow > 4, { whiteProbes: nLow });
    // high + quick stroke opens the white (cut), adds no white
    const scan = async () => { const pts = []; for (let x = -R * 0.8; x <= R * 0.8; x += 1) pts.push([g.cx + x, g.cy + 4]); const w = await t.white(pts); let runs = 0, inW = false; for (const v of w) { if (v > 0.6 && !inW) { runs++; inW = true; } else if (v < 0.45) inW = false; } return runs; };
    const r1 = await scan();
    await setDial('hgt', 1);
    await t.touch('touchStart', g.cx + 5, g.cy - R * 0.5);
    for (let k = 1; k <= 7; k++) await t.touch('touchMove', g.cx + 5, g.cy - R * 0.5 + k * R * 0.14);
    await t.touch('touchEnd'); await t.frames(2);
    const r2 = await scan();
    check('jug high + quick stroke cuts the white open', r2 > r1, { whiteRunsBefore: r1, after: r2 });
    await t.shot('dial-high-cut');

    // other hand: move a dial while the first finger keeps pouring
    await setDial('hgt', 0.1);
    const ra = await rect('amt');
    await t.touches('touchStart', [{ x: g.cx - 40, y: g.cy + 50, id: 1 }]); await t.frames(3);
    await t.touches('touchStart', [{ x: g.cx - 40, y: g.cy + 50, id: 1 }, { x: ra.x, y: yFor(ra, 0.5), id: 2 }]);
    await t.touches('touchMove', [{ x: g.cx - 36, y: g.cy + 50, id: 1 }, { x: ra.x, y: yFor(ra, 0.95), id: 2 }]);
    await t.frames(2);
    const sm = await t.st(); const held = await t.page.evaluate(() => document.getElementById('amt').classList.contains('held'));
    await t.touches('touchMove', [{ x: g.cx - 30, y: g.cy + 50, id: 1 }, { x: ra.x, y: yFor(ra, 0.95), id: 2 }]);
    await t.touches('touchEnd', [{ x: ra.x, y: yFor(ra, 0.95), id: 2 }]); await t.frames(3);   // CDP: the points listed in touchEnd are the ones lifted
    const sm2 = await t.st();
    await t.touches('touchEnd', []); await t.frames(2);
    check('one finger pours while another moves a dial', sm.down && held && sm.amount > 0.9 && sm2.down && sm2.amount > 0.9 && !(await t.st()).down, { pouringWhileDialHeld: sm.down, amount: sm.amount, stillPouringAfterDialReleased: sm2.down });
    await t.shot('dials-390x844');
    // remembered
    await t.page.reload(); await t.page.waitForTimeout(900);
    const sr = await t.st();
    const tg = await t.page.evaluate(() => [...document.querySelectorAll('.dial .tag')].map(e => e.textContent));
    check('dial name tags show the current value in words', tg[0] === 'Height · Low' && tg[1] === 'Flow · Heavy', tg);
    check('dial positions are remembered next visit', sr.amount > 0.9 && Math.abs(sr.height - 0.1) < 0.03, { height: sr.height, amount: sr.amount });
    const kn = await t.page.evaluate(() => { const k = document.querySelector('#amt .knob').getBoundingClientRect(), d = document.getElementById('amt').getBoundingClientRect(); return (k.top + k.height / 2 - d.top) / d.height; });
    check('knob is drawn where the value is', kn < 0.25, { knobFromTop: +kn.toFixed(2) });
    await t.ctx.close();

    // flow: thread vs thick stream, same 1 second hold on a virtual 60 fps clock
    const hold = async a => { const u = await open(browser, { tag: 'flow' + a, query: '?manual=1&level=3' });
      await u.page.evaluate(v => { localStorage.setItem('cozy-latte.amount', v); localStorage.setItem('cozy-latte.height', '0.15'); }, String(a));
      await u.page.reload(); await u.page.waitForTimeout(700);
      const fill = await u.page.evaluate(() => { const g = __latte.state().geo; __latte.feed('down', g.cx, g.cy, 0); for (let f = 0; f < 60; f++) __latte.tick(1000 / 60); __latte.feed('up'); __latte.tick(1000 / 60); return __latte.state().fill; });
      const n = await u.grid(); if (a === 1) await u.shot('dial-flow-thick'); else await u.shot('dial-flow-thin'); await u.ctx.close(); return { n, fill }; };
    const thin = await hold(0), thick = await hold(1);
    check('flow dial: thick stream makes a bigger pool and fills the cup faster than a thread', thick.n > thin.n + 3 && thick.fill > thin.fill * 2.5, { thin, thick });
  }


  /* O. orders: every order is pourable (robot hand movements, virtual 60 fps), and the score is plain overlap */
  {
    const iou = (m, o) => { let both = 0, either = 0; for (let i = 0; i < m.length; i++) { const x = (i % 96 + 0.5) / 96 - 0.5, y = (Math.floor(i / 96) + 0.5) / 96 - 0.5; if (x * x + y * y > 0.48 * 0.48) continue; const a = m[i] === '1', b = o[i] === '1'; if (a && b) both++; if (a || b) either++; } return Math.round(100 * both / either); };
    const NAMES = ['circle', 'heart', 'leaf'];
    for (const lv of [3, 1]) for (let i = 0; i < NAMES.length; i++) {
      const name = NAMES[i];
      const t = await open(browser, { tag: 'order-' + name, orders: true, dpr: lv === 3 ? 2 : 1, query: '?manual=1&level=' + lv, wait: 300 });
      await t.page.evaluate(n => localStorage.setItem('cozy-latte.cup', String(n)), i); await t.page.reload(); await t.page.waitForTimeout(600);
      const s0 = await t.st();
      await t.page.evaluate(() => __latte.tick(16.7));
      if (lv === 3) await t.shot('order-' + name + '-start');
      await t.page.evaluate('(function(){' + G.RUN_SRC + '; return runGesture(' + JSON.stringify(G.GESTURES[name]) + ')})()');
      await t.page.evaluate(() => { for (let k = 0; k < 60; k++) __latte.tick(16.7); }); await t.page.waitForTimeout(450);
      const s = await t.st(); const mine = iou(await t.page.evaluate(() => __latte.resultMask()), await t.page.evaluate(() => __latte.orderBits()));
      const stars = await t.page.evaluate(() => document.querySelectorAll('#stars .got').length);
      check(`order "${name}" is pourable: robot scores ≥70% (grid level ${lv})`, s0.order === name && s.card && s.result && s.result.pct >= 70, { pct: s.result && s.result.pct, stars: s.result && s.result.stars, fillUsed: +s.fill.toFixed(2) });
      check(`order "${name}" L${lv}: the % on the card is exactly overlap ÷ union, stars follow the %`, s.result && s.result.pct === mine && stars === s.result.stars && stars === (mine >= 78 ? 3 : mine >= 62 ? 2 : mine >= 45 ? 1 : 0), { cardPct: s.result && s.result.pct, robotRecount: mine, starsDrawn: stars });
      if (lv === 3) { await t.page.waitForTimeout(900); await t.shot('order-' + name + '-result'); }
      if (name === 'heart' && lv === 3) {
        // Next cup → next order, clean cup. Again → same order. Best is remembered.
        await t.page.evaluate(() => document.getElementById('again').click()); await t.page.evaluate(() => { for (let k = 0; k < 50; k++) __latte.tick(16.7); });
        const a = await t.st(); const sub = await t.page.evaluate(() => document.getElementById('osub').textContent);
        check('"Again": same order, clean cup, best score shown', a.order === 'heart' && !a.card && !a.done && a.fill === 0 && (await t.grid()) === 0 && sub.includes('best ' + s.result.pct + '%'), { order: a.order, sub });
        // an honest low score: a dab at the edge, served
        await t.page.evaluate(() => { const g = __latte.state().geo, R = g.Ro * g.rho; __latte.feed('down', g.cx + R * 0.8, g.cy, 1); for (let k = 0; k < 20; k++) __latte.tick(16.7); __latte.feed('up'); __latte.serve(); for (let k = 0; k < 60; k++) __latte.tick(16.7); });
        const low = await t.st();
        check('a careless pour gets a low score and no stars', low.card && low.result.pct < 25 && low.result.stars === 0, { pct: low.result.pct, stars: low.result.stars });
        await t.page.waitForTimeout(900); await t.shot('order-low-score');
        await t.page.evaluate(() => document.getElementById('next').click()); await t.page.evaluate(() => { for (let k = 0; k < 50; k++) __latte.tick(16.7); });
        const n = await t.st(); const nm = await t.page.evaluate(() => document.getElementById('oname').textContent);
        check('"Next cup": the next order, clean cup', n.order === 'leaf' && n.cupNo === 2 && nm === 'Leaf' && !n.card && n.fill === 0, { order: n.order, cup: n.cupNo + 1 });
      }
      await t.ctx.close();
    }
    // mode switch with real taps
    const t = await open(browser, { tag: 'mode', orders: true, query: '?level=4' });
    const g = (await t.st()).geo;
    const mb = await t.page.evaluate(() => { const r = document.getElementById('mode').getBoundingClientRect(); return [r.left + r.width / 2, r.top + r.height / 2]; });
    await t.page.touchscreen.tap(mb[0], mb[1]); await t.page.waitForTimeout(500);
    const f = await t.st(); const vis = await t.page.evaluate(() => getComputedStyle(document.getElementById('order')).visibility + '|' + document.getElementById('mode').textContent);
    await t.touch('touchStart', g.cx, g.cy); await t.frames(3); await t.touch('touchEnd'); await t.frames(2);
    const sv = await t.page.evaluate(() => { const r = document.querySelector('#serve i').getBoundingClientRect(); return [r.left + r.width / 2, r.top + r.height / 2]; });
    await t.page.touchscreen.tap(sv[0], sv[1]); await t.page.waitForTimeout(1500);
    const fd = await t.st();
    check('"Free pour": no order, no score — serve just offers a new cup', f.mode === 'free' && !f.guideOn && vis === 'hidden|Orders' && fd.done && fd.button && !fd.card, { mode: f.mode, orderChip: vis, newCupButton: fd.button, card: fd.card });
    await t.page.reload(); await t.page.waitForTimeout(800);
    check('mode is remembered', (await t.st()).mode === 'free');
    await t.page.touchscreen.tap(mb[0], mb[1]); await t.page.waitForTimeout(500);
    check('back to "Orders"', (await t.st()).mode === 'orders' && (await t.st()).guideOn);
    await t.ctx.close();
  }


  /* T. tools under the cup: pour style (auto-sway) and milk texture — each must make a visible difference */
  {
    const pour = async (si, ti, shot) => { const u = await open(browser, { tag: 'tool' + si + ti, dpr: shot ? 2 : 1, query: '?manual=1&level=3' });
      const r = await u.page.evaluate(([si, ti]) => { __latte.setTools(si, ti); const g = __latte.state().geo; let t = 0; const R = () => __latte.state().geo.rho * g.Ro;
        __latte.feed('down', g.cx, g.cy - R() * 0.45, 0); for (let f = 0; f < 60; f++) { t += 16.7; __latte.tick(16.7); }
        const spotOn = __latte.state().spot;
        for (let f = 0; f < 150; f++) { t += 16.7; __latte.feed('move', g.cx, g.cy - R() * 0.45 + R() * 0.9 * f / 150, t); __latte.tick(16.7); }
        __latte.feed('up'); __latte.tick(16.7);
        const m = __latte.mask(); let minX = 96, maxX = 0, n = 0, runs = 0; for (let i = 0; i < m.length; i++) if (m[i] === '1') { n++; const x = i % 96; if (x < minX) minX = x; if (x > maxX) maxX = x; }
        let inW = false; for (let y = 0; y < 96; y++) { const c = m[y * 96 + 48] === '1'; if (c && !inW) runs++; inW = c; }
        return { cells: n, width: maxX - minX + 1, bandsDownTheMiddle: runs, spotOn, spotAfter: __latte.state().spot, style: __latte.state().style, tex: __latte.state().tex }; }, [si, ti]);
      if (shot) await u.shot(shot); await u.ctx.close(); return r; };
    const straight = await pour(0, 1, 'tool-straight'), sway = await pour(1, 1, 'tool-sway'), wide = await pour(2, 1, 'tool-wide'), thin = await pour(0, 0, 'tool-thin'), thick = await pour(0, 2, 'tool-thick');
    check('pour style: Sway and Wide swing the stream by themselves (wider, layered) while the finger goes straight', sway.width > straight.width * 0.9 && wide.width > sway.width + 6 && sway.bandsDownTheMiddle >= 3 && wide.bandsDownTheMiddle >= 3 && straight.bandsDownTheMiddle <= 2, { straight, sway, wide });
    check('milk texture: Thin spreads further than Regular, Thick sits tighter', thin.cells > straight.cells * 1.12 && thick.cells < straight.cells * 0.9, { thin: thin.cells, regular: straight.cells, thick: thick.cells });
    check('pour spot is shown while pouring and gone after', straight.spotOn && !straight.spotAfter);
    // real taps cycle and remember
    const t = await open(browser, { tag: 'tooltap', query: '?level=4' });
    const c = id => t.page.evaluate(i => { const r = document.querySelector('#' + i + ' i').getBoundingClientRect(); return [r.left + r.width / 2, r.top + r.height / 2]; }, id);
    const s0 = await t.st(); const a = await c('style'), b = await c('tex');
    await t.page.touchscreen.tap(a[0], a[1]); await t.page.touchscreen.tap(b[0], b[1]); await t.page.waitForTimeout(150);
    const s1 = await t.st(); const lab = await t.page.evaluate(() => [document.querySelector('#style span').textContent, document.querySelector('#tex span').textContent]);
    await t.page.reload(); await t.page.waitForTimeout(800); const s2 = await t.st();
    check('tapping a tool changes it, the name tag follows, and it is remembered', s0.style === 'Straight' && s0.tex === 'Regular' && s1.style === 'Sway' && s1.tex === 'Thick' && lab[0] === 'Sway' && lab[1] === 'Thick' && s2.style === 'Sway' && s2.tex === 'Thick' && s1.fill === 0, { before: [s0.style, s0.tex], after: [s1.style, s1.tex], labels: lab, afterReload: [s2.style, s2.tex] });
    await t.shot('tools-390x844');
    await t.ctx.close();
  }

  /* G–H. a whole cup → finished → new cup */
  {
    const t = await open(browser, { tag: 'full', query: '?level=4&milk=3' });
    const g = (await t.st()).geo;
    await t.touch('touchStart', g.cx, g.cy + 20);
    const t0 = Date.now(); let s = await t.st(), k = 0;
    while (!s.done && Date.now() - t0 < 40000) { await t.touch('touchMove', g.cx + 50 * Math.sin(k++ / 2), g.cy + 20 - k * 0.6); s = await t.st(); }
    await t.page.waitForTimeout(1400); s = await t.st();
    const op = await t.page.evaluate(() => +getComputedStyle(document.getElementById('fresh')).opacity);
    check('milk runs out → cup is finished, "new cup" button appears', s.done && s.fill === 1 && s.button && op > 0.9 && s.down === false, { fill: s.fill, done: s.done, buttonOpacity: op, liquidRadius: s.geo.rho });
    await t.shot('done-390x844');
    const n1 = await t.grid();
    await t.touch('touchEnd'); await t.touch('touchStart', g.cx - 60, g.cy + 70); await t.frames(4); await t.touch('touchEnd'); await t.frames(2);
    const n2 = await t.grid();
    check('finished cup takes no more milk', n2 <= n1 + 1 && (await t.st()).fill === 1, { probesBefore: n1, after: n2 });
    const r = await t.page.evaluate(() => { const b = document.getElementById('fresh').getBoundingClientRect(); return [b.left + b.width / 2, b.top + b.height / 2, b.width]; });
    check('"new cup" button is finger-sized (≥44px)', r[2] >= 44, { size: r[2] });
    await t.page.touchscreen.tap(r[0], r[1]);
    await t.page.waitForTimeout(1500); await t.frames(2);
    s = await t.st(); const n3 = await t.grid();
    check('new cup: empty coffee again, button gone, can pour', s.fill === 0 && !s.done && !s.button && n3 === 0, { fill: s.fill, whiteProbes: n3 });
    await t.touch('touchStart', g.cx, g.cy); await t.frames(2);
    const w = (await t.white([[g.cx, g.cy]]))[0]; await t.touch('touchEnd');
    check('new cup pours again', w > 0.8, { white: w });
    await t.shot('new-cup-390x844');
    await t.ctx.close();
  }

  /* I. no WebGL */
  {
    const t = await open(browser, { tag: 'nogl', noGL: true });
    const v = await t.page.evaluate(() => { const n = document.getElementById('nogl'); const r = n.querySelector('svg').getBoundingClientRect(); return { cls: document.documentElement.classList.contains('nogl'), disp: getComputedStyle(n).display, svgW: r.width, text: n.querySelector('p').textContent.trim(), canvas: getComputedStyle(document.getElementById('cup')).display }; });
    check('no WebGL → a picture and one line instead of a blank page', v.cls && v.disp === 'flex' && v.svgW > 150 && v.text.length > 10 && v.canvas === 'none', v);
    await t.shot('no-webgl-390x844');
    await t.ctx.close();
  }

  /* K. first-run demonstration */
  {
    const t = await open(browser, { tag: 'demo', firstRun: true, query: '?level=4', wait: 300 });
    // the how-to sheet comes first; the cup does not take milk while it is open
    const i0 = await t.st(); const g0 = i0.geo;
    const steps = await t.page.evaluate(() => [...document.querySelectorAll('#intro .step p')].map(p => p.textContent.trim()));
    const sheet = await t.page.evaluate(() => { const r = document.querySelector('#intro .sheet').getBoundingClientRect(), b = document.getElementById('start').getBoundingClientRect(); return { in: r.left >= 0 && r.top >= 0 && r.right <= innerWidth && r.bottom <= innerHeight, bx: b.left + b.width / 2, by: b.top + b.height / 2, bh: b.height, anim: getComputedStyle(document.querySelector('#intro .a')).animationName }; });
    await t.touch('touchStart', g0.cx, g0.cy + g0.Ro * 0.95); await t.page.waitForTimeout(300); await t.touch('touchEnd');
    const blocked = (await t.st()).fill === 0 && (await t.grid()) === 0;
    await t.shot('intro-390x844');
    check('first visit: a 4-step how-to sheet (pictures + one line each), cup locked behind it', i0.intro && steps.length === 4 && steps.every(x => x.length > 10 && x.length < 60) && sheet.in && sheet.bh >= 44 && sheet.anim !== 'none' && blocked, { steps, sheetOnScreen: sheet.in, animation: sheet.anim, cupLocked: blocked });
    await t.page.touchscreen.tap(sheet.bx, sheet.by); await t.page.waitForTimeout(200);
    check('"Start" closes the how-to sheet', !(await t.st()).intro);
    let sawFinger = false, sawMilk = 0, fillDuring = 0;
    const t0 = Date.now();
    while (Date.now() - t0 < 9000) {
      const on = await t.page.evaluate(() => document.getElementById('finger').classList.contains('on'));
      const s = await t.st();
      if (on) { sawFinger = true; if (s.down) { const n = await t.grid(); if (n > sawMilk) { sawMilk = n; if (n > 12 && !fs.existsSync(path.join(OUT, 'demo-390x844.png'))) await t.shot('demo-390x844'); } } fillDuring = Math.max(fillDuring, s.fill); }
      if (sawFinger && !on && !s.demo && s.fade === 0) break;
      await t.page.waitForTimeout(60);
    }
    await t.page.waitForTimeout(900);
    const s = await t.st(), n = await t.grid();
    const seen = await t.page.evaluate(() => localStorage.getItem('cozy-latte.demo.v1'));
    check('first visit: a finger shows the pour once, uses none of your milk, hands back a clean cup', sawFinger && sawMilk > 5 && fillDuring === 0 && n === 0 && s.fill === 0 && seen === '1', { sawFinger, milkProbesDuringDemo: sawMilk, whiteAfter: n, remembered: seen });
    await t.page.reload(); await t.page.waitForTimeout(2500);
    const again = await t.page.evaluate(() => document.getElementById('finger').classList.contains('on') || __latte.state().demo);
    check('second visit: no how-to sheet, no demonstration', !again && !(await t.st()).intro);
    const hb = await t.page.evaluate(() => { const r = document.getElementById('help').getBoundingClientRect(); return [r.left + r.width / 2, r.top + r.height / 2]; });
    await t.page.touchscreen.tap(hb[0], hb[1]); await t.page.waitForTimeout(250);
    const re = (await t.st()).intro;
    await t.page.touchscreen.tap(sheet.bx, sheet.by); await t.page.waitForTimeout(250);
    check('"?" brings the how-to sheet back any time; Start closes it without replaying the finger', re && !(await t.st()).intro && !(await t.st()).demo);
    await t.ctx.close();
    // touching during the demo takes over at once
    const u = await open(browser, { tag: 'demo-interrupt', firstRun: true, query: '?level=4', wait: 300 });
    await u.page.evaluate(() => document.getElementById('start').click());
    const tt = Date.now(); while (!(await u.st()).down && Date.now() - tt < 6000) await u.page.waitForTimeout(40);
    const g = (await u.st()).geo;
    await u.touch('touchStart', g.cx + 40, g.cy + 40); await u.frames(2);
    const su = await u.st(); const fOn = await u.page.evaluate(() => document.getElementById('finger').classList.contains('on'));
    const w = (await u.white([[g.cx + 40, g.cy + 40]]))[0];
    await u.frames(20); const su2 = await u.st(); await u.touch('touchEnd');
    check('touching during the demonstration takes over immediately', !su.demo && !fOn && su.down && w > 0.8 && su2.fill > 0 && su2.fade === 0, { demo: su.demo, white: w, fill: su2.fill });
    await u.ctx.close();
  }

  /* L. fps readout */
  {
    const t = await open(browser, { tag: 'fps', query: '?fps=1&level=4', wait: 1600 });
    const txt = await t.page.evaluate(() => { const e = document.getElementById('fps'); return getComputedStyle(e).display + '|' + e.textContent; });
    check('?fps=1 shows the frame rate', /^block\|\d+ fps · grid \d+/.test(txt), txt);
    await t.ctx.close();
    const u = await open(browser, { tag: 'nofps', query: '?level=4' });
    check('no ?fps → no readout', (await u.page.evaluate(() => getComputedStyle(document.getElementById('fps')).display)) === 'none');
    // idle: stops drawing, wakes on touch
    await u.page.waitForTimeout(6500);
    const asleep = !(await u.st()).running; const g = (await u.st()).geo;
    await u.touch('touchStart', g.cx, g.cy); await u.page.waitForTimeout(400);
    const w = (await u.white([[g.cx, g.cy]]))[0]; const awake = (await u.st()).running; await u.touch('touchEnd');
    check('idle cup stops drawing (battery) and wakes on touch', asleep && awake && w > 0.8, { asleep, awake, white: w });
    await u.ctx.close();
  }

  /* N. self-tuning: unpinned, this slow machine must step the grid down by itself and keep the picture */
  {
    const t = await open(browser, { tag: 'tune', query: '', wait: 400 });
    const s0 = await t.st(), g = s0.geo;
    await t.touch('touchStart', g.cx, g.cy); await t.frames(6); await t.touch('touchEnd');
    const t0 = Date.now(); let s = await t.st();
    while (s.level < 5 && Date.now() - t0 < 60000) { await t.page.waitForTimeout(500); await t.touch('touchStart', g.cx + 30, g.cy); await t.touch('touchEnd'); s = await t.st(); }
    const w = await t.grid();
    check('slow device → steps the grid down by itself, picture survives', s0.level === 1 && s.level > s0.level && w > 3, { startLevel: s0.level, startGrid: s0.simN, endLevel: s.level, endGrid: s.simN, endMilkRes: s.dyeN, whiteProbesLeft: w });
    await t.ctx.close();
  }

  /* Q. dark mode */
  {
    const t = await open(browser, { tag: 'dark', dark: true, query: '?level=3' });
    const c = await t.page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue('--table').trim());
    const corner = (await t.white([[6, 6]]))[0];
    check('dark mode: dark table', c === '#212427' && corner < 0.2, { table: c, cornerBrightness: corner });
    await t.shot('dark-390x844');
    await t.ctx.close();
  }

  /* S. what a 60 fps phone would draw: virtual clock, 6 consecutive frames from the first touch, then the stages of one cup */
  {
    const t = await open(browser, { tag: 'strip', dpr: 2, query: '?manual=1&level=1' });
    const g = (await t.st()).geo, clip = { x: g.cx - g.Ro * 1.08, y: g.cy - g.Ro * 1.08, width: g.Ro * 2.16, height: g.Ro * 2.16 };
    const run = (fnSrc, T) => t.page.evaluate(({ fnSrc, T, g }) => { const fn = eval(fnSrc); let tt = 0, on = false;
      for (let f = 0; f < Math.round(T * 60); f++) { for (let k = 0; k < 2; k++) { tt += 1 / 120; const p = fn(tt); const R = __latte.state().geo.rho * g.Ro;
        if (!p) { if (on) { __latte.feed('up'); on = false; } continue; } const x = g.cx + p[0] * R, y = g.cy - p[1] * R;
        if (!on) { __latte.feed('down', x, y, tt * 1000); on = true; } else __latte.feed('move', x, y, tt * 1000); } __latte.tick(1000 / 60); } if (on) __latte.feed('up'); return __latte.state().fill; }, { fnSrc, T, g });
    // first touch, frame by frame (finger lands, then slides right at ~400 px/s)
    await t.page.evaluate(() => __latte.tick(1000 / 60)); await t.shot('f0', clip);
    const same = await t.page.evaluate(g => { const R = __latte.state().geo.rho * g.Ro, x = g.cx + R * 0.4, y = g.cy - R * 0.4; const a = __latte.white([[x, y]])[0]; const f0 = __latte.state().frames; __latte.feed('down', x, y, 1); __latte.tick(1000 / 60); const b = __latte.white([[x, y]])[0]; __latte.feed('up'); return { before: a, after: b, framesDrawn: __latte.state().frames - f0 }; }, g);
    check('milk is in the very first frame drawn after the finger lands (virtual 60 fps clock)', same.before < 0.35 && same.after > 0.8 && same.framesDrawn === 1, same);
    for (let f = 1; f <= 5; f++) {
      await t.page.evaluate(({ f, g }) => { const R = __latte.state().geo.rho * g.Ro, x = g.cx - R * 0.3 + (f - 1) * 6.7, y = g.cy + R * 0.3; __latte.feed(f === 1 ? 'down' : 'move', x, y, f * 16.7); __latte.tick(1000 / 60); }, { f, g });
      await t.shot('f' + f, clip);
    }
    await t.page.evaluate(() => { __latte.feed('up'); });
    t.firstFrames = [0, 1, 2, 3, 4, 5].map(i => path.join(OUT, `f${i}.png`));
    const strip = async (name, files, hgt) => { const p = await t.ctx.newPage(); const tags = files.map(f => `<img src="data:image/png;base64,${fs.readFileSync(f).toString('base64')}" style="height:${hgt}px;display:block">`).join('');
      await p.setContent(`<body style="margin:0;background:#777"><div id=s style="display:inline-flex;gap:3px">${tags}</div>`); await p.waitForTimeout(300); await (await p.$('#s')).screenshot({ path: path.join(OUT, name + '.png') }); await p.close(); files.forEach(f => fs.unlinkSync(f)); };
    await strip('strip-first-touch-6-frames', t.firstFrames, 330);
    // one cup in stages
    const u = await open(browser, { tag: 'stages', dpr: 2, query: '?manual=1&level=1' });
    t.page = u.page; t.shot = u.shot;
    await t.page.evaluate(() => __latte.tick(1000 / 60));
    await run('(t=>[0,-0.3])', 1.2); await u.shot('s1', clip);
    await run('(t=>{const k=t/2.4;return[0.3*Math.sin(t*Math.PI*2*3.2)*(1-0.3*k),-0.3+0.75*k]})', 1.2); await u.shot('s2', clip);
    await run('(t=>{const u=t+1.2,k=u/2.4;return[0.3*Math.sin(u*Math.PI*2*3.2)*(1-0.3*k),-0.3+0.75*k]})', 1.2); await u.shot('s3', clip);
    await run('(t=>t<0.15?null:[0,0.6-1.3*(t-0.15)/0.45])', 0.6); await u.shot('s4', clip);
    await run('(t=>null)', 1.0); await u.shot('s5', clip);
    await strip('strip-one-cup', [1, 2, 3, 4, 5].map(i => path.join(OUT, `s${i}.png`)), 330);
    await u.shot('pattern-390x844');
    check('frame strips written (first touch ×6 frames, one cup in 5 stages)', fs.existsSync(path.join(OUT, 'strip-first-touch-6-frames.png')) && fs.existsSync(path.join(OUT, 'strip-one-cup.png')));
    await u.ctx.close(); await t.ctx.close();
  }

  check('console errors / page errors / outside requests: none', problems.length === 0, problems.slice(0, 8));
  await browser.close();
  const pass = results.filter(r => r.pass).length;
  fs.writeFileSync(path.join(OUT, 'report.json'), JSON.stringify({ when: new Date().toISOString(), base: BASE, pass, total: results.length, note: 'Headless Chromium + software WebGL (~15 fps). Verifies behaviour only; hand feel on a real phone is NOT verified.', results }, null, 1));
  console.log(`\n${pass}/${results.length} passed`);
  process.exit(pass === results.length ? 0 : 1);
})().catch(e => { console.error(e); process.exit(2); });
