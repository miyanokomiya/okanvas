parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"aSor":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.render=F,exports.hydrate=H,exports.h=exports.createElement=f,exports.Fragment=h,exports.createRef=d,exports.Component=v,exports.cloneElement=O,exports.createContext=R,exports.toChildArray=b,exports.__u=M,exports.options=exports.isValidElement=void 0;var e,t,n,_,l,o,r,u={},i=[],s=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function p(e,t){for(var n in t)e[n]=t[n];return e}function c(e){var t=e.parentNode;t&&t.removeChild(e)}function f(e,t,n){var _,l,o,r=arguments,u={};for(o in t)"key"==o?_=t[o]:"ref"==o?l=t[o]:u[o]=t[o];if(arguments.length>3)for(n=[n],o=3;o<arguments.length;o++)n.push(r[o]);if(null!=n&&(u.children=n),"function"==typeof e&&null!=e.defaultProps)for(o in e.defaultProps)void 0===u[o]&&(u[o]=e.defaultProps[o]);return a(e,u,_,l,null)}function a(t,n,_,l,o){var r={type:t,props:n,key:_,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++e.__v:o};return null!=e.vnode&&e.vnode(r),r}function d(){return{current:null}}function h(e){return e.children}function v(e,t){this.props=e,this.context=t}function y(e,t){if(null==t)return e.__?y(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?y(e):null}function m(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return m(e)}}function g(t){(!t.__d&&(t.__d=!0)&&n.push(t)&&!k.__r++||l!==e.debounceRendering)&&((l=e.debounceRendering)||_)(k)}function k(){for(var e;k.__r=n.length;)e=n.sort(function(e,t){return e.__v.__b-t.__v.__b}),n=[],e.some(function(e){var t,n,_,l,o,r,u;e.__d&&(r=(o=(t=e).__v).__e,(u=t.__P)&&(n=[],(_=p({},o)).__v=o.__v+1,l=A(u,o,_,t.__n,void 0!==u.ownerSVGElement,null!=o.__h?[r]:null,n,null==r?y(o):r,o.__h),D(n,o),l!=r&&m(o)))})}function x(e,t,n,_,l,o,r,s,p,f){var d,v,m,g,k,x,b,w=_&&_.__k||i,S=w.length;for(p==u&&(p=null!=r?r[0]:S?y(_,0):null),n.__k=[],d=0;d<t.length;d++)if(null!=(g=n.__k[d]=null==(g=t[d])||"boolean"==typeof g?null:"string"==typeof g||"number"==typeof g?a(null,g,null,null,g):Array.isArray(g)?a(h,{children:g},null,null,null):null!=g.__e||null!=g.__c?a(g.type,g.props,g.key,null,g.__v):g)){if(g.__=n,g.__b=n.__b+1,null===(m=w[d])||m&&g.key==m.key&&g.type===m.type)w[d]=void 0;else for(v=0;v<S;v++){if((m=w[v])&&g.key==m.key&&g.type===m.type){w[v]=void 0;break}m=null}k=A(e,g,m=m||u,l,o,r,s,p,f),(v=g.ref)&&m.ref!=v&&(b||(b=[]),m.ref&&b.push(m.ref,null,g),b.push(v,g.__c||k,g)),null!=k?(null==x&&(x=k),p=C(e,g,m,w,r,k,p),f||"option"!=n.type?"function"==typeof n.type&&(n.__d=p):e.value=""):p&&m.__e==p&&p.parentNode!=e&&(p=y(m))}if(n.__e=x,null!=r&&"function"!=typeof n.type)for(d=r.length;d--;)null!=r[d]&&c(r[d]);for(d=S;d--;)null!=w[d]&&M(w[d],w[d]);if(b)for(d=0;d<b.length;d++)L(b[d],b[++d],b[++d])}function b(e,t){return t=t||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some(function(e){b(e,t)}):t.push(e)),t}function C(e,t,n,_,l,o,r){var u,i,s;if(void 0!==t.__d)u=t.__d,t.__d=void 0;else if(l==n||o!=r||null==o.parentNode)e:if(null==r||r.parentNode!==e)e.appendChild(o),u=null;else{for(i=r,s=0;(i=i.nextSibling)&&s<_.length;s+=2)if(i==o)break e;e.insertBefore(o,r),u=r}return void 0!==u?u:o.nextSibling}function w(e,t,n,_,l){var o;for(o in n)"children"===o||"key"===o||o in t||P(e,o,null,n[o],_);for(o in t)l&&"function"!=typeof t[o]||"children"===o||"key"===o||"value"===o||"checked"===o||n[o]===t[o]||P(e,o,t[o],n[o],_)}function S(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||s.test(t)?n:n+"px"}function P(e,t,n,_,l){var o,r,u;if(l&&"className"==t&&(t="class"),"style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof _&&(e.style.cssText=_=""),_)for(t in _)n&&t in n||S(e.style,t,"");if(n)for(t in n)_&&n[t]===_[t]||S(e.style,t,n[t])}else"o"===t[0]&&"n"===t[1]?(o=t!==(t=t.replace(/Capture$/,"")),(r=t.toLowerCase())in e&&(t=r),t=t.slice(2),e.l||(e.l={}),e.l[t+o]=n,u=o?N:E,n?_||e.addEventListener(t,u,o):e.removeEventListener(t,u,o)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&"download"!==t&&"href"!==t&&!l&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function E(t){this.l[t.type+!1](e.event?e.event(t):t)}function N(t){this.l[t.type+!0](e.event?e.event(t):t)}function U(e,t,n){var _,l;for(_=0;_<e.__k.length;_++)(l=e.__k[_])&&(l.__=e,l.__e&&("function"==typeof l.type&&l.__k.length>1&&U(l,t,n),t=C(n,l,l,e.__k,null,l.__e,t),"function"==typeof e.type&&(e.__d=t)))}function A(t,n,_,l,o,r,u,i,s){var c,f,a,d,y,m,g,k,b,C,w,S=n.type;if(void 0!==n.constructor)return null;null!=_.__h&&(s=_.__h,i=n.__e=_.__e,n.__h=null,r=[i]),(c=e.__b)&&c(n);try{e:if("function"==typeof S){if(k=n.props,b=(c=S.contextType)&&l[c.__c],C=c?b?b.props.value:c.__:l,_.__c?g=(f=n.__c=_.__c).__=f.__E:("prototype"in S&&S.prototype.render?n.__c=f=new S(k,C):(n.__c=f=new v(k,C),f.constructor=S,f.render=W),b&&b.sub(f),f.props=k,f.state||(f.state={}),f.context=C,f.__n=l,a=f.__d=!0,f.__h=[]),null==f.__s&&(f.__s=f.state),null!=S.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=p({},f.__s)),p(f.__s,S.getDerivedStateFromProps(k,f.__s))),d=f.props,y=f.state,a)null==S.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==S.getDerivedStateFromProps&&k!==d&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(k,C),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(k,f.__s,C)||n.__v===_.__v){f.props=k,f.state=f.__s,n.__v!==_.__v&&(f.__d=!1),f.__v=n,n.__e=_.__e,n.__k=_.__k,f.__h.length&&u.push(f),U(n,i,t);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(k,f.__s,C),null!=f.componentDidUpdate&&f.__h.push(function(){f.componentDidUpdate(d,y,m)})}f.context=C,f.props=k,f.state=f.__s,(c=e.__r)&&c(n),f.__d=!1,f.__v=n,f.__P=t,c=f.render(f.props,f.state,f.context),f.state=f.__s,null!=f.getChildContext&&(l=p(p({},l),f.getChildContext())),a||null==f.getSnapshotBeforeUpdate||(m=f.getSnapshotBeforeUpdate(d,y)),w=null!=c&&c.type==h&&null==c.key?c.props.children:c,x(t,Array.isArray(w)?w:[w],n,_,l,o,r,u,i,s),f.base=n.__e,n.__h=null,f.__h.length&&u.push(f),g&&(f.__E=f.__=null),f.__e=!1}else null==r&&n.__v===_.__v?(n.__k=_.__k,n.__e=_.__e):n.__e=T(_.__e,n,_,l,o,r,u,s);(c=e.diffed)&&c(n)}catch(t){n.__v=null,(s||null!=r)&&(n.__e=i,n.__h=!!s,r[r.indexOf(i)]=null),e.__e(t,n,_)}return n.__e}function D(t,n){e.__c&&e.__c(n,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(e){e.call(n)})}catch(t){e.__e(t,n.__v)}})}function T(e,t,n,_,l,o,r,s){var p,c,f,a,d,h=n.props,v=t.props;if(l="svg"===t.type||l,null!=o)for(p=0;p<o.length;p++)if(null!=(c=o[p])&&((null===t.type?3===c.nodeType:c.localName===t.type)||e==c)){e=c,o[p]=null;break}if(null==e){if(null===t.type)return document.createTextNode(v);e=l?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,v.is&&{is:v.is}),o=null,s=!1}if(null===t.type)h===v||s&&e.data===v||(e.data=v);else{if(null!=o&&(o=i.slice.call(e.childNodes)),f=(h=n.props||u).dangerouslySetInnerHTML,a=v.dangerouslySetInnerHTML,!s){if(null!=o)for(h={},d=0;d<e.attributes.length;d++)h[e.attributes[d].name]=e.attributes[d].value;(a||f)&&(a&&(f&&a.__html==f.__html||a.__html===e.innerHTML)||(e.innerHTML=a&&a.__html||""))}w(e,v,h,l,s),a?t.__k=[]:(p=t.props.children,x(e,Array.isArray(p)?p:[p],t,n,_,"foreignObject"!==t.type&&l,o,r,u,s)),s||("value"in v&&void 0!==(p=v.value)&&(p!==e.value||"progress"===t.type&&!p)&&P(e,"value",p,h.value,!1),"checked"in v&&void 0!==(p=v.checked)&&p!==e.checked&&P(e,"checked",p,h.checked,!1))}return e}function L(t,n,_){try{"function"==typeof t?t(n):t.current=n}catch(t){e.__e(t,_)}}function M(t,n,_){var l,o,r;if(e.unmount&&e.unmount(t),(l=t.ref)&&(l.current&&l.current!==t.__e||L(l,null,n)),_||"function"==typeof t.type||(_=null!=(o=t.__e)),t.__e=t.__d=void 0,null!=(l=t.__c)){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(t){e.__e(t,n)}l.base=l.__P=null}if(l=t.__k)for(r=0;r<l.length;r++)l[r]&&M(l[r],n,_);null!=o&&c(o)}function W(e,t,n){return this.constructor(e,n)}function F(t,n,_){var l,r,s;e.__&&e.__(t,n),r=(l=_===o)?null:_&&_.__k||n.__k,t=f(h,null,[t]),s=[],A(n,(l?n:_||n).__k=t,r||u,u,void 0!==n.ownerSVGElement,_&&!l?[_]:r?null:n.childNodes.length?i.slice.call(n.childNodes):null,s,_||u,l),D(s,t)}function H(e,t){F(e,t,o)}function O(e,t,n){var _,l,o,r=arguments,u=p({},e.props);for(o in t)"key"==o?_=t[o]:"ref"==o?l=t[o]:u[o]=t[o];if(arguments.length>3)for(n=[n],o=3;o<arguments.length;o++)n.push(r[o]);return null!=n&&(u.children=n),a(e.type,u,_||e.key,l||e.ref,null)}function R(e,t){var n={__c:t="__cC"+r++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e,n,_){return this.getChildContext||(n=[],(_={})[t]=this,this.getChildContext=function(){return _},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some(g)},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}exports.isValidElement=t,exports.options=e,exports.options=e={__e:function(e,t){for(var n,_,l,o=t.__h;t=t.__;)if((n=t.__c)&&!n.__)try{if((_=n.constructor)&&null!=_.getDerivedStateFromError&&(n.setState(_.getDerivedStateFromError(e)),l=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),l=n.__d),l)return t.__h=o,n.__E=n}catch(t){e=t}throw e},__v:0},exports.isValidElement=t=function(e){return null!=e&&void 0===e.constructor},v.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=p({},this.state),"function"==typeof e&&(e=e(p({},n),this.props)),e&&p(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),g(this))},v.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),g(this))},v.prototype.render=h,n=[],_="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,k.__r=0,o=u,r=0;
},{}],"MwGB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.useState=p,exports.useReducer=h,exports.useEffect=v,exports.useLayoutEffect=l,exports.useRef=m,exports.useImperativeHandle=H,exports.useMemo=d,exports.useCallback=x,exports.useContext=y,exports.useDebugValue=E,exports.useErrorBoundary=b;var _,n,t,o=require("preact"),e=0,u=[],r=o.options.__b,i=o.options.__r,c=o.options.diffed,s=o.options.__c,f=o.options.unmount;function a(_,t){o.options.__h&&o.options.__h(n,_,e||t),e=0;var u=n.__H||(n.__H={__:[],__h:[]});return _>=u.__.length&&u.__.push({}),u.__[_]}function p(_){return e=1,h(C,_)}function h(t,o,e){var u=a(_++,2);return u.t=t,u.__c||(u.__=[e?e(o):C(void 0,o),function(_){var n=u.t(u.__[0],_);u.__[0]!==n&&(u.__=[n,u.__[1]],u.__c.setState({}))}],u.__c=n),u.__}function v(t,e){var u=a(_++,3);!o.options.__s&&F(u.__H,e)&&(u.__=t,u.__H=e,n.__H.__h.push(u))}function l(t,e){var u=a(_++,4);!o.options.__s&&F(u.__H,e)&&(u.__=t,u.__H=e,n.__h.push(u))}function m(_){return e=5,d(function(){return{current:_}},[])}function H(_,n,t){e=6,l(function(){"function"==typeof _?_(n()):_&&(_.current=n())},null==t?t:t.concat(_))}function d(n,t){var o=a(_++,7);return F(o.__H,t)&&(o.__=n(),o.__H=t,o.__h=n),o.__}function x(_,n){return e=8,d(function(){return _},n)}function y(t){var o=n.context[t.__c],e=a(_++,9);return e.__c=t,o?(null==e.__&&(e.__=!0,o.sub(n)),o.props.value):t.__}function E(_,n){o.options.useDebugValue&&o.options.useDebugValue(n?n(_):_)}function b(t){var o=a(_++,10),e=p();return o.__=t,n.componentDidCatch||(n.componentDidCatch=function(_){o.__&&o.__(_),e[1](_)}),[e[0],function(){e[1](void 0)}]}function g(){u.forEach(function(_){if(_.__P)try{_.__H.__h.forEach(A),_.__H.__h.forEach(D),_.__H.__h=[]}catch(n){_.__H.__h=[],o.options.__e(n,_.__v)}}),u=[]}o.options.__b=function(_){n=null,r&&r(_)},o.options.__r=function(t){i&&i(t),_=0;var o=(n=t.__c).__H;o&&(o.__h.forEach(A),o.__h.forEach(D),o.__h=[])},o.options.diffed=function(_){c&&c(_);var e=_.__c;e&&e.__H&&e.__H.__h.length&&(1!==u.push(e)&&t===o.options.requestAnimationFrame||((t=o.options.requestAnimationFrame)||function(_){var n,t=function(){clearTimeout(o),q&&cancelAnimationFrame(n),setTimeout(_)},o=setTimeout(t,100);q&&(n=requestAnimationFrame(t))})(g)),n=void 0},o.options.__c=function(_,n){n.some(function(_){try{_.__h.forEach(A),_.__h=_.__h.filter(function(_){return!_.__||D(_)})}catch(t){n.some(function(_){_.__h&&(_.__h=[])}),n=[],o.options.__e(t,_.__v)}}),s&&s(_,n)},o.options.unmount=function(_){f&&f(_);var n=_.__c;if(n&&n.__H)try{n.__H.__.forEach(A)}catch(_){o.options.__e(_,n.__v)}};var q="function"==typeof requestAnimationFrame;function A(_){var t=n;"function"==typeof _.__c&&_.__c(),n=t}function D(_){var t=n;_.__c=_.__(),n=t}function F(_,n){return!_||_.length!==n.length||n.some(function(n,t){return n!==_[t]})}function C(_,n){return"function"==typeof n?n(_):n}
},{"preact":"aSor"}],"gkAU":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});
},{}],"xTEr":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getRate=e,exports.getViewBoxSize=r,exports.getViewBoxMargin=i,exports.getCentralizedViewBox=h;var t=function(){return(t=Object.assign||function(t){for(var e,r=1,i=arguments.length;r<i;r++)for(var h in e=arguments[r])Object.prototype.hasOwnProperty.call(e,h)&&(t[h]=e[h]);return t}).apply(this,arguments)};function e(t,e){if(!e)return{minRate:1,maxRate:1,rateW:1,rateH:1};var r=e.width/t.width,i=e.height/t.height;return{minRate:Math.min(r,i),maxRate:Math.max(r,i),rateW:r,rateH:i}}function r(t,e,r){return t?e>r?{width:t.width,height:t.height/r*e}:{width:t.width/e*r,height:t.height}:{width:1,height:1}}function i(t,e){return e?{x:(t.width-e.width)/2,y:(t.height-e.height)/2}:{x:0,y:0}}function h(h,n){var a=e(h,n),o=r(n,a.rateW,a.rateH),g=i(o,n);return t({x:-g.x,y:-g.y},o)}
},{}],"pHvP":[function(require,module,exports) {
function t(t,n,r){var i=!1,u=!1;return function(){u=r&&!i;var e=this,o=arguments;if(i||(i=!0,setTimeout(function(){if(i=!1,!r)return t.apply(e,o)},n)),u)return u=!1,t.apply(this,arguments)}}module.exports=t;
},{}],"HHJ7":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.isTouch=u,exports.isMulitTouch=i,exports.isTouchExist=s,exports.getPagePosition=a,exports.getPointInTarget=c,exports.getTouchPointsInTarget=w,exports.useDrag=v,exports.useWindowPointerEffect=d;var e=n(require("just-throttle"));function n(e){return e&&e.__esModule?e:{default:e}}var o=function(){return(o=Object.assign||function(e){for(var n,o=1,t=arguments.length;o<t;o++)for(var r in n=arguments[o])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e}).apply(this,arguments)},t=1e3/60;function r(){return"ontouchstart"in window}function u(e){return"touches"in e}function i(e){return u(e)&&e.touches.length>1}function s(e){return u(e)&&e.touches.length>0}function a(e){return u(e)?{x:e.touches[0].pageX,y:e.touches[0].pageY}:{x:e.pageX,y:e.pageY}}function c(e){var n,o,t=e.currentTarget;if(!t)return{x:0,y:0};var r=t.getBoundingClientRect(),i=r.left+window.pageXOffset,s=r.top+window.pageYOffset;if(u(e)){var a=e.touches[0];n=a.pageX-i,o=a.pageY-s}else n=e.pageX-i,o=e.pageY-s;return{x:n,y:o}}function w(e){var n=e.currentTarget;if(!n)return[];for(var o=[],t=n.getBoundingClientRect(),r=t.left+window.pageXOffset,u=t.top+window.pageYOffset,i=0;i<e.touches.length;i++){var s=e.touches[i];o.push({x:s.pageX-r,y:s.pageY-u})}return o}function v(n,r){void 0===r&&(r=function(){});var u=!1,i=null,s=null,c=null,w=0,v=(0,e.default)(function(){u&&i&&c&&s&&(n({base:i,p:o({},c),d:{x:c.x-s.x,y:c.y-s.y}}),s=o({},c))},t,!0);return{onDown:function(e){u=!0,i=a(e),c=o({},i),s=o({},i),w=Date.now()},onMove:function(e){u&&(e.preventDefault(),c=a(e),v())},onUp:function(){c&&Date.now()-w<100?r(o({},c)):u&&i&&c&&n({base:i,p:o({},c),d:{x:0,y:0}}),u=!1,i=null,c=null,s=null,w=0}}}function d(e){var n=r();return e.onDown&&(window.addEventListener("mousedown",e.onDown,!1),n&&window.addEventListener("touchstart",e.onDown,!1)),e.onMove&&(window.addEventListener("mousemove",e.onMove,!1),n&&window.addEventListener("touchmove",e.onMove,{capture:!1,passive:!1})),e.onUp&&(window.addEventListener("mouseup",e.onUp,!1),window.addEventListener("mouseleave",e.onUp,!1),n&&(window.addEventListener("touchend",e.onUp,!1),window.addEventListener("touchcancel",e.onUp,!1))),function(){e.onDown&&(window.removeEventListener("mousedown",e.onDown,!1),n&&window.removeEventListener("touchstart",e.onDown,!1)),e.onMove&&(window.removeEventListener("mousemove",e.onMove,!1),n&&window.removeEventListener("touchmove",e.onMove,{capture:!1})),e.onUp&&(window.removeEventListener("mouseup",e.onUp,!1),window.removeEventListener("mouseleave",e.onUp,!1),n&&(window.removeEventListener("touchend",e.onUp,!1),window.removeEventListener("touchcancel",e.onUp,!1)))}}
},{"just-throttle":"pHvP"}],"CeiP":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.fileToBase64=n,exports.base64ToImage=r,exports.clipImage=i,exports.drawRectOnImage=a;var e=function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{u(r.next(e))}catch(t){i(t)}}function c(e){try{u(r.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,c)}u((r=r.apply(e,t||[])).next())})},t=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(c){i=[6,c],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};function n(e){return new Promise(function(t,n){var r=new FileReader;r.onload=function(){return t(r.result)},r.onerror=n,r.readAsDataURL(e)})}function r(e){return new Promise(function(t,n){var r=new Image;r.onload=function(){return t(r)},r.onerror=n,r.src=e})}function o(n){return e(this,void 0,Promise,function(){return t(this,function(e){switch(e.label){case 0:return n instanceof Image?[2,n]:[4,r(n)];case 1:return[2,e.sent()]}})})}function i(n,r,i){return e(this,void 0,Promise,function(){var e,a,c,u;return t(this,function(t){switch(t.label){case 0:return e=null!=i?i:{width:r.width,height:r.height},[4,o(n)];case 1:if(a=t.sent(),(c=document.createElement("canvas")).width=e.width,c.height=e.height,!(u=c.getContext("2d")))throw new Error("Failed to get 2d-context from a canvas.");return u.drawImage(a,r.x,r.y,r.width,r.height,0,0,c.width,c.height),[2,c.toDataURL()]}})})}function a(n,r,i){return e(this,void 0,Promise,function(){var e,a,c;return t(this,function(t){switch(t.label){case 0:return[4,o(n)];case 1:if(e=t.sent(),(a=document.createElement("canvas")).width=e.width,a.height=e.height,!(c=a.getContext("2d")))throw new Error("Failed to get 2d-context from a canvas.");return c.drawImage(e,0,0,e.width,e.height),i?i(c):(c.strokeStyle="red",c.lineWidth=3),c.strokeRect(r.x,r.y,r.width,r.height),[2,a.toDataURL()]}})})}
},{}],"i2Nf":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./types");Object.keys(e).forEach(function(r){"default"!==r&&"__esModule"!==r&&(r in exports&&exports[r]===e[r]||Object.defineProperty(exports,r,{enumerable:!0,get:function(){return e[r]}}))});var r=require("./canvas");Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&(e in exports&&exports[e]===r[e]||Object.defineProperty(exports,e,{enumerable:!0,get:function(){return r[e]}}))});var t=require("./events");Object.keys(t).forEach(function(e){"default"!==e&&"__esModule"!==e&&(e in exports&&exports[e]===t[e]||Object.defineProperty(exports,e,{enumerable:!0,get:function(){return t[e]}}))});var n=require("./files");Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&(e in exports&&exports[e]===n[e]||Object.defineProperty(exports,e,{enumerable:!0,get:function(){return n[e]}}))});
},{"./types":"gkAU","./canvas":"xTEr","./events":"HHJ7","./files":"CeiP"}],"ROm1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ImageRect=c,exports.useFileToBase64=s,exports.ReadImageFileDemo=f,exports.ClipImageDemo=p;var e=require("preact"),t=require("preact/hooks"),n=i(require("../src/okanvas"));function r(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return r=function(){return e},e}function i(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=r();if(t&&t.has(e))return t.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=i?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}return n.default=e,t&&t.set(e,n),n}var a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},o=function(e,t,n,r){return new(n||(n=Promise))(function(i,a){function o(e){try{l(r.next(e))}catch(t){a(t)}}function u(e){try{l(r.throw(e))}catch(t){a(t)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(o,u)}l((r=r.apply(e,t||[])).next())})},u=function(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(u){a=[6,u],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},l={flexCenter:{display:"flex",alignItems:"center",justifyContent:"center"}};function c(t){return(0,e.h)("div",{style:a(a({},l.flexCenter),{border:"1px solid #000",width:"200px",height:"200px"})},[(0,e.h)("img",{src:t.src,style:{maxWidth:"100%",maxHeight:"100%"}})])}function s(){var e=this,r=(0,t.useState)(""),i=r[0],a=r[1];return{base64:i,onInput:(0,t.useCallback)(function(t){return o(e,void 0,void 0,function(){var e,r;return u(this,function(i){switch(i.label){case 0:return(null===(r=null==t?void 0:t.target)||void 0===r?void 0:r.files)?[4,n.fileToBase64(t.target.files[0])]:[2];case 1:return e=i.sent(),a(e),[2]}})})},[])}}function f(){var t=s(),n=t.base64,r=t.onInput;return(0,e.h)("div",null,[(0,e.h)("h2",null,"fileToBase64"),(0,e.h)("input",{type:"file",onInput:r,accept:"image/*"},"fileToBase64"),c({src:n})])}function p(){var r=this,i=(0,t.useState)(""),a=i[0],l=i[1],s=(0,t.useState)(""),f=s[0],p=s[1],h=(0,t.useState)(""),d=h[0],v=h[1],g=(0,t.useCallback)(function(e){return o(r,void 0,void 0,function(){var t,r,i,a,o,c,s;return u(this,function(u){switch(u.label){case 0:return(null===(s=null==e?void 0:e.target)||void 0===s?void 0:s.files)?[4,n.fileToBase64(e.target.files[0])]:[2];case 1:return t=u.sent(),[4,n.base64ToImage(t)];case 2:return r=u.sent(),i={x:.3*r.width,y:.2*r.height,width:.4*r.width,height:.6*r.height},[4,n.drawRectOnImage(r,i)];case 3:return a=u.sent(),[4,n.clipImage(r,i)];case 4:return o=u.sent(),[4,n.clipImage(r,i,{width:2*i.width,height:i.height})];case 5:return c=u.sent(),l(a),p(o),v(c),[2]}})})},[]);return(0,e.h)("div",null,[(0,e.h)("h2",null,"clipImage"),(0,e.h)("input",{type:"file",accept:"image/*",onInput:g},"clipImage"),(0,e.h)("p",null,"src & rectangle"),c({src:a}),(0,e.h)("p",null,"clipped"),c({src:f}),(0,e.h)("p",null,"clipped & resized: width * 2"),c({src:d})])}
},{"preact":"aSor","preact/hooks":"MwGB","../src/okanvas":"i2Nf"}],"kXwH":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.UseDragDemo=i;var e=require("preact"),t=require("preact/hooks"),r=o(require("../src/okanvas"));function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function o(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var a=o?Object.getOwnPropertyDescriptor(e,u):null;a&&(a.get||a.set)?Object.defineProperty(r,u,a):r[u]=e[u]}return r.default=e,t&&t.set(e,r),r}var u=function(){return(u=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function a(t,r){return r?(0,e.h)("p",null,t+": { x: "+r.x+", y: "+r.y+" }"):(0,e.h)("p",null,t+": null")}function i(){var n=(0,t.useState)(null),o=n[0],i=n[1],l=(0,t.useState)(null),f=l[0],s=l[1],c=(0,t.useState)(null),p=c[0],v=c[1],h=(0,t.useState)(null),y=h[0],d=h[1];return(0,t.useEffect)(function(){var e=r.useDrag(function(e){i(e.base),s(e.p),v(e.d)});return d(e),r.useWindowPointerEffect({onMove:e.onMove,onUp:e.onUp})},[]),(0,e.h)("div",null,[(0,e.h)("h2",null,"useDrag"),a("base",o),a("current",f),a("diff",p),(0,e.h)("div",u(u({},y?{onMouseDown:y.onDown,onTouchStart:y.onDown}:{}),{style:{border:"1px solid #000",width:"200px",height:"200px"}}))])}
},{"preact":"aSor","preact/hooks":"MwGB","../src/okanvas":"i2Nf"}],"tbBa":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ClipDemo=l,exports.ClipCanvas=s;var e=require("preact"),t=require("preact/hooks"),n=o(require("../src/okanvas")),r=require("./files");function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function o(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var u=r?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}var u=function(){return(u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function a(e,t,n){var r=n,i=e.x-t.x,o=e.y-t.y,u=r.x*r.x+r.y*r.y,a=(r.x*i+r.y*o)/u;return{x:r.x*a,y:r.y*a}}function l(){var t=(0,r.useFileToBase64)(),n=t.base64,i=t.onInput;return(0,e.h)("div",null,[(0,e.h)("h2",null,"clipDemo"),(0,e.h)("input",{type:"file",onInput:i,accept:"image/*"},"fileToBase64"),(0,e.createElement)(s,{base64:n,clipSize:{width:160,height:90}})])}function s(r){var i=r.base64,o=r.clipSize,l=r.viewSize;if(!o||!l)return null;var s=(0,t.useState)(null),h=s[0],f=s[1],p=(0,t.useState)(u({x:0,y:0},o)),d=p[0],v=p[1],y=(0,t.useState)(null),w=y[0],g=y[1],x=(0,t.useState)(null),b=x[0],S=x[1],m=(0,t.useState)(null),M=m[0],z=m[1],O=(0,t.useState)(""),k=O[0],j=O[1];(0,t.useEffect)(function(){var e=n.useDrag(function(e){S(e)});return z(e),n.useWindowPointerEffect({onMove:e.onMove,onUp:function(){e.onUp(),j(""),S(null),g(null)}})},[]);var D=(0,t.useCallback)(function(e){M&&(j("move"),g(d),M.onDown(e))},[d,M]),P=(0,t.useCallback)(function(e){M&&(j("resize"),g(d),M.onDown(e))},[d,M]);(0,t.useEffect)(function(){i&&n.base64ToImage(i).then(function(e){f(e)})},[i]),(0,t.useEffect)(function(){v(n.getCentralizedViewBox(o,h))},[o,h]);var C=(0,t.useMemo)(function(){return n.getCentralizedViewBox(o,h)},[o,h]),E=(0,t.useMemo)(function(){return C.x+" "+C.y+" "+C.width+" "+C.height},[C]),B=(0,t.useMemo)(function(){return n.getRate(l,C).maxRate},[l,C]),R=(0,t.useMemo)(function(){return h?(0,e.h)("image",{href:i,x:0,y:0,width:h.width,height:h.height}):null},[i,h]);(0,t.useEffect)(function(){if(k&&b&&w)if("move"===k)v(u(u({},w),{x:w.x+(b.p.x-b.base.x)*B,y:w.y+(b.p.y-b.base.y)*B}));else if("resize"===k){var e=a({x:w.width+(b.p.x-b.base.x)*B,y:w.height+(b.p.y-b.base.y)*B},{x:0,y:0},{x:o.width,y:o.height});v(u(u({},w),{width:e.x,height:e.y}))}},[w,k,b,B,o]);var T=(0,t.useMemo)(function(){return h?c(d,B,{onStartMove:D,onStartResize:P}):null},[h,d,B,D,P]);return(0,e.h)("div",{style:{width:l.width+"px",height:l.height+"px",padding:"8px",border:"1px solid #000",backgroundColor:"#ccc",overflow:"hidden"}},[(0,e.h)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:E,style:{width:"100%",height:"100%",overflow:"visible"}},[R,T])])}function c(t,n,r){return(0,e.h)("g",{transform:"translate("+t.x+", "+t.y+")"},[(0,e.h)("rect",{x:0,y:0,width:t.width,height:t.height,fill:"none",stroke:"red","stroke-width":4*n}),(0,e.h)("g",{onMouseDown:null==r?void 0:r.onStartMove,onTouchStart:null==r?void 0:r.onStartMove},[(0,e.h)("circle",{cx:0,cy:0,r:8*n,fill:"red",stroke:"none"})]),(0,e.h)("g",{transform:"translate("+t.width+", "+t.height+")",onMouseDown:null==r?void 0:r.onStartResize,onTouchStart:null==r?void 0:r.onStartResize},[(0,e.h)("circle",{cx:0,cy:0,r:8*n,fill:"red",stroke:"none"})])])}s.defaultProps={clipSize:{width:200,height:200},viewSize:{width:200,height:200}};
},{"preact":"aSor","preact/hooks":"MwGB","../src/okanvas":"i2Nf","./files":"ROm1"}],"ZCfc":[function(require,module,exports) {
"use strict";var e=require("preact"),l=require("./files"),r=require("./events"),t=require("./clip"),i=function(){return(0,e.h)("div",null,[(0,e.h)("div",{style:{width:"200px",height:"301px"}},[(0,e.createElement)(t.ClipDemo,null)]),(0,e.createElement)(l.ReadImageFileDemo,null),(0,e.createElement)(l.ClipImageDemo,null),(0,e.createElement)(r.UseDragDemo,null)])};(0,e.render)(i(),document.body);
},{"preact":"aSor","./files":"ROm1","./events":"kXwH","./clip":"tbBa"}]},{},["ZCfc"], null)
//# sourceMappingURL=main.1c873393.js.map