// Blessing Jar 웹 시제품 테스트 로봇 — 모든 버튼을 누르고, 흔들기(손가락 끌기·폰 흔들기)로 쪽지를 전부 꺼낸다.
// 실행: node blessingjar_app/qa/robot.js [출력폴더]
const { chromium } = require('/opt/node-tools/node_modules/playwright-core');
const path = require('path'), fs = require('fs');
const OUT = process.argv[2] || path.join(__dirname, 'shots');
fs.mkdirSync(OUT, { recursive: true });
const URL = 'file://' + path.resolve(__dirname, '../../docs/blessing-jar.html') + '#debug';
const log = [], fails = [];
const ok = (c, m) => { log.push((c ? 'PASS ' : 'FAIL ') + m); if (!c) fails.push(m); };
const sleep = ms => new Promise(r => setTimeout(r, ms));

async function tapBtn(page, sel, label) {
  const el = page.locator(sel);
  await el.waitFor({ state: 'visible', timeout: 4000 });
  const box = await el.boundingBox();
  const vp = page.viewportSize();
  const inView = box && box.x >= 0 && box.y >= 0 && box.x + box.width <= vp.width + 0.5 && box.y + box.height <= vp.height + 0.5;
  const hitOk = await el.evaluate(e => { const r = e.getBoundingClientRect(); const t = document.elementFromPoint(r.left + r.width / 2, r.top + r.height / 2); return t === e || e.contains(t); });
  ok(inView && hitOk && box.height >= 32, `버튼 "${label}" 화면 안·안 가려짐·높이 ${box && Math.round(box.height)}px` + (inView && hitOk ? '' : ` [inView=${inView} hit=${hitOk} box=${JSON.stringify(box)}]`));
  await el.tap();
  log.push('  tap: ' + label);
}
async function shakeByDrag(page, ms, amp = 110) {
  const cv = await page.locator('#cv').boundingBox();
  const cx = cv.x + cv.width / 2, cy = cv.y + cv.height * 0.75;
  await page.mouse.move(cx, cy); await page.mouse.down();
  const t0 = Date.now(); let maxEsc = 0;
  while (Date.now() - t0 < ms) {
    const ph = (Date.now() - t0) / 1000 * Math.PI * 2 * 3.2;
    await page.mouse.move(cx + Math.sin(ph) * amp, cy + Math.cos(ph * 0.5) * 12, { steps: 1 });
    await sleep(16);
    maxEsc = Math.max(maxEsc, await page.evaluate(() => __bj.escaped()));
    if (await page.evaluate(() => __bj.revealing)) break;
  }
  await page.mouse.up();
  return maxEsc;
}
async function shakeByMotion(page, ms) {
  const t0 = Date.now(); let maxEsc = 0;
  while (Date.now() - t0 < ms) {
    const ph = (Date.now() - t0) / 1000 * Math.PI * 2 * 4;
    await page.evaluate(a => window.dispatchEvent(new DeviceMotionEvent('devicemotion', { acceleration: { x: a, y: a * 0.3, z: 1 }, interval: 16 })), Math.sin(ph) * 22);
    await sleep(16);
    maxEsc = Math.max(maxEsc, await page.evaluate(() => __bj.escaped()));
    if (await page.evaluate(() => __bj.revealing)) break;
  }
  return maxEsc;
}
async function waitCalm(page, ms) { await sleep(ms); }
async function readAndNext(page, i, how, wait = 800) {
  const before = await page.evaluate(() => __bj.S.notes.map(n => n.text));
  const esc = how === 'motion' ? await shakeByMotion(page, 6000) : await shakeByDrag(page, 6000);
  ok(esc === 0, `${i}번째 흔들기(${how}) 중 항아리 밖으로 샌 쪽지 0 (최대 ${esc})`);
  await page.locator('#reveal').waitFor({ state: 'visible', timeout: 3000 }).catch(() => {});
  const vis = await page.locator('#reveal').isVisible();
  ok(vis, `${i}번째 쪽지가 흔들기(${how})로 나옴`);
  if (!vis) return false;
  const msg = await page.locator('#cMsg').textContent();
  ok(before.includes(msg), `${i}번째 쪽지 글이 항아리 안 쪽지와 같음: "${msg.slice(0, 30)}…"`);
  await sleep(wait);
  return true;
}

(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--no-sandbox'] });
  const mk = async (opts = {}) => {
    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 3, hasTouch: true, isMobile: true, ...opts });
    const page = await ctx.newPage();
    page.errors = [];
    page.on('console', m => { if (m.type() === 'error') page.errors.push(m.text()); });
    page.on('pageerror', e => page.errors.push(String(e)));
    return { ctx, page };
  };
  const { ctx, page } = await mk();
  await page.goto(URL); await page.evaluate(() => localStorage.clear()); await page.reload(); await sleep(400);
  const noHScroll = async (name) => ok(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1), `${name}: 가로 넘침 없음`);

  // 1. 빈 항아리
  ok(await page.locator('#emptyHint').isVisible(), '빈 항아리 안내 보임');
  ok(await page.locator('#bOpen').isDisabled(), '빈 항아리면 Open 버튼 비활성');
  await noHScroll('첫 화면');
  await page.screenshot({ path: OUT + '/01-empty.png' });

  // 2. 샘플 쪽지 8개
  await tapBtn(page, '#bSample', 'Try It With Sample Notes');
  await sleep(4200);
  ok(await page.evaluate(() => __bj.bodies.length) === 8, '샘플 8개가 항아리에 들어감');
  ok(await page.evaluate(() => __bj.escaped()) === 0, '샘플 쪽지 전부 항아리 안');
  await page.screenshot({ path: OUT + '/02-filled.png' });

  // 3. 쪽지 쓰기
  await tapBtn(page, '#bAdd', 'Add a Note');
  await sleep(450);
  ok(await page.locator('#bDrop').isDisabled(), '빈 글이면 Drop In 비활성');
  await tapBtn(page, '#bIdea', 'Another (idea)');
  await tapBtn(page, '#seg button:nth-child(3)', 'From: Grandma');
  ok(await page.locator('#seg button:nth-child(3)').getAttribute('aria-pressed') === 'true', 'From 선택 반영');
  await page.locator('#ta').fill('Thankful for a quiet Sunday morning with everyone home.');
  ok((await page.locator('#taCount').textContent()).startsWith('55/'), '글자 수 표시');
  // 키보드 뜬 상태 흉내 (아이폰 13 키보드 약 336pt)
  await page.setViewportSize({ width: 390, height: 844 - 336 });
  await sleep(150);
  const dropBox = await page.locator('#bDrop').boundingBox(); const taBox = await page.locator('#ta').boundingBox();
  ok(dropBox.y + dropBox.height <= 508 && taBox.y + taBox.height <= 508, '키보드 떠도 입력칸·Drop In 이 보임');
  await page.screenshot({ path: OUT + '/03-write-keyboard.png' });
  await page.setViewportSize({ width: 390, height: 844 }); await sleep(150);
  await tapBtn(page, '#bDrop', 'Drop In');
  await sleep(250);
  await page.screenshot({ path: OUT + '/04-dropping.png' });
  await sleep(2200);
  ok(await page.evaluate(() => __bj.bodies.length) === 9, '쪽지 넣기 → 항아리 9개');
  ok(await page.evaluate(() => __bj.S.notes.slice(-1)[0].name) === 'Grandma', '보낸 사람 Grandma 로 저장');
  ok(await page.evaluate(() => __bj.S.from) === 3, '다음 사람으로 From 이 넘어감');
  // 취소 경로
  await tapBtn(page, '#bAdd', 'Add a Note (취소용)'); await sleep(400);
  await tapBtn(page, '#bCancel', 'Cancel'); await sleep(200);
  ok(!(await page.locator('#sheetWrap').isVisible()), 'Cancel 로 시트 닫힘');
  ok(await page.evaluate(() => __bj.bodies.length) === 9, 'Cancel 은 쪽지 안 넣음');

  // 4. 열기 — 손가락 끌기로 흔들기
  await tapBtn(page, '#bOpen', 'Open the Jar');
  ok(await page.evaluate(() => __bj.mode) === 'open', '여는 모드');
  await page.screenshot({ path: OUT + '/05-open.png' });
  let n = 0;
  if (await readAndNext(page, ++n, 'drag')) {
    await page.screenshot({ path: OUT + '/06-card.png' });
    await tapBtn(page, '#bNext', 'Next Note');
  }
  // 연타 방지: 카드 뜨자마자 Next 연타해도 한 장만 닫힘
  if (await readAndNext(page, ++n, 'motion', 0)) {
    const left = await page.evaluate(() => __bj.S.notes.length);
    await page.locator('#bNext').evaluate(b => { b.click(); b.click(); });
    ok(await page.locator('#reveal').isVisible(), '카드 뜬 직후 연타는 무시(잠금 0.7초)');
    await sleep(800);
    await tapBtn(page, '#bNext', 'Next Note');
    ok(await page.evaluate(() => __bj.S.notes.length) === left, '연타로 쪽지가 더 빠지지 않음');
  }
  // 도중에 Done → 보관 → 다시 열기
  await tapBtn(page, '#bDone', 'Done (도중)');
  ok(await page.evaluate(() => __bj.S.archive.length) === 1 && await page.evaluate(() => __bj.S.archive[0].notes.length) === 2, '도중에 Done → 읽은 2장 보관');
  await tapBtn(page, '#bOpen', 'Open the Jar (다시)');
  // 세게 흔들어도 새지 않는지 (큰 진폭)
  const total = await page.evaluate(() => __bj.S.notes.length);
  for (let k = 0; k < total; k++) {
    const how = k % 2 ? 'motion' : 'drag';
    if (!(await readAndNext(page, ++n, how))) break;
    const left = await page.evaluate(() => __bj.S.notes.length);
    const label = await page.locator('#bNext').textContent();
    ok(left ? label === 'Next Note' : label === 'Finish', `남은 ${left}장 → 버튼 "${label}"`);
    if (!left) await page.screenshot({ path: OUT + '/07-last.png' });
    await tapBtn(page, '#bNext', label);
    await sleep(150);
  }
  ok(await page.evaluate(() => __bj.S.notes.length) === 0, '쪽지 9장 전부 꺼냄');
  ok(await page.evaluate(() => __bj.mode) === 'fill', '다 읽으면 처음 화면으로');
  ok(await page.evaluate(() => __bj.S.archive.length) === 2 && await page.evaluate(() => __bj.S.archive[0].notes.length) === 7, '두 번째 개봉 7장 보관');

  // 5. 세게 흔들기 스트레스 (다시 채우고 큰 진폭으로 8초, 폰 흔들기 섞어서)
  await tapBtn(page, '#bSample', 'Try It With Sample Notes (스트레스용)'); await sleep(4200);
  const cv = await page.locator('#cv').boundingBox();
  await page.mouse.move(cv.x + cv.width / 2, cv.y + cv.height * 0.8); await page.mouse.down();
  let maxE = 0; const t0 = Date.now();
  while (Date.now() - t0 < 8000) {
    const ph = (Date.now() - t0) / 1000 * Math.PI * 2 * 6;
    await page.mouse.move(cv.x + cv.width / 2 + Math.sin(ph) * 200, cv.y + cv.height * 0.8 + Math.cos(ph * 1.3) * 120);
    await page.evaluate(a => window.dispatchEvent(new DeviceMotionEvent('devicemotion', { acceleration: { x: a, y: -a, z: a } })), Math.sin(ph * 1.7) * 40);
    await sleep(12);
    maxE = Math.max(maxE, await page.evaluate(() => __bj.escaped()));
  }
  await page.mouse.up(); await sleep(1500);
  ok(maxE === 0, `세게 8초 흔들어도 샌 쪽지 0 (최대 ${maxE})`);
  ok(await page.evaluate(() => __bj.bodies.length) === 8, '채우는 모드에서 흔들면 쪽지가 안 빠짐(8장 그대로)');

  // 6. 보관함
  await tapBtn(page, '#bArchive', 'Opened'); await sleep(400);
  ok(await page.locator('#archList .row').count() === 2, '보관함 2줄');
  await page.screenshot({ path: OUT + '/08-archive.png' });
  await tapBtn(page, '#archList .row >> nth=0', '보관 1줄'); await sleep(400);
  ok(await page.locator('#weekList .note-row').count() === 7, '보관 상세 7장');
  await page.screenshot({ path: OUT + '/09-week.png' });
  await tapBtn(page, '#bWeekBack', '‹ Opened'); await sleep(400);
  await tapBtn(page, '#bArchBack', '‹ Jar'); await sleep(400);
  ok(await page.locator('#bAdd').isVisible(), '보관함에서 돌아옴');

  // 7. 가족
  await tapBtn(page, '#bFamily', 'Family'); await sleep(400);
  await page.locator('#famIn').fill('Uncle Joe');
  await tapBtn(page, '#famAdd', 'Add (가족)');
  ok(await page.evaluate(() => __bj.S.members.join(',')) === 'Mom,Dad,Grandma,Sam,Uncle Joe', '가족 추가');
  await page.screenshot({ path: OUT + '/10-family.png' });
  await tapBtn(page, '#famList .del >> nth=4', 'Remove (Uncle Joe)');
  ok(await page.evaluate(() => __bj.S.members.length) === 4, '가족 삭제');
  await tapBtn(page, '#bFamBack', '‹ Jar'); await sleep(400);

  // 8. 새로고침해도 남아 있나
  await page.reload(); await sleep(600);
  ok(await page.evaluate(() => __bj.S.archive.length) === 2 && await page.evaluate(() => __bj.bodies.length) === 8, '새로고침 후 보관함·항아리 유지');
  ok(await page.evaluate(() => __bj.escaped()) === 0, '새로고침 후 쪽지 전부 항아리 안');
  await page.screenshot({ path: OUT + '/11-reload.png' });
  ok(page.errors.length === 0, '콘솔 에러 0 ' + (page.errors.join(' | ')));
  await ctx.close();

  // 9. 다크 모드 + 작은 화면(iPhone SE)
  for (const [nm, opt] of [['12-dark', { colorScheme: 'dark' }], ['13-se', { viewport: { width: 375, height: 667 }, deviceScaleFactor: 2 }]]) {
    const { ctx: c2, page: p2 } = await mk(opt);
    await p2.goto(URL); await p2.evaluate(() => localStorage.clear()); await p2.reload(); await sleep(300);
    await p2.locator('#bSample').tap(); await sleep(4200);
    await p2.locator('#bOpen').tap(); await sleep(300);
    const r = await (async () => { const page = p2; return await shakeByDrag(page, 6000); })();
    await sleep(900);
    ok(await p2.locator('#reveal').isVisible() && r === 0, `${nm}: 흔들어 쪽지 나옴`);
    await p2.screenshot({ path: OUT + `/${nm}-card.png` });
    await sleep(100); await p2.locator('#bNext').tap(); await sleep(300);
    await p2.screenshot({ path: OUT + `/${nm}-open.png` });
    const db = await p2.locator('#bDone').boundingBox();
    ok(db.y + db.height <= p2.viewportSize().height, `${nm}: Done 버튼 화면 안`);
    ok(p2.errors.length === 0, `${nm}: 콘솔 에러 0`);
    await c2.close();
  }
  await browser.close();
  console.log(log.join('\n'));
  console.log(`\n${log.filter(l => l.startsWith('PASS')).length} PASS, ${fails.length} FAIL`);
  process.exit(fails.length ? 1 : 0);
})().catch(e => { console.log(log.join("\n")); console.error(e); process.exit(2); });
