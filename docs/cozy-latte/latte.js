/* Cozy Latte — one cup, one finger.
   Real-time 2D fluid on the GPU (semi-Lagrangian advection + Jacobi pressure projection,
   the textbook "stable fluids" scheme), written for this page. No libraries. */
(function () {
  'use strict';

  var qs = new URLSearchParams(location.search);
  var app = document.getElementById('app');
  var canvas = document.getElementById('cup');
  var fingerEl = document.getElementById('finger');
  var freshBtn = document.getElementById('fresh');
  var fpsEl = document.getElementById('fps');
  var SHOW_FPS = qs.get('fps') === '1';
  var PIN_LEVEL = qs.has('level') ? Math.max(0, Math.min(5, +qs.get('level') | 0)) : -1;
  var MILK = Math.max(1, +qs.get('milk') || 26);      // seconds of pouring in one cup
  var DEMO_KEY = 'cozy-latte.demo.v1';
  var MANUAL = qs.get('manual') === '1';               // test robot steps frames itself on a virtual 60 fps clock

  var RD = 0.48;                 // radius of the liquid disc in simulation uv space
  // quality ladder: the page steps down whenever frames run late, so the hand never waits for the picture
  var LEVELS = [
    { n: 224, d: 1024, it: 22, dpr: 3 },
    { n: 192, d: 896, it: 20, dpr: 2.5 },
    { n: 160, d: 768, it: 18, dpr: 2 },
    { n: 128, d: 640, it: 16, dpr: 2 },
    { n: 112, d: 512, it: 14, dpr: 1.5 },
    { n: 96, d: 384, it: 12, dpr: 1 }
  ];
  var level = PIN_LEVEL >= 0 ? PIN_LEVEL : 1;

  /* ---------------------------------------------------------------- shaders */
  var VS = 'attribute vec2 aP;varying vec2 vUv;void main(){vUv=aP*0.5+0.5;gl_Position=vec4(aP,0.,1.);}';
  var HEAD = 'precision highp float;varying vec2 vUv;const float RD=0.48;' +
    'float inside(vec2 p){vec2 c=p-0.5;return step(dot(c,c),RD*RD);}';

  var FS_ADVECT = HEAD +
    'uniform sampler2D uVel;uniform sampler2D uSrc;uniform float uDt;uniform float uDecay;uniform float uIsVel;uniform float uSharp;' +
    'void main(){vec2 c=vUv-0.5;float lc=length(c);vec2 base=vUv;' +
    'if(lc>RD){if(uIsVel>0.5){gl_FragColor=vec4(0.);return;}base=0.5+c*(RD/lc);}' +
    'vec2 v=texture2D(uVel,base).xy;vec2 p=base-uDt*v;vec2 q=p-0.5;float l=length(q);if(l>RD)p=0.5+q*(RD/l);' +
    'vec4 s=texture2D(uSrc,p);' +
    'if(uIsVel>0.5){gl_FragColor=vec4(s.xy*uDecay,0.,1.);}' +
    'else{float m=clamp(s.r,0.,1.);m+=uSharp*uDt*m*(1.-m)*(m-0.5);gl_FragColor=vec4(clamp(m,0.,1.),s.g,0.,1.);}}';

  var FS_DIV = HEAD +
    'uniform sampler2D uVel;uniform float uH;uniform vec3 uSrc;uniform float uSig2;uniform float uSink;' +
    'void main(){if(inside(vUv)<0.5){gl_FragColor=vec4(0.);return;}' +
    'vec2 C=texture2D(uVel,vUv).xy;vec2 dx=vec2(uH,0.);vec2 dy=vec2(0.,uH);' +
    'float R=inside(vUv+dx)>0.5?texture2D(uVel,vUv+dx).x:-C.x;' +
    'float L=inside(vUv-dx)>0.5?texture2D(uVel,vUv-dx).x:-C.x;' +
    'float T=inside(vUv+dy)>0.5?texture2D(uVel,vUv+dy).y:-C.y;' +
    'float B=inside(vUv-dy)>0.5?texture2D(uVel,vUv-dy).y:-C.y;' +
    'vec2 d=vUv-uSrc.xy;float s=uSrc.z*exp(-dot(d,d)/uSig2)-uSink;' +
    'gl_FragColor=vec4(0.5*(R-L+T-B)/uH-s,0.,0.,1.);}';

  var FS_JACOBI = HEAD +
    'uniform sampler2D uP;uniform sampler2D uDiv;uniform float uH;' +
    'void main(){if(inside(vUv)<0.5){gl_FragColor=vec4(0.);return;}' +
    'float C=texture2D(uP,vUv).x;vec2 dx=vec2(uH,0.);vec2 dy=vec2(0.,uH);' +
    'float R=inside(vUv+dx)>0.5?texture2D(uP,vUv+dx).x:C;' +
    'float L=inside(vUv-dx)>0.5?texture2D(uP,vUv-dx).x:C;' +
    'float T=inside(vUv+dy)>0.5?texture2D(uP,vUv+dy).x:C;' +
    'float B=inside(vUv-dy)>0.5?texture2D(uP,vUv-dy).x:C;' +
    'gl_FragColor=vec4((L+R+B+T-uH*uH*texture2D(uDiv,vUv).x)*0.25,0.,0.,1.);}';

  var FS_GRAD = HEAD +
    'uniform sampler2D uP;uniform sampler2D uVel;uniform float uH;' +
    'void main(){if(inside(vUv)<0.5){gl_FragColor=vec4(0.);return;}' +
    'float C=texture2D(uP,vUv).x;vec2 dx=vec2(uH,0.);vec2 dy=vec2(0.,uH);' +
    'float R=inside(vUv+dx)>0.5?texture2D(uP,vUv+dx).x:C;' +
    'float L=inside(vUv-dx)>0.5?texture2D(uP,vUv-dx).x:C;' +
    'float T=inside(vUv+dy)>0.5?texture2D(uP,vUv+dy).x:C;' +
    'float B=inside(vUv-dy)>0.5?texture2D(uP,vUv-dy).x:C;' +
    'vec2 v=texture2D(uVel,vUv).xy-0.5*vec2(R-L,T-B)/uH;' +
    'vec2 c=vUv-0.5;float lc=length(c);' +
    'if(lc>RD-2.*uH){vec2 n=c/max(lc,1e-5);v-=max(dot(v,n),0.)*n;}' +   // nothing leaves through the cup wall
    'gl_FragColor=vec4(v,0.,1.);}';

  var FS_SCALE = 'precision highp float;varying vec2 vUv;uniform sampler2D uT;uniform float uK;void main(){gl_FragColor=texture2D(uT,vUv)*uK;}';

  // one stroke segment a->b, drawn with blending into the current buffer (scissored to its box).
  // mode 0: drag the surface along with the stream. mode 1: milk core + a thin crema-coloured edge on both flanks.
  var FS_SPLAT = 'precision highp float;varying vec2 vUv;' +
    'uniform vec2 uA;uniform vec2 uB;uniform float uR;uniform float uRb;uniform float uEdge;uniform float uAmt;uniform vec2 uVal;uniform float uMode;' +
    'void main(){vec2 pa=vUv-uA;vec2 ba=uB-uA;float L2=dot(ba,ba);float h=L2>1e-10?dot(pa,ba)/L2:0.5;float hc=clamp(h,0.,1.);float d=length(pa-ba*hc);' +
    'if(uMode<0.5){float w=exp(-d*d/(uR*uR))*uAmt;gl_FragColor=vec4(uVal*w,0.,w);}' +
    'else{float core=(1.-smoothstep(uR*0.55,uR,d))*uAmt;' +
    'float on=L2>1e-10?step(0.,h)*step(h,1.):0.;' +
    'float side=(smoothstep(uR*0.8,uR,d)-smoothstep(uR+uRb*0.4,uR+uRb,d))*on*uEdge;' +
    'float keep=(1.-core)*(1.-side);gl_FragColor=vec4(core,0.,0.,1.-keep);}}';

  var NOISE = 'float hash(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}' +
    'float vnoise(vec2 p){vec2 i=floor(p);vec2 f=fract(p);f=f*f*(3.-2.*f);' +
    'return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),f.x),f.y);}' +
    'float fbm(vec2 p){float a=0.5;float s=0.;for(int i=0;i<5;i++){s+=a*vnoise(p);p=p*2.03+17.1;a*=0.5;}return s;}';

  // fresh espresso: no milk (r=0), crema mottling in g — it is carried by the flow, so even brown moves when pushed
  var FS_INIT = 'precision highp float;varying vec2 vUv;uniform float uSeed;' + NOISE +
    'void main(){vec2 p=(vUv-0.5)*2.1;float a=fbm(p*3.2+uSeed);float b=fbm(p*9.+uSeed*1.7+vec2(a*2.));' +
    'float c=fbm(p*26.+uSeed*2.3);' +
    'float g=clamp(0.5+(a-0.47)*1.5+(b-0.47)*0.8+(c-0.47)*0.45,0.,1.);gl_FragColor=vec4(0.,g,0.,1.);}';

  // table, saucer, cup, handle, the empty inside of the cup. Rendered once per resize.
  var FS_BG = 'precision highp float;varying vec2 vUv;uniform vec2 uRes;uniform vec2 uC;uniform float uRo;uniform vec3 uTable;uniform float uDark;' + NOISE +
    'const vec2 LD=vec2(-0.553,0.833);' +
    'float sdBox(vec2 p,vec2 c,vec2 b,float r){vec2 q=abs(p-c)-b+r;return length(max(q,0.))+min(max(q.x,q.y),0.)-r;}' +
    'void main(){vec2 f=vUv*uRes;vec2 p=(f-uC)/uRo;float px=1.5/uRo;float r=length(p);vec2 dir=p/max(r,1e-4);' +
    'vec3 col=uTable*(1.+0.07*dot(p,LD)*0.35)+(vnoise(f*0.9)-0.5)*0.012+(fbm(f*0.012+3.)-0.5)*0.05*(1.-0.5*uDark);' +
    // saucer
    'float RS=1.44;vec2 so=-LD*0.07;' +
    'col*=1.-(0.30+0.12*uDark)*(1.-smoothstep(RS-0.05,RS+0.20,length(p-so)));' +
    'vec3 porc=vec3(0.955,0.945,0.925);' +
    'float rise=smoothstep(1.02,1.22,r)*(1.-smoothstep(1.30,1.40,r));float lip=smoothstep(1.36,1.44,r);' +
    'vec3 sc=porc*(0.93+0.085*rise*dot(-dir,LD)+0.07*lip*dot(dir,LD)-0.035*smoothstep(1.02,1.0,r));' +
    'vec2 hd=vec2(0.766,-0.643);vec2 hq=vec2(dot(p,hd),dot(p,vec2(-hd.y,hd.x)));' +
    'float dh=sdBox(hq,vec2(1.17,0.),vec2(0.27,0.075),0.075);' +
    'vec2 co=-LD*0.12;vec2 pc=p-co;vec2 hqs=vec2(dot(pc,hd),dot(pc,vec2(-hd.y,hd.x)));' +
    'float shd=min(length(pc)-1.0,sdBox(hqs,vec2(1.17,0.),vec2(0.27,0.075),0.075));' +
    'sc*=1.-0.34*(1.-smoothstep(-0.05,0.17,shd));' +
    'col=mix(col,sc,1.-smoothstep(RS-px,RS+px,r));' +
    // handle (seen from above: a rounded bar)
    'vec3 hc=porc*(0.97+0.06*clamp(hq.y/0.075,-1.,1.)*dot(vec2(-hd.y,hd.x),LD)-0.05*smoothstep(-0.03,0.,dh));' +
    'col=mix(col,hc,1.-smoothstep(-px,px,dh));' +
    // cup: rounded rim, then the inside wall going down
    'float RI=0.93;float t=clamp((r-0.965)/0.035,-1.,1.);' +
    'vec3 rim=porc*(1.0+0.05*t*dot(dir,LD)-0.04*t*t);' +
    'vec3 wall=porc*(0.80+0.15*dot(dir,-LD))*mix(0.80,1.,smoothstep(0.62,0.93,r));' +
    'vec3 cup=mix(wall,rim,smoothstep(RI-px,RI+px,r));' +
    'col=mix(col,cup,1.-smoothstep(1.-px,1.+px,r));' +
    'gl_FragColor=vec4(col,1.);}';

  var FS_SHOW = 'precision highp float;varying vec2 vUv;uniform sampler2D uBg;uniform sampler2D uDye;uniform vec2 uRes;uniform vec2 uC;uniform float uRo;' +
    'uniform float uRho;uniform float uFill;uniform float uFade;uniform float uShine;uniform float uTx;' +
    'const float RD=0.48;const vec2 LD=vec2(-0.553,0.833);' +
    'void main(){vec3 bg=texture2D(uBg,vUv).rgb;vec2 p=(vUv*uRes-uC)/uRo;float r=length(p);float px=1.5/uRo;' +
    'if(r>uRho+px){gl_FragColor=vec4(bg,1.);return;}' +
    'vec2 q=p/uRho;vec2 uv=0.5+q*RD;vec4 d=texture2D(uDye,uv);float m=d.r;float g=d.g;' +
    'float e=uTx*1.6;' +
    'float mx=texture2D(uDye,uv+vec2(e,0.)).r-texture2D(uDye,uv-vec2(e,0.)).r;' +
    'float my=texture2D(uDye,uv+vec2(0.,e)).r-texture2D(uDye,uv-vec2(0.,e)).r;' +
    'float rq=length(q);' +
    'vec3 crema=mix(vec3(0.335,0.185,0.085),vec3(0.640,0.415,0.205),g);' +
    'crema*=1.-0.22*smoothstep(0.72,1.0,rq);' +
    'm=mix(m,0.,uFade);' +
    'vec3 tan_=vec3(0.835,0.660,0.470);vec3 milk=vec3(0.972,0.945,0.898)*(0.975+0.025*g);' +
    'vec3 col=mix(crema,tan_,smoothstep(0.04,0.40,m));col=mix(col,milk,smoothstep(0.34,0.66,m));' +
    'float lit=dot(vec2(mx,my),-LD)*(1.-uFade);col+=clamp(lit,-1.,1.)*vec3(0.20,0.17,0.13);' +   // foam sits a hair above the crema
    'float depth=0.05+0.15*(1.-uFill);' +
    'col*=1.-0.42*smoothstep(1.-depth*2.6,1.02,length(q-LD*depth));' +      // the wall's shadow falls on the lit side
    'col*=1.-0.20*smoothstep(0.955,1.0,rq);' +
    'vec2 sq=q-LD*0.42;col+=vec3(1.,0.97,0.92)*0.055*exp(-dot(sq,sq)/0.07);' +
    'float band=dot(q,vec2(0.83,0.553))-(uShine*3.2-1.6);col+=vec3(1.,0.98,0.94)*0.16*exp(-band*band/0.03)*step(0.001,uShine)*(1.-uShine);' +
    'gl_FragColor=vec4(mix(col,bg,smoothstep(uRho-px,uRho+px,r)),1.);}';

  /* ---------------------------------------------------------------- GL */
  var gl = null, isGL2 = false, halfType = 0, intFmt = 0;
  var prog = {}, quad = null;
  var vel, prs, div, dye, bg;
  var simN = 0, dyeN = 0, iters = 20, dprCap = 2;
  var geo = { W: 1, H: 1, s: 1, cx: 0, cy: 0, Ro: 1 };
  var ok = false;

  function compile(type, src) {
    var sh = gl.createShader(type); gl.shaderSource(sh, src); gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) throw new Error('shader: ' + gl.getShaderInfoLog(sh));
    return sh;
  }
  function program(fs) {
    var p = gl.createProgram();
    gl.attachShader(p, compile(gl.VERTEX_SHADER, VS)); gl.attachShader(p, compile(gl.FRAGMENT_SHADER, fs));
    gl.bindAttribLocation(p, 0, 'aP'); gl.linkProgram(p);
    if (!gl.getProgramParameter(p, gl.LINK_STATUS)) throw new Error('link: ' + gl.getProgramInfoLog(p));
    var u = {}, n = gl.getProgramParameter(p, gl.ACTIVE_UNIFORMS);
    for (var i = 0; i < n; i++) { var nm = gl.getActiveUniform(p, i).name; u[nm] = gl.getUniformLocation(p, nm); }
    return { p: p, u: u };
  }
  function target(w, h, half, linear) {
    var tex = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, tex);
    var f = linear ? gl.LINEAR : gl.NEAREST;
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, f); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, f);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    if (half) gl.texImage2D(gl.TEXTURE_2D, 0, intFmt, w, h, 0, gl.RGBA, halfType, null);
    else gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, w, h, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    var fbo = gl.createFramebuffer(); gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
    var good = gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE;
    gl.viewport(0, 0, w, h); gl.clearColor(0, 0, 0, 1); gl.clear(gl.COLOR_BUFFER_BIT);
    return { tex: tex, fbo: fbo, w: w, h: h, good: good };
  }
  function pair(w, h) {
    var o = { a: target(w, h, true, true), b: target(w, h, true, true) };
    o.swap = function () { var t = o.a; o.a = o.b; o.b = t; };
    return o;
  }
  function kill(t) { if (!t) return; if (t.a) { kill(t.a); kill(t.b); return; } gl.deleteTexture(t.tex); gl.deleteFramebuffer(t.fbo); }
  function use(pr) { gl.useProgram(pr.p); return pr.u; }
  function bindTex(unit, t) { gl.activeTexture(gl.TEXTURE0 + unit); gl.bindTexture(gl.TEXTURE_2D, t.tex); }
  function draw(t) {
    if (t) { gl.bindFramebuffer(gl.FRAMEBUFFER, t.fbo); gl.viewport(0, 0, t.w, t.h); }
    else { gl.bindFramebuffer(gl.FRAMEBUFFER, null); gl.viewport(0, 0, canvas.width, canvas.height); }
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }

  function initGL() {
    var opts = { alpha: false, antialias: false, depth: false, stencil: false, preserveDrawingBuffer: false, powerPreference: 'high-performance', desynchronized: true };
    try { gl = canvas.getContext('webgl2', opts); } catch (e) { gl = null; }
    isGL2 = !!gl;
    if (!gl) { try { gl = canvas.getContext('webgl', opts) || canvas.getContext('experimental-webgl', opts); } catch (e) { gl = null; } }
    if (!gl) return false;
    if (isGL2) {
      gl.getExtension('EXT_color_buffer_float'); gl.getExtension('EXT_color_buffer_half_float');
      halfType = gl.HALF_FLOAT; intFmt = gl.RGBA16F;
    } else {
      var hf = gl.getExtension('OES_texture_half_float');
      if (!hf || !gl.getExtension('OES_texture_half_float_linear')) return false;
      gl.getExtension('EXT_color_buffer_half_float');
      halfType = hf.HALF_FLOAT_OES; intFmt = gl.RGBA;
    }
    var probe = target(4, 4, true, true); var good = probe.good; kill(probe);
    if (!good) return false;
    try {
      prog.advect = program(FS_ADVECT); prog.div = program(FS_DIV); prog.jacobi = program(FS_JACOBI); prog.grad = program(FS_GRAD);
      prog.scale = program(FS_SCALE); prog.splat = program(FS_SPLAT); prog.init = program(FS_INIT); prog.bg = program(FS_BG); prog.show = program(FS_SHOW);
    } catch (e) { if (window.console) console.warn(String(e)); return false; }
    quad = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, quad);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0); gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    gl.disable(gl.DEPTH_TEST); gl.disable(gl.BLEND);
    return true;
  }

  function freshDye() {
    var u = use(prog.init); gl.uniform1f(u.uSeed, Math.random() * 50);
    draw(dye.a);
  }
  function buildSim(keepDye) {
    var L = LEVELS[level];
    iters = L.it; dprCap = L.dpr;
    if (simN !== L.n) {
      kill(vel); kill(prs); kill(div);
      simN = L.n; vel = pair(simN, simN); prs = pair(simN, simN); div = target(simN, simN, true, false);
    }
    if (dyeN !== L.d) {
      var old = dye; dyeN = L.d; dye = pair(dyeN, dyeN);
      if (old && keepDye) { var u = use(prog.scale); bindTex(0, old.a); gl.uniform1i(u.uT, 0); gl.uniform1f(u.uK, 1); draw(dye.a); }
      else freshDye();
      kill(old);
    }
  }

  function layout() {
    var W = app.clientWidth || window.innerWidth, H = app.clientHeight || window.innerHeight;
    var s = Math.min(window.devicePixelRatio || 1, dprCap);
    var Ro = Math.min(W * 0.43, H * 0.30, 320);
    geo = { W: W, H: H, s: s, cx: W / 2, cy: H * 0.47, Ro: Ro };
    var cw = Math.max(2, Math.round(W * s)), ch = Math.max(2, Math.round(H * s));
    if (canvas.width !== cw || canvas.height !== ch) { canvas.width = cw; canvas.height = ch; }
    if (!ok) return;
    if (!bg || bg.w !== cw || bg.h !== ch) { kill(bg); bg = target(cw, ch, false, true); }
    paintBg();
  }
  function tableColor() {
    var c = getComputedStyle(document.documentElement).getPropertyValue('--table').trim();
    var m = /^#?([0-9a-f]{6})$/i.exec(c); var v = m ? parseInt(m[1], 16) : 0xcdc8c0;
    return [(v >> 16 & 255) / 255, (v >> 8 & 255) / 255, (v & 255) / 255];
  }
  function paintBg() {
    var t = tableColor(), u = use(prog.bg);
    gl.uniform2f(u.uRes, canvas.width, canvas.height);
    gl.uniform2f(u.uC, geo.cx * geo.s, (geo.H - geo.cy) * geo.s);
    gl.uniform1f(u.uRo, geo.Ro * geo.s);
    gl.uniform3f(u.uTable, t[0], t[1], t[2]);
    gl.uniform1f(u.uDark, (t[0] + t[1] + t[2]) / 3 < 0.4 ? 1 : 0);
    draw(bg);
    var meta = document.querySelector('meta[name=theme-color]');
    if (meta) meta.setAttribute('content', 'rgb(' + t.map(function (x) { return Math.round(x * 255); }).join(',') + ')');
    dirty = true;
  }

  /* ---------------------------------------------------------------- cup state */
  var milkUsed = 0, done = false, doneAt = 0, shine = 0;
  var fade = 0, fadeDir = 0, resetPending = false;
  var frames = 0, dirty = true;
  function fill() { return Math.min(1, milkUsed / MILK); }
  function rho() { var f = fill(); f = f * f * (3 - 2 * f); return 0.93 * (0.80 + 0.165 * f); }   // liquid radius / cup outer radius

  function resetCup() {
    milkUsed = 0; done = false; shine = 0; down = false; queue.length = 0; last = null; speed = 0;
    freshDye();
    var u = use(prog.scale); gl.uniform1f(u.uK, 0);
    [vel.a, vel.b, prs.a, prs.b].forEach(function (t) { gl.bindFramebuffer(gl.FRAMEBUFFER, t.fbo); gl.viewport(0, 0, t.w, t.h); gl.clearColor(0, 0, 0, 1); gl.clear(gl.COLOR_BUFFER_BIT); });
    freshBtn.classList.remove('on');
    dirty = true;
  }
  function newCup() { if (resetPending) return; resetPending = true; fadeDir = 1; freshBtn.classList.remove('on'); wake(); }

  /* ---------------------------------------------------------------- input */
  var down = false, queue = [], last = null, speed = 0, fvx = 0, fvy = 0, touchId = null, lastEventT = 0;
  var userTouched = false;

  // screen point -> simulation uv. Returns null when a press starts well outside the cup.
  function toSim(x, y, starting) {
    var R = rho() * geo.Ro;
    var dx = (x - geo.cx) / R, dy = -(y - geo.cy) / R;
    var r = Math.sqrt(dx * dx + dy * dy);
    if (starting && r * rho() > 1.22) return null;
    if (r > 0.93) { dx *= 0.93 / r; dy *= 0.93 / r; }
    return [0.5 + dx * RD, 0.5 + dy * RD];
  }
  function press(x, y, t) {
    if (done || resetPending) return false;
    var p = toSim(x, y, true); if (!p) return false;
    down = true; last = null; speed = 0; fvx = fvy = 0;
    queue.push({ x: p[0], y: p[1], t: t, first: true });
    wake(); return true;
  }
  function moveTo(x, y, t) { if (!down) return; var p = toSim(x, y, false); queue.push({ x: p[0], y: p[1], t: t }); }
  function release() { down = false; touchId = null; }

  function stopDemoForUser() { userTouched = true; if (demo) endDemo(true); }

  app.addEventListener('touchstart', function (e) {
    if (e.target === freshBtn || freshBtn.contains(e.target)) return;
    e.preventDefault();
    stopDemoForUser();
    if (touchId !== null) return;
    var t = e.changedTouches[0];
    if (press(t.clientX, t.clientY, e.timeStamp)) touchId = t.identifier;
  }, { passive: false });
  app.addEventListener('touchmove', function (e) {
    if (e.cancelable) e.preventDefault();
    for (var i = 0; i < e.changedTouches.length; i++) {
      var t = e.changedTouches[i];
      if (t.identifier === touchId) moveTo(t.clientX, t.clientY, e.timeStamp);
    }
  }, { passive: false });
  function touchEnd(e) {
    for (var i = 0; i < e.changedTouches.length; i++) if (e.changedTouches[i].identifier === touchId) release();
  }
  app.addEventListener('touchend', touchEnd, { passive: false });
  app.addEventListener('touchcancel', touchEnd, { passive: false });

  // mouse / pen (touch is handled above: on iOS a long press turns pointer events into pointercancel)
  var mouseDown = false;
  function notTouch(e) { return e.pointerType !== 'touch'; }
  if (window.PointerEvent) {
    app.addEventListener('pointerdown', function (e) {
      if (!notTouch(e) || e.button !== 0 || e.target === freshBtn || freshBtn.contains(e.target)) return;
      stopDemoForUser();
      if (press(e.clientX, e.clientY, e.timeStamp)) { mouseDown = true; try { app.setPointerCapture(e.pointerId); } catch (x) { } }
    });
    app.addEventListener('pointermove', function (e) {
      if (!notTouch(e) || !mouseDown) return;
      var list = e.getCoalescedEvents ? e.getCoalescedEvents() : null;
      if (list && list.length) for (var i = 0; i < list.length; i++) moveTo(list[i].clientX, list[i].clientY, list[i].timeStamp || e.timeStamp);
      else moveTo(e.clientX, e.clientY, e.timeStamp);
    });
    var pUp = function (e) { if (!notTouch(e) || !mouseDown) return; mouseDown = false; release(); };
    app.addEventListener('pointerup', pUp); app.addEventListener('pointercancel', pUp);
  }
  ['gesturestart', 'gesturechange', 'contextmenu', 'dblclick', 'selectstart'].forEach(function (n) {
    document.addEventListener(n, function (e) { e.preventDefault(); }, { passive: false });
  });
  freshBtn.addEventListener('click', function () { newCup(); });

  // keep the page parked in the middle of its scroll cushion
  function pin() { if (Math.abs(window.scrollY - 120) > 2) window.scrollTo(0, 120); }
  window.addEventListener('scroll', function () { clearTimeout(pin.t); pin.t = setTimeout(pin, 80); }, { passive: true });

  /* ---------------------------------------------------------------- simulation */
  var SEG_MAX = 28;
  function splatRect(t, ax, ay, bx, by, pad) {
    var x0 = Math.floor((Math.min(ax, bx) - pad) * t.w), x1 = Math.ceil((Math.max(ax, bx) + pad) * t.w);
    var y0 = Math.floor((Math.min(ay, by) - pad) * t.h), y1 = Math.ceil((Math.max(ay, by) + pad) * t.h);
    x0 = Math.max(0, x0); y0 = Math.max(0, y0); x1 = Math.min(t.w, x1); y1 = Math.min(t.h, y1);
    gl.scissor(x0, y0, Math.max(1, x1 - x0), Math.max(1, y1 - y0));
  }

  function step(dt, dtReal) {
    var h = 1 / simN, u, i;

    // 1. gather this frame's finger path (every event since the last frame, in order)
    var segs = [];
    if (queue.length) {
      var pts = queue; queue = [];
      var t0 = pts[0].t, t1 = pts[pts.length - 1].t, len = 0, sx = 0, sy = 0;
      for (i = 0; i < pts.length; i++) {
        var pt = pts[i];
        if (pt.first || !last) { segs.push([pt.x, pt.y, pt.x, pt.y]); }
        else {
          var ddx = pt.x - last.x, ddy = pt.y - last.y, dl = Math.sqrt(ddx * ddx + ddy * ddy);
          if (dl > 1e-5) { segs.push([last.x, last.y, pt.x, pt.y]); len += dl; sx += ddx; sy += ddy; }
        }
        last = pt;
      }
      var span = Math.max((t1 - t0) / 1000, Math.min(dtReal, 0.05), 0.004);
      var k = 1 - Math.exp(-Math.min(dtReal, 0.05) / 0.05);
      speed += (len / span - speed) * k; fvx += (sx / span - fvx) * k; fvy += (sy / span - fvy) * k;
      if (segs.length > SEG_MAX) {            // a very long frame: thin out, the capsules still join end to end
        var m = [], stepN = Math.ceil(segs.length / SEG_MAX);
        for (i = 0; i < segs.length; i += stepN) { var e2 = segs[Math.min(segs.length - 1, i + stepN - 1)]; m.push([segs[i][0], segs[i][1], e2[2], e2[3]]); }
        segs = m;
      }
    } else if (down) {
      var kk = 1 - Math.exp(-Math.min(dtReal, 0.05) / 0.05);
      speed -= speed * kk; fvx -= fvx * kk; fvy -= fvy * kk;
      if (last) segs.push([last.x, last.y, last.x, last.y]);
    }
    var pouring = down && !done && last;
    var sFast = Math.min(1, Math.max(0, (speed - 0.30) / 1.25)); sFast = sFast * sFast * (3 - 2 * sFast);

    // 2. carry the velocity field along itself, with the drag of thick milk foam
    u = use(prog.advect);
    bindTex(0, vel.a); bindTex(1, vel.a);
    gl.uniform1i(u.uVel, 0); gl.uniform1i(u.uSrc, 1); gl.uniform1f(u.uDt, dt); gl.uniform1f(u.uIsVel, 1);
    gl.uniform1f(u.uDecay, Math.exp(-dt * 1.9)); gl.uniform1f(u.uSharp, 0);
    draw(vel.b); vel.swap();

    // 3. the stream drags the surface the way the finger travels
    if (pouring && segs.length) {
      var fl = Math.sqrt(fvx * fvx + fvy * fvy), fk = 0.55 * (fl > 1.6 ? 1.6 / fl : 1);
      if (fl > 0.02) {
        gl.enable(gl.BLEND); gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA); gl.enable(gl.SCISSOR_TEST);
        u = use(prog.splat);
        gl.uniform1f(u.uMode, 0); gl.uniform1f(u.uR, 0.05); gl.uniform1f(u.uAmt, 0.8); gl.uniform2f(u.uVal, fvx * fk, fvy * fk);
        gl.bindFramebuffer(gl.FRAMEBUFFER, vel.a.fbo); gl.viewport(0, 0, simN, simN);
        for (i = 0; i < segs.length; i++) {
          var sg = segs[i];
          gl.uniform2f(u.uA, sg[0], sg[1]); gl.uniform2f(u.uB, sg[2], sg[3]);
          splatRect(vel.a, sg[0], sg[1], sg[2], sg[3], 0.14);
          gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        }
        gl.disable(gl.BLEND); gl.disable(gl.SCISSOR_TEST);
      }
    }

    // 4. pressure: keep the liquid incompressible, except where milk is arriving (a source that pushes everything outward)
    var amp = 0, sig = 0.055;
    if (pouring) amp = 0.050 / (Math.PI * sig * sig);
    u = use(prog.div);
    bindTex(0, vel.a); gl.uniform1i(u.uVel, 0); gl.uniform1f(u.uH, h);
    gl.uniform3f(u.uSrc, last ? last.x : 0.5, last ? last.y : 0.5, amp); gl.uniform1f(u.uSig2, sig * sig);
    gl.uniform1f(u.uSink, amp * sig * sig / (RD * RD));
    draw(div);
    u = use(prog.scale); bindTex(0, prs.a); gl.uniform1i(u.uT, 0); gl.uniform1f(u.uK, 0.97); draw(prs.b); prs.swap();
    u = use(prog.jacobi); gl.uniform1i(u.uP, 0); gl.uniform1i(u.uDiv, 1); gl.uniform1f(u.uH, h); bindTex(1, div);
    for (i = 0; i < iters; i++) { bindTex(0, prs.a); draw(prs.b); prs.swap(); }
    u = use(prog.grad); bindTex(0, prs.a); bindTex(1, vel.a); gl.uniform1i(u.uP, 0); gl.uniform1i(u.uVel, 1); gl.uniform1f(u.uH, h);
    draw(vel.b); vel.swap();

    // 5. carry milk and crema with the flow
    u = use(prog.advect);
    bindTex(0, vel.a); bindTex(1, dye.a);
    gl.uniform1i(u.uVel, 0); gl.uniform1i(u.uSrc, 1); gl.uniform1f(u.uDt, dt); gl.uniform1f(u.uIsVel, 0);
    gl.uniform1f(u.uDecay, 1); gl.uniform1f(u.uSharp, 5.0);
    draw(dye.b); dye.swap();

    // 6. lay this frame's milk last, so it is on screen in the same frame the finger landed
    if (pouring && segs.length) {
      var rw = 0.040 + (0.013 - 0.040) * sFast, rb = 0.016 - 0.006 * sFast;
      var edge = Math.min(1, Math.max(0, (speed - 0.12) / 0.5)) * 0.95;
      gl.enable(gl.BLEND); gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA); gl.enable(gl.SCISSOR_TEST);
      gl.colorMask(true, false, false, false);
      u = use(prog.splat);
      gl.uniform1f(u.uMode, 1); gl.uniform1f(u.uR, rw); gl.uniform1f(u.uRb, rb); gl.uniform1f(u.uEdge, edge); gl.uniform1f(u.uAmt, 1);
      gl.bindFramebuffer(gl.FRAMEBUFFER, dye.a.fbo); gl.viewport(0, 0, dyeN, dyeN);
      for (i = 0; i < segs.length; i++) {
        var s2 = segs[i];
        gl.uniform2f(u.uA, s2[0], s2[1]); gl.uniform2f(u.uB, s2[2], s2[3]);
        splatRect(dye.a, s2[0], s2[1], s2[2], s2[3], rw + rb + 0.004);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      }
      gl.colorMask(true, true, true, true);
      gl.disable(gl.BLEND); gl.disable(gl.SCISSOR_TEST);
    }

    // 7. the jug runs dry
    if (pouring && !demo) {
      milkUsed += dt;
      if (milkUsed >= MILK) { milkUsed = MILK; done = true; down = false; touchId = null; mouseDown = false; doneAt = performance.now(); shine = 0.0001; }
    }
  }

  function render() {
    var u = use(prog.show);
    bindTex(0, bg); bindTex(1, dye.a);
    gl.uniform1i(u.uBg, 0); gl.uniform1i(u.uDye, 1);
    gl.uniform2f(u.uRes, canvas.width, canvas.height);
    gl.uniform2f(u.uC, geo.cx * geo.s, (geo.H - geo.cy) * geo.s);
    gl.uniform1f(u.uRo, geo.Ro * geo.s);
    gl.uniform1f(u.uRho, rho()); gl.uniform1f(u.uFill, fill());
    gl.uniform1f(u.uFade, fade); gl.uniform1f(u.uShine, shine); gl.uniform1f(u.uTx, 1 / dyeN);
    draw(null);
  }

  /* ---------------------------------------------------------------- first-run demonstration */
  var demo = null;
  function demoPoint(t) {     // seconds -> position in disc units (y up): press, let it bloom, then sway while backing away
    var hold = 0.55, sway = 1.7;
    if (t < hold) return [0, -0.22];
    var k = Math.min(1, (t - hold) / sway), e = k * k * (3 - 2 * k);
    return [0.26 * Math.sin(k * Math.PI * 2 * 3) * (1 - 0.35 * k), -0.22 + 0.62 * e];
  }
  function startDemo() {
    if (userTouched || demo || done) return;
    demo = { t0: performance.now(), pressed: false, over: false };
    try { localStorage.setItem(DEMO_KEY, '1'); } catch (e) { }
    fingerEl.classList.add('on'); wake();
  }
  function placeFinger(d, lifted) {
    var R = rho() * geo.Ro, x = geo.cx + d[0] * R, y = geo.cy - d[1] * R;
    fingerEl.style.transform = 'translate(' + x.toFixed(1) + 'px,' + (y + (lifted ? -10 : 0)).toFixed(1) + 'px) scale(' + (lifted ? 1.06 : 1) + ')';
    return [x, y];
  }
  function tickDemo(now) {
    var t = (now - demo.t0) / 1000 - 0.55;        // a short approach before the press
    if (t < 0) { placeFinger(demoPoint(0), true); return; }
    if (t > 2.25) {
      if (!demo.over) { demo.over = true; release(); placeFinger(demoPoint(2.25), true); fingerEl.classList.remove('on'); }
      if (t > 3.1) endDemo(false);
      return;
    }
    var xy = placeFinger(demoPoint(t), false);
    if (!demo.pressed) { demo.pressed = true; press(xy[0], xy[1], now); } else moveTo(xy[0], xy[1], now);
  }
  function endDemo(byUser) {
    if (!demo) return;
    var pressed = demo.pressed && !demo.over;
    demo = null; fingerEl.classList.remove('on');
    if (pressed) release();
    if (!byUser) { resetPending = true; fadeDir = 1; }      // hand back a clean cup
  }

  /* ---------------------------------------------------------------- frame loop + self-tuning */
  var rafId = 0, lastT = 0, idle = 0, acc = 0, accN = 0, settle = 30, fpsShown = 0, fpsAcc = 0, fpsN = 0, fpsAt = 0;
  function wake() { idle = 0; if (!rafId && ok && !document.hidden) { lastT = 0; rafId = requestAnimationFrame(frame); } }

  function tune(dtReal) {
    if (PIN_LEVEL >= 0 || dtReal > 0.1) return;
    if (settle > 0) { settle--; return; }
    acc += dtReal; accN++;
    if (accN < 40) return;
    var avg = acc / accN; acc = 0; accN = 0;
    if (avg > 0.0205 && level < LEVELS.length - 1) {     // slower than ~49 fps over 40 frames: step down
      level += avg > 0.034 ? 2 : 1; if (level > LEVELS.length - 1) level = LEVELS.length - 1;
      buildSim(true); layout(); settle = 30;
    }
  }

  function frame(now, forcedDt) {
    if (MANUAL && !forcedDt) { rafId = 0; return; }
    if (!forcedDt) rafId = requestAnimationFrame(frame);
    var dtReal = forcedDt || (lastT ? (now - lastT) / 1000 : 1 / 60); lastT = now;
    if (dtReal <= 0) dtReal = 1 / 240;
    tune(dtReal);
    if (demo) tickDemo(now);
    var dt = Math.min(Math.max(dtReal, 1 / 240), 1 / 30);

    if (fadeDir) {
      fade += fadeDir * dtReal / 0.26;
      if (fade >= 1) { fade = 1; if (resetPending) { resetCup(); resetPending = false; } fadeDir = -1; }
      else if (fade <= 0) { fade = 0; fadeDir = 0; }
    }
    if (shine > 0) { shine += dtReal / 1.1; if (shine >= 1) shine = 0; }
    if (done && !freshBtn.classList.contains('on') && !resetPending && now - doneAt > 650) freshBtn.classList.add('on');

    step(dt, dtReal);
    render();
    frames++;

    if (SHOW_FPS) {
      fpsAcc += dtReal; fpsN++;
      if (now - fpsAt > 500) { fpsShown = fpsN / fpsAcc; fpsAcc = 0; fpsN = 0; fpsAt = now; fpsEl.textContent = Math.round(fpsShown) + ' fps · grid ' + simN + ' · milk ' + dyeN + ' · L' + level; }
    }

    // nothing moving and nobody touching: stop drawing until the next touch (battery)
    if (down || demo || fadeDir || shine > 0 || queue.length) idle = 0; else idle += dtReal;
    if (idle > 5 && !SHOW_FPS && !forcedDt) { cancelAnimationFrame(rafId); rafId = 0; }
  }

  /* ---------------------------------------------------------------- boot */
  function boot() {
    ok = initGL();
    if (!ok) { document.documentElement.classList.add('nogl'); return; }
    buildSim(false); layout();
    if (SHOW_FPS) fpsEl.style.display = 'block';
    wake();
    var seen = false; try { seen = localStorage.getItem(DEMO_KEY) === '1'; } catch (e) { }
    if (!seen && qs.get('demo') !== '0') setTimeout(startDemo, 700);
  }
  var rz = 0;
  window.addEventListener('resize', function () { clearTimeout(rz); rz = setTimeout(function () { layout(); pin(); wake(); }, 60); });
  window.addEventListener('orientationchange', function () { setTimeout(function () { layout(); pin(); wake(); }, 250); });
  document.addEventListener('visibilitychange', function () { if (document.hidden) { cancelAnimationFrame(rafId); rafId = 0; release(); } else wake(); });
  if (window.matchMedia) {
    var mq = window.matchMedia('(prefers-color-scheme: dark)');
    var onScheme = function () { if (ok) { paintBg(); wake(); } };
    if (mq.addEventListener) mq.addEventListener('change', onScheme); else if (mq.addListener) mq.addListener(onScheme);
  }
  canvas.addEventListener('webglcontextlost', function (e) { e.preventDefault(); cancelAnimationFrame(rafId); rafId = 0; ok = false; });
  canvas.addEventListener('webglcontextrestored', function () {
    vel = prs = div = dye = bg = null; simN = dyeN = 0; prog = {};
    ok = initGL(); if (ok) { buildSim(false); layout(); milkUsed = 0; done = false; freshBtn.classList.remove('on'); wake(); }
  });

  window.addEventListener('load', function () { window.scrollTo(0, 120); setTimeout(pin, 300); });
  boot();

  /* ---------------------------------------------------------------- for the test robot (read-only peeks) */
  var vclock = 0;
  window.__latte = {
    // manual mode only: feed finger events (screen px) stamped on the virtual clock, then advance one frame
    feed: function (type, x, y, tMs) { if (type === 'down') return press(x, y, tMs); if (type === 'move') moveTo(x, y, tMs); else release(); return true; },
    tick: function (dtMs) { vclock += dtMs; frame(vclock, dtMs / 1000); return frames; },
    state: function () {
      return { ok: ok, gl2: isGL2, frames: frames, fill: fill(), done: done, down: down, level: level, simN: simN, dyeN: dyeN, demo: !!demo, fade: fade, running: !!rafId,
        button: freshBtn.classList.contains('on'), geo: { W: geo.W, H: geo.H, cx: geo.cx, cy: geo.cy, Ro: geo.Ro, rho: rho(), canvasW: canvas.width, canvasH: canvas.height } };
    },
    // how white is the picture at these screen points right now? (0 coffee … 1 milk), read from the real frame
    white: function (points) {
      if (!ok) return null;
      render();
      var out = [], px = new Uint8Array(4);
      for (var i = 0; i < points.length; i++) {
        var x = Math.round(points[i][0] * geo.s), y = Math.round((geo.H - points[i][1]) * geo.s);
        gl.readPixels(x, y, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, px);
        out.push(+((Math.min(px[0], px[1], px[2]) - 20) / 200).toFixed(3));
      }
      return out;
    }
  };
})();
