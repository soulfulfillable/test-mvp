// Quick stills: serve docs/popcorn, open at a size, optionally start a level / pull, screenshot. node tools/stills.cjs out.png [w h] [level] [dx dy]
const http = require('http'), fs = require('fs'), path = require('path');
const { chromium } = require('playwright');
const ROOT = path.resolve(__dirname, '..', '..', '..', 'docs', 'popcorn');
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.ogg': 'audio/ogg', '.mp3': 'audio/mpeg', '.md': 'text/markdown' };
const [out, w = 390, h = 844, level = 0, dx, dy, wait = 0] = process.argv.slice(2);
(async () => {
  const srv = http.createServer((req, res) => { let p = decodeURIComponent(req.url.split('?')[0]); if (p === '/') p = '/index.html'; const f = path.join(ROOT, p); if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); return res.end(); } res.writeHead(200, { 'Content-Type': MIME[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(res); });
  await new Promise((r) => srv.listen(0, '127.0.0.1', r));
  const browser = await chromium.launch({ executablePath: process.env.CHROME || '/opt/pw-browsers/chromium-1243/chrome-linux64/chrome', args: ['--no-sandbox'] });
  const ctx = await browser.newContext({ viewport: { width: +w, height: +h }, deviceScaleFactor: 1, hasTouch: true, isMobile: true });
  const page = await ctx.newPage(); const errs = [];
  page.on('console', (m) => { if (m.type() === 'error') errs.push(m.text()); }); page.on('pageerror', (e) => errs.push(e.message));
  await page.goto(`http://127.0.0.1:${srv.address().port}/`); try { await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 15000 }); } catch (e) { console.log('NOT READY', errs); process.exit(1); }
  await page.evaluate((l) => { localStorage.clear(); PC.start(+l); }, level);
  if (dx !== undefined) { await page.evaluate(([x, y]) => PC.shoot(+x, +y), [dx, dy]); }
  await page.waitForTimeout(+wait || 400);
  await page.screenshot({ path: out }); console.log('saved', out, 'errors:', errs.length ? errs : 0, 'state', await page.evaluate(() => PC.state));
  await browser.close(); srv.close();
})();
