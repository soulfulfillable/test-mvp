// 테스트 로봇: 모든 화면의 모든 버튼을 눌러 막힌 길·넘침·깨진 글자를 찾는다.
// 사용: (docs 폴더를 8765 포트로 띄운 뒤) node robot.js [스크린샷 폴더]
const { chromium, webkit, devices } = require('playwright');
// ENGINE=webkit 이면 사파리 엔진 + 아이폰 13 설정(UA·배율 3)으로 돈다. 실제 iOS 사파리 자체는 아니다(리눅스용 WebKit).
const WK = process.env.ENGINE === 'webkit', IPHONE = devices['iPhone 13'];
const BASE = process.env.BASE || 'http://localhost:8765/race-finder.html';
const SHOTS = process.argv[2] || '/tmp/rf-shots';
require('fs').mkdirSync(SHOTS, { recursive: true });
const results = []; let fails = 0;
const ok = (name, cond, extra = '') => { results.push(`${cond ? 'PASS' : 'FAIL'}  ${name}${extra ? '  — ' + extra : ''}`); if (!cond) fails++; };
const HOBOKEN = { latitude: 40.7445, longitude: -74.0329 };

async function ctx(browser, o = {}) {
  const c = await browser.newContext({ ...(WK ? IPHONE : {}), ignoreHTTPSErrors: !!process.env.LIVE, viewport: o.vp || (WK ? IPHONE.viewport : { width: 390, height: 844 }), deviceScaleFactor: WK ? 3 : (o.dsf || 1), hasTouch: true, isMobile: true,
    colorScheme: o.dark ? 'dark' : 'light', geolocation: o.geo === undefined ? HOBOKEN : o.geo || undefined, permissions: o.geo === null ? [] : ['geolocation'] });
  const p = await c.newPage(); p.errs = [];
  p.on('console', m => m.type() === 'error' && !/Failed to load resource|ERR_FAILED|ERR_INTERNET/.test(m.text()) && p.errs.push(m.text()));
  p.on('pageerror', e => p.errs.push(e.message));
  return p;
}
const overflow = p => p.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1);
const badText = p => p.evaluate(() => /undefined|NaN|null|\[object/.test(document.body.innerText));
const shot = (p, n) => p.screenshot({ path: `${SHOTS}/${n}.png` });
const listReady = p => p.waitForSelector('.race, .state', { timeout: 15000 });

(async () => {
  const b = await (WK ? webkit : chromium).launch(process.env.LIVE ? { proxy: { server: process.env.HTTPS_PROXY } } : {});

  // 1. 첫 실행 → 내 위치 버튼
  let p = await ctx(b);
  await p.goto(BASE); await p.waitForSelector('#gps');
  ok('첫 실행: 위치 묻는 화면, 넘침 없음', !(await overflow(p)) && await p.locator('#controls').isHidden());
  await shot(p, '01-first-run');
  await p.tap('#gps'); await p.waitForSelector('.race');
  ok('Use my location → 대회 목록', await p.locator('.race').count() > 0, (await p.locator('.count').innerText()));
  ok('위치 문구', /Within 25 mi of your location/.test(await p.locator('#where').innerText()));
  await shot(p, '02-weekend');

  // 2. 기간·거리 필터 전부
  for (const per of ['two', 'all', 'weekend']) for (const k of ['any', '5k', '10k', 'half', 'full']) {
    await p.tap(`#period [data-p=${per}]`); await p.tap(`#dist [data-k="${k}"]`);
    const n = await p.locator('.race').count(), empty = await p.locator('.state').count();
    ok(`필터 ${per}/${k}`, (n > 0 || empty === 1) && !(await overflow(p)) && !(await badText(p)), `${n}개`);
    if (k !== 'any' && n) { // 걸러진 대회는 그 종목을 정말 갖고 있어야 한다
      const names = { '5k': '5K', '10k': '10K', half: 'Half', full: 'Marathon' };
      const metas = await p.locator('.race .meta').allInnerTexts();
      ok(`필터 ${per}/${k} 결과가 종목과 일치`, metas.every(m => m.includes(names[k]) || /\+\d/.test(m)));
    }
  }
  // 날짜순 정렬 확인
  await p.tap('#period [data-p=all]'); await p.tap('#dist [data-k=any]');
  const days = await p.locator('.day').allInnerTexts();
  ok('8주 목록: 날짜 묶음이 여러 개', days.length > 3, days.slice(0, 4).join(' | '));
  await shot(p, '03-eight-weeks');

  // 3. 모든 대회 상세를 하나씩 열어 본다 (8주·50mi)
  await p.tap('#where'); await p.waitForSelector('.sheet.on #rad');
  for (const r of ['10', '50']) { await p.tap(`#rad [data-r="${r}"]`); ok(`반경 ${r} mi 버튼`, (await p.locator('#where').innerText()).includes(r + ' mi')); }
  await shot(p, '04-location-sheet');
  await p.tap('#close'); await p.waitForSelector('.sheet', { state: 'hidden' });
  const total = await p.locator('.race').count(); let opened = 0, bad = 0, withStairs = 0, withRise = 0, firstRise = -1;
  for (let i = 0; i < total; i++) {
    await p.locator('.race').nth(i).evaluate(e => e.click()); await p.waitForSelector('.sheet.on #reg');
    const st = await p.evaluate(() => { const s = document.getElementById('sheet'); return { ov: s.scrollWidth > s.clientWidth + 1, txt: s.innerText, href: document.getElementById('reg').href, stairs: s.querySelectorAll('.stairs').length, up: s.querySelectorAll('.evnote.up').length }; });
    if (st.ov || /undefined|NaN|null|\[object/.test(st.txt) || !/^https:\/\/runsignup\.com\//.test(st.href)) { bad++; results.push('   문제 상세: ' + st.txt.split('\n')[1]); }
    if (st.stairs) withStairs++; if (st.up) { withRise++; if (firstRise < 0) firstRise = i; }
    opened++;
    await p.evaluate(() => document.getElementById('close').click()); await p.waitForSelector('.sheet', { state: 'hidden' });
  }
  ok(`상세 ${opened}개 전부 열기: 넘침·깨진 글자·접수 링크 문제 0`, bad === 0 && opened === total, `가격 계단 ${withStairs}개, 인상 예고 ${withRise}개`);

  // 4. 상세 버튼: 저장·달력·닫기, 저장 탭
  const idx = firstRise >= 0 ? firstRise : 0;
  await p.locator('.race').nth(idx).evaluate(e => e.scrollIntoView({ block: 'center' })); await p.locator('.race').nth(idx).tap();
  await p.waitForSelector('.sheet.on #saveBtn'); await p.waitForTimeout(1500);
  await shot(p, '05-detail-price-stairs');
  await p.tap('#saveBtn'); ok('Save → 버튼이 Remove 로', (await p.locator('#saveBtn').innerText()) === 'Remove from Saved');
  // 달력: 실제 파일 주소로 연결돼야 한다(아이폰 사파리는 data: 주소의 달력 파일을 열지 않는다)
  const cal = await p.evaluate(async () => { const a = document.getElementById('cal'); const r = await fetch(a.href); return { tag: a.tagName, dl: a.hasAttribute('download'), http: /^https?:/.test(a.href), status: r.status, type: r.headers.get('content-type') || '', body: await r.text(), title: document.querySelector('#sheet h2').innerText }; });
  ok('Add to Calendar → 실제 달력 파일 주소(링크, 200)', cal.tag === 'A' && cal.http && !cal.dl && cal.status === 200, cal.type);
  ok('달력 파일 내용이 이 대회와 일치', /BEGIN:VEVENT/.test(cal.body) && /DTSTART(;TZID=[\w\/]+)?:\d{8}T\d{6}/.test(cal.body) && /URL:https:\/\/runsignup/.test(cal.body) && cal.body.replace(/\r\n /g, '').includes('SUMMARY:' + cal.title.replace(/([,;])/g, '\\$1').slice(0, 20)));
  if (process.env.LIVE) ok('배포 서버가 text/calendar 로 내려줌', /text\/calendar/.test(cal.type), cal.type);
  await p.locator('#veil').tap({ position: { x: 10, y: 10 } }); await p.waitForSelector('.sheet', { state: 'hidden' });
  ok('바깥 눌러 닫기', true);
  ok('목록에 Saved 표시', await p.locator('.away b').count() === 1);
  await p.tap('#tabSaved'); ok('Saved 탭에 1개', await p.locator('.race').count() === 1 && !(await overflow(p)));
  await shot(p, '06-saved');
  await p.reload(); await p.tap('#tabSaved'); ok('새로고침 뒤에도 저장 유지', await p.locator('.race').count() === 1);
  await p.locator('.race').first().tap(); await p.waitForSelector('.sheet.on #saveBtn'); await p.tap('#saveBtn');
  await p.keyboard.press('Escape'); await p.waitForSelector('.sheet', { state: 'hidden' });
  ok('Remove → Saved 빈 화면', await p.locator('.state h2').innerText() === 'No saved races yet');
  await shot(p, '07-saved-empty');
  await p.tap('#goRaces'); await listReady(p); ok('Find races → 목록으로', await p.locator('#tabRaces').getAttribute('aria-pressed') === 'true');
  ok('1~4 콘솔 에러 0', p.errs.length === 0, p.errs.join(' / ')); await p.context().close();

  // 5. ZIP 입력: 틀린 값·없는 ZIP·맞는 ZIP (키보드가 올라온 높이)
  p = await ctx(b, { geo: null, vp: { width: 390, height: 500 } });
  await p.goto(BASE); await p.waitForSelector('#gps');
  await p.tap('#gps'); await p.waitForFunction(() => document.getElementById('err').textContent.length > 0);
  ok('위치 거부 → 안내 문구', /ZIP code instead/.test(await p.locator('#err').innerText()), await p.locator('#err').innerText());
  await p.fill('#zip', '12'); await p.tap('#zipform button'); ok('짧은 ZIP → 안내', /5-digit/.test(await p.locator('#err').innerText()));
  ok('오류 문구가 빨간색(본문 회색과 다름)', await p.evaluate(() => { const c = getComputedStyle(document.getElementById('err')).color.match(/\d+/g).map(Number); return c[0] > 180 && c[1] < 120; }));
  await p.fill('#zip', '00000'); await p.tap('#zipform button'); await p.waitForFunction(() => /know that ZIP/.test(document.getElementById('err').textContent));
  ok('없는 ZIP → 안내', true);
  ok('키보드 높이(390×500)에서 입력칸·버튼 보임', await p.locator('#zipform button').isVisible() && !(await overflow(p)));
  await shot(p, '08-zip-keyboard');
  await p.fill('#zip', '60614'); await p.tap('#zipform button'); await p.waitForSelector('.race');
  ok('ZIP 60614(시카고) → 목록', /ZIP 60614/.test(await p.locator('#where').innerText()));
  ok('5 콘솔 에러 0', p.errs.length === 0, p.errs.join(' / ')); await p.context().close();

  // 5-1. 인상 문구: 호보컨 터키 트롯 5K 는 11/15 23:59 까지 $45 → 11/14 에는 "after tomorrow", 11/15 에는 "tonight"
  for (const [now, want] of [['2026-11-14T15:00:00Z', 'after tomorrow: $20 to $25'], ['2026-11-15T15:00:00Z', 'tonight: $20 to $25']]) {
    p = await ctx(b); await p.goto(BASE + '?zip=07030&now=' + now); await p.waitForSelector('.race'); await p.tap('#period [data-p=two]');
    const t = await p.locator('.race:has-text("Hoboken\'s Annual Turkey Trot") .rise').innerText();
    ok('인상 문구 ' + now.slice(5, 10), t.includes(want), t); await p.context().close();
  }

  // 6. 빈 화면: 대회 없는 곳 → 버튼으로 넓히기
  p = await ctx(b); await p.goto(BASE + '?zip=99723'); await p.waitForSelector('[data-act]');
  ok('빈 화면 문구', /^No races this weekend/.test(await p.locator('.state h2').innerText()), await p.locator('.state p').innerText());
  await shot(p, '09-empty');
  await p.tap('[data-act=wider]'); ok('Search within 50 mi 버튼', /50 mi/.test(await p.locator('#where').innerText()));
  await p.tap('[data-act=later]'); ok('Show the next 8 weeks 버튼', await p.locator('#period [data-p=all]').getAttribute('aria-pressed') === 'true' && await p.locator('[data-act]').count() === 0);
  await p.tap('#dist [data-k=full]'); await p.tap('[data-act=anyk]'); ok('Show any distance 버튼', await p.locator('#dist [data-k=any]').getAttribute('aria-pressed') === 'true');
  await p.context().close();

  // 7. 오프라인 → 다시 시도
  p = await ctx(b); let block = true;
  await p.route('**/race-finder-data/t_*', r => block ? r.abort() : r.continue());
  await p.goto(BASE + '?zip=07030'); await p.waitForSelector('#retry');
  ok('오프라인: 오류 화면', /Couldn.t load races/.test(await p.locator('.state h2').innerText())); await shot(p, '10-offline');
  block = false; await p.tap('#retry'); await p.waitForSelector('.race'); ok('Try again → 목록', true); await p.context().close();

  // 8. 화면 크기·다크·큰 글씨
  for (const [name, o] of [['375x667', { vp: { width: 375, height: 667 } }], ['320x568', { vp: { width: 320, height: 568 } }], ['430x932', { vp: { width: 430, height: 932 } }], ['dark', { dark: true }], ['large-text', { big: true }]]) {
    p = await ctx(b, o); await p.goto(BASE + '?zip=07030'); await p.waitForSelector('.race');
    if (o.big) await p.addStyleTag({ content: 'body.fallback{font-size:26px}' });
    await p.tap('#period [data-p=all]');
    const clipped = await p.evaluate(() => [...document.querySelectorAll('.race .name,.rise,.seg button,.dist button')].filter(e => e.scrollWidth > e.clientWidth + 1 && getComputedStyle(e).overflowX !== 'auto').length);
    ok(`${name}: 목록 넘침·잘림 없음`, !(await overflow(p)) && clipped === 0, `잘린 요소 ${clipped}`);
    await shot(p, `11-${name}-list`);
    await p.locator('.race').first().tap(); await p.waitForSelector('.sheet.on #reg'); await p.waitForTimeout(1300);
    const sov = await p.evaluate(() => { const s = document.getElementById('sheet'); return s.scrollWidth > s.clientWidth + 1; });
    ok(`${name}: 상세 넘침 없음, Done 버튼 보임`, !sov && await p.locator('#close').isVisible());
    await shot(p, `12-${name}-detail`);
    if (name === 'dark') ok('dark: 시트가 뒤 화면과 다른 색', await p.evaluate(() => getComputedStyle(document.getElementById('sheet')).backgroundColor !== getComputedStyle(document.body).backgroundColor));
    ok(`${name}: 콘솔 에러 0`, p.errs.length === 0, p.errs.join(' / ')); await p.context().close();
  }

  await b.close();
  console.log(results.join('\n')); console.log(`\n${results.filter(r => r.startsWith('PASS')).length} 통과 / ${fails} 실패`);
  process.exit(fails ? 1 : 0);
})().catch(e => { console.log(results.join('\n')); console.error('로봇 중단:', e.message.split('\n')[0]); process.exit(2); });
