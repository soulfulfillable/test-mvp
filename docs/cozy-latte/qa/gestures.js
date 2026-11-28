/* Hand movements the robot uses to make each order. Positions are in cup units (0,0 = centre, 1 = edge of the coffee, y up).
   A step: { s: seconds, h: jug height 0..1, a: flow 0..1, p: path }.  Paths: ['hold',x,y] ['line',x0,y0,x1,y1] ['wig',x,y0,y1,amp,cycles] ['off'].
   Then the cup is served. Played on a virtual 60 fps clock, 2 finger samples per frame. */
const GESTURES = {
  circle: [{ s: 9, h: 0.1, a: 0.6, p: ['hold', 0, 0] }],
  heart: [{ s: 7, h: 0.1, a: 0.6, p: ['hold', 0, 0.12] }, { s: 0.3, h: 0.6, a: 0.3, p: ['off'] }, { s: 0.45, h: 0.6, a: 0.3, p: ['line', 0, 0.8, 0, -0.35] }],
  leaf: [{ s: 1.0, h: 0.1, a: 0.6, p: ['hold', 0, 0.3] }, { s: 3.2, h: 0.1, a: 0.6, p: ['wig', 0, 0.3, -0.5, 0.36, 9] }, { s: 0.3, h: 0.6, a: 0.3, p: ['off'] }, { s: 0.6, h: 0.6, a: 0.3, p: ['line', 0, -0.62, 0, 0.8] }],
};
// runs inside the page
const RUN_SRC = `function runGesture(steps){
  var g=__latte.state().geo, t=0, on=false, frames=0;
  function pos(p,k){ if(p[0]==='hold')return[p[1],p[2]]; if(p[0]==='line')return[p[1]+(p[3]-p[1])*k,p[2]+(p[4]-p[2])*k];
    if(p[0]==='wig')return[p[1]+p[4]*Math.sin(k*Math.PI*2*p[5])*(1-0.25*k),p[2]+(p[3]-p[2])*k]; return null; }
  for(var i=0;i<steps.length && !__latte.state().done;i++){ var st=steps[i], n=Math.round(st.s*60);
    __latte.setDials(st.h,st.a);
    for(var f=0;f<n && !__latte.state().done;f++){ for(var j=0;j<2;j++){ t+=1000/120; var q=pos(st.p,(f*2+j+1)/(n*2));
        var R=__latte.state().geo.rho*g.Ro;
        if(!q){ if(on){__latte.feed('up');on=false;} continue; }
        var x=g.cx+q[0]*R, y=g.cy-q[1]*R; if(!on){__latte.feed('down',x,y,t);on=true;} else __latte.feed('move',x,y,t); }
      __latte.tick(1000/60); frames++; } }
  if(on)__latte.feed('up'); for(var z=0;z<60;z++)__latte.tick(1000/60); __latte.serve(); __latte.tick(1000/60);
  return {frames:frames, done:__latte.state().done, fill:__latte.state().fill}; }`;
if (typeof module !== 'undefined') module.exports = { GESTURES, RUN_SRC };
