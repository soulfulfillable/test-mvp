{
/* 10. Drip coffee maker */
const CM_COLD = 'M256,190V226H240';
const CM_TUBE = 'M222,226H64Q52,226 52,218Q52,210 64,210H190';
const CM_HOT = 'M190,210H205V29H106V44';
const CM_TUBE_LEN = 158 + 25 + 126, CM_HOT_LEN = 15 + 181 + 99 + 15;
LESSONS.push({
  key: 'coffee-maker', title: 'Drip Coffee Maker', cat: 'Kitchen', mins: 3, vb: [360, 260],
  summary: 'There’s no pump inside. A heater boils water in a metal tube, and the bubbles lift slugs of hot water up a narrow pipe — like a gurgling fountain — to rain over the coffee grounds.',
  parts: [
    { n: 1, name: 'Reservoir', at: [282, 104], num: [334, 92], desc: 'The tank you fill with cold water. A hole in its bottom lets water flow down into the base by gravity.' },
    { n: 2, name: 'One-way valve', at: [240, 226], num: [334, 214], desc: 'A tiny ball valve (a check valve). Water can flow from the tank into the heater, but boiling water can’t push back — so it has only one way to go: up.' },
    { n: 3, name: 'Heater & aluminum tube', at: [52, 218], num: [24, 176], desc: 'A resistive heating element pressed against an aluminum water tube. It boils the water in the tube, and the same element warms the plate under the carafe.' },
    { n: 4, name: 'Hot-water tube', at: [205, 138], num: [184, 120], desc: 'A narrow tube from the heater to the top. Bubbles are almost as wide as the tube, so each one shoves a slug of water up ahead of it.' },
    { n: 5, name: 'Showerhead', at: [100, 46], num: [46, 32], desc: 'Where the hot-water tube ends. It drips and sprays the water over the grounds below.' },
    { n: 6, name: 'Filter basket', at: [58, 66], num: [24, 84], desc: 'Holds the paper filter and grounds. Hot water soaks through, dissolving flavor and oils, and coffee drips out the bottom into the carafe.' },
  ],
  steps: [
    { text: 'Water flows by gravity from the reservoir, through the one-way valve, into the aluminum tube in the base.', parts: [1, 2], t: [0, 2] },
    { text: 'The heater boils the water in the tube. The valve slams shut, so the bubbles can only escape up the hot-water tube.', parts: [3, 2], t: [2, 4.4] },
    { text: 'Each bubble pushes a slug of hot water up the tube to the showerhead — that’s the gurgling you hear.', parts: [4, 5], t: [4.4, 6.6] },
    { text: 'Hot water soaks the grounds and coffee drips into the carafe. The same heater keeps the warming plate hot.', parts: [6, 3], t: [6.6, 9] },
  ],
  dur: 9,
  why: 'Why no pump? Boiling water in a narrow tube makes bubbles that lift water by themselves, like an aquarium bubbler. With a check valve to point the way, the machine needs no motor and no moving parts but a tiny ball.',
  fact: 'Automatic drip coffee makers reached American kitchens in 1972 with Mr. Coffee, made to replace the percolator. It cost $39.99 — and the company sold about a million by 1975.',
  quiz: {
    q: 'What lifts the hot water up to the top of the machine?',
    opts: ['A small electric pump', 'Steam pressure from a sealed boiler', 'Bubbles of boiling water rising in a narrow tube'],
    a: 2,
    why: 'The heater boils water in the aluminum tube. The one-way valve blocks the way back, so the bubbles rise up the narrow hot-water tube and push slugs of water ahead of them.'
  },
  sources: [
    ['How Coffee Makers Work — HowStuffWorks', 'https://home.howstuffworks.com/coffee-maker.htm'],
    ['Coffeemaker — Wikipedia', 'https://en.wikipedia.org/wiki/Coffeemaker'],
    ['Mr. Coffee — Wikipedia', 'https://en.wikipedia.org/wiki/Mr._Coffee'],
  ],
  art(p) {
    const tube = d => `<path d="${d}" fill="none" stroke="#24272c" stroke-width="7.4" stroke-linejoin="round"/><path d="${d}" fill="none" stroke="#fff" stroke-width="4.6" stroke-linejoin="round"/>`;
    let grounds = '';
    for (let i = 0; i < 46; i++) { const x = 82 + (i * 37) % 64, y = 88 + (i * 13) % 12; grounds += `<circle cx="${x}" cy="${y}" r=".8"/>`; }
    let holes = '';
    for (let x = 97; x <= 115; x += 4.5) holes += `<circle cx="${x}" cy="48" r=".9"/>`;
    return `
    <g class="shell">
      <path d="M0,244H360" class="ink"/><rect x="0" y="244.7" width="360" height="16" fill="url(#${p}hatch)"/>
      <path d="M20,196H306V238H20Z M28,202V232H298V202Z" fill-rule="evenodd" fill="url(#${p}hatch)" class="ink"/>
      <rect x="28" y="202" width="270" height="30" fill="url(#${p}grid)"/>
      <path d="M80,14H306V196H196V44H80Z M214,44V188H298V44Z" fill-rule="evenodd" fill="url(#${p}hatch)" class="ink"/>
      <path d="M26,238v6h16v-6M284,238v6h16v-6" class="ink"/>
      <rect x="50" y="191" width="128" height="5" rx="1.5" class="ink fm"/><rect x="104" y="196" width="14" height="10" class="ink thin fm"/>
      <path d="M76,120H150L147,130Q166,144 164,180Q164,191 152,191H74Q62,191 62,180Q60,144 79,130Z" class="ink fw"/>
      <g clip-path="url(#${p}car)"><rect id="${p}coffee" x="60" y="160" width="110" height="40" fill="#6b7078" opacity=".85"/></g>
      <path d="M76,120H150L147,130Q166,144 164,180Q164,191 152,191H74Q62,191 62,180Q60,144 79,130Z M155,134H178Q182,134 182,138V168Q182,172 178,172H163" class="ink"/>
      <path d="M72,120H154M72,120Q68,118 66,121" class="ink" stroke-width="2.2"/></g>
    <g data-part="1"><rect x="214.8" y="44" width="82.4" height="144" fill="url(#${p}grid)"/>
      <rect id="${p}res" x="214.8" y="70" width="82.4" height="118" class="water"/><path id="${p}resl" d="M214.8,70H297.2" class="wline"/>
      <path d="M214,44V188H298V44" class="ink"/>
      <text x="256" y="180" class="hand" style="fill:#3a7fc0" text-anchor="middle">cold water</text></g>
    <g data-part="2">${tube(CM_COLD)}<path d="${CM_COLD}" fill="none" stroke="#cfe3f4" stroke-width="4.6"/>
      <rect x="222" y="219" width="18" height="14" rx="2" class="ink fw"/><path d="M237,219.5V223M237,229V232.5" class="ink"/>
      <circle id="${p}ball" cx="233" cy="226" r="3.6" class="ink" fill="#6b7078"/></g>
    <g data-part="3">${tube(CM_TUBE)}<path id="${p}tw" d="${CM_TUBE}" fill="none" stroke="#cfe3f4" stroke-width="4.6"/>
      <g id="${p}bub"></g>
      <path d="M64,218H186" class="ink" stroke-width="3.4"/><path d="M186,218h6v10" class="ink thin"/>
      <path id="${p}glow" class="energy" stroke-width="1.6"/></g>
    <g data-part="4">${tube(CM_HOT)}<path id="${p}hw" d="${CM_HOT}" fill="none" stroke="#cfe3f4" stroke-width="4.6"/></g>
    <g data-part="5"><rect x="92" y="44" width="28" height="5" rx="1.5" class="ink fm"/><g fill="#24272c">${holes}</g></g>
    <g data-part="6"><path d="M50,52H172L150,108H72Z M58,56L80,102H142L164,56Z" fill-rule="evenodd" fill="url(#${p}hatch)" class="ink"/>
      <path d="M58,56L80,102H142L164,56Z" fill="url(#${p}grid)"/>
      <g clip-path="url(#${p}bk)"><rect id="${p}pool" x="56" y="84" width="110" height="0" class="water"/>
        <rect x="56" y="84" width="110" height="20" fill="#a3a7ad"/><g fill="#24272c">${grounds}</g></g>
      <path d="M62,58L82,99H140L160,58" class="ink thin" stroke-dasharray="3 1.5"/>
      <rect x="104" y="108" width="14" height="6" rx="1" class="ink fm"/></g>
    <g id="${p}drips" style="opacity:1"></g>
    <clipPath id="${p}car"><path d="M76,120H150L147,130Q166,144 164,180Q164,191 152,191H74Q62,191 62,180Q60,144 79,130Z"/></clipPath>
    <clipPath id="${p}bk"><path d="M58,56L80,102H142L164,56Z"/></clipPath>`;
  },
  anim(svg, p, t) {
    const q = id => svg.querySelector('#' + p + id);
    const T = t == null ? 8 : t;
    // reservoir drains slowly
    const L = 70 + 46 * seg(T, 2.4, 9);
    q('res').setAttribute('y', f1(L)); q('res').setAttribute('height', f1(188 - L));
    q('resl').setAttribute('d', `M214.8,${f1(L)}H297.2`);
    // boiling: bursts every 0.5 s once the heater is hot
    const hot = seg(T, 1.6, 2.6), boil = T > 2.4;
    const ph = boil ? ((T - 2.4) / .5) % 1 : 0;
    q('glow').setAttribute('d', wave([[66, 218], [184, 218]], 1.6, 7, T * 10));
    q('glow').setAttribute('opacity', f1(t == null ? 1 : hot));
    q('glow').setAttribute('d', q('glow').getAttribute('d').replace(/M[^M]*$/, ''));
    // check valve: open while the tube refills, slammed shut by each burst
    const shut = boil && ph < .55;
    q('ball').setAttribute('cx', shut ? 233 : 228);
    // bubbles along the upper run of the aluminum tube
    let b = '';
    if (boil || t == null) for (let k = 0; k < 5; k++) {
      const u = ((k / 5 + (T * .9)) % 1);
      const x = 70 + u * 116, r = 1.2 + u * 1.2;
      b += `<circle cx="${f1(x)}" cy="210" r="${f1(r)}" fill="#fff" stroke="#3a7fc0" stroke-width=".7"/>`;
    }
    q('bub').innerHTML = b;
    // hot-water tube: water sits at reservoir level, then slugs + bubbles race up
    const hw = q('hw');
    if (!boil && t != null) {
      const lvl = 15 + (210 - L);
      hw.setAttribute('stroke-dasharray', `${f1(lvl)} 999`); hw.setAttribute('stroke-dashoffset', 0);
    } else {
      hw.setAttribute('stroke-dasharray', '11 7');
      hw.setAttribute('stroke-dashoffset', f1(-T * 70));
    }
    // drips: showerhead -> grounds (water), basket -> carafe (coffee)
    const C = 186 - 30 * seg(T, 6.4, 9);
    q('coffee').setAttribute('y', f1(C));
    let d = '';
    const shower = t == null ? 1 : seg(t, 4.6, 5);
    if (shower > 0) for (let k = 0; k < 4; k++) {
      const u = ((T * 1.6 + k / 4) % 1), x = 98 + k * 6;
      d += `<path d="M${x},${f1(52 + u * 26)}q-1.6,3 0,4q1.6,-1 0,-4Z" fill="#3a7fc0" opacity="${f1(shower)}"/>`;
    }
    const drip = t == null ? 1 : seg(t, 6.4, 6.8);
    if (drip > 0) for (let k = 0; k < 2; k++) {
      const u = ((T * 1.3 + k / 2) % 1);
      d += `<path d="M111,${f1(116 + u * (C - 120))}q-1.8,3.4 0,4.6q1.8,-1.2 0,-4.6Z" fill="#6b7078" opacity="${f1(drip)}"/>`;
    }
    q('drips').innerHTML = d;
    q('pool').setAttribute('y', f1(84 - 8 * (t == null ? 1 : seg(t, 5, 6.2))));
    q('pool').setAttribute('height', f1(8 * (t == null ? 1 : seg(t, 5, 6.2))));
  }
});
}
