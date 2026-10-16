{
/* 21. Hybrid car (power-split full hybrid) */
const HY_Z = [300, 62];                        // zoom center (planetary gearset, end view)
const HY_S = 11.5, HY_P = 9.5, HY_RI = 30.5;   // sun, planet, ring pitch radii
const hyGear = (cx, cy, r, n, h, a0, inner) => {
  let d = '';
  for (let i = 0; i < n; i++) {
    const a = (a0 + i * 360 / n) * Math.PI / 180, w = Math.PI / n;
    const pts = [[r - h / 2, a - w * .55], [r + h / 2, a - w * .3], [r + h / 2, a + w * .3], [r - h / 2, a + w * .55]];
    pts.forEach(([rr, aa], j) => { if (inner) rr = 2 * r - rr; d += (i === 0 && j === 0 ? 'M' : 'L') + f1(cx + rr * Math.cos(aa)) + ',' + f1(cy + rr * Math.sin(aa)); });
  }
  return d + 'Z';
};
// speeds: car (ring/wheels) and engine (carrier)
const hyV = t => .5 * seg(t, 0, 2.5) + .5 * seg(t, 2.5, 5.5) - .85 * seg(t, 5.5, 8.3) - .15 * seg(t, 8.3, 8.9);
const hyE = t => 1.1 * (seg(t, 2.6, 3.2) - seg(t, 5.4, 5.9));
function hyAngles(t) {
  if (t == null) return { r: 12, c: 20, s: 5, pl: 0, e: 60 };
  let r = 0, c = 0, s = 0, pl = 0, e = 0;
  const dt = .025;
  for (let x = 0; x < t; x += dt) {
    const wr = 200 * hyV(x), wc = 150 * hyE(x);
    const ws = ((HY_S + HY_RI) * wc - HY_RI * wr) / HY_S;
    r += wr * dt; c += wc * dt; s += ws * dt; pl += (wc - HY_S * (ws - wc) / HY_P) * dt; e += wc * 4 * dt;
  }
  return { r, c, s, pl, e };
}
const hyArrow = (x1, y1, x2, y2) => {
  const L = Math.hypot(x2 - x1, y2 - y1), ux = (x2 - x1) / L, uy = (y2 - y1) / L, a = 4.5;
  return `M${x1},${y1}L${x2},${y2}M${f1(x2 - ux * a - uy * a * .7)},${f1(y2 - uy * a + ux * a * .7)}L${x2},${y2}L${f1(x2 - ux * a + uy * a * .7)},${f1(y2 - uy * a - ux * a * .7)}`;
};
const hyCirc = (cx, cy, r) => `M${cx - r},${cy}a${r},${r} 0 1 0 ${2 * r},0a${r},${r} 0 1 0 ${-2 * r},0`;
LESSONS.push({
  key: 'hybrid-car', title: 'Hybrid Car', cat: 'Getting Around', mins: 3, vb: [360, 260],
  summary: 'A gas engine and an electric motor share the work through a planetary gearset. The car creeps away on battery power, uses both to speed up, and when you brake the motor turns into a generator that recharges the battery.',
  parts: [
    { n: 1, name: 'Gas engine', at: [332, 144], num: [342, 116], desc: 'A small, efficient gasoline engine. It only runs when it’s needed, and it shuts off at stops instead of idling.' },
    { n: 2, name: 'Generator', at: [246, 168], num: [208, 162], desc: 'An electric machine on the gearset’s sun gear. Spun by the engine, it makes electricity for the motor or the battery.' },
    { n: 3, name: 'Power split device', at: [334, 28], num: [346, 14], desc: 'A planetary gearset. The engine turns the planet carrier, the generator sits on the sun gear, and the motor and wheels sit on the ring gear, so engine power can go to the wheels, the generator, or both.' },
    { n: 4, name: 'Electric motor', at: [246, 204], num: [214, 236], desc: 'Drives the wheels from the battery, helps the engine when you speed up — and runs backward as a generator when you brake.' },
    { n: 5, name: 'Inverter', at: [246, 133], num: [218, 110], desc: 'Power electronics that turn the battery’s direct current into the alternating current the motor runs on, and back again to recharge the battery.' },
    { n: 6, name: 'Battery', at: [100, 192], num: [56, 178], desc: 'A high-voltage battery pack that holds far more energy than a regular car battery. It never plugs in: the engine and braking keep it charged.' },
  ],
  steps: [
    { text: 'Pulling away slowly: the engine stays off. The battery feeds the motor through the inverter, and the motor alone turns the wheels.', parts: [6, 4], t: [0, 2.5] },
    { text: 'Speeding up: the engine starts. The gearset splits its power — some to the wheels, some to the generator, whose electricity helps drive the motor.', parts: [1, 3, 2], t: [2.5, 5.5] },
    { text: 'Braking: the wheels now turn the motor, which works as a generator. Its drag slows the car, and the electricity flows back into the battery.', parts: [4, 5, 6], t: [5.5, 8.5] },
    { text: 'Stopped: the engine shuts off instead of idling, so it burns no gas while you wait.', parts: [1], t: [8.5, 10] },
  ],
  dur: 10,
  why: 'Why two power sources? A gas engine wastes the most fuel at low speeds and when idling. Letting the electric motor handle those moments — and catching braking energy that would otherwise turn into brake heat — means a smaller engine can run only where it’s most efficient.',
  fact: 'The first mass-produced hybrid car went on sale in Japan in December 1997. It reached North America in 2000.',
  quiz: {
    q: 'Where does a regular (non-plug-in) hybrid get the electricity for its battery?',
    opts: ['From a charging station', 'From solar cells on the roof', 'From the engine and from braking'],
    a: 2,
    why: 'A standard hybrid can’t plug in. The engine spins the generator, and when you brake, the motor runs as a generator too — turning the car’s motion back into stored charge.'
  },
  sources: [
    ['Hybrid electric vehicle — Wikipedia', 'https://en.wikipedia.org/wiki/Hybrid_electric_vehicle'],
    ['Hybrid Synergy Drive (power split device) — Wikipedia', 'https://en.wikipedia.org/wiki/Hybrid_Synergy_Drive'],
    ['How Hybrids Work — fueleconomy.gov (U.S. DOE & EPA)', 'https://www.fueleconomy.gov/feg/hybridtech.shtml'],
    ['How Do Hybrid Electric Cars Work? — Alternative Fuels Data Center, U.S. DOE', 'https://afdc.energy.gov/vehicles/electric-basics-hev'],
    ['Milestones: Toyota Prius, the World’s First Mass-Produced Hybrid Vehicle, 1997 — IEEE ETHW', 'https://ethw.org/Milestones:Toyota_Prius,_the_World%27s_First_Mass-Produced_Hybrid_Vehicle,_1997'],
  ],
  art(p) {
    const [zx, zy] = HY_Z;
    return `
    <g class="shell">
      <path d="M4,250.5H356" class="ink"/>
      <path d="M14,206Q10,172 22,160L62,150Q80,146 94,136Q120,98 150,93H194Q212,94 240,128L322,136Q346,140 350,162V208Q350,218 340,218H312A28,28 0 0 0 256,218H102A28,28 0 0 0 46,218H24Q14,218 14,206Z" class="ink" fill="#fff"/>
      <path d="M100,134Q120,104 148,99H193Q208,101 230,128 M164,99V134 M100,134H232" class="ink thin"/>
      <path d="M343,146h6v8h-6z M15,164h5v10h-5z" class="ink thin fw"/>
      <rect x="102" y="211" width="154" height="6" fill="url(#${p}hatch)" class="ink thin"/>
      <rect x="232" y="127" width="5" height="84" fill="url(#${p}hatch)" class="ink thin"/>
      <path d="M96,178H150V170Q146,166 98,166Z M100,166L94,124Q96,120 102,122L108,166 M168,182H212V174Q206,170 170,170Z M172,170L164,124Q166,120 172,122L180,170" class="ink thin fw"/>
      <path d="M210,128L218,118" class="ink" stroke-width="2"/>
      <path d="${hyCirc(74, 226, 24)}${hyCirc(74, 226, 15)}" fill-rule="evenodd" fill="#5c6168" class="ink thin"/>
      <path d="${hyCirc(284, 226, 24)}${hyCirc(284, 226, 15)}" fill-rule="evenodd" fill="#5c6168" class="ink thin"/>
      <g id="${p}whR"></g><g id="${p}whF"></g>
      <path d="M276,183L282,222 M272,186L278,224" class="ink thin"/>
      <circle cx="276" cy="170" r="17" class="ink thin" stroke-dasharray="2 2"/>
      <path d="M268,157L272,110 M287,158L314,108" class="ink thin" stroke-dasharray="2 2"/>
      <text x="246" y="26" class="hand" text-anchor="end">sun — generator</text>
      <text x="246" y="40" class="hand" text-anchor="end">carrier — engine</text>
      <text x="246" y="54" class="hand" text-anchor="end">ring — motor, wheels</text>
    </g>
    <g data-part="6"><rect x="98" y="182" width="54" height="24" rx="2" class="ink fm"/>
      <path d="M107,182V206M116,182V206M125,182V206M134,182V206M143,182V206" class="ink thin"/>
      <path d="M152,190H226V140H240" class="ink thin" stroke-dasharray="4 1.5"/>
      <path id="${p}bOut" class="energy"/><path id="${p}bIn" class="energy"/></g>
    <g data-part="5"><rect x="240" y="133" width="22" height="13" rx="2" class="ink fw"/>
      <path d="M244,137H258M244,141H258" class="ink thin"/></g>
    <g data-part="2"><rect x="246" y="160" width="18" height="22" rx="3" class="ink fm"/>
      <path d="M249,160V182M252,160V182M255,160V182M258,160V182M261,160V182" class="ink thin"/>
      <path id="${p}g1" class="energy"/></g>
    <g data-part="4"><rect x="240" y="184" width="20" height="20" rx="3" class="ink fm"/>
      <path d="M243,184V204M246,184V204M249,184V204M252,184V204M255,184V204M258,184V204" class="ink thin"/>
      <path d="M260,194H274" class="ink" stroke-width="2"/>
      <path d="M243,146V184" class="ink thin" stroke-dasharray="4 1.5"/>
      <path id="${p}m2" class="energy"/><path id="${p}m2r" class="energy"/><path id="${p}m2a" class="energy"/><path id="${p}dr4" class="energy"/></g>
    <g data-part="1"><path d="M300,144H340V204H300Z M307,152V184H333V152Z" fill-rule="evenodd" fill="url(#${p}hatch)" class="ink"/>
      <rect x="307" y="152" width="26" height="32" fill="url(#${p}grid)"/>
      <rect x="318" y="137" width="4" height="8" class="ink thin fw"/>
      <rect id="${p}pist" x="309" y="158" width="22" height="10" class="ink fm"/>
      <path id="${p}rod" class="ink" stroke-width="2"/>
      <circle cx="320" cy="194" r="7" class="ink thin fw"/>
      <path d="M300,170H289" class="ink" stroke-width="2"/>
      <path id="${p}eng" class="energy"/></g>
    <g data-part="3"><rect x="266" y="158" width="22" height="24" rx="3" class="ink fw"/>
      <circle cx="277" cy="170" r="8" class="ink thin"/><circle cx="277" cy="170" r="3" class="ink thin"/>
      <path id="${p}dr3" class="energy"/>
      <circle cx="${zx}" cy="${zy}" r="48" fill="url(#${p}grid)" class="ink"/>
      <g id="${p}ring"><path d="${hyCirc(zx, zy, 46)}${hyGear(zx, zy, HY_RI + .8, 30, 2.4, 0, true)}" fill-rule="evenodd" fill="url(#${p}hatch)" class="ink"/>
        <path d="M${zx},${zy - 46}V${zy - 41}" class="ink" stroke-width="2"/></g>
      <path id="${p}carrier" class="ink thin" fill="#d4d7dc"/>
      <g id="${p}planets"></g>
      <path id="${p}sun" class="ink fw"/>
      <circle cx="${zx}" cy="${zy}" r="3.5" fill="url(#${p}hatch)" class="ink thin"/></g>`;
  },
  anim(svg, p, t) {
    const q = id => svg.querySelector('#' + p + id);
    const [zx, zy] = HY_Z, A = hyAngles(t);
    // wheels
    const hub = (cx, cy) => { let d = ''; for (let i = 0; i < 5; i++) { const a = (A.r + i * 72) * Math.PI / 180; d += `M${f1(cx + 4 * Math.cos(a))},${f1(cy + 4 * Math.sin(a))}L${f1(cx + 13 * Math.cos(a))},${f1(cy + 13 * Math.sin(a))}`; } return `<path d="${d}" class="ink thin"/><circle cx="${cx}" cy="${cy}" r="4" class="ink thin fw"/>`; };
    q('whR').innerHTML = hub(74, 226); q('whF').innerHTML = hub(284, 226);
    // gearset
    q('ring').setAttribute('transform', `rotate(${f1(A.r)} ${zx} ${zy})`);
    q('sun').setAttribute('d', hyGear(zx, zy, HY_S, 12, 2.4, A.s, false));
    const orb = HY_S + HY_P;
    let cd = '', pl = '';
    for (let i = 0; i < 3; i++) {
      const a = (A.c + i * 120) * Math.PI / 180, px = zx + orb * Math.cos(a), py = zy + orb * Math.sin(a);
      const a1 = a - .62, a2 = a + .62, ro = orb + 6;
      cd += (i ? 'L' : 'M') + `${f1(zx + ro * Math.cos(a1))},${f1(zy + ro * Math.sin(a1))}L${f1(zx + ro * Math.cos(a2))},${f1(zy + ro * Math.sin(a2))}`;
      pl += `<path d="${hyGear(px, py, HY_P, 10, 2.4, A.pl + i * 7, false)}" class="ink fw"/><circle cx="${f1(px)}" cy="${f1(py)}" r="2.6" class="ink thin" fill="#9aa0a8"/>`;
    }
    q('carrier').setAttribute('d', cd + 'Z');
    q('planets').innerHTML = pl;
    // engine piston
    const ea = A.e * Math.PI / 180, cy0 = 194, top = 158 + 6 * (1 - Math.cos(ea));
    q('pist').setAttribute('y', f1(top));
    q('rod').setAttribute('d', `M320,${f1(top + 5)}L${f1(320 + 5.5 * Math.sin(ea))},${f1(cy0 - 5.5 * Math.cos(ea))}`);
    // energy flows by mode
    const ph = t == null ? 0 : t * 10;
    const vis = (a, b) => t == null ? null : seg(t, a, a + .3) - seg(t, b, b + .3);
    const set = (id, d, o) => { const e = q(id); e.setAttribute('d', d); e.setAttribute('opacity', f1(o)); };
    const drive = vis(.1, 5.3), boost = vis(2.8, 5.3), regen = vis(5.7, 8.1);
    const S = t == null;   // static picture = "speeding up"
    const cab = [[152, 190], [226, 190], [226, 140], [239, 140]];
    set('bOut', wave(cab, 1.8, 7, ph), S ? 1 : drive);
    set('bIn', wave(cab.slice().reverse(), 1.8, 7, ph), S ? 0 : regen);
    set('m2', wave([[243, 147], [243, 183]], 1.6, 6, ph), S ? 1 : drive);
    set('m2r', wave([[243, 183], [243, 147]], 1.6, 6, ph), S ? 0 : regen);
    set('g1', wave([[256, 159], [256, 147]], 1.2, 5, ph), S ? 1 : boost);
    set('m2a', regen > .01 && !S ? hyArrow(273, 189, 262, 189) : hyArrow(262, 199, 273, 199), S ? 1 : Math.max(drive, regen));
    set('dr4', regen > .01 ? hyArrow(268, 222, 264, 206) : hyArrow(266, 204, 270, 222), S ? 0 : Math.max(vis(.1, 2.6), regen));
    set('dr3', hyArrow(286, 186, 290, 214), S ? 1 : boost);
    set('eng', hyArrow(299, 178, 290, 178), S ? 1 : boost);
  }
});
}
