{
/* 8. Traction elevator */
const VS = [140, 42, 20], VD = [262, 84, 12];       // drive sheave, deflector sheave (cx, cy, r)
const VB = (() => {                                 // rope tangent angle between the two sheaves
  const dx = VD[0] - VS[0], dy = VD[1] - VS[1];
  return Math.atan2(dy, dx) + Math.asin(-(VD[2] - VS[2]) / Math.hypot(dx, dy));
})();
const VP1 = [VS[0] + VS[2] * Math.sin(VB), VS[1] - VS[2] * Math.cos(VB)];
const VP2 = [VD[0] + VD[2] * Math.sin(VB), VD[1] - VD[2] * Math.cos(VB)];
const vSpokes = (cx, cy, r, a, n) => { let d = ''; for (let i = 0; i < n; i++) { const g = a + i * TAU / n; d += `M${f1(cx + 3.5 * Math.cos(g))},${f1(cy + 3.5 * Math.sin(g))}L${f1(cx + r * Math.cos(g))},${f1(cy + r * Math.sin(g))}`; } return d; };
LESSONS.push({
  key: 'elevator', title: 'Elevator', cat: 'Getting Around', mins: 3, vb: [360, 280],
  summary: 'The car hangs from steel ropes that loop over a grooved wheel and down to a heavy counterweight. The motor just turns the wheel — the counterweight balances the car, so the motor only lifts the difference.',
  parts: [
    { n: 1, name: 'Car', at: [168, 200], num: [214, 214], desc: 'The cab you ride in, bolted into a steel frame. Rollers or shoes on the frame run along steel guide rails on both sides of the shaft.' },
    { n: 2, name: 'Counterweight', at: [288, 191], num: [322, 206], desc: 'A stack of steel or concrete blocks on the other end of the ropes. It weighs about as much as the car plus 40–50% of a full load.' },
    { n: 3, name: 'Steel ropes', at: [275, 132], num: [322, 128], desc: 'Several braided steel cables run side by side and share the load, so the car never hangs from just one.' },
    { n: 4, name: 'Drive sheave', at: [159, 50], num: [198, 66], desc: 'A wheel with grooves cut to fit the ropes. It doesn’t wind them up like a winch — friction in the grooves drags the ropes along as it turns.' },
    { n: 5, name: 'Motor, gears & brake', at: [84, 62], num: [84, 24], desc: 'An electric motor turns the sheave, often through a gearbox. A spring-loaded brake clamps the shaft whenever the power is off, so the car holds still.' },
    { n: 6, name: 'Governor & safety', at: [40, 64], num: [28, 26], desc: 'A small wheel driven by a loop of rope tied to the car. If the car goes too fast, weights inside fling out and lock it, and the rope yanks steel wedges against the rails.' },
  ],
  steps: [
    { text: 'The motor turns the grooved sheave. Friction in the grooves grips the steel ropes and drags them along.', parts: [5, 4, 3], t: [0, 2.4] },
    { text: 'One end goes up, the other comes down: the car rises as the counterweight sinks. They nearly balance, so the motor only lifts the difference.', parts: [1, 2], t: [2.4, 5.2] },
    { text: 'At the floor the motor stops and the spring brake clamps the shaft, holding the car level with the landing.', parts: [5], t: [5.2, 6.8] },
    { text: 'If the car ever drops too fast, the governor locks, its rope yanks wedges into the rails, and the car stops dead.', parts: [6], t: [6.8, 9] },
  ],
  dur: 9,
  why: 'Why a counterweight? It weighs about as much as the car half full, so the motor never lifts the whole car — just the imbalance. That saves most of the energy and lets a fairly small motor run a tall building.',
  fact: 'Elisha Otis didn’t invent the elevator — he made it safe. In 1854 at New York’s Crystal Palace he rode a platform up and had its rope cut; his safety catch stopped it. His first passenger elevator, in a Broadway store in 1857, crept along at 0.67 feet per second.',
  quiz: {
    q: 'Roughly how heavy is the counterweight?',
    opts: ['Exactly as heavy as the empty car', 'Twice as heavy as a full car', 'About the car plus 40–50% of a full load'],
    a: 2,
    why: 'Balanced at about a half-full car, the counterweight keeps the imbalance small whether the car is empty or packed — so the motor never has to lift much more than half a load.'
  },
  sources: [
    ['Elevator — Wikipedia', 'https://en.wikipedia.org/wiki/Elevator'],
    ['How elevators work — Explain that Stuff', 'https://www.explainthatstuff.com/how-elevators-work.html'],
    ['How Elevators Work: Safety Systems — HowStuffWorks', 'https://science.howstuffworks.com/transport/engines-equipment/elevator5.htm'],
    ['Elisha Otis — Britannica', 'https://www.britannica.com/topic/Elisha-Otis'],
    ['E. V. Haughwout Building — Wikipedia', 'https://en.wikipedia.org/wiki/E._V._Haughwout_Building'],
  ],
  art(p) {
    let fins = '';
    for (let x = 70; x <= 98; x += 4) fins += `M${x},66V92`;
    return `
    <g class="shell">
      <rect x="4" y="0" width="12" height="280" fill="url(#${p}hatch)"/><path d="M16,0V270" class="ink"/>
      <rect x="344" y="0" width="12" height="280" fill="url(#${p}hatch)"/><path d="M344,0V270" class="ink"/>
      <path d="M16,100H344V110H16Z M26,99H54V111H26Z M114,99H126V111H114Z M268,99H280V111H268Z" fill-rule="evenodd" fill="url(#${p}hatch)" class="ink"/>
      <rect x="4" y="270" width="352" height="10" fill="url(#${p}hatch)"/><path d="M16,270H344" class="ink"/>
      <path d="M64,110V270M67,110V270M173,110V270M176,110V270" class="ink thin"/>
      <path d="M256,110V270M259,110V270M289,110V270M292,110V270" class="ink thin"/>
      <path d="M248,100V88H276" class="ink thin"/><path d="M262,84L252,92" class="ink thin"/>
      <text x="336" y="92" class="hand" text-anchor="end">machine room</text></g>
    <g data-part="3"><path id="${p}rope" class="ink" style="stroke-width:2"/><path id="${p}ropeC" class="ink" style="stroke-width:2"/><path id="${p}ropeW" class="ink" style="stroke-width:2"/>
      <circle cx="${VD[0]}" cy="${VD[1]}" r="${VD[2]}" class="ink fw"/><path id="${p}dsp" class="ink thin"/></g>
    <g data-part="5"><path d="M60,100V96H108V100M120,100V96H160V100" class="ink"/>
      <rect x="64" y="62" width="40" height="34" rx="3" class="ink fm"/><path d="${fins}" class="ink thin"/>
      <path d="M104,79H124" class="ink" style="stroke-width:2.4"/>
      <circle cx="113" cy="79" r="6" class="ink fw"/>
      <rect id="${p}shoeL" x="103" y="73" width="3" height="12" class="ink" fill="#9aa0a6"/><rect id="${p}shoeR" x="120" y="73" width="3" height="12" class="ink" fill="#9aa0a6"/>
      <path id="${p}bspring" d="M104,70H122" class="ink thin"/>
      <rect x="124" y="56" width="32" height="40" rx="2" class="ink fm"/></g>
    <g data-part="4"><circle cx="${VS[0]}" cy="${VS[1]}" r="${VS[2]}" class="ink fw"/><circle cx="${VS[0]}" cy="${VS[1]}" r="${VS[2] - 3}" class="ink thin"/>
      <path id="${p}ssp" class="ink thin"/><circle cx="${VS[0]}" cy="${VS[1]}" r="3.5" class="ink fm"/></g>
    <g data-part="6"><path d="M34,100L40,74L46,100" class="ink thin"/>
      <circle cx="40" cy="74" r="10" class="ink fw"/><path id="${p}fly" class="ink" fill="#9aa0a6"/>
      <path id="${p}pawl" d="M51,66L56,61" class="ink"/>
      <path d="M30,74V252M50,74V252" class="ink thin"/>
      <circle cx="40" cy="252" r="10" class="ink fw"/><circle cx="40" cy="252" r="2" class="ink fm"/><rect x="35" y="262" width="10" height="7" class="ink fm"/>
      <path id="${p}glink" class="ink thin"/>
      <path id="${p}safe" class="ink" fill="#9aa0a6"/><path id="${p}wedge" class="ink"/></g>
    <g data-part="1"><path id="${p}cab" fill="url(#${p}hatch)" fill-rule="evenodd" class="ink"/>
      <rect id="${p}cabin" x="75" width="90" height="56" fill="url(#${p}grid)"/>
      <path id="${p}cabd" class="ink thin"/><path id="${p}frame" class="ink fm"/><path id="${p}rail" class="ink thin"/></g>
    <g data-part="2"><path id="${p}cw" class="ink fm"/><path id="${p}cwl" class="ink thin"/></g>
    <path id="${p}upC" class="energy"/><path id="${p}upW" class="energy"/>`;
  },
  anim(svg, p, t) {
    const q = id => svg.querySelector('#' + p + id);
    let c = 160, brake = 1, trip = 0, fly = 0;
    if (t != null) {
      c = 196 - 62 * seg(t, .5, 5);
      const fall = Math.max(0, Math.min(1, (t - 6.8) / 1.0));
      c += 26 * fall * fall;
      brake = 1 - seg(t, .2, .5) + seg(t, 5, 5.5) - seg(t, 6.6, 6.8);
      fly = Math.min(1, fall * 1.3);
      trip = t > 7.8 ? 1 : 0;
    }
    const w = 324 - c, travel = 196 - c, cb = c + 64;
    // ropes
    q('rope').setAttribute('d', `M${VS[0] - VS[2]},${VS[1]}A${VS[2]},${VS[2]} 0 0 1 ${f1(VP1[0])},${f1(VP1[1])}L${f1(VP2[0])},${f1(VP2[1])}A${VD[2]},${VD[2]} 0 0 1 ${VD[0] + VD[2]},${VD[1]}`);
    q('ropeC').setAttribute('d', `M120,${VS[1]}V${f1(c - 8)}`);
    q('ropeW').setAttribute('d', `M274,${VD[1]}V${f1(w - 4)}`);
    q('ssp').setAttribute('d', vSpokes(VS[0], VS[1], VS[2] - 3, travel / VS[2], 5));
    q('dsp').setAttribute('d', vSpokes(VD[0], VD[1], VD[2] - 1, travel / VD[2], 4));
    // car: frame (crosshead + stiles) and cut-open cab
    q('frame').setAttribute('d', `M70,${f1(c - 8)}H170V${f1(c - 3)}H70Z`);
    q('rail').setAttribute('d', `M116,${f1(c - 8)}V${f1(c - 12)}H124V${f1(c - 8)}`);
    q('cab').setAttribute('d', `M72,${f1(c - 3)}H168V${f1(cb)}H72Z M75,${f1(c)}V${f1(cb - 5)}H165V${f1(c)}Z`);
    q('cabd').setAttribute('d', `M100,${f1(c + 8)}H140V${f1(cb - 5)}M100,${f1(c + 8)}V${f1(cb - 5)}M120,${f1(c + 8)}V${f1(cb - 5)}M80,${f1(c + 34)}H95M145,${f1(c + 34)}H160M116,${f1(c + 30)}h2M122,${f1(c + 30)}h2M114,${f1(c + 3)}h12v3h-12Z`);
    q('cabin').setAttribute('y', f1(c)); q('cabin').setAttribute('height', 59);
    // counterweight: frame with stacked blocks
    q('cw').setAttribute('d', `M262,${f1(w)}H286V${f1(w + 54)}H262Z M270,${f1(w - 4)}H278V${f1(w)}H270Z`);
    let bl = ''; for (let i = 1; i < 6; i++) bl += `M262,${f1(w + i * 9)}H286`;
    q('cwl').setAttribute('d', bl);
    // brake shoes
    const o = (1 - brake) * 4;
    q('shoeL').setAttribute('x', f1(103 - o)); q('shoeR').setAttribute('x', f1(120 + o));
    // governor: flyweights swing out with speed, pawl catches at overspeed
    const ga = travel / 10;
    let fd = '';
    [0, Math.PI].forEach(k => {
      const g = ga + k, s = 2 + fly * 4;
      const ax = 40 + 2 * Math.cos(g), ay = 74 + 2 * Math.sin(g), bx = 40 + (3 + s) * Math.cos(g + .5), by = 74 + (3 + s) * Math.sin(g + .5);
      fd += `M${f1(ax)},${f1(ay)}L${f1(bx)},${f1(by)}L${f1(bx + 3 * Math.cos(g + 2))},${f1(by + 3 * Math.sin(g + 2))}Z`;
    });
    q('fly').setAttribute('d', fd);
    q('pawl').setAttribute('d', trip ? 'M49,68L53,64' : 'M52,66L57,61');
    q('pawl').setAttribute('class', trip ? 'energy' : 'ink');
    // link from governor rope to the safety gear, wedges jam on trip
    q('glink').setAttribute('d', `M50,${f1(c + 2)}H69V${f1(cb - 10)}M69,${f1(cb + 3)}H178`);
    const up = trip * 5;
    q('safe').setAttribute('d', `M60,${f1(cb - 10)}h10v14h-10Z M170,${f1(cb - 10)}h10v14h-10Z`);
    q('wedge').setAttribute('d', `M62,${f1(cb + 2 - up)}l2,-9v9Z M178,${f1(cb + 2 - up)}l-2,-9v9Z`);
    q('wedge').setAttribute('class', trip ? 'energy' : 'ink thin');
    // motion arrows
    const moving = t == null || (t > .5 && t < 5);
    const fallMv = t != null && t > 6.8 && t < 7.8;
    q('upC').setAttribute('d', moving ? `M190,${f1(c + 46)}V${f1(c + 18)}M186,${f1(c + 23)}L190,${f1(c + 18)}L194,${f1(c + 23)}` : fallMv ? `M190,${f1(c + 18)}V${f1(c + 46)}M186,${f1(c + 41)}L190,${f1(c + 46)}L194,${f1(c + 41)}` : '');
    q('upW').setAttribute('d', moving ? `M302,${f1(w + 8)}V${f1(w + 36)}M298,${f1(w + 31)}L302,${f1(w + 36)}L306,${f1(w + 31)}` : '');
    return { 1: [168, f1(c + 40)], 2: [288, f1(w + 27)] };
  }
});
}
