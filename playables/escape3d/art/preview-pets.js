// Pet look-dev sheet: 4 views of a dressed model. Build: esbuild art/preview-pets.js --bundle → open with art/glb files next to it.
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import { dressDog, dressCat } from '../src/pets.js';
const q = new URLSearchParams(location.search); const which = q.get('m') || 'dog';
const W=1400,H=600; const r=new THREE.WebGLRenderer({antialias:true}); r.setSize(W,H); document.body.appendChild(r.domElement);
r.outputColorSpace=THREE.SRGBColorSpace; r.toneMapping=THREE.ACESFilmicToneMapping;
const s=new THREE.Scene(); s.background=new THREE.Color('#9fb4c4');
s.add(new THREE.HemisphereLight('#fff','#556',1.6)); const d=new THREE.DirectionalLight('#fff',2); d.position.set(3,5,4); s.add(d);
const cam=new THREE.PerspectiveCamera(22,W/H,0.1,100); cam.position.set(0,1.0,8); cam.lookAt(0,0.5,0);
const L=new GLTFLoader(); L.setMeshoptDecoder(MeshoptDecoder);
const views=q.get('close')?[0.35]:[0.6, Math.PI/2, Math.PI, -Math.PI/2+0.3];
if(q.get('close')){cam.position.set(0,0.75,3.2);cam.lookAt(0,0.55,0);}
for(let i=0;i<views.length;i++){
  const g=await L.loadAsync(which==='dog'?'wolf_cartoon.glb':'cat.glb'); const o=g.scene;
  (which==='dog'?dressDog:dressCat)(g);
  const m=new THREE.AnimationMixer(o); const c=g.animations.find(a=>a.name.endsWith(q.get('a')||'Idle')); if(c){m.clipAction(c).play(); m.update(+(q.get('t')||0.2));}
  const b=new THREE.Box3().setFromObject(o); const sc=1.0/(b.max.y-b.min.y); o.scale.setScalar(sc); o.rotation.y=views[i]; o.position.set(views.length===1?0:(i-1.5)*2.2,-b.min.y*sc,0); s.add(o);
}
r.render(s,cam); document.body.classList.add('ready');
