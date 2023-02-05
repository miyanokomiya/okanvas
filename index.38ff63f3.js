// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"38PNf":[function(require,module,exports) {
var _preact = require("preact");
var _files = require("./files");
var _events = require("./events");
var _clip = require("./clip");
const App = ()=>(0, _preact.h)("div", null, [
        (0, _preact.h)("div", {
            style: {
                width: "200px",
                height: "301px"
            }
        }, [
            (0, _preact.createElement)((0, _clip.ClipDemo), null)
        ]),
        (0, _preact.createElement)((0, _files.ReadImageFileDemo), null),
        (0, _preact.createElement)((0, _files.ClipImageDemo), null),
        (0, _preact.createElement)((0, _events.UseDragDemo), null)
    ]);
(0, _preact.render)(App(), document.body);

},{"preact":"26zcy","./files":"hQ95k","./events":"aPnKd","./clip":"gDoBo"}],"26zcy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Component", ()=>d);
parcelHelpers.export(exports, "Fragment", ()=>p);
parcelHelpers.export(exports, "cloneElement", ()=>q);
parcelHelpers.export(exports, "createContext", ()=>B);
parcelHelpers.export(exports, "createElement", ()=>h);
parcelHelpers.export(exports, "createRef", ()=>y);
parcelHelpers.export(exports, "h", ()=>h);
parcelHelpers.export(exports, "hydrate", ()=>S);
parcelHelpers.export(exports, "isValidElement", ()=>i);
parcelHelpers.export(exports, "options", ()=>l);
parcelHelpers.export(exports, "render", ()=>P);
parcelHelpers.export(exports, "toChildArray", ()=>x);
var n, l, u, i, t, o, r, f = {}, e = [], c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function s(n, l) {
    for(var u in l)n[u] = l[u];
    return n;
}
function a(n) {
    var l = n.parentNode;
    l && l.removeChild(n);
}
function h(l, u, i) {
    var t, o, r, f = {};
    for(r in u)"key" == r ? t = u[r] : "ref" == r ? o = u[r] : f[r] = u[r];
    if (arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : i), "function" == typeof l && null != l.defaultProps) for(r in l.defaultProps)void 0 === f[r] && (f[r] = l.defaultProps[r]);
    return v(l, f, t, o, null);
}
function v(n, i, t, o, r) {
    var f = {
        type: n,
        props: i,
        key: t,
        ref: o,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: null == r ? ++u : r
    };
    return null == r && null != l.vnode && l.vnode(f), f;
}
function y() {
    return {
        current: null
    };
}
function p(n) {
    return n.children;
}
function d(n, l) {
    this.props = n, this.context = l;
}
function _(n, l) {
    if (null == l) return n.__ ? _(n.__, n.__.__k.indexOf(n) + 1) : null;
    for(var u; l < n.__k.length; l++)if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
    return "function" == typeof n.type ? _(n) : null;
}
function k(n) {
    var l, u;
    if (null != (n = n.__) && null != n.__c) {
        for(n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++)if (null != (u = n.__k[l]) && null != u.__e) {
            n.__e = n.__c.base = u.__e;
            break;
        }
        return k(n);
    }
}
function b(n) {
    (!n.__d && (n.__d = !0) && t.push(n) && !g.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || setTimeout)(g);
}
function g() {
    for(var n; g.__r = t.length;)n = t.sort(function(n, l) {
        return n.__v.__b - l.__v.__b;
    }), t = [], n.some(function(n) {
        var l, u, i, t, o, r;
        n.__d && (o = (t = (l = n).__v).__e, (r = l.__P) && (u = [], (i = s({}, t)).__v = t.__v + 1, j(r, t, i, l.__n, void 0 !== r.ownerSVGElement, null != t.__h ? [
            o
        ] : null, u, null == o ? _(t) : o, t.__h), z(u, t), t.__e != o && k(t)));
    });
}
function w(n, l, u, i, t, o, r, c, s, a) {
    var h, y, d, k, b, g, w, x = i && i.__k || e, C = x.length;
    for(u.__k = [], h = 0; h < l.length; h++)if (null != (k = u.__k[h] = null == (k = l[h]) || "boolean" == typeof k ? null : "string" == typeof k || "number" == typeof k || "bigint" == typeof k ? v(null, k, null, null, k) : Array.isArray(k) ? v(p, {
        children: k
    }, null, null, null) : k.__b > 0 ? v(k.type, k.props, k.key, k.ref ? k.ref : null, k.__v) : k)) {
        if (k.__ = u, k.__b = u.__b + 1, null === (d = x[h]) || d && k.key == d.key && k.type === d.type) x[h] = void 0;
        else for(y = 0; y < C; y++){
            if ((d = x[y]) && k.key == d.key && k.type === d.type) {
                x[y] = void 0;
                break;
            }
            d = null;
        }
        j(n, k, d = d || f, t, o, r, c, s, a), b = k.__e, (y = k.ref) && d.ref != y && (w || (w = []), d.ref && w.push(d.ref, null, k), w.push(y, k.__c || b, k)), null != b ? (null == g && (g = b), "function" == typeof k.type && k.__k === d.__k ? k.__d = s = m(k, s, n) : s = A(n, k, d, x, b, s), "function" == typeof u.type && (u.__d = s)) : s && d.__e == s && s.parentNode != n && (s = _(d));
    }
    for(u.__e = g, h = C; h--;)null != x[h] && N(x[h], x[h]);
    if (w) for(h = 0; h < w.length; h++)M(w[h], w[++h], w[++h]);
}
function m(n, l, u) {
    for(var i, t = n.__k, o = 0; t && o < t.length; o++)(i = t[o]) && (i.__ = n, l = "function" == typeof i.type ? m(i, l, u) : A(u, i, i, t, i.__e, l));
    return l;
}
function x(n, l) {
    return l = l || [], null == n || "boolean" == typeof n || (Array.isArray(n) ? n.some(function(n) {
        x(n, l);
    }) : l.push(n)), l;
}
function A(n, l, u, i, t, o) {
    var r, f, e;
    if (void 0 !== l.__d) r = l.__d, l.__d = void 0;
    else if (null == u || t != o || null == t.parentNode) n: if (null == o || o.parentNode !== n) n.appendChild(t), r = null;
    else {
        for(f = o, e = 0; (f = f.nextSibling) && e < i.length; e += 1)if (f == t) break n;
        n.insertBefore(t, o), r = o;
    }
    return void 0 !== r ? r : t.nextSibling;
}
function C(n, l, u, i, t) {
    var o;
    for(o in u)"children" === o || "key" === o || o in l || H(n, o, null, u[o], i);
    for(o in l)t && "function" != typeof l[o] || "children" === o || "key" === o || "value" === o || "checked" === o || u[o] === l[o] || H(n, o, l[o], u[o], i);
}
function $(n, l, u) {
    "-" === l[0] ? n.setProperty(l, u) : n[l] = null == u ? "" : "number" != typeof u || c.test(l) ? u : u + "px";
}
function H(n, l, u, i, t) {
    var o;
    n: if ("style" === l) {
        if ("string" == typeof u) n.style.cssText = u;
        else {
            if ("string" == typeof i && (n.style.cssText = i = ""), i) for(l in i)u && l in u || $(n.style, l, "");
            if (u) for(l in u)i && u[l] === i[l] || $(n.style, l, u[l]);
        }
    } else if ("o" === l[0] && "n" === l[1]) o = l !== (l = l.replace(/Capture$/, "")), l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + o] = u, u ? i || n.addEventListener(l, o ? T : I, o) : n.removeEventListener(l, o ? T : I, o);
    else if ("dangerouslySetInnerHTML" !== l) {
        if (t) l = l.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("href" !== l && "list" !== l && "form" !== l && "tabIndex" !== l && "download" !== l && l in n) try {
            n[l] = null == u ? "" : u;
            break n;
        } catch (n) {}
        "function" == typeof u || (null == u || !1 === u && -1 == l.indexOf("-") ? n.removeAttribute(l) : n.setAttribute(l, u));
    }
}
function I(n) {
    this.l[n.type + !1](l.event ? l.event(n) : n);
}
function T(n) {
    this.l[n.type + !0](l.event ? l.event(n) : n);
}
function j(n, u, i, t, o, r, f, e, c) {
    var a, h, v, y, _, k, b, g, m, x, A, C, $, H, I, T = u.type;
    if (void 0 !== u.constructor) return null;
    null != i.__h && (c = i.__h, e = u.__e = i.__e, u.__h = null, r = [
        e
    ]), (a = l.__b) && a(u);
    try {
        n: if ("function" == typeof T) {
            if (g = u.props, m = (a = T.contextType) && t[a.__c], x = a ? m ? m.props.value : a.__ : t, i.__c ? b = (h = u.__c = i.__c).__ = h.__E : ("prototype" in T && T.prototype.render ? u.__c = h = new T(g, x) : (u.__c = h = new d(g, x), h.constructor = T, h.render = O), m && m.sub(h), h.props = g, h.state || (h.state = {}), h.context = x, h.__n = t, v = h.__d = !0, h.__h = [], h._sb = []), null == h.__s && (h.__s = h.state), null != T.getDerivedStateFromProps && (h.__s == h.state && (h.__s = s({}, h.__s)), s(h.__s, T.getDerivedStateFromProps(g, h.__s))), y = h.props, _ = h.state, v) null == T.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && h.__h.push(h.componentDidMount);
            else {
                if (null == T.getDerivedStateFromProps && g !== y && null != h.componentWillReceiveProps && h.componentWillReceiveProps(g, x), !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(g, h.__s, x) || u.__v === i.__v) {
                    for(h.props = g, h.state = h.__s, u.__v !== i.__v && (h.__d = !1), h.__v = u, u.__e = i.__e, u.__k = i.__k, u.__k.forEach(function(n) {
                        n && (n.__ = u);
                    }), A = 0; A < h._sb.length; A++)h.__h.push(h._sb[A]);
                    h._sb = [], h.__h.length && f.push(h);
                    break n;
                }
                null != h.componentWillUpdate && h.componentWillUpdate(g, h.__s, x), null != h.componentDidUpdate && h.__h.push(function() {
                    h.componentDidUpdate(y, _, k);
                });
            }
            if (h.context = x, h.props = g, h.__v = u, h.__P = n, C = l.__r, $ = 0, "prototype" in T && T.prototype.render) {
                for(h.state = h.__s, h.__d = !1, C && C(u), a = h.render(h.props, h.state, h.context), H = 0; H < h._sb.length; H++)h.__h.push(h._sb[H]);
                h._sb = [];
            } else do h.__d = !1, C && C(u), a = h.render(h.props, h.state, h.context), h.state = h.__s;
            while (h.__d && ++$ < 25);
            h.state = h.__s, null != h.getChildContext && (t = s(s({}, t), h.getChildContext())), v || null == h.getSnapshotBeforeUpdate || (k = h.getSnapshotBeforeUpdate(y, _)), I = null != a && a.type === p && null == a.key ? a.props.children : a, w(n, Array.isArray(I) ? I : [
                I
            ], u, i, t, o, r, f, e, c), h.base = u.__e, u.__h = null, h.__h.length && f.push(h), b && (h.__E = h.__ = null), h.__e = !1;
        } else null == r && u.__v === i.__v ? (u.__k = i.__k, u.__e = i.__e) : u.__e = L(i.__e, u, i, t, o, r, f, c);
        (a = l.diffed) && a(u);
    } catch (n) {
        u.__v = null, (c || null != r) && (u.__e = e, u.__h = !!c, r[r.indexOf(e)] = null), l.__e(n, u, i);
    }
}
function z(n, u) {
    l.__c && l.__c(u, n), n.some(function(u) {
        try {
            n = u.__h, u.__h = [], n.some(function(n) {
                n.call(u);
            });
        } catch (n) {
            l.__e(n, u.__v);
        }
    });
}
function L(l, u, i, t, o, r, e, c) {
    var s, h, v, y = i.props, p = u.props, d = u.type, k = 0;
    if ("svg" === d && (o = !0), null != r) {
        for(; k < r.length; k++)if ((s = r[k]) && "setAttribute" in s == !!d && (d ? s.localName === d : 3 === s.nodeType)) {
            l = s, r[k] = null;
            break;
        }
    }
    if (null == l) {
        if (null === d) return document.createTextNode(p);
        l = o ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, p.is && p), r = null, c = !1;
    }
    if (null === d) y === p || c && l.data === p || (l.data = p);
    else {
        if (r = r && n.call(l.childNodes), h = (y = i.props || f).dangerouslySetInnerHTML, v = p.dangerouslySetInnerHTML, !c) {
            if (null != r) for(y = {}, k = 0; k < l.attributes.length; k++)y[l.attributes[k].name] = l.attributes[k].value;
            (v || h) && (v && (h && v.__html == h.__html || v.__html === l.innerHTML) || (l.innerHTML = v && v.__html || ""));
        }
        if (C(l, p, y, o, c), v) u.__k = [];
        else if (k = u.props.children, w(l, Array.isArray(k) ? k : [
            k
        ], u, i, t, o && "foreignObject" !== d, r, e, r ? r[0] : i.__k && _(i, 0), c), null != r) for(k = r.length; k--;)null != r[k] && a(r[k]);
        c || ("value" in p && void 0 !== (k = p.value) && (k !== l.value || "progress" === d && !k || "option" === d && k !== y.value) && H(l, "value", k, y.value, !1), "checked" in p && void 0 !== (k = p.checked) && k !== l.checked && H(l, "checked", k, y.checked, !1));
    }
    return l;
}
function M(n, u, i) {
    try {
        "function" == typeof n ? n(u) : n.current = u;
    } catch (n) {
        l.__e(n, i);
    }
}
function N(n, u, i) {
    var t, o;
    if (l.unmount && l.unmount(n), (t = n.ref) && (t.current && t.current !== n.__e || M(t, null, u)), null != (t = n.__c)) {
        if (t.componentWillUnmount) try {
            t.componentWillUnmount();
        } catch (n) {
            l.__e(n, u);
        }
        t.base = t.__P = null, n.__c = void 0;
    }
    if (t = n.__k) for(o = 0; o < t.length; o++)t[o] && N(t[o], u, i || "function" != typeof n.type);
    i || null == n.__e || a(n.__e), n.__ = n.__e = n.__d = void 0;
}
function O(n, l, u) {
    return this.constructor(n, u);
}
function P(u, i, t) {
    var o, r, e;
    l.__ && l.__(u, i), r = (o = "function" == typeof t) ? null : t && t.__k || i.__k, e = [], j(i, u = (!o && t || i).__k = h(p, null, [
        u
    ]), r || f, f, void 0 !== i.ownerSVGElement, !o && t ? [
        t
    ] : r ? null : i.firstChild ? n.call(i.childNodes) : null, e, !o && t ? t : r ? r.__e : i.firstChild, o), z(e, u);
}
function S(n, l) {
    P(n, l, S);
}
function q(l, u, i) {
    var t, o, r, f = s({}, l.props);
    for(r in u)"key" == r ? t = u[r] : "ref" == r ? o = u[r] : f[r] = u[r];
    return arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : i), v(l.type, f, t || l.key, o || l.ref, null);
}
function B(n, l) {
    var u = {
        __c: l = "__cC" + r++,
        __: n,
        Consumer: function(n, l) {
            return n.children(l);
        },
        Provider: function(n) {
            var u, i;
            return this.getChildContext || (u = [], (i = {})[l] = this, this.getChildContext = function() {
                return i;
            }, this.shouldComponentUpdate = function(n) {
                this.props.value !== n.value && u.some(b);
            }, this.sub = function(n) {
                u.push(n);
                var l = n.componentWillUnmount;
                n.componentWillUnmount = function() {
                    u.splice(u.indexOf(n), 1), l && l.call(n);
                };
            }), n.children;
        }
    };
    return u.Provider.__ = u.Consumer.contextType = u;
}
n = e.slice, l = {
    __e: function(n, l, u, i) {
        for(var t, o, r; l = l.__;)if ((t = l.__c) && !t.__) try {
            if ((o = t.constructor) && null != o.getDerivedStateFromError && (t.setState(o.getDerivedStateFromError(n)), r = t.__d), null != t.componentDidCatch && (t.componentDidCatch(n, i || {}), r = t.__d), r) return t.__E = t;
        } catch (l) {
            n = l;
        }
        throw n;
    }
}, u = 0, i = function(n) {
    return null != n && void 0 === n.constructor;
}, d.prototype.setState = function(n, l) {
    var u;
    u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n && (n = n(s({}, u), this.props)), n && s(u, n), null != n && this.__v && (l && this._sb.push(l), b(this));
}, d.prototype.forceUpdate = function(n) {
    this.__v && (this.__e = !0, n && this.__h.push(n), b(this));
}, d.prototype.render = p, t = [], g.__r = 0, r = 0;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"hQ95k":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ImageRect", ()=>ImageRect);
parcelHelpers.export(exports, "useFileToBase64", ()=>useFileToBase64);
parcelHelpers.export(exports, "ReadImageFileDemo", ()=>ReadImageFileDemo);
parcelHelpers.export(exports, "ClipImageDemo", ()=>ClipImageDemo);
var _preact = require("preact");
var _hooks = require("preact/hooks");
var _okanvas = require("../src/okanvas");
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const styles = {
    flexCenter: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
};
function ImageRect(props) {
    return (0, _preact.h)("div", {
        style: Object.assign(Object.assign({}, styles.flexCenter), {
            border: "1px solid #000",
            width: "200px",
            height: "200px"
        })
    }, [
        (0, _preact.h)("img", {
            src: props.src,
            style: {
                maxWidth: "100%",
                maxHeight: "100%"
            }
        })
    ]);
}
function useFileToBase64() {
    const [base64, setBase64] = (0, _hooks.useState)("");
    const onInput = (0, _hooks.useCallback)((e)=>__awaiter(this, void 0, void 0, function*() {
            var _a;
            if (!((_a = e === null || e === void 0 ? void 0 : e.target) === null || _a === void 0 ? void 0 : _a.files)) return;
            const result = yield _okanvas.fileToBase64(e.target.files[0]);
            setBase64(result);
        }), []);
    return {
        base64,
        onInput
    };
}
function ReadImageFileDemo() {
    const { base64 , onInput  } = useFileToBase64();
    return (0, _preact.h)("div", null, [
        (0, _preact.h)("h2", null, "fileToBase64"),
        (0, _preact.h)("input", {
            type: "file",
            onInput,
            accept: "image/*"
        }, "fileToBase64"),
        ImageRect({
            src: base64
        })
    ]);
}
function ClipImageDemo() {
    const [base64, setBase64] = (0, _hooks.useState)("");
    const [clippedBase64, setClippedBase64] = (0, _hooks.useState)("");
    const [resizedBase64, setResizedBase64] = (0, _hooks.useState)("");
    const onInput = (0, _hooks.useCallback)((e)=>__awaiter(this, void 0, void 0, function*() {
            var _a;
            if (!((_a = e === null || e === void 0 ? void 0 : e.target) === null || _a === void 0 ? void 0 : _a.files)) return;
            const _base64 = yield _okanvas.fileToBase64(e.target.files[0]);
            const _image = yield _okanvas.base64ToImage(_base64);
            const rect = {
                x: _image.width * 0.3,
                y: _image.height * 0.2,
                width: _image.width * 0.4,
                height: _image.height * 0.6
            };
            const srcWithRect = yield _okanvas.drawRectOnImage(_image, rect);
            const _clippedBase64 = yield _okanvas.clipImage(_image, rect);
            const _resizedBase64 = yield _okanvas.clipImage(_image, rect, {
                width: rect.width * 2,
                height: rect.height
            });
            setBase64(srcWithRect);
            setClippedBase64(_clippedBase64);
            setResizedBase64(_resizedBase64);
        }), []);
    return (0, _preact.h)("div", null, [
        (0, _preact.h)("h2", null, "clipImage"),
        (0, _preact.h)("input", {
            type: "file",
            accept: "image/*",
            onInput
        }, "clipImage"),
        (0, _preact.h)("p", null, "src & rectangle"),
        ImageRect({
            src: base64
        }),
        (0, _preact.h)("p", null, "clipped"),
        ImageRect({
            src: clippedBase64
        }),
        (0, _preact.h)("p", null, "clipped & resized: width * 2"),
        ImageRect({
            src: resizedBase64
        })
    ]);
}

},{"preact":"26zcy","preact/hooks":"eZN76","../src/okanvas":"d6P23","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eZN76":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useCallback", ()=>T);
parcelHelpers.export(exports, "useContext", ()=>q);
parcelHelpers.export(exports, "useDebugValue", ()=>x);
parcelHelpers.export(exports, "useEffect", ()=>h);
parcelHelpers.export(exports, "useErrorBoundary", ()=>P);
parcelHelpers.export(exports, "useId", ()=>V);
parcelHelpers.export(exports, "useImperativeHandle", ()=>A);
parcelHelpers.export(exports, "useLayoutEffect", ()=>s);
parcelHelpers.export(exports, "useMemo", ()=>F);
parcelHelpers.export(exports, "useReducer", ()=>y);
parcelHelpers.export(exports, "useRef", ()=>_);
parcelHelpers.export(exports, "useState", ()=>p);
var _preact = require("preact");
var t, r, u, i, o = 0, f = [], c = [], e = (0, _preact.options).__b, a = (0, _preact.options).__r, v = (0, _preact.options).diffed, l = (0, _preact.options).__c, m = (0, _preact.options).unmount;
function d(t, u) {
    (0, _preact.options).__h && (0, _preact.options).__h(r, t, o || u), o = 0;
    var i = r.__H || (r.__H = {
        __: [],
        __h: []
    });
    return t >= i.__.length && i.__.push({
        __V: c
    }), i.__[t];
}
function p(n) {
    return o = 1, y(B, n);
}
function y(n, u, i) {
    var o = d(t++, 2);
    if (o.t = n, !o.__c && (o.__ = [
        i ? i(u) : B(void 0, u),
        function(n) {
            var t = o.__N ? o.__N[0] : o.__[0], r = o.t(t, n);
            t !== r && (o.__N = [
                r,
                o.__[1]
            ], o.__c.setState({}));
        }
    ], o.__c = r, !r.u)) {
        r.u = !0;
        var f = r.shouldComponentUpdate;
        r.shouldComponentUpdate = function(n, t, r) {
            if (!o.__c.__H) return !0;
            var u = o.__c.__H.__.filter(function(n) {
                return n.__c;
            });
            if (u.every(function(n) {
                return !n.__N;
            })) return !f || f.call(this, n, t, r);
            var i = !1;
            return u.forEach(function(n) {
                if (n.__N) {
                    var t = n.__[0];
                    n.__ = n.__N, n.__N = void 0, t !== n.__[0] && (i = !0);
                }
            }), !(!i && o.__c.props === n) && (!f || f.call(this, n, t, r));
        };
    }
    return o.__N || o.__;
}
function h(u, i) {
    var o = d(t++, 3);
    !(0, _preact.options).__s && z(o.__H, i) && (o.__ = u, o.i = i, r.__H.__h.push(o));
}
function s(u, i) {
    var o = d(t++, 4);
    !(0, _preact.options).__s && z(o.__H, i) && (o.__ = u, o.i = i, r.__h.push(o));
}
function _(n) {
    return o = 5, F(function() {
        return {
            current: n
        };
    }, []);
}
function A(n, t, r) {
    o = 6, s(function() {
        return "function" == typeof n ? (n(t()), function() {
            return n(null);
        }) : n ? (n.current = t(), function() {
            return n.current = null;
        }) : void 0;
    }, null == r ? r : r.concat(n));
}
function F(n, r) {
    var u = d(t++, 7);
    return z(u.__H, r) ? (u.__V = n(), u.i = r, u.__h = n, u.__V) : u.__;
}
function T(n, t) {
    return o = 8, F(function() {
        return n;
    }, t);
}
function q(n) {
    var u = r.context[n.__c], i = d(t++, 9);
    return i.c = n, u ? (null == i.__ && (i.__ = !0, u.sub(r)), u.props.value) : n.__;
}
function x(t, r) {
    (0, _preact.options).useDebugValue && (0, _preact.options).useDebugValue(r ? r(t) : t);
}
function P(n) {
    var u = d(t++, 10), i = p();
    return u.__ = n, r.componentDidCatch || (r.componentDidCatch = function(n, t) {
        u.__ && u.__(n, t), i[1](n);
    }), [
        i[0],
        function() {
            i[1](void 0);
        }
    ];
}
function V() {
    var n = d(t++, 11);
    if (!n.__) {
        for(var u = r.__v; null !== u && !u.__m && null !== u.__;)u = u.__;
        var i = u.__m || (u.__m = [
            0,
            0
        ]);
        n.__ = "P" + i[0] + "-" + i[1]++;
    }
    return n.__;
}
function b() {
    for(var t; t = f.shift();)if (t.__P && t.__H) try {
        t.__H.__h.forEach(k), t.__H.__h.forEach(w), t.__H.__h = [];
    } catch (r) {
        t.__H.__h = [], (0, _preact.options).__e(r, t.__v);
    }
}
(0, _preact.options).__b = function(n) {
    r = null, e && e(n);
}, (0, _preact.options).__r = function(n) {
    a && a(n), t = 0;
    var i = (r = n.__c).__H;
    i && (u === r ? (i.__h = [], r.__h = [], i.__.forEach(function(n) {
        n.__N && (n.__ = n.__N), n.__V = c, n.__N = n.i = void 0;
    })) : (i.__h.forEach(k), i.__h.forEach(w), i.__h = [])), u = r;
}, (0, _preact.options).diffed = function(t) {
    v && v(t);
    var o = t.__c;
    o && o.__H && (o.__H.__h.length && (1 !== f.push(o) && i === (0, _preact.options).requestAnimationFrame || ((i = (0, _preact.options).requestAnimationFrame) || j)(b)), o.__H.__.forEach(function(n) {
        n.i && (n.__H = n.i), n.__V !== c && (n.__ = n.__V), n.i = void 0, n.__V = c;
    })), u = r = null;
}, (0, _preact.options).__c = function(t, r) {
    r.some(function(t) {
        try {
            t.__h.forEach(k), t.__h = t.__h.filter(function(n) {
                return !n.__ || w(n);
            });
        } catch (u) {
            r.some(function(n) {
                n.__h && (n.__h = []);
            }), r = [], (0, _preact.options).__e(u, t.__v);
        }
    }), l && l(t, r);
}, (0, _preact.options).unmount = function(t) {
    m && m(t);
    var r, u = t.__c;
    u && u.__H && (u.__H.__.forEach(function(n) {
        try {
            k(n);
        } catch (n) {
            r = n;
        }
    }), u.__H = void 0, r && (0, _preact.options).__e(r, u.__v));
};
var g = "function" == typeof requestAnimationFrame;
function j(n) {
    var t, r = function() {
        clearTimeout(u), g && cancelAnimationFrame(t), setTimeout(n);
    }, u = setTimeout(r, 100);
    g && (t = requestAnimationFrame(r));
}
function k(n) {
    var t = r, u = n.__c;
    "function" == typeof u && (n.__c = void 0, u()), r = t;
}
function w(n) {
    var t = r;
    n.__c = n.__(), r = t;
}
function z(n, t) {
    return !n || n.length !== t.length || t.some(function(t, r) {
        return t !== n[r];
    });
}
function B(n, t) {
    return "function" == typeof t ? t(n) : t;
}

},{"preact":"26zcy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d6P23":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _types = require("./types");
parcelHelpers.exportAll(_types, exports);
var _canvas = require("./canvas");
parcelHelpers.exportAll(_canvas, exports);
var _events = require("./events");
parcelHelpers.exportAll(_events, exports);
var _files = require("./files");
parcelHelpers.exportAll(_files, exports);

},{"./types":"38MWl","./canvas":"1Z0N5","./events":"1K5ob","./files":"2dNXo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"38MWl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Z0N5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getRate", ()=>getRate);
parcelHelpers.export(exports, "getViewBoxSize", ()=>getViewBoxSize);
parcelHelpers.export(exports, "getViewBoxMargin", ()=>getViewBoxMargin);
parcelHelpers.export(exports, "getCentralizedViewBox", ()=>getCentralizedViewBox);
function getRate(viewSize, objectSize) {
    if (!objectSize) return {
        minRate: 1,
        maxRate: 1,
        rateW: 1,
        rateH: 1
    };
    const rateW = objectSize.width / viewSize.width;
    const rateH = objectSize.height / viewSize.height;
    return {
        minRate: Math.min(rateW, rateH),
        maxRate: Math.max(rateW, rateH),
        rateW,
        rateH
    };
}
function getViewBoxSize(objectSize, rateW, rateH) {
    if (!objectSize) return {
        width: 1,
        height: 1
    };
    if (rateW > rateH) return {
        width: objectSize.width,
        height: objectSize.height / rateH * rateW
    };
    else return {
        width: objectSize.width / rateW * rateH,
        height: objectSize.height
    };
}
function getViewBoxMargin(viewBoxSize, objectSize) {
    if (!objectSize) return {
        x: 0,
        y: 0
    };
    return {
        x: (viewBoxSize.width - objectSize.width) / 2,
        y: (viewBoxSize.height - objectSize.height) / 2
    };
}
function getCentralizedViewBox(viewSize, objectSize) {
    if (!objectSize) return Object.assign(Object.assign({}, viewSize), {
        x: 0,
        y: 0
    });
    const { rateW , rateH  } = getRate(viewSize, objectSize);
    const viewBoxSize = getViewBoxSize(objectSize, rateW, rateH);
    const viewBoxMargin = getViewBoxMargin(viewBoxSize, objectSize);
    return Object.assign({
        x: -viewBoxMargin.x,
        y: -viewBoxMargin.y
    }, viewBoxSize);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1K5ob":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isTouch", ()=>isTouch);
parcelHelpers.export(exports, "isMulitTouch", ()=>isMulitTouch);
parcelHelpers.export(exports, "isTouchExist", ()=>isTouchExist);
parcelHelpers.export(exports, "getPagePosition", ()=>getPagePosition);
parcelHelpers.export(exports, "getPointInTarget", ()=>getPointInTarget);
parcelHelpers.export(exports, "getTouchPointsInTarget", ()=>getTouchPointsInTarget);
parcelHelpers.export(exports, "useDrag", ()=>useDrag);
parcelHelpers.export(exports, "useWindowPointerEffect", ()=>useWindowPointerEffect);
function canTouch() {
    return "ontouchstart" in window;
}
function isTouch(e) {
    return "touches" in e;
}
function isMulitTouch(e) {
    return isTouch(e) && e.touches.length > 1;
}
function isTouchExist(e) {
    return isTouch(e) && e.touches.length > 0;
}
function getPagePosition(e) {
    return isTouch(e) ? {
        x: e.touches[0].pageX,
        y: e.touches[0].pageY
    } : {
        x: e.pageX,
        y: e.pageY
    };
}
function getPointInTarget(e) {
    const target = e.currentTarget;
    if (!target) return {
        x: 0,
        y: 0
    };
    let x, y;
    const rect = target.getBoundingClientRect();
    const dx = rect.left + window.pageXOffset;
    const dy = rect.top + window.pageYOffset;
    if (isTouch(e)) {
        const touch = e.touches[0];
        x = touch.pageX - dx;
        y = touch.pageY - dy;
    } else {
        x = e.pageX - dx;
        y = e.pageY - dy;
    }
    return {
        x: x,
        y: y
    };
}
function getTouchPointsInTarget(e) {
    const target = e.currentTarget;
    if (!target) return [];
    const ret = [];
    const rect = target.getBoundingClientRect();
    const dx = rect.left + window.pageXOffset;
    const dy = rect.top + window.pageYOffset;
    for(let i = 0; i < e.touches.length; i++){
        const touch = e.touches[i];
        ret.push({
            x: touch.pageX - dx,
            y: touch.pageY - dy
        });
    }
    return ret;
}
function useDrag(dragCallback, clickCallback = ()=>{}) {
    let dragging = false;
    let base = null;
    let past = null;
    let current = null;
    let downAt = 0;
    const onDown = (e)=>{
        dragging = true;
        base = getPagePosition(e);
        current = Object.assign({}, base);
        past = Object.assign({}, base);
        downAt = Date.now();
    };
    const onMove = (e)=>{
        if (!dragging) return;
        e.preventDefault();
        current = getPagePosition(e);
        if (!dragging || !base || !current || !past) return;
        dragCallback({
            base,
            p: Object.assign({}, current),
            d: {
                x: current.x - past.x,
                y: current.y - past.y
            }
        });
        past = Object.assign({}, current);
    };
    const onUp = ()=>{
        if (current && Date.now() - downAt < 100) clickCallback(Object.assign({}, current));
        dragging = false;
        base = null;
        current = null;
        past = null;
        downAt = 0;
    };
    return {
        onDown,
        onMove,
        onUp
    };
}
function useWindowPointerEffect(listeners) {
    const _canTouch = canTouch();
    if (listeners.onDown) {
        window.addEventListener("mousedown", listeners.onDown, false);
        if (_canTouch) window.addEventListener("touchstart", listeners.onDown, false);
    }
    if (listeners.onMove) {
        window.addEventListener("mousemove", listeners.onMove, false);
        if (_canTouch) window.addEventListener("touchmove", listeners.onMove, {
            capture: false,
            passive: false
        });
    }
    if (listeners.onUp) {
        window.addEventListener("mouseup", listeners.onUp, false);
        window.addEventListener("mouseleave", listeners.onUp, false);
        if (_canTouch) {
            window.addEventListener("touchend", listeners.onUp, false);
            window.addEventListener("touchcancel", listeners.onUp, false);
        }
    }
    return ()=>{
        if (listeners.onDown) {
            window.removeEventListener("mousedown", listeners.onDown, false);
            if (_canTouch) window.removeEventListener("touchstart", listeners.onDown, false);
        }
        if (listeners.onMove) {
            window.removeEventListener("mousemove", listeners.onMove, false);
            if (_canTouch) window.removeEventListener("touchmove", listeners.onMove, {
                capture: false
            });
        }
        if (listeners.onUp) {
            window.removeEventListener("mouseup", listeners.onUp, false);
            window.removeEventListener("mouseleave", listeners.onUp, false);
            if (_canTouch) {
                window.removeEventListener("touchend", listeners.onUp, false);
                window.removeEventListener("touchcancel", listeners.onUp, false);
            }
        }
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2dNXo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fileToBase64", ()=>fileToBase64);
parcelHelpers.export(exports, "base64ToImage", ()=>base64ToImage);
parcelHelpers.export(exports, "clipImage", ()=>clipImage);
parcelHelpers.export(exports, "clipImageToBlob", ()=>clipImageToBlob);
parcelHelpers.export(exports, "drawRectOnImage", ()=>drawRectOnImage);
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fileToBase64(file) {
    return new Promise((resolve, reject)=>{
        const fileReader = new FileReader();
        fileReader.onload = ()=>resolve(fileReader.result);
        fileReader.onerror = reject;
        fileReader.readAsDataURL(file);
    });
}
function base64ToImage(base64) {
    return new Promise((resolve, reject)=>{
        const image = new Image();
        image.onload = ()=>resolve(image);
        image.onerror = reject;
        image.src = base64;
    });
}
function toImage(src) {
    return __awaiter(this, void 0, void 0, function*() {
        if (src instanceof Image) return src;
        const image = yield base64ToImage(src);
        return image;
    });
}
function _getClipImageCanvas(src, rect, size) {
    return __awaiter(this, void 0, void 0, function*() {
        const _size = size !== null && size !== void 0 ? size : {
            width: rect.width,
            height: rect.height
        };
        const image = yield toImage(src);
        const canvas = document.createElement("canvas");
        canvas.width = _size.width;
        canvas.height = _size.height;
        const ctx = canvas.getContext("2d");
        if (!ctx) throw new Error("Failed to get 2d-context from a canvas.");
        ctx.drawImage(image, rect.x, rect.y, rect.width, rect.height, 0, 0, canvas.width, canvas.height);
        return canvas;
    });
}
function clipImage(src, rect, size) {
    return __awaiter(this, void 0, void 0, function*() {
        const canvas = yield _getClipImageCanvas(src, rect, size);
        return canvas.toDataURL();
    });
}
function clipImageToBlob(src, rect, size) {
    return __awaiter(this, void 0, void 0, function*() {
        const canvas = yield _getClipImageCanvas(src, rect, size);
        return new Promise((resolve, reject)=>{
            canvas.toBlob((blob)=>{
                if (blob) resolve(blob);
                reject(new Error("Failed to create blob."));
            }, "image/png");
        });
    });
}
function drawRectOnImage(src, rect, setLineStyle) {
    return __awaiter(this, void 0, void 0, function*() {
        const image = yield toImage(src);
        const canvas = document.createElement("canvas");
        canvas.width = image.width;
        canvas.height = image.height;
        const ctx = canvas.getContext("2d");
        if (!ctx) throw new Error("Failed to get 2d-context from a canvas.");
        ctx.drawImage(image, 0, 0, image.width, image.height);
        if (setLineStyle) setLineStyle(ctx);
        else {
            ctx.strokeStyle = "red";
            ctx.lineWidth = 3;
        }
        ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);
        return canvas.toDataURL();
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aPnKd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UseDragDemo", ()=>UseDragDemo);
var _preact = require("preact");
var _hooks = require("preact/hooks");
var _okanvas = require("../src/okanvas");
function vectorInfo(name, vector) {
    return vector ? (0, _preact.h)("p", null, `${name}: { x: ${vector.x}, y: ${vector.y} }`) : (0, _preact.h)("p", null, `${name}: null`);
}
function UseDragDemo() {
    const [base, setBase] = (0, _hooks.useState)(null);
    const [current, setCurrent] = (0, _hooks.useState)(null);
    const [diff, setDiff] = (0, _hooks.useState)(null);
    const [dragState, setDragState] = (0, _hooks.useState)(null);
    (0, _hooks.useEffect)(()=>{
        const _dragState = _okanvas.useDrag((arg)=>{
            setBase(arg.base);
            setCurrent(arg.p);
            setDiff(arg.d);
        });
        setDragState(_dragState);
        return _okanvas.useWindowPointerEffect({
            onMove: _dragState.onMove,
            onUp: _dragState.onUp
        });
    }, []);
    return (0, _preact.h)("div", null, [
        (0, _preact.h)("h2", null, "useDrag"),
        vectorInfo("base", base),
        vectorInfo("current", current),
        vectorInfo("diff", diff),
        (0, _preact.h)("div", Object.assign(Object.assign({}, dragState ? {
            onMouseDown: dragState.onDown,
            onTouchStart: dragState.onDown
        } : {}), {
            style: {
                border: "1px solid #000",
                width: "200px",
                height: "200px"
            }
        }))
    ]);
}

},{"preact":"26zcy","preact/hooks":"eZN76","../src/okanvas":"d6P23","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gDoBo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ClipDemo", ()=>ClipDemo);
parcelHelpers.export(exports, "ClipCanvas", ()=>ClipCanvas);
var _preact = require("preact");
var _hooks = require("preact/hooks");
var _okanvas = require("../src/okanvas");
var _files = require("./files");
function getPedal(p, base, vec) {
    const v1 = vec;
    const v2 = {
        x: p.x - base.x,
        y: p.y - base.y
    };
    const dd = v1.x * v1.x + v1.y * v1.y;
    const dot = v1.x * v2.x + v1.y * v2.y;
    const t = dot / dd;
    return {
        x: v1.x * t,
        y: v1.y * t
    };
}
function ClipDemo() {
    const { base64 , onInput  } = (0, _files.useFileToBase64)();
    return (0, _preact.h)("div", null, [
        (0, _preact.h)("h2", null, "clipDemo"),
        (0, _preact.h)("input", {
            type: "file",
            onInput,
            accept: "image/*"
        }, "fileToBase64"),
        (0, _preact.createElement)(ClipCanvas, {
            base64,
            clipSize: {
                width: 160,
                height: 90
            }
        })
    ]);
}
function ClipCanvas({ base64 , clipSize , viewSize  }) {
    if (!clipSize || !viewSize) return null;
    const [image, setImage] = (0, _hooks.useState)(null);
    const [clipRect, setClipRect] = (0, _hooks.useState)(Object.assign({
        x: 0,
        y: 0
    }, clipSize));
    const [clipRectOrg, setClipRectOrg] = (0, _hooks.useState)(null);
    const [dragState, setDragState] = (0, _hooks.useState)(null);
    const [dragListeners, setDragListeners] = (0, _hooks.useState)(null);
    const [dragMode, setDragMode] = (0, _hooks.useState)("");
    (0, _hooks.useEffect)(()=>{
        const _dragListeners = _okanvas.useDrag((arg)=>{
            setDragState(arg);
        });
        setDragListeners(_dragListeners);
        return _okanvas.useWindowPointerEffect({
            onMove: _dragListeners.onMove,
            onUp: ()=>{
                _dragListeners.onUp();
                setDragMode("");
                setDragState(null);
                setClipRectOrg(null);
            }
        });
    }, []);
    const onStartMove = (0, _hooks.useCallback)((e)=>{
        if (!dragListeners) return;
        setDragMode("move");
        setClipRectOrg(clipRect);
        dragListeners.onDown(e);
    }, [
        clipRect,
        dragListeners
    ]);
    const onStartResize = (0, _hooks.useCallback)((e)=>{
        if (!dragListeners) return;
        setDragMode("resize");
        setClipRectOrg(clipRect);
        dragListeners.onDown(e);
    }, [
        clipRect,
        dragListeners
    ]);
    (0, _hooks.useEffect)(()=>{
        if (!base64) return;
        _okanvas.base64ToImage(base64).then((_image)=>{
            setImage(_image);
        });
    }, [
        base64
    ]);
    (0, _hooks.useEffect)(()=>{
        setClipRect(_okanvas.getCentralizedViewBox(clipSize, image));
    }, [
        clipSize,
        image
    ]);
    const viewBoxRect = (0, _hooks.useMemo)(()=>{
        return _okanvas.getCentralizedViewBox(clipSize, image);
    }, [
        clipSize,
        image
    ]);
    const viewBox = (0, _hooks.useMemo)(()=>{
        return `${viewBoxRect.x} ${viewBoxRect.y} ${viewBoxRect.width} ${viewBoxRect.height}`;
    }, [
        viewBoxRect
    ]);
    const scale = (0, _hooks.useMemo)(()=>{
        const { maxRate  } = _okanvas.getRate(viewSize, viewBoxRect);
        return maxRate;
    }, [
        viewSize,
        viewBoxRect
    ]);
    const imageElm = (0, _hooks.useMemo)(()=>{
        if (!image) return null;
        return (0, _preact.h)("image", {
            href: base64,
            x: 0,
            y: 0,
            width: image.width,
            height: image.height
        });
    }, [
        base64,
        image
    ]);
    (0, _hooks.useEffect)(()=>{
        if (!dragMode) return;
        if (!dragState) return;
        if (!clipRectOrg) return;
        if (dragMode === "move") setClipRect(Object.assign(Object.assign({}, clipRectOrg), {
            x: clipRectOrg.x + (dragState.p.x - dragState.base.x) * scale,
            y: clipRectOrg.y + (dragState.p.y - dragState.base.y) * scale
        }));
        else if (dragMode === "resize") {
            const beforeDiagonal = {
                x: clipRectOrg.width + (dragState.p.x - dragState.base.x) * scale,
                y: clipRectOrg.height + (dragState.p.y - dragState.base.y) * scale
            };
            const afterDiagonal = getPedal(beforeDiagonal, {
                x: 0,
                y: 0
            }, {
                x: clipSize.width,
                y: clipSize.height
            });
            setClipRect(Object.assign(Object.assign({}, clipRectOrg), {
                width: afterDiagonal.x,
                height: afterDiagonal.y
            }));
        }
    }, [
        clipRectOrg,
        dragMode,
        dragState,
        scale,
        clipSize
    ]);
    const clipRectElm = (0, _hooks.useMemo)(()=>{
        if (!image) return null;
        return getClipRectElm(clipRect, scale, {
            onStartMove,
            onStartResize
        });
    }, [
        image,
        clipRect,
        scale,
        onStartMove,
        onStartResize
    ]);
    return (0, _preact.h)("div", {
        style: {
            width: `${viewSize.width}px`,
            height: `${viewSize.height}px`,
            padding: "8px",
            border: "1px solid #000",
            backgroundColor: "#ccc",
            overflow: "hidden"
        }
    }, [
        (0, _preact.h)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox,
            style: {
                width: "100%",
                height: "100%",
                overflow: "visible"
            }
        }, [
            imageElm,
            clipRectElm
        ])
    ]);
}
ClipCanvas.defaultProps = {
    clipSize: {
        width: 200,
        height: 200
    },
    viewSize: {
        width: 200,
        height: 200
    }
};
function getClipRectElm(clipRect, scale, listeners) {
    return (0, _preact.h)("g", {
        transform: `translate(${clipRect.x}, ${clipRect.y})`
    }, [
        (0, _preact.h)("rect", {
            x: 0,
            y: 0,
            width: clipRect.width,
            height: clipRect.height,
            fill: "none",
            stroke: "red",
            "stroke-width": 4 * scale
        }),
        (0, _preact.h)("g", {
            onMouseDown: listeners === null || listeners === void 0 ? void 0 : listeners.onStartMove,
            onTouchStart: listeners === null || listeners === void 0 ? void 0 : listeners.onStartMove
        }, [
            (0, _preact.h)("circle", {
                cx: 0,
                cy: 0,
                r: 8 * scale,
                fill: "red",
                stroke: "none"
            })
        ]),
        (0, _preact.h)("g", {
            transform: `translate(${clipRect.width}, ${clipRect.height})`,
            onMouseDown: listeners === null || listeners === void 0 ? void 0 : listeners.onStartResize,
            onTouchStart: listeners === null || listeners === void 0 ? void 0 : listeners.onStartResize
        }, [
            (0, _preact.h)("circle", {
                cx: 0,
                cy: 0,
                r: 8 * scale,
                fill: "red",
                stroke: "none"
            })
        ])
    ]);
}

},{"preact":"26zcy","preact/hooks":"eZN76","../src/okanvas":"d6P23","./files":"hQ95k","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["38PNf"], "38PNf", "parcelRequire81d8")

//# sourceMappingURL=index.38ff63f3.js.map
