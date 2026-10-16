{
/* 28. Dishwasher */
LESSONS.push({
  key: 'dishwasher', title: 'Dishwasher', cat: 'Kitchen', mins: 3, vb: [360, 260],
  summary: 'A dishwasher reuses a few gallons of hot water over and over. A pump fires it up through spray arms that spin on their own — pushed around by their own jets, like a lawn sprinkler.',
  parts: [
    { n: 1, name: 'Inlet valve', at: [70, 216], num: [38, 250], desc: 'An electric valve on the water line. The control opens it just long enough to let in the water for each fill.' },
    { n: 2, name: 'Detergent dispenser', at: [58, 110], num: [16, 112], desc: 'A small cup on the inside of the door. Its lid pops open partway through the cycle, so the soap goes into the hot wash water, not the first rinse.' },
    { n: 3, name: 'Sump & filter', at: [124, 206], num: [92, 250], desc: 'The low well in the tub floor where water collects. A mesh filter catches food bits before the water is pumped around again.' },
    { n: 4, name: 'Wash & drain pumps', at: [176, 228], num: [146, 250], desc: 'The wash pump sends sump water up to the spray arms. At the end, a drain pump (or the same pump, reversed) pushes the dirty water out the hose.' },
    { n: 5, name: 'Spray arm', at: [276, 54], num: [252, 22], desc: 'A hollow arm with nozzles angled sideways. The water shooting out pushes back on the arm and spins it — no motor needed.' },
    { n: 6, name: 'Heating element', at: [100, 184], num: [16, 168], desc: 'A metal rod in the tub floor. It heats the water during the wash and can warm the air to help dishes dry.' },
  ],
  steps: [
    { text: 'The inlet valve opens and fresh water runs in, collecting in the sump at the bottom of the tub.', parts: [1, 3], t: [0, 2] },
    { text: 'The heating element warms the water, the dispenser pops open, and the wash pump pushes the soapy water up into the spray arm.', parts: [6, 2, 4], t: [2, 4.4] },
    { text: 'Water shoots out of the angled nozzles; the kick-back spins the arm. It rains down on the dishes, through the filter and back to the pump — again and again.', parts: [5, 3], t: [4.4, 7] },
    { text: 'The drain pump pushes the dirty water out through the drain hose. Then the rinse repeats with clean water.', parts: [4], t: [7, 9] },
  ],
  dur: 9,
  why: 'Why angled nozzles? Every jet pushes back on the arm, the way a garden sprinkler spins. So the same water that cleans also drives the arm — no motor, gears or seals in the wet hub to wear out.',
  fact: 'Josephine Cochrane patented her dishwasher in 1886, and it was among the first to clean with water pressure instead of scrubbers. Today an ENERGY STAR standard-size model uses 3.2 gallons a cycle or less.',
  quiz: {
    q: 'What makes the spray arm spin?',
    opts: ['A small motor in the hub', 'Gears driven by the pump motor', 'The push-back from water shooting out its angled nozzles'],
    a: 2,
    why: 'Water leaving the nozzles sideways pushes the arm the opposite way — reaction force, like a lawn sprinkler. The faster the pump pushes, the faster it spins.'
  },
  sources: [
    ['How Dishwashers Work — HowStuffWorks', 'https://home.howstuffworks.com/dishwasher.htm'],
    ['Dishwasher — Wikipedia', 'https://en.wikipedia.org/wiki/Dishwasher'],
    ['Josephine Cochrane — Wikipedia', 'https://en.wikipedia.org/wiki/Josephine_Cochrane'],
    ['Dishwashers Key Product Criteria — ENERGY STAR', 'https://www.energystar.gov/products/appliances/dishwashers/key_product_criteria'],
  ],
  art(p) {
    const TUB = 'M50,26H232V186L162,192V214H122V192L50,186Z';
    let plates = '';
    [72, 86, 100, 114, 128].forEach(x => plates += `<ellipse cx="${x}" cy="128" rx="3.2" ry="21" class="ink thin fw"/>`);
    let cups = '';
    [72, 108, 144].forEach(x => cups += `<path d="M${x},90L${x + 3},70H${x + 21}L${x + 24},90" class="ink thin fw"/>`);
    let rack = '';
    for (let x = 62; x <= 222; x += 10) rack += `M${x},150v-5M${x},92v-4`;
    return `
    <g class="shell">
      <path d="M0,246H360" class="ink"/><rect x="0" y="246.7" width="360" height="14" fill="url(#${p}hatch)"/>
      <path d="M40,16H244V240H40Z ${TUB} M56,198H118V220H166V198H234V232H56Z" fill-rule="evenodd" fill="url(#${p}hatch)" class="ink"/>
      <path d="${TUB}" fill="url(#${p}grid)" class="ink thin"/>
      <path d="M56,198H118V220H166V198H234V232H56Z" fill="url(#${p}grid)" class="ink thin"/>
      <path d="M30,18H48V238H30Z" fill="url(#${p}hatch)" class="ink"/><circle cx="36" cy="236" r="3" class="ink fw"/>
      <path d="M24,26V50M24,26H30M24,50H30" class="ink" stroke-width="2"/>
      <path d="M56,150H226M56,92H226${rack}" class="ink thin"/>
      ${cups}${plates}
      <path d="M150,148Q150,112 186,112Q222,112 222,148" class="ink thin fw"/>
      <path d="M44,240v6h14v-6M222,240v6h14v-6" class="ink"/>
      <path d="M204,222H250V160Q250,154 256,154Q262,154 262,160V246" fill="none" stroke="#24272c" stroke-width="6" stroke-linejoin="round"/>
      <path d="M204,222H250V160Q250,154 256,154Q262,154 262,160V246" fill="none" stroke="#fff" stroke-width="3.4" stroke-linejoin="round"/>
      <path id="${p}dr" d="M204,222H250V160Q250,154 256,154Q262,154 262,160V246" fill="none" stroke="#3a7fc0" stroke-width="3.4" stroke-dasharray="6 6" opacity="0"/>
      <text x="268" y="242" class="hand">to drain</text>
</g>
    <g data-part="3"><g clip-path="url(#${p}tub)"><rect id="${p}sw" x="50" y="214" width="182" height="0" class="water"/></g>
      <path d="M127,194H157V212H127Z" class="ink thin" stroke-dasharray="2 1.6"/></g>
    <g data-part="6"><path d="M90,198V182H114M170,182H224V198" class="ink" stroke-width="2.6"/>
      <path id="${p}glow" class="energy" stroke-width="1.2"/></g>
    <g data-part="4"><circle cx="142" cy="226" r="7" class="ink fm"/><rect x="149" y="220" width="18" height="11" rx="2" class="ink fw"/>
      <path d="M162,206H180V216" class="ink thin" stroke-width="1.2"/>
      <rect x="180" y="216" width="18" height="12" rx="2" class="ink fm"/><path d="M198,222H204" class="ink"/>
      <path d="M138,219V176M146,219V176" class="ink"/><path id="${p}feed" d="M142,218V178" stroke="#3a7fc0" stroke-width="5" stroke-dasharray="5 4" opacity="0"/></g>
    <g data-part="1"><rect x="68" y="204" width="18" height="12" rx="2" class="ink fw"/><path d="M77,216V246" class="ink" stroke-width="2"/>
      <path d="M77,204V186" class="ink" stroke-width="2"/><path d="M73,186H81" class="ink"/>
      <path id="${p}fill" d="M77,246V184" class="flow" stroke-dasharray="4 4" opacity="0"/>
      <path id="${p}fill2" d="M80,184Q92,176 98,190" class="flow" opacity="0"/></g>
    <g data-part="2"><path d="M48,102H60V118H48" class="ink fw"/><rect x="50" y="108" width="8" height="8" fill="#a3a7ad"/>
      <path id="${p}lid" d="M60,102V118" class="ink" stroke-width="2"/></g>
    <g data-part="5"><path id="${p}arm" class="ink fm"/><rect x="136" y="172" width="12" height="6" rx="1.5" class="ink fw"/>
      <circle cx="306" cy="76" r="46" class="fw"/>
      <g clip-path="url(#${p}zc)"><path id="${p}zarm" class="ink fm"/><path id="${p}zjet" class="flow"/></g>
      <circle cx="306" cy="76" r="5" class="ink fw"/>
      <circle cx="306" cy="76" r="46" class="ink"/>
      <path id="${p}spin" class="energy"/>
      <text x="306" y="134" class="hand" text-anchor="middle">spray arm, from above</text></g>
    <g id="${p}spray" class="flow" style="opacity:1"></g>
    <clipPath id="${p}tub"><path d="${TUB}"/></clipPath>
    <clipPath id="${p}zc"><circle cx="306" cy="76" r="45"/></clipPath>`;
  },
  anim(svg, p, t) {
    const q = id => svg.querySelector('#' + p + id);
    const T = t == null ? 5.5 : t;
    const fill = t == null ? 1 : seg(t, 0, 2) - seg(t, 7, 8.6);
    const lvl = 214 - 14 * fill;
    q('sw').setAttribute('y', f1(lvl)); q('sw').setAttribute('height', f1(214 - lvl + 1));
    q('fill').setAttribute('opacity', t == null ? 0 : f1(seg(t, 0, .3) - seg(t, 1.8, 2)));
    q('fill').setAttribute('stroke-dashoffset', f1(T * 30));
    q('fill2').setAttribute('opacity', q('fill').getAttribute('opacity'));
    const heat = t == null ? 1 : seg(t, 2, 2.8) - seg(t, 6.8, 7.2);
    q('glow').setAttribute('d', wave([[92, 182], [112, 182]], 1.3, 6, T * 8).replace(/M[^M]*$/, '') + wave([[172, 182], [222, 182]], 1.3, 6, T * 8).replace(/M[^M]*$/, ''));
    q('glow').setAttribute('opacity', f1(heat));
    q('lid').setAttribute('transform', `rotate(${f1(-70 * (t == null ? 1 : seg(t, 2.6, 3.2)))} 60 102)`);
    const pump = t == null ? 1 : seg(t, 3, 3.6) - seg(t, 6.8, 7.1);
    q('feed').setAttribute('opacity', f1(pump)); q('feed').setAttribute('stroke-dashoffset', f1(T * 30));
    const drain = t == null ? 0 : seg(t, 7, 7.3) - seg(t, 8.7, 9);
    q('dr').setAttribute('opacity', f1(drain)); q('dr').setAttribute('stroke-dashoffset', f1(-T * 40));
    // spin: angle grows while the pump runs
    const spinT = t == null ? 0 : Math.max(0, Math.min(t, 7.2) - 3.4);
    const ang = 30 + spinT * spinT * 40 + spinT * 140;
    const c = Math.cos(ang * Math.PI / 180), s = Math.sin(ang * Math.PI / 180);
    // side view: arm foreshortens as it turns
    const hx = 142, L = 46 * c;
    q('arm').setAttribute('d', `M${f1(hx - L)},171H${f1(hx + L)}V175H${f1(hx - L)}Z`);
    // top view
    const pt = (r, o) => [306 + r * c - o * s, 76 + r * s + o * c];
    const A = [pt(-38, -4), pt(38, -4), pt(38, 4), pt(-38, 4)];
    q('zarm').setAttribute('d', 'M' + A.map(v => f1(v[0]) + ',' + f1(v[1])).join('L') + 'Z');
    let jet = '';
    if (pump > .05) [1, -1].forEach(e => {
      const [x, y] = pt(e * 36, e * 4), dx = e * s, dy = -e * c;
      jet += `M${f1(x)},${f1(y)}l${f1(dx * 16 + e * c * 4)},${f1(dy * 16 + e * s * 4)}M${f1(x + dx * 4)},${f1(y + dy * 4)}l${f1(dx * 10 + e * c * 7)},${f1(dy * 10 + e * s * 7)}`;
    });
    q('zjet').setAttribute('d', jet); q('zjet').setAttribute('opacity', f1(pump));
    q('spin').setAttribute('d', 'M338,46A44,44 0 0 1 350,76M346,70l4,6l3,-7');
    q('spin').setAttribute('opacity', f1(pump));
    // spray from the arm up onto the dishes
    let sp = '';
    if (pump > .05) for (let k = -2; k <= 2; k++) {
      const x = hx + k * 22 * c, sl = 14 * s * (k % 2 ? 1 : -1);
      sp += `<path d="M${f1(x)},170L${f1(x + sl)},104" stroke-dasharray="4 7" stroke-dashoffset="${f1(T * 40)}" opacity="${f1(pump)}"/>`;
    }
    q('spray').innerHTML = sp;
  }
});
}
