{
/* 30. Barcode scanner */
// real UPC-A modules for 0 36000 24145 7 (the tissue-box example; check digit 7)
const BC_DIG = '036000241457';
const BC_L = ['0001101', '0011001', '0010011', '0111101', '0100011', '0110001', '0101111', '0111011', '0110111', '0001011'];
const BC_BITS = '101' + [...BC_DIG.slice(0, 6)].map(d => BC_L[d]).join('') + '01010'
  + [...BC_DIG.slice(6)].map(d => BC_L[d].replace(/./g, c => c === '1' ? '0' : '1')).join('') + '101';
const BC_X0 = 150, BC_M = 2;                     // bars start x, module width
const BC_DX = i => BC_X0 + BC_M * ((i < 6 ? 3 + 7 * i : 50 + 7 * (i - 6)) + 3.5);
const BC_BIT = x => { const m = Math.floor((x - BC_X0) / BC_M); return m >= 0 && m < 95 ? BC_BITS[m] === '1' : false; };
const BC_MIR = [112, 220];
LESSONS.push({
  key: 'barcode-scanner', title: 'Barcode Scanner', cat: 'Digital', mins: 3, vb: [360, 270],
  summary: 'A laser bounces off a spinning mirror and sweeps across the bars. White spaces reflect it; black bars soak it up. A light sensor turns those flashes into a signal, and a chip reads the bar widths as digits.',
  parts: [
    { n: 1, name: 'Barcode (UPC-A)', at: [148, 104], num: [122, 104], desc: 'Twelve digits drawn as 30 black bars. Every digit takes the same width — seven narrow units, split into two bars and two spaces. Longer guard bars mark the start, middle and end.' },
    { n: 2, name: 'Laser diode', at: [30, 214], num: [30, 172], desc: 'Makes the thin red beam. Some scanners skip the laser and use a camera with LEDs instead, photographing the whole code at once.' },
    { n: 3, name: 'Spinning mirror', at: [126, 228], num: [168, 234], desc: 'A many-sided mirror turned by a small motor. Each face that passes the beam swings it across the label, so the laser draws its scan line over and over.' },
    { n: 4, name: 'Photodiode', at: [86, 204], num: [64, 174], desc: 'A light sensor that turns brightness into voltage. White spaces bounce the red light back and black bars absorb it, so the voltage jumps high and low as the beam crosses.' },
    { n: 5, name: 'Decoder chip', at: [62, 243], num: [90, 246], desc: 'Measures how long each high and low lasts, compares the widths, and turns every group of two bars and two spaces into a digit. The register then looks up the price.' },
    { n: 6, name: 'Check digit', at: [333, 168], num: [334, 192], desc: 'The last digit isn’t part of the product number. It is computed from the other eleven, so a single misread digit always fails the math and the scanner won’t beep.' },
  ],
  steps: [
    { text: 'The laser fires at a spinning mirror. Each mirror face swings the beam across the label, sweeping the bars many times a second.', parts: [2, 3], t: [0, 2] },
    { text: 'In slow motion: white spaces reflect the light back, black bars absorb it. The photodiode turns that into a signal that jumps high and low.', parts: [1, 4, 3], t: [2, 4.6] },
    { text: 'The decoder measures the widths. Every seven units — two bars and two spaces — is one digit.', parts: [5, 4], t: [4.6, 6.5] },
    { text: 'It runs the math on the first eleven digits. If the answer matches the last one, beep — the register looks up the item.', parts: [6], t: [6.5, 8] },
  ],
  dur: 8,
  why: 'Why do all digits take the same width? The scanner can’t know how fast the beam crosses the label, so it compares widths instead of measuring them. And left-half and right-half digits are coded differently, so the code reads even upside down.',
  fact: 'The first product scanned at a store checkout with a UPC was a multi-pack of Wrigley’s Juicy Fruit gum, at a Marsh supermarket in Troy, Ohio, on June 26, 1974. One of that store’s first scanners is now in the Smithsonian.',
  quiz: {
    q: 'What is the last digit of a UPC barcode for?',
    opts: ['It holds the price of the item', 'It says which country made the product', 'It’s a check: math on the other digits must produce it'],
    a: 2,
    why: 'The price isn’t in the barcode at all — the register looks it up. The 12th digit is computed from the first 11; if the scanner’s math doesn’t match, it knows it misread and tries again.'
  },
  sources: [
    ['Universal Product Code — Wikipedia', 'https://en.wikipedia.org/wiki/Universal_Product_Code'],
    ['Barcode reader — Wikipedia', 'https://en.wikipedia.org/wiki/Barcode_reader'],
    ['What is a UPC Code? — GS1 US', 'https://www.gs1us.org/upcs-barcodes-prefixes/guide-to-upcs'],
    ['The History of the Bar Code — Smithsonian Magazine', 'https://www.smithsonianmag.com/innovation/history-bar-code-180956704/'],
    ['Supermarket Scanner — Smithsonian National Museum of American History', 'https://americanhistory.si.edu/collections/object/nmah_892778'],
  ],
  art(p) {
    let bars = '', run = -1;
    const guard = m => m < 3 || (m >= 45 && m < 50) || m >= 92;
    for (let m = 0; m <= 95; m++) {
      const on = m < 95 && BC_BITS[m] === '1';
      if (on && run < 0) run = m;
      if (!on && run >= 0) { bars += `<rect x="${BC_X0 + run * BC_M}" y="78" width="${(m - run) * BC_M}" height="${guard(run) ? 82 : 74}" fill="#24272c"/>`; run = -1; }
    }
    let tr = 'M142,36H' + BC_X0;
    for (let m = 0; m < 95; m++) { const y = BC_BITS[m] === '1' ? 58 : 36; tr += `V${y}H${BC_X0 + (m + 1) * BC_M}`; }
    tr += 'V36H346';
    let digs = '';
    [...BC_DIG].forEach((d, i) => digs += `<text id="${p}d${i}" x="${BC_DX(i)}" y="24" class="hand" text-anchor="middle" style="fill:#24272c;font-size:11px">${d}</text>`);
    const hex = [...Array(6)].map((_, k) => { const a = k * Math.PI / 3; return `${f1(13 * Math.cos(a))},${f1(13 * Math.sin(a))}`; }).join('L');
    return `
    <g class="shell">
      <path d="M8,186H70V190H12V254H208V190H206V186H212V258H8Z" fill="url(#${p}hatch)" class="ink"/>
      <path d="M70,187.5H206" class="ink thin"/><path d="M78,189L84,185M150,189L156,185" class="ink thin"/>
      <path d="M${BC_MIR[0]},${BC_MIR[1] - 12}L146,140M${BC_MIR[0]},${BC_MIR[1] - 12}L344,140" class="ink thin" stroke-dasharray="2 3" opacity=".6"/>
      <text x="134" y="27" class="hand" text-anchor="end">decoder output</text>
      <text x="134" y="44" class="hand" text-anchor="end">photodiode</text><text x="134" y="55" class="hand" text-anchor="end">signal</text>
      
      <rect x="114" y="234" width="12" height="16" class="ink thin fm"/>
      <path d="M78,214V243H62" class="ink thin"/></g>
    <g data-part="1"><rect x="140" y="70" width="212" height="98" rx="2" class="ink thin fw"/>${bars}</g>
    <g data-part="5"><rect x="30" y="236" width="32" height="14" rx="1" class="ink fm"/><path d="M34,236V233M40,236V233M46,236V233M52,236V233M58,236V233" class="ink thin"/>
      <g id="${p}digs">${digs}</g></g>
    <g data-part="6"><path d="M327,163V166H339V163" class="ink thin"/>
      <circle id="${p}ck" cx="${BC_DX(11)}" cy="20" r="8" class="energy" stroke-width="1.2"/>
    <text id="${p}ok" x="250" y="186" class="hand" text-anchor="middle" style="fill:#D63A2A">math checks out: beep</text>
    </g>
    <g data-part="2"><rect x="18" y="214" width="22" height="12" rx="2" class="ink fm"/><rect x="40" y="216.5" width="5" height="7" class="ink thin fw"/>
      <path d="M22,226V232M30,226V232" class="ink thin"/></g>
    <g data-part="4"><path d="M72,214V208A8,8 0 0 1 88,208V214Z" class="ink fw"/><path d="M76,214V218M84,214V218" class="ink thin"/>
      <path d="M70,198Q80,193 90,198Q80,203 70,198Z" class="ink thin fw"/>
    <clipPath id="${p}tc"><rect id="${p}tcr" x="138" y="28" width="214" height="36"/></clipPath>
    <path d="${tr}" class="energy" stroke-width="1.1" clip-path="url(#${p}tc)"/>
    <path id="${p}ret" class="energy" stroke-width=".9" stroke-dasharray="3 2"/>
    </g>
    <g data-part="3">
    <path id="${p}beam" class="energy" stroke-width="1.6"/>
    <circle id="${p}spot" r="3" fill="#D63A2A"/>
    <path id="${p}mir" d="M${hex}Z" class="ink fm"/><circle cx="${BC_MIR[0]}" cy="${BC_MIR[1]}" r="2" class="ink thin fw"/></g>`;
  },
  anim(svg, p, t) {
    const q = id => svg.querySelector('#' + p + id);
    let rot, tw = 214, dn = 12, ck = 1, ok = 0, spotOn = 1;
    if (t == null) rot = 360 + 60 * .55;
    else {
      rot = t < 2 ? t * 180 : t < 4.6 ? 360 + 60 * (t - 2) / 2.6 : 420 + (t - 4.6) * 180;
      tw = t < 2 ? 0 : t < 4.6 ? 6 + 208 * (t - 2) / 2.6 : 214;
      dn = t < 4.6 ? 0 : Math.min(12, Math.floor((t - 4.6) / .14) + 1);
      ck = seg(t, 6.5, 6.9); ok = seg(t, 6.9, 7.2);
    }
    const fr = (rot % 60) / 60, sx = 146 + 198 * fr, sy = 140;
    q('mir').setAttribute('transform', `translate(${BC_MIR[0]} ${BC_MIR[1]}) rotate(${f1(rot)})`);
    const ox = BC_MIR[0], oy = BC_MIR[1] - 12;
    q('beam').setAttribute('d', `M45,220H${ox - 12}L${ox},${oy}L${f1(sx)},${sy}`);
    q('spot').setAttribute('cx', f1(sx)); q('spot').setAttribute('cy', sy); q('spot').setAttribute('opacity', spotOn);
    const bright = !BC_BIT(sx);
    q('ret').setAttribute('d', `M${f1(sx)},${sy}L80,199`);
    q('ret').setAttribute('opacity', bright ? .9 : .12);
    q('tcr').setAttribute('width', f1(tw));
    for (let i = 0; i < 12; i++) q('d' + i).setAttribute('opacity', i < dn ? 1 : 0);
    q('ck').setAttribute('opacity', f1(ck));
    q('ok').setAttribute('opacity', f1(ok));
  }
});
}
