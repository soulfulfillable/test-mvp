{
/* 14. Touchscreen (projected capacitive) */
const TS_COLS = [50, 72, 94, 116, 138, 160];   // top view, drive columns
const TS_ROWS = [30, 50, 70, 90, 110];         // top view, sense rows
const TS_SEC = [52, 100, 148, 196, 244, 292];  // same columns, cut in section A-A
LESSONS.push({
  key: 'touchscreen', title: 'Touchscreen', cat: 'Digital', mins: 3, vb: [360, 270],
  summary: 'Under the glass is an invisible grid of electrodes. A chip measures the electric coupling at every crossing, many times a second. Your finger steals a little of that field, and the crossing where it drops is your touch.',
  parts: [
    { n: 1, name: 'Cover glass', at: [52, 166], num: [36, 146], desc: 'The tough outer glass you actually touch. It is thin enough that the electric field from the grid reaches up through it to your finger.' },
    { n: 2, name: 'Electrode grid', at: [32, 100], num: [14, 100], desc: 'Rows and columns of indium tin oxide (ITO) — a metal oxide that conducts electricity but is see-through. Every place a row crosses a column is a sensing point.' },
    { n: 3, name: 'Insulating layer', at: [314, 186], num: [342, 186], desc: 'A thin clear layer keeps the rows and columns from touching. Each crossing becomes a tiny capacitor: two conductors with an insulator between them.' },
    { n: 4, name: 'Controller chip', at: [250, 52], num: [276, 30], desc: 'Pulses the columns one by one and listens on the rows, measuring the coupling at every crossing. Where it drops, the chip works out the x, y position.' },
    { n: 5, name: 'Display', at: [314, 222], num: [342, 222], desc: 'The LCD or OLED screen sits underneath. Because the grid is transparent, you see the picture straight through the touch layer.' },
    { n: 6, name: 'Your finger', at: [282, 100], num: [326, 118], desc: 'Your body conducts electricity. Near the grid, your fingertip draws away part of the electric field at the crossing beneath it. Most ordinary gloves block this, which is why they don’t work.' },
  ],
  steps: [
    { text: 'The controller chip pulses one column at a time and listens on every row, measuring the tiny capacitance at each crossing, over and over.', parts: [4, 2], t: [0, 2] },
    { text: 'Your finger lands on the glass. The field from the grid reaches up through the thin glass into your fingertip.', parts: [6, 1], t: [2, 4] },
    { text: 'At the crossing under your finger, part of the field is pulled away, so the capacitance there drops. That node stands out from all the others.', parts: [2, 3, 6], t: [4, 6] },
    { text: 'The chip compares neighboring nodes to pinpoint the touch between them, then sends the x, y position to the phone, which updates the display underneath.', parts: [4, 5], t: [6, 8] },
  ],
  dur: 8,
  why: 'Why a grid of rows and columns? Measuring each crossing separately means the chip sees every finger at once, which is what makes pinch-to-zoom possible. And the grid needs no pressure — no moving layers to wear out.',
  fact: 'The first finger-driven touchscreen was described in 1965 by E. A. Johnson at Britain’s Royal Radar Establishment in Malvern. It was capacitive, like the one in your phone, and was built for air traffic control.',
  quiz: {
    q: 'Why doesn’t a capacitive screen respond to a fingernail or an ordinary glove?',
    opts: ['They are too light to press the glass down', 'They are too cold for the sensors', 'They don’t conduct, so they can’t draw away the electric field'],
    a: 2,
    why: 'The screen senses touch by electricity, not pressure. Skin conducts and pulls away part of the field at a crossing; a nail or wool glove is an insulator, so the grid doesn’t notice it.'
  },
  sources: [
    ['Touchscreen — Wikipedia', 'https://en.wikipedia.org/wiki/Touchscreen'],
    ['Indium tin oxide — Wikipedia', 'https://en.wikipedia.org/wiki/Indium_tin_oxide'],
    ['How does a projected capacitive touch panel work? — MicroTouch', 'https://microtouch.com/faq/'],
    ['Capacitive touch sensing (3M) — MIT 6.200 course notes', 'https://circuits.mit.edu/_static/S25/labs/rc/3m_capsense.pdf'],
  ],
  art(p) {
    let strips = '', rows = '', fan = '', bus = '';
    TS_COLS.forEach(x => { strips += `<rect x="${x - 3.5}" y="18" width="7" height="104" rx="2" class="ink thin fm"/>`; bus += `M${x},18V8`; });
    TS_ROWS.forEach((y, j) => { rows += `M34,${y}H180`; fan += `M180,${y}C192,${y} 196,${58 + j * 6} 206,${58 + j * 6}`; });
    let cuts = '';
    TS_SEC.forEach(x => cuts += `<rect x="${x - 7}" y="180" width="14" height="3" class="ink thin" fill="#9aa0a8"/>`);
    let glints = '';
    for (let x = 44; x < 300; x += 46) glints += `M${x},176L${x + 8},168`;
    let pins = '';
    for (let y = 56; y <= 84; y += 6) pins += `M206,${y}H210M250,${y}H254`;
    for (let x = 216; x <= 244; x += 7) pins += `M${x},46V50M${x},90V94`;
    let px = '';
    for (let x = 30; x < 312; x += 8) px += `<rect x="${x}" y="203" width="6" height="7" class="ink thin fw"/>`;
    return `
    <g class="shell">
      <rect x="30" y="14" width="150" height="112" rx="6" class="ink fw"/>
      <path d="M20,160H28V248H314V160H322V256H20Z" fill="url(#${p}hatch)" class="ink"/>
      <path d="M16,70H184" class="ink thin" stroke-dasharray="5 3"/><path d="M16,70V78M13,75L16,79L19,75M184,70V78M181,75L184,79L187,75" class="ink thin"/>
      <text x="16" y="64" class="hand" text-anchor="middle">A</text><text x="186" y="64" class="hand" text-anchor="middle">A</text>
      <text x="105" y="140" class="hand" text-anchor="middle">top view</text>
      <text x="320" y="156" class="hand" text-anchor="end">section A–A</text>
      <path d="${bus}M50,8H230V46" class="ink thin"/>
      <path d="${fan}" class="ink thin"/></g>
    <g data-part="1"><rect x="28" y="164" width="286" height="16" class="ink fw"/><path d="${glints}" class="ink thin"/></g>
    <g data-part="3"><rect x="28" y="183" width="286" height="6" class="ink thin fm"/></g>
    <g data-part="2">${strips}<path d="${rows}" class="ink" stroke-width="1"/>${cuts}
      <rect x="28" y="189" width="286" height="3" class="ink thin" fill="#9aa0a8"/>
    <rect id="${p}scan" x="0" y="15" width="11" height="110" rx="3" class="energy"/>
    <circle id="${p}touch" cx="116" cy="70" r="13" class="ink thin" stroke-dasharray="3 2"/>
    <g id="${p}node"><circle cx="116" cy="70" r="4.5" fill="#D63A2A"/><circle cx="116" cy="70" r="8" class="energy"/></g>
    <path id="${p}field" class="energy" stroke-width="1"/>
    </g>
    <g data-part="5"><rect x="28" y="200" width="286" height="36" class="ink fw"/>${px}
      <rect id="${p}px" x="182" y="203" width="28" height="7" fill="#24272c" opacity=".8"/>
      <text x="171" y="228" class="hand" text-anchor="middle">LCD or OLED display</text></g>
    <g data-part="4"><path d="${pins}" class="ink thin"/><rect x="210" y="50" width="40" height="40" rx="2" class="ink fm"/>
      <rect x="219" y="59" width="22" height="22" class="ink thin fw"/>
    <g id="${p}xy" style="fill:#D63A2A"><text x="258" y="66" class="hand" style="fill:#D63A2A">touch at</text><text x="258" y="80" class="hand" style="fill:#D63A2A">col 4, row 3</text></g>
    </g>
    <g data-part="6"><g id="${p}finger">
      <g transform="translate(196 151) rotate(-32)">
        <path d="M106,-14H0A14,14 0 0 0 0,14H106" class="ink" fill="#fff"/>
        <path d="M106,-14l-4,7l6,7l-6,7l4,7" class="ink thin"/>
        <path d="M4,-13Q10,-8 24,-8H34" class="ink thin"/></g></g></g>`;
  },
  anim(svg, p, t) {
    const q = id => svg.querySelector('#' + p + id);
    let col = 3, k = 1, fin = 1, node = 1, xy = 1, px = 1, scan = 1;
    if (t != null) {
      col = Math.floor(t / .26) % 6;
      fin = seg(t, 2, 3.4);
      k = seg(t, 3.2, 4.4);
      const lit = col === 3 ? 1 : .45;
      node = k > .5 ? lit * seg(t, 4.2, 4.6) : 0;
      xy = seg(t, 6.2, 6.8);
      px = seg(t, 6.8, 7.3);
    }
    const x = TS_COLS[col];
    q('scan').setAttribute('x', x - 5.5); q('scan').setAttribute('opacity', scan);
    // finger slides in along its own axis
    const off = (1 - fin) * 46;
    q('finger').setAttribute('transform', `translate(${f1(off * .85)} ${f1(-off * .53)})`);
    q('finger').setAttribute('opacity', f1(Math.min(1, fin * 2.5)));
    q('touch').setAttribute('opacity', f1(fin > .95 ? 1 : 0));
    q('node').setAttribute('opacity', f1(node));
    q('xy').setAttribute('opacity', f1(xy));
    q('px').setAttribute('opacity', f1(px * .8));
    // field lines from each cut column end: inner loops stay, outer loops bend up into the finger at column 4
    let d = '';
    [100, 196].forEach(cx => [-1, 1].forEach(s => {
      d += `M${cx + s * 5},180C${cx + s * 5},175 ${cx + s * 15},175 ${cx + s * 15},189`;
      const kk = cx === 196 ? k : 0;
      const ty = 166 + 6 * kk, xe = cx + s * (27 - 17 * kk), ye = 189 - 24 * kk;
      d += `M${cx + s * 7},180C${f1(cx + s * 7)},${f1(ty)} ${f1(xe)},${f1(ty)} ${f1(xe)},${f1(ye)}`;
    }));
    q('field').setAttribute('d', d);
    return { 6: [f1(282 + off * .85), f1(100 - off * .53)] };
  }
});
}
