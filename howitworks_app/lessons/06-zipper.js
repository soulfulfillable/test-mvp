{
/* 3. Zipper */
LESSONS.push({
  key: 'zipper', title: 'Zipper', cat: 'Home', mins: 3, vb: [360, 280],
  summary: 'The slider is a wedge with a Y-shaped channel. Going up, it presses two rows of hooked teeth together so each bump locks into the hollow across; going down, it pries them apart.',
  parts: [
    { n: 1, name: 'Teeth', at: [100, 238], num: [24, 244], desc: 'Each tooth has a bump on top and a hollow underneath. The two rows are offset by half a tooth, so each tooth fits between two across from it.' },
    { n: 2, name: 'Tape', at: [72, 190], num: [24, 190], desc: 'The fabric strips the teeth are clamped onto — the part that gets sewn into your jacket or bag.' },
    { n: 3, name: 'Slider', at: [128, 128], num: [184, 106], desc: 'Inside is a Y-shaped channel. Pull up, and its two arms squeeze the rows together. Pull down, and the wedge in the middle splits them.' },
    { n: 4, name: 'Pull tab', at: [118, 180], num: [184, 184], desc: 'The handle you grab. Some sliders have a small pin that locks them in place when the tab is folded down.' },
    { n: 5, name: 'Stops', at: [120, 270], num: [184, 266], desc: 'Small metal stops at the ends keep the slider from running off the teeth.' },
    { n: 6, name: 'Bump & hollow', at: [272, 136], num: [340, 226], desc: 'Seen from the side (zoomed): each bump nests in the hollow of the tooth above it from the other side. Pulled straight apart they hold — only bending them at an angle, which the slider does, lets them go.' },
  ],
  steps: [
    { text: 'The teeth on the two sides are offset by half a tooth.', parts: [1], t: [0, 1.5] },
    { text: 'Pull the tab up: the slider’s Y-shaped channel steers the two rows together at an angle.', parts: [3, 4], t: [1.5, 3] },
    { text: 'Each tooth’s bump drops into the hollow under the tooth across. Now they’re hooked and won’t pull apart sideways.', parts: [6], t: [3, 4.5] },
    { text: 'Pull down, and the wedge inside the slider bends them apart one by one.', parts: [3], t: [4.5, 7] },
  ],
  dur: 7,
  why: 'Why offset the teeth? With the rows shifted half a tooth, every tooth sits between two teeth across, so the pull is shared along the zipper — and one slider can lock hundreds of teeth in a single smooth pull.',
  fact: 'It wasn’t called a “zipper” until 1923, when B.F. Goodrich put Gideon Sundback’s fastener on rubber boots and named them for the zip sound. Sundback’s patent dates to 1917.',
  quiz: {
    q: 'Why don’t the teeth come apart when you pull the two sides straight apart?',
    opts: ['Each tooth’s bump is hooked into the hollow of the tooth across', 'The teeth are slightly magnetic', 'The slider keeps squeezing every tooth'],
    a: 0,
    why: 'Pulled straight sideways, every bump is trapped in a hollow. The rows only release when they’re bent to an angle — exactly what the wedge in the slider does.'
  },
  sources: [
    ['Zipper — Wikipedia', 'https://en.wikipedia.org/wiki/Zipper'],
    ['Gideon Sundback — Wikipedia', 'https://en.wikipedia.org/wiki/Gideon_Sundback'],
    ['How do zippers work? — Explain that Stuff', 'https://www.explainthatstuff.com/zippers.html'],
  ],
  art(p) {
    // side view of interlocking teeth (zoomed)
    let side = '';
    for (let i = 0; i < 6; i++) {
      const top = 104 + i * 16, bot = top + 16, L = i % 2 === 0;
      const x0 = L ? 214 : 258, x1 = L ? 286 : 330;
      side += `<path d="M${x0},${top}H267A5,5 0 0 1 277,${top}H${x1}V${bot}H277A5,5 0 0 0 267,${bot}H${x0}Z" class="ink" fill="${L ? '#fff' : '#e6e8eb'}"/>`;
    }
    return `
    <g data-part="2"><path id="${p}tapeL" fill="url(#${p}fabric)" class="ink"/><path id="${p}tapeR" fill="url(#${p}fabric)" class="ink"/></g>
    <g data-part="1"><path id="${p}teeth" class="ink fm"/></g>
    <g data-part="5"><path id="${p}stops" class="ink" fill="#c9ccd1"/><rect x="99" y="265" width="22" height="8" rx="1.5" class="ink" fill="#c9ccd1"/></g>
    <g data-part="3"><path id="${p}slider" class="ink fm"/><path id="${p}chan" class="ink thin" stroke-dasharray="2.5 2"/></g>
    <g data-part="4"><path id="${p}tab" class="ink fw"/></g>
    <g class="zoom"><circle cx="110" cy="226" r="11" class="ink thin" stroke-dasharray="2 2"/>
      <path d="M119,219L205,170M121,230L210,192" class="ink thin" stroke-dasharray="2 2"/>
      <text x="272" y="236" class="hand" text-anchor="middle">side view, zoomed</text></g>
    <g data-part="6"><circle cx="272" cy="150" r="66" class="fw"/>
      <g clip-path="url(#${p}zc)">${side}</g>
      <circle cx="272" cy="150" r="66" class="ink"/>
      </g>
    <clipPath id="${p}zc"><circle cx="272" cy="150" r="65"/></clipPath>`;
  },
  anim(svg, p, t) {
    const q = id => svg.querySelector('#' + p + id);
    const sT = t == null ? 118 : 150 - 100 * Math.sin(Math.PI * Math.min(1, t / 7));
    const k = .26, base = 5;
    const off = y => (y < sT ? base + (sT - y) * k : 0);
    let teeth = '', ptsL = [], ptsR = [];
    for (let y = 16; y <= 262; y += 6) {
      const left = ((y - 16) / 6) % 2 === 0, o = off(y);
      if (y > sT - 2 && y < sT + 46) { ptsL.push([110 - o, y]); ptsR.push([110 + o, y]); continue; }
      if (left) { const x0 = 97 - o; teeth += `M${f1(x0)},${y - 2.6}H${f1(x0 + 12)}Q${f1(x0 + 16.5)},${y} ${f1(x0 + 12)},${y + 2.6}H${f1(x0)}Z`; }
      else { const x0 = 123 + o; teeth += `M${f1(x0)},${y - 2.6}H${f1(x0 - 12)}Q${f1(x0 - 16.5)},${y} ${f1(x0 - 12)},${y + 2.6}H${f1(x0)}Z`; }
      ptsL.push([110 - o, y]); ptsR.push([110 + o, y]);
    }
    q('teeth').setAttribute('d', teeth);
    const tape = (pts, s) => {
      const top = pts[0][1] - 8;
      let d = `M${f1(pts[0][0] - s * 9)},${top}`;
      pts.forEach(([x, y]) => d += `L${f1(x - s * 9)},${y}`);
      d += `L${f1(pts[pts.length - 1][0] - s * 9)},280H${f1(pts[pts.length - 1][0] - s * 58)}`;
      for (let i = pts.length - 1; i >= 0; i--) d += `L${f1(pts[i][0] - s * 58)},${pts[i][1]}`;
      return d + `L${f1(pts[0][0] - s * 58)},${top}Z`;
    };
    q('tapeL').setAttribute('d', tape(ptsL, 1)); q('tapeR').setAttribute('d', tape(ptsR, -1));
    const oT = off(16);
    q('stops').setAttribute('d', `M${f1(98 - oT)},5h12v6h-12z M${f1(110 + oT)},5h12v6h-12z`);
    const y = sT;
    q('slider').setAttribute('d', `M88,${f1(y)}H132L126,${f1(y + 44)}H94Z`);
    q('chan').setAttribute('d', `M98,${f1(y + 1)}L105,${f1(y + 22)}V${f1(y + 43)} M122,${f1(y + 1)}L115,${f1(y + 22)}V${f1(y + 43)} M104,${f1(y + 1)}L110,${f1(y + 17)}L116,${f1(y + 1)}`);
    q('tab').setAttribute('d', `M106,${f1(y + 30)}h8v6h-8z M101,${f1(y + 36)}H119L117,${f1(y + 82)}Q110,${f1(y + 86)} 103,${f1(y + 82)}Z M107,${f1(y + 66)}h6v10h-6z`);
    return { 3: [128, f1(y + 10)], 4: [117, f1(y + 60)], 2: [f1(72 - off(190) * .9), 190] };
  }
});
}
