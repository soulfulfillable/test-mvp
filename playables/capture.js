// 9개 HTML 게임을 아이폰 13 크기(390×844 @3x = 1170×2532)로 실제 플레이하며 스크린샷.
// 사용: node playables/capture.js [게임이름...]   → docs/assets/games/full/<게임>.png + 콘솔 에러 보고
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');
const ROOT = path.resolve(__dirname, '..', 'docs');
const OUT = path.join(ROOT, 'assets', 'games', 'full');
const url = (f) => 'file://' + path.join(ROOT, f + '.html');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function taps(page, pts, gap) { for (const [x, y] of pts) { await page.touchscreen.tap(x, y); await sleep(gap); } }
const rnd = (a, b) => a + Math.random() * (b - a);

const PLANS = {
  'mole-mash': async (p) => { await p.touchscreen.tap(195, 500); await sleep(1800);
    for (let i = 0; i < 10; i++) { await p.touchscreen.tap(rnd(80, 310), rnd(330, 620)); await sleep(260); } await sleep(150); },
  'chicken-cross': async (p) => { await p.touchscreen.tap(195, 500); await sleep(900);
    for (let i = 0; i < 6; i++) { await p.touchscreen.tap(195, 500); await sleep(300); } await sleep(40); },
  'daily-stairs': async (p) => {
    // 게임과 같은 시드(날짜 KST)로 오늘 코스를 계산해 정확한 쪽을 탭한다
    const dirs = await p.evaluate(() => {
      function pad2(n) { return (n < 10 ? '0' : '') + n; }
      const t = new Date(Date.now() + 9 * 3600 * 1000);
      const key = '' + t.getUTCFullYear() + pad2(t.getUTCMonth() + 1) + pad2(t.getUTCDate());
      let h = 2166136261; const str = 'daily-stairs-' + key;
      for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
      let a = h >>> 0; const rng = () => { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
      const dirs = [], xs = [0];
      while (dirs.length < 60) { const pos = xs[xs.length - 1]; const pLeft = 0.5 + Math.max(-0.34, Math.min(0.34, pos * 0.085)); const d = rng() < pLeft ? -1 : 1; dirs.push(d); xs.push(pos + d); }
      return dirs;
    });
    await p.touchscreen.tap(195, 500); await sleep(2400);
    for (let i = 0; i < 16; i++) { await p.touchscreen.tap(dirs[i] < 0 ? 100 : 290, 600); await sleep(170); } await sleep(120); },
  'icecream-stack': async (p) => { await p.touchscreen.tap(195, 500); await sleep(800);
    for (let i = 0; i < 6; i++) { await p.touchscreen.tap(195, 500); await sleep(650); } await sleep(150); },
  'poop-dodge': async (p) => { await p.touchscreen.tap(195, 500); await sleep(2600); },
  'firechase': async (p) => { await p.click('#start-btn'); await sleep(600);
    for (let i = 0; i < 10; i++) { await p.touchscreen.tap(rnd(60, 330), rnd(300, 700)); await sleep(230); } await sleep(100); },
  'catdoku': async (p) => { await p.click('#start-btn', { force: true }); await sleep(700);
    const b = await p.$('#board'); const bb = await b.boundingBox(); const n = 7; const cw = bb.width / n;
    // 고양이 2마리 (탭 사이클: 1탭 ✕, 2탭 🐱)
    for (const [r, c] of [[0, 1], [2, 4]]) { const x = bb.x + c * cw + cw / 2, y = bb.y + r * cw + cw / 2; await p.touchscreen.tap(x, y); await sleep(150); await p.touchscreen.tap(x, y); await sleep(350); } await sleep(300); },
  'cats-vs-dogs': async (p) => { await p.click('#start-btn', { force: true }); await sleep(700);
    const b = await p.$('#board'); const bb = await b.boundingBox(); const n = 6; const cw = bb.width / n;
    await p.click('#pal-cat'); await sleep(150);
    // 빈 칸 몇 개에 고양이
    const cells = await p.$$eval('#board > *', (els) => els.map((e) => e.textContent.trim()));
    let placed = 0; for (let i = 0; i < cells.length && placed < 3; i++) { if (cells[i] === '') { const r = Math.floor(i / n), c = i % n; await p.touchscreen.tap(bb.x + c * cw + cw / 2, bb.y + r * cw + cw / 2); await sleep(300); placed++; } } await sleep(300); },
  'coloring-book': async (p) => { await sleep(400);
    const items = await p.$$('#grid > *'); await items[3].tap(); await sleep(900);
    const pal = await p.$$('#palette > *'); if (pal[0]) { await pal[0].tap(); await sleep(200); }
    const vp = await p.$('#art-vp'); const bb = await vp.boundingBox();
    for (let i = 0; i < 40; i++) { await p.touchscreen.tap(bb.x + rnd(30, bb.width - 30), bb.y + rnd(30, bb.height - 30)); await sleep(90); }
    if (pal[1]) { await pal[1].tap(); await sleep(200); }
    for (let i = 0; i < 30; i++) { await p.touchscreen.tap(bb.x + rnd(30, bb.width - 30), bb.y + rnd(30, bb.height - 30)); await sleep(90); }
    if (pal[2]) { await pal[2].tap(); await sleep(200); }
    for (let i = 0; i < 30; i++) { await p.touchscreen.tap(bb.x + rnd(30, bb.width - 30), bb.y + rnd(30, bb.height - 30)); await sleep(90); } await sleep(400); },
};

(async () => {
  const names = process.argv.slice(2).length ? process.argv.slice(2) : Object.keys(PLANS);
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch({ args: ['--no-sandbox'] });
  const report = [];
  for (const name of names) {
    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true,
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1' });
    const page = await ctx.newPage();
    const errors = []; const ext = [];
    page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
    page.on('console', (m) => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
    page.on('request', (r) => { if (!r.url().startsWith('file://')) ext.push(r.url()); });
    try {
      await page.goto(url(name), { waitUntil: 'load' }); await sleep(500);
      await PLANS[name](page);
      await page.screenshot({ path: path.join(OUT, name + '.png') });
      const png = fs.statSync(path.join(OUT, name + '.png')).size;
      report.push({ name, ok: true, errors, ext, png });
    } catch (e) { report.push({ name, ok: false, errors: errors.concat(['script: ' + e.message]), ext }); }
    await ctx.close();
  }
  await browser.close();
  for (const r of report) console.log((r.ok ? 'OK  ' : 'FAIL') + ' ' + r.name.padEnd(15) + ' errors=' + r.errors.length + ' external=' + r.ext.length + (r.png ? ' png=' + Math.round(r.png / 1024) + 'KB' : '') + (r.errors.length ? '\n     ' + r.errors.join('\n     ') : '') + (r.ext.length ? '\n     ext: ' + r.ext.join(', ') : ''));
})();
