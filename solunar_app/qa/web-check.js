// 웹 미리보기(docs/solunar-app) 실제 클릭 점검 + 화면별 스크린샷 (iPhone 13 = 1170×2532, 라이트·다크).
// 실행: (docs 를 /test-mvp/ 로 띄운 뒤) NODE_EXTRA_CA_CERTS=/root/.ccr/ca-bundle.crt node solunar_app/qa/web-check.js
const H = require('./web-harness.js');
const path = require('path');
const APP_URL = process.env.APP_URL || 'http://localhost:8765/test-mvp/solunar-app/index.html';
const SHOTS = path.join(__dirname, 'shots');
const NOW = Date.UTC(2026, 9, 2, 17, 0); // Fri Oct 2 2026, 12:00 PM CDT
const AUSTIN = { latitude: 30.2672, longitude: -97.7431 };
const log = [];
let fails = 0;
const ok = (cond, what) => { log.push(`${cond ? 'PASS' : 'FAIL'}  ${what}`); if (!cond) fails++; };

async function shot(page, name) { await page.waitForTimeout(600); await page.screenshot({ path: path.join(SHOTS, name) }); log.push(`      📸 ${name}`); }
const btn = (page, name) => page.getByRole('button', { name });
// Flutter web puts row text in spans / aria-labels → search labels and text of every semantics node.
async function has(page, re, t = 6000) {
  const src = re instanceof RegExp ? re.source : re.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  try {
    await page.waitForFunction(s => {
      const r = new RegExp(s);
      return [...document.querySelectorAll('flt-semantics, h1, h2, h3, span')].some(n => r.test(n.getAttribute('aria-label') || '') || r.test([...n.childNodes].filter(c => c.nodeType === 3).map(c => c.textContent).join('')));
    }, src, { timeout: t });
    return true;
  } catch { return false; }
}
// Flutter web takes a wheel event at a time — scroll in steps.
async function scroll(page, px) {
  await page.mouse.move(195, 600);
  const step = px > 0 ? 250 : -250;
  for (let d = 0; Math.abs(d) < Math.abs(px); d += step) { await page.mouse.wheel(0, step); await page.waitForTimeout(60); }
  await page.waitForTimeout(500);
}
async function top(page) { await scroll(page, -12000); await page.waitForTimeout(400); }

(async () => {
  // 1) 첫 실행: 안내 화면 없이 바로 메인(폰 시간대 CDT 의 가장 큰 마을 = Chicago) → 내 위치(오스틴)
  let { browser, page, errs, net } = await H.open({ url: APP_URL, geolocation: AUSTIN, clock: NOW });
  ok(await has(page, /^Chicago, IL$/), 'first launch shows Chicago, IL right away (biggest town in the phone zone)');
  ok(await has(page, /Biggest town in your time zone · Times in CDT/), 'says it is a guess');
  ok(await has(page, /24-hour dial\. Major/), 'dial with periods');
  await shot(page, '01-first-launch.png');
  await btn(page, /Use My Location/).click();
  ok(await has(page, /in Austin, TX · Times in CDT/, 10000), 'Use My Location → "in Austin, TX", times in CDT (phone zone)');
  ok(await has(page, /^My Location$/), 'large title My Location');
  ok(await has(page, /Next: (Minor|Major) period|period now/), 'now/next line under the dial');
  ok(await has(page, /Major · Moon overhead \d/), 'Major period row with moon overhead time');
  await shot(page, '02-home.png');
  await scroll(page, 700);
  ok(await has(page, /^Starts\n/), 'legal light Starts row (its own row, not merged)');
  await shot(page, '03-home-lists.png');
  await scroll(page, 4000);
  ok(await has(page, /Next Full Moon/), 'sun & moon rows');
  await shot(page, '04-home-bottom.png');
  // 사냥 보기
  await top(page);
  await btn(page, 'Hunting').click();
  ok(await has(page, /Shooting light ends in/), 'Hunting view: countdown in the dial');
  await shot(page, '05-hunting.png');
  await btn(page, 'Fishing').click();
  ok(await has(page, /Solunar score \d+ out of 100/), 'Fishing view: score in the dial');
  // 주간 띠
  await btn(page, /^Saturday Oct 3/).click();
  ok(await has(page, /^Tomorrow\. Solunar score/), 'week strip → Saturday (dial reads "Tomorrow")');
  await btn(page, /^Friday Oct 2/).click();
  ok(await has(page, /^Today\. Solunar score/), 'week strip → back to today');
  // 점수 설명
  await scroll(page, 12000);
  await btn(page, /How Is This Scored/).click();
  ok(await has(page, /How It’s Scored/), 'score page');
  ok(await has(page, /Moon Phase/) && await has(page, /\d+ \/ 60/), 'score parts shown');
  await shot(page, '06-score.png');
  await btn(page, 'Back').click();
  // 30일 달력 (영상 보고 열기 — 웹은 가짜 광고)
  await scroll(page, 12000);
  await btn(page, /30-Day Calendar/).click();
  ok(await has(page, /Watch a short video/), 'unlock dialog');
  await shot(page, '07-unlock.png');
  await btn(page, /Watch Video/).click();
  ok(await has(page, 'BEST DAYS AHEAD', 8000), 'calendar opens after video');
  await shot(page, '08-calendar.png');
  await btn(page, /^Sat, Oct 10/).first().click();
  ok(await has(page, /^Sat, Oct 10\. Solunar score/), 'calendar day → main screen shows that day');
  ok(await has(page, /New Moon/), 'Oct 10 is a new moon');
  // 설정
  await btn(page, 'Settings').click();
  ok(await has(page, 'LEGAL SHOOTING LIGHT'), 'settings opens');
  await btn(page, 'After sunset: 5 minutes less').click();
  ok(await has(page, '25 min'), 'after-sunset −5 → 25 min');
  await btn(page, /30 min before · until sunset/).click();
  ok(await has(page, /After sunset\n0 min/), 'quick set 30 / sunset');
  await shot(page, '09-settings.png');
  await btn(page, 'Back').click();
  await top(page);
  await btn(page, /^Friday Oct 2/).click();
  await scroll(page, 3000);
  ok(await has(page, /30 min before sunrise to 0 min after sunset/), 'new offsets on the main screen');
  // 장소 검색
  await top(page);
  await btn(page, 'Change place').click();
  ok(await has(page, 'Use My Location'), 'places screen');
  await page.getByRole('textbox').click();
  // Letter by letter like a person: the field must keep focus (a built-in clear button used to drop it after one letter).
  let kept = true;
  for (const ch of 'bozeman') {
    await page.keyboard.type(ch);
    await page.waitForTimeout(120);
    kept = kept && await page.evaluate(() => document.activeElement && document.activeElement.tagName === 'INPUT');
  }
  ok(kept && (await page.getByRole('textbox').inputValue()) === 'bozeman', 'search field keeps focus while typing "bozeman" letter by letter');
  ok(await btn(page, /Bozeman, MT/).first().waitFor({ timeout: 6000 }).then(() => true, () => false), 'search "bozeman" finds Bozeman, MT');
  await shot(page, '10-search.png');
  await btn(page, /Bozeman, MT/).first().click();
  ok(await has(page, /^Times in MDT$/), 'Bozeman in MDT (place zone, not the phone\'s CDT)');
  await btn(page, 'Save place').click();
  ok(await btn(page, 'Remove from saved places').first().waitFor({ timeout: 5000 }).then(() => true, () => false), 'saved (star on)');
  await btn(page, 'Change place').click();
  ok(await has(page, 'SAVED PLACES'), 'places shows saved section');
  await shot(page, '11-places-saved.png');
  await btn(page, 'Back').click();
  const external = net.filter(u => !/fonts\.gstatic\.com|flutter-canvaskit|fonts\.googleapis/.test(u));
  ok(external.length === 0, `no network calls besides fonts/engine (${external.length})`);
  await browser.close();
  log.push(`      console errors: ${errs.length}${errs.length ? ' → ' + errs.slice(0, 3).join(' | ') : ''}`);
  ok(errs.length === 0, 'no console errors (session 1)');

  // 2) 위치 거부 → 안내 한 줄 → 검색
  ({ browser, page, errs } = await H.open({ url: APP_URL, clock: NOW }));
  await btn(page, /Use My Location/).click();
  ok(await has(page, /search for a town/i, 30000), 'location not given → one-line message (no endless spinner)');
  await shot(page, '12-location-denied.png');
  await btn(page, 'Change place').click();
  await page.getByRole('textbox').click();
  await page.keyboard.type('duluth mn', { delay: 30 });
  await btn(page, /Duluth, MN/).first().click();
  ok(await has(page, /^Duluth, MN$/), 'search start → Duluth');
  await browser.close();
  ok(errs.length === 0, 'no console errors (denied)');

  // 3) 광고 실패: 중간에 닫음(?ads=early) → 잠김 + 안내 / 영상 없음(?ads=none) → 기다린 뒤 그래도 열림
  ({ browser, page, errs } = await H.open({ url: APP_URL + '?ads=early', geolocation: AUSTIN, clock: NOW }));
  await scroll(page, 12000);
  await btn(page, /30-Day Calendar/).click();
  await btn(page, /Watch Video/).click();
  ok(await has(page, /Video Closed Early/, 6000), '?ads=early → stays locked with a message');
  await browser.close();
  ({ browser, page, errs } = await H.open({ url: APP_URL + '?ads=none', geolocation: AUSTIN, clock: NOW }));
  await scroll(page, 12000);
  await btn(page, /30-Day Calendar/).click();
  await btn(page, /Watch Video/).click();
  ok(await has(page, 'Loading video…', 3000), '?ads=none → Loading video…');
  ok(await has(page, 'BEST DAYS AHEAD', 15000), '?ads=none → opens anyway after the wait');
  await browser.close();

  // 4) 다크 모드 + 작은 화면 (iPhone SE) + 큰 화면 (15 Pro Max)
  for (const [name, vp, scale, scheme] of [
    ['13-dark.png', { width: 390, height: 844 }, 3, 'dark'],
    ['14-iphone-se.png', { width: 375, height: 667 }, 2, 'light'],
    ['15-pro-max-dark.png', { width: 430, height: 932 }, 3, 'dark'],
  ]) {
    ({ browser, page, errs } = await H.open({ url: APP_URL, viewport: vp, scale, geolocation: AUSTIN, clock: NOW, colorScheme: scheme }));
    await btn(page, /Use My Location/).click();
    ok(await has(page, /in Austin, TX/, 10000), `${name}: home`);
    await shot(page, name);
    await browser.close();
    ok(errs.length === 0, `no console errors (${name})`);
  }

  console.log(log.join('\n'));
  console.log(`\n${fails ? '❌' : '✅'} ${log.filter(l => l.startsWith('PASS')).length} passed, ${fails} failed`);
  process.exit(fails ? 1 : 0);
})().catch(e => { console.log(log.join('\n')); console.error(e); process.exit(2); });
