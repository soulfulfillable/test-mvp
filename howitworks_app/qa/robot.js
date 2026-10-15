// 테스트 로봇: 모든 화면·모든 버튼을 실제 터치(tap)로 누른다. node robot.js <스크린샷 폴더>
// iPhone 13 (390x844 CSS px, 3x = 1170x2532), 라이트/다크 둘 다.
const { chromium } = require('/opt/node-tools/node_modules/playwright-core');
const path = require('path');
const URL = 'file://' + path.resolve(__dirname, '../../docs/how-it-works.html');
const out = process.argv[2] || '.';
const log = [], fails = [];
const ok = (cond, msg) => { (cond ? log : fails).push((cond ? 'PASS ' : 'FAIL ') + msg); };
const LESSONS = { microwave: ['Magnetron', 'Waveguide', 'High-voltage transformer', 'Metal cavity', 'Turntable', 'Door screen'],
  toilet: ['Handle & chain', 'Flapper', 'Fill valve & float', 'Overflow tube', 'Rim holes', 'Trapway'],
  zipper: ['Teeth', 'Tape', 'Slider', 'Pull tab', 'Stops', 'Bump & hollow'] };
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--no-sandbox'] });
  for (const scheme of ['light', 'dark']) {
    const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 3, hasTouch: true, isMobile: true, colorScheme: scheme });
    const pg = await ctx.newPage();
    const errs = []; pg.on('console', m => m.type() === 'error' && errs.push(m.text())); pg.on('pageerror', e => errs.push(String(e)));
    await pg.goto(URL);
    const tap = async sel => { const el = await pg.waitForSelector(sel); await el.scrollIntoViewIfNeeded(); await el.tap(); await pg.waitForTimeout(60); };
    const noHScroll = async where => ok(await pg.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `[${scheme}] 가로 넘침 없음: ${where}`);
    // Today
    ok(await pg.isVisible('h1.large >> text=Today'), `[${scheme}] Today 화면 열림`);
    ok(await pg.isVisible('h2.title >> text=Microwave Oven'), `[${scheme}] 오늘(10-15)의 레슨 = 전자레인지`);
    await noHScroll('Today');
    if (scheme === 'light') await pg.screenshot({ path: `${out}/01-today.png`, fullPage: true });
    for (const [key, names] of Object.entries(LESSONS)) {
      await tap('[data-tab=library]');
      ok(await pg.isVisible('h1.large >> text=Library'), `[${scheme}] Library 탭`);
      await tap(`[data-open=${key}]`);
      ok(await pg.isVisible('#back'), `[${scheme}] ${key}: 레슨 열림(뒤로 버튼 보임)`);
      await noHScroll(key);
      // 번호 6개 모두 탭
      for (let n = 1; n <= 6; n++) {
        await tap(`.num[data-n="${n}"] .badge`);
        const txt = await pg.textContent('#callout');
        ok(txt.includes(names[n - 1]), `[${scheme}] ${key}: 번호 ${n} → "${names[n - 1]}" 설명`);
        ok(await pg.evaluate(n => document.querySelector(`[data-part="${n}"]`).classList.contains('on'), n), `[${scheme}] ${key}: 번호 ${n} 부품 강조`);
      }
      if (scheme === 'light') await (await pg.$('#sheet')).screenshot({ path: `${out}/${key}-selected6.png` });
      // 위/아래 화살표
      await tap('.arrow[data-d="-1"]');
      ok((await pg.textContent('#callout')).includes(names[4]), `[${scheme}] ${key}: ▲ 이전 부품`);
      await tap('.arrow[data-d="1"]');
      ok((await pg.textContent('#callout')).includes(names[5]), `[${scheme}] ${key}: ▼ 다음 부품`);
      // 같은 번호 다시 탭 = 선택 해제
      await tap('.num[data-n="6"] .badge');
      ok((await pg.textContent('#callout')).includes('Tap a number'), `[${scheme}] ${key}: 같은 번호 재탭 → 해제`);
      // See it work
      await tap('#play');
      await pg.waitForTimeout(2600);
      ok((await pg.textContent('#play')).includes('Stop'), `[${scheme}] ${key}: 재생 중 Stop 표시`);
      ok(await pg.$$eval('#steps li.now', l => l.length) === 1, `[${scheme}] ${key}: 재생 중 단계 1개 강조`);
      if (scheme === 'light') await (await pg.$('#sheet')).screenshot({ path: `${out}/${key}-playing.png` });
      await pg.waitForTimeout(7000);
      ok((await pg.textContent('#play')).includes('See it work'), `[${scheme}] ${key}: 재생 끝 → 원래대로`);
      // 재생 중 Stop
      await tap('#play'); await pg.waitForTimeout(500); await tap('#play');
      ok((await pg.textContent('#play')).includes('See it work'), `[${scheme}] ${key}: Stop 누르면 멈춤`);
      // 퀴즈: microwave 는 오답, 나머지 정답
      const ANS = { microwave: 1, toilet: 2, zipper: 0 };
      const pick = key === 'microwave' ? 0 : ANS[key], right = pick === ANS[key];
      await tap(`.opt[data-i="${pick}"]`);
      const res = await pg.textContent('.result');
      ok(right ? res.includes('1 more thing') : res.includes('Not quite'), `[${scheme}] ${key}: 퀴즈 ${right ? '정답' : '오답'} 피드백`);
      ok(await pg.$eval(`.opt[data-i="${ANS[key]}"]`, e => e.classList.contains('right')), `[${scheme}] ${key}: 정답 보기에 초록 표시`);
      ok(await pg.$$eval('.opt:not([disabled])', l => l.length) === 0, `[${scheme}] ${key}: 답한 뒤 보기 잠김`);
      // 저장
      await tap('#save');
      ok((await pg.getAttribute('#save', 'aria-pressed')) === 'true', `[${scheme}] ${key}: 저장 켜짐`);
      if (scheme === 'light') await pg.screenshot({ path: `${out}/${key}-full.png`, fullPage: true });
      // 다음 레슨 버튼
      await tap('#next');
      ok(await pg.isVisible('#sheet svg'), `[${scheme}] ${key}: Next lesson → 다음 레슨`);
      await tap('#back');
      ok(await pg.isVisible('h1.large >> text=Library'), `[${scheme}] ${key}: 뒤로 → Library`);
    }
    // Library: 완료 체크·저장 섹션
    ok(await pg.$$eval('.row .done', l => l.length) >= 3, `[${scheme}] Library: 3개 모두 완료 체크`);
    ok(await pg.isVisible('.sec >> text=Saved'), `[${scheme}] Library: Saved 섹션`);
    await pg.screenshot({ path: `${out}/02-library-${scheme}.png`, fullPage: true });
    // 저장 해제
    await tap(`[data-open=zipper]`); await tap('#save');
    ok((await pg.getAttribute('#save', 'aria-pressed')) === 'false', `[${scheme}] 저장 해제`);
    await tap('[data-tab=today]');
    ok(await pg.isVisible('h1.large >> text=Today'), `[${scheme}] Today 탭으로 복귀`);
    if (scheme === 'dark') await pg.screenshot({ path: `${out}/03-today-dark.png`, fullPage: true });
    // 새로고침 뒤 기록 유지
    await pg.reload();
    await tap('[data-tab=library]');
    ok(await pg.$$eval('.row .done', l => l.length) >= 3, `[${scheme}] 새로고침 뒤 완료 기록 유지`);
    ok(errs.length === 0, `[${scheme}] 콘솔 에러 0건 ${errs.join(' | ')}`);
    await ctx.close();
  }
  await b.close();
  console.log(log.join('\n')); console.log(fails.join('\n'));
  console.log(`\n통과 ${log.length} / 실패 ${fails.length}`);
  process.exit(fails.length ? 1 : 0);
})();
