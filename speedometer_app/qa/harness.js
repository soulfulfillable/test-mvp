// 속도계 웹 미리보기를 폰 크기 헤드리스 Chromium 으로 띄우는 헬퍼 — 가짜 GPS 주입 (web-qa.js·store/screenshots/make.js 공용).
// 가짜 GPS: navigator.geolocation 을 바꿔 끼워 window.__gps = {mph, acc, on, speed} 대로 1초마다 측정값을 보낸다.
// 권한: window.__perm = 'prompt'|'granted'|'denied'.  canvaskit 은 로컬 빌드 사본으로 응답(gstatic 막힘).
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const fs = require('fs'), path = require('path');
const CK = path.resolve(__dirname, '..', 'flutter/build/web/canvaskit');
const fakeGeo = () => {
  window.__gps = { mph: 0, acc: 5, on: true, speed: true };
  window.__perm = window.__perm || 'prompt';
  let lat = 40.7128, watchers = new Map(), nextId = 1;
  const pos = () => {
    const g = window.__gps, ms = g.mph / 2.2369362920544;
    lat += ms / 111195.08;
    return { coords: { latitude: lat, longitude: -74.006, accuracy: g.acc, speed: g.speed ? ms : null, altitude: null, altitudeAccuracy: null, heading: null }, timestamp: Date.now() };
  };
  const deny = { code: 1, message: 'User denied Geolocation', PERMISSION_DENIED: 1 };
  const geo = {
    getCurrentPosition(ok, err) {
      setTimeout(() => {
        if (window.__perm === 'denied') return err && err(deny);
        window.__perm = 'granted';
        ok(pos());
      }, 50);
    },
    watchPosition(ok, err) {
      const id = nextId++;
      if (window.__perm === 'denied') { setTimeout(() => err && err(deny), 50); return id; }
      const t = setInterval(() => { if (window.__gps.on) ok(pos()); }, 1000);
      watchers.set(id, t);
      return id;
    },
    clearWatch(id) { clearInterval(watchers.get(id)); watchers.delete(id); },
  };
  Object.defineProperty(navigator, 'geolocation', { get: () => geo });
  const q = navigator.permissions && navigator.permissions.query.bind(navigator.permissions);
  if (navigator.permissions) navigator.permissions.query = d => d && d.name === 'geolocation'
    ? Promise.resolve({ state: window.__perm, onchange: null }) : q(d);
};

exports.open = async function open(url, { perm = 'prompt', viewport = { width: 390, height: 844 } } = {}) {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required'] });
  const ctx = await b.newContext({ viewport, deviceScaleFactor: 3, hasTouch: true, isMobile: true });
  const p = await ctx.newPage();
  await p.addInitScript(`window.__perm=${JSON.stringify(perm)};(${fakeGeo.toString()})()`);
  await p.route(/^https:\/\//, async route => {
    const u = route.request().url();
    const m = /flutter-canvaskit\/[0-9a-f]+\/(.*)$/.exec(u);
    if (m && fs.existsSync(path.join(CK, m[1]))) {
      const f = path.join(CK, m[1]);
      return route.fulfill({ status: 200, body: fs.readFileSync(f), headers: { 'content-type': f.endsWith('.wasm') ? 'application/wasm' : 'text/javascript', 'access-control-allow-origin': '*' } });
    }
    try {
      const r = await fetch(u);
      await route.fulfill({ status: r.status, body: Buffer.from(await r.arrayBuffer()), headers: { 'content-type': r.headers.get('content-type') || 'application/octet-stream', 'access-control-allow-origin': '*' } });
    } catch (e) { await route.abort(); }
  });
  const errs = [];
  p.on('pageerror', e => errs.push('pageerror: ' + e.message));
  p.on('console', m => { if (m.type() === 'error') errs.push('console: ' + m.text()); });
  await p.goto(url);
  await p.getByRole('button').first().waitFor({ timeout: 40000 });
  await p.waitForTimeout(800);
  return { b, p, errs };
}


exports.labels = p => p.evaluate(() => [...document.querySelectorAll('flt-semantics')].map(e => (e.getAttribute('aria-label') || '') + ' ' + (e.textContent || '')).join(' | '));
exports.tap = async (p, name) => { await p.getByRole('button', { name }).first().click(); await p.waitForTimeout(700); };
exports.gps = (p, g) => p.evaluate(g => Object.assign(window.__gps, g), g);
