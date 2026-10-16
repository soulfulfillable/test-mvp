{
/* 4. Window air conditioner */
const AC_ROWS = (x0, x1) => { const p = []; for (let i = 0; i <= 10; i++) { const y = 106 + i * 8; p.push(...(i % 2 ? [[x1, y], [x0, y]] : [[x0, y], [x1, y]])); } return p; };
const AC_COND = AC_ROWS(278, 292), AC_EVAP = AC_ROWS(84, 96);
const AC_LOOP = [
  [220, 176], [268, 176], [268, 106],             // discharge: hot gas
  ...AC_COND,                                      // condenser: hot gas -> liquid
  [296, 186], [296, 102], [84, 102],              // capillary tube
  ...AC_EVAP,                                      // evaporator: boils, soaks up room heat
  [96, 192], [180, 192], [180, 184], [186, 184],  // suction line
];
LESSONS.push({
  key: 'air-conditioner', title: 'Air Conditioner', cat: 'Home', mins: 3, vb: [360, 260],
  summary: 'An air conditioner is a refrigerator turned inside out: the cold coil faces your room and the hot coil faces outdoors. Refrigerant carries the room’s heat through the wall and dumps it outside — and wrings water out of the air on the way.',
  parts: [
    { n: 1, name: 'Evaporator coil', at: [90, 126], num: [36, 140], desc: 'The indoor coil. Cold, low-pressure refrigerant boils inside it, pulling heat out of the room air blown across its fins.' },
    { n: 2, name: 'Blower', at: [120, 125], num: [104, 70], desc: 'A fan that pulls warm room air through the cold coil and pushes the cooled air back into the room.' },
    { n: 3, name: 'Compressor', at: [210, 188], num: [212, 236], desc: 'On the outdoor side. A motor-driven pump that squeezes the refrigerant gas into a hot, high-pressure gas and keeps it moving around the loop.' },
    { n: 4, name: 'Condenser coil', at: [292, 108], num: [336, 92], desc: 'The outdoor coil. A fan blows outside air through it, the hot gas gives up the room’s heat, and it condenses into a liquid.' },
    { n: 5, name: 'Capillary tube', at: [240, 103], num: [252, 70], desc: 'The expansion device: a thin tube (or a valve) that drops the liquid’s pressure so it turns cold before it reaches the indoor coil.' },
    { n: 6, name: 'Condensate drain', at: [300, 202], num: [330, 228], desc: 'Moisture from the room air condenses on the cold coil like on a cold glass. It drips into a pan and drains outside. An oversized unit removes humidity poorly, the U.S. Department of Energy warns.' },
  ],
  steps: [
    { text: 'The blower pulls warm room air across the cold evaporator coil. The refrigerant inside boils, soaking up the air’s heat.', parts: [2, 1], t: [0, 2.2] },
    { text: 'The compressor, on the outdoor side, squeezes that gas into a hot, high-pressure gas.', parts: [3], t: [2.2, 4.4] },
    { text: 'In the outdoor coil the fan blows the heat away and the gas condenses to a liquid. The capillary tube drops its pressure, and it heads back indoors cold.', parts: [4, 5], t: [4.4, 6.6] },
    { text: 'Water vapor in the room air condenses on the cold coil. It drips into the pan and runs outside — so the room gets drier as well as cooler.', parts: [6, 1], t: [6.6, 9] },
  ],
  dur: 9,
  why: 'Why must half of it stick outside? An AC doesn’t destroy heat — it moves it. The outdoor coil has to dump the room’s heat plus the compressor’s own work into outdoor air, so it needs its own fan and fresh air.',
  fact: 'The first modern air conditioner, designed by Willis Carrier in 1902 for a printing plant in Brooklyn, wasn’t about comfort: it controlled humidity so paper stopped swelling and shrinking and the colors printed in line.',
  quiz: {
    q: 'Why does a window air conditioner drip water outside?',
    opts: ['Moisture in the room air condenses on the cold indoor coil', 'The refrigerant slowly leaks out as water', 'It sprays water on the coil to cool it'],
    a: 0,
    why: 'Like a cold glass on a summer day, the cold evaporator coil pulls water vapor out of the room air. The water drains to the outdoor side — which is also why an AC makes a room less humid.'
  },
  sources: [
    ['Air conditioning — Wikipedia', 'https://en.wikipedia.org/wiki/Air_conditioning'],
    ['Willis Carrier — Wikipedia', 'https://en.wikipedia.org/wiki/Willis_Carrier'],
    ['Invention of Air Conditioning — Carrier', 'https://www.carrier.com/us/en/history/invention-of-air-conditioning/'],
    ['Purchasing Energy-Efficient Room Air Conditioners — U.S. Department of Energy', 'https://www.energy.gov/cmei/femp/purchasing-energy-efficient-room-air-conditioners'],
  ],
  art(p) {
    const pl = pts => pts.map((q, i) => (i ? 'L' : 'M') + q[0] + ',' + q[1]).join('');
    let slats = '', fins = '';
    for (let y = 103; y <= 196; y += 6) slats += `M70,${y}H74M300,${y}H304`;
    for (let x = 82; x <= 98; x += 3) fins += `M${x},103V189`;
    for (let x = 276; x <= 294; x += 3) fins += `M${x},103V189`;
    return `
    <g class="shell">
      <path d="M150,0H174V18H150Z M150,204H174V260H150Z" fill="url(#${p}hatch)" class="ink"/>
      <rect x="152" y="18" width="20" height="78" class="ink fw"/><rect x="156" y="22" width="12" height="70" fill="url(#${p}grid)" class="ink thin"/>
      <path d="M146,204H178" class="ink" stroke-width="2"/>
      <text x="146" y="60" class="hand" text-anchor="end">window</text>
      <text x="146" y="236" class="hand" text-anchor="end">wall</text>
      <path d="M70,96H304V100H70Z M70,200H304V204H70Z" fill="url(#${p}hatch)" class="ink"/>
      <path d="${slats}" class="ink" stroke-width="1.2"/>
      <path d="M70,96V204M304,96V204" class="ink thin"/>
      <path d="M140,100H144V200H140Z" fill="url(#${p}hatch)" class="ink thin"/>
      <path d="${fins}" class="ink thin" opacity=".45"/>
      <rect x="146" y="130" width="24" height="20" rx="2" class="ink fw"/><path d="M106,140H252" class="ink" stroke-width="1.6"/>
      <path id="${p}fan" class="ink" fill="#c9ccd1"/>
      <text x="40" y="30" class="hand" text-anchor="middle">INSIDE</text>
      <text x="300" y="30" class="hand" text-anchor="middle">OUTSIDE</text>
      <text x="20" y="102" class="hand" style="fill:#3a7fc0">cool air</text>
      <text x="16" y="194" class="hand" style="fill:#D63A2A">warm air</text>
      <text x="312" y="182" class="hand" style="fill:#D63A2A">heat out</text></g>
    <g class="loop">
      <path d="${pl(AC_LOOP.slice(0, 3))}L278,106" class="ink" stroke-width="2"/>
      <path d="M96,186V192H180V184H186" class="ink" stroke-width="2"/></g>
    <g data-part="1"><path d="${pl(AC_EVAP)}" class="ink" stroke-width="2"/></g>
    <g data-part="4"><path d="${pl(AC_COND)}" class="ink" stroke-width="2"/></g>
    <g data-part="5"><path d="M292,186H296V102H84V106" class="ink thin" stroke-width="1"/>
      <path d="M232,102c0,-5 -5,-5 -5,0s-5,5 -5,0s-5,-5 -5,0s-5,5 -5,0" class="ink thin"/></g>
    <g data-part="2"><circle cx="120" cy="140" r="15" class="ink fw"/><path id="${p}blow" class="ink thin"/><circle cx="120" cy="140" r="4" class="ink fm"/></g>
    <g data-part="3"><path d="M186,198V174Q186,158 203,158Q220,158 220,174V198Z" class="ink fm"/>
      <rect x="197" y="170" width="12" height="18" fill="url(#${p}grid)" class="ink thin"/>
      <rect id="${p}pist" x="198" y="176" width="10" height="6" class="ink thin" fill="#6b7078"/>
      <path d="M182,199H224" class="ink"/></g>
    <g data-part="6"><rect id="${p}pan" x="74" y="195" width="226" height="5" class="water"/>
      <path d="M300,197V204" class="ink thin"/>
      <g id="${p}cdrop"></g></g>
    <g id="${p}dots" style="opacity:1"></g>
    <g class="air" style="opacity:1"><path id="${p}a0" class="flow"/><path id="${p}a1" class="energy"/>
      <path id="${p}a2" class="energy"/><path id="${p}a3" class="energy"/><path id="${p}a4" class="flow"/></g>`;
  },
  anim(svg, p, t) {
    const q = id => svg.querySelector('#' + p + id);
    const run = t == null ? 0 : t, ph = run * 8;
    q('a0').setAttribute('d', 'M66,112L24,112' + (t == null ? '' : '') + 'M30,107L24,112L30,117');
    q('a0').setAttribute('stroke-dasharray', t == null ? '' : '6 4'); q('a0').setAttribute('stroke-dashoffset', f1(run * 20));
    q('a1').setAttribute('d', wave([[20, 176], [66, 176]], 3, 10, ph));
    q('a2').setAttribute('d', wave([[308, 128], [346, 128]], 3, 10, ph));
    q('a3').setAttribute('d', wave([[308, 158], [346, 158]], 3, 10, ph + 1));
    q('a4').setAttribute('d', 'M214,62V90M209,84L214,90L219,84');
    q('a4').setAttribute('stroke-dasharray', t == null ? '' : '6 4'); q('a4').setAttribute('stroke-dashoffset', f1(-run * 20));
    // blower wheel and outdoor fan on one shaft
    const a = run * 700;
    let bl = '';
    for (let k = 0; k < 10; k++) { const [x1, y1] = rot(120, 128, 120, 140, a + k * 36), [x2, y2] = rot(124, 131, 120, 140, a + k * 36); bl += `M${f1(x1)},${f1(y1)}L${f1(x2)},${f1(y2)}`; }
    q('blow').setAttribute('d', bl);
    const c = 24 * Math.cos(a * Math.PI / 180), c2 = 24 * Math.cos((a + 90) * Math.PI / 180);
    q('fan').setAttribute('d', `M250,140Q246,${f1(140 - c / 2)} 252,${f1(140 - c)}Q258,${f1(140 - c / 2)} 254,140Z M250,140Q246,${f1(140 + c / 2)} 252,${f1(140 + c)}Q258,${f1(140 + c / 2)} 254,140Z M251,${f1(140 - Math.abs(c2) * .15)}h2v${f1(Math.abs(c2) * .3)}h-2Z`);
    q('pist').setAttribute('y', f1(176 + (t == null ? 0 : 4 * Math.sin(run * 14))));
    // condensate drips off the cold coil, collects, and leaves outdoors
    const wet = t == null ? 1 : seg(t, 6.6, 7.2);
    let cd = '';
    if (wet > 0) {
      for (let k = 0; k < 2; k++) { const u = (run * 1.3 + k / 2) % 1; cd += `<path d="M${88 + k * 6},${f1(188 + u * 6)}q-1.4,2.6 0,3.4q1.4,-.8 0,-3.4Z" fill="#3a7fc0" opacity="${f1(wet)}"/>`; }
      for (let k = 0; k < 2; k++) { const u = (run * 1.1 + k / 2) % 1; cd += `<path d="M302,${f1(206 + u * 34)}q-1.8,3.4 0,4.6q1.8,-1.2 0,-4.6Z" fill="#3a7fc0" opacity="${f1(wet)}"/>`; }
    }
    q('cdrop').innerHTML = cd;
    // refrigerant dots around the loop
    const pts = AC_LOOP, L = [0];
    for (let i = 1; i < pts.length; i++) L.push(L[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
    const tot = L[L.length - 1], c0 = 3, c1 = 3 + AC_COND.length - 1, e0 = c1 + 4, e1 = e0 + AC_EVAP.length - 1;
    const cMid = (L[c0] + L[c1]) / 2, eMid = (L[e0] + L[e1]) / 2;
    let d = '';
    const N = 40, off = run * 50;
    for (let k = 0; k < N; k++) {
      const s = ((k * tot / N + off) % tot + tot) % tot;
      let i = 1; while (L[i] < s) i++;
      const u = (s - L[i - 1]) / (L[i] - L[i - 1]);
      const x = pts[i - 1][0] + (pts[i][0] - pts[i - 1][0]) * u, y = pts[i - 1][1] + (pts[i][1] - pts[i - 1][1]) * u;
      let fill = '#D63A2A', st = '#D63A2A', r = 2.2;
      if (s > cMid && s <= L[c1 + 1]) { fill = '#24272c'; st = fill; r = 1.9; }
      else if (s > L[c1 + 1] && s <= eMid) { fill = '#3a7fc0'; st = fill; r = 1.5; }
      else if (s > eMid) { fill = '#fff'; st = '#3a7fc0'; r = 2.2; }
      d += `<circle cx="${f1(x)}" cy="${f1(y)}" r="${r}" fill="${fill}" stroke="${st}" stroke-width=".9"/>`;
    }
    q('dots').innerHTML = d;
  }
});
}
