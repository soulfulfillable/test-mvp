{
/* 12. Front-load washing machine */
const C = [180, 118], RT = 84, RTI = 78, RD = 68;   // tub center, tub outer/inner, drum radius
const CLOTH = [0, 1, 2, 3, 4];
const omega = t => 2.2 * seg(t, 1.8, 2.4) * (1 - seg(t, 5.1, 5.6)) + 10 * seg(t, 7, 8);
const drumAngle = t => { let a = 0; for (let u = 0; u < t; u += .02) a += omega(u) * .02; return a; };
const at = (r, deg) => [C[0] + r * Math.cos(deg * Math.PI / 180), C[1] + r * Math.sin(deg * Math.PI / 180)];
// external tangents between big drum pulley and motor pulley
const BELT = (() => {
  const [x1, y1, r1] = [180, 118, 46], [x2, y2, r2] = [207, 220, 5];
  const dx = x2 - x1, dy = y2 - y1, d = Math.hypot(dx, dy), base = Math.atan2(dy, dx), g = Math.acos((r1 - r2) / d);
  return [1, -1].map(s => { const a = base + s * g; return `M${f1(x1 + r1 * Math.cos(a))},${f1(y1 + r1 * Math.sin(a))}L${f1(x2 + r2 * Math.cos(a))},${f1(y2 + r2 * Math.sin(a))}`; }).join('');
})();
LESSONS.push({
  key: 'washing-machine', title: 'Washing Machine', cat: 'Home', mins: 3, vb: [360, 270],
  summary: 'A front-loader lifts your clothes on paddles and drops them through a shallow pool of soapy water, over and over. Then it spins the drum so fast that water is flung out through its holes.',
  parts: [
    { n: 1, name: 'Drum & lifters', at: [114, 100], num: [24, 84], desc: 'The perforated steel drum holds the clothes. Paddles inside, called lifters, carry them up the side until they tumble back down.' },
    { n: 2, name: 'Outer tub', at: [97, 140], num: [24, 140], desc: 'A sealed tub around the drum that holds the water. A rubber door seal joins its front to the cabinet so nothing leaks.' },
    { n: 3, name: 'Motor & belt', at: [236, 226], num: [336, 226], desc: 'Turns the drum through a belt and a big pulley on its back — slowly back and forth to wash, very fast to spin. Some machines drive the drum directly.' },
    { n: 4, name: 'Inlet valve', at: [164, 20], num: [134, 24], desc: 'An electric valve on the water supply. It opens to fill the tub and shuts when a level sensor says there is enough.' },
    { n: 5, name: 'Drain pump', at: [136, 234], num: [24, 216], desc: 'A small pump at the bottom pushes the dirty water out through the drain hose.' },
    { n: 6, name: 'Springs & dampers', at: [250, 32], num: [336, 40], desc: 'The whole tub hangs on springs and sits on shock absorbers, so a lopsided load wobbles inside the cabinet instead of shaking it across the floor.' },
  ],
  steps: [
    { text: 'The inlet valve opens and water pours in until a few inches pool in the bottom of the tub.', parts: [4], t: [0, 2] },
    { text: 'The motor turns the drum slowly. Lifters carry the clothes up the side, and they flop back down through the soapy water.', parts: [1, 3], t: [2, 5.4] },
    { text: 'The drain pump empties the tub.', parts: [5], t: [5.4, 7] },
    { text: 'Spin: the drum whirls, pinning clothes to the wall and flinging water out through its holes. Springs and dampers soak up the shaking.', parts: [1, 6], t: [7, 10] },
  ],
  dur: 10,
  why: 'Why tumble instead of filling the tub? Lifting and dropping clothes through a small pool scrubs them with gravity, so a front-loader needs far less water — and less water to heat — than swishing a load in a full tub.',
  fact: 'At 1,200 rpm, one common 27-inch front-loader presses the clothes against its drum with about 440 times the force of gravity. Wringing out more water in the washer means less work for the dryer.',
  quiz: {
    q: 'Why is the drum full of small holes?',
    opts: ['To make it lighter so it spins faster', 'So water can flow between drum and tub — in to wash, out during the spin', 'So hot air can dry the clothes'],
    a: 1,
    why: 'The water sits in the outer tub and flows into the drum through the holes. During the spin, the same holes let it fly out while the clothes stay in.'
  },
  sources: [
    ['Washing machine — Wikipedia', 'https://en.wikipedia.org/wiki/Washing_machine'],
    ['How Washing Machines Work — HowStuffWorks', 'https://home.howstuffworks.com/washer.htm'],
    ['Clothes washers (ENERGY STAR) — Natural Resources Canada', 'https://natural-resources.canada.ca/energy-efficiency/energy-star/clothes-washers'],
    ['Front-load washer spec sheet — Speed Queen / Alliance Laundry', 'https://distribution.alliancelaundry.com/wp-content/uploads/2022/12/DL_AM21-0019_SpecSheet_SF_FC_Electronic_en-US-1.pdf'],
  ],
  art(p) {
    let holes = '';
    for (let a = 0; a < 360; a += 15) { const [x, y] = at(66, a); holes += `<circle cx="${f1(x)}" cy="${f1(y)}" r="1.3" fill="#fff" stroke="#24272c" stroke-width=".5"/>`; }
    let lift = '';
    [0, 120, 240].forEach(a => {
      const [x1, y1] = at(65, a - 9), [x2, y2] = at(50, a), [x3, y3] = at(65, a + 9);
      lift += `M${f1(x1)},${f1(y1)}L${f1(x2)},${f1(y2)}L${f1(x3)},${f1(y3)}`;
    });
    let cl = '';
    const SH = ['M-10,-7L-4,-9Q0,-6 4,-9L10,-7L13,-1L7,0V8H-7V0L-13,-1Z', 'M-8,-8H-1V1Q-1,3 2,3H8Q11,3 11,6.5Q11,10 8,10H-2Q-8,10 -8,4Z', 'M-12,-6H12V7H-12Z M-12,0H12'];
    CLOTH.forEach(i => cl += `<path id="${p}c${i}" d="${SH[i % 3]}" fill="url(#${p}fabric)" class="ink thin"/>`);
    return `
    <g class="shell">
      <path d="M56,8H304V254H56Z M62,14V248H298V14Z" fill-rule="evenodd" fill="url(#${p}hatch)" class="ink"/>
      <path d="M66,254v6h18v-6M276,254v6h18v-6" class="ink"/><path d="M0,262H360" class="ink"/><rect x="0" y="262.7" width="360" height="8" fill="url(#${p}hatch)"/>
      <path d="M62,232H40" class="ink" style="stroke-width:2.4"/></g>
    <g data-part="5"><path d="M171,200C171,214 168,222 160,226" class="ink" style="stroke-width:2.4"/>
      <circle cx="150" cy="234" r="11" class="ink fw"/><path d="M150,234m-6,0a6,6 0 1 0 12,0a6,6 0 1 0 -12,0" class="ink thin"/>
      <path d="M139,232H62" class="ink" style="stroke-width:2.4"/>
      <path id="${p}dflow" d="M128,228H96M100,225L96,228L100,231M58,228H44M48,225L44,228L48,231" class="flow" opacity="0"/></g>
    <g data-part="3"><path id="${p}belt" d="${BELT}" class="ink thin" stroke-dasharray="3 2"/>
      <rect x="210" y="210" width="40" height="26" rx="4" class="ink fm"/><path d="M216,210V236M244,210V236" class="ink thin"/>
      <circle cx="207" cy="220" r="5" class="ink fw"/></g>
    <g data-part="6"><path id="${p}sprL" class="ink thin"/><path id="${p}sprR" class="ink thin"/>
      <path id="${p}dmpL" class="ink fw"/><path id="${p}dmpR" class="ink fw"/></g>
    <g id="${p}tubg">
      <g data-part="2"><circle cx="180" cy="118" r="${RTI}" fill="url(#${p}grid)"/>
        <g clip-path="url(#${p}tc)"><rect id="${p}water" x="96" y="210" width="168" height="0" class="water"/><path id="${p}wl" class="wline"/></g>
        <path d="M180,${118 - RT}A${RT},${RT} 0 1 1 179.9,${118 - RT}Z M180,${118 - RTI}A${RTI},${RTI} 0 1 0 180.1,${118 - RTI}Z" fill-rule="evenodd" fill="url(#${p}hatch)" class="ink"/></g>
      <g id="${p}cloth">${cl}</g>
      <g data-part="1"><g id="${p}drum"><circle cx="180" cy="118" r="66" class="ink" style="stroke-width:4" fill="none"/>
        <circle cx="180" cy="118" r="66" fill="none" stroke="#eceef1" stroke-width="2.2"/>${holes}
        <path d="${lift}" class="ink fm"/><circle cx="180" cy="118" r="3" class="ink thin fw"/></g>
        <path id="${p}blur" class="ink thin" opacity="0"/></g>
      <path id="${p}spray" class="flow" opacity="0"/>
    </g>
    <g data-part="4"><rect x="164" y="14" width="32" height="12" rx="2" class="ink fm"/><circle cx="188" cy="20" r="3.5" class="ink thin fw"/>
      <rect x="176" y="26" width="8" height="10" fill="url(#${p}grid)" class="ink thin"/>
      <path id="${p}fill" class="flow" opacity="0"/></g>
    <clipPath id="${p}tc"><circle cx="180" cy="118" r="${RTI}"/></clipPath>`;
  },
  anim(svg, p, t) {
    const q = id => svg.querySelector('#' + p + id);
    const run = t == null;
    const a = run ? 1.1 : drumAngle(t);                     // radians
    const deg = a * 180 / Math.PI;
    // water level: fill, hold, drain
    const L = run ? 172 : 204 - 32 * seg(t, .3, 2) + 32 * seg(t, 5.5, 6.8);
    q('water').setAttribute('y', f1(L)); q('water').setAttribute('height', f1(Math.max(0, 204 - L)));
    q('wl').setAttribute('d', L < 200 ? `M96,${f1(L)}H264` : '');
    q('fill').setAttribute('opacity', f1(run ? 0 : seg(t, .1, .4) * (1 - seg(t, 1.8, 2.1))));
    const fy = run ? 0 : (t * 40) % 14;
    q('fill').setAttribute('d', `M180,${f1(24 + fy)}v8m-3,-3l3,3l3,-3 M180,${f1(40 + fy)}v8m-3,-3l3,3l3,-3`);
    q('dflow').setAttribute('opacity', f1(run ? 0 : seg(t, 5.4, 5.7) * (1 - seg(t, 9.4, 9.9))));
    // drum rotation
    const spin = run ? 0 : seg(t, 7, 7.8);
    q('drum').setAttribute('transform', `rotate(${f1(deg)} 180 118)`);
    q('belt').setAttribute('stroke-dashoffset', f1(-a * 46));
    q('blur').setAttribute('opacity', f1(spin * .8));
    q('blur').setAttribute('d', `M${f1(at(58, deg + 20)[0])},${f1(at(58, deg + 20)[1])}A58,58 0 0 1 ${f1(at(58, deg + 70)[0])},${f1(at(58, deg + 70)[1])}M${f1(at(58, deg + 200)[0])},${f1(at(58, deg + 200)[1])}A58,58 0 0 1 ${f1(at(58, deg + 250)[0])},${f1(at(58, deg + 250)[1])}`);
    // clothes: rest at bottom / tumble on lifters / pinned in spin
    const wT = run ? 1 : seg(t, 1.9, 2.5) * (1 - seg(t, 5.0, 5.6)), wP = spin;
    CLOTH.forEach(i => {
      const R = at(46, 62 + i * 14), Rr = (i % 2 ? 20 : -15);
      const k = i % 3, rr = i < 3 ? 52 : 40, L = (((deg + k * 120 + (i < 3 ? 0 : 14)) % 360) + 360) % 360;
      let T, Tr;
      const ra = 66 + k * 22;
      if (L >= ra - 9 && L <= 205) { T = at(rr - 6 + 6 * Math.min(1, (L - ra + 9) / 20), L + 9); Tr = L + 9; }
      else {
        const s = ((L - 205) + 360) % 360 / (ra + 146);
        if (s < .22) { const e = s / .22, A = at(rr, 214), B = at(rr - 6, ra); T = [A[0] + (B[0] - A[0]) * e, A[1] + (B[1] - A[1]) * e * e]; Tr = 214 + 200 * e; }
        else { T = at(rr - 6, ra); Tr = 54; }
      }
      const P = at(56, deg + i * 72), Pr = deg + i * 72 + 90;
      const wr = 1 - wT - wP;
      const x = R[0] * wr + T[0] * wT + P[0] * wP, y = R[1] * wr + T[1] * wT + P[1] * wP, r = Rr * wr + (Tr + 90) * wT + Pr * wP;
      q('c' + i).setAttribute('transform', `translate(${f1(x)},${f1(y)}) rotate(${f1(r)})`);
    });
    // spray through the holes during the spin
    let sp = '';
    if (spin > 0) for (let k = 0; k < 10; k++) {
      const ang = deg * .15 + k * 36 + 10, s = ((run ? 0 : t) * 3 + k * .37) % 1;
      const [x1, y1] = at(68 + s * 5, ang), [x2, y2] = at(71 + s * 5, ang);
      sp += `M${f1(x1)},${f1(y1)}L${f1(x2)},${f1(y2)}`;
    }
    q('spray').setAttribute('d', sp); q('spray').setAttribute('opacity', f1(spin));
    // tub wobble on its springs & dampers
    const jx = run ? 0 : spin * 1.6 * Math.sin(t * 37), jy = run ? 0 : spin * 1.2 * Math.cos(t * 29);
    q('tubg').setAttribute('transform', `translate(${f1(jx)},${f1(jy)})`);
    const spring = (x1, y1, x2, y2) => {
      let d = `M${x1},${y1}`; const n = 12, dx = x2 - x1, dy = y2 - y1, len = Math.hypot(dx, dy), nx = -dy / len, ny = dx / len;
      for (let k = 1; k < n; k++) { const s = k / n, o = (k % 2 ? 4 : -4); d += `L${f1(x1 + dx * s + nx * o)},${f1(y1 + dy * s + ny * o)}`; }
      return d + `L${f1(x2)},${f1(y2)}`;
    };
    const tl = at(RT, 234), tr = at(RT, 306);
    q('sprL').setAttribute('d', spring(92, 14, f1(tl[0] + jx), f1(tl[1] + jy)));
    q('sprR').setAttribute('d', spring(268, 14, f1(tr[0] + jx), f1(tr[1] + jy)));
    const damper = (x1, y1, x2, y2) => {
      const mx = (x1 + x2) / 2, my = (y1 + y2) / 2 + 4;
      return `M${f1(x1)},${f1(y1)}L${f1(mx)},${f1(my)} M${f1(mx - 5)},${f1(my - 2)}L${f1(x2 - 5)},${f1(y2)}H${f1(x2 + 5)}L${f1(mx + 5)},${f1(my - 2)}Z`;
    };
    const bl = at(RT, 140), br = at(RT, 40);
    q('dmpL').setAttribute('d', damper(bl[0] + jx, bl[1] + jy, 106, 248));
    q('dmpR').setAttribute('d', damper(br[0] + jx, br[1] + jy, 254, 248));
  }
});
}
