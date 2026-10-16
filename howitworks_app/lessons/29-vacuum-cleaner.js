{
/* 29. Vacuum cleaner (canister, bag + HEPA) */
const HB = [[92, 202], [102, 140], [130, 108], [178, 130]];   // hose centerline (cubic)
const bez = u => { const v = 1 - u; return [0, 1].map(k => v * v * v * HB[0][k] + 3 * v * v * u * HB[1][k] + 3 * v * u * u * HB[2][k] + u * u * u * HB[3][k]); };
const HOSE = `M${HB[0]}C${HB[1]} ${HB[2]} ${HB[3]}`;
// dust: [floor x, launch time, rest x, rest y, fine?]
const DUST = [[22, 2.0, 190, 206], [58, 2.3, 214, 208], [34, 2.7, 228, 205], [70, 3.0, 200, 200], [28, 3.3, 236, 208],
  [50, 3.6, 252, 150, 1], [64, 3.9, 182, 207], [40, 4.2, 220, 199], [18, 4.5, 252, 176, 1], [76, 4.8, 206, 194]];
const dustPath = d => {
  const pts = [[d[0], 233], [d[0] * .5 + 22, 222], [90, 206]];
  for (let k = 1; k <= 12; k++) pts.push(bez(k / 12));
  pts.push([196, 140]);
  if (d[4]) pts.push([238, 150], [d[2], d[3]]); else pts.push([d[2], d[3]]);
  return pts;
};
const along = (pts, u) => {
  const L = [0]; for (let i = 1; i < pts.length; i++) L.push(L[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
  const s = u * L[L.length - 1]; let i = 1; while (i < L.length - 1 && L[i] < s) i++;
  const r = (s - L[i - 1]) / (L[i] - L[i - 1] || 1);
  return [pts[i - 1][0] + (pts[i][0] - pts[i - 1][0]) * r, pts[i - 1][1] + (pts[i][1] - pts[i - 1][1]) * r];
};
LESSONS.push({
  key: 'vacuum-cleaner', title: 'Vacuum Cleaner', cat: 'Home', mins: 3, vb: [360, 250],
  summary: 'A fan throws air out of the back of the machine, so the pressure inside drops. Room air rushes in through the nozzle to fill the gap — carrying dirt with it — and the bag and filter catch the dirt.',
  parts: [
    { n: 1, name: 'Fan & motor', at: [290, 140], num: [266, 62], desc: 'An electric motor spins a fan at high speed. The fan flings air out of the machine, leaving lower pressure behind it.' },
    { n: 2, name: 'Brush roll', at: [44, 214], num: [24, 180], desc: 'A spinning brush in the floor nozzle beats the carpet and flicks dirt loose into the stream of air.' },
    { n: 3, name: 'Hose', at: [118, 126], num: [100, 82], desc: 'Carries the fast-moving air and dirt from the nozzle to the canister. The air’s rush is what drags the dirt along.' },
    { n: 4, name: 'Dust bag', at: [204, 110], num: [196, 62], desc: 'A bag of porous paper or cloth. Air passes through its walls; dust and crumbs are too big and stay inside.' },
    { n: 5, name: 'HEPA filter', at: [258, 110], num: [232, 34], desc: 'A pleated mat of fine fibers that traps particles too small for the bag. A true HEPA filter catches at least 99.97% of particles 0.3 microns across.' },
    { n: 6, name: 'Exhaust vent', at: [318, 92], num: [340, 50], desc: 'Where the cleaned air leaves. Block it, and the fan has nowhere to push air — so suction drops too.' },
  ],
  steps: [
    { text: 'The motor spins the fan, which pushes air out of the exhaust. Pressure inside the machine drops below the room’s.', parts: [1, 6], t: [0, 1.8] },
    { text: 'Room air pushes in through the nozzle to fill the low-pressure space. The brush roll flicks dirt up into the rush.', parts: [2], t: [1.8, 3.6] },
    { text: 'The fast air drags the dirt up the hose and into the bag. Air seeps out through the bag’s walls; the dirt stays.', parts: [3, 4], t: [3.6, 6] },
    { text: 'The HEPA filter catches the finest dust before the air reaches the fan and leaves through the exhaust.', parts: [5, 6], t: [6, 8] },
  ],
  dur: 8,
  why: 'Why put the fan after the bag and filter? The fan only ever touches clean air, so grit can’t chip its blades. And the filter only works if the case is sealed — any leak lets dusty air slip around it and out the exhaust.',
  fact: 'One of the first powered vacuum cleaners, built by Hubert Cecil Booth in 1901, was so big it was pulled by horses. It parked outside, and long hoses were fed in through the windows. Booth may also have coined the word “vacuum cleaner.”',
  quiz: {
    q: 'What actually pushes the dirt into a vacuum cleaner?',
    opts: ['Room air, rushing in to fill the low-pressure space inside', 'Static electricity building up in the hose', 'The brush roll throwing it all the way into the bag'],
    a: 0,
    why: 'The fan lowers the pressure inside. Air in the room is at higher pressure, so it pours in through the nozzle — and the moving air drags the dirt with it.'
  },
  sources: [
    ['Vacuum cleaner — Wikipedia', 'https://en.wikipedia.org/wiki/Vacuum_cleaner'],
    ['How Vacuum Cleaners Work — HowStuffWorks', 'https://home.howstuffworks.com/vacuum-cleaner.htm'],
    ['What is a HEPA filter? — U.S. EPA', 'https://www.epa.gov/indoor-air-quality-iaq/what-hepa-filter'],
  ],
  art(p) {
    let pleat = 'M254,106';
    for (let y = 106; y < 214; y += 8) pleat += `L262,${y + 4}L254,${y + 8}`;
    let fins = '';
    for (let x = 318; x <= 334; x += 3) fins += `M${x},138V182`;
    let dust = '';
    DUST.forEach((d, i) => dust += `<circle id="${p}d${i}" r="${d[4] ? 1.3 : 2.2}" fill="#5a5f66"/>`);
    return `
    <g class="shell">
      <path d="M0,236H360" class="ink"/><rect x="0" y="236.7" width="360" height="14" fill="url(#${p}hatch)"/>
      <path d="M160,104Q160,96 168,96H300V101H166V219H344V101H336V96H340Q348,96 348,104V218Q348,224 342,224H166Q160,224 160,218V142H166V118H160Z" fill="url(#${p}hatch)" class="ink"/>
      <path d="M300,96V101M336,96V101" class="ink thin"/>
      <circle cx="186" cy="228" r="8" class="ink fw"/><circle cx="322" cy="228" r="8" class="ink fw"/>
      <path d="M12,232V214Q12,204 22,204H84V196H96V214Q96,224 90,232H84V214Q84,212 82,212H24V232Z" fill="url(#${p}hatch)" class="ink"/>
      <path d="M266,101V219" class="ink thin"/>
      <text x="304" y="212" class="hand" text-anchor="middle">low pressure</text></g>
    <g data-part="3"><path d="${HOSE}" fill="none" stroke="#24272c" stroke-width="13" stroke-linecap="butt"/>
      <path d="${HOSE}" fill="none" stroke="#fff" stroke-width="10" stroke-linecap="butt"/>
      <path d="${HOSE}" fill="none" stroke="#c9ccd1" stroke-width="10" stroke-dasharray="1.2 4"/>
      <rect x="166" y="120" width="8" height="20" class="ink fm"/></g>
    <g data-part="4"><path d="M174,116Q200,104 244,108Q250,160 244,212Q206,218 172,212Q170,180 174,144Z" fill="url(#${p}fabric)" class="ink"/>
      <rect x="170" y="118" width="8" height="24" class="ink fw"/></g>
    <g data-part="5"><rect x="252" y="104" width="12" height="112" class="ink fw"/><path d="${pleat}" class="ink thin"/></g>
    <g data-part="1"><rect x="312" y="134" width="26" height="52" rx="3" class="ink fm"/><path d="${fins}" class="ink thin"/>
      <rect x="304" y="157" width="8" height="6" class="ink fm"/>
      <g id="${p}fan"><circle cx="290" cy="160" r="20" class="ink fw"/><path id="${p}blades" class="ink thin"/></g>
      <circle cx="290" cy="160" r="3.5" class="ink fm"/></g>
    <g data-part="6"><path d="M304,96V101M310,96V101M316,96V101M322,96V101M328,96V101" class="ink thin"/>
      <rect x="300" y="95" width="36" height="6" fill="url(#${p}grid)" class="ink thin"/></g>
    <g data-part="2"><g id="${p}brush"><circle cx="44" cy="222" r="5" class="ink fm"/><path id="${p}bristle" class="ink thin"/></g></g>
    <g id="${p}air">
      <path id="${p}a1" d="M14,234Q30,222 60,220Q80,218 90,206M70,234Q80,226 90,210" class="flow" stroke-dasharray="5 6"/>
      <path id="${p}a2" d="${HOSE}" class="flow" stroke-dasharray="5 6"/>
      <path id="${p}a3" d="M232,160H248M244,157L248,160L244,163 M268,128Q276,136 274,146M268,192Q276,184 274,174M271,150l3,-4l2,4M271,170l3,4l2,-4" class="flow"/>
      <path id="${p}a4" d="M306,92V70M312,92V74M318,92V68M324,92V74M330,92V70" class="flow" stroke-dasharray="5 5"/>
      <path d="M303,74L306,70L309,74M315,72L318,68L321,72M327,74L330,70L333,74" class="flow"/></g>
    <g id="${p}dust">${dust}</g>`;
  },
  anim(svg, p, t) {
    const q = id => svg.querySelector('#' + p + id);
    const run = t == null;
    const motor = run ? 1 : seg(t, 0, .8);
    const fa = run ? 20 : 1400 * t * motor;
    let bl = '';
    for (let k = 0; k < 8; k++) {
      const a = (fa + k * 45) * Math.PI / 180;
      bl += `M${f1(290 + 5 * Math.cos(a))},${f1(160 + 5 * Math.sin(a))}Q${f1(290 + 14 * Math.cos(a + .25))},${f1(160 + 14 * Math.sin(a + .25))} ${f1(290 + 19 * Math.cos(a + .6))},${f1(160 + 19 * Math.sin(a + .6))}`;
    }
    q('blades').setAttribute('d', bl);
    const ba = run ? 0 : -900 * t * seg(t, 1.6, 2.2);
    let br = '';
    for (let k = 0; k < 6; k++) { const a = (ba + k * 60) * Math.PI / 180; br += `M${f1(44 + 5 * Math.cos(a))},${f1(222 + 5 * Math.sin(a))}L${f1(44 + 10 * Math.cos(a))},${f1(222 + 10 * Math.sin(a))}`; }
    q('bristle').setAttribute('d', br);
    // airflow: exhaust first, then intake
    const on = (a, b) => run ? 1 : seg(t, a, b);
    const flow = run ? 0 : -t * 24;
    q('a4').setAttribute('opacity', f1(on(.4, 1))); q('a4').setAttribute('stroke-dashoffset', f1(flow));
    q('a1').setAttribute('opacity', f1(on(1.6, 2.1))); q('a1').setAttribute('stroke-dashoffset', f1(flow));
    q('a2').setAttribute('opacity', f1(on(1.8, 2.4))); q('a2').setAttribute('stroke-dashoffset', f1(flow));
    q('a3').setAttribute('opacity', f1(on(2.2, 2.8)));
    // dust: lying on the floor, carried in, then trapped
    DUST.forEach((d, i) => {
      const u = run ? [1, 1, 1, 1, .2, 1, .45, .62, 0, 0][i] : Math.max(0, Math.min(1, (t - d[1]) / 1.5));
      const [x, y] = along(dustPath(d), ease(u));
      const c = q('d' + i);
      c.setAttribute('cx', f1(x)); c.setAttribute('cy', f1(y));
    });
  }
});
}
