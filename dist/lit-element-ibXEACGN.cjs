/**
 * Librairie du system desing des Bibliothèques de l'Université de Montréal
 * @module @bibudem/ui
 * @version 0.7.0
 * @author Christian Rémillard <christian.remillard@umontreal.ca>
 * @license ISC
 * @see https://github.com/bibudem/ui
 */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;class n{constructor(e,t,s){if(this._$cssResult$=!0,s!==i)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this._strings=t}get styleSheet(){let e=this._styleSheet;const i=this._strings;if(t&&void 0===e){const t=void 0!==i&&1===i.length;t&&(e=s.get(i)),void 0===e&&((this._styleSheet=e=new CSSStyleSheet).replaceSync(this.cssText),t&&s.set(i,e))}return e}toString(){return this.cssText}}const r=e=>new n("string"==typeof e?e:String(e),void 0,i),o=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return r(t)})(e):e,{is:a,defineProperty:l,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:c,getPrototypeOf:p}=Object,u=globalThis;let m;const _=u.trustedTypes,f=_?_.emptyScript:"",g=u.reactiveElementPolyfillSupportDevMode;{const e=u.litIssuedWarnings??=new Set;m=(t,i)=>{i+=` See https://lit.dev/msg/${t} for more information.`,e.has(i)||(console.warn(i),e.add(i))},m("dev-mode","Lit is in dev mode. Not recommended for production!"),u.ShadyDOM?.inUse&&void 0===g&&m("polyfill-support-missing","Shadow DOM is being polyfilled via `ShadyDOM` but the `polyfill-support` module has not been loaded.")}const y=(e,t)=>e,v={toAttribute(e,t){switch(t){case Boolean:e=e?f:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(s){i=null}}return i}},$=(e,t)=>!a(e,t),b={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;class w extends HTMLElement{static addInitializer(e){this.__prepare(),(this._initializers??=[]).push(e)}static get observedAttributes(){return this.finalize(),this.__attributeToPropertyMap&&[...this.__attributeToPropertyMap.keys()]}static createProperty(e,t=b){if(t.state&&(t.attribute=!1),this.__prepare(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol.for(`${String(e)} (@property() cache)`),s=this.getPropertyDescriptor(e,i,t);void 0!==s&&l(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:n}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};if(null==s){if("value"in(d(this.prototype,e)??{}))throw new Error(`Field ${JSON.stringify(String(e))} on ${this.name} was declared as a reactive property but it's actually declared as a value on the prototype. Usually this is due to using @property or @state on a method.`);m("reactive-property-without-getter",`Field ${JSON.stringify(String(e))} on ${this.name} was declared as a reactive property but it does not have a getter. This will be an error in a future version of Lit.`)}return{get(){return s?.call(this)},set(t){const r=s?.call(this);n.call(this,t),this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??b}static __prepare(){if(this.hasOwnProperty(y("elementProperties")))return;const e=p(this);e.finalize(),void 0!==e._initializers&&(this._initializers=[...e._initializers]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this.__prepare(),this.hasOwnProperty(y("properties"))){const e=this.properties,t=[...h(e),...c(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this.__attributeToPropertyMap=new Map;for(const[t,i]of this.elementProperties){const e=this.__attributeNameForProperty(t,i);void 0!==e&&this.__attributeToPropertyMap.set(e,t)}this.elementStyles=this.finalizeStyles(this.styles),this.hasOwnProperty("createProperty")&&m("no-override-create-property","Overriding ReactiveElement.createProperty() is deprecated. The override will not be called with standard decorators"),this.hasOwnProperty("getPropertyDescriptor")&&m("no-override-get-property-descriptor","Overriding ReactiveElement.getPropertyDescriptor() is deprecated. The override will not be called with standard decorators")}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(o(e))}else void 0!==e&&t.push(o(e));return t}static __attributeNameForProperty(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this.__instanceProperties=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.__reflectingProperty=null,this.__initialize()}__initialize(){this.__updatePromise=new Promise((e=>this.enableUpdating=e)),this._$changedProperties=new Map,this.__saveInstanceProperties(),this.requestUpdate(),this.constructor._initializers?.forEach((e=>e(this)))}addController(e){(this.__controllers??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this.__controllers?.delete(e)}__saveInstanceProperties(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this.__instanceProperties=e)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{if(t)i.adoptedStyleSheets=s.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const t of s){const s=document.createElement("style"),n=e.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=t.cssText,i.appendChild(s)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this.__controllers?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this.__controllers?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,i){this._$attributeToProperty(e,i)}__propertyToAttribute(e,t){const i=this.constructor.elementProperties.get(e),s=this.constructor.__attributeNameForProperty(e,i);if(void 0!==s&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:v).toAttribute(t,i.type);this.constructor.enabledWarnings.includes("migration")&&void 0===n&&m("undefined-attribute-value",`The attribute value for the ${e} property is undefined on element ${this.localName}. The attribute will be removed, but in the previous version of \`ReactiveElement\`, the attribute would not have changed.`),this.__reflectingProperty=e,null==n?this.removeAttribute(s):this.setAttribute(s,n),this.__reflectingProperty=null}}_$attributeToProperty(e,t){const i=this.constructor,s=i.__attributeToPropertyMap.get(e);if(void 0!==s&&this.__reflectingProperty!==s){const e=i.getPropertyOptions(s),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:v;this.__reflectingProperty=s,this[s]=n.fromAttribute(t,e.type),this.__reflectingProperty=null}}requestUpdate(e,t,i){if(void 0!==e){if(e instanceof Event&&m("","The requestUpdate() method was called with an Event as the property name. This is probably a mistake caused by binding this.requestUpdate as an event listener. Instead bind a function that will call it with no arguments: () => this.requestUpdate()"),i??=this.constructor.getPropertyOptions(e),!(i.hasChanged??$)(this[e],t))return;this._$changeProperty(e,t,i)}!1===this.isUpdatePending&&(this.__updatePromise=this.__enqueueUpdate())}_$changeProperty(e,t,i){this._$changedProperties.has(e)||this._$changedProperties.set(e,t),!0===i.reflect&&this.__reflectingProperty!==e&&(this.__reflectingProperties??=new Set).add(e)}async __enqueueUpdate(){this.isUpdatePending=!0;try{await this.__updatePromise}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){const e=this.performUpdate();return this.constructor.enabledWarnings.includes("async-perform-update")&&"function"==typeof e?.then&&m("async-perform-update",`Element ${this.localName} returned a Promise from performUpdate(). This behavior is deprecated and will be removed in a future version of ReactiveElement.`),e}performUpdate(){if(!this.isUpdatePending)return;var e;if(e={kind:"update"},u.emitLitDebugLogEvents&&u.dispatchEvent(new CustomEvent("lit-debug",{detail:e})),!this.hasUpdated){this.renderRoot??=this.createRenderRoot();{const e=[...this.constructor.elementProperties.keys()].filter((e=>this.hasOwnProperty(e)&&e in p(this)));if(e.length)throw new Error(`The following properties on element ${this.localName} will not trigger updates as expected because they are set using class fields: ${e.join(", ")}. Native class fields and some compiled output will overwrite accessors used for detecting changes. See https://lit.dev/msg/class-field-shadowing for more information.`)}if(this.__instanceProperties){for(const[e,t]of this.__instanceProperties)this[e]=t;this.__instanceProperties=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e)!0!==i.wrapped||this._$changedProperties.has(t)||void 0===this[t]||this._$changeProperty(t,this[t],i)}let t=!1;const i=this._$changedProperties;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),this.__controllers?.forEach((e=>e.hostUpdate?.())),this.update(i)):this.__markUpdated()}catch(s){throw t=!1,this.__markUpdated(),s}t&&this._$didUpdate(i)}willUpdate(e){}_$didUpdate(e){this.__controllers?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e),this.isUpdatePending&&this.constructor.enabledWarnings.includes("change-in-update")&&m("change-in-update",`Element ${this.localName} scheduled an update (generally because a property was set) after an update completed, causing a new update to be scheduled. This is inefficient and should be avoided unless the next update can only be scheduled as a side effect of the previous update.`)}__markUpdated(){this._$changedProperties=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.__updatePromise}shouldUpdate(e){return!0}update(e){this.__reflectingProperties&&=this.__reflectingProperties.forEach((e=>this.__propertyToAttribute(e,this[e]))),this.__markUpdated()}updated(e){}firstUpdated(e){}}w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[y("elementProperties")]=new Map,w[y("finalized")]=new Map,g?.({ReactiveElement:w});{w.enabledWarnings=["change-in-update","async-perform-update"];const e=function(e){e.hasOwnProperty(y("enabledWarnings"))||(e.enabledWarnings=e.enabledWarnings.slice())};w.enableWarning=function(t){e(this),this.enabledWarnings.includes(t)||this.enabledWarnings.push(t)},w.disableWarning=function(t){e(this);const i=this.enabledWarnings.indexOf(t);i>=0&&this.enabledWarnings.splice(i,1)}}(u.reactiveElementVersions??=[]).push("2.0.4"),u.reactiveElementVersions.length>1&&m("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const S=globalThis,P=e=>{S.emitLitDebugLogEvents&&S.dispatchEvent(new CustomEvent("lit-debug",{detail:e}))};let x,C=0;S.litIssuedWarnings??=new Set,x=(e,t)=>{t+=e?` See https://lit.dev/msg/${e} for more information.`:"",S.litIssuedWarnings.has(t)||(console.warn(t),S.litIssuedWarnings.add(t))},x("dev-mode","Lit is in dev mode. Not recommended for production!");const T=S.ShadyDOM?.inUse&&!0===S.ShadyDOM?.noPatch?S.ShadyDOM.wrap:e=>e,N=S.trustedTypes,E=N?N.createPolicy("lit-html",{createHTML:e=>e}):void 0,k=e=>e,U=(e,t,i)=>k,V=(e,t,i)=>Q(e,t,i),O="$lit$",z=`lit$${Math.random().toFixed(9).slice(2)}$`,M="?"+z,A=`<${M}>`,L=document,R=()=>L.createComment(""),D=e=>null===e||"object"!=typeof e&&"function"!=typeof e,W=Array.isArray,I="[ \t\n\f\r]",F=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,j=/>/g,q=new RegExp(`>|${I}(?:([^\\s"'>=/]+)(${I}*=${I}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),B=/'/g,J=/"/g,Y=/^(?:script|style|textarea|title)$/i,Z=Symbol.for("lit-noChange"),X=Symbol.for("lit-nothing"),G=new WeakMap,K=L.createTreeWalker(L,129);let Q=U;function ee(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw")){let e="invalid template strings array";throw e="\n          Internal Error: expected template strings to be an array\n          with a 'raw' field. Faking a template strings array by\n          calling html or svg like an ordinary function is effectively\n          the same as calling unsafeHtml and can lead to major security\n          issues, e.g. opening your code up to XSS attacks.\n          If you're using the html or svg tagged template functions normally\n          and still seeing this error, please file a bug at\n          https://github.com/lit/lit/issues/new?template=bug_report.md\n          and include information about your build tooling, if any.\n        ".trim().replace(/\n */g,"\n"),new Error(e)}return void 0!==E?E.createHTML(t):t}class te{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let n=0,r=0;const o=e.length-1,a=this.parts,[l,d]=((e,t)=>{const i=e.length-1,s=[];let n,r=2===t?"<svg>":"",o=F;for(let a=0;a<i;a++){const t=e[a];let i,l,d=-1,h=0;for(;h<t.length&&(o.lastIndex=h,l=o.exec(t),null!==l);)if(h=o.lastIndex,o===F){if("!--"===l[1])o=H;else if(void 0!==l[1])o=j;else if(void 0!==l[2])Y.test(l[2])&&(n=new RegExp(`</${l[2]}`,"g")),o=q;else if(void 0!==l[3])throw new Error("Bindings in tag names are not supported. Please use static templates instead. See https://lit.dev/docs/templates/expressions/#static-expressions")}else o===q?">"===l[0]?(o=n??F,d=-1):void 0===l[1]?d=-2:(d=o.lastIndex-l[2].length,i=l[1],o=void 0===l[3]?q:'"'===l[3]?J:B):o===J||o===B?o=q:o===H||o===j?o=F:(o=q,n=void 0);console.assert(-1===d||o===q||o===B||o===J,"unexpected parse state B");const c=o===q&&e[a+1].startsWith("/>")?" ":"";r+=o===F?t+A:d>=0?(s.push(i),t.slice(0,d)+O+t.slice(d)+z+c):t+z+(-2===d?a:c)}return[ee(e,r+(e[i]||"<?>")+(2===t?"</svg>":"")),s]})(e,t);if(this.el=te.createElement(l,i),K.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(s=K.nextNode())&&a.length<o;){if(1===s.nodeType){{const e=s.localName;if(/^(?:textarea|template)$/i.test(e)&&s.innerHTML.includes(z)){const t=`Expressions are not supported inside \`${e}\` elements. See https://lit.dev/msg/expression-in-${e} for more information.`;if("template"===e)throw new Error(t);x("",t)}}if(s.hasAttributes())for(const e of s.getAttributeNames())if(e.endsWith(O)){const t=d[r++],i=s.getAttribute(e).split(z),o=/([.?@])?(.*)/.exec(t);a.push({type:1,index:n,name:o[2],strings:i,ctor:"."===o[1]?oe:"?"===o[1]?ae:"@"===o[1]?le:re}),s.removeAttribute(e)}else e.startsWith(z)&&(a.push({type:6,index:n}),s.removeAttribute(e));if(Y.test(s.tagName)){const e=s.textContent.split(z),t=e.length-1;if(t>0){s.textContent=N?N.emptyScript:"";for(let i=0;i<t;i++)s.append(e[i],R()),K.nextNode(),a.push({type:2,index:++n});s.append(e[t],R())}}}else if(8===s.nodeType)if(s.data===M)a.push({type:2,index:n});else{let e=-1;for(;-1!==(e=s.data.indexOf(z,e+1));)a.push({type:7,index:n}),e+=z.length-1}n++}if(d.length!==r)throw new Error('Detected duplicate attribute bindings. This occurs if your template has duplicate attributes on an element tag. For example "<input ?disabled=${true} ?disabled=${false}>" contains a duplicate "disabled" attribute. The error was detected in the following template: \n`'+e.join("${...}")+"`");P&&P({kind:"template prep",template:this,clonableTemplate:this.el,parts:this.parts,strings:e})}static createElement(e,t){const i=L.createElement("template");return i.innerHTML=e,i}}function ie(e,t,i=e,s){if(t===Z)return t;let n=void 0!==s?i.__directives?.[s]:i.__directive;const r=D(t)?void 0:t._$litDirective$;return n?.constructor!==r&&(n?._$notifyDirectiveConnectionChanged?.(!1),void 0===r?n=void 0:(n=new r(e),n._$initialize(e,i,s)),void 0!==s?(i.__directives??=[])[s]=n:i.__directive=n),void 0!==n&&(t=ie(e,n._$resolve(e,t.values),n,s)),t}class se{constructor(e,t){this._$parts=[],this._$disconnectableChildren=void 0,this._$template=e,this._$parent=t}get parentNode(){return this._$parent.parentNode}get _$isConnected(){return this._$parent._$isConnected}_clone(e){const{el:{content:t},parts:i}=this._$template,s=(e?.creationScope??L).importNode(t,!0);K.currentNode=s;let n=K.nextNode(),r=0,o=0,a=i[0];for(;void 0!==a;){if(r===a.index){let t;2===a.type?t=new ne(n,n.nextSibling,this,e):1===a.type?t=new a.ctor(n,a.name,a.strings,this,e):6===a.type&&(t=new de(n,this,e)),this._$parts.push(t),a=i[++o]}r!==a?.index&&(n=K.nextNode(),r++)}return K.currentNode=L,s}_update(e){let t=0;for(const i of this._$parts)void 0!==i&&(P&&P({kind:"set part",part:i,value:e[t],valueIndex:t,values:e,templateInstance:this}),void 0!==i.strings?(i._$setValue(e,i,t),t+=i.strings.length-2):i._$setValue(e[t])),t++}}class ne{get _$isConnected(){return this._$parent?._$isConnected??this.__isConnected}constructor(e,t,i,s){this.type=2,this._$committedValue=X,this._$disconnectableChildren=void 0,this._$startNode=e,this._$endNode=t,this._$parent=i,this.options=s,this.__isConnected=s?.isConnected??!0,this._textSanitizer=void 0}get parentNode(){let e=T(this._$startNode).parentNode;const t=this._$parent;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$startNode}get endNode(){return this._$endNode}_$setValue(e,t=this){if(null===this.parentNode)throw new Error("This `ChildPart` has no `parentNode` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's `innerHTML` or `textContent` can do this.");if(e=ie(this,e,t),D(e))e===X||null==e||""===e?(this._$committedValue!==X&&(P&&P({kind:"commit nothing to child",start:this._$startNode,end:this._$endNode,parent:this._$parent,options:this.options}),this._$clear()),this._$committedValue=X):e!==this._$committedValue&&e!==Z&&this._commitText(e);else if(void 0!==e._$litType$)this._commitTemplateResult(e);else if(void 0!==e.nodeType){if(this.options?.host===e)return this._commitText("[probable mistake: rendered a template's host in itself (commonly caused by writing ${this} in a template]"),void console.warn("Attempted to render the template host",e,"inside itself. This is almost always a mistake, and in dev mode ","we render some warning text. In production however, we'll ","render it, which will usually result in an error, and sometimes ","in the element disappearing from the DOM.");this._commitNode(e)}else W(i=e)||"function"==typeof i?.[Symbol.iterator]?this._commitIterable(e):this._commitText(e);var i}_insert(e){return T(T(this._$startNode).parentNode).insertBefore(e,this._$endNode)}_commitNode(e){if(this._$committedValue!==e){if(this._$clear(),Q!==U){const e=this._$startNode.parentNode?.nodeName;if("STYLE"===e||"SCRIPT"===e){let t="Forbidden";throw t="STYLE"===e?"Lit does not support binding inside style nodes. This is a security risk, as style injection attacks can exfiltrate data and spoof UIs. Consider instead using css`...` literals to compose styles, and make do dynamic styling with css custom properties, ::parts, <slot>s, and by mutating the DOM rather than stylesheets.":"Lit does not support binding inside script nodes. This is a security risk, as it could allow arbitrary code execution.",new Error(t)}}P&&P({kind:"commit node",start:this._$startNode,parent:this._$parent,value:e,options:this.options}),this._$committedValue=this._insert(e)}}_commitText(e){if(this._$committedValue!==X&&D(this._$committedValue)){const t=T(this._$startNode).nextSibling;void 0===this._textSanitizer&&(this._textSanitizer=V(t,"data","property")),e=this._textSanitizer(e),P&&P({kind:"commit text",node:t,value:e,options:this.options}),t.data=e}else{const t=L.createTextNode("");this._commitNode(t),void 0===this._textSanitizer&&(this._textSanitizer=V(t,"data","property")),e=this._textSanitizer(e),P&&P({kind:"commit text",node:t,value:e,options:this.options}),t.data=e}this._$committedValue=e}_commitTemplateResult(e){const{values:t,_$litType$:i}=e,s="number"==typeof i?this._$getTemplate(e):(void 0===i.el&&(i.el=te.createElement(ee(i.h,i.h[0]),this.options)),i);if(this._$committedValue?._$template===s)P&&P({kind:"template updating",template:s,instance:this._$committedValue,parts:this._$committedValue._$parts,options:this.options,values:t}),this._$committedValue._update(t);else{const e=new se(s,this),i=e._clone(this.options);P&&P({kind:"template instantiated",template:s,instance:e,parts:e._$parts,options:this.options,fragment:i,values:t}),e._update(t),P&&P({kind:"template instantiated and updated",template:s,instance:e,parts:e._$parts,options:this.options,fragment:i,values:t}),this._commitNode(i),this._$committedValue=e}}_$getTemplate(e){let t=G.get(e.strings);return void 0===t&&G.set(e.strings,t=new te(e)),t}_commitIterable(e){W(this._$committedValue)||(this._$committedValue=[],this._$clear());const t=this._$committedValue;let i,s=0;for(const n of e)s===t.length?t.push(i=new ne(this._insert(R()),this._insert(R()),this,this.options)):i=t[s],i._$setValue(n),s++;s<t.length&&(this._$clear(i&&T(i._$endNode).nextSibling,s),t.length=s)}_$clear(e=T(this._$startNode).nextSibling,t){for(this._$notifyConnectionChanged?.(!1,!0,t);e&&e!==this._$endNode;){const t=T(e).nextSibling;T(e).remove(),e=t}}setConnected(e){if(void 0!==this._$parent)throw new Error("part.setConnected() may only be called on a RootPart returned from render().");this.__isConnected=e,this._$notifyConnectionChanged?.(e)}}class re{get tagName(){return this.element.tagName}get _$isConnected(){return this._$parent._$isConnected}constructor(e,t,i,s,n){this.type=1,this._$committedValue=X,this._$disconnectableChildren=void 0,this.element=e,this.name=t,this._$parent=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$committedValue=new Array(i.length-1).fill(new String),this.strings=i):this._$committedValue=X,this._sanitizer=void 0}_$setValue(e,t=this,i,s){const n=this.strings;let r=!1;if(void 0===n)e=ie(this,e,t,0),r=!D(e)||e!==this._$committedValue&&e!==Z,r&&(this._$committedValue=e);else{const s=e;let o,a;for(e=n[0],o=0;o<n.length-1;o++)a=ie(this,s[i+o],t,o),a===Z&&(a=this._$committedValue[o]),r||=!D(a)||a!==this._$committedValue[o],a===X?e=X:e!==X&&(e+=(a??"")+n[o+1]),this._$committedValue[o]=a}r&&!s&&this._commitValue(e)}_commitValue(e){e===X?T(this.element).removeAttribute(this.name):(void 0===this._sanitizer&&(this._sanitizer=Q(this.element,this.name,"attribute")),e=this._sanitizer(e??""),P&&P({kind:"commit attribute",element:this.element,name:this.name,value:e,options:this.options}),T(this.element).setAttribute(this.name,e??""))}}class oe extends re{constructor(){super(...arguments),this.type=3}_commitValue(e){void 0===this._sanitizer&&(this._sanitizer=Q(this.element,this.name,"property")),e=this._sanitizer(e),P&&P({kind:"commit property",element:this.element,name:this.name,value:e,options:this.options}),this.element[this.name]=e===X?void 0:e}}class ae extends re{constructor(){super(...arguments),this.type=4}_commitValue(e){P&&P({kind:"commit boolean attribute",element:this.element,name:this.name,value:!(!e||e===X),options:this.options}),T(this.element).toggleAttribute(this.name,!!e&&e!==X)}}class le extends re{constructor(e,t,i,s,n){if(super(e,t,i,s,n),this.type=5,void 0!==this.strings)throw new Error(`A \`<${e.localName}>\` has a \`@${t}=...\` listener with invalid content. Event listeners in templates must have exactly one expression and no surrounding text.`)}_$setValue(e,t=this){if((e=ie(this,e,t,0)??X)===Z)return;const i=this._$committedValue,s=e===X&&i!==X||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==X&&(i===X||s);P&&P({kind:"commit event listener",element:this.element,name:this.name,value:e,options:this.options,removeListener:s,addListener:n,oldListener:i}),s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$committedValue=e}handleEvent(e){"function"==typeof this._$committedValue?this._$committedValue.call(this.options?.host??this.element,e):this._$committedValue.handleEvent(e)}}class de{constructor(e,t,i){this.element=e,this.type=6,this._$disconnectableChildren=void 0,this._$parent=t,this.options=i}get _$isConnected(){return this._$parent._$isConnected}_$setValue(e){P&&P({kind:"commit to element binding",element:this.element,value:e,options:this.options}),ie(this,e)}}const he=S.litHtmlPolyfillSupportDevMode;he?.(te,ne),(S.litHtmlVersions??=[]).push("3.1.3"),S.litHtmlVersions.length>1&&x("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.");const ce=(e,t,i)=>{if(null==t)throw new TypeError(`The container to render into may not be ${t}`);const s=C++,n=i?.renderBefore??t;let r=n._$litPart$;if(P&&P({kind:"begin render",id:s,value:e,container:t,options:i,part:r}),void 0===r){const e=i?.renderBefore??null;n._$litPart$=r=new ne(t.insertBefore(R(),e),e,void 0,i??{})}return r._$setValue(e),P&&P({kind:"end render",id:s,value:e,container:t,options:i,part:r}),r};let pe;ce.setSanitizer=e=>{if(Q!==U)throw new Error("Attempted to overwrite existing lit-html security policy. setSanitizeDOMValueFactory should be called at most once.");Q=e},ce.createSanitizer=V,ce._testOnlyClearSanitizerFactoryDoNotCallOrElse=()=>{Q=U};{const e=globalThis.litIssuedWarnings??=new Set;pe=(t,i)=>{i+=` See https://lit.dev/msg/${t} for more information.`,e.has(i)||(console.warn(i),e.add(i))}}class ue extends w{constructor(){super(...arguments),this.renderOptions={host:this},this.__childPart=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this.__childPart=ce(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.__childPart?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.__childPart?.setConnected(!1)}render(){return Z}}ue._$litElement$=!0,ue.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ue});const me=globalThis.litElementPolyfillSupportDevMode;me?.({LitElement:ue}),(globalThis.litElementVersions??=[]).push("4.0.5"),globalThis.litElementVersions.length>1&&pe("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended."),exports.LitElement=ue,exports.css=(e,...t)=>{const s=1===e.length?e[0]:t.reduce(((t,i,s)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(i)+e[s+1]),e[0]);return new n(s,e,i)},exports.defaultConverter=v,exports.html=(e,...t)=>(e.some((e=>void 0===e))&&console.warn("Some template strings are undefined.\nThis is probably caused by illegal octal escape sequences."),t.some((e=>e?._$litStatic$))&&x("","Static values 'literal' or 'unsafeStatic' cannot be used as values to non-static templates.\nPlease use the static 'html' tag function. See https://lit.dev/docs/templates/expressions/#static-expressions"),{_$litType$:1,strings:e,values:t}),exports.noChange=Z,exports.notEqual=$,exports.nothing=X,exports.unsafeCSS=r;
//# sourceMappingURL=lit-element-ibXEACGN.cjs.map