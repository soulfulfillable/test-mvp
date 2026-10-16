{
/* 22. Solar panel (silicon cell cross-section) */
const SP_X0 = 40, SP_X1 = 252;                  // cell cut edges
const SP_HITS = [[112, 136], [168, 124], [206, 152]];
const SP_SRC = [[64, 6], [124, 6], [174, 6]];
const SP_FING = [72, 152, 232];                  // finger x (centers)
const SP_DC1 = [[236, 80], [272, 80], [272, 112], [284, 112]];
const SP_DC2 = [[284, 128], [276, 128], [276, 201], [252, 201]];
const spAt = (pts, d) => {                       // point at distance d along a polyline
  for (let i = 0; i < pts.length - 1; i++) {
    const [x1, y1] = pts[i], [x2, y2] = pts[i + 1], L = Math.hypot(x2 - x1, y2 - y1);
    if (d <= L) return [x1 + (x2 - x1) * d / L, y1 + (y2 - y1) * d / L];
    d -= L;
  }
  return pts[pts.length - 1];
};
const spLen = pts => pts.slice(1).reduce((s, q, i) => s + Math.hypot(q[0] - pts[i][0], q[1] - pts[i][1]), 0);
const spEdge = (x, y0, y1, dir) => {             // zig-zag break line
  let d = `M${x},${y0}`, k = 0;
  for (let y = y0 + 6; y < y1; y += 6) d += `L${x + (k++ % 2 ? 0 : dir * 3)},${y}`;
  return d + `L${x},${y1}`;
};
LESSONS.push({
  key: 'solar-panel', title: 'Solar Panel', cat: 'Home', mins: 3, vb: [360, 240],
  summary: 'Light knocks electrons loose inside a sandwich of two kinds of silicon. An electric field at the boundary pushes them all one way, out through metal contacts and around a circuit: electricity with no moving parts.',
  parts: [
    { n: 1, name: 'Glass & coating', at: [40, 72], num: [20, 64], desc: 'Glass protects the cell. Under it, a thin anti-reflective coating keeps the shiny silicon from bouncing light away — bare silicon reflects over 30% of it.' },
    { n: 2, name: 'Metal contacts', at: [233, 78], num: [232, 40], desc: 'Thin metal fingers and wider busbars on the front collect electrons while leaving most of the surface open to light. A full metal layer on the back completes the circuit.' },
    { n: 3, name: 'n-type silicon', at: [40, 94], num: [20, 92], desc: 'A thin top layer of silicon doped (mixed with a trace of another element) so it has spare electrons that can move.' },
    { n: 4, name: 'p-n junction', at: [40, 107], num: [20, 120], desc: 'Where the two layers meet, an electric field forms. It acts like a one-way slope: freed electrons are pushed up to the n side, holes down to the p side.' },
    { n: 5, name: 'p-type silicon', at: [40, 150], num: [20, 152], desc: 'The thick main layer, doped to have “holes” — places missing an electron. Most of the light is absorbed here.' },
    { n: 6, name: 'Inverter', at: [330, 124], num: [346, 166], desc: 'Solar cells make direct current (DC). The inverter turns it into the alternating current (AC) that your home’s outlets and lights use.' },
  ],
  steps: [
    { text: 'Sunlight goes through the glass. The coating keeps the silicon from reflecting it away.', parts: [1], t: [0, 2.2] },
    { text: 'When light is absorbed, it knocks an electron loose and leaves a hole behind — an electron-hole pair.', parts: [5], t: [2.2, 4.4] },
    { text: 'The junction’s electric field sorts them: electrons are pushed up into the n-type layer, holes down into the p-type layer.', parts: [4, 5], t: [4.4, 6.6] },
    { text: 'The front contacts collect the electrons. They flow out through the inverter, light the bulb, and return through the back contact to fill the holes.', parts: [2, 6], t: [6.6, 9] },
  ],
  dur: 9,
  why: 'Why two kinds of silicon? Light alone just frees electrons that soon fall back into holes as heat. The field at the p-n junction pulls the pair apart before that happens and sends every electron the same way — which is what makes a current.',
  fact: 'The first practical silicon solar cell was shown by Bell Labs on April 25, 1954. It turned about 6% of sunlight into electricity. Silicon’s theoretical limit is about 32%.',
  quiz: {
    q: 'What pushes the freed electrons toward the front contacts?',
    opts: ['The heat of the sun', 'The electric field at the p-n junction', 'The weight of the glass'],
    a: 1,
    why: 'Where n-type and p-type silicon meet, a built-in electric field forms. It sweeps electrons to the n side and holes to the p side, so they flow out as current instead of recombining.'
  },
  sources: [
    ['Solar cell — Wikipedia', 'https://en.wikipedia.org/wiki/Solar_cell'],
    ['Solar Photovoltaic Cell Basics — U.S. Department of Energy', 'https://www.energy.gov/cmei/systems/solar-photovoltaic-cell-basics'],
    ['PV Cells 101, Part 2 — U.S. Department of Energy', 'https://www.energy.gov/eere/solar/articles/pv-cells-101-part-2-solar-photovoltaic-cell-research-directions'],
    ['Anti-Reflection Coatings — PVEducation', 'https://www.pveducation.org/pvcdrom/design/anti-reflection-coatings'],
    ['April 25, 1954: Bell Labs Demonstrates the First Practical Silicon Solar Cell — APS News', 'https://www.aps.org/apsnews/2009/04/bell-labs-silicon-solar-cell'],
  ],
  art(p) {
    const X0 = SP_X0, X1 = SP_X1, W = X1 - X0;
    let ions = '';
    for (let x = 82; x <= 220; x += 34) ions += `<circle cx="${x}" cy="101" r="2.6" class="ink thin fw"/><path d="M${x - 1.5},101H${x + 1.5}M${x},99.5V102.5" class="ink thin"/>
      <circle cx="${x + 17}" cy="111" r="2.6" class="ink thin fw"/><path d="M${x + 15.5},111H${x + 18.5}" class="ink thin"/>`;
    let fingers = '';
    SP_FING.forEach(x => fingers += `<rect x="${x - 4}" y="76" width="8" height="8" rx="1" class="ink" fill="#c9ccd1"/>`);
    return `
    <g class="shell">
      <path d="M236,80H272V112H284 M284,128H276V201H252" class="ink" stroke-width="1.2"/>
      <path d="M302,104V64 M312,104V64" class="ink" stroke-width="1.2"/>
      <circle cx="307" cy="44" r="13" class="ink fw"/>
      <path d="M302,56V50L304,46L306,50L308,46L310,50L312,46V56" class="ink thin"/>
      <rect x="300" y="55" width="14" height="9" rx="1.5" class="ink fm"/><path d="M300,58.5H314M300,61.5H314" class="ink thin"/>
      <text x="262" y="100" class="hand">DC</text><text x="318" y="90" class="hand">AC</text>
      <text x="12" y="36" class="hand">sunlight</text>
    </g>
    <g data-part="1"><rect x="${X0}" y="62" width="${W}" height="14" fill="#f1f2f4"/>
      <path d="M${X0},62H${X1}M${X0},76H${X1}" class="ink"/>
      <path d="M86,66l8,-3M92,72l14,-6M190,66l8,-3M196,72l14,-6" class="ink thin"/>
      <rect x="${X0}" y="76" width="${W}" height="4" fill="#6b7078"/>
      <text x="46" y="73" class="hand">glass</text></g>
    <g data-part="3"><rect x="${X0}" y="80" width="${W}" height="24" fill="#dfe2e6"/></g>
    <g data-part="5"><rect x="${X0}" y="106" width="${W}" height="90" fill="#f3f4f6"/></g>
    <g data-part="4"><rect x="${X0}" y="96" width="${W}" height="20" fill="url(#${p}grid)" opacity=".55"/>
      <path d="M${X0},106H${X1}" class="ink" stroke-dasharray="5 3"/>${ions}
      <g id="${p}sep"></g></g>
    <g data-part="2">${fingers}<rect x="${X0}" y="196" width="${W}" height="10" fill="url(#${p}hatch)"/>
      <path d="M${X0},196H${X1}M${X0},206H${X1}" class="ink"/>
      <g id="${p}dc"></g><g id="${p}ac"></g><path id="${p}glow" class="energy"/></g>
    <g class="shell">
      <path d="${spEdge(X0, 62, 206, -1)}${spEdge(X1, 62, 206, 1)}" class="ink"/>
      <text x="46" y="96" class="hand">n-type</text><text x="46" y="160" class="hand">p-type</text></g>
    <g data-part="1"><g id="${p}ph"></g></g>
    <g data-part="5"><g id="${p}pairs"></g></g>
    <g data-part="6"><rect x="284" y="104" width="46" height="32" rx="3" class="ink fw"/>
      <path d="M290,124q4,-8 8,0t8,0" class="ink thin"/><path d="M310,121H324M310,126H324" class="ink thin"/>
      <text x="307" y="116" class="hand" text-anchor="middle" style="font-size:8px">DC → AC</text></g>`;
  },
  anim(svg, p, t) {
    const q = id => svg.querySelector('#' + p + id);
    const S = t == null;
    // photons
    let ph = '';
    SP_SRC.forEach((s, i) => {
      const h = SP_HITS[i], u = S ? 1 : seg(t, .1 + .35 * i, 1.6 + .3 * i);
      if (u <= .05 || (!S && t > 2.8)) return;
      const tail = S ? 0 : Math.max(0, u - .45);
      const a = [s[0] + (h[0] - s[0]) * tail, s[1] + (h[1] - s[1]) * tail], b = [s[0] + (h[0] - s[0]) * u, s[1] + (h[1] - s[1]) * u];
      ph += `<path d="${wave([a, b], 3, 9, S ? 0 : t * 12)}" class="energy"/>`;
    });
    q('ph').innerHTML = ph;
    // electron-hole pairs
    let pr = '', sep = '';
    SP_HITS.forEach(([hx, hy], i) => {
      const fx = SP_FING.reduce((b, x) => Math.abs(x - hx) < Math.abs(b - hx) ? x : b, SP_FING[0]);
      let ex, ey, hy2, eo = 1, ho = 1;
      if (S) { ex = hx; ey = 90; hy2 = 186; }
      else {
        const born = seg(t, 1.8 + .3 * i, 2.6 + .3 * i);
        if (born <= 0) return;
        const jig = 1.5 * Math.sin(t * 20 + i) * (1 - seg(t, 4.4, 4.8));
        const up = seg(t, 4.6, 6.4), go = seg(t, 6.7, 7.8);
        ex = hx + jig + (fx - hx) * go; ey = hy - 3 + (90 - hy + 3) * up - 8 * seg(t, 7.8, 8.4);
        hy2 = hy + 3 + (186 - hy - 3) * up;
        eo = born * (1 - seg(t, 8.2, 8.6)); ho = born * (1 - seg(t, 8.0, 8.8));
      }
      pr += `<circle cx="${f1(hx)}" cy="${f1(hy2)}" r="2.8" class="ink thin fw" opacity="${f1(ho)}"/>`;
      pr += `<circle cx="${f1(ex)}" cy="${f1(ey)}" r="2.8" fill="#D63A2A" opacity="${f1(eo)}"/>`;
      if (S) sep += `<path d="M${hx + 6},${hy - 2}V98M${hx + 3},101L${hx + 6},97.5L${hx + 9},101 M${hx + 6},${hy + 4}V180M${hx + 3},177L${hx + 6},180.5L${hx + 9},177" class="ink thin"/>`;
    });
    q('pairs').innerHTML = pr;
    q('sep').innerHTML = sep;
    // current in the circuit: DC dots march, AC dots shake
    const on = S ? 1 : seg(t, 6.8, 7.4);
    let dc = '', ac = '';
    if (on > .01) {
      const sh = S ? 0 : (t - 6.8) * 22;
      [SP_DC1, SP_DC2].forEach(pts => {
        const L = spLen(pts);
        for (let d = (sh % 12); d < L; d += 12) { const [x, y] = spAt(pts, d); dc += `<circle cx="${f1(x)}" cy="${f1(y)}" r="2" fill="#D63A2A" opacity="${f1(on)}"/>`; }
      });
      const o = S ? 0 : 3.5 * Math.sin(t * 14);
      for (let y = 70; y <= 98; y += 9) ac += `<circle cx="302" cy="${f1(y + o)}" r="2" fill="#D63A2A" opacity="${f1(on)}"/><circle cx="312" cy="${f1(y - o)}" r="2" fill="#D63A2A" opacity="${f1(on)}"/>`;
    }
    q('dc').innerHTML = dc; q('ac').innerHTML = ac;
    // bulb glow
    let g = '';
    for (let k = 0; k < 7; k++) { const a = (-180 + k * 30) * Math.PI / 180; g += `M${f1(307 + 17 * Math.cos(a))},${f1(44 + 17 * Math.sin(a))}L${f1(307 + 23 * Math.cos(a))},${f1(44 + 23 * Math.sin(a))}`; }
    q('glow').setAttribute('d', g);
    q('glow').setAttribute('opacity', f1(S ? 1 : seg(t, 7.2, 7.8)));
  }
});
}
