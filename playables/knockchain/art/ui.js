// Knock Chain — HUD overlay shared by every render (art criterion 3: one font set, one button set, one accent).
// System font only (-apple-system), one accent color (--acc), glyphs are inline SVG (no emoji), 44pt hit areas.
(function () {
  const css = `
  :root{--acc:#1f7a8c;--ink:#1c1c1e;--pill:rgba(255,255,255,.86);--pill-ink:#1c1c1e;--shadow:0 2px 6px rgba(20,30,50,.18)}
  html,body{margin:0;height:100%;overflow:hidden;background:#000}
  body{font:16px/1.3 -apple-system,BlinkMacSystemFont,"SF Pro Text","Helvetica Neue",sans-serif;color:var(--ink);-webkit-font-smoothing:antialiased}
  #hud{position:fixed;inset:0;pointer-events:none}
  .pill{position:absolute;height:40px;border-radius:20px;background:var(--pill);box-shadow:var(--shadow);display:flex;align-items:center;gap:8px;padding:0 14px;font-weight:600;font-size:15px;color:var(--pill-ink);backdrop-filter:blur(6px)}
  .balls{left:16px;top:var(--top)}
  .balls svg{width:18px;height:18px;display:block}
  .level{left:50%;transform:translateX(-50%);top:var(--top);font-size:15px;letter-spacing:.01em}
  .btns{right:16px;top:var(--top);display:flex;gap:10px;padding:0}
  .btn{width:40px;height:40px;border-radius:20px;background:var(--pill);box-shadow:var(--shadow);display:flex;align-items:center;justify-content:center}
  .btn svg{width:18px;height:18px;display:block;stroke:var(--ink);stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round;fill:none}
  .hint{position:absolute;left:50%;transform:translateX(-50%);bottom:var(--bottom);display:flex;flex-direction:column;align-items:center;gap:6px;color:#fff;text-shadow:0 1px 3px rgba(0,0,0,.45)}
  .hint .label{font-size:17px;font-weight:600;background:var(--acc);color:#fff;padding:10px 18px;border-radius:14px;box-shadow:var(--shadow);text-shadow:none}
  .hint .sub{font-size:13px;opacity:.95}
  .goal{position:absolute;left:16px;bottom:var(--bottom);display:flex;align-items:center;gap:8px;font-size:13px;color:#fff;text-shadow:0 1px 3px rgba(0,0,0,.45)}
  .goal i{display:block;width:8px;height:8px;border-radius:4px;background:var(--acc);box-shadow:0 0 0 3px rgba(255,255,255,.55)}
  `;
  const ball = '<svg viewBox="0 0 20 20"><defs><radialGradient id="bg" cx="35%" cy="32%" r="70%"><stop offset="0" stop-color="#ff9a5c"/><stop offset=".7" stop-color="#e2552e"/><stop offset="1" stop-color="#a8371a"/></radialGradient></defs><circle cx="10" cy="10" r="8.5" fill="url(#bg)"/><circle cx="7" cy="6.5" r="2" fill="#fff" opacity=".7"/></svg>';
  const ballOff = '<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="8.5" fill="none" stroke="#1c1c1e" stroke-opacity=".28" stroke-width="2"/></svg>';
  const pause = '<svg viewBox="0 0 20 20"><path d="M6.5 4.5v11M13.5 4.5v11"/></svg>';
  const sound = '<svg viewBox="0 0 20 20"><path d="M3.5 7.5h3l4-3.2v11.4l-4-3.2h-3z"/><path d="M13 7a4.2 4.2 0 0 1 0 6"/><path d="M15.2 4.8a7.3 7.3 0 0 1 0 10.4"/></svg>';
  const q = new URLSearchParams(location.search);
  const square = q.get('mode') === 'square';
  const style = document.createElement('style'); style.textContent = css; document.head.appendChild(style);
  const hud = document.createElement('div'); hud.id = 'hud';
  hud.style.setProperty('--top', square ? '14px' : '58px');
  hud.style.setProperty('--bottom', square ? '16px' : '54px');
  const ballsLeft = +(q.get('balls') || 3);
  hud.innerHTML = `
    <div class="pill balls">${[0, 1, 2].map(i => i < ballsLeft ? ball : ballOff).join('')}</div>
    <div class="pill level">Level 1</div>
    <div class="btns pill" style="background:none;box-shadow:none"><div class="btn">${pause}</div><div class="btn">${sound}</div></div>
    <div class="goal"><i></i>Free the cat</div>
    <div class="hint"><div class="label">Pull to aim</div><div class="sub">Release to shoot</div></div>`;
  document.body.appendChild(hud);
})();
