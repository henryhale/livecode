import{o as f,c as m,a as c,r as w,b as v,d as P,w as j,L as N,e as B,f as R,g as T,h as k,i as L,n as p,F as x,j as C,k as S,v as E,t as O,l as A}from"./vendor-f3b2d100.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const F=""+new URL("../brand.svg",import.meta.url).href;const M=(o,r)=>{const n=o.__vccOpts||o;for(const[i,e]of r)n[i]=e;return n},U={},q={class:"nav"};function H(o,r){return f(),m("div",q,[c("div",null,[c("div",null,[w(o.$slots,"brand",{},void 0,!0)]),c("div",null,[w(o.$slots,"default",{},void 0,!0)])])])}const I=M(U,[["render",H],["__scopeId","data-v-62deab83"]]),V="modulepreload",W=function(o,r){return new URL(o,r).href},$={},K=function(r,n,i){if(!n||n.length===0)return r();const e=document.getElementsByTagName("link");return Promise.all(n.map(t=>{if(t=W(t,i),t in $)return;$[t]=!0;const a=t.endsWith(".css"),h=a?'[rel="stylesheet"]':"";if(!!i)for(let s=e.length-1;s>=0;s--){const l=e[s];if(l.href===t&&(!a||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${h}`))return;const d=document.createElement("link");if(d.rel=a?"stylesheet":V,a||(d.as="script",d.crossOrigin=""),d.href=t,document.head.appendChild(d),a)return new Promise((s,l)=>{d.addEventListener("load",s),d.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>r())};const z={__name:"CodeMirror",props:{lang:{type:String,default:""},initialDoc:{type:String,default:""},file:{type:String,default:""}},emits:["change"],setup(o,{emit:r}){const n=o,i=v();let e;return P(async()=>{const t=(await K(()=>import("./editor-9df48419.js").then(a=>a.O),["./editor-9df48419.js","./vendor-f3b2d100.js"],import.meta.url)).default;e=await t({target:i.value,lang:n.lang,initialDoc:n.initialDoc,file:n.file}),j(()=>r("change",e.doc.value))}),(t,a)=>(f(),m("div",{ref_key:"el",ref:i},null,512))}};let y;function G(o,r="",n="",i=""){o&&(y&&clearTimeout(y),y=setTimeout(()=>{const e=o.contentWindow.document;e.open(),e.writeln(`<style type="text/css">${n}</style>
      ${r}
      <script type="text/javascript">
        (() => {
          try {
            ${i}
          } catch(err) {
            console.error(err);
          }
        })();
      <\/script>`),e.close()},200))}const J="livecode-backup",_=new N(new B(J));function Q(){return _.read(),_.data}function D(o){_.data=o,_.write()}const X={"index.html":`<div id="app">
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
`},Y={class:"box"},Z=c("img",{class:"w-6 h-6",src:F},null,-1),ee=c("span",null,[c("b",null,"LiveCode")],-1),te={class:"tabs"},ne=["onClick"],re={class:"code"},oe={__name:"App",setup(o){let r=Q();(!r||typeof r!="object")&&(r=X,D(r));const n=R(Object.assign({},r));function i(s){s.ctrlKey&&s.key.toLowerCase()==="s"&&(s.preventDefault(),console.log("backing up files..."),D(n),console.log("backup was successful..."))}const e=v(!0),t=v("index.html");function a(s){t.value=s}function h(s){const l=s.split(".").pop();return l==="js"?"javascript":l}function g(s,l){n[s]=l}const d=v();return P(()=>{j(()=>{G(d.value,n["index.html"],n["style.css"],n["main.js"])}),document.addEventListener("keydown",i,!1)}),T(()=>{document.removeEventListener("keydown",i,!1)}),(s,l)=>(f(),m("div",Y,[k(I,null,{brand:L(()=>[Z,ee]),default:L(()=>[c("button",{class:p(["btn",{active:e.value}]),onClick:l[0]||(l[0]=u=>e.value=!e.value)},O(e.value?"Hide ":"Show ")+" Preview ",3)]),_:1}),c("div",{class:p(["main",{"md:flex-row":e.value}])},[c("div",{class:p(["flex-col h-full",[e.value?"hidden md:flex md:w-1/2":"flex"]])},[c("div",te,[(f(!0),m(x,null,C(Object.keys(n),u=>(f(),m("button",{key:u,class:p({active:t.value===u}),onClick:b=>a(u)},O(u),11,ne))),128))]),c("div",re,[(f(!0),m(x,null,C(Object.keys(n),u=>S((f(),m("div",{key:u},[k(z,{lang:h(u),file:u,initialDoc:n[u],onChange:b=>g(u,b)},null,8,["lang","file","initialDoc","onChange"])])),[[E,u===t.value]])),128))])],2),S(c("div",{class:p(["h-full",{"md:w-1/2 md:border md:border-gray-200":e.value}])},[c("iframe",{ref_key:"iframe",ref:d,src:"about:blank",frameborder:"0",title:"preview"},null,512)],2),[[E,e.value]])],2)]))}};A(oe).mount("#app");export{K as _};
