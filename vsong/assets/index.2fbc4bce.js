var M=Object.defineProperty,E=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var y=(s,e,t)=>e in s?M(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,S=(s,e)=>{for(var t in e||(e={}))V.call(e,t)&&y(s,t,e[t]);if(w)for(var t of w(e))O.call(e,t)&&y(s,t,e[t]);return s},_=(s,e)=>E(s,F(e));var p=(s,e,t)=>(y(s,typeof e!="symbol"?e+"":e,t),t);var c=(s,e,t)=>new Promise((r,o)=>{var a=i=>{try{l(t.next(i))}catch(d){o(d)}},n=i=>{try{l(t.throw(i))}catch(d){o(d)}},l=i=>i.done?r(i.value):Promise.resolve(i.value).then(a,n);l((t=t.apply(s,e)).next())});import{a as L,T as f,c as U,b as W,r as $,o as g,d as m,w as H,K as D,e as A,f as I,L as z,z as J,g as K,V as Q,h as Y}from"./vendor.8c1ac885.js";const G=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}};G();const R="vsong_token",N={isRequesting:!1,jwtToken:"",jwtPayload:null,checkFor(s){if(!(!s||this.isRequesting))try{this.jwtToken!=s&&(this.jwtToken=s,this.jwtPayload=this.parseJwt(s));let e=this.jwtPayload,t=e.exp-e.iat,r=e.exp-Date.now()/1e3;if(r>t/2||r<t/24)return;this.isRequesting=!0;let o=this;v.get("/vsong/refresh-token").then(a=>{localStorage.setItem(R,a.data)}).finally(()=>{o.isRequesting=!1})}catch(e){}},parseJwt(s){var e=s.split(".")[1],t=e.replace(/-/g,"+").replace(/_/g,"/"),r=decodeURIComponent(atob(t).split("").map(function(o){return"%"+("00"+o.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(r)}},v=L.create({baseURL:"http://service.vsong.cpomelo.com:8077/api",timeout:12e4}),x=s=>{if(s.response){const t=s.response.data;if(s.response.status===403&&f.fail("Forbidden "+t.message),s.response.status===401&&location.replace("./cauth.html?path="+encodeURIComponent(location.href)),[400,404].includes(s.response.status)&&s.response.data&&f.fail(s.response.data.msg),s.response.status===500&&s.response.data)if(s.response.request.responseType=="arraybuffer"){var e=JSON.parse(String.fromCharCode.apply(null,Array.from(new Uint8Array(t))));f.fail(e.msg)}else f.fail(s.response.data.msg)}return Promise.reject(s)};v.interceptors.request.use(s=>{const e=localStorage.getItem(R);return e&&(s.headers.Authorization="Bearer "+e,N.checkFor(e)),s},x);v.interceptors.response.use(s=>{if(s.request.responseType=="arraybuffer"){let e;return s.headers["content-disposition"]&&(e=s.headers["content-disposition"]),{buffer:s.data,disposition:e}}else return s.data},x);C();function C(){history.state&&history.state._hookBack&&(window.addEventListener("popstate",()=>{C()},{once:!0}),history.back())}let b={},Z=History.prototype.replaceState;History.prototype.replaceState=function(s){console.log("replaceState",s),Z.apply(this,arguments)};let X=History.prototype.pushState;History.prototype.pushState=function(s){console.log("pushState",s),X.apply(this,arguments)};window.addEventListener("popstate",s=>{if(console.log("popstate",s,JSON.stringify(history.state)),!history.state)return;let e=history.state.bcid,t=history.state.cid;if(e){delete history.state.bcid,history.replaceState(history.state,null,document.URL);let o=b[e];o&&(delete b[e],o.isRelease?history.back():o.cb&&o.cb())}if(!t)return;history.replaceState({_hookBack:!0,cid:t},null,document.URL);let r=b[t];if(!r||r.isRelease){delete b[t],history.back();return}},!1);function ve(s){let e=Math.random().toString().slice(2);b[e]={cb:s,isRelease:!1};let t=history.state||{};return history.replaceState(_(S({},t),{bcid:e}),null,document.URL),history.pushState({_hookBack:!0,cid:e},null,document.URL),(o=!1)=>{let a=b[e];!a||a.isRelease||(o?(delete b[e],history.back()):a.isRelease=!0)}}function ye(s){return c(this,null,function*(){try{yield navigator.clipboard.writeText(s);return}catch(e){}try{const e=document.createElement("input");document.body.appendChild(e),e.setAttribute("value",s),e.select(),document.execCommand("copy")&&document.execCommand("copy"),document.body.removeChild(e);return}catch(e){}})}const Se=s=>{if(s===0)return"0 B";let e=1024,t=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],r=Math.floor(Math.log(s)/Math.log(e)),o=(s/Math.pow(e,r)).toPrecision(3)+" "+t[r];return o.includes("e")&&(o=(s/Math.pow(e,r)).toString(),o.includes(".")&&(o=parseFloat(o).toFixed(2)),o+=" "+t[r]),o},_e=s=>new Promise((e,t)=>{const r=new FileReader;r.onloadend=()=>e(r.result),r.readAsDataURL(s)});function we(s,e,t){var r,o,a,n=0;t||(t={});var l=function(){n=t.leading===!1?0:new Date().getTime(),r=null,s.apply(o,a),r||(o=a=null)},i=function(){var d=new Date().getTime();!n&&t.leading===!1&&(n=d);var u=e-(d-n);o=this,a=arguments,u<=0||u>e?(r&&(clearTimeout(r),r=null),n=d,s.apply(o,a),r||(o=a=null)):!r&&t.trailing!==!1&&(r=setTimeout(l,u))};return i}function Ae(s,e,t){var r,o,a=function(){var n=this,l=arguments;if(r&&clearTimeout(r),t){var i=!r;r=setTimeout(function(){r=null},e),i&&(o=s.apply(n,l))}else r=setTimeout(function(){s.apply(n,l)},e);return o};return a.cancel=function(){clearTimeout(r),r=null},a}class k{constructor(){p(this,"promise",null);p(this,"resolve",null);p(this,"reject",null);p(this,"tempType",null);p(this,"tempValue",null);p(this,"naviteResolve",null);p(this,"naviteReject",null);p(this,"status","pending");this.promise=new Promise((e,t)=>{this.naviteResolve=e,this.naviteReject=t,this.tempType=="resolve"?e(this.tempValue):this.tempType=="reject"&&t(this.tempValue)}),this.resolve=e=>{this.status=="pending"&&(this.tempType="resolve",this.tempValue=e,this.naviteResolve&&(this.status="fulfilled",this.naviteResolve(this.tempValue)))},this.reject=e=>{this.status=="pending"&&(this.tempType="reject",this.tempValue=e,this.naviteReject&&(this.status="rejected",this.naviteReject(this.tempValue)))}}toPromise(){return this.promise}}class ee{constructor(){p(this,"dbName","vsong");p(this,"dbVersion",5);p(this,"dbSuccessCpl",new k);p(this,"dbUpgradeCpl",new k);p(this,"dbReq");this.dbReq=indexedDB.open(this.dbName,this.dbVersion);let e=localStorage.getItem("vsong_updateIndexdbVersion");(e=="error"||e=="updating")&&(localStorage.setItem("vsong_updateIndexdbVersion","updating"),document.body.setAttribute("style","color:#fff;text-align: center;font-size: 24px;"),document.body.innerHTML="\u4E0A\u6B21\u672C\u5730\u6570\u636E\u5347\u7EA7\u4E2D\u65AD\uFF0C\u91CD\u65B0\u5347\u7EA7\u4E2D\uFF0C\u8BF7\u52FF\u79BB\u5F00\u9875\u9762\uFF0C\u7B49\u5F85\u5347\u7EA7\u5B8C\u6210");let t=!1;this.dbReq.onupgradeneeded=r=>{let o=this.dbReq.result;if(r.oldVersion<1){let a=o.createObjectStore("vsong_audio",{keyPath:"id",autoIncrement:!0});a.createIndex("create_time","create_time",{unique:!1}),a.createIndex("bvid","bvid",{unique:!1});let n=o.createObjectStore("vsong_video",{keyPath:"id",autoIncrement:!0});n.createIndex("create_time","create_time",{unique:!1}),n.createIndex("bvid","bvid",{unique:!1});let l=o.createObjectStore("vsong_cache",{keyPath:"id",autoIncrement:!0});l.createIndex("create_time","create_time",{unique:!1}),l.createIndex("bvid","bvid",{unique:!1})}if(r.oldVersion<2){let a=o.createObjectStore("vsong_cover",{keyPath:"id",autoIncrement:!0});a.createIndex("create_time","create_time",{unique:!1}),a.createIndex("bvid","bvid",{unique:!1})}if(r.oldVersion<3){let a=this.dbReq.transaction,n=a.objectStore("vsong_audio"),l=a.objectStore("vsong_video"),i=a.objectStore("vsong_cover"),d=a.objectStore("vsong_cache");n.deleteIndex("bvid"),n.createIndex("vsongId","vsongId",{unique:!1}),l.deleteIndex("bvid"),l.createIndex("vsongId","vsongId",{unique:!1}),i.deleteIndex("bvid"),i.createIndex("vsongId","vsongId",{unique:!1}),d.deleteIndex("bvid"),d.createIndex("vsongId","vsongId",{unique:!1})}if(r.oldVersion<5){let a=o.createObjectStore("fetch_cache",{keyPath:"id",autoIncrement:!0});a.createIndex("create_time","create_time",{unique:!1}),a.createIndex("expire_time","expire_time",{unique:!1}),a.createIndex("markurl","markurl",{unique:!1})}if(r.oldVersion==1||r.oldVersion==2){localStorage.setItem("vsong_updateIndexdbVersion","updating"),document.body.setAttribute("style","color:#fff;text-align: center;font-size: 24px;"),document.body.innerHTML="\u672C\u5730\u6570\u636E\u5347\u7EA7\u4E2D\uFF0C\u8BF7\u52FF\u79BB\u5F00\u9875\u9762\uFF0C\u7B49\u5F85\u5347\u7EA7\u5B8C\u6210",t=!0;let a=()=>c(this,null,function*(){try{let n=yield this.getAll("vsong_audio");yield Promise.all(n.map(u=>c(this,null,function*(){u.vsongId=`biAweme_${u.bvid}`,delete u.bvid,yield this.updateRow("vsong_audio",u)})));let l=yield this.getAll("vsong_video");yield Promise.all(l.map(u=>c(this,null,function*(){u.vsongId=`biAweme_${u.bvid}`,delete u.bvid,yield this.updateRow("vsong_video",u)})));let i=yield this.getAll("vsong_cover");yield Promise.all(i.map(u=>c(this,null,function*(){u.vsongId=`biAweme_${u.bvid}`,delete u.bvid,yield this.updateRow("vsong_cover",u)})));let d=yield this.getAll("vsong_cache");yield Promise.all(d.map(u=>c(this,null,function*(){u.vsongId=`biAweme_${u.bvid}`,u.vsongType="biAweme",u.originUrl=u.url,delete u.url,yield this.updateRow("vsong_cache",u)})))}catch(n){document.body.innerHTML=`\u5347\u7EA7\u5931\u8D25\u4E86\uFF0C\u545C\u545C (${n.message})`,localStorage.setItem("vsong_updateIndexdbVersion","error")}localStorage.removeItem("vsong_updateIndexdbVersion"),document.body.innerHTML="\u5347\u7EA7\u5B8C\u6210\uFF0C\u4E09\u79D2\u540E\u81EA\u52A8\u91CD\u65B0\u5237\u65B0",setTimeout(()=>{location.reload()},3e3)});setTimeout(()=>{a()},1e3)}},this.dbReq.onsuccess=r=>{t||this.dbUpgradeCpl.resolve(!0),this.dbSuccessCpl.resolve(r)},this.dbReq.onerror=r=>{this.dbSuccessCpl.reject(r)}}ensureUpgrade(){return c(this,null,function*(){yield this.dbUpgradeCpl.toPromise()})}getAll(e){return c(this,null,function*(){yield this.dbSuccessCpl.toPromise();let o=this.dbReq.result.transaction([e],"readwrite").objectStore(e);return new Promise((a,n)=>{let l=o.getAll();l.onsuccess=i=>{a(l.result)},l.onerror=i=>{n(i)}})})}getAllByIndex(e,t,r){return c(this,null,function*(){yield this.dbSuccessCpl.toPromise();let l=this.dbReq.result.transaction([e],"readwrite").objectStore(e).index(t);return new Promise((i,d)=>{let u=l.getAll(r);u.onsuccess=h=>{i(u.result)},u.onerror=h=>{d(h)}})})}getOne(e,t){return c(this,null,function*(){yield this.dbSuccessCpl.toPromise();let a=this.dbReq.result.transaction([e],"readwrite").objectStore(e);return new Promise((n,l)=>{let i=a.get(t);i.onsuccess=d=>{n(i.result)},i.onerror=d=>{l(d)}})})}getOneByIndex(e,t,r){return c(this,null,function*(){yield this.dbSuccessCpl.toPromise();let l=this.dbReq.result.transaction([e],"readwrite").objectStore(e).index(t);return new Promise((i,d)=>{let u=l.get(r);u.onsuccess=h=>{i(u.result)},u.onerror=h=>{d(h)}})})}addRow(e,t){return c(this,null,function*(){yield this.dbSuccessCpl.toPromise();let o=this.dbReq.result.transaction([e],"readwrite");return o.objectStore(e).add(t),new Promise((n,l)=>{o.onabort=i=>{l(i)},o.oncomplete=i=>{n(i)},o.onerror=i=>{l(i)}})})}updateRow(e,t){return c(this,null,function*(){yield this.dbSuccessCpl.toPromise();let o=this.dbReq.result.transaction([e],"readwrite");return o.objectStore(e).put(t),new Promise((n,l)=>{o.onabort=i=>{l(i)},o.oncomplete=i=>{n(i)},o.onerror=i=>{l(i)}})})}addOrUpdateRow(e,t,r){return c(this,null,function*(){let o=yield this.getOneByIndex(e,r,t[r]);o&&(t=_(S({},t),{id:o.id})),yield this.updateRow(e,t)})}delRow(e,t){return c(this,null,function*(){yield this.dbSuccessCpl.toPromise();let o=this.dbReq.result.transaction([e],"readwrite");return o.objectStore(e).delete(t),new Promise((n,l)=>{o.onabort=i=>{l(i)},o.oncomplete=i=>{n(i)},o.onerror=i=>{l(i)}})})}clearStore(e){return c(this,null,function*(){yield this.dbSuccessCpl.toPromise();let r=this.dbReq.result.transaction([e],"readwrite");return r.objectStore(e).clear(),new Promise((a,n)=>{r.onabort=l=>{n(l)},r.oncomplete=l=>{a(l)},r.onerror=l=>{n(l)}})})}}const te=new ee;const oe="modulepreload",q={},re="/vsong/",se=function(e,t){return!t||t.length===0?e():Promise.all(t.map(r=>{if(r=`${re}${r}`,r in q)return;q[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${a}`))return;const n=document.createElement("link");if(n.rel=o?"stylesheet":oe,o||(n.as="script",n.crossOrigin=""),n.href=r,document.head.appendChild(n),o)return new Promise((l,i)=>{n.addEventListener("load",l),n.addEventListener("error",i)})})).then(()=>e())},ae=[{path:"",redirect:"/home"},{path:"/home",name:"Home",component:()=>se(()=>import("./Home.903f3772.js"),["assets/Home.903f3772.js","assets/Home.5a400828.css","assets/vendor.8c1ac885.js"]),meta:{keepAlive:!0}}],P=U({history:W(),routes:ae});P.beforeEach((s,e,t)=>{t()});const B={};function ne(s,e){const t=$("router-view");return g(),m(t,null,{default:H(({Component:r})=>[(g(),m(D,null,[s.$route.meta.keepAlive?(g(),m(A(r),{key:0})):I("",!0)],1024)),s.$route.meta.keepAlive?I("",!0):(g(),m(A(r),{key:0}))]),_:1})}B.render=ne;var ie={install(s,e){s.provide("$axios",v)}},le="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAEUlEQVQokWMYBaOAGoCBgQEAAkwAAUZAJpgAAAAASUVORK5CYII=",ue=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:le}),de="/vsong/assets/logo.03d6d6da.png",ce=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:de}),pe="/vsong/assets/waiting.8c93c949.mp3",be=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:pe});const T={"../assets/default_cover.png":ue,"../assets/logo.png":ce,"../assets/waiting.mp3":be};var he={install:(s,e)=>{s.config.globalProperties.$assets=t=>(console.log(T,`../assets${t}`),T[`../assets${t}`].default)}};z.use("zh-CN",J);f.allowMultiple();const j=K(B);j.use(Q).use(Y).use(P).use(ie).use(he);const fe=()=>c(void 0,null,function*(){yield te.ensureUpgrade(),j.mount("#app")});fe();export{k as C,Se as a,_e as b,ye as c,Ae as d,ve as h,te as i,we as t,pe as w};
