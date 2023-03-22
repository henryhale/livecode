import{o as _,c as p,a as i,r as C,b as h,d as N,w as k,L as M,e as H,f as R,g as q,h as b,i as $,n as m,F as S,j as E,k as O,v as D,t as P,l as A}from"./vendor-f3b2d100.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();const B=(o,e)=>{const r=o.__vccOpts||o;for(const[a,t]of e)r[a]=t;return r},W={},F={fill:"#0f5cf5",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",stroke:"#0f5cf5"},I=i("g",{"stroke-width":"0"},null,-1),z=i("g",{"stroke-linecap":"round","stroke-linejoin":"round"},null,-1),U=i("g",null,[i("path",{d:"M8.293 6.293 2.586 12l5.707 5.707 1.414-1.414L5.414 12l4.293-4.293zm7.414 11.414L21.414 12l-5.707-5.707-1.414 1.414L18.586 12l-4.293 4.293z"})],-1),V=[I,z,U];function K(o,e){return _(),p("svg",F,V)}const J=B(W,[["render",K]]);const G={},Q={class:"nav"};function X(o,e){return _(),p("div",Q,[i("div",null,[i("div",null,[C(o.$slots,"brand",{},void 0,!0)]),i("div",null,[C(o.$slots,"default",{},void 0,!0)])])])}const Y=B(G,[["render",X],["__scopeId","data-v-62deab83"]]),Z="modulepreload",ee=function(o,e){return new URL(o,e).href},T={},te=function(e,r,a){if(!r||r.length===0)return e();const t=document.getElementsByTagName("link");return Promise.all(r.map(n=>{if(n=ee(n,a),n in T)return;T[n]=!0;const c=n.endsWith(".css"),y=c?'[rel="stylesheet"]':"";if(!!a)for(let s=t.length-1;s>=0;s--){const l=t[s];if(l.href===n&&(!c||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${y}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":Z,c||(d.as="script",d.crossOrigin=""),d.href=n,document.head.appendChild(d),c)return new Promise((s,l)=>{d.addEventListener("load",s),d.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>e())};const ne={__name:"CodeMirror",props:{lang:{type:String,default:""},initialDoc:{type:String,default:""},file:{type:String,default:""}},emits:["change"],setup(o,{emit:e}){const r=o,a=h();let t;return N(async()=>{const n=(await te(()=>import("./editor-0d8e7b97.js").then(c=>c.O),["./editor-0d8e7b97.js","./vendor-f3b2d100.js"],import.meta.url)).default;t=await n({target:a.value,lang:r.lang,initialDoc:r.initialDoc,file:r.file}),k(()=>e("change",t.doc.value))}),(n,c)=>(_(),p("div",{ref_key:"el",ref:a},null,512))}};let v,f;function oe(o){v=o.value,f=v.contentWindow.document}let w;function re(o){!v||!f||(w&&clearTimeout(w),w=setTimeout(()=>{let e=f.querySelector("script#stag");e&&(e.parentNode.removeChild(e),v.contentWindow.__$fn_=void 0),e=document.createElement("script"),e.id="stag",f.head.appendChild(e),e.textContent=`
var __$fn_ = function() {
  try {
    ${o}
  } 
  catch(err) { 
    console.log(err);
  } 
};`,v.contentWindow.__$fn_.call()}))}function se(o){f.body&&(f.body.innerHTML="",f.body.innerHTML=o)}function ie(o){if(!f)return;let e=f.querySelector("style#xtag");e||(e=document.createElement("style"),e.id="xtag",f.head.appendChild(e)),e.innerHTML=o}const ce="livecode-backup",g=new M(new H(ce));function ae(){return g.read(),g.data}function j(o){g.data=o,g.write()}const le={"index.html":`<div id="app">
  <h1>Hello, World!</h1>
  <button>Count: 0</button>
</div>
`,"style.css":`#app {
  color: #0d79d1;
  text-align:center;
  margin: 4rem 0;
}

button {
  cursor: pointer;
  color: inherit;
  background-color: #e6f4ff;
  border-radius: 6px;
  border: 0 none;
  padding: 0.5rem 0.75rem;
}`,"main.js":`let count = 0;

const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  btn.innerHTML = "Count: "+ (++count);
});

btn.click();
`},ue={class:"box"},de=i("span",null,[i("b",null,"LiveCode")],-1),fe={class:"tabs"},_e=["onClick"],pe={class:"code"},me={__name:"App",setup(o){let e=ae();(!e||typeof e!="object")&&(e=le,j(e));const r=R(Object.assign({},e));function a(s){s.ctrlKey&&s.key.toLowerCase()==="s"&&(s.preventDefault(),console.log("backing up files..."),j(r),console.log("backup was successful..."))}const t=h(!0),n=h("index.html");function c(s){n.value=s}function y(s){const l=s.split(".").pop();return l==="js"?"javascript":l}function L(s,l){r[s]=l}const d=h();return N(()=>{oe(d),k(()=>ie(r["style.css"])),k(()=>{se(r["index.html"]),re(r["main.js"])}),document.addEventListener("keydown",a,!1)}),q(()=>{document.removeEventListener("keydown",a,!1)}),(s,l)=>(_(),p("div",ue,[b(Y,null,{brand:$(()=>[b(J,{class:"w-6 h-6"}),de]),default:$(()=>[i("button",{class:m(["btn",{active:t.value}]),onClick:l[0]||(l[0]=u=>t.value=!t.value)},P(t.value?"Hide ":"Show ")+" Preview ",3)]),_:1}),i("div",{class:m(["main",{"md:flex-row":t.value}])},[i("div",{class:m(["flex-col h-full",[t.value?"hidden md:flex md:w-1/2":"flex"]])},[i("div",fe,[(_(!0),p(S,null,E(Object.keys(r),u=>(_(),p("button",{key:u,class:m({active:n.value===u}),onClick:x=>c(u)},P(u),11,_e))),128))]),i("div",pe,[(_(!0),p(S,null,E(Object.keys(r),u=>O((_(),p("div",{key:u},[b(ne,{lang:y(u),file:u,initialDoc:r[u],onChange:x=>L(u,x)},null,8,["lang","file","initialDoc","onChange"])])),[[D,u===n.value]])),128))])],2),O(i("div",{class:m(["h-full",{"md:w-1/2 md:border md:border-gray-200":t.value}])},[i("iframe",{ref_key:"iframe",ref:d,src:"about:blank",frameborder:"0",title:"preview"},null,512)],2),[[D,t.value]])],2)]))}};A(me).mount("#app");export{te as _};
