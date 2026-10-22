var Xi=Object.defineProperty,Um=Object.getOwnPropertyDescriptor,Wm=Object.getOwnPropertyNames,Lm=Object.prototype.hasOwnProperty,qm=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),P=(e,t)=>()=>(e&&(t=e(e=0)),t),Gt=(e,t)=>{for(var r in t)Xi(e,r,{get:t[r],enumerable:!0})},Fm=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Wm(t))!Lm.call(e,i)&&i!==r&&Xi(e,i,{get:()=>t[i],enumerable:!(a=Um(t,i))||a.enumerable});return e},hr=e=>Fm(Xi({},"__esModule",{value:!0}),e),Yt,_t,Lt,js,Od,Md=P(()=>{Yt=new Map,_t=[],Lt=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let a=Yt.get(e);if(a===void 0)Yt.set(e,{backend:t,priority:r});else{if(a.priority>r)return;if(a.priority===r&&a.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let i=_t.indexOf(e);i!==-1&&_t.splice(i,1);for(let n=0;n<_t.length;n++)if(Yt.get(_t[n]).priority<=r){_t.splice(n,0,e);return}_t.push(e)}return}throw new TypeError("not a valid backend")},js=async e=>{let t=Yt.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(a){return r||(t.error=`${a}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Od=async e=>{let t=e.executionProviders||[],r=t.map(l=>typeof l=="string"?l:l.name),a=r.length===0?_t:r,i,n=[],s=new Set;for(let l of a){let d=await js(l);typeof d=="string"?n.push({name:l,err:d}):(i||(i=d),i===d&&s.add(l))}if(!i)throw new Error(`no available backend found. ERR: ${n.map(l=>`[${l.name}] ${l.err}`).join(", ")}`);for(let{name:l,err:d}of n)r.includes(l)&&console.warn(`removing requested execution provider "${l}" from session options because it is not available: ${d}`);let u=t.filter(l=>s.has(typeof l=="string"?l:l.name));return[i,new Proxy(e,{get:(l,d)=>d==="executionProviders"?u:Reflect.get(l,d)})]}}),jm=P(()=>{Md()}),Rd,Vm=P(()=>{Rd="1.22.0-dev.20250409-89f8206ba4"}),za,We,Bd=P(()=>{Vm(),za="warning",We={wasm:{},webgl:{},webgpu:{},versions:{common:Rd},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);za=e}},get logLevel(){return za}},Object.defineProperty(We,"logLevel",{enumerable:!0})}),fe,Gm=P(()=>{Bd(),fe=We}),Nd,Dd,Hm=P(()=>{Nd=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let a=r.getContext("2d");if(a!=null){let i,n;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],n=e.dims[3]):(i=e.dims[3],n=e.dims[2]);let s=t?.format!==void 0?t.format:"RGB",u=t?.norm,l,d;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],0],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?d=[0,0,0,0]:typeof u.bias=="number"?d=[u.bias,u.bias,u.bias,u.bias]:(d=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(d[3]=u.bias[3]));let c=n*i,f=0,h=c,g=c*2,_=-1;s==="RGBA"?(f=0,h=c,g=c*2,_=c*3):s==="RGB"?(f=0,h=c,g=c*2):s==="RBG"&&(f=0,g=c,h=c*2);for(let b=0;b<n;b++)for(let x=0;x<i;x++){let v=(e.data[f++]-d[0])*l[0],w=(e.data[h++]-d[1])*l[1],S=(e.data[g++]-d[2])*l[2],k=_===-1?255:(e.data[_++]-d[3])*l[3];a.fillStyle="rgba("+v+","+w+","+S+","+k+")",a.fillRect(x,b,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Dd=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),a;if(r!=null){let i,n,s;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],n=e.dims[1],s=e.dims[3]):(i=e.dims[3],n=e.dims[2],s=e.dims[1]);let u=t!==void 0&&t.format!==void 0?t.format:"RGB",l=t?.norm,d,c;l===void 0||l.mean===void 0?d=[255,255,255,255]:typeof l.mean=="number"?d=[l.mean,l.mean,l.mean,l.mean]:(d=[l.mean[0],l.mean[1],l.mean[2],255],l.mean[3]!==void 0&&(d[3]=l.mean[3])),l===void 0||l.bias===void 0?c=[0,0,0,0]:typeof l.bias=="number"?c=[l.bias,l.bias,l.bias,l.bias]:(c=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(c[3]=l.bias[3]));let f=n*i;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let h=4,g=0,_=1,b=2,x=3,v=0,w=f,S=f*2,k=-1;u==="RGBA"?(v=0,w=f,S=f*2,k=f*3):u==="RGB"?(v=0,w=f,S=f*2):u==="RBG"&&(v=0,S=f,w=f*2),a=r.createImageData(i,n);for(let T=0;T<n*i;g+=h,_+=h,b+=h,x+=h,T++)a.data[g]=(e.data[v++]-c[0])*d[0],a.data[_]=(e.data[w++]-c[1])*d[1],a.data[b]=(e.data[S++]-c[2])*d[2],a.data[x]=k===-1?255:(e.data[k++]-c[3])*d[3]}else throw new Error("Can not access image data");return a}}),Cr,Pd,Ud,Wd,Ld,qd,Km=P(()=>{Yi(),Cr=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:a}=t,i=t.norm??{mean:255,bias:0},n,s;typeof i.mean=="number"?n=[i.mean,i.mean,i.mean,i.mean]:n=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?s=[i.bias,i.bias,i.bias,i.bias]:s=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let u=t.format!==void 0?t.format:"RGBA",l=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=r*a,c=l==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),f=4,h=0,g=1,_=2,b=3,x=0,v=d,w=d*2,S=-1;u==="RGB"&&(f=3,h=0,g=1,_=2,b=-1),l==="RGBA"?S=d*3:l==="RBG"?(x=0,w=d,v=d*2):l==="BGR"&&(w=0,v=d,x=d*2);for(let k=0;k<d;k++,h+=f,_+=f,g+=f,b+=f)c[x++]=(e[h]+s[0])/n[0],c[v++]=(e[g]+s[1])/n[1],c[w++]=(e[_]+s[2])/n[2],S!==-1&&b!==-1&&(c[S++]=(e[b]+s[3])/n[3]);return l==="RGBA"?new Re("float32",c,[1,4,r,a]):new Re("float32",c,[1,3,r,a])},Pd=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,a=typeof ImageData<"u"&&e instanceof ImageData,i=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,n=typeof e=="string",s,u=t??{},l=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=c=>typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||c instanceof OffscreenCanvas?c.getContext("2d"):null;if(r){let c=l();c.width=e.width,c.height=e.height;let f=d(c);if(f!=null){let h=e.height,g=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(h=t.resizedHeight,g=t.resizedWidth),t!==void 0){if(u=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");u.tensorFormat="RGBA",u.height=h,u.width=g}else u.tensorFormat="RGBA",u.height=h,u.width=g;f.drawImage(e,0,0),s=f.getImageData(0,0,g,h).data}else throw new Error("Can not access image data")}else if(a){let c,f;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(c=t.resizedHeight,f=t.resizedWidth):(c=e.height,f=e.width),t!==void 0&&(u=t),u.format="RGBA",u.height=c,u.width=f,t!==void 0){let h=l();h.width=f,h.height=c;let g=d(h);if(g!=null)g.putImageData(e,0,0),s=g.getImageData(0,0,f,c).data;else throw new Error("Can not access image data")}else s=e.data}else if(i){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let c=l();c.width=e.width,c.height=e.height;let f=d(c);if(f!=null){let h=e.height,g=e.width;return f.drawImage(e,0,0,g,h),s=f.getImageData(0,0,g,h).data,u.height=h,u.width=g,Cr(s,u)}else throw new Error("Can not access image data")}else{if(n)return new Promise((c,f)=>{let h=l(),g=d(h);if(!e||!g)return f();let _=new Image;_.crossOrigin="Anonymous",_.src=e,_.onload=()=>{h.width=_.width,h.height=_.height,g.drawImage(_,0,0,h.width,h.height);let b=g.getImageData(0,0,h.width,h.height);u.height=h.height,u.width=h.width,c(Cr(b.data,u))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return Cr(s,u);throw new Error("Input data provided is not supported - aborted tensor creation")},Ud=(e,t)=>{let{width:r,height:a,download:i,dispose:n}=t,s=[1,a,r,4];return new Re({location:"texture",type:"float32",texture:e,dims:s,download:i,dispose:n})},Wd=(e,t)=>{let{dataType:r,dims:a,download:i,dispose:n}=t;return new Re({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:a,download:i,dispose:n})},Ld=(e,t)=>{let{dataType:r,dims:a,download:i,dispose:n}=t;return new Re({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:a,download:i,dispose:n})},qd=(e,t,r)=>new Re({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),zt,lr,Ca,Fd,Zm=P(()=>{zt=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),lr=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Ca=!1,Fd=()=>{if(!Ca){Ca=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,a=typeof r<"u"&&r.from;e&&(zt.set("int64",BigInt64Array),lr.set(BigInt64Array,"int64")),t&&(zt.set("uint64",BigUint64Array),lr.set(BigUint64Array,"uint64")),a?(zt.set("float16",r),lr.set(r,"float16")):zt.set("float16",Uint16Array)}}}),jd,Vd,Qm=P(()=>{Yi(),jd=e=>{let t=1;for(let r=0;r<e.length;r++){let a=e[r];if(typeof a!="number"||!Number.isSafeInteger(a))throw new TypeError(`dims[${r}] must be an integer, got: ${a}`);if(a<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${a}`);t*=a}return t},Vd=(e,t)=>{switch(e.location){case"cpu":return new Re(e.type,e.data,t);case"cpu-pinned":return new Re({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new Re({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new Re({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new Re({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),Re,Yi=P(()=>{Hm(),Km(),Zm(),Qm(),Re=class{constructor(e,t,r){Fd();let a,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,a=e.type,i=e.dims,e.location){case"cpu-pinned":{let s=zt.get(a);if(!s)throw new TypeError(`unsupported type "${a}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(a!=="float32")throw new TypeError(`unsupported type "${a}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(a!=="float32"&&a!=="float16"&&a!=="int32"&&a!=="int64"&&a!=="uint32"&&a!=="uint8"&&a!=="bool"&&a!=="uint4"&&a!=="int4")throw new TypeError(`unsupported type "${a}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(a!=="float32"&&a!=="float16"&&a!=="int32"&&a!=="int64"&&a!=="uint32"&&a!=="uint64"&&a!=="int8"&&a!=="uint8"&&a!=="bool"&&a!=="uint4"&&a!=="int4")throw new TypeError(`unsupported type "${a}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,u;if(typeof e=="string")if(a=e,u=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let l=zt.get(e);if(l===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&l===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${l.name} as data.`);e==="uint64"||e==="int64"?s=l.from(t,BigInt):s=l.from(t)}else if(t instanceof l)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&l!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${a} tensor's data must be type of ${l}`)}else if(u=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let l=typeof e[0];if(l==="string")a="string",s=e;else if(l==="boolean")a="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${l}.`)}else if(e instanceof Uint8ClampedArray)a="uint8",s=Uint8Array.from(e);else{let l=lr.get(e.constructor);if(l===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);a=l,s=e}if(u===void 0)u=[s.length];else if(!Array.isArray(u))throw new TypeError("A tensor's dims must be a number array");i=u,this.cpuData=s,this.dataLocation="cpu"}let n=jd(i);if(this.cpuData&&n!==this.cpuData.length&&!((a==="uint4"||a==="int4")&&Math.ceil(n/2)===this.cpuData.length))throw new Error(`Tensor's size(${n}) does not match data length(${this.cpuData.length}).`);this.type=a,this.dims=i,this.size=n}static async fromImage(e,t){return Pd(e,t)}static fromTexture(e,t){return Ud(e,t)}static fromGpuBuffer(e,t){return Wd(e,t)}static fromMLTensor(e,t){return Ld(e,t)}static fromPinnedBuffer(e,t,r){return qd(e,t,r)}toDataURL(e){return Nd(this,e)}toImageData(e){return Dd(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Vd(this,e)}}}),ke,Gd=P(()=>{Yi(),ke=Re}),Zr,Aa,it,Qe,Hd=P(()=>{Bd(),Zr=(e,t)=>{(typeof We.trace>"u"?!We.wasm.trace:!We.trace)||console.timeStamp(`${e}::ORT::${t}`)},Aa=(e,t)=>{let r=new Error().stack?.split(/\r\n|\r|\n/g)||[],a=!1;for(let i=0;i<r.length;i++){if(a&&!r[i].includes("TRACE_FUNC")){let n=`FUNC_${e}::${r[i].trim().split(" ")[1]}`;t&&(n+=`::${t}`),Zr("CPU",n);return}r[i].includes("TRACE_FUNC")&&(a=!0)}},it=e=>{(typeof We.trace>"u"?!We.wasm.trace:!We.trace)||Aa("BEGIN",e)},Qe=e=>{(typeof We.trace>"u"?!We.wasm.trace:!We.trace)||Aa("END",e)}}),Kd,Xm=P(()=>{Md(),Gd(),Hd(),Kd=class Zd{constructor(t){this.handler=t}async run(t,r,a){it();let i={},n={};if(typeof t!="object"||t===null||t instanceof ke||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof ke)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let d of r){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);i[d]=null}if(typeof a=="object"&&a!==null)n=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,c=Object.getOwnPropertyNames(r);for(let f of this.outputNames)if(c.indexOf(f)!==-1){let h=r[f];(h===null||h instanceof ke)&&(d=!0,s=!1,i[f]=h)}if(d){if(typeof a=="object"&&a!==null)n=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else n=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(s)for(let d of this.outputNames)i[d]=null;let u=await this.handler.run(t,i,n),l={};for(let d in u)if(Object.hasOwnProperty.call(u,d)){let c=u[d];c instanceof ke?l[d]=c:l[d]=new ke(c.type,c.data,c.dims)}return Qe(),l}async release(){return this.handler.dispose()}static async create(t,r,a,i){it();let n,s={};if(typeof t=="string"){if(n=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(n=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let c=t,f=0,h=t.byteLength;if(typeof r=="object"&&r!==null)s=r;else if(typeof r=="number"){if(f=r,!Number.isSafeInteger(f))throw new RangeError("'byteOffset' must be an integer.");if(f<0||f>=c.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${c.byteLength}).`);if(h=t.byteLength-f,typeof a=="number"){if(h=a,!Number.isSafeInteger(h))throw new RangeError("'byteLength' must be an integer.");if(h<=0||f+h>c.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${c.byteLength-f}].`);if(typeof i=="object"&&i!==null)s=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof a<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");n=new Uint8Array(c,f,h)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[u,l]=await Od(s),d=await u.createInferenceSessionHandler(n,l);return Qe(),new Zd(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Ji,Ym=P(()=>{Xm(),Ji=Kd}),Jm=P(()=>{}),eg=P(()=>{}),tg=P(()=>{}),rg=P(()=>{}),ag={};Gt(ag,{InferenceSession:()=>Ji,TRACE:()=>Zr,TRACE_FUNC_BEGIN:()=>it,TRACE_FUNC_END:()=>Qe,Tensor:()=>ke,env:()=>fe,registerBackend:()=>Lt});var Xe=P(()=>{jm(),Gm(),Ym(),Gd(),Jm(),eg(),Hd(),tg(),rg()}),en=P(()=>{}),Qd={};Gt(Qd,{default:()=>Xd});var Oa,Ma,Xd,ig=P(()=>{ah(),Bt(),tn(),Oa="ort-wasm-proxy-worker",Ma=globalThis.self?.name===Oa,Ma&&(self.onmessage=e=>{let{type:t,in:r}=e.data;try{switch(t){case"init-wasm":rn(r.wasm).then(()=>{$n(r).then(()=>{postMessage({type:t})},a=>{postMessage({type:t,err:a})})},a=>{postMessage({type:t,err:a})});break;case"init-ep":{let{epName:a,env:i}=r;vn(i,a).then(()=>{postMessage({type:t})},n=>{postMessage({type:t,err:n})});break}case"copy-from":{let{buffer:a}=r,i=ra(a);postMessage({type:t,out:i});break}case"create":{let{model:a,options:i}=r;xn(a,i).then(n=>{postMessage({type:t,out:n})},n=>{postMessage({type:t,err:n})});break}case"release":kn(r),postMessage({type:t});break;case"run":{let{sessionId:a,inputIndices:i,inputs:n,outputIndices:s,options:u}=r;Sn(a,i,n,s,new Array(s.length).fill(null),u).then(l=>{l.some(d=>d[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:l},In([...n,...l]))},l=>{postMessage({type:t,err:l})});break}case"end-profiling":Tn(r),postMessage({type:t});break;default:}}catch(a){postMessage({type:t,err:a})}}),Xd=Ma?null:e=>new Worker(e??Me,{type:"module",name:Oa})}),Yd={};Gt(Yd,{default:()=>Jd});var Ra,Ba,Jd,Vs,ng=P(()=>{Ba=(Ra=import.meta.url,async function(e={}){var t,r,a=e,i=new Promise((o,p)=>{t=o,r=p}),n=typeof window=="object",s=typeof WorkerGlobalScope<"u",u=s&&self.name?.startsWith("em-pthread");a.mountExternalData=(o,p)=>{o.startsWith("./")&&(o=o.substring(2)),(a.Eb||(a.Eb=new Map)).set(o,p)},a.unmountExternalData=()=>{delete a.Eb};var l=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,pc:!0}).buffer.constructor;let d=o=>async(...p)=>{try{if(a.Fb)throw Error("Session already started");let m=a.Fb={dc:p[0],errors:[]},y=await o(...p);if(a.Fb!==m)throw Error("Session mismatch");a.Jb?.flush();let $=m.errors;if(0<$.length){let I=await Promise.all($);if(I=I.filter(M=>M),0<I.length)throw Error(I.join(`
`))}return y}finally{a.Fb=null}};a.jsepInit=(o,p)=>{if(o==="webgpu"){[a.Jb,a.Ub,a.Yb,a.Kb,a.Xb,a.jb,a.Zb,a.ac,a.Vb,a.Wb,a.$b]=p;let m=a.Jb;a.jsepRegisterBuffer=(y,$,I,M)=>m.registerBuffer(y,$,I,M),a.jsepGetBuffer=y=>m.getBuffer(y),a.jsepCreateDownloader=(y,$,I)=>m.createDownloader(y,$,I),a.jsepOnCreateSession=y=>{m.onCreateSession(y)},a.jsepOnReleaseSession=y=>{m.onReleaseSession(y)},a.jsepOnRunStart=y=>m.onRunStart(y),a.bc=(y,$)=>{m.upload(y,$)}}else if(o==="webnn"){let m=p[0];[a.nc,a.Nb,a.webnnEnsureTensor,a.Ob,a.webnnDownloadTensor]=p.slice(1),a.webnnReleaseTensorId=a.Nb,a.webnnUploadTensor=a.Ob,a.webnnOnRunStart=y=>m.onRunStart(y),a.webnnOnRunEnd=m.onRunEnd.bind(m),a.webnnRegisterMLContext=(y,$)=>{m.registerMLContext(y,$)},a.webnnOnReleaseSession=y=>{m.onReleaseSession(y)},a.webnnCreateMLTensorDownloader=(y,$)=>m.createMLTensorDownloader(y,$),a.webnnRegisterMLTensor=(y,$,I,M)=>m.registerMLTensor(y,$,I,M),a.webnnCreateMLContext=y=>m.createMLContext(y),a.webnnRegisterMLConstant=(y,$,I,M,D,W)=>m.registerMLConstant(y,$,I,M,D,a.Eb,W),a.webnnRegisterGraphInput=m.registerGraphInput.bind(m),a.webnnIsGraphInput=m.isGraphInput.bind(m),a.webnnCreateTemporaryTensor=m.createTemporaryTensor.bind(m),a.webnnIsInt64Supported=m.isInt64Supported.bind(m)}};let c=()=>{let o=(p,m,y)=>(...$)=>{let I=Je,M=m?.();$=p(...$);let D=m?.();return M!==D&&(p=D,y(M),m=y=null),Je!=I?new Promise((W,H)=>{$a={resolve:W,reject:H}}):$};(()=>{for(let p of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])a[p]=o(a[p],()=>a[p],m=>a[p]=m)})(),d!==void 0&&(a._OrtRun=d(a._OrtRun),a._OrtRunWithBinding=d(a._OrtRunWithBinding)),c=void 0};a.asyncInit=()=>{c?.()};var f,h,g=Object.assign({},a),_=(o,p)=>{throw p},b="";(n||s)&&(s?b=self.location.href:typeof document<"u"&&document.currentScript&&(b=document.currentScript.src),Ra&&(b=Ra),b=b.startsWith("blob:")?"":b.slice(0,b.replace(/[?#].*/,"").lastIndexOf("/")+1),s&&(h=o=>{var p=new XMLHttpRequest;return p.open("GET",o,!1),p.responseType="arraybuffer",p.send(null),new Uint8Array(p.response)}),f=async o=>{if(X(o))return new Promise((m,y)=>{var $=new XMLHttpRequest;$.open("GET",o,!0),$.responseType="arraybuffer",$.onload=()=>{$.status==200||$.status==0&&$.response?m($.response):y($.status)},$.onerror=y,$.send(null)});var p=await fetch(o,{credentials:"same-origin"});if(p.ok)return p.arrayBuffer();throw Error(p.status+" : "+p.url)});var x=console.log.bind(console),v=console.error.bind(console),w=x,S=v;Object.assign(a,g),g=null;var k,T,z,E,O,N,F,Z,G,U,J,oe,q,Y=a.wasmBinary,re=!1,X=o=>o.startsWith("file://");function he(){return k.buffer!=E.buffer&&Ce(),E}function B(){return k.buffer!=E.buffer&&Ce(),O}function L(){return k.buffer!=E.buffer&&Ce(),N}function te(){return k.buffer!=E.buffer&&Ce(),F}function A(){return k.buffer!=E.buffer&&Ce(),Z}function ie(){return k.buffer!=E.buffer&&Ce(),G}function qe(){return k.buffer!=E.buffer&&Ce(),U}function be(){return k.buffer!=E.buffer&&Ce(),q}if(u){let o=function(p){try{var m=p.data,y=m.Bb;if(y==="load"){let $=[];self.onmessage=I=>$.push(I),self.startWorker=()=>{postMessage({Bb:"loaded"});for(let I of $)o(I);self.onmessage=o};for(let I of m.Rb)a[I]&&!a[I].proxy||(a[I]=(...M)=>{postMessage({Bb:"callHandler",Qb:I,args:M})},I=="print"&&(w=a[I]),I=="printErr"&&(S=a[I]));k=m.kc,Ce(),ve(m.lc)}else if(y==="run"){vh(m.Ab),Sa(m.Ab,0,0,1,0,0),Pn(),ba(m.Ab),Fe||(Os(),Fe=!0);try{xh(m.fc,m.Hb)}catch($){if($!="unwind")throw $}}else m.target!=="setimmediate"&&(y==="checkMailbox"?Fe&&br():y&&(S(`worker: received unknown command ${y}`),S(m)))}catch($){throw Ms(),$}};var ve,Fe=!1;S=function(...p){p=p.join(" "),console.error(p)},self.alert=function(...p){postMessage({Bb:"alert",text:p.join(" "),ic:Ir()})},self.onunhandledrejection=p=>{throw p.reason||p},self.onmessage=o}function Ce(){var o=k.buffer;a.HEAP8=E=new Int8Array(o),a.HEAP16=N=new Int16Array(o),a.HEAPU8=O=new Uint8Array(o),a.HEAPU16=F=new Uint16Array(o),a.HEAP32=Z=new Int32Array(o),a.HEAPU32=G=new Uint32Array(o),a.HEAPF32=U=new Float32Array(o),a.HEAPF64=q=new Float64Array(o),a.HEAP64=J=new BigInt64Array(o),a.HEAPU64=oe=new BigUint64Array(o)}function yr(){u?startWorker(a):Q.Ca()}u||(k=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),Ce());var oa,Ht=0,Kt=null;function An(){if(--Ht==0&&Kt){var o=Kt;Kt=null,o()}}function pt(o){throw S(o="Aborted("+o+")"),re=!0,o=new WebAssembly.RuntimeError(o+". Build with -sASSERTIONS for more info."),r(o),o}function On(){return{a:{L:$h,Aa:wh,b:Sh,$:qn,A:Vn,pa:Gn,X:Kn,Z:Zn,qa:Qn,na:Xn,ga:Yn,ma:Jn,J:es,Y:ts,V:rs,oa:as,W:is,va:Th,E:Ih,Q:Eh,O:Ch,D:Oh,u:Mh,r:Rh,P:Bh,z:qh,R:Fh,ja:jh,T:Vh,aa:Gh,M:Hh,F:Kh,ia:ba,sa:Zh,t:Qh,Ba:Xh,w:em,o:tm,l:am,c:ga,n:im,j:om,v:um,p:lm,f:dm,s:pm,m:cm,e:fm,k:hm,i:mm,g:gm,d:_m,da:ym,ea:bm,fa:wm,ba:ys,ca:bs,N:ws,xa:vm,ua:km,h:Sm,C:Tm,G:Im,ta:xm,x:Em,ra:zm,U:Cm,q:$m,y:Am,K:Om,S:Mm,za:Rm,ya:Bm,ka:ks,la:Ss,_:ca,B:Ts,I:Is,ha:Es,H:zs,a:k,wa:pa}}}var ua={829644:(o,p,m,y,$)=>{if(a===void 0||!a.Eb)return 1;if((o=xe(Number(o>>>0))).startsWith("./")&&(o=o.substring(2)),!(o=a.Eb.get(o)))return 2;if(p=Number(p>>>0),m=Number(m>>>0),y=Number(y>>>0),p+m>o.byteLength)return 3;try{let I=o.subarray(p,p+m);switch($){case 0:B().set(I,y>>>0);break;case 1:a.mc?a.mc(y,I):a.bc(y,I);break;default:return 4}return 0}catch{return 4}},830468:(o,p,m)=>{a.Ob(o,B().subarray(p>>>0,p+m>>>0))},830532:()=>a.nc(),830574:o=>{a.Nb(o)},830611:()=>{a.Vb()},830642:()=>{a.Wb()},830671:()=>{a.$b()},830696:o=>a.Ub(o),830729:o=>a.Yb(o),830761:(o,p,m)=>{a.Kb(Number(o),Number(p),Number(m),!0)},830824:(o,p,m)=>{a.Kb(Number(o),Number(p),Number(m))},830881:()=>typeof wasmOffsetConverter<"u",830938:o=>{a.jb("Abs",o,void 0)},830989:o=>{a.jb("Neg",o,void 0)},831040:o=>{a.jb("Floor",o,void 0)},831093:o=>{a.jb("Ceil",o,void 0)},831145:o=>{a.jb("Reciprocal",o,void 0)},831203:o=>{a.jb("Sqrt",o,void 0)},831255:o=>{a.jb("Exp",o,void 0)},831306:o=>{a.jb("Erf",o,void 0)},831357:o=>{a.jb("Sigmoid",o,void 0)},831412:(o,p,m)=>{a.jb("HardSigmoid",o,{alpha:p,beta:m})},831491:o=>{a.jb("Log",o,void 0)},831542:o=>{a.jb("Sin",o,void 0)},831593:o=>{a.jb("Cos",o,void 0)},831644:o=>{a.jb("Tan",o,void 0)},831695:o=>{a.jb("Asin",o,void 0)},831747:o=>{a.jb("Acos",o,void 0)},831799:o=>{a.jb("Atan",o,void 0)},831851:o=>{a.jb("Sinh",o,void 0)},831903:o=>{a.jb("Cosh",o,void 0)},831955:o=>{a.jb("Asinh",o,void 0)},832008:o=>{a.jb("Acosh",o,void 0)},832061:o=>{a.jb("Atanh",o,void 0)},832114:o=>{a.jb("Tanh",o,void 0)},832166:o=>{a.jb("Not",o,void 0)},832217:(o,p,m)=>{a.jb("Clip",o,{min:p,max:m})},832286:o=>{a.jb("Clip",o,void 0)},832338:(o,p)=>{a.jb("Elu",o,{alpha:p})},832396:o=>{a.jb("Gelu",o,void 0)},832448:o=>{a.jb("Relu",o,void 0)},832500:(o,p)=>{a.jb("LeakyRelu",o,{alpha:p})},832564:(o,p)=>{a.jb("ThresholdedRelu",o,{alpha:p})},832634:(o,p)=>{a.jb("Cast",o,{to:p})},832692:o=>{a.jb("Add",o,void 0)},832743:o=>{a.jb("Sub",o,void 0)},832794:o=>{a.jb("Mul",o,void 0)},832845:o=>{a.jb("Div",o,void 0)},832896:o=>{a.jb("Pow",o,void 0)},832947:o=>{a.jb("Equal",o,void 0)},833e3:o=>{a.jb("Greater",o,void 0)},833055:o=>{a.jb("GreaterOrEqual",o,void 0)},833117:o=>{a.jb("Less",o,void 0)},833169:o=>{a.jb("LessOrEqual",o,void 0)},833228:(o,p,m,y,$)=>{a.jb("ReduceMean",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:y?Array.from(A().subarray(Number(y)>>>0,Number($)>>>0)):[]})},833403:(o,p,m,y,$)=>{a.jb("ReduceMax",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:y?Array.from(A().subarray(Number(y)>>>0,Number($)>>>0)):[]})},833577:(o,p,m,y,$)=>{a.jb("ReduceMin",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:y?Array.from(A().subarray(Number(y)>>>0,Number($)>>>0)):[]})},833751:(o,p,m,y,$)=>{a.jb("ReduceProd",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:y?Array.from(A().subarray(Number(y)>>>0,Number($)>>>0)):[]})},833926:(o,p,m,y,$)=>{a.jb("ReduceSum",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:y?Array.from(A().subarray(Number(y)>>>0,Number($)>>>0)):[]})},834100:(o,p,m,y,$)=>{a.jb("ReduceL1",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:y?Array.from(A().subarray(Number(y)>>>0,Number($)>>>0)):[]})},834273:(o,p,m,y,$)=>{a.jb("ReduceL2",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:y?Array.from(A().subarray(Number(y)>>>0,Number($)>>>0)):[]})},834446:(o,p,m,y,$)=>{a.jb("ReduceLogSum",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:y?Array.from(A().subarray(Number(y)>>>0,Number($)>>>0)):[]})},834623:(o,p,m,y,$)=>{a.jb("ReduceSumSquare",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:y?Array.from(A().subarray(Number(y)>>>0,Number($)>>>0)):[]})},834803:(o,p,m,y,$)=>{a.jb("ReduceLogSumExp",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:y?Array.from(A().subarray(Number(y)>>>0,Number($)>>>0)):[]})},834983:o=>{a.jb("Where",o,void 0)},835036:(o,p,m)=>{a.jb("Transpose",o,{perm:p?Array.from(A().subarray(Number(p)>>>0,Number(m)>>>0)):[]})},835160:(o,p,m,y)=>{a.jb("DepthToSpace",o,{blocksize:p,mode:xe(m),format:y?"NHWC":"NCHW"})},835293:(o,p,m,y)=>{a.jb("DepthToSpace",o,{blocksize:p,mode:xe(m),format:y?"NHWC":"NCHW"})},835426:(o,p,m,y,$,I,M,D,W,H,se,le,me,Ie,Pt)=>{a.jb("ConvTranspose",o,{format:W?"NHWC":"NCHW",autoPad:p,dilations:[m],group:y,kernelShape:[$],pads:[I,M],strides:[D],wIsConst:()=>!!he()[H>>>0],outputPadding:se?Array.from(A().subarray(Number(se)>>>0,Number(le)>>>0)):[],outputShape:me?Array.from(A().subarray(Number(me)>>>0,Number(Ie)>>>0)):[],activation:xe(Pt)})},835859:(o,p,m,y,$,I,M,D,W,H,se,le,me,Ie)=>{a.jb("ConvTranspose",o,{format:D?"NHWC":"NCHW",autoPad:p,dilations:Array.from(A().subarray(Number(m)>>>0,2+(Number(m)>>>0)>>>0)),group:y,kernelShape:Array.from(A().subarray(Number($)>>>0,2+(Number($)>>>0)>>>0)),pads:Array.from(A().subarray(Number(I)>>>0,4+(Number(I)>>>0)>>>0)),strides:Array.from(A().subarray(Number(M)>>>0,2+(Number(M)>>>0)>>>0)),wIsConst:()=>!!he()[W>>>0],outputPadding:H?Array.from(A().subarray(Number(H)>>>0,Number(se)>>>0)):[],outputShape:le?Array.from(A().subarray(Number(le)>>>0,Number(me)>>>0)):[],activation:xe(Ie)})},836520:(o,p,m,y,$,I,M,D,W,H,se,le,me,Ie,Pt)=>{a.jb("ConvTranspose",o,{format:W?"NHWC":"NCHW",autoPad:p,dilations:[m],group:y,kernelShape:[$],pads:[I,M],strides:[D],wIsConst:()=>!!he()[H>>>0],outputPadding:se?Array.from(A().subarray(Number(se)>>>0,Number(le)>>>0)):[],outputShape:me?Array.from(A().subarray(Number(me)>>>0,Number(Ie)>>>0)):[],activation:xe(Pt)})},836953:(o,p,m,y,$,I,M,D,W,H,se,le,me,Ie)=>{a.jb("ConvTranspose",o,{format:D?"NHWC":"NCHW",autoPad:p,dilations:Array.from(A().subarray(Number(m)>>>0,2+(Number(m)>>>0)>>>0)),group:y,kernelShape:Array.from(A().subarray(Number($)>>>0,2+(Number($)>>>0)>>>0)),pads:Array.from(A().subarray(Number(I)>>>0,4+(Number(I)>>>0)>>>0)),strides:Array.from(A().subarray(Number(M)>>>0,2+(Number(M)>>>0)>>>0)),wIsConst:()=>!!he()[W>>>0],outputPadding:H?Array.from(A().subarray(Number(H)>>>0,Number(se)>>>0)):[],outputShape:le?Array.from(A().subarray(Number(le)>>>0,Number(me)>>>0)):[],activation:xe(Ie)})},837614:(o,p)=>{a.jb("GlobalAveragePool",o,{format:p?"NHWC":"NCHW"})},837705:(o,p,m,y,$,I,M,D,W,H,se,le,me,Ie)=>{a.jb("AveragePool",o,{format:Ie?"NHWC":"NCHW",auto_pad:p,ceil_mode:m,count_include_pad:y,storage_order:$,dilations:I?Array.from(A().subarray(Number(I)>>>0,Number(M)>>>0)):[],kernel_shape:D?Array.from(A().subarray(Number(D)>>>0,Number(W)>>>0)):[],pads:H?Array.from(A().subarray(Number(H)>>>0,Number(se)>>>0)):[],strides:le?Array.from(A().subarray(Number(le)>>>0,Number(me)>>>0)):[]})},838184:(o,p)=>{a.jb("GlobalAveragePool",o,{format:p?"NHWC":"NCHW"})},838275:(o,p,m,y,$,I,M,D,W,H,se,le,me,Ie)=>{a.jb("AveragePool",o,{format:Ie?"NHWC":"NCHW",auto_pad:p,ceil_mode:m,count_include_pad:y,storage_order:$,dilations:I?Array.from(A().subarray(Number(I)>>>0,Number(M)>>>0)):[],kernel_shape:D?Array.from(A().subarray(Number(D)>>>0,Number(W)>>>0)):[],pads:H?Array.from(A().subarray(Number(H)>>>0,Number(se)>>>0)):[],strides:le?Array.from(A().subarray(Number(le)>>>0,Number(me)>>>0)):[]})},838754:(o,p)=>{a.jb("GlobalMaxPool",o,{format:p?"NHWC":"NCHW"})},838841:(o,p,m,y,$,I,M,D,W,H,se,le,me,Ie)=>{a.jb("MaxPool",o,{format:Ie?"NHWC":"NCHW",auto_pad:p,ceil_mode:m,count_include_pad:y,storage_order:$,dilations:I?Array.from(A().subarray(Number(I)>>>0,Number(M)>>>0)):[],kernel_shape:D?Array.from(A().subarray(Number(D)>>>0,Number(W)>>>0)):[],pads:H?Array.from(A().subarray(Number(H)>>>0,Number(se)>>>0)):[],strides:le?Array.from(A().subarray(Number(le)>>>0,Number(me)>>>0)):[]})},839316:(o,p)=>{a.jb("GlobalMaxPool",o,{format:p?"NHWC":"NCHW"})},839403:(o,p,m,y,$,I,M,D,W,H,se,le,me,Ie)=>{a.jb("MaxPool",o,{format:Ie?"NHWC":"NCHW",auto_pad:p,ceil_mode:m,count_include_pad:y,storage_order:$,dilations:I?Array.from(A().subarray(Number(I)>>>0,Number(M)>>>0)):[],kernel_shape:D?Array.from(A().subarray(Number(D)>>>0,Number(W)>>>0)):[],pads:H?Array.from(A().subarray(Number(H)>>>0,Number(se)>>>0)):[],strides:le?Array.from(A().subarray(Number(le)>>>0,Number(me)>>>0)):[]})},839878:(o,p,m,y,$)=>{a.jb("Gemm",o,{alpha:p,beta:m,transA:y,transB:$})},839982:o=>{a.jb("MatMul",o,void 0)},840036:(o,p,m,y)=>{a.jb("ArgMax",o,{keepDims:!!p,selectLastIndex:!!m,axis:y})},840144:(o,p,m,y)=>{a.jb("ArgMin",o,{keepDims:!!p,selectLastIndex:!!m,axis:y})},840252:(o,p)=>{a.jb("Softmax",o,{axis:p})},840315:(o,p)=>{a.jb("Concat",o,{axis:p})},840375:(o,p,m,y,$)=>{a.jb("Split",o,{axis:p,numOutputs:m,splitSizes:y?Array.from(A().subarray(Number(y)>>>0,Number($)>>>0)):[]})},840531:o=>{a.jb("Expand",o,void 0)},840585:(o,p)=>{a.jb("Gather",o,{axis:Number(p)})},840656:(o,p)=>{a.jb("GatherElements",o,{axis:Number(p)})},840735:(o,p)=>{a.jb("GatherND",o,{batch_dims:Number(p)})},840814:(o,p,m,y,$,I,M,D,W,H,se)=>{a.jb("Resize",o,{antialias:p,axes:m?Array.from(A().subarray(Number(m)>>>0,Number(y)>>>0)):[],coordinateTransformMode:xe($),cubicCoeffA:I,excludeOutside:M,extrapolationValue:D,keepAspectRatioPolicy:xe(W),mode:xe(H),nearestMode:xe(se)})},841176:(o,p,m,y,$,I,M)=>{a.jb("Slice",o,{starts:p?Array.from(A().subarray(Number(p)>>>0,Number(m)>>>0)):[],ends:y?Array.from(A().subarray(Number(y)>>>0,Number($)>>>0)):[],axes:I?Array.from(A().subarray(Number(I)>>>0,Number(M)>>>0)):[]})},841440:o=>{a.jb("Tile",o,void 0)},841492:(o,p,m)=>{a.jb("InstanceNormalization",o,{epsilon:p,format:m?"NHWC":"NCHW"})},841606:(o,p,m)=>{a.jb("InstanceNormalization",o,{epsilon:p,format:m?"NHWC":"NCHW"})},841720:o=>{a.jb("Range",o,void 0)},841773:(o,p)=>{a.jb("Einsum",o,{equation:xe(p)})},841854:(o,p,m,y,$)=>{a.jb("Pad",o,{mode:p,value:m,pads:y?Array.from(A().subarray(Number(y)>>>0,Number($)>>>0)):[]})},841997:(o,p,m,y,$,I)=>{a.jb("BatchNormalization",o,{epsilon:p,momentum:m,spatial:!!$,trainingMode:!!y,format:I?"NHWC":"NCHW"})},842166:(o,p,m,y,$,I)=>{a.jb("BatchNormalization",o,{epsilon:p,momentum:m,spatial:!!$,trainingMode:!!y,format:I?"NHWC":"NCHW"})},842335:(o,p,m)=>{a.jb("CumSum",o,{exclusive:Number(p),reverse:Number(m)})},842432:(o,p,m)=>{a.jb("DequantizeLinear",o,{axis:p,blockSize:m})},842522:(o,p,m,y,$)=>{a.jb("GridSample",o,{align_corners:p,mode:xe(m),padding_mode:xe(y),format:$?"NHWC":"NCHW"})},842692:(o,p,m,y,$)=>{a.jb("GridSample",o,{align_corners:p,mode:xe(m),padding_mode:xe(y),format:$?"NHWC":"NCHW"})},842862:(o,p)=>{a.jb("ScatterND",o,{reduction:xe(p)})},842947:(o,p,m,y,$,I,M,D,W)=>{a.jb("Attention",o,{numHeads:p,isUnidirectional:m,maskFilterValue:y,scale:$,doRotary:I,qkvHiddenSizes:M?Array.from(A().subarray(Number(D)>>>0,Number(D)+M>>>0)):[],pastPresentShareBuffer:!!W})},843219:o=>{a.jb("BiasAdd",o,void 0)},843274:o=>{a.jb("BiasSplitGelu",o,void 0)},843335:o=>{a.jb("FastGelu",o,void 0)},843391:(o,p,m,y,$,I,M,D,W,H,se,le,me,Ie,Pt,Pm)=>{a.jb("Conv",o,{format:le?"NHWC":"NCHW",auto_pad:p,dilations:m?Array.from(A().subarray(Number(m)>>>0,Number(y)>>>0)):[],group:$,kernel_shape:I?Array.from(A().subarray(Number(I)>>>0,Number(M)>>>0)):[],pads:D?Array.from(A().subarray(Number(D)>>>0,Number(W)>>>0)):[],strides:H?Array.from(A().subarray(Number(H)>>>0,Number(se)>>>0)):[],w_is_const:()=>!!he()[Number(me)>>>0],activation:xe(Ie),activation_params:Pt?Array.from(qe().subarray(Number(Pt)>>>0,Number(Pm)>>>0)):[]})},843975:o=>{a.jb("Gelu",o,void 0)},844027:(o,p,m,y,$,I,M,D,W)=>{a.jb("GroupQueryAttention",o,{numHeads:p,kvNumHeads:m,scale:y,softcap:$,doRotary:I,rotaryInterleaved:M,smoothSoftmax:D,localWindowSize:W})},844244:(o,p,m,y)=>{a.jb("LayerNormalization",o,{axis:p,epsilon:m,simplified:!!y})},844355:(o,p,m,y)=>{a.jb("LayerNormalization",o,{axis:p,epsilon:m,simplified:!!y})},844466:(o,p,m,y,$,I)=>{a.jb("MatMulNBits",o,{k:p,n:m,accuracyLevel:y,bits:$,blockSize:I})},844593:(o,p,m,y,$,I)=>{a.jb("MultiHeadAttention",o,{numHeads:p,isUnidirectional:m,maskFilterValue:y,scale:$,doRotary:I})},844752:(o,p)=>{a.jb("QuickGelu",o,{alpha:p})},844816:(o,p,m,y,$)=>{a.jb("RotaryEmbedding",o,{interleaved:!!p,numHeads:m,rotaryEmbeddingDim:y,scale:$})},844955:(o,p,m)=>{a.jb("SkipLayerNormalization",o,{epsilon:p,simplified:!!m})},845057:(o,p,m)=>{a.jb("SkipLayerNormalization",o,{epsilon:p,simplified:!!m})},845159:(o,p,m,y)=>{a.jb("GatherBlockQuantized",o,{gatherAxis:p,quantizeAxis:m,blockSize:y})},845280:o=>{a.Zb(o)},845314:(o,p)=>a.ac(Number(o),Number(p),a.Fb.dc,a.Fb.errors)};function wh(o,p,m){return cs(async()=>{await a.Xb(Number(o),Number(p),Number(m))})}function $h(){return typeof wasmOffsetConverter<"u"}class la{name="ExitStatus";constructor(p){this.message=`Program terminated with exit(${p})`,this.status=p}}var Mn=o=>{o.terminate(),o.onmessage=()=>{}},da=[],Rn=o=>{ft.length==0&&(Wn(),Un(ft[0]));var p=ft.pop();if(!p)return 6;Zt.push(p),vt[o.Ab]=p,p.Ab=o.Ab;var m={Bb:"run",fc:o.ec,Hb:o.Hb,Ab:o.Ab};return p.postMessage(m,o.Mb),0},ct=0,_e=(o,p,...m)=>{for(var y=2*m.length,$=Ea(),I=Ia(8*y),M=I>>>3,D=0;D<m.length;D++){var W=m[D];typeof W=="bigint"?(J[M+2*D]=1n,J[M+2*D+1]=W):(J[M+2*D]=0n,be()[M+2*D+1>>>0]=W)}return o=Rs(o,0,y,I,p),zr($),o};function pa(o){if(u)return _e(0,1,o);if(z=o,!(0<ct)){for(var p of Zt)Mn(p);for(p of ft)Mn(p);ft=[],Zt=[],vt={},re=!0}_(0,new la(o))}function Bn(o){if(u)return _e(1,0,o);ca(o)}var ca=o=>{if(z=o,u)throw Bn(o),"unwind";pa(o)},ft=[],Zt=[],Nn=[],vt={},Dn=o=>{var p=o.Ab;delete vt[p],ft.push(o),Zt.splice(Zt.indexOf(o),1),o.Ab=0,Bs(p)};function Pn(){Nn.forEach(o=>o())}var Un=o=>new Promise(p=>{o.onmessage=$=>{var I=($=$.data).Bb;if($.Gb&&$.Gb!=Ir()){var M=vt[$.Gb];M?M.postMessage($,$.Mb):S(`Internal error! Worker sent a message "${I}" to target pthread ${$.Gb}, but that thread no longer exists!`)}else I==="checkMailbox"?br():I==="spawnThread"?Rn($):I==="cleanupThread"?Dn(vt[$.hc]):I==="loaded"?(o.loaded=!0,p(o)):I==="alert"?alert(`Thread ${$.ic}: ${$.text}`):$.target==="setimmediate"?o.postMessage($):I==="callHandler"?a[$.Qb](...$.args):I&&S(`worker sent an unknown command ${I}`)},o.onerror=$=>{throw S(`worker sent an error! ${$.filename}:${$.lineno}: ${$.message}`),$};var m,y=[];for(m of[])a.propertyIsEnumerable(m)&&y.push(m);o.postMessage({Bb:"load",Rb:y,kc:k,lc:T})});function Wn(){var o=new Worker((()=>{let p=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new p("ort.webgpu.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});ft.push(o)}var vh=o=>{Ce();var p=ie()[o+52>>>2>>>0];o=ie()[o+56>>>2>>>0],Ps(p,p-o),zr(p)},xh=(o,p)=>{ct=0,o=Us(o,p),0<ct?z=o:Ta(o)};class kh{constructor(p){this.Ib=p-24}}function Sh(o,p,m){var y=new kh(o>>>=0);throw p>>>=0,m>>>=0,ie()[y.Ib+16>>>2>>>0]=0,ie()[y.Ib+4>>>2>>>0]=p,ie()[y.Ib+8>>>2>>>0]=m,o}function Ln(o,p,m,y){return u?_e(2,1,o,p,m,y):qn(o,p,m,y)}function qn(o,p,m,y){if(o>>>=0,m>>>=0,y>>>=0,l===void 0)return 6;var $=[];return u&&$.length===0?Ln(o,p>>>=0,m,y):(o={ec:m,Ab:o,Hb:y,Mb:$},u?(o.Bb="spawnThread",postMessage(o,$),0):Rn(o))}var Fn=typeof TextDecoder<"u"?new TextDecoder:void 0,jn=(o,p=0,m=NaN)=>{var y=(p>>>=0)+m;for(m=p;o[m]&&!(m>=y);)++m;if(16<m-p&&o.buffer&&Fn)return Fn.decode(o.buffer instanceof ArrayBuffer?o.subarray(p,m):o.slice(p,m));for(y="";p<m;){var $=o[p++];if(128&$){var I=63&o[p++];if((224&$)==192)y+=String.fromCharCode((31&$)<<6|I);else{var M=63&o[p++];65536>($=(240&$)==224?(15&$)<<12|I<<6|M:(7&$)<<18|I<<12|M<<6|63&o[p++])?y+=String.fromCharCode($):($-=65536,y+=String.fromCharCode(55296|$>>10,56320|1023&$))}}else y+=String.fromCharCode($)}return y},xe=(o,p)=>(o>>>=0)?jn(B(),o,p):"";function Vn(o,p,m){return u?_e(3,1,o,p,m):0}function Gn(o,p){if(u)return _e(4,1,o,p)}var Hn=o=>{for(var p=0,m=0;m<o.length;++m){var y=o.charCodeAt(m);127>=y?p++:2047>=y?p+=2:55296<=y&&57343>=y?(p+=4,++m):p+=3}return p},Dt=(o,p,m)=>{var y=B();if(p>>>=0,0<m){var $=p;m=p+m-1;for(var I=0;I<o.length;++I){var M=o.charCodeAt(I);if(55296<=M&&57343>=M&&(M=65536+((1023&M)<<10)|1023&o.charCodeAt(++I)),127>=M){if(p>=m)break;y[p++>>>0]=M}else{if(2047>=M){if(p+1>=m)break;y[p++>>>0]=192|M>>6}else{if(65535>=M){if(p+2>=m)break;y[p++>>>0]=224|M>>12}else{if(p+3>=m)break;y[p++>>>0]=240|M>>18,y[p++>>>0]=128|M>>12&63}y[p++>>>0]=128|M>>6&63}y[p++>>>0]=128|63&M}}y[p>>>0]=0,o=p-$}else o=0;return o};function Kn(o,p){if(u)return _e(5,1,o,p)}function Zn(o,p,m){if(u)return _e(6,1,o,p,m)}function Qn(o,p,m){return u?_e(7,1,o,p,m):0}function Xn(o,p){if(u)return _e(8,1,o,p)}function Yn(o,p,m){if(u)return _e(9,1,o,p,m)}function Jn(o,p,m,y){if(u)return _e(10,1,o,p,m,y)}function es(o,p,m,y){if(u)return _e(11,1,o,p,m,y)}function ts(o,p,m,y){if(u)return _e(12,1,o,p,m,y)}function rs(o){if(u)return _e(13,1,o)}function as(o,p){if(u)return _e(14,1,o,p)}function is(o,p,m){if(u)return _e(15,1,o,p,m)}var ns,ht,Th=()=>pt(""),Ye=o=>{for(var p="";B()[o>>>0];)p+=ns[B()[o++>>>0]];return p},fa={},ha={};function st(o,p,m={}){return(function(y,$,I={}){var M=$.name;if(!y)throw new ht(`type "${M}" must have a positive integer typeid pointer`);if(ha.hasOwnProperty(y)){if(I.Sb)return;throw new ht(`Cannot register type '${M}' twice`)}ha[y]=$,fa.hasOwnProperty(y)&&($=fa[y],delete fa[y],$.forEach(D=>D()))})(o,p,m)}var ss=(o,p,m)=>{switch(p){case 1:return m?y=>he()[y>>>0]:y=>B()[y>>>0];case 2:return m?y=>L()[y>>>1>>>0]:y=>te()[y>>>1>>>0];case 4:return m?y=>A()[y>>>2>>>0]:y=>ie()[y>>>2>>>0];case 8:return m?y=>J[y>>>3]:y=>oe[y>>>3];default:throw new TypeError(`invalid integer width (${p}): ${o}`)}};function Ih(o,p,m){m>>>=0,st(o>>>=0,{name:p=Ye(p>>>0),fromWireType:y=>y,toWireType:function(y,$){if(typeof $!="bigint"&&typeof $!="number")throw $=$===null?"null":(y=typeof $)=="object"||y==="array"||y==="function"?$.toString():""+$,new TypeError(`Cannot convert "${$}" to ${this.name}`);return typeof $=="number"&&($=BigInt($)),$},Cb:mt,readValueFromPointer:ss(p,m,p.indexOf("u")==-1),Db:null})}var mt=8;function Eh(o,p,m,y){st(o>>>=0,{name:p=Ye(p>>>0),fromWireType:function($){return!!$},toWireType:function($,I){return I?m:y},Cb:mt,readValueFromPointer:function($){return this.fromWireType(B()[$>>>0])},Db:null})}var ma=[],ot=[];function ga(o){9<(o>>>=0)&&--ot[o+1]==0&&(ot[o]=void 0,ma.push(o))}var Oe=o=>{if(!o)throw new ht("Cannot use deleted val. handle = "+o);return ot[o]},De=o=>{switch(o){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let p=ma.pop()||ot.length;return ot[p]=o,ot[p+1]=1,p}};function _a(o){return this.fromWireType(ie()[o>>>2>>>0])}var zh={name:"emscripten::val",fromWireType:o=>{var p=Oe(o);return ga(o),p},toWireType:(o,p)=>De(p),Cb:mt,readValueFromPointer:_a,Db:null};function Ch(o){return st(o>>>0,zh)}var Ah=(o,p)=>{switch(p){case 4:return function(m){return this.fromWireType(qe()[m>>>2>>>0])};case 8:return function(m){return this.fromWireType(be()[m>>>3>>>0])};default:throw new TypeError(`invalid float width (${p}): ${o}`)}};function Oh(o,p,m){m>>>=0,st(o>>>=0,{name:p=Ye(p>>>0),fromWireType:y=>y,toWireType:(y,$)=>$,Cb:mt,readValueFromPointer:Ah(p,m),Db:null})}function Mh(o,p,m,y,$){if(o>>>=0,m>>>=0,p=Ye(p>>>0),$===-1&&($=4294967295),$=D=>D,y===0){var I=32-8*m;$=D=>D<<I>>>I}var M=p.includes("unsigned")?function(D,W){return W>>>0}:function(D,W){return W};st(o,{name:p,fromWireType:$,toWireType:M,Cb:mt,readValueFromPointer:ss(p,m,y!==0),Db:null})}function Rh(o,p,m){function y(I){var M=ie()[I>>>2>>>0];return I=ie()[I+4>>>2>>>0],new $(he().buffer,I,M)}var $=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][p];st(o>>>=0,{name:m=Ye(m>>>0),fromWireType:y,Cb:mt,readValueFromPointer:y},{Sb:!0})}function Bh(o,p){st(o>>>=0,{name:p=Ye(p>>>0),fromWireType:function(m){for(var y,$=ie()[m>>>2>>>0],I=m+4,M=I,D=0;D<=$;++D){var W=I+D;D!=$&&B()[W>>>0]!=0||(M=xe(M,W-M),y===void 0?y=M:(y+="\0",y+=M),M=W+1)}return et(m),y},toWireType:function(m,y){y instanceof ArrayBuffer&&(y=new Uint8Array(y));var $=typeof y=="string";if(!($||y instanceof Uint8Array||y instanceof Uint8ClampedArray||y instanceof Int8Array))throw new ht("Cannot pass non-string to std::string");var I=$?Hn(y):y.length,M=Er(4+I+1),D=M+4;if(ie()[M>>>2>>>0]=I,$)Dt(y,D,I+1);else if($)for($=0;$<I;++$){var W=y.charCodeAt($);if(255<W)throw et(M),new ht("String has UTF-16 code units that do not fit in 8 bits");B()[D+$>>>0]=W}else for($=0;$<I;++$)B()[D+$>>>0]=y[$];return m!==null&&m.push(et,M),M},Cb:mt,readValueFromPointer:_a,Db(m){et(m)}})}var os=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Nh=(o,p)=>{for(var m=o>>1,y=m+p/2;!(m>=y)&&te()[m>>>0];)++m;if(32<(m<<=1)-o&&os)return os.decode(B().slice(o,m));for(m="",y=0;!(y>=p/2);++y){var $=L()[o+2*y>>>1>>>0];if($==0)break;m+=String.fromCharCode($)}return m},Dh=(o,p,m)=>{if(m??=2147483647,2>m)return 0;var y=p;m=(m-=2)<2*o.length?m/2:o.length;for(var $=0;$<m;++$){var I=o.charCodeAt($);L()[p>>>1>>>0]=I,p+=2}return L()[p>>>1>>>0]=0,p-y},Ph=o=>2*o.length,Uh=(o,p)=>{for(var m=0,y="";!(m>=p/4);){var $=A()[o+4*m>>>2>>>0];if($==0)break;++m,65536<=$?($-=65536,y+=String.fromCharCode(55296|$>>10,56320|1023&$)):y+=String.fromCharCode($)}return y},Wh=(o,p,m)=>{if(p>>>=0,m??=2147483647,4>m)return 0;var y=p;m=y+m-4;for(var $=0;$<o.length;++$){var I=o.charCodeAt($);if(55296<=I&&57343>=I&&(I=65536+((1023&I)<<10)|1023&o.charCodeAt(++$)),A()[p>>>2>>>0]=I,(p+=4)+4>m)break}return A()[p>>>2>>>0]=0,p-y},Lh=o=>{for(var p=0,m=0;m<o.length;++m){var y=o.charCodeAt(m);55296<=y&&57343>=y&&++m,p+=4}return p};function qh(o,p,m){if(o>>>=0,p>>>=0,m=Ye(m>>>=0),p===2)var y=Nh,$=Dh,I=Ph,M=D=>te()[D>>>1>>>0];else p===4&&(y=Uh,$=Wh,I=Lh,M=D=>ie()[D>>>2>>>0]);st(o,{name:m,fromWireType:D=>{for(var W,H=ie()[D>>>2>>>0],se=D+4,le=0;le<=H;++le){var me=D+4+le*p;le!=H&&M(me)!=0||(se=y(se,me-se),W===void 0?W=se:(W+="\0",W+=se),se=me+p)}return et(D),W},toWireType:(D,W)=>{if(typeof W!="string")throw new ht(`Cannot pass non-string to C++ string type ${m}`);var H=I(W),se=Er(4+H+p);return ie()[se>>>2>>>0]=H/p,$(W,se+4,H+p),D!==null&&D.push(et,se),se},Cb:mt,readValueFromPointer:_a,Db(D){et(D)}})}function Fh(o,p){st(o>>>=0,{Tb:!0,name:p=Ye(p>>>0),Cb:0,fromWireType:()=>{},toWireType:()=>{}})}function jh(o){Sa(o>>>0,!s,1,!n,131072,!1),Pn()}var ya=o=>{if(!re)try{if(o(),!(0<ct))try{u?Ta(z):ca(z)}catch(p){p instanceof la||p=="unwind"||_(0,p)}}catch(p){p instanceof la||p=="unwind"||_(0,p)}};function ba(o){o>>>=0,typeof Atomics.jc=="function"&&(Atomics.jc(A(),o>>>2,o).value.then(br),o+=128,Atomics.store(A(),o>>>2,1))}var br=()=>{var o=Ir();o&&(ba(o),ya(Ds))};function Vh(o,p){(o>>>=0)==p>>>0?setTimeout(br):u?postMessage({Gb:o,Bb:"checkMailbox"}):(o=vt[o])&&o.postMessage({Bb:"checkMailbox"})}var wa=[];function Gh(o,p,m,y,$){for(p>>>=0,y/=2,wa.length=y,m=$>>>0>>>3,$=0;$<y;$++)wa[$]=J[m+2*$]?J[m+2*$+1]:be()[m+2*$+1>>>0];return(p?ua[p]:Dm[o])(...wa)}var Hh=()=>{ct=0};function Kh(o){o>>>=0,u?postMessage({Bb:"cleanupThread",hc:o}):Dn(vt[o])}function Zh(o){}var wr=(o,p)=>{var m=ha[o];if(m===void 0)throw o=As(o),m=Ye(o),et(o),new ht(`${p} has unknown type ${m}`);return m},us=(o,p,m)=>{var y=[];return o=o.toWireType(y,m),y.length&&(ie()[p>>>2>>>0]=De(y)),o};function Qh(o,p,m){return p>>>=0,m>>>=0,o=Oe(o>>>0),p=wr(p,"emval::as"),us(p,m,o)}function Xh(o,p){return p>>>=0,o=Oe(o>>>0),(p=wr(p,"emval::as")).toWireType(null,o)}var $r=o=>{try{o()}catch(p){pt(p)}},gt=0,Je=null,ls=0,vr=[],ds={},ps={},Yh=0,$a=null,Jh=[];function cs(o){return(function(p){if(!re){if(gt===0){var m=!1,y=!1;p(($=0)=>{if(!re&&(ls=$,m=!0,y)){gt=2,$r(()=>qs(Je)),typeof MainLoop<"u"&&MainLoop.Pb&&MainLoop.resume(),$=!1;try{var I=(function(){var W=A()[Je+8>>>2>>>0];return W=Q[ps[W]],--ct,W()})()}catch(W){I=W,$=!0}var M=!1;if(!Je){var D=$a;D&&($a=null,($?D.reject:D.resolve)(I),M=!0)}if($&&!M)throw I}}),y=!0,m||(gt=1,Je=(function(){var $=Er(65548),I=$+12;ie()[$>>>2>>>0]=I,ie()[$+4>>>2>>>0]=I+65536,I=vr[0];var M=ds[I];return M===void 0&&(M=Yh++,ds[I]=M,ps[M]=I),I=M,A()[$+8>>>2>>>0]=I,$})(),typeof MainLoop<"u"&&MainLoop.Pb&&MainLoop.pause(),$r(()=>Ws(Je)))}else gt===2?(gt=0,$r(Fs),et(Je),Je=null,Jh.forEach(ya)):pt(`invalid state: ${gt}`);return ls}})(p=>{o().then(p)})}function em(o){return o>>>=0,cs(async()=>{var p=await Oe(o);return De(p)})}var xr=[];function tm(o,p,m,y){return m>>>=0,y>>>=0,(o=xr[o>>>0])(null,p=Oe(p>>>0),m,y)}var rm={},kr=o=>{var p=rm[o];return p===void 0?Ye(o):p};function am(o,p,m,y,$){return m>>>=0,y>>>=0,$>>>=0,(o=xr[o>>>0])(p=Oe(p>>>0),p[m=kr(m)],y,$)}var fs=()=>typeof globalThis=="object"?globalThis:Function("return this")();function im(o){return(o>>>=0)==0?De(fs()):(o=kr(o),De(fs()[o]))}var nm=o=>{var p=xr.length;return xr.push(o),p},sm=(o,p)=>{for(var m=Array(o),y=0;y<o;++y)m[y]=wr(ie()[p+4*y>>>2>>>0],"parameter "+y);return m},hs=(o,p)=>Object.defineProperty(p,"name",{value:o});function om(o,p,m){var y=(p=sm(o,p>>>0)).shift();o--;var $=`return function (obj, func, destructorsRef, args) {
`,I=0,M=[];m===0&&M.push("obj");for(var D=["retType"],W=[y],H=0;H<o;++H)M.push("arg"+H),D.push("argType"+H),W.push(p[H]),$+=`  var arg${H} = argType${H}.readValueFromPointer(args${I?"+"+I:""});
`,I+=p[H].Cb;return $+=`  var rv = ${m===1?"new func":"func.call"}(${M.join(", ")});
`,y.Tb||(D.push("emval_returnValue"),W.push(us),$+=`  return emval_returnValue(retType, destructorsRef, rv);
`),D.push($+`};
`),o=(function(se){var le=Function;if(!(le instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof le} which is not a function`);var me=hs(le.name||"unknownFunctionName",function(){});return me.prototype=le.prototype,me=new me,(se=le.apply(me,se))instanceof Object?se:me})(D)(...W),m=`methodCaller<(${p.map(se=>se.name).join(", ")}) => ${y.name}>`,nm(hs(m,o))}function um(o){return o=kr(o>>>0),De(a[o])}function lm(o,p){return p>>>=0,o=Oe(o>>>0),p=Oe(p),De(o[p])}function dm(o){9<(o>>>=0)&&(ot[o+1]+=1)}function pm(){return De([])}function cm(o){o=Oe(o>>>0);for(var p=Array(o.length),m=0;m<o.length;m++)p[m]=o[m];return De(p)}function fm(o){return De(kr(o>>>0))}function hm(){return De({})}function mm(o){for(var p=Oe(o>>>=0);p.length;){var m=p.pop();p.pop()(m)}ga(o)}function gm(o,p,m){p>>>=0,m>>>=0,o=Oe(o>>>0),p=Oe(p),m=Oe(m),o[p]=m}function _m(o,p){return p>>>=0,o=(o=wr(o>>>0,"_emval_take_value")).readValueFromPointer(p),De(o)}function ym(o,p){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),p>>>=0,o=new Date(1e3*o),A()[p>>>2>>>0]=o.getUTCSeconds(),A()[p+4>>>2>>>0]=o.getUTCMinutes(),A()[p+8>>>2>>>0]=o.getUTCHours(),A()[p+12>>>2>>>0]=o.getUTCDate(),A()[p+16>>>2>>>0]=o.getUTCMonth(),A()[p+20>>>2>>>0]=o.getUTCFullYear()-1900,A()[p+24>>>2>>>0]=o.getUTCDay(),o=(o.getTime()-Date.UTC(o.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,A()[p+28>>>2>>>0]=o}var ms=o=>o%4==0&&(o%100!=0||o%400==0),gs=[0,31,60,91,121,152,182,213,244,274,305,335],_s=[0,31,59,90,120,151,181,212,243,273,304,334];function bm(o,p){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),p>>>=0,o=new Date(1e3*o),A()[p>>>2>>>0]=o.getSeconds(),A()[p+4>>>2>>>0]=o.getMinutes(),A()[p+8>>>2>>>0]=o.getHours(),A()[p+12>>>2>>>0]=o.getDate(),A()[p+16>>>2>>>0]=o.getMonth(),A()[p+20>>>2>>>0]=o.getFullYear()-1900,A()[p+24>>>2>>>0]=o.getDay();var m=(ms(o.getFullYear())?gs:_s)[o.getMonth()]+o.getDate()-1|0;A()[p+28>>>2>>>0]=m,A()[p+36>>>2>>>0]=-60*o.getTimezoneOffset(),m=new Date(o.getFullYear(),6,1).getTimezoneOffset();var y=new Date(o.getFullYear(),0,1).getTimezoneOffset();o=0|(m!=y&&o.getTimezoneOffset()==Math.min(y,m)),A()[p+32>>>2>>>0]=o}function wm(o){o>>>=0;var p=new Date(A()[o+20>>>2>>>0]+1900,A()[o+16>>>2>>>0],A()[o+12>>>2>>>0],A()[o+8>>>2>>>0],A()[o+4>>>2>>>0],A()[o>>>2>>>0],0),m=A()[o+32>>>2>>>0],y=p.getTimezoneOffset(),$=new Date(p.getFullYear(),6,1).getTimezoneOffset(),I=new Date(p.getFullYear(),0,1).getTimezoneOffset(),M=Math.min(I,$);return 0>m?A()[o+32>>>2>>>0]=+($!=I&&M==y):0<m!=(M==y)&&($=Math.max(I,$),p.setTime(p.getTime()+6e4*((0<m?M:$)-y))),A()[o+24>>>2>>>0]=p.getDay(),m=(ms(p.getFullYear())?gs:_s)[p.getMonth()]+p.getDate()-1|0,A()[o+28>>>2>>>0]=m,A()[o>>>2>>>0]=p.getSeconds(),A()[o+4>>>2>>>0]=p.getMinutes(),A()[o+8>>>2>>>0]=p.getHours(),A()[o+12>>>2>>>0]=p.getDate(),A()[o+16>>>2>>>0]=p.getMonth(),A()[o+20>>>2>>>0]=p.getYear(),o=p.getTime(),BigInt(isNaN(o)?-1:o/1e3)}function ys(o,p,m,y,$,I,M){return u?_e(16,1,o,p,m,y,$,I,M):-52}function bs(o,p,m,y,$,I){if(u)return _e(17,1,o,p,m,y,$,I)}var Qt={},$m=()=>performance.timeOrigin+performance.now();function ws(o,p){if(u)return _e(18,1,o,p);if(Qt[o]&&(clearTimeout(Qt[o].id),delete Qt[o]),!p)return 0;var m=setTimeout(()=>{delete Qt[o],ya(()=>Ns(o,performance.timeOrigin+performance.now()))},p);return Qt[o]={id:m,qc:p},0}function vm(o,p,m,y){o>>>=0,p>>>=0,m>>>=0,y>>>=0;var $=new Date().getFullYear(),I=new Date($,0,1).getTimezoneOffset();$=new Date($,6,1).getTimezoneOffset();var M=Math.max(I,$);ie()[o>>>2>>>0]=60*M,A()[p>>>2>>>0]=+(I!=$),o=(p=D=>{var W=Math.abs(D);return`UTC${0<=D?"-":"+"}${String(Math.floor(W/60)).padStart(2,"0")}${String(W%60).padStart(2,"0")}`})(I),p=p($),$<I?(Dt(o,m,17),Dt(p,y,17)):(Dt(o,y,17),Dt(p,m,17))}var xm=()=>Date.now();function km(o,p,m){return 0<=o&&3>=o?(o===0?o=Date.now():o=performance.timeOrigin+performance.now(),J[m>>>0>>>3]=BigInt(Math.round(1e6*o)),0):28}var va=[],$s=(o,p)=>{va.length=0;for(var m;m=B()[o++>>>0];){var y=m!=105;p+=(y&=m!=112)&&p%8?4:0,va.push(m==112?ie()[p>>>2>>>0]:m==106?J[p>>>3]:m==105?A()[p>>>2>>>0]:be()[p>>>3>>>0]),p+=y?8:4}return va};function Sm(o,p,m){return o>>>=0,p=$s(p>>>0,m>>>0),ua[o](...p)}function Tm(o,p,m){return o>>>=0,p=$s(p>>>0,m>>>0),ua[o](...p)}var Im=()=>{};function Em(o,p){return S(xe(o>>>0,p>>>0))}var zm=()=>{throw ct+=1,"unwind"};function Cm(){return 4294901760}var Am=()=>navigator.hardwareConcurrency;function Om(){return pt("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function Mm(o){o>>>=0;var p=B().length;if(o<=p||4294901760<o)return!1;for(var m=1;4>=m;m*=2){var y=p*(1+.2/m);y=Math.min(y,o+100663296);e:{y=(Math.min(4294901760,65536*Math.ceil(Math.max(o,y)/65536))-k.buffer.byteLength+65535)/65536|0;try{k.grow(y),Ce();var $=1;break e}catch{}$=void 0}if($)return!0}return!1}var Sr=()=>(pt("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),Xt={},vs=o=>{o.forEach(p=>{Sr()})};function Rm(){var o=Error().stack.toString().split(`
`);return o[0]=="Error"&&o.shift(),vs(o),Xt.Lb=Sr(),Xt.cc=o,Xt.Lb}function Bm(o,p,m){if(o>>>=0,p>>>=0,Xt.Lb==o)var y=Xt.cc;else(y=Error().stack.toString().split(`
`))[0]=="Error"&&y.shift(),vs(y);for(var $=3;y[$]&&Sr()!=o;)++$;for(o=0;o<m&&y[o+$];++o)A()[p+4*o>>>2>>>0]=Sr();return o}var xa,ka={},xs=()=>{if(!xa){var o,p={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:"./this.program"};for(o in ka)ka[o]===void 0?delete p[o]:p[o]=ka[o];var m=[];for(o in p)m.push(`${o}=${p[o]}`);xa=m}return xa};function ks(o,p){if(u)return _e(19,1,o,p);o>>>=0,p>>>=0;var m=0;return xs().forEach((y,$)=>{var I=p+m;for($=ie()[o+4*$>>>2>>>0]=I,I=0;I<y.length;++I)he()[$++>>>0]=y.charCodeAt(I);he()[$>>>0]=0,m+=y.length+1}),0}function Ss(o,p){if(u)return _e(20,1,o,p);o>>>=0,p>>>=0;var m=xs();ie()[o>>>2>>>0]=m.length;var y=0;return m.forEach($=>y+=$.length+1),ie()[p>>>2>>>0]=y,0}function Ts(o){return u?_e(21,1,o):52}function Is(o,p,m,y){return u?_e(22,1,o,p,m,y):52}function Es(o,p,m,y){return u?_e(23,1,o,p,m,y):70}var Nm=[null,[],[]];function zs(o,p,m,y){if(u)return _e(24,1,o,p,m,y);p>>>=0,m>>>=0,y>>>=0;for(var $=0,I=0;I<m;I++){var M=ie()[p>>>2>>>0],D=ie()[p+4>>>2>>>0];p+=8;for(var W=0;W<D;W++){var H=B()[M+W>>>0],se=Nm[o];H===0||H===10?((o===1?w:S)(jn(se)),se.length=0):se.push(H)}$+=D}return ie()[y>>>2>>>0]=$,0}u||(function(){for(var o=a.numThreads-1;o--;)Wn();da.unshift(()=>{Ht++,(function(p){u?p():Promise.all(ft.map(Un)).then(p)})(()=>An())})})();for(var Cs=Array(256),Tr=0;256>Tr;++Tr)Cs[Tr]=String.fromCharCode(Tr);ns=Cs,ht=a.BindingError=class extends Error{constructor(o){super(o),this.name="BindingError"}},a.InternalError=class extends Error{constructor(o){super(o),this.name="InternalError"}},ot.push(0,1,void 0,1,null,1,!0,1,!1,1),a.count_emval_handles=()=>ot.length/2-5-ma.length;var Q,Dm=[pa,Bn,Ln,Vn,Gn,Kn,Zn,Qn,Xn,Yn,Jn,es,ts,rs,as,is,ys,bs,ws,ks,Ss,Ts,Is,Es,zs];(async function(){function o(y,$){return Q=y.exports,Q=(function(){var I=Q,M={};for(let[D,W]of Object.entries(I))M[D]=typeof W=="function"?(...H)=>{vr.push(D);try{return W(...H)}finally{re||(vr.pop(),Je&&gt===1&&vr.length===0&&(gt=0,ct+=1,$r(Ls),typeof Fibers<"u"&&Fibers.rc()))}}:W;return M})(),Q=(function(){var I=Q,M=W=>H=>W(H)>>>0,D=W=>()=>W()>>>0;return(I=Object.assign({},I)).Da=M(I.Da),I.fb=D(I.fb),I.hb=M(I.hb),I.tb=M(I.tb),I.ub=D(I.ub),I.__cxa_get_exception_ptr=M(I.__cxa_get_exception_ptr),I})(),Nn.push(Q.ib),T=$,An(),Q}Ht++;var p=On();if(a.instantiateWasm)return new Promise(y=>{a.instantiateWasm(p,($,I)=>{o($,I),y($.exports)})});if(u)return new Promise(y=>{ve=$=>{var I=new WebAssembly.Instance($,On());y(o(I,$))}});oa??=a.locateFile?a.locateFile?a.locateFile("ort-wasm-simd-threaded.jsep.wasm",b):b+"ort-wasm-simd-threaded.jsep.wasm":new URL(""+new URL("ort-wasm-simd-threaded.jsep-B0T3yYHD.wasm",import.meta.url).href,import.meta.url).href;try{var m=await(async function(y){var $=oa;if(!Y&&typeof WebAssembly.instantiateStreaming=="function"&&!X($))try{var I=fetch($,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(I,y)}catch(M){S(`wasm streaming compile failed: ${M}`),S("falling back to ArrayBuffer instantiation")}return(async function(M,D){try{var W=await(async function(H){if(!Y)try{var se=await f(H);return new Uint8Array(se)}catch{}if(H==oa&&Y)H=new Uint8Array(Y);else{if(!h)throw"both async and sync fetching of the wasm failed";H=h(H)}return H})(M);return await WebAssembly.instantiate(W,D)}catch(H){S(`failed to asynchronously prepare wasm: ${H}`),pt(H)}})($,y)})(p);return o(m.instance,m.module)}catch(y){return r(y),Promise.reject(y)}})();var As=o=>(As=Q.Da)(o),Os=()=>(Os=Q.Ea)();a._OrtInit=(o,p)=>(a._OrtInit=Q.Fa)(o,p),a._OrtGetLastError=(o,p)=>(a._OrtGetLastError=Q.Ga)(o,p),a._OrtCreateSessionOptions=(o,p,m,y,$,I,M,D,W,H)=>(a._OrtCreateSessionOptions=Q.Ha)(o,p,m,y,$,I,M,D,W,H),a._OrtAppendExecutionProvider=(o,p,m,y,$)=>(a._OrtAppendExecutionProvider=Q.Ia)(o,p,m,y,$),a._OrtAddFreeDimensionOverride=(o,p,m)=>(a._OrtAddFreeDimensionOverride=Q.Ja)(o,p,m),a._OrtAddSessionConfigEntry=(o,p,m)=>(a._OrtAddSessionConfigEntry=Q.Ka)(o,p,m),a._OrtReleaseSessionOptions=o=>(a._OrtReleaseSessionOptions=Q.La)(o),a._OrtCreateSession=(o,p,m)=>(a._OrtCreateSession=Q.Ma)(o,p,m),a._OrtReleaseSession=o=>(a._OrtReleaseSession=Q.Na)(o),a._OrtGetInputOutputCount=(o,p,m)=>(a._OrtGetInputOutputCount=Q.Oa)(o,p,m),a._OrtGetInputOutputMetadata=(o,p,m,y)=>(a._OrtGetInputOutputMetadata=Q.Pa)(o,p,m,y),a._OrtFree=o=>(a._OrtFree=Q.Qa)(o),a._OrtCreateTensor=(o,p,m,y,$,I)=>(a._OrtCreateTensor=Q.Ra)(o,p,m,y,$,I),a._OrtGetTensorData=(o,p,m,y,$)=>(a._OrtGetTensorData=Q.Sa)(o,p,m,y,$),a._OrtReleaseTensor=o=>(a._OrtReleaseTensor=Q.Ta)(o),a._OrtCreateRunOptions=(o,p,m,y)=>(a._OrtCreateRunOptions=Q.Ua)(o,p,m,y),a._OrtAddRunConfigEntry=(o,p,m)=>(a._OrtAddRunConfigEntry=Q.Va)(o,p,m),a._OrtReleaseRunOptions=o=>(a._OrtReleaseRunOptions=Q.Wa)(o),a._OrtCreateBinding=o=>(a._OrtCreateBinding=Q.Xa)(o),a._OrtBindInput=(o,p,m)=>(a._OrtBindInput=Q.Ya)(o,p,m),a._OrtBindOutput=(o,p,m,y)=>(a._OrtBindOutput=Q.Za)(o,p,m,y),a._OrtClearBoundOutputs=o=>(a._OrtClearBoundOutputs=Q._a)(o),a._OrtReleaseBinding=o=>(a._OrtReleaseBinding=Q.$a)(o),a._OrtRunWithBinding=(o,p,m,y,$)=>(a._OrtRunWithBinding=Q.ab)(o,p,m,y,$),a._OrtRun=(o,p,m,y,$,I,M,D)=>(a._OrtRun=Q.bb)(o,p,m,y,$,I,M,D),a._OrtEndProfiling=o=>(a._OrtEndProfiling=Q.cb)(o),a._JsepOutput=(o,p,m)=>(a._JsepOutput=Q.db)(o,p,m),a._JsepGetNodeName=o=>(a._JsepGetNodeName=Q.eb)(o);var Ir=()=>(Ir=Q.fb)(),et=a._free=o=>(et=a._free=Q.gb)(o),Er=a._malloc=o=>(Er=a._malloc=Q.hb)(o),Sa=(o,p,m,y,$,I)=>(Sa=Q.kb)(o,p,m,y,$,I),Ms=()=>(Ms=Q.lb)(),Rs=(o,p,m,y,$)=>(Rs=Q.mb)(o,p,m,y,$),Bs=o=>(Bs=Q.nb)(o),Ta=o=>(Ta=Q.ob)(o),Ns=(o,p)=>(Ns=Q.pb)(o,p),Ds=()=>(Ds=Q.qb)(),Ps=(o,p)=>(Ps=Q.rb)(o,p),zr=o=>(zr=Q.sb)(o),Ia=o=>(Ia=Q.tb)(o),Ea=()=>(Ea=Q.ub)(),Us=a.dynCall_ii=(o,p)=>(Us=a.dynCall_ii=Q.vb)(o,p),Ws=o=>(Ws=Q.wb)(o),Ls=()=>(Ls=Q.xb)(),qs=o=>(qs=Q.yb)(o),Fs=()=>(Fs=Q.zb)();return a.stackSave=()=>Ea(),a.stackRestore=o=>zr(o),a.stackAlloc=o=>Ia(o),a.setValue=function(o,p,m="i8"){switch(m.endsWith("*")&&(m="*"),m){case"i1":case"i8":he()[o>>>0]=p;break;case"i16":L()[o>>>1>>>0]=p;break;case"i32":A()[o>>>2>>>0]=p;break;case"i64":J[o>>>3]=BigInt(p);break;case"float":qe()[o>>>2>>>0]=p;break;case"double":be()[o>>>3>>>0]=p;break;case"*":ie()[o>>>2>>>0]=p;break;default:pt(`invalid type for setValue: ${m}`)}},a.getValue=function(o,p="i8"){switch(p.endsWith("*")&&(p="*"),p){case"i1":case"i8":return he()[o>>>0];case"i16":return L()[o>>>1>>>0];case"i32":return A()[o>>>2>>>0];case"i64":return J[o>>>3];case"float":return qe()[o>>>2>>>0];case"double":return be()[o>>>3>>>0];case"*":return ie()[o>>>2>>>0];default:pt(`invalid type for getValue: ${p}`)}},a.UTF8ToString=xe,a.stringToUTF8=Dt,a.lengthBytesUTF8=Hn,(function o(){if(0<Ht)Kt=o;else if(u)t(a),yr();else{for(;0<da.length;)da.shift()(a);0<Ht?Kt=o:(a.calledRun=!0,re||(yr(),t(a)))}})(),a.PTR_SIZE=4,i}),Jd=Ba,Vs=globalThis.self?.name?.startsWith("em-pthread"),Vs&&Ba()}),Na,Ai,Gs,Me,ep,Ar,Hs,Ks,Da,Zs,Pa,tp,Ua,rp,tn=P(()=>{en(),Na=typeof location>"u"?void 0:location.origin,Ai=import.meta.url>"file:"&&import.meta.url<"file;",Gs=()=>{{if(Ai){let e=URL;return new URL(new e("ort.webgpu.bundle.min.mjs",import.meta.url).href,Na).href}return import.meta.url}},Me=Gs(),ep=()=>{if(Me&&!Me.startsWith("blob:"))return Me.substring(0,Me.lastIndexOf("/")+1)},Ar=(e,t)=>{try{let r=t??Me;return(r?new URL(e,r):new URL(e)).origin===Na}catch{return!1}},Hs=(e,t)=>{let r=t??Me;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},Ks=(e,t)=>`${t??"./"}${e}`,Da=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},Zs=async e=>(await import(e)).default,Pa=(ig(),hr(Qd)).default,tp=async()=>{if(!Me)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Ar(Me))return[void 0,Pa()];let e=await Da(Me);return[e,Pa(e)]},Ua=(ng(),hr(Yd)).default,rp=async(e,t,r)=>{if(!e&&!t&&Ua&&Me&&Ar(Me))return[void 0,Ua];{let a="ort-wasm-simd-threaded.jsep.mjs",i=e??Hs(a,t),n=r&&i&&!Ar(i,t),s=n?await Da(i):i??Ks(a,t);return[n?s:void 0,await Zs(s)]}}}),Wa,Or,Jt,La,Qs,Xs,Ys,rn,ge,Bt=P(()=>{tn(),Or=!1,Jt=!1,La=!1,Qs=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Xs=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Ys=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},rn=async e=>{if(Or)return Promise.resolve();if(Jt)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(La)throw new Error("previous call to 'initializeWebAssembly()' failed.");Jt=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!Ys())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!Xs())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let a=Qs();r>1&&!a&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let i=e.wasmPaths,n=typeof i=="string"?i:void 0,s=i?.mjs,u=s?.href??s,l=i?.wasm,d=l?.href??l,c=e.wasmBinary,[f,h]=await rp(u,n,r>1),g=!1,_=[];if(t>0&&_.push(new Promise(b=>{setTimeout(()=>{g=!0,b()},t)})),_.push(new Promise((b,x)=>{let v={numThreads:r};if(c)v.wasmBinary=c;else if(d||n)v.locateFile=w=>d??n+w;else if(u&&u.indexOf("blob:")!==0)v.locateFile=w=>new URL(w,u).href;else if(f){let w=ep();w&&(v.locateFile=S=>w+S)}h(v).then(w=>{Jt=!1,Or=!0,Wa=w,b(),f&&URL.revokeObjectURL(f)},w=>{Jt=!1,La=!0,x(w)})})),await Promise.race(_),g)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},ge=()=>{if(Or&&Wa)return Wa;throw new Error("WebAssembly is not initialized yet.")}}),Ze,Qr,ce,an=P(()=>{Bt(),Ze=(e,t)=>{let r=ge(),a=r.lengthBytesUTF8(e)+1,i=r._malloc(a);return r.stringToUTF8(e,i,a),t.push(i),i},Qr=(e,t,r,a)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([i,n])=>{let s=t?t+i:i;if(typeof n=="object")Qr(n,s+".",r,a);else if(typeof n=="string"||typeof n=="number")a(s,n.toString());else if(typeof n=="boolean")a(s,n?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof n}`)})},ce=e=>{let t=ge(),r=t.stackSave();try{let a=t.PTR_SIZE,i=t.stackAlloc(2*a);t._OrtGetLastError(i,i+a);let n=Number(t.getValue(i,a===4?"i32":"i64")),s=t.getValue(i+a,"*"),u=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${n}, ERROR_MESSAGE: ${u}`)}finally{t.stackRestore(r)}}}),ap,sg=P(()=>{Bt(),an(),ap=e=>{let t=ge(),r=0,a=[],i=e||{};try{if(e?.logSeverityLevel===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(i.terminate=!1);let n=0;return e?.tag!==void 0&&(n=Ze(e.tag,a)),r=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,n),r===0&&ce("Can't create run options."),e?.extra!==void 0&&Qr(e.extra,"",new WeakSet,(s,u)=>{let l=Ze(s,a),d=Ze(u,a);t._OrtAddRunConfigEntry(r,l,d)!==0&&ce(`Can't set a run config entry: ${s} - ${u}.`)}),[r,a]}catch(n){throw r!==0&&t._OrtReleaseRunOptions(r),a.forEach(s=>t._free(s)),n}}}),Js,eo,to,er,ro,ip,og=P(()=>{Bt(),an(),Js=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},eo=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},to=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},er=(e,t,r,a)=>{let i=Ze(t,a),n=Ze(r,a);ge()._OrtAddSessionConfigEntry(e,i,n)!==0&&ce(`Can't set a session config entry: ${t} - ${r}.`)},ro=async(e,t,r)=>{for(let a of t){let i=typeof a=="string"?a:a.name,n=[];switch(i){case"webnn":if(i="WEBNN",typeof a!="string"){let c=a?.deviceType;c&&er(e,"deviceType",c,r)}break;case"webgpu":if(i="JS",typeof a!="string"){let c=a;if(c?.preferredLayout){if(c.preferredLayout!=="NCHW"&&c.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${c.preferredLayout}`);er(e,"preferredLayout",c.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${i}`)}let s=Ze(i,r),u=n.length,l=0,d=0;if(u>0){l=ge()._malloc(u*ge().PTR_SIZE),r.push(l),d=ge()._malloc(u*ge().PTR_SIZE),r.push(d);for(let c=0;c<u;c++)ge().setValue(l+c*ge().PTR_SIZE,n[c][0],"*"),ge().setValue(d+c*ge().PTR_SIZE,n[c][1],"*")}await ge()._OrtAppendExecutionProvider(e,s,l,d,u)!==0&&ce(`Can't append execution provider: ${i}.`)}},ip=async e=>{let t=ge(),r=0,a=[],i=e||{};to(i);try{let n=Js(i.graphOptimizationLevel??"all"),s=eo(i.executionMode??"sequential"),u=typeof i.logId=="string"?Ze(i.logId,a):0,l=i.logSeverityLevel??2;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log serverity level is not valid: ${l}`);let d=i.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let c=typeof i.optimizedModelFilePath=="string"?Ze(i.optimizedModelFilePath,a):0;if(r=t._OrtCreateSessionOptions(n,!!i.enableCpuMemArena,!!i.enableMemPattern,s,!!i.enableProfiling,0,u,l,d,c),r===0&&ce("Can't create session options."),i.executionProviders&&await ro(r,i.executionProviders,a),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);er(r,"enableGraphCapture",i.enableGraphCapture.toString(),a)}if(i.freeDimensionOverrides)for(let[f,h]of Object.entries(i.freeDimensionOverrides)){if(typeof f!="string")throw new Error(`free dimension override name must be a string: ${f}`);if(typeof h!="number"||!Number.isInteger(h)||h<0)throw new Error(`free dimension override value must be a non-negative integer: ${h}`);let g=Ze(f,a);t._OrtAddFreeDimensionOverride(r,g,h)!==0&&ce(`Can't set a free dimension override: ${f} - ${h}.`)}return i.extra!==void 0&&Qr(i.extra,"",new WeakSet,(f,h)=>{er(r,f,h,a)}),[r,a]}catch(n){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&ce("Can't release session options."),a.forEach(s=>t._free(s)),n}}}),Wt,lt,Ct,nn,Xr,sn,on,Oi,ee=P(()=>{Wt=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},lt=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Ct=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],a=typeof t=="number"?t:t.reduce((i,n)=>i*n,1);return r>0?Math.ceil(a*r):void 0},nn=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Xr=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},sn=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",on=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Oi=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),un,np=P(()=>{en(),un=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),a=r?parseInt(r,10):0;if(a<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let i=t.body.getReader(),n;try{n=new ArrayBuffer(a)}catch(u){if(u instanceof RangeError){let l=Math.ceil(a/65536);n=new WebAssembly.Memory({initial:l,maximum:l}).buffer}else throw u}let s=0;for(;;){let{done:u,value:l}=await i.read();if(u)break;let d=l.byteLength;new Uint8Array(n,s,d).set(l),s+=d}return new Uint8Array(n,0,a)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),ao,io,no,so,ln,oo,ue,dt=P(()=>{ee(),ao=["V","I","W","E","F"],io=(e,t)=>{console.log(`[${ao[e]},${new Date().toISOString()}]${t}`)},ln=(e,t)=>{no=e,so=t},oo=(e,t)=>{let r=Xr(e),a=Xr(no);r>=a&&io(r,typeof t=="function"?t():t)},ue=(...e)=>{so&&oo(...e)}}),uo,jt,C,Yr,sp,op,up,ae=P(()=>{uo=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},jt=class{static calcShape(e,t,r=!1){let a=e.length,i=t.length;if(a===0)return t;if(i===0)return e;let n=Math.max(e.length,t.length),s=new Array(n);if(r){if(a<2||i<2)return;let u=uo.calcMatMulShape([e[a-2],e[a-1]],[t[i-2],t[i-1]]);if(u===void 0)return;[s[n-2],s[n-1]]=u}for(let u=r?3:1;u<=n;u++){let l=a-u<0?1:e[a-u],d=i-u<0?1:t[i-u];if(l!==d&&l>1&&d>1)return;let c=Math.max(l,d);if(l&&d)s[n-u]=Math.max(l,d);else{if(c>1)return;s[n-u]=0}}return s}static isValidBroadcast(e,t){let r=e.length,a=t.length;if(r>a)return!1;for(let i=1;i<=r;i++)if(e[r-i]!==1&&e[r-i]!==t[a-i])return!1;return!0}},C=class Vr{static size(t){return Vr.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let a=t.length;if(a===0)return[];let i=new Array(a),n=a-1;for(;n>=0;){if(t[n]%r===0){i[n]=t[n]/r;break}if(r%t[n]!==0)throw new Error("cannot convert shape");i[n]=1,r/=t[n],n--}for(n--;n>=0;n--)i[n]=t[n];return i}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Vr.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Vr.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,a){let i=1;for(let n=r;n<a;n++){if(t[n]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=Number(t[n])}return i}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let a=new Array(r);a[r-1]=1,a[r-2]=t[r-1];for(let i=r-3;i>=0;--i)a[i]=a[i+1]*t[i+1];return a}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(a=>this.normalizeAxis(a,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(a=>t[a]):t.slice().reverse()}static padShape(t,r){let a=t.length;return t.map((i,n)=>i+r[n]+r[n+a])}static areEqual(t,r){return t.length!==r.length?!1:t.every((a,i)=>a===r[i])}},Yr=class dr{static adjustPoolAttributes(t,r,a,i,n,s){if(!t&&a.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let u=0;u<r.length-2;u++)u>=a.length?a.push(r[u+2]):a[u]=r[u+2];for(let u=0;u<a.length;u++)if(u<i.length){if(i[u]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let u=0;u<a.length;u++)if(u<n.length){if(n[u]<0)throw new Error("dilations should be greater than or equal to 1")}else n.push(1);for(let u=0;u<a.length*2;u++)if(u<s.length){if(s[u]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let u=0;u<a.length;u++){if(a[u]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[u]>=a[u]||s[u+a.length]>=a[u])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,a,i,n,s,u){if(u){if(n.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<t.length-2;l++)dr.adjustPadAndReturnShape(t[l+(s?1:2)],r[l],a[l],i[l],n,l,l+t.length-2,u)}}static computePoolOutputShape(t,r,a,i,n,s,u){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let l=[r[0],r[1]];return dr.computeShapeHelper(t,r,l,a,i,n,s,u),l}static computeConvOutputShape(t,r,a,i,n,s,u){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let l=[t[0],r[0]];return dr.computeShapeHelper(!1,t,l,a,i,n,s,u),l}static computeShapeHelper(t,r,a,i,n,s,u,l){if(t)for(let d=0;d<r.length-2;d++)a.push(1);else for(let d=0;d<r.length-2;d++)a.push(dr.adjustPadAndReturnShape(r[d+2],i[d],n[d],s[d],u,d,d+r.length-2,l))}static adjustPadAndReturnShape(t,r,a,i,n,s,u,l){let d=a*(i-1)+1;if(l&&l!=="NOTSET")switch(l){case"VALID":return n[s]=0,n[u]=0,Math.floor((t-d)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(a!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let c=((t+r-1)/r-1)*r+i-t;return n[s]=Math.floor(l==="SAME_LOWER"?(c+1)/2:c/2),n[u]=c-n[s],Math.floor((t+c-i)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+n[s]+n[u]-d)/r+1)}},sp=class{static getShapeOfGemmResult(e,t,r,a,i){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let n,s,u;t?(n=e[1],s=e[0]):(n=e[0],s=e[1]);let l=-1;if(a?(u=r[0],l=1):(u=r[1],l=0),r[l]!==s)throw new Error("dimension mismatch");if(n<=0||u<=0||s<=0)throw new Error("invalid shape specified");if(i&&!jt.isValidBroadcast(i,[n,u]))throw new Error("gemm: invalid bias shape for broadcast");return[n,u,s]}},op=-34028234663852886e22,up=34028234663852886e22}),dn,lp=P(()=>{ee(),dn=(e,t)=>new(nn(t))(e)}),Mi,qa,lo,Fa,po,ja,Va,Ga,co,dp,ug=P(()=>{dt(),Mi=(e,t=!0)=>{if(e.byteLength%8!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 8 (BigInt).");let r=e.byteLength/8,a=new BigInt64Array(e.buffer,e.byteOffset,r),i=new Int32Array(r);for(let n=0;n<r;n++){let s=a[n];if(s>2147483647n||s<-2147483648n)throw new Error(`Overflow occurred when converting BigInt to Int32 at index ${n}: ${s}`);i[n]=Number(s)}return t?new Uint8Array(i.buffer):i},qa=(e,t=!0)=>{if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (Int32).");let r=e.byteLength/4,a=new Int32Array(e.buffer,e.byteOffset,r),i=BigInt64Array.from(a,BigInt);return t?new Uint8Array(i.buffer):i},lo=1,Fa=()=>lo++,po=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),ja=(e,t)=>{let r=po.get(e);if(!r)throw new Error("Unsupported data type.");return t.length>0?Math.ceil(t.reduce((a,i)=>a*i)*r/8):0},Va=class{constructor(e){this.shouldConvertInt64toInt32=!1,this.isInt64ToInt32Converted=!1;let{sessionId:t,context:r,tensor:a,dataType:i,shape:n,shouldConvertInt64toInt32:s=!1}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=a,this.dataType=i,this.tensorShape=n,this.shouldConvertInt64toInt32=s}get tensor(){return this.mlTensor}get type(){return this.dataType}get shape(){return this.tensorShape}get byteLength(){return ja(this.dataType,this.tensorShape)}destroy(){ue("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e,t){if(e){let r=await this.mlContext.readTensor(this.mlTensor),a=qa(new Uint8Array(r));if(t){(t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)).set(a);return}else return a.buffer}else return t?this.mlContext.readTensor(this.mlTensor,t):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((a,i)=>a===r[i])}setIsInt64ToInt32Converted(e){this.isInt64ToInt32Converted=e}},Ga=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,a){let i=t,n=this.tensorManager.getMLContext(e),s=i==="int64"&&!n.opSupportLimits().input.dataTypes.includes("int64");if(s&&(i="int32",ue("verbose",()=>"[WebNN] TensorIdTracker.ensureTensor: convert dataType from int64 to int32")),this.wrapper){if(this.wrapper.canReuseTensor(n,i,r))return this.wrapper.tensor;if(a){if(this.wrapper.byteLength!==ja(i,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let u=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,i,r,u,!0,!0,s),a&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper)if(this.wrapper.shouldConvertInt64toInt32&&(t=Mi(e,!0),this.wrapper.setIsInt64ToInt32Converted(!0)),t.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else ue("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor();this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){if(this.activeUpload){let t=this.wrapper?.isInt64ToInt32Converted?qa(this.activeUpload):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(t):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(t);return}else return t.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(this.wrapper?.shouldConvertInt64toInt32,e):this.wrapper.read(this.wrapper?.shouldConvertInt64toInt32)}},co=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}reserveTensorId(){let e=Fa();return this.tensorTrackersById.set(e,new Ga(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,a,i){ue("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${a}, copyOld: ${i}}`);let n=this.tensorTrackersById.get(t);if(!n)throw new Error("Tensor not found.");return n.ensureTensor(e,r,a,i)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){ue("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,a){let i=this.getMLContext(e),n=Fa(),s=new Va({sessionId:e,context:i,tensor:t,dataType:r,shape:a});return this.tensorTrackersById.set(n,new Ga(this,s)),this.externalTensors.add(s),n}async getCachedTensor(e,t,r,a,i,n,s=!1){let u=this.getMLContext(e);for(let[d,c]of this.freeTensors.entries())if(c.canReuseTensor(u,t,r)){ue("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, shape: ${r}}`);let f=this.freeTensors.splice(d,1)[0];return f.sessionId=e,f}ue("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, shape: ${r}}`);let l=await u.createTensor({dataType:t,shape:r,dimensions:r,usage:a,writable:i,readable:n});return new Va({sessionId:e,context:u,tensor:l,dataType:t,shape:r,shouldConvertInt64toInt32:s})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},dp=(...e)=>new co(...e)}),Mr,fo,pp,lg=P(()=>{ee(),Bt(),lp(),ug(),dt(),Mr=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),fo=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),a=Object.keys(t).sort();return r.length===a.length&&r.every((i,n)=>i===a[n]&&e[i]===t[i])},pp=class{constructor(e){this.tensorManager=dp(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.temporaryGraphInputs=[],this.temporarySessionTensorIds=new Map,ln(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){ue("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){ue("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)ue("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(a=>a.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let a=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:a}),a}}else if(e===void 0){let r=this.mlContextCache.findIndex(a=>a.options===void 0&&a.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let a=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:a}),a}}let t=this.mlContextCache.findIndex(r=>fo(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let a=this.mlContextCache.findIndex(i=>i.mlContext===t);a!==-1&&this.mlContextCache.splice(a,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){ue("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,a,i){let n=Mr.get(r);if(!n)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,n,a,i)}async createTemporaryTensor(e,t,r){ue("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let a=Mr.get(t);if(!a)throw new Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,a,r,!1);let n=this.temporarySessionTensorIds.get(e);return n?n.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!ge().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");ue("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return dn(r,t)}}registerMLTensor(e,t,r,a){let i=Mr.get(r);if(!i)throw new Error(`Unsupported ONNX data type: ${r}`);let n=this.tensorManager.registerTensor(e,t,i,a);return ue("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${a}} -> {tensorId: ${n}}`),n}registerMLConstant(e,t,r,a,i,n,s=!1){if(!n)throw new Error("External mounted files are not available.");let u=e;e.startsWith("./")&&(u=e.substring(2));let l=n.get(u);if(!l)throw new Error(`File with name ${u} not found in preloaded files.`);if(t+r>l.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let d=l.slice(t,t+r).buffer,c;switch(i.dataType){case"float32":c=new Float32Array(d);break;case"float16":c=typeof Float16Array<"u"&&Float16Array.from?new Float16Array(d):new Uint16Array(d);break;case"int32":c=new Int32Array(d);break;case"uint32":c=new Uint32Array(d);break;case"int64":s?(c=Mi(new Uint8Array(d),!1),i.dataType="int32"):c=new BigInt64Array(d);break;case"uint64":c=new BigUint64Array(d);break;case"int8":c=new Int8Array(d);break;case"int4":case"uint4":case"uint8":c=new Uint8Array(d);break;default:throw new Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return ue("verbose",()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}} ${s?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),a.constant(i,c)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isInt64Supported(e){return!!this.mlContextBySessionId.get(e)?.opSupportLimits().input.dataTypes.includes("int64")}flush(){}}}),pn=P(()=>{}),Ha,Rr,Br,ho,mo,Ka,Ri,go,cp,dg=P(()=>{dt(),pn(),Ha=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Rr=[],Br=e=>Math.ceil(Number(e)/16)*16,ho=e=>{for(let t=0;t<Rr.length;t++){let r=Rr[t];if(e<=r)return r}return Math.ceil(e/16)*16},mo=1,Ka=()=>mo++,Ri=async(e,t,r,a)=>{let i=Br(r),n=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,n,0,i),e.flush(),await n.mapAsync(GPUMapMode.READ);let u=n.getMappedRange();if(a){let l=a();return l.set(new Uint8Array(u,0,r)),l}else return new Uint8Array(u.slice(0,r))}finally{n.destroy()}},go=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Ha)Rr.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,a=t.byteOffset,i=t.byteLength,n=Br(i),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${i}`);let u=this.backend.device.createBuffer({mappedAtCreation:!0,size:n,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),l=u.getMappedRange();new Uint8Array(l).set(new Uint8Array(r,a,i)),u.unmap();let d=this.backend.device.createCommandEncoder();d.copyBufferToBuffer(u,0,s.gpuData.buffer,0,n),this.backend.device.queue.submit([d.finish()]),u.destroy(),ue("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let a=this.storageCache.get(t);if(!a)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==a.originalSize)throw new Error("inconsistent source and destination gpu data size");let i=Br(r.originalSize),n=this.backend.getCommandEncoder();this.backend.endComputePass(),n.copyBufferToBuffer(r.gpuData.buffer,0,a.gpuData.buffer,0,i)}registerExternalBuffer(e,t,r){let a;if(r){if(a=r[0],e===r[1])return ue("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${a}, buffer is the same, skip.`),a;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else a=Ka();return this.storageCache.set(a,{gpuData:{id:a,type:0,buffer:e},originalSize:t}),ue("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${a}, registered.`),a}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),ue("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=ho(e),a,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,n=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||n){let u=(i?this.freeBuffers:this.freeUniformBuffers).get(r);u?u.length>0?a=u.pop():a=this.backend.device.createBuffer({size:r,usage:t}):a=this.backend.device.createBuffer({size:r,usage:t})}else a=this.backend.device.createBuffer({size:r,usage:t});let s={id:Ka(),type:0,buffer:a};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),ue("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return ue("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await Ri(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Ha.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(ue("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},cp=(...e)=>new go(...e)}),_o,pe,$e=P(()=>{_o=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},pe=e=>new _o(e)}),Vt,Nr,Se,Ee,K,ye,Bi,qt,wt,V,tr,R,j,fp,cn,yo,hp,ne=P(()=>{ee(),ae(),Vt=64,Nr=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Se=(e,t=1)=>{let r=Nr(e,t);return typeof r=="string"?r:r[0]},Ee=(e,t=1)=>{let r=Nr(e,t);return typeof r=="string"?r:r[1]},K=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:C.computeStrides(r)})}),t},ye=e=>e%4===0?4:e%2===0?2:1,Bi=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,qt=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,wt=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,V=(e,t,r,a)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?a==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:a==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,tr=(e,t,r,a,i)=>{let n=typeof r=="number",s=n?r:r.length,u=[...new Array(s).keys()],l=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,d=Nr(t,i),c=typeof d=="string"?d:d[1],f=typeof d=="string"?d:d[0],h={indices:l,value:c,storage:f,tensor:t},g=B=>typeof B=="string"?B:`${B}u`,_={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},b=n?"uniforms.":"",x=`${b}${e}_shape`,v=`${b}${e}_strides`,w="";for(let B=0;B<s-1;B++)w+=`
    let dim${B} = current / ${V(v,B,s)};
    let rest${B} = current % ${V(v,B,s)};
    indices[${B}] = dim${B};
    current = rest${B};
    `;w+=`indices[${s-1}] = current;`;let S=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${h.indices} {
    var indices: ${h.indices};
    var current = offset;
    ${w}
    return indices;
  }`,k=B=>(_.offsetToIndices=!0,s<2?B:`o2i_${e}(${B})`),T=[];if(s>=2)for(let B=s-1;B>=0;B--)T.push(`${V(v,B,s)} * (indices[${B}])`);let z=s<2?"":`
  fn i2o_${e}(indices: ${h.indices}) -> u32 {
    return ${T.join("+")};
  }`,E=B=>(_.indicesToOffset=!0,s<2?B:`i2o_${e}(${B})`),O=(...B)=>s===0?"0u":`${h.indices}(${B.map(g).join(",")})`,N=(B,L)=>s<2?`${B}`:`${V(B,L,s)}`,F=(B,L,te)=>s<2?`${B}=${te};`:`${V(B,L,s)}=${te};`,Z={},G=(B,L)=>{_.broadcastedIndicesToOffset=!0;let te=`${L.name}broadcastedIndicesTo${e}Offset`;if(te in Z)return`${te}(${B})`;let A=[];for(let ie=s-1;ie>=0;ie--){let qe=L.indicesGet("outputIndices",ie+L.rank-s);A.push(`${N(v,ie)} * (${qe} % ${N(x,ie)})`)}return Z[te]=`fn ${te}(outputIndices: ${L.type.indices}) -> u32 {
             return ${A.length>0?A.join("+"):"0u"};
           }`,`${te}(${B})`},U=(B,L)=>(()=>{if(h.storage===h.value)return`${e}[${B}]=${L};`;if(h.storage==="vec2<u32>"&&h.value==="i32")return`${e}[${B}]=vec2<u32>(u32(${L}), select(0u, 0xFFFFFFFFu, ${L} < 0));`;if(h.storage==="vec2<u32>"&&h.value==="u32")return`${e}[${B}]=vec2<u32>(u32(${L}), 0u);`;if(h.storage==="u32"&&h.value==="vec4<bool>")return`${e}[${B}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${L}));`;throw new Error(`not supported combination of storage type ${h.storage} and value type ${h.value} yet`)})(),J=B=>(()=>{if(h.storage===h.value)return`${e}[${B}]`;if(h.storage==="vec2<u32>"&&h.value==="i32")return`i32(${e}[${B}].x)`;if(h.storage==="vec2<u32>"&&h.value==="u32")return`u32(${e}[${B}].x)`;if(h.storage==="u32"&&h.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${B}] & 0xFFu), bool(${e}[${B}] & 0xFF00u), bool(${e}[${B}] & 0xFF0000u), bool(${e}[${B}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${h.storage} and value type ${h.value} yet`)})(),oe=s<2?"":`
  fn get_${e}ByIndices(indices: ${h.indices}) -> ${c} {
    return ${J(`i2o_${e}(indices)`)};
  }`,q=s<2?"":(()=>{let B=u.map(te=>`d${te}: u32`).join(", "),L=u.map(te=>`d${te}`).join(", ");return`
  fn get_${e}(${B}) -> ${c} {
    return get_${e}ByIndices(${O(L)});
  }`})(),Y=(...B)=>{if(B.length!==s)throw new Error(`indices length must be ${s}`);let L=B.map(g).join(",");return s===0?J("0u"):s===1?J(L[0]):(_.get=!0,_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}(${L})`)},re=B=>s<2?J(B):(_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}ByIndices(${B})`),X=s<2?"":`
  fn set_${e}ByIndices(indices: ${h.indices}, value: ${c}) {
    ${U(`i2o_${e}(indices)`,"value")}
  }`,he=s<2?"":(()=>{let B=u.map(te=>`d${te}: u32`).join(", "),L=u.map(te=>`d${te}`).join(", ");return`
  fn set_${e}(${B}, value: ${c}) {
    set_${e}ByIndices(${O(L)}, value);
  }`})();return{impl:()=>{let B=[],L=!1;return _.offsetToIndices&&(B.push(S),L=!0),_.indicesToOffset&&(B.push(z),L=!0),_.broadcastedIndicesToOffset&&(Object.values(Z).forEach(te=>B.push(te)),L=!0),_.set&&(B.push(he),L=!0),_.setByIndices&&(B.push(X),L=!0),_.get&&(B.push(q),L=!0),_.getByIndices&&(B.push(oe),L=!0),!n&&L&&B.unshift(`const ${x} = ${h.indices}(${r.join(",")});`,`const ${v} = ${h.indices}(${C.computeStrides(r).join(",")});`),B.join(`
`)},type:h,offsetToIndices:k,indicesToOffset:E,broadcastedIndicesToOffset:G,indices:O,indicesGet:N,indicesSet:F,set:(...B)=>{if(B.length!==s+1)throw new Error(`indices length must be ${s}`);let L=B[s];if(typeof L!="string")throw new Error("value must be string");let te=B.slice(0,s).map(g).join(",");return s===0?U("0u",L):s===1?U(te[0],L):(_.set=!0,_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}(${te}, ${L})`)},setByOffset:U,setByIndices:(B,L)=>s<2?U(B,L):(_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}ByIndices(${B}, ${L});`),get:Y,getByOffset:J,getByIndices:re,usage:a,name:e,strides:v,shape:x,rank:s}},R=(e,t,r,a=1)=>tr(e,t,r,"input",a),j=(e,t,r,a=1)=>tr(e,t,r,"output",a),fp=(e,t,r)=>tr(e,t,r,"atomicOutput",1),cn=(e,t,r,a=1)=>tr(e,t,r,"internal",a),yo=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Vt){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],a=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||a>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${a}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*a>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${a}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,n=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,s=i?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*a}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${a})
  fn main(${n}) {
    ${s}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",a=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${a}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:a}of this.uniforms)if(a&&a>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(a/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(a/4)}>`);else{let i=a==null||a===1?r:`vec${a}<${r}>`;e.push(`${t}:${i}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},hp=(e,t)=>new yo(e,t)}),bo,Za,wo,$o,vo,xo,Be,mp,gp,$t=P(()=>{ee(),ae(),$e(),ne(),bo=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Za=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),wo=(e,t)=>C.sortBasedOnPerm(e,Za(e.length,t)),$o=(e,t,r,a)=>{let i=`fn perm(i: ${a.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let n=0;n<t;++n)i+=`a[${e[n]}]=i[${n}];`;return i+="return a;}"},vo=(e,t)=>{let r=[],a=[];for(let i=0;i<e.length;++i)e[i]!==1&&r.push(e[i]),e[t[i]]!==1&&a.push(t[i]);return{newShape:r,newPerm:a}},xo=(e,t)=>{let r=0;for(let a=0;a<e.length;++a)if(t[e[a]]!==1){if(e[a]<r)return!1;r=e[a]}return!0},Be=(e,t)=>{let r=e.dataType,a=e.dims.length,i=Za(a,t),n=wo(e.dims,i),s=e.dims,u=n,l=a<2||xo(i,e.dims),d;if(l)return d=_=>{let b=R("input",r,s,4),x=j("output",r,u,4);return`
  ${_.registerUniform("output_size","u32").declareVariables(b,x)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let _=C.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64/4)},programUniforms:[{type:12,data:Math.ceil(_/4)}]}},getShaderSource:d};let{newShape:c,newPerm:f}=vo(e.dims,i),h=C.areEqual(f,[2,3,1]),g=C.areEqual(f,[3,1,2]);if(c.length===2||h||g){s=h?[c[0],c[1]*c[2]]:g?[c[0]*c[1],c[2]]:c,u=[s[1],s[0]];let _=16;return d=b=>{let x=R("a",r,s.length),v=j("output",r,u.length);return`
  ${b.registerUniform("output_size","u32").declareVariables(x,v)}
  var<workgroup> tile : array<array<${v.type.value}, ${_+1}>, ${_}>;
  ${b.mainStart([_,_,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${_} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${_}u + local_id.x;
    let input_row = workgroup_id_x * ${_}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${x.getByIndices(`${x.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${_}u + local_id.x;
    let output_row = workgroup_id_y * ${_}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${v.setByIndices(`${v.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let b=C.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(u[1]/_),y:Math.ceil(u[0]/_)},programUniforms:[{type:12,data:b},...K(s,u)]}},getShaderSource:d}}return d=_=>{let b=R("a",r,s.length),x=j("output",r,u.length);return`
  ${_.registerUniform("output_size","u32").declareVariables(b,x)}

  ${$o(i,a,b,x)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${x.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${x.setByOffset("global_idx",b.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let _=C.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...K(s,u)]}},getShaderSource:d}},mp=(e,t)=>{bo(e.inputs,t.perm),e.compute(Be(e.inputs[0],t.perm))},gp=e=>pe({perm:e.perm})}),ko,So,To,Io,Eo,zo,Co,Ao,Oo,Mo,je,_p,yp,bp,wp,$p,vp,xp,kp,Sp,Tp,pg=P(()=>{ee(),ae(),ne(),fn(),$t(),ko={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},So={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},To={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Io={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Eo=(e,t)=>{let r=[];for(let a=t-e;a<t;++a)r.push(a);return r},zo=(e,t)=>{let r=[],a=e.length;for(let n=0;n<a;n++)t.indexOf(n)===-1&&r.push(e[n]);let i=t.map(n=>e[n]);return[r,i]},Co=(e,t)=>{let r=e.length+t.length,a=[],i=0;for(let n=0;n<r;n++)t.indexOf(n)===-1?a.push(e[i++]):a.push(1);return a},Ao=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},Oo=(e,t)=>{let r=[];if(!Ao(e,t)){for(let a=0;a<t;++a)e.indexOf(a)===-1&&r.push(a);e.forEach(a=>r.push(a))}return r},Mo=(e,t,r,a,i,n,s)=>{let u=r[0].dims,l=C.size(n),d=C.size(s),c=R("_A",r[0].dataType,u),f=j("output",i,n),h=64;l===1&&(h=256);let g=`
          var<workgroup> aBestValues : array<f32, ${h}>;
       `,_=b=>`
        ${b.registerUniform("reduceSize","u32").declareVariables(c,f)}
        ${g}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${b.mainStart(h)}

          let outputIndex = global_idx / ${h};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${To[a]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${h}) {
           let candidate = f32(${c.getByOffset("offset + k")});
           bestValue = ${ko[a]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${h}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${So[a]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${f.setByOffset("outputIndex",`${a==="mean"?`${f.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${f.type.storage}(${Io[a]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${h}`,inputDependencies:["type"]},getShaderSource:_,getRunData:()=>({outputs:[{dims:n,dataType:i}],dispatchGroup:{x:l},programUniforms:[{type:12,data:d}]})}},je=(e,t,r,a)=>{let i=e.inputs.length===1?r:Ni(e.inputs,r),n=i.axes;n.length===0&&!i.noopWithEmptyAxes&&(n=e.inputs[0].dims.map((g,_)=>_));let s=C.normalizeAxes(n,e.inputs[0].dims.length),u=s,l=e.inputs[0],d=Oo(u,e.inputs[0].dims.length);d.length>0&&(l=e.compute(Be(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],u=Eo(u.length,l.dims.length));let[c,f]=zo(l.dims,u),h=c;i.keepDims&&(h=Co(c,s)),e.compute(Mo(t,i.cacheKey,[l],a,e.inputs[0].dataType,h,f),{inputs:[l]})},_p=(e,t)=>{je(e,"ReduceMeanShared",t,"mean")},yp=(e,t)=>{je(e,"ReduceL1Shared",t,"l1")},bp=(e,t)=>{je(e,"ReduceL2Shared",t,"l2")},wp=(e,t)=>{je(e,"ReduceLogSumExpShared",t,"logSumExp")},$p=(e,t)=>{je(e,"ReduceMaxShared",t,"max")},vp=(e,t)=>{je(e,"ReduceMinShared",t,"min")},xp=(e,t)=>{je(e,"ReduceProdShared",t,"prod")},kp=(e,t)=>{je(e,"ReduceSumShared",t,"sum")},Sp=(e,t)=>{je(e,"ReduceSumSquareShared",t,"sumSquare")},Tp=(e,t)=>{je(e,"ReduceLogSumShared",t,"logSum")}}),Ve,Ro,Jr,Ni,Ge,Bo,No,Do,Po,Uo,Wo,Lo,qo,Fo,jo,He,Ip,Ep,zp,Cp,Ap,Op,Mp,Rp,Bp,Np,fn=P(()=>{ee(),ae(),$e(),ne(),pg(),Ve=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Ro=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Jr=(e,t,r,a,i,n,s=!1,u=!1)=>{let l=[],d=r[0].dims,c=d.length,f=C.normalizeAxes(i,c),h=!u&&f.length===0;d.forEach((b,x)=>{h||f.indexOf(x)>=0?s&&l.push(1):l.push(b)});let g=l.length,_=C.size(l);return{name:e,shaderCache:t,getShaderSource:b=>{let x=[],v=R("_A",r[0].dataType,c),w=j("output",n,g),S=a(v,w,f),k=S[2];for(let T=0,z=0;T<c;T++)h||f.indexOf(T)>=0?(s&&z++,k=`for(var j${T}: u32 = 0; j${T} < ${d[T]}; j${T}++) {
                  ${S[2].includes("last_index")?`let last_index = j${T};`:""}
                  ${v.indicesSet("input_indices",T,`j${T}`)}
                  ${k}
                }`):(x.push(`${v.indicesSet("input_indices",T,w.indicesGet("output_indices",z))};`),z++);return`

        ${b.registerUniform("output_size","u32").declareVariables(v,w)}

        ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${v.type.indices};
          let output_indices = ${w.offsetToIndices("global_idx")};

          ${x.join(`
`)}
          ${S[0]}       // init ops for reduce max/min
          ${S[1]}
          ${k}
          ${S[3]}
          ${S.length===4?w.setByOffset("global_idx","value"):S.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:l,dataType:n}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...K(d,l)]})}},Ni=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(a=>r.push(Number(a))),pe({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Ge=(e,t,r,a)=>{let i=e.inputs,n=i.length===1?r:Ni(i,r);e.compute(Jr(t,{hint:n.cacheKey,inputDependencies:["rank"]},[i[0]],n.noopWithEmptyAxes&&n.axes.length===0?Ro:a,n.axes,i[0].dataType,n.keepDims,n.noopWithEmptyAxes),{inputs:[0]})},Bo=(e,t)=>{Ve(e.inputs),Ge(e,"ReduceLogSum",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},No=(e,t)=>{Ve(e.inputs),Ge(e,"ReduceL1",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},Do=(e,t)=>{Ve(e.inputs),Ge(e,"ReduceL2",t,(r,a)=>[`var t = ${a.type.value}(0); var value = ${a.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Po=(e,t)=>{Ve(e.inputs),Ge(e,"ReduceLogSumExp",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},Uo=(e,t)=>{Ve(e.inputs),Ge(e,"ReduceMax",t,(r,a,i)=>{let n=[];for(let s=0;s<r.rank;s++)(i.indexOf(s)>=0||i.length===0)&&n.push(r.indicesSet("input_indices",s,0));return[`${n.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},Wo=(e,t)=>{Ve(e.inputs),Ge(e,"ReduceMean",t,(r,a,i)=>{let n=1;for(let s=0;s<r.rank;s++)(i.indexOf(s)>=0||i.length===0)&&(n*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${a.type.value}(sum / ${n});`]})},Lo=(e,t)=>{Ve(e.inputs),Ge(e,"ReduceMin",t,(r,a,i)=>{let n=[];for(let s=0;s<r.rank;s++)(i.indexOf(s)>=0||i.length===0)&&n.push(`input_indices[${s}] = 0;`);return[`${n.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},qo=(e,t)=>{Ve(e.inputs),Ge(e,"ReduceProd",t,(r,a)=>[`var value = ${a.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},Fo=(e,t)=>{Ve(e.inputs),Ge(e,"ReduceSum",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},jo=(e,t)=>{Ve(e.inputs),Ge(e,"ReduceSumSquare",t,(r,a)=>[`var t = ${a.type.value}(0); var value = ${a.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},He=(e,t,r)=>{if(t.length===0)return r;let a=1,i=1;for(let n=0;n<t.length;n++)t.indexOf(n)===-1?a*=e[n]:i*=e[n];return i<32&&a>1024},Ip=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Wo(e,t):_p(e,t)},Ep=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?No(e,t):yp(e,t)},zp=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Do(e,t):bp(e,t)},Cp=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Po(e,t):wp(e,t)},Ap=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Uo(e,t):$p(e,t)},Op=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Lo(e,t):vp(e,t)},Mp=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?qo(e,t):xp(e,t)},Rp=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Fo(e,t):kp(e,t)},Bp=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?jo(e,t):Sp(e,t)},Np=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Bo(e,t):Tp(e,t)}}),Qa,Dp,Pp,Di,cg=P(()=>{ee(),$e(),fn(),Qa=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Dp=(e,t)=>{Qa(e.inputs);let r=(a,i,n)=>{let s=[];for(let u=0;u<a.rank;u++)(n.indexOf(u)>=0||n.length===0)&&s.push(`input_indices[${u}] = 0;`);return[`${s.join(`
`)}`,`var value = ${a.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${a.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${a.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Jr("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Pp=(e,t)=>{Qa(e.inputs);let r=(a,i,n)=>{let s=[];for(let u=0;u<a.rank;u++)(n.indexOf(u)>=0||n.length===0)&&s.push(`input_indices[${u}] = 0;`);return[`${s.join(`
`)}`,`var value = ${a.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${a.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${a.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Jr("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Di=e=>pe(e)}),Vo,Dr,Go,Ho,Ko,mr,Zo,Up,hn=P(()=>{ee(),ae(),pn(),ne(),Vo=(e,t)=>{let r=e[0],a=e[1],i=e[2],n=e[3],s=e[4],u=e[5];if(s&&u)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let l=r.dims[0],d=r.dims[1],c=r.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(a.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(a.dims[0]!==c)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==a.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let f=i.dims[0]/3,h=f,g=h;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let S of t.qkvHiddenSizes)if(S%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");f=t.qkvHiddenSizes[0],h=t.qkvHiddenSizes[1],g=t.qkvHiddenSizes[2]}let _=d;if(f!==h)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==f+h+g)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let b=0;if(s){if(h!==g)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==l)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==h/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(b=s.dims[3])}let x=_+b,v=-1,w=0;if(n)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(u){if(u.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(u.dims[0]!==l||u.dims[1]!==t.numHeads||u.dims[2]!==d||u.dims[3]!==x)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:d,pastSequenceLength:b,kvSequenceLength:_,totalSequenceLength:x,maxSequenceLength:v,inputHiddenSize:c,hiddenSize:f,vHiddenSize:g,headSize:Math.floor(f/t.numHeads),vHeadSize:Math.floor(g/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:w,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Dr=(e,t,r)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e?.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,Go=(e,t,r,a,i,n,s,u)=>{let l=ye(s?1:n),d=64,c=n/l;c<d&&(d=32);let f=Math.ceil(n/l/d),h=[{type:12,data:t},{type:12,data:r},{type:12,data:a},{type:12,data:i},{type:12,data:c},{type:12,data:f}],g=Se(e.dataType,l),_=Ee(1,l),b=["type"];s&&b.push("type"),u&&b.push("type");let x=v=>{let w=j("x",e.dataType,e.dims,l),S=[w],k=s?R("seq_lens",s.dataType,s.dims):void 0;k&&S.push(k);let T=u?R("total_sequence_length_input",u.dataType,u.dims):void 0;T&&S.push(T);let z=Ee(e.dataType),E=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${v.registerUniforms(E).declareVariables(...S)}
  ${v.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Dr(k,T,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${d}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${s?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${_}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${_}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(l){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${d}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${_}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${_}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(l){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${d}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${w.type.value}(${z}(1.0) / ${z}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${_}(x[offset + i]);
        x[offset + i] = ${w.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${s?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${w.type.value}(${z}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${g};${l}`,inputDependencies:b},getShaderSource:x,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*r},programUniforms:h})}},Ho=(e,t,r,a,i,n,s,u,l)=>{let d=s+n.kvSequenceLength,c=[n.batchSize,n.numHeads,n.sequenceLength,d],f=e>1&&a,h=n.kvNumHeads?n.kvNumHeads:n.numHeads,g=f?[n.batchSize,h,d,n.headSize]:void 0,_=n.nReps?n.nReps:1,b=n.scale===0?1/Math.sqrt(n.headSize):n.scale,x=ye(n.headSize),v=n.headSize/x,w=12,S={x:Math.ceil(d/w),y:Math.ceil(n.sequenceLength/w),z:n.batchSize*n.numHeads},k=[{type:12,data:n.sequenceLength},{type:12,data:v},{type:12,data:d},{type:12,data:n.numHeads},{type:12,data:n.headSize},{type:1,data:b},{type:12,data:s},{type:12,data:n.kvSequenceLength},{type:12,data:_}],T=f&&a&&C.size(a.dims)>0,z=["type","type"];T&&z.push("type"),i&&z.push("type"),u&&z.push("type"),l&&z.push("type");let E=[{dims:c,dataType:t.dataType,gpuDataType:0}];f&&E.push({dims:g,dataType:t.dataType,gpuDataType:0});let O=N=>{let F=R("q",t.dataType,t.dims,x),Z=R("key",r.dataType,r.dims,x),G=[F,Z];if(T){let X=R("past_key",a.dataType,a.dims,x);G.push(X)}i&&G.push(R("attention_bias",i.dataType,i.dims));let U=u?R("seq_lens",u.dataType,u.dims):void 0;U&&G.push(U);let J=l?R("total_sequence_length_input",l.dataType,l.dims):void 0;J&&G.push(J);let oe=j("output",t.dataType,c),q=[oe];f&&q.push(j("present_key",t.dataType,g,x));let Y=Ee(1,x),re=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${w}u;

  var<workgroup> tileQ: array<${F.type.storage}, ${w*w}>;
  var<workgroup> tileK: array<${F.type.storage}, ${w*w}>;
  ${N.registerUniforms(re).declareVariables(...G,...q)}
  ${N.mainStart([w,w,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${_===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${_===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Dr(U,J,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${T&&f?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${f?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${Y}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${T&&f?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${f?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${Y}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(x){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${x}`)}})()};
        output[outputIdx] = ${oe.type.value} (sum * uniforms.alpha) + ${i?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${x};${i!==void 0};${a!==void 0};${e}`,inputDependencies:z},getRunData:()=>({outputs:E,dispatchGroup:S,programUniforms:k}),getShaderSource:O}},Ko=(e,t,r,a,i,n,s=void 0,u=void 0)=>{let l=n+i.kvSequenceLength,d=i.nReps?i.nReps:1,c=i.vHiddenSize*d,f=e>1&&a,h=i.kvNumHeads?i.kvNumHeads:i.numHeads,g=f?[i.batchSize,h,l,i.headSize]:void 0,_=[i.batchSize,i.sequenceLength,c],b=12,x={x:Math.ceil(i.vHeadSize/b),y:Math.ceil(i.sequenceLength/b),z:i.batchSize*i.numHeads},v=[{type:12,data:i.sequenceLength},{type:12,data:l},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:c},{type:12,data:n},{type:12,data:i.kvSequenceLength},{type:12,data:d}],w=f&&a&&C.size(a.dims)>0,S=["type","type"];w&&S.push("type"),s&&S.push("type"),u&&S.push("type");let k=[{dims:_,dataType:t.dataType,gpuDataType:0}];f&&k.push({dims:g,dataType:t.dataType,gpuDataType:0});let T=z=>{let E=R("probs",t.dataType,t.dims),O=R("v",r.dataType,r.dims),N=[E,O];w&&N.push(R("past_value",a.dataType,a.dims));let F=s?R("seq_lens",s.dataType,s.dims):void 0;s&&N.push(F);let Z=u?R("total_sequence_length_input",u.dataType,u.dims):void 0;u&&N.push(Z);let G=[j("output",t.dataType,_)];f&&G.push(j("present_value",t.dataType,g));let U=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${b}u;
  var<workgroup> tileQ: array<${E.type.value}, ${b*b}>;
  var<workgroup> tileV: array<${E.type.value}, ${b*b}>;
  ${z.registerUniforms(U).declareVariables(...N,...G)}
  ${z.mainStart([b,b,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Dr(F,Z,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${w&&f?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${f?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${E.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${w&&f?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${f?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${a!==void 0};${e}`,inputDependencies:S},getRunData:()=>({outputs:k,dispatchGroup:x,programUniforms:v}),getShaderSource:T}},mr=(e,t,r,a,i,n,s,u,l,d,c=void 0,f=void 0)=>{let h=Math.min(e.outputCount,1+(s?1:0)+(u?1:0)),g=h>1?d.pastSequenceLength:0,_=g+d.kvSequenceLength,b=l&&C.size(l.dims)>0?l:void 0,x=[t,r];h>1&&s&&C.size(s.dims)>0&&x.push(s),b&&x.push(b),c&&x.push(c),f&&x.push(f);let v=e.compute(Ho(h,t,r,s,b,d,g,c,f),{inputs:x,outputs:h>1?[-1,1]:[-1]})[0];e.compute(Go(v,d.batchSize,d.numHeads,g,d.sequenceLength,_,c,f),{inputs:c&&f?[v,c,f]:[v],outputs:[]});let w=[v,a];h>1&&u&&C.size(u.dims)>0&&w.push(u),c&&w.push(c),f&&w.push(f),e.compute(Ko(h,v,a,u,d,g,c,f),{inputs:w,outputs:h>1?[0,2]:[0]})},Zo=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],a=t.sequenceLength,i=t.inputHiddenSize,n=t.headSize,s=12,u={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},l=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:a},{type:12,data:i},{type:12,data:n},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],c=f=>{let h=j("output_q",l[0].dataType,r),g=j("output_k",l[0].dataType,r),_=j("output_v",l[0].dataType,r),b=R("input",l[0].dataType,l[0].dims),x=R("weight",l[1].dataType,l[1].dims),v=R("bias",l[2].dataType,l[2].dims),w=b.type.storage,S=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${w}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${w}, ${s*s}>;
  var<workgroup> tileWeightK: array<${w}, ${s*s}>;
  var<workgroup> tileWeightV: array<${w}, ${s*s}>;
  ${f.registerUniforms(S).declareVariables(b,x,v,h,g,_)}
  ${f.mainStart([s,s,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${w}(0);
    var valueK = ${w}(0);
    var valueV = ${w}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:u,programUniforms:d}),getShaderSource:c},{inputs:l,outputs:[-1,-1,-1]})},Up=(e,t)=>{let r=Vo(e.inputs,t),[a,i,n]=Zo(e,r);return mr(e,a,i,n,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),Qo,Xo,Yo,Wp,fg=P(()=>{Xe(),ee(),ae(),$e(),ne(),Qo=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(a,i,n)=>{let s=i.length;if(s!==a.length)throw new Error(`${n}: num dimensions != ${s}`);i.forEach((u,l)=>{if(u!==a[l])throw new Error(`${n}: dim[${l}] do not match`)})};if(e[0].dims.length>1){let a=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,a,"Invalid input scale"),r(e[2].dims,a,"Invalid input B"),r(e[3].dims,a,"Invalid input mean"),r(e[4].dims,a,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},Xo=(e,t)=>{let{epsilon:r,spatial:a,format:i}=t,n=e[0].dims,s=a?ye(n[n.length-1]):1,u=i==="NHWC"&&n.length>1?s:1,l=C.size(n)/s,d=a,c=d?n.length:n,f=R("x",e[0].dataType,e[0].dims,s),h=R("scale",e[1].dataType,e[1].dims,u),g=R("bias",e[2].dataType,e[2].dims,u),_=R("inputMean",e[3].dataType,e[3].dims,u),b=R("inputVar",e[4].dataType,e[4].dims,u),x=j("y",e[0].dataType,c,s),v=()=>{let S="";if(a)S=`let cOffset = ${n.length===1?"0u":i==="NHWC"?`outputIndices[${n.length-1}] / ${s}`:"outputIndices[1]"};`;else if(i==="NCHW")S=`
            ${x.indicesSet("outputIndices","0","0")}
            let cOffset = ${x.indicesToOffset("outputIndices")};`;else{S=`var cIndices = ${h.type.indices}(0);
                       cIndices[0] = outputIndices[${n.length-1}];`;for(let k=1;k<h.rank;k++)S+=`cIndices[${k}] = outputIndices[${k}];`;S+=`let cOffset = ${h.indicesToOffset("cIndices")};`}return S},w=S=>`
  const epsilon = ${r};
  ${S.registerUniform("outputSize","u32").declareVariables(f,h,g,_,b,x)}
  ${S.mainStart()}
  ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${x.offsetToIndices(`global_idx * ${s}`)};
    ${v()}
    let scale = ${h.getByOffset("cOffset")};
    let bias = ${g.getByOffset("cOffset")};
    let inputMean = ${_.getByOffset("cOffset")};
    let inputVar = ${b.getByOffset("cOffset")};
    let x = ${f.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${x.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${a}_${s}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:w,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d?[{type:12,data:l},...K(n)]:[{type:12,data:l}]})}},Yo=e=>pe(e),Wp=(e,t)=>{let{inputs:r,outputCount:a}=e,i=Yo({...t,outputCount:a});if(fe.webgpu.validateInputContent&&Qo(r,i),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Xo(r,i))}}),Jo,eu,Lp,hg=P(()=>{ae(),ne(),Jo=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},eu=e=>{let t=e[0].dims,r=e[0].dims[2],a=C.size(t)/4,i=e[0].dataType,n=R("input",i,t,4),s=R("bias",i,[r],4),u=R("residual",i,t,4),l=j("output",i,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:d=>`
  const channels = ${r}u / 4;
  ${d.declareVariables(n,s,u,l)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let value = ${n.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${u.getByOffset("global_idx")};
    ${l.setByOffset("global_idx","value")}
  }`}},Lp=e=>{Jo(e.inputs),e.compute(eu(e.inputs))}}),tu,de,qp,Fp,jp,Vp,Gp,Hp,Kp,Zp,Qp,ru,Xp,Yp,Jp,ec,pr,tc,Gr,rc,ac,ic,nc,sc,oc,uc,lc,dc,pc,cc,fc,hc,mc,gc,_c,Xa,yc,Pi,Ui,bc,wc,$c,au,iu,vc,mn=P(()=>{ee(),ae(),$e(),ne(),tu=(e,t,r,a,i,n,s)=>{let u=Math.ceil(t/4),l="";typeof i=="string"?l=`${i}(a)`:l=i("a");let d=R("inputData",r,[u],4),c=j("outputData",a,[u],4),f=[{name:"vec_size",type:"u32"}];return s&&f.push(...s),`
      ${e.registerUniforms(f).declareVariables(d,c)}

  ${n??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${c.setByOffset("global_idx",l)}
  }`},de=(e,t,r,a,i,n=e.dataType,s,u)=>{let l=[{type:12,data:Math.ceil(C.size(e.dims)/4)}];return s&&l.push(...s),{name:t,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:d=>tu(d,C.size(e.dims),e.dataType,n,r,a,u),getRunData:d=>({outputs:[{dims:e.dims,dataType:n}],dispatchGroup:{x:Math.ceil(C.size(d[0].dims)/64/4)},programUniforms:l})}},qp=e=>{e.compute(de(e.inputs[0],"Abs","abs"))},Fp=e=>{e.compute(de(e.inputs[0],"Acos","acos"))},jp=e=>{e.compute(de(e.inputs[0],"Acosh","acosh"))},Vp=e=>{e.compute(de(e.inputs[0],"Asin","asin"))},Gp=e=>{e.compute(de(e.inputs[0],"Asinh","asinh"))},Hp=e=>{e.compute(de(e.inputs[0],"Atan","atan"))},Kp=e=>{e.compute(de(e.inputs[0],"Atanh","atanh"))},Zp=e=>pe(e),Qp=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(de(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},ru=e=>{let t,r,a=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=a?e[1].getFloat32Array()[0]:-34028234663852886e22,r=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=a?e[1].getUint16Array()[0]:64511,r=i?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return pe({min:t,max:r})},Xp=(e,t)=>{let r=t||ru(e.inputs),a=Ee(e.inputs[0].dataType);e.compute(de(e.inputs[0],"Clip",i=>`clamp(${i}, vec4<${a}>(uniforms.min), vec4<${a}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:a},{name:"max",type:a}]),{inputs:[0]})},Yp=e=>{e.compute(de(e.inputs[0],"Ceil","ceil"))},Jp=e=>{e.compute(de(e.inputs[0],"Cos","cos"))},ec=e=>{e.compute(de(e.inputs[0],"Cosh","cosh"))},pr=e=>pe(e),tc=(e,t)=>{let r=Ee(e.inputs[0].dataType);e.compute(de(e.inputs[0],"Elu",a=>`elu_vf32(${a})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Gr=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,rc=e=>{let t=Ee(e.inputs[0].dataType);e.compute(de(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,Gr(t)))},ac=e=>{e.compute(de(e.inputs[0],"Exp","exp"))},ic=e=>{e.compute(de(e.inputs[0],"Floor","floor"))},nc=e=>{let t=Ee(e.inputs[0].dataType);e.compute(de(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,Gr(t)))},sc=(e,t)=>{let r=Ee(e.inputs[0].dataType);e.compute(de(e.inputs[0],"LeakyRelu",a=>`select(leaky_relu_alpha_ * ${a}, ${a}, ${a} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},oc=e=>{e.compute(de(e.inputs[0],"Not",t=>`!${t}`))},uc=e=>{e.compute(de(e.inputs[0],"Neg",t=>`-${t}`))},lc=e=>{e.compute(de(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},dc=e=>{let t=Ee(e.inputs[0].dataType);e.compute(de(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},pc=e=>{e.compute(de(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},cc=e=>pe(e),fc=(e,t)=>{let r=Ee(e.inputs[0].dataType);e.compute(de(e.inputs[0],"HardSigmoid",a=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${a} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},hc=e=>{e.compute(de(e.inputs[0],"Sin","sin"))},mc=e=>{e.compute(de(e.inputs[0],"Sinh","sinh"))},gc=e=>{e.compute(de(e.inputs[0],"Sqrt","sqrt"))},_c=e=>{e.compute(de(e.inputs[0],"Tan","tan"))},Xa=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,yc=e=>{e.compute(de(e.inputs[0],"Tanh",Xa))},Pi=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Xa("v")};
}
`,Ui=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,bc=e=>{let t=Ee(e.inputs[0].dataType);e.compute(de(e.inputs[0],"FastGelu",Ui,Pi(t),void 0,e.inputs[0].dataType))},wc=(e,t)=>{let r=Ee(e.inputs[0].dataType);return e.compute(de(e.inputs[0],"ThresholdedRelu",a=>`select(vec4<${r}>(0.0), ${a}, ${a} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},$c=e=>{e.compute(de(e.inputs[0],"Log","log"))},au=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,iu=e=>`quick_gelu_impl(${e})`,vc=(e,t)=>{let r=Ee(e.inputs[0].dataType);e.compute(de(e.inputs[0],"QuickGelu",iu,au(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),nu,su,xc,mg=P(()=>{ae(),ne(),mn(),nu=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},su=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=R("input",e[0].dataType,e[0].dims,4),a=R("bias",e[0].dataType,[e[0].dims[2]],4),i=j("output",e[0].dataType,t,4),n=C.size(t)/4,s=Se(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)}}),getShaderSource:u=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${u.declareVariables(r,a,i)}

  ${Gr(s)}

  ${u.mainStart()}
    ${u.guardAgainstOutOfBoundsWorkgroupSizes(n)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},xc=e=>{nu(e.inputs),e.compute(su(e.inputs))}}),ou,uu,Ke,kc,Sc,Tc,Ic,Ec,zc,Cc,Ac,Oc,Mc,gg=P(()=>{ee(),ae(),ne(),ou=(e,t,r,a,i,n,s,u,l,d,c,f)=>{let h,g;typeof u=="string"?h=g=(w,S)=>`${u}((${w}),(${S}))`:typeof u=="function"?h=g=u:(h=u.scalar,g=u.vector);let _=j("outputData",c,a.length,4),b=R("aData",l,t.length,4),x=R("bData",d,r.length,4),v;if(i)if(n){let w=C.size(t)===1,S=C.size(r)===1,k=t.length>0&&t[t.length-1]%4===0,T=r.length>0&&r[r.length-1]%4===0;w||S?v=_.setByOffset("global_idx",g(w?`${b.type.value}(${b.getByOffset("0")}.x)`:b.getByOffset("global_idx"),S?`${x.type.value}(${x.getByOffset("0")}.x)`:x.getByOffset("global_idx"))):v=`
            let outputIndices = ${_.offsetToIndices("global_idx * 4u")};
            let offsetA = ${b.broadcastedIndicesToOffset("outputIndices",_)};
            let offsetB = ${x.broadcastedIndicesToOffset("outputIndices",_)};
            ${_.setByOffset("global_idx",g(s||k?b.getByOffset("offsetA / 4u"):`${b.type.value}(${b.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||T?x.getByOffset("offsetB / 4u"):`${x.type.value}(${x.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else v=_.setByOffset("global_idx",g(b.getByOffset("global_idx"),x.getByOffset("global_idx")));else{if(!n)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let w=(S,k,T="")=>{let z=`aData[indexA${k}][componentA${k}]`,E=`bData[indexB${k}][componentB${k}]`;return`
            let outputIndices${k} = ${_.offsetToIndices(`global_idx * 4u + ${k}u`)};
            let offsetA${k} = ${b.broadcastedIndicesToOffset(`outputIndices${k}`,_)};
            let offsetB${k} = ${x.broadcastedIndicesToOffset(`outputIndices${k}`,_)};
            let indexA${k} = offsetA${k} / 4u;
            let indexB${k} = offsetB${k} / 4u;
            let componentA${k} = offsetA${k} % 4u;
            let componentB${k} = offsetB${k} % 4u;
            ${S}[${k}] = ${T}(${h(z,E)});
          `};c===9?v=`
            var data = vec4<u32>(0);
            ${w("data",0,"u32")}
            ${w("data",1,"u32")}
            ${w("data",2,"u32")}
            ${w("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:v=`
            ${w("outputData[global_idx]",0)}
            ${w("outputData[global_idx]",1)}
            ${w("outputData[global_idx]",2)}
            ${w("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(b,x,_)}

        ${f??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${v}
      }`},uu=(e,t,r,a,i,n,s=r.dataType)=>{let u=r.dims.map(b=>Number(b)??1),l=a.dims.map(b=>Number(b)??1),d=!C.areEqual(u,l),c=u,f=C.size(u),h=!1,g=!1,_=[d];if(d){let b=jt.calcShape(u,l,!1);if(!b)throw new Error("Can't perform binary op on the given tensors");c=b.slice(),f=C.size(c);let x=C.size(u)===1,v=C.size(l)===1,w=u.length>0&&u[u.length-1]%4===0,S=l.length>0&&l[l.length-1]%4===0;_.push(x),_.push(v),_.push(w),_.push(S);let k=1;for(let T=1;T<c.length;T++){let z=u[u.length-T],E=l[l.length-T];if(z===E)k*=z;else break}k%4===0?(g=!0,h=!0):(x||v||w||S)&&(h=!0)}else h=!0;return _.push(h),{name:e,shaderCache:{hint:t+_.map(b=>b.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:b=>ou(b,u,l,c,h,d,g,i,r.dataType,a.dataType,s,n),getRunData:()=>({outputs:[{dims:c,dataType:s}],dispatchGroup:{x:Math.ceil(f/64/4)},programUniforms:[{type:12,data:Math.ceil(C.size(c)/4)},...K(u,l,c)]})}},Ke=(e,t,r,a,i,n)=>{e.compute(uu(t,i??"",e.inputs[0],e.inputs[1],r,a,n))},kc=e=>{Ke(e,"Add",(t,r)=>`${t}+${r}`)},Sc=e=>{Ke(e,"Div",(t,r)=>`${t}/${r}`)},Tc=e=>{Ke(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},Ic=e=>{Ke(e,"Mul",(t,r)=>`${t}*${r}`)},Ec=e=>{let t=R("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Ke(e,"Pow",{scalar:(r,a)=>`pow_custom(${r},${a})`,vector:(r,a)=>`pow_vector_custom(${r},${a})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},zc=e=>{Ke(e,"Sub",(t,r)=>`${t}-${r}`)},Cc=e=>{Ke(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},Ac=e=>{Ke(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},Oc=e=>{Ke(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},Mc=e=>{Ke(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),lu,du,pu,cu,Rc,Bc,_g=P(()=>{ee(),ae(),$e(),ne(),lu=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,a=e[r],i=a.dataType,n=a.dims.length;e.forEach((s,u)=>{if(u!==r){if(s.dataType!==i)throw new Error("input tensors should be one type");if(s.dims.length!==n)throw new Error("input tensors should have the same shape");s.dims.forEach((l,d)=>{if(d!==t&&l!==a.dims[d])throw new Error("non concat dimensions must match")})}})},du=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,pu=(e,t)=>{let r=e.length,a=[];for(let i=0;i<r;++i){let n=t.setByOffset("global_idx",e[i].getByIndices("indices"));r===1?a.push(n):i===0?a.push(`if (inputIndex == ${i}u) { ${n} }`):i===r-1?a.push(`else { ${n} }`):a.push(`else if (inputIndex == ${i}) { ${n} }`)}return a.join(`
`)},cu=(e,t,r,a)=>{let i=C.size(r),n=new Array(e.length),s=new Array(e.length),u=0,l=[],d=[],c=[{type:12,data:i}];for(let b=0;b<e.length;++b)u+=e[b].dims[t],n[b]=u,d.push(e[b].dims.length),s[b]=R(`input${b}`,a,d[b]),l.push("rank"),c.push({type:12,data:n[b]});for(let b=0;b<e.length;++b)c.push(...K(e[b].dims));c.push(...K(r));let f=j("output",a,r.length),h=f.indicesGet("indices",t),g=Array.from(Array(n.length).keys()).map(b=>`uniforms.sizeInConcatAxis${b}`).join(","),_=b=>`

  ${(()=>{b.registerUniform("outputSize","u32");for(let x=0;x<e.length;x++)b.registerUniform(`sizeInConcatAxis${x}`,"u32");return b.declareVariables(...s,f)})()}

  ${du(n.length,g)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${f.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${h});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${n.length}u>(${g});
      ${h} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${pu(s,f)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:a}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:c}),getShaderSource:_}},Rc=(e,t)=>{let r=e.inputs,a=r[0].dims,i=C.normalizeAxis(t.axis,a.length);lu(r,i);let n=a.slice();n[i]=r.reduce((u,l)=>u+(l.dims.length>i?l.dims[i]:0),0);let s=r.filter(u=>C.size(u.dims)>0);e.compute(cu(s,i,n,r[0].dataType),{inputs:s})},Bc=e=>pe({axis:e.axis})}),At,Ot,Mt,gn,Nt=P(()=>{ee(),ae(),At=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Ot=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Mt=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},gn=e=>{let t=e?.activation||"";if(t==="HardSigmoid"){let[r,a]=e?.activation_params||[.2,.5];return{activation:t,alpha:r,beta:a}}else if(t==="Clip"){let[r,a]=e?.activation_params||[op,up];return{activation:t,clipMax:a,clipMin:r}}else if(t==="LeakyRelu"){let[r]=e?.activation_params||[.01];return{activation:t,alpha:r}}return{activation:t}}}),Te,Nc,_n=P(()=>{Te=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},Nc=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Dc,yg=P(()=>{Dc=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),fr,yn,bn=P(()=>{ee(),ae(),ne(),Nt(),fr=(e,t,r,a,i)=>{let n=a-r;return`
      ${Array.from({length:r}).map((s,u)=>`
      if (${V(t.shape,u,t.rank)} != 1) {
        ${t.indicesSet(e,u,V(i,u+n,a))}
      } else {
        ${t.indicesSet(e,u,0)}
      }`).join("")}
`},yn=(e,t,r,a,i=!1,n)=>{let s=e[0].dims,u=e[1].dims,l=s[s.length-2],d=u[u.length-1],c=s[s.length-1],f=ye(d),h=ye(c),g=ye(l),_=C.size(r)/f/g,b=e.length>2,x=a?a.slice(0,-2):r.slice(0,-2),v=[C.size(x),l,d],w=[{type:12,data:_},{type:12,data:l},{type:12,data:d},{type:12,data:c}];Ot(t,w),w.push(...K(x,s,u)),b&&w.push(...K(e[2].dims)),w.push(...K(v));let S=k=>{let T=cn("batch_dims",e[0].dataType,x.length),z=R("a",e[0].dataType,s.length,h),E=R("b",e[1].dataType,u.length,f),O=j("output",e[0].dataType,v.length,f),N=Se(O.type.tensor),F=At(t,O.type.value,N),Z=[z,E],G="";if(b){let oe=i?f:1;Z.push(R("bias",e[2].dataType,e[2].dims.length,oe)),G=`${i?`value += bias[col / ${oe}];`:`value += ${O.type.value}(bias[row + i]);`}`}let U=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Mt(t,U);let J=()=>{let oe=`var a_data: ${z.type.value};`;for(let q=0;q<h;q++)oe+=`
              let b_data${q} = b[(b_offset + (k + ${q}) * uniforms.N + col) / ${f}];`;for(let q=0;q<g;q++){oe+=`a_data = a[(a_offset + (row + ${q}) * uniforms.K + k) / ${h}];`;for(let Y=0;Y<h;Y++)oe+=`
            values[${q}] = fma(${E.type.value}(a_data${h===1?"":`[${Y}]`}), b_data${Y}, values[${q}]);
`}return oe};return`
  ${k.registerUniforms(U).registerInternalVariables(T).declareVariables(...Z,O)}
  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${f})) * ${f};
    var index1 = global_idx / (uniforms.N / ${f});
    let stride1 = uniforms.M / ${g};
    let row = (index1 % stride1) * ${g};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${T.offsetToIndices("batch")};`}

    var a_indices: ${z.type.indices};
    ${fr("a_indices",z,z.rank-2,T.rank,"batch_indices")}
    ${z.indicesSet("a_indices",z.rank-2,0)}
    ${z.indicesSet("a_indices",z.rank-1,0)}
    let a_offset = ${z.indicesToOffset("a_indices")};

    var b_indices: ${E.type.indices};
    ${fr("b_indices",E,E.rank-2,T.rank,"batch_indices")}
    ${E.indicesSet("b_indices",E.rank-2,0)}
    ${E.indicesSet("b_indices",E.rank-1,0)}
    let b_offset = ${E.indicesToOffset("b_indices")};
    var values: array<${O.type.value}, ${g}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${h}) {
      ${J()}
    }
    for (var i = 0u; i < ${g}u; i++) {
      var value = values[i];
      ${G}
      ${F}
      let cur_indices = ${O.type.indices}(batch, row + i, col);
      let offset = ${O.indicesToOffset("cur_indices")};
      ${O.setByOffset(`offset / ${f}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${f};${h};${g};${i}`,inputDependencies:b?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:w}),getShaderSource:S}}}),fu,hu,Wi,Ya,mu,Li,gu,ea,wn=P(()=>{ee(),ae(),ne(),Nt(),bn(),_n(),fu=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,hu=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,Wi=(e,t,r="f32",a,i=!1,n=32,s=!1,u=32)=>{let l=t[1]*e[1],d=t[0]*e[0],c=i?l:n,f=i?n:l,h=c/t[0],g=n/t[1];if(!((i&&h===4&&e[1]===4||!i&&(h===3||h===4))&&c%t[0]===0&&n%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${i} is true, innerElementSize ${h} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${h} must be 3 or 4.
  tileAWidth ${c} must be divisible by workgroupSize[0]${t[0]}. tileInner ${n} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${h}<${r}>, ${c/h}>, ${f}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${d/e[0]}>, ${n}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${h};
const tileInner = ${n};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${s?"0":"i32(globalId.z)"};
  ${a?`let batchIndices = ${a.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${l};

  let num_tiles = ${s?`${Math.ceil(u/n)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${s?`i32(globalId.z) * ${u}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${g};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${fu(i,a)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${g}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${a?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${h===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${hu(i,h)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Ya=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,mu=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Li=(e,t,r="f32",a,i=!1,n=32,s=!1,u=32,l=!1)=>{let d=e[1]*t[1],c=e[0]*t[0],f=i?d:n,h=i?n:d;if(!(h%t[1]===0&&f%t[0]===0&&n%t[1]===0))throw new Error(`tileAHight ${h} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${f} must be divisible by workgroupSize[0]${t[0]}, tileInner ${n} must be divisible by workgroupSize[1]${t[1]}`);let g=h/t[1],_=f/t[0],b=n/t[1],x=l?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${c};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${h}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${f}; inputCol = inputCol + ${t[0]}) {
          ${Ya(i,a)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${n}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${a?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${i?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${d};

let tileRowA = i32(localId.y) * ${g};
let tileColA = i32(localId.x) * ${_};
let tileRowB = i32(localId.y) * ${b};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${g}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${_}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Ya(i,a)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${b}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${a?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${mu(i)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${f}>, ${h}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${c}>, ${n}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${n};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${s?"0":"i32(globalId.z)"};
    ${a?`let batchIndices = ${a.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${s?`${Math.ceil(u/n)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${s?`i32(globalId.z) * ${u}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${x}
  }
`},gu=(e,t,r,a,i=!1)=>{let[n,s,u,l]=a,d=Se(a[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${n.type.indices}) -> ${Te(e,d)} {
      var value = ${Te(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${fr("aIndices",s,s.rank-2,n.rank,"batchIndices")}
        ${s.indicesSet("aIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("aIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${n.type.indices}) -> ${Te(e,d)} {
      var value = ${Te(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${u.type.indices};
        ${fr("bIndices",u,u.rank-2,n.rank,"batchIndices")}
        ${u.indicesSet("bIndices",u.rank-2,"u32(row)")}
        ${u.indicesSet("bIndices",u.rank-1,"u32(colIn)")}
        value = ${u.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Te(e,d)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${i?"bias[colIn]":`${Te(e,d)}(bias[row])`};`:""}
        ${r}
        ${l.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},ea=(e,t,r,a,i=!1,n)=>{let s=e[0].dims,u=e[1].dims,l=s.slice(0,-2),d=u.slice(0,-2),c=a?a.slice(0,-2):r.slice(0,-2),f=C.size(c),h=s[s.length-2],g=s[s.length-1],_=u[u.length-1],b=g%4===0&&_%4===0,x=h<=8?[4,1,1]:[4,4,1],v=[8,8,1],w=[Math.ceil(_/v[0]/x[0]),Math.ceil(h/v[1]/x[1]),Math.ceil(f/v[2]/x[2])],S=b?4:1,k=[...l,h,g/S],T=k.length,z=[...d,g,_/S],E=z.length,O=[f,h,_/S],N=[{type:6,data:h},{type:6,data:_},{type:6,data:g}];Ot(t,N),N.push(...K(c,k,z));let F=["rank","rank"],Z=e.length>2;Z&&(N.push(...K(e[2].dims)),F.push("rank")),N.push(...K(O));let G=U=>{let J=c.length,oe=cn("batchDims",e[0].dataType,J,1),q=Se(e[0].dataType),Y=R("a",e[0].dataType,T,S),re=R("b",e[1].dataType,E,S),X=j("result",e[0].dataType,O.length,S),he=[Y,re];if(Z){let ie=i?S:1;he.push(R("bias",e[2].dataType,e[2].dims.length,ie))}let B=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Mt(t,B);let L=Se(X.type.tensor),te=At(t,X.type.value,L),A=gu(S,Z,te,[oe,Y,re,X],i);return`
  ${U.registerUniforms(B).registerInternalVariables(oe).declareVariables(...he,X)}
  ${A}
  ${b?Wi(x,v,q,oe):Li(x,v,q,oe)}
                   `};return{name:"MatMul",shaderCache:{hint:`${x};${t.activation};${b};${i}`,inputDependencies:F},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:w[0],y:w[1],z:w[2]},programUniforms:N}),getShaderSource:G}}}),_u,Pc,bg=P(()=>{ee(),dt(),ne(),Nt(),_n(),yg(),wn(),_u=(e,t,r,a,i=!1,n,s=4,u=4,l=4,d="f32")=>{let c=N=>{switch(N){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${N} is not supported.`)}},f=N=>{switch(N){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${N} is not supported.`)}},h=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,g=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,_=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",b=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",x=e?"row":"col",v=e?"col":"row",w=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${x} / outWidth;
    let outCol = ${x} % outWidth;

    let WRow = ${v} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${v} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${v} % inChannels;
    var resData = ${Te(s,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${_} && xCol >= 0 && xCol < ${b}) {
      ${h}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${c(s)}
    }
    return resData;`,S=e?t&&a?`
    let col = colIn * ${s};
    ${w}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${w}
    }
    return ${Te(s,d)}(0.0);`:a&&r?`
    let col = colIn * ${s};
    ${w}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${w}
    }
    return ${Te(s,d)}(0.0);`,k=e?a&&r?f(u):`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${f(u)}
    }
    return ${Te(u,d)}(0.0);`:`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${f(u)}
    }
    return ${Te(u,d)}(0.0);`,T=Te(l,d),z=Te(e?s:u,d),E=Te(e?u:s,d),O=At(n,T,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${z} {
      ${e?S:k}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${E} {
      ${e?k:S}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${T}) {
      let col = colIn * ${l};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${g}
      ${Nc(i)}
      ${O}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},Pc=(e,t,r,a,i,n,s,u,l)=>{let d=t.format==="NHWC",c=d?e[0].dims[3]:e[0].dims[1],f=r[0],h=d?r[2]:r[3],g=d?r[1]:r[2],_=d?r[3]:r[1],b=d&&(c%4===0||c%3===0)&&_%4===0,x=d?_:h*g,v=d?h*g:_,w=[8,8,1],S=a<=8?[4,1,1]:[4,4,1],k=[Math.ceil(x/w[0]/S[0]),Math.ceil(v/w[1]/S[1]),Math.ceil(f/w[2]/S[2])];ue("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${k}`);let T=b?d&&c%4!==0?3:4:1,z=w[1]*S[1],E=w[0]*S[0],O=Math.max(w[0]*T,w[1]),N=a%z===0,F=i%E===0,Z=n%O===0,G=b?[T,4,4]:[1,1,1],U=[{type:6,data:a},{type:6,data:i},{type:6,data:n},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Ot(t,U),U.push(...K(e[0].dims,e[1].dims));let J=["rank","rank"];s&&(U.push(...K(e[2].dims)),J.push("rank")),U.push(...K(r));let oe=q=>{let Y=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Mt(t,Y);let re=b?4:1,X=Se(e[0].dataType),he=`
      fn setOutputAtIndex(flatIndex : i32, value : ${b?`vec4<${X}>`:X}) {
        result[flatIndex] = ${b?`vec4<${X}>`:X}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${b?`vec4<${X}>`:X}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${b?"/ 4":""}, value);
      }`,B=R("x",e[0].dataType,e[0].dims.length,T===3?1:T),L=R("w",e[1].dataType,e[1].dims.length,re),te=[B,L],A=j("result",e[0].dataType,r.length,re);if(s){let ie=R("bias",e[2].dataType,e[2].dims.length,re);te.push(ie),he+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${b?`vec4<${X}>`:X} {
          return bias[coords.${d?"w":"y"}${b?"/ 4":""}];
        }`}return`
        ${Dc("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${q.registerUniforms(Y).declareVariables(...te,A)}
        ${he}
        ${_u(d,N,F,Z,s,t,G[0],G[1],G[2],X)}
        ${b?Wi(S,w,X,void 0,!d,O):Li(S,w,X,void 0,!d,O,!1,void 0,u)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${T};${b};${N};${F};${Z};${z};${E};${O}`,inputDependencies:J},getRunData:()=>({outputs:[{dims:l?l(r):r,dataType:e[0].dataType}],dispatchGroup:{x:k[0],y:k[1],z:k[2]},programUniforms:U}),getShaderSource:oe}}}),yu,Ja,rr,bu,ei,wu,Uc,Wc,wg=P(()=>{ee(),dt(),ae(),ne(),Nt(),_n(),yu=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},Ja=e=>typeof e=="number"?[e,e,e]:e,rr=(e,t)=>t<=1?e:e+(e-1)*(t-1),bu=(e,t,r,a=1)=>{let i=rr(t,a);return Math.floor((e[0]*(r-1)-r+i)/2)},ei=(e,t,r,a,i)=>{i==null&&(i=bu(e,t[0],a[0]));let n=[0,0,0,r];for(let s=0;s<3;s++)e[s]+2*i>=t[s]&&(n[s]=Math.trunc((e[s]-t[s]+2*i)/a[s]+1));return n},wu=(e,t,r,a,i,n,s,u,l,d)=>{let c,f,h,g;if(e==="VALID"&&(e=0),typeof e=="number"){c={top:e,bottom:e,left:e,right:e,front:e,back:e};let _=ei([t,r,a,1],[u,l,d],1,[i,n,s],e);f=_[0],h=_[1],g=_[2]}else if(Array.isArray(e)){if(!e.every((b,x,v)=>b===v[0]))throw Error(`Unsupported padding parameter: ${e}`);c={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let _=ei([t,r,a,1],[u,l,d],1,[i,n,s],e[0]);f=_[0],h=_[1],g=_[2]}else if(e==="SAME_UPPER"){f=Math.ceil(t/i),h=Math.ceil(r/n),g=Math.ceil(a/s);let _=(f-1)*i+u-t,b=(h-1)*n+l-r,x=(g-1)*s+d-a,v=Math.floor(_/2),w=_-v,S=Math.floor(b/2),k=b-S,T=Math.floor(x/2),z=x-T;c={top:S,bottom:k,left:T,right:z,front:v,back:w}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:c,outDepth:f,outHeight:h,outWidth:g}},Uc=(e,t,r,a,i,n=!1,s="channelsLast")=>{let u,l,d,c,f;if(s==="channelsLast")[u,l,d,c,f]=e;else if(s==="channelsFirst")[u,f,l,d,c]=e;else throw new Error(`Unknown dataFormat ${s}`);let[h,,g,_,b]=t,[x,v,w]=Ja(r),[S,k,T]=Ja(a),z=rr(g,S),E=rr(_,k),O=rr(b,T),{padInfo:N,outDepth:F,outHeight:Z,outWidth:G}=wu(i,l,d,c,x,v,w,z,E,O),U=n?h*f:h,J=[0,0,0,0,0];return s==="channelsFirst"?J=[u,U,F,Z,G]:s==="channelsLast"&&(J=[u,F,Z,G,U]),{batchSize:u,dataFormat:s,inDepth:l,inHeight:d,inWidth:c,inChannels:f,outDepth:F,outHeight:Z,outWidth:G,outChannels:U,padInfo:N,strideDepth:x,strideHeight:v,strideWidth:w,filterDepth:g,filterHeight:_,filterWidth:b,effectiveFilterDepth:z,effectiveFilterHeight:E,effectiveFilterWidth:O,dilationDepth:S,dilationHeight:k,dilationWidth:T,inShape:e,outShape:J,filterShape:t}},Wc=(e,t,r,a,i,n)=>{let s=n==="channelsLast";s?e[0].dims[3]:e[0].dims[1];let u=[64,1,1],l={x:r.map((x,v)=>v)},d=[Math.ceil(yu(l.x.map(x=>r[x]))/u[0]),1,1];ue("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${d}`);let c=1,f=C.size(r),h=[{type:12,data:f},{type:12,data:a},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];Ot(t,h),h.push(...K(e[0].dims,e[1].dims));let g=["rank","rank"],_=e.length===3;_&&(h.push(...K(e[2].dims)),g.push("rank")),h.push(...K(r));let b=x=>{let v=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:a.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Mt(t,v);let w=1,S=Se(e[0].dataType),k=R("x",e[0].dataType,e[0].dims.length,c),T=R("W",e[1].dataType,e[1].dims.length,w),z=[k,T],E=j("result",e[0].dataType,r.length,w),O="";if(_){let Z=R("bias",e[2].dataType,e[2].dims.length,w);z.push(Z),O+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${S} {
          return bias[${s?V("coords",4,5):V("coords",1,5)}];
        }`}let N=Te(c,S),F=At(t,N,S);return`
            ${O}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${k.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${T.getByIndices("aIndices")};
            }
          ${x.registerUniforms(v).declareVariables(...z,E)}
          ${x.mainStart()}
          ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${E.offsetToIndices("global_idx")};
              let batch = ${V("coords",0,k.rank)};
              let d2 = ${s?V("coords",k.rank-1,k.rank):V("coords",1,k.rank)};
              let xFRCCorner = vec3<u32>(${s?V("coords",1,k.rank):V("coords",2,k.rank)},
              ${s?V("coords",2,k.rank):V("coords",3,k.rank)},
              ${s?V("coords",3,k.rank):V("coords",4,k.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?V("uniforms.x_shape",1,k.rank):V("uniforms.x_shape",2,k.rank)};
              let xShapeZ = ${s?V("uniforms.x_shape",2,k.rank):V("uniforms.x_shape",3,k.rank)};
              let xShapeW = ${s?V("uniforms.x_shape",3,k.rank):V("uniforms.x_shape",4,k.rank)};
              let xShapeU = ${s?V("uniforms.x_shape",4,k.rank):V("uniforms.x_shape",1,k.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${s?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${s?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${s?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${s?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${_?"value = value + getBiasByOutputCoords(coords)":""};
              ${F}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${c};${_}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:d[0],y:d[1],z:d[2]},programUniforms:h}),getShaderSource:b}}}),Lc,qc,$g=P(()=>{ee(),ae(),ne(),Nt(),Lc=(e,t,r,a)=>{let i=e.length>2,n=i?"value += b[output_channel];":"",s=e[0].dims,u=e[1].dims,l=t.format==="NHWC",d=l?r[3]:r[1],c=d/t.group,f=l&&c>=4?ye(d):1,h=C.size(r)/f,g=[{type:12,data:h},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:c}];Ot(t,g),g.push(...K(s,[u[0],u[1],u[2],u[3]/f]));let _=i?["rank","rank","rank"]:["rank","rank"];g.push(...K([r[0],r[1],r[2],r[3]/f]));let b=x=>{let v=j("output",e[0].dataType,r.length,f),w=Se(v.type.tensor),S=At(t,v.type.value,w),k=R("x",e[0].dataType,s.length),T=R("w",e[1].dataType,u.length,f),z=[k,T];i&&z.push(R("b",e[2].dataType,e[2].dims,f));let E=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Mt(t,E);let O=l?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${k.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${T.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${k.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${T.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${x.registerUniforms(E).declareVariables(...z,v)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${v.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${l?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${l?1:2}], outputIndices[${l?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${f} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${l?2:1}];

    var value: ${v.type.value} = ${v.type.value}(0);
    ${O}
    ${n}
    ${S}
    ${v.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${f}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:g}),getShaderSource:b}},qc=(e,t,r,a)=>{let i=e.length>2,n=ye(r[3]),s=ye(r[2]),u=C.size(r)/n/s,l=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/n],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/n],c=[r[0],r[1],r[2],r[3]/n],f=[{type:12,data:u},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Ot(t,f),f.push(...K(l,d,c));let h=(s-1)*t.strides[1]+d[1],g=_=>{let b=j("output",e[0].dataType,c.length,n),x=Se(b.type.tensor),v=At(t,b.type.value,x),w=R("x",e[0].dataType,l.length,n),S=R("w",e[1].dataType,d.length,n),k=[w,S];i&&k.push(R("b",e[2].dataType,e[2].dims,n));let T=i?"value += b[output_channel];":"",z=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Mt(t,z),`
  ${_.registerUniforms(z).declareVariables(...k,b)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${s}u;
    let col = (index1 % width1) * ${s}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${w.type.value}, ${h}>;
    var values: array<${b.type.value}, ${s}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${d[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${h}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${w.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${w.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${d[1]}; w_width++) {
          let w_val = ${S.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${s}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${s}u; i++) {
      var value = values[i];
      ${T}
      ${v}
      ${b.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${n};${s};${h};${d[0]};${d[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:f}),getShaderSource:g}}}),$u,Pr,vu,Ur,qi,ti,xu,ku,Fi,vg=P(()=>{ae(),bg(),wg(),wn(),$g(),Nt(),bn(),$t(),$u=(e,t,r,a,i,n)=>{let s=e[0],u=e.slice(n?1:2,n?3:4),l=u.length,d=t[0],c=t.slice(2).map((h,g)=>h+(h-1)*(r[g]-1)),f=u.map((h,g)=>h+a[g]+a[g+l]).map((h,g)=>Math.floor((h-c[g]+i[g])/i[g]));return f.splice(0,0,s),f.splice(n?3:1,0,d),f},Pr=[2,3,1,0],vu=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],a=e[1].dims[1]*t.group;if(r!==a)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Ur=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let n=2;n<t[1].dims.length;++n)r[n-2]===0&&(r[n-2]=t[1].dims[n]);let a=e.pads.slice();Yr.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,a,e.format==="NHWC",e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:r,pads:a}),i},qi=e=>{let t=gn(e),r=e.format,a=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],i=e.dilations,n=e.group,s=e.kernel_shape,u=e.pads,l=e.strides,d=e.w_is_const();return{autoPad:a,format:r,dilations:i,group:n,kernelShape:s,pads:u,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},ti=(e,t,r,a)=>{let i=r.format==="NHWC",n=$u(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,i);if(r.group!==1){let z=[t[0]];if(i){let E=e.kernelCustomData.wT??e.compute(Be(t[1],Pr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=E),z.push(E)}else z.push(t[1]);t.length===3&&z.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&i&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(qc(z,r,n,a),{inputs:z}):e.compute(Lc(z,r,n,a),{inputs:z});return}let s=t.length===3,u=t[0].dims[i?1:2],l=t[0].dims[i?2:3],d=t[0].dims[i?3:1],c=t[1].dims[2],f=t[1].dims[3],h=n[i?1:2],g=n[i?2:3],_=n[i?3:1],b=i&&c===u&&f===l&&r.pads[0]===0&&r.pads[1]===0;if(b||c===1&&f===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let z=n[0],E,O,N,F=[];if(i){let U=e.kernelCustomData.wT??e.compute(Be(t[1],Pr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=U),b){let J=u*l*d;E=t[0].reshape([1,z,J]),O=U.reshape([1,J,_]),N=[1,z,_]}else E=t[0].reshape([z,u*l,d]),O=U.reshape([1,d,_]),N=[z,h*g,_];F.push(E),F.push(O)}else E=t[0].reshape([z,d,u*l]),O=t[1].reshape([1,_,d]),N=[z,_,h*g],F.push(O),F.push(E);s&&F.push(t[2]);let Z=N[2],G=F[0].dims[F[0].dims.length-1];Z<8&&G<8?e.compute(yn(F,r,n,N,i,a),{inputs:F}):e.compute(ea(F,r,n,N,i,a),{inputs:F});return}let x=!0,v=e.kernelCustomData.wT??e.compute(Be(t[1],Pr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=v);let w=[t[0],v];s&&w.push(t[2]);let S=i?h*g:_,k=i?_:h*g,T=c*f*d;e.compute(Pc(w,r,n,S,k,T,s,x,a),{inputs:w})},xu=(e,t)=>{let r=t.format==="NHWC",a=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&a.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],n=[1].concat(t.strides),s=[1].concat(t.dilations),u=[1].concat(t.kernelShape),l=Ur({...t,pads:i,strides:n,dilations:s,kernelShape:u},a);ti(e,a,l,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},ku=(e,t,r)=>{let a=r.format==="NHWC"?"channelsLast":"channelsFirst",i=Ur(r,t),n=r.autoPad==="NOTSET"?r.pads:r.autoPad,s=Uc(t[0].dims,t[1].dims,r.strides,r.dilations,n,!1,a);e.compute(Wc(t,i,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],a))},Fi=(e,t)=>{if(vu(e.inputs,t),e.inputs[0].dims.length===3)xu(e,t);else if(e.inputs[0].dims.length===5)ku(e,e.inputs,t);else{let r=Ur(t,e.inputs);ti(e,e.inputs,r)}}}),Fc,xg=P(()=>{ee(),dt(),ae(),ne(),Fc=(e,t,r)=>{let a=e.length>2,i=t.outputShape,n=t.format==="NHWC",s=t.group,u=e[1].dims,l=u[2]/s,d=u[3],c=n?ye(l):1,f=n&&d===1&&l>=4,h=f?Math.floor(l/4)*4:Math.floor(l/c)*c,g=l-h,_=n?ye(d):1,b=n?d===1?c:_:1,x=C.size(i)/_,v=[Math.ceil(x/64),1,1];ue("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${v}`);let w=["rank","rank"],S=[t.strides[0],t.strides[1]],k=[t.kernelShape[n?1:2],t.kernelShape[n?2:3]],T=[t.dilations[0],t.dilations[1]],z=[k[0]+(t.dilations[0]<=1?0:(t.kernelShape[n?1:2]-1)*(t.dilations[0]-1)),k[1]+(t.dilations[1]<=1?0:(t.kernelShape[n?2:3]-1)*(t.dilations[1]-1))],E=[z[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),z[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],O=[{type:12,data:x},{type:12,data:S},{type:12,data:k},{type:12,data:T},{type:12,data:z},{type:6,data:E},{type:12,data:h},{type:12,data:l},{type:12,data:d},...K(e[0].dims,e[1].dims)];a&&(O.push(...K(e[2].dims)),w.push("rank")),O.push(...K(i));let N=F=>{let Z=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:S.length},{name:"filter_dims",type:"u32",length:k.length},{name:"dilations",type:"u32",length:k.length},{name:"effective_filter_dims",type:"u32",length:z.length},{name:"pads",type:"i32",length:E.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],G=Se(e[0].dataType),U=n?1:2,J=n?2:3,oe=n?3:1,q=R("W",e[1].dataType,e[1].dims.length,b),Y=R("Dy",e[0].dataType,e[0].dims.length,c),re=[Y,q];a&&re.push(R("bias",e[2].dataType,[i[oe]].length,_));let X=j("result",e[0].dataType,i.length,_),he=()=>{let te="";if(f)c===4?te+=`
        let xValue = ${Y.getByOffset("x_offset")};
        let wValue = ${q.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:c===2?te+=`
          dotProd = dotProd + dot(vec4<${G}>(${Y.getByOffset("x_offset")}, ${Y.getByOffset("x_offset + 1u")}), vec4<${G}>(${q.getByOffset("w_offset")}, ${q.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:c===1&&(te+=`
          dotProd = dotProd + dot(vec4<${G}>(${Y.getByOffset("x_offset")}, ${Y.getByOffset("x_offset + 1u")}, ${Y.getByOffset("x_offset + 2u")}, ${Y.getByOffset("x_offset + 3u")}), vec4<${G}>(${q.getByOffset("w_offset")}, ${q.getByOffset("w_offset + 1u")}, ${q.getByOffset("w_offset + 2u")}, ${q.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(te+=`
                  let xValue = ${n?Y.getByOffset(`${Y.indicesToOffset(`${Y.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c}`):Y.get("batch","inputChannel","idyR","idyC")};
        `,c===1)te+=`
          let w_offset = ${q.indicesToOffset(`${q.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${q.getByOffset(`w_offset / ${b}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let A=0;A<c;A++)te+=`
            let wValue${A} = ${q.getByOffset(`${q.indicesToOffset(`${q.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${A}, wOutChannel)`)} / ${b}`)};
            dotProd = dotProd + xValue[${A}] * wValue${A};`;return te},B=()=>{if(g===0)return"";if(!f)throw new Error(`packInputAs4 ${f} is not true.`);let te="";if(c===1){te+="dotProd = dotProd";for(let A=0;A<g;A++)te+=`
            + ${Y.getByOffset(`x_offset + ${A}`)} * ${q.getByOffset(`w_offset + ${A}`)}`;te+=";"}else if(c===2){if(g!==2)throw new Error(`Invalid inputChannelsRemainder ${g}.`);te+=`
          let xValue = ${Y.getByOffset("x_offset")};
          let wValue = ${q.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return te},L=`
            let outputIndices = ${X.offsetToIndices(`global_idx * ${_}`)};
            let batch = ${X.indicesGet("outputIndices",0)};
            let d1 = ${X.indicesGet("outputIndices",oe)};
            let r = ${X.indicesGet("outputIndices",U)};
            let c = ${X.indicesGet("outputIndices",J)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${X.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${G}(dyRCorner) + ${G}(wR)) / ${G}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${G}(uniforms.Dy_shape[${U}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${G}(dyCCorner) + ${G}(wC)) / ${G}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${G}(uniforms.Dy_shape[${J}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${f?`
                var x_offset = ${Y.indicesToOffset(`${Y.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c};
                var w_offset = ${q.indicesToOffset(`${q.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${b};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${f?4:c}) {
                  ${he()}
                  inputChannel = inputChannel + ${f?4:c};
                }
                ${B()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${a?` + bias[d1 / ${_}]`:""};
            ${X.setByOffset("global_idx","value")};
          `;return`
    ${F.registerUniforms(Z).declareVariables(...re,X)}
      ${F.mainStart()}
      ${F.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${L}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${c}${b}${_}${f}${g}`,inputDependencies:w},getRunData:()=>({dispatchGroup:{x:v[0],y:v[1],z:v[2]},outputs:[{dims:r?r(i):i,dataType:e[0].dataType}],programUniforms:O}),getShaderSource:N}}}),Su,Tu,Iu,ri,jc,Eu,ai,zu,Vc,kg=P(()=>{xg(),Nt(),$t(),Su=(e,t,r,a,i,n)=>(e-1)*t+r+(a-1)*i+1-n,Tu=(e,t,r,a,i)=>{let n=Math.floor(e/2);t==="SAME_UPPER"?(r[a]=n,r[i]=e-n):t==="SAME_LOWER"&&(r[a]=e-n,r[i]=n)},Iu=(e,t,r,a,i,n,s,u,l,d)=>{let c=e.length-2,f=d.length===0;l.length<c&&l.push(...Array(c-l.length).fill(0));let h=e[0],g=t[u?3:1]*i;for(let _=0,b=e.length-c-(u?1:0);_<c;++_,++b){let x=e[b],v=f?x*s[_]:d[_],w=Su(x,s[_],n[_],t[b],r[_],v);Tu(w,a,n,_,_+c),f&&d.push(s[_]*(x-1)+l[_]+(t[b]-1)*r[_]+1-n[_]-n[_+c])}d.splice(0,0,h),d.splice(u?3:1,0,g)},ri=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((f,h)=>f*h,1)===0){r.length=0;for(let f=2;f<t[1].dims.length;++f)r.push(t[1].dims[f])}let a=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(a?3:1,0,t[1].dims[1]);let i=e.pads.slice(),n=e.outputShape.slice(),s=e.outputPadding.slice(),u=t[0].dims,l=e.dilations.slice();if(l.reduce((f,h)=>f+h,0)===0){let f=t[0].dims.length-2;l=new Array(f).fill(1)}let d=e.strides.slice();if(d.reduce((f,h)=>f+h,0)===0){let f=t[0].dims.length-2;d=new Array(f).fill(1)}Iu(u,r,l,e.autoPad,e.group,i,d,a,s,n);let c=Object.assign({},e);return Object.assign(c,{kernelShape:r,pads:i,outputPadding:s,outputShape:n,dilations:l,strides:d}),c},jc=e=>{let t=gn(e),r=e.format,a=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],i=e.dilations,n=e.group,s=e.kernelShape,u=e.pads,l=e.strides,d=e.wIsConst(),c=e.outputPadding,f=e.outputShape;return{autoPad:a,format:r,dilations:i,group:n,kernelShape:s,outputPadding:c,outputShape:f,pads:u,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},Eu=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],a=e[1].dims[0];if(r!==a)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==i))throw new Error("invalid bias");let n=e[0].dims.length-2;if(t.dilations.reduce((s,u)=>s+u,0)>0&&t.dilations.length!==n)throw new Error(`dilations should be ${n}D`);if(t.strides.reduce((s,u)=>s+u,0)>0&&t.strides.length!==n)throw new Error(`strides should be ${n}D`);if(t.pads.reduce((s,u)=>s+u,0)>0&&t.pads.length!==n*2)throw new Error(`pads should be ${n*2}D`);if(t.outputPadding.length!==n&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${n}D`);if(t.kernelShape.reduce((s,u)=>s+u,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},ai=(e,t,r,a)=>{let i=e.kernelCustomData.wT??e.compute(Be(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let n=[t[0],i];t.length===3&&n.push(t[2]),e.compute(Fc(n,r,a),{inputs:n})},zu=(e,t)=>{let r=t.format==="NHWC",a=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&a.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let n=t.dilations;(n.length===0||n[0]===0)&&(n=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let u=t.pads;u.length===0&&(u=[0,0]),u=[0,u[0],0,u[1]],s=[1].concat(s),n=[1].concat(n),i=[1].concat(i);let l=t.outputPadding;l=[0].concat(l);let d=ri({...t,pads:u,strides:s,dilations:n,kernelShape:i,outputPadding:l},a);ai(e,a,d,c=>r?[c[0],c[2],c[3]]:[c[0],c[1],c[3]])},Vc=(e,t)=>{if(Eu(e.inputs,t),e.inputs[0].dims.length===3)zu(e,t);else{let r=ri(t,e.inputs);ai(e,e.inputs,r)}}}),Cu,Gc,Hc,Sg=P(()=>{ee(),ae(),$e(),ne(),Cu=(e,t,r,a)=>{let i=C.size(t),n=t.length,s=R("input",e,n),u=j("output",e,n),l=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),d=C.normalizeAxis(l,n),c=f=>{let h=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,g=V("uniforms.input_shape","uniforms.axis",n),_=a.reverse?h+(a.exclusive?" + 1":""):"0",b=a.reverse?g:h+(a.exclusive?"":" + 1");return`
                ${f.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,u)}
                ${f.mainStart()}
                  ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${u.offsetToIndices("global_idx")};
                  var sum = ${u.type.value}(0);
                  let first : i32 = ${_};
                  let last : i32 = ${b};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${u.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:a.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:d},...K(t,t)]}),getShaderSource:c}},Gc=(e,t)=>{let r=e.inputs[0].dims,a=e.inputs[0].dataType,i=e.inputs[1];e.compute(Cu(a,r,i,t),{inputs:[0]})},Hc=e=>{let t=e.exclusive===1,r=e.reverse===1;return pe({exclusive:t,reverse:r})}}),Au,Ou,Mu,Kc,Zc,Tg=P(()=>{ee(),ae(),$e(),ne(),Au=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Ou=(e,t,r,a)=>{let i=[];i.push(`fn perm(i: ${a.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let n=0;n<t;++n)i.push(r.indicesSet("a",e[n],`i[${n}]`));return i.push("return a;}"),i.join(`
`)},Mu=(e,t)=>{let r,a,i,n,s,u,l=t.format==="NHWC",d=t.blocksize,c=t.mode==="DCR";l?([r,a,i,n]=e.dims,s=c?[r,a,i,d,d,n/d**2]:[r,a,i,n/d**2,d,d],u=c?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,a,i,n]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=c?[r,d,d,n/d**2,a,i]:[r,n/d**2,d,d,a,i],u=c?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let f=e.reshape(s),h=f.dims.length,g=e.dataType,_=R("a",g,h),b=j("output",g,h),x=v=>`
  ${v.registerUniform("output_size","u32").declareVariables(_,b)}

  ${Ou(u,h,_,b)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${b.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${b.setByOffset("global_idx",_.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:v=>{let w=l?[r,a*d,i*d,n/d**2]:[r,n/d**2,a*d,i*d],S=C.size(w),k=f.dims,T=C.sortBasedOnPerm(k,u);return{outputs:[{dims:w,dataType:v[0].dataType}],dispatchGroup:{x:Math.ceil(S/64)},programUniforms:[{type:12,data:S},...K(k,T)]}},getShaderSource:x}},Kc=(e,t)=>{Au(e.inputs),e.compute(Mu(e.inputs[0],t))},Zc=e=>pe({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Wr,ar,ii,Ru,Bu,Nu,Du,ni,Pu,Qc,Xc,Ig=P(()=>{ee(),ae(),$e(),ne(),Wr="[a-zA-Z]|\\.\\.\\.",ar="("+Wr+")+",ii="^"+ar+"$",Ru="("+ar+",)*"+ar,Bu="^"+Ru+"$",Nu=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},Du=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,a]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(Bu)))throw new Error("Invalid LHS term");if(r.split(",").forEach((i,n)=>{let s=e[n].dims.slice();if(!i.match(RegExp(ii)))throw new Error("Invalid LHS term");let u=this.processTerm(i,!0,s,n);this.lhs.push(u)}),a==="")a+=[...this.symbolToInfo.entries()].filter(([i,n])=>n.count===1||i==="...").map(([i])=>i).join("");else if(!a.match(RegExp(ar)))throw new Error("Invalid RHS");a.match(RegExp(Wr,"g"))?.forEach(i=>{if(i==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let n=this.symbolToInfo.get(i);if(n===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(n.dimValue)}}),this.rhs=this.processTerm(a,!1,this.outputDims)}addSymbol(e,t,r){let a=this.symbolToInfo.get(e);if(a!==void 0){if(a.dimValue!==t&&a.count!==1)throw new Error("Dimension mismatch");a.count++,a.inputIndices.push(r)}else a={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,a)}processTerm(e,t,r,a=-1){let i=r.length,n=!1,s=[],u=0;if(!e.match(RegExp(ii))&&!t&&e!=="")throw new Error("Invalid LHS term");let l=e.match(RegExp(Wr,"g")),d=new Nu(a);return l?.forEach((c,f)=>{if(c==="..."){if(n)throw new Error("Only one ellipsis is allowed per input term");n=!0;let h=i-l.length+1;if(h<0)throw new Error("Ellipsis out of bounds");if(s=r.slice(u,u+h),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let g=0;g<s.length;g++){let _=String.fromCharCode(48+g);d.addSymbol(_,f+g),this.addSymbol(_,r[u++],a)}}else d.addSymbol(c,f+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(c,r[u++],a)}),d}},ni=e=>e+"_max",Pu=(e,t,r,a)=>{let i=e.map(d=>d.length).map((d,c)=>R(`input${c}`,t,d)),n=C.size(a),s=j("output",t,a.length),u=[...r.symbolToInfo.keys()].filter(d=>!r.rhs.symbolToIndices.has(d)),l=d=>{let c=[],f="var prod = 1.0;",h="var sum = 0.0;",g="sum += prod;",_=[],b=[],x=[],v=[],w=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((k,T)=>{if(r.rhs.symbolToIndices.has(T)){let z=r.rhs.symbolToIndices.get(T)?.[0];z!==void 0&&r.lhs.forEach((E,O)=>{if(k.inputIndices.includes(O)){let N=E.symbolToIndices.get(T);if(N===void 0)throw new Error("Invalid symbol error");N.forEach(F=>{c.push(`${i[O].indicesSet(`input${O}Indices`,F,s.indicesGet("outputIndices",z))}`)})}})}else r.lhs.forEach((z,E)=>{if(k.inputIndices.includes(E)){let O=z.symbolToIndices.get(T);if(O===void 0)throw new Error("Invalid symbol error");O.forEach(N=>{_.push(`${i[E].indicesSet(`input${E}Indices`,N,`${T}`)}`)}),v.push(`prod *= ${i[E].getByIndices(`input${E}Indices`)};`)}}),b.push(`for(var ${T}: u32 = 0; ${T} < uniforms.${ni(T)}; ${T}++) {`),x.push("}")});let S=w?[...c,`let sum = ${i.map((k,T)=>k.getByIndices(`input${T}Indices`)).join(" * ")};`]:[...c,h,...b,..._,f,...v,g,...x];return`
            ${d.registerUniforms(u.map(k=>({name:`${ni(k)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,s)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${i.map((k,T)=>`var input${T}Indices: ${i[T].type.indices};`).join(`
`)}
            ${S.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=u.filter(f=>r.symbolToInfo.has(f)).map(f=>({type:12,data:r.symbolToInfo.get(f)?.dimValue||0}));d.push({type:12,data:n});let c=e.map((f,h)=>[...K(f)]).reduce((f,h)=>f.concat(h),d);return c.push(...K(a)),{outputs:[{dims:a,dataType:t}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:c}},getShaderSource:l}},Qc=(e,t)=>{let r=new Du(e.inputs,t.equation),a=r.outputDims,i=e.inputs.map((n,s)=>n.dims);e.compute(Pu(i,e.inputs[0].dataType,r,a))},Xc=e=>{let t=e.equation.replace(/\s+/g,"");return pe({equation:t})}}),Uu,si,Wu,Lu,Yc,Eg=P(()=>{ee(),ae(),ne(),Uu=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),a=r.length<t.length?0:r.length-t.length,i=t.length<r.length?0:t.length-r.length;for(;a<r.length&&i<t.length;++a,++i)if(r[a]!==t[i]&&r[a]!==1&&t[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},si=(e,t)=>{let r=e.length-t.length,a=[];for(let i=0;i<r;++i)a.push(e[i]);for(let i=0;i<t.length;++i)a.push(t[i]===1?e[i+r]:t[i]);return a},Wu=(e,t)=>e.length>t.length?si(e,t):si(t,e),Lu=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),a=Wu(t,r),i=e[0].dataType,n=i===9||C.size(t)===1,s=i===9||t.length>0&&t[t.length-1]%4===0?4:1,u=n||a.length>0&&a[a.length-1]%4===0?4:1,l=Math.ceil(C.size(a)/u),d=f=>{let h=R("input",i,t.length,s),g=j("output",i,a.length,u),_;if(i===9){let b=(x,v,w="")=>`
          let outputIndices${v} = ${g.offsetToIndices(`outputOffset + ${v}u`)};
          let offset${v} = ${h.broadcastedIndicesToOffset(`outputIndices${v}`,g)};
          let index${v} = offset${v} / 4u;
          let component${v} = offset${v} % 4u;
          ${x}[${v}] = ${w}(${h.getByOffset(`index${v}`)}[component${v}]);
        `;_=`
        let outputOffset = global_idx * ${u};
        var data = vec4<u32>(0);
        ${b("data",0,"u32")}
        ${b("data",1,"u32")}
        ${b("data",2,"u32")}
        ${b("data",3,"u32")}
        ${g.setByOffset("global_idx","data")}
      }`}else _=`
        let outputIndices = ${g.offsetToIndices(`global_idx * ${u}`)};
        let inputOffset = ${h.broadcastedIndicesToOffset("outputIndices",g)};
        let data = ${g.type.value}(${h.getByOffset(`inputOffset / ${s}`)});
        ${g.setByOffset("global_idx","data")}
      }`;return`
    ${f.registerUniform("vec_size","u32").declareVariables(h,g)}
    ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${_}`},c=[{type:12,data:l},...K(t,a)];return{name:"Expand",shaderCache:{hint:`${a.length};${s}${u}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:c})}},Yc=e=>{Uu(e.inputs),e.compute(Lu(e.inputs),{inputs:[0]})}}),qu,Jc,zg=P(()=>{ee(),ae(),ne(),mn(),qu=e=>{let t=e[0].dataType,r=C.size(e[0].dims),a=C.size(e[1].dims),i=a%4===0,n=s=>{let u=R("x",t,[1],4),l=R("bias",t,[1],4),d=j("y",t,[1],4),c=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],f=g=>`
      let bias${g}_offset: u32 = (global_idx * 4 + ${g}) % uniforms.bias_size;
      let bias${g} = ${l.getByOffset(`bias${g}_offset / 4`)}[bias${g}_offset % 4];`,h=i?`
      let bias = ${l.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${f(0)}${f(1)}${f(2)}${f(3)}
      let bias = ${u.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(c).declareVariables(u,l,d)}

    ${Pi(Ee(t))}

    ${s.mainStart(Vt)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${u.getByOffset("global_idx")};
      ${h}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",Ui("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:n,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:a}],dispatchGroup:{x:Math.ceil(r/Vt/4)}})}},Jc=e=>{e.inputs.length<2||C.size(e.inputs[1].dims)===0?bc(e):e.compute(qu(e.inputs))}}),Fu,ju,ef,tf,Cg=P(()=>{ee(),ae(),$e(),ne(),Fu=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},ju=(e,t)=>{let r=e[0].dims,a=e[1].dims,i=r.length,n=C.normalizeAxis(t.axis,i),s=r.slice(0);s.splice(n,1,...a);let u=r[n],l=e[0].dataType===9?4:1,d=Math.ceil(C.size(s)/l),c=[{type:12,data:d},{type:6,data:u},{type:12,data:n},...K(e[0].dims,e[1].dims,s)],f=h=>{let g=R("data",e[0].dataType,e[0].dims.length,l),_=R("inputIndices",e[1].dataType,e[1].dims.length),b=j("output",e[0].dataType,s.length,l),x=w=>{let S=a.length,k=`var indicesIndices${w}  = ${_.type.indices}(0);`;for(let T=0;T<S;T++)k+=`${S>1?`indicesIndices${w}[${T}]`:`indicesIndices${w}`} = ${s.length>1?`outputIndices${w}[uniforms.axis + ${T}]`:`outputIndices${w}`};`;k+=`
          var idx${w} = ${_.getByIndices(`indicesIndices${w}`)};
          if (idx${w} < 0) {
            idx${w} = idx${w} + uniforms.axisDimLimit;
          }
          var dataIndices${w} : ${g.type.indices};
        `;for(let T=0,z=0;T<i;T++)T===n?(k+=`${i>1?`dataIndices${w}[${T}]`:`dataIndices${w}`} = u32(idx${w});`,z+=S):(k+=`${i>1?`dataIndices${w}[${T}]`:`dataIndices${w}`} = ${s.length>1?`outputIndices${w}[${z}]`:`outputIndices${w}`};`,z++);return k},v;if(e[0].dataType===9){let w=(S,k,T="")=>`
          let outputIndices${k} = ${b.offsetToIndices(`outputOffset + ${k}u`)};
          ${x(k)};
          let offset${k} = ${g.indicesToOffset(`dataIndices${k}`)};
          let index${k} = offset${k} / 4u;
          let component${k} = offset${k} % 4u;
          ${S}[${k}] = ${T}(${g.getByOffset(`index${k}`)}[component${k}]);
        `;v=`
        let outputOffset = global_idx * ${l};
        var value = vec4<u32>(0);
        ${w("value",0,"u32")}
        ${w("value",1,"u32")}
        ${w("value",2,"u32")}
        ${w("value",3,"u32")}
        ${b.setByOffset("global_idx","value")}
      `}else v=`
      let outputIndices = ${b.offsetToIndices("global_idx")};
      ${x("")};
      let value = ${g.getByIndices("dataIndices")};
      ${b.setByOffset("global_idx","value")};
      `;return`
      ${h.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(g,_,b)}
      ${h.mainStart()}
        ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${v}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c}),getShaderSource:f}},ef=e=>pe({axis:e.axis}),tf=(e,t)=>{let r=e.inputs;Fu(r),e.compute(ju(e.inputs,t))}}),Vu,rf,af,Ag=P(()=>{ee(),ae(),ne(),Vu=(e,t,r,a,i,n,s,u,l)=>{let d=[{type:12,data:n},{type:12,data:a},{type:12,data:i},{type:12,data:r},{type:12,data:s},{type:12,data:u},{type:12,data:l}],c=[n];d.push(...K(t.dims,c));let f=h=>{let g=R("indices_data",t.dataType,t.dims.length),_=j("input_slice_offsets_data",12,1,1),b=[g,_],x=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:i.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${h.registerUniforms(x).declareVariables(...b)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${i.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${i.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:c,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:d}),getShaderSource:f},{inputs:[t],outputs:[-1]})[0]},rf=(e,t)=>{let r=e.inputs,a=r[0].dims,i=r[0].dataType,n=r[1].dims,s=n[n.length-1],u=C.sizeToDimension(n,n.length-1),l=C.sizeFromDimension(a,t.batchDims+s),d=C.sizeToDimension(a,t.batchDims),c=C.sizeFromDimension(a,t.batchDims),f=u/d,h=new Array(s),g=l;for(let k=0;k<s;++k)h[s-1-k]=g,g*=a[t.batchDims+s-1-k];let _=Vu(e,r[1],h,t.batchDims,a,u,f,c,s),b=t.batchDims+s;if(b>a.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let x=n.slice(0,-1).concat(a.slice(b)),v=C.size(x),w=[{type:12,data:v},{type:12,data:l},...K(r[0].dims,_.dims,x)],S=k=>{let T=R("data",r[0].dataType,r[0].dims.length),z=R("slice_offsets",12,_.dims.length),E=j("output",r[0].dataType,x.length);return`
          ${k.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(T,z,E)}
            ${k.mainStart()}
            ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:x,dataType:i}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:w}),getShaderSource:S},{inputs:[r[0],_]})},af=e=>({batchDims:e.batch_dims,cacheKey:""})}),Gu,Hu,nf,sf,Og=P(()=>{ee(),ae(),$e(),ne(),Gu=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=C.normalizeAxis(t.quantizeAxis,e[0].dims.length),a=t.blockSize,i=e[0],n=e[2],s=e.length===4?e[3]:void 0;if(n.dims.length!==i.dims.length||!i.dims.map((u,l)=>l===r?Math.ceil(u/a)===n.dims[l]:u===n.dims[l]).reduce((u,l)=>u&&l,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==n.dims.length||!s.dims.map((u,l)=>u===n.dims[l]).reduce((u,l)=>u&&l,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},Hu=(e,t)=>{let r=e[0].dims,a=e[1].dims,i=r.length,n=C.normalizeAxis(t.gatherAxis,i),s=C.normalizeAxis(t.quantizeAxis,i),u=r.slice(0);u.splice(n,1,...a);let l=C.size(u),d=e[2].dataType,c=e[0].dataType===22,f=[{type:12,data:l},{type:12,data:s},{type:12,data:n},{type:12,data:t.blockSize},...K(...e.map((g,_)=>g.dims),u)],h=g=>{let _=R("data",e[0].dataType,e[0].dims.length),b=R("inputIndices",e[1].dataType,e[1].dims.length),x=R("scales",e[2].dataType,e[2].dims.length),v=e.length>3?R("zeroPoint",e[3].dataType,e[3].dims.length):void 0,w=j("output",d,u.length),S=[_,b,x];v&&S.push(v);let k=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${g.registerUniforms(k).declareVariables(...S,w)}
        ${g.mainStart()}
        let output_indices = ${w.offsetToIndices("global_idx")};
        var indices_indices = ${b.type.indices}(0);
        ${a.length>1?`
          for (var i: u32 = 0; i < ${a.length}; i++) {
            let index = ${w.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${b.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${w.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${_.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${w.indicesGet("output_indices","i")};
          ${_.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${b.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[n]};
        }
        ${_.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${u.length}; i++) {
          let index = ${w.indicesGet("output_indices",`i + ${a.length} - 1`)};
          ${_.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${_.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${_.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${x.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${x.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${x.getByIndices("scale_indices")};
        ${v?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${v.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${v.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${Ee(d)}(quantized_data - zero_point) * scale;
        ${w.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((g,_)=>_!==1).map(g=>g.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(g,_)=>"rank")},getRunData:()=>({outputs:[{dims:u,dataType:d}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:f}),getShaderSource:h}},nf=(e,t)=>{let r=e.inputs;Gu(r,t),e.compute(Hu(e.inputs,t))},sf=e=>pe({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),Ku,Zu,of,uf,Mg=P(()=>{ee(),ae(),$e(),ne(),Ku=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Zu=(e,t)=>{let r=e[0].dims,a=e[0].dataType,i=r.length,n=e[1].dims,s=e[1].dataType,u=C.normalizeAxis(t.axis,i),l=r[u],d=n.slice(0),c=C.size(d),f=R("input",a,i),h=R("indicesInput",s,n.length),g=j("output",a,d.length),_=[{type:12,data:c},{type:6,data:l},{type:12,data:u}];return _.push(...K(r,n,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:_}),getShaderSource:b=>`
      ${b.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(f,h,g)}
      ${b.mainStart()}
      ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${g.offsetToIndices("global_idx")};

      var idx = ${h.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${f.type.indices}(outputIndices);
      ${f.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${f.getByIndices("inputIndices")};

      ${g.setByOffset("global_idx","value")};
  }`}},of=e=>pe({axis:e.axis}),uf=(e,t)=>{let r=e.inputs;Ku(r),e.compute(Zu(e.inputs,t))}}),Qu,Xu,lf,df,Rg=P(()=>{ee(),ae(),ne(),Qu=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},Xu=(e,t)=>{let r=e[0].dims.slice(),a=e[1].dims.slice(),[i,n,s]=sp.getShapeOfGemmResult(r,t.transA,a,t.transB,e.length===3?e[2].dims:void 0),u=[i,n];if(!u)throw new Error("Can't use gemm on the given tensors");let l=16,d=Math.ceil(n/l),c=Math.ceil(i/l),f=!0,h=C.size(u),g=[{type:12,data:f?d:h},{type:12,data:i},{type:12,data:n},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],_=["type","type"];e.length===3&&(g.push(...K(e[2].dims)),_.push("rank")),g.push(...K(u));let b=v=>{let w="";t.transA&&t.transB?w="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?w="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?w="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(w="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let S=t.alpha===1?"":"value *= uniforms.alpha;",k=R("a",e[0].dataType,e[0].dims),T=R("b",e[1].dataType,e[1].dims),z=k.type.value,E=null,O=[k,T];e.length===3&&(E=R("c",e[2].dataType,e[2].dims.length),O.push(E));let N=j("output",e[0].dataType,u.length);O.push(N);let F=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${v.registerUniforms(F).declareVariables(...O)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${z}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${w}
    }

    ${S}
    ${E!=null?`let cOffset = ${E.broadcastedIndicesToOffset("vec2(m, n)",N)}; value += ${z}(uniforms.beta) * ${E.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},x=v=>{let w=R("a",e[0].dataType,e[0].dims),S=R("b",e[1].dataType,e[1].dims),k=null,T=[w,S];e.length===3&&(k=R("c",e[2].dataType,e[2].dims.length),T.push(k));let z=j("output",e[0].dataType,u.length);T.push(z);let E=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],O="",N="";t.transA&&t.transB?(N=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,O="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(N=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,O="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(N=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,O="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(N=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,O="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let F=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${v.registerUniforms(E).declareVariables(...T)}
  var<workgroup> tile_a: array<array<${w.type.storage}, ${l}>, ${l}>;
  var<workgroup> tile_b: array<array<${S.type.storage}, ${l}>, ${l}>;
  ${v.mainStart([l,l,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${l};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${l};
    let num_tiles = (uniforms.K - 1) / ${l} + 1;
    var k_start = 0u;
    var value = ${z.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${N}
      k_start = k_start + ${l};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${l}; k++) {
        ${O}
      }
      workgroupBarrier();
    }

    ${F}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${k!=null?`let cOffset = ${k.broadcastedIndicesToOffset("vec2(m, n)",z)}; value += ${z.type.value}(uniforms.beta) * ${k.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return f?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:d*c},programUniforms:g}),getShaderSource:x}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:g}),getShaderSource:b}},lf=e=>{let t=e.transA,r=e.transB,a=e.alpha,i=e.beta;return{transA:t,transB:r,alpha:a,beta:i,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},df=(e,t)=>{Qu(e.inputs),e.compute(Xu(e.inputs,t))}}),tt,ut,xt,kt,Yu,Ju,el,tl,rl,al,il,nl,pf,cf,Bg=P(()=>{ee(),ae(),$e(),ne(),[tt,ut,xt,kt]=[0,1,2,3],Yu=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},Ju=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,el=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,tl=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,rl=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,al=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${tt}] = batch;
     indices[${ut}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${xt}] = u32(r);
            indices[${kt}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${xt}] = u32(clamp(r, 0, H - 1));
          indices[${kt}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${xt}] = gs_reflect(r, border[1], border[3]);
          indices[${kt}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,il=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${tt}], indices[${ut}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${tt}], indices[${ut}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${tt}], indices[${ut}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${tt}], indices[${ut}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${tt}], indices[${ut}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${tt}], indices[${ut}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,nl=(e,t)=>{let r=R("x",e[0].dataType,e[0].dims.length),a=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=R("grid",e[1].dataType,a.length,2),n=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(n=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[tt,ut,xt,kt]=[0,3,1,2]);let s=j("output",e[0].dataType,n.length),u=r.type.value,l=C.size(n),d=[{type:12,data:l},...K(e[0].dims,a,n)],c=f=>`
  ${f.registerUniform("output_size","u32").declareVariables(r,i,s)}
  ${Ju}
  ${el(u)}
  ${tl(t)}
  ${rl(t)}
  ${al(r,u,t)}

  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${xt}]);
      let W_in = i32(uniforms.x_shape[${kt}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${s.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${tt}], indices[${xt}], indices[${kt}]);
      let nxy = ${i.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${il(s,u,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:f=>{let h=C.size(n);return{outputs:[{dims:n,dataType:f[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:d}},getShaderSource:c}},pf=(e,t)=>{Yu(e.inputs),e.compute(nl(e.inputs,t))},cf=e=>pe({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),ze,sl,ff,oi,ol,cr,hf,mf=P(()=>{ee(),ae(),$e(),pn(),hn(),ne(),$t(),ze=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,sl=(e,t)=>{let r=e[0],a=ze(e,1),i=ze(e,2),n=ze(e,3),s=ze(e,4),u=ze(e,5),l=ze(e,6),d=ze(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let c=r.dims[0],f=r.dims[1],h=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],g=f,_=0,b=0,x=Math.floor(h/t.numHeads);if(l&&d&&C.size(l.dims)&&C.size(d.dims)){if(l.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(l.dims[0]!==c||l.dims[1]!==t.numHeads||l.dims[3]!==x)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==c||d.dims[1]!==t.numHeads||d.dims[3]!==x)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');_=l.dims[2],b=l.dims[2]}else if(l&&C.size(l.dims)||d&&C.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v;if(a&&C.size(a.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(a.dims.length<3||a.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(a.dims.length===3){if(a.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');v=2,g=a.dims[1]}else if(a.dims.length===5){if(a.dims[2]!==t.numHeads||a.dims[3]!==2||a.dims[4]!==x)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');v=5,g=a.dims[1]}else{if(a.dims[1]!==t.numHeads||a.dims[3]!==x)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');v=0,g=a.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}if(n&&C.size(n.dims)>0){if(n.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(a&&a.dims.length===5&&a.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let w=_+g,S=0;if(s&&C.size(s.dims)>0){S=8;let E=s.dims;throw E.length===1?E[0]===c?S=1:E[0]===3*c+2&&(S=3):E.length===2&&E[0]===c&&E[1]===w&&(S=5),S===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let k=!1,T=h;if(i&&C.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(g!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');T=i.dims[2]}else{if(g!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');T=i.dims[1]*i.dims[3],k=!0}}let z=!1;if(s&&C.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(u&&C.size(u.dims)>0){if(u.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(u.dims[0]!==c||u.dims[1]!==t.numHeads||u.dims[2]!==f||u.dims[3]!==w)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:c,sequenceLength:f,pastSequenceLength:_,kvSequenceLength:g,totalSequenceLength:w,maxSequenceLength:b,inputHiddenSize:0,hiddenSize:h,vHiddenSize:T,headSize:x,vHeadSize:Math.floor(T/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:S,scale:t.scale,broadcastResPosBias:z,passPastInKv:k,qkvFormat:v}},ff=e=>pe({...e}),oi=pe({perm:[0,2,1,3]}),ol=(e,t,r,a,i,n,s)=>{let u=[a,i,n],l=C.size(u),d=[{type:12,data:l},{type:12,data:s},{type:12,data:n}],c=f=>{let h=j("qkv_with_bias",t.dataType,u),g=R("qkv",t.dataType,u),_=R("bias",r.dataType,u),b=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${f.registerUniforms(b).declareVariables(g,_,h)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:u,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:c},{inputs:[t,r],outputs:[-1]})[0]},cr=(e,t,r,a,i,n,s,u)=>{let l=n;if(s&&C.size(s.dims)>0){if(a===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return l=ol(e,n,s,t,a,r*i,u),l=l.reshape([t,a,r,i]),r===1||a===1?l:e.compute(Be(l,oi.perm),{inputs:[l],outputs:[-1]})[0]}else return n.dims.length===3&&(l=n.reshape([t,a,r,i])),r===1||a===1?l:e.compute(Be(l,oi.perm),{inputs:[l],outputs:[-1]})[0]},hf=(e,t)=>{let r=sl(e.inputs,t),a=e.inputs[0],i=ze(e.inputs,1),n=ze(e.inputs,2),s=ze(e.inputs,3),u=ze(e.inputs,4),l=ze(e.inputs,5),d=ze(e.inputs,6),c=ze(e.inputs,7);if(a.dims.length===5)throw new Error("Packed QKV is not implemented");if(i?.dims.length===5)throw new Error("Packed KV is not implemented");let f=i&&n&&i.dims.length===4&&n.dims.length===4,h=cr(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,a,s,0);if(f)return mr(e,h,i,n,u,void 0,d,c,l,r);if(!i||!n)throw new Error("key and value must be provided");let g=cr(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,i,s,r.hiddenSize),_=cr(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,n,s,2*r.hiddenSize);mr(e,h,g,_,u,void 0,d,c,l,r)}}),ul,ll,dl,pl,ji,gf,_f,yf=P(()=>{ee(),ae(),$e(),ne(),ul=e=>{if(!e||e.length<1)throw new Error("too few inputs")},ll=(e,t)=>{let r=[],a=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),a=r.length),pe({numOutputs:a,axis:t.axis,splitSizes:r})},dl=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${V("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,pl=e=>{let t=e.length,r=[];for(let a=0;a<t;++a){let i=e[a].setByIndices("indices","input[global_idx]");t===1?r.push(i):a===0?r.push(`if (output_number == ${a}u) { ${i} }`):a===t-1?r.push(`else { ${i} }`):r.push(`else if (output_number == ${a}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},ji=(e,t)=>{let r=e[0].dims,a=C.size(r),i=e[0].dataType,n=C.normalizeAxis(t.axis,r.length),s=new Array(t.numOutputs),u=R("input",i,r.length),l=new Array(t.numOutputs),d=[],c=[],f=0,h=[{type:12,data:a}];for(let _=0;_<t.numOutputs;_++){f+=t.splitSizes[_],l[_]=f;let b=r.slice();b[n]=t.splitSizes[_],c.push(b),s[_]=j(`output${_}`,i,b.length),d.push({dims:c[_],dataType:e[0].dataType})}h.push({type:12,data:l},...K(r,...c));let g=_=>`
  ${_.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(u,...s)}
  ${dl(l.length)}
  ${pl(s)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${u.offsetToIndices("global_idx")};
    var index = ${u.indicesGet("indices",n)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${V("uniforms.size_in_split_axis","output_number - 1u",l.length)};
      ${u.indicesSet("indices",n,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:g,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(a/64)},programUniforms:h})}},gf=(e,t)=>{ul(e.inputs);let r=e.inputs.length===1?t:ll(e.inputs,t);e.compute(ji(e.inputs,r),{inputs:[0]})},_f=e=>{let t=e.axis,r=e.splitSizes,a=e.numOutputs<0?r.length:e.numOutputs;if(a!==r.length)throw new Error("numOutputs and splitSizes lengh must be equal");return pe({axis:t,numOutputs:a,splitSizes:r})}}),cl,ta,bf,wf=P(()=>{ee(),ae(),$e(),ne(),cl=(e,t)=>{let[r,a,i,n]=e,{numHeads:s,rotaryEmbeddingDim:u}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!C.areEqual(a.dims,[])&&!C.areEqual(a.dims,[1])&&a.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${a.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(n.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${n.dims.length}`);if(!C.areEqual(i.dims,n.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(u>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let l=r.dims[0],d=r.dims[r.dims.length-2],c=i.dims[0],f=C.sizeFromDimension(r.dims,1)/d,h=u===0?i.dims[1]*2:f/s;if(u>h)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(a.dims.length===2){if(l!==a.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${a.dims[0]}`);if(d!==a.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${a.dims[1]}`)}if(h/2!==i.dims[1]&&u/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`);if(d>c)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},ta=(e,t)=>{let{interleaved:r,numHeads:a,rotaryEmbeddingDim:i,scale:n}=t,s=e[0].dims[0],u=C.sizeFromDimension(e[0].dims,1),l=e[0].dims[e[0].dims.length-2],d=u/l,c=e[2].dims[1],f=i===0?c*2:d/a,h=new Array(s,l,d/f,f-c),g=C.computeStrides(h),_=[{type:1,data:n},{type:12,data:h},{type:12,data:g},...e[0].dims.length===3?new Array({type:12,data:[u,d,f,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[u,f,l*f,1]}):[],...K(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],b=x=>{let v=R("input",e[0].dataType,e[0].dims.length),w=R("position_ids",e[1].dataType,e[1].dims.length),S=R("cos_cache",e[2].dataType,e[2].dims.length),k=R("sin_cache",e[3].dataType,e[3].dims.length),T=j("output",e[0].dataType,e[0].dims.length);return x.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:h.length},{name:"global_strides",type:"u32",length:g.length},{name:"input_output_strides",type:"u32",length:g.length}]),`
        ${x.declareVariables(v,w,S,k,T)}

        ${x.mainStart(Vt)}
          let half_rotary_emb_dim = uniforms.${S.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${x.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${w.broadcastedIndicesToOffset("bsnh.xy",j("",w.type.tensor,2))};
            let position_id =
                u32(${w.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${v.getByOffset("i")} * ${S.get("position_id","bsnh[3]")} -
                ${v.getByOffset("j")} * ${k.get("position_id","bsnh[3]")};
            ${T.setByOffset("i","re")}
            let im = ${v.getByOffset("i")} * ${k.get("position_id","bsnh[3]")} +
                ${v.getByOffset("j")} * ${S.get("position_id","bsnh[3]")};
            ${T.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${T.setByOffset("k",v.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:pe({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(C.size(h)/Vt)},programUniforms:_})}},bf=(e,t)=>{cl(e.inputs,t),e.compute(ta(e.inputs,t))}}),fl,hl,ui,ml,$f,Ng=P(()=>{$e(),ee(),hn(),mf(),yf(),$t(),wf(),ne(),fl=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],a=e[1],i=e[2],n=e[3],s=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let u=!1,l=r.dims[0],d=r.dims[1],c=r.dims.length===3?u?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],f=d,h=0,g=!a||a.dims.length===0,_=Math.floor(g?c/(t.numHeads+2*t.kvNumHeads):c/t.numHeads);g&&(c=_*t.numHeads);let b=n&&n.dims.length!==0,x=s&&s.dims.length!==0;if(b&&n.dims.length===4&&n.dims[0]===l&&n.dims[1]!==t.kvNumHeads&&n.dims[2]===t.kvNumHeads&&n.dims[3]===_)throw new Error("BSNH pastKey/pastValue is not supported");if(b&&x){if(n.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');h=n.dims[2]}else if(b||x)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v=1;if(a&&a.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(a.dims.length<3||a.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(a.dims.length===3){if(r.dims[2]%a.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');f=a.dims[1]}else if(a.dims.length===5){if(a.dims[2]!==t.numHeads||a.dims[3]!==2||a.dims[4]!==_)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');f=a.dims[1]}else{if(a.dims[1]!==t.numHeads||a.dims[3]!==_)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');f=a.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}let w=0,S=!1,k=t.kvNumHeads?_*t.kvNumHeads:c;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(f!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');k=i.dims[2]}else{if(f!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');k=i.dims[1]*i.dims[3],S=!0}}let T=e.length>4?e[5]:void 0;if(T&&T.dims.length!==1&&T.dims[0]!==l)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:l,sequenceLength:d,pastSequenceLength:h,kvSequenceLength:f,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:c,vHiddenSize:k,headSize:_,vHeadSize:Math.floor(k/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:w,scale:t.scale,broadcastResPosBias:!1,passPastInKv:S,qkvFormat:v}},hl=pe({perm:[0,2,1,3]}),ui=(e,t,r)=>{let a=t,i=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(a=t.reshape([r.batchSize,r.kvSequenceLength,i,r.headSize]),a=e.compute(Be(a,hl.perm),{inputs:[a],outputs:[-1]})[0]),a},ml=(e,t,r,a)=>{let i=7,n=["type","type"],s=[e*t],u=e*t,l=[{type:12,data:u},{type:12,data:t},{type:12,data:e}],d=c=>{let f=R("seq_lens",r.dataType,r.dims),h=R("total_seq_lens",a.dataType,a.dims),g=j("pos_ids",i,s),_=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${c.registerUniforms(_).declareVariables(f,h,g)}
  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${h.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${f.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${g.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${g.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${g.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:n},getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:d}},$f=(e,t)=>{let r=fl(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(e.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");let a=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,n=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,u=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,l=e.inputs.length>4?e.inputs[5]:void 0,d=e.inputs.length>5?e.inputs[6]:void 0,c=r.kvNumHeads?r.kvNumHeads:r.numHeads,f=pe({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,c*r.headSize,c*r.headSize]}),[h,g,_]=!i&&!n?e.compute(ji([a],f),{inputs:[a],outputs:[-1,-1,-1]}):[a,i,n],b,x;if(t.doRotary){let k=e.compute(ml(r.batchSize,r.sequenceLength,l,d),{inputs:[l,d],outputs:[-1]})[0],T=e.inputs[7],z=e.inputs[8],E=pe({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),O=[h,k,T,z],N=[-1];b=e.compute(ta(O,E),{inputs:O,outputs:N})[0],O.splice(0,1,g);let F=pe({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});x=e.compute(ta(O,F),{inputs:O,outputs:N})[0]}let v=cr(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?b:h,void 0,0),w=ui(e,t.doRotary?x:g,r),S=ui(e,_,r);mr(e,v,w,S,void 0,void 0,s,u,void 0,r,l,d)}}),li,gl,_l,vf,Dg=P(()=>{ee(),ae(),$t(),ne(),li=(e,t,r,a,i,n,s,u)=>{let l=ye(n),d=l===1?"f32":`vec${l}f`,c=l===1?"vec2f":`mat2x${l}f`,f=i*s,h=64;f===1&&(h=256);let g=[i,s,n/l],_=[i,s,2],b=["rank","type","type"],x=[];x.push(...K(g,_));let v=w=>{let S=R("x",t.dataType,3,l),k=R("scale",r.dataType,r.dims),T=R("bias",a.dataType,a.dims),z=j("output",1,3,2),E=[S,k,T,z];return`
  var<workgroup> workgroup_shared : array<${c}, ${h}>;
  const workgroup_size = ${h}u;
  ${w.declareVariables(...E)}
  ${w.mainStart(h)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${d}(0);
    var squared_sum = ${d}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${d}(${S.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${c}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${wt("workgroup_shared[0][0]",l)} / f32(hight * ${l});
      let squared_sum_final = ${wt("workgroup_shared[0][1]",l)} / f32(hight * ${l});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${u}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${u};${h}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:_,dataType:1}],dispatchGroup:{x:f},programUniforms:x}),getShaderSource:v},{inputs:[t,r,a],outputs:[-1]})[0]},gl=(e,t,r)=>{let a=t[0].dims,i=a,n=2,s=a[0],u=a[1],l=C.sizeFromDimension(a,n),d=ye(l),c=C.size(i)/d,f=li(e,t[0],t[1],t[2],s,l,u,r.epsilon),h=[s,u,l/d],g=[s,u],_=["type","none"],b=x=>{let v=R("x",t[0].dataType,h.length,d),w=R("scale_shift",1,g.length,2),S=j("output",t[0].dataType,h.length,d),k=[v,w,S];return`
  ${x.registerUniform("output_size","u32").declareVariables(...k)}
  ${x.mainStart()}
  ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${S.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${w.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${v.getByOffset("global_idx")} * ${S.type.value}(scale_shift.x) + ${S.type.value}(scale_shift.y);
      ${S.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:[{type:12,data:c},...K(h,g,h)]}),getShaderSource:b},{inputs:[t[0],f]})},_l=(e,t,r)=>{let a=t[0].dims,i=a,n=a[0],s=a[a.length-1],u=C.sizeFromDimension(a,1)/s,l=ye(s),d=C.size(i)/l,c=[{type:12,data:u},{type:12,data:Math.floor(s/l)}],f=["type","type"],h=!1,g=[0,a.length-1];for(let v=0;v<a.length-2;v++)h=h||a[v+1]!==1,g.push(v+1);h=h&&a[a.length-1]!==1;let _=h?e.compute(Be(e.inputs[0],g),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:a.length},(v,w)=>a[g[w]])),b=li(e,_,t[1],t[2],n,u,s,r.epsilon),x=v=>{let w=Se(t[0].dataType),S=l===1?"vec2f":`mat${l}x2f`,k=E=>{let O=E===0?"x":"y",N=l===1?"f32":`vec${l}f`;switch(l){case 1:return`${w}(${N}(scale.${O}))`;case 2:return`vec2<${w}>(${N}(scale[0].${O}, scale[1].${O}))`;case 4:return`vec4<${w}>(${N}(scale[0].${O}, scale[1].${O}, scale[2].${O}, scale[3].${O}))`;default:throw new Error(`Not supported compoents ${l}`)}},T=R("input",t[0].dataType,t[0].dims,l),z=j("output",t[0].dataType,i,l);return`
  @group(0) @binding(0) var<storage, read> input : array<${T.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${S}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${z.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${v.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${k(0)}, ${k(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${l}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c}),getShaderSource:x},{inputs:[t[0],b]})},vf=(e,t)=>{t.format==="NHWC"?_l(e,e.inputs,t):gl(e,e.inputs,t)}}),yl,bl,xf,Pg=P(()=>{ee(),ae(),ne(),yl=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},bl=(e,t,r)=>{let a=t.simplified,i=e[0].dims,n=e[1],s=!a&&e[2],u=i,l=C.normalizeAxis(t.axis,i.length),d=C.sizeToDimension(i,l),c=C.sizeFromDimension(i,l),f=C.size(n.dims),h=s?C.size(s.dims):0;if(f!==c||s&&h!==c)throw new Error(`Size of X.shape()[axis:] == ${c}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${f} and bias size of ${h}`);let g=[];for(let T=0;T<i.length;++T)T<l?g.push(i[T]):g.push(1);let _=ye(c),b=["type","type"],x=[{type:12,data:d},{type:1,data:c},{type:12,data:Math.floor(c/_)},{type:1,data:t.epsilon}];s&&b.push("type");let v=r>1,w=r>2,S=T=>{let z=Se(e[0].dataType),E=[R("x",e[0].dataType,e[0].dims,_),R("scale",n.dataType,n.dims,_)];s&&E.push(R("bias",s.dataType,s.dims,_)),E.push(j("output",e[0].dataType,u,_)),v&&E.push(j("mean_data_output",1,g)),w&&E.push(j("inv_std_output",1,g));let O=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${T.registerUniforms(O).declareVariables(...E)}
  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Bi("f32",_)};
    var mean_square_vector = ${Bi("f32",_)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${qt(z,_,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${wt("mean_vector",_)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${wt("mean_square_vector",_)} / uniforms.norm_size ${a?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${qt(z,_,"x[j + offset]")};
      let f32scale = ${qt(z,_,"scale[j]")};
      output[j + offset] = ${E[0].type.value}((f32input ${a?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${qt(z,_,"bias[j]")}`:""}
      );
    }

    ${v?"mean_data_output[global_idx] = mean":""};
    ${w?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},k=[{dims:u,dataType:e[0].dataType}];return v&&k.push({dims:g,dataType:1}),w&&k.push({dims:g,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${_};${r};${a}`,inputDependencies:b},getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:x}),getShaderSource:S}},xf=(e,t)=>{yl(e.inputs),e.compute(bl(e.inputs,t,e.outputCount))}}),wl,kf,Ug=P(()=>{ae(),bn(),wn(),wl=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},kf=e=>{wl(e.inputs);let t=jt.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],a=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&a<8)e.compute(yn(e.inputs,{activation:""},t));else{let i=t[t.length-2],n=C.size(e.inputs[0].dims.slice(0,-2)),s=C.size(e.inputs[1].dims.slice(0,-2));if(n!==1&&i===1&&s===1){let u=e.inputs[0].reshape([1,n,a]),l=e.inputs[1].reshape([1,a,r]),d=[1,n,r],c=[u,l];e.compute(ea(c,{activation:""},t,d),{inputs:c})}else e.compute(ea(e.inputs,{activation:""},t))}}}),$l,vl,xl,Sf,Tf,Wg=P(()=>{ee(),ae(),$e(),ne(),$l=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],a=r.dims.length;if(r.dims[a-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),n=t.blockSize/8*t.bits,s=e[1];if(!C.areEqual(s.dims,[t.n,i,n]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let u=e[2].dims;if(C.size(u)!==t.n*i)throw new Error("scales input size error.");if(e.length===4){let l=e[3].dims,d=t.bits>4?t.n*i:t.n*Math.floor((i+1)/2);if(C.size(l)!==d)throw new Error("zeroPoints input size error.")}},vl=(e,t)=>{let r=e[0].dims,a=r.length,i=r[a-2],n=t.k,s=t.n,u=r.slice(0,a-2),l=C.size(u),d=e[1].dims[2]/4,c=e[0].dataType,f=ye(t.k),h=ye(d),g=ye(s),_=u.concat([i,s]),b=i>1&&s/g%2===0?2:1,x=C.size(_)/g/b,v=64,w=[],S=[l,i,n/f],k=C.convertShape(e[1].dims).slice();k.splice(-1,1,d/h),w.push(...K(S)),w.push(...K(k)),w.push(...K(e[2].dims)),e.length===4&&w.push(...K(C.convertShape(e[3].dims)));let T=[l,i,s/g];w.push(...K(T));let z=E=>{let O=S.length,N=R("a",e[0].dataType,O,f),F=R("b",12,k.length,h),Z=R("scales",e[2].dataType,e[2].dims.length),G=[N,F,Z],U=e.length===4?R("zero_points",12,e[3].dims.length):void 0;U&&G.push(U);let J=T.length,oe=j("output",e[0].dataType,J,g),q=Se(e[0].dataType),Y=(()=>{switch(f){case 1:return`array<${q}, 8>`;case 2:return`mat4x2<${q}>`;case 4:return`mat2x4<${q}>`;default:throw new Error(`${f}-component is not supported.`)}})(),re=()=>{let B=`
          // reuse a data
            var input_offset = ${N.indicesToOffset(`${N.type.indices}(batch, row, word_offset)`)};
            var a_data: ${Y};
            for (var j: u32 = 0; j < ${8/f}; j++) {
              a_data[j] = ${N.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let L=0;L<g*b;L++)B+=`
            b_value = ${h===1?`b${L}_data`:`b${L}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${Y}(${Array.from({length:4},(te,A)=>`${q}(b_value_lower[${A}]), ${q}(b_value_upper[${A}])`).join(", ")});
            b_dequantized_values = ${f===1?`${Y}(${Array.from({length:8},(te,A)=>`(b_quantized_values[${A}] - ${U?`zero_point${L}`:"zero_point"}) * scale${L}`).join(", ")});`:`(b_quantized_values - ${Y}(${Array(8).fill(`${U?`zero_point${L}`:"zero_point"}`).join(",")})) * scale${L};`};
            workgroup_shared[local_id.x * ${b} + ${Math.floor(L/g)}]${g>1?`[${L%g}]`:""} += ${Array.from({length:8/f},(te,A)=>`${f===1?`a_data[${A}] * b_dequantized_values[${A}]`:`dot(a_data[${A}], b_dequantized_values[${A}])`}`).join(" + ")};
          `;return B},X=()=>{let B=`
            var col_index = col * ${g};
            ${U?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${q}(8);`}
            `;for(let L=0;L<g*b;L++)B+=`
            let scale${L} = ${Z.getByOffset("col_index * nBlocksPerCol + block")};
            ${U?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${U.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${L} = ${q}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return B},he=()=>{let B=`col_index = col * ${g};`;for(let L=0;L<g*b;L++)B+=`
            let b${L}_data = ${F.getByIndices(`${F.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return B+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${Y};
            var b_dequantized_values: ${Y};`,B};return`
        var<workgroup> workgroup_shared: array<${oe.type.value}, ${b*v}>;
        ${E.declareVariables(...G,oe)}
        ${E.mainStart([v,1,1])}
          let output_indices = ${oe.offsetToIndices(`(global_idx / ${v}) * ${b}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${v}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/f};
            ${X()}
            for (var word: u32 = 0; word < ${d}; word += ${h}) {
              ${he()}
              for (var i: u32 = 0; i < ${h}; i++) {
                ${re()}
                word_offset += ${8/f};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${b}) {
            var output_value: ${oe.type.value} = ${oe.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${v}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${b};
            }
            ${oe.setByIndices(`${oe.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${f};${h};${g};${b};${v}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:_,dataType:c}],dispatchGroup:{x},programUniforms:w}),getShaderSource:z}},xl=(e,t)=>{let r=e[0].dims,a=r.length,i=r[a-2],n=t.k,s=t.n,u=r.slice(0,a-2),l=C.size(u),d=e[1].dims[2]/4,c=e[0].dataType,f=ye(t.k),h=ye(d),g=u.concat([i,s]),_=128,b=s%8===0?8:s%4===0?4:1,x=_/b,v=x*h*8,w=v/f,S=v/t.blockSize,k=C.size(g)/b,T=[],z=[l,i,n/f],E=C.convertShape(e[1].dims).slice();E.splice(-1,1,d/h),T.push(...K(z)),T.push(...K(E)),T.push(...K(e[2].dims)),e.length===4&&T.push(...K(C.convertShape(e[3].dims)));let O=[l,i,s];T.push(...K(O));let N=F=>{let Z=z.length,G=R("a",e[0].dataType,Z,f),U=R("b",12,E.length,h),J=R("scales",e[2].dataType,e[2].dims.length),oe=[G,U,J],q=e.length===4?R("zero_points",12,e[3].dims.length):void 0;q&&oe.push(q);let Y=O.length,re=j("output",e[0].dataType,Y),X=Se(e[0].dataType),he=()=>{switch(f){case 1:return`
          let a_data0 = vec4<${X}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${X}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${X}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${X}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${f}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${G.type.value}, ${w}>;
        var<workgroup> inter_results: array<array<${re.type.value}, ${x}>, ${b}>;
        ${F.declareVariables(...oe,re)}
        ${F.mainStart([x,b,1])}
          let output_indices = ${re.offsetToIndices(`workgroup_index * ${b}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${S} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${w};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${w}; a_offset += ${_})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${G.getByIndices(`${G.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${G.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${S} + local_id.x;
            ${q?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${q.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${X}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${X}(8);`}
            let scale = ${J.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${U.getByIndices(`${U.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/f};
            for (var i: u32 = 0; i < ${h}; i++) {
              ${he()}
              let b_value = ${h===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${X}>(${Array.from({length:4},(B,L)=>`${X}(b_value_lower[${L}]), ${X}(b_value_upper[${L}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${X}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(B,L)=>`${`dot(a_data${L}, b_dequantized_values[${L}])`}`).join(" + ")};
              word_offset += ${8/f};
            }
            workgroupBarrier();
          }

          if (local_idx < ${b}) {
            var output_value: ${re.type.value} = ${re.type.value}(0);
            for (var b = 0u; b < ${x}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${re.setByIndices(`${re.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${f};${h};${x};${b}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:g,dataType:c}],dispatchGroup:{x:k},programUniforms:T}),getShaderSource:N}},Sf=(e,t)=>{$l(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(xl(e.inputs,t)):e.compute(vl(e.inputs,t))},Tf=e=>pe(e)}),kl,Sl,Tl,Il,El,zl,Cl,Al,If,Lg=P(()=>{ee(),ae(),ne(),kl=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Sl=(e,t,r)=>{let a="";for(let i=t-1;i>=0;--i)a+=`
            k = i32(${e.indicesGet("indices",i)}) - ${V("uniforms.pads",i,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${V("uniforms.x_shape",i,t)})) {
              break;
            }
            offset += k * i32(${V("uniforms.x_strides",i,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${a}
            value = x[offset];
          }
      `},Tl=(e,t,r)=>{let a="";for(let i=t-1;i>=0;--i)a+=`
                k = i32(${e.indicesGet("indices",i)}) - ${V("uniforms.pads",i,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${V("uniforms.x_shape",i,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${V("uniforms.x_shape",i,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${V("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},Il=(e,t,r)=>{let a="";for(let i=t-1;i>=0;--i)a+=`
                k = i32(${e.indicesGet("indices",i)}) - ${V("uniforms.pads",i,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${V("uniforms.x_shape",i,t)})) {
                  k = i32(${V("uniforms.x_shape",i,t)}) - 1;
                }
                offset += k * i32(${V("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},El=(e,t,r)=>{let a="";for(let i=t-1;i>=0;--i)a+=`
                k = i32(${e.indicesGet("indices",i)}) - ${V("uniforms.pads",i,r)};
                if (k < 0)  {
                  k += i32(${V("uniforms.x_shape",i,t)}]);
                }
                if (k >= i32(${V("uniforms.x_shape",i,t)})) {
                  k -= i32(${V("uniforms.x_shape",i,t)});
                }
                offset += k * i32(${V("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},zl=(e,t,r)=>{switch(r.mode){case 0:return Sl(e,t,r.pads.length);case 1:return Tl(e,t,r.pads.length);case 2:return Il(e,t,r.pads.length);case 3:return El(e,t,r.pads.length);default:throw new Error("Invalid mode")}},Cl=(e,t)=>{let r=C.padShape(e[0].dims.slice(),t.pads),a=e[0].dims,i=C.size(r),n=[{type:12,data:i},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&n.push({type:s?e[2].dataType:1,data:t.value}),n.push(...K(e[0].dims,r));let u=["rank"],l=d=>{let c=j("output",e[0].dataType,r.length),f=R("x",e[0].dataType,a.length),h=f.type.value,g=zl(c,a.length,t),_=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&_.push({name:"constant_value",type:s?h:"f32"}),`
            ${d.registerUniforms(_).declareVariables(f,c)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${c.offsetToIndices("global_idx")};

            var value = ${h}(0);
            ${g}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(C.size(r)/64)},programUniforms:n}),getShaderSource:l}},Al=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),a=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,n=new Int32Array(2*i).fill(0);if(e.length>=4){let u=e[3].getBigInt64Array();for(let l=0;l<u.length;l++)n[Number(u[l])]=Number(r[l]),n[Number(u[l])+i]=Number(r[l+u.length])}else r.forEach((u,l)=>n[Number(l)]=Number(u));let s=[];return n.forEach(u=>s.push(u)),{mode:t.mode,value:a,pads:s}}else return t},If=(e,t)=>{kl(e.inputs);let r=Al(e.inputs,t);e.compute(Cl(e.inputs,r),{inputs:[0]})}}),ir,di,pi,ci,fi,Ol,Ml,hi,mi,Ef,zf,gi,Cf,Af,_i,Of,Mf,Rf,Bf,qg=P(()=>{Xe(),ee(),ae(),ne(),ir=e=>{if(fe.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},di=(e,t,r)=>{let a=t.format==="NHWC",i=e.dims.slice();a&&i.splice(1,0,i.pop());let n=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),u=t.strides.slice(),l=n?t.dilations.slice():[],d=t.pads.slice();Yr.adjustPoolAttributes(r,i,s,u,l,d);let c=Yr.computePoolOutputShape(r,i,u,l,s,d,t.autoPad),f=Object.assign({},t);n?Object.assign(f,{kernelShape:s,strides:u,pads:d,dilations:l,cacheKey:t.cacheKey}):Object.assign(f,{kernelShape:s,strides:u,pads:d,cacheKey:t.cacheKey});let h=c.slice();return h.push(h.splice(1,1)[0]),[f,a?h:c]},pi=(e,t)=>{let r=t.format==="NHWC",a=C.size(e),i=C.size(t.kernelShape),n=[{type:12,data:a},{type:12,data:i}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let u=t.kernelShape[t.kernelShape.length-1],l=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],c=t.pads[t.pads.length-1],f=!!(d+c);n.push({type:12,data:u},{type:12,data:l},{type:12,data:d},{type:12,data:c}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let h=!1;if(t.kernelShape.length===2){let g=t.kernelShape[t.kernelShape.length-2],_=t.strides[t.strides.length-2],b=t.pads[t.pads.length/2-2],x=t.pads[t.pads.length-2];h=!!(b+x),n.push({type:12,data:g},{type:12,data:_},{type:12,data:b},{type:12,data:x}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[n,s,!0,f,h]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let u=C.computeStrides(t.kernelShape);n.push({type:12,data:u},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:u.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let l=t.pads.reduce((d,c)=>d+c);return[n,s,!!l,!1,!1]}},ci=(e,t,r,a,i,n,s,u,l,d,c,f)=>{let h=i.format==="NHWC",g=t.type.value,_=j("output",t.type.tensor,a);if(i.kernelShape.length<=2){let b="",x="",v="",w=r-(h?2:1);if(c?b=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${w}] = indices[${w}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${w}] < 0 || xIndices[${w}]
                      >= uniforms.x_shape[${w}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${n}
                }`:b=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${w}] = indices[${w}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${n}
                }`,i.kernelShape.length===2){let S=r-(h?3:2);f?x=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${S}] = indices[${S}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${S}] < 0 || xIndices[${S}] >= uniforms.x_shape[${S}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:x=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${S}] = indices[${S}] * uniforms.sh - uniforms.phStart + j;
                `,v=`
              }
            `}return`
            ${e.registerUniforms(l).declareVariables(t,_)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${_.offsetToIndices("global_idx")};
              var xIndices = ${_.offsetToIndices("global_idx")};

              var value = ${g}(${u});
              var pad = 0;
              ${x}
              ${b}
              ${v}
              ${s}

              output[global_idx] = value;
            }`}else{if(h)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let b=i.kernelShape.length,x=i.pads.length,v="";return d?v=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${n}
              }`:v=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${n}
            `,`
            ${e.registerUniforms(l).declareVariables(t,_)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${_.offsetToIndices("global_idx")};
              var xIndices = ${_.offsetToIndices("global_idx")};

              var offsets: array<u32, ${b}>;

              var value = ${g}(${u});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${b-1}u; j++) {
                  offsets[j] = offset / ${V("uniforms.kernelStrides","j",b)};
                  offset -= offsets[j] * ${V("uniforms.kernelStrides","j",b)};
                }
                offsets[${b-1}] = offset;

                isPad = false;
                for (var j = ${r-b}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${V("uniforms.strides",`j - ${r-b}u`,b)}
                    + offsets[j - ${r-b}u] - ${V("uniforms.pads","j - 2u",x)};
                  ${v}
              }
              ${s}

              output[global_idx] = value;
            }`}},fi=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Ol=e=>`${fi(e)};${e.countIncludePad}`,Ml=e=>`${fi(e)};${e.storageOrder};${e.dilations}`,hi=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),mi=(e,t,r,a)=>{let[i,n]=di(t,a,r),s=R("x",t.dataType,t.dims.length),u=s.type.value,l="value += x_val;",d="";i.countIncludePad?d+=`value /= ${u}(uniforms.kernelSize);`:d+=`value /= ${u}(i32(uniforms.kernelSize) - pad);`;let[c,f,h,g,_]=pi(n,i);c.push(...K(t.dims,n));let b=["rank"];return{name:e,shaderCache:{hint:`${a.cacheKey};${h};${g};${_}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:n,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(C.size(n)/64)},programUniforms:c}),getShaderSource:x=>ci(x,s,t.dims.length,n.length,i,l,d,0,f,h,g,_)}},Ef=e=>{let t=e.count_include_pad!==0,r=hi(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let a={countIncludePad:t,...r,cacheKey:""};return{...a,cacheKey:Ol(a)}},zf=(e,t)=>{ir(e.inputs),e.compute(mi("AveragePool",e.inputs[0],!1,t))},gi={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Cf=e=>{let t=e.format;return{format:t,...gi,cacheKey:t}},Af=(e,t)=>{ir(e.inputs),e.compute(mi("GlobalAveragePool",e.inputs[0],!0,t))},_i=(e,t,r,a)=>{let[i,n]=di(t,a,r),s=`
      value = max(x_val, value);
    `,u="",l=R("x",t.dataType,t.dims.length),d=["rank"],[c,f,h,g,_]=pi(n,i);return c.push(...K(t.dims,n)),{name:e,shaderCache:{hint:`${a.cacheKey};${h};${g};${_}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:n,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(C.size(n)/64)},programUniforms:c}),getShaderSource:b=>ci(b,l,t.dims.length,n.length,i,s,u,t.dataType===10?-65504:-1e5,f,h,g,_)}},Of=(e,t)=>{ir(e.inputs),e.compute(_i("MaxPool",e.inputs[0],!1,t))},Mf=e=>{let t=e.storage_order,r=e.dilations,a=hi(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(a.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let i={storageOrder:t,dilations:r,...a,cacheKey:""};return{...i,cacheKey:Ml(i)}},Rf=e=>{let t=e.format;return{format:t,...gi,cacheKey:t}},Bf=(e,t)=>{ir(e.inputs),e.compute(_i("GlobalMaxPool",e.inputs[0],!0,t))}}),Rl,Bl,Nf,Df,Fg=P(()=>{ee(),ae(),$e(),ne(),Rl=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,a)=>r===e[2].dims[a]).reduce((r,a)=>r&&a,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((i,n)=>n===t.axis||i===e[0].dims[n]).reduce((i,n)=>i&&n,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],a=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/a)||t.blockSize>Math.ceil(r/(a-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Bl=(e,t)=>{let r=C.normalizeAxis(t.axis,e[0].dims.length),a=e[0].dataType,i=a===3,n=e[0].dims,s=e[1].dataType,u=C.size(n),l=a===3||a===2,d=l?[Math.ceil(C.size(e[0].dims)/4)]:e[0].dims,c=e[1].dims,f=e.length>2?e[2]:void 0,h=f?l?[Math.ceil(C.size(f.dims)/4)]:f.dims:void 0,g=c.length===0||c.length===1&&c[0]===1,_=g===!1&&c.length===1,b=ye(u),x=g&&(!l||b===4),v=x?b:1,w=x&&!l?b:1,S=R("input",l?12:a,d.length,w),k=R("scale",s,c.length),T=f?R("zero_point",l?12:a,h.length):void 0,z=j("output",s,n.length,v),E=[S,k];T&&E.push(T);let O=[d,c];f&&O.push(h);let N=[{type:12,data:u/v},{type:12,data:r},{type:12,data:t.blockSize},...K(...O,n)],F=Z=>{let G=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${Z.registerUniforms(G).declareVariables(...E,z)}
      ${Z.mainStart()}
          ${Z.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${z.offsetToIndices("global_idx")};

          // Set input x
          ${l?`
            let input = ${S.getByOffset("global_idx / 4")};
            let x_vec = ${i?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${v===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${S.getByOffset("global_idx")};`};

          // Set scale input
          ${g?`let scale_value= ${k.getByOffset("0")}`:_?`
            let scale_index = ${z.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${k.getByOffset("scale_index")};`:`
            var scale_indices: ${k.type.indices} = output_indices;
            let index = ${k.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${k.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${k.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${T?g?l?`
                let zero_point_input = ${T.getByOffset("0")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${T.getByOffset("0")}`:_?l?`
                let zero_point_index = ${z.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${T.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${z.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${T.getByOffset("zero_point_index")};`:l?`
                let zero_point_offset = ${k.indicesToOffset("scale_indices")};
                let zero_point_input = ${T.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${T.getByIndices("scale_indices")};`:`let zero_point_value = ${l?i?"i32":"u32":S.type.value}(0);`};
      // Compute and write output
      ${z.setByOffset("global_idx",`${z.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:T?["rank","rank","rank"]:["rank","rank"]},getShaderSource:F,getRunData:()=>({outputs:[{dims:n,dataType:s}],dispatchGroup:{x:Math.ceil(u/v/64),y:1,z:1},programUniforms:N})}},Nf=(e,t)=>{Rl(e.inputs,t),e.compute(Bl(e.inputs,t))},Df=e=>pe({axis:e.axis,blockSize:e.blockSize})}),Nl,Dl,Pf,jg=P(()=>{Xe(),ee(),ne(),Nl=(e,t,r)=>{let a=e===t,i=e<t&&r<0,n=e>t&&r>0;if(a||i||n)throw new Error("Range these inputs' contents are invalid.")},Dl=(e,t,r,a)=>{let i=Math.abs(Math.ceil((t-e)/r)),n=[i],s=i,u=[{type:12,data:s},{type:a,data:e},{type:a,data:r},...K(n)],l=d=>{let c=j("output",a,n.length),f=c.type.value,h=[{name:"outputSize",type:"u32"},{name:"start",type:f},{name:"delta",type:f}];return`
        ${d.registerUniforms(h).declareVariables(c)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${f}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${a}`},getShaderSource:l,getRunData:()=>({outputs:[{dims:n,dataType:a}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:u})}},Pf=e=>{let t=0,r=0,a=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],a=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],a=e.inputs[2].getFloat32Array()[0]),fe.webgpu.validateInputContent&&Nl(t,r,a),e.compute(Dl(t,r,a,e.inputs[0].dataType),{inputs:[]})}}),Pl,yi,bi,Ul,Uf,Wf,Vg=P(()=>{ee(),ae(),$e(),ne(),Pl=(e,t,r,a)=>{if(e!=="none"&&a!=="i32"&&a!=="u32"&&a!=="f32")throw new Error(`Input ${a} is not supported with reduction ${e}.`);let i=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,n=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return a==="i32"||a==="u32"?`atomicAdd(&${t}, bitcast<${a}>(${r}));`:`
              ${i}bitcast<${a}>(oldValue) + (${r})${n}`;case"max":return a==="i32"||a==="u32"?`atomicMax(&${t}, bitcast<${a}>(${r}));`:`
                ${i}max(bitcast<f32>(oldValue), (${r}))${n}`;case"min":return a==="i32"||a==="u32"?`atomicMin(&${t}, bitcast<${a}>(${r}));`:`${i}min(bitcast<${a}>(oldValue), (${r}))${n}`;case"mul":return`${i}(bitcast<${a}>(oldValue) * (${r}))${n}`;default:throw new Error(`Reduction ${e} is not supported.`)}},yi=(e,t)=>`${e===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[${t?"i - indices_start":"i"}];
    let dim_value = uniforms.output_shape[${t?"i - indices_start":"i"} + uniforms.last_index_dimension];`}
    
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));`,bi=(e,t,r)=>`for (var i = 0u; i < uniforms.num_updates_elements; i++) {
        let value = updates[uniforms.num_updates_elements * ${r?"global_idx":"idx"} + i];
        ${Pl(e.reduction,"output[data_offset + i]","value",t)}
      }`,Ul=(e,t)=>{let r=e[0].dims,a=e[1].dims,i=r,n=1,s=Math.ceil(C.size(a)/n),u=a[a.length-1],l=C.sizeFromDimension(r,u),d=C.sizeFromDimension(a,0)/u,c=[{type:12,data:s},{type:12,data:u},{type:12,data:l},...K(e[1].dims,e[2].dims,i)],f=h=>{let g=R("indices",e[1].dataType,e[1].dims.length),_=R("updates",e[2].dataType,e[2].dims.length,n),b=t.reduction!=="none"&&t.reduction!==""?fp("output",e[0].dataType,i.length):j("output",e[0].dataType,i.length,n);return`
      ${h.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(g,_,b)}
      ${h.mainStart()}
        ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var hasDuplicates = false;
  if (${t.reduction==="none"}) {
    for (var i = 0; i < ${d}; i = i + 1) {
      for (var j = i + 1; j < ${d}; j = j + 1) {
        var index_i = i32(indices[i].x);
        var index_j = i32(indices[j].x);
        if (index_i == index_j) {
          hasDuplicates = true;
          break;
        }
      }
      if (hasDuplicates) {
        break;
      }
    }
  }

  if (${t.reduction==="none"} && hasDuplicates) {
    if (global_idx != 0u) {
      return;
    }
    // Process each index-update pair individually when duplicates exist
    for (var idx = 0u; idx < ${d}u; idx++) {
      var data_offset = 0u;
      for (var i = 0u; i < uniforms.last_index_dimension; i++) {
        var index = i32(indices[idx * uniforms.last_index_dimension + i].x);
        ${yi(r.length,!1)}
      }
      ${bi(t,b.type.value,!1)}
    }
    return;
  }

  var data_offset = 0u;
  var indices_start = uniforms.last_index_dimension * global_idx;
  var indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${yi(r.length,!0)}
  }
  ${bi(t,b.type.value,!0)}
  }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:c}),getShaderSource:f}},Uf=e=>pe({reduction:e.reduction}),Wf=(e,t)=>{e.compute(Ul(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Wl,Ll,ql,wi,Fl,jl,Vl,Gl,Hl,Kl,Zl,Ql,$i,Xl,Yl,Jl,ed,td,Lf,qf,Gg=P(()=>{ee(),ae(),$e(),ne(),Wl=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Ll=(e,t,r)=>{t.every(i=>i>=0&&i<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let a=new Array(r).fill(1);return t.forEach((i,n)=>a[i]=e[n]),a},ql=(e,t,r,a,i,n)=>{let[s,u,l]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(c=>n.push(c));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0){if(e[u].getFloat32Array().forEach(c=>a.push(c)),a.length!==0&&a.length!==d&&r>=18&&a.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Wl(a,t),t.axes.length>0&&Ll(a,t.axes,d).forEach((c,f)=>a[f]=c)}if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0&&(e[l].getBigInt64Array().forEach(c=>i.push(Number(c))),i.length!==0&&i.length!==d&&r>=18&&i.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(a.length!==0&&a.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof a<"u"&&typeof i<"u"&&a.length>0&&i.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},wi=(e,t,r,a)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${a}(big / (${r}));
  let fract = ${a}(big % (${r})) / ${a}(${r});
  return whole + fract;
`,Fl=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${wi("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${wi("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",jl=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",Vl=(e,t,r)=>{let a=new Array(r).fill(0).concat(new Array(r).fill(1)),i=e.length===0?a:e.slice();return t.length>0?(t.forEach((n,s)=>{a[n]=i[s],a[s+r]=i[t.length+s]}),a):i},Gl=(e,t,r,a)=>{let i=[];if(r.length>0)if(a.length>0){if(e.forEach(n=>i.push(n)),Math.max(...a)>e.length)throw new Error("axes is out of bound");a.forEach((n,s)=>i[n]=r[s])}else r.forEach(n=>i.push(n));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");i=e.map((n,s)=>Math.round(n*t[s]))}return i},Hl=(e,t,r)=>{let a=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(n=>t[n]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(n=>t[n]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return r.axes.length>0?(r.axes.forEach(n=>t[n]=a),r.axes.forEach(n=>i[n]=Math.round(e[n]*t[n]))):(t.fill(a,0,t.length),i.forEach((n,s)=>i[s]=Math.round(n*t[s]))),i},Kl=(e,t,r,a,i)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${V("uniforms.scales","i",a)};
        var roi_low = ${V("uniforms.roi","i",i)};
        var roi_hi = ${V("uniforms.roi",`i + ${t.length}`,i)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${V("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${V("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Zl=(e,t,r,a,i,n,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${a.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${V("uniforms.scales","i",i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${V("uniforms.roi","i",n)};
          var roi_hi = ${V("uniforms.roi",`i + ${r.length}`,n)};
          var input_shape_i = ${V("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${V("uniforms.output_shape","i",a.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${s} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,Ql=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${V("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,$i=(e,t,r,a)=>e.rank>a?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",Xl=(e,t,r,a,i)=>{let[n,s,u,l]=r.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(col, ${r[u]} - 1))`)};
      ${$i(e,l,n,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${d} = originalIndices[${s}];
      var col:${d} = originalIndices[${u}];
      ${a?`if (row < 0 || row > (${r[s]} - 1) || col < 0 || col > (${r[u]} - 1)) {
        return ${i};
      }`:""};
      row = max(0, min(row, ${r[s]} - 1));
      col = max(0, min(col, ${r[u]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${n}])`:"0"};
      var x11: ${d} = getInputValue(batch, channel, row1, col1);
      var x12: ${d} = getInputValue(batch, channel, row1, col2);
      var x21: ${d} = getInputValue(batch, channel, row2, col1);
      var x22: ${d} = getInputValue(batch, channel, row2, col2);
      var dx1: ${d} = abs(row - ${d}(row1));
      var dx2: ${d} = abs(${d}(row2) - row);
      var dy1: ${d} = abs(col - ${d}(col1));
      var dy2: ${d} = abs(${d}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},Yl=(e,t,r,a,i,n,s,u,l,d)=>{let c=r.length===2,[f,h]=c?[0,1]:[2,3],g=e.type.value,_=b=>{let x=b===f?"row":"col";return`
      fn ${x}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${g} {
        var output_index = ${t.indicesGet("output_indices",b)};
        var originalIdx: ${g} = getOriginalCoordinateFromResizedCoordinate(output_index, ${i[b]},
        ${a[b]}, ${r[b]}, ${n[b]}, ${n[b]} + ${r.length});
        var fractOriginalIdx: ${g} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${u} && (originalIdx < 0 || originalIdx > (${r[b]} - 1))) {
          return ${l};
        }
        var data: array<${g}, 4> = array<${g}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${x}: ${g} = originalIdx + ${g}(i);
          if (${x} < 0 || ${x} >= ${r[b]}) {
            ${d?`coefs[i + 1] = 0.0;
                        continue;`:u?`return ${l};`:`${x} = max(0, min(${x}, ${r[b]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",b,`u32(${x})`)};
          data[i + 1] = ${b===f?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${_(f)};
    ${_(h)};
  fn getCubicInterpolationCoefs(s: ${g}) -> array<${g}, 4> {
    var absS = abs(s);
    var coeffs: array<${g}, 4> = array<${g}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${g} = 1.0 - absS;
    var twoMinusAbsS: ${g} = 2.0 - absS;
    var onePlusAbsS: ${g} = 1.0 + absS;
    coeffs[0] = ((${s} * onePlusAbsS - 5 * ${s}) * onePlusAbsS + 8 * ${s}) * onePlusAbsS - 4 * ${s};
    coeffs[1] = ((${s} + 2) * absS - (${s} + 3)) * absS * absS + 1;
    coeffs[2] = ((${s} + 2) * oneMinusAbsS - (${s} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${s} * twoMinusAbsS - 5 * ${s}) * twoMinusAbsS + 8 * ${s}) * twoMinusAbsS - 4 * ${s};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${g}, 4>, coefs: array<${g}, 4>) -> ${g} {
    var coefsSum: ${g} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${g} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},Jl=(e,t,r,a,i)=>{let[n,s,u,l,d]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],c=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${c} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(height, ${r[u]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(width, ${r[l]} - 1))`)};
      ${$i(e,d,n,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${c} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${c} = originalIndices[${s}];
      var height:${c} = originalIndices[${u}];
      var width:${c} = originalIndices[${l}];
      ${a?`if (depth < 0 || depth > (${r[s]} - 1) || height < 0 || height > (${r[u]} - 1) || width < 0 || (width > ${r[l]} - 1)) {
      return ${i};
        }`:""};

    depth = max(0, min(depth, ${r[s]} - 1));
      height = max(0, min(height, ${r[u]} - 1));
      width = max(0, min(width, ${r[l]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${n}])`:"0"};

      var x111: ${c} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${c} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${c} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${c} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${c} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${c} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${c} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${c} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${c} = abs(depth - ${c}(depth1));
      var dx2: ${c} = abs(${c}(depth2) - depth);
      var dy1: ${c} = abs(height - ${c}(height1));
      var dy2: ${c} = abs(${c}(height2) - height);
      var dz1: ${c} = abs(width - ${c}(width1));
      var dz2: ${c} = abs(${c}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},ed=(e,t,r,a,i,n)=>{let s=e.dims,u=Vl(n,t.axes,s.length),l=Gl(s,a,i,t.axes),d=a.slice();a.length===0&&(d=s.map((w,S)=>w===0?1:l[S]/w),t.keepAspectRatioPolicy!=="stretch"&&(l=Hl(s,d,t)));let c=j("output",e.dataType,l.length),f=R("input",e.dataType,s.length),h=C.size(l),g=s.length===l.length&&s.every((w,S)=>w===l[S]),_=t.coordinateTransformMode==="tf_crop_and_resize",b=t.extrapolationValue,x=f.type.value,v=w=>`
      ${g?"":`
      ${Fl(t.coordinateTransformMode,x)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Ql(f,s)};
              ${jl(t.nearestMode,r,x)};
              ${Zl(f,c,s,l,d.length,u.length,_)};
              `;case"linear":return`
              ${Kl(c,s,l,d.length,u.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${Xl(f,c,s,_,b)}`;if(s.length===3||s.length===5)return`${Jl(f,c,s,_,b)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${Yl(f,c,s,l,d,u,t.cubicCoeffA,_,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${w.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",u.length).declareVariables(f,c)}
      ${w.mainStart()}
        ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${g?"output[global_idx] = input[global_idx];":`
        let output_indices = ${c.offsetToIndices("global_idx")};
        var input_indices: ${f.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${f.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${i.length>0?i:""}|${u.length>0?u:""}|${g}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:v,getRunData:()=>({outputs:[{dims:l,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},{type:1,data:d},{type:1,data:u},...K(s,l)]})}},td=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},Lf=(e,t)=>{let r=[],a=[],i=[],n=td(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");ql(e.inputs,t,n,r,a,i),e.compute(ed(e.inputs[0],t,n,r,a,i),{inputs:[0]})},qf=e=>{let t=e.antialias,r=e.axes,a=e.coordinateTransformMode,i=e.cubicCoeffA,n=e.excludeOutside!==0,s=e.extrapolationValue,u=e.keepAspectRatioPolicy,l=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return pe({antialias:t,axes:r,coordinateTransformMode:a,cubicCoeffA:i,excludeOutside:n,extrapolationValue:s,keepAspectRatioPolicy:u,mode:l,nearestMode:d})}}),rd,ad,Ff,Hg=P(()=>{ee(),ae(),ne(),rd=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],a=e[2];if(t.dataType!==r.dataType||t.dataType!==a.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let i=t.dims[t.dims.length-1],n=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==n)throw new Error("Skip must have the same sequence length as input");if(a.dims.length!==1)throw new Error("Gamma must be 1D");if(a.dims[a.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},ad=(e,t,r,a)=>{let i=t.simplified,n=e[0].dims,s=C.size(n),u=n,l=s,d=n.slice(-1)[0],c=a?n.slice(0,-1).concat(1):[],f=!i&&e.length>3,h=e.length>4,g=a&&r>1,_=a&&r>2,b=r>3,x=64,v=ye(d),w=[{type:12,data:l},{type:12,data:v},{type:12,data:d},{type:1,data:t.epsilon}],S=T=>{let z=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],E=[R("x",e[0].dataType,e[0].dims,v),R("skip",e[1].dataType,e[1].dims,v),R("gamma",e[2].dataType,e[2].dims,v)];f&&E.push(R("beta",e[3].dataType,e[3].dims,v)),h&&E.push(R("bias",e[4].dataType,e[4].dims,v)),E.push(j("output",e[0].dataType,u,v)),g&&E.push(j("mean_output",1,c)),_&&E.push(j("inv_std_output",1,c)),b&&E.push(j("input_skip_bias_sum",e[0].dataType,u,v));let O=Se(e[0].dataType),N=Se(1,v);return`

      ${T.registerUniforms(z).declareVariables(...E)}
      var<workgroup> sum_shared : array<${N}, ${x}>;
      var<workgroup> sum_squared_shared : array<${N}, ${x}>;

      ${T.mainStart([x,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${x};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${x};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${x-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${h?"bias[offset1d + i]":O+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${b?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${qt(O,v,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${x};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${wt("sum",v)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${wt("square_sum",v)} / f32(uniforms.hidden_size) ${i?"":"- mean * mean"} + uniforms.epsilon);
        ${g?"mean_output[global_idx] = mean;":""}
        ${_?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?"":`- ${O}(mean)`}) *
            ${O}(inv_std_dev) * gamma[offset1d + i]
            ${f?"+ beta[offset1d + i]":""};
        }
      }`},k=[{dims:u,dataType:e[0].dataType}];return r>1&&k.push({dims:c,dataType:1}),r>2&&k.push({dims:c,dataType:1}),r>3&&k.push({dims:n,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${v};${g};${_};${b}`,inputDependencies:e.map((T,z)=>"type")},getShaderSource:S,getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(l/d)},programUniforms:w})}},Ff=(e,t)=>{rd(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(ad(e.inputs,t,e.outputCount,!1),{outputs:r})}}),id,nr,nd,vi,sd,od,jf,Vf,Kg=P(()=>{ee(),ae(),$e(),ne(),id=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,a)=>{if(e[a+1].dataType!==6&&e[a+1].dataType!==7)throw new Error(`Input ${a} must be an array of int32 or int64`)})},nr=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(a=>r.push(Number(a)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(a=>r.push(Number(a)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},nd=(e,t)=>{if(e.length>1){let r=nr(e,1),a=nr(e,2),i=nr(e,3);return i.length===0&&(i=[...Array(e[0].dims.length).keys()]),pe({starts:r,ends:a,axes:i})}else return t},vi=(e,t,r,a,i)=>{let n=e;return e<0&&(n+=r[a[t]]),i[t]<0?Math.max(0,Math.min(n,r[a[t]]-1)):Math.max(0,Math.min(n,r[a[t]]))},sd=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length}; i >= 0; i--) {
            let input_shape_i = ${V("uniforms.input_shape","i",r.length)};
            let steps_i = ${V("uniforms.steps","i",r.length)};
            let signs_i = ${V("uniforms.signs","i",r.length)};
            let starts_i = ${V("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,od=(e,t)=>{let r=e[0].dims,a=C.size(r),i=t.axes.length>0?C.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],n=nr(e,4);n.forEach(v=>v!==0||(()=>{throw new Error("step cannot be 0")})),n.length===0&&(n=Array(i.length).fill(1));let s=t.starts.map((v,w)=>vi(v,w,r,i,n)),u=t.ends.map((v,w)=>vi(v,w,r,i,n));if(i.length!==s.length||i.length!==u.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==r.length)for(let v=0;v<r.length;++v)i.includes(v)||(s.splice(v,0,0),u.splice(v,0,r[v]),n.splice(v,0,1));let l=n.map(v=>Math.sign(v));n.forEach((v,w,S)=>{if(v<0){let k=(u[w]-s[w])/v,T=s[w],z=T+k*n[w];s[w]=z,u[w]=T,S[w]=-v}});let d=r.slice(0);i.forEach((v,w)=>{d[v]=Math.ceil((u[v]-s[v])/n[v])});let c={dims:d,dataType:e[0].dataType},f=j("output",e[0].dataType,d.length),h=R("input",e[0].dataType,e[0].dims.length),g=C.size(d),_=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:n.length}],b=[{type:12,data:g},{type:12,data:s},{type:6,data:l},{type:12,data:n},...K(e[0].dims,d)],x=v=>`
      ${v.registerUniforms(_).declareVariables(h,f)}
        ${sd(h,f,r)}
        ${v.mainStart()}
          ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${f.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${f.setByOffset("global_idx",h.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${l.length}_${s.length}_${n.length}`,inputDependencies:["rank"]},getShaderSource:x,getRunData:()=>({outputs:[c],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:b})}},jf=(e,t)=>{id(e.inputs,t);let r=nd(e.inputs,t);e.compute(od(e.inputs,r),{inputs:[0]})},Vf=e=>{let t=e.starts,r=e.ends,a=e.axes;return pe({starts:t,ends:r,axes:a})}}),ud,ld,Gf,Hf,Zg=P(()=>{ee(),ae(),$e(),$t(),ne(),ud=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},ld=(e,t)=>{let r=e.inputs[0],a=r.dims,i=C.size(a),n=a.length,s=C.normalizeAxis(t.axis,n),u=s<a.length-1,l,d=[];u?(d=Array.from({length:n},(E,O)=>O),d[s]=n-1,d[n-1]=s,l=e.compute(Be(r,d),{inputs:[r],outputs:[-1]})[0]):l=r;let c=l.dims,f=c[n-1],h=i/f,g=ye(f),_=f/g,b=64;h===1&&(b=256);let x=(E,O)=>O===4?`max(max(${E}.x, ${E}.y), max(${E}.z, ${E}.w))`:O===2?`max(${E}.x, ${E}.y)`:O===3?`max(max(${E}.x, ${E}.y), ${E}.z)`:E,v=R("x",l.dataType,l.dims,g),w=j("result",l.dataType,l.dims,g),S=v.type.value,k=Se(l.dataType)==="f32"?`var threadMax = ${S}(-3.402823e+38f);`:`var threadMax = ${S}(-65504.0h);`,T=E=>`
      var<workgroup> rowMaxShared : ${S};
      var<workgroup> rowSumShared : ${S};
      var<workgroup> threadShared : array<${S}, ${b}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${S} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${S}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${E.registerUniform("packedCols","i32").declareVariables(v,w)}
      ${E.mainStart(b)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${b};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${k}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${S}(${x("threadShared[0]",g)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${S}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${S}(${wt("threadShared[0]",g)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`,z=e.compute({name:"Softmax",shaderCache:{hint:`${g};${b}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:c,dataType:l.dataType}],dispatchGroup:{x:h},programUniforms:[{type:6,data:_}]}),getShaderSource:T},{inputs:[l],outputs:[u?-1:0]})[0];u&&e.compute(Be(z,d),{inputs:[z]})},Gf=(e,t)=>{ud(e.inputs),ld(e,t)},Hf=e=>pe({axis:e.axis})}),xi,dd,pd,cd,Kf,Qg=P(()=>{ee(),ae(),ne(),xi=e=>Array.from(e.getBigInt64Array(),Number),dd=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(xi(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},pd=(e,t)=>{let r=[];for(let a=0;a<e.length;++a)r.push(e[a]*t[a]);return r},cd=(e,t)=>{let r=e[0].dims,a=t??xi(e[1]),i=pd(r,a),n=C.size(i),s=e[0].dataType,u=R("input",s,r.length),l=j("output",s,i.length),d=c=>`
      const inputShape = ${u.indices(...r)};
      ${c.registerUniform("output_size","u32").declareVariables(u,l)}
      ${c.mainStart()}
      ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${l.offsetToIndices("global_idx")};
      var input_indices: ${u.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${u.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${l.indicesGet("output_indices","i")}  % input_dim_i;

        ${u.indicesSet("input_indices","i","input_dim_value")}
      }
      ${l.setByOffset("global_idx",u.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${a}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:[{type:12,data:n},...K(e[0].dims,i)]}),getShaderSource:d}},Kf=e=>{dd(e.inputs),e.compute(cd(e.inputs),{inputs:[0]})}}),fd,hd,Zf,Xg=P(()=>{ee(),ae(),ne(),fd=(e,t,r,a,i)=>{let n=j("output_data",i,r.length,4),s=R("a_data",t[1].dataType,t[1].dims.length,4),u=R("b_data",t[2].dataType,t[2].dims.length,4),l=R("c_data",t[0].dataType,t[0].dims.length,4),d,c=(f,h,g)=>`select(${h}, ${f}, ${g})`;if(!a)d=n.setByOffset("global_idx",c(s.getByOffset("global_idx"),u.getByOffset("global_idx"),l.getByOffset("global_idx")));else{let f=(h,g,_="")=>{let b=`a_data[index_a${g}][component_a${g}]`,x=`b_data[index_b${g}][component_b${g}]`,v=`bool(c_data[index_c${g}] & (0xffu << (component_c${g} * 8)))`;return`
            let output_indices${g} = ${n.offsetToIndices(`global_idx * 4u + ${g}u`)};
            let offset_a${g} = ${s.broadcastedIndicesToOffset(`output_indices${g}`,n)};
            let offset_b${g} = ${u.broadcastedIndicesToOffset(`output_indices${g}`,n)};
            let offset_c${g} = ${l.broadcastedIndicesToOffset(`output_indices${g}`,n)};
            let index_a${g} = offset_a${g} / 4u;
            let index_b${g} = offset_b${g} / 4u;
            let index_c${g} = offset_c${g} / 4u;
            let component_a${g} = offset_a${g} % 4u;
            let component_b${g} = offset_b${g} % 4u;
            let component_c${g} = offset_c${g} % 4u;
            ${h}[${g}] = ${_}(${c(b,x,v)});
          `};i===9?d=`
            var data = vec4<u32>(0);
            ${f("data",0,"u32")}
            ${f("data",1,"u32")}
            ${f("data",2,"u32")}
            ${f("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:d=`
            ${f("output_data[global_idx]",0)}
            ${f("output_data[global_idx]",1)}
            ${f("output_data[global_idx]",2)}
            ${f("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(l,s,u,n)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${d}
      }`},hd=e=>{let t=e[1].dims,r=e[2].dims,a=e[0].dims,i=e[1].dataType,n=!(C.areEqual(t,r)&&C.areEqual(r,a)),s=t,u=C.size(t);if(n){let d=jt.calcShape(jt.calcShape(t,r,!1),a,!1);if(!d)throw new Error("Can't perform where op on the given tensors");s=d,u=C.size(s)}let l=Math.ceil(u/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>fd(d,e,s,n,i),getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:Math.ceil(u/64/4)},programUniforms:[{type:12,data:l},...K(a,t,r,s)]})}},Zf=e=>{e.compute(hd(e.inputs))}}),Qf,Yg=P(()=>{cg(),hn(),fg(),hg(),mg(),gg(),_g(),vg(),kg(),Sg(),Tg(),Ig(),Eg(),zg(),Cg(),Ag(),Og(),Mg(),Rg(),Bg(),Ng(),Dg(),Pg(),Ug(),Wg(),mf(),Lg(),qg(),Fg(),jg(),Vg(),fn(),Gg(),wf(),Hg(),Kg(),Zg(),yf(),Qg(),$t(),mn(),Xg(),Qf=new Map([["Abs",[qp]],["Acos",[Fp]],["Acosh",[jp]],["Add",[kc]],["ArgMax",[Pp,Di]],["ArgMin",[Dp,Di]],["Asin",[Vp]],["Asinh",[Gp]],["Atan",[Hp]],["Atanh",[Kp]],["Attention",[Up]],["AveragePool",[zf,Ef]],["BatchNormalization",[Wp]],["BiasAdd",[Lp]],["BiasSplitGelu",[xc]],["Cast",[Qp,Zp]],["Ceil",[Yp]],["Clip",[Xp]],["Concat",[Rc,Bc]],["Conv",[Fi,qi]],["ConvTranspose",[Vc,jc]],["Cos",[Jp]],["Cosh",[ec]],["CumSum",[Gc,Hc]],["DepthToSpace",[Kc,Zc]],["DequantizeLinear",[Nf,Df]],["Div",[Sc]],["Einsum",[Qc,Xc]],["Elu",[tc,pr]],["Equal",[Tc]],["Erf",[rc]],["Exp",[ac]],["Expand",[Yc]],["FastGelu",[Jc]],["Floor",[ic]],["FusedConv",[Fi,qi]],["Gather",[tf,ef]],["GatherElements",[uf,of]],["GatherBlockQuantized",[nf,sf]],["GatherND",[rf,af]],["Gelu",[nc]],["Gemm",[df,lf]],["GlobalAveragePool",[Af,Cf]],["GlobalMaxPool",[Bf,Rf]],["Greater",[Cc]],["GreaterOrEqual",[Oc]],["GridSample",[pf,cf]],["GroupQueryAttention",[$f]],["HardSigmoid",[fc,cc]],["InstanceNormalization",[vf]],["LayerNormalization",[xf]],["LeakyRelu",[sc,pr]],["Less",[Ac]],["LessOrEqual",[Mc]],["Log",[$c]],["MatMul",[kf]],["MatMulNBits",[Sf,Tf]],["MaxPool",[Of,Mf]],["Mul",[Ic]],["MultiHeadAttention",[hf,ff]],["Neg",[uc]],["Not",[oc]],["Pad",[If]],["Pow",[Ec]],["QuickGelu",[vc,pr]],["Range",[Pf]],["Reciprocal",[lc]],["ReduceMin",[Op]],["ReduceMean",[Ip]],["ReduceMax",[Ap]],["ReduceSum",[Rp]],["ReduceProd",[Mp]],["ReduceL1",[Ep]],["ReduceL2",[zp]],["ReduceLogSum",[Np]],["ReduceLogSumExp",[Cp]],["ReduceSumSquare",[Bp]],["Relu",[dc]],["Resize",[Lf,qf]],["RotaryEmbedding",[bf]],["ScatterND",[Wf,Uf]],["Sigmoid",[pc]],["Sin",[hc]],["Sinh",[mc]],["Slice",[jf,Vf]],["SkipLayerNormalization",[Ff]],["Split",[gf,_f]],["Sqrt",[gc]],["Softmax",[Gf,Hf]],["Sub",[zc]],["Tan",[_c]],["Tanh",[yc]],["ThresholdedRelu",[wc,pr]],["Tile",[Kf]],["Transpose",[mp,gp]],["Where",[Zf]]])}),Xf,Jg=P(()=>{Xe(),dt(),ne(),Xf=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,a,i){it(e.programInfo.name);let n=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let u=[];for(let d of t)u.push({binding:u.length,resource:{buffer:d.buffer}});for(let d of r)u.push({binding:u.length,resource:{buffer:d.buffer}});i&&u.push({binding:u.length,resource:i});let l=n.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:u,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:l,dispatchGroup:a};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}s.setPipeline(e.computePipeline),s.setBindGroup(0,l),s.dispatchWorkgroups(...a),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Qe(e.programInfo.name)}dispose(){}build(e,t){it(e.name);let r=this.backend.device,a=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(d=>{r.features.has(d.feature)&&a.push(`enable ${d.extension};`)});let i=hp(t,this.backend.device.limits),n=e.getShaderSource(i),s=`${a.join(`
`)}
${i.additionalImplementations}
${n}`,u=r.createShaderModule({code:s,label:e.name});ue("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let l=r.createComputePipeline({compute:{module:u,entryPoint:"main"},layout:"auto",label:e.name});return Qe(e.name),{programInfo:e,computePipeline:l,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,a=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&r<=i&&a<=i)return[t,r,a];let n=t*r*a,s=Math.ceil(Math.sqrt(n));if(s>i){if(s=Math.ceil(Math.cbrt(n)),s>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),Yf={};Gt(Yf,{WebGpuBackend:()=>Jf});var md,gd,_d,Jf,e0=P(()=>{Xe(),ee(),dt(),lp(),dg(),Yg(),Jg(),md=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let a=0;a<e.length;++a){let i=e[a].dataType;switch(t[a]){case"none":{r.push("");break}case"type":{r.push(`${i}`);break}case"rank":{let n=e[a].dims.length;r.push(`${i};${n}`);break}case"dims":{let n=e[a].dims.join(",");r.push(`${i};${n}`);break}default:throw new Error(`unsupported input dependency: ${t[a]}`)}}return r.join("|")},gd=(e,t,r)=>{let a=e.name;return e.shaderCache?.hint&&(a+="["+e.shaderCache.hint+"]"),a+=":"+r+`:${md(t,e.shaderCache?.inputDependencies??new Array(t.length).fill("dims"))}`,a},_d=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Jf=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],a={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},i=n=>t.features.has(n)&&r.push(n)&&!0;i("chromium-experimental-timestamp-query-inside-passes")||i("timestamp-query"),i("shader-f16"),i("subgroups"),this.device=await t.requestDevice(a),this.adapterInfo=new _d(t.info||await t.requestAdapterInfo()),this.gpuDataManager=cp(this),this.programManager=new Xf(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,ln(e.logLevel,!!e.debug),this.device.onuncapturederror=n=>{n.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${n.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;it(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let a=0;a<t.length/2;a++){let i=r[a],n=i.kernelId,s=this.kernels.get(n),u=s.kernelType,l=s.kernelName,d=i.programName,c=i.inputTensorViews,f=i.outputTensorViews,h=t[a*2],g=t[a*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=h);let _=Number(h-this.queryTimeBase),b=Number(g-this.queryTimeBase);if(!Number.isSafeInteger(_)||!Number.isSafeInteger(b))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:c.map(x=>({dims:x.dims,dataType:lt(x.dataType)})),outputsMetadata:f.map(x=>({dims:x.dims,dataType:lt(x.dataType)})),kernelId:n,kernelType:u,kernelName:l,programName:d,startTime:_,endTime:b});else{let x="";c.forEach((w,S)=>{x+=`input[${S}]: [${w.dims}] | ${lt(w.dataType)}, `});let v="";f.forEach((w,S)=>{v+=`output[${S}]: [${w.dims}] | ${lt(w.dataType)}, `}),console.log(`[profiling] kernel "${n}|${u}|${l}|${d}" ${x}${v}execution time: ${b-_} ns`)}Zr("GPU",`${d}::${h}::${g}`)}e.unmap(),this.pendingQueries.delete(e)}),Qe()}run(e,t,r,a,i,n){it(e.name);let s=[];for(let w=0;w<t.length;++w){let S=t[w].data;if(S===0)continue;let k=this.gpuDataManager.get(S);if(!k)throw new Error(`no GPU data for input: ${S}`);s.push(k)}let{outputs:u,dispatchGroup:l,programUniforms:d}=e.getRunData(t),c=r.length===0?u.map((w,S)=>S):r;if(c.length!==u.length)throw new Error(`Output size ${c.length} must be equal to ${u.length}.`);let f=[],h=[];for(let w=0;w<u.length;++w){if(!Number.isInteger(c[w])||c[w]<-3||c[w]>=n)throw new Error(`Invalid output index: ${c[w]}`);if(c[w]===-3)continue;let S=c[w]===-1,k=c[w]===-2,T=S||k?i(u[w].dataType,u[w].dims):a(c[w],u[w].dataType,u[w].dims);if(f.push(T),T.data===0)continue;let z=this.gpuDataManager.get(T.data);if(!z)throw new Error(`no GPU data for output: ${T.data}`);if(S&&this.temporaryData.push(z),k){let E=this.kernelPersistentData.get(this.currentKernelId);E||(E=[],this.kernelPersistentData.set(this.currentKernelId,E)),E.push(z)}h.push(z)}if(s.length!==t.length||h.length!==f.length){if(h.length===0)return Qe(e.name),f;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let g;if(d){let w=0,S=[];d.forEach(E=>{let O=typeof E.data=="number"?[E.data]:E.data;if(O.length===0)return;let N=E.type===10?2:4,F,Z;E.type===10?(Z=O.length>4?16:O.length>2?8:O.length*N,F=O.length>4?16:N*O.length):(Z=O.length<=2?O.length*N:16,F=16),w=Math.ceil(w/Z)*Z,S.push(w);let G=E.type===10?8:4;w+=O.length>4?Math.ceil(O.length/G)*F:O.length*N});let k=16;w=Math.ceil(w/k)*k;let T=new ArrayBuffer(w);d.forEach((E,O)=>{let N=S[O],F=typeof E.data=="number"?[E.data]:E.data;if(E.type===6)new Int32Array(T,N,F.length).set(F);else if(E.type===12)new Uint32Array(T,N,F.length).set(F);else if(E.type===10)new Uint16Array(T,N,F.length).set(F);else if(E.type===1)new Float32Array(T,N,F.length).set(F);else throw new Error(`Unsupported uniform type: ${lt(E.type)}`)});let z=this.gpuDataManager.create(w,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(z.buffer,0,T,0,w),this.gpuDataManager.release(z.id),g={offset:0,size:w,buffer:z.buffer}}let _=this.programManager.normalizeDispatchGroupSize(l),b=_[1]===1&&_[2]===1,x=gd(e,t,b),v=this.programManager.getArtifact(x);if(v||(v=this.programManager.build(e,_),this.programManager.setArtifact(x,v),ue("info",()=>`[artifact] key: ${x}, programName: ${e.name}`)),d&&v.uniformVariablesInfo){if(d.length!==v.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${v.uniformVariablesInfo.length}, got ${d.length} in program "${v.programInfo.name}".`);for(let w=0;w<d.length;w++){let S=d[w],k=S.type,T=typeof S.data=="number"?1:S.data.length,[z,E]=v.uniformVariablesInfo[w];if(k!==z||T!==E)throw new Error(`Uniform variable ${w} mismatch: expect type ${z} with size ${E}, got type ${k} with size ${T} in program "${v.programInfo.name}".`)}}if(ue("info",()=>`[ProgramManager] run "${e.name}" (key=${x}) with ${_[0]}x${_[1]}x${_[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let w={kernelId:this.currentKernelId,programName:v.programInfo.name,inputTensorViews:t,outputTensorViews:f};this.pendingKernels.push(w),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(w)}return this.programManager.run(v,s,h,_,g),Qe(e.name),f}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,a){let i=Qf.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);let n={kernelType:e,kernelName:a,kernelEntry:i[0],attributes:[i[1],r]};this.kernels.set(t,n)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let a=this.kernels.get(e);if(!a)throw new Error(`kernel not created: ${e}`);let i=a.kernelType,n=a.kernelName,s=a.kernelEntry,u=a.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${n}" is not allowed to be called recursively`);this.currentKernelId=e,u[0]&&(u[1]=u[0](u[1]),u[0]=void 0),ue("info",()=>`[WebGPU] Start to run kernel "[${i}] ${n}"...`);let l=this.env.debug;this.temporaryData=[];try{return l&&this.device.pushErrorScope("validation"),s(t,u[1]),0}catch(d){return r.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${n}" failed. ${d}`)),1}finally{l&&r.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${i}] ${n}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,a){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let n=i.get(t),s=this.gpuDataManager.registerExternalBuffer(r,a,n);return i.set(t,[s,r]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let a=await Ri(this,e,t);return dn(a.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){ue("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){ue("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){ue("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let a=0;a<r;a++){let i=this.getComputePassEncoder(),n=e[a];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(n.computePipeline),i.setBindGroup(0,n.bindGroup),i.dispatchWorkgroups(...n.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[a]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),eh={};Gt(eh,{init:()=>th});var Lr,yd,th,t0=P(()=>{ee(),dt(),ae(),lg(),Lr=class rh{constructor(t,r,a,i){this.module=t,this.dataType=r,this.data=a,this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=C.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=C.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=C.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=C.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(C.size(t)!==C.size(this.dims))throw new Error("Invalid new shape");return new rh(this.module,this.dataType,this.data,t)}},yd=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let a=e.PTR_SIZE,i=r/e.PTR_SIZE,n=a===4?"i32":"i64";this.opKernelContext=Number(e.getValue(a*i++,n));let s=Number(e.getValue(a*i++,n));this.outputCount=Number(e.getValue(a*i++,n)),this.customDataOffset=Number(e.getValue(a*i++,"*")),this.customDataSize=Number(e.getValue(a*i++,n));let u=[];for(let l=0;l<s;l++){let d=Number(e.getValue(a*i++,n)),c=Number(e.getValue(a*i++,"*")),f=Number(e.getValue(a*i++,n)),h=[];for(let g=0;g<f;g++)h.push(Number(e.getValue(a*i++,n)));u.push(new Lr(e,d,c,h))}this.inputs=u}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){let r=t?.inputs?.map(s=>typeof s=="number"?this.inputs[s]:s)??this.inputs,a=t?.outputs??[],i=(s,u,l)=>new Lr(this.module,u,this.output(s,l),l),n=(s,u)=>{let l=Ct(s,u);if(!l)throw new Error(`Unsupported data type: ${s}`);let d=l>0?this.backend.gpuDataManager.create(l).id:0;return new Lr(this.module,s,d,u)};return this.backend.run(e,r,a,i,n,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let a=this.module.PTR_SIZE,i=a===4?"i32":"i64",n=this.module.stackAlloc((1+t.length)*a);this.module.setValue(n,t.length,i);for(let s=0;s<t.length;s++)this.module.setValue(n+a*(s+1),t[s],i);return this.module._JsepOutput(this.opKernelContext,e,n)}catch(a){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${a}`)}finally{this.module.stackRestore(r)}}},th=async(e,t,r,a)=>{let i=t.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let n=(e0(),hr(Yf)).WebGpuBackend,s=new n;await s.initialize(r,a),i("webgpu",[s,u=>s.alloc(Number(u)),u=>s.free(u),(u,l,d,c=!1)=>{if(c)ue("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(u)}, dst=${Number(l)}, size=${Number(d)}`),s.memcpy(Number(u),Number(l));else{ue("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(u)}, gpuDataId=${Number(l)}, size=${Number(d)}`);let f=t.HEAPU8.subarray(Number(u>>>0),Number(u>>>0)+Number(d));s.upload(Number(l),f)}},async(u,l,d)=>{ue("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${u}, dataOffset=${l}, size=${d}`),await s.download(Number(u),()=>t.HEAPU8.subarray(Number(l)>>>0,Number(l+d)>>>0))},(u,l,d)=>s.createKernel(u,Number(l),d,t.UTF8ToString(t._JsepGetNodeName(Number(l)))),u=>s.releaseKernel(u),(u,l,d,c)=>{ue("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${u}, contextDataOffset=${l}`);let f=new yd(t,s,Number(l));return s.computeKernel(Number(u),f,c)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let n=new pp(r);i("webnn",[n,()=>n.reserveTensorId(),s=>n.releaseTensorId(s),async(s,u,l,d,c)=>n.ensureTensor(s,u,l,d,c),(s,u)=>{n.uploadTensor(s,u)},async(s,u)=>n.downloadTensor(s,u)])}}}),bd,$n,vn,yt,wd,ki,ra,xn,kn,Si,Sn,Tn,In,ah=P(()=>{sg(),og(),ee(),Bt(),an(),np(),bd=(e,t)=>{ge()._OrtInit(e,t)!==0&&ce("Can't initialize onnxruntime.")},$n=async e=>{bd(e.wasm.numThreads,Xr(e.logLevel))},vn=async(e,t)=>{ge().asyncInit?.();{let r=(t0(),hr(eh)).init;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");let a=e.webgpu.adapter;if(a){if(typeof a.limits!="object"||typeof a.features!="object"||typeof a.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let i=e.webgpu.powerPreference;if(i!==void 0&&i!=="low-power"&&i!=="high-performance")throw new Error(`Invalid powerPreference setting: "${i}"`);let n=e.webgpu.forceFallbackAdapter;if(n!==void 0&&typeof n!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${n}"`);if(a=await navigator.gpu.requestAdapter({powerPreference:i,forceFallbackAdapter:n}),!a)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}await r("webgpu",ge(),e,a)}if(t==="webnn"){if(typeof navigator>"u"||!navigator.ml)throw new Error("WebNN is not supported in current environment");await r("webnn",ge(),e)}}},yt=new Map,wd=e=>{let t=ge(),r=t.stackSave();try{let a=t.PTR_SIZE,i=t.stackAlloc(2*a);t._OrtGetInputOutputCount(e,i,i+a)!==0&&ce("Can't get session input/output count.");let n=a===4?"i32":"i64";return[Number(t.getValue(i,n)),Number(t.getValue(i+a,n))]}finally{t.stackRestore(r)}},ki=(e,t)=>{let r=ge(),a=r.stackSave(),i=0;try{let n=r.PTR_SIZE,s=r.stackAlloc(2*n);r._OrtGetInputOutputMetadata(e,t,s,s+n)!==0&&ce("Can't get session input/output metadata.");let u=Number(r.getValue(s,"*"));i=Number(r.getValue(s+n,"*"));let l=r.HEAP32[i/4];if(l===0)return[u,0];let d=r.HEAPU32[i/4+1],c=[];for(let f=0;f<d;f++){let h=Number(r.getValue(i+8+f*n,"*"));c.push(h!==0?r.UTF8ToString(h):Number(r.getValue(i+8+(f+d)*n,"*")))}return[u,l,c]}finally{r.stackRestore(a),i!==0&&r._OrtFree(i)}},ra=e=>{let t=ge(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},xn=async(e,t)=>{let r,a,i=ge();Array.isArray(e)?[r,a]=e:e.buffer===i.HEAPU8.buffer?[r,a]=[e.byteOffset,e.byteLength]:[r,a]=ra(e);let n=0,s=0,u=0,l=[],d=[],c=[];try{if([s,l]=await ip(t),t?.externalData&&i.mountExternalData){let k=[];for(let T of t.externalData){let z=typeof T=="string"?T:T.path;k.push(un(typeof T=="string"?T:T.data).then(E=>{i.mountExternalData(z,E)}))}await Promise.all(k)}for(let k of t?.executionProviders??[])if((typeof k=="string"?k:k.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,typeof k!="string"){let T=k,z=T?.context,E=T?.gpuDevice,O=T?.deviceType,N=T?.powerPreference;z?i.currentContext=z:E?i.currentContext=await i.webnnCreateMLContext(E):i.currentContext=await i.webnnCreateMLContext({deviceType:O,powerPreference:N})}else i.currentContext=await i.webnnCreateMLContext();break}n=await i._OrtCreateSession(r,a,s),i.webgpuOnCreateSession?.(n),n===0&&ce("Can't create a session."),i.jsepOnCreateSession?.(),i.currentContext&&(i.webnnRegisterMLContext(n,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[f,h]=wd(n),g=!!t?.enableGraphCapture,_=[],b=[],x=[],v=[],w=[];for(let k=0;k<f;k++){let[T,z,E]=ki(n,k);T===0&&ce("Can't get an input name."),d.push(T);let O=i.UTF8ToString(T);_.push(O),x.push(z===0?{name:O,isTensor:!1}:{name:O,isTensor:!0,type:lt(z),shape:E})}for(let k=0;k<h;k++){let[T,z,E]=ki(n,k+f);T===0&&ce("Can't get an output name."),c.push(T);let O=i.UTF8ToString(T);b.push(O),v.push(z===0?{name:O,isTensor:!1}:{name:O,isTensor:!0,type:lt(z),shape:E});{if(g&&t?.preferredOutputLocation===void 0){w.push("gpu-buffer");continue}let N=typeof t?.preferredOutputLocation=="string"?t.preferredOutputLocation:t?.preferredOutputLocation?.[O]??"cpu";if(N!=="cpu"&&N!=="cpu-pinned"&&N!=="gpu-buffer"&&N!=="ml-tensor")throw new Error(`Not supported preferred output location: ${N}.`);if(g&&N!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${N}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);w.push(N)}}let S=null;return w.some(k=>k==="gpu-buffer"||k==="ml-tensor")&&(u=i._OrtCreateBinding(n),u===0&&ce("Can't create IO binding."),S={handle:u,outputPreferredLocations:w,outputPreferredLocationsEncoded:w.map(k=>Oi(k))}),yt.set(n,[n,d,c,S,g,!1]),[n,_,b,x,v]}catch(f){throw d.forEach(h=>i._OrtFree(h)),c.forEach(h=>i._OrtFree(h)),u!==0&&i._OrtReleaseBinding(u)!==0&&ce("Can't release IO binding."),n!==0&&i._OrtReleaseSession(n)!==0&&ce("Can't release session."),f}finally{i._free(r),s!==0&&i._OrtReleaseSessionOptions(s)!==0&&ce("Can't release session options."),l.forEach(f=>i._free(f)),i.unmountExternalData?.()}},kn=e=>{let t=ge(),r=yt.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[a,i,n,s,u]=r;s&&(u&&t._OrtClearBoundOutputs(s.handle)!==0&&ce("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&ce("Can't release IO binding.")),t.jsepOnReleaseSession?.(e),t.webnnOnReleaseSession?.(e),t.webgpuOnReleaseSession?.(e),i.forEach(l=>t._OrtFree(l)),n.forEach(l=>t._OrtFree(l)),t._OrtReleaseSession(a)!==0&&ce("Can't release session."),yt.delete(e)},Si=async(e,t,r,a,i,n,s=!1)=>{if(!e){t.push(0);return}let u=ge(),l=u.PTR_SIZE,d=e[0],c=e[1],f=e[3],h=f,g,_;if(d==="string"&&(f==="gpu-buffer"||f==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&f!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${n} when enableGraphCapture is true.`);if(f==="gpu-buffer"){let v=e[2].gpuBuffer;_=Ct(Wt(d),c);{let w=u.jsepRegisterBuffer;if(!w)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');g=w(a,n,v,_)}}else if(f==="ml-tensor"){let v=e[2].mlTensor;_=Ct(Wt(d),c);let w=u.webnnRegisterMLTensor;if(!w)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');g=w(a,v,Wt(d),c)}else{let v=e[2];if(Array.isArray(v)){_=l*v.length,g=u._malloc(_),r.push(g);for(let w=0;w<v.length;w++){if(typeof v[w]!="string")throw new TypeError(`tensor data at index ${w} is not a string`);u.setValue(g+w*l,Ze(v[w],r),"*")}}else{let w=u.webnnIsGraphInput;if(d!=="string"&&w){let S=u.UTF8ToString(i);if(w(a,S)){let k=Wt(d);_=Ct(k,c),h="ml-tensor";let T=u.webnnCreateTemporaryTensor,z=u.webnnUploadTensor;if(!T||!z)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let E=await T(a,k,c);z(E,new Uint8Array(v.buffer,v.byteOffset,v.byteLength)),g=E}else _=v.byteLength,g=u._malloc(_),r.push(g),u.HEAPU8.set(new Uint8Array(v.buffer,v.byteOffset,_),g)}else _=v.byteLength,g=u._malloc(_),r.push(g),u.HEAPU8.set(new Uint8Array(v.buffer,v.byteOffset,_),g)}}let b=u.stackSave(),x=u.stackAlloc(4*c.length);try{c.forEach((w,S)=>u.setValue(x+S*l,w,l===4?"i32":"i64"));let v=u._OrtCreateTensor(Wt(d),g,_,x,c.length,Oi(h));v===0&&ce(`Can't create tensor for input/output. session=${a}, index=${n}.`),t.push(v)}finally{u.stackRestore(b)}},Sn=async(e,t,r,a,i,n)=>{let s=ge(),u=s.PTR_SIZE,l=yt.get(e);if(!l)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=l[0],c=l[1],f=l[2],h=l[3],g=l[4],_=l[5],b=t.length,x=a.length,v=0,w=[],S=[],k=[],T=[],z=s.stackSave(),E=s.stackAlloc(b*u),O=s.stackAlloc(b*u),N=s.stackAlloc(x*u),F=s.stackAlloc(x*u);try{[v,w]=ap(n);for(let U=0;U<b;U++)await Si(r[U],S,T,e,c[t[U]],t[U],g);for(let U=0;U<x;U++)await Si(i[U],k,T,e,f[a[U]],b+a[U],g);for(let U=0;U<b;U++)s.setValue(E+U*u,S[U],"*"),s.setValue(O+U*u,c[t[U]],"*");for(let U=0;U<x;U++)s.setValue(N+U*u,k[U],"*"),s.setValue(F+U*u,f[a[U]],"*");if(h&&!_){let{handle:U,outputPreferredLocations:J,outputPreferredLocationsEncoded:oe}=h;if(c.length!==b)throw new Error(`input count from feeds (${b}) is expected to be always equal to model's input count (${c.length}).`);for(let q=0;q<b;q++){let Y=t[q];await s._OrtBindInput(U,c[Y],S[q])!==0&&ce(`Can't bind input[${q}] for session=${e}.`)}for(let q=0;q<x;q++){let Y=a[q];i[q]?.[3]?s._OrtBindOutput(U,f[Y],k[q],0)!==0&&ce(`Can't bind pre-allocated output[${q}] for session=${e}.`):s._OrtBindOutput(U,f[Y],0,oe[Y])!==0&&ce(`Can't bind output[${q}] to ${J[q]} for session=${e}.`)}yt.set(e,[d,c,f,h,g,!0])}s.jsepOnRunStart?.(d),s.webnnOnRunStart?.(d);let Z;h?Z=await s._OrtRunWithBinding(d,h.handle,x,N,v):Z=await s._OrtRun(d,O,E,b,F,x,N,v),Z!==0&&ce("failed to call OrtRun().");let G=[];for(let U=0;U<x;U++){let J=Number(s.getValue(N+U*u,"*"));if(J===k[U]){G.push(i[U]);continue}let oe=s.stackSave(),q=s.stackAlloc(4*u),Y=!1,re,X=0;try{s._OrtGetTensorData(J,q,q+u,q+2*u,q+3*u)!==0&&ce(`Can't access output tensor data on index ${U}.`);let he=u===4?"i32":"i64",B=Number(s.getValue(q,he));X=s.getValue(q+u,"*");let L=s.getValue(q+u*2,"*"),te=Number(s.getValue(q+u*3,he)),A=[];for(let be=0;be<te;be++)A.push(Number(s.getValue(L+be*u,he)));s._OrtFree(L)!==0&&ce("Can't free memory for tensor dims.");let ie=A.reduce((be,ve)=>be*ve,1);re=lt(B);let qe=h?.outputPreferredLocations[a[U]];if(re==="string"){if(qe==="gpu-buffer"||qe==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let be=[];for(let ve=0;ve<ie;ve++){let Fe=s.getValue(X+ve*u,"*"),Ce=s.getValue(X+(ve+1)*u,"*"),yr=ve===ie-1?void 0:Ce-Fe;be.push(s.UTF8ToString(Fe,yr))}G.push([re,A,be,"cpu"])}else if(qe==="gpu-buffer"&&ie>0){let be=s.jsepGetBuffer;if(!be)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let ve=be(X),Fe=Ct(B,ie);if(Fe===void 0||!sn(re))throw new Error(`Unsupported data type: ${re}`);Y=!0,G.push([re,A,{gpuBuffer:ve,download:s.jsepCreateDownloader(ve,Fe,re),dispose:()=>{s._OrtReleaseTensor(J)!==0&&ce("Can't release tensor.")}},"gpu-buffer"])}else if(qe==="ml-tensor"&&ie>0){let be=s.webnnEnsureTensor,ve=s.webnnIsInt64Supported;if(!be||!ve)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Ct(B,ie)===void 0||!on(re))throw new Error(`Unsupported data type: ${re}`);if(re==="int64"&&!ve(e))throw new Error('preferredLocation "ml-tensor" for int64 output is not supported by current WebNN Context.');let Fe=await be(e,X,B,A,!1);Y=!0,G.push([re,A,{mlTensor:Fe,download:s.webnnCreateMLTensorDownloader(X,re),dispose:()=>{s.webnnReleaseTensorId(X),s._OrtReleaseTensor(J)}},"ml-tensor"])}else{let be=nn(re),ve=new be(ie);new Uint8Array(ve.buffer,ve.byteOffset,ve.byteLength).set(s.HEAPU8.subarray(X,X+ve.byteLength)),G.push([re,A,ve,"cpu"])}}finally{s.stackRestore(oe),re==="string"&&X&&s._free(X),Y||s._OrtReleaseTensor(J),s.webnnOnRunEnd?.(d)}}return h&&!g&&(s._OrtClearBoundOutputs(h.handle)!==0&&ce("Can't clear bound outputs."),yt.set(e,[d,c,f,h,g,!1])),G}finally{s.stackRestore(z),S.forEach(Z=>s._OrtReleaseTensor(Z)),k.forEach(Z=>s._OrtReleaseTensor(Z)),T.forEach(Z=>s._free(Z)),v!==0&&s._OrtReleaseRunOptions(v),w.forEach(Z=>s._free(Z))}},Tn=e=>{let t=ge(),r=yt.get(e);if(!r)throw new Error("invalid session id");let a=r[0],i=t._OrtEndProfiling(a);i===0&&ce("Can't get an profile file name."),t._OrtFree(i)},In=e=>{let t=[];for(let r of e){let a=r[2];!Array.isArray(a)&&"buffer"in a&&t.push(a.buffer)}return t}}),bt,Pe,Ut,sr,or,qr,Ti,Fr,St,Tt,$d,ih,nh,sh,oh,uh,lh,dh,ph=P(()=>{Xe(),ah(),Bt(),tn(),bt=()=>!!fe.wasm.proxy&&typeof document<"u",Ut=!1,sr=!1,or=!1,Fr=new Map,St=(e,t)=>{let r=Fr.get(e);r?r.push(t):Fr.set(e,[t])},Tt=()=>{if(Ut||!sr||or||!Pe)throw new Error("worker not ready")},$d=e=>{switch(e.data.type){case"init-wasm":Ut=!1,e.data.err?(or=!0,Ti[1](e.data.err)):(sr=!0,Ti[0]()),qr&&(URL.revokeObjectURL(qr),qr=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Fr.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},ih=async()=>{if(!sr){if(Ut)throw new Error("multiple calls to 'initWasm()' detected.");if(or)throw new Error("previous call to 'initWasm()' failed.");if(Ut=!0,bt())return new Promise((e,t)=>{Pe?.terminate(),tp().then(([r,a])=>{try{Pe=a,Pe.onerror=n=>t(n),Pe.onmessage=$d,Ti=[e,t];let i={type:"init-wasm",in:fe};!i.in.wasm.wasmPaths&&(r||Ai)&&(i.in.wasm.wasmPaths={wasm:new URL(""+new URL("ort-wasm-simd-threaded.jsep-B0T3yYHD.wasm",import.meta.url).href,import.meta.url).href}),Pe.postMessage(i),qr=r}catch(i){t(i)}},t)});try{await rn(fe.wasm),await $n(fe),sr=!0}catch(e){throw or=!0,e}finally{Ut=!1}}},nh=async e=>{if(bt())return Tt(),new Promise((t,r)=>{St("init-ep",[t,r]);let a={type:"init-ep",in:{epName:e,env:fe}};Pe.postMessage(a)});await vn(fe,e)},sh=async e=>bt()?(Tt(),new Promise((t,r)=>{St("copy-from",[t,r]);let a={type:"copy-from",in:{buffer:e}};Pe.postMessage(a,[e.buffer])})):ra(e),oh=async(e,t)=>{if(bt()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Tt(),new Promise((r,a)=>{St("create",[r,a]);let i={type:"create",in:{model:e,options:{...t}}},n=[];e instanceof Uint8Array&&n.push(e.buffer),Pe.postMessage(i,n)})}else return xn(e,t)},uh=async e=>{if(bt())return Tt(),new Promise((t,r)=>{St("release",[t,r]);let a={type:"release",in:e};Pe.postMessage(a)});kn(e)},lh=async(e,t,r,a,i,n)=>{if(bt()){if(r.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return Tt(),new Promise((s,u)=>{St("run",[s,u]);let l=r,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:l,outputIndices:a,options:n}};Pe.postMessage(d,In(l))})}else return Sn(e,t,r,a,i,n)},dh=async e=>{if(bt())return Tt(),new Promise((t,r)=>{St("end-profiling",[t,r]);let a={type:"end-profiling",in:e};Pe.postMessage(a)});Tn(e)}}),Ii,vd,ch,r0=P(()=>{Xe(),ph(),ee(),en(),np(),Ii=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},vd=e=>{switch(e[3]){case"cpu":return new ke(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!sn(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:a,dispose:i}=e[2];return ke.fromGpuBuffer(r,{dataType:t,dims:e[1],download:a,dispose:i})}case"ml-tensor":{let t=e[0];if(!on(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:a,dispose:i}=e[2];return ke.fromMLTensor(r,{dataType:t,dims:e[1],download:a,dispose:i})}default:throw new Error(`invalid data location: ${e[3]}`)}},ch=class{async fetchModelAndCopyToWasmMemory(e){return sh(await un(e))}async loadModel(e,t){it();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await oh(r,t),Qe()}async dispose(){return uh(this.sessionId)}async run(e,t,r){it();let a=[],i=[];Object.entries(e).forEach(f=>{let h=f[0],g=f[1],_=this.inputNames.indexOf(h);if(_===-1)throw new Error(`invalid input '${h}'`);a.push(g),i.push(_)});let n=[],s=[];Object.entries(t).forEach(f=>{let h=f[0],g=f[1],_=this.outputNames.indexOf(h);if(_===-1)throw new Error(`invalid output '${h}'`);n.push(g),s.push(_)});let u=a.map((f,h)=>Ii(f,()=>`input "${this.inputNames[i[h]]}"`)),l=n.map((f,h)=>f?Ii(f,()=>`output "${this.outputNames[s[h]]}"`):null),d=await lh(this.sessionId,i,u,s,l,r),c={};for(let f=0;f<d.length;f++)c[this.outputNames[s[f]]]=n[f]??vd(d[f]);return Qe(),c}startProfiling(){}endProfiling(){dh(this.sessionId)}}}),fh={};Gt(fh,{OnnxruntimeWebAssemblyBackend:()=>Gi,initializeFlags:()=>Vi,wasmBackend:()=>hh});var Vi,Gi,hh,a0=P(()=>{Xe(),ph(),r0(),Vi=()=>{(typeof fe.wasm.initTimeout!="number"||fe.wasm.initTimeout<0)&&(fe.wasm.initTimeout=0);let e=fe.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),fe.wasm.simd=!1),typeof fe.wasm.proxy!="boolean"&&(fe.wasm.proxy=!1),typeof fe.wasm.trace!="boolean"&&(fe.wasm.trace=!1),typeof fe.wasm.numThreads!="number"||!Number.isInteger(fe.wasm.numThreads)||fe.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)fe.wasm.numThreads=1;else{let t=typeof navigator>"u"?qm("node:os").cpus().length:navigator.hardwareConcurrency;fe.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},Gi=class{async init(e){Vi(),await ih(),await nh(e)}async createInferenceSessionHandler(e,t){let r=new ch;return await r.loadModel(e,t),r}},hh=new Gi});Xe();Xe();Xe();var i0="1.22.0-dev.20250409-89f8206ba4";{let e=(a0(),hr(fh)).wasmBackend;Lt("webgpu",e,5),Lt("webnn",e,5),Lt("cpu",e,10),Lt("wasm",e,10)}Object.defineProperty(fe.versions,"web",{value:i0,enumerable:!0});var n0=""+new URL("ort-wasm-simd-threaded.jsep-B0TxsgQ-.mjs",import.meta.url).href,s0=""+new URL("ort-wasm-simd-threaded.jsep-B0T3yYHD.wasm",import.meta.url).href;new TextEncoder;const rt=(e,t)=>e>>>t|e<<32-t,o0=e=>(e>>>0).toString(16).padStart(8,"0");function u0(e,t){const r=e.length+9<=64?64:128,a=new Uint8Array(r);a.set(e),a[e.length]=128;const i=new DataView(a.buffer),n=t*8;return i.setUint32(r-8,Math.floor(n/4294967296)),i.setUint32(r-4,n>>>0),a}const l0=new Int32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);class d0{h=new Int32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]);w=new Int32Array(64);buf=new Uint8Array(64);bufLen=0;total=0;update(t){let r=0;if(this.total+=t.length,this.bufLen){const i=Math.min(64-this.bufLen,t.length);if(this.buf.set(t.subarray(0,i),this.bufLen),this.bufLen+=i,r=i,this.bufLen<64)return this;this.block(new DataView(this.buf.buffer),0),this.bufLen=0}const a=new DataView(t.buffer,t.byteOffset,t.byteLength);for(;r+64<=t.length;r+=64)this.block(a,r);return r<t.length&&(this.buf.set(t.subarray(r)),this.bufLen=t.length-r),this}hex(){const t=u0(this.buf.subarray(0,this.bufLen),this.total),r=new DataView(t.buffer);for(let a=0;a<t.length;a+=64)this.block(r,a);return this.bufLen=0,Array.from(this.h,o0).join("")}block(t,r){const a=this.w;for(let g=0;g<16;g++)a[g]=t.getInt32(r+g*4);for(let g=16;g<64;g++){const _=a[g-15],b=a[g-2],x=rt(_,7)^rt(_,18)^_>>>3,v=rt(b,17)^rt(b,19)^b>>>10;a[g]=a[g-16]+x+a[g-7]+v|0}const i=this.h;let n=i[0],s=i[1],u=i[2],l=i[3],d=i[4],c=i[5],f=i[6],h=i[7];for(let g=0;g<64;g++){const _=rt(d,6)^rt(d,11)^rt(d,25),b=d&c^~d&f,x=h+_+b+l0[g]+a[g]|0,v=rt(n,2)^rt(n,13)^rt(n,22),w=n&s^n&u^s&u,S=v+w|0;h=f,f=c,c=d,d=l+x|0,l=u,u=s,s=n,n=x+S|0}i[0]=i[0]+n|0,i[1]=i[1]+s|0,i[2]=i[2]+u|0,i[3]=i[3]+l|0,i[4]=i[4]+d|0,i[5]=i[5]+c|0,i[6]=i[6]+f|0,i[7]=i[7]+h|0}}const xd="aafc6e32416a594460b32413efc49d7fe4ce6d46",p0=[{path:"voice_styles/M1.json",bytes:291748,sha256:"e35604687f5d23694b8e91593a93eec0e4eca6c0b02bb8ed69139ab2ea6b0a5b"},{path:"voice_styles/M2.json",bytes:292055,sha256:"b76cbf62bac707c710cf0ae5aba5e31eea1a6339a9734bfae33ab98499534a50"},{path:"voice_styles/M3.json",bytes:290198,sha256:"ea1ac35ccb91b0d7ecad533a2fbd0eec10c91513d8951e3b25fbba99954e159b"},{path:"voice_styles/M4.json",bytes:291522,sha256:"ca8eefad4fcd989c9379032ff3e50738adc547eeb5e221b82593a6d7b3bac303"},{path:"voice_styles/M5.json",bytes:291469,sha256:"dd22b92740314321f8ae11c5e87f8dd60d060f15dd3a632b5adf77f471f77af2"},{path:"voice_styles/F1.json",bytes:292046,sha256:"bbdec6ee00231c2c742ad05483df5334cab3b52fda3ba38e6a07059c4563dbc2"},{path:"voice_styles/F2.json",bytes:292423,sha256:"7c722c6a72707b1a77f035d67f0d1351ba187738e06f7683e8c72b1df3477fc6"},{path:"voice_styles/F3.json",bytes:290794,sha256:"12f6ef2573baa2defa1128069cb59f203e3ab67c92af77b42df8a0e3a2f7c6ab"},{path:"voice_styles/F4.json",bytes:291808,sha256:"c2fa764c1225a76dfc3e2c73e8aa4f70d9ee48793860eb34c295fff01c2e032b"},{path:"voice_styles/F5.json",bytes:291479,sha256:"45966e73316415626cf41a7d1c6f3b4c70dbc1ba2bee5c1978ef0ce33244fc8d"}],Ne={id:"supertonic-3",name:"Supertonic 3",rev:xd,base:`https://huggingface.co/supertone-oss-archive/supertonic-3/resolve/${xd}/`,cacheName:"moacut-tts-v1",files:[{path:"onnx/duration_predictor.onnx",bytes:3700147,sha256:"c3eb91414d5ff8a7a239b7fe9e34e7e2bf8a8140d8375ffb14718b1c639325db"},{path:"onnx/text_encoder.onnx",bytes:36416150,sha256:"c7befd5ea8c3119769e8a6c1486c4edc6a3bc8365c67621c881bbb774b9902ff"},{path:"onnx/vector_estimator.onnx",bytes:256534781,sha256:"883ac868ea0275ef0e991524dc64f16b3c0376efd7c320af6b53f5b780d7c61c"},{path:"onnx/vocoder.onnx",bytes:101424195,sha256:"085de76dd8e8d5836d6ca66826601f615939218f90e519f70ee8a36ed2a4c4ba"},{path:"onnx/tts.json",bytes:8253,sha256:"42078d3aef1cd43ab43021f3c54f47d2d75ceb4e75f627f118890128b06a0d09"},{path:"onnx/unicode_indexer.json",bytes:277676,sha256:"9bf7346e43883a81f8645c81224f786d43c5b57f3641f6e7671a7d6c493cb24f"},...p0],totalBytes:401276744,license:"OpenRAIL-M",codeLicense:"MIT supertone-oss-archive/supertonic@1e9799e web/helper.js",voices:[{id:"M1",name:"남성 1"},{id:"M2",name:"남성 2"},{id:"M3",name:"남성 3"},{id:"M4",name:"남성 4"},{id:"M5",name:"남성 5"},{id:"F1",name:"여성 1"},{id:"F2",name:"여성 2"},{id:"F3",name:"여성 3"},{id:"F4",name:"여성 4"},{id:"F5",name:"여성 5"}],speed:{default:1.05,min:.7,max:2,rec:[.8,1.5]},steps:{default:8,fast:4},sampleRate:44100,chunkChars:120,chunkGap:.3},Ft={dp:"onnx/duration_predictor.onnx",textEnc:"onnx/text_encoder.onnx",vectorEst:"onnx/vector_estimator.onnx",vocoder:"onnx/vocoder.onnx",config:"onnx/tts.json",indexer:"onnx/unicode_indexer.json"},c0=e=>`voice_styles/${e}.json`,gr=(e,t=Ne.base)=>t+e,mh=e=>Ne.voices.some(t=>t.id===e);class nt extends Error{constructor(t,r,a){super(r),this.code=t,this.file=a,this.name="TtsDownloadError"}code;file}const f0=e=>Math.round(e/1e6),aa=e=>e.split("/").pop()??e;function En(){return typeof caches<"u"}async function h0(){if(!En())throw new nt("storage","이 브라우저는 모델을 보관할 저장소(Cache Storage)를 쓸 수 없어요. 일반 창의 최신 Chrome · Edge 로 열어 주세요.");try{return await caches.open(Ne.cacheName)}catch{throw new nt("storage","모델 저장소를 열지 못했어요. 시크릿 창이면 일반 창으로 열고 다시 받아요.")}}async function m0(e,t=Ne.files){const r=t.reduce((u,l)=>u+l.bytes,0);if(!En())return{complete:!1,cached:[],missing:t.map(u=>u.path),bytesCached:0,bytesTotal:r};const a=await caches.open(Ne.cacheName),i=[],n=[];let s=0;for(const u of t){const l=await a.match(gr(u.path,e));l&&Number(l.headers.get("content-length")??u.bytes)===u.bytes?(i.push(u.path),s+=u.bytes):n.push(u.path)}return{complete:n.length===0,cached:i,missing:n,bytesCached:s,bytesTotal:r}}async function g0(e,t){if(!En())return null;const a=await(await caches.open(Ne.cacheName)).match(gr(e,t));return a?a.arrayBuffer():null}async function _0(e={}){const t=e.files??Ne.files,r=await m0(e.base,t);if(r.complete)return{fetched:0,files:[]};const a=await h0(),i=t.filter(c=>r.missing.includes(c.path));let n=r.bytesCached,s=0;const u=[];let l=0;const d=(c,f,h,g=!1)=>{const _=Date.now();!g&&_-l<100||(l=_,e.onProgress?.({loaded:n+h,total:r.bytesTotal,file:c.path,index:r.cached.length+f+1,count:t.length,fetched:s+h}))};for(let c=0;c<i.length;c++){const f=i[c];let h=0;for(;;){const g=await y0(f,e.base,h>0,e.signal,_=>d(f,c,_));if(g.ok){try{await a.put(gr(f.path,e.base),new Response(g.blob,{headers:{"content-type":f.path.endsWith(".json")?"application/json":"application/octet-stream","content-length":String(f.bytes)}}))}catch(_){throw b0(_,f)}break}if(h++>=1)throw g.why==="size"?new nt("size",`받은 파일 크기가 맞지 않아요(${aa(f.path)}, ${g.got} / ${f.bytes} 바이트). 지우고 다시 받아요.`,f.path):new nt("sha",`받은 파일이 손상됐어요(${aa(f.path)}). 지우고 다시 받아요.`,f.path);await a.delete(gr(f.path,e.base)).catch(()=>!1)}n+=f.bytes,s+=f.bytes,u.push(f.path),d(f,c,0,!0)}return{fetched:s,files:u}}async function y0(e,t,r,a,i){if(a?.aborted)throw Ei();if(typeof navigator<"u"&&navigator.onLine===!1)throw zi();let n;try{n=await fetch(gr(e.path,t),{signal:a,...r?{cache:"reload"}:{}})}catch(c){throw a?.aborted||c?.name==="AbortError"?Ei():zi()}if(!n.ok||!n.body)throw new nt("http",`모델 파일을 받지 못했어요(${aa(e.path)}, HTTP ${n.status}). 잠시 뒤 다시 받아요.`,e.path);const s=n.body.getReader(),u=new d0,l=[];let d=0;try{for(;;){const{done:c,value:f}=await s.read();if(c||(u.update(f),l.push(f),d+=f.length,d>e.bytes))break;i(d)}}catch(c){throw a?.aborted||c?.name==="AbortError"?Ei():zi()}return d!==e.bytes?(s.cancel().catch(()=>{}),{ok:!1,why:"size",got:d}):u.hex()!==e.sha256?{ok:!1,why:"sha",got:d}:{ok:!0,blob:new Blob(l)}}const Ei=()=>new nt("abort","내려받기를 멈췄어요. 다 받은 파일은 남겨 두었다가 다음에 이어서 받아요."),zi=()=>new nt("offline","지금 오프라인이라 받을 수 없어요. 인터넷을 연결하고 다시 눌러요.");function b0(e,t){return e?.name==="QuotaExceededError"?new nt("quota",`저장 공간이 부족해요(필요 ${f0(Ne.totalBytes)} MB). 저장 공간에서 비우고 다시 받아요.`,t.path):new nt("storage",`받은 파일을 보관하지 못했어요(${aa(t.path)}). 저장 공간을 확인하고 다시 받아요.`,t.path)}const w0=["en","ko","ja","ar","bg","cs","da","de","el","es","et","fi","fr","hi","hr","hu","id","it","lt","lv","nl","pl","pt","ro","ru","sk","sl","sv","tr","uk","vi","na"],$0=/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}]+/gu,v0=[["–","-"],["‑","-"],["—","-"],["_"," "],["“",'"'],["”",'"'],["‘","'"],["’","'"],["´","'"],["`","'"],["["," "],["]"," "],["|"," "],["/"," "],["#"," "],["→"," "],["←"," "]],x0=[["@"," at "],["e.g.,","for example, "],["i.e.,","that is, "]];function k0(e,t="ko"){let r=e.normalize("NFKD");r=r.replace($0,"");for(const[a,i]of v0)r=r.replaceAll(a,i);r=r.replace(/[♥☆♡©\\]/g,"");for(const[a,i]of x0)r=r.replaceAll(a,i);for(r=r.replace(/ ,/g,",").replace(/ \./g,".").replace(/ !/g,"!").replace(/ \?/g,"?").replace(/ ;/g,";").replace(/ :/g,":").replace(/ '/g,"'");r.includes('""');)r=r.replace('""','"');for(;r.includes("''");)r=r.replace("''","'");for(;r.includes("``");)r=r.replace("``","`");if(r=r.replace(/\s+/g," ").trim(),/[.!?;:,'"')\]}…。」』】〉》›»]$/.test(r)||(r+="."),!w0.includes(t))throw new Error(`Invalid language: ${t}`);return`<${t}>${r}</${t}>`}function S0(e,t){const r=[],a=[];for(const i of e){const n=i.codePointAt(0),s=n<t.length?t[n]:-1;s==null||s<0?a.push(i):r.push(s)}return{ids:r,dropped:a}}const T0=/(?<!Mr\.|Mrs\.|Ms\.|Dr\.|Prof\.|Sr\.|Jr\.|Ph\.D\.|etc\.|e\.g\.|i\.e\.|vs\.|Inc\.|Ltd\.|Co\.|Corp\.|St\.|Ave\.|Blvd\.)(?<!\b[A-Z]\.)(?<=[.!?])\s+/;function I0(e,t=120){const r=e.trim().split(/\n\s*\n+/).filter(i=>i.trim()),a=[];for(let i of r){if(i=i.trim(),!i)continue;let n="";for(const s of i.split(T0))n.length+s.length+1<=t?n+=(n?" ":"")+s:(n&&a.push(n.trim()),n=s);n&&a.push(n.trim())}return a.flatMap(i=>E0(i,t))}function E0(e,t){if(e.length<=t)return[e];const r=[];let a=e;for(;a.length>t;){const i=a.slice(0,t+1);let n=Math.max(i.lastIndexOf(", "),i.lastIndexOf(" "));n<t*.4&&(n=t),r.push(a.slice(0,n).trim()),a=a.slice(n).trim()}return a&&r.push(a),r}function z0(e,t=e){const r=new Float32Array(t);return r.fill(1,0,Math.min(e,t)),r}function C0(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let r=t;return r=Math.imul(r^r>>>15,r|1),r^=r+Math.imul(r^r>>>7,r|61),((r^r>>>14)>>>0)/4294967296}}function A0(e,t,r){const a=Math.floor(e*t.sampleRate),i=t.baseChunkSize*t.chunkCompress,n=Math.max(1,Math.floor((a+i-1)/i)),s=t.latentDim*t.chunkCompress,u=new Float32Array(s*n);for(let d=0;d<u.length;d++){const c=Math.max(1e-4,r()),f=r();u[d]=Math.sqrt(-2*Math.log(c))*Math.cos(2*Math.PI*f)}const l=z0(n,n);return{xt:u,mask:l,dim:s,len:n}}const jr=["","일","이","삼","사","오","육","칠","팔","구"],O0=["영","일","이","삼","사","오","육","칠","팔","구"],M0=["","한","두","세","네","다섯","여섯","일곱","여덟","아홉"],R0=["","하나","둘","셋","넷","다섯","여섯","일곱","여덟","아홉"],kd=["","열","스물","서른","마흔","쉰","예순","일흔","여든","아흔"],Sd=["제로","원","투","쓰리","포","파이브","식스","세븐","에잇","나인"],B0={a:"에이",b:"비",c:"씨",d:"디",e:"이",f:"에프",g:"지",h:"에이치",i:"아이",j:"제이",k:"케이",l:"엘",m:"엠",n:"엔",o:"오",p:"피",q:"큐",r:"알",s:"에스",t:"티",u:"유",v:"브이",w:"더블유",x:"엑스",y:"와이",z:"지"},Td={ok:"오케이",pdf:"피디에프",wifi:"와이파이",youtube:"유튜브",email:"이메일",app:"앱",web:"웹",ai:"에이아이",dna:"디엔에이",rna:"알엔에이",led:"엘이디",usb:"유에스비",ph:"피에이치",gps:"지피에스",tv:"티브이",pc:"피시"},N0=[["°C","도"],["℃","도"],["°","도"],["%","퍼센트"],["kcal","킬로칼로리"],["cal","칼로리"],["kHz","킬로헤르츠"],["Hz","헤르츠"],["km/h","킬로미터 퍼 아워"],["m/s","미터 퍼 세크"],["km","킬로미터"],["cm","센티미터"],["mm","밀리미터"],["nm","나노미터"],["μm","마이크로미터"],["kg","킬로그램"],["mg","밀리그램"],["mL","밀리리터"],["ml","밀리리터"],["kW","킬로와트"],["kWh","킬로와트시"],["mA","밀리암페어"],["kΩ","킬로옴"],["Ω","옴"],["hPa","헥토파스칼"],["kPa","킬로파스칼"],["Pa","파스칼"],["kJ","킬로줄"],["mol","몰"],["ms","밀리초"],["m","미터"],["g","그램"],["L","리터"],["W","와트"],["V","볼트"],["A","암페어"],["N","뉴턴"],["J","줄"],["s","초"]],D0=["개","명","사람","번째","번","시간","시","마리","살","장","권","잔","병","그릇","가지","군데","대","벌","켤레","그루","송이","달","줄","모금","방울","곳","분째","판","바퀴","걸음","조각","덩어리","통","칸"],P0=/^(은|는|이|가|을|를|에|의|도|로|으로|와|과|만|까지|부터|보다|처럼|이나|나|이랑|랑|하고|이에요|예요|이다|입니다|이고|이며|이면|이라|라)(?![가-힣]*[개명번시])/,U0={살:99,시:12,시간:24,달:12,번:99,번째:99},W0=/^\s*(반복|되풀이|더|씩|정도|쯤|가량|만에|만|이상|이하|넘게|이나(?!\s*\d)|연속|째|안팎|내외|에\s*(걸쳐|나눠|나누어))/,L0=/(하루에|날마다|매일|일주일에|한\s*주에|한\s*달에|일\s*년에|\d+\s*년에|한\s*해에|시간에|분에|초에|몇|여러|총|모두|다시|또|계속|적어도|최소한?|최대|무려)\s*$/,q0=/(정답은|정답이|정답|답은|답이|보기|번호|문항|선택지)\s*$/,F0=/^\s*(문제|문항|보기|학생|선수|타자|출구|버스|자리|칸|방|선|줄|그림|표|카드|실험|항목|트랙|채널|게이트|레인|코스|사진|자료|영상|과제|모둠|조|팀|상자|컵|병|비커|시험관|전구|저항|단계|과정|번호|답)/,j0=/^(이에요|예요|입니다|이야|이다|이고|이며|이라|인가요|일까요|인데|은|는|이|가|을|를|과|와|하고|이랑|랑|의|에서|으로|로|부터|까지|도|처럼|보다)(?![가-힣]*\s*(반복|되풀이|씩|더|만에))/,V0=/^\s*(과|와|,|하고|이랑|랑|부터|에서|또는|이나|~|∼)\s*\d+\s*번(?!째)/,G0=/\d+\s*번(?!째)\s*(과|와|,|하고|이랑|랑|부터|에서|또는|이나|~|∼|까지)?\s*$/;function H0(e,t){return W0.test(t)||L0.test(e)?!1:V0.test(t)||G0.test(e)||q0.test(e)||F0.test(t)||j0.test(t)?!0:/^\s*([.,?!)\]」』]|$)/.test(t)}const K0=/(차|자동차|버스|트럭|컴퓨터|기계|비행기|자전거|노트북|휴대폰|스마트폰|카메라|로봇|선풍기|에어컨|기기|장치|태블릿|드론|모니터|프린터)[가-힣]{0,2}\s*$/;function It(e){if(!Number.isFinite(e)||e<0)return"";if(e===0)return"영";const t=["","만","억","조","경"];let r="",a=0;for(;e>0;){const i=e%1e4;if(i){let n="";const s=Math.floor(i/1e3),u=Math.floor(i/100)%10,l=Math.floor(i/10)%10,d=i%10;s&&(n+=(s>1?jr[s]:"")+"천"),u&&(n+=(u>1?jr[u]:"")+"백"),l&&(n+=(l>1?jr[l]:"")+"십"),d&&(n+=jr[d]),a===1&&i===1&&(n=""),r=n+t[a]+r}e=Math.floor(e/1e4),a++}return r}function Z0(e,t=!1){if(!(e>=1&&e<=99)||e%1)return null;const r=Math.floor(e/10),a=e%10;return a===0?r===2&&!t?"스무":kd[r]:kd[r]+(t?R0:M0)[a]}const Q0=e=>[...e].map(t=>O0[+t]).join("");function ur(e){const[t,r]=e.replace(/,/g,"").split("."),a=It(parseInt(t||"0",10));return r!=null&&r.length?`${a} 점 ${Q0(r)}`:a}const X0={6:"유월",10:"시월"};function Y0(e){const t=e.toLowerCase();return Td[t]?Td[t]:[...t].map(r=>B0[r]??"").join("")}function J0(e){let t=e.normalize("NFC").replace(/[–—−]/g,"-");t=t.replace(/(?<![A-Za-z])((?:[A-Z][a-z]?\d{0,2})+)(?![A-Za-z]|[.,]\d)/g,r=>/\d/.test(r)?r.replace(/([A-Z][a-z]?)(\d*)/g,(a,i,n)=>Y0(i)+(n?n.length===1?Sd[+n]:It(+n):"")):r),t=t.replace(/([A-Za-z])(\d)(?![\d.,])/g,(r,a,i)=>`${a}${Sd[+i]}`),t=t.replace(/(\d+)\s*월/g,(r,a)=>`${X0[+a]??It(+a)+"월"}`),t=t.replace(/영하\s*-(?=\d)/g,"영하 "),t=t.replace(/(^|[\s(])-(\d+(?:\.\d+)?)\s*(℃|°C)/g,(r,a,i)=>`${a}영하 ${ur(i)} 도`),t=t.replace(/(^|[\s(=])-(\d)/g,(r,a,i)=>`${a}마이너스 ${i}`),t=t.replace(/(\d+(?:\.\d+)?)\s*[~∼〜]\s*(?=\d)/g,(r,a)=>`${ur(a)}에서 `),t=t.replace(/(\d+)\s*\/\s*(\d+)(?![\d.])/g,(r,a,i)=>`${It(+i)}분의 ${It(+a)}`),t=t.replace(/(\d[\d,]*)\s*(만|억|조)(?=[\s\d]|[^가-힣]|$)/g,(r,a,i)=>`${i==="만"&&a==="1"?"":It(+a.replace(/,/g,""))}${i} `);for(const[r,a]of N0){const i=r.replace(/[.*+?^${}()|[\]\\/]/g,"\\$&");t=t.replace(new RegExp(`(\\d[\\d,]*(?:\\.\\d+)?)\\s*${i}(?![A-Za-z])`,"g"),(n,s)=>`${ur(s)} ${a}`),t=t.replace(new RegExp(`([만억조])\\s+${i}(?![A-Za-z])`,"g"),(n,s)=>`${s} ${a}`)}return t=t.replace(new RegExp(`(\\d+)\\s*(${D0.join("|")})`,"g"),(r,a,i,n,s)=>{const u=s.slice(Math.max(0,n-16),n),l=s.slice(n+r.length),d=()=>`${It(+a)} ${i}`;if(/(^|[^가-힣])제\s*$/.test(u))return d();if(a==="1"&&i==="번째")return"첫 번째";if(i==="번"&&H0(u,l)||i==="대"&&+a>=10&&+a%10===0&&!K0.test(u))return d();const c=+a<=(U0[i]??20)?Z0(+a):null;return c?`${c} ${i}`:d()}),t=t.replace(/(\d[\d,]*(?:\.\d+)?)(\s*)(?=[가-힣])/g,(r,a,i,n,s)=>`${ur(a)}${i||(P0.test(s.slice(n+a.length))?"":" ")}`),t.replace(/\d[\d,]*(?:\.\d+)?/g,r=>ur(r))}const e_=[{path:"songsam_ko.onnx",bytes:77117543,sha256:"87b87cb8de43fc6b6a79ecc4ec3fbfafd1c33631ac8de07a107fade3875d08b4"},{path:"songsam_ko.json",bytes:559,sha256:"9d6171f7dab477fd53b77a0acd0a61da22a7bb29bc844a02c247d834b6827d7c"}],t_={m7c1:.89,m7c2:.85,m7a1:.97,m7b1:.85,m8a1:.85,m8b1:.85,m8b2:.94,mta1:.9,mtb2:.98,mtc1:.86,mtc2:.87,f7c1:.91,f7c2:.89,f7a2:.85,f7b1:1.05,f8a1:1.09,f8b2:1.1,f8c1:1.07,fta1:.92,fta2:.95,ftb1:.97,ftb2:.97,ftc2:1.08},r_="학습 중 · 24번째 바퀴";var a_={files:e_,speeds:t_,stage:r_};const zn=a_,i_=zn.speeds??{},n_=zn.stage,we=(e,t,r,a,i,n=!1)=>({id:e,code:t,name:r,desc:a,gender:e.includes("-m")?"m":"f",tags:i,...n?{pending:n}:{}}),s_=[we("ss-m07","m7c1","남성 7","또렷한 설명 — 과학 유튜버처럼 또렷하고 표현이 살아 있는 20대 남성",["clear"]),we("ss-m08","m7c2","남성 8","또렷한 설명 — 조금 빠르고 힘 있게 짚어 주는 20대 남성",["clear"]),we("ss-m09","m7a1","남성 9","밝고 활발한 20대 초반 남성, 미소 띤 말투",["bright"]),we("ss-m10","m7b1","남성 10","친근하고 장난기 있는 20대 남성",["bright"]),we("ss-m11","m8a1","남성 11","학생 톤 — 또랑또랑한 고등학생 느낌",["student"]),we("ss-m12","m8b1","남성 12","학생 톤 — 발표하는 중학생 느낌, 높은 음",["student"]),we("ss-m13","m8b2","남성 13","학생 톤 — 차분하게 발표하는 학생 느낌, 낮은 음",["student"]),we("ss-m14","mta1","남성 14","선생님 — 친절하고 또렷하게 설명하는 젊은 남자 선생님",["teacher"]),we("ss-m15","mtb2","남성 15","선생님 — 낮고 차분하게 차근차근 설명하는 목소리",["teacher"]),we("ss-m16","mtc1","남성 16","선생님 — 열정적이고 밝게, 높은 음으로 설명하는 목소리",["teacher"]),we("ss-m17","mtc2","남성 17","선생님 — 힘 있고 또렷하게, 조금 빠르게 짚어 주는 목소리",["teacher"]),we("ss-f07","f7c1","여성 7","또렷한 설명 — 과학 유튜버처럼 또렷하고 표현이 살아 있는 20대 여성",["clear"]),we("ss-f08","f7c2","여성 8","또렷한 설명 — 차분하게 또박또박 짚어 주는 20대 여성",["clear"]),we("ss-f09","f7a2","여성 9","밝고 활발한 20대 여성, 미소 띤 말투",["bright"]),we("ss-f10","f7b1","여성 10","차분하고 부드러운 20대 초반 여성 — 억양이 잔잔하고 조금 천천히 말해요",["bright"]),we("ss-f11","f8a1","여성 11","학생 톤 — 낮고 차분한 고등학생 느낌, 조금 천천히 읽어요",["student"]),we("ss-f12","f8b2","여성 12","학생 톤 — 발표하는 중학생 느낌",["student"]),we("ss-f13","f8c1","여성 13","학생 톤 — 차분한 중학생 느낌, 높지 않은 목소리로 천천히 읽어요",["student"]),we("ss-f14","fta1","여성 14","선생님 — 친절하고 밝게, 또렷하게 설명하는 젊은 여자 선생님",["teacher"]),we("ss-f15","fta2","여성 15","선생님 — 차분하고 안정된 중음으로 또박또박 설명하는 목소리",["teacher"]),we("ss-f16","ftb1","여성 16","선생님 — 중저음으로 차분하게 설명하는 목소리(여성 목소리 중 가장 낮아요)",["teacher"]),we("ss-f17","ftb2","여성 17","선생님 — 중저음의 안정된 목소리로 보통 빠르기로 설명해요",["teacher"]),we("ss-f18","ftc2","여성 18","선생님 — 젊고 차분한 목소리로 천천히 설명해요",["teacher"])],o_=s_.map(e=>({...e,name:`${e.name} · 학습 중`,desc:`[${n_}] ${e.desc}`,speed:i_[e.code]??1})),u_={files:zn.files},l_=()=>u_.files.length>0,Ue=(e,t,r,a,i,n,s=n)=>({id:e,name:t,desc:r,gender:a,group:"main",speed:i,spec:{kind:"mix",ttl:n,dp:s},sample:`voices/${e}.mp3`}),d_=[Ue("ko-m1","남성 1","낮고 차분한 톤","m",1.05,{M5:.85,M4:.15}),Ue("ko-m2","남성 2","부드럽고 따뜻한 중음","m",1.03,{M4:.75,M5:.25}),Ue("ko-m3","남성 3","또렷하고 신뢰감 있는 중저음","m",.91,{M3:.75,M4:.25}),Ue("ko-m4","남성 4","밝고 경쾌한 톤","m",1.12,{M1:.65,M4:.35}),Ue("ko-m5","남성 5","깊고 묵직한 내레이션 톤","m",.9,{M2:.5,M3:.25,M4:.25}),Ue("ko-m6","남성 6","밝고 발랄한 대학생 톤","m",1.1,{M4:.6,F1:.2,F2:.2}),Ue("ko-f1","여성 1","낮고 차분한 톤","f",.94,{F5:.65,F4:.35}),Ue("ko-f2","여성 2","또렷하고 안정적인 중저음","f",1.04,{F3:.5,F1:.25,F4:.25}),Ue("ko-f3","여성 3","부드럽고 따뜻한 중음","f",.99,{F1:.5,F2:.5}),Ue("ko-f4","여성 4","밝고 생기 있는 톤","f",1.04,{F2:1},{F5:1}),Ue("ko-f5","여성 5","맑고 편안한 내레이션 톤","f",.97,{F1:.85,F3:.15}),Ue("ko-f6","여성 6","밝고 발랄한 대학생 톤","f",1.02,{F2:.75,F1:.2,F4:.15,F3:-.1},{F2:.6818,F1:.1818,F4:.1364})],p_=[{id:"college-m",name:"대학생 남(이전)",gender:"m",group:"college",speed:1.0568,hidden:!0,spec:{kind:"mix",ttl:{M1:.2109,M2:-.095,M3:-.0628,M4:.1679,M5:.3241,F1:.0784,F2:-.0455,F3:.0321,F4:.2685,F5:.1214},dp:{M1:.1753,M4:.1395,M5:.2693,F1:.0651,F3:.0267,F4:.2231,F5:.1009}}},{id:"college-f",name:"대학생 여(이전)",gender:"f",group:"college",speed:1.0745,hidden:!0,spec:{kind:"mix",ttl:{M1:.0363,M2:-.0536,M3:-.0085,M4:-.1065,M5:-.1004,F1:-.0809,F2:.4698,F3:.0377,F4:.7635,F5:.0427},dp:{M1:.0269,F2:.348,F3:.0279,F4:.5656,F5:.0317}}}],c_=Ne.voices.map(e=>({id:e.id,name:`${e.name}(이전)`,gender:e.id[0]==="M"?"m":"f",group:"preset",spec:{kind:"preset",id:e.id},speed:Ne.speed.default,hidden:!0})),f_=o_.map(e=>({id:e.id,name:e.name,desc:e.desc,gender:e.gender,group:"songsam",spec:{kind:"songsam",code:e.code},speed:e.speed,sample:`voices/${e.id}.mp3`,...!l_()||e.pending?{hidden:!0}:{}})),h_=[],m_=[...d_,...f_,...h_,...p_,...c_];m_.filter(e=>!e.hidden);function Hi(e){const t=Object.entries(e).filter(([,a])=>a),r=t.reduce((a,[,i])=>a+i,0);if(!(r>0))throw new Error("목소리 섞기 가중치 합이 0 이하예요.");for(const[a]of t)if(!mh(a))throw new Error(`목소리 「${a}」를 찾지 못했어요.`);return t.map(([a,i])=>[a,i/r]).sort((a,i)=>a[0].localeCompare(i[0]))}function Id(e,t){const r=Hi(t),a=e(r[0][0]).length,i=new Float32Array(a);for(const[n,s]of r){const u=e(n);if(u.length!==a)throw new Error("목소리 스타일 크기가 서로 달라요.");for(let l=0;l<a;l++)i[l]+=s*u[l]}return i}function g_(e,t=1){const r=i=>i.map(([n,s])=>`${n}:${s.toFixed(6)}`).join(","),a=e.kind==="preset"?`p:${e.id}`:e.kind==="songsam"?`ss:${e.code}`:e.kind==="mix"?`m:${r(Hi(e.ttl))}|${r(Hi(e.dp))}`:`hq:${e.code}`;return t===1?a:`${a}|x${t}`}const _r=self,at=(e,t=[])=>_r.postMessage(e,t);fe.wasm.wasmPaths={mjs:new URL(n0,_r.location.href).href,wasm:new URL(s0,_r.location.href).href};fe.logLevel="error";fe.wasm.numThreads=_r.crossOriginIsolated?Math.max(1,Math.min(4,(navigator.hardwareConcurrency||2)-1)):1;let Le=null,Et="wasm",Rt=null,sa=null,Ki;const Zi=new Map,Qi=new Map;let Ci=!1,ia=!1,Hr=null;class Ae extends Error{constructor(t,r,a={}){super(r),this.code=t,this.extra=a}code;extra}_r.onmessage=async e=>{const t=e.data;if(t.type==="cancel"){ia=!0,Hr?.abort();return}if(Ci){at({type:"error",id:t.id,code:"busy",message:"AI 보이스가 다른 일을 하는 중이에요. 끝나거나 취소한 뒤 다시 눌러요."});return}Ci=!0,ia=!1;try{t.type==="load"?await b_(t):t.type==="estimate"?await w_(t):t.type==="synthesize"?await $_(t):t.type==="release"&&(await Kr(),at({type:"released",id:t.id}))}catch(r){const a=__(r);at({type:"error",id:t.id,code:a.code,message:a.message,...a.extra})}finally{Ci=!1}};function __(e){if(e instanceof Ae)return e;if(e instanceof nt)return new Ae(e.code==="abort"?"cancel":"download",e.message,{downloadCode:e.code,file:e.file});const t=e?.message??String(e);return new Ae("infer",`음성을 만들지 못했어요(${t.slice(0,120)}). 페이지를 새로 고친 뒤 다시 시도하거나 더빙 녹음을 써 보세요.`)}const y_=()=>new Promise(e=>setTimeout(e,0)),Ed=async()=>{if(await y_(),ia)throw new Ae("cancel","음성 만들기를 취소했어요.")};async function b_(e){const t=performance.now();if(Le&&Ki===e.base){at({type:"ready",id:e.id,backend:Et,threads:zd(Et),ms:0,downloadMs:0,fetched:0});return}await Kr(),Ki=e.base,Hr=new AbortController;let r=0;try{r=(await _0({base:e.base,signal:Hr.signal,onProgress:d=>at({type:"progress",id:e.id,phase:"download",loaded:d.loaded,total:d.total,file:d.file,index:d.index,count:d.count,fetched:d.fetched})})).fetched}finally{Hr=null}const a=performance.now()-t,i=JSON.parse(new TextDecoder().decode(await na(Ft.config)));Rt={sampleRate:i.ae.sample_rate,baseChunkSize:i.ae.base_chunk_size,chunkCompress:i.ttl.chunk_compress_factor,latentDim:i.ttl.latent_dim},sa=Int32Array.from(JSON.parse(new TextDecoder().decode(await na(Ft.indexer))));const n=navigator.gpu,s=e.prefer!=="wasm"&&!!n&&!!await n.requestAdapter().catch(()=>null);let u;if(s)try{Le=await Cd("webgpu",e.id),Et="webgpu";const l=await _h("가나다라.",await Cn({kind:"preset",id:"M1"}),1);if(!(l>.05&&l<30))throw new Error(`duration ${l}`)}catch(l){u=`WebGPU 대신 CPU(WASM)로 실행해요: ${(l?.message??"").slice(0,80)}`,await Kr(!0)}else e.prefer!=="wasm"&&(u=n?"WebGPU 장치를 찾지 못해 CPU(WASM)로 실행해요.":"이 브라우저는 WebGPU 가 없어 CPU(WASM)로 실행해요.");if(!Le)try{Le=await Cd("wasm",e.id),Et="wasm"}catch(l){throw await Kr(),l instanceof Ae?l:new Ae("session",`음성 모델을 열지 못했어요(메모리가 부족할 수 있어요: ${(l?.message??"").slice(0,80)}). 다른 탭을 닫고 다시 시도하거나 더빙 녹음을 써 보세요.`)}at({type:"ready",id:e.id,backend:Et,threads:zd(Et),ms:performance.now()-t,downloadMs:a,fetched:r,...u?{fallback:u}:{}})}const zd=e=>e==="wasm"?Number(fe.wasm.numThreads):0;async function na(e){const t=await g0(e,Ki);if(!t)throw new Ae("not-loaded","받아 둔 음성 모델 파일을 찾지 못했어요. 모델을 다시 받아요.");return t}async function Cd(e,t){const r={executionProviders:[e],graphOptimizationLevel:"all",logSeverityLevel:3},a=[Ft.dp,Ft.textEnc,Ft.vectorEst,Ft.vocoder],i=[];try{for(let d=0;d<a.length;d++){if(ia)throw new Ae("cancel","모델 불러오기를 취소했어요.");at({type:"progress",id:t,phase:"session",index:d+1,count:a.length,file:a[d]}),i.push(await Ji.create(new Uint8Array(await na(a[d])),r))}}catch(d){throw await Promise.all(i.map(c=>c.release().catch(()=>{}))),d}const[n,s,u,l]=i;return{dp:n,textEnc:s,vectorEst:u,vocoder:l}}async function Kr(e=!1){const t=Le;Le=null,Zi.clear(),Qi.clear(),e||(sa=null,Rt=null),t&&await Promise.all(Object.values(t).map(r=>r.release().catch(()=>{})))}async function Ad(e){const t=Qi.get(e);if(t)return t;if(!mh(e))throw new Ae("voice",`목소리 「${e}」를 찾지 못했어요. 목록에서 다시 골라요.`);const r=JSON.parse(new TextDecoder().decode(await na(c0(e)))),a=n=>({dims:n.dims,data:Float32Array.from(n.data.flat(1/0))}),i={ttl:a(r.style_ttl),dp:a(r.style_dp)};return Qi.set(e,i),i}async function Cn(e){let t;try{t=g_(e)}catch(i){throw new Ae("voice",`${i.message} 목록에서 다른 목소리를 골라요.`)}const r=Zi.get(t);if(r)return r;if(e.kind!=="preset"&&e.kind!=="mix")throw new Ae("voice","송쌤과학 목소리는 Supertonic 엔진으로 만들 수 없어요. 목록에서 다시 골라요.");let a;if(e.kind==="preset"){const i=await Ad(e.id);a={ttl:new ke("float32",i.ttl.data,i.ttl.dims),dp:new ke("float32",i.dp.data,i.dp.dims)}}else{const i=[...new Set([...Object.keys(e.ttl),...Object.keys(e.dp)])],n=new Map;for(const u of i)n.set(u,await Ad(u));const s=n.get(i[0]);a={ttl:new ke("float32",Id(u=>n.get(u).ttl.data,e.ttl),s.ttl.dims),dp:new ke("float32",Id(u=>n.get(u).dp.data,e.dp),s.dp.dims)}}return Zi.set(t,a),a}function gh(e,t){const r=S0(k0(J0(e),"ko"),sa);r.dropped.forEach(i=>t.add(i));const a=r.ids.length;return{L:a,ids:new ke("int64",BigInt64Array.from(r.ids,i=>BigInt(i)),[1,a]),mask:new ke("float32",new Float32Array(a).fill(1),[1,1,a])}}async function _h(e,t,r,a=new Set){const i=gh(e,a),n=await Le.dp.run({text_ids:i.ids,style_dp:t.dp,text_mask:i.mask});return Number(n.duration.data[0])/r}const yh=()=>{if(!Le||!sa||!Rt)throw new Ae("not-loaded","음성 모델을 아직 불러오지 않았어요. 모델을 먼저 받아요.")},bh=e=>{const t=I0(e.trim(),Ne.chunkChars).filter(r=>r.trim());if(!t.length)throw new Ae("empty","읽을 문장이 비어 있어요. 읽을 문장을 채우고 다시 만들어요.");return t};async function w_(e){yh();const t=bh(e.text),r=await Cn(e.voice),a=new Set;let i=0;for(const n of t)i+=Math.floor(await _h(n,r,e.speed,a)*Rt.sampleRate)/Rt.sampleRate;i+=Ne.chunkGap*(t.length-1),at({type:"estimate",id:e.id,dur:i,chunks:t.length,dropped:[...a]})}async function $_(e){yh();const t=performance.now(),r=bh(e.text),a=await Cn(e.voice),i=Rt.sampleRate,n=Math.max(1,Math.round(e.steps)),s=C0(e.seed),u=new Set,l=[],d=r.length*n;let c=0;for(const b of r){const x=gh(b,u),v=await Le.dp.run({text_ids:x.ids,style_dp:a.dp,text_mask:x.mask}),w=Number(v.duration.data[0])/e.speed,S=await Le.textEnc.run({text_ids:x.ids,style_ttl:a.ttl,text_mask:x.mask}),{xt:k,mask:T,dim:z,len:E}=A0(w,Rt,s),O=new ke("float32",T,[1,1,E]),N=new ke("float32",new Float32Array([n]),[1]);let F=k;for(let J=0;J<n;J++){await Ed();const oe=await Le.vectorEst.run({noisy_latent:new ke("float32",F,[1,z,E]),text_emb:S.text_emb,style_ttl:a.ttl,latent_mask:O,text_mask:x.mask,current_step:new ke("float32",new Float32Array([J]),[1]),total_step:N});F=Float32Array.from(oe.denoised_latent.data),at({type:"progress",id:e.id,phase:"synth",done:++c,total:d})}await Ed();const G=(await Le.vocoder.run({latent:new ke("float32",F,[1,z,E])})).wav_tts.data,U=Math.min(G.length,Math.floor(w*i));l.push(Float32Array.from(G.subarray(0,U)))}const f=Math.floor(Ne.chunkGap*i),h=l.reduce((b,x)=>b+x.length,0)+f*(l.length-1),g=new Float32Array(h);let _=0;l.forEach((b,x)=>{x&&(_+=f),g.set(b,_),_+=b.length});for(let b=0;b<g.length;b++)if(!Number.isFinite(g[b]))throw new Ae("infer","만든 소리에 잘못된 값이 있어요. 처리 장치를 CPU(WASM)로 바꿔 다시 만들어요.");at({type:"audio",id:e.id,pcm:g,sampleRate:i,dur:h/i,chunks:r.length,dropped:[...u],ms:performance.now()-t,backend:Et},[g.buffer])}
