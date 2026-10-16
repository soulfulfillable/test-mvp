{
/* 3. Refrigerator */
// refrigerant loop (one path, in flow order) and where each stretch ends
const FR_COND = (() => { const p = []; for (let i = 0; i <= 10; i++) { const y = 46 + i * 15.4; p.push(...(i % 2 ? [[252, y], [266, y]] : [[266, y], [252, y]])); } return p.slice(1); })();
const FR_EVAP = (() => { const p = []; for (let i = 0; i <= 5; i++) { const y = 82 - i * 9.2; p.push(...(i % 2 ? [[224, y], [206, y]] : [[206, y], [224, y]])); } return p; })();
const FR_LOOP = [
  [236, 228], [276, 228], [276, 40], [266, 40],            // discharge: hot gas
  ...FR_COND,                                                 // condenser: hot gas -> liquid
  [252, 200], [252, 204], [237, 204], [237, 90], [206, 90], // capillary tube (inside the back wall)
  ...FR_EVAP,                                        // evaporator: boils, soaks up heat
  [242, 36], [242, 212], [222, 212], [222, 222],             // suction line back to the compressor
];
LESSONS.push({
  key: 'refrigerator', title: 'Refrigerator', cat: 'Kitchen', mins: 3, vb: [360, 280],
  summary: 'A fridge doesn’t make cold — it moves heat. A refrigerant boils inside the fridge, soaking up heat, and a compressor pumps it to the coils on the back, where it gives that heat to your kitchen.',
  parts: [
    { n: 1, name: 'Compressor', at: [214, 244], num: [300, 252], desc: 'A motor-driven pump in the bottom back. It squeezes the refrigerant gas, which makes it hot and high-pressure.' },
    { n: 2, name: 'Condenser coils', at: [266, 112], num: [318, 96], desc: 'The coils on the back (or underneath). The hot gas gives its heat to the room air and condenses into a liquid.' },
    { n: 3, name: 'Capillary tube', at: [236, 160], num: [306, 180], desc: 'A very thin tube that acts as the expansion device. Forcing the liquid through it drops the pressure, and some of it flashes to vapor — chilling the rest.' },
    { n: 4, name: 'Evaporator', at: [215, 44], num: [214, 12], desc: 'Coils inside, usually behind a panel in the freezer. The cold, low-pressure refrigerant boils here and soaks up heat from the air inside.' },
    { n: 5, name: 'Fan', at: [184, 52], num: [150, 12], desc: 'Blows air across the cold evaporator and pushes the chilled air through vents into the freezer and fridge sections.' },
    { n: 6, name: 'Thermostat', at: [80, 108], num: [36, 132], desc: 'Senses the temperature inside and switches the compressor on when it gets too warm, off when it’s cold enough.' },
  ],
  steps: [
    { text: 'The thermostat senses it’s too warm and starts the compressor. It squeezes the refrigerant into a hot, high-pressure gas.', parts: [6, 1], t: [0, 2.2] },
    { text: 'In the coils on the back, the hot gas gives its heat to your kitchen and condenses into a liquid.', parts: [2], t: [2.2, 4.6] },
    { text: 'The liquid is forced through the thin capillary tube. Its pressure drops, part of it flashes to vapor, and it turns very cold.', parts: [3], t: [4.6, 6.4] },
    { text: 'In the evaporator it boils, soaking up heat from inside the fridge. The fan spreads the chilled air, and the gas returns to the compressor.', parts: [4, 5], t: [6.4, 9] },
  ],
  dur: 9,
  why: 'Why squeeze and then release? A liquid’s boiling point depends on pressure. At low pressure the refrigerant boils colder than your food, so it soaks up heat; squeezed to high pressure, it condenses warmer than your kitchen, so it gives that heat away.',
  fact: 'The first fridge to sell widely, GE’s 1927 “Monitor-Top,” wore its hot compressor on top in a round housing that looked like the gun turret of the Civil War ironclad USS Monitor. Over a million were made.',
  quiz: {
    q: 'Where does the heat taken from inside your fridge end up?',
    opts: ['It’s destroyed by the cold refrigerant', 'In your kitchen, given off by the coils on the back', 'Down the drain with the defrost water'],
    a: 1,
    why: 'Heat can’t be destroyed, only moved. The refrigerant carries it out of the box and the condenser coils release it into the room — which is why the back of a fridge feels warm.'
  },
  sources: [
    ['Refrigerator — Wikipedia', 'https://en.wikipedia.org/wiki/Refrigerator'],
    ['The fridge: how it works — Danfoss', 'https://www.danfoss.com/en-us/service-and-support/fix-and-troubleshooting/cooling-installer-hub/the-fridge-how-it-works'],
    ['How Does a Refrigerator Work? — iFixit', 'https://www.ifixit.com/Wiki/How_a_Refrigerator_Works'],
    ['Refrigerator Thermometers: Cold Facts about Food Safety — U.S. FDA', 'https://www.fda.gov/food/buy-store-serve-safe-food/refrigerator-thermometers-cold-facts-about-food-safety'],
  ],
  art(p) {
    const pl = pts => pts.map((q, i) => (i ? 'L' : 'M') + q[0] + ',' + q[1]).join('');
    let fins = '';
    for (let x = 202; x <= 228; x += 4) fins += `M${x},38V88`;
    return `
    <g class="shell">
      <path d="M0,262H360" class="ink"/><rect x="0" y="262.7" width="360" height="18" fill="url(#${p}hatch)"/>
      <path d="M48,24H248V208H196V254H48Z M60,36V86H232V36Z M60,98V196H184V242H60Z" fill-rule="evenodd" fill="url(#${p}hatch)" class="ink"/>
      <path d="M60,98H232V196H184V242H60Z" fill="url(#${p}grid)" class="ink thin"/>
      <path d="M60,36H232V86H60Z" fill="url(#${p}grid)" class="ink thin"/>
      <path d="M232,36V86" class="ink"/>
      <path d="M36,24H48V254H36Z" fill="url(#${p}hatch)" class="ink"/>
      <path d="M26,46V70M26,118V176" class="ink" stroke-width="2.4"/><path d="M26,46H36M26,70H36M26,118H36M26,176H36" class="ink thin"/>
      <path d="M64,150H180M64,196H180" class="ink thin"/><path d="M64,206H180V238H64Z" class="ink thin"/>
      <path d="M90,150V122Q90,116 96,116H108Q114,116 114,122V150M98,116V110H106V116" class="ink thin fw"/>
      <rect x="128" y="168" width="30" height="28" rx="3" class="ink thin fw"/>
      <rect x="74" y="64" width="40" height="22" rx="2" class="ink thin fm"/>
      <path d="M184,86H198V98H184Z" fill="url(#${p}grid)"/>
      <path d="M60,254v6h14v-6M224,254v6h14v-6" class="ink"/>
</g>
    <g class="loop">
      <path d="${pl(FR_LOOP.slice(0, 4))}" class="ink" stroke-width="2"/>
      <path d="M242,36V212H222V222" class="ink" stroke-width="2"/>
      </g>
    <g data-part="2"><path d="${pl(FR_COND)}" class="ink" stroke-width="2.2"/>
      <path d="M248,44H270M248,206H270M259,40V210" class="ink thin"/></g>
    <g data-part="3"><path d="M252,200V204H237V90H206V82" class="ink thin" stroke-width="1"/>
      <path d="M250,204c0,-5 -4,-5 -4,0s-4,5 -4,0s-4,-5 -4,0" class="ink thin"/></g>
    <g data-part="4"><path d="${fins}" class="ink thin" opacity=".6"/><path d="${pl(FR_EVAP)}" class="ink" stroke-width="2.2"/></g>
    <g data-part="5"><rect x="190" y="44" width="6" height="14" rx="1" class="ink fm"/>
      <path id="${p}fan" class="ink" fill="#c9ccd1"/></g>
    <g data-part="1"><path d="M196,254V232Q196,218 214,218Q232,218 232,232V254Z" class="ink fm"/>
      <rect x="208" y="230" width="12" height="16" fill="url(#${p}grid)" class="ink thin"/>
      <rect id="${p}pist" x="209" y="236" width="10" height="6" class="ink thin" fill="#6b7078"/>
      <path d="M192,254H236" class="ink"/></g>
    <g data-part="6"><rect x="70" y="98" width="20" height="9" rx="1.5" class="ink fw"/><circle cx="80" cy="102.5" r="2.4" class="ink thin fm"/></g>
    <g id="${p}dots" style="opacity:1"></g>
    <g class="heat" style="opacity:1"><path id="${p}h0" class="energy"/><path id="${p}h1" class="energy"/><path id="${p}h2" class="energy"/>
      <path id="${p}h3" class="energy"/>
      <path id="${p}air" class="flow"/>
      <text x="290" y="140" class="hand" style="fill:#D63A2A">heat out</text>
      <text x="282" y="216" class="hand">hot gas</text>
      <text x="200" y="80" class="hand" style="fill:#3a7fc0" text-anchor="end">cold</text>
      <text x="282" y="196" class="hand">liquid</text></g>`;
  },
  anim(svg, p, t) {
    const q = id => svg.querySelector('#' + p + id);
    const run = t == null ? 0 : t;
    const ph = run * 8;
    // heat leaving the condenser, heat entering the evaporator
    const out = t == null ? 1 : seg(t, 2.2, 3);
    q('h0').setAttribute('d', wave([[282, 70], [312, 70]], 3, 10, ph));
    q('h1').setAttribute('d', wave([[282, 116], [312, 116]], 3, 10, ph + 1));
    q('h2').setAttribute('d', wave([[282, 162], [312, 162]], 3, 10, ph + 2));
    ['h0', 'h1', 'h2'].forEach(h => q(h).setAttribute('opacity', f1(t == null ? 1 : .25 + .75 * out)));
    const inn = t == null ? 1 : .25 + .75 * seg(t, 6.4, 7.2);
    q('h3').setAttribute('d', wave([[118, 66], [196, 66]], 3, 10, ph));
    q('h3').setAttribute('opacity', f1(inn));
    q('air').setAttribute('d', 'M174,44H120M191,64V108Q191,114 183,114H140');
    q('air').setAttribute('stroke-dasharray', '5 4');
    q('air').setAttribute('stroke-dashoffset', f1(run * 18));
    // fan blades (front view, spinning)
    const a = run * 900;
    let fb = '';
    for (let k = 0; k < 3; k++) {
      const [x1, y1] = rot(184, 42, 184, 51, a + k * 120), [x2, y2] = rot(188, 46, 184, 51, a + k * 120);
      fb += `M184,51L${f1(x1)},${f1(y1)}Q${f1(x2 + 2)},${f1(y2 - 2)} ${f1(x2)},${f1(y2)}Z`;
    }
    q('fan').setAttribute('d', fb);
    // compressor piston
    q('pist').setAttribute('y', f1(236 + (t == null ? 0 : 4 * Math.sin(run * 14))));
    // refrigerant dots travel the loop; hot gas red, liquid dark, cold blue
    const pts = FR_LOOP, L = [0];
    for (let i = 1; i < pts.length; i++) L.push(L[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
    const tot = L[L.length - 1], iC1 = 4 + FR_COND.length - 1, iEv = iC1 + 5 + 5;
    const sMid = (L[4] + L[iC1]) / 2;
    let d = '';
    const N = 34, off = run * 46;
    for (let k = 0; k < N; k++) {
      const s = ((k * tot / N + off) % tot + tot) % tot;
      let i = 1; while (L[i] < s) i++;
      const u = (s - L[i - 1]) / (L[i] - L[i - 1]);
      const x = pts[i - 1][0] + (pts[i][0] - pts[i - 1][0]) * u, y = pts[i - 1][1] + (pts[i][1] - pts[i - 1][1]) * u;
      let fill = '#D63A2A', st = '#D63A2A', r = 2.3;
      if (s > sMid && s <= L[iC1 + 1]) { fill = '#24272c'; st = '#24272c'; r = 2; }
      if (s > L[iC1 + 1] && s <= L[iEv]) { fill = '#3a7fc0'; st = '#3a7fc0'; r = 1.6; }
      if (s > L[iEv]) { fill = '#fff'; st = '#3a7fc0'; r = 2.3; }
      d += `<circle cx="${f1(x)}" cy="${f1(y)}" r="${r}" fill="${fill}" stroke="${st}" stroke-width=".9"/>`;
    }
    q('dots').innerHTML = d;
  }
});
}
