{
/* 18. Airplane wing — streamlines from a real potential-flow solution (Joukowski airfoil with the Kutta condition) */
const WA = 7 * Math.PI / 180, WMU = [-.11, .1], WR = Math.hypot(1 - WMU[0], WMU[1]);
const WBETA = Math.atan2(WMU[1], 1 - WMU[0]), WG = 4 * Math.PI * WR * Math.sin(WA + WBETA);
const WS = 47, WO = [150, 136];                         // px per unit, screen origin
const cm = (a, b) => [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]];
const cd = (a, b) => { const d = b[0] * b[0] + b[1] * b[1]; return [(a[0] * b[0] + a[1] * b[1]) / d, (a[1] * b[0] - a[0] * b[1]) / d]; };
const jk = z => { const r = cd([1, 0], z); return [z[0] + r[0], z[1] + r[1]]; };          // zeta -> z
const toScr = z => {                                 // airfoil frame -> screen (flow horizontal, wing nose-up)
  const c = Math.cos(-WA), s = Math.sin(-WA), x = z[0] * c - z[1] * s, y = z[0] * s + z[1] * c;
  return [WO[0] + WS * x, WO[1] - WS * y];
};
const wVel = zt => {                                 // complex velocity w = u - iv in the circle plane
  const zp = [zt[0] - WMU[0], zt[1] - WMU[1]];
  const e1 = [Math.cos(WA), -Math.sin(WA)], e2 = [Math.cos(WA), Math.sin(WA)];
  const t2 = cd(cm([WR * WR, 0], e2), cm(zp, zp)), t3 = cd([0, WG / (2 * Math.PI)], zp);
  return [e1[0] - t2[0] + t3[0], e1[1] - t2[1] + t3[1]];
};
const WFOIL = (() => { const o = []; for (let i = 0; i <= 120; i++) { const th = -WBETA + i * TAU / 120; o.push(jk([WMU[0] + WR * Math.cos(th), WMU[1] + WR * Math.sin(th)])); } return o; })();
const WLINES = [1.5, 1.08, .72, .42, .14, -.2, -.5, -.86, -1.3].map(Y0 => {
  // start upstream (screen frame), rotate into the airfoil frame, invert Joukowski
  const X0 = -3.6, c = Math.cos(WA), s = Math.sin(WA);
  const z = [X0 * c - Y0 * s, X0 * s + Y0 * c];
  const sq = (() => { const a = cm(z, z); a[0] -= 4; const r = Math.hypot(a[0], a[1]), ph = Math.atan2(a[1], a[0]) / 2; return [Math.sqrt(r) * Math.cos(ph), Math.sqrt(r) * Math.sin(ph)]; })();
  let zt = [(z[0] + sq[0]) / 2, (z[1] + sq[1]) / 2];
  if (Math.hypot(zt[0], zt[1]) < 1) zt = [(z[0] - sq[0]) / 2, (z[1] - sq[1]) / 2];
  const pts = [], tm = []; let T = 0, prev = null;
  for (let k = 0; k < 1400; k++) {
    const zz = jk(zt), P = toScr(zz);
    if (prev) T += Math.hypot(P[0] - prev[0], P[1] - prev[1]) / WS / Math.max(.05, spd);
    var w = wVel(zt), dz = cd([1, 0], cm(zt, zt)), dzd = [1 - dz[0], -dz[1]];
    var wz = cd(w, dzd), spd = Math.hypot(wz[0], wz[1]);
    pts.push(P); tm.push(T); prev = P;
    if (P[0] > 372) break;
    const u = [w[0], -w[1]], un = Math.hypot(u[0], u[1]) || 1, m = Math.max(.15, Math.hypot(dzd[0], dzd[1]));
    const h = .035 / m;
    zt = [zt[0] + u[0] / un * h, zt[1] + u[1] / un * h];
  }
  return { pts, tm, up: Y0 > -.05 };
});
const wAt = (L, T) => {                              // screen position of a particle after time T on line L
  const { pts, tm } = L; if (T <= 0) return pts[0];
  let lo = 0, hi = tm.length - 1; if (T >= tm[hi]) return pts[hi];
  while (hi - lo > 1) { const m = (lo + hi) >> 1; if (tm[m] < T) lo = m; else hi = m; }
  const u = (T - tm[lo]) / (tm[hi] - tm[lo] || 1);
  return [pts[lo][0] + (pts[hi][0] - pts[lo][0]) * u, pts[lo][1] + (pts[hi][1] - pts[lo][1]) * u];
};
const wPiece = (a, b) => {                           // outline points with chordwise x in [a, b] (airfoil frame)
  const up = WFOIL.slice(0, 61).filter(z => z[0] >= a && z[0] <= b), lo = WFOIL.slice(60).filter(z => z[0] >= a && z[0] <= b);
  return [...up, ...lo].map(toScr);
};
const wPath = pts => 'M' + pts.map(q => f1(q[0]) + ',' + f1(q[1])).join('L') + 'Z';
const wSurf = (x, top) => {                          // surface point at chordwise x (airfoil frame)
  const arr = top ? WFOIL.slice(0, 61) : WFOIL.slice(60);
  let best = arr[0]; arr.forEach(z => { if (Math.abs(z[0] - x) < Math.abs(best[0] - x)) best = z; });
  return toScr(best);
};
LESSONS.push({
  key: 'airplane-wing', title: 'Airplane Wing', cat: 'Getting Around', mins: 3, vb: [360, 250],
  summary: 'A wing is tilted and curved so it bends the oncoming air downward. Pushing air down pushes the wing up — and the same bending leaves lower pressure above the wing than below it. Both are the same lift.',
  parts: [
    { n: 1, name: 'Airfoil', at: [118, 113], num: [96, 84], desc: 'The wing’s cross-section: rounded nose, curved top, sharp trailing edge, tilted a few degrees nose-up — the angle of attack.' },
    { n: 2, name: 'Spars', at: [118, 146], num: [100, 192], desc: 'Beams running the length of the wing, from body to tip. They carry the lift into the fuselage; the thin skin and ribs keep the shape.' },
    { n: 3, name: 'Slat', at: [62, 136], num: [24, 160], desc: 'A curved strip on the leading edge. For takeoff and landing it slides forward, adding wing area so the wing keeps lifting at low speed.' },
    { n: 4, name: 'Flap', at: [234, 150], num: [248, 192], desc: 'A hinged panel on the trailing edge. Lowered, it makes the wing more curved: more lift for slow flight, and more drag to help slow down for landing.' },
    { n: 5, name: 'Aileron', at: [328, 46], num: [336, 72], desc: 'Out near the wingtip. One goes up while the other goes down, so one wing lifts more than the other and the plane rolls into a turn.' },
    { n: 6, name: 'Downwash', at: [300, 170], num: [334, 214], desc: 'The air leaving the wing is aimed downward. Push air down and, by Newton’s third law, the air pushes the wing up.' },
  ],
  steps: [
    { text: 'Air meets the wing at a slight nose-up tilt, the angle of attack. It splits around the nose.', parts: [1], t: [0, 2.5] },
    { text: 'Air over the curved top speeds up and its pressure drops — it reaches the back edge well before the air underneath. Higher pressure below pushes up.', parts: [1, 6], t: [2.5, 5.5] },
    { text: 'All of it leaves the trailing edge aimed downward. Throwing air down pushes the wing up: that’s lift.', parts: [6], t: [5.5, 7.5] },
    { text: 'To fly slowly for landing, slats slide forward and flaps drop back and down — more curve, more lift. Ailerons tilt opposite ways to roll.', parts: [3, 4, 5], t: [7.5, 10] },
  ],
  dur: 10,
  why: 'Why tilt and curve the wing? Lift comes from turning the airflow. More tilt or more curve turns more air, so the wing lifts more — until, at too steep an angle, the flow breaks away from the top and the wing stalls.',
  fact: 'The classic textbook story — air over the top must race to “meet up” with air underneath at the back — is a myth, says NASA. The top air actually moves much faster than that and arrives first. And if path length mattered, planes couldn’t fly upside down.',
  quiz: {
    q: 'What does a wing do to the air flowing past it?',
    opts: ['Nothing — the longer path on top makes the air rush to catch up', 'Turns it downward, and the air pushes the wing up in return', 'Traps it under the wing like a cushion'],
    a: 1,
    why: 'Lift happens when a solid object turns a flowing gas. The wing deflects air down (Newton), and the turning flow leaves lower pressure on top (Bernoulli) — two views of the same thing.'
  },
  sources: [
    ['Incorrect Lift Theory (equal transit) — NASA Glenn Research Center', 'https://www.grc.nasa.gov/www/k-12/VirtualAero/BottleRocket/airplane/wrong1.html'],
    ['Bernoulli and Newton — NASA Glenn Research Center', 'https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/bernoulli-and-newton/'],
    ['Flaps and Slats — NASA Glenn Research Center', 'https://www.grc.nasa.gov/www/k-12/VirtualAero/BottleRocket/airplane/flap.html'],
    ['Lift (force) — Wikipedia', 'https://en.wikipedia.org/wiki/Lift_(force)'],
  ],
  art(p) {
    let lines = '';
    WLINES.forEach(L => lines += 'M' + L.pts.filter((_, i) => i % 3 === 0).map(q => f1(q[0]) + ',' + f1(q[1])).join('L'));
    const slat = wPiece(-2.1, -1.62), main = wPiece(-1.55, 1.02), flap = wPiece(1.08, 2.1);
    const sp = x => { const a = wSurf(x, true), b = wSurf(x, false); return `M${f1(a[0] - 2)},${f1(a[1] + 1)}L${f1(b[0] - 2)},${f1(b[1] - 1)}L${f1(b[0] + 2)},${f1(b[1] - 1)}L${f1(a[0] + 2)},${f1(a[1] + 1)}Z`; };
    const fl = x => { const a = wSurf(x, true), b = wSurf(x, false); return `M${f1(a[0] - 5)},${f1(a[1] + 1.5)}H${f1(a[0] + 5)}M${f1(b[0] - 5)},${f1(b[1] - 1.5)}H${f1(b[0] + 5)}`; };
    const [hx, hy] = wSurf(1.08, false);
    const [sx, sy] = wSurf(-1.62, false);
    return `
    <g data-part="6"><path d="${lines}" class="flow" style="stroke-width:.7;opacity:.6"/>
      <path id="${p}down" class="flow"/></g>
    <g id="${p}tl"></g>
    <g data-part="1"><path d="${wPath(main)}" fill="url(#${p}grid)" class="ink"/></g>
    <g data-part="2"><path d="${sp(-.75) + sp(.55)}" fill="url(#${p}hatch)" class="ink thin"/><path d="${fl(-.75) + fl(.55)}" class="ink"/></g>
    <g data-part="3"><g id="${p}slat" data-o="${f1(sx)},${f1(sy)}"><path d="${wPath(slat)}" class="ink fm"/></g></g>
    <g data-part="4"><g id="${p}flap" data-o="${f1(hx)},${f1(hy)}"><path d="${wPath(flap)}" class="ink fm"/></g></g>
    <path id="${p}lift" class="energy" style="stroke-width:2.2"/>
    <text x="150" y="70" class="hand" text-anchor="middle" style="fill:#3a7fc0">lower pressure</text>
    <text x="150" y="214" class="hand" text-anchor="middle" style="fill:#3a7fc0">higher pressure</text>
    <g class="shell"><path d="M268,16L350,30V42L268,48Z" class="ink fw"/><path d="M268,20L350,33" class="ink thin"/>
      <path d="M272,47.4L306,45.5L305,40L272,42Z" class="ink thin fm"/>
      <path d="M290,10V54" class="ink thin" stroke-dasharray="3 2"/><text x="292" y="62" class="hand">A</text>
      <text x="350" y="12" class="hand" text-anchor="end">top view</text></g>
    <g data-part="5"><path d="M312,45.2L344,43L344,38L312,39.7Z" class="ink fm"/><path id="${p}ail" class="energy"/></g>`;
  },
  anim(svg, p, t) {
    const q = id => svg.querySelector('#' + p + id);
    // timelines: puffs released together upstream; watch the top ones pull ahead
    const base = t == null ? 3.3 : t * .75;
    let d = '', dots = '';
    [0, 1.4, 2.8].forEach(off => {
      const tau = (base + off) % 4.2, up = [], lo = [];
      WLINES.forEach(L => { const P = wAt(L, tau); (L.up ? up : lo).push(P); dots += `<circle cx="${f1(P[0])}" cy="${f1(P[1])}" r="1.9" fill="#3a7fc0"/>`; });
      [up, lo].forEach(a => { if (a.length > 1) d += 'M' + a.map(P => f1(P[0]) + ',' + f1(P[1])).join('L'); });
    });
    q('tl').innerHTML = `<path d="${d}" class="flow" style="stroke-width:1"/>${dots}`;
    const fx = t == null ? 0 : seg(t, 7.6, 8.8) * (1 - seg(t, 9.6, 10));
    const sl = q('slat'), [sx, sy] = sl.dataset.o.split(',').map(Number);
    sl.setAttribute('transform', `translate(${f1(-9 * fx)},${f1(5 * fx)}) rotate(${f1(-16 * fx)} ${sx} ${sy})`);
    const fl = q('flap'), [hx, hy] = fl.dataset.o.split(',').map(Number);
    fl.setAttribute('transform', `translate(${f1(6 * fx)},${f1(3 * fx)}) rotate(${f1(24 * fx)} ${hx} ${hy})`);
    const L = 34 + 18 * fx;
    q('lift').setAttribute('d', `M150,128V${f1(128 - L)}M145,${f1(134 - L)}L150,${f1(128 - L)}L155,${f1(134 - L)}`);
    q('down').setAttribute('d', 'M262,152L298,170M291,171L298,170L295,164M262,170L294,190M287,190L294,190L291,184');
    q('ail').setAttribute('d', fx > .2 ? 'M322,58V66M319,61L322,58L325,61M334,58V66M331,63L334,66L337,63' : '');
    return { 3: [f1(62 - 9 * fx), f1(136 + 5 * fx)], 4: [f1(234 + 6 * fx), f1(150 + 8 * fx)] };
  }
});
}
