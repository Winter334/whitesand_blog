import{a as j,c as G,d as ze,e as Fe,f as Ge,g as We,h as Ye,i as se}from"./chunk-5P5CYT4T.js";import{a as g,b as y}from"./chunk-TLKAX7GM.js";import{$ as Me,A as h,B as ve,C as b,D as Q,E as ee,F as B,G as D,H as ye,I as U,J as te,L as oe,M as Ee,N as be,Q as Le,R as Ce,S as Se,T as Te,U as xe,V as ke,W as _e,X as He,Y as Ae,Z as Ie,_ as qe,a as f,aa as Oe,ba as Re,c as C,ca as Ne,da as Pe,e as _,ea as Be,f as he,fa as De,ga as Ue,ha as je,k as M,l as fe,m,n as J,o as O,p as R,q as pe,r as ge,s as N,t as F,u as we,v as S,w as v,x as P,y as T,z as K}from"./chunk-L436KNFF.js";import"./chunk-UPAIFSKU.js";import{a as u}from"./chunk-WNA3IFDW.js";import"./chunk-WIQECBEN.js";u();u();u();fe();var H=(e,t)=>{h.hasClass("on")?(h.removeClass("on"),T.removeClass("close"),t?h.style="":g(h,"slideRightOut")):t?h.style="":g(h,"slideRightIn",()=>{h.addClass("on"),T.addClass("close")})},$e=()=>{let e=h.querySelector(".inner");h.querySelector(".tab")&&e.removeChild(h.querySelector(".tab"));let t=document.createElement("ul"),o="active";t.className="tab",["contents","related","overview"].forEach(s=>{let n=h.querySelector(".panel."+s);if(n.innerHTML.trim().length<1){s==="contents"&&M(U,"none");return}s==="contents"&&M(U,"");let a=document.createElement("li"),c=document.createElement("span"),r=document.createTextNode(n.getAttribute("data-title"));c.appendChild(r),a.appendChild(c),a.addClass(s+" item"),o?(n.addClass(o),a.addClass(o)):n.removeClass("active"),a.addEventListener("click",i=>{let l=i.currentTarget;l.hasClass("active")||(h.find(".tab .item").forEach(d=>{d.removeClass("active")}),h.find(".panel").forEach(d=>{d.removeClass("active")}),h.querySelector(".panel."+l.className.replace(" item","")).addClass("active"),l.addClass("active"))}),t.appendChild(a),o=""}),t.childNodes.length>1?(e.insertBefore(t,e.childNodes[0]),h.querySelector(".panels").style.paddingTop=""):h.querySelector(".panels").style.paddingTop=".625rem"},Xe=()=>{let e=r=>{let i=t[r];if(!i||i.hasClass("current"))return;f.each(".toc .active",d=>{d&&d.removeClass("active current")}),o.forEach(d=>{d&&d.removeClass("active")}),i.addClass("active current"),o[r]&&o[r].addClass("active");let l=i.parentNode;for(;!l.matches(".contents");){if(l.matches("li")){l.addClass("active");let d=document.getElementById(decodeURIComponent(l.querySelector("a.toc-link").getAttribute("href").replace("#","")));d&&d.addClass("active")}l=l.parentNode}getComputedStyle(h).display!=="none"&&n.hasClass("active")&&y(n,i.offsetTop-n.offsetHeight/4)},t=f.all(".contents li");if(t.length<1)return;let o=[...t],s=null;o=o.map((r,i)=>{let l=r.querySelector("a.toc-link"),d=l.getAttribute("href");if(!d)return null;let k=document.getElementById(decodeURI(d.replace("#","")));if(!k)return null;let I=k.querySelector("a.anchor"),z=q=>{q.preventDefault();let yt=document.getElementById(decodeURI(q.currentTarget.getAttribute("href").replace("#","")));s=i,y(yt,null,()=>{e(i),s=null})};return l.addEventListener("click",z),I&&I.addEventListener("click",q=>{z(q),Fe(m.hostname+"/"+LOCAL.path+q.currentTarget.getAttribute("href"))}),k});let n=h.querySelector(".contents.panel"),a=r=>{let i=0,l=r[i];if(l.boundingClientRect.top>0)return i=o.indexOf(l.target),i===0?0:i-1;for(;i<r.length;i++)if(r[i].boundingClientRect.top<=0)l=r[i];else return o.indexOf(l.target);return o.indexOf(l.target)};(()=>{let r=new IntersectionObserver(i=>{let l=a(i)+(R<0?1:0);s===null&&e(l)},{rootMargin:"0px 0px -100% 0px",threshold:0});o.forEach(i=>{i&&r.observe(i)})})()},ne=()=>{y(0)},Ve=()=>{y(parseInt(String(_(we))))},Ze=()=>{y(document.getElementById("comments"))},Je=()=>{y(document.getElementById("main"))},Ke=()=>{f.each(".menu .item:not(.title)",e=>{let t=e.querySelector("a[href]"),o=e.parentNode.parentNode;if(!t)return;let s=t.pathname===location.pathname||t.pathname===location.pathname.replace("index.html",""),n=!m.root.startsWith(t.pathname)&&location.pathname.startsWith(t.pathname),a=!t.onclick&&t.hostname===location.hostname&&(s||n);e.toggleClass("active",a),e.parentNode.querySelector(".active")&&o.hasClass("dropdown")?o.removeClass("active").addClass("expand"):o.removeClass("expand")})};u();var w={timer:void 0,lock:!1,show(){clearTimeout(this.timer),document.body.removeClass("loaded"),S.setAttribute("style","display:block"),w.lock=!1},hide(e){m.loader.start||(e=-1),this.timer=setTimeout(this.vanish,e||3e3)},vanish(){w.lock||(m.loader.start&&g(S,0),document.body.addClass("loaded"),w.lock=!0)}};function re(){f.each(".overview .menu > .item",t=>{v.querySelector(".menu").appendChild(t.cloneNode(!0))}),S.addEventListener("click",w.vanish),T.addEventListener("click",H),document.querySelector(".dimmer").addEventListener("click",H),K.querySelector(".down").addEventListener("click",Ve),K.querySelector(".up").addEventListener("click",ne),b||Be(C(P,"div",{id:"tool",innerHTML:'<div class="item player"></div><div class="item contents"><i class="ic i-list-ol"></i></div><div class="item chat"><i class="ic i-comments"></i></div><div class="item back-to-top"><i class="ic i-arrow-up"></i><span>0%</span></div>'})),Q||De(C(P,"div",{id:"angle",innerHTML:'<span><i class="ic i-angle-down" aria-hidden="true"></i></span>'})),Oe(b.querySelector(".player")),Re(b.querySelector(".back-to-top")),Ne(b.querySelector(".chat")),Pe(b.querySelector(".contents")),D.addEventListener("click",ne),ye.addEventListener("click",Ze),U.addEventListener("click",H),Q.addEventListener("click",Je),We(B),document.querySelector("main").addEventListener("click",()=>{B.player.mini()}),(()=>{new IntersectionObserver(([t])=>{t.isIntersecting?(document.querySelectorAll(".parallax>use").forEach(o=>{o.classList.remove("stop-animation")}),document.querySelectorAll("#imgs .item").forEach(o=>{o.classList.remove("stop-animation")})):(document.querySelectorAll(".parallax>use").forEach(o=>{o.classList.add("stop-animation")}),document.querySelectorAll("#imgs .item").forEach(o=>{o.classList.add("stop-animation")}))},{root:null,threshold:.2}).observe(document.getElementById("waves")),new IntersectionObserver(([t])=>{t.isIntersecting?document.querySelectorAll(".with-love>i").forEach(o=>{o.classList.remove("stop-animation")}):document.querySelectorAll(".with-love>i").forEach(o=>{o.classList.add("stop-animation")})},{root:null,threshold:.2}).observe(document.querySelector(".with-love"))})()}u();u();var Qe=()=>{if(!document.querySelector(".index.wrap"))return;let e=new IntersectionObserver(t=>{t.forEach(o=>{o.target.hasClass("show")?e.unobserve(o.target):(o.isIntersecting||o.intersectionRatio>0)&&(o.target.addClass("show"),e.unobserve(o.target))})},{root:null,threshold:[.3]});f.each(".index.wrap article.item, .index.wrap section.item",t=>{e.observe(t)}),document.querySelector(".index.wrap .item:first-child").addClass("show"),f.each(".cards .item",t=>{["mouseenter","touchstart"].forEach(o=>{t.addEventListener(o,()=>{let s=document.querySelector(".cards .item.active");s&&s.removeClass("active"),t.addClass("active")},{passive:!0})}),["mouseleave"].forEach(o=>{t.addEventListener(o,()=>{t.removeClass("active")},{passive:!0})})})};u();u();var E=e=>{let t=document.querySelector(".theme .ic");e==="dark"?(F.setAttribute("data-theme",e),t.removeClass("i-sun"),t.addClass("i-moon")):(F.removeAttribute("data-theme"),t.removeClass("i-moon"),t.addClass("i-sun"))},et=()=>{m.auto_dark.enable&&(new Date().getHours()>=m.auto_dark.start||new Date().getHours()<=m.auto_dark.end?E("dark"):E())},ie=e=>{F.getAttribute("data-theme")==="dark"&&(e="#222"),document.querySelector('meta[name="theme-color"]').setAttribute("content",e)},tt=()=>{window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",t=>{t.matches?E("dark"):E()});let e=j.get("theme");e?E(e):m.darkmode&&E("dark")};var Et=document.getElementById("waves"),W=()=>{Ce(_(v)),Se(_(P)),Te(oe+_(Et)),be!==window.innerWidth&&H(null,1),xe(window.innerHeight),ke(window.innerWidth)},ot=()=>{let e=window.innerHeight,t=document.querySelector("main > .inner").offsetHeight,o=t>e?t-e:document.body.scrollHeight-e,s=window.scrollY>oe,n=window.scrollY>0,a=Math.round(Math.min(300*window.pageYOffset/o,100))/-5,c=200+window.pageYOffset;a>c&&(a=c),ee.style.transform="translate3d(0,"+a+"vh,0)",ee.style.webkitTransform="translate3d(0,"+a+"vh,0)",s?ie("#FFF"):ie("#222"),v.toggleClass("show",s),b.toggleClass("affix",n),ve.toggleClass("affix",n),h.toggleClass("affix",window.scrollY>Ee&&document.body.offsetWidth>=991),typeof O.y>"u"&&(O.y=window.scrollY),_e(O.y-window.scrollY),R<0?(v.removeClass("up"),v.toggleClass("down",s)):R>0&&(v.removeClass("down"),v.toggleClass("up",s)),O.y=window.scrollY;let r=Math.round(Math.min(100*window.scrollY/o,100))+"%";D.querySelector("span").innerText!==r&&(D.querySelector("span").innerText=r),(document.getElementById("sidebar").hasClass("affix")||document.getElementById("sidebar").hasClass("on"))&&he(document.querySelector(".percent"),r)},st=()=>{let e=document.querySelector('[rel="icon"]');document.addEventListener("visibilitychange",()=>{switch(document.visibilityState){case"hidden":e.setAttribute("href",J+m.favicon.hidden),document.title=LOCAL.favicon.hide,m.loader.switch&&w.show(),clearTimeout(ge);break;case"visible":e.setAttribute("href",J+m.favicon.normal),document.title=LOCAL.favicon.show,m.loader.switch&&w.hide(1e3),He(setTimeout(()=>{document.title=pe},2e3));break}},{passive:!0})};u();u();u();var bt=new Uint8Array(128);for(let e=0;e<83;e++)bt["0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#$%*+,-.:;=?@[]^_{|}~".charCodeAt(e)]=e;var Lt=Math.PI,yo=Lt*2;var nt=32,rt="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E";var it=typeof window>"u",at=!it&&"loading"in HTMLImageElement.prototype,ct=!it&&(!("onscroll"in window)||/(?:gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent));function Ct(e,t=document){return typeof e=="string"?[...t.querySelectorAll(e)]:e instanceof Element?[e]:[...e]}function St(e){let t=Date.now();return rt.replace(/\s/,` data-id='${t}-${e}' `)}function Tt(e,t){let o;return function(...s){o!=null&&clearTimeout(o),o=setTimeout(()=>{e(...s),o=void 0},t)}}function le(e='img[loading="lazy"]',{hash:t=!0,hashType:o="blurhash",placeholderSize:s=nt,updateSizesOnResize:n=!1,onImageLoad:a}={}){let c=new Set;for(let[r,i]of Ct(e).entries()){let l=ce(i,{updateOnResize:n});if(n&&l&&c.add(l),!i.dataset.src&&!i.dataset.srcset)continue;if(ct||!at){lt(i),X(i),$(i);continue}if(i.src||(i.src=St(r)),i.complete&&i.naturalWidth>0){ae(i,a);continue}let d=()=>ae(i,a);i.addEventListener("load",d,{once:!0}),c.add(()=>i.removeEventListener("load",d))}return()=>{for(let r of c)r();c.clear()}}function ae(e,t){if(ut(e)){lt(e),X(e),$(e),t?.(e);return}let o=new Image,{srcset:s,src:n,sizes:a}=e.dataset;if(a==="auto"){let c=dt(e);c&&(o.sizes=`${c}px`)}else e.sizes&&(o.sizes=e.sizes);s&&(o.srcset=s),n&&(o.src=n),o.addEventListener("load",()=>{X(e),$(e),t?.(e)},{once:!0})}var Y=new WeakMap;function ce(e,t){if(e.dataset.sizes!=="auto")return;let o=dt(e);if(o&&(e.sizes=`${o}px`),ut(e)&&t?.processSourceElements)for(let s of[...e.parentElement.getElementsByTagName("source")])ce(s,{processSourceElements:!0});if(t?.updateOnResize){if(!Y.has(e)){let s=Tt(()=>ce(e),500),n=new ResizeObserver(s);Y.set(e,n),n.observe(e)}return()=>{let s=Y.get(e);s&&(s.disconnect(),Y.delete(e))}}}function $(e){e.dataset.src&&(e.src=e.dataset.src,e.removeAttribute("data-src"))}function X(e){e.dataset.srcset&&(e.srcset=e.dataset.srcset,e.removeAttribute("data-srcset"))}function lt(e){let t=e.parentElement;t?.tagName.toLowerCase()==="picture"&&([...t.querySelectorAll("source[data-srcset]")].forEach(X),[...t.querySelectorAll("source[data-src]")].forEach($))}function dt(e){return e instanceof HTMLSourceElement?e.parentElement?.getElementsByTagName("img")[0]?.offsetWidth:e.offsetWidth}function ut(e){return e.parentElement?.tagName.toLowerCase()==="picture"}var mt=()=>{G(),h.hasClass("on")&&g(h,0,()=>{h.removeClass("on"),T.removeClass("close")});let e=document.getElementById("main");e.innerHTML="",e.appendChild(S.lastChild.cloneNode(!0)),y(0)},de=async e=>{if(window.location.origin!==m.hostname&&window.location.origin!=="http://localhost:4000"){window.location.href=m.hostname;alert(`\u68C0\u6D4B\u5230\u975E\u6CD5\u4EFF\u5192\u7F51\u7AD9\uFF0C\u5DF2\u81EA\u52A8\u8DF3\u8F6C\u56DE\u6B63\u786E\u9996\u9875;
We have detected a fake website, and you have been redirected to the correct homepage.`)}Ae(0),Ie(window.location.href),Ue(document.getElementById("imgs")),se("katex"),await import("./copy-tex-XZF4IGOG.js"),se("mermaid");let t=new IntersectionObserver(function(s,n){s.forEach(a=>{if(a.isIntersecting){let c=a.target;c.style.backgroundImage=`url("${c.getAttribute("data-background-image")}")`,c.removeAttribute("data-background-image"),n.unobserve(c)}})},{root:null,threshold:.2});document.querySelectorAll("[data-background-image]").forEach(s=>{t.observe(s)}),e!==1&&f.each("script[data-pjax]",Ye),Me(document.title),W(),Ke(),$e(),Xe(),import("./post-LGSRQH26.js").then(({postBeauty:s})=>{s()});let o=document.getElementById("copyright");if(o){let s=new IntersectionObserver(n=>{n.forEach(a=>{a.isIntersecting&&(import("./comments-4VY32AHU.js").then(({walinePageview:c,walineComment:r})=>{c(),r()}),s.disconnect())})},{root:null,threshold:.2});s.observe(o)}le(),import("./comments-4VY32AHU.js").then(async({walineRecentComments:s})=>{await s()}),Ge(),B.player.load(LOCAL.audio||m.audio||{}),w.hide(100),setTimeout(()=>{ze()},500),Qe()};u();function ue(){let e=!0;window.addEventListener("DOMContentLoaded",function(){e=!1}),document.readyState==="loading"&&window.addEventListener("load",function(){e&&(window.dispatchEvent(new Event("DOMContentLoaded")),console.log("%c \u2601\uFE0Fcloudflare patch %c running","color: white; background: #ff8c00; padding: 5px 3px;","padding: 4px;border:1px solid #ff8c00"))})}ue();u();function x(e,t,o){return e instanceof HTMLCollection||e instanceof NodeList||e instanceof Array?Array.prototype.forEach.call(e,t,o):t.call(o,e,0,[e])}var gt=(e,t)=>{e=typeof e=="string"?e.split(" "):e,e.forEach(t)};function me(e,t,o,s){gt(t,n=>{x(e,a=>{a.addEventListener(n,o,s)})})}function A(e,t,o={}){gt(t,s=>{let n=new CustomEvent(s,{bubbles:!0,cancelable:!0,...o});x(e,a=>{a.dispatchEvent(n)})})}function ht(e){let t=e.text||e.textContent||e.innerHTML||"",o=e.src||"",s=e.parentNode||document.querySelector("head")||document.documentElement,n=document.createElement("script");return t.match("document.write")?!1:(n.type="text/javascript",n.id=e.id,o!==""&&(n.src=o,n.async=!1),t!==""&&n.appendChild(document.createTextNode(t)),s.appendChild(n),(s instanceof HTMLHeadElement||s instanceof HTMLBodyElement)&&s.contains(n)&&s.removeChild(n),!0)}function xt(e){e.tagName.toLowerCase()==="script"&&ht(e),x(e.querySelectorAll("script"),t=>{let o=t;(!o.type||o.type.toLowerCase()==="text/javascript")&&(o.parentNode&&o.parentNode.removeChild(o),ht(o))})}function kt(e,t,o,s=document){e.forEach(n=>{x(s.querySelectorAll(n),t,o)})}var V=(()=>{let e=0;return()=>`pjax${new Date().getTime()}_${e++}`})();function wt(e,t){e.outerHTML=t.outerHTML,this.onSwitch()}function _t(e,t){e.innerHTML=t.innerHTML,t.className===""?e.removeAttribute("class"):e.className=t.className,this.onSwitch()}function ft(e,t){if(e.innerHTML=t.innerHTML,t.hasAttributes()){let o=t.attributes;for(let s=0;s<o.length;s++)e.attributes.setNamedItem(o[s].cloneNode())}this.onSwitch()}function Ht({elements:e="a[href]",selectors:t=["title",".js-Pjax"],switches:o={},switchesOptions:s={},history:n=!0,scrollTo:a=0,scrollRestoration:c=!0,cacheBust:r=!0,timeout:i=0,currentUrlFullReload:l=!1}={}){let d={elements:e,selectors:t,switches:o,switchesOptions:s,history:n,scrollTo:a,scrollRestoration:c,cacheBust:r,timeout:i,currentUrlFullReload:l};return d.switches.head||(d.switches.head=ft),d.switches.body||(d.switches.body=ft),d}var Z="data-pjax-state";function pt(e,t){if(t.defaultPrevented||t.returnValue===!1)return;let o={...this.options},s=At(e,t);if(s){e.setAttribute(Z,s);return}if(t.preventDefault(),this.options.currentUrlFullReload&&e.href===window.location.href.split("#")[0]){e.setAttribute(Z,"reload"),this.reload();return}e.setAttribute(Z,"load"),o.triggerElement=e,this.loadUrl(e.href,o)}function At(e,t){return t.which>1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey?"modifier":e.protocol!==window.location.protocol||e.host!==window.location.host?"external":e.hash&&e.href.replace(e.hash,"")===window.location.href.replace(location.hash,"")?"anchor":e.href===window.location.href.split("#")[0]+"#"?"anchor-empty":null}function It(e){e.setAttribute(Z,""),me(e,"click",t=>pt.call(this,e,t)),me(e,"keyup",t=>{let o=t;o.keyCode===13&&pt.call(this,e,o)})}function qt(e,t,o,s){if(s={...s||this.options},s.request=t,e===!1){A(document,"pjax:complete pjax:error",s);return}let n=window.history.state||{};window.history.replaceState({url:n.url||window.location.href,title:n.title||document.title,uid:n.uid||V(),scrollPos:[document.documentElement.scrollLeft||document.body.scrollLeft,document.documentElement.scrollTop||document.body.scrollTop]},document.title,window.location.href);let a=o;t.responseURL?o!==t.responseURL&&(o=t.responseURL):t.getResponseHeader("X-PJAX-URL")?o=t.getResponseHeader("X-PJAX-URL"):t.getResponseHeader("X-XHR-Redirected-To")&&(o=t.getResponseHeader("X-XHR-Redirected-To"));let c=document.createElement("a");c.href=a;let r=c.hash;c.href=o,r&&!c.hash&&(c.hash=r,o=c.href),this.state.href=o,this.state.options=s;try{this.loadContent(e,s)}catch(i){return A(document,"pjax:error",s),console.error("Pjax switch fail: ",i),this.latestChance(o)}}function Mt(e){switch(e.tagName.toLowerCase()){case"a":e.hasAttribute("data-pjax-state")||this.attachLink(e);break;default:throw new Error("theme-shokax-pjax can only be applied on <a>")}}function Ot(e,t,o){let s=new RegExp("([?&])"+t+"=.*?(&|$)","i"),n=e.indexOf("?")!==-1?"&":"?";return e.match(s)?e.replace(s,"$1"+t+"="+o+"$2"):e+n+t+"="+o}function Rt(e,t={},o){let s=t.requestOptions||{},n=(s.requestMethod||"GET").toUpperCase(),a=s.requestParams||null,c=null,r=new XMLHttpRequest,i=t.timeout;if(r.onreadystatechange=()=>{r.readyState===4&&(r.status===200?o(r.responseText,r,e,t):r.status!==0&&o(null,r,e,t))},r.onerror=l=>{console.error(l),o(null,r,e,t)},r.ontimeout=()=>{o(null,r,e,t)},a&&a.length){let l=a.map(d=>d.name+"="+d.value).join("&");switch(n){case"GET":e=e.split("?")[0],e+="?"+l;break;case"POST":c=l;break}}return t.cacheBust&&(e=Ot(e,"t",Date.now())),r.open(n,e,!0),r.timeout=i,r.setRequestHeader("X-Requested-With","XMLHttpRequest"),r.setRequestHeader("X-PJAX","true"),r.setRequestHeader("X-PJAX-Selectors",JSON.stringify(t.selectors)),r.send(c),r}function Nt(e,t,o,s,n,a){let c=[];o.forEach(r=>{let i=s.querySelectorAll(r),l=n.querySelectorAll(r);if(i.length!==l.length)throw new Error(`DOM doesn't look the same on new loaded page: '${r}' - new ${i.length}, old ${l.length}`);x(i,(d,k)=>{let I=l[k],z=e[r]?e[r].bind(this,I,d,a,t[r]):wt.bind(this,I,d,a);c.push(z)},this)},this),this.state.numPendingSwitches=c.length,c.forEach(r=>{r()})}function Pt(e,t,o){for(let s of t){let n=e.querySelectorAll(s);for(let a=0;a<n.length;a++)if(n[a].contains(o))return!0}return!1}var L=class{constructor(t){this.state={numPendingSwitches:0,href:null,options:null},this.options=Ht(t),this.options.scrollRestoration&&"scrollRestoration"in history&&(history.scrollRestoration="manual"),this.maxUid=this.lastUid=V(),this.parseDOM(document),me(window,"popstate",o=>{let s=o;if(s.state){let n={...this.options};n.url=s.state.url,n.title=s.state.title,n.history=!1,n.scrollPos=s.state.scrollPos,s.state.uid<this.lastUid?n.backward=!0:n.forward=!0,this.lastUid=s.state.uid,this.loadUrl(s.state.url,n)}})}getElements(t){return t.querySelectorAll(this.options.elements)}parseDOM(t){x(this.getElements(t),Mt,this)}refresh(t){this.parseDOM(t||document)}reload(){window.location.reload()}forEachSelectors(t,o,s){return kt.bind(this)(this.options.selectors,t,o,s)}switchSelectors(t,o,s,n){return Nt.bind(this)(this.options.switches,this.options.switchesOptions,t,o,s,n)}latestChance(t){window.location=t}onSwitch(){A(window,"resize scroll"),this.state.numPendingSwitches--,this.state.numPendingSwitches===0&&this.afterAllSwitches()}loadContent(t,o){if(typeof t!="string"){A(document,"pjax:complete pjax:error",o);return}let s=document.implementation.createHTMLDocument("pjax"),n=/<html[^>]+>/gi,a=/\s?[a-z:]+(?:=['"][^'">]+['"])*/gi,c=t.match(n);if(c&&c.length&&(c=c[0].match(a),c.length&&(c.shift(),c.forEach(r=>{let i=r.trim().split("=");i.length===1?s.documentElement.setAttribute(i[0],"true"):s.documentElement.setAttribute(i[0],i[1].slice(1,-1))}))),s.documentElement.innerHTML=t,document.activeElement&&Pt(document,this.options.selectors,document.activeElement))try{document.activeElement.blur()}catch{}this.switchSelectors(this.options.selectors,s,document,o)}loadUrl(t,o){o=typeof o=="object"?{...this.options,...o}:{...this.options},this.abortRequest(this.request),A(document,"pjax:send",o),this.request=this.doRequest(t,o,this.handleResponse.bind(this))}afterAllSwitches(){var t,o,s;this.options.selectors.forEach(a=>{x(document.querySelectorAll(a),c=>{xt(c)})});let n=this.state;if(!((t=n.options)===null||t===void 0)&&t.history&&(window.history.state||(this.lastUid=this.maxUid=V(),window.history.replaceState({url:window.location.href,title:document.title,uid:this.maxUid,scrollPos:[0,0]},document.title)),this.lastUid=this.maxUid=V(),window.history.pushState({url:n.href,title:n.options.title,uid:this.maxUid,scrollPos:[0,0]},n.options.title,n.href)),this.forEachSelectors(a=>{this.parseDOM(a)},this),A(document,"pjax:complete pjax:success",n.options),!((o=n.options)===null||o===void 0)&&o.history){let a=document.createElement("a");if(a.href=this.state.href,a.hash){let c=a.hash.slice(1);c=decodeURIComponent(c);let r=0,i=document.getElementById(c)||document.getElementsByName(c)[0];if(i&&i.offsetParent)do r+=i.offsetTop,i=i.offsetParent;while(i);window.scrollTo(0,r)}else n.options.scrollTo!==!1&&(Array.isArray(n.options.scrollTo)?window.scrollTo(n.options.scrollTo[0],n.options.scrollTo[1]):window.scrollTo(0,n.options.scrollTo))}else!((s=n.options)===null||s===void 0)&&s.scrollRestoration&&n.options.scrollPos&&window.scrollTo(n.options.scrollPos[0],n.options.scrollPos[1]);this.state={numPendingSwitches:0,href:null,options:null}}abortRequest(t){t&&t.readyState<4&&(t.onreadystatechange=()=>{},t.abort())}};L.prototype.attachLink=It;L.prototype.doRequest=Rt;L.prototype.handleResponse=qt;L.switches={innerHTML:_t,outerHTML:wt};u();function vt(){function e(){let t,o=document.querySelector(".theme").querySelector(".ic"),s=C(N,"div",{id:"neko",innerHTML:'<div class="planet"><div class="sun"></div><div class="moon"></div></div><div class="body"><div class="face"><section class="eyes left"><span class="pupil"></span></section><section class="eyes right"><span class="pupil"></span></section><span class="nose"></span></div></div>'}),n=()=>{g(s,{delay:2500,opacity:0},()=>{N.removeChild(s)})};o.hasClass("i-sun")?t=()=>{s.addClass("dark"),E("dark"),j.set("theme","dark"),n()}:(s.addClass("dark"),t=()=>{s.removeClass("dark"),E(),j.set("theme","light"),n()}),g(s,1,()=>{setTimeout(t,210)},()=>{M(s,"block")})}document.getElementById("rightNav").querySelector(".theme .ic").addEventListener("click",e)}var Bt=async()=>{vt(),re(),qe(new L({selectors:["head title",".languages",".twikoo",".pjax",".leancloud-recent-comment","script[data-config]"],cacheBust:!1})),m.quicklink.ignores=LOCAL.ignores,import("./quicklink-UHJQIENK.js").then(({listen:e})=>{e(m.quicklink)}),et(),st(),tt(),document.querySelector("li.item.search > i").addEventListener("click",()=>{m.search!==null&&(te||je(C(N,"div",{id:"search",innerHTML:'<div class="inner"><div class="header"><span class="icon"><i class="ic i-search"></i></span><div class="search-input-container"></div><span class="close-btn"><i class="ic i-times-circle"></i></span></div><div class="results"><div class="inner"><div id="search-stats"></div><div id="search-hits"></div><div id="search-pagination"></div></div></div></div>'})),import("./search-JZCS2AUQ.js").then(({algoliaSearch:e})=>{e(Le)}),f.each(".search",e=>{e.addEventListener("click",()=>{document.body.style.overflow="hidden",g(te,"shrinkIn",()=>{document.querySelector(".search-input").focus()})})}))},{once:!0,capture:!0}),import("./index.esm-GB67GXTI.js").then(e=>{e.default(m.fireworks)}),window.addEventListener("scroll",ot,{passive:!0}),window.addEventListener("resize",W,{passive:!0}),window.addEventListener("pjax:send",mt,{passive:!0}),window.addEventListener("pjax:success",de,{passive:!0}),window.addEventListener("beforeunload",()=>{G()}),await de(1)};ue();if(window.location.origin!==m.hostname&&window.location.origin!=="http://localhost:4000"){window.location.href=m.hostname;alert(`\u68C0\u6D4B\u5230\u975E\u6CD5\u4EFF\u5192\u7F51\u7AD9\uFF0C\u5DF2\u81EA\u52A8\u8DF3\u8F6C\u56DE\u6B63\u786E\u9996\u9875;
We have detected a fake website, and you have been redirected to the correct homepage.`)}window.addEventListener("DOMContentLoaded",Bt,{passive:!0});console.log("%c Theme.ShokaX v"+m.version+" %c https://github.com/theme-shoka-x/hexo-theme-shokaX ","color: white; background: #e9546b; padding:5px 0;","padding:4px;border:1px solid #e9546b;");
/*! For license information please see siteInit.js.LEGAL.txt */
