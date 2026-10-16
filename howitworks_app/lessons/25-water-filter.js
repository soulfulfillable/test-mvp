{
/* 25. Water filter pitcher */
// carbon granules [x, y, rot] and resin beads [x, y] packed into the cartridge
const WF_C = [[108, 116, 0], [119, 113, 40], [113, 126, 80], [124, 131, 20], [107, 141, 60], [118, 146, 10], [110, 160, 30], [124, 164, 70], [115, 178, 50], [108, 190, 15], [123, 190, 85]];
const WF_R = [[121, 121], [108, 130], [117, 136], [125, 145], [109, 151], [118, 156], [107, 170], [119, 170], [126, 179], [109, 181], [118, 194], [126, 154]];
// contaminants: start in the reservoir, end stuck in the cartridge (k: 0 = taste/odor molecule, 1 = metal ion)
const WF_P = [[64, 70, 112, 118, 0], [82, 92, 120, 124, 1], [150, 66, 110, 135, 0], [170, 88, 122, 140, 1], [92, 60, 113, 152, 0], [140, 98, 124, 158, 1], [66, 98, 109, 166, 1], [160, 76, 120, 176, 0]];
LESSONS.push({
  key: 'water-filter', title: 'Water Filter Pitcher', cat: 'Kitchen', mins: 3, vb: [360, 270],
  summary: 'Gravity pulls tap water through a cartridge packed with activated carbon, which grabs chlorine and other taste-spoiling molecules on its huge surface, and resin beads that trade away certain metals for harmless ions.',
  parts: [
    { n: 1, name: 'Upper reservoir', at: [50, 80], num: [18, 80], desc: 'The hopper you pour tap water into. Its only way out is through the cartridge, and gravity does all the pushing.' },
    { n: 2, name: 'Cartridge', at: [102, 150], num: [18, 150], desc: 'A plastic shell packed with filter media. Slots let water in at the top and out at the bottom. Its media eventually fill up, so it needs replacing.' },
    { n: 3, name: 'Mesh screens', at: [104, 198], num: [18, 196], desc: 'Fine screens at the inlet and outlet. They hold back grit and keep the filter granules from washing out into your water.' },
    { n: 4, name: 'Activated carbon', at: [262, 52], num: [244, 22], desc: 'Charcoal treated so it’s riddled with microscopic pores. Chlorine and many odor- and taste-causing chemicals stick to the pore walls — that’s adsorption.' },
    { n: 5, name: 'Ion-exchange resin', at: [264, 168], num: [244, 136], desc: 'Tiny plastic beads covered in charged sites holding harmless ions. Metal ions such as copper (and lead, in certified models) grab those sites, and the harmless ions are set free.' },
    { n: 6, name: 'Filtered water', at: [44, 236], num: [18, 236], desc: 'The pitcher below collects the water as it drips out of the cartridge, ready to pour.' },
  ],
  steps: [
    { text: 'Tap water poured into the upper reservoir sits on top of the cartridge. Gravity is the only pump.', parts: [1], t: [0, 2] },
    { text: 'Water seeps in through the slots and mesh. The screen holds back grit and keeps the granules inside.', parts: [2, 3], t: [2, 4] },
    { text: 'Chlorine and other taste-spoiling molecules bump into the carbon and stick to its pore walls.', parts: [4], t: [4, 6.4] },
    { text: 'Metal ions trade places with harmless ions on the resin beads. Cleaner water drips out into the pitcher.', parts: [5, 6], t: [6.4, 9] },
  ],
  dur: 9,
  why: 'Why carbon? “Activating” charcoal riddles it with microscopic pores, so a small scoop hides an enormous surface for molecules to cling to. Pairing it with resin beads covers what carbon misses: dissolved metal ions.',
  fact: 'A single gram of activated carbon can have more than 500 square meters (about 5,400 square feet) of surface inside its pores. Still, the CDC notes most pitcher filters aren’t designed to remove germs — check the NSF certification for what yours removes.',
  quiz: {
    q: 'How does activated carbon remove chlorine taste?',
    opts: ['It dissolves the chlorine into harmless salt', 'The molecules stick to its huge internal surface', 'It zaps the chlorine with a small electric charge'],
    a: 1,
    why: 'That’s adsorption: molecules cling to a surface. Activated carbon is full of tiny pores, so it has a vast surface to hold them — until it fills up and the cartridge needs changing.'
  },
  sources: [
    ['Activated carbon — Wikipedia', 'https://en.wikipedia.org/wiki/Activated_carbon'],
    ['Point of use water filter — Wikipedia', 'https://en.wikipedia.org/wiki/Point_of_use_water_filter'],
    ['About Choosing Home Water Filters — CDC', 'https://www.cdc.gov/drinking-water/prevention/about-choosing-home-water-filters.html'],
    ['About Home Water Treatment Systems — CDC', 'https://www.cdc.gov/drinking-water/about/about-home-water-treatment-systems.html'],
  ],
  art(p) {
    const gran = (x, y, r) => { const pts = [[-4, -2], [-1, -4.5], [3.5, -3], [4.5, 1], [1, 4], [-3.5, 3]].map(([a, b]) => rot(x + a, y + b, x, y, r)); return 'M' + pts.map(v => f1(v[0]) + ',' + f1(v[1])).join('L') + 'Z'; };
    const CART = 'M102,206V104Q102,90 116,90Q130,90 130,104V206Z';
    let carbon = '', resin = '';
    WF_C.forEach(([x, y, r]) => carbon += gran(x, y, r));
    WF_R.forEach(([x, y]) => resin += `<circle cx="${x}" cy="${y}" r="3.3"/>`);
    // zoomed carbon granule with branching pores
    const pores = 'M262,62L282,70L296,64L312,74M282,70L290,86L306,92M290,86L276,98M296,64L304,50M306,92L322,88M312,74L326,70';
    return `
    <g class="shell">
      <path d="M0,254H360" class="ink"/><rect x="0" y="254.7" width="360" height="16" fill="url(#${p}hatch)"/>
      <path d="M40,30H44V246H192V30H196V250H40Z" fill="url(#${p}hatch)" class="ink"/>
      <path d="M40,30L28,36V44L40,42" class="ink fw"/>
      <path d="M196,52H222Q234,52 234,64V184Q234,196 222,196H196V184H220Q222,184 222,182V66Q222,64 220,64H196Z" fill="url(#${p}hatch)" class="ink"/>
      <path d="M36,22H200V30H36Z" class="ink fm"/><path d="M150,22V30" class="ink thin"/></g>
    <g data-part="6"><rect id="${p}lw" x="44" y="220" width="148" height="26" class="water"/><path id="${p}lwl" d="M44,220H192" class="wline"/></g>
    <g data-part="1"><rect id="${p}uw" x="51" y="54" width="134" height="52" class="water"/><path id="${p}uwl" d="M51,54H185" class="wline"/>
      <path d="M48,32H51V106H100V112H48Z M185,32H188V112H132V106H185Z" fill="url(#${p}hatch)" class="ink"/></g>
    <g data-part="2"><path d="${CART}" class="ink fm"/><path d="M105,203V105Q105,94 116,94Q127,94 127,105V203Z" fill="url(#${p}grid)" class="ink thin"/>
      <path d="M109,92l-2,6M116,90v6M123,92l2,6M106,206v4M112,206v4M118,206v4M124,206v4" class="ink"/></g>
    <g data-part="4"><path d="${carbon}" class="ink thin" fill="#5d6168"/>
      <circle cx="300" cy="74" r="42" class="fw"/>
      <g clip-path="url(#${p}za)"><path d="M262,46L286,40L318,46L336,64L334,96L312,112L280,110L262,92Z" class="ink" fill="#5d6168"/>
        <path d="${pores}" stroke="#fff" stroke-width="4" stroke-linecap="round" fill="none"/><g id="${p}mol"></g></g>
      <circle cx="300" cy="74" r="42" class="ink"/>
      <text x="300" y="128" class="hand" text-anchor="middle">carbon: pores, zoomed</text></g>
    <g data-part="5"><g class="ink thin" fill="#fff">${resin}</g>
      <circle cx="300" cy="186" r="42" class="fw"/>
      <g clip-path="url(#${p}zb)"><circle cx="296" cy="192" r="24" class="ink" fill="#eef2f6"/>
        <path d="M296,166v4M314,175l-3,3M320,192h-4M278,175l3,3M272,192h4M296,218v-4" class="ink thin"/>
        <circle cx="272" cy="188" r="3" fill="#fff" class="ink thin"/>
        <circle cx="318" cy="208" r="3" fill="#fff" class="ink thin"/>
        <circle id="${p}ion" r="3.6" fill="#24272c"/><circle id="${p}out" r="3" fill="#fff" stroke="#3a7fc0" stroke-width="1"/>
        <path id="${p}swap" class="flow"/></g>
      <circle cx="300" cy="186" r="42" class="ink"/>
      <text x="300" y="240" class="hand" text-anchor="middle">resin bead, zoomed</text></g>
    <g data-part="3"><path d="M104,106H128M104,198H128" class="ink" stroke-dasharray="2 1.4" stroke-width="2"/></g>
    <g id="${p}dirt" style="opacity:1"></g>
    <g id="${p}drops" style="opacity:1"></g>
    <clipPath id="${p}za"><circle cx="300" cy="74" r="41"/></clipPath>
    <clipPath id="${p}zb"><circle cx="300" cy="186" r="41"/></clipPath>`;
  },
  anim(svg, p, t) {
    const q = id => svg.querySelector('#' + p + id);
    const T = t == null ? 5.4 : t;
    const L1 = 54 + 34 * seg(T, .6, 9), L2 = 230 - 22 * seg(T, 2.4, 9);
    q('uw').setAttribute('y', f1(L1)); q('uw').setAttribute('height', f1(106 - L1));
    q('uwl').setAttribute('d', `M51,${f1(L1)}H185`);
    q('lw').setAttribute('y', f1(L2)); q('lw').setAttribute('height', f1(246 - L2));
    q('lwl').setAttribute('d', `M44,${f1(L2)}H192`);
    // contaminants drift down into the cartridge and stay stuck
    let d = '';
    WF_P.forEach(([x0, y0, x1, y1, k], i) => {
      const a = t == null ? (i % 2 ? 1 : .35) : seg(t, 1.6 + i * .45, 3.4 + i * .5);
      let x, y;
      if (a < .5) { const u = a / .5; x = x0 + (116 - x0) * u; y = y0 + (100 - y0) * u; }
      else { const u = (a - .5) / .5; x = 116 + (x1 - 116) * u; y = 100 + (y1 - 100) * u; }
      d += k ? `<circle cx="${f1(x)}" cy="${f1(y)}" r="2.2" fill="#24272c"/>` : `<circle cx="${f1(x)}" cy="${f1(y)}" r="1.6" fill="#fff" stroke="#24272c" stroke-width=".9"/>`;
    });
    q('dirt').innerHTML = d;
    // clean drops falling into the pitcher
    let dr = '';
    const on = t == null ? 1 : seg(t, 2.4, 2.8);
    if (on > 0) for (let k = 0; k < 3; k++) {
      const u = (T * 1.2 + k / 3) % 1, x = 110 + k * 6;
      dr += `<path d="M${x},${f1(212 + u * (L2 - 216))}q-1.8,3.4 0,4.6q1.8,-1.2 0,-4.6Z" fill="#3a7fc0" opacity="${f1(on)}"/>`;
    }
    q('drops').innerHTML = dr;
    // carbon zoom: molecules drift in and stick to pore walls
    const stick = [[278, 66], [300, 68], [292, 82], [310, 88], [304, 56]];
    let m = '';
    stick.forEach(([x, y], i) => {
      const a = t == null ? 1 : seg(t, 4 + i * .35, 5 + i * .35);
      const sx = 262 + (i % 2) * 6, sy = 30 + i * 9;
      m += `<circle cx="${f1(sx + (x - sx) * a)}" cy="${f1(sy + (y - sy) * a)}" r="2" fill="#fff" stroke="#24272c" stroke-width=".9"/>`;
    });
    q('mol').innerHTML = m;
    // resin zoom: metal ion docks, harmless ion leaves
    const a = t == null ? .8 : seg(t, 6.4, 8.4);
    const a1 = Math.min(1, a / .6), a2 = Math.max(0, (a - .45) / .55);
    q('ion').setAttribute('cx', f1(266 + (296 - 266) * a1)); q('ion').setAttribute('cy', f1(150 + (163 - 150) * a1));
    q('out').setAttribute('cx', f1(296 + 34 * a2)); q('out').setAttribute('cy', f1(163 - 16 * a2));
    q('swap').setAttribute('d', 'M306,166Q318,164 326,156M322,155l4,1l-1,4');
    q('swap').setAttribute('opacity', f1(a2 > 0 && a2 < 1 ? 1 : t == null ? 1 : 0));
  }
});
}
