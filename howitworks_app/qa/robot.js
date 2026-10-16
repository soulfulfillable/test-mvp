// 테스트 로봇 — 모든 레슨·모든 버튼을 실제 터치(tap)로 누르고, 레슨 내용을 규칙으로 검사한다.
//   node howitworks_app/qa/robot.js <스크린샷 폴더> [--only key1,key2] [--html 파일]
// iPhone 13 (390x844 CSS px, 3x = 1170x2532). 라이트 전체 + 다크 화면 점검.
const { chromium } = require('/opt/node-tools/node_modules/playwright-core');
const path = require('path'), fs = require('fs');
const args = process.argv.slice(2);
const opt = k => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : null; };
const out = args[0] && !args[0].startsWith('--') ? args[0] : '.';
const only = opt('--only') ? opt('--only').split(',') : null;
const HTML = path.resolve(opt('--html') || path.join(__dirname, '../../docs/how-it-works.html'));
fs.mkdirSync(path.join(out, 'lessons'), { recursive: true });
const pass = [], fails = [], warns = [];
const ok = (c, m) => (c ? pass : fails).push((c ? 'PASS ' : 'FAIL ') + m);
const BANNED = /SmartyMe|Imprint|Brilliant\b|coming soon|lorem|TODO|TBD|\bhugo\b/i;
const EMOJI = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u;

function checkContent(L, CATS) {
  const k = L.key, txt = [L.title, L.summary, L.why, L.fact, L.quiz.q, L.quiz.why, ...L.quiz.opts, ...L.parts.flatMap(p => [p.name, p.desc]), ...L.steps.map(s => s.text)].join(' ');
  ok(/^[a-z0-9-]+$/.test(k), `${k}: key 형식`);
  ok(CATS.includes(L.cat), `${k}: 카테고리 "${L.cat}" 가 정해진 5개 중 하나`);
  ok(L.parts.length === 6, `${k}: 부품 6개 (${L.parts.length})`);
  ok(L.parts.every((p, i) => p.n === i + 1), `${k}: 부품 번호 1~6 순서`);
  ok(L.steps.length >= 3 && L.steps.length <= 4, `${k}: 단계 3~4개`);
  ok(L.steps[0].t[0] === 0 && L.steps.every((s, i) => i === 0 || s.t[0] === L.steps[i - 1].t[1]) && L.steps.at(-1).t[1] === L.dur, `${k}: 단계 시간이 0~dur 를 빈틈없이 덮음`);
  ok(L.steps.every(s => s.parts.every(n => n >= 1 && n <= 6)), `${k}: 단계가 가리키는 부품 번호 유효`);
  ok(L.dur >= 5 && L.dur <= 10, `${k}: 재생 길이 5~10초 (${L.dur})`);
  ok(L.summary.length <= 240, `${k}: 요약 240자 이내 (${L.summary.length})`);
  ok(L.parts.every(p => p.desc.length <= 230 && p.name.length <= 26), `${k}: 부품 이름 26자·설명 230자 이내`);
  ok(!!L.why && L.why.length >= 60 && L.why.length <= 300, `${k}: 설계 이유(why) 60~300자`);
  ok(!!L.fact && L.fact.length <= 300, `${k}: 놀라운 사실 300자 이내`);
  ok(L.quiz.opts.length === 3 && L.quiz.a >= 0 && L.quiz.a < 3 && !!L.quiz.why, `${k}: 퀴즈 3지선다·정답·해설`);
  ok(L.sources.length >= 3 && L.sources.every(([t, u]) => t && /^https:\/\/[^ ]+$/.test(u)), `${k}: 출처 3개 이상, https`);
  ok(L.sources.some(([, u]) => !/wikipedia\.org/.test(u)), `${k}: 위키백과 말고 다른 출처도 하나 이상`);
  ok(!BANNED.test(txt), `${k}: 금지어 없음 ${(txt.match(BANNED) || [''])[0]}`);
  ok(!EMOJI.test(txt), `${k}: 이모지 없음`);
  ok(!/[가-힣]/.test(txt), `${k}: 한글 없음(영어 UI)`);
  const [w, h] = L.vb;
  ok(L.parts.every(p => p.num[0] >= 10 && p.num[0] <= w - 10 && p.num[1] >= 10 && p.num[1] <= h - 10), `${k}: 번호 원이 그림 안`);
  let minD = 1e9;
  L.parts.forEach((a, i) => L.parts.slice(i + 1).forEach(b => minD = Math.min(minD, Math.hypot(a.num[0] - b.num[0], a.num[1] - b.num[1]))));
  ok(minD >= 22, `${k}: 번호 원끼리 22 이상 떨어짐 (최소 ${minD.toFixed(1)})`);
}

(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--no-sandbox'] });
  for (const scheme of ['light', 'dark']) {
    const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 3, hasTouch: true, isMobile: true, colorScheme: scheme });
    const pg = await ctx.newPage();
    const errs = []; pg.on('console', m => m.type() === 'error' && errs.push(m.text())); pg.on('pageerror', e => errs.push(String(e)));
    await pg.goto('file://' + HTML + '?speed=3');
    const tap = async sel => { const el = await pg.waitForSelector(sel); await el.scrollIntoViewIfNeeded(); await el.tap(); await pg.waitForTimeout(40); };
    const noHScroll = async w => ok(await pg.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `[${scheme}] 가로 넘침 없음: ${w}`);
    const meta = await pg.evaluate(() => ({ CATS, L: LESSONS.map(l => ({ ...l, art: undefined, anim: undefined })) }));
    if (scheme === 'light') {
      ok(new Set(meta.L.map(l => l.key)).size === meta.L.length, `레슨 key 중복 없음 (${meta.L.length}개)`);
      ok(new Set(meta.L.map(l => l.title)).size === meta.L.length, '레슨 제목 중복 없음');
      meta.L.forEach(L => checkContent(L, meta.CATS));
      const as = meta.L.map(l => l.quiz.a);
      ok(new Set(as).size > 1 || as.length < 3, `퀴즈 정답 위치가 한쪽으로 쏠리지 않음 (${as.join('')})`);
    }
    ok(await pg.isVisible('h1.large >> text=Today'), `[${scheme}] Today 화면`);
    await noHScroll('Today');
    await pg.screenshot({ path: `${out}/today-${scheme}.png` });
    const list = meta.L.filter(l => !only || only.includes(l.key));
    for (const L of list) {
      const k = L.key, S = `[${scheme}] ${k}`;
      await tap('[data-tab=library]');
      await tap(`[data-open="${k}"]`);
      ok(await pg.isVisible('#back') && (await pg.textContent('h2.title')) === L.title, `${S}: Library → 레슨 열림`);
      await noHScroll(k);
      if (scheme === 'dark') { await (await pg.$('#sheet')).screenshot({ path: `${out}/lessons/${k}-dark.png` }); await tap('#back'); continue; }
      await (await pg.$('#sheet')).screenshot({ path: `${out}/lessons/${k}.png` });
      // 부품 그룹: 존재하고 화면에 그려짐(빈 상자 아님)
      const boxes = await pg.evaluate(() => [1, 2, 3, 4, 5, 6].map(n => { const g = document.querySelector(`#sheet [data-part="${n}"]`); if (!g) return 0; const r = g.getBBox(); return r.width * r.height; }));
      ok(boxes.every(a => a > 4), `${S}: 부품 그룹 6개 모두 그려짐 (${boxes.map(a => Math.round(a)).join(',')})`);
      // 지시선 끝점이 그 부품 상자 근처(±14)
      const near = await pg.evaluate(() => [1, 2, 3, 4, 5, 6].map(n => {
        const g = document.querySelector(`#sheet [data-part="${n}"]`), d = document.querySelector(`#sheet .num[data-n="${n}"] .dot`);
        if (!g || !d) return false; const r = g.getBBox(), x = +d.getAttribute('cx'), y = +d.getAttribute('cy');
        return x >= r.x - 14 && x <= r.x + r.width + 14 && y >= r.y - 14 && y <= r.y + r.height + 14; }));
      ok(near.every(Boolean), `${S}: 지시선이 자기 부품을 가리킴 (${near.map(v => v ? 'o' : 'x').join('')})`);
      for (let n = 1; n <= 6; n++) {
        await tap(`#sheet .num[data-n="${n}"] .badge`);
        ok((await pg.textContent('#callout')).includes(L.parts[n - 1].name), `${S}: 번호 ${n} 탭 → "${L.parts[n - 1].name}"`);
      }
      await tap('.arrow[data-d="-1"]');
      ok((await pg.textContent('#callout')).includes(L.parts[4].name), `${S}: ▲ 이전`);
      await tap('.arrow[data-d="1"]'); await tap('#sheet .num[data-n="6"] .badge');
      ok((await pg.textContent('#callout')).includes('Tap a number'), `${S}: 재탭 → 해제`);
      // 재생: 중간 스크린샷, 끝나면 원래대로
      await tap('#play');
      const mid = L.steps[Math.min(2, L.steps.length - 1)].t;
      await pg.waitForTimeout(((mid[0] + mid[1]) / 2) / 3 * 1000);
      ok((await pg.textContent('#play')).includes('Stop') && await pg.$$eval('#steps li.now', l => l.length) === 1, `${S}: 재생 중 단계 강조`);
      await (await pg.$('#sheet')).screenshot({ path: `${out}/lessons/${k}-play.png` });
      await pg.waitForFunction(() => document.querySelector('#play').textContent.includes('See it work'), null, { timeout: (L.dur / 3 + 3) * 1000 }).catch(() => {});
      ok((await pg.textContent('#play')).includes('See it work'), `${S}: 재생 끝 → 원래대로`);
      // 퀴즈: 정답
      await tap(`.opt[data-i="${L.quiz.a}"]`);
      ok((await pg.textContent('.result')).includes('1 more thing'), `${S}: 퀴즈 정답 피드백`);
      await tap('#back');
    }
    if (scheme === 'light' && list.length) {
      await tap(`[data-open="${list[0].key}"]`); await tap('#save');
      ok((await pg.getAttribute('#save', 'aria-pressed')) === 'true', `[${scheme}] 저장 켜짐`);
      await tap('#next'); ok(await pg.isVisible('#sheet svg'), `[${scheme}] Next lesson`);
      await tap('#back');
      ok(await pg.isVisible('.sec >> text=Saved'), `[${scheme}] Saved 섹션`);
      ok(await pg.$$eval('.row .done', l => l.length) >= list.length, `[${scheme}] 완료 체크 ${list.length}개`);
      await pg.screenshot({ path: `${out}/library.png`, fullPage: true });
      await pg.reload(); await tap('[data-tab=library]');
      ok(await pg.$$eval('.row .done', l => l.length) >= list.length, `[${scheme}] 새로고침 뒤 기록 유지`);
    }
    ok(errs.length === 0, `[${scheme}] 콘솔 에러 0건 ${errs.slice(0, 3).join(' | ')}`);
    await ctx.close();
  }
  await b.close();
  fs.writeFileSync(path.join(out, 'robot-log.txt'), [...fails, ...pass].join('\n'));
  console.log(fails.join('\n'));
  console.log(`\n통과 ${pass.length} / 실패 ${fails.length}  (로그: ${out}/robot-log.txt)`);
  process.exit(fails.length ? 1 : 0);
})();
