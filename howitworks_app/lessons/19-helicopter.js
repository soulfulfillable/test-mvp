{
/* 19. Helicopter */
const HH = [170, 50], HRAD = 138;                      // rotor hub, blade radius
const HFUS = 'M40,140C40,112 62,90 104,86L252,86C262,86 266,96 272,102L318,104V118L272,126C262,140 254,156 236,158L74,160C54,160 40,154 40,140Z';
const hSpin = t => t < 2.5 ? 7 * t * t / 5 : 7 * (2.5 * 2.5 / 5 + (t - 2.5) * 1) * 1;   // rotor angle: spin-up, then steady
LESSONS.push({
  key: 'helicopter', title: 'Helicopter', cat: 'Getting Around', mins: 3, vb: [360, 260],
  summary: 'The rotor blades are long, thin wings whirling around a mast. Changing their tilt changes the lift: all together to climb, a little more on one side to lean the rotor and fly that way. A tail rotor stops the body from spinning.',
  parts: [
    { n: 1, name: 'Main rotor blades', at: [34, 50], num: [22, 78], desc: 'Each blade is a wing shaped like an airplane’s. Spinning gives them airspeed even when the helicopter hovers, so they make lift without forward flight.' },
    { n: 2, name: 'Swashplate', at: [152, 75], num: [118, 76], desc: 'Two rings on the mast. The bottom one doesn’t spin and is moved by the pilot; the top one spins with the rotor and pushes rods that twist each blade.' },
    { n: 3, name: 'Engine', at: [222, 108], num: [228, 140], desc: 'Most are turbines — cousins of the jet engine whose spinning shaft drives the rotors instead of making thrust. Small helicopters often use a piston engine.' },
    { n: 4, name: 'Main gearbox & mast', at: [158, 100], num: [124, 116], desc: 'Gears cut the engine’s very fast spin down to the rotor’s much slower one, and also drive the long shaft out to the tail.' },
    { n: 5, name: 'Tail rotor', at: [334, 52], num: [346, 22], desc: 'A small sideways propeller on the tail. Its push cancels the twist from the main rotor — and changing its pitch with the pedals swings the nose left or right.' },
    { n: 6, name: 'Collective & cyclic', at: [88, 136], num: [34, 186], desc: 'The collective lever (left hand) tilts all blades at once to climb or sink. The cyclic stick (right hand) tilts the rotor to fly forward, back or sideways.' },
  ],
  steps: [
    { text: 'The engine drives the main gearbox, which slows the spin down and turns the mast and the blades.', parts: [3, 4], t: [0, 2.5] },
    { text: 'Pull up the collective: the swashplate slides up the mast and twists every blade to a steeper angle. More lift — the helicopter climbs.', parts: [6, 2, 1], t: [2.5, 5] },
    { text: 'Push the cyclic: the swashplate tilts, so each blade bites harder on one side of its circle than the other. The whole rotor leans and pulls the helicopter forward.', parts: [6, 2], t: [5, 7.5] },
    { text: 'Turning the rotor one way twists the body the other way. The tail rotor pushes sideways to cancel the twist.', parts: [5], t: [7.5, 10] },
  ],
  dur: 10,
  why: 'Why a swashplate? The blades spin but the pilot’s controls don’t. The plate’s bottom ring stays still and takes the pilot’s input; its top ring spins along with the blades and passes that input to each one as it goes around.',
  fact: 'On September 14, 1939, in Stratford, Connecticut, Igor Sikorsky lifted off in his VS-300 — a short hop still tied to the ground. Its layout, one big rotor plus a small tail rotor, is the one most helicopters use today.',
  quiz: {
    q: 'What is the small rotor on the tail for?',
    opts: ['Pushing the helicopter forward', 'Cooling the engine', 'Stopping the body from spinning the opposite way to the main rotor'],
    a: 2,
    why: 'Newton’s third law: the engine twists the rotor one way, so the rotor twists the body the other way. The tail rotor’s sideways push cancels that — and the pedals vary it to steer the nose.'
  },
  sources: [
    ['Helicopter flight controls — Wikipedia', 'https://en.wikipedia.org/wiki/Helicopter_flight_controls'],
    ['Helicopter Flying Handbook, Ch. 3: Flight Controls — FAA', 'https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/helicopter_flying_handbook/hfh_ch03.pdf'],
    ['Sikorsky VS-300 Helicopter (landmark brochure) — ASME', 'https://www.asme.org/wwwasmeorg/media/ResourceFiles/AboutASME/Who%20We%20Are/Engineering%20History/Landmarks/95-Sikorsky-VS-300-Helicopter.pdf'],
    ['Vought-Sikorsky VS-300 — Wikipedia', 'https://en.wikipedia.org/wiki/Vought-Sikorsky_VS-300'],
  ],
  art(p) {
    return `
    <g class="shell"><path d="M14,244H250" class="ink"/><rect x="14" y="244.7" width="236" height="8" fill="url(#${p}hatch)"/>
      <ellipse id="${p}shadow" cx="150" cy="240" rx="80" ry="3" fill="#dfe2e6"/>
      <text x="300" y="250" class="hand" text-anchor="middle">seen from above</text>
      <text x="60" y="14" class="hand" text-anchor="middle">blade angle</text></g>
    <g class="shell"><g class="mv">
      <path d="${HFUS}" class="ink fw"/>
      <path d="M48,128C50,108 66,94 100,92L112,92L112,134L56,136Z" class="ink thin"/>
      <path d="M56,146H236V152H56Z" fill="url(#${p}hatch)" class="ink thin"/>
      <path d="M148,88V146M152,88V146" class="ink thin"/><rect x="148.5" y="88" width="3" height="58" fill="url(#${p}hatch)"/>
      <path d="M312,104L320,60H338L332,104Z" class="ink fw"/>
      <path d="M92,160L84,182M212,158L218,182M56,176Q58,184 66,184H246" class="ink" style="stroke-width:2.2"/></g></g>
    <g data-part="3"><g class="mv"><rect x="196" y="91" width="52" height="17" rx="6" class="ink fm"/>
      <path d="M204,91V108M212,91V108M220,91V108" class="ink thin"/><path d="M248,94L262,88V112L248,105" class="ink fm"/>
      <path d="M188,100H196" class="ink" style="stroke-width:2.4"/><path id="${p}exh" class="energy" opacity="0"/></g></g>
    <g data-part="4"><g class="mv"><path d="M156,88H184L188,112H152Z" class="ink fm"/><path d="M160,100H180M162,106H178" class="ink thin"/>
      <path d="M170,52V88" class="ink" style="stroke-width:3"/>
      <path d="M186,112L190,116H312L318,110" class="ink" style="stroke-width:1.8"/><path d="M200,116h4M240,116h4M280,116h4" class="ink thin"/></g></g>
    <g data-part="6"><g class="mv"><path id="${p}coll" class="ink" style="stroke-width:2.4"/><path id="${p}cyc" class="ink" style="stroke-width:2.4"/>
      <path id="${p}rods" class="ink thin" stroke-dasharray="4 2"/></g></g>
    <g data-part="2"><g class="mv"><path id="${p}swl" class="ink fm"/><path id="${p}swu" class="ink fw"/><path id="${p}links" class="ink thin"/></g></g>
    <g data-part="1"><g class="mv"><ellipse id="${p}disc" cx="${HH[0]}" cy="${HH[1]}" rx="${HRAD}" ry="11" class="ink thin" stroke-dasharray="3 3"/>
      <path id="${p}blades" class="ink" style="stroke-width:2.4"/><rect x="163" y="46" width="14" height="7" rx="2" class="ink fm"/>
      <path id="${p}lift" class="energy" style="stroke-width:2"/></g>
      <path d="M40,30H80" class="ink thin" stroke-dasharray="2 2"/><path id="${p}foil" class="ink fm"/></g>
    <g data-part="5"><g class="mv"><circle cx="326" cy="70" r="20" class="ink thin" stroke-dasharray="3 3"/><path id="${p}tr" class="ink" style="stroke-width:2.2"/>
      <circle cx="326" cy="70" r="3" class="ink fm"/></g>
      <g><circle cx="292" cy="200" r="34" class="ink thin" stroke-dasharray="3 3"/>
      <path d="M276,200C276,190 286,186 300,190L344,197V203L300,210C286,214 276,210 276,200Z" class="ink fw"/>
      <path d="M344,192V208" class="ink" style="stroke-width:2.2"/>
      <path id="${p}rarr" class="flow"/><path id="${p}tq" class="energy"/><path id="${p}thr" class="energy" style="stroke-width:2"/></g></g>`;
  },
  anim(svg, p, t) {
    const q = id => svg.querySelector('#' + p + id);
    const coll = t == null ? .6 : seg(t, 2.7, 4.3);
    const cyc = t == null ? 0 : seg(t, 5.2, 6.6) * (1 - seg(t, 9.2, 10));
    const psi = t == null ? .5 : hSpin(t);
    // the whole aircraft: climbs with collective, noses down and drifts with cyclic
    const tb = `translate(${f1(-8 * cyc)},${f1(-8 * coll)}) rotate(${f1(-3 * cyc)} 170 120)`;
    const TP = (x, y) => { const [a, b] = rot(x, y, 170, 120, -3 * cyc); return [f1(a - 8 * cyc), f1(b - 8 * coll)]; };
    svg.querySelectorAll('.mv').forEach(g => g.setAttribute('transform', tb));
    q('shadow').setAttribute('rx', f1(80 - 6 * coll));
    // swashplate: slides up with collective, tilts forward with cyclic
    const up = 6 * coll, tilt = -8 * cyc;
    const sw = (y, w, h) => { const [ax, ay] = rot(170 - w, y, 170, y, tilt), [bx, by] = rot(170 + w, y, 170, y, tilt); const [cx, cy] = rot(170 + w, y + h, 170, y, tilt), [dx, dy] = rot(170 - w, y + h, 170, y, tilt);
      return { d: `M${f1(ax)},${f1(ay)}L${f1(bx)},${f1(by)}L${f1(cx)},${f1(cy)}L${f1(dx)},${f1(dy)}Z`, l: [ax, ay], r: [bx, by] }; };
    const L = sw(78 - up, 18, 4), U = sw(73 - up, 15, 4);
    q('swl').setAttribute('d', L.d); q('swu').setAttribute('d', U.d);
    q('links').setAttribute('d', `M${f1(U.l[0] + 2)},${f1(U.l[1])}L162,${f1(53 - up * .3)}M${f1(U.r[0] - 2)},${f1(U.r[1])}L178,${f1(53 - up * .3)}`);
    // control rods down to the cockpit
    const lr = rot(152, 82 - up, 170, 78 - up, tilt), rr = rot(188, 82 - up, 170, 78 - up, tilt);
    q('rods').setAttribute('d', `M${f1(lr[0])},${f1(lr[1])}V142H116M${f1(rr[0])},${f1(rr[1])}V140`);
    const ca = -14 - 14 * coll;                                  // collective lever angle
    const [cx2, cy2] = rot(96, 146 - 30, 96, 146, ca);
    q('coll').setAttribute('d', `M96,146L${f1(cx2)},${f1(cy2)}`);
    const [sx2, sy2] = rot(118, 116, 118, 146, -10 * cyc);
    q('cyc').setAttribute('d', `M118,146L${f1(sx2)},${f1(sy2)}M${f1(sx2 - 3)},${f1(sy2)}h6`);
    // blades: foreshortened ellipse, disc tilts forward with cyclic, cones up with collective
    const dt = -5 * cyc;
    let bd = '';
    [0, Math.PI].forEach(o => {
      const a = psi + o, x = HH[0] + HRAD * Math.cos(a), y = HH[1] + 11 * Math.sin(a) - 4 * coll * Math.abs(Math.cos(a));
      const [rx, ry] = rot(x, y, HH[0], HH[1], dt);
      bd += `M${HH[0]},${HH[1]}L${f1(rx)},${f1(ry)}`;
    });
    q('blades').setAttribute('d', bd);
    q('disc').setAttribute('transform', `rotate(${f1(dt)} ${HH[0]} ${HH[1]})`);
    const ll = 14 + 14 * coll, [lx, ly] = rot(HH[0], HH[1] - 8 - ll, HH[0], HH[1], dt * 2);
    const [l0x, l0y] = rot(HH[0], HH[1] - 8, HH[0], HH[1], dt * 2);
    const hx = (lx - l0x) / ll, hy = (ly - l0y) / ll;
    q('lift').setAttribute('d', `M${f1(l0x)},${f1(l0y)}L${f1(lx)},${f1(ly)}M${f1(lx - hx * 6 - hy * 4)},${f1(ly - hy * 6 + hx * 4)}L${f1(lx)},${f1(ly)}L${f1(lx - hx * 6 + hy * 4)},${f1(ly - hy * 6 - hx * 4)}`);
    // blade angle gauge: rises with collective, swings once per turn with cyclic
    const pitch = 3 + 9 * coll + 6 * cyc * Math.sin(psi);
    const foil = [[-14, 0], [-12, -2.2], [-6, -3.2], [4, -2.4], [14, 0], [4, .8], [-6, 1], [-12, .8]];
    q('foil').setAttribute('d', 'M' + foil.map(([x, y]) => rot(60 + x, 30 + y, 60, 30, -pitch).map(f1).join(',')).join('L') + 'Z');
    // tail rotor spins fast, in side view we see its whole disc
    const ta = t == null ? .4 : t * 23;
    const [t1x, t1y] = rot(326 + 18, 70, 326, 70, ta * 57.3), [t2x, t2y] = rot(326 - 18, 70, 326, 70, ta * 57.3);
    q('tr').setAttribute('d', `M${f1(t1x)},${f1(t1y)}L${f1(t2x)},${f1(t2y)}`);
    q('exh').setAttribute('d', wave([[264, 98], [286, 92]], 1.5, 7, t == null ? 0 : t * 10));
    q('exh').setAttribute('opacity', t == null ? .7 : f1(seg(t, 0, 1)));
    // top view: rotor turns counterclockwise, torque twists the body clockwise, tail rotor pushes back
    q('rarr').setAttribute('d', 'M318,178A34,34 0 0 0 266,178M270,172L266,178L273,180');
    const tq = t == null ? 1 : seg(t, 7.6, 8.2);
    q('tq').setAttribute('d', tq > .1 ? 'M266,212A26,26 0 0 1 270,186M264,190L270,186L273,192' : '');
    q('thr').setAttribute('d', tq > .1 ? `M342,190V${f1(190 - 18 * tq)}M338,${f1(194 - 18 * tq)}L342,${f1(190 - 18 * tq)}L346,${f1(194 - 18 * tq)}` : '');
    const [e1x, e1y] = rot(36, 50, HH[0], HH[1], dt);
    return { 1: TP(e1x, e1y), 2: TP(152, 75 - up), 3: TP(222, 108), 4: TP(158, 100), 5: TP(334, 52), 6: TP(88, 136) };
  }
});
}
