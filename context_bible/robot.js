// Context Bible preview robot — "Quiet Journal" reading flow.
// Opening question + John 1:51 → "Understand this verse" (in-flow explanation) → View sources → close,
// then the held notes (46, 47) in the full passage. Real touch/mouse at real coordinates only (no JS clicks).
// Checks: no overlap, reading position kept on close, no sideways scroll, console errors 0.
// Google Fonts is blocked in the cloud sandbox: if FONT_DIR is set, the font CSS/files are served locally
// (same families) so screenshots show the real type; otherwise the CSS request gets an empty 200.
// Run: FONT_DIR=/path/to/ttf node context_bible/robot.js
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');

const DOCS = path.resolve(__dirname, '../docs');
const OUT = path.resolve(DOCS, 'context-bible/qa');
const FONT_DIR = process.env.FONT_DIR;
fs.mkdirSync(OUT, { recursive: true });
const types = { '.html': 'text/html', '.json': 'application/json', '.ttf': 'font/ttf' };
const server = http.createServer((q, s) => {
  const u = decodeURIComponent(q.url.split('?')[0].split('#')[0]);
  const f = u.startsWith('/__fonts/') && FONT_DIR ? path.join(FONT_DIR, path.basename(u)) : path.join(DOCS, u);
  fs.readFile(f, (e, b) => { if (e) { s.writeHead(404); s.end(); } else { s.writeHead(200, { 'content-type': types[path.extname(f)] || 'text/plain' }); s.end(b); } });
});
const log = []; let pass = 0, fail = 0;
const ok = (c, m) => { c ? pass++ : fail++; log.push(`${c ? 'PASS' : 'FAIL'} ${m}`); };
const QUESTION = 'Why does Jesus talk about angels going up and down?';

async function run(browser, base, name, opts, shots) {
  const ctx = await browser.newContext(opts);
  const page = await ctx.newPage();
  const fontCss = FONT_DIR ? `
    @font-face{font-family:"Instrument Serif";font-style:normal;src:url(${base}__fonts/InstrumentSerif-Regular.ttf.ttf)}
    @font-face{font-family:"Instrument Serif";font-style:italic;src:url(${base}__fonts/InstrumentSerif-Italic.ttf.ttf)}
    @font-face{font-family:"DM Sans";font-weight:100 1000;src:url(${base}__fonts/DMSans.ttf)}` : '';
  await page.route('https://fonts.googleapis.com/**', r => r.fulfill({ status: 200, contentType: 'text/css', body: fontCss }));
  const errors = [];
  page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('pageerror', e => errors.push(String(e)));
  const touch = !!opts.hasTouch, W = opts.viewport.width;
  const tapAt = (x, y) => touch ? page.touchscreen.tap(x, y) : page.mouse.click(x, y);
  const tapEl = async sel => {
    const b = await page.locator(sel).boundingBox();
    await tapAt(b.x + b.width / 2, b.y + b.height / 2);
  };
  const box = sel => page.locator(sel).boundingBox();
  const docTop = sel => page.evaluate(s => document.querySelector(s).getBoundingClientRect().top + scrollY, sel);
  const noSideways = async what => { const sw = await page.evaluate(() => document.documentElement.scrollWidth); ok(sw <= W, `[${name}] no sideways scroll ${what} (${sw} ≤ ${W})`); };

  await page.goto(base + 'context-bible/index.html');
  await page.waitForSelector('#understand');
  await page.evaluate(() => document.fonts.ready);
  const q = (await page.locator('h1.q').innerText()).replace(/\s+/g, ' ').trim();
  ok(q === QUESTION, `[${name}] opening question is exact ("${q}")`);
  ok(await page.locator('h1.q em').innerText() === 'going up and down?', `[${name}] final phrase is italic`);
  const verse = await page.locator('#lead-verse p').innerText();
  ok(verse.startsWith('He said to him, “Most certainly') && verse.endsWith('on the Son of Man.”'), `[${name}] John 1:51 (WEB) right under the question`);
  const qb = await box('h1.q'), vb = await box('#lead-verse'), bb = await box('#understand');
  ok(qb.y + qb.height <= vb.y && vb.y + vb.height <= bb.y, `[${name}] question → verse → button, no overlap`);
  ok(bb.height >= 52, `[${name}] button min-height 52 (${Math.round(bb.height)})`);
  ok(bb.y + bb.height <= opts.viewport.height, `[${name}] question, verse and button fit the first screen (button bottom ${Math.round(bb.y + bb.height)} ≤ ${opts.viewport.height})`);
  ok(await page.locator('#explain').getAttribute('aria-hidden') === 'true', `[${name}] explanation starts closed`);
  await noSideways('on load');
  if (shots) await page.screenshot({ path: path.join(OUT, `${name}-1-first.png`) });

  // open explanation (in document flow, under the button)
  const y0 = await page.evaluate(() => scrollY), btnTop0 = await docTop('#understand');
  await tapEl('#understand');
  await page.waitForTimeout(450);
  ok((await page.locator('#understand').innerText()).trim() === 'Close explanation', `[${name}] button turns into "Close explanation"`);
  ok(await page.locator('#explain-h').isVisible() && (await page.locator('#explain-h').innerText()) === 'The earlier story.', `[${name}] explanation opens with "The earlier story."`);
  const paras = await page.locator('.explain > p').count();
  ok(paras === 2, `[${name}] explanation is two short paragraphs (${paras})`);
  const eb = await box('#explain-h'), bb2 = await box('#understand');
  ok(eb.y >= bb2.y + bb2.height, `[${name}] explanation sits under the button (does not cover question/verse)`);
  ok(Math.abs(await docTop('#understand') - btnTop0) < 1, `[${name}] button did not move when opening`);
  ok(await page.locator('.explain').innerText().then(t => t.includes('Tim Keller')), `[${name}] Keller attribution is in the explanation`);
  if (shots) { await page.evaluate(() => document.getElementById('understand').scrollIntoView({ block: 'start' })); await page.screenshot({ path: path.join(OUT, `${name}-2-explanation.png`) }); }

  // View sources (collapsed by default)
  ok(await page.locator('#lead-src-wrap').evaluate(e => !e.classList.contains('open')), `[${name}] sources collapsed by default`);
  await page.evaluate(() => document.getElementById('lead-src-btn').scrollIntoView({ block: 'center' }));
  await tapEl('#lead-src-btn');
  await page.waitForTimeout(1300);
  const src = await page.locator('#lead-src').innerText();
  ok(src.includes('GENESIS 28:12') || src.includes('Genesis 28:12'), `[${name}] sources show Genesis 28:12`);
  ok(await page.locator('#lead-src a[href="https://gospelinlife.com/sermon/you-shall-see-heaven-open/"]').count() === 1, `[${name}] sources link the sermon page`);
  ok(src.includes('Transcript read; official audio not yet checked.') && src.includes('Review draft.'), `[${name}] status label kept (not marked verified)`);
  ok(await page.locator('#lead-src mark.hl.on').count() >= 2, `[${name}] shared words highlighted in both passages`);
  await noSideways('with sources open');
  if (shots) await page.locator('.explain').screenshot({ path: path.join(OUT, `${name}-3-sources.png`) });
  await tapEl('#lead-src-btn'); await page.waitForTimeout(450);
  ok(await page.locator('#lead-src-wrap').evaluate(e => !e.classList.contains('open')), `[${name}] Hide sources closes`);

  // close: reading position kept
  await page.evaluate(() => document.getElementById('understand').scrollIntoView({ block: 'center' }));
  const yBefore = await page.evaluate(() => scrollY), screenTop = (await box('#understand')).y;
  await tapEl('#understand'); await page.waitForTimeout(450);
  ok(await page.locator('#explain').getAttribute('aria-hidden') === 'true', `[${name}] Close explanation collapses it`);
  const yAfter = await page.evaluate(() => scrollY), screenTop2 = (await box('#understand')).y;
  ok(Math.abs(yAfter - yBefore) < 2 && Math.abs(screenTop2 - screenTop) < 2, `[${name}] closing keeps the reading position (scroll ${yBefore}→${yAfter})`);

  // held notes further down
  for (const id of ['v46', 'v47']) {
    const pt = await page.evaluate(id => {
      const a = document.querySelector(`.mark[data-note="${id}"] .anc`); a.scrollIntoView({ block: 'center' });
      const r = a.getClientRects()[0]; return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
    }, id);
    await tapAt(pt.x, pt.y);
    ok(await page.locator(`#note-${id}`).isVisible(), `[${name}] ${id}: tap in the passage opens the held note`);
    await page.evaluate(id => document.querySelector(`#note-${id} .src-btn`).scrollIntoView({ block: 'center' }), id);
    await tapEl(`#note-${id} .src-btn`);
    ok(await page.locator(`#src-${id} .src`).count() >= 1, `[${name}] ${id}: View sources shows the cited verses`);
    await tapEl(`#note-${id} .x`);
    ok(await page.locator(`#note-${id}`).count() === 0, `[${name}] ${id}: × closes`);
  }
  await noSideways('at the end');
  ok(errors.length === 0, `[${name}] console errors: ${errors.length}${errors.length ? ' — ' + errors.join(' | ') : ''}`);
  await ctx.close();
}

(async () => {
  await new Promise(r => server.listen(0, r));
  const base = `http://127.0.0.1:${server.address().port}/`;
  const browser = await chromium.launch();
  const phone = { viewport: { width: 390, height: 844 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true };
  await run(browser, base, 'phone390', phone, true);
  await run(browser, base, 'phone390-dark', { ...phone, colorScheme: 'dark' }, true);
  await run(browser, base, 'phone320', { ...phone, viewport: { width: 320, height: 640 }, deviceScaleFactor: 2 }, true);
  await run(browser, base, 'phone320-dark', { ...phone, viewport: { width: 320, height: 640 }, deviceScaleFactor: 2, colorScheme: 'dark' }, false);
  await run(browser, base, 'desktop', { viewport: { width: 1280, height: 860 } }, true);
  await run(browser, base, 'desktop-dark', { viewport: { width: 1280, height: 860 }, colorScheme: 'dark' }, false);
  await browser.close(); server.close();
  log.push(`\nTOTAL ${pass} pass / ${fail} fail${FONT_DIR ? '' : ' (fonts: fallbacks)'}`);
  fs.writeFileSync(path.join(OUT, 'robot-result.txt'), log.join('\n') + '\n');
  console.log(log.filter(l => !l.startsWith('PASS')).join('\n'));
  process.exit(fail ? 1 : 0);
})();
