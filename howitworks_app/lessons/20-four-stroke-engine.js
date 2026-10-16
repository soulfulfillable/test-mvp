{
/* 20. Four-stroke car engine */
const EC = [180, 232], ER = 22, EL = 66;          // crank center, throw, rod length
const EDOTS = [[.18, .3], [.5, .2], [.82, .35], [.3, .62], [.66, .58], [.12, .82], [.44, .86], [.86, .8], [.24, .12], [.74, .12], [.58, .4], [.38, .42], [.92, .58], [.08, .52], [.62, .9], [.3, .95]];
const EIN = [[60, 91], [128, 91], [150, 96], [159, 108], [160, 126]];
const EEX = [[200, 126], [201, 108], [210, 96], [232, 91], [300, 91]];
const ePt = (pts, s) => {                           // point at fraction s along a polyline
  let L = 0; const seg = [];
  for (let i = 0; i < pts.length - 1; i++) { const d = Math.hypot(pts[i + 1][0] - pts[i][0], pts[i + 1][1] - pts[i][1]); seg.push(d); L += d; }
  let k = s * L;
  for (let i = 0; i < seg.length; i++) { if (k <= seg[i]) { const u = k / seg[i]; return [pts[i][0] + (pts[i + 1][0] - pts[i][0]) * u, pts[i][1] + (pts[i + 1][1] - pts[i][1]) * u]; } k -= seg[i]; }
  return pts[pts.length - 1];
};
const eCam = (cx, cy, dir) => {                    // cam lobe outline, nose pointing at angle dir (deg, screen)
  let d = '';
  for (let a = 0; a < 360; a += 6) {
    let D = ((a - dir) % 360 + 540) % 360 - 180;
    const r = 8 + (Math.abs(D) < 45 ? 5 * Math.cos(2 * D * Math.PI / 180) : 0);
    d += (d ? 'L' : 'M') + f1(cx + r * Math.cos(a * Math.PI / 180)) + ',' + f1(cy + r * Math.sin(a * Math.PI / 180));
  }
  return d + 'Z';
};
LESSONS.push({
  key: 'four-stroke-engine', title: 'Car Engine', cat: 'Getting Around', mins: 3, vb: [360, 280],
  summary: 'A piston slides up and down a cylinder in four strokes: suck in air and fuel, squeeze it, ignite it, push out the exhaust. Only one stroke makes power — the crankshaft turns that push into spin.',
  parts: [
    { n: 1, name: 'Piston', at: [150, 160], num: [98, 170], desc: 'A metal plug that slides in the cylinder. Springy rings around it seal the gap, so the gas above can’t leak past.' },
    { n: 2, name: 'Connecting rod', at: [187, 206], num: [266, 196], desc: 'Links the piston to the crankshaft. It swings side to side as the piston goes straight up and down.' },
    { n: 3, name: 'Crankshaft', at: [204, 236], num: [266, 248], desc: 'An offset “crank” turns the rod’s up-and-down push into rotation — the spin that eventually reaches the wheels. Each stroke is half a turn.' },
    { n: 4, name: 'Valves', at: [150, 120], num: [96, 124], desc: 'Two spring-loaded doors in the roof of the cylinder: the intake valve lets air and fuel in, the exhaust valve lets burned gas out. Most of the time both are shut.' },
    { n: 5, name: 'Camshafts', at: [147, 46], num: [96, 46], desc: 'Egg-shaped lobes push each valve open at just the right moment. A belt or chain from the crankshaft turns them at exactly half its speed.' },
    { n: 6, name: 'Spark plug', at: [184, 22], num: [240, 16], desc: 'Makes a tiny lightning bolt across a small gap at the top of the compression stroke, setting the squeezed mix on fire.' },
  ],
  steps: [
    { text: 'Intake: the piston slides down and the intake valve opens. Air and a fine mist of gasoline rush in.', parts: [1, 4], t: [0, 2.5] },
    { text: 'Compression: both valves shut and the piston rises, squeezing the mix into roughly a tenth of the space.', parts: [1], t: [2.5, 5] },
    { text: 'Power: the spark plug fires. The burning gas expands and slams the piston down, and the rod spins the crankshaft.', parts: [6, 2, 3], t: [5, 7.5] },
    { text: 'Exhaust: the cam opens the exhaust valve and the rising piston pushes the burned gas out. Then it all starts over.', parts: [4, 5], t: [7.5, 10] },
  ],
  dur: 10,
  why: 'Why squeeze before the spark? Compressed fuel and air burn with a far bigger push, so the same gallon goes further. Gasoline engines typically squeeze 8 to 12 times — more makes the mix explode on its own (knock) before the spark.',
  fact: 'Nicolaus Otto built the first practical four-stroke engine in 1876, and the cycle still carries his name. But a Frenchman, Alphonse Beau de Rochas, had described it in 1862 — and in 1886 Otto’s German patent was thrown out.',
  quiz: {
    q: 'How many times does the crankshaft turn in one full four-stroke cycle?',
    opts: ['Twice', 'Once', 'Four times'],
    a: 0,
    why: 'Each stroke — down, up, down, up — is half a turn, so four strokes take two full turns. That’s why the camshaft runs at half speed: each valve opens just once per cycle.'
  },
  sources: [
    ['Four-stroke engine — Wikipedia', 'https://en.wikipedia.org/wiki/Four-stroke_engine'],
    ['Four Stroke Internal Combustion Engine — NASA Glenn Research Center', 'https://www.grc.nasa.gov/www/k-12/airplane/engopt.html'],
    ['Compression ratio — Wikipedia', 'https://en.wikipedia.org/wiki/Compression_ratio'],
    ['Nicolaus Otto — Wikipedia', 'https://en.wikipedia.org/wiki/Nicolaus_Otto'],
  ],
  art(p) {
    let dots = '';
    EDOTS.forEach((_, i) => dots += `<circle id="${p}d${i}" r="1.8"/>`);
    let sdots = '';
    for (let i = 0; i < 7; i++) sdots += `<circle id="${p}si${i}" r="1.8" fill="#3a7fc0"/><circle id="${p}se${i}" r="1.8" fill="#8a8f96"/>`;
    return `
    <g class="shell">
      <path d="M122,60V36Q122,28 130,28H230Q238,28 238,36V60" class="ink thin"/>
      <path d="M128,120V222C128,262 150,276 180,276C210,276 232,262 232,222V120Z M148,120V220.5A34,34 0 1 0 212,220.5V120Z" fill-rule="evenodd" fill="url(#${p}hatch)" class="ink"/>
      <path d="M148,120V220.5A34,34 0 1 0 212,220.5V120Z" fill="url(#${p}grid)" opacity="0"/>
      <path d="M120,60H240V120H120Z M120,82L138,82Q166,82 169,104L170,120H150L151,108Q151,100 138,100L120,100Z M240,82L222,82Q194,82 191,104L190,120H210L209,108Q209,100 222,100L240,100Z M152,58H168V78H152Z M192,58H208V78H192Z M176,60H184V120H176Z" fill-rule="evenodd" fill="url(#${p}hatch)" class="ink"/>
      <path d="M120,82L138,82Q166,82 169,104L170,120H150L151,108Q151,100 138,100L120,100Z" fill="url(#${p}grid)"/>
      <path d="M240,82L222,82Q194,82 191,104L190,120H210L209,108Q209,100 222,100L240,100Z" fill="url(#${p}grid)"/>
      <rect x="152" y="58" width="16" height="20" fill="url(#${p}grid)"/><rect x="192" y="58" width="16" height="20" fill="url(#${p}grid)"/>
      <rect x="60" y="82" width="60" height="18" fill="url(#${p}grid)"/><path d="M60,82H120M60,100H120" class="ink"/>
      <rect x="240" y="82" width="60" height="18" fill="url(#${p}grid)"/><path d="M240,82H300M240,100H300" class="ink"/>
      <text x="62" y="76" class="hand">air + fuel in</text>
      <text x="298" y="76" class="hand" text-anchor="end">exhaust out</text></g>
    <rect id="${p}gas" x="148.8" y="120.8" width="62.4" height="20"/>
    <g id="${p}dots">${dots}</g>
    <g>${sdots}</g>
    <path id="${p}inflow" class="flow"/><path id="${p}exflow" class="flow" style="stroke:#8a8f96"/>
    <g data-part="3"><path id="${p}web" class="ink fm"/><circle cx="180" cy="232" r="7" class="ink fw"/><circle cx="180" cy="232" r="1.6" fill="#24272c"/>
      <path id="${p}crot" class="energy" opacity="0"/></g>
    <g data-part="2"><path id="${p}rod" class="ink fm"/><circle id="${p}bigend" r="10" class="ink fm"/><circle id="${p}smallend" cx="180" r="6.5" class="ink fm"/><circle id="${p}pin" r="5" class="ink fw"/></g>
    <g data-part="1"><path id="${p}piston" fill="url(#${p}hatch)" class="ink" fill-rule="evenodd"/><path id="${p}rings" class="ink thin"/>
      <circle id="${p}wpin" r="4.5" class="ink fw"/></g>
    <g data-part="4"><path id="${p}vi" class="ink fm"/><path id="${p}ve" class="ink fm"/>
      <path id="${p}spi" class="ink thin"/><path id="${p}spe" class="ink thin"/></g>
    <g data-part="5"><path id="${p}ci" class="ink fm"/><path id="${p}ce" class="ink fm"/>
      <circle cx="160" cy="46" r="2.4" class="ink thin fw"/><circle cx="200" cy="46" r="2.4" class="ink thin fw"/></g>
    <g data-part="6"><rect x="177" y="20" width="6" height="6" rx="1" class="ink fw"/><rect x="176.5" y="26" width="7" height="26" rx="2" class="ink fw"/>
      <path d="M173,52H187V60H173Z" class="ink fm"/><rect x="176" y="60" width="8" height="60" class="ink fm"/>
      <path d="M176,64h8M176,68h8M176,72h8M176,76h8M176,80h8" class="ink thin"/>
      <path d="M180,120V123.5M176,120V126H181" class="ink thin"/></g>
    <path id="${p}spark" class="energy" opacity="0"/>
    <path id="${p}push" class="energy" opacity="0" style="stroke-width:2.2"/>
    <text id="${p}stroke" x="300" y="146" class="hand" text-anchor="middle" style="font-size:13px;fill:#D63A2A"></text>`;
  },
  anim(svg, p, t) {
    const q = id => svg.querySelector('#' + p + id);
    const th = t == null ? 395 : 720 * t / 10;          // crank angle, degrees
    const a = th * Math.PI / 180;
    const px = EC[0] + ER * Math.sin(a), py = EC[1] - ER * Math.cos(a);
    const wy = py - Math.sqrt(EL * EL - (px - EC[0]) ** 2), pt = wy - 14;   // wrist pin, piston top
    // crank web: counterweight opposite the pin + boss around the pin
    const fp = Math.atan2(py - EC[1], px - EC[0]);
    let web = '';
    for (let k = 120; k <= 240; k += 10) { const g = fp + k * Math.PI / 180; web += (web ? 'L' : 'M') + f1(EC[0] + 28 * Math.cos(g)) + ',' + f1(EC[1] + 28 * Math.sin(g)); }
    for (let k = -90; k <= 90; k += 15) { const g = fp + k * Math.PI / 180; web += 'L' + f1(px + 10 * Math.cos(g)) + ',' + f1(py + 10 * Math.sin(g)); }
    q('web').setAttribute('d', web + 'Z');
    // connecting rod: tapered beam + big end + small end
    const rx = px - EC[0], ry = py - wy, rl = Math.hypot(rx, ry), qx = -ry / rl, qy = rx / rl;
    q('rod').setAttribute('d', `M${f1(EC[0] + qx * 3.5)},${f1(wy + qy * 3.5)}L${f1(px + qx * 5.5)},${f1(py + qy * 5.5)}L${f1(px - qx * 5.5)},${f1(py - qy * 5.5)}L${f1(EC[0] - qx * 3.5)},${f1(wy - qy * 3.5)}Z`);
    q('bigend').setAttribute('cx', f1(px)); q('bigend').setAttribute('cy', f1(py));
    q('smallend').setAttribute('cy', f1(wy));
    q('pin').setAttribute('cx', f1(px)); q('pin').setAttribute('cy', f1(py));
    // piston (cut in half: hatched crown and skirt)
    q('piston').setAttribute('d', `M150,${f1(pt)}H210V${f1(pt + 30)}H204V${f1(pt + 9)}H156V${f1(pt + 30)}H150Z`);
    q('rings').setAttribute('d', `M150,${f1(pt + 3)}h5M150,${f1(pt + 6)}h5M210,${f1(pt + 3)}h-5M210,${f1(pt + 6)}h-5`);
    q('wpin').setAttribute('cx', 180); q('wpin').setAttribute('cy', f1(wy));
    // cams (half speed) and valves
    const m = ((th % 720) + 720) % 720;
    const lobe = d => { const D = ((90 - d) % 360 + 540) % 360 - 180; return Math.abs(D) < 45 ? 5 * Math.cos(2 * D * Math.PI / 180) : 0; };
    const dI = 90 + (m - 90) / 2, dE = 90 + (m - 630) / 2, li = lobe(dI), le = lobe(dE);
    q('ci').setAttribute('d', eCam(160, 46, dI)); q('ce').setAttribute('d', eCam(200, 46, dE));
    const valve = (x, l) => `M${x - 6},${f1(54 + l)}H${x + 6}V${f1(62 + l)}H${x + 1.2}V${f1(115 + l)}L${x + 10},${f1(118 + l)}V${f1(120 + l)}H${x - 10}V${f1(118 + l)}L${x - 1.2},${f1(115 + l)}V${f1(62 + l)}H${x - 6}Z`;
    q('vi').setAttribute('d', valve(160, li)); q('ve').setAttribute('d', valve(200, le));
    const spring = (x, l) => { let d = `M${x - 5},${f1(63 + l)}`; const h = (78 - 63 - l) / 6; for (let i = 1; i <= 6; i++) d += `L${i % 2 ? x + 5 : x - 5},${f1(63 + l + i * h)}`; return d; };
    q('spi').setAttribute('d', spring(160, li)); q('spe').setAttribute('d', spring(200, le));
    // gas in the cylinder
    const ph = Math.floor(m / 180), u = (m % 180) / 180;
    const gas = q('gas');
    gas.setAttribute('height', f1(Math.max(0, pt - 120.8)));
    const tint = ['#dcebf7', '#c4dcf1', '#f6d3cd', '#e4e5e7'][ph];
    gas.setAttribute('fill', ph === 2 ? (u < .5 ? '#f6d3cd' : '#f1e1de') : tint);
    let n = 16, col = '#3a7fc0';
    if (ph === 0) n = Math.round(16 * Math.min(1, u * 1.15));
    if (ph === 2) col = '#D63A2A';
    if (ph === 3) { col = '#8a8f96'; n = Math.round(16 * (1 - u)); }
    const H = pt - 123;
    EDOTS.forEach(([dx, dy], i) => {
      const d = q('d' + i), jit = t == null ? 0 : Math.sin(t * 7 + i * 1.7) * 1.2;
      d.setAttribute('cx', f1(151 + dx * 58 + jit)); d.setAttribute('cy', f1(122 + dy * H));
      d.setAttribute('fill', col); d.setAttribute('opacity', i < n ? 1 : 0);
    });
    // streams through the ports
    const time = t == null ? 0 : t;
    for (let i = 0; i < 7; i++) {
      const s = ((i / 7) + time * .9) % 1;
      const [ix, iy] = ePt(EIN, ph === 0 && li > .5 ? s : s * .55);
      const di = q('si' + i); di.setAttribute('cx', f1(ix)); di.setAttribute('cy', f1(iy));
      di.setAttribute('opacity', ph === 0 && li > .5 ? 1 : (s * .55 < .5 ? .8 : 0));
      const [ex, ey] = ePt(EEX, s);
      const de = q('se' + i); de.setAttribute('cx', f1(ex)); de.setAttribute('cy', f1(ey));
      de.setAttribute('opacity', ph === 3 && le > .5 ? 1 : 0);
    }
    q('inflow').setAttribute('d', ph === 0 && li > 1 ? 'M70,110H108M103,106.5L108,110L103,113.5' : '');
    q('exflow').setAttribute('d', ph === 3 && le > 1 ? 'M252,110H290M285,106.5L290,110L285,113.5' : '');
    // spark + expanding push
    const sp = m >= 350 && m < 378 ? 1 : 0;
    q('spark').setAttribute('opacity', sp || t == null ? 1 : 0);
    q('spark').setAttribute('d', 'M180,124l-3,4l5,1l-4,5M171,124l-4,-2M189,124l4,-2M172,131l-5,2M188,131l5,2');
    const pw = ph === 2 ? 1 - u * .7 : 0;
    q('push').setAttribute('opacity', f1(pw));
    const ay = pt - 4;
    q('push').setAttribute('d', ay > 142 ? `M162,136V${f1(ay)}M158,${f1(ay - 5)}L162,${f1(ay)}L166,${f1(ay - 5)}M198,136V${f1(ay)}M194,${f1(ay - 5)}L198,${f1(ay)}L202,${f1(ay - 5)}` : '');
    q('crot').setAttribute('opacity', ph === 2 ? f1(pw) : 0);
    q('crot').setAttribute('d', 'M206,214A30,30 0 0 1 208,248M203,244L208,248L211,242');
    q('stroke').textContent = ['1 · INTAKE', '2 · COMPRESSION', '3 · POWER', '4 · EXHAUST'][ph];
    return { 1: [150, f1(pt + 15)], 2: [f1((EC[0] + px) / 2 + 5), f1((wy + py) / 2)], 4: [150, f1(120 + li)] };
  }
});
}
