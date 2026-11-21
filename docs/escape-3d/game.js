var tc="170";var qh=0,Fc=1,Yh=2;var zl=1,ec=2,Rn=3,Qn=0,Le=1,Pe=2,Jn=0,$n=1,gn=2,Oc=3,Bc=4,Zh=5,gi=100,Jh=101,$h=102,Kh=103,jh=104,Qh=200,tu=201,eu=202,nu=203,Bo=204,zo=205,iu=206,su=207,ru=208,ou=209,au=210,cu=211,lu=212,hu=213,uu=214,Ho=0,ko=1,Vo=2,$i=3,Go=4,Wo=5,Xo=6,qo=7,Hl=0,du=1,fu=2,Kn=0,pu=1,mu=2,gu=3,Gr=4,_u=5,xu=6,yu=7;var kl=300,Ki=301,ji=302,Yo=303,Zo=304,Wr=306,vi=1e3,xi=1001,Jo=1002,cn=1003,vu=1004;var Ys=1005;var mn=1006,so=1007;var yi=1008;var Dn=1009,Vl=1010,Gl=1011,As=1012,nc=1013,Mi=1014,In=1015,Fs=1016,ic=1017,sc=1018,Qi=1020,Wl=35902,Xl=1021,ql=1022,an=1023,Yl=1024,Zl=1025,Yi=1026,ts=1027,Jl=1028,rc=1029,$l=1030,oc=1031;var ac=1033,xr=33776,yr=33777,vr=33778,Mr=33779,$o=35840,Ko=35841,jo=35842,Qo=35843,ta=36196,ea=37492,na=37496,ia=37808,sa=37809,ra=37810,oa=37811,aa=37812,ca=37813,la=37814,ha=37815,ua=37816,da=37817,fa=37818,pa=37819,ma=37820,ga=37821,Sr=36492,_a=36494,xa=36495,Kl=36283,ya=36284,va=36285,Ma=36286;var br=2300,Sa=2301,ro=2302,zc=2400,Hc=2401,kc=2402;var Mu=3200,Su=3201;var jl=0,bu=1,Yn="",pe="srgb",rs="srgb-linear",Xr="linear",se="srgb";var Ri=7680;var Vc=519,Eu=512,wu=513,Tu=514,Ql=515,Au=516,Ru=517,Cu=518,Iu=519,ba=35044;var Gc="300 es",Pn=2e3,Er=2001,ti=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var oo=Math.PI/180,Ea=180/Math.PI;function jn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ce[i&255]+Ce[i>>8&255]+Ce[i>>16&255]+Ce[i>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[n&255]+Ce[n>>8&255]+Ce[n>>16&255]+Ce[n>>24&255]).toLowerCase()}function Be(i,t,e){return Math.max(t,Math.min(e,i))}function Pu(i,t){return(i%t+t)%t}function ao(i,t,e){return(1-e)*i+e*t}function pn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function re(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Xt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Wt=class i{constructor(t,e,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],f=n[7],d=n[2],m=n[5],g=n[8],x=s[0],p=s[3],u=s[6],b=s[1],E=s[4],v=s[7],N=s[2],P=s[5],L=s[8];return r[0]=a*x+o*b+c*N,r[3]=a*p+o*E+c*P,r[6]=a*u+o*v+c*L,r[1]=l*x+h*b+f*N,r[4]=l*p+h*E+f*P,r[7]=l*u+h*v+f*L,r[2]=d*x+m*b+g*N,r[5]=d*p+m*E+g*P,r[8]=d*u+m*v+g*L,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=h*a-o*l,d=o*c-h*r,m=l*r-a*c,g=e*f+n*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=f*x,t[1]=(s*l-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=d*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-o*e)*x,t[6]=m*x,t[7]=(n*c-l*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(co.makeScale(t,e)),this}rotate(t){return this.premultiply(co.makeRotation(-t)),this}translate(t,e){return this.premultiply(co.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},co=new Wt;function th(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function wr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Lu(){let i=wr("canvas");return i.style.display="block",i}var Wc={};function Es(i){i in Wc||(Wc[i]=!0,console.warn(i))}function Du(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Uu(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Nu(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Kt={enabled:!0,workingColorSpace:rs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===se&&(i.r=Ln(i.r),i.g=Ln(i.g),i.b=Ln(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===se&&(i.r=Zi(i.r),i.g=Zi(i.g),i.b=Zi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Yn?Xr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Ln(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Xc=[.64,.33,.3,.6,.15,.06],qc=[.2126,.7152,.0722],Yc=[.3127,.329],Zc=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jc=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Kt.define({[rs]:{primaries:Xc,whitePoint:Yc,transfer:Xr,toXYZ:Zc,fromXYZ:Jc,luminanceCoefficients:qc,workingColorSpaceConfig:{unpackColorSpace:pe},outputColorSpaceConfig:{drawingBufferColorSpace:pe}},[pe]:{primaries:Xc,whitePoint:Yc,transfer:se,toXYZ:Zc,fromXYZ:Jc,luminanceCoefficients:qc,outputColorSpaceConfig:{drawingBufferColorSpace:pe}}});var Ci,wa=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ci===void 0&&(Ci=wr("canvas")),Ci.width=t.width,Ci.height=t.height;let n=Ci.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ci}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=wr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ln(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ln(e[n]/255)*255):e[n]=Ln(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Fu=0,Tr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=jn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(lo(s[a].image)):r.push(lo(s[a]))}else r=lo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function lo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?wa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ou=0,We=class i extends ti{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=xi,s=xi,r=mn,a=yi,o=an,c=Dn,l=i.DEFAULT_ANISOTROPY,h=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=jn(),this.name="",this.source=new Tr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==kl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vi:t.x=t.x-Math.floor(t.x);break;case xi:t.x=t.x<0?0:1;break;case Jo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vi:t.y=t.y-Math.floor(t.y);break;case xi:t.y=t.y<0?0:1;break;case Jo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=kl;We.DEFAULT_ANISOTROPY=1;var oe=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],f=c[8],d=c[1],m=c[5],g=c[9],x=c[2],p=c[6],u=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+x)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(l+1)/2,v=(m+1)/2,N=(u+1)/2,P=(h+d)/4,L=(f+x)/4,H=(g+p)/4;return E>v&&E>N?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=P/n,r=L/n):v>N?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=P/s,r=H/s):N<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(N),n=L/r,s=H/r),this.set(n,s,r,e),this}let b=Math.sqrt((p-g)*(p-g)+(f-x)*(f-x)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(f-x)/b,this.z=(d-h)/b,this.w=Math.acos((l+m+u-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ta=class extends ti{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new oe(0,0,t,e),this.scissorTest=!1,this.viewport=new oe(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new We(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Tr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Un=class extends Ta{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ar=class extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Aa=class extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ei=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],f=n[s+3],d=r[a+0],m=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f;return}if(o===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=x;return}if(f!==x||c!==d||l!==m||h!==g){let p=1-o,u=c*d+l*m+h*g+f*x,b=u>=0?1:-1,E=1-u*u;if(E>Number.EPSILON){let N=Math.sqrt(E),P=Math.atan2(N,u*b);p=Math.sin(p*P)/N,o=Math.sin(o*P)/N}let v=o*b;if(c=c*p+d*v,l=l*p+m*v,h=h*p+g*v,f=f*p+x*v,p===1-o){let N=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=N,l*=N,h*=N,f*=N}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],f=r[a],d=r[a+1],m=r[a+2],g=r[a+3];return t[e]=o*g+h*f+c*m-l*d,t[e+1]=c*g+h*d+l*f-o*m,t[e+2]=l*g+h*m+o*d-c*f,t[e+3]=h*g-o*f-c*d-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),f=o(r/2),d=c(n/2),m=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*f+l*m*g,this._y=l*m*f-d*h*g,this._z=l*h*g+d*m*f,this._w=l*h*f-d*m*g;break;case"YXZ":this._x=d*h*f+l*m*g,this._y=l*m*f-d*h*g,this._z=l*h*g-d*m*f,this._w=l*h*f+d*m*g;break;case"ZXY":this._x=d*h*f-l*m*g,this._y=l*m*f+d*h*g,this._z=l*h*g+d*m*f,this._w=l*h*f-d*m*g;break;case"ZYX":this._x=d*h*f-l*m*g,this._y=l*m*f+d*h*g,this._z=l*h*g-d*m*f,this._w=l*h*f+d*m*g;break;case"YZX":this._x=d*h*f+l*m*g,this._y=l*m*f+d*h*g,this._z=l*h*g-d*m*f,this._w=l*h*f-d*m*g;break;case"XZY":this._x=d*h*f-l*m*g,this._y=l*m*f-d*h*g,this._z=l*h*g+d*m*f,this._w=l*h*f+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],f=e[10],d=n+o+f;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(n>o&&n>f){let m=2*Math.sqrt(1+n-o-f);this._w=(h-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>f){let m=2*Math.sqrt(1+o-n-f);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+f-n-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Be(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),f=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($c.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($c.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+c*l+a*f-o*h,this.y=n+c*h+o*l-r*f,this.z=s+c*f+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ho.copy(this).projectOnVector(t),this.sub(ho)}reflect(t){return this.sub(ho.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ho=new I,$c=new ei,Nn=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,sn):sn.fromBufferAttribute(r,a),sn.applyMatrix4(t.matrixWorld),this.expandByPoint(sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Zs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zs.copy(n.boundingBox)),Zs.applyMatrix4(t.matrixWorld),this.union(Zs)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,sn),sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gs),Js.subVectors(this.max,gs),Ii.subVectors(t.a,gs),Pi.subVectors(t.b,gs),Li.subVectors(t.c,gs),kn.subVectors(Pi,Ii),Vn.subVectors(Li,Pi),li.subVectors(Ii,Li);let e=[0,-kn.z,kn.y,0,-Vn.z,Vn.y,0,-li.z,li.y,kn.z,0,-kn.x,Vn.z,0,-Vn.x,li.z,0,-li.x,-kn.y,kn.x,0,-Vn.y,Vn.x,0,-li.y,li.x,0];return!uo(e,Ii,Pi,Li,Js)||(e=[1,0,0,0,1,0,0,0,1],!uo(e,Ii,Pi,Li,Js))?!1:($s.crossVectors(kn,Vn),e=[$s.x,$s.y,$s.z],uo(e,Ii,Pi,Li,Js))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},bn=[new I,new I,new I,new I,new I,new I,new I,new I],sn=new I,Zs=new Nn,Ii=new I,Pi=new I,Li=new I,kn=new I,Vn=new I,li=new I,gs=new I,Js=new I,$s=new I,hi=new I;function uo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){hi.fromArray(i,r);let o=s.x*Math.abs(hi.x)+s.y*Math.abs(hi.y)+s.z*Math.abs(hi.z),c=t.dot(hi),l=e.dot(hi),h=n.dot(hi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Bu=new Nn,_s=new I,fo=new I,Rs=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Bu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_s.subVectors(t,this.center);let e=_s.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(_s,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_s.copy(t.center).add(fo)),this.expandByPoint(_s.copy(t.center).sub(fo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},En=new I,po=new I,Ks=new I,Gn=new I,mo=new I,js=new I,go=new I,Ra=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,En)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=En.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(En.copy(this.origin).addScaledVector(this.direction,e),En.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){po.copy(t).add(e).multiplyScalar(.5),Ks.copy(e).sub(t).normalize(),Gn.copy(this.origin).sub(po);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Ks),o=Gn.dot(this.direction),c=-Gn.dot(Ks),l=Gn.lengthSq(),h=Math.abs(1-a*a),f,d,m,g;if(h>0)if(f=a*c-o,d=a*o-c,g=r*h,f>=0)if(d>=-g)if(d<=g){let x=1/h;f*=x,d*=x,m=f*(f+a*d+2*o)+d*(a*f+d+2*c)+l}else d=r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;else d=-r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;else d<=-g?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-c),r),m=-f*f+d*(d+2*c)+l):d<=g?(f=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+l):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-c),r),m=-f*f+d*(d+2*c)+l);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(po).addScaledVector(Ks,d),m}intersectSphere(t,e){En.subVectors(t.center,this.origin);let n=En.dot(this.direction),s=En.dot(En)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-d.z)*f,c=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,c=(t.min.z-d.z)*f),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,En)!==null}intersectTriangle(t,e,n,s,r){mo.subVectors(e,t),js.subVectors(n,t),go.crossVectors(mo,js);let a=this.direction.dot(go),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Gn.subVectors(this.origin,t);let c=o*this.direction.dot(js.crossVectors(Gn,js));if(c<0)return null;let l=o*this.direction.dot(mo.cross(Gn));if(l<0||c+l>a)return null;let h=-o*Gn.dot(go);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},me=class i{constructor(t,e,n,s,r,a,o,c,l,h,f,d,m,g,x,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,f,d,m,g,x,p)}set(t,e,n,s,r,a,o,c,l,h,f,d,m,g,x,p){let u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=h,u[10]=f,u[14]=d,u[3]=m,u[7]=g,u[11]=x,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Di.setFromMatrixColumn(t,0).length(),r=1/Di.setFromMatrixColumn(t,1).length(),a=1/Di.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let d=a*h,m=a*f,g=o*h,x=o*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=m+g*l,e[5]=d-x*l,e[9]=-o*c,e[2]=x-d*l,e[6]=g+m*l,e[10]=a*c}else if(t.order==="YXZ"){let d=c*h,m=c*f,g=l*h,x=l*f;e[0]=d+x*o,e[4]=g*o-m,e[8]=a*l,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=m*o-g,e[6]=x+d*o,e[10]=a*c}else if(t.order==="ZXY"){let d=c*h,m=c*f,g=l*h,x=l*f;e[0]=d-x*o,e[4]=-a*f,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let d=a*h,m=a*f,g=o*h,x=o*f;e[0]=c*h,e[4]=g*l-m,e[8]=d*l+x,e[1]=c*f,e[5]=x*l+d,e[9]=m*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let d=a*c,m=a*l,g=o*c,x=o*l;e[0]=c*h,e[4]=x-d*f,e[8]=g*f+m,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=m*f+g,e[10]=d-x*f}else if(t.order==="XZY"){let d=a*c,m=a*l,g=o*c,x=o*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=d*f+x,e[5]=a*h,e[9]=m*f-g,e[2]=g*f-m,e[6]=o*h,e[10]=x*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zu,t,Hu)}lookAt(t,e,n){let s=this.elements;return Ve.subVectors(t,e),Ve.lengthSq()===0&&(Ve.z=1),Ve.normalize(),Wn.crossVectors(n,Ve),Wn.lengthSq()===0&&(Math.abs(n.z)===1?Ve.x+=1e-4:Ve.z+=1e-4,Ve.normalize(),Wn.crossVectors(n,Ve)),Wn.normalize(),Qs.crossVectors(Ve,Wn),s[0]=Wn.x,s[4]=Qs.x,s[8]=Ve.x,s[1]=Wn.y,s[5]=Qs.y,s[9]=Ve.y,s[2]=Wn.z,s[6]=Qs.z,s[10]=Ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],f=n[5],d=n[9],m=n[13],g=n[2],x=n[6],p=n[10],u=n[14],b=n[3],E=n[7],v=n[11],N=n[15],P=s[0],L=s[4],H=s[8],w=s[12],S=s[1],U=s[5],J=s[9],G=s[13],j=s[2],ct=s[6],Q=s[10],dt=s[14],$=s[3],gt=s[7],_t=s[11],Dt=s[15];return r[0]=a*P+o*S+c*j+l*$,r[4]=a*L+o*U+c*ct+l*gt,r[8]=a*H+o*J+c*Q+l*_t,r[12]=a*w+o*G+c*dt+l*Dt,r[1]=h*P+f*S+d*j+m*$,r[5]=h*L+f*U+d*ct+m*gt,r[9]=h*H+f*J+d*Q+m*_t,r[13]=h*w+f*G+d*dt+m*Dt,r[2]=g*P+x*S+p*j+u*$,r[6]=g*L+x*U+p*ct+u*gt,r[10]=g*H+x*J+p*Q+u*_t,r[14]=g*w+x*G+p*dt+u*Dt,r[3]=b*P+E*S+v*j+N*$,r[7]=b*L+E*U+v*ct+N*gt,r[11]=b*H+E*J+v*Q+N*_t,r[15]=b*w+E*G+v*dt+N*Dt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],f=t[6],d=t[10],m=t[14],g=t[3],x=t[7],p=t[11],u=t[15];return g*(+r*c*f-s*l*f-r*o*d+n*l*d+s*o*m-n*c*m)+x*(+e*c*m-e*l*d+r*a*d-s*a*m+s*l*h-r*c*h)+p*(+e*l*f-e*o*m-r*a*f+n*a*m+r*o*h-n*l*h)+u*(-s*o*h-e*c*f+e*o*d+s*a*f-n*a*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=t[9],d=t[10],m=t[11],g=t[12],x=t[13],p=t[14],u=t[15],b=f*p*l-x*d*l+x*c*m-o*p*m-f*c*u+o*d*u,E=g*d*l-h*p*l-g*c*m+a*p*m+h*c*u-a*d*u,v=h*x*l-g*f*l+g*o*m-a*x*m-h*o*u+a*f*u,N=g*f*c-h*x*c-g*o*d+a*x*d+h*o*p-a*f*p,P=e*b+n*E+s*v+r*N;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/P;return t[0]=b*L,t[1]=(x*d*r-f*p*r-x*s*m+n*p*m+f*s*u-n*d*u)*L,t[2]=(o*p*r-x*c*r+x*s*l-n*p*l-o*s*u+n*c*u)*L,t[3]=(f*c*r-o*d*r-f*s*l+n*d*l+o*s*m-n*c*m)*L,t[4]=E*L,t[5]=(h*p*r-g*d*r+g*s*m-e*p*m-h*s*u+e*d*u)*L,t[6]=(g*c*r-a*p*r-g*s*l+e*p*l+a*s*u-e*c*u)*L,t[7]=(a*d*r-h*c*r+h*s*l-e*d*l-a*s*m+e*c*m)*L,t[8]=v*L,t[9]=(g*f*r-h*x*r-g*n*m+e*x*m+h*n*u-e*f*u)*L,t[10]=(a*x*r-g*o*r+g*n*l-e*x*l-a*n*u+e*o*u)*L,t[11]=(h*o*r-a*f*r-h*n*l+e*f*l+a*n*m-e*o*m)*L,t[12]=N*L,t[13]=(h*x*s-g*f*s+g*n*d-e*x*d-h*n*p+e*f*p)*L,t[14]=(g*o*s-a*x*s-g*n*c+e*x*c+a*n*p-e*o*p)*L,t[15]=(a*f*s-h*o*s+h*n*c-e*f*c-a*n*d+e*o*d)*L,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,f=o+o,d=r*l,m=r*h,g=r*f,x=a*h,p=a*f,u=o*f,b=c*l,E=c*h,v=c*f,N=n.x,P=n.y,L=n.z;return s[0]=(1-(x+u))*N,s[1]=(m+v)*N,s[2]=(g-E)*N,s[3]=0,s[4]=(m-v)*P,s[5]=(1-(d+u))*P,s[6]=(p+b)*P,s[7]=0,s[8]=(g+E)*L,s[9]=(p-b)*L,s[10]=(1-(d+x))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Di.set(s[0],s[1],s[2]).length(),a=Di.set(s[4],s[5],s[6]).length(),o=Di.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],rn.copy(this);let l=1/r,h=1/a,f=1/o;return rn.elements[0]*=l,rn.elements[1]*=l,rn.elements[2]*=l,rn.elements[4]*=h,rn.elements[5]*=h,rn.elements[6]*=h,rn.elements[8]*=f,rn.elements[9]*=f,rn.elements[10]*=f,e.setFromRotationMatrix(rn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Pn){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),m,g;if(o===Pn)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Er)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Pn){let c=this.elements,l=1/(e-t),h=1/(n-s),f=1/(a-r),d=(e+t)*l,m=(n+s)*h,g,x;if(o===Pn)g=(a+r)*f,x=-2*f;else if(o===Er)g=r*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Di=new I,rn=new me,zu=new I(0,0,0),Hu=new I(1,1,1),Wn=new I,Qs=new I,Ve=new I,Kc=new me,jc=new ei,_n=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],f=s[2],d=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Be(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Be(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Kc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return jc.setFromEuler(this),this.setFromQuaternion(jc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_n.DEFAULT_ORDER="XYZ";var Rr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ku=0,Qc=new I,Ui=new ei,wn=new me,tr=new I,xs=new I,Vu=new I,Gu=new ei,tl=new I(1,0,0),el=new I(0,1,0),nl=new I(0,0,1),il={type:"added"},Wu={type:"removed"},Ni={type:"childadded",child:null},_o={type:"childremoved",child:null},De=class i extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new _n,n=new ei,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new Wt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.premultiply(Ui),this}rotateX(t){return this.rotateOnAxis(tl,t)}rotateY(t){return this.rotateOnAxis(el,t)}rotateZ(t){return this.rotateOnAxis(nl,t)}translateOnAxis(t,e){return Qc.copy(t).applyQuaternion(this.quaternion),this.position.add(Qc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(tl,t)}translateY(t){return this.translateOnAxis(el,t)}translateZ(t){return this.translateOnAxis(nl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?tr.copy(t):tr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(xs,tr,this.up):wn.lookAt(tr,xs,this.up),this.quaternion.setFromRotationMatrix(wn),s&&(wn.extractRotation(s.matrixWorld),Ui.setFromRotationMatrix(wn),this.quaternion.premultiply(Ui.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(il),Ni.child=t,this.dispatchEvent(Ni),Ni.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Wu),_o.child=t,this.dispatchEvent(_o),_o.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(il),Ni.child=t,this.dispatchEvent(Ni),Ni.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,t,Vu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,Gu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),f=a(t.shapes),d=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};De.DEFAULT_UP=new I(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var on=new I,Tn=new I,xo=new I,An=new I,Fi=new I,Oi=new I,sl=new I,yo=new I,vo=new I,Mo=new I,So=new oe,bo=new oe,Eo=new oe,Zn=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),on.subVectors(t,e),s.cross(on);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){on.subVectors(s,e),Tn.subVectors(n,e),xo.subVectors(t,e);let a=on.dot(on),o=on.dot(Tn),c=on.dot(xo),l=Tn.dot(Tn),h=Tn.dot(xo),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;let d=1/f,m=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,An)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,An.x),c.addScaledVector(a,An.y),c.addScaledVector(o,An.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return So.setScalar(0),bo.setScalar(0),Eo.setScalar(0),So.fromBufferAttribute(t,e),bo.fromBufferAttribute(t,n),Eo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(So,r.x),a.addScaledVector(bo,r.y),a.addScaledVector(Eo,r.z),a}static isFrontFacing(t,e,n,s){return on.subVectors(n,e),Tn.subVectors(t,e),on.cross(Tn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return on.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),on.cross(Tn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Fi.subVectors(s,n),Oi.subVectors(r,n),yo.subVectors(t,n);let c=Fi.dot(yo),l=Oi.dot(yo);if(c<=0&&l<=0)return e.copy(n);vo.subVectors(t,s);let h=Fi.dot(vo),f=Oi.dot(vo);if(h>=0&&f<=h)return e.copy(s);let d=c*f-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Fi,a);Mo.subVectors(t,r);let m=Fi.dot(Mo),g=Oi.dot(Mo);if(g>=0&&m<=g)return e.copy(r);let x=m*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Oi,o);let p=h*g-m*f;if(p<=0&&f-h>=0&&m-g>=0)return sl.subVectors(r,s),o=(f-h)/(f-h+(m-g)),e.copy(s).addScaledVector(sl,o);let u=1/(p+x+d);return a=x*u,o=d*u,e.copy(n).addScaledVector(Fi,a).addScaledVector(Oi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},eh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},er={h:0,s:0,l:0};function wo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var kt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Kt.workingColorSpace){if(t=Pu(t,1),e=Be(e,0,1),n=Be(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=wo(a,r,t+1/3),this.g=wo(a,r,t),this.b=wo(a,r,t-1/3)}return Kt.toWorkingColorSpace(this,s),this}setStyle(t,e=pe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=pe){let n=eh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ln(t.r),this.g=Ln(t.g),this.b=Ln(t.b),this}copyLinearToSRGB(t){return this.r=Zi(t.r),this.g=Zi(t.g),this.b=Zi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pe){return Kt.fromWorkingColorSpace(Ie.copy(this),t),Math.round(Be(Ie.r*255,0,255))*65536+Math.round(Be(Ie.g*255,0,255))*256+Math.round(Be(Ie.b*255,0,255))}getHexString(t=pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(Ie.copy(this),e);let n=Ie.r,s=Ie.g,r=Ie.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=pe){Kt.fromWorkingColorSpace(Ie.copy(this),t);let e=Ie.r,n=Ie.g,s=Ie.b;return t!==pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Xn),this.setHSL(Xn.h+t,Xn.s+e,Xn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Xn),t.getHSL(er);let n=ao(Xn.h,er.h,e),s=ao(Xn.s,er.s,e),r=ao(Xn.l,er.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ie=new kt;kt.NAMES=eh;var Xu=0,ni=class extends ti{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=jn(),this.name="",this.blending=$n,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bo,this.blendDst=zo,this.blendEquation=gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=$i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ri,this.stencilZFail=Ri,this.stencilZPass=Ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$n&&(n.blending=this.blending),this.side!==Qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Bo&&(n.blendSrc=this.blendSrc),this.blendDst!==zo&&(n.blendDst=this.blendDst),this.blendEquation!==gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$i&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ri&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ri&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ri&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Te=class extends ni{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=Hl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ye=new I,nr=new Xt,ve=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ba,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)nr.fromBufferAttribute(this,e),nr.applyMatrix3(t),this.setXY(e,nr.x,nr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=pn(e,this.array)),e}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=pn(e,this.array)),e}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=pn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=pn(e,this.array)),e}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),s=re(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),s=re(s,this.array),r=re(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ba&&(t.usage=this.usage),t}};var Cr=class extends ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ir=class extends ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ae=class extends ve{constructor(t,e,n){super(new Float32Array(t),e,n)}},qu=0,Ze=new me,To=new De,Bi=new I,Ge=new Nn,ys=new Nn,be=new I,Ae=class i extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(th(t)?Ir:Cr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Wt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ze.makeRotationFromQuaternion(t),this.applyMatrix4(Ze),this}rotateX(t){return Ze.makeRotationX(t),this.applyMatrix4(Ze),this}rotateY(t){return Ze.makeRotationY(t),this.applyMatrix4(Ze),this}rotateZ(t){return Ze.makeRotationZ(t),this.applyMatrix4(Ze),this}translate(t,e,n){return Ze.makeTranslation(t,e,n),this.applyMatrix4(Ze),this}scale(t,e,n){return Ze.makeScale(t,e,n),this.applyMatrix4(Ze),this}lookAt(t){return To.lookAt(t),To.updateMatrix(),this.applyMatrix4(To.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ae(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ge.setFromBufferAttribute(r),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,Ge.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,Ge.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(Ge.min),this.boundingBox.expandByPoint(Ge.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(Ge.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ys.setFromBufferAttribute(o),this.morphTargetsRelative?(be.addVectors(Ge.min,ys.min),Ge.expandByPoint(be),be.addVectors(Ge.max,ys.max),Ge.expandByPoint(be)):(Ge.expandByPoint(ys.min),Ge.expandByPoint(ys.max))}Ge.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)be.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(be));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)be.fromBufferAttribute(o,l),c&&(Bi.fromBufferAttribute(t,l),be.add(Bi)),s=Math.max(s,n.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ve(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let H=0;H<n.count;H++)o[H]=new I,c[H]=new I;let l=new I,h=new I,f=new I,d=new Xt,m=new Xt,g=new Xt,x=new I,p=new I;function u(H,w,S){l.fromBufferAttribute(n,H),h.fromBufferAttribute(n,w),f.fromBufferAttribute(n,S),d.fromBufferAttribute(r,H),m.fromBufferAttribute(r,w),g.fromBufferAttribute(r,S),h.sub(l),f.sub(l),m.sub(d),g.sub(d);let U=1/(m.x*g.y-g.x*m.y);isFinite(U)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(U),p.copy(f).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(U),o[H].add(x),o[w].add(x),o[S].add(x),c[H].add(p),c[w].add(p),c[S].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let H=0,w=b.length;H<w;++H){let S=b[H],U=S.start,J=S.count;for(let G=U,j=U+J;G<j;G+=3)u(t.getX(G+0),t.getX(G+1),t.getX(G+2))}let E=new I,v=new I,N=new I,P=new I;function L(H){N.fromBufferAttribute(s,H),P.copy(N);let w=o[H];E.copy(w),E.sub(N.multiplyScalar(N.dot(w))).normalize(),v.crossVectors(P,w);let U=v.dot(c[H])<0?-1:1;a.setXYZW(H,E.x,E.y,E.z,U)}for(let H=0,w=b.length;H<w;++H){let S=b[H],U=S.start,J=S.count;for(let G=U,j=U+J;G<j;G+=3)L(t.getX(G+0)),L(t.getX(G+1)),L(t.getX(G+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let s=new I,r=new I,a=new I,o=new I,c=new I,l=new I,h=new I,f=new I;if(t)for(let d=0,m=t.count;d<m;d+=3){let g=t.getX(d+0),x=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,p),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=e.count;d<m;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,f=o.normalized,d=new l.constructor(c.length*h),m=0,g=0;for(let x=0,p=c.length;x<p;x++){o.isInterleavedBufferAttribute?m=c[x]*o.data.stride+o.offset:m=c[x]*h;for(let u=0;u<h;u++)d[g++]=l[m++]}return new ve(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,f=l.length;h<f;h++){let d=l[h],m=t(d,n);c.push(m)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,d=l.length;f<d;f++){let m=l[f];h.push(m.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],f=r[l];for(let d=0,m=f.length;d<m;d++)h.push(f[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},rl=new me,ui=new Ra,ir=new Rs,ol=new I,sr=new I,rr=new I,or=new I,Ao=new I,ar=new I,al=new I,cr=new I,Nt=class extends De{constructor(t=new Ae,e=new Te){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ar.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],f=r[c];h!==0&&(Ao.fromBufferAttribute(f,t),a?ar.addScaledVector(Ao,h):ar.addScaledVector(Ao.sub(e),h))}e.add(ar)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere),ir.applyMatrix4(r),ui.copy(t.ray).recast(t.near),!(ir.containsPoint(ui.origin)===!1&&(ui.intersectSphere(ir,ol)===null||ui.origin.distanceToSquared(ol)>(t.far-t.near)**2))&&(rl.copy(r).invert(),ui.copy(t.ray).applyMatrix4(rl),!(n.boundingBox!==null&&ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ui)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let p=d[g],u=a[p.materialIndex],b=Math.max(p.start,m.start),E=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let v=b,N=E;v<N;v+=3){let P=o.getX(v),L=o.getX(v+1),H=o.getX(v+2);s=lr(this,u,t,n,l,h,f,P,L,H),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let p=g,u=x;p<u;p+=3){let b=o.getX(p),E=o.getX(p+1),v=o.getX(p+2);s=lr(this,a,t,n,l,h,f,b,E,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let p=d[g],u=a[p.materialIndex],b=Math.max(p.start,m.start),E=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let v=b,N=E;v<N;v+=3){let P=v,L=v+1,H=v+2;s=lr(this,u,t,n,l,h,f,P,L,H),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let p=g,u=x;p<u;p+=3){let b=p,E=p+1,v=p+2;s=lr(this,a,t,n,l,h,f,b,E,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Yu(i,t,e,n,s,r,a,o){let c;if(t.side===Le?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Qn,o),c===null)return null;cr.copy(o),cr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(cr);return l<e.near||l>e.far?null:{distance:l,point:cr.clone(),object:i}}function lr(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,sr),i.getVertexPosition(c,rr),i.getVertexPosition(l,or);let h=Yu(i,t,e,n,sr,rr,or,al);if(h){let f=new I;Zn.getBarycoord(al,sr,rr,or,f),s&&(h.uv=Zn.getInterpolatedAttribute(s,o,c,l,f,new Xt)),r&&(h.uv1=Zn.getInterpolatedAttribute(r,o,c,l,f,new Xt)),a&&(h.normal=Zn.getInterpolatedAttribute(a,o,c,l,f,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new I,materialIndex:0};Zn.getNormal(sr,rr,or,d.normal),h.face=d,h.barycoord=f}return h}var de=class i extends Ae{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],f=[],d=0,m=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ae(l,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(f,2));function g(x,p,u,b,E,v,N,P,L,H,w){let S=v/L,U=N/H,J=v/2,G=N/2,j=P/2,ct=L+1,Q=H+1,dt=0,$=0,gt=new I;for(let _t=0;_t<Q;_t++){let Dt=_t*U-G;for(let Zt=0;Zt<ct;Zt++){let jt=Zt*S-J;gt[x]=jt*b,gt[p]=Dt*E,gt[u]=j,l.push(gt.x,gt.y,gt.z),gt[x]=0,gt[p]=0,gt[u]=P>0?1:-1,h.push(gt.x,gt.y,gt.z),f.push(Zt/L),f.push(1-_t/H),dt+=1}}for(let _t=0;_t<H;_t++)for(let Dt=0;Dt<L;Dt++){let Zt=d+Dt+ct*_t,jt=d+Dt+ct*(_t+1),it=d+(Dt+1)+ct*(_t+1),_=d+(Dt+1)+ct*_t;c.push(Zt,jt,_),c.push(jt,it,_),$+=6}o.addGroup(m,$,w),m+=$,d+=dt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function es(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ne(i){let t={};for(let e=0;e<i.length;e++){let n=es(i[e]);for(let s in n)t[s]=n[s]}return t}function Zu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function nh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}var Ju={clone:es,merge:Ne},$u=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ku=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xn=class extends ni{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$u,this.fragmentShader=Ku,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=es(t.uniforms),this.uniformsGroups=Zu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Pr=class extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=Pn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},qn=new I,cl=new Xt,ll=new Xt,we=class extends Pr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ea*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(oo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ea*2*Math.atan(Math.tan(oo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(qn.x,qn.y).multiplyScalar(-t/qn.z),qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qn.x,qn.y).multiplyScalar(-t/qn.z)}getViewSize(t,e){return this.getViewBounds(t,cl,ll),e.subVectors(ll,cl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(oo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},zi=-90,Hi=1,Ca=class extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new we(zi,Hi,t,e);s.layers=this.layers,this.add(s);let r=new we(zi,Hi,t,e);r.layers=this.layers,this.add(r);let a=new we(zi,Hi,t,e);a.layers=this.layers,this.add(a);let o=new we(zi,Hi,t,e);o.layers=this.layers,this.add(o);let c=new we(zi,Hi,t,e);c.layers=this.layers,this.add(c);let l=new we(zi,Hi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Er)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(f,d,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Lr=class extends We{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ki,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ia=class extends Un{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Lr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:mn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new de(5,5,5),r=new xn({name:"CubemapFromEquirect",uniforms:es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Le,blending:Jn});r.uniforms.tEquirect.value=e;let a=new Nt(s,r),o=e.minFilter;return e.minFilter===yi&&(e.minFilter=mn),new Ca(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Ro=new I,ju=new I,Qu=new Wt,Cn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ro.subVectors(n,e).cross(ju.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ro),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Qu.getNormalMatrix(t),s=this.coplanarPoint(Ro).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},di=new Rs,hr=new I,Cs=class{constructor(t=new Cn,e=new Cn,n=new Cn,s=new Cn,r=new Cn,a=new Cn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Pn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],f=s[6],d=s[7],m=s[8],g=s[9],x=s[10],p=s[11],u=s[12],b=s[13],E=s[14],v=s[15];if(n[0].setComponents(c-r,d-l,p-m,v-u).normalize(),n[1].setComponents(c+r,d+l,p+m,v+u).normalize(),n[2].setComponents(c+a,d+h,p+g,v+b).normalize(),n[3].setComponents(c-a,d-h,p-g,v-b).normalize(),n[4].setComponents(c-o,d-f,p-x,v-E).normalize(),e===Pn)n[5].setComponents(c+o,d+f,p+x,v+E).normalize();else if(e===Er)n[5].setComponents(o,f,x,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(di)}intersectsSprite(t){return di.center.set(0,0,0),di.radius=.7071067811865476,di.applyMatrix4(t.matrixWorld),this.intersectsSphere(di)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(hr.x=s.normal.x>0?t.max.x:t.min.x,hr.y=s.normal.y>0?t.max.y:t.min.y,hr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(hr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ih(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function td(i){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,f=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){let h=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,h);else{f.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<f.length;m++){let g=f[d],x=f[m];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,f[d]=x)}f.length=d+1;for(let m=0,g=f.length;m<g;m++){let x=f[m];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var ze=class i extends Ae{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,f=t/o,d=e/c,m=[],g=[],x=[],p=[];for(let u=0;u<h;u++){let b=u*d-a;for(let E=0;E<l;E++){let v=E*f-r;g.push(v,-b,0),x.push(0,0,1),p.push(E/o),p.push(1-u/c)}}for(let u=0;u<c;u++)for(let b=0;b<o;b++){let E=b+l*u,v=b+l*(u+1),N=b+1+l*(u+1),P=b+1+l*u;m.push(E,v,P),m.push(v,N,P)}this.setIndex(m),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(x,3)),this.setAttribute("uv",new ae(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},ed=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nd=`#ifdef USE_ALPHAHASH
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
#endif`,id=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,od=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ad=`#ifdef USE_AOMAP
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
#endif`,cd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ld=`#ifdef USE_BATCHING
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
#endif`,hd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ud=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pd=`#ifdef USE_IRIDESCENCE
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
#endif`,md=`#ifdef USE_BUMPMAP
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
#endif`,gd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Md=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ed=`#define PI 3.141592653589793
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
} // validated`,wd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Td=`vec3 transformedNormal = objectNormal;
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
#endif`,Ad=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Id=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ld=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dd=`#ifdef USE_ENVMAP
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
#endif`,Ud=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nd=`#ifdef USE_ENVMAP
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
#endif`,Fd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Od=`#ifdef USE_ENVMAP
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
#endif`,Bd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vd=`#ifdef USE_GRADIENTMAP
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
}`,Gd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qd=`uniform bool receiveShadow;
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
#endif`,Yd=`#ifdef USE_ENVMAP
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
#endif`,Zd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$d=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jd=`PhysicalMaterial material;
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
#endif`,Qd=`struct PhysicalMaterial {
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
}`,tf=`
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
#endif`,ef=`#if defined( RE_IndirectDiffuse )
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
#endif`,nf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,of=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,af=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uf=`#if defined( USE_POINTS_UV )
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
#endif`,df=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ff=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_f=`#ifdef USE_MORPHTARGETS
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
#endif`,xf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ef=`#ifdef USE_NORMALMAP
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
#endif`,wf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Af=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,If=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Pf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Df=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Uf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ff=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Of=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hf=`float getShadowMask() {
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
}`,kf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vf=`#ifdef USE_SKINNING
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
#endif`,Gf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wf=`#ifdef USE_SKINNING
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
#endif`,Xf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jf=`#ifdef USE_TRANSMISSION
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
#endif`,$f=`#ifdef USE_TRANSMISSION
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
#endif`,Kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ep=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,np=`uniform sampler2D t2D;
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
}`,ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,op=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ap=`#include <common>
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
}`,cp=`#if DEPTH_PACKING == 3200
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
}`,lp=`#define DISTANCE
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
}`,hp=`#define DISTANCE
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
}`,up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fp=`uniform float scale;
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
}`,pp=`uniform vec3 diffuse;
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
}`,mp=`#include <common>
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
}`,gp=`uniform vec3 diffuse;
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
}`,_p=`#define LAMBERT
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
}`,xp=`#define LAMBERT
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
}`,yp=`#define MATCAP
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
}`,vp=`#define MATCAP
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
}`,Mp=`#define NORMAL
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
}`,Sp=`#define NORMAL
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
}`,bp=`#define PHONG
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
}`,Ep=`#define PHONG
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
}`,wp=`#define STANDARD
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
}`,Tp=`#define STANDARD
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
}`,Ap=`#define TOON
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
}`,Rp=`#define TOON
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
}`,Cp=`uniform float size;
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
}`,Ip=`uniform vec3 diffuse;
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
}`,Pp=`#include <common>
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
}`,Lp=`uniform vec3 color;
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
}`,Dp=`uniform float rotation;
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
}`,Up=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:ed,alphahash_pars_fragment:nd,alphamap_fragment:id,alphamap_pars_fragment:sd,alphatest_fragment:rd,alphatest_pars_fragment:od,aomap_fragment:ad,aomap_pars_fragment:cd,batching_pars_vertex:ld,batching_vertex:hd,begin_vertex:ud,beginnormal_vertex:dd,bsdfs:fd,iridescence_fragment:pd,bumpmap_pars_fragment:md,clipping_planes_fragment:gd,clipping_planes_pars_fragment:_d,clipping_planes_pars_vertex:xd,clipping_planes_vertex:yd,color_fragment:vd,color_pars_fragment:Md,color_pars_vertex:Sd,color_vertex:bd,common:Ed,cube_uv_reflection_fragment:wd,defaultnormal_vertex:Td,displacementmap_pars_vertex:Ad,displacementmap_vertex:Rd,emissivemap_fragment:Cd,emissivemap_pars_fragment:Id,colorspace_fragment:Pd,colorspace_pars_fragment:Ld,envmap_fragment:Dd,envmap_common_pars_fragment:Ud,envmap_pars_fragment:Nd,envmap_pars_vertex:Fd,envmap_physical_pars_fragment:Yd,envmap_vertex:Od,fog_vertex:Bd,fog_pars_vertex:zd,fog_fragment:Hd,fog_pars_fragment:kd,gradientmap_pars_fragment:Vd,lightmap_pars_fragment:Gd,lights_lambert_fragment:Wd,lights_lambert_pars_fragment:Xd,lights_pars_begin:qd,lights_toon_fragment:Zd,lights_toon_pars_fragment:Jd,lights_phong_fragment:$d,lights_phong_pars_fragment:Kd,lights_physical_fragment:jd,lights_physical_pars_fragment:Qd,lights_fragment_begin:tf,lights_fragment_maps:ef,lights_fragment_end:nf,logdepthbuf_fragment:sf,logdepthbuf_pars_fragment:rf,logdepthbuf_pars_vertex:of,logdepthbuf_vertex:af,map_fragment:cf,map_pars_fragment:lf,map_particle_fragment:hf,map_particle_pars_fragment:uf,metalnessmap_fragment:df,metalnessmap_pars_fragment:ff,morphinstance_vertex:pf,morphcolor_vertex:mf,morphnormal_vertex:gf,morphtarget_pars_vertex:_f,morphtarget_vertex:xf,normal_fragment_begin:yf,normal_fragment_maps:vf,normal_pars_fragment:Mf,normal_pars_vertex:Sf,normal_vertex:bf,normalmap_pars_fragment:Ef,clearcoat_normal_fragment_begin:wf,clearcoat_normal_fragment_maps:Tf,clearcoat_pars_fragment:Af,iridescence_pars_fragment:Rf,opaque_fragment:Cf,packing:If,premultiplied_alpha_fragment:Pf,project_vertex:Lf,dithering_fragment:Df,dithering_pars_fragment:Uf,roughnessmap_fragment:Nf,roughnessmap_pars_fragment:Ff,shadowmap_pars_fragment:Of,shadowmap_pars_vertex:Bf,shadowmap_vertex:zf,shadowmask_pars_fragment:Hf,skinbase_vertex:kf,skinning_pars_vertex:Vf,skinning_vertex:Gf,skinnormal_vertex:Wf,specularmap_fragment:Xf,specularmap_pars_fragment:qf,tonemapping_fragment:Yf,tonemapping_pars_fragment:Zf,transmission_fragment:Jf,transmission_pars_fragment:$f,uv_pars_fragment:Kf,uv_pars_vertex:jf,uv_vertex:Qf,worldpos_vertex:tp,background_vert:ep,background_frag:np,backgroundCube_vert:ip,backgroundCube_frag:sp,cube_vert:rp,cube_frag:op,depth_vert:ap,depth_frag:cp,distanceRGBA_vert:lp,distanceRGBA_frag:hp,equirect_vert:up,equirect_frag:dp,linedashed_vert:fp,linedashed_frag:pp,meshbasic_vert:mp,meshbasic_frag:gp,meshlambert_vert:_p,meshlambert_frag:xp,meshmatcap_vert:yp,meshmatcap_frag:vp,meshnormal_vert:Mp,meshnormal_frag:Sp,meshphong_vert:bp,meshphong_frag:Ep,meshphysical_vert:wp,meshphysical_frag:Tp,meshtoon_vert:Ap,meshtoon_frag:Rp,points_vert:Cp,points_frag:Ip,shadow_vert:Pp,shadow_frag:Lp,sprite_vert:Dp,sprite_frag:Up},xt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},fn={basic:{uniforms:Ne([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Ne([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new kt(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Ne([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Ne([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Ne([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new kt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Ne([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Ne([xt.points,xt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Ne([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Ne([xt.common,xt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Ne([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Ne([xt.sprite,xt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:Ne([xt.common,xt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:Ne([xt.lights,xt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};fn.physical={uniforms:Ne([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};var ur={r:0,b:0,g:0},fi=new _n,Np=new me;function Fp(i,t,e,n,s,r,a){let o=new kt(0),c=r===!0?0:1,l,h,f=null,d=0,m=null;function g(b){let E=b.isScene===!0?b.background:null;return E&&E.isTexture&&(E=(b.backgroundBlurriness>0?e:t).get(E)),E}function x(b){let E=!1,v=g(b);v===null?u(o,c):v&&v.isColor&&(u(v,1),E=!0);let N=i.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,a):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(b,E){let v=g(E);v&&(v.isCubeTexture||v.mapping===Wr)?(h===void 0&&(h=new Nt(new de(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:es(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,P,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),fi.copy(E.backgroundRotation),fi.x*=-1,fi.y*=-1,fi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Np.makeRotationFromEuler(fi)),h.material.toneMapped=Kt.getTransfer(v.colorSpace)!==se,(f!==v||d!==v.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,f=v,d=v.version,m=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Nt(new ze(2,2),new xn({name:"BackgroundMaterial",uniforms:es(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Kt.getTransfer(v.colorSpace)!==se,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||d!==v.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,f=v,d=v.version,m=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function u(b,E){b.getRGB(ur,nh(i)),n.buffers.color.setClear(ur.r,ur.g,ur.b,E,a)}return{getClearColor:function(){return o},setClearColor:function(b,E=1){o.set(b),c=E,u(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,u(o,c)},render:x,addToRenderList:p}}function Op(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(S,U,J,G,j){let ct=!1,Q=f(G,J,U);r!==Q&&(r=Q,l(r.object)),ct=m(S,G,J,j),ct&&g(S,G,J,j),j!==null&&t.update(j,i.ELEMENT_ARRAY_BUFFER),(ct||a)&&(a=!1,v(S,U,J,G),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function f(S,U,J){let G=J.wireframe===!0,j=n[S.id];j===void 0&&(j={},n[S.id]=j);let ct=j[U.id];ct===void 0&&(ct={},j[U.id]=ct);let Q=ct[G];return Q===void 0&&(Q=d(c()),ct[G]=Q),Q}function d(S){let U=[],J=[],G=[];for(let j=0;j<e;j++)U[j]=0,J[j]=0,G[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:J,attributeDivisors:G,object:S,attributes:{},index:null}}function m(S,U,J,G){let j=r.attributes,ct=U.attributes,Q=0,dt=J.getAttributes();for(let $ in dt)if(dt[$].location>=0){let _t=j[$],Dt=ct[$];if(Dt===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(Dt=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(Dt=S.instanceColor)),_t===void 0||_t.attribute!==Dt||Dt&&_t.data!==Dt.data)return!0;Q++}return r.attributesNum!==Q||r.index!==G}function g(S,U,J,G){let j={},ct=U.attributes,Q=0,dt=J.getAttributes();for(let $ in dt)if(dt[$].location>=0){let _t=ct[$];_t===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(_t=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(_t=S.instanceColor));let Dt={};Dt.attribute=_t,_t&&_t.data&&(Dt.data=_t.data),j[$]=Dt,Q++}r.attributes=j,r.attributesNum=Q,r.index=G}function x(){let S=r.newAttributes;for(let U=0,J=S.length;U<J;U++)S[U]=0}function p(S){u(S,0)}function u(S,U){let J=r.newAttributes,G=r.enabledAttributes,j=r.attributeDivisors;J[S]=1,G[S]===0&&(i.enableVertexAttribArray(S),G[S]=1),j[S]!==U&&(i.vertexAttribDivisor(S,U),j[S]=U)}function b(){let S=r.newAttributes,U=r.enabledAttributes;for(let J=0,G=U.length;J<G;J++)U[J]!==S[J]&&(i.disableVertexAttribArray(J),U[J]=0)}function E(S,U,J,G,j,ct,Q){Q===!0?i.vertexAttribIPointer(S,U,J,j,ct):i.vertexAttribPointer(S,U,J,G,j,ct)}function v(S,U,J,G){x();let j=G.attributes,ct=J.getAttributes(),Q=U.defaultAttributeValues;for(let dt in ct){let $=ct[dt];if($.location>=0){let gt=j[dt];if(gt===void 0&&(dt==="instanceMatrix"&&S.instanceMatrix&&(gt=S.instanceMatrix),dt==="instanceColor"&&S.instanceColor&&(gt=S.instanceColor)),gt!==void 0){let _t=gt.normalized,Dt=gt.itemSize,Zt=t.get(gt);if(Zt===void 0)continue;let jt=Zt.buffer,it=Zt.type,_=Zt.bytesPerElement,A=it===i.INT||it===i.UNSIGNED_INT||gt.gpuType===nc;if(gt.isInterleavedBufferAttribute){let C=gt.data,B=C.stride,k=gt.offset;if(C.isInstancedInterleavedBuffer){for(let Y=0;Y<$.locationSize;Y++)u($.location+Y,C.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=C.meshPerAttribute*C.count)}else for(let Y=0;Y<$.locationSize;Y++)p($.location+Y);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let Y=0;Y<$.locationSize;Y++)E($.location+Y,Dt/$.locationSize,it,_t,B*_,(k+Dt/$.locationSize*Y)*_,A)}else{if(gt.isInstancedBufferAttribute){for(let C=0;C<$.locationSize;C++)u($.location+C,gt.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let C=0;C<$.locationSize;C++)p($.location+C);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let C=0;C<$.locationSize;C++)E($.location+C,Dt/$.locationSize,it,_t,Dt*_,Dt/$.locationSize*C*_,A)}}else if(Q!==void 0){let _t=Q[dt];if(_t!==void 0)switch(_t.length){case 2:i.vertexAttrib2fv($.location,_t);break;case 3:i.vertexAttrib3fv($.location,_t);break;case 4:i.vertexAttrib4fv($.location,_t);break;default:i.vertexAttrib1fv($.location,_t)}}}}b()}function N(){H();for(let S in n){let U=n[S];for(let J in U){let G=U[J];for(let j in G)h(G[j].object),delete G[j];delete U[J]}delete n[S]}}function P(S){if(n[S.id]===void 0)return;let U=n[S.id];for(let J in U){let G=U[J];for(let j in G)h(G[j].object),delete G[j];delete U[J]}delete n[S.id]}function L(S){for(let U in n){let J=n[U];if(J[S.id]===void 0)continue;let G=J[S.id];for(let j in G)h(G[j].object),delete G[j];delete J[S.id]}}function H(){w(),a=!0,r!==s&&(r=s,l(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:H,resetDefaultState:w,dispose:N,releaseStatesOfGeometry:P,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:p,disableUnusedAttributes:b}}function Bp(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,f){f!==0&&(i.drawArraysInstanced(n,l,h,f),e.update(h,n,f))}function o(l,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,f);let m=0;for(let g=0;g<f;g++)m+=h[g];e.update(m,n,1)}function c(l,h,f,d){if(f===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,f);let g=0;for(let x=0;x<f;x++)g+=h[x]*d[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function zp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let L=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(L){return!(L!==an&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){let H=L===Fs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==Dn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==In&&!H)}function c(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),N=g>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:v,vertexTextures:N,maxSamples:P}}function Hp(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Cn,o=new Wt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let m=f.length!==0||d||n!==0||s;return s=d,n=f.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,m){let g=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,u=i.get(f);if(!s||g===null||g.length===0||r&&!p)r?h(null):l();else{let b=r?0:n,E=b*4,v=u.clippingState||null;c.value=v,v=h(g,d,E,m);for(let N=0;N!==E;++N)v[N]=e[N];u.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,d,m,g){let x=f!==null?f.length:0,p=null;if(x!==0){if(p=c.value,g!==!0||p===null){let u=m+x*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<u)&&(p=new Float32Array(u));for(let E=0,v=m;E!==x;++E,v+=4)a.copy(f[E]).applyMatrix4(b,o),a.normal.toArray(p,v),p[v+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function kp(i){let t=new WeakMap;function e(a,o){return o===Yo?a.mapping=Ki:o===Zo&&(a.mapping=ji),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Yo||o===Zo)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Ia(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Dr=class extends Pr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},qi=4,hl=[.125,.215,.35,.446,.526,.582],_i=20,Co=new Dr,ul=new kt,Io=null,Po=0,Lo=0,Do=!1,mi=(1+Math.sqrt(5))/2,ki=1/mi,dl=[new I(-mi,ki,0),new I(mi,ki,0),new I(-ki,0,mi),new I(ki,0,mi),new I(0,mi,-ki),new I(0,mi,ki),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Ur=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Io=this._renderer.getRenderTarget(),Po=this._renderer.getActiveCubeFace(),Lo=this._renderer.getActiveMipmapLevel(),Do=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ml(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Io,Po,Lo),this._renderer.xr.enabled=Do,t.scissorTest=!1,dr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ki||t.mapping===ji?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Io=this._renderer.getRenderTarget(),Po=this._renderer.getActiveCubeFace(),Lo=this._renderer.getActiveMipmapLevel(),Do=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:Fs,format:an,colorSpace:rs,depthBuffer:!1},s=fl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fl(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vp(r)),this._blurMaterial=Gp(r,t,e)}return s}_compileMaterial(t){let e=new Nt(this._lodPlanes[0],t);this._renderer.compile(e,Co)}_sceneToCubeUV(t,e,n,s){let o=new we(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(ul),h.toneMapping=Kn,h.autoClear=!1;let m=new Te({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}),g=new Nt(new de,m),x=!1,p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,x=!0):(m.color.copy(ul),x=!0);for(let u=0;u<6;u++){let b=u%3;b===0?(o.up.set(0,c[u],0),o.lookAt(l[u],0,0)):b===1?(o.up.set(0,0,c[u]),o.lookAt(0,l[u],0)):(o.up.set(0,c[u],0),o.lookAt(0,0,l[u]));let E=this._cubeSize;dr(s,b*E,u>2?E:0,E,E),h.setRenderTarget(s),x&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=f,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ki||t.mapping===ji;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ml()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pl());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Nt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;dr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Co)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=dl[(s-r-1)%dl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new Nt(this._lodPlanes[s],l),d=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*_i-1),x=r/g,p=isFinite(r)?1+Math.floor(h*x):_i;p>_i&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${_i}`);let u=[],b=0;for(let L=0;L<_i;++L){let H=L/x,w=Math.exp(-H*H/2);u.push(w),L===0?b+=w:L<p&&(b+=2*w)}for(let L=0;L<u.length;L++)u[L]=u[L]/b;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-n;let v=this._sizeLods[s],N=3*v*(s>E-qi?s-E+qi:0),P=4*(this._cubeSize-v);dr(e,N,P,3*v,2*v),c.setRenderTarget(e),c.render(f,Co)}};function Vp(i){let t=[],e=[],n=[],s=i,r=i-qi+1+hl.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-qi?c=hl[a-i+qi-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,f=1+l,d=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,g=6,x=3,p=2,u=1,b=new Float32Array(x*g*m),E=new Float32Array(p*g*m),v=new Float32Array(u*g*m);for(let P=0;P<m;P++){let L=P%3*2/3-1,H=P>2?0:-1,w=[L,H,0,L+2/3,H,0,L+2/3,H+1,0,L,H,0,L+2/3,H+1,0,L,H+1,0];b.set(w,x*g*P),E.set(d,p*g*P);let S=[P,P,P,P,P,P];v.set(S,u*g*P)}let N=new Ae;N.setAttribute("position",new ve(b,x)),N.setAttribute("uv",new ve(E,p)),N.setAttribute("faceIndex",new ve(v,u)),t.push(N),s>qi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function fl(i,t,e){let n=new Un(i,t,e);return n.texture.mapping=Wr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function dr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Gp(i,t,e){let n=new Float32Array(_i),s=new I(0,1,0);return new xn({name:"SphericalGaussianBlur",defines:{n:_i,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:cc(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function pl(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cc(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function ml(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function cc(){return`

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
	`}function Wp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Yo||c===Zo,h=c===Ki||c===ji;if(l||h){let f=t.get(o),d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Ur(i)),f=l?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{let m=o.image;return l&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new Ur(i)),f=l?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Xp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Es("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function qp(i,t,e,n){let s={},r=new WeakMap;function a(f){let d=f.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let p=0,u=x.length;p<u;p++)t.remove(x[p])}d.removeEventListener("dispose",a),delete s[d.id];let m=r.get(d);m&&(t.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(f){let d=f.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let m=f.morphAttributes;for(let g in m){let x=m[g];for(let p=0,u=x.length;p<u;p++)t.update(x[p],i.ARRAY_BUFFER)}}function l(f){let d=[],m=f.index,g=f.attributes.position,x=0;if(m!==null){let b=m.array;x=m.version;for(let E=0,v=b.length;E<v;E+=3){let N=b[E+0],P=b[E+1],L=b[E+2];d.push(N,P,P,L,L,N)}}else if(g!==void 0){let b=g.array;x=g.version;for(let E=0,v=b.length/3-1;E<v;E+=3){let N=E+0,P=E+1,L=E+2;d.push(N,P,P,L,L,N)}}else return;let p=new(th(d)?Ir:Cr)(d,1);p.version=x;let u=r.get(f);u&&t.remove(u),r.set(f,p)}function h(f){let d=r.get(f);if(d){let m=f.index;m!==null&&d.version<m.version&&l(f)}else l(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function Yp(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,m){i.drawElements(n,m,r,d*a),e.update(m,n,1)}function l(d,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,d*a,g),e.update(m,n,g))}function h(d,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,d,0,g);let p=0;for(let u=0;u<g;u++)p+=m[u];e.update(p,n,1)}function f(d,m,g,x){if(g===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<d.length;u++)l(d[u]/a,m[u],x[u]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,d,0,x,0,g);let u=0;for(let b=0;b<g;b++)u+=m[b]*x[b];e.update(u,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Zp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Jp(i,t,e){let n=new WeakMap,s=new oe;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==f){let w=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],E=0;m===!0&&(E=1),g===!0&&(E=2),x===!0&&(E=3);let v=o.attributes.position.count*E,N=1;v>t.maxTextureSize&&(N=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let P=new Float32Array(v*N*4*f),L=new Ar(P,v,N,f);L.type=In,L.needsUpdate=!0;let H=E*4;for(let S=0;S<f;S++){let U=p[S],J=u[S],G=b[S],j=v*N*4*S;for(let ct=0;ct<U.count;ct++){let Q=ct*H;m===!0&&(s.fromBufferAttribute(U,ct),P[j+Q+0]=s.x,P[j+Q+1]=s.y,P[j+Q+2]=s.z,P[j+Q+3]=0),g===!0&&(s.fromBufferAttribute(J,ct),P[j+Q+4]=s.x,P[j+Q+5]=s.y,P[j+Q+6]=s.z,P[j+Q+7]=0),x===!0&&(s.fromBufferAttribute(G,ct),P[j+Q+8]=s.x,P[j+Q+9]=s.y,P[j+Q+10]=s.z,P[j+Q+11]=G.itemSize===4?s.w:1)}}d={count:f,texture:L,size:new Xt(v,N)},n.set(o,d),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let x=0;x<l.length;x++)m+=l[x];let g=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function $p(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,f=t.get(c,h);if(s.get(f)!==l&&(t.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return f}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}var Nr=class extends We{constructor(t,e,n,s,r,a,o,c,l,h=Yi){if(h!==Yi&&h!==ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Yi&&(n=Mi),n===void 0&&h===ts&&(n=Qi),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:cn,this.minFilter=c!==void 0?c:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},sh=new We,gl=new Nr(1,1),rh=new Ar,oh=new Aa,ah=new Lr,_l=[],xl=[],yl=new Float32Array(16),vl=new Float32Array(9),Ml=new Float32Array(4);function os(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=_l[s];if(r===void 0&&(r=new Float32Array(s),_l[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Me(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Se(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function qr(i,t){let e=xl[t];e===void 0&&(e=new Int32Array(t),xl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Kp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function jp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2fv(this.addr,t),Se(e,t)}}function Qp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;i.uniform3fv(this.addr,t),Se(e,t)}}function tm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4fv(this.addr,t),Se(e,t)}}function em(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;Ml.set(n),i.uniformMatrix2fv(this.addr,!1,Ml),Se(e,n)}}function nm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;vl.set(n),i.uniformMatrix3fv(this.addr,!1,vl),Se(e,n)}}function im(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;yl.set(n),i.uniformMatrix4fv(this.addr,!1,yl),Se(e,n)}}function sm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function rm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2iv(this.addr,t),Se(e,t)}}function om(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3iv(this.addr,t),Se(e,t)}}function am(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4iv(this.addr,t),Se(e,t)}}function cm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function lm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2uiv(this.addr,t),Se(e,t)}}function hm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3uiv(this.addr,t),Se(e,t)}}function um(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4uiv(this.addr,t),Se(e,t)}}function dm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(gl.compareFunction=Ql,r=gl):r=sh,e.setTexture2D(t||r,s)}function fm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||oh,s)}function pm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ah,s)}function mm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||rh,s)}function gm(i){switch(i){case 5126:return Kp;case 35664:return jp;case 35665:return Qp;case 35666:return tm;case 35674:return em;case 35675:return nm;case 35676:return im;case 5124:case 35670:return sm;case 35667:case 35671:return rm;case 35668:case 35672:return om;case 35669:case 35673:return am;case 5125:return cm;case 36294:return lm;case 36295:return hm;case 36296:return um;case 35678:case 36198:case 36298:case 36306:case 35682:return dm;case 35679:case 36299:case 36307:return fm;case 35680:case 36300:case 36308:case 36293:return pm;case 36289:case 36303:case 36311:case 36292:return mm}}function _m(i,t){i.uniform1fv(this.addr,t)}function xm(i,t){let e=os(t,this.size,2);i.uniform2fv(this.addr,e)}function ym(i,t){let e=os(t,this.size,3);i.uniform3fv(this.addr,e)}function vm(i,t){let e=os(t,this.size,4);i.uniform4fv(this.addr,e)}function Mm(i,t){let e=os(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Sm(i,t){let e=os(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function bm(i,t){let e=os(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Em(i,t){i.uniform1iv(this.addr,t)}function wm(i,t){i.uniform2iv(this.addr,t)}function Tm(i,t){i.uniform3iv(this.addr,t)}function Am(i,t){i.uniform4iv(this.addr,t)}function Rm(i,t){i.uniform1uiv(this.addr,t)}function Cm(i,t){i.uniform2uiv(this.addr,t)}function Im(i,t){i.uniform3uiv(this.addr,t)}function Pm(i,t){i.uniform4uiv(this.addr,t)}function Lm(i,t,e){let n=this.cache,s=t.length,r=qr(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||sh,r[a])}function Dm(i,t,e){let n=this.cache,s=t.length,r=qr(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||oh,r[a])}function Um(i,t,e){let n=this.cache,s=t.length,r=qr(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||ah,r[a])}function Nm(i,t,e){let n=this.cache,s=t.length,r=qr(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||rh,r[a])}function Fm(i){switch(i){case 5126:return _m;case 35664:return xm;case 35665:return ym;case 35666:return vm;case 35674:return Mm;case 35675:return Sm;case 35676:return bm;case 5124:case 35670:return Em;case 35667:case 35671:return wm;case 35668:case 35672:return Tm;case 35669:case 35673:return Am;case 5125:return Rm;case 36294:return Cm;case 36295:return Im;case 36296:return Pm;case 35678:case 36198:case 36298:case 36306:case 35682:return Lm;case 35679:case 36299:case 36307:return Dm;case 35680:case 36300:case 36308:case 36293:return Um;case 36289:case 36303:case 36311:case 36292:return Nm}}var Pa=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=gm(e.type)}},La=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Fm(e.type)}},Da=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Uo=/(\w+)(\])?(\[|\.)?/g;function Sl(i,t){i.seq.push(t),i.map[t.id]=t}function Om(i,t,e){let n=i.name,s=n.length;for(Uo.lastIndex=0;;){let r=Uo.exec(n),a=Uo.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Sl(e,l===void 0?new Pa(o,i,t):new La(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new Da(o),Sl(e,f)),e=f}}}var Ji=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Om(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function bl(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Bm=37297,zm=0;function Hm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var El=new Wt;function km(i){Kt._getMatrix(El,Kt.workingColorSpace,i);let t=`mat3( ${El.elements.map(e=>e.toFixed(4))} )`;switch(Kt.getTransfer(i)){case Xr:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function wl(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Hm(i.getShaderSource(t),a)}else return s}function Vm(i,t){let e=km(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Gm(i,t){let e;switch(t){case pu:e="Linear";break;case mu:e="Reinhard";break;case gu:e="Cineon";break;case Gr:e="ACESFilmic";break;case xu:e="AgX";break;case yu:e="Neutral";break;case _u:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var fr=new I;function Wm(){Kt.getLuminanceCoefficients(fr);let i=fr.x.toFixed(4),t=fr.y.toFixed(4),e=fr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ws).join(`
`)}function qm(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ym(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ws(i){return i!==""}function Tl(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Al(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Zm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ua(i){return i.replace(Zm,$m)}var Jm=new Map;function $m(i,t){let e=Yt[t];if(e===void 0){let n=Jm.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ua(e)}var Km=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rl(i){return i.replace(Km,jm)}function jm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Cl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Qm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===zl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ec?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Rn&&(t="SHADOWMAP_TYPE_VSM"),t}function t0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ki:case ji:t="ENVMAP_TYPE_CUBE";break;case Wr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function e0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ji:t="ENVMAP_MODE_REFRACTION";break}return t}function n0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Hl:t="ENVMAP_BLENDING_MULTIPLY";break;case du:t="ENVMAP_BLENDING_MIX";break;case fu:t="ENVMAP_BLENDING_ADD";break}return t}function i0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function s0(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=Qm(e),l=t0(e),h=e0(e),f=n0(e),d=i0(e),m=Xm(e),g=qm(r),x=s.createProgram(),p,u,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ws).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ws).join(`
`),u.length>0&&(u+=`
`)):(p=[Cl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ws).join(`
`),u=[Cl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Kn?"#define TONE_MAPPING":"",e.toneMapping!==Kn?Yt.tonemapping_pars_fragment:"",e.toneMapping!==Kn?Gm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,Vm("linearToOutputTexel",e.outputColorSpace),Wm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ws).join(`
`)),a=Ua(a),a=Tl(a,e),a=Al(a,e),o=Ua(o),o=Tl(o,e),o=Al(o,e),a=Rl(a),o=Rl(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",e.glslVersion===Gc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Gc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let E=b+p+a,v=b+u+o,N=bl(s,s.VERTEX_SHADER,E),P=bl(s,s.FRAGMENT_SHADER,v);s.attachShader(x,N),s.attachShader(x,P),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function L(U){if(i.debug.checkShaderErrors){let J=s.getProgramInfoLog(x).trim(),G=s.getShaderInfoLog(N).trim(),j=s.getShaderInfoLog(P).trim(),ct=!0,Q=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ct=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,N,P);else{let dt=wl(s,N,"vertex"),$=wl(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+J+`
`+dt+`
`+$)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(G===""||j==="")&&(Q=!1);Q&&(U.diagnostics={runnable:ct,programLog:J,vertexShader:{log:G,prefix:p},fragmentShader:{log:j,prefix:u}})}s.deleteShader(N),s.deleteShader(P),H=new Ji(s,x),w=Ym(s,x)}let H;this.getUniforms=function(){return H===void 0&&L(this),H};let w;this.getAttributes=function(){return w===void 0&&L(this),w};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,Bm)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=zm++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=N,this.fragmentShader=P,this}var r0=0,Na=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Fa(t),e.set(t,n)),n}},Fa=class{constructor(t){this.id=r0++,this.code=t,this.usedTimes=0}};function o0(i,t,e,n,s,r,a){let o=new Rr,c=new Na,l=new Set,h=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return l.add(w),w===0?"uv":`uv${w}`}function p(w,S,U,J,G){let j=J.fog,ct=G.geometry,Q=w.isMeshStandardMaterial?J.environment:null,dt=(w.isMeshStandardMaterial?e:t).get(w.envMap||Q),$=dt&&dt.mapping===Wr?dt.image.height:null,gt=g[w.type];w.precision!==null&&(m=s.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));let _t=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,Dt=_t!==void 0?_t.length:0,Zt=0;ct.morphAttributes.position!==void 0&&(Zt=1),ct.morphAttributes.normal!==void 0&&(Zt=2),ct.morphAttributes.color!==void 0&&(Zt=3);let jt,it,_,A;if(gt){let ne=fn[gt];jt=ne.vertexShader,it=ne.fragmentShader}else jt=w.vertexShader,it=w.fragmentShader,c.update(w),_=c.getVertexShaderID(w),A=c.getFragmentShaderID(w);let C=i.getRenderTarget(),B=i.state.buffers.depth.getReversed(),k=G.isInstancedMesh===!0,Y=G.isBatchedMesh===!0,D=!!w.map,q=!!w.matcap,et=!!dt,R=!!w.aoMap,ht=!!w.lightMap,ot=!!w.bumpMap,lt=!!w.normalMap,ut=!!w.displacementMap,Ut=!!w.emissiveMap,mt=!!w.metalnessMap,T=!!w.roughnessMap,y=w.anisotropy>0,V=w.clearcoat>0,tt=w.dispersion>0,rt=w.iridescence>0,nt=w.sheen>0,Ct=w.transmission>0,yt=y&&!!w.anisotropyMap,Tt=V&&!!w.clearcoatMap,$t=V&&!!w.clearcoatNormalMap,ft=V&&!!w.clearcoatRoughnessMap,At=rt&&!!w.iridescenceMap,Bt=rt&&!!w.iridescenceThicknessMap,zt=nt&&!!w.sheenColorMap,Rt=nt&&!!w.sheenRoughnessMap,Jt=!!w.specularMap,qt=!!w.specularColorMap,ce=!!w.specularIntensityMap,F=Ct&&!!w.transmissionMap,vt=Ct&&!!w.thicknessMap,K=!!w.gradientMap,at=!!w.alphaMap,Et=w.alphaTest>0,Mt=!!w.alphaHash,Vt=!!w.extensions,_e=Kn;w.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(_e=i.toneMapping);let Re={shaderID:gt,shaderType:w.type,shaderName:w.name,vertexShader:jt,fragmentShader:it,defines:w.defines,customVertexShaderID:_,customFragmentShaderID:A,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:Y,batchingColor:Y&&G._colorsTexture!==null,instancing:k,instancingColor:k&&G.instanceColor!==null,instancingMorph:k&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:C===null?i.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:rs,alphaToCoverage:!!w.alphaToCoverage,map:D,matcap:q,envMap:et,envMapMode:et&&dt.mapping,envMapCubeUVHeight:$,aoMap:R,lightMap:ht,bumpMap:ot,normalMap:lt,displacementMap:d&&ut,emissiveMap:Ut,normalMapObjectSpace:lt&&w.normalMapType===bu,normalMapTangentSpace:lt&&w.normalMapType===jl,metalnessMap:mt,roughnessMap:T,anisotropy:y,anisotropyMap:yt,clearcoat:V,clearcoatMap:Tt,clearcoatNormalMap:$t,clearcoatRoughnessMap:ft,dispersion:tt,iridescence:rt,iridescenceMap:At,iridescenceThicknessMap:Bt,sheen:nt,sheenColorMap:zt,sheenRoughnessMap:Rt,specularMap:Jt,specularColorMap:qt,specularIntensityMap:ce,transmission:Ct,transmissionMap:F,thicknessMap:vt,gradientMap:K,opaque:w.transparent===!1&&w.blending===$n&&w.alphaToCoverage===!1,alphaMap:at,alphaTest:Et,alphaHash:Mt,combine:w.combine,mapUv:D&&x(w.map.channel),aoMapUv:R&&x(w.aoMap.channel),lightMapUv:ht&&x(w.lightMap.channel),bumpMapUv:ot&&x(w.bumpMap.channel),normalMapUv:lt&&x(w.normalMap.channel),displacementMapUv:ut&&x(w.displacementMap.channel),emissiveMapUv:Ut&&x(w.emissiveMap.channel),metalnessMapUv:mt&&x(w.metalnessMap.channel),roughnessMapUv:T&&x(w.roughnessMap.channel),anisotropyMapUv:yt&&x(w.anisotropyMap.channel),clearcoatMapUv:Tt&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:$t&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:Bt&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&x(w.sheenRoughnessMap.channel),specularMapUv:Jt&&x(w.specularMap.channel),specularColorMapUv:qt&&x(w.specularColorMap.channel),specularIntensityMapUv:ce&&x(w.specularIntensityMap.channel),transmissionMapUv:F&&x(w.transmissionMap.channel),thicknessMapUv:vt&&x(w.thicknessMap.channel),alphaMapUv:at&&x(w.alphaMap.channel),vertexTangents:!!ct.attributes.tangent&&(lt||y),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!ct.attributes.uv&&(D||at),fog:!!j,useFog:w.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:B,skinning:G.isSkinnedMesh===!0,morphTargets:ct.morphAttributes.position!==void 0,morphNormals:ct.morphAttributes.normal!==void 0,morphColors:ct.morphAttributes.color!==void 0,morphTargetsCount:Dt,morphTextureStride:Zt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:_e,decodeVideoTexture:D&&w.map.isVideoTexture===!0&&Kt.getTransfer(w.map.colorSpace)===se,decodeVideoTextureEmissive:Ut&&w.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(w.emissiveMap.colorSpace)===se,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Pe,flipSided:w.side===Le,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Vt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&w.extensions.multiDraw===!0||Y)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Re.vertexUv1s=l.has(1),Re.vertexUv2s=l.has(2),Re.vertexUv3s=l.has(3),l.clear(),Re}function u(w){let S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(let U in w.defines)S.push(U),S.push(w.defines[U]);return w.isRawShaderMaterial===!1&&(b(S,w),E(S,w),S.push(i.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function b(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function E(w,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),w.push(o.mask)}function v(w){let S=g[w.type],U;if(S){let J=fn[S];U=Ju.clone(J.uniforms)}else U=w.uniforms;return U}function N(w,S){let U;for(let J=0,G=h.length;J<G;J++){let j=h[J];if(j.cacheKey===S){U=j,++U.usedTimes;break}}return U===void 0&&(U=new s0(i,S,w,r),h.push(U)),U}function P(w){if(--w.usedTimes===0){let S=h.indexOf(w);h[S]=h[h.length-1],h.pop(),w.destroy()}}function L(w){c.remove(w)}function H(){c.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:v,acquireProgram:N,releaseProgram:P,releaseShaderCache:L,programs:h,dispose:H}}function a0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function c0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Il(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Pl(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f,d,m,g,x,p){let u=i[t];return u===void 0?(u={id:f.id,object:f,geometry:d,material:m,groupOrder:g,renderOrder:f.renderOrder,z:x,group:p},i[t]=u):(u.id=f.id,u.object=f,u.geometry=d,u.material=m,u.groupOrder=g,u.renderOrder=f.renderOrder,u.z=x,u.group=p),t++,u}function o(f,d,m,g,x,p){let u=a(f,d,m,g,x,p);m.transmission>0?n.push(u):m.transparent===!0?s.push(u):e.push(u)}function c(f,d,m,g,x,p){let u=a(f,d,m,g,x,p);m.transmission>0?n.unshift(u):m.transparent===!0?s.unshift(u):e.unshift(u)}function l(f,d){e.length>1&&e.sort(f||c0),n.length>1&&n.sort(d||Il),s.length>1&&s.sort(d||Il)}function h(){for(let f=t,d=i.length;f<d;f++){let m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function l0(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Pl,i.set(n,[a])):s>=r.length?(a=new Pl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function h0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new kt};break;case"SpotLight":e={position:new I,direction:new I,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function u0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var d0=0;function f0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function p0(i){let t=new h0,e=u0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);let s=new I,r=new me,a=new me;function o(l){let h=0,f=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let m=0,g=0,x=0,p=0,u=0,b=0,E=0,v=0,N=0,P=0,L=0;l.sort(f0);for(let w=0,S=l.length;w<S;w++){let U=l[w],J=U.color,G=U.intensity,j=U.distance,ct=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=J.r*G,f+=J.g*G,d+=J.b*G;else if(U.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(U.sh.coefficients[Q],G);L++}else if(U.isDirectionalLight){let Q=t.get(U);if(Q.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let dt=U.shadow,$=e.get(U);$.shadowIntensity=dt.intensity,$.shadowBias=dt.bias,$.shadowNormalBias=dt.normalBias,$.shadowRadius=dt.radius,$.shadowMapSize=dt.mapSize,n.directionalShadow[m]=$,n.directionalShadowMap[m]=ct,n.directionalShadowMatrix[m]=U.shadow.matrix,b++}n.directional[m]=Q,m++}else if(U.isSpotLight){let Q=t.get(U);Q.position.setFromMatrixPosition(U.matrixWorld),Q.color.copy(J).multiplyScalar(G),Q.distance=j,Q.coneCos=Math.cos(U.angle),Q.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Q.decay=U.decay,n.spot[x]=Q;let dt=U.shadow;if(U.map&&(n.spotLightMap[N]=U.map,N++,dt.updateMatrices(U),U.castShadow&&P++),n.spotLightMatrix[x]=dt.matrix,U.castShadow){let $=e.get(U);$.shadowIntensity=dt.intensity,$.shadowBias=dt.bias,$.shadowNormalBias=dt.normalBias,$.shadowRadius=dt.radius,$.shadowMapSize=dt.mapSize,n.spotShadow[x]=$,n.spotShadowMap[x]=ct,v++}x++}else if(U.isRectAreaLight){let Q=t.get(U);Q.color.copy(J).multiplyScalar(G),Q.halfWidth.set(U.width*.5,0,0),Q.halfHeight.set(0,U.height*.5,0),n.rectArea[p]=Q,p++}else if(U.isPointLight){let Q=t.get(U);if(Q.color.copy(U.color).multiplyScalar(U.intensity),Q.distance=U.distance,Q.decay=U.decay,U.castShadow){let dt=U.shadow,$=e.get(U);$.shadowIntensity=dt.intensity,$.shadowBias=dt.bias,$.shadowNormalBias=dt.normalBias,$.shadowRadius=dt.radius,$.shadowMapSize=dt.mapSize,$.shadowCameraNear=dt.camera.near,$.shadowCameraFar=dt.camera.far,n.pointShadow[g]=$,n.pointShadowMap[g]=ct,n.pointShadowMatrix[g]=U.shadow.matrix,E++}n.point[g]=Q,g++}else if(U.isHemisphereLight){let Q=t.get(U);Q.skyColor.copy(U.color).multiplyScalar(G),Q.groundColor.copy(U.groundColor).multiplyScalar(G),n.hemi[u]=Q,u++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;let H=n.hash;(H.directionalLength!==m||H.pointLength!==g||H.spotLength!==x||H.rectAreaLength!==p||H.hemiLength!==u||H.numDirectionalShadows!==b||H.numPointShadows!==E||H.numSpotShadows!==v||H.numSpotMaps!==N||H.numLightProbes!==L)&&(n.directional.length=m,n.spot.length=x,n.rectArea.length=p,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=v+N-P,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=L,H.directionalLength=m,H.pointLength=g,H.spotLength=x,H.rectAreaLength=p,H.hemiLength=u,H.numDirectionalShadows=b,H.numPointShadows=E,H.numSpotShadows=v,H.numSpotMaps=N,H.numLightProbes=L,n.version=d0++)}function c(l,h){let f=0,d=0,m=0,g=0,x=0,p=h.matrixWorldInverse;for(let u=0,b=l.length;u<b;u++){let E=l[u];if(E.isDirectionalLight){let v=n.directional[f];v.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),f++}else if(E.isSpotLight){let v=n.spot[m];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),m++}else if(E.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(p),a.identity(),r.copy(E.matrixWorld),r.premultiply(p),a.extractRotation(r),v.halfWidth.set(E.width*.5,0,0),v.halfHeight.set(0,E.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(p),d++}else if(E.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(E.matrixWorld),v.direction.transformDirection(p),x++}}}return{setup:o,setupView:c,state:n}}function Ll(i){let t=new p0(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function m0(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Ll(i),t.set(s,[o])):r>=a.length?(o=new Ll(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Oa=class extends ni{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Mu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ba=class extends ni{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},g0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_0=`uniform sampler2D shadow_pass;
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
}`;function x0(i,t,e){let n=new Cs,s=new Xt,r=new Xt,a=new oe,o=new Oa({depthPacking:Su}),c=new Ba,l={},h=e.maxTextureSize,f={[Qn]:Le,[Le]:Qn,[Pe]:Pe},d=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:g0,fragmentShader:_0}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new Ae;g.setAttribute("position",new ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Nt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zl;let u=this.type;this.render=function(P,L,H){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||P.length===0)return;let w=i.getRenderTarget(),S=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),J=i.state;J.setBlending(Jn),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);let G=u!==Rn&&this.type===Rn,j=u===Rn&&this.type!==Rn;for(let ct=0,Q=P.length;ct<Q;ct++){let dt=P[ct],$=dt.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",dt,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let gt=$.getFrameExtents();if(s.multiply(gt),r.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/gt.x),s.x=r.x*gt.x,$.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/gt.y),s.y=r.y*gt.y,$.mapSize.y=r.y)),$.map===null||G===!0||j===!0){let Dt=this.type!==Rn?{minFilter:cn,magFilter:cn}:{};$.map!==null&&$.map.dispose(),$.map=new Un(s.x,s.y,Dt),$.map.texture.name=dt.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();let _t=$.getViewportCount();for(let Dt=0;Dt<_t;Dt++){let Zt=$.getViewport(Dt);a.set(r.x*Zt.x,r.y*Zt.y,r.x*Zt.z,r.y*Zt.w),J.viewport(a),$.updateMatrices(dt,Dt),n=$.getFrustum(),v(L,H,$.camera,dt,this.type)}$.isPointLightShadow!==!0&&this.type===Rn&&b($,H),$.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(w,S,U)};function b(P,L){let H=t.update(x);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,m.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Un(s.x,s.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(L,null,H,d,x,null),m.uniforms.shadow_pass.value=P.mapPass.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(L,null,H,m,x,null)}function E(P,L,H,w){let S=null,U=H.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(U!==void 0)S=U;else if(S=H.isPointLight===!0?c:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){let J=S.uuid,G=L.uuid,j=l[J];j===void 0&&(j={},l[J]=j);let ct=j[G];ct===void 0&&(ct=S.clone(),j[G]=ct,L.addEventListener("dispose",N)),S=ct}if(S.visible=L.visible,S.wireframe=L.wireframe,w===Rn?S.side=L.shadowSide!==null?L.shadowSide:L.side:S.side=L.shadowSide!==null?L.shadowSide:f[L.side],S.alphaMap=L.alphaMap,S.alphaTest=L.alphaTest,S.map=L.map,S.clipShadows=L.clipShadows,S.clippingPlanes=L.clippingPlanes,S.clipIntersection=L.clipIntersection,S.displacementMap=L.displacementMap,S.displacementScale=L.displacementScale,S.displacementBias=L.displacementBias,S.wireframeLinewidth=L.wireframeLinewidth,S.linewidth=L.linewidth,H.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let J=i.properties.get(S);J.light=H}return S}function v(P,L,H,w,S){if(P.visible===!1)return;if(P.layers.test(L.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&S===Rn)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,P.matrixWorld);let G=t.update(P),j=P.material;if(Array.isArray(j)){let ct=G.groups;for(let Q=0,dt=ct.length;Q<dt;Q++){let $=ct[Q],gt=j[$.materialIndex];if(gt&&gt.visible){let _t=E(P,gt,w,S);P.onBeforeShadow(i,P,L,H,G,_t,$),i.renderBufferDirect(H,null,G,_t,P,$),P.onAfterShadow(i,P,L,H,G,_t,$)}}}else if(j.visible){let ct=E(P,j,w,S);P.onBeforeShadow(i,P,L,H,G,ct,null),i.renderBufferDirect(H,null,G,ct,P,null),P.onAfterShadow(i,P,L,H,G,ct,null)}}let J=P.children;for(let G=0,j=J.length;G<j;G++)v(J[G],L,H,w,S)}function N(P){P.target.removeEventListener("dispose",N);for(let H in l){let w=l[H],S=P.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}var y0={[Ho]:ko,[Vo]:Xo,[Go]:qo,[$i]:Wo,[ko]:Ho,[Xo]:Vo,[qo]:Go,[Wo]:$i};function v0(i,t){function e(){let F=!1,vt=new oe,K=null,at=new oe(0,0,0,0);return{setMask:function(Et){K!==Et&&!F&&(i.colorMask(Et,Et,Et,Et),K=Et)},setLocked:function(Et){F=Et},setClear:function(Et,Mt,Vt,_e,Re){Re===!0&&(Et*=_e,Mt*=_e,Vt*=_e),vt.set(Et,Mt,Vt,_e),at.equals(vt)===!1&&(i.clearColor(Et,Mt,Vt,_e),at.copy(vt))},reset:function(){F=!1,K=null,at.set(-1,0,0,0)}}}function n(){let F=!1,vt=!1,K=null,at=null,Et=null;return{setReversed:function(Mt){if(vt!==Mt){let Vt=t.get("EXT_clip_control");vt?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT);let _e=Et;Et=null,this.setClear(_e)}vt=Mt},getReversed:function(){return vt},setTest:function(Mt){Mt?C(i.DEPTH_TEST):B(i.DEPTH_TEST)},setMask:function(Mt){K!==Mt&&!F&&(i.depthMask(Mt),K=Mt)},setFunc:function(Mt){if(vt&&(Mt=y0[Mt]),at!==Mt){switch(Mt){case Ho:i.depthFunc(i.NEVER);break;case ko:i.depthFunc(i.ALWAYS);break;case Vo:i.depthFunc(i.LESS);break;case $i:i.depthFunc(i.LEQUAL);break;case Go:i.depthFunc(i.EQUAL);break;case Wo:i.depthFunc(i.GEQUAL);break;case Xo:i.depthFunc(i.GREATER);break;case qo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}at=Mt}},setLocked:function(Mt){F=Mt},setClear:function(Mt){Et!==Mt&&(vt&&(Mt=1-Mt),i.clearDepth(Mt),Et=Mt)},reset:function(){F=!1,K=null,at=null,Et=null,vt=!1}}}function s(){let F=!1,vt=null,K=null,at=null,Et=null,Mt=null,Vt=null,_e=null,Re=null;return{setTest:function(ne){F||(ne?C(i.STENCIL_TEST):B(i.STENCIL_TEST))},setMask:function(ne){vt!==ne&&!F&&(i.stencilMask(ne),vt=ne)},setFunc:function(ne,en,Mn){(K!==ne||at!==en||Et!==Mn)&&(i.stencilFunc(ne,en,Mn),K=ne,at=en,Et=Mn)},setOp:function(ne,en,Mn){(Mt!==ne||Vt!==en||_e!==Mn)&&(i.stencilOp(ne,en,Mn),Mt=ne,Vt=en,_e=Mn)},setLocked:function(ne){F=ne},setClear:function(ne){Re!==ne&&(i.clearStencil(ne),Re=ne)},reset:function(){F=!1,vt=null,K=null,at=null,Et=null,Mt=null,Vt=null,_e=null,Re=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},f={},d=new WeakMap,m=[],g=null,x=!1,p=null,u=null,b=null,E=null,v=null,N=null,P=null,L=new kt(0,0,0),H=0,w=!1,S=null,U=null,J=null,G=null,j=null,ct=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Q=!1,dt=0,$=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(dt=parseFloat(/^WebGL (\d)/.exec($)[1]),Q=dt>=1):$.indexOf("OpenGL ES")!==-1&&(dt=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Q=dt>=2);let gt=null,_t={},Dt=i.getParameter(i.SCISSOR_BOX),Zt=i.getParameter(i.VIEWPORT),jt=new oe().fromArray(Dt),it=new oe().fromArray(Zt);function _(F,vt,K,at){let Et=new Uint8Array(4),Mt=i.createTexture();i.bindTexture(F,Mt),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Vt=0;Vt<K;Vt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,i.RGBA,1,1,at,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(vt+Vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return Mt}let A={};A[i.TEXTURE_2D]=_(i.TEXTURE_2D,i.TEXTURE_2D,1),A[i.TEXTURE_CUBE_MAP]=_(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),A[i.TEXTURE_2D_ARRAY]=_(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),A[i.TEXTURE_3D]=_(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),C(i.DEPTH_TEST),a.setFunc($i),ot(!1),lt(Fc),C(i.CULL_FACE),R(Jn);function C(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function B(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function k(F,vt){return f[F]!==vt?(i.bindFramebuffer(F,vt),f[F]=vt,F===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=vt),F===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=vt),!0):!1}function Y(F,vt){let K=m,at=!1;if(F){K=d.get(vt),K===void 0&&(K=[],d.set(vt,K));let Et=F.textures;if(K.length!==Et.length||K[0]!==i.COLOR_ATTACHMENT0){for(let Mt=0,Vt=Et.length;Mt<Vt;Mt++)K[Mt]=i.COLOR_ATTACHMENT0+Mt;K.length=Et.length,at=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,at=!0);at&&i.drawBuffers(K)}function D(F){return g!==F?(i.useProgram(F),g=F,!0):!1}let q={[gi]:i.FUNC_ADD,[Jh]:i.FUNC_SUBTRACT,[$h]:i.FUNC_REVERSE_SUBTRACT};q[Kh]=i.MIN,q[jh]=i.MAX;let et={[Qh]:i.ZERO,[tu]:i.ONE,[eu]:i.SRC_COLOR,[Bo]:i.SRC_ALPHA,[au]:i.SRC_ALPHA_SATURATE,[ru]:i.DST_COLOR,[iu]:i.DST_ALPHA,[nu]:i.ONE_MINUS_SRC_COLOR,[zo]:i.ONE_MINUS_SRC_ALPHA,[ou]:i.ONE_MINUS_DST_COLOR,[su]:i.ONE_MINUS_DST_ALPHA,[cu]:i.CONSTANT_COLOR,[lu]:i.ONE_MINUS_CONSTANT_COLOR,[hu]:i.CONSTANT_ALPHA,[uu]:i.ONE_MINUS_CONSTANT_ALPHA};function R(F,vt,K,at,Et,Mt,Vt,_e,Re,ne){if(F===Jn){x===!0&&(B(i.BLEND),x=!1);return}if(x===!1&&(C(i.BLEND),x=!0),F!==Zh){if(F!==p||ne!==w){if((u!==gi||v!==gi)&&(i.blendEquation(i.FUNC_ADD),u=gi,v=gi),ne)switch(F){case $n:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gn:i.blendFunc(i.ONE,i.ONE);break;case Oc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case $n:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Oc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}b=null,E=null,N=null,P=null,L.set(0,0,0),H=0,p=F,w=ne}return}Et=Et||vt,Mt=Mt||K,Vt=Vt||at,(vt!==u||Et!==v)&&(i.blendEquationSeparate(q[vt],q[Et]),u=vt,v=Et),(K!==b||at!==E||Mt!==N||Vt!==P)&&(i.blendFuncSeparate(et[K],et[at],et[Mt],et[Vt]),b=K,E=at,N=Mt,P=Vt),(_e.equals(L)===!1||Re!==H)&&(i.blendColor(_e.r,_e.g,_e.b,Re),L.copy(_e),H=Re),p=F,w=!1}function ht(F,vt){F.side===Pe?B(i.CULL_FACE):C(i.CULL_FACE);let K=F.side===Le;vt&&(K=!K),ot(K),F.blending===$n&&F.transparent===!1?R(Jn):R(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);let at=F.stencilWrite;o.setTest(at),at&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ut(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?C(i.SAMPLE_ALPHA_TO_COVERAGE):B(i.SAMPLE_ALPHA_TO_COVERAGE)}function ot(F){S!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),S=F)}function lt(F){F!==qh?(C(i.CULL_FACE),F!==U&&(F===Fc?i.cullFace(i.BACK):F===Yh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):B(i.CULL_FACE),U=F}function ut(F){F!==J&&(Q&&i.lineWidth(F),J=F)}function Ut(F,vt,K){F?(C(i.POLYGON_OFFSET_FILL),(G!==vt||j!==K)&&(i.polygonOffset(vt,K),G=vt,j=K)):B(i.POLYGON_OFFSET_FILL)}function mt(F){F?C(i.SCISSOR_TEST):B(i.SCISSOR_TEST)}function T(F){F===void 0&&(F=i.TEXTURE0+ct-1),gt!==F&&(i.activeTexture(F),gt=F)}function y(F,vt,K){K===void 0&&(gt===null?K=i.TEXTURE0+ct-1:K=gt);let at=_t[K];at===void 0&&(at={type:void 0,texture:void 0},_t[K]=at),(at.type!==F||at.texture!==vt)&&(gt!==K&&(i.activeTexture(K),gt=K),i.bindTexture(F,vt||A[F]),at.type=F,at.texture=vt)}function V(){let F=_t[gt];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function tt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function rt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function nt(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ct(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function yt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Tt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $t(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ft(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function At(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Bt(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function zt(F){jt.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),jt.copy(F))}function Rt(F){it.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),it.copy(F))}function Jt(F,vt){let K=l.get(vt);K===void 0&&(K=new WeakMap,l.set(vt,K));let at=K.get(F);at===void 0&&(at=i.getUniformBlockIndex(vt,F.name),K.set(F,at))}function qt(F,vt){let at=l.get(vt).get(F);c.get(vt)!==at&&(i.uniformBlockBinding(vt,at,F.__bindingPointIndex),c.set(vt,at))}function ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},gt=null,_t={},f={},d=new WeakMap,m=[],g=null,x=!1,p=null,u=null,b=null,E=null,v=null,N=null,P=null,L=new kt(0,0,0),H=0,w=!1,S=null,U=null,J=null,G=null,j=null,jt.set(0,0,i.canvas.width,i.canvas.height),it.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:C,disable:B,bindFramebuffer:k,drawBuffers:Y,useProgram:D,setBlending:R,setMaterial:ht,setFlipSided:ot,setCullFace:lt,setLineWidth:ut,setPolygonOffset:Ut,setScissorTest:mt,activeTexture:T,bindTexture:y,unbindTexture:V,compressedTexImage2D:tt,compressedTexImage3D:rt,texImage2D:At,texImage3D:Bt,updateUBOMapping:Jt,uniformBlockBinding:qt,texStorage2D:$t,texStorage3D:ft,texSubImage2D:nt,texSubImage3D:Ct,compressedTexSubImage2D:yt,compressedTexSubImage3D:Tt,scissor:zt,viewport:Rt,reset:ce}}function Dl(i,t,e,n){let s=M0(n);switch(e){case Xl:return i*t;case Yl:return i*t;case Zl:return i*t*2;case Jl:return i*t/s.components*s.byteLength;case rc:return i*t/s.components*s.byteLength;case $l:return i*t*2/s.components*s.byteLength;case oc:return i*t*2/s.components*s.byteLength;case ql:return i*t*3/s.components*s.byteLength;case an:return i*t*4/s.components*s.byteLength;case ac:return i*t*4/s.components*s.byteLength;case xr:case yr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case vr:case Mr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ko:case Qo:return Math.max(i,16)*Math.max(t,8)/4;case $o:case jo:return Math.max(i,8)*Math.max(t,8)/2;case ta:case ea:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ra:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case oa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case aa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ca:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case la:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ha:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ua:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case da:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case fa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case pa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ma:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ga:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Sr:case _a:case xa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Kl:case ya:return Math.ceil(i/4)*Math.ceil(t/4)*8;case va:case Ma:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function M0(i){switch(i){case Dn:case Vl:return{byteLength:1,components:1};case As:case Gl:case Fs:return{byteLength:2,components:1};case ic:case sc:return{byteLength:2,components:4};case Mi:case nc:case In:return{byteLength:4,components:1};case Wl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function S0(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Xt,h=new WeakMap,f,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,y){return m?new OffscreenCanvas(T,y):wr("canvas")}function x(T,y,V){let tt=1,rt=mt(T);if((rt.width>V||rt.height>V)&&(tt=V/Math.max(rt.width,rt.height)),tt<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let nt=Math.floor(tt*rt.width),Ct=Math.floor(tt*rt.height);f===void 0&&(f=g(nt,Ct));let yt=y?g(nt,Ct):f;return yt.width=nt,yt.height=Ct,yt.getContext("2d").drawImage(T,0,0,nt,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+nt+"x"+Ct+")."),yt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),T;return T}function p(T){return T.generateMipmaps}function u(T){i.generateMipmap(T)}function b(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(T,y,V,tt,rt=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let nt=y;if(y===i.RED&&(V===i.FLOAT&&(nt=i.R32F),V===i.HALF_FLOAT&&(nt=i.R16F),V===i.UNSIGNED_BYTE&&(nt=i.R8)),y===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(nt=i.R8UI),V===i.UNSIGNED_SHORT&&(nt=i.R16UI),V===i.UNSIGNED_INT&&(nt=i.R32UI),V===i.BYTE&&(nt=i.R8I),V===i.SHORT&&(nt=i.R16I),V===i.INT&&(nt=i.R32I)),y===i.RG&&(V===i.FLOAT&&(nt=i.RG32F),V===i.HALF_FLOAT&&(nt=i.RG16F),V===i.UNSIGNED_BYTE&&(nt=i.RG8)),y===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(nt=i.RG8UI),V===i.UNSIGNED_SHORT&&(nt=i.RG16UI),V===i.UNSIGNED_INT&&(nt=i.RG32UI),V===i.BYTE&&(nt=i.RG8I),V===i.SHORT&&(nt=i.RG16I),V===i.INT&&(nt=i.RG32I)),y===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(nt=i.RGB8UI),V===i.UNSIGNED_SHORT&&(nt=i.RGB16UI),V===i.UNSIGNED_INT&&(nt=i.RGB32UI),V===i.BYTE&&(nt=i.RGB8I),V===i.SHORT&&(nt=i.RGB16I),V===i.INT&&(nt=i.RGB32I)),y===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(nt=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(nt=i.RGBA16UI),V===i.UNSIGNED_INT&&(nt=i.RGBA32UI),V===i.BYTE&&(nt=i.RGBA8I),V===i.SHORT&&(nt=i.RGBA16I),V===i.INT&&(nt=i.RGBA32I)),y===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(nt=i.RGB9_E5),y===i.RGBA){let Ct=rt?Xr:Kt.getTransfer(tt);V===i.FLOAT&&(nt=i.RGBA32F),V===i.HALF_FLOAT&&(nt=i.RGBA16F),V===i.UNSIGNED_BYTE&&(nt=Ct===se?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(nt=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(nt=i.RGB5_A1)}return(nt===i.R16F||nt===i.R32F||nt===i.RG16F||nt===i.RG32F||nt===i.RGBA16F||nt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function v(T,y){let V;return T?y===null||y===Mi||y===Qi?V=i.DEPTH24_STENCIL8:y===In?V=i.DEPTH32F_STENCIL8:y===As&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Mi||y===Qi?V=i.DEPTH_COMPONENT24:y===In?V=i.DEPTH_COMPONENT32F:y===As&&(V=i.DEPTH_COMPONENT16),V}function N(T,y){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==cn&&T.minFilter!==mn?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function P(T){let y=T.target;y.removeEventListener("dispose",P),H(y),y.isVideoTexture&&h.delete(y)}function L(T){let y=T.target;y.removeEventListener("dispose",L),S(y)}function H(T){let y=n.get(T);if(y.__webglInit===void 0)return;let V=T.source,tt=d.get(V);if(tt){let rt=tt[y.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&w(T),Object.keys(tt).length===0&&d.delete(V)}n.remove(T)}function w(T){let y=n.get(T);i.deleteTexture(y.__webglTexture);let V=T.source,tt=d.get(V);delete tt[y.__cacheKey],a.memory.textures--}function S(T){let y=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(y.__webglFramebuffer[tt]))for(let rt=0;rt<y.__webglFramebuffer[tt].length;rt++)i.deleteFramebuffer(y.__webglFramebuffer[tt][rt]);else i.deleteFramebuffer(y.__webglFramebuffer[tt]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[tt])}else{if(Array.isArray(y.__webglFramebuffer))for(let tt=0;tt<y.__webglFramebuffer.length;tt++)i.deleteFramebuffer(y.__webglFramebuffer[tt]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let tt=0;tt<y.__webglColorRenderbuffer.length;tt++)y.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[tt]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let V=T.textures;for(let tt=0,rt=V.length;tt<rt;tt++){let nt=n.get(V[tt]);nt.__webglTexture&&(i.deleteTexture(nt.__webglTexture),a.memory.textures--),n.remove(V[tt])}n.remove(T)}let U=0;function J(){U=0}function G(){let T=U;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),U+=1,T}function j(T){let y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function ct(T,y){let V=n.get(T);if(T.isVideoTexture&&ut(T),T.isRenderTargetTexture===!1&&T.version>0&&V.__version!==T.version){let tt=T.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it(V,T,y);return}}e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+y)}function Q(T,y){let V=n.get(T);if(T.version>0&&V.__version!==T.version){it(V,T,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+y)}function dt(T,y){let V=n.get(T);if(T.version>0&&V.__version!==T.version){it(V,T,y);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+y)}function $(T,y){let V=n.get(T);if(T.version>0&&V.__version!==T.version){_(V,T,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+y)}let gt={[vi]:i.REPEAT,[xi]:i.CLAMP_TO_EDGE,[Jo]:i.MIRRORED_REPEAT},_t={[cn]:i.NEAREST,[vu]:i.NEAREST_MIPMAP_NEAREST,[Ys]:i.NEAREST_MIPMAP_LINEAR,[mn]:i.LINEAR,[so]:i.LINEAR_MIPMAP_NEAREST,[yi]:i.LINEAR_MIPMAP_LINEAR},Dt={[Eu]:i.NEVER,[Iu]:i.ALWAYS,[wu]:i.LESS,[Ql]:i.LEQUAL,[Tu]:i.EQUAL,[Cu]:i.GEQUAL,[Au]:i.GREATER,[Ru]:i.NOTEQUAL};function Zt(T,y){if(y.type===In&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===mn||y.magFilter===so||y.magFilter===Ys||y.magFilter===yi||y.minFilter===mn||y.minFilter===so||y.minFilter===Ys||y.minFilter===yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,gt[y.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,gt[y.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,gt[y.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,_t[y.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,_t[y.minFilter]),y.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Dt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===cn||y.minFilter!==Ys&&y.minFilter!==yi||y.type===In&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function jt(T,y){let V=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",P));let tt=y.source,rt=d.get(tt);rt===void 0&&(rt={},d.set(tt,rt));let nt=j(y);if(nt!==T.__cacheKey){rt[nt]===void 0&&(rt[nt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),rt[nt].usedTimes++;let Ct=rt[T.__cacheKey];Ct!==void 0&&(rt[T.__cacheKey].usedTimes--,Ct.usedTimes===0&&w(y)),T.__cacheKey=nt,T.__webglTexture=rt[nt].texture}return V}function it(T,y,V){let tt=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(tt=i.TEXTURE_3D);let rt=jt(T,y),nt=y.source;e.bindTexture(tt,T.__webglTexture,i.TEXTURE0+V);let Ct=n.get(nt);if(nt.version!==Ct.__version||rt===!0){e.activeTexture(i.TEXTURE0+V);let yt=Kt.getPrimaries(Kt.workingColorSpace),Tt=y.colorSpace===Yn?null:Kt.getPrimaries(y.colorSpace),$t=y.colorSpace===Yn||yt===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let ft=x(y.image,!1,s.maxTextureSize);ft=Ut(y,ft);let At=r.convert(y.format,y.colorSpace),Bt=r.convert(y.type),zt=E(y.internalFormat,At,Bt,y.colorSpace,y.isVideoTexture);Zt(tt,y);let Rt,Jt=y.mipmaps,qt=y.isVideoTexture!==!0,ce=Ct.__version===void 0||rt===!0,F=nt.dataReady,vt=N(y,ft);if(y.isDepthTexture)zt=v(y.format===ts,y.type),ce&&(qt?e.texStorage2D(i.TEXTURE_2D,1,zt,ft.width,ft.height):e.texImage2D(i.TEXTURE_2D,0,zt,ft.width,ft.height,0,At,Bt,null));else if(y.isDataTexture)if(Jt.length>0){qt&&ce&&e.texStorage2D(i.TEXTURE_2D,vt,zt,Jt[0].width,Jt[0].height);for(let K=0,at=Jt.length;K<at;K++)Rt=Jt[K],qt?F&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,Rt.width,Rt.height,At,Bt,Rt.data):e.texImage2D(i.TEXTURE_2D,K,zt,Rt.width,Rt.height,0,At,Bt,Rt.data);y.generateMipmaps=!1}else qt?(ce&&e.texStorage2D(i.TEXTURE_2D,vt,zt,ft.width,ft.height),F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft.width,ft.height,At,Bt,ft.data)):e.texImage2D(i.TEXTURE_2D,0,zt,ft.width,ft.height,0,At,Bt,ft.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){qt&&ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,zt,Jt[0].width,Jt[0].height,ft.depth);for(let K=0,at=Jt.length;K<at;K++)if(Rt=Jt[K],y.format!==an)if(At!==null)if(qt){if(F)if(y.layerUpdates.size>0){let Et=Dl(Rt.width,Rt.height,y.format,y.type);for(let Mt of y.layerUpdates){let Vt=Rt.data.subarray(Mt*Et/Rt.data.BYTES_PER_ELEMENT,(Mt+1)*Et/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,Mt,Rt.width,Rt.height,1,At,Vt)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,Rt.width,Rt.height,ft.depth,At,Rt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,zt,Rt.width,Rt.height,ft.depth,0,Rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,Rt.width,Rt.height,ft.depth,At,Bt,Rt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,K,zt,Rt.width,Rt.height,ft.depth,0,At,Bt,Rt.data)}else{qt&&ce&&e.texStorage2D(i.TEXTURE_2D,vt,zt,Jt[0].width,Jt[0].height);for(let K=0,at=Jt.length;K<at;K++)Rt=Jt[K],y.format!==an?At!==null?qt?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,Rt.width,Rt.height,At,Rt.data):e.compressedTexImage2D(i.TEXTURE_2D,K,zt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?F&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,Rt.width,Rt.height,At,Bt,Rt.data):e.texImage2D(i.TEXTURE_2D,K,zt,Rt.width,Rt.height,0,At,Bt,Rt.data)}else if(y.isDataArrayTexture)if(qt){if(ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,zt,ft.width,ft.height,ft.depth),F)if(y.layerUpdates.size>0){let K=Dl(ft.width,ft.height,y.format,y.type);for(let at of y.layerUpdates){let Et=ft.data.subarray(at*K/ft.data.BYTES_PER_ELEMENT,(at+1)*K/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,at,ft.width,ft.height,1,At,Bt,Et)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,At,Bt,ft.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,zt,ft.width,ft.height,ft.depth,0,At,Bt,ft.data);else if(y.isData3DTexture)qt?(ce&&e.texStorage3D(i.TEXTURE_3D,vt,zt,ft.width,ft.height,ft.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,At,Bt,ft.data)):e.texImage3D(i.TEXTURE_3D,0,zt,ft.width,ft.height,ft.depth,0,At,Bt,ft.data);else if(y.isFramebufferTexture){if(ce)if(qt)e.texStorage2D(i.TEXTURE_2D,vt,zt,ft.width,ft.height);else{let K=ft.width,at=ft.height;for(let Et=0;Et<vt;Et++)e.texImage2D(i.TEXTURE_2D,Et,zt,K,at,0,At,Bt,null),K>>=1,at>>=1}}else if(Jt.length>0){if(qt&&ce){let K=mt(Jt[0]);e.texStorage2D(i.TEXTURE_2D,vt,zt,K.width,K.height)}for(let K=0,at=Jt.length;K<at;K++)Rt=Jt[K],qt?F&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,At,Bt,Rt):e.texImage2D(i.TEXTURE_2D,K,zt,At,Bt,Rt);y.generateMipmaps=!1}else if(qt){if(ce){let K=mt(ft);e.texStorage2D(i.TEXTURE_2D,vt,zt,K.width,K.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,At,Bt,ft)}else e.texImage2D(i.TEXTURE_2D,0,zt,At,Bt,ft);p(y)&&u(tt),Ct.__version=nt.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function _(T,y,V){if(y.image.length!==6)return;let tt=jt(T,y),rt=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+V);let nt=n.get(rt);if(rt.version!==nt.__version||tt===!0){e.activeTexture(i.TEXTURE0+V);let Ct=Kt.getPrimaries(Kt.workingColorSpace),yt=y.colorSpace===Yn?null:Kt.getPrimaries(y.colorSpace),Tt=y.colorSpace===Yn||Ct===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let $t=y.isCompressedTexture||y.image[0].isCompressedTexture,ft=y.image[0]&&y.image[0].isDataTexture,At=[];for(let at=0;at<6;at++)!$t&&!ft?At[at]=x(y.image[at],!0,s.maxCubemapSize):At[at]=ft?y.image[at].image:y.image[at],At[at]=Ut(y,At[at]);let Bt=At[0],zt=r.convert(y.format,y.colorSpace),Rt=r.convert(y.type),Jt=E(y.internalFormat,zt,Rt,y.colorSpace),qt=y.isVideoTexture!==!0,ce=nt.__version===void 0||tt===!0,F=rt.dataReady,vt=N(y,Bt);Zt(i.TEXTURE_CUBE_MAP,y);let K;if($t){qt&&ce&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Jt,Bt.width,Bt.height);for(let at=0;at<6;at++){K=At[at].mipmaps;for(let Et=0;Et<K.length;Et++){let Mt=K[Et];y.format!==an?zt!==null?qt?F&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Et,0,0,Mt.width,Mt.height,zt,Mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Et,Jt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Et,0,0,Mt.width,Mt.height,zt,Rt,Mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Et,Jt,Mt.width,Mt.height,0,zt,Rt,Mt.data)}}}else{if(K=y.mipmaps,qt&&ce){K.length>0&&vt++;let at=mt(At[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Jt,at.width,at.height)}for(let at=0;at<6;at++)if(ft){qt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,At[at].width,At[at].height,zt,Rt,At[at].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Jt,At[at].width,At[at].height,0,zt,Rt,At[at].data);for(let Et=0;Et<K.length;Et++){let Vt=K[Et].image[at].image;qt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Et+1,0,0,Vt.width,Vt.height,zt,Rt,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Et+1,Jt,Vt.width,Vt.height,0,zt,Rt,Vt.data)}}else{qt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,zt,Rt,At[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Jt,zt,Rt,At[at]);for(let Et=0;Et<K.length;Et++){let Mt=K[Et];qt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Et+1,0,0,zt,Rt,Mt.image[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Et+1,Jt,zt,Rt,Mt.image[at])}}}p(y)&&u(i.TEXTURE_CUBE_MAP),nt.__version=rt.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function A(T,y,V,tt,rt,nt){let Ct=r.convert(V.format,V.colorSpace),yt=r.convert(V.type),Tt=E(V.internalFormat,Ct,yt,V.colorSpace),$t=n.get(y),ft=n.get(V);if(ft.__renderTarget=y,!$t.__hasExternalTextures){let At=Math.max(1,y.width>>nt),Bt=Math.max(1,y.height>>nt);rt===i.TEXTURE_3D||rt===i.TEXTURE_2D_ARRAY?e.texImage3D(rt,nt,Tt,At,Bt,y.depth,0,Ct,yt,null):e.texImage2D(rt,nt,Tt,At,Bt,0,Ct,yt,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),lt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,rt,ft.__webglTexture,0,ot(y)):(rt===i.TEXTURE_2D||rt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,rt,ft.__webglTexture,nt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function C(T,y,V){if(i.bindRenderbuffer(i.RENDERBUFFER,T),y.depthBuffer){let tt=y.depthTexture,rt=tt&&tt.isDepthTexture?tt.type:null,nt=v(y.stencilBuffer,rt),Ct=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=ot(y);lt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt,nt,y.width,y.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,nt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,nt,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ct,i.RENDERBUFFER,T)}else{let tt=y.textures;for(let rt=0;rt<tt.length;rt++){let nt=tt[rt],Ct=r.convert(nt.format,nt.colorSpace),yt=r.convert(nt.type),Tt=E(nt.internalFormat,Ct,yt,nt.colorSpace),$t=ot(y);V&&lt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$t,Tt,y.width,y.height):lt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$t,Tt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function B(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let tt=n.get(y.depthTexture);tt.__renderTarget=y,(!tt.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),ct(y.depthTexture,0);let rt=tt.__webglTexture,nt=ot(y);if(y.depthTexture.format===Yi)lt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0);else if(y.depthTexture.format===ts)lt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function k(T){let y=n.get(T),V=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){let tt=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),tt){let rt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,tt.removeEventListener("dispose",rt)};tt.addEventListener("dispose",rt),y.__depthDisposeCallback=rt}y.__boundDepthTexture=tt}if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");B(y.__webglFramebuffer,T)}else if(V){y.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[tt]),y.__webglDepthbuffer[tt]===void 0)y.__webglDepthbuffer[tt]=i.createRenderbuffer(),C(y.__webglDepthbuffer[tt],T,!1);else{let rt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=y.__webglDepthbuffer[tt];i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,nt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),C(y.__webglDepthbuffer,T,!1);else{let tt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,rt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Y(T,y,V){let tt=n.get(T);y!==void 0&&A(tt.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&k(T)}function D(T){let y=T.texture,V=n.get(T),tt=n.get(y);T.addEventListener("dispose",L);let rt=T.textures,nt=T.isWebGLCubeRenderTarget===!0,Ct=rt.length>1;if(Ct||(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=y.version,a.memory.textures++),nt){V.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer[yt]=[];for(let Tt=0;Tt<y.mipmaps.length;Tt++)V.__webglFramebuffer[yt][Tt]=i.createFramebuffer()}else V.__webglFramebuffer[yt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer=[];for(let yt=0;yt<y.mipmaps.length;yt++)V.__webglFramebuffer[yt]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Ct)for(let yt=0,Tt=rt.length;yt<Tt;yt++){let $t=n.get(rt[yt]);$t.__webglTexture===void 0&&($t.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&lt(T)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let yt=0;yt<rt.length;yt++){let Tt=rt[yt];V.__webglColorRenderbuffer[yt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[yt]);let $t=r.convert(Tt.format,Tt.colorSpace),ft=r.convert(Tt.type),At=E(Tt.internalFormat,$t,ft,Tt.colorSpace,T.isXRRenderTarget===!0),Bt=ot(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt,At,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,V.__webglColorRenderbuffer[yt])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),C(V.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(nt){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),Zt(i.TEXTURE_CUBE_MAP,y);for(let yt=0;yt<6;yt++)if(y.mipmaps&&y.mipmaps.length>0)for(let Tt=0;Tt<y.mipmaps.length;Tt++)A(V.__webglFramebuffer[yt][Tt],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Tt);else A(V.__webglFramebuffer[yt],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0);p(y)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let yt=0,Tt=rt.length;yt<Tt;yt++){let $t=rt[yt],ft=n.get($t);e.bindTexture(i.TEXTURE_2D,ft.__webglTexture),Zt(i.TEXTURE_2D,$t),A(V.__webglFramebuffer,T,$t,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,0),p($t)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let yt=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(yt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(yt,tt.__webglTexture),Zt(yt,y),y.mipmaps&&y.mipmaps.length>0)for(let Tt=0;Tt<y.mipmaps.length;Tt++)A(V.__webglFramebuffer[Tt],T,y,i.COLOR_ATTACHMENT0,yt,Tt);else A(V.__webglFramebuffer,T,y,i.COLOR_ATTACHMENT0,yt,0);p(y)&&u(yt),e.unbindTexture()}T.depthBuffer&&k(T)}function q(T){let y=T.textures;for(let V=0,tt=y.length;V<tt;V++){let rt=y[V];if(p(rt)){let nt=b(T),Ct=n.get(rt).__webglTexture;e.bindTexture(nt,Ct),u(nt),e.unbindTexture()}}}let et=[],R=[];function ht(T){if(T.samples>0){if(lt(T)===!1){let y=T.textures,V=T.width,tt=T.height,rt=i.COLOR_BUFFER_BIT,nt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=n.get(T),yt=y.length>1;if(yt)for(let Tt=0;Tt<y.length;Tt++)e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let Tt=0;Tt<y.length;Tt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(rt|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(rt|=i.STENCIL_BUFFER_BIT)),yt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[Tt]);let $t=n.get(y[Tt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$t,0)}i.blitFramebuffer(0,0,V,tt,0,0,V,tt,rt,i.NEAREST),c===!0&&(et.length=0,R.length=0,et.push(i.COLOR_ATTACHMENT0+Tt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(et.push(nt),R.push(nt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,R)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,et))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),yt)for(let Tt=0;Tt<y.length;Tt++){e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[Tt]);let $t=n.get(y[Tt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,$t,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){let y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function ot(T){return Math.min(s.maxSamples,T.samples)}function lt(T){let y=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ut(T){let y=a.render.frame;h.get(T)!==y&&(h.set(T,y),T.update())}function Ut(T,y){let V=T.colorSpace,tt=T.format,rt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||V!==rs&&V!==Yn&&(Kt.getTransfer(V)===se?(tt!==an||rt!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),y}function mt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=G,this.resetTextureUnits=J,this.setTexture2D=ct,this.setTexture2DArray=Q,this.setTexture3D=dt,this.setTextureCube=$,this.rebindTextures=Y,this.setupRenderTarget=D,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=k,this.setupFrameBufferTexture=A,this.useMultisampledRTT=lt}function b0(i,t){function e(n,s=Yn){let r,a=Kt.getTransfer(s);if(n===Dn)return i.UNSIGNED_BYTE;if(n===ic)return i.UNSIGNED_SHORT_4_4_4_4;if(n===sc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Vl)return i.BYTE;if(n===Gl)return i.SHORT;if(n===As)return i.UNSIGNED_SHORT;if(n===nc)return i.INT;if(n===Mi)return i.UNSIGNED_INT;if(n===In)return i.FLOAT;if(n===Fs)return i.HALF_FLOAT;if(n===Xl)return i.ALPHA;if(n===ql)return i.RGB;if(n===an)return i.RGBA;if(n===Yl)return i.LUMINANCE;if(n===Zl)return i.LUMINANCE_ALPHA;if(n===Yi)return i.DEPTH_COMPONENT;if(n===ts)return i.DEPTH_STENCIL;if(n===Jl)return i.RED;if(n===rc)return i.RED_INTEGER;if(n===$l)return i.RG;if(n===oc)return i.RG_INTEGER;if(n===ac)return i.RGBA_INTEGER;if(n===xr||n===yr||n===vr||n===Mr)if(a===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===xr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===xr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===yr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Mr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$o||n===Ko||n===jo||n===Qo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$o)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ko)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===jo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ta||n===ea||n===na)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ta||n===ea)return a===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===na)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ia||n===sa||n===ra||n===oa||n===aa||n===ca||n===la||n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ia)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===sa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ra)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===aa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ca)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===la)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ha)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ua)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===da)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===pa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ma)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ga)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Sr||n===_a||n===xa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Sr)return a===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===_a)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kl||n===ya||n===va||n===Ma)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Sr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ya)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===va)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ma)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var za=class extends we{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Ot=class extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}},E0={type:"move"},Ts=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ot,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ot,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ot,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let x of t.hand.values()){let p=e.getJointPose(x,n),u=this._getHandJoint(l,x);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=h.position.distanceTo(f.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(E0)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ot;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},w0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,T0=`
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

}`,Ha=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new We,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new xn({vertexShader:w0,fragmentShader:T0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Nt(new ze(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ka=class extends ti{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,d=null,m=null,g=null,x=new Ha,p=e.getContextAttributes(),u=null,b=null,E=[],v=[],N=new Xt,P=null,L=new we;L.viewport=new oe;let H=new we;H.viewport=new oe;let w=[L,H],S=new za,U=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let _=E[it];return _===void 0&&(_=new Ts,E[it]=_),_.getTargetRaySpace()},this.getControllerGrip=function(it){let _=E[it];return _===void 0&&(_=new Ts,E[it]=_),_.getGripSpace()},this.getHand=function(it){let _=E[it];return _===void 0&&(_=new Ts,E[it]=_),_.getHandSpace()};function G(it){let _=v.indexOf(it.inputSource);if(_===-1)return;let A=E[_];A!==void 0&&(A.update(it.inputSource,it.frame,l||a),A.dispatchEvent({type:it.type,data:it.inputSource}))}function j(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",ct);for(let it=0;it<E.length;it++){let _=v[it];_!==null&&(v[it]=null,E[it].disconnect(_))}U=null,J=null,x.reset(),t.setRenderTarget(u),m=null,d=null,f=null,s=null,b=null,jt.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){r=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){o=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(it){l=it},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(it){if(s=it,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",j),s.addEventListener("inputsourceschange",ct),p.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(N),s.renderState.layers===void 0){let _={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,_),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new Un(m.framebufferWidth,m.framebufferHeight,{format:an,type:Dn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let _=null,A=null,C=null;p.depth&&(C=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_=p.stencil?ts:Yi,A=p.stencil?Qi:Mi);let B={colorFormat:e.RGBA8,depthFormat:C,scaleFactor:r};f=new XRWebGLBinding(s,e),d=f.createProjectionLayer(B),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new Un(d.textureWidth,d.textureHeight,{format:an,type:Dn,depthTexture:new Nr(d.textureWidth,d.textureHeight,A,void 0,void 0,void 0,void 0,void 0,void 0,_),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),jt.setContext(s),jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ct(it){for(let _=0;_<it.removed.length;_++){let A=it.removed[_],C=v.indexOf(A);C>=0&&(v[C]=null,E[C].disconnect(A))}for(let _=0;_<it.added.length;_++){let A=it.added[_],C=v.indexOf(A);if(C===-1){for(let k=0;k<E.length;k++)if(k>=v.length){v.push(A),C=k;break}else if(v[k]===null){v[k]=A,C=k;break}if(C===-1)break}let B=E[C];B&&B.connect(A)}}let Q=new I,dt=new I;function $(it,_,A){Q.setFromMatrixPosition(_.matrixWorld),dt.setFromMatrixPosition(A.matrixWorld);let C=Q.distanceTo(dt),B=_.projectionMatrix.elements,k=A.projectionMatrix.elements,Y=B[14]/(B[10]-1),D=B[14]/(B[10]+1),q=(B[9]+1)/B[5],et=(B[9]-1)/B[5],R=(B[8]-1)/B[0],ht=(k[8]+1)/k[0],ot=Y*R,lt=Y*ht,ut=C/(-R+ht),Ut=ut*-R;if(_.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(Ut),it.translateZ(ut),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),B[10]===-1)it.projectionMatrix.copy(_.projectionMatrix),it.projectionMatrixInverse.copy(_.projectionMatrixInverse);else{let mt=Y+ut,T=D+ut,y=ot-Ut,V=lt+(C-Ut),tt=q*D/T*mt,rt=et*D/T*mt;it.projectionMatrix.makePerspective(y,V,tt,rt,mt,T),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function gt(it,_){_===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(_.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(s===null)return;let _=it.near,A=it.far;x.texture!==null&&(x.depthNear>0&&(_=x.depthNear),x.depthFar>0&&(A=x.depthFar)),S.near=H.near=L.near=_,S.far=H.far=L.far=A,(U!==S.near||J!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),U=S.near,J=S.far),L.layers.mask=it.layers.mask|2,H.layers.mask=it.layers.mask|4,S.layers.mask=L.layers.mask|H.layers.mask;let C=it.parent,B=S.cameras;gt(S,C);for(let k=0;k<B.length;k++)gt(B[k],C);B.length===2?$(S,L,H):S.projectionMatrix.copy(L.projectionMatrix),_t(it,S,C)};function _t(it,_,A){A===null?it.matrix.copy(_.matrixWorld):(it.matrix.copy(A.matrixWorld),it.matrix.invert(),it.matrix.multiply(_.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(_.projectionMatrix),it.projectionMatrixInverse.copy(_.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=Ea*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(it){c=it,d!==null&&(d.fixedFoveation=it),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=it)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let Dt=null;function Zt(it,_){if(h=_.getViewerPose(l||a),g=_,h!==null){let A=h.views;m!==null&&(t.setRenderTargetFramebuffer(b,m.framebuffer),t.setRenderTarget(b));let C=!1;A.length!==S.cameras.length&&(S.cameras.length=0,C=!0);for(let k=0;k<A.length;k++){let Y=A[k],D=null;if(m!==null)D=m.getViewport(Y);else{let et=f.getViewSubImage(d,Y);D=et.viewport,k===0&&(t.setRenderTargetTextures(b,et.colorTexture,d.ignoreDepthValues?void 0:et.depthStencilTexture),t.setRenderTarget(b))}let q=w[k];q===void 0&&(q=new we,q.layers.enable(k),q.viewport=new oe,w[k]=q),q.matrix.fromArray(Y.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(Y.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(D.x,D.y,D.width,D.height),k===0&&(S.matrix.copy(q.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),C===!0&&S.cameras.push(q)}let B=s.enabledFeatures;if(B&&B.includes("depth-sensing")){let k=f.getDepthInformation(A[0]);k&&k.isValid&&k.texture&&x.init(t,k,s.renderState)}}for(let A=0;A<E.length;A++){let C=v[A],B=E[A];C!==null&&B!==void 0&&B.update(C,_,l||a)}Dt&&Dt(it,_),_.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_}),g=null}let jt=new ih;jt.setAnimationLoop(Zt),this.setAnimationLoop=function(it){Dt=it},this.dispose=function(){}}},pi=new _n,A0=new me;function R0(i,t){function e(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,nh(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function s(p,u,b,E,v){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),f(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u)):u.isMeshStandardMaterial?(r(p,u),d(p,u),u.isMeshPhysicalMaterial&&m(p,u,v)):u.isMeshMatcapMaterial?(r(p,u),g(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),x(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?c(p,u,b,E):u.isSpriteMaterial?l(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,e(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Le&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,e(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Le&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,e(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,e(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);let b=t.get(u),E=b.envMap,v=b.envMapRotation;E&&(p.envMap.value=E,pi.copy(v),pi.x*=-1,pi.y*=-1,pi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),p.envMapRotation.value.setFromMatrix4(A0.makeRotationFromEuler(pi)),p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function c(p,u,b,E){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*b,p.scale.value=E*.5,u.map&&(p.map.value=u.map,e(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function l(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function d(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,b){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Le&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function x(p,u){let b=t.get(u).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function C0(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,E){let v=E.program;n.uniformBlockBinding(b,v)}function l(b,E){let v=s[b.id];v===void 0&&(g(b),v=h(b),s[b.id]=v,b.addEventListener("dispose",p));let N=E.program;n.updateUBOMapping(b,N);let P=t.render.frame;r[b.id]!==P&&(d(b),r[b.id]=P)}function h(b){let E=f();b.__bindingPointIndex=E;let v=i.createBuffer(),N=b.__size,P=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,N,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,v),v}function f(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let E=s[b.id],v=b.uniforms,N=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let P=0,L=v.length;P<L;P++){let H=Array.isArray(v[P])?v[P]:[v[P]];for(let w=0,S=H.length;w<S;w++){let U=H[w];if(m(U,P,w,N)===!0){let J=U.__offset,G=Array.isArray(U.value)?U.value:[U.value],j=0;for(let ct=0;ct<G.length;ct++){let Q=G[ct],dt=x(Q);typeof Q=="number"||typeof Q=="boolean"?(U.__data[0]=Q,i.bufferSubData(i.UNIFORM_BUFFER,J+j,U.__data)):Q.isMatrix3?(U.__data[0]=Q.elements[0],U.__data[1]=Q.elements[1],U.__data[2]=Q.elements[2],U.__data[3]=0,U.__data[4]=Q.elements[3],U.__data[5]=Q.elements[4],U.__data[6]=Q.elements[5],U.__data[7]=0,U.__data[8]=Q.elements[6],U.__data[9]=Q.elements[7],U.__data[10]=Q.elements[8],U.__data[11]=0):(Q.toArray(U.__data,j),j+=dt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,J,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,E,v,N){let P=b.value,L=E+"_"+v;if(N[L]===void 0)return typeof P=="number"||typeof P=="boolean"?N[L]=P:N[L]=P.clone(),!0;{let H=N[L];if(typeof P=="number"||typeof P=="boolean"){if(H!==P)return N[L]=P,!0}else if(H.equals(P)===!1)return H.copy(P),!0}return!1}function g(b){let E=b.uniforms,v=0,N=16;for(let L=0,H=E.length;L<H;L++){let w=Array.isArray(E[L])?E[L]:[E[L]];for(let S=0,U=w.length;S<U;S++){let J=w[S],G=Array.isArray(J.value)?J.value:[J.value];for(let j=0,ct=G.length;j<ct;j++){let Q=G[j],dt=x(Q),$=v%N,gt=$%dt.boundary,_t=$+gt;v+=gt,_t!==0&&N-_t<dt.storage&&(v+=N-_t),J.__data=new Float32Array(dt.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=v,v+=dt.storage}}}let P=v%N;return P>0&&(v+=N-P),b.__size=v,b.__cache={},this}function x(b){let E={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),E}function p(b){let E=b.target;E.removeEventListener("dispose",p);let v=a.indexOf(E.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function u(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:c,update:l,dispose:u}}var Is=class{constructor(t={}){let{canvas:e=Lu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let g=new Uint32Array(4),x=new Int32Array(4),p=null,u=null,b=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pe,this.toneMapping=Kn,this.toneMappingExposure=1;let v=this,N=!1,P=0,L=0,H=null,w=-1,S=null,U=new oe,J=new oe,G=null,j=new kt(0),ct=0,Q=e.width,dt=e.height,$=1,gt=null,_t=null,Dt=new oe(0,0,Q,dt),Zt=new oe(0,0,Q,dt),jt=!1,it=new Cs,_=!1,A=!1,C=new me,B=new me,k=new I,Y=new oe,D={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},q=!1;function et(){return H===null?$:1}let R=n;function ht(M,O){return e.getContext(M,O)}try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${tc}`),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",Et,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),R===null){let O="webgl2";if(R=ht(O,M),R===null)throw ht(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let ot,lt,ut,Ut,mt,T,y,V,tt,rt,nt,Ct,yt,Tt,$t,ft,At,Bt,zt,Rt,Jt,qt,ce,F;function vt(){ot=new Xp(R),ot.init(),qt=new b0(R,ot),lt=new zp(R,ot,t,qt),ut=new v0(R,ot),lt.reverseDepthBuffer&&d&&ut.buffers.depth.setReversed(!0),Ut=new Zp(R),mt=new a0,T=new S0(R,ot,ut,mt,lt,qt,Ut),y=new kp(v),V=new Wp(v),tt=new td(R),ce=new Op(R,tt),rt=new qp(R,tt,Ut,ce),nt=new $p(R,rt,tt,Ut),zt=new Jp(R,lt,T),ft=new Hp(mt),Ct=new o0(v,y,V,ot,lt,ce,ft),yt=new R0(v,mt),Tt=new l0,$t=new m0(ot),Bt=new Fp(v,y,V,ut,nt,m,c),At=new x0(v,nt,lt),F=new C0(R,Ut,lt,ut),Rt=new Bp(R,ot,Ut),Jt=new Yp(R,ot,Ut),Ut.programs=Ct.programs,v.capabilities=lt,v.extensions=ot,v.properties=mt,v.renderLists=Tt,v.shadowMap=At,v.state=ut,v.info=Ut}vt();let K=new ka(v,R);this.xr=K,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let M=ot.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=ot.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(M){M!==void 0&&($=M,this.setSize(Q,dt,!1))},this.getSize=function(M){return M.set(Q,dt)},this.setSize=function(M,O,W=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=M,dt=O,e.width=Math.floor(M*$),e.height=Math.floor(O*$),W===!0&&(e.style.width=M+"px",e.style.height=O+"px"),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(Q*$,dt*$).floor()},this.setDrawingBufferSize=function(M,O,W){Q=M,dt=O,$=W,e.width=Math.floor(M*W),e.height=Math.floor(O*W),this.setViewport(0,0,M,O)},this.getCurrentViewport=function(M){return M.copy(U)},this.getViewport=function(M){return M.copy(Dt)},this.setViewport=function(M,O,W,X){M.isVector4?Dt.set(M.x,M.y,M.z,M.w):Dt.set(M,O,W,X),ut.viewport(U.copy(Dt).multiplyScalar($).round())},this.getScissor=function(M){return M.copy(Zt)},this.setScissor=function(M,O,W,X){M.isVector4?Zt.set(M.x,M.y,M.z,M.w):Zt.set(M,O,W,X),ut.scissor(J.copy(Zt).multiplyScalar($).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(M){ut.setScissorTest(jt=M)},this.setOpaqueSort=function(M){gt=M},this.setTransparentSort=function(M){_t=M},this.getClearColor=function(M){return M.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor.apply(Bt,arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha.apply(Bt,arguments)},this.clear=function(M=!0,O=!0,W=!0){let X=0;if(M){let z=!1;if(H!==null){let pt=H.texture.format;z=pt===ac||pt===oc||pt===rc}if(z){let pt=H.texture.type,St=pt===Dn||pt===Mi||pt===As||pt===Qi||pt===ic||pt===sc,It=Bt.getClearColor(),Pt=Bt.getClearAlpha(),Ht=It.r,Gt=It.g,Lt=It.b;St?(g[0]=Ht,g[1]=Gt,g[2]=Lt,g[3]=Pt,R.clearBufferuiv(R.COLOR,0,g)):(x[0]=Ht,x[1]=Gt,x[2]=Lt,x[3]=Pt,R.clearBufferiv(R.COLOR,0,x))}else X|=R.COLOR_BUFFER_BIT}O&&(X|=R.DEPTH_BUFFER_BIT),W&&(X|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",Et,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),Tt.dispose(),$t.dispose(),mt.dispose(),y.dispose(),V.dispose(),nt.dispose(),ce.dispose(),F.dispose(),Ct.dispose(),K.dispose(),K.removeEventListener("sessionstart",Rc),K.removeEventListener("sessionend",Cc),ci.stop()};function at(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Et(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;let M=Ut.autoReset,O=At.enabled,W=At.autoUpdate,X=At.needsUpdate,z=At.type;vt(),Ut.autoReset=M,At.enabled=O,At.autoUpdate=W,At.needsUpdate=X,At.type=z}function Mt(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Vt(M){let O=M.target;O.removeEventListener("dispose",Vt),_e(O)}function _e(M){Re(M),mt.remove(M)}function Re(M){let O=mt.get(M).programs;O!==void 0&&(O.forEach(function(W){Ct.releaseProgram(W)}),M.isShaderMaterial&&Ct.releaseShaderCache(M))}this.renderBufferDirect=function(M,O,W,X,z,pt){O===null&&(O=D);let St=z.isMesh&&z.matrixWorld.determinant()<0,It=Gh(M,O,W,X,z);ut.setMaterial(X,St);let Pt=W.index,Ht=1;if(X.wireframe===!0){if(Pt=rt.getWireframeAttribute(W),Pt===void 0)return;Ht=2}let Gt=W.drawRange,Lt=W.attributes.position,Qt=Gt.start*Ht,le=(Gt.start+Gt.count)*Ht;pt!==null&&(Qt=Math.max(Qt,pt.start*Ht),le=Math.min(le,(pt.start+pt.count)*Ht)),Pt!==null?(Qt=Math.max(Qt,0),le=Math.min(le,Pt.count)):Lt!=null&&(Qt=Math.max(Qt,0),le=Math.min(le,Lt.count));let he=le-Qt;if(he<0||he===1/0)return;ce.setup(z,X,It,W,Pt);let Oe,te=Rt;if(Pt!==null&&(Oe=tt.get(Pt),te=Jt,te.setIndex(Oe)),z.isMesh)X.wireframe===!0?(ut.setLineWidth(X.wireframeLinewidth*et()),te.setMode(R.LINES)):te.setMode(R.TRIANGLES);else if(z.isLine){let Ft=X.linewidth;Ft===void 0&&(Ft=1),ut.setLineWidth(Ft*et()),z.isLineSegments?te.setMode(R.LINES):z.isLineLoop?te.setMode(R.LINE_LOOP):te.setMode(R.LINE_STRIP)}else z.isPoints?te.setMode(R.POINTS):z.isSprite&&te.setMode(R.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)te.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(ot.get("WEBGL_multi_draw"))te.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Ft=z._multiDrawStarts,Sn=z._multiDrawCounts,ee=z._multiDrawCount,nn=Pt?tt.get(Pt).bytesPerElement:1,Ai=mt.get(X).currentProgram.getUniforms();for(let ke=0;ke<ee;ke++)Ai.setValue(R,"_gl_DrawID",ke),te.render(Ft[ke]/nn,Sn[ke])}else if(z.isInstancedMesh)te.renderInstances(Qt,he,z.count);else if(W.isInstancedBufferGeometry){let Ft=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Sn=Math.min(W.instanceCount,Ft);te.renderInstances(Qt,he,Sn)}else te.render(Qt,he)};function ne(M,O,W){M.transparent===!0&&M.side===Pe&&M.forceSinglePass===!1?(M.side=Le,M.needsUpdate=!0,qs(M,O,W),M.side=Qn,M.needsUpdate=!0,qs(M,O,W),M.side=Pe):qs(M,O,W)}this.compile=function(M,O,W=null){W===null&&(W=M),u=$t.get(W),u.init(O),E.push(u),W.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(u.pushLight(z),z.castShadow&&u.pushShadow(z))}),M!==W&&M.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(u.pushLight(z),z.castShadow&&u.pushShadow(z))}),u.setupLights();let X=new Set;return M.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let pt=z.material;if(pt)if(Array.isArray(pt))for(let St=0;St<pt.length;St++){let It=pt[St];ne(It,W,z),X.add(It)}else ne(pt,W,z),X.add(pt)}),E.pop(),u=null,X},this.compileAsync=function(M,O,W=null){let X=this.compile(M,O,W);return new Promise(z=>{function pt(){if(X.forEach(function(St){mt.get(St).currentProgram.isReady()&&X.delete(St)}),X.size===0){z(M);return}setTimeout(pt,10)}ot.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let en=null;function Mn(M){en&&en(M)}function Rc(){ci.stop()}function Cc(){ci.start()}let ci=new ih;ci.setAnimationLoop(Mn),typeof self<"u"&&ci.setContext(self),this.setAnimationLoop=function(M){en=M,K.setAnimationLoop(M),M===null?ci.stop():ci.start()},K.addEventListener("sessionstart",Rc),K.addEventListener("sessionend",Cc),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(O),O=K.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,O,H),u=$t.get(M,E.length),u.init(O),E.push(u),B.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),it.setFromProjectionMatrix(B),A=this.localClippingEnabled,_=ft.init(this.clippingPlanes,A),p=Tt.get(M,b.length),p.init(),b.push(p),K.enabled===!0&&K.isPresenting===!0){let pt=v.xr.getDepthSensingMesh();pt!==null&&io(pt,O,-1/0,v.sortObjects)}io(M,O,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(gt,_t),q=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,q&&Bt.addToRenderList(p,M),this.info.render.frame++,_===!0&&ft.beginShadows();let W=u.state.shadowsArray;At.render(W,M,O),_===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset();let X=p.opaque,z=p.transmissive;if(u.setupLights(),O.isArrayCamera){let pt=O.cameras;if(z.length>0)for(let St=0,It=pt.length;St<It;St++){let Pt=pt[St];Pc(X,z,M,Pt)}q&&Bt.render(M);for(let St=0,It=pt.length;St<It;St++){let Pt=pt[St];Ic(p,M,Pt,Pt.viewport)}}else z.length>0&&Pc(X,z,M,O),q&&Bt.render(M),Ic(p,M,O);H!==null&&(T.updateMultisampleRenderTarget(H),T.updateRenderTargetMipmap(H)),M.isScene===!0&&M.onAfterRender(v,M,O),ce.resetDefaultState(),w=-1,S=null,E.pop(),E.length>0?(u=E[E.length-1],_===!0&&ft.setGlobalState(v.clippingPlanes,u.state.camera)):u=null,b.pop(),b.length>0?p=b[b.length-1]:p=null};function io(M,O,W,X){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)W=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLight)u.pushLight(M),M.castShadow&&u.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||it.intersectsSprite(M)){X&&Y.setFromMatrixPosition(M.matrixWorld).applyMatrix4(B);let St=nt.update(M),It=M.material;It.visible&&p.push(M,St,It,W,Y.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||it.intersectsObject(M))){let St=nt.update(M),It=M.material;if(X&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Y.copy(M.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Y.copy(St.boundingSphere.center)),Y.applyMatrix4(M.matrixWorld).applyMatrix4(B)),Array.isArray(It)){let Pt=St.groups;for(let Ht=0,Gt=Pt.length;Ht<Gt;Ht++){let Lt=Pt[Ht],Qt=It[Lt.materialIndex];Qt&&Qt.visible&&p.push(M,St,Qt,W,Y.z,Lt)}}else It.visible&&p.push(M,St,It,W,Y.z,null)}}let pt=M.children;for(let St=0,It=pt.length;St<It;St++)io(pt[St],O,W,X)}function Ic(M,O,W,X){let z=M.opaque,pt=M.transmissive,St=M.transparent;u.setupLightsView(W),_===!0&&ft.setGlobalState(v.clippingPlanes,W),X&&ut.viewport(U.copy(X)),z.length>0&&Xs(z,O,W),pt.length>0&&Xs(pt,O,W),St.length>0&&Xs(St,O,W),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function Pc(M,O,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[X.id]===void 0&&(u.state.transmissionRenderTarget[X.id]=new Un(1,1,{generateMipmaps:!0,type:ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float")?Fs:Dn,minFilter:yi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace}));let pt=u.state.transmissionRenderTarget[X.id],St=X.viewport||U;pt.setSize(St.z,St.w);let It=v.getRenderTarget();v.setRenderTarget(pt),v.getClearColor(j),ct=v.getClearAlpha(),ct<1&&v.setClearColor(16777215,.5),v.clear(),q&&Bt.render(W);let Pt=v.toneMapping;v.toneMapping=Kn;let Ht=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),u.setupLightsView(X),_===!0&&ft.setGlobalState(v.clippingPlanes,X),Xs(M,W,X),T.updateMultisampleRenderTarget(pt),T.updateRenderTargetMipmap(pt),ot.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let Lt=0,Qt=O.length;Lt<Qt;Lt++){let le=O[Lt],he=le.object,Oe=le.geometry,te=le.material,Ft=le.group;if(te.side===Pe&&he.layers.test(X.layers)){let Sn=te.side;te.side=Le,te.needsUpdate=!0,Lc(he,W,X,Oe,te,Ft),te.side=Sn,te.needsUpdate=!0,Gt=!0}}Gt===!0&&(T.updateMultisampleRenderTarget(pt),T.updateRenderTargetMipmap(pt))}v.setRenderTarget(It),v.setClearColor(j,ct),Ht!==void 0&&(X.viewport=Ht),v.toneMapping=Pt}function Xs(M,O,W){let X=O.isScene===!0?O.overrideMaterial:null;for(let z=0,pt=M.length;z<pt;z++){let St=M[z],It=St.object,Pt=St.geometry,Ht=X===null?St.material:X,Gt=St.group;It.layers.test(W.layers)&&Lc(It,O,W,Pt,Ht,Gt)}}function Lc(M,O,W,X,z,pt){M.onBeforeRender(v,O,W,X,z,pt),M.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),z.onBeforeRender(v,O,W,X,M,pt),z.transparent===!0&&z.side===Pe&&z.forceSinglePass===!1?(z.side=Le,z.needsUpdate=!0,v.renderBufferDirect(W,O,X,z,M,pt),z.side=Qn,z.needsUpdate=!0,v.renderBufferDirect(W,O,X,z,M,pt),z.side=Pe):v.renderBufferDirect(W,O,X,z,M,pt),M.onAfterRender(v,O,W,X,z,pt)}function qs(M,O,W){O.isScene!==!0&&(O=D);let X=mt.get(M),z=u.state.lights,pt=u.state.shadowsArray,St=z.state.version,It=Ct.getParameters(M,z.state,pt,O,W),Pt=Ct.getProgramCacheKey(It),Ht=X.programs;X.environment=M.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(M.isMeshStandardMaterial?V:y).get(M.envMap||X.environment),X.envMapRotation=X.environment!==null&&M.envMap===null?O.environmentRotation:M.envMapRotation,Ht===void 0&&(M.addEventListener("dispose",Vt),Ht=new Map,X.programs=Ht);let Gt=Ht.get(Pt);if(Gt!==void 0){if(X.currentProgram===Gt&&X.lightsStateVersion===St)return Uc(M,It),Gt}else It.uniforms=Ct.getUniforms(M),M.onBeforeCompile(It,v),Gt=Ct.acquireProgram(It,Pt),Ht.set(Pt,Gt),X.uniforms=It.uniforms;let Lt=X.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Lt.clippingPlanes=ft.uniform),Uc(M,It),X.needsLights=Xh(M),X.lightsStateVersion=St,X.needsLights&&(Lt.ambientLightColor.value=z.state.ambient,Lt.lightProbe.value=z.state.probe,Lt.directionalLights.value=z.state.directional,Lt.directionalLightShadows.value=z.state.directionalShadow,Lt.spotLights.value=z.state.spot,Lt.spotLightShadows.value=z.state.spotShadow,Lt.rectAreaLights.value=z.state.rectArea,Lt.ltc_1.value=z.state.rectAreaLTC1,Lt.ltc_2.value=z.state.rectAreaLTC2,Lt.pointLights.value=z.state.point,Lt.pointLightShadows.value=z.state.pointShadow,Lt.hemisphereLights.value=z.state.hemi,Lt.directionalShadowMap.value=z.state.directionalShadowMap,Lt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Lt.spotShadowMap.value=z.state.spotShadowMap,Lt.spotLightMatrix.value=z.state.spotLightMatrix,Lt.spotLightMap.value=z.state.spotLightMap,Lt.pointShadowMap.value=z.state.pointShadowMap,Lt.pointShadowMatrix.value=z.state.pointShadowMatrix),X.currentProgram=Gt,X.uniformsList=null,Gt}function Dc(M){if(M.uniformsList===null){let O=M.currentProgram.getUniforms();M.uniformsList=Ji.seqWithValue(O.seq,M.uniforms)}return M.uniformsList}function Uc(M,O){let W=mt.get(M);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function Gh(M,O,W,X,z){O.isScene!==!0&&(O=D),T.resetTextureUnits();let pt=O.fog,St=X.isMeshStandardMaterial?O.environment:null,It=H===null?v.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:rs,Pt=(X.isMeshStandardMaterial?V:y).get(X.envMap||St),Ht=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Gt=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Lt=!!W.morphAttributes.position,Qt=!!W.morphAttributes.normal,le=!!W.morphAttributes.color,he=Kn;X.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(he=v.toneMapping);let Oe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,te=Oe!==void 0?Oe.length:0,Ft=mt.get(X),Sn=u.state.lights;if(_===!0&&(A===!0||M!==S)){let Ye=M===S&&X.id===w;ft.setState(X,M,Ye)}let ee=!1;X.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==Sn.state.version||Ft.outputColorSpace!==It||z.isBatchedMesh&&Ft.batching===!1||!z.isBatchedMesh&&Ft.batching===!0||z.isBatchedMesh&&Ft.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ft.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ft.instancing===!1||!z.isInstancedMesh&&Ft.instancing===!0||z.isSkinnedMesh&&Ft.skinning===!1||!z.isSkinnedMesh&&Ft.skinning===!0||z.isInstancedMesh&&Ft.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ft.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ft.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ft.instancingMorph===!1&&z.morphTexture!==null||Ft.envMap!==Pt||X.fog===!0&&Ft.fog!==pt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==ft.numPlanes||Ft.numIntersection!==ft.numIntersection)||Ft.vertexAlphas!==Ht||Ft.vertexTangents!==Gt||Ft.morphTargets!==Lt||Ft.morphNormals!==Qt||Ft.morphColors!==le||Ft.toneMapping!==he||Ft.morphTargetsCount!==te)&&(ee=!0):(ee=!0,Ft.__version=X.version);let nn=Ft.currentProgram;ee===!0&&(nn=qs(X,O,z));let Ai=!1,ke=!1,ps=!1,ue=nn.getUniforms(),dn=Ft.uniforms;if(ut.useProgram(nn.program)&&(Ai=!0,ke=!0,ps=!0),X.id!==w&&(w=X.id,ke=!0),Ai||S!==M){ut.buffers.depth.getReversed()?(C.copy(M.projectionMatrix),Uu(C),Nu(C),ue.setValue(R,"projectionMatrix",C)):ue.setValue(R,"projectionMatrix",M.projectionMatrix),ue.setValue(R,"viewMatrix",M.matrixWorldInverse);let zn=ue.map.cameraPosition;zn!==void 0&&zn.setValue(R,k.setFromMatrixPosition(M.matrixWorld)),lt.logarithmicDepthBuffer&&ue.setValue(R,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ue.setValue(R,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,ke=!0,ps=!0)}if(z.isSkinnedMesh){ue.setOptional(R,z,"bindMatrix"),ue.setOptional(R,z,"bindMatrixInverse");let Ye=z.skeleton;Ye&&(Ye.boneTexture===null&&Ye.computeBoneTexture(),ue.setValue(R,"boneTexture",Ye.boneTexture,T))}z.isBatchedMesh&&(ue.setOptional(R,z,"batchingTexture"),ue.setValue(R,"batchingTexture",z._matricesTexture,T),ue.setOptional(R,z,"batchingIdTexture"),ue.setValue(R,"batchingIdTexture",z._indirectTexture,T),ue.setOptional(R,z,"batchingColorTexture"),z._colorsTexture!==null&&ue.setValue(R,"batchingColorTexture",z._colorsTexture,T));let ms=W.morphAttributes;if((ms.position!==void 0||ms.normal!==void 0||ms.color!==void 0)&&zt.update(z,W,nn),(ke||Ft.receiveShadow!==z.receiveShadow)&&(Ft.receiveShadow=z.receiveShadow,ue.setValue(R,"receiveShadow",z.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(dn.envMap.value=Pt,dn.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&O.environment!==null&&(dn.envMapIntensity.value=O.environmentIntensity),ke&&(ue.setValue(R,"toneMappingExposure",v.toneMappingExposure),Ft.needsLights&&Wh(dn,ps),pt&&X.fog===!0&&yt.refreshFogUniforms(dn,pt),yt.refreshMaterialUniforms(dn,X,$,dt,u.state.transmissionRenderTarget[M.id]),Ji.upload(R,Dc(Ft),dn,T)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ji.upload(R,Dc(Ft),dn,T),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ue.setValue(R,"center",z.center),ue.setValue(R,"modelViewMatrix",z.modelViewMatrix),ue.setValue(R,"normalMatrix",z.normalMatrix),ue.setValue(R,"modelMatrix",z.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let Ye=X.uniformsGroups;for(let zn=0,Hn=Ye.length;zn<Hn;zn++){let Nc=Ye[zn];F.update(Nc,nn),F.bind(Nc,nn)}}return nn}function Wh(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}function Xh(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(M,O,W){mt.get(M.texture).__webglTexture=O,mt.get(M.depthTexture).__webglTexture=W;let X=mt.get(M);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,O){let W=mt.get(M);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(M,O=0,W=0){H=M,P=O,L=W;let X=!0,z=null,pt=!1,St=!1;if(M){let Pt=mt.get(M);if(Pt.__useDefaultFramebuffer!==void 0)ut.bindFramebuffer(R.FRAMEBUFFER,null),X=!1;else if(Pt.__webglFramebuffer===void 0)T.setupRenderTarget(M);else if(Pt.__hasExternalTextures)T.rebindTextures(M,mt.get(M.texture).__webglTexture,mt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Lt=M.depthTexture;if(Pt.__boundDepthTexture!==Lt){if(Lt!==null&&mt.has(Lt)&&(M.width!==Lt.image.width||M.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(M)}}let Ht=M.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(St=!0);let Gt=mt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Gt[O])?z=Gt[O][W]:z=Gt[O],pt=!0):M.samples>0&&T.useMultisampledRTT(M)===!1?z=mt.get(M).__webglMultisampledFramebuffer:Array.isArray(Gt)?z=Gt[W]:z=Gt,U.copy(M.viewport),J.copy(M.scissor),G=M.scissorTest}else U.copy(Dt).multiplyScalar($).floor(),J.copy(Zt).multiplyScalar($).floor(),G=jt;if(ut.bindFramebuffer(R.FRAMEBUFFER,z)&&X&&ut.drawBuffers(M,z),ut.viewport(U),ut.scissor(J),ut.setScissorTest(G),pt){let Pt=mt.get(M.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+O,Pt.__webglTexture,W)}else if(St){let Pt=mt.get(M.texture),Ht=O||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Pt.__webglTexture,W||0,Ht)}w=-1},this.readRenderTargetPixels=function(M,O,W,X,z,pt,St){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=mt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&St!==void 0&&(It=It[St]),It){ut.bindFramebuffer(R.FRAMEBUFFER,It);try{let Pt=M.texture,Ht=Pt.format,Gt=Pt.type;if(!lt.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-X&&W>=0&&W<=M.height-z&&R.readPixels(O,W,X,z,qt.convert(Ht),qt.convert(Gt),pt)}finally{let Pt=H!==null?mt.get(H).__webglFramebuffer:null;ut.bindFramebuffer(R.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(M,O,W,X,z,pt,St){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=mt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&St!==void 0&&(It=It[St]),It){let Pt=M.texture,Ht=Pt.format,Gt=Pt.type;if(!lt.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=M.width-X&&W>=0&&W<=M.height-z){ut.bindFramebuffer(R.FRAMEBUFFER,It);let Lt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Lt),R.bufferData(R.PIXEL_PACK_BUFFER,pt.byteLength,R.STREAM_READ),R.readPixels(O,W,X,z,qt.convert(Ht),qt.convert(Gt),0);let Qt=H!==null?mt.get(H).__webglFramebuffer:null;ut.bindFramebuffer(R.FRAMEBUFFER,Qt);let le=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Du(R,le,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Lt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,pt),R.deleteBuffer(Lt),R.deleteSync(le),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,O=null,W=0){M.isTexture!==!0&&(Es("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,M=arguments[1]);let X=Math.pow(2,-W),z=Math.floor(M.image.width*X),pt=Math.floor(M.image.height*X),St=O!==null?O.x:0,It=O!==null?O.y:0;T.setTexture2D(M,0),R.copyTexSubImage2D(R.TEXTURE_2D,W,0,0,St,It,z,pt),ut.unbindTexture()},this.copyTextureToTexture=function(M,O,W=null,X=null,z=0){M.isTexture!==!0&&(Es("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,M=arguments[1],O=arguments[2],z=arguments[3]||0,W=null);let pt,St,It,Pt,Ht,Gt,Lt,Qt,le,he=M.isCompressedTexture?M.mipmaps[z]:M.image;W!==null?(pt=W.max.x-W.min.x,St=W.max.y-W.min.y,It=W.isBox3?W.max.z-W.min.z:1,Pt=W.min.x,Ht=W.min.y,Gt=W.isBox3?W.min.z:0):(pt=he.width,St=he.height,It=he.depth||1,Pt=0,Ht=0,Gt=0),X!==null?(Lt=X.x,Qt=X.y,le=X.z):(Lt=0,Qt=0,le=0);let Oe=qt.convert(O.format),te=qt.convert(O.type),Ft;O.isData3DTexture?(T.setTexture3D(O,0),Ft=R.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(T.setTexture2DArray(O,0),Ft=R.TEXTURE_2D_ARRAY):(T.setTexture2D(O,0),Ft=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,O.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,O.unpackAlignment);let Sn=R.getParameter(R.UNPACK_ROW_LENGTH),ee=R.getParameter(R.UNPACK_IMAGE_HEIGHT),nn=R.getParameter(R.UNPACK_SKIP_PIXELS),Ai=R.getParameter(R.UNPACK_SKIP_ROWS),ke=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,he.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,he.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Pt),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ht),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Gt);let ps=M.isDataArrayTexture||M.isData3DTexture,ue=O.isDataArrayTexture||O.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){let dn=mt.get(M),ms=mt.get(O),Ye=mt.get(dn.__renderTarget),zn=mt.get(ms.__renderTarget);ut.bindFramebuffer(R.READ_FRAMEBUFFER,Ye.__webglFramebuffer),ut.bindFramebuffer(R.DRAW_FRAMEBUFFER,zn.__webglFramebuffer);for(let Hn=0;Hn<It;Hn++)ps&&R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,mt.get(M).__webglTexture,z,Gt+Hn),M.isDepthTexture?(ue&&R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,mt.get(O).__webglTexture,z,le+Hn),R.blitFramebuffer(Pt,Ht,pt,St,Lt,Qt,pt,St,R.DEPTH_BUFFER_BIT,R.NEAREST)):ue?R.copyTexSubImage3D(Ft,z,Lt,Qt,le+Hn,Pt,Ht,pt,St):R.copyTexSubImage2D(Ft,z,Lt,Qt,le+Hn,Pt,Ht,pt,St);ut.bindFramebuffer(R.READ_FRAMEBUFFER,null),ut.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else ue?M.isDataTexture||M.isData3DTexture?R.texSubImage3D(Ft,z,Lt,Qt,le,pt,St,It,Oe,te,he.data):O.isCompressedArrayTexture?R.compressedTexSubImage3D(Ft,z,Lt,Qt,le,pt,St,It,Oe,he.data):R.texSubImage3D(Ft,z,Lt,Qt,le,pt,St,It,Oe,te,he):M.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,z,Lt,Qt,pt,St,Oe,te,he.data):M.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,z,Lt,Qt,he.width,he.height,Oe,he.data):R.texSubImage2D(R.TEXTURE_2D,z,Lt,Qt,pt,St,Oe,te,he);R.pixelStorei(R.UNPACK_ROW_LENGTH,Sn),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ee),R.pixelStorei(R.UNPACK_SKIP_PIXELS,nn),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ai),R.pixelStorei(R.UNPACK_SKIP_IMAGES,ke),z===0&&O.generateMipmaps&&R.generateMipmap(Ft),ut.unbindTexture()},this.copyTextureToTexture3D=function(M,O,W=null,X=null,z=0){return M.isTexture!==!0&&(Es("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,M=arguments[2],O=arguments[3],z=arguments[4]||0),Es('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,O,W,X,z)},this.initRenderTarget=function(M){mt.get(M).__webglFramebuffer===void 0&&T.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?T.setTextureCube(M,0):M.isData3DTexture?T.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?T.setTexture2DArray(M,0):T.setTexture2D(M,0),ut.unbindTexture()},this.resetState=function(){P=0,L=0,H=null,ut.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Kt._getUnpackColorSpace()}};var Fr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new kt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ps=class extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Or=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ba,this.updateRanges=[],this.version=0,this.uuid=jn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ue=new I,Ls=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=pn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=pn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=pn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=pn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),s=re(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),s=re(s,this.array),r=re(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ve(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Fn=class extends ni{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Vi,vs=new I,Gi=new I,Wi=new I,Xi=new Xt,Ms=new Xt,ch=new me,pr=new I,Ss=new I,mr=new I,Ul=new Xt,No=new Xt,Nl=new Xt,ln=class extends De{constructor(t=new Fn){if(super(),this.isSprite=!0,this.type="Sprite",Vi===void 0){Vi=new Ae;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Or(e,5);Vi.setIndex([0,1,2,0,2,3]),Vi.setAttribute("position",new Ls(n,3,0,!1)),Vi.setAttribute("uv",new Ls(n,2,3,!1))}this.geometry=Vi,this.material=t,this.center=new Xt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Gi.setFromMatrixScale(this.matrixWorld),ch.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Wi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Gi.multiplyScalar(-Wi.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;gr(pr.set(-.5,-.5,0),Wi,a,Gi,s,r),gr(Ss.set(.5,-.5,0),Wi,a,Gi,s,r),gr(mr.set(.5,.5,0),Wi,a,Gi,s,r),Ul.set(0,0),No.set(1,0),Nl.set(1,1);let o=t.ray.intersectTriangle(pr,Ss,mr,!1,vs);if(o===null&&(gr(Ss.set(-.5,.5,0),Wi,a,Gi,s,r),No.set(0,1),o=t.ray.intersectTriangle(pr,mr,Ss,!1,vs),o===null))return;let c=t.ray.origin.distanceTo(vs);c<t.near||c>t.far||e.push({distance:c,point:vs.clone(),uv:Zn.getInterpolation(vs,pr,Ss,mr,Ul,No,Nl,new Xt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function gr(i,t,e,n,s,r){Xi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ms.x=r*Xi.x-s*Xi.y,Ms.y=s*Xi.x+r*Xi.y):Ms.copy(Xi),i.copy(t),i.x+=Ms.x,i.y+=Ms.y,i.applyMatrix4(ch)}var hn=class extends We{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Br=class i extends Ae{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new I,h=new Xt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){let m=n+f/e*s;l.x=t*Math.cos(m),l.y=t*Math.sin(m),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,c.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new ae(a,3)),this.setAttribute("normal",new ae(o,3)),this.setAttribute("uv",new ae(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Xe=class i extends Ae{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],d=[],m=[],g=0,x=[],p=n/2,u=0;b(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new ae(f,3)),this.setAttribute("normal",new ae(d,3)),this.setAttribute("uv",new ae(m,2));function b(){let v=new I,N=new I,P=0,L=(e-t)/n;for(let H=0;H<=r;H++){let w=[],S=H/r,U=S*(e-t)+t;for(let J=0;J<=s;J++){let G=J/s,j=G*c+o,ct=Math.sin(j),Q=Math.cos(j);N.x=U*ct,N.y=-S*n+p,N.z=U*Q,f.push(N.x,N.y,N.z),v.set(ct,L,Q).normalize(),d.push(v.x,v.y,v.z),m.push(G,1-S),w.push(g++)}x.push(w)}for(let H=0;H<s;H++)for(let w=0;w<r;w++){let S=x[w][H],U=x[w+1][H],J=x[w+1][H+1],G=x[w][H+1];(t>0||w!==0)&&(h.push(S,U,G),P+=3),(e>0||w!==r-1)&&(h.push(U,J,G),P+=3)}l.addGroup(u,P,0),u+=P}function E(v){let N=g,P=new Xt,L=new I,H=0,w=v===!0?t:e,S=v===!0?1:-1;for(let J=1;J<=s;J++)f.push(0,p*S,0),d.push(0,S,0),m.push(.5,.5),g++;let U=g;for(let J=0;J<=s;J++){let j=J/s*c+o,ct=Math.cos(j),Q=Math.sin(j);L.x=w*Q,L.y=p*S,L.z=w*ct,f.push(L.x,L.y,L.z),d.push(0,S,0),P.x=ct*.5+.5,P.y=Q*.5*S+.5,m.push(P.x,P.y),g++}for(let J=0;J<s;J++){let G=N+J,j=U+J;v===!0?h.push(j,j+1,G):h.push(j+1,j,G),H+=3}l.addGroup(u,H,v===!0?1:2),u+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},On=class i extends Xe{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var zr=class i extends Ae{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],h=[],f=t,d=(e-t)/s,m=new I,g=new Xt;for(let x=0;x<=s;x++){for(let p=0;p<=n;p++){let u=r+p/n*a;m.x=f*Math.cos(u),m.y=f*Math.sin(u),c.push(m.x,m.y,m.z),l.push(0,0,1),g.x=(m.x/e+1)/2,g.y=(m.y/e+1)/2,h.push(g.x,g.y)}f+=d}for(let x=0;x<s;x++){let p=x*(n+1);for(let u=0;u<n;u++){let b=u+p,E=b,v=b+n+1,N=b+n+2,P=b+1;o.push(E,v,P),o.push(v,N,P)}}this.setIndex(o),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(l,3)),this.setAttribute("uv",new ae(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Hr=class i extends Ae{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],f=new I,d=new I,m=[],g=[],x=[],p=[];for(let u=0;u<=n;u++){let b=[],E=u/n,v=0;u===0&&a===0?v=.5/e:u===n&&c===Math.PI&&(v=-.5/e);for(let N=0;N<=e;N++){let P=N/e;f.x=-t*Math.cos(s+P*r)*Math.sin(a+E*o),f.y=t*Math.cos(a+E*o),f.z=t*Math.sin(s+P*r)*Math.sin(a+E*o),g.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),p.push(P+v,1-E),b.push(l++)}h.push(b)}for(let u=0;u<n;u++)for(let b=0;b<e;b++){let E=h[u][b+1],v=h[u][b],N=h[u+1][b],P=h[u+1][b+1];(u!==0||a>0)&&m.push(E,v,P),(u!==n-1||c<Math.PI)&&m.push(v,N,P)}this.setIndex(m),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(x,3)),this.setAttribute("uv",new ae(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ns=class i extends Ae{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],h=new I,f=new I,d=new I;for(let m=0;m<=n;m++)for(let g=0;g<=s;g++){let x=g/s*r,p=m/n*Math.PI*2;f.x=(t+e*Math.cos(p))*Math.cos(x),f.y=(t+e*Math.cos(p))*Math.sin(x),f.z=e*Math.sin(p),o.push(f.x,f.y,f.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(f,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=s;g++){let x=(s+1)*m+g-1,p=(s+1)*(m-1)+g-1,u=(s+1)*(m-1)+g,b=(s+1)*m+g;a.push(x,p,b),a.push(p,u,b)}this.setIndex(a),this.setAttribute("position",new ae(o,3)),this.setAttribute("normal",new ae(c,3)),this.setAttribute("uv",new ae(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var xe=class extends ni{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jl,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function _r(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function I0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var is=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Va=class extends is{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zc,endingEnd:zc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Hc:r=t,o=2*e-n;break;case kc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Hc:a=t,c=2*n-e;break;case kc:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(n-e)/(s-e),x=g*g,p=x*g,u=-d*p+2*d*x-d*g,b=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*g+1,E=(-1-m)*p+(1.5+m)*x+.5*g,v=m*p-m*x;for(let N=0;N!==o;++N)r[N]=u*a[h+N]+b*a[l+N]+E*a[c+N]+v*a[f+N];return r}},Ga=class extends is{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),f=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*f+a[c+d]*h;return r}},Wa=class extends is{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},un=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=_r(e,this.TimeBufferType),this.values=_r(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:_r(t.times,Array),values:_r(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Wa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ga(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Va(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case br:e=this.InterpolantFactoryMethodDiscrete;break;case Sa:e=this.InterpolantFactoryMethodLinear;break;case ro:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return br;case this.InterpolantFactoryMethodLinear:return Sa;case this.InterpolantFactoryMethodSmooth:return ro}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&I0(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ro,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let f=o*n,d=f-n,m=f+n;for(let g=0;g!==n;++g){let x=e[f+g];if(x!==e[d+g]||x!==e[m+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let f=o*n,d=a*n;for(let m=0;m!==n;++m)e[d+m]=e[f+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};un.prototype.TimeBufferType=Float32Array;un.prototype.ValueBufferType=Float32Array;un.prototype.DefaultInterpolation=Sa;var Si=class extends un{constructor(t,e,n){super(t,e,n)}};Si.prototype.ValueTypeName="bool";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=br;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var Xa=class extends un{};Xa.prototype.ValueTypeName="color";var qa=class extends un{};qa.prototype.ValueTypeName="number";var Ya=class extends is{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)ei.slerpFlat(r,0,a,l-o,a,l,c);return r}},kr=class extends un{InterpolantFactoryMethodLinear(t){return new Ya(this.times,this.values,this.getValueSize(),t)}};kr.prototype.ValueTypeName="quaternion";kr.prototype.InterpolantFactoryMethodSmooth=void 0;var bi=class extends un{constructor(t,e,n){super(t,e,n)}};bi.prototype.ValueTypeName="string";bi.prototype.ValueBufferType=Array;bi.prototype.DefaultInterpolation=br;bi.prototype.InterpolantFactoryMethodLinear=void 0;bi.prototype.InterpolantFactoryMethodSmooth=void 0;var Za=class extends un{};Za.prototype.ValueTypeName="vector";var Ja=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=l.length;f<d;f+=2){let m=l[f],g=l[f+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},P0=new Ja,$a=class{constructor(t){this.manager=t!==void 0?t:P0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};$a.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ds=class extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Us=class extends Ds{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Fo=new me,Fl=new I,Ol=new I,Vr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xt(512,512),this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cs,this._frameExtents=new Xt(1,1),this._viewportCount=1,this._viewports=[new oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Fl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Fl),Ol.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ol),e.updateMatrixWorld(),Fo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Bl=new me,bs=new I,Oo=new I,Ka=class extends Vr{constructor(){super(new we(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xt(4,2),this._viewportCount=6,this._viewports=[new oe(2,1,1,1),new oe(0,1,1,1),new oe(3,1,1,1),new oe(1,1,1,1),new oe(3,0,1,1),new oe(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),bs.setFromMatrixPosition(t.matrixWorld),n.position.copy(bs),Oo.copy(n.position),Oo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Oo),n.updateMatrixWorld(),s.makeTranslation(-bs.x,-bs.y,-bs.z),Bl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bl)}},ss=class extends Ds{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ka}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},ja=class extends Vr{constructor(){super(new Dr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ns=class extends Ds{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new ja}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var lc="\\[\\]\\.:\\/",L0=new RegExp("["+lc+"]","g"),hc="[^"+lc+"]",D0="[^"+lc.replace("\\.","")+"]",U0=/((?:WC+[\/:])*)/.source.replace("WC",hc),N0=/(WCOD+)?/.source.replace("WCOD",D0),F0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hc),O0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hc),B0=new RegExp("^"+U0+N0+F0+O0+"$"),z0=["material","materials","bones","map"],Qa=class{constructor(t,e,n){let s=n||fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},fe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(L0,"")}static parseTrackName(t){let e=B0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);z0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};fe.Composite=Qa;fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};fe.prototype.GetterByBindingType=[fe.prototype._getValue_direct,fe.prototype._getValue_array,fe.prototype._getValue_arrayElement,fe.prototype._getValue_toArray];fe.prototype.SetterByBindingTypeAndVersioning=[[fe.prototype._setValue_direct,fe.prototype._setValue_direct_setNeedsUpdate,fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_array,fe.prototype._setValue_array_setNeedsUpdate,fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_arrayElement,fe.prototype._setValue_arrayElement_setNeedsUpdate,fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_fromArray,fe.prototype._setValue_fromArray_setNeedsUpdate,fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Cg=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tc);function uc(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new Ae,l=0;for(let h=0;h<i.length;++h){let f=i[h],d=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in f.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(f.attributes[m]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in f.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[m]===void 0&&(a[m]=[]),a[m].push(f.morphAttributes[m])}if(t){let m;if(e)m=f.index.count;else if(f.attributes.position!==void 0)m=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,m,h),l+=m}}if(e){let h=0,f=[];for(let d=0;d<i.length;++d){let m=i[d].index;for(let g=0;g<m.count;++g)f.push(m.getX(g)+h);h+=i[d].attributes.position.count}c.setIndex(f)}for(let h in r){let f=lh(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,f)}for(let h in a){let f=a[h][0].length;if(f===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<f;++d){let m=[];for(let x=0;x<a[h].length;++x)m.push(a[h][x][d]);let g=lh(m);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function lh(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new ve(a,e,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let f=c/e;for(let d=0,m=h.count;d<m;d++)for(let g=0;g<e;g++){let x=h.getComponent(d,g);o.setComponent(d+f,g,x)}}else a.set(h.array,c);c+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var Os=new I;function Je(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Os.copy(t),Os[n]=0,Os.normalize();let l=.5*a/(a+o),h=1-Os.angleTo(i)/c;return Math.sign(Os[e])===1?h*l:o/(a+o)+l+l*(1-h)}var Yr=class extends de{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new I,c=new I,l=new I(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,m=h.length/6,g=new I,x=.5/s;for(let p=0,u=0;p<h.length;p+=3,u+=2)switch(o.fromArray(h,p),c.copy(o),c.x-=Math.sign(c.x)*x,c.y-=Math.sign(c.y)*x,c.z-=Math.sign(c.z)*x,c.normalize(),h[p+0]=l.x*Math.sign(o.x)+c.x*r,h[p+1]=l.y*Math.sign(o.y)+c.y*r,h[p+2]=l.z*Math.sign(o.z)+c.z*r,f[p+0]=c.x,f[p+1]=c.y,f[p+2]=c.z,Math.floor(p/m)){case 0:g.set(1,0,0),d[u+0]=Je(g,c,"z","y",r,n),d[u+1]=1-Je(g,c,"y","z",r,e);break;case 1:g.set(-1,0,0),d[u+0]=1-Je(g,c,"z","y",r,n),d[u+1]=1-Je(g,c,"y","z",r,e);break;case 2:g.set(0,1,0),d[u+0]=1-Je(g,c,"x","z",r,t),d[u+1]=Je(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),d[u+0]=1-Je(g,c,"x","z",r,t),d[u+1]=1-Je(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),d[u+0]=1-Je(g,c,"x","y",r,t),d[u+1]=1-Je(g,c,"y","x",r,e);break;case 5:g.set(0,0,-1),d[u+0]=Je(g,c,"x","y",r,t),d[u+1]=1-Je(g,c,"y","x",r,e);break}}};var dc=new Map;function H0(i,t,e){let n=[i,t,e].map(s=>s.toFixed(3)).join("x");return dc.has(n)||dc.set(n,new Yr(i,t,e,2,Math.min(i,t,e)*.14)),dc.get(n)}var fc=new Map;function pc(i){return fc.has(i)||fc.set(i,new xe({color:i,roughness:.55,metalness:0})),fc.get(i)}function bt(i,t,e,n,s,r,a,o,c=!1){let l=new Nt(H0(t,e,n),pc(s));if(l.castShadow=!0,!c)return l.position.set(r,a,o),i.add(l),l;let h=new Ot;return h.position.set(r,a,o),l.position.y=-e/2,h.add(l),i.add(h),h}var qe=(i,t,e,n,s,r,a)=>{let o=new Nt(new de(t,e,.02),pc(n));return o.position.set(s,r,a),i.add(o),o};function mc(i){let t=0;return(e,n)=>{let s=e.speed;(e.mode==="walk"||e.mode==="run")&&(t+=n*(4+s*2.2));let r=e.mode==="run"?.9:e.mode==="walk"?.55:0,a=Math.sin(t)*r;if(e.mode==="jump"||e.mode==="fall"){let c=e.mode==="jump"?1:-.4;i.fl.rotation.x=-.9*c,i.fr.rotation.x=-.9*c,i.bl.rotation.x=.8*c,i.br.rotation.x=.8*c,i.body.rotation.x=-.18*c}else i.fl.rotation.x=a,i.br.rotation.x=a,i.fr.rotation.x=-a,i.bl.rotation.x=-a,i.body.rotation.x=0;let o=e.mode==="run"?Math.abs(Math.sin(t))*.05:e.mode==="idle"?Math.sin(e.t*2.2)*.012:0;if(i.body.position.y=i.bodyY+o,i.tail.rotation.z=Math.sin(e.t*(e.mode==="cheer"?22:9))*(e.mode==="idle"||e.mode==="cheer"?.5:.25),i.head.rotation.x=e.mode==="idle"?Math.sin(e.t*1.3)*.05:e.mode==="cheer"?-.25:0,i.ears)for(let[c,l]of i.ears)c.rotation.z=l*(.12+(e.mode==="run"?Math.abs(Math.sin(t))*.35:e.mode==="fall"?.9:e.mode==="jump"?.5:0))}}function gc(i={}){let t=new Ot,e=i.coat||"#e0a15e",n=i.ear||"#c98443",s=i.light||"#f6dfba",r="#2b1d16",a=i.harness||"#ff7a1a",o="#1d1d1f",c=new Ot,l=.44;c.position.y=l,t.add(c),bt(c,.5,.42,.78,e,0,0,-.02),bt(c,.54,.46,.2,a,0,0,.2),bt(c,.56,.08,.22,o,0,.2,.2);let h=new Ot;h.position.set(0,.24,.42),c.add(h),bt(h,.5,.46,.44,e,0,.08,.05),bt(h,.42,.18,.06,s,0,.13,.28),bt(h,.3,.2,.22,s,0,-.04,.33),bt(h,.12,.08,.06,r,0,.03,.45),bt(h,.22,.06,.08,s,0,-.16,.38),qe(h,.075,.09,r,-.12,.16,.315),qe(h,.075,.09,r,.12,.16,.315),bt(h,.42,.14,.34,s,0,.34,.02),bt(h,.2,.1,.18,s,.1,.42,-.02),bt(h,.16,.08,.14,"#ead0a6",-.11,.41,.06);let f=[];for(let v of[-1,1]){let N=bt(h,.1,.36,.24,n,v*.28,.24,.02,!0);f.push([N,-v])}let d=(v,N)=>{let P=bt(c,.15,.3,.15,e,v,-.12,N,!0);return bt(P,.16,.08,.17,s,0,-.27,.01),P},m=d(-.15,.25),g=d(.15,.25),x=d(-.15,-.28),p=d(.15,-.28),u=new Ot;u.position.set(0,.14,-.4),c.add(u);let b=bt(u,.1,.3,.1,s,0,.12,-.05);return b.rotation.x=-.5,{root:t,animate:mc({body:c,bodyY:l,head:h,fl:m,fr:g,bl:x,br:p,tail:u,ears:f}),height:.98}}function k0(){let i=new Ot,t="#f0902f",e="#cf6e1a",n="#fbe3c4",s="#2b1d16",r="#f2a3a3",a=new Ot,o=.38;a.position.y=o,i.add(a),bt(a,.4,.36,.74,t,0,0,0);for(let u of[-.2,0,.2])bt(a,.42,.05,.08,e,0,.17,u);bt(a,.3,.06,.4,n,0,-.17,.12);let c=new Ot;c.position.set(0,.2,.4),a.add(c),bt(c,.44,.38,.38,t,0,.06,.04),bt(c,.24,.14,.1,n,0,-.04,.24),bt(c,.07,.05,.04,r,0,.02,.29),qe(c,.07,.1,s,-.11,.1,.235),qe(c,.07,.1,s,.11,.1,.235);for(let u of[-1,1]){let b=bt(c,.12,.14,.08,t,u*.14,.3,.02);b.rotation.z=-u*.25,bt(c,.06,.08,.02,r,u*.14,.29,.065)}for(let u of[-1,1])for(let b of[-.02,.04]){let E=bt(c,.16,.015,.015,n,u*.26,b,.18);E.rotation.z=u*(b>0?-.15:.15)}let l=(u,b)=>{let E=bt(a,.13,.28,.13,t,u,-.1,b,!0);return bt(E,.14,.07,.15,n,0,-.25,.01),E},h=l(-.12,.24),f=l(.12,.24),d=l(-.12,-.26),m=l(.12,-.26),g=new Ot;g.position.set(0,.12,-.36),a.add(g);let x=bt(g,.09,.42,.09,t,0,.2,-.04);return x.rotation.x=-.25,bt(g,.1,.1,.1,e,0,.42,-.1),{root:i,animate:mc({body:a,bodyY:o,head:c,fl:h,fr:f,bl:d,br:m,tail:g}),height:.9}}function V0(){let i=new Ot,t="#f0c08e",e="#f47a1c",n="#d9620e",s="#3a2a22",r="#2b1d16",a="#f1f1f1",o="#ffffff",c=new Ot;c.position.y=.56,i.add(c);let l=bt(c,.5,.52,.26,e,0,.27,0);bt(c,.2,.12,.02,o,0,.38,-.135),bt(c,.12,.08,.02,o,-.12,.4,.135),bt(c,.52,.06,.28,n,0,.03,0);let h=new Ot;h.position.set(0,.73,0),c.add(h),bt(h,.36,.34,.34,t,0,0,0),bt(h,.38,.1,.36,s,0,.16,0),qe(h,.05,.08,r,-.08,.02,.172),qe(h,.05,.08,r,.08,.02,.172),qe(h,.12,.03,"#c0563f",0,-.08,.172);let f=u=>{let b=bt(c,.2,.36,.22,e,u,.52,0,!0);return bt(b,.19,.16,.21,t,0,-.42,0),b},d=f(-.36),m=f(.36),g=u=>{let b=bt(c,.24,.52,.24,e,u,.02,0,!0);return bt(b,.25,.1,.3,a,0,-.48,.03),b},x=g(-.13),p=g(.13);return{root:i,animate:_c({hip:c,hipY:.56,head:h,torso:l,la:d,ra:m,ll:x,rl:p}),height:1.3}}function _c(i,t=1){let e=0;return(n,s)=>{let{hip:r,head:a,torso:o,la:c,ra:l,ll:h,rl:f}=i;(n.mode==="walk"||n.mode==="run")&&(e+=s*(3.5+n.speed*1.6)*t);let d=n.mode==="run"?1:n.mode==="walk"?.6:0,m=Math.sin(e)*d;c.rotation.set(m,0,0),l.rotation.set(-m,0,0),h.rotation.set(-m,0,0),f.rotation.set(m,0,0),r.position.y=i.hipY+(n.mode==="run"?Math.abs(Math.sin(e))*.05:0),a.rotation.set(0,0,0),n.mode==="jump"&&(c.rotation.set(-2.6,0,-.2),l.rotation.set(-2.6,0,.2),h.rotation.x=-.6,f.rotation.x=.3),n.mode==="fall"&&(c.rotation.set(-2.2+Math.sin(n.t*18)*.4,0,-.5),l.rotation.set(-2.2-Math.sin(n.t*18)*.4,0,.5),h.rotation.x=.3,f.rotation.x=-.3),n.mode==="idle"&&(c.rotation.z=-.05,l.rotation.z=.05,a.rotation.y=Math.sin(n.t*.7)*.15),n.mode==="cheer"&&(c.rotation.set(-2.9,0,-.3+Math.sin(n.t*14)*.25),l.rotation.set(-2.9,0,.3-Math.sin(n.t*14)*.25)),i.chaser&&n.mode==="run"&&(c.rotation.set(-1.5+m*.2,0,.15),l.rotation.set(-1.9-m*.3,0,-.15)),o.rotation.x=n.mode==="run"?.08:0}}function dh(){let i=new Ot,t="#b59a5b",e="#6b5a3a",n="#e3ad80",s="#1d1d1f",r="#e5352b",a=new Ot;a.position.y=1,i.add(a);let o=bt(a,1.2,1,.8,t,0,.52,0);bt(a,1.24,.14,.84,s,0,.1,0),bt(a,.2,.16,.06,r,0,.1,.42),bt(a,.16,.18,.04,r,-.34,.8,.41),bt(a,.5,.1,.5,e,0,1.03,0);let c=new Ot;c.position.set(0,1.38,0),a.add(c),bt(c,.62,.56,.58,n,0,0,0),bt(c,.56,.16,.5,n,0,-.3,.05),bt(c,.68,.2,.64,e,0,.34,0),bt(c,.62,.06,.3,s,0,.25,.4),bt(c,.14,.12,.04,r,0,.36,.33),bt(c,.58,.15,.06,s,0,.06,.29),qe(c,.3,.05,"#6b2f25",0,-.2,.302);let l=b=>{let E=bt(a,.34,.6,.36,t,b,1,0,!0);return bt(E,.3,.42,.32,n,0,-.75,0),E},h=l(-.78),f=l(.78),d=bt(f,.08,.08,1.7,"#8a6a3c",0,-.98,.75),m=new Nt(new ns(.42,.04,6,18),pc("#d9d9d9"));m.position.set(0,-.98,1.95),m.rotation.x=Math.PI/2,f.add(m);let g=new Nt(new On(.42,.7,10,3,!0),new xe({color:"#f4f4f4",wireframe:!0}));g.position.set(0,-1.33,1.95),g.rotation.x=Math.PI,f.add(g);let x=b=>{let E=bt(a,.46,.84,.5,e,b,.02,0,!0);return bt(E,.48,.16,.62,s,0,-.92,.05),E},p=x(-.3),u=x(.3);return{root:i,animate:_c({hip:a,hipY:1,head:c,torso:o,la:h,ra:f,ll:p,rl:u,chaser:!0},.7),height:2.75}}function G0(){let i=new Ot,t="#f7f4ee",e="#d9d3c8",n="#f2a3a3",s="#2b1d16",r=new Ot,a=.3;r.position.y=a,i.add(r),bt(r,.36,.34,.5,t,0,0,0);let o=new Ot;o.position.set(0,.2,.28),r.add(o),bt(o,.36,.32,.32,t,0,.04,.02),bt(o,.07,.05,.04,n,0,0,.2),qe(o,.06,.09,s,-.09,.08,.185),qe(o,.06,.09,s,.09,.08,.185);let c=[];for(let u of[-1,1]){let b=bt(o,.09,.4,.07,t,u*.09,.6,-.02,!0);bt(b,.05,.3,.02,n,0,-.2,.04),b.rotation.x=Math.PI,c.push([b,0])}let l=(u,b,E)=>bt(r,.12,E,.14,e,u,-.1,b,!0),h=l(-.1,.16,.2),f=l(.1,.16,.2),d=l(-.12,-.16,.2),m=l(.12,-.16,.2),g=new Ot;g.position.set(0,.05,-.27),r.add(g),bt(g,.14,.14,.12,t,0,0,0);let x=mc({body:r,bodyY:a,head:o,fl:h,fr:f,bl:d,br:m,tail:g}),p=0;return{root:i,height:.8,animate:(u,b)=>{x(u,b),p+=b,(u.mode==="run"||u.mode==="walk")&&(r.position.y=a+Math.abs(Math.sin(p*11))*.16);for(let[E]of c)E.rotation.z=Math.sin(p*3)*.06}}}function fh(){let i=new Ot,t="#f0c9a0",e="#5c6b4a",n="#26262b",s="#1f1a17",r="#2b1d16",a="#3a3a40",o=new Ot;o.position.y=.86,i.add(o);let c=bt(o,.62,.72,.34,e,0,.38,0),l=new Ot;l.position.set(0,1,0),o.add(l),bt(l,.42,.42,.4,t,0,0,0),bt(l,.46,.16,.44,s,0,.2,-.01),bt(l,.46,.3,.12,s,0,.06,-.18),qe(l,.06,.08,r,-.1,.02,.202),qe(l,.06,.08,r,.1,.02,.202);let h=qe(l,.14,.03,"#b0553f",0,-.1,.202),f=N=>{let P=bt(o,.2,.52,.24,e,N,.72,0,!0);return bt(P,.18,.16,.2,t,0,-.58,0),P},d=f(-.43),m=f(.43),g=bt(m,.05,.6,.05,"#d92b2b",0,-.95,.02);g.rotation.z=.15;let x=document.createElement("canvas");x.width=96,x.height=128;let p=x.getContext("2d");p.fillStyle="#fffdf6",p.fillRect(0,0,96,128),p.fillStyle="#d92b2b",p.fillRect(8,8,80,18),p.fillStyle="#e0a15e",p.fillRect(26,44,44,40),p.fillStyle="#c98443",p.fillRect(18,44,10,30),p.fillRect(68,44,10,30),p.fillStyle="#f6dfba",p.fillRect(36,64,24,18),p.fillStyle="#2b1d16",p.fillRect(34,54,6,7),p.fillRect(56,54,6,7),p.fillRect(44,66,8,6),p.fillStyle="#bbb";for(let N=0;N<3;N++)p.fillRect(14,96+N*9,68,4);let u=new hn(x);u.colorSpace=pe;let b=new Nt(new ze(.42,.56),new xe({map:u,roughness:.9,side:Pe}));b.position.set(0,-.72,.3),b.rotation.x=.7,d.add(b);let E=N=>{let P=bt(o,.27,.8,.28,n,N,.02,0,!0);return bt(P,.28,.1,.34,a,0,-.76,.03),P};return E(-.16),E(.16),{root:i,animate:(N,P)=>{let L=N.t;N.mode==="cheer"?(o.position.y=.86-.22+Math.abs(Math.sin(L*6))*.05,d.rotation.set(-1.1,0,-.9),m.rotation.set(-1.1,0,.9),l.rotation.x=.15,c.rotation.x=.2,h.scale.set(1.3,3,1),b.visible=!1):(o.position.y=.86,d.rotation.set(-.7,0,.25),m.rotation.set(0,0,.06),l.rotation.y=Math.sin(L*.8)*.5,l.rotation.x=.12,c.rotation.x=0,h.scale.set(1,1,1),b.visible=!0)},height:1.9}}var hh=new xe({vertexColors:!0,roughness:.6,metalness:0});function uh(i){let t=0,e=i.map(([c,l,h,f,d,m,g])=>{let x=new de(c,l,h).toNonIndexed();x.translate(d,m,g);let p=new kt(f),u=x.attributes.position.count,b=new Float32Array(u*3);for(let E=0;E<u;E++)b[E*3]=p.r,b[E*3+1]=p.g,b[E*3+2]=p.b;return x.setAttribute("color",new ve(b,3)),t+=u,x}),n=new Float32Array(t*3),s=new Float32Array(t*3),r=new Float32Array(t*3),a=0;for(let c of e)n.set(c.attributes.position.array,a),s.set(c.attributes.normal.array,a),r.set(c.attributes.color.array,a),a+=c.attributes.position.count*3;let o=new Ae;return o.setAttribute("position",new ve(n,3)),o.setAttribute("normal",new ve(s,3)),o.setAttribute("color",new ve(r,3)),o}function ph(i){let t=new Ot,{shirt:e,pants:n,hair:s,skin:r="#f0c9a0",hat:a}=i,o="#2b1d16",c=new Ot;c.position.y=.86,t.add(c);let l=[[.6,.7,.32,e,0,.37,0],[.4,.4,.38,r,0,.98,0],[.44,.14,.42,s,0,1.19,-.01],[.44,.26,.1,s,0,1.04,-.17],[.06,.08,.02,o,-.1,1,.2],[.06,.08,.02,o,.1,1,.2]];a&&l.push([.5,.1,.5,a,0,1.28,.04]);let h=new Nt(uh(l),hh);h.castShadow=!0,c.add(h);let f=(u,b,E)=>{let v=new Ot;v.position.set(u,b,0);let N=new Nt(uh(E),hh);return N.castShadow=!0,v.add(N),c.add(v),v},d=f(-.41,.7,[[.2,.5,.22,e,0,-.25,0],[.18,.16,.2,r,0,-.58,0]]),m=f(.41,.7,[[.2,.5,.22,e,0,-.25,0],[.18,.16,.2,r,0,-.58,0]]),g=f(-.16,.02,[[.26,.78,.28,n,0,-.39,0],[.27,.1,.34,"#3a3a40",0,-.8,.03]]),x=f(.16,.02,[[.26,.78,.28,n,0,-.39,0],[.27,.1,.34,"#3a3a40",0,-.8,.03]]),p=new Ot;return{root:t,animate:_c({hip:c,hipY:.86,head:p,torso:h,la:d,ra:m,ll:g,rl:x},.8),height:1.9}}var ii={dog:gc,cat:k0,kid:V0,bunny:G0};var W0=2.4,X0=4.6,q0=7.5,Y0=11,Z0=.95;function J0(){let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d");t.fillStyle="#e5352b",t.beginPath(),t.arc(32,32,28,0,Math.PI*2),t.fill(),t.fillStyle="#fff",t.fillRect(27,12,10,26),t.fillRect(27,44,10,9);let e=new hn(i);e.colorSpace=pe;let n=new ln(new Fn({map:e,transparent:!0,depthWrite:!1}));return n.scale.set(.7,.7,1),n}function mh(i,t){let e=dh();i.add(e.root);let n=J0();n.position.y=3.1,n.visible=!1,e.root.add(n);let s=t.zone,r=t.y||0,a=[t.a,t.b],o={root:e.root,pos:new I,vx:0,vz:0,facing:0,mode:"patrol",target:1,wait:0,lost:0,alerted:!1},c={mode:"walk",speed:0,t:0},l=(f,d)=>f.x>s.x0-d&&f.x<s.x1+d&&f.z>s.z0-d&&f.z<s.z1+d&&Math.abs(f.y-r)<1.2;o.reset=()=>{o.pos.set(t.a[0],r,t.a[1]),o.mode="patrol",o.target=1,o.wait=0,o.lost=0,o.vx=o.vz=0,o.facing=Math.atan2(t.b[0]-t.a[0],t.b[1]-t.a[1])},o.reset();function h(f,d,m,g){let x=f-o.pos.x,p=d-o.pos.z,u=Math.hypot(x,p);if(u<.05)return o.vx=o.vz=0,!0;let b=Math.min(m,u/g);o.vx=x/u*b,o.vz=p/u*b,o.pos.x=Math.max(s.x0,Math.min(s.x1,o.pos.x+o.vx*g)),o.pos.z=Math.max(s.z0,Math.min(s.z1,o.pos.z+o.vz*g));let v=Math.atan2(x,p)-o.facing;return v=Math.atan2(Math.sin(v),Math.cos(v)),o.facing+=v*Math.min(1,g*10),!1}return o.step=(f,d,m)=>{let g=d.x-o.pos.x,x=d.z-o.pos.z,p=Math.hypot(g,x),u=m&&l(d,.35),b=(Math.sin(o.facing)*g+Math.cos(o.facing)*x)/Math.max(p,.001),E=u&&(p<q0||p<Y0&&b>.3);if(o.mode==="patrol")E?(o.mode="chase",o.lost=0,o.alerted=!0):o.wait>0?(o.wait-=f,o.vx=o.vz=0):h(a[o.target][0],a[o.target][1],W0,f)&&(o.target=1-o.target,o.wait=.8);else if(u&&p<14)o.lost=0,h(d.x,d.z,X0,f);else{if(o.lost+=f,o.vx=o.vz=0,m){let N=Math.atan2(g,x)-o.facing;N=Math.atan2(Math.sin(N),Math.cos(N)),o.facing+=N*Math.min(1,f*6)}o.lost>1.4&&(o.mode="patrol")}return u&&p<Z0},o.render=f=>{e.root.position.copy(o.pos),e.root.rotation.y=o.facing;let d=Math.hypot(o.vx,o.vz);c.t+=f,c.speed=d,c.mode=o.mode==="chase"?d>.3?"run":"cheer":d>.3?"walk":"idle",n.visible=o.mode==="chase",n.visible&&(n.position.y=3.1+Math.sin(c.t*10)*.06),e.animate(c,f)},o}function gh(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function Bs(i){let t=document.createElement("canvas");return t.width=t.height=i,[t,t.getContext("2d")]}function _h(i,t,e,n,s,r,a){for(let o=0;o<n;o++){let c=e()*t,l=e()*t,h=.6+e()*1.8;i.fillStyle=e()<.5?s:r,i.globalAlpha=a*(.4+e()*.6),i.fillRect(c,l,h,h)}i.globalAlpha=1}function Zr(i,t,e,n,s,r){for(let a=0;a<n;a++){let o=e()*t,c=e()*t,l=t*(.08+e()*.22),h=i.createRadialGradient(o,c,0,o,c,l);h.addColorStop(0,s.replace("A",String(r*(.4+e()*.6)))),h.addColorStop(1,s.replace("A","0")),i.fillStyle=h,i.fillRect(o-l,c-l,l*2,l*2)}}function cs(i,t=!0){let e=new hn(i);return e.colorSpace=pe,e.anisotropy=4,t&&(e.wrapS=e.wrapT=vi),e}function xh(){let[t,e]=Bs(256),n=gh(7);return e.fillStyle="#a39d95",e.fillRect(0,0,256,256),Zr(e,256,n,14,"rgba(70,60,50,A)",.1),Zr(e,256,n,8,"rgba(255,250,240,A)",.1),_h(e,256,n,2600,"#c4beb6","#6f6a64",.35),e.strokeStyle="rgba(40,36,32,.55)",e.lineWidth=3,e.strokeRect(1.5,1.5,253,253),e.strokeStyle="rgba(255,255,255,.12)",e.lineWidth=1,e.strokeRect(4.5,4.5,247,247),cs(t)}function yh(){let[t,e]=Bs(256),n=gh(11);e.fillStyle="#8d8780",e.fillRect(0,0,256,256),Zr(e,256,n,12,"rgba(60,52,44,A)",.14),Zr(e,256,n,6,"rgba(255,248,236,A)",.08),_h(e,256,n,2200,"#aaa49c","#5d5853",.3);for(let s=0;s<4;s++){let r=s*64+.5;e.fillStyle="rgba(30,28,25,.35)",e.fillRect(0,r,256,2),e.fillStyle="rgba(255,255,255,.08)",e.fillRect(0,r+2,256,1)}e.fillStyle="rgba(25,22,20,.55)";for(let[s,r]of[[256*.25,256*.5],[256*.75,256*.5]])e.beginPath(),e.arc(s,r,4,0,Math.PI*2),e.fill();return e.fillStyle="rgba(30,28,25,.35)",e.fillRect(0,0,2,256),cs(t)}function ls(){let[t,e]=Bs(128),n=e.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,"rgba(255,255,255,.55)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,128,128),cs(t,!1)}function Jr(){let e=document.createElement("canvas");e.width=64,e.height=128;let n=e.getContext("2d"),s=n.createLinearGradient(0,0,64,0);s.addColorStop(0,"rgba(255,255,255,0)"),s.addColorStop(.5,"rgba(255,255,255,1)"),s.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=s,n.fillRect(0,0,64,128),n.globalCompositeOperation="destination-in";let r=n.createLinearGradient(0,0,0,128);return r.addColorStop(0,"rgba(0,0,0,0)"),r.addColorStop(1,"rgba(0,0,0,1)"),n.fillStyle=r,n.fillRect(0,0,64,128),cs(e,!1)}function vh(){let[t,e]=Bs(64),n=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);return n.addColorStop(0,"rgba(0,0,0,.55)"),n.addColorStop(.6,"rgba(0,0,0,.25)"),n.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=n,e.fillRect(0,0,64,64),cs(t,!1)}function xc(i,t,e,n=2,s=2){let r=new de(i,t,e),a=r.attributes.uv,o=[[e,t],[e,t],[i,e],[i,e],[i,t],[i,t]];for(let c=0;c<6;c++)for(let l=0;l<4;l++){let h=c*4+l;a.setXY(h,a.getX(h)*o[c][0]/n,a.getY(h)*o[c][1]/s)}return r}function Mh(){let[t,e]=Bs(64);e.fillStyle="#6d7277",e.fillRect(0,0,64,64),e.fillStyle="#2a2d30";for(let n=0;n<8;n++)e.fillRect(4,4+n*7.5,56,3.5);return e.strokeStyle="rgba(0,0,0,.4)",e.lineWidth=2,e.strokeRect(1,1,62,62),cs(t)}var Ei=new kt("#ffc93c");function bh(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function $r(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}function Kr(i,t=!0){let e=new hn(i);return e.colorSpace=pe,e.anisotropy=4,t&&(e.wrapS=e.wrapT=vi),e}function Sh(i){let[t,e]=$r(256,256),n=bh(17);e.fillStyle=i,e.fillRect(0,0,256,256);for(let s=0;s<10;s++)for(let r=-1;r<6;r++){let a=r*51.2+(s%2?25.6:0),o=s*25.6;e.fillStyle=`rgba(0,0,0,${.03+n()*.04})`,e.fillRect(a+2,o+2,47,21.6),e.fillStyle="rgba(0,0,0,.16)",e.fillRect(a,o,51.2,2),e.fillRect(a,o,2,25.6),e.fillStyle="rgba(255,255,255,.10)",e.fillRect(a+2,o+2,47,1.5)}for(let s=0;s<900;s++)e.fillStyle=n()<.5?"rgba(255,255,255,.08)":"rgba(0,0,0,.08)",e.fillRect(n()*256,n()*256,1.5,1.5);return Kr(t)}function $0(){let[i,t]=$r(128,128);t.fillStyle="#e9ecea",t.fillRect(0,0,128,128),t.strokeStyle="rgba(80,90,90,.35)",t.lineWidth=2;for(let e=0;e<=8;e++)t.beginPath(),t.moveTo(e*16,0),t.lineTo(e*16,128),t.stroke(),t.beginPath(),t.moveTo(0,e*16),t.lineTo(128,e*16),t.stroke();return Kr(i)}function K0(){let[i,t]=$r(128,128);t.clearRect(0,0,128,128),t.strokeStyle="rgba(190,196,200,1)",t.lineWidth=2.2;for(let e=-128;e<256;e+=16)t.beginPath(),t.moveTo(e,0),t.lineTo(e+128,128),t.stroke(),t.beginPath(),t.moveTo(e+128,0),t.lineTo(e,128),t.stroke();return Kr(i)}function j0(){let[i,t]=$r(256,256),e=bh(8);t.fillStyle="#6b6a66",t.fillRect(0,0,256,256);for(let n=0;n<5e3;n++)t.fillStyle=e()<.5?"rgba(255,255,255,.10)":"rgba(0,0,0,.14)",t.fillRect(e()*256,e()*256,1.6,1.6);for(let n=0;n<6;n++){t.strokeStyle="rgba(30,30,30,.35)",t.lineWidth=1,t.beginPath();let s=e()*256,r=e()*256;t.moveTo(s,r);for(let a=0;a<6;a++)s+=(e()-.5)*50,r+=(e()-.5)*50,t.lineTo(s,r);t.stroke()}return Kr(i)}function Eh(i){let t={solids:[],hazards:[],movers:[],traps:[],checkpoints:[],walls:[],buttons:[],doors:[],guards:[],friends:[],walkers:[],exit:null,killY:-1},e=_=>new xe({roughness:.9,metalness:0,..._}),n={floor:e({map:xh(),color:"#c9c6c0",roughness:.55}),cream:e({map:Sh("#d8d0bb")}),green:e({map:Sh("#5f7469")}),concrete:e({map:yh(),color:"#b5b0a8"}),tile:e({map:$0(),roughness:.4}),asphalt:e({map:j0()}),steel:e({color:"#5a6066",roughness:.45,metalness:.6}),bars:e({color:"#3b4046",roughness:.4,metalness:.7}),rail:e({color:"#e4b51e",roughness:.5,metalness:.2}),grate:e({map:Mh(),roughness:.6,metalness:.4}),bunk:e({color:"#6d747a",roughness:.5,metalness:.5}),mattress:e({color:"#8fa0ae"}),steelWhite:e({color:"#d7dadc",roughness:.3,metalness:.4}),washer:e({color:"#eceeef",roughness:.35}),washerDoor:e({color:"#2d3a44",roughness:.2,metalness:.3}),wood:e({color:"#9b7a4f"}),woodD:e({color:"#6d5132"}),lamp:new xe({color:"#ffffff",emissive:"#fff6e0",emissiveIntensity:1.4}),kill:new xe({color:"#ff7a1a",emissive:"#ff5a10",emissiveIntensity:1.7,roughness:.4}),water:new xe({color:"#2f5a5c",roughness:.15,metalness:.1,transparent:!0,opacity:.88}),puddle:new xe({color:"#3d6f8a",emissive:"#3aa0ff",emissiveIntensity:.35,roughness:.1,transparent:!0,opacity:.9}),fence:new xe({map:K0(),transparent:!0,alphaTest:.4,side:Pe,roughness:.5,metalness:.5}),wire:e({color:"#9aa1a6",roughness:.35,metalness:.8}),gold:new xe({color:"#c99a1a",emissive:Ei,emissiveIntensity:.9,roughness:.4}),goldDim:new xe({color:"#8d8a84",emissive:Ei,emissiveIntensity:.08,roughness:.6}),stripe:e({color:"#f2c230",roughness:.6}),steam:new Te({map:ls(),color:"#fff4ea",transparent:!0,opacity:0,depthWrite:!1}),live:new xe({color:"#ffe14a",emissive:"#ffd21f",emissiveIntensity:1.4,roughness:.4}),grass:e({color:"#7fb069"}),path:e({color:"#d8c9a3"}),leaf:e({color:"#4f8f4a"}),leaf2:e({color:"#6aa85a"}),trunk:e({color:"#6d5132"}),house:e({color:"#f3e6c8"}),roof:e({color:"#c0503c"}),houseB:e({color:"#cfe0ea"}),roofB:e({color:"#4d6a86"}),spark:new Te({map:ls(),color:"#bfe3ff",transparent:!0,opacity:0,depthWrite:!1,blending:gn})};function s(_,A,C,B,k,Y,D,q={}){let et=new I(Math.min(_,A),Math.min(C,B),Math.min(k,Y)),R=new I(Math.max(_,A),Math.max(C,B),Math.max(k,Y)),ht=R.clone().sub(et),ot=et.clone().add(R).multiplyScalar(.5),lt=null;if(D&&(lt=new Nt(xc(ht.x,ht.y,ht.z,q.tileU||2,q.tileV||2),D),lt.position.copy(ot),lt.castShadow=q.cast!==!1,lt.receiveShadow=!0,i.add(lt)),q.collide!==!1){let ut={min:et,max:R,mesh:lt,top:R.y,seeThrough:!!q.seeThrough,camBlock:!!q.camBlock,noStep:!!q.noStep};return t.solids.push(ut),q.wall!==!1&&!q.seeThrough&&t.walls.push(ut),ut}return lt}let r=(_,A,C,B,k,Y,D,q={})=>s(_,A,C,B,k,Y,D,{collide:!1,...q});function a(_,A,C,B,k,Y,D,q=[]){let et=_,R=[...q].sort((ht,ot)=>ht[0]-ot[0]);for(let[ht,ot,lt,ut=k]of R)ht>et&&s(et,ht,k,Y,C,B,D,{tileU:2,noStep:!0}),ut>k&&s(ht,ot,k,ut,C,B,D,{noStep:!0}),s(ht,ot,lt,Y,C,B,D,{noStep:!0}),et=ot;et<A&&s(et,A,k,Y,C,B,D,{noStep:!0})}function o(_,A,C,B,k,Y,D,q=[]){let et=_,R=[...q].sort((ht,ot)=>ot[0]-ht[0]);for(let[ht,ot,lt,ut=k]of R)ht<et&&s(C,B,k,Y,et,ht,D,{noStep:!0}),ut>k&&s(C,B,k,ut,ht,ot,D,{noStep:!0}),s(C,B,lt,Y,ht,ot,D,{noStep:!0}),et=ot;et>A&&s(C,B,k,Y,et,A,D,{noStep:!0})}let c=(_,A,C,B)=>r(_,A,0,1.3,C,B,n.green,{cast:!1});function l(_,A,C,B,k,Y,D=!0){let q=Math.abs(A-_)>Math.abs(B-C),et=Math.abs(q?A-_:B-C),R=Math.max(2,Math.round(et/.16));for(let ht=0;ht<=R;ht++){let ot=ht/R,lt=q?_+(A-_)*ot:(_+A)/2,ut=q?(C+B)/2:C+(B-C)*ot,Ut=new Nt(new Xe(.025,.025,Y-k,6),n.bars);Ut.position.set(lt,(k+Y)/2,ut),Ut.castShadow=!0,i.add(Ut)}for(let ht of[k+.05,(k+Y)/2,Y-.05])r(Math.min(_,A)-(q?0:.04),Math.max(_,A)+(q?0:.04),ht-.04,ht+.04,Math.max(C,B)+(q?.04:0),Math.min(C,B)-(q?.04:0),n.bars);D&&s(_,A,k,Y,C,B,null,{seeThrough:!0,camBlock:!0,noStep:!0})}function h(_,A,C,B,k){let Y=Math.abs(A-_)>Math.abs(B-C);r(_,A,k+.95,k+1.05,C,B,n.rail),r(_,A,k+.48,k+.54,C,B,n.rail);let D=Math.abs(Y?A-_:B-C),q=Math.max(1,Math.round(D/1.6));for(let et=0;et<=q;et++){let R=et/q,ht=Y?_+(A-_)*R:(_+A)/2,ot=Y?(C+B)/2:C+(B-C)*R;r(ht-.04,ht+.04,k,k+1.05,ot-.04,ot+.04,n.rail)}s(_,A,k,k+1,C,B,null,{seeThrough:!0,noStep:!0})}function f(_,A,C,B=1.6){r(_-.12,_+.12,A-.08,A,C+B/2,C-B/2,n.lamp,{cast:!1})}function d(_,A,C,B,k){let Y=Math.abs(A-_),D=Math.abs(B-C),q=(_+A)/2,et=(C+B)/2,R=new Ot;R.position.set(q,0,et),i.add(R);let ht=new Nt(new de(Y,.16,D),n.kill);ht.position.y=.08,R.add(ht);let ot=Math.max(2,Math.round(Math.max(Y,D)/.34)),lt=Y>=D;for(let mt=0;mt<ot;mt++){let T=new Nt(new de(lt?.06:Y,.12,lt?D:.06),n.steel);lt?T.position.set(-Y/2+(mt+.5)*(Y/ot),.12,0):T.position.set(0,.12,-D/2+(mt+.5)*(D/ot)),R.add(T)}let ut=[];for(let mt=0;mt<(k?12:5);mt++){let T=new ln(n.steam.clone());T.userData={x:(Math.random()-.5)*Y,z:(Math.random()-.5)*D,o:Math.random()},R.add(T),ut.push(T)}let Ut={kind:"vent",min:new I(q-Y/2,0,et-D/2),max:new I(q+Y/2,.42,et+D/2),active:!0,group:R,puffs:ut,trap:!!k};return t.hazards.push(Ut),k&&(k.hz=Ut,k.group=R,k.h=0,t.traps.push(k)),Ut}function m(_,A,C,B,k=0){let Y=Math.abs(A-_),D=Math.abs(B-C),q=(_+A)/2,et=(C+B)/2,R=new Ot;R.position.set(q,k,et),i.add(R);let ht=new Nt(new Xe(.5,.5,.02,24),n.puddle);ht.scale.set(Y,1,D),ht.position.y=.012,R.add(ht);let ot=new Nt(new ns(Math.min(Y,D)*.3,.035,5,20,4.2),e({color:"#141414"}));ot.rotation.x=-Math.PI/2,ot.position.y=.04,R.add(ot);let lt=[];for(let mt=0;mt<8;mt++){let T=new ln(n.spark.clone());T.userData={x:(Math.random()-.5)*Y*.7,z:(Math.random()-.5)*D*.7,o:Math.random()},R.add(T),lt.push(T)}let ut=new ss("#7cc7ff",0,5,2);ut.position.y=.5,R.add(ut);let Ut={kind:"puddle",min:new I(q-Y/2*.9,k,et-D/2*.9),max:new I(q+Y/2*.9,k+.3,et+D/2*.9),active:!0,group:R,sparks:lt,light:ut};return t.hazards.push(Ut),Ut}function g(_,A,C,B,k=0){let Y=Math.abs(A-_)>Math.abs(B-C),D=Math.abs(Y?A-_:B-C),q=(_+A)/2,et=(C+B)/2,R=new Ot;R.position.set(q,k,et),i.add(R);let ht=Math.max(2,Math.round(D/2.2));for(let ut=0;ut<=ht;ut++){let Ut=-D/2+D*ut/ht,mt=new Nt(new de(.12,.7,.12),ut%2?n.stripe:n.steel);mt.position.set(Y?Ut:0,.35,Y?0:Ut),mt.castShadow=!0,R.add(mt)}for(let ut of[.28,.56]){let Ut=new Nt(new de(Y?D:.035,.035,Y?.035:D),n.live);Ut.position.y=ut,R.add(Ut)}let ot=[];for(let ut=0;ut<Math.min(10,Math.round(D/2.5));ut++){let Ut=new ln(n.spark.clone()),mt=(Math.random()-.5)*D;Ut.userData={x:Y?mt:0,z:Y?0:mt,o:Math.random()},R.add(Ut),ot.push(Ut)}let lt={kind:"wire",min:new I(Math.min(_,A),k,Math.min(C,B)),max:new I(Math.max(_,A),k+.62,Math.max(C,B)),active:!0,group:R,sparks:ot};return t.hazards.push(lt),lt}function x(_,A,C){let Y=new Ot;Y.position.set(_,0,A),i.add(Y);let D=[],q=(lt,ut,Ut,mt)=>{lt.translate(ut,Ut,mt),D.push(lt.index?lt.toNonIndexed():lt)};for(let lt=0;lt<=6;lt++){let ut=-.575+1.15*lt/6;for(let[Ut,mt]of[[ut,-1.15/2],[ut,1.15/2],[-1.15/2,ut],[1.15/2,ut]])q(new Xe(.022,.022,1.15,5),Ut,1.15/2,mt)}for(let lt of[.03,1.15])for(let[ut,Ut,mt,T]of[[1.15,.06,0,-1.15/2],[1.15,.06,0,1.15/2],[.06,1.15,-1.15/2,0],[.06,1.15,1.15/2,0]])q(new de(ut+.06,.06,Ut+.06),mt,lt,T);let et=new Nt(uc(D.map(lt=>{for(let ut of Object.keys(lt.attributes))["position","normal","uv"].includes(ut)||lt.deleteAttribute(ut);return lt}),!1),n.bars);et.castShadow=!0,Y.add(et);let R={min:new I(_-1.15/2,0,A-1.15/2),max:new I(_+1.15/2,1.15,A+1.15/2),top:1.15,seeThrough:!0,noStep:!0};t.solids.push(R);let ht=new Ot;ht.position.set(_,0,A),i.add(ht);let ot={kind:C,home:new I(_,0,A),holder:ht,body:null,cage:et,cageG:Y,box:R,open:0,free:!1,order:-1,pos:new I(_,0,A),facing:Math.PI,pose:{mode:"idle",speed:0,t:Math.random()*5},hop:0};return ot.setKind=lt=>{ot.body&&ht.remove(ot.body.root),ot.kind=lt,ot.body=ii[lt](lt==="dog"?{coat:"#7a5638",ear:"#553a25",light:"#ead9c2",harness:"#3a7bd5"}:void 0),ht.add(ot.body.root)},ot.setKind(C),t.friends.push(ot),ot}function p(_,A,C,B,k=!1){let Y=new Ot;Y.position.set(A,C+.006,B),i.add(Y);let D=new Nt(new zr(.55,.78,40),k?n.gold:n.goldDim.clone());D.rotation.x=-Math.PI/2,Y.add(D);let q=new Nt(new Xe(.7,.7,3,24,1,!0),new Te({map:Jr(),color:Ei,transparent:!0,opacity:0,blending:gn,depthWrite:!1,side:Pe,fog:!1}));q.position.y=1.5,Y.add(q);let et={i:_,pos:new I(A,C,B),group:Y,ring:D,beam:q,lit:k,flash:0};return t.checkpoints.push(et),et}function u(_,A,C,B,k){let et=new Ot;for(let ot=0;ot<5;ot++){let lt=new Nt(new de(1.8,.06,.28),n.wood);lt.position.set(0,-.03,-1.8/2+.14+ot*(1.8-.28)/4),lt.castShadow=lt.receiveShadow=!0,et.add(lt)}for(let ot of[-1.8/2+.1,0,1.8/2-.1]){let lt=new Nt(new de(.16,.18,1.8),n.woodD);lt.position.set(ot,-.15,0),et.add(lt)}i.add(et);let R={min:new I,max:new I,top:0,mover:!0,delta:new I,noStep:!0},ht={base:_,axis:A,amp:C,period:B,phase:k,g:et,box:R,W:1.8,H:.3,D:1.8,pos:new I};return ht.at=(ot,lt=new I)=>lt.copy(_).addScaledVector(A,C*Math.sin((ot/B+k)*Math.PI*2)),t.movers.push(ht),t.solids.push(R),E(ht,0,!0),ht}function b(_,A,C,B,k,Y){let D=new Ot;i.add(D);let q=2.8,et=3.4,R=.8;s(B,_-q/2,C,Y,A+R/2,A-R/2,n.concrete,{noStep:!0,tileV:2}),s(_+q/2,k,C,Y,A+R/2,A-R/2,n.concrete,{noStep:!0,tileV:2}),s(_-q/2,_+q/2,C+et,Y,A+R/2,A-R/2,n.concrete,{noStep:!0});for(let[tt,rt,nt,Ct]of[[_-q/2-.2,_-q/2,C,C+et+.2],[_+q/2,_+q/2+.2,C,C+et+.2],[_-q/2-.2,_+q/2+.2,C+et,C+et+.2]]){let yt=new Nt(new de(rt-tt,Ct-nt,.14),n.gold);yt.position.set((tt+rt)/2,(nt+Ct)/2,A+R/2+.07),D.add(yt)}let ht=e({color:"#55606a",roughness:.45,metalness:.6}),ot=[-1,1].map(tt=>{let rt=new Nt(xc(q/2,et,.2,1.4,1.7),ht);return rt.position.set(_+tt*q/4,C+et/2,A),rt.castShadow=!0,D.add(rt),rt}),lt={min:new I(_-q/2,C,A-.2),max:new I(_+q/2,C+et,A+.2),top:C+et,noStep:!0};t.solids.push(lt);let ut=new Nt(new ze(.07,et),new Te({color:"#fff0cc",fog:!1}));ut.position.set(_,C+et/2,A+.11),D.add(ut);let Ut=new ln(new Fn({map:ls(),color:"#ffd896",transparent:!0,opacity:.85,blending:gn,depthWrite:!1,fog:!1}));Ut.scale.set(12,12,1),Ut.position.set(_,C+et*.55,A-1.4),D.add(Ut);let mt=new Te({map:Jr(),color:"#ffe2a8",transparent:!0,opacity:0,blending:gn,depthWrite:!1,side:Pe,fog:!1}),T=[];for(let tt=0;tt<3;tt++){let rt=new Nt(new ze(q*(1+tt*.35),9),mt);rt.rotation.x=-Math.PI/2+.12,rt.rotation.z=(tt-1)*.08,rt.position.set(_,C+.6+tt*.5,A+4.5),D.add(rt),T.push(rt)}let y=new Nt(new Xe(1.3,2.2,46,20,1,!0),new Te({map:Jr(),color:"#ffe6b0",transparent:!0,opacity:.32,blending:gn,depthWrite:!1,side:Pe,fog:!1}));y.rotation.x=Math.PI,y.position.set(_,C+23,A-2.2),D.add(y);let V=new ss("#ffcf8a",30,16,1.6);return V.position.set(_,C+2.4,A+1.4),D.add(V),{g:D,x:_,z:A,y:C,leaves:ot,doorBox:lt,glow:Ut,shafts:T,shaftMat:mt,seam:ut,lamp:V,beacon:y,DW:q,open:0,opening:!1}}function E(_,A,C){let B=_.pos.clone();_.at(A,_.pos),_.g.position.copy(_.pos);let k=_.box;k.min.set(_.pos.x-_.W/2,_.pos.y-_.H,_.pos.z-_.D/2),k.max.set(_.pos.x+_.W/2,_.pos.y,_.pos.z+_.D/2),k.top=_.pos.y,k.delta.copy(C?new I:_.pos.clone().sub(B))}function v(_,A,C,B){let k=new Ot;k.position.set(_,A,C),i.add(k);let Y=new Nt(new Xe(.62,.68,.08,24),n.steel);Y.position.y=.04,k.add(Y);let D=new Nt(new Xe(.5,.5,.12,24),new xe({color:"#2fd15a",emissive:"#22c24c",emissiveIntensity:1.3,roughness:.4}));D.position.y=.13,k.add(D);let q=new Ot;q.position.y=1.9,k.add(q);let et=new xe({color:"#ffd21f",emissive:"#ffc400",emissiveIntensity:.9,roughness:.5}),R=new Nt(new de(.22,.5,.22),et);R.position.y=.35,q.add(R);let ht=new Nt(new On(.34,.45,4),et);ht.rotation.x=Math.PI,ht.position.y=-.1,q.add(ht);let ot=new ss("#3dff7a",4,5,2);ot.position.y=.6,k.add(ot);let lt={pos:new I(_,A,C),g:k,cap:D,arrow:q,light:ot,pressed:!1,onPress:B};return t.buttons.push(lt),lt}function N(_,A,C,B){let k=new Ot;i.add(k);let Y=Math.round((A-_)/.18);for(let ht=0;ht<=Y;ht++){let ot=new Nt(new Xe(.035,.035,B,6),n.bars);ot.position.set(_+(A-_)*ht/Y,B/2,C),ot.castShadow=!0,k.add(ot)}for(let ht of[.08,B/2,B-.08]){let ot=new Nt(new de(A-_,.1,.1),n.bars);ot.position.set((_+A)/2,ht,C),k.add(ot)}let D=new xe({color:"#ff3b30",emissive:"#ff2a20",emissiveIntensity:1.6}),q=new Nt(new de(.5,.22,.12),D);q.position.set((_+A)/2,B+.35,C+.36),i.add(q);let et={min:new I(_,0,C-.15),max:new I(A,B,C+.15),top:B,seeThrough:!0,noStep:!0};t.solids.push(et);let R={g:k,box:et,h:B,lamp:q,lampMat:D,open:0,opening:!1};return t.doors.push(R),R}let P=9;s(-8.6,8.6,-.4,0,8.6,-20.6,n.floor,{cast:!1,tileU:2});for(let _ of[-1.3,1.3])r(_-.07,_+.07,.002,.012,8,-20,e({color:"#d9b43a"}),{cast:!1});a(-8.6,8.6,8.6,8,0,P,n.cream),o(8.6,-20.6,-8.6,-8,0,P,n.cream),o(8.6,-20.6,8,8.6,0,P,n.cream,[[-15,-17.6,6.3,3.5]]),a(-8.6,8.6,-20,-20.6,0,P,n.cream,[[-2.6,2.6,4.6]]),l(-2.6,2.6,-20.25,-20.35,0,4.6),r(-2.8,2.8,4.6,4.9,-19.9,-20.7,n.steel),c(-8,8,8,7.95),c(7.95,8,8,-20),c(-8,8,-19.95,-20),r(7.4,8,3.5,3.75,-14.6,-15.2,n.cream),r(7.5,8,3.5,3.6,-17.4,-18.1,n.cream);for(let _=0;_<7;_++){let A=8-_*4,C=A-4;if(s(-8,-4.6,0,3.2,A,A-.15,n.cream,{noStep:!0}),r(-8,-4.4,3.2,3.3,A-.02,A-.13,n.steel),r(-7.95,-7,0,.45,A-.4,A-2.4,n.bunk),r(-7.95,-7.05,.45,.6,A-.45,A-2.35,n.mattress),s(-7.95,-7,0,.6,A-.4,A-2.4,null),r(-7.9,-7.4,0,.5,C+.9,C+.4,n.steelWhite),s(-7.9,-7.4,0,.5,C+.9,C+.4,null),_===1){l(-4.5,-4.5,A-1.85,C+.15,0,3.2);let B=new Ot;i.add(B);for(let k=0;k<=10;k++){let Y=new Nt(new Xe(.03,.03,3.2,6),n.bars);Y.position.set(-4.56,1.6,A-.15-1.7*k/10),Y.castShadow=!0,B.add(Y)}for(let k of[.06,1.6,3.14]){let Y=new Nt(new de(.1,.1,1.76),n.bars);Y.position.set(-4.56,k,A-1),B.add(Y)}t.startDoor={g:B,open:0,opening:!1}}else{l(-4.5,-4.5,A-.15,C+.15,0,3.2);let k=[{coat:"#7a5638",ear:"#553a25",light:"#ead9c2",harness:"#3a7bd5"},null,{coat:"#f1efe9",ear:"#cfc9bd",light:"#ffffff",harness:"#d92b2b"},"bunny",{coat:"#3a3532",ear:"#262220",light:"#b9aea0",harness:"#f2c230"},"cat",null][_],Y=k==="bunny"?ii.bunny():k==="cat"||k===null?ii.cat():gc(k);Y.animate({mode:"idle",speed:0,t:_*1.7},0),Y.root.position.set(-5.4-_%2*.5,0,A-1.6-_%3*.4),Y.root.rotation.y=Math.PI/2+(_%2?.4:-.3),i.add(Y.root)}}for(let _=0;_<7;_++){let A=6-_*4;r(-8,-7.95,5,7.4,A+.8,A-.8,new Te({color:"#e9f1f5"}),{cast:!1}),l(-7.94,-7.94,A+.8,A-.8,5,7.4,!1)}for(let _=0;_<7;_++)s(2.6,4.5,0,.5*(_+1),-_,-(_+1),n.grate,{tileU:1,tileV:1}),r(2.6,4.5,.5*(_+1)-.04,.5*(_+1)+.01,-_,-_-.12,n.stripe,{cast:!1});s(4.5,8,3.2,3.5,8,-10.6,n.grate,{tileU:1,tileV:1}),s(4.5,8,3.2,3.5,-12.6,-20,n.grate,{tileU:1,tileV:1}),r(4.5,4.9,3,3.2,-10.6,-11.2,n.steel),r(7.6,8,2.9,3.2,-12,-12.6,n.steel),h(4.5,4.6,8,-5.8,3.5),h(4.5,4.6,-7.2,-10.6,3.5),h(4.5,4.6,-12.6,-20,3.5),h(4.6,8,8,7.9,3.5);for(let _ of[6,2,-2,-9.6,-14,-18.5])s(4.55,4.75,0,3.2,_+.1,_-.1,n.steel,{noStep:!0});for(let _=6;_>-20;_-=4)r(-8.6,8.6,P-.5,P-.25,_+.12,_-.12,n.steel),f(0,P-.6,_-2,2.2);m(-3.8,-1.6,7.4,5.2),p(0,-5.6,0,3,!0),p(1,6.25,3.5,-14);let L=7;a(8.6,22.6,-7.4,-8,0,L,n.tile),o(-7.4,-24.6,22,22.6,0,L,n.tile),o(-20.6,-24.6,8,8.6,0,L,n.tile),a(8,22.6,-24,-24.6,0,L,n.tile,[[17.6,20.6,3.2]]),s(8.6,13,-3,0,-8,-24,n.floor,{cast:!1}),s(18,22,-3,0,-8,-24,n.floor,{cast:!1}),s(13,18,-3.4,-3,-8,-24,n.concrete,{cast:!1});let H=new Nt(new ze(5,16),n.water);H.rotation.x=-Math.PI/2,H.position.set(15.5,-1.2,-16),i.add(H),r(12.9,13,-1.2,.005,-8,-24,e({color:"#3e4a4a"}),{cast:!1}),r(18,18.1,-1.2,.005,-8,-24,e({color:"#3e4a4a"}),{cast:!1}),s(8.6,10.4,3.2,3.5,-13.4,-19.2,n.grate,{tileU:1,tileV:1});for(let _ of[-13.6,-19])s(10.2,10.4,0,3.2,_+.1,_-.1,n.steel,{noStep:!0});for(let _=0;_<6;_++){let A=-9.2-_*1.5;s(21,22,0,1.1,A,A-1.3,n.washer,{noStep:!0});let C=new Nt(new Br(.34,20),n.washerDoor);C.rotation.y=-Math.PI/2,C.position.set(20.99,.6,A-.65),i.add(C)}s(8.8,10,0,.85,-9,-12.2,n.steelWhite,{noStep:!0});for(let _=-10;_>-24;_-=4)f(15.5,L-.3,_,2.4);for(let _=-10;_>-24;_-=4)r(8.6,22,L-.25,L,_+.1,_-.1,n.steel);d(11.3,12.2,-8,-24,{period:2.6,phase:0}),u(new I(14.3,-.6,-16),new I(0,0,1),3.5,5,0),u(new I(16.7,-.6,-16),new I(0,0,1),3.5,6.4,.3);let w=N(17.6,20.6,-24.3,3.2),S=x(18.9,-8.85,"bunny");v(20.2,0,-9.8,()=>{w.opening=!0,t.free(S)}),p(2,19.6,0,-21.6);let U=6;s(-14.6,8.6,-.4,0,-20,-40.6,n.asphalt,{cast:!1,tileU:4,tileV:4}),s(8.6,22.6,-.4,0,-24.6,-40.6,n.asphalt,{cast:!1,tileU:4,tileV:4}),o(-20,-40.6,-14.6,-14,0,U,n.concrete),o(-24,-40.6,22,22.6,0,U,n.concrete),a(-14.6,-8.6,-20,-20.6,0,U,n.concrete),t.exit=b(0,-40.3,0,-14.6,22.6,U),((_,A,C,B)=>{let k=Math.abs(A-_)>Math.abs(B-C),Y=Math.abs(k?A-_:B-C),D=new Nt(new ze(Y,4),n.fence);D.material.map.repeat.set(Y/2,2),D.position.set((_+A)/2,2,(C+B)/2),k||(D.rotation.y=Math.PI/2),i.add(D);let q=Math.round(Y/3);for(let et=0;et<=q;et++){let R=et/q,ht=_+(A-_)*R,ot=C+(B-C)*R;r(ht-.05,ht+.05,0,4.1,ot+.05,ot-.05,n.steel)}r(Math.min(_,A),Math.max(_,A)+(k?0:.03),4,4.06,Math.max(C,B)+(k?.03:0),Math.min(C,B),n.steel),s(Math.min(_,A)-(k?0:.06),Math.max(_,A)+(k?0:.06),0,4,Math.max(C,B)+(k?.06:0),Math.min(C,B)-(k?.06:0),null,{seeThrough:!0,noStep:!0})})(-14,16,-28,-28),g(-14,12,-31.2,-32),g(-4,22,-35.2,-36),m(2.2,4.8,-32.6,-34.6);let G=x(-12.6,-34.6,"cat");v(-11.2,0,-33.6,()=>{t.exit.opening=!0,t.free(G)}),t.guards.push(mh(i,{zone:{x0:-10.5,x1:10.5,z0:-66,z1:-52},a:[8,-59],b:[-8,-59]})),s(-13.8,-10.8,0,6.5,-37.2,-40,n.concrete,{noStep:!0}),r(-14,-10.6,6.5,6.8,-37,-40.2,n.steel),r(-13.6,-11,6.8,8.6,-37.4,-39.8,new xe({color:"#9fb6c2",roughness:.1,metalness:.3,transparent:!0,opacity:.55}),{cast:!1}),r(-14,-10.6,8.6,8.9,-37,-40.2,n.steel);for(let[_,A]of[[-13.5,-22],[21.5,-27],[-13.5,-33]])r(_-.1,_+.1,0,7.5,A+.1,A-.1,n.steel),r(_-.5,_+.5,7.3,7.6,A+.25,A-.25,n.lamp);r(-9.2,-9,0,3,-23,-23.2,n.steel),r(-9.6,-8.6,3,3.7,-23.2,-23.25,e({color:"#ffffff"})),p(3,19.2,0,-26.3),s(-60,60,-.4,0,-40.6,-90,n.grass,{cast:!1,wall:!1,tileU:4,tileV:4}),r(-1.6,1.6,0,.02,-40.7,-73.4,n.path,{cast:!1});for(let _ of[-1,1])s(_*12,_*13,0,1.5,-40.7,-73,n.leaf,{noStep:!0});for(let _=-44;_>-72;_-=7)for(let A of[-1,1])r(A*11.2-.25,A*11.2+.25,.02,.5,_+.25,_-.25,A*_%2?e({color:"#ff8fab"}):e({color:"#ffd166"}));let j=(_,A,C=1)=>{r(_-.2*C,_+.2*C,0,1.6*C,A+.2*C,A-.2*C,n.trunk),r(_-1.2*C,_+1.2*C,1.4*C,3.4*C,A+1.2*C,A-1.2*C,(_+A)%2?n.leaf:n.leaf2),r(_-.8*C,_+.8*C,3.3*C,4.4*C,A+.8*C,A-.8*C,n.leaf2)};for(let[_,A,C]of[[-16,-46,1.1],[15.5,-48,1.3],[-18,-54,1.5],[17,-57,1.2],[-15.5,-63,1.4],[21,-45,1],[-23,-47,1.2],[22,-64,1.5],[15,-70,1.3],[-22,-70,1.4],[8,-80,1.6],[-8,-81,1.5]])j(_,A,C);let ct=(_,A,C,B)=>{r(_-3,_+3,0,3,A+2.5,A-2.5,C);let k=new Nt(new On(4.9,2.4,4),B);k.rotation.y=Math.PI/4,k.position.set(_,4.2,A),k.castShadow=!0,i.add(k),r(_-.5,_+.5,0,1.9,A+2.56,A+2.5,n.woodD),r(_+1.2,_+2.2,1.2,2.1,A+2.56,A+2.5,e({color:"#bfe3ff"}))};ct(0,-76,n.house,n.roof),ct(-14,-70,n.houseB,n.roofB),ct(13,-72,n.houseB,n.roofB);{let _=document.createElement("canvas");_.width=512,_.height=128;let A=_.getContext("2d");A.fillStyle="#2d3a44",A.fillRect(0,0,512,128),A.strokeStyle="#f2c230",A.lineWidth=8,A.strokeRect(6,6,500,116),A.fillStyle="#ffffff",A.font="700 64px -apple-system, Helvetica, Arial, sans-serif",A.textAlign="center",A.textBaseline="middle",A.fillText("DOG POUND",256,68);let C=new hn(_);C.colorSpace=pe;let B=new Nt(new ze(5.2,1.3),new Te({map:C}));B.rotation.y=Math.PI,B.position.set(0,4.6,-40.72),i.add(B)}let Q=[["#e76f51","#264653","#3a2a22"],["#2a9d8f","#3d405b","#d9a441","#f4f1de"],["#457b9d","#1d3557","#1f1a17"],["#f4a261","#6d597a","#7a4b2a"],["#8ecae6","#52575d","#c9c9c9","#d62828"],["#b5838d","#2b2d42","#3a2a22"]],dt=20261121,$=()=>(dt=dt*16807%2147483647)/2147483647;Q.forEach(([_,A,C,B],k)=>{let Y=ph({shirt:_,pants:A,hair:C,hat:B});i.add(Y.root);let D=-45.5-k*3.6,q=8+$()*1.5,et=1.5+$()*1.3,R=$(),ht={body:Y,z:D,span:q,speed:et,phase:R,pos:new I(0,0,D),dir:1,pose:{mode:"walk",speed:et,t:$()*5}};ht.at=ot=>{let lt=((ot*et/(4*q)+R)%1+1)%1;return{x:(lt<.5?lt*4-1:3-lt*4)*q,dir:lt<.5?1:-1}},t.walkers.push(ht)}),p(4,0,0,-42.8);let gt=fh();gt.root.position.set(0,0,-70),i.add(gt.root),t.owner={body:gt,pos:new I(0,0,-70),cheer:!1,pose:{mode:"idle",speed:0,t:0}},t.trapHeight=(_,A)=>{let C=((A/_.period+_.phase)%1+1)%1*_.period;return C<1.15?0:C<1.5?.18+.05*Math.sin(C*60):C<1.58?.18+(C-1.5)/.08*.82:C<2.3?1:Math.max(0,1-(C-2.3)/.3)},t.step=_=>{for(let A of t.movers)E(A,_,!1);for(let A of t.walkers){let C=A.at(_);A.pos.x=C.x,A.dir=C.dir}},t.visual=(_,A)=>{n.kill.emissiveIntensity=1.7+.5*Math.sin(_*7);for(let D of t.traps){let q=t.trapHeight(D,_);D.hz.active=q>.45,D.h=q}for(let D of t.hazards)if(D.kind==="vent"){let q=D.trap&&t.traps.find(et=>et.hz===D).h||0;for(let et of D.puffs){let R=et.userData,ht=(_*(D.trap&&q>.3?1.6:.55)+R.o)%1;et.position.set(R.x,.2+ht*(D.trap?.25+q*2.6:.9),R.z);let ot=(D.trap?.6+q*1:.6)*(.6+ht);et.scale.set(ot,ot,1),et.material.opacity=(1-ht)*(D.trap?.3+q*.65:.55)}}else if(D.kind==="puddle"){let q=0;for(let et of D.sparks){let R=et.userData,ht=(_*3.1+R.o)%1,ot=ht<.18;et.position.set(R.x+Math.sin(_*37+R.o*9)*.1,.08+ht*.4,R.z);let lt=ot?.35+Math.random()*.3:.01;et.scale.set(lt,lt,1),et.material.opacity=ot?.9:0,ot&&q++}D.light.intensity=q?3+Math.random()*3:.3}for(let D of t.checkpoints)D.flash=Math.max(0,D.flash-A),D.beam.material.opacity=D.flash>0?Math.min(1,D.flash*1.6)*.9:0,D.beam.scale.set(1+(1-D.flash)*.3,1,1+(1-D.flash)*.3),D.lit||(D.ring.material.emissiveIntensity=.12+.1*(.5+.5*Math.sin(_*3+D.i)));for(let D of t.buttons)D.arrow.visible=!D.pressed,D.arrow.position.y=1.9+Math.sin(_*4)*.15,D.arrow.rotation.y=_*2,D.cap.position.y+=((D.pressed?.06:.13)-D.cap.position.y)*Math.min(1,A*14),D.cap.material.emissiveIntensity=D.pressed?.15:1.1+.4*Math.sin(_*5),D.light.intensity=D.pressed?0:4;for(let D of t.doors){D.opening&&(D.open=Math.min(1,D.open+A/.8));let q=D.open*D.open*(3-2*D.open);D.g.position.y=q*(D.h-.25),D.box.max.y=q>.6?D.box.min.y:D.h;let et=D.opening?"#30d158":"#ff3b30";D.lampMat.color.set(et),D.lampMat.emissive.set(et)}for(let D of t.guards)D.render(A);for(let D of t.hazards)if(D.kind==="wire")for(let q of D.sparks){let et=q.userData,ht=(_*2.3+et.o)%1<.12;q.position.set(et.x,.3+(et.o>.5?.26:0),et.z);let ot=ht?.3+Math.random()*.25:.01;q.scale.set(ot,ot,1),q.material.opacity=ht?.95:0}n.live.emissiveIntensity=1.2+.5*Math.sin(_*9);for(let D of t.friends)D.free&&(D.open=Math.min(1,D.open+A/.5)),D.cageG.position.y=-D.open*1.25,D.box.max.y=D.open>.5?D.box.min.y:1.15,D.hop=Math.max(0,D.hop-A),D.holder.position.set(D.pos.x,D.pos.y+(D.hop>0?Math.abs(Math.sin(D.hop*9))*.35:0),D.pos.z),D.holder.rotation.y=D.facing,D.pose.t+=A,D.body.animate(D.pose,A);for(let D of t.walkers)D.body.root.position.copy(D.pos),D.body.root.rotation.y=D.dir>0?Math.PI/2:-Math.PI/2,D.pose.t+=A,D.body.animate(D.pose,A);if(t.startDoor){let D=t.startDoor;D.opening&&(D.open=Math.min(1,D.open+A/.16)),D.g.position.z=-D.open*1.72}let C=t.owner;C.pose.t+=A,C.pose.mode=C.cheer||C.wave?"cheer":"idle",C.body.animate(C.pose,A);let B=t.exit;B.opening&&(B.open=Math.min(1,B.open+A/.9));let k=B.open*B.open*(3-2*B.open);B.leaves[0].position.x=B.x-B.DW/4-k*(B.DW/2),B.leaves[1].position.x=B.x+B.DW/4+k*(B.DW/2),B.doorBox.max.y=k>.6?B.doorBox.min.y:B.y+3.4;let Y=.5+.5*Math.sin(_*2.2);B.glow.material.opacity=(.7+.2*Y)*(1-k*.9),B.glow.scale.setScalar(11+Y*1.2),B.shaftMat.opacity=.1+.06*Y+k*.35,B.lamp.intensity=25+10*Y+k*15,B.beacon.material.opacity=.22+.08*Y,B.seam.visible=k<.05},t.unlight=_=>{_.lit=!1,_.ring.material=n.goldDim.clone(),_.flash=0},t.light=_=>{_.lit=!0,_.ring.material=n.gold,_.flash=1.2},t.press=_=>{_.pressed=!0,_.onPress()};let _t=[],Dt=.15;t.free=_=>{_.free||(_.free=!0,_.order=t.friends.filter(A=>A.free).length-1,_.hop=1,t.lastFreed=_)},t.trailReset=_=>{_t.length=0,_t.push(_.clone());let A=0;for(let C of t.friends)C.free&&C.pos.set(_.x-.7-.6*A++,_.y,_.z+.5)},t.followStep=(_,A,C)=>{let B=_t[_t.length-1];(!B||B.distanceToSquared(A)>Dt*Dt)&&(_t.push(A.clone()),_t.length>400&&_t.shift());for(let k of t.friends){if(!k.free){k.pose.mode="idle";continue}let Y=_t.length-1-Math.round((1+k.order*.9)/Dt),D=_t[Math.max(0,Y)],q=D.x-k.pos.x,et=D.z-k.pos.z,R=Math.hypot(q,et),ht=Math.min(7.5,R*6);R>.02&&(k.pos.x+=q/R*ht*_,k.pos.z+=et/R*ht*_,k.facing=Math.atan2(q,et)),k.pos.y+=(D.y-k.pos.y)*Math.min(1,_*14),k.pose.speed=ht,k.pose.mode=C?"cheer":ht>3?"run":ht>.4?"walk":"idle",C&&k.hop<=0&&(k.hop=.7)}},t.resetProgress=()=>{for(let _ of t.buttons)_.pressed=!1;for(let _ of t.doors)_.open=0,_.opening=!1;t.exit.open=0,t.exit.opening=!1;for(let _ of t.guards)_.reset();for(let _ of t.friends)_.free=!1,_.open=0,_.order=-1,_.pos.copy(_.home),_.facing=Math.PI,_.pose.mode="idle";_t.length=0,t.owner.cheer=!1,t.owner.wave=!1},t.start={pos:t.checkpoints[0].pos.clone(),yaw:-Math.PI/2};let Zt=new Set([...t.movers.map(_=>_.g),t.exit.g,...t.checkpoints.map(_=>_.group),...t.hazards.filter(_=>_.group).map(_=>_.group),...t.buttons.map(_=>_.g),...t.doors.flatMap(_=>[_.g,_.lamp]),...t.guards.map(_=>_.root),...t.friends.flatMap(_=>[_.cageG,_.holder]),t.owner.body.root,...t.walkers.map(_=>_.body.root),t.startDoor.g]);i.updateMatrixWorld(!0);let jt=new Map,it=[];i.traverse(_=>{if(!_.isMesh||_.material.isMeshBasicMaterial||_.material.transparent||_.material.vertexColors)return;for(let B=_;B;B=B.parent)if(Zt.has(B))return;let A=_.material.uuid+(_.castShadow?"c":"")+(_.receiveShadow?"r":"");jt.has(A)||jt.set(A,{mat:_.material,cast:_.castShadow,recv:_.receiveShadow,geos:[]});let C=_.geometry.clone();C.applyMatrix4(_.matrixWorld);for(let B of Object.keys(C.attributes))["position","normal","uv"].includes(B)||C.deleteAttribute(B);jt.get(A).geos.push(C.index?C.toNonIndexed():C),it.push(_)});for(let _ of it)_.parent.remove(_);for(let _ of jt.values()){let A=uc(_.geos,!1);if(!A)continue;let C=new Nt(A,_.mat);C.castShadow=_.cast,C.receiveShadow=_.recv,C.matrixAutoUpdate=!1,i.add(C)}return t}var $e=.3,hs=1.05,Q0=.55,yc=6,tg=55,eg=22,wh=28,ng=10.2,ig=.1,sg=.14,rg=30,zs={dog:{label:"Pup"},cat:{label:"Kitty"}};function Th(i){let t=new Ot;i.add(t);let e=new Ot;t.add(e);let n=null,s=-1,r=0,a={mode:"idle",speed:0,t:0};function o(d){a.mode=d,c.anim=d}let c={root:t,pivot:e,anim:"",rigName:"",pos:new I,vel:new I,grounded:null,groundTime:0,airTime:0,jumpBuf:0,coyote:0,facing:Math.PI,squash:0,lastFallSpeed:0,landed:!1,jumped:!1,frozen:!1};c.setRig=d=>{n&&e.remove(n.root),n=ii[d](),c.rigName=d,c.body=n,e.add(n.root),s=-1,o("idle")},c.reset=d=>{s=-1,c.pos.copy(d),c.vel.set(0,0,0),c.grounded=null,c.facing=Math.PI,c.squash=0,c.jumpBuf=0,c.frozen=!1,e.position.y=0,o("idle")};let l=new I;function h(d){for(let m of d){if(c.pos.y+.05>=m.max.y||c.pos.y+hs<=m.min.y)continue;if(c.grounded&&!m.noStep&&m.top-c.pos.y<=Q0&&f(m,$e)){c.pos.y=m.top,c.grounded=m,c.vel.y=0;continue}let g=Math.max(m.min.x,Math.min(c.pos.x,m.max.x)),x=Math.max(m.min.z,Math.min(c.pos.z,m.max.z)),p=c.pos.x-g,u=c.pos.z-x,b=p*p+u*u;if(!(b>=$e*$e))if(b>1e-8){let E=Math.sqrt(b),v=($e-E)/E;c.pos.x+=p*v,c.pos.z+=u*v}else{let E=[[m.min.x-$e-c.pos.x,0],[m.max.x+$e-c.pos.x,0],[0,m.min.z-$e-c.pos.z],[0,m.max.z+$e-c.pos.z]];E.sort((v,N)=>Math.abs(v[0]+v[1])-Math.abs(N[0]+N[1])),c.pos.x+=E[0][0],c.pos.z+=E[0][1]}}}function f(d,m){let g=Math.max(d.min.x,Math.min(c.pos.x,d.max.x)),x=Math.max(d.min.z,Math.min(c.pos.z,d.max.z)),p=c.pos.x-g,u=c.pos.z-x;return p*p+u*u<m*m}return c.step=(d,m,g)=>{if(c.landed=!1,c.jumped=!1,c.frozen)return;c.grounded&&c.grounded.mover&&c.pos.add(c.grounded.delta);let x=c.grounded?tg:eg,p=m.x*yc,u=m.z*yc,b=Math.min(1,x*d/Math.max(.001,Math.hypot(p-c.vel.x,u-c.vel.z)));c.vel.x+=(p-c.vel.x)*b,c.vel.z+=(u-c.vel.z)*b,m.jumpPressed?c.jumpBuf=sg:c.jumpBuf=Math.max(0,c.jumpBuf-d),c.coyote=c.grounded?ig:Math.max(0,c.coyote-d),c.jumpBuf>0&&c.coyote>0&&(c.vel.y=ng,c.grounded=null,c.coyote=0,c.jumpBuf=0,c.jumped=!0,c.squash=-.18),!m.jumpHeld&&c.vel.y>3.5&&(c.vel.y-=wh*1.6*d),c.vel.y=Math.max(-rg,c.vel.y-wh*d),c.pos.x+=c.vel.x*d,c.pos.z+=c.vel.z*d,h(g);let E=c.pos.y;c.pos.y+=c.vel.y*d;let v=null;for(let N of g){if(!f(N,$e*.8))continue;let P=.02+(N.mover?Math.abs(N.delta.y):0);c.vel.y<=0&&E>=N.top-P-.001&&c.pos.y<=N.top+.001?(!v||N.top>v.top)&&(v=N):c.vel.y>0&&E+hs<=N.min.y+.001&&c.pos.y+hs>N.min.y&&(c.pos.y=N.min.y-hs,c.vel.y=0)}v?(c.grounded||(c.landed=!0,c.lastFallSpeed=-c.vel.y,c.lastFallSpeed>6&&(c.squash=Math.min(.28,c.lastFallSpeed*.018))),c.pos.y=v.top,c.vel.y=0,c.grounded=v):c.grounded&&(!f(c.grounded,$e*.8)||c.pos.y>c.grounded.top+.01?c.grounded=null:(c.pos.y=c.grounded.top,c.vel.y=0)),c.grounded?(c.groundTime+=d,c.airTime=0):(c.airTime+=d,c.groundTime=0)},c.render=d=>{c.root.position.copy(c.pos);let m=Math.hypot(c.vel.x,c.vel.z);if(m>.4&&!c.frozen){let x=Math.atan2(c.vel.x,c.vel.z)-c.facing;x=Math.atan2(Math.sin(x),Math.cos(x)),c.facing+=x*Math.min(1,d*14)}if(c.pivot.rotation.y=c.facing,c.squash+=(0-c.squash)*Math.min(1,d*12),c.pivot.scale.set(1+c.squash*.6,1-c.squash,1+c.squash*.6),!c.frozen&&s<0&&(c.grounded?o(m>3.2?"run":m>.5?"walk":"idle"):o(c.vel.y>.5&&c.airTime<.6?"jump":c.airTime>.12?"fall":c.anim)),s>=0){s+=d,o("cheer");let g=s*2.4%1;e.position.y=Math.sin(g*Math.PI)*.35,e.rotation.y=c.facing+Math.sin(s*5)*.3}r+=d,a.t=r,a.speed=m,n&&n.animate(a,d)},c.cheer=()=>{s=0,o("cheer")},c.SPEED=yc,c}function Ah({stickZone:i,stickBase:t,stickKnob:e,jumpBtn:n,onFirst:s}){let r={x:0,z:0,jumpHeld:!1,jumpEdge:!1,any:!1,touchUsed:!1},a=new Set,o=!1,c=()=>{o||(o=!0,s&&s()),r.any=!0},l={KeyW:"u",ArrowUp:"u",KeyS:"d",ArrowDown:"d",KeyA:"l",ArrowLeft:"l",KeyD:"r",ArrowRight:"r"};addEventListener("keydown",p=>{if(p.code==="Space"||p.code==="KeyK"){r.jumpHeld||(r.jumpEdge=!0),r.jumpHeld=!0,c(),p.preventDefault();return}l[p.code]&&(a.add(l[p.code]),c(),p.preventDefault())}),addEventListener("keyup",p=>{if(p.code==="Space"||p.code==="KeyK"){r.jumpHeld=!1;return}l[p.code]&&a.delete(l[p.code])}),addEventListener("blur",()=>{a.clear(),r.jumpHeld=!1,h.id=null,d()});let h={id:null,ox:0,oy:0,x:0,y:0,R:52},f=null;function d(){e.style.transform="translate(-50%,-50%)",h.x=h.y=0,t.classList.remove("on"),f&&(t.style.left=f.left,t.style.top=f.top)}function m(p,u){let b=Math.hypot(p,u),E=Math.min(1,b/h.R),v=Math.atan2(u,p),N=Math.cos(v)*E*h.R,P=Math.sin(v)*E*h.R;e.style.transform=`translate(calc(-50% + ${N}px), calc(-50% + ${P}px))`;let L=E<.12?0:Math.min(1,(E-.12)/.6);h.x=Math.cos(v)*L,h.y=Math.sin(v)*L}i.addEventListener("touchstart",p=>{if(p.preventDefault(),c(),r.touchUsed=!0,h.id!==null)return;let u=p.changedTouches[0];h.id=u.identifier;let b=i.getBoundingClientRect();f||(f={left:t.style.left,top:t.style.top}),h.ox=u.clientX,h.oy=u.clientY,t.style.left=u.clientX-b.left+"px",t.style.top=u.clientY-b.top+"px",t.classList.add("on"),m(0,0)},{passive:!1}),i.addEventListener("touchmove",p=>{p.preventDefault();for(let u of p.changedTouches)u.identifier===h.id&&m(u.clientX-h.ox,u.clientY-h.oy)},{passive:!1});let g=p=>{for(let u of p.changedTouches)u.identifier===h.id&&(h.id=null,d())};i.addEventListener("touchend",g),i.addEventListener("touchcancel",g),n.addEventListener("touchstart",p=>{p.preventDefault(),c(),r.touchUsed=!0,r.jumpEdge=!0,r.jumpHeld=!0,n.classList.add("down")},{passive:!1});let x=p=>{p.preventDefault(),r.jumpHeld=!1,n.classList.remove("down")};return n.addEventListener("touchend",x,{passive:!1}),n.addEventListener("touchcancel",x,{passive:!1}),n.addEventListener("mousedown",p=>{p.preventDefault(),c(),r.jumpEdge=!0,r.jumpHeld=!0,n.classList.add("down")}),addEventListener("mouseup",()=>{r.jumpHeld&&!a.size&&(r.jumpHeld=!1,n.classList.remove("down"))}),r.read=()=>{let p=h.x,u=h.y;if(a.size){p=(a.has("r")?1:0)-(a.has("l")?1:0),u=(a.has("d")?1:0)-(a.has("u")?1:0);let E=Math.hypot(p,u);E>1&&(p/=E,u/=E)}r.x=p,r.z=u;let b=r.jumpEdge;return r.jumpEdge=!1,{x:p,z:u,jumpPressed:b,jumpHeld:r.jumpHeld}},r.release=()=>{a.clear(),h.id=null,d(),r.jumpHeld=!1,r.jumpEdge=!1},r}var og=["step","jump","land","checkpoint","spike","respawn","exit","door","alert","caught","friend"];function Rh(i="./audio/"){let t={muted:!1,ready:!1,ctx:null,buffers:{},last:{}},n=document.createElement("audio").canPlayType("audio/ogg; codecs=vorbis")?"ogg":"mp3";async function s(){if(t.ctx)return;let c=window.AudioContext||window.webkitAudioContext;c&&(t.ctx=new c,t.gain=t.ctx.createGain(),t.gain.gain.value=t.muted?0:1,t.gain.connect(t.ctx.destination),await Promise.all(og.map(async l=>{try{let f=await(await fetch(i+l+"."+n)).arrayBuffer();t.buffers[l]=await t.ctx.decodeAudioData(f)}catch{}})),t.ready=!0)}function r(){s(),t.ctx&&t.ctx.state==="suspended"&&t.ctx.resume()}function a(c,{vol:l=1,rate:h=1,minGap:f=.04}={}){if(!t.ready||t.muted)return;let d=t.buffers[c];if(!d)return;let m=t.ctx.currentTime;if(t.last[c]&&m-t.last[c]<f)return;t.last[c]=m;let g=t.ctx.createBufferSource();g.buffer=d,g.playbackRate.value=h;let x=t.ctx.createGain();x.gain.value=l,g.connect(x),x.connect(t.gain),g.start()}function o(c){t.muted=c,t.gain&&(t.gain.gain.value=c?0:1)}return{unlock:r,play:a,setMuted:o,get muted(){return t.muted},get ready(){return t.ready}}}var ie=i=>document.getElementById(i),Ke=1/120,Vs=new URLSearchParams(location.search),Ch=Vs.get("dt")?1/Math.max(10,+Vs.get("dt")):0,ag=ie("app"),Qe=new Is({antialias:!0,powerPreference:"high-performance"}),us=Math.min(devicePixelRatio||1,2);Qe.setPixelRatio(us);Qe.outputColorSpace=pe;Qe.toneMapping=Gr;Qe.toneMappingExposure=1.05;Qe.shadowMap.enabled=!0;Qe.shadowMap.type=ec;ag.prepend(Qe.domElement);var tn=new Ps,cg=new kt("#5d8fd0"),lg=new kt("#f7d9ad");tn.fog=new Fr("#e8d3b6",40,170);{let i=new Hr(230,24,12),t=[],e=i.attributes.position;for(let n=0;n<e.count;n++){let s=Math.max(0,Math.min(1,e.getY(n)/120+.25)),r=lg.clone().lerp(cg,s);t.push(r.r,r.g,r.b)}i.setAttribute("color",new ae(t,3)),tn.add(new Nt(i,new Te({vertexColors:!0,side:Le,fog:!1,depthWrite:!1})))}tn.add(new Us("#dfe8f5","#8a7a68",1.35));var yn=new Ns("#ffe2bb",2.6);yn.castShadow=!0;yn.shadow.mapSize.set(1024,1024);Object.assign(yn.shadow.camera,{left:-11,right:11,top:11,bottom:-11,near:1,far:40});yn.shadow.bias=-6e-4;yn.shadow.normalBias=.03;tn.add(yn,yn.target);var hg=new I(3.5,14,-6),Ee=new we(55,1,.1,300),wt=Eh(tn),ug=ls(),jr=[],dg=new ze(1,1);function Bn(i,t,e,n={}){for(let s=0;s<t;s++){let r=new Fn({map:ug,color:e,transparent:!0,opacity:n.alpha||.5,depthWrite:!1,blending:n.add?gn:$n}),a=new ln(r),o=Math.random()*Math.PI*2,c=(n.speed||1.6)*(.5+Math.random()*.7);a.position.copy(i).add(new I(Math.cos(o)*.2,.08,Math.sin(o)*.2));let l=(n.size||.45)*(.7+Math.random()*.6);a.scale.setScalar(l),tn.add(a),jr.push({s:a,v:new I(Math.cos(o)*c,(n.up||.6)*(.5+Math.random()),Math.sin(o)*c),life:n.life||.5,t:0,size:l,grow:n.grow??1.6,g:n.g||0})}}function fg(i){for(let t=jr.length-1;t>=0;t--){let e=jr[t];e.t+=i;let n=e.t/e.life;if(n>=1){tn.remove(e.s),e.s.material.dispose(),jr.splice(t,1);continue}e.v.multiplyScalar(1-i*3),e.v.y-=e.g*i,e.s.position.addScaledVector(e.v,i),e.s.scale.setScalar(e.size*(1+n*e.grow)),e.s.material.opacity=(1-n)*(1-n)*.55}}var ri=new Nt(dg,new Te({map:vh(),transparent:!0,depthWrite:!1}));ri.rotation.x=-Math.PI/2;ri.renderOrder=2;tn.add(ri);var Z={state:"loading",t:0,acc:0,cp:0,deaths:0,falls:0,spikes:0,caught:0,runTime:0,running:!1,finished:!1,best:null,dieT:0,finishT:0,introT:0,stepT:0,shake:0,frames:[],introDone:!1,cpTimes:[]};try{let i=parseFloat(localStorage.getItem("escape3d.best"));i>0&&(Z.best=i)}catch{}var ge=Rh("./audio/");try{localStorage.getItem("escape3d.muted")==="1"&&(ge.setMuted(!0),ie("btn-sound").classList.add("off"))}catch{}var wi=Ah({stickZone:ie("stick-zone"),stickBase:ie("stick"),stickKnob:ie("knob"),jumpBtn:ie("jump"),onFirst:()=>{ge.unlock(),document.body.classList.add("moved")}});addEventListener("touchstart",()=>ge.unlock(),{passive:!0});addEventListener("mousedown",()=>ge.unlock());ie("btn-sound").addEventListener("click",i=>{i.stopPropagation();let t=!ge.muted;ge.setMuted(t),ie("btn-sound").classList.toggle("off",t);try{localStorage.setItem("escape3d.muted",t?"1":"0")}catch{}});ie("btn-again").addEventListener("click",()=>kh());addEventListener("keydown",i=>{Z.state==="finish"&&Z.finishT>1.2&&(i.code==="Enter"||i.code==="Space")&&kh()});var st,fs="dog";try{let i=localStorage.getItem("escape3d.hero");zs[i]&&(fs=i)}catch{}zs[Vs.get("hero")]&&(fs=Vs.get("hero"));queueMicrotask(()=>{st=Th(tn),st.setRig(fs),st.reset(wt.checkpoints[0].pos),st.facing=Math.PI+wt.start.yaw,Z.state=Vs.has("nointro")?"play":"intro",Z.state==="play"&&(wt.startDoor.opening=!0),Z.state==="play"&&(Z.introDone=!0),no(),tn.updateMatrixWorld(!0),to(1,!0),mg(),eo(),wt.trailReset(st.pos),document.title="Escape 3D",document.body.classList.add("ready"),requestAnimationFrame(Vh)});function pg(i){let t=new Is({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});t.setSize(160,160),t.outputColorSpace=pe,t.toneMapping=Gr;let e=new Ps;e.add(new Us("#ffffff","#8a8178",1.8));let n=new Ns("#fff3e0",2.2);n.position.set(2,4,5),e.add(n);let s=ii[i]().root;s.updateMatrixWorld(!0),s.rotation.y=.55,e.add(s),s.updateMatrixWorld(!0);let r=new Nn().setFromObject(s),a=r.getCenter(new I),o=r.getSize(new I),c=new we(30,1,.01,100),l=Math.max(o.x,o.y,o.z)*2.1;c.position.set(a.x,a.y+o.y*.15,a.z+l),c.lookAt(a.x,a.y+o.y*.05,a.z),t.render(e,c);let h=t.domElement.toDataURL("image/png");return t.dispose(),t.forceContextLoss(),h}function mg(){let i=ie("pick-list");i.innerHTML="";for(let t of Object.keys(zs)){let e=document.createElement("button");e.className="pick"+(t===fs?" on":""),e.dataset.hero=t;let n=new Image;n.src=pg(t),n.alt="",e.append(n);let s=document.createElement("span");s.textContent=zs[t].label,e.append(s),e.addEventListener("click",r=>{r.stopPropagation(),gg(t)}),i.append(e)}ie("btn-hero").querySelector("img").src=i.querySelector(".pick.on img").src}function gg(i){fs=i;try{localStorage.setItem("escape3d.hero",i)}catch{}let t=st.pos.clone(),e=st.facing;st.setRig(i),st.pos.copy(t),st.facing=e,st.squash=.25,eo(),Bn(st.pos.clone().add(new I(0,.4,0)),12,Ei,{speed:2,add:!0,alpha:.9,life:.5,size:.3,up:1.4}),ge.play("checkpoint",{vol:.5,rate:1.3});for(let n of document.querySelectorAll(".pick"))n.classList.toggle("on",n.dataset.hero===i);ie("btn-hero").querySelector("img").src=document.querySelector(".pick.on img").src,Dh()}function _g(){ie("pick").classList.remove("hidden"),wi.release()}function Dh(){ie("pick").classList.add("hidden")}ie("btn-hero").addEventListener("click",i=>{i.stopPropagation(),_g()});ie("pick").addEventListener("click",()=>Dh());var si=new I,oi=new I,ai=0,Fe=wt.start.yaw,ds=.46,Qr=99,je=new I;function Uh(i,t){let e=st.pos,n=st.grounded?st.pos.y:Math.max(ai-1.5,Math.min(ai+2,e.y));ai+=(n-ai)*.1;let s=innerHeight>innerWidth*1.1,r=s?6.6:5.8;je.set(e.x,ai+1.15,e.z);let a=Math.cos(ks),o=Math.sin(ks);i.set(je.x+Math.sin(Fe)*r*a,je.y+r*o,je.z+Math.cos(Fe)*r*a),t.set(je.x-Math.sin(Fe)*1.2,je.y+(s?-.35:.1),je.z-Math.cos(Fe)*1.2)}function Nh(i,t,e,n){let s=e;for(let r of wt.solids){if(r.seeThrough&&!r.camBlock||r.mover)continue;let a=0,o=s;for(let c of["x","y","z"]){let l=r.min[c]-n,h=r.max[c]+n;if(Math.abs(t[c])<1e-9){if(i[c]<l||i[c]>h){a=1/0;break}continue}let f=(l-i[c])/t[c],d=(h-i[c])/t[c];if(f>d&&([f,d]=[d,f]),a=Math.max(a,f),o=Math.min(o,d),a>o)break}a<=o&&a>.05&&a<s&&(s=a)}return s}var ks=.46;function xg(i,t){let e=new I(Math.sin(Fe)*Math.cos(i),Math.sin(i),Math.cos(Fe)*Math.cos(i));return Nh(je,e,t,.25)}var Ih=new I,Ph=new I;function to(i,t){if(Z.state==="finish"){let o=wt.owner.pos;Ih.set(o.x+3.4,1.7,o.z+2.6),Ph.set(o.x-.2,.95,o.z+.55),si.lerp(Ih,1-Math.exp(-i*3.5)),oi.lerp(Ph,1-Math.exp(-i*4)),Ee.position.copy(si),Ee.lookAt(oi);return}let e=new I,n=new I;if(st){let o=innerHeight>innerWidth*1.1?6.6:5.8;je.set(st.pos.x,ai+1.15,st.pos.z);let c=ds,l=-1;for(let h of[ds,.75,1,1.22]){if(h<ds)continue;let f=xg(h,o);if(f>=Math.min(o,4.6)){c=h,l=99;break}f>l&&(l=f,c=h)}ks=t?c:ks+(c-ks)*Math.min(1,i*5)}if(Uh(e,n),t)si.copy(e),oi.copy(n);else{let o=1-Math.exp(-i*10);si.lerp(e,o),oi.lerp(n,1-Math.exp(-i*12))}let s=si.clone().sub(je),r=s.length();s.normalize();let a=Nh(je,s,r,.25);a<r&&si.copy(je).addScaledVector(s,Math.max(.5,a-.15)),Ee.position.copy(si),Z.shake>0&&Ee.position.add(new I((Math.random()-.5)*Z.shake,(Math.random()-.5)*Z.shake,0)),Ee.lookAt(oi)}function yg(i){Qr+=i,Gs&&(Fe+=Gs*i*2.2,Qr=0);let t=Math.hypot(st.vel.x,st.vel.z);if(Qr>1&&t>2&&st.grounded&&Z.state==="play"){let n=Math.atan2(-st.vel.x,-st.vel.z)-Fe;n=Math.atan2(Math.sin(n),Math.cos(n));let s=Math.max(0,Math.min(1,(Math.cos(n)+.4)/1.4));Fe+=n*Math.min(1,i*1.6)*s}}var Gs=0,He={id:null,x:0,y:0};function Fh(i,t,e){He.id=e,He.x=i,He.y=t}function Oh(i,t){Fe-=(i-He.x)*.0065,ds=Math.max(.12,Math.min(1.05,ds+(t-He.y)*.004)),He.x=i,He.y=t,Qr=0}var Ws=ie("look");Ws.addEventListener("touchstart",i=>{if(i.preventDefault(),ge.unlock(),He.id===null){let t=i.changedTouches[0];Fh(t.clientX,t.clientY,t.identifier)}},{passive:!1});Ws.addEventListener("touchmove",i=>{i.preventDefault();for(let t of i.changedTouches)t.identifier===He.id&&Oh(t.clientX,t.clientY)},{passive:!1});var Bh=i=>{for(let t of i.changedTouches)t.identifier===He.id&&(He.id=null)};Ws.addEventListener("touchend",Bh);Ws.addEventListener("touchcancel",Bh);Ws.addEventListener("mousedown",i=>{Fh(i.clientX,i.clientY,"m")});addEventListener("mousemove",i=>{He.id==="m"&&Oh(i.clientX,i.clientY)});addEventListener("mouseup",()=>{He.id==="m"&&(He.id=null)});addEventListener("keydown",i=>{i.code==="KeyQ"&&(Gs=1),i.code==="KeyE"&&(Gs=-1)});addEventListener("keyup",i=>{(i.code==="KeyQ"||i.code==="KeyE")&&(Gs=0)});var zh=3.4,vc=i=>(i=Math.min(1,Math.max(0,i)),i*i*(3-2*i));function vg(i){let t=new I,e=new I;Uh(t,e);let n=new I(-.2,1.5,5.9),s=new I(-.9,1.35,5.2),r=new I(-4.6,.9,3);if(i>=1&&!wt.startDoor.opening&&(wt.startDoor.opening=!0,ge.play("door",{vol:1,rate:1.5}),Z.shake=.12,Ti(30)),i>1.3&&i<2.5?(st.pos.x=-5.6+vc((i-1.3)/1.2)*2.1,st.vel.set(2,0,0),st.facing=Math.PI/2):st.vel.set(0,0,0),i<2.4)Ee.position.lerpVectors(n,s,vc(i/2.4)),oi.copy(r).setX(-4.6+Math.max(0,st.pos.x+5.6)*.6);else{let a=vc((i-2.4)/(zh-2.4));Ee.position.lerpVectors(s,t,a),oi.lerpVectors(new I(-3.3,.9,3),e,a)}Z.shake>0&&(Ee.position.y+=(Math.random()-.5)*Z.shake),Ee.lookAt(oi),si.copy(Ee.position)}var vn=new Nt(new On(.75,1.3,12,4,!0),new Te({color:"#ffffff",wireframe:!0}));vn.visible=!1;tn.add(vn);function Hh(i,t=10){Bn(i,t,"#ff5c8a",{speed:1.6,add:!1,alpha:1,life:1,size:.28,up:2.6,grow:.3})}function eo(){let i=wt.friends[1],t=fs==="cat"?"dog":"cat";i&&i.kind!==t&&i.setKind(t),ie("pal-n").textContent=String(wt.friends.filter(e=>e.free).length)}function Mg(){!Z.running&&!Z.finished&&(Z.running=!0)}function Mc(i){if(Z.state==="play"){if(Z.state="dying",Z.dieT=0,Z.deaths++,Z.dieLen=.45,i==="caught"){Z.caught++,Z.dieLen=.95,st.frozen=!0,wi.release(),vn.visible=!0,vn.position.copy(st.pos),vn.position.y+=2.2,Z.netY=2.2,ge.play("caught",{vol:.9}),Z.shake=.14,Sc("hurt"),Ti([40,50,60]);return}i==="spike"?Z.spikes++:Z.falls++,st.frozen=!0,wi.release(),ge.play(i==="spike"?"spike":"land",{vol:i==="spike"?.9:.5,rate:i==="spike"?1:.6}),i==="spike"?(Z.shake=.18,Sc("hurt"),Bn(st.pos.clone().add(new I(0,.5,0)),10,"#ffffff",{speed:2.4,alpha:.6,life:.4})):Sc("fall"),Ti(i==="spike"?[30,40,30]:25)}}function Sg(){let i=wt.checkpoints[Z.cp];st.reset(i.pos),st.facing=Math.PI+Fe,ai=i.pos.y;for(let t of wt.guards)t.reset();vn.visible=!1,wt.trailReset(st.pos),Z.state="play",Bn(i.pos.clone(),14,Ei,{speed:2.2,add:!0,alpha:.9,life:.6,size:.35,up:1.6}),ge.play("respawn",{vol:.45}),st.squash=.25,ie("flash").className=""}function bg(i){Z.cp=i.i,wt.light(i),Z.cpTimes.push(Z.runTime),ge.play("checkpoint",{vol:.8}),Ti(15),Bn(i.pos.clone(),18,Ei,{speed:3,add:!0,alpha:.9,life:.8,size:.32,up:2.2}),Ac()}function Eg(){Z.state="finish",Z.finished=!0,Z.running=!1,Z.finishT=0,st.frozen=!0,wi.release(),st.vel.set(0,0,0),st.facing=Math.PI,wt.owner.cheer=!0,Z.arrived=!1,ge.play("exit",{vol:.9}),Ti([20,60,40]);let i=!Z.best||Z.runTime<Z.best;if(i){Z.best=Z.runTime;try{localStorage.setItem("escape3d.best",String(Z.best))}catch{}}Z.newBest=i,ie("flash").className="win",Ac()}function kh(){Z.cp=0,Z.deaths=Z.falls=Z.spikes=0,Z.runTime=0,Z.running=!1,Z.finished=!1,Z.cpTimes=[];for(let i of wt.checkpoints)i.i>0&&wt.unlight(i);wt.exit.open=0,wt.exit.opening=!1,ie("panel").classList.add("hidden"),ie("flash").className="",document.body.classList.remove("done"),wt.resetProgress(),Z.caught=0,vn.visible=!1,eo(),st.reset(wt.checkpoints[0].pos),st.facing=Math.PI+wt.start.yaw,ai=0,Fe=wt.start.yaw,ds=.46,to(1,!0),Z.state="play",Ac(),ge.play("respawn",{vol:.4})}function Ti(i){try{navigator.vibrate&&navigator.vibrate(i)}catch{}}function Sc(i){let t=ie("flash");t.className="",t.offsetWidth,t.className=i}function Tc(i){let t=Math.floor(i/60),e=i-t*60;return t+":"+(e<10?"0":"")+e.toFixed(1)}function Ac(){let i=ie("dots").children;for(let t=0;t<i.length;t++)i[t].classList.toggle("on",t<4?Z.cp>=t+1:Z.finished)}var Hs={x:0,z:0,jumpPressed:!1,jumpHeld:!1};function wg(i){if(Z.t+=Ke,wt.step(Z.t),Z.state!=="play"){st.step(Ke,{x:0,z:0,jumpPressed:!1,jumpHeld:!1},wt.solids);for(let n of wt.guards)n.step(Ke,st.pos,!1);Z.state==="finish"&&wt.followStep(Ke,st.pos,!0);return}!Z.running&&(Math.abs(i.x)+Math.abs(i.z)>.05||i.jumpPressed)&&Mg(),Z.running&&(Z.runTime+=Ke),st.step(Ke,i,wt.solids);for(let n of wt.walkers){let s=st.pos.x-n.pos.x,r=st.pos.z-n.pos.z,a=Math.hypot(s,r),o=.72;if(a<o&&st.pos.y<1.7){let c=(o-a)/Math.max(a,.01);st.pos.x+=s*c,st.pos.z+=r*c,(!Z.bumpT||Z.t-Z.bumpT>.6)&&(Z.bumpT=Z.t,ge.play("step",{vol:.4,rate:.6}),st.squash=.12)}}if(wt.owner.wave=st.pos.z<wt.owner.pos.z+16,st.jumped&&(ge.play("jump",{vol:.35,rate:1.1}),Bn(st.pos,4,"#d9d2c7",{speed:1.2,alpha:.4,life:.35})),st.landed){let n=st.lastFallSpeed;n>3&&(ge.play("land",{vol:Math.min(.8,.25+n*.04)}),Bn(st.pos,n>9?9:5,"#d9d2c7",{speed:1.4+n*.08,alpha:.5,life:.45}))}let t=Math.hypot(st.vel.x,st.vel.z);st.grounded&&t>1.2?(Z.stepT-=Ke*(t/st.SPEED),Z.stepT<=0&&(Z.stepT=.3,ge.play("step",{vol:.22,rate:.9+Math.random()*.25,minGap:.12}),t>4&&Math.random()<.5&&Bn(st.pos,1,"#d9d2c7",{speed:.5,alpha:.3,life:.35,size:.3}))):Z.stepT=.05;for(let n of wt.hazards){if(!n.active||st.pos.y>n.max.y||st.pos.y+hs<n.min.y)continue;let s=Math.max(n.min.x,Math.min(st.pos.x,n.max.x)),r=Math.max(n.min.z,Math.min(st.pos.z,n.max.z)),a=$e*.75;if((st.pos.x-s)**2+(st.pos.z-r)**2<a*a){Mc("spike");return}}if(st.pos.y<wt.killY){Mc("fall");return}wt.followStep(Ke,st.pos,!1);for(let n of wt.checkpoints)n.i<=Z.cp||Math.hypot(st.pos.x-n.pos.x,st.pos.z-n.pos.z)<1&&Math.abs(st.pos.y-n.pos.y)<.6&&bg(n);let e=wt.exit;for(let n of wt.buttons)n.pressed||!st.grounded||Math.abs(st.pos.y-n.pos.y)>.4||Math.hypot(st.pos.x-n.pos.x,st.pos.z-n.pos.z)>.8||(wt.press(n),ge.play("door",{vol:.8,rate:.8}),ge.play("friend",{vol:.8}),Ti(20),wt.lastFreed&&(Hh(wt.lastFreed.pos.clone().add(new I(0,.8,0)),8),wt.lastFreed=null),eo(),Bn(n.pos.clone().add(new I(0,.3,0)),14,"#3dff7a",{speed:2.6,add:!0,alpha:.9,life:.6,size:.3,up:1.6}));for(let n of wt.guards){let s=n.step(Ke,st.pos,!0);n.alerted&&(n.alerted=!1,ge.play("alert",{vol:.6}),Ti(20));let r=Math.hypot(n.vx,n.vz),a=Math.hypot(n.pos.x-st.pos.x,n.pos.z-st.pos.z);if(r>.3&&a<13&&(n.stepT=(n.stepT||0)-Ke*r,n.stepT<=0&&(n.stepT=1.5,ge.play("land",{vol:.5*(1-a/13),rate:.55,minGap:.1}))),s){Mc("caught");return}}st.pos.z<wt.owner.pos.z+2.6&&Math.abs(st.pos.x-wt.owner.pos.x)<4.5&&Eg()}var Lh=performance.now();function Vh(i){requestAnimationFrame(Vh);let t=(i-Lh)/1e3;Lh=i,t>.1&&(t=.1),Ch&&(t=Ch);let e=performance.now();if(Z.frames.push(t),Z.frames.length>600&&Z.frames.shift(),Z.state==="intro"){Z.introT+=t;let s=wi.read();Z.introT>=zh||s.jumpPressed||Math.abs(s.x)+Math.abs(s.z)>.1?(Z.state="play",Z.introDone=!0,wt.startDoor.opening=!0,st.vel.set(0,0,0),to(1,!0)):vg(Z.introT)}if(Z.state!=="intro"){let s=Z.state==="play"?wi.read():(wi.read(),{x:0,z:0,jumpPressed:!1,jumpHeld:!1});Z.acc+=t,s.jumpPressed&&(Z.pendingJump=!0);let r=0;yg(t);let a=Math.cos(Fe),o=Math.sin(Fe),c=s.x*a+s.z*o,l=-s.x*o+s.z*a;for(;Z.acc>=Ke&&r<12;)Hs.x=c,Hs.z=l,Hs.jumpHeld=s.jumpHeld||Z.pendingJump,Hs.jumpPressed=Z.pendingJump,Z.pendingJump=!1,wg(Hs),Z.acc-=Ke,r++;if(r===12&&(Z.acc=0),Z.state==="dying"&&(Z.dieT+=t,vn.visible&&(Z.netY=Math.max(.65,Z.netY-t*9),vn.position.y=st.pos.y+Z.netY),Z.dieT>(Z.dieLen||.45)&&Sg()),Z.state==="finish"){if(Z.finishT+=t,!Z.arrived){let h=wt.owner.pos.z+1;if(st.pos.z=Math.max(h,st.pos.z-t*5.5),st.pos.x+=(wt.owner.pos.x-st.pos.x)*Math.min(1,t*5),st.pos.z<=h+.01){Z.arrived=!0,st.cheer();for(let f=0;f<5;f++)setTimeout(()=>Hh(st.pos.clone().lerp(wt.owner.pos,.4).add(new I(0,1,0)),7),f*320)}}Z.finishT>1.3&&ie("panel").classList.contains("hidden")&&Ag()}to(t,!1)}wt.visual(Z.t,t),st.render(t),fg(t),Z.shake=Math.max(0,Z.shake-t*.6);let n=-1/0;for(let s of wt.solids)s.top<=st.pos.y+.05&&st.pos.x>s.min.x&&st.pos.x<s.max.x&&st.pos.z>s.min.z&&st.pos.z<s.max.z&&s.top>n&&(n=s.top);if(ri.visible=n>-1/0,ri.visible){let s=st.pos.y-n;ri.position.set(st.pos.x,n+.02,st.pos.z);let r=.9*Math.max(.45,1-s*.12);ri.scale.set(r,r,1),ri.material.opacity=Math.max(.25,1-s*.15)}yn.target.position.set(st.pos.x*.5,st.pos.y,st.pos.z-3),yn.position.copy(yn.target.position).add(hg),ie("time").textContent=Tc(Z.runTime),Qe.render(tn,Ee),Z.cpu=performance.now()-e,Tg(t)}var bc=0,Ec=0,wc=0;function Tg(i){if(bc+=i,Ec++,wc+=i,bc<2)return;let t=wc/Ec;bc=Ec=wc=0,t>1/45&&us>1&&(us=Math.max(1,us-.25),Qe.setPixelRatio(us),no())}function Ag(){ie("p-time").textContent=Tc(Z.runTime),ie("p-sub").textContent=Z.newBest?Z.deaths?`New best \xB7 ${Z.deaths} ${Z.deaths===1?"retry":"retries"}`:"New best \xB7 no retries":`Best ${Tc(Z.best)} \xB7 ${Z.deaths} ${Z.deaths===1?"retry":"retries"}`,ie("panel").classList.remove("hidden"),document.body.classList.add("done")}function no(){let i=innerWidth,t=innerHeight;Qe.setSize(i,t,!1),Ee.aspect=i/t,Ee.fov=i/t<.75?62:52,Ee.updateProjectionMatrix(),document.body.dataset.mode=i/t<.9?"portrait":"landscape"}addEventListener("resize",no);no();var Rg=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window;document.body.classList.toggle("touch",Rg);addEventListener("touchend",()=>{scrollY!==120&&scrollTo(0,120)},{passive:!0});scrollTo(0,120);window.__game={get state(){return Z.state},get t(){return Z.t},get runTime(){return Z.runTime},get cp(){return Z.cp},get deaths(){return Z.deaths},get falls(){return Z.falls},get spikes(){return Z.spikes},get caught(){return Z.caught},walkers:()=>wt.walkers.map(i=>({x:i.pos.x,z:i.pos.z,dir:i.dir})),get doorOpen0(){return wt.startDoor.open},get ownerPos(){return{x:wt.owner.pos.x,y:1.4,z:wt.owner.pos.z}},friends:()=>wt.friends.map(i=>({free:i.free,kind:i.kind,x:i.pos.x,y:i.pos.y,z:i.pos.z})),get netOn(){return vn.visible},guards:()=>wt.guards.map(i=>({x:i.pos.x,z:i.pos.z,vx:i.vx,vz:i.vz,mode:i.mode})),buttons:()=>wt.buttons.map(i=>i.pressed),get finished(){return Z.finished},get pos(){return st?{x:st.pos.x,y:st.pos.y,z:st.pos.z}:null},get grounded(){return!!(st&&st.grounded)},get anim(){return st&&st.anim},get camYaw(){return Fe},get exitPos(){return{x:wt.exit.x,y:wt.exit.y+1.7,z:wt.exit.z}},get cpPos(){return wt.checkpoints.map(i=>({x:i.pos.x,y:i.pos.y,z:i.pos.z}))},get hero(){return st&&st.rigName},get doorOpen(){return wt.exit.open},get pixelRatio(){return us},movers:()=>wt.movers.map(i=>({x:i.pos.x,y:i.pos.y,z:i.pos.z,W:i.W,D:i.D})),moverAt:(i,t)=>{let e=wt.movers[i].at(t);return{x:e.x,z:e.z}},trap:i=>wt.trapHeight(wt.traps[0],i??Z.t),trapPeriod:wt.traps[0].period,frames:()=>Z.frames.slice(),cpu:()=>Z.cpu,calls:()=>Qe.info.render.calls,tris:()=>Qe.info.render.triangles,camera:()=>({x:Ee.position.x,y:Ee.position.y,z:Ee.position.z}),project:(i,t,e)=>{let n=new I(i,t,e).project(Ee);return{x:(n.x+1)/2*innerWidth,y:(1-n.y)/2*innerHeight,inFront:n.z<1}}};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
