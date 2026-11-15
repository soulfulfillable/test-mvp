var ja="170";var Nh=0,Rc=1,Fh=2;var Pl=1,Qa=2,En=3,Jn=0,Ae=1,Oe=2,Xn=0,qn=1,dn=2,Cc=3,Ic=4,Oh=5,di=100,Bh=101,zh=102,kh=103,Hh=104,Vh=200,Gh=201,Wh=202,Xh=203,Fo=204,Oo=205,qh=206,Yh=207,Zh=208,Jh=209,$h=210,Kh=211,jh=212,Qh=213,tu=214,Bo=0,zo=1,ko=2,Gi=3,Ho=4,Vo=5,Go=6,Wo=7,Ll=0,eu=1,nu=2,Yn=0,iu=1,su=2,ru=3,Hr=4,ou=5,au=6,cu=7;var Dl=300,Wi=301,Xi=302,Xo=303,qo=304,Vr=306,gi=1e3,pi=1001,Yo=1002,sn=1003,lu=1004;var Ws=1005;var un=1006,no=1007;var mi=1008;var Cn=1009,Ul=1010,Nl=1011,Ms=1012,tc=1013,_i=1014,Tn=1015,Is=1016,ec=1017,nc=1018,qi=1020,Fl=35902,Ol=1021,Bl=1022,nn=1023,zl=1024,kl=1025,ki=1026,Yi=1027,Hl=1028,ic=1029,Vl=1030,sc=1031;var rc=1033,mr=33776,gr=33777,_r=33778,xr=33779,Zo=35840,Jo=35841,$o=35842,Ko=35843,jo=36196,Qo=37492,ta=37496,ea=37808,na=37809,ia=37810,sa=37811,ra=37812,oa=37813,aa=37814,ca=37815,la=37816,ha=37817,ua=37818,da=37819,fa=37820,pa=37821,vr=36492,ma=36494,ga=36495,Gl=36283,_a=36284,xa=36285,va=36286;var yr=2300,ya=2301,io=2302,Pc=2400,Lc=2401,Dc=2402;var hu=3200,uu=3201;var Wl=0,du=1,Gn="",pe="srgb",ji="srgb-linear",Gr="linear",ee="srgb";var Mi=7680;var Uc=519,fu=512,pu=513,mu=514,Xl=515,gu=516,_u=517,xu=518,vu=519,Ma=35044;var Nc="300 es",An=2e3,Mr=2001,$n=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var so=Math.PI/180,Sa=180/Math.PI;function Zn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(we[i&255]+we[i>>8&255]+we[i>>16&255]+we[i>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[n&255]+we[n>>8&255]+we[n>>16&255]+we[n>>24&255]).toLowerCase()}function Fe(i,t,e){return Math.max(t,Math.min(e,i))}function yu(i,t){return(i%t+t)%t}function ro(i,t,e){return(1-e)*i+e*t}function hn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ne(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var kt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},zt=class i{constructor(t,e,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],f=n[7],d=n[2],m=n[5],g=n[8],x=s[0],p=s[3],u=s[6],T=s[1],w=s[4],M=s[7],N=s[2],P=s[5],L=s[8];return r[0]=a*x+o*T+c*N,r[3]=a*p+o*w+c*P,r[6]=a*u+o*M+c*L,r[1]=l*x+h*T+f*N,r[4]=l*p+h*w+f*P,r[7]=l*u+h*M+f*L,r[2]=d*x+m*T+g*N,r[5]=d*p+m*w+g*P,r[8]=d*u+m*M+g*L,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=h*a-o*l,d=o*c-h*r,m=l*r-a*c,g=e*f+n*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=f*x,t[1]=(s*l-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=d*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-o*e)*x,t[6]=m*x,t[7]=(n*c-l*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(oo.makeScale(t,e)),this}rotate(t){return this.premultiply(oo.makeRotation(-t)),this}translate(t,e){return this.premultiply(oo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},oo=new zt;function ql(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Sr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Mu(){let i=Sr("canvas");return i.style.display="block",i}var Fc={};function xs(i){i in Fc||(Fc[i]=!0,console.warn(i))}function Su(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function bu(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Eu(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Zt={enabled:!0,workingColorSpace:ji,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ee&&(i.r=Rn(i.r),i.g=Rn(i.g),i.b=Rn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ee&&(i.r=Hi(i.r),i.g=Hi(i.g),i.b=Hi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Gn?Gr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Rn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Hi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Oc=[.64,.33,.3,.6,.15,.06],Bc=[.2126,.7152,.0722],zc=[.3127,.329],kc=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hc=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Zt.define({[ji]:{primaries:Oc,whitePoint:zc,transfer:Gr,toXYZ:kc,fromXYZ:Hc,luminanceCoefficients:Bc,workingColorSpaceConfig:{unpackColorSpace:pe},outputColorSpaceConfig:{drawingBufferColorSpace:pe}},[pe]:{primaries:Oc,whitePoint:zc,transfer:ee,toXYZ:kc,fromXYZ:Hc,luminanceCoefficients:Bc,outputColorSpaceConfig:{drawingBufferColorSpace:pe}}});var Si,ba=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Si===void 0&&(Si=Sr("canvas")),Si.width=t.width,Si.height=t.height;let n=Si.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Si}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Sr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Rn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Rn(e[n]/255)*255):e[n]=Rn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},wu=0,br=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=Zn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ao(s[a].image)):r.push(ao(s[a]))}else r=ao(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ao(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ba.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Tu=0,We=class i extends $n{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=pi,s=pi,r=un,a=mi,o=nn,c=Cn,l=i.DEFAULT_ANISOTROPY,h=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=Zn(),this.name="",this.source=new br(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Dl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case gi:t.x=t.x-Math.floor(t.x);break;case pi:t.x=t.x<0?0:1;break;case Yo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case gi:t.y=t.y-Math.floor(t.y);break;case pi:t.y=t.y<0?0:1;break;case Yo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=Dl;We.DEFAULT_ANISOTROPY=1;var ie=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],f=c[8],d=c[1],m=c[5],g=c[9],x=c[2],p=c[6],u=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+x)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(l+1)/2,M=(m+1)/2,N=(u+1)/2,P=(h+d)/4,L=(f+x)/4,V=(g+p)/4;return w>M&&w>N?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=P/n,r=L/n):M>N?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=P/s,r=V/s):N<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(N),n=L/r,s=V/r),this.set(n,s,r,e),this}let T=Math.sqrt((p-g)*(p-g)+(f-x)*(f-x)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(p-g)/T,this.y=(f-x)/T,this.z=(d-h)/T,this.w=Math.acos((l+m+u-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ea=class extends $n{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ie(0,0,t,e),this.scissorTest=!1,this.viewport=new ie(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new We(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new br(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},In=class extends Ea{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Er=class extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var wa=class extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Kn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],f=n[s+3],d=r[a+0],m=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f;return}if(o===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=x;return}if(f!==x||c!==d||l!==m||h!==g){let p=1-o,u=c*d+l*m+h*g+f*x,T=u>=0?1:-1,w=1-u*u;if(w>Number.EPSILON){let N=Math.sqrt(w),P=Math.atan2(N,u*T);p=Math.sin(p*P)/N,o=Math.sin(o*P)/N}let M=o*T;if(c=c*p+d*M,l=l*p+m*M,h=h*p+g*M,f=f*p+x*M,p===1-o){let N=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=N,l*=N,h*=N,f*=N}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],f=r[a],d=r[a+1],m=r[a+2],g=r[a+3];return t[e]=o*g+h*f+c*m-l*d,t[e+1]=c*g+h*d+l*f-o*m,t[e+2]=l*g+h*m+o*d-c*f,t[e+3]=h*g-o*f-c*d-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),f=o(r/2),d=c(n/2),m=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*f+l*m*g,this._y=l*m*f-d*h*g,this._z=l*h*g+d*m*f,this._w=l*h*f-d*m*g;break;case"YXZ":this._x=d*h*f+l*m*g,this._y=l*m*f-d*h*g,this._z=l*h*g-d*m*f,this._w=l*h*f+d*m*g;break;case"ZXY":this._x=d*h*f-l*m*g,this._y=l*m*f+d*h*g,this._z=l*h*g+d*m*f,this._w=l*h*f-d*m*g;break;case"ZYX":this._x=d*h*f-l*m*g,this._y=l*m*f+d*h*g,this._z=l*h*g-d*m*f,this._w=l*h*f+d*m*g;break;case"YZX":this._x=d*h*f+l*m*g,this._y=l*m*f+d*h*g,this._z=l*h*g-d*m*f,this._w=l*h*f-d*m*g;break;case"XZY":this._x=d*h*f-l*m*g,this._y=l*m*f-d*h*g,this._z=l*h*g+d*m*f,this._w=l*h*f+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],f=e[10],d=n+o+f;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(n>o&&n>f){let m=2*Math.sqrt(1+n-o-f);this._w=(h-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>f){let m=2*Math.sqrt(1+o-n-f);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+f-n-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Fe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),f=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+c*l+a*f-o*h,this.y=n+c*h+o*l-r*f,this.z=s+c*f+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return co.copy(this).projectOnVector(t),this.sub(co)}reflect(t){return this.sub(co.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},co=new C,Vc=new Kn,Pn=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Qe):Qe.fromBufferAttribute(r,a),Qe.applyMatrix4(t.matrixWorld),this.expandByPoint(Qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xs.copy(n.boundingBox)),Xs.applyMatrix4(t.matrixWorld),this.union(Xs)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Qe),Qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(hs),qs.subVectors(this.max,hs),bi.subVectors(t.a,hs),Ei.subVectors(t.b,hs),wi.subVectors(t.c,hs),On.subVectors(Ei,bi),Bn.subVectors(wi,Ei),ri.subVectors(bi,wi);let e=[0,-On.z,On.y,0,-Bn.z,Bn.y,0,-ri.z,ri.y,On.z,0,-On.x,Bn.z,0,-Bn.x,ri.z,0,-ri.x,-On.y,On.x,0,-Bn.y,Bn.x,0,-ri.y,ri.x,0];return!lo(e,bi,Ei,wi,qs)||(e=[1,0,0,0,1,0,0,0,1],!lo(e,bi,Ei,wi,qs))?!1:(Ys.crossVectors(On,Bn),e=[Ys.x,Ys.y,Ys.z],lo(e,bi,Ei,wi,qs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},vn=[new C,new C,new C,new C,new C,new C,new C,new C],Qe=new C,Xs=new Pn,bi=new C,Ei=new C,wi=new C,On=new C,Bn=new C,ri=new C,hs=new C,qs=new C,Ys=new C,oi=new C;function lo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){oi.fromArray(i,r);let o=s.x*Math.abs(oi.x)+s.y*Math.abs(oi.y)+s.z*Math.abs(oi.z),c=t.dot(oi),l=e.dot(oi),h=n.dot(oi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Au=new Pn,us=new C,ho=new C,Ss=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Au.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;us.subVectors(t,this.center);let e=us.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(us,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ho.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(us.copy(t.center).add(ho)),this.expandByPoint(us.copy(t.center).sub(ho))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},yn=new C,uo=new C,Zs=new C,zn=new C,fo=new C,Js=new C,po=new C,Ta=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yn.copy(this.origin).addScaledVector(this.direction,e),yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){uo.copy(t).add(e).multiplyScalar(.5),Zs.copy(e).sub(t).normalize(),zn.copy(this.origin).sub(uo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Zs),o=zn.dot(this.direction),c=-zn.dot(Zs),l=zn.lengthSq(),h=Math.abs(1-a*a),f,d,m,g;if(h>0)if(f=a*c-o,d=a*o-c,g=r*h,f>=0)if(d>=-g)if(d<=g){let x=1/h;f*=x,d*=x,m=f*(f+a*d+2*o)+d*(a*f+d+2*c)+l}else d=r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;else d=-r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;else d<=-g?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-c),r),m=-f*f+d*(d+2*c)+l):d<=g?(f=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+l):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-c),r),m=-f*f+d*(d+2*c)+l);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(uo).addScaledVector(Zs,d),m}intersectSphere(t,e){yn.subVectors(t.center,this.origin);let n=yn.dot(this.direction),s=yn.dot(yn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-d.z)*f,c=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,c=(t.min.z-d.z)*f),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,yn)!==null}intersectTriangle(t,e,n,s,r){fo.subVectors(e,t),Js.subVectors(n,t),po.crossVectors(fo,Js);let a=this.direction.dot(po),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;zn.subVectors(this.origin,t);let c=o*this.direction.dot(Js.crossVectors(zn,Js));if(c<0)return null;let l=o*this.direction.dot(fo.cross(zn));if(l<0||c+l>a)return null;let h=-o*zn.dot(po);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},de=class i{constructor(t,e,n,s,r,a,o,c,l,h,f,d,m,g,x,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,f,d,m,g,x,p)}set(t,e,n,s,r,a,o,c,l,h,f,d,m,g,x,p){let u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=h,u[10]=f,u[14]=d,u[3]=m,u[7]=g,u[11]=x,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Ti.setFromMatrixColumn(t,0).length(),r=1/Ti.setFromMatrixColumn(t,1).length(),a=1/Ti.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let d=a*h,m=a*f,g=o*h,x=o*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=m+g*l,e[5]=d-x*l,e[9]=-o*c,e[2]=x-d*l,e[6]=g+m*l,e[10]=a*c}else if(t.order==="YXZ"){let d=c*h,m=c*f,g=l*h,x=l*f;e[0]=d+x*o,e[4]=g*o-m,e[8]=a*l,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=m*o-g,e[6]=x+d*o,e[10]=a*c}else if(t.order==="ZXY"){let d=c*h,m=c*f,g=l*h,x=l*f;e[0]=d-x*o,e[4]=-a*f,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let d=a*h,m=a*f,g=o*h,x=o*f;e[0]=c*h,e[4]=g*l-m,e[8]=d*l+x,e[1]=c*f,e[5]=x*l+d,e[9]=m*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let d=a*c,m=a*l,g=o*c,x=o*l;e[0]=c*h,e[4]=x-d*f,e[8]=g*f+m,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=m*f+g,e[10]=d-x*f}else if(t.order==="XZY"){let d=a*c,m=a*l,g=o*c,x=o*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=d*f+x,e[5]=a*h,e[9]=m*f-g,e[2]=g*f-m,e[6]=o*h,e[10]=x*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ru,t,Cu)}lookAt(t,e,n){let s=this.elements;return Ve.subVectors(t,e),Ve.lengthSq()===0&&(Ve.z=1),Ve.normalize(),kn.crossVectors(n,Ve),kn.lengthSq()===0&&(Math.abs(n.z)===1?Ve.x+=1e-4:Ve.z+=1e-4,Ve.normalize(),kn.crossVectors(n,Ve)),kn.normalize(),$s.crossVectors(Ve,kn),s[0]=kn.x,s[4]=$s.x,s[8]=Ve.x,s[1]=kn.y,s[5]=$s.y,s[9]=Ve.y,s[2]=kn.z,s[6]=$s.z,s[10]=Ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],f=n[5],d=n[9],m=n[13],g=n[2],x=n[6],p=n[10],u=n[14],T=n[3],w=n[7],M=n[11],N=n[15],P=s[0],L=s[4],V=s[8],b=s[12],S=s[1],U=s[5],$=s[9],X=s[13],_=s[2],R=s[6],E=s[10],O=s[14],I=s[3],D=s[7],W=s[11],q=s[15];return r[0]=a*P+o*S+c*_+l*I,r[4]=a*L+o*U+c*R+l*D,r[8]=a*V+o*$+c*E+l*W,r[12]=a*b+o*X+c*O+l*q,r[1]=h*P+f*S+d*_+m*I,r[5]=h*L+f*U+d*R+m*D,r[9]=h*V+f*$+d*E+m*W,r[13]=h*b+f*X+d*O+m*q,r[2]=g*P+x*S+p*_+u*I,r[6]=g*L+x*U+p*R+u*D,r[10]=g*V+x*$+p*E+u*W,r[14]=g*b+x*X+p*O+u*q,r[3]=T*P+w*S+M*_+N*I,r[7]=T*L+w*U+M*R+N*D,r[11]=T*V+w*$+M*E+N*W,r[15]=T*b+w*X+M*O+N*q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],f=t[6],d=t[10],m=t[14],g=t[3],x=t[7],p=t[11],u=t[15];return g*(+r*c*f-s*l*f-r*o*d+n*l*d+s*o*m-n*c*m)+x*(+e*c*m-e*l*d+r*a*d-s*a*m+s*l*h-r*c*h)+p*(+e*l*f-e*o*m-r*a*f+n*a*m+r*o*h-n*l*h)+u*(-s*o*h-e*c*f+e*o*d+s*a*f-n*a*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=t[9],d=t[10],m=t[11],g=t[12],x=t[13],p=t[14],u=t[15],T=f*p*l-x*d*l+x*c*m-o*p*m-f*c*u+o*d*u,w=g*d*l-h*p*l-g*c*m+a*p*m+h*c*u-a*d*u,M=h*x*l-g*f*l+g*o*m-a*x*m-h*o*u+a*f*u,N=g*f*c-h*x*c-g*o*d+a*x*d+h*o*p-a*f*p,P=e*T+n*w+s*M+r*N;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/P;return t[0]=T*L,t[1]=(x*d*r-f*p*r-x*s*m+n*p*m+f*s*u-n*d*u)*L,t[2]=(o*p*r-x*c*r+x*s*l-n*p*l-o*s*u+n*c*u)*L,t[3]=(f*c*r-o*d*r-f*s*l+n*d*l+o*s*m-n*c*m)*L,t[4]=w*L,t[5]=(h*p*r-g*d*r+g*s*m-e*p*m-h*s*u+e*d*u)*L,t[6]=(g*c*r-a*p*r-g*s*l+e*p*l+a*s*u-e*c*u)*L,t[7]=(a*d*r-h*c*r+h*s*l-e*d*l-a*s*m+e*c*m)*L,t[8]=M*L,t[9]=(g*f*r-h*x*r-g*n*m+e*x*m+h*n*u-e*f*u)*L,t[10]=(a*x*r-g*o*r+g*n*l-e*x*l-a*n*u+e*o*u)*L,t[11]=(h*o*r-a*f*r-h*n*l+e*f*l+a*n*m-e*o*m)*L,t[12]=N*L,t[13]=(h*x*s-g*f*s+g*n*d-e*x*d-h*n*p+e*f*p)*L,t[14]=(g*o*s-a*x*s-g*n*c+e*x*c+a*n*p-e*o*p)*L,t[15]=(a*f*s-h*o*s+h*n*c-e*f*c-a*n*d+e*o*d)*L,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,f=o+o,d=r*l,m=r*h,g=r*f,x=a*h,p=a*f,u=o*f,T=c*l,w=c*h,M=c*f,N=n.x,P=n.y,L=n.z;return s[0]=(1-(x+u))*N,s[1]=(m+M)*N,s[2]=(g-w)*N,s[3]=0,s[4]=(m-M)*P,s[5]=(1-(d+u))*P,s[6]=(p+T)*P,s[7]=0,s[8]=(g+w)*L,s[9]=(p-T)*L,s[10]=(1-(d+x))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Ti.set(s[0],s[1],s[2]).length(),a=Ti.set(s[4],s[5],s[6]).length(),o=Ti.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],tn.copy(this);let l=1/r,h=1/a,f=1/o;return tn.elements[0]*=l,tn.elements[1]*=l,tn.elements[2]*=l,tn.elements[4]*=h,tn.elements[5]*=h,tn.elements[6]*=h,tn.elements[8]*=f,tn.elements[9]*=f,tn.elements[10]*=f,e.setFromRotationMatrix(tn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=An){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),m,g;if(o===An)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Mr)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=An){let c=this.elements,l=1/(e-t),h=1/(n-s),f=1/(a-r),d=(e+t)*l,m=(n+s)*h,g,x;if(o===An)g=(a+r)*f,x=-2*f;else if(o===Mr)g=r*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ti=new C,tn=new de,Ru=new C(0,0,0),Cu=new C(1,1,1),kn=new C,$s=new C,Ve=new C,Gc=new de,Wc=new Kn,fn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],f=s[2],d=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Fe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Fe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Gc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wc.setFromEuler(this),this.setFromQuaternion(Wc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fn.DEFAULT_ORDER="XYZ";var wr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Iu=0,Xc=new C,Ai=new Kn,Mn=new de,Ks=new C,ds=new C,Pu=new C,Lu=new Kn,qc=new C(1,0,0),Yc=new C(0,1,0),Zc=new C(0,0,1),Jc={type:"added"},Du={type:"removed"},Ri={type:"childadded",child:null},mo={type:"childremoved",child:null},Re=class i extends $n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new C,e=new fn,n=new Kn,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new de},normalMatrix:{value:new zt}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ai.setFromAxisAngle(t,e),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(t,e){return Ai.setFromAxisAngle(t,e),this.quaternion.premultiply(Ai),this}rotateX(t){return this.rotateOnAxis(qc,t)}rotateY(t){return this.rotateOnAxis(Yc,t)}rotateZ(t){return this.rotateOnAxis(Zc,t)}translateOnAxis(t,e){return Xc.copy(t).applyQuaternion(this.quaternion),this.position.add(Xc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(qc,t)}translateY(t){return this.translateOnAxis(Yc,t)}translateZ(t){return this.translateOnAxis(Zc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ks.copy(t):Ks.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(ds,Ks,this.up):Mn.lookAt(Ks,ds,this.up),this.quaternion.setFromRotationMatrix(Mn),s&&(Mn.extractRotation(s.matrixWorld),Ai.setFromRotationMatrix(Mn),this.quaternion.premultiply(Ai.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Jc),Ri.child=t,this.dispatchEvent(Ri),Ri.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Du),mo.child=t,this.dispatchEvent(mo),mo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Jc),Ri.child=t,this.dispatchEvent(Ri),Ri.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,t,Pu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,Lu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),f=a(t.shapes),d=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Re.DEFAULT_UP=new C(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var en=new C,Sn=new C,go=new C,bn=new C,Ci=new C,Ii=new C,$c=new C,_o=new C,xo=new C,vo=new C,yo=new ie,Mo=new ie,So=new ie,Wn=class i{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),en.subVectors(t,e),s.cross(en);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){en.subVectors(s,e),Sn.subVectors(n,e),go.subVectors(t,e);let a=en.dot(en),o=en.dot(Sn),c=en.dot(go),l=Sn.dot(Sn),h=Sn.dot(go),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;let d=1/f,m=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,bn)===null?!1:bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,bn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,bn.x),c.addScaledVector(a,bn.y),c.addScaledVector(o,bn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return yo.setScalar(0),Mo.setScalar(0),So.setScalar(0),yo.fromBufferAttribute(t,e),Mo.fromBufferAttribute(t,n),So.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(yo,r.x),a.addScaledVector(Mo,r.y),a.addScaledVector(So,r.z),a}static isFrontFacing(t,e,n,s){return en.subVectors(n,e),Sn.subVectors(t,e),en.cross(Sn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return en.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),en.cross(Sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Ci.subVectors(s,n),Ii.subVectors(r,n),_o.subVectors(t,n);let c=Ci.dot(_o),l=Ii.dot(_o);if(c<=0&&l<=0)return e.copy(n);xo.subVectors(t,s);let h=Ci.dot(xo),f=Ii.dot(xo);if(h>=0&&f<=h)return e.copy(s);let d=c*f-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Ci,a);vo.subVectors(t,r);let m=Ci.dot(vo),g=Ii.dot(vo);if(g>=0&&m<=g)return e.copy(r);let x=m*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Ii,o);let p=h*g-m*f;if(p<=0&&f-h>=0&&m-g>=0)return $c.subVectors(r,s),o=(f-h)/(f-h+(m-g)),e.copy(s).addScaledVector($c,o);let u=1/(p+x+d);return a=x*u,o=d*u,e.copy(n).addScaledVector(Ci,a).addScaledVector(Ii,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Yl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},js={h:0,s:0,l:0};function bo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ft=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Zt.workingColorSpace){if(t=yu(t,1),e=Fe(e,0,1),n=Fe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=bo(a,r,t+1/3),this.g=bo(a,r,t),this.b=bo(a,r,t-1/3)}return Zt.toWorkingColorSpace(this,s),this}setStyle(t,e=pe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=pe){let n=Yl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Rn(t.r),this.g=Rn(t.g),this.b=Rn(t.b),this}copyLinearToSRGB(t){return this.r=Hi(t.r),this.g=Hi(t.g),this.b=Hi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pe){return Zt.fromWorkingColorSpace(Te.copy(this),t),Math.round(Fe(Te.r*255,0,255))*65536+Math.round(Fe(Te.g*255,0,255))*256+Math.round(Fe(Te.b*255,0,255))}getHexString(t=pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Te.copy(this),e);let n=Te.r,s=Te.g,r=Te.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t=pe){Zt.fromWorkingColorSpace(Te.copy(this),t);let e=Te.r,n=Te.g,s=Te.b;return t!==pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Hn),this.setHSL(Hn.h+t,Hn.s+e,Hn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Hn),t.getHSL(js);let n=ro(Hn.h,js.h,e),s=ro(Hn.s,js.s,e),r=ro(Hn.l,js.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Te=new Ft;Ft.NAMES=Yl;var Uu=0,jn=class extends $n{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=Zn(),this.name="",this.blending=qn,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fo,this.blendDst=Oo,this.blendEquation=di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=Gi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mi,this.stencilZFail=Mi,this.stencilZPass=Mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qn&&(n.blending=this.blending),this.side!==Jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fo&&(n.blendSrc=this.blendSrc),this.blendDst!==Oo&&(n.blendDst=this.blendDst),this.blendEquation!==di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Mi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Mi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ce=class extends jn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=Ll,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var me=new C,Qs=new kt,Le=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ma,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Qs.fromBufferAttribute(this,e),Qs.applyMatrix3(t),this.setXY(e,Qs.x,Qs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=hn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ne(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),s=ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),s=ne(s,this.array),r=ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ma&&(t.usage=this.usage),t}};var Tr=class extends Le{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ar=class extends Le{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var re=class extends Le{constructor(t,e,n){super(new Float32Array(t),e,n)}},Nu=0,qe=new de,Eo=new Re,Pi=new C,Ge=new Pn,fs=new Pn,ye=new C,De=class i extends $n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ql(t)?Ar:Tr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qe.makeRotationFromQuaternion(t),this.applyMatrix4(qe),this}rotateX(t){return qe.makeRotationX(t),this.applyMatrix4(qe),this}rotateY(t){return qe.makeRotationY(t),this.applyMatrix4(qe),this}rotateZ(t){return qe.makeRotationZ(t),this.applyMatrix4(qe),this}translate(t,e,n){return qe.makeTranslation(t,e,n),this.applyMatrix4(qe),this}scale(t,e,n){return qe.makeScale(t,e,n),this.applyMatrix4(qe),this}lookAt(t){return Eo.lookAt(t),Eo.updateMatrix(),this.applyMatrix4(Eo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pi).negate(),this.translate(Pi.x,Pi.y,Pi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new re(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ge.setFromBufferAttribute(r),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,Ge.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,Ge.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(Ge.min),this.boundingBox.expandByPoint(Ge.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ss);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let n=this.boundingSphere.center;if(Ge.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];fs.setFromBufferAttribute(o),this.morphTargetsRelative?(ye.addVectors(Ge.min,fs.min),Ge.expandByPoint(ye),ye.addVectors(Ge.max,fs.max),Ge.expandByPoint(ye)):(Ge.expandByPoint(fs.min),Ge.expandByPoint(fs.max))}Ge.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ye.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ye));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)ye.fromBufferAttribute(o,l),c&&(Pi.fromBufferAttribute(t,l),ye.add(Pi)),s=Math.max(s,n.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Le(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let V=0;V<n.count;V++)o[V]=new C,c[V]=new C;let l=new C,h=new C,f=new C,d=new kt,m=new kt,g=new kt,x=new C,p=new C;function u(V,b,S){l.fromBufferAttribute(n,V),h.fromBufferAttribute(n,b),f.fromBufferAttribute(n,S),d.fromBufferAttribute(r,V),m.fromBufferAttribute(r,b),g.fromBufferAttribute(r,S),h.sub(l),f.sub(l),m.sub(d),g.sub(d);let U=1/(m.x*g.y-g.x*m.y);isFinite(U)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(U),p.copy(f).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(U),o[V].add(x),o[b].add(x),o[S].add(x),c[V].add(p),c[b].add(p),c[S].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let V=0,b=T.length;V<b;++V){let S=T[V],U=S.start,$=S.count;for(let X=U,_=U+$;X<_;X+=3)u(t.getX(X+0),t.getX(X+1),t.getX(X+2))}let w=new C,M=new C,N=new C,P=new C;function L(V){N.fromBufferAttribute(s,V),P.copy(N);let b=o[V];w.copy(b),w.sub(N.multiplyScalar(N.dot(b))).normalize(),M.crossVectors(P,b);let U=M.dot(c[V])<0?-1:1;a.setXYZW(V,w.x,w.y,w.z,U)}for(let V=0,b=T.length;V<b;++V){let S=T[V],U=S.start,$=S.count;for(let X=U,_=U+$;X<_;X+=3)L(t.getX(X+0)),L(t.getX(X+1)),L(t.getX(X+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Le(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let s=new C,r=new C,a=new C,o=new C,c=new C,l=new C,h=new C,f=new C;if(t)for(let d=0,m=t.count;d<m;d+=3){let g=t.getX(d+0),x=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,p),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=e.count;d<m;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,f=o.normalized,d=new l.constructor(c.length*h),m=0,g=0;for(let x=0,p=c.length;x<p;x++){o.isInterleavedBufferAttribute?m=c[x]*o.data.stride+o.offset:m=c[x]*h;for(let u=0;u<h;u++)d[g++]=l[m++]}return new Le(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,f=l.length;h<f;h++){let d=l[h],m=t(d,n);c.push(m)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,d=l.length;f<d;f++){let m=l[f];h.push(m.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],f=r[l];for(let d=0,m=f.length;d<m;d++)h.push(f[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kc=new de,ai=new Ta,tr=new Ss,jc=new C,er=new C,nr=new C,ir=new C,wo=new C,sr=new C,Qc=new C,rr=new C,Pt=class extends Re{constructor(t=new De,e=new Ce){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){sr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],f=r[c];h!==0&&(wo.fromBufferAttribute(f,t),a?sr.addScaledVector(wo,h):sr.addScaledVector(wo.sub(e),h))}e.add(sr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere),tr.applyMatrix4(r),ai.copy(t.ray).recast(t.near),!(tr.containsPoint(ai.origin)===!1&&(ai.intersectSphere(tr,jc)===null||ai.origin.distanceToSquared(jc)>(t.far-t.near)**2))&&(Kc.copy(r).invert(),ai.copy(t.ray).applyMatrix4(Kc),!(n.boundingBox!==null&&ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ai)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let p=d[g],u=a[p.materialIndex],T=Math.max(p.start,m.start),w=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let M=T,N=w;M<N;M+=3){let P=o.getX(M),L=o.getX(M+1),V=o.getX(M+2);s=or(this,u,t,n,l,h,f,P,L,V),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let p=g,u=x;p<u;p+=3){let T=o.getX(p),w=o.getX(p+1),M=o.getX(p+2);s=or(this,a,t,n,l,h,f,T,w,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let p=d[g],u=a[p.materialIndex],T=Math.max(p.start,m.start),w=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let M=T,N=w;M<N;M+=3){let P=M,L=M+1,V=M+2;s=or(this,u,t,n,l,h,f,P,L,V),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let p=g,u=x;p<u;p+=3){let T=p,w=p+1,M=p+2;s=or(this,a,t,n,l,h,f,T,w,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Fu(i,t,e,n,s,r,a,o){let c;if(t.side===Ae?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Jn,o),c===null)return null;rr.copy(o),rr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(rr);return l<e.near||l>e.far?null:{distance:l,point:rr.clone(),object:i}}function or(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,er),i.getVertexPosition(c,nr),i.getVertexPosition(l,ir);let h=Fu(i,t,e,n,er,nr,ir,Qc);if(h){let f=new C;Wn.getBarycoord(Qc,er,nr,ir,f),s&&(h.uv=Wn.getInterpolatedAttribute(s,o,c,l,f,new kt)),r&&(h.uv1=Wn.getInterpolatedAttribute(r,o,c,l,f,new kt)),a&&(h.normal=Wn.getInterpolatedAttribute(a,o,c,l,f,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new C,materialIndex:0};Wn.getNormal(er,nr,ir,d.normal),h.face=d,h.barycoord=f}return h}var ge=class i extends De{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],f=[],d=0,m=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new re(l,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(f,2));function g(x,p,u,T,w,M,N,P,L,V,b){let S=M/L,U=N/V,$=M/2,X=N/2,_=P/2,R=L+1,E=V+1,O=0,I=0,D=new C;for(let W=0;W<E;W++){let q=W*U-X;for(let j=0;j<R;j++){let ot=j*S-$;D[x]=ot*T,D[p]=q*w,D[u]=_,l.push(D.x,D.y,D.z),D[x]=0,D[p]=0,D[u]=P>0?1:-1,h.push(D.x,D.y,D.z),f.push(j/L),f.push(1-W/V),O+=1}}for(let W=0;W<V;W++)for(let q=0;q<L;q++){let j=d+q+R*W,ot=d+q+R*(W+1),z=d+(q+1)+R*(W+1),J=d+(q+1)+R*W;c.push(j,ot,J),c.push(ot,z,J),I+=6}o.addGroup(m,I,b),m+=I,d+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Zi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Pe(i){let t={};for(let e=0;e<i.length;e++){let n=Zi(i[e]);for(let s in n)t[s]=n[s]}return t}function Ou(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Zl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}var Bu={clone:Zi,merge:Pe},zu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ku=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pn=class extends jn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zu,this.fragmentShader=ku,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zi(t.uniforms),this.uniformsGroups=Ou(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Rr=class extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=An}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Vn=new C,tl=new kt,el=new kt,Me=class extends Rr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Sa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(so*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Sa*2*Math.atan(Math.tan(so*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z),Vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z)}getViewSize(t,e){return this.getViewBounds(t,tl,el),e.subVectors(el,tl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(so*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Li=-90,Di=1,Aa=class extends Re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Me(Li,Di,t,e);s.layers=this.layers,this.add(s);let r=new Me(Li,Di,t,e);r.layers=this.layers,this.add(r);let a=new Me(Li,Di,t,e);a.layers=this.layers,this.add(a);let o=new Me(Li,Di,t,e);o.layers=this.layers,this.add(o);let c=new Me(Li,Di,t,e);c.layers=this.layers,this.add(c);let l=new Me(Li,Di,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===An)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Mr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(f,d,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Cr=class extends We{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Wi,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ra=class extends In{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Cr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:un}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ge(5,5,5),r=new pn({name:"CubemapFromEquirect",uniforms:Zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ae,blending:Xn});r.uniforms.tEquirect.value=e;let a=new Pt(s,r),o=e.minFilter;return e.minFilter===mi&&(e.minFilter=un),new Aa(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},To=new C,Hu=new C,Vu=new zt,wn=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=To.subVectors(n,e).cross(Hu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(To),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Vu.getNormalMatrix(t),s=this.coplanarPoint(To).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ci=new Ss,ar=new C,bs=class{constructor(t=new wn,e=new wn,n=new wn,s=new wn,r=new wn,a=new wn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=An){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],f=s[6],d=s[7],m=s[8],g=s[9],x=s[10],p=s[11],u=s[12],T=s[13],w=s[14],M=s[15];if(n[0].setComponents(c-r,d-l,p-m,M-u).normalize(),n[1].setComponents(c+r,d+l,p+m,M+u).normalize(),n[2].setComponents(c+a,d+h,p+g,M+T).normalize(),n[3].setComponents(c-a,d-h,p-g,M-T).normalize(),n[4].setComponents(c-o,d-f,p-x,M-w).normalize(),e===An)n[5].setComponents(c+o,d+f,p+x,M+w).normalize();else if(e===Mr)n[5].setComponents(o,f,x,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(t){return ci.center.set(0,0,0),ci.radius=.7071067811865476,ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ar.x=s.normal.x>0?t.max.x:t.min.x,ar.y=s.normal.y>0?t.max.y:t.min.y,ar.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ar)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Jl(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Gu(i){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,f=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){let h=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,h);else{f.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<f.length;m++){let g=f[d],x=f[m];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,f[d]=x)}f.length=d+1;for(let m=0,g=f.length;m<g;m++){let x=f[m];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Be=class i extends De{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,f=t/o,d=e/c,m=[],g=[],x=[],p=[];for(let u=0;u<h;u++){let T=u*d-a;for(let w=0;w<l;w++){let M=w*f-r;g.push(M,-T,0),x.push(0,0,1),p.push(w/o),p.push(1-u/c)}}for(let u=0;u<c;u++)for(let T=0;T<o;T++){let w=T+l*u,M=T+l*(u+1),N=T+1+l*(u+1),P=T+1+l*u;m.push(w,M,P),m.push(M,N,P)}this.setIndex(m),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(x,3)),this.setAttribute("uv",new re(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Wu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ju=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$u=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ku=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ju=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Qu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,td=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ed=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,id=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,od=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ld=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ud=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,fd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,md=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_d=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Md=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,bd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ed=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Td=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ad=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Id=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ld=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ud=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Fd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Od=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Vd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Gd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$d=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ef=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,of=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,af=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,df=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ff=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_f=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,yf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ef=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Af=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Rf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Cf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,If=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Lf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Df=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Uf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ff=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Of=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Gf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Wf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$f=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Kf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Qf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ep=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,np=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ip=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,op=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ap=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,up=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_p=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Sp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gt={alphahash_fragment:Wu,alphahash_pars_fragment:Xu,alphamap_fragment:qu,alphamap_pars_fragment:Yu,alphatest_fragment:Zu,alphatest_pars_fragment:Ju,aomap_fragment:$u,aomap_pars_fragment:Ku,batching_pars_vertex:ju,batching_vertex:Qu,begin_vertex:td,beginnormal_vertex:ed,bsdfs:nd,iridescence_fragment:id,bumpmap_pars_fragment:sd,clipping_planes_fragment:rd,clipping_planes_pars_fragment:od,clipping_planes_pars_vertex:ad,clipping_planes_vertex:cd,color_fragment:ld,color_pars_fragment:hd,color_pars_vertex:ud,color_vertex:dd,common:fd,cube_uv_reflection_fragment:pd,defaultnormal_vertex:md,displacementmap_pars_vertex:gd,displacementmap_vertex:_d,emissivemap_fragment:xd,emissivemap_pars_fragment:vd,colorspace_fragment:yd,colorspace_pars_fragment:Md,envmap_fragment:Sd,envmap_common_pars_fragment:bd,envmap_pars_fragment:Ed,envmap_pars_vertex:wd,envmap_physical_pars_fragment:Fd,envmap_vertex:Td,fog_vertex:Ad,fog_pars_vertex:Rd,fog_fragment:Cd,fog_pars_fragment:Id,gradientmap_pars_fragment:Pd,lightmap_pars_fragment:Ld,lights_lambert_fragment:Dd,lights_lambert_pars_fragment:Ud,lights_pars_begin:Nd,lights_toon_fragment:Od,lights_toon_pars_fragment:Bd,lights_phong_fragment:zd,lights_phong_pars_fragment:kd,lights_physical_fragment:Hd,lights_physical_pars_fragment:Vd,lights_fragment_begin:Gd,lights_fragment_maps:Wd,lights_fragment_end:Xd,logdepthbuf_fragment:qd,logdepthbuf_pars_fragment:Yd,logdepthbuf_pars_vertex:Zd,logdepthbuf_vertex:Jd,map_fragment:$d,map_pars_fragment:Kd,map_particle_fragment:jd,map_particle_pars_fragment:Qd,metalnessmap_fragment:tf,metalnessmap_pars_fragment:ef,morphinstance_vertex:nf,morphcolor_vertex:sf,morphnormal_vertex:rf,morphtarget_pars_vertex:of,morphtarget_vertex:af,normal_fragment_begin:cf,normal_fragment_maps:lf,normal_pars_fragment:hf,normal_pars_vertex:uf,normal_vertex:df,normalmap_pars_fragment:ff,clearcoat_normal_fragment_begin:pf,clearcoat_normal_fragment_maps:mf,clearcoat_pars_fragment:gf,iridescence_pars_fragment:_f,opaque_fragment:xf,packing:vf,premultiplied_alpha_fragment:yf,project_vertex:Mf,dithering_fragment:Sf,dithering_pars_fragment:bf,roughnessmap_fragment:Ef,roughnessmap_pars_fragment:wf,shadowmap_pars_fragment:Tf,shadowmap_pars_vertex:Af,shadowmap_vertex:Rf,shadowmask_pars_fragment:Cf,skinbase_vertex:If,skinning_pars_vertex:Pf,skinning_vertex:Lf,skinnormal_vertex:Df,specularmap_fragment:Uf,specularmap_pars_fragment:Nf,tonemapping_fragment:Ff,tonemapping_pars_fragment:Of,transmission_fragment:Bf,transmission_pars_fragment:zf,uv_pars_fragment:kf,uv_pars_vertex:Hf,uv_vertex:Vf,worldpos_vertex:Gf,background_vert:Wf,background_frag:Xf,backgroundCube_vert:qf,backgroundCube_frag:Yf,cube_vert:Zf,cube_frag:Jf,depth_vert:$f,depth_frag:Kf,distanceRGBA_vert:jf,distanceRGBA_frag:Qf,equirect_vert:tp,equirect_frag:ep,linedashed_vert:np,linedashed_frag:ip,meshbasic_vert:sp,meshbasic_frag:rp,meshlambert_vert:op,meshlambert_frag:ap,meshmatcap_vert:cp,meshmatcap_frag:lp,meshnormal_vert:hp,meshnormal_frag:up,meshphong_vert:dp,meshphong_frag:fp,meshphysical_vert:pp,meshphysical_frag:mp,meshtoon_vert:gp,meshtoon_frag:_p,points_vert:xp,points_frag:vp,shadow_vert:yp,shadow_frag:Mp,sprite_vert:Sp,sprite_frag:bp},ht={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},ln={basic:{uniforms:Pe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Pe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Pe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Pe([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Pe([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Pe([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Pe([ht.points,ht.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Pe([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Pe([ht.common,ht.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Pe([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Pe([ht.sprite,ht.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:Pe([ht.common,ht.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:Pe([ht.lights,ht.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};ln.physical={uniforms:Pe([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};var cr={r:0,b:0,g:0},li=new fn,Ep=new de;function wp(i,t,e,n,s,r,a){let o=new Ft(0),c=r===!0?0:1,l,h,f=null,d=0,m=null;function g(T){let w=T.isScene===!0?T.background:null;return w&&w.isTexture&&(w=(T.backgroundBlurriness>0?e:t).get(w)),w}function x(T){let w=!1,M=g(T);M===null?u(o,c):M&&M.isColor&&(u(M,1),w=!0);let N=i.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,a):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(T,w){let M=g(w);M&&(M.isCubeTexture||M.mapping===Vr)?(h===void 0&&(h=new Pt(new ge(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:Zi(ln.backgroundCube.uniforms),vertexShader:ln.backgroundCube.vertexShader,fragmentShader:ln.backgroundCube.fragmentShader,side:Ae,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,P,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),li.copy(w.backgroundRotation),li.x*=-1,li.y*=-1,li.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ep.makeRotationFromEuler(li)),h.material.toneMapped=Zt.getTransfer(M.colorSpace)!==ee,(f!==M||d!==M.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,f=M,d=M.version,m=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Pt(new Be(2,2),new pn({name:"BackgroundMaterial",uniforms:Zi(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Zt.getTransfer(M.colorSpace)!==ee,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||d!==M.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,f=M,d=M.version,m=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function u(T,w){T.getRGB(cr,Zl(i)),n.buffers.color.setClear(cr.r,cr.g,cr.b,w,a)}return{getClearColor:function(){return o},setClearColor:function(T,w=1){o.set(T),c=w,u(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,u(o,c)},render:x,addToRenderList:p}}function Tp(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(S,U,$,X,_){let R=!1,E=f(X,$,U);r!==E&&(r=E,l(r.object)),R=m(S,X,$,_),R&&g(S,X,$,_),_!==null&&t.update(_,i.ELEMENT_ARRAY_BUFFER),(R||a)&&(a=!1,M(S,U,$,X),_!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(_).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function f(S,U,$){let X=$.wireframe===!0,_=n[S.id];_===void 0&&(_={},n[S.id]=_);let R=_[U.id];R===void 0&&(R={},_[U.id]=R);let E=R[X];return E===void 0&&(E=d(c()),R[X]=E),E}function d(S){let U=[],$=[],X=[];for(let _=0;_<e;_++)U[_]=0,$[_]=0,X[_]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:$,attributeDivisors:X,object:S,attributes:{},index:null}}function m(S,U,$,X){let _=r.attributes,R=U.attributes,E=0,O=$.getAttributes();for(let I in O)if(O[I].location>=0){let W=_[I],q=R[I];if(q===void 0&&(I==="instanceMatrix"&&S.instanceMatrix&&(q=S.instanceMatrix),I==="instanceColor"&&S.instanceColor&&(q=S.instanceColor)),W===void 0||W.attribute!==q||q&&W.data!==q.data)return!0;E++}return r.attributesNum!==E||r.index!==X}function g(S,U,$,X){let _={},R=U.attributes,E=0,O=$.getAttributes();for(let I in O)if(O[I].location>=0){let W=R[I];W===void 0&&(I==="instanceMatrix"&&S.instanceMatrix&&(W=S.instanceMatrix),I==="instanceColor"&&S.instanceColor&&(W=S.instanceColor));let q={};q.attribute=W,W&&W.data&&(q.data=W.data),_[I]=q,E++}r.attributes=_,r.attributesNum=E,r.index=X}function x(){let S=r.newAttributes;for(let U=0,$=S.length;U<$;U++)S[U]=0}function p(S){u(S,0)}function u(S,U){let $=r.newAttributes,X=r.enabledAttributes,_=r.attributeDivisors;$[S]=1,X[S]===0&&(i.enableVertexAttribArray(S),X[S]=1),_[S]!==U&&(i.vertexAttribDivisor(S,U),_[S]=U)}function T(){let S=r.newAttributes,U=r.enabledAttributes;for(let $=0,X=U.length;$<X;$++)U[$]!==S[$]&&(i.disableVertexAttribArray($),U[$]=0)}function w(S,U,$,X,_,R,E){E===!0?i.vertexAttribIPointer(S,U,$,_,R):i.vertexAttribPointer(S,U,$,X,_,R)}function M(S,U,$,X){x();let _=X.attributes,R=$.getAttributes(),E=U.defaultAttributeValues;for(let O in R){let I=R[O];if(I.location>=0){let D=_[O];if(D===void 0&&(O==="instanceMatrix"&&S.instanceMatrix&&(D=S.instanceMatrix),O==="instanceColor"&&S.instanceColor&&(D=S.instanceColor)),D!==void 0){let W=D.normalized,q=D.itemSize,j=t.get(D);if(j===void 0)continue;let ot=j.buffer,z=j.type,J=j.bytesPerElement,rt=z===i.INT||z===i.UNSIGNED_INT||D.gpuType===tc;if(D.isInterleavedBufferAttribute){let it=D.data,vt=it.stride,bt=D.offset;if(it.isInstancedInterleavedBuffer){for(let At=0;At<I.locationSize;At++)u(I.location+At,it.meshPerAttribute);S.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let At=0;At<I.locationSize;At++)p(I.location+At);i.bindBuffer(i.ARRAY_BUFFER,ot);for(let At=0;At<I.locationSize;At++)w(I.location+At,q/I.locationSize,z,W,vt*J,(bt+q/I.locationSize*At)*J,rt)}else{if(D.isInstancedBufferAttribute){for(let it=0;it<I.locationSize;it++)u(I.location+it,D.meshPerAttribute);S.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let it=0;it<I.locationSize;it++)p(I.location+it);i.bindBuffer(i.ARRAY_BUFFER,ot);for(let it=0;it<I.locationSize;it++)w(I.location+it,q/I.locationSize,z,W,q*J,q/I.locationSize*it*J,rt)}}else if(E!==void 0){let W=E[O];if(W!==void 0)switch(W.length){case 2:i.vertexAttrib2fv(I.location,W);break;case 3:i.vertexAttrib3fv(I.location,W);break;case 4:i.vertexAttrib4fv(I.location,W);break;default:i.vertexAttrib1fv(I.location,W)}}}}T()}function N(){V();for(let S in n){let U=n[S];for(let $ in U){let X=U[$];for(let _ in X)h(X[_].object),delete X[_];delete U[$]}delete n[S]}}function P(S){if(n[S.id]===void 0)return;let U=n[S.id];for(let $ in U){let X=U[$];for(let _ in X)h(X[_].object),delete X[_];delete U[$]}delete n[S.id]}function L(S){for(let U in n){let $=n[U];if($[S.id]===void 0)continue;let X=$[S.id];for(let _ in X)h(X[_].object),delete X[_];delete $[S.id]}}function V(){b(),a=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:V,resetDefaultState:b,dispose:N,releaseStatesOfGeometry:P,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:p,disableUnusedAttributes:T}}function Ap(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,f){f!==0&&(i.drawArraysInstanced(n,l,h,f),e.update(h,n,f))}function o(l,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,f);let m=0;for(let g=0;g<f;g++)m+=h[g];e.update(m,n,1)}function c(l,h,f,d){if(f===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,f);let g=0;for(let x=0;x<f;x++)g+=h[x]*d[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Rp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let L=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(L){return!(L!==nn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){let V=L===Is&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==Cn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Tn&&!V)}function c(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),N=g>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:T,maxVaryings:w,maxFragmentUniforms:M,vertexTextures:N,maxSamples:P}}function Cp(i){let t=this,e=null,n=0,s=!1,r=!1,a=new wn,o=new zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let m=f.length!==0||d||n!==0||s;return s=d,n=f.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,m){let g=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,u=i.get(f);if(!s||g===null||g.length===0||r&&!p)r?h(null):l();else{let T=r?0:n,w=T*4,M=u.clippingState||null;c.value=M,M=h(g,d,w,m);for(let N=0;N!==w;++N)M[N]=e[N];u.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,d,m,g){let x=f!==null?f.length:0,p=null;if(x!==0){if(p=c.value,g!==!0||p===null){let u=m+x*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(p===null||p.length<u)&&(p=new Float32Array(u));for(let w=0,M=m;w!==x;++w,M+=4)a.copy(f[w]).applyMatrix4(T,o),a.normal.toArray(p,M),p[M+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function Ip(i){let t=new WeakMap;function e(a,o){return o===Xo?a.mapping=Wi:o===qo&&(a.mapping=Xi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Xo||o===qo)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Ra(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ir=class extends Rr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},zi=4,nl=[.125,.215,.35,.446,.526,.582],fi=20,Ao=new Ir,il=new Ft,Ro=null,Co=0,Io=0,Po=!1,ui=(1+Math.sqrt(5))/2,Ui=1/ui,sl=[new C(-ui,Ui,0),new C(ui,Ui,0),new C(-Ui,0,ui),new C(Ui,0,ui),new C(0,ui,-Ui),new C(0,ui,Ui),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],Pr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ro=this._renderer.getRenderTarget(),Co=this._renderer.getActiveCubeFace(),Io=this._renderer.getActiveMipmapLevel(),Po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=al(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ol(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ro,Co,Io),this._renderer.xr.enabled=Po,t.scissorTest=!1,lr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Wi||t.mapping===Xi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ro=this._renderer.getRenderTarget(),Co=this._renderer.getActiveCubeFace(),Io=this._renderer.getActiveMipmapLevel(),Po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:Is,format:nn,colorSpace:ji,depthBuffer:!1},s=rl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rl(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pp(r)),this._blurMaterial=Lp(r,t,e)}return s}_compileMaterial(t){let e=new Pt(this._lodPlanes[0],t);this._renderer.compile(e,Ao)}_sceneToCubeUV(t,e,n,s){let o=new Me(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(il),h.toneMapping=Yn,h.autoClear=!1;let m=new Ce({name:"PMREM.Background",side:Ae,depthWrite:!1,depthTest:!1}),g=new Pt(new ge,m),x=!1,p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,x=!0):(m.color.copy(il),x=!0);for(let u=0;u<6;u++){let T=u%3;T===0?(o.up.set(0,c[u],0),o.lookAt(l[u],0,0)):T===1?(o.up.set(0,0,c[u]),o.lookAt(0,l[u],0)):(o.up.set(0,c[u],0),o.lookAt(0,0,l[u]));let w=this._cubeSize;lr(s,T*w,u>2?w:0,w,w),h.setRenderTarget(s),x&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=f,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Wi||t.mapping===Xi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=al()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ol());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Pt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;lr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Ao)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=sl[(s-r-1)%sl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new Pt(this._lodPlanes[s],l),d=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*fi-1),x=r/g,p=isFinite(r)?1+Math.floor(h*x):fi;p>fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${fi}`);let u=[],T=0;for(let L=0;L<fi;++L){let V=L/x,b=Math.exp(-V*V/2);u.push(b),L===0?T+=b:L<p&&(T+=2*b)}for(let L=0;L<u.length;L++)u[L]=u[L]/T;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:w}=this;d.dTheta.value=g,d.mipInt.value=w-n;let M=this._sizeLods[s],N=3*M*(s>w-zi?s-w+zi:0),P=4*(this._cubeSize-M);lr(e,N,P,3*M,2*M),c.setRenderTarget(e),c.render(f,Ao)}};function Pp(i){let t=[],e=[],n=[],s=i,r=i-zi+1+nl.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-zi?c=nl[a-i+zi-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,f=1+l,d=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,g=6,x=3,p=2,u=1,T=new Float32Array(x*g*m),w=new Float32Array(p*g*m),M=new Float32Array(u*g*m);for(let P=0;P<m;P++){let L=P%3*2/3-1,V=P>2?0:-1,b=[L,V,0,L+2/3,V,0,L+2/3,V+1,0,L,V,0,L+2/3,V+1,0,L,V+1,0];T.set(b,x*g*P),w.set(d,p*g*P);let S=[P,P,P,P,P,P];M.set(S,u*g*P)}let N=new De;N.setAttribute("position",new Le(T,x)),N.setAttribute("uv",new Le(w,p)),N.setAttribute("faceIndex",new Le(M,u)),t.push(N),s>zi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function rl(i,t,e){let n=new In(i,t,e);return n.texture.mapping=Vr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function lr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Lp(i,t,e){let n=new Float32Array(fi),s=new C(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:fi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function ol(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function al(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function oc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Dp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Xo||c===qo,h=c===Wi||c===Xi;if(l||h){let f=t.get(o),d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Pr(i)),f=l?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{let m=o.image;return l&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new Pr(i)),f=l?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Up(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&xs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Np(i,t,e,n){let s={},r=new WeakMap;function a(f){let d=f.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let p=0,u=x.length;p<u;p++)t.remove(x[p])}d.removeEventListener("dispose",a),delete s[d.id];let m=r.get(d);m&&(t.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(f){let d=f.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let m=f.morphAttributes;for(let g in m){let x=m[g];for(let p=0,u=x.length;p<u;p++)t.update(x[p],i.ARRAY_BUFFER)}}function l(f){let d=[],m=f.index,g=f.attributes.position,x=0;if(m!==null){let T=m.array;x=m.version;for(let w=0,M=T.length;w<M;w+=3){let N=T[w+0],P=T[w+1],L=T[w+2];d.push(N,P,P,L,L,N)}}else if(g!==void 0){let T=g.array;x=g.version;for(let w=0,M=T.length/3-1;w<M;w+=3){let N=w+0,P=w+1,L=w+2;d.push(N,P,P,L,L,N)}}else return;let p=new(ql(d)?Ar:Tr)(d,1);p.version=x;let u=r.get(f);u&&t.remove(u),r.set(f,p)}function h(f){let d=r.get(f);if(d){let m=f.index;m!==null&&d.version<m.version&&l(f)}else l(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function Fp(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,m){i.drawElements(n,m,r,d*a),e.update(m,n,1)}function l(d,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,d*a,g),e.update(m,n,g))}function h(d,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,d,0,g);let p=0;for(let u=0;u<g;u++)p+=m[u];e.update(p,n,1)}function f(d,m,g,x){if(g===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<d.length;u++)l(d[u]/a,m[u],x[u]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,d,0,x,0,g);let u=0;for(let T=0;T<g;T++)u+=m[T]*x[T];e.update(u,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Op(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Bp(i,t,e){let n=new WeakMap,s=new ie;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==f){let b=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],w=0;m===!0&&(w=1),g===!0&&(w=2),x===!0&&(w=3);let M=o.attributes.position.count*w,N=1;M>t.maxTextureSize&&(N=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let P=new Float32Array(M*N*4*f),L=new Er(P,M,N,f);L.type=Tn,L.needsUpdate=!0;let V=w*4;for(let S=0;S<f;S++){let U=p[S],$=u[S],X=T[S],_=M*N*4*S;for(let R=0;R<U.count;R++){let E=R*V;m===!0&&(s.fromBufferAttribute(U,R),P[_+E+0]=s.x,P[_+E+1]=s.y,P[_+E+2]=s.z,P[_+E+3]=0),g===!0&&(s.fromBufferAttribute($,R),P[_+E+4]=s.x,P[_+E+5]=s.y,P[_+E+6]=s.z,P[_+E+7]=0),x===!0&&(s.fromBufferAttribute(X,R),P[_+E+8]=s.x,P[_+E+9]=s.y,P[_+E+10]=s.z,P[_+E+11]=X.itemSize===4?s.w:1)}}d={count:f,texture:L,size:new kt(M,N)},n.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let x=0;x<l.length;x++)m+=l[x];let g=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function zp(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,f=t.get(c,h);if(s.get(f)!==l&&(t.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return f}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}var Lr=class extends We{constructor(t,e,n,s,r,a,o,c,l,h=ki){if(h!==ki&&h!==Yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ki&&(n=_i),n===void 0&&h===Yi&&(n=qi),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:sn,this.minFilter=c!==void 0?c:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},$l=new We,cl=new Lr(1,1),Kl=new Er,jl=new wa,Ql=new Cr,ll=[],hl=[],ul=new Float32Array(16),dl=new Float32Array(9),fl=new Float32Array(4);function Qi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=ll[s];if(r===void 0&&(r=new Float32Array(s),ll[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function _e(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function xe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Wr(i,t){let e=hl[t];e===void 0&&(e=new Int32Array(t),hl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function kp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Hp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2fv(this.addr,t),xe(e,t)}}function Vp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;i.uniform3fv(this.addr,t),xe(e,t)}}function Gp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4fv(this.addr,t),xe(e,t)}}function Wp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,n))return;fl.set(n),i.uniformMatrix2fv(this.addr,!1,fl),xe(e,n)}}function Xp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,n))return;dl.set(n),i.uniformMatrix3fv(this.addr,!1,dl),xe(e,n)}}function qp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,n))return;ul.set(n),i.uniformMatrix4fv(this.addr,!1,ul),xe(e,n)}}function Yp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Zp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2iv(this.addr,t),xe(e,t)}}function Jp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3iv(this.addr,t),xe(e,t)}}function $p(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4iv(this.addr,t),xe(e,t)}}function Kp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function jp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2uiv(this.addr,t),xe(e,t)}}function Qp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3uiv(this.addr,t),xe(e,t)}}function tm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4uiv(this.addr,t),xe(e,t)}}function em(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(cl.compareFunction=Xl,r=cl):r=$l,e.setTexture2D(t||r,s)}function nm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||jl,s)}function im(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ql,s)}function sm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Kl,s)}function rm(i){switch(i){case 5126:return kp;case 35664:return Hp;case 35665:return Vp;case 35666:return Gp;case 35674:return Wp;case 35675:return Xp;case 35676:return qp;case 5124:case 35670:return Yp;case 35667:case 35671:return Zp;case 35668:case 35672:return Jp;case 35669:case 35673:return $p;case 5125:return Kp;case 36294:return jp;case 36295:return Qp;case 36296:return tm;case 35678:case 36198:case 36298:case 36306:case 35682:return em;case 35679:case 36299:case 36307:return nm;case 35680:case 36300:case 36308:case 36293:return im;case 36289:case 36303:case 36311:case 36292:return sm}}function om(i,t){i.uniform1fv(this.addr,t)}function am(i,t){let e=Qi(t,this.size,2);i.uniform2fv(this.addr,e)}function cm(i,t){let e=Qi(t,this.size,3);i.uniform3fv(this.addr,e)}function lm(i,t){let e=Qi(t,this.size,4);i.uniform4fv(this.addr,e)}function hm(i,t){let e=Qi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function um(i,t){let e=Qi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function dm(i,t){let e=Qi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function fm(i,t){i.uniform1iv(this.addr,t)}function pm(i,t){i.uniform2iv(this.addr,t)}function mm(i,t){i.uniform3iv(this.addr,t)}function gm(i,t){i.uniform4iv(this.addr,t)}function _m(i,t){i.uniform1uiv(this.addr,t)}function xm(i,t){i.uniform2uiv(this.addr,t)}function vm(i,t){i.uniform3uiv(this.addr,t)}function ym(i,t){i.uniform4uiv(this.addr,t)}function Mm(i,t,e){let n=this.cache,s=t.length,r=Wr(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||$l,r[a])}function Sm(i,t,e){let n=this.cache,s=t.length,r=Wr(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||jl,r[a])}function bm(i,t,e){let n=this.cache,s=t.length,r=Wr(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Ql,r[a])}function Em(i,t,e){let n=this.cache,s=t.length,r=Wr(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Kl,r[a])}function wm(i){switch(i){case 5126:return om;case 35664:return am;case 35665:return cm;case 35666:return lm;case 35674:return hm;case 35675:return um;case 35676:return dm;case 5124:case 35670:return fm;case 35667:case 35671:return pm;case 35668:case 35672:return mm;case 35669:case 35673:return gm;case 5125:return _m;case 36294:return xm;case 36295:return vm;case 36296:return ym;case 35678:case 36198:case 36298:case 36306:case 35682:return Mm;case 35679:case 36299:case 36307:return Sm;case 35680:case 36300:case 36308:case 36293:return bm;case 36289:case 36303:case 36311:case 36292:return Em}}var Ca=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=rm(e.type)}},Ia=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=wm(e.type)}},Pa=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Lo=/(\w+)(\])?(\[|\.)?/g;function pl(i,t){i.seq.push(t),i.map[t.id]=t}function Tm(i,t,e){let n=i.name,s=n.length;for(Lo.lastIndex=0;;){let r=Lo.exec(n),a=Lo.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){pl(e,l===void 0?new Ca(o,i,t):new Ia(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new Pa(o),pl(e,f)),e=f}}}var Vi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Tm(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function ml(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Am=37297,Rm=0;function Cm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var gl=new zt;function Im(i){Zt._getMatrix(gl,Zt.workingColorSpace,i);let t=`mat3( ${gl.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(i)){case Gr:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function _l(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Cm(i.getShaderSource(t),a)}else return s}function Pm(i,t){let e=Im(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Lm(i,t){let e;switch(t){case iu:e="Linear";break;case su:e="Reinhard";break;case ru:e="Cineon";break;case Hr:e="ACESFilmic";break;case au:e="AgX";break;case cu:e="Neutral";break;case ou:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var hr=new C;function Dm(){Zt.getLuminanceCoefficients(hr);let i=hr.x.toFixed(4),t=hr.y.toFixed(4),e=hr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Um(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vs).join(`
`)}function Nm(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Fm(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function vs(i){return i!==""}function xl(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Om=/^[ \t]*#include +<([\w\d./]+)>/gm;function La(i){return i.replace(Om,zm)}var Bm=new Map;function zm(i,t){let e=Gt[t];if(e===void 0){let n=Bm.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return La(e)}var km=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yl(i){return i.replace(km,Hm)}function Hm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ml(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Vm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Pl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Qa?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===En&&(t="SHADOWMAP_TYPE_VSM"),t}function Gm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Wi:case Xi:t="ENVMAP_TYPE_CUBE";break;case Vr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Wm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Xi:t="ENVMAP_MODE_REFRACTION";break}return t}function Xm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ll:t="ENVMAP_BLENDING_MULTIPLY";break;case eu:t="ENVMAP_BLENDING_MIX";break;case nu:t="ENVMAP_BLENDING_ADD";break}return t}function qm(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Ym(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=Vm(e),l=Gm(e),h=Wm(e),f=Xm(e),d=qm(e),m=Um(e),g=Nm(r),x=s.createProgram(),p,u,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(vs).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(vs).join(`
`),u.length>0&&(u+=`
`)):(p=[Ml(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vs).join(`
`),u=[Ml(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Yn?"#define TONE_MAPPING":"",e.toneMapping!==Yn?Gt.tonemapping_pars_fragment:"",e.toneMapping!==Yn?Lm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,Pm("linearToOutputTexel",e.outputColorSpace),Dm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vs).join(`
`)),a=La(a),a=xl(a,e),a=vl(a,e),o=La(o),o=xl(o,e),o=vl(o,e),a=yl(a),o=yl(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",e.glslVersion===Nc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Nc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let w=T+p+a,M=T+u+o,N=ml(s,s.VERTEX_SHADER,w),P=ml(s,s.FRAGMENT_SHADER,M);s.attachShader(x,N),s.attachShader(x,P),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function L(U){if(i.debug.checkShaderErrors){let $=s.getProgramInfoLog(x).trim(),X=s.getShaderInfoLog(N).trim(),_=s.getShaderInfoLog(P).trim(),R=!0,E=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(R=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,N,P);else{let O=_l(s,N,"vertex"),I=_l(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+$+`
`+O+`
`+I)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(X===""||_==="")&&(E=!1);E&&(U.diagnostics={runnable:R,programLog:$,vertexShader:{log:X,prefix:p},fragmentShader:{log:_,prefix:u}})}s.deleteShader(N),s.deleteShader(P),V=new Vi(s,x),b=Fm(s,x)}let V;this.getUniforms=function(){return V===void 0&&L(this),V};let b;this.getAttributes=function(){return b===void 0&&L(this),b};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,Am)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Rm++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=N,this.fragmentShader=P,this}var Zm=0,Da=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ua(t),e.set(t,n)),n}},Ua=class{constructor(t){this.id=Zm++,this.code=t,this.usedTimes=0}};function Jm(i,t,e,n,s,r,a){let o=new wr,c=new Da,l=new Set,h=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return l.add(b),b===0?"uv":`uv${b}`}function p(b,S,U,$,X){let _=$.fog,R=X.geometry,E=b.isMeshStandardMaterial?$.environment:null,O=(b.isMeshStandardMaterial?e:t).get(b.envMap||E),I=O&&O.mapping===Vr?O.image.height:null,D=g[b.type];b.precision!==null&&(m=s.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));let W=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,q=W!==void 0?W.length:0,j=0;R.morphAttributes.position!==void 0&&(j=1),R.morphAttributes.normal!==void 0&&(j=2),R.morphAttributes.color!==void 0&&(j=3);let ot,z,J,rt;if(D){let jt=ln[D];ot=jt.vertexShader,z=jt.fragmentShader}else ot=b.vertexShader,z=b.fragmentShader,c.update(b),J=c.getVertexShaderID(b),rt=c.getFragmentShaderID(b);let it=i.getRenderTarget(),vt=i.state.buffers.depth.getReversed(),bt=X.isInstancedMesh===!0,At=X.isBatchedMesh===!0,Qt=!!b.map,Wt=!!b.matcap,he=!!O,B=!!b.aoMap,be=!!b.lightMap,Lt=!!b.bumpMap,Ct=!!b.normalMap,It=!!b.displacementMap,te=!!b.emissiveMap,Rt=!!b.metalnessMap,A=!!b.roughnessMap,v=b.anisotropy>0,G=b.clearcoat>0,et=b.dispersion>0,st=b.iridescence>0,Q=b.sheen>0,Et=b.transmission>0,dt=v&&!!b.anisotropyMap,gt=G&&!!b.clearcoatMap,Yt=G&&!!b.clearcoatNormalMap,at=G&&!!b.clearcoatRoughnessMap,_t=st&&!!b.iridescenceMap,Dt=st&&!!b.iridescenceThicknessMap,Ut=Q&&!!b.sheenColorMap,xt=Q&&!!b.sheenRoughnessMap,Xt=!!b.specularMap,Vt=!!b.specularColorMap,oe=!!b.specularIntensityMap,F=Et&&!!b.transmissionMap,ut=Et&&!!b.thicknessMap,K=!!b.gradientMap,nt=!!b.alphaMap,mt=b.alphaTest>0,ft=!!b.alphaHash,Ot=!!b.extensions,fe=Yn;b.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(fe=i.toneMapping);let Ee={shaderID:D,shaderType:b.type,shaderName:b.name,vertexShader:ot,fragmentShader:z,defines:b.defines,customVertexShaderID:J,customFragmentShaderID:rt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:At,batchingColor:At&&X._colorsTexture!==null,instancing:bt,instancingColor:bt&&X.instanceColor!==null,instancingMorph:bt&&X.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:it===null?i.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:ji,alphaToCoverage:!!b.alphaToCoverage,map:Qt,matcap:Wt,envMap:he,envMapMode:he&&O.mapping,envMapCubeUVHeight:I,aoMap:B,lightMap:be,bumpMap:Lt,normalMap:Ct,displacementMap:d&&It,emissiveMap:te,normalMapObjectSpace:Ct&&b.normalMapType===du,normalMapTangentSpace:Ct&&b.normalMapType===Wl,metalnessMap:Rt,roughnessMap:A,anisotropy:v,anisotropyMap:dt,clearcoat:G,clearcoatMap:gt,clearcoatNormalMap:Yt,clearcoatRoughnessMap:at,dispersion:et,iridescence:st,iridescenceMap:_t,iridescenceThicknessMap:Dt,sheen:Q,sheenColorMap:Ut,sheenRoughnessMap:xt,specularMap:Xt,specularColorMap:Vt,specularIntensityMap:oe,transmission:Et,transmissionMap:F,thicknessMap:ut,gradientMap:K,opaque:b.transparent===!1&&b.blending===qn&&b.alphaToCoverage===!1,alphaMap:nt,alphaTest:mt,alphaHash:ft,combine:b.combine,mapUv:Qt&&x(b.map.channel),aoMapUv:B&&x(b.aoMap.channel),lightMapUv:be&&x(b.lightMap.channel),bumpMapUv:Lt&&x(b.bumpMap.channel),normalMapUv:Ct&&x(b.normalMap.channel),displacementMapUv:It&&x(b.displacementMap.channel),emissiveMapUv:te&&x(b.emissiveMap.channel),metalnessMapUv:Rt&&x(b.metalnessMap.channel),roughnessMapUv:A&&x(b.roughnessMap.channel),anisotropyMapUv:dt&&x(b.anisotropyMap.channel),clearcoatMapUv:gt&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:Yt&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:xt&&x(b.sheenRoughnessMap.channel),specularMapUv:Xt&&x(b.specularMap.channel),specularColorMapUv:Vt&&x(b.specularColorMap.channel),specularIntensityMapUv:oe&&x(b.specularIntensityMap.channel),transmissionMapUv:F&&x(b.transmissionMap.channel),thicknessMapUv:ut&&x(b.thicknessMap.channel),alphaMapUv:nt&&x(b.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(Ct||v),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!R.attributes.uv&&(Qt||nt),fog:!!_,useFog:b.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:vt,skinning:X.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:j,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:fe,decodeVideoTexture:Qt&&b.map.isVideoTexture===!0&&Zt.getTransfer(b.map.colorSpace)===ee,decodeVideoTextureEmissive:te&&b.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(b.emissiveMap.colorSpace)===ee,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Oe,flipSided:b.side===Ae,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ot&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&b.extensions.multiDraw===!0||At)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ee.vertexUv1s=l.has(1),Ee.vertexUv2s=l.has(2),Ee.vertexUv3s=l.has(3),l.clear(),Ee}function u(b){let S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(let U in b.defines)S.push(U),S.push(b.defines[U]);return b.isRawShaderMaterial===!1&&(T(S,b),w(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function T(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function w(b,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),b.push(o.mask)}function M(b){let S=g[b.type],U;if(S){let $=ln[S];U=Bu.clone($.uniforms)}else U=b.uniforms;return U}function N(b,S){let U;for(let $=0,X=h.length;$<X;$++){let _=h[$];if(_.cacheKey===S){U=_,++U.usedTimes;break}}return U===void 0&&(U=new Ym(i,S,b,r),h.push(U)),U}function P(b){if(--b.usedTimes===0){let S=h.indexOf(b);h[S]=h[h.length-1],h.pop(),b.destroy()}}function L(b){c.remove(b)}function V(){c.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:M,acquireProgram:N,releaseProgram:P,releaseShaderCache:L,programs:h,dispose:V}}function $m(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Km(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Sl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function bl(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f,d,m,g,x,p){let u=i[t];return u===void 0?(u={id:f.id,object:f,geometry:d,material:m,groupOrder:g,renderOrder:f.renderOrder,z:x,group:p},i[t]=u):(u.id=f.id,u.object=f,u.geometry=d,u.material=m,u.groupOrder=g,u.renderOrder=f.renderOrder,u.z=x,u.group=p),t++,u}function o(f,d,m,g,x,p){let u=a(f,d,m,g,x,p);m.transmission>0?n.push(u):m.transparent===!0?s.push(u):e.push(u)}function c(f,d,m,g,x,p){let u=a(f,d,m,g,x,p);m.transmission>0?n.unshift(u):m.transparent===!0?s.unshift(u):e.unshift(u)}function l(f,d){e.length>1&&e.sort(f||Km),n.length>1&&n.sort(d||Sl),s.length>1&&s.sort(d||Sl)}function h(){for(let f=t,d=i.length;f<d;f++){let m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function jm(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new bl,i.set(n,[a])):s>=r.length?(a=new bl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Qm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Ft};break;case"SpotLight":e={position:new C,direction:new C,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function t0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var e0=0;function n0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function i0(i){let t=new Qm,e=t0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new C);let s=new C,r=new de,a=new de;function o(l){let h=0,f=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let m=0,g=0,x=0,p=0,u=0,T=0,w=0,M=0,N=0,P=0,L=0;l.sort(n0);for(let b=0,S=l.length;b<S;b++){let U=l[b],$=U.color,X=U.intensity,_=U.distance,R=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=$.r*X,f+=$.g*X,d+=$.b*X;else if(U.isLightProbe){for(let E=0;E<9;E++)n.probe[E].addScaledVector(U.sh.coefficients[E],X);L++}else if(U.isDirectionalLight){let E=t.get(U);if(E.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let O=U.shadow,I=e.get(U);I.shadowIntensity=O.intensity,I.shadowBias=O.bias,I.shadowNormalBias=O.normalBias,I.shadowRadius=O.radius,I.shadowMapSize=O.mapSize,n.directionalShadow[m]=I,n.directionalShadowMap[m]=R,n.directionalShadowMatrix[m]=U.shadow.matrix,T++}n.directional[m]=E,m++}else if(U.isSpotLight){let E=t.get(U);E.position.setFromMatrixPosition(U.matrixWorld),E.color.copy($).multiplyScalar(X),E.distance=_,E.coneCos=Math.cos(U.angle),E.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),E.decay=U.decay,n.spot[x]=E;let O=U.shadow;if(U.map&&(n.spotLightMap[N]=U.map,N++,O.updateMatrices(U),U.castShadow&&P++),n.spotLightMatrix[x]=O.matrix,U.castShadow){let I=e.get(U);I.shadowIntensity=O.intensity,I.shadowBias=O.bias,I.shadowNormalBias=O.normalBias,I.shadowRadius=O.radius,I.shadowMapSize=O.mapSize,n.spotShadow[x]=I,n.spotShadowMap[x]=R,M++}x++}else if(U.isRectAreaLight){let E=t.get(U);E.color.copy($).multiplyScalar(X),E.halfWidth.set(U.width*.5,0,0),E.halfHeight.set(0,U.height*.5,0),n.rectArea[p]=E,p++}else if(U.isPointLight){let E=t.get(U);if(E.color.copy(U.color).multiplyScalar(U.intensity),E.distance=U.distance,E.decay=U.decay,U.castShadow){let O=U.shadow,I=e.get(U);I.shadowIntensity=O.intensity,I.shadowBias=O.bias,I.shadowNormalBias=O.normalBias,I.shadowRadius=O.radius,I.shadowMapSize=O.mapSize,I.shadowCameraNear=O.camera.near,I.shadowCameraFar=O.camera.far,n.pointShadow[g]=I,n.pointShadowMap[g]=R,n.pointShadowMatrix[g]=U.shadow.matrix,w++}n.point[g]=E,g++}else if(U.isHemisphereLight){let E=t.get(U);E.skyColor.copy(U.color).multiplyScalar(X),E.groundColor.copy(U.groundColor).multiplyScalar(X),n.hemi[u]=E,u++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;let V=n.hash;(V.directionalLength!==m||V.pointLength!==g||V.spotLength!==x||V.rectAreaLength!==p||V.hemiLength!==u||V.numDirectionalShadows!==T||V.numPointShadows!==w||V.numSpotShadows!==M||V.numSpotMaps!==N||V.numLightProbes!==L)&&(n.directional.length=m,n.spot.length=x,n.rectArea.length=p,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=M+N-P,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=L,V.directionalLength=m,V.pointLength=g,V.spotLength=x,V.rectAreaLength=p,V.hemiLength=u,V.numDirectionalShadows=T,V.numPointShadows=w,V.numSpotShadows=M,V.numSpotMaps=N,V.numLightProbes=L,n.version=e0++)}function c(l,h){let f=0,d=0,m=0,g=0,x=0,p=h.matrixWorldInverse;for(let u=0,T=l.length;u<T;u++){let w=l[u];if(w.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),f++}else if(w.isSpotLight){let M=n.spot[m];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),m++}else if(w.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(p),a.identity(),r.copy(w.matrixWorld),r.premultiply(p),a.extractRotation(r),M.halfWidth.set(w.width*.5,0,0),M.halfHeight.set(0,w.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(w.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(p),d++}else if(w.isHemisphereLight){let M=n.hemi[x];M.direction.setFromMatrixPosition(w.matrixWorld),M.direction.transformDirection(p),x++}}}return{setup:o,setupView:c,state:n}}function El(i){let t=new i0(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function s0(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new El(i),t.set(s,[o])):r>=a.length?(o=new El(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Na=class extends jn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=hu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Fa=class extends jn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},r0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,o0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function a0(i,t,e){let n=new bs,s=new kt,r=new kt,a=new ie,o=new Na({depthPacking:uu}),c=new Fa,l={},h=e.maxTextureSize,f={[Jn]:Ae,[Ae]:Jn,[Oe]:Oe},d=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:r0,fragmentShader:o0}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new De;g.setAttribute("position",new Le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Pt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pl;let u=this.type;this.render=function(P,L,V){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||P.length===0)return;let b=i.getRenderTarget(),S=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),$=i.state;$.setBlending(Xn),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);let X=u!==En&&this.type===En,_=u===En&&this.type!==En;for(let R=0,E=P.length;R<E;R++){let O=P[R],I=O.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;s.copy(I.mapSize);let D=I.getFrameExtents();if(s.multiply(D),r.copy(I.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/D.x),s.x=r.x*D.x,I.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/D.y),s.y=r.y*D.y,I.mapSize.y=r.y)),I.map===null||X===!0||_===!0){let q=this.type!==En?{minFilter:sn,magFilter:sn}:{};I.map!==null&&I.map.dispose(),I.map=new In(s.x,s.y,q),I.map.texture.name=O.name+".shadowMap",I.camera.updateProjectionMatrix()}i.setRenderTarget(I.map),i.clear();let W=I.getViewportCount();for(let q=0;q<W;q++){let j=I.getViewport(q);a.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),$.viewport(a),I.updateMatrices(O,q),n=I.getFrustum(),M(L,V,I.camera,O,this.type)}I.isPointLightShadow!==!0&&this.type===En&&T(I,V),I.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(b,S,U)};function T(P,L){let V=t.update(x);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,m.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new In(s.x,s.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(L,null,V,d,x,null),m.uniforms.shadow_pass.value=P.mapPass.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(L,null,V,m,x,null)}function w(P,L,V,b){let S=null,U=V.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(U!==void 0)S=U;else if(S=V.isPointLight===!0?c:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){let $=S.uuid,X=L.uuid,_=l[$];_===void 0&&(_={},l[$]=_);let R=_[X];R===void 0&&(R=S.clone(),_[X]=R,L.addEventListener("dispose",N)),S=R}if(S.visible=L.visible,S.wireframe=L.wireframe,b===En?S.side=L.shadowSide!==null?L.shadowSide:L.side:S.side=L.shadowSide!==null?L.shadowSide:f[L.side],S.alphaMap=L.alphaMap,S.alphaTest=L.alphaTest,S.map=L.map,S.clipShadows=L.clipShadows,S.clippingPlanes=L.clippingPlanes,S.clipIntersection=L.clipIntersection,S.displacementMap=L.displacementMap,S.displacementScale=L.displacementScale,S.displacementBias=L.displacementBias,S.wireframeLinewidth=L.wireframeLinewidth,S.linewidth=L.linewidth,V.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let $=i.properties.get(S);$.light=V}return S}function M(P,L,V,b,S){if(P.visible===!1)return;if(P.layers.test(L.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&S===En)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,P.matrixWorld);let X=t.update(P),_=P.material;if(Array.isArray(_)){let R=X.groups;for(let E=0,O=R.length;E<O;E++){let I=R[E],D=_[I.materialIndex];if(D&&D.visible){let W=w(P,D,b,S);P.onBeforeShadow(i,P,L,V,X,W,I),i.renderBufferDirect(V,null,X,W,P,I),P.onAfterShadow(i,P,L,V,X,W,I)}}}else if(_.visible){let R=w(P,_,b,S);P.onBeforeShadow(i,P,L,V,X,R,null),i.renderBufferDirect(V,null,X,R,P,null),P.onAfterShadow(i,P,L,V,X,R,null)}}let $=P.children;for(let X=0,_=$.length;X<_;X++)M($[X],L,V,b,S)}function N(P){P.target.removeEventListener("dispose",N);for(let V in l){let b=l[V],S=P.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}var c0={[Bo]:zo,[ko]:Go,[Ho]:Wo,[Gi]:Vo,[zo]:Bo,[Go]:ko,[Wo]:Ho,[Vo]:Gi};function l0(i,t){function e(){let F=!1,ut=new ie,K=null,nt=new ie(0,0,0,0);return{setMask:function(mt){K!==mt&&!F&&(i.colorMask(mt,mt,mt,mt),K=mt)},setLocked:function(mt){F=mt},setClear:function(mt,ft,Ot,fe,Ee){Ee===!0&&(mt*=fe,ft*=fe,Ot*=fe),ut.set(mt,ft,Ot,fe),nt.equals(ut)===!1&&(i.clearColor(mt,ft,Ot,fe),nt.copy(ut))},reset:function(){F=!1,K=null,nt.set(-1,0,0,0)}}}function n(){let F=!1,ut=!1,K=null,nt=null,mt=null;return{setReversed:function(ft){if(ut!==ft){let Ot=t.get("EXT_clip_control");ut?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT);let fe=mt;mt=null,this.setClear(fe)}ut=ft},getReversed:function(){return ut},setTest:function(ft){ft?it(i.DEPTH_TEST):vt(i.DEPTH_TEST)},setMask:function(ft){K!==ft&&!F&&(i.depthMask(ft),K=ft)},setFunc:function(ft){if(ut&&(ft=c0[ft]),nt!==ft){switch(ft){case Bo:i.depthFunc(i.NEVER);break;case zo:i.depthFunc(i.ALWAYS);break;case ko:i.depthFunc(i.LESS);break;case Gi:i.depthFunc(i.LEQUAL);break;case Ho:i.depthFunc(i.EQUAL);break;case Vo:i.depthFunc(i.GEQUAL);break;case Go:i.depthFunc(i.GREATER);break;case Wo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}nt=ft}},setLocked:function(ft){F=ft},setClear:function(ft){mt!==ft&&(ut&&(ft=1-ft),i.clearDepth(ft),mt=ft)},reset:function(){F=!1,K=null,nt=null,mt=null,ut=!1}}}function s(){let F=!1,ut=null,K=null,nt=null,mt=null,ft=null,Ot=null,fe=null,Ee=null;return{setTest:function(jt){F||(jt?it(i.STENCIL_TEST):vt(i.STENCIL_TEST))},setMask:function(jt){ut!==jt&&!F&&(i.stencilMask(jt),ut=jt)},setFunc:function(jt,Ke,_n){(K!==jt||nt!==Ke||mt!==_n)&&(i.stencilFunc(jt,Ke,_n),K=jt,nt=Ke,mt=_n)},setOp:function(jt,Ke,_n){(ft!==jt||Ot!==Ke||fe!==_n)&&(i.stencilOp(jt,Ke,_n),ft=jt,Ot=Ke,fe=_n)},setLocked:function(jt){F=jt},setClear:function(jt){Ee!==jt&&(i.clearStencil(jt),Ee=jt)},reset:function(){F=!1,ut=null,K=null,nt=null,mt=null,ft=null,Ot=null,fe=null,Ee=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},f={},d=new WeakMap,m=[],g=null,x=!1,p=null,u=null,T=null,w=null,M=null,N=null,P=null,L=new Ft(0,0,0),V=0,b=!1,S=null,U=null,$=null,X=null,_=null,R=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),E=!1,O=0,I=i.getParameter(i.VERSION);I.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(I)[1]),E=O>=1):I.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),E=O>=2);let D=null,W={},q=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),ot=new ie().fromArray(q),z=new ie().fromArray(j);function J(F,ut,K,nt){let mt=new Uint8Array(4),ft=i.createTexture();i.bindTexture(F,ft),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ot=0;Ot<K;Ot++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(ut,0,i.RGBA,1,1,nt,0,i.RGBA,i.UNSIGNED_BYTE,mt):i.texImage2D(ut+Ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,mt);return ft}let rt={};rt[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),rt[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),rt[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),rt[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),it(i.DEPTH_TEST),a.setFunc(Gi),Lt(!1),Ct(Rc),it(i.CULL_FACE),B(Xn);function it(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function vt(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function bt(F,ut){return f[F]!==ut?(i.bindFramebuffer(F,ut),f[F]=ut,F===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ut),F===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ut),!0):!1}function At(F,ut){let K=m,nt=!1;if(F){K=d.get(ut),K===void 0&&(K=[],d.set(ut,K));let mt=F.textures;if(K.length!==mt.length||K[0]!==i.COLOR_ATTACHMENT0){for(let ft=0,Ot=mt.length;ft<Ot;ft++)K[ft]=i.COLOR_ATTACHMENT0+ft;K.length=mt.length,nt=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,nt=!0);nt&&i.drawBuffers(K)}function Qt(F){return g!==F?(i.useProgram(F),g=F,!0):!1}let Wt={[di]:i.FUNC_ADD,[Bh]:i.FUNC_SUBTRACT,[zh]:i.FUNC_REVERSE_SUBTRACT};Wt[kh]=i.MIN,Wt[Hh]=i.MAX;let he={[Vh]:i.ZERO,[Gh]:i.ONE,[Wh]:i.SRC_COLOR,[Fo]:i.SRC_ALPHA,[$h]:i.SRC_ALPHA_SATURATE,[Zh]:i.DST_COLOR,[qh]:i.DST_ALPHA,[Xh]:i.ONE_MINUS_SRC_COLOR,[Oo]:i.ONE_MINUS_SRC_ALPHA,[Jh]:i.ONE_MINUS_DST_COLOR,[Yh]:i.ONE_MINUS_DST_ALPHA,[Kh]:i.CONSTANT_COLOR,[jh]:i.ONE_MINUS_CONSTANT_COLOR,[Qh]:i.CONSTANT_ALPHA,[tu]:i.ONE_MINUS_CONSTANT_ALPHA};function B(F,ut,K,nt,mt,ft,Ot,fe,Ee,jt){if(F===Xn){x===!0&&(vt(i.BLEND),x=!1);return}if(x===!1&&(it(i.BLEND),x=!0),F!==Oh){if(F!==p||jt!==b){if((u!==di||M!==di)&&(i.blendEquation(i.FUNC_ADD),u=di,M=di),jt)switch(F){case qn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dn:i.blendFunc(i.ONE,i.ONE);break;case Cc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ic:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case qn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Cc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ic:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}T=null,w=null,N=null,P=null,L.set(0,0,0),V=0,p=F,b=jt}return}mt=mt||ut,ft=ft||K,Ot=Ot||nt,(ut!==u||mt!==M)&&(i.blendEquationSeparate(Wt[ut],Wt[mt]),u=ut,M=mt),(K!==T||nt!==w||ft!==N||Ot!==P)&&(i.blendFuncSeparate(he[K],he[nt],he[ft],he[Ot]),T=K,w=nt,N=ft,P=Ot),(fe.equals(L)===!1||Ee!==V)&&(i.blendColor(fe.r,fe.g,fe.b,Ee),L.copy(fe),V=Ee),p=F,b=!1}function be(F,ut){F.side===Oe?vt(i.CULL_FACE):it(i.CULL_FACE);let K=F.side===Ae;ut&&(K=!K),Lt(K),F.blending===qn&&F.transparent===!1?B(Xn):B(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);let nt=F.stencilWrite;o.setTest(nt),nt&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),te(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?it(i.SAMPLE_ALPHA_TO_COVERAGE):vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(F){S!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),S=F)}function Ct(F){F!==Nh?(it(i.CULL_FACE),F!==U&&(F===Rc?i.cullFace(i.BACK):F===Fh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):vt(i.CULL_FACE),U=F}function It(F){F!==$&&(E&&i.lineWidth(F),$=F)}function te(F,ut,K){F?(it(i.POLYGON_OFFSET_FILL),(X!==ut||_!==K)&&(i.polygonOffset(ut,K),X=ut,_=K)):vt(i.POLYGON_OFFSET_FILL)}function Rt(F){F?it(i.SCISSOR_TEST):vt(i.SCISSOR_TEST)}function A(F){F===void 0&&(F=i.TEXTURE0+R-1),D!==F&&(i.activeTexture(F),D=F)}function v(F,ut,K){K===void 0&&(D===null?K=i.TEXTURE0+R-1:K=D);let nt=W[K];nt===void 0&&(nt={type:void 0,texture:void 0},W[K]=nt),(nt.type!==F||nt.texture!==ut)&&(D!==K&&(i.activeTexture(K),D=K),i.bindTexture(F,ut||rt[F]),nt.type=F,nt.texture=ut)}function G(){let F=W[D];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function et(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function st(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Et(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function dt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function gt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Yt(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function at(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _t(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Dt(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ut(F){ot.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),ot.copy(F))}function xt(F){z.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),z.copy(F))}function Xt(F,ut){let K=l.get(ut);K===void 0&&(K=new WeakMap,l.set(ut,K));let nt=K.get(F);nt===void 0&&(nt=i.getUniformBlockIndex(ut,F.name),K.set(F,nt))}function Vt(F,ut){let nt=l.get(ut).get(F);c.get(ut)!==nt&&(i.uniformBlockBinding(ut,nt,F.__bindingPointIndex),c.set(ut,nt))}function oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},D=null,W={},f={},d=new WeakMap,m=[],g=null,x=!1,p=null,u=null,T=null,w=null,M=null,N=null,P=null,L=new Ft(0,0,0),V=0,b=!1,S=null,U=null,$=null,X=null,_=null,ot.set(0,0,i.canvas.width,i.canvas.height),z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:it,disable:vt,bindFramebuffer:bt,drawBuffers:At,useProgram:Qt,setBlending:B,setMaterial:be,setFlipSided:Lt,setCullFace:Ct,setLineWidth:It,setPolygonOffset:te,setScissorTest:Rt,activeTexture:A,bindTexture:v,unbindTexture:G,compressedTexImage2D:et,compressedTexImage3D:st,texImage2D:_t,texImage3D:Dt,updateUBOMapping:Xt,uniformBlockBinding:Vt,texStorage2D:Yt,texStorage3D:at,texSubImage2D:Q,texSubImage3D:Et,compressedTexSubImage2D:dt,compressedTexSubImage3D:gt,scissor:Ut,viewport:xt,reset:oe}}function wl(i,t,e,n){let s=h0(n);switch(e){case Ol:return i*t;case zl:return i*t;case kl:return i*t*2;case Hl:return i*t/s.components*s.byteLength;case ic:return i*t/s.components*s.byteLength;case Vl:return i*t*2/s.components*s.byteLength;case sc:return i*t*2/s.components*s.byteLength;case Bl:return i*t*3/s.components*s.byteLength;case nn:return i*t*4/s.components*s.byteLength;case rc:return i*t*4/s.components*s.byteLength;case mr:case gr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case _r:case xr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Jo:case Ko:return Math.max(i,16)*Math.max(t,8)/4;case Zo:case $o:return Math.max(i,8)*Math.max(t,8)/2;case jo:case Qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ea:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case na:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ia:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case sa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ra:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case oa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case aa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ca:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case la:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ha:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ua:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case da:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case fa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case pa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case vr:case ma:case ga:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Gl:case _a:return Math.ceil(i/4)*Math.ceil(t/4)*8;case xa:case va:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function h0(i){switch(i){case Cn:case Ul:return{byteLength:1,components:1};case Ms:case Nl:case Is:return{byteLength:2,components:1};case ec:case nc:return{byteLength:2,components:4};case _i:case tc:case Tn:return{byteLength:4,components:1};case Fl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function u0(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new kt,h=new WeakMap,f,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,v){return m?new OffscreenCanvas(A,v):Sr("canvas")}function x(A,v,G){let et=1,st=Rt(A);if((st.width>G||st.height>G)&&(et=G/Math.max(st.width,st.height)),et<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let Q=Math.floor(et*st.width),Et=Math.floor(et*st.height);f===void 0&&(f=g(Q,Et));let dt=v?g(Q,Et):f;return dt.width=Q,dt.height=Et,dt.getContext("2d").drawImage(A,0,0,Q,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+Q+"x"+Et+")."),dt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),A;return A}function p(A){return A.generateMipmaps}function u(A){i.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(A,v,G,et,st=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Q=v;if(v===i.RED&&(G===i.FLOAT&&(Q=i.R32F),G===i.HALF_FLOAT&&(Q=i.R16F),G===i.UNSIGNED_BYTE&&(Q=i.R8)),v===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.R8UI),G===i.UNSIGNED_SHORT&&(Q=i.R16UI),G===i.UNSIGNED_INT&&(Q=i.R32UI),G===i.BYTE&&(Q=i.R8I),G===i.SHORT&&(Q=i.R16I),G===i.INT&&(Q=i.R32I)),v===i.RG&&(G===i.FLOAT&&(Q=i.RG32F),G===i.HALF_FLOAT&&(Q=i.RG16F),G===i.UNSIGNED_BYTE&&(Q=i.RG8)),v===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RG8UI),G===i.UNSIGNED_SHORT&&(Q=i.RG16UI),G===i.UNSIGNED_INT&&(Q=i.RG32UI),G===i.BYTE&&(Q=i.RG8I),G===i.SHORT&&(Q=i.RG16I),G===i.INT&&(Q=i.RG32I)),v===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),G===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),G===i.UNSIGNED_INT&&(Q=i.RGB32UI),G===i.BYTE&&(Q=i.RGB8I),G===i.SHORT&&(Q=i.RGB16I),G===i.INT&&(Q=i.RGB32I)),v===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),G===i.UNSIGNED_INT&&(Q=i.RGBA32UI),G===i.BYTE&&(Q=i.RGBA8I),G===i.SHORT&&(Q=i.RGBA16I),G===i.INT&&(Q=i.RGBA32I)),v===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),v===i.RGBA){let Et=st?Gr:Zt.getTransfer(et);G===i.FLOAT&&(Q=i.RGBA32F),G===i.HALF_FLOAT&&(Q=i.RGBA16F),G===i.UNSIGNED_BYTE&&(Q=Et===ee?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function M(A,v){let G;return A?v===null||v===_i||v===qi?G=i.DEPTH24_STENCIL8:v===Tn?G=i.DEPTH32F_STENCIL8:v===Ms&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===_i||v===qi?G=i.DEPTH_COMPONENT24:v===Tn?G=i.DEPTH_COMPONENT32F:v===Ms&&(G=i.DEPTH_COMPONENT16),G}function N(A,v){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==sn&&A.minFilter!==un?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function P(A){let v=A.target;v.removeEventListener("dispose",P),V(v),v.isVideoTexture&&h.delete(v)}function L(A){let v=A.target;v.removeEventListener("dispose",L),S(v)}function V(A){let v=n.get(A);if(v.__webglInit===void 0)return;let G=A.source,et=d.get(G);if(et){let st=et[v.__cacheKey];st.usedTimes--,st.usedTimes===0&&b(A),Object.keys(et).length===0&&d.delete(G)}n.remove(A)}function b(A){let v=n.get(A);i.deleteTexture(v.__webglTexture);let G=A.source,et=d.get(G);delete et[v.__cacheKey],a.memory.textures--}function S(A){let v=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(v.__webglFramebuffer[et]))for(let st=0;st<v.__webglFramebuffer[et].length;st++)i.deleteFramebuffer(v.__webglFramebuffer[et][st]);else i.deleteFramebuffer(v.__webglFramebuffer[et]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[et])}else{if(Array.isArray(v.__webglFramebuffer))for(let et=0;et<v.__webglFramebuffer.length;et++)i.deleteFramebuffer(v.__webglFramebuffer[et]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let et=0;et<v.__webglColorRenderbuffer.length;et++)v.__webglColorRenderbuffer[et]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[et]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let G=A.textures;for(let et=0,st=G.length;et<st;et++){let Q=n.get(G[et]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),a.memory.textures--),n.remove(G[et])}n.remove(A)}let U=0;function $(){U=0}function X(){let A=U;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),U+=1,A}function _(A){let v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function R(A,v){let G=n.get(A);if(A.isVideoTexture&&It(A),A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){let et=A.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{z(G,A,v);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+v)}function E(A,v){let G=n.get(A);if(A.version>0&&G.__version!==A.version){z(G,A,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+v)}function O(A,v){let G=n.get(A);if(A.version>0&&G.__version!==A.version){z(G,A,v);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+v)}function I(A,v){let G=n.get(A);if(A.version>0&&G.__version!==A.version){J(G,A,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+v)}let D={[gi]:i.REPEAT,[pi]:i.CLAMP_TO_EDGE,[Yo]:i.MIRRORED_REPEAT},W={[sn]:i.NEAREST,[lu]:i.NEAREST_MIPMAP_NEAREST,[Ws]:i.NEAREST_MIPMAP_LINEAR,[un]:i.LINEAR,[no]:i.LINEAR_MIPMAP_NEAREST,[mi]:i.LINEAR_MIPMAP_LINEAR},q={[fu]:i.NEVER,[vu]:i.ALWAYS,[pu]:i.LESS,[Xl]:i.LEQUAL,[mu]:i.EQUAL,[xu]:i.GEQUAL,[gu]:i.GREATER,[_u]:i.NOTEQUAL};function j(A,v){if(v.type===Tn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===un||v.magFilter===no||v.magFilter===Ws||v.magFilter===mi||v.minFilter===un||v.minFilter===no||v.minFilter===Ws||v.minFilter===mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,D[v.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,D[v.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,D[v.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,W[v.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,W[v.minFilter]),v.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,q[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===sn||v.minFilter!==Ws&&v.minFilter!==mi||v.type===Tn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ot(A,v){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",P));let et=v.source,st=d.get(et);st===void 0&&(st={},d.set(et,st));let Q=_(v);if(Q!==A.__cacheKey){st[Q]===void 0&&(st[Q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),st[Q].usedTimes++;let Et=st[A.__cacheKey];Et!==void 0&&(st[A.__cacheKey].usedTimes--,Et.usedTimes===0&&b(v)),A.__cacheKey=Q,A.__webglTexture=st[Q].texture}return G}function z(A,v,G){let et=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(et=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(et=i.TEXTURE_3D);let st=ot(A,v),Q=v.source;e.bindTexture(et,A.__webglTexture,i.TEXTURE0+G);let Et=n.get(Q);if(Q.version!==Et.__version||st===!0){e.activeTexture(i.TEXTURE0+G);let dt=Zt.getPrimaries(Zt.workingColorSpace),gt=v.colorSpace===Gn?null:Zt.getPrimaries(v.colorSpace),Yt=v.colorSpace===Gn||dt===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let at=x(v.image,!1,s.maxTextureSize);at=te(v,at);let _t=r.convert(v.format,v.colorSpace),Dt=r.convert(v.type),Ut=w(v.internalFormat,_t,Dt,v.colorSpace,v.isVideoTexture);j(et,v);let xt,Xt=v.mipmaps,Vt=v.isVideoTexture!==!0,oe=Et.__version===void 0||st===!0,F=Q.dataReady,ut=N(v,at);if(v.isDepthTexture)Ut=M(v.format===Yi,v.type),oe&&(Vt?e.texStorage2D(i.TEXTURE_2D,1,Ut,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,Ut,at.width,at.height,0,_t,Dt,null));else if(v.isDataTexture)if(Xt.length>0){Vt&&oe&&e.texStorage2D(i.TEXTURE_2D,ut,Ut,Xt[0].width,Xt[0].height);for(let K=0,nt=Xt.length;K<nt;K++)xt=Xt[K],Vt?F&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,xt.width,xt.height,_t,Dt,xt.data):e.texImage2D(i.TEXTURE_2D,K,Ut,xt.width,xt.height,0,_t,Dt,xt.data);v.generateMipmaps=!1}else Vt?(oe&&e.texStorage2D(i.TEXTURE_2D,ut,Ut,at.width,at.height),F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,at.width,at.height,_t,Dt,at.data)):e.texImage2D(i.TEXTURE_2D,0,Ut,at.width,at.height,0,_t,Dt,at.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Vt&&oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,Ut,Xt[0].width,Xt[0].height,at.depth);for(let K=0,nt=Xt.length;K<nt;K++)if(xt=Xt[K],v.format!==nn)if(_t!==null)if(Vt){if(F)if(v.layerUpdates.size>0){let mt=wl(xt.width,xt.height,v.format,v.type);for(let ft of v.layerUpdates){let Ot=xt.data.subarray(ft*mt/xt.data.BYTES_PER_ELEMENT,(ft+1)*mt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,ft,xt.width,xt.height,1,_t,Ot)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,xt.width,xt.height,at.depth,_t,xt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,Ut,xt.width,xt.height,at.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,xt.width,xt.height,at.depth,_t,Dt,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,K,Ut,xt.width,xt.height,at.depth,0,_t,Dt,xt.data)}else{Vt&&oe&&e.texStorage2D(i.TEXTURE_2D,ut,Ut,Xt[0].width,Xt[0].height);for(let K=0,nt=Xt.length;K<nt;K++)xt=Xt[K],v.format!==nn?_t!==null?Vt?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,xt.width,xt.height,_t,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,K,Ut,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?F&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,xt.width,xt.height,_t,Dt,xt.data):e.texImage2D(i.TEXTURE_2D,K,Ut,xt.width,xt.height,0,_t,Dt,xt.data)}else if(v.isDataArrayTexture)if(Vt){if(oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,Ut,at.width,at.height,at.depth),F)if(v.layerUpdates.size>0){let K=wl(at.width,at.height,v.format,v.type);for(let nt of v.layerUpdates){let mt=at.data.subarray(nt*K/at.data.BYTES_PER_ELEMENT,(nt+1)*K/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,nt,at.width,at.height,1,_t,Dt,mt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,_t,Dt,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ut,at.width,at.height,at.depth,0,_t,Dt,at.data);else if(v.isData3DTexture)Vt?(oe&&e.texStorage3D(i.TEXTURE_3D,ut,Ut,at.width,at.height,at.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,_t,Dt,at.data)):e.texImage3D(i.TEXTURE_3D,0,Ut,at.width,at.height,at.depth,0,_t,Dt,at.data);else if(v.isFramebufferTexture){if(oe)if(Vt)e.texStorage2D(i.TEXTURE_2D,ut,Ut,at.width,at.height);else{let K=at.width,nt=at.height;for(let mt=0;mt<ut;mt++)e.texImage2D(i.TEXTURE_2D,mt,Ut,K,nt,0,_t,Dt,null),K>>=1,nt>>=1}}else if(Xt.length>0){if(Vt&&oe){let K=Rt(Xt[0]);e.texStorage2D(i.TEXTURE_2D,ut,Ut,K.width,K.height)}for(let K=0,nt=Xt.length;K<nt;K++)xt=Xt[K],Vt?F&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,_t,Dt,xt):e.texImage2D(i.TEXTURE_2D,K,Ut,_t,Dt,xt);v.generateMipmaps=!1}else if(Vt){if(oe){let K=Rt(at);e.texStorage2D(i.TEXTURE_2D,ut,Ut,K.width,K.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t,Dt,at)}else e.texImage2D(i.TEXTURE_2D,0,Ut,_t,Dt,at);p(v)&&u(et),Et.__version=Q.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function J(A,v,G){if(v.image.length!==6)return;let et=ot(A,v),st=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+G);let Q=n.get(st);if(st.version!==Q.__version||et===!0){e.activeTexture(i.TEXTURE0+G);let Et=Zt.getPrimaries(Zt.workingColorSpace),dt=v.colorSpace===Gn?null:Zt.getPrimaries(v.colorSpace),gt=v.colorSpace===Gn||Et===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let Yt=v.isCompressedTexture||v.image[0].isCompressedTexture,at=v.image[0]&&v.image[0].isDataTexture,_t=[];for(let nt=0;nt<6;nt++)!Yt&&!at?_t[nt]=x(v.image[nt],!0,s.maxCubemapSize):_t[nt]=at?v.image[nt].image:v.image[nt],_t[nt]=te(v,_t[nt]);let Dt=_t[0],Ut=r.convert(v.format,v.colorSpace),xt=r.convert(v.type),Xt=w(v.internalFormat,Ut,xt,v.colorSpace),Vt=v.isVideoTexture!==!0,oe=Q.__version===void 0||et===!0,F=st.dataReady,ut=N(v,Dt);j(i.TEXTURE_CUBE_MAP,v);let K;if(Yt){Vt&&oe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,Xt,Dt.width,Dt.height);for(let nt=0;nt<6;nt++){K=_t[nt].mipmaps;for(let mt=0;mt<K.length;mt++){let ft=K[mt];v.format!==nn?Ut!==null?Vt?F&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,mt,0,0,ft.width,ft.height,Ut,ft.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,mt,Xt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,mt,0,0,ft.width,ft.height,Ut,xt,ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,mt,Xt,ft.width,ft.height,0,Ut,xt,ft.data)}}}else{if(K=v.mipmaps,Vt&&oe){K.length>0&&ut++;let nt=Rt(_t[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,Xt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(at){Vt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,_t[nt].width,_t[nt].height,Ut,xt,_t[nt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Xt,_t[nt].width,_t[nt].height,0,Ut,xt,_t[nt].data);for(let mt=0;mt<K.length;mt++){let Ot=K[mt].image[nt].image;Vt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,mt+1,0,0,Ot.width,Ot.height,Ut,xt,Ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,mt+1,Xt,Ot.width,Ot.height,0,Ut,xt,Ot.data)}}else{Vt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Ut,xt,_t[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Xt,Ut,xt,_t[nt]);for(let mt=0;mt<K.length;mt++){let ft=K[mt];Vt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,mt+1,0,0,Ut,xt,ft.image[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,mt+1,Xt,Ut,xt,ft.image[nt])}}}p(v)&&u(i.TEXTURE_CUBE_MAP),Q.__version=st.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function rt(A,v,G,et,st,Q){let Et=r.convert(G.format,G.colorSpace),dt=r.convert(G.type),gt=w(G.internalFormat,Et,dt,G.colorSpace),Yt=n.get(v),at=n.get(G);if(at.__renderTarget=v,!Yt.__hasExternalTextures){let _t=Math.max(1,v.width>>Q),Dt=Math.max(1,v.height>>Q);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,Q,gt,_t,Dt,v.depth,0,Et,dt,null):e.texImage2D(st,Q,gt,_t,Dt,0,Et,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Ct(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,st,at.__webglTexture,0,Lt(v)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,et,st,at.__webglTexture,Q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function it(A,v,G){if(i.bindRenderbuffer(i.RENDERBUFFER,A),v.depthBuffer){let et=v.depthTexture,st=et&&et.isDepthTexture?et.type:null,Q=M(v.stencilBuffer,st),Et=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=Lt(v);Ct(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,Q,v.width,v.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,Q,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Q,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,A)}else{let et=v.textures;for(let st=0;st<et.length;st++){let Q=et[st],Et=r.convert(Q.format,Q.colorSpace),dt=r.convert(Q.type),gt=w(Q.internalFormat,Et,dt,Q.colorSpace),Yt=Lt(v);G&&Ct(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt,gt,v.width,v.height):Ct(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Yt,gt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,gt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function vt(A,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let et=n.get(v.depthTexture);et.__renderTarget=v,(!et.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),R(v.depthTexture,0);let st=et.__webglTexture,Q=Lt(v);if(v.depthTexture.format===ki)Ct(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0);else if(v.depthTexture.format===Yi)Ct(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function bt(A){let v=n.get(A),G=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){let et=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),et){let st=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,et.removeEventListener("dispose",st)};et.addEventListener("dispose",st),v.__depthDisposeCallback=st}v.__boundDepthTexture=et}if(A.depthTexture&&!v.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");vt(v.__webglFramebuffer,A)}else if(G){v.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[et]),v.__webglDepthbuffer[et]===void 0)v.__webglDepthbuffer[et]=i.createRenderbuffer(),it(v.__webglDepthbuffer[et],A,!1);else{let st=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=v.__webglDepthbuffer[et];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),it(v.__webglDepthbuffer,A,!1);else{let et=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,st)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function At(A,v,G){let et=n.get(A);v!==void 0&&rt(et.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&bt(A)}function Qt(A){let v=A.texture,G=n.get(A),et=n.get(v);A.addEventListener("dispose",L);let st=A.textures,Q=A.isWebGLCubeRenderTarget===!0,Et=st.length>1;if(Et||(et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture()),et.__version=v.version,a.memory.textures++),Q){G.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(v.mipmaps&&v.mipmaps.length>0){G.__webglFramebuffer[dt]=[];for(let gt=0;gt<v.mipmaps.length;gt++)G.__webglFramebuffer[dt][gt]=i.createFramebuffer()}else G.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){G.__webglFramebuffer=[];for(let dt=0;dt<v.mipmaps.length;dt++)G.__webglFramebuffer[dt]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Et)for(let dt=0,gt=st.length;dt<gt;dt++){let Yt=n.get(st[dt]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Ct(A)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let dt=0;dt<st.length;dt++){let gt=st[dt];G.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[dt]);let Yt=r.convert(gt.format,gt.colorSpace),at=r.convert(gt.type),_t=w(gt.internalFormat,Yt,at,gt.colorSpace,A.isXRRenderTarget===!0),Dt=Lt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,_t,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,G.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),it(G.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),j(i.TEXTURE_CUBE_MAP,v);for(let dt=0;dt<6;dt++)if(v.mipmaps&&v.mipmaps.length>0)for(let gt=0;gt<v.mipmaps.length;gt++)rt(G.__webglFramebuffer[dt][gt],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,gt);else rt(G.__webglFramebuffer[dt],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);p(v)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let dt=0,gt=st.length;dt<gt;dt++){let Yt=st[dt],at=n.get(Yt);e.bindTexture(i.TEXTURE_2D,at.__webglTexture),j(i.TEXTURE_2D,Yt),rt(G.__webglFramebuffer,A,Yt,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,0),p(Yt)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(dt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,et.__webglTexture),j(dt,v),v.mipmaps&&v.mipmaps.length>0)for(let gt=0;gt<v.mipmaps.length;gt++)rt(G.__webglFramebuffer[gt],A,v,i.COLOR_ATTACHMENT0,dt,gt);else rt(G.__webglFramebuffer,A,v,i.COLOR_ATTACHMENT0,dt,0);p(v)&&u(dt),e.unbindTexture()}A.depthBuffer&&bt(A)}function Wt(A){let v=A.textures;for(let G=0,et=v.length;G<et;G++){let st=v[G];if(p(st)){let Q=T(A),Et=n.get(st).__webglTexture;e.bindTexture(Q,Et),u(Q),e.unbindTexture()}}}let he=[],B=[];function be(A){if(A.samples>0){if(Ct(A)===!1){let v=A.textures,G=A.width,et=A.height,st=i.COLOR_BUFFER_BIT,Q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(A),dt=v.length>1;if(dt)for(let gt=0;gt<v.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let gt=0;gt<v.length;gt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[gt]);let Yt=n.get(v[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Yt,0)}i.blitFramebuffer(0,0,G,et,0,0,G,et,st,i.NEAREST),c===!0&&(he.length=0,B.length=0,he.push(i.COLOR_ATTACHMENT0+gt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(he.push(Q),B.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,B)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,he))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let gt=0;gt<v.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,Et.__webglColorRenderbuffer[gt]);let Yt=n.get(v[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,Yt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){let v=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Lt(A){return Math.min(s.maxSamples,A.samples)}function Ct(A){let v=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function It(A){let v=a.render.frame;h.get(A)!==v&&(h.set(A,v),A.update())}function te(A,v){let G=A.colorSpace,et=A.format,st=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==ji&&G!==Gn&&(Zt.getTransfer(G)===ee?(et!==nn||st!==Cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),v}function Rt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=X,this.resetTextureUnits=$,this.setTexture2D=R,this.setTexture2DArray=E,this.setTexture3D=O,this.setTextureCube=I,this.rebindTextures=At,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=Ct}function d0(i,t){function e(n,s=Gn){let r,a=Zt.getTransfer(s);if(n===Cn)return i.UNSIGNED_BYTE;if(n===ec)return i.UNSIGNED_SHORT_4_4_4_4;if(n===nc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Fl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ul)return i.BYTE;if(n===Nl)return i.SHORT;if(n===Ms)return i.UNSIGNED_SHORT;if(n===tc)return i.INT;if(n===_i)return i.UNSIGNED_INT;if(n===Tn)return i.FLOAT;if(n===Is)return i.HALF_FLOAT;if(n===Ol)return i.ALPHA;if(n===Bl)return i.RGB;if(n===nn)return i.RGBA;if(n===zl)return i.LUMINANCE;if(n===kl)return i.LUMINANCE_ALPHA;if(n===ki)return i.DEPTH_COMPONENT;if(n===Yi)return i.DEPTH_STENCIL;if(n===Hl)return i.RED;if(n===ic)return i.RED_INTEGER;if(n===Vl)return i.RG;if(n===sc)return i.RG_INTEGER;if(n===rc)return i.RGBA_INTEGER;if(n===mr||n===gr||n===_r||n===xr)if(a===ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===mr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===mr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Zo||n===Jo||n===$o||n===Ko)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Zo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Jo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$o)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ko)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jo||n===Qo||n===ta)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===jo||n===Qo)return a===ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ta)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ea||n===na||n===ia||n===sa||n===ra||n===oa||n===aa||n===ca||n===la||n===ha||n===ua||n===da||n===fa||n===pa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ea)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===na)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ia)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sa)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ra)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===oa)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===aa)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ca)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===la)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ha)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ua)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===da)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fa)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pa)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vr||n===ma||n===ga)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===vr)return a===ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ma)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ga)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Gl||n===_a||n===xa||n===va)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===vr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_a)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===va)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Oa=class extends Me{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},qt=class extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}},f0={type:"move"},ys=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let x of t.hand.values()){let p=e.getJointPose(x,n),u=this._getHandJoint(l,x);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=h.position.distanceTo(f.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(f0)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new qt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},p0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,m0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ba=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new We,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new pn({vertexShader:p0,fragmentShader:m0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pt(new Be(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},za=class extends $n{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,d=null,m=null,g=null,x=new Ba,p=e.getContextAttributes(),u=null,T=null,w=[],M=[],N=new kt,P=null,L=new Me;L.viewport=new ie;let V=new Me;V.viewport=new ie;let b=[L,V],S=new Oa,U=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let J=w[z];return J===void 0&&(J=new ys,w[z]=J),J.getTargetRaySpace()},this.getControllerGrip=function(z){let J=w[z];return J===void 0&&(J=new ys,w[z]=J),J.getGripSpace()},this.getHand=function(z){let J=w[z];return J===void 0&&(J=new ys,w[z]=J),J.getHandSpace()};function X(z){let J=M.indexOf(z.inputSource);if(J===-1)return;let rt=w[J];rt!==void 0&&(rt.update(z.inputSource,z.frame,l||a),rt.dispatchEvent({type:z.type,data:z.inputSource}))}function _(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",_),s.removeEventListener("inputsourceschange",R);for(let z=0;z<w.length;z++){let J=M[z];J!==null&&(M[z]=null,w[z].disconnect(J))}U=null,$=null,x.reset(),t.setRenderTarget(u),m=null,d=null,f=null,s=null,T=null,ot.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",_),s.addEventListener("inputsourceschange",R),p.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(N),s.renderState.layers===void 0){let J={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,J),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new In(m.framebufferWidth,m.framebufferHeight,{format:nn,type:Cn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let J=null,rt=null,it=null;p.depth&&(it=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=p.stencil?Yi:ki,rt=p.stencil?qi:_i);let vt={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:r};f=new XRWebGLBinding(s,e),d=f.createProjectionLayer(vt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),T=new In(d.textureWidth,d.textureHeight,{format:nn,type:Cn,depthTexture:new Lr(d.textureWidth,d.textureHeight,rt,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),ot.setContext(s),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function R(z){for(let J=0;J<z.removed.length;J++){let rt=z.removed[J],it=M.indexOf(rt);it>=0&&(M[it]=null,w[it].disconnect(rt))}for(let J=0;J<z.added.length;J++){let rt=z.added[J],it=M.indexOf(rt);if(it===-1){for(let bt=0;bt<w.length;bt++)if(bt>=M.length){M.push(rt),it=bt;break}else if(M[bt]===null){M[bt]=rt,it=bt;break}if(it===-1)break}let vt=w[it];vt&&vt.connect(rt)}}let E=new C,O=new C;function I(z,J,rt){E.setFromMatrixPosition(J.matrixWorld),O.setFromMatrixPosition(rt.matrixWorld);let it=E.distanceTo(O),vt=J.projectionMatrix.elements,bt=rt.projectionMatrix.elements,At=vt[14]/(vt[10]-1),Qt=vt[14]/(vt[10]+1),Wt=(vt[9]+1)/vt[5],he=(vt[9]-1)/vt[5],B=(vt[8]-1)/vt[0],be=(bt[8]+1)/bt[0],Lt=At*B,Ct=At*be,It=it/(-B+be),te=It*-B;if(J.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(te),z.translateZ(It),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),vt[10]===-1)z.projectionMatrix.copy(J.projectionMatrix),z.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let Rt=At+It,A=Qt+It,v=Lt-te,G=Ct+(it-te),et=Wt*Qt/A*Rt,st=he*Qt/A*Rt;z.projectionMatrix.makePerspective(v,G,et,st,Rt,A),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function D(z,J){J===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(J.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;let J=z.near,rt=z.far;x.texture!==null&&(x.depthNear>0&&(J=x.depthNear),x.depthFar>0&&(rt=x.depthFar)),S.near=V.near=L.near=J,S.far=V.far=L.far=rt,(U!==S.near||$!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),U=S.near,$=S.far),L.layers.mask=z.layers.mask|2,V.layers.mask=z.layers.mask|4,S.layers.mask=L.layers.mask|V.layers.mask;let it=z.parent,vt=S.cameras;D(S,it);for(let bt=0;bt<vt.length;bt++)D(vt[bt],it);vt.length===2?I(S,L,V):S.projectionMatrix.copy(L.projectionMatrix),W(z,S,it)};function W(z,J,rt){rt===null?z.matrix.copy(J.matrixWorld):(z.matrix.copy(rt.matrixWorld),z.matrix.invert(),z.matrix.multiply(J.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(J.projectionMatrix),z.projectionMatrixInverse.copy(J.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Sa*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(z){c=z,d!==null&&(d.fixedFoveation=z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=z)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let q=null;function j(z,J){if(h=J.getViewerPose(l||a),g=J,h!==null){let rt=h.views;m!==null&&(t.setRenderTargetFramebuffer(T,m.framebuffer),t.setRenderTarget(T));let it=!1;rt.length!==S.cameras.length&&(S.cameras.length=0,it=!0);for(let bt=0;bt<rt.length;bt++){let At=rt[bt],Qt=null;if(m!==null)Qt=m.getViewport(At);else{let he=f.getViewSubImage(d,At);Qt=he.viewport,bt===0&&(t.setRenderTargetTextures(T,he.colorTexture,d.ignoreDepthValues?void 0:he.depthStencilTexture),t.setRenderTarget(T))}let Wt=b[bt];Wt===void 0&&(Wt=new Me,Wt.layers.enable(bt),Wt.viewport=new ie,b[bt]=Wt),Wt.matrix.fromArray(At.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(At.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),bt===0&&(S.matrix.copy(Wt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),it===!0&&S.cameras.push(Wt)}let vt=s.enabledFeatures;if(vt&&vt.includes("depth-sensing")){let bt=f.getDepthInformation(rt[0]);bt&&bt.isValid&&bt.texture&&x.init(t,bt,s.renderState)}}for(let rt=0;rt<w.length;rt++){let it=M[rt],vt=w[rt];it!==null&&vt!==void 0&&vt.update(it,J,l||a)}q&&q(z,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}let ot=new Jl;ot.setAnimationLoop(j),this.setAnimationLoop=function(z){q=z},this.dispose=function(){}}},hi=new fn,g0=new de;function _0(i,t){function e(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,Zl(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function s(p,u,T,w,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),f(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u)):u.isMeshStandardMaterial?(r(p,u),d(p,u),u.isMeshPhysicalMaterial&&m(p,u,M)):u.isMeshMatcapMaterial?(r(p,u),g(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),x(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?c(p,u,T,w):u.isSpriteMaterial?l(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,e(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Ae&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,e(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Ae&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,e(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,e(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);let T=t.get(u),w=T.envMap,M=T.envMapRotation;w&&(p.envMap.value=w,hi.copy(M),hi.x*=-1,hi.y*=-1,hi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),p.envMapRotation.value.setFromMatrix4(g0.makeRotationFromEuler(hi)),p.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function c(p,u,T,w){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*T,p.scale.value=w*.5,u.map&&(p.map.value=u.map,e(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function l(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function d(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,T){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ae&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function x(p,u){let T=t.get(u).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function x0(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,w){let M=w.program;n.uniformBlockBinding(T,M)}function l(T,w){let M=s[T.id];M===void 0&&(g(T),M=h(T),s[T.id]=M,T.addEventListener("dispose",p));let N=w.program;n.updateUBOMapping(T,N);let P=t.render.frame;r[T.id]!==P&&(d(T),r[T.id]=P)}function h(T){let w=f();T.__bindingPointIndex=w;let M=i.createBuffer(),N=T.__size,P=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,N,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,M),M}function f(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){let w=s[T.id],M=T.uniforms,N=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let P=0,L=M.length;P<L;P++){let V=Array.isArray(M[P])?M[P]:[M[P]];for(let b=0,S=V.length;b<S;b++){let U=V[b];if(m(U,P,b,N)===!0){let $=U.__offset,X=Array.isArray(U.value)?U.value:[U.value],_=0;for(let R=0;R<X.length;R++){let E=X[R],O=x(E);typeof E=="number"||typeof E=="boolean"?(U.__data[0]=E,i.bufferSubData(i.UNIFORM_BUFFER,$+_,U.__data)):E.isMatrix3?(U.__data[0]=E.elements[0],U.__data[1]=E.elements[1],U.__data[2]=E.elements[2],U.__data[3]=0,U.__data[4]=E.elements[3],U.__data[5]=E.elements[4],U.__data[6]=E.elements[5],U.__data[7]=0,U.__data[8]=E.elements[6],U.__data[9]=E.elements[7],U.__data[10]=E.elements[8],U.__data[11]=0):(E.toArray(U.__data,_),_+=O.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,$,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(T,w,M,N){let P=T.value,L=w+"_"+M;if(N[L]===void 0)return typeof P=="number"||typeof P=="boolean"?N[L]=P:N[L]=P.clone(),!0;{let V=N[L];if(typeof P=="number"||typeof P=="boolean"){if(V!==P)return N[L]=P,!0}else if(V.equals(P)===!1)return V.copy(P),!0}return!1}function g(T){let w=T.uniforms,M=0,N=16;for(let L=0,V=w.length;L<V;L++){let b=Array.isArray(w[L])?w[L]:[w[L]];for(let S=0,U=b.length;S<U;S++){let $=b[S],X=Array.isArray($.value)?$.value:[$.value];for(let _=0,R=X.length;_<R;_++){let E=X[_],O=x(E),I=M%N,D=I%O.boundary,W=I+D;M+=D,W!==0&&N-W<O.storage&&(M+=N-W),$.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=M,M+=O.storage}}}let P=M%N;return P>0&&(M+=N-P),T.__size=M,T.__cache={},this}function x(T){let w={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(w.boundary=4,w.storage=4):T.isVector2?(w.boundary=8,w.storage=8):T.isVector3||T.isColor?(w.boundary=16,w.storage=12):T.isVector4?(w.boundary=16,w.storage=16):T.isMatrix3?(w.boundary=48,w.storage=48):T.isMatrix4?(w.boundary=64,w.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),w}function p(T){let w=T.target;w.removeEventListener("dispose",p);let M=a.indexOf(w.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function u(){for(let T in s)i.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:c,update:l,dispose:u}}var Es=class{constructor(t={}){let{canvas:e=Mu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let g=new Uint32Array(4),x=new Int32Array(4),p=null,u=null,T=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pe,this.toneMapping=Yn,this.toneMappingExposure=1;let M=this,N=!1,P=0,L=0,V=null,b=-1,S=null,U=new ie,$=new ie,X=null,_=new Ft(0),R=0,E=e.width,O=e.height,I=1,D=null,W=null,q=new ie(0,0,E,O),j=new ie(0,0,E,O),ot=!1,z=new bs,J=!1,rt=!1,it=new de,vt=new de,bt=new C,At=new ie,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Wt=!1;function he(){return V===null?I:1}let B=n;function be(y,k){return e.getContext(y,k)}try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ja}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),B===null){let k="webgl2";if(B=be(k,y),B===null)throw be(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Lt,Ct,It,te,Rt,A,v,G,et,st,Q,Et,dt,gt,Yt,at,_t,Dt,Ut,xt,Xt,Vt,oe,F;function ut(){Lt=new Up(B),Lt.init(),Vt=new d0(B,Lt),Ct=new Rp(B,Lt,t,Vt),It=new l0(B,Lt),Ct.reverseDepthBuffer&&d&&It.buffers.depth.setReversed(!0),te=new Op(B),Rt=new $m,A=new u0(B,Lt,It,Rt,Ct,Vt,te),v=new Ip(M),G=new Dp(M),et=new Gu(B),oe=new Tp(B,et),st=new Np(B,et,te,oe),Q=new zp(B,st,et,te),Ut=new Bp(B,Ct,A),at=new Cp(Rt),Et=new Jm(M,v,G,Lt,Ct,oe,at),dt=new _0(M,Rt),gt=new jm,Yt=new s0(Lt),Dt=new wp(M,v,G,It,Q,m,c),_t=new a0(M,Q,Ct),F=new x0(B,te,Ct,It),xt=new Ap(B,Lt,te),Xt=new Fp(B,Lt,te),te.programs=Et.programs,M.capabilities=Ct,M.extensions=Lt,M.properties=Rt,M.renderLists=gt,M.shadowMap=_t,M.state=It,M.info=te}ut();let K=new za(M,B);this.xr=K,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let y=Lt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=Lt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(y){y!==void 0&&(I=y,this.setSize(E,O,!1))},this.getSize=function(y){return y.set(E,O)},this.setSize=function(y,k,Y=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=y,O=k,e.width=Math.floor(y*I),e.height=Math.floor(k*I),Y===!0&&(e.style.width=y+"px",e.style.height=k+"px"),this.setViewport(0,0,y,k)},this.getDrawingBufferSize=function(y){return y.set(E*I,O*I).floor()},this.setDrawingBufferSize=function(y,k,Y){E=y,O=k,I=Y,e.width=Math.floor(y*Y),e.height=Math.floor(k*Y),this.setViewport(0,0,y,k)},this.getCurrentViewport=function(y){return y.copy(U)},this.getViewport=function(y){return y.copy(q)},this.setViewport=function(y,k,Y,Z){y.isVector4?q.set(y.x,y.y,y.z,y.w):q.set(y,k,Y,Z),It.viewport(U.copy(q).multiplyScalar(I).round())},this.getScissor=function(y){return y.copy(j)},this.setScissor=function(y,k,Y,Z){y.isVector4?j.set(y.x,y.y,y.z,y.w):j.set(y,k,Y,Z),It.scissor($.copy(j).multiplyScalar(I).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(y){It.setScissorTest(ot=y)},this.setOpaqueSort=function(y){D=y},this.setTransparentSort=function(y){W=y},this.getClearColor=function(y){return y.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(y=!0,k=!0,Y=!0){let Z=0;if(y){let H=!1;if(V!==null){let lt=V.texture.format;H=lt===rc||lt===sc||lt===ic}if(H){let lt=V.texture.type,pt=lt===Cn||lt===_i||lt===Ms||lt===qi||lt===ec||lt===nc,yt=Dt.getClearColor(),Mt=Dt.getClearAlpha(),Nt=yt.r,Bt=yt.g,St=yt.b;pt?(g[0]=Nt,g[1]=Bt,g[2]=St,g[3]=Mt,B.clearBufferuiv(B.COLOR,0,g)):(x[0]=Nt,x[1]=Bt,x[2]=St,x[3]=Mt,B.clearBufferiv(B.COLOR,0,x))}else Z|=B.COLOR_BUFFER_BIT}k&&(Z|=B.DEPTH_BUFFER_BIT),Y&&(Z|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),gt.dispose(),Yt.dispose(),Rt.dispose(),v.dispose(),G.dispose(),Q.dispose(),oe.dispose(),F.dispose(),Et.dispose(),K.dispose(),K.removeEventListener("sessionstart",yc),K.removeEventListener("sessionend",Mc),si.stop()};function nt(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;let y=te.autoReset,k=_t.enabled,Y=_t.autoUpdate,Z=_t.needsUpdate,H=_t.type;ut(),te.autoReset=y,_t.enabled=k,_t.autoUpdate=Y,_t.needsUpdate=Z,_t.type=H}function ft(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ot(y){let k=y.target;k.removeEventListener("dispose",Ot),fe(k)}function fe(y){Ee(y),Rt.remove(y)}function Ee(y){let k=Rt.get(y).programs;k!==void 0&&(k.forEach(function(Y){Et.releaseProgram(Y)}),y.isShaderMaterial&&Et.releaseShaderCache(y))}this.renderBufferDirect=function(y,k,Y,Z,H,lt){k===null&&(k=Qt);let pt=H.isMesh&&H.matrixWorld.determinant()<0,yt=Lh(y,k,Y,Z,H);It.setMaterial(Z,pt);let Mt=Y.index,Nt=1;if(Z.wireframe===!0){if(Mt=st.getWireframeAttribute(Y),Mt===void 0)return;Nt=2}let Bt=Y.drawRange,St=Y.attributes.position,Jt=Bt.start*Nt,ae=(Bt.start+Bt.count)*Nt;lt!==null&&(Jt=Math.max(Jt,lt.start*Nt),ae=Math.min(ae,(lt.start+lt.count)*Nt)),Mt!==null?(Jt=Math.max(Jt,0),ae=Math.min(ae,Mt.count)):St!=null&&(Jt=Math.max(Jt,0),ae=Math.min(ae,St.count));let ce=ae-Jt;if(ce<0||ce===1/0)return;oe.setup(H,Z,yt,Y,Mt);let Ne,$t=xt;if(Mt!==null&&(Ne=et.get(Mt),$t=Xt,$t.setIndex(Ne)),H.isMesh)Z.wireframe===!0?(It.setLineWidth(Z.wireframeLinewidth*he()),$t.setMode(B.LINES)):$t.setMode(B.TRIANGLES);else if(H.isLine){let wt=Z.linewidth;wt===void 0&&(wt=1),It.setLineWidth(wt*he()),H.isLineSegments?$t.setMode(B.LINES):H.isLineLoop?$t.setMode(B.LINE_LOOP):$t.setMode(B.LINE_STRIP)}else H.isPoints?$t.setMode(B.POINTS):H.isSprite&&$t.setMode(B.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)$t.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Lt.get("WEBGL_multi_draw"))$t.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let wt=H._multiDrawStarts,xn=H._multiDrawCounts,Kt=H._multiDrawCount,je=Mt?et.get(Mt).bytesPerElement:1,yi=Rt.get(Z).currentProgram.getUniforms();for(let He=0;He<Kt;He++)yi.setValue(B,"_gl_DrawID",He),$t.render(wt[He]/je,xn[He])}else if(H.isInstancedMesh)$t.renderInstances(Jt,ce,H.count);else if(Y.isInstancedBufferGeometry){let wt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,xn=Math.min(Y.instanceCount,wt);$t.renderInstances(Jt,ce,xn)}else $t.render(Jt,ce)};function jt(y,k,Y){y.transparent===!0&&y.side===Oe&&y.forceSinglePass===!1?(y.side=Ae,y.needsUpdate=!0,Gs(y,k,Y),y.side=Jn,y.needsUpdate=!0,Gs(y,k,Y),y.side=Oe):Gs(y,k,Y)}this.compile=function(y,k,Y=null){Y===null&&(Y=y),u=Yt.get(Y),u.init(k),w.push(u),Y.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(u.pushLight(H),H.castShadow&&u.pushShadow(H))}),y!==Y&&y.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(u.pushLight(H),H.castShadow&&u.pushShadow(H))}),u.setupLights();let Z=new Set;return y.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let lt=H.material;if(lt)if(Array.isArray(lt))for(let pt=0;pt<lt.length;pt++){let yt=lt[pt];jt(yt,Y,H),Z.add(yt)}else jt(lt,Y,H),Z.add(lt)}),w.pop(),u=null,Z},this.compileAsync=function(y,k,Y=null){let Z=this.compile(y,k,Y);return new Promise(H=>{function lt(){if(Z.forEach(function(pt){Rt.get(pt).currentProgram.isReady()&&Z.delete(pt)}),Z.size===0){H(y);return}setTimeout(lt,10)}Lt.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let Ke=null;function _n(y){Ke&&Ke(y)}function yc(){si.stop()}function Mc(){si.start()}let si=new Jl;si.setAnimationLoop(_n),typeof self<"u"&&si.setContext(self),this.setAnimationLoop=function(y){Ke=y,K.setAnimationLoop(y),y===null?si.stop():si.start()},K.addEventListener("sessionstart",yc),K.addEventListener("sessionend",Mc),this.render=function(y,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(k),k=K.getCamera()),y.isScene===!0&&y.onBeforeRender(M,y,k,V),u=Yt.get(y,w.length),u.init(k),w.push(u),vt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),z.setFromProjectionMatrix(vt),rt=this.localClippingEnabled,J=at.init(this.clippingPlanes,rt),p=gt.get(y,T.length),p.init(),T.push(p),K.enabled===!0&&K.isPresenting===!0){let lt=M.xr.getDepthSensingMesh();lt!==null&&eo(lt,k,-1/0,M.sortObjects)}eo(y,k,0,M.sortObjects),p.finish(),M.sortObjects===!0&&p.sort(D,W),Wt=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Wt&&Dt.addToRenderList(p,y),this.info.render.frame++,J===!0&&at.beginShadows();let Y=u.state.shadowsArray;_t.render(Y,y,k),J===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();let Z=p.opaque,H=p.transmissive;if(u.setupLights(),k.isArrayCamera){let lt=k.cameras;if(H.length>0)for(let pt=0,yt=lt.length;pt<yt;pt++){let Mt=lt[pt];bc(Z,H,y,Mt)}Wt&&Dt.render(y);for(let pt=0,yt=lt.length;pt<yt;pt++){let Mt=lt[pt];Sc(p,y,Mt,Mt.viewport)}}else H.length>0&&bc(Z,H,y,k),Wt&&Dt.render(y),Sc(p,y,k);V!==null&&(A.updateMultisampleRenderTarget(V),A.updateRenderTargetMipmap(V)),y.isScene===!0&&y.onAfterRender(M,y,k),oe.resetDefaultState(),b=-1,S=null,w.pop(),w.length>0?(u=w[w.length-1],J===!0&&at.setGlobalState(M.clippingPlanes,u.state.camera)):u=null,T.pop(),T.length>0?p=T[T.length-1]:p=null};function eo(y,k,Y,Z){if(y.visible===!1)return;if(y.layers.test(k.layers)){if(y.isGroup)Y=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(k);else if(y.isLight)u.pushLight(y),y.castShadow&&u.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||z.intersectsSprite(y)){Z&&At.setFromMatrixPosition(y.matrixWorld).applyMatrix4(vt);let pt=Q.update(y),yt=y.material;yt.visible&&p.push(y,pt,yt,Y,At.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||z.intersectsObject(y))){let pt=Q.update(y),yt=y.material;if(Z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),At.copy(y.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),At.copy(pt.boundingSphere.center)),At.applyMatrix4(y.matrixWorld).applyMatrix4(vt)),Array.isArray(yt)){let Mt=pt.groups;for(let Nt=0,Bt=Mt.length;Nt<Bt;Nt++){let St=Mt[Nt],Jt=yt[St.materialIndex];Jt&&Jt.visible&&p.push(y,pt,Jt,Y,At.z,St)}}else yt.visible&&p.push(y,pt,yt,Y,At.z,null)}}let lt=y.children;for(let pt=0,yt=lt.length;pt<yt;pt++)eo(lt[pt],k,Y,Z)}function Sc(y,k,Y,Z){let H=y.opaque,lt=y.transmissive,pt=y.transparent;u.setupLightsView(Y),J===!0&&at.setGlobalState(M.clippingPlanes,Y),Z&&It.viewport(U.copy(Z)),H.length>0&&Vs(H,k,Y),lt.length>0&&Vs(lt,k,Y),pt.length>0&&Vs(pt,k,Y),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function bc(y,k,Y,Z){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[Z.id]===void 0&&(u.state.transmissionRenderTarget[Z.id]=new In(1,1,{generateMipmaps:!0,type:Lt.has("EXT_color_buffer_half_float")||Lt.has("EXT_color_buffer_float")?Is:Cn,minFilter:mi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));let lt=u.state.transmissionRenderTarget[Z.id],pt=Z.viewport||U;lt.setSize(pt.z,pt.w);let yt=M.getRenderTarget();M.setRenderTarget(lt),M.getClearColor(_),R=M.getClearAlpha(),R<1&&M.setClearColor(16777215,.5),M.clear(),Wt&&Dt.render(Y);let Mt=M.toneMapping;M.toneMapping=Yn;let Nt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),u.setupLightsView(Z),J===!0&&at.setGlobalState(M.clippingPlanes,Z),Vs(y,Y,Z),A.updateMultisampleRenderTarget(lt),A.updateRenderTargetMipmap(lt),Lt.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let St=0,Jt=k.length;St<Jt;St++){let ae=k[St],ce=ae.object,Ne=ae.geometry,$t=ae.material,wt=ae.group;if($t.side===Oe&&ce.layers.test(Z.layers)){let xn=$t.side;$t.side=Ae,$t.needsUpdate=!0,Ec(ce,Y,Z,Ne,$t,wt),$t.side=xn,$t.needsUpdate=!0,Bt=!0}}Bt===!0&&(A.updateMultisampleRenderTarget(lt),A.updateRenderTargetMipmap(lt))}M.setRenderTarget(yt),M.setClearColor(_,R),Nt!==void 0&&(Z.viewport=Nt),M.toneMapping=Mt}function Vs(y,k,Y){let Z=k.isScene===!0?k.overrideMaterial:null;for(let H=0,lt=y.length;H<lt;H++){let pt=y[H],yt=pt.object,Mt=pt.geometry,Nt=Z===null?pt.material:Z,Bt=pt.group;yt.layers.test(Y.layers)&&Ec(yt,k,Y,Mt,Nt,Bt)}}function Ec(y,k,Y,Z,H,lt){y.onBeforeRender(M,k,Y,Z,H,lt),y.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),H.onBeforeRender(M,k,Y,Z,y,lt),H.transparent===!0&&H.side===Oe&&H.forceSinglePass===!1?(H.side=Ae,H.needsUpdate=!0,M.renderBufferDirect(Y,k,Z,H,y,lt),H.side=Jn,H.needsUpdate=!0,M.renderBufferDirect(Y,k,Z,H,y,lt),H.side=Oe):M.renderBufferDirect(Y,k,Z,H,y,lt),y.onAfterRender(M,k,Y,Z,H,lt)}function Gs(y,k,Y){k.isScene!==!0&&(k=Qt);let Z=Rt.get(y),H=u.state.lights,lt=u.state.shadowsArray,pt=H.state.version,yt=Et.getParameters(y,H.state,lt,k,Y),Mt=Et.getProgramCacheKey(yt),Nt=Z.programs;Z.environment=y.isMeshStandardMaterial?k.environment:null,Z.fog=k.fog,Z.envMap=(y.isMeshStandardMaterial?G:v).get(y.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&y.envMap===null?k.environmentRotation:y.envMapRotation,Nt===void 0&&(y.addEventListener("dispose",Ot),Nt=new Map,Z.programs=Nt);let Bt=Nt.get(Mt);if(Bt!==void 0){if(Z.currentProgram===Bt&&Z.lightsStateVersion===pt)return Tc(y,yt),Bt}else yt.uniforms=Et.getUniforms(y),y.onBeforeCompile(yt,M),Bt=Et.acquireProgram(yt,Mt),Nt.set(Mt,Bt),Z.uniforms=yt.uniforms;let St=Z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(St.clippingPlanes=at.uniform),Tc(y,yt),Z.needsLights=Uh(y),Z.lightsStateVersion=pt,Z.needsLights&&(St.ambientLightColor.value=H.state.ambient,St.lightProbe.value=H.state.probe,St.directionalLights.value=H.state.directional,St.directionalLightShadows.value=H.state.directionalShadow,St.spotLights.value=H.state.spot,St.spotLightShadows.value=H.state.spotShadow,St.rectAreaLights.value=H.state.rectArea,St.ltc_1.value=H.state.rectAreaLTC1,St.ltc_2.value=H.state.rectAreaLTC2,St.pointLights.value=H.state.point,St.pointLightShadows.value=H.state.pointShadow,St.hemisphereLights.value=H.state.hemi,St.directionalShadowMap.value=H.state.directionalShadowMap,St.directionalShadowMatrix.value=H.state.directionalShadowMatrix,St.spotShadowMap.value=H.state.spotShadowMap,St.spotLightMatrix.value=H.state.spotLightMatrix,St.spotLightMap.value=H.state.spotLightMap,St.pointShadowMap.value=H.state.pointShadowMap,St.pointShadowMatrix.value=H.state.pointShadowMatrix),Z.currentProgram=Bt,Z.uniformsList=null,Bt}function wc(y){if(y.uniformsList===null){let k=y.currentProgram.getUniforms();y.uniformsList=Vi.seqWithValue(k.seq,y.uniforms)}return y.uniformsList}function Tc(y,k){let Y=Rt.get(y);Y.outputColorSpace=k.outputColorSpace,Y.batching=k.batching,Y.batchingColor=k.batchingColor,Y.instancing=k.instancing,Y.instancingColor=k.instancingColor,Y.instancingMorph=k.instancingMorph,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function Lh(y,k,Y,Z,H){k.isScene!==!0&&(k=Qt),A.resetTextureUnits();let lt=k.fog,pt=Z.isMeshStandardMaterial?k.environment:null,yt=V===null?M.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:ji,Mt=(Z.isMeshStandardMaterial?G:v).get(Z.envMap||pt),Nt=Z.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Bt=!!Y.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),St=!!Y.morphAttributes.position,Jt=!!Y.morphAttributes.normal,ae=!!Y.morphAttributes.color,ce=Yn;Z.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(ce=M.toneMapping);let Ne=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,$t=Ne!==void 0?Ne.length:0,wt=Rt.get(Z),xn=u.state.lights;if(J===!0&&(rt===!0||y!==S)){let Xe=y===S&&Z.id===b;at.setState(Z,y,Xe)}let Kt=!1;Z.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==xn.state.version||wt.outputColorSpace!==yt||H.isBatchedMesh&&wt.batching===!1||!H.isBatchedMesh&&wt.batching===!0||H.isBatchedMesh&&wt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&wt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&wt.instancing===!1||!H.isInstancedMesh&&wt.instancing===!0||H.isSkinnedMesh&&wt.skinning===!1||!H.isSkinnedMesh&&wt.skinning===!0||H.isInstancedMesh&&wt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&wt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&wt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&wt.instancingMorph===!1&&H.morphTexture!==null||wt.envMap!==Mt||Z.fog===!0&&wt.fog!==lt||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==at.numPlanes||wt.numIntersection!==at.numIntersection)||wt.vertexAlphas!==Nt||wt.vertexTangents!==Bt||wt.morphTargets!==St||wt.morphNormals!==Jt||wt.morphColors!==ae||wt.toneMapping!==ce||wt.morphTargetsCount!==$t)&&(Kt=!0):(Kt=!0,wt.__version=Z.version);let je=wt.currentProgram;Kt===!0&&(je=Gs(Z,k,H));let yi=!1,He=!1,cs=!1,le=je.getUniforms(),cn=wt.uniforms;if(It.useProgram(je.program)&&(yi=!0,He=!0,cs=!0),Z.id!==b&&(b=Z.id,He=!0),yi||S!==y){It.buffers.depth.getReversed()?(it.copy(y.projectionMatrix),bu(it),Eu(it),le.setValue(B,"projectionMatrix",it)):le.setValue(B,"projectionMatrix",y.projectionMatrix),le.setValue(B,"viewMatrix",y.matrixWorldInverse);let Nn=le.map.cameraPosition;Nn!==void 0&&Nn.setValue(B,bt.setFromMatrixPosition(y.matrixWorld)),Ct.logarithmicDepthBuffer&&le.setValue(B,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&le.setValue(B,"isOrthographic",y.isOrthographicCamera===!0),S!==y&&(S=y,He=!0,cs=!0)}if(H.isSkinnedMesh){le.setOptional(B,H,"bindMatrix"),le.setOptional(B,H,"bindMatrixInverse");let Xe=H.skeleton;Xe&&(Xe.boneTexture===null&&Xe.computeBoneTexture(),le.setValue(B,"boneTexture",Xe.boneTexture,A))}H.isBatchedMesh&&(le.setOptional(B,H,"batchingTexture"),le.setValue(B,"batchingTexture",H._matricesTexture,A),le.setOptional(B,H,"batchingIdTexture"),le.setValue(B,"batchingIdTexture",H._indirectTexture,A),le.setOptional(B,H,"batchingColorTexture"),H._colorsTexture!==null&&le.setValue(B,"batchingColorTexture",H._colorsTexture,A));let ls=Y.morphAttributes;if((ls.position!==void 0||ls.normal!==void 0||ls.color!==void 0)&&Ut.update(H,Y,je),(He||wt.receiveShadow!==H.receiveShadow)&&(wt.receiveShadow=H.receiveShadow,le.setValue(B,"receiveShadow",H.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(cn.envMap.value=Mt,cn.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&k.environment!==null&&(cn.envMapIntensity.value=k.environmentIntensity),He&&(le.setValue(B,"toneMappingExposure",M.toneMappingExposure),wt.needsLights&&Dh(cn,cs),lt&&Z.fog===!0&&dt.refreshFogUniforms(cn,lt),dt.refreshMaterialUniforms(cn,Z,I,O,u.state.transmissionRenderTarget[y.id]),Vi.upload(B,wc(wt),cn,A)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Vi.upload(B,wc(wt),cn,A),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&le.setValue(B,"center",H.center),le.setValue(B,"modelViewMatrix",H.modelViewMatrix),le.setValue(B,"normalMatrix",H.normalMatrix),le.setValue(B,"modelMatrix",H.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){let Xe=Z.uniformsGroups;for(let Nn=0,Fn=Xe.length;Nn<Fn;Nn++){let Ac=Xe[Nn];F.update(Ac,je),F.bind(Ac,je)}}return je}function Dh(y,k){y.ambientLightColor.needsUpdate=k,y.lightProbe.needsUpdate=k,y.directionalLights.needsUpdate=k,y.directionalLightShadows.needsUpdate=k,y.pointLights.needsUpdate=k,y.pointLightShadows.needsUpdate=k,y.spotLights.needsUpdate=k,y.spotLightShadows.needsUpdate=k,y.rectAreaLights.needsUpdate=k,y.hemisphereLights.needsUpdate=k}function Uh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(y,k,Y){Rt.get(y.texture).__webglTexture=k,Rt.get(y.depthTexture).__webglTexture=Y;let Z=Rt.get(y);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=Y===void 0,Z.__autoAllocateDepthBuffer||Lt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,k){let Y=Rt.get(y);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(y,k=0,Y=0){V=y,P=k,L=Y;let Z=!0,H=null,lt=!1,pt=!1;if(y){let Mt=Rt.get(y);if(Mt.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(B.FRAMEBUFFER,null),Z=!1;else if(Mt.__webglFramebuffer===void 0)A.setupRenderTarget(y);else if(Mt.__hasExternalTextures)A.rebindTextures(y,Rt.get(y.texture).__webglTexture,Rt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let St=y.depthTexture;if(Mt.__boundDepthTexture!==St){if(St!==null&&Rt.has(St)&&(y.width!==St.image.width||y.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(y)}}let Nt=y.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(pt=!0);let Bt=Rt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Bt[k])?H=Bt[k][Y]:H=Bt[k],lt=!0):y.samples>0&&A.useMultisampledRTT(y)===!1?H=Rt.get(y).__webglMultisampledFramebuffer:Array.isArray(Bt)?H=Bt[Y]:H=Bt,U.copy(y.viewport),$.copy(y.scissor),X=y.scissorTest}else U.copy(q).multiplyScalar(I).floor(),$.copy(j).multiplyScalar(I).floor(),X=ot;if(It.bindFramebuffer(B.FRAMEBUFFER,H)&&Z&&It.drawBuffers(y,H),It.viewport(U),It.scissor($),It.setScissorTest(X),lt){let Mt=Rt.get(y.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+k,Mt.__webglTexture,Y)}else if(pt){let Mt=Rt.get(y.texture),Nt=k||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Mt.__webglTexture,Y||0,Nt)}b=-1},this.readRenderTargetPixels=function(y,k,Y,Z,H,lt,pt){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=Rt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&pt!==void 0&&(yt=yt[pt]),yt){It.bindFramebuffer(B.FRAMEBUFFER,yt);try{let Mt=y.texture,Nt=Mt.format,Bt=Mt.type;if(!Ct.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ct.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=y.width-Z&&Y>=0&&Y<=y.height-H&&B.readPixels(k,Y,Z,H,Vt.convert(Nt),Vt.convert(Bt),lt)}finally{let Mt=V!==null?Rt.get(V).__webglFramebuffer:null;It.bindFramebuffer(B.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(y,k,Y,Z,H,lt,pt){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=Rt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&pt!==void 0&&(yt=yt[pt]),yt){let Mt=y.texture,Nt=Mt.format,Bt=Mt.type;if(!Ct.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ct.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=y.width-Z&&Y>=0&&Y<=y.height-H){It.bindFramebuffer(B.FRAMEBUFFER,yt);let St=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,St),B.bufferData(B.PIXEL_PACK_BUFFER,lt.byteLength,B.STREAM_READ),B.readPixels(k,Y,Z,H,Vt.convert(Nt),Vt.convert(Bt),0);let Jt=V!==null?Rt.get(V).__webglFramebuffer:null;It.bindFramebuffer(B.FRAMEBUFFER,Jt);let ae=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Su(B,ae,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,St),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,lt),B.deleteBuffer(St),B.deleteSync(ae),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,k=null,Y=0){y.isTexture!==!0&&(xs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,y=arguments[1]);let Z=Math.pow(2,-Y),H=Math.floor(y.image.width*Z),lt=Math.floor(y.image.height*Z),pt=k!==null?k.x:0,yt=k!==null?k.y:0;A.setTexture2D(y,0),B.copyTexSubImage2D(B.TEXTURE_2D,Y,0,0,pt,yt,H,lt),It.unbindTexture()},this.copyTextureToTexture=function(y,k,Y=null,Z=null,H=0){y.isTexture!==!0&&(xs("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,y=arguments[1],k=arguments[2],H=arguments[3]||0,Y=null);let lt,pt,yt,Mt,Nt,Bt,St,Jt,ae,ce=y.isCompressedTexture?y.mipmaps[H]:y.image;Y!==null?(lt=Y.max.x-Y.min.x,pt=Y.max.y-Y.min.y,yt=Y.isBox3?Y.max.z-Y.min.z:1,Mt=Y.min.x,Nt=Y.min.y,Bt=Y.isBox3?Y.min.z:0):(lt=ce.width,pt=ce.height,yt=ce.depth||1,Mt=0,Nt=0,Bt=0),Z!==null?(St=Z.x,Jt=Z.y,ae=Z.z):(St=0,Jt=0,ae=0);let Ne=Vt.convert(k.format),$t=Vt.convert(k.type),wt;k.isData3DTexture?(A.setTexture3D(k,0),wt=B.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(A.setTexture2DArray(k,0),wt=B.TEXTURE_2D_ARRAY):(A.setTexture2D(k,0),wt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,k.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,k.unpackAlignment);let xn=B.getParameter(B.UNPACK_ROW_LENGTH),Kt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),je=B.getParameter(B.UNPACK_SKIP_PIXELS),yi=B.getParameter(B.UNPACK_SKIP_ROWS),He=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,ce.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ce.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Mt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Nt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Bt);let cs=y.isDataArrayTexture||y.isData3DTexture,le=k.isDataArrayTexture||k.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){let cn=Rt.get(y),ls=Rt.get(k),Xe=Rt.get(cn.__renderTarget),Nn=Rt.get(ls.__renderTarget);It.bindFramebuffer(B.READ_FRAMEBUFFER,Xe.__webglFramebuffer),It.bindFramebuffer(B.DRAW_FRAMEBUFFER,Nn.__webglFramebuffer);for(let Fn=0;Fn<yt;Fn++)cs&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Rt.get(y).__webglTexture,H,Bt+Fn),y.isDepthTexture?(le&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Rt.get(k).__webglTexture,H,ae+Fn),B.blitFramebuffer(Mt,Nt,lt,pt,St,Jt,lt,pt,B.DEPTH_BUFFER_BIT,B.NEAREST)):le?B.copyTexSubImage3D(wt,H,St,Jt,ae+Fn,Mt,Nt,lt,pt):B.copyTexSubImage2D(wt,H,St,Jt,ae+Fn,Mt,Nt,lt,pt);It.bindFramebuffer(B.READ_FRAMEBUFFER,null),It.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else le?y.isDataTexture||y.isData3DTexture?B.texSubImage3D(wt,H,St,Jt,ae,lt,pt,yt,Ne,$t,ce.data):k.isCompressedArrayTexture?B.compressedTexSubImage3D(wt,H,St,Jt,ae,lt,pt,yt,Ne,ce.data):B.texSubImage3D(wt,H,St,Jt,ae,lt,pt,yt,Ne,$t,ce):y.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,H,St,Jt,lt,pt,Ne,$t,ce.data):y.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,H,St,Jt,ce.width,ce.height,Ne,ce.data):B.texSubImage2D(B.TEXTURE_2D,H,St,Jt,lt,pt,Ne,$t,ce);B.pixelStorei(B.UNPACK_ROW_LENGTH,xn),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Kt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,je),B.pixelStorei(B.UNPACK_SKIP_ROWS,yi),B.pixelStorei(B.UNPACK_SKIP_IMAGES,He),H===0&&k.generateMipmaps&&B.generateMipmap(wt),It.unbindTexture()},this.copyTextureToTexture3D=function(y,k,Y=null,Z=null,H=0){return y.isTexture!==!0&&(xs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,Z=arguments[1]||null,y=arguments[2],k=arguments[3],H=arguments[4]||0),xs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,k,Y,Z,H)},this.initRenderTarget=function(y){Rt.get(y).__webglFramebuffer===void 0&&A.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?A.setTextureCube(y,0):y.isData3DTexture?A.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?A.setTexture2DArray(y,0):A.setTexture2D(y,0),It.unbindTexture()},this.resetState=function(){P=0,L=0,V=null,It.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}};var Dr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ft(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ws=class extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ur=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ma,this.updateRanges=[],this.version=0,this.uuid=Zn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ie=new C,Ts=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=hn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ne(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=hn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=hn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=hn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=hn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),s=ne(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),s=ne(s,this.array),r=ne(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Le(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ln=class extends jn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ni,ps=new C,Fi=new C,Oi=new C,Bi=new kt,ms=new kt,th=new de,ur=new C,gs=new C,dr=new C,Tl=new kt,Do=new kt,Al=new kt,mn=class extends Re{constructor(t=new Ln){if(super(),this.isSprite=!0,this.type="Sprite",Ni===void 0){Ni=new De;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ur(e,5);Ni.setIndex([0,1,2,0,2,3]),Ni.setAttribute("position",new Ts(n,3,0,!1)),Ni.setAttribute("uv",new Ts(n,2,3,!1))}this.geometry=Ni,this.material=t,this.center=new kt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fi.setFromMatrixScale(this.matrixWorld),th.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Oi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fi.multiplyScalar(-Oi.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;fr(ur.set(-.5,-.5,0),Oi,a,Fi,s,r),fr(gs.set(.5,-.5,0),Oi,a,Fi,s,r),fr(dr.set(.5,.5,0),Oi,a,Fi,s,r),Tl.set(0,0),Do.set(1,0),Al.set(1,1);let o=t.ray.intersectTriangle(ur,gs,dr,!1,ps);if(o===null&&(fr(gs.set(-.5,.5,0),Oi,a,Fi,s,r),Do.set(0,1),o=t.ray.intersectTriangle(ur,dr,gs,!1,ps),o===null))return;let c=t.ray.origin.distanceTo(ps);c<t.near||c>t.far||e.push({distance:c,point:ps.clone(),uv:Wn.getInterpolation(ps,ur,gs,dr,Tl,Do,Al,new kt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function fr(i,t,e,n,s,r){Bi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ms.x=r*Bi.x-s*Bi.y,ms.y=s*Bi.x+r*Bi.y):ms.copy(Bi),i.copy(t),i.x+=ms.x,i.y+=ms.y,i.applyMatrix4(th)}var Qn=class extends We{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Nr=class i extends De{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new C,h=new kt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){let m=n+f/e*s;l.x=t*Math.cos(m),l.y=t*Math.sin(m),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,c.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new re(a,3)),this.setAttribute("normal",new re(o,3)),this.setAttribute("uv",new re(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},rn=class i extends De{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],d=[],m=[],g=0,x=[],p=n/2,u=0;T(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new re(f,3)),this.setAttribute("normal",new re(d,3)),this.setAttribute("uv",new re(m,2));function T(){let M=new C,N=new C,P=0,L=(e-t)/n;for(let V=0;V<=r;V++){let b=[],S=V/r,U=S*(e-t)+t;for(let $=0;$<=s;$++){let X=$/s,_=X*c+o,R=Math.sin(_),E=Math.cos(_);N.x=U*R,N.y=-S*n+p,N.z=U*E,f.push(N.x,N.y,N.z),M.set(R,L,E).normalize(),d.push(M.x,M.y,M.z),m.push(X,1-S),b.push(g++)}x.push(b)}for(let V=0;V<s;V++)for(let b=0;b<r;b++){let S=x[b][V],U=x[b+1][V],$=x[b+1][V+1],X=x[b][V+1];(t>0||b!==0)&&(h.push(S,U,X),P+=3),(e>0||b!==r-1)&&(h.push(U,$,X),P+=3)}l.addGroup(u,P,0),u+=P}function w(M){let N=g,P=new kt,L=new C,V=0,b=M===!0?t:e,S=M===!0?1:-1;for(let $=1;$<=s;$++)f.push(0,p*S,0),d.push(0,S,0),m.push(.5,.5),g++;let U=g;for(let $=0;$<=s;$++){let _=$/s*c+o,R=Math.cos(_),E=Math.sin(_);L.x=b*E,L.y=p*S,L.z=b*R,f.push(L.x,L.y,L.z),d.push(0,S,0),P.x=R*.5+.5,P.y=E*.5*S+.5,m.push(P.x,P.y),g++}for(let $=0;$<s;$++){let X=N+$,_=U+$;M===!0?h.push(_,_+1,X):h.push(_+1,_,X),V+=3}l.addGroup(u,V,M===!0?1:2),u+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Fr=class i extends rn{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Or=class i extends De{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],h=[],f=t,d=(e-t)/s,m=new C,g=new kt;for(let x=0;x<=s;x++){for(let p=0;p<=n;p++){let u=r+p/n*a;m.x=f*Math.cos(u),m.y=f*Math.sin(u),c.push(m.x,m.y,m.z),l.push(0,0,1),g.x=(m.x/e+1)/2,g.y=(m.y/e+1)/2,h.push(g.x,g.y)}f+=d}for(let x=0;x<s;x++){let p=x*(n+1);for(let u=0;u<n;u++){let T=u+p,w=T,M=T+n+1,N=T+n+2,P=T+1;o.push(w,M,P),o.push(M,N,P)}}this.setIndex(o),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(l,3)),this.setAttribute("uv",new re(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Br=class i extends De{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],f=new C,d=new C,m=[],g=[],x=[],p=[];for(let u=0;u<=n;u++){let T=[],w=u/n,M=0;u===0&&a===0?M=.5/e:u===n&&c===Math.PI&&(M=-.5/e);for(let N=0;N<=e;N++){let P=N/e;f.x=-t*Math.cos(s+P*r)*Math.sin(a+w*o),f.y=t*Math.cos(a+w*o),f.z=t*Math.sin(s+P*r)*Math.sin(a+w*o),g.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),p.push(P+M,1-w),T.push(l++)}h.push(T)}for(let u=0;u<n;u++)for(let T=0;T<e;T++){let w=h[u][T+1],M=h[u][T],N=h[u+1][T],P=h[u+1][T+1];(u!==0||a>0)&&m.push(w,M,P),(u!==n-1||c<Math.PI)&&m.push(M,N,P)}this.setIndex(m),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(x,3)),this.setAttribute("uv",new re(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ji=class i extends De{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],h=new C,f=new C,d=new C;for(let m=0;m<=n;m++)for(let g=0;g<=s;g++){let x=g/s*r,p=m/n*Math.PI*2;f.x=(t+e*Math.cos(p))*Math.cos(x),f.y=(t+e*Math.cos(p))*Math.sin(x),f.z=e*Math.sin(p),o.push(f.x,f.y,f.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(f,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=s;g++){let x=(s+1)*m+g-1,p=(s+1)*(m-1)+g-1,u=(s+1)*(m-1)+g,T=(s+1)*m+g;a.push(x,p,T),a.push(p,u,T)}this.setIndex(a),this.setAttribute("position",new re(o,3)),this.setAttribute("normal",new re(c,3)),this.setAttribute("uv",new re(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Se=class extends jn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wl,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function pr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function v0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var $i=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ka=class extends $i{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pc,endingEnd:Pc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Lc:r=t,o=2*e-n;break;case Dc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Lc:a=t,c=2*n-e;break;case Dc:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(n-e)/(s-e),x=g*g,p=x*g,u=-d*p+2*d*x-d*g,T=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*g+1,w=(-1-m)*p+(1.5+m)*x+.5*g,M=m*p-m*x;for(let N=0;N!==o;++N)r[N]=u*a[h+N]+T*a[l+N]+w*a[c+N]+M*a[f+N];return r}},Ha=class extends $i{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),f=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*f+a[c+d]*h;return r}},Va=class extends $i{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},on=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=pr(e,this.TimeBufferType),this.values=pr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:pr(t.times,Array),values:pr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Va(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ha(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ka(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case yr:e=this.InterpolantFactoryMethodDiscrete;break;case ya:e=this.InterpolantFactoryMethodLinear;break;case io:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yr;case this.InterpolantFactoryMethodLinear:return ya;case this.InterpolantFactoryMethodSmooth:return io}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&v0(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===io,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let f=o*n,d=f-n,m=f+n;for(let g=0;g!==n;++g){let x=e[f+g];if(x!==e[d+g]||x!==e[m+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let f=o*n,d=a*n;for(let m=0;m!==n;++m)e[d+m]=e[f+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};on.prototype.TimeBufferType=Float32Array;on.prototype.ValueBufferType=Float32Array;on.prototype.DefaultInterpolation=ya;var xi=class extends on{constructor(t,e,n){super(t,e,n)}};xi.prototype.ValueTypeName="bool";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=yr;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ga=class extends on{};Ga.prototype.ValueTypeName="color";var Wa=class extends on{};Wa.prototype.ValueTypeName="number";var Xa=class extends $i{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)Kn.slerpFlat(r,0,a,l-o,a,l,c);return r}},zr=class extends on{InterpolantFactoryMethodLinear(t){return new Xa(this.times,this.values,this.getValueSize(),t)}};zr.prototype.ValueTypeName="quaternion";zr.prototype.InterpolantFactoryMethodSmooth=void 0;var vi=class extends on{constructor(t,e,n){super(t,e,n)}};vi.prototype.ValueTypeName="string";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=yr;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var qa=class extends on{};qa.prototype.ValueTypeName="vector";var Ya=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=l.length;f<d;f+=2){let m=l[f],g=l[f+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},y0=new Ya,Za=class{constructor(t){this.manager=t!==void 0?t:y0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Za.DEFAULT_MATERIAL_NAME="__DEFAULT";var As=class extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Rs=class extends As{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Uo=new de,Rl=new C,Cl=new C,kr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bs,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Rl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Rl),Cl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Cl),e.updateMatrixWorld(),Uo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Uo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Il=new de,_s=new C,No=new C,Ja=class extends kr{constructor(){super(new Me(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new kt(4,2),this._viewportCount=6,this._viewports=[new ie(2,1,1,1),new ie(0,1,1,1),new ie(3,1,1,1),new ie(1,1,1,1),new ie(3,0,1,1),new ie(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),_s.setFromMatrixPosition(t.matrixWorld),n.position.copy(_s),No.copy(n.position),No.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(No),n.updateMatrixWorld(),s.makeTranslation(-_s.x,-_s.y,-_s.z),Il.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Il)}},Ki=class extends As{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ja}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},$a=class extends kr{constructor(){super(new Ir(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Cs=class extends As{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new $a}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ac="\\[\\]\\.:\\/",M0=new RegExp("["+ac+"]","g"),cc="[^"+ac+"]",S0="[^"+ac.replace("\\.","")+"]",b0=/((?:WC+[\/:])*)/.source.replace("WC",cc),E0=/(WCOD+)?/.source.replace("WCOD",S0),w0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cc),T0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cc),A0=new RegExp("^"+b0+E0+w0+T0+"$"),R0=["material","materials","bones","map"],Ka=class{constructor(t,e,n){let s=n||ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ue=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(M0,"")}static parseTrackName(t){let e=A0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);R0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ue.Composite=Ka;ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ue.prototype.GetterByBindingType=[ue.prototype._getValue_direct,ue.prototype._getValue_array,ue.prototype._getValue_arrayElement,ue.prototype._getValue_toArray];ue.prototype.SetterByBindingTypeAndVersioning=[[ue.prototype._setValue_direct,ue.prototype._setValue_direct_setNeedsUpdate,ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_array,ue.prototype._setValue_array_setNeedsUpdate,ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_arrayElement,ue.prototype._setValue_arrayElement_setNeedsUpdate,ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_fromArray,ue.prototype._setValue_fromArray_setNeedsUpdate,ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var xg=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ja}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ja);function nh(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new De,l=0;for(let h=0;h<i.length;++h){let f=i[h],d=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in f.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(f.attributes[m]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in f.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[m]===void 0&&(a[m]=[]),a[m].push(f.morphAttributes[m])}if(t){let m;if(e)m=f.index.count;else if(f.attributes.position!==void 0)m=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,m,h),l+=m}}if(e){let h=0,f=[];for(let d=0;d<i.length;++d){let m=i[d].index;for(let g=0;g<m.count;++g)f.push(m.getX(g)+h);h+=i[d].attributes.position.count}c.setIndex(f)}for(let h in r){let f=eh(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,f)}for(let h in a){let f=a[h][0].length;if(f===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<f;++d){let m=[];for(let x=0;x<a[h].length;++x)m.push(a[h][x][d]);let g=eh(m);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function eh(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new Le(a,e,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let f=c/e;for(let d=0,m=h.count;d<m;d++)for(let g=0;g<e;g++){let x=h.getComponent(d,g);o.setComponent(d+f,g,x)}}else a.set(h.array,c);c+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var Ps=new C;function Ye(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Ps.copy(t),Ps[n]=0,Ps.normalize();let l=.5*a/(a+o),h=1-Ps.angleTo(i)/c;return Math.sign(Ps[e])===1?h*l:o/(a+o)+l+l*(1-h)}var Xr=class extends ge{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new C,c=new C,l=new C(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,m=h.length/6,g=new C,x=.5/s;for(let p=0,u=0;p<h.length;p+=3,u+=2)switch(o.fromArray(h,p),c.copy(o),c.x-=Math.sign(c.x)*x,c.y-=Math.sign(c.y)*x,c.z-=Math.sign(c.z)*x,c.normalize(),h[p+0]=l.x*Math.sign(o.x)+c.x*r,h[p+1]=l.y*Math.sign(o.y)+c.y*r,h[p+2]=l.z*Math.sign(o.z)+c.z*r,f[p+0]=c.x,f[p+1]=c.y,f[p+2]=c.z,Math.floor(p/m)){case 0:g.set(1,0,0),d[u+0]=Ye(g,c,"z","y",r,n),d[u+1]=1-Ye(g,c,"y","z",r,e);break;case 1:g.set(-1,0,0),d[u+0]=1-Ye(g,c,"z","y",r,n),d[u+1]=1-Ye(g,c,"y","z",r,e);break;case 2:g.set(0,1,0),d[u+0]=1-Ye(g,c,"x","z",r,t),d[u+1]=Ye(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),d[u+0]=1-Ye(g,c,"x","z",r,t),d[u+1]=1-Ye(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),d[u+0]=1-Ye(g,c,"x","y",r,t),d[u+1]=1-Ye(g,c,"y","x",r,e);break;case 5:g.set(0,0,-1),d[u+0]=Ye(g,c,"x","y",r,t),d[u+1]=1-Ye(g,c,"y","x",r,e);break}}};var lc=new Map;function C0(i,t,e){let n=[i,t,e].map(s=>s.toFixed(3)).join("x");return lc.has(n)||lc.set(n,new Xr(i,t,e,2,Math.min(i,t,e)*.14)),lc.get(n)}var hc=new Map;function ih(i){return hc.has(i)||hc.set(i,new Se({color:i,roughness:.55,metalness:0})),hc.get(i)}function Tt(i,t,e,n,s,r,a,o,c=!1){let l=new Pt(C0(t,e,n),ih(s));if(l.castShadow=!0,!c)return l.position.set(r,a,o),i.add(l),l;let h=new qt;return h.position.set(r,a,o),l.position.y=-e/2,h.add(l),i.add(h),h}var ti=(i,t,e,n,s,r,a)=>{let o=new Pt(new ge(t,e,.02),ih(n));return o.position.set(s,r,a),i.add(o),o};function sh(i){let t=0;return(e,n)=>{let s=e.speed;(e.mode==="walk"||e.mode==="run")&&(t+=n*(4+s*2.2));let r=e.mode==="run"?.9:e.mode==="walk"?.55:0,a=Math.sin(t)*r;if(e.mode==="jump"||e.mode==="fall"){let c=e.mode==="jump"?1:-.4;i.fl.rotation.x=-.9*c,i.fr.rotation.x=-.9*c,i.bl.rotation.x=.8*c,i.br.rotation.x=.8*c,i.body.rotation.x=-.18*c}else i.fl.rotation.x=a,i.br.rotation.x=a,i.fr.rotation.x=-a,i.bl.rotation.x=-a,i.body.rotation.x=0;let o=e.mode==="run"?Math.abs(Math.sin(t))*.05:e.mode==="idle"?Math.sin(e.t*2.2)*.012:0;if(i.body.position.y=i.bodyY+o,i.tail.rotation.z=Math.sin(e.t*(e.mode==="cheer"?22:9))*(e.mode==="idle"||e.mode==="cheer"?.5:.25),i.head.rotation.x=e.mode==="idle"?Math.sin(e.t*1.3)*.05:e.mode==="cheer"?-.25:0,i.ears)for(let[c,l]of i.ears)c.rotation.z=l*(.12+(e.mode==="run"?Math.abs(Math.sin(t))*.35:e.mode==="fall"?.9:e.mode==="jump"?.5:0))}}function I0(){let i=new qt,t="#e0a15e",e="#c98443",n="#f6dfba",s="#2b1d16",r="#ff7a1a",a="#1d1d1f",o=new qt,c=.44;o.position.y=c,i.add(o),Tt(o,.5,.42,.78,t,0,0,-.02),Tt(o,.54,.46,.2,r,0,0,.2),Tt(o,.56,.08,.22,a,0,.2,.2);let l=new qt;l.position.set(0,.24,.42),o.add(l),Tt(l,.5,.46,.44,t,0,.08,.05),Tt(l,.42,.18,.06,n,0,.13,.28),Tt(l,.3,.2,.22,n,0,-.04,.33),Tt(l,.12,.08,.06,s,0,.03,.45),Tt(l,.22,.06,.08,n,0,-.16,.38),ti(l,.075,.09,s,-.12,.16,.315),ti(l,.075,.09,s,.12,.16,.315),Tt(l,.42,.14,.34,n,0,.34,.02),Tt(l,.2,.1,.18,n,.1,.42,-.02),Tt(l,.16,.08,.14,"#ead0a6",-.11,.41,.06);let h=[];for(let w of[-1,1]){let M=Tt(l,.1,.36,.24,e,w*.28,.24,.02,!0);h.push([M,-w])}let f=(w,M)=>{let N=Tt(o,.15,.3,.15,t,w,-.12,M,!0);return Tt(N,.16,.08,.17,n,0,-.27,.01),N},d=f(-.15,.25),m=f(.15,.25),g=f(-.15,-.28),x=f(.15,-.28),p=new qt;p.position.set(0,.14,-.4),o.add(p);let u=Tt(p,.1,.3,.1,n,0,.12,-.05);return u.rotation.x=-.5,{root:i,animate:sh({body:o,bodyY:c,head:l,fl:d,fr:m,bl:g,br:x,tail:p,ears:h}),height:.98}}function P0(){let i=new qt,t="#f0902f",e="#cf6e1a",n="#fbe3c4",s="#2b1d16",r="#f2a3a3",a=new qt,o=.38;a.position.y=o,i.add(a),Tt(a,.4,.36,.74,t,0,0,0);for(let u of[-.2,0,.2])Tt(a,.42,.05,.08,e,0,.17,u);Tt(a,.3,.06,.4,n,0,-.17,.12);let c=new qt;c.position.set(0,.2,.4),a.add(c),Tt(c,.44,.38,.38,t,0,.06,.04),Tt(c,.24,.14,.1,n,0,-.04,.24),Tt(c,.07,.05,.04,r,0,.02,.29),ti(c,.07,.1,s,-.11,.1,.235),ti(c,.07,.1,s,.11,.1,.235);for(let u of[-1,1]){let T=Tt(c,.12,.14,.08,t,u*.14,.3,.02);T.rotation.z=-u*.25,Tt(c,.06,.08,.02,r,u*.14,.29,.065)}for(let u of[-1,1])for(let T of[-.02,.04]){let w=Tt(c,.16,.015,.015,n,u*.26,T,.18);w.rotation.z=u*(T>0?-.15:.15)}let l=(u,T)=>{let w=Tt(a,.13,.28,.13,t,u,-.1,T,!0);return Tt(w,.14,.07,.15,n,0,-.25,.01),w},h=l(-.12,.24),f=l(.12,.24),d=l(-.12,-.26),m=l(.12,-.26),g=new qt;g.position.set(0,.12,-.36),a.add(g);let x=Tt(g,.09,.42,.09,t,0,.2,-.04);return x.rotation.x=-.25,Tt(g,.1,.1,.1,e,0,.42,-.1),{root:i,animate:sh({body:a,bodyY:o,head:c,fl:h,fr:f,bl:d,br:m,tail:g}),height:.9}}function L0(){let i=new qt,t="#f0c08e",e="#f47a1c",n="#d9620e",s="#3a2a22",r="#2b1d16",a="#f1f1f1",o="#ffffff",c=new qt;c.position.y=.56,i.add(c);let l=Tt(c,.5,.52,.26,e,0,.27,0);Tt(c,.2,.12,.02,o,0,.38,-.135),Tt(c,.12,.08,.02,o,-.12,.4,.135),Tt(c,.52,.06,.28,n,0,.03,0);let h=new qt;h.position.set(0,.73,0),c.add(h),Tt(h,.36,.34,.34,t,0,0,0),Tt(h,.38,.1,.36,s,0,.16,0),ti(h,.05,.08,r,-.08,.02,.172),ti(h,.05,.08,r,.08,.02,.172),ti(h,.12,.03,"#c0563f",0,-.08,.172);let f=u=>{let T=Tt(c,.2,.36,.22,e,u,.52,0,!0);return Tt(T,.19,.16,.21,t,0,-.42,0),T},d=f(-.36),m=f(.36),g=u=>{let T=Tt(c,.24,.52,.24,e,u,.02,0,!0);return Tt(T,.25,.1,.3,a,0,-.48,.03),T},x=g(-.13),p=g(.13);return{root:i,animate:rh({hip:c,hipY:.56,head:h,torso:l,la:d,ra:m,ll:x,rl:p}),height:1.3}}function rh(i,t=1){let e=0;return(n,s)=>{let{hip:r,head:a,torso:o,la:c,ra:l,ll:h,rl:f}=i;(n.mode==="walk"||n.mode==="run")&&(e+=s*(3.5+n.speed*1.6)*t);let d=n.mode==="run"?1:n.mode==="walk"?.6:0,m=Math.sin(e)*d;c.rotation.set(m,0,0),l.rotation.set(-m,0,0),h.rotation.set(-m,0,0),f.rotation.set(m,0,0),r.position.y=i.hipY+(n.mode==="run"?Math.abs(Math.sin(e))*.05:0),a.rotation.set(0,0,0),n.mode==="jump"&&(c.rotation.set(-2.6,0,-.2),l.rotation.set(-2.6,0,.2),h.rotation.x=-.6,f.rotation.x=.3),n.mode==="fall"&&(c.rotation.set(-2.2+Math.sin(n.t*18)*.4,0,-.5),l.rotation.set(-2.2-Math.sin(n.t*18)*.4,0,.5),h.rotation.x=.3,f.rotation.x=-.3),n.mode==="idle"&&(c.rotation.z=-.05,l.rotation.z=.05,a.rotation.y=Math.sin(n.t*.7)*.15),n.mode==="cheer"&&(c.rotation.set(-2.9,0,-.3+Math.sin(n.t*14)*.25),l.rotation.set(-2.9,0,.3-Math.sin(n.t*14)*.25)),i.chaser&&n.mode==="run"&&(c.rotation.set(-1.5+m*.2,0,.15),l.rotation.set(-1.9-m*.3,0,-.15)),o.rotation.x=n.mode==="run"?.08:0}}function oh(){let i=new qt,t="#35573f",e="#27402e",n="#e3ad80",s="#1d1d1f",r="#f2c230",a=new qt;a.position.y=1,i.add(a);let o=Tt(a,1.2,1,.8,t,0,.52,0);Tt(a,1.24,.14,.84,s,0,.1,0),Tt(a,.2,.16,.06,r,0,.1,.42),Tt(a,.16,.18,.04,r,-.34,.8,.41),Tt(a,.5,.1,.5,e,0,1.03,0);let c=new qt;c.position.set(0,1.38,0),a.add(c),Tt(c,.62,.56,.58,n,0,0,0),Tt(c,.56,.16,.5,n,0,-.3,.05),Tt(c,.68,.2,.64,e,0,.34,0),Tt(c,.62,.06,.3,s,0,.25,.4),Tt(c,.14,.12,.04,r,0,.36,.33),Tt(c,.58,.15,.06,s,0,.06,.29),ti(c,.3,.05,"#6b2f25",0,-.2,.302);let l=x=>{let p=Tt(a,.34,.6,.36,t,x,1,0,!0);return Tt(p,.3,.42,.32,n,0,-.75,0),p},h=l(-.78),f=l(.78);Tt(f,.1,.1,.8,s,0,-.98,.32);let d=x=>{let p=Tt(a,.46,.84,.5,e,x,.02,0,!0);return Tt(p,.48,.16,.62,s,0,-.92,.05),p},m=d(-.3),g=d(.3);return{root:i,animate:rh({hip:a,hipY:1,head:c,torso:o,la:h,ra:f,ll:m,rl:g,chaser:!0},.7),height:2.75}}var qr={dog:I0,cat:P0,kid:L0};var D0=2.4,U0=4.6,N0=7.5,F0=11,O0=.95;function B0(){let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d");t.fillStyle="#e5352b",t.beginPath(),t.arc(32,32,28,0,Math.PI*2),t.fill(),t.fillStyle="#fff",t.fillRect(27,12,10,26),t.fillRect(27,44,10,9);let e=new Qn(i);e.colorSpace=pe;let n=new mn(new Ln({map:e,transparent:!0,depthWrite:!1}));return n.scale.set(.7,.7,1),n}function uc(i,t){let e=oh();i.add(e.root);let n=B0();n.position.y=3.1,n.visible=!1,e.root.add(n);let s=t.zone,r=t.y||0,a=[t.a,t.b],o={root:e.root,pos:new C,vx:0,vz:0,facing:0,mode:"patrol",target:1,wait:0,lost:0,alerted:!1},c={mode:"walk",speed:0,t:0},l=(f,d)=>f.x>s.x0-d&&f.x<s.x1+d&&f.z>s.z0-d&&f.z<s.z1+d&&Math.abs(f.y-r)<1.2;o.reset=()=>{o.pos.set(t.a[0],r,t.a[1]),o.mode="patrol",o.target=1,o.wait=0,o.lost=0,o.vx=o.vz=0,o.facing=Math.atan2(t.b[0]-t.a[0],t.b[1]-t.a[1])},o.reset();function h(f,d,m,g){let x=f-o.pos.x,p=d-o.pos.z,u=Math.hypot(x,p);if(u<.05)return o.vx=o.vz=0,!0;let T=Math.min(m,u/g);o.vx=x/u*T,o.vz=p/u*T,o.pos.x=Math.max(s.x0,Math.min(s.x1,o.pos.x+o.vx*g)),o.pos.z=Math.max(s.z0,Math.min(s.z1,o.pos.z+o.vz*g));let M=Math.atan2(x,p)-o.facing;return M=Math.atan2(Math.sin(M),Math.cos(M)),o.facing+=M*Math.min(1,g*10),!1}return o.step=(f,d,m)=>{let g=d.x-o.pos.x,x=d.z-o.pos.z,p=Math.hypot(g,x),u=m&&l(d,.35),T=(Math.sin(o.facing)*g+Math.cos(o.facing)*x)/Math.max(p,.001),w=u&&(p<N0||p<F0&&T>.3);if(o.mode==="patrol")w?(o.mode="chase",o.lost=0,o.alerted=!0):o.wait>0?(o.wait-=f,o.vx=o.vz=0):h(a[o.target][0],a[o.target][1],D0,f)&&(o.target=1-o.target,o.wait=.8);else if(u&&p<14)o.lost=0,h(d.x,d.z,U0,f);else{if(o.lost+=f,o.vx=o.vz=0,m){let N=Math.atan2(g,x)-o.facing;N=Math.atan2(Math.sin(N),Math.cos(N)),o.facing+=N*Math.min(1,f*6)}o.lost>1.4&&(o.mode="patrol")}return u&&p<O0},o.render=f=>{e.root.position.copy(o.pos),e.root.rotation.y=o.facing;let d=Math.hypot(o.vx,o.vz);c.t+=f,c.speed=d,c.mode=o.mode==="chase"?d>.3?"run":"cheer":d>.3?"walk":"idle",n.visible=o.mode==="chase",n.visible&&(n.position.y=3.1+Math.sin(c.t*10)*.06),e.animate(c,f)},o}function ah(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function Ls(i){let t=document.createElement("canvas");return t.width=t.height=i,[t,t.getContext("2d")]}function ch(i,t,e,n,s,r,a){for(let o=0;o<n;o++){let c=e()*t,l=e()*t,h=.6+e()*1.8;i.fillStyle=e()<.5?s:r,i.globalAlpha=a*(.4+e()*.6),i.fillRect(c,l,h,h)}i.globalAlpha=1}function Yr(i,t,e,n,s,r){for(let a=0;a<n;a++){let o=e()*t,c=e()*t,l=t*(.08+e()*.22),h=i.createRadialGradient(o,c,0,o,c,l);h.addColorStop(0,s.replace("A",String(r*(.4+e()*.6)))),h.addColorStop(1,s.replace("A","0")),i.fillStyle=h,i.fillRect(o-l,c-l,l*2,l*2)}}function es(i,t=!0){let e=new Qn(i);return e.colorSpace=pe,e.anisotropy=4,t&&(e.wrapS=e.wrapT=gi),e}function lh(){let[t,e]=Ls(256),n=ah(7);return e.fillStyle="#a39d95",e.fillRect(0,0,256,256),Yr(e,256,n,14,"rgba(70,60,50,A)",.1),Yr(e,256,n,8,"rgba(255,250,240,A)",.1),ch(e,256,n,2600,"#c4beb6","#6f6a64",.35),e.strokeStyle="rgba(40,36,32,.55)",e.lineWidth=3,e.strokeRect(1.5,1.5,253,253),e.strokeStyle="rgba(255,255,255,.12)",e.lineWidth=1,e.strokeRect(4.5,4.5,247,247),es(t)}function hh(){let[t,e]=Ls(256),n=ah(11);e.fillStyle="#8d8780",e.fillRect(0,0,256,256),Yr(e,256,n,12,"rgba(60,52,44,A)",.14),Yr(e,256,n,6,"rgba(255,248,236,A)",.08),ch(e,256,n,2200,"#aaa49c","#5d5853",.3);for(let s=0;s<4;s++){let r=s*64+.5;e.fillStyle="rgba(30,28,25,.35)",e.fillRect(0,r,256,2),e.fillStyle="rgba(255,255,255,.08)",e.fillRect(0,r+2,256,1)}e.fillStyle="rgba(25,22,20,.55)";for(let[s,r]of[[256*.25,256*.5],[256*.75,256*.5]])e.beginPath(),e.arc(s,r,4,0,Math.PI*2),e.fill();return e.fillStyle="rgba(30,28,25,.35)",e.fillRect(0,0,2,256),es(t)}function ns(){let[t,e]=Ls(128),n=e.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,"rgba(255,255,255,.55)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,128,128),es(t,!1)}function Zr(){let e=document.createElement("canvas");e.width=64,e.height=128;let n=e.getContext("2d"),s=n.createLinearGradient(0,0,64,0);s.addColorStop(0,"rgba(255,255,255,0)"),s.addColorStop(.5,"rgba(255,255,255,1)"),s.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=s,n.fillRect(0,0,64,128),n.globalCompositeOperation="destination-in";let r=n.createLinearGradient(0,0,0,128);return r.addColorStop(0,"rgba(0,0,0,0)"),r.addColorStop(1,"rgba(0,0,0,1)"),n.fillStyle=r,n.fillRect(0,0,64,128),es(e,!1)}function uh(){let[t,e]=Ls(64),n=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);return n.addColorStop(0,"rgba(0,0,0,.55)"),n.addColorStop(.6,"rgba(0,0,0,.25)"),n.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=n,e.fillRect(0,0,64,64),es(t,!1)}function dc(i,t,e,n=2,s=2){let r=new ge(i,t,e),a=r.attributes.uv,o=[[e,t],[e,t],[i,e],[i,e],[i,t],[i,t]];for(let c=0;c<6;c++)for(let l=0;l<4;l++){let h=c*4+l;a.setXY(h,a.getX(h)*o[c][0]/n,a.getY(h)*o[c][1]/s)}return r}function dh(){let[t,e]=Ls(64);e.fillStyle="#6d7277",e.fillRect(0,0,64,64),e.fillStyle="#2a2d30";for(let n=0;n<8;n++)e.fillRect(4,4+n*7.5,56,3.5);return e.strokeStyle="rgba(0,0,0,.4)",e.lineWidth=2,e.strokeRect(1,1,62,62),es(t)}var ei=new Ft("#ffc93c");function ph(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function Jr(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}function $r(i,t=!0){let e=new Qn(i);return e.colorSpace=pe,e.anisotropy=4,t&&(e.wrapS=e.wrapT=gi),e}function fh(i){let[t,e]=Jr(256,256),n=ph(17);e.fillStyle=i,e.fillRect(0,0,256,256);for(let s=0;s<10;s++)for(let r=-1;r<6;r++){let a=r*51.2+(s%2?25.6:0),o=s*25.6;e.fillStyle=`rgba(0,0,0,${.03+n()*.04})`,e.fillRect(a+2,o+2,47,21.6),e.fillStyle="rgba(0,0,0,.16)",e.fillRect(a,o,51.2,2),e.fillRect(a,o,2,25.6),e.fillStyle="rgba(255,255,255,.10)",e.fillRect(a+2,o+2,47,1.5)}for(let s=0;s<900;s++)e.fillStyle=n()<.5?"rgba(255,255,255,.08)":"rgba(0,0,0,.08)",e.fillRect(n()*256,n()*256,1.5,1.5);return $r(t)}function z0(){let[i,t]=Jr(128,128);t.fillStyle="#e9ecea",t.fillRect(0,0,128,128),t.strokeStyle="rgba(80,90,90,.35)",t.lineWidth=2;for(let e=0;e<=8;e++)t.beginPath(),t.moveTo(e*16,0),t.lineTo(e*16,128),t.stroke(),t.beginPath(),t.moveTo(0,e*16),t.lineTo(128,e*16),t.stroke();return $r(i)}function k0(){let[i,t]=Jr(128,128);t.clearRect(0,0,128,128),t.strokeStyle="rgba(190,196,200,1)",t.lineWidth=2.2;for(let e=-128;e<256;e+=16)t.beginPath(),t.moveTo(e,0),t.lineTo(e+128,128),t.stroke(),t.beginPath(),t.moveTo(e+128,0),t.lineTo(e,128),t.stroke();return $r(i)}function H0(){let[i,t]=Jr(256,256),e=ph(8);t.fillStyle="#6b6a66",t.fillRect(0,0,256,256);for(let n=0;n<5e3;n++)t.fillStyle=e()<.5?"rgba(255,255,255,.10)":"rgba(0,0,0,.14)",t.fillRect(e()*256,e()*256,1.6,1.6);for(let n=0;n<6;n++){t.strokeStyle="rgba(30,30,30,.35)",t.lineWidth=1,t.beginPath();let s=e()*256,r=e()*256;t.moveTo(s,r);for(let a=0;a<6;a++)s+=(e()-.5)*50,r+=(e()-.5)*50,t.lineTo(s,r);t.stroke()}return $r(i)}function mh(i){let t={solids:[],hazards:[],movers:[],traps:[],checkpoints:[],walls:[],buttons:[],doors:[],guards:[],exit:null,killY:-1},e=_=>new Se({roughness:.9,metalness:0,..._}),n={floor:e({map:lh(),color:"#c9c6c0",roughness:.55}),cream:e({map:fh("#d8d0bb")}),green:e({map:fh("#5f7469")}),concrete:e({map:hh(),color:"#b5b0a8"}),tile:e({map:z0(),roughness:.4}),asphalt:e({map:H0()}),steel:e({color:"#5a6066",roughness:.45,metalness:.6}),bars:e({color:"#3b4046",roughness:.4,metalness:.7}),rail:e({color:"#e4b51e",roughness:.5,metalness:.2}),grate:e({map:dh(),roughness:.6,metalness:.4}),bunk:e({color:"#6d747a",roughness:.5,metalness:.5}),mattress:e({color:"#8fa0ae"}),steelWhite:e({color:"#d7dadc",roughness:.3,metalness:.4}),washer:e({color:"#eceeef",roughness:.35}),washerDoor:e({color:"#2d3a44",roughness:.2,metalness:.3}),wood:e({color:"#9b7a4f"}),woodD:e({color:"#6d5132"}),lamp:new Se({color:"#ffffff",emissive:"#fff6e0",emissiveIntensity:1.4}),kill:new Se({color:"#ff7a1a",emissive:"#ff5a10",emissiveIntensity:1.7,roughness:.4}),water:new Se({color:"#2f5a5c",roughness:.15,metalness:.1,transparent:!0,opacity:.88}),puddle:new Se({color:"#3d6f8a",emissive:"#3aa0ff",emissiveIntensity:.35,roughness:.1,transparent:!0,opacity:.9}),fence:new Se({map:k0(),transparent:!0,alphaTest:.4,side:Oe,roughness:.5,metalness:.5}),wire:e({color:"#9aa1a6",roughness:.35,metalness:.8}),gold:new Se({color:"#c99a1a",emissive:ei,emissiveIntensity:.9,roughness:.4}),goldDim:new Se({color:"#8d8a84",emissive:ei,emissiveIntensity:.08,roughness:.6}),stripe:e({color:"#f2c230",roughness:.6}),steam:new Ce({map:ns(),color:"#fff4ea",transparent:!0,opacity:0,depthWrite:!1}),spark:new Ce({map:ns(),color:"#bfe3ff",transparent:!0,opacity:0,depthWrite:!1,blending:dn})};function s(_,R,E,O,I,D,W,q={}){let j=new C(Math.min(_,R),Math.min(E,O),Math.min(I,D)),ot=new C(Math.max(_,R),Math.max(E,O),Math.max(I,D)),z=ot.clone().sub(j),J=j.clone().add(ot).multiplyScalar(.5),rt=null;if(W&&(rt=new Pt(dc(z.x,z.y,z.z,q.tileU||2,q.tileV||2),W),rt.position.copy(J),rt.castShadow=q.cast!==!1,rt.receiveShadow=!0,i.add(rt)),q.collide!==!1){let it={min:j,max:ot,mesh:rt,top:ot.y,seeThrough:!!q.seeThrough,noStep:!!q.noStep};return t.solids.push(it),q.wall!==!1&&!q.seeThrough&&t.walls.push(it),it}return rt}let r=(_,R,E,O,I,D,W,q={})=>s(_,R,E,O,I,D,W,{collide:!1,...q});function a(_,R,E,O,I,D,W,q=[]){let j=_,ot=[...q].sort((z,J)=>z[0]-J[0]);for(let[z,J,rt,it=I]of ot)z>j&&s(j,z,I,D,E,O,W,{tileU:2,noStep:!0}),it>I&&s(z,J,I,it,E,O,W,{noStep:!0}),s(z,J,rt,D,E,O,W,{noStep:!0}),j=J;j<R&&s(j,R,I,D,E,O,W,{noStep:!0})}function o(_,R,E,O,I,D,W,q=[]){let j=_,ot=[...q].sort((z,J)=>J[0]-z[0]);for(let[z,J,rt,it=I]of ot)z<j&&s(E,O,I,D,j,z,W,{noStep:!0}),it>I&&s(E,O,I,it,z,J,W,{noStep:!0}),s(E,O,rt,D,z,J,W,{noStep:!0}),j=J;j>R&&s(E,O,I,D,j,R,W,{noStep:!0})}let c=(_,R,E,O)=>r(_,R,0,1.3,E,O,n.green,{cast:!1});function l(_,R,E,O,I,D,W=!0){let q=Math.abs(R-_)>Math.abs(O-E),j=Math.abs(q?R-_:O-E),ot=Math.max(2,Math.round(j/.16));for(let z=0;z<=ot;z++){let J=z/ot,rt=q?_+(R-_)*J:(_+R)/2,it=q?(E+O)/2:E+(O-E)*J,vt=new Pt(new rn(.025,.025,D-I,6),n.bars);vt.position.set(rt,(I+D)/2,it),vt.castShadow=!0,i.add(vt)}for(let z of[I+.05,(I+D)/2,D-.05])r(Math.min(_,R)-(q?0:.04),Math.max(_,R)+(q?0:.04),z-.04,z+.04,Math.max(E,O)+(q?.04:0),Math.min(E,O)-(q?.04:0),n.bars);W&&s(_,R,I,D,E,O,null,{seeThrough:!0,noStep:!0})}function h(_,R,E,O,I){let D=Math.abs(R-_)>Math.abs(O-E);r(_,R,I+.95,I+1.05,E,O,n.rail),r(_,R,I+.48,I+.54,E,O,n.rail);let W=Math.abs(D?R-_:O-E),q=Math.max(1,Math.round(W/1.6));for(let j=0;j<=q;j++){let ot=j/q,z=D?_+(R-_)*ot:(_+R)/2,J=D?(E+O)/2:E+(O-E)*ot;r(z-.04,z+.04,I,I+1.05,J-.04,J+.04,n.rail)}s(_,R,I,I+1,E,O,null,{seeThrough:!0,noStep:!0})}function f(_,R,E,O=1.6){r(_-.12,_+.12,R-.08,R,E+O/2,E-O/2,n.lamp,{cast:!1})}function d(_,R,E,O,I){let D=Math.abs(R-_),W=Math.abs(O-E),q=(_+R)/2,j=(E+O)/2,ot=new qt;ot.position.set(q,0,j),i.add(ot);let z=new Pt(new ge(D,.16,W),n.kill);z.position.y=.08,ot.add(z);let J=Math.max(2,Math.round(Math.max(D,W)/.34)),rt=D>=W;for(let bt=0;bt<J;bt++){let At=new Pt(new ge(rt?.06:D,.12,rt?W:.06),n.steel);rt?At.position.set(-D/2+(bt+.5)*(D/J),.12,0):At.position.set(0,.12,-W/2+(bt+.5)*(W/J)),ot.add(At)}let it=[];for(let bt=0;bt<(I?12:5);bt++){let At=new mn(n.steam.clone());At.userData={x:(Math.random()-.5)*D,z:(Math.random()-.5)*W,o:Math.random()},ot.add(At),it.push(At)}let vt={kind:"vent",min:new C(q-D/2,0,j-W/2),max:new C(q+D/2,.42,j+W/2),active:!0,group:ot,puffs:it,trap:!!I};return t.hazards.push(vt),I&&(I.hz=vt,I.group=ot,I.h=0,t.traps.push(I)),vt}function m(_,R,E,O,I=0){let D=Math.abs(R-_),W=Math.abs(O-E),q=(_+R)/2,j=(E+O)/2,ot=new qt;ot.position.set(q,I,j),i.add(ot);let z=new Pt(new rn(.5,.5,.02,24),n.puddle);z.scale.set(D,1,W),z.position.y=.012,ot.add(z);let J=new Pt(new Ji(Math.min(D,W)*.3,.035,5,20,4.2),e({color:"#141414"}));J.rotation.x=-Math.PI/2,J.position.y=.04,ot.add(J);let rt=[];for(let bt=0;bt<8;bt++){let At=new mn(n.spark.clone());At.userData={x:(Math.random()-.5)*D*.7,z:(Math.random()-.5)*W*.7,o:Math.random()},ot.add(At),rt.push(At)}let it=new Ki("#7cc7ff",0,5,2);it.position.y=.5,ot.add(it);let vt={kind:"puddle",min:new C(q-D/2*.9,I,j-W/2*.9),max:new C(q+D/2*.9,I+.3,j+W/2*.9),active:!0,group:ot,sparks:rt,light:it};return t.hazards.push(vt),vt}function g(_,R,E,O,I=0){let D=Math.abs(R-_)>Math.abs(O-E),W=Math.abs(D?R-_:O-E),q=Math.round(W/.32);for(let ot=0;ot<q;ot++){let z=(ot+.5)/q,J=D?_+(R-_)*z:(_+R)/2,rt=D?(E+O)/2:E+(O-E)*z,it=new Pt(new Ji(.34,.018,4,14),n.wire);it.position.set(J,I+.36,rt),it.rotation.y=D?Math.PI/2:0,it.rotation.x=ot%2?.25:-.25,i.add(it)}let j={kind:"wire",min:new C(Math.min(_,R),I,Math.min(E,O)),max:new C(Math.max(_,R),I+.62,Math.max(E,O)),active:!0};return t.hazards.push(j),j}function x(_,R,E,O,I=!1){let D=new qt;D.position.set(R,E+.006,O),i.add(D);let W=new Pt(new Or(.55,.78,40),I?n.gold:n.goldDim.clone());W.rotation.x=-Math.PI/2,D.add(W);let q=new Pt(new rn(.7,.7,3,24,1,!0),new Ce({map:Zr(),color:ei,transparent:!0,opacity:0,blending:dn,depthWrite:!1,side:Oe,fog:!1}));q.position.y=1.5,D.add(q);let j={i:_,pos:new C(R,E,O),group:D,ring:W,beam:q,lit:I,flash:0};return t.checkpoints.push(j),j}function p(_,R,E,O,I){let j=new qt;for(let J=0;J<5;J++){let rt=new Pt(new ge(1.8,.06,.28),n.wood);rt.position.set(0,-.03,-1.8/2+.14+J*(1.8-.28)/4),rt.castShadow=rt.receiveShadow=!0,j.add(rt)}for(let J of[-1.8/2+.1,0,1.8/2-.1]){let rt=new Pt(new ge(.16,.18,1.8),n.woodD);rt.position.set(J,-.15,0),j.add(rt)}i.add(j);let ot={min:new C,max:new C,top:0,mover:!0,delta:new C,noStep:!0},z={base:_,axis:R,amp:E,period:O,phase:I,g:j,box:ot,W:1.8,H:.3,D:1.8,pos:new C};return z.at=(J,rt=new C)=>rt.copy(_).addScaledVector(R,E*Math.sin((J/O+I)*Math.PI*2)),t.movers.push(z),t.solids.push(ot),T(z,0,!0),z}function u(_,R,E,O,I,D){let W=new qt;i.add(W);let q=2.8,j=3.4,ot=.8;s(O,_-q/2,E,D,R+ot/2,R-ot/2,n.concrete,{noStep:!0,tileV:2}),s(_+q/2,I,E,D,R+ot/2,R-ot/2,n.concrete,{noStep:!0,tileV:2}),s(_-q/2,_+q/2,E+j,D,R+ot/2,R-ot/2,n.concrete,{noStep:!0});for(let[Lt,Ct,It,te]of[[_-q/2-.2,_-q/2,E,E+j+.2],[_+q/2,_+q/2+.2,E,E+j+.2],[_-q/2-.2,_+q/2+.2,E+j,E+j+.2]]){let Rt=new Pt(new ge(Ct-Lt,te-It,.14),n.gold);Rt.position.set((Lt+Ct)/2,(It+te)/2,R+ot/2+.07),W.add(Rt)}let z=e({color:"#55606a",roughness:.45,metalness:.6}),J=[-1,1].map(Lt=>{let Ct=new Pt(dc(q/2,j,.2,1.4,1.7),z);return Ct.position.set(_+Lt*q/4,E+j/2,R),Ct.castShadow=!0,W.add(Ct),Ct}),rt={min:new C(_-q/2,E,R-.2),max:new C(_+q/2,E+j,R+.2),top:E+j,noStep:!0};t.solids.push(rt);let it=new Ce({color:"#fff3dc",fog:!1}),vt=new Pt(new Be(q+.4,j+.4),it);vt.position.set(_,E+j/2,R-1.8),W.add(vt);for(let Lt of[-1,1]){let Ct=new Pt(new Be(1.8,j+.4),it);Ct.rotation.y=Lt*Math.PI/2,Ct.position.set(_-Lt*(q/2+.1),E+j/2,R-.9),W.add(Ct)}let bt=new Pt(new Be(q+.2,2),it);bt.rotation.x=-Math.PI/2,bt.position.set(_,E+.01,R-.9),W.add(bt);let At=new Pt(new Be(.07,j),new Ce({color:"#fff0cc",fog:!1}));At.position.set(_,E+j/2,R+.11),W.add(At);let Qt=new mn(new Ln({map:ns(),color:"#ffd896",transparent:!0,opacity:.85,blending:dn,depthWrite:!1,fog:!1}));Qt.scale.set(12,12,1),Qt.position.set(_,E+j*.55,R-1.4),W.add(Qt);let Wt=new Ce({map:Zr(),color:"#ffe2a8",transparent:!0,opacity:0,blending:dn,depthWrite:!1,side:Oe,fog:!1}),he=[];for(let Lt=0;Lt<3;Lt++){let Ct=new Pt(new Be(q*(1+Lt*.35),9),Wt);Ct.rotation.x=-Math.PI/2+.12,Ct.rotation.z=(Lt-1)*.08,Ct.position.set(_,E+.6+Lt*.5,R+4.5),W.add(Ct),he.push(Ct)}let B=new Pt(new rn(1.3,2.2,46,20,1,!0),new Ce({map:Zr(),color:"#ffe6b0",transparent:!0,opacity:.32,blending:dn,depthWrite:!1,side:Oe,fog:!1}));B.rotation.x=Math.PI,B.position.set(_,E+23,R-2.2),W.add(B);let be=new Ki("#ffcf8a",30,16,1.6);return be.position.set(_,E+2.4,R+1.4),W.add(be),{g:W,x:_,z:R,y:E,leaves:J,doorBox:rt,glow:Qt,shafts:he,shaftMat:Wt,seam:At,lamp:be,beacon:B,DW:q,open:0,opening:!1}}function T(_,R,E){let O=_.pos.clone();_.at(R,_.pos),_.g.position.copy(_.pos);let I=_.box;I.min.set(_.pos.x-_.W/2,_.pos.y-_.H,_.pos.z-_.D/2),I.max.set(_.pos.x+_.W/2,_.pos.y,_.pos.z+_.D/2),I.top=_.pos.y,I.delta.copy(E?new C:_.pos.clone().sub(O))}function w(_,R,E,O){let I=new qt;I.position.set(_,R,E),i.add(I);let D=new Pt(new rn(.62,.68,.08,24),n.steel);D.position.y=.04,I.add(D);let W=new Pt(new rn(.5,.5,.12,24),new Se({color:"#2fd15a",emissive:"#22c24c",emissiveIntensity:1.3,roughness:.4}));W.position.y=.13,I.add(W);let q=new qt;q.position.y=1.9,I.add(q);let j=new Se({color:"#ffd21f",emissive:"#ffc400",emissiveIntensity:.9,roughness:.5}),ot=new Pt(new ge(.22,.5,.22),j);ot.position.y=.35,q.add(ot);let z=new Pt(new Fr(.34,.45,4),j);z.rotation.x=Math.PI,z.position.y=-.1,q.add(z);let J=new Ki("#3dff7a",4,5,2);J.position.y=.6,I.add(J);let rt={pos:new C(_,R,E),g:I,cap:W,arrow:q,light:J,pressed:!1,onPress:O};return t.buttons.push(rt),rt}function M(_,R,E,O){let I=new qt;i.add(I);let D=Math.round((R-_)/.18);for(let z=0;z<=D;z++){let J=new Pt(new rn(.035,.035,O,6),n.bars);J.position.set(_+(R-_)*z/D,O/2,E),J.castShadow=!0,I.add(J)}for(let z of[.08,O/2,O-.08]){let J=new Pt(new ge(R-_,.1,.1),n.bars);J.position.set((_+R)/2,z,E),I.add(J)}let W=new Se({color:"#ff3b30",emissive:"#ff2a20",emissiveIntensity:1.6}),q=new Pt(new ge(.5,.22,.12),W);q.position.set((_+R)/2,O+.35,E+.36),i.add(q);let j={min:new C(_,0,E-.15),max:new C(R,O,E+.15),top:O,seeThrough:!0,noStep:!0};t.solids.push(j);let ot={g:I,box:j,h:O,lamp:q,lampMat:W,open:0,opening:!1};return t.doors.push(ot),ot}let N=9;s(-8.6,8.6,-.4,0,8.6,-20.6,n.floor,{cast:!1,tileU:2});for(let _ of[-1.3,1.3])r(_-.07,_+.07,.002,.012,8,-20,e({color:"#d9b43a"}),{cast:!1});a(-8.6,8.6,8.6,8,0,N,n.cream),o(8.6,-20.6,-8.6,-8,0,N,n.cream),o(8.6,-20.6,8,8.6,0,N,n.cream,[[-15,-17.6,6.3,3.5]]),a(-8.6,8.6,-20,-20.6,0,N,n.cream,[[-2.6,2.6,4.6]]),l(-2.6,2.6,-20.25,-20.35,0,4.6),r(-2.8,2.8,4.6,4.9,-19.9,-20.7,n.steel),c(-8,8,8,7.95),c(7.95,8,8,-20),c(-8,8,-19.95,-20),r(7.4,8,3.5,3.75,-14.6,-15.2,n.cream),r(7.5,8,3.5,3.6,-17.4,-18.1,n.cream);for(let _=0;_<7;_++){let R=8-_*4,E=R-4;s(-8,-4.6,0,3.2,R,R-.15,n.cream,{noStep:!0}),r(-8,-4.4,3.2,3.3,R-.02,R-.13,n.steel),r(-7.95,-7,0,.45,R-.4,R-2.4,n.bunk),r(-7.95,-7.05,.45,.6,R-.45,R-2.35,n.mattress),s(-7.95,-7,0,.6,R-.4,R-2.4,null),r(-7.9,-7.4,0,.5,E+.9,E+.4,n.steelWhite),s(-7.9,-7.4,0,.5,E+.9,E+.4,null),_===1?(l(-4.5,-4.5,R-1.85,E+.15,0,3.2),l(-4.62,-4.62,R-1.9,E+.5,0,3.2,!1)):l(-4.5,-4.5,R-.15,E+.15,0,3.2)}for(let _=0;_<7;_++){let R=6-_*4;r(-8,-7.95,5,7.4,R+.8,R-.8,new Ce({color:"#e9f1f5"}),{cast:!1}),l(-7.94,-7.94,R+.8,R-.8,5,7.4,!1)}for(let _=0;_<7;_++)s(2.6,4.5,0,.5*(_+1),-_,-(_+1),n.grate,{tileU:1,tileV:1}),r(2.6,4.5,.5*(_+1)-.04,.5*(_+1)+.01,-_,-_-.12,n.stripe,{cast:!1});s(4.5,8,3.2,3.5,8,-10.6,n.grate,{tileU:1,tileV:1}),s(4.5,8,3.2,3.5,-12.6,-20,n.grate,{tileU:1,tileV:1}),r(4.5,4.9,3,3.2,-10.6,-11.2,n.steel),r(7.6,8,2.9,3.2,-12,-12.6,n.steel),h(4.5,4.6,8,-5.8,3.5),h(4.5,4.6,-7.2,-10.6,3.5),h(4.5,4.6,-12.6,-20,3.5),h(4.6,8,8,7.9,3.5);for(let _ of[6,2,-2,-9.6,-14,-18.5])s(4.55,4.75,0,3.2,_+.1,_-.1,n.steel,{noStep:!0});for(let _=6;_>-20;_-=4)r(-8.6,8.6,N-.5,N-.25,_+.12,_-.12,n.steel),f(0,N-.6,_-2,2.2);m(-3.8,-1.6,7.4,5.2),x(0,-5.6,0,3,!0),x(1,6.25,3.5,-14);let P=7;a(8.6,22.6,-7.4,-8,0,P,n.tile),o(-7.4,-24.6,22,22.6,0,P,n.tile),o(-20.6,-24.6,8,8.6,0,P,n.tile),a(8,22.6,-24,-24.6,0,P,n.tile,[[17.6,20.6,3.2]]),s(8.6,13,-3,0,-8,-24,n.floor,{cast:!1}),s(18,22,-3,0,-8,-24,n.floor,{cast:!1}),s(13,18,-3.4,-3,-8,-24,n.concrete,{cast:!1});let L=new Pt(new Be(5,16),n.water);L.rotation.x=-Math.PI/2,L.position.set(15.5,-1.2,-16),i.add(L),r(12.9,13,-1.2,.005,-8,-24,e({color:"#3e4a4a"}),{cast:!1}),r(18,18.1,-1.2,.005,-8,-24,e({color:"#3e4a4a"}),{cast:!1}),s(8.6,10.4,3.2,3.5,-13.4,-19.2,n.grate,{tileU:1,tileV:1});for(let _ of[-13.6,-19])s(10.2,10.4,0,3.2,_+.1,_-.1,n.steel,{noStep:!0});for(let _=0;_<6;_++){let R=-9.2-_*1.5;s(21,22,0,1.1,R,R-1.3,n.washer,{noStep:!0});let E=new Pt(new Nr(.34,20),n.washerDoor);E.rotation.y=-Math.PI/2,E.position.set(20.99,.6,R-.65),i.add(E)}s(8.8,10,0,.85,-9,-12.2,n.steelWhite,{noStep:!0});for(let _=-10;_>-24;_-=4)f(15.5,P-.3,_,2.4);for(let _=-10;_>-24;_-=4)r(8.6,22,P-.25,P,_+.1,_-.1,n.steel);d(11.3,12.2,-8,-24,{period:2.6,phase:0}),p(new C(14.3,-.6,-16),new C(0,0,1),3.5,5,0),p(new C(16.7,-.6,-16),new C(0,0,1),3.5,6.4,.3);let V=M(17.6,20.6,-24.3,3.2);w(20.2,0,-9.8,()=>{V.opening=!0}),x(2,19.6,0,-21.6);let b=6;s(-14.6,8.6,-.4,0,-20,-40.6,n.asphalt,{cast:!1,tileU:4,tileV:4}),s(8.6,22.6,-.4,0,-24.6,-40.6,n.asphalt,{cast:!1,tileU:4,tileV:4}),o(-20,-40.6,-14.6,-14,0,b,n.concrete),o(-24,-40.6,22,22.6,0,b,n.concrete),a(-14.6,-8.6,-20,-20.6,0,b,n.concrete),t.exit=u(0,-40.3,0,-14.6,22.6,b);for(let[_,R,E]of[[-14.3,22.3,-40.3]]){let O=Math.round((R-_)/.45);for(let I=0;I<O;I++){let D=new Pt(new Ji(.3,.015,4,12),n.wire);D.position.set(_+(I+.5)*(R-_)/O,b+.3,E),D.rotation.y=Math.PI/2,i.add(D)}}((_,R,E,O)=>{let I=Math.abs(R-_)>Math.abs(O-E),D=Math.abs(I?R-_:O-E),W=new Pt(new Be(D,4),n.fence);W.material.map.repeat.set(D/2,2),W.position.set((_+R)/2,2,(E+O)/2),I||(W.rotation.y=Math.PI/2),i.add(W);let q=Math.round(D/3);for(let j=0;j<=q;j++){let ot=j/q,z=_+(R-_)*ot,J=E+(O-E)*ot;r(z-.05,z+.05,0,4.1,J+.05,J-.05,n.steel)}r(Math.min(_,R),Math.max(_,R)+(I?0:.03),4,4.06,Math.max(E,O)+(I?.03:0),Math.min(E,O),n.steel),s(Math.min(_,R)-(I?0:.06),Math.max(_,R)+(I?0:.06),0,4,Math.max(E,O)+(I?.06:0),Math.min(E,O)-(I?.06:0),null,{seeThrough:!0,noStep:!0})})(-14,16,-28,-28),g(-14,12,-31.2,-32),g(-4,22,-35.2,-36),m(2.2,4.8,-32.6,-34.6),w(-11.2,0,-33.6,()=>{t.exit.opening=!0}),t.guards.push(uc(i,{zone:{x0:-4,x1:2.2,z0:-19.2,z1:4.6},a:[-1,-18],b:[-1,3.6]})),t.guards.push(uc(i,{zone:{x0:-9.5,x1:21,z0:-39.4,z1:-36.8},a:[15,-38.1],b:[4,-38.1]})),s(-13.8,-10.8,0,6.5,-37.2,-40,n.concrete,{noStep:!0}),r(-14,-10.6,6.5,6.8,-37,-40.2,n.steel),r(-13.6,-11,6.8,8.6,-37.4,-39.8,new Se({color:"#9fb6c2",roughness:.1,metalness:.3,transparent:!0,opacity:.55}),{cast:!1}),r(-14,-10.6,8.6,8.9,-37,-40.2,n.steel);for(let[_,R]of[[-13.5,-22],[21.5,-27],[-13.5,-33]])r(_-.1,_+.1,0,7.5,R+.1,R-.1,n.steel),r(_-.5,_+.5,7.3,7.6,R+.25,R-.25,n.lamp);r(-9.2,-9,0,3,-23,-23.2,n.steel),r(-9.6,-8.6,3,3.7,-23.2,-23.25,e({color:"#ffffff"})),x(3,19.2,0,-26.3),t.trapHeight=(_,R)=>{let E=((R/_.period+_.phase)%1+1)%1*_.period;return E<1.15?0:E<1.5?.18+.05*Math.sin(E*60):E<1.58?.18+(E-1.5)/.08*.82:E<2.3?1:Math.max(0,1-(E-2.3)/.3)},t.step=_=>{for(let R of t.movers)T(R,_,!1)},t.visual=(_,R)=>{n.kill.emissiveIntensity=1.7+.5*Math.sin(_*7);for(let D of t.traps){let W=t.trapHeight(D,_);D.hz.active=W>.45,D.h=W}for(let D of t.hazards)if(D.kind==="vent"){let W=D.trap&&t.traps.find(q=>q.hz===D).h||0;for(let q of D.puffs){let j=q.userData,ot=(_*(D.trap&&W>.3?1.6:.55)+j.o)%1;q.position.set(j.x,.2+ot*(D.trap?.25+W*2.6:.9),j.z);let z=(D.trap?.6+W*1:.6)*(.6+ot);q.scale.set(z,z,1),q.material.opacity=(1-ot)*(D.trap?.3+W*.65:.55)}}else if(D.kind==="puddle"){let W=0;for(let q of D.sparks){let j=q.userData,ot=(_*3.1+j.o)%1,z=ot<.18;q.position.set(j.x+Math.sin(_*37+j.o*9)*.1,.08+ot*.4,j.z);let J=z?.35+Math.random()*.3:.01;q.scale.set(J,J,1),q.material.opacity=z?.9:0,z&&W++}D.light.intensity=W?3+Math.random()*3:.3}for(let D of t.checkpoints)D.flash=Math.max(0,D.flash-R),D.beam.material.opacity=D.flash>0?Math.min(1,D.flash*1.6)*.9:0,D.beam.scale.set(1+(1-D.flash)*.3,1,1+(1-D.flash)*.3),D.lit||(D.ring.material.emissiveIntensity=.12+.1*(.5+.5*Math.sin(_*3+D.i)));for(let D of t.buttons)D.arrow.visible=!D.pressed,D.arrow.position.y=1.9+Math.sin(_*4)*.15,D.arrow.rotation.y=_*2,D.cap.position.y+=((D.pressed?.06:.13)-D.cap.position.y)*Math.min(1,R*14),D.cap.material.emissiveIntensity=D.pressed?.15:1.1+.4*Math.sin(_*5),D.light.intensity=D.pressed?0:4;for(let D of t.doors){D.opening&&(D.open=Math.min(1,D.open+R/.8));let W=D.open*D.open*(3-2*D.open);D.g.position.y=W*(D.h-.25),D.box.max.y=W>.6?D.box.min.y:D.h;let q=D.opening?"#30d158":"#ff3b30";D.lampMat.color.set(q),D.lampMat.emissive.set(q)}for(let D of t.guards)D.render(R);let E=t.exit;E.opening&&(E.open=Math.min(1,E.open+R/.9));let O=E.open*E.open*(3-2*E.open);E.leaves[0].position.x=E.x-E.DW/4-O*(E.DW/2),E.leaves[1].position.x=E.x+E.DW/4+O*(E.DW/2),E.doorBox.max.y=O>.6?E.doorBox.min.y:E.y+3.4;let I=.5+.5*Math.sin(_*2.2);E.glow.material.opacity=.7+.2*I,E.glow.scale.setScalar(11+I*1.2+O*6),E.shaftMat.opacity=.1+.06*I+O*.35,E.lamp.intensity=25+10*I+O*15,E.beacon.material.opacity=.22+.08*I,E.seam.visible=O<.05},t.unlight=_=>{_.lit=!1,_.ring.material=n.goldDim.clone(),_.flash=0},t.light=_=>{_.lit=!0,_.ring.material=n.gold,_.flash=1.2},t.press=_=>{_.pressed=!0,_.onPress()},t.resetProgress=()=>{for(let _ of t.buttons)_.pressed=!1;for(let _ of t.doors)_.open=0,_.opening=!1;t.exit.open=0,t.exit.opening=!1;for(let _ of t.guards)_.reset()},t.start={pos:t.checkpoints[0].pos.clone(),yaw:-Math.PI/2};let U=new Set([...t.movers.map(_=>_.g),t.exit.g,...t.checkpoints.map(_=>_.group),...t.hazards.filter(_=>_.group).map(_=>_.group),...t.buttons.map(_=>_.g),...t.doors.flatMap(_=>[_.g,_.lamp]),...t.guards.map(_=>_.root)]);i.updateMatrixWorld(!0);let $=new Map,X=[];i.traverse(_=>{if(!_.isMesh||_.material.isMeshBasicMaterial||_.material.transparent||_.material.vertexColors)return;for(let O=_;O;O=O.parent)if(U.has(O))return;let R=_.material.uuid+(_.castShadow?"c":"")+(_.receiveShadow?"r":"");$.has(R)||$.set(R,{mat:_.material,cast:_.castShadow,recv:_.receiveShadow,geos:[]});let E=_.geometry.clone();E.applyMatrix4(_.matrixWorld);for(let O of Object.keys(E.attributes))["position","normal","uv"].includes(O)||E.deleteAttribute(O);$.get(R).geos.push(E.index?E.toNonIndexed():E),X.push(_)});for(let _ of X)_.parent.remove(_);for(let _ of $.values()){let R=nh(_.geos,!1);if(!R)continue;let E=new Pt(R,_.mat);E.castShadow=_.cast,E.receiveShadow=_.recv,E.matrixAutoUpdate=!1,i.add(E)}return t}var Ze=.3,is=1.05,V0=.55,fc=6,G0=55,W0=22,gh=28,X0=10.2,q0=.1,Y0=.14,Z0=30,Ds={kid:{label:"Inmate"},dog:{label:"Pup"},cat:{label:"Kitty"}};function _h(i){let t=new qt;i.add(t);let e=new qt;t.add(e);let n=null,s=-1,r=0,a={mode:"idle",speed:0,t:0};function o(d){a.mode=d,c.anim=d}let c={root:t,pivot:e,anim:"",rigName:"",pos:new C,vel:new C,grounded:null,groundTime:0,airTime:0,jumpBuf:0,coyote:0,facing:Math.PI,squash:0,lastFallSpeed:0,landed:!1,jumped:!1,frozen:!1};c.setRig=d=>{n&&e.remove(n.root),n=qr[d](),c.rigName=d,c.body=n,e.add(n.root),s=-1,o("idle")},c.reset=d=>{s=-1,c.pos.copy(d),c.vel.set(0,0,0),c.grounded=null,c.facing=Math.PI,c.squash=0,c.jumpBuf=0,c.frozen=!1,e.position.y=0,o("idle")};let l=new C;function h(d){for(let m of d){if(c.pos.y+.05>=m.max.y||c.pos.y+is<=m.min.y)continue;if(c.grounded&&!m.noStep&&m.top-c.pos.y<=V0&&f(m,Ze)){c.pos.y=m.top,c.grounded=m,c.vel.y=0;continue}let g=Math.max(m.min.x,Math.min(c.pos.x,m.max.x)),x=Math.max(m.min.z,Math.min(c.pos.z,m.max.z)),p=c.pos.x-g,u=c.pos.z-x,T=p*p+u*u;if(!(T>=Ze*Ze))if(T>1e-8){let w=Math.sqrt(T),M=(Ze-w)/w;c.pos.x+=p*M,c.pos.z+=u*M}else{let w=[[m.min.x-Ze-c.pos.x,0],[m.max.x+Ze-c.pos.x,0],[0,m.min.z-Ze-c.pos.z],[0,m.max.z+Ze-c.pos.z]];w.sort((M,N)=>Math.abs(M[0]+M[1])-Math.abs(N[0]+N[1])),c.pos.x+=w[0][0],c.pos.z+=w[0][1]}}}function f(d,m){let g=Math.max(d.min.x,Math.min(c.pos.x,d.max.x)),x=Math.max(d.min.z,Math.min(c.pos.z,d.max.z)),p=c.pos.x-g,u=c.pos.z-x;return p*p+u*u<m*m}return c.step=(d,m,g)=>{if(c.landed=!1,c.jumped=!1,c.frozen)return;c.grounded&&c.grounded.mover&&c.pos.add(c.grounded.delta);let x=c.grounded?G0:W0,p=m.x*fc,u=m.z*fc,T=Math.min(1,x*d/Math.max(.001,Math.hypot(p-c.vel.x,u-c.vel.z)));c.vel.x+=(p-c.vel.x)*T,c.vel.z+=(u-c.vel.z)*T,m.jumpPressed?c.jumpBuf=Y0:c.jumpBuf=Math.max(0,c.jumpBuf-d),c.coyote=c.grounded?q0:Math.max(0,c.coyote-d),c.jumpBuf>0&&c.coyote>0&&(c.vel.y=X0,c.grounded=null,c.coyote=0,c.jumpBuf=0,c.jumped=!0,c.squash=-.18),!m.jumpHeld&&c.vel.y>3.5&&(c.vel.y-=gh*1.6*d),c.vel.y=Math.max(-Z0,c.vel.y-gh*d),c.pos.x+=c.vel.x*d,c.pos.z+=c.vel.z*d,h(g);let w=c.pos.y;c.pos.y+=c.vel.y*d;let M=null;for(let N of g){if(!f(N,Ze*.8))continue;let P=.02+(N.mover?Math.abs(N.delta.y):0);c.vel.y<=0&&w>=N.top-P-.001&&c.pos.y<=N.top+.001?(!M||N.top>M.top)&&(M=N):c.vel.y>0&&w+is<=N.min.y+.001&&c.pos.y+is>N.min.y&&(c.pos.y=N.min.y-is,c.vel.y=0)}M?(c.grounded||(c.landed=!0,c.lastFallSpeed=-c.vel.y,c.lastFallSpeed>6&&(c.squash=Math.min(.28,c.lastFallSpeed*.018))),c.pos.y=M.top,c.vel.y=0,c.grounded=M):c.grounded&&(!f(c.grounded,Ze*.8)||c.pos.y>c.grounded.top+.01?c.grounded=null:(c.pos.y=c.grounded.top,c.vel.y=0)),c.grounded?(c.groundTime+=d,c.airTime=0):(c.airTime+=d,c.groundTime=0)},c.render=d=>{c.root.position.copy(c.pos);let m=Math.hypot(c.vel.x,c.vel.z);if(m>.4&&!c.frozen){let x=Math.atan2(c.vel.x,c.vel.z)-c.facing;x=Math.atan2(Math.sin(x),Math.cos(x)),c.facing+=x*Math.min(1,d*14)}if(c.pivot.rotation.y=c.facing,c.squash+=(0-c.squash)*Math.min(1,d*12),c.pivot.scale.set(1+c.squash*.6,1-c.squash,1+c.squash*.6),!c.frozen&&s<0&&(c.grounded?o(m>3.2?"run":m>.5?"walk":"idle"):o(c.vel.y>.5&&c.airTime<.6?"jump":c.airTime>.12?"fall":c.anim)),s>=0){s+=d,o("cheer");let g=s*2.4%1;e.position.y=Math.sin(g*Math.PI)*.35,e.rotation.y=c.facing+Math.sin(s*5)*.3}r+=d,a.t=r,a.speed=m,n&&n.animate(a,d)},c.cheer=()=>{s=0,o("cheer")},c.SPEED=fc,c}function xh({stickZone:i,stickBase:t,stickKnob:e,jumpBtn:n,onFirst:s}){let r={x:0,z:0,jumpHeld:!1,jumpEdge:!1,any:!1,touchUsed:!1},a=new Set,o=!1,c=()=>{o||(o=!0,s&&s()),r.any=!0},l={KeyW:"u",ArrowUp:"u",KeyS:"d",ArrowDown:"d",KeyA:"l",ArrowLeft:"l",KeyD:"r",ArrowRight:"r"};addEventListener("keydown",p=>{if(p.code==="Space"||p.code==="KeyK"){r.jumpHeld||(r.jumpEdge=!0),r.jumpHeld=!0,c(),p.preventDefault();return}l[p.code]&&(a.add(l[p.code]),c(),p.preventDefault())}),addEventListener("keyup",p=>{if(p.code==="Space"||p.code==="KeyK"){r.jumpHeld=!1;return}l[p.code]&&a.delete(l[p.code])}),addEventListener("blur",()=>{a.clear(),r.jumpHeld=!1,h.id=null,d()});let h={id:null,ox:0,oy:0,x:0,y:0,R:52},f=null;function d(){e.style.transform="translate(-50%,-50%)",h.x=h.y=0,t.classList.remove("on"),f&&(t.style.left=f.left,t.style.top=f.top)}function m(p,u){let T=Math.hypot(p,u),w=Math.min(1,T/h.R),M=Math.atan2(u,p),N=Math.cos(M)*w*h.R,P=Math.sin(M)*w*h.R;e.style.transform=`translate(calc(-50% + ${N}px), calc(-50% + ${P}px))`;let L=w<.12?0:Math.min(1,(w-.12)/.6);h.x=Math.cos(M)*L,h.y=Math.sin(M)*L}i.addEventListener("touchstart",p=>{if(p.preventDefault(),c(),r.touchUsed=!0,h.id!==null)return;let u=p.changedTouches[0];h.id=u.identifier;let T=i.getBoundingClientRect();f||(f={left:t.style.left,top:t.style.top}),h.ox=u.clientX,h.oy=u.clientY,t.style.left=u.clientX-T.left+"px",t.style.top=u.clientY-T.top+"px",t.classList.add("on"),m(0,0)},{passive:!1}),i.addEventListener("touchmove",p=>{p.preventDefault();for(let u of p.changedTouches)u.identifier===h.id&&m(u.clientX-h.ox,u.clientY-h.oy)},{passive:!1});let g=p=>{for(let u of p.changedTouches)u.identifier===h.id&&(h.id=null,d())};i.addEventListener("touchend",g),i.addEventListener("touchcancel",g),n.addEventListener("touchstart",p=>{p.preventDefault(),c(),r.touchUsed=!0,r.jumpEdge=!0,r.jumpHeld=!0,n.classList.add("down")},{passive:!1});let x=p=>{p.preventDefault(),r.jumpHeld=!1,n.classList.remove("down")};return n.addEventListener("touchend",x,{passive:!1}),n.addEventListener("touchcancel",x,{passive:!1}),n.addEventListener("mousedown",p=>{p.preventDefault(),c(),r.jumpEdge=!0,r.jumpHeld=!0,n.classList.add("down")}),addEventListener("mouseup",()=>{r.jumpHeld&&!a.size&&(r.jumpHeld=!1,n.classList.remove("down"))}),r.read=()=>{let p=h.x,u=h.y;if(a.size){p=(a.has("r")?1:0)-(a.has("l")?1:0),u=(a.has("d")?1:0)-(a.has("u")?1:0);let w=Math.hypot(p,u);w>1&&(p/=w,u/=w)}r.x=p,r.z=u;let T=r.jumpEdge;return r.jumpEdge=!1,{x:p,z:u,jumpPressed:T,jumpHeld:r.jumpHeld}},r.release=()=>{a.clear(),h.id=null,d(),r.jumpHeld=!1,r.jumpEdge=!1},r}var J0=["step","jump","land","checkpoint","spike","respawn","exit","door"];function vh(i="./audio/"){let t={muted:!1,ready:!1,ctx:null,buffers:{},last:{}},n=document.createElement("audio").canPlayType("audio/ogg; codecs=vorbis")?"ogg":"mp3";async function s(){if(t.ctx)return;let c=window.AudioContext||window.webkitAudioContext;c&&(t.ctx=new c,t.gain=t.ctx.createGain(),t.gain.gain.value=t.muted?0:1,t.gain.connect(t.ctx.destination),await Promise.all(J0.map(async l=>{try{let f=await(await fetch(i+l+"."+n)).arrayBuffer();t.buffers[l]=await t.ctx.decodeAudioData(f)}catch{}})),t.ready=!0)}function r(){s(),t.ctx&&t.ctx.state==="suspended"&&t.ctx.resume()}function a(c,{vol:l=1,rate:h=1,minGap:f=.04}={}){if(!t.ready||t.muted)return;let d=t.buffers[c];if(!d)return;let m=t.ctx.currentTime;if(t.last[c]&&m-t.last[c]<f)return;t.last[c]=m;let g=t.ctx.createBufferSource();g.buffer=d,g.playbackRate.value=h;let x=t.ctx.createGain();x.gain.value=l,g.connect(x),x.connect(t.gain),g.start()}function o(c){t.muted=c,t.gain&&(t.gain.gain.value=c?0:1)}return{unlock:r,play:a,setMuted:o,get muted(){return t.muted},get ready(){return t.ready}}}var se=i=>document.getElementById(i),Dn=1/120,Os=new URLSearchParams(location.search),yh=Os.get("dt")?1/Math.max(10,+Os.get("dt")):0,$0=se("app"),$e=new Es({antialias:!0,powerPreference:"high-performance"}),rs=Math.min(devicePixelRatio||1,2);$e.setPixelRatio(rs);$e.outputColorSpace=pe;$e.toneMapping=Hr;$e.toneMappingExposure=1.05;$e.shadowMap.enabled=!0;$e.shadowMap.type=Qa;$0.prepend($e.domElement);var an=new ws,K0=new Ft("#5d8fd0"),j0=new Ft("#f7d9ad");an.fog=new Dr("#e8d3b6",40,170);{let i=new Br(230,24,12),t=[],e=i.attributes.position;for(let n=0;n<e.count;n++){let s=Math.max(0,Math.min(1,e.getY(n)/120+.25)),r=j0.clone().lerp(K0,s);t.push(r.r,r.g,r.b)}i.setAttribute("color",new re(t,3)),an.add(new Pt(i,new Ce({vertexColors:!0,side:Ae,fog:!1,depthWrite:!1})))}an.add(new Rs("#dfe8f5","#8a7a68",1.35));var gn=new Cs("#ffe2bb",2.6);gn.castShadow=!0;gn.shadow.mapSize.set(1024,1024);Object.assign(gn.shadow.camera,{left:-11,right:11,top:11,bottom:-11,near:1,far:40});gn.shadow.bias=-6e-4;gn.shadow.normalBias=.03;an.add(gn,gn.target);var Q0=new C(3.5,14,-6),ze=new Me(55,1,.1,300),Ht=mh(an),tg=ns(),Kr=[],eg=new Be(1,1);function Un(i,t,e,n={}){for(let s=0;s<t;s++){let r=new Ln({map:tg,color:e,transparent:!0,opacity:n.alpha||.5,depthWrite:!1,blending:n.add?dn:qn}),a=new mn(r),o=Math.random()*Math.PI*2,c=(n.speed||1.6)*(.5+Math.random()*.7);a.position.copy(i).add(new C(Math.cos(o)*.2,.08,Math.sin(o)*.2));let l=(n.size||.45)*(.7+Math.random()*.6);a.scale.setScalar(l),an.add(a),Kr.push({s:a,v:new C(Math.cos(o)*c,(n.up||.6)*(.5+Math.random()),Math.sin(o)*c),life:n.life||.5,t:0,size:l,grow:n.grow??1.6,g:n.g||0})}}function ng(i){for(let t=Kr.length-1;t>=0;t--){let e=Kr[t];e.t+=i;let n=e.t/e.life;if(n>=1){an.remove(e.s),e.s.material.dispose(),Kr.splice(t,1);continue}e.v.multiplyScalar(1-i*3),e.v.y-=e.g*i,e.s.position.addScaledVector(e.v,i),e.s.scale.setScalar(e.size*(1+n*e.grow)),e.s.material.opacity=(1-n)*(1-n)*.55}}var ni=new Pt(eg,new Ce({map:uh(),transparent:!0,depthWrite:!1}));ni.rotation.x=-Math.PI/2;ni.renderOrder=2;an.add(ni);var tt={state:"loading",t:0,acc:0,cp:0,deaths:0,falls:0,spikes:0,caught:0,runTime:0,running:!1,finished:!1,best:null,dieT:0,finishT:0,introT:0,stepT:0,shake:0,frames:[],introDone:!1,cpTimes:[]};try{let i=parseFloat(localStorage.getItem("escape3d.best"));i>0&&(tt.best=i)}catch{}var ve=vh("./audio/");try{localStorage.getItem("escape3d.muted")==="1"&&(ve.setMuted(!0),se("btn-sound").classList.add("off"))}catch{}var os=xh({stickZone:se("stick-zone"),stickBase:se("stick"),stickKnob:se("knob"),jumpBtn:se("jump"),onFirst:()=>{ve.unlock(),document.body.classList.add("moved")}});addEventListener("touchstart",()=>ve.unlock(),{passive:!0});addEventListener("mousedown",()=>ve.unlock());se("btn-sound").addEventListener("click",i=>{i.stopPropagation();let t=!ve.muted;ve.setMuted(t),se("btn-sound").classList.toggle("off",t);try{localStorage.setItem("escape3d.muted",t?"1":"0")}catch{}});se("btn-again").addEventListener("click",()=>Ih());addEventListener("keydown",i=>{tt.state==="finish"&&tt.finishT>1.2&&(i.code==="Enter"||i.code==="Space")&&Ih()});var ct,ks="kid";try{let i=localStorage.getItem("escape3d.hero");Ds[i]&&(ks=i)}catch{}Ds[Os.get("hero")]&&(ks=Os.get("hero"));queueMicrotask(()=>{ct=_h(an),ct.setRig(ks),ct.reset(Ht.checkpoints[0].pos),ct.facing=Math.PI+Ht.start.yaw,tt.state=Os.has("nointro")?"play":"intro",tt.state==="play"&&(tt.introDone=!0),to(),an.updateMatrixWorld(!0),Qr(1,!0),sg(),document.title="Escape 3D",document.body.classList.add("ready"),requestAnimationFrame(Ph)});function ig(i){let t=new Es({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});t.setSize(160,160),t.outputColorSpace=pe,t.toneMapping=Hr;let e=new ws;e.add(new Rs("#ffffff","#8a8178",1.8));let n=new Cs("#fff3e0",2.2);n.position.set(2,4,5),e.add(n);let s=qr[i]().root;s.updateMatrixWorld(!0),s.rotation.y=.55,e.add(s),s.updateMatrixWorld(!0);let r=new Pn().setFromObject(s),a=r.getCenter(new C),o=r.getSize(new C),c=new Me(30,1,.01,100),l=Math.max(o.x,o.y,o.z)*2.1;c.position.set(a.x,a.y+o.y*.15,a.z+l),c.lookAt(a.x,a.y+o.y*.05,a.z),t.render(e,c);let h=t.domElement.toDataURL("image/png");return t.dispose(),t.forceContextLoss(),h}function sg(){let i=se("pick-list");i.innerHTML="";for(let t of Object.keys(Ds)){let e=document.createElement("button");e.className="pick"+(t===ks?" on":""),e.dataset.hero=t;let n=new Image;n.src=ig(t),n.alt="",e.append(n);let s=document.createElement("span");s.textContent=Ds[t].label,e.append(s),e.addEventListener("click",r=>{r.stopPropagation(),rg(t)}),i.append(e)}se("btn-hero").querySelector("img").src=i.querySelector(".pick.on img").src}function rg(i){ks=i;try{localStorage.setItem("escape3d.hero",i)}catch{}let t=ct.pos.clone(),e=ct.facing;ct.setRig(i),ct.pos.copy(t),ct.facing=e,ct.squash=.25,Un(ct.pos.clone().add(new C(0,.4,0)),12,ei,{speed:2,add:!0,alpha:.9,life:.5,size:.3,up:1.4}),ve.play("checkpoint",{vol:.5,rate:1.3});for(let n of document.querySelectorAll(".pick"))n.classList.toggle("on",n.dataset.hero===i);se("btn-hero").querySelector("img").src=document.querySelector(".pick.on img").src,bh()}function og(){se("pick").classList.remove("hidden"),os.release()}function bh(){se("pick").classList.add("hidden")}se("btn-hero").addEventListener("click",i=>{i.stopPropagation(),og()});se("pick").addEventListener("click",()=>bh());var ss=new C,Ns=new C,ii=0,Ue=Ht.start.yaw,as=.46,jr=99,Je=new C;function Eh(i,t){let e=ct.pos,n=ct.grounded?ct.pos.y:Math.max(ii-1.5,Math.min(ii+2,e.y));ii+=(n-ii)*.1;let s=innerHeight>innerWidth*1.1,r=s?6.6:5.8;Je.set(e.x,ii+1.15,e.z);let a=Math.cos(Fs),o=Math.sin(Fs);i.set(Je.x+Math.sin(Ue)*r*a,Je.y+r*o,Je.z+Math.cos(Ue)*r*a),t.set(Je.x-Math.sin(Ue)*1.2,Je.y+(s?-.35:.1),Je.z-Math.cos(Ue)*1.2)}function wh(i,t,e,n){let s=e;for(let r of Ht.solids){if(r.seeThrough||r.mover)continue;let a=0,o=s;for(let c of["x","y","z"]){let l=r.min[c]-n,h=r.max[c]+n;if(Math.abs(t[c])<1e-9){if(i[c]<l||i[c]>h){a=1/0;break}continue}let f=(l-i[c])/t[c],d=(h-i[c])/t[c];if(f>d&&([f,d]=[d,f]),a=Math.max(a,f),o=Math.min(o,d),a>o)break}a<=o&&a>.05&&a<s&&(s=a)}return s}var Fs=.46;function ag(i,t){let e=new C(Math.sin(Ue)*Math.cos(i),Math.sin(i),Math.cos(Ue)*Math.cos(i));return wh(Je,e,t,.25)}function Qr(i,t){let e=new C,n=new C;if(ct){let o=innerHeight>innerWidth*1.1?6.6:5.8;Je.set(ct.pos.x,ii+1.15,ct.pos.z);let c=as,l=-1;for(let h of[as,.75,1,1.22]){if(h<as)continue;let f=ag(h,o);if(f>=Math.min(o,4.6)){c=h,l=99;break}f>l&&(l=f,c=h)}Fs=t?c:Fs+(c-Fs)*Math.min(1,i*5)}if(Eh(e,n),t)ss.copy(e),Ns.copy(n);else{let o=1-Math.exp(-i*10);ss.lerp(e,o),Ns.lerp(n,1-Math.exp(-i*12))}let s=ss.clone().sub(Je),r=s.length();s.normalize();let a=wh(Je,s,r,.25);a<r&&ss.copy(Je).addScaledVector(s,Math.max(.5,a-.15)),ze.position.copy(ss),tt.shake>0&&ze.position.add(new C((Math.random()-.5)*tt.shake,(Math.random()-.5)*tt.shake,0)),ze.lookAt(Ns)}function cg(i){jr+=i,Bs&&(Ue+=Bs*i*2.2,jr=0);let t=Math.hypot(ct.vel.x,ct.vel.z);if(jr>1&&t>2&&ct.grounded&&tt.state==="play"){let n=Math.atan2(-ct.vel.x,-ct.vel.z)-Ue;n=Math.atan2(Math.sin(n),Math.cos(n));let s=Math.max(0,Math.min(1,(Math.cos(n)+.4)/1.4));Ue+=n*Math.min(1,i*1.6)*s}}var Bs=0,ke={id:null,x:0,y:0};function Th(i,t,e){ke.id=e,ke.x=i,ke.y=t}function Ah(i,t){Ue-=(i-ke.x)*.0065,as=Math.max(.12,Math.min(1.05,as+(t-ke.y)*.004)),ke.x=i,ke.y=t,jr=0}var Hs=se("look");Hs.addEventListener("touchstart",i=>{if(i.preventDefault(),ve.unlock(),ke.id===null){let t=i.changedTouches[0];Th(t.clientX,t.clientY,t.identifier)}},{passive:!1});Hs.addEventListener("touchmove",i=>{i.preventDefault();for(let t of i.changedTouches)t.identifier===ke.id&&Ah(t.clientX,t.clientY)},{passive:!1});var Rh=i=>{for(let t of i.changedTouches)t.identifier===ke.id&&(ke.id=null)};Hs.addEventListener("touchend",Rh);Hs.addEventListener("touchcancel",Rh);Hs.addEventListener("mousedown",i=>{Th(i.clientX,i.clientY,"m")});addEventListener("mousemove",i=>{ke.id==="m"&&Ah(i.clientX,i.clientY)});addEventListener("mouseup",()=>{ke.id==="m"&&(ke.id=null)});addEventListener("keydown",i=>{i.code==="KeyQ"&&(Bs=1),i.code==="KeyE"&&(Bs=-1)});addEventListener("keyup",i=>{(i.code==="KeyQ"||i.code==="KeyE")&&(Bs=0)});var Ch=2.8;function lg(i){let t=new C,e=new C;Eh(t,e);let n=Math.min(1,Math.max(0,(i-.8)/(Ch-.8))),s=n*n*(3-2*n),r=Ht.exit,a=new C(r.x+4,17,r.z+24),o=new C(r.x,2,r.z);ze.position.lerpVectors(a,t,s),Ns.lerpVectors(o,e,s),ze.lookAt(Ns),ss.copy(ze.position)}function hg(){!tt.running&&!tt.finished&&(tt.running=!0)}function pc(i){tt.state==="play"&&(tt.state="dying",tt.dieT=0,tt.deaths++,i==="caught"?(tt.caught++,i="spike"):i==="spike"?tt.spikes++:tt.falls++,ct.frozen=!0,os.release(),ve.play(i==="spike"?"spike":"land",{vol:i==="spike"?.9:.5,rate:i==="spike"?1:.6}),i==="spike"?(tt.shake=.18,Mh("hurt"),Un(ct.pos.clone().add(new C(0,.5,0)),10,"#ffffff",{speed:2.4,alpha:.6,life:.4})):Mh("fall"),zs(i==="spike"?[30,40,30]:25))}function ug(){let i=Ht.checkpoints[tt.cp];ct.reset(i.pos),ct.facing=Math.PI+Ue,ii=i.pos.y;for(let t of Ht.guards)t.reset();tt.state="play",Un(i.pos.clone(),14,ei,{speed:2.2,add:!0,alpha:.9,life:.6,size:.35,up:1.6}),ve.play("respawn",{vol:.45}),ct.squash=.25,se("flash").className=""}function dg(i){tt.cp=i.i,Ht.light(i),tt.cpTimes.push(tt.runTime),ve.play("checkpoint",{vol:.8}),zs(15),Un(i.pos.clone(),18,ei,{speed:3,add:!0,alpha:.9,life:.8,size:.32,up:2.2}),vc()}function fg(){tt.state="finish",tt.finished=!0,tt.running=!1,tt.finishT=0,ct.frozen=!0,os.release(),ct.vel.set(0,0,0),ct.facing=0,ct.cheer(),ve.play("exit",{vol:.9}),zs([20,60,40]);let i=!tt.best||tt.runTime<tt.best;if(i){tt.best=tt.runTime;try{localStorage.setItem("escape3d.best",String(tt.best))}catch{}}tt.newBest=i;for(let t=0;t<3;t++)setTimeout(()=>Un(ct.pos.clone().add(new C(0,1.2,0)),22,t===1?"#ffffff":ei,{speed:4.5,add:!0,alpha:1,life:1.1,size:.3,up:4,g:5,grow:.4}),t*260);se("flash").className="win",vc()}function Ih(){tt.cp=0,tt.deaths=tt.falls=tt.spikes=0,tt.runTime=0,tt.running=!1,tt.finished=!1,tt.cpTimes=[];for(let i of Ht.checkpoints)i.i>0&&Ht.unlight(i);Ht.exit.open=0,Ht.exit.opening=!1,se("panel").classList.add("hidden"),se("flash").className="",document.body.classList.remove("done"),Ht.resetProgress(),tt.caught=0,ct.reset(Ht.checkpoints[0].pos),ct.facing=Math.PI+Ht.start.yaw,ii=0,Ue=Ht.start.yaw,as=.46,Qr(1,!0),tt.state="play",vc(),ve.play("respawn",{vol:.4})}function zs(i){try{navigator.vibrate&&navigator.vibrate(i)}catch{}}function Mh(i){let t=se("flash");t.className="",t.offsetWidth,t.className=i}function xc(i){let t=Math.floor(i/60),e=i-t*60;return t+":"+(e<10?"0":"")+e.toFixed(1)}function vc(){let i=se("dots").children;for(let t=0;t<i.length;t++)i[t].classList.toggle("on",t<3?tt.cp>=t+1:tt.finished)}var Us={x:0,z:0,jumpPressed:!1,jumpHeld:!1};function pg(i){if(tt.t+=Dn,Ht.step(tt.t),tt.state!=="play"){ct.step(Dn,{x:0,z:0,jumpPressed:!1,jumpHeld:!1},Ht.solids);for(let n of Ht.guards)n.step(Dn,ct.pos,!1);return}if(!tt.running&&(Math.abs(i.x)+Math.abs(i.z)>.05||i.jumpPressed)&&hg(),tt.running&&(tt.runTime+=Dn),ct.step(Dn,i,Ht.solids),ct.jumped&&(ve.play("jump",{vol:.35,rate:1.1}),Un(ct.pos,4,"#d9d2c7",{speed:1.2,alpha:.4,life:.35})),ct.landed){let n=ct.lastFallSpeed;n>3&&(ve.play("land",{vol:Math.min(.8,.25+n*.04)}),Un(ct.pos,n>9?9:5,"#d9d2c7",{speed:1.4+n*.08,alpha:.5,life:.45}))}let t=Math.hypot(ct.vel.x,ct.vel.z);ct.grounded&&t>1.2?(tt.stepT-=Dn*(t/ct.SPEED),tt.stepT<=0&&(tt.stepT=.3,ve.play("step",{vol:.22,rate:.9+Math.random()*.25,minGap:.12}),t>4&&Math.random()<.5&&Un(ct.pos,1,"#d9d2c7",{speed:.5,alpha:.3,life:.35,size:.3}))):tt.stepT=.05;for(let n of Ht.hazards){if(!n.active||ct.pos.y>n.max.y||ct.pos.y+is<n.min.y)continue;let s=Math.max(n.min.x,Math.min(ct.pos.x,n.max.x)),r=Math.max(n.min.z,Math.min(ct.pos.z,n.max.z)),a=Ze*.75;if((ct.pos.x-s)**2+(ct.pos.z-r)**2<a*a){pc("spike");return}}if(ct.pos.y<Ht.killY){pc("fall");return}for(let n of Ht.checkpoints)n.i<=tt.cp||Math.hypot(ct.pos.x-n.pos.x,ct.pos.z-n.pos.z)<1&&Math.abs(ct.pos.y-n.pos.y)<.6&&dg(n);let e=Ht.exit;for(let n of Ht.buttons)n.pressed||!ct.grounded||Math.abs(ct.pos.y-n.pos.y)>.4||Math.hypot(ct.pos.x-n.pos.x,ct.pos.z-n.pos.z)>.8||(Ht.press(n),ve.play("door",{vol:.8,rate:.8}),ve.play("checkpoint",{vol:.6,rate:1.5}),zs(20),Un(n.pos.clone().add(new C(0,.3,0)),14,"#3dff7a",{speed:2.6,add:!0,alpha:.9,life:.6,size:.3,up:1.6}));for(let n of Ht.guards){let s=n.step(Dn,ct.pos,!0);if(n.alerted&&(n.alerted=!1,ve.play("spike",{vol:.35,rate:1.7}),zs(20)),s){pc("caught");return}}ct.pos.z<e.z-.35&&Math.abs(ct.pos.x-e.x)<e.DW/2&&fg()}var Sh=performance.now();function Ph(i){requestAnimationFrame(Ph);let t=(i-Sh)/1e3;Sh=i,t>.1&&(t=.1),yh&&(t=yh);let e=performance.now();if(tt.frames.push(t),tt.frames.length>600&&tt.frames.shift(),tt.state==="intro"){tt.introT+=t;let s=os.read();tt.introT>=Ch||s.jumpPressed||Math.abs(s.x)+Math.abs(s.z)>.1?(tt.state="play",tt.introDone=!0,Qr(1,!0)):lg(tt.introT)}if(tt.state!=="intro"){let s=tt.state==="play"?os.read():(os.read(),{x:0,z:0,jumpPressed:!1,jumpHeld:!1});tt.acc+=t,s.jumpPressed&&(tt.pendingJump=!0);let r=0;cg(t);let a=Math.cos(Ue),o=Math.sin(Ue),c=s.x*a+s.z*o,l=-s.x*o+s.z*a;for(;tt.acc>=Dn&&r<12;)Us.x=c,Us.z=l,Us.jumpHeld=s.jumpHeld||tt.pendingJump,Us.jumpPressed=tt.pendingJump,tt.pendingJump=!1,pg(Us),tt.acc-=Dn,r++;r===12&&(tt.acc=0),tt.state==="dying"&&(tt.dieT+=t,tt.dieT>.45&&ug()),tt.state==="finish"&&(tt.finishT+=t,tt.finishT>1.3&&se("panel").classList.contains("hidden")&&gg()),Qr(t,!1)}Ht.visual(tt.t,t),ct.render(t),ng(t),tt.shake=Math.max(0,tt.shake-t*.6);let n=-1/0;for(let s of Ht.solids)s.top<=ct.pos.y+.05&&ct.pos.x>s.min.x&&ct.pos.x<s.max.x&&ct.pos.z>s.min.z&&ct.pos.z<s.max.z&&s.top>n&&(n=s.top);if(ni.visible=n>-1/0,ni.visible){let s=ct.pos.y-n;ni.position.set(ct.pos.x,n+.02,ct.pos.z);let r=.9*Math.max(.45,1-s*.12);ni.scale.set(r,r,1),ni.material.opacity=Math.max(.25,1-s*.15)}gn.target.position.set(ct.pos.x*.5,ct.pos.y,ct.pos.z-3),gn.position.copy(gn.target.position).add(Q0),se("time").textContent=xc(tt.runTime),$e.render(an,ze),tt.cpu=performance.now()-e,mg(t)}var mc=0,gc=0,_c=0;function mg(i){if(mc+=i,gc++,_c+=i,mc<2)return;let t=_c/gc;mc=gc=_c=0,t>1/45&&rs>1&&(rs=Math.max(1,rs-.25),$e.setPixelRatio(rs),to())}function gg(){se("p-time").textContent=xc(tt.runTime),se("p-sub").textContent=tt.newBest?tt.deaths?`New best \xB7 ${tt.deaths} ${tt.deaths===1?"retry":"retries"}`:"New best \xB7 no retries":`Best ${xc(tt.best)} \xB7 ${tt.deaths} ${tt.deaths===1?"retry":"retries"}`,se("panel").classList.remove("hidden"),document.body.classList.add("done")}function to(){let i=innerWidth,t=innerHeight;$e.setSize(i,t,!1),ze.aspect=i/t,ze.fov=i/t<.75?62:52,ze.updateProjectionMatrix(),document.body.dataset.mode=i/t<.9?"portrait":"landscape"}addEventListener("resize",to);to();var _g=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window;document.body.classList.toggle("touch",_g);addEventListener("touchend",()=>{scrollY!==120&&scrollTo(0,120)},{passive:!0});scrollTo(0,120);window.__game={get state(){return tt.state},get t(){return tt.t},get runTime(){return tt.runTime},get cp(){return tt.cp},get deaths(){return tt.deaths},get falls(){return tt.falls},get spikes(){return tt.spikes},get caught(){return tt.caught},guards:()=>Ht.guards.map(i=>({x:i.pos.x,z:i.pos.z,vx:i.vx,vz:i.vz,mode:i.mode})),buttons:()=>Ht.buttons.map(i=>i.pressed),get finished(){return tt.finished},get pos(){return ct?{x:ct.pos.x,y:ct.pos.y,z:ct.pos.z}:null},get grounded(){return!!(ct&&ct.grounded)},get anim(){return ct&&ct.anim},get camYaw(){return Ue},get exitPos(){return{x:Ht.exit.x,y:Ht.exit.y+1.7,z:Ht.exit.z}},get cpPos(){return Ht.checkpoints.map(i=>({x:i.pos.x,y:i.pos.y,z:i.pos.z}))},get hero(){return ct&&ct.rigName},get doorOpen(){return Ht.exit.open},get pixelRatio(){return rs},movers:()=>Ht.movers.map(i=>({x:i.pos.x,y:i.pos.y,z:i.pos.z,W:i.W,D:i.D})),moverAt:(i,t)=>{let e=Ht.movers[i].at(t);return{x:e.x,z:e.z}},trap:i=>Ht.trapHeight(Ht.traps[0],i??tt.t),trapPeriod:Ht.traps[0].period,frames:()=>tt.frames.slice(),cpu:()=>tt.cpu,calls:()=>$e.info.render.calls,tris:()=>$e.info.render.triangles,camera:()=>({x:ze.position.x,y:ze.position.y,z:ze.position.z}),project:(i,t,e)=>{let n=new C(i,t,e).project(ze);return{x:(n.x+1)/2*innerWidth,y:(1-n.y)/2*innerHeight,inFront:n.z<1}}};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
