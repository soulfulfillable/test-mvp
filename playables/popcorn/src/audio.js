// Real sound files only (CC0, see CREDITS.md) — nothing synthesized. Small pool per sound, throttled, mute persisted.
const NAMES = ['shoot', 'fuse', 'pop', 'wood', 'cup', 'tumble', 'down', 'win', 'fail', 'ui'];
const KEY = 'pc.mute';

export class Audio {
  constructor(base = 'audio/') {
    this.base = base; this.pool = {}; this.last = {}; this.muted = false; this.unlocked = false;
    try { this.muted = localStorage.getItem(KEY) === '1'; } catch (e) { /* private mode */ }
    const can = typeof document !== 'undefined' && document.createElement('audio');
    this.ext = can && can.canPlayType && can.canPlayType('audio/ogg; codecs="vorbis"') ? 'ogg' : 'mp3';
    for (const n of NAMES) this.pool[n] = { i: 0, els: [] };
  }
  el(n) {
    const p = this.pool[n];
    if (p.els.length < 3) { const a = new window.Audio(this.base + n + '.' + this.ext); a.preload = 'auto'; p.els.push(a); return a; }
    const a = p.els[p.i]; p.i = (p.i + 1) % p.els.length; return a;
  }
  unlock() { // call from the first pointer event (iOS)
    if (this.unlocked) return; this.unlocked = true;
    for (const n of NAMES) { const a = this.el(n); a.volume = 0; a.play().then(() => { a.pause(); a.currentTime = 0; a.volume = 1; }).catch(() => { a.volume = 1; }); }
  }
  play(n, vol = 1, minGap = 70) {
    if (this.muted || !this.unlocked) return;
    const now = performance.now(); if (this.last[n] && now - this.last[n] < minGap) return; this.last[n] = now;
    try { const a = this.el(n); a.volume = Math.max(0, Math.min(1, vol)); a.currentTime = 0; a.play().catch(() => {}); } catch (e) { /* ignore */ }
  }
  setMuted(m) { this.muted = m; try { localStorage.setItem(KEY, m ? '1' : '0'); } catch (e) { /* ignore */ } }
}
