!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){r(2),t.exports=r(6)},function(t,e,r){"use strict";(function(t){var e=document.querySelector(".imageDisplayNumber"),r=[],n=document.querySelectorAll(".jsclass"),o=[],i=document.querySelector(".wie"),s=document.querySelector(".preasidium"),u=function(t){e!==t.currentTarget&&(c(e),f(e),e=t.currentTarget,l(e),h(e)),a(e)},a=function(t){n.forEach(function(e){t.innerText===e.id?e.classList.contains("hiddenImages")&&(e.classList.remove("hiddenImages"),e.classList.add("displayImage")):e.classList.add("hiddenImages")})},c=function(t){t.classList.add("itemNav")},f=function(t){t.classList.remove("imageDisplayNumber")},l=function(t){t.classList.remove("itemNav")},h=function(t){t.classList.add("imageDisplayNumber")},d=function(t){console.log(t),o=t,o.forEach(function(t){return p(t)})},p=function(t){console.log(t);var e=document.createElement("div"),r=document.createElement("p"),n=document.createElement("p"),o=document.createElement("img");r.textContent=""+t.titel,n.textContent=""+t.naam,o.setAttribute("src",""+t.img),o.setAttribute("width","100"),o.setAttribute("height","100"),o.classList.add("imagePreasidium"),e.appendChild(r),e.appendChild(n),e.appendChild(o),e.classList.add("praesidumFoto"),i.appendChild(e),s.appendChild(i)},y=function(t){console.log(t);var e=t.currentTarget,r=e.children[1];console.log(r),r.classList.contains("active")?r.classList.remove("active"):r.classList.add("active")};!function(){r=document.querySelectorAll(".marginNumbers"),console.log(r),r.forEach(function(t){return t.addEventListener("mouseover",u)});t("../assets/data/personen.json").then(function(t){return t.json()}).then(function(t){return d(t)}),document.querySelectorAll(".updateLeden").forEach(function(t){t.addEventListener("click",y),console.log(t)})}()}).call(e,r(3))},function(t,e,r){(function(e,r){(function(){!function(t){"use strict";function e(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function n(t){return"string"!=typeof t&&(t=String(t)),t}function o(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return b.iterable&&(e[Symbol.iterator]=function(){return e}),e}function i(t){this.map={},t instanceof i?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function s(t){if(t.bodyUsed)return r.reject(new TypeError("Already read"));t.bodyUsed=!0}function u(t){return new r(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function a(t){var e=new FileReader,r=u(e);return e.readAsArrayBuffer(t),r}function c(t){var e=new FileReader,r=u(e);return e.readAsText(t),r}function f(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}function l(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function h(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"==typeof t)this._bodyText=t;else if(b.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(b.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(b.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(b.arrayBuffer&&b.blob&&_(t))this._bodyArrayBuffer=l(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!b.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!g(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=l(t)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):b.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},b.blob&&(this.blob=function(){var t=s(this);if(t)return t;if(this._bodyBlob)return r.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return r.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return r.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?s(this)||r.resolve(this._bodyArrayBuffer):this.blob().then(a)}),this.text=function(){var t=s(this);if(t)return t;if(this._bodyBlob)return c(this._bodyBlob);if(this._bodyArrayBuffer)return r.resolve(f(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return r.resolve(this._bodyText)},b.formData&&(this.formData=function(){return this.text().then(y)}),this.json=function(){return this.text().then(JSON.parse)},this}function d(t){var e=t.toUpperCase();return A.indexOf(e)>-1?e:t}function p(t,e){e=e||{};var r=e.body;if(t instanceof p){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new i(t.headers)),this.method=t.method,this.mode=t.mode,r||null==t._bodyInit||(r=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new i(e.headers)),this.method=d(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function y(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}}),e}function m(t){var e=new i;return t.split(/\r?\n/).forEach(function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}}),e}function v(t,e){e||(e={}),this.type="default",this.status="status"in e?e.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new i(e.headers),this.url=e.url||"",this._initBody(t)}if(!t.fetch){var b={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(b.arrayBuffer)var w=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],_=function(t){return t&&DataView.prototype.isPrototypeOf(t)},g=ArrayBuffer.isView||function(t){return t&&w.indexOf(Object.prototype.toString.call(t))>-1};i.prototype.append=function(t,r){t=e(t),r=n(r);var o=this.map[t];this.map[t]=o?o+","+r:r},i.prototype.delete=function(t){delete this.map[e(t)]},i.prototype.get=function(t){return t=e(t),this.has(t)?this.map[t]:null},i.prototype.has=function(t){return this.map.hasOwnProperty(e(t))},i.prototype.set=function(t,r){this.map[e(t)]=n(r)},i.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},i.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),o(t)},i.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),o(t)},i.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),o(t)},b.iterable&&(i.prototype[Symbol.iterator]=i.prototype.entries);var A=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];p.prototype.clone=function(){return new p(this,{body:this._bodyInit})},h.call(p.prototype),h.call(v.prototype),v.prototype.clone=function(){return new v(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new i(this.headers),url:this.url})},v.error=function(){var t=new v(null,{status:0,statusText:""});return t.type="error",t};var T=[301,302,303,307,308];v.redirect=function(t,e){if(-1===T.indexOf(e))throw new RangeError("Invalid status code");return new v(null,{status:e,headers:{location:t}})},t.Headers=i,t.Request=p,t.Response=v,t.fetch=function(t,e){return new r(function(r,n){var o=new p(t,e),i=new XMLHttpRequest;i.onload=function(){var t={status:i.status,statusText:i.statusText,headers:m(i.getAllResponseHeaders()||"")};t.url="responseURL"in i?i.responseURL:t.headers.get("X-Request-URL");var e="response"in i?i.response:i.responseText;r(new v(e,t))},i.onerror=function(){n(new TypeError("Network request failed"))},i.ontimeout=function(){n(new TypeError("Network request failed"))},i.open(o.method,o.url,!0),"include"===o.credentials&&(i.withCredentials=!0),"responseType"in i&&b.blob&&(i.responseType="blob"),o.headers.forEach(function(t,e){i.setRequestHeader(e,t)}),i.send(void 0===o._bodyInit?null:o._bodyInit)})},t.fetch.polyfill=!0}}("undefined"!=typeof self?self:this),t.exports=e.fetch}).call(e)}).call(e,r(0),r(4))},function(t,e,r){(function(e,r){/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.4+314e4831
 */
!function(e,r){t.exports=r()}(0,function(){"use strict";function t(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)}function n(t){return"function"==typeof t}function o(t){M=t}function i(t){H=t}function s(){return void 0!==k?function(){k(a)}:u()}function u(){var t=setTimeout;return function(){return t(a,1)}}function a(){for(var t=0;t<N;t+=2){(0,z[t])(z[t+1]),z[t]=void 0,z[t+1]=void 0}N=0}function c(t,e){var r=this,n=new this.constructor(l);void 0===n[W]&&L(n);var o=r._state;if(o){var i=arguments[o-1];H(function(){return B(o,n,i,r._result)})}else T(r,n,t,e);return n}function f(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var r=new e(l);return w(r,t),r}function l(){}function h(){return new TypeError("You cannot resolve a promise with itself")}function d(){return new TypeError("A promises callback cannot return that same promise.")}function p(t){try{return t.then}catch(t){return tt.error=t,tt}}function y(t,e,r,n){try{t.call(e,r,n)}catch(t){return t}}function m(t,e,r){H(function(t){var n=!1,o=y(r,e,function(r){n||(n=!0,e!==r?w(t,r):g(t,r))},function(e){n||(n=!0,A(t,e))},"Settle: "+(t._label||" unknown promise"));!n&&o&&(n=!0,A(t,o))},t)}function v(t,e){e._state===Q?g(t,e._result):e._state===Z?A(t,e._result):T(e,void 0,function(e){return w(t,e)},function(e){return A(t,e)})}function b(t,e,r){e.constructor===t.constructor&&r===c&&e.constructor.resolve===f?v(t,e):r===tt?(A(t,tt.error),tt.error=null):void 0===r?g(t,e):n(r)?m(t,e,r):g(t,e)}function w(e,r){e===r?A(e,h()):t(r)?b(e,r,p(r)):g(e,r)}function _(t){t._onerror&&t._onerror(t._result),E(t)}function g(t,e){t._state===$&&(t._result=e,t._state=Q,0!==t._subscribers.length&&H(E,t))}function A(t,e){t._state===$&&(t._state=Z,t._result=e,H(_,t))}function T(t,e,r,n){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+Q]=r,o[i+Z]=n,0===i&&t._state&&H(E,t)}function E(t){var e=t._subscribers,r=t._state;if(0!==e.length){for(var n=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)n=e[s],o=e[s+r],n?B(r,n,o,i):o(i);t._subscribers.length=0}}function x(t,e){try{return t(e)}catch(t){return tt.error=t,tt}}function B(t,e,r,o){var i=n(r),s=void 0,u=void 0,a=void 0,c=void 0;if(i){if(s=x(r,o),s===tt?(c=!0,u=s.error,s.error=null):a=!0,e===s)return void A(e,d())}else s=o,a=!0;e._state!==$||(i&&a?w(e,s):c?A(e,u):t===Q?g(e,s):t===Z&&A(e,s))}function S(t,e){try{e(function(e){w(t,e)},function(e){A(t,e)})}catch(e){A(t,e)}}function j(){return et++}function L(t){t[W]=et++,t._state=void 0,t._result=void 0,t._subscribers=[]}function O(){return new Error("Array Methods must be provided an Array")}function P(t){return new rt(this,t).promise}function U(t){var e=this;return new e(q(t)?function(r,n){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(r,n)}:function(t,e){return e(new TypeError("You must pass an array to race."))})}function C(t){var e=this,r=new e(l);return A(r,t),r}function D(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function I(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function F(){var t=void 0;if(void 0!==r)t=r;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var n=null;try{n=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===n&&!e.cast)return}t.Promise=nt}var R=void 0;R=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var q=R,N=0,k=void 0,M=void 0,H=function(t,e){z[N]=t,z[N+1]=e,2===(N+=2)&&(M?M(a):J())},G="undefined"!=typeof window?window:void 0,Y=G||{},K=Y.MutationObserver||Y.WebKitMutationObserver,V="undefined"==typeof self&&void 0!==e&&"[object process]"==={}.toString.call(e),X="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,z=new Array(1e3),J=void 0;J=V?function(){return function(){return e.nextTick(a)}}():K?function(){var t=0,e=new K(a),r=document.createTextNode("");return e.observe(r,{characterData:!0}),function(){r.data=t=++t%2}}():X?function(){var t=new MessageChannel;return t.port1.onmessage=a,function(){return t.port2.postMessage(0)}}():void 0===G?function(){try{var t=Function("return this")().require("vertx");return k=t.runOnLoop||t.runOnContext,s()}catch(t){return u()}}():u();var W=Math.random().toString(36).substring(2),$=void 0,Q=1,Z=2,tt={error:null},et=0,rt=function(){function t(t,e){this._instanceConstructor=t,this.promise=new t(l),this.promise[W]||L(this.promise),q(e)?(this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?g(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&g(this.promise,this._result))):A(this.promise,O())}return t.prototype._enumerate=function(t){for(var e=0;this._state===$&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var r=this._instanceConstructor,n=r.resolve;if(n===f){var o=p(t);if(o===c&&t._state!==$)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(r===nt){var i=new r(l);b(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new r(function(e){return e(t)}),e)}else this._willSettleAt(n(t),e)},t.prototype._settledAt=function(t,e,r){var n=this.promise;n._state===$&&(this._remaining--,t===Z?A(n,r):this._result[e]=r),0===this._remaining&&g(n,this._result)},t.prototype._willSettleAt=function(t,e){var r=this;T(t,void 0,function(t){return r._settledAt(Q,e,t)},function(t){return r._settledAt(Z,e,t)})},t}(),nt=function(){function t(e){this[W]=j(),this._result=this._state=void 0,this._subscribers=[],l!==e&&("function"!=typeof e&&D(),this instanceof t?S(this,e):I())}return t.prototype.catch=function(t){return this.then(null,t)},t.prototype.finally=function(t){var e=this,r=e.constructor;return e.then(function(e){return r.resolve(t()).then(function(){return e})},function(e){return r.resolve(t()).then(function(){throw e})})},t}();return nt.prototype.then=c,nt.all=P,nt.race=U,nt.resolve=f,nt.reject=C,nt._setScheduler=o,nt._setAsap=i,nt._asap=H,nt.polyfill=F,nt.Promise=nt,nt})}).call(e,r(5),r(0))},function(t,e){function r(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function o(t){if(f===setTimeout)return setTimeout(t,0);if((f===r||!f)&&setTimeout)return f=setTimeout,setTimeout(t,0);try{return f(t,0)}catch(e){try{return f.call(null,t,0)}catch(e){return f.call(this,t,0)}}}function i(t){if(l===clearTimeout)return clearTimeout(t);if((l===n||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(t);try{return l(t)}catch(e){try{return l.call(null,t)}catch(e){return l.call(this,t)}}}function s(){y&&d&&(y=!1,d.length?p=d.concat(p):m=-1,p.length&&u())}function u(){if(!y){var t=o(s);y=!0;for(var e=p.length;e;){for(d=p,p=[];++m<e;)d&&d[m].run();m=-1,e=p.length}d=null,y=!1,i(t)}}function a(t,e){this.fun=t,this.array=e}function c(){}var f,l,h=t.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:r}catch(t){f=r}try{l="function"==typeof clearTimeout?clearTimeout:n}catch(t){l=n}}();var d,p=[],y=!1,m=-1;h.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];p.push(new a(t,e)),1!==p.length||y||o(u)},a.prototype.run=function(){this.fun.apply(null,this.array)},h.title="browser",h.browser=!0,h.env={},h.argv=[],h.version="",h.versions={},h.on=c,h.addListener=c,h.once=c,h.off=c,h.removeListener=c,h.removeAllListeners=c,h.emit=c,h.prependListener=c,h.prependOnceListener=c,h.listeners=function(t){return[]},h.binding=function(t){throw new Error("process.binding is not supported")},h.cwd=function(){return"/"},h.chdir=function(t){throw new Error("process.chdir is not supported")},h.umask=function(){return 0}},function(t,e){}]);