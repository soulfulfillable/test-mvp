{
/* 9. Electric toothbrush (sonic, magnetic drive) */
const RC = [262, 122];                         // rotor center in the inset
LESSONS.push({
  key: 'electric-toothbrush', title: 'Electric Toothbrush', cat: 'Bathroom', mins: 3, vb: [360, 260],
  summary: 'A sonic brush has no spinning motor: a coil flips its magnetism hundreds of times a second and rocks a magnet back and forth. The battery recharges through the plastic, by magnetism alone.',
  parts: [
    { n: 1, name: 'Brush head', at: [112, 22], num: [146, 16], desc: 'Slides onto the metal shaft. It doesn’t spin — it sweeps a few degrees side to side, very fast.' },
    { n: 2, name: 'Drive shaft', at: [92, 62], num: [146, 52], desc: 'A metal rod that carries the drive’s rocking up through the neck to the brush head.' },
    { n: 3, name: 'Magnetic drive', at: [108, 128], num: [146, 134], desc: 'A coil and a permanent magnet. The coil’s current keeps reversing, so the magnet is pushed one way, then the other — rocking only a few degrees each time.' },
    { n: 4, name: 'Rechargeable battery', at: [104, 174], num: [146, 164], desc: 'Stores the charge that powers the drive between charges. A small circuit board switches the coil’s current.' },
    { n: 5, name: 'Pickup coil', at: [108, 210], num: [146, 204], desc: 'A coil sealed inside the bottom of the handle. The base’s changing magnetic field induces a current in it, which charges the battery.' },
    { n: 6, name: 'Charger coil', at: [112, 240], num: [146, 242], desc: 'In the base, wound around an iron post that fits into the handle. Wall current through it makes a magnetic field that keeps flipping.' },
  ],
  steps: [
    { text: 'On the base, current in the charger coil makes a flipping magnetic field. It passes through the sealed plastic and induces a current in the pickup coil, charging the battery.', parts: [6, 5, 4], t: [0, 2.6] },
    { text: 'Switch it on: the battery sends current through the drive coil, reversing direction hundreds of times a second.', parts: [4, 3], t: [2.6, 4.2] },
    { text: 'Each reversal swaps the coil’s poles, so the magnet is pulled back and forth a few degrees — up to 31,000 strokes a minute on some models.', parts: [3], t: [4.2, 6.2] },
    { text: 'The shaft carries the rocking up to the head, and the bristles sweep side to side in a fast buzz.', parts: [2, 1], t: [6.2, 8] },
  ],
  dur: 8,
  why: 'Why no metal contacts on the charger? Bare contacts in a wet bathroom would corrode or short out. Charging by magnetic induction sends power straight through the plastic, so the handle can be sealed shut against water.',
  fact: 'The first commercially notable electric toothbrush, the Broxodent, was invented in Switzerland in 1954. It plugged straight into the wall and was made for people with limited motor skills and for patients wearing braces.',
  quiz: {
    q: 'How does the battery charge when the base has no metal contacts?',
    opts: ['Through tiny pins hidden in the bottom of the handle', 'Heat from the base is turned into electricity', 'A changing magnetic field induces a current in a coil inside the handle'],
    a: 2,
    why: 'The base and handle form a two-piece transformer. The base coil’s flipping field passes through the plastic and induces a current in the handle’s coil.'
  },
  sources: [
    ['Electric toothbrush — Wikipedia', 'https://en.wikipedia.org/wiki/Electric_toothbrush'],
    ['Sonicare — Wikipedia', 'https://en.wikipedia.org/wiki/Sonicare'],
    ['How do wireless chargers work? — Explain that Stuff', 'https://www.explainthatstuff.com/inductionchargers.html'],
    ['Sonicare toothbrush teardown — Ken Shirriff’s blog', 'https://www.righto.com/2016/09/sonicare-toothbrush-teardown.html'],
  ],
  art(p) {
    let wind = '';
    for (let x = 75; x <= 105; x += 3) wind += `M${x},101V135`;
    let pc = '', bc = '';
    for (let y = 204; y <= 216; y += 5) pc += `<circle cx="76" cy="${y}" r="2" class="ink thin fw"/><circle cx="81" cy="${y}" r="2" class="ink thin fw"/><circle cx="99" cy="${y}" r="2" class="ink thin fw"/><circle cx="104" cy="${y}" r="2" class="ink thin fw"/>`;
    for (let y = 232; y <= 244; y += 5) bc += `<circle cx="73" cy="${y}" r="2" class="ink thin fm"/><circle cx="78" cy="${y}" r="2" class="ink thin fm"/><circle cx="102" cy="${y}" r="2" class="ink thin fm"/><circle cx="107" cy="${y}" r="2" class="ink thin fm"/>`;
    let tw = '';
    for (let x = 240; x <= 284; x += 4) tw += `M${x},59V91`;
    return `
    <g class="shell">
      <path d="M90,56Q72,62 68,76V214Q68,222 76,222H104Q112,222 112,214V76Q108,62 90,56Z M90,62Q76,67 72,79V216H108V79Q104,67 90,62Z" fill-rule="evenodd" fill="url(#${p}hatch)" class="ink"/>
      <path d="M72,216H82V200H98V216H108V218H72Z" fill="url(#${p}hatch)" class="ink thin"/>
      <path d="M50,252V232Q50,222 62,222H118Q130,222 130,232V252Z M56,252V234Q56,228 62,228H84V252Z M96,228H118Q124,228 124,234V252H96Z" fill-rule="evenodd" fill="url(#${p}hatch)" class="ink"/>
      <path d="M50,246H8" class="ink" style="stroke-width:2.4"/>
      <path d="M0,252H360" class="ink"/><rect x="0" y="252.7" width="360" height="8" fill="url(#${p}hatch)"/>
      <rect x="80" y="76" width="20" height="8" rx="2" class="ink fw"/>
      <text x="262" y="230" class="hand" text-anchor="middle">drive, seen from above</text>
      <path d="M106,110L177,104" class="ink thin" stroke-dasharray="2 2"/></g>
    <g data-part="6"><rect x="84" y="200" width="12" height="52" fill="#c9ccd1" class="ink"/>${bc}</g>
    <g data-part="5">${pc}<path d="M78,201V194H86M102,201V194H94" class="ink thin"/></g>
    <g data-part="4"><rect x="77" y="146" width="26" height="44" rx="4" class="ink fw"/><rect x="85" y="142" width="10" height="4" class="ink fw"/>
      <rect id="${p}chg" x="79" y="170" width="22" height="18" rx="2" fill="#D63A2A" opacity=".3"/>
      <rect x="76" y="192" width="28" height="3" class="ink thin fm"/></g>
    <g data-part="3"><rect x="74" y="98" width="32" height="40" rx="2" class="ink fm"/><path d="${wind}" class="ink thin"/>
      <rect x="84" y="108" width="12" height="20" class="ink" fill="#9aa0a8"/></g>
    <g data-part="2"><rect x="88" y="22" width="4" height="78" class="ink fm"/></g>
    <g data-part="1"><g id="${p}head">
      <path d="M86,40V10Q86,4 92,4Q98,4 98,10V40Z" class="ink fw"/>
      <path d="M98,8H118M98,13H118M98,18H118M98,23H118M98,28H118M98,33H118" class="ink thin"/>
      <path d="M84,58V42Q84,38 88,38H96Q100,38 100,42V58" class="ink fw"/></g>
      <path id="${p}ghost" d="M98,8H118M98,18H118M98,28H118" class="ink thin" opacity="0"/></g>
    <g id="${p}field"><path id="${p}f1" d="M90,248V204C90,186 66,188 64,206C62,226 70,248 90,248" class="energy" stroke-dasharray="4 3"/>
      <path id="${p}f2" d="M90,248V204C90,186 114,188 116,206C118,226 110,248 90,248" class="energy" stroke-dasharray="4 3"/></g>
    <circle cx="262" cy="122" r="86" class="fw"/>
    <g data-part="3">
      <path d="M208,152V74Q208,62 220,62H304Q316,62 316,74V152H296V88H228V152Z" fill="url(#${p}hatch)" class="ink"/>
      <rect x="236" y="56" width="52" height="38" rx="3" class="ink fm"/><path d="${tw}" class="ink thin"/>
      <text id="${p}pL" x="218" y="170" class="hand" text-anchor="middle" style="fill:#D63A2A;font-size:13px">N</text>
      <text id="${p}pR" x="306" y="170" class="hand" text-anchor="middle" style="fill:#D63A2A;font-size:13px">S</text>
      <g id="${p}rotor"><rect x="234" y="113" width="56" height="18" rx="2" class="ink fm"/><path d="M262,113V131" class="ink thin"/>
        <text x="246" y="126" class="hand" text-anchor="middle">S</text><text x="278" y="126" class="hand" text-anchor="middle">N</text></g>
      <circle cx="262" cy="122" r="5" class="ink fw"/>
      <path id="${p}rock" class="energy"/>
    </g>
    <circle cx="262" cy="122" r="86" class="ink"/>`;
  },
  anim(svg, p, t) {
    const q = id => svg.querySelector('#' + p + id);
    const run = t == null;
    const chgOn = run ? 1 : 1 - seg(t, 2.4, 2.8);
    const drive = run ? 0 : seg(t, 2.6, 3.2);
    const ph = run ? 0 : t * 5;                              // visible stand-in for ~260 Hz
    q('field').setAttribute('opacity', f1(chgOn));
    ['f1', 'f2'].forEach(id => q(id).setAttribute('stroke-dashoffset', f1(run ? 0 : -t * 22)));
    const lvl = run ? .7 : .3 + .7 * seg(t, 0, 2.4);
    q('chg').setAttribute('y', f1(188 - 40 * lvl)); q('chg').setAttribute('height', f1(40 * lvl));
    // drive coil current flips; rotor rocks a few degrees
    const s = Math.sin(TAU * ph);
    const sign = run ? 1 : (s >= 0 ? 1 : -1);
    q('pL').textContent = sign > 0 ? 'N' : 'S'; q('pR').textContent = sign > 0 ? 'S' : 'N';
    const show = run ? 1 : drive;
    q('pL').setAttribute('opacity', f1(show)); q('pR').setAttribute('opacity', f1(show));
    const ang = run ? -8 : 10 * s * drive;
    q('rotor').setAttribute('transform', `rotate(${f1(ang)} ${RC[0]} ${RC[1]})`);
    q('rock').setAttribute('d', 'M242,146A26,26 0 0 0 282,146M276,144L282,146L283,140M248,144L242,146L241,140');
    q('rock').setAttribute('opacity', f1(run ? 1 : drive));
    // head buzzes side to side (blurred)
    const hb = run ? 0 : seg(t, 5.8, 6.4);
    const dx = 2.2 * s * hb;
    q('head').setAttribute('transform', `translate(${f1(dx)},0)`);
    q('ghost').setAttribute('opacity', f1(hb * .5));
    q('ghost').setAttribute('transform', `translate(${f1(-dx * 1.5)},0)`);
  }
});
}
