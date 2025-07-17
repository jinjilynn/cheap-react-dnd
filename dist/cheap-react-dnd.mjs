import ta, { useRef as mu, useState as Or, useEffect as Ge, createContext as bu, useContext as Ai } from "react";
var at = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Hu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Lo = { exports: {} }, it = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ei;
function Iu() {
  if (ei)
    return it;
  ei = 1;
  var e = ta, A = Symbol.for("react.element"), t = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function w(a, u, n) {
    var i, f = {}, l = null, h = null;
    n !== void 0 && (l = "" + n), u.key !== void 0 && (l = "" + u.key), u.ref !== void 0 && (h = u.ref);
    for (i in u)
      r.call(u, i) && !c.hasOwnProperty(i) && (f[i] = u[i]);
    if (a && a.defaultProps)
      for (i in u = a.defaultProps, u)
        f[i] === void 0 && (f[i] = u[i]);
    return { $$typeof: A, type: a, key: l, ref: h, props: f, _owner: o.current };
  }
  return it.Fragment = t, it.jsx = w, it.jsxs = w, it;
}
var st = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ri;
function xu() {
  return ri || (ri = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ta, A = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), a = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), n = Symbol.for("react.suspense"), i = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), l = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), Q = Symbol.iterator, p = "@@iterator";
    function d(y) {
      if (y === null || typeof y != "object")
        return null;
      var j = Q && y[Q] || y[p];
      return typeof j == "function" ? j : null;
    }
    var v = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function F(y) {
      {
        for (var j = arguments.length, $ = new Array(j > 1 ? j - 1 : 0), sA = 1; sA < j; sA++)
          $[sA - 1] = arguments[sA];
        H("error", y, $);
      }
    }
    function H(y, j, $) {
      {
        var sA = v.ReactDebugCurrentFrame, bA = sA.getStackAddendum();
        bA !== "" && (j += "%s", $ = $.concat([bA]));
        var MA = $.map(function(DA) {
          return String(DA);
        });
        MA.unshift("Warning: " + j), Function.prototype.apply.call(console[y], console, MA);
      }
    }
    var x = !1, O = !1, L = !1, G = !1, V = !1, b;
    b = Symbol.for("react.module.reference");
    function N(y) {
      return !!(typeof y == "string" || typeof y == "function" || y === r || y === c || V || y === o || y === n || y === i || G || y === h || x || O || L || typeof y == "object" && y !== null && (y.$$typeof === l || y.$$typeof === f || y.$$typeof === w || y.$$typeof === a || y.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      y.$$typeof === b || y.getModuleId !== void 0));
    }
    function P(y, j, $) {
      var sA = y.displayName;
      if (sA)
        return sA;
      var bA = j.displayName || j.name || "";
      return bA !== "" ? $ + "(" + bA + ")" : $;
    }
    function k(y) {
      return y.displayName || "Context";
    }
    function S(y) {
      if (y == null)
        return null;
      if (typeof y.tag == "number" && F("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof y == "function")
        return y.displayName || y.name || null;
      if (typeof y == "string")
        return y;
      switch (y) {
        case r:
          return "Fragment";
        case t:
          return "Portal";
        case c:
          return "Profiler";
        case o:
          return "StrictMode";
        case n:
          return "Suspense";
        case i:
          return "SuspenseList";
      }
      if (typeof y == "object")
        switch (y.$$typeof) {
          case a:
            var j = y;
            return k(j) + ".Consumer";
          case w:
            var $ = y;
            return k($._context) + ".Provider";
          case u:
            return P(y, y.render, "ForwardRef");
          case f:
            var sA = y.displayName || null;
            return sA !== null ? sA : S(y.type) || "Memo";
          case l: {
            var bA = y, MA = bA._payload, DA = bA._init;
            try {
              return S(DA(MA));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var _ = Object.assign, Y = 0, iA, oA, UA, HA, CA, EA, FA;
    function QA() {
    }
    QA.__reactDisabledLog = !0;
    function X() {
      {
        if (Y === 0) {
          iA = console.log, oA = console.info, UA = console.warn, HA = console.error, CA = console.group, EA = console.groupCollapsed, FA = console.groupEnd;
          var y = {
            configurable: !0,
            enumerable: !0,
            value: QA,
            writable: !0
          };
          Object.defineProperties(console, {
            info: y,
            log: y,
            warn: y,
            error: y,
            group: y,
            groupCollapsed: y,
            groupEnd: y
          });
        }
        Y++;
      }
    }
    function M() {
      {
        if (Y--, Y === 0) {
          var y = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: _({}, y, {
              value: iA
            }),
            info: _({}, y, {
              value: oA
            }),
            warn: _({}, y, {
              value: UA
            }),
            error: _({}, y, {
              value: HA
            }),
            group: _({}, y, {
              value: CA
            }),
            groupCollapsed: _({}, y, {
              value: EA
            }),
            groupEnd: _({}, y, {
              value: FA
            })
          });
        }
        Y < 0 && F("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = v.ReactCurrentDispatcher, uA;
    function aA(y, j, $) {
      {
        if (uA === void 0)
          try {
            throw Error();
          } catch (bA) {
            var sA = bA.stack.trim().match(/\n( *(at )?)/);
            uA = sA && sA[1] || "";
          }
        return `
` + uA + y;
      }
    }
    var mA = !1, VA;
    {
      var tA = typeof WeakMap == "function" ? WeakMap : Map;
      VA = new tA();
    }
    function lA(y, j) {
      if (!y || mA)
        return "";
      {
        var $ = VA.get(y);
        if ($ !== void 0)
          return $;
      }
      var sA;
      mA = !0;
      var bA = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var MA;
      MA = q.current, q.current = null, X();
      try {
        if (j) {
          var DA = function() {
            throw Error();
          };
          if (Object.defineProperty(DA.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(DA, []);
            } catch (Ce) {
              sA = Ce;
            }
            Reflect.construct(y, [], DA);
          } else {
            try {
              DA.call();
            } catch (Ce) {
              sA = Ce;
            }
            y.call(DA.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ce) {
            sA = Ce;
          }
          y();
        }
      } catch (Ce) {
        if (Ce && sA && typeof Ce.stack == "string") {
          for (var _A = Ce.stack.split(`
`), re = sA.stack.split(`
`), IA = _A.length - 1, $A = re.length - 1; IA >= 1 && $A >= 0 && _A[IA] !== re[$A]; )
            $A--;
          for (; IA >= 1 && $A >= 0; IA--, $A--)
            if (_A[IA] !== re[$A]) {
              if (IA !== 1 || $A !== 1)
                do
                  if (IA--, $A--, $A < 0 || _A[IA] !== re[$A]) {
                    var xe = `
` + _A[IA].replace(" at new ", " at ");
                    return y.displayName && xe.includes("<anonymous>") && (xe = xe.replace("<anonymous>", y.displayName)), typeof y == "function" && VA.set(y, xe), xe;
                  }
                while (IA >= 1 && $A >= 0);
              break;
            }
        }
      } finally {
        mA = !1, q.current = MA, M(), Error.prepareStackTrace = bA;
      }
      var Re = y ? y.displayName || y.name : "", Tr = Re ? aA(Re) : "";
      return typeof y == "function" && VA.set(y, Tr), Tr;
    }
    function yA(y, j, $) {
      return lA(y, !1);
    }
    function LA(y) {
      var j = y.prototype;
      return !!(j && j.isReactComponent);
    }
    function KA(y, j, $) {
      if (y == null)
        return "";
      if (typeof y == "function")
        return lA(y, LA(y));
      if (typeof y == "string")
        return aA(y);
      switch (y) {
        case n:
          return aA("Suspense");
        case i:
          return aA("SuspenseList");
      }
      if (typeof y == "object")
        switch (y.$$typeof) {
          case u:
            return yA(y.render);
          case f:
            return KA(y.type, j, $);
          case l: {
            var sA = y, bA = sA._payload, MA = sA._init;
            try {
              return KA(MA(bA), j, $);
            } catch {
            }
          }
        }
      return "";
    }
    var JA = Object.prototype.hasOwnProperty, ne = {}, le = v.ReactDebugCurrentFrame;
    function ee(y) {
      if (y) {
        var j = y._owner, $ = KA(y.type, y._source, j ? j.type : null);
        le.setExtraStackFrame($);
      } else
        le.setExtraStackFrame(null);
    }
    function ge(y, j, $, sA, bA) {
      {
        var MA = Function.call.bind(JA);
        for (var DA in y)
          if (MA(y, DA)) {
            var _A = void 0;
            try {
              if (typeof y[DA] != "function") {
                var re = Error((sA || "React class") + ": " + $ + " type `" + DA + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof y[DA] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw re.name = "Invariant Violation", re;
              }
              _A = y[DA](j, DA, sA, $, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (IA) {
              _A = IA;
            }
            _A && !(_A instanceof Error) && (ee(bA), F("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", sA || "React class", $, DA, typeof _A), ee(null)), _A instanceof Error && !(_A.message in ne) && (ne[_A.message] = !0, ee(bA), F("Failed %s type: %s", $, _A.message), ee(null));
          }
      }
    }
    var Fe = Array.isArray;
    function se(y) {
      return Fe(y);
    }
    function we(y) {
      {
        var j = typeof Symbol == "function" && Symbol.toStringTag, $ = j && y[Symbol.toStringTag] || y.constructor.name || "Object";
        return $;
      }
    }
    function pe(y) {
      try {
        return oe(y), !1;
      } catch {
        return !0;
      }
    }
    function oe(y) {
      return "" + y;
    }
    function ae(y) {
      if (pe(y))
        return F("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", we(y)), oe(y);
    }
    var be = v.ReactCurrentOwner, Ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ke, ze, qe;
    qe = {};
    function cA(y) {
      if (JA.call(y, "ref")) {
        var j = Object.getOwnPropertyDescriptor(y, "ref").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return y.ref !== void 0;
    }
    function pA(y) {
      if (JA.call(y, "key")) {
        var j = Object.getOwnPropertyDescriptor(y, "key").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return y.key !== void 0;
    }
    function GA(y, j) {
      if (typeof y.ref == "string" && be.current && j && be.current.stateNode !== j) {
        var $ = S(be.current.type);
        qe[$] || (F('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', S(be.current.type), y.ref), qe[$] = !0);
      }
    }
    function WA(y, j) {
      {
        var $ = function() {
          ke || (ke = !0, F("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j));
        };
        $.isReactWarning = !0, Object.defineProperty(y, "key", {
          get: $,
          configurable: !0
        });
      }
    }
    function ce(y, j) {
      {
        var $ = function() {
          ze || (ze = !0, F("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j));
        };
        $.isReactWarning = !0, Object.defineProperty(y, "ref", {
          get: $,
          configurable: !0
        });
      }
    }
    var Qe = function(y, j, $, sA, bA, MA, DA) {
      var _A = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: A,
        // Built-in properties that belong on the element
        type: y,
        key: j,
        ref: $,
        props: DA,
        // Record the component responsible for creating this element.
        _owner: MA
      };
      return _A._store = {}, Object.defineProperty(_A._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(_A, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: sA
      }), Object.defineProperty(_A, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: bA
      }), Object.freeze && (Object.freeze(_A.props), Object.freeze(_A)), _A;
    };
    function je(y, j, $, sA, bA) {
      {
        var MA, DA = {}, _A = null, re = null;
        $ !== void 0 && (ae($), _A = "" + $), pA(j) && (ae(j.key), _A = "" + j.key), cA(j) && (re = j.ref, GA(j, bA));
        for (MA in j)
          JA.call(j, MA) && !Ze.hasOwnProperty(MA) && (DA[MA] = j[MA]);
        if (y && y.defaultProps) {
          var IA = y.defaultProps;
          for (MA in IA)
            DA[MA] === void 0 && (DA[MA] = IA[MA]);
        }
        if (_A || re) {
          var $A = typeof y == "function" ? y.displayName || y.name || "Unknown" : y;
          _A && WA(DA, $A), re && ce(DA, $A);
        }
        return Qe(y, _A, re, bA, sA, be.current, DA);
      }
    }
    var Xe = v.ReactCurrentOwner, tr = v.ReactDebugCurrentFrame;
    function $e(y) {
      if (y) {
        var j = y._owner, $ = KA(y.type, y._source, j ? j.type : null);
        tr.setExtraStackFrame($);
      } else
        tr.setExtraStackFrame(null);
    }
    var fr;
    fr = !1;
    function Je(y) {
      return typeof y == "object" && y !== null && y.$$typeof === A;
    }
    function Dr() {
      {
        if (Xe.current) {
          var y = S(Xe.current.type);
          if (y)
            return `

Check the render method of \`` + y + "`.";
        }
        return "";
      }
    }
    function yr(y) {
      {
        if (y !== void 0) {
          var j = y.fileName.replace(/^.*[\\\/]/, ""), $ = y.lineNumber;
          return `

Check your code at ` + j + ":" + $ + ".";
        }
        return "";
      }
    }
    var C = {};
    function E(y) {
      {
        var j = Dr();
        if (!j) {
          var $ = typeof y == "string" ? y : y.displayName || y.name;
          $ && (j = `

Check the top-level render call using <` + $ + ">.");
        }
        return j;
      }
    }
    function m(y, j) {
      {
        if (!y._store || y._store.validated || y.key != null)
          return;
        y._store.validated = !0;
        var $ = E(j);
        if (C[$])
          return;
        C[$] = !0;
        var sA = "";
        y && y._owner && y._owner !== Xe.current && (sA = " It was passed a child from " + S(y._owner.type) + "."), $e(y), F('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', $, sA), $e(null);
      }
    }
    function T(y, j) {
      {
        if (typeof y != "object")
          return;
        if (se(y))
          for (var $ = 0; $ < y.length; $++) {
            var sA = y[$];
            Je(sA) && m(sA, j);
          }
        else if (Je(y))
          y._store && (y._store.validated = !0);
        else if (y) {
          var bA = d(y);
          if (typeof bA == "function" && bA !== y.entries)
            for (var MA = bA.call(y), DA; !(DA = MA.next()).done; )
              Je(DA.value) && m(DA.value, j);
        }
      }
    }
    function K(y) {
      {
        var j = y.type;
        if (j == null || typeof j == "string")
          return;
        var $;
        if (typeof j == "function")
          $ = j.propTypes;
        else if (typeof j == "object" && (j.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        j.$$typeof === f))
          $ = j.propTypes;
        else
          return;
        if ($) {
          var sA = S(j);
          ge($, y.props, "prop", sA, y);
        } else if (j.PropTypes !== void 0 && !fr) {
          fr = !0;
          var bA = S(j);
          F("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", bA || "Unknown");
        }
        typeof j.getDefaultProps == "function" && !j.getDefaultProps.isReactClassApproved && F("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function R(y) {
      {
        for (var j = Object.keys(y.props), $ = 0; $ < j.length; $++) {
          var sA = j[$];
          if (sA !== "children" && sA !== "key") {
            $e(y), F("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", sA), $e(null);
            break;
          }
        }
        y.ref !== null && ($e(y), F("Invalid attribute `ref` supplied to `React.Fragment`."), $e(null));
      }
    }
    function W(y, j, $, sA, bA, MA) {
      {
        var DA = N(y);
        if (!DA) {
          var _A = "";
          (y === void 0 || typeof y == "object" && y !== null && Object.keys(y).length === 0) && (_A += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var re = yr(bA);
          re ? _A += re : _A += Dr();
          var IA;
          y === null ? IA = "null" : se(y) ? IA = "array" : y !== void 0 && y.$$typeof === A ? (IA = "<" + (S(y.type) || "Unknown") + " />", _A = " Did you accidentally export a JSX literal instead of a component?") : IA = typeof y, F("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", IA, _A);
        }
        var $A = je(y, j, $, bA, MA);
        if ($A == null)
          return $A;
        if (DA) {
          var xe = j.children;
          if (xe !== void 0)
            if (sA)
              if (se(xe)) {
                for (var Re = 0; Re < xe.length; Re++)
                  T(xe[Re], y);
                Object.freeze && Object.freeze(xe);
              } else
                F("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              T(xe, y);
        }
        return y === r ? R($A) : K($A), $A;
      }
    }
    function z(y, j, $) {
      return W(y, j, $, !0);
    }
    function eA(y, j, $) {
      return W(y, j, $, !1);
    }
    var AA = eA, BA = z;
    st.Fragment = r, st.jsx = AA, st.jsxs = BA;
  }()), st;
}
process.env.NODE_ENV === "production" ? Lo.exports = Iu() : Lo.exports = xu();
var tn = Lo.exports;
const Su = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let cr = (e = 21) => {
  let A = "", t = crypto.getRandomValues(new Uint8Array(e));
  for (; e--; )
    A += Su[t[e] & 63];
  return A;
};
var cn = { exports: {} };
/*! For license information please see index.js.LICENSE.txt */
cn.exports;
(function(e, A) {
  (function(t, r) {
    e.exports = r(ta);
  })(at, (t) => (() => {
    var r = { 2761: (a) => {
      a.exports = function(u) {
        if (typeof u != "function")
          throw TypeError(u + " is not a function!");
        return u;
      };
    }, 2094: (a, u, n) => {
      var i = n(2190)("unscopables"), f = Array.prototype;
      f[i] == null && n(4216)(f, i, {}), a.exports = function(l) {
        f[i][l] = !0;
      };
    }, 8492: (a, u, n) => {
      var i = n(2070)(!0);
      a.exports = function(f, l, h) {
        return l + (h ? i(f, l).length : 1);
      };
    }, 5824: (a) => {
      a.exports = function(u, n, i, f) {
        if (!(u instanceof n) || f !== void 0 && f in u)
          throw TypeError(i + ": incorrect invocation!");
        return u;
      };
    }, 6365: (a, u, n) => {
      var i = n(7334);
      a.exports = function(f) {
        if (!i(f))
          throw TypeError(f + " is not an object!");
        return f;
      };
    }, 9021: (a, u, n) => {
      var i = n(5703), f = n(6078), l = n(8615);
      a.exports = function(h) {
        return function(Q, p, d) {
          var v, F = i(Q), H = f(F.length), x = l(d, H);
          if (h && p != p) {
            for (; H > x; )
              if ((v = F[x++]) != v)
                return !0;
          } else
            for (; H > x; x++)
              if ((h || x in F) && F[x] === p)
                return h || x || 0;
          return !h && -1;
        };
      };
    }, 8309: (a, u, n) => {
      var i = n(1528), f = n(8467), l = n(6033), h = n(6078), Q = n(3531);
      a.exports = function(p, d) {
        var v = p == 1, F = p == 2, H = p == 3, x = p == 4, O = p == 6, L = p == 5 || O, G = d || Q;
        return function(V, b, N) {
          for (var P, k, S = l(V), _ = f(S), Y = i(b, N, 3), iA = h(_.length), oA = 0, UA = v ? G(V, iA) : F ? G(V, 0) : void 0; iA > oA; oA++)
            if ((L || oA in _) && (k = Y(P = _[oA], oA, S), p)) {
              if (v)
                UA[oA] = k;
              else if (k)
                switch (p) {
                  case 3:
                    return !0;
                  case 5:
                    return P;
                  case 6:
                    return oA;
                  case 2:
                    UA.push(P);
                }
              else if (x)
                return !1;
            }
          return O ? -1 : H || x ? x : UA;
        };
      };
    }, 9291: (a, u, n) => {
      var i = n(2761), f = n(6033), l = n(8467), h = n(6078);
      a.exports = function(Q, p, d, v, F) {
        i(p);
        var H = f(Q), x = l(H), O = h(H.length), L = F ? O - 1 : 0, G = F ? -1 : 1;
        if (d < 2)
          for (; ; ) {
            if (L in x) {
              v = x[L], L += G;
              break;
            }
            if (L += G, F ? L < 0 : O <= L)
              throw TypeError("Reduce of empty array with no initial value");
          }
        for (; F ? L >= 0 : O > L; L += G)
          L in x && (v = p(v, x[L], L, H));
        return v;
      };
    }, 1071: (a, u, n) => {
      var i = n(7334), f = n(9141), l = n(2190)("species");
      a.exports = function(h) {
        var Q;
        return f(h) && (typeof (Q = h.constructor) != "function" || Q !== Array && !f(Q.prototype) || (Q = void 0), i(Q) && (Q = Q[l]) === null && (Q = void 0)), Q === void 0 ? Array : Q;
      };
    }, 3531: (a, u, n) => {
      var i = n(1071);
      a.exports = function(f, l) {
        return new (i(f))(l);
      };
    }, 9337: (a, u, n) => {
      var i = n(2761), f = n(7334), l = n(7757), h = [].slice, Q = {}, p = function(d, v, F) {
        if (!(v in Q)) {
          for (var H = [], x = 0; x < v; x++)
            H[x] = "a[" + x + "]";
          Q[v] = Function("F,a", "return new F(" + H.join(",") + ")");
        }
        return Q[v](d, F);
      };
      a.exports = Function.bind || function(d) {
        var v = i(this), F = h.call(arguments, 1), H = function() {
          var x = F.concat(h.call(arguments));
          return this instanceof H ? p(v, x.length, x) : l(v, x, d);
        };
        return f(v.prototype) && (H.prototype = v.prototype), H;
      };
    }, 106: (a, u, n) => {
      var i = n(6688), f = n(2190)("toStringTag"), l = i(/* @__PURE__ */ function() {
        return arguments;
      }()) == "Arguments";
      a.exports = function(h) {
        var Q, p, d;
        return h === void 0 ? "Undefined" : h === null ? "Null" : typeof (p = function(v, F) {
          try {
            return v[F];
          } catch {
          }
        }(Q = Object(h), f)) == "string" ? p : l ? i(Q) : (d = i(Q)) == "Object" && typeof Q.callee == "function" ? "Arguments" : d;
      };
    }, 6688: (a) => {
      var u = {}.toString;
      a.exports = function(n) {
        return u.call(n).slice(8, -1);
      };
    }, 5635: (a, u, n) => {
      var i = n(8558).f, f = n(2897), l = n(2243), h = n(1528), Q = n(5824), p = n(1891), d = n(1195), v = n(5038), F = n(9766), H = n(6628), x = n(998).fastKey, O = n(9060), L = H ? "_s" : "size", G = function(V, b) {
        var N, P = x(b);
        if (P !== "F")
          return V._i[P];
        for (N = V._f; N; N = N.n)
          if (N.k == b)
            return N;
      };
      a.exports = { getConstructor: function(V, b, N, P) {
        var k = V(function(S, _) {
          Q(S, k, b, "_i"), S._t = b, S._i = f(null), S._f = void 0, S._l = void 0, S[L] = 0, _ != null && p(_, N, S[P], S);
        });
        return l(k.prototype, { clear: function() {
          for (var S = O(this, b), _ = S._i, Y = S._f; Y; Y = Y.n)
            Y.r = !0, Y.p && (Y.p = Y.p.n = void 0), delete _[Y.i];
          S._f = S._l = void 0, S[L] = 0;
        }, delete: function(S) {
          var _ = O(this, b), Y = G(_, S);
          if (Y) {
            var iA = Y.n, oA = Y.p;
            delete _._i[Y.i], Y.r = !0, oA && (oA.n = iA), iA && (iA.p = oA), _._f == Y && (_._f = iA), _._l == Y && (_._l = oA), _[L]--;
          }
          return !!Y;
        }, forEach: function(S) {
          O(this, b);
          for (var _, Y = h(S, arguments.length > 1 ? arguments[1] : void 0, 3); _ = _ ? _.n : this._f; )
            for (Y(_.v, _.k, this); _ && _.r; )
              _ = _.p;
        }, has: function(S) {
          return !!G(O(this, b), S);
        } }), H && i(k.prototype, "size", { get: function() {
          return O(this, b)[L];
        } }), k;
      }, def: function(V, b, N) {
        var P, k, S = G(V, b);
        return S ? S.v = N : (V._l = S = { i: k = x(b, !0), k: b, v: N, p: P = V._l, n: void 0, r: !1 }, V._f || (V._f = S), P && (P.n = S), V[L]++, k !== "F" && (V._i[k] = S)), V;
      }, getEntry: G, setStrong: function(V, b, N) {
        d(V, b, function(P, k) {
          this._t = O(P, b), this._k = k, this._l = void 0;
        }, function() {
          for (var P = this, k = P._k, S = P._l; S && S.r; )
            S = S.p;
          return P._t && (P._l = S = S ? S.n : P._t._f) ? v(0, k == "keys" ? S.k : k == "values" ? S.v : [S.k, S.v]) : (P._t = void 0, v(1));
        }, N ? "entries" : "values", !N, !0), F(b);
      } };
    }, 6339: (a, u, n) => {
      var i = n(2243), f = n(998).getWeak, l = n(6365), h = n(7334), Q = n(5824), p = n(1891), d = n(8309), v = n(4040), F = n(9060), H = d(5), x = d(6), O = 0, L = function(b) {
        return b._l || (b._l = new G());
      }, G = function() {
        this.a = [];
      }, V = function(b, N) {
        return H(b.a, function(P) {
          return P[0] === N;
        });
      };
      G.prototype = { get: function(b) {
        var N = V(this, b);
        if (N)
          return N[1];
      }, has: function(b) {
        return !!V(this, b);
      }, set: function(b, N) {
        var P = V(this, b);
        P ? P[1] = N : this.a.push([b, N]);
      }, delete: function(b) {
        var N = x(this.a, function(P) {
          return P[0] === b;
        });
        return ~N && this.a.splice(N, 1), !!~N;
      } }, a.exports = { getConstructor: function(b, N, P, k) {
        var S = b(function(_, Y) {
          Q(_, S, N, "_i"), _._t = N, _._i = O++, _._l = void 0, Y != null && p(Y, P, _[k], _);
        });
        return i(S.prototype, { delete: function(_) {
          if (!h(_))
            return !1;
          var Y = f(_);
          return Y === !0 ? L(F(this, N)).delete(_) : Y && v(Y, this._i) && delete Y[this._i];
        }, has: function(_) {
          if (!h(_))
            return !1;
          var Y = f(_);
          return Y === !0 ? L(F(this, N)).has(_) : Y && v(Y, this._i);
        } }), S;
      }, def: function(b, N, P) {
        var k = f(l(N), !0);
        return k === !0 ? L(b).set(N, P) : k[b._i] = P, b;
      }, ufstore: L };
    }, 7611: (a, u, n) => {
      var i = n(8113), f = n(5772), l = n(7738), h = n(2243), Q = n(998), p = n(1891), d = n(5824), v = n(7334), F = n(8625), H = n(3143), x = n(5727), O = n(8938);
      a.exports = function(L, G, V, b, N, P) {
        var k = i[L], S = k, _ = N ? "set" : "add", Y = S && S.prototype, iA = {}, oA = function(QA) {
          var X = Y[QA];
          l(Y, QA, QA == "delete" || QA == "has" ? function(M) {
            return !(P && !v(M)) && X.call(this, M === 0 ? 0 : M);
          } : QA == "get" ? function(M) {
            return P && !v(M) ? void 0 : X.call(this, M === 0 ? 0 : M);
          } : QA == "add" ? function(M) {
            return X.call(this, M === 0 ? 0 : M), this;
          } : function(M, q) {
            return X.call(this, M === 0 ? 0 : M, q), this;
          });
        };
        if (typeof S == "function" && (P || Y.forEach && !F(function() {
          new S().entries().next();
        }))) {
          var UA = new S(), HA = UA[_](P ? {} : -0, 1) != UA, CA = F(function() {
            UA.has(1);
          }), EA = H(function(QA) {
            new S(QA);
          }), FA = !P && F(function() {
            for (var QA = new S(), X = 5; X--; )
              QA[_](X, X);
            return !QA.has(-0);
          });
          EA || ((S = G(function(QA, X) {
            d(QA, S, L);
            var M = O(new k(), QA, S);
            return X != null && p(X, N, M[_], M), M;
          })).prototype = Y, Y.constructor = S), (CA || FA) && (oA("delete"), oA("has"), N && oA("get")), (FA || HA) && oA(_), P && Y.clear && delete Y.clear;
        } else
          S = b.getConstructor(G, L, N, _), h(S.prototype, V), Q.NEED = !0;
        return x(S, L), iA[L] = S, f(f.G + f.W + f.F * (S != k), iA), P || b.setStrong(S, L, N), S;
      };
    }, 66: (a) => {
      var u = a.exports = { version: "2.6.12" };
      typeof __e == "number" && (__e = u);
    }, 6644: (a, u, n) => {
      var i = n(8558), f = n(6061);
      a.exports = function(l, h, Q) {
        h in l ? i.f(l, h, f(0, Q)) : l[h] = Q;
      };
    }, 1528: (a, u, n) => {
      var i = n(2761);
      a.exports = function(f, l, h) {
        if (i(f), l === void 0)
          return f;
        switch (h) {
          case 1:
            return function(Q) {
              return f.call(l, Q);
            };
          case 2:
            return function(Q, p) {
              return f.call(l, Q, p);
            };
          case 3:
            return function(Q, p, d) {
              return f.call(l, Q, p, d);
            };
        }
        return function() {
          return f.apply(l, arguments);
        };
      };
    }, 1622: (a) => {
      a.exports = function(u) {
        if (u == null)
          throw TypeError("Can't call method on  " + u);
        return u;
      };
    }, 6628: (a, u, n) => {
      a.exports = !n(8625)(function() {
        return Object.defineProperty({}, "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }, 5050: (a, u, n) => {
      var i = n(7334), f = n(8113).document, l = i(f) && i(f.createElement);
      a.exports = function(h) {
        return l ? f.createElement(h) : {};
      };
    }, 3603: (a) => {
      a.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    }, 7820: (a, u, n) => {
      var i = n(2912), f = n(7957), l = n(5873);
      a.exports = function(h) {
        var Q = i(h), p = f.f;
        if (p)
          for (var d, v = p(h), F = l.f, H = 0; v.length > H; )
            F.call(h, d = v[H++]) && Q.push(d);
        return Q;
      };
    }, 5772: (a, u, n) => {
      var i = n(8113), f = n(66), l = n(4216), h = n(7738), Q = n(1528), p = "prototype", d = function(v, F, H) {
        var x, O, L, G, V = v & d.F, b = v & d.G, N = v & d.S, P = v & d.P, k = v & d.B, S = b ? i : N ? i[F] || (i[F] = {}) : (i[F] || {})[p], _ = b ? f : f[F] || (f[F] = {}), Y = _[p] || (_[p] = {});
        for (x in b && (H = F), H)
          L = ((O = !V && S && S[x] !== void 0) ? S : H)[x], G = k && O ? Q(L, i) : P && typeof L == "function" ? Q(Function.call, L) : L, S && h(S, x, L, v & d.U), _[x] != L && l(_, x, G), P && Y[x] != L && (Y[x] = L);
      };
      i.core = f, d.F = 1, d.G = 2, d.S = 4, d.P = 8, d.B = 16, d.W = 32, d.U = 64, d.R = 128, a.exports = d;
    }, 6570: (a, u, n) => {
      var i = n(2190)("match");
      a.exports = function(f) {
        var l = /./;
        try {
          "/./"[f](l);
        } catch {
          try {
            return l[i] = !1, !"/./"[f](l);
          } catch {
          }
        }
        return !0;
      };
    }, 8625: (a) => {
      a.exports = function(u) {
        try {
          return !!u();
        } catch {
          return !0;
        }
      };
    }, 8897: (a, u, n) => {
      n(5846);
      var i = n(7738), f = n(4216), l = n(8625), h = n(1622), Q = n(2190), p = n(3288), d = Q("species"), v = !l(function() {
        var H = /./;
        return H.exec = function() {
          var x = [];
          return x.groups = { a: "7" }, x;
        }, "".replace(H, "$<a>") !== "7";
      }), F = function() {
        var H = /(?:)/, x = H.exec;
        H.exec = function() {
          return x.apply(this, arguments);
        };
        var O = "ab".split(H);
        return O.length === 2 && O[0] === "a" && O[1] === "b";
      }();
      a.exports = function(H, x, O) {
        var L = Q(H), G = !l(function() {
          var S = {};
          return S[L] = function() {
            return 7;
          }, ""[H](S) != 7;
        }), V = G ? !l(function() {
          var S = !1, _ = /a/;
          return _.exec = function() {
            return S = !0, null;
          }, H === "split" && (_.constructor = {}, _.constructor[d] = function() {
            return _;
          }), _[L](""), !S;
        }) : void 0;
        if (!G || !V || H === "replace" && !v || H === "split" && !F) {
          var b = /./[L], N = O(h, L, ""[H], function(S, _, Y, iA, oA) {
            return _.exec === p ? G && !oA ? { done: !0, value: b.call(_, Y, iA) } : { done: !0, value: S.call(Y, _, iA) } : { done: !1 };
          }), P = N[0], k = N[1];
          i(String.prototype, H, P), f(RegExp.prototype, L, x == 2 ? function(S, _) {
            return k.call(S, this, _);
          } : function(S) {
            return k.call(S, this);
          });
        }
      };
    }, 4859: (a, u, n) => {
      var i = n(6365);
      a.exports = function() {
        var f = i(this), l = "";
        return f.global && (l += "g"), f.ignoreCase && (l += "i"), f.multiline && (l += "m"), f.unicode && (l += "u"), f.sticky && (l += "y"), l;
      };
    }, 1891: (a, u, n) => {
      var i = n(1528), f = n(3221), l = n(8908), h = n(6365), Q = n(6078), p = n(7107), d = {}, v = {}, F = a.exports = function(H, x, O, L, G) {
        var V, b, N, P, k = G ? function() {
          return H;
        } : p(H), S = i(O, L, x ? 2 : 1), _ = 0;
        if (typeof k != "function")
          throw TypeError(H + " is not iterable!");
        if (l(k)) {
          for (V = Q(H.length); V > _; _++)
            if ((P = x ? S(h(b = H[_])[0], b[1]) : S(H[_])) === d || P === v)
              return P;
        } else
          for (N = k.call(H); !(b = N.next()).done; )
            if ((P = f(N, S, b.value, x)) === d || P === v)
              return P;
      };
      F.BREAK = d, F.RETURN = v;
    }, 646: (a, u, n) => {
      a.exports = n(8655)("native-function-to-string", Function.toString);
    }, 8113: (a) => {
      var u = a.exports = typeof window < "u" && window.Math == Math ? window : typeof self < "u" && self.Math == Math ? self : Function("return this")();
      typeof __g == "number" && (__g = u);
    }, 4040: (a) => {
      var u = {}.hasOwnProperty;
      a.exports = function(n, i) {
        return u.call(n, i);
      };
    }, 4216: (a, u, n) => {
      var i = n(8558), f = n(6061);
      a.exports = n(6628) ? function(l, h, Q) {
        return i.f(l, h, f(1, Q));
      } : function(l, h, Q) {
        return l[h] = Q, l;
      };
    }, 8954: (a, u, n) => {
      var i = n(8113).document;
      a.exports = i && i.documentElement;
    }, 5100: (a, u, n) => {
      a.exports = !n(6628) && !n(8625)(function() {
        return Object.defineProperty(n(5050)("div"), "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }, 8938: (a, u, n) => {
      var i = n(7334), f = n(6095).set;
      a.exports = function(l, h, Q) {
        var p, d = h.constructor;
        return d !== Q && typeof d == "function" && (p = d.prototype) !== Q.prototype && i(p) && f && f(l, p), l;
      };
    }, 7757: (a) => {
      a.exports = function(u, n, i) {
        var f = i === void 0;
        switch (n.length) {
          case 0:
            return f ? u() : u.call(i);
          case 1:
            return f ? u(n[0]) : u.call(i, n[0]);
          case 2:
            return f ? u(n[0], n[1]) : u.call(i, n[0], n[1]);
          case 3:
            return f ? u(n[0], n[1], n[2]) : u.call(i, n[0], n[1], n[2]);
          case 4:
            return f ? u(n[0], n[1], n[2], n[3]) : u.call(i, n[0], n[1], n[2], n[3]);
        }
        return u.apply(i, n);
      };
    }, 8467: (a, u, n) => {
      var i = n(6688);
      a.exports = Object("z").propertyIsEnumerable(0) ? Object : function(f) {
        return i(f) == "String" ? f.split("") : Object(f);
      };
    }, 8908: (a, u, n) => {
      var i = n(3988), f = n(2190)("iterator"), l = Array.prototype;
      a.exports = function(h) {
        return h !== void 0 && (i.Array === h || l[f] === h);
      };
    }, 9141: (a, u, n) => {
      var i = n(6688);
      a.exports = Array.isArray || function(f) {
        return i(f) == "Array";
      };
    }, 7334: (a) => {
      a.exports = function(u) {
        return typeof u == "object" ? u !== null : typeof u == "function";
      };
    }, 4587: (a, u, n) => {
      var i = n(7334), f = n(6688), l = n(2190)("match");
      a.exports = function(h) {
        var Q;
        return i(h) && ((Q = h[l]) !== void 0 ? !!Q : f(h) == "RegExp");
      };
    }, 3221: (a, u, n) => {
      var i = n(6365);
      a.exports = function(f, l, h, Q) {
        try {
          return Q ? l(i(h)[0], h[1]) : l(h);
        } catch (d) {
          var p = f.return;
          throw p !== void 0 && i(p.call(f)), d;
        }
      };
    }, 6445: (a, u, n) => {
      var i = n(2897), f = n(6061), l = n(5727), h = {};
      n(4216)(h, n(2190)("iterator"), function() {
        return this;
      }), a.exports = function(Q, p, d) {
        Q.prototype = i(h, { next: f(1, d) }), l(Q, p + " Iterator");
      };
    }, 1195: (a, u, n) => {
      var i = n(1422), f = n(5772), l = n(7738), h = n(4216), Q = n(3988), p = n(6445), d = n(5727), v = n(9002), F = n(2190)("iterator"), H = !([].keys && "next" in [].keys()), x = "keys", O = "values", L = function() {
        return this;
      };
      a.exports = function(G, V, b, N, P, k, S) {
        p(b, V, N);
        var _, Y, iA, oA = function(q) {
          if (!H && q in EA)
            return EA[q];
          switch (q) {
            case x:
            case O:
              return function() {
                return new b(this, q);
              };
          }
          return function() {
            return new b(this, q);
          };
        }, UA = V + " Iterator", HA = P == O, CA = !1, EA = G.prototype, FA = EA[F] || EA["@@iterator"] || P && EA[P], QA = FA || oA(P), X = P ? HA ? oA("entries") : QA : void 0, M = V == "Array" && EA.entries || FA;
        if (M && (iA = v(M.call(new G()))) !== Object.prototype && iA.next && (d(iA, UA, !0), i || typeof iA[F] == "function" || h(iA, F, L)), HA && FA && FA.name !== O && (CA = !0, QA = function() {
          return FA.call(this);
        }), i && !S || !H && !CA && EA[F] || h(EA, F, QA), Q[V] = QA, Q[UA] = L, P)
          if (_ = { values: HA ? QA : oA(O), keys: k ? QA : oA(x), entries: X }, S)
            for (Y in _)
              Y in EA || l(EA, Y, _[Y]);
          else
            f(f.P + f.F * (H || CA), V, _);
        return _;
      };
    }, 3143: (a, u, n) => {
      var i = n(2190)("iterator"), f = !1;
      try {
        var l = [7][i]();
        l.return = function() {
          f = !0;
        }, Array.from(l, function() {
          throw 2;
        });
      } catch {
      }
      a.exports = function(h, Q) {
        if (!Q && !f)
          return !1;
        var p = !1;
        try {
          var d = [7], v = d[i]();
          v.next = function() {
            return { done: p = !0 };
          }, d[i] = function() {
            return v;
          }, h(d);
        } catch {
        }
        return p;
      };
    }, 5038: (a) => {
      a.exports = function(u, n) {
        return { value: n, done: !!u };
      };
    }, 3988: (a) => {
      a.exports = {};
    }, 1422: (a) => {
      a.exports = !1;
    }, 998: (a, u, n) => {
      var i = n(5078)("meta"), f = n(7334), l = n(4040), h = n(8558).f, Q = 0, p = Object.isExtensible || function() {
        return !0;
      }, d = !n(8625)(function() {
        return p(Object.preventExtensions({}));
      }), v = function(H) {
        h(H, i, { value: { i: "O" + ++Q, w: {} } });
      }, F = a.exports = { KEY: i, NEED: !1, fastKey: function(H, x) {
        if (!f(H))
          return typeof H == "symbol" ? H : (typeof H == "string" ? "S" : "P") + H;
        if (!l(H, i)) {
          if (!p(H))
            return "F";
          if (!x)
            return "E";
          v(H);
        }
        return H[i].i;
      }, getWeak: function(H, x) {
        if (!l(H, i)) {
          if (!p(H))
            return !0;
          if (!x)
            return !1;
          v(H);
        }
        return H[i].w;
      }, onFreeze: function(H) {
        return d && F.NEED && p(H) && !l(H, i) && v(H), H;
      } };
    }, 3492: (a, u, n) => {
      var i = n(8113), f = n(9124).set, l = i.MutationObserver || i.WebKitMutationObserver, h = i.process, Q = i.Promise, p = n(6688)(h) == "process";
      a.exports = function() {
        var d, v, F, H = function() {
          var G, V;
          for (p && (G = h.domain) && G.exit(); d; ) {
            V = d.fn, d = d.next;
            try {
              V();
            } catch (b) {
              throw d ? F() : v = void 0, b;
            }
          }
          v = void 0, G && G.enter();
        };
        if (p)
          F = function() {
            h.nextTick(H);
          };
        else if (!l || i.navigator && i.navigator.standalone)
          if (Q && Q.resolve) {
            var x = Q.resolve(void 0);
            F = function() {
              x.then(H);
            };
          } else
            F = function() {
              f.call(i, H);
            };
        else {
          var O = !0, L = document.createTextNode("");
          new l(H).observe(L, { characterData: !0 }), F = function() {
            L.data = O = !O;
          };
        }
        return function(G) {
          var V = { fn: G, next: void 0 };
          v && (v.next = V), d || (d = V, F()), v = V;
        };
      };
    }, 8577: (a, u, n) => {
      var i = n(2761);
      function f(l) {
        var h, Q;
        this.promise = new l(function(p, d) {
          if (h !== void 0 || Q !== void 0)
            throw TypeError("Bad Promise constructor");
          h = p, Q = d;
        }), this.resolve = i(h), this.reject = i(Q);
      }
      a.exports.f = function(l) {
        return new f(l);
      };
    }, 7029: (a, u, n) => {
      var i = n(6628), f = n(2912), l = n(7957), h = n(5873), Q = n(6033), p = n(8467), d = Object.assign;
      a.exports = !d || n(8625)(function() {
        var v = {}, F = {}, H = Symbol(), x = "abcdefghijklmnopqrst";
        return v[H] = 7, x.split("").forEach(function(O) {
          F[O] = O;
        }), d({}, v)[H] != 7 || Object.keys(d({}, F)).join("") != x;
      }) ? function(v, F) {
        for (var H = Q(v), x = arguments.length, O = 1, L = l.f, G = h.f; x > O; )
          for (var V, b = p(arguments[O++]), N = L ? f(b).concat(L(b)) : f(b), P = N.length, k = 0; P > k; )
            V = N[k++], i && !G.call(b, V) || (H[V] = b[V]);
        return H;
      } : d;
    }, 2897: (a, u, n) => {
      var i = n(6365), f = n(7331), l = n(3603), h = n(8034)("IE_PROTO"), Q = function() {
      }, p = "prototype", d = function() {
        var v, F = n(5050)("iframe"), H = l.length;
        for (F.style.display = "none", n(8954).appendChild(F), F.src = "javascript:", (v = F.contentWindow.document).open(), v.write("<script>document.F=Object<\/script>"), v.close(), d = v.F; H--; )
          delete d[p][l[H]];
        return d();
      };
      a.exports = Object.create || function(v, F) {
        var H;
        return v !== null ? (Q[p] = i(v), H = new Q(), Q[p] = null, H[h] = v) : H = d(), F === void 0 ? H : f(H, F);
      };
    }, 8558: (a, u, n) => {
      var i = n(6365), f = n(5100), l = n(1382), h = Object.defineProperty;
      u.f = n(6628) ? Object.defineProperty : function(Q, p, d) {
        if (i(Q), p = l(p, !0), i(d), f)
          try {
            return h(Q, p, d);
          } catch {
          }
        if ("get" in d || "set" in d)
          throw TypeError("Accessors not supported!");
        return "value" in d && (Q[p] = d.value), Q;
      };
    }, 7331: (a, u, n) => {
      var i = n(8558), f = n(6365), l = n(2912);
      a.exports = n(6628) ? Object.defineProperties : function(h, Q) {
        f(h);
        for (var p, d = l(Q), v = d.length, F = 0; v > F; )
          i.f(h, p = d[F++], Q[p]);
        return h;
      };
    }, 4662: (a, u, n) => {
      var i = n(5873), f = n(6061), l = n(5703), h = n(1382), Q = n(4040), p = n(5100), d = Object.getOwnPropertyDescriptor;
      u.f = n(6628) ? d : function(v, F) {
        if (v = l(v), F = h(F, !0), p)
          try {
            return d(v, F);
          } catch {
          }
        if (Q(v, F))
          return f(!i.f.call(v, F), v[F]);
      };
    }, 5259: (a, u, n) => {
      var i = n(5703), f = n(6604).f, l = {}.toString, h = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
      a.exports.f = function(Q) {
        return h && l.call(Q) == "[object Window]" ? function(p) {
          try {
            return f(p);
          } catch {
            return h.slice();
          }
        }(Q) : f(i(Q));
      };
    }, 6604: (a, u, n) => {
      var i = n(5547), f = n(3603).concat("length", "prototype");
      u.f = Object.getOwnPropertyNames || function(l) {
        return i(l, f);
      };
    }, 7957: (a, u) => {
      u.f = Object.getOwnPropertySymbols;
    }, 9002: (a, u, n) => {
      var i = n(4040), f = n(6033), l = n(8034)("IE_PROTO"), h = Object.prototype;
      a.exports = Object.getPrototypeOf || function(Q) {
        return Q = f(Q), i(Q, l) ? Q[l] : typeof Q.constructor == "function" && Q instanceof Q.constructor ? Q.constructor.prototype : Q instanceof Object ? h : null;
      };
    }, 5547: (a, u, n) => {
      var i = n(4040), f = n(5703), l = n(9021)(!1), h = n(8034)("IE_PROTO");
      a.exports = function(Q, p) {
        var d, v = f(Q), F = 0, H = [];
        for (d in v)
          d != h && i(v, d) && H.push(d);
        for (; p.length > F; )
          i(v, d = p[F++]) && (~l(H, d) || H.push(d));
        return H;
      };
    }, 2912: (a, u, n) => {
      var i = n(5547), f = n(3603);
      a.exports = Object.keys || function(l) {
        return i(l, f);
      };
    }, 5873: (a, u) => {
      u.f = {}.propertyIsEnumerable;
    }, 468: (a, u, n) => {
      var i = n(5772), f = n(66), l = n(8625);
      a.exports = function(h, Q) {
        var p = (f.Object || {})[h] || Object[h], d = {};
        d[h] = Q(p), i(i.S + i.F * l(function() {
          p(1);
        }), "Object", d);
      };
    }, 758: (a, u, n) => {
      var i = n(6628), f = n(2912), l = n(5703), h = n(5873).f;
      a.exports = function(Q) {
        return function(p) {
          for (var d, v = l(p), F = f(v), H = F.length, x = 0, O = []; H > x; )
            d = F[x++], i && !h.call(v, d) || O.push(Q ? [d, v[d]] : v[d]);
          return O;
        };
      };
    }, 6831: (a, u, n) => {
      var i = n(6604), f = n(7957), l = n(6365), h = n(8113).Reflect;
      a.exports = h && h.ownKeys || function(Q) {
        var p = i.f(l(Q)), d = f.f;
        return d ? p.concat(d(Q)) : p;
      };
    }, 9739: (a) => {
      a.exports = function(u) {
        try {
          return { e: !1, v: u() };
        } catch (n) {
          return { e: !0, v: n };
        }
      };
    }, 5151: (a, u, n) => {
      var i = n(6365), f = n(7334), l = n(8577);
      a.exports = function(h, Q) {
        if (i(h), f(Q) && Q.constructor === h)
          return Q;
        var p = l.f(h);
        return (0, p.resolve)(Q), p.promise;
      };
    }, 6061: (a) => {
      a.exports = function(u, n) {
        return { enumerable: !(1 & u), configurable: !(2 & u), writable: !(4 & u), value: n };
      };
    }, 2243: (a, u, n) => {
      var i = n(7738);
      a.exports = function(f, l, h) {
        for (var Q in l)
          i(f, Q, l[Q], h);
        return f;
      };
    }, 7738: (a, u, n) => {
      var i = n(8113), f = n(4216), l = n(4040), h = n(5078)("src"), Q = n(646), p = "toString", d = ("" + Q).split(p);
      n(66).inspectSource = function(v) {
        return Q.call(v);
      }, (a.exports = function(v, F, H, x) {
        var O = typeof H == "function";
        O && (l(H, "name") || f(H, "name", F)), v[F] !== H && (O && (l(H, h) || f(H, h, v[F] ? "" + v[F] : d.join(String(F)))), v === i ? v[F] = H : x ? v[F] ? v[F] = H : f(v, F, H) : (delete v[F], f(v, F, H)));
      })(Function.prototype, p, function() {
        return typeof this == "function" && this[h] || Q.call(this);
      });
    }, 2404: (a, u, n) => {
      var i = n(106), f = RegExp.prototype.exec;
      a.exports = function(l, h) {
        var Q = l.exec;
        if (typeof Q == "function") {
          var p = Q.call(l, h);
          if (typeof p != "object")
            throw new TypeError("RegExp exec method returned something other than an Object or null");
          return p;
        }
        if (i(l) !== "RegExp")
          throw new TypeError("RegExp#exec called on incompatible receiver");
        return f.call(l, h);
      };
    }, 3288: (a, u, n) => {
      var i, f, l = n(4859), h = RegExp.prototype.exec, Q = String.prototype.replace, p = h, d = "lastIndex", v = (i = /a/, f = /b*/g, h.call(i, "a"), h.call(f, "a"), i[d] !== 0 || f[d] !== 0), F = /()??/.exec("")[1] !== void 0;
      (v || F) && (p = function(H) {
        var x, O, L, G, V = this;
        return F && (O = new RegExp("^" + V.source + "$(?!\\s)", l.call(V))), v && (x = V[d]), L = h.call(V, H), v && L && (V[d] = V.global ? L.index + L[0].length : x), F && L && L.length > 1 && Q.call(L[0], O, function() {
          for (G = 1; G < arguments.length - 2; G++)
            arguments[G] === void 0 && (L[G] = void 0);
        }), L;
      }), a.exports = p;
    }, 6095: (a, u, n) => {
      var i = n(7334), f = n(6365), l = function(h, Q) {
        if (f(h), !i(Q) && Q !== null)
          throw TypeError(Q + ": can't set as prototype!");
      };
      a.exports = { set: Object.setPrototypeOf || ("__proto__" in {} ? function(h, Q, p) {
        try {
          (p = n(1528)(Function.call, n(4662).f(Object.prototype, "__proto__").set, 2))(h, []), Q = !(h instanceof Array);
        } catch {
          Q = !0;
        }
        return function(d, v) {
          return l(d, v), Q ? d.__proto__ = v : p(d, v), d;
        };
      }({}, !1) : void 0), check: l };
    }, 9766: (a, u, n) => {
      var i = n(8113), f = n(8558), l = n(6628), h = n(2190)("species");
      a.exports = function(Q) {
        var p = i[Q];
        l && p && !p[h] && f.f(p, h, { configurable: !0, get: function() {
          return this;
        } });
      };
    }, 5727: (a, u, n) => {
      var i = n(8558).f, f = n(4040), l = n(2190)("toStringTag");
      a.exports = function(h, Q, p) {
        h && !f(h = p ? h : h.prototype, l) && i(h, l, { configurable: !0, value: Q });
      };
    }, 8034: (a, u, n) => {
      var i = n(8655)("keys"), f = n(5078);
      a.exports = function(l) {
        return i[l] || (i[l] = f(l));
      };
    }, 8655: (a, u, n) => {
      var i = n(66), f = n(8113), l = "__core-js_shared__", h = f[l] || (f[l] = {});
      (a.exports = function(Q, p) {
        return h[Q] || (h[Q] = p !== void 0 ? p : {});
      })("versions", []).push({ version: i.version, mode: n(1422) ? "pure" : "global", copyright: "© 2020 Denis Pushkarev (zloirock.ru)" });
    }, 1987: (a, u, n) => {
      var i = n(6365), f = n(2761), l = n(2190)("species");
      a.exports = function(h, Q) {
        var p, d = i(h).constructor;
        return d === void 0 || (p = i(d)[l]) == null ? Q : f(p);
      };
    }, 225: (a, u, n) => {
      var i = n(8625);
      a.exports = function(f, l) {
        return !!f && i(function() {
          l ? f.call(null, function() {
          }, 1) : f.call(null);
        });
      };
    }, 2070: (a, u, n) => {
      var i = n(3338), f = n(1622);
      a.exports = function(l) {
        return function(h, Q) {
          var p, d, v = String(f(h)), F = i(Q), H = v.length;
          return F < 0 || F >= H ? l ? "" : void 0 : (p = v.charCodeAt(F)) < 55296 || p > 56319 || F + 1 === H || (d = v.charCodeAt(F + 1)) < 56320 || d > 57343 ? l ? v.charAt(F) : p : l ? v.slice(F, F + 2) : d - 56320 + (p - 55296 << 10) + 65536;
        };
      };
    }, 465: (a, u, n) => {
      var i = n(4587), f = n(1622);
      a.exports = function(l, h, Q) {
        if (i(h))
          throw TypeError("String#" + Q + " doesn't accept regex!");
        return String(f(l));
      };
    }, 9124: (a, u, n) => {
      var i, f, l, h = n(1528), Q = n(7757), p = n(8954), d = n(5050), v = n(8113), F = v.process, H = v.setImmediate, x = v.clearImmediate, O = v.MessageChannel, L = v.Dispatch, G = 0, V = {}, b = "onreadystatechange", N = function() {
        var k = +this;
        if (V.hasOwnProperty(k)) {
          var S = V[k];
          delete V[k], S();
        }
      }, P = function(k) {
        N.call(k.data);
      };
      H && x || (H = function(k) {
        for (var S = [], _ = 1; arguments.length > _; )
          S.push(arguments[_++]);
        return V[++G] = function() {
          Q(typeof k == "function" ? k : Function(k), S);
        }, i(G), G;
      }, x = function(k) {
        delete V[k];
      }, n(6688)(F) == "process" ? i = function(k) {
        F.nextTick(h(N, k, 1));
      } : L && L.now ? i = function(k) {
        L.now(h(N, k, 1));
      } : O ? (l = (f = new O()).port2, f.port1.onmessage = P, i = h(l.postMessage, l, 1)) : v.addEventListener && typeof postMessage == "function" && !v.importScripts ? (i = function(k) {
        v.postMessage(k + "", "*");
      }, v.addEventListener("message", P, !1)) : i = b in d("script") ? function(k) {
        p.appendChild(d("script"))[b] = function() {
          p.removeChild(this), N.call(k);
        };
      } : function(k) {
        setTimeout(h(N, k, 1), 0);
      }), a.exports = { set: H, clear: x };
    }, 8615: (a, u, n) => {
      var i = n(3338), f = Math.max, l = Math.min;
      a.exports = function(h, Q) {
        return (h = i(h)) < 0 ? f(h + Q, 0) : l(h, Q);
      };
    }, 3338: (a) => {
      var u = Math.ceil, n = Math.floor;
      a.exports = function(i) {
        return isNaN(i = +i) ? 0 : (i > 0 ? n : u)(i);
      };
    }, 5703: (a, u, n) => {
      var i = n(8467), f = n(1622);
      a.exports = function(l) {
        return i(f(l));
      };
    }, 6078: (a, u, n) => {
      var i = n(3338), f = Math.min;
      a.exports = function(l) {
        return l > 0 ? f(i(l), 9007199254740991) : 0;
      };
    }, 6033: (a, u, n) => {
      var i = n(1622);
      a.exports = function(f) {
        return Object(i(f));
      };
    }, 1382: (a, u, n) => {
      var i = n(7334);
      a.exports = function(f, l) {
        if (!i(f))
          return f;
        var h, Q;
        if (l && typeof (h = f.toString) == "function" && !i(Q = h.call(f)) || typeof (h = f.valueOf) == "function" && !i(Q = h.call(f)) || !l && typeof (h = f.toString) == "function" && !i(Q = h.call(f)))
          return Q;
        throw TypeError("Can't convert object to primitive value");
      };
    }, 5078: (a) => {
      var u = 0, n = Math.random();
      a.exports = function(i) {
        return "Symbol(".concat(i === void 0 ? "" : i, ")_", (++u + n).toString(36));
      };
    }, 5822: (a, u, n) => {
      var i = n(8113).navigator;
      a.exports = i && i.userAgent || "";
    }, 9060: (a, u, n) => {
      var i = n(7334);
      a.exports = function(f, l) {
        if (!i(f) || f._t !== l)
          throw TypeError("Incompatible receiver, " + l + " required!");
        return f;
      };
    }, 5660: (a, u, n) => {
      var i = n(8113), f = n(66), l = n(1422), h = n(9669), Q = n(8558).f;
      a.exports = function(p) {
        var d = f.Symbol || (f.Symbol = l ? {} : i.Symbol || {});
        p.charAt(0) == "_" || p in d || Q(d, p, { value: h.f(p) });
      };
    }, 9669: (a, u, n) => {
      u.f = n(2190);
    }, 2190: (a, u, n) => {
      var i = n(8655)("wks"), f = n(5078), l = n(8113).Symbol, h = typeof l == "function";
      (a.exports = function(Q) {
        return i[Q] || (i[Q] = h && l[Q] || (h ? l : f)("Symbol." + Q));
      }).store = i;
    }, 7107: (a, u, n) => {
      var i = n(106), f = n(2190)("iterator"), l = n(3988);
      a.exports = n(66).getIteratorMethod = function(h) {
        if (h != null)
          return h[f] || h["@@iterator"] || l[i(h)];
      };
    }, 4434: (a, u, n) => {
      var i = n(5772), f = n(8309)(2);
      i(i.P + i.F * !n(225)([].filter, !0), "Array", { filter: function(l) {
        return f(this, l, arguments[1]);
      } });
    }, 8703: (a, u, n) => {
      var i = n(5772), f = n(8309)(6), l = "findIndex", h = !0;
      l in [] && Array(1)[l](function() {
        h = !1;
      }), i(i.P + i.F * h, "Array", { findIndex: function(Q) {
        return f(this, Q, arguments.length > 1 ? arguments[1] : void 0);
      } }), n(2094)(l);
    }, 7772: (a, u, n) => {
      var i = n(5772), f = n(8309)(0), l = n(225)([].forEach, !0);
      i(i.P + i.F * !l, "Array", { forEach: function(h) {
        return f(this, h, arguments[1]);
      } });
    }, 5155: (a, u, n) => {
      var i = n(5772), f = n(9021)(!1), l = [].indexOf, h = !!l && 1 / [1].indexOf(1, -0) < 0;
      i(i.P + i.F * (h || !n(225)(l)), "Array", { indexOf: function(Q) {
        return h ? l.apply(this, arguments) || 0 : f(this, Q, arguments[1]);
      } });
    }, 5867: (a, u, n) => {
      var i = n(5772);
      i(i.S, "Array", { isArray: n(9141) });
    }, 7680: (a, u, n) => {
      var i = n(2094), f = n(5038), l = n(3988), h = n(5703);
      a.exports = n(1195)(Array, "Array", function(Q, p) {
        this._t = h(Q), this._i = 0, this._k = p;
      }, function() {
        var Q = this._t, p = this._k, d = this._i++;
        return !Q || d >= Q.length ? (this._t = void 0, f(1)) : f(0, p == "keys" ? d : p == "values" ? Q[d] : [d, Q[d]]);
      }, "values"), l.Arguments = l.Array, i("keys"), i("values"), i("entries");
    }, 286: (a, u, n) => {
      var i = n(5772), f = n(8309)(1);
      i(i.P + i.F * !n(225)([].map, !0), "Array", { map: function(l) {
        return f(this, l, arguments[1]);
      } });
    }, 9399: (a, u, n) => {
      var i = n(5772), f = n(9291);
      i(i.P + i.F * !n(225)([].reduce, !0), "Array", { reduce: function(l) {
        return f(this, l, arguments.length, arguments[1], !1);
      } });
    }, 7209: (a, u, n) => {
      var i = n(5772), f = n(8954), l = n(6688), h = n(8615), Q = n(6078), p = [].slice;
      i(i.P + i.F * n(8625)(function() {
        f && p.call(f);
      }), "Array", { slice: function(d, v) {
        var F = Q(this.length), H = l(this);
        if (v = v === void 0 ? F : v, H == "Array")
          return p.call(this, d, v);
        for (var x = h(d, F), O = h(v, F), L = Q(O - x), G = new Array(L), V = 0; V < L; V++)
          G[V] = H == "String" ? this.charAt(x + V) : this[x + V];
        return G;
      } });
    }, 5105: (a, u, n) => {
      var i = Date.prototype, f = "Invalid Date", l = "toString", h = i[l], Q = i.getTime;
      /* @__PURE__ */ new Date(NaN) + "" != f && n(7738)(i, l, function() {
        var p = Q.call(this);
        return p == p ? h.call(this) : f;
      });
    }, 8629: (a, u, n) => {
      var i = n(5772);
      i(i.P, "Function", { bind: n(9337) });
    }, 9745: (a, u, n) => {
      var i = n(8558).f, f = Function.prototype, l = /^\s*function ([^ (]*)/, h = "name";
      h in f || n(6628) && i(f, h, { configurable: !0, get: function() {
        try {
          return ("" + this).match(l)[1];
        } catch {
          return "";
        }
      } });
    }, 1239: (a, u, n) => {
      var i = n(5635), f = n(9060), l = "Map";
      a.exports = n(7611)(l, function(h) {
        return function() {
          return h(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      }, { get: function(h) {
        var Q = i.getEntry(f(this, l), h);
        return Q && Q.v;
      }, set: function(h, Q) {
        return i.def(f(this, l), h === 0 ? 0 : h, Q);
      } }, i, !0);
    }, 8344: (a, u, n) => {
      var i = n(5772);
      i(i.S + i.F * !n(6628), "Object", { defineProperties: n(7331) });
    }, 5843: (a, u, n) => {
      var i = n(5772);
      i(i.S + i.F * !n(6628), "Object", { defineProperty: n(8558).f });
    }, 541: (a, u, n) => {
      var i = n(5703), f = n(4662).f;
      n(468)("getOwnPropertyDescriptor", function() {
        return function(l, h) {
          return f(i(l), h);
        };
      });
    }, 4978: (a, u, n) => {
      var i = n(6033), f = n(2912);
      n(468)("keys", function() {
        return function(l) {
          return f(i(l));
        };
      });
    }, 6139: (a, u, n) => {
      var i = n(106), f = {};
      f[n(2190)("toStringTag")] = "z", f + "" != "[object z]" && n(7738)(Object.prototype, "toString", function() {
        return "[object " + i(this) + "]";
      }, !0);
    }, 2235: (a, u, n) => {
      var i, f, l, h, Q = n(1422), p = n(8113), d = n(1528), v = n(106), F = n(5772), H = n(7334), x = n(2761), O = n(5824), L = n(1891), G = n(1987), V = n(9124).set, b = n(3492)(), N = n(8577), P = n(9739), k = n(5822), S = n(5151), _ = "Promise", Y = p.TypeError, iA = p.process, oA = iA && iA.versions, UA = oA && oA.v8 || "", HA = p[_], CA = v(iA) == "process", EA = function() {
      }, FA = f = N.f, QA = !!function() {
        try {
          var tA = HA.resolve(1), lA = (tA.constructor = {})[n(2190)("species")] = function(yA) {
            yA(EA, EA);
          };
          return (CA || typeof PromiseRejectionEvent == "function") && tA.then(EA) instanceof lA && UA.indexOf("6.6") !== 0 && k.indexOf("Chrome/66") === -1;
        } catch {
        }
      }(), X = function(tA) {
        var lA;
        return !(!H(tA) || typeof (lA = tA.then) != "function") && lA;
      }, M = function(tA, lA) {
        if (!tA._n) {
          tA._n = !0;
          var yA = tA._c;
          b(function() {
            for (var LA = tA._v, KA = tA._s == 1, JA = 0, ne = function(le) {
              var ee, ge, Fe, se = KA ? le.ok : le.fail, we = le.resolve, pe = le.reject, oe = le.domain;
              try {
                se ? (KA || (tA._h == 2 && aA(tA), tA._h = 1), se === !0 ? ee = LA : (oe && oe.enter(), ee = se(LA), oe && (oe.exit(), Fe = !0)), ee === le.promise ? pe(Y("Promise-chain cycle")) : (ge = X(ee)) ? ge.call(ee, we, pe) : we(ee)) : pe(LA);
              } catch (ae) {
                oe && !Fe && oe.exit(), pe(ae);
              }
            }; yA.length > JA; )
              ne(yA[JA++]);
            tA._c = [], tA._n = !1, lA && !tA._h && q(tA);
          });
        }
      }, q = function(tA) {
        V.call(p, function() {
          var lA, yA, LA, KA = tA._v, JA = uA(tA);
          if (JA && (lA = P(function() {
            CA ? iA.emit("unhandledRejection", KA, tA) : (yA = p.onunhandledrejection) ? yA({ promise: tA, reason: KA }) : (LA = p.console) && LA.error && LA.error("Unhandled promise rejection", KA);
          }), tA._h = CA || uA(tA) ? 2 : 1), tA._a = void 0, JA && lA.e)
            throw lA.v;
        });
      }, uA = function(tA) {
        return tA._h !== 1 && (tA._a || tA._c).length === 0;
      }, aA = function(tA) {
        V.call(p, function() {
          var lA;
          CA ? iA.emit("rejectionHandled", tA) : (lA = p.onrejectionhandled) && lA({ promise: tA, reason: tA._v });
        });
      }, mA = function(tA) {
        var lA = this;
        lA._d || (lA._d = !0, (lA = lA._w || lA)._v = tA, lA._s = 2, lA._a || (lA._a = lA._c.slice()), M(lA, !0));
      }, VA = function(tA) {
        var lA, yA = this;
        if (!yA._d) {
          yA._d = !0, yA = yA._w || yA;
          try {
            if (yA === tA)
              throw Y("Promise can't be resolved itself");
            (lA = X(tA)) ? b(function() {
              var LA = { _w: yA, _d: !1 };
              try {
                lA.call(tA, d(VA, LA, 1), d(mA, LA, 1));
              } catch (KA) {
                mA.call(LA, KA);
              }
            }) : (yA._v = tA, yA._s = 1, M(yA, !1));
          } catch (LA) {
            mA.call({ _w: yA, _d: !1 }, LA);
          }
        }
      };
      QA || (HA = function(tA) {
        O(this, HA, _, "_h"), x(tA), i.call(this);
        try {
          tA(d(VA, this, 1), d(mA, this, 1));
        } catch (lA) {
          mA.call(this, lA);
        }
      }, (i = function(tA) {
        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1;
      }).prototype = n(2243)(HA.prototype, { then: function(tA, lA) {
        var yA = FA(G(this, HA));
        return yA.ok = typeof tA != "function" || tA, yA.fail = typeof lA == "function" && lA, yA.domain = CA ? iA.domain : void 0, this._c.push(yA), this._a && this._a.push(yA), this._s && M(this, !1), yA.promise;
      }, catch: function(tA) {
        return this.then(void 0, tA);
      } }), l = function() {
        var tA = new i();
        this.promise = tA, this.resolve = d(VA, tA, 1), this.reject = d(mA, tA, 1);
      }, N.f = FA = function(tA) {
        return tA === HA || tA === h ? new l(tA) : f(tA);
      }), F(F.G + F.W + F.F * !QA, { Promise: HA }), n(5727)(HA, _), n(9766)(_), h = n(66)[_], F(F.S + F.F * !QA, _, { reject: function(tA) {
        var lA = FA(this);
        return (0, lA.reject)(tA), lA.promise;
      } }), F(F.S + F.F * (Q || !QA), _, { resolve: function(tA) {
        return S(Q && this === h ? HA : this, tA);
      } }), F(F.S + F.F * !(QA && n(3143)(function(tA) {
        HA.all(tA).catch(EA);
      })), _, { all: function(tA) {
        var lA = this, yA = FA(lA), LA = yA.resolve, KA = yA.reject, JA = P(function() {
          var ne = [], le = 0, ee = 1;
          L(tA, !1, function(ge) {
            var Fe = le++, se = !1;
            ne.push(void 0), ee++, lA.resolve(ge).then(function(we) {
              se || (se = !0, ne[Fe] = we, --ee || LA(ne));
            }, KA);
          }), --ee || LA(ne);
        });
        return JA.e && KA(JA.v), yA.promise;
      }, race: function(tA) {
        var lA = this, yA = FA(lA), LA = yA.reject, KA = P(function() {
          L(tA, !1, function(JA) {
            lA.resolve(JA).then(yA.resolve, LA);
          });
        });
        return KA.e && LA(KA.v), yA.promise;
      } });
    }, 5506: (a, u, n) => {
      var i = n(8113), f = n(8938), l = n(8558).f, h = n(6604).f, Q = n(4587), p = n(4859), d = i.RegExp, v = d, F = d.prototype, H = /a/g, x = /a/g, O = new d(H) !== H;
      if (n(6628) && (!O || n(8625)(function() {
        return x[n(2190)("match")] = !1, d(H) != H || d(x) == x || d(H, "i") != "/a/i";
      }))) {
        d = function(b, N) {
          var P = this instanceof d, k = Q(b), S = N === void 0;
          return !P && k && b.constructor === d && S ? b : f(O ? new v(k && !S ? b.source : b, N) : v((k = b instanceof d) ? b.source : b, k && S ? p.call(b) : N), P ? this : F, d);
        };
        for (var L = function(b) {
          b in d || l(d, b, { configurable: !0, get: function() {
            return v[b];
          }, set: function(N) {
            v[b] = N;
          } });
        }, G = h(v), V = 0; G.length > V; )
          L(G[V++]);
        F.constructor = d, d.prototype = F, n(7738)(i, "RegExp", d);
      }
      n(9766)("RegExp");
    }, 5846: (a, u, n) => {
      var i = n(3288);
      n(5772)({ target: "RegExp", proto: !0, forced: i !== /./.exec }, { exec: i });
    }, 751: (a, u, n) => {
      n(6628) && /./g.flags != "g" && n(8558).f(RegExp.prototype, "flags", { configurable: !0, get: n(4859) });
    }, 9236: (a, u, n) => {
      var i = n(4587), f = n(6365), l = n(1987), h = n(8492), Q = n(6078), p = n(2404), d = n(3288), v = n(8625), F = Math.min, H = [].push, x = "split", O = "length", L = "lastIndex", G = 4294967295, V = !v(function() {
      });
      n(8897)("split", 2, function(b, N, P, k) {
        var S;
        return S = "abbc"[x](/(b)*/)[1] == "c" || "test"[x](/(?:)/, -1)[O] != 4 || "ab"[x](/(?:ab)*/)[O] != 2 || "."[x](/(.?)(.?)/)[O] != 4 || "."[x](/()()/)[O] > 1 || ""[x](/.?/)[O] ? function(_, Y) {
          var iA = String(this);
          if (_ === void 0 && Y === 0)
            return [];
          if (!i(_))
            return P.call(iA, _, Y);
          for (var oA, UA, HA, CA = [], EA = (_.ignoreCase ? "i" : "") + (_.multiline ? "m" : "") + (_.unicode ? "u" : "") + (_.sticky ? "y" : ""), FA = 0, QA = Y === void 0 ? G : Y >>> 0, X = new RegExp(_.source, EA + "g"); (oA = d.call(X, iA)) && !((UA = X[L]) > FA && (CA.push(iA.slice(FA, oA.index)), oA[O] > 1 && oA.index < iA[O] && H.apply(CA, oA.slice(1)), HA = oA[0][O], FA = UA, CA[O] >= QA)); )
            X[L] === oA.index && X[L]++;
          return FA === iA[O] ? !HA && X.test("") || CA.push("") : CA.push(iA.slice(FA)), CA[O] > QA ? CA.slice(0, QA) : CA;
        } : "0"[x](void 0, 0)[O] ? function(_, Y) {
          return _ === void 0 && Y === 0 ? [] : P.call(this, _, Y);
        } : P, [function(_, Y) {
          var iA = b(this), oA = _ == null ? void 0 : _[N];
          return oA !== void 0 ? oA.call(_, iA, Y) : S.call(String(iA), _, Y);
        }, function(_, Y) {
          var iA = k(S, _, this, Y, S !== P);
          if (iA.done)
            return iA.value;
          var oA = f(_), UA = String(this), HA = l(oA, RegExp), CA = oA.unicode, EA = (oA.ignoreCase ? "i" : "") + (oA.multiline ? "m" : "") + (oA.unicode ? "u" : "") + (V ? "y" : "g"), FA = new HA(V ? oA : "^(?:" + oA.source + ")", EA), QA = Y === void 0 ? G : Y >>> 0;
          if (QA === 0)
            return [];
          if (UA.length === 0)
            return p(FA, UA) === null ? [UA] : [];
          for (var X = 0, M = 0, q = []; M < UA.length; ) {
            FA.lastIndex = V ? M : 0;
            var uA, aA = p(FA, V ? UA : UA.slice(M));
            if (aA === null || (uA = F(Q(FA.lastIndex + (V ? 0 : M)), UA.length)) === X)
              M = h(UA, M, CA);
            else {
              if (q.push(UA.slice(X, M)), q.length === QA)
                return q;
              for (var mA = 1; mA <= aA.length - 1; mA++)
                if (q.push(aA[mA]), q.length === QA)
                  return q;
              M = X = uA;
            }
          }
          return q.push(UA.slice(X)), q;
        }];
      });
    }, 4321: (a, u, n) => {
      n(751);
      var i = n(6365), f = n(4859), l = n(6628), h = "toString", Q = /./[h], p = function(d) {
        n(7738)(RegExp.prototype, h, d, !0);
      };
      n(8625)(function() {
        return Q.call({ source: "a", flags: "b" }) != "/a/b";
      }) ? p(function() {
        var d = i(this);
        return "/".concat(d.source, "/", "flags" in d ? d.flags : !l && d instanceof RegExp ? f.call(d) : void 0);
      }) : Q.name != h && p(function() {
        return Q.call(this);
      });
    }, 427: (a, u, n) => {
      var i = n(5772), f = n(6078), l = n(465), h = "endsWith", Q = ""[h];
      i(i.P + i.F * n(6570)(h), "String", { endsWith: function(p) {
        var d = l(this, p, h), v = arguments.length > 1 ? arguments[1] : void 0, F = f(d.length), H = v === void 0 ? F : Math.min(f(v), F), x = String(p);
        return Q ? Q.call(d, x, H) : d.slice(H - x.length, H) === x;
      } });
    }, 3777: (a, u, n) => {
      var i = n(5772), f = n(465), l = "includes";
      i(i.P + i.F * n(6570)(l), "String", { includes: function(h) {
        return !!~f(this, h, l).indexOf(h, arguments.length > 1 ? arguments[1] : void 0);
      } });
    }, 7472: (a, u, n) => {
      var i = n(2070)(!0);
      n(1195)(String, "String", function(f) {
        this._t = String(f), this._i = 0;
      }, function() {
        var f, l = this._t, h = this._i;
        return h >= l.length ? { value: void 0, done: !0 } : (f = i(l, h), this._i += f.length, { value: f, done: !1 });
      });
    }, 5942: (a, u, n) => {
      var i = n(5772), f = n(6078), l = n(465), h = "startsWith", Q = ""[h];
      i(i.P + i.F * n(6570)(h), "String", { startsWith: function(p) {
        var d = l(this, p, h), v = f(Math.min(arguments.length > 1 ? arguments[1] : void 0, d.length)), F = String(p);
        return Q ? Q.call(d, F, v) : d.slice(v, v + F.length) === F;
      } });
    }, 9823: (a, u, n) => {
      var i = n(8113), f = n(4040), l = n(6628), h = n(5772), Q = n(7738), p = n(998).KEY, d = n(8625), v = n(8655), F = n(5727), H = n(5078), x = n(2190), O = n(9669), L = n(5660), G = n(7820), V = n(9141), b = n(6365), N = n(7334), P = n(6033), k = n(5703), S = n(1382), _ = n(6061), Y = n(2897), iA = n(5259), oA = n(4662), UA = n(7957), HA = n(8558), CA = n(2912), EA = oA.f, FA = HA.f, QA = iA.f, X = i.Symbol, M = i.JSON, q = M && M.stringify, uA = "prototype", aA = x("_hidden"), mA = x("toPrimitive"), VA = {}.propertyIsEnumerable, tA = v("symbol-registry"), lA = v("symbols"), yA = v("op-symbols"), LA = Object[uA], KA = typeof X == "function" && !!UA.f, JA = i.QObject, ne = !JA || !JA[uA] || !JA[uA].findChild, le = l && d(function() {
        return Y(FA({}, "a", { get: function() {
          return FA(this, "a", { value: 7 }).a;
        } })).a != 7;
      }) ? function(cA, pA, GA) {
        var WA = EA(LA, pA);
        WA && delete LA[pA], FA(cA, pA, GA), WA && cA !== LA && FA(LA, pA, WA);
      } : FA, ee = function(cA) {
        var pA = lA[cA] = Y(X[uA]);
        return pA._k = cA, pA;
      }, ge = KA && typeof X.iterator == "symbol" ? function(cA) {
        return typeof cA == "symbol";
      } : function(cA) {
        return cA instanceof X;
      }, Fe = function(cA, pA, GA) {
        return cA === LA && Fe(yA, pA, GA), b(cA), pA = S(pA, !0), b(GA), f(lA, pA) ? (GA.enumerable ? (f(cA, aA) && cA[aA][pA] && (cA[aA][pA] = !1), GA = Y(GA, { enumerable: _(0, !1) })) : (f(cA, aA) || FA(cA, aA, _(1, {})), cA[aA][pA] = !0), le(cA, pA, GA)) : FA(cA, pA, GA);
      }, se = function(cA, pA) {
        b(cA);
        for (var GA, WA = G(pA = k(pA)), ce = 0, Qe = WA.length; Qe > ce; )
          Fe(cA, GA = WA[ce++], pA[GA]);
        return cA;
      }, we = function(cA) {
        var pA = VA.call(this, cA = S(cA, !0));
        return !(this === LA && f(lA, cA) && !f(yA, cA)) && (!(pA || !f(this, cA) || !f(lA, cA) || f(this, aA) && this[aA][cA]) || pA);
      }, pe = function(cA, pA) {
        if (cA = k(cA), pA = S(pA, !0), cA !== LA || !f(lA, pA) || f(yA, pA)) {
          var GA = EA(cA, pA);
          return !GA || !f(lA, pA) || f(cA, aA) && cA[aA][pA] || (GA.enumerable = !0), GA;
        }
      }, oe = function(cA) {
        for (var pA, GA = QA(k(cA)), WA = [], ce = 0; GA.length > ce; )
          f(lA, pA = GA[ce++]) || pA == aA || pA == p || WA.push(pA);
        return WA;
      }, ae = function(cA) {
        for (var pA, GA = cA === LA, WA = QA(GA ? yA : k(cA)), ce = [], Qe = 0; WA.length > Qe; )
          !f(lA, pA = WA[Qe++]) || GA && !f(LA, pA) || ce.push(lA[pA]);
        return ce;
      };
      KA || (Q((X = function() {
        if (this instanceof X)
          throw TypeError("Symbol is not a constructor!");
        var cA = H(arguments.length > 0 ? arguments[0] : void 0), pA = function(GA) {
          this === LA && pA.call(yA, GA), f(this, aA) && f(this[aA], cA) && (this[aA][cA] = !1), le(this, cA, _(1, GA));
        };
        return l && ne && le(LA, cA, { configurable: !0, set: pA }), ee(cA);
      })[uA], "toString", function() {
        return this._k;
      }), oA.f = pe, HA.f = Fe, n(6604).f = iA.f = oe, n(5873).f = we, UA.f = ae, l && !n(1422) && Q(LA, "propertyIsEnumerable", we, !0), O.f = function(cA) {
        return ee(x(cA));
      }), h(h.G + h.W + h.F * !KA, { Symbol: X });
      for (var be = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), Ze = 0; be.length > Ze; )
        x(be[Ze++]);
      for (var ke = CA(x.store), ze = 0; ke.length > ze; )
        L(ke[ze++]);
      h(h.S + h.F * !KA, "Symbol", { for: function(cA) {
        return f(tA, cA += "") ? tA[cA] : tA[cA] = X(cA);
      }, keyFor: function(cA) {
        if (!ge(cA))
          throw TypeError(cA + " is not a symbol!");
        for (var pA in tA)
          if (tA[pA] === cA)
            return pA;
      }, useSetter: function() {
        ne = !0;
      }, useSimple: function() {
        ne = !1;
      } }), h(h.S + h.F * !KA, "Object", { create: function(cA, pA) {
        return pA === void 0 ? Y(cA) : se(Y(cA), pA);
      }, defineProperty: Fe, defineProperties: se, getOwnPropertyDescriptor: pe, getOwnPropertyNames: oe, getOwnPropertySymbols: ae });
      var qe = d(function() {
        UA.f(1);
      });
      h(h.S + h.F * qe, "Object", { getOwnPropertySymbols: function(cA) {
        return UA.f(P(cA));
      } }), M && h(h.S + h.F * (!KA || d(function() {
        var cA = X();
        return q([cA]) != "[null]" || q({ a: cA }) != "{}" || q(Object(cA)) != "{}";
      })), "JSON", { stringify: function(cA) {
        for (var pA, GA, WA = [cA], ce = 1; arguments.length > ce; )
          WA.push(arguments[ce++]);
        if (GA = pA = WA[1], (N(pA) || cA !== void 0) && !ge(cA))
          return V(pA) || (pA = function(Qe, je) {
            if (typeof GA == "function" && (je = GA.call(this, Qe, je)), !ge(je))
              return je;
          }), WA[1] = pA, q.apply(M, WA);
      } }), X[uA][mA] || n(4216)(X[uA], mA, X[uA].valueOf), F(X, "Symbol"), F(Math, "Math", !0), F(i.JSON, "JSON", !0);
    }, 773: (a, u, n) => {
      var i, f = n(8113), l = n(8309)(0), h = n(7738), Q = n(998), p = n(7029), d = n(6339), v = n(7334), F = n(9060), H = n(9060), x = !f.ActiveXObject && "ActiveXObject" in f, O = "WeakMap", L = Q.getWeak, G = Object.isExtensible, V = d.ufstore, b = function(k) {
        return function() {
          return k(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      }, N = { get: function(k) {
        if (v(k)) {
          var S = L(k);
          return S === !0 ? V(F(this, O)).get(k) : S ? S[this._i] : void 0;
        }
      }, set: function(k, S) {
        return d.def(F(this, O), k, S);
      } }, P = a.exports = n(7611)(O, b, N, d, !0, !0);
      H && x && (p((i = d.getConstructor(b, O)).prototype, N), Q.NEED = !0, l(["delete", "has", "get", "set"], function(k) {
        var S = P.prototype, _ = S[k];
        h(S, k, function(Y, iA) {
          if (v(Y) && !G(Y)) {
            this._f || (this._f = new i());
            var oA = this._f[k](Y, iA);
            return k == "set" ? this : oA;
          }
          return _.call(this, Y, iA);
        });
      }));
    }, 3623: (a, u, n) => {
      var i = n(6339), f = n(9060), l = "WeakSet";
      n(7611)(l, function(h) {
        return function() {
          return h(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      }, { add: function(h) {
        return i.def(f(this, l), h, !0);
      } }, i, !1, !0);
    }, 8081: (a, u, n) => {
      var i = n(5772), f = n(9021)(!0);
      i(i.P, "Array", { includes: function(l) {
        return f(this, l, arguments.length > 1 ? arguments[1] : void 0);
      } }), n(2094)("includes");
    }, 7453: (a, u, n) => {
      var i = n(5772), f = n(6831), l = n(5703), h = n(4662), Q = n(6644);
      i(i.S, "Object", { getOwnPropertyDescriptors: function(p) {
        for (var d, v, F = l(p), H = h.f, x = f(F), O = {}, L = 0; x.length > L; )
          (v = H(F, d = x[L++])) !== void 0 && Q(O, d, v);
        return O;
      } });
    }, 27: (a, u, n) => {
      var i = n(5772), f = n(758)(!1);
      i(i.S, "Object", { values: function(l) {
        return f(l);
      } });
    }, 3085: (a, u, n) => {
      for (var i = n(7680), f = n(2912), l = n(7738), h = n(8113), Q = n(4216), p = n(3988), d = n(2190), v = d("iterator"), F = d("toStringTag"), H = p.Array, x = { CSSRuleList: !0, CSSStyleDeclaration: !1, CSSValueList: !1, ClientRectList: !1, DOMRectList: !1, DOMStringList: !1, DOMTokenList: !0, DataTransferItemList: !1, FileList: !1, HTMLAllCollection: !1, HTMLCollection: !1, HTMLFormElement: !1, HTMLSelectElement: !1, MediaList: !0, MimeTypeArray: !1, NamedNodeMap: !1, NodeList: !0, PaintRequestList: !1, Plugin: !1, PluginArray: !1, SVGLengthList: !1, SVGNumberList: !1, SVGPathSegList: !1, SVGPointList: !1, SVGStringList: !1, SVGTransformList: !1, SourceBufferList: !1, StyleSheetList: !0, TextTrackCueList: !1, TextTrackList: !1, TouchList: !1 }, O = f(x), L = 0; L < O.length; L++) {
        var G, V = O[L], b = x[V], N = h[V], P = N && N.prototype;
        if (P && (P[v] || Q(P, v, H), P[F] || Q(P, F, V), p[V] = H, b))
          for (G in i)
            P[G] || l(P, G, i[G], !0);
      }
    }, 927: (a, u, n) => {
      a.exports = function i(f, l, h) {
        function Q(v, F) {
          if (!l[v]) {
            if (!f[v]) {
              if (p)
                return p(v, !0);
              var H = new Error("Cannot find module '" + v + "'");
              throw H.code = "MODULE_NOT_FOUND", H;
            }
            var x = l[v] = { exports: {} };
            f[v][0].call(x.exports, function(O) {
              return Q(f[v][1][O] || O);
            }, x, x.exports, i, f, l, h);
          }
          return l[v].exports;
        }
        for (var p = void 0, d = 0; d < h.length; d++)
          Q(h[d]);
        return Q;
      }({ 1: [function(i, f, l) {
        (function(h) {
          var Q, p, d = h.MutationObserver || h.WebKitMutationObserver;
          if (d) {
            var v = 0, F = new d(L), H = h.document.createTextNode("");
            F.observe(H, { characterData: !0 }), Q = function() {
              H.data = v = ++v % 2;
            };
          } else if (h.setImmediate || h.MessageChannel === void 0)
            Q = "document" in h && "onreadystatechange" in h.document.createElement("script") ? function() {
              var G = h.document.createElement("script");
              G.onreadystatechange = function() {
                L(), G.onreadystatechange = null, G.parentNode.removeChild(G), G = null;
              }, h.document.documentElement.appendChild(G);
            } : function() {
              setTimeout(L, 0);
            };
          else {
            var x = new h.MessageChannel();
            x.port1.onmessage = L, Q = function() {
              x.port2.postMessage(0);
            };
          }
          var O = [];
          function L() {
            var G, V;
            p = !0;
            for (var b = O.length; b; ) {
              for (V = O, O = [], G = -1; ++G < b; )
                V[G]();
              b = O.length;
            }
            p = !1;
          }
          f.exports = function(G) {
            O.push(G) !== 1 || p || Q();
          };
        }).call(this, n.g !== void 0 ? n.g : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, {}], 2: [function(i, f, l) {
        var h = i(1);
        function Q() {
        }
        var p = {}, d = ["REJECTED"], v = ["FULFILLED"], F = ["PENDING"];
        function H(b) {
          if (typeof b != "function")
            throw new TypeError("resolver must be a function");
          this.state = F, this.queue = [], this.outcome = void 0, b !== Q && G(this, b);
        }
        function x(b, N, P) {
          this.promise = b, typeof N == "function" && (this.onFulfilled = N, this.callFulfilled = this.otherCallFulfilled), typeof P == "function" && (this.onRejected = P, this.callRejected = this.otherCallRejected);
        }
        function O(b, N, P) {
          h(function() {
            var k;
            try {
              k = N(P);
            } catch (S) {
              return p.reject(b, S);
            }
            k === b ? p.reject(b, new TypeError("Cannot resolve promise with itself")) : p.resolve(b, k);
          });
        }
        function L(b) {
          var N = b && b.then;
          if (b && (typeof b == "object" || typeof b == "function") && typeof N == "function")
            return function() {
              N.apply(b, arguments);
            };
        }
        function G(b, N) {
          var P = !1;
          function k(Y) {
            P || (P = !0, p.reject(b, Y));
          }
          function S(Y) {
            P || (P = !0, p.resolve(b, Y));
          }
          var _ = V(function() {
            N(S, k);
          });
          _.status === "error" && k(_.value);
        }
        function V(b, N) {
          var P = {};
          try {
            P.value = b(N), P.status = "success";
          } catch (k) {
            P.status = "error", P.value = k;
          }
          return P;
        }
        f.exports = H, H.prototype.catch = function(b) {
          return this.then(null, b);
        }, H.prototype.then = function(b, N) {
          if (typeof b != "function" && this.state === v || typeof N != "function" && this.state === d)
            return this;
          var P = new this.constructor(Q);
          return this.state !== F ? O(P, this.state === v ? b : N, this.outcome) : this.queue.push(new x(P, b, N)), P;
        }, x.prototype.callFulfilled = function(b) {
          p.resolve(this.promise, b);
        }, x.prototype.otherCallFulfilled = function(b) {
          O(this.promise, this.onFulfilled, b);
        }, x.prototype.callRejected = function(b) {
          p.reject(this.promise, b);
        }, x.prototype.otherCallRejected = function(b) {
          O(this.promise, this.onRejected, b);
        }, p.resolve = function(b, N) {
          var P = V(L, N);
          if (P.status === "error")
            return p.reject(b, P.value);
          var k = P.value;
          if (k)
            G(b, k);
          else {
            b.state = v, b.outcome = N;
            for (var S = -1, _ = b.queue.length; ++S < _; )
              b.queue[S].callFulfilled(N);
          }
          return b;
        }, p.reject = function(b, N) {
          b.state = d, b.outcome = N;
          for (var P = -1, k = b.queue.length; ++P < k; )
            b.queue[P].callRejected(N);
          return b;
        }, H.resolve = function(b) {
          return b instanceof this ? b : p.resolve(new this(Q), b);
        }, H.reject = function(b) {
          var N = new this(Q);
          return p.reject(N, b);
        }, H.all = function(b) {
          var N = this;
          if (Object.prototype.toString.call(b) !== "[object Array]")
            return this.reject(new TypeError("must be an array"));
          var P = b.length, k = !1;
          if (!P)
            return this.resolve([]);
          for (var S = new Array(P), _ = 0, Y = -1, iA = new this(Q); ++Y < P; )
            oA(b[Y], Y);
          return iA;
          function oA(UA, HA) {
            N.resolve(UA).then(function(CA) {
              S[HA] = CA, ++_ !== P || k || (k = !0, p.resolve(iA, S));
            }, function(CA) {
              k || (k = !0, p.reject(iA, CA));
            });
          }
        }, H.race = function(b) {
          var N = this;
          if (Object.prototype.toString.call(b) !== "[object Array]")
            return this.reject(new TypeError("must be an array"));
          var P, k = b.length, S = !1;
          if (!k)
            return this.resolve([]);
          for (var _ = -1, Y = new this(Q); ++_ < k; )
            P = b[_], N.resolve(P).then(function(iA) {
              S || (S = !0, p.resolve(Y, iA));
            }, function(iA) {
              S || (S = !0, p.reject(Y, iA));
            });
          return Y;
        };
      }, { 1: 1 }], 3: [function(i, f, l) {
        (function(h) {
          typeof h.Promise != "function" && (h.Promise = i(2));
        }).call(this, n.g !== void 0 ? n.g : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, { 2: 2 }], 4: [function(i, f, l) {
        var h = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(C) {
          return typeof C;
        } : function(C) {
          return C && typeof Symbol == "function" && C.constructor === Symbol && C !== Symbol.prototype ? "symbol" : typeof C;
        }, Q = function() {
          try {
            if (typeof indexedDB < "u")
              return indexedDB;
            if (typeof webkitIndexedDB < "u")
              return webkitIndexedDB;
            if (typeof mozIndexedDB < "u")
              return mozIndexedDB;
            if (typeof OIndexedDB < "u")
              return OIndexedDB;
            if (typeof msIndexedDB < "u")
              return msIndexedDB;
          } catch {
            return;
          }
        }();
        function p(C, E) {
          C = C || [], E = E || {};
          try {
            return new Blob(C, E);
          } catch (K) {
            if (K.name !== "TypeError")
              throw K;
            for (var m = new (typeof BlobBuilder < "u" ? BlobBuilder : typeof MSBlobBuilder < "u" ? MSBlobBuilder : typeof MozBlobBuilder < "u" ? MozBlobBuilder : WebKitBlobBuilder)(), T = 0; T < C.length; T += 1)
              m.append(C[T]);
            return m.getBlob(E.type);
          }
        }
        typeof Promise > "u" && i(3);
        var d = Promise;
        function v(C, E) {
          E && C.then(function(m) {
            E(null, m);
          }, function(m) {
            E(m);
          });
        }
        function F(C, E, m) {
          typeof E == "function" && C.then(E), typeof m == "function" && C.catch(m);
        }
        function H(C) {
          return typeof C != "string" && (console.warn(C + " used as a key, but it is not a string."), C = String(C)), C;
        }
        function x() {
          if (arguments.length && typeof arguments[arguments.length - 1] == "function")
            return arguments[arguments.length - 1];
        }
        var O = "local-forage-detect-blob-support", L = void 0, G = {}, V = Object.prototype.toString, b = "readonly", N = "readwrite";
        function P(C) {
          for (var E = C.length, m = new ArrayBuffer(E), T = new Uint8Array(m), K = 0; K < E; K++)
            T[K] = C.charCodeAt(K);
          return m;
        }
        function k(C) {
          return typeof L == "boolean" ? d.resolve(L) : function(E) {
            return new d(function(m) {
              var T = E.transaction(O, N), K = p([""]);
              T.objectStore(O).put(K, "key"), T.onabort = function(R) {
                R.preventDefault(), R.stopPropagation(), m(!1);
              }, T.oncomplete = function() {
                var R = navigator.userAgent.match(/Chrome\/(\d+)/), W = navigator.userAgent.match(/Edge\//);
                m(W || !R || parseInt(R[1], 10) >= 43);
              };
            }).catch(function() {
              return !1;
            });
          }(C).then(function(E) {
            return L = E;
          });
        }
        function S(C) {
          var E = G[C.name], m = {};
          m.promise = new d(function(T, K) {
            m.resolve = T, m.reject = K;
          }), E.deferredOperations.push(m), E.dbReady ? E.dbReady = E.dbReady.then(function() {
            return m.promise;
          }) : E.dbReady = m.promise;
        }
        function _(C) {
          var E = G[C.name].deferredOperations.pop();
          if (E)
            return E.resolve(), E.promise;
        }
        function Y(C, E) {
          var m = G[C.name].deferredOperations.pop();
          if (m)
            return m.reject(E), m.promise;
        }
        function iA(C, E) {
          return new d(function(m, T) {
            if (G[C.name] = G[C.name] || { forages: [], db: null, dbReady: null, deferredOperations: [] }, C.db) {
              if (!E)
                return m(C.db);
              S(C), C.db.close();
            }
            var K = [C.name];
            E && K.push(C.version);
            var R = Q.open.apply(Q, K);
            E && (R.onupgradeneeded = function(W) {
              var z = R.result;
              try {
                z.createObjectStore(C.storeName), W.oldVersion <= 1 && z.createObjectStore(O);
              } catch (eA) {
                if (eA.name !== "ConstraintError")
                  throw eA;
                console.warn('The database "' + C.name + '" has been upgraded from version ' + W.oldVersion + " to version " + W.newVersion + ', but the storage "' + C.storeName + '" already exists.');
              }
            }), R.onerror = function(W) {
              W.preventDefault(), T(R.error);
            }, R.onsuccess = function() {
              var W = R.result;
              W.onversionchange = function(z) {
                z.target.close();
              }, m(W), _(C);
            };
          });
        }
        function oA(C) {
          return iA(C, !1);
        }
        function UA(C) {
          return iA(C, !0);
        }
        function HA(C, E) {
          if (!C.db)
            return !0;
          var m = !C.db.objectStoreNames.contains(C.storeName), T = C.version < C.db.version, K = C.version > C.db.version;
          if (T && (C.version !== E && console.warn('The database "' + C.name + `" can't be downgraded from version ` + C.db.version + " to version " + C.version + "."), C.version = C.db.version), K || m) {
            if (m) {
              var R = C.db.version + 1;
              R > C.version && (C.version = R);
            }
            return !0;
          }
          return !1;
        }
        function CA(C) {
          return p([P(atob(C.data))], { type: C.type });
        }
        function EA(C) {
          return C && C.__local_forage_encoded_blob;
        }
        function FA(C) {
          var E = this, m = E._initReady().then(function() {
            var T = G[E._dbInfo.name];
            if (T && T.dbReady)
              return T.dbReady;
          });
          return F(m, C, C), m;
        }
        function QA(C, E, m, T) {
          T === void 0 && (T = 1);
          try {
            var K = C.db.transaction(C.storeName, E);
            m(null, K);
          } catch (R) {
            if (T > 0 && (!C.db || R.name === "InvalidStateError" || R.name === "NotFoundError"))
              return d.resolve().then(function() {
                if (!C.db || R.name === "NotFoundError" && !C.db.objectStoreNames.contains(C.storeName) && C.version <= C.db.version)
                  return C.db && (C.version = C.db.version + 1), UA(C);
              }).then(function() {
                return function(W) {
                  S(W);
                  for (var z = G[W.name], eA = z.forages, AA = 0; AA < eA.length; AA++) {
                    var BA = eA[AA];
                    BA._dbInfo.db && (BA._dbInfo.db.close(), BA._dbInfo.db = null);
                  }
                  return W.db = null, oA(W).then(function(y) {
                    return W.db = y, HA(W) ? UA(W) : y;
                  }).then(function(y) {
                    W.db = z.db = y;
                    for (var j = 0; j < eA.length; j++)
                      eA[j]._dbInfo.db = y;
                  }).catch(function(y) {
                    throw Y(W, y), y;
                  });
                }(C).then(function() {
                  QA(C, E, m, T - 1);
                });
              }).catch(m);
            m(R);
          }
        }
        var X = { _driver: "asyncStorage", _initStorage: function(C) {
          var E = this, m = { db: null };
          if (C)
            for (var T in C)
              m[T] = C[T];
          var K = G[m.name];
          K || (K = { forages: [], db: null, dbReady: null, deferredOperations: [] }, G[m.name] = K), K.forages.push(E), E._initReady || (E._initReady = E.ready, E.ready = FA);
          var R = [];
          function W() {
            return d.resolve();
          }
          for (var z = 0; z < K.forages.length; z++) {
            var eA = K.forages[z];
            eA !== E && R.push(eA._initReady().catch(W));
          }
          var AA = K.forages.slice(0);
          return d.all(R).then(function() {
            return m.db = K.db, oA(m);
          }).then(function(BA) {
            return m.db = BA, HA(m, E._defaultConfig.version) ? UA(m) : BA;
          }).then(function(BA) {
            m.db = K.db = BA, E._dbInfo = m;
            for (var y = 0; y < AA.length; y++) {
              var j = AA[y];
              j !== E && (j._dbInfo.db = m.db, j._dbInfo.version = m.version);
            }
          });
        }, _support: function() {
          try {
            if (!Q || !Q.open)
              return !1;
            var C = typeof openDatabase < "u" && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform), E = typeof fetch == "function" && fetch.toString().indexOf("[native code") !== -1;
            return (!C || E) && typeof indexedDB < "u" && typeof IDBKeyRange < "u";
          } catch {
            return !1;
          }
        }(), iterate: function(C, E) {
          var m = this, T = new d(function(K, R) {
            m.ready().then(function() {
              QA(m._dbInfo, b, function(W, z) {
                if (W)
                  return R(W);
                try {
                  var eA = z.objectStore(m._dbInfo.storeName).openCursor(), AA = 1;
                  eA.onsuccess = function() {
                    var BA = eA.result;
                    if (BA) {
                      var y = BA.value;
                      EA(y) && (y = CA(y));
                      var j = C(y, BA.key, AA++);
                      j !== void 0 ? K(j) : BA.continue();
                    } else
                      K();
                  }, eA.onerror = function() {
                    R(eA.error);
                  };
                } catch (BA) {
                  R(BA);
                }
              });
            }).catch(R);
          });
          return v(T, E), T;
        }, getItem: function(C, E) {
          var m = this;
          C = H(C);
          var T = new d(function(K, R) {
            m.ready().then(function() {
              QA(m._dbInfo, b, function(W, z) {
                if (W)
                  return R(W);
                try {
                  var eA = z.objectStore(m._dbInfo.storeName).get(C);
                  eA.onsuccess = function() {
                    var AA = eA.result;
                    AA === void 0 && (AA = null), EA(AA) && (AA = CA(AA)), K(AA);
                  }, eA.onerror = function() {
                    R(eA.error);
                  };
                } catch (AA) {
                  R(AA);
                }
              });
            }).catch(R);
          });
          return v(T, E), T;
        }, setItem: function(C, E, m) {
          var T = this;
          C = H(C);
          var K = new d(function(R, W) {
            var z;
            T.ready().then(function() {
              return z = T._dbInfo, V.call(E) === "[object Blob]" ? k(z.db).then(function(eA) {
                return eA ? E : (AA = E, new d(function(BA, y) {
                  var j = new FileReader();
                  j.onerror = y, j.onloadend = function($) {
                    var sA = btoa($.target.result || "");
                    BA({ __local_forage_encoded_blob: !0, data: sA, type: AA.type });
                  }, j.readAsBinaryString(AA);
                }));
                var AA;
              }) : E;
            }).then(function(eA) {
              QA(T._dbInfo, N, function(AA, BA) {
                if (AA)
                  return W(AA);
                try {
                  var y = BA.objectStore(T._dbInfo.storeName);
                  eA === null && (eA = void 0);
                  var j = y.put(eA, C);
                  BA.oncomplete = function() {
                    eA === void 0 && (eA = null), R(eA);
                  }, BA.onabort = BA.onerror = function() {
                    var $ = j.error ? j.error : j.transaction.error;
                    W($);
                  };
                } catch ($) {
                  W($);
                }
              });
            }).catch(W);
          });
          return v(K, m), K;
        }, removeItem: function(C, E) {
          var m = this;
          C = H(C);
          var T = new d(function(K, R) {
            m.ready().then(function() {
              QA(m._dbInfo, N, function(W, z) {
                if (W)
                  return R(W);
                try {
                  var eA = z.objectStore(m._dbInfo.storeName).delete(C);
                  z.oncomplete = function() {
                    K();
                  }, z.onerror = function() {
                    R(eA.error);
                  }, z.onabort = function() {
                    var AA = eA.error ? eA.error : eA.transaction.error;
                    R(AA);
                  };
                } catch (AA) {
                  R(AA);
                }
              });
            }).catch(R);
          });
          return v(T, E), T;
        }, clear: function(C) {
          var E = this, m = new d(function(T, K) {
            E.ready().then(function() {
              QA(E._dbInfo, N, function(R, W) {
                if (R)
                  return K(R);
                try {
                  var z = W.objectStore(E._dbInfo.storeName).clear();
                  W.oncomplete = function() {
                    T();
                  }, W.onabort = W.onerror = function() {
                    var eA = z.error ? z.error : z.transaction.error;
                    K(eA);
                  };
                } catch (eA) {
                  K(eA);
                }
              });
            }).catch(K);
          });
          return v(m, C), m;
        }, length: function(C) {
          var E = this, m = new d(function(T, K) {
            E.ready().then(function() {
              QA(E._dbInfo, b, function(R, W) {
                if (R)
                  return K(R);
                try {
                  var z = W.objectStore(E._dbInfo.storeName).count();
                  z.onsuccess = function() {
                    T(z.result);
                  }, z.onerror = function() {
                    K(z.error);
                  };
                } catch (eA) {
                  K(eA);
                }
              });
            }).catch(K);
          });
          return v(m, C), m;
        }, key: function(C, E) {
          var m = this, T = new d(function(K, R) {
            C < 0 ? K(null) : m.ready().then(function() {
              QA(m._dbInfo, b, function(W, z) {
                if (W)
                  return R(W);
                try {
                  var eA = z.objectStore(m._dbInfo.storeName), AA = !1, BA = eA.openKeyCursor();
                  BA.onsuccess = function() {
                    var y = BA.result;
                    y ? C === 0 || AA ? K(y.key) : (AA = !0, y.advance(C)) : K(null);
                  }, BA.onerror = function() {
                    R(BA.error);
                  };
                } catch (y) {
                  R(y);
                }
              });
            }).catch(R);
          });
          return v(T, E), T;
        }, keys: function(C) {
          var E = this, m = new d(function(T, K) {
            E.ready().then(function() {
              QA(E._dbInfo, b, function(R, W) {
                if (R)
                  return K(R);
                try {
                  var z = W.objectStore(E._dbInfo.storeName).openKeyCursor(), eA = [];
                  z.onsuccess = function() {
                    var AA = z.result;
                    AA ? (eA.push(AA.key), AA.continue()) : T(eA);
                  }, z.onerror = function() {
                    K(z.error);
                  };
                } catch (AA) {
                  K(AA);
                }
              });
            }).catch(K);
          });
          return v(m, C), m;
        }, dropInstance: function(C, E) {
          E = x.apply(this, arguments);
          var m = this.config();
          (C = typeof C != "function" && C || {}).name || (C.name = C.name || m.name, C.storeName = C.storeName || m.storeName);
          var T, K = this;
          if (C.name) {
            var R = C.name === m.name && K._dbInfo.db ? d.resolve(K._dbInfo.db) : oA(C).then(function(W) {
              var z = G[C.name], eA = z.forages;
              z.db = W;
              for (var AA = 0; AA < eA.length; AA++)
                eA[AA]._dbInfo.db = W;
              return W;
            });
            T = C.storeName ? R.then(function(W) {
              if (W.objectStoreNames.contains(C.storeName)) {
                var z = W.version + 1;
                S(C);
                var eA = G[C.name], AA = eA.forages;
                W.close();
                for (var BA = 0; BA < AA.length; BA++) {
                  var y = AA[BA];
                  y._dbInfo.db = null, y._dbInfo.version = z;
                }
                var j = new d(function($, sA) {
                  var bA = Q.open(C.name, z);
                  bA.onerror = function(MA) {
                    bA.result.close(), sA(MA);
                  }, bA.onupgradeneeded = function() {
                    bA.result.deleteObjectStore(C.storeName);
                  }, bA.onsuccess = function() {
                    var MA = bA.result;
                    MA.close(), $(MA);
                  };
                });
                return j.then(function($) {
                  eA.db = $;
                  for (var sA = 0; sA < AA.length; sA++) {
                    var bA = AA[sA];
                    bA._dbInfo.db = $, _(bA._dbInfo);
                  }
                }).catch(function($) {
                  throw (Y(C, $) || d.resolve()).catch(function() {
                  }), $;
                });
              }
            }) : R.then(function(W) {
              S(C);
              var z = G[C.name], eA = z.forages;
              W.close();
              for (var AA = 0; AA < eA.length; AA++)
                eA[AA]._dbInfo.db = null;
              var BA = new d(function(y, j) {
                var $ = Q.deleteDatabase(C.name);
                $.onerror = function() {
                  var sA = $.result;
                  sA && sA.close(), j($.error);
                }, $.onblocked = function() {
                  console.warn('dropInstance blocked for database "' + C.name + '" until all open connections are closed');
                }, $.onsuccess = function() {
                  var sA = $.result;
                  sA && sA.close(), y(sA);
                };
              });
              return BA.then(function(y) {
                z.db = y;
                for (var j = 0; j < eA.length; j++)
                  _(eA[j]._dbInfo);
              }).catch(function(y) {
                throw (Y(C, y) || d.resolve()).catch(function() {
                }), y;
              });
            });
          } else
            T = d.reject("Invalid arguments");
          return v(T, E), T;
        } }, M = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", q = /^~~local_forage_type~([^~]+)~/, uA = "__lfsc__:", aA = uA.length, mA = "arbf", VA = "blob", tA = "si08", lA = "ui08", yA = "uic8", LA = "si16", KA = "si32", JA = "ur16", ne = "ui32", le = "fl32", ee = "fl64", ge = aA + mA.length, Fe = Object.prototype.toString;
        function se(C) {
          var E, m, T, K, R, W = 0.75 * C.length, z = C.length, eA = 0;
          C[C.length - 1] === "=" && (W--, C[C.length - 2] === "=" && W--);
          var AA = new ArrayBuffer(W), BA = new Uint8Array(AA);
          for (E = 0; E < z; E += 4)
            m = M.indexOf(C[E]), T = M.indexOf(C[E + 1]), K = M.indexOf(C[E + 2]), R = M.indexOf(C[E + 3]), BA[eA++] = m << 2 | T >> 4, BA[eA++] = (15 & T) << 4 | K >> 2, BA[eA++] = (3 & K) << 6 | 63 & R;
          return AA;
        }
        function we(C) {
          var E, m = new Uint8Array(C), T = "";
          for (E = 0; E < m.length; E += 3)
            T += M[m[E] >> 2], T += M[(3 & m[E]) << 4 | m[E + 1] >> 4], T += M[(15 & m[E + 1]) << 2 | m[E + 2] >> 6], T += M[63 & m[E + 2]];
          return m.length % 3 == 2 ? T = T.substring(0, T.length - 1) + "=" : m.length % 3 == 1 && (T = T.substring(0, T.length - 2) + "=="), T;
        }
        var pe = { serialize: function(C, E) {
          var m = "";
          if (C && (m = Fe.call(C)), C && (m === "[object ArrayBuffer]" || C.buffer && Fe.call(C.buffer) === "[object ArrayBuffer]")) {
            var T, K = uA;
            C instanceof ArrayBuffer ? (T = C, K += mA) : (T = C.buffer, m === "[object Int8Array]" ? K += tA : m === "[object Uint8Array]" ? K += lA : m === "[object Uint8ClampedArray]" ? K += yA : m === "[object Int16Array]" ? K += LA : m === "[object Uint16Array]" ? K += JA : m === "[object Int32Array]" ? K += KA : m === "[object Uint32Array]" ? K += ne : m === "[object Float32Array]" ? K += le : m === "[object Float64Array]" ? K += ee : E(new Error("Failed to get type for BinaryArray"))), E(K + we(T));
          } else if (m === "[object Blob]") {
            var R = new FileReader();
            R.onload = function() {
              var W = "~~local_forage_type~" + C.type + "~" + we(this.result);
              E(uA + VA + W);
            }, R.readAsArrayBuffer(C);
          } else
            try {
              E(JSON.stringify(C));
            } catch (W) {
              console.error("Couldn't convert value into a JSON string: ", C), E(null, W);
            }
        }, deserialize: function(C) {
          if (C.substring(0, aA) !== uA)
            return JSON.parse(C);
          var E, m = C.substring(ge), T = C.substring(aA, ge);
          if (T === VA && q.test(m)) {
            var K = m.match(q);
            E = K[1], m = m.substring(K[0].length);
          }
          var R = se(m);
          switch (T) {
            case mA:
              return R;
            case VA:
              return p([R], { type: E });
            case tA:
              return new Int8Array(R);
            case lA:
              return new Uint8Array(R);
            case yA:
              return new Uint8ClampedArray(R);
            case LA:
              return new Int16Array(R);
            case JA:
              return new Uint16Array(R);
            case KA:
              return new Int32Array(R);
            case ne:
              return new Uint32Array(R);
            case le:
              return new Float32Array(R);
            case ee:
              return new Float64Array(R);
            default:
              throw new Error("Unkown type: " + T);
          }
        }, stringToBuffer: se, bufferToString: we };
        function oe(C, E, m, T) {
          C.executeSql("CREATE TABLE IF NOT EXISTS " + E.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], m, T);
        }
        function ae(C, E, m, T, K, R) {
          C.executeSql(m, T, K, function(W, z) {
            z.code === z.SYNTAX_ERR ? W.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [E.storeName], function(eA, AA) {
              AA.rows.length ? R(eA, z) : oe(eA, E, function() {
                eA.executeSql(m, T, K, R);
              }, R);
            }, R) : R(W, z);
          }, R);
        }
        function be(C, E, m, T) {
          var K = this;
          C = H(C);
          var R = new d(function(W, z) {
            K.ready().then(function() {
              E === void 0 && (E = null);
              var eA = E, AA = K._dbInfo;
              AA.serializer.serialize(E, function(BA, y) {
                y ? z(y) : AA.db.transaction(function(j) {
                  ae(j, AA, "INSERT OR REPLACE INTO " + AA.storeName + " (key, value) VALUES (?, ?)", [C, BA], function() {
                    W(eA);
                  }, function($, sA) {
                    z(sA);
                  });
                }, function(j) {
                  if (j.code === j.QUOTA_ERR) {
                    if (T > 0)
                      return void W(be.apply(K, [C, eA, m, T - 1]));
                    z(j);
                  }
                });
              });
            }).catch(z);
          });
          return v(R, m), R;
        }
        function Ze(C) {
          return new d(function(E, m) {
            C.transaction(function(T) {
              T.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(K, R) {
                for (var W = [], z = 0; z < R.rows.length; z++)
                  W.push(R.rows.item(z).name);
                E({ db: C, storeNames: W });
              }, function(K, R) {
                m(R);
              });
            }, function(T) {
              m(T);
            });
          });
        }
        var ke = { _driver: "webSQLStorage", _initStorage: function(C) {
          var E = this, m = { db: null };
          if (C)
            for (var T in C)
              m[T] = typeof C[T] != "string" ? C[T].toString() : C[T];
          var K = new d(function(R, W) {
            try {
              m.db = openDatabase(m.name, String(m.version), m.description, m.size);
            } catch (z) {
              return W(z);
            }
            m.db.transaction(function(z) {
              oe(z, m, function() {
                E._dbInfo = m, R();
              }, function(eA, AA) {
                W(AA);
              });
            }, W);
          });
          return m.serializer = pe, K;
        }, _support: typeof openDatabase == "function", iterate: function(C, E) {
          var m = this, T = new d(function(K, R) {
            m.ready().then(function() {
              var W = m._dbInfo;
              W.db.transaction(function(z) {
                ae(z, W, "SELECT * FROM " + W.storeName, [], function(eA, AA) {
                  for (var BA = AA.rows, y = BA.length, j = 0; j < y; j++) {
                    var $ = BA.item(j), sA = $.value;
                    if (sA && (sA = W.serializer.deserialize(sA)), (sA = C(sA, $.key, j + 1)) !== void 0)
                      return void K(sA);
                  }
                  K();
                }, function(eA, AA) {
                  R(AA);
                });
              });
            }).catch(R);
          });
          return v(T, E), T;
        }, getItem: function(C, E) {
          var m = this;
          C = H(C);
          var T = new d(function(K, R) {
            m.ready().then(function() {
              var W = m._dbInfo;
              W.db.transaction(function(z) {
                ae(z, W, "SELECT * FROM " + W.storeName + " WHERE key = ? LIMIT 1", [C], function(eA, AA) {
                  var BA = AA.rows.length ? AA.rows.item(0).value : null;
                  BA && (BA = W.serializer.deserialize(BA)), K(BA);
                }, function(eA, AA) {
                  R(AA);
                });
              });
            }).catch(R);
          });
          return v(T, E), T;
        }, setItem: function(C, E, m) {
          return be.apply(this, [C, E, m, 1]);
        }, removeItem: function(C, E) {
          var m = this;
          C = H(C);
          var T = new d(function(K, R) {
            m.ready().then(function() {
              var W = m._dbInfo;
              W.db.transaction(function(z) {
                ae(z, W, "DELETE FROM " + W.storeName + " WHERE key = ?", [C], function() {
                  K();
                }, function(eA, AA) {
                  R(AA);
                });
              });
            }).catch(R);
          });
          return v(T, E), T;
        }, clear: function(C) {
          var E = this, m = new d(function(T, K) {
            E.ready().then(function() {
              var R = E._dbInfo;
              R.db.transaction(function(W) {
                ae(W, R, "DELETE FROM " + R.storeName, [], function() {
                  T();
                }, function(z, eA) {
                  K(eA);
                });
              });
            }).catch(K);
          });
          return v(m, C), m;
        }, length: function(C) {
          var E = this, m = new d(function(T, K) {
            E.ready().then(function() {
              var R = E._dbInfo;
              R.db.transaction(function(W) {
                ae(W, R, "SELECT COUNT(key) as c FROM " + R.storeName, [], function(z, eA) {
                  var AA = eA.rows.item(0).c;
                  T(AA);
                }, function(z, eA) {
                  K(eA);
                });
              });
            }).catch(K);
          });
          return v(m, C), m;
        }, key: function(C, E) {
          var m = this, T = new d(function(K, R) {
            m.ready().then(function() {
              var W = m._dbInfo;
              W.db.transaction(function(z) {
                ae(z, W, "SELECT key FROM " + W.storeName + " WHERE id = ? LIMIT 1", [C + 1], function(eA, AA) {
                  var BA = AA.rows.length ? AA.rows.item(0).key : null;
                  K(BA);
                }, function(eA, AA) {
                  R(AA);
                });
              });
            }).catch(R);
          });
          return v(T, E), T;
        }, keys: function(C) {
          var E = this, m = new d(function(T, K) {
            E.ready().then(function() {
              var R = E._dbInfo;
              R.db.transaction(function(W) {
                ae(W, R, "SELECT key FROM " + R.storeName, [], function(z, eA) {
                  for (var AA = [], BA = 0; BA < eA.rows.length; BA++)
                    AA.push(eA.rows.item(BA).key);
                  T(AA);
                }, function(z, eA) {
                  K(eA);
                });
              });
            }).catch(K);
          });
          return v(m, C), m;
        }, dropInstance: function(C, E) {
          E = x.apply(this, arguments);
          var m = this.config();
          (C = typeof C != "function" && C || {}).name || (C.name = C.name || m.name, C.storeName = C.storeName || m.storeName);
          var T, K = this;
          return v(T = C.name ? new d(function(R) {
            var W;
            W = C.name === m.name ? K._dbInfo.db : openDatabase(C.name, "", "", 0), C.storeName ? R({ db: W, storeNames: [C.storeName] }) : R(Ze(W));
          }).then(function(R) {
            return new d(function(W, z) {
              R.db.transaction(function(eA) {
                function AA($) {
                  return new d(function(sA, bA) {
                    eA.executeSql("DROP TABLE IF EXISTS " + $, [], function() {
                      sA();
                    }, function(MA, DA) {
                      bA(DA);
                    });
                  });
                }
                for (var BA = [], y = 0, j = R.storeNames.length; y < j; y++)
                  BA.push(AA(R.storeNames[y]));
                d.all(BA).then(function() {
                  W();
                }).catch(function($) {
                  z($);
                });
              }, function(eA) {
                z(eA);
              });
            });
          }) : d.reject("Invalid arguments"), E), T;
        } };
        function ze(C, E) {
          var m = C.name + "/";
          return C.storeName !== E.storeName && (m += C.storeName + "/"), m;
        }
        function qe() {
          return !function() {
            var C = "_localforage_support_test";
            try {
              return localStorage.setItem(C, !0), localStorage.removeItem(C), !1;
            } catch {
              return !0;
            }
          }() || localStorage.length > 0;
        }
        var cA = { _driver: "localStorageWrapper", _initStorage: function(C) {
          var E = {};
          if (C)
            for (var m in C)
              E[m] = C[m];
          return E.keyPrefix = ze(C, this._defaultConfig), qe() ? (this._dbInfo = E, E.serializer = pe, d.resolve()) : d.reject();
        }, _support: function() {
          try {
            return typeof localStorage < "u" && "setItem" in localStorage && !!localStorage.setItem;
          } catch {
            return !1;
          }
        }(), iterate: function(C, E) {
          var m = this, T = m.ready().then(function() {
            for (var K = m._dbInfo, R = K.keyPrefix, W = R.length, z = localStorage.length, eA = 1, AA = 0; AA < z; AA++) {
              var BA = localStorage.key(AA);
              if (BA.indexOf(R) === 0) {
                var y = localStorage.getItem(BA);
                if (y && (y = K.serializer.deserialize(y)), (y = C(y, BA.substring(W), eA++)) !== void 0)
                  return y;
              }
            }
          });
          return v(T, E), T;
        }, getItem: function(C, E) {
          var m = this;
          C = H(C);
          var T = m.ready().then(function() {
            var K = m._dbInfo, R = localStorage.getItem(K.keyPrefix + C);
            return R && (R = K.serializer.deserialize(R)), R;
          });
          return v(T, E), T;
        }, setItem: function(C, E, m) {
          var T = this;
          C = H(C);
          var K = T.ready().then(function() {
            E === void 0 && (E = null);
            var R = E;
            return new d(function(W, z) {
              var eA = T._dbInfo;
              eA.serializer.serialize(E, function(AA, BA) {
                if (BA)
                  z(BA);
                else
                  try {
                    localStorage.setItem(eA.keyPrefix + C, AA), W(R);
                  } catch (y) {
                    y.name !== "QuotaExceededError" && y.name !== "NS_ERROR_DOM_QUOTA_REACHED" || z(y), z(y);
                  }
              });
            });
          });
          return v(K, m), K;
        }, removeItem: function(C, E) {
          var m = this;
          C = H(C);
          var T = m.ready().then(function() {
            var K = m._dbInfo;
            localStorage.removeItem(K.keyPrefix + C);
          });
          return v(T, E), T;
        }, clear: function(C) {
          var E = this, m = E.ready().then(function() {
            for (var T = E._dbInfo.keyPrefix, K = localStorage.length - 1; K >= 0; K--) {
              var R = localStorage.key(K);
              R.indexOf(T) === 0 && localStorage.removeItem(R);
            }
          });
          return v(m, C), m;
        }, length: function(C) {
          var E = this.keys().then(function(m) {
            return m.length;
          });
          return v(E, C), E;
        }, key: function(C, E) {
          var m = this, T = m.ready().then(function() {
            var K, R = m._dbInfo;
            try {
              K = localStorage.key(C);
            } catch {
              K = null;
            }
            return K && (K = K.substring(R.keyPrefix.length)), K;
          });
          return v(T, E), T;
        }, keys: function(C) {
          var E = this, m = E.ready().then(function() {
            for (var T = E._dbInfo, K = localStorage.length, R = [], W = 0; W < K; W++) {
              var z = localStorage.key(W);
              z.indexOf(T.keyPrefix) === 0 && R.push(z.substring(T.keyPrefix.length));
            }
            return R;
          });
          return v(m, C), m;
        }, dropInstance: function(C, E) {
          if (E = x.apply(this, arguments), !(C = typeof C != "function" && C || {}).name) {
            var m = this.config();
            C.name = C.name || m.name, C.storeName = C.storeName || m.storeName;
          }
          var T, K = this;
          return T = C.name ? new d(function(R) {
            C.storeName ? R(ze(C, K._defaultConfig)) : R(C.name + "/");
          }).then(function(R) {
            for (var W = localStorage.length - 1; W >= 0; W--) {
              var z = localStorage.key(W);
              z.indexOf(R) === 0 && localStorage.removeItem(z);
            }
          }) : d.reject("Invalid arguments"), v(T, E), T;
        } }, pA = function(C, E) {
          for (var m = C.length, T = 0; T < m; ) {
            if ((K = C[T]) === (R = E) || typeof K == "number" && typeof R == "number" && isNaN(K) && isNaN(R))
              return !0;
            T++;
          }
          var K, R;
          return !1;
        }, GA = Array.isArray || function(C) {
          return Object.prototype.toString.call(C) === "[object Array]";
        }, WA = {}, ce = {}, Qe = { INDEXEDDB: X, WEBSQL: ke, LOCALSTORAGE: cA }, je = [Qe.INDEXEDDB._driver, Qe.WEBSQL._driver, Qe.LOCALSTORAGE._driver], Xe = ["dropInstance"], tr = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(Xe), $e = { description: "", driver: je.slice(), name: "localforage", size: 4980736, storeName: "keyvaluepairs", version: 1 };
        function fr(C, E) {
          C[E] = function() {
            var m = arguments;
            return C.ready().then(function() {
              return C[E].apply(C, m);
            });
          };
        }
        function Je() {
          for (var C = 1; C < arguments.length; C++) {
            var E = arguments[C];
            if (E)
              for (var m in E)
                E.hasOwnProperty(m) && (GA(E[m]) ? arguments[0][m] = E[m].slice() : arguments[0][m] = E[m]);
          }
          return arguments[0];
        }
        var Dr = function() {
          function C(E) {
            for (var m in function(R, W) {
              if (!(R instanceof W))
                throw new TypeError("Cannot call a class as a function");
            }(this, C), Qe)
              if (Qe.hasOwnProperty(m)) {
                var T = Qe[m], K = T._driver;
                this[m] = K, WA[K] || this.defineDriver(T);
              }
            this._defaultConfig = Je({}, $e), this._config = Je({}, this._defaultConfig, E), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch(function() {
            });
          }
          return C.prototype.config = function(E) {
            if ((E === void 0 ? "undefined" : h(E)) === "object") {
              if (this._ready)
                return new Error("Can't call config() after localforage has been used.");
              for (var m in E) {
                if (m === "storeName" && (E[m] = E[m].replace(/\W/g, "_")), m === "version" && typeof E[m] != "number")
                  return new Error("Database version must be a number.");
                this._config[m] = E[m];
              }
              return !("driver" in E) || !E.driver || this.setDriver(this._config.driver);
            }
            return typeof E == "string" ? this._config[E] : this._config;
          }, C.prototype.defineDriver = function(E, m, T) {
            var K = new d(function(R, W) {
              try {
                var z = E._driver, eA = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
                if (!E._driver)
                  return void W(eA);
                for (var AA = tr.concat("_initStorage"), BA = 0, y = AA.length; BA < y; BA++) {
                  var j = AA[BA];
                  if ((!pA(Xe, j) || E[j]) && typeof E[j] != "function")
                    return void W(eA);
                }
                (function() {
                  for (var sA = function(_A) {
                    return function() {
                      var re = new Error("Method " + _A + " is not implemented by the current driver"), IA = d.reject(re);
                      return v(IA, arguments[arguments.length - 1]), IA;
                    };
                  }, bA = 0, MA = Xe.length; bA < MA; bA++) {
                    var DA = Xe[bA];
                    E[DA] || (E[DA] = sA(DA));
                  }
                })();
                var $ = function(sA) {
                  WA[z] && console.info("Redefining LocalForage driver: " + z), WA[z] = E, ce[z] = sA, R();
                };
                "_support" in E ? E._support && typeof E._support == "function" ? E._support().then($, W) : $(!!E._support) : $(!0);
              } catch (sA) {
                W(sA);
              }
            });
            return F(K, m, T), K;
          }, C.prototype.driver = function() {
            return this._driver || null;
          }, C.prototype.getDriver = function(E, m, T) {
            var K = WA[E] ? d.resolve(WA[E]) : d.reject(new Error("Driver not found."));
            return F(K, m, T), K;
          }, C.prototype.getSerializer = function(E) {
            var m = d.resolve(pe);
            return F(m, E), m;
          }, C.prototype.ready = function(E) {
            var m = this, T = m._driverSet.then(function() {
              return m._ready === null && (m._ready = m._initDriver()), m._ready;
            });
            return F(T, E, E), T;
          }, C.prototype.setDriver = function(E, m, T) {
            var K = this;
            GA(E) || (E = [E]);
            var R = this._getSupportedDrivers(E);
            function W() {
              K._config.driver = K.driver();
            }
            function z(AA) {
              return K._extend(AA), W(), K._ready = K._initStorage(K._config), K._ready;
            }
            var eA = this._driverSet !== null ? this._driverSet.catch(function() {
              return d.resolve();
            }) : d.resolve();
            return this._driverSet = eA.then(function() {
              var AA = R[0];
              return K._dbInfo = null, K._ready = null, K.getDriver(AA).then(function(BA) {
                K._driver = BA._driver, W(), K._wrapLibraryMethodsWithReady(), K._initDriver = /* @__PURE__ */ function(y) {
                  return function() {
                    var j = 0;
                    return function $() {
                      for (; j < y.length; ) {
                        var sA = y[j];
                        return j++, K._dbInfo = null, K._ready = null, K.getDriver(sA).then(z).catch($);
                      }
                      W();
                      var bA = new Error("No available storage method found.");
                      return K._driverSet = d.reject(bA), K._driverSet;
                    }();
                  };
                }(R);
              });
            }).catch(function() {
              W();
              var AA = new Error("No available storage method found.");
              return K._driverSet = d.reject(AA), K._driverSet;
            }), F(this._driverSet, m, T), this._driverSet;
          }, C.prototype.supports = function(E) {
            return !!ce[E];
          }, C.prototype._extend = function(E) {
            Je(this, E);
          }, C.prototype._getSupportedDrivers = function(E) {
            for (var m = [], T = 0, K = E.length; T < K; T++) {
              var R = E[T];
              this.supports(R) && m.push(R);
            }
            return m;
          }, C.prototype._wrapLibraryMethodsWithReady = function() {
            for (var E = 0, m = tr.length; E < m; E++)
              fr(this, tr[E]);
          }, C.prototype.createInstance = function(E) {
            return new C(E);
          }, C;
        }(), yr = new Dr();
        f.exports = yr;
      }, { 3: 3 }] }, {}, [4])(4);
    }, 8156: (a) => {
      a.exports = t;
    }, 1337: (a, u, n) => {
      var i = n(7501).default;
      function f() {
        a.exports = f = function() {
          return l;
        }, a.exports.__esModule = !0, a.exports.default = a.exports;
        var l = {}, h = Object.prototype, Q = h.hasOwnProperty, p = Object.defineProperty || function(X, M, q) {
          X[M] = q.value;
        }, d = typeof Symbol == "function" ? Symbol : {}, v = d.iterator || "@@iterator", F = d.asyncIterator || "@@asyncIterator", H = d.toStringTag || "@@toStringTag";
        function x(X, M, q) {
          return Object.defineProperty(X, M, { value: q, enumerable: !0, configurable: !0, writable: !0 }), X[M];
        }
        try {
          x({}, "");
        } catch {
          x = function(M, q, uA) {
            return M[q] = uA;
          };
        }
        function O(X, M, q, uA) {
          var aA = M && M.prototype instanceof V ? M : V, mA = Object.create(aA.prototype), VA = new EA(uA || []);
          return p(mA, "_invoke", { value: oA(X, q, VA) }), mA;
        }
        function L(X, M, q) {
          try {
            return { type: "normal", arg: X.call(M, q) };
          } catch (uA) {
            return { type: "throw", arg: uA };
          }
        }
        l.wrap = O;
        var G = {};
        function V() {
        }
        function b() {
        }
        function N() {
        }
        var P = {};
        x(P, v, function() {
          return this;
        });
        var k = Object.getPrototypeOf, S = k && k(k(FA([])));
        S && S !== h && Q.call(S, v) && (P = S);
        var _ = N.prototype = V.prototype = Object.create(P);
        function Y(X) {
          ["next", "throw", "return"].forEach(function(M) {
            x(X, M, function(q) {
              return this._invoke(M, q);
            });
          });
        }
        function iA(X, M) {
          function q(aA, mA, VA, tA) {
            var lA = L(X[aA], X, mA);
            if (lA.type !== "throw") {
              var yA = lA.arg, LA = yA.value;
              return LA && i(LA) == "object" && Q.call(LA, "__await") ? M.resolve(LA.__await).then(function(KA) {
                q("next", KA, VA, tA);
              }, function(KA) {
                q("throw", KA, VA, tA);
              }) : M.resolve(LA).then(function(KA) {
                yA.value = KA, VA(yA);
              }, function(KA) {
                return q("throw", KA, VA, tA);
              });
            }
            tA(lA.arg);
          }
          var uA;
          p(this, "_invoke", { value: function(aA, mA) {
            function VA() {
              return new M(function(tA, lA) {
                q(aA, mA, tA, lA);
              });
            }
            return uA = uA ? uA.then(VA, VA) : VA();
          } });
        }
        function oA(X, M, q) {
          var uA = "suspendedStart";
          return function(aA, mA) {
            if (uA === "executing")
              throw new Error("Generator is already running");
            if (uA === "completed") {
              if (aA === "throw")
                throw mA;
              return { value: void 0, done: !0 };
            }
            for (q.method = aA, q.arg = mA; ; ) {
              var VA = q.delegate;
              if (VA) {
                var tA = UA(VA, q);
                if (tA) {
                  if (tA === G)
                    continue;
                  return tA;
                }
              }
              if (q.method === "next")
                q.sent = q._sent = q.arg;
              else if (q.method === "throw") {
                if (uA === "suspendedStart")
                  throw uA = "completed", q.arg;
                q.dispatchException(q.arg);
              } else
                q.method === "return" && q.abrupt("return", q.arg);
              uA = "executing";
              var lA = L(X, M, q);
              if (lA.type === "normal") {
                if (uA = q.done ? "completed" : "suspendedYield", lA.arg === G)
                  continue;
                return { value: lA.arg, done: q.done };
              }
              lA.type === "throw" && (uA = "completed", q.method = "throw", q.arg = lA.arg);
            }
          };
        }
        function UA(X, M) {
          var q = M.method, uA = X.iterator[q];
          if (uA === void 0)
            return M.delegate = null, q === "throw" && X.iterator.return && (M.method = "return", M.arg = void 0, UA(X, M), M.method === "throw") || q !== "return" && (M.method = "throw", M.arg = new TypeError("The iterator does not provide a '" + q + "' method")), G;
          var aA = L(uA, X.iterator, M.arg);
          if (aA.type === "throw")
            return M.method = "throw", M.arg = aA.arg, M.delegate = null, G;
          var mA = aA.arg;
          return mA ? mA.done ? (M[X.resultName] = mA.value, M.next = X.nextLoc, M.method !== "return" && (M.method = "next", M.arg = void 0), M.delegate = null, G) : mA : (M.method = "throw", M.arg = new TypeError("iterator result is not an object"), M.delegate = null, G);
        }
        function HA(X) {
          var M = { tryLoc: X[0] };
          1 in X && (M.catchLoc = X[1]), 2 in X && (M.finallyLoc = X[2], M.afterLoc = X[3]), this.tryEntries.push(M);
        }
        function CA(X) {
          var M = X.completion || {};
          M.type = "normal", delete M.arg, X.completion = M;
        }
        function EA(X) {
          this.tryEntries = [{ tryLoc: "root" }], X.forEach(HA, this), this.reset(!0);
        }
        function FA(X) {
          if (X) {
            var M = X[v];
            if (M)
              return M.call(X);
            if (typeof X.next == "function")
              return X;
            if (!isNaN(X.length)) {
              var q = -1, uA = function aA() {
                for (; ++q < X.length; )
                  if (Q.call(X, q))
                    return aA.value = X[q], aA.done = !1, aA;
                return aA.value = void 0, aA.done = !0, aA;
              };
              return uA.next = uA;
            }
          }
          return { next: QA };
        }
        function QA() {
          return { value: void 0, done: !0 };
        }
        return b.prototype = N, p(_, "constructor", { value: N, configurable: !0 }), p(N, "constructor", { value: b, configurable: !0 }), b.displayName = x(N, H, "GeneratorFunction"), l.isGeneratorFunction = function(X) {
          var M = typeof X == "function" && X.constructor;
          return !!M && (M === b || (M.displayName || M.name) === "GeneratorFunction");
        }, l.mark = function(X) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(X, N) : (X.__proto__ = N, x(X, H, "GeneratorFunction")), X.prototype = Object.create(_), X;
        }, l.awrap = function(X) {
          return { __await: X };
        }, Y(iA.prototype), x(iA.prototype, F, function() {
          return this;
        }), l.AsyncIterator = iA, l.async = function(X, M, q, uA, aA) {
          aA === void 0 && (aA = Promise);
          var mA = new iA(O(X, M, q, uA), aA);
          return l.isGeneratorFunction(M) ? mA : mA.next().then(function(VA) {
            return VA.done ? VA.value : mA.next();
          });
        }, Y(_), x(_, H, "Generator"), x(_, v, function() {
          return this;
        }), x(_, "toString", function() {
          return "[object Generator]";
        }), l.keys = function(X) {
          var M = Object(X), q = [];
          for (var uA in M)
            q.push(uA);
          return q.reverse(), function aA() {
            for (; q.length; ) {
              var mA = q.pop();
              if (mA in M)
                return aA.value = mA, aA.done = !1, aA;
            }
            return aA.done = !0, aA;
          };
        }, l.values = FA, EA.prototype = { constructor: EA, reset: function(X) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(CA), !X)
            for (var M in this)
              M.charAt(0) === "t" && Q.call(this, M) && !isNaN(+M.slice(1)) && (this[M] = void 0);
        }, stop: function() {
          this.done = !0;
          var X = this.tryEntries[0].completion;
          if (X.type === "throw")
            throw X.arg;
          return this.rval;
        }, dispatchException: function(X) {
          if (this.done)
            throw X;
          var M = this;
          function q(lA, yA) {
            return mA.type = "throw", mA.arg = X, M.next = lA, yA && (M.method = "next", M.arg = void 0), !!yA;
          }
          for (var uA = this.tryEntries.length - 1; uA >= 0; --uA) {
            var aA = this.tryEntries[uA], mA = aA.completion;
            if (aA.tryLoc === "root")
              return q("end");
            if (aA.tryLoc <= this.prev) {
              var VA = Q.call(aA, "catchLoc"), tA = Q.call(aA, "finallyLoc");
              if (VA && tA) {
                if (this.prev < aA.catchLoc)
                  return q(aA.catchLoc, !0);
                if (this.prev < aA.finallyLoc)
                  return q(aA.finallyLoc);
              } else if (VA) {
                if (this.prev < aA.catchLoc)
                  return q(aA.catchLoc, !0);
              } else {
                if (!tA)
                  throw new Error("try statement without catch or finally");
                if (this.prev < aA.finallyLoc)
                  return q(aA.finallyLoc);
              }
            }
          }
        }, abrupt: function(X, M) {
          for (var q = this.tryEntries.length - 1; q >= 0; --q) {
            var uA = this.tryEntries[q];
            if (uA.tryLoc <= this.prev && Q.call(uA, "finallyLoc") && this.prev < uA.finallyLoc) {
              var aA = uA;
              break;
            }
          }
          aA && (X === "break" || X === "continue") && aA.tryLoc <= M && M <= aA.finallyLoc && (aA = null);
          var mA = aA ? aA.completion : {};
          return mA.type = X, mA.arg = M, aA ? (this.method = "next", this.next = aA.finallyLoc, G) : this.complete(mA);
        }, complete: function(X, M) {
          if (X.type === "throw")
            throw X.arg;
          return X.type === "break" || X.type === "continue" ? this.next = X.arg : X.type === "return" ? (this.rval = this.arg = X.arg, this.method = "return", this.next = "end") : X.type === "normal" && M && (this.next = M), G;
        }, finish: function(X) {
          for (var M = this.tryEntries.length - 1; M >= 0; --M) {
            var q = this.tryEntries[M];
            if (q.finallyLoc === X)
              return this.complete(q.completion, q.afterLoc), CA(q), G;
          }
        }, catch: function(X) {
          for (var M = this.tryEntries.length - 1; M >= 0; --M) {
            var q = this.tryEntries[M];
            if (q.tryLoc === X) {
              var uA = q.completion;
              if (uA.type === "throw") {
                var aA = uA.arg;
                CA(q);
              }
              return aA;
            }
          }
          throw new Error("illegal catch attempt");
        }, delegateYield: function(X, M, q) {
          return this.delegate = { iterator: FA(X), resultName: M, nextLoc: q }, this.method === "next" && (this.arg = void 0), G;
        } }, l;
      }
      a.exports = f, a.exports.__esModule = !0, a.exports.default = a.exports;
    }, 7501: (a) => {
      function u(n) {
        return a.exports = u = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(i) {
          return typeof i;
        } : function(i) {
          return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
        }, a.exports.__esModule = !0, a.exports.default = a.exports, u(n);
      }
      a.exports = u, a.exports.__esModule = !0, a.exports.default = a.exports;
    }, 824: (a, u, n) => {
      var i = n(1337)();
      a.exports = i;
      try {
        regeneratorRuntime = i;
      } catch {
        typeof globalThis == "object" ? globalThis.regeneratorRuntime = i : Function("r", "regeneratorRuntime = r")(i);
      }
    } }, o = {};
    function c(a) {
      var u = o[a];
      if (u !== void 0)
        return u.exports;
      var n = o[a] = { exports: {} };
      return r[a](n, n.exports, c), n.exports;
    }
    c.n = (a) => {
      var u = a && a.__esModule ? () => a.default : () => a;
      return c.d(u, { a: u }), u;
    }, c.d = (a, u) => {
      for (var n in u)
        c.o(u, n) && !c.o(a, n) && Object.defineProperty(a, n, { enumerable: !0, get: u[n] });
    }, c.g = function() {
      if (typeof globalThis == "object")
        return globalThis;
      try {
        return this || new Function("return this")();
      } catch {
        if (typeof window == "object")
          return window;
      }
    }(), c.o = (a, u) => Object.prototype.hasOwnProperty.call(a, u), c.r = (a) => {
      typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(a, "__esModule", { value: !0 });
    };
    var w = {};
    return (() => {
      function a(s) {
        return a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(B) {
          return typeof B;
        } : function(B) {
          return B && typeof Symbol == "function" && B.constructor === Symbol && B !== Symbol.prototype ? "symbol" : typeof B;
        }, a(s);
      }
      function u(s, B, g) {
        return (B = function(U) {
          var I = function(D, J) {
            if (a(D) !== "object" || D === null)
              return D;
            var Z = D[Symbol.toPrimitive];
            if (Z !== void 0) {
              var nA = Z.call(D, "string");
              if (a(nA) !== "object")
                return nA;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(D);
          }(U);
          return a(I) === "symbol" ? I : String(I);
        }(B)) in s ? Object.defineProperty(s, B, { value: g, enumerable: !0, configurable: !0, writable: !0 }) : s[B] = g, s;
      }
      function n(s, B, g, U, I, D, J) {
        try {
          var Z = s[D](J), nA = Z.value;
        } catch (rA) {
          return void g(rA);
        }
        Z.done ? B(nA) : Promise.resolve(nA).then(U, I);
      }
      function i(s) {
        return function() {
          var B = this, g = arguments;
          return new Promise(function(U, I) {
            var D = s.apply(B, g);
            function J(nA) {
              n(D, U, I, J, Z, "next", nA);
            }
            function Z(nA) {
              n(D, U, I, J, Z, "throw", nA);
            }
            J(void 0);
          });
        };
      }
      function f(s, B) {
        (B == null || B > s.length) && (B = s.length);
        for (var g = 0, U = new Array(B); g < B; g++)
          U[g] = s[g];
        return U;
      }
      function l(s, B) {
        if (s) {
          if (typeof s == "string")
            return f(s, B);
          var g = Object.prototype.toString.call(s).slice(8, -1);
          return g === "Object" && s.constructor && (g = s.constructor.name), g === "Map" || g === "Set" ? Array.from(s) : g === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g) ? f(s, B) : void 0;
        }
      }
      function h(s, B) {
        return function(g) {
          if (Array.isArray(g))
            return g;
        }(s) || function(g, U) {
          var I = g == null ? null : typeof Symbol < "u" && g[Symbol.iterator] || g["@@iterator"];
          if (I != null) {
            var D, J, Z, nA, rA = [], dA = !0, hA = !1;
            try {
              if (Z = (I = I.call(g)).next, U === 0) {
                if (Object(I) !== I)
                  return;
                dA = !1;
              } else
                for (; !(dA = (D = Z.call(I)).done) && (rA.push(D.value), rA.length !== U); dA = !0)
                  ;
            } catch (vA) {
              hA = !0, J = vA;
            } finally {
              try {
                if (!dA && I.return != null && (nA = I.return(), Object(nA) !== nA))
                  return;
              } finally {
                if (hA)
                  throw J;
              }
            }
            return rA;
          }
        }(s, B) || l(s, B) || function() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }();
      }
      function Q(s, B) {
        if (s == null)
          return {};
        var g, U, I = function(J, Z) {
          if (J == null)
            return {};
          var nA, rA, dA = {}, hA = Object.keys(J);
          for (rA = 0; rA < hA.length; rA++)
            nA = hA[rA], Z.indexOf(nA) >= 0 || (dA[nA] = J[nA]);
          return dA;
        }(s, B);
        if (Object.getOwnPropertySymbols) {
          var D = Object.getOwnPropertySymbols(s);
          for (U = 0; U < D.length; U++)
            g = D[U], B.indexOf(g) >= 0 || Object.prototype.propertyIsEnumerable.call(s, g) && (I[g] = s[g]);
        }
        return I;
      }
      c.r(w), c.d(w, { Dynamic: () => fu, checkPrefixRelation: () => ro, clone: () => lr, connect: () => pu, default: () => yu, get: () => Rr, getPathArray: () => ar, useAdd: () => Cu, useChange: () => vu, useDispatch: () => Kt, useModel: () => $a, useNearestStore: () => nr, useObserver: () => Uu, useReference: () => Fu }), c(4978), c(9823), c(4434), c(541), c(7772), c(7453), c(8344), c(5843);
      var p = c(824), d = c.n(p), v = (c(6139), c(5105), c(4321), c(5867), c(8703), c(8156)), F = c.n(v), H = c(927);
      let x = (s = 21) => crypto.getRandomValues(new Uint8Array(s)).reduce((B, g) => B + ((g &= 63) < 36 ? g.toString(36) : g < 62 ? (g - 26).toString(36).toUpperCase() : g > 62 ? "-" : "_"), "");
      const O = function(s, B) {
        return s === B || s != s && B != B;
      }, L = function(s, B) {
        for (var g = s.length; g--; )
          if (O(s[g][0], B))
            return g;
        return -1;
      };
      var G = Array.prototype.splice;
      function V(s) {
        var B = -1, g = s == null ? 0 : s.length;
        for (this.clear(); ++B < g; ) {
          var U = s[B];
          this.set(U[0], U[1]);
        }
      }
      V.prototype.clear = function() {
        this.__data__ = [], this.size = 0;
      }, V.prototype.delete = function(s) {
        var B = this.__data__, g = L(B, s);
        return !(g < 0 || (g == B.length - 1 ? B.pop() : G.call(B, g, 1), --this.size, 0));
      }, V.prototype.get = function(s) {
        var B = this.__data__, g = L(B, s);
        return g < 0 ? void 0 : B[g][1];
      }, V.prototype.has = function(s) {
        return L(this.__data__, s) > -1;
      }, V.prototype.set = function(s, B) {
        var g = this.__data__, U = L(g, s);
        return U < 0 ? (++this.size, g.push([s, B])) : g[U][1] = B, this;
      };
      const b = V, N = typeof at == "object" && at && at.Object === Object && at;
      var P = typeof self == "object" && self && self.Object === Object && self;
      const k = N || P || Function("return this")(), S = k.Symbol;
      var _ = Object.prototype, Y = _.hasOwnProperty, iA = _.toString, oA = S ? S.toStringTag : void 0, UA = Object.prototype.toString, HA = S ? S.toStringTag : void 0;
      const CA = function(s) {
        return s == null ? s === void 0 ? "[object Undefined]" : "[object Null]" : HA && HA in Object(s) ? function(B) {
          var g = Y.call(B, oA), U = B[oA];
          try {
            B[oA] = void 0;
            var I = !0;
          } catch {
          }
          var D = iA.call(B);
          return I && (g ? B[oA] = U : delete B[oA]), D;
        }(s) : function(B) {
          return UA.call(B);
        }(s);
      }, EA = function(s) {
        var B = typeof s;
        return s != null && (B == "object" || B == "function");
      }, FA = function(s) {
        if (!EA(s))
          return !1;
        var B = CA(s);
        return B == "[object Function]" || B == "[object GeneratorFunction]" || B == "[object AsyncFunction]" || B == "[object Proxy]";
      }, QA = k["__core-js_shared__"];
      var X, M = (X = /[^.]+$/.exec(QA && QA.keys && QA.keys.IE_PROTO || "")) ? "Symbol(src)_1." + X : "", q = Function.prototype.toString;
      const uA = function(s) {
        if (s != null) {
          try {
            return q.call(s);
          } catch {
          }
          try {
            return s + "";
          } catch {
          }
        }
        return "";
      };
      var aA = /^\[object .+?Constructor\]$/, mA = Function.prototype, VA = Object.prototype, tA = mA.toString, lA = VA.hasOwnProperty, yA = RegExp("^" + tA.call(lA).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
      const LA = function(s) {
        return !(!EA(s) || (B = s, M && M in B)) && (FA(s) ? yA : aA).test(uA(s));
        var B;
      }, KA = function(s, B) {
        var g = function(U, I) {
          return U == null ? void 0 : U[I];
        }(s, B);
        return LA(g) ? g : void 0;
      }, JA = KA(k, "Map"), ne = KA(Object, "create");
      var le = Object.prototype.hasOwnProperty, ee = Object.prototype.hasOwnProperty;
      function ge(s) {
        var B = -1, g = s == null ? 0 : s.length;
        for (this.clear(); ++B < g; ) {
          var U = s[B];
          this.set(U[0], U[1]);
        }
      }
      ge.prototype.clear = function() {
        this.__data__ = ne ? ne(null) : {}, this.size = 0;
      }, ge.prototype.delete = function(s) {
        var B = this.has(s) && delete this.__data__[s];
        return this.size -= B ? 1 : 0, B;
      }, ge.prototype.get = function(s) {
        var B = this.__data__;
        if (ne) {
          var g = B[s];
          return g === "__lodash_hash_undefined__" ? void 0 : g;
        }
        return le.call(B, s) ? B[s] : void 0;
      }, ge.prototype.has = function(s) {
        var B = this.__data__;
        return ne ? B[s] !== void 0 : ee.call(B, s);
      }, ge.prototype.set = function(s, B) {
        var g = this.__data__;
        return this.size += this.has(s) ? 0 : 1, g[s] = ne && B === void 0 ? "__lodash_hash_undefined__" : B, this;
      };
      const Fe = ge, se = function(s, B) {
        var g, U, I = s.__data__;
        return ((U = typeof (g = B)) == "string" || U == "number" || U == "symbol" || U == "boolean" ? g !== "__proto__" : g === null) ? I[typeof B == "string" ? "string" : "hash"] : I.map;
      };
      function we(s) {
        var B = -1, g = s == null ? 0 : s.length;
        for (this.clear(); ++B < g; ) {
          var U = s[B];
          this.set(U[0], U[1]);
        }
      }
      we.prototype.clear = function() {
        this.size = 0, this.__data__ = { hash: new Fe(), map: new (JA || b)(), string: new Fe() };
      }, we.prototype.delete = function(s) {
        var B = se(this, s).delete(s);
        return this.size -= B ? 1 : 0, B;
      }, we.prototype.get = function(s) {
        return se(this, s).get(s);
      }, we.prototype.has = function(s) {
        return se(this, s).has(s);
      }, we.prototype.set = function(s, B) {
        var g = se(this, s), U = g.size;
        return g.set(s, B), this.size += g.size == U ? 0 : 1, this;
      };
      const pe = we;
      function oe(s) {
        var B = this.__data__ = new b(s);
        this.size = B.size;
      }
      oe.prototype.clear = function() {
        this.__data__ = new b(), this.size = 0;
      }, oe.prototype.delete = function(s) {
        var B = this.__data__, g = B.delete(s);
        return this.size = B.size, g;
      }, oe.prototype.get = function(s) {
        return this.__data__.get(s);
      }, oe.prototype.has = function(s) {
        return this.__data__.has(s);
      }, oe.prototype.set = function(s, B) {
        var g = this.__data__;
        if (g instanceof b) {
          var U = g.__data__;
          if (!JA || U.length < 199)
            return U.push([s, B]), this.size = ++g.size, this;
          g = this.__data__ = new pe(U);
        }
        return g.set(s, B), this.size = g.size, this;
      };
      const ae = oe, be = function() {
        try {
          var s = KA(Object, "defineProperty");
          return s({}, "", {}), s;
        } catch {
        }
      }(), Ze = function(s, B, g) {
        B == "__proto__" && be ? be(s, B, { configurable: !0, enumerable: !0, value: g, writable: !0 }) : s[B] = g;
      }, ke = function(s, B, g) {
        (g !== void 0 && !O(s[B], g) || g === void 0 && !(B in s)) && Ze(s, B, g);
      }, ze = function(s, B, g) {
        for (var U = -1, I = Object(s), D = g(s), J = D.length; J--; ) {
          var Z = D[++U];
          if (B(I[Z], Z, I) === !1)
            break;
        }
        return s;
      };
      var qe = A && !A.nodeType && A, cA = qe && !0 && e && !e.nodeType && e, pA = cA && cA.exports === qe ? k.Buffer : void 0, GA = pA ? pA.allocUnsafe : void 0;
      const WA = function(s, B) {
        if (B)
          return s.slice();
        var g = s.length, U = GA ? GA(g) : new s.constructor(g);
        return s.copy(U), U;
      }, ce = k.Uint8Array, Qe = function(s) {
        var B = new s.constructor(s.byteLength);
        return new ce(B).set(new ce(s)), B;
      }, je = function(s, B) {
        var g = B ? Qe(s.buffer) : s.buffer;
        return new s.constructor(g, s.byteOffset, s.length);
      }, Xe = function(s, B) {
        var g = -1, U = s.length;
        for (B || (B = Array(U)); ++g < U; )
          B[g] = s[g];
        return B;
      };
      var tr = Object.create;
      const $e = /* @__PURE__ */ function() {
        function s() {
        }
        return function(B) {
          if (!EA(B))
            return {};
          if (tr)
            return tr(B);
          s.prototype = B;
          var g = new s();
          return s.prototype = void 0, g;
        };
      }(), fr = function(s, B) {
        return function(g) {
          return s(B(g));
        };
      }, Je = fr(Object.getPrototypeOf, Object);
      var Dr = Object.prototype;
      const yr = function(s) {
        var B = s && s.constructor;
        return s === (typeof B == "function" && B.prototype || Dr);
      }, C = function(s) {
        return typeof s.constructor != "function" || yr(s) ? {} : $e(Je(s));
      }, E = function(s) {
        return s != null && typeof s == "object";
      }, m = function(s) {
        return E(s) && CA(s) == "[object Arguments]";
      };
      var T = Object.prototype, K = T.hasOwnProperty, R = T.propertyIsEnumerable;
      const W = m(/* @__PURE__ */ function() {
        return arguments;
      }()) ? m : function(s) {
        return E(s) && K.call(s, "callee") && !R.call(s, "callee");
      }, z = Array.isArray, eA = function(s) {
        return typeof s == "number" && s > -1 && s % 1 == 0 && s <= 9007199254740991;
      }, AA = function(s) {
        return s != null && eA(s.length) && !FA(s);
      };
      var BA = A && !A.nodeType && A, y = BA && !0 && e && !e.nodeType && e, j = y && y.exports === BA ? k.Buffer : void 0;
      const $ = (j ? j.isBuffer : void 0) || function() {
        return !1;
      };
      var sA = Function.prototype, bA = Object.prototype, MA = sA.toString, DA = bA.hasOwnProperty, _A = MA.call(Object);
      const re = function(s) {
        if (!E(s) || CA(s) != "[object Object]")
          return !1;
        var B = Je(s);
        if (B === null)
          return !0;
        var g = DA.call(B, "constructor") && B.constructor;
        return typeof g == "function" && g instanceof g && MA.call(g) == _A;
      };
      var IA = {};
      IA["[object Float32Array]"] = IA["[object Float64Array]"] = IA["[object Int8Array]"] = IA["[object Int16Array]"] = IA["[object Int32Array]"] = IA["[object Uint8Array]"] = IA["[object Uint8ClampedArray]"] = IA["[object Uint16Array]"] = IA["[object Uint32Array]"] = !0, IA["[object Arguments]"] = IA["[object Array]"] = IA["[object ArrayBuffer]"] = IA["[object Boolean]"] = IA["[object DataView]"] = IA["[object Date]"] = IA["[object Error]"] = IA["[object Function]"] = IA["[object Map]"] = IA["[object Number]"] = IA["[object Object]"] = IA["[object RegExp]"] = IA["[object Set]"] = IA["[object String]"] = IA["[object WeakMap]"] = !1;
      const $A = function(s) {
        return function(B) {
          return s(B);
        };
      };
      var xe = A && !A.nodeType && A, Re = xe && !0 && e && !e.nodeType && e, Tr = Re && Re.exports === xe && N.process;
      const Ce = function() {
        try {
          return Re && Re.require && Re.require("util").types || Tr && Tr.binding && Tr.binding("util");
        } catch {
        }
      }();
      var Ba = Ce && Ce.isTypedArray;
      const xt = Ba ? $A(Ba) : function(s) {
        return E(s) && eA(s.length) && !!IA[CA(s)];
      }, Ln = function(s, B) {
        if ((B !== "constructor" || typeof s[B] != "function") && B != "__proto__")
          return s[B];
      };
      var ic = Object.prototype.hasOwnProperty;
      const Kn = function(s, B, g) {
        var U = s[B];
        ic.call(s, B) && O(U, g) && (g !== void 0 || B in s) || Ze(s, B, g);
      }, At = function(s, B, g, U) {
        var I = !g;
        g || (g = {});
        for (var D = -1, J = B.length; ++D < J; ) {
          var Z = B[D], nA = U ? U(g[Z], s[Z], Z, g, s) : void 0;
          nA === void 0 && (nA = s[Z]), I ? Ze(g, Z, nA) : Kn(g, Z, nA);
        }
        return g;
      };
      var sc = /^(?:0|[1-9]\d*)$/;
      const On = function(s, B) {
        var g = typeof s;
        return !!(B = B ?? 9007199254740991) && (g == "number" || g != "symbol" && sc.test(s)) && s > -1 && s % 1 == 0 && s < B;
      };
      var cc = Object.prototype.hasOwnProperty;
      const fa = function(s, B) {
        var g = z(s), U = !g && W(s), I = !g && !U && $(s), D = !g && !U && !I && xt(s), J = g || U || I || D, Z = J ? function(dA, hA) {
          for (var vA = -1, TA = Array(dA); ++vA < dA; )
            TA[vA] = hA(vA);
          return TA;
        }(s.length, String) : [], nA = Z.length;
        for (var rA in s)
          !B && !cc.call(s, rA) || J && (rA == "length" || I && (rA == "offset" || rA == "parent") || D && (rA == "buffer" || rA == "byteLength" || rA == "byteOffset") || On(rA, nA)) || Z.push(rA);
        return Z;
      };
      var uc = Object.prototype.hasOwnProperty;
      const Bc = function(s) {
        if (!EA(s))
          return function(I) {
            var D = [];
            if (I != null)
              for (var J in Object(I))
                D.push(J);
            return D;
          }(s);
        var B = yr(s), g = [];
        for (var U in s)
          (U != "constructor" || !B && uc.call(s, U)) && g.push(U);
        return g;
      }, et = function(s) {
        return AA(s) ? fa(s, !0) : Bc(s);
      }, fc = function(s, B, g, U, I, D, J) {
        var Z, nA = Ln(s, g), rA = Ln(B, g), dA = J.get(rA);
        if (dA)
          ke(s, g, dA);
        else {
          var hA = D ? D(nA, rA, g + "", s, B, J) : void 0, vA = hA === void 0;
          if (vA) {
            var TA = z(rA), OA = !TA && $(rA), te = !TA && !OA && xt(rA);
            hA = rA, TA || OA || te ? z(nA) ? hA = nA : E(Z = nA) && AA(Z) ? hA = Xe(nA) : OA ? (vA = !1, hA = WA(rA, !0)) : te ? (vA = !1, hA = je(rA, !0)) : hA = [] : re(rA) || W(rA) ? (hA = nA, W(nA) ? hA = function(xA) {
              return At(xA, et(xA));
            }(nA) : EA(nA) && !FA(nA) || (hA = C(rA))) : vA = !1;
          }
          vA && (J.set(rA, hA), I(hA, rA, U, D, J), J.delete(rA)), ke(s, g, hA);
        }
      }, lc = function s(B, g, U, I, D) {
        B !== g && ze(g, function(J, Z) {
          if (D || (D = new ae()), EA(J))
            fc(B, g, Z, U, s, I, D);
          else {
            var nA = I ? I(Ln(B, Z), J, Z + "", B, g, D) : void 0;
            nA === void 0 && (nA = J), ke(B, Z, nA);
          }
        }, et);
      }, la = function(s) {
        return s;
      }, gc = function(s, B, g) {
        switch (g.length) {
          case 0:
            return s.call(B);
          case 1:
            return s.call(B, g[0]);
          case 2:
            return s.call(B, g[0], g[1]);
          case 3:
            return s.call(B, g[0], g[1], g[2]);
        }
        return s.apply(B, g);
      };
      var ga = Math.max;
      const wc = be ? function(s, B) {
        return be(s, "toString", { configurable: !0, enumerable: !1, value: (g = B, function() {
          return g;
        }), writable: !0 });
        var g;
      } : la;
      var hc = Date.now;
      const Qc = (wa = wc, Dn = 0, Tn = 0, function() {
        var s = hc(), B = 16 - (s - Tn);
        if (Tn = s, B > 0) {
          if (++Dn >= 800)
            return arguments[0];
        } else
          Dn = 0;
        return wa.apply(void 0, arguments);
      });
      var wa, Dn, Tn;
      const dc = function(s, B) {
        return Qc(function(g, U, I) {
          return U = ga(U === void 0 ? g.length - 1 : U, 0), function() {
            for (var D = arguments, J = -1, Z = ga(D.length - U, 0), nA = Array(Z); ++J < Z; )
              nA[J] = D[U + J];
            J = -1;
            for (var rA = Array(U + 1); ++J < U; )
              rA[J] = D[J];
            return rA[U] = I(nA), gc(g, this, rA);
          };
        }(s, B, la), s + "");
      }, pc = (_n = function(s, B, g, U) {
        lc(s, B, g, U);
      }, dc(function(s, B) {
        var g = -1, U = B.length, I = U > 1 ? B[U - 1] : void 0, D = U > 2 ? B[2] : void 0;
        for (I = _n.length > 3 && typeof I == "function" ? (U--, I) : void 0, D && function(Z, nA, rA) {
          if (!EA(rA))
            return !1;
          var dA = typeof nA;
          return !!(dA == "number" ? AA(rA) && On(nA, rA.length) : dA == "string" && nA in rA) && O(rA[nA], Z);
        }(B[0], B[1], D) && (I = U < 3 ? void 0 : I, U = 1), s = Object(s); ++g < U; ) {
          var J = B[g];
          J && _n(s, J, g, I);
        }
        return s;
      }));
      var _n;
      c(1239), c(7472), c(7680), c(3085);
      var Rn = [], rt = "dva_react_hook_store_";
      function nr() {
        for (var s, B = 0; B < Rn.length; B += 1) {
          var g = F().useContext(Rn[B].context);
          if (g) {
            s = g;
            break;
          }
        }
        return s;
      }
      const Mn = Rn;
      function Nn(s) {
        return function(B) {
          if (Array.isArray(B))
            return f(B);
        }(s) || function(B) {
          if (typeof Symbol < "u" && B[Symbol.iterator] != null || B["@@iterator"] != null)
            return Array.from(B);
        }(s) || l(s) || function() {
          throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }();
      }
      c(427), c(7209), c(9236), c(2235), c(3777), c(8081), c(9745), c(27), c(5942), c(5506), c(773), c(3623);
      const Cc = fr(Object.keys, Object);
      var vc = Object.prototype.hasOwnProperty;
      const Gn = function(s) {
        return AA(s) ? fa(s) : function(B) {
          if (!yr(B))
            return Cc(B);
          var g = [];
          for (var U in Object(B))
            vc.call(B, U) && U != "constructor" && g.push(U);
          return g;
        }(s);
      }, ha = function() {
        return [];
      };
      var Uc = Object.prototype.propertyIsEnumerable, Qa = Object.getOwnPropertySymbols;
      const Pn = Qa ? function(s) {
        return s == null ? [] : (s = Object(s), function(B, g) {
          for (var U = -1, I = B == null ? 0 : B.length, D = 0, J = []; ++U < I; ) {
            var Z = B[U];
            g(Z, U, B) && (J[D++] = Z);
          }
          return J;
        }(Qa(s), function(B) {
          return Uc.call(s, B);
        }));
      } : ha, da = function(s, B) {
        for (var g = -1, U = B.length, I = s.length; ++g < U; )
          s[I + g] = B[g];
        return s;
      }, pa = Object.getOwnPropertySymbols ? function(s) {
        for (var B = []; s; )
          da(B, Pn(s)), s = Je(s);
        return B;
      } : ha, Ca = function(s, B, g) {
        var U = B(s);
        return z(s) ? U : da(U, g(s));
      }, Vn = function(s) {
        return Ca(s, Gn, Pn);
      }, Fc = function(s) {
        return Ca(s, et, pa);
      }, kn = KA(k, "DataView"), jn = KA(k, "Promise"), Xn = KA(k, "Set"), Jn = KA(k, "WeakMap");
      var va = "[object Map]", Ua = "[object Promise]", Fa = "[object Set]", ya = "[object WeakMap]", Ea = "[object DataView]", yc = uA(kn), Ec = uA(JA), mc = uA(jn), bc = uA(Xn), Hc = uA(Jn), Er = CA;
      (kn && Er(new kn(new ArrayBuffer(1))) != Ea || JA && Er(new JA()) != va || jn && Er(jn.resolve()) != Ua || Xn && Er(new Xn()) != Fa || Jn && Er(new Jn()) != ya) && (Er = function(s) {
        var B = CA(s), g = B == "[object Object]" ? s.constructor : void 0, U = g ? uA(g) : "";
        if (U)
          switch (U) {
            case yc:
              return Ea;
            case Ec:
              return va;
            case mc:
              return Ua;
            case bc:
              return Fa;
            case Hc:
              return ya;
          }
        return B;
      });
      const tt = Er;
      var Ic = Object.prototype.hasOwnProperty, xc = /\w*$/, ma = S ? S.prototype : void 0, ba = ma ? ma.valueOf : void 0;
      const Sc = function(s, B, g) {
        var U, I, D, J = s.constructor;
        switch (B) {
          case "[object ArrayBuffer]":
            return Qe(s);
          case "[object Boolean]":
          case "[object Date]":
            return new J(+s);
          case "[object DataView]":
            return function(Z, nA) {
              var rA = nA ? Qe(Z.buffer) : Z.buffer;
              return new Z.constructor(rA, Z.byteOffset, Z.byteLength);
            }(s, g);
          case "[object Float32Array]":
          case "[object Float64Array]":
          case "[object Int8Array]":
          case "[object Int16Array]":
          case "[object Int32Array]":
          case "[object Uint8Array]":
          case "[object Uint8ClampedArray]":
          case "[object Uint16Array]":
          case "[object Uint32Array]":
            return je(s, g);
          case "[object Map]":
          case "[object Set]":
            return new J();
          case "[object Number]":
          case "[object String]":
            return new J(s);
          case "[object RegExp]":
            return (D = new (I = s).constructor(I.source, xc.exec(I))).lastIndex = I.lastIndex, D;
          case "[object Symbol]":
            return U = s, ba ? Object(ba.call(U)) : {};
        }
      };
      var Ha = Ce && Ce.isMap;
      const Lc = Ha ? $A(Ha) : function(s) {
        return E(s) && tt(s) == "[object Map]";
      };
      var Ia = Ce && Ce.isSet;
      const Kc = Ia ? $A(Ia) : function(s) {
        return E(s) && tt(s) == "[object Set]";
      };
      var xa = "[object Arguments]", Sa = "[object Function]", La = "[object Object]", zA = {};
      zA[xa] = zA["[object Array]"] = zA["[object ArrayBuffer]"] = zA["[object DataView]"] = zA["[object Boolean]"] = zA["[object Date]"] = zA["[object Float32Array]"] = zA["[object Float64Array]"] = zA["[object Int8Array]"] = zA["[object Int16Array]"] = zA["[object Int32Array]"] = zA["[object Map]"] = zA["[object Number]"] = zA[La] = zA["[object RegExp]"] = zA["[object Set]"] = zA["[object String]"] = zA["[object Symbol]"] = zA["[object Uint8Array]"] = zA["[object Uint8ClampedArray]"] = zA["[object Uint16Array]"] = zA["[object Uint32Array]"] = !0, zA["[object Error]"] = zA[Sa] = zA["[object WeakMap]"] = !1;
      const Oc = function s(B, g, U, I, D, J) {
        var Z, nA = 1 & g, rA = 2 & g, dA = 4 & g;
        if (U && (Z = D ? U(B, I, D, J) : U(B)), Z !== void 0)
          return Z;
        if (!EA(B))
          return B;
        var hA = z(B);
        if (hA) {
          if (Z = function(xA) {
            var fA = xA.length, SA = new xA.constructor(fA);
            return fA && typeof xA[0] == "string" && Ic.call(xA, "index") && (SA.index = xA.index, SA.input = xA.input), SA;
          }(B), !nA)
            return Xe(B, Z);
        } else {
          var vA = tt(B), TA = vA == Sa || vA == "[object GeneratorFunction]";
          if ($(B))
            return WA(B, nA);
          if (vA == La || vA == xa || TA && !D) {
            if (Z = rA || TA ? {} : C(B), !nA)
              return rA ? function(xA, fA) {
                return At(xA, pa(xA), fA);
              }(B, function(xA, fA) {
                return xA && At(fA, et(fA), xA);
              }(Z, B)) : function(xA, fA) {
                return At(xA, Pn(xA), fA);
              }(B, function(xA, fA) {
                return xA && At(fA, Gn(fA), xA);
              }(Z, B));
          } else {
            if (!zA[vA])
              return D ? B : {};
            Z = Sc(B, vA, nA);
          }
        }
        J || (J = new ae());
        var OA = J.get(B);
        if (OA)
          return OA;
        J.set(B, Z), Kc(B) ? B.forEach(function(xA) {
          Z.add(s(xA, g, U, xA, B, J));
        }) : Lc(B) && B.forEach(function(xA, fA) {
          Z.set(fA, s(xA, g, U, fA, B, J));
        });
        var te = hA ? void 0 : (dA ? rA ? Fc : Vn : rA ? et : Gn)(B);
        return function(xA, fA) {
          for (var SA = -1, Se = xA == null ? 0 : xA.length; ++SA < Se && fA(xA[SA], SA, xA) !== !1; )
            ;
        }(te || B, function(xA, fA) {
          te && (xA = B[fA = xA]), Kn(Z, fA, s(xA, g, U, fA, B, J));
        }), Z;
      }, Dc = function(s, B) {
        return Oc(s, 5, B = typeof B == "function" ? B : void 0);
      }, Tc = function(s) {
        return E(s) && s.nodeType === 1 && !re(s);
      };
      var Ka = Ce && Ce.isDate;
      const _c = Ka ? $A(Ka) : function(s) {
        return E(s) && CA(s) == "[object Date]";
      };
      function Rc(s) {
        return s.constructor.from(s);
      }
      function Mc(s) {
        return s instanceof Blob;
      }
      function Nc(s) {
        return s instanceof Worker || s instanceof Promise || s instanceof RegExp || s instanceof Node || s instanceof Event || a(s) === "symbol" || s instanceof WeakMap || s instanceof WeakSet;
      }
      function lr(s) {
        var B = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
        return Dc(s, function(g) {
          return FA(g) ? B ? null : g : xt(g) ? Rc(g) : Tc(g) ? B ? null : g : _c(g) ? g.getTime() : Mc(g) ? g : Nc(g) ? B ? null : g : void 0;
        });
      }
      const Wn = function(s) {
        return typeof s == "symbol" || E(s) && CA(s) == "[object Symbol]";
      };
      var Gc = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Pc = /^\w*$/;
      function Yn(s, B) {
        if (typeof s != "function" || B != null && typeof B != "function")
          throw new TypeError("Expected a function");
        var g = function() {
          var U = arguments, I = B ? B.apply(this, U) : U[0], D = g.cache;
          if (D.has(I))
            return D.get(I);
          var J = s.apply(this, U);
          return g.cache = D.set(I, J) || D, J;
        };
        return g.cache = new (Yn.Cache || pe)(), g;
      }
      Yn.Cache = pe;
      var Vc = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, kc = /\\(\\)?/g;
      const jc = (Zn = Yn(function(s) {
        var B = [];
        return s.charCodeAt(0) === 46 && B.push(""), s.replace(Vc, function(g, U, I, D) {
          B.push(I ? D.replace(kc, "$1") : U || g);
        }), B;
      }, function(s) {
        return zn.size === 500 && zn.clear(), s;
      }), zn = Zn.cache, Zn);
      var Zn, zn, Oa = S ? S.prototype : void 0, Da = Oa ? Oa.toString : void 0;
      const Xc = function s(B) {
        if (typeof B == "string")
          return B;
        if (z(B))
          return function(U, I) {
            for (var D = -1, J = U == null ? 0 : U.length, Z = Array(J); ++D < J; )
              Z[D] = I(U[D], D, U);
            return Z;
          }(B, s) + "";
        if (Wn(B))
          return Da ? Da.call(B) : "";
        var g = B + "";
        return g == "0" && 1 / B == -1 / 0 ? "-0" : g;
      }, Ta = function(s, B) {
        return z(s) ? s : function(g, U) {
          if (z(g))
            return !1;
          var I = typeof g;
          return !(I != "number" && I != "symbol" && I != "boolean" && g != null && !Wn(g)) || Pc.test(g) || !Gc.test(g) || U != null && g in Object(U);
        }(s, B) ? [s] : jc(function(g) {
          return g == null ? "" : Xc(g);
        }(s));
      }, _a = function(s) {
        if (typeof s == "string" || Wn(s))
          return s;
        var B = s + "";
        return B == "0" && 1 / s == -1 / 0 ? "-0" : B;
      }, nt = function(s, B, g) {
        var U = s == null ? void 0 : function(I, D) {
          for (var J = 0, Z = (D = Ta(D, I)).length; I != null && J < Z; )
            I = I[_a(D[J++])];
          return J && J == Z ? I : void 0;
        }(s, B);
        return U === void 0 ? g : U;
      };
      function St(s) {
        var B = -1, g = s == null ? 0 : s.length;
        for (this.__data__ = new pe(); ++B < g; )
          this.add(s[B]);
      }
      St.prototype.add = St.prototype.push = function(s) {
        return this.__data__.set(s, "__lodash_hash_undefined__"), this;
      }, St.prototype.has = function(s) {
        return this.__data__.has(s);
      };
      const Jc = St, Wc = function(s, B) {
        for (var g = -1, U = s == null ? 0 : s.length; ++g < U; )
          if (B(s[g], g, s))
            return !0;
        return !1;
      }, Yc = function(s, B) {
        return s.has(B);
      }, Ra = function(s, B, g, U, I, D) {
        var J = 1 & g, Z = s.length, nA = B.length;
        if (Z != nA && !(J && nA > Z))
          return !1;
        var rA = D.get(s), dA = D.get(B);
        if (rA && dA)
          return rA == B && dA == s;
        var hA = -1, vA = !0, TA = 2 & g ? new Jc() : void 0;
        for (D.set(s, B), D.set(B, s); ++hA < Z; ) {
          var OA = s[hA], te = B[hA];
          if (U)
            var xA = J ? U(te, OA, hA, B, s, D) : U(OA, te, hA, s, B, D);
          if (xA !== void 0) {
            if (xA)
              continue;
            vA = !1;
            break;
          }
          if (TA) {
            if (!Wc(B, function(fA, SA) {
              if (!Yc(TA, SA) && (OA === fA || I(OA, fA, g, U, D)))
                return TA.push(SA);
            })) {
              vA = !1;
              break;
            }
          } else if (OA !== te && !I(OA, te, g, U, D)) {
            vA = !1;
            break;
          }
        }
        return D.delete(s), D.delete(B), vA;
      }, Zc = function(s) {
        var B = -1, g = Array(s.size);
        return s.forEach(function(U, I) {
          g[++B] = [I, U];
        }), g;
      }, zc = function(s) {
        var B = -1, g = Array(s.size);
        return s.forEach(function(U) {
          g[++B] = U;
        }), g;
      };
      var Ma = S ? S.prototype : void 0, qn = Ma ? Ma.valueOf : void 0, qc = Object.prototype.hasOwnProperty, Na = "[object Arguments]", Ga = "[object Array]", Lt = "[object Object]", Pa = Object.prototype.hasOwnProperty;
      const $c = function(s, B, g, U, I, D) {
        var J = z(s), Z = z(B), nA = J ? Ga : tt(s), rA = Z ? Ga : tt(B), dA = (nA = nA == Na ? Lt : nA) == Lt, hA = (rA = rA == Na ? Lt : rA) == Lt, vA = nA == rA;
        if (vA && $(s)) {
          if (!$(B))
            return !1;
          J = !0, dA = !1;
        }
        if (vA && !dA)
          return D || (D = new ae()), J || xt(s) ? Ra(s, B, g, U, I, D) : function(fA, SA, Se, ve, De, ye, NA) {
            switch (Se) {
              case "[object DataView]":
                if (fA.byteLength != SA.byteLength || fA.byteOffset != SA.byteOffset)
                  return !1;
                fA = fA.buffer, SA = SA.buffer;
              case "[object ArrayBuffer]":
                return !(fA.byteLength != SA.byteLength || !ye(new ce(fA), new ce(SA)));
              case "[object Boolean]":
              case "[object Date]":
              case "[object Number]":
                return O(+fA, +SA);
              case "[object Error]":
                return fA.name == SA.name && fA.message == SA.message;
              case "[object RegExp]":
              case "[object String]":
                return fA == SA + "";
              case "[object Map]":
                var RA = Zc;
              case "[object Set]":
                var PA = 1 & ve;
                if (RA || (RA = zc), fA.size != SA.size && !PA)
                  return !1;
                var ie = NA.get(fA);
                if (ie)
                  return ie == SA;
                ve |= 2, NA.set(fA, SA);
                var XA = Ra(RA(fA), RA(SA), ve, De, ye, NA);
                return NA.delete(fA), XA;
              case "[object Symbol]":
                if (qn)
                  return qn.call(fA) == qn.call(SA);
            }
            return !1;
          }(s, B, nA, g, U, I, D);
        if (!(1 & g)) {
          var TA = dA && Pa.call(s, "__wrapped__"), OA = hA && Pa.call(B, "__wrapped__");
          if (TA || OA) {
            var te = TA ? s.value() : s, xA = OA ? B.value() : B;
            return D || (D = new ae()), I(te, xA, g, U, D);
          }
        }
        return !!vA && (D || (D = new ae()), function(fA, SA, Se, ve, De, ye) {
          var NA = 1 & Se, RA = Vn(fA), PA = RA.length;
          if (PA != Vn(SA).length && !NA)
            return !1;
          for (var ie = PA; ie--; ) {
            var XA = RA[ie];
            if (!(NA ? XA in SA : qc.call(SA, XA)))
              return !1;
          }
          var Ke = ye.get(fA), Te = ye.get(SA);
          if (Ke && Te)
            return Ke == SA && Te == fA;
          var gr = !0;
          ye.set(fA, SA), ye.set(SA, fA);
          for (var mr = NA; ++ie < PA; ) {
            var Mr = fA[XA = RA[ie]], br = SA[XA];
            if (ve)
              var Hr = NA ? ve(br, Mr, XA, SA, fA, ye) : ve(Mr, br, XA, fA, SA, ye);
            if (!(Hr === void 0 ? Mr === br || De(Mr, br, Se, ve, ye) : Hr)) {
              gr = !1;
              break;
            }
            mr || (mr = XA == "constructor");
          }
          if (gr && !mr) {
            var Nr = fA.constructor, Gr = SA.constructor;
            Nr == Gr || !("constructor" in fA) || !("constructor" in SA) || typeof Nr == "function" && Nr instanceof Nr && typeof Gr == "function" && Gr instanceof Gr || (gr = !1);
          }
          return ye.delete(fA), ye.delete(SA), gr;
        }(s, B, g, U, I, D));
      }, Au = function s(B, g, U, I, D) {
        return B === g || (B == null || g == null || !E(B) && !E(g) ? B != B && g != g : $c(B, g, U, I, s, D));
      }, ot = function(s, B) {
        return Au(s, B);
      }, eu = function(s, B, g) {
        return s == null ? s : function(U, I, D, J) {
          if (!EA(U))
            return U;
          for (var Z = -1, nA = (I = Ta(I, U)).length, rA = nA - 1, dA = U; dA != null && ++Z < nA; ) {
            var hA = _a(I[Z]), vA = D;
            if (hA === "__proto__" || hA === "constructor" || hA === "prototype")
              return U;
            if (Z != rA) {
              var TA = dA[hA];
              (vA = J ? J(TA, hA, dA) : void 0) === void 0 && (vA = EA(TA) ? TA : On(I[Z + 1]) ? [] : {});
            }
            Kn(dA, hA, vA), dA = dA[hA];
          }
          return U;
        }(s, B, g);
      };
      function Va(s, B) {
        var g = Object.keys(s);
        if (Object.getOwnPropertySymbols) {
          var U = Object.getOwnPropertySymbols(s);
          B && (U = U.filter(function(I) {
            return Object.getOwnPropertyDescriptor(s, I).enumerable;
          })), g.push.apply(g, U);
        }
        return g;
      }
      function ka(s) {
        for (var B = 1; B < arguments.length; B++) {
          var g = arguments[B] != null ? arguments[B] : {};
          B % 2 ? Va(Object(g), !0).forEach(function(U) {
            u(s, U, g[U]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(g)) : Va(Object(g)).forEach(function(U) {
            Object.defineProperty(s, U, Object.getOwnPropertyDescriptor(g, U));
          });
        }
        return s;
      }
      var or = "/", $n = /* @__PURE__ */ new Map();
      function ar(s) {
        if ($n.has(s))
          return $n.get(s);
        s.endsWith(or) && (s = s.slice(0, -1));
        var B = s.split(or);
        return $n.set(s, B), B;
      }
      function Ao(s, B, g) {
        return eo.apply(this, arguments);
      }
      function eo() {
        return eo = i(d().mark(function s(B, g, U) {
          var I, D;
          return d().wrap(function(J) {
            for (; ; )
              switch (J.prev = J.next) {
                case 0:
                  return J.next = 2, new Promise(function(Z) {
                    return setTimeout(Z, 10);
                  });
                case 2:
                  if (!B.offline || B.offlineExcludes.includes(g[0])) {
                    J.next = 8;
                    break;
                  }
                  return I = U[g[0]], (D = tu(B.offlineExcludes, g[0])).length > 0 && (I = lr(U[g[0]], !0), D.forEach(function(Z) {
                    I = nu(I, Z);
                  })), J.next = 8, B.offlineInstance.setItem(g[0], I);
                case 8:
                case "end":
                  return J.stop();
              }
          }, s);
        })), eo.apply(this, arguments);
      }
      function ru(s, B) {
        typeof s == "string" && (s = ar(s));
        for (var g = {}, U = g, I = 0; I < s.length; I++) {
          var D = s[I];
          U[D] = I === s.length - 1 ? B : {}, U = U[D];
        }
        return g;
      }
      function tu(s, B) {
        return s && Array.isArray(s) ? s.filter(function(g) {
          return ar(g)[0] === B;
        }) : [];
      }
      function nu(s, B) {
        typeof B == "string" && (B = ar(B)), B = B.slice(1);
        for (var g = s, U = 0; U < B.length - 1; U++) {
          var I = B[U];
          if (!re(g[I]))
            return s;
          g = g[I];
        }
        return delete g[B[B.length - 1]], s;
      }
      function ou(s, B, g) {
        for (var U = Array.isArray(B) ? B : ar(B), I = U.length, D = s, J = 0; J < I - 1; J++) {
          var Z = U[J];
          re(D[Z]) || (D[Z] = {}), D = D[Z];
        }
        return D[U[I - 1]] = g, s;
      }
      function ro(s, B) {
        if (s.length > B.length)
          return !1;
        for (var g = 0; g < s.length; g++)
          if (s[g] !== B[g])
            return !1;
        return !0;
      }
      function au(s) {
        return to.apply(this, arguments);
      }
      function to() {
        return to = i(d().mark(function s(B) {
          var g, U, I, D, J, Z, nA, rA, dA, hA, vA, TA, OA, te, xA, fA, SA, Se, ve, De, ye;
          return d().wrap(function(NA) {
            for (; ; )
              switch (NA.prev = NA.next) {
                case 0:
                  if (g = this) {
                    NA.next = 3;
                    break;
                  }
                  throw new Error("odd!! there is no store in reducer, please issue it.");
                case 3:
                  if (B.inner !== g.inner) {
                    NA.next = 42;
                    break;
                  }
                  U = g.debounceTimers, I = g.currentStateMap, D = g.previousStateMap, J = g.onChangeOtherProps, Z = Object.keys(g.changeSubscribes), nA = {}, Z.forEach(function(RA) {
                    var PA = g.changeSubscribes[RA];
                    nA[RA] = PA;
                  }), rA = B.name, dA = ar(rA), hA = nt(g.runtime_state, dA), vA = U.has(rA), TA = !1, Z.length > 0 && !ot(hA, B.data) && (vA ? ((OA = D.get(rA)).subkeys = Z, OA.subcalls = nA) : (te = lr(hA), xA = {}, Object.keys(J).forEach(function(RA) {
                    var PA = {};
                    J[RA].forEach(function(ie) {
                      var XA = ar(ie), Ke = nt(g.runtime_state, XA);
                      eu(PA, XA, lr(Ke));
                    }), xA[RA] = PA;
                  }), D.set(rA, { prestorestate: xA, prevalue: te, subkeys: Z, subcalls: nA })), TA = !0), NA.t0 = B.type, NA.next = NA.t0 === "add" ? 20 : NA.t0 === "modify" ? 29 : 37;
                  break;
                case 20:
                  return fA = lr(B.data), D.has(rA) && I.set(rA, fA), SA = ru(dA, fA), g.runtime_state = ka(ka({}, g.runtime_state), SA), NA.next = 26, g.offlineInstance.keys();
                case 26:
                  return NA.sent.includes(dA[0]) || Ao(g, dA, g.runtime_state), NA.abrupt("break", 38);
                case 29:
                  if (!ot(hA, B.data)) {
                    NA.next = 31;
                    break;
                  }
                  return NA.abrupt("return");
                case 31:
                  return Se = B.referenced ? B.data : lr(B.data), D.has(rA) && I.set(rA, Se), ve = ou(g.runtime_state, dA, Se), B.cancelUpdate || (De = Object.values(g.REFRESH_CACHE), ye = "".concat(dA.join(or)).concat(or), De.forEach(function(RA) {
                    RA && RA._s.startsWith(ye) && RA.set(x());
                    for (var PA = Nn(dA); PA.length > 0; )
                      RA && PA.join(or) === RA._s && RA.set(x()), PA.pop();
                  })), Ao(g, dA, ve), NA.abrupt("break", 38);
                case 37:
                  throw new Error("Unhandled action type: ".concat(B.type));
                case 38:
                  if (TA) {
                    NA.next = 40;
                    break;
                  }
                  return NA.abrupt("return");
                case 40:
                  U.has(rA) && clearTimeout(U.get(rA)), U.set(rA, setTimeout(function() {
                    var RA = D.get(rA), PA = I.get(rA), ie = RA.subkeys, XA = RA.subcalls;
                    for (var Ke in ie.forEach(function(Hr) {
                      var Nr = XA[Hr], Gr = RA.prevalue, Eu = RA.prestorestate[Hr];
                      Nr({ actiontype: B.type, name: rA, currentvalue: PA, prevalue: Gr, otherprevalues: Eu, currentstore: g.runtime_state });
                    }), g.observerSubscribes) {
                      var Te = ar(Ke), gr = dA.length, mr = Te.length;
                      if (gr === mr && ot(dA, Te) && g.observerSubscribes[Ke](PA, RA, B.type), gr > mr && ro(Te, dA)) {
                        var Mr = nt(g.runtime_state, Te);
                        g.observerSubscribes[Ke](Mr, { path: dA, value: PA, prevalue: RA, actiontype: B.type });
                      }
                      if (gr < mr && ro(dA, Te) && !ot(RA.prevalue, PA)) {
                        var br = Te.filter(function(Hr) {
                          return !dA.includes(Hr);
                        });
                        g.observerSubscribes[Ke](nt(PA, br), nt(RA, br), B.type);
                      }
                    }
                    U.delete(rA), D.delete(rA), I.delete(rA);
                  }, 300));
                case 42:
                case "end":
                  return NA.stop();
              }
          }, s, this);
        })), to.apply(this, arguments);
      }
      function iu(s, B) {
        return no.apply(this, arguments);
      }
      function no() {
        return no = i(d().mark(function s(B, g) {
          var U;
          return d().wrap(function(I) {
            for (; ; )
              switch (I.prev = I.next) {
                case 0:
                  if (B.dispatch_queue[0].uid === g) {
                    I.next = 5;
                    break;
                  }
                  return I.next = 3, new Promise(function(D) {
                    return setTimeout(D, 0);
                  });
                case 3:
                  I.next = 0;
                  break;
                case 5:
                  if (!(U = B.dispatch_queue[0].action)) {
                    I.next = 10;
                    break;
                  }
                  return I.next = 9, B.REDUCER(U);
                case 9:
                  B.dispatch_queue.shift();
                case 10:
                case "end":
                  return I.stop();
              }
          }, s);
        })), no.apply(this, arguments);
      }
      function su(s) {
        return oo.apply(this, arguments);
      }
      function oo() {
        return oo = i(d().mark(function s(B) {
          var g, U;
          return d().wrap(function(I) {
            for (; ; )
              switch (I.prev = I.next) {
                case 0:
                  if (g = this, U = x(), g) {
                    I.next = 4;
                    break;
                  }
                  throw new Error("odd!! there is no store in dispatch of utils, please issue it.");
                case 4:
                  if (B) {
                    I.next = 6;
                    break;
                  }
                  throw new Error("Actions must be plain objects.");
                case 6:
                  if (B.type !== void 0) {
                    I.next = 8;
                    break;
                  }
                  throw new Error('Actions may not have an undefined "type" property.');
                case 8:
                  return g.dispatch_queue.push({ uid: U, action: B }), I.next = 11, iu(g, U);
                case 11:
                case "end":
                  return I.stop();
              }
          }, s, this);
        })), oo.apply(this, arguments);
      }
      function cu(s) {
        return ao.apply(this, arguments);
      }
      function ao() {
        return ao = i(d().mark(function s(B) {
          var g, U, I, D;
          return d().wrap(function(J) {
            for (; ; )
              switch (J.prev = J.next) {
                case 0:
                  if (g = this, !B || a(B) != "object" || Array.isArray(B)) {
                    J.next = 13;
                    break;
                  }
                  if (!((U = Object.keys(B)).length > 0)) {
                    J.next = 13;
                    break;
                  }
                  I = 0;
                case 5:
                  if (!(I < U.length)) {
                    J.next = 13;
                    break;
                  }
                  if (D = U[I], g.runtime_state.hasOwnProperty(D)) {
                    J.next = 10;
                    break;
                  }
                  return J.next = 10, g.dispatch({ type: "add", name: D, initdate: B[D], inner: g.inner });
                case 10:
                  I++, J.next = 5;
                  break;
                case 13:
                case "end":
                  return J.stop();
              }
          }, s, this);
        })), ao.apply(this, arguments);
      }
      function uu(s, B, g) {
        return io.apply(this, arguments);
      }
      function io() {
        return io = i(d().mark(function s(B, g, U) {
          return d().wrap(function(I) {
            for (; ; )
              switch (I.prev = I.next) {
                case 0:
                  if (typeof B == "function") {
                    I.next = 2;
                    break;
                  }
                  throw new Error("Expected the reducer to be a function.");
                case 2:
                  if (!U.REDUCER && (U.REDUCER = B.bind(U)), !U.dispatch && (U.dispatch = su.bind(U)), g === void 0) {
                    I.next = 7;
                    break;
                  }
                  return I.next = 7, cu.call(U, g);
                case 7:
                  return I.abrupt("return", [U.runtime_state, U.dispatch]);
                case 8:
                case "end":
                  return I.stop();
              }
          }, s);
        })), io.apply(this, arguments);
      }
      c(8629), c(286);
      var Bu = ["models", "renderBefore", "component"];
      function ja(s, B) {
        return so.apply(this, arguments);
      }
      function so() {
        return so = i(d().mark(function s(B, g) {
          var U;
          return d().wrap(function(I) {
            for (; ; )
              switch (I.prev = I.next) {
                case 0:
                  if (Object.prototype.toString.call(B) === "[object Object]") {
                    I.next = 2;
                    break;
                  }
                  throw new Error("your model must be an object");
                case 2:
                  if (B.hasOwnProperty("name")) {
                    I.next = 4;
                    break;
                  }
                  throw new Error("please name your model !!!!");
                case 4:
                  if (typeof B.name == "string") {
                    I.next = 6;
                    break;
                  }
                  throw new Error("please make sure your model name is a string");
                case 6:
                  if (B.name.length !== 0) {
                    I.next = 8;
                    break;
                  }
                  throw new Error("name can not be empty");
                case 8:
                  if (g) {
                    I.next = 10;
                    break;
                  }
                  throw new Error("odd!! there is no store, please issue it.");
                case 10:
                  if (g.MODELS[B.name] || (g.MODELS[B.name] = B), g.runtime_state.hasOwnProperty(B.name) && !g.noCached) {
                    I.next = 17;
                    break;
                  }
                  return U = {}, B.hasOwnProperty("init") && (U = B.init), typeof B.init == "function" && (U = B.init()), I.next = 17, g.dispatch({ type: "add", name: B.name, data: U, inner: g.inner });
                case 17:
                case "end":
                  return I.stop();
              }
          }, s);
        })), so.apply(this, arguments);
      }
      const fu = function(s) {
        var B = nr();
        if (!B)
          throw new Error("odd!! there is no store in dynamic, please issue it.");
        var g = h(F().useState({ loaded: !1 }), 2), U = g[0], I = g[1], D = s.models, J = s.renderBefore, Z = s.component, nA = Q(s, Bu), rA = F().lazy(Z);
        return F().useEffect(function() {
          J == null || J();
          var dA = typeof D == "function" ? [D()] : Array.isArray(D) ? D.map(function(hA) {
            return Promise.resolve(hA);
          }) : [];
          Promise.all(dA).then(function(hA) {
            hA.forEach(function(vA) {
              var TA = vA.default || vA;
              (Array.isArray(TA) ? TA : [TA]).forEach(function(OA) {
                return ja(OA, B);
              });
            }), I({ loaded: !0 });
          });
        }, []), U.loaded ? F().createElement(F().Suspense, { fallback: F().createElement("div", null, "Loading...") }, F().createElement(rA, nA)) : null;
      };
      var lu = ["isolated", "uniqueKey", "models", "offlineConfig", "noCached", "children"];
      function Xa(s, B) {
        var g = Object.keys(s);
        if (Object.getOwnPropertySymbols) {
          var U = Object.getOwnPropertySymbols(s);
          B && (U = U.filter(function(I) {
            return Object.getOwnPropertyDescriptor(s, I).enumerable;
          })), g.push.apply(g, U);
        }
        return g;
      }
      function gu(s) {
        for (var B = 1; B < arguments.length; B++) {
          var g = arguments[B] != null ? arguments[B] : {};
          B % 2 ? Xa(Object(g), !0).forEach(function(U) {
            u(s, U, g[U]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(g)) : Xa(Object(g)).forEach(function(U) {
            Object.defineProperty(s, U, Object.getOwnPropertyDescriptor(g, U));
          });
        }
        return s;
      }
      c(9399), c(5155);
      var wu = ["type"];
      function Ja(s, B) {
        var g = Object.keys(s);
        if (Object.getOwnPropertySymbols) {
          var U = Object.getOwnPropertySymbols(s);
          B && (U = U.filter(function(I) {
            return Object.getOwnPropertyDescriptor(s, I).enumerable;
          })), g.push.apply(g, U);
        }
        return g;
      }
      function _r(s) {
        for (var B = 1; B < arguments.length; B++) {
          var g = arguments[B] != null ? arguments[B] : {};
          B % 2 ? Ja(Object(g), !0).forEach(function(U) {
            u(s, U, g[U]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(g)) : Ja(Object(g)).forEach(function(U) {
            Object.defineProperty(s, U, Object.getOwnPropertyDescriptor(g, U));
          });
        }
        return s;
      }
      function Kt(s) {
        if (Object.prototype.toString.call(s) !== "[object Object]")
          throw new Error("action in useDispatch must be an Object");
        if (!s.hasOwnProperty("type"))
          throw new Error('action in useDispatch must have a property named "type"');
        if (typeof s.type != "string")
          throw new Error("your must be a string");
        if (s.type.indexOf(or) === -1)
          throw new Error("you must do some effects in your type");
        var B = s.store || nr();
        if (!B)
          throw new Error("odd!! there is no store in useDispatch, please issue it.");
        s.store = B;
        var g = s.type, U = Q(s, wu);
        if ((g = g.split(or))[0].length === 0)
          throw new Error("can not resolve the empty model name");
        var I = B.MODELS[g[0]];
        if (!I)
          throw new Error("can not find the Model named ".concat(g[0]));
        if (!I.hasOwnProperty("effects"))
          throw new Error("can not find the effects in the Model ".concat(g[0]));
        var D = I.effects;
        if (Object.prototype.toString.call(D) !== "[object Object]")
          throw new Error("effects must be an Object");
        var J = D[g[1]];
        if (typeof J != "function")
          throw new Error("the effect named ".concat(g[1], " must be a function"));
        var Z = I.callbacks;
        return function() {
          for (var nA, rA = lr(B.runtime_state[g[0]]), dA = arguments.length, hA = new Array(dA), vA = 0; vA < dA; vA++)
            hA[vA] = arguments[vA];
          return J.apply(void 0, hA.concat([_r(_r({}, U), {}, { state: rA, setState: (nA = i(d().mark(function TA(OA) {
            var te, xA, fA, SA, Se, ve = arguments;
            return d().wrap(function(De) {
              for (; ; )
                switch (De.prev = De.next) {
                  case 0:
                    return te = ve.length > 1 && ve[1] !== void 0 ? ve[1] : {}, xA = te.cancelUpdate, fA = te.callbacks, SA = te.referenced, De.next = 3, B.dispatch({ type: "modify", name: g[0], inner: B.inner, data: OA, cancelUpdate: xA, referenced: SA });
                  case 3:
                    fA && (Se = rA, za(Z, fA, { name: g[0], value: Se }, B));
                  case 4:
                  case "end":
                    return De.stop();
                }
            }, TA);
          })), function(TA) {
            return nA.apply(this, arguments);
          }), select: function(TA, OA) {
            return Rr(TA, B, OA);
          }, reference: function(TA) {
            var OA = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            return Rr(TA, B, _r(_r({}, OA), {}, { referenced: !0 }));
          }, getDispatch: function(TA) {
            return Kt(_r(_r({}, TA), {}, { store: B }));
          }, offlineInstance: B.offlineInstance })]));
        };
      }
      function Wa(s, B) {
        var g = Object.keys(s);
        if (Object.getOwnPropertySymbols) {
          var U = Object.getOwnPropertySymbols(s);
          B && (U = U.filter(function(I) {
            return Object.getOwnPropertyDescriptor(s, I).enumerable;
          })), g.push.apply(g, U);
        }
        return g;
      }
      function Ya(s) {
        for (var B = 1; B < arguments.length; B++) {
          var g = arguments[B] != null ? arguments[B] : {};
          B % 2 ? Wa(Object(g), !0).forEach(function(U) {
            u(s, U, g[U]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(g)) : Wa(Object(g)).forEach(function(U) {
            Object.defineProperty(s, U, Object.getOwnPropertyDescriptor(g, U));
          });
        }
        return s;
      }
      function Rr(s, B) {
        var g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { autoCreate: !1, defaultValue: void 0, referenced: !1 };
        Qu(B), du(s);
        var U = ar(s), I = Za(U, B, g);
        return [I, hu(U, B, I, g.referenced), function() {
          return Za(U, B, g);
        }];
      }
      function Za(s, B, g) {
        var U = function(I, D, J) {
          if (!I || !I.length)
            throw new Error("Property names array cannot be empty.");
          var Z = !1, nA = I.reduce(function(rA, dA, hA) {
            var vA, TA, OA = rA[dA];
            if (I.length > 1 && hA < I.length - 1 && !re(OA)) {
              if (!J.autoCreate)
                throw new Error("".concat(dA, " is not an object, so the property['").concat(I[hA + 1], "'] cannot be reached. Please check your code."));
              Z = !0, OA = rA[dA] = {};
            }
            return hA === I.length - 1 && (J.autoCreate && !OA && (OA = rA[dA] = J.defaultValue), J.resetField && (vA = OA, TA = J.resetValue, Object.prototype.toString.call(vA) !== Object.prototype.toString.call(TA)) && (Z = !0, OA = rA[dA] = J.resetValue), Z && Ao(D, I, D.runtime_state)), OA;
          }, D.runtime_state);
          return J.referenced ? nA : lr(nA);
        }(s, B, g);
        return U;
      }
      function hu(s, B, g, U) {
        return function() {
          var I = i(d().mark(function D(J) {
            var Z, nA, rA, dA, hA = arguments;
            return d().wrap(function(vA) {
              for (; ; )
                switch (vA.prev = vA.next) {
                  case 0:
                    return Z = hA.length > 1 && hA[1] !== void 0 ? hA[1] : {}, nA = Z.cancelUpdate, rA = Z.callbacks, vA.next = 3, B.dispatch({ type: "modify", name: s.join(or), data: J, inner: B.inner, cancelUpdate: nA, referenced: U });
                  case 3:
                    return dA = vA.sent, rA && B.MODELS[s[0]] && za(B.MODELS[s[0]].callbacks, rA, { name: s.join(or), value: { pre: g, current: J } }, B), vA.abrupt("return", dA);
                  case 6:
                  case "end":
                    return vA.stop();
                }
            }, D);
          }));
          return function(D) {
            return I.apply(this, arguments);
          };
        }();
      }
      function za(s, B, g, U) {
        (function(D) {
          Object.prototype.toString.call(D) !== "[object Object]" && console.error("the callbacks of model must be an Object type");
        })(s);
        var I = function(D) {
          return Rr(D, U);
        };
        typeof B == "string" ? qa(s, B, g, I, U) : Array.isArray(B) && B.forEach(function(D) {
          return qa(s, D, g, I, U);
        });
      }
      function qa(s, B, g, U, I) {
        typeof s[B] == "function" ? s[B]({ info: g, select: U, getDispatch: function(D) {
          return Kt(Ya(Ya({}, D), {}, { store: I }));
        } }) : console.error("Callback ".concat(B, " is not a function."));
      }
      function Qu(s) {
        if (!s)
          throw new Error("odd!! there is no store in utils, please issue it.");
      }
      function du(s) {
        if (typeof s != "string")
          throw new Error("name must be a string");
      }
      function co() {
        return co = Object.assign ? Object.assign.bind() : function(s) {
          for (var B = 1; B < arguments.length; B++) {
            var g = arguments[B];
            for (var U in g)
              Object.prototype.hasOwnProperty.call(g, U) && (s[U] = g[U]);
          }
          return s;
        }, co.apply(this, arguments);
      }
      function $a(s, B, g, U) {
        var I = g || nr();
        if (!I)
          throw new Error("odd!! there is no store in useModel, please issue it.");
        if (typeof s != "string")
          throw new Error("useModel's argument must be a string");
        var D = F().useRef(), J = F().useState(x())[1];
        F().useEffect(function() {
          var hA = x();
          return !B && (I.REFRESH_CACHE[hA] = { _s: s, set: J }), function() {
            !B && delete I.REFRESH_CACHE[hA];
          };
        }, [s, I, B]);
        var Z = h(Rr(s, I, U), 3), nA = Z[0], rA = Z[1], dA = Z[2];
        return ot(D.current, nA) || (D.current = nA), [D.current, rA, dA];
      }
      const pu = function(s, B) {
        return function(g) {
          return function(U) {
            var I, D = h(typeof s == "string" && s.length !== 0 ? $a(s) : [{ value: null }, null], 2), J = D[0].value, Z = D[1], nA = typeof B.name == "string" && B.name.length !== 0 ? Kt(B.action) : null;
            return F().createElement(g, co({}, (u(I = {}, Z ? "".concat(s, "State") : "UselessState".concat(x()), J), u(I, Z ? "set".concat(s) : "UselessSet".concat(x()), Z), u(I, nA ? "".concat(B.name) : "UselessDispatch".concat(x()), nA), I), U));
          };
        };
      };
      function Cu(s, B, g) {
        var U = nr();
        if (!U)
          throw new Error("odd!! there is no store in useAdd, please issue it.");
        if (typeof s != "string")
          throw new Error("name must be a string");
        if (s.length === 0)
          throw new Error("name can not be empty");
        var I = function() {
          var J = nr();
          if (!J)
            throw new Error("odd!! there is no store in useDispatcher, please issue it.");
          if (typeof J.dispatch != "function")
            throw new Error("make sure you are in a Provider");
          return J.dispatch;
        }();
        if (U.runtime_state === void 0 || I === void 0)
          throw new Error("useAdd must be used within a Provider");
        U.runtime_state.hasOwnProperty(s) && console.warn("you have already added the state name -- ".concat(s, "  before !"));
        var D = B;
        typeof B == "function" && (D = B()), F().useEffect(function() {
          I({ type: "add", name: s, initdate: D, inner: U.inner });
        }, g ? [] : void 0);
      }
      function vu(s) {
        var B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, U = g.store, I = g.others, D = I === void 0 ? [] : I;
        if (!(U = U || nr()))
          throw new Error("odd!! there is no store in useModel, please issue it.");
        if (typeof s != "function")
          throw new Error("useChange's argument must be a function");
        F().useEffect(function() {
          var J = x();
          return U.changeSubscribes[J] = s, D.length > 0 && (U.onChangeOtherProps[J] = D), function() {
            delete U.changeSubscribes[J], D.length > 0 && delete U.onChangeOtherProps[J];
          };
        }, [U].concat(Nn(B)));
      }
      function Uu(s, B) {
        var g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], U = arguments.length > 3 ? arguments[3] : void 0, I = U || nr();
        if (!I)
          throw new Error("odd!! there is no store in useModel, please issue it.");
        if (typeof B != "function")
          throw new Error("useChange's argument must be a function");
        F().useEffect(function() {
          return I.observerSubscribes[s] = B, function() {
            delete I.observerSubscribes[s];
          };
        }, [s, I].concat(Nn(g)));
      }
      function Fu(s, B) {
        var g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, U = g.store || nr();
        if (!U)
          throw new Error("odd!! there is no store in useReference, please issue it.");
        if (typeof s != "string")
          throw new Error("useReference's name must be string");
        var I = F().useState(x())[1];
        F().useEffect(function() {
          var rA = x();
          return !B && (U.REFRESH_CACHE[rA] = { _s: s, set: I }), function() {
            !B && delete U.REFRESH_CACHE[rA];
          };
        }, [s, U, B]), g.referenced = !0;
        var D = Rr(s, U, g), J = h(D, 2), Z = J[0], nA = J[1];
        return [Z, nA];
      }
      const yu = function(s) {
        var B = s.isolated, g = B !== void 0 && B, U = s.uniqueKey, I = s.models, D = s.offlineConfig, J = D === void 0 ? {} : D, Z = s.noCached, nA = s.children, rA = Q(s, lu), dA = h(F().useState({ com: null, store: null }), 2), hA = dA[0], vA = dA[1];
        return F().useEffect(function() {
          var TA = x(), OA = U && U.toString() || "default", te = "".concat(OA, "_").concat(TA), xA = h(function(NA, RA, PA) {
            var ie, XA, Ke = F().createContext(), Te = (ie = NA, (XA = window["".concat(rt).concat(ie)]) && delete window["".concat(rt).concat(ie)], XA);
            return Te || (Te = { offline: !1, offlineInstance: void 0, offlineExcludes: [], dispatch: void 0, inner: Symbol(), MODELS: {}, REFRESH_CACHE: {}, REDUCER: void 0, isDispatching: { dispatching: !1, name: null }, runtime_state: {}, dispatch_queue: [], changeSubscribes: {}, observerSubscribes: {}, debounceTimers: /* @__PURE__ */ new Map(), previousStateMap: /* @__PURE__ */ new Map(), currentStateMap: /* @__PURE__ */ new Map(), onChangeOtherProps: {} }), PA || Mn.push({ uid: RA, context: Ke }), [Te, Ke];
          }(OA, te, g), 2), fA = xA[0], SA = xA[1];
          fA.offline = J.offline === !0, fA.offlineExcludes = J.excludes || [];
          var Se = J.customizer;
          fA.offlineInstance = H.createInstance({ name: OA });
          var ve = function() {
            var NA = i(d().mark(function RA() {
              var PA, ie;
              return d().wrap(function(XA) {
                for (; ; )
                  switch (XA.prev = XA.next) {
                    case 0:
                      return XA.next = 2, uu(au, gu({}, rA), fA);
                    case 2:
                      if (!Array.isArray(I)) {
                        XA.next = 11;
                        break;
                      }
                      PA = 0;
                    case 4:
                      if (!(PA < I.length)) {
                        XA.next = 11;
                        break;
                      }
                      return ie = I[PA], XA.next = 8, ja(ie, fA);
                    case 8:
                      PA++, XA.next = 4;
                      break;
                    case 11:
                    case "end":
                      return XA.stop();
                  }
              }, RA);
            }));
            return function() {
              return NA.apply(this, arguments);
            };
          }(), De = function() {
            var NA = i(d().mark(function RA() {
              return d().wrap(function(PA) {
                for (; ; )
                  switch (PA.prev = PA.next) {
                    case 0:
                      return PA.next = 2, ve();
                    case 2:
                      fA.offlineInstance.iterate(function(ie, XA) {
                        var Ke = pc(fA.runtime_state[XA] || {}, ie, Se);
                        fA.runtime_state[XA] = Ke;
                      }).then(function() {
                        window["".concat(rt).concat(OA)] = fA, vA({ com: SA.Provider, store: fA });
                      }).catch(function(ie) {
                        console.error("recover from offline database failed:".concat(ie));
                      });
                    case 3:
                    case "end":
                      return PA.stop();
                  }
              }, RA);
            }));
            return function() {
              return NA.apply(this, arguments);
            };
          }(), ye = function() {
            var NA = i(d().mark(function RA() {
              return d().wrap(function(PA) {
                for (; ; )
                  switch (PA.prev = PA.next) {
                    case 0:
                      return PA.next = 2, ve();
                    case 2:
                      window["".concat(rt).concat(OA)] = fA, vA({ com: SA.Provider, store: fA });
                    case 4:
                    case "end":
                      return PA.stop();
                  }
              }, RA);
            }));
            return function() {
              return NA.apply(this, arguments);
            };
          }();
          return J.autoRecover === !0 ? De() : ye(), function() {
            var NA = Mn.findIndex(function(RA) {
              return RA.uid === te;
            });
            NA !== -1 && Mn.splice(NA, 1), Z === !0 && delete window["".concat(rt).concat(OA)], H.dropInstance({ name: OA }), vA({ com: null, store: null });
          };
        }, [U]), hA.com && console.log("Provider for ".concat(U || "default", " is rendering")), !!hA.com && F().createElement(hA.com, { value: hA.store }, nA);
      };
    })(), w;
  })());
})(cn, cn.exports);
var YA = cn.exports;
const Lu = /* @__PURE__ */ Hu(YA);
function Ku(e) {
  const { children: A, scale: t } = e, r = vn(), o = mu(null), c = Or(`easy-drag-drop-root-${cr()}`)[0];
  return Ge(() => {
    const w = YA.get("dragModel/root", r)[1];
    w(c);
    function a() {
      const n = YA.get("dragModel/scale", r)[1], i = YA.get("dragModel/offset", r)[1];
      if (!o.current)
        return;
      const f = o.current.getBoundingClientRect(), { left: l, top: h } = f;
      i({ x: l, y: h }), typeof t == "object" && n(t), typeof t == "function" && n(t());
    }
    const u = new ResizeObserver(a);
    return u.observe(o.current), window.addEventListener("resize", a), () => {
      u.disconnect(), window.removeEventListener("resize", a);
    };
  }, [c, r, t]), /* @__PURE__ */ tn.jsx(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        position: "relative"
      },
      id: c,
      ref: o,
      children: A
    }
  );
}
function ti(e, A) {
  if (!e || !A)
    return !1;
  let [t, r] = e, o = !1;
  for (let c = 0, w = A.length - 1; c < A.length; w = c++) {
    let [a, u] = A[c], [n, i] = A[w];
    u > r != i > r && t < (n - a) * (r - u) / (i - u) + a && (o = !o);
  }
  return o;
}
const ts = (e, A) => [...e.classList].filter((t) => t.startsWith(A))[0], un = (e) => {
  if (!e)
    return console.error("ref is required"), !1;
  const A = e.current;
  return A instanceof HTMLElement ? A : (console.error("ref.current is not a HTMLElement"), !1);
}, Be = {
  STARTDRAG: "STARTDRAG",
  DRAGGING: "DRAGGING",
  DROP: "DROP",
  ONSTART: "ONSTART",
  ONENTER: "ONENTER",
  ONHOVER: "ONHOVER",
  ONLEAVE: "ONLEAVE",
  ONDROP: "ONDROP",
  ONEND: "ONEND"
}, Ou = {
  name: "dragModel",
  init: {
    root: null,
    offset: { x: 0, y: 0 },
    scale: { x: 1, y: 1 },
    drops: {},
    drags: {}
  },
  effects: {},
  callbacks: {
    updatePreview: async (e) => {
      const { info: A, select: t } = e, {
        value: { current: r }
      } = A;
      if (!r)
        return;
      const o = r.key, c = t("dragModel/root")[0], [w, a] = t(
        `dragModel/drags/${o}/previewAdded`
      ), u = t(`dragModel/drags/${o}/state`)[1], n = t("dragModel/drops")[0], f = Object.keys(n).filter(
        (l) => n[l] && document.querySelector(`.${l}`) !== document.querySelector(`.easy-drag-${o}`)
      ).filter((l) => {
        const h = n[l].acceptKeys || [];
        return h.includes("*") ? !0 : h.includes(o);
      });
      if (r && r.operationType === Be.STARTDRAG && !w) {
        const l = document.createElement("img");
        l.classList.add(r.class), l.src = r.src, Object.keys(r.style).forEach((h) => {
          l.style[h] = r.style[h];
        }), document.querySelector(`#${c}`).appendChild(l), await a(!0), f.forEach((h) => {
          const Q = t(`dragModel/drops/${h}/state`)[1];
          Q(`${Be.ONSTART}+${o}+${cr()}`), u(`${Be.ONSTART}+${h}`);
        });
      }
      if (r && r.operationType === Be.DRAGGING && w) {
        const l = document.querySelector(`.${r.class}`);
        Object.keys(r.style).forEach((p) => {
          l.style[p] = r.style[p];
        });
        const h = r.x, Q = r.y;
        for (let p of f) {
          const d = n[p], v = ti([h, Q], d.polygon), [F, H] = t(
            `dragModel/drops/${p}/state`
          );
          v ? F.includes(Be.ONSTART) || F.includes(Be.ONLEAVE) ? (H(`${Be.ONENTER}+${o}+${cr()}`), u(`${Be.ONENTER}+${p}`)) : (H(`${Be.ONHOVER}+${o}+${cr()}`), u(`${Be.ONHOVER}+${cr()}+${p}`)) : F.includes(Be.ONHOVER) && (H(`${Be.ONLEAVE}+${o}+${cr()}`), u(`${Be.ONLEAVE}+${p}`));
        }
      }
      if (r && r.operationType === Be.DROP) {
        let l = document.querySelector(`.${r.class}`);
        if (!l) {
          let p = 0;
          for (; !l && !(p > 10); )
            p++, l = document.querySelector(`.${r.class}`), await new Promise((d) => setTimeout(d, 100));
        }
        l == null || l.remove(), await a(!1);
        const h = r.x, Q = r.y;
        for (let p of f) {
          const d = n[p], v = ti([h, Q], d.polygon), F = t(`dragModel/drops/${p}/state`)[1];
          v ? (F(`${Be.ONDROP}+${o}+${cr()}`), u(`${Be.ONDROP}+${p}`)) : (F(`${Be.ONEND}+${o}+${cr()}`), u(`${Be.ONEND}+${p}`));
        }
      }
    }
  }
}, Ko = {}, Du = "drag_drop_store", vn = () => {
  let e;
  const A = Object.values(Ko);
  for (let t = 0; t < A.length; t += 1) {
    const r = Ai(A[t]) ? Ai(A[t])() : null;
    if (r) {
      e = r;
      break;
    }
  }
  return e;
};
function ch(e) {
  const { uniqueKey: A = Du, scale: t, children: r } = e, [o, c] = Or(null);
  return Ge(() => {
    const w = bu();
    return Ko[A] = w, c(w.Provider), () => {
      delete Ko[A];
    };
  }, [A]), /* @__PURE__ */ tn.jsx(
    Lu,
    {
      noCached: !0,
      isolated: !0,
      uniqueKey: A,
      models: [Ou],
      children: o && /* @__PURE__ */ tn.jsx(
        o,
        {
          value: () => window[`dva_react_hook_store_${A}`],
          children: /* @__PURE__ */ tn.jsx(Ku, { scale: t, children: r })
        }
      )
    }
  );
}
/*!
 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Oo = function(e, A) {
  return Oo = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var o in r)
      Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
  }, Oo(e, A);
};
function Ye(e, A) {
  if (typeof A != "function" && A !== null)
    throw new TypeError("Class extends value " + String(A) + " is not a constructor or null");
  Oo(e, A);
  function t() {
    this.constructor = e;
  }
  e.prototype = A === null ? Object.create(A) : (t.prototype = A.prototype, new t());
}
var Do = function() {
  return Do = Object.assign || function(A) {
    for (var t, r = 1, o = arguments.length; r < o; r++) {
      t = arguments[r];
      for (var c in t)
        Object.prototype.hasOwnProperty.call(t, c) && (A[c] = t[c]);
    }
    return A;
  }, Do.apply(this, arguments);
};
function Le(e, A, t, r) {
  function o(c) {
    return c instanceof t ? c : new t(function(w) {
      w(c);
    });
  }
  return new (t || (t = Promise))(function(c, w) {
    function a(i) {
      try {
        n(r.next(i));
      } catch (f) {
        w(f);
      }
    }
    function u(i) {
      try {
        n(r.throw(i));
      } catch (f) {
        w(f);
      }
    }
    function n(i) {
      i.done ? c(i.value) : o(i.value).then(a, u);
    }
    n((r = r.apply(e, A || [])).next());
  });
}
function He(e, A) {
  var t = { label: 0, sent: function() {
    if (c[0] & 1)
      throw c[1];
    return c[1];
  }, trys: [], ops: [] }, r, o, c, w;
  return w = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (w[Symbol.iterator] = function() {
    return this;
  }), w;
  function a(n) {
    return function(i) {
      return u([n, i]);
    };
  }
  function u(n) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (r = 1, o && (c = n[0] & 2 ? o.return : n[0] ? o.throw || ((c = o.return) && c.call(o), 0) : o.next) && !(c = c.call(o, n[1])).done)
          return c;
        switch (o = 0, c && (n = [n[0] & 2, c.value]), n[0]) {
          case 0:
          case 1:
            c = n;
            break;
          case 4:
            return t.label++, { value: n[1], done: !1 };
          case 5:
            t.label++, o = n[1], n = [0];
            continue;
          case 7:
            n = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (c = t.trys, !(c = c.length > 0 && c[c.length - 1]) && (n[0] === 6 || n[0] === 2)) {
              t = 0;
              continue;
            }
            if (n[0] === 3 && (!c || n[1] > c[0] && n[1] < c[3])) {
              t.label = n[1];
              break;
            }
            if (n[0] === 6 && t.label < c[1]) {
              t.label = c[1], c = n;
              break;
            }
            if (c && t.label < c[2]) {
              t.label = c[2], t.ops.push(n);
              break;
            }
            c[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        n = A.call(e, t);
      } catch (i) {
        n = [6, i], o = 0;
      } finally {
        r = c = 0;
      }
    if (n[0] & 5)
      throw n[1];
    return { value: n[0] ? n[1] : void 0, done: !0 };
  }
}
function Ot(e, A, t) {
  if (t || arguments.length === 2)
    for (var r = 0, o = A.length, c; r < o; r++)
      (c || !(r in A)) && (c || (c = Array.prototype.slice.call(A, 0, r)), c[r] = A[r]);
  return e.concat(c || A);
}
var Br = (
  /** @class */
  function() {
    function e(A, t, r, o) {
      this.left = A, this.top = t, this.width = r, this.height = o;
    }
    return e.prototype.add = function(A, t, r, o) {
      return new e(this.left + A, this.top + t, this.width + r, this.height + o);
    }, e.fromClientRect = function(A, t) {
      return new e(t.left + A.windowBounds.left, t.top + A.windowBounds.top, t.width, t.height);
    }, e.fromDOMRectList = function(A, t) {
      var r = Array.from(t).find(function(o) {
        return o.width !== 0;
      });
      return r ? new e(r.left + A.windowBounds.left, r.top + A.windowBounds.top, r.width, r.height) : e.EMPTY;
    }, e.EMPTY = new e(0, 0, 0, 0), e;
  }()
), Un = function(e, A) {
  return Br.fromClientRect(e, A.getBoundingClientRect());
}, Tu = function(e) {
  var A = e.body, t = e.documentElement;
  if (!A || !t)
    throw new Error("Unable to get document size");
  var r = Math.max(Math.max(A.scrollWidth, t.scrollWidth), Math.max(A.offsetWidth, t.offsetWidth), Math.max(A.clientWidth, t.clientWidth)), o = Math.max(Math.max(A.scrollHeight, t.scrollHeight), Math.max(A.offsetHeight, t.offsetHeight), Math.max(A.clientHeight, t.clientHeight));
  return new Br(0, 0, r, o);
}, Fn = function(e) {
  for (var A = [], t = 0, r = e.length; t < r; ) {
    var o = e.charCodeAt(t++);
    if (o >= 55296 && o <= 56319 && t < r) {
      var c = e.charCodeAt(t++);
      (c & 64512) === 56320 ? A.push(((o & 1023) << 10) + (c & 1023) + 65536) : (A.push(o), t--);
    } else
      A.push(o);
  }
  return A;
}, fe = function() {
  for (var e = [], A = 0; A < arguments.length; A++)
    e[A] = arguments[A];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, e);
  var t = e.length;
  if (!t)
    return "";
  for (var r = [], o = -1, c = ""; ++o < t; ) {
    var w = e[o];
    w <= 65535 ? r.push(w) : (w -= 65536, r.push((w >> 10) + 55296, w % 1024 + 56320)), (o + 1 === t || r.length > 16384) && (c += String.fromCharCode.apply(String, r), r.length = 0);
  }
  return c;
}, ni = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", _u = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Dt = 0; Dt < ni.length; Dt++)
  _u[ni.charCodeAt(Dt)] = Dt;
var oi = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", lt = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Tt = 0; Tt < oi.length; Tt++)
  lt[oi.charCodeAt(Tt)] = Tt;
var Ru = function(e) {
  var A = e.length * 0.75, t = e.length, r, o = 0, c, w, a, u;
  e[e.length - 1] === "=" && (A--, e[e.length - 2] === "=" && A--);
  var n = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A), i = Array.isArray(n) ? n : new Uint8Array(n);
  for (r = 0; r < t; r += 4)
    c = lt[e.charCodeAt(r)], w = lt[e.charCodeAt(r + 1)], a = lt[e.charCodeAt(r + 2)], u = lt[e.charCodeAt(r + 3)], i[o++] = c << 2 | w >> 4, i[o++] = (w & 15) << 4 | a >> 2, i[o++] = (a & 3) << 6 | u & 63;
  return n;
}, Mu = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 2)
    t.push(e[r + 1] << 8 | e[r]);
  return t;
}, Nu = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 4)
    t.push(e[r + 3] << 24 | e[r + 2] << 16 | e[r + 1] << 8 | e[r]);
  return t;
}, Lr = 5, na = 11, uo = 2, Gu = na - Lr, ns = 65536 >> Lr, Pu = 1 << Lr, Bo = Pu - 1, Vu = 1024 >> Lr, ku = ns + Vu, ju = ku, Xu = 32, Ju = ju + Xu, Wu = 65536 >> na, Yu = 1 << Gu, Zu = Yu - 1, ai = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint16Array(Array.prototype.slice.call(e, A, t));
}, zu = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint32Array(Array.prototype.slice.call(e, A, t));
}, qu = function(e, A) {
  var t = Ru(e), r = Array.isArray(t) ? Nu(t) : new Uint32Array(t), o = Array.isArray(t) ? Mu(t) : new Uint16Array(t), c = 24, w = ai(o, c / 2, r[4] / 2), a = r[5] === 2 ? ai(o, (c + r[4]) / 2) : zu(r, Math.ceil((c + r[4]) / 4));
  return new $u(r[0], r[1], r[2], r[3], w, a);
}, $u = (
  /** @class */
  function() {
    function e(A, t, r, o, c, w) {
      this.initialValue = A, this.errorValue = t, this.highStart = r, this.highValueIndex = o, this.index = c, this.data = w;
    }
    return e.prototype.get = function(A) {
      var t;
      if (A >= 0) {
        if (A < 55296 || A > 56319 && A <= 65535)
          return t = this.index[A >> Lr], t = (t << uo) + (A & Bo), this.data[t];
        if (A <= 65535)
          return t = this.index[ns + (A - 55296 >> Lr)], t = (t << uo) + (A & Bo), this.data[t];
        if (A < this.highStart)
          return t = Ju - Wu + (A >> na), t = this.index[t], t += A >> Lr & Zu, t = this.index[t], t = (t << uo) + (A & Bo), this.data[t];
        if (A <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, e;
  }()
), ii = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", AB = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var _t = 0; _t < ii.length; _t++)
  AB[ii.charCodeAt(_t)] = _t;
var eB = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", si = 50, rB = 1, os = 2, as = 3, tB = 4, nB = 5, ci = 7, is = 8, ui = 9, dr = 10, To = 11, Bi = 12, _o = 13, oB = 14, gt = 15, Ro = 16, Rt = 17, ct = 18, aB = 19, fi = 20, Mo = 21, ut = 22, fo = 23, Pr = 24, _e = 25, wt = 26, ht = 27, Vr = 28, iB = 29, xr = 30, sB = 31, Mt = 32, Nt = 33, No = 34, Go = 35, Po = 36, Et = 37, Vo = 38, nn = 39, on = 40, lo = 41, ss = 42, cB = 43, uB = [9001, 65288], cs = "!", kA = "×", Gt = "÷", ko = qu(eB), ir = [xr, Po], jo = [rB, os, as, nB], us = [dr, is], li = [ht, wt], BB = jo.concat(us), gi = [Vo, nn, on, No, Go], fB = [gt, _o], lB = function(e, A) {
  A === void 0 && (A = "strict");
  var t = [], r = [], o = [];
  return e.forEach(function(c, w) {
    var a = ko.get(c);
    if (a > si ? (o.push(!0), a -= si) : o.push(!1), ["normal", "auto", "loose"].indexOf(A) !== -1 && [8208, 8211, 12316, 12448].indexOf(c) !== -1)
      return r.push(w), t.push(Ro);
    if (a === tB || a === To) {
      if (w === 0)
        return r.push(w), t.push(xr);
      var u = t[w - 1];
      return BB.indexOf(u) === -1 ? (r.push(r[w - 1]), t.push(u)) : (r.push(w), t.push(xr));
    }
    if (r.push(w), a === sB)
      return t.push(A === "strict" ? Mo : Et);
    if (a === ss || a === iB)
      return t.push(xr);
    if (a === cB)
      return c >= 131072 && c <= 196605 || c >= 196608 && c <= 262141 ? t.push(Et) : t.push(xr);
    t.push(a);
  }), [r, t, o];
}, go = function(e, A, t, r) {
  var o = r[t];
  if (Array.isArray(e) ? e.indexOf(o) !== -1 : e === o)
    for (var c = t; c <= r.length; ) {
      c++;
      var w = r[c];
      if (w === A)
        return !0;
      if (w !== dr)
        break;
    }
  if (o === dr)
    for (var c = t; c > 0; ) {
      c--;
      var a = r[c];
      if (Array.isArray(e) ? e.indexOf(a) !== -1 : e === a)
        for (var u = t; u <= r.length; ) {
          u++;
          var w = r[u];
          if (w === A)
            return !0;
          if (w !== dr)
            break;
        }
      if (a !== dr)
        break;
    }
  return !1;
}, wi = function(e, A) {
  for (var t = e; t >= 0; ) {
    var r = A[t];
    if (r === dr)
      t--;
    else
      return r;
  }
  return 0;
}, gB = function(e, A, t, r, o) {
  if (t[r] === 0)
    return kA;
  var c = r - 1;
  if (Array.isArray(o) && o[c] === !0)
    return kA;
  var w = c - 1, a = c + 1, u = A[c], n = w >= 0 ? A[w] : 0, i = A[a];
  if (u === os && i === as)
    return kA;
  if (jo.indexOf(u) !== -1)
    return cs;
  if (jo.indexOf(i) !== -1 || us.indexOf(i) !== -1)
    return kA;
  if (wi(c, A) === is)
    return Gt;
  if (ko.get(e[c]) === To || (u === Mt || u === Nt) && ko.get(e[a]) === To || u === ci || i === ci || u === ui || [dr, _o, gt].indexOf(u) === -1 && i === ui || [Rt, ct, aB, Pr, Vr].indexOf(i) !== -1 || wi(c, A) === ut || go(fo, ut, c, A) || go([Rt, ct], Mo, c, A) || go(Bi, Bi, c, A))
    return kA;
  if (u === dr)
    return Gt;
  if (u === fo || i === fo)
    return kA;
  if (i === Ro || u === Ro)
    return Gt;
  if ([_o, gt, Mo].indexOf(i) !== -1 || u === oB || n === Po && fB.indexOf(u) !== -1 || u === Vr && i === Po || i === fi || ir.indexOf(i) !== -1 && u === _e || ir.indexOf(u) !== -1 && i === _e || u === ht && [Et, Mt, Nt].indexOf(i) !== -1 || [Et, Mt, Nt].indexOf(u) !== -1 && i === wt || ir.indexOf(u) !== -1 && li.indexOf(i) !== -1 || li.indexOf(u) !== -1 && ir.indexOf(i) !== -1 || // (PR | PO) × ( OP | HY )? NU
  [ht, wt].indexOf(u) !== -1 && (i === _e || [ut, gt].indexOf(i) !== -1 && A[a + 1] === _e) || // ( OP | HY ) × NU
  [ut, gt].indexOf(u) !== -1 && i === _e || // NU ×	(NU | SY | IS)
  u === _e && [_e, Vr, Pr].indexOf(i) !== -1)
    return kA;
  if ([_e, Vr, Pr, Rt, ct].indexOf(i) !== -1)
    for (var f = c; f >= 0; ) {
      var l = A[f];
      if (l === _e)
        return kA;
      if ([Vr, Pr].indexOf(l) !== -1)
        f--;
      else
        break;
    }
  if ([ht, wt].indexOf(i) !== -1)
    for (var f = [Rt, ct].indexOf(u) !== -1 ? w : c; f >= 0; ) {
      var l = A[f];
      if (l === _e)
        return kA;
      if ([Vr, Pr].indexOf(l) !== -1)
        f--;
      else
        break;
    }
  if (Vo === u && [Vo, nn, No, Go].indexOf(i) !== -1 || [nn, No].indexOf(u) !== -1 && [nn, on].indexOf(i) !== -1 || [on, Go].indexOf(u) !== -1 && i === on || gi.indexOf(u) !== -1 && [fi, wt].indexOf(i) !== -1 || gi.indexOf(i) !== -1 && u === ht || ir.indexOf(u) !== -1 && ir.indexOf(i) !== -1 || u === Pr && ir.indexOf(i) !== -1 || ir.concat(_e).indexOf(u) !== -1 && i === ut && uB.indexOf(e[a]) === -1 || ir.concat(_e).indexOf(i) !== -1 && u === ct)
    return kA;
  if (u === lo && i === lo) {
    for (var h = t[c], Q = 1; h > 0 && (h--, A[h] === lo); )
      Q++;
    if (Q % 2 !== 0)
      return kA;
  }
  return u === Mt && i === Nt ? kA : Gt;
}, wB = function(e, A) {
  A || (A = { lineBreak: "normal", wordBreak: "normal" });
  var t = lB(e, A.lineBreak), r = t[0], o = t[1], c = t[2];
  (A.wordBreak === "break-all" || A.wordBreak === "break-word") && (o = o.map(function(a) {
    return [_e, xr, ss].indexOf(a) !== -1 ? Et : a;
  }));
  var w = A.wordBreak === "keep-all" ? c.map(function(a, u) {
    return a && e[u] >= 19968 && e[u] <= 40959;
  }) : void 0;
  return [r, o, w];
}, hB = (
  /** @class */
  function() {
    function e(A, t, r, o) {
      this.codePoints = A, this.required = t === cs, this.start = r, this.end = o;
    }
    return e.prototype.slice = function() {
      return fe.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, e;
  }()
), QB = function(e, A) {
  var t = Fn(e), r = wB(t, A), o = r[0], c = r[1], w = r[2], a = t.length, u = 0, n = 0;
  return {
    next: function() {
      if (n >= a)
        return { done: !0, value: null };
      for (var i = kA; n < a && (i = gB(t, c, o, ++n, w)) === kA; )
        ;
      if (i !== kA || n === a) {
        var f = new hB(t, i, u, n);
        return u = n, { value: f, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, dB = 1, pB = 2, Ht = 4, hi = 8, Bn = 10, Qi = 47, Ct = 92, CB = 9, vB = 32, Pt = 34, Bt = 61, UB = 35, FB = 36, yB = 37, Vt = 39, kt = 40, ft = 41, EB = 95, Oe = 45, mB = 33, bB = 60, HB = 62, IB = 64, xB = 91, SB = 93, LB = 61, KB = 123, jt = 63, OB = 125, di = 124, DB = 126, TB = 128, pi = 65533, wo = 42, Sr = 43, _B = 44, RB = 58, MB = 59, mt = 46, NB = 0, GB = 8, PB = 11, VB = 14, kB = 31, jB = 127, Ar = -1, Bs = 48, fs = 97, ls = 101, XB = 102, JB = 117, WB = 122, gs = 65, ws = 69, hs = 70, YB = 85, ZB = 90, Ie = function(e) {
  return e >= Bs && e <= 57;
}, zB = function(e) {
  return e >= 55296 && e <= 57343;
}, kr = function(e) {
  return Ie(e) || e >= gs && e <= hs || e >= fs && e <= XB;
}, qB = function(e) {
  return e >= fs && e <= WB;
}, $B = function(e) {
  return e >= gs && e <= ZB;
}, Af = function(e) {
  return qB(e) || $B(e);
}, ef = function(e) {
  return e >= TB;
}, Xt = function(e) {
  return e === Bn || e === CB || e === vB;
}, fn = function(e) {
  return Af(e) || ef(e) || e === EB;
}, Ci = function(e) {
  return fn(e) || Ie(e) || e === Oe;
}, rf = function(e) {
  return e >= NB && e <= GB || e === PB || e >= VB && e <= kB || e === jB;
}, Qr = function(e, A) {
  return e !== Ct ? !1 : A !== Bn;
}, Jt = function(e, A, t) {
  return e === Oe ? fn(A) || Qr(A, t) : fn(e) ? !0 : !!(e === Ct && Qr(e, A));
}, ho = function(e, A, t) {
  return e === Sr || e === Oe ? Ie(A) ? !0 : A === mt && Ie(t) : Ie(e === mt ? A : e);
}, tf = function(e) {
  var A = 0, t = 1;
  (e[A] === Sr || e[A] === Oe) && (e[A] === Oe && (t = -1), A++);
  for (var r = []; Ie(e[A]); )
    r.push(e[A++]);
  var o = r.length ? parseInt(fe.apply(void 0, r), 10) : 0;
  e[A] === mt && A++;
  for (var c = []; Ie(e[A]); )
    c.push(e[A++]);
  var w = c.length, a = w ? parseInt(fe.apply(void 0, c), 10) : 0;
  (e[A] === ws || e[A] === ls) && A++;
  var u = 1;
  (e[A] === Sr || e[A] === Oe) && (e[A] === Oe && (u = -1), A++);
  for (var n = []; Ie(e[A]); )
    n.push(e[A++]);
  var i = n.length ? parseInt(fe.apply(void 0, n), 10) : 0;
  return t * (o + a * Math.pow(10, -w)) * Math.pow(10, u * i);
}, nf = {
  type: 2
  /* LEFT_PARENTHESIS_TOKEN */
}, of = {
  type: 3
  /* RIGHT_PARENTHESIS_TOKEN */
}, af = {
  type: 4
  /* COMMA_TOKEN */
}, sf = {
  type: 13
  /* SUFFIX_MATCH_TOKEN */
}, cf = {
  type: 8
  /* PREFIX_MATCH_TOKEN */
}, uf = {
  type: 21
  /* COLUMN_TOKEN */
}, Bf = {
  type: 9
  /* DASH_MATCH_TOKEN */
}, ff = {
  type: 10
  /* INCLUDE_MATCH_TOKEN */
}, lf = {
  type: 11
  /* LEFT_CURLY_BRACKET_TOKEN */
}, gf = {
  type: 12
  /* RIGHT_CURLY_BRACKET_TOKEN */
}, wf = {
  type: 14
  /* SUBSTRING_MATCH_TOKEN */
}, Wt = {
  type: 23
  /* BAD_URL_TOKEN */
}, hf = {
  type: 1
  /* BAD_STRING_TOKEN */
}, Qf = {
  type: 25
  /* CDO_TOKEN */
}, df = {
  type: 24
  /* CDC_TOKEN */
}, pf = {
  type: 26
  /* COLON_TOKEN */
}, Cf = {
  type: 27
  /* SEMICOLON_TOKEN */
}, vf = {
  type: 28
  /* LEFT_SQUARE_BRACKET_TOKEN */
}, Uf = {
  type: 29
  /* RIGHT_SQUARE_BRACKET_TOKEN */
}, Ff = {
  type: 31
  /* WHITESPACE_TOKEN */
}, Xo = {
  type: 32
  /* EOF_TOKEN */
}, Qs = (
  /** @class */
  function() {
    function e() {
      this._value = [];
    }
    return e.prototype.write = function(A) {
      this._value = this._value.concat(Fn(A));
    }, e.prototype.read = function() {
      for (var A = [], t = this.consumeToken(); t !== Xo; )
        A.push(t), t = this.consumeToken();
      return A;
    }, e.prototype.consumeToken = function() {
      var A = this.consumeCodePoint();
      switch (A) {
        case Pt:
          return this.consumeStringToken(Pt);
        case UB:
          var t = this.peekCodePoint(0), r = this.peekCodePoint(1), o = this.peekCodePoint(2);
          if (Ci(t) || Qr(r, o)) {
            var c = Jt(t, r, o) ? pB : dB, w = this.consumeName();
            return { type: 5, value: w, flags: c };
          }
          break;
        case FB:
          if (this.peekCodePoint(0) === Bt)
            return this.consumeCodePoint(), sf;
          break;
        case Vt:
          return this.consumeStringToken(Vt);
        case kt:
          return nf;
        case ft:
          return of;
        case wo:
          if (this.peekCodePoint(0) === Bt)
            return this.consumeCodePoint(), wf;
          break;
        case Sr:
          if (ho(A, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          break;
        case _B:
          return af;
        case Oe:
          var a = A, u = this.peekCodePoint(0), n = this.peekCodePoint(1);
          if (ho(a, u, n))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          if (Jt(a, u, n))
            return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
          if (u === Oe && n === HB)
            return this.consumeCodePoint(), this.consumeCodePoint(), df;
          break;
        case mt:
          if (ho(A, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          break;
        case Qi:
          if (this.peekCodePoint(0) === wo)
            for (this.consumeCodePoint(); ; ) {
              var i = this.consumeCodePoint();
              if (i === wo && (i = this.consumeCodePoint(), i === Qi))
                return this.consumeToken();
              if (i === Ar)
                return this.consumeToken();
            }
          break;
        case RB:
          return pf;
        case MB:
          return Cf;
        case bB:
          if (this.peekCodePoint(0) === mB && this.peekCodePoint(1) === Oe && this.peekCodePoint(2) === Oe)
            return this.consumeCodePoint(), this.consumeCodePoint(), Qf;
          break;
        case IB:
          var f = this.peekCodePoint(0), l = this.peekCodePoint(1), h = this.peekCodePoint(2);
          if (Jt(f, l, h)) {
            var w = this.consumeName();
            return { type: 7, value: w };
          }
          break;
        case xB:
          return vf;
        case Ct:
          if (Qr(A, this.peekCodePoint(0)))
            return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
          break;
        case SB:
          return Uf;
        case LB:
          if (this.peekCodePoint(0) === Bt)
            return this.consumeCodePoint(), cf;
          break;
        case KB:
          return lf;
        case OB:
          return gf;
        case JB:
        case YB:
          var Q = this.peekCodePoint(0), p = this.peekCodePoint(1);
          return Q === Sr && (kr(p) || p === jt) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        case di:
          if (this.peekCodePoint(0) === Bt)
            return this.consumeCodePoint(), Bf;
          if (this.peekCodePoint(0) === di)
            return this.consumeCodePoint(), uf;
          break;
        case DB:
          if (this.peekCodePoint(0) === Bt)
            return this.consumeCodePoint(), ff;
          break;
        case Ar:
          return Xo;
      }
      return Xt(A) ? (this.consumeWhiteSpace(), Ff) : Ie(A) ? (this.reconsumeCodePoint(A), this.consumeNumericToken()) : fn(A) ? (this.reconsumeCodePoint(A), this.consumeIdentLikeToken()) : { type: 6, value: fe(A) };
    }, e.prototype.consumeCodePoint = function() {
      var A = this._value.shift();
      return typeof A > "u" ? -1 : A;
    }, e.prototype.reconsumeCodePoint = function(A) {
      this._value.unshift(A);
    }, e.prototype.peekCodePoint = function(A) {
      return A >= this._value.length ? -1 : this._value[A];
    }, e.prototype.consumeUnicodeRangeToken = function() {
      for (var A = [], t = this.consumeCodePoint(); kr(t) && A.length < 6; )
        A.push(t), t = this.consumeCodePoint();
      for (var r = !1; t === jt && A.length < 6; )
        A.push(t), t = this.consumeCodePoint(), r = !0;
      if (r) {
        var o = parseInt(fe.apply(void 0, A.map(function(u) {
          return u === jt ? Bs : u;
        })), 16), c = parseInt(fe.apply(void 0, A.map(function(u) {
          return u === jt ? hs : u;
        })), 16);
        return { type: 30, start: o, end: c };
      }
      var w = parseInt(fe.apply(void 0, A), 16);
      if (this.peekCodePoint(0) === Oe && kr(this.peekCodePoint(1))) {
        this.consumeCodePoint(), t = this.consumeCodePoint();
        for (var a = []; kr(t) && a.length < 6; )
          a.push(t), t = this.consumeCodePoint();
        var c = parseInt(fe.apply(void 0, a), 16);
        return { type: 30, start: w, end: c };
      } else
        return { type: 30, start: w, end: w };
    }, e.prototype.consumeIdentLikeToken = function() {
      var A = this.consumeName();
      return A.toLowerCase() === "url" && this.peekCodePoint(0) === kt ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === kt ? (this.consumeCodePoint(), { type: 19, value: A }) : { type: 20, value: A };
    }, e.prototype.consumeUrlToken = function() {
      var A = [];
      if (this.consumeWhiteSpace(), this.peekCodePoint(0) === Ar)
        return { type: 22, value: "" };
      var t = this.peekCodePoint(0);
      if (t === Vt || t === Pt) {
        var r = this.consumeStringToken(this.consumeCodePoint());
        return r.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === Ar || this.peekCodePoint(0) === ft) ? (this.consumeCodePoint(), { type: 22, value: r.value }) : (this.consumeBadUrlRemnants(), Wt);
      }
      for (; ; ) {
        var o = this.consumeCodePoint();
        if (o === Ar || o === ft)
          return { type: 22, value: fe.apply(void 0, A) };
        if (Xt(o))
          return this.consumeWhiteSpace(), this.peekCodePoint(0) === Ar || this.peekCodePoint(0) === ft ? (this.consumeCodePoint(), { type: 22, value: fe.apply(void 0, A) }) : (this.consumeBadUrlRemnants(), Wt);
        if (o === Pt || o === Vt || o === kt || rf(o))
          return this.consumeBadUrlRemnants(), Wt;
        if (o === Ct)
          if (Qr(o, this.peekCodePoint(0)))
            A.push(this.consumeEscapedCodePoint());
          else
            return this.consumeBadUrlRemnants(), Wt;
        else
          A.push(o);
      }
    }, e.prototype.consumeWhiteSpace = function() {
      for (; Xt(this.peekCodePoint(0)); )
        this.consumeCodePoint();
    }, e.prototype.consumeBadUrlRemnants = function() {
      for (; ; ) {
        var A = this.consumeCodePoint();
        if (A === ft || A === Ar)
          return;
        Qr(A, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
      }
    }, e.prototype.consumeStringSlice = function(A) {
      for (var t = 5e4, r = ""; A > 0; ) {
        var o = Math.min(t, A);
        r += fe.apply(void 0, this._value.splice(0, o)), A -= o;
      }
      return this._value.shift(), r;
    }, e.prototype.consumeStringToken = function(A) {
      var t = "", r = 0;
      do {
        var o = this._value[r];
        if (o === Ar || o === void 0 || o === A)
          return t += this.consumeStringSlice(r), { type: 0, value: t };
        if (o === Bn)
          return this._value.splice(0, r), hf;
        if (o === Ct) {
          var c = this._value[r + 1];
          c !== Ar && c !== void 0 && (c === Bn ? (t += this.consumeStringSlice(r), r = -1, this._value.shift()) : Qr(o, c) && (t += this.consumeStringSlice(r), t += fe(this.consumeEscapedCodePoint()), r = -1));
        }
        r++;
      } while (!0);
    }, e.prototype.consumeNumber = function() {
      var A = [], t = Ht, r = this.peekCodePoint(0);
      for ((r === Sr || r === Oe) && A.push(this.consumeCodePoint()); Ie(this.peekCodePoint(0)); )
        A.push(this.consumeCodePoint());
      r = this.peekCodePoint(0);
      var o = this.peekCodePoint(1);
      if (r === mt && Ie(o))
        for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = hi; Ie(this.peekCodePoint(0)); )
          A.push(this.consumeCodePoint());
      r = this.peekCodePoint(0), o = this.peekCodePoint(1);
      var c = this.peekCodePoint(2);
      if ((r === ws || r === ls) && ((o === Sr || o === Oe) && Ie(c) || Ie(o)))
        for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = hi; Ie(this.peekCodePoint(0)); )
          A.push(this.consumeCodePoint());
      return [tf(A), t];
    }, e.prototype.consumeNumericToken = function() {
      var A = this.consumeNumber(), t = A[0], r = A[1], o = this.peekCodePoint(0), c = this.peekCodePoint(1), w = this.peekCodePoint(2);
      if (Jt(o, c, w)) {
        var a = this.consumeName();
        return { type: 15, number: t, flags: r, unit: a };
      }
      return o === yB ? (this.consumeCodePoint(), { type: 16, number: t, flags: r }) : { type: 17, number: t, flags: r };
    }, e.prototype.consumeEscapedCodePoint = function() {
      var A = this.consumeCodePoint();
      if (kr(A)) {
        for (var t = fe(A); kr(this.peekCodePoint(0)) && t.length < 6; )
          t += fe(this.consumeCodePoint());
        Xt(this.peekCodePoint(0)) && this.consumeCodePoint();
        var r = parseInt(t, 16);
        return r === 0 || zB(r) || r > 1114111 ? pi : r;
      }
      return A === Ar ? pi : A;
    }, e.prototype.consumeName = function() {
      for (var A = ""; ; ) {
        var t = this.consumeCodePoint();
        if (Ci(t))
          A += fe(t);
        else if (Qr(t, this.peekCodePoint(0)))
          A += fe(this.consumeEscapedCodePoint());
        else
          return this.reconsumeCodePoint(t), A;
      }
    }, e;
  }()
), ds = (
  /** @class */
  function() {
    function e(A) {
      this._tokens = A;
    }
    return e.create = function(A) {
      var t = new Qs();
      return t.write(A), new e(t.read());
    }, e.parseValue = function(A) {
      return e.create(A).parseComponentValue();
    }, e.parseValues = function(A) {
      return e.create(A).parseComponentValues();
    }, e.prototype.parseComponentValue = function() {
      for (var A = this.consumeToken(); A.type === 31; )
        A = this.consumeToken();
      if (A.type === 32)
        throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
      this.reconsumeToken(A);
      var t = this.consumeComponentValue();
      do
        A = this.consumeToken();
      while (A.type === 31);
      if (A.type === 32)
        return t;
      throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
    }, e.prototype.parseComponentValues = function() {
      for (var A = []; ; ) {
        var t = this.consumeComponentValue();
        if (t.type === 32)
          return A;
        A.push(t), A.push();
      }
    }, e.prototype.consumeComponentValue = function() {
      var A = this.consumeToken();
      switch (A.type) {
        case 11:
        case 28:
        case 2:
          return this.consumeSimpleBlock(A.type);
        case 19:
          return this.consumeFunction(A);
      }
      return A;
    }, e.prototype.consumeSimpleBlock = function(A) {
      for (var t = { type: A, values: [] }, r = this.consumeToken(); ; ) {
        if (r.type === 32 || Ef(r, A))
          return t;
        this.reconsumeToken(r), t.values.push(this.consumeComponentValue()), r = this.consumeToken();
      }
    }, e.prototype.consumeFunction = function(A) {
      for (var t = {
        name: A.value,
        values: [],
        type: 18
        /* FUNCTION */
      }; ; ) {
        var r = this.consumeToken();
        if (r.type === 32 || r.type === 3)
          return t;
        this.reconsumeToken(r), t.values.push(this.consumeComponentValue());
      }
    }, e.prototype.consumeToken = function() {
      var A = this._tokens.shift();
      return typeof A > "u" ? Xo : A;
    }, e.prototype.reconsumeToken = function(A) {
      this._tokens.unshift(A);
    }, e;
  }()
), It = function(e) {
  return e.type === 15;
}, $r = function(e) {
  return e.type === 17;
}, ZA = function(e) {
  return e.type === 20;
}, yf = function(e) {
  return e.type === 0;
}, Jo = function(e, A) {
  return ZA(e) && e.value === A;
}, ps = function(e) {
  return e.type !== 31;
}, qr = function(e) {
  return e.type !== 31 && e.type !== 4;
}, er = function(e) {
  var A = [], t = [];
  return e.forEach(function(r) {
    if (r.type === 4) {
      if (t.length === 0)
        throw new Error("Error parsing function args, zero tokens for arg");
      A.push(t), t = [];
      return;
    }
    r.type !== 31 && t.push(r);
  }), t.length && A.push(t), A;
}, Ef = function(e, A) {
  return A === 11 && e.type === 12 || A === 28 && e.type === 29 ? !0 : A === 2 && e.type === 3;
}, Fr = function(e) {
  return e.type === 17 || e.type === 15;
}, he = function(e) {
  return e.type === 16 || Fr(e);
}, Cs = function(e) {
  return e.length > 1 ? [e[0], e[1]] : [e[0]];
}, me = {
  type: 17,
  number: 0,
  flags: Ht
}, oa = {
  type: 16,
  number: 50,
  flags: Ht
}, pr = {
  type: 16,
  number: 100,
  flags: Ht
}, Qt = function(e, A, t) {
  var r = e[0], o = e[1];
  return [qA(r, A), qA(typeof o < "u" ? o : r, t)];
}, qA = function(e, A) {
  if (e.type === 16)
    return e.number / 100 * A;
  if (It(e))
    switch (e.unit) {
      case "rem":
      case "em":
        return 16 * e.number;
      case "px":
      default:
        return e.number;
    }
  return e.number;
}, vs = "deg", Us = "grad", Fs = "rad", ys = "turn", yn = {
  name: "angle",
  parse: function(e, A) {
    if (A.type === 15)
      switch (A.unit) {
        case vs:
          return Math.PI * A.number / 180;
        case Us:
          return Math.PI / 200 * A.number;
        case Fs:
          return A.number;
        case ys:
          return Math.PI * 2 * A.number;
      }
    throw new Error("Unsupported angle type");
  }
}, Es = function(e) {
  return e.type === 15 && (e.unit === vs || e.unit === Us || e.unit === Fs || e.unit === ys);
}, ms = function(e) {
  var A = e.filter(ZA).map(function(t) {
    return t.value;
  }).join(" ");
  switch (A) {
    case "to bottom right":
    case "to right bottom":
    case "left top":
    case "top left":
      return [me, me];
    case "to top":
    case "bottom":
      return Pe(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
      return [me, pr];
    case "to right":
    case "left":
      return Pe(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
      return [pr, pr];
    case "to bottom":
    case "top":
      return Pe(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
      return [pr, me];
    case "to left":
    case "right":
      return Pe(270);
  }
  return 0;
}, Pe = function(e) {
  return Math.PI * e / 180;
}, vr = {
  name: "color",
  parse: function(e, A) {
    if (A.type === 18) {
      var t = mf[A.name];
      if (typeof t > "u")
        throw new Error('Attempting to parse an unsupported color function "' + A.name + '"');
      return t(e, A.values);
    }
    if (A.type === 5) {
      if (A.value.length === 3) {
        var r = A.value.substring(0, 1), o = A.value.substring(1, 2), c = A.value.substring(2, 3);
        return Cr(parseInt(r + r, 16), parseInt(o + o, 16), parseInt(c + c, 16), 1);
      }
      if (A.value.length === 4) {
        var r = A.value.substring(0, 1), o = A.value.substring(1, 2), c = A.value.substring(2, 3), w = A.value.substring(3, 4);
        return Cr(parseInt(r + r, 16), parseInt(o + o, 16), parseInt(c + c, 16), parseInt(w + w, 16) / 255);
      }
      if (A.value.length === 6) {
        var r = A.value.substring(0, 2), o = A.value.substring(2, 4), c = A.value.substring(4, 6);
        return Cr(parseInt(r, 16), parseInt(o, 16), parseInt(c, 16), 1);
      }
      if (A.value.length === 8) {
        var r = A.value.substring(0, 2), o = A.value.substring(2, 4), c = A.value.substring(4, 6), w = A.value.substring(6, 8);
        return Cr(parseInt(r, 16), parseInt(o, 16), parseInt(c, 16), parseInt(w, 16) / 255);
      }
    }
    if (A.type === 20) {
      var a = ur[A.value.toUpperCase()];
      if (typeof a < "u")
        return a;
    }
    return ur.TRANSPARENT;
  }
}, Ur = function(e) {
  return (255 & e) === 0;
}, Ue = function(e) {
  var A = 255 & e, t = 255 & e >> 8, r = 255 & e >> 16, o = 255 & e >> 24;
  return A < 255 ? "rgba(" + o + "," + r + "," + t + "," + A / 255 + ")" : "rgb(" + o + "," + r + "," + t + ")";
}, Cr = function(e, A, t, r) {
  return (e << 24 | A << 16 | t << 8 | Math.round(r * 255) << 0) >>> 0;
}, vi = function(e, A) {
  if (e.type === 17)
    return e.number;
  if (e.type === 16) {
    var t = A === 3 ? 1 : 255;
    return A === 3 ? e.number / 100 * t : Math.round(e.number / 100 * t);
  }
  return 0;
}, Ui = function(e, A) {
  var t = A.filter(qr);
  if (t.length === 3) {
    var r = t.map(vi), o = r[0], c = r[1], w = r[2];
    return Cr(o, c, w, 1);
  }
  if (t.length === 4) {
    var a = t.map(vi), o = a[0], c = a[1], w = a[2], u = a[3];
    return Cr(o, c, w, u);
  }
  return 0;
};
function Qo(e, A, t) {
  return t < 0 && (t += 1), t >= 1 && (t -= 1), t < 1 / 6 ? (A - e) * t * 6 + e : t < 1 / 2 ? A : t < 2 / 3 ? (A - e) * 6 * (2 / 3 - t) + e : e;
}
var Fi = function(e, A) {
  var t = A.filter(qr), r = t[0], o = t[1], c = t[2], w = t[3], a = (r.type === 17 ? Pe(r.number) : yn.parse(e, r)) / (Math.PI * 2), u = he(o) ? o.number / 100 : 0, n = he(c) ? c.number / 100 : 0, i = typeof w < "u" && he(w) ? qA(w, 1) : 1;
  if (u === 0)
    return Cr(n * 255, n * 255, n * 255, 1);
  var f = n <= 0.5 ? n * (u + 1) : n + u - n * u, l = n * 2 - f, h = Qo(l, f, a + 1 / 3), Q = Qo(l, f, a), p = Qo(l, f, a - 1 / 3);
  return Cr(h * 255, Q * 255, p * 255, i);
}, mf = {
  hsl: Fi,
  hsla: Fi,
  rgb: Ui,
  rgba: Ui
}, vt = function(e, A) {
  return vr.parse(e, ds.create(A).parseComponentValue());
}, ur = {
  ALICEBLUE: 4042850303,
  ANTIQUEWHITE: 4209760255,
  AQUA: 16777215,
  AQUAMARINE: 2147472639,
  AZURE: 4043309055,
  BEIGE: 4126530815,
  BISQUE: 4293182719,
  BLACK: 255,
  BLANCHEDALMOND: 4293643775,
  BLUE: 65535,
  BLUEVIOLET: 2318131967,
  BROWN: 2771004159,
  BURLYWOOD: 3736635391,
  CADETBLUE: 1604231423,
  CHARTREUSE: 2147418367,
  CHOCOLATE: 3530104575,
  CORAL: 4286533887,
  CORNFLOWERBLUE: 1687547391,
  CORNSILK: 4294499583,
  CRIMSON: 3692313855,
  CYAN: 16777215,
  DARKBLUE: 35839,
  DARKCYAN: 9145343,
  DARKGOLDENROD: 3095837695,
  DARKGRAY: 2846468607,
  DARKGREEN: 6553855,
  DARKGREY: 2846468607,
  DARKKHAKI: 3182914559,
  DARKMAGENTA: 2332068863,
  DARKOLIVEGREEN: 1433087999,
  DARKORANGE: 4287365375,
  DARKORCHID: 2570243327,
  DARKRED: 2332033279,
  DARKSALMON: 3918953215,
  DARKSEAGREEN: 2411499519,
  DARKSLATEBLUE: 1211993087,
  DARKSLATEGRAY: 793726975,
  DARKSLATEGREY: 793726975,
  DARKTURQUOISE: 13554175,
  DARKVIOLET: 2483082239,
  DEEPPINK: 4279538687,
  DEEPSKYBLUE: 12582911,
  DIMGRAY: 1768516095,
  DIMGREY: 1768516095,
  DODGERBLUE: 512819199,
  FIREBRICK: 2988581631,
  FLORALWHITE: 4294635775,
  FORESTGREEN: 579543807,
  FUCHSIA: 4278255615,
  GAINSBORO: 3705462015,
  GHOSTWHITE: 4177068031,
  GOLD: 4292280575,
  GOLDENROD: 3668254975,
  GRAY: 2155905279,
  GREEN: 8388863,
  GREENYELLOW: 2919182335,
  GREY: 2155905279,
  HONEYDEW: 4043305215,
  HOTPINK: 4285117695,
  INDIANRED: 3445382399,
  INDIGO: 1258324735,
  IVORY: 4294963455,
  KHAKI: 4041641215,
  LAVENDER: 3873897215,
  LAVENDERBLUSH: 4293981695,
  LAWNGREEN: 2096890111,
  LEMONCHIFFON: 4294626815,
  LIGHTBLUE: 2916673279,
  LIGHTCORAL: 4034953471,
  LIGHTCYAN: 3774873599,
  LIGHTGOLDENRODYELLOW: 4210742015,
  LIGHTGRAY: 3553874943,
  LIGHTGREEN: 2431553791,
  LIGHTGREY: 3553874943,
  LIGHTPINK: 4290167295,
  LIGHTSALMON: 4288707327,
  LIGHTSEAGREEN: 548580095,
  LIGHTSKYBLUE: 2278488831,
  LIGHTSLATEGRAY: 2005441023,
  LIGHTSLATEGREY: 2005441023,
  LIGHTSTEELBLUE: 2965692159,
  LIGHTYELLOW: 4294959359,
  LIME: 16711935,
  LIMEGREEN: 852308735,
  LINEN: 4210091775,
  MAGENTA: 4278255615,
  MAROON: 2147483903,
  MEDIUMAQUAMARINE: 1724754687,
  MEDIUMBLUE: 52735,
  MEDIUMORCHID: 3126187007,
  MEDIUMPURPLE: 2473647103,
  MEDIUMSEAGREEN: 1018393087,
  MEDIUMSLATEBLUE: 2070474495,
  MEDIUMSPRINGGREEN: 16423679,
  MEDIUMTURQUOISE: 1221709055,
  MEDIUMVIOLETRED: 3340076543,
  MIDNIGHTBLUE: 421097727,
  MINTCREAM: 4127193855,
  MISTYROSE: 4293190143,
  MOCCASIN: 4293178879,
  NAVAJOWHITE: 4292783615,
  NAVY: 33023,
  OLDLACE: 4260751103,
  OLIVE: 2155872511,
  OLIVEDRAB: 1804477439,
  ORANGE: 4289003775,
  ORANGERED: 4282712319,
  ORCHID: 3664828159,
  PALEGOLDENROD: 4008225535,
  PALEGREEN: 2566625535,
  PALETURQUOISE: 2951671551,
  PALEVIOLETRED: 3681588223,
  PAPAYAWHIP: 4293907967,
  PEACHPUFF: 4292524543,
  PERU: 3448061951,
  PINK: 4290825215,
  PLUM: 3718307327,
  POWDERBLUE: 2967529215,
  PURPLE: 2147516671,
  REBECCAPURPLE: 1714657791,
  RED: 4278190335,
  ROSYBROWN: 3163525119,
  ROYALBLUE: 1097458175,
  SADDLEBROWN: 2336560127,
  SALMON: 4202722047,
  SANDYBROWN: 4104413439,
  SEAGREEN: 780883967,
  SEASHELL: 4294307583,
  SIENNA: 2689740287,
  SILVER: 3233857791,
  SKYBLUE: 2278484991,
  SLATEBLUE: 1784335871,
  SLATEGRAY: 1887473919,
  SLATEGREY: 1887473919,
  SNOW: 4294638335,
  SPRINGGREEN: 16744447,
  STEELBLUE: 1182971135,
  TAN: 3535047935,
  TEAL: 8421631,
  THISTLE: 3636451583,
  TOMATO: 4284696575,
  TRANSPARENT: 0,
  TURQUOISE: 1088475391,
  VIOLET: 4001558271,
  WHEAT: 4125012991,
  WHITE: 4294967295,
  WHITESMOKE: 4126537215,
  YELLOW: 4294902015,
  YELLOWGREEN: 2597139199
}, bf = {
  name: "background-clip",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.map(function(t) {
      if (ZA(t))
        switch (t.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
      return 0;
    });
  }
}, Hf = {
  name: "background-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, En = function(e, A) {
  var t = vr.parse(e, A[0]), r = A[1];
  return r && he(r) ? { color: t, stop: r } : { color: t, stop: null };
}, yi = function(e, A) {
  var t = e[0], r = e[e.length - 1];
  t.stop === null && (t.stop = me), r.stop === null && (r.stop = pr);
  for (var o = [], c = 0, w = 0; w < e.length; w++) {
    var a = e[w].stop;
    if (a !== null) {
      var u = qA(a, A);
      u > c ? o.push(u) : o.push(c), c = u;
    } else
      o.push(null);
  }
  for (var n = null, w = 0; w < o.length; w++) {
    var i = o[w];
    if (i === null)
      n === null && (n = w);
    else if (n !== null) {
      for (var f = w - n, l = o[n - 1], h = (i - l) / (f + 1), Q = 1; Q <= f; Q++)
        o[n + Q - 1] = h * Q;
      n = null;
    }
  }
  return e.map(function(p, d) {
    var v = p.color;
    return { color: v, stop: Math.max(Math.min(1, o[d] / A), 0) };
  });
}, If = function(e, A, t) {
  var r = A / 2, o = t / 2, c = qA(e[0], A) - r, w = o - qA(e[1], t);
  return (Math.atan2(w, c) + Math.PI * 2) % (Math.PI * 2);
}, xf = function(e, A, t) {
  var r = typeof e == "number" ? e : If(e, A, t), o = Math.abs(A * Math.sin(r)) + Math.abs(t * Math.cos(r)), c = A / 2, w = t / 2, a = o / 2, u = Math.sin(r - Math.PI / 2) * a, n = Math.cos(r - Math.PI / 2) * a;
  return [o, c - n, c + n, w - u, w + u];
}, We = function(e, A) {
  return Math.sqrt(e * e + A * A);
}, Ei = function(e, A, t, r, o) {
  var c = [
    [0, 0],
    [0, A],
    [e, 0],
    [e, A]
  ];
  return c.reduce(function(w, a) {
    var u = a[0], n = a[1], i = We(t - u, r - n);
    return (o ? i < w.optimumDistance : i > w.optimumDistance) ? {
      optimumCorner: a,
      optimumDistance: i
    } : w;
  }, {
    optimumDistance: o ? 1 / 0 : -1 / 0,
    optimumCorner: null
  }).optimumCorner;
}, Sf = function(e, A, t, r, o) {
  var c = 0, w = 0;
  switch (e.size) {
    case 0:
      e.shape === 0 ? c = w = Math.min(Math.abs(A), Math.abs(A - r), Math.abs(t), Math.abs(t - o)) : e.shape === 1 && (c = Math.min(Math.abs(A), Math.abs(A - r)), w = Math.min(Math.abs(t), Math.abs(t - o)));
      break;
    case 2:
      if (e.shape === 0)
        c = w = Math.min(We(A, t), We(A, t - o), We(A - r, t), We(A - r, t - o));
      else if (e.shape === 1) {
        var a = Math.min(Math.abs(t), Math.abs(t - o)) / Math.min(Math.abs(A), Math.abs(A - r)), u = Ei(r, o, A, t, !0), n = u[0], i = u[1];
        c = We(n - A, (i - t) / a), w = a * c;
      }
      break;
    case 1:
      e.shape === 0 ? c = w = Math.max(Math.abs(A), Math.abs(A - r), Math.abs(t), Math.abs(t - o)) : e.shape === 1 && (c = Math.max(Math.abs(A), Math.abs(A - r)), w = Math.max(Math.abs(t), Math.abs(t - o)));
      break;
    case 3:
      if (e.shape === 0)
        c = w = Math.max(We(A, t), We(A, t - o), We(A - r, t), We(A - r, t - o));
      else if (e.shape === 1) {
        var a = Math.max(Math.abs(t), Math.abs(t - o)) / Math.max(Math.abs(A), Math.abs(A - r)), f = Ei(r, o, A, t, !1), n = f[0], i = f[1];
        c = We(n - A, (i - t) / a), w = a * c;
      }
      break;
  }
  return Array.isArray(e.size) && (c = qA(e.size[0], r), w = e.size.length === 2 ? qA(e.size[1], o) : c), [c, w];
}, Lf = function(e, A) {
  var t = Pe(180), r = [];
  return er(A).forEach(function(o, c) {
    if (c === 0) {
      var w = o[0];
      if (w.type === 20 && w.value === "to") {
        t = ms(o);
        return;
      } else if (Es(w)) {
        t = yn.parse(e, w);
        return;
      }
    }
    var a = En(e, o);
    r.push(a);
  }), {
    angle: t,
    stops: r,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, Yt = function(e, A) {
  var t = Pe(180), r = [];
  return er(A).forEach(function(o, c) {
    if (c === 0) {
      var w = o[0];
      if (w.type === 20 && ["top", "left", "right", "bottom"].indexOf(w.value) !== -1) {
        t = ms(o);
        return;
      } else if (Es(w)) {
        t = (yn.parse(e, w) + Pe(270)) % Pe(360);
        return;
      }
    }
    var a = En(e, o);
    r.push(a);
  }), {
    angle: t,
    stops: r,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, Kf = function(e, A) {
  var t = Pe(180), r = [], o = 1, c = 0, w = 3, a = [];
  return er(A).forEach(function(u, n) {
    var i = u[0];
    if (n === 0) {
      if (ZA(i) && i.value === "linear") {
        o = 1;
        return;
      } else if (ZA(i) && i.value === "radial") {
        o = 2;
        return;
      }
    }
    if (i.type === 18) {
      if (i.name === "from") {
        var f = vr.parse(e, i.values[0]);
        r.push({ stop: me, color: f });
      } else if (i.name === "to") {
        var f = vr.parse(e, i.values[0]);
        r.push({ stop: pr, color: f });
      } else if (i.name === "color-stop") {
        var l = i.values.filter(qr);
        if (l.length === 2) {
          var f = vr.parse(e, l[1]), h = l[0];
          $r(h) && r.push({
            stop: { type: 16, number: h.number * 100, flags: h.flags },
            color: f
          });
        }
      }
    }
  }), o === 1 ? {
    angle: (t + Pe(180)) % Pe(360),
    stops: r,
    type: o
  } : { size: w, shape: c, stops: r, position: a, type: o };
}, bs = "closest-side", Hs = "farthest-side", Is = "closest-corner", xs = "farthest-corner", Ss = "circle", Ls = "ellipse", Ks = "cover", Os = "contain", Of = function(e, A) {
  var t = 0, r = 3, o = [], c = [];
  return er(A).forEach(function(w, a) {
    var u = !0;
    if (a === 0) {
      var n = !1;
      u = w.reduce(function(f, l) {
        if (n)
          if (ZA(l))
            switch (l.value) {
              case "center":
                return c.push(oa), f;
              case "top":
              case "left":
                return c.push(me), f;
              case "right":
              case "bottom":
                return c.push(pr), f;
            }
          else
            (he(l) || Fr(l)) && c.push(l);
        else if (ZA(l))
          switch (l.value) {
            case Ss:
              return t = 0, !1;
            case Ls:
              return t = 1, !1;
            case "at":
              return n = !0, !1;
            case bs:
              return r = 0, !1;
            case Ks:
            case Hs:
              return r = 1, !1;
            case Os:
            case Is:
              return r = 2, !1;
            case xs:
              return r = 3, !1;
          }
        else if (Fr(l) || he(l))
          return Array.isArray(r) || (r = []), r.push(l), !1;
        return f;
      }, u);
    }
    if (u) {
      var i = En(e, w);
      o.push(i);
    }
  }), {
    size: r,
    shape: t,
    stops: o,
    position: c,
    type: 2
    /* RADIAL_GRADIENT */
  };
}, Zt = function(e, A) {
  var t = 0, r = 3, o = [], c = [];
  return er(A).forEach(function(w, a) {
    var u = !0;
    if (a === 0 ? u = w.reduce(function(i, f) {
      if (ZA(f))
        switch (f.value) {
          case "center":
            return c.push(oa), !1;
          case "top":
          case "left":
            return c.push(me), !1;
          case "right":
          case "bottom":
            return c.push(pr), !1;
        }
      else if (he(f) || Fr(f))
        return c.push(f), !1;
      return i;
    }, u) : a === 1 && (u = w.reduce(function(i, f) {
      if (ZA(f))
        switch (f.value) {
          case Ss:
            return t = 0, !1;
          case Ls:
            return t = 1, !1;
          case Os:
          case bs:
            return r = 0, !1;
          case Hs:
            return r = 1, !1;
          case Is:
            return r = 2, !1;
          case Ks:
          case xs:
            return r = 3, !1;
        }
      else if (Fr(f) || he(f))
        return Array.isArray(r) || (r = []), r.push(f), !1;
      return i;
    }, u)), u) {
      var n = En(e, w);
      o.push(n);
    }
  }), {
    size: r,
    shape: t,
    stops: o,
    position: c,
    type: 2
    /* RADIAL_GRADIENT */
  };
}, Df = function(e) {
  return e.type === 1;
}, Tf = function(e) {
  return e.type === 2;
}, aa = {
  name: "image",
  parse: function(e, A) {
    if (A.type === 22) {
      var t = {
        url: A.value,
        type: 0
        /* URL */
      };
      return e.cache.addImage(A.value), t;
    }
    if (A.type === 18) {
      var r = Ds[A.name];
      if (typeof r > "u")
        throw new Error('Attempting to parse an unsupported image function "' + A.name + '"');
      return r(e, A.values);
    }
    throw new Error("Unsupported image type " + A.type);
  }
};
function _f(e) {
  return !(e.type === 20 && e.value === "none") && (e.type !== 18 || !!Ds[e.name]);
}
var Ds = {
  "linear-gradient": Lf,
  "-moz-linear-gradient": Yt,
  "-ms-linear-gradient": Yt,
  "-o-linear-gradient": Yt,
  "-webkit-linear-gradient": Yt,
  "radial-gradient": Of,
  "-moz-radial-gradient": Zt,
  "-ms-radial-gradient": Zt,
  "-o-radial-gradient": Zt,
  "-webkit-radial-gradient": Zt,
  "-webkit-gradient": Kf
}, Rf = {
  name: "background-image",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    if (A.length === 0)
      return [];
    var t = A[0];
    return t.type === 20 && t.value === "none" ? [] : A.filter(function(r) {
      return qr(r) && _f(r);
    }).map(function(r) {
      return aa.parse(e, r);
    });
  }
}, Mf = {
  name: "background-origin",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.map(function(t) {
      if (ZA(t))
        switch (t.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
      return 0;
    });
  }
}, Nf = {
  name: "background-position",
  initialValue: "0% 0%",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return er(A).map(function(t) {
      return t.filter(he);
    }).map(Cs);
  }
}, Gf = {
  name: "background-repeat",
  initialValue: "repeat",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return er(A).map(function(t) {
      return t.filter(ZA).map(function(r) {
        return r.value;
      }).join(" ");
    }).map(Pf);
  }
}, Pf = function(e) {
  switch (e) {
    case "no-repeat":
      return 1;
    case "repeat-x":
    case "repeat no-repeat":
      return 2;
    case "repeat-y":
    case "no-repeat repeat":
      return 3;
    case "repeat":
    default:
      return 0;
  }
}, zr;
(function(e) {
  e.AUTO = "auto", e.CONTAIN = "contain", e.COVER = "cover";
})(zr || (zr = {}));
var Vf = {
  name: "background-size",
  initialValue: "0",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return er(A).map(function(t) {
      return t.filter(kf);
    });
  }
}, kf = function(e) {
  return ZA(e) || he(e);
}, mn = function(e) {
  return {
    name: "border-" + e + "-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color"
  };
}, jf = mn("top"), Xf = mn("right"), Jf = mn("bottom"), Wf = mn("left"), bn = function(e) {
  return {
    name: "border-radius-" + e,
    initialValue: "0 0",
    prefix: !1,
    type: 1,
    parse: function(A, t) {
      return Cs(t.filter(he));
    }
  };
}, Yf = bn("top-left"), Zf = bn("top-right"), zf = bn("bottom-right"), qf = bn("bottom-left"), Hn = function(e) {
  return {
    name: "border-" + e + "-style",
    initialValue: "solid",
    prefix: !1,
    type: 2,
    parse: function(A, t) {
      switch (t) {
        case "none":
          return 0;
        case "dashed":
          return 2;
        case "dotted":
          return 3;
        case "double":
          return 4;
      }
      return 1;
    }
  };
}, $f = Hn("top"), Al = Hn("right"), el = Hn("bottom"), rl = Hn("left"), In = function(e) {
  return {
    name: "border-" + e + "-width",
    initialValue: "0",
    type: 0,
    prefix: !1,
    parse: function(A, t) {
      return It(t) ? t.number : 0;
    }
  };
}, tl = In("top"), nl = In("right"), ol = In("bottom"), al = In("left"), il = {
  name: "color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, sl = {
  name: "direction",
  initialValue: "ltr",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "rtl":
        return 1;
      case "ltr":
      default:
        return 0;
    }
  }
}, cl = {
  name: "display",
  initialValue: "inline-block",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.filter(ZA).reduce(
      function(t, r) {
        return t | ul(r.value);
      },
      0
      /* NONE */
    );
  }
}, ul = function(e) {
  switch (e) {
    case "block":
    case "-webkit-box":
      return 2;
    case "inline":
      return 4;
    case "run-in":
      return 8;
    case "flow":
      return 16;
    case "flow-root":
      return 32;
    case "table":
      return 64;
    case "flex":
    case "-webkit-flex":
      return 128;
    case "grid":
    case "-ms-grid":
      return 256;
    case "ruby":
      return 512;
    case "subgrid":
      return 1024;
    case "list-item":
      return 2048;
    case "table-row-group":
      return 4096;
    case "table-header-group":
      return 8192;
    case "table-footer-group":
      return 16384;
    case "table-row":
      return 32768;
    case "table-cell":
      return 65536;
    case "table-column-group":
      return 131072;
    case "table-column":
      return 262144;
    case "table-caption":
      return 524288;
    case "ruby-base":
      return 1048576;
    case "ruby-text":
      return 2097152;
    case "ruby-base-container":
      return 4194304;
    case "ruby-text-container":
      return 8388608;
    case "contents":
      return 16777216;
    case "inline-block":
      return 33554432;
    case "inline-list-item":
      return 67108864;
    case "inline-table":
      return 134217728;
    case "inline-flex":
      return 268435456;
    case "inline-grid":
      return 536870912;
  }
  return 0;
}, Bl = {
  name: "float",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "left":
        return 1;
      case "right":
        return 2;
      case "inline-start":
        return 3;
      case "inline-end":
        return 4;
    }
    return 0;
  }
}, fl = {
  name: "letter-spacing",
  initialValue: "0",
  prefix: !1,
  type: 0,
  parse: function(e, A) {
    return A.type === 20 && A.value === "normal" ? 0 : A.type === 17 || A.type === 15 ? A.number : 0;
  }
}, ln;
(function(e) {
  e.NORMAL = "normal", e.STRICT = "strict";
})(ln || (ln = {}));
var ll = {
  name: "line-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "strict":
        return ln.STRICT;
      case "normal":
      default:
        return ln.NORMAL;
    }
  }
}, gl = {
  name: "line-height",
  initialValue: "normal",
  prefix: !1,
  type: 4
  /* TOKEN_VALUE */
}, mi = function(e, A) {
  return ZA(e) && e.value === "normal" ? 1.2 * A : e.type === 17 ? A * e.number : he(e) ? qA(e, A) : A;
}, wl = {
  name: "list-style-image",
  initialValue: "none",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    return A.type === 20 && A.value === "none" ? null : aa.parse(e, A);
  }
}, hl = {
  name: "list-style-position",
  initialValue: "outside",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "inside":
        return 0;
      case "outside":
      default:
        return 1;
    }
  }
}, Wo = {
  name: "list-style-type",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "disc":
        return 0;
      case "circle":
        return 1;
      case "square":
        return 2;
      case "decimal":
        return 3;
      case "cjk-decimal":
        return 4;
      case "decimal-leading-zero":
        return 5;
      case "lower-roman":
        return 6;
      case "upper-roman":
        return 7;
      case "lower-greek":
        return 8;
      case "lower-alpha":
        return 9;
      case "upper-alpha":
        return 10;
      case "arabic-indic":
        return 11;
      case "armenian":
        return 12;
      case "bengali":
        return 13;
      case "cambodian":
        return 14;
      case "cjk-earthly-branch":
        return 15;
      case "cjk-heavenly-stem":
        return 16;
      case "cjk-ideographic":
        return 17;
      case "devanagari":
        return 18;
      case "ethiopic-numeric":
        return 19;
      case "georgian":
        return 20;
      case "gujarati":
        return 21;
      case "gurmukhi":
        return 22;
      case "hebrew":
        return 22;
      case "hiragana":
        return 23;
      case "hiragana-iroha":
        return 24;
      case "japanese-formal":
        return 25;
      case "japanese-informal":
        return 26;
      case "kannada":
        return 27;
      case "katakana":
        return 28;
      case "katakana-iroha":
        return 29;
      case "khmer":
        return 30;
      case "korean-hangul-formal":
        return 31;
      case "korean-hanja-formal":
        return 32;
      case "korean-hanja-informal":
        return 33;
      case "lao":
        return 34;
      case "lower-armenian":
        return 35;
      case "malayalam":
        return 36;
      case "mongolian":
        return 37;
      case "myanmar":
        return 38;
      case "oriya":
        return 39;
      case "persian":
        return 40;
      case "simp-chinese-formal":
        return 41;
      case "simp-chinese-informal":
        return 42;
      case "tamil":
        return 43;
      case "telugu":
        return 44;
      case "thai":
        return 45;
      case "tibetan":
        return 46;
      case "trad-chinese-formal":
        return 47;
      case "trad-chinese-informal":
        return 48;
      case "upper-armenian":
        return 49;
      case "disclosure-open":
        return 50;
      case "disclosure-closed":
        return 51;
      case "none":
      default:
        return -1;
    }
  }
}, xn = function(e) {
  return {
    name: "margin-" + e,
    initialValue: "0",
    prefix: !1,
    type: 4
    /* TOKEN_VALUE */
  };
}, Ql = xn("top"), dl = xn("right"), pl = xn("bottom"), Cl = xn("left"), vl = {
  name: "overflow",
  initialValue: "visible",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.filter(ZA).map(function(t) {
      switch (t.value) {
        case "hidden":
          return 1;
        case "scroll":
          return 2;
        case "clip":
          return 3;
        case "auto":
          return 4;
        case "visible":
        default:
          return 0;
      }
    });
  }
}, Ul = {
  name: "overflow-wrap",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "break-word":
        return "break-word";
      case "normal":
      default:
        return "normal";
    }
  }
}, Sn = function(e) {
  return {
    name: "padding-" + e,
    initialValue: "0",
    prefix: !1,
    type: 3,
    format: "length-percentage"
  };
}, Fl = Sn("top"), yl = Sn("right"), El = Sn("bottom"), ml = Sn("left"), bl = {
  name: "text-align",
  initialValue: "left",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "right":
        return 2;
      case "center":
      case "justify":
        return 1;
      case "left":
      default:
        return 0;
    }
  }
}, Hl = {
  name: "position",
  initialValue: "static",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "relative":
        return 1;
      case "absolute":
        return 2;
      case "fixed":
        return 3;
      case "sticky":
        return 4;
    }
    return 0;
  }
}, Il = {
  name: "text-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return A.length === 1 && Jo(A[0], "none") ? [] : er(A).map(function(t) {
      for (var r = {
        color: ur.TRANSPARENT,
        offsetX: me,
        offsetY: me,
        blur: me
      }, o = 0, c = 0; c < t.length; c++) {
        var w = t[c];
        Fr(w) ? (o === 0 ? r.offsetX = w : o === 1 ? r.offsetY = w : r.blur = w, o++) : r.color = vr.parse(e, w);
      }
      return r;
    });
  }
}, xl = {
  name: "text-transform",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "uppercase":
        return 2;
      case "lowercase":
        return 1;
      case "capitalize":
        return 3;
    }
    return 0;
  }
}, Sl = {
  name: "transform",
  initialValue: "none",
  prefix: !0,
  type: 0,
  parse: function(e, A) {
    if (A.type === 20 && A.value === "none")
      return null;
    if (A.type === 18) {
      var t = Ol[A.name];
      if (typeof t > "u")
        throw new Error('Attempting to parse an unsupported transform function "' + A.name + '"');
      return t(A.values);
    }
    return null;
  }
}, Ll = function(e) {
  var A = e.filter(function(t) {
    return t.type === 17;
  }).map(function(t) {
    return t.number;
  });
  return A.length === 6 ? A : null;
}, Kl = function(e) {
  var A = e.filter(function(u) {
    return u.type === 17;
  }).map(function(u) {
    return u.number;
  }), t = A[0], r = A[1];
  A[2], A[3];
  var o = A[4], c = A[5];
  A[6], A[7], A[8], A[9], A[10], A[11];
  var w = A[12], a = A[13];
  return A[14], A[15], A.length === 16 ? [t, r, o, c, w, a] : null;
}, Ol = {
  matrix: Ll,
  matrix3d: Kl
}, bi = {
  type: 16,
  number: 50,
  flags: Ht
}, Dl = [bi, bi], Tl = {
  name: "transform-origin",
  initialValue: "50% 50%",
  prefix: !0,
  type: 1,
  parse: function(e, A) {
    var t = A.filter(he);
    return t.length !== 2 ? Dl : [t[0], t[1]];
  }
}, _l = {
  name: "visible",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "hidden":
        return 1;
      case "collapse":
        return 2;
      case "visible":
      default:
        return 0;
    }
  }
}, Ut;
(function(e) {
  e.NORMAL = "normal", e.BREAK_ALL = "break-all", e.KEEP_ALL = "keep-all";
})(Ut || (Ut = {}));
var Rl = {
  name: "word-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "break-all":
        return Ut.BREAK_ALL;
      case "keep-all":
        return Ut.KEEP_ALL;
      case "normal":
      default:
        return Ut.NORMAL;
    }
  }
}, Ml = {
  name: "z-index",
  initialValue: "auto",
  prefix: !1,
  type: 0,
  parse: function(e, A) {
    if (A.type === 20)
      return { auto: !0, order: 0 };
    if ($r(A))
      return { auto: !1, order: A.number };
    throw new Error("Invalid z-index number parsed");
  }
}, Ts = {
  name: "time",
  parse: function(e, A) {
    if (A.type === 15)
      switch (A.unit.toLowerCase()) {
        case "s":
          return 1e3 * A.number;
        case "ms":
          return A.number;
      }
    throw new Error("Unsupported time type");
  }
}, Nl = {
  name: "opacity",
  initialValue: "1",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    return $r(A) ? A.number : 1;
  }
}, Gl = {
  name: "text-decoration-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, Pl = {
  name: "text-decoration-line",
  initialValue: "none",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.filter(ZA).map(function(t) {
      switch (t.value) {
        case "underline":
          return 1;
        case "overline":
          return 2;
        case "line-through":
          return 3;
        case "none":
          return 4;
      }
      return 0;
    }).filter(function(t) {
      return t !== 0;
    });
  }
}, Vl = {
  name: "font-family",
  initialValue: "",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    var t = [], r = [];
    return A.forEach(function(o) {
      switch (o.type) {
        case 20:
        case 0:
          t.push(o.value);
          break;
        case 17:
          t.push(o.number.toString());
          break;
        case 4:
          r.push(t.join(" ")), t.length = 0;
          break;
      }
    }), t.length && r.push(t.join(" ")), r.map(function(o) {
      return o.indexOf(" ") === -1 ? o : "'" + o + "'";
    });
  }
}, kl = {
  name: "font-size",
  initialValue: "0",
  prefix: !1,
  type: 3,
  format: "length"
}, jl = {
  name: "font-weight",
  initialValue: "normal",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    if ($r(A))
      return A.number;
    if (ZA(A))
      switch (A.value) {
        case "bold":
          return 700;
        case "normal":
        default:
          return 400;
      }
    return 400;
  }
}, Xl = {
  name: "font-variant",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return A.filter(ZA).map(function(t) {
      return t.value;
    });
  }
}, Jl = {
  name: "font-style",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "oblique":
        return "oblique";
      case "italic":
        return "italic";
      case "normal":
      default:
        return "normal";
    }
  }
}, de = function(e, A) {
  return (e & A) !== 0;
}, Wl = {
  name: "content",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    if (A.length === 0)
      return [];
    var t = A[0];
    return t.type === 20 && t.value === "none" ? [] : A;
  }
}, Yl = {
  name: "counter-increment",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(e, A) {
    if (A.length === 0)
      return null;
    var t = A[0];
    if (t.type === 20 && t.value === "none")
      return null;
    for (var r = [], o = A.filter(ps), c = 0; c < o.length; c++) {
      var w = o[c], a = o[c + 1];
      if (w.type === 20) {
        var u = a && $r(a) ? a.number : 1;
        r.push({ counter: w.value, increment: u });
      }
    }
    return r;
  }
}, Zl = {
  name: "counter-reset",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(e, A) {
    if (A.length === 0)
      return [];
    for (var t = [], r = A.filter(ps), o = 0; o < r.length; o++) {
      var c = r[o], w = r[o + 1];
      if (ZA(c) && c.value !== "none") {
        var a = w && $r(w) ? w.number : 0;
        t.push({ counter: c.value, reset: a });
      }
    }
    return t;
  }
}, zl = {
  name: "duration",
  initialValue: "0s",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.filter(It).map(function(t) {
      return Ts.parse(e, t);
    });
  }
}, ql = {
  name: "quotes",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(e, A) {
    if (A.length === 0)
      return null;
    var t = A[0];
    if (t.type === 20 && t.value === "none")
      return null;
    var r = [], o = A.filter(yf);
    if (o.length % 2 !== 0)
      return null;
    for (var c = 0; c < o.length; c += 2) {
      var w = o[c].value, a = o[c + 1].value;
      r.push({ open: w, close: a });
    }
    return r;
  }
}, Hi = function(e, A, t) {
  if (!e)
    return "";
  var r = e[Math.min(A, e.length - 1)];
  return r ? t ? r.open : r.close : "";
}, $l = {
  name: "box-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return A.length === 1 && Jo(A[0], "none") ? [] : er(A).map(function(t) {
      for (var r = {
        color: 255,
        offsetX: me,
        offsetY: me,
        blur: me,
        spread: me,
        inset: !1
      }, o = 0, c = 0; c < t.length; c++) {
        var w = t[c];
        Jo(w, "inset") ? r.inset = !0 : Fr(w) ? (o === 0 ? r.offsetX = w : o === 1 ? r.offsetY = w : o === 2 ? r.blur = w : r.spread = w, o++) : r.color = vr.parse(e, w);
      }
      return r;
    });
  }
}, Ag = {
  name: "paint-order",
  initialValue: "normal",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    var t = [
      0,
      1,
      2
      /* MARKERS */
    ], r = [];
    return A.filter(ZA).forEach(function(o) {
      switch (o.value) {
        case "stroke":
          r.push(
            1
            /* STROKE */
          );
          break;
        case "fill":
          r.push(
            0
            /* FILL */
          );
          break;
        case "markers":
          r.push(
            2
            /* MARKERS */
          );
          break;
      }
    }), t.forEach(function(o) {
      r.indexOf(o) === -1 && r.push(o);
    }), r;
  }
}, eg = {
  name: "-webkit-text-stroke-color",
  initialValue: "currentcolor",
  prefix: !1,
  type: 3,
  format: "color"
}, rg = {
  name: "-webkit-text-stroke-width",
  initialValue: "0",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    return It(A) ? A.number : 0;
  }
}, tg = (
  /** @class */
  function() {
    function e(A, t) {
      var r, o;
      this.animationDuration = wA(A, zl, t.animationDuration), this.backgroundClip = wA(A, bf, t.backgroundClip), this.backgroundColor = wA(A, Hf, t.backgroundColor), this.backgroundImage = wA(A, Rf, t.backgroundImage), this.backgroundOrigin = wA(A, Mf, t.backgroundOrigin), this.backgroundPosition = wA(A, Nf, t.backgroundPosition), this.backgroundRepeat = wA(A, Gf, t.backgroundRepeat), this.backgroundSize = wA(A, Vf, t.backgroundSize), this.borderTopColor = wA(A, jf, t.borderTopColor), this.borderRightColor = wA(A, Xf, t.borderRightColor), this.borderBottomColor = wA(A, Jf, t.borderBottomColor), this.borderLeftColor = wA(A, Wf, t.borderLeftColor), this.borderTopLeftRadius = wA(A, Yf, t.borderTopLeftRadius), this.borderTopRightRadius = wA(A, Zf, t.borderTopRightRadius), this.borderBottomRightRadius = wA(A, zf, t.borderBottomRightRadius), this.borderBottomLeftRadius = wA(A, qf, t.borderBottomLeftRadius), this.borderTopStyle = wA(A, $f, t.borderTopStyle), this.borderRightStyle = wA(A, Al, t.borderRightStyle), this.borderBottomStyle = wA(A, el, t.borderBottomStyle), this.borderLeftStyle = wA(A, rl, t.borderLeftStyle), this.borderTopWidth = wA(A, tl, t.borderTopWidth), this.borderRightWidth = wA(A, nl, t.borderRightWidth), this.borderBottomWidth = wA(A, ol, t.borderBottomWidth), this.borderLeftWidth = wA(A, al, t.borderLeftWidth), this.boxShadow = wA(A, $l, t.boxShadow), this.color = wA(A, il, t.color), this.direction = wA(A, sl, t.direction), this.display = wA(A, cl, t.display), this.float = wA(A, Bl, t.cssFloat), this.fontFamily = wA(A, Vl, t.fontFamily), this.fontSize = wA(A, kl, t.fontSize), this.fontStyle = wA(A, Jl, t.fontStyle), this.fontVariant = wA(A, Xl, t.fontVariant), this.fontWeight = wA(A, jl, t.fontWeight), this.letterSpacing = wA(A, fl, t.letterSpacing), this.lineBreak = wA(A, ll, t.lineBreak), this.lineHeight = wA(A, gl, t.lineHeight), this.listStyleImage = wA(A, wl, t.listStyleImage), this.listStylePosition = wA(A, hl, t.listStylePosition), this.listStyleType = wA(A, Wo, t.listStyleType), this.marginTop = wA(A, Ql, t.marginTop), this.marginRight = wA(A, dl, t.marginRight), this.marginBottom = wA(A, pl, t.marginBottom), this.marginLeft = wA(A, Cl, t.marginLeft), this.opacity = wA(A, Nl, t.opacity);
      var c = wA(A, vl, t.overflow);
      this.overflowX = c[0], this.overflowY = c[c.length > 1 ? 1 : 0], this.overflowWrap = wA(A, Ul, t.overflowWrap), this.paddingTop = wA(A, Fl, t.paddingTop), this.paddingRight = wA(A, yl, t.paddingRight), this.paddingBottom = wA(A, El, t.paddingBottom), this.paddingLeft = wA(A, ml, t.paddingLeft), this.paintOrder = wA(A, Ag, t.paintOrder), this.position = wA(A, Hl, t.position), this.textAlign = wA(A, bl, t.textAlign), this.textDecorationColor = wA(A, Gl, (r = t.textDecorationColor) !== null && r !== void 0 ? r : t.color), this.textDecorationLine = wA(A, Pl, (o = t.textDecorationLine) !== null && o !== void 0 ? o : t.textDecoration), this.textShadow = wA(A, Il, t.textShadow), this.textTransform = wA(A, xl, t.textTransform), this.transform = wA(A, Sl, t.transform), this.transformOrigin = wA(A, Tl, t.transformOrigin), this.visibility = wA(A, _l, t.visibility), this.webkitTextStrokeColor = wA(A, eg, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = wA(A, rg, t.webkitTextStrokeWidth), this.wordBreak = wA(A, Rl, t.wordBreak), this.zIndex = wA(A, Ml, t.zIndex);
    }
    return e.prototype.isVisible = function() {
      return this.display > 0 && this.opacity > 0 && this.visibility === 0;
    }, e.prototype.isTransparent = function() {
      return Ur(this.backgroundColor);
    }, e.prototype.isTransformed = function() {
      return this.transform !== null;
    }, e.prototype.isPositioned = function() {
      return this.position !== 0;
    }, e.prototype.isPositionedWithZIndex = function() {
      return this.isPositioned() && !this.zIndex.auto;
    }, e.prototype.isFloating = function() {
      return this.float !== 0;
    }, e.prototype.isInlineLevel = function() {
      return de(
        this.display,
        4
        /* INLINE */
      ) || de(
        this.display,
        33554432
        /* INLINE_BLOCK */
      ) || de(
        this.display,
        268435456
        /* INLINE_FLEX */
      ) || de(
        this.display,
        536870912
        /* INLINE_GRID */
      ) || de(
        this.display,
        67108864
        /* INLINE_LIST_ITEM */
      ) || de(
        this.display,
        134217728
        /* INLINE_TABLE */
      );
    }, e;
  }()
), ng = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(A, t) {
      this.content = wA(A, Wl, t.content), this.quotes = wA(A, ql, t.quotes);
    }
    return e;
  }()
), Ii = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(A, t) {
      this.counterIncrement = wA(A, Yl, t.counterIncrement), this.counterReset = wA(A, Zl, t.counterReset);
    }
    return e;
  }()
), wA = function(e, A, t) {
  var r = new Qs(), o = t !== null && typeof t < "u" ? t.toString() : A.initialValue;
  r.write(o);
  var c = new ds(r.read());
  switch (A.type) {
    case 2:
      var w = c.parseComponentValue();
      return A.parse(e, ZA(w) ? w.value : A.initialValue);
    case 0:
      return A.parse(e, c.parseComponentValue());
    case 1:
      return A.parse(e, c.parseComponentValues());
    case 4:
      return c.parseComponentValue();
    case 3:
      switch (A.format) {
        case "angle":
          return yn.parse(e, c.parseComponentValue());
        case "color":
          return vr.parse(e, c.parseComponentValue());
        case "image":
          return aa.parse(e, c.parseComponentValue());
        case "length":
          var a = c.parseComponentValue();
          return Fr(a) ? a : me;
        case "length-percentage":
          var u = c.parseComponentValue();
          return he(u) ? u : me;
        case "time":
          return Ts.parse(e, c.parseComponentValue());
      }
      break;
  }
}, og = "data-html2canvas-debug", ag = function(e) {
  var A = e.getAttribute(og);
  switch (A) {
    case "all":
      return 1;
    case "clone":
      return 2;
    case "parse":
      return 3;
    case "render":
      return 4;
    default:
      return 0;
  }
}, Yo = function(e, A) {
  var t = ag(e);
  return t === 1 || A === t;
}, rr = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(A, t) {
      if (this.context = A, this.textNodes = [], this.elements = [], this.flags = 0, Yo(
        t,
        3
        /* PARSE */
      ))
        debugger;
      this.styles = new tg(A, window.getComputedStyle(t, null)), qo(t) && (this.styles.animationDuration.some(function(r) {
        return r > 0;
      }) && (t.style.animationDuration = "0s"), this.styles.transform !== null && (t.style.transform = "none")), this.bounds = Un(this.context, t), Yo(
        t,
        4
        /* RENDER */
      ) && (this.flags |= 16);
    }
    return e;
  }()
), ig = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", xi = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", dt = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var zt = 0; zt < xi.length; zt++)
  dt[xi.charCodeAt(zt)] = zt;
var sg = function(e) {
  var A = e.length * 0.75, t = e.length, r, o = 0, c, w, a, u;
  e[e.length - 1] === "=" && (A--, e[e.length - 2] === "=" && A--);
  var n = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A), i = Array.isArray(n) ? n : new Uint8Array(n);
  for (r = 0; r < t; r += 4)
    c = dt[e.charCodeAt(r)], w = dt[e.charCodeAt(r + 1)], a = dt[e.charCodeAt(r + 2)], u = dt[e.charCodeAt(r + 3)], i[o++] = c << 2 | w >> 4, i[o++] = (w & 15) << 4 | a >> 2, i[o++] = (a & 3) << 6 | u & 63;
  return n;
}, cg = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 2)
    t.push(e[r + 1] << 8 | e[r]);
  return t;
}, ug = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 4)
    t.push(e[r + 3] << 24 | e[r + 2] << 16 | e[r + 1] << 8 | e[r]);
  return t;
}, Kr = 5, ia = 11, po = 2, Bg = ia - Kr, _s = 65536 >> Kr, fg = 1 << Kr, Co = fg - 1, lg = 1024 >> Kr, gg = _s + lg, wg = gg, hg = 32, Qg = wg + hg, dg = 65536 >> ia, pg = 1 << Bg, Cg = pg - 1, Si = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint16Array(Array.prototype.slice.call(e, A, t));
}, vg = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint32Array(Array.prototype.slice.call(e, A, t));
}, Ug = function(e, A) {
  var t = sg(e), r = Array.isArray(t) ? ug(t) : new Uint32Array(t), o = Array.isArray(t) ? cg(t) : new Uint16Array(t), c = 24, w = Si(o, c / 2, r[4] / 2), a = r[5] === 2 ? Si(o, (c + r[4]) / 2) : vg(r, Math.ceil((c + r[4]) / 4));
  return new Fg(r[0], r[1], r[2], r[3], w, a);
}, Fg = (
  /** @class */
  function() {
    function e(A, t, r, o, c, w) {
      this.initialValue = A, this.errorValue = t, this.highStart = r, this.highValueIndex = o, this.index = c, this.data = w;
    }
    return e.prototype.get = function(A) {
      var t;
      if (A >= 0) {
        if (A < 55296 || A > 56319 && A <= 65535)
          return t = this.index[A >> Kr], t = (t << po) + (A & Co), this.data[t];
        if (A <= 65535)
          return t = this.index[_s + (A - 55296 >> Kr)], t = (t << po) + (A & Co), this.data[t];
        if (A < this.highStart)
          return t = Qg - dg + (A >> ia), t = this.index[t], t += A >> Kr & Cg, t = this.index[t], t = (t << po) + (A & Co), this.data[t];
        if (A <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, e;
  }()
), Li = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", yg = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var qt = 0; qt < Li.length; qt++)
  yg[Li.charCodeAt(qt)] = qt;
var Eg = 1, vo = 2, Uo = 3, Ki = 4, Oi = 5, mg = 7, Di = 8, Fo = 9, yo = 10, Ti = 11, _i = 12, Ri = 13, Mi = 14, Eo = 15, bg = function(e) {
  for (var A = [], t = 0, r = e.length; t < r; ) {
    var o = e.charCodeAt(t++);
    if (o >= 55296 && o <= 56319 && t < r) {
      var c = e.charCodeAt(t++);
      (c & 64512) === 56320 ? A.push(((o & 1023) << 10) + (c & 1023) + 65536) : (A.push(o), t--);
    } else
      A.push(o);
  }
  return A;
}, Hg = function() {
  for (var e = [], A = 0; A < arguments.length; A++)
    e[A] = arguments[A];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, e);
  var t = e.length;
  if (!t)
    return "";
  for (var r = [], o = -1, c = ""; ++o < t; ) {
    var w = e[o];
    w <= 65535 ? r.push(w) : (w -= 65536, r.push((w >> 10) + 55296, w % 1024 + 56320)), (o + 1 === t || r.length > 16384) && (c += String.fromCharCode.apply(String, r), r.length = 0);
  }
  return c;
}, Ig = Ug(ig), Me = "×", mo = "÷", xg = function(e) {
  return Ig.get(e);
}, Sg = function(e, A, t) {
  var r = t - 2, o = A[r], c = A[t - 1], w = A[t];
  if (c === vo && w === Uo)
    return Me;
  if (c === vo || c === Uo || c === Ki || w === vo || w === Uo || w === Ki)
    return mo;
  if (c === Di && [Di, Fo, Ti, _i].indexOf(w) !== -1 || (c === Ti || c === Fo) && (w === Fo || w === yo) || (c === _i || c === yo) && w === yo || w === Ri || w === Oi || w === mg || c === Eg)
    return Me;
  if (c === Ri && w === Mi) {
    for (; o === Oi; )
      o = A[--r];
    if (o === Mi)
      return Me;
  }
  if (c === Eo && w === Eo) {
    for (var a = 0; o === Eo; )
      a++, o = A[--r];
    if (a % 2 === 0)
      return Me;
  }
  return mo;
}, Lg = function(e) {
  var A = bg(e), t = A.length, r = 0, o = 0, c = A.map(xg);
  return {
    next: function() {
      if (r >= t)
        return { done: !0, value: null };
      for (var w = Me; r < t && (w = Sg(A, c, ++r)) === Me; )
        ;
      if (w !== Me || r === t) {
        var a = Hg.apply(null, A.slice(o, r));
        return o = r, { value: a, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, Kg = function(e) {
  for (var A = Lg(e), t = [], r; !(r = A.next()).done; )
    r.value && t.push(r.value.slice());
  return t;
}, Og = function(e) {
  var A = 123;
  if (e.createRange) {
    var t = e.createRange();
    if (t.getBoundingClientRect) {
      var r = e.createElement("boundtest");
      r.style.height = A + "px", r.style.display = "block", e.body.appendChild(r), t.selectNode(r);
      var o = t.getBoundingClientRect(), c = Math.round(o.height);
      if (e.body.removeChild(r), c === A)
        return !0;
    }
  }
  return !1;
}, Dg = function(e) {
  var A = e.createElement("boundtest");
  A.style.width = "50px", A.style.display = "block", A.style.fontSize = "12px", A.style.letterSpacing = "0px", A.style.wordSpacing = "0px", e.body.appendChild(A);
  var t = e.createRange();
  A.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
  var r = A.firstChild, o = Fn(r.data).map(function(u) {
    return fe(u);
  }), c = 0, w = {}, a = o.every(function(u, n) {
    t.setStart(r, c), t.setEnd(r, c + u.length);
    var i = t.getBoundingClientRect();
    c += u.length;
    var f = i.x > w.x || i.y > w.y;
    return w = i, n === 0 ? !0 : f;
  });
  return e.body.removeChild(A), a;
}, Tg = function() {
  return typeof new Image().crossOrigin < "u";
}, _g = function() {
  return typeof new XMLHttpRequest().responseType == "string";
}, Rg = function(e) {
  var A = new Image(), t = e.createElement("canvas"), r = t.getContext("2d");
  if (!r)
    return !1;
  A.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
  try {
    r.drawImage(A, 0, 0), t.toDataURL();
  } catch {
    return !1;
  }
  return !0;
}, Ni = function(e) {
  return e[0] === 0 && e[1] === 255 && e[2] === 0 && e[3] === 255;
}, Mg = function(e) {
  var A = e.createElement("canvas"), t = 100;
  A.width = t, A.height = t;
  var r = A.getContext("2d");
  if (!r)
    return Promise.reject(!1);
  r.fillStyle = "rgb(0, 255, 0)", r.fillRect(0, 0, t, t);
  var o = new Image(), c = A.toDataURL();
  o.src = c;
  var w = Zo(t, t, 0, 0, o);
  return r.fillStyle = "red", r.fillRect(0, 0, t, t), Gi(w).then(function(a) {
    r.drawImage(a, 0, 0);
    var u = r.getImageData(0, 0, t, t).data;
    r.fillStyle = "red", r.fillRect(0, 0, t, t);
    var n = e.createElement("div");
    return n.style.backgroundImage = "url(" + c + ")", n.style.height = t + "px", Ni(u) ? Gi(Zo(t, t, 0, 0, n)) : Promise.reject(!1);
  }).then(function(a) {
    return r.drawImage(a, 0, 0), Ni(r.getImageData(0, 0, t, t).data);
  }).catch(function() {
    return !1;
  });
}, Zo = function(e, A, t, r, o) {
  var c = "http://www.w3.org/2000/svg", w = document.createElementNS(c, "svg"), a = document.createElementNS(c, "foreignObject");
  return w.setAttributeNS(null, "width", e.toString()), w.setAttributeNS(null, "height", A.toString()), a.setAttributeNS(null, "width", "100%"), a.setAttributeNS(null, "height", "100%"), a.setAttributeNS(null, "x", t.toString()), a.setAttributeNS(null, "y", r.toString()), a.setAttributeNS(null, "externalResourcesRequired", "true"), w.appendChild(a), a.appendChild(o), w;
}, Gi = function(e) {
  return new Promise(function(A, t) {
    var r = new Image();
    r.onload = function() {
      return A(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e));
  });
}, Ee = {
  get SUPPORT_RANGE_BOUNDS() {
    var e = Og(document);
    return Object.defineProperty(Ee, "SUPPORT_RANGE_BOUNDS", { value: e }), e;
  },
  get SUPPORT_WORD_BREAKING() {
    var e = Ee.SUPPORT_RANGE_BOUNDS && Dg(document);
    return Object.defineProperty(Ee, "SUPPORT_WORD_BREAKING", { value: e }), e;
  },
  get SUPPORT_SVG_DRAWING() {
    var e = Rg(document);
    return Object.defineProperty(Ee, "SUPPORT_SVG_DRAWING", { value: e }), e;
  },
  get SUPPORT_FOREIGNOBJECT_DRAWING() {
    var e = typeof Array.from == "function" && typeof window.fetch == "function" ? Mg(document) : Promise.resolve(!1);
    return Object.defineProperty(Ee, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: e }), e;
  },
  get SUPPORT_CORS_IMAGES() {
    var e = Tg();
    return Object.defineProperty(Ee, "SUPPORT_CORS_IMAGES", { value: e }), e;
  },
  get SUPPORT_RESPONSE_TYPE() {
    var e = _g();
    return Object.defineProperty(Ee, "SUPPORT_RESPONSE_TYPE", { value: e }), e;
  },
  get SUPPORT_CORS_XHR() {
    var e = "withCredentials" in new XMLHttpRequest();
    return Object.defineProperty(Ee, "SUPPORT_CORS_XHR", { value: e }), e;
  },
  get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
    var e = !!(typeof Intl < "u" && Intl.Segmenter);
    return Object.defineProperty(Ee, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value: e }), e;
  }
}, Ft = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(A, t) {
      this.text = A, this.bounds = t;
    }
    return e;
  }()
), Ng = function(e, A, t, r) {
  var o = Vg(A, t), c = [], w = 0;
  return o.forEach(function(a) {
    if (t.textDecorationLine.length || a.trim().length > 0)
      if (Ee.SUPPORT_RANGE_BOUNDS) {
        var u = Pi(r, w, a.length).getClientRects();
        if (u.length > 1) {
          var n = sa(a), i = 0;
          n.forEach(function(l) {
            c.push(new Ft(l, Br.fromDOMRectList(e, Pi(r, i + w, l.length).getClientRects()))), i += l.length;
          });
        } else
          c.push(new Ft(a, Br.fromDOMRectList(e, u)));
      } else {
        var f = r.splitText(a.length);
        c.push(new Ft(a, Gg(e, r))), r = f;
      }
    else
      Ee.SUPPORT_RANGE_BOUNDS || (r = r.splitText(a.length));
    w += a.length;
  }), c;
}, Gg = function(e, A) {
  var t = A.ownerDocument;
  if (t) {
    var r = t.createElement("html2canvaswrapper");
    r.appendChild(A.cloneNode(!0));
    var o = A.parentNode;
    if (o) {
      o.replaceChild(r, A);
      var c = Un(e, r);
      return r.firstChild && o.replaceChild(r.firstChild, r), c;
    }
  }
  return Br.EMPTY;
}, Pi = function(e, A, t) {
  var r = e.ownerDocument;
  if (!r)
    throw new Error("Node has no owner document");
  var o = r.createRange();
  return o.setStart(e, A), o.setEnd(e, A + t), o;
}, sa = function(e) {
  if (Ee.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var A = new Intl.Segmenter(void 0, { granularity: "grapheme" });
    return Array.from(A.segment(e)).map(function(t) {
      return t.segment;
    });
  }
  return Kg(e);
}, Pg = function(e, A) {
  if (Ee.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var t = new Intl.Segmenter(void 0, {
      granularity: "word"
    });
    return Array.from(t.segment(e)).map(function(r) {
      return r.segment;
    });
  }
  return jg(e, A);
}, Vg = function(e, A) {
  return A.letterSpacing !== 0 ? sa(e) : Pg(e, A);
}, kg = [32, 160, 4961, 65792, 65793, 4153, 4241], jg = function(e, A) {
  for (var t = QB(e, {
    lineBreak: A.lineBreak,
    wordBreak: A.overflowWrap === "break-word" ? "break-word" : A.wordBreak
  }), r = [], o, c = function() {
    if (o.value) {
      var w = o.value.slice(), a = Fn(w), u = "";
      a.forEach(function(n) {
        kg.indexOf(n) === -1 ? u += fe(n) : (u.length && r.push(u), r.push(fe(n)), u = "");
      }), u.length && r.push(u);
    }
  }; !(o = t.next()).done; )
    c();
  return r;
}, Xg = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(A, t, r) {
      this.text = Jg(t.data, r.textTransform), this.textBounds = Ng(A, this.text, r, t);
    }
    return e;
  }()
), Jg = function(e, A) {
  switch (A) {
    case 1:
      return e.toLowerCase();
    case 3:
      return e.replace(Wg, Yg);
    case 2:
      return e.toUpperCase();
    default:
      return e;
  }
}, Wg = /(^|\s|:|-|\(|\))([a-z])/g, Yg = function(e, A, t) {
  return e.length > 0 ? A + t.toUpperCase() : e;
}, Rs = (
  /** @class */
  function(e) {
    Ye(A, e);
    function A(t, r) {
      var o = e.call(this, t, r) || this;
      return o.src = r.currentSrc || r.src, o.intrinsicWidth = r.naturalWidth, o.intrinsicHeight = r.naturalHeight, o.context.cache.addImage(o.src), o;
    }
    return A;
  }(rr)
), Ms = (
  /** @class */
  function(e) {
    Ye(A, e);
    function A(t, r) {
      var o = e.call(this, t, r) || this;
      return o.canvas = r, o.intrinsicWidth = r.width, o.intrinsicHeight = r.height, o;
    }
    return A;
  }(rr)
), Ns = (
  /** @class */
  function(e) {
    Ye(A, e);
    function A(t, r) {
      var o = e.call(this, t, r) || this, c = new XMLSerializer(), w = Un(t, r);
      return r.setAttribute("width", w.width + "px"), r.setAttribute("height", w.height + "px"), o.svg = "data:image/svg+xml," + encodeURIComponent(c.serializeToString(r)), o.intrinsicWidth = r.width.baseVal.value, o.intrinsicHeight = r.height.baseVal.value, o.context.cache.addImage(o.svg), o;
    }
    return A;
  }(rr)
), Gs = (
  /** @class */
  function(e) {
    Ye(A, e);
    function A(t, r) {
      var o = e.call(this, t, r) || this;
      return o.value = r.value, o;
    }
    return A;
  }(rr)
), zo = (
  /** @class */
  function(e) {
    Ye(A, e);
    function A(t, r) {
      var o = e.call(this, t, r) || this;
      return o.start = r.start, o.reversed = typeof r.reversed == "boolean" && r.reversed === !0, o;
    }
    return A;
  }(rr)
), Zg = [
  {
    type: 15,
    flags: 0,
    unit: "px",
    number: 3
  }
], zg = [
  {
    type: 16,
    flags: 0,
    number: 50
  }
], qg = function(e) {
  return e.width > e.height ? new Br(e.left + (e.width - e.height) / 2, e.top, e.height, e.height) : e.width < e.height ? new Br(e.left, e.top + (e.height - e.width) / 2, e.width, e.width) : e;
}, $g = function(e) {
  var A = e.type === Aw ? new Array(e.value.length + 1).join("•") : e.value;
  return A.length === 0 ? e.placeholder || "" : A;
}, gn = "checkbox", wn = "radio", Aw = "password", Vi = 707406591, ca = (
  /** @class */
  function(e) {
    Ye(A, e);
    function A(t, r) {
      var o = e.call(this, t, r) || this;
      switch (o.type = r.type.toLowerCase(), o.checked = r.checked, o.value = $g(r), (o.type === gn || o.type === wn) && (o.styles.backgroundColor = 3739148031, o.styles.borderTopColor = o.styles.borderRightColor = o.styles.borderBottomColor = o.styles.borderLeftColor = 2779096575, o.styles.borderTopWidth = o.styles.borderRightWidth = o.styles.borderBottomWidth = o.styles.borderLeftWidth = 1, o.styles.borderTopStyle = o.styles.borderRightStyle = o.styles.borderBottomStyle = o.styles.borderLeftStyle = 1, o.styles.backgroundClip = [
        0
        /* BORDER_BOX */
      ], o.styles.backgroundOrigin = [
        0
        /* BORDER_BOX */
      ], o.bounds = qg(o.bounds)), o.type) {
        case gn:
          o.styles.borderTopRightRadius = o.styles.borderTopLeftRadius = o.styles.borderBottomRightRadius = o.styles.borderBottomLeftRadius = Zg;
          break;
        case wn:
          o.styles.borderTopRightRadius = o.styles.borderTopLeftRadius = o.styles.borderBottomRightRadius = o.styles.borderBottomLeftRadius = zg;
          break;
      }
      return o;
    }
    return A;
  }(rr)
), Ps = (
  /** @class */
  function(e) {
    Ye(A, e);
    function A(t, r) {
      var o = e.call(this, t, r) || this, c = r.options[r.selectedIndex || 0];
      return o.value = c && c.text || "", o;
    }
    return A;
  }(rr)
), Vs = (
  /** @class */
  function(e) {
    Ye(A, e);
    function A(t, r) {
      var o = e.call(this, t, r) || this;
      return o.value = r.value, o;
    }
    return A;
  }(rr)
), ks = (
  /** @class */
  function(e) {
    Ye(A, e);
    function A(t, r) {
      var o = e.call(this, t, r) || this;
      o.src = r.src, o.width = parseInt(r.width, 10) || 0, o.height = parseInt(r.height, 10) || 0, o.backgroundColor = o.styles.backgroundColor;
      try {
        if (r.contentWindow && r.contentWindow.document && r.contentWindow.document.documentElement) {
          o.tree = Xs(t, r.contentWindow.document.documentElement);
          var c = r.contentWindow.document.documentElement ? vt(t, getComputedStyle(r.contentWindow.document.documentElement).backgroundColor) : ur.TRANSPARENT, w = r.contentWindow.document.body ? vt(t, getComputedStyle(r.contentWindow.document.body).backgroundColor) : ur.TRANSPARENT;
          o.backgroundColor = Ur(c) ? Ur(w) ? o.styles.backgroundColor : w : c;
        }
      } catch {
      }
      return o;
    }
    return A;
  }(rr)
), ew = ["OL", "UL", "MENU"], an = function(e, A, t, r) {
  for (var o = A.firstChild, c = void 0; o; o = c)
    if (c = o.nextSibling, Js(o) && o.data.trim().length > 0)
      t.textNodes.push(new Xg(e, o, t.styles));
    else if (Zr(o))
      if (zs(o) && o.assignedNodes)
        o.assignedNodes().forEach(function(a) {
          return an(e, a, t, r);
        });
      else {
        var w = js(e, o);
        w.styles.isVisible() && (rw(o, w, r) ? w.flags |= 4 : tw(w.styles) && (w.flags |= 2), ew.indexOf(o.tagName) !== -1 && (w.flags |= 8), t.elements.push(w), o.slot, o.shadowRoot ? an(e, o.shadowRoot, w, r) : !hn(o) && !Ws(o) && !Qn(o) && an(e, o, w, r));
      }
}, js = function(e, A) {
  return $o(A) ? new Rs(e, A) : Ys(A) ? new Ms(e, A) : Ws(A) ? new Ns(e, A) : nw(A) ? new Gs(e, A) : ow(A) ? new zo(e, A) : aw(A) ? new ca(e, A) : Qn(A) ? new Ps(e, A) : hn(A) ? new Vs(e, A) : Zs(A) ? new ks(e, A) : new rr(e, A);
}, Xs = function(e, A) {
  var t = js(e, A);
  return t.flags |= 4, an(e, A, t, t), t;
}, rw = function(e, A, t) {
  return A.styles.isPositionedWithZIndex() || A.styles.opacity < 1 || A.styles.isTransformed() || ua(e) && t.styles.isTransparent();
}, tw = function(e) {
  return e.isPositioned() || e.isFloating();
}, Js = function(e) {
  return e.nodeType === Node.TEXT_NODE;
}, Zr = function(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}, qo = function(e) {
  return Zr(e) && typeof e.style < "u" && !sn(e);
}, sn = function(e) {
  return typeof e.className == "object";
}, nw = function(e) {
  return e.tagName === "LI";
}, ow = function(e) {
  return e.tagName === "OL";
}, aw = function(e) {
  return e.tagName === "INPUT";
}, iw = function(e) {
  return e.tagName === "HTML";
}, Ws = function(e) {
  return e.tagName === "svg";
}, ua = function(e) {
  return e.tagName === "BODY";
}, Ys = function(e) {
  return e.tagName === "CANVAS";
}, ki = function(e) {
  return e.tagName === "VIDEO";
}, $o = function(e) {
  return e.tagName === "IMG";
}, Zs = function(e) {
  return e.tagName === "IFRAME";
}, ji = function(e) {
  return e.tagName === "STYLE";
}, sw = function(e) {
  return e.tagName === "SCRIPT";
}, hn = function(e) {
  return e.tagName === "TEXTAREA";
}, Qn = function(e) {
  return e.tagName === "SELECT";
}, zs = function(e) {
  return e.tagName === "SLOT";
}, Xi = function(e) {
  return e.tagName.indexOf("-") > 0;
}, cw = (
  /** @class */
  function() {
    function e() {
      this.counters = {};
    }
    return e.prototype.getCounterValue = function(A) {
      var t = this.counters[A];
      return t && t.length ? t[t.length - 1] : 1;
    }, e.prototype.getCounterValues = function(A) {
      var t = this.counters[A];
      return t || [];
    }, e.prototype.pop = function(A) {
      var t = this;
      A.forEach(function(r) {
        return t.counters[r].pop();
      });
    }, e.prototype.parse = function(A) {
      var t = this, r = A.counterIncrement, o = A.counterReset, c = !0;
      r !== null && r.forEach(function(a) {
        var u = t.counters[a.counter];
        u && a.increment !== 0 && (c = !1, u.length || u.push(1), u[Math.max(0, u.length - 1)] += a.increment);
      });
      var w = [];
      return c && o.forEach(function(a) {
        var u = t.counters[a.counter];
        w.push(a.counter), u || (u = t.counters[a.counter] = []), u.push(a.reset);
      }), w;
    }, e;
  }()
), Ji = {
  integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
  values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
}, Wi = {
  integers: [
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    900,
    800,
    700,
    600,
    500,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ],
  values: [
    "Ք",
    "Փ",
    "Ւ",
    "Ց",
    "Ր",
    "Տ",
    "Վ",
    "Ս",
    "Ռ",
    "Ջ",
    "Պ",
    "Չ",
    "Ո",
    "Շ",
    "Ն",
    "Յ",
    "Մ",
    "Ճ",
    "Ղ",
    "Ձ",
    "Հ",
    "Կ",
    "Ծ",
    "Խ",
    "Լ",
    "Ի",
    "Ժ",
    "Թ",
    "Ը",
    "Է",
    "Զ",
    "Ե",
    "Դ",
    "Գ",
    "Բ",
    "Ա"
  ]
}, uw = {
  integers: [
    1e4,
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    19,
    18,
    17,
    16,
    15,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ],
  values: [
    "י׳",
    "ט׳",
    "ח׳",
    "ז׳",
    "ו׳",
    "ה׳",
    "ד׳",
    "ג׳",
    "ב׳",
    "א׳",
    "ת",
    "ש",
    "ר",
    "ק",
    "צ",
    "פ",
    "ע",
    "ס",
    "נ",
    "מ",
    "ל",
    "כ",
    "יט",
    "יח",
    "יז",
    "טז",
    "טו",
    "י",
    "ט",
    "ח",
    "ז",
    "ו",
    "ה",
    "ד",
    "ג",
    "ב",
    "א"
  ]
}, Bw = {
  integers: [
    1e4,
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    900,
    800,
    700,
    600,
    500,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ],
  values: [
    "ჵ",
    "ჰ",
    "ჯ",
    "ჴ",
    "ხ",
    "ჭ",
    "წ",
    "ძ",
    "ც",
    "ჩ",
    "შ",
    "ყ",
    "ღ",
    "ქ",
    "ფ",
    "ჳ",
    "ტ",
    "ს",
    "რ",
    "ჟ",
    "პ",
    "ო",
    "ჲ",
    "ნ",
    "მ",
    "ლ",
    "კ",
    "ი",
    "თ",
    "ჱ",
    "ზ",
    "ვ",
    "ე",
    "დ",
    "გ",
    "ბ",
    "ა"
  ]
}, jr = function(e, A, t, r, o, c) {
  return e < A || e > t ? bt(e, o, c.length > 0) : r.integers.reduce(function(w, a, u) {
    for (; e >= a; )
      e -= a, w += r.values[u];
    return w;
  }, "") + c;
}, qs = function(e, A, t, r) {
  var o = "";
  do
    t || e--, o = r(e) + o, e /= A;
  while (e * A >= A);
  return o;
}, ue = function(e, A, t, r, o) {
  var c = t - A + 1;
  return (e < 0 ? "-" : "") + (qs(Math.abs(e), c, r, function(w) {
    return fe(Math.floor(w % c) + A);
  }) + o);
}, Ir = function(e, A, t) {
  t === void 0 && (t = ". ");
  var r = A.length;
  return qs(Math.abs(e), r, !1, function(o) {
    return A[Math.floor(o % r)];
  }) + t;
}, Wr = 1, wr = 2, hr = 4, pt = 8, sr = function(e, A, t, r, o, c) {
  if (e < -9999 || e > 9999)
    return bt(e, 4, o.length > 0);
  var w = Math.abs(e), a = o;
  if (w === 0)
    return A[0] + a;
  for (var u = 0; w > 0 && u <= 4; u++) {
    var n = w % 10;
    n === 0 && de(c, Wr) && a !== "" ? a = A[n] + a : n > 1 || n === 1 && u === 0 || n === 1 && u === 1 && de(c, wr) || n === 1 && u === 1 && de(c, hr) && e > 100 || n === 1 && u > 1 && de(c, pt) ? a = A[n] + (u > 0 ? t[u - 1] : "") + a : n === 1 && u > 0 && (a = t[u - 1] + a), w = Math.floor(w / 10);
  }
  return (e < 0 ? r : "") + a;
}, Yi = "十百千萬", Zi = "拾佰仟萬", zi = "マイナス", bo = "마이너스", bt = function(e, A, t) {
  var r = t ? ". " : "", o = t ? "、" : "", c = t ? ", " : "", w = t ? " " : "";
  switch (A) {
    case 0:
      return "•" + w;
    case 1:
      return "◦" + w;
    case 2:
      return "◾" + w;
    case 5:
      var a = ue(e, 48, 57, !0, r);
      return a.length < 4 ? "0" + a : a;
    case 4:
      return Ir(e, "〇一二三四五六七八九", o);
    case 6:
      return jr(e, 1, 3999, Ji, 3, r).toLowerCase();
    case 7:
      return jr(e, 1, 3999, Ji, 3, r);
    case 8:
      return ue(e, 945, 969, !1, r);
    case 9:
      return ue(e, 97, 122, !1, r);
    case 10:
      return ue(e, 65, 90, !1, r);
    case 11:
      return ue(e, 1632, 1641, !0, r);
    case 12:
    case 49:
      return jr(e, 1, 9999, Wi, 3, r);
    case 35:
      return jr(e, 1, 9999, Wi, 3, r).toLowerCase();
    case 13:
      return ue(e, 2534, 2543, !0, r);
    case 14:
    case 30:
      return ue(e, 6112, 6121, !0, r);
    case 15:
      return Ir(e, "子丑寅卯辰巳午未申酉戌亥", o);
    case 16:
      return Ir(e, "甲乙丙丁戊己庚辛壬癸", o);
    case 17:
    case 48:
      return sr(e, "零一二三四五六七八九", Yi, "負", o, wr | hr | pt);
    case 47:
      return sr(e, "零壹貳參肆伍陸柒捌玖", Zi, "負", o, Wr | wr | hr | pt);
    case 42:
      return sr(e, "零一二三四五六七八九", Yi, "负", o, wr | hr | pt);
    case 41:
      return sr(e, "零壹贰叁肆伍陆柒捌玖", Zi, "负", o, Wr | wr | hr | pt);
    case 26:
      return sr(e, "〇一二三四五六七八九", "十百千万", zi, o, 0);
    case 25:
      return sr(e, "零壱弐参四伍六七八九", "拾百千万", zi, o, Wr | wr | hr);
    case 31:
      return sr(e, "영일이삼사오육칠팔구", "십백천만", bo, c, Wr | wr | hr);
    case 33:
      return sr(e, "零一二三四五六七八九", "十百千萬", bo, c, 0);
    case 32:
      return sr(e, "零壹貳參四五六七八九", "拾百千", bo, c, Wr | wr | hr);
    case 18:
      return ue(e, 2406, 2415, !0, r);
    case 20:
      return jr(e, 1, 19999, Bw, 3, r);
    case 21:
      return ue(e, 2790, 2799, !0, r);
    case 22:
      return ue(e, 2662, 2671, !0, r);
    case 22:
      return jr(e, 1, 10999, uw, 3, r);
    case 23:
      return Ir(e, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
    case 24:
      return Ir(e, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
    case 27:
      return ue(e, 3302, 3311, !0, r);
    case 28:
      return Ir(e, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", o);
    case 29:
      return Ir(e, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", o);
    case 34:
      return ue(e, 3792, 3801, !0, r);
    case 37:
      return ue(e, 6160, 6169, !0, r);
    case 38:
      return ue(e, 4160, 4169, !0, r);
    case 39:
      return ue(e, 2918, 2927, !0, r);
    case 40:
      return ue(e, 1776, 1785, !0, r);
    case 43:
      return ue(e, 3046, 3055, !0, r);
    case 44:
      return ue(e, 3174, 3183, !0, r);
    case 45:
      return ue(e, 3664, 3673, !0, r);
    case 46:
      return ue(e, 3872, 3881, !0, r);
    case 3:
    default:
      return ue(e, 48, 57, !0, r);
  }
}, $s = "data-html2canvas-ignore", qi = (
  /** @class */
  function() {
    function e(A, t, r) {
      if (this.context = A, this.options = r, this.scrolledElements = [], this.referenceElement = t, this.counters = new cw(), this.quoteDepth = 0, !t.ownerDocument)
        throw new Error("Cloned element does not have an owner document");
      this.documentElement = this.cloneNode(t.ownerDocument.documentElement, !1);
    }
    return e.prototype.toIFrame = function(A, t) {
      var r = this, o = fw(A, t);
      if (!o.contentWindow)
        return Promise.reject("Unable to find iframe window");
      var c = A.defaultView.pageXOffset, w = A.defaultView.pageYOffset, a = o.contentWindow, u = a.document, n = ww(o).then(function() {
        return Le(r, void 0, void 0, function() {
          var i, f;
          return He(this, function(l) {
            switch (l.label) {
              case 0:
                return this.scrolledElements.forEach(pw), a && (a.scrollTo(t.left, t.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (a.scrollY !== t.top || a.scrollX !== t.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(a.scrollX - t.left, a.scrollY - t.top, 0, 0))), i = this.options.onclone, f = this.clonedReferenceElement, typeof f > "u" ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : u.fonts && u.fonts.ready ? [4, u.fonts.ready] : [3, 2];
              case 1:
                l.sent(), l.label = 2;
              case 2:
                return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, gw(u)] : [3, 4];
              case 3:
                l.sent(), l.label = 4;
              case 4:
                return typeof i == "function" ? [2, Promise.resolve().then(function() {
                  return i(u, f);
                }).then(function() {
                  return o;
                })] : [2, o];
            }
          });
        });
      });
      return u.open(), u.write(Qw(document.doctype) + "<html></html>"), dw(this.referenceElement.ownerDocument, c, w), u.replaceChild(u.adoptNode(this.documentElement), u.documentElement), u.close(), n;
    }, e.prototype.createElementClone = function(A) {
      if (Yo(
        A,
        2
        /* CLONE */
      ))
        debugger;
      if (Ys(A))
        return this.createCanvasClone(A);
      if (ki(A))
        return this.createVideoClone(A);
      if (ji(A))
        return this.createStyleClone(A);
      var t = A.cloneNode(!1);
      return $o(t) && ($o(A) && A.currentSrc && A.currentSrc !== A.src && (t.src = A.currentSrc, t.srcset = ""), t.loading === "lazy" && (t.loading = "eager")), Xi(t) ? this.createCustomElementClone(t) : t;
    }, e.prototype.createCustomElementClone = function(A) {
      var t = document.createElement("html2canvascustomelement");
      return Ho(A.style, t), t;
    }, e.prototype.createStyleClone = function(A) {
      try {
        var t = A.sheet;
        if (t && t.cssRules) {
          var r = [].slice.call(t.cssRules, 0).reduce(function(c, w) {
            return w && typeof w.cssText == "string" ? c + w.cssText : c;
          }, ""), o = A.cloneNode(!1);
          return o.textContent = r, o;
        }
      } catch (c) {
        if (this.context.logger.error("Unable to access cssRules property", c), c.name !== "SecurityError")
          throw c;
      }
      return A.cloneNode(!1);
    }, e.prototype.createCanvasClone = function(A) {
      var t;
      if (this.options.inlineImages && A.ownerDocument) {
        var r = A.ownerDocument.createElement("img");
        try {
          return r.src = A.toDataURL(), r;
        } catch {
          this.context.logger.info("Unable to inline canvas contents, canvas is tainted", A);
        }
      }
      var o = A.cloneNode(!1);
      try {
        o.width = A.width, o.height = A.height;
        var c = A.getContext("2d"), w = o.getContext("2d");
        if (w)
          if (!this.options.allowTaint && c)
            w.putImageData(c.getImageData(0, 0, A.width, A.height), 0, 0);
          else {
            var a = (t = A.getContext("webgl2")) !== null && t !== void 0 ? t : A.getContext("webgl");
            if (a) {
              var u = a.getContextAttributes();
              (u == null ? void 0 : u.preserveDrawingBuffer) === !1 && this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", A);
            }
            w.drawImage(A, 0, 0);
          }
        return o;
      } catch {
        this.context.logger.info("Unable to clone canvas as it is tainted", A);
      }
      return o;
    }, e.prototype.createVideoClone = function(A) {
      var t = A.ownerDocument.createElement("canvas");
      t.width = A.offsetWidth, t.height = A.offsetHeight;
      var r = t.getContext("2d");
      try {
        return r && (r.drawImage(A, 0, 0, t.width, t.height), this.options.allowTaint || r.getImageData(0, 0, t.width, t.height)), t;
      } catch {
        this.context.logger.info("Unable to clone video as it is tainted", A);
      }
      var o = A.ownerDocument.createElement("canvas");
      return o.width = A.offsetWidth, o.height = A.offsetHeight, o;
    }, e.prototype.appendChildNode = function(A, t, r) {
      (!Zr(t) || !sw(t) && !t.hasAttribute($s) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(t))) && (!this.options.copyStyles || !Zr(t) || !ji(t)) && A.appendChild(this.cloneNode(t, r));
    }, e.prototype.cloneChildNodes = function(A, t, r) {
      for (var o = this, c = A.shadowRoot ? A.shadowRoot.firstChild : A.firstChild; c; c = c.nextSibling)
        if (Zr(c) && zs(c) && typeof c.assignedNodes == "function") {
          var w = c.assignedNodes();
          w.length && w.forEach(function(a) {
            return o.appendChildNode(t, a, r);
          });
        } else
          this.appendChildNode(t, c, r);
    }, e.prototype.cloneNode = function(A, t) {
      if (Js(A))
        return document.createTextNode(A.data);
      if (!A.ownerDocument)
        return A.cloneNode(!1);
      var r = A.ownerDocument.defaultView;
      if (r && Zr(A) && (qo(A) || sn(A))) {
        var o = this.createElementClone(A);
        o.style.transitionProperty = "none";
        var c = r.getComputedStyle(A), w = r.getComputedStyle(A, ":before"), a = r.getComputedStyle(A, ":after");
        this.referenceElement === A && qo(o) && (this.clonedReferenceElement = o), ua(o) && Uw(o);
        var u = this.counters.parse(new Ii(this.context, c)), n = this.resolvePseudoContent(A, o, w, yt.BEFORE);
        Xi(A) && (t = !0), ki(A) || this.cloneChildNodes(A, o, t), n && o.insertBefore(n, o.firstChild);
        var i = this.resolvePseudoContent(A, o, a, yt.AFTER);
        return i && o.appendChild(i), this.counters.pop(u), (c && (this.options.copyStyles || sn(A)) && !Zs(A) || t) && Ho(c, o), (A.scrollTop !== 0 || A.scrollLeft !== 0) && this.scrolledElements.push([o, A.scrollLeft, A.scrollTop]), (hn(A) || Qn(A)) && (hn(o) || Qn(o)) && (o.value = A.value), o;
      }
      return A.cloneNode(!1);
    }, e.prototype.resolvePseudoContent = function(A, t, r, o) {
      var c = this;
      if (r) {
        var w = r.content, a = t.ownerDocument;
        if (!(!a || !w || w === "none" || w === "-moz-alt-content" || r.display === "none")) {
          this.counters.parse(new Ii(this.context, r));
          var u = new ng(this.context, r), n = a.createElement("html2canvaspseudoelement");
          Ho(r, n), u.content.forEach(function(f) {
            if (f.type === 0)
              n.appendChild(a.createTextNode(f.value));
            else if (f.type === 22) {
              var l = a.createElement("img");
              l.src = f.value, l.style.opacity = "1", n.appendChild(l);
            } else if (f.type === 18) {
              if (f.name === "attr") {
                var h = f.values.filter(ZA);
                h.length && n.appendChild(a.createTextNode(A.getAttribute(h[0].value) || ""));
              } else if (f.name === "counter") {
                var Q = f.values.filter(qr), p = Q[0], d = Q[1];
                if (p && ZA(p)) {
                  var v = c.counters.getCounterValue(p.value), F = d && ZA(d) ? Wo.parse(c.context, d.value) : 3;
                  n.appendChild(a.createTextNode(bt(v, F, !1)));
                }
              } else if (f.name === "counters") {
                var H = f.values.filter(qr), p = H[0], x = H[1], d = H[2];
                if (p && ZA(p)) {
                  var O = c.counters.getCounterValues(p.value), L = d && ZA(d) ? Wo.parse(c.context, d.value) : 3, G = x && x.type === 0 ? x.value : "", V = O.map(function(P) {
                    return bt(P, L, !1);
                  }).join(G);
                  n.appendChild(a.createTextNode(V));
                }
              }
            } else if (f.type === 20)
              switch (f.value) {
                case "open-quote":
                  n.appendChild(a.createTextNode(Hi(u.quotes, c.quoteDepth++, !0)));
                  break;
                case "close-quote":
                  n.appendChild(a.createTextNode(Hi(u.quotes, --c.quoteDepth, !1)));
                  break;
                default:
                  n.appendChild(a.createTextNode(f.value));
              }
          }), n.className = Aa + " " + ea;
          var i = o === yt.BEFORE ? " " + Aa : " " + ea;
          return sn(t) ? t.className.baseValue += i : t.className += i, n;
        }
      }
    }, e.destroy = function(A) {
      return A.parentNode ? (A.parentNode.removeChild(A), !0) : !1;
    }, e;
  }()
), yt;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(yt || (yt = {}));
var fw = function(e, A) {
  var t = e.createElement("iframe");
  return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = A.width.toString(), t.height = A.height.toString(), t.scrolling = "no", t.setAttribute($s, "true"), e.body.appendChild(t), t;
}, lw = function(e) {
  return new Promise(function(A) {
    if (e.complete) {
      A();
      return;
    }
    if (!e.src) {
      A();
      return;
    }
    e.onload = A, e.onerror = A;
  });
}, gw = function(e) {
  return Promise.all([].slice.call(e.images, 0).map(lw));
}, ww = function(e) {
  return new Promise(function(A, t) {
    var r = e.contentWindow;
    if (!r)
      return t("No window assigned for iframe");
    var o = r.document;
    r.onload = e.onload = function() {
      r.onload = e.onload = null;
      var c = setInterval(function() {
        o.body.childNodes.length > 0 && o.readyState === "complete" && (clearInterval(c), A(e));
      }, 50);
    };
  });
}, hw = [
  "all",
  "d",
  "content"
  // Safari shows pseudoelements if content is set
], Ho = function(e, A) {
  for (var t = e.length - 1; t >= 0; t--) {
    var r = e.item(t);
    hw.indexOf(r) === -1 && A.style.setProperty(r, e.getPropertyValue(r));
  }
  return A;
}, Qw = function(e) {
  var A = "";
  return e && (A += "<!DOCTYPE ", e.name && (A += e.name), e.internalSubset && (A += e.internalSubset), e.publicId && (A += '"' + e.publicId + '"'), e.systemId && (A += '"' + e.systemId + '"'), A += ">"), A;
}, dw = function(e, A, t) {
  e && e.defaultView && (A !== e.defaultView.pageXOffset || t !== e.defaultView.pageYOffset) && e.defaultView.scrollTo(A, t);
}, pw = function(e) {
  var A = e[0], t = e[1], r = e[2];
  A.scrollLeft = t, A.scrollTop = r;
}, Cw = ":before", vw = ":after", Aa = "___html2canvas___pseudoelement_before", ea = "___html2canvas___pseudoelement_after", $i = `{
    content: "" !important;
    display: none !important;
}`, Uw = function(e) {
  Fw(e, "." + Aa + Cw + $i + `
         .` + ea + vw + $i);
}, Fw = function(e, A) {
  var t = e.ownerDocument;
  if (t) {
    var r = t.createElement("style");
    r.textContent = A, e.appendChild(r);
  }
}, Ac = (
  /** @class */
  function() {
    function e() {
    }
    return e.getOrigin = function(A) {
      var t = e._link;
      return t ? (t.href = A, t.href = t.href, t.protocol + t.hostname + t.port) : "about:blank";
    }, e.isSameOrigin = function(A) {
      return e.getOrigin(A) === e._origin;
    }, e.setContext = function(A) {
      e._link = A.document.createElement("a"), e._origin = e.getOrigin(A.location.href);
    }, e._origin = "about:blank", e;
  }()
), yw = (
  /** @class */
  function() {
    function e(A, t) {
      this.context = A, this._options = t, this._cache = {};
    }
    return e.prototype.addImage = function(A) {
      var t = Promise.resolve();
      return this.has(A) || (xo(A) || Hw(A)) && (this._cache[A] = this.loadImage(A)).catch(function() {
      }), t;
    }, e.prototype.match = function(A) {
      return this._cache[A];
    }, e.prototype.loadImage = function(A) {
      return Le(this, void 0, void 0, function() {
        var t, r, o, c, w = this;
        return He(this, function(a) {
          switch (a.label) {
            case 0:
              return t = Ac.isSameOrigin(A), r = !Io(A) && this._options.useCORS === !0 && Ee.SUPPORT_CORS_IMAGES && !t, o = !Io(A) && !t && !xo(A) && typeof this._options.proxy == "string" && Ee.SUPPORT_CORS_XHR && !r, !t && this._options.allowTaint === !1 && !Io(A) && !xo(A) && !o && !r ? [
                2
                /*return*/
              ] : (c = A, o ? [4, this.proxy(c)] : [3, 2]);
            case 1:
              c = a.sent(), a.label = 2;
            case 2:
              return this.context.logger.debug("Added image " + A.substring(0, 256)), [4, new Promise(function(u, n) {
                var i = new Image();
                i.onload = function() {
                  return u(i);
                }, i.onerror = n, (Iw(c) || r) && (i.crossOrigin = "anonymous"), i.src = c, i.complete === !0 && setTimeout(function() {
                  return u(i);
                }, 500), w._options.imageTimeout > 0 && setTimeout(function() {
                  return n("Timed out (" + w._options.imageTimeout + "ms) loading image");
                }, w._options.imageTimeout);
              })];
            case 3:
              return [2, a.sent()];
          }
        });
      });
    }, e.prototype.has = function(A) {
      return typeof this._cache[A] < "u";
    }, e.prototype.keys = function() {
      return Promise.resolve(Object.keys(this._cache));
    }, e.prototype.proxy = function(A) {
      var t = this, r = this._options.proxy;
      if (!r)
        throw new Error("No proxy defined");
      var o = A.substring(0, 256);
      return new Promise(function(c, w) {
        var a = Ee.SUPPORT_RESPONSE_TYPE ? "blob" : "text", u = new XMLHttpRequest();
        u.onload = function() {
          if (u.status === 200)
            if (a === "text")
              c(u.response);
            else {
              var f = new FileReader();
              f.addEventListener("load", function() {
                return c(f.result);
              }, !1), f.addEventListener("error", function(l) {
                return w(l);
              }, !1), f.readAsDataURL(u.response);
            }
          else
            w("Failed to proxy resource " + o + " with status code " + u.status);
        }, u.onerror = w;
        var n = r.indexOf("?") > -1 ? "&" : "?";
        if (u.open("GET", "" + r + n + "url=" + encodeURIComponent(A) + "&responseType=" + a), a !== "text" && u instanceof XMLHttpRequest && (u.responseType = a), t._options.imageTimeout) {
          var i = t._options.imageTimeout;
          u.timeout = i, u.ontimeout = function() {
            return w("Timed out (" + i + "ms) proxying " + o);
          };
        }
        u.send();
      });
    }, e;
  }()
), Ew = /^data:image\/svg\+xml/i, mw = /^data:image\/.*;base64,/i, bw = /^data:image\/.*/i, Hw = function(e) {
  return Ee.SUPPORT_SVG_DRAWING || !xw(e);
}, Io = function(e) {
  return bw.test(e);
}, Iw = function(e) {
  return mw.test(e);
}, xo = function(e) {
  return e.substr(0, 4) === "blob";
}, xw = function(e) {
  return e.substr(-3).toLowerCase() === "svg" || Ew.test(e);
}, gA = (
  /** @class */
  function() {
    function e(A, t) {
      this.type = 0, this.x = A, this.y = t;
    }
    return e.prototype.add = function(A, t) {
      return new e(this.x + A, this.y + t);
    }, e;
  }()
), Xr = function(e, A, t) {
  return new gA(e.x + (A.x - e.x) * t, e.y + (A.y - e.y) * t);
}, $t = (
  /** @class */
  function() {
    function e(A, t, r, o) {
      this.type = 1, this.start = A, this.startControl = t, this.endControl = r, this.end = o;
    }
    return e.prototype.subdivide = function(A, t) {
      var r = Xr(this.start, this.startControl, A), o = Xr(this.startControl, this.endControl, A), c = Xr(this.endControl, this.end, A), w = Xr(r, o, A), a = Xr(o, c, A), u = Xr(w, a, A);
      return t ? new e(this.start, r, w, u) : new e(u, a, c, this.end);
    }, e.prototype.add = function(A, t) {
      return new e(this.start.add(A, t), this.startControl.add(A, t), this.endControl.add(A, t), this.end.add(A, t));
    }, e.prototype.reverse = function() {
      return new e(this.end, this.endControl, this.startControl, this.start);
    }, e;
  }()
), Ne = function(e) {
  return e.type === 1;
}, Sw = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(A) {
      var t = A.styles, r = A.bounds, o = Qt(t.borderTopLeftRadius, r.width, r.height), c = o[0], w = o[1], a = Qt(t.borderTopRightRadius, r.width, r.height), u = a[0], n = a[1], i = Qt(t.borderBottomRightRadius, r.width, r.height), f = i[0], l = i[1], h = Qt(t.borderBottomLeftRadius, r.width, r.height), Q = h[0], p = h[1], d = [];
      d.push((c + u) / r.width), d.push((Q + f) / r.width), d.push((w + p) / r.height), d.push((n + l) / r.height);
      var v = Math.max.apply(Math, d);
      v > 1 && (c /= v, w /= v, u /= v, n /= v, f /= v, l /= v, Q /= v, p /= v);
      var F = r.width - u, H = r.height - l, x = r.width - f, O = r.height - p, L = t.borderTopWidth, G = t.borderRightWidth, V = t.borderBottomWidth, b = t.borderLeftWidth, N = qA(t.paddingTop, A.bounds.width), P = qA(t.paddingRight, A.bounds.width), k = qA(t.paddingBottom, A.bounds.width), S = qA(t.paddingLeft, A.bounds.width);
      this.topLeftBorderDoubleOuterBox = c > 0 || w > 0 ? Ae(r.left + b / 3, r.top + L / 3, c - b / 3, w - L / 3, jA.TOP_LEFT) : new gA(r.left + b / 3, r.top + L / 3), this.topRightBorderDoubleOuterBox = c > 0 || w > 0 ? Ae(r.left + F, r.top + L / 3, u - G / 3, n - L / 3, jA.TOP_RIGHT) : new gA(r.left + r.width - G / 3, r.top + L / 3), this.bottomRightBorderDoubleOuterBox = f > 0 || l > 0 ? Ae(r.left + x, r.top + H, f - G / 3, l - V / 3, jA.BOTTOM_RIGHT) : new gA(r.left + r.width - G / 3, r.top + r.height - V / 3), this.bottomLeftBorderDoubleOuterBox = Q > 0 || p > 0 ? Ae(r.left + b / 3, r.top + O, Q - b / 3, p - V / 3, jA.BOTTOM_LEFT) : new gA(r.left + b / 3, r.top + r.height - V / 3), this.topLeftBorderDoubleInnerBox = c > 0 || w > 0 ? Ae(r.left + b * 2 / 3, r.top + L * 2 / 3, c - b * 2 / 3, w - L * 2 / 3, jA.TOP_LEFT) : new gA(r.left + b * 2 / 3, r.top + L * 2 / 3), this.topRightBorderDoubleInnerBox = c > 0 || w > 0 ? Ae(r.left + F, r.top + L * 2 / 3, u - G * 2 / 3, n - L * 2 / 3, jA.TOP_RIGHT) : new gA(r.left + r.width - G * 2 / 3, r.top + L * 2 / 3), this.bottomRightBorderDoubleInnerBox = f > 0 || l > 0 ? Ae(r.left + x, r.top + H, f - G * 2 / 3, l - V * 2 / 3, jA.BOTTOM_RIGHT) : new gA(r.left + r.width - G * 2 / 3, r.top + r.height - V * 2 / 3), this.bottomLeftBorderDoubleInnerBox = Q > 0 || p > 0 ? Ae(r.left + b * 2 / 3, r.top + O, Q - b * 2 / 3, p - V * 2 / 3, jA.BOTTOM_LEFT) : new gA(r.left + b * 2 / 3, r.top + r.height - V * 2 / 3), this.topLeftBorderStroke = c > 0 || w > 0 ? Ae(r.left + b / 2, r.top + L / 2, c - b / 2, w - L / 2, jA.TOP_LEFT) : new gA(r.left + b / 2, r.top + L / 2), this.topRightBorderStroke = c > 0 || w > 0 ? Ae(r.left + F, r.top + L / 2, u - G / 2, n - L / 2, jA.TOP_RIGHT) : new gA(r.left + r.width - G / 2, r.top + L / 2), this.bottomRightBorderStroke = f > 0 || l > 0 ? Ae(r.left + x, r.top + H, f - G / 2, l - V / 2, jA.BOTTOM_RIGHT) : new gA(r.left + r.width - G / 2, r.top + r.height - V / 2), this.bottomLeftBorderStroke = Q > 0 || p > 0 ? Ae(r.left + b / 2, r.top + O, Q - b / 2, p - V / 2, jA.BOTTOM_LEFT) : new gA(r.left + b / 2, r.top + r.height - V / 2), this.topLeftBorderBox = c > 0 || w > 0 ? Ae(r.left, r.top, c, w, jA.TOP_LEFT) : new gA(r.left, r.top), this.topRightBorderBox = u > 0 || n > 0 ? Ae(r.left + F, r.top, u, n, jA.TOP_RIGHT) : new gA(r.left + r.width, r.top), this.bottomRightBorderBox = f > 0 || l > 0 ? Ae(r.left + x, r.top + H, f, l, jA.BOTTOM_RIGHT) : new gA(r.left + r.width, r.top + r.height), this.bottomLeftBorderBox = Q > 0 || p > 0 ? Ae(r.left, r.top + O, Q, p, jA.BOTTOM_LEFT) : new gA(r.left, r.top + r.height), this.topLeftPaddingBox = c > 0 || w > 0 ? Ae(r.left + b, r.top + L, Math.max(0, c - b), Math.max(0, w - L), jA.TOP_LEFT) : new gA(r.left + b, r.top + L), this.topRightPaddingBox = u > 0 || n > 0 ? Ae(r.left + Math.min(F, r.width - G), r.top + L, F > r.width + G ? 0 : Math.max(0, u - G), Math.max(0, n - L), jA.TOP_RIGHT) : new gA(r.left + r.width - G, r.top + L), this.bottomRightPaddingBox = f > 0 || l > 0 ? Ae(r.left + Math.min(x, r.width - b), r.top + Math.min(H, r.height - V), Math.max(0, f - G), Math.max(0, l - V), jA.BOTTOM_RIGHT) : new gA(r.left + r.width - G, r.top + r.height - V), this.bottomLeftPaddingBox = Q > 0 || p > 0 ? Ae(r.left + b, r.top + Math.min(O, r.height - V), Math.max(0, Q - b), Math.max(0, p - V), jA.BOTTOM_LEFT) : new gA(r.left + b, r.top + r.height - V), this.topLeftContentBox = c > 0 || w > 0 ? Ae(r.left + b + S, r.top + L + N, Math.max(0, c - (b + S)), Math.max(0, w - (L + N)), jA.TOP_LEFT) : new gA(r.left + b + S, r.top + L + N), this.topRightContentBox = u > 0 || n > 0 ? Ae(r.left + Math.min(F, r.width + b + S), r.top + L + N, F > r.width + b + S ? 0 : u - b + S, n - (L + N), jA.TOP_RIGHT) : new gA(r.left + r.width - (G + P), r.top + L + N), this.bottomRightContentBox = f > 0 || l > 0 ? Ae(r.left + Math.min(x, r.width - (b + S)), r.top + Math.min(H, r.height + L + N), Math.max(0, f - (G + P)), l - (V + k), jA.BOTTOM_RIGHT) : new gA(r.left + r.width - (G + P), r.top + r.height - (V + k)), this.bottomLeftContentBox = Q > 0 || p > 0 ? Ae(r.left + b + S, r.top + O, Math.max(0, Q - (b + S)), p - (V + k), jA.BOTTOM_LEFT) : new gA(r.left + b + S, r.top + r.height - (V + k));
    }
    return e;
  }()
), jA;
(function(e) {
  e[e.TOP_LEFT = 0] = "TOP_LEFT", e[e.TOP_RIGHT = 1] = "TOP_RIGHT", e[e.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", e[e.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
})(jA || (jA = {}));
var Ae = function(e, A, t, r, o) {
  var c = 4 * ((Math.sqrt(2) - 1) / 3), w = t * c, a = r * c, u = e + t, n = A + r;
  switch (o) {
    case jA.TOP_LEFT:
      return new $t(new gA(e, n), new gA(e, n - a), new gA(u - w, A), new gA(u, A));
    case jA.TOP_RIGHT:
      return new $t(new gA(e, A), new gA(e + w, A), new gA(u, n - a), new gA(u, n));
    case jA.BOTTOM_RIGHT:
      return new $t(new gA(u, A), new gA(u, A + a), new gA(e + w, n), new gA(e, n));
    case jA.BOTTOM_LEFT:
    default:
      return new $t(new gA(u, n), new gA(u - w, n), new gA(e, A + a), new gA(e, A));
  }
}, dn = function(e) {
  return [e.topLeftBorderBox, e.topRightBorderBox, e.bottomRightBorderBox, e.bottomLeftBorderBox];
}, Lw = function(e) {
  return [
    e.topLeftContentBox,
    e.topRightContentBox,
    e.bottomRightContentBox,
    e.bottomLeftContentBox
  ];
}, pn = function(e) {
  return [
    e.topLeftPaddingBox,
    e.topRightPaddingBox,
    e.bottomRightPaddingBox,
    e.bottomLeftPaddingBox
  ];
}, Kw = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(A, t, r) {
      this.offsetX = A, this.offsetY = t, this.matrix = r, this.type = 0, this.target = 6;
    }
    return e;
  }()
), An = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(A, t) {
      this.path = A, this.target = t, this.type = 1;
    }
    return e;
  }()
), Ow = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(A) {
      this.opacity = A, this.type = 2, this.target = 6;
    }
    return e;
  }()
), Dw = function(e) {
  return e.type === 0;
}, ec = function(e) {
  return e.type === 1;
}, Tw = function(e) {
  return e.type === 2;
}, As = function(e, A) {
  return e.length === A.length ? e.some(function(t, r) {
    return t === A[r];
  }) : !1;
}, _w = function(e, A, t, r, o) {
  return e.map(function(c, w) {
    switch (w) {
      case 0:
        return c.add(A, t);
      case 1:
        return c.add(A + r, t);
      case 2:
        return c.add(A + r, t + o);
      case 3:
        return c.add(A, t + o);
    }
    return c;
  });
}, rc = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(A) {
      this.element = A, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
    }
    return e;
  }()
), tc = (
  /** @class */
  function() {
    function e(A, t) {
      if (this.container = A, this.parent = t, this.effects = [], this.curves = new Sw(this.container), this.container.styles.opacity < 1 && this.effects.push(new Ow(this.container.styles.opacity)), this.container.styles.transform !== null) {
        var r = this.container.bounds.left + this.container.styles.transformOrigin[0].number, o = this.container.bounds.top + this.container.styles.transformOrigin[1].number, c = this.container.styles.transform;
        this.effects.push(new Kw(r, o, c));
      }
      if (this.container.styles.overflowX !== 0) {
        var w = dn(this.curves), a = pn(this.curves);
        As(w, a) ? this.effects.push(new An(
          w,
          6
          /* CONTENT */
        )) : (this.effects.push(new An(
          w,
          2
          /* BACKGROUND_BORDERS */
        )), this.effects.push(new An(
          a,
          4
          /* CONTENT */
        )));
      }
    }
    return e.prototype.getEffects = function(A) {
      for (var t = [
        2,
        3
        /* FIXED */
      ].indexOf(this.container.styles.position) === -1, r = this.parent, o = this.effects.slice(0); r; ) {
        var c = r.effects.filter(function(u) {
          return !ec(u);
        });
        if (t || r.container.styles.position !== 0 || !r.parent) {
          if (o.unshift.apply(o, c), t = [
            2,
            3
            /* FIXED */
          ].indexOf(r.container.styles.position) === -1, r.container.styles.overflowX !== 0) {
            var w = dn(r.curves), a = pn(r.curves);
            As(w, a) || o.unshift(new An(
              a,
              6
              /* CONTENT */
            ));
          }
        } else
          o.unshift.apply(o, c);
        r = r.parent;
      }
      return o.filter(function(u) {
        return de(u.target, A);
      });
    }, e;
  }()
), ra = function(e, A, t, r) {
  e.container.elements.forEach(function(o) {
    var c = de(
      o.flags,
      4
      /* CREATES_REAL_STACKING_CONTEXT */
    ), w = de(
      o.flags,
      2
      /* CREATES_STACKING_CONTEXT */
    ), a = new tc(o, e);
    de(
      o.styles.display,
      2048
      /* LIST_ITEM */
    ) && r.push(a);
    var u = de(
      o.flags,
      8
      /* IS_LIST_OWNER */
    ) ? [] : r;
    if (c || w) {
      var n = c || o.styles.isPositioned() ? t : A, i = new rc(a);
      if (o.styles.isPositioned() || o.styles.opacity < 1 || o.styles.isTransformed()) {
        var f = o.styles.zIndex.order;
        if (f < 0) {
          var l = 0;
          n.negativeZIndex.some(function(Q, p) {
            return f > Q.element.container.styles.zIndex.order ? (l = p, !1) : l > 0;
          }), n.negativeZIndex.splice(l, 0, i);
        } else if (f > 0) {
          var h = 0;
          n.positiveZIndex.some(function(Q, p) {
            return f >= Q.element.container.styles.zIndex.order ? (h = p + 1, !1) : h > 0;
          }), n.positiveZIndex.splice(h, 0, i);
        } else
          n.zeroOrAutoZIndexOrTransformedOrOpacity.push(i);
      } else
        o.styles.isFloating() ? n.nonPositionedFloats.push(i) : n.nonPositionedInlineLevel.push(i);
      ra(a, i, c ? i : t, u);
    } else
      o.styles.isInlineLevel() ? A.inlineLevel.push(a) : A.nonInlineLevel.push(a), ra(a, A, t, u);
    de(
      o.flags,
      8
      /* IS_LIST_OWNER */
    ) && nc(o, u);
  });
}, nc = function(e, A) {
  for (var t = e instanceof zo ? e.start : 1, r = e instanceof zo ? e.reversed : !1, o = 0; o < A.length; o++) {
    var c = A[o];
    c.container instanceof Gs && typeof c.container.value == "number" && c.container.value !== 0 && (t = c.container.value), c.listValue = bt(t, c.container.styles.listStyleType, !0), t += r ? -1 : 1;
  }
}, Rw = function(e) {
  var A = new tc(e, null), t = new rc(A), r = [];
  return ra(A, t, t, r), nc(A.container, r), t;
}, es = function(e, A) {
  switch (A) {
    case 0:
      return Ve(e.topLeftBorderBox, e.topLeftPaddingBox, e.topRightBorderBox, e.topRightPaddingBox);
    case 1:
      return Ve(e.topRightBorderBox, e.topRightPaddingBox, e.bottomRightBorderBox, e.bottomRightPaddingBox);
    case 2:
      return Ve(e.bottomRightBorderBox, e.bottomRightPaddingBox, e.bottomLeftBorderBox, e.bottomLeftPaddingBox);
    case 3:
    default:
      return Ve(e.bottomLeftBorderBox, e.bottomLeftPaddingBox, e.topLeftBorderBox, e.topLeftPaddingBox);
  }
}, Mw = function(e, A) {
  switch (A) {
    case 0:
      return Ve(e.topLeftBorderBox, e.topLeftBorderDoubleOuterBox, e.topRightBorderBox, e.topRightBorderDoubleOuterBox);
    case 1:
      return Ve(e.topRightBorderBox, e.topRightBorderDoubleOuterBox, e.bottomRightBorderBox, e.bottomRightBorderDoubleOuterBox);
    case 2:
      return Ve(e.bottomRightBorderBox, e.bottomRightBorderDoubleOuterBox, e.bottomLeftBorderBox, e.bottomLeftBorderDoubleOuterBox);
    case 3:
    default:
      return Ve(e.bottomLeftBorderBox, e.bottomLeftBorderDoubleOuterBox, e.topLeftBorderBox, e.topLeftBorderDoubleOuterBox);
  }
}, Nw = function(e, A) {
  switch (A) {
    case 0:
      return Ve(e.topLeftBorderDoubleInnerBox, e.topLeftPaddingBox, e.topRightBorderDoubleInnerBox, e.topRightPaddingBox);
    case 1:
      return Ve(e.topRightBorderDoubleInnerBox, e.topRightPaddingBox, e.bottomRightBorderDoubleInnerBox, e.bottomRightPaddingBox);
    case 2:
      return Ve(e.bottomRightBorderDoubleInnerBox, e.bottomRightPaddingBox, e.bottomLeftBorderDoubleInnerBox, e.bottomLeftPaddingBox);
    case 3:
    default:
      return Ve(e.bottomLeftBorderDoubleInnerBox, e.bottomLeftPaddingBox, e.topLeftBorderDoubleInnerBox, e.topLeftPaddingBox);
  }
}, Gw = function(e, A) {
  switch (A) {
    case 0:
      return en(e.topLeftBorderStroke, e.topRightBorderStroke);
    case 1:
      return en(e.topRightBorderStroke, e.bottomRightBorderStroke);
    case 2:
      return en(e.bottomRightBorderStroke, e.bottomLeftBorderStroke);
    case 3:
    default:
      return en(e.bottomLeftBorderStroke, e.topLeftBorderStroke);
  }
}, en = function(e, A) {
  var t = [];
  return Ne(e) ? t.push(e.subdivide(0.5, !1)) : t.push(e), Ne(A) ? t.push(A.subdivide(0.5, !0)) : t.push(A), t;
}, Ve = function(e, A, t, r) {
  var o = [];
  return Ne(e) ? o.push(e.subdivide(0.5, !1)) : o.push(e), Ne(t) ? o.push(t.subdivide(0.5, !0)) : o.push(t), Ne(r) ? o.push(r.subdivide(0.5, !0).reverse()) : o.push(r), Ne(A) ? o.push(A.subdivide(0.5, !1).reverse()) : o.push(A), o;
}, oc = function(e) {
  var A = e.bounds, t = e.styles;
  return A.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
}, Cn = function(e) {
  var A = e.styles, t = e.bounds, r = qA(A.paddingLeft, t.width), o = qA(A.paddingRight, t.width), c = qA(A.paddingTop, t.width), w = qA(A.paddingBottom, t.width);
  return t.add(r + A.borderLeftWidth, c + A.borderTopWidth, -(A.borderRightWidth + A.borderLeftWidth + r + o), -(A.borderTopWidth + A.borderBottomWidth + c + w));
}, Pw = function(e, A) {
  return e === 0 ? A.bounds : e === 2 ? Cn(A) : oc(A);
}, Vw = function(e, A) {
  return e === 0 ? A.bounds : e === 2 ? Cn(A) : oc(A);
}, So = function(e, A, t) {
  var r = Pw(Yr(e.styles.backgroundOrigin, A), e), o = Vw(Yr(e.styles.backgroundClip, A), e), c = kw(Yr(e.styles.backgroundSize, A), t, r), w = c[0], a = c[1], u = Qt(Yr(e.styles.backgroundPosition, A), r.width - w, r.height - a), n = jw(Yr(e.styles.backgroundRepeat, A), u, c, r, o), i = Math.round(r.left + u[0]), f = Math.round(r.top + u[1]);
  return [n, i, f, w, a];
}, Jr = function(e) {
  return ZA(e) && e.value === zr.AUTO;
}, rn = function(e) {
  return typeof e == "number";
}, kw = function(e, A, t) {
  var r = A[0], o = A[1], c = A[2], w = e[0], a = e[1];
  if (!w)
    return [0, 0];
  if (he(w) && a && he(a))
    return [qA(w, t.width), qA(a, t.height)];
  var u = rn(c);
  if (ZA(w) && (w.value === zr.CONTAIN || w.value === zr.COVER)) {
    if (rn(c)) {
      var n = t.width / t.height;
      return n < c != (w.value === zr.COVER) ? [t.width, t.width / c] : [t.height * c, t.height];
    }
    return [t.width, t.height];
  }
  var i = rn(r), f = rn(o), l = i || f;
  if (Jr(w) && (!a || Jr(a))) {
    if (i && f)
      return [r, o];
    if (!u && !l)
      return [t.width, t.height];
    if (l && u) {
      var h = i ? r : o * c, Q = f ? o : r / c;
      return [h, Q];
    }
    var p = i ? r : t.width, d = f ? o : t.height;
    return [p, d];
  }
  if (u) {
    var v = 0, F = 0;
    return he(w) ? v = qA(w, t.width) : he(a) && (F = qA(a, t.height)), Jr(w) ? v = F * c : (!a || Jr(a)) && (F = v / c), [v, F];
  }
  var H = null, x = null;
  if (he(w) ? H = qA(w, t.width) : a && he(a) && (x = qA(a, t.height)), H !== null && (!a || Jr(a)) && (x = i && f ? H / r * o : t.height), x !== null && Jr(w) && (H = i && f ? x / o * r : t.width), H !== null && x !== null)
    return [H, x];
  throw new Error("Unable to calculate background-size for element");
}, Yr = function(e, A) {
  var t = e[A];
  return typeof t > "u" ? e[0] : t;
}, jw = function(e, A, t, r, o) {
  var c = A[0], w = A[1], a = t[0], u = t[1];
  switch (e) {
    case 2:
      return [
        new gA(Math.round(r.left), Math.round(r.top + w)),
        new gA(Math.round(r.left + r.width), Math.round(r.top + w)),
        new gA(Math.round(r.left + r.width), Math.round(u + r.top + w)),
        new gA(Math.round(r.left), Math.round(u + r.top + w))
      ];
    case 3:
      return [
        new gA(Math.round(r.left + c), Math.round(r.top)),
        new gA(Math.round(r.left + c + a), Math.round(r.top)),
        new gA(Math.round(r.left + c + a), Math.round(r.height + r.top)),
        new gA(Math.round(r.left + c), Math.round(r.height + r.top))
      ];
    case 1:
      return [
        new gA(Math.round(r.left + c), Math.round(r.top + w)),
        new gA(Math.round(r.left + c + a), Math.round(r.top + w)),
        new gA(Math.round(r.left + c + a), Math.round(r.top + w + u)),
        new gA(Math.round(r.left + c), Math.round(r.top + w + u))
      ];
    default:
      return [
        new gA(Math.round(o.left), Math.round(o.top)),
        new gA(Math.round(o.left + o.width), Math.round(o.top)),
        new gA(Math.round(o.left + o.width), Math.round(o.height + o.top)),
        new gA(Math.round(o.left), Math.round(o.height + o.top))
      ];
  }
}, Xw = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", rs = "Hidden Text", Jw = (
  /** @class */
  function() {
    function e(A) {
      this._data = {}, this._document = A;
    }
    return e.prototype.parseMetrics = function(A, t) {
      var r = this._document.createElement("div"), o = this._document.createElement("img"), c = this._document.createElement("span"), w = this._document.body;
      r.style.visibility = "hidden", r.style.fontFamily = A, r.style.fontSize = t, r.style.margin = "0", r.style.padding = "0", r.style.whiteSpace = "nowrap", w.appendChild(r), o.src = Xw, o.width = 1, o.height = 1, o.style.margin = "0", o.style.padding = "0", o.style.verticalAlign = "baseline", c.style.fontFamily = A, c.style.fontSize = t, c.style.margin = "0", c.style.padding = "0", c.appendChild(this._document.createTextNode(rs)), r.appendChild(c), r.appendChild(o);
      var a = o.offsetTop - c.offsetTop + 2;
      r.removeChild(c), r.appendChild(this._document.createTextNode(rs)), r.style.lineHeight = "normal", o.style.verticalAlign = "super";
      var u = o.offsetTop - r.offsetTop + 2;
      return w.removeChild(r), { baseline: a, middle: u };
    }, e.prototype.getMetrics = function(A, t) {
      var r = A + " " + t;
      return typeof this._data[r] > "u" && (this._data[r] = this.parseMetrics(A, t)), this._data[r];
    }, e;
  }()
), ac = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(A, t) {
      this.context = A, this.options = t;
    }
    return e;
  }()
), Ww = 1e4, Yw = (
  /** @class */
  function(e) {
    Ye(A, e);
    function A(t, r) {
      var o = e.call(this, t, r) || this;
      return o._activeEffects = [], o.canvas = r.canvas ? r.canvas : document.createElement("canvas"), o.ctx = o.canvas.getContext("2d"), r.canvas || (o.canvas.width = Math.floor(r.width * r.scale), o.canvas.height = Math.floor(r.height * r.scale), o.canvas.style.width = r.width + "px", o.canvas.style.height = r.height + "px"), o.fontMetrics = new Jw(document), o.ctx.scale(o.options.scale, o.options.scale), o.ctx.translate(-r.x, -r.y), o.ctx.textBaseline = "bottom", o._activeEffects = [], o.context.logger.debug("Canvas renderer initialized (" + r.width + "x" + r.height + ") with scale " + r.scale), o;
    }
    return A.prototype.applyEffects = function(t) {
      for (var r = this; this._activeEffects.length; )
        this.popEffect();
      t.forEach(function(o) {
        return r.applyEffect(o);
      });
    }, A.prototype.applyEffect = function(t) {
      this.ctx.save(), Tw(t) && (this.ctx.globalAlpha = t.opacity), Dw(t) && (this.ctx.translate(t.offsetX, t.offsetY), this.ctx.transform(t.matrix[0], t.matrix[1], t.matrix[2], t.matrix[3], t.matrix[4], t.matrix[5]), this.ctx.translate(-t.offsetX, -t.offsetY)), ec(t) && (this.path(t.path), this.ctx.clip()), this._activeEffects.push(t);
    }, A.prototype.popEffect = function() {
      this._activeEffects.pop(), this.ctx.restore();
    }, A.prototype.renderStack = function(t) {
      return Le(this, void 0, void 0, function() {
        var r;
        return He(this, function(o) {
          switch (o.label) {
            case 0:
              return r = t.element.container.styles, r.isVisible() ? [4, this.renderStackContent(t)] : [3, 2];
            case 1:
              o.sent(), o.label = 2;
            case 2:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderNode = function(t) {
      return Le(this, void 0, void 0, function() {
        return He(this, function(r) {
          switch (r.label) {
            case 0:
              if (de(
                t.container.flags,
                16
                /* DEBUG_RENDER */
              ))
                debugger;
              return t.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(t)] : [3, 3];
            case 1:
              return r.sent(), [4, this.renderNodeContent(t)];
            case 2:
              r.sent(), r.label = 3;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderTextWithLetterSpacing = function(t, r, o) {
      var c = this;
      if (r === 0)
        this.ctx.fillText(t.text, t.bounds.left, t.bounds.top + o);
      else {
        var w = sa(t.text);
        w.reduce(function(a, u) {
          return c.ctx.fillText(u, a, t.bounds.top + o), a + c.ctx.measureText(u).width;
        }, t.bounds.left);
      }
    }, A.prototype.createFontStyle = function(t) {
      var r = t.fontVariant.filter(function(w) {
        return w === "normal" || w === "small-caps";
      }).join(""), o = Ah(t.fontFamily).join(", "), c = It(t.fontSize) ? "" + t.fontSize.number + t.fontSize.unit : t.fontSize.number + "px";
      return [
        [t.fontStyle, r, t.fontWeight, c, o].join(" "),
        o,
        c
      ];
    }, A.prototype.renderTextNode = function(t, r) {
      return Le(this, void 0, void 0, function() {
        var o, c, w, a, u, n, i, f, l = this;
        return He(this, function(h) {
          return o = this.createFontStyle(r), c = o[0], w = o[1], a = o[2], this.ctx.font = c, this.ctx.direction = r.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", u = this.fontMetrics.getMetrics(w, a), n = u.baseline, i = u.middle, f = r.paintOrder, t.textBounds.forEach(function(Q) {
            f.forEach(function(p) {
              switch (p) {
                case 0:
                  l.ctx.fillStyle = Ue(r.color), l.renderTextWithLetterSpacing(Q, r.letterSpacing, n);
                  var d = r.textShadow;
                  d.length && Q.text.trim().length && (d.slice(0).reverse().forEach(function(v) {
                    l.ctx.shadowColor = Ue(v.color), l.ctx.shadowOffsetX = v.offsetX.number * l.options.scale, l.ctx.shadowOffsetY = v.offsetY.number * l.options.scale, l.ctx.shadowBlur = v.blur.number, l.renderTextWithLetterSpacing(Q, r.letterSpacing, n);
                  }), l.ctx.shadowColor = "", l.ctx.shadowOffsetX = 0, l.ctx.shadowOffsetY = 0, l.ctx.shadowBlur = 0), r.textDecorationLine.length && (l.ctx.fillStyle = Ue(r.textDecorationColor || r.color), r.textDecorationLine.forEach(function(v) {
                    switch (v) {
                      case 1:
                        l.ctx.fillRect(Q.bounds.left, Math.round(Q.bounds.top + n), Q.bounds.width, 1);
                        break;
                      case 2:
                        l.ctx.fillRect(Q.bounds.left, Math.round(Q.bounds.top), Q.bounds.width, 1);
                        break;
                      case 3:
                        l.ctx.fillRect(Q.bounds.left, Math.ceil(Q.bounds.top + i), Q.bounds.width, 1);
                        break;
                    }
                  }));
                  break;
                case 1:
                  r.webkitTextStrokeWidth && Q.text.trim().length && (l.ctx.strokeStyle = Ue(r.webkitTextStrokeColor), l.ctx.lineWidth = r.webkitTextStrokeWidth, l.ctx.lineJoin = window.chrome ? "miter" : "round", l.ctx.strokeText(Q.text, Q.bounds.left, Q.bounds.top + n)), l.ctx.strokeStyle = "", l.ctx.lineWidth = 0, l.ctx.lineJoin = "miter";
                  break;
              }
            });
          }), [
            2
            /*return*/
          ];
        });
      });
    }, A.prototype.renderReplacedElement = function(t, r, o) {
      if (o && t.intrinsicWidth > 0 && t.intrinsicHeight > 0) {
        var c = Cn(t), w = pn(r);
        this.path(w), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(o, 0, 0, t.intrinsicWidth, t.intrinsicHeight, c.left, c.top, c.width, c.height), this.ctx.restore();
      }
    }, A.prototype.renderNodeContent = function(t) {
      return Le(this, void 0, void 0, function() {
        var r, o, c, w, a, u, F, F, n, i, f, l, x, h, Q, O, p, d, v, F, H, x, O;
        return He(this, function(L) {
          switch (L.label) {
            case 0:
              this.applyEffects(t.getEffects(
                4
                /* CONTENT */
              )), r = t.container, o = t.curves, c = r.styles, w = 0, a = r.textNodes, L.label = 1;
            case 1:
              return w < a.length ? (u = a[w], [4, this.renderTextNode(u, c)]) : [3, 4];
            case 2:
              L.sent(), L.label = 3;
            case 3:
              return w++, [3, 1];
            case 4:
              if (!(r instanceof Rs))
                return [3, 8];
              L.label = 5;
            case 5:
              return L.trys.push([5, 7, , 8]), [4, this.context.cache.match(r.src)];
            case 6:
              return F = L.sent(), this.renderReplacedElement(r, o, F), [3, 8];
            case 7:
              return L.sent(), this.context.logger.error("Error loading image " + r.src), [3, 8];
            case 8:
              if (r instanceof Ms && this.renderReplacedElement(r, o, r.canvas), !(r instanceof Ns))
                return [3, 12];
              L.label = 9;
            case 9:
              return L.trys.push([9, 11, , 12]), [4, this.context.cache.match(r.svg)];
            case 10:
              return F = L.sent(), this.renderReplacedElement(r, o, F), [3, 12];
            case 11:
              return L.sent(), this.context.logger.error("Error loading svg " + r.svg.substring(0, 255)), [3, 12];
            case 12:
              return r instanceof ks && r.tree ? (n = new A(this.context, {
                scale: this.options.scale,
                backgroundColor: r.backgroundColor,
                x: 0,
                y: 0,
                width: r.width,
                height: r.height
              }), [4, n.render(r.tree)]) : [3, 14];
            case 13:
              i = L.sent(), r.width && r.height && this.ctx.drawImage(i, 0, 0, r.width, r.height, r.bounds.left, r.bounds.top, r.bounds.width, r.bounds.height), L.label = 14;
            case 14:
              if (r instanceof ca && (f = Math.min(r.bounds.width, r.bounds.height), r.type === gn ? r.checked && (this.ctx.save(), this.path([
                new gA(r.bounds.left + f * 0.39363, r.bounds.top + f * 0.79),
                new gA(r.bounds.left + f * 0.16, r.bounds.top + f * 0.5549),
                new gA(r.bounds.left + f * 0.27347, r.bounds.top + f * 0.44071),
                new gA(r.bounds.left + f * 0.39694, r.bounds.top + f * 0.5649),
                new gA(r.bounds.left + f * 0.72983, r.bounds.top + f * 0.23),
                new gA(r.bounds.left + f * 0.84, r.bounds.top + f * 0.34085),
                new gA(r.bounds.left + f * 0.39363, r.bounds.top + f * 0.79)
              ]), this.ctx.fillStyle = Ue(Vi), this.ctx.fill(), this.ctx.restore()) : r.type === wn && r.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(r.bounds.left + f / 2, r.bounds.top + f / 2, f / 4, 0, Math.PI * 2, !0), this.ctx.fillStyle = Ue(Vi), this.ctx.fill(), this.ctx.restore())), Zw(r) && r.value.length) {
                switch (l = this.createFontStyle(c), x = l[0], h = l[1], Q = this.fontMetrics.getMetrics(x, h).baseline, this.ctx.font = x, this.ctx.fillStyle = Ue(c.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = qw(r.styles.textAlign), O = Cn(r), p = 0, r.styles.textAlign) {
                  case 1:
                    p += O.width / 2;
                    break;
                  case 2:
                    p += O.width;
                    break;
                }
                d = O.add(p, 0, 0, -O.height / 2 + 1), this.ctx.save(), this.path([
                  new gA(O.left, O.top),
                  new gA(O.left + O.width, O.top),
                  new gA(O.left + O.width, O.top + O.height),
                  new gA(O.left, O.top + O.height)
                ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new Ft(r.value, d), c.letterSpacing, Q), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
              }
              if (!de(
                r.styles.display,
                2048
                /* LIST_ITEM */
              ))
                return [3, 20];
              if (r.styles.listStyleImage === null)
                return [3, 19];
              if (v = r.styles.listStyleImage, v.type !== 0)
                return [3, 18];
              F = void 0, H = v.url, L.label = 15;
            case 15:
              return L.trys.push([15, 17, , 18]), [4, this.context.cache.match(H)];
            case 16:
              return F = L.sent(), this.ctx.drawImage(F, r.bounds.left - (F.width + 10), r.bounds.top), [3, 18];
            case 17:
              return L.sent(), this.context.logger.error("Error loading list-style-image " + H), [3, 18];
            case 18:
              return [3, 20];
            case 19:
              t.listValue && r.styles.listStyleType !== -1 && (x = this.createFontStyle(c)[0], this.ctx.font = x, this.ctx.fillStyle = Ue(c.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", O = new Br(r.bounds.left, r.bounds.top + qA(r.styles.paddingTop, r.bounds.width), r.bounds.width, mi(c.lineHeight, c.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new Ft(t.listValue, O), c.letterSpacing, mi(c.lineHeight, c.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), L.label = 20;
            case 20:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderStackContent = function(t) {
      return Le(this, void 0, void 0, function() {
        var r, o, v, c, w, v, a, u, v, n, i, v, f, l, v, h, Q, v, p, d, v;
        return He(this, function(F) {
          switch (F.label) {
            case 0:
              if (de(
                t.element.container.flags,
                16
                /* DEBUG_RENDER */
              ))
                debugger;
              return [4, this.renderNodeBackgroundAndBorders(t.element)];
            case 1:
              F.sent(), r = 0, o = t.negativeZIndex, F.label = 2;
            case 2:
              return r < o.length ? (v = o[r], [4, this.renderStack(v)]) : [3, 5];
            case 3:
              F.sent(), F.label = 4;
            case 4:
              return r++, [3, 2];
            case 5:
              return [4, this.renderNodeContent(t.element)];
            case 6:
              F.sent(), c = 0, w = t.nonInlineLevel, F.label = 7;
            case 7:
              return c < w.length ? (v = w[c], [4, this.renderNode(v)]) : [3, 10];
            case 8:
              F.sent(), F.label = 9;
            case 9:
              return c++, [3, 7];
            case 10:
              a = 0, u = t.nonPositionedFloats, F.label = 11;
            case 11:
              return a < u.length ? (v = u[a], [4, this.renderStack(v)]) : [3, 14];
            case 12:
              F.sent(), F.label = 13;
            case 13:
              return a++, [3, 11];
            case 14:
              n = 0, i = t.nonPositionedInlineLevel, F.label = 15;
            case 15:
              return n < i.length ? (v = i[n], [4, this.renderStack(v)]) : [3, 18];
            case 16:
              F.sent(), F.label = 17;
            case 17:
              return n++, [3, 15];
            case 18:
              f = 0, l = t.inlineLevel, F.label = 19;
            case 19:
              return f < l.length ? (v = l[f], [4, this.renderNode(v)]) : [3, 22];
            case 20:
              F.sent(), F.label = 21;
            case 21:
              return f++, [3, 19];
            case 22:
              h = 0, Q = t.zeroOrAutoZIndexOrTransformedOrOpacity, F.label = 23;
            case 23:
              return h < Q.length ? (v = Q[h], [4, this.renderStack(v)]) : [3, 26];
            case 24:
              F.sent(), F.label = 25;
            case 25:
              return h++, [3, 23];
            case 26:
              p = 0, d = t.positiveZIndex, F.label = 27;
            case 27:
              return p < d.length ? (v = d[p], [4, this.renderStack(v)]) : [3, 30];
            case 28:
              F.sent(), F.label = 29;
            case 29:
              return p++, [3, 27];
            case 30:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.mask = function(t) {
      this.ctx.beginPath(), this.ctx.moveTo(0, 0), this.ctx.lineTo(this.canvas.width, 0), this.ctx.lineTo(this.canvas.width, this.canvas.height), this.ctx.lineTo(0, this.canvas.height), this.ctx.lineTo(0, 0), this.formatPath(t.slice(0).reverse()), this.ctx.closePath();
    }, A.prototype.path = function(t) {
      this.ctx.beginPath(), this.formatPath(t), this.ctx.closePath();
    }, A.prototype.formatPath = function(t) {
      var r = this;
      t.forEach(function(o, c) {
        var w = Ne(o) ? o.start : o;
        c === 0 ? r.ctx.moveTo(w.x, w.y) : r.ctx.lineTo(w.x, w.y), Ne(o) && r.ctx.bezierCurveTo(o.startControl.x, o.startControl.y, o.endControl.x, o.endControl.y, o.end.x, o.end.y);
      });
    }, A.prototype.renderRepeat = function(t, r, o, c) {
      this.path(t), this.ctx.fillStyle = r, this.ctx.translate(o, c), this.ctx.fill(), this.ctx.translate(-o, -c);
    }, A.prototype.resizeImage = function(t, r, o) {
      var c;
      if (t.width === r && t.height === o)
        return t;
      var w = (c = this.canvas.ownerDocument) !== null && c !== void 0 ? c : document, a = w.createElement("canvas");
      a.width = Math.max(1, r), a.height = Math.max(1, o);
      var u = a.getContext("2d");
      return u.drawImage(t, 0, 0, t.width, t.height, 0, 0, r, o), a;
    }, A.prototype.renderBackgroundImage = function(t) {
      return Le(this, void 0, void 0, function() {
        var r, o, c, w, a, u;
        return He(this, function(n) {
          switch (n.label) {
            case 0:
              r = t.styles.backgroundImage.length - 1, o = function(i) {
                var f, l, h, N, iA, oA, S, _, V, Q, N, iA, oA, S, _, p, d, v, F, H, x, O, L, G, V, b, N, P, k, S, _, Y, iA, oA, UA, HA, CA, EA, FA, QA, X, M;
                return He(this, function(q) {
                  switch (q.label) {
                    case 0:
                      if (i.type !== 0)
                        return [3, 5];
                      f = void 0, l = i.url, q.label = 1;
                    case 1:
                      return q.trys.push([1, 3, , 4]), [4, c.context.cache.match(l)];
                    case 2:
                      return f = q.sent(), [3, 4];
                    case 3:
                      return q.sent(), c.context.logger.error("Error loading background-image " + l), [3, 4];
                    case 4:
                      return f && (h = So(t, r, [
                        f.width,
                        f.height,
                        f.width / f.height
                      ]), N = h[0], iA = h[1], oA = h[2], S = h[3], _ = h[4], V = c.ctx.createPattern(c.resizeImage(f, S, _), "repeat"), c.renderRepeat(N, V, iA, oA)), [3, 6];
                    case 5:
                      Df(i) ? (Q = So(t, r, [null, null, null]), N = Q[0], iA = Q[1], oA = Q[2], S = Q[3], _ = Q[4], p = xf(i.angle, S, _), d = p[0], v = p[1], F = p[2], H = p[3], x = p[4], O = document.createElement("canvas"), O.width = S, O.height = _, L = O.getContext("2d"), G = L.createLinearGradient(v, H, F, x), yi(i.stops, d).forEach(function(uA) {
                        return G.addColorStop(uA.stop, Ue(uA.color));
                      }), L.fillStyle = G, L.fillRect(0, 0, S, _), S > 0 && _ > 0 && (V = c.ctx.createPattern(O, "repeat"), c.renderRepeat(N, V, iA, oA))) : Tf(i) && (b = So(t, r, [
                        null,
                        null,
                        null
                      ]), N = b[0], P = b[1], k = b[2], S = b[3], _ = b[4], Y = i.position.length === 0 ? [oa] : i.position, iA = qA(Y[0], S), oA = qA(Y[Y.length - 1], _), UA = Sf(i, iA, oA, S, _), HA = UA[0], CA = UA[1], HA > 0 && CA > 0 && (EA = c.ctx.createRadialGradient(P + iA, k + oA, 0, P + iA, k + oA, HA), yi(i.stops, HA * 2).forEach(function(uA) {
                        return EA.addColorStop(uA.stop, Ue(uA.color));
                      }), c.path(N), c.ctx.fillStyle = EA, HA !== CA ? (FA = t.bounds.left + 0.5 * t.bounds.width, QA = t.bounds.top + 0.5 * t.bounds.height, X = CA / HA, M = 1 / X, c.ctx.save(), c.ctx.translate(FA, QA), c.ctx.transform(1, 0, 0, X, 0, 0), c.ctx.translate(-FA, -QA), c.ctx.fillRect(P, M * (k - QA) + QA, S, _ * M), c.ctx.restore()) : c.ctx.fill())), q.label = 6;
                    case 6:
                      return r--, [
                        2
                        /*return*/
                      ];
                  }
                });
              }, c = this, w = 0, a = t.styles.backgroundImage.slice(0).reverse(), n.label = 1;
            case 1:
              return w < a.length ? (u = a[w], [5, o(u)]) : [3, 4];
            case 2:
              n.sent(), n.label = 3;
            case 3:
              return w++, [3, 1];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderSolidBorder = function(t, r, o) {
      return Le(this, void 0, void 0, function() {
        return He(this, function(c) {
          return this.path(es(o, r)), this.ctx.fillStyle = Ue(t), this.ctx.fill(), [
            2
            /*return*/
          ];
        });
      });
    }, A.prototype.renderDoubleBorder = function(t, r, o, c) {
      return Le(this, void 0, void 0, function() {
        var w, a;
        return He(this, function(u) {
          switch (u.label) {
            case 0:
              return r < 3 ? [4, this.renderSolidBorder(t, o, c)] : [3, 2];
            case 1:
              return u.sent(), [
                2
                /*return*/
              ];
            case 2:
              return w = Mw(c, o), this.path(w), this.ctx.fillStyle = Ue(t), this.ctx.fill(), a = Nw(c, o), this.path(a), this.ctx.fill(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderNodeBackgroundAndBorders = function(t) {
      return Le(this, void 0, void 0, function() {
        var r, o, c, w, a, u, n, i, f = this;
        return He(this, function(l) {
          switch (l.label) {
            case 0:
              return this.applyEffects(t.getEffects(
                2
                /* BACKGROUND_BORDERS */
              )), r = t.container.styles, o = !Ur(r.backgroundColor) || r.backgroundImage.length, c = [
                { style: r.borderTopStyle, color: r.borderTopColor, width: r.borderTopWidth },
                { style: r.borderRightStyle, color: r.borderRightColor, width: r.borderRightWidth },
                { style: r.borderBottomStyle, color: r.borderBottomColor, width: r.borderBottomWidth },
                { style: r.borderLeftStyle, color: r.borderLeftColor, width: r.borderLeftWidth }
              ], w = zw(Yr(r.backgroundClip, 0), t.curves), o || r.boxShadow.length ? (this.ctx.save(), this.path(w), this.ctx.clip(), Ur(r.backgroundColor) || (this.ctx.fillStyle = Ue(r.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(t.container)]) : [3, 2];
            case 1:
              l.sent(), this.ctx.restore(), r.boxShadow.slice(0).reverse().forEach(function(h) {
                f.ctx.save();
                var Q = dn(t.curves), p = h.inset ? 0 : Ww, d = _w(Q, -p + (h.inset ? 1 : -1) * h.spread.number, (h.inset ? 1 : -1) * h.spread.number, h.spread.number * (h.inset ? -2 : 2), h.spread.number * (h.inset ? -2 : 2));
                h.inset ? (f.path(Q), f.ctx.clip(), f.mask(d)) : (f.mask(Q), f.ctx.clip(), f.path(d)), f.ctx.shadowOffsetX = h.offsetX.number + p, f.ctx.shadowOffsetY = h.offsetY.number, f.ctx.shadowColor = Ue(h.color), f.ctx.shadowBlur = h.blur.number, f.ctx.fillStyle = h.inset ? Ue(h.color) : "rgba(0,0,0,1)", f.ctx.fill(), f.ctx.restore();
              }), l.label = 2;
            case 2:
              a = 0, u = 0, n = c, l.label = 3;
            case 3:
              return u < n.length ? (i = n[u], i.style !== 0 && !Ur(i.color) && i.width > 0 ? i.style !== 2 ? [3, 5] : [4, this.renderDashedDottedBorder(
                i.color,
                i.width,
                a,
                t.curves,
                2
                /* DASHED */
              )] : [3, 11]) : [3, 13];
            case 4:
              return l.sent(), [3, 11];
            case 5:
              return i.style !== 3 ? [3, 7] : [4, this.renderDashedDottedBorder(
                i.color,
                i.width,
                a,
                t.curves,
                3
                /* DOTTED */
              )];
            case 6:
              return l.sent(), [3, 11];
            case 7:
              return i.style !== 4 ? [3, 9] : [4, this.renderDoubleBorder(i.color, i.width, a, t.curves)];
            case 8:
              return l.sent(), [3, 11];
            case 9:
              return [4, this.renderSolidBorder(i.color, a, t.curves)];
            case 10:
              l.sent(), l.label = 11;
            case 11:
              a++, l.label = 12;
            case 12:
              return u++, [3, 3];
            case 13:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderDashedDottedBorder = function(t, r, o, c, w) {
      return Le(this, void 0, void 0, function() {
        var a, u, n, i, f, l, h, Q, p, d, v, F, H, x, O, L, O, L;
        return He(this, function(G) {
          return this.ctx.save(), a = Gw(c, o), u = es(c, o), w === 2 && (this.path(u), this.ctx.clip()), Ne(u[0]) ? (n = u[0].start.x, i = u[0].start.y) : (n = u[0].x, i = u[0].y), Ne(u[1]) ? (f = u[1].end.x, l = u[1].end.y) : (f = u[1].x, l = u[1].y), o === 0 || o === 2 ? h = Math.abs(n - f) : h = Math.abs(i - l), this.ctx.beginPath(), w === 3 ? this.formatPath(a) : this.formatPath(u.slice(0, 2)), Q = r < 3 ? r * 3 : r * 2, p = r < 3 ? r * 2 : r, w === 3 && (Q = r, p = r), d = !0, h <= Q * 2 ? d = !1 : h <= Q * 2 + p ? (v = h / (2 * Q + p), Q *= v, p *= v) : (F = Math.floor((h + p) / (Q + p)), H = (h - F * Q) / (F - 1), x = (h - (F + 1) * Q) / F, p = x <= 0 || Math.abs(p - H) < Math.abs(p - x) ? H : x), d && (w === 3 ? this.ctx.setLineDash([0, Q + p]) : this.ctx.setLineDash([Q, p])), w === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = r) : this.ctx.lineWidth = r * 2 + 1.1, this.ctx.strokeStyle = Ue(t), this.ctx.stroke(), this.ctx.setLineDash([]), w === 2 && (Ne(u[0]) && (O = u[3], L = u[0], this.ctx.beginPath(), this.formatPath([new gA(O.end.x, O.end.y), new gA(L.start.x, L.start.y)]), this.ctx.stroke()), Ne(u[1]) && (O = u[1], L = u[2], this.ctx.beginPath(), this.formatPath([new gA(O.end.x, O.end.y), new gA(L.start.x, L.start.y)]), this.ctx.stroke())), this.ctx.restore(), [
            2
            /*return*/
          ];
        });
      });
    }, A.prototype.render = function(t) {
      return Le(this, void 0, void 0, function() {
        var r;
        return He(this, function(o) {
          switch (o.label) {
            case 0:
              return this.options.backgroundColor && (this.ctx.fillStyle = Ue(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), r = Rw(t), [4, this.renderStack(r)];
            case 1:
              return o.sent(), this.applyEffects([]), [2, this.canvas];
          }
        });
      });
    }, A;
  }(ac)
), Zw = function(e) {
  return e instanceof Vs || e instanceof Ps ? !0 : e instanceof ca && e.type !== wn && e.type !== gn;
}, zw = function(e, A) {
  switch (e) {
    case 0:
      return dn(A);
    case 2:
      return Lw(A);
    case 1:
    default:
      return pn(A);
  }
}, qw = function(e) {
  switch (e) {
    case 1:
      return "center";
    case 2:
      return "right";
    case 0:
    default:
      return "left";
  }
}, $w = ["-apple-system", "system-ui"], Ah = function(e) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? e.filter(function(A) {
    return $w.indexOf(A) === -1;
  }) : e;
}, eh = (
  /** @class */
  function(e) {
    Ye(A, e);
    function A(t, r) {
      var o = e.call(this, t, r) || this;
      return o.canvas = r.canvas ? r.canvas : document.createElement("canvas"), o.ctx = o.canvas.getContext("2d"), o.options = r, o.canvas.width = Math.floor(r.width * r.scale), o.canvas.height = Math.floor(r.height * r.scale), o.canvas.style.width = r.width + "px", o.canvas.style.height = r.height + "px", o.ctx.scale(o.options.scale, o.options.scale), o.ctx.translate(-r.x, -r.y), o.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + r.width + "x" + r.height + " at " + r.x + "," + r.y + ") with scale " + r.scale), o;
    }
    return A.prototype.render = function(t) {
      return Le(this, void 0, void 0, function() {
        var r, o;
        return He(this, function(c) {
          switch (c.label) {
            case 0:
              return r = Zo(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, t), [4, rh(r)];
            case 1:
              return o = c.sent(), this.options.backgroundColor && (this.ctx.fillStyle = Ue(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(o, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
          }
        });
      });
    }, A;
  }(ac)
), rh = function(e) {
  return new Promise(function(A, t) {
    var r = new Image();
    r.onload = function() {
      A(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e));
  });
}, th = (
  /** @class */
  function() {
    function e(A) {
      var t = A.id, r = A.enabled;
      this.id = t, this.enabled = r, this.start = Date.now();
    }
    return e.prototype.debug = function() {
      for (var A = [], t = 0; t < arguments.length; t++)
        A[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, Ot([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
    }, e.prototype.getTime = function() {
      return Date.now() - this.start;
    }, e.prototype.info = function() {
      for (var A = [], t = 0; t < arguments.length; t++)
        A[t] = arguments[t];
      this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, Ot([this.id, this.getTime() + "ms"], A));
    }, e.prototype.warn = function() {
      for (var A = [], t = 0; t < arguments.length; t++)
        A[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, Ot([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
    }, e.prototype.error = function() {
      for (var A = [], t = 0; t < arguments.length; t++)
        A[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, Ot([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
    }, e.instances = {}, e;
  }()
), nh = (
  /** @class */
  function() {
    function e(A, t) {
      var r;
      this.windowBounds = t, this.instanceName = "#" + e.instanceCount++, this.logger = new th({ id: this.instanceName, enabled: A.logging }), this.cache = (r = A.cache) !== null && r !== void 0 ? r : new yw(this, A);
    }
    return e.instanceCount = 1, e;
  }()
), oh = function(e, A) {
  return A === void 0 && (A = {}), ah(e, A);
};
typeof window < "u" && Ac.setContext(window);
var ah = function(e, A) {
  return Le(void 0, void 0, void 0, function() {
    var t, r, o, c, w, a, u, n, i, f, l, h, Q, p, d, v, F, H, x, O, G, L, G, V, b, N, P, k, S, _, Y, iA, oA, UA, HA, CA, EA, FA, QA, X;
    return He(this, function(M) {
      switch (M.label) {
        case 0:
          if (!e || typeof e != "object")
            return [2, Promise.reject("Invalid element provided as first argument")];
          if (t = e.ownerDocument, !t)
            throw new Error("Element is not attached to a Document");
          if (r = t.defaultView, !r)
            throw new Error("Document is not attached to a Window");
          return o = {
            allowTaint: (V = A.allowTaint) !== null && V !== void 0 ? V : !1,
            imageTimeout: (b = A.imageTimeout) !== null && b !== void 0 ? b : 15e3,
            proxy: A.proxy,
            useCORS: (N = A.useCORS) !== null && N !== void 0 ? N : !1
          }, c = Do({ logging: (P = A.logging) !== null && P !== void 0 ? P : !0, cache: A.cache }, o), w = {
            windowWidth: (k = A.windowWidth) !== null && k !== void 0 ? k : r.innerWidth,
            windowHeight: (S = A.windowHeight) !== null && S !== void 0 ? S : r.innerHeight,
            scrollX: (_ = A.scrollX) !== null && _ !== void 0 ? _ : r.pageXOffset,
            scrollY: (Y = A.scrollY) !== null && Y !== void 0 ? Y : r.pageYOffset
          }, a = new Br(w.scrollX, w.scrollY, w.windowWidth, w.windowHeight), u = new nh(c, a), n = (iA = A.foreignObjectRendering) !== null && iA !== void 0 ? iA : !1, i = {
            allowTaint: (oA = A.allowTaint) !== null && oA !== void 0 ? oA : !1,
            onclone: A.onclone,
            ignoreElements: A.ignoreElements,
            inlineImages: n,
            copyStyles: n
          }, u.logger.debug("Starting document clone with size " + a.width + "x" + a.height + " scrolled to " + -a.left + "," + -a.top), f = new qi(u, e, i), l = f.clonedReferenceElement, l ? [4, f.toIFrame(t, a)] : [2, Promise.reject("Unable to find element in cloned iframe")];
        case 1:
          return h = M.sent(), Q = ua(l) || iw(l) ? Tu(l.ownerDocument) : Un(u, l), p = Q.width, d = Q.height, v = Q.left, F = Q.top, H = ih(u, l, A.backgroundColor), x = {
            canvas: A.canvas,
            backgroundColor: H,
            scale: (HA = (UA = A.scale) !== null && UA !== void 0 ? UA : r.devicePixelRatio) !== null && HA !== void 0 ? HA : 1,
            x: ((CA = A.x) !== null && CA !== void 0 ? CA : 0) + v,
            y: ((EA = A.y) !== null && EA !== void 0 ? EA : 0) + F,
            width: (FA = A.width) !== null && FA !== void 0 ? FA : Math.ceil(p),
            height: (QA = A.height) !== null && QA !== void 0 ? QA : Math.ceil(d)
          }, n ? (u.logger.debug("Document cloned, using foreign object rendering"), G = new eh(u, x), [4, G.render(l)]) : [3, 3];
        case 2:
          return O = M.sent(), [3, 5];
        case 3:
          return u.logger.debug("Document cloned, element located at " + v + "," + F + " with size " + p + "x" + d + " using computed rendering"), u.logger.debug("Starting DOM parsing"), L = Xs(u, l), H === L.styles.backgroundColor && (L.styles.backgroundColor = ur.TRANSPARENT), u.logger.debug("Starting renderer for element at " + x.x + "," + x.y + " with size " + x.width + "x" + x.height), G = new Yw(u, x), [4, G.render(L)];
        case 4:
          O = M.sent(), M.label = 5;
        case 5:
          return (!((X = A.removeContainer) !== null && X !== void 0) || X) && (qi.destroy(h) || u.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), u.logger.debug("Finished rendering"), [2, O];
      }
    });
  });
}, ih = function(e, A, t) {
  var r = A.ownerDocument, o = r.documentElement ? vt(e, getComputedStyle(r.documentElement).backgroundColor) : ur.TRANSPARENT, c = r.body ? vt(e, getComputedStyle(r.body).backgroundColor) : ur.TRANSPARENT, w = typeof t == "string" ? vt(e, t) : t === null ? ur.TRANSPARENT : 4294967295;
  return A === r.documentElement ? Ur(o) ? Ur(c) ? w : c : o : w;
};
function uh({ key: e, ref: A, initData: t, onDrag: r }) {
  const o = vn(), c = YA.useModel("dragModel/offset", !1, o)[0], w = YA.useModel("dragModel/scale", !1, o)[0], { state: a } = YA.useModel(`dragModel/drags/${e}`, !1, o)[0] || {}, [u, n] = Or(!1), [i, f] = Or(null);
  Ge(() => {
    if (!a)
      return;
    const [l, h] = YA.get(`dragModel/drags/${e}/data`, o), Q = a.split("+"), p = Q[0], d = Q.slice(-1)[0], v = YA.get(`dragModel/drops/${d}/data`, o)[0];
    r && r({
      data: l,
      setData: h,
      type: p,
      dropData: v
    });
  }, [a, o, e]), Ge(() => {
    const l = YA.get(`dragModel/drags/${e}`, o)[1];
    return f(`easy-drag-${e}`), l({ data: t }).then(() => {
      n(!0);
    }).catch((h) => {
      n(!1);
    }), () => {
      n(!1), l(null);
    };
  }, [e, o]), Ge(() => {
    if (!u || !i)
      return;
    const l = un(A);
    if (!l)
      return;
    const h = ts(l, "easy-drag-");
    h && l.classList.remove(h), l.classList.add(i);
  }, [u, i, A, o]), Ge(() => {
    if (!u)
      return;
    const l = un(A);
    if (!l)
      return;
    const h = async (d) => {
      d.preventDefault(), l.setPointerCapture(d.pointerId);
      const { clientX: v, clientY: F } = d, H = YA.get("dragModel/offset", o)[0], x = YA.get("dragModel/scale", o)[0], O = v - H.x, L = F - H.y, G = YA.get(
        `dragModel/drags/${e}/startPosition`,
        o
      )[1], V = l.getBoundingClientRect(), { width: b, height: N, left: P, top: k } = V, S = await oh(l, {
        useCORS: !0,
        backgroundColor: "black"
      }), _ = S.getContext("2d"), Y = _.getImageData(0, 0, S.width, S.height), iA = Y.data;
      for (var oA = 0; oA < iA.length; oA += 4)
        iA[oA + 3] = iA[oA + 3] * 0.5;
      _.putImageData(Y, 0, 0);
      const UA = YA.get(`dragModel/drags/${e}/preview`, o)[1], HA = {
        operationType: Be.STARTDRAG,
        key: e,
        class: `${e}-preview`,
        src: S.toDataURL(),
        style: {
          position: "absolute",
          width: b * x.x + "px",
          height: N * x.y + "px",
          left: (P - H.x) * x.x + "px",
          top: (k - H.y) * x.y + "px",
          zIndex: 100
        }
      };
      await UA(HA, { callbacks: "updatePreview" }), await G({ x: O, y: L });
    }, Q = async (d) => {
      d.preventDefault();
      const v = YA.get(
        `dragModel/drags/${e}/startPosition`,
        o
      )[0];
      if (!v)
        return;
      const { clientX: F, clientY: H } = d, x = YA.get("dragModel/offset", o)[0], O = YA.get("dragModel/scale", o)[0], L = F - x.x, G = H - x.y, V = (L - v.x) * O.x, b = (G - v.y) * O.y, N = YA.get(`dragModel/drags/${e}/preview`, o)[1];
      await N(
        {
          operationType: Be.DRAGGING,
          key: e,
          x: L,
          y: G,
          class: `${e}-preview`,
          style: {
            transform: `translate(${V}px,${b}px)`
          }
        },
        { callbacks: "updatePreview" }
      );
    }, p = async (d) => {
      d.preventDefault();
      const { clientX: v, clientY: F } = d, H = v - c.x, x = F - c.y, O = YA.get(`dragModel/drags/${e}/preview`, o)[1];
      await O(
        {
          operationType: Be.DROP,
          key: e,
          x: H,
          y: x,
          class: `${e}-preview`
        },
        { callbacks: "updatePreview" }
      );
      const L = YA.get(
        `dragModel/drags/${e}/startPosition`,
        o
      )[1];
      await L(null);
    };
    return l.addEventListener("pointerdown", h), l.addEventListener("pointermove", Q), l.addEventListener("pointerup", p), l.addEventListener("pointerCancel", p), () => {
      l.removeEventListener("pointerdown", h), l.removeEventListener("pointermove", Q), l.removeEventListener("pointerup", p), l.removeEventListener("pointerCancel", p);
    };
  }, [u, A, e, JSON.stringify(c), JSON.stringify(w), o]);
}
function Bh({ acceptKeys: e = ["*"], initData: A, ref: t, onDrop: r }) {
  const o = vn(), c = YA.useModel("dragModel/offset", !1, o)[0], w = Or(`easy-drop-${cr()}`)[0], { state: a } = YA.useModel(`dragModel/drops/${w}`, !1, o)[0] || {}, [u, n] = Or(!1);
  Ge(() => {
    if (!a)
      return;
    const [i, f] = YA.get(`dragModel/drops/${w}/data`, o), [l, h] = a.split("+"), Q = YA.get(`dragModel/drags/${h}/data`, o)[0];
    r && r({ dragState: Q, setData: f, data: i, type: l });
  }, [a, o, w]), Ge(() => {
    const i = YA.get(`dragModel/drops/${w}`, o)[1];
    return i({ data: A }).then(() => {
      n(!0);
    }).catch((f) => {
      n(!1);
    }), () => {
      n(!1), i(null);
    };
  }, [w, o]), Ge(() => {
    if (!u)
      return;
    if (!Array.isArray(e) || e.length === 0) {
      console.error("acceptKeys must be a non-empty array");
      return;
    }
    const i = YA.get(
      `dragModel/drops/${w}/acceptKeys`,
      o
    )[1];
    i(e);
  }, [u, w, JSON.stringify(e), o]), Ge(() => {
    const i = un(t);
    if (!i)
      return;
    const f = ts(i, "easy-drop-");
    f && i.classList.remove(f), i.classList.add(w);
  }, [t, w]), Ge(() => {
    if (!u)
      return;
    const i = un(t);
    if (!i)
      return;
    const f = i.getBoundingClientRect(), l = [
      [f.left - c.x, f.top - c.y],
      [f.right - c.x, f.top - c.y],
      [f.right - c.x, f.bottom - c.y],
      [f.left - c.x, f.bottom - c.y]
    ], h = YA.get(
      `dragModel/drops/${w}/polygon`,
      o
    )[1];
    h(l);
  }, [u, w, t, JSON.stringify(c), o]);
}
function fh(e) {
  if (!e)
    throw new Error("key is required");
  const A = vn(), t = YA.useModel(`dragModel/drags/${e}`, !1, A)[0], [r, o] = Or(null);
  return Ge(() => {
    if (!t)
      return;
    const { data: c } = t;
    o(c);
  }, [JSON.stringify(t)]), r;
}
export {
  ch as default,
  Be as operationType,
  fh as useData,
  uh as useDrag,
  Bh as useDrop
};
