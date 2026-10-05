// App Store 6.7형(1290×2796) 스크린샷: 웹 미리보기(?shots=1, 광고 자리 빈칸)에 가짜 GPS 를 넣어 화면을 찍고(raw/, 1170×2532)
// 위에 큰 제목을 얹는다. 심사 1.4.4(과속 조장 금지) 때문에 속도는 45~66 mph 만 쓴다.
// 실행 (리포 루트): (docs 를 http://localhost:8765/test-mvp/ 로 띄운 뒤)
//   NODE_EXTRA_CA_CERTS=/root/.ccr/ca-bundle.crt node speedometer_app/store/screenshots/make.js
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const fs = require('fs'), path = require('path');
const H = require('../../qa/harness.js');
const RAW = path.join(__dirname, 'raw');
const URL = 'http://localhost:8765/test-mvp/speedometer-app/index.html?shots=1';

const SHOTS = [
  ['1-digital.png', '01-big-numbers.png', 'Big, clear speed', 'Read it at a glance — MPH or km/h'],
  ['2-gauge.png', '02-gauge.png', 'Classic gauge', 'Smooth needle, honest GPS signal'],
  ['3-hud.png', '03-hud.png', 'HUD for night driving', 'Mirrored for your windshield'],
  ['4-alert.png', '04-speed-alert.png', 'Your own speed alert', 'Screen turns red + a beep'],
  ['5-run.png', '05-run-pace.png', 'Car, bike, run & boat', 'Pace for runs, knots on the water'],
];

async function capture() {
  fs.mkdirSync(RAW, { recursive: true });
  const { b, p, errs } = await H.open(URL, { perm: 'granted' });
  const shot = async name => { await p.waitForTimeout(1300); await p.screenshot({ path: path.join(RAW, name) }); };
  await H.tap(p, /I Understand/);
  // 출발 → 45 mph 로 잠시 달려 기록이 쌓이게
  for (const v of [10, 20, 30, 38, 44]) { await H.gps(p, { mph: v }); await p.waitForTimeout(1000); }
  await H.gps(p, { mph: 45 });
  await p.waitForTimeout(9000);
  await shot('1-digital.png');

  await H.gps(p, { mph: 55 });
  await H.tap(p, /Show gauge/);
  await p.waitForTimeout(3000);
  await shot('2-gauge.png');
  await H.tap(p, /Show digits/);

  await H.tap(p, /HUD mode/);
  await p.waitForTimeout(5200); // 나가기 버튼이 숨을 때까지
  await shot('3-hud.png');
  await p.mouse.click(200, 400);
  await p.waitForTimeout(500);
  await H.tap(p, /Exit HUD/);

  await H.tap(p, /Speed alert off/);
  await p.getByRole('switch').first().click();
  await p.waitForTimeout(400);
  await H.tap(p, /^Done$/);
  await H.gps(p, { mph: 66 });
  await p.waitForTimeout(3500);
  await shot('4-alert.png');
  await H.gps(p, { mph: 0 }); // 멈춘 뒤 달리기 모드로 (차 속도가 달리기 기록에 섞이지 않게)
  await p.waitForTimeout(2500);

  await H.tap(p, /Run mode/);
  await p.waitForTimeout(1500);
  for (const v of [5, 6.5, 7.3]) { await H.gps(p, { mph: v }); await p.waitForTimeout(1000); }
  await H.gps(p, { mph: 7.5 });
  await p.waitForTimeout(8000);
  await shot('5-run.png');
  await b.close();
  if (errs.length) throw new Error('console errors: ' + errs.join(' / '));
}

async function compose() {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--no-sandbox'] });
  const p = await b.newPage({ viewport: { width: 1290, height: 2796 } });
  for (const [src, dst, title, sub] of SHOTS) {
    const img = fs.readFileSync(path.join(RAW, src)).toString('base64');
    await p.setContent(`<html><body style="margin:0;width:1290px;height:2796px;background:linear-gradient(#16202B,#07090D);font-family:Roboto,Arial,sans-serif;overflow:hidden">
      <div style="text-align:center;padding-top:120px;color:#fff;font-size:96px;font-weight:900;letter-spacing:-1px">${title}</div>
      <div style="text-align:center;margin-top:24px;color:#34E0A1;font-size:54px;font-weight:600">${sub}</div>
      <div style="position:absolute;left:105px;top:520px;width:1080px;height:2337px;border-radius:72px;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,.5);border:14px solid #262E39">
        <img src="data:image/png;base64,${img}" style="width:100%;display:block"></div></body></html>`);
    await p.waitForTimeout(300);
    await p.screenshot({ path: path.join(__dirname, dst) });
    console.log('made', dst);
  }
  await b.close();
}

(async () => {
  if (!process.argv.includes('--compose-only')) await capture();
  await compose();
})().catch(e => { console.error(e); process.exit(1); });
