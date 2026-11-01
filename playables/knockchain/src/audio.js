// Knock Chain — sound (Web Audio). All clips are CC0 files (see CREDITS.md), ogg with an mp3 fallback for Safari.
const NAMES = ['shoot', 'wood', 'stone', 'glass', 'switch', 'open', 'win', 'fail', 'ui', 'tumble'];

export function createAudio(base = './audio/') {
  const A = { muted: false, ready: false, ctx: null, buffers: {}, last: {} };
  const probe = document.createElement('audio');
  const ext = probe.canPlayType('audio/ogg; codecs=vorbis') ? 'ogg' : 'mp3';

  async function load() {
    if (A.ctx) return;
    const Ctx = window.AudioContext || window.webkitAudioContext; if (!Ctx) return;
    A.ctx = new Ctx();
    A.gain = A.ctx.createGain(); A.gain.gain.value = A.muted ? 0 : 1; A.gain.connect(A.ctx.destination);
    await Promise.all(NAMES.map(async (n) => {
      try { const r = await fetch(base + n + '.' + ext); const buf = await r.arrayBuffer(); A.buffers[n] = await A.ctx.decodeAudioData(buf); }
      catch (e) { /* a missing clip is not fatal */ }
    }));
    A.ready = true;
  }
  // iOS needs a user gesture before the context runs; call on the first touch
  function unlock() { load(); if (A.ctx && A.ctx.state === 'suspended') A.ctx.resume(); }
  function play(name, { vol = 1, rate = 1, minGap = 0.04 } = {}) {
    if (!A.ready || A.muted) return;
    const b = A.buffers[name]; if (!b) return;
    const t = A.ctx.currentTime; if (A.last[name] && t - A.last[name] < minGap) return; A.last[name] = t;
    const s = A.ctx.createBufferSource(); s.buffer = b; s.playbackRate.value = rate;
    const g = A.ctx.createGain(); g.gain.value = vol; s.connect(g); g.connect(A.gain); s.start();
  }
  function setMuted(m) { A.muted = m; if (A.gain) A.gain.gain.value = m ? 0 : 1; }
  return { unlock, play, setMuted, get muted() { return A.muted; }, get ready() { return A.ready; } };
}
