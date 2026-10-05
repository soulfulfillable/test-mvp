// 스토어 스크린샷 원본(raw/, 1170×2532 = 아이폰 13)을 웹 빌드로 찍는다. 숫자는 전부 실제 측정값:
// 크롬 가짜 마이크에 합성 잡음 파일(make_audio.py)을 넣어 앱이 진짜로 계산한다.
// 준비: python3 make_audio.py (wav 는 커밋하지 않는다 — 인자로 폴더를 넘긴다)
//       docs 를 http://localhost:8765/test-mvp/ 로 띄우기 (decibel_app/qa/web-check.js 머리말 참고)
// 실행: NODE_EXTRA_CA_CERTS=/root/.ccr/ca-bundle.crt node capture.js <wav 폴더> → node make.js
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const fs = require('fs'), path = require('path'), os = require('os');

const URL = 'http://localhost:8765/test-mvp/decibel-app/index.html';
const CK = path.resolve(__dirname, '../../flutter/build/web/canvaskit');
const WAV = path.resolve(process.argv[2] || '.');
const RAW = path.join(__dirname, 'raw');
const PROFILE = fs.mkdtempSync(path.join(os.tmpdir(), 'glance-db-shots-'));
fs.mkdirSync(RAW, { recursive: true });

async function open(wav) {
  const ctx = await chromium.launchPersistentContext(PROFILE, {
    executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
    args: ['--no-sandbox', '--use-fake-device-for-media-stream', '--use-fake-ui-for-media-stream',
      `--use-file-for-fake-audio-capture=${path.join(WAV, wav)}`],
    viewport: { width: 390, height: 844 }, deviceScaleFactor: 3, hasTouch: true, isMobile: true,
    timezoneId: 'America/New_York', locale: 'en-US',
  });
  await ctx.grantPermissions(['microphone'], { origin: 'http://localhost:8765' });
  const p = ctx.pages()[0] || await ctx.newPage();
  await p.route(/^https:\/\//, async route => {
    const url = route.request().url();
    const m = /flutter-canvaskit\/[0-9a-f]+\/(.*)$/.exec(url);
    if (m && fs.existsSync(path.join(CK, m[1]))) {
      const f = path.join(CK, m[1]);
      return route.fulfill({ status: 200, body: fs.readFileSync(f), headers: { 'content-type': f.endsWith('.wasm') ? 'application/wasm' : 'text/javascript', 'access-control-allow-origin': '*' } });
    }
    try {
      const r = await fetch(url);
      await route.fulfill({ status: r.status, body: Buffer.from(await r.arrayBuffer()), headers: { 'content-type': r.headers.get('content-type') || 'application/octet-stream', 'access-control-allow-origin': '*' } });
    } catch (e) { await route.abort(); }
  });
  const errs = [];
  p.on('pageerror', e => errs.push(e.message));
  p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
  await p.goto(URL);
  await p.getByRole('button').first().waitFor({ timeout: 30000 });
  await p.waitForTimeout(1200);
  return { ctx, p, errs };
}

const tap = async (p, name) => { await p.getByRole('button', { name }).first().click(); await p.waitForTimeout(800); };
const back = (p) => tap(p, 'Back');
const shot = async (p, name) => {
  // 마우스가 버튼 위에 머물면 툴팁("Back")이 찍힌다 → 빈 곳으로 치우고 툴팁이 사라질 때까지 기다린다
  await p.mouse.move(195, 820);
  await p.waitForTimeout(2000);
  await p.screenshot({ path: path.join(RAW, name) });
  console.log('shot', name);
};
const wait = (p, s) => p.waitForTimeout(s * 1000);

(async () => {
  const errs = [];
  // 1) 일정한 청소기 소리: 측정 화면·비유표·설정, 짧은 기록 하나
  let { ctx, p, errs: e1 } = await open('steady.wav');
  await tap(p, /Continue/);
  await wait(p, 8);
  await shot(p, 'meter.png');
  await tap(p, /Sound level guide/);
  await shot(p, 'guide.png');
  await back(p);
  await tap(p, /Settings/);
  await shot(p, 'settings.png');
  await back(p);
  await tap(p, /^Reset$/);
  errs.push(...e1);
  await ctx.close();

  // 2) 밤 소음(조용 → 쿵쿵·음악 → 조용) 90초: 리포트·기록
  ({ ctx, p, errs: e1 } = await open('night.wav'));
  await tap(p, /^Start$/);
  await wait(p, 92);
  await tap(p, /^Pause$/);
  await tap(p, /^Report$/);
  await p.getByRole('textbox').first().click();
  await p.keyboard.type('Upstairs neighbor, Apt 4B');
  await p.mouse.click(195, 30); // 키보드 닫기 (제목 줄)
  await wait(p, 1.5);
  await shot(p, 'report.png');
  await back(p);
  await tap(p, /^Reset$/);
  await tap(p, /^Start$/);
  await wait(p, 12);
  await tap(p, /^Reset$/);
  await tap(p, /History/);
  await shot(p, 'history.png');
  errs.push(...e1);
  await ctx.close();
  fs.rmSync(PROFILE, { recursive: true, force: true });
  console.log('console errors:', errs.length);
  errs.forEach(e => console.log('  ERR', e));
})().catch(e => { console.error('FAILED', e); process.exit(1); });
