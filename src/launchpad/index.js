/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),o=new Map;class r{constructor(t,o){if(this._$cssResult$=!0,o!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=o.get(this.cssText);return t&&void 0===e&&(o.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const s=(t,...o)=>{const s=1===t.length?t[0]:o.reduce(((e,o,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[r+1]),t[0]);return new r(s,e)},l=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let o="";for(const e of t.cssRules)o+=e.cssText;return(t=>new r("string"==typeof t?t:t+"",e))(o)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var i;const a=window.trustedTypes,n=a?a.emptyScript:"",c=window.reactiveElementPolyfillSupport,d={toAttribute(t,e){switch(e){case Boolean:t=t?n:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},u=(t,e)=>e!==t&&(e==e||t==t),h={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:u};class p extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,o)=>{const r=this._$Eh(o,e);void 0!==r&&(this._$Eu.set(r,o),t.push(r))})),t}static createProperty(t,e=h){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,o,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(r){const s=this[t];this[e]=r,this.requestUpdate(t,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||h}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of e)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Eh(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,o;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(o=t.hostConnected)||void 0===o||o.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const o=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,o)=>{t?e.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):o.forEach((t=>{const o=document.createElement("style"),r=window.litNonce;void 0!==r&&o.setAttribute("nonce",r),o.textContent=t.cssText,e.appendChild(o)}))})(o,this.constructor.elementStyles),o}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$ES(t,e,o=h){var r,s;const l=this.constructor._$Eh(t,o);if(void 0!==l&&!0===o.reflect){const i=(null!==(s=null===(r=o.converter)||void 0===r?void 0:r.toAttribute)&&void 0!==s?s:d.toAttribute)(e,o.type);this._$Ei=t,null==i?this.removeAttribute(l):this.setAttribute(l,i),this._$Ei=null}}_$AK(t,e){var o,r,s;const l=this.constructor,i=l._$Eu.get(t);if(void 0!==i&&this._$Ei!==i){const t=l.getPropertyOptions(i),a=t.converter,n=null!==(s=null!==(r=null===(o=a)||void 0===o?void 0:o.fromAttribute)&&void 0!==r?r:"function"==typeof a?a:null)&&void 0!==s?s:d.fromAttribute;this._$Ei=i,this[i]=n(e,t.type),this._$Ei=null}}requestUpdate(t,e,o){let r=!0;void 0!==t&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===o.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,o))):r=!1),!this.isUpdatePending&&r&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(o)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var b;p.finalized=!0,p.elementProperties=new Map,p.elementStyles=[],p.shadowRootOptions={mode:"open"},null==c||c({ReactiveElement:p}),(null!==(i=globalThis.reactiveElementVersions)&&void 0!==i?i:globalThis.reactiveElementVersions=[]).push("1.3.2");const m=globalThis.trustedTypes,v=m?m.createPolicy("lit-html",{createHTML:t=>t}):void 0,g=`lit$${(Math.random()+"").slice(9)}$`,f="?"+g,y=`<${f}>`,_=document,w=(t="")=>_.createComment(t),x=t=>null===t||"object"!=typeof t&&"function"!=typeof t,$=Array.isArray,k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,A=/-->/g,C=/>/g,S=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,E=/'/g,T=/"/g,z=/^(?:script|style|textarea|title)$/i,P=(t=>(e,...o)=>({_$litType$:t,strings:e,values:o}))(1),L=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),M=new WeakMap,N=(t,e,o)=>{var r,s;const l=null!==(r=null==o?void 0:o.renderBefore)&&void 0!==r?r:e;let i=l._$litPart$;if(void 0===i){const t=null!==(s=null==o?void 0:o.renderBefore)&&void 0!==s?s:null;l._$litPart$=i=new B(e.insertBefore(w(),t),t,void 0,null!=o?o:{})}return i._$AI(t),i},D=_.createTreeWalker(_,129,null,!1);class R{constructor({strings:t,_$litType$:e},o){let r;this.parts=[];let s=0,l=0;const i=t.length-1,a=this.parts,[n,c]=((t,e)=>{const o=t.length-1,r=[];let s,l=2===e?"<svg>":"",i=k;for(let e=0;e<o;e++){const o=t[e];let a,n,c=-1,d=0;for(;d<o.length&&(i.lastIndex=d,n=i.exec(o),null!==n);)d=i.lastIndex,i===k?"!--"===n[1]?i=A:void 0!==n[1]?i=C:void 0!==n[2]?(z.test(n[2])&&(s=RegExp("</"+n[2],"g")),i=S):void 0!==n[3]&&(i=S):i===S?">"===n[0]?(i=null!=s?s:k,c=-1):void 0===n[1]?c=-2:(c=i.lastIndex-n[2].length,a=n[1],i=void 0===n[3]?S:'"'===n[3]?T:E):i===T||i===E?i=S:i===A||i===C?i=k:(i=S,s=void 0);const u=i===S&&t[e+1].startsWith("/>")?" ":"";l+=i===k?o+y:c>=0?(r.push(a),o.slice(0,c)+"$lit$"+o.slice(c)+g+u):o+g+(-2===c?(r.push(void 0),e):u)}const a=l+(t[o]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==v?v.createHTML(a):a,r]})(t,e);if(this.el=R.createElement(n,o),D.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(r=D.nextNode())&&a.length<i;){if(1===r.nodeType){if(r.hasAttributes()){const t=[];for(const e of r.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(g)){const o=c[l++];if(t.push(e),void 0!==o){const t=r.getAttribute(o.toLowerCase()+"$lit$").split(g),e=/([.?@])?(.*)/.exec(o);a.push({type:1,index:s,name:e[2],strings:t,ctor:"."===e[1]?F:"?"===e[1]?q:"@"===e[1]?V:I})}else a.push({type:6,index:s})}for(const e of t)r.removeAttribute(e)}if(z.test(r.tagName)){const t=r.textContent.split(g),e=t.length-1;if(e>0){r.textContent=m?m.emptyScript:"";for(let o=0;o<e;o++)r.append(t[o],w()),D.nextNode(),a.push({type:2,index:++s});r.append(t[e],w())}}}else if(8===r.nodeType)if(r.data===f)a.push({type:2,index:s});else{let t=-1;for(;-1!==(t=r.data.indexOf(g,t+1));)a.push({type:7,index:s}),t+=g.length-1}s++}}static createElement(t,e){const o=_.createElement("template");return o.innerHTML=t,o}}function H(t,e,o=t,r){var s,l,i,a;if(e===L)return e;let n=void 0!==r?null===(s=o._$Cl)||void 0===s?void 0:s[r]:o._$Cu;const c=x(e)?void 0:e._$litDirective$;return(null==n?void 0:n.constructor)!==c&&(null===(l=null==n?void 0:n._$AO)||void 0===l||l.call(n,!1),void 0===c?n=void 0:(n=new c(t),n._$AT(t,o,r)),void 0!==r?(null!==(i=(a=o)._$Cl)&&void 0!==i?i:a._$Cl=[])[r]=n:o._$Cu=n),void 0!==n&&(e=H(t,n._$AS(t,e.values),n,r)),e}class O{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:o},parts:r}=this._$AD,s=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:_).importNode(o,!0);D.currentNode=s;let l=D.nextNode(),i=0,a=0,n=r[0];for(;void 0!==n;){if(i===n.index){let e;2===n.type?e=new B(l,l.nextSibling,this,t):1===n.type?e=new n.ctor(l,n.name,n.strings,this,t):6===n.type&&(e=new K(l,this,t)),this.v.push(e),n=r[++a]}i!==(null==n?void 0:n.index)&&(l=D.nextNode(),i++)}return s}m(t){let e=0;for(const o of this.v)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class B{constructor(t,e,o,r){var s;this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=r,this._$Cg=null===(s=null==r?void 0:r.isConnected)||void 0===s||s}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=H(this,t,e),x(t)?t===U||null==t||""===t?(this._$AH!==U&&this._$AR(),this._$AH=U):t!==this._$AH&&t!==L&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>{var e;return $(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==U&&x(this._$AH)?this._$AA.nextSibling.data=t:this.k(_.createTextNode(t)),this._$AH=t}T(t){var e;const{values:o,_$litType$:r}=t,s="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=R.createElement(r.h,this.options)),r);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===s)this._$AH.m(o);else{const t=new O(s,this),e=t.p(this.options);t.m(o),this.k(e),this._$AH=t}}_$AC(t){let e=M.get(t.strings);return void 0===e&&M.set(t.strings,e=new R(t)),e}S(t){$(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,r=0;for(const s of t)r===e.length?e.push(o=new B(this.M(w()),this.M(w()),this,this.options)):o=e[r],o._$AI(s),r++;r<e.length&&(this._$AR(o&&o._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class I{constructor(t,e,o,r,s){this.type=1,this._$AH=U,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=s,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=U}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,r){const s=this.strings;let l=!1;if(void 0===s)t=H(this,t,e,0),l=!x(t)||t!==this._$AH&&t!==L,l&&(this._$AH=t);else{const r=t;let i,a;for(t=s[0],i=0;i<s.length-1;i++)a=H(this,r[o+i],e,i),a===L&&(a=this._$AH[i]),l||(l=!x(a)||a!==this._$AH[i]),a===U?t=U:t!==U&&(t+=(null!=a?a:"")+s[i+1]),this._$AH[i]=a}l&&!r&&this.C(t)}C(t){t===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class F extends I{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===U?void 0:t}}const j=m?m.emptyScript:"";class q extends I{constructor(){super(...arguments),this.type=4}C(t){t&&t!==U?this.element.setAttribute(this.name,j):this.element.removeAttribute(this.name)}}class V extends I{constructor(t,e,o,r,s){super(t,e,o,r,s),this.type=5}_$AI(t,e=this){var o;if((t=null!==(o=H(this,t,e,0))&&void 0!==o?o:U)===L)return;const r=this._$AH,s=t===U&&r!==U||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,l=t!==U&&(r===U||s);s&&this.element.removeEventListener(this.name,this,r),l&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==o?o:this.element,t):this._$AH.handleEvent(t)}}class K{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){H(this,t)}}const W=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Q,X;null==W||W(R,B),(null!==(b=globalThis.litHtmlVersions)&&void 0!==b?b:globalThis.litHtmlVersions=[]).push("2.2.5");class G extends p{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=N(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return L}}G.finalized=!0,G._$litElement$=!0,null===(Q=globalThis.litElementHydrateSupport)||void 0===Q||Q.call(globalThis,{LitElement:G});const J=globalThis.litElementPolyfillSupport;function Z(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}let Y;null==J||J({LitElement:G}),(null!==(X=globalThis.litElementVersions)&&void 0!==X?X:globalThis.litElementVersions=[]).push("3.2.0");let tt=0;function et(t){Y=t}function ot(){Y=null,tt=0}const rt=Symbol("haunted.phase"),st=Symbol("haunted.hook"),lt=Symbol("haunted.update"),it=Symbol("haunted.commit"),at=Symbol("haunted.effects"),nt=Symbol("haunted.layoutEffects");class ct{constructor(t,e){Z(this,"update",void 0),Z(this,"host",void 0),Z(this,"virtual",void 0),Z(this,st,void 0),Z(this,at,void 0),Z(this,nt,void 0),this.update=t,this.host=e,this[st]=new Map,this[at]=[],this[nt]=[]}run(t){et(this);let e=t();return ot(),e}_runEffects(t){let e=this[t];et(this);for(let t of e)t.call(this);ot()}runEffects(){this._runEffects(at)}runLayoutEffects(){this._runEffects(nt)}teardown(){this[st].forEach((t=>{"function"==typeof t.teardown&&t.teardown()}))}}const dt=Promise.resolve().then.bind(Promise.resolve());function ut(){let t,e=[];function o(){t=null;let o=e;e=[];for(var r=0,s=o.length;r<s;r++)o[r]()}return function(r){e.push(r),null==t&&(t=dt(o))}}const ht=ut(),pt=ut();function bt(t){class e extends class{constructor(t,e){Z(this,"renderer",void 0),Z(this,"host",void 0),Z(this,"state",void 0),Z(this,rt,void 0),Z(this,"_updateQueued",void 0),this.renderer=t,this.host=e,this.state=new ct(this.update.bind(this),e),this[rt]=null,this._updateQueued=!1}update(){this._updateQueued||(ht((()=>{let t=this.handlePhase(lt);pt((()=>{this.handlePhase(it,t),pt((()=>{this.handlePhase(at)}))})),this._updateQueued=!1})),this._updateQueued=!0)}handlePhase(t,e){switch(this[rt]=t,t){case it:return this.commit(e),void this.runEffects(nt);case lt:return this.render();case at:return this.runEffects(at)}}render(){return this.state.run((()=>this.renderer.call(this.host,this.host)))}runEffects(t){this.state._runEffects(t)}teardown(){this.state.teardown()}}{constructor(t,e,o){super(t,o||e),Z(this,"frag",void 0),this.frag=e}commit(e){t(e,this.frag)}}return function(t,o,r){const s=(r||o||{}).baseElement||HTMLElement,{observedAttributes:l=[],useShadowDOM:i=!0,shadowRootInit:a={}}=r||o||{};class n extends s{static get observedAttributes(){return t.observedAttributes||l||[]}constructor(){super(),Z(this,"_scheduler",void 0),!1===i?this._scheduler=new e(t,this):(this.attachShadow({mode:"open",...a}),this._scheduler=new e(t,this.shadowRoot,this))}connectedCallback(){this._scheduler.update()}disconnectedCallback(){this._scheduler.teardown()}attributeChangedCallback(t,e,o){if(e===o)return;let r=""===o||o;Reflect.set(this,((t="")=>t.replace(/-+([a-z])?/g,((t,e)=>e?e.toUpperCase():"")))(t),r)}}const c=new Proxy(s.prototype,{getPrototypeOf:t=>t,set(t,e,o,r){let s;return e in t?(s=Object.getOwnPropertyDescriptor(t,e),s&&s.set?(s.set.call(r,o),!0):(Reflect.set(t,e,o,r),!0)):(s="symbol"==typeof e||"_"===e[0]?{enumerable:!0,configurable:!0,writable:!0,value:o}:function(t){let e=t,o=!1;return Object.freeze({enumerable:!0,configurable:!0,get:()=>e,set(t){o&&e===t||(o=!0,e=t,this._scheduler&&this._scheduler.update())}})}(o),Object.defineProperty(r,e,s),s.set&&s.set.call(r,o),!0)}});return Object.setPrototypeOf(n.prototype,c),n}}class mt{constructor(t,e){Z(this,"id",void 0),Z(this,"state",void 0),this.id=t,this.state=e}}function vt(t,...e){let o=tt++,r=Y[st],s=r.get(o);return s||(s=new t(o,Y,...e),r.set(o,s)),s.update(...e)}function gt(t){return vt.bind(null,t)}function ft(t){return gt(class extends mt{constructor(e,o,r,s){super(e,o),Z(this,"callback",void 0),Z(this,"lastValues",void 0),Z(this,"values",void 0),Z(this,"_teardown",void 0),t(o,this)}update(t,e){this.callback=t,this.values=e}call(){this.values&&!this.hasChanged()||this.run(),this.lastValues=this.values}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(){"function"==typeof this._teardown&&this._teardown()}hasChanged(){return!this.lastValues||this.values.some(((t,e)=>this.lastValues[e]!==t))}})}function yt(t,e){t[at].push(e)}const _t=ft(yt),wt=gt(class extends mt{constructor(t,e,o){super(t,e),Z(this,"Context",void 0),Z(this,"value",void 0),Z(this,"_ranEffect",void 0),Z(this,"_unsubscribe",void 0),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,yt(e,this)}update(t){if(this.state.virtual)throw new Error("can't be used with virtual components");return this.Context!==t&&(this._subscribe(t),this.Context=t),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(t){this.value=t,this.state.update()}_subscribe(t){const e={Context:t,callback:this._updater};this.state.host.dispatchEvent(new CustomEvent("haunted.context",{detail:e,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:o=null,value:r}=e;this.value=o?r:t.defaultValue,this._unsubscribe=o}teardown(){this._unsubscribe&&this._unsubscribe()}});gt(class extends mt{constructor(t,e,o,r){super(t,e),Z(this,"value",void 0),Z(this,"values",void 0),this.value=o(),this.values=r}update(t,e){return this.hasChanged(e)&&(this.values=e,this.value=t()),this.value}hasChanged(t=[]){return t.some(((t,e)=>this.values[e]!==t))}});const xt=ft((function(t,e){t[nt].push(e)})),$t=gt(class extends mt{constructor(t,e,o){super(t,e),Z(this,"args",void 0),this.updater=this.updater.bind(this),"function"==typeof o&&(o=o()),this.makeArgs(o)}update(){return this.args}updater(t){if("function"==typeof t){const e=t,[o]=this.args;t=e(o)}this.makeArgs(t),this.state.update()}makeArgs(t){this.args=Object.freeze([t,this.updater])}});Promise.resolve(),gt(class extends mt{constructor(t,e,o,r,s){super(t,e),Z(this,"reducer",void 0),Z(this,"currentState",void 0),this.dispatch=this.dispatch.bind(this),this.currentState=void 0!==s?s(r):r}update(t){return this.reducer=t,[this.currentState,this.dispatch]}dispatch(t){this.currentState=this.reducer(this.currentState,t),this.state.update()}});const{component:kt,createContext:At}=function({render:t}){const e=bt(t),o=function(t){return e=>{const o={Provider:class extends HTMLElement{constructor(){super(),Z(this,"listeners",void 0),Z(this,"_value",void 0),this.listeners=new Set,this.addEventListener("haunted.context",this)}disconnectedCallback(){this.removeEventListener("haunted.context",this)}handleEvent(t){const{detail:e}=t;e.Context===o&&(e.value=this.value,e.unsubscribe=this.unsubscribe.bind(this,e.callback),this.listeners.add(e.callback),t.stopPropagation())}unsubscribe(t){this.listeners.delete(t)}set value(t){this._value=t;for(let e of this.listeners)e(t)}get value(){return this._value}},Consumer:t((function({render:t}){return t(wt(o))})),defaultValue:e};return o}}(e);return{component:e,createContext:o}}({render:N});var Ct=s`.sl-theme-light,:host,:root{--sl-color-gray-50:hsl(0 0% 97.5%);--sl-color-gray-100:hsl(240 4.8% 95.9%);--sl-color-gray-200:hsl(240 5.9% 90%);--sl-color-gray-300:hsl(240 4.9% 83.9%);--sl-color-gray-400:hsl(240 5% 64.9%);--sl-color-gray-500:hsl(240 3.8% 46.1%);--sl-color-gray-600:hsl(240 5.2% 33.9%);--sl-color-gray-700:hsl(240 5.3% 26.1%);--sl-color-gray-800:hsl(240 3.7% 15.9%);--sl-color-gray-900:hsl(240 5.9% 10%);--sl-color-gray-950:hsl(240 7.3% 8%);--sl-color-red-50:hsl(0 85.7% 97.3%);--sl-color-red-100:hsl(0 93.3% 94.1%);--sl-color-red-200:hsl(0 96.3% 89.4%);--sl-color-red-300:hsl(0 93.5% 81.8%);--sl-color-red-400:hsl(0 90.6% 70.8%);--sl-color-red-500:hsl(0 84.2% 60.2%);--sl-color-red-600:hsl(0 72.2% 50.6%);--sl-color-red-700:hsl(0 73.7% 41.8%);--sl-color-red-800:hsl(0 70% 35.3%);--sl-color-red-900:hsl(0 62.8% 30.6%);--sl-color-red-950:hsl(0 60% 19.6%);--sl-color-orange-50:hsl(33.3 100% 96.5%);--sl-color-orange-100:hsl(34.3 100% 91.8%);--sl-color-orange-200:hsl(32.1 97.7% 83.1%);--sl-color-orange-300:hsl(30.7 97.2% 72.4%);--sl-color-orange-400:hsl(27 96% 61%);--sl-color-orange-500:hsl(24.6 95% 53.1%);--sl-color-orange-600:hsl(20.5 90.2% 48.2%);--sl-color-orange-700:hsl(17.5 88.3% 40.4%);--sl-color-orange-800:hsl(15 79.1% 33.7%);--sl-color-orange-900:hsl(15.3 74.6% 27.8%);--sl-color-orange-950:hsl(15.2 69.1% 19%);--sl-color-amber-50:hsl(48 100% 96.1%);--sl-color-amber-100:hsl(48 96.5% 88.8%);--sl-color-amber-200:hsl(48 96.6% 76.7%);--sl-color-amber-300:hsl(45.9 96.7% 64.5%);--sl-color-amber-400:hsl(43.3 96.4% 56.3%);--sl-color-amber-500:hsl(37.7 92.1% 50.2%);--sl-color-amber-600:hsl(32.1 94.6% 43.7%);--sl-color-amber-700:hsl(26 90.5% 37.1%);--sl-color-amber-800:hsl(22.7 82.5% 31.4%);--sl-color-amber-900:hsl(21.7 77.8% 26.5%);--sl-color-amber-950:hsl(22.9 74.1% 16.7%);--sl-color-yellow-50:hsl(54.5 91.7% 95.3%);--sl-color-yellow-100:hsl(54.9 96.7% 88%);--sl-color-yellow-200:hsl(52.8 98.3% 76.9%);--sl-color-yellow-300:hsl(50.4 97.8% 63.5%);--sl-color-yellow-400:hsl(47.9 95.8% 53.1%);--sl-color-yellow-500:hsl(45.4 93.4% 47.5%);--sl-color-yellow-600:hsl(40.6 96.1% 40.4%);--sl-color-yellow-700:hsl(35.5 91.7% 32.9%);--sl-color-yellow-800:hsl(31.8 81% 28.8%);--sl-color-yellow-900:hsl(28.4 72.5% 25.7%);--sl-color-yellow-950:hsl(33.1 69% 13.9%);--sl-color-lime-50:hsl(78.3 92% 95.1%);--sl-color-lime-100:hsl(79.6 89.1% 89.2%);--sl-color-lime-200:hsl(80.9 88.5% 79.6%);--sl-color-lime-300:hsl(82 84.5% 67.1%);--sl-color-lime-400:hsl(82.7 78% 55.5%);--sl-color-lime-500:hsl(83.7 80.5% 44.3%);--sl-color-lime-600:hsl(84.8 85.2% 34.5%);--sl-color-lime-700:hsl(85.9 78.4% 27.3%);--sl-color-lime-800:hsl(86.3 69% 22.7%);--sl-color-lime-900:hsl(87.6 61.2% 20.2%);--sl-color-lime-950:hsl(86.5 60.6% 13.9%);--sl-color-green-50:hsl(138.5 76.5% 96.7%);--sl-color-green-100:hsl(140.6 84.2% 92.5%);--sl-color-green-200:hsl(141 78.9% 85.1%);--sl-color-green-300:hsl(141.7 76.6% 73.1%);--sl-color-green-400:hsl(141.9 69.2% 58%);--sl-color-green-500:hsl(142.1 70.6% 45.3%);--sl-color-green-600:hsl(142.1 76.2% 36.3%);--sl-color-green-700:hsl(142.4 71.8% 29.2%);--sl-color-green-800:hsl(142.8 64.2% 24.1%);--sl-color-green-900:hsl(143.8 61.2% 20.2%);--sl-color-green-950:hsl(144.3 60.7% 12%);--sl-color-emerald-50:hsl(151.8 81% 95.9%);--sl-color-emerald-100:hsl(149.3 80.4% 90%);--sl-color-emerald-200:hsl(152.4 76% 80.4%);--sl-color-emerald-300:hsl(156.2 71.6% 66.9%);--sl-color-emerald-400:hsl(158.1 64.4% 51.6%);--sl-color-emerald-500:hsl(160.1 84.1% 39.4%);--sl-color-emerald-600:hsl(161.4 93.5% 30.4%);--sl-color-emerald-700:hsl(162.9 93.5% 24.3%);--sl-color-emerald-800:hsl(163.1 88.1% 19.8%);--sl-color-emerald-900:hsl(164.2 85.7% 16.5%);--sl-color-emerald-950:hsl(164.3 87.5% 9.4%);--sl-color-teal-50:hsl(166.2 76.5% 96.7%);--sl-color-teal-100:hsl(167.2 85.5% 89.2%);--sl-color-teal-200:hsl(168.4 83.8% 78.2%);--sl-color-teal-300:hsl(170.6 76.9% 64.3%);--sl-color-teal-400:hsl(172.5 66% 50.4%);--sl-color-teal-500:hsl(173.4 80.4% 40%);--sl-color-teal-600:hsl(174.7 83.9% 31.6%);--sl-color-teal-700:hsl(175.3 77.4% 26.1%);--sl-color-teal-800:hsl(176.1 69.4% 21.8%);--sl-color-teal-900:hsl(175.9 60.8% 19%);--sl-color-teal-950:hsl(176.5 58.6% 11.4%);--sl-color-cyan-50:hsl(183.2 100% 96.3%);--sl-color-cyan-100:hsl(185.1 95.9% 90.4%);--sl-color-cyan-200:hsl(186.2 93.5% 81.8%);--sl-color-cyan-300:hsl(187 92.4% 69%);--sl-color-cyan-400:hsl(187.9 85.7% 53.3%);--sl-color-cyan-500:hsl(188.7 94.5% 42.7%);--sl-color-cyan-600:hsl(191.6 91.4% 36.5%);--sl-color-cyan-700:hsl(192.9 82.3% 31%);--sl-color-cyan-800:hsl(194.4 69.6% 27.1%);--sl-color-cyan-900:hsl(196.4 63.6% 23.7%);--sl-color-cyan-950:hsl(196.8 61% 16.1%);--sl-color-sky-50:hsl(204 100% 97.1%);--sl-color-sky-100:hsl(204 93.8% 93.7%);--sl-color-sky-200:hsl(200.6 94.4% 86.1%);--sl-color-sky-300:hsl(199.4 95.5% 73.9%);--sl-color-sky-400:hsl(198.4 93.2% 59.6%);--sl-color-sky-500:hsl(198.6 88.7% 48.4%);--sl-color-sky-600:hsl(200.4 98% 39.4%);--sl-color-sky-700:hsl(201.3 96.3% 32.2%);--sl-color-sky-800:hsl(201 90% 27.5%);--sl-color-sky-900:hsl(202 80.3% 23.9%);--sl-color-sky-950:hsl(202.3 73.8% 16.5%);--sl-color-blue-50:hsl(213.8 100% 96.9%);--sl-color-blue-100:hsl(214.3 94.6% 92.7%);--sl-color-blue-200:hsl(213.3 96.9% 87.3%);--sl-color-blue-300:hsl(211.7 96.4% 78.4%);--sl-color-blue-400:hsl(213.1 93.9% 67.8%);--sl-color-blue-500:hsl(217.2 91.2% 59.8%);--sl-color-blue-600:hsl(221.2 83.2% 53.3%);--sl-color-blue-700:hsl(224.3 76.3% 48%);--sl-color-blue-800:hsl(225.9 70.7% 40.2%);--sl-color-blue-900:hsl(224.4 64.3% 32.9%);--sl-color-blue-950:hsl(226.2 55.3% 18.4%);--sl-color-indigo-50:hsl(225.9 100% 96.7%);--sl-color-indigo-100:hsl(226.5 100% 93.9%);--sl-color-indigo-200:hsl(228 96.5% 88.8%);--sl-color-indigo-300:hsl(229.7 93.5% 81.8%);--sl-color-indigo-400:hsl(234.5 89.5% 73.9%);--sl-color-indigo-500:hsl(238.7 83.5% 66.7%);--sl-color-indigo-600:hsl(243.4 75.4% 58.6%);--sl-color-indigo-700:hsl(244.5 57.9% 50.6%);--sl-color-indigo-800:hsl(243.7 54.5% 41.4%);--sl-color-indigo-900:hsl(242.2 47.4% 34.3%);--sl-color-indigo-950:hsl(243.5 43.6% 22.9%);--sl-color-violet-50:hsl(250 100% 97.6%);--sl-color-violet-100:hsl(251.4 91.3% 95.5%);--sl-color-violet-200:hsl(250.5 95.2% 91.8%);--sl-color-violet-300:hsl(252.5 94.7% 85.1%);--sl-color-violet-400:hsl(255.1 91.7% 76.3%);--sl-color-violet-500:hsl(258.3 89.5% 66.3%);--sl-color-violet-600:hsl(262.1 83.3% 57.8%);--sl-color-violet-700:hsl(263.4 70% 50.4%);--sl-color-violet-800:hsl(263.4 69.3% 42.2%);--sl-color-violet-900:hsl(263.5 67.4% 34.9%);--sl-color-violet-950:hsl(265.1 61.5% 21.4%);--sl-color-purple-50:hsl(270 100% 98%);--sl-color-purple-100:hsl(268.7 100% 95.5%);--sl-color-purple-200:hsl(268.6 100% 91.8%);--sl-color-purple-300:hsl(269.2 97.4% 85.1%);--sl-color-purple-400:hsl(270 95.2% 75.3%);--sl-color-purple-500:hsl(270.7 91% 65.1%);--sl-color-purple-600:hsl(271.5 81.3% 55.9%);--sl-color-purple-700:hsl(272.1 71.7% 47.1%);--sl-color-purple-800:hsl(272.9 67.2% 39.4%);--sl-color-purple-900:hsl(273.6 65.6% 32%);--sl-color-purple-950:hsl(276 59.5% 16.5%);--sl-color-fuchsia-50:hsl(289.1 100% 97.8%);--sl-color-fuchsia-100:hsl(287 100% 95.5%);--sl-color-fuchsia-200:hsl(288.3 95.8% 90.6%);--sl-color-fuchsia-300:hsl(291.1 93.1% 82.9%);--sl-color-fuchsia-400:hsl(292 91.4% 72.5%);--sl-color-fuchsia-500:hsl(292.2 84.1% 60.6%);--sl-color-fuchsia-600:hsl(293.4 69.5% 48.8%);--sl-color-fuchsia-700:hsl(294.7 72.4% 39.8%);--sl-color-fuchsia-800:hsl(295.4 70.2% 32.9%);--sl-color-fuchsia-900:hsl(296.7 63.6% 28%);--sl-color-fuchsia-950:hsl(297.1 56.8% 14.5%);--sl-color-pink-50:hsl(327.3 73.3% 97.1%);--sl-color-pink-100:hsl(325.7 77.8% 94.7%);--sl-color-pink-200:hsl(325.9 84.6% 89.8%);--sl-color-pink-300:hsl(327.4 87.1% 81.8%);--sl-color-pink-400:hsl(328.6 85.5% 70.2%);--sl-color-pink-500:hsl(330.4 81.2% 60.4%);--sl-color-pink-600:hsl(333.3 71.4% 50.6%);--sl-color-pink-700:hsl(335.1 77.6% 42%);--sl-color-pink-800:hsl(335.8 74.4% 35.3%);--sl-color-pink-900:hsl(335.9 69% 30.4%);--sl-color-pink-950:hsl(336.2 65.4% 15.9%);--sl-color-rose-50:hsl(355.7 100% 97.3%);--sl-color-rose-100:hsl(355.6 100% 94.7%);--sl-color-rose-200:hsl(352.7 96.1% 90%);--sl-color-rose-300:hsl(352.6 95.7% 81.8%);--sl-color-rose-400:hsl(351.3 94.5% 71.4%);--sl-color-rose-500:hsl(349.7 89.2% 60.2%);--sl-color-rose-600:hsl(346.8 77.2% 49.8%);--sl-color-rose-700:hsl(345.3 82.7% 40.8%);--sl-color-rose-800:hsl(343.4 79.7% 34.7%);--sl-color-rose-900:hsl(341.5 75.5% 30.4%);--sl-color-rose-950:hsl(341.3 70.1% 17.1%);--sl-color-primary-50:var(--sl-color-sky-50);--sl-color-primary-100:var(--sl-color-sky-100);--sl-color-primary-200:var(--sl-color-sky-200);--sl-color-primary-300:var(--sl-color-sky-300);--sl-color-primary-400:var(--sl-color-sky-400);--sl-color-primary-500:var(--sl-color-sky-500);--sl-color-primary-600:var(--sl-color-sky-600);--sl-color-primary-700:var(--sl-color-sky-700);--sl-color-primary-800:var(--sl-color-sky-800);--sl-color-primary-900:var(--sl-color-sky-900);--sl-color-primary-950:var(--sl-color-sky-950);--sl-color-success-50:var(--sl-color-green-50);--sl-color-success-100:var(--sl-color-green-100);--sl-color-success-200:var(--sl-color-green-200);--sl-color-success-300:var(--sl-color-green-300);--sl-color-success-400:var(--sl-color-green-400);--sl-color-success-500:var(--sl-color-green-500);--sl-color-success-600:var(--sl-color-green-600);--sl-color-success-700:var(--sl-color-green-700);--sl-color-success-800:var(--sl-color-green-800);--sl-color-success-900:var(--sl-color-green-900);--sl-color-success-950:var(--sl-color-green-950);--sl-color-warning-50:var(--sl-color-amber-50);--sl-color-warning-100:var(--sl-color-amber-100);--sl-color-warning-200:var(--sl-color-amber-200);--sl-color-warning-300:var(--sl-color-amber-300);--sl-color-warning-400:var(--sl-color-amber-400);--sl-color-warning-500:var(--sl-color-amber-500);--sl-color-warning-600:var(--sl-color-amber-600);--sl-color-warning-700:var(--sl-color-amber-700);--sl-color-warning-800:var(--sl-color-amber-800);--sl-color-warning-900:var(--sl-color-amber-900);--sl-color-warning-950:var(--sl-color-amber-950);--sl-color-danger-50:var(--sl-color-red-50);--sl-color-danger-100:var(--sl-color-red-100);--sl-color-danger-200:var(--sl-color-red-200);--sl-color-danger-300:var(--sl-color-red-300);--sl-color-danger-400:var(--sl-color-red-400);--sl-color-danger-500:var(--sl-color-red-500);--sl-color-danger-600:var(--sl-color-red-600);--sl-color-danger-700:var(--sl-color-red-700);--sl-color-danger-800:var(--sl-color-red-800);--sl-color-danger-900:var(--sl-color-red-900);--sl-color-danger-950:var(--sl-color-red-950);--sl-color-neutral-50:var(--sl-color-gray-50);--sl-color-neutral-100:var(--sl-color-gray-100);--sl-color-neutral-200:var(--sl-color-gray-200);--sl-color-neutral-300:var(--sl-color-gray-300);--sl-color-neutral-400:var(--sl-color-gray-400);--sl-color-neutral-500:var(--sl-color-gray-500);--sl-color-neutral-600:var(--sl-color-gray-600);--sl-color-neutral-700:var(--sl-color-gray-700);--sl-color-neutral-800:var(--sl-color-gray-800);--sl-color-neutral-900:var(--sl-color-gray-900);--sl-color-neutral-950:var(--sl-color-gray-950);--sl-color-neutral-0:hsl(0, 0%, 100%);--sl-color-neutral-1000:hsl(0, 0%, 0%);--sl-border-radius-small:0.1875rem;--sl-border-radius-medium:0.25rem;--sl-border-radius-large:0.5rem;--sl-border-radius-x-large:1rem;--sl-border-radius-circle:50%;--sl-border-radius-pill:9999px;--sl-shadow-x-small:0 1px 2px hsl(240 3.8% 46.1% / 6%);--sl-shadow-small:0 1px 2px hsl(240 3.8% 46.1% / 12%);--sl-shadow-medium:0 2px 4px hsl(240 3.8% 46.1% / 12%);--sl-shadow-large:0 2px 8px hsl(240 3.8% 46.1% / 12%);--sl-shadow-x-large:0 4px 16px hsl(240 3.8% 46.1% / 12%);--sl-spacing-3x-small:0.125rem;--sl-spacing-2x-small:0.25rem;--sl-spacing-x-small:0.5rem;--sl-spacing-small:0.75rem;--sl-spacing-medium:1rem;--sl-spacing-large:1.25rem;--sl-spacing-x-large:1.75rem;--sl-spacing-2x-large:2.25rem;--sl-spacing-3x-large:3rem;--sl-spacing-4x-large:4.5rem;--sl-transition-x-slow:1000ms;--sl-transition-slow:500ms;--sl-transition-medium:250ms;--sl-transition-fast:150ms;--sl-transition-x-fast:50ms;--sl-font-mono:SFMono-Regular,Consolas,"Liberation Mono",Menlo,monospace;--sl-font-sans:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";--sl-font-serif:Georgia,"Times New Roman",serif;--sl-font-size-2x-small:0.625rem;--sl-font-size-x-small:0.75rem;--sl-font-size-small:0.875rem;--sl-font-size-medium:1rem;--sl-font-size-large:1.25rem;--sl-font-size-x-large:1.5rem;--sl-font-size-2x-large:2.25rem;--sl-font-size-3x-large:3rem;--sl-font-size-4x-large:4.5rem;--sl-font-weight-light:300;--sl-font-weight-normal:400;--sl-font-weight-semibold:500;--sl-font-weight-bold:700;--sl-letter-spacing-denser:-0.03em;--sl-letter-spacing-dense:-0.015em;--sl-letter-spacing-normal:normal;--sl-letter-spacing-loose:0.075em;--sl-letter-spacing-looser:0.15em;--sl-line-height-denser:1;--sl-line-height-dense:1.4;--sl-line-height-normal:1.8;--sl-line-height-loose:2.2;--sl-line-height-looser:2.6;--sl-focus-ring-color:var(--sl-color-primary-600);--sl-focus-ring-style:solid;--sl-focus-ring-width:3px;--sl-focus-ring:var(--sl-focus-ring-style) var(--sl-focus-ring-width) var(--sl-focus-ring-color);--sl-focus-ring-offset:1px;--sl-button-font-size-small:var(--sl-font-size-x-small);--sl-button-font-size-medium:var(--sl-font-size-small);--sl-button-font-size-large:var(--sl-font-size-medium);--sl-input-height-small:1.875rem;--sl-input-height-medium:2.5rem;--sl-input-height-large:3.125rem;--sl-input-background-color:var(--sl-color-neutral-0);--sl-input-background-color-hover:var(--sl-input-background-color);--sl-input-background-color-focus:var(--sl-input-background-color);--sl-input-background-color-disabled:var(--sl-color-neutral-100);--sl-input-border-color:var(--sl-color-neutral-300);--sl-input-border-color-hover:var(--sl-color-neutral-400);--sl-input-border-color-focus:var(--sl-color-primary-500);--sl-input-border-color-disabled:var(--sl-color-neutral-300);--sl-input-border-width:1px;--sl-input-border-radius-small:var(--sl-border-radius-medium);--sl-input-border-radius-medium:var(--sl-border-radius-medium);--sl-input-border-radius-large:var(--sl-border-radius-medium);--sl-input-font-family:var(--sl-font-sans);--sl-input-font-weight:var(--sl-font-weight-normal);--sl-input-font-size-small:var(--sl-font-size-small);--sl-input-font-size-medium:var(--sl-font-size-medium);--sl-input-font-size-large:var(--sl-font-size-large);--sl-input-letter-spacing:var(--sl-letter-spacing-normal);--sl-input-color:var(--sl-color-neutral-700);--sl-input-color-hover:var(--sl-color-neutral-700);--sl-input-color-focus:var(--sl-color-neutral-700);--sl-input-color-disabled:var(--sl-color-neutral-900);--sl-input-icon-color:var(--sl-color-neutral-500);--sl-input-icon-color-hover:var(--sl-color-neutral-600);--sl-input-icon-color-focus:var(--sl-color-neutral-600);--sl-input-placeholder-color:var(--sl-color-neutral-500);--sl-input-placeholder-color-disabled:var(--sl-color-neutral-600);--sl-input-spacing-small:var(--sl-spacing-small);--sl-input-spacing-medium:var(--sl-spacing-medium);--sl-input-spacing-large:var(--sl-spacing-large);--sl-input-filled-background-color:var(--sl-color-neutral-100);--sl-input-filled-background-color-hover:var(--sl-color-neutral-100);--sl-input-filled-background-color-focus:var(--sl-color-neutral-100);--sl-input-filled-background-color-disabled:var(--sl-color-neutral-100);--sl-input-filled-color:var(--sl-color-neutral-800);--sl-input-filled-color-hover:var(--sl-color-neutral-800);--sl-input-filled-color-focus:var(--sl-color-neutral-700);--sl-input-filled-color-disabled:var(--sl-color-neutral-800);--sl-input-focus-ring-color:hsl(198.6 88.7% 48.4% / 40%);--sl-input-focus-ring-offset:0;--sl-input-label-font-size-small:var(--sl-font-size-small);--sl-input-label-font-size-medium:var(--sl-font-size-medium);--sl-input-label-font-size-large:var(--sl-font-size-large);--sl-input-label-color:inherit;--sl-input-help-text-font-size-small:var(--sl-font-size-x-small);--sl-input-help-text-font-size-medium:var(--sl-font-size-small);--sl-input-help-text-font-size-large:var(--sl-font-size-medium);--sl-input-help-text-color:var(--sl-color-neutral-500);--sl-toggle-size:1rem;--sl-overlay-background-color:hsl(240 3.8% 46.1% / 33%);--sl-panel-background-color:var(--sl-color-neutral-0);--sl-panel-border-color:var(--sl-color-neutral-200);--sl-panel-border-width:1px;--sl-tooltip-border-radius:var(--sl-border-radius-medium);--sl-tooltip-background-color:var(--sl-color-neutral-800);--sl-tooltip-color:var(--sl-color-neutral-0);--sl-tooltip-font-family:var(--sl-font-sans);--sl-tooltip-font-weight:var(--sl-font-weight-normal);--sl-tooltip-font-size:var(--sl-font-size-small);--sl-tooltip-line-height:var(--sl-line-height-dense);--sl-tooltip-padding:var(--sl-spacing-2x-small) var(--sl-spacing-x-small);--sl-tooltip-arrow-size:4px;--sl-z-index-drawer:700;--sl-z-index-dialog:800;--sl-z-index-dropdown:900;--sl-z-index-toast:950;--sl-z-index-tooltip:1000}.sl-scroll-lock{overflow:hidden!important}.sl-toast-stack{position:fixed;top:0;right:0;z-index:var(--sl-z-index-toast);width:28rem;max-width:100%;max-height:100%;overflow:auto}.sl-toast-stack sl-alert{--box-shadow:var(--sl-shadow-large);margin:var(--sl-spacing-medium)}`;const St=s``;function Et(e,o){xt((()=>{((e,o)=>{0!==o.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?t?e.shadowRoot.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):o.forEach((t=>{const o=document.createElement("style");o.textContent=t.cssText,e.shadowRoot.appendChild(o)})):window.ShadyCSS.ScopingShim.prepareAdoptedCssText(o.map((t=>t.cssText)),e.localName))})(e,o)}),[o])}window.customElements.define("asset-file",kt((function({url:t="",alt:e=""}){Et(this,[s``]);const[o,r]=$t(P`<p>Downloading file....</p><sl-spinner style="font-size:3rem"></sl-spinner>`),l=t=>{const e=new CustomEvent("media-type",{bubbles:!0,composed:!0,detail:{type:t}});this.dispatchEvent(e)};return _t((async()=>{let o=null;r(P`<sl-spinner style="font-size:3rem"></sl-spinner><p>Loading file....</p>`);try{o=await fetch(t.replace("ipfs://","https://gateway.bakrypt.io/ipfs/"))}catch(t){console.log(t),r(P`<p>Failed to load</p>`)}try{if(o&&!o.ok)r(P`<p>File not found.</p>`);else if(o&&o.ok&&o.body){const s=o.headers.get("Content-Type");s&&l(s),(null==s?void 0:s.includes("image"))?r(P`<img style="display:block;margin-bottom:1rem;object-fit:contain;width:100%" slot="image" src="${t.replace("ipfs://","https://gateway.bakrypt.io/ipfs/")}" alt="${e}">`):(null==s?void 0:s.includes("video"))?r(P`<video style="display:block;margin-bottom:1rem;object-fit:contain;width:100%" src="${t.replace("ipfs://","https://gateway.bakrypt.io/ipfs/")}" alt="${e}" controls></video>`):(null==s?void 0:s.includes("audio"))&&r(P`<audio style="display:block;margin-bottom:1rem;object-fit:contain;width:100%" src="${t.replace("ipfs://","https://gateway.bakrypt.io/ipfs/")}" alt="${e}" controls></audio>`)}}catch(t){console.log(t),r(P`<p>Failed to load</p>`)}}),[t,e]),o}),{observedAttributes:["url","alt"]}));const Tt={blockchain:"ada",name:"",asset_name:"",image:"",media_type:"",description:"",files:[],attrs:{},amount:1};function zt(e,o){xt((()=>{((e,o)=>{0!==o.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?t?e.shadowRoot.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):o.forEach((t=>{const o=document.createElement("style");o.textContent=t.cssText,e.shadowRoot.appendChild(o)})):window.ShadyCSS.ScopingShim.prepareAdoptedCssText(o.map((t=>t.cssText)),e.localName))})(e,o)}),[o])}var Pt,Lt,Ut=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Mt=Symbol(),Nt=new Map,Dt=class{constructor(t,e){if(this._$cssResult$=!0,e!==Mt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=Nt.get(this.cssText);return Ut&&void 0===t&&(Nt.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}},Rt=t=>new Dt("string"==typeof t?t:t+"",Mt),Ht=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,o,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[r+1]),t[0]);return new Dt(o,Mt)},Ot=Ut?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return Rt(e)})(t):t,Bt=window.trustedTypes,It=Bt?Bt.emptyScript:"",Ft=window.reactiveElementPolyfillSupport,jt={toAttribute(t,e){switch(e){case Boolean:t=t?It:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},qt=(t,e)=>e!==t&&(e==e||t==t),Vt={attribute:!0,type:String,converter:jt,reflect:!1,hasChanged:qt},Kt=class extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,o)=>{const r=this._$Eh(o,e);void 0!==r&&(this._$Eu.set(r,o),t.push(r))})),t}static createProperty(t,e=Vt){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,o,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(r){const s=this[t];this[e]=r,this.requestUpdate(t,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Vt}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of e)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(Ot(t))}else void 0!==t&&e.push(Ot(t));return e}static _$Eh(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,o;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(o=t.hostConnected)||void 0===o||o.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return o=e,r=this.constructor.elementStyles,Ut?o.adoptedStyleSheets=r.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):r.forEach((t=>{const e=document.createElement("style"),r=window.litNonce;void 0!==r&&e.setAttribute("nonce",r),e.textContent=t.cssText,o.appendChild(e)})),e;var o,r}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$ES(t,e,o=Vt){var r,s;const l=this.constructor._$Eh(t,o);if(void 0!==l&&!0===o.reflect){const i=(null!==(s=null===(r=o.converter)||void 0===r?void 0:r.toAttribute)&&void 0!==s?s:jt.toAttribute)(e,o.type);this._$Ei=t,null==i?this.removeAttribute(l):this.setAttribute(l,i),this._$Ei=null}}_$AK(t,e){var o,r,s;const l=this.constructor,i=l._$Eu.get(t);if(void 0!==i&&this._$Ei!==i){const t=l.getPropertyOptions(i),a=t.converter,n=null!==(s=null!==(r=null===(o=a)||void 0===o?void 0:o.fromAttribute)&&void 0!==r?r:"function"==typeof a?a:null)&&void 0!==s?s:jt.fromAttribute;this._$Ei=i,this[i]=n(e,t.type),this._$Ei=null}}requestUpdate(t,e,o){let r=!0;void 0!==t&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||qt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===o.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,o))):r=!1),!this.isUpdatePending&&r&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(o)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}};Kt.finalized=!0,Kt.elementProperties=new Map,Kt.elementStyles=[],Kt.shadowRootOptions={mode:"open"},null==Ft||Ft({ReactiveElement:Kt}),(null!==(Pt=globalThis.reactiveElementVersions)&&void 0!==Pt?Pt:globalThis.reactiveElementVersions=[]).push("1.3.2");var Wt=globalThis.trustedTypes,Qt=Wt?Wt.createPolicy("lit-html",{createHTML:t=>t}):void 0,Xt=`lit$${(Math.random()+"").slice(9)}$`,Gt="?"+Xt,Jt=`<${Gt}>`,Zt=document,Yt=(t="")=>Zt.createComment(t),te=t=>null===t||"object"!=typeof t&&"function"!=typeof t,ee=Array.isArray,oe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,re=/-->/g,se=/>/g,le=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,ie=/'/g,ae=/"/g,ne=/^(?:script|style|textarea|title)$/i,ce=(t=>(e,...o)=>({_$litType$:t,strings:e,values:o}))(1),de=Symbol.for("lit-noChange"),ue=Symbol.for("lit-nothing"),he=new WeakMap,pe=Zt.createTreeWalker(Zt,129,null,!1),be=class{constructor({strings:t,_$litType$:e},o){let r;this.parts=[];let s=0,l=0;const i=t.length-1,a=this.parts,[n,c]=((t,e)=>{const o=t.length-1,r=[];let s,l=2===e?"<svg>":"",i=oe;for(let e=0;e<o;e++){const o=t[e];let a,n,c=-1,d=0;for(;d<o.length&&(i.lastIndex=d,n=i.exec(o),null!==n);)d=i.lastIndex,i===oe?"!--"===n[1]?i=re:void 0!==n[1]?i=se:void 0!==n[2]?(ne.test(n[2])&&(s=RegExp("</"+n[2],"g")),i=le):void 0!==n[3]&&(i=le):i===le?">"===n[0]?(i=null!=s?s:oe,c=-1):void 0===n[1]?c=-2:(c=i.lastIndex-n[2].length,a=n[1],i=void 0===n[3]?le:'"'===n[3]?ae:ie):i===ae||i===ie?i=le:i===re||i===se?i=oe:(i=le,s=void 0);const u=i===le&&t[e+1].startsWith("/>")?" ":"";l+=i===oe?o+Jt:c>=0?(r.push(a),o.slice(0,c)+"$lit$"+o.slice(c)+Xt+u):o+Xt+(-2===c?(r.push(void 0),e):u)}const a=l+(t[o]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==Qt?Qt.createHTML(a):a,r]})(t,e);if(this.el=be.createElement(n,o),pe.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(r=pe.nextNode())&&a.length<i;){if(1===r.nodeType){if(r.hasAttributes()){const t=[];for(const e of r.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(Xt)){const o=c[l++];if(t.push(e),void 0!==o){const t=r.getAttribute(o.toLowerCase()+"$lit$").split(Xt),e=/([.?@])?(.*)/.exec(o);a.push({type:1,index:s,name:e[2],strings:t,ctor:"."===e[1]?_e:"?"===e[1]?xe:"@"===e[1]?$e:ye})}else a.push({type:6,index:s})}for(const e of t)r.removeAttribute(e)}if(ne.test(r.tagName)){const t=r.textContent.split(Xt),e=t.length-1;if(e>0){r.textContent=Wt?Wt.emptyScript:"";for(let o=0;o<e;o++)r.append(t[o],Yt()),pe.nextNode(),a.push({type:2,index:++s});r.append(t[e],Yt())}}}else if(8===r.nodeType)if(r.data===Gt)a.push({type:2,index:s});else{let t=-1;for(;-1!==(t=r.data.indexOf(Xt,t+1));)a.push({type:7,index:s}),t+=Xt.length-1}s++}}static createElement(t,e){const o=Zt.createElement("template");return o.innerHTML=t,o}};function me(t,e,o=t,r){var s,l,i,a;if(e===de)return e;let n=void 0!==r?null===(s=o._$Cl)||void 0===s?void 0:s[r]:o._$Cu;const c=te(e)?void 0:e._$litDirective$;return(null==n?void 0:n.constructor)!==c&&(null===(l=null==n?void 0:n._$AO)||void 0===l||l.call(n,!1),void 0===c?n=void 0:(n=new c(t),n._$AT(t,o,r)),void 0!==r?(null!==(i=(a=o)._$Cl)&&void 0!==i?i:a._$Cl=[])[r]=n:o._$Cu=n),void 0!==n&&(e=me(t,n._$AS(t,e.values),n,r)),e}var ve,ge,fe=class{constructor(t,e,o,r){var s;this.type=2,this._$AH=ue,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=r,this._$Cg=null===(s=null==r?void 0:r.isConnected)||void 0===s||s}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=me(this,t,e),te(t)?t===ue||null==t||""===t?(this._$AH!==ue&&this._$AR(),this._$AH=ue):t!==this._$AH&&t!==de&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>{var e;return ee(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==ue&&te(this._$AH)?this._$AA.nextSibling.data=t:this.k(Zt.createTextNode(t)),this._$AH=t}T(t){var e;const{values:o,_$litType$:r}=t,s="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=be.createElement(r.h,this.options)),r);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===s)this._$AH.m(o);else{const t=new class{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:o},parts:r}=this._$AD,s=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:Zt).importNode(o,!0);pe.currentNode=s;let l=pe.nextNode(),i=0,a=0,n=r[0];for(;void 0!==n;){if(i===n.index){let e;2===n.type?e=new fe(l,l.nextSibling,this,t):1===n.type?e=new n.ctor(l,n.name,n.strings,this,t):6===n.type&&(e=new ke(l,this,t)),this.v.push(e),n=r[++a]}i!==(null==n?void 0:n.index)&&(l=pe.nextNode(),i++)}return s}m(t){let e=0;for(const o of this.v)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}(s,this),e=t.p(this.options);t.m(o),this.k(e),this._$AH=t}}_$AC(t){let e=he.get(t.strings);return void 0===e&&he.set(t.strings,e=new be(t)),e}S(t){ee(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,r=0;for(const s of t)r===e.length?e.push(o=new fe(this.M(Yt()),this.M(Yt()),this,this.options)):o=e[r],o._$AI(s),r++;r<e.length&&(this._$AR(o&&o._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}},ye=class{constructor(t,e,o,r,s){this.type=1,this._$AH=ue,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=s,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=ue}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,r){const s=this.strings;let l=!1;if(void 0===s)t=me(this,t,e,0),l=!te(t)||t!==this._$AH&&t!==de,l&&(this._$AH=t);else{const r=t;let i,a;for(t=s[0],i=0;i<s.length-1;i++)a=me(this,r[o+i],e,i),a===de&&(a=this._$AH[i]),l||(l=!te(a)||a!==this._$AH[i]),a===ue?t=ue:t!==ue&&(t+=(null!=a?a:"")+s[i+1]),this._$AH[i]=a}l&&!r&&this.C(t)}C(t){t===ue?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}},_e=class extends ye{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===ue?void 0:t}},we=Wt?Wt.emptyScript:"",xe=class extends ye{constructor(){super(...arguments),this.type=4}C(t){t&&t!==ue?this.element.setAttribute(this.name,we):this.element.removeAttribute(this.name)}},$e=class extends ye{constructor(t,e,o,r,s){super(t,e,o,r,s),this.type=5}_$AI(t,e=this){var o;if((t=null!==(o=me(this,t,e,0))&&void 0!==o?o:ue)===de)return;const r=this._$AH,s=t===ue&&r!==ue||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,l=t!==ue&&(r===ue||s);s&&this.element.removeEventListener(this.name,this,r),l&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==o?o:this.element,t):this._$AH.handleEvent(t)}},ke=class{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){me(this,t)}},Ae=window.litHtmlPolyfillSupport;null==Ae||Ae(be,fe),(null!==(Lt=globalThis.litHtmlVersions)&&void 0!==Lt?Lt:globalThis.litHtmlVersions=[]).push("2.2.4");var Ce=class extends Kt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,o)=>{var r,s;const l=null!==(r=null==o?void 0:o.renderBefore)&&void 0!==r?r:e;let i=l._$litPart$;if(void 0===i){const t=null!==(s=null==o?void 0:o.renderBefore)&&void 0!==s?s:null;l._$litPart$=i=new fe(e.insertBefore(Yt(),t),t,void 0,null!=o?o:{})}return i._$AI(t),i})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return de}};Ce.finalized=!0,Ce._$litElement$=!0,null===(ve=globalThis.litElementHydrateSupport)||void 0===ve||ve.call(globalThis,{LitElement:Ce});var Se=globalThis.litElementPolyfillSupport;null==Se||Se({LitElement:Ce}),(null!==(ge=globalThis.litElementVersions)&&void 0!==ge?ge:globalThis.litElementVersions=[]).push("3.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Ee,Te=Ht`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control_label {
    font-size: var(--sl-input-label-font-size-large);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
  }

  .form-control--has-help-text .form-control__help-text ::slotted(*) {
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }
`,ze=Ht`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,Pe=Ht`
  ${ze}
  ${Te}

  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    outline: var(--sl-focus-ring-style) var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
    outline-offset: var(--sl-input-focus-ring-offset);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    padding-left: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    padding-right: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    padding-left: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    padding-right: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    padding-left: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    padding-right: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  .input--empty .input__clear {
    visibility: hidden;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }
`,Le=new Set,Ue=new MutationObserver(De),Me=new Map,Ne=document.documentElement.lang||navigator.language;function De(){Ne=document.documentElement.lang||navigator.language,[...Le.keys()].map((t=>{"function"==typeof t.requestUpdate&&t.requestUpdate()}))}Ue.observe(document.documentElement,{attributes:!0,attributeFilter:["lang"]});var Re=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){Le.add(this.host)}hostDisconnected(){Le.delete(this.host)}term(t,...e){return function(t,e,...o){const r=t.toLowerCase().slice(0,2),s=t.length>2?t.toLowerCase():"",l=Me.get(s),i=Me.get(r);let a;if(l&&l[e])a=l[e];else if(i&&i[e])a=i[e];else{if(!Ee||!Ee[e])return console.error(`No translation found for: ${e}`),e;a=Ee[e]}return"function"==typeof a?a(...o):a}(this.host.lang||Ne,t,...e)}date(t,e){return function(t,e,o){return e=new Date(e),new Intl.DateTimeFormat(t,o).format(e)}(this.host.lang||Ne,t,e)}number(t,e){return function(t,e,o){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(t,o).format(e)}(this.host.lang||Ne,t,e)}relativeTime(t,e,o){return function(t,e,o,r){return new Intl.RelativeTimeFormat(t,r).format(e,o)}(this.host.lang||Ne,t,e,o)}};!function(...t){t.map((t=>{const e=t.$code.toLowerCase();Me.set(e,t),Ee||(Ee=t)})),De()}({$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",hidePassword:"Hide password",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"});var He=1,Oe=2,Be=3,Ie=4,Fe=t=>(...e)=>({_$litDirective$:t,values:e}),je=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}},qe={},Ve=Fe(class extends je{constructor(t){if(super(t),t.type!==Be&&t.type!==He&&t.type!==Ie)throw Error("The `live` directive is not allowed on child or event bindings");if(!(t=>void 0===t.strings)(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===de||e===ue)return e;const o=t.element,r=t.name;if(t.type===Be){if(e===o[r])return de}else if(t.type===Ie){if(!!e===o.hasAttribute(r))return de}else if(t.type===He&&o.getAttribute(r)===e+"")return de;return((t,e=qe)=>{t._$AH=e})(t),e}}),Ke=Object.defineProperty,We=Object.defineProperties,Qe=Object.getOwnPropertyDescriptor,Xe=Object.getOwnPropertyDescriptors,Ge=Object.getOwnPropertySymbols,Je=Object.prototype.hasOwnProperty,Ze=Object.prototype.propertyIsEnumerable,Ye=(t,e,o)=>e in t?Ke(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,to=(t,e)=>{for(var o in e||(e={}))Je.call(e,o)&&Ye(t,o,e[o]);if(Ge)for(var o of Ge(e))Ze.call(e,o)&&Ye(t,o,e[o]);return t},eo=(t,e)=>We(t,Xe(e)),oo=(t,e,o,r)=>{for(var s,l=r>1?void 0:r?Qe(e,o):e,i=t.length-1;i>=0;i--)(s=t[i])&&(l=(r?s(e,o,l):s(l))||l);return r&&l&&Ke(e,o,l),l},ro=class extends Event{constructor(t){super("formdata"),this.formData=t}},so=class extends FormData{constructor(t){var e=(...t)=>{super(...t)};t?(e(t),this.form=t,t.dispatchEvent(new ro(this))):e()}append(t,e){if(!this.form)return super.append(t,e);let o=this.form.elements[t];if(o||(o=document.createElement("input"),o.type="hidden",o.name=t,this.form.appendChild(o)),this.has(t)){const r=this.getAll(t),s=r.indexOf(o.value);-1!==s&&r.splice(s,1),r.push(e),this.set(t,r)}else super.append(t,e);o.value=e}};function lo(){window.FormData&&!function(){const t=document.createElement("form");let e=!1;return document.body.append(t),t.addEventListener("submit",(t=>{new FormData(t.target),t.preventDefault()})),t.addEventListener("formdata",(()=>e=!0)),t.dispatchEvent(new Event("submit",{cancelable:!0})),t.remove(),e}()&&(window.FormData=so,window.addEventListener("submit",(t=>{t.defaultPrevented||new FormData(t.target)})))}"complete"===document.readyState?lo():window.addEventListener("DOMContentLoaded",(()=>lo()));var io=class{constructor(t,e){(this.host=t).addController(this),this.options=to({form:t=>t.closest("form"),name:t=>t.name,value:t=>t.value,disabled:t=>t.disabled,reportValidity:t=>"function"!=typeof t.reportValidity||t.reportValidity()},e),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this)}hostConnected(){this.form=this.options.form(this.host),this.form&&(this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit))}hostDisconnected(){this.form&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form=void 0)}handleFormData(t){const e=this.options.disabled(this.host),o=this.options.name(this.host),r=this.options.value(this.host);e||"string"!=typeof o||void 0===r||(Array.isArray(r)?r.forEach((e=>{t.formData.append(o,e.toString())})):t.formData.append(o,r.toString()))}handleFormSubmit(t){const e=this.options.disabled(this.host),o=this.options.reportValidity;!this.form||this.form.noValidate||e||o(this.host)||(t.preventDefault(),t.stopImmediatePropagation())}submit(t){if(this.form){const e=document.createElement("button");e.type="submit",e.style.position="absolute",e.style.width="0",e.style.height="0",e.style.clipPath="inset(50%)",e.style.overflow="hidden",e.style.whiteSpace="nowrap",t&&["formaction","formmethod","formnovalidate","formtarget"].forEach((o=>{t.hasAttribute(o)&&e.setAttribute(o,t.getAttribute(o))})),this.form.append(e),e.click(),e.remove()}}},ao=class{constructor(t,...e){this.slotNames=[],(this.host=t).addController(this),this.slotNames=e,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some((t=>{if(t.nodeType===t.TEXT_NODE&&""!==t.textContent.trim())return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if("sl-visually-hidden"===e.tagName.toLowerCase())return!1;if(!e.hasAttribute("slot"))return!0}return!1}))}hasNamedSlot(t){return null!==this.host.querySelector(`:scope > [slot="${t}"]`)}test(t){return"[default]"===t?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(t){const e=t.target;(this.slotNames.includes("[default]")&&!e.name||e.name&&this.slotNames.includes(e.name))&&this.host.requestUpdate()}};function no(t){if(!t)return"";const e=t.assignedNodes({flatten:!0});let o="";return[...e].forEach((t=>{t.nodeType===Node.TEXT_NODE&&(o+=t.textContent)})),o}var co=Fe(class extends je{constructor(t){var e;if(super(t),t.type!==He||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var o,r;if(void 0===this.et){this.et=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(o=this.st)||void 0===o?void 0:o.has(t))&&this.et.add(t);return this.render(e)}const s=t.element.classList;this.et.forEach((t=>{t in e||(s.remove(t),this.et.delete(t))}));for(const t in e){const o=!!e[t];o===this.et.has(t)||(null===(r=this.st)||void 0===r?void 0:r.has(t))||(o?(s.add(t),this.et.add(t)):(s.remove(t),this.et.delete(t)))}return de}});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function uo(t,e){const o=to({waitUntilFirstUpdate:!1},e);return(e,r)=>{const{update:s}=e;if(t in e){const l=t;e.update=function(t){if(t.has(l)){const e=t.get(l),s=this[l];e!==s&&(o.waitUntilFirstUpdate&&!this.hasUpdated||this[r](e,s))}s.call(this,t)}}}}function ho(t,e,o){const r=new CustomEvent(e,to({bubbles:!0,cancelable:!1,composed:!0,detail:{}},o));return t.dispatchEvent(r),r}function po(t,e){return new Promise((o=>{t.addEventListener(e,(function r(s){s.target===t&&(t.removeEventListener(e,r),o())}))}))}var bo=t=>null!=t?t:ue
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,mo=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:o,elements:r}=e;return{kind:o,elements:r,finisher(e){window.customElements.define(t,e)}}})(t,e),vo=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?eo(to({},e),{finisher(o){o.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(o){o.createProperty(e.key,t)}};function go(t){return(e,o)=>void 0!==o?((t,e,o)=>{e.constructor.createProperty(o,t)})(t,e,o):vo(t,e)}function fo(t){return go(eo(to({},t),{state:!0}))}var yo;function _o(t,e){return(({finisher:t,descriptor:e})=>(o,r)=>{var s;if(void 0===r){const r=null!==(s=o.originalKey)&&void 0!==s?s:o.key,l=null!=e?{kind:"method",placement:"prototype",key:r,descriptor:e(o.key)}:eo(to({},o),{key:r});return null!=t&&(l.finisher=function(e){t(e,r)}),l}{const s=o.constructor;void 0!==e&&Object.defineProperty(o,r,e(r)),null==t||t(s,r)}})({descriptor:o=>{const r={get(){var e,o;return null!==(o=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==o?o:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof o?Symbol():"__"+o;r.get=function(){var o,r;return void 0===this[e]&&(this[e]=null!==(r=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(t))&&void 0!==r?r:null),this[e]}}return r}})}null===(yo=window.HTMLSlotElement)||void 0===yo||yo.prototype.assignedElements;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var wo=class extends Ce{constructor(){super(...arguments),this.formSubmitController=new io(this),this.hasSlotController=new ao(this,"help-text","label"),this.localize=new Re(this),this.hasFocus=!1,this.isPasswordVisible=!1,this.type="text",this.size="medium",this.value="",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.togglePassword=!1,this.disabled=!1,this.readonly=!1,this.required=!1,this.invalid=!1}get valueAsDate(){var t,e;return null!=(e=null==(t=this.input)?void 0:t.valueAsDate)?e:null}set valueAsDate(t){this.input.valueAsDate=t,this.value=this.input.value}get valueAsNumber(){var t,e;return null!=(e=null==(t=this.input)?void 0:t.valueAsNumber)?e:parseFloat(this.value)}set valueAsNumber(t){this.input.valueAsNumber=t,this.value=this.input.value}firstUpdated(){this.invalid=!this.input.checkValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,o="none"){this.input.setSelectionRange(t,e,o)}setRangeText(t,e,o,r="preserve"){this.input.setRangeText(t,e,o,r),this.value!==this.input.value&&(this.value=this.input.value,ho(this,"sl-input"),ho(this,"sl-change"))}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.invalid=!this.input.checkValidity()}handleBlur(){this.hasFocus=!1,ho(this,"sl-blur")}handleChange(){this.value=this.input.value,ho(this,"sl-change")}handleClearClick(t){this.value="",ho(this,"sl-clear"),ho(this,"sl-input"),ho(this,"sl-change"),this.input.focus(),t.stopPropagation()}handleDisabledChange(){this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity()}handleFocus(){this.hasFocus=!0,ho(this,"sl-focus")}handleInput(){this.value=this.input.value,ho(this,"sl-input")}handleInvalid(){this.invalid=!0}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;"Enter"!==t.key||e||setTimeout((()=>{t.defaultPrevented||this.formSubmitController.submit()}))}handlePasswordToggle(){this.isPasswordVisible=!this.isPasswordVisible}handleValueChange(){this.invalid=!this.input.checkValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=!!this.label||!!t,r=!!this.helpText||!!e,s=this.clearable&&!this.disabled&&!this.readonly&&this.value.length>0;return ce`
      <div
        part="form-control"
        class=${co({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":o,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${co({input:!0,"input--small":"small"===this.size,"input--medium":"medium"===this.size,"input--large":"large"===this.size,"input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--invalid":this.invalid})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${"password"===this.type&&this.isPasswordVisible?"text":this.type}
              name=${bo(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${bo(this.placeholder)}
              minlength=${bo(this.minlength)}
              maxlength=${bo(this.maxlength)}
              min=${bo(this.min)}
              max=${bo(this.max)}
              step=${bo(this.step)}
              .value=${Ve(this.value)}
              autocapitalize=${bo(this.autocapitalize)}
              autocomplete=${bo(this.autocomplete)}
              autocorrect=${bo(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${bo(this.spellcheck)}
              pattern=${bo(this.pattern)}
              enterkeyhint=${bo(this.enterkeyhint)}
              inputmode=${bo(this.inputmode)}
              aria-describedby="help-text"
              aria-invalid=${this.invalid?"true":"false"}
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${s?ce`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.togglePassword&&!this.disabled?ce`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.isPasswordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.isPasswordVisible?ce`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:ce`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};wo.styles=Pe,oo([_o(".input__control")],wo.prototype,"input",2),oo([fo()],wo.prototype,"hasFocus",2),oo([fo()],wo.prototype,"isPasswordVisible",2),oo([go({reflect:!0})],wo.prototype,"type",2),oo([go({reflect:!0})],wo.prototype,"size",2),oo([go()],wo.prototype,"name",2),oo([go()],wo.prototype,"value",2),oo([go({type:Boolean,reflect:!0})],wo.prototype,"filled",2),oo([go({type:Boolean,reflect:!0})],wo.prototype,"pill",2),oo([go()],wo.prototype,"label",2),oo([go({attribute:"help-text"})],wo.prototype,"helpText",2),oo([go({type:Boolean})],wo.prototype,"clearable",2),oo([go({attribute:"toggle-password",type:Boolean})],wo.prototype,"togglePassword",2),oo([go()],wo.prototype,"placeholder",2),oo([go({type:Boolean,reflect:!0})],wo.prototype,"disabled",2),oo([go({type:Boolean,reflect:!0})],wo.prototype,"readonly",2),oo([go({type:Number})],wo.prototype,"minlength",2),oo([go({type:Number})],wo.prototype,"maxlength",2),oo([go()],wo.prototype,"min",2),oo([go()],wo.prototype,"max",2),oo([go({type:Number})],wo.prototype,"step",2),oo([go()],wo.prototype,"pattern",2),oo([go({type:Boolean,reflect:!0})],wo.prototype,"required",2),oo([go({type:Boolean,reflect:!0})],wo.prototype,"invalid",2),oo([go()],wo.prototype,"autocapitalize",2),oo([go()],wo.prototype,"autocorrect",2),oo([go()],wo.prototype,"autocomplete",2),oo([go({type:Boolean})],wo.prototype,"autofocus",2),oo([go()],wo.prototype,"enterkeyhint",2),oo([go({type:Boolean})],wo.prototype,"spellcheck",2),oo([go()],wo.prototype,"inputmode",2),oo([uo("disabled",{waitUntilFirstUpdate:!0})],wo.prototype,"handleDisabledChange",1),oo([uo("value",{waitUntilFirstUpdate:!0})],wo.prototype,"handleValueChange",1),wo=oo([mo("sl-input")],wo);var xo="";function $o(t){xo=t}var ko=[...document.getElementsByTagName("script")],Ao=ko.find((t=>t.hasAttribute("data-shoelace")));if(Ao)$o(Ao.getAttribute("data-shoelace"));else{const t=ko.find((t=>/shoelace(\.min)?\.js($|\?)/.test(t.src)));let e="";t&&(e=t.getAttribute("src")),$o(e.split("/").slice(0,-1).join("/"))}var Co={"check-lg":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">\n      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>\n    </svg>\n  ',"chevron-down":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',"chevron-left":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>\n    </svg>\n  ',"chevron-right":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',eye:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">\n      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>\n      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>\n    </svg>\n  ',"eye-slash":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">\n      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>\n      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>\n      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>\n    </svg>\n  ',eyedropper:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">\n      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>\n    </svg>\n  ',"grip-vertical":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">\n      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>\n    </svg>\n  ',"person-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">\n      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>\n    </svg>\n  ',"play-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">\n      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>\n    </svg>\n  ',"pause-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">\n      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>\n    </svg>\n  ',"star-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">\n      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>\n    </svg>\n  ',x:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">\n      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',"x-circle-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">\n      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>\n    </svg>\n  '},So=[{name:"default",resolver:t=>`${xo.replace(/\/$/,"")}/assets/icons/${t}.svg`},{name:"system",resolver:t=>t in Co?`data:image/svg+xml,${encodeURIComponent(Co[t])}`:""}],Eo=[];function To(t){return So.find((e=>e.name===t))}var zo=new Map;var Po=new Map;async function Lo(t){if(Po.has(t))return Po.get(t);const e=await function(t,e="cors"){if(zo.has(t))return zo.get(t);const o=fetch(t,{mode:e}).then((async t=>({ok:t.ok,status:t.status,html:await t.text()})));return zo.set(t,o),o}(t),o={ok:e.ok,status:e.status,svg:null};if(e.ok){const t=document.createElement("div");t.innerHTML=e.html;const r=t.firstElementChild;o.svg="svg"===(null==r?void 0:r.tagName.toLowerCase())?r.outerHTML:""}return Po.set(t,o),o}var Uo=Ht`
  ${ze}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    contain: strict;
    box-sizing: content-box !important;
  }

  .icon,
  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,Mo=class extends je{constructor(t){if(super(t),this.it=ue,t.type!==Oe)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===ue||null==t)return this.ft=void 0,this.it=t;if(t===de)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this.ft;this.it=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}};Mo.directiveName="unsafeHTML",Mo.resultType=1;var No=class extends Mo{};No.directiveName="unsafeSVG",No.resultType=2;var Do=Fe(No),Ro=new DOMParser,Ho=class extends Ce{constructor(){super(...arguments),this.svg="",this.label="",this.library="default"}connectedCallback(){var t;super.connectedCallback(),t=this,Eo.push(t)}firstUpdated(){this.setIcon()}disconnectedCallback(){var t;super.disconnectedCallback(),t=this,Eo=Eo.filter((e=>e!==t))}getUrl(){const t=To(this.library);return this.name&&t?t.resolver(this.name):this.src}redraw(){this.setIcon()}async setIcon(){var t;const e=To(this.library),o=this.getUrl();if(o)try{const r=await Lo(o);if(o!==this.getUrl())return;if(r.ok){const o=Ro.parseFromString(r.svg,"text/html").body.querySelector("svg");null!==o?(null==(t=null==e?void 0:e.mutator)||t.call(e,o),this.svg=o.outerHTML,ho(this,"sl-load")):(this.svg="",ho(this,"sl-error"))}else this.svg="",ho(this,"sl-error")}catch(t){ho(this,"sl-error")}else this.svg.length>0&&(this.svg="")}handleChange(){this.setIcon()}render(){const t="string"==typeof this.label&&this.label.length>0;return ce` <div
      part="base"
      class="icon"
      role=${bo(t?"img":void 0)}
      aria-label=${bo(t?this.label:void 0)}
      aria-hidden=${bo(t?void 0:"true")}
    >
      ${Do(this.svg)}
    </div>`}};Ho.styles=Uo,oo([fo()],Ho.prototype,"svg",2),oo([go({reflect:!0})],Ho.prototype,"name",2),oo([go()],Ho.prototype,"src",2),oo([go()],Ho.prototype,"label",2),oo([go({reflect:!0})],Ho.prototype,"library",2),oo([uo("name"),uo("src"),uo("library")],Ho.prototype,"setIcon",1),Ho=oo([mo("sl-icon")],Ho);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Oo=Ht`
  ${ze}
  ${Te}

  :host {
    display: block;
  }

  .textarea {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    outline: var(--sl-focus-ring-style) var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
    outline-offset: var(--sl-input-focus-ring-offset);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
  }
`,Bo=class extends Ce{constructor(){super(...arguments),this.formSubmitController=new io(this),this.hasSlotController=new ao(this,"help-text","label"),this.hasFocus=!1,this.size="medium",this.value="",this.filled=!1,this.label="",this.helpText="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.required=!1,this.invalid=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver((()=>this.setTextareaHeight())),this.updateComplete.then((()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)}))}firstUpdated(){this.invalid=!this.input.checkValidity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(t){return t?("number"==typeof t.top&&(this.input.scrollTop=t.top),void("number"==typeof t.left&&(this.input.scrollLeft=t.left))):{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,e,o="none"){this.input.setSelectionRange(t,e,o)}setRangeText(t,e,o,r="preserve"){this.input.setRangeText(t,e,o,r),this.value!==this.input.value&&(this.value=this.input.value,ho(this,"sl-input")),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight(),ho(this,"sl-input"),ho(this,"sl-change"))}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.invalid=!this.input.checkValidity()}handleBlur(){this.hasFocus=!1,ho(this,"sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),ho(this,"sl-change")}handleDisabledChange(){this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity()}handleFocus(){this.hasFocus=!0,ho(this,"sl-focus")}handleInput(){this.value=this.input.value,this.setTextareaHeight(),ho(this,"sl-input")}handleRowsChange(){this.setTextareaHeight()}handleValueChange(){this.invalid=!this.input.checkValidity()}setTextareaHeight(){"auto"===this.resize?(this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=void 0}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=!!this.label||!!t,r=!!this.helpText||!!e;return ce`
      <div
        part="form-control"
        class=${co({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":o,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${co({textarea:!0,"textarea--small":"small"===this.size,"textarea--medium":"medium"===this.size,"textarea--large":"large"===this.size,"textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--invalid":this.invalid,"textarea--resize-none":"none"===this.resize,"textarea--resize-vertical":"vertical"===this.resize,"textarea--resize-auto":"auto"===this.resize})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              name=${bo(this.name)}
              .value=${Ve(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${bo(this.placeholder)}
              rows=${bo(this.rows)}
              minlength=${bo(this.minlength)}
              maxlength=${bo(this.maxlength)}
              autocapitalize=${bo(this.autocapitalize)}
              autocorrect=${bo(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${bo(this.spellcheck)}
              enterkeyhint=${bo(this.enterkeyhint)}
              inputmode=${bo(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Bo.styles=Oo,oo([_o(".textarea__control")],Bo.prototype,"input",2),oo([fo()],Bo.prototype,"hasFocus",2),oo([go({reflect:!0})],Bo.prototype,"size",2),oo([go()],Bo.prototype,"name",2),oo([go()],Bo.prototype,"value",2),oo([go({type:Boolean,reflect:!0})],Bo.prototype,"filled",2),oo([go()],Bo.prototype,"label",2),oo([go({attribute:"help-text"})],Bo.prototype,"helpText",2),oo([go()],Bo.prototype,"placeholder",2),oo([go({type:Number})],Bo.prototype,"rows",2),oo([go()],Bo.prototype,"resize",2),oo([go({type:Boolean,reflect:!0})],Bo.prototype,"disabled",2),oo([go({type:Boolean,reflect:!0})],Bo.prototype,"readonly",2),oo([go({type:Number})],Bo.prototype,"minlength",2),oo([go({type:Number})],Bo.prototype,"maxlength",2),oo([go({type:Boolean,reflect:!0})],Bo.prototype,"required",2),oo([go({type:Boolean,reflect:!0})],Bo.prototype,"invalid",2),oo([go()],Bo.prototype,"autocapitalize",2),oo([go()],Bo.prototype,"autocorrect",2),oo([go()],Bo.prototype,"autocomplete",2),oo([go({type:Boolean})],Bo.prototype,"autofocus",2),oo([go()],Bo.prototype,"enterkeyhint",2),oo([go({type:Boolean})],Bo.prototype,"spellcheck",2),oo([go()],Bo.prototype,"inputmode",2),oo([uo("disabled",{waitUntilFirstUpdate:!0})],Bo.prototype,"handleDisabledChange",1),oo([uo("rows",{waitUntilFirstUpdate:!0})],Bo.prototype,"handleRowsChange",1),oo([uo("value",{waitUntilFirstUpdate:!0})],Bo.prototype,"handleValueChange",1),Bo=oo([mo("sl-textarea")],Bo);var Io=Ht`
  ${ze}

  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,Fo=class extends Ce{constructor(){super(...arguments),this.vertical=!1}firstUpdated(){this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};Fo.styles=Io,oo([go({type:Boolean,reflect:!0})],Fo.prototype,"vertical",2),oo([uo("vertical")],Fo.prototype,"handleVerticalChange",1),Fo=oo([mo("sl-divider")],Fo);var jo=(()=>{const t=document.createElement("style");let e;try{document.head.appendChild(t),t.sheet.insertRule(":focus-visible { color: inherit }"),e=!0}catch(t){e=!1}finally{t.remove()}return e})(),qo=Rt(jo?":focus-visible":":focus"),Vo=Ht`
  ${ze}

  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    cursor: pointer;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header${qo} {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header${qo} {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) transform ease;
  }

  .details--open .details__summary-icon {
    transform: rotate(90deg);
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    padding: var(--sl-spacing-medium);
  }
`;function Ko(t,e,o){return new Promise((r=>{if((null==o?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const s=t.animate(e,eo(to({},o),{duration:Wo()?0:o.duration}));s.addEventListener("cancel",r,{once:!0}),s.addEventListener("finish",r,{once:!0})}))}function Wo(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Qo(t){return Promise.all(t.getAnimations().map((t=>new Promise((e=>{const o=requestAnimationFrame(e);t.addEventListener("cancel",(()=>o),{once:!0}),t.addEventListener("finish",(()=>o),{once:!0}),t.cancel()})))))}function Xo(t,e){return t.map((t=>eo(to({},t),{height:"auto"===t.height?`${e}px`:t.height})))}var Go=new Map,Jo=new WeakMap;function Zo(t,e){Go.set(t,function(t){return null!=t?t:{keyframes:[],options:{duration:0}}}(e))}function Yo(t,e){const o=Jo.get(t);if(null==o?void 0:o[e])return o[e];const r=Go.get(e);return r||{keyframes:[],options:{duration:0}}}var tr=class extends Ce{constructor(){super(...arguments),this.open=!1,this.disabled=!1}firstUpdated(){this.body.hidden=!this.open,this.body.style.height=this.open?"auto":"0"}async show(){if(!this.open&&!this.disabled)return this.open=!0,po(this,"sl-after-show")}async hide(){if(this.open&&!this.disabled)return this.open=!1,po(this,"sl-after-hide")}handleSummaryClick(){this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(t){"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this.open?this.hide():this.show()),"ArrowUp"!==t.key&&"ArrowLeft"!==t.key||(t.preventDefault(),this.hide()),"ArrowDown"!==t.key&&"ArrowRight"!==t.key||(t.preventDefault(),this.show())}async handleOpenChange(){if(this.open){ho(this,"sl-show"),await Qo(this.body),this.body.hidden=!1;const{keyframes:t,options:e}=Yo(this,"details.show");await Ko(this.body,Xo(t,this.body.scrollHeight),e),this.body.style.height="auto",ho(this,"sl-after-show")}else{ho(this,"sl-hide"),await Qo(this.body);const{keyframes:t,options:e}=Yo(this,"details.hide");await Ko(this.body,Xo(t,this.body.scrollHeight),e),this.body.hidden=!0,this.body.style.height="auto",ho(this,"sl-after-hide")}}render(){return ce`
      <div
        part="base"
        class=${co({details:!0,"details--open":this.open,"details--disabled":this.disabled})}
      >
        <header
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <div part="summary" class="details__summary">
            <slot name="summary">${this.summary}</slot>
          </div>

          <span part="summary-icon" class="details__summary-icon">
            <sl-icon name="chevron-right" library="system"></sl-icon>
          </span>
        </header>

        <div class="details__body">
          <div part="content" id="content" class="details__content" role="region" aria-labelledby="header">
            <slot></slot>
          </div>
        </div>
      </div>
    `}};tr.styles=Vo,oo([_o(".details")],tr.prototype,"details",2),oo([_o(".details__header")],tr.prototype,"header",2),oo([_o(".details__body")],tr.prototype,"body",2),oo([go({type:Boolean,reflect:!0})],tr.prototype,"open",2),oo([go()],tr.prototype,"summary",2),oo([go({type:Boolean,reflect:!0})],tr.prototype,"disabled",2),oo([uo("open",{waitUntilFirstUpdate:!0})],tr.prototype,"handleOpenChange",1),tr=oo([mo("sl-details")],tr),Zo("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}}),Zo("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});var er=Ht`
  ${ze}

  :host {
    display: inline-block;
  }

  .qr-code {
    position: relative;
  }

  canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`,or=Fe(class extends je{constructor(t){var e;if(super(t),t.type!==He||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,o)=>{const r=t[o];return null==r?e:e+`${o=o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`}),"")}update(t,[e]){const{style:o}=t.element;if(void 0===this.ct){this.ct=new Set;for(const t in e)this.ct.add(t);return this.render(e)}this.ct.forEach((t=>{null==e[t]&&(this.ct.delete(t),t.includes("-")?o.removeProperty(t):o[t]="")}));for(const t in e){const r=e[t];null!=r&&(this.ct.add(t),t.includes("-")?o.setProperty(t,r):o[t]=r)}return de}}),rr=null,sr=class{};sr.render=function(t,e){rr(t,e)},self.QrCreator=sr,function(t){function e(e,o,r,s){var l={},i=t(r,o);i.u(e),i.J(),s=s||0;var a=i.h(),n=i.h()+2*s;return l.text=e,l.level=o,l.version=r,l.O=n,l.a=function(t,e){return e-=s,!(0>(t-=s)||t>=a||0>e||e>=a)&&i.a(t,e)},l}function o(t,e,o,r,s,l,i,a,n,c){function d(e,o,r,s,i,a,n){e?(t.lineTo(o+a,r+n),t.arcTo(o,r,s,i,l)):t.lineTo(o,r)}i?t.moveTo(e+l,o):t.moveTo(e,o),d(a,r,o,r,s,-l,0),d(n,r,s,e,s,0,-l),d(c,e,s,e,o,l,0),d(i,e,o,r,o,0,l)}function r(t,e,o,r,s,l,i,a,n,c){function d(e,o,r,s){t.moveTo(e+r,o),t.lineTo(e,o),t.lineTo(e,o+s),t.arcTo(e,o,e+r,o,l)}i&&d(e,o,l,l),a&&d(r,o,-l,l),n&&d(r,s,-l,-l),c&&d(e,s,l,-l)}function s(t,s){t:{var l=s.text,i=s.v,a=s.N,n=s.K,c=s.P;for(a=Math.max(1,a||1),n=Math.min(40,n||40);a<=n;a+=1)try{var d=e(l,i,a,c);break t}catch(t){}d=void 0}if(!d)return null;for(l=t.getContext("2d"),s.background&&(l.fillStyle=s.background,l.fillRect(s.left,s.top,s.size,s.size)),i=d.O,n=s.size/i,l.beginPath(),c=0;c<i;c+=1)for(a=0;a<i;a+=1){var u=l,h=s.left+a*n,p=s.top+c*n,b=c,m=a,v=d.a,g=h+n,f=p+n,y=b-1,_=b+1,w=m-1,x=m+1,$=Math.floor(Math.min(.5,Math.max(0,s.R))*n),k=v(b,m),A=v(y,w),C=v(y,m);y=v(y,x);var S=v(b,x);x=v(_,x),m=v(_,m),_=v(_,w),b=v(b,w),h=Math.round(h),p=Math.round(p),g=Math.round(g),f=Math.round(f),k?o(u,h,p,g,f,$,!C&&!b,!C&&!S,!m&&!S,!m&&!b):r(u,h,p,g,f,$,C&&b&&A,C&&S&&y,m&&S&&x,m&&b&&_)}return function(t,e){var o=e.fill;if("string"==typeof o)t.fillStyle=o;else{var r=o.type,s=o.colorStops;if(o=o.position.map((t=>Math.round(t*e.size))),"linear-gradient"===r)var l=t.createLinearGradient.apply(t,o);else{if("radial-gradient"!==r)throw Error("Unsupported fill");l=t.createRadialGradient.apply(t,o)}s.forEach((([t,e])=>{l.addColorStop(t,e)})),t.fillStyle=l}}(l,s),l.fill(),t}var l={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};rr=function(t,e){var o={};Object.assign(o,l,t),o.N=o.minVersion,o.K=o.maxVersion,o.v=o.ecLevel,o.left=o.left,o.top=o.top,o.size=o.size,o.fill=o.fill,o.background=o.background,o.text=o.text,o.R=o.radius,o.P=o.quiet,e instanceof HTMLCanvasElement?(e.width===o.size&&e.height===o.size||(e.width=o.size,e.height=o.size),e.getContext("2d").clearRect(0,0,e.width,e.height),s(e,o)):((t=document.createElement("canvas")).width=o.size,t.height=o.size,o=s(t,o),e.appendChild(o))}}(function(){function t(s,i){function a(t,e){for(var o=-1;7>=o;o+=1)if(!(-1>=t+o||u<=t+o))for(var r=-1;7>=r;r+=1)-1>=e+r||u<=e+r||(d[t+o][e+r]=0<=o&&6>=o&&(0==r||6==r)||0<=r&&6>=r&&(0==o||6==o)||2<=o&&4>=o&&2<=r&&4>=r)}function n(t,o){for(var i=u=4*s+17,n=Array(i),b=0;b<i;b+=1){n[b]=Array(i);for(var m=0;m<i;m+=1)n[b][m]=null}for(d=n,a(0,0),a(u-7,0),a(0,u-7),i=r.G(s),n=0;n<i.length;n+=1)for(b=0;b<i.length;b+=1){m=i[n];var v=i[b];if(null==d[m][v])for(var g=-2;2>=g;g+=1)for(var f=-2;2>=f;f+=1)d[m+g][v+f]=-2==g||2==g||-2==f||2==f||0==g&&0==f}for(i=8;i<u-8;i+=1)null==d[i][6]&&(d[i][6]=i%2==0);for(i=8;i<u-8;i+=1)null==d[6][i]&&(d[6][i]=i%2==0);for(i=r.w(c<<3|o),n=0;15>n;n+=1)b=!t&&1==(i>>n&1),d[6>n?n:8>n?n+1:u-15+n][8]=b,d[8][8>n?u-n-1:9>n?15-n:14-n]=b;if(d[u-8][8]=!t,7<=s){for(i=r.A(s),n=0;18>n;n+=1)b=!t&&1==(i>>n&1),d[Math.floor(n/3)][n%3+u-8-3]=b;for(n=0;18>n;n+=1)b=!t&&1==(i>>n&1),d[n%3+u-8-3][Math.floor(n/3)]=b}if(null==h){for(t=l.I(s,c),i=function(){var t=[],e=0,o={B:function(){return t},c:function(e){return 1==(t[Math.floor(e/8)]>>>7-e%8&1)},put:function(t,e){for(var r=0;r<e;r+=1)o.m(1==(t>>>e-r-1&1))},f:function(){return e},m:function(o){var r=Math.floor(e/8);t.length<=r&&t.push(0),o&&(t[r]|=128>>>e%8),e+=1}};return o}(),n=0;n<p.length;n+=1)b=p[n],i.put(4,4),i.put(b.b(),r.f(4,s)),b.write(i);for(n=b=0;n<t.length;n+=1)b+=t[n].j;if(i.f()>8*b)throw Error("code length overflow. ("+i.f()+">"+8*b+")");for(i.f()+4<=8*b&&i.put(0,4);i.f()%8!=0;)i.m(!1);for(;!(i.f()>=8*b)&&(i.put(236,8),!(i.f()>=8*b));)i.put(17,8);var y=0;for(b=n=0,m=Array(t.length),v=Array(t.length),g=0;g<t.length;g+=1){var _=t[g].j,w=t[g].o-_;for(n=Math.max(n,_),b=Math.max(b,w),m[g]=Array(_),f=0;f<m[g].length;f+=1)m[g][f]=255&i.B()[f+y];for(y+=_,f=r.C(w),_=e(m[g],f.b()-1).l(f),v[g]=Array(f.b()-1),f=0;f<v[g].length;f+=1)w=f+_.b()-v[g].length,v[g][f]=0<=w?_.c(w):0}for(f=i=0;f<t.length;f+=1)i+=t[f].o;for(i=Array(i),f=y=0;f<n;f+=1)for(g=0;g<t.length;g+=1)f<m[g].length&&(i[y]=m[g][f],y+=1);for(f=0;f<b;f+=1)for(g=0;g<t.length;g+=1)f<v[g].length&&(i[y]=v[g][f],y+=1);h=i}for(t=h,i=-1,n=u-1,b=7,m=0,o=r.F(o),v=u-1;0<v;v-=2)for(6==v&&--v;;){for(g=0;2>g;g+=1)null==d[n][v-g]&&(f=!1,m<t.length&&(f=1==(t[m]>>>b&1)),o(n,v-g)&&(f=!f),d[n][v-g]=f,-1==--b&&(m+=1,b=7));if(0>(n+=i)||u<=n){n-=i,i=-i;break}}}var c=o[i],d=null,u=0,h=null,p=[],b={u:function(e){e=function(e){var o=t.s(e);return{S:function(){return 4},b:function(){return o.length},write:function(t){for(var e=0;e<o.length;e+=1)t.put(o[e],8)}}}(e),p.push(e),h=null},a:function(t,e){if(0>t||u<=t||0>e||u<=e)throw Error(t+","+e);return d[t][e]},h:function(){return u},J:function(){for(var t=0,e=0,o=0;8>o;o+=1){n(!0,o);var s=r.D(b);(0==o||t>s)&&(t=s,e=o)}n(!1,e)}};return b}function e(t,o){if(void 0===t.length)throw Error(t.length+"/"+o);var r=function(){for(var e=0;e<t.length&&0==t[e];)e+=1;for(var r=Array(t.length-e+o),s=0;s<t.length-e;s+=1)r[s]=t[s+e];return r}(),l={c:function(t){return r[t]},b:function(){return r.length},multiply:function(t){for(var o=Array(l.b()+t.b()-1),r=0;r<l.b();r+=1)for(var i=0;i<t.b();i+=1)o[r+i]^=s.i(s.g(l.c(r))+s.g(t.c(i)));return e(o,0)},l:function(t){if(0>l.b()-t.b())return l;for(var o=s.g(l.c(0))-s.g(t.c(0)),r=Array(l.b()),i=0;i<l.b();i+=1)r[i]=l.c(i);for(i=0;i<t.b();i+=1)r[i]^=s.i(s.g(t.c(i))+o);return e(r,0).l(t)}};return l}t.s=function(t){for(var e=[],o=0;o<t.length;o++){var r=t.charCodeAt(o);128>r?e.push(r):2048>r?e.push(192|r>>6,128|63&r):55296>r||57344<=r?e.push(224|r>>12,128|r>>6&63,128|63&r):(o++,r=65536+((1023&r)<<10|1023&t.charCodeAt(o)),e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r))}return e};var o={L:1,M:0,Q:3,H:2},r=function(){function t(t){for(var e=0;0!=t;)e+=1,t>>>=1;return e}var o=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],r={w:function(e){for(var o=e<<10;0<=t(o)-t(1335);)o^=1335<<t(o)-t(1335);return 21522^(e<<10|o)},A:function(e){for(var o=e<<12;0<=t(o)-t(7973);)o^=7973<<t(o)-t(7973);return e<<12|o},G:function(t){return o[t-1]},F:function(t){switch(t){case 0:return function(t,e){return(t+e)%2==0};case 1:return function(t){return t%2==0};case 2:return function(t,e){return e%3==0};case 3:return function(t,e){return(t+e)%3==0};case 4:return function(t,e){return(Math.floor(t/2)+Math.floor(e/3))%2==0};case 5:return function(t,e){return t*e%2+t*e%3==0};case 6:return function(t,e){return(t*e%2+t*e%3)%2==0};case 7:return function(t,e){return(t*e%3+(t+e)%2)%2==0};default:throw Error("bad maskPattern:"+t)}},C:function(t){for(var o=e([1],0),r=0;r<t;r+=1)o=o.multiply(e([1,s.i(r)],0));return o},f:function(t,e){if(4!=t||1>e||40<e)throw Error("mode: "+t+"; type: "+e);return 10>e?8:16},D:function(t){for(var e=t.h(),o=0,r=0;r<e;r+=1)for(var s=0;s<e;s+=1){for(var l=0,i=t.a(r,s),a=-1;1>=a;a+=1)if(!(0>r+a||e<=r+a))for(var n=-1;1>=n;n+=1)0>s+n||e<=s+n||(0!=a||0!=n)&&i==t.a(r+a,s+n)&&(l+=1);5<l&&(o+=3+l-5)}for(r=0;r<e-1;r+=1)for(s=0;s<e-1;s+=1)l=0,t.a(r,s)&&(l+=1),t.a(r+1,s)&&(l+=1),t.a(r,s+1)&&(l+=1),t.a(r+1,s+1)&&(l+=1),(0==l||4==l)&&(o+=3);for(r=0;r<e;r+=1)for(s=0;s<e-6;s+=1)t.a(r,s)&&!t.a(r,s+1)&&t.a(r,s+2)&&t.a(r,s+3)&&t.a(r,s+4)&&!t.a(r,s+5)&&t.a(r,s+6)&&(o+=40);for(s=0;s<e;s+=1)for(r=0;r<e-6;r+=1)t.a(r,s)&&!t.a(r+1,s)&&t.a(r+2,s)&&t.a(r+3,s)&&t.a(r+4,s)&&!t.a(r+5,s)&&t.a(r+6,s)&&(o+=40);for(s=l=0;s<e;s+=1)for(r=0;r<e;r+=1)t.a(r,s)&&(l+=1);return o+Math.abs(100*l/e/e-50)/5*10}};return r}(),s=function(){for(var t=Array(256),e=Array(256),o=0;8>o;o+=1)t[o]=1<<o;for(o=8;256>o;o+=1)t[o]=t[o-4]^t[o-5]^t[o-6]^t[o-8];for(o=0;255>o;o+=1)e[t[o]]=o;return{g:function(t){if(1>t)throw Error("glog("+t+")");return e[t]},i:function(e){for(;0>e;)e+=255;for(;256<=e;)e-=255;return t[e]}}}(),l=function(){var t=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],e={I:function(e,r){var s=function(e,r){switch(r){case o.L:return t[4*(e-1)];case o.M:return t[4*(e-1)+1];case o.Q:return t[4*(e-1)+2];case o.H:return t[4*(e-1)+3]}}(e,r);if(void 0===s)throw Error("bad rs block @ typeNumber:"+e+"/errorCorrectLevel:"+r);e=s.length/3,r=[];for(var l=0;l<e;l+=1)for(var i=s[3*l],a=s[3*l+1],n=s[3*l+2],c=0;c<i;c+=1){var d=n,u={};u.o=a,u.j=d,r.push(u)}return r}};return e}();return t}());var lr=QrCreator,ir=class extends Ce{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="#000",this.background="#fff",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&lr.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:"transparent"===this.background?null:this.background,size:2*this.size},this.canvas)}render(){return ce`
      <div
        class="qr-code"
        part="base"
        style=${or({width:`${this.size}px`,height:`${this.size}px`})}
      >
        <canvas role="img" aria-label=${this.label.length>0?this.label:this.value}></canvas>
      </div>
    `}};ir.styles=er,oo([_o("canvas")],ir.prototype,"canvas",2),oo([go()],ir.prototype,"value",2),oo([go()],ir.prototype,"label",2),oo([go({type:Number})],ir.prototype,"size",2),oo([go()],ir.prototype,"fill",2),oo([go()],ir.prototype,"background",2),oo([go({type:Number})],ir.prototype,"radius",2),oo([go({attribute:"error-correction"})],ir.prototype,"errorCorrection",2),oo([uo("background"),uo("errorCorrection"),uo("fill"),uo("radius"),uo("size"),uo("value")],ir.prototype,"generate",1),ir=oo([mo("sl-qr-code")],ir);var ar=Ht`
  ${ze}

  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--box-shadow);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-left: var(--sl-spacing-large);
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-right: var(--sl-spacing-medium);
  }
`,nr=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),cr=class extends Ce{constructor(){super(...arguments),this.hasSlotController=new ao(this,"icon","suffix"),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}async show(){if(!this.open)return this.open=!0,po(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,po(this,"sl-after-hide")}async toast(){return new Promise((t=>{null===nr.parentElement&&document.body.append(nr),nr.appendChild(this),requestAnimationFrame((()=>{this.clientWidth,this.show()})),this.addEventListener("sl-after-hide",(()=>{nr.removeChild(this),t(),null===nr.querySelector("sl-alert")&&nr.remove()}),{once:!0})}))}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout((()=>this.hide()),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){ho(this,"sl-show"),this.duration<1/0&&this.restartAutoHide(),await Qo(this.base),this.base.hidden=!1;const{keyframes:t,options:e}=Yo(this,"alert.show");await Ko(this.base,t,e),ho(this,"sl-after-show")}else{ho(this,"sl-hide"),clearTimeout(this.autoHideTimeout),await Qo(this.base);const{keyframes:t,options:e}=Yo(this,"alert.hide");await Ko(this.base,t,e),this.base.hidden=!0,ho(this,"sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}render(){return ce`
      <div
        part="base"
        class=${co({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":"primary"===this.variant,"alert--success":"success"===this.variant,"alert--neutral":"neutral"===this.variant,"alert--warning":"warning"===this.variant,"alert--danger":"danger"===this.variant})}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        aria-hidden=${this.open?"false":"true"}
        @mousemove=${this.handleMouseMove}
      >
        <span part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </span>

        <span part="message" class="alert__message">
          <slot></slot>
        </span>

        ${this.closable?ce`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x"
                library="system"
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}
      </div>
    `}};cr.styles=ar,oo([_o('[part="base"]')],cr.prototype,"base",2),oo([go({type:Boolean,reflect:!0})],cr.prototype,"open",2),oo([go({type:Boolean,reflect:!0})],cr.prototype,"closable",2),oo([go({reflect:!0})],cr.prototype,"variant",2),oo([go({type:Number})],cr.prototype,"duration",2),oo([uo("open",{waitUntilFirstUpdate:!0})],cr.prototype,"handleOpenChange",1),oo([uo("duration")],cr.prototype,"handleDurationChange",1),cr=oo([mo("sl-alert")],cr),Zo("alert.show",{keyframes:[{opacity:0,transform:"scale(0.8)"},{opacity:1,transform:"scale(1)"}],options:{duration:250,easing:"ease"}}),Zo("alert.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.8)"}],options:{duration:250,easing:"ease"}});var dr=Ht`
  ${ze}

  :host {
    display: inline-block;
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button${qo} {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,ur=Symbol.for(""),hr=t=>{var e,o;if((null===(e=t)||void 0===e?void 0:e.r)===ur)return null===(o=t)||void 0===o?void 0:o._$litStatic$},pr=(t,...e)=>({_$litStatic$:e.reduce(((e,o,r)=>e+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(o)+t[r+1]),t[0]),r:ur}),br=new Map,mr=(t=>(e,...o)=>{const r=o.length;let s,l;const i=[],a=[];let n,c=0,d=!1;for(;c<r;){for(n=e[c];c<r&&void 0!==(l=o[c],s=hr(l));)n+=s+e[++c],d=!0;a.push(l),i.push(n),c++}if(c===r&&i.push(e[r]),d){const t=i.join("$$lit$$");void 0===(e=br.get(t))&&(i.raw=i,br.set(t,e=i)),o=a}return t(e,...o)})(ce),vr=class extends Ce{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}handleBlur(){this.hasFocus=!1,ho(this,"sl-blur")}handleFocus(){this.hasFocus=!0,ho(this,"sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}render(){const t=!!this.href,e=t?pr`a`:pr`button`;return mr`
      <${e}
        part="base"
        class=${co({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${bo(t?void 0:this.disabled)}
        type=${bo(t?void 0:"button")}
        href=${bo(t?this.href:void 0)}
        target=${bo(t?this.target:void 0)}
        download=${bo(t?this.download:void 0)}
        rel=${bo(t&&this.target?"noreferrer noopener":void 0)}
        role=${bo(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          name=${bo(this.name)}
          library=${bo(this.library)}
          src=${bo(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};vr.styles=dr,oo([fo()],vr.prototype,"hasFocus",2),oo([_o(".icon-button")],vr.prototype,"button",2),oo([go()],vr.prototype,"name",2),oo([go()],vr.prototype,"library",2),oo([go()],vr.prototype,"src",2),oo([go()],vr.prototype,"href",2),oo([go()],vr.prototype,"target",2),oo([go()],vr.prototype,"download",2),oo([go()],vr.prototype,"label",2),oo([go({type:Boolean,reflect:!0})],vr.prototype,"disabled",2),vr=oo([mo("sl-icon-button")],vr);var gr=Ht`
  ${ze}

  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: var(--sl-font-size-x-small);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 3px 6px;
    user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,fr=class extends Ce{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return ce`
      <span
        part="base"
        class=${co({badge:!0,"badge--primary":"primary"===this.variant,"badge--success":"success"===this.variant,"badge--neutral":"neutral"===this.variant,"badge--warning":"warning"===this.variant,"badge--danger":"danger"===this.variant,"badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};fr.styles=gr,oo([go({reflect:!0})],fr.prototype,"variant",2),oo([go({type:Boolean,reflect:!0})],fr.prototype,"pill",2),oo([go({type:Boolean,reflect:!0})],fr.prototype,"pulse",2),fr=oo([mo("sl-badge")],fr);var yr=Ht`
  ${ze}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition: var(--sl-transition-x-fast) background-color, var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border, var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button${qo} {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label ::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text${qo}:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    font-size: var(--sl-button-font-size-small);
    height: var(--sl-input-height-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    font-size: var(--sl-button-font-size-medium);
    height: var(--sl-input-height-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    font-size: var(--sl-button-font-size-large);
    height: var(--sl-input-height-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    display: flex;
    align-items: center;
  }

  .button--caret .button__caret svg {
    width: 1em;
    height: 1em;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(-50%) translateX(50%);
    pointer-events: none;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-left: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-left: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-left: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-left: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-left: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-left: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-right: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-right: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-right: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-right: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-right: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-right: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-left: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(.sl-button-group__button:not(.sl-button-group__button--focus, .sl-button-group__button--first, [variant='default']):not(:hover, :active, :focus))
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`,_r=class extends Ce{constructor(){super(...arguments),this.formSubmitController=new io(this,{form:t=>{if(t.hasAttribute("form")){const e=t.getRootNode(),o=t.getAttribute("form");return e.getElementById(o)}return t.closest("form")}}),this.hasSlotController=new ao(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button"}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}handleBlur(){this.hasFocus=!1,ho(this,"sl-blur")}handleFocus(){this.hasFocus=!0,ho(this,"sl-focus")}handleClick(t){if(this.disabled||this.loading)return t.preventDefault(),void t.stopPropagation();"submit"===this.type&&this.formSubmitController.submit(this)}render(){const t=!!this.href,e=t?pr`a`:pr`button`;return mr`
      <${e}
        part="base"
        class=${co({button:!0,"button--default":"default"===this.variant,"button--primary":"primary"===this.variant,"button--success":"success"===this.variant,"button--neutral":"neutral"===this.variant,"button--warning":"warning"===this.variant,"button--danger":"danger"===this.variant,"button--text":"text"===this.variant,"button--small":"small"===this.size,"button--medium":"medium"===this.size,"button--large":"large"===this.size,"button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${bo(t?void 0:this.disabled)}
        type=${bo(t?void 0:this.type)}
        name=${bo(t?void 0:this.name)}
        value=${bo(t?void 0:this.value)}
        href=${bo(t?this.href:void 0)}
        target=${bo(t?this.target:void 0)}
        download=${bo(t?this.download:void 0)}
        rel=${bo(t&&this.target?"noreferrer noopener":void 0)}
        role=${bo(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <span part="prefix" class="button__prefix">
          <slot name="prefix"></slot>
        </span>
        <span part="label" class="button__label">
          <slot></slot>
        </span>
        <span part="suffix" class="button__suffix">
          <slot name="suffix"></slot>
        </span>
        ${this.caret?mr`
                <span part="caret" class="button__caret">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              `:""}
        ${this.loading?mr`<sl-spinner></sl-spinner>`:""}
      </${e}>
    `}};_r.styles=yr,oo([_o(".button")],_r.prototype,"button",2),oo([fo()],_r.prototype,"hasFocus",2),oo([go({reflect:!0})],_r.prototype,"variant",2),oo([go({reflect:!0})],_r.prototype,"size",2),oo([go({type:Boolean,reflect:!0})],_r.prototype,"caret",2),oo([go({type:Boolean,reflect:!0})],_r.prototype,"disabled",2),oo([go({type:Boolean,reflect:!0})],_r.prototype,"loading",2),oo([go({type:Boolean,reflect:!0})],_r.prototype,"outline",2),oo([go({type:Boolean,reflect:!0})],_r.prototype,"pill",2),oo([go({type:Boolean,reflect:!0})],_r.prototype,"circle",2),oo([go()],_r.prototype,"type",2),oo([go()],_r.prototype,"name",2),oo([go()],_r.prototype,"value",2),oo([go()],_r.prototype,"href",2),oo([go()],_r.prototype,"target",2),oo([go()],_r.prototype,"download",2),oo([go()],_r.prototype,"form",2),oo([go({attribute:"formaction"})],_r.prototype,"formAction",2),oo([go({attribute:"formmethod"})],_r.prototype,"formMethod",2),oo([go({attribute:"formnovalidate",type:Boolean})],_r.prototype,"formNoValidate",2),oo([go({attribute:"formtarget"})],_r.prototype,"formTarget",2),_r=oo([mo("sl-button")],_r);var wr=Ht`
  ${ze}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
    mix-blend-mode: multiply;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`,xr=class extends Ce{render(){return ce`
      <svg part="base" class="spinner" role="status">
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};xr.styles=wr,xr=oo([mo("sl-spinner")],xr),customElements.get("sl-input")||customElements.define("sl-input",wo),customElements.get("sl-textarea")||customElements.define("sl-textarea",Bo),customElements.get("sl-divider")||customElements.define("sl-divider",Fo),customElements.get("sl-details")||customElements.define("sl-details",tr),customElements.get("sl-alert")||customElements.define("sl-alert",cr),customElements.get("sl-badge")||customElements.define("sl-badge",fr),customElements.get("sl-button")||customElements.define("sl-button",_r),customElements.get("sl-qr-code")||customElements.define("sl-qr-code",ir),customElements.define("bakrypt-invoice",kt((function({transaction:t,collection:e}){zt(this,[Ct,s`:host{font-family:arial;font-weight:400}:host input,:host sl-details,:host sl-input,:host sl-textarea{margin-bottom:2rem}:host .form-control__help-text{margin-top:.5rem}`]);const o=(t,e)=>{const o=new CustomEvent("notification",{bubbles:!0,composed:!0,detail:[t,e]});this.dispatchEvent(o)},r=()=>{const e=new CustomEvent("refundTransaction",{bubbles:!0,composed:!0,detail:{tx:t}});this.dispatchEvent(e)};return _t((()=>{}),[t,e]),P`<div style="padding:1rem"><div><small style="float:right"><i>Unique Identifier</i></small><sl-input maxlength="255" label="Policy ID" value="${t?t.policy_id:""}" type="text" readonly="readonly" filled></sl-input><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(305px,1fr));grid-gap:.5rem;align-items:center;margin-bottom:2rem"><sl-details summary="Click here to show a QR Code and scan the deposit address."><div style="text-align:center"><sl-qr-code value="${t?t.deposit_address:"Not found"}" label="Scan this code for the deposit_address!"></sl-qr-code></div></sl-details><sl-alert variant="warning" open><strong>DO NOT TRANSFER FUNDS FROM AN EXCHANGE!</strong><br>We will send all tokens and change to the payor's address; meaning that the payment must be done from a wallet that you can control and its capable of manage native tokens on Cardano like <a target="_blank" rel="nofollow" href="https://namiwallet.io/">Nami</a>, <a target="_blank" rel="nofollow" href="https://flint-wallet.com/">Flint</a>, <a target="_blank" rel="nofollow" href="https://yoroi-wallet.com/#/">Yoroi</a>, <a target="_blank" rel="nofollow" href="https://daedaluswallet.io/">Daedalus</a> or <a target="_blank" rel="nofollow" href="https://ccvault.io/app/mainnet/welcome">Eternl</a></sl-alert></div><h4 style="color:var(--sl-color-warning-600)">Payment Type: ${t?t.type:null}</h4>${t&&"confirmed"!==t.status?P`<sl-input maxlength="255" type="number" label="Processing Cost" value="${t?t.cost:""}" readonly="readonly" filled></sl-input>`:P`<sl-input maxlength="255" type="number" label="Cost" value="${t?t.cost:""}" readonly="readonly" filled></sl-input>`} ${t&&"confirmed"!==t.status?P`<small style="float:right">Click to copy</small><sl-input maxlength="255" label="Deposit Address" value="${t?t.deposit_address:""}" type="password" readonly="readonly" filled toggle-password @click="${t=>{if(t.currentTarget&&t.currentTarget.value.length>0){const e=t.currentTarget.value;navigator.clipboard.writeText(e),o("Copy to clipboard!","success")}else if(t.path&&t.path.length>0){const e=t.path[0].value;navigator.clipboard.writeText(e),o("Copy to clipboard!","success")}return!1}}"></sl-input>`:null}<sl-input maxlength="255" label="Transaction UUID" value="${t?t.uuid:""}" type="text" readonly="readonly" filled></sl-input><sl-input maxlength="255" label="Created on" value="${t?new Date(t.created_on).toUTCString():""}" type="text" readonly="readonly" filled></sl-input><sl-input maxlength="255" label="Expires on" value="${t?new Date(t.expires_on).toUTCString():""}" type="text" readonly="readonly" filled></sl-input><sl-input maxlength="255" label="Conv. Fees" value="${t?t.convenience_fee:""}" type="text" readonly="readonly" filled></sl-input><sl-alert variant="warning" open>Remember, to complete your transaction, your payment must be received before the expiration time shown above. Late payments can be refunded. Minted assets are non-refundable and non-transferable. All times shown are UTC (Coordinated Universal Time).</sl-alert><sl-divider></sl-divider><div><sl-textarea style="margin-bottom:1rem" label="The status refreshes every 10 seconds." value="${t?t.status_description:""}" readonly="readonly" filled></sl-textarea><sl-badge style="margin-bottom:2rem;display:grid" .pulse="${!0}" variant="${t&&t.status?{error:"danger",rejected:"danger",canceled:"danger",burning:"warning",royalties:"warning",refund:"warning",confirmed:"success","stand-by":"success",waiting:"primary",preauth:"primary"}[t.status]:"neutral"}">${t?t.status:""}</sl-badge><p>Please do not refresh the page, otherwise this session will be restarted.</p><sl-divider></sl-divider><h4>Minting Summary</h4><p><small><i>You must send the minimum amount of ADA shown above. Any change will be returned automatically to the payor's wallet.</i></small><br><br><small><i>**Tokens are returned to the payor's wallet.</i></small></p><table style="text-align:left;width:100%"><thead><tr><th>Item</th><th>Qty</th><th>Price</th><th>Total</th></tr></thead><tbody><tr><td><p>** Bond per Asset.<br></p></td><td>${e?e.length:null}</td><td>1.95</td><td>${e?(1.95*e.length).toFixed(2):null}</td></tr><tr><td><p>** Surety Bond.</p></td><td>1</td><td>${t?t.surety_bond:""}</td><td>${t?t.surety_bond:""}</td></tr>${t&&t.has_royalties?P`<tr><td><p>Royalties Bond.**<br></p></td><td>1</td><td>${t?t.royalties_estimated_cost:""}</td><td>${t?t.royalties_estimated_cost:""}</td></tr><tr><td><p><strong>Royalties Blockchain Fee</strong></p></td><td>1</td><td>${t?t.blockchain_fee:""}</td><td>${t?t.blockchain_fee:""}</td></tr>`:null}<tr><td><p><strong>Convenience Fee</strong></p></td><td>${e?e.length:null}</td><td>${t?t.convenience_fee:""}</td><td>${t?t.convenience_fee:""}</td></tr><tr><td><p><strong>Blockchain Fee</strong></p></td><td>2</td><td>${t?t.blockchain_fee:""}</td><td>${t?2*Number(t.blockchain_fee):""}</td></tr></tbody></table></div></div><sl-divider></sl-divider><div>${t&&t.status&&["rejected","error"].includes(t.status)?P`<sl-button variant="primary" style="margin-right:1rem" @click="${()=>{const e=new CustomEvent("retryTransaction",{bubbles:!0,composed:!0,detail:{tx:t}});this.dispatchEvent(e)}}">Retry</sl-button>`:null} ${t&&t.status&&"confirmed"!==t.status?P`<sl-button variant="warning" outline @click="${()=>{confirm("Would you like to refund the transaction?")&&r()}}">Submit Refund</sl-button>`:null}</div></div>`}),{observedAttributes:["transaction","collection","transactionVariant"]}));var $r=Ht`
  ${ze}

  :host {
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);

    display: block;
  }

  .tab-group {
    display: flex;
    border: solid 1px transparent;
    border-radius: 0;
  }

  .tab-group .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group .tab-group__indicator {
    position: absolute;
    left: 0;
    transition: var(--sl-transition-fast) transform ease, var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid 2px var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: -2px;
    border-bottom: solid 2px var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid 2px var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * 2px);
    border-top: solid 2px var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-right: solid 2px var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * 2px);
    border-right: solid 2px var(--indicator-color);
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid 2px var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * 2px);
    border-left: solid 2px var(--indicator-color);
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`;var kr=new Set;function Ar(t){kr.add(t),document.body.classList.add("sl-scroll-lock")}function Cr(t){kr.delete(t),0===kr.size&&document.body.classList.remove("sl-scroll-lock")}function Sr(t,e,o,r="smooth"){const s=function(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}(t,e),l=s.top+e.scrollTop,i=s.left+e.scrollLeft,a=e.scrollLeft,n=e.scrollLeft+e.offsetWidth,c=e.scrollTop,d=e.scrollTop+e.offsetHeight;"horizontal"!==o&&"both"!==o||(i<a?e.scrollTo({left:i,behavior:r}):i+t.clientWidth>n&&e.scrollTo({left:i-e.offsetWidth+t.clientWidth,behavior:r})),"vertical"!==o&&"both"!==o||(l<c?e.scrollTo({top:l,behavior:r}):l+t.clientHeight>d&&e.scrollTo({top:l-e.offsetHeight+t.clientHeight,behavior:r}))}var Er=class extends Ce{constructor(){super(...arguments),this.localize=new Re(this),this.tabs=[],this.panels=[],this.hasScrollControls=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver((()=>{this.preventIndicatorTransition(),this.repositionIndicator(),this.updateScrollControls()})),this.mutationObserver=new MutationObserver((t=>{t.some((t=>!["aria-labelledby","aria-controls"].includes(t.attributeName)))&&setTimeout((()=>this.setAriaLabels())),t.some((t=>"disabled"===t.attributeName))&&this.syncTabsAndPanels()})),this.updateComplete.then((()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav);new IntersectionObserver(((t,e)=>{var o;t[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab(null!=(o=this.getActiveTab())?o:this.tabs[0],{emitEvents:!1}),e.unobserve(t[0].target))})).observe(this.tabGroup)}))}disconnectedCallback(){this.mutationObserver.disconnect(),this.resizeObserver.unobserve(this.nav)}show(t){const e=this.tabs.find((e=>e.panel===t));e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}getAllTabs(t=!1){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter((e=>t?"sl-tab"===e.tagName.toLowerCase():"sl-tab"===e.tagName.toLowerCase()&&!e.disabled))}getAllPanels(){return[...this.body.querySelector("slot").assignedElements()].filter((t=>"sl-tab-panel"===t.tagName.toLowerCase()))}getActiveTab(){return this.tabs.find((t=>t.active))}handleClick(t){const e=t.target.closest("sl-tab");(null==e?void 0:e.closest("sl-tab-group"))===this&&null!==e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}handleKeyDown(t){const e=t.target.closest("sl-tab");if((null==e?void 0:e.closest("sl-tab-group"))===this&&(["Enter"," "].includes(t.key)&&null!==e&&(this.setActiveTab(e,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){const e=document.activeElement;if("sl-tab"===(null==e?void 0:e.tagName.toLowerCase())){let o=this.tabs.indexOf(e);"Home"===t.key?o=0:"End"===t.key?o=this.tabs.length-1:["top","bottom"].includes(this.placement)&&"ArrowLeft"===t.key||["start","end"].includes(this.placement)&&"ArrowUp"===t.key?o--:(["top","bottom"].includes(this.placement)&&"ArrowRight"===t.key||["start","end"].includes(this.placement)&&"ArrowDown"===t.key)&&o++,o<0&&(o=this.tabs.length-1),o>this.tabs.length-1&&(o=0),this.tabs[o].focus({preventScroll:!0}),"auto"===this.activation&&this.setActiveTab(this.tabs[o],{scrollBehavior:"smooth"}),["top","bottom"].includes(this.placement)&&Sr(this.tabs[o],this.nav,"horizontal"),t.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth}setActiveTab(t,e){if(e=to({emitEvents:!0,scrollBehavior:"auto"},e),t!==this.activeTab&&!t.disabled){const o=this.activeTab;this.activeTab=t,this.tabs.map((t=>t.active=t===this.activeTab)),this.panels.map((t=>{var e;return t.active=t.name===(null==(e=this.activeTab)?void 0:e.panel)})),this.syncIndicator(),["top","bottom"].includes(this.placement)&&Sr(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(o&&ho(this,"sl-tab-hide",{detail:{name:o.panel}}),ho(this,"sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach((t=>{const e=this.panels.find((e=>e.name===t.panel));e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))}))}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}repositionIndicator(){const t=this.getActiveTab();if(!t)return;const e=t.clientWidth,o=t.clientHeight,r=this.getAllTabs(!0),s=r.slice(0,r.indexOf(t)).reduce(((t,e)=>({left:t.left+e.clientWidth,top:t.top+e.clientHeight})),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${e}px`,this.indicator.style.height="auto",this.indicator.style.transform=`translateX(${s.left}px)`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${o}px`,this.indicator.style.transform=`translateY(${s.top}px)`}}preventIndicatorTransition(){const t=this.indicator.style.transition;this.indicator.style.transition="none",requestAnimationFrame((()=>{this.indicator.style.transition=t}))}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.panels=this.getAllPanels(),this.syncIndicator()}render(){return ce`
      <div
        part="base"
        class=${co({"tab-group":!0,"tab-group--top":"top"===this.placement,"tab-group--bottom":"bottom"===this.placement,"tab-group--start":"start"===this.placement,"tab-group--end":"end"===this.placement,"tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?ce`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--start"
                  name="chevron-left"
                  library="system"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav">
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls?ce`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--end"
                  name="chevron-right"
                  library="system"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <div part="body" class="tab-group__body">
          <slot @slotchange=${this.syncTabsAndPanels}></slot>
        </div>
      </div>
    `}};Er.styles=$r,oo([_o(".tab-group")],Er.prototype,"tabGroup",2),oo([_o(".tab-group__body")],Er.prototype,"body",2),oo([_o(".tab-group__nav")],Er.prototype,"nav",2),oo([_o(".tab-group__indicator")],Er.prototype,"indicator",2),oo([fo()],Er.prototype,"hasScrollControls",2),oo([go()],Er.prototype,"placement",2),oo([go()],Er.prototype,"activation",2),oo([go({attribute:"no-scroll-controls",type:Boolean})],Er.prototype,"noScrollControls",2),oo([go()],Er.prototype,"lang",2),oo([uo("noScrollControls",{waitUntilFirstUpdate:!0})],Er.prototype,"updateScrollControls",1),oo([uo("placement",{waitUntilFirstUpdate:!0})],Er.prototype,"syncIndicator",1),Er=oo([mo("sl-tab-group")],Er);var Tr=0;function zr(){return++Tr}var Pr=Ht`
  ${ze}

  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    cursor: pointer;
    transition: var(--transition-speed) box-shadow, var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus {
    outline: none;
  }

  .tab${qo}:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-right: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-large);
    margin-left: var(--sl-spacing-2x-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }
`,Lr=class extends Ce{constructor(){super(...arguments),this.localize=new Re(this),this.attrId=zr(),this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1}focus(t){this.tab.focus(t)}blur(){this.tab.blur()}handleCloseClick(){ho(this,"sl-close")}render(){return this.id=this.id.length>0?this.id:this.componentId,ce`
      <div
        part="base"
        class=${co({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
        role="tab"
        aria-disabled=${this.disabled?"true":"false"}
        aria-selected=${this.active?"true":"false"}
        tabindex=${this.disabled||!this.active?"-1":"0"}
      >
        <slot></slot>
        ${this.closable?ce`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};Lr.styles=Pr,oo([_o(".tab")],Lr.prototype,"tab",2),oo([go({reflect:!0})],Lr.prototype,"panel",2),oo([go({type:Boolean,reflect:!0})],Lr.prototype,"active",2),oo([go({type:Boolean})],Lr.prototype,"closable",2),oo([go({type:Boolean,reflect:!0})],Lr.prototype,"disabled",2),oo([go()],Lr.prototype,"lang",2),Lr=oo([mo("sl-tab")],Lr);var Ur=Ht`
  ${ze}

  :host {
    --padding: 0;

    display: block;
  }

  .tab-panel {
    border: solid 1px transparent;
    padding: var(--padding);
  }
`,Mr=class extends Ce{constructor(){super(...arguments),this.attrId=zr(),this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId}render(){return this.style.display=this.active?"block":"none",ce`
      <div part="base" class="tab-panel" role="tabpanel" aria-hidden=${this.active?"false":"true"}>
        <slot></slot>
      </div>
    `}};Mr.styles=Ur,oo([go({reflect:!0})],Mr.prototype,"name",2),oo([go({type:Boolean,reflect:!0})],Mr.prototype,"active",2),Mr=oo([mo("sl-tab-panel")],Mr);var Nr=Ht`
  ${ze}

  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image ::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card__body {
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,Dr=class extends Ce{constructor(){super(...arguments),this.hasSlotController=new ao(this,"footer","header","image")}render(){return ce`
      <div
        part="base"
        class=${co({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <div part="image" class="card__image">
          <slot name="image"></slot>
        </div>

        <div part="header" class="card__header">
          <slot name="header"></slot>
        </div>

        <div part="body" class="card__body">
          <slot></slot>
        </div>

        <div part="footer" class="card__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `}};function Rr(t){const e=t.tagName.toLowerCase();return"-1"!==t.getAttribute("tabindex")&&(!t.hasAttribute("disabled")&&((!t.hasAttribute("aria-disabled")||"false"===t.getAttribute("aria-disabled"))&&(!("input"===e&&"radio"===t.getAttribute("type")&&!t.hasAttribute("checked"))&&(null!==t.offsetParent&&("hidden"!==window.getComputedStyle(t).visibility&&(!("audio"!==e&&"video"!==e||!t.hasAttribute("controls"))||(!!t.hasAttribute("tabindex")||(!(!t.hasAttribute("contenteditable")||"false"===t.getAttribute("contenteditable"))||["button","input","select","textarea","a","audio","video","summary"].includes(e)))))))))}Dr.styles=Nr,Dr=oo([mo("sl-card")],Dr);var Hr=[],Or=Ht`
  ${ze}

  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
    transform: none;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__close {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-x-large);
    padding: 0 var(--header-spacing);
  }

  .dialog__body {
    flex: 1 1 auto;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-left: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }
`,Br=class extends Ce{constructor(){super(...arguments),this.hasSlotController=new ao(this,"footer"),this.localize=new Re(this),this.open=!1,this.label="",this.noHeader=!1}connectedCallback(){super.connectedCallback(),this.modal=new class{constructor(t){this.tabDirection="forward",this.element=t,this.handleFocusIn=this.handleFocusIn.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleKeyUp=this.handleKeyUp.bind(this)}activate(){Hr.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Hr=Hr.filter((t=>t!==this.element)),document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Hr[Hr.length-1]===this.element}checkFocus(){if(this.isActive()&&!this.element.matches(":focus-within")){const{start:t,end:e}=function(t){var e,o;const r=[];return function t(e){e instanceof HTMLElement&&(r.push(e),null!==e.shadowRoot&&"open"===e.shadowRoot.mode&&t(e.shadowRoot)),[...e.querySelectorAll("*")].forEach((e=>t(e)))}(t),{start:null!=(e=r.find((t=>Rr(t))))?e:null,end:null!=(o=r.reverse().find((t=>Rr(t))))?o:null}}(this.element),o="forward"===this.tabDirection?t:e;"function"==typeof(null==o?void 0:o.focus)&&o.focus({preventScroll:!0})}}handleFocusIn(){this.checkFocus()}handleKeyDown(t){"Tab"===t.key&&t.shiftKey&&(this.tabDirection="backward"),requestAnimationFrame((()=>this.checkFocus()))}handleKeyUp(){this.tabDirection="forward"}}(this)}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.modal.activate(),Ar(this))}disconnectedCallback(){super.disconnectedCallback(),Cr(this)}async show(){if(!this.open)return this.open=!0,po(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,po(this,"sl-after-hide")}requestClose(t){if(ho(this,"sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const t=Yo(this,"dialog.denyClose");Ko(this.panel,t.keyframes,t.options)}else this.hide()}handleKeyDown(t){"Escape"===t.key&&(t.stopPropagation(),this.requestClose("keyboard"))}async handleOpenChange(){if(this.open){ho(this,"sl-show"),this.originalTrigger=document.activeElement,this.modal.activate(),Ar(this);const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([Qo(this.dialog),Qo(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame((()=>{ho(this,"sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")}));const e=Yo(this,"dialog.show"),o=Yo(this,"dialog.overlay.show");await Promise.all([Ko(this.panel,e.keyframes,e.options),Ko(this.overlay,o.keyframes,o.options)]),ho(this,"sl-after-show")}else{ho(this,"sl-hide"),this.modal.deactivate(),await Promise.all([Qo(this.dialog),Qo(this.overlay)]);const t=Yo(this,"dialog.hide"),e=Yo(this,"dialog.overlay.hide");await Promise.all([Ko(this.panel,t.keyframes,t.options),Ko(this.overlay,e.keyframes,e.options)]),this.dialog.hidden=!0,Cr(this);const o=this.originalTrigger;"function"==typeof(null==o?void 0:o.focus)&&setTimeout((()=>o.focus())),ho(this,"sl-after-hide")}}render(){return ce`
      <div
        part="base"
        class=${co({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
        @keydown=${this.handleKeyDown}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${bo(this.noHeader?this.label:void 0)}
          aria-labelledby=${bo(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":ce`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <sl-icon-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    class="dialog__close"
                    name="x"
                    label=${this.localize.term("close")}
                    library="system"
                    @click="${()=>this.requestClose("close-button")}"
                  ></sl-icon-button>
                </header>
              `}

          <div part="body" class="dialog__body">
            <slot></slot>
          </div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};Br.styles=Or,oo([_o(".dialog")],Br.prototype,"dialog",2),oo([_o(".dialog__panel")],Br.prototype,"panel",2),oo([_o(".dialog__overlay")],Br.prototype,"overlay",2),oo([go({type:Boolean,reflect:!0})],Br.prototype,"open",2),oo([go({reflect:!0})],Br.prototype,"label",2),oo([go({attribute:"no-header",type:Boolean,reflect:!0})],Br.prototype,"noHeader",2),oo([uo("open",{waitUntilFirstUpdate:!0})],Br.prototype,"handleOpenChange",1),Br=oo([mo("sl-dialog")],Br),Zo("dialog.show",{keyframes:[{opacity:0,transform:"scale(0.8)"},{opacity:1,transform:"scale(1)"}],options:{duration:250,easing:"ease"}}),Zo("dialog.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.8)"}],options:{duration:250,easing:"ease"}}),Zo("dialog.denyClose",{keyframes:[{transform:"scale(1)"},{transform:"scale(1.02)"},{transform:"scale(1)"}],options:{duration:250}}),Zo("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),Zo("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var Ir=Ht`
  ${ze}

  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`,Fr=class extends Ce{constructor(){super(...arguments),this.effect="none"}render(){return ce`
      <div
        part="base"
        class=${co({skeleton:!0,"skeleton--pulse":"pulse"===this.effect,"skeleton--sheen":"sheen"===this.effect})}
        aria-busy="true"
        aria-live="polite"
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};Fr.styles=Ir,oo([go()],Fr.prototype,"effect",2),Fr=oo([mo("sl-skeleton")],Fr);var jr=Ht`
  ${ze}

  :host {
    display: block;
  }

  .menu {
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    background: var(--sl-panel-background-color);
    padding: var(--sl-spacing-x-small) 0;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,qr=class extends Ce{constructor(){super(...arguments),this.typeToSelectString="",this.allItems=[],this.nonDisabledItems=[]}firstUpdated(){this.setAttribute("role","menu")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter((t=>"menuitem"===t.getAttribute("role")))}getCurrentItem(){return this.nonDisabledItems.find((t=>"0"===t.getAttribute("tabindex")))}setCurrentItem(t){const e=t.disabled?this.nonDisabledItems[0]:t;this.nonDisabledItems.forEach((t=>{t.setAttribute("tabindex",t===e?"0":"-1")}))}typeToSelect(t){var e;clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout((()=>this.typeToSelectString=""),1e3),"Backspace"===t.key?t.metaKey||t.ctrlKey?this.typeToSelectString="":this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase(),jo||this.nonDisabledItems.forEach((t=>t.classList.remove("sl-focus-invisible")));for(const t of this.nonDisabledItems){if(no(null==(e=t.shadowRoot)?void 0:e.querySelector("slot:not([name])")).toLowerCase().trim().startsWith(this.typeToSelectString)){this.setCurrentItem(t),t.focus();break}}}handleClick(t){const e=t.target.closest("sl-menu-item");!1===(null==e?void 0:e.disabled)&&ho(this,"sl-select",{detail:{item:e}})}handleKeyUp(){jo||this.allItems.forEach((t=>{t.classList.remove("sl-focus-invisible")}))}handleKeyDown(t){if("Enter"===t.key){const e=this.getCurrentItem();t.preventDefault(),null==e||e.click()}if(" "===t.key&&t.preventDefault(),["ArrowDown","ArrowUp","Home","End"].includes(t.key)){const e=this.getCurrentItem();let o=e?this.nonDisabledItems.indexOf(e):0;if(this.nonDisabledItems.length>0)return t.preventDefault(),"ArrowDown"===t.key?o++:"ArrowUp"===t.key?o--:"Home"===t.key?o=0:"End"===t.key&&(o=this.nonDisabledItems.length-1),o<0&&(o=this.nonDisabledItems.length-1),o>this.nonDisabledItems.length-1&&(o=0),this.setCurrentItem(this.nonDisabledItems[o]),void this.nonDisabledItems[o].focus()}this.typeToSelect(t)}handleMouseDown(t){const e=t.target;"menuitem"===e.getAttribute("role")&&(this.setCurrentItem(e),jo||e.classList.add("sl-focus-invisible"))}handleSlotChange(){this.allItems=this.getAllItems(),this.nonDisabledItems=this.allItems.filter((t=>!t.disabled)),this.nonDisabledItems.length>0&&this.setCurrentItem(this.nonDisabledItems[0])}render(){return ce`
      <div
        part="base"
        class="menu"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @keyup=${this.handleKeyUp}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};qr.styles=jr,oo([_o(".menu")],qr.prototype,"menu",2),oo([_o("slot")],qr.prototype,"defaultSlot",2),qr=oo([mo("sl-menu")],qr);var Vr=Ht`
  ${ze}

  :host {
    display: block;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    text-align: left;
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    color: var(--sl-color-neutral-400);
    cursor: not-allowed;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix ::slotted(*) {
    margin-right: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix ::slotted(*) {
    margin-left: var(--sl-spacing-x-small);
  }

  :host(:focus) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'])) .menu-item,
  :host(${qo}:not(.sl-focus-invisible):not([aria-disabled='true'])) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }
`,Kr=class extends Ce{constructor(){super(...arguments),this.checked=!1,this.value="",this.disabled=!1}firstUpdated(){this.setAttribute("role","menuitem")}getTextLabel(){return no(this.defaultSlot)}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleDefaultSlotChange(){const t=this.getTextLabel();void 0!==this.cachedTextLabel?t!==this.cachedTextLabel&&(this.cachedTextLabel=t,ho(this,"sl-label-change")):this.cachedTextLabel=t}render(){return ce`
      <div
        part="base"
        class=${co({"menu-item":!0,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--has-submenu":!1})}
      >
        <span class="menu-item__check">
          <sl-icon name="check-lg" library="system" aria-hidden="true"></sl-icon>
        </span>

        <span part="prefix" class="menu-item__prefix">
          <slot name="prefix"></slot>
        </span>

        <span part="label" class="menu-item__label">
          <slot @slotchange=${this.handleDefaultSlotChange}></slot>
        </span>

        <span part="suffix" class="menu-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span class="menu-item__chevron">
          <sl-icon name="chevron-right" library="system" aria-hidden="true"></sl-icon>
        </span>
      </div>
    `}};Kr.styles=Vr,oo([_o("slot:not([name])")],Kr.prototype,"defaultSlot",2),oo([_o(".menu-item")],Kr.prototype,"menuItem",2),oo([go({type:Boolean,reflect:!0})],Kr.prototype,"checked",2),oo([go()],Kr.prototype,"value",2),oo([go({type:Boolean,reflect:!0})],Kr.prototype,"disabled",2),oo([uo("checked")],Kr.prototype,"handleCheckedChange",1),oo([uo("disabled")],Kr.prototype,"handleDisabledChange",1),Kr=oo([mo("sl-menu-item")],Kr);var Wr=Ht`
  ${ze}

  :host {
    --height: 1rem;
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);
    --label-color: var(--sl-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset var(--sl-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition: 400ms width, 400ms background-color;
    user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }
`,Qr=class extends Ce{constructor(){super(...arguments),this.localize=new Re(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return ce`
      <div
        part="base"
        class=${co({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate})}
        role="progressbar"
        title=${bo(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${or({width:`${this.value}%`})}>
          ${this.indeterminate?"":ce`
                <span part="label" class="progress-bar__label">
                  <slot></slot>
                </span>
              `}
        </div>
      </div>
    `}};Qr.styles=Wr,oo([go({type:Number,reflect:!0})],Qr.prototype,"value",2),oo([go({type:Boolean,reflect:!0})],Qr.prototype,"indeterminate",2),oo([go()],Qr.prototype,"label",2),oo([go()],Qr.prototype,"lang",2),Qr=oo([mo("sl-progress-bar")],Qr);var Xr=Ht`
  ${ze}

  :host {
    display: block;
  }

  .responsive-media {
    position: relative;
  }

  .responsive-media ::slotted(*) {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 100% !important;
  }

  .responsive-media--cover ::slotted(embed),
  .responsive-media--cover ::slotted(iframe),
  .responsive-media--cover ::slotted(img),
  .responsive-media--cover ::slotted(video) {
    object-fit: cover !important;
  }

  .responsive-media--contain ::slotted(embed),
  .responsive-media--contain ::slotted(iframe),
  .responsive-media--contain ::slotted(img),
  .responsive-media--contain ::slotted(video) {
    object-fit: contain !important;
  }
`,Gr=class extends Ce{constructor(){super(...arguments),this.aspectRatio="16:9",this.fit="cover"}render(){const t=this.aspectRatio.split(":"),e=parseFloat(t[0]),o=parseFloat(t[1]),r=!isNaN(e)&&!isNaN(o)&&e>0&&o>0?o/e*100+"%":"0";return ce`
      <div
        class=${co({"responsive-media":!0,"responsive-media--cover":"cover"===this.fit,"responsive-media--contain":"contain"===this.fit})}
        style="padding-bottom: ${r}"
      >
        <slot></slot>
      </div>
    `}};Gr.styles=Xr,oo([go({attribute:"aspect-ratio"})],Gr.prototype,"aspectRatio",2),oo([go()],Gr.prototype,"fit",2),Gr=oo([mo("sl-responsive-media")],Gr),customElements.get("sl-tab-group")||customElements.define("sl-tab-group",Er),customElements.get("sl-tab")||customElements.define("sl-tab",Lr),customElements.get("sl-tab-panel")||customElements.define("sl-tab-panel",Mr),customElements.get("sl-card")||customElements.define("sl-card",Dr),customElements.get("sl-dialog")||customElements.define("sl-dialog",Br),customElements.get("sl-skeleton")||customElements.define("sl-skeleton",Fr),customElements.get("sl-spinner")||customElements.define("sl-spinner",xr),customElements.get("sl-menu")||customElements.define("sl-menu",qr),customElements.get("sl-menu-item")||customElements.define("sl-menu-item",Kr),customElements.get("sl-progress-bar")||customElements.define("sl-progress-bar",Qr),customElements.get("sl-responsive-media")||customElements.define("sl-responsive-media",Gr),window.customElements.define("bk-asset-form",kt((function({index:t,assetDetailed:e}){Et(this,[s`:host input,:host sl-details,:host sl-input,:host sl-textarea{margin-bottom:2rem}:host .form-control__help-text{margin-top:.5rem}:host .container.asset{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));grid-gap:2rem}.skeleton-overview header{width:100%;display:flex;align-items:center;margin-bottom:1rem}.skeleton-overview header sl-skeleton:last-child{flex:0 0 auto;width:100%}.skeleton-overview sl-skeleton{margin-bottom:1rem}.skeleton-overview sl-skeleton:nth-child(1){float:left;width:95%;height:5rem;margin-right:1rem;vertical-align:middle}.skeleton-overview sl-skeleton:nth-child(4){width:85%}.skeleton-overview sl-skeleton:nth-child(5){width:75%}.skeleton-effects{font-size:var(--sl-font-size-small)}#additional-files-section .file-input-group{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));grid-gap:1rem;margin-top:2rem;position:relative}#additional-attrs-section .file-input-group{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));grid-gap:1rem;margin-top:2rem;position:relative}#additional-files-section .file-input-helpers{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));grid-gap:1rem;margin-top:2rem;position:relative}.file-input-group sl-button[variant=danger]{position:absolute;top:-1.5rem;right:0}:host .attr-row{width:90%;margin:0 auto}:host input[type=file]{margin-bottom:0}`]);const[o,r]=$t({type:"NFT",variant:"primary"}),[l,i]=$t(e||{...Tt}),a=t=>{t.value=""},n=(e,o)=>{const r=new FormData;e&&e.files&&r.set("file",e.files[0]);const s=new CustomEvent("upload-file",{bubbles:!0,composed:!0,detail:{payload:r,index:t,input:o}});this.dispatchEvent(s)},c=()=>{i(l);const e=new CustomEvent("token",{bubbles:!0,composed:!0,detail:{token:l,index:String(t)}});this.dispatchEvent(e)},d=t=>{const e=this.shadowRoot.querySelector("#additional-attrs-section"),o=e.querySelector(".container");if(e&&o){Object.defineProperty(l.attrs,t,{value:"",writable:!0,configurable:!0});const e=document.createElement("sl-input");e.label="Key",e.type="text",e.placeholder="Set attribute name",e.value=t,e.setAttribute("disabled","disabled");const r=document.createElement("sl-input");r.label="Value",r.type="text",r.placeholder="Set the attribute value",r.addEventListener("input",(e=>{e.currentTarget&&e.currentTarget.value.length>0?(l.attrs[t]=e.currentTarget.value,l.attrs={...l.attrs},c()):e.path&&e.path.length>0?(l.attrs[t]=e.path[0].value,l.attrs={...l.attrs},c()):e.originalTarget&&e.originalTarget.value.length>0&&(l.attrs[t]=e.originalTarget.value,l.attrs={...l.attrs},c())}));const s=document.createElement("div");s.classList.add("file-input-group"),s.appendChild(e),s.appendChild(r);const i=document.createElement("sl-button");Object.assign(i,{name:"gear",variant:"danger",innerHTML:"Delete",size:"small"}),s.appendChild(i),o.appendChild(s),i.addEventListener("click",(()=>{o.removeChild(s),delete l.attrs[t],l.attrs={...l.attrs},c()}))}},u=()=>{const t=this.shadowRoot.querySelector("#attr-dialog");t&&t.hide()};return _t((()=>{l&&(1===l.amount?r({type:"NFT",variant:"primary"}):l.amount>1&&r({type:"Fungible Token",variant:"warning"})),c()}),[t,l]),P`<sl-input style="margin:0" placeholder="Asset Name" size="large" .value="${l.asset_name.length<1?l.name.replace(" ",""):l.asset_name.replace(" ","")}" disabled="disabled"></sl-input><div class="container asset"><section><div><sl-badge style="margin-top:1rem;float:right" .pulse="${!0}" variant="${o.variant}">${o.type}</sl-badge><sl-badge style="margin-top:1rem" variant="success">${l.amount}</sl-badge></div><div style="width:100%;display:flex;justify-content:center"><sl-card class="card-overview" style="text-align:center;width:100%;max-width:560px;margin-top:1rem"><div class="skeleton-overview">${l.image.length>0?P`<asset-file .url="${l.image}" .alt="${"Cover Image"}" @media-type="${t=>{i({...l,media_type:String(t.detail.type)}),c()}}"></asset-file>`:P`<header><sl-skeleton effect="pulse"></sl-skeleton></header>`} ${l.name.length>0?P`<h1><strong>${l.name}</strong></h1>`:P`<sl-skeleton effect="pulse"></sl-skeleton><sl-skeleton effect="pulse"></sl-skeleton>`} ${l.description.length>0?P`<small>Description</small><br><p>${l.description}</p>`:null} ${l.files&&l.files.length>0?l.files.map(((t,e)=>P`<div class="attr-row"><asset-file .url="${t.src}" .alt="${t.name}" @media-type="${t=>{l.files[e].mediaType=String(t.detail.type),i({...l,files:l.files}),c()}}"></asset-file><h3>${t.name}</h3></div>`)):null} ${l.attrs&&Object.keys(l.attrs).length>0?Object.keys(l.attrs).map((t=>P`<div class="attr-row"><h4 style="margin-bottom:.5rem">${String(t)}</h4><p style="margin-top:0">${l.attrs[t]}</p></div>`)):null}</div></sl-card></div></section><section><sl-divider style="--spacing:2rem"></sl-divider><div style="margin-top:2rem"></div><label>Token Name <span style="color:red">*</span></label><sl-input style="margin-top:2px" placeholder="Set the name of the token" required maxlength="64" value="${l.name}" @input="${t=>{t.currentTarget&&t.currentTarget.value.length>0?i({...l,name:String(t.currentTarget.value).trim()}):t.path&&t.path.length>0?i({...l,name:t.path[0].value}):t.originalTarget&&t.originalTarget.value.length>0&&i({...l,name:t.originalTarget.value})}}"></sl-input><sl-details summary="Asset Name"><sl-input placeholder="Set the asset name. Only numbers and letters. Up to 32 characters" maxlength="32" value="${l.asset_name}" type="text" @input="${t=>{t.currentTarget&&t.currentTarget.value.length>0?i({...l,asset_name:String(t.currentTarget.value).trim()}):t.path&&t.path.length>0?i({...l,asset_name:t.path[0].value}):t.originalTarget&&t.originalTarget.value.length>0&&i({...l,asset_name:t.originalTarget.value})}}"></sl-input></sl-details><label>Units <span style="color:red">*</span></label><sl-input style="margin-top:2px" type="number" placeholder="Number of copies for this token. 1 for NFTs and more than 1 for fungible tokens (FTs)" min="1" value="${l.amount}" required maxlength="64" @input="${t=>{t.currentTarget&&t.currentTarget.value.length>0?i({...l,amount:Number(t.currentTarget.value)}):t.path&&t.path.length>0&&Number(t.path[0].value)>1?i({...l,amount:Number(t.path[0].value)}):t.originalTarget&&t.originalTarget.value.length>0?i({...l,amount:Number(t.originalTarget.value)}):i({...l,amount:1})}}" @blur="${t=>{t.currentTarget&&t.currentTarget.value.length>0?i({...l,amount:Number(t.currentTarget.value)}):t.path&&t.path.length>0&&Number(t.path[0].value)>1?i({...l,amount:Number(t.path[0].value)}):t.originalTarget&&t.originalTarget.value.length>0?i({...l,amount:Number(t.originalTarget.value)}):i({...l,amount:1})}}"></sl-input><label>Cover Image <span style="color:red">*</span></label><sl-input style="margin-top:2px" id="cover-image-input" type="url" placeholder="IPFS is a great fit" required maxlength="64" value="${l.image}" @input="${t=>{t.currentTarget&&t.currentTarget.value.length>0?i({...l,image:String(t.currentTarget.value).trim()}):t.path&&t.path.length>0?i({...l,image:t.path[0].value}):t.originalTarget&&t.originalTarget.value.length>0&&i({...l,image:t.originalTarget.value})}}"></sl-input><sl-details summary="Upload file to IPFS">Select a file to upload. When you're ready, press the upload button to start uploading into IPFS.<br><br><input type="file" id="ipfs-fileinput"><sl-button-group><sl-button variant="primary" @click="${()=>{const t=this.shadowRoot.querySelector("#cover-image-input"),e=this.shadowRoot.querySelector("#ipfs-fileinput");t&&n(e,t)}}">Upload file to IPFS</sl-button><sl-button variant="warning" outline @click="${()=>a(this.shadowRoot.querySelector("#ipfs-fileinput"))}">Clear file</sl-button></sl-button-group></sl-details><sl-textarea label="Description" placeholder="Description about the token" value="${l.description}" @input="${t=>{t.currentTarget&&t.currentTarget.value.length>0?i({...l,description:String(t.currentTarget.value).trim()}):t.path&&t.path.length>0?i({...l,description:t.path[0].value}):t.originalTarget&&t.originalTarget.value.length>0&&i({...l,description:t.originalTarget.value})}}"></sl-textarea><sl-details summary="Additional Files" id="additional-files-section"><div class="container"></div><sl-button variant="success" @click="${()=>{const t=this.shadowRoot.querySelector("#additional-files-section"),e=t.querySelector(".container");if(t&&e){const t={name:"",src:"",mediaType:""};l.files&&Array.isArray(l.files)||(l.files=[]);const o=document.createElement("sl-input");o.label="Name",o.type="text",o.placeholder="Name of the file",o.addEventListener("input",(e=>{e.currentTarget&&e.currentTarget.value.length>0?(t.name=e.currentTarget.value,c()):e.path&&e.path.length>0?(t.name=e.path[0].value,c()):e.originalTarget&&e.originalTarget.value.length>0&&(t.name=e.originalTarget.value,c())}));const r=document.createElement("sl-input");r.label="Src",r.type="text",r.placeholder="Set the image source like IPFS",r.addEventListener("input",(e=>{e.currentTarget&&e.currentTarget.value.length>0?(t.src=e.currentTarget.value,c()):e.path&&e.path.length>0?(t.src=e.path[0].value,c()):e.originalTarget&&e.originalTarget.value.length>0&&(t.src=e.originalTarget.value,c())}));const s=document.createElement("sl-input");s.label="MediaType",s.type="text",s.placeholder="Media type e.g. image/jpg",s.readonly=!0,s.addEventListener("input",(e=>{e.currentTarget&&e.currentTarget.value.length>0?(t.mediaType=e.currentTarget.value,c()):e.path&&e.path.length>0?(t.mediaType=e.path[0].value,c()):e.originalTarget&&e.originalTarget.value.length>0&&(t.mediaType=e.originalTarget.value,c())})),l.files.push(t);const i=document.createElement("div");i.classList.add("file-input-group"),i.appendChild(o),i.appendChild(r),i.appendChild(s);const d=document.createElement("sl-button-group");d.classList.add("file-input-helpers");const u=document.createElement("input");u.type="file";const h=document.createElement("sl-button");h.addEventListener("click",(()=>{n(u,r)})),Object.assign(h,{variant:"primary",innerHTML:"Upload file to IPFS"});const p=document.createElement("sl-button");Object.assign(h,{variant:"primary"}),p.setAttribute("outline",""),p.addEventListener("click",(()=>a(u))),p.innerHTML="Clear File",d.appendChild(h),d.appendChild(p);const b=document.createElement("sl-button");Object.assign(b,{name:"gear",variant:"danger",innerHTML:"Delete",size:"small"}),i.appendChild(b),e.appendChild(i);const m=document.createElement("sl-divider");m.setAttribute("style","--spacing:2rem"),e.appendChild(d),e.appendChild(m),e.insertBefore(u,d),b.addEventListener("click",(o=>{e.removeChild(i),e.removeChild(d),e.removeChild(m),l.files=l.files.filter((e=>e!==t)),c()}))}}}">Add File</sl-button></sl-details><sl-details summary="More Attributes" id="additional-attrs-section"><div class="container"></div><sl-button variant="success" @click="${()=>{const t=this.shadowRoot.querySelector("#attr-dialog");t&&t.show()}}">Add Attribute</sl-button></sl-details></section><sl-dialog label="Additional attribute" class="dialog-focus" id="attr-dialog"><sl-input id="attr-dialog-input" autofocus style="margin-bottom:0" placeholder="Set property name"></sl-input><sl-button slot="footer" variant="primary" @click="${()=>{const t=this.shadowRoot.querySelector("#attr-dialog-input");t&&(d(t.value),t.value="",u())}}">Add</sl-button></sl-dialog></div>`}),{observedAttributes:["index","asset"]})),window.customElements.define("bakrypt-launchpad",kt((function({accessToken:t,refreshToken:e,csrfToken:o,testnet:r,initial:l}){Et(this,[Ct,St,s`
      :host {
        font-family: 'arial';
        font-weight: 400;
      }

      :host sl-input,
      :host input,
      :host sl-textarea,
      :host sl-details {
        margin-bottom: 2rem;
      }

      :host .form-control__help-text {
        margin-top: 0.5rem;
      }

      :host .component-section {
        padding-left: 0.85rem;
        padding-right: 0.85rem;
        max-width: 1200px;
        margin: 0 auto;
      }

      :host .dialog__overlay {
        position: fixed;
        inset: 0px;
        background-color: var(--sl-overlay-background-color);
      }

      .sl-toast-stack {
        right: 0;
        left: auto;
        top: 0vh;
      }
      sl-dialog::part(base) {
        max-height: 80vh;
        margin-top: 10vh;
      }
    `]);const i=r?"https://testnet.bakrypt.io":"https://bakrypt.io",[a,n]=$t(!1),[c,d]=$t(!1),[u,h]=$t([{blockchain:"ada",name:"",asset_name:"",image:"",media_type:"",description:"",files:[],attrs:{},amount:1}]),[p,b]=$t({rate:"",address:""}),[m,v]=$t(),g=(t,e="primary",o,r=6e3)=>{const s=Object.assign(document.createElement("sl-alert"),{variant:e,closable:!0,duration:r,innerHTML:`\n        ${t}\n      `});return this.shadowRoot.querySelector(".alert-container").appendChild(s),s.toast=async()=>{const t=Object.assign(document.createElement("div"),{className:"sl-toast-stack"});return new Promise((e=>{null===t.parentElement&&this.shadowRoot.append(t),t.appendChild(s),requestAnimationFrame((()=>{s.clientWidth,s.show()})),this.addEventListener("sl-after-hide",(()=>{t.removeChild(s),e(),null===t.querySelector("sl-alert")&&t.remove()}),{once:!0})}))},s.toast()},f=async e=>{const{payload:r}=e.detail,{input:s}=e.detail;n(!0);try{const e={Authorization:`Bearer ${t}`};o&&o.length>0&&(e["X-CSRFToken"]=o);const l=await fetch(`${i}/v1/files/`,{method:"POST",headers:e,body:r});if(l.ok){const t=await l.json();if(s){s.value=t.ipfs;const e=new Event("input");s.dispatchEvent(e)}g("Successfully uploaded file to IPFS","success")}else{const t=await l.json();t.error_description?g(t.error_description,"danger"):t.error?g(t.error,"danger"):t.detail&&g(t.detail,"danger")}}catch(t){console.log(t),g("Unable to upload file to IPFS server","danger")}n(!1)},y=async e=>{let r;try{const s={"content-type":"application/json",Authorization:`Bearer ${t}`};o&&o.length>0&&(s["X-CSRFToken"]=o);const l=await fetch(`${i}/v1/transactions/${e}/`,{method:"GET",headers:s});if(l.ok){const t=await l.json();v(t),r=t,setTimeout((()=>{y(e)}),1e4)}else{const t=await l.json();t.error_description?g(t.error_description,"danger"):t.error?g(t.error,"danger"):t.detail&&g(t.detail,"danger")}}catch(t){console.log(t),g("Unable to retrieve transaction.","danger")}return r},_=async e=>{console.log(e);let r,s,l=!1;n(!0);try{const a={"content-type":"application/json",Authorization:`Bearer ${t}`};o&&o.length>0&&(a["X-CSRFToken"]=o);const n=await fetch(`${i}/v1/assets/`,{method:"POST",headers:a,body:JSON.stringify(e)});if(n.ok){const t=await n.json();if(g("Request was submitted","success"),s=t,Array.isArray(t)){const e=t[0];e.transaction&&(r=await y(String(e.transaction)))}else t.transaction&&t.transaction.uuid&&(v(t.transaction),r=t.transaction);l=!0}else{const t=await n.json();if(t.error_description)g(t.error_description,"danger");else if(t.error)g(t.error,"danger");else if(t.detail)g(t.detail,"danger");else if(Array.isArray(t)){const e=t.map(((t,e)=>{let o="";if(Object.keys(t).length>0){o=`<br/>Asset #${e+1} <br/>`;for(const[e,r]of Object.entries(t))o+=`${e}: ${r} <br/>`}return o}));g(e.join(" "),"danger")}}}catch(t){g(`Unable to submit request. Error: ${t}`,"danger")}if(n(!1),l){d(!0);const t=new CustomEvent("submit",{bubbles:!0,composed:!0,detail:{collection:s,transaction:r}});this.dispatchEvent(t)}},w=()=>{const t=this.shadowRoot.querySelector("#asset-template").cloneNode(!0),e=this.shadowRoot.querySelector("sl-tab-group");if(e){const o=[...e.children].filter((t=>"sl-tab"===t.tagName.toLowerCase())).length;t.innerHTML=t.innerHTML.replace(/__prefix__/g,o);const r=t.content.cloneNode(!0);r.querySelector("bk-asset-form").index=o,Object.defineProperty(r.querySelector("bk-asset-form"),"assetDetailed",{writable:!0,configurable:!0,value:u[o]}),e.appendChild(r),[...e.children].filter((t=>"sl-tab"===t.tagName.toLowerCase())).map(((t,o)=>{const r=e.querySelector(`sl-tab-panel[name="${t.panel}"]`);return t.innerHTML=t.innerHTML.replace(/#[0-9]+/g,`#${o+1}`),t.setAttribute("panel",o),r.setAttribute("name",o),t}))}},x=async t=>{if(m)return;const e=t.target,o=this.shadowRoot.querySelector("sl-tab-group");if(e){const t=o.querySelector(`sl-tab-panel[name="${e.panel}"]`);if(e.active){const t=o.tabs.indexOf(e);t>=0&&o.show(o.tabs[t-1].panel)}let r=u;const s=[...o.children].filter((t=>"sl-tab"===t.tagName.toLowerCase())).indexOf(e),l=r.splice(s,1);l.length>0&&(r=u.filter((t=>t!==l[0])),h(r)),e.remove(),t.remove(),[...o.children].filter((t=>"sl-tab"===t.tagName.toLowerCase())).map(((t,e)=>{const r=o.querySelector(`sl-tab-panel[name="${t.panel}"]`);t.innerHTML=t.innerHTML.replace(/#[0-9]+/g,`#${e+1}`),t.setAttribute("panel",e),r.setAttribute("name",e);const s=r.querySelector("bk-asset-form");return s&&Object.defineProperty(s,"index",{writable:!0,configurable:!0,value:e}),t}))}},$=t=>{if(m)return;const e=t.detail.token,o=u;o[t.detail.index]=e,h(o)},k=t=>{const[e,o]=t.detail;return g(e,o),!1},A=()=>{d(!1)},C=e=>{(async e=>{try{const r={"content-type":"application/json",Authorization:`Bearer ${t}`};o&&o.length>0&&(r["X-CSRFToken"]=o);const s=await fetch(`${i}/v1/transactions/${e.uuid}/mint/`,{method:"POST",headers:r});if(s.ok){const t=await s.json();g("Request was submitted","success"),console.log(t)}else{const t=await s.json();t.error_description?g(t.error_description,"danger"):t.error?g(t.error,"danger"):t.detail&&g(t.detail,"danger")}}catch(t){g(`Unable to submit request. Error: ${t}`,"danger")}})(e.detail.tx)},S=e=>{(async e=>{n(!0),console.log(e),console.log("----------------------------------------");try{const r={"content-type":"application/json",Authorization:`Bearer ${t}`};o&&o.length>0&&(r["X-CSRFToken"]=o);const s=await fetch(`${i}/v1/transactions/${e.uuid}/refund/`,{method:"POST",headers:r});if(s.ok){const t=await s.json();g("Refund was submitted","success"),console.log(t)}else{const t=await s.json();t.error_description?g(t.error_description,"danger"):t.error?g(t.error,"danger"):t.detail&&g(t.detail,"danger")}}catch(t){g(`Unable to refund request. Error: ${t}`,"danger")}n(!1)})(e.detail.tx)};return _t((()=>{const t=this.shadowRoot.querySelector("sl-tab-group");t.addEventListener("sl-close",x);const e=this.shadowRoot.querySelector("sl-dialog");return e.addEventListener("sl-hide",A),this.addEventListener("token",$),this.addEventListener("upload-file",f),this.addEventListener("notification",k),this.addEventListener("retryTransaction",C),this.addEventListener("refundTransaction",S),this.addEventListener("hideInvoice",A),()=>{t.removeEventListener("sl-close",x),this.removeEventListener("token",$),this.removeEventListener("upload-file",f),this.removeEventListener("notification",k),this.removeEventListener("retryTransaction",C),this.removeEventListener("refundTransaction",S),this.removeEventListener("hideInvoice",A),e.removeEventListener("sl-hide",A)}}),[t,e,m,c]),_t((()=>{if(console.log(l),console.log("-------------------------- initial string started"),l){const t=JSON.parse(l);if(Array.isArray(t)&&t.length){for(let e=0;e<t.length;e+=1)$({detail:{token:t[e],index:e}});for(let e=0;e<t.length;e+=1)w()}}else $({detail:{token:{blockchain:"ada",name:"",asset_name:"",image:"",media_type:"",description:"",files:[],attrs:{},amount:1},index:0}}),w()}),[l]),P`
    <!-- Spinner loader overlay -->
    ${a?P`
          <sl-spinner
            style="position:absolute; right: 2rem; --track-width: 5px; font-size: 1.5rem"
          ></sl-spinner>
        `:null}

    <!-- Tab groupand panel section -->
    <section class="component-section">
      <sl-tab-group id="mainTabsSection">
        <!-- <sl-tab slot="nav" panel="0">Primary Asset</sl-tab>

        <sl-tab-panel name="0">
          <div style="text-align: left; padding-top:1rem">
            <bk-asset-form
              .index=${0}
              .assetDetailed=${u[0]}
            ></bk-asset-form>
          </div>
        </sl-tab-panel> -->
      </sl-tab-group>
    </section>

    <!-- Royalties section -->
    <section class="component-section" style="margin-top:1rem">
      Royalties Information
      <sl-badge
        style="margin-left:0.5rem"
        variant=${p.rate.length>0&&p.address.length>0?"success":"neutral"}
        >${p.rate.length>0&&p.address.length>0?"Active":"Not Active"}</sl-badge
      >
      <sl-divider style="--spacing: 2rem;"></sl-divider>
      <sl-details summary="Set Royalties">
        <sl-input
          label="Royalties Rate in %"
          placeholder="Set the percentage rate from 0 - 100%"
          maxlength="32"
          value=${p.rate}
          min="0"
          max="100"
          type="number"
          @input=${t=>{t.currentTarget&&t.currentTarget.value.length>0?b({...p,rate:t.currentTarget.value}):t.path&&t.path.length>0?b({...p,rate:t.path[0].value}):t.originalTarget&&t.originalTarget.value.length>0&&b({...p,rate:t.originalTarget.value})}}
        ></sl-input>

        <sl-input
          label="Royalties wallet address"
          placeholder="Set the wallet address that will be receiving royalties"
          maxlength="128"
          value=${p.address}
          type="text"
          @input=${t=>{t.currentTarget&&t.currentTarget.value.length>0?b({...p,address:t.currentTarget.value}):t.path&&t.path.length>0?b({...p,address:t.path[0].value}):t.originalTarget&&t.originalTarget.value.length>0&&b({...p,address:t.originalTarget.value})}}
        ></sl-input>
      </sl-details>
    </section>

    <!-- Button section -->
    <section class="component-section" style="padding-bottom:4rem;">
      ${m?null:P` <sl-button
              variant="primary"
              class="--sl-color-emerald-300"
              @click=${()=>{const t=u;if(t&&p.rate.length>0&&p.address.length>0){const e={...t[0],royalties:p.address,royalties_rate:p.rate};t[0]=e}else{const e=t[0];delete e.royalties,delete e.royalties_rate,t[0]={...e}}_(t)}}
              >Submit request</sl-button
            ><sl-button
              variant="primary"
              outline
              @click=${async()=>{await w();const t=this.shadowRoot.querySelector("sl-tab-group");if(t){const e=t.tabs[t.tabs.length-1];t.show(e.panel),t.scrollIntoView()}}}
              style="margin-left:2rem"
              >Add Asset</sl-button
            >`}
      ${m?P` <sl-button
            variant="success"
            @click=${()=>d(!0)}
            >Show Invoice</sl-button
          >`:null}
    </section>

    <!-- Transaction Dialog -->
    <sl-dialog
      label="Invoice Details"
      class="dialog-width"
      style="--width: 95vw;"
      .open=${c}
    >
      <bakrypt-invoice
        .transaction=${m}
        .collection=${u}
      ></bakrypt-invoice>
    </sl-dialog>
    <!-- Alert container -->
    <div class="alert-container"></div>

    <!-- Asset template -->
    <template id="asset-template">
      <sl-tab slot="nav" panel="__prefix__" closable>
        Asset #__prefix__
      </sl-tab>

      <sl-tab-panel name="__prefix__">
        <div style="text-align: left; padding-top:1rem">
          <bk-asset-form></bk-asset-form>
        </div>
      </sl-tab-panel>
    </template>
    <!-- Spinner loader overlay -->
    ${a?P` <div part="overlay" class="dialog__overlay" tabindex="-1"></div> `:null}
  `}),{observedAttributes:["access-token","refresh-token","csrf-token","testnet","initial"]}));
