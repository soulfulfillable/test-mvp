#!/usr/bin/env node
// Knock Chain — phone-resolution stills of the live game (Night 1, aim state and the "found" moment) for the
// art page: docs/knockchain-art/night-portrait.png (1170×2532), night-square.png (1170×1170), night-found.png.
// Run after ./build.sh: NODE_PATH=/opt/node-tools/node_modules node playables/knockchain/tools/stills.cjs
'use strict';
const http = require('http'); const fs = require('fs'); const path = require('path');
const { chromium } = require('playwright');
const ROOT = path.resolve(__dirname, '..', '..', '..', 'docs', 'knockchain');
const OUT = path.resolve(__dirname, '..', '..', '..', 'docs', 'knockchain-art');
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.ogg': 'audio/ogg', '.mp3': 'audio/mpeg', '.glb': 'model/gltf-binary', '.md': 'text/markdown' };
const sol = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'qa', 'solutions.json'), 'utf8'))[0];
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const srv = http.createServer((req, res) => { let p = decodeURIComponent(req.url.split('?')[0]); if (p === '/') p = '/index.html'; const f = path.join(ROOT, p); if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); return res.end(); } res.writeHead(200, { 'Content-Type': MIME[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(res); });
srv.listen(0, '127.0.0.1', async () => {
  const base = `http://127.0.0.1:${srv.address().port}/`;
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1243/chrome-linux64/chrome', args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  for (const [name, w, h] of [['night-portrait', 390, 844], ['night-square', 390, 390]]) {
    const ctx = await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 3 }); const p = await ctx.newPage();
    const errs = []; p.on('console', (m) => { if (m.type() === 'error') errs.push(m.text()); }); p.on('pageerror', (e) => errs.push(e.message));
    await p.goto(base); await p.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 90000 }); await p.evaluate(() => KC.start(0)); await p.waitForFunction(() => KC.state === 'aim', null, { timeout: 30000 }); await sleep(600);
    await p.screenshot({ path: path.join(OUT, name + '.png') }); console.log(name, w * 3 + '×' + h * 3, 'errors', errs.length);
    if (name === 'night-portrait') { // the found moment
      await p.evaluate((s) => { KC.noPanel = true; KC.shoot(s.dx, s.dy); }, sol); await p.waitForFunction(() => KC.state === 'won', null, { timeout: 20000 }); await sleep(2000);
      await p.screenshot({ path: path.join(OUT, 'night-found.png') }); console.log('night-found', 'errors', errs.length);
    }
    await ctx.close();
  }
  await b.close(); srv.close();
});
