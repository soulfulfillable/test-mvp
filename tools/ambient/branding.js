// 채널 배너(2560x1440)·영상 썸네일(1280x720) 만들기: 빗방울 효과 화면(ambient-glass) 한 장 + 글자
// node tools/ambient/branding.js <photo> <mood> <out-dir>
const fs = require('fs'), path = require('path');
let pw; try { pw = require('playwright-core'); } catch (e) { pw = require('/opt/node-tools/node_modules/playwright-core'); }
const [photo, mood, outDir] = process.argv.slice(2);
const ROOT = path.resolve(__dirname, '../..');
const CHROME = process.env.CHROME || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
(async () => {
  const b = await pw.chromium.launch({ executablePath: fs.existsSync(CHROME) ? CHROME : undefined, args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--allow-file-access-from-files'] });
  const p = await b.newPage({ viewport: { width: 2560, height: 1440 } });
  await p.goto('file://' + path.join(ROOT, `docs/ambient-glass.html?static=1&mood=${mood}&w=2560&photo=${encodeURIComponent(path.relative(path.join(ROOT, 'docs'), path.resolve(photo)))}`));
  await p.evaluate(() => window.__glass.ready);
  const bg = await p.evaluate(() => window.__glass.frame(7, 0.95));
  const font = "'Helvetica Neue', 'Liberation Sans', Arial, sans-serif";
  const shot = async (w, h, html, file) => {
    await p.setViewportSize({ width: w, height: h });
    await p.setContent(`<html><body style="margin:0;width:${w}px;height:${h}px;overflow:hidden;background:#000 url(${bg}) center/cover;font-family:${font};color:#fff">${html}</body></html>`);
    await p.screenshot({ path: path.join(outDir, file), type: 'jpeg', quality: 92 });
  };
  fs.mkdirSync(outDir, { recursive: true });
  // 배너: 모든 기기에서 보이는 가운데 1546x423 안에만 글자
  await shot(2560, 1440, `
    <div style="position:absolute;inset:0;background:radial-gradient(ellipse at center, rgba(0,0,0,.45), rgba(0,0,0,.1) 60%)"></div>
    <div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:1546px;text-align:center">
      <div style="font-size:120px;font-weight:700;letter-spacing:-2px;text-shadow:0 4px 30px rgba(0,0,0,.5)">Peblit</div>
      <div style="font-size:44px;margin-top:14px;opacity:.92;text-shadow:0 2px 16px rgba(0,0,0,.6)">Rain, soft piano &amp; quiet rooms · every sound made by code</div>
    </div>`, 'banner.jpg');
  // 썸네일: 큰 글자 두 줄, 왼쪽 아래
  await shot(1280, 720, `
    <div style="position:absolute;inset:0;background:linear-gradient(90deg, rgba(0,0,0,.55), rgba(0,0,0,0) 65%)"></div>
    <div style="position:absolute;left:64px;bottom:72px">
      <div style="font-size:96px;font-weight:700;line-height:1;letter-spacing:-1px;text-shadow:0 4px 24px rgba(0,0,0,.5)">Rain &amp;<br>Soft Piano</div>
      <div style="font-size:40px;margin-top:22px;font-weight:700;color:#ffd9a8;text-shadow:0 2px 14px rgba(0,0,0,.6)">1.5 HOURS · NO MID-ROLL ADS</div>
    </div>`, 'thumb-rain-1042.jpg');
  await b.close();
  console.log('done');
})();
