{
/* 23. Phone battery (lithium-ion cell) */
// 8 lithium ions: home in the graphite (anode) and in the metal oxide (cathode)
const BA_A = [[134, 92], [154, 108], [134, 124], [154, 140], [134, 156], [154, 172], [134, 188], [154, 204]];
const BA_C = [[236, 96], [262, 112], [236, 128], [262, 144], [236, 160], [262, 176], [236, 192], [262, 208]];
const BA_W = [[115, 72], [115, 30], [182, 30], [238, 30], [286, 30], [286, 72]];
const baAt = (pts, d) => {
  for (let i = 0; i < pts.length - 1; i++) {
    const [x1, y1] = pts[i], [x2, y2] = pts[i + 1], L = Math.hypot(x2 - x1, y2 - y1);
    if (d <= L) return [x1 + (x2 - x1) * d / L, y1 + (y2 - y1) * d / L];
    d -= L;
  }
  return pts[pts.length - 1];
};
// ion position: u = 0 in the anode, 1 in the cathode
const baIon = (i, u) => {
  const [ax, ay] = BA_A[i], [cx, cy] = BA_C[i], my = (ay + cy) / 2;
  const pts = [[ax, ay], [180, my], [207, my], [cx, cy]];
  const segs = [0, .35, .65, 1];
  for (let k = 0; k < 3; k++) if (u <= segs[k + 1]) {
    const v = (u - segs[k]) / (segs[k + 1] - segs[k]);
    return [pts[k][0] + (pts[k + 1][0] - pts[k][0]) * v, pts[k][1] + (pts[k + 1][1] - pts[k][1]) * v];
  }
  return [cx, cy];
};
LESSONS.push({
  key: 'battery', title: 'Phone Battery', cat: 'Digital', mins: 3, vb: [360, 250],
  summary: 'Lithium shuttles between two layered materials. As your phone runs, lithium ions cross the electrolyte from the graphite side to the metal-oxide side, while their electrons take the long way — through your phone. Charging pushes them back.',
  parts: [
    { n: 1, name: 'Graphite anode', at: [146, 214], num: [146, 238], desc: 'Stacked sheets of carbon. When the battery is charged, lithium is tucked in between the sheets.' },
    { n: 2, name: 'Metal-oxide cathode', at: [250, 214], num: [250, 238], desc: 'A layered lithium metal oxide (cobalt oxide in many phone batteries). When the battery is empty, the lithium has moved here.' },
    { n: 3, name: 'Electrolyte', at: [180, 82], num: [166, 56], desc: 'A lithium salt dissolved in an organic liquid, soaked through the whole cell. Ions can travel through it — electrons can’t.' },
    { n: 4, name: 'Separator', at: [195, 214], num: [198, 238], desc: 'A thin porous plastic film between the two sides. Ions slip through its pores, but it keeps the anode and cathode from touching and shorting out.' },
    { n: 5, name: 'Current collectors', at: [290, 186], num: [322, 196], desc: 'Thin foils that carry electrons in and out: copper on the anode side, aluminum on the cathode side. Tabs connect them to the phone.' },
    { n: 6, name: 'Lithium ions', at: [262, 112], num: [326, 112], desc: 'Lithium atoms that have given up one electron. They carry the positive charge across the cell while the electrons go around through the wire.' },
  ],
  steps: [
    { text: 'Using your phone: lithium in the graphite gives up an electron. The lithium ions drift through the electrolyte and the separator to the cathode.', parts: [1, 6, 3], t: [0, 3.5] },
    { text: 'The electrons can’t cross the separator, so they take the long way: through the copper foil, your phone’s circuits, and back in at the aluminum foil. That flow is the current.', parts: [4, 5], t: [3.5, 6] },
    { text: 'Charging runs it backward: the charger pushes electrons back to the graphite side, and the lithium ions follow them back in between the carbon sheets.', parts: [5, 6, 2], t: [6, 10] },
  ],
  dur: 10,
  why: 'Why the separator and the wire? If electrons could cross inside the cell, the energy would be released at once as heat. Letting only ions through the middle forces every electron out through your phone — doing useful work on the way.',
  fact: 'Lithium-ion batteries reached the market in 1991. In 2019, three of their inventors shared the Nobel Prize in Chemistry; John Goodenough, then 97, became the oldest Nobel laureate ever.',
  quiz: {
    q: 'While your phone is running, which way do the lithium ions move inside the battery?',
    opts: ['From the graphite anode to the metal-oxide cathode', 'From the cathode to the anode', 'They don’t move — only electrons do'],
    a: 0,
    why: 'Discharging, lithium ions leave the graphite and cross the electrolyte to the cathode, while their electrons travel through the phone to meet them. Charging drives both back.'
  },
  sources: [
    ['Lithium-ion battery — Wikipedia', 'https://en.wikipedia.org/wiki/Lithium-ion_battery'],
    ['How Lithium-ion Batteries Work — U.S. Department of Energy', 'https://www.energy.gov/energysaver/articles/how-lithium-ion-batteries-work'],
    ['The Nobel Prize in Chemistry 2019 — NobelPrize.org', 'https://www.nobelprize.org/prizes/chemistry/2019/summary/'],
    ['2019 Nobel Prize in Chemistry goes to inventors of lithium-ion batteries — MRS Bulletin', 'https://resolve.cambridge.org/core/journals/mrs-bulletin/news/2019-nobel-prize-in-chemistry-goes-to-inventors-of-lithium-ion-batteries'],
  ],
  art(p) {
    let gr = '', ox = '';
    for (let y = 84; y <= 208; y += 8) gr += `M122,${y}H168`;
    for (let y = 88; y <= 212; y += 8) for (let x = 220; x <= 278; x += 8) ox += `M${x},${y - 2.5}l2.5,2.5l-2.5,2.5l-2.5,-2.5Z`;
    let pores = '';
    for (let y = 81; y <= 211; y += 5) pores += `M192.5,${y}h4`;
    return `
    <g class="shell">
      <rect x="16" y="56" width="62" height="164" rx="10" class="ink fw"/>
      <rect x="22" y="62" width="50" height="152" rx="6" class="ink thin"/>
      <circle cx="31" cy="72" r="4" class="ink thin"/><circle cx="31" cy="72" r="1.6" class="ink thin"/>
      <rect x="26" y="88" width="42" height="112" rx="3" class="ink fm"/>
      <path d="M40,88V82H54V88" class="ink thin"/>
      <text x="47" y="148" class="hand" text-anchor="middle">battery</text>
      <path d="M68,88L108,72 M68,200L108,220" class="ink thin" stroke-dasharray="2 2"/>
      <path d="M108,66H294V72H108Z M108,220H294V226H108Z M104,66H108V226H104Z M294,66H298V226H294Z" fill="url(#${p}hatch)" class="ink thin"/>
      <path d="M115,72V30H182 M238,30H286V72" class="ink" stroke-width="1.2"/>
      <rect x="182" y="18" width="56" height="24" rx="3" class="ink fw"/>
      <text id="${p}load" x="210" y="34" class="hand" text-anchor="middle">phone</text>
      <text x="104" y="28" class="hand">−</text><text x="291" y="28" class="hand">+</text>
    </g>
    <g data-part="3"><rect x="119" y="72" width="164" height="148" class="water"/></g>
    <g data-part="1"><path d="${gr}" class="ink" stroke-width="1.3"/></g>
    <g data-part="2"><path d="${ox}" class="ink thin fw"/></g>
    <g data-part="4"><rect x="191" y="72" width="7" height="148" class="ink thin fw"/><path d="${pores}" class="ink thin" stroke="#9aa0a8"/></g>
    <g data-part="5"><rect x="112" y="72" width="7" height="148" fill="url(#${p}hatch)" class="ink thin"/>
      <rect x="283" y="72" width="7" height="148" fill="url(#${p}hatch)" class="ink thin"/>
      <text x="111" y="54" class="hand" text-anchor="end" style="font-size:8px">copper</text><text x="290" y="54" class="hand" style="font-size:8px">aluminum</text>
      <g id="${p}el"></g></g>
    <g data-part="6"><g id="${p}ions"></g></g>`;
  },
  anim(svg, p, t) {
    const q = id => svg.querySelector('#' + p + id);
    const S = t == null;
    // ions: discharge 0.3–3.3 s, charge 6.3–9.6 s (staggered)
    let io = '';
    for (let i = 0; i < 8; i++) {
      let u;
      if (S) u = i < 3 ? 1 : i === 3 ? .5 : i === 4 ? .25 : 0;
      else u = seg(t, .3 + i * .3, 1.4 + i * .3) - seg(t, 6.3 + i * .3, 7.5 + i * .3);
      const [x, y] = baIon(i, u);
      const j = S ? 0 : .8 * Math.sin(t * 17 + i * 2);
      io += `<circle cx="${f1(x + j)}" cy="${f1(y)}" r="3.6" class="ink thin" fill="#6b7078"/><path d="M${f1(x + j - 1.8)},${f1(y)}h3.6M${f1(x + j)},${f1(y - 1.8)}v3.6" stroke="#fff" stroke-width=".9"/>`;
      if (S && (i === 3 || i === 4)) io += `<path d="M${f1(x + 6)},${f1(y)}h9m-3,-3l3,3l-3,3" class="ink thin"/>`;
    }
    q('ions').innerHTML = io;
    // electrons in the wire: forward while discharging, backward while charging
    const dis = S ? 1 : seg(t, .5, 1) - seg(t, 5.6, 6);
    const chg = S ? 0 : seg(t, 6.1, 6.6) - seg(t, 9.5, 9.9);
    const L = 42 + 171 + 42;
    let el = '';
    const o = Math.max(dis, chg);
    if (o > .01) {
      const sh = S ? 4 : (dis > chg ? 1 : -1) * t * 24;
      for (let d = ((sh % 15) + 15) % 15; d < L; d += 15) {
        const [x, y] = baAt(BA_W, d);
        if (x > 184 && x < 236) continue;
        el += `<circle cx="${f1(x)}" cy="${f1(y)}" r="2.2" fill="#D63A2A" opacity="${f1(o)}"/>`;
      }
      const ar = dis > chg ? 'M150,26l6,4l-6,4 M252,26l6,4l-6,4' : 'M156,26l-6,4l6,4 M258,26l-6,4l6,4';
      el += `<path d="${ar}" class="energy" opacity="${f1(o)}"/>`;
    }
    q('el').innerHTML = el;
    q('load').textContent = !S && t >= 6 ? 'charger' : 'phone';
  }
});
}
