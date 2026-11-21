// itch.io check: each package unzipped and served on its own origin, played inside a cross-origin iframe
// (itch embeds games from html-classic.itch.zone). Off Playgama the Bridge must fall back to its mock platform:
// no ad buttons, no world board, saves in localStorage, zero console errors. Also renders the 630x500 covers.
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path'), { execSync } = require('child_process');
const ROOT = __dirname, WORK = process.argv[2] || '/tmp/itchcheck';
const results = []; const check = (n, ok, d) => { results.push({ n, ok: !!ok, d }); console.log((ok ? 'PASS ' : 'FAIL ') + n + (d ? '  — ' + d : '')); };
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.ogg': 'audio/ogg', '.mp3': 'audio/mpeg', '.ttf': 'font/ttf', '.png': 'image/png', '.md': 'text/plain', '.svg': 'image/svg+xml' };
function serve(dir) { return new Promise((res) => { const s = http.createServer((q, r) => { const f = path.join(dir, decodeURIComponent(q.url.split('?')[0].split('#')[0]).replace(/^\/$/, '/index.html')); fs.readFile(f, (e, b) => { if (e) { r.writeHead(404); r.end(); return; } r.writeHead(200, { 'Content-Type': TYPES[path.extname(f)] || 'application/octet-stream' }); r.end(b); }); }); s.listen(0, '127.0.0.1', () => res(s)); }); }
async function framed(browser, gameUrl, w, h) {
  const parentDir = fs.mkdtempSync(path.join(WORK, 'parent-')); const parent = await serve(parentDir);
  const ctx = await browser.newContext({ viewport: { width: w + 40, height: h + 40 }, hasTouch: true });
  const page = await ctx.newPage(); const errs = [];
  page.on('console', (m) => { if (m.type() === 'error') errs.push(m.text()); }); page.on('pageerror', (e) => errs.push(String(e)));
  const html = `<!doctype html><body style="margin:20px;background:#333"><iframe id="g" src="${gameUrl}" width="${w}" height="${h}" style="border:0" allow="autoplay; fullscreen"></iframe>`;
  fs.writeFileSync(path.join(parentDir, 'index.html'), html);
  await page.goto('http://127.0.0.1:' + parent.address().port + '/index.html');
  const frame = () => page.frames().find((f) => f.url().startsWith(gameUrl.split('#')[0]));
  await page.waitForFunction(() => true); for (let i = 0; i < 50 && !(frame() && await frame().evaluate(() => !!window.__game).catch(() => false)); i++) await page.waitForTimeout(100);
  return { ctx, page, frame, errs, parent };
}
(async () => {
  fs.rmSync(WORK, { recursive: true, force: true }); fs.mkdirSync(WORK, { recursive: true });
  const docs = path.join(ROOT, '../../docs/itch'), shots = path.join(ROOT, 'shots'); fs.mkdirSync(shots, { recursive: true });
  const browser = await chromium.launch({ args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required'] });
  for (const [game, zip] of [['molemash', 'molemash.zip'], ['coloring', 'coloring.zip']]) {
    const dir = path.join(WORK, game); fs.mkdirSync(dir); execSync(`unzip -q ${path.join(docs, zip)} -d ${dir}`);
    const srv = await serve(dir), url = `http://127.0.0.1:${srv.address().port}/index.html#debug`;
    const { ctx, page, frame, errs } = await framed(browser, url, 450, 800);
    const f = frame(); if (!f) { console.log('frames:', page.frames().map((x) => x.url()).join(' , ')); }
    const plat = await f.evaluate(() => window.bridge && window.bridge.platform.id);
    check(`${game}: Bridge runs on its mock platform inside the iframe`, plat === 'mock', plat);
    check(`${game}: no rewarded ads offered`, await f.evaluate(() => !window.bridge.advertisement.isRewardedSupported));
    if (game === 'molemash') {
      check('molemash: opens straight into level 1', await f.evaluate(() => window.__game.state === 1 && window.__game.level === 1));
      const box = await page.locator('#g').boundingBox();
      await page.mouse.click(box.x + 225, box.y + 500); await page.waitForTimeout(300);
      await f.evaluate(() => { window.__game.setScore(17); window.__game.gameOver('hearts'); }); await page.waitForTimeout(800);
      const o = await f.evaluate(() => ({ panel: !document.getElementById('over-panel').classList.contains('hidden'), cont: !document.getElementById('continue-btn').classList.contains('hidden'), world: !document.getElementById('world-title').classList.contains('hidden'), signin: !document.getElementById('signin-btn').classList.contains('hidden'), ls: Object.keys(localStorage).length }));
      check('molemash: results panel without continue-ad, world board or sign-in', o.panel && !o.cont && !o.world && !o.signin, JSON.stringify(o));
      check('molemash: progress saved in localStorage through the Bridge', o.ls > 0, 'keys ' + o.ls);
      await page.screenshot({ path: path.join(shots, 'molemash-iframe-over.png') });
      await page.reload(); await page.waitForTimeout(1500);
      const best = await frame().evaluate(() => window.__game && window.__game.store.progress.best).catch(() => null);
      check('molemash: best score survives a reload', best === 17, String(best));
    } else {
      await page.waitForTimeout(500);
      check('coloring: gallery shows, no "Unlock now (ad)" button', await f.evaluate(() => window.__game.home && !document.getElementById('unlock-btn')));
      await f.evaluate(() => window.__game.open(window.__game.PICS[0].id)); await page.waitForTimeout(500);
      await f.evaluate(() => { const g = window.__game, rg = g.cur.pic.rg; for (let i = 0; i < 12 && i < rg.length; i++) { g.select(rg[i].c - 1); g.tap(i); } });
      await page.waitForTimeout(900);
      const c = await f.evaluate(() => ({ filled: window.__game.cur.filled.size, boost: !document.getElementById('boost-btn').classList.contains('hidden'), ls: Object.keys(localStorage).length, id: window.__game.cur.pic.id }));
      check('coloring: painting works, no "Fill this color (ad)" button', c.filled > 0 && !c.boost, JSON.stringify(c));
      await page.screenshot({ path: path.join(shots, 'coloring-iframe-play.png') });
      await f.evaluate(() => window.__game.saveStore && window.__game.saveStore(['progress'])); await page.waitForTimeout(500);
      await page.reload(); await page.waitForTimeout(1800);
      const kept = await frame().evaluate((id) => { const s = window.__game.store.progress; return JSON.stringify(s).length; }, c.id).catch(() => 0);
      const filledAfter = await frame().evaluate((id) => { window.__game.open(id); return window.__game.cur.filled.size; }, c.id).catch(() => -1);
      check('coloring: painted pieces survive a reload', filledAfter === c.filled, `${c.filled} → ${filledAfter}`);
    }
    check(`${game}: zero console errors in the itch-style iframe`, errs.length === 0, errs.slice(0, 3).join(' | '));
    await ctx.close();
    // 630x500 itch cover from the game's own cover mode
    const cctx = await browser.newContext({ viewport: { width: 630, height: 500 }, deviceScaleFactor: 2 });
    const cp = await cctx.newPage(); await cp.goto(`http://127.0.0.1:${srv.address().port}/index.html#debug&cover`); await cp.waitForTimeout(1500);
    await cp.screenshot({ path: path.join(shots, game + '-cover-630x500.png'), clip: { x: 0, y: 0, width: 630, height: 500 }, scale: 'css' });
    await cctx.close(); srv.close();
  }
  await browser.close();
  const fail = results.filter((r) => !r.ok).length;
  fs.writeFileSync(path.join(ROOT, 'check-report.json'), JSON.stringify({ when: new Date().toISOString(), results }, null, 1));
  console.log(`\n${results.length - fail} passed, ${fail} failed`); process.exit(fail ? 1 : 0);
})();
