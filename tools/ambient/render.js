// 앰비언트 영상 렌더러: 소리(docs/soaking.html 엔진) + 그림(docs/ambient-scene.html) → MP4
// 사용: node tools/ambient/render.js <mood> <seed> <minutes> <out.mp4> [--audio-only]
//  - 소리는 헤드리스 크롬 OfflineAudioContext 로 5분 조각씩 렌더(조각마다 시드 seed*100+k),
//    조각 사이 8초 크로스페이드로 이어 붙인다 → 90분도 메모리 걱정 없음. 같은 시드 = 같은 영상.
//  - 그림은 12초 끊김 없는 반복 장면을 24fps 로 뽑아 영상 길이만큼 반복.
const fs = require('fs'), path = require('path'), { execFileSync } = require('child_process');
let pw; try { pw = require('playwright-core'); } catch (e) { pw = require('/opt/node-tools/node_modules/playwright-core'); }
const [mood, seedS, minS, out] = process.argv.slice(2);
const audioOnly = process.argv.includes('--audio-only');
const opt = (k, d) => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : d; };
const PHOTO = opt('--photo', null), VW = parseInt(opt('--width', '1920'), 10), LOOP = parseInt(opt('--loop', '30'), 10);
if (!mood || !out) { console.error('usage: render.js <mood> <seed> <minutes> <out.mp4>'); process.exit(1); }
const SEED = parseInt(seedS, 10), TOTAL = Math.round(parseFloat(minS) * 60), SR = 44100;
const CHUNK = 300, XF = 8, FPS = 24;
const ROOT = path.resolve(__dirname, '../..');
const CHROME = process.env.CHROME || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
const tmp = fs.mkdtempSync(path.join(process.env.TMPDIR || '/tmp', 'amb-'));
const ff = (args) => execFileSync('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-y', ...args], { stdio: 'inherit' });

(async () => {
  fs.mkdirSync(path.dirname(path.resolve(out)), { recursive: true });
  const browser = await pw.chromium.launch({ executablePath: fs.existsSync(CHROME) ? CHROME : undefined, args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--allow-file-access-from-files'] });
  const page = await browser.newPage();
  const errs = []; page.on('pageerror', e => errs.push(String(e)));
  await page.goto('file://' + path.join(ROOT, 'docs/soaking.html'));

  // 1) 소리 조각
  const n = Math.max(1, Math.ceil((TOTAL - XF) / (CHUNK - XF)));
  const wavs = [];
  for (let k = 0; k < n; k++) {
    const len = k === n - 1 ? TOTAL - k * (CHUNK - XF) : CHUNK, t0 = Date.now();
    const seedK = n === 1 ? SEED : SEED * 100 + k;
    const total = await page.evaluate(([m, s, l]) => window.__soaking.renderChunk(m, s, l), [mood, seedK, len]);
    const raws = [0, 1].map(ch => path.join(tmp, `c${k}-${ch}.raw`));
    for (let ch = 0; ch < 2; ch++) {
      const fd = fs.openSync(raws[ch], 'w');
      for (let f = 0; f < total; f += SR * 10) fs.writeSync(fd, Buffer.from(await page.evaluate(([c, a, b]) => window.__soaking.getChunk(c, a, b), [ch, f, SR * 10]), 'base64'));
      fs.closeSync(fd);
    }
    const wav = path.join(tmp, `c${k}.wav`);
    ff(['-f', 's16le', '-ar', SR, '-ac', 1, '-i', raws[0], '-f', 's16le', '-ar', SR, '-ac', 1, '-i', raws[1], '-filter_complex', '[0][1]join=inputs=2:channel_layout=stereo', wav].map(String));
    raws.forEach(f => fs.unlinkSync(f));
    wavs.push(wav);
    console.log(`audio chunk ${k + 1}/${n} (${len}s) ${((Date.now() - t0) / 1000).toFixed(0)}s`);
  }
  // 이어 붙이기 + 끝 페이드 + 음량 맞춤(-18 LUFS)
  const audio = path.join(tmp, 'audio.wav');
  let fc = '', last = '[0]';
  for (let k = 1; k < wavs.length; k++) { fc += `${last}[${k}]acrossfade=d=${XF}:c1=tri:c2=tri[x${k}];`; last = `[x${k}]`; }
  fc += `${last}afade=t=out:st=${TOTAL - 6}:d=6,loudnorm=I=-18:TP=-1.5:LRA=11[a]`;
  ff([...wavs.flatMap(w => ['-i', w]), '-filter_complex', fc, '-map', '[a]', '-ar', String(SR), audio]);

  if (audioOnly) { ff(['-i', audio, '-c:a', 'libmp3lame', '-b:a', '192k', out]); }
  else {
    // 2) 그림 12초 반복
    // 사진이 있으면 사진 + GPU 효과(ambient-glass.html), 없으면 예전 코드 그림(ambient-scene.html)
    let L, grab;
    if (PHOTO) {
      await page.setViewportSize({ width: VW, height: Math.round(VW * 9 / 16) });
      await page.goto('file://' + path.join(ROOT, `docs/ambient-glass.html?static=1&mood=${mood}&seed=${SEED}&w=${VW}&loop=${LOOP}&photo=${encodeURIComponent(path.relative(path.join(ROOT, 'docs'), path.resolve(PHOTO)))}`));
      await page.evaluate(() => window.__glass.ready);
      L = LOOP; grab = t => window.__glass.frame(t, 0.93);
    } else {
      await page.goto('file://' + path.join(ROOT, `docs/ambient-scene.html?mood=${mood}&seed=${SEED}&static=1`));
      L = await page.evaluate(() => window.__scene.L); grab = t => window.__scene.frame(t, 0.92);
    }
    for (let i = 0; i < L * FPS; i++) {
      const d = await page.evaluate(grab, i / FPS);
      fs.writeFileSync(path.join(tmp, `f${String(i).padStart(4, '0')}.jpg`), Buffer.from(d.split(',')[1], 'base64'));
    }
    const loop = path.join(tmp, 'loop.mp4');
    ff(['-framerate', String(FPS), '-i', path.join(tmp, 'f%04d.jpg'), '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '21', '-preset', 'slow', '-g', String(L * FPS), loop]);
    // 3) 합치기 (반복 영상은 다시 인코딩하지 않고 복사)
    ff(['-stream_loop', '-1', '-i', loop, '-i', audio, '-map', '0:v', '-map', '1:a', '-c:v', 'copy', '-c:a', 'aac', '-b:a', '192k', '-t', String(TOTAL), '-movflags', '+faststart', out]);
  }
  fs.rmSync(tmp, { recursive: true, force: true });
  if (errs.length) { console.error('page errors', errs); process.exitCode = 1; }
  console.log('done', out, (fs.statSync(out).size / 1e6).toFixed(1) + 'MB');
  await browser.close();
})();
