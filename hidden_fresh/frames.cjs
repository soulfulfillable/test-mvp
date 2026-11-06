// Captures the found-it action of each round frame by frame (for eyes, not pass/fail)
const {chromium}=require('/opt/node-tools/node_modules/playwright-core');
const {execSync}=require('child_process');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium',args:['--no-sandbox']});
const p=await b.newPage({viewport:{width:390,height:844},hasTouch:true,isMobile:true,deviceScaleFactor:2});
await p.goto('file://'+__dirname+'/game/index.html');await p.waitForTimeout(300);
const out=process.argv[2];
for(let r=0;r<3;r++){await p.tap('#start');await p.waitForTimeout(300);
 const t=(await p.evaluate(()=>HF.targets()))[0];
 await p.touchscreen.tap(t.x,t.y);
 const files=[];
 for(let k=0;k<10;k++){const f=`${out}/f${r}_${k}.png`;await p.screenshot({path:f,clip:{x:Math.min(390-140,Math.max(0,t.x-70)),y:Math.max(0,t.y-95),width:140,height:150}});files.push(f);await p.waitForTimeout(110);}
 execSync(`python3 -c "from PIL import Image;fs='${files.join(' ')}'.split();ims=[Image.open(f) for f in fs];o=Image.new('RGB',(280*10,300));[o.paste(i,(k*280,0)) for k,i in enumerate(ims)];o.save('${out}/strip${r}.png')"`);
 await p.waitForTimeout(2500);
 {const T=await p.evaluate(()=>HF.targets());for(const q of T.filter(q=>!q.found)){await p.touchscreen.tap(q.x,q.y);await p.waitForTimeout(200);}await p.waitForTimeout(1800);}
 if(r===0)await p.screenshot({path:`${out}/donebar.png`});
 await p.tap('#next');await p.waitForTimeout(300);}
await b.close();})();
