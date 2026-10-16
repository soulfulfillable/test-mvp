{
/* 26. Fire extinguisher (stored-pressure ABC dry chemical) */
const HOSE = 'M154,52C196,50 214,96 232,140';
const NZ = [236, 150];                          // nozzle pivot
const BODY = 'M120,66V78Q96,84 96,104V242Q96,252 106,252H154Q164,252 164,242V104Q164,84 140,78V66Z';
LESSONS.push({
  key: 'fire-extinguisher', title: 'Fire Extinguisher', cat: 'Home', mins: 3, vb: [360, 270],
  summary: 'The tank holds powder plus nitrogen gas squeezed in under pressure. Squeeze the lever and the valve opens: the gas shoves the powder up a tube and out the nozzle onto the fire.',
  parts: [
    { n: 1, name: 'Safety pin', at: [112, 33], num: [88, 12], desc: 'Slides through the handle and lever so they can’t be squeezed by accident. A plastic tamper seal shows if it’s been pulled.' },
    { n: 2, name: 'Squeeze lever', at: [72, 22], num: [30, 24], desc: 'Squeezing it toward the carry handle pushes the valve stem down and opens the valve. Let go, and a spring shuts it again.' },
    { n: 3, name: 'Pressure gauge', at: [98, 52], num: [30, 64], desc: 'Shows whether the gas inside is still at working pressure. If the needle is out of the charged range, have it serviced or replaced.' },
    { n: 4, name: 'Siphon tube', at: [127, 200], num: [40, 206], desc: 'Runs from the valve almost to the bottom of the tank, so it draws from the powder instead of the gas above it.' },
    { n: 5, name: 'Powder & nitrogen', at: [102, 150], num: [40, 146], desc: 'Most home units hold an ABC dry chemical, mainly monoammonium phosphate. Pressurized nitrogen fills the space above it.' },
    { n: 6, name: 'Hose & nozzle', at: [196, 72], num: [212, 36], desc: 'Carries the powder away from your hands so you can stand back and aim at the base of the fire.' },
  ],
  steps: [
    { text: 'Pull the pin. It locks the lever so the extinguisher can’t go off by accident.', parts: [1], t: [0, 1.6] },
    { text: 'Aim at the base of the fire and squeeze: the lever pushes the valve stem down and opens the valve.', parts: [2], t: [1.6, 3] },
    { text: 'The pressurized nitrogen presses on the powder and drives it up the siphon tube, through the valve and out the hose.', parts: [5, 4, 6], t: [3, 6.4] },
    { text: 'Sweep side to side. The powder blankets the fuel and breaks up the flame’s chemical reaction until the fire goes out.', parts: [6], t: [6.4, 9] },
  ],
  dur: 9,
  why: 'Why a siphon tube? The gas sits on top and the powder settles at the bottom. The tube reaches down into the powder, so when the valve opens, the gas pressure forces powder — not just gas — out of the nozzle. That’s also why you hold it upright.',
  fact: 'The powder in most ABC extinguishers, monoammonium phosphate, is also a common farm fertilizer. On burning wood or paper it melts at roughly 350°F into a crust that seals the fuel off from the air.',
  quiz: {
    q: 'Where should you aim a fire extinguisher?',
    opts: ['At the tops of the flames', 'Into the smoke', 'At the base of the fire'],
    a: 2,
    why: 'The flames are burning gases rising off the fuel. Hitting the base coats the fuel itself. Remember PASS: Pull, Aim, Squeeze, Sweep.'
  },
  sources: [
    ['Fire extinguisher — Wikipedia', 'https://en.wikipedia.org/wiki/Fire_extinguisher'],
    ['ABC dry chemical — Wikipedia', 'https://en.wikipedia.org/wiki/ABC_dry_chemical'],
    ['The PASS Method for Fire Extinguishers — Boston University EHS', 'https://www.bu.edu/ehs/ehs-topics/fire-safety/fire-extinguisher/the-pass-method-for-fire-extinguishers'],
    ['Fire Extinguishers — UW–Madison Environment, Health & Safety', 'https://ehs.wisc.edu/fire-life-safety/fire-extinguishers/'],
  ],
  art(p) {
    let dots = '';
    for (let i = 0; i < 44; i++) dots += `<circle id="${p}s${i}" r="1.6" fill="#8a8f96"/>`;
    let up = '';
    for (let i = 0; i < 6; i++) up += `<circle id="${p}u${i}" r="1.4" fill="#5a5f66"/>`;
    return `
    <defs><pattern id="${p}pw" width="6" height="6" patternUnits="userSpaceOnUse"><rect width="6" height="6" fill="#eceef1"/><circle cx="1.5" cy="1.5" r=".8" fill="#9aa0a8"/><circle cx="4.5" cy="4.5" r=".8" fill="#9aa0a8"/></pattern>
      <clipPath id="${p}in"><path d="M124,70V82Q100,88 100,106V242Q100,248 106,248H154Q160,248 160,242V106Q160,88 136,82V70Z"/></clipPath></defs>
    <g class="shell">
      <path d="M0,256H360" class="ink"/><rect x="0" y="256.7" width="360" height="14" fill="url(#${p}hatch)"/>
      <path d="M90,252H170V256H90Z" class="ink fw"/>
      <path d="M126,40H70Q66,40 66,44V46H126" class="ink fm"/></g>
    <g data-part="5"><path d="${BODY}" fill="url(#${p}grid)"/>
      <g clip-path="url(#${p}in)"><rect id="${p}pow" x="96" y="124" width="70" height="130" fill="url(#${p}pw)"/><path id="${p}pl" class="ink thin"/></g>
      <path d="${BODY} M124,70V82Q100,88 100,106V242Q100,248 106,248H154Q160,248 160,242V106Q160,88 136,82V70Z" fill-rule="evenodd" fill="url(#${p}hatch)" class="ink"/>
      <text x="113" y="102" class="hand">N</text><text x="121" y="105" class="hand" style="font-size:7px">2</text>
      <path id="${p}push" d="M108,108V118M105,114L108,118L111,114M152,108V118M149,114L152,118L155,114" class="energy"/></g>
    <g data-part="4"><rect x="127" y="70" width="6" height="172" fill="url(#${p}grid)" class="ink thin"/>${up}</g>
    <g data-part="3"><path d="M110,52H116" class="ink"/><circle cx="102" cy="52" r="9" class="ink fw"/>
      <path d="M95.6,58.4A9,9 0 0 1 108.4,45.6" class="ink thin" stroke-dasharray="1 2"/>
      <path id="${p}needle" d="M102,52L108,46" class="ink" style="stroke:#D63A2A"/><circle cx="102" cy="52" r="1.3" fill="#24272c"/></g>
    <g class="valve"><rect x="116" y="40" width="28" height="30" rx="2" class="ink fm"/><rect x="144" y="48" width="10" height="8" class="ink fm"/>
      <rect id="${p}stem" x="127" y="30" width="6" height="12" class="ink fw"/></g>
    <g data-part="2"><path id="${p}lever" d="M144,34L140,30L66,18Q62,18 62,22L64,26L132,32" class="ink fm"/><circle cx="142" cy="33" r="2" class="ink fw"/></g>
    <g data-part="1"><g id="${p}pin"><path d="M112,30V37" class="ink" style="stroke-width:2.6"/><circle cx="104" cy="31" r="6" class="ink thin"/><path d="M110,32L112,33" class="ink thin"/></g></g>
    <g data-part="6"><path d="${HOSE}" fill="none" stroke="#24272c" stroke-width="7"/><path d="${HOSE}" fill="none" stroke="#fff" stroke-width="4.4"/>
      <g id="${p}nz"><path d="M229,136L237,132L252,162L246,166Z" class="ink fm"/></g></g>
    <g class="fire"><path d="M276,252H348L344,246H280Z" class="ink fm"/>
      <path id="${p}flame" class="energy"/>
      <g id="${p}tri" transform="translate(-16,0)"><path id="${p}triL" d="M262,96L300,30" class="ink thin"/><path id="${p}triB" d="M262,96H338" class="ink thin"/><path id="${p}triR" d="M300,30L338,96" class="ink thin"/>
        <text x="270" y="58" class="hand" text-anchor="end">heat</text><text x="300" y="110" class="hand" text-anchor="middle">fuel</text><text x="330" y="58" class="hand">oxygen</text></g></g>
    <g id="${p}spray">${dots}</g>`;
  },
  anim(svg, p, t) {
    const q = id => svg.querySelector('#' + p + id);
    const run = t == null;
    const pull = run ? 0 : seg(t, .2, 1.3);
    const sq = run ? 0 : seg(t, 1.8, 2.6) * (1 - seg(t, 8.5, 8.9));
    const go = run ? 0 : seg(t, 3, 3.6) * (1 - seg(t, 8.5, 8.9));
    q('pin').setAttribute('transform', `translate(${f1(-30 * pull)},${f1(-14 * pull + 30 * seg(t || 0, 1.3, 1.7))}) rotate(${f1(-40 * pull)} 104 31)`);
    q('pin').setAttribute('opacity', f1(1 - seg(t || 0, 1.3, 1.6)));
    q('lever').setAttribute('transform', `rotate(${f1(-9 * sq)} 142 33)`);
    q('stem').setAttribute('y', f1(30 + 5 * sq));
    // powder level + gauge drop as it empties
    const used = run ? 0 : Math.max(0, Math.min(1, (t - 3.3) / 5.2));
    const lvl = 124 + 50 * used;
    q('pow').setAttribute('y', f1(lvl)); q('pl').setAttribute('d', `M96,${f1(lvl)}H164`);
    const ga = -45 + 70 * used;
    const [nx, ny] = rot(110, 52, 102, 52, ga);
    q('needle').setAttribute('d', `M102,52L${f1(nx)},${f1(ny)}`);
    q('push').setAttribute('opacity', f1(run ? 1 : go));
    q('push').setAttribute('transform', `translate(0,${f1(lvl - 124)})`);
    // powder rising in the siphon tube
    for (let i = 0; i < 6; i++) {
      const y = 240 - ((((run ? 0 : t) * 160 + i * 28) % 170));
      q('u' + i).setAttribute('cx', 130); q('u' + i).setAttribute('cy', f1(y));
      q('u' + i).setAttribute('opacity', f1(go));
    }
    // nozzle sweeps, spray cone from tip to base of fire
    const sw = run ? 0 : 8 * Math.sin((t - 6.4) * 4) * seg(t, 6.4, 6.9);
    q('nz').setAttribute('transform', `rotate(${f1(sw)} ${NZ[0]} ${NZ[1]})`);
    const [tx, ty] = rot(249, 164, NZ[0], NZ[1], sw);
    for (let i = 0; i < 44; i++) {
      const s = (((run ? .5 : t) * 1.4 + i / 44) % 1), spread = (i * 7.3 % 13 - 6) * s * 3;
      const ex = 306 + sw * 4, ey = 240;
      const x = tx + (ex - tx) * s + spread * .6, y = ty + (ey - ty) * s + spread * .4 - 10 * Math.sin(Math.PI * s);
      const c = q('s' + i); c.setAttribute('cx', f1(x)); c.setAttribute('cy', f1(y));
      c.setAttribute('opacity', f1(go * (s > .05 ? 1 : 0)));
    }
    // flames shrink once the powder lands
    const fl = run ? 1 : 1 - seg(t, 5, 8.6);
    const fk = run ? 0 : t * 9;
    let d = '';
    if (fl > .03) {
      const h = 52 * fl, base = 246;
      [[288, .7], [302, 1], [318, .85], [334, .6]].forEach(([x, k], i) => {
        const hh = h * k * (1 + .08 * Math.sin(fk + i * 2)), w = 9;
        d += `M${x - w},${base}Q${x - w},${f1(base - hh * .5)} ${f1(x + 2 * Math.sin(fk + i))},${f1(base - hh)}Q${x + w},${f1(base - hh * .5)} ${x + w},${base}`;
      });
    }
    q('flame').setAttribute('d', d);
    // fire triangle: oxygen leg breaks
    const br = run ? 0 : seg(t, 6, 7);
    q('triR').setAttribute('stroke-dasharray', br > 0 ? `${f1(76 - 40 * br)} ${f1(40 * br)} 200` : 'none');
    q('triR').setAttribute('stroke-dashoffset', f1(-20 * br));
    const [lx, ly] = rot(72, 22, 142, 33, -9 * sq);
    return { 2: [f1(lx), f1(ly)] };
  }
});
}
