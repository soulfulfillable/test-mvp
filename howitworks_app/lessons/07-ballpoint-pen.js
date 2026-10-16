{
/* 7. Ballpoint pen */
const BC = [250, 160], BR = 34;               // zoomed ball center / radius
const INK = '#3a7fc0';
LESSONS.push({
  key: 'ballpoint-pen', title: 'Ballpoint Pen', cat: 'Home', mins: 3, vb: [360, 260],
  summary: 'A tiny metal ball sits in a socket at the tip. As you write, it rolls: the top dips into thick ink inside the pen, and the bottom rolls that ink onto the paper.',
  parts: [
    { n: 1, name: 'Ball', at: [280, 170], num: [330, 178], desc: 'A hard ball, often tungsten carbide, typically 0.7 to 1.15 mm across. It works like a roll-on deodorant: it turns freely and carries a thin film of ink out.' },
    { n: 2, name: 'Socket', at: [300, 96], num: [322, 64], desc: 'The metal tip is pinched around the ball so it can spin but can’t fall out. When you stop writing, the ball plugs the opening like a cap.' },
    { n: 3, name: 'Ink', at: [58, 128], num: [22, 128], desc: 'A thick, oily paste — far stickier than fountain-pen ink. It is thin enough to coat the ball, but thick enough not to leak past it.' },
    { n: 4, name: 'Ink tube', at: [52, 72], num: [22, 72], desc: 'The refill: a narrow tube that holds the ink above the tip, so gravity keeps feeding it down to the ball.' },
    { n: 5, name: 'Air hole', at: [72, 44], num: [104, 30], desc: 'As ink leaves the tube, air has to take its place — otherwise a vacuum would stop the flow. A small vent lets it in.' },
    { n: 6, name: 'Click button & spring', at: [58, 12], num: [24, 22], desc: 'Clicking pushes the refill down so the tip pokes out and a latch holds it. Click again and the spring pulls the tip back in.' },
  ],
  steps: [
    { text: 'Click: the button pushes the ink tube down against the spring, and the tip pokes out.', parts: [6], t: [0, 1.6] },
    { text: 'Gravity pulls the thick ink down the tube to the back of the ball. Air comes in through the vent to replace it.', parts: [3, 4, 5], t: [1.6, 3.4] },
    { text: 'Drag the pen: the ball rolls. Its top picks up ink inside the socket and its bottom rolls it onto the paper.', parts: [1], t: [3.4, 6.8] },
    { text: 'Stop, and the ball sits tight in the socket, sealing the ink in so it can’t leak or dry out.', parts: [1, 2], t: [6.8, 9] },
  ],
  dur: 9,
  why: 'Why a ball instead of a nib? The ball is both brush and valve: it lets out only the thin film on its surface, and the moment you stop it plugs the tip. That is why the ink is so thick — runny ink would just leak past the ball.',
  fact: 'László Bíró filed his British patent for a ballpoint in 1938. The cheap BIC Cristal followed in 1950, and in 2006 the company said it had sold its 100 billionth one — about 57 pens every second.',
  quiz: {
    q: 'Why does an ordinary ballpoint stop writing when you hold it upside down?',
    opts: ['The thick ink relies on gravity to reach the ball', 'The ball slips out of its socket', 'The spring squeezes the ink tube shut'],
    a: 0,
    why: 'Most ballpoints aren’t pressurized. Point the tip up and the ink slides away from the ball, so it runs dry. Pens that write upside down use a pressurized cartridge.'
  },
  sources: [
    ['Ballpoint pen — Wikipedia', 'https://en.wikipedia.org/wiki/Ballpoint_pen'],
    ['How Ballpoint Pens Work — HowStuffWorks', 'https://home.howstuffworks.com/pen.htm'],
    ['Ballpoint pens (standard) — Bureau of Indian Standards', 'https://www.bis.gov.in/wp-content/uploads/2023/08/Ballpoint-Pen-16.pdf'],
    ['Bic Cristal — Wikipedia', 'https://en.wikipedia.org/wiki/Bic_Cristal'],
  ],
  art(p) {
    const W = 'M176,24L222,180L226,177L215,160A35,35 0 0 1 238,127V24Z';
    const WR = 'M324,24L278,180L274,177L285,160A35,35 0 0 0 262,127V24Z';
    return `
    <g class="shell">
      <path d="M8,232H112" class="ink"/><rect x="8" y="232.7" width="104" height="6" fill="url(#${p}hatch)"/>
      <circle cx="58" cy="228" r="9" class="ink thin" stroke-dasharray="2 2"/>
      <path d="M64,222L158,92M66,234L166,174" class="ink thin" stroke-dasharray="2 2"/>
      <path d="M44,14V200L54,216M72,14V200L62,216 M47,14V199L55.5,212M69,14V199L60.5,212" class="ink"/>
      <path d="M44,14H47V199L55.5,212L54,216L44,200Z M72,14H69V199L60.5,212L62,216L72,200Z" fill="url(#${p}hatch)" class="ink"/>
      <path id="${p}trail0" fill="none" stroke="${INK}" stroke-linecap="round" stroke-width="2"/></g>
    <g data-part="5"><rect x="68.5" y="38" width="5" height="10" fill="url(#${p}grid)"/><path d="M69,38H72M69,48H72" class="ink thin"/>
      <path id="${p}air" d="M92,43H76M80,40L76,43L80,46" class="flow"/></g>
    <g id="${p}refill">
      <g data-part="4"><path d="M51,24H65V196H51Z" class="ink fw"/><path d="M53,26H63V196H53Z" fill="url(#${p}grid)"/></g>
      <g data-part="3"><rect id="${p}ink0" x="53" y="88" width="10" height="108" fill="${INK}" opacity=".55"/><path id="${p}inkl" d="M53,88H63" fill="none" stroke="${INK}" stroke-linecap="round" stroke-width="1"/></g>
      <g class="tip"><path d="M51,196H65L60,224H56Z" class="ink fm"/><circle cx="58" cy="226.5" r="2.6" class="ink thin fm"/>
        <rect x="49" y="176" width="18" height="4" class="ink fw"/></g>
    </g>
    <g data-part="6"><rect id="${p}btn" x="50" y="4" width="16" height="10" rx="2" class="ink fm"/><path id="${p}spring" class="ink thin"/></g>
    <clipPath id="${p}zc"><circle cx="252" cy="124" r="99"/></clipPath>
    <circle cx="252" cy="124" r="100" class="fw"/>
    <g clip-path="url(#${p}zc)"><g transform="translate(0,-14)">
      <g class="paper"><rect x="140" y="194" width="220" height="60" class="fw"/><path d="M140,194H360" class="ink"/><path id="${p}fib" class="ink thin" opacity=".45"/>
        <path id="${p}trail" fill="none" stroke="${INK}" stroke-linecap="round" stroke-width="3.2"/>
        <text x="206" y="222" class="hand">paper</text></g>
      <g class="inkz"><rect x="238" y="20" width="24" height="110" fill="${INK}" opacity=".45"/><circle cx="250" cy="160" r="35" fill="${INK}" opacity=".45"/>
        <path id="${p}feed" class="flow"/></g>
      <g data-part="2"><path d="${W}" fill="url(#${p}hatch)" class="ink"/><path d="${WR}" fill="url(#${p}hatch)" class="ink"/></g>
      <g data-part="1"><circle cx="250" cy="160" r="34" class="ink fm"/><path id="${p}marks" class="ink thin"/>
        <path id="${p}film" fill="none" stroke="${INK}" stroke-linecap="round" stroke-width="2.6"/></g>
      <path id="${p}move" d="M294,176H324M318,172L324,176L318,180" class="energy"/>
    </g></g>
    <circle cx="252" cy="124" r="100" class="ink"/>`;
  },
  anim(svg, p, t) {
    const q = id => svg.querySelector('#' + p + id);
    const run = t == null;
    const ext = run ? 1 : seg(t, .2, 1.1);                       // tip out
    const off = -14 * (1 - ext);
    const trav = run ? 80 : 150 * Math.max(0, Math.min(1, (t - 3.4) / 3.4));
    const feed = run ? 1 : seg(t, 1.6, 2.4);
    q('refill').setAttribute('transform', `translate(0,${f1(off)})`);
    q('btn').setAttribute('y', f1(4 + 4 * ext));
    let d = '', top = 180 + off, n = 8;
    for (let k = 0; k <= n; k++) d += (k ? 'L' : 'M') + (k % 2 ? 66.5 : 49.5) + ',' + f1(top - 2 + (198 - top + 2) * k / n);
    q('spring').setAttribute('d', d);
    // ink level drops a hair while writing
    const lvl = 88 + trav * .03;
    q('ink0').setAttribute('y', f1(lvl)); q('ink0').setAttribute('height', f1(196 - lvl));
    q('inkl').setAttribute('d', `M53,${f1(lvl)}H63`);
    // air in through the vent, ink down the channel
    const ph = run ? 0 : t * 30;
    const airOn = run ? 1 : seg(t, 1.6, 2) * (1 - seg(t, 6.6, 7));
    q('air').setAttribute('opacity', f1(airOn));
    const fy = (k) => 30 + ((k * 34 + ph) % 102);
    q('feed').setAttribute('d', run || feed > 0 ? [0, 1, 2].map(k => `M250,${f1(fy(k))}v12m-3,-4l3,4l3,-4`).join('') : '');
    q('feed').setAttribute('opacity', f1(run ? .9 : feed * (1 - seg(t, 6.8, 7.2)) * .9));
    // paper slides left under the ball; ball rolls clockwise
    let fib = '';
    for (let x = 140 - (trav % 18); x < 360; x += 18) fib += `M${f1(x)},${200 + (Math.round(x) % 3)}h7`;
    q('fib').setAttribute('d', fib);
    q('trail').setAttribute('d', trav > 0 ? `M${f1(BC[0] - trav)},192.4H${BC[0] - 4}` : '');
    q('trail0').setAttribute('d', trav > 0 ? `M${f1(58 - trav * .3)},231H57` : '');
    const a0 = trav / BR;                                          // radians rolled
    let mk = '';
    [0, 1, 2, 3, 4].forEach(k => {
      const a = a0 + k * TAU / 5, r = 24;
      const x1 = BC[0] + r * Math.cos(a), y1 = BC[1] + r * Math.sin(a), x2 = BC[0] + (r - 8) * Math.cos(a + .25), y2 = BC[1] + (r - 8) * Math.sin(a + .25);
      mk += `M${f1(x1)},${f1(y1)}L${f1(x2)},${f1(y2)}`;
    });
    q('marks').setAttribute('d', mk);
    const film = run ? 1 : seg(t, 2.6, 3.4);
    const ra = 35.4, A = .62, B = A + (Math.PI / 2 - A) * film;
    q('film').setAttribute('d', film > .02 ? `M${f1(BC[0] + ra * Math.cos(A))},${f1(BC[1] + ra * Math.sin(A))}A${ra},${ra} 0 0 1 ${f1(BC[0] + ra * Math.cos(B))},${f1(BC[1] + ra * Math.sin(B))}` : '');
    const rollOn = run ? 0 : seg(t, 3.4, 3.8) * (1 - seg(t, 6.6, 7));
    q('move').setAttribute('opacity', f1(run ? 1 : rollOn));
  }
});
}
