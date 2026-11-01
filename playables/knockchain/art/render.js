// Knock Chain stage 1 — screenshot the still renders at real phone resolution.
// Usage: NODE_PATH=/opt/node-tools/node_modules node playables/knockchain/art/render.js [a|b|sheet ...]
//   → playables/knockchain/art/out/<variant>-portrait.png (1170×2532), <variant>-square.png (1170×1170),
//     cat-sheet-b.png / cat-sheet-a.png (sprite sheets, 4 states)
// Chromium: /opt/pw-browsers/chromium-1243/chrome-linux64/chrome, WebGL via SwiftShader (needed for render-b).
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const DIR = __dirname;
const OUT = path.join(DIR, 'out');
const CHROME = process.env.CHROME || '/opt/pw-browsers/chromium-1243/chrome-linux64/chrome';
const SIZES = [
  { name: 'portrait', w: 390, h: 844 }, // iPhone 13 logical → 1170×2532 @3x
  { name: 'square', w: 390, h: 390 },   // → 1170×1170 @3x
];

async function shoot(browser, variant, size, extraQuery, outName) {
  const ctx = await browser.newContext({ viewport: { width: size.w, height: size.h }, deviceScaleFactor: 3 });
  const page = await ctx.newPage();
  const errors = [];
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
  const url = 'file://' + path.join(DIR, `render-${variant}.html`) + `?mode=${size.name}${extraQuery || ''}`;
  await page.goto(url);
  await page.waitForFunction(() => document.title.startsWith('ready') || document.title === 'error', null, { timeout: 120000 });
  if (await page.title() === 'error') { errors.push('page reported error'); }
  await page.waitForTimeout(300);
  const file = path.join(OUT, outName || `${variant}-${size.name}.png`);
  await page.screenshot({ path: file, omitBackground: !!extraQuery });
  await ctx.close();
  console.log(`${path.relative(process.cwd(), file)}  ${size.w * 3}×${size.h * 3}  console errors: ${errors.length}`);
  errors.forEach((e) => console.log('   ! ' + e));
  return errors.length;
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const want = process.argv.slice(2);
  const variants = want.length ? want : ['a', 'b', 'sheet'];
  const browser = await chromium.launch({
    executablePath: CHROME,
    args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--allow-file-access-from-files', '--ignore-gpu-blocklist'],
  });
  let errs = 0;
  for (const v of variants) {
    if (v === 'sheet') {
      // sprite sheets: 4 states × 1 frame, transparent background, 4 cells of 200×200 CSS px (600×600 device px)
      for (const src of ['a', 'b']) {
        if (!fs.existsSync(path.join(DIR, `render-${src}.html`))) continue;
        errs += await shoot(browser, src, { name: 'sheet', w: 800, h: 200 }, '&sheet=1', `cat-sheet-${src}.png`);
      }
      continue;
    }
    for (const s of SIZES) errs += await shoot(browser, v, s);
  }
  await browser.close();
  if (errs) { console.log(`\n${errs} console error(s)`); process.exit(1); }
})().catch((e) => { console.error(e); process.exit(1); });
