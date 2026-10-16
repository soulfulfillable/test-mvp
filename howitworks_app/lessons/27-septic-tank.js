{
/* 27. Septic system */
const SEP_HOLES = [254, 270, 286, 302, 318, 334, 348];
// where a bit of waste is at age tau (seconds since it left the house)
const SEP_POS = (grease, xd, tau) => {
  if (tau < .7) { const u = tau / .7; return [30 + 59 * u, 95 + 9.5 * u]; }
  if (tau < 1.1) { const u = (tau - .7) / .4; return [89, 104.5 + 34 * u]; }
  const u = ease(Math.min(1, (tau - 1.1) / 1.6));
  return [89 + (xd - 89) * u, 138 + ((grease ? 117 : 184) - 138) * u];
};
LESSONS.push({
  key: 'septic-tank', title: 'Septic System', cat: 'Bathroom', mins: 3, vb: [360, 260],
  summary: 'A septic tank is a buried settling box. Solids sink, grease floats, and bacteria slowly digest the waste. The clearer liquid in the middle flows out to a drain field, where the soil finishes cleaning it.',
  parts: [
    { n: 1, name: 'House drain', at: [52, 104], num: [46, 140], desc: 'Toilets, sinks, showers and the washer all empty into one pipe that slopes gently down from the house to the tank. Gravity does the work.' },
    { n: 2, name: 'Inlet tee', at: [89, 92], num: [84, 34], desc: 'A T-shaped pipe (or baffle) at the inlet. It aims incoming water down into the tank so it won’t churn up the floating scum or rush straight across.' },
    { n: 3, name: 'Scum layer', at: [148, 118], num: [148, 34], desc: 'Fats, oils, grease and other light bits float to the top and form a crust. It stays in the tank until the tank is pumped.' },
    { n: 4, name: 'Sludge layer', at: [148, 190], num: [148, 232], desc: 'Heavy solids settle to the bottom. Bacteria that live without oxygen digest part of it, but the rest builds up — which is why tanks need pumping every few years.' },
    { n: 5, name: 'Outlet tee & filter', at: [196, 100], num: [208, 34], desc: 'Draws liquid from the clear middle zone, below the scum and above the sludge. Many tanks add a screen filter here to catch small solids that could clog the drain field.' },
    { n: 6, name: 'Drain field', at: [300, 100], num: [300, 34], desc: 'Perforated pipes in gravel-filled trenches spread the liquid over a wide area. As it soaks down, the soil filters it and microbes remove harmful bacteria, viruses and nutrients.' },
  ],
  steps: [
    { text: 'Everything from your drains flows down one pipe into the tank. The inlet tee points it downward so it doesn’t stir up the floating layer.', parts: [1, 2], t: [0, 2.2] },
    { text: 'In the still tank, heavy solids sink into sludge while grease and oil float up as scum. Bacteria slowly break the solids down, giving off gas.', parts: [3, 4], t: [2.2, 4.6] },
    { text: 'Clearer liquid from the middle enters the outlet tee below the scum, passes the filter, and flows out to the drain field.', parts: [5], t: [4.6, 6.8] },
    { text: 'It trickles out of holes in pipes laid in gravel and soaks into the soil, which filters out germs and nutrients before the water reaches groundwater.', parts: [6], t: [6.8, 9] },
  ],
  dur: 9,
  why: 'Why a big, still tank? Waste needs time to separate. Slowed almost to a stop, solids sink and grease rises, and only the clearer middle layer moves on — so the drain field’s soil isn’t clogged with solids.',
  fact: 'More than one in five U.S. households rely on a septic system instead of a city sewer — from about 55% of homes in Vermont to about 10% in California. The EPA says a typical household tank should be pumped every 3 to 5 years.',
  quiz: {
    q: 'Why does the outlet tee draw liquid from the middle of the tank?',
    opts: ['The middle is where the water is warmest', 'It’s the clearest layer — scum floats above and sludge sits below', 'It keeps the tank from overflowing in storms'],
    a: 1,
    why: 'Grease floats to the top and solids sink to the bottom. Taking liquid from the middle keeps both in the tank, so only the clearest water goes on to the drain field.'
  },
  sources: [
    ['Septic tank — Wikipedia', 'https://en.wikipedia.org/wiki/Septic_tank'],
    ['How Septic Systems Work — U.S. EPA', 'https://www.epa.gov/septic/how-septic-systems-work'],
    ['How to Care for Your Septic System — U.S. EPA', 'https://www.epa.gov/septic/how-care-your-septic-system'],
    ['About Septic Systems — U.S. EPA', 'https://www.epa.gov/septic/about-septic-systems'],
    ['Septic System Basics — Penn State Extension', 'https://extension.psu.edu/septic-system-basics'],
  ],
  art(p) {
    let ticks = '';
    for (let x = 30; x < 360; x += 9) if (!(x > 108 && x < 134) && !(x > 156 && x < 182)) ticks += `M${x},60l-4,5`;
    let scum = '', sludge = '', gravel = '';
    for (let x = 84; x < 206; x += 7) scum += `<ellipse cx="${x + (x % 3)}" cy="${117 + (x % 5) - 2}" rx="2.6" ry="1.5" class="ink thin fw"/>`;
    for (let x = 83; x < 208; x += 5) for (let y = 176; y < 198; y += 6) sludge += `<circle cx="${x + ((y / 6) % 2) * 2.5}" cy="${y}" r="1" fill="#5a5f66"/>`;
    for (let x = 244; x < 356; x += 8) for (let y = 104; y < 134; y += 7) if (y < 108 || y > 122) gravel += `<circle cx="${x + ((y / 7) % 2) * 4}" cy="${y}" r="2.6" class="ink thin fw"/>`;
    let holes = '';
    SEP_HOLES.forEach(x => holes += `<circle cx="${x}" cy="116" r="1.3" fill="#24272c"/>`);
    return `
    <g class="shell">
      <path d="M0,60H360" class="ink"/><path d="${ticks}" class="ink thin"/>
      <path d="M0,8H24V120H0Z" fill="url(#${p}hatch)" class="ink"/><path d="M24,8V60" class="ink"/>
      <text x="4" y="134" class="hand">house</text>
      <path d="M72,72H216V206H72Z M79,79V199H209V79Z" fill-rule="evenodd" fill="url(#${p}hatch)" class="ink"/>
      <path d="M110,60V72M114,60V72M130,60V72M134,60V72M158,60V72M162,60V72M178,60V72M182,60V72" class="ink thin"/>
      <rect x="110.5" y="60" width="3" height="12" fill="url(#${p}hatch)"/><rect x="130.5" y="60" width="3" height="12" fill="url(#${p}hatch)"/>
      <rect x="158.5" y="60" width="3" height="12" fill="url(#${p}hatch)"/><rect x="178.5" y="60" width="3" height="12" fill="url(#${p}hatch)"/>
      <rect x="114" y="61" width="16" height="11" fill="url(#${p}grid)"/><rect x="162" y="61" width="16" height="11" fill="url(#${p}grid)"/>
      <rect x="106" y="56" width="32" height="4" rx="1" class="ink fw"/><rect x="154" y="56" width="32" height="4" rx="1" class="ink fw"/>
      <rect x="79.5" y="79.5" width="129" height="32" fill="url(#${p}grid)"/>
      <rect x="79.5" y="112" width="129" height="87" class="water"/>
      <text x="144" y="152" class="hand" text-anchor="middle">clear liquid</text>
      <path d="M216,107.5L242,110.5V118.5L216,115.5Z" fill="url(#${p}grid)" class="ink"/>
      <path d="M0,238H360" class="wline" stroke-dasharray="6 3"/><text x="356" y="252" class="hand" text-anchor="end">groundwater</text></g>
    <g data-part="3"><rect x="79.5" y="112" width="129" height="11" fill="#dfe1e4"/>${scum}</g>
    <g data-part="4"><rect x="79.5" y="171" width="129" height="28" fill="#c3c7cc"/>${sludge}</g>
    <path d="M79.5,112H208.5" class="wline"/>
    <g data-part="1"><path d="M24,90L79,100V108L24,98Z" fill="url(#${p}grid)" class="ink"/>
      <path id="${p}fin" d="M26,94L86,104.5" class="flow" stroke-dasharray="5 4"/></g>
    <g data-part="2"><path d="M84,92V140H94V92Z" fill="url(#${p}grid)" class="ink"/><path d="M79,100H84M79,108H84" class="ink"/>
      <path id="${p}fdown" d="M89,108V136M86,132L89,137L92,132" class="flow"/></g>
    <g data-part="5"><path d="M186,98V152H200V98Z" fill="url(#${p}grid)" class="ink"/><path d="M200,107.5H216M200,115.5H216" class="ink"/>
      <rect x="188.5" y="118" width="9" height="32" class="ink thin fw"/><path d="M188.5,122H197.5M188.5,126H197.5M188.5,130H197.5M188.5,134H197.5M188.5,138H197.5M188.5,142H197.5M188.5,146H197.5" class="ink thin"/>
      <path id="${p}fout" d="M193,160V112H244L350,114" class="flow" stroke-dasharray="5 4"/></g>
    <g data-part="6"><rect x="240" y="100" width="116" height="36" fill="#f4f5f6" class="ink thin" stroke-dasharray="3 2"/>${gravel}
      <path d="M242,110H356V118H242Z" fill="url(#${p}grid)" class="ink"/>${holes}
      <path id="${p}drip" class="flow" stroke-width="1.2"/>
      <path id="${p}soak" class="wline" stroke-dasharray="4 3"/>
      <text x="298" y="194" class="hand" text-anchor="middle">soil filters the water</text></g>
    <g style="opacity:1"><g id="${p}gas"></g><g id="${p}bits"></g></g>`;
  },
  anim(svg, p, t) {
    const q = id => svg.querySelector('#' + p + id);
    const off = t == null ? 0 : -t * 22;
    let fin = 1, fout = 1, D = 56, dr = 1;
    if (t != null) {
      fin = seg(t, 0, .3) * (1 - seg(t, 8.4, 9));
      fout = seg(t, 4.6, 5.0);
      D = 60 * seg(t, 7.0, 9);
      dr = seg(t, 6.8, 7.2);
    }
    ['fin', 'fout'].forEach(k => q(k).setAttribute('stroke-dashoffset', f1(off)));
    q('fin').setAttribute('opacity', f1(fin)); q('fdown').setAttribute('opacity', f1(fin));
    q('fout').setAttribute('opacity', f1(fout));
    // drips falling from the holes, and the soaked-soil front spreading down
    let d = '';
    if (dr > 0) SEP_HOLES.forEach((x, i) => {
      const f = t == null ? (i * .37) % 1 : ((t * .9 + i * .37) % 1);
      const y = 124 + f * Math.max(8, D - 6);
      d += `M${x},${f1(y)}v5M${x - 2},${f1(y + 3)}L${x},${f1(y + 6)}L${x + 2},${f1(y + 3)}`;
    });
    q('drip').setAttribute('d', d); q('drip').setAttribute('opacity', f1(dr));
    q('soak').setAttribute('d', D > 2 ? `M240,136C246,${f1(136 + D * 1.1)} 350,${f1(136 + D * 1.1)} 356,136` : '');
    // bits of waste: dark solids sink, light grease floats
    let b = '';
    const XD = [112, 150, 128, 170, 104, 160, 138, 120];
    for (let k = 0; k < 8; k++) {
      const grease = k % 3 === 0;
      let tau;
      if (t == null) tau = [1.6, 2.0, 1.3, 2.3, 1.9, 1.5, 1.0, 2.6][k];
      else { const st = .3 + k * .45; if (t < st || t > 8.4) continue; tau = (t - st) % 3.6; }
      const [x, y] = SEP_POS(grease, XD[k], tau);
      const op = tau > 2.7 ? Math.max(0, 1 - (tau - 2.7) / .6) : 1;
      b += grease ? `<ellipse cx="${f1(x)}" cy="${f1(y)}" rx="3.2" ry="2" class="ink thin fw" opacity="${f1(op)}"/>` : `<circle cx="${f1(x)}" cy="${f1(y)}" r="2.6" fill="#5a5f66" opacity="${f1(op)}"/>`;
    }
    q('bits').innerHTML = b;
    // gas bubbles from digesting sludge
    let g = '';
    if (t != null && t > 2.6) for (let k = 0; k < 3; k++) {
      const f = ((t - 2.6) * .55 + k / 3) % 1;
      g += `<circle cx="${[118, 156, 178][k] + f1(2 * Math.sin(t * 5 + k))}" cy="${f1(170 - f * 46)}" r="1.6" class="ink thin fw" opacity="${f1(1 - f * .6)}"/>`;
    }
    q('gas').innerHTML = g;
  }
});
}
