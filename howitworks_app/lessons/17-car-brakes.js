{
/* 17. Car disc brakes */
const BLINE = 'M146,52H180V74H200';
const bSpin = t => {                                  // rotor angle (rad): steady, then slowing once the pads bite
  if (t <= 4.6) return 6 * t;
  const u = t - 4.6;
  return 6 * (4.6 + .12 * u + .88 / 1.1 * (1 - Math.exp(-1.1 * u)));
};
LESSONS.push({
  key: 'car-brakes', title: 'Car Disc Brakes', cat: 'Getting Around', mins: 3, vb: [360, 260],
  summary: 'Your foot pushes a small piston that pressurizes brake fluid. The same pressure pushes a much bigger piston at the wheel, so the pads clamp the spinning rotor far harder than you pressed — and friction turns speed into heat.',
  parts: [
    { n: 1, name: 'Pedal', at: [21, 108], num: [48, 146], desc: 'A lever: your foot is far from the pivot and the pushrod is close to it, so the rod pushes several times harder than your foot — over a shorter distance.' },
    { n: 2, name: 'Master cylinder', at: [128, 64], num: [128, 92], desc: 'A narrow cylinder with a small piston. Pushing it squeezes the brake fluid. The reservoir on top keeps the system topped up.' },
    { n: 3, name: 'Brake fluid & lines', at: [182, 74], num: [162, 104], desc: 'Steel tubes full of brake fluid run to every wheel. Liquid barely compresses, so pressure at the pedal end arrives at the wheels at once.' },
    { n: 4, name: 'Caliper & piston', at: [216, 34], num: [204, 14], desc: 'A clamp straddling the rotor. Fluid pushes its wide piston against the inner pad; the caliper body slides the other way and pulls the outer pad in too.' },
    { n: 5, name: 'Brake pads', at: [268, 98], num: [306, 112], desc: 'Steel plates faced with a tough friction material. They rub on the rotor and wear down slowly — that’s why they get replaced.' },
    { n: 6, name: 'Rotor', at: [264, 212], num: [306, 214], desc: 'An iron disc that turns with the wheel. Many have cooling vanes between two faces, so air pumps through and carries the heat away.' },
  ],
  steps: [
    { text: 'Your foot pushes the pedal. It’s a lever, so the pushrod pushes harder than your foot does.', parts: [1], t: [0, 2] },
    { text: 'The rod shoves the small piston in the master cylinder. Brake fluid can’t be squeezed, so the pressure travels instantly down the lines.', parts: [2, 3], t: [2, 4] },
    { text: 'The same pressure acts on the caliper’s much wider piston: more area, more force. The pads clamp the spinning rotor from both sides.', parts: [4, 5], t: [4, 6] },
    { text: 'Friction drags the rotor slower and turns the car’s motion into heat, which the rotor sheds into the air.', parts: [6, 5], t: [6, 8] },
  ],
  dur: 8,
  why: 'Why use fluid instead of cables? Pressure in a trapped liquid is the same everywhere, so one push reaches all four wheels evenly — and a wide piston at the wheel multiplies the force. The trade-off: the big piston moves only a tiny distance.',
  fact: 'In 1949 the tiny Crosley Hotshot became the first American production car with caliper disc brakes. They didn’t last: road salt corroded them, and Crosley went back to drum brakes.',
  quiz: {
    q: 'You push a small piston. Why do the pads squeeze so much harder?',
    opts: ['The caliper piston is wider, and the same pressure on more area makes more force', 'A pump in the caliper adds extra fluid', 'Brake fluid expands as it heats up'],
    a: 0,
    why: 'Pascal’s principle: pressure in a trapped fluid is the same everywhere. Force = pressure × area, so a piston with 10 times the area pushes 10 times harder — while moving a tenth as far.'
  },
  sources: [
    ['Disc brake — Wikipedia', 'https://en.wikipedia.org/wiki/Disc_brake'],
    ['Pascal’s Principle (hydraulic brakes) — University of Central Florida Pressbooks', 'https://pressbooks.online.ucf.edu/algphysics/chapter/pascals-principle/'],
    ['Hydraulic brake — Wikipedia', 'https://en.wikipedia.org/wiki/Hydraulic_brake'],
    ['Crosley Motors — Wikipedia', 'https://en.wikipedia.org/wiki/Crosley_Motors'],
  ],
  art(p) {
    let vanes = '';
    for (let y = 50; y <= 232; y += 9) vanes += `M254,${y}L260,${y + 5}`;
    let rh = '';
    for (let i = 0; i < 8; i++) rh += `<circle id="${p}vh${i}" r="2.6" class="ink thin fw"/>`;
    let lug = '';
    for (let i = 0; i < 5; i++) lug += `<circle id="${p}lg${i}" r="2.4" class="ink thin fm"/>`;
    return `
    <g class="shell">
      <rect x="50" y="12" width="6" height="104" fill="url(#${p}hatch)"/><path d="M50,12V116M56,12V116" class="ink"/>
      <text x="58" y="126" class="hand">firewall</text>
      <path d="M262,100H296V180H262V172H288V108H262Z" fill="url(#${p}hatch)" class="ink"/>
      <rect x="288" y="132" width="56" height="16" class="ink fm"/><path d="M290,140H342" class="ink thin" stroke-dasharray="5 3"/>
      <text x="316" y="164" class="hand" text-anchor="middle">to wheel</text>
      <text x="62" y="80" class="hand">small piston</text>
      <text x="204" y="118" class="hand">big piston</text>
      <text x="130" y="252" class="hand" text-anchor="middle">rotor, face on</text></g>
    <g data-part="1"><g id="${p}pedal"><path d="M26,24L18,120" class="ink" style="stroke-width:3"/>
      <path d="M8,118L28,122L27,128L7,124Z" class="ink fm"/><circle cx="26" cy="24" r="3.5" class="ink fw"/></g>
      <path d="M26,24V14H50" class="ink thin"/><path id="${p}prod" class="ink" style="stroke-width:2"/></g>
    <g data-part="2"><path d="M60,40H146V64H60Z M64,46V58H146V46Z" fill-rule="evenodd" fill="url(#${p}hatch)" class="ink"/>
      <rect id="${p}mfluid" x="64" y="46" width="82" height="12" class="water"/>
      <path d="M96,40V20H128V40" class="ink"/><rect x="97" y="26" width="30" height="14" class="water"/><path d="M97,26H127" class="wline"/>
      <path d="M92,20H132" class="ink"/><path d="M110,40V46" class="ink thin"/>
      <rect id="${p}mpist" y="46.5" width="14" height="11" class="ink fm"/></g>
    <g data-part="3"><path d="${BLINE}" class="ink" style="stroke-width:6"/><path d="${BLINE}" style="stroke:#cfe3f4;stroke-width:3.4;fill:none"/>
      <path id="${p}pulse" class="flow"/></g>
    <g data-part="6"><path d="M250,46H264V236H250Z" fill="url(#${p}grid)" class="ink"/>
      <path d="${vanes}" class="ink thin"/>
      <rect x="250" y="46" width="4" height="190" fill="url(#${p}hatch)" class="ink thin"/><rect x="260" y="46" width="4" height="190" fill="url(#${p}hatch)" class="ink thin"/>
      <rect id="${p}glow" x="249" y="50" width="16" height="50" fill="#D63A2A" opacity="0"/>
      <circle cx="130" cy="190" r="48" class="ink fm"/><circle cx="130" cy="190" r="30" class="ink thin"/>
      <circle id="${p}ring" cx="130" cy="190" r="39" fill="none" stroke="#D63A2A" stroke-width="18" opacity="0"/>
      <circle cx="130" cy="190" r="22" class="ink fw"/>${rh}${lug}<circle cx="130" cy="190" r="6" class="ink thin fw"/>
      <path id="${p}spin" class="energy"/></g>
    <g data-part="5"><g id="${p}padI"><rect x="241" y="52" width="3" height="44" class="ink" fill="#6b7078"/><rect x="244" y="54" width="4" height="40" class="ink" fill="#c9ccd1"/></g>
      <g id="${p}padO"><rect x="270" y="52" width="3" height="44" class="ink" fill="#6b7078"/><rect x="266" y="54" width="4" height="40" class="ink" fill="#c9ccd1"/></g></g>
    <g data-part="4"><g id="${p}body"><path d="M200,34H284V104H273V44H241V52H208V96H241V104H200Z" fill="url(#${p}hatch)" class="ink"/>
      <rect id="${p}cfluid" x="208" y="52" width="13" height="44" class="water"/>
      <path id="${p}cpist" class="ink fm"/></g>
      <path d="M114,136H146V158H114Z" class="ink fm"/><path d="M118,141H142" class="ink thin"/></g>
    <path id="${p}fsmall" class="energy"/><path id="${p}fbig" class="energy" style="stroke-width:2"/>
    <path id="${p}heat" class="energy" opacity="0"/>`;
  },
  anim(svg, p, t) {
    const q = id => svg.querySelector('#' + p + id);
    const k = t == null ? 1 : seg(t, .3, 2.2) - seg(t, 7.2, 7.9);       // pedal travel 0..1
    const press = t == null ? 1 : seg(t, 2.6, 4.2) - seg(t, 7.2, 7.9);   // pads closing 0..1
    const ang = -13 * k;
    q('pedal').setAttribute('transform', `rotate(${f1(ang)} 26 24)`);
    const [ax, ay] = rot(23.6, 50, 26, 24, ang);
    const mx = 70 + 6 * k;
    q('prod').setAttribute('d', `M${f1(ax)},${f1(ay)}L${f1(mx)},52`);
    q('mpist').setAttribute('x', f1(mx));
    q('mfluid').setAttribute('x', f1(mx + 14)); q('mfluid').setAttribute('width', f1(146 - mx - 14));
    // caliper: piston moves in 2, body slides out 2 (floating caliper)
    const g = 2 * press;
    q('body').setAttribute('transform', `translate(${f1(-g)},0)`);
    q('padO').setAttribute('transform', `translate(${f1(-g)},0)`);
    q('padI').setAttribute('transform', `translate(${f1(g)},0)`);
    q('cpist').setAttribute('d', `M${f1(221 + g * 2)},53H${f1(241 + g * 2)}V95H${f1(221 + g * 2)}V88H${f1(229 + g * 2)}V60H${f1(221 + g * 2)}Z`);
    q('cfluid').setAttribute('width', f1(13 + g * 2));
    // pressure pulses travelling down the line
    let pl = '';
    if (t != null && t > 2.2 && t < 4.4) {
      const s = ((t - 2.2) * 1.6) % 1, pts = [[146, 52], [180, 52], [180, 74], [200, 74]];
      const L = s * 76; let x, y;
      if (L < 34) { x = 146 + L; y = 52; pl = `M${f1(x - 7)},${y}H${f1(x)}M${f1(x - 3)},${y - 3}L${f1(x)},${y}L${f1(x - 3)},${y + 3}`; }
      else if (L < 56) { y = 52 + L - 34; pl = `M180,${f1(y - 7)}V${f1(y)}M177,${f1(y - 3)}L180,${f1(y)}L183,${f1(y - 3)}`; }
      else { x = 180 + L - 56; pl = `M${f1(x - 7)},74H${f1(x)}M${f1(x - 3)},71L${f1(x)},74L${f1(x - 3)},77`; }
    }
    q('pulse').setAttribute('d', pl);
    // force arrows: one small at the master piston, three big at the caliper piston
    q('fsmall').setAttribute('d', k > .2 ? `M${f1(mx - 12)},34H${f1(mx + 6)}M${f1(mx + 2)},31L${f1(mx + 6)},34L${f1(mx + 2)},37` : '');
    let fb = '';
    if (press > .3) [60, 74, 88].forEach(y => { const x = 230 + g * 2; fb += `M${f1(x - 12)},${y}H${f1(x)}M${f1(x - 4)},${y - 3.5}L${f1(x)},${y}L${f1(x - 4)},${y + 3.5}`; });
    q('fbig').setAttribute('d', fb);
    // rotor spin (face view) slows once the pads bite
    const a = t == null ? .3 : bSpin(t);
    for (let i = 0; i < 8; i++) { const b = a + i * TAU / 8; const c = q('vh' + i); c.setAttribute('cx', f1(130 + 39 * Math.cos(b))); c.setAttribute('cy', f1(190 + 39 * Math.sin(b))); }
    for (let i = 0; i < 5; i++) { const b = a + i * TAU / 5; const c = q('lg' + i); c.setAttribute('cx', f1(130 + 13 * Math.cos(b))); c.setAttribute('cy', f1(190 + 13 * Math.sin(b))); }
    const sp = t == null ? 1 : (t < 4.6 ? 1 : .12 + .88 * Math.exp(-1.1 * (t - 4.6)));
    q('spin').setAttribute('d', 'M181,176A54,54 0 0 1 181,204M177,200L181,205L185,199');
    q('spin').setAttribute('opacity', f1(Math.max(.15, sp)));
    // heat
    const h = t == null ? .6 : seg(t, 4.8, 6.4) * (1 - seg(t, 7.6, 8));
    const ph = t == null ? 0 : t * 8;
    q('heat').setAttribute('opacity', f1(h));
    q('heat').setAttribute('d', [244, 257, 270].map((x, i) => wave([[x, 30], [x, 8]], 1.6, 8, ph + i)).join(''));
    q('glow').setAttribute('opacity', f1(h * .25));
    q('ring').setAttribute('opacity', f1(h * .18));
    const [px1, py1] = rot(21, 108, 26, 24, ang);
    return { 1: [f1(px1), f1(py1)], 4: [f1(216 - g), 34], 5: [f1(268 - g), 98] };
  }
});
}
