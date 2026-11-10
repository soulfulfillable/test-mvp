// Escape 3D — input. Phone: floating joystick in the lower-left area + jump button lower-right.
// Desktop: WASD / arrow keys + Space. Touch handlers call preventDefault so a drag never scrolls or closes an in-app sheet.
export function createInput({ stickZone, stickBase, stickKnob, jumpBtn, onFirst }) {
  const I = { x: 0, z: 0, jumpHeld: false, jumpEdge: false, any: false, touchUsed: false };
  const keys = new Set();
  let first = false;
  const wake = () => { if (!first) { first = true; onFirst && onFirst(); } I.any = true; };

  // ---- keyboard ----
  const MAP = { KeyW: 'u', ArrowUp: 'u', KeyS: 'd', ArrowDown: 'd', KeyA: 'l', ArrowLeft: 'l', KeyD: 'r', ArrowRight: 'r' };
  addEventListener('keydown', (e) => {
    if (e.code === 'Space' || e.code === 'KeyK') { if (!I.jumpHeld) I.jumpEdge = true; I.jumpHeld = true; wake(); e.preventDefault(); return; }
    if (MAP[e.code]) { keys.add(MAP[e.code]); wake(); e.preventDefault(); }
  });
  addEventListener('keyup', (e) => {
    if (e.code === 'Space' || e.code === 'KeyK') { I.jumpHeld = false; return; }
    if (MAP[e.code]) keys.delete(MAP[e.code]);
  });
  addEventListener('blur', () => { keys.clear(); I.jumpHeld = false; stick.id = null; centerKnob(); });

  // ---- joystick (floating: the base jumps to where the thumb lands inside the zone) ----
  const stick = { id: null, ox: 0, oy: 0, x: 0, y: 0, R: 52 };
  let home = null;
  function centerKnob() { stickKnob.style.transform = 'translate(-50%,-50%)'; stick.x = stick.y = 0; stickBase.classList.remove('on'); if (home) { stickBase.style.left = home.left; stickBase.style.top = home.top; } }
  function moveKnob(dx, dy) {
    const d = Math.hypot(dx, dy), m = Math.min(1, d / stick.R), a = Math.atan2(dy, dx);
    const kx = Math.cos(a) * m * stick.R, ky = Math.sin(a) * m * stick.R;
    stickKnob.style.transform = `translate(calc(-50% + ${kx}px), calc(-50% + ${ky}px))`;
    // small dead zone, then full speed comes quickly (thumbs are imprecise)
    const mm = m < 0.12 ? 0 : Math.min(1, (m - 0.12) / 0.6);
    stick.x = Math.cos(a) * mm; stick.y = Math.sin(a) * mm;
  }
  stickZone.addEventListener('touchstart', (e) => {
    e.preventDefault(); wake(); I.touchUsed = true;
    if (stick.id !== null) return;
    const t = e.changedTouches[0]; stick.id = t.identifier;
    const zr = stickZone.getBoundingClientRect();
    if (!home) home = { left: stickBase.style.left, top: stickBase.style.top };
    stick.ox = t.clientX; stick.oy = t.clientY;
    stickBase.style.left = (t.clientX - zr.left) + 'px'; stickBase.style.top = (t.clientY - zr.top) + 'px';
    stickBase.classList.add('on'); moveKnob(0, 0);
  }, { passive: false });
  stickZone.addEventListener('touchmove', (e) => {
    e.preventDefault();
    for (const t of e.changedTouches) if (t.identifier === stick.id) moveKnob(t.clientX - stick.ox, t.clientY - stick.oy);
  }, { passive: false });
  const end = (e) => { for (const t of e.changedTouches) if (t.identifier === stick.id) { stick.id = null; centerKnob(); } };
  stickZone.addEventListener('touchend', end); stickZone.addEventListener('touchcancel', end);

  // ---- jump button ----
  jumpBtn.addEventListener('touchstart', (e) => { e.preventDefault(); wake(); I.touchUsed = true; I.jumpEdge = true; I.jumpHeld = true; jumpBtn.classList.add('down'); }, { passive: false });
  const jEnd = (e) => { e.preventDefault(); I.jumpHeld = false; jumpBtn.classList.remove('down'); };
  jumpBtn.addEventListener('touchend', jEnd, { passive: false }); jumpBtn.addEventListener('touchcancel', jEnd, { passive: false });
  jumpBtn.addEventListener('mousedown', (e) => { e.preventDefault(); wake(); I.jumpEdge = true; I.jumpHeld = true; jumpBtn.classList.add('down'); });
  addEventListener('mouseup', () => { if (I.jumpHeld && !keys.size) { I.jumpHeld = false; jumpBtn.classList.remove('down'); } });

  // read once per frame: camera looks down −Z, so stick up = −Z
  I.read = () => {
    let x = stick.x, z = stick.y;
    if (keys.size) {
      x = (keys.has('r') ? 1 : 0) - (keys.has('l') ? 1 : 0);
      z = (keys.has('d') ? 1 : 0) - (keys.has('u') ? 1 : 0);
      const n = Math.hypot(x, z); if (n > 1) { x /= n; z /= n; }
    }
    I.x = x; I.z = z;
    const edge = I.jumpEdge; I.jumpEdge = false;
    return { x, z, jumpPressed: edge, jumpHeld: I.jumpHeld };
  };
  I.release = () => { keys.clear(); stick.id = null; centerKnob(); I.jumpHeld = false; I.jumpEdge = false; };
  return I;
}
