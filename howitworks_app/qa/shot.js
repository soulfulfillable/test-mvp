// quick screenshots: node shot.js <out-dir>
const { chromium } = require('/opt/node-tools/node_modules/playwright-core');
const path = require('path');
(async () => {
  const out = process.argv[2];
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--no-sandbox'] });
  const pg = await b.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 3, hasTouch: true, isMobile: true });
  const errs = []; pg.on('console', m => m.type() === 'error' && errs.push(m.text())); pg.on('pageerror', e => errs.push(String(e)));
  await pg.goto('file://' + path.resolve(__dirname, '../../docs/how-it-works.html'));
  for (const key of ['microwave', 'toilet', 'zipper']) {
    await pg.click('[data-tab=library]'); await pg.click(`[data-open=${key}]`);
    await pg.waitForTimeout(200);
    await (await pg.$('#sheet')).screenshot({ path: `${out}/${key}-diagram.png` });
  }
  console.log('errors', errs);
  await b.close();
})();
