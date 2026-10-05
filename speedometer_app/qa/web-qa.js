// 웹 미리보기 자동 점검 — 폰 크기 헤드리스 Chromium 에 가짜 GPS 를 주입해 화면별로 누르고 스크린샷을 찍는다.
// 실행 (리포 루트에서):
//   (cd docs && python3 -m http.server 8765 &) ;
//   NODE_EXTRA_CA_CERTS=/root/.ccr/ca-bundle.crt node speedometer_app/qa/web-qa.js
// 결과: speedometer_app/qa/shots/*.png + 콘솔에 단계별 PASS/FAIL. 콘솔 에러가 하나라도 있으면 실패.
//
// 가짜 GPS: navigator.geolocation 을 바꿔 끼워 window.__gps = {mph, acc, on, speed:true|false} 대로 1초마다 측정값을 보낸다.
// 권한: window.__perm = 'prompt'|'granted'|'denied'.
const fs = require('fs'), path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const SHOTS = path.join(__dirname, 'shots');
const BASE = 'http://localhost:8765/test-mvp/speedometer-app/index.html';
fs.mkdirSync(SHOTS, { recursive: true });

const { open } = require('./harness.js');

const results = [];
const check = (name, ok, extra = '') => { results.push({ name, ok }); console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${extra ? '  — ' + extra : ''}`); };
const shot = async (p, name) => { await p.waitForTimeout(400); await p.screenshot({ path: path.join(SHOTS, name + '.png') }); };
/** 화면의 접근성 글자 전부 (aria-label + 텍스트). */
const labels = p => p.evaluate(() => [...document.querySelectorAll('flt-semantics')].map(e => (e.getAttribute('aria-label') || '') + ' ' + (e.textContent || '')).join(' | '));
const has = async (p, re) => re.test(await labels(p));
const btn = (p, name) => p.getByRole('button', { name }).first();
const tap = async (p, name) => { await btn(p, name).click(); await p.waitForTimeout(700); };
const gps = (p, g) => p.evaluate(g => Object.assign(window.__gps, g), g);

(async () => {
  // ── 1. 첫 실행: 안전 안내 → 위치 허용 → 진짜처럼 달리기 ──
  let { b, p, errs } = await open(BASE);
  check('welcome: safety notice shown', await has(p, /Before you drive/));
  await shot(p, '01-welcome');
  await tap(p, /I Understand/);
  await p.waitForTimeout(1500);
  check('after allow: speedometer screen', await has(p, /Car mode/));
  await gps(p, { mph: 0 });
  await p.waitForTimeout(2500);
  check('standing still shows 0', await has(p, /Speed 0 MPH/), (await labels(p)).slice(0, 160));
  for (const v of [15, 30, 45]) { await gps(p, { mph: v }); await p.waitForTimeout(1100); }
  await p.waitForTimeout(1200);
  check('driving 45 mph shows 45', await has(p, /Speed 45 MPH/));
  check('GPS good shown with accuracy', await has(p, /GPS · ±5 m/));
  await shot(p, '02-digital-45mph');

  await tap(p, /Show gauge/);
  await p.waitForTimeout(1500);
  check('gauge view', await has(p, /Gauge 45 MPH/));
  await shot(p, '03-gauge');
  await tap(p, /Show digits/);

  await tap(p, /Unit MPH/);
  await p.waitForTimeout(1200);
  check('unit tap → km/h (45 mph = 72 km/h)', await has(p, /Speed 72 KM\/H/));
  await tap(p, /Unit KM\/H/);

  // ── 속도 경고 ──
  await tap(p, /Speed alert off/);
  await shot(p, '04-alert-sheet');
  const sw = p.getByRole('switch').first();
  if (await sw.count()) await sw.click(); else await p.getByText('Alert me above').click();
  await p.waitForTimeout(600);
  check('alert switch on → 65', await has(p, /65/));
  await tap(p, /^Done$/);
  check('alert button shows 65 MPH', await has(p, /Speed alert 65 MPH/));
  await gps(p, { mph: 72 });
  await p.waitForTimeout(3500);
  check('over 65 → red screen label', await has(p, /Over your 65 MPH alert/));
  await shot(p, '05-over-limit-red');
  await gps(p, { mph: 55 });
  await p.waitForTimeout(2500);
  check('back under → label gone', !(await has(p, /Over your/)));

  // ── HUD ──
  await gps(p, { mph: 55 });
  await tap(p, /HUD mode/);
  await p.waitForTimeout(1200);
  check('HUD open with exit button', await has(p, /Exit HUD/));
  await shot(p, '06-hud-mirrored');
  await tap(p, /Exit HUD/);
  check('HUD closed', await has(p, /Car mode/));

  // ── 설정 ──
  await tap(p, /Settings/);
  await shot(p, '07-settings');
  check('settings sheet', await has(p, /Privacy Policy/));
  await tap(p, /^Done$/);

  // ── 모드 ──
  await tap(p, /Run mode/);
  await gps(p, { mph: 7.5 });
  await p.waitForTimeout(2600);
  check('run mode pace 8:00 /mi', await has(p, /Speed 8:00 MIN\/MI/));
  check('run trip is separate (no car max as pace)', !(await has(p, /BEST 0:[0-9]/)), (await labels(p)).match(/BEST[^|]*/)?.[0]);
  await shot(p, '08-run-pace');
  await tap(p, /Boat mode/);
  await gps(p, { mph: 23 });
  await p.waitForTimeout(2600);
  check('boat mode knots (23 mph = 20 kn)', await has(p, /Speed 20 KNOTS/));
  await shot(p, '09-boat-knots');
  await tap(p, /Bike mode/);
  await gps(p, { mph: 15.3 });
  await p.waitForTimeout(2600);
  check('bike 15.3 mph', await has(p, /Speed 15\.3 MPH/));
  await tap(p, /Car mode/);

  // ── 신호 ──
  await gps(p, { mph: 40, acc: 60 });
  await p.waitForTimeout(2500);
  check('weak GPS shown honestly', await has(p, /Weak GPS · ±60 m/));
  await shot(p, '10-weak-gps');
  await gps(p, { acc: 5, speed: false, mph: 40 });
  await p.waitForTimeout(3500);
  check('no reported speed → derived from position (40)', await has(p, /Speed (39|40|41) MPH/));
  await gps(p, { on: false });
  await p.waitForTimeout(7000);
  check('signal lost → No GPS signal + --', (await has(p, /No GPS signal/)) && (await has(p, /Speed -- MPH/)));
  await shot(p, '11-no-signal');
  await gps(p, { on: true, speed: true, mph: 30 });
  await p.waitForTimeout(2500);
  check('signal back → 30', await has(p, /Speed 30 MPH/));

  // ── 기록 초기화 ──
  await tap(p, /Reset trip/);
  await shot(p, '12-reset-dialog');
  await tap(p, /^Reset$/);
  check('trip reset → 0.00 mi', await has(p, /DIST 0\.0[0-9] mi/));
  check('no console errors (main flow)', errs.length === 0, errs.join(' / '));
  await b.close();

  // ── 2. 위치 거절 → 안내 + 다시 시도 ──
  ({ b, p, errs } = await open(BASE, { perm: 'denied' }));
  await tap(p, /I Understand/);
  await p.waitForTimeout(1200);
  check('denied → "Location is off for this app"', await has(p, /Location is off for this app/));
  await shot(p, '13-denied');
  await p.evaluate(() => { window.__perm = 'prompt'; });
  await tap(p, /Try Again/);
  await p.waitForTimeout(2500);
  check('Try Again after allowing → speedometer', await has(p, /Speed .* MPH/));
  check('no console errors (denied flow)', errs.length === 0, errs.join(' / '));
  await b.close();

  // ── 3. 데모 주행 ──
  ({ b, p, errs } = await open(BASE + '?demo=1'));
  await tap(p, /I Understand/);
  await p.waitForTimeout(16000);
  check('demo shows DEMO tag', await has(p, /DEMO/));
  await shot(p, '14-demo');
  check('no console errors (demo)', errs.length === 0, errs.join(' / '));
  await b.close();

  // ── 4. 작은 화면 (iPhone SE) ──
  ({ b, p, errs } = await open(BASE, { viewport: { width: 375, height: 667 }, perm: 'granted' }));
  await tap(p, /I Understand/);
  await gps(p, { mph: 63 });
  await p.waitForTimeout(3000);
  check('iPhone SE shows speed', await has(p, /Speed 63 MPH/));
  await shot(p, '15-iphone-se');
  check('no console errors (SE)', errs.length === 0, errs.join(' / '));
  await b.close();

  const failed = results.filter(r => !r.ok);
  console.log(`\n${results.length - failed.length}/${results.length} PASS`);
  process.exit(failed.length ? 1 : 0);
})().catch(e => { console.error(e); process.exit(2); });
