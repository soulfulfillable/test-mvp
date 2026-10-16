{
/* 16. Electric bike (rear hub motor) */
const EB_C = [282, 110];           // zoom circle center
const EB_R = [186, 200];           // rear axle
const EB_F = [56, 200];            // front axle
const EB_BB = [128, 204];          // bottom bracket
const ebCirc = (cx, cy, r) => `M${cx - r},${cy}a${r},${r} 0 1 0 ${2 * r},0a${r},${r} 0 1 0 ${-2 * r},0`;
const ebSpokes = (cx, cy, r0, r1, n, a0) => {
  let d = '';
  for (let i = 0; i < n; i++) {
    const a = (a0 + i * 360 / n) * Math.PI / 180;
    d += `M${f1(cx + r0 * Math.cos(a))},${f1(cy + r0 * Math.sin(a))}L${f1(cx + r1 * Math.cos(a))},${f1(cy + r1 * Math.sin(a))}`;
  }
  return d;
};
// rotor angle (deg) — motor starts at 4.5 s and speeds up
const ebAng = t => t == null || t < 4.5 ? 0 : t < 6.5 ? 30 * (t - 4.5) ** 2 : 120 + 120 * (t - 6.5);
LESSONS.push({
  key: 'e-bike', title: 'Electric Bike', cat: 'Getting Around', mins: 3, vb: [360, 260],
  summary: 'Pedal, and a sensor tells the controller you want help. It sends battery current through copper coils in the wheel hub one set at a time, and magnets in the hub shell chase that moving field, spinning the wheel.',
  parts: [
    { n: 1, name: 'Battery pack', at: [113, 166], num: [124, 150], desc: 'Dozens of small lithium-ion cells wired together in a case on the down tube. It stores all the energy the motor uses, and on many bikes it comes off for charging.' },
    { n: 2, name: 'Controller', at: [160, 176], num: [204, 150], desc: 'The bike’s brain. It reads the pedal sensor and your assist setting, then switches battery current to the motor’s coils in the right order, often timed by sensors that track where the magnets are.' },
    { n: 3, name: 'Pedal-assist sensor', at: [134, 210], num: [100, 248], desc: 'A cadence sensor detects that the crank is turning; a torque sensor measures how hard you push. On a pedal-assist bike: no pedaling, no help.' },
    { n: 4, name: 'Display', at: [86, 108], num: [56, 96], desc: 'Shows speed and battery level, and lets you pick an assist level — how much the motor adds to your own effort.' },
    { n: 5, name: 'Permanent magnets', at: [317, 147], num: [340, 190], desc: 'A ring of magnets inside the hub shell, alternating north and south. The shell is laced to the spokes, so when it turns, the wheel turns.' },
    { n: 6, name: 'Copper windings', at: [262, 88], num: [222, 40], desc: 'Coils of copper wire on iron teeth, bolted to the axle so they never spin. Current through a coil turns it into an electromagnet.' },
  ],
  steps: [
    { text: 'You pedal. The sensor at the crank reports that you’re pedaling — and, with a torque sensor, how hard.', parts: [3], t: [0, 2] },
    { text: 'The controller reads that signal and your assist level, and draws current from the battery.', parts: [2, 1], t: [2, 4] },
    { text: 'It switches current through the copper coils one set after the next, so a magnetic pull steps around the hub.', parts: [6], t: [4, 6.5] },
    { text: 'The magnets on the hub shell chase that moving pull. The shell turns, and the wheel with it — adding to your pedaling.', parts: [5, 4], t: [6.5, 9] },
  ],
  dur: 9,
  why: 'Why spin the outside? The coils stay fixed to the axle, so wires reach them without any sliding contacts, while the magnet shell, laced to the spokes, turns the wheel directly. The motor needs no chain and none of the bike’s gears.',
  fact: 'A 2002 U.S. law defines a low-speed electric bicycle: working pedals, a motor under 750 watts, and under 20 mph on motor power alone. Many states add classes: the motor stops helping at 20 mph on Class 1 and 2 bikes, and at 28 mph on Class 3.',
  quiz: {
    q: 'In this hub motor, which part actually spins?',
    opts: ['The shell with the magnets — and the wheel with it', 'The copper coils', 'The axle'],
    a: 0,
    why: 'The coils sit on the axle, which is clamped to the frame. The controller switches current from coil to coil, and the magnets on the shell keep chasing that field, carrying the wheel around.'
  },
  sources: [
    ['Electric bicycle — Wikipedia', 'https://en.wikipedia.org/wiki/Electric_bicycle'],
    ['Wheel hub motor — Wikipedia', 'https://en.wikipedia.org/wiki/Wheel_hub_motor'],
    ['Public Law 107-319 (low-speed electric bicycles) — GovInfo', 'https://www.govinfo.gov/content/pkg/PLAW-107publ319/html/PLAW-107publ319.htm'],
    ['§17C-1-70 Electric bicycle classes — West Virginia Code', 'https://code.wvlegislature.gov/17C-1-70/'],
    ['How do electric bikes work? — Explain that Stuff', 'https://www.explainthatstuff.com/electricbikes.html'],
  ],
  art(p) {
    const [cx, cy] = EB_C;
    // stator: 12 teeth with coils, fixed
    let teeth = '', coils = '';
    for (let k = 0; k < 12; k++) {
      const a = k * 30;
      teeth += `<g transform="rotate(${a} ${cx} ${cy})"><path d="M${cx - 3.5},${cy - 17}V${cy - 42}H${cx - 8.5}V${cy - 46.5}H${cx + 8.5}V${cy - 42}H${cx + 3.5}V${cy - 17}" class="ink thin" fill="#d4d7dc"/></g>`;
      let wl = '';
      for (let y = cy - 38; y <= cy - 23; y += 2.2) wl += `M${cx - 6.5},${f1(y)}H${cx + 6.5}`;
      coils += `<g transform="rotate(${a} ${cx} ${cy})"><rect x="${cx - 6.5}" y="${cy - 39}" width="13" height="17" rx="1.5" class="ink thin fw"/><path id="${p}cw${k}" d="${wl}" stroke="#24272c" stroke-width=".8" fill="none"/></g>`;
    }
    // rotor magnets (alternating poles)
    let mags = '';
    for (let k = 0; k < 16; k++) mags += `<g transform="rotate(${k * 22.5 + 11.25} ${cx} ${cy})"><rect x="${cx - 6.5}" y="${cy - 55.5}" width="13" height="6" class="ink thin" fill="${k % 2 ? '#fff' : '#9aa0a8'}"/></g>`;
    const [rx, ry] = EB_R, [fx, fy] = EB_F;
    return `
    <g class="shell">
      <path d="M8,240.5H236" class="ink"/>
      <path d="${ebCirc(fx, fy, 40)}${ebCirc(fx, fy, 35.5)}" fill-rule="evenodd" fill="#5c6168" class="ink thin"/>
      <path d="${ebCirc(rx, ry, 40)}${ebCirc(rx, ry, 35.5)}" fill-rule="evenodd" fill="#5c6168" class="ink thin"/>
      <path id="${p}spF" class="ink thin"/><path id="${p}spR" class="ink thin"/>
      <circle cx="${fx}" cy="${fy}" r="3.5" class="ink fw"/>
      <path d="M78,152L58,200 M84,132L78,152 M78,152L128,204 M128,204L150,136 M150,136L84,132 M150,136L186,200 M128,204L186,200" class="ink" stroke-width="2.6"/>
      <path d="M150,136L153,122 M136,119Q154,114 170,119Q160,124 140,123Z M84,132L87,114 M87,114Q96,110 104,113" class="ink" stroke-width="2"/>
      <circle cx="128" cy="204" r="12" class="ink thin fw"/><circle cx="${rx}" cy="${ry}" r="10" class="ink fm"/><circle cx="${rx}" cy="${ry}" r="2.5" class="ink thin fw"/>
      <path d="M128,192L186,195 M128,216L186,205" class="ink thin" stroke-dasharray="1.6 1.2"/>
      <path d="M124,186Q132,186 140,181 M138,206Q144,196 150,188 M168,183Q178,188 180,194" class="ink thin" stroke-dasharray="3 1.5"/>
      <circle cx="${rx}" cy="${ry}" r="14" class="ink thin" stroke-dasharray="2 2"/>
      <path d="M196,190L226,143 M200,206L262,171" class="ink thin" stroke-dasharray="2 2"/>
      <text x="${cx}" y="209" class="hand" text-anchor="middle">hub motor, cut open</text>
    </g>
    <g data-part="1"><g transform="rotate(46 109.5 172)"><rect x="84.5" y="166" width="50" height="12" rx="3" class="ink fm"/>
      <path d="M92,166V178M100,166V178M108,166V178M116,166V178M124,166V178" class="ink thin"/></g>
      <path id="${p}w1" class="energy"/></g>
    <g data-part="2"><rect x="140" y="170" width="22" height="13" rx="2" class="ink fw"/>
      <path d="M144,174H158M144,178H154" class="ink thin"/><path id="${p}w2" class="energy"/></g>
    <g data-part="3"><g id="${p}crank"></g>
      <rect x="131" y="196" width="7" height="5" class="ink thin" fill="#5c6168"/><path id="${p}w0" class="energy"/></g>
    <g data-part="4"><rect x="76" y="103" width="17" height="10" rx="2" class="ink fw"/><g id="${p}bars"></g></g>
    <g class="zoombg"><circle cx="${cx}" cy="${cy}" r="56" fill="url(#${p}grid)"/></g>
    <g data-part="6"><circle cx="${cx}" cy="${cy}" r="18" class="ink thin" fill="#d4d7dc"/>${teeth}${coils}
      <circle cx="${cx}" cy="${cy}" r="6.5" fill="url(#${p}hatch)" class="ink"/></g>
    <g data-part="5"><g id="${p}rotor">
      <path d="${ebCirc(cx, cy, 62)}${ebCirc(cx, cy, 55.5)}" fill-rule="evenodd" fill="url(#${p}hatch)" class="ink"/>
      ${mags}<path d="M${cx},${cy - 62}V${cy - 58}" class="ink"/></g>
      <path id="${p}spin" class="energy"/></g>`;
  },
  anim(svg, p, t) {
    const q = id => svg.querySelector('#' + p + id);
    const [cx, cy] = EB_C, [bx, by] = EB_BB;
    const ang = ebAng(t);
    // wheels: counterclockwise as the bike rides left
    q('spR').setAttribute('d', ebSpokes(EB_R[0], EB_R[1], 10, 35.5, 12, -ang * .5 + 7));
    q('spF').setAttribute('d', ebSpokes(EB_F[0], EB_F[1], 4, 35.5, 12, -ang * .5));
    q('rotor').setAttribute('transform', `rotate(${f1(-ang)} ${cx} ${cy})`);
    // crank + cadence magnets
    const ca = (t == null ? 125 : 125 - t * 160) * Math.PI / 180;
    const ex = bx + 18 * Math.cos(ca), ey = by + 18 * Math.sin(ca), ox = bx - 18 * Math.cos(ca), oy = by - 18 * Math.sin(ca);
    let dots = '';
    for (let i = 0; i < 8; i++) { const a = ca + i * TAU / 8; dots += `<circle cx="${f1(bx + 7 * Math.cos(a))}" cy="${f1(by + 7 * Math.sin(a))}" r="1.3" fill="#24272c"/>`; }
    q('crank').innerHTML = `<path d="M${f1(ox)},${f1(oy)}L${bx},${by}" class="ink thin" stroke-width="2.4"/>
      <circle cx="${bx}" cy="${by}" r="8.5" class="ink thin fw"/>${dots}<circle cx="${bx}" cy="${by}" r="2.2" class="ink fw"/>
      <path d="M${bx},${by}L${f1(ex)},${f1(ey)}" class="ink" stroke-width="2.6"/>
      <rect x="${f1(ex - 6)}" y="${f1(ey - 2)}" width="12" height="4" rx="1" class="ink fw"/>`;
    // signals and current
    const on = (a, b) => t == null ? 1 : seg(t, a, a + .4);
    const ph = t == null ? 0 : t * 10;
    q('w0').setAttribute('d', wave([[136, 202], [144, 194], [150, 186]], 1.6, 6, ph));
    q('w0').setAttribute('opacity', f1(on(.4)));
    q('w1').setAttribute('d', wave([[112, 190], [126, 187], [140, 180]], 1.8, 7, ph));
    q('w1').setAttribute('opacity', f1(on(2.2)));
    q('w2').setAttribute('d', wave([[164, 182], [176, 188], [182, 196]], 1.8, 7, ph));
    q('w2').setAttribute('opacity', f1(on(3.2)));
    // coils: every third one energized, stepping ahead of the magnets
    const live = t == null || t >= 4;
    const step = Math.floor((ang + 4) / 15);
    for (let k = 0; k < 12; k++) {
      const hot = live && ((k + step * 2) % 3 + 3) % 3 === 0;
      const el = q('cw' + k); el.setAttribute('class', hot ? 'energy' : ''); el.setAttribute('stroke-width', hot ? '1.1' : '.8');
    }
    // spin arrow on the shell (counterclockwise)
    const sa = t == null || t >= 4.5;
    const a0 = -40, a1 = -100, R = 68, r = d => d * Math.PI / 180;
    const p0 = [cx + R * Math.cos(r(a0)), cy + R * Math.sin(r(a0))], p1 = [cx + R * Math.cos(r(a1)), cy + R * Math.sin(r(a1))];
    const tx = Math.sin(r(a1)), ty = -Math.cos(r(a1));
    q('spin').setAttribute('d', sa ? `M${f1(p0[0])},${f1(p0[1])}A${R},${R} 0 0 0 ${f1(p1[0])},${f1(p1[1])}M${f1(p1[0] - 4 * tx + 3 * Math.cos(r(a1)))},${f1(p1[1] - 4 * ty + 3 * Math.sin(r(a1)))}L${f1(p1[0])},${f1(p1[1])}L${f1(p1[0] - 4 * tx - 3 * Math.cos(r(a1)))},${f1(p1[1] - 4 * ty - 3 * Math.sin(r(a1)))}` : '');
    // display: assist level bars
    const lvl = t == null ? 3 : Math.round(4 * seg(t, 2, 4));
    let bars = '';
    for (let i = 0; i < 4; i++) bars += `<rect x="${79 + i * 3.4}" y="${110 - 2 - i * 1.3}" width="2.4" height="${2 + i * 1.3}" fill="${i < lvl ? '#D63A2A' : '#d4d7dc'}"/>`;
    q('bars').innerHTML = bars;
  }
});
}
