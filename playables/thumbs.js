// docs/assets/games/full/*.png (1170×2532) → docs/assets/games/<name>.jpg (카드용 450×974)
const { chromium } = require('playwright'); const fs = require('fs'); const path = require('path');
const DIR = path.resolve(__dirname, '..', 'docs', 'assets', 'games');
(async () => {
  const b = await chromium.launch({ args: ['--no-sandbox', '--allow-file-access-from-files'] }); const p = await b.newPage();
  await p.goto('file://' + DIR + '/full/');
  for (const f of fs.readdirSync(DIR + '/full').filter((f) => f.endsWith('.png'))) {
    const data = await p.evaluate(async (src) => {
      const img = new Image(); img.src = src; await img.decode();
      const c = document.createElement('canvas'); c.width = 450; c.height = 974;
      c.getContext('2d').drawImage(img, 0, 0, 450, 974); return c.toDataURL('image/jpeg', 0.86);
    }, 'file://' + DIR + '/full/' + f);
    const out = path.join(DIR, f.replace('.png', '.jpg'));
    fs.writeFileSync(out, Buffer.from(data.split(',')[1], 'base64'));
    console.log(f, '->', path.basename(out), Math.round(fs.statSync(out).size / 1024) + 'KB');
  }
  await b.close();
})();
