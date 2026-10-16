{
/* 13. Wi-Fi router */
// point at fraction u (0..1) along a polyline
const WIFI_ALONG = (pts, u) => {
  let tot = 0; const ls = [];
  for (let i = 0; i < pts.length - 1; i++) { const l = Math.hypot(pts[i + 1][0] - pts[i][0], pts[i + 1][1] - pts[i][1]); ls.push(l); tot += l; }
  let d = Math.max(0, Math.min(1, u)) * tot;
  for (let i = 0; i < ls.length; i++) {
    if (d <= ls[i] || i === ls.length - 1) { const k = ls[i] ? Math.min(1, d / ls[i]) : 0; return [pts[i][0] + (pts[i + 1][0] - pts[i][0]) * k, pts[i][1] + (pts[i + 1][1] - pts[i][1]) * k]; }
    d -= ls[i];
  }
};
const WIFI_IN = [[4, 40], [33, 40], [33, 116]];
const WIFI_WAN = [[52, 179], [76, 179], [90, 172], [115, 172]];
const WIFI_RADIO = [[115, 172], [156, 174], [168, 160], [191, 156], [194, 136], [199, 74]];
const WIFI_LAN = [[115, 172], [184, 176], [210, 181], [352, 181]];
LESSONS.push({
  key: 'wifi-router', title: 'Wi-Fi Router', cat: 'Digital', mins: 3, vb: [360, 250],
  summary: 'A router is a small computer with a radio. It takes packets from the internet line, reads the local address on each one, and beams it to your phone on a 2.4 or 5 GHz radio wave — then carries the reply back out.',
  parts: [
    { n: 1, name: 'Modem & WAN port', at: [33, 186], num: [33, 228], desc: 'The modem turns the signal on your cable, fiber or phone line into ordinary network data. It plugs into the router’s WAN (internet) port — the router’s door to the outside world.' },
    { n: 2, name: 'Router chip', at: [115, 180], num: [115, 228], desc: 'A small processor. It gives each of your devices its own local address, then reads the address on every packet to decide where it goes — your phone, the TV, or out to the internet.' },
    { n: 3, name: 'Radio & antennas', at: [193, 110], num: [150, 98], desc: 'The radio turns bits into a rapidly changing radio signal, and back again. The antennas launch it into the room and catch the faint replies from your devices.' },
    { n: 4, name: '2.4 & 5 GHz bands', at: [242, 84], num: [242, 30], desc: '2.4 GHz waves are about 5 inches long: they reach farther and get through walls better, but carry less data. 5 GHz waves are about half as long — faster, but they fade sooner. Newer routers add 6 GHz.' },
    { n: 5, name: 'Your phone', at: [324, 132], num: [344, 154], desc: 'Your phone has its own small Wi-Fi radio. It listens for packets carrying its local address and transmits its replies back to the router.' },
    { n: 6, name: 'Ethernet ports', at: [210, 184], num: [236, 216], desc: 'Wired devices plug in here. The chip sends their packets down a cable instead of over the air, so there is no radio interference to slow them down.' },
  ],
  steps: [
    { text: 'Data from the internet arrives on the line. The modem turns it into network packets and hands them to the router’s WAN port.', parts: [1], t: [0, 2.2] },
    { text: 'The router chip reads the packet’s address — the local one it gave your phone — and passes it to the radio.', parts: [2], t: [2.2, 4.2] },
    { text: 'The radio codes the bits onto a 2.4 or 5 GHz wave by changing it rapidly. The antennas send it across the room to your phone.', parts: [3, 4, 5], t: [4.2, 6.6] },
    { text: 'Your phone answers the same way. The router puts the home’s public address on the reply and sends it out; wired devices skip the radio and use the Ethernet ports.', parts: [5, 4, 6], t: [6.6, 9] },
  ],
  dur: 9,
  why: 'Why a router at all? Your internet provider gives your home one public address. The router hands each device a private address and keeps track of who asked for what, so dozens of devices can share that single connection.',
  fact: 'Wi-Fi needs no license thanks to a 1985 FCC rule that let anyone run spread-spectrum radios in a few bands, including 2.4 GHz — the same band microwave ovens use. Wi-Fi and Bluetooth grew up in that shared space.',
  quiz: {
    q: 'How does the router know which device a packet is for?',
    opts: ['It sends every packet to the closest device', 'It reads the address written on the packet', 'Each device listens on its own antenna'],
    a: 1,
    why: 'Every packet carries a destination address, like an envelope. The router gave each device its own local address, so it reads the label and sends the packet to the right one — or out to the internet.'
  },
  sources: [
    ['Wi-Fi — Wikipedia', 'https://en.wikipedia.org/wiki/Wi-Fi'],
    ['ISM radio band — Wikipedia', 'https://en.wikipedia.org/wiki/ISM_radio_band'],
    ['What Does a Router Do? — HowStuffWorks', 'https://computer.howstuffworks.com/router.htm'],
    ['What is the difference between 2.4 GHz and 5 GHz? — NETGEAR', 'https://kb.netgear.com/29396/What-is-the-difference-between-2-4-GHz-and-5GHz'],
    ['How does Wi-Fi wireless Internet work? — Explain that Stuff', 'https://www.explainthatstuff.com/wirelessinternet.html'],
  ],
  art(p) {
    let vents = '';
    for (let y = 160; y <= 184; y += 6) vents += `M21,${y}H45`;
    let pins = '';
    for (let x = 132; x <= 154; x += 4) pins += `M${x},162V164M${x},180V182`;
    return `
    <g class="shell">
      <path d="M6,196H224" class="ink"/><rect x="6" y="196.7" width="218" height="6" fill="url(#${p}hatch)"/>
      <text x="6" y="33" class="hand">from the street</text></g>
    <g data-part="1"><path d="M4,40H33V112" class="ink" stroke-width="2.2"/>
      <rect x="14" y="112" width="38" height="84" rx="4" class="ink fm"/>
      <circle cx="24" cy="124" r="1.8" class="ink thin fw"/><circle cx="33" cy="124" r="1.8" class="ink thin fw"/><circle cx="42" cy="124" r="1.8" class="ink thin fw"/>
      <path d="${vents}" class="ink thin"/>
      <path d="M52,179H70" class="ink" stroke-width="2.2"/><rect x="52" y="175" width="5" height="8" class="ink thin fw"/>
      <rect x="69" y="174" width="9" height="10" class="ink fw"/></g>
    <g class="case"><g transform="translate(-28 0)">
      <path d="M100,150Q100,146 104,146H232Q236,146 236,150V196H100Z M105,151V191H231V151Z" fill-rule="evenodd" fill="url(#${p}hatch)" class="ink"/>
      <rect x="105.7" y="151.7" width="124.6" height="38.6" fill="url(#${p}grid)"/>
      <rect x="108" y="182" width="120" height="5" class="ink thin fm"/></g></g>
    <g data-part="2"><text id="${p}addr" x="140" y="133" class="hand" text-anchor="middle" style="fill:#D63A2A">to 192.168.1.23</text><g transform="translate(-28 0)"><path d="${pins}" class="ink thin"/><rect x="128" y="164" width="30" height="16" rx="1.5" class="ink fw"/>
      <rect x="135" y="168" width="16" height="8" class="ink thin fm"/></g></g>
    <g data-part="3"><g transform="translate(-28 0)">
      <path d="M190,168V158H116V146 M202,168V160H220V146" class="ink thin"/>
      <rect x="186" y="168" width="20" height="13" rx="1" class="ink fm"/><path d="M190,172H202M190,176H202" class="ink thin"/>
      <path d="M112,141L103,71Q106,64 109,70L119,141Z" class="ink fw"/><circle cx="116" cy="144" r="3.2" class="ink fm"/>
      <path d="M217,141L224,70Q228,64 231,71L223,141Z" class="ink fw"/><circle cx="220" cy="144" r="3.2" class="ink fm"/></g></g>
    <g data-part="6">
      <rect x="202" y="160" width="9" height="10" class="ink fw"/><rect x="202" y="176" width="9" height="10" class="ink fw"/>
      <path d="M211,181H352" class="ink" stroke-width="2.2"/>
      <text x="350" y="175" class="hand" text-anchor="end">to TV or PC</text></g>
    <g data-part="4"><path id="${p}w24" class="energy"/><path id="${p}w5" class="energy"/>
      <text x="224" y="104" class="hand">2.4 GHz</text><text x="230" y="130" class="hand">5 GHz</text></g>
    <g data-part="5"><rect x="286" y="62" width="40" height="76" rx="6" class="ink fw"/>
      <rect x="290" y="70" width="32" height="58" rx="1.5" class="ink thin fm"/>
      <path id="${p}scr" d="M294,78H318M294,85H314M294,92H318M294,99H310" class="ink thin"/>
      <path d="M302,133H310" class="ink thin"/>
      <text x="306" y="54" class="hand" text-anchor="middle">192.168.1.23</text></g>
    <g style="opacity:1"><g id="${p}pk"><rect x="-7" y="-5" width="14" height="10" rx="1.5" class="ink" fill="#fff" style="stroke:#D63A2A"/><path d="M-7,-1.5H7" class="ink thin" style="stroke:#D63A2A"/></g>
    <g id="${p}pk2" opacity="0"><rect x="-7" y="-5" width="14" height="10" rx="1.5" class="ink" fill="#fff" style="stroke:#D63A2A"/><path d="M-7,-1.5H7" class="ink thin" style="stroke:#D63A2A"/></g></g>`;
  },
  anim(svg, p, t) {
    const q = id => svg.querySelector('#' + p + id);
    const A = [[206, 80], [280, 90]], B = [[203, 110], [280, 116]];
    // packet position & wave state
    let pk = null, pk2 = null, dir = 1, g = 1, addr = 1, scr = 1;
    if (t == null) { pk = [61, 179]; }
    else {
      addr = seg(t, 2.4, 2.8) - seg(t, 4.0, 4.3);
      scr = seg(t, 5.7, 6.3);
      if (t < 1.0) pk = WIFI_ALONG(WIFI_IN, seg(t, 0, 1.0));
      else if (t < 1.3) pk = null;
      else if (t < 3.4) pk = WIFI_ALONG(WIFI_WAN, seg(t, 1.3, 2.2));
      else if (t < 4.9) pk = WIFI_ALONG(WIFI_RADIO, seg(t, 3.4, 4.9));
      else if (t < 7.3) pk = null;
      else {
        const u = seg(t, 7.3, 9);
        const back = [...WIFI_RADIO].reverse().concat([...WIFI_WAN].reverse(), [[33, 160], [33, 116], [33, 40], [4, 40]]);
        pk = WIFI_ALONG(back, u);
        if (u > .98) pk = null;
        if (t > 7.6) pk2 = WIFI_ALONG(WIFI_LAN, seg(t, 7.6, 9));
      }
      if (t < 4.6) g = 0;
      else if (t < 6.6) { dir = 1; g = seg(t, 4.6, 5.7); }
      else { dir = -1; g = seg(t, 6.6, 7.3); }
    }
    const ph = t == null ? 0 : t * 12 * dir;
    q('w24').setAttribute('d', g < .08 ? '' : wave(dir > 0 ? [A[0], [A[0][0] + 74 * g, A[0][1] + 10 * g]] : [A[1], [A[1][0] - 74 * g, A[1][1] - 10 * g]], 4.2, 18, ph));
    q('w5').setAttribute('d', g < .08 ? '' : wave(dir > 0 ? [B[0], [B[0][0] + 77 * g, B[0][1] + 6 * g]] : [B[1], [B[1][0] - 77 * g, B[1][1] - 6 * g]], 3, 9, ph * 1.6));
    const pg = q('pk');
    if (pk) { pg.setAttribute('opacity', 1); pg.setAttribute('transform', `translate(${f1(pk[0])} ${f1(pk[1])})`); } else pg.setAttribute('opacity', 0);
    const pg2 = q('pk2');
    if (pk2) { pg2.setAttribute('opacity', 1); pg2.setAttribute('transform', `translate(${f1(pk2[0])} ${f1(pk2[1])})`); } else pg2.setAttribute('opacity', 0);
    q('addr').setAttribute('opacity', f1(addr));
    q('scr').setAttribute('opacity', f1(.25 + .75 * scr));
  }
});
}
