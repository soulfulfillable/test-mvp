{
/* 1. Microwave oven */
LESSONS.push({
  key: 'microwave', title: 'Microwave Oven', cat: 'Kitchen', mins: 3, vb: [360, 240],
  summary: 'A tube called a magnetron makes microwaves that flip the water molecules in your food back and forth billions of times a second. That jostling is heat.',
  parts: [
    { n: 1, name: 'Magnetron', at: [262, 112], num: [302, 128], desc: 'A vacuum tube with magnets that turns electricity into microwaves — radio waves that cycle 2.45 billion times a second.' },
    { n: 2, name: 'Waveguide', at: [222, 63], num: [222, 18], desc: 'A hollow metal channel that steers the microwaves from the magnetron into the cooking box.' },
    { n: 3, name: 'High-voltage transformer', at: [270, 172], num: [302, 180], desc: 'Steps the 120 volts from your outlet up to thousands of volts — what the magnetron needs to run.' },
    { n: 4, name: 'Metal cavity', at: [22, 50], num: [36, 18], desc: 'The metal walls reflect microwaves, so they bounce around inside the box instead of escaping.' },
    { n: 5, name: 'Turntable', at: [52, 174], num: [30, 226], desc: 'Microwaves form a fixed pattern of hot and cold spots. Turning the food moves it through them so it heats more evenly.' },
    { n: 6, name: 'Door screen', at: [338, 48], num: [348, 18], desc: 'The metal mesh in the door has holes far smaller than the 12 cm (5 in) microwaves, so they can’t get out — but light can, so you can watch.' },
  ],
  steps: [
    { text: 'The transformer boosts wall power to thousands of volts.', parts: [3], t: [0, 1.6] },
    { text: 'The magnetron turns that power into microwaves.', parts: [1], t: [1.6, 3.2] },
    { text: 'The waveguide carries them into the box, where they bounce off the metal walls.', parts: [2, 4], t: [3.2, 4.8] },
    { text: 'The waves flip water molecules in the food back and forth. That motion is heat — mostly in the outer inch; the middle warms by conduction. The turntable keeps hot spots moving.', parts: [5], t: [4.8, 8] },
  ],
  dur: 8,
  why: 'Why a metal box? Metal reflects microwaves, so the box keeps them in and sends them through the food again and again instead of leaking out. And 2.45 GHz sits in a radio band reserved for industrial, scientific and medical use, so ovens don’t jam radio services.',
  fact: 'It was discovered by accident. Around 1945, Raytheon engineer Percy Spencer was working near a radar magnetron when the candy bar in his pocket melted. He soon tried popcorn — it popped.',
  quiz: {
    q: 'Why does the door have a metal screen full of tiny holes?',
    opts: ['To let steam escape while cooking', 'The holes are too small for microwaves to pass, but light gets through', 'To keep the glass from cracking when it heats up'],
    a: 1,
    why: 'Microwaves are about 12 cm long. Holes a few millimeters wide block them like a solid wall, while visible light — with waves about 200,000 times shorter — passes right through.'
  },
  sources: [
    ['Microwave oven — Wikipedia', 'https://en.wikipedia.org/wiki/Microwave_oven'],
    ['Percy Spencer — Wikipedia', 'https://en.wikipedia.org/wiki/Percy_Spencer'],
    ['Microwave Oven Radiation — U.S. FDA', 'https://www.fda.gov/radiation-emitting-products/resources-you-radiation-emitting-products/microwave-oven-radiation'],
    ['How do microwave ovens work? — Explain that Stuff', 'https://www.explainthatstuff.com/microwaveovens.html'],
  ],
  art(p) {
    let fins = '';
    for (let y = 98; y <= 128; y += 5) fins += `M220,${y}H268`;
    let coil = '';
    for (let x = 220; x <= 236; x += 3) coil += `M${x},157V187`;
    for (let x = 244; x <= 260; x += 3) coil += `M${x},157V187`;
    let holes = '';
    for (let y = 40; y <= 96; y += 8) for (let x = 290; x <= 350; x += 8) holes += `<circle cx="${x + ((y / 8) % 2) * 4}" cy="${y}" r="2.3"/>`;
    return `
    <g class="shell"><rect x="10" y="32" width="272" height="174" rx="9" class="ink"/>
      <path d="M30,206v6h18v-6M244,206v6h18v-6" class="ink"/>
      </g>
    <g data-part="4"><path d="M18,44H190V196H18Z M26,52V188H182V52Z" fill-rule="evenodd" fill="url(#${p}hatch)" class="ink"/>
      <rect x="181" y="58.8" width="10" height="12.4" fill="url(#${p}grid)"/></g>
    <g data-part="2"><path d="M182,58H254V92H238V72H182" class="ink fm"/></g>
    <g data-part="3"><rect x="210" y="150" width="60" height="44" rx="2" class="ink fw"/>
      <rect x="217" y="156" width="22" height="32" class="ink thin"/><rect x="241" y="156" width="22" height="32" class="ink thin"/>
      <path d="${coil}" class="ink thin"/>
      <path d="M232,150C232,142 238,144 238,134" class="ink thin"/></g>
    <g data-part="1"><rect x="226" y="92" width="36" height="42" rx="3" class="ink fm"/>
      <path d="${fins}" class="ink thin"/>
      <rect x="242" y="80" width="4" height="12" class="ink fw"/></g>
    <g class="food">
      <path id="${p}soup" d="M69,148Q86,145 104,148T139,148Q137,168 104,168Q71,168 69,148Z" class="water"/>
      <path d="M62,140H146 M66,140Q68,170 104,170Q140,170 142,140 M90,170V172H118V170" class="ink"/>
      <g id="${p}mol"></g>
      <path id="${p}steam" d="M92,134q-4,-6 0,-12q4,-6 0,-12 M104,132q-4,-6 0,-12q4,-6 0,-12 M116,134q-4,-6 0,-12q4,-6 0,-12" class="ink thin" opacity=".55"/></g>
    <g data-part="5"><rect x="40" y="172" width="128" height="5" rx="2.5" class="ink fm"/>
      <circle cx="60" cy="181" r="3.5" class="ink fw"/><circle cx="148" cy="181" r="3.5" class="ink fw"/>
      <path d="M52,185.5H156 M104,177V196" class="ink thin"/>
      <rect x="94" y="196" width="20" height="8" rx="1.5" class="ink fw"/>
      <circle id="${p}mark" cx="104" cy="174.5" r="1.4" fill="#24272c"/></g>
    <g class="waves"><path id="${p}w0" class="energy"/><path id="${p}w1" class="energy"/>
      <text x="138" y="126" class="hand" style="fill:#D63A2A">2.45 GHz</text></g>
    <g data-part="6"><circle cx="318" cy="66" r="30" fill="#e3e6ea"/>
      <g clip-path="url(#${p}ic)" fill="#fff" stroke="#24272c" stroke-width=".5">${holes}</g>
      <circle cx="318" cy="66" r="30" class="ink"/>
      <text x="318" y="108" class="hand" text-anchor="middle">door screen</text></g>
    <clipPath id="${p}ic"><circle cx="318" cy="66" r="29"/></clipPath>`;
  },
  anim(svg, p, t) {
    const q = id => svg.querySelector('#' + p + id);
    const ph = t == null ? 0 : t * 9;
    q('w0').setAttribute('d', wave([[184, 65], [132, 104]], 4, 14, ph));
    q('w1').setAttribute('d', wave([[184, 65], [40, 64], [32, 66], [82, 132]], 4, 14, ph));
    let m = '';
    [[86, 158, 20], [104, 156, -35], [122, 160, 60]].forEach(([x, y, a], i) => {
      const ang = t == null ? a : a + 40 * Math.sin(t * 26 + i * 2);
      const [hx1, hy1] = rot(x + 4.6, y, x, y, ang + 52), [hx2, hy2] = rot(x + 4.6, y, x, y, ang - 52);
      m += `<circle cx="${f1(hx1)}" cy="${f1(hy1)}" r="1.9" class="ink thin fw"/><circle cx="${f1(hx2)}" cy="${f1(hy2)}" r="1.9" class="ink thin fw"/><circle cx="${x}" cy="${y}" r="3.1" class="ink thin" fill="#D63A2A"/>`;
    });
    q('mol').innerHTML = m;
    q('steam').setAttribute('opacity', t == null ? .55 : Math.min(.8, seg(t, 4.8, 7.5) * .8));
    q('mark').setAttribute('cx', t == null ? 104 : f1(104 + 58 * Math.sin(t * .9)));
  }
});
}
