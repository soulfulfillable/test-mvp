// Arrow Topple test robot. Run from the repo root:
//   NODE_PATH=/opt/node-tools/node_modules node playables/arrow-topple/robot.cjs
// Loads docs/arrow-topple/ in headless Chromium, plays with real touch drags (CDP), writes qa/report.json + screenshots.
const { chromium } = require('playwright');
const path = require('path'), fs = require('fs'), { execSync } = require('child_process');
const QA = path.join(__dirname, 'qa'), URL = 'file://' + path.resolve(__dirname, '../../docs/arrow-topple/index.html');
const SIZES = [[320, 568], [360, 640], [375, 667], [390, 844], [393, 852], [414, 896], [430, 932], [768, 1024], [820, 1180], [1024, 768], [844, 390], [667, 375], [1280, 720], [1920, 1080]];
const SOL = JSON.parse(fs.readFileSync(path.join(QA, 'solutions.json'), 'utf8'));   // from tools/solve.cjs: one known-good aim per level
const WIN = SOL[0].shots[0];
const DUD = [-0.15, 0.15];                   // into the grass, short of the tower
const results = []; const errors = []; const external = [];
const ok = (name, pass, detail) => { results.push({ name, pass: !!pass, detail: detail === undefined ? '' : detail }); console.log((pass ? 'PASS ' : 'FAIL ') + name + (detail !== undefined ? ' — ' + JSON.stringify(detail) : '')); };
const inside = (r, W, H, m = 0) => r.x >= -m && r.y >= -m && r.x + r.w <= W + m && r.y + r.h <= H + m;
const overlap = (a, b) => a.x < b.x + b.w && b.x < a.x + a.w && a.y < b.y + b.h && b.y < a.y + a.h;

async function open(browser, w, h, touch = true) {
  const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 2, hasTouch: touch, isMobile: touch });
  const pg = await ctx.newPage();
  pg.on('console', m => { if (m.type() === 'error') errors.push(`${w}x${h} ${m.text()}`); });
  pg.on('pageerror', e => errors.push(`${w}x${h} PAGE ${e.message}`));
  pg.on('request', r => { if (!r.url().startsWith('file://')) external.push(r.url()); });
  await pg.goto(URL); await pg.waitForFunction(() => window.__AT);
  await pg.evaluate(() => { try { localStorage.removeItem('at_level'); localStorage.removeItem('at_mute'); } catch (e) { } __AT.go(0); });
  const cdp = await ctx.newCDPSession(pg);
  return { ctx, pg, cdp, w, h };
}
const info = s => s.pg.evaluate(() => __AT.info());
async function drag(s, angle, power, opt = {}) {      // press, pull back opposite to the aim, let go
  const i = await info(s), d = power * i.maxPull, x0 = opt.x0 || s.w * 0.6, y0 = opt.y0 || s.h * 0.45;
  const x1 = x0 - Math.cos(angle) * d, y1 = y0 + Math.sin(angle) * d, N = 8;
  const T = (type, x, y) => s.cdp.send('Input.dispatchTouchEvent', { type, touchPoints: type === 'touchEnd' ? [] : [{ x, y }] });
  await T('touchStart', x0, y0);
  for (let k = 1; k <= N; k++) { await T('touchMove', x0 + (x1 - x0) * k / N, y0 + (y1 - y0) * k / N); await s.pg.waitForTimeout(16); }
  if (opt.hold) await opt.hold();
  await T('touchEnd');
}
async function until(s, fn, ms = 12000) { const t0 = Date.now(); for (;;) { const i = await info(s); if (fn(i)) return i; if (Date.now() - t0 > ms) return i; await s.pg.waitForTimeout(60); } }

(async () => {
  fs.mkdirSync(QA, { recursive: true });
  const browser = await chromium.launch({ args: ['--no-sandbox'] });

  // 1. every screen size: first frame shows archer, tower, sheep; nothing off-screen; HUD clear; hand demo starts by itself
  for (const [w, h] of SIZES) {
    const s = await open(browser, w, h); await s.pg.waitForTimeout(350);
    const i = await info(s), mute = await s.pg.evaluate(() => { const r = document.getElementById('mute').getBoundingClientRect(); return { x: r.x, y: r.y, w: r.width, h: r.height }; });
    const probs = [];
    if (!inside(i.archer, w, h)) probs.push('archer off-screen');
    if (!inside(i.tower, w, h)) probs.push('tower off-screen');
    i.sheep.forEach((r, k) => { if (!inside(r, w, h, 6)) probs.push('sheep' + k + ' off-screen'); });
    if (overlap(i.hud, mute)) probs.push('hud/mute overlap');
    if (overlap(i.hud, i.tower) || overlap(mute, i.tower)) probs.push('hud over tower');
    if (overlap(i.hud, i.archer)) probs.push('hud over archer');
    if (i.wolvesUp !== i.wolves || i.arrowsLeft !== 3 || i.state !== 'play') probs.push('bad start state');
    const towerH = i.tower.h / h, archerH = i.archer.h / h;
    await s.pg.screenshot({ path: path.join(QA, `first-${w}x${h}.png`) });
    const d = await until(s, x => x.demo >= 1, 2500);
    if (d.demo < 1) probs.push('demo hand never started');
    ok(`size ${w}x${h}: first frame`, probs.length === 0, probs.length ? probs : { towerH: +towerH.toFixed(2), archerH: +archerH.toFixed(2), wolfPx: Math.round(i.S * 1.2) });
    await s.ctx.close();
  }

  // 2. iPhone 390x844, touch only
  let s = await open(browser, 390, 844);
  await until(s, x => x.demoActive, 2500); await s.pg.waitForTimeout(1300);
  await s.pg.screenshot({ path: path.join(QA, 'demo-hand-390x844.png') });
  ok('demo hand shows without touching (no text on screen)', (await info(s)).demoActive);
  let mid = null;
  await drag(s, WIN[0], 0.04, { hold: async () => { mid = await info(s); } });
  let i = await info(s);
  ok('tiny drag (under 14px) does not shoot', i.shots === 0 && i.arrowsLeft === 3, { shots: i.shots });
  ok('touching hides the demo hand', !mid.demoActive && !i.demoActive);
  await drag(s, WIN[0], WIN[1], { hold: async () => { mid = await info(s); await s.pg.screenshot({ path: path.join(QA, 'aiming-390x844.png') }); } });
  ok('dragging back shows the dotted path, but only the first part (stops well short of the tower)', mid.aiming && mid.preview >= 5 && mid.preview <= 12 && mid.previewEndX < mid.focus - 4, { dots: mid.preview, endsAtX: +mid.previewEndX.toFixed(1), towerX: mid.focus });
  // collapse film: screenshots as fast as they come
  const frames = []; const t0 = Date.now(); let sawSlow = false, maxZoom = 1, flyFull = false, preHit = false;
  for (let k = 0; k < 70; k++) { const f = path.join(QA, `_f${String(k).padStart(2, '0')}.png`); await s.pg.screenshot({ path: f }); frames.push(f); const q = await info(s); sawSlow = sawSlow || q.slowNow; if (q.sticks === 0 && q.timeScale > 0.95) flyFull = true; if (q.preHit >= 1) preHit = true; maxZoom = Math.max(maxZoom, q.zoom); if (q.state === 'won') break; }
  i = await until(s, x => x.state !== 'play');
  ok('one good arrow topples the tower → win', i.state === 'won' && i.shots === 1, { state: i.state, shots: i.shots, arrowsLeft: i.arrowsLeft });
  ok('slow-motion + zoom fired exactly once at the topple', i.slowmo === 1 && sawSlow && maxZoom > 1.05, { slowmo: i.slowmo, sawSlow, maxZoom: +maxZoom.toFixed(3) });
  ok('arrow flies at normal speed, then slows just before the hit', flyFull && preHit, { flyFull, preHit });
  ok('arrow stuck where it hit', i.sticks >= 1, { sticks: i.sticks });
  const fpWin = i.fp;
  try {
    const pick = Array.from({ length: 8 }, (_, k) => frames[Math.round(k * (frames.length - 1) / 7)]);
    execSync(`ffmpeg -y -loglevel error ${pick.map(f => `-i ${f}`).join(' ')} -filter_complex "${pick.map((_, k) => `[${k}:v]scale=390:-1[v${k}]`).join(';')};${pick.map((_, k) => `[v${k}]`).join('')}hstack=inputs=${pick.length}" ${path.join(QA, 'topple-strip.png')}`);
    ok('topple film strip written', true, { frames: pick.length, ms: Date.now() - t0 });
  } catch (e) { ok('topple film strip written', false, String(e.message).slice(0, 200)); }
  frames.forEach(f => fs.unlinkSync(f));
  i = await until(s, x => x.again && x.fleeing === 2 && x.next, 6000);
  await s.pg.screenshot({ path: path.join(QA, 'win-390x844.png') });
  ok('wolves run off and the next-level button appears', i.again && i.next && i.fleeing === 2, { again: i.again, next: i.next, fleeing: i.fleeing });
  const fpA = (await until(s, x => x.fp5, 9000)).fp5;
  await s.pg.evaluate(() => __AT.go(0)); await s.pg.waitForTimeout(100);
  i = await info(s);
  ok('restart resets the round', i.state === 'play' && i.arrowsLeft === 3 && i.wolvesUp === 2 && !i.again, { state: i.state, arrowsLeft: i.arrowsLeft });

  // same pull again → same ending
  await drag(s, WIN[0], WIN[1]); i = await until(s, x => x.state !== 'play'); await until(s, x => x.fleeing === 2, 5000);
  const fpB = (await until(s, x => x.fp5, 9000)).fp5;
  if (fpA !== fpB) console.log('A', fpA, '\nB', fpB);
  ok('same pull twice ends the same way (settled positions identical)', i.state === 'won' && fpA && fpA === fpB, { state: i.state, same: fpA === fpB, len: fpA.length }); await s.pg.evaluate(() => __AT.go(0)); await s.pg.waitForTimeout(100);

  // fail path: three arrows into the grass
  for (let k = 0; k < 3; k++) { await until(s, x => x.canFire, 5000); await drag(s, DUD[0], DUD[1]); i = await info(s); if (k === 0) { const g = await until(s, x => x.ghost > 0, 3000); ok('last flight path stays as a faint trail', g.ghost > 2, { points: g.ghost }); await s.pg.screenshot({ path: path.join(QA, 'ghost-trail-390x844.png') }); } }
  ok('arrow counter went 3 → 0', i.arrowsLeft === 0 && i.shots === 3, { arrowsLeft: i.arrowsLeft });
  i = await until(s, x => x.state !== 'play', 12000); await s.pg.waitForTimeout(700);
  const lost = await info(s); await s.pg.screenshot({ path: path.join(QA, 'lose-390x844.png') });
  ok('three misses → lose, wolves still up, replay offered', lost.state === 'lost' && lost.wolvesUp === 2 && lost.again, { state: lost.state, wolvesUp: lost.wolvesUp, again: lost.again });
  await s.cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: 200, y: 400 }] }); await s.cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
  await s.pg.waitForTimeout(200); i = await info(s);
  ok('after losing, one tap anywhere restarts the same level', i.state === 'play' && i.arrowsLeft === 3 && i.level === 0, { state: i.state, level: i.level });

  // win with the 2nd arrow after a miss
  await drag(s, DUD[0], DUD[1]); await until(s, x => x.canFire, 5000); await drag(s, WIN[0], WIN[1]); i = await until(s, x => x.state !== 'play');
  ok('miss then hit → win on the 2nd arrow', i.state === 'won' && i.shots === 2, { state: i.state, shots: i.shots });
  ok('page never scrolled during drags (sheet guard)', i.scrollY === 120 || i.scrollY === 0, { scrollY: i.scrollY });

  // all levels in a row: solver's aim by touch, then the next button
  await s.pg.evaluate(() => __AT.go(0)); await s.pg.waitForTimeout(150);
  for (let L = 0; L < SOL.length; L++) {
    let q = await info(s); const startOk = q.level === L && q.state === 'play' && q.arrowsLeft === 3 && q.wolvesUp === q.wolves;
    const mute = await s.pg.evaluate(() => { const r = document.getElementById('mute').getBoundingClientRect(); return { x: r.x, y: r.y, w: r.width, h: r.height }; });
    const fits = inside(q.tower, 390, 844) && !overlap(q.hud, q.tower) && !overlap(mute, q.tower);
    await s.pg.waitForTimeout(250); await s.pg.screenshot({ path: path.join(QA, `level${L + 1}-390x844.png`) });
    for (const sh of SOL[L].shots) { await until(s, x => x.canFire && (x.shots === 0 || x.asleep), 9000); await drag(s, sh[0], sh[1]); }
    q = await until(s, x => x.state !== 'play', 15000);
    ok(`level ${L + 1}: fits the screen, solver aim wins by touch`, startOk && fits && q.state === 'won', { startOk, fits, state: q.state, shots: q.shots, wolves: q.wolves, slowmo: q.slowmo });
    q = await until(s, x => x.again, 5000);
    if (L === SOL.length - 1) await s.pg.screenshot({ path: path.join(QA, 'last-level-win-390x844.png') });
    const wantNext = L < SOL.length - 1;
    await s.pg.tap('#again'); await s.pg.waitForTimeout(200); const z = await info(s);
    ok(wantNext ? `level ${L + 1} → next button opens level ${L + 2}` : 'last level → replay button goes back to level 1', q.next === wantNext && z.level === (L + 1) % SOL.length && z.state === 'play', { next: q.next, level: z.level });
  }
  await s.pg.evaluate(() => __AT.go(2)); await s.pg.waitForTimeout(100);
  await drag(s, DUD[0], DUD[1]); await until(s, x => x.canFire, 5000); await s.pg.evaluate(() => 0);
  { // progress survives a reload: finish level 3 → reload → level 4
    await drag(s, SOL[2].shots[0][0], SOL[2].shots[0][1]); let q = await until(s, x => x.state !== 'play', 15000); await until(s, x => x.again, 5000); await s.pg.tap('#again'); await s.pg.waitForTimeout(150);
    await s.pg.reload(); await s.pg.waitForFunction(() => window.__AT); const z = await info(s);
    ok('progress is saved: reload comes back on the next level', q.state === 'won' && z.level === 3, { won: q.state, level: z.level, demo: z.demoActive });
  }

  // mute persists
  await s.pg.tap('#mute'); const m1 = (await info(s)).muted; await s.pg.reload(); await s.pg.waitForFunction(() => window.__AT); const m2 = (await info(s)).muted;
  ok('mute toggles and survives reload', m1 === true && m2 === true, { m1, m2 }); await s.pg.tap('#mute');
  await s.ctx.close();

  // 3. landscape phone, touch
  s = await open(browser, 844, 390); await drag(s, WIN[0], WIN[1], { x0: 500, y0: 100 }); i = await until(s, x => x.state !== 'play');
  ok('landscape 844x390 touch: win', i.state === 'won', { state: i.state, fpSame: i.fp === fpWin });
  await s.pg.waitForTimeout(300); await s.pg.screenshot({ path: path.join(QA, 'win-844x390.png') }); await s.ctx.close();

  // 4. small phone, touch
  s = await open(browser, 320, 568); await drag(s, WIN[0], WIN[1], { x0: 200, y0: 200 }); i = await until(s, x => x.state !== 'play');
  ok('small phone 320x568 touch: win', i.state === 'won', { state: i.state }); await s.ctx.close();

  // 5. desktop mouse
  s = await open(browser, 1280, 720, false); i = await info(s); const d = WIN[1] * i.maxPull;
  await s.pg.mouse.move(700, 300); await s.pg.mouse.down(); await s.pg.mouse.move(700 - Math.cos(WIN[0]) * d, 300 + Math.sin(WIN[0]) * d, { steps: 6 }); await s.pg.mouse.up();
  i = await until(s, x => x.state !== 'play'); ok('desktop mouse drag: win', i.state === 'won', { state: i.state }); await s.ctx.close();

  // 6. real phone pixel size 1170x2532 @3x
  { const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 3, hasTouch: true, isMobile: true }); const pg = await ctx.newPage(); await pg.goto(URL); await pg.waitForFunction(() => window.__AT); await pg.evaluate(() => __AT.go(0)); await pg.waitForTimeout(400); await pg.screenshot({ path: path.join(QA, 'first-1170x2532.png') }); await ctx.close(); ok('first screen at 1170x2532 saved', true); }

  ok('console errors 0 / page errors 0', errors.length === 0, errors.slice(0, 5));
  ok('external requests 0', external.length === 0, external.slice(0, 5));
  await browser.close();
  const pass = results.filter(r => r.pass).length;
  fs.writeFileSync(path.join(QA, 'report.json'), JSON.stringify({ when: new Date().toISOString(), pass, total: results.length, results }, null, 1));
  console.log(`\n${pass}/${results.length} passed`);
  process.exit(pass === results.length ? 0 : 1);
})().catch(e => { console.error(e); process.exit(2); });
