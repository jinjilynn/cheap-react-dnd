import ra, { useRef as Eu, useState as zr, useEffect as We, createContext as mu, useContext as $a } from "react";
var at = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function bu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var So = { exports: {} }, it = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ai;
function Hu() {
  if (Ai)
    return it;
  Ai = 1;
  var e = ra, A = Symbol.for("react.element"), t = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function w(a, B, n) {
    var c, u = {}, l = null, h = null;
    n !== void 0 && (l = "" + n), B.key !== void 0 && (l = "" + B.key), B.ref !== void 0 && (h = B.ref);
    for (c in B)
      r.call(B, c) && !i.hasOwnProperty(c) && (u[c] = B[c]);
    if (a && a.defaultProps)
      for (c in B = a.defaultProps, B)
        u[c] === void 0 && (u[c] = B[c]);
    return { $$typeof: A, type: a, key: l, ref: h, props: u, _owner: o.current };
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
var ei;
function Iu() {
  return ei || (ei = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ra, A = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), a = Symbol.for("react.context"), B = Symbol.for("react.forward_ref"), n = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), l = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), d = Symbol.iterator, p = "@@iterator";
    function Q(y) {
      if (y === null || typeof y != "object")
        return null;
      var j = d && y[d] || y[p];
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
    var x = !1, O = !1, S = !1, N = !1, G = !1, b;
    b = Symbol.for("react.module.reference");
    function P(y) {
      return !!(typeof y == "string" || typeof y == "function" || y === r || y === i || G || y === o || y === n || y === c || N || y === h || x || O || S || typeof y == "object" && y !== null && (y.$$typeof === l || y.$$typeof === u || y.$$typeof === w || y.$$typeof === a || y.$$typeof === B || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      y.$$typeof === b || y.getModuleId !== void 0));
    }
    function V(y, j, $) {
      var sA = y.displayName;
      if (sA)
        return sA;
      var bA = j.displayName || j.name || "";
      return bA !== "" ? $ + "(" + bA + ")" : $;
    }
    function k(y) {
      return y.displayName || "Context";
    }
    function L(y) {
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
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case n:
          return "Suspense";
        case c:
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
          case B:
            return V(y, y.render, "ForwardRef");
          case u:
            var sA = y.displayName || null;
            return sA !== null ? sA : L(y.type) || "Memo";
          case l: {
            var bA = y, MA = bA._payload, DA = bA._init;
            try {
              return L(DA(MA));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, Y = 0, iA, oA, CA, HA, vA, EA, FA;
    function dA() {
    }
    dA.__reactDisabledLog = !0;
    function X() {
      {
        if (Y === 0) {
          iA = console.log, oA = console.info, CA = console.warn, HA = console.error, vA = console.group, EA = console.groupCollapsed, FA = console.groupEnd;
          var y = {
            configurable: !0,
            enumerable: !0,
            value: dA,
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
            log: D({}, y, {
              value: iA
            }),
            info: D({}, y, {
              value: oA
            }),
            warn: D({}, y, {
              value: CA
            }),
            error: D({}, y, {
              value: HA
            }),
            group: D({}, y, {
              value: vA
            }),
            groupCollapsed: D({}, y, {
              value: EA
            }),
            groupEnd: D({}, y, {
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
      var Re = y ? y.displayName || y.name : "", Dr = Re ? aA(Re) : "";
      return typeof y == "function" && VA.set(y, Dr), Dr;
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
        case c:
          return aA("SuspenseList");
      }
      if (typeof y == "object")
        switch (y.$$typeof) {
          case B:
            return yA(y.render);
          case u:
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
    var WA = Object.prototype.hasOwnProperty, ne = {}, le = v.ReactDebugCurrentFrame;
    function ee(y) {
      if (y) {
        var j = y._owner, $ = KA(y.type, y._source, j ? j.type : null);
        le.setExtraStackFrame($);
      } else
        le.setExtraStackFrame(null);
    }
    function ge(y, j, $, sA, bA) {
      {
        var MA = Function.call.bind(WA);
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
    }, Ve, ze, qe;
    qe = {};
    function cA(y) {
      if (WA.call(y, "ref")) {
        var j = Object.getOwnPropertyDescriptor(y, "ref").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return y.ref !== void 0;
    }
    function pA(y) {
      if (WA.call(y, "key")) {
        var j = Object.getOwnPropertyDescriptor(y, "key").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return y.key !== void 0;
    }
    function GA(y, j) {
      if (typeof y.ref == "string" && be.current && j && be.current.stateNode !== j) {
        var $ = L(be.current.type);
        qe[$] || (F('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', L(be.current.type), y.ref), qe[$] = !0);
      }
    }
    function YA(y, j) {
      {
        var $ = function() {
          Ve || (Ve = !0, F("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j));
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
    var de = function(y, j, $, sA, bA, MA, DA) {
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
    function ke(y, j, $, sA, bA) {
      {
        var MA, DA = {}, _A = null, re = null;
        $ !== void 0 && (ae($), _A = "" + $), pA(j) && (ae(j.key), _A = "" + j.key), cA(j) && (re = j.ref, GA(j, bA));
        for (MA in j)
          WA.call(j, MA) && !Ze.hasOwnProperty(MA) && (DA[MA] = j[MA]);
        if (y && y.defaultProps) {
          var IA = y.defaultProps;
          for (MA in IA)
            DA[MA] === void 0 && (DA[MA] = IA[MA]);
        }
        if (_A || re) {
          var $A = typeof y == "function" ? y.displayName || y.name || "Unknown" : y;
          _A && YA(DA, $A), re && ce(DA, $A);
        }
        return de(y, _A, re, bA, sA, be.current, DA);
      }
    }
    var je = v.ReactCurrentOwner, tr = v.ReactDebugCurrentFrame;
    function $e(y) {
      if (y) {
        var j = y._owner, $ = KA(y.type, y._source, j ? j.type : null);
        tr.setExtraStackFrame($);
      } else
        tr.setExtraStackFrame(null);
    }
    var Br;
    Br = !1;
    function Xe(y) {
      return typeof y == "object" && y !== null && y.$$typeof === A;
    }
    function Or() {
      {
        if (je.current) {
          var y = L(je.current.type);
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
        var j = Or();
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
        y && y._owner && y._owner !== je.current && (sA = " It was passed a child from " + L(y._owner.type) + "."), $e(y), F('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', $, sA), $e(null);
      }
    }
    function _(y, j) {
      {
        if (typeof y != "object")
          return;
        if (se(y))
          for (var $ = 0; $ < y.length; $++) {
            var sA = y[$];
            Xe(sA) && m(sA, j);
          }
        else if (Xe(y))
          y._store && (y._store.validated = !0);
        else if (y) {
          var bA = Q(y);
          if (typeof bA == "function" && bA !== y.entries)
            for (var MA = bA.call(y), DA; !(DA = MA.next()).done; )
              Xe(DA.value) && m(DA.value, j);
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
        else if (typeof j == "object" && (j.$$typeof === B || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        j.$$typeof === u))
          $ = j.propTypes;
        else
          return;
        if ($) {
          var sA = L(j);
          ge($, y.props, "prop", sA, y);
        } else if (j.PropTypes !== void 0 && !Br) {
          Br = !0;
          var bA = L(j);
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
        var DA = P(y);
        if (!DA) {
          var _A = "";
          (y === void 0 || typeof y == "object" && y !== null && Object.keys(y).length === 0) && (_A += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var re = yr(bA);
          re ? _A += re : _A += Or();
          var IA;
          y === null ? IA = "null" : se(y) ? IA = "array" : y !== void 0 && y.$$typeof === A ? (IA = "<" + (L(y.type) || "Unknown") + " />", _A = " Did you accidentally export a JSX literal instead of a component?") : IA = typeof y, F("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", IA, _A);
        }
        var $A = ke(y, j, $, bA, MA);
        if ($A == null)
          return $A;
        if (DA) {
          var xe = j.children;
          if (xe !== void 0)
            if (sA)
              if (se(xe)) {
                for (var Re = 0; Re < xe.length; Re++)
                  _(xe[Re], y);
                Object.freeze && Object.freeze(xe);
              } else
                F("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _(xe, y);
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
process.env.NODE_ENV === "production" ? So.exports = Hu() : So.exports = Iu();
var nn = So.exports;
const xu = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let gr = (e = 21) => {
  let A = "", t = crypto.getRandomValues(new Uint8Array(e));
  for (; e--; )
    A += xu[t[e] & 63];
  return A;
};
var un = { exports: {} };
/*! For license information please see index.js.LICENSE.txt */
un.exports;
(function(e, A) {
  (function(t, r) {
    e.exports = r(ra);
  })(at, (t) => (() => {
    var r = { 2761: (a) => {
      a.exports = function(B) {
        if (typeof B != "function")
          throw TypeError(B + " is not a function!");
        return B;
      };
    }, 2094: (a, B, n) => {
      var c = n(2190)("unscopables"), u = Array.prototype;
      u[c] == null && n(4216)(u, c, {}), a.exports = function(l) {
        u[c][l] = !0;
      };
    }, 8492: (a, B, n) => {
      var c = n(2070)(!0);
      a.exports = function(u, l, h) {
        return l + (h ? c(u, l).length : 1);
      };
    }, 5824: (a) => {
      a.exports = function(B, n, c, u) {
        if (!(B instanceof n) || u !== void 0 && u in B)
          throw TypeError(c + ": incorrect invocation!");
        return B;
      };
    }, 6365: (a, B, n) => {
      var c = n(7334);
      a.exports = function(u) {
        if (!c(u))
          throw TypeError(u + " is not an object!");
        return u;
      };
    }, 9021: (a, B, n) => {
      var c = n(5703), u = n(6078), l = n(8615);
      a.exports = function(h) {
        return function(d, p, Q) {
          var v, F = c(d), H = u(F.length), x = l(Q, H);
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
    }, 8309: (a, B, n) => {
      var c = n(1528), u = n(8467), l = n(6033), h = n(6078), d = n(3531);
      a.exports = function(p, Q) {
        var v = p == 1, F = p == 2, H = p == 3, x = p == 4, O = p == 6, S = p == 5 || O, N = Q || d;
        return function(G, b, P) {
          for (var V, k, L = l(G), D = u(L), Y = c(b, P, 3), iA = h(D.length), oA = 0, CA = v ? N(G, iA) : F ? N(G, 0) : void 0; iA > oA; oA++)
            if ((S || oA in D) && (k = Y(V = D[oA], oA, L), p)) {
              if (v)
                CA[oA] = k;
              else if (k)
                switch (p) {
                  case 3:
                    return !0;
                  case 5:
                    return V;
                  case 6:
                    return oA;
                  case 2:
                    CA.push(V);
                }
              else if (x)
                return !1;
            }
          return O ? -1 : H || x ? x : CA;
        };
      };
    }, 9291: (a, B, n) => {
      var c = n(2761), u = n(6033), l = n(8467), h = n(6078);
      a.exports = function(d, p, Q, v, F) {
        c(p);
        var H = u(d), x = l(H), O = h(H.length), S = F ? O - 1 : 0, N = F ? -1 : 1;
        if (Q < 2)
          for (; ; ) {
            if (S in x) {
              v = x[S], S += N;
              break;
            }
            if (S += N, F ? S < 0 : O <= S)
              throw TypeError("Reduce of empty array with no initial value");
          }
        for (; F ? S >= 0 : O > S; S += N)
          S in x && (v = p(v, x[S], S, H));
        return v;
      };
    }, 1071: (a, B, n) => {
      var c = n(7334), u = n(9141), l = n(2190)("species");
      a.exports = function(h) {
        var d;
        return u(h) && (typeof (d = h.constructor) != "function" || d !== Array && !u(d.prototype) || (d = void 0), c(d) && (d = d[l]) === null && (d = void 0)), d === void 0 ? Array : d;
      };
    }, 3531: (a, B, n) => {
      var c = n(1071);
      a.exports = function(u, l) {
        return new (c(u))(l);
      };
    }, 9337: (a, B, n) => {
      var c = n(2761), u = n(7334), l = n(7757), h = [].slice, d = {}, p = function(Q, v, F) {
        if (!(v in d)) {
          for (var H = [], x = 0; x < v; x++)
            H[x] = "a[" + x + "]";
          d[v] = Function("F,a", "return new F(" + H.join(",") + ")");
        }
        return d[v](Q, F);
      };
      a.exports = Function.bind || function(Q) {
        var v = c(this), F = h.call(arguments, 1), H = function() {
          var x = F.concat(h.call(arguments));
          return this instanceof H ? p(v, x.length, x) : l(v, x, Q);
        };
        return u(v.prototype) && (H.prototype = v.prototype), H;
      };
    }, 106: (a, B, n) => {
      var c = n(6688), u = n(2190)("toStringTag"), l = c(/* @__PURE__ */ function() {
        return arguments;
      }()) == "Arguments";
      a.exports = function(h) {
        var d, p, Q;
        return h === void 0 ? "Undefined" : h === null ? "Null" : typeof (p = function(v, F) {
          try {
            return v[F];
          } catch {
          }
        }(d = Object(h), u)) == "string" ? p : l ? c(d) : (Q = c(d)) == "Object" && typeof d.callee == "function" ? "Arguments" : Q;
      };
    }, 6688: (a) => {
      var B = {}.toString;
      a.exports = function(n) {
        return B.call(n).slice(8, -1);
      };
    }, 5635: (a, B, n) => {
      var c = n(8558).f, u = n(2897), l = n(2243), h = n(1528), d = n(5824), p = n(1891), Q = n(1195), v = n(5038), F = n(9766), H = n(6628), x = n(998).fastKey, O = n(9060), S = H ? "_s" : "size", N = function(G, b) {
        var P, V = x(b);
        if (V !== "F")
          return G._i[V];
        for (P = G._f; P; P = P.n)
          if (P.k == b)
            return P;
      };
      a.exports = { getConstructor: function(G, b, P, V) {
        var k = G(function(L, D) {
          d(L, k, b, "_i"), L._t = b, L._i = u(null), L._f = void 0, L._l = void 0, L[S] = 0, D != null && p(D, P, L[V], L);
        });
        return l(k.prototype, { clear: function() {
          for (var L = O(this, b), D = L._i, Y = L._f; Y; Y = Y.n)
            Y.r = !0, Y.p && (Y.p = Y.p.n = void 0), delete D[Y.i];
          L._f = L._l = void 0, L[S] = 0;
        }, delete: function(L) {
          var D = O(this, b), Y = N(D, L);
          if (Y) {
            var iA = Y.n, oA = Y.p;
            delete D._i[Y.i], Y.r = !0, oA && (oA.n = iA), iA && (iA.p = oA), D._f == Y && (D._f = iA), D._l == Y && (D._l = oA), D[S]--;
          }
          return !!Y;
        }, forEach: function(L) {
          O(this, b);
          for (var D, Y = h(L, arguments.length > 1 ? arguments[1] : void 0, 3); D = D ? D.n : this._f; )
            for (Y(D.v, D.k, this); D && D.r; )
              D = D.p;
        }, has: function(L) {
          return !!N(O(this, b), L);
        } }), H && c(k.prototype, "size", { get: function() {
          return O(this, b)[S];
        } }), k;
      }, def: function(G, b, P) {
        var V, k, L = N(G, b);
        return L ? L.v = P : (G._l = L = { i: k = x(b, !0), k: b, v: P, p: V = G._l, n: void 0, r: !1 }, G._f || (G._f = L), V && (V.n = L), G[S]++, k !== "F" && (G._i[k] = L)), G;
      }, getEntry: N, setStrong: function(G, b, P) {
        Q(G, b, function(V, k) {
          this._t = O(V, b), this._k = k, this._l = void 0;
        }, function() {
          for (var V = this, k = V._k, L = V._l; L && L.r; )
            L = L.p;
          return V._t && (V._l = L = L ? L.n : V._t._f) ? v(0, k == "keys" ? L.k : k == "values" ? L.v : [L.k, L.v]) : (V._t = void 0, v(1));
        }, P ? "entries" : "values", !P, !0), F(b);
      } };
    }, 6339: (a, B, n) => {
      var c = n(2243), u = n(998).getWeak, l = n(6365), h = n(7334), d = n(5824), p = n(1891), Q = n(8309), v = n(4040), F = n(9060), H = Q(5), x = Q(6), O = 0, S = function(b) {
        return b._l || (b._l = new N());
      }, N = function() {
        this.a = [];
      }, G = function(b, P) {
        return H(b.a, function(V) {
          return V[0] === P;
        });
      };
      N.prototype = { get: function(b) {
        var P = G(this, b);
        if (P)
          return P[1];
      }, has: function(b) {
        return !!G(this, b);
      }, set: function(b, P) {
        var V = G(this, b);
        V ? V[1] = P : this.a.push([b, P]);
      }, delete: function(b) {
        var P = x(this.a, function(V) {
          return V[0] === b;
        });
        return ~P && this.a.splice(P, 1), !!~P;
      } }, a.exports = { getConstructor: function(b, P, V, k) {
        var L = b(function(D, Y) {
          d(D, L, P, "_i"), D._t = P, D._i = O++, D._l = void 0, Y != null && p(Y, V, D[k], D);
        });
        return c(L.prototype, { delete: function(D) {
          if (!h(D))
            return !1;
          var Y = u(D);
          return Y === !0 ? S(F(this, P)).delete(D) : Y && v(Y, this._i) && delete Y[this._i];
        }, has: function(D) {
          if (!h(D))
            return !1;
          var Y = u(D);
          return Y === !0 ? S(F(this, P)).has(D) : Y && v(Y, this._i);
        } }), L;
      }, def: function(b, P, V) {
        var k = u(l(P), !0);
        return k === !0 ? S(b).set(P, V) : k[b._i] = V, b;
      }, ufstore: S };
    }, 7611: (a, B, n) => {
      var c = n(8113), u = n(5772), l = n(7738), h = n(2243), d = n(998), p = n(1891), Q = n(5824), v = n(7334), F = n(8625), H = n(3143), x = n(5727), O = n(8938);
      a.exports = function(S, N, G, b, P, V) {
        var k = c[S], L = k, D = P ? "set" : "add", Y = L && L.prototype, iA = {}, oA = function(dA) {
          var X = Y[dA];
          l(Y, dA, dA == "delete" || dA == "has" ? function(M) {
            return !(V && !v(M)) && X.call(this, M === 0 ? 0 : M);
          } : dA == "get" ? function(M) {
            return V && !v(M) ? void 0 : X.call(this, M === 0 ? 0 : M);
          } : dA == "add" ? function(M) {
            return X.call(this, M === 0 ? 0 : M), this;
          } : function(M, q) {
            return X.call(this, M === 0 ? 0 : M, q), this;
          });
        };
        if (typeof L == "function" && (V || Y.forEach && !F(function() {
          new L().entries().next();
        }))) {
          var CA = new L(), HA = CA[D](V ? {} : -0, 1) != CA, vA = F(function() {
            CA.has(1);
          }), EA = H(function(dA) {
            new L(dA);
          }), FA = !V && F(function() {
            for (var dA = new L(), X = 5; X--; )
              dA[D](X, X);
            return !dA.has(-0);
          });
          EA || ((L = N(function(dA, X) {
            Q(dA, L, S);
            var M = O(new k(), dA, L);
            return X != null && p(X, P, M[D], M), M;
          })).prototype = Y, Y.constructor = L), (vA || FA) && (oA("delete"), oA("has"), P && oA("get")), (FA || HA) && oA(D), V && Y.clear && delete Y.clear;
        } else
          L = b.getConstructor(N, S, P, D), h(L.prototype, G), d.NEED = !0;
        return x(L, S), iA[S] = L, u(u.G + u.W + u.F * (L != k), iA), V || b.setStrong(L, S, P), L;
      };
    }, 66: (a) => {
      var B = a.exports = { version: "2.6.12" };
      typeof __e == "number" && (__e = B);
    }, 6644: (a, B, n) => {
      var c = n(8558), u = n(6061);
      a.exports = function(l, h, d) {
        h in l ? c.f(l, h, u(0, d)) : l[h] = d;
      };
    }, 1528: (a, B, n) => {
      var c = n(2761);
      a.exports = function(u, l, h) {
        if (c(u), l === void 0)
          return u;
        switch (h) {
          case 1:
            return function(d) {
              return u.call(l, d);
            };
          case 2:
            return function(d, p) {
              return u.call(l, d, p);
            };
          case 3:
            return function(d, p, Q) {
              return u.call(l, d, p, Q);
            };
        }
        return function() {
          return u.apply(l, arguments);
        };
      };
    }, 1622: (a) => {
      a.exports = function(B) {
        if (B == null)
          throw TypeError("Can't call method on  " + B);
        return B;
      };
    }, 6628: (a, B, n) => {
      a.exports = !n(8625)(function() {
        return Object.defineProperty({}, "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }, 5050: (a, B, n) => {
      var c = n(7334), u = n(8113).document, l = c(u) && c(u.createElement);
      a.exports = function(h) {
        return l ? u.createElement(h) : {};
      };
    }, 3603: (a) => {
      a.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    }, 7820: (a, B, n) => {
      var c = n(2912), u = n(7957), l = n(5873);
      a.exports = function(h) {
        var d = c(h), p = u.f;
        if (p)
          for (var Q, v = p(h), F = l.f, H = 0; v.length > H; )
            F.call(h, Q = v[H++]) && d.push(Q);
        return d;
      };
    }, 5772: (a, B, n) => {
      var c = n(8113), u = n(66), l = n(4216), h = n(7738), d = n(1528), p = "prototype", Q = function(v, F, H) {
        var x, O, S, N, G = v & Q.F, b = v & Q.G, P = v & Q.S, V = v & Q.P, k = v & Q.B, L = b ? c : P ? c[F] || (c[F] = {}) : (c[F] || {})[p], D = b ? u : u[F] || (u[F] = {}), Y = D[p] || (D[p] = {});
        for (x in b && (H = F), H)
          S = ((O = !G && L && L[x] !== void 0) ? L : H)[x], N = k && O ? d(S, c) : V && typeof S == "function" ? d(Function.call, S) : S, L && h(L, x, S, v & Q.U), D[x] != S && l(D, x, N), V && Y[x] != S && (Y[x] = S);
      };
      c.core = u, Q.F = 1, Q.G = 2, Q.S = 4, Q.P = 8, Q.B = 16, Q.W = 32, Q.U = 64, Q.R = 128, a.exports = Q;
    }, 6570: (a, B, n) => {
      var c = n(2190)("match");
      a.exports = function(u) {
        var l = /./;
        try {
          "/./"[u](l);
        } catch {
          try {
            return l[c] = !1, !"/./"[u](l);
          } catch {
          }
        }
        return !0;
      };
    }, 8625: (a) => {
      a.exports = function(B) {
        try {
          return !!B();
        } catch {
          return !0;
        }
      };
    }, 8897: (a, B, n) => {
      n(5846);
      var c = n(7738), u = n(4216), l = n(8625), h = n(1622), d = n(2190), p = n(3288), Q = d("species"), v = !l(function() {
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
        var S = d(H), N = !l(function() {
          var L = {};
          return L[S] = function() {
            return 7;
          }, ""[H](L) != 7;
        }), G = N ? !l(function() {
          var L = !1, D = /a/;
          return D.exec = function() {
            return L = !0, null;
          }, H === "split" && (D.constructor = {}, D.constructor[Q] = function() {
            return D;
          }), D[S](""), !L;
        }) : void 0;
        if (!N || !G || H === "replace" && !v || H === "split" && !F) {
          var b = /./[S], P = O(h, S, ""[H], function(L, D, Y, iA, oA) {
            return D.exec === p ? N && !oA ? { done: !0, value: b.call(D, Y, iA) } : { done: !0, value: L.call(Y, D, iA) } : { done: !1 };
          }), V = P[0], k = P[1];
          c(String.prototype, H, V), u(RegExp.prototype, S, x == 2 ? function(L, D) {
            return k.call(L, this, D);
          } : function(L) {
            return k.call(L, this);
          });
        }
      };
    }, 4859: (a, B, n) => {
      var c = n(6365);
      a.exports = function() {
        var u = c(this), l = "";
        return u.global && (l += "g"), u.ignoreCase && (l += "i"), u.multiline && (l += "m"), u.unicode && (l += "u"), u.sticky && (l += "y"), l;
      };
    }, 1891: (a, B, n) => {
      var c = n(1528), u = n(3221), l = n(8908), h = n(6365), d = n(6078), p = n(7107), Q = {}, v = {}, F = a.exports = function(H, x, O, S, N) {
        var G, b, P, V, k = N ? function() {
          return H;
        } : p(H), L = c(O, S, x ? 2 : 1), D = 0;
        if (typeof k != "function")
          throw TypeError(H + " is not iterable!");
        if (l(k)) {
          for (G = d(H.length); G > D; D++)
            if ((V = x ? L(h(b = H[D])[0], b[1]) : L(H[D])) === Q || V === v)
              return V;
        } else
          for (P = k.call(H); !(b = P.next()).done; )
            if ((V = u(P, L, b.value, x)) === Q || V === v)
              return V;
      };
      F.BREAK = Q, F.RETURN = v;
    }, 646: (a, B, n) => {
      a.exports = n(8655)("native-function-to-string", Function.toString);
    }, 8113: (a) => {
      var B = a.exports = typeof window < "u" && window.Math == Math ? window : typeof self < "u" && self.Math == Math ? self : Function("return this")();
      typeof __g == "number" && (__g = B);
    }, 4040: (a) => {
      var B = {}.hasOwnProperty;
      a.exports = function(n, c) {
        return B.call(n, c);
      };
    }, 4216: (a, B, n) => {
      var c = n(8558), u = n(6061);
      a.exports = n(6628) ? function(l, h, d) {
        return c.f(l, h, u(1, d));
      } : function(l, h, d) {
        return l[h] = d, l;
      };
    }, 8954: (a, B, n) => {
      var c = n(8113).document;
      a.exports = c && c.documentElement;
    }, 5100: (a, B, n) => {
      a.exports = !n(6628) && !n(8625)(function() {
        return Object.defineProperty(n(5050)("div"), "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }, 8938: (a, B, n) => {
      var c = n(7334), u = n(6095).set;
      a.exports = function(l, h, d) {
        var p, Q = h.constructor;
        return Q !== d && typeof Q == "function" && (p = Q.prototype) !== d.prototype && c(p) && u && u(l, p), l;
      };
    }, 7757: (a) => {
      a.exports = function(B, n, c) {
        var u = c === void 0;
        switch (n.length) {
          case 0:
            return u ? B() : B.call(c);
          case 1:
            return u ? B(n[0]) : B.call(c, n[0]);
          case 2:
            return u ? B(n[0], n[1]) : B.call(c, n[0], n[1]);
          case 3:
            return u ? B(n[0], n[1], n[2]) : B.call(c, n[0], n[1], n[2]);
          case 4:
            return u ? B(n[0], n[1], n[2], n[3]) : B.call(c, n[0], n[1], n[2], n[3]);
        }
        return B.apply(c, n);
      };
    }, 8467: (a, B, n) => {
      var c = n(6688);
      a.exports = Object("z").propertyIsEnumerable(0) ? Object : function(u) {
        return c(u) == "String" ? u.split("") : Object(u);
      };
    }, 8908: (a, B, n) => {
      var c = n(3988), u = n(2190)("iterator"), l = Array.prototype;
      a.exports = function(h) {
        return h !== void 0 && (c.Array === h || l[u] === h);
      };
    }, 9141: (a, B, n) => {
      var c = n(6688);
      a.exports = Array.isArray || function(u) {
        return c(u) == "Array";
      };
    }, 7334: (a) => {
      a.exports = function(B) {
        return typeof B == "object" ? B !== null : typeof B == "function";
      };
    }, 4587: (a, B, n) => {
      var c = n(7334), u = n(6688), l = n(2190)("match");
      a.exports = function(h) {
        var d;
        return c(h) && ((d = h[l]) !== void 0 ? !!d : u(h) == "RegExp");
      };
    }, 3221: (a, B, n) => {
      var c = n(6365);
      a.exports = function(u, l, h, d) {
        try {
          return d ? l(c(h)[0], h[1]) : l(h);
        } catch (Q) {
          var p = u.return;
          throw p !== void 0 && c(p.call(u)), Q;
        }
      };
    }, 6445: (a, B, n) => {
      var c = n(2897), u = n(6061), l = n(5727), h = {};
      n(4216)(h, n(2190)("iterator"), function() {
        return this;
      }), a.exports = function(d, p, Q) {
        d.prototype = c(h, { next: u(1, Q) }), l(d, p + " Iterator");
      };
    }, 1195: (a, B, n) => {
      var c = n(1422), u = n(5772), l = n(7738), h = n(4216), d = n(3988), p = n(6445), Q = n(5727), v = n(9002), F = n(2190)("iterator"), H = !([].keys && "next" in [].keys()), x = "keys", O = "values", S = function() {
        return this;
      };
      a.exports = function(N, G, b, P, V, k, L) {
        p(b, G, P);
        var D, Y, iA, oA = function(q) {
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
        }, CA = G + " Iterator", HA = V == O, vA = !1, EA = N.prototype, FA = EA[F] || EA["@@iterator"] || V && EA[V], dA = FA || oA(V), X = V ? HA ? oA("entries") : dA : void 0, M = G == "Array" && EA.entries || FA;
        if (M && (iA = v(M.call(new N()))) !== Object.prototype && iA.next && (Q(iA, CA, !0), c || typeof iA[F] == "function" || h(iA, F, S)), HA && FA && FA.name !== O && (vA = !0, dA = function() {
          return FA.call(this);
        }), c && !L || !H && !vA && EA[F] || h(EA, F, dA), d[G] = dA, d[CA] = S, V)
          if (D = { values: HA ? dA : oA(O), keys: k ? dA : oA(x), entries: X }, L)
            for (Y in D)
              Y in EA || l(EA, Y, D[Y]);
          else
            u(u.P + u.F * (H || vA), G, D);
        return D;
      };
    }, 3143: (a, B, n) => {
      var c = n(2190)("iterator"), u = !1;
      try {
        var l = [7][c]();
        l.return = function() {
          u = !0;
        }, Array.from(l, function() {
          throw 2;
        });
      } catch {
      }
      a.exports = function(h, d) {
        if (!d && !u)
          return !1;
        var p = !1;
        try {
          var Q = [7], v = Q[c]();
          v.next = function() {
            return { done: p = !0 };
          }, Q[c] = function() {
            return v;
          }, h(Q);
        } catch {
        }
        return p;
      };
    }, 5038: (a) => {
      a.exports = function(B, n) {
        return { value: n, done: !!B };
      };
    }, 3988: (a) => {
      a.exports = {};
    }, 1422: (a) => {
      a.exports = !1;
    }, 998: (a, B, n) => {
      var c = n(5078)("meta"), u = n(7334), l = n(4040), h = n(8558).f, d = 0, p = Object.isExtensible || function() {
        return !0;
      }, Q = !n(8625)(function() {
        return p(Object.preventExtensions({}));
      }), v = function(H) {
        h(H, c, { value: { i: "O" + ++d, w: {} } });
      }, F = a.exports = { KEY: c, NEED: !1, fastKey: function(H, x) {
        if (!u(H))
          return typeof H == "symbol" ? H : (typeof H == "string" ? "S" : "P") + H;
        if (!l(H, c)) {
          if (!p(H))
            return "F";
          if (!x)
            return "E";
          v(H);
        }
        return H[c].i;
      }, getWeak: function(H, x) {
        if (!l(H, c)) {
          if (!p(H))
            return !0;
          if (!x)
            return !1;
          v(H);
        }
        return H[c].w;
      }, onFreeze: function(H) {
        return Q && F.NEED && p(H) && !l(H, c) && v(H), H;
      } };
    }, 3492: (a, B, n) => {
      var c = n(8113), u = n(9124).set, l = c.MutationObserver || c.WebKitMutationObserver, h = c.process, d = c.Promise, p = n(6688)(h) == "process";
      a.exports = function() {
        var Q, v, F, H = function() {
          var N, G;
          for (p && (N = h.domain) && N.exit(); Q; ) {
            G = Q.fn, Q = Q.next;
            try {
              G();
            } catch (b) {
              throw Q ? F() : v = void 0, b;
            }
          }
          v = void 0, N && N.enter();
        };
        if (p)
          F = function() {
            h.nextTick(H);
          };
        else if (!l || c.navigator && c.navigator.standalone)
          if (d && d.resolve) {
            var x = d.resolve(void 0);
            F = function() {
              x.then(H);
            };
          } else
            F = function() {
              u.call(c, H);
            };
        else {
          var O = !0, S = document.createTextNode("");
          new l(H).observe(S, { characterData: !0 }), F = function() {
            S.data = O = !O;
          };
        }
        return function(N) {
          var G = { fn: N, next: void 0 };
          v && (v.next = G), Q || (Q = G, F()), v = G;
        };
      };
    }, 8577: (a, B, n) => {
      var c = n(2761);
      function u(l) {
        var h, d;
        this.promise = new l(function(p, Q) {
          if (h !== void 0 || d !== void 0)
            throw TypeError("Bad Promise constructor");
          h = p, d = Q;
        }), this.resolve = c(h), this.reject = c(d);
      }
      a.exports.f = function(l) {
        return new u(l);
      };
    }, 7029: (a, B, n) => {
      var c = n(6628), u = n(2912), l = n(7957), h = n(5873), d = n(6033), p = n(8467), Q = Object.assign;
      a.exports = !Q || n(8625)(function() {
        var v = {}, F = {}, H = Symbol(), x = "abcdefghijklmnopqrst";
        return v[H] = 7, x.split("").forEach(function(O) {
          F[O] = O;
        }), Q({}, v)[H] != 7 || Object.keys(Q({}, F)).join("") != x;
      }) ? function(v, F) {
        for (var H = d(v), x = arguments.length, O = 1, S = l.f, N = h.f; x > O; )
          for (var G, b = p(arguments[O++]), P = S ? u(b).concat(S(b)) : u(b), V = P.length, k = 0; V > k; )
            G = P[k++], c && !N.call(b, G) || (H[G] = b[G]);
        return H;
      } : Q;
    }, 2897: (a, B, n) => {
      var c = n(6365), u = n(7331), l = n(3603), h = n(8034)("IE_PROTO"), d = function() {
      }, p = "prototype", Q = function() {
        var v, F = n(5050)("iframe"), H = l.length;
        for (F.style.display = "none", n(8954).appendChild(F), F.src = "javascript:", (v = F.contentWindow.document).open(), v.write("<script>document.F=Object<\/script>"), v.close(), Q = v.F; H--; )
          delete Q[p][l[H]];
        return Q();
      };
      a.exports = Object.create || function(v, F) {
        var H;
        return v !== null ? (d[p] = c(v), H = new d(), d[p] = null, H[h] = v) : H = Q(), F === void 0 ? H : u(H, F);
      };
    }, 8558: (a, B, n) => {
      var c = n(6365), u = n(5100), l = n(1382), h = Object.defineProperty;
      B.f = n(6628) ? Object.defineProperty : function(d, p, Q) {
        if (c(d), p = l(p, !0), c(Q), u)
          try {
            return h(d, p, Q);
          } catch {
          }
        if ("get" in Q || "set" in Q)
          throw TypeError("Accessors not supported!");
        return "value" in Q && (d[p] = Q.value), d;
      };
    }, 7331: (a, B, n) => {
      var c = n(8558), u = n(6365), l = n(2912);
      a.exports = n(6628) ? Object.defineProperties : function(h, d) {
        u(h);
        for (var p, Q = l(d), v = Q.length, F = 0; v > F; )
          c.f(h, p = Q[F++], d[p]);
        return h;
      };
    }, 4662: (a, B, n) => {
      var c = n(5873), u = n(6061), l = n(5703), h = n(1382), d = n(4040), p = n(5100), Q = Object.getOwnPropertyDescriptor;
      B.f = n(6628) ? Q : function(v, F) {
        if (v = l(v), F = h(F, !0), p)
          try {
            return Q(v, F);
          } catch {
          }
        if (d(v, F))
          return u(!c.f.call(v, F), v[F]);
      };
    }, 5259: (a, B, n) => {
      var c = n(5703), u = n(6604).f, l = {}.toString, h = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
      a.exports.f = function(d) {
        return h && l.call(d) == "[object Window]" ? function(p) {
          try {
            return u(p);
          } catch {
            return h.slice();
          }
        }(d) : u(c(d));
      };
    }, 6604: (a, B, n) => {
      var c = n(5547), u = n(3603).concat("length", "prototype");
      B.f = Object.getOwnPropertyNames || function(l) {
        return c(l, u);
      };
    }, 7957: (a, B) => {
      B.f = Object.getOwnPropertySymbols;
    }, 9002: (a, B, n) => {
      var c = n(4040), u = n(6033), l = n(8034)("IE_PROTO"), h = Object.prototype;
      a.exports = Object.getPrototypeOf || function(d) {
        return d = u(d), c(d, l) ? d[l] : typeof d.constructor == "function" && d instanceof d.constructor ? d.constructor.prototype : d instanceof Object ? h : null;
      };
    }, 5547: (a, B, n) => {
      var c = n(4040), u = n(5703), l = n(9021)(!1), h = n(8034)("IE_PROTO");
      a.exports = function(d, p) {
        var Q, v = u(d), F = 0, H = [];
        for (Q in v)
          Q != h && c(v, Q) && H.push(Q);
        for (; p.length > F; )
          c(v, Q = p[F++]) && (~l(H, Q) || H.push(Q));
        return H;
      };
    }, 2912: (a, B, n) => {
      var c = n(5547), u = n(3603);
      a.exports = Object.keys || function(l) {
        return c(l, u);
      };
    }, 5873: (a, B) => {
      B.f = {}.propertyIsEnumerable;
    }, 468: (a, B, n) => {
      var c = n(5772), u = n(66), l = n(8625);
      a.exports = function(h, d) {
        var p = (u.Object || {})[h] || Object[h], Q = {};
        Q[h] = d(p), c(c.S + c.F * l(function() {
          p(1);
        }), "Object", Q);
      };
    }, 758: (a, B, n) => {
      var c = n(6628), u = n(2912), l = n(5703), h = n(5873).f;
      a.exports = function(d) {
        return function(p) {
          for (var Q, v = l(p), F = u(v), H = F.length, x = 0, O = []; H > x; )
            Q = F[x++], c && !h.call(v, Q) || O.push(d ? [Q, v[Q]] : v[Q]);
          return O;
        };
      };
    }, 6831: (a, B, n) => {
      var c = n(6604), u = n(7957), l = n(6365), h = n(8113).Reflect;
      a.exports = h && h.ownKeys || function(d) {
        var p = c.f(l(d)), Q = u.f;
        return Q ? p.concat(Q(d)) : p;
      };
    }, 9739: (a) => {
      a.exports = function(B) {
        try {
          return { e: !1, v: B() };
        } catch (n) {
          return { e: !0, v: n };
        }
      };
    }, 5151: (a, B, n) => {
      var c = n(6365), u = n(7334), l = n(8577);
      a.exports = function(h, d) {
        if (c(h), u(d) && d.constructor === h)
          return d;
        var p = l.f(h);
        return (0, p.resolve)(d), p.promise;
      };
    }, 6061: (a) => {
      a.exports = function(B, n) {
        return { enumerable: !(1 & B), configurable: !(2 & B), writable: !(4 & B), value: n };
      };
    }, 2243: (a, B, n) => {
      var c = n(7738);
      a.exports = function(u, l, h) {
        for (var d in l)
          c(u, d, l[d], h);
        return u;
      };
    }, 7738: (a, B, n) => {
      var c = n(8113), u = n(4216), l = n(4040), h = n(5078)("src"), d = n(646), p = "toString", Q = ("" + d).split(p);
      n(66).inspectSource = function(v) {
        return d.call(v);
      }, (a.exports = function(v, F, H, x) {
        var O = typeof H == "function";
        O && (l(H, "name") || u(H, "name", F)), v[F] !== H && (O && (l(H, h) || u(H, h, v[F] ? "" + v[F] : Q.join(String(F)))), v === c ? v[F] = H : x ? v[F] ? v[F] = H : u(v, F, H) : (delete v[F], u(v, F, H)));
      })(Function.prototype, p, function() {
        return typeof this == "function" && this[h] || d.call(this);
      });
    }, 2404: (a, B, n) => {
      var c = n(106), u = RegExp.prototype.exec;
      a.exports = function(l, h) {
        var d = l.exec;
        if (typeof d == "function") {
          var p = d.call(l, h);
          if (typeof p != "object")
            throw new TypeError("RegExp exec method returned something other than an Object or null");
          return p;
        }
        if (c(l) !== "RegExp")
          throw new TypeError("RegExp#exec called on incompatible receiver");
        return u.call(l, h);
      };
    }, 3288: (a, B, n) => {
      var c, u, l = n(4859), h = RegExp.prototype.exec, d = String.prototype.replace, p = h, Q = "lastIndex", v = (c = /a/, u = /b*/g, h.call(c, "a"), h.call(u, "a"), c[Q] !== 0 || u[Q] !== 0), F = /()??/.exec("")[1] !== void 0;
      (v || F) && (p = function(H) {
        var x, O, S, N, G = this;
        return F && (O = new RegExp("^" + G.source + "$(?!\\s)", l.call(G))), v && (x = G[Q]), S = h.call(G, H), v && S && (G[Q] = G.global ? S.index + S[0].length : x), F && S && S.length > 1 && d.call(S[0], O, function() {
          for (N = 1; N < arguments.length - 2; N++)
            arguments[N] === void 0 && (S[N] = void 0);
        }), S;
      }), a.exports = p;
    }, 6095: (a, B, n) => {
      var c = n(7334), u = n(6365), l = function(h, d) {
        if (u(h), !c(d) && d !== null)
          throw TypeError(d + ": can't set as prototype!");
      };
      a.exports = { set: Object.setPrototypeOf || ("__proto__" in {} ? function(h, d, p) {
        try {
          (p = n(1528)(Function.call, n(4662).f(Object.prototype, "__proto__").set, 2))(h, []), d = !(h instanceof Array);
        } catch {
          d = !0;
        }
        return function(Q, v) {
          return l(Q, v), d ? Q.__proto__ = v : p(Q, v), Q;
        };
      }({}, !1) : void 0), check: l };
    }, 9766: (a, B, n) => {
      var c = n(8113), u = n(8558), l = n(6628), h = n(2190)("species");
      a.exports = function(d) {
        var p = c[d];
        l && p && !p[h] && u.f(p, h, { configurable: !0, get: function() {
          return this;
        } });
      };
    }, 5727: (a, B, n) => {
      var c = n(8558).f, u = n(4040), l = n(2190)("toStringTag");
      a.exports = function(h, d, p) {
        h && !u(h = p ? h : h.prototype, l) && c(h, l, { configurable: !0, value: d });
      };
    }, 8034: (a, B, n) => {
      var c = n(8655)("keys"), u = n(5078);
      a.exports = function(l) {
        return c[l] || (c[l] = u(l));
      };
    }, 8655: (a, B, n) => {
      var c = n(66), u = n(8113), l = "__core-js_shared__", h = u[l] || (u[l] = {});
      (a.exports = function(d, p) {
        return h[d] || (h[d] = p !== void 0 ? p : {});
      })("versions", []).push({ version: c.version, mode: n(1422) ? "pure" : "global", copyright: "© 2020 Denis Pushkarev (zloirock.ru)" });
    }, 1987: (a, B, n) => {
      var c = n(6365), u = n(2761), l = n(2190)("species");
      a.exports = function(h, d) {
        var p, Q = c(h).constructor;
        return Q === void 0 || (p = c(Q)[l]) == null ? d : u(p);
      };
    }, 225: (a, B, n) => {
      var c = n(8625);
      a.exports = function(u, l) {
        return !!u && c(function() {
          l ? u.call(null, function() {
          }, 1) : u.call(null);
        });
      };
    }, 2070: (a, B, n) => {
      var c = n(3338), u = n(1622);
      a.exports = function(l) {
        return function(h, d) {
          var p, Q, v = String(u(h)), F = c(d), H = v.length;
          return F < 0 || F >= H ? l ? "" : void 0 : (p = v.charCodeAt(F)) < 55296 || p > 56319 || F + 1 === H || (Q = v.charCodeAt(F + 1)) < 56320 || Q > 57343 ? l ? v.charAt(F) : p : l ? v.slice(F, F + 2) : Q - 56320 + (p - 55296 << 10) + 65536;
        };
      };
    }, 465: (a, B, n) => {
      var c = n(4587), u = n(1622);
      a.exports = function(l, h, d) {
        if (c(h))
          throw TypeError("String#" + d + " doesn't accept regex!");
        return String(u(l));
      };
    }, 9124: (a, B, n) => {
      var c, u, l, h = n(1528), d = n(7757), p = n(8954), Q = n(5050), v = n(8113), F = v.process, H = v.setImmediate, x = v.clearImmediate, O = v.MessageChannel, S = v.Dispatch, N = 0, G = {}, b = "onreadystatechange", P = function() {
        var k = +this;
        if (G.hasOwnProperty(k)) {
          var L = G[k];
          delete G[k], L();
        }
      }, V = function(k) {
        P.call(k.data);
      };
      H && x || (H = function(k) {
        for (var L = [], D = 1; arguments.length > D; )
          L.push(arguments[D++]);
        return G[++N] = function() {
          d(typeof k == "function" ? k : Function(k), L);
        }, c(N), N;
      }, x = function(k) {
        delete G[k];
      }, n(6688)(F) == "process" ? c = function(k) {
        F.nextTick(h(P, k, 1));
      } : S && S.now ? c = function(k) {
        S.now(h(P, k, 1));
      } : O ? (l = (u = new O()).port2, u.port1.onmessage = V, c = h(l.postMessage, l, 1)) : v.addEventListener && typeof postMessage == "function" && !v.importScripts ? (c = function(k) {
        v.postMessage(k + "", "*");
      }, v.addEventListener("message", V, !1)) : c = b in Q("script") ? function(k) {
        p.appendChild(Q("script"))[b] = function() {
          p.removeChild(this), P.call(k);
        };
      } : function(k) {
        setTimeout(h(P, k, 1), 0);
      }), a.exports = { set: H, clear: x };
    }, 8615: (a, B, n) => {
      var c = n(3338), u = Math.max, l = Math.min;
      a.exports = function(h, d) {
        return (h = c(h)) < 0 ? u(h + d, 0) : l(h, d);
      };
    }, 3338: (a) => {
      var B = Math.ceil, n = Math.floor;
      a.exports = function(c) {
        return isNaN(c = +c) ? 0 : (c > 0 ? n : B)(c);
      };
    }, 5703: (a, B, n) => {
      var c = n(8467), u = n(1622);
      a.exports = function(l) {
        return c(u(l));
      };
    }, 6078: (a, B, n) => {
      var c = n(3338), u = Math.min;
      a.exports = function(l) {
        return l > 0 ? u(c(l), 9007199254740991) : 0;
      };
    }, 6033: (a, B, n) => {
      var c = n(1622);
      a.exports = function(u) {
        return Object(c(u));
      };
    }, 1382: (a, B, n) => {
      var c = n(7334);
      a.exports = function(u, l) {
        if (!c(u))
          return u;
        var h, d;
        if (l && typeof (h = u.toString) == "function" && !c(d = h.call(u)) || typeof (h = u.valueOf) == "function" && !c(d = h.call(u)) || !l && typeof (h = u.toString) == "function" && !c(d = h.call(u)))
          return d;
        throw TypeError("Can't convert object to primitive value");
      };
    }, 5078: (a) => {
      var B = 0, n = Math.random();
      a.exports = function(c) {
        return "Symbol(".concat(c === void 0 ? "" : c, ")_", (++B + n).toString(36));
      };
    }, 5822: (a, B, n) => {
      var c = n(8113).navigator;
      a.exports = c && c.userAgent || "";
    }, 9060: (a, B, n) => {
      var c = n(7334);
      a.exports = function(u, l) {
        if (!c(u) || u._t !== l)
          throw TypeError("Incompatible receiver, " + l + " required!");
        return u;
      };
    }, 5660: (a, B, n) => {
      var c = n(8113), u = n(66), l = n(1422), h = n(9669), d = n(8558).f;
      a.exports = function(p) {
        var Q = u.Symbol || (u.Symbol = l ? {} : c.Symbol || {});
        p.charAt(0) == "_" || p in Q || d(Q, p, { value: h.f(p) });
      };
    }, 9669: (a, B, n) => {
      B.f = n(2190);
    }, 2190: (a, B, n) => {
      var c = n(8655)("wks"), u = n(5078), l = n(8113).Symbol, h = typeof l == "function";
      (a.exports = function(d) {
        return c[d] || (c[d] = h && l[d] || (h ? l : u)("Symbol." + d));
      }).store = c;
    }, 7107: (a, B, n) => {
      var c = n(106), u = n(2190)("iterator"), l = n(3988);
      a.exports = n(66).getIteratorMethod = function(h) {
        if (h != null)
          return h[u] || h["@@iterator"] || l[c(h)];
      };
    }, 4434: (a, B, n) => {
      var c = n(5772), u = n(8309)(2);
      c(c.P + c.F * !n(225)([].filter, !0), "Array", { filter: function(l) {
        return u(this, l, arguments[1]);
      } });
    }, 8703: (a, B, n) => {
      var c = n(5772), u = n(8309)(6), l = "findIndex", h = !0;
      l in [] && Array(1)[l](function() {
        h = !1;
      }), c(c.P + c.F * h, "Array", { findIndex: function(d) {
        return u(this, d, arguments.length > 1 ? arguments[1] : void 0);
      } }), n(2094)(l);
    }, 7772: (a, B, n) => {
      var c = n(5772), u = n(8309)(0), l = n(225)([].forEach, !0);
      c(c.P + c.F * !l, "Array", { forEach: function(h) {
        return u(this, h, arguments[1]);
      } });
    }, 5155: (a, B, n) => {
      var c = n(5772), u = n(9021)(!1), l = [].indexOf, h = !!l && 1 / [1].indexOf(1, -0) < 0;
      c(c.P + c.F * (h || !n(225)(l)), "Array", { indexOf: function(d) {
        return h ? l.apply(this, arguments) || 0 : u(this, d, arguments[1]);
      } });
    }, 5867: (a, B, n) => {
      var c = n(5772);
      c(c.S, "Array", { isArray: n(9141) });
    }, 7680: (a, B, n) => {
      var c = n(2094), u = n(5038), l = n(3988), h = n(5703);
      a.exports = n(1195)(Array, "Array", function(d, p) {
        this._t = h(d), this._i = 0, this._k = p;
      }, function() {
        var d = this._t, p = this._k, Q = this._i++;
        return !d || Q >= d.length ? (this._t = void 0, u(1)) : u(0, p == "keys" ? Q : p == "values" ? d[Q] : [Q, d[Q]]);
      }, "values"), l.Arguments = l.Array, c("keys"), c("values"), c("entries");
    }, 286: (a, B, n) => {
      var c = n(5772), u = n(8309)(1);
      c(c.P + c.F * !n(225)([].map, !0), "Array", { map: function(l) {
        return u(this, l, arguments[1]);
      } });
    }, 9399: (a, B, n) => {
      var c = n(5772), u = n(9291);
      c(c.P + c.F * !n(225)([].reduce, !0), "Array", { reduce: function(l) {
        return u(this, l, arguments.length, arguments[1], !1);
      } });
    }, 7209: (a, B, n) => {
      var c = n(5772), u = n(8954), l = n(6688), h = n(8615), d = n(6078), p = [].slice;
      c(c.P + c.F * n(8625)(function() {
        u && p.call(u);
      }), "Array", { slice: function(Q, v) {
        var F = d(this.length), H = l(this);
        if (v = v === void 0 ? F : v, H == "Array")
          return p.call(this, Q, v);
        for (var x = h(Q, F), O = h(v, F), S = d(O - x), N = new Array(S), G = 0; G < S; G++)
          N[G] = H == "String" ? this.charAt(x + G) : this[x + G];
        return N;
      } });
    }, 5105: (a, B, n) => {
      var c = Date.prototype, u = "Invalid Date", l = "toString", h = c[l], d = c.getTime;
      /* @__PURE__ */ new Date(NaN) + "" != u && n(7738)(c, l, function() {
        var p = d.call(this);
        return p == p ? h.call(this) : u;
      });
    }, 8629: (a, B, n) => {
      var c = n(5772);
      c(c.P, "Function", { bind: n(9337) });
    }, 9745: (a, B, n) => {
      var c = n(8558).f, u = Function.prototype, l = /^\s*function ([^ (]*)/, h = "name";
      h in u || n(6628) && c(u, h, { configurable: !0, get: function() {
        try {
          return ("" + this).match(l)[1];
        } catch {
          return "";
        }
      } });
    }, 1239: (a, B, n) => {
      var c = n(5635), u = n(9060), l = "Map";
      a.exports = n(7611)(l, function(h) {
        return function() {
          return h(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      }, { get: function(h) {
        var d = c.getEntry(u(this, l), h);
        return d && d.v;
      }, set: function(h, d) {
        return c.def(u(this, l), h === 0 ? 0 : h, d);
      } }, c, !0);
    }, 8344: (a, B, n) => {
      var c = n(5772);
      c(c.S + c.F * !n(6628), "Object", { defineProperties: n(7331) });
    }, 5843: (a, B, n) => {
      var c = n(5772);
      c(c.S + c.F * !n(6628), "Object", { defineProperty: n(8558).f });
    }, 541: (a, B, n) => {
      var c = n(5703), u = n(4662).f;
      n(468)("getOwnPropertyDescriptor", function() {
        return function(l, h) {
          return u(c(l), h);
        };
      });
    }, 4978: (a, B, n) => {
      var c = n(6033), u = n(2912);
      n(468)("keys", function() {
        return function(l) {
          return u(c(l));
        };
      });
    }, 6139: (a, B, n) => {
      var c = n(106), u = {};
      u[n(2190)("toStringTag")] = "z", u + "" != "[object z]" && n(7738)(Object.prototype, "toString", function() {
        return "[object " + c(this) + "]";
      }, !0);
    }, 2235: (a, B, n) => {
      var c, u, l, h, d = n(1422), p = n(8113), Q = n(1528), v = n(106), F = n(5772), H = n(7334), x = n(2761), O = n(5824), S = n(1891), N = n(1987), G = n(9124).set, b = n(3492)(), P = n(8577), V = n(9739), k = n(5822), L = n(5151), D = "Promise", Y = p.TypeError, iA = p.process, oA = iA && iA.versions, CA = oA && oA.v8 || "", HA = p[D], vA = v(iA) == "process", EA = function() {
      }, FA = u = P.f, dA = !!function() {
        try {
          var tA = HA.resolve(1), lA = (tA.constructor = {})[n(2190)("species")] = function(yA) {
            yA(EA, EA);
          };
          return (vA || typeof PromiseRejectionEvent == "function") && tA.then(EA) instanceof lA && CA.indexOf("6.6") !== 0 && k.indexOf("Chrome/66") === -1;
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
            for (var LA = tA._v, KA = tA._s == 1, WA = 0, ne = function(le) {
              var ee, ge, Fe, se = KA ? le.ok : le.fail, we = le.resolve, pe = le.reject, oe = le.domain;
              try {
                se ? (KA || (tA._h == 2 && aA(tA), tA._h = 1), se === !0 ? ee = LA : (oe && oe.enter(), ee = se(LA), oe && (oe.exit(), Fe = !0)), ee === le.promise ? pe(Y("Promise-chain cycle")) : (ge = X(ee)) ? ge.call(ee, we, pe) : we(ee)) : pe(LA);
              } catch (ae) {
                oe && !Fe && oe.exit(), pe(ae);
              }
            }; yA.length > WA; )
              ne(yA[WA++]);
            tA._c = [], tA._n = !1, lA && !tA._h && q(tA);
          });
        }
      }, q = function(tA) {
        G.call(p, function() {
          var lA, yA, LA, KA = tA._v, WA = uA(tA);
          if (WA && (lA = V(function() {
            vA ? iA.emit("unhandledRejection", KA, tA) : (yA = p.onunhandledrejection) ? yA({ promise: tA, reason: KA }) : (LA = p.console) && LA.error && LA.error("Unhandled promise rejection", KA);
          }), tA._h = vA || uA(tA) ? 2 : 1), tA._a = void 0, WA && lA.e)
            throw lA.v;
        });
      }, uA = function(tA) {
        return tA._h !== 1 && (tA._a || tA._c).length === 0;
      }, aA = function(tA) {
        G.call(p, function() {
          var lA;
          vA ? iA.emit("rejectionHandled", tA) : (lA = p.onrejectionhandled) && lA({ promise: tA, reason: tA._v });
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
                lA.call(tA, Q(VA, LA, 1), Q(mA, LA, 1));
              } catch (KA) {
                mA.call(LA, KA);
              }
            }) : (yA._v = tA, yA._s = 1, M(yA, !1));
          } catch (LA) {
            mA.call({ _w: yA, _d: !1 }, LA);
          }
        }
      };
      dA || (HA = function(tA) {
        O(this, HA, D, "_h"), x(tA), c.call(this);
        try {
          tA(Q(VA, this, 1), Q(mA, this, 1));
        } catch (lA) {
          mA.call(this, lA);
        }
      }, (c = function(tA) {
        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1;
      }).prototype = n(2243)(HA.prototype, { then: function(tA, lA) {
        var yA = FA(N(this, HA));
        return yA.ok = typeof tA != "function" || tA, yA.fail = typeof lA == "function" && lA, yA.domain = vA ? iA.domain : void 0, this._c.push(yA), this._a && this._a.push(yA), this._s && M(this, !1), yA.promise;
      }, catch: function(tA) {
        return this.then(void 0, tA);
      } }), l = function() {
        var tA = new c();
        this.promise = tA, this.resolve = Q(VA, tA, 1), this.reject = Q(mA, tA, 1);
      }, P.f = FA = function(tA) {
        return tA === HA || tA === h ? new l(tA) : u(tA);
      }), F(F.G + F.W + F.F * !dA, { Promise: HA }), n(5727)(HA, D), n(9766)(D), h = n(66)[D], F(F.S + F.F * !dA, D, { reject: function(tA) {
        var lA = FA(this);
        return (0, lA.reject)(tA), lA.promise;
      } }), F(F.S + F.F * (d || !dA), D, { resolve: function(tA) {
        return L(d && this === h ? HA : this, tA);
      } }), F(F.S + F.F * !(dA && n(3143)(function(tA) {
        HA.all(tA).catch(EA);
      })), D, { all: function(tA) {
        var lA = this, yA = FA(lA), LA = yA.resolve, KA = yA.reject, WA = V(function() {
          var ne = [], le = 0, ee = 1;
          S(tA, !1, function(ge) {
            var Fe = le++, se = !1;
            ne.push(void 0), ee++, lA.resolve(ge).then(function(we) {
              se || (se = !0, ne[Fe] = we, --ee || LA(ne));
            }, KA);
          }), --ee || LA(ne);
        });
        return WA.e && KA(WA.v), yA.promise;
      }, race: function(tA) {
        var lA = this, yA = FA(lA), LA = yA.reject, KA = V(function() {
          S(tA, !1, function(WA) {
            lA.resolve(WA).then(yA.resolve, LA);
          });
        });
        return KA.e && LA(KA.v), yA.promise;
      } });
    }, 5506: (a, B, n) => {
      var c = n(8113), u = n(8938), l = n(8558).f, h = n(6604).f, d = n(4587), p = n(4859), Q = c.RegExp, v = Q, F = Q.prototype, H = /a/g, x = /a/g, O = new Q(H) !== H;
      if (n(6628) && (!O || n(8625)(function() {
        return x[n(2190)("match")] = !1, Q(H) != H || Q(x) == x || Q(H, "i") != "/a/i";
      }))) {
        Q = function(b, P) {
          var V = this instanceof Q, k = d(b), L = P === void 0;
          return !V && k && b.constructor === Q && L ? b : u(O ? new v(k && !L ? b.source : b, P) : v((k = b instanceof Q) ? b.source : b, k && L ? p.call(b) : P), V ? this : F, Q);
        };
        for (var S = function(b) {
          b in Q || l(Q, b, { configurable: !0, get: function() {
            return v[b];
          }, set: function(P) {
            v[b] = P;
          } });
        }, N = h(v), G = 0; N.length > G; )
          S(N[G++]);
        F.constructor = Q, Q.prototype = F, n(7738)(c, "RegExp", Q);
      }
      n(9766)("RegExp");
    }, 5846: (a, B, n) => {
      var c = n(3288);
      n(5772)({ target: "RegExp", proto: !0, forced: c !== /./.exec }, { exec: c });
    }, 751: (a, B, n) => {
      n(6628) && /./g.flags != "g" && n(8558).f(RegExp.prototype, "flags", { configurable: !0, get: n(4859) });
    }, 9236: (a, B, n) => {
      var c = n(4587), u = n(6365), l = n(1987), h = n(8492), d = n(6078), p = n(2404), Q = n(3288), v = n(8625), F = Math.min, H = [].push, x = "split", O = "length", S = "lastIndex", N = 4294967295, G = !v(function() {
      });
      n(8897)("split", 2, function(b, P, V, k) {
        var L;
        return L = "abbc"[x](/(b)*/)[1] == "c" || "test"[x](/(?:)/, -1)[O] != 4 || "ab"[x](/(?:ab)*/)[O] != 2 || "."[x](/(.?)(.?)/)[O] != 4 || "."[x](/()()/)[O] > 1 || ""[x](/.?/)[O] ? function(D, Y) {
          var iA = String(this);
          if (D === void 0 && Y === 0)
            return [];
          if (!c(D))
            return V.call(iA, D, Y);
          for (var oA, CA, HA, vA = [], EA = (D.ignoreCase ? "i" : "") + (D.multiline ? "m" : "") + (D.unicode ? "u" : "") + (D.sticky ? "y" : ""), FA = 0, dA = Y === void 0 ? N : Y >>> 0, X = new RegExp(D.source, EA + "g"); (oA = Q.call(X, iA)) && !((CA = X[S]) > FA && (vA.push(iA.slice(FA, oA.index)), oA[O] > 1 && oA.index < iA[O] && H.apply(vA, oA.slice(1)), HA = oA[0][O], FA = CA, vA[O] >= dA)); )
            X[S] === oA.index && X[S]++;
          return FA === iA[O] ? !HA && X.test("") || vA.push("") : vA.push(iA.slice(FA)), vA[O] > dA ? vA.slice(0, dA) : vA;
        } : "0"[x](void 0, 0)[O] ? function(D, Y) {
          return D === void 0 && Y === 0 ? [] : V.call(this, D, Y);
        } : V, [function(D, Y) {
          var iA = b(this), oA = D == null ? void 0 : D[P];
          return oA !== void 0 ? oA.call(D, iA, Y) : L.call(String(iA), D, Y);
        }, function(D, Y) {
          var iA = k(L, D, this, Y, L !== V);
          if (iA.done)
            return iA.value;
          var oA = u(D), CA = String(this), HA = l(oA, RegExp), vA = oA.unicode, EA = (oA.ignoreCase ? "i" : "") + (oA.multiline ? "m" : "") + (oA.unicode ? "u" : "") + (G ? "y" : "g"), FA = new HA(G ? oA : "^(?:" + oA.source + ")", EA), dA = Y === void 0 ? N : Y >>> 0;
          if (dA === 0)
            return [];
          if (CA.length === 0)
            return p(FA, CA) === null ? [CA] : [];
          for (var X = 0, M = 0, q = []; M < CA.length; ) {
            FA.lastIndex = G ? M : 0;
            var uA, aA = p(FA, G ? CA : CA.slice(M));
            if (aA === null || (uA = F(d(FA.lastIndex + (G ? 0 : M)), CA.length)) === X)
              M = h(CA, M, vA);
            else {
              if (q.push(CA.slice(X, M)), q.length === dA)
                return q;
              for (var mA = 1; mA <= aA.length - 1; mA++)
                if (q.push(aA[mA]), q.length === dA)
                  return q;
              M = X = uA;
            }
          }
          return q.push(CA.slice(X)), q;
        }];
      });
    }, 4321: (a, B, n) => {
      n(751);
      var c = n(6365), u = n(4859), l = n(6628), h = "toString", d = /./[h], p = function(Q) {
        n(7738)(RegExp.prototype, h, Q, !0);
      };
      n(8625)(function() {
        return d.call({ source: "a", flags: "b" }) != "/a/b";
      }) ? p(function() {
        var Q = c(this);
        return "/".concat(Q.source, "/", "flags" in Q ? Q.flags : !l && Q instanceof RegExp ? u.call(Q) : void 0);
      }) : d.name != h && p(function() {
        return d.call(this);
      });
    }, 427: (a, B, n) => {
      var c = n(5772), u = n(6078), l = n(465), h = "endsWith", d = ""[h];
      c(c.P + c.F * n(6570)(h), "String", { endsWith: function(p) {
        var Q = l(this, p, h), v = arguments.length > 1 ? arguments[1] : void 0, F = u(Q.length), H = v === void 0 ? F : Math.min(u(v), F), x = String(p);
        return d ? d.call(Q, x, H) : Q.slice(H - x.length, H) === x;
      } });
    }, 3777: (a, B, n) => {
      var c = n(5772), u = n(465), l = "includes";
      c(c.P + c.F * n(6570)(l), "String", { includes: function(h) {
        return !!~u(this, h, l).indexOf(h, arguments.length > 1 ? arguments[1] : void 0);
      } });
    }, 7472: (a, B, n) => {
      var c = n(2070)(!0);
      n(1195)(String, "String", function(u) {
        this._t = String(u), this._i = 0;
      }, function() {
        var u, l = this._t, h = this._i;
        return h >= l.length ? { value: void 0, done: !0 } : (u = c(l, h), this._i += u.length, { value: u, done: !1 });
      });
    }, 5942: (a, B, n) => {
      var c = n(5772), u = n(6078), l = n(465), h = "startsWith", d = ""[h];
      c(c.P + c.F * n(6570)(h), "String", { startsWith: function(p) {
        var Q = l(this, p, h), v = u(Math.min(arguments.length > 1 ? arguments[1] : void 0, Q.length)), F = String(p);
        return d ? d.call(Q, F, v) : Q.slice(v, v + F.length) === F;
      } });
    }, 9823: (a, B, n) => {
      var c = n(8113), u = n(4040), l = n(6628), h = n(5772), d = n(7738), p = n(998).KEY, Q = n(8625), v = n(8655), F = n(5727), H = n(5078), x = n(2190), O = n(9669), S = n(5660), N = n(7820), G = n(9141), b = n(6365), P = n(7334), V = n(6033), k = n(5703), L = n(1382), D = n(6061), Y = n(2897), iA = n(5259), oA = n(4662), CA = n(7957), HA = n(8558), vA = n(2912), EA = oA.f, FA = HA.f, dA = iA.f, X = c.Symbol, M = c.JSON, q = M && M.stringify, uA = "prototype", aA = x("_hidden"), mA = x("toPrimitive"), VA = {}.propertyIsEnumerable, tA = v("symbol-registry"), lA = v("symbols"), yA = v("op-symbols"), LA = Object[uA], KA = typeof X == "function" && !!CA.f, WA = c.QObject, ne = !WA || !WA[uA] || !WA[uA].findChild, le = l && Q(function() {
        return Y(FA({}, "a", { get: function() {
          return FA(this, "a", { value: 7 }).a;
        } })).a != 7;
      }) ? function(cA, pA, GA) {
        var YA = EA(LA, pA);
        YA && delete LA[pA], FA(cA, pA, GA), YA && cA !== LA && FA(LA, pA, YA);
      } : FA, ee = function(cA) {
        var pA = lA[cA] = Y(X[uA]);
        return pA._k = cA, pA;
      }, ge = KA && typeof X.iterator == "symbol" ? function(cA) {
        return typeof cA == "symbol";
      } : function(cA) {
        return cA instanceof X;
      }, Fe = function(cA, pA, GA) {
        return cA === LA && Fe(yA, pA, GA), b(cA), pA = L(pA, !0), b(GA), u(lA, pA) ? (GA.enumerable ? (u(cA, aA) && cA[aA][pA] && (cA[aA][pA] = !1), GA = Y(GA, { enumerable: D(0, !1) })) : (u(cA, aA) || FA(cA, aA, D(1, {})), cA[aA][pA] = !0), le(cA, pA, GA)) : FA(cA, pA, GA);
      }, se = function(cA, pA) {
        b(cA);
        for (var GA, YA = N(pA = k(pA)), ce = 0, de = YA.length; de > ce; )
          Fe(cA, GA = YA[ce++], pA[GA]);
        return cA;
      }, we = function(cA) {
        var pA = VA.call(this, cA = L(cA, !0));
        return !(this === LA && u(lA, cA) && !u(yA, cA)) && (!(pA || !u(this, cA) || !u(lA, cA) || u(this, aA) && this[aA][cA]) || pA);
      }, pe = function(cA, pA) {
        if (cA = k(cA), pA = L(pA, !0), cA !== LA || !u(lA, pA) || u(yA, pA)) {
          var GA = EA(cA, pA);
          return !GA || !u(lA, pA) || u(cA, aA) && cA[aA][pA] || (GA.enumerable = !0), GA;
        }
      }, oe = function(cA) {
        for (var pA, GA = dA(k(cA)), YA = [], ce = 0; GA.length > ce; )
          u(lA, pA = GA[ce++]) || pA == aA || pA == p || YA.push(pA);
        return YA;
      }, ae = function(cA) {
        for (var pA, GA = cA === LA, YA = dA(GA ? yA : k(cA)), ce = [], de = 0; YA.length > de; )
          !u(lA, pA = YA[de++]) || GA && !u(LA, pA) || ce.push(lA[pA]);
        return ce;
      };
      KA || (d((X = function() {
        if (this instanceof X)
          throw TypeError("Symbol is not a constructor!");
        var cA = H(arguments.length > 0 ? arguments[0] : void 0), pA = function(GA) {
          this === LA && pA.call(yA, GA), u(this, aA) && u(this[aA], cA) && (this[aA][cA] = !1), le(this, cA, D(1, GA));
        };
        return l && ne && le(LA, cA, { configurable: !0, set: pA }), ee(cA);
      })[uA], "toString", function() {
        return this._k;
      }), oA.f = pe, HA.f = Fe, n(6604).f = iA.f = oe, n(5873).f = we, CA.f = ae, l && !n(1422) && d(LA, "propertyIsEnumerable", we, !0), O.f = function(cA) {
        return ee(x(cA));
      }), h(h.G + h.W + h.F * !KA, { Symbol: X });
      for (var be = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), Ze = 0; be.length > Ze; )
        x(be[Ze++]);
      for (var Ve = vA(x.store), ze = 0; Ve.length > ze; )
        S(Ve[ze++]);
      h(h.S + h.F * !KA, "Symbol", { for: function(cA) {
        return u(tA, cA += "") ? tA[cA] : tA[cA] = X(cA);
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
      var qe = Q(function() {
        CA.f(1);
      });
      h(h.S + h.F * qe, "Object", { getOwnPropertySymbols: function(cA) {
        return CA.f(V(cA));
      } }), M && h(h.S + h.F * (!KA || Q(function() {
        var cA = X();
        return q([cA]) != "[null]" || q({ a: cA }) != "{}" || q(Object(cA)) != "{}";
      })), "JSON", { stringify: function(cA) {
        for (var pA, GA, YA = [cA], ce = 1; arguments.length > ce; )
          YA.push(arguments[ce++]);
        if (GA = pA = YA[1], (P(pA) || cA !== void 0) && !ge(cA))
          return G(pA) || (pA = function(de, ke) {
            if (typeof GA == "function" && (ke = GA.call(this, de, ke)), !ge(ke))
              return ke;
          }), YA[1] = pA, q.apply(M, YA);
      } }), X[uA][mA] || n(4216)(X[uA], mA, X[uA].valueOf), F(X, "Symbol"), F(Math, "Math", !0), F(c.JSON, "JSON", !0);
    }, 773: (a, B, n) => {
      var c, u = n(8113), l = n(8309)(0), h = n(7738), d = n(998), p = n(7029), Q = n(6339), v = n(7334), F = n(9060), H = n(9060), x = !u.ActiveXObject && "ActiveXObject" in u, O = "WeakMap", S = d.getWeak, N = Object.isExtensible, G = Q.ufstore, b = function(k) {
        return function() {
          return k(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      }, P = { get: function(k) {
        if (v(k)) {
          var L = S(k);
          return L === !0 ? G(F(this, O)).get(k) : L ? L[this._i] : void 0;
        }
      }, set: function(k, L) {
        return Q.def(F(this, O), k, L);
      } }, V = a.exports = n(7611)(O, b, P, Q, !0, !0);
      H && x && (p((c = Q.getConstructor(b, O)).prototype, P), d.NEED = !0, l(["delete", "has", "get", "set"], function(k) {
        var L = V.prototype, D = L[k];
        h(L, k, function(Y, iA) {
          if (v(Y) && !N(Y)) {
            this._f || (this._f = new c());
            var oA = this._f[k](Y, iA);
            return k == "set" ? this : oA;
          }
          return D.call(this, Y, iA);
        });
      }));
    }, 3623: (a, B, n) => {
      var c = n(6339), u = n(9060), l = "WeakSet";
      n(7611)(l, function(h) {
        return function() {
          return h(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      }, { add: function(h) {
        return c.def(u(this, l), h, !0);
      } }, c, !1, !0);
    }, 8081: (a, B, n) => {
      var c = n(5772), u = n(9021)(!0);
      c(c.P, "Array", { includes: function(l) {
        return u(this, l, arguments.length > 1 ? arguments[1] : void 0);
      } }), n(2094)("includes");
    }, 7453: (a, B, n) => {
      var c = n(5772), u = n(6831), l = n(5703), h = n(4662), d = n(6644);
      c(c.S, "Object", { getOwnPropertyDescriptors: function(p) {
        for (var Q, v, F = l(p), H = h.f, x = u(F), O = {}, S = 0; x.length > S; )
          (v = H(F, Q = x[S++])) !== void 0 && d(O, Q, v);
        return O;
      } });
    }, 27: (a, B, n) => {
      var c = n(5772), u = n(758)(!1);
      c(c.S, "Object", { values: function(l) {
        return u(l);
      } });
    }, 3085: (a, B, n) => {
      for (var c = n(7680), u = n(2912), l = n(7738), h = n(8113), d = n(4216), p = n(3988), Q = n(2190), v = Q("iterator"), F = Q("toStringTag"), H = p.Array, x = { CSSRuleList: !0, CSSStyleDeclaration: !1, CSSValueList: !1, ClientRectList: !1, DOMRectList: !1, DOMStringList: !1, DOMTokenList: !0, DataTransferItemList: !1, FileList: !1, HTMLAllCollection: !1, HTMLCollection: !1, HTMLFormElement: !1, HTMLSelectElement: !1, MediaList: !0, MimeTypeArray: !1, NamedNodeMap: !1, NodeList: !0, PaintRequestList: !1, Plugin: !1, PluginArray: !1, SVGLengthList: !1, SVGNumberList: !1, SVGPathSegList: !1, SVGPointList: !1, SVGStringList: !1, SVGTransformList: !1, SourceBufferList: !1, StyleSheetList: !0, TextTrackCueList: !1, TextTrackList: !1, TouchList: !1 }, O = u(x), S = 0; S < O.length; S++) {
        var N, G = O[S], b = x[G], P = h[G], V = P && P.prototype;
        if (V && (V[v] || d(V, v, H), V[F] || d(V, F, G), p[G] = H, b))
          for (N in c)
            V[N] || l(V, N, c[N], !0);
      }
    }, 927: (a, B, n) => {
      a.exports = function c(u, l, h) {
        function d(v, F) {
          if (!l[v]) {
            if (!u[v]) {
              if (p)
                return p(v, !0);
              var H = new Error("Cannot find module '" + v + "'");
              throw H.code = "MODULE_NOT_FOUND", H;
            }
            var x = l[v] = { exports: {} };
            u[v][0].call(x.exports, function(O) {
              return d(u[v][1][O] || O);
            }, x, x.exports, c, u, l, h);
          }
          return l[v].exports;
        }
        for (var p = void 0, Q = 0; Q < h.length; Q++)
          d(h[Q]);
        return d;
      }({ 1: [function(c, u, l) {
        (function(h) {
          var d, p, Q = h.MutationObserver || h.WebKitMutationObserver;
          if (Q) {
            var v = 0, F = new Q(S), H = h.document.createTextNode("");
            F.observe(H, { characterData: !0 }), d = function() {
              H.data = v = ++v % 2;
            };
          } else if (h.setImmediate || h.MessageChannel === void 0)
            d = "document" in h && "onreadystatechange" in h.document.createElement("script") ? function() {
              var N = h.document.createElement("script");
              N.onreadystatechange = function() {
                S(), N.onreadystatechange = null, N.parentNode.removeChild(N), N = null;
              }, h.document.documentElement.appendChild(N);
            } : function() {
              setTimeout(S, 0);
            };
          else {
            var x = new h.MessageChannel();
            x.port1.onmessage = S, d = function() {
              x.port2.postMessage(0);
            };
          }
          var O = [];
          function S() {
            var N, G;
            p = !0;
            for (var b = O.length; b; ) {
              for (G = O, O = [], N = -1; ++N < b; )
                G[N]();
              b = O.length;
            }
            p = !1;
          }
          u.exports = function(N) {
            O.push(N) !== 1 || p || d();
          };
        }).call(this, n.g !== void 0 ? n.g : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, {}], 2: [function(c, u, l) {
        var h = c(1);
        function d() {
        }
        var p = {}, Q = ["REJECTED"], v = ["FULFILLED"], F = ["PENDING"];
        function H(b) {
          if (typeof b != "function")
            throw new TypeError("resolver must be a function");
          this.state = F, this.queue = [], this.outcome = void 0, b !== d && N(this, b);
        }
        function x(b, P, V) {
          this.promise = b, typeof P == "function" && (this.onFulfilled = P, this.callFulfilled = this.otherCallFulfilled), typeof V == "function" && (this.onRejected = V, this.callRejected = this.otherCallRejected);
        }
        function O(b, P, V) {
          h(function() {
            var k;
            try {
              k = P(V);
            } catch (L) {
              return p.reject(b, L);
            }
            k === b ? p.reject(b, new TypeError("Cannot resolve promise with itself")) : p.resolve(b, k);
          });
        }
        function S(b) {
          var P = b && b.then;
          if (b && (typeof b == "object" || typeof b == "function") && typeof P == "function")
            return function() {
              P.apply(b, arguments);
            };
        }
        function N(b, P) {
          var V = !1;
          function k(Y) {
            V || (V = !0, p.reject(b, Y));
          }
          function L(Y) {
            V || (V = !0, p.resolve(b, Y));
          }
          var D = G(function() {
            P(L, k);
          });
          D.status === "error" && k(D.value);
        }
        function G(b, P) {
          var V = {};
          try {
            V.value = b(P), V.status = "success";
          } catch (k) {
            V.status = "error", V.value = k;
          }
          return V;
        }
        u.exports = H, H.prototype.catch = function(b) {
          return this.then(null, b);
        }, H.prototype.then = function(b, P) {
          if (typeof b != "function" && this.state === v || typeof P != "function" && this.state === Q)
            return this;
          var V = new this.constructor(d);
          return this.state !== F ? O(V, this.state === v ? b : P, this.outcome) : this.queue.push(new x(V, b, P)), V;
        }, x.prototype.callFulfilled = function(b) {
          p.resolve(this.promise, b);
        }, x.prototype.otherCallFulfilled = function(b) {
          O(this.promise, this.onFulfilled, b);
        }, x.prototype.callRejected = function(b) {
          p.reject(this.promise, b);
        }, x.prototype.otherCallRejected = function(b) {
          O(this.promise, this.onRejected, b);
        }, p.resolve = function(b, P) {
          var V = G(S, P);
          if (V.status === "error")
            return p.reject(b, V.value);
          var k = V.value;
          if (k)
            N(b, k);
          else {
            b.state = v, b.outcome = P;
            for (var L = -1, D = b.queue.length; ++L < D; )
              b.queue[L].callFulfilled(P);
          }
          return b;
        }, p.reject = function(b, P) {
          b.state = Q, b.outcome = P;
          for (var V = -1, k = b.queue.length; ++V < k; )
            b.queue[V].callRejected(P);
          return b;
        }, H.resolve = function(b) {
          return b instanceof this ? b : p.resolve(new this(d), b);
        }, H.reject = function(b) {
          var P = new this(d);
          return p.reject(P, b);
        }, H.all = function(b) {
          var P = this;
          if (Object.prototype.toString.call(b) !== "[object Array]")
            return this.reject(new TypeError("must be an array"));
          var V = b.length, k = !1;
          if (!V)
            return this.resolve([]);
          for (var L = new Array(V), D = 0, Y = -1, iA = new this(d); ++Y < V; )
            oA(b[Y], Y);
          return iA;
          function oA(CA, HA) {
            P.resolve(CA).then(function(vA) {
              L[HA] = vA, ++D !== V || k || (k = !0, p.resolve(iA, L));
            }, function(vA) {
              k || (k = !0, p.reject(iA, vA));
            });
          }
        }, H.race = function(b) {
          var P = this;
          if (Object.prototype.toString.call(b) !== "[object Array]")
            return this.reject(new TypeError("must be an array"));
          var V, k = b.length, L = !1;
          if (!k)
            return this.resolve([]);
          for (var D = -1, Y = new this(d); ++D < k; )
            V = b[D], P.resolve(V).then(function(iA) {
              L || (L = !0, p.resolve(Y, iA));
            }, function(iA) {
              L || (L = !0, p.reject(Y, iA));
            });
          return Y;
        };
      }, { 1: 1 }], 3: [function(c, u, l) {
        (function(h) {
          typeof h.Promise != "function" && (h.Promise = c(2));
        }).call(this, n.g !== void 0 ? n.g : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, { 2: 2 }], 4: [function(c, u, l) {
        var h = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(C) {
          return typeof C;
        } : function(C) {
          return C && typeof Symbol == "function" && C.constructor === Symbol && C !== Symbol.prototype ? "symbol" : typeof C;
        }, d = function() {
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
            for (var m = new (typeof BlobBuilder < "u" ? BlobBuilder : typeof MSBlobBuilder < "u" ? MSBlobBuilder : typeof MozBlobBuilder < "u" ? MozBlobBuilder : WebKitBlobBuilder)(), _ = 0; _ < C.length; _ += 1)
              m.append(C[_]);
            return m.getBlob(E.type);
          }
        }
        typeof Promise > "u" && c(3);
        var Q = Promise;
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
        var O = "local-forage-detect-blob-support", S = void 0, N = {}, G = Object.prototype.toString, b = "readonly", P = "readwrite";
        function V(C) {
          for (var E = C.length, m = new ArrayBuffer(E), _ = new Uint8Array(m), K = 0; K < E; K++)
            _[K] = C.charCodeAt(K);
          return m;
        }
        function k(C) {
          return typeof S == "boolean" ? Q.resolve(S) : function(E) {
            return new Q(function(m) {
              var _ = E.transaction(O, P), K = p([""]);
              _.objectStore(O).put(K, "key"), _.onabort = function(R) {
                R.preventDefault(), R.stopPropagation(), m(!1);
              }, _.oncomplete = function() {
                var R = navigator.userAgent.match(/Chrome\/(\d+)/), W = navigator.userAgent.match(/Edge\//);
                m(W || !R || parseInt(R[1], 10) >= 43);
              };
            }).catch(function() {
              return !1;
            });
          }(C).then(function(E) {
            return S = E;
          });
        }
        function L(C) {
          var E = N[C.name], m = {};
          m.promise = new Q(function(_, K) {
            m.resolve = _, m.reject = K;
          }), E.deferredOperations.push(m), E.dbReady ? E.dbReady = E.dbReady.then(function() {
            return m.promise;
          }) : E.dbReady = m.promise;
        }
        function D(C) {
          var E = N[C.name].deferredOperations.pop();
          if (E)
            return E.resolve(), E.promise;
        }
        function Y(C, E) {
          var m = N[C.name].deferredOperations.pop();
          if (m)
            return m.reject(E), m.promise;
        }
        function iA(C, E) {
          return new Q(function(m, _) {
            if (N[C.name] = N[C.name] || { forages: [], db: null, dbReady: null, deferredOperations: [] }, C.db) {
              if (!E)
                return m(C.db);
              L(C), C.db.close();
            }
            var K = [C.name];
            E && K.push(C.version);
            var R = d.open.apply(d, K);
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
              W.preventDefault(), _(R.error);
            }, R.onsuccess = function() {
              var W = R.result;
              W.onversionchange = function(z) {
                z.target.close();
              }, m(W), D(C);
            };
          });
        }
        function oA(C) {
          return iA(C, !1);
        }
        function CA(C) {
          return iA(C, !0);
        }
        function HA(C, E) {
          if (!C.db)
            return !0;
          var m = !C.db.objectStoreNames.contains(C.storeName), _ = C.version < C.db.version, K = C.version > C.db.version;
          if (_ && (C.version !== E && console.warn('The database "' + C.name + `" can't be downgraded from version ` + C.db.version + " to version " + C.version + "."), C.version = C.db.version), K || m) {
            if (m) {
              var R = C.db.version + 1;
              R > C.version && (C.version = R);
            }
            return !0;
          }
          return !1;
        }
        function vA(C) {
          return p([V(atob(C.data))], { type: C.type });
        }
        function EA(C) {
          return C && C.__local_forage_encoded_blob;
        }
        function FA(C) {
          var E = this, m = E._initReady().then(function() {
            var _ = N[E._dbInfo.name];
            if (_ && _.dbReady)
              return _.dbReady;
          });
          return F(m, C, C), m;
        }
        function dA(C, E, m, _) {
          _ === void 0 && (_ = 1);
          try {
            var K = C.db.transaction(C.storeName, E);
            m(null, K);
          } catch (R) {
            if (_ > 0 && (!C.db || R.name === "InvalidStateError" || R.name === "NotFoundError"))
              return Q.resolve().then(function() {
                if (!C.db || R.name === "NotFoundError" && !C.db.objectStoreNames.contains(C.storeName) && C.version <= C.db.version)
                  return C.db && (C.version = C.db.version + 1), CA(C);
              }).then(function() {
                return function(W) {
                  L(W);
                  for (var z = N[W.name], eA = z.forages, AA = 0; AA < eA.length; AA++) {
                    var BA = eA[AA];
                    BA._dbInfo.db && (BA._dbInfo.db.close(), BA._dbInfo.db = null);
                  }
                  return W.db = null, oA(W).then(function(y) {
                    return W.db = y, HA(W) ? CA(W) : y;
                  }).then(function(y) {
                    W.db = z.db = y;
                    for (var j = 0; j < eA.length; j++)
                      eA[j]._dbInfo.db = y;
                  }).catch(function(y) {
                    throw Y(W, y), y;
                  });
                }(C).then(function() {
                  dA(C, E, m, _ - 1);
                });
              }).catch(m);
            m(R);
          }
        }
        var X = { _driver: "asyncStorage", _initStorage: function(C) {
          var E = this, m = { db: null };
          if (C)
            for (var _ in C)
              m[_] = C[_];
          var K = N[m.name];
          K || (K = { forages: [], db: null, dbReady: null, deferredOperations: [] }, N[m.name] = K), K.forages.push(E), E._initReady || (E._initReady = E.ready, E.ready = FA);
          var R = [];
          function W() {
            return Q.resolve();
          }
          for (var z = 0; z < K.forages.length; z++) {
            var eA = K.forages[z];
            eA !== E && R.push(eA._initReady().catch(W));
          }
          var AA = K.forages.slice(0);
          return Q.all(R).then(function() {
            return m.db = K.db, oA(m);
          }).then(function(BA) {
            return m.db = BA, HA(m, E._defaultConfig.version) ? CA(m) : BA;
          }).then(function(BA) {
            m.db = K.db = BA, E._dbInfo = m;
            for (var y = 0; y < AA.length; y++) {
              var j = AA[y];
              j !== E && (j._dbInfo.db = m.db, j._dbInfo.version = m.version);
            }
          });
        }, _support: function() {
          try {
            if (!d || !d.open)
              return !1;
            var C = typeof openDatabase < "u" && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform), E = typeof fetch == "function" && fetch.toString().indexOf("[native code") !== -1;
            return (!C || E) && typeof indexedDB < "u" && typeof IDBKeyRange < "u";
          } catch {
            return !1;
          }
        }(), iterate: function(C, E) {
          var m = this, _ = new Q(function(K, R) {
            m.ready().then(function() {
              dA(m._dbInfo, b, function(W, z) {
                if (W)
                  return R(W);
                try {
                  var eA = z.objectStore(m._dbInfo.storeName).openCursor(), AA = 1;
                  eA.onsuccess = function() {
                    var BA = eA.result;
                    if (BA) {
                      var y = BA.value;
                      EA(y) && (y = vA(y));
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
          return v(_, E), _;
        }, getItem: function(C, E) {
          var m = this;
          C = H(C);
          var _ = new Q(function(K, R) {
            m.ready().then(function() {
              dA(m._dbInfo, b, function(W, z) {
                if (W)
                  return R(W);
                try {
                  var eA = z.objectStore(m._dbInfo.storeName).get(C);
                  eA.onsuccess = function() {
                    var AA = eA.result;
                    AA === void 0 && (AA = null), EA(AA) && (AA = vA(AA)), K(AA);
                  }, eA.onerror = function() {
                    R(eA.error);
                  };
                } catch (AA) {
                  R(AA);
                }
              });
            }).catch(R);
          });
          return v(_, E), _;
        }, setItem: function(C, E, m) {
          var _ = this;
          C = H(C);
          var K = new Q(function(R, W) {
            var z;
            _.ready().then(function() {
              return z = _._dbInfo, G.call(E) === "[object Blob]" ? k(z.db).then(function(eA) {
                return eA ? E : (AA = E, new Q(function(BA, y) {
                  var j = new FileReader();
                  j.onerror = y, j.onloadend = function($) {
                    var sA = btoa($.target.result || "");
                    BA({ __local_forage_encoded_blob: !0, data: sA, type: AA.type });
                  }, j.readAsBinaryString(AA);
                }));
                var AA;
              }) : E;
            }).then(function(eA) {
              dA(_._dbInfo, P, function(AA, BA) {
                if (AA)
                  return W(AA);
                try {
                  var y = BA.objectStore(_._dbInfo.storeName);
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
          var _ = new Q(function(K, R) {
            m.ready().then(function() {
              dA(m._dbInfo, P, function(W, z) {
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
          return v(_, E), _;
        }, clear: function(C) {
          var E = this, m = new Q(function(_, K) {
            E.ready().then(function() {
              dA(E._dbInfo, P, function(R, W) {
                if (R)
                  return K(R);
                try {
                  var z = W.objectStore(E._dbInfo.storeName).clear();
                  W.oncomplete = function() {
                    _();
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
          var E = this, m = new Q(function(_, K) {
            E.ready().then(function() {
              dA(E._dbInfo, b, function(R, W) {
                if (R)
                  return K(R);
                try {
                  var z = W.objectStore(E._dbInfo.storeName).count();
                  z.onsuccess = function() {
                    _(z.result);
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
          var m = this, _ = new Q(function(K, R) {
            C < 0 ? K(null) : m.ready().then(function() {
              dA(m._dbInfo, b, function(W, z) {
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
          return v(_, E), _;
        }, keys: function(C) {
          var E = this, m = new Q(function(_, K) {
            E.ready().then(function() {
              dA(E._dbInfo, b, function(R, W) {
                if (R)
                  return K(R);
                try {
                  var z = W.objectStore(E._dbInfo.storeName).openKeyCursor(), eA = [];
                  z.onsuccess = function() {
                    var AA = z.result;
                    AA ? (eA.push(AA.key), AA.continue()) : _(eA);
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
          var _, K = this;
          if (C.name) {
            var R = C.name === m.name && K._dbInfo.db ? Q.resolve(K._dbInfo.db) : oA(C).then(function(W) {
              var z = N[C.name], eA = z.forages;
              z.db = W;
              for (var AA = 0; AA < eA.length; AA++)
                eA[AA]._dbInfo.db = W;
              return W;
            });
            _ = C.storeName ? R.then(function(W) {
              if (W.objectStoreNames.contains(C.storeName)) {
                var z = W.version + 1;
                L(C);
                var eA = N[C.name], AA = eA.forages;
                W.close();
                for (var BA = 0; BA < AA.length; BA++) {
                  var y = AA[BA];
                  y._dbInfo.db = null, y._dbInfo.version = z;
                }
                var j = new Q(function($, sA) {
                  var bA = d.open(C.name, z);
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
                    bA._dbInfo.db = $, D(bA._dbInfo);
                  }
                }).catch(function($) {
                  throw (Y(C, $) || Q.resolve()).catch(function() {
                  }), $;
                });
              }
            }) : R.then(function(W) {
              L(C);
              var z = N[C.name], eA = z.forages;
              W.close();
              for (var AA = 0; AA < eA.length; AA++)
                eA[AA]._dbInfo.db = null;
              var BA = new Q(function(y, j) {
                var $ = d.deleteDatabase(C.name);
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
                  D(eA[j]._dbInfo);
              }).catch(function(y) {
                throw (Y(C, y) || Q.resolve()).catch(function() {
                }), y;
              });
            });
          } else
            _ = Q.reject("Invalid arguments");
          return v(_, E), _;
        } }, M = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", q = /^~~local_forage_type~([^~]+)~/, uA = "__lfsc__:", aA = uA.length, mA = "arbf", VA = "blob", tA = "si08", lA = "ui08", yA = "uic8", LA = "si16", KA = "si32", WA = "ur16", ne = "ui32", le = "fl32", ee = "fl64", ge = aA + mA.length, Fe = Object.prototype.toString;
        function se(C) {
          var E, m, _, K, R, W = 0.75 * C.length, z = C.length, eA = 0;
          C[C.length - 1] === "=" && (W--, C[C.length - 2] === "=" && W--);
          var AA = new ArrayBuffer(W), BA = new Uint8Array(AA);
          for (E = 0; E < z; E += 4)
            m = M.indexOf(C[E]), _ = M.indexOf(C[E + 1]), K = M.indexOf(C[E + 2]), R = M.indexOf(C[E + 3]), BA[eA++] = m << 2 | _ >> 4, BA[eA++] = (15 & _) << 4 | K >> 2, BA[eA++] = (3 & K) << 6 | 63 & R;
          return AA;
        }
        function we(C) {
          var E, m = new Uint8Array(C), _ = "";
          for (E = 0; E < m.length; E += 3)
            _ += M[m[E] >> 2], _ += M[(3 & m[E]) << 4 | m[E + 1] >> 4], _ += M[(15 & m[E + 1]) << 2 | m[E + 2] >> 6], _ += M[63 & m[E + 2]];
          return m.length % 3 == 2 ? _ = _.substring(0, _.length - 1) + "=" : m.length % 3 == 1 && (_ = _.substring(0, _.length - 2) + "=="), _;
        }
        var pe = { serialize: function(C, E) {
          var m = "";
          if (C && (m = Fe.call(C)), C && (m === "[object ArrayBuffer]" || C.buffer && Fe.call(C.buffer) === "[object ArrayBuffer]")) {
            var _, K = uA;
            C instanceof ArrayBuffer ? (_ = C, K += mA) : (_ = C.buffer, m === "[object Int8Array]" ? K += tA : m === "[object Uint8Array]" ? K += lA : m === "[object Uint8ClampedArray]" ? K += yA : m === "[object Int16Array]" ? K += LA : m === "[object Uint16Array]" ? K += WA : m === "[object Int32Array]" ? K += KA : m === "[object Uint32Array]" ? K += ne : m === "[object Float32Array]" ? K += le : m === "[object Float64Array]" ? K += ee : E(new Error("Failed to get type for BinaryArray"))), E(K + we(_));
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
          var E, m = C.substring(ge), _ = C.substring(aA, ge);
          if (_ === VA && q.test(m)) {
            var K = m.match(q);
            E = K[1], m = m.substring(K[0].length);
          }
          var R = se(m);
          switch (_) {
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
            case WA:
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
              throw new Error("Unkown type: " + _);
          }
        }, stringToBuffer: se, bufferToString: we };
        function oe(C, E, m, _) {
          C.executeSql("CREATE TABLE IF NOT EXISTS " + E.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], m, _);
        }
        function ae(C, E, m, _, K, R) {
          C.executeSql(m, _, K, function(W, z) {
            z.code === z.SYNTAX_ERR ? W.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [E.storeName], function(eA, AA) {
              AA.rows.length ? R(eA, z) : oe(eA, E, function() {
                eA.executeSql(m, _, K, R);
              }, R);
            }, R) : R(W, z);
          }, R);
        }
        function be(C, E, m, _) {
          var K = this;
          C = H(C);
          var R = new Q(function(W, z) {
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
                    if (_ > 0)
                      return void W(be.apply(K, [C, eA, m, _ - 1]));
                    z(j);
                  }
                });
              });
            }).catch(z);
          });
          return v(R, m), R;
        }
        function Ze(C) {
          return new Q(function(E, m) {
            C.transaction(function(_) {
              _.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(K, R) {
                for (var W = [], z = 0; z < R.rows.length; z++)
                  W.push(R.rows.item(z).name);
                E({ db: C, storeNames: W });
              }, function(K, R) {
                m(R);
              });
            }, function(_) {
              m(_);
            });
          });
        }
        var Ve = { _driver: "webSQLStorage", _initStorage: function(C) {
          var E = this, m = { db: null };
          if (C)
            for (var _ in C)
              m[_] = typeof C[_] != "string" ? C[_].toString() : C[_];
          var K = new Q(function(R, W) {
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
          var m = this, _ = new Q(function(K, R) {
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
          return v(_, E), _;
        }, getItem: function(C, E) {
          var m = this;
          C = H(C);
          var _ = new Q(function(K, R) {
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
          return v(_, E), _;
        }, setItem: function(C, E, m) {
          return be.apply(this, [C, E, m, 1]);
        }, removeItem: function(C, E) {
          var m = this;
          C = H(C);
          var _ = new Q(function(K, R) {
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
          return v(_, E), _;
        }, clear: function(C) {
          var E = this, m = new Q(function(_, K) {
            E.ready().then(function() {
              var R = E._dbInfo;
              R.db.transaction(function(W) {
                ae(W, R, "DELETE FROM " + R.storeName, [], function() {
                  _();
                }, function(z, eA) {
                  K(eA);
                });
              });
            }).catch(K);
          });
          return v(m, C), m;
        }, length: function(C) {
          var E = this, m = new Q(function(_, K) {
            E.ready().then(function() {
              var R = E._dbInfo;
              R.db.transaction(function(W) {
                ae(W, R, "SELECT COUNT(key) as c FROM " + R.storeName, [], function(z, eA) {
                  var AA = eA.rows.item(0).c;
                  _(AA);
                }, function(z, eA) {
                  K(eA);
                });
              });
            }).catch(K);
          });
          return v(m, C), m;
        }, key: function(C, E) {
          var m = this, _ = new Q(function(K, R) {
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
          return v(_, E), _;
        }, keys: function(C) {
          var E = this, m = new Q(function(_, K) {
            E.ready().then(function() {
              var R = E._dbInfo;
              R.db.transaction(function(W) {
                ae(W, R, "SELECT key FROM " + R.storeName, [], function(z, eA) {
                  for (var AA = [], BA = 0; BA < eA.rows.length; BA++)
                    AA.push(eA.rows.item(BA).key);
                  _(AA);
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
          var _, K = this;
          return v(_ = C.name ? new Q(function(R) {
            var W;
            W = C.name === m.name ? K._dbInfo.db : openDatabase(C.name, "", "", 0), C.storeName ? R({ db: W, storeNames: [C.storeName] }) : R(Ze(W));
          }).then(function(R) {
            return new Q(function(W, z) {
              R.db.transaction(function(eA) {
                function AA($) {
                  return new Q(function(sA, bA) {
                    eA.executeSql("DROP TABLE IF EXISTS " + $, [], function() {
                      sA();
                    }, function(MA, DA) {
                      bA(DA);
                    });
                  });
                }
                for (var BA = [], y = 0, j = R.storeNames.length; y < j; y++)
                  BA.push(AA(R.storeNames[y]));
                Q.all(BA).then(function() {
                  W();
                }).catch(function($) {
                  z($);
                });
              }, function(eA) {
                z(eA);
              });
            });
          }) : Q.reject("Invalid arguments"), E), _;
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
          return E.keyPrefix = ze(C, this._defaultConfig), qe() ? (this._dbInfo = E, E.serializer = pe, Q.resolve()) : Q.reject();
        }, _support: function() {
          try {
            return typeof localStorage < "u" && "setItem" in localStorage && !!localStorage.setItem;
          } catch {
            return !1;
          }
        }(), iterate: function(C, E) {
          var m = this, _ = m.ready().then(function() {
            for (var K = m._dbInfo, R = K.keyPrefix, W = R.length, z = localStorage.length, eA = 1, AA = 0; AA < z; AA++) {
              var BA = localStorage.key(AA);
              if (BA.indexOf(R) === 0) {
                var y = localStorage.getItem(BA);
                if (y && (y = K.serializer.deserialize(y)), (y = C(y, BA.substring(W), eA++)) !== void 0)
                  return y;
              }
            }
          });
          return v(_, E), _;
        }, getItem: function(C, E) {
          var m = this;
          C = H(C);
          var _ = m.ready().then(function() {
            var K = m._dbInfo, R = localStorage.getItem(K.keyPrefix + C);
            return R && (R = K.serializer.deserialize(R)), R;
          });
          return v(_, E), _;
        }, setItem: function(C, E, m) {
          var _ = this;
          C = H(C);
          var K = _.ready().then(function() {
            E === void 0 && (E = null);
            var R = E;
            return new Q(function(W, z) {
              var eA = _._dbInfo;
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
          var _ = m.ready().then(function() {
            var K = m._dbInfo;
            localStorage.removeItem(K.keyPrefix + C);
          });
          return v(_, E), _;
        }, clear: function(C) {
          var E = this, m = E.ready().then(function() {
            for (var _ = E._dbInfo.keyPrefix, K = localStorage.length - 1; K >= 0; K--) {
              var R = localStorage.key(K);
              R.indexOf(_) === 0 && localStorage.removeItem(R);
            }
          });
          return v(m, C), m;
        }, length: function(C) {
          var E = this.keys().then(function(m) {
            return m.length;
          });
          return v(E, C), E;
        }, key: function(C, E) {
          var m = this, _ = m.ready().then(function() {
            var K, R = m._dbInfo;
            try {
              K = localStorage.key(C);
            } catch {
              K = null;
            }
            return K && (K = K.substring(R.keyPrefix.length)), K;
          });
          return v(_, E), _;
        }, keys: function(C) {
          var E = this, m = E.ready().then(function() {
            for (var _ = E._dbInfo, K = localStorage.length, R = [], W = 0; W < K; W++) {
              var z = localStorage.key(W);
              z.indexOf(_.keyPrefix) === 0 && R.push(z.substring(_.keyPrefix.length));
            }
            return R;
          });
          return v(m, C), m;
        }, dropInstance: function(C, E) {
          if (E = x.apply(this, arguments), !(C = typeof C != "function" && C || {}).name) {
            var m = this.config();
            C.name = C.name || m.name, C.storeName = C.storeName || m.storeName;
          }
          var _, K = this;
          return _ = C.name ? new Q(function(R) {
            C.storeName ? R(ze(C, K._defaultConfig)) : R(C.name + "/");
          }).then(function(R) {
            for (var W = localStorage.length - 1; W >= 0; W--) {
              var z = localStorage.key(W);
              z.indexOf(R) === 0 && localStorage.removeItem(z);
            }
          }) : Q.reject("Invalid arguments"), v(_, E), _;
        } }, pA = function(C, E) {
          for (var m = C.length, _ = 0; _ < m; ) {
            if ((K = C[_]) === (R = E) || typeof K == "number" && typeof R == "number" && isNaN(K) && isNaN(R))
              return !0;
            _++;
          }
          var K, R;
          return !1;
        }, GA = Array.isArray || function(C) {
          return Object.prototype.toString.call(C) === "[object Array]";
        }, YA = {}, ce = {}, de = { INDEXEDDB: X, WEBSQL: Ve, LOCALSTORAGE: cA }, ke = [de.INDEXEDDB._driver, de.WEBSQL._driver, de.LOCALSTORAGE._driver], je = ["dropInstance"], tr = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(je), $e = { description: "", driver: ke.slice(), name: "localforage", size: 4980736, storeName: "keyvaluepairs", version: 1 };
        function Br(C, E) {
          C[E] = function() {
            var m = arguments;
            return C.ready().then(function() {
              return C[E].apply(C, m);
            });
          };
        }
        function Xe() {
          for (var C = 1; C < arguments.length; C++) {
            var E = arguments[C];
            if (E)
              for (var m in E)
                E.hasOwnProperty(m) && (GA(E[m]) ? arguments[0][m] = E[m].slice() : arguments[0][m] = E[m]);
          }
          return arguments[0];
        }
        var Or = function() {
          function C(E) {
            for (var m in function(R, W) {
              if (!(R instanceof W))
                throw new TypeError("Cannot call a class as a function");
            }(this, C), de)
              if (de.hasOwnProperty(m)) {
                var _ = de[m], K = _._driver;
                this[m] = K, YA[K] || this.defineDriver(_);
              }
            this._defaultConfig = Xe({}, $e), this._config = Xe({}, this._defaultConfig, E), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch(function() {
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
          }, C.prototype.defineDriver = function(E, m, _) {
            var K = new Q(function(R, W) {
              try {
                var z = E._driver, eA = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
                if (!E._driver)
                  return void W(eA);
                for (var AA = tr.concat("_initStorage"), BA = 0, y = AA.length; BA < y; BA++) {
                  var j = AA[BA];
                  if ((!pA(je, j) || E[j]) && typeof E[j] != "function")
                    return void W(eA);
                }
                (function() {
                  for (var sA = function(_A) {
                    return function() {
                      var re = new Error("Method " + _A + " is not implemented by the current driver"), IA = Q.reject(re);
                      return v(IA, arguments[arguments.length - 1]), IA;
                    };
                  }, bA = 0, MA = je.length; bA < MA; bA++) {
                    var DA = je[bA];
                    E[DA] || (E[DA] = sA(DA));
                  }
                })();
                var $ = function(sA) {
                  YA[z] && console.info("Redefining LocalForage driver: " + z), YA[z] = E, ce[z] = sA, R();
                };
                "_support" in E ? E._support && typeof E._support == "function" ? E._support().then($, W) : $(!!E._support) : $(!0);
              } catch (sA) {
                W(sA);
              }
            });
            return F(K, m, _), K;
          }, C.prototype.driver = function() {
            return this._driver || null;
          }, C.prototype.getDriver = function(E, m, _) {
            var K = YA[E] ? Q.resolve(YA[E]) : Q.reject(new Error("Driver not found."));
            return F(K, m, _), K;
          }, C.prototype.getSerializer = function(E) {
            var m = Q.resolve(pe);
            return F(m, E), m;
          }, C.prototype.ready = function(E) {
            var m = this, _ = m._driverSet.then(function() {
              return m._ready === null && (m._ready = m._initDriver()), m._ready;
            });
            return F(_, E, E), _;
          }, C.prototype.setDriver = function(E, m, _) {
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
              return Q.resolve();
            }) : Q.resolve();
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
                      return K._driverSet = Q.reject(bA), K._driverSet;
                    }();
                  };
                }(R);
              });
            }).catch(function() {
              W();
              var AA = new Error("No available storage method found.");
              return K._driverSet = Q.reject(AA), K._driverSet;
            }), F(this._driverSet, m, _), this._driverSet;
          }, C.prototype.supports = function(E) {
            return !!ce[E];
          }, C.prototype._extend = function(E) {
            Xe(this, E);
          }, C.prototype._getSupportedDrivers = function(E) {
            for (var m = [], _ = 0, K = E.length; _ < K; _++) {
              var R = E[_];
              this.supports(R) && m.push(R);
            }
            return m;
          }, C.prototype._wrapLibraryMethodsWithReady = function() {
            for (var E = 0, m = tr.length; E < m; E++)
              Br(this, tr[E]);
          }, C.prototype.createInstance = function(E) {
            return new C(E);
          }, C;
        }(), yr = new Or();
        u.exports = yr;
      }, { 3: 3 }] }, {}, [4])(4);
    }, 8156: (a) => {
      a.exports = t;
    }, 1337: (a, B, n) => {
      var c = n(7501).default;
      function u() {
        a.exports = u = function() {
          return l;
        }, a.exports.__esModule = !0, a.exports.default = a.exports;
        var l = {}, h = Object.prototype, d = h.hasOwnProperty, p = Object.defineProperty || function(X, M, q) {
          X[M] = q.value;
        }, Q = typeof Symbol == "function" ? Symbol : {}, v = Q.iterator || "@@iterator", F = Q.asyncIterator || "@@asyncIterator", H = Q.toStringTag || "@@toStringTag";
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
          var aA = M && M.prototype instanceof G ? M : G, mA = Object.create(aA.prototype), VA = new EA(uA || []);
          return p(mA, "_invoke", { value: oA(X, q, VA) }), mA;
        }
        function S(X, M, q) {
          try {
            return { type: "normal", arg: X.call(M, q) };
          } catch (uA) {
            return { type: "throw", arg: uA };
          }
        }
        l.wrap = O;
        var N = {};
        function G() {
        }
        function b() {
        }
        function P() {
        }
        var V = {};
        x(V, v, function() {
          return this;
        });
        var k = Object.getPrototypeOf, L = k && k(k(FA([])));
        L && L !== h && d.call(L, v) && (V = L);
        var D = P.prototype = G.prototype = Object.create(V);
        function Y(X) {
          ["next", "throw", "return"].forEach(function(M) {
            x(X, M, function(q) {
              return this._invoke(M, q);
            });
          });
        }
        function iA(X, M) {
          function q(aA, mA, VA, tA) {
            var lA = S(X[aA], X, mA);
            if (lA.type !== "throw") {
              var yA = lA.arg, LA = yA.value;
              return LA && c(LA) == "object" && d.call(LA, "__await") ? M.resolve(LA.__await).then(function(KA) {
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
                var tA = CA(VA, q);
                if (tA) {
                  if (tA === N)
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
              var lA = S(X, M, q);
              if (lA.type === "normal") {
                if (uA = q.done ? "completed" : "suspendedYield", lA.arg === N)
                  continue;
                return { value: lA.arg, done: q.done };
              }
              lA.type === "throw" && (uA = "completed", q.method = "throw", q.arg = lA.arg);
            }
          };
        }
        function CA(X, M) {
          var q = M.method, uA = X.iterator[q];
          if (uA === void 0)
            return M.delegate = null, q === "throw" && X.iterator.return && (M.method = "return", M.arg = void 0, CA(X, M), M.method === "throw") || q !== "return" && (M.method = "throw", M.arg = new TypeError("The iterator does not provide a '" + q + "' method")), N;
          var aA = S(uA, X.iterator, M.arg);
          if (aA.type === "throw")
            return M.method = "throw", M.arg = aA.arg, M.delegate = null, N;
          var mA = aA.arg;
          return mA ? mA.done ? (M[X.resultName] = mA.value, M.next = X.nextLoc, M.method !== "return" && (M.method = "next", M.arg = void 0), M.delegate = null, N) : mA : (M.method = "throw", M.arg = new TypeError("iterator result is not an object"), M.delegate = null, N);
        }
        function HA(X) {
          var M = { tryLoc: X[0] };
          1 in X && (M.catchLoc = X[1]), 2 in X && (M.finallyLoc = X[2], M.afterLoc = X[3]), this.tryEntries.push(M);
        }
        function vA(X) {
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
                  if (d.call(X, q))
                    return aA.value = X[q], aA.done = !1, aA;
                return aA.value = void 0, aA.done = !0, aA;
              };
              return uA.next = uA;
            }
          }
          return { next: dA };
        }
        function dA() {
          return { value: void 0, done: !0 };
        }
        return b.prototype = P, p(D, "constructor", { value: P, configurable: !0 }), p(P, "constructor", { value: b, configurable: !0 }), b.displayName = x(P, H, "GeneratorFunction"), l.isGeneratorFunction = function(X) {
          var M = typeof X == "function" && X.constructor;
          return !!M && (M === b || (M.displayName || M.name) === "GeneratorFunction");
        }, l.mark = function(X) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(X, P) : (X.__proto__ = P, x(X, H, "GeneratorFunction")), X.prototype = Object.create(D), X;
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
        }, Y(D), x(D, H, "Generator"), x(D, v, function() {
          return this;
        }), x(D, "toString", function() {
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
          if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(vA), !X)
            for (var M in this)
              M.charAt(0) === "t" && d.call(this, M) && !isNaN(+M.slice(1)) && (this[M] = void 0);
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
              var VA = d.call(aA, "catchLoc"), tA = d.call(aA, "finallyLoc");
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
            if (uA.tryLoc <= this.prev && d.call(uA, "finallyLoc") && this.prev < uA.finallyLoc) {
              var aA = uA;
              break;
            }
          }
          aA && (X === "break" || X === "continue") && aA.tryLoc <= M && M <= aA.finallyLoc && (aA = null);
          var mA = aA ? aA.completion : {};
          return mA.type = X, mA.arg = M, aA ? (this.method = "next", this.next = aA.finallyLoc, N) : this.complete(mA);
        }, complete: function(X, M) {
          if (X.type === "throw")
            throw X.arg;
          return X.type === "break" || X.type === "continue" ? this.next = X.arg : X.type === "return" ? (this.rval = this.arg = X.arg, this.method = "return", this.next = "end") : X.type === "normal" && M && (this.next = M), N;
        }, finish: function(X) {
          for (var M = this.tryEntries.length - 1; M >= 0; --M) {
            var q = this.tryEntries[M];
            if (q.finallyLoc === X)
              return this.complete(q.completion, q.afterLoc), vA(q), N;
          }
        }, catch: function(X) {
          for (var M = this.tryEntries.length - 1; M >= 0; --M) {
            var q = this.tryEntries[M];
            if (q.tryLoc === X) {
              var uA = q.completion;
              if (uA.type === "throw") {
                var aA = uA.arg;
                vA(q);
              }
              return aA;
            }
          }
          throw new Error("illegal catch attempt");
        }, delegateYield: function(X, M, q) {
          return this.delegate = { iterator: FA(X), resultName: M, nextLoc: q }, this.method === "next" && (this.arg = void 0), N;
        } }, l;
      }
      a.exports = u, a.exports.__esModule = !0, a.exports.default = a.exports;
    }, 7501: (a) => {
      function B(n) {
        return a.exports = B = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(c) {
          return typeof c;
        } : function(c) {
          return c && typeof Symbol == "function" && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c;
        }, a.exports.__esModule = !0, a.exports.default = a.exports, B(n);
      }
      a.exports = B, a.exports.__esModule = !0, a.exports.default = a.exports;
    }, 824: (a, B, n) => {
      var c = n(1337)();
      a.exports = c;
      try {
        regeneratorRuntime = c;
      } catch {
        typeof globalThis == "object" ? globalThis.regeneratorRuntime = c : Function("r", "regeneratorRuntime = r")(c);
      }
    } }, o = {};
    function i(a) {
      var B = o[a];
      if (B !== void 0)
        return B.exports;
      var n = o[a] = { exports: {} };
      return r[a](n, n.exports, i), n.exports;
    }
    i.n = (a) => {
      var B = a && a.__esModule ? () => a.default : () => a;
      return i.d(B, { a: B }), B;
    }, i.d = (a, B) => {
      for (var n in B)
        i.o(B, n) && !i.o(a, n) && Object.defineProperty(a, n, { enumerable: !0, get: B[n] });
    }, i.g = function() {
      if (typeof globalThis == "object")
        return globalThis;
      try {
        return this || new Function("return this")();
      } catch {
        if (typeof window == "object")
          return window;
      }
    }(), i.o = (a, B) => Object.prototype.hasOwnProperty.call(a, B), i.r = (a) => {
      typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(a, "__esModule", { value: !0 });
    };
    var w = {};
    return (() => {
      function a(s) {
        return a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(f) {
          return typeof f;
        } : function(f) {
          return f && typeof Symbol == "function" && f.constructor === Symbol && f !== Symbol.prototype ? "symbol" : typeof f;
        }, a(s);
      }
      function B(s, f, g) {
        return (f = function(U) {
          var I = function(T, J) {
            if (a(T) !== "object" || T === null)
              return T;
            var Z = T[Symbol.toPrimitive];
            if (Z !== void 0) {
              var nA = Z.call(T, "string");
              if (a(nA) !== "object")
                return nA;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(T);
          }(U);
          return a(I) === "symbol" ? I : String(I);
        }(f)) in s ? Object.defineProperty(s, f, { value: g, enumerable: !0, configurable: !0, writable: !0 }) : s[f] = g, s;
      }
      function n(s, f, g, U, I, T, J) {
        try {
          var Z = s[T](J), nA = Z.value;
        } catch (rA) {
          return void g(rA);
        }
        Z.done ? f(nA) : Promise.resolve(nA).then(U, I);
      }
      function c(s) {
        return function() {
          var f = this, g = arguments;
          return new Promise(function(U, I) {
            var T = s.apply(f, g);
            function J(nA) {
              n(T, U, I, J, Z, "next", nA);
            }
            function Z(nA) {
              n(T, U, I, J, Z, "throw", nA);
            }
            J(void 0);
          });
        };
      }
      function u(s, f) {
        (f == null || f > s.length) && (f = s.length);
        for (var g = 0, U = new Array(f); g < f; g++)
          U[g] = s[g];
        return U;
      }
      function l(s, f) {
        if (s) {
          if (typeof s == "string")
            return u(s, f);
          var g = Object.prototype.toString.call(s).slice(8, -1);
          return g === "Object" && s.constructor && (g = s.constructor.name), g === "Map" || g === "Set" ? Array.from(s) : g === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g) ? u(s, f) : void 0;
        }
      }
      function h(s, f) {
        return function(g) {
          if (Array.isArray(g))
            return g;
        }(s) || function(g, U) {
          var I = g == null ? null : typeof Symbol < "u" && g[Symbol.iterator] || g["@@iterator"];
          if (I != null) {
            var T, J, Z, nA, rA = [], QA = !0, hA = !1;
            try {
              if (Z = (I = I.call(g)).next, U === 0) {
                if (Object(I) !== I)
                  return;
                QA = !1;
              } else
                for (; !(QA = (T = Z.call(I)).done) && (rA.push(T.value), rA.length !== U); QA = !0)
                  ;
            } catch (UA) {
              hA = !0, J = UA;
            } finally {
              try {
                if (!QA && I.return != null && (nA = I.return(), Object(nA) !== nA))
                  return;
              } finally {
                if (hA)
                  throw J;
              }
            }
            return rA;
          }
        }(s, f) || l(s, f) || function() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }();
      }
      function d(s, f) {
        if (s == null)
          return {};
        var g, U, I = function(J, Z) {
          if (J == null)
            return {};
          var nA, rA, QA = {}, hA = Object.keys(J);
          for (rA = 0; rA < hA.length; rA++)
            nA = hA[rA], Z.indexOf(nA) >= 0 || (QA[nA] = J[nA]);
          return QA;
        }(s, f);
        if (Object.getOwnPropertySymbols) {
          var T = Object.getOwnPropertySymbols(s);
          for (U = 0; U < T.length; U++)
            g = T[U], f.indexOf(g) >= 0 || Object.prototype.propertyIsEnumerable.call(s, g) && (I[g] = s[g]);
        }
        return I;
      }
      i.r(w), i.d(w, { Dynamic: () => Bu, checkPrefixRelation: () => eo, clone: () => fr, connect: () => Qu, default: () => Fu, get: () => _r, getPathArray: () => ar, useAdd: () => pu, useChange: () => Cu, useDispatch: () => Ot, useModel: () => qa, useNearestStore: () => nr, useObserver: () => vu, useReference: () => Uu }), i(4978), i(9823), i(4434), i(541), i(7772), i(7453), i(8344), i(5843);
      var p = i(824), Q = i.n(p), v = (i(6139), i(5105), i(4321), i(5867), i(8703), i(8156)), F = i.n(v), H = i(927);
      let x = (s = 21) => crypto.getRandomValues(new Uint8Array(s)).reduce((f, g) => f + ((g &= 63) < 36 ? g.toString(36) : g < 62 ? (g - 26).toString(36).toUpperCase() : g > 62 ? "-" : "_"), "");
      const O = function(s, f) {
        return s === f || s != s && f != f;
      }, S = function(s, f) {
        for (var g = s.length; g--; )
          if (O(s[g][0], f))
            return g;
        return -1;
      };
      var N = Array.prototype.splice;
      function G(s) {
        var f = -1, g = s == null ? 0 : s.length;
        for (this.clear(); ++f < g; ) {
          var U = s[f];
          this.set(U[0], U[1]);
        }
      }
      G.prototype.clear = function() {
        this.__data__ = [], this.size = 0;
      }, G.prototype.delete = function(s) {
        var f = this.__data__, g = S(f, s);
        return !(g < 0 || (g == f.length - 1 ? f.pop() : N.call(f, g, 1), --this.size, 0));
      }, G.prototype.get = function(s) {
        var f = this.__data__, g = S(f, s);
        return g < 0 ? void 0 : f[g][1];
      }, G.prototype.has = function(s) {
        return S(this.__data__, s) > -1;
      }, G.prototype.set = function(s, f) {
        var g = this.__data__, U = S(g, s);
        return U < 0 ? (++this.size, g.push([s, f])) : g[U][1] = f, this;
      };
      const b = G, P = typeof at == "object" && at && at.Object === Object && at;
      var V = typeof self == "object" && self && self.Object === Object && self;
      const k = P || V || Function("return this")(), L = k.Symbol;
      var D = Object.prototype, Y = D.hasOwnProperty, iA = D.toString, oA = L ? L.toStringTag : void 0, CA = Object.prototype.toString, HA = L ? L.toStringTag : void 0;
      const vA = function(s) {
        return s == null ? s === void 0 ? "[object Undefined]" : "[object Null]" : HA && HA in Object(s) ? function(f) {
          var g = Y.call(f, oA), U = f[oA];
          try {
            f[oA] = void 0;
            var I = !0;
          } catch {
          }
          var T = iA.call(f);
          return I && (g ? f[oA] = U : delete f[oA]), T;
        }(s) : function(f) {
          return CA.call(f);
        }(s);
      }, EA = function(s) {
        var f = typeof s;
        return s != null && (f == "object" || f == "function");
      }, FA = function(s) {
        if (!EA(s))
          return !1;
        var f = vA(s);
        return f == "[object Function]" || f == "[object GeneratorFunction]" || f == "[object AsyncFunction]" || f == "[object Proxy]";
      }, dA = k["__core-js_shared__"];
      var X, M = (X = /[^.]+$/.exec(dA && dA.keys && dA.keys.IE_PROTO || "")) ? "Symbol(src)_1." + X : "", q = Function.prototype.toString;
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
        return !(!EA(s) || (f = s, M && M in f)) && (FA(s) ? yA : aA).test(uA(s));
        var f;
      }, KA = function(s, f) {
        var g = function(U, I) {
          return U == null ? void 0 : U[I];
        }(s, f);
        return LA(g) ? g : void 0;
      }, WA = KA(k, "Map"), ne = KA(Object, "create");
      var le = Object.prototype.hasOwnProperty, ee = Object.prototype.hasOwnProperty;
      function ge(s) {
        var f = -1, g = s == null ? 0 : s.length;
        for (this.clear(); ++f < g; ) {
          var U = s[f];
          this.set(U[0], U[1]);
        }
      }
      ge.prototype.clear = function() {
        this.__data__ = ne ? ne(null) : {}, this.size = 0;
      }, ge.prototype.delete = function(s) {
        var f = this.has(s) && delete this.__data__[s];
        return this.size -= f ? 1 : 0, f;
      }, ge.prototype.get = function(s) {
        var f = this.__data__;
        if (ne) {
          var g = f[s];
          return g === "__lodash_hash_undefined__" ? void 0 : g;
        }
        return le.call(f, s) ? f[s] : void 0;
      }, ge.prototype.has = function(s) {
        var f = this.__data__;
        return ne ? f[s] !== void 0 : ee.call(f, s);
      }, ge.prototype.set = function(s, f) {
        var g = this.__data__;
        return this.size += this.has(s) ? 0 : 1, g[s] = ne && f === void 0 ? "__lodash_hash_undefined__" : f, this;
      };
      const Fe = ge, se = function(s, f) {
        var g, U, I = s.__data__;
        return ((U = typeof (g = f)) == "string" || U == "number" || U == "symbol" || U == "boolean" ? g !== "__proto__" : g === null) ? I[typeof f == "string" ? "string" : "hash"] : I.map;
      };
      function we(s) {
        var f = -1, g = s == null ? 0 : s.length;
        for (this.clear(); ++f < g; ) {
          var U = s[f];
          this.set(U[0], U[1]);
        }
      }
      we.prototype.clear = function() {
        this.size = 0, this.__data__ = { hash: new Fe(), map: new (WA || b)(), string: new Fe() };
      }, we.prototype.delete = function(s) {
        var f = se(this, s).delete(s);
        return this.size -= f ? 1 : 0, f;
      }, we.prototype.get = function(s) {
        return se(this, s).get(s);
      }, we.prototype.has = function(s) {
        return se(this, s).has(s);
      }, we.prototype.set = function(s, f) {
        var g = se(this, s), U = g.size;
        return g.set(s, f), this.size += g.size == U ? 0 : 1, this;
      };
      const pe = we;
      function oe(s) {
        var f = this.__data__ = new b(s);
        this.size = f.size;
      }
      oe.prototype.clear = function() {
        this.__data__ = new b(), this.size = 0;
      }, oe.prototype.delete = function(s) {
        var f = this.__data__, g = f.delete(s);
        return this.size = f.size, g;
      }, oe.prototype.get = function(s) {
        return this.__data__.get(s);
      }, oe.prototype.has = function(s) {
        return this.__data__.has(s);
      }, oe.prototype.set = function(s, f) {
        var g = this.__data__;
        if (g instanceof b) {
          var U = g.__data__;
          if (!WA || U.length < 199)
            return U.push([s, f]), this.size = ++g.size, this;
          g = this.__data__ = new pe(U);
        }
        return g.set(s, f), this.size = g.size, this;
      };
      const ae = oe, be = function() {
        try {
          var s = KA(Object, "defineProperty");
          return s({}, "", {}), s;
        } catch {
        }
      }(), Ze = function(s, f, g) {
        f == "__proto__" && be ? be(s, f, { configurable: !0, enumerable: !0, value: g, writable: !0 }) : s[f] = g;
      }, Ve = function(s, f, g) {
        (g !== void 0 && !O(s[f], g) || g === void 0 && !(f in s)) && Ze(s, f, g);
      }, ze = function(s, f, g) {
        for (var U = -1, I = Object(s), T = g(s), J = T.length; J--; ) {
          var Z = T[++U];
          if (f(I[Z], Z, I) === !1)
            break;
        }
        return s;
      };
      var qe = A && !A.nodeType && A, cA = qe && !0 && e && !e.nodeType && e, pA = cA && cA.exports === qe ? k.Buffer : void 0, GA = pA ? pA.allocUnsafe : void 0;
      const YA = function(s, f) {
        if (f)
          return s.slice();
        var g = s.length, U = GA ? GA(g) : new s.constructor(g);
        return s.copy(U), U;
      }, ce = k.Uint8Array, de = function(s) {
        var f = new s.constructor(s.byteLength);
        return new ce(f).set(new ce(s)), f;
      }, ke = function(s, f) {
        var g = f ? de(s.buffer) : s.buffer;
        return new s.constructor(g, s.byteOffset, s.length);
      }, je = function(s, f) {
        var g = -1, U = s.length;
        for (f || (f = Array(U)); ++g < U; )
          f[g] = s[g];
        return f;
      };
      var tr = Object.create;
      const $e = /* @__PURE__ */ function() {
        function s() {
        }
        return function(f) {
          if (!EA(f))
            return {};
          if (tr)
            return tr(f);
          s.prototype = f;
          var g = new s();
          return s.prototype = void 0, g;
        };
      }(), Br = function(s, f) {
        return function(g) {
          return s(f(g));
        };
      }, Xe = Br(Object.getPrototypeOf, Object);
      var Or = Object.prototype;
      const yr = function(s) {
        var f = s && s.constructor;
        return s === (typeof f == "function" && f.prototype || Or);
      }, C = function(s) {
        return typeof s.constructor != "function" || yr(s) ? {} : $e(Xe(s));
      }, E = function(s) {
        return s != null && typeof s == "object";
      }, m = function(s) {
        return E(s) && vA(s) == "[object Arguments]";
      };
      var _ = Object.prototype, K = _.hasOwnProperty, R = _.propertyIsEnumerable;
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
        if (!E(s) || vA(s) != "[object Object]")
          return !1;
        var f = Xe(s);
        if (f === null)
          return !0;
        var g = DA.call(f, "constructor") && f.constructor;
        return typeof g == "function" && g instanceof g && MA.call(g) == _A;
      };
      var IA = {};
      IA["[object Float32Array]"] = IA["[object Float64Array]"] = IA["[object Int8Array]"] = IA["[object Int16Array]"] = IA["[object Int32Array]"] = IA["[object Uint8Array]"] = IA["[object Uint8ClampedArray]"] = IA["[object Uint16Array]"] = IA["[object Uint32Array]"] = !0, IA["[object Arguments]"] = IA["[object Array]"] = IA["[object ArrayBuffer]"] = IA["[object Boolean]"] = IA["[object DataView]"] = IA["[object Date]"] = IA["[object Error]"] = IA["[object Function]"] = IA["[object Map]"] = IA["[object Number]"] = IA["[object Object]"] = IA["[object RegExp]"] = IA["[object Set]"] = IA["[object String]"] = IA["[object WeakMap]"] = !1;
      const $A = function(s) {
        return function(f) {
          return s(f);
        };
      };
      var xe = A && !A.nodeType && A, Re = xe && !0 && e && !e.nodeType && e, Dr = Re && Re.exports === xe && P.process;
      const Ce = function() {
        try {
          return Re && Re.require && Re.require("util").types || Dr && Dr.binding && Dr.binding("util");
        } catch {
        }
      }();
      var ua = Ce && Ce.isTypedArray;
      const St = ua ? $A(ua) : function(s) {
        return E(s) && eA(s.length) && !!IA[vA(s)];
      }, Sn = function(s, f) {
        if ((f !== "constructor" || typeof s[f] != "function") && f != "__proto__")
          return s[f];
      };
      var ac = Object.prototype.hasOwnProperty;
      const Ln = function(s, f, g) {
        var U = s[f];
        ac.call(s, f) && O(U, g) && (g !== void 0 || f in s) || Ze(s, f, g);
      }, At = function(s, f, g, U) {
        var I = !g;
        g || (g = {});
        for (var T = -1, J = f.length; ++T < J; ) {
          var Z = f[T], nA = U ? U(g[Z], s[Z], Z, g, s) : void 0;
          nA === void 0 && (nA = s[Z]), I ? Ze(g, Z, nA) : Ln(g, Z, nA);
        }
        return g;
      };
      var ic = /^(?:0|[1-9]\d*)$/;
      const Kn = function(s, f) {
        var g = typeof s;
        return !!(f = f ?? 9007199254740991) && (g == "number" || g != "symbol" && ic.test(s)) && s > -1 && s % 1 == 0 && s < f;
      };
      var sc = Object.prototype.hasOwnProperty;
      const Ba = function(s, f) {
        var g = z(s), U = !g && W(s), I = !g && !U && $(s), T = !g && !U && !I && St(s), J = g || U || I || T, Z = J ? function(QA, hA) {
          for (var UA = -1, TA = Array(QA); ++UA < QA; )
            TA[UA] = hA(UA);
          return TA;
        }(s.length, String) : [], nA = Z.length;
        for (var rA in s)
          !f && !sc.call(s, rA) || J && (rA == "length" || I && (rA == "offset" || rA == "parent") || T && (rA == "buffer" || rA == "byteLength" || rA == "byteOffset") || Kn(rA, nA)) || Z.push(rA);
        return Z;
      };
      var cc = Object.prototype.hasOwnProperty;
      const uc = function(s) {
        if (!EA(s))
          return function(I) {
            var T = [];
            if (I != null)
              for (var J in Object(I))
                T.push(J);
            return T;
          }(s);
        var f = yr(s), g = [];
        for (var U in s)
          (U != "constructor" || !f && cc.call(s, U)) && g.push(U);
        return g;
      }, et = function(s) {
        return AA(s) ? Ba(s, !0) : uc(s);
      }, Bc = function(s, f, g, U, I, T, J) {
        var Z, nA = Sn(s, g), rA = Sn(f, g), QA = J.get(rA);
        if (QA)
          Ve(s, g, QA);
        else {
          var hA = T ? T(nA, rA, g + "", s, f, J) : void 0, UA = hA === void 0;
          if (UA) {
            var TA = z(rA), OA = !TA && $(rA), te = !TA && !OA && St(rA);
            hA = rA, TA || OA || te ? z(nA) ? hA = nA : E(Z = nA) && AA(Z) ? hA = je(nA) : OA ? (UA = !1, hA = YA(rA, !0)) : te ? (UA = !1, hA = ke(rA, !0)) : hA = [] : re(rA) || W(rA) ? (hA = nA, W(nA) ? hA = function(xA) {
              return At(xA, et(xA));
            }(nA) : EA(nA) && !FA(nA) || (hA = C(rA))) : UA = !1;
          }
          UA && (J.set(rA, hA), I(hA, rA, U, T, J), J.delete(rA)), Ve(s, g, hA);
        }
      }, fc = function s(f, g, U, I, T) {
        f !== g && ze(g, function(J, Z) {
          if (T || (T = new ae()), EA(J))
            Bc(f, g, Z, U, s, I, T);
          else {
            var nA = I ? I(Sn(f, Z), J, Z + "", f, g, T) : void 0;
            nA === void 0 && (nA = J), Ve(f, Z, nA);
          }
        }, et);
      }, fa = function(s) {
        return s;
      }, lc = function(s, f, g) {
        switch (g.length) {
          case 0:
            return s.call(f);
          case 1:
            return s.call(f, g[0]);
          case 2:
            return s.call(f, g[0], g[1]);
          case 3:
            return s.call(f, g[0], g[1], g[2]);
        }
        return s.apply(f, g);
      };
      var la = Math.max;
      const gc = be ? function(s, f) {
        return be(s, "toString", { configurable: !0, enumerable: !1, value: (g = f, function() {
          return g;
        }), writable: !0 });
        var g;
      } : fa;
      var wc = Date.now;
      const hc = (ga = gc, On = 0, Dn = 0, function() {
        var s = wc(), f = 16 - (s - Dn);
        if (Dn = s, f > 0) {
          if (++On >= 800)
            return arguments[0];
        } else
          On = 0;
        return ga.apply(void 0, arguments);
      });
      var ga, On, Dn;
      const dc = function(s, f) {
        return hc(function(g, U, I) {
          return U = la(U === void 0 ? g.length - 1 : U, 0), function() {
            for (var T = arguments, J = -1, Z = la(T.length - U, 0), nA = Array(Z); ++J < Z; )
              nA[J] = T[U + J];
            J = -1;
            for (var rA = Array(U + 1); ++J < U; )
              rA[J] = T[J];
            return rA[U] = I(nA), lc(g, this, rA);
          };
        }(s, f, fa), s + "");
      }, Qc = (Tn = function(s, f, g, U) {
        fc(s, f, g, U);
      }, dc(function(s, f) {
        var g = -1, U = f.length, I = U > 1 ? f[U - 1] : void 0, T = U > 2 ? f[2] : void 0;
        for (I = Tn.length > 3 && typeof I == "function" ? (U--, I) : void 0, T && function(Z, nA, rA) {
          if (!EA(rA))
            return !1;
          var QA = typeof nA;
          return !!(QA == "number" ? AA(rA) && Kn(nA, rA.length) : QA == "string" && nA in rA) && O(rA[nA], Z);
        }(f[0], f[1], T) && (I = U < 3 ? void 0 : I, U = 1), s = Object(s); ++g < U; ) {
          var J = f[g];
          J && Tn(s, J, g, I);
        }
        return s;
      }));
      var Tn;
      i(1239), i(7472), i(7680), i(3085);
      var _n = [], rt = "dva_react_hook_store_";
      function nr() {
        for (var s, f = 0; f < _n.length; f += 1) {
          var g = F().useContext(_n[f].context);
          if (g) {
            s = g;
            break;
          }
        }
        return s;
      }
      const Rn = _n;
      function Mn(s) {
        return function(f) {
          if (Array.isArray(f))
            return u(f);
        }(s) || function(f) {
          if (typeof Symbol < "u" && f[Symbol.iterator] != null || f["@@iterator"] != null)
            return Array.from(f);
        }(s) || l(s) || function() {
          throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }();
      }
      i(427), i(7209), i(9236), i(2235), i(3777), i(8081), i(9745), i(27), i(5942), i(5506), i(773), i(3623);
      const pc = Br(Object.keys, Object);
      var Cc = Object.prototype.hasOwnProperty;
      const Nn = function(s) {
        return AA(s) ? Ba(s) : function(f) {
          if (!yr(f))
            return pc(f);
          var g = [];
          for (var U in Object(f))
            Cc.call(f, U) && U != "constructor" && g.push(U);
          return g;
        }(s);
      }, wa = function() {
        return [];
      };
      var vc = Object.prototype.propertyIsEnumerable, ha = Object.getOwnPropertySymbols;
      const Gn = ha ? function(s) {
        return s == null ? [] : (s = Object(s), function(f, g) {
          for (var U = -1, I = f == null ? 0 : f.length, T = 0, J = []; ++U < I; ) {
            var Z = f[U];
            g(Z, U, f) && (J[T++] = Z);
          }
          return J;
        }(ha(s), function(f) {
          return vc.call(s, f);
        }));
      } : wa, da = function(s, f) {
        for (var g = -1, U = f.length, I = s.length; ++g < U; )
          s[I + g] = f[g];
        return s;
      }, Qa = Object.getOwnPropertySymbols ? function(s) {
        for (var f = []; s; )
          da(f, Gn(s)), s = Xe(s);
        return f;
      } : wa, pa = function(s, f, g) {
        var U = f(s);
        return z(s) ? U : da(U, g(s));
      }, Pn = function(s) {
        return pa(s, Nn, Gn);
      }, Uc = function(s) {
        return pa(s, et, Qa);
      }, Vn = KA(k, "DataView"), kn = KA(k, "Promise"), jn = KA(k, "Set"), Xn = KA(k, "WeakMap");
      var Ca = "[object Map]", va = "[object Promise]", Ua = "[object Set]", Fa = "[object WeakMap]", ya = "[object DataView]", Fc = uA(Vn), yc = uA(WA), Ec = uA(kn), mc = uA(jn), bc = uA(Xn), Er = vA;
      (Vn && Er(new Vn(new ArrayBuffer(1))) != ya || WA && Er(new WA()) != Ca || kn && Er(kn.resolve()) != va || jn && Er(new jn()) != Ua || Xn && Er(new Xn()) != Fa) && (Er = function(s) {
        var f = vA(s), g = f == "[object Object]" ? s.constructor : void 0, U = g ? uA(g) : "";
        if (U)
          switch (U) {
            case Fc:
              return ya;
            case yc:
              return Ca;
            case Ec:
              return va;
            case mc:
              return Ua;
            case bc:
              return Fa;
          }
        return f;
      });
      const tt = Er;
      var Hc = Object.prototype.hasOwnProperty, Ic = /\w*$/, Ea = L ? L.prototype : void 0, ma = Ea ? Ea.valueOf : void 0;
      const xc = function(s, f, g) {
        var U, I, T, J = s.constructor;
        switch (f) {
          case "[object ArrayBuffer]":
            return de(s);
          case "[object Boolean]":
          case "[object Date]":
            return new J(+s);
          case "[object DataView]":
            return function(Z, nA) {
              var rA = nA ? de(Z.buffer) : Z.buffer;
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
            return ke(s, g);
          case "[object Map]":
          case "[object Set]":
            return new J();
          case "[object Number]":
          case "[object String]":
            return new J(s);
          case "[object RegExp]":
            return (T = new (I = s).constructor(I.source, Ic.exec(I))).lastIndex = I.lastIndex, T;
          case "[object Symbol]":
            return U = s, ma ? Object(ma.call(U)) : {};
        }
      };
      var ba = Ce && Ce.isMap;
      const Sc = ba ? $A(ba) : function(s) {
        return E(s) && tt(s) == "[object Map]";
      };
      var Ha = Ce && Ce.isSet;
      const Lc = Ha ? $A(Ha) : function(s) {
        return E(s) && tt(s) == "[object Set]";
      };
      var Ia = "[object Arguments]", xa = "[object Function]", Sa = "[object Object]", zA = {};
      zA[Ia] = zA["[object Array]"] = zA["[object ArrayBuffer]"] = zA["[object DataView]"] = zA["[object Boolean]"] = zA["[object Date]"] = zA["[object Float32Array]"] = zA["[object Float64Array]"] = zA["[object Int8Array]"] = zA["[object Int16Array]"] = zA["[object Int32Array]"] = zA["[object Map]"] = zA["[object Number]"] = zA[Sa] = zA["[object RegExp]"] = zA["[object Set]"] = zA["[object String]"] = zA["[object Symbol]"] = zA["[object Uint8Array]"] = zA["[object Uint8ClampedArray]"] = zA["[object Uint16Array]"] = zA["[object Uint32Array]"] = !0, zA["[object Error]"] = zA[xa] = zA["[object WeakMap]"] = !1;
      const Kc = function s(f, g, U, I, T, J) {
        var Z, nA = 1 & g, rA = 2 & g, QA = 4 & g;
        if (U && (Z = T ? U(f, I, T, J) : U(f)), Z !== void 0)
          return Z;
        if (!EA(f))
          return f;
        var hA = z(f);
        if (hA) {
          if (Z = function(xA) {
            var fA = xA.length, SA = new xA.constructor(fA);
            return fA && typeof xA[0] == "string" && Hc.call(xA, "index") && (SA.index = xA.index, SA.input = xA.input), SA;
          }(f), !nA)
            return je(f, Z);
        } else {
          var UA = tt(f), TA = UA == xa || UA == "[object GeneratorFunction]";
          if ($(f))
            return YA(f, nA);
          if (UA == Sa || UA == Ia || TA && !T) {
            if (Z = rA || TA ? {} : C(f), !nA)
              return rA ? function(xA, fA) {
                return At(xA, Qa(xA), fA);
              }(f, function(xA, fA) {
                return xA && At(fA, et(fA), xA);
              }(Z, f)) : function(xA, fA) {
                return At(xA, Gn(xA), fA);
              }(f, function(xA, fA) {
                return xA && At(fA, Nn(fA), xA);
              }(Z, f));
          } else {
            if (!zA[UA])
              return T ? f : {};
            Z = xc(f, UA, nA);
          }
        }
        J || (J = new ae());
        var OA = J.get(f);
        if (OA)
          return OA;
        J.set(f, Z), Lc(f) ? f.forEach(function(xA) {
          Z.add(s(xA, g, U, xA, f, J));
        }) : Sc(f) && f.forEach(function(xA, fA) {
          Z.set(fA, s(xA, g, U, fA, f, J));
        });
        var te = hA ? void 0 : (QA ? rA ? Uc : Pn : rA ? et : Nn)(f);
        return function(xA, fA) {
          for (var SA = -1, Se = xA == null ? 0 : xA.length; ++SA < Se && fA(xA[SA], SA, xA) !== !1; )
            ;
        }(te || f, function(xA, fA) {
          te && (xA = f[fA = xA]), Ln(Z, fA, s(xA, g, U, fA, f, J));
        }), Z;
      }, Oc = function(s, f) {
        return Kc(s, 5, f = typeof f == "function" ? f : void 0);
      }, Dc = function(s) {
        return E(s) && s.nodeType === 1 && !re(s);
      };
      var La = Ce && Ce.isDate;
      const Tc = La ? $A(La) : function(s) {
        return E(s) && vA(s) == "[object Date]";
      };
      function _c(s) {
        return s.constructor.from(s);
      }
      function Rc(s) {
        return s instanceof Blob;
      }
      function Mc(s) {
        return s instanceof Worker || s instanceof Promise || s instanceof RegExp || s instanceof Node || s instanceof Event || a(s) === "symbol" || s instanceof WeakMap || s instanceof WeakSet;
      }
      function fr(s) {
        var f = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
        return Oc(s, function(g) {
          return FA(g) ? f ? null : g : St(g) ? _c(g) : Dc(g) ? f ? null : g : Tc(g) ? g.getTime() : Rc(g) ? g : Mc(g) ? f ? null : g : void 0;
        });
      }
      const Jn = function(s) {
        return typeof s == "symbol" || E(s) && vA(s) == "[object Symbol]";
      };
      var Nc = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Gc = /^\w*$/;
      function Wn(s, f) {
        if (typeof s != "function" || f != null && typeof f != "function")
          throw new TypeError("Expected a function");
        var g = function() {
          var U = arguments, I = f ? f.apply(this, U) : U[0], T = g.cache;
          if (T.has(I))
            return T.get(I);
          var J = s.apply(this, U);
          return g.cache = T.set(I, J) || T, J;
        };
        return g.cache = new (Wn.Cache || pe)(), g;
      }
      Wn.Cache = pe;
      var Pc = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Vc = /\\(\\)?/g;
      const kc = (Yn = Wn(function(s) {
        var f = [];
        return s.charCodeAt(0) === 46 && f.push(""), s.replace(Pc, function(g, U, I, T) {
          f.push(I ? T.replace(Vc, "$1") : U || g);
        }), f;
      }, function(s) {
        return Zn.size === 500 && Zn.clear(), s;
      }), Zn = Yn.cache, Yn);
      var Yn, Zn, Ka = L ? L.prototype : void 0, Oa = Ka ? Ka.toString : void 0;
      const jc = function s(f) {
        if (typeof f == "string")
          return f;
        if (z(f))
          return function(U, I) {
            for (var T = -1, J = U == null ? 0 : U.length, Z = Array(J); ++T < J; )
              Z[T] = I(U[T], T, U);
            return Z;
          }(f, s) + "";
        if (Jn(f))
          return Oa ? Oa.call(f) : "";
        var g = f + "";
        return g == "0" && 1 / f == -1 / 0 ? "-0" : g;
      }, Da = function(s, f) {
        return z(s) ? s : function(g, U) {
          if (z(g))
            return !1;
          var I = typeof g;
          return !(I != "number" && I != "symbol" && I != "boolean" && g != null && !Jn(g)) || Gc.test(g) || !Nc.test(g) || U != null && g in Object(U);
        }(s, f) ? [s] : kc(function(g) {
          return g == null ? "" : jc(g);
        }(s));
      }, Ta = function(s) {
        if (typeof s == "string" || Jn(s))
          return s;
        var f = s + "";
        return f == "0" && 1 / s == -1 / 0 ? "-0" : f;
      }, nt = function(s, f, g) {
        var U = s == null ? void 0 : function(I, T) {
          for (var J = 0, Z = (T = Da(T, I)).length; I != null && J < Z; )
            I = I[Ta(T[J++])];
          return J && J == Z ? I : void 0;
        }(s, f);
        return U === void 0 ? g : U;
      };
      function Lt(s) {
        var f = -1, g = s == null ? 0 : s.length;
        for (this.__data__ = new pe(); ++f < g; )
          this.add(s[f]);
      }
      Lt.prototype.add = Lt.prototype.push = function(s) {
        return this.__data__.set(s, "__lodash_hash_undefined__"), this;
      }, Lt.prototype.has = function(s) {
        return this.__data__.has(s);
      };
      const Xc = Lt, Jc = function(s, f) {
        for (var g = -1, U = s == null ? 0 : s.length; ++g < U; )
          if (f(s[g], g, s))
            return !0;
        return !1;
      }, Wc = function(s, f) {
        return s.has(f);
      }, _a = function(s, f, g, U, I, T) {
        var J = 1 & g, Z = s.length, nA = f.length;
        if (Z != nA && !(J && nA > Z))
          return !1;
        var rA = T.get(s), QA = T.get(f);
        if (rA && QA)
          return rA == f && QA == s;
        var hA = -1, UA = !0, TA = 2 & g ? new Xc() : void 0;
        for (T.set(s, f), T.set(f, s); ++hA < Z; ) {
          var OA = s[hA], te = f[hA];
          if (U)
            var xA = J ? U(te, OA, hA, f, s, T) : U(OA, te, hA, s, f, T);
          if (xA !== void 0) {
            if (xA)
              continue;
            UA = !1;
            break;
          }
          if (TA) {
            if (!Jc(f, function(fA, SA) {
              if (!Wc(TA, SA) && (OA === fA || I(OA, fA, g, U, T)))
                return TA.push(SA);
            })) {
              UA = !1;
              break;
            }
          } else if (OA !== te && !I(OA, te, g, U, T)) {
            UA = !1;
            break;
          }
        }
        return T.delete(s), T.delete(f), UA;
      }, Yc = function(s) {
        var f = -1, g = Array(s.size);
        return s.forEach(function(U, I) {
          g[++f] = [I, U];
        }), g;
      }, Zc = function(s) {
        var f = -1, g = Array(s.size);
        return s.forEach(function(U) {
          g[++f] = U;
        }), g;
      };
      var Ra = L ? L.prototype : void 0, zn = Ra ? Ra.valueOf : void 0, zc = Object.prototype.hasOwnProperty, Ma = "[object Arguments]", Na = "[object Array]", Kt = "[object Object]", Ga = Object.prototype.hasOwnProperty;
      const qc = function(s, f, g, U, I, T) {
        var J = z(s), Z = z(f), nA = J ? Na : tt(s), rA = Z ? Na : tt(f), QA = (nA = nA == Ma ? Kt : nA) == Kt, hA = (rA = rA == Ma ? Kt : rA) == Kt, UA = nA == rA;
        if (UA && $(s)) {
          if (!$(f))
            return !1;
          J = !0, QA = !1;
        }
        if (UA && !QA)
          return T || (T = new ae()), J || St(s) ? _a(s, f, g, U, I, T) : function(fA, SA, Se, ve, De, ye, NA) {
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
                var RA = Yc;
              case "[object Set]":
                var PA = 1 & ve;
                if (RA || (RA = Zc), fA.size != SA.size && !PA)
                  return !1;
                var ie = NA.get(fA);
                if (ie)
                  return ie == SA;
                ve |= 2, NA.set(fA, SA);
                var JA = _a(RA(fA), RA(SA), ve, De, ye, NA);
                return NA.delete(fA), JA;
              case "[object Symbol]":
                if (zn)
                  return zn.call(fA) == zn.call(SA);
            }
            return !1;
          }(s, f, nA, g, U, I, T);
        if (!(1 & g)) {
          var TA = QA && Ga.call(s, "__wrapped__"), OA = hA && Ga.call(f, "__wrapped__");
          if (TA || OA) {
            var te = TA ? s.value() : s, xA = OA ? f.value() : f;
            return T || (T = new ae()), I(te, xA, g, U, T);
          }
        }
        return !!UA && (T || (T = new ae()), function(fA, SA, Se, ve, De, ye) {
          var NA = 1 & Se, RA = Pn(fA), PA = RA.length;
          if (PA != Pn(SA).length && !NA)
            return !1;
          for (var ie = PA; ie--; ) {
            var JA = RA[ie];
            if (!(NA ? JA in SA : zc.call(SA, JA)))
              return !1;
          }
          var Ke = ye.get(fA), Te = ye.get(SA);
          if (Ke && Te)
            return Ke == SA && Te == fA;
          var lr = !0;
          ye.set(fA, SA), ye.set(SA, fA);
          for (var mr = NA; ++ie < PA; ) {
            var Rr = fA[JA = RA[ie]], br = SA[JA];
            if (ve)
              var Hr = NA ? ve(br, Rr, JA, SA, fA, ye) : ve(Rr, br, JA, fA, SA, ye);
            if (!(Hr === void 0 ? Rr === br || De(Rr, br, Se, ve, ye) : Hr)) {
              lr = !1;
              break;
            }
            mr || (mr = JA == "constructor");
          }
          if (lr && !mr) {
            var Mr = fA.constructor, Nr = SA.constructor;
            Mr == Nr || !("constructor" in fA) || !("constructor" in SA) || typeof Mr == "function" && Mr instanceof Mr && typeof Nr == "function" && Nr instanceof Nr || (lr = !1);
          }
          return ye.delete(fA), ye.delete(SA), lr;
        }(s, f, g, U, I, T));
      }, $c = function s(f, g, U, I, T) {
        return f === g || (f == null || g == null || !E(f) && !E(g) ? f != f && g != g : qc(f, g, U, I, s, T));
      }, ot = function(s, f) {
        return $c(s, f);
      }, Au = function(s, f, g) {
        return s == null ? s : function(U, I, T, J) {
          if (!EA(U))
            return U;
          for (var Z = -1, nA = (I = Da(I, U)).length, rA = nA - 1, QA = U; QA != null && ++Z < nA; ) {
            var hA = Ta(I[Z]), UA = T;
            if (hA === "__proto__" || hA === "constructor" || hA === "prototype")
              return U;
            if (Z != rA) {
              var TA = QA[hA];
              (UA = J ? J(TA, hA, QA) : void 0) === void 0 && (UA = EA(TA) ? TA : Kn(I[Z + 1]) ? [] : {});
            }
            Ln(QA, hA, UA), QA = QA[hA];
          }
          return U;
        }(s, f, g);
      };
      function Pa(s, f) {
        var g = Object.keys(s);
        if (Object.getOwnPropertySymbols) {
          var U = Object.getOwnPropertySymbols(s);
          f && (U = U.filter(function(I) {
            return Object.getOwnPropertyDescriptor(s, I).enumerable;
          })), g.push.apply(g, U);
        }
        return g;
      }
      function Va(s) {
        for (var f = 1; f < arguments.length; f++) {
          var g = arguments[f] != null ? arguments[f] : {};
          f % 2 ? Pa(Object(g), !0).forEach(function(U) {
            B(s, U, g[U]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(g)) : Pa(Object(g)).forEach(function(U) {
            Object.defineProperty(s, U, Object.getOwnPropertyDescriptor(g, U));
          });
        }
        return s;
      }
      var or = "/", qn = /* @__PURE__ */ new Map();
      function ar(s) {
        if (qn.has(s))
          return qn.get(s);
        s.endsWith(or) && (s = s.slice(0, -1));
        var f = s.split(or);
        return qn.set(s, f), f;
      }
      function $n(s, f, g) {
        return Ao.apply(this, arguments);
      }
      function Ao() {
        return Ao = c(Q().mark(function s(f, g, U) {
          var I, T;
          return Q().wrap(function(J) {
            for (; ; )
              switch (J.prev = J.next) {
                case 0:
                  return J.next = 2, new Promise(function(Z) {
                    return setTimeout(Z, 10);
                  });
                case 2:
                  if (!f.offline || f.offlineExcludes.includes(g[0])) {
                    J.next = 8;
                    break;
                  }
                  return I = U[g[0]], (T = ru(f.offlineExcludes, g[0])).length > 0 && (I = fr(U[g[0]], !0), T.forEach(function(Z) {
                    I = tu(I, Z);
                  })), J.next = 8, f.offlineInstance.setItem(g[0], I);
                case 8:
                case "end":
                  return J.stop();
              }
          }, s);
        })), Ao.apply(this, arguments);
      }
      function eu(s, f) {
        typeof s == "string" && (s = ar(s));
        for (var g = {}, U = g, I = 0; I < s.length; I++) {
          var T = s[I];
          U[T] = I === s.length - 1 ? f : {}, U = U[T];
        }
        return g;
      }
      function ru(s, f) {
        return s && Array.isArray(s) ? s.filter(function(g) {
          return ar(g)[0] === f;
        }) : [];
      }
      function tu(s, f) {
        typeof f == "string" && (f = ar(f)), f = f.slice(1);
        for (var g = s, U = 0; U < f.length - 1; U++) {
          var I = f[U];
          if (!re(g[I]))
            return s;
          g = g[I];
        }
        return delete g[f[f.length - 1]], s;
      }
      function nu(s, f, g) {
        for (var U = Array.isArray(f) ? f : ar(f), I = U.length, T = s, J = 0; J < I - 1; J++) {
          var Z = U[J];
          re(T[Z]) || (T[Z] = {}), T = T[Z];
        }
        return T[U[I - 1]] = g, s;
      }
      function eo(s, f) {
        if (s.length > f.length)
          return !1;
        for (var g = 0; g < s.length; g++)
          if (s[g] !== f[g])
            return !1;
        return !0;
      }
      function ou(s) {
        return ro.apply(this, arguments);
      }
      function ro() {
        return ro = c(Q().mark(function s(f) {
          var g, U, I, T, J, Z, nA, rA, QA, hA, UA, TA, OA, te, xA, fA, SA, Se, ve, De, ye;
          return Q().wrap(function(NA) {
            for (; ; )
              switch (NA.prev = NA.next) {
                case 0:
                  if (g = this) {
                    NA.next = 3;
                    break;
                  }
                  throw new Error("odd!! there is no store in reducer, please issue it.");
                case 3:
                  if (f.inner !== g.inner) {
                    NA.next = 42;
                    break;
                  }
                  U = g.debounceTimers, I = g.currentStateMap, T = g.previousStateMap, J = g.onChangeOtherProps, Z = Object.keys(g.changeSubscribes), nA = {}, Z.forEach(function(RA) {
                    var PA = g.changeSubscribes[RA];
                    nA[RA] = PA;
                  }), rA = f.name, QA = ar(rA), hA = nt(g.runtime_state, QA), UA = U.has(rA), TA = !1, Z.length > 0 && !ot(hA, f.data) && (UA ? ((OA = T.get(rA)).subkeys = Z, OA.subcalls = nA) : (te = fr(hA), xA = {}, Object.keys(J).forEach(function(RA) {
                    var PA = {};
                    J[RA].forEach(function(ie) {
                      var JA = ar(ie), Ke = nt(g.runtime_state, JA);
                      Au(PA, JA, fr(Ke));
                    }), xA[RA] = PA;
                  }), T.set(rA, { prestorestate: xA, prevalue: te, subkeys: Z, subcalls: nA })), TA = !0), NA.t0 = f.type, NA.next = NA.t0 === "add" ? 20 : NA.t0 === "modify" ? 29 : 37;
                  break;
                case 20:
                  return fA = fr(f.data), T.has(rA) && I.set(rA, fA), SA = eu(QA, fA), g.runtime_state = Va(Va({}, g.runtime_state), SA), NA.next = 26, g.offlineInstance.keys();
                case 26:
                  return NA.sent.includes(QA[0]) || $n(g, QA, g.runtime_state), NA.abrupt("break", 38);
                case 29:
                  if (!ot(hA, f.data)) {
                    NA.next = 31;
                    break;
                  }
                  return NA.abrupt("return");
                case 31:
                  return Se = f.referenced ? f.data : fr(f.data), T.has(rA) && I.set(rA, Se), ve = nu(g.runtime_state, QA, Se), f.cancelUpdate || (De = Object.values(g.REFRESH_CACHE), ye = "".concat(QA.join(or)).concat(or), De.forEach(function(RA) {
                    RA && RA._s.startsWith(ye) && RA.set(x());
                    for (var PA = Mn(QA); PA.length > 0; )
                      RA && PA.join(or) === RA._s && RA.set(x()), PA.pop();
                  })), $n(g, QA, ve), NA.abrupt("break", 38);
                case 37:
                  throw new Error("Unhandled action type: ".concat(f.type));
                case 38:
                  if (TA) {
                    NA.next = 40;
                    break;
                  }
                  return NA.abrupt("return");
                case 40:
                  U.has(rA) && clearTimeout(U.get(rA)), U.set(rA, setTimeout(function() {
                    var RA = T.get(rA), PA = I.get(rA), ie = RA.subkeys, JA = RA.subcalls;
                    for (var Ke in ie.forEach(function(Hr) {
                      var Mr = JA[Hr], Nr = RA.prevalue, yu = RA.prestorestate[Hr];
                      Mr({ actiontype: f.type, name: rA, currentvalue: PA, prevalue: Nr, otherprevalues: yu, currentstore: g.runtime_state });
                    }), g.observerSubscribes) {
                      var Te = ar(Ke), lr = QA.length, mr = Te.length;
                      if (lr === mr && ot(QA, Te) && g.observerSubscribes[Ke](PA, RA, f.type), lr > mr && eo(Te, QA)) {
                        var Rr = nt(g.runtime_state, Te);
                        g.observerSubscribes[Ke](Rr, { path: QA, value: PA, prevalue: RA, actiontype: f.type });
                      }
                      if (lr < mr && eo(QA, Te) && !ot(RA.prevalue, PA)) {
                        var br = Te.filter(function(Hr) {
                          return !QA.includes(Hr);
                        });
                        g.observerSubscribes[Ke](nt(PA, br), nt(RA, br), f.type);
                      }
                    }
                    U.delete(rA), T.delete(rA), I.delete(rA);
                  }, 300));
                case 42:
                case "end":
                  return NA.stop();
              }
          }, s, this);
        })), ro.apply(this, arguments);
      }
      function au(s, f) {
        return to.apply(this, arguments);
      }
      function to() {
        return to = c(Q().mark(function s(f, g) {
          var U;
          return Q().wrap(function(I) {
            for (; ; )
              switch (I.prev = I.next) {
                case 0:
                  if (f.dispatch_queue[0].uid === g) {
                    I.next = 5;
                    break;
                  }
                  return I.next = 3, new Promise(function(T) {
                    return setTimeout(T, 0);
                  });
                case 3:
                  I.next = 0;
                  break;
                case 5:
                  if (!(U = f.dispatch_queue[0].action)) {
                    I.next = 10;
                    break;
                  }
                  return I.next = 9, f.REDUCER(U);
                case 9:
                  f.dispatch_queue.shift();
                case 10:
                case "end":
                  return I.stop();
              }
          }, s);
        })), to.apply(this, arguments);
      }
      function iu(s) {
        return no.apply(this, arguments);
      }
      function no() {
        return no = c(Q().mark(function s(f) {
          var g, U;
          return Q().wrap(function(I) {
            for (; ; )
              switch (I.prev = I.next) {
                case 0:
                  if (g = this, U = x(), g) {
                    I.next = 4;
                    break;
                  }
                  throw new Error("odd!! there is no store in dispatch of utils, please issue it.");
                case 4:
                  if (f) {
                    I.next = 6;
                    break;
                  }
                  throw new Error("Actions must be plain objects.");
                case 6:
                  if (f.type !== void 0) {
                    I.next = 8;
                    break;
                  }
                  throw new Error('Actions may not have an undefined "type" property.');
                case 8:
                  return g.dispatch_queue.push({ uid: U, action: f }), I.next = 11, au(g, U);
                case 11:
                case "end":
                  return I.stop();
              }
          }, s, this);
        })), no.apply(this, arguments);
      }
      function su(s) {
        return oo.apply(this, arguments);
      }
      function oo() {
        return oo = c(Q().mark(function s(f) {
          var g, U, I, T;
          return Q().wrap(function(J) {
            for (; ; )
              switch (J.prev = J.next) {
                case 0:
                  if (g = this, !f || a(f) != "object" || Array.isArray(f)) {
                    J.next = 13;
                    break;
                  }
                  if (!((U = Object.keys(f)).length > 0)) {
                    J.next = 13;
                    break;
                  }
                  I = 0;
                case 5:
                  if (!(I < U.length)) {
                    J.next = 13;
                    break;
                  }
                  if (T = U[I], g.runtime_state.hasOwnProperty(T)) {
                    J.next = 10;
                    break;
                  }
                  return J.next = 10, g.dispatch({ type: "add", name: T, initdate: f[T], inner: g.inner });
                case 10:
                  I++, J.next = 5;
                  break;
                case 13:
                case "end":
                  return J.stop();
              }
          }, s, this);
        })), oo.apply(this, arguments);
      }
      function cu(s, f, g) {
        return ao.apply(this, arguments);
      }
      function ao() {
        return ao = c(Q().mark(function s(f, g, U) {
          return Q().wrap(function(I) {
            for (; ; )
              switch (I.prev = I.next) {
                case 0:
                  if (typeof f == "function") {
                    I.next = 2;
                    break;
                  }
                  throw new Error("Expected the reducer to be a function.");
                case 2:
                  if (!U.REDUCER && (U.REDUCER = f.bind(U)), !U.dispatch && (U.dispatch = iu.bind(U)), g === void 0) {
                    I.next = 7;
                    break;
                  }
                  return I.next = 7, su.call(U, g);
                case 7:
                  return I.abrupt("return", [U.runtime_state, U.dispatch]);
                case 8:
                case "end":
                  return I.stop();
              }
          }, s);
        })), ao.apply(this, arguments);
      }
      i(8629), i(286);
      var uu = ["models", "renderBefore", "component"];
      function ka(s, f) {
        return io.apply(this, arguments);
      }
      function io() {
        return io = c(Q().mark(function s(f, g) {
          var U;
          return Q().wrap(function(I) {
            for (; ; )
              switch (I.prev = I.next) {
                case 0:
                  if (Object.prototype.toString.call(f) === "[object Object]") {
                    I.next = 2;
                    break;
                  }
                  throw new Error("your model must be an object");
                case 2:
                  if (f.hasOwnProperty("name")) {
                    I.next = 4;
                    break;
                  }
                  throw new Error("please name your model !!!!");
                case 4:
                  if (typeof f.name == "string") {
                    I.next = 6;
                    break;
                  }
                  throw new Error("please make sure your model name is a string");
                case 6:
                  if (f.name.length !== 0) {
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
                  if (g.MODELS[f.name] || (g.MODELS[f.name] = f), g.runtime_state.hasOwnProperty(f.name) && !g.noCached) {
                    I.next = 17;
                    break;
                  }
                  return U = {}, f.hasOwnProperty("init") && (U = f.init), typeof f.init == "function" && (U = f.init()), I.next = 17, g.dispatch({ type: "add", name: f.name, data: U, inner: g.inner });
                case 17:
                case "end":
                  return I.stop();
              }
          }, s);
        })), io.apply(this, arguments);
      }
      const Bu = function(s) {
        var f = nr();
        if (!f)
          throw new Error("odd!! there is no store in dynamic, please issue it.");
        var g = h(F().useState({ loaded: !1 }), 2), U = g[0], I = g[1], T = s.models, J = s.renderBefore, Z = s.component, nA = d(s, uu), rA = F().lazy(Z);
        return F().useEffect(function() {
          J == null || J();
          var QA = typeof T == "function" ? [T()] : Array.isArray(T) ? T.map(function(hA) {
            return Promise.resolve(hA);
          }) : [];
          Promise.all(QA).then(function(hA) {
            hA.forEach(function(UA) {
              var TA = UA.default || UA;
              (Array.isArray(TA) ? TA : [TA]).forEach(function(OA) {
                return ka(OA, f);
              });
            }), I({ loaded: !0 });
          });
        }, []), U.loaded ? F().createElement(F().Suspense, { fallback: F().createElement("div", null, "Loading...") }, F().createElement(rA, nA)) : null;
      };
      var fu = ["isolated", "uniqueKey", "models", "offlineConfig", "noCached", "children"];
      function ja(s, f) {
        var g = Object.keys(s);
        if (Object.getOwnPropertySymbols) {
          var U = Object.getOwnPropertySymbols(s);
          f && (U = U.filter(function(I) {
            return Object.getOwnPropertyDescriptor(s, I).enumerable;
          })), g.push.apply(g, U);
        }
        return g;
      }
      function lu(s) {
        for (var f = 1; f < arguments.length; f++) {
          var g = arguments[f] != null ? arguments[f] : {};
          f % 2 ? ja(Object(g), !0).forEach(function(U) {
            B(s, U, g[U]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(g)) : ja(Object(g)).forEach(function(U) {
            Object.defineProperty(s, U, Object.getOwnPropertyDescriptor(g, U));
          });
        }
        return s;
      }
      i(9399), i(5155);
      var gu = ["type"];
      function Xa(s, f) {
        var g = Object.keys(s);
        if (Object.getOwnPropertySymbols) {
          var U = Object.getOwnPropertySymbols(s);
          f && (U = U.filter(function(I) {
            return Object.getOwnPropertyDescriptor(s, I).enumerable;
          })), g.push.apply(g, U);
        }
        return g;
      }
      function Tr(s) {
        for (var f = 1; f < arguments.length; f++) {
          var g = arguments[f] != null ? arguments[f] : {};
          f % 2 ? Xa(Object(g), !0).forEach(function(U) {
            B(s, U, g[U]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(g)) : Xa(Object(g)).forEach(function(U) {
            Object.defineProperty(s, U, Object.getOwnPropertyDescriptor(g, U));
          });
        }
        return s;
      }
      function Ot(s) {
        if (Object.prototype.toString.call(s) !== "[object Object]")
          throw new Error("action in useDispatch must be an Object");
        if (!s.hasOwnProperty("type"))
          throw new Error('action in useDispatch must have a property named "type"');
        if (typeof s.type != "string")
          throw new Error("your must be a string");
        if (s.type.indexOf(or) === -1)
          throw new Error("you must do some effects in your type");
        var f = s.store || nr();
        if (!f)
          throw new Error("odd!! there is no store in useDispatch, please issue it.");
        s.store = f;
        var g = s.type, U = d(s, gu);
        if ((g = g.split(or))[0].length === 0)
          throw new Error("can not resolve the empty model name");
        var I = f.MODELS[g[0]];
        if (!I)
          throw new Error("can not find the Model named ".concat(g[0]));
        if (!I.hasOwnProperty("effects"))
          throw new Error("can not find the effects in the Model ".concat(g[0]));
        var T = I.effects;
        if (Object.prototype.toString.call(T) !== "[object Object]")
          throw new Error("effects must be an Object");
        var J = T[g[1]];
        if (typeof J != "function")
          throw new Error("the effect named ".concat(g[1], " must be a function"));
        var Z = I.callbacks;
        return function() {
          for (var nA, rA = fr(f.runtime_state[g[0]]), QA = arguments.length, hA = new Array(QA), UA = 0; UA < QA; UA++)
            hA[UA] = arguments[UA];
          return J.apply(void 0, hA.concat([Tr(Tr({}, U), {}, { state: rA, setState: (nA = c(Q().mark(function TA(OA) {
            var te, xA, fA, SA, Se, ve = arguments;
            return Q().wrap(function(De) {
              for (; ; )
                switch (De.prev = De.next) {
                  case 0:
                    return te = ve.length > 1 && ve[1] !== void 0 ? ve[1] : {}, xA = te.cancelUpdate, fA = te.callbacks, SA = te.referenced, De.next = 3, f.dispatch({ type: "modify", name: g[0], inner: f.inner, data: OA, cancelUpdate: xA, referenced: SA });
                  case 3:
                    fA && (Se = rA, Za(Z, fA, { name: g[0], value: Se }, f));
                  case 4:
                  case "end":
                    return De.stop();
                }
            }, TA);
          })), function(TA) {
            return nA.apply(this, arguments);
          }), select: function(TA, OA) {
            return _r(TA, f, OA);
          }, reference: function(TA) {
            var OA = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            return _r(TA, f, Tr(Tr({}, OA), {}, { referenced: !0 }));
          }, getDispatch: function(TA) {
            return Ot(Tr(Tr({}, TA), {}, { store: f }));
          }, offlineInstance: f.offlineInstance })]));
        };
      }
      function Ja(s, f) {
        var g = Object.keys(s);
        if (Object.getOwnPropertySymbols) {
          var U = Object.getOwnPropertySymbols(s);
          f && (U = U.filter(function(I) {
            return Object.getOwnPropertyDescriptor(s, I).enumerable;
          })), g.push.apply(g, U);
        }
        return g;
      }
      function Wa(s) {
        for (var f = 1; f < arguments.length; f++) {
          var g = arguments[f] != null ? arguments[f] : {};
          f % 2 ? Ja(Object(g), !0).forEach(function(U) {
            B(s, U, g[U]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(g)) : Ja(Object(g)).forEach(function(U) {
            Object.defineProperty(s, U, Object.getOwnPropertyDescriptor(g, U));
          });
        }
        return s;
      }
      function _r(s, f) {
        var g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { autoCreate: !1, defaultValue: void 0, referenced: !1 };
        hu(f), du(s);
        var U = ar(s), I = Ya(U, f, g);
        return [I, wu(U, f, I, g.referenced), function() {
          return Ya(U, f, g);
        }];
      }
      function Ya(s, f, g) {
        var U = function(I, T, J) {
          if (!I || !I.length)
            throw new Error("Property names array cannot be empty.");
          var Z = !1, nA = I.reduce(function(rA, QA, hA) {
            var UA, TA, OA = rA[QA];
            if (I.length > 1 && hA < I.length - 1 && !re(OA)) {
              if (!J.autoCreate)
                throw new Error("".concat(QA, " is not an object, so the property['").concat(I[hA + 1], "'] cannot be reached. Please check your code."));
              Z = !0, OA = rA[QA] = {};
            }
            return hA === I.length - 1 && (J.autoCreate && !OA && (OA = rA[QA] = J.defaultValue), J.resetField && (UA = OA, TA = J.resetValue, Object.prototype.toString.call(UA) !== Object.prototype.toString.call(TA)) && (Z = !0, OA = rA[QA] = J.resetValue), Z && $n(T, I, T.runtime_state)), OA;
          }, T.runtime_state);
          return J.referenced ? nA : fr(nA);
        }(s, f, g);
        return U;
      }
      function wu(s, f, g, U) {
        return function() {
          var I = c(Q().mark(function T(J) {
            var Z, nA, rA, QA, hA = arguments;
            return Q().wrap(function(UA) {
              for (; ; )
                switch (UA.prev = UA.next) {
                  case 0:
                    return Z = hA.length > 1 && hA[1] !== void 0 ? hA[1] : {}, nA = Z.cancelUpdate, rA = Z.callbacks, UA.next = 3, f.dispatch({ type: "modify", name: s.join(or), data: J, inner: f.inner, cancelUpdate: nA, referenced: U });
                  case 3:
                    return QA = UA.sent, rA && f.MODELS[s[0]] && Za(f.MODELS[s[0]].callbacks, rA, { name: s.join(or), value: { pre: g, current: J } }, f), UA.abrupt("return", QA);
                  case 6:
                  case "end":
                    return UA.stop();
                }
            }, T);
          }));
          return function(T) {
            return I.apply(this, arguments);
          };
        }();
      }
      function Za(s, f, g, U) {
        (function(T) {
          Object.prototype.toString.call(T) !== "[object Object]" && console.error("the callbacks of model must be an Object type");
        })(s);
        var I = function(T) {
          return _r(T, U);
        };
        typeof f == "string" ? za(s, f, g, I, U) : Array.isArray(f) && f.forEach(function(T) {
          return za(s, T, g, I, U);
        });
      }
      function za(s, f, g, U, I) {
        typeof s[f] == "function" ? s[f]({ info: g, select: U, getDispatch: function(T) {
          return Ot(Wa(Wa({}, T), {}, { store: I }));
        } }) : console.error("Callback ".concat(f, " is not a function."));
      }
      function hu(s) {
        if (!s)
          throw new Error("odd!! there is no store in utils, please issue it.");
      }
      function du(s) {
        if (typeof s != "string")
          throw new Error("name must be a string");
      }
      function so() {
        return so = Object.assign ? Object.assign.bind() : function(s) {
          for (var f = 1; f < arguments.length; f++) {
            var g = arguments[f];
            for (var U in g)
              Object.prototype.hasOwnProperty.call(g, U) && (s[U] = g[U]);
          }
          return s;
        }, so.apply(this, arguments);
      }
      function qa(s, f, g, U) {
        var I = g || nr();
        if (!I)
          throw new Error("odd!! there is no store in useModel, please issue it.");
        if (typeof s != "string")
          throw new Error("useModel's argument must be a string");
        var T = F().useRef(), J = F().useState(x())[1];
        F().useEffect(function() {
          var hA = x();
          return !f && (I.REFRESH_CACHE[hA] = { _s: s, set: J }), function() {
            !f && delete I.REFRESH_CACHE[hA];
          };
        }, [s, I, f]);
        var Z = h(_r(s, I, U), 3), nA = Z[0], rA = Z[1], QA = Z[2];
        return ot(T.current, nA) || (T.current = nA), [T.current, rA, QA];
      }
      const Qu = function(s, f) {
        return function(g) {
          return function(U) {
            var I, T = h(typeof s == "string" && s.length !== 0 ? qa(s) : [{ value: null }, null], 2), J = T[0].value, Z = T[1], nA = typeof f.name == "string" && f.name.length !== 0 ? Ot(f.action) : null;
            return F().createElement(g, so({}, (B(I = {}, Z ? "".concat(s, "State") : "UselessState".concat(x()), J), B(I, Z ? "set".concat(s) : "UselessSet".concat(x()), Z), B(I, nA ? "".concat(f.name) : "UselessDispatch".concat(x()), nA), I), U));
          };
        };
      };
      function pu(s, f, g) {
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
        var T = f;
        typeof f == "function" && (T = f()), F().useEffect(function() {
          I({ type: "add", name: s, initdate: T, inner: U.inner });
        }, g ? [] : void 0);
      }
      function Cu(s) {
        var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, U = g.store, I = g.others, T = I === void 0 ? [] : I;
        if (!(U = U || nr()))
          throw new Error("odd!! there is no store in useModel, please issue it.");
        if (typeof s != "function")
          throw new Error("useChange's argument must be a function");
        F().useEffect(function() {
          var J = x();
          return U.changeSubscribes[J] = s, T.length > 0 && (U.onChangeOtherProps[J] = T), function() {
            delete U.changeSubscribes[J], T.length > 0 && delete U.onChangeOtherProps[J];
          };
        }, [U].concat(Mn(f)));
      }
      function vu(s, f) {
        var g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], U = arguments.length > 3 ? arguments[3] : void 0, I = U || nr();
        if (!I)
          throw new Error("odd!! there is no store in useModel, please issue it.");
        if (typeof f != "function")
          throw new Error("useChange's argument must be a function");
        F().useEffect(function() {
          return I.observerSubscribes[s] = f, function() {
            delete I.observerSubscribes[s];
          };
        }, [s, I].concat(Mn(g)));
      }
      function Uu(s, f) {
        var g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, U = g.store || nr();
        if (!U)
          throw new Error("odd!! there is no store in useReference, please issue it.");
        if (typeof s != "string")
          throw new Error("useReference's name must be string");
        var I = F().useState(x())[1];
        F().useEffect(function() {
          var rA = x();
          return !f && (U.REFRESH_CACHE[rA] = { _s: s, set: I }), function() {
            !f && delete U.REFRESH_CACHE[rA];
          };
        }, [s, U, f]), g.referenced = !0;
        var T = _r(s, U, g), J = h(T, 2), Z = J[0], nA = J[1];
        return [Z, nA];
      }
      const Fu = function(s) {
        var f = s.isolated, g = f !== void 0 && f, U = s.uniqueKey, I = s.models, T = s.offlineConfig, J = T === void 0 ? {} : T, Z = s.noCached, nA = s.children, rA = d(s, fu), QA = h(F().useState({ com: null, store: null }), 2), hA = QA[0], UA = QA[1];
        return F().useEffect(function() {
          var TA = x(), OA = U && U.toString() || "default", te = "".concat(OA, "_").concat(TA), xA = h(function(NA, RA, PA) {
            var ie, JA, Ke = F().createContext(), Te = (ie = NA, (JA = window["".concat(rt).concat(ie)]) && delete window["".concat(rt).concat(ie)], JA);
            return Te || (Te = { offline: !1, offlineInstance: void 0, offlineExcludes: [], dispatch: void 0, inner: Symbol(), MODELS: {}, REFRESH_CACHE: {}, REDUCER: void 0, isDispatching: { dispatching: !1, name: null }, runtime_state: {}, dispatch_queue: [], changeSubscribes: {}, observerSubscribes: {}, debounceTimers: /* @__PURE__ */ new Map(), previousStateMap: /* @__PURE__ */ new Map(), currentStateMap: /* @__PURE__ */ new Map(), onChangeOtherProps: {} }), PA || Rn.push({ uid: RA, context: Ke }), [Te, Ke];
          }(OA, te, g), 2), fA = xA[0], SA = xA[1];
          fA.offline = J.offline === !0, fA.offlineExcludes = J.excludes || [];
          var Se = J.customizer;
          fA.offlineInstance = H.createInstance({ name: OA });
          var ve = function() {
            var NA = c(Q().mark(function RA() {
              var PA, ie;
              return Q().wrap(function(JA) {
                for (; ; )
                  switch (JA.prev = JA.next) {
                    case 0:
                      return JA.next = 2, cu(ou, lu({}, rA), fA);
                    case 2:
                      if (!Array.isArray(I)) {
                        JA.next = 11;
                        break;
                      }
                      PA = 0;
                    case 4:
                      if (!(PA < I.length)) {
                        JA.next = 11;
                        break;
                      }
                      return ie = I[PA], JA.next = 8, ka(ie, fA);
                    case 8:
                      PA++, JA.next = 4;
                      break;
                    case 11:
                    case "end":
                      return JA.stop();
                  }
              }, RA);
            }));
            return function() {
              return NA.apply(this, arguments);
            };
          }(), De = function() {
            var NA = c(Q().mark(function RA() {
              return Q().wrap(function(PA) {
                for (; ; )
                  switch (PA.prev = PA.next) {
                    case 0:
                      return PA.next = 2, ve();
                    case 2:
                      fA.offlineInstance.iterate(function(ie, JA) {
                        var Ke = Qc(fA.runtime_state[JA] || {}, ie, Se);
                        fA.runtime_state[JA] = Ke;
                      }).then(function() {
                        window["".concat(rt).concat(OA)] = fA, UA({ com: SA.Provider, store: fA });
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
            var NA = c(Q().mark(function RA() {
              return Q().wrap(function(PA) {
                for (; ; )
                  switch (PA.prev = PA.next) {
                    case 0:
                      return PA.next = 2, ve();
                    case 2:
                      window["".concat(rt).concat(OA)] = fA, UA({ com: SA.Provider, store: fA });
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
            var NA = Rn.findIndex(function(RA) {
              return RA.uid === te;
            });
            NA !== -1 && Rn.splice(NA, 1), Z === !0 && delete window["".concat(rt).concat(OA)], H.dropInstance({ name: OA }), UA({ com: null, store: null });
          };
        }, [U]), hA.com && console.log("Provider for ".concat(U || "default", " is rendering")), !!hA.com && F().createElement(hA.com, { value: hA.store }, nA);
      };
    })(), w;
  })());
})(un, un.exports);
var jA = un.exports;
const Su = /* @__PURE__ */ bu(jA);
function Lu(e) {
  const { children: A, scale: t } = e, r = Ht(), o = Eu(null), i = zr(`easy-drag-drop-root-${gr()}`)[0];
  return We(() => {
    const w = jA.get("dragModel/root", r)[1];
    w(i);
    function a() {
      const n = jA.get("dragModel/scale", r)[1], c = jA.get("dragModel/offset", r)[1];
      if (!o.current)
        return;
      const u = o.current.getBoundingClientRect(), { left: l, top: h } = u;
      c({ x: l, y: h }), typeof t == "object" && n(t), typeof t == "function" && n(t());
    }
    const B = new ResizeObserver(a);
    return B.observe(o.current), window.addEventListener("resize", a), () => {
      B.disconnect(), window.removeEventListener("resize", a);
    };
  }, [i, r, t]), /* @__PURE__ */ nn.jsx(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        position: "relative"
      },
      id: i,
      ref: o,
      children: A
    }
  );
}
function ri(e, A) {
  if (!e || !A)
    return !1;
  let [t, r] = e, o = !1;
  for (let i = 0, w = A.length - 1; i < A.length; w = i++) {
    let [a, B] = A[i], [n, c] = A[w];
    B > r != c > r && t < (n - a) * (r - B) / (c - B) + a && (o = !o);
  }
  return o;
}
const rs = (e, A) => [...e.classList].filter((t) => t.startsWith(A))[0], Be = {
  STARTDRAG: "STARTDRAG",
  DRAGGING: "DRAGGING",
  DROP: "DROP",
  ONSTART: "ONSTART",
  ONENTER: "ONENTER",
  ONHOVER: "ONHOVER",
  ONLEAVE: "ONLEAVE",
  ONDROP: "ONDROP",
  ONEND: "ONEND"
}, Ku = {
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
      const o = r.key, i = t("dragModel/root")[0], [w, a] = t(
        `dragModel/drags/${o}/previewAdded`
      ), B = t(`dragModel/drags/${o}/state`)[1], n = t("dragModel/drops")[0], u = Object.keys(n).filter(
        (l) => n[l] && document.querySelector(`.easy-drop-${l}`) !== document.querySelector(`.easy-drag-${o}`)
      ).filter((l) => {
        const h = n[l].acceptKeys || [];
        return h.includes("*") ? !0 : h.includes(o);
      });
      if (r && r.operationType === Be.STARTDRAG && !w) {
        const l = document.createElement("img");
        l.classList.add(r.class), l.src = r.src, Object.keys(r.style).forEach((h) => {
          l.style[h] = r.style[h];
        }), document.querySelector(`#${i}`).appendChild(l), await a(!0), u.forEach((h) => {
          const d = t(`dragModel/drops/${h}/state`)[1];
          d(`${Be.ONSTART}+${o}+${gr()}`), B(`${Be.ONSTART}+${h}`);
        });
      }
      if (r && r.operationType === Be.DRAGGING && w) {
        const l = document.querySelector(`.${r.class}`);
        Object.keys(r.style).forEach((p) => {
          l.style[p] = r.style[p];
        });
        const h = r.x, d = r.y;
        for (let p of u) {
          const Q = n[p], v = ri([h, d], Q.polygon), [F, H] = t(
            `dragModel/drops/${p}/state`
          );
          v ? F.includes(Be.ONSTART) || F.includes(Be.ONLEAVE) ? (H(`${Be.ONENTER}+${o}+${gr()}`), B(`${Be.ONENTER}+${p}`)) : (H(`${Be.ONHOVER}+${o}+${gr()}`), B(`${Be.ONHOVER}+${gr()}+${p}`)) : F.includes(Be.ONHOVER) && (H(`${Be.ONLEAVE}+${o}+${gr()}`), B(`${Be.ONLEAVE}+${p}`));
        }
      }
      if (r && r.operationType === Be.DROP) {
        let l = document.querySelector(`.${r.class}`);
        if (!l) {
          let p = 0;
          for (; !l && !(p > 10); )
            p++, l = document.querySelector(`.${r.class}`), await new Promise((Q) => setTimeout(Q, 100));
        }
        l == null || l.remove(), await a(!1);
        const h = r.x, d = r.y;
        for (let p of u) {
          const Q = n[p], v = ri([h, d], Q.polygon), F = t(`dragModel/drops/${p}/state`)[1];
          v ? (F(`${Be.ONDROP}+${o}+${gr()}`), B(`${Be.ONDROP}+${p}`)) : (F(`${Be.ONEND}+${o}+${gr()}`), B(`${Be.ONEND}+${p}`));
        }
      }
    }
  }
}, Lo = {}, Ou = "drag_drop_store", Ht = () => {
  let e;
  const A = Object.values(Lo);
  for (let t = 0; t < A.length; t += 1) {
    const r = $a(A[t]) ? $a(A[t])() : null;
    if (r) {
      e = r;
      break;
    }
  }
  return e;
};
function sh(e) {
  const { uniqueKey: A = Ou, scale: t, children: r } = e, [o, i] = zr(null);
  return We(() => {
    const w = mu();
    return Lo[A] = w, i(w.Provider), () => {
      delete Lo[A];
    };
  }, [A]), /* @__PURE__ */ nn.jsx(
    Su,
    {
      noCached: !0,
      isolated: !0,
      uniqueKey: A,
      models: [Ku],
      children: o && /* @__PURE__ */ nn.jsx(
        o,
        {
          value: () => window[`dva_react_hook_store_${A}`],
          children: /* @__PURE__ */ nn.jsx(Lu, { scale: t, children: r })
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
var Ko = function(e, A) {
  return Ko = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var o in r)
      Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
  }, Ko(e, A);
};
function Ye(e, A) {
  if (typeof A != "function" && A !== null)
    throw new TypeError("Class extends value " + String(A) + " is not a constructor or null");
  Ko(e, A);
  function t() {
    this.constructor = e;
  }
  e.prototype = A === null ? Object.create(A) : (t.prototype = A.prototype, new t());
}
var Oo = function() {
  return Oo = Object.assign || function(A) {
    for (var t, r = 1, o = arguments.length; r < o; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (A[i] = t[i]);
    }
    return A;
  }, Oo.apply(this, arguments);
};
function Le(e, A, t, r) {
  function o(i) {
    return i instanceof t ? i : new t(function(w) {
      w(i);
    });
  }
  return new (t || (t = Promise))(function(i, w) {
    function a(c) {
      try {
        n(r.next(c));
      } catch (u) {
        w(u);
      }
    }
    function B(c) {
      try {
        n(r.throw(c));
      } catch (u) {
        w(u);
      }
    }
    function n(c) {
      c.done ? i(c.value) : o(c.value).then(a, B);
    }
    n((r = r.apply(e, A || [])).next());
  });
}
function He(e, A) {
  var t = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, r, o, i, w;
  return w = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (w[Symbol.iterator] = function() {
    return this;
  }), w;
  function a(n) {
    return function(c) {
      return B([n, c]);
    };
  }
  function B(n) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (r = 1, o && (i = n[0] & 2 ? o.return : n[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, n[1])).done)
          return i;
        switch (o = 0, i && (n = [n[0] & 2, i.value]), n[0]) {
          case 0:
          case 1:
            i = n;
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
            if (i = t.trys, !(i = i.length > 0 && i[i.length - 1]) && (n[0] === 6 || n[0] === 2)) {
              t = 0;
              continue;
            }
            if (n[0] === 3 && (!i || n[1] > i[0] && n[1] < i[3])) {
              t.label = n[1];
              break;
            }
            if (n[0] === 6 && t.label < i[1]) {
              t.label = i[1], i = n;
              break;
            }
            if (i && t.label < i[2]) {
              t.label = i[2], t.ops.push(n);
              break;
            }
            i[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        n = A.call(e, t);
      } catch (c) {
        n = [6, c], o = 0;
      } finally {
        r = i = 0;
      }
    if (n[0] & 5)
      throw n[1];
    return { value: n[0] ? n[1] : void 0, done: !0 };
  }
}
function Dt(e, A, t) {
  if (t || arguments.length === 2)
    for (var r = 0, o = A.length, i; r < o; r++)
      (i || !(r in A)) && (i || (i = Array.prototype.slice.call(A, 0, r)), i[r] = A[r]);
  return e.concat(i || A);
}
var ur = (
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
), vn = function(e, A) {
  return ur.fromClientRect(e, A.getBoundingClientRect());
}, Du = function(e) {
  var A = e.body, t = e.documentElement;
  if (!A || !t)
    throw new Error("Unable to get document size");
  var r = Math.max(Math.max(A.scrollWidth, t.scrollWidth), Math.max(A.offsetWidth, t.offsetWidth), Math.max(A.clientWidth, t.clientWidth)), o = Math.max(Math.max(A.scrollHeight, t.scrollHeight), Math.max(A.offsetHeight, t.offsetHeight), Math.max(A.clientHeight, t.clientHeight));
  return new ur(0, 0, r, o);
}, Un = function(e) {
  for (var A = [], t = 0, r = e.length; t < r; ) {
    var o = e.charCodeAt(t++);
    if (o >= 55296 && o <= 56319 && t < r) {
      var i = e.charCodeAt(t++);
      (i & 64512) === 56320 ? A.push(((o & 1023) << 10) + (i & 1023) + 65536) : (A.push(o), t--);
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
  for (var r = [], o = -1, i = ""; ++o < t; ) {
    var w = e[o];
    w <= 65535 ? r.push(w) : (w -= 65536, r.push((w >> 10) + 55296, w % 1024 + 56320)), (o + 1 === t || r.length > 16384) && (i += String.fromCharCode.apply(String, r), r.length = 0);
  }
  return i;
}, ti = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Tu = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Tt = 0; Tt < ti.length; Tt++)
  Tu[ti.charCodeAt(Tt)] = Tt;
var ni = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", lt = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var _t = 0; _t < ni.length; _t++)
  lt[ni.charCodeAt(_t)] = _t;
var _u = function(e) {
  var A = e.length * 0.75, t = e.length, r, o = 0, i, w, a, B;
  e[e.length - 1] === "=" && (A--, e[e.length - 2] === "=" && A--);
  var n = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A), c = Array.isArray(n) ? n : new Uint8Array(n);
  for (r = 0; r < t; r += 4)
    i = lt[e.charCodeAt(r)], w = lt[e.charCodeAt(r + 1)], a = lt[e.charCodeAt(r + 2)], B = lt[e.charCodeAt(r + 3)], c[o++] = i << 2 | w >> 4, c[o++] = (w & 15) << 4 | a >> 2, c[o++] = (a & 3) << 6 | B & 63;
  return n;
}, Ru = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 2)
    t.push(e[r + 1] << 8 | e[r]);
  return t;
}, Mu = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 4)
    t.push(e[r + 3] << 24 | e[r + 2] << 16 | e[r + 1] << 8 | e[r]);
  return t;
}, Lr = 5, ta = 11, co = 2, Nu = ta - Lr, ts = 65536 >> Lr, Gu = 1 << Lr, uo = Gu - 1, Pu = 1024 >> Lr, Vu = ts + Pu, ku = Vu, ju = 32, Xu = ku + ju, Ju = 65536 >> ta, Wu = 1 << Nu, Yu = Wu - 1, oi = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint16Array(Array.prototype.slice.call(e, A, t));
}, Zu = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint32Array(Array.prototype.slice.call(e, A, t));
}, zu = function(e, A) {
  var t = _u(e), r = Array.isArray(t) ? Mu(t) : new Uint32Array(t), o = Array.isArray(t) ? Ru(t) : new Uint16Array(t), i = 24, w = oi(o, i / 2, r[4] / 2), a = r[5] === 2 ? oi(o, (i + r[4]) / 2) : Zu(r, Math.ceil((i + r[4]) / 4));
  return new qu(r[0], r[1], r[2], r[3], w, a);
}, qu = (
  /** @class */
  function() {
    function e(A, t, r, o, i, w) {
      this.initialValue = A, this.errorValue = t, this.highStart = r, this.highValueIndex = o, this.index = i, this.data = w;
    }
    return e.prototype.get = function(A) {
      var t;
      if (A >= 0) {
        if (A < 55296 || A > 56319 && A <= 65535)
          return t = this.index[A >> Lr], t = (t << co) + (A & uo), this.data[t];
        if (A <= 65535)
          return t = this.index[ts + (A - 55296 >> Lr)], t = (t << co) + (A & uo), this.data[t];
        if (A < this.highStart)
          return t = Xu - Ju + (A >> ta), t = this.index[t], t += A >> Lr & Yu, t = this.index[t], t = (t << co) + (A & uo), this.data[t];
        if (A <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, e;
  }()
), ai = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", $u = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Rt = 0; Rt < ai.length; Rt++)
  $u[ai.charCodeAt(Rt)] = Rt;
var AB = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", ii = 50, eB = 1, ns = 2, os = 3, rB = 4, tB = 5, si = 7, as = 8, ci = 9, Qr = 10, Do = 11, ui = 12, To = 13, nB = 14, gt = 15, _o = 16, Mt = 17, ct = 18, oB = 19, Bi = 20, Ro = 21, ut = 22, Bo = 23, Gr = 24, _e = 25, wt = 26, ht = 27, Pr = 28, aB = 29, xr = 30, iB = 31, Nt = 32, Gt = 33, Mo = 34, No = 35, Go = 36, Et = 37, Po = 38, on = 39, an = 40, fo = 41, is = 42, sB = 43, cB = [9001, 65288], ss = "!", kA = "×", Pt = "÷", Vo = zu(AB), ir = [xr, Go], ko = [eB, ns, os, tB], cs = [Qr, as], fi = [ht, wt], uB = ko.concat(cs), li = [Po, on, an, Mo, No], BB = [gt, To], fB = function(e, A) {
  A === void 0 && (A = "strict");
  var t = [], r = [], o = [];
  return e.forEach(function(i, w) {
    var a = Vo.get(i);
    if (a > ii ? (o.push(!0), a -= ii) : o.push(!1), ["normal", "auto", "loose"].indexOf(A) !== -1 && [8208, 8211, 12316, 12448].indexOf(i) !== -1)
      return r.push(w), t.push(_o);
    if (a === rB || a === Do) {
      if (w === 0)
        return r.push(w), t.push(xr);
      var B = t[w - 1];
      return uB.indexOf(B) === -1 ? (r.push(r[w - 1]), t.push(B)) : (r.push(w), t.push(xr));
    }
    if (r.push(w), a === iB)
      return t.push(A === "strict" ? Ro : Et);
    if (a === is || a === aB)
      return t.push(xr);
    if (a === sB)
      return i >= 131072 && i <= 196605 || i >= 196608 && i <= 262141 ? t.push(Et) : t.push(xr);
    t.push(a);
  }), [r, t, o];
}, lo = function(e, A, t, r) {
  var o = r[t];
  if (Array.isArray(e) ? e.indexOf(o) !== -1 : e === o)
    for (var i = t; i <= r.length; ) {
      i++;
      var w = r[i];
      if (w === A)
        return !0;
      if (w !== Qr)
        break;
    }
  if (o === Qr)
    for (var i = t; i > 0; ) {
      i--;
      var a = r[i];
      if (Array.isArray(e) ? e.indexOf(a) !== -1 : e === a)
        for (var B = t; B <= r.length; ) {
          B++;
          var w = r[B];
          if (w === A)
            return !0;
          if (w !== Qr)
            break;
        }
      if (a !== Qr)
        break;
    }
  return !1;
}, gi = function(e, A) {
  for (var t = e; t >= 0; ) {
    var r = A[t];
    if (r === Qr)
      t--;
    else
      return r;
  }
  return 0;
}, lB = function(e, A, t, r, o) {
  if (t[r] === 0)
    return kA;
  var i = r - 1;
  if (Array.isArray(o) && o[i] === !0)
    return kA;
  var w = i - 1, a = i + 1, B = A[i], n = w >= 0 ? A[w] : 0, c = A[a];
  if (B === ns && c === os)
    return kA;
  if (ko.indexOf(B) !== -1)
    return ss;
  if (ko.indexOf(c) !== -1 || cs.indexOf(c) !== -1)
    return kA;
  if (gi(i, A) === as)
    return Pt;
  if (Vo.get(e[i]) === Do || (B === Nt || B === Gt) && Vo.get(e[a]) === Do || B === si || c === si || B === ci || [Qr, To, gt].indexOf(B) === -1 && c === ci || [Mt, ct, oB, Gr, Pr].indexOf(c) !== -1 || gi(i, A) === ut || lo(Bo, ut, i, A) || lo([Mt, ct], Ro, i, A) || lo(ui, ui, i, A))
    return kA;
  if (B === Qr)
    return Pt;
  if (B === Bo || c === Bo)
    return kA;
  if (c === _o || B === _o)
    return Pt;
  if ([To, gt, Ro].indexOf(c) !== -1 || B === nB || n === Go && BB.indexOf(B) !== -1 || B === Pr && c === Go || c === Bi || ir.indexOf(c) !== -1 && B === _e || ir.indexOf(B) !== -1 && c === _e || B === ht && [Et, Nt, Gt].indexOf(c) !== -1 || [Et, Nt, Gt].indexOf(B) !== -1 && c === wt || ir.indexOf(B) !== -1 && fi.indexOf(c) !== -1 || fi.indexOf(B) !== -1 && ir.indexOf(c) !== -1 || // (PR | PO) × ( OP | HY )? NU
  [ht, wt].indexOf(B) !== -1 && (c === _e || [ut, gt].indexOf(c) !== -1 && A[a + 1] === _e) || // ( OP | HY ) × NU
  [ut, gt].indexOf(B) !== -1 && c === _e || // NU ×	(NU | SY | IS)
  B === _e && [_e, Pr, Gr].indexOf(c) !== -1)
    return kA;
  if ([_e, Pr, Gr, Mt, ct].indexOf(c) !== -1)
    for (var u = i; u >= 0; ) {
      var l = A[u];
      if (l === _e)
        return kA;
      if ([Pr, Gr].indexOf(l) !== -1)
        u--;
      else
        break;
    }
  if ([ht, wt].indexOf(c) !== -1)
    for (var u = [Mt, ct].indexOf(B) !== -1 ? w : i; u >= 0; ) {
      var l = A[u];
      if (l === _e)
        return kA;
      if ([Pr, Gr].indexOf(l) !== -1)
        u--;
      else
        break;
    }
  if (Po === B && [Po, on, Mo, No].indexOf(c) !== -1 || [on, Mo].indexOf(B) !== -1 && [on, an].indexOf(c) !== -1 || [an, No].indexOf(B) !== -1 && c === an || li.indexOf(B) !== -1 && [Bi, wt].indexOf(c) !== -1 || li.indexOf(c) !== -1 && B === ht || ir.indexOf(B) !== -1 && ir.indexOf(c) !== -1 || B === Gr && ir.indexOf(c) !== -1 || ir.concat(_e).indexOf(B) !== -1 && c === ut && cB.indexOf(e[a]) === -1 || ir.concat(_e).indexOf(c) !== -1 && B === ct)
    return kA;
  if (B === fo && c === fo) {
    for (var h = t[i], d = 1; h > 0 && (h--, A[h] === fo); )
      d++;
    if (d % 2 !== 0)
      return kA;
  }
  return B === Nt && c === Gt ? kA : Pt;
}, gB = function(e, A) {
  A || (A = { lineBreak: "normal", wordBreak: "normal" });
  var t = fB(e, A.lineBreak), r = t[0], o = t[1], i = t[2];
  (A.wordBreak === "break-all" || A.wordBreak === "break-word") && (o = o.map(function(a) {
    return [_e, xr, is].indexOf(a) !== -1 ? Et : a;
  }));
  var w = A.wordBreak === "keep-all" ? i.map(function(a, B) {
    return a && e[B] >= 19968 && e[B] <= 40959;
  }) : void 0;
  return [r, o, w];
}, wB = (
  /** @class */
  function() {
    function e(A, t, r, o) {
      this.codePoints = A, this.required = t === ss, this.start = r, this.end = o;
    }
    return e.prototype.slice = function() {
      return fe.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, e;
  }()
), hB = function(e, A) {
  var t = Un(e), r = gB(t, A), o = r[0], i = r[1], w = r[2], a = t.length, B = 0, n = 0;
  return {
    next: function() {
      if (n >= a)
        return { done: !0, value: null };
      for (var c = kA; n < a && (c = lB(t, i, o, ++n, w)) === kA; )
        ;
      if (c !== kA || n === a) {
        var u = new wB(t, c, B, n);
        return B = n, { value: u, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, dB = 1, QB = 2, It = 4, wi = 8, Bn = 10, hi = 47, Ct = 92, pB = 9, CB = 32, Vt = 34, Bt = 61, vB = 35, UB = 36, FB = 37, kt = 39, jt = 40, ft = 41, yB = 95, Oe = 45, EB = 33, mB = 60, bB = 62, HB = 64, IB = 91, xB = 93, SB = 61, LB = 123, Xt = 63, KB = 125, di = 124, OB = 126, DB = 128, Qi = 65533, go = 42, Sr = 43, TB = 44, _B = 58, RB = 59, mt = 46, MB = 0, NB = 8, GB = 11, PB = 14, VB = 31, kB = 127, Ar = -1, us = 48, Bs = 97, fs = 101, jB = 102, XB = 117, JB = 122, ls = 65, gs = 69, ws = 70, WB = 85, YB = 90, Ie = function(e) {
  return e >= us && e <= 57;
}, ZB = function(e) {
  return e >= 55296 && e <= 57343;
}, Vr = function(e) {
  return Ie(e) || e >= ls && e <= ws || e >= Bs && e <= jB;
}, zB = function(e) {
  return e >= Bs && e <= JB;
}, qB = function(e) {
  return e >= ls && e <= YB;
}, $B = function(e) {
  return zB(e) || qB(e);
}, Af = function(e) {
  return e >= DB;
}, Jt = function(e) {
  return e === Bn || e === pB || e === CB;
}, fn = function(e) {
  return $B(e) || Af(e) || e === yB;
}, pi = function(e) {
  return fn(e) || Ie(e) || e === Oe;
}, ef = function(e) {
  return e >= MB && e <= NB || e === GB || e >= PB && e <= VB || e === kB;
}, dr = function(e, A) {
  return e !== Ct ? !1 : A !== Bn;
}, Wt = function(e, A, t) {
  return e === Oe ? fn(A) || dr(A, t) : fn(e) ? !0 : !!(e === Ct && dr(e, A));
}, wo = function(e, A, t) {
  return e === Sr || e === Oe ? Ie(A) ? !0 : A === mt && Ie(t) : Ie(e === mt ? A : e);
}, rf = function(e) {
  var A = 0, t = 1;
  (e[A] === Sr || e[A] === Oe) && (e[A] === Oe && (t = -1), A++);
  for (var r = []; Ie(e[A]); )
    r.push(e[A++]);
  var o = r.length ? parseInt(fe.apply(void 0, r), 10) : 0;
  e[A] === mt && A++;
  for (var i = []; Ie(e[A]); )
    i.push(e[A++]);
  var w = i.length, a = w ? parseInt(fe.apply(void 0, i), 10) : 0;
  (e[A] === gs || e[A] === fs) && A++;
  var B = 1;
  (e[A] === Sr || e[A] === Oe) && (e[A] === Oe && (B = -1), A++);
  for (var n = []; Ie(e[A]); )
    n.push(e[A++]);
  var c = n.length ? parseInt(fe.apply(void 0, n), 10) : 0;
  return t * (o + a * Math.pow(10, -w)) * Math.pow(10, B * c);
}, tf = {
  type: 2
  /* LEFT_PARENTHESIS_TOKEN */
}, nf = {
  type: 3
  /* RIGHT_PARENTHESIS_TOKEN */
}, of = {
  type: 4
  /* COMMA_TOKEN */
}, af = {
  type: 13
  /* SUFFIX_MATCH_TOKEN */
}, sf = {
  type: 8
  /* PREFIX_MATCH_TOKEN */
}, cf = {
  type: 21
  /* COLUMN_TOKEN */
}, uf = {
  type: 9
  /* DASH_MATCH_TOKEN */
}, Bf = {
  type: 10
  /* INCLUDE_MATCH_TOKEN */
}, ff = {
  type: 11
  /* LEFT_CURLY_BRACKET_TOKEN */
}, lf = {
  type: 12
  /* RIGHT_CURLY_BRACKET_TOKEN */
}, gf = {
  type: 14
  /* SUBSTRING_MATCH_TOKEN */
}, Yt = {
  type: 23
  /* BAD_URL_TOKEN */
}, wf = {
  type: 1
  /* BAD_STRING_TOKEN */
}, hf = {
  type: 25
  /* CDO_TOKEN */
}, df = {
  type: 24
  /* CDC_TOKEN */
}, Qf = {
  type: 26
  /* COLON_TOKEN */
}, pf = {
  type: 27
  /* SEMICOLON_TOKEN */
}, Cf = {
  type: 28
  /* LEFT_SQUARE_BRACKET_TOKEN */
}, vf = {
  type: 29
  /* RIGHT_SQUARE_BRACKET_TOKEN */
}, Uf = {
  type: 31
  /* WHITESPACE_TOKEN */
}, jo = {
  type: 32
  /* EOF_TOKEN */
}, hs = (
  /** @class */
  function() {
    function e() {
      this._value = [];
    }
    return e.prototype.write = function(A) {
      this._value = this._value.concat(Un(A));
    }, e.prototype.read = function() {
      for (var A = [], t = this.consumeToken(); t !== jo; )
        A.push(t), t = this.consumeToken();
      return A;
    }, e.prototype.consumeToken = function() {
      var A = this.consumeCodePoint();
      switch (A) {
        case Vt:
          return this.consumeStringToken(Vt);
        case vB:
          var t = this.peekCodePoint(0), r = this.peekCodePoint(1), o = this.peekCodePoint(2);
          if (pi(t) || dr(r, o)) {
            var i = Wt(t, r, o) ? QB : dB, w = this.consumeName();
            return { type: 5, value: w, flags: i };
          }
          break;
        case UB:
          if (this.peekCodePoint(0) === Bt)
            return this.consumeCodePoint(), af;
          break;
        case kt:
          return this.consumeStringToken(kt);
        case jt:
          return tf;
        case ft:
          return nf;
        case go:
          if (this.peekCodePoint(0) === Bt)
            return this.consumeCodePoint(), gf;
          break;
        case Sr:
          if (wo(A, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          break;
        case TB:
          return of;
        case Oe:
          var a = A, B = this.peekCodePoint(0), n = this.peekCodePoint(1);
          if (wo(a, B, n))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          if (Wt(a, B, n))
            return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
          if (B === Oe && n === bB)
            return this.consumeCodePoint(), this.consumeCodePoint(), df;
          break;
        case mt:
          if (wo(A, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          break;
        case hi:
          if (this.peekCodePoint(0) === go)
            for (this.consumeCodePoint(); ; ) {
              var c = this.consumeCodePoint();
              if (c === go && (c = this.consumeCodePoint(), c === hi))
                return this.consumeToken();
              if (c === Ar)
                return this.consumeToken();
            }
          break;
        case _B:
          return Qf;
        case RB:
          return pf;
        case mB:
          if (this.peekCodePoint(0) === EB && this.peekCodePoint(1) === Oe && this.peekCodePoint(2) === Oe)
            return this.consumeCodePoint(), this.consumeCodePoint(), hf;
          break;
        case HB:
          var u = this.peekCodePoint(0), l = this.peekCodePoint(1), h = this.peekCodePoint(2);
          if (Wt(u, l, h)) {
            var w = this.consumeName();
            return { type: 7, value: w };
          }
          break;
        case IB:
          return Cf;
        case Ct:
          if (dr(A, this.peekCodePoint(0)))
            return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
          break;
        case xB:
          return vf;
        case SB:
          if (this.peekCodePoint(0) === Bt)
            return this.consumeCodePoint(), sf;
          break;
        case LB:
          return ff;
        case KB:
          return lf;
        case XB:
        case WB:
          var d = this.peekCodePoint(0), p = this.peekCodePoint(1);
          return d === Sr && (Vr(p) || p === Xt) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        case di:
          if (this.peekCodePoint(0) === Bt)
            return this.consumeCodePoint(), uf;
          if (this.peekCodePoint(0) === di)
            return this.consumeCodePoint(), cf;
          break;
        case OB:
          if (this.peekCodePoint(0) === Bt)
            return this.consumeCodePoint(), Bf;
          break;
        case Ar:
          return jo;
      }
      return Jt(A) ? (this.consumeWhiteSpace(), Uf) : Ie(A) ? (this.reconsumeCodePoint(A), this.consumeNumericToken()) : fn(A) ? (this.reconsumeCodePoint(A), this.consumeIdentLikeToken()) : { type: 6, value: fe(A) };
    }, e.prototype.consumeCodePoint = function() {
      var A = this._value.shift();
      return typeof A > "u" ? -1 : A;
    }, e.prototype.reconsumeCodePoint = function(A) {
      this._value.unshift(A);
    }, e.prototype.peekCodePoint = function(A) {
      return A >= this._value.length ? -1 : this._value[A];
    }, e.prototype.consumeUnicodeRangeToken = function() {
      for (var A = [], t = this.consumeCodePoint(); Vr(t) && A.length < 6; )
        A.push(t), t = this.consumeCodePoint();
      for (var r = !1; t === Xt && A.length < 6; )
        A.push(t), t = this.consumeCodePoint(), r = !0;
      if (r) {
        var o = parseInt(fe.apply(void 0, A.map(function(B) {
          return B === Xt ? us : B;
        })), 16), i = parseInt(fe.apply(void 0, A.map(function(B) {
          return B === Xt ? ws : B;
        })), 16);
        return { type: 30, start: o, end: i };
      }
      var w = parseInt(fe.apply(void 0, A), 16);
      if (this.peekCodePoint(0) === Oe && Vr(this.peekCodePoint(1))) {
        this.consumeCodePoint(), t = this.consumeCodePoint();
        for (var a = []; Vr(t) && a.length < 6; )
          a.push(t), t = this.consumeCodePoint();
        var i = parseInt(fe.apply(void 0, a), 16);
        return { type: 30, start: w, end: i };
      } else
        return { type: 30, start: w, end: w };
    }, e.prototype.consumeIdentLikeToken = function() {
      var A = this.consumeName();
      return A.toLowerCase() === "url" && this.peekCodePoint(0) === jt ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === jt ? (this.consumeCodePoint(), { type: 19, value: A }) : { type: 20, value: A };
    }, e.prototype.consumeUrlToken = function() {
      var A = [];
      if (this.consumeWhiteSpace(), this.peekCodePoint(0) === Ar)
        return { type: 22, value: "" };
      var t = this.peekCodePoint(0);
      if (t === kt || t === Vt) {
        var r = this.consumeStringToken(this.consumeCodePoint());
        return r.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === Ar || this.peekCodePoint(0) === ft) ? (this.consumeCodePoint(), { type: 22, value: r.value }) : (this.consumeBadUrlRemnants(), Yt);
      }
      for (; ; ) {
        var o = this.consumeCodePoint();
        if (o === Ar || o === ft)
          return { type: 22, value: fe.apply(void 0, A) };
        if (Jt(o))
          return this.consumeWhiteSpace(), this.peekCodePoint(0) === Ar || this.peekCodePoint(0) === ft ? (this.consumeCodePoint(), { type: 22, value: fe.apply(void 0, A) }) : (this.consumeBadUrlRemnants(), Yt);
        if (o === Vt || o === kt || o === jt || ef(o))
          return this.consumeBadUrlRemnants(), Yt;
        if (o === Ct)
          if (dr(o, this.peekCodePoint(0)))
            A.push(this.consumeEscapedCodePoint());
          else
            return this.consumeBadUrlRemnants(), Yt;
        else
          A.push(o);
      }
    }, e.prototype.consumeWhiteSpace = function() {
      for (; Jt(this.peekCodePoint(0)); )
        this.consumeCodePoint();
    }, e.prototype.consumeBadUrlRemnants = function() {
      for (; ; ) {
        var A = this.consumeCodePoint();
        if (A === ft || A === Ar)
          return;
        dr(A, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
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
          return this._value.splice(0, r), wf;
        if (o === Ct) {
          var i = this._value[r + 1];
          i !== Ar && i !== void 0 && (i === Bn ? (t += this.consumeStringSlice(r), r = -1, this._value.shift()) : dr(o, i) && (t += this.consumeStringSlice(r), t += fe(this.consumeEscapedCodePoint()), r = -1));
        }
        r++;
      } while (!0);
    }, e.prototype.consumeNumber = function() {
      var A = [], t = It, r = this.peekCodePoint(0);
      for ((r === Sr || r === Oe) && A.push(this.consumeCodePoint()); Ie(this.peekCodePoint(0)); )
        A.push(this.consumeCodePoint());
      r = this.peekCodePoint(0);
      var o = this.peekCodePoint(1);
      if (r === mt && Ie(o))
        for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = wi; Ie(this.peekCodePoint(0)); )
          A.push(this.consumeCodePoint());
      r = this.peekCodePoint(0), o = this.peekCodePoint(1);
      var i = this.peekCodePoint(2);
      if ((r === gs || r === fs) && ((o === Sr || o === Oe) && Ie(i) || Ie(o)))
        for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = wi; Ie(this.peekCodePoint(0)); )
          A.push(this.consumeCodePoint());
      return [rf(A), t];
    }, e.prototype.consumeNumericToken = function() {
      var A = this.consumeNumber(), t = A[0], r = A[1], o = this.peekCodePoint(0), i = this.peekCodePoint(1), w = this.peekCodePoint(2);
      if (Wt(o, i, w)) {
        var a = this.consumeName();
        return { type: 15, number: t, flags: r, unit: a };
      }
      return o === FB ? (this.consumeCodePoint(), { type: 16, number: t, flags: r }) : { type: 17, number: t, flags: r };
    }, e.prototype.consumeEscapedCodePoint = function() {
      var A = this.consumeCodePoint();
      if (Vr(A)) {
        for (var t = fe(A); Vr(this.peekCodePoint(0)) && t.length < 6; )
          t += fe(this.consumeCodePoint());
        Jt(this.peekCodePoint(0)) && this.consumeCodePoint();
        var r = parseInt(t, 16);
        return r === 0 || ZB(r) || r > 1114111 ? Qi : r;
      }
      return A === Ar ? Qi : A;
    }, e.prototype.consumeName = function() {
      for (var A = ""; ; ) {
        var t = this.consumeCodePoint();
        if (pi(t))
          A += fe(t);
        else if (dr(t, this.peekCodePoint(0)))
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
      var t = new hs();
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
        if (r.type === 32 || yf(r, A))
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
      return typeof A > "u" ? jo : A;
    }, e.prototype.reconsumeToken = function(A) {
      this._tokens.unshift(A);
    }, e;
  }()
), xt = function(e) {
  return e.type === 15;
}, $r = function(e) {
  return e.type === 17;
}, ZA = function(e) {
  return e.type === 20;
}, Ff = function(e) {
  return e.type === 0;
}, Xo = function(e, A) {
  return ZA(e) && e.value === A;
}, Qs = function(e) {
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
}, yf = function(e, A) {
  return A === 11 && e.type === 12 || A === 28 && e.type === 29 ? !0 : A === 2 && e.type === 3;
}, Fr = function(e) {
  return e.type === 17 || e.type === 15;
}, he = function(e) {
  return e.type === 16 || Fr(e);
}, ps = function(e) {
  return e.length > 1 ? [e[0], e[1]] : [e[0]];
}, me = {
  type: 17,
  number: 0,
  flags: It
}, na = {
  type: 16,
  number: 50,
  flags: It
}, pr = {
  type: 16,
  number: 100,
  flags: It
}, dt = function(e, A, t) {
  var r = e[0], o = e[1];
  return [qA(r, A), qA(typeof o < "u" ? o : r, t)];
}, qA = function(e, A) {
  if (e.type === 16)
    return e.number / 100 * A;
  if (xt(e))
    switch (e.unit) {
      case "rem":
      case "em":
        return 16 * e.number;
      case "px":
      default:
        return e.number;
    }
  return e.number;
}, Cs = "deg", vs = "grad", Us = "rad", Fs = "turn", Fn = {
  name: "angle",
  parse: function(e, A) {
    if (A.type === 15)
      switch (A.unit) {
        case Cs:
          return Math.PI * A.number / 180;
        case vs:
          return Math.PI / 200 * A.number;
        case Us:
          return A.number;
        case Fs:
          return Math.PI * 2 * A.number;
      }
    throw new Error("Unsupported angle type");
  }
}, ys = function(e) {
  return e.type === 15 && (e.unit === Cs || e.unit === vs || e.unit === Us || e.unit === Fs);
}, Es = function(e) {
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
      return Ge(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
      return [me, pr];
    case "to right":
    case "left":
      return Ge(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
      return [pr, pr];
    case "to bottom":
    case "top":
      return Ge(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
      return [pr, me];
    case "to left":
    case "right":
      return Ge(270);
  }
  return 0;
}, Ge = function(e) {
  return Math.PI * e / 180;
}, vr = {
  name: "color",
  parse: function(e, A) {
    if (A.type === 18) {
      var t = Ef[A.name];
      if (typeof t > "u")
        throw new Error('Attempting to parse an unsupported color function "' + A.name + '"');
      return t(e, A.values);
    }
    if (A.type === 5) {
      if (A.value.length === 3) {
        var r = A.value.substring(0, 1), o = A.value.substring(1, 2), i = A.value.substring(2, 3);
        return Cr(parseInt(r + r, 16), parseInt(o + o, 16), parseInt(i + i, 16), 1);
      }
      if (A.value.length === 4) {
        var r = A.value.substring(0, 1), o = A.value.substring(1, 2), i = A.value.substring(2, 3), w = A.value.substring(3, 4);
        return Cr(parseInt(r + r, 16), parseInt(o + o, 16), parseInt(i + i, 16), parseInt(w + w, 16) / 255);
      }
      if (A.value.length === 6) {
        var r = A.value.substring(0, 2), o = A.value.substring(2, 4), i = A.value.substring(4, 6);
        return Cr(parseInt(r, 16), parseInt(o, 16), parseInt(i, 16), 1);
      }
      if (A.value.length === 8) {
        var r = A.value.substring(0, 2), o = A.value.substring(2, 4), i = A.value.substring(4, 6), w = A.value.substring(6, 8);
        return Cr(parseInt(r, 16), parseInt(o, 16), parseInt(i, 16), parseInt(w, 16) / 255);
      }
    }
    if (A.type === 20) {
      var a = cr[A.value.toUpperCase()];
      if (typeof a < "u")
        return a;
    }
    return cr.TRANSPARENT;
  }
}, Ur = function(e) {
  return (255 & e) === 0;
}, Ue = function(e) {
  var A = 255 & e, t = 255 & e >> 8, r = 255 & e >> 16, o = 255 & e >> 24;
  return A < 255 ? "rgba(" + o + "," + r + "," + t + "," + A / 255 + ")" : "rgb(" + o + "," + r + "," + t + ")";
}, Cr = function(e, A, t, r) {
  return (e << 24 | A << 16 | t << 8 | Math.round(r * 255) << 0) >>> 0;
}, Ci = function(e, A) {
  if (e.type === 17)
    return e.number;
  if (e.type === 16) {
    var t = A === 3 ? 1 : 255;
    return A === 3 ? e.number / 100 * t : Math.round(e.number / 100 * t);
  }
  return 0;
}, vi = function(e, A) {
  var t = A.filter(qr);
  if (t.length === 3) {
    var r = t.map(Ci), o = r[0], i = r[1], w = r[2];
    return Cr(o, i, w, 1);
  }
  if (t.length === 4) {
    var a = t.map(Ci), o = a[0], i = a[1], w = a[2], B = a[3];
    return Cr(o, i, w, B);
  }
  return 0;
};
function ho(e, A, t) {
  return t < 0 && (t += 1), t >= 1 && (t -= 1), t < 1 / 6 ? (A - e) * t * 6 + e : t < 1 / 2 ? A : t < 2 / 3 ? (A - e) * 6 * (2 / 3 - t) + e : e;
}
var Ui = function(e, A) {
  var t = A.filter(qr), r = t[0], o = t[1], i = t[2], w = t[3], a = (r.type === 17 ? Ge(r.number) : Fn.parse(e, r)) / (Math.PI * 2), B = he(o) ? o.number / 100 : 0, n = he(i) ? i.number / 100 : 0, c = typeof w < "u" && he(w) ? qA(w, 1) : 1;
  if (B === 0)
    return Cr(n * 255, n * 255, n * 255, 1);
  var u = n <= 0.5 ? n * (B + 1) : n + B - n * B, l = n * 2 - u, h = ho(l, u, a + 1 / 3), d = ho(l, u, a), p = ho(l, u, a - 1 / 3);
  return Cr(h * 255, d * 255, p * 255, c);
}, Ef = {
  hsl: Ui,
  hsla: Ui,
  rgb: vi,
  rgba: vi
}, vt = function(e, A) {
  return vr.parse(e, ds.create(A).parseComponentValue());
}, cr = {
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
}, mf = {
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
}, bf = {
  name: "background-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, yn = function(e, A) {
  var t = vr.parse(e, A[0]), r = A[1];
  return r && he(r) ? { color: t, stop: r } : { color: t, stop: null };
}, Fi = function(e, A) {
  var t = e[0], r = e[e.length - 1];
  t.stop === null && (t.stop = me), r.stop === null && (r.stop = pr);
  for (var o = [], i = 0, w = 0; w < e.length; w++) {
    var a = e[w].stop;
    if (a !== null) {
      var B = qA(a, A);
      B > i ? o.push(B) : o.push(i), i = B;
    } else
      o.push(null);
  }
  for (var n = null, w = 0; w < o.length; w++) {
    var c = o[w];
    if (c === null)
      n === null && (n = w);
    else if (n !== null) {
      for (var u = w - n, l = o[n - 1], h = (c - l) / (u + 1), d = 1; d <= u; d++)
        o[n + d - 1] = h * d;
      n = null;
    }
  }
  return e.map(function(p, Q) {
    var v = p.color;
    return { color: v, stop: Math.max(Math.min(1, o[Q] / A), 0) };
  });
}, Hf = function(e, A, t) {
  var r = A / 2, o = t / 2, i = qA(e[0], A) - r, w = o - qA(e[1], t);
  return (Math.atan2(w, i) + Math.PI * 2) % (Math.PI * 2);
}, If = function(e, A, t) {
  var r = typeof e == "number" ? e : Hf(e, A, t), o = Math.abs(A * Math.sin(r)) + Math.abs(t * Math.cos(r)), i = A / 2, w = t / 2, a = o / 2, B = Math.sin(r - Math.PI / 2) * a, n = Math.cos(r - Math.PI / 2) * a;
  return [o, i - n, i + n, w - B, w + B];
}, Je = function(e, A) {
  return Math.sqrt(e * e + A * A);
}, yi = function(e, A, t, r, o) {
  var i = [
    [0, 0],
    [0, A],
    [e, 0],
    [e, A]
  ];
  return i.reduce(function(w, a) {
    var B = a[0], n = a[1], c = Je(t - B, r - n);
    return (o ? c < w.optimumDistance : c > w.optimumDistance) ? {
      optimumCorner: a,
      optimumDistance: c
    } : w;
  }, {
    optimumDistance: o ? 1 / 0 : -1 / 0,
    optimumCorner: null
  }).optimumCorner;
}, xf = function(e, A, t, r, o) {
  var i = 0, w = 0;
  switch (e.size) {
    case 0:
      e.shape === 0 ? i = w = Math.min(Math.abs(A), Math.abs(A - r), Math.abs(t), Math.abs(t - o)) : e.shape === 1 && (i = Math.min(Math.abs(A), Math.abs(A - r)), w = Math.min(Math.abs(t), Math.abs(t - o)));
      break;
    case 2:
      if (e.shape === 0)
        i = w = Math.min(Je(A, t), Je(A, t - o), Je(A - r, t), Je(A - r, t - o));
      else if (e.shape === 1) {
        var a = Math.min(Math.abs(t), Math.abs(t - o)) / Math.min(Math.abs(A), Math.abs(A - r)), B = yi(r, o, A, t, !0), n = B[0], c = B[1];
        i = Je(n - A, (c - t) / a), w = a * i;
      }
      break;
    case 1:
      e.shape === 0 ? i = w = Math.max(Math.abs(A), Math.abs(A - r), Math.abs(t), Math.abs(t - o)) : e.shape === 1 && (i = Math.max(Math.abs(A), Math.abs(A - r)), w = Math.max(Math.abs(t), Math.abs(t - o)));
      break;
    case 3:
      if (e.shape === 0)
        i = w = Math.max(Je(A, t), Je(A, t - o), Je(A - r, t), Je(A - r, t - o));
      else if (e.shape === 1) {
        var a = Math.max(Math.abs(t), Math.abs(t - o)) / Math.max(Math.abs(A), Math.abs(A - r)), u = yi(r, o, A, t, !1), n = u[0], c = u[1];
        i = Je(n - A, (c - t) / a), w = a * i;
      }
      break;
  }
  return Array.isArray(e.size) && (i = qA(e.size[0], r), w = e.size.length === 2 ? qA(e.size[1], o) : i), [i, w];
}, Sf = function(e, A) {
  var t = Ge(180), r = [];
  return er(A).forEach(function(o, i) {
    if (i === 0) {
      var w = o[0];
      if (w.type === 20 && w.value === "to") {
        t = Es(o);
        return;
      } else if (ys(w)) {
        t = Fn.parse(e, w);
        return;
      }
    }
    var a = yn(e, o);
    r.push(a);
  }), {
    angle: t,
    stops: r,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, Zt = function(e, A) {
  var t = Ge(180), r = [];
  return er(A).forEach(function(o, i) {
    if (i === 0) {
      var w = o[0];
      if (w.type === 20 && ["top", "left", "right", "bottom"].indexOf(w.value) !== -1) {
        t = Es(o);
        return;
      } else if (ys(w)) {
        t = (Fn.parse(e, w) + Ge(270)) % Ge(360);
        return;
      }
    }
    var a = yn(e, o);
    r.push(a);
  }), {
    angle: t,
    stops: r,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, Lf = function(e, A) {
  var t = Ge(180), r = [], o = 1, i = 0, w = 3, a = [];
  return er(A).forEach(function(B, n) {
    var c = B[0];
    if (n === 0) {
      if (ZA(c) && c.value === "linear") {
        o = 1;
        return;
      } else if (ZA(c) && c.value === "radial") {
        o = 2;
        return;
      }
    }
    if (c.type === 18) {
      if (c.name === "from") {
        var u = vr.parse(e, c.values[0]);
        r.push({ stop: me, color: u });
      } else if (c.name === "to") {
        var u = vr.parse(e, c.values[0]);
        r.push({ stop: pr, color: u });
      } else if (c.name === "color-stop") {
        var l = c.values.filter(qr);
        if (l.length === 2) {
          var u = vr.parse(e, l[1]), h = l[0];
          $r(h) && r.push({
            stop: { type: 16, number: h.number * 100, flags: h.flags },
            color: u
          });
        }
      }
    }
  }), o === 1 ? {
    angle: (t + Ge(180)) % Ge(360),
    stops: r,
    type: o
  } : { size: w, shape: i, stops: r, position: a, type: o };
}, ms = "closest-side", bs = "farthest-side", Hs = "closest-corner", Is = "farthest-corner", xs = "circle", Ss = "ellipse", Ls = "cover", Ks = "contain", Kf = function(e, A) {
  var t = 0, r = 3, o = [], i = [];
  return er(A).forEach(function(w, a) {
    var B = !0;
    if (a === 0) {
      var n = !1;
      B = w.reduce(function(u, l) {
        if (n)
          if (ZA(l))
            switch (l.value) {
              case "center":
                return i.push(na), u;
              case "top":
              case "left":
                return i.push(me), u;
              case "right":
              case "bottom":
                return i.push(pr), u;
            }
          else
            (he(l) || Fr(l)) && i.push(l);
        else if (ZA(l))
          switch (l.value) {
            case xs:
              return t = 0, !1;
            case Ss:
              return t = 1, !1;
            case "at":
              return n = !0, !1;
            case ms:
              return r = 0, !1;
            case Ls:
            case bs:
              return r = 1, !1;
            case Ks:
            case Hs:
              return r = 2, !1;
            case Is:
              return r = 3, !1;
          }
        else if (Fr(l) || he(l))
          return Array.isArray(r) || (r = []), r.push(l), !1;
        return u;
      }, B);
    }
    if (B) {
      var c = yn(e, w);
      o.push(c);
    }
  }), {
    size: r,
    shape: t,
    stops: o,
    position: i,
    type: 2
    /* RADIAL_GRADIENT */
  };
}, zt = function(e, A) {
  var t = 0, r = 3, o = [], i = [];
  return er(A).forEach(function(w, a) {
    var B = !0;
    if (a === 0 ? B = w.reduce(function(c, u) {
      if (ZA(u))
        switch (u.value) {
          case "center":
            return i.push(na), !1;
          case "top":
          case "left":
            return i.push(me), !1;
          case "right":
          case "bottom":
            return i.push(pr), !1;
        }
      else if (he(u) || Fr(u))
        return i.push(u), !1;
      return c;
    }, B) : a === 1 && (B = w.reduce(function(c, u) {
      if (ZA(u))
        switch (u.value) {
          case xs:
            return t = 0, !1;
          case Ss:
            return t = 1, !1;
          case Ks:
          case ms:
            return r = 0, !1;
          case bs:
            return r = 1, !1;
          case Hs:
            return r = 2, !1;
          case Ls:
          case Is:
            return r = 3, !1;
        }
      else if (Fr(u) || he(u))
        return Array.isArray(r) || (r = []), r.push(u), !1;
      return c;
    }, B)), B) {
      var n = yn(e, w);
      o.push(n);
    }
  }), {
    size: r,
    shape: t,
    stops: o,
    position: i,
    type: 2
    /* RADIAL_GRADIENT */
  };
}, Of = function(e) {
  return e.type === 1;
}, Df = function(e) {
  return e.type === 2;
}, oa = {
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
      var r = Os[A.name];
      if (typeof r > "u")
        throw new Error('Attempting to parse an unsupported image function "' + A.name + '"');
      return r(e, A.values);
    }
    throw new Error("Unsupported image type " + A.type);
  }
};
function Tf(e) {
  return !(e.type === 20 && e.value === "none") && (e.type !== 18 || !!Os[e.name]);
}
var Os = {
  "linear-gradient": Sf,
  "-moz-linear-gradient": Zt,
  "-ms-linear-gradient": Zt,
  "-o-linear-gradient": Zt,
  "-webkit-linear-gradient": Zt,
  "radial-gradient": Kf,
  "-moz-radial-gradient": zt,
  "-ms-radial-gradient": zt,
  "-o-radial-gradient": zt,
  "-webkit-radial-gradient": zt,
  "-webkit-gradient": Lf
}, _f = {
  name: "background-image",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    if (A.length === 0)
      return [];
    var t = A[0];
    return t.type === 20 && t.value === "none" ? [] : A.filter(function(r) {
      return qr(r) && Tf(r);
    }).map(function(r) {
      return oa.parse(e, r);
    });
  }
}, Rf = {
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
}, Mf = {
  name: "background-position",
  initialValue: "0% 0%",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return er(A).map(function(t) {
      return t.filter(he);
    }).map(ps);
  }
}, Nf = {
  name: "background-repeat",
  initialValue: "repeat",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return er(A).map(function(t) {
      return t.filter(ZA).map(function(r) {
        return r.value;
      }).join(" ");
    }).map(Gf);
  }
}, Gf = function(e) {
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
}, Zr;
(function(e) {
  e.AUTO = "auto", e.CONTAIN = "contain", e.COVER = "cover";
})(Zr || (Zr = {}));
var Pf = {
  name: "background-size",
  initialValue: "0",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return er(A).map(function(t) {
      return t.filter(Vf);
    });
  }
}, Vf = function(e) {
  return ZA(e) || he(e);
}, En = function(e) {
  return {
    name: "border-" + e + "-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color"
  };
}, kf = En("top"), jf = En("right"), Xf = En("bottom"), Jf = En("left"), mn = function(e) {
  return {
    name: "border-radius-" + e,
    initialValue: "0 0",
    prefix: !1,
    type: 1,
    parse: function(A, t) {
      return ps(t.filter(he));
    }
  };
}, Wf = mn("top-left"), Yf = mn("top-right"), Zf = mn("bottom-right"), zf = mn("bottom-left"), bn = function(e) {
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
}, qf = bn("top"), $f = bn("right"), Al = bn("bottom"), el = bn("left"), Hn = function(e) {
  return {
    name: "border-" + e + "-width",
    initialValue: "0",
    type: 0,
    prefix: !1,
    parse: function(A, t) {
      return xt(t) ? t.number : 0;
    }
  };
}, rl = Hn("top"), tl = Hn("right"), nl = Hn("bottom"), ol = Hn("left"), al = {
  name: "color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, il = {
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
}, sl = {
  name: "display",
  initialValue: "inline-block",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.filter(ZA).reduce(
      function(t, r) {
        return t | cl(r.value);
      },
      0
      /* NONE */
    );
  }
}, cl = function(e) {
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
}, ul = {
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
}, Bl = {
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
var fl = {
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
}, ll = {
  name: "line-height",
  initialValue: "normal",
  prefix: !1,
  type: 4
  /* TOKEN_VALUE */
}, Ei = function(e, A) {
  return ZA(e) && e.value === "normal" ? 1.2 * A : e.type === 17 ? A * e.number : he(e) ? qA(e, A) : A;
}, gl = {
  name: "list-style-image",
  initialValue: "none",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    return A.type === 20 && A.value === "none" ? null : oa.parse(e, A);
  }
}, wl = {
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
}, Jo = {
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
}, In = function(e) {
  return {
    name: "margin-" + e,
    initialValue: "0",
    prefix: !1,
    type: 4
    /* TOKEN_VALUE */
  };
}, hl = In("top"), dl = In("right"), Ql = In("bottom"), pl = In("left"), Cl = {
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
}, vl = {
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
}, xn = function(e) {
  return {
    name: "padding-" + e,
    initialValue: "0",
    prefix: !1,
    type: 3,
    format: "length-percentage"
  };
}, Ul = xn("top"), Fl = xn("right"), yl = xn("bottom"), El = xn("left"), ml = {
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
}, bl = {
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
}, Hl = {
  name: "text-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return A.length === 1 && Xo(A[0], "none") ? [] : er(A).map(function(t) {
      for (var r = {
        color: cr.TRANSPARENT,
        offsetX: me,
        offsetY: me,
        blur: me
      }, o = 0, i = 0; i < t.length; i++) {
        var w = t[i];
        Fr(w) ? (o === 0 ? r.offsetX = w : o === 1 ? r.offsetY = w : r.blur = w, o++) : r.color = vr.parse(e, w);
      }
      return r;
    });
  }
}, Il = {
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
}, xl = {
  name: "transform",
  initialValue: "none",
  prefix: !0,
  type: 0,
  parse: function(e, A) {
    if (A.type === 20 && A.value === "none")
      return null;
    if (A.type === 18) {
      var t = Kl[A.name];
      if (typeof t > "u")
        throw new Error('Attempting to parse an unsupported transform function "' + A.name + '"');
      return t(A.values);
    }
    return null;
  }
}, Sl = function(e) {
  var A = e.filter(function(t) {
    return t.type === 17;
  }).map(function(t) {
    return t.number;
  });
  return A.length === 6 ? A : null;
}, Ll = function(e) {
  var A = e.filter(function(B) {
    return B.type === 17;
  }).map(function(B) {
    return B.number;
  }), t = A[0], r = A[1];
  A[2], A[3];
  var o = A[4], i = A[5];
  A[6], A[7], A[8], A[9], A[10], A[11];
  var w = A[12], a = A[13];
  return A[14], A[15], A.length === 16 ? [t, r, o, i, w, a] : null;
}, Kl = {
  matrix: Sl,
  matrix3d: Ll
}, mi = {
  type: 16,
  number: 50,
  flags: It
}, Ol = [mi, mi], Dl = {
  name: "transform-origin",
  initialValue: "50% 50%",
  prefix: !0,
  type: 1,
  parse: function(e, A) {
    var t = A.filter(he);
    return t.length !== 2 ? Ol : [t[0], t[1]];
  }
}, Tl = {
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
var _l = {
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
}, Rl = {
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
}, Ds = {
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
}, Ml = {
  name: "opacity",
  initialValue: "1",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    return $r(A) ? A.number : 1;
  }
}, Nl = {
  name: "text-decoration-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, Gl = {
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
}, Pl = {
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
}, Vl = {
  name: "font-size",
  initialValue: "0",
  prefix: !1,
  type: 3,
  format: "length"
}, kl = {
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
}, jl = {
  name: "font-variant",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return A.filter(ZA).map(function(t) {
      return t.value;
    });
  }
}, Xl = {
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
}, Qe = function(e, A) {
  return (e & A) !== 0;
}, Jl = {
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
}, Wl = {
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
    for (var r = [], o = A.filter(Qs), i = 0; i < o.length; i++) {
      var w = o[i], a = o[i + 1];
      if (w.type === 20) {
        var B = a && $r(a) ? a.number : 1;
        r.push({ counter: w.value, increment: B });
      }
    }
    return r;
  }
}, Yl = {
  name: "counter-reset",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(e, A) {
    if (A.length === 0)
      return [];
    for (var t = [], r = A.filter(Qs), o = 0; o < r.length; o++) {
      var i = r[o], w = r[o + 1];
      if (ZA(i) && i.value !== "none") {
        var a = w && $r(w) ? w.number : 0;
        t.push({ counter: i.value, reset: a });
      }
    }
    return t;
  }
}, Zl = {
  name: "duration",
  initialValue: "0s",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.filter(xt).map(function(t) {
      return Ds.parse(e, t);
    });
  }
}, zl = {
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
    var r = [], o = A.filter(Ff);
    if (o.length % 2 !== 0)
      return null;
    for (var i = 0; i < o.length; i += 2) {
      var w = o[i].value, a = o[i + 1].value;
      r.push({ open: w, close: a });
    }
    return r;
  }
}, bi = function(e, A, t) {
  if (!e)
    return "";
  var r = e[Math.min(A, e.length - 1)];
  return r ? t ? r.open : r.close : "";
}, ql = {
  name: "box-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return A.length === 1 && Xo(A[0], "none") ? [] : er(A).map(function(t) {
      for (var r = {
        color: 255,
        offsetX: me,
        offsetY: me,
        blur: me,
        spread: me,
        inset: !1
      }, o = 0, i = 0; i < t.length; i++) {
        var w = t[i];
        Xo(w, "inset") ? r.inset = !0 : Fr(w) ? (o === 0 ? r.offsetX = w : o === 1 ? r.offsetY = w : o === 2 ? r.blur = w : r.spread = w, o++) : r.color = vr.parse(e, w);
      }
      return r;
    });
  }
}, $l = {
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
}, Ag = {
  name: "-webkit-text-stroke-color",
  initialValue: "currentcolor",
  prefix: !1,
  type: 3,
  format: "color"
}, eg = {
  name: "-webkit-text-stroke-width",
  initialValue: "0",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    return xt(A) ? A.number : 0;
  }
}, rg = (
  /** @class */
  function() {
    function e(A, t) {
      var r, o;
      this.animationDuration = wA(A, Zl, t.animationDuration), this.backgroundClip = wA(A, mf, t.backgroundClip), this.backgroundColor = wA(A, bf, t.backgroundColor), this.backgroundImage = wA(A, _f, t.backgroundImage), this.backgroundOrigin = wA(A, Rf, t.backgroundOrigin), this.backgroundPosition = wA(A, Mf, t.backgroundPosition), this.backgroundRepeat = wA(A, Nf, t.backgroundRepeat), this.backgroundSize = wA(A, Pf, t.backgroundSize), this.borderTopColor = wA(A, kf, t.borderTopColor), this.borderRightColor = wA(A, jf, t.borderRightColor), this.borderBottomColor = wA(A, Xf, t.borderBottomColor), this.borderLeftColor = wA(A, Jf, t.borderLeftColor), this.borderTopLeftRadius = wA(A, Wf, t.borderTopLeftRadius), this.borderTopRightRadius = wA(A, Yf, t.borderTopRightRadius), this.borderBottomRightRadius = wA(A, Zf, t.borderBottomRightRadius), this.borderBottomLeftRadius = wA(A, zf, t.borderBottomLeftRadius), this.borderTopStyle = wA(A, qf, t.borderTopStyle), this.borderRightStyle = wA(A, $f, t.borderRightStyle), this.borderBottomStyle = wA(A, Al, t.borderBottomStyle), this.borderLeftStyle = wA(A, el, t.borderLeftStyle), this.borderTopWidth = wA(A, rl, t.borderTopWidth), this.borderRightWidth = wA(A, tl, t.borderRightWidth), this.borderBottomWidth = wA(A, nl, t.borderBottomWidth), this.borderLeftWidth = wA(A, ol, t.borderLeftWidth), this.boxShadow = wA(A, ql, t.boxShadow), this.color = wA(A, al, t.color), this.direction = wA(A, il, t.direction), this.display = wA(A, sl, t.display), this.float = wA(A, ul, t.cssFloat), this.fontFamily = wA(A, Pl, t.fontFamily), this.fontSize = wA(A, Vl, t.fontSize), this.fontStyle = wA(A, Xl, t.fontStyle), this.fontVariant = wA(A, jl, t.fontVariant), this.fontWeight = wA(A, kl, t.fontWeight), this.letterSpacing = wA(A, Bl, t.letterSpacing), this.lineBreak = wA(A, fl, t.lineBreak), this.lineHeight = wA(A, ll, t.lineHeight), this.listStyleImage = wA(A, gl, t.listStyleImage), this.listStylePosition = wA(A, wl, t.listStylePosition), this.listStyleType = wA(A, Jo, t.listStyleType), this.marginTop = wA(A, hl, t.marginTop), this.marginRight = wA(A, dl, t.marginRight), this.marginBottom = wA(A, Ql, t.marginBottom), this.marginLeft = wA(A, pl, t.marginLeft), this.opacity = wA(A, Ml, t.opacity);
      var i = wA(A, Cl, t.overflow);
      this.overflowX = i[0], this.overflowY = i[i.length > 1 ? 1 : 0], this.overflowWrap = wA(A, vl, t.overflowWrap), this.paddingTop = wA(A, Ul, t.paddingTop), this.paddingRight = wA(A, Fl, t.paddingRight), this.paddingBottom = wA(A, yl, t.paddingBottom), this.paddingLeft = wA(A, El, t.paddingLeft), this.paintOrder = wA(A, $l, t.paintOrder), this.position = wA(A, bl, t.position), this.textAlign = wA(A, ml, t.textAlign), this.textDecorationColor = wA(A, Nl, (r = t.textDecorationColor) !== null && r !== void 0 ? r : t.color), this.textDecorationLine = wA(A, Gl, (o = t.textDecorationLine) !== null && o !== void 0 ? o : t.textDecoration), this.textShadow = wA(A, Hl, t.textShadow), this.textTransform = wA(A, Il, t.textTransform), this.transform = wA(A, xl, t.transform), this.transformOrigin = wA(A, Dl, t.transformOrigin), this.visibility = wA(A, Tl, t.visibility), this.webkitTextStrokeColor = wA(A, Ag, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = wA(A, eg, t.webkitTextStrokeWidth), this.wordBreak = wA(A, _l, t.wordBreak), this.zIndex = wA(A, Rl, t.zIndex);
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
      return Qe(
        this.display,
        4
        /* INLINE */
      ) || Qe(
        this.display,
        33554432
        /* INLINE_BLOCK */
      ) || Qe(
        this.display,
        268435456
        /* INLINE_FLEX */
      ) || Qe(
        this.display,
        536870912
        /* INLINE_GRID */
      ) || Qe(
        this.display,
        67108864
        /* INLINE_LIST_ITEM */
      ) || Qe(
        this.display,
        134217728
        /* INLINE_TABLE */
      );
    }, e;
  }()
), tg = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(A, t) {
      this.content = wA(A, Jl, t.content), this.quotes = wA(A, zl, t.quotes);
    }
    return e;
  }()
), Hi = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(A, t) {
      this.counterIncrement = wA(A, Wl, t.counterIncrement), this.counterReset = wA(A, Yl, t.counterReset);
    }
    return e;
  }()
), wA = function(e, A, t) {
  var r = new hs(), o = t !== null && typeof t < "u" ? t.toString() : A.initialValue;
  r.write(o);
  var i = new ds(r.read());
  switch (A.type) {
    case 2:
      var w = i.parseComponentValue();
      return A.parse(e, ZA(w) ? w.value : A.initialValue);
    case 0:
      return A.parse(e, i.parseComponentValue());
    case 1:
      return A.parse(e, i.parseComponentValues());
    case 4:
      return i.parseComponentValue();
    case 3:
      switch (A.format) {
        case "angle":
          return Fn.parse(e, i.parseComponentValue());
        case "color":
          return vr.parse(e, i.parseComponentValue());
        case "image":
          return oa.parse(e, i.parseComponentValue());
        case "length":
          var a = i.parseComponentValue();
          return Fr(a) ? a : me;
        case "length-percentage":
          var B = i.parseComponentValue();
          return he(B) ? B : me;
        case "time":
          return Ds.parse(e, i.parseComponentValue());
      }
      break;
  }
}, ng = "data-html2canvas-debug", og = function(e) {
  var A = e.getAttribute(ng);
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
}, Wo = function(e, A) {
  var t = og(e);
  return t === 1 || A === t;
}, rr = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(A, t) {
      if (this.context = A, this.textNodes = [], this.elements = [], this.flags = 0, Wo(
        t,
        3
        /* PARSE */
      ))
        debugger;
      this.styles = new rg(A, window.getComputedStyle(t, null)), zo(t) && (this.styles.animationDuration.some(function(r) {
        return r > 0;
      }) && (t.style.animationDuration = "0s"), this.styles.transform !== null && (t.style.transform = "none")), this.bounds = vn(this.context, t), Wo(
        t,
        4
        /* RENDER */
      ) && (this.flags |= 16);
    }
    return e;
  }()
), ag = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", Ii = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Qt = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var qt = 0; qt < Ii.length; qt++)
  Qt[Ii.charCodeAt(qt)] = qt;
var ig = function(e) {
  var A = e.length * 0.75, t = e.length, r, o = 0, i, w, a, B;
  e[e.length - 1] === "=" && (A--, e[e.length - 2] === "=" && A--);
  var n = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A), c = Array.isArray(n) ? n : new Uint8Array(n);
  for (r = 0; r < t; r += 4)
    i = Qt[e.charCodeAt(r)], w = Qt[e.charCodeAt(r + 1)], a = Qt[e.charCodeAt(r + 2)], B = Qt[e.charCodeAt(r + 3)], c[o++] = i << 2 | w >> 4, c[o++] = (w & 15) << 4 | a >> 2, c[o++] = (a & 3) << 6 | B & 63;
  return n;
}, sg = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 2)
    t.push(e[r + 1] << 8 | e[r]);
  return t;
}, cg = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 4)
    t.push(e[r + 3] << 24 | e[r + 2] << 16 | e[r + 1] << 8 | e[r]);
  return t;
}, Kr = 5, aa = 11, Qo = 2, ug = aa - Kr, Ts = 65536 >> Kr, Bg = 1 << Kr, po = Bg - 1, fg = 1024 >> Kr, lg = Ts + fg, gg = lg, wg = 32, hg = gg + wg, dg = 65536 >> aa, Qg = 1 << ug, pg = Qg - 1, xi = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint16Array(Array.prototype.slice.call(e, A, t));
}, Cg = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint32Array(Array.prototype.slice.call(e, A, t));
}, vg = function(e, A) {
  var t = ig(e), r = Array.isArray(t) ? cg(t) : new Uint32Array(t), o = Array.isArray(t) ? sg(t) : new Uint16Array(t), i = 24, w = xi(o, i / 2, r[4] / 2), a = r[5] === 2 ? xi(o, (i + r[4]) / 2) : Cg(r, Math.ceil((i + r[4]) / 4));
  return new Ug(r[0], r[1], r[2], r[3], w, a);
}, Ug = (
  /** @class */
  function() {
    function e(A, t, r, o, i, w) {
      this.initialValue = A, this.errorValue = t, this.highStart = r, this.highValueIndex = o, this.index = i, this.data = w;
    }
    return e.prototype.get = function(A) {
      var t;
      if (A >= 0) {
        if (A < 55296 || A > 56319 && A <= 65535)
          return t = this.index[A >> Kr], t = (t << Qo) + (A & po), this.data[t];
        if (A <= 65535)
          return t = this.index[Ts + (A - 55296 >> Kr)], t = (t << Qo) + (A & po), this.data[t];
        if (A < this.highStart)
          return t = hg - dg + (A >> aa), t = this.index[t], t += A >> Kr & pg, t = this.index[t], t = (t << Qo) + (A & po), this.data[t];
        if (A <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, e;
  }()
), Si = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Fg = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var $t = 0; $t < Si.length; $t++)
  Fg[Si.charCodeAt($t)] = $t;
var yg = 1, Co = 2, vo = 3, Li = 4, Ki = 5, Eg = 7, Oi = 8, Uo = 9, Fo = 10, Di = 11, Ti = 12, _i = 13, Ri = 14, yo = 15, mg = function(e) {
  for (var A = [], t = 0, r = e.length; t < r; ) {
    var o = e.charCodeAt(t++);
    if (o >= 55296 && o <= 56319 && t < r) {
      var i = e.charCodeAt(t++);
      (i & 64512) === 56320 ? A.push(((o & 1023) << 10) + (i & 1023) + 65536) : (A.push(o), t--);
    } else
      A.push(o);
  }
  return A;
}, bg = function() {
  for (var e = [], A = 0; A < arguments.length; A++)
    e[A] = arguments[A];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, e);
  var t = e.length;
  if (!t)
    return "";
  for (var r = [], o = -1, i = ""; ++o < t; ) {
    var w = e[o];
    w <= 65535 ? r.push(w) : (w -= 65536, r.push((w >> 10) + 55296, w % 1024 + 56320)), (o + 1 === t || r.length > 16384) && (i += String.fromCharCode.apply(String, r), r.length = 0);
  }
  return i;
}, Hg = vg(ag), Me = "×", Eo = "÷", Ig = function(e) {
  return Hg.get(e);
}, xg = function(e, A, t) {
  var r = t - 2, o = A[r], i = A[t - 1], w = A[t];
  if (i === Co && w === vo)
    return Me;
  if (i === Co || i === vo || i === Li || w === Co || w === vo || w === Li)
    return Eo;
  if (i === Oi && [Oi, Uo, Di, Ti].indexOf(w) !== -1 || (i === Di || i === Uo) && (w === Uo || w === Fo) || (i === Ti || i === Fo) && w === Fo || w === _i || w === Ki || w === Eg || i === yg)
    return Me;
  if (i === _i && w === Ri) {
    for (; o === Ki; )
      o = A[--r];
    if (o === Ri)
      return Me;
  }
  if (i === yo && w === yo) {
    for (var a = 0; o === yo; )
      a++, o = A[--r];
    if (a % 2 === 0)
      return Me;
  }
  return Eo;
}, Sg = function(e) {
  var A = mg(e), t = A.length, r = 0, o = 0, i = A.map(Ig);
  return {
    next: function() {
      if (r >= t)
        return { done: !0, value: null };
      for (var w = Me; r < t && (w = xg(A, i, ++r)) === Me; )
        ;
      if (w !== Me || r === t) {
        var a = bg.apply(null, A.slice(o, r));
        return o = r, { value: a, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, Lg = function(e) {
  for (var A = Sg(e), t = [], r; !(r = A.next()).done; )
    r.value && t.push(r.value.slice());
  return t;
}, Kg = function(e) {
  var A = 123;
  if (e.createRange) {
    var t = e.createRange();
    if (t.getBoundingClientRect) {
      var r = e.createElement("boundtest");
      r.style.height = A + "px", r.style.display = "block", e.body.appendChild(r), t.selectNode(r);
      var o = t.getBoundingClientRect(), i = Math.round(o.height);
      if (e.body.removeChild(r), i === A)
        return !0;
    }
  }
  return !1;
}, Og = function(e) {
  var A = e.createElement("boundtest");
  A.style.width = "50px", A.style.display = "block", A.style.fontSize = "12px", A.style.letterSpacing = "0px", A.style.wordSpacing = "0px", e.body.appendChild(A);
  var t = e.createRange();
  A.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
  var r = A.firstChild, o = Un(r.data).map(function(B) {
    return fe(B);
  }), i = 0, w = {}, a = o.every(function(B, n) {
    t.setStart(r, i), t.setEnd(r, i + B.length);
    var c = t.getBoundingClientRect();
    i += B.length;
    var u = c.x > w.x || c.y > w.y;
    return w = c, n === 0 ? !0 : u;
  });
  return e.body.removeChild(A), a;
}, Dg = function() {
  return typeof new Image().crossOrigin < "u";
}, Tg = function() {
  return typeof new XMLHttpRequest().responseType == "string";
}, _g = function(e) {
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
}, Mi = function(e) {
  return e[0] === 0 && e[1] === 255 && e[2] === 0 && e[3] === 255;
}, Rg = function(e) {
  var A = e.createElement("canvas"), t = 100;
  A.width = t, A.height = t;
  var r = A.getContext("2d");
  if (!r)
    return Promise.reject(!1);
  r.fillStyle = "rgb(0, 255, 0)", r.fillRect(0, 0, t, t);
  var o = new Image(), i = A.toDataURL();
  o.src = i;
  var w = Yo(t, t, 0, 0, o);
  return r.fillStyle = "red", r.fillRect(0, 0, t, t), Ni(w).then(function(a) {
    r.drawImage(a, 0, 0);
    var B = r.getImageData(0, 0, t, t).data;
    r.fillStyle = "red", r.fillRect(0, 0, t, t);
    var n = e.createElement("div");
    return n.style.backgroundImage = "url(" + i + ")", n.style.height = t + "px", Mi(B) ? Ni(Yo(t, t, 0, 0, n)) : Promise.reject(!1);
  }).then(function(a) {
    return r.drawImage(a, 0, 0), Mi(r.getImageData(0, 0, t, t).data);
  }).catch(function() {
    return !1;
  });
}, Yo = function(e, A, t, r, o) {
  var i = "http://www.w3.org/2000/svg", w = document.createElementNS(i, "svg"), a = document.createElementNS(i, "foreignObject");
  return w.setAttributeNS(null, "width", e.toString()), w.setAttributeNS(null, "height", A.toString()), a.setAttributeNS(null, "width", "100%"), a.setAttributeNS(null, "height", "100%"), a.setAttributeNS(null, "x", t.toString()), a.setAttributeNS(null, "y", r.toString()), a.setAttributeNS(null, "externalResourcesRequired", "true"), w.appendChild(a), a.appendChild(o), w;
}, Ni = function(e) {
  return new Promise(function(A, t) {
    var r = new Image();
    r.onload = function() {
      return A(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e));
  });
}, Ee = {
  get SUPPORT_RANGE_BOUNDS() {
    var e = Kg(document);
    return Object.defineProperty(Ee, "SUPPORT_RANGE_BOUNDS", { value: e }), e;
  },
  get SUPPORT_WORD_BREAKING() {
    var e = Ee.SUPPORT_RANGE_BOUNDS && Og(document);
    return Object.defineProperty(Ee, "SUPPORT_WORD_BREAKING", { value: e }), e;
  },
  get SUPPORT_SVG_DRAWING() {
    var e = _g(document);
    return Object.defineProperty(Ee, "SUPPORT_SVG_DRAWING", { value: e }), e;
  },
  get SUPPORT_FOREIGNOBJECT_DRAWING() {
    var e = typeof Array.from == "function" && typeof window.fetch == "function" ? Rg(document) : Promise.resolve(!1);
    return Object.defineProperty(Ee, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: e }), e;
  },
  get SUPPORT_CORS_IMAGES() {
    var e = Dg();
    return Object.defineProperty(Ee, "SUPPORT_CORS_IMAGES", { value: e }), e;
  },
  get SUPPORT_RESPONSE_TYPE() {
    var e = Tg();
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
), Mg = function(e, A, t, r) {
  var o = Pg(A, t), i = [], w = 0;
  return o.forEach(function(a) {
    if (t.textDecorationLine.length || a.trim().length > 0)
      if (Ee.SUPPORT_RANGE_BOUNDS) {
        var B = Gi(r, w, a.length).getClientRects();
        if (B.length > 1) {
          var n = ia(a), c = 0;
          n.forEach(function(l) {
            i.push(new Ft(l, ur.fromDOMRectList(e, Gi(r, c + w, l.length).getClientRects()))), c += l.length;
          });
        } else
          i.push(new Ft(a, ur.fromDOMRectList(e, B)));
      } else {
        var u = r.splitText(a.length);
        i.push(new Ft(a, Ng(e, r))), r = u;
      }
    else
      Ee.SUPPORT_RANGE_BOUNDS || (r = r.splitText(a.length));
    w += a.length;
  }), i;
}, Ng = function(e, A) {
  var t = A.ownerDocument;
  if (t) {
    var r = t.createElement("html2canvaswrapper");
    r.appendChild(A.cloneNode(!0));
    var o = A.parentNode;
    if (o) {
      o.replaceChild(r, A);
      var i = vn(e, r);
      return r.firstChild && o.replaceChild(r.firstChild, r), i;
    }
  }
  return ur.EMPTY;
}, Gi = function(e, A, t) {
  var r = e.ownerDocument;
  if (!r)
    throw new Error("Node has no owner document");
  var o = r.createRange();
  return o.setStart(e, A), o.setEnd(e, A + t), o;
}, ia = function(e) {
  if (Ee.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var A = new Intl.Segmenter(void 0, { granularity: "grapheme" });
    return Array.from(A.segment(e)).map(function(t) {
      return t.segment;
    });
  }
  return Lg(e);
}, Gg = function(e, A) {
  if (Ee.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var t = new Intl.Segmenter(void 0, {
      granularity: "word"
    });
    return Array.from(t.segment(e)).map(function(r) {
      return r.segment;
    });
  }
  return kg(e, A);
}, Pg = function(e, A) {
  return A.letterSpacing !== 0 ? ia(e) : Gg(e, A);
}, Vg = [32, 160, 4961, 65792, 65793, 4153, 4241], kg = function(e, A) {
  for (var t = hB(e, {
    lineBreak: A.lineBreak,
    wordBreak: A.overflowWrap === "break-word" ? "break-word" : A.wordBreak
  }), r = [], o, i = function() {
    if (o.value) {
      var w = o.value.slice(), a = Un(w), B = "";
      a.forEach(function(n) {
        Vg.indexOf(n) === -1 ? B += fe(n) : (B.length && r.push(B), r.push(fe(n)), B = "");
      }), B.length && r.push(B);
    }
  }; !(o = t.next()).done; )
    i();
  return r;
}, jg = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(A, t, r) {
      this.text = Xg(t.data, r.textTransform), this.textBounds = Mg(A, this.text, r, t);
    }
    return e;
  }()
), Xg = function(e, A) {
  switch (A) {
    case 1:
      return e.toLowerCase();
    case 3:
      return e.replace(Jg, Wg);
    case 2:
      return e.toUpperCase();
    default:
      return e;
  }
}, Jg = /(^|\s|:|-|\(|\))([a-z])/g, Wg = function(e, A, t) {
  return e.length > 0 ? A + t.toUpperCase() : e;
}, _s = (
  /** @class */
  function(e) {
    Ye(A, e);
    function A(t, r) {
      var o = e.call(this, t, r) || this;
      return o.src = r.currentSrc || r.src, o.intrinsicWidth = r.naturalWidth, o.intrinsicHeight = r.naturalHeight, o.context.cache.addImage(o.src), o;
    }
    return A;
  }(rr)
), Rs = (
  /** @class */
  function(e) {
    Ye(A, e);
    function A(t, r) {
      var o = e.call(this, t, r) || this;
      return o.canvas = r, o.intrinsicWidth = r.width, o.intrinsicHeight = r.height, o;
    }
    return A;
  }(rr)
), Ms = (
  /** @class */
  function(e) {
    Ye(A, e);
    function A(t, r) {
      var o = e.call(this, t, r) || this, i = new XMLSerializer(), w = vn(t, r);
      return r.setAttribute("width", w.width + "px"), r.setAttribute("height", w.height + "px"), o.svg = "data:image/svg+xml," + encodeURIComponent(i.serializeToString(r)), o.intrinsicWidth = r.width.baseVal.value, o.intrinsicHeight = r.height.baseVal.value, o.context.cache.addImage(o.svg), o;
    }
    return A;
  }(rr)
), Ns = (
  /** @class */
  function(e) {
    Ye(A, e);
    function A(t, r) {
      var o = e.call(this, t, r) || this;
      return o.value = r.value, o;
    }
    return A;
  }(rr)
), Zo = (
  /** @class */
  function(e) {
    Ye(A, e);
    function A(t, r) {
      var o = e.call(this, t, r) || this;
      return o.start = r.start, o.reversed = typeof r.reversed == "boolean" && r.reversed === !0, o;
    }
    return A;
  }(rr)
), Yg = [
  {
    type: 15,
    flags: 0,
    unit: "px",
    number: 3
  }
], Zg = [
  {
    type: 16,
    flags: 0,
    number: 50
  }
], zg = function(e) {
  return e.width > e.height ? new ur(e.left + (e.width - e.height) / 2, e.top, e.height, e.height) : e.width < e.height ? new ur(e.left, e.top + (e.height - e.width) / 2, e.width, e.width) : e;
}, qg = function(e) {
  var A = e.type === $g ? new Array(e.value.length + 1).join("•") : e.value;
  return A.length === 0 ? e.placeholder || "" : A;
}, gn = "checkbox", wn = "radio", $g = "password", Pi = 707406591, sa = (
  /** @class */
  function(e) {
    Ye(A, e);
    function A(t, r) {
      var o = e.call(this, t, r) || this;
      switch (o.type = r.type.toLowerCase(), o.checked = r.checked, o.value = qg(r), (o.type === gn || o.type === wn) && (o.styles.backgroundColor = 3739148031, o.styles.borderTopColor = o.styles.borderRightColor = o.styles.borderBottomColor = o.styles.borderLeftColor = 2779096575, o.styles.borderTopWidth = o.styles.borderRightWidth = o.styles.borderBottomWidth = o.styles.borderLeftWidth = 1, o.styles.borderTopStyle = o.styles.borderRightStyle = o.styles.borderBottomStyle = o.styles.borderLeftStyle = 1, o.styles.backgroundClip = [
        0
        /* BORDER_BOX */
      ], o.styles.backgroundOrigin = [
        0
        /* BORDER_BOX */
      ], o.bounds = zg(o.bounds)), o.type) {
        case gn:
          o.styles.borderTopRightRadius = o.styles.borderTopLeftRadius = o.styles.borderBottomRightRadius = o.styles.borderBottomLeftRadius = Yg;
          break;
        case wn:
          o.styles.borderTopRightRadius = o.styles.borderTopLeftRadius = o.styles.borderBottomRightRadius = o.styles.borderBottomLeftRadius = Zg;
          break;
      }
      return o;
    }
    return A;
  }(rr)
), Gs = (
  /** @class */
  function(e) {
    Ye(A, e);
    function A(t, r) {
      var o = e.call(this, t, r) || this, i = r.options[r.selectedIndex || 0];
      return o.value = i && i.text || "", o;
    }
    return A;
  }(rr)
), Ps = (
  /** @class */
  function(e) {
    Ye(A, e);
    function A(t, r) {
      var o = e.call(this, t, r) || this;
      return o.value = r.value, o;
    }
    return A;
  }(rr)
), Vs = (
  /** @class */
  function(e) {
    Ye(A, e);
    function A(t, r) {
      var o = e.call(this, t, r) || this;
      o.src = r.src, o.width = parseInt(r.width, 10) || 0, o.height = parseInt(r.height, 10) || 0, o.backgroundColor = o.styles.backgroundColor;
      try {
        if (r.contentWindow && r.contentWindow.document && r.contentWindow.document.documentElement) {
          o.tree = js(t, r.contentWindow.document.documentElement);
          var i = r.contentWindow.document.documentElement ? vt(t, getComputedStyle(r.contentWindow.document.documentElement).backgroundColor) : cr.TRANSPARENT, w = r.contentWindow.document.body ? vt(t, getComputedStyle(r.contentWindow.document.body).backgroundColor) : cr.TRANSPARENT;
          o.backgroundColor = Ur(i) ? Ur(w) ? o.styles.backgroundColor : w : i;
        }
      } catch {
      }
      return o;
    }
    return A;
  }(rr)
), Aw = ["OL", "UL", "MENU"], sn = function(e, A, t, r) {
  for (var o = A.firstChild, i = void 0; o; o = i)
    if (i = o.nextSibling, Xs(o) && o.data.trim().length > 0)
      t.textNodes.push(new jg(e, o, t.styles));
    else if (Yr(o))
      if (Zs(o) && o.assignedNodes)
        o.assignedNodes().forEach(function(a) {
          return sn(e, a, t, r);
        });
      else {
        var w = ks(e, o);
        w.styles.isVisible() && (ew(o, w, r) ? w.flags |= 4 : rw(w.styles) && (w.flags |= 2), Aw.indexOf(o.tagName) !== -1 && (w.flags |= 8), t.elements.push(w), o.slot, o.shadowRoot ? sn(e, o.shadowRoot, w, r) : !hn(o) && !Js(o) && !dn(o) && sn(e, o, w, r));
      }
}, ks = function(e, A) {
  return qo(A) ? new _s(e, A) : Ws(A) ? new Rs(e, A) : Js(A) ? new Ms(e, A) : tw(A) ? new Ns(e, A) : nw(A) ? new Zo(e, A) : ow(A) ? new sa(e, A) : dn(A) ? new Gs(e, A) : hn(A) ? new Ps(e, A) : Ys(A) ? new Vs(e, A) : new rr(e, A);
}, js = function(e, A) {
  var t = ks(e, A);
  return t.flags |= 4, sn(e, A, t, t), t;
}, ew = function(e, A, t) {
  return A.styles.isPositionedWithZIndex() || A.styles.opacity < 1 || A.styles.isTransformed() || ca(e) && t.styles.isTransparent();
}, rw = function(e) {
  return e.isPositioned() || e.isFloating();
}, Xs = function(e) {
  return e.nodeType === Node.TEXT_NODE;
}, Yr = function(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}, zo = function(e) {
  return Yr(e) && typeof e.style < "u" && !cn(e);
}, cn = function(e) {
  return typeof e.className == "object";
}, tw = function(e) {
  return e.tagName === "LI";
}, nw = function(e) {
  return e.tagName === "OL";
}, ow = function(e) {
  return e.tagName === "INPUT";
}, aw = function(e) {
  return e.tagName === "HTML";
}, Js = function(e) {
  return e.tagName === "svg";
}, ca = function(e) {
  return e.tagName === "BODY";
}, Ws = function(e) {
  return e.tagName === "CANVAS";
}, Vi = function(e) {
  return e.tagName === "VIDEO";
}, qo = function(e) {
  return e.tagName === "IMG";
}, Ys = function(e) {
  return e.tagName === "IFRAME";
}, ki = function(e) {
  return e.tagName === "STYLE";
}, iw = function(e) {
  return e.tagName === "SCRIPT";
}, hn = function(e) {
  return e.tagName === "TEXTAREA";
}, dn = function(e) {
  return e.tagName === "SELECT";
}, Zs = function(e) {
  return e.tagName === "SLOT";
}, ji = function(e) {
  return e.tagName.indexOf("-") > 0;
}, sw = (
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
      var t = this, r = A.counterIncrement, o = A.counterReset, i = !0;
      r !== null && r.forEach(function(a) {
        var B = t.counters[a.counter];
        B && a.increment !== 0 && (i = !1, B.length || B.push(1), B[Math.max(0, B.length - 1)] += a.increment);
      });
      var w = [];
      return i && o.forEach(function(a) {
        var B = t.counters[a.counter];
        w.push(a.counter), B || (B = t.counters[a.counter] = []), B.push(a.reset);
      }), w;
    }, e;
  }()
), Xi = {
  integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
  values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
}, Ji = {
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
}, cw = {
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
}, kr = function(e, A, t, r, o, i) {
  return e < A || e > t ? bt(e, o, i.length > 0) : r.integers.reduce(function(w, a, B) {
    for (; e >= a; )
      e -= a, w += r.values[B];
    return w;
  }, "") + i;
}, zs = function(e, A, t, r) {
  var o = "";
  do
    t || e--, o = r(e) + o, e /= A;
  while (e * A >= A);
  return o;
}, ue = function(e, A, t, r, o) {
  var i = t - A + 1;
  return (e < 0 ? "-" : "") + (zs(Math.abs(e), i, r, function(w) {
    return fe(Math.floor(w % i) + A);
  }) + o);
}, Ir = function(e, A, t) {
  t === void 0 && (t = ". ");
  var r = A.length;
  return zs(Math.abs(e), r, !1, function(o) {
    return A[Math.floor(o % r)];
  }) + t;
}, Jr = 1, wr = 2, hr = 4, pt = 8, sr = function(e, A, t, r, o, i) {
  if (e < -9999 || e > 9999)
    return bt(e, 4, o.length > 0);
  var w = Math.abs(e), a = o;
  if (w === 0)
    return A[0] + a;
  for (var B = 0; w > 0 && B <= 4; B++) {
    var n = w % 10;
    n === 0 && Qe(i, Jr) && a !== "" ? a = A[n] + a : n > 1 || n === 1 && B === 0 || n === 1 && B === 1 && Qe(i, wr) || n === 1 && B === 1 && Qe(i, hr) && e > 100 || n === 1 && B > 1 && Qe(i, pt) ? a = A[n] + (B > 0 ? t[B - 1] : "") + a : n === 1 && B > 0 && (a = t[B - 1] + a), w = Math.floor(w / 10);
  }
  return (e < 0 ? r : "") + a;
}, Wi = "十百千萬", Yi = "拾佰仟萬", Zi = "マイナス", mo = "마이너스", bt = function(e, A, t) {
  var r = t ? ". " : "", o = t ? "、" : "", i = t ? ", " : "", w = t ? " " : "";
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
      return kr(e, 1, 3999, Xi, 3, r).toLowerCase();
    case 7:
      return kr(e, 1, 3999, Xi, 3, r);
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
      return kr(e, 1, 9999, Ji, 3, r);
    case 35:
      return kr(e, 1, 9999, Ji, 3, r).toLowerCase();
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
      return sr(e, "零一二三四五六七八九", Wi, "負", o, wr | hr | pt);
    case 47:
      return sr(e, "零壹貳參肆伍陸柒捌玖", Yi, "負", o, Jr | wr | hr | pt);
    case 42:
      return sr(e, "零一二三四五六七八九", Wi, "负", o, wr | hr | pt);
    case 41:
      return sr(e, "零壹贰叁肆伍陆柒捌玖", Yi, "负", o, Jr | wr | hr | pt);
    case 26:
      return sr(e, "〇一二三四五六七八九", "十百千万", Zi, o, 0);
    case 25:
      return sr(e, "零壱弐参四伍六七八九", "拾百千万", Zi, o, Jr | wr | hr);
    case 31:
      return sr(e, "영일이삼사오육칠팔구", "십백천만", mo, i, Jr | wr | hr);
    case 33:
      return sr(e, "零一二三四五六七八九", "十百千萬", mo, i, 0);
    case 32:
      return sr(e, "零壹貳參四五六七八九", "拾百千", mo, i, Jr | wr | hr);
    case 18:
      return ue(e, 2406, 2415, !0, r);
    case 20:
      return kr(e, 1, 19999, uw, 3, r);
    case 21:
      return ue(e, 2790, 2799, !0, r);
    case 22:
      return ue(e, 2662, 2671, !0, r);
    case 22:
      return kr(e, 1, 10999, cw, 3, r);
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
}, qs = "data-html2canvas-ignore", zi = (
  /** @class */
  function() {
    function e(A, t, r) {
      if (this.context = A, this.options = r, this.scrolledElements = [], this.referenceElement = t, this.counters = new sw(), this.quoteDepth = 0, !t.ownerDocument)
        throw new Error("Cloned element does not have an owner document");
      this.documentElement = this.cloneNode(t.ownerDocument.documentElement, !1);
    }
    return e.prototype.toIFrame = function(A, t) {
      var r = this, o = Bw(A, t);
      if (!o.contentWindow)
        return Promise.reject("Unable to find iframe window");
      var i = A.defaultView.pageXOffset, w = A.defaultView.pageYOffset, a = o.contentWindow, B = a.document, n = gw(o).then(function() {
        return Le(r, void 0, void 0, function() {
          var c, u;
          return He(this, function(l) {
            switch (l.label) {
              case 0:
                return this.scrolledElements.forEach(Qw), a && (a.scrollTo(t.left, t.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (a.scrollY !== t.top || a.scrollX !== t.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(a.scrollX - t.left, a.scrollY - t.top, 0, 0))), c = this.options.onclone, u = this.clonedReferenceElement, typeof u > "u" ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : B.fonts && B.fonts.ready ? [4, B.fonts.ready] : [3, 2];
              case 1:
                l.sent(), l.label = 2;
              case 2:
                return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, lw(B)] : [3, 4];
              case 3:
                l.sent(), l.label = 4;
              case 4:
                return typeof c == "function" ? [2, Promise.resolve().then(function() {
                  return c(B, u);
                }).then(function() {
                  return o;
                })] : [2, o];
            }
          });
        });
      });
      return B.open(), B.write(hw(document.doctype) + "<html></html>"), dw(this.referenceElement.ownerDocument, i, w), B.replaceChild(B.adoptNode(this.documentElement), B.documentElement), B.close(), n;
    }, e.prototype.createElementClone = function(A) {
      if (Wo(
        A,
        2
        /* CLONE */
      ))
        debugger;
      if (Ws(A))
        return this.createCanvasClone(A);
      if (Vi(A))
        return this.createVideoClone(A);
      if (ki(A))
        return this.createStyleClone(A);
      var t = A.cloneNode(!1);
      return qo(t) && (qo(A) && A.currentSrc && A.currentSrc !== A.src && (t.src = A.currentSrc, t.srcset = ""), t.loading === "lazy" && (t.loading = "eager")), ji(t) ? this.createCustomElementClone(t) : t;
    }, e.prototype.createCustomElementClone = function(A) {
      var t = document.createElement("html2canvascustomelement");
      return bo(A.style, t), t;
    }, e.prototype.createStyleClone = function(A) {
      try {
        var t = A.sheet;
        if (t && t.cssRules) {
          var r = [].slice.call(t.cssRules, 0).reduce(function(i, w) {
            return w && typeof w.cssText == "string" ? i + w.cssText : i;
          }, ""), o = A.cloneNode(!1);
          return o.textContent = r, o;
        }
      } catch (i) {
        if (this.context.logger.error("Unable to access cssRules property", i), i.name !== "SecurityError")
          throw i;
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
        var i = A.getContext("2d"), w = o.getContext("2d");
        if (w)
          if (!this.options.allowTaint && i)
            w.putImageData(i.getImageData(0, 0, A.width, A.height), 0, 0);
          else {
            var a = (t = A.getContext("webgl2")) !== null && t !== void 0 ? t : A.getContext("webgl");
            if (a) {
              var B = a.getContextAttributes();
              (B == null ? void 0 : B.preserveDrawingBuffer) === !1 && this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", A);
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
      (!Yr(t) || !iw(t) && !t.hasAttribute(qs) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(t))) && (!this.options.copyStyles || !Yr(t) || !ki(t)) && A.appendChild(this.cloneNode(t, r));
    }, e.prototype.cloneChildNodes = function(A, t, r) {
      for (var o = this, i = A.shadowRoot ? A.shadowRoot.firstChild : A.firstChild; i; i = i.nextSibling)
        if (Yr(i) && Zs(i) && typeof i.assignedNodes == "function") {
          var w = i.assignedNodes();
          w.length && w.forEach(function(a) {
            return o.appendChildNode(t, a, r);
          });
        } else
          this.appendChildNode(t, i, r);
    }, e.prototype.cloneNode = function(A, t) {
      if (Xs(A))
        return document.createTextNode(A.data);
      if (!A.ownerDocument)
        return A.cloneNode(!1);
      var r = A.ownerDocument.defaultView;
      if (r && Yr(A) && (zo(A) || cn(A))) {
        var o = this.createElementClone(A);
        o.style.transitionProperty = "none";
        var i = r.getComputedStyle(A), w = r.getComputedStyle(A, ":before"), a = r.getComputedStyle(A, ":after");
        this.referenceElement === A && zo(o) && (this.clonedReferenceElement = o), ca(o) && vw(o);
        var B = this.counters.parse(new Hi(this.context, i)), n = this.resolvePseudoContent(A, o, w, yt.BEFORE);
        ji(A) && (t = !0), Vi(A) || this.cloneChildNodes(A, o, t), n && o.insertBefore(n, o.firstChild);
        var c = this.resolvePseudoContent(A, o, a, yt.AFTER);
        return c && o.appendChild(c), this.counters.pop(B), (i && (this.options.copyStyles || cn(A)) && !Ys(A) || t) && bo(i, o), (A.scrollTop !== 0 || A.scrollLeft !== 0) && this.scrolledElements.push([o, A.scrollLeft, A.scrollTop]), (hn(A) || dn(A)) && (hn(o) || dn(o)) && (o.value = A.value), o;
      }
      return A.cloneNode(!1);
    }, e.prototype.resolvePseudoContent = function(A, t, r, o) {
      var i = this;
      if (r) {
        var w = r.content, a = t.ownerDocument;
        if (!(!a || !w || w === "none" || w === "-moz-alt-content" || r.display === "none")) {
          this.counters.parse(new Hi(this.context, r));
          var B = new tg(this.context, r), n = a.createElement("html2canvaspseudoelement");
          bo(r, n), B.content.forEach(function(u) {
            if (u.type === 0)
              n.appendChild(a.createTextNode(u.value));
            else if (u.type === 22) {
              var l = a.createElement("img");
              l.src = u.value, l.style.opacity = "1", n.appendChild(l);
            } else if (u.type === 18) {
              if (u.name === "attr") {
                var h = u.values.filter(ZA);
                h.length && n.appendChild(a.createTextNode(A.getAttribute(h[0].value) || ""));
              } else if (u.name === "counter") {
                var d = u.values.filter(qr), p = d[0], Q = d[1];
                if (p && ZA(p)) {
                  var v = i.counters.getCounterValue(p.value), F = Q && ZA(Q) ? Jo.parse(i.context, Q.value) : 3;
                  n.appendChild(a.createTextNode(bt(v, F, !1)));
                }
              } else if (u.name === "counters") {
                var H = u.values.filter(qr), p = H[0], x = H[1], Q = H[2];
                if (p && ZA(p)) {
                  var O = i.counters.getCounterValues(p.value), S = Q && ZA(Q) ? Jo.parse(i.context, Q.value) : 3, N = x && x.type === 0 ? x.value : "", G = O.map(function(V) {
                    return bt(V, S, !1);
                  }).join(N);
                  n.appendChild(a.createTextNode(G));
                }
              }
            } else if (u.type === 20)
              switch (u.value) {
                case "open-quote":
                  n.appendChild(a.createTextNode(bi(B.quotes, i.quoteDepth++, !0)));
                  break;
                case "close-quote":
                  n.appendChild(a.createTextNode(bi(B.quotes, --i.quoteDepth, !1)));
                  break;
                default:
                  n.appendChild(a.createTextNode(u.value));
              }
          }), n.className = $o + " " + Aa;
          var c = o === yt.BEFORE ? " " + $o : " " + Aa;
          return cn(t) ? t.className.baseValue += c : t.className += c, n;
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
var Bw = function(e, A) {
  var t = e.createElement("iframe");
  return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = A.width.toString(), t.height = A.height.toString(), t.scrolling = "no", t.setAttribute(qs, "true"), e.body.appendChild(t), t;
}, fw = function(e) {
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
}, lw = function(e) {
  return Promise.all([].slice.call(e.images, 0).map(fw));
}, gw = function(e) {
  return new Promise(function(A, t) {
    var r = e.contentWindow;
    if (!r)
      return t("No window assigned for iframe");
    var o = r.document;
    r.onload = e.onload = function() {
      r.onload = e.onload = null;
      var i = setInterval(function() {
        o.body.childNodes.length > 0 && o.readyState === "complete" && (clearInterval(i), A(e));
      }, 50);
    };
  });
}, ww = [
  "all",
  "d",
  "content"
  // Safari shows pseudoelements if content is set
], bo = function(e, A) {
  for (var t = e.length - 1; t >= 0; t--) {
    var r = e.item(t);
    ww.indexOf(r) === -1 && A.style.setProperty(r, e.getPropertyValue(r));
  }
  return A;
}, hw = function(e) {
  var A = "";
  return e && (A += "<!DOCTYPE ", e.name && (A += e.name), e.internalSubset && (A += e.internalSubset), e.publicId && (A += '"' + e.publicId + '"'), e.systemId && (A += '"' + e.systemId + '"'), A += ">"), A;
}, dw = function(e, A, t) {
  e && e.defaultView && (A !== e.defaultView.pageXOffset || t !== e.defaultView.pageYOffset) && e.defaultView.scrollTo(A, t);
}, Qw = function(e) {
  var A = e[0], t = e[1], r = e[2];
  A.scrollLeft = t, A.scrollTop = r;
}, pw = ":before", Cw = ":after", $o = "___html2canvas___pseudoelement_before", Aa = "___html2canvas___pseudoelement_after", qi = `{
    content: "" !important;
    display: none !important;
}`, vw = function(e) {
  Uw(e, "." + $o + pw + qi + `
         .` + Aa + Cw + qi);
}, Uw = function(e, A) {
  var t = e.ownerDocument;
  if (t) {
    var r = t.createElement("style");
    r.textContent = A, e.appendChild(r);
  }
}, $s = (
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
), Fw = (
  /** @class */
  function() {
    function e(A, t) {
      this.context = A, this._options = t, this._cache = {};
    }
    return e.prototype.addImage = function(A) {
      var t = Promise.resolve();
      return this.has(A) || (Io(A) || bw(A)) && (this._cache[A] = this.loadImage(A)).catch(function() {
      }), t;
    }, e.prototype.match = function(A) {
      return this._cache[A];
    }, e.prototype.loadImage = function(A) {
      return Le(this, void 0, void 0, function() {
        var t, r, o, i, w = this;
        return He(this, function(a) {
          switch (a.label) {
            case 0:
              return t = $s.isSameOrigin(A), r = !Ho(A) && this._options.useCORS === !0 && Ee.SUPPORT_CORS_IMAGES && !t, o = !Ho(A) && !t && !Io(A) && typeof this._options.proxy == "string" && Ee.SUPPORT_CORS_XHR && !r, !t && this._options.allowTaint === !1 && !Ho(A) && !Io(A) && !o && !r ? [
                2
                /*return*/
              ] : (i = A, o ? [4, this.proxy(i)] : [3, 2]);
            case 1:
              i = a.sent(), a.label = 2;
            case 2:
              return this.context.logger.debug("Added image " + A.substring(0, 256)), [4, new Promise(function(B, n) {
                var c = new Image();
                c.onload = function() {
                  return B(c);
                }, c.onerror = n, (Hw(i) || r) && (c.crossOrigin = "anonymous"), c.src = i, c.complete === !0 && setTimeout(function() {
                  return B(c);
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
      return new Promise(function(i, w) {
        var a = Ee.SUPPORT_RESPONSE_TYPE ? "blob" : "text", B = new XMLHttpRequest();
        B.onload = function() {
          if (B.status === 200)
            if (a === "text")
              i(B.response);
            else {
              var u = new FileReader();
              u.addEventListener("load", function() {
                return i(u.result);
              }, !1), u.addEventListener("error", function(l) {
                return w(l);
              }, !1), u.readAsDataURL(B.response);
            }
          else
            w("Failed to proxy resource " + o + " with status code " + B.status);
        }, B.onerror = w;
        var n = r.indexOf("?") > -1 ? "&" : "?";
        if (B.open("GET", "" + r + n + "url=" + encodeURIComponent(A) + "&responseType=" + a), a !== "text" && B instanceof XMLHttpRequest && (B.responseType = a), t._options.imageTimeout) {
          var c = t._options.imageTimeout;
          B.timeout = c, B.ontimeout = function() {
            return w("Timed out (" + c + "ms) proxying " + o);
          };
        }
        B.send();
      });
    }, e;
  }()
), yw = /^data:image\/svg\+xml/i, Ew = /^data:image\/.*;base64,/i, mw = /^data:image\/.*/i, bw = function(e) {
  return Ee.SUPPORT_SVG_DRAWING || !Iw(e);
}, Ho = function(e) {
  return mw.test(e);
}, Hw = function(e) {
  return Ew.test(e);
}, Io = function(e) {
  return e.substr(0, 4) === "blob";
}, Iw = function(e) {
  return e.substr(-3).toLowerCase() === "svg" || yw.test(e);
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
), jr = function(e, A, t) {
  return new gA(e.x + (A.x - e.x) * t, e.y + (A.y - e.y) * t);
}, An = (
  /** @class */
  function() {
    function e(A, t, r, o) {
      this.type = 1, this.start = A, this.startControl = t, this.endControl = r, this.end = o;
    }
    return e.prototype.subdivide = function(A, t) {
      var r = jr(this.start, this.startControl, A), o = jr(this.startControl, this.endControl, A), i = jr(this.endControl, this.end, A), w = jr(r, o, A), a = jr(o, i, A), B = jr(w, a, A);
      return t ? new e(this.start, r, w, B) : new e(B, a, i, this.end);
    }, e.prototype.add = function(A, t) {
      return new e(this.start.add(A, t), this.startControl.add(A, t), this.endControl.add(A, t), this.end.add(A, t));
    }, e.prototype.reverse = function() {
      return new e(this.end, this.endControl, this.startControl, this.start);
    }, e;
  }()
), Ne = function(e) {
  return e.type === 1;
}, xw = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(A) {
      var t = A.styles, r = A.bounds, o = dt(t.borderTopLeftRadius, r.width, r.height), i = o[0], w = o[1], a = dt(t.borderTopRightRadius, r.width, r.height), B = a[0], n = a[1], c = dt(t.borderBottomRightRadius, r.width, r.height), u = c[0], l = c[1], h = dt(t.borderBottomLeftRadius, r.width, r.height), d = h[0], p = h[1], Q = [];
      Q.push((i + B) / r.width), Q.push((d + u) / r.width), Q.push((w + p) / r.height), Q.push((n + l) / r.height);
      var v = Math.max.apply(Math, Q);
      v > 1 && (i /= v, w /= v, B /= v, n /= v, u /= v, l /= v, d /= v, p /= v);
      var F = r.width - B, H = r.height - l, x = r.width - u, O = r.height - p, S = t.borderTopWidth, N = t.borderRightWidth, G = t.borderBottomWidth, b = t.borderLeftWidth, P = qA(t.paddingTop, A.bounds.width), V = qA(t.paddingRight, A.bounds.width), k = qA(t.paddingBottom, A.bounds.width), L = qA(t.paddingLeft, A.bounds.width);
      this.topLeftBorderDoubleOuterBox = i > 0 || w > 0 ? Ae(r.left + b / 3, r.top + S / 3, i - b / 3, w - S / 3, XA.TOP_LEFT) : new gA(r.left + b / 3, r.top + S / 3), this.topRightBorderDoubleOuterBox = i > 0 || w > 0 ? Ae(r.left + F, r.top + S / 3, B - N / 3, n - S / 3, XA.TOP_RIGHT) : new gA(r.left + r.width - N / 3, r.top + S / 3), this.bottomRightBorderDoubleOuterBox = u > 0 || l > 0 ? Ae(r.left + x, r.top + H, u - N / 3, l - G / 3, XA.BOTTOM_RIGHT) : new gA(r.left + r.width - N / 3, r.top + r.height - G / 3), this.bottomLeftBorderDoubleOuterBox = d > 0 || p > 0 ? Ae(r.left + b / 3, r.top + O, d - b / 3, p - G / 3, XA.BOTTOM_LEFT) : new gA(r.left + b / 3, r.top + r.height - G / 3), this.topLeftBorderDoubleInnerBox = i > 0 || w > 0 ? Ae(r.left + b * 2 / 3, r.top + S * 2 / 3, i - b * 2 / 3, w - S * 2 / 3, XA.TOP_LEFT) : new gA(r.left + b * 2 / 3, r.top + S * 2 / 3), this.topRightBorderDoubleInnerBox = i > 0 || w > 0 ? Ae(r.left + F, r.top + S * 2 / 3, B - N * 2 / 3, n - S * 2 / 3, XA.TOP_RIGHT) : new gA(r.left + r.width - N * 2 / 3, r.top + S * 2 / 3), this.bottomRightBorderDoubleInnerBox = u > 0 || l > 0 ? Ae(r.left + x, r.top + H, u - N * 2 / 3, l - G * 2 / 3, XA.BOTTOM_RIGHT) : new gA(r.left + r.width - N * 2 / 3, r.top + r.height - G * 2 / 3), this.bottomLeftBorderDoubleInnerBox = d > 0 || p > 0 ? Ae(r.left + b * 2 / 3, r.top + O, d - b * 2 / 3, p - G * 2 / 3, XA.BOTTOM_LEFT) : new gA(r.left + b * 2 / 3, r.top + r.height - G * 2 / 3), this.topLeftBorderStroke = i > 0 || w > 0 ? Ae(r.left + b / 2, r.top + S / 2, i - b / 2, w - S / 2, XA.TOP_LEFT) : new gA(r.left + b / 2, r.top + S / 2), this.topRightBorderStroke = i > 0 || w > 0 ? Ae(r.left + F, r.top + S / 2, B - N / 2, n - S / 2, XA.TOP_RIGHT) : new gA(r.left + r.width - N / 2, r.top + S / 2), this.bottomRightBorderStroke = u > 0 || l > 0 ? Ae(r.left + x, r.top + H, u - N / 2, l - G / 2, XA.BOTTOM_RIGHT) : new gA(r.left + r.width - N / 2, r.top + r.height - G / 2), this.bottomLeftBorderStroke = d > 0 || p > 0 ? Ae(r.left + b / 2, r.top + O, d - b / 2, p - G / 2, XA.BOTTOM_LEFT) : new gA(r.left + b / 2, r.top + r.height - G / 2), this.topLeftBorderBox = i > 0 || w > 0 ? Ae(r.left, r.top, i, w, XA.TOP_LEFT) : new gA(r.left, r.top), this.topRightBorderBox = B > 0 || n > 0 ? Ae(r.left + F, r.top, B, n, XA.TOP_RIGHT) : new gA(r.left + r.width, r.top), this.bottomRightBorderBox = u > 0 || l > 0 ? Ae(r.left + x, r.top + H, u, l, XA.BOTTOM_RIGHT) : new gA(r.left + r.width, r.top + r.height), this.bottomLeftBorderBox = d > 0 || p > 0 ? Ae(r.left, r.top + O, d, p, XA.BOTTOM_LEFT) : new gA(r.left, r.top + r.height), this.topLeftPaddingBox = i > 0 || w > 0 ? Ae(r.left + b, r.top + S, Math.max(0, i - b), Math.max(0, w - S), XA.TOP_LEFT) : new gA(r.left + b, r.top + S), this.topRightPaddingBox = B > 0 || n > 0 ? Ae(r.left + Math.min(F, r.width - N), r.top + S, F > r.width + N ? 0 : Math.max(0, B - N), Math.max(0, n - S), XA.TOP_RIGHT) : new gA(r.left + r.width - N, r.top + S), this.bottomRightPaddingBox = u > 0 || l > 0 ? Ae(r.left + Math.min(x, r.width - b), r.top + Math.min(H, r.height - G), Math.max(0, u - N), Math.max(0, l - G), XA.BOTTOM_RIGHT) : new gA(r.left + r.width - N, r.top + r.height - G), this.bottomLeftPaddingBox = d > 0 || p > 0 ? Ae(r.left + b, r.top + Math.min(O, r.height - G), Math.max(0, d - b), Math.max(0, p - G), XA.BOTTOM_LEFT) : new gA(r.left + b, r.top + r.height - G), this.topLeftContentBox = i > 0 || w > 0 ? Ae(r.left + b + L, r.top + S + P, Math.max(0, i - (b + L)), Math.max(0, w - (S + P)), XA.TOP_LEFT) : new gA(r.left + b + L, r.top + S + P), this.topRightContentBox = B > 0 || n > 0 ? Ae(r.left + Math.min(F, r.width + b + L), r.top + S + P, F > r.width + b + L ? 0 : B - b + L, n - (S + P), XA.TOP_RIGHT) : new gA(r.left + r.width - (N + V), r.top + S + P), this.bottomRightContentBox = u > 0 || l > 0 ? Ae(r.left + Math.min(x, r.width - (b + L)), r.top + Math.min(H, r.height + S + P), Math.max(0, u - (N + V)), l - (G + k), XA.BOTTOM_RIGHT) : new gA(r.left + r.width - (N + V), r.top + r.height - (G + k)), this.bottomLeftContentBox = d > 0 || p > 0 ? Ae(r.left + b + L, r.top + O, Math.max(0, d - (b + L)), p - (G + k), XA.BOTTOM_LEFT) : new gA(r.left + b + L, r.top + r.height - (G + k));
    }
    return e;
  }()
), XA;
(function(e) {
  e[e.TOP_LEFT = 0] = "TOP_LEFT", e[e.TOP_RIGHT = 1] = "TOP_RIGHT", e[e.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", e[e.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
})(XA || (XA = {}));
var Ae = function(e, A, t, r, o) {
  var i = 4 * ((Math.sqrt(2) - 1) / 3), w = t * i, a = r * i, B = e + t, n = A + r;
  switch (o) {
    case XA.TOP_LEFT:
      return new An(new gA(e, n), new gA(e, n - a), new gA(B - w, A), new gA(B, A));
    case XA.TOP_RIGHT:
      return new An(new gA(e, A), new gA(e + w, A), new gA(B, n - a), new gA(B, n));
    case XA.BOTTOM_RIGHT:
      return new An(new gA(B, A), new gA(B, A + a), new gA(e + w, n), new gA(e, n));
    case XA.BOTTOM_LEFT:
    default:
      return new An(new gA(B, n), new gA(B - w, n), new gA(e, A + a), new gA(e, A));
  }
}, Qn = function(e) {
  return [e.topLeftBorderBox, e.topRightBorderBox, e.bottomRightBorderBox, e.bottomLeftBorderBox];
}, Sw = function(e) {
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
}, Lw = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(A, t, r) {
      this.offsetX = A, this.offsetY = t, this.matrix = r, this.type = 0, this.target = 6;
    }
    return e;
  }()
), en = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(A, t) {
      this.path = A, this.target = t, this.type = 1;
    }
    return e;
  }()
), Kw = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(A) {
      this.opacity = A, this.type = 2, this.target = 6;
    }
    return e;
  }()
), Ow = function(e) {
  return e.type === 0;
}, Ac = function(e) {
  return e.type === 1;
}, Dw = function(e) {
  return e.type === 2;
}, $i = function(e, A) {
  return e.length === A.length ? e.some(function(t, r) {
    return t === A[r];
  }) : !1;
}, Tw = function(e, A, t, r, o) {
  return e.map(function(i, w) {
    switch (w) {
      case 0:
        return i.add(A, t);
      case 1:
        return i.add(A + r, t);
      case 2:
        return i.add(A + r, t + o);
      case 3:
        return i.add(A, t + o);
    }
    return i;
  });
}, ec = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(A) {
      this.element = A, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
    }
    return e;
  }()
), rc = (
  /** @class */
  function() {
    function e(A, t) {
      if (this.container = A, this.parent = t, this.effects = [], this.curves = new xw(this.container), this.container.styles.opacity < 1 && this.effects.push(new Kw(this.container.styles.opacity)), this.container.styles.transform !== null) {
        var r = this.container.bounds.left + this.container.styles.transformOrigin[0].number, o = this.container.bounds.top + this.container.styles.transformOrigin[1].number, i = this.container.styles.transform;
        this.effects.push(new Lw(r, o, i));
      }
      if (this.container.styles.overflowX !== 0) {
        var w = Qn(this.curves), a = pn(this.curves);
        $i(w, a) ? this.effects.push(new en(
          w,
          6
          /* CONTENT */
        )) : (this.effects.push(new en(
          w,
          2
          /* BACKGROUND_BORDERS */
        )), this.effects.push(new en(
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
        var i = r.effects.filter(function(B) {
          return !Ac(B);
        });
        if (t || r.container.styles.position !== 0 || !r.parent) {
          if (o.unshift.apply(o, i), t = [
            2,
            3
            /* FIXED */
          ].indexOf(r.container.styles.position) === -1, r.container.styles.overflowX !== 0) {
            var w = Qn(r.curves), a = pn(r.curves);
            $i(w, a) || o.unshift(new en(
              a,
              6
              /* CONTENT */
            ));
          }
        } else
          o.unshift.apply(o, i);
        r = r.parent;
      }
      return o.filter(function(B) {
        return Qe(B.target, A);
      });
    }, e;
  }()
), ea = function(e, A, t, r) {
  e.container.elements.forEach(function(o) {
    var i = Qe(
      o.flags,
      4
      /* CREATES_REAL_STACKING_CONTEXT */
    ), w = Qe(
      o.flags,
      2
      /* CREATES_STACKING_CONTEXT */
    ), a = new rc(o, e);
    Qe(
      o.styles.display,
      2048
      /* LIST_ITEM */
    ) && r.push(a);
    var B = Qe(
      o.flags,
      8
      /* IS_LIST_OWNER */
    ) ? [] : r;
    if (i || w) {
      var n = i || o.styles.isPositioned() ? t : A, c = new ec(a);
      if (o.styles.isPositioned() || o.styles.opacity < 1 || o.styles.isTransformed()) {
        var u = o.styles.zIndex.order;
        if (u < 0) {
          var l = 0;
          n.negativeZIndex.some(function(d, p) {
            return u > d.element.container.styles.zIndex.order ? (l = p, !1) : l > 0;
          }), n.negativeZIndex.splice(l, 0, c);
        } else if (u > 0) {
          var h = 0;
          n.positiveZIndex.some(function(d, p) {
            return u >= d.element.container.styles.zIndex.order ? (h = p + 1, !1) : h > 0;
          }), n.positiveZIndex.splice(h, 0, c);
        } else
          n.zeroOrAutoZIndexOrTransformedOrOpacity.push(c);
      } else
        o.styles.isFloating() ? n.nonPositionedFloats.push(c) : n.nonPositionedInlineLevel.push(c);
      ea(a, c, i ? c : t, B);
    } else
      o.styles.isInlineLevel() ? A.inlineLevel.push(a) : A.nonInlineLevel.push(a), ea(a, A, t, B);
    Qe(
      o.flags,
      8
      /* IS_LIST_OWNER */
    ) && tc(o, B);
  });
}, tc = function(e, A) {
  for (var t = e instanceof Zo ? e.start : 1, r = e instanceof Zo ? e.reversed : !1, o = 0; o < A.length; o++) {
    var i = A[o];
    i.container instanceof Ns && typeof i.container.value == "number" && i.container.value !== 0 && (t = i.container.value), i.listValue = bt(t, i.container.styles.listStyleType, !0), t += r ? -1 : 1;
  }
}, _w = function(e) {
  var A = new rc(e, null), t = new ec(A), r = [];
  return ea(A, t, t, r), tc(A.container, r), t;
}, As = function(e, A) {
  switch (A) {
    case 0:
      return Pe(e.topLeftBorderBox, e.topLeftPaddingBox, e.topRightBorderBox, e.topRightPaddingBox);
    case 1:
      return Pe(e.topRightBorderBox, e.topRightPaddingBox, e.bottomRightBorderBox, e.bottomRightPaddingBox);
    case 2:
      return Pe(e.bottomRightBorderBox, e.bottomRightPaddingBox, e.bottomLeftBorderBox, e.bottomLeftPaddingBox);
    case 3:
    default:
      return Pe(e.bottomLeftBorderBox, e.bottomLeftPaddingBox, e.topLeftBorderBox, e.topLeftPaddingBox);
  }
}, Rw = function(e, A) {
  switch (A) {
    case 0:
      return Pe(e.topLeftBorderBox, e.topLeftBorderDoubleOuterBox, e.topRightBorderBox, e.topRightBorderDoubleOuterBox);
    case 1:
      return Pe(e.topRightBorderBox, e.topRightBorderDoubleOuterBox, e.bottomRightBorderBox, e.bottomRightBorderDoubleOuterBox);
    case 2:
      return Pe(e.bottomRightBorderBox, e.bottomRightBorderDoubleOuterBox, e.bottomLeftBorderBox, e.bottomLeftBorderDoubleOuterBox);
    case 3:
    default:
      return Pe(e.bottomLeftBorderBox, e.bottomLeftBorderDoubleOuterBox, e.topLeftBorderBox, e.topLeftBorderDoubleOuterBox);
  }
}, Mw = function(e, A) {
  switch (A) {
    case 0:
      return Pe(e.topLeftBorderDoubleInnerBox, e.topLeftPaddingBox, e.topRightBorderDoubleInnerBox, e.topRightPaddingBox);
    case 1:
      return Pe(e.topRightBorderDoubleInnerBox, e.topRightPaddingBox, e.bottomRightBorderDoubleInnerBox, e.bottomRightPaddingBox);
    case 2:
      return Pe(e.bottomRightBorderDoubleInnerBox, e.bottomRightPaddingBox, e.bottomLeftBorderDoubleInnerBox, e.bottomLeftPaddingBox);
    case 3:
    default:
      return Pe(e.bottomLeftBorderDoubleInnerBox, e.bottomLeftPaddingBox, e.topLeftBorderDoubleInnerBox, e.topLeftPaddingBox);
  }
}, Nw = function(e, A) {
  switch (A) {
    case 0:
      return rn(e.topLeftBorderStroke, e.topRightBorderStroke);
    case 1:
      return rn(e.topRightBorderStroke, e.bottomRightBorderStroke);
    case 2:
      return rn(e.bottomRightBorderStroke, e.bottomLeftBorderStroke);
    case 3:
    default:
      return rn(e.bottomLeftBorderStroke, e.topLeftBorderStroke);
  }
}, rn = function(e, A) {
  var t = [];
  return Ne(e) ? t.push(e.subdivide(0.5, !1)) : t.push(e), Ne(A) ? t.push(A.subdivide(0.5, !0)) : t.push(A), t;
}, Pe = function(e, A, t, r) {
  var o = [];
  return Ne(e) ? o.push(e.subdivide(0.5, !1)) : o.push(e), Ne(t) ? o.push(t.subdivide(0.5, !0)) : o.push(t), Ne(r) ? o.push(r.subdivide(0.5, !0).reverse()) : o.push(r), Ne(A) ? o.push(A.subdivide(0.5, !1).reverse()) : o.push(A), o;
}, nc = function(e) {
  var A = e.bounds, t = e.styles;
  return A.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
}, Cn = function(e) {
  var A = e.styles, t = e.bounds, r = qA(A.paddingLeft, t.width), o = qA(A.paddingRight, t.width), i = qA(A.paddingTop, t.width), w = qA(A.paddingBottom, t.width);
  return t.add(r + A.borderLeftWidth, i + A.borderTopWidth, -(A.borderRightWidth + A.borderLeftWidth + r + o), -(A.borderTopWidth + A.borderBottomWidth + i + w));
}, Gw = function(e, A) {
  return e === 0 ? A.bounds : e === 2 ? Cn(A) : nc(A);
}, Pw = function(e, A) {
  return e === 0 ? A.bounds : e === 2 ? Cn(A) : nc(A);
}, xo = function(e, A, t) {
  var r = Gw(Wr(e.styles.backgroundOrigin, A), e), o = Pw(Wr(e.styles.backgroundClip, A), e), i = Vw(Wr(e.styles.backgroundSize, A), t, r), w = i[0], a = i[1], B = dt(Wr(e.styles.backgroundPosition, A), r.width - w, r.height - a), n = kw(Wr(e.styles.backgroundRepeat, A), B, i, r, o), c = Math.round(r.left + B[0]), u = Math.round(r.top + B[1]);
  return [n, c, u, w, a];
}, Xr = function(e) {
  return ZA(e) && e.value === Zr.AUTO;
}, tn = function(e) {
  return typeof e == "number";
}, Vw = function(e, A, t) {
  var r = A[0], o = A[1], i = A[2], w = e[0], a = e[1];
  if (!w)
    return [0, 0];
  if (he(w) && a && he(a))
    return [qA(w, t.width), qA(a, t.height)];
  var B = tn(i);
  if (ZA(w) && (w.value === Zr.CONTAIN || w.value === Zr.COVER)) {
    if (tn(i)) {
      var n = t.width / t.height;
      return n < i != (w.value === Zr.COVER) ? [t.width, t.width / i] : [t.height * i, t.height];
    }
    return [t.width, t.height];
  }
  var c = tn(r), u = tn(o), l = c || u;
  if (Xr(w) && (!a || Xr(a))) {
    if (c && u)
      return [r, o];
    if (!B && !l)
      return [t.width, t.height];
    if (l && B) {
      var h = c ? r : o * i, d = u ? o : r / i;
      return [h, d];
    }
    var p = c ? r : t.width, Q = u ? o : t.height;
    return [p, Q];
  }
  if (B) {
    var v = 0, F = 0;
    return he(w) ? v = qA(w, t.width) : he(a) && (F = qA(a, t.height)), Xr(w) ? v = F * i : (!a || Xr(a)) && (F = v / i), [v, F];
  }
  var H = null, x = null;
  if (he(w) ? H = qA(w, t.width) : a && he(a) && (x = qA(a, t.height)), H !== null && (!a || Xr(a)) && (x = c && u ? H / r * o : t.height), x !== null && Xr(w) && (H = c && u ? x / o * r : t.width), H !== null && x !== null)
    return [H, x];
  throw new Error("Unable to calculate background-size for element");
}, Wr = function(e, A) {
  var t = e[A];
  return typeof t > "u" ? e[0] : t;
}, kw = function(e, A, t, r, o) {
  var i = A[0], w = A[1], a = t[0], B = t[1];
  switch (e) {
    case 2:
      return [
        new gA(Math.round(r.left), Math.round(r.top + w)),
        new gA(Math.round(r.left + r.width), Math.round(r.top + w)),
        new gA(Math.round(r.left + r.width), Math.round(B + r.top + w)),
        new gA(Math.round(r.left), Math.round(B + r.top + w))
      ];
    case 3:
      return [
        new gA(Math.round(r.left + i), Math.round(r.top)),
        new gA(Math.round(r.left + i + a), Math.round(r.top)),
        new gA(Math.round(r.left + i + a), Math.round(r.height + r.top)),
        new gA(Math.round(r.left + i), Math.round(r.height + r.top))
      ];
    case 1:
      return [
        new gA(Math.round(r.left + i), Math.round(r.top + w)),
        new gA(Math.round(r.left + i + a), Math.round(r.top + w)),
        new gA(Math.round(r.left + i + a), Math.round(r.top + w + B)),
        new gA(Math.round(r.left + i), Math.round(r.top + w + B))
      ];
    default:
      return [
        new gA(Math.round(o.left), Math.round(o.top)),
        new gA(Math.round(o.left + o.width), Math.round(o.top)),
        new gA(Math.round(o.left + o.width), Math.round(o.height + o.top)),
        new gA(Math.round(o.left), Math.round(o.height + o.top))
      ];
  }
}, jw = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", es = "Hidden Text", Xw = (
  /** @class */
  function() {
    function e(A) {
      this._data = {}, this._document = A;
    }
    return e.prototype.parseMetrics = function(A, t) {
      var r = this._document.createElement("div"), o = this._document.createElement("img"), i = this._document.createElement("span"), w = this._document.body;
      r.style.visibility = "hidden", r.style.fontFamily = A, r.style.fontSize = t, r.style.margin = "0", r.style.padding = "0", r.style.whiteSpace = "nowrap", w.appendChild(r), o.src = jw, o.width = 1, o.height = 1, o.style.margin = "0", o.style.padding = "0", o.style.verticalAlign = "baseline", i.style.fontFamily = A, i.style.fontSize = t, i.style.margin = "0", i.style.padding = "0", i.appendChild(this._document.createTextNode(es)), r.appendChild(i), r.appendChild(o);
      var a = o.offsetTop - i.offsetTop + 2;
      r.removeChild(i), r.appendChild(this._document.createTextNode(es)), r.style.lineHeight = "normal", o.style.verticalAlign = "super";
      var B = o.offsetTop - r.offsetTop + 2;
      return w.removeChild(r), { baseline: a, middle: B };
    }, e.prototype.getMetrics = function(A, t) {
      var r = A + " " + t;
      return typeof this._data[r] > "u" && (this._data[r] = this.parseMetrics(A, t)), this._data[r];
    }, e;
  }()
), oc = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(A, t) {
      this.context = A, this.options = t;
    }
    return e;
  }()
), Jw = 1e4, Ww = (
  /** @class */
  function(e) {
    Ye(A, e);
    function A(t, r) {
      var o = e.call(this, t, r) || this;
      return o._activeEffects = [], o.canvas = r.canvas ? r.canvas : document.createElement("canvas"), o.ctx = o.canvas.getContext("2d"), r.canvas || (o.canvas.width = Math.floor(r.width * r.scale), o.canvas.height = Math.floor(r.height * r.scale), o.canvas.style.width = r.width + "px", o.canvas.style.height = r.height + "px"), o.fontMetrics = new Xw(document), o.ctx.scale(o.options.scale, o.options.scale), o.ctx.translate(-r.x, -r.y), o.ctx.textBaseline = "bottom", o._activeEffects = [], o.context.logger.debug("Canvas renderer initialized (" + r.width + "x" + r.height + ") with scale " + r.scale), o;
    }
    return A.prototype.applyEffects = function(t) {
      for (var r = this; this._activeEffects.length; )
        this.popEffect();
      t.forEach(function(o) {
        return r.applyEffect(o);
      });
    }, A.prototype.applyEffect = function(t) {
      this.ctx.save(), Dw(t) && (this.ctx.globalAlpha = t.opacity), Ow(t) && (this.ctx.translate(t.offsetX, t.offsetY), this.ctx.transform(t.matrix[0], t.matrix[1], t.matrix[2], t.matrix[3], t.matrix[4], t.matrix[5]), this.ctx.translate(-t.offsetX, -t.offsetY)), Ac(t) && (this.path(t.path), this.ctx.clip()), this._activeEffects.push(t);
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
              if (Qe(
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
      var i = this;
      if (r === 0)
        this.ctx.fillText(t.text, t.bounds.left, t.bounds.top + o);
      else {
        var w = ia(t.text);
        w.reduce(function(a, B) {
          return i.ctx.fillText(B, a, t.bounds.top + o), a + i.ctx.measureText(B).width;
        }, t.bounds.left);
      }
    }, A.prototype.createFontStyle = function(t) {
      var r = t.fontVariant.filter(function(w) {
        return w === "normal" || w === "small-caps";
      }).join(""), o = $w(t.fontFamily).join(", "), i = xt(t.fontSize) ? "" + t.fontSize.number + t.fontSize.unit : t.fontSize.number + "px";
      return [
        [t.fontStyle, r, t.fontWeight, i, o].join(" "),
        o,
        i
      ];
    }, A.prototype.renderTextNode = function(t, r) {
      return Le(this, void 0, void 0, function() {
        var o, i, w, a, B, n, c, u, l = this;
        return He(this, function(h) {
          return o = this.createFontStyle(r), i = o[0], w = o[1], a = o[2], this.ctx.font = i, this.ctx.direction = r.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", B = this.fontMetrics.getMetrics(w, a), n = B.baseline, c = B.middle, u = r.paintOrder, t.textBounds.forEach(function(d) {
            u.forEach(function(p) {
              switch (p) {
                case 0:
                  l.ctx.fillStyle = Ue(r.color), l.renderTextWithLetterSpacing(d, r.letterSpacing, n);
                  var Q = r.textShadow;
                  Q.length && d.text.trim().length && (Q.slice(0).reverse().forEach(function(v) {
                    l.ctx.shadowColor = Ue(v.color), l.ctx.shadowOffsetX = v.offsetX.number * l.options.scale, l.ctx.shadowOffsetY = v.offsetY.number * l.options.scale, l.ctx.shadowBlur = v.blur.number, l.renderTextWithLetterSpacing(d, r.letterSpacing, n);
                  }), l.ctx.shadowColor = "", l.ctx.shadowOffsetX = 0, l.ctx.shadowOffsetY = 0, l.ctx.shadowBlur = 0), r.textDecorationLine.length && (l.ctx.fillStyle = Ue(r.textDecorationColor || r.color), r.textDecorationLine.forEach(function(v) {
                    switch (v) {
                      case 1:
                        l.ctx.fillRect(d.bounds.left, Math.round(d.bounds.top + n), d.bounds.width, 1);
                        break;
                      case 2:
                        l.ctx.fillRect(d.bounds.left, Math.round(d.bounds.top), d.bounds.width, 1);
                        break;
                      case 3:
                        l.ctx.fillRect(d.bounds.left, Math.ceil(d.bounds.top + c), d.bounds.width, 1);
                        break;
                    }
                  }));
                  break;
                case 1:
                  r.webkitTextStrokeWidth && d.text.trim().length && (l.ctx.strokeStyle = Ue(r.webkitTextStrokeColor), l.ctx.lineWidth = r.webkitTextStrokeWidth, l.ctx.lineJoin = window.chrome ? "miter" : "round", l.ctx.strokeText(d.text, d.bounds.left, d.bounds.top + n)), l.ctx.strokeStyle = "", l.ctx.lineWidth = 0, l.ctx.lineJoin = "miter";
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
        var i = Cn(t), w = pn(r);
        this.path(w), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(o, 0, 0, t.intrinsicWidth, t.intrinsicHeight, i.left, i.top, i.width, i.height), this.ctx.restore();
      }
    }, A.prototype.renderNodeContent = function(t) {
      return Le(this, void 0, void 0, function() {
        var r, o, i, w, a, B, F, F, n, c, u, l, x, h, d, O, p, Q, v, F, H, x, O;
        return He(this, function(S) {
          switch (S.label) {
            case 0:
              this.applyEffects(t.getEffects(
                4
                /* CONTENT */
              )), r = t.container, o = t.curves, i = r.styles, w = 0, a = r.textNodes, S.label = 1;
            case 1:
              return w < a.length ? (B = a[w], [4, this.renderTextNode(B, i)]) : [3, 4];
            case 2:
              S.sent(), S.label = 3;
            case 3:
              return w++, [3, 1];
            case 4:
              if (!(r instanceof _s))
                return [3, 8];
              S.label = 5;
            case 5:
              return S.trys.push([5, 7, , 8]), [4, this.context.cache.match(r.src)];
            case 6:
              return F = S.sent(), this.renderReplacedElement(r, o, F), [3, 8];
            case 7:
              return S.sent(), this.context.logger.error("Error loading image " + r.src), [3, 8];
            case 8:
              if (r instanceof Rs && this.renderReplacedElement(r, o, r.canvas), !(r instanceof Ms))
                return [3, 12];
              S.label = 9;
            case 9:
              return S.trys.push([9, 11, , 12]), [4, this.context.cache.match(r.svg)];
            case 10:
              return F = S.sent(), this.renderReplacedElement(r, o, F), [3, 12];
            case 11:
              return S.sent(), this.context.logger.error("Error loading svg " + r.svg.substring(0, 255)), [3, 12];
            case 12:
              return r instanceof Vs && r.tree ? (n = new A(this.context, {
                scale: this.options.scale,
                backgroundColor: r.backgroundColor,
                x: 0,
                y: 0,
                width: r.width,
                height: r.height
              }), [4, n.render(r.tree)]) : [3, 14];
            case 13:
              c = S.sent(), r.width && r.height && this.ctx.drawImage(c, 0, 0, r.width, r.height, r.bounds.left, r.bounds.top, r.bounds.width, r.bounds.height), S.label = 14;
            case 14:
              if (r instanceof sa && (u = Math.min(r.bounds.width, r.bounds.height), r.type === gn ? r.checked && (this.ctx.save(), this.path([
                new gA(r.bounds.left + u * 0.39363, r.bounds.top + u * 0.79),
                new gA(r.bounds.left + u * 0.16, r.bounds.top + u * 0.5549),
                new gA(r.bounds.left + u * 0.27347, r.bounds.top + u * 0.44071),
                new gA(r.bounds.left + u * 0.39694, r.bounds.top + u * 0.5649),
                new gA(r.bounds.left + u * 0.72983, r.bounds.top + u * 0.23),
                new gA(r.bounds.left + u * 0.84, r.bounds.top + u * 0.34085),
                new gA(r.bounds.left + u * 0.39363, r.bounds.top + u * 0.79)
              ]), this.ctx.fillStyle = Ue(Pi), this.ctx.fill(), this.ctx.restore()) : r.type === wn && r.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(r.bounds.left + u / 2, r.bounds.top + u / 2, u / 4, 0, Math.PI * 2, !0), this.ctx.fillStyle = Ue(Pi), this.ctx.fill(), this.ctx.restore())), Yw(r) && r.value.length) {
                switch (l = this.createFontStyle(i), x = l[0], h = l[1], d = this.fontMetrics.getMetrics(x, h).baseline, this.ctx.font = x, this.ctx.fillStyle = Ue(i.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = zw(r.styles.textAlign), O = Cn(r), p = 0, r.styles.textAlign) {
                  case 1:
                    p += O.width / 2;
                    break;
                  case 2:
                    p += O.width;
                    break;
                }
                Q = O.add(p, 0, 0, -O.height / 2 + 1), this.ctx.save(), this.path([
                  new gA(O.left, O.top),
                  new gA(O.left + O.width, O.top),
                  new gA(O.left + O.width, O.top + O.height),
                  new gA(O.left, O.top + O.height)
                ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new Ft(r.value, Q), i.letterSpacing, d), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
              }
              if (!Qe(
                r.styles.display,
                2048
                /* LIST_ITEM */
              ))
                return [3, 20];
              if (r.styles.listStyleImage === null)
                return [3, 19];
              if (v = r.styles.listStyleImage, v.type !== 0)
                return [3, 18];
              F = void 0, H = v.url, S.label = 15;
            case 15:
              return S.trys.push([15, 17, , 18]), [4, this.context.cache.match(H)];
            case 16:
              return F = S.sent(), this.ctx.drawImage(F, r.bounds.left - (F.width + 10), r.bounds.top), [3, 18];
            case 17:
              return S.sent(), this.context.logger.error("Error loading list-style-image " + H), [3, 18];
            case 18:
              return [3, 20];
            case 19:
              t.listValue && r.styles.listStyleType !== -1 && (x = this.createFontStyle(i)[0], this.ctx.font = x, this.ctx.fillStyle = Ue(i.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", O = new ur(r.bounds.left, r.bounds.top + qA(r.styles.paddingTop, r.bounds.width), r.bounds.width, Ei(i.lineHeight, i.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new Ft(t.listValue, O), i.letterSpacing, Ei(i.lineHeight, i.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), S.label = 20;
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
        var r, o, v, i, w, v, a, B, v, n, c, v, u, l, v, h, d, v, p, Q, v;
        return He(this, function(F) {
          switch (F.label) {
            case 0:
              if (Qe(
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
              F.sent(), i = 0, w = t.nonInlineLevel, F.label = 7;
            case 7:
              return i < w.length ? (v = w[i], [4, this.renderNode(v)]) : [3, 10];
            case 8:
              F.sent(), F.label = 9;
            case 9:
              return i++, [3, 7];
            case 10:
              a = 0, B = t.nonPositionedFloats, F.label = 11;
            case 11:
              return a < B.length ? (v = B[a], [4, this.renderStack(v)]) : [3, 14];
            case 12:
              F.sent(), F.label = 13;
            case 13:
              return a++, [3, 11];
            case 14:
              n = 0, c = t.nonPositionedInlineLevel, F.label = 15;
            case 15:
              return n < c.length ? (v = c[n], [4, this.renderStack(v)]) : [3, 18];
            case 16:
              F.sent(), F.label = 17;
            case 17:
              return n++, [3, 15];
            case 18:
              u = 0, l = t.inlineLevel, F.label = 19;
            case 19:
              return u < l.length ? (v = l[u], [4, this.renderNode(v)]) : [3, 22];
            case 20:
              F.sent(), F.label = 21;
            case 21:
              return u++, [3, 19];
            case 22:
              h = 0, d = t.zeroOrAutoZIndexOrTransformedOrOpacity, F.label = 23;
            case 23:
              return h < d.length ? (v = d[h], [4, this.renderStack(v)]) : [3, 26];
            case 24:
              F.sent(), F.label = 25;
            case 25:
              return h++, [3, 23];
            case 26:
              p = 0, Q = t.positiveZIndex, F.label = 27;
            case 27:
              return p < Q.length ? (v = Q[p], [4, this.renderStack(v)]) : [3, 30];
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
      t.forEach(function(o, i) {
        var w = Ne(o) ? o.start : o;
        i === 0 ? r.ctx.moveTo(w.x, w.y) : r.ctx.lineTo(w.x, w.y), Ne(o) && r.ctx.bezierCurveTo(o.startControl.x, o.startControl.y, o.endControl.x, o.endControl.y, o.end.x, o.end.y);
      });
    }, A.prototype.renderRepeat = function(t, r, o, i) {
      this.path(t), this.ctx.fillStyle = r, this.ctx.translate(o, i), this.ctx.fill(), this.ctx.translate(-o, -i);
    }, A.prototype.resizeImage = function(t, r, o) {
      var i;
      if (t.width === r && t.height === o)
        return t;
      var w = (i = this.canvas.ownerDocument) !== null && i !== void 0 ? i : document, a = w.createElement("canvas");
      a.width = Math.max(1, r), a.height = Math.max(1, o);
      var B = a.getContext("2d");
      return B.drawImage(t, 0, 0, t.width, t.height, 0, 0, r, o), a;
    }, A.prototype.renderBackgroundImage = function(t) {
      return Le(this, void 0, void 0, function() {
        var r, o, i, w, a, B;
        return He(this, function(n) {
          switch (n.label) {
            case 0:
              r = t.styles.backgroundImage.length - 1, o = function(c) {
                var u, l, h, P, iA, oA, L, D, G, d, P, iA, oA, L, D, p, Q, v, F, H, x, O, S, N, G, b, P, V, k, L, D, Y, iA, oA, CA, HA, vA, EA, FA, dA, X, M;
                return He(this, function(q) {
                  switch (q.label) {
                    case 0:
                      if (c.type !== 0)
                        return [3, 5];
                      u = void 0, l = c.url, q.label = 1;
                    case 1:
                      return q.trys.push([1, 3, , 4]), [4, i.context.cache.match(l)];
                    case 2:
                      return u = q.sent(), [3, 4];
                    case 3:
                      return q.sent(), i.context.logger.error("Error loading background-image " + l), [3, 4];
                    case 4:
                      return u && (h = xo(t, r, [
                        u.width,
                        u.height,
                        u.width / u.height
                      ]), P = h[0], iA = h[1], oA = h[2], L = h[3], D = h[4], G = i.ctx.createPattern(i.resizeImage(u, L, D), "repeat"), i.renderRepeat(P, G, iA, oA)), [3, 6];
                    case 5:
                      Of(c) ? (d = xo(t, r, [null, null, null]), P = d[0], iA = d[1], oA = d[2], L = d[3], D = d[4], p = If(c.angle, L, D), Q = p[0], v = p[1], F = p[2], H = p[3], x = p[4], O = document.createElement("canvas"), O.width = L, O.height = D, S = O.getContext("2d"), N = S.createLinearGradient(v, H, F, x), Fi(c.stops, Q).forEach(function(uA) {
                        return N.addColorStop(uA.stop, Ue(uA.color));
                      }), S.fillStyle = N, S.fillRect(0, 0, L, D), L > 0 && D > 0 && (G = i.ctx.createPattern(O, "repeat"), i.renderRepeat(P, G, iA, oA))) : Df(c) && (b = xo(t, r, [
                        null,
                        null,
                        null
                      ]), P = b[0], V = b[1], k = b[2], L = b[3], D = b[4], Y = c.position.length === 0 ? [na] : c.position, iA = qA(Y[0], L), oA = qA(Y[Y.length - 1], D), CA = xf(c, iA, oA, L, D), HA = CA[0], vA = CA[1], HA > 0 && vA > 0 && (EA = i.ctx.createRadialGradient(V + iA, k + oA, 0, V + iA, k + oA, HA), Fi(c.stops, HA * 2).forEach(function(uA) {
                        return EA.addColorStop(uA.stop, Ue(uA.color));
                      }), i.path(P), i.ctx.fillStyle = EA, HA !== vA ? (FA = t.bounds.left + 0.5 * t.bounds.width, dA = t.bounds.top + 0.5 * t.bounds.height, X = vA / HA, M = 1 / X, i.ctx.save(), i.ctx.translate(FA, dA), i.ctx.transform(1, 0, 0, X, 0, 0), i.ctx.translate(-FA, -dA), i.ctx.fillRect(V, M * (k - dA) + dA, L, D * M), i.ctx.restore()) : i.ctx.fill())), q.label = 6;
                    case 6:
                      return r--, [
                        2
                        /*return*/
                      ];
                  }
                });
              }, i = this, w = 0, a = t.styles.backgroundImage.slice(0).reverse(), n.label = 1;
            case 1:
              return w < a.length ? (B = a[w], [5, o(B)]) : [3, 4];
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
        return He(this, function(i) {
          return this.path(As(o, r)), this.ctx.fillStyle = Ue(t), this.ctx.fill(), [
            2
            /*return*/
          ];
        });
      });
    }, A.prototype.renderDoubleBorder = function(t, r, o, i) {
      return Le(this, void 0, void 0, function() {
        var w, a;
        return He(this, function(B) {
          switch (B.label) {
            case 0:
              return r < 3 ? [4, this.renderSolidBorder(t, o, i)] : [3, 2];
            case 1:
              return B.sent(), [
                2
                /*return*/
              ];
            case 2:
              return w = Rw(i, o), this.path(w), this.ctx.fillStyle = Ue(t), this.ctx.fill(), a = Mw(i, o), this.path(a), this.ctx.fill(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderNodeBackgroundAndBorders = function(t) {
      return Le(this, void 0, void 0, function() {
        var r, o, i, w, a, B, n, c, u = this;
        return He(this, function(l) {
          switch (l.label) {
            case 0:
              return this.applyEffects(t.getEffects(
                2
                /* BACKGROUND_BORDERS */
              )), r = t.container.styles, o = !Ur(r.backgroundColor) || r.backgroundImage.length, i = [
                { style: r.borderTopStyle, color: r.borderTopColor, width: r.borderTopWidth },
                { style: r.borderRightStyle, color: r.borderRightColor, width: r.borderRightWidth },
                { style: r.borderBottomStyle, color: r.borderBottomColor, width: r.borderBottomWidth },
                { style: r.borderLeftStyle, color: r.borderLeftColor, width: r.borderLeftWidth }
              ], w = Zw(Wr(r.backgroundClip, 0), t.curves), o || r.boxShadow.length ? (this.ctx.save(), this.path(w), this.ctx.clip(), Ur(r.backgroundColor) || (this.ctx.fillStyle = Ue(r.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(t.container)]) : [3, 2];
            case 1:
              l.sent(), this.ctx.restore(), r.boxShadow.slice(0).reverse().forEach(function(h) {
                u.ctx.save();
                var d = Qn(t.curves), p = h.inset ? 0 : Jw, Q = Tw(d, -p + (h.inset ? 1 : -1) * h.spread.number, (h.inset ? 1 : -1) * h.spread.number, h.spread.number * (h.inset ? -2 : 2), h.spread.number * (h.inset ? -2 : 2));
                h.inset ? (u.path(d), u.ctx.clip(), u.mask(Q)) : (u.mask(d), u.ctx.clip(), u.path(Q)), u.ctx.shadowOffsetX = h.offsetX.number + p, u.ctx.shadowOffsetY = h.offsetY.number, u.ctx.shadowColor = Ue(h.color), u.ctx.shadowBlur = h.blur.number, u.ctx.fillStyle = h.inset ? Ue(h.color) : "rgba(0,0,0,1)", u.ctx.fill(), u.ctx.restore();
              }), l.label = 2;
            case 2:
              a = 0, B = 0, n = i, l.label = 3;
            case 3:
              return B < n.length ? (c = n[B], c.style !== 0 && !Ur(c.color) && c.width > 0 ? c.style !== 2 ? [3, 5] : [4, this.renderDashedDottedBorder(
                c.color,
                c.width,
                a,
                t.curves,
                2
                /* DASHED */
              )] : [3, 11]) : [3, 13];
            case 4:
              return l.sent(), [3, 11];
            case 5:
              return c.style !== 3 ? [3, 7] : [4, this.renderDashedDottedBorder(
                c.color,
                c.width,
                a,
                t.curves,
                3
                /* DOTTED */
              )];
            case 6:
              return l.sent(), [3, 11];
            case 7:
              return c.style !== 4 ? [3, 9] : [4, this.renderDoubleBorder(c.color, c.width, a, t.curves)];
            case 8:
              return l.sent(), [3, 11];
            case 9:
              return [4, this.renderSolidBorder(c.color, a, t.curves)];
            case 10:
              l.sent(), l.label = 11;
            case 11:
              a++, l.label = 12;
            case 12:
              return B++, [3, 3];
            case 13:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderDashedDottedBorder = function(t, r, o, i, w) {
      return Le(this, void 0, void 0, function() {
        var a, B, n, c, u, l, h, d, p, Q, v, F, H, x, O, S, O, S;
        return He(this, function(N) {
          return this.ctx.save(), a = Nw(i, o), B = As(i, o), w === 2 && (this.path(B), this.ctx.clip()), Ne(B[0]) ? (n = B[0].start.x, c = B[0].start.y) : (n = B[0].x, c = B[0].y), Ne(B[1]) ? (u = B[1].end.x, l = B[1].end.y) : (u = B[1].x, l = B[1].y), o === 0 || o === 2 ? h = Math.abs(n - u) : h = Math.abs(c - l), this.ctx.beginPath(), w === 3 ? this.formatPath(a) : this.formatPath(B.slice(0, 2)), d = r < 3 ? r * 3 : r * 2, p = r < 3 ? r * 2 : r, w === 3 && (d = r, p = r), Q = !0, h <= d * 2 ? Q = !1 : h <= d * 2 + p ? (v = h / (2 * d + p), d *= v, p *= v) : (F = Math.floor((h + p) / (d + p)), H = (h - F * d) / (F - 1), x = (h - (F + 1) * d) / F, p = x <= 0 || Math.abs(p - H) < Math.abs(p - x) ? H : x), Q && (w === 3 ? this.ctx.setLineDash([0, d + p]) : this.ctx.setLineDash([d, p])), w === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = r) : this.ctx.lineWidth = r * 2 + 1.1, this.ctx.strokeStyle = Ue(t), this.ctx.stroke(), this.ctx.setLineDash([]), w === 2 && (Ne(B[0]) && (O = B[3], S = B[0], this.ctx.beginPath(), this.formatPath([new gA(O.end.x, O.end.y), new gA(S.start.x, S.start.y)]), this.ctx.stroke()), Ne(B[1]) && (O = B[1], S = B[2], this.ctx.beginPath(), this.formatPath([new gA(O.end.x, O.end.y), new gA(S.start.x, S.start.y)]), this.ctx.stroke())), this.ctx.restore(), [
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
              return this.options.backgroundColor && (this.ctx.fillStyle = Ue(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), r = _w(t), [4, this.renderStack(r)];
            case 1:
              return o.sent(), this.applyEffects([]), [2, this.canvas];
          }
        });
      });
    }, A;
  }(oc)
), Yw = function(e) {
  return e instanceof Ps || e instanceof Gs ? !0 : e instanceof sa && e.type !== wn && e.type !== gn;
}, Zw = function(e, A) {
  switch (e) {
    case 0:
      return Qn(A);
    case 2:
      return Sw(A);
    case 1:
    default:
      return pn(A);
  }
}, zw = function(e) {
  switch (e) {
    case 1:
      return "center";
    case 2:
      return "right";
    case 0:
    default:
      return "left";
  }
}, qw = ["-apple-system", "system-ui"], $w = function(e) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? e.filter(function(A) {
    return qw.indexOf(A) === -1;
  }) : e;
}, Ah = (
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
        return He(this, function(i) {
          switch (i.label) {
            case 0:
              return r = Yo(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, t), [4, eh(r)];
            case 1:
              return o = i.sent(), this.options.backgroundColor && (this.ctx.fillStyle = Ue(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(o, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
          }
        });
      });
    }, A;
  }(oc)
), eh = function(e) {
  return new Promise(function(A, t) {
    var r = new Image();
    r.onload = function() {
      A(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e));
  });
}, rh = (
  /** @class */
  function() {
    function e(A) {
      var t = A.id, r = A.enabled;
      this.id = t, this.enabled = r, this.start = Date.now();
    }
    return e.prototype.debug = function() {
      for (var A = [], t = 0; t < arguments.length; t++)
        A[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, Dt([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
    }, e.prototype.getTime = function() {
      return Date.now() - this.start;
    }, e.prototype.info = function() {
      for (var A = [], t = 0; t < arguments.length; t++)
        A[t] = arguments[t];
      this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, Dt([this.id, this.getTime() + "ms"], A));
    }, e.prototype.warn = function() {
      for (var A = [], t = 0; t < arguments.length; t++)
        A[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, Dt([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
    }, e.prototype.error = function() {
      for (var A = [], t = 0; t < arguments.length; t++)
        A[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, Dt([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
    }, e.instances = {}, e;
  }()
), th = (
  /** @class */
  function() {
    function e(A, t) {
      var r;
      this.windowBounds = t, this.instanceName = "#" + e.instanceCount++, this.logger = new rh({ id: this.instanceName, enabled: A.logging }), this.cache = (r = A.cache) !== null && r !== void 0 ? r : new Fw(this, A);
    }
    return e.instanceCount = 1, e;
  }()
), nh = function(e, A) {
  return A === void 0 && (A = {}), oh(e, A);
};
typeof window < "u" && $s.setContext(window);
var oh = function(e, A) {
  return Le(void 0, void 0, void 0, function() {
    var t, r, o, i, w, a, B, n, c, u, l, h, d, p, Q, v, F, H, x, O, N, S, N, G, b, P, V, k, L, D, Y, iA, oA, CA, HA, vA, EA, FA, dA, X;
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
            allowTaint: (G = A.allowTaint) !== null && G !== void 0 ? G : !1,
            imageTimeout: (b = A.imageTimeout) !== null && b !== void 0 ? b : 15e3,
            proxy: A.proxy,
            useCORS: (P = A.useCORS) !== null && P !== void 0 ? P : !1
          }, i = Oo({ logging: (V = A.logging) !== null && V !== void 0 ? V : !0, cache: A.cache }, o), w = {
            windowWidth: (k = A.windowWidth) !== null && k !== void 0 ? k : r.innerWidth,
            windowHeight: (L = A.windowHeight) !== null && L !== void 0 ? L : r.innerHeight,
            scrollX: (D = A.scrollX) !== null && D !== void 0 ? D : r.pageXOffset,
            scrollY: (Y = A.scrollY) !== null && Y !== void 0 ? Y : r.pageYOffset
          }, a = new ur(w.scrollX, w.scrollY, w.windowWidth, w.windowHeight), B = new th(i, a), n = (iA = A.foreignObjectRendering) !== null && iA !== void 0 ? iA : !1, c = {
            allowTaint: (oA = A.allowTaint) !== null && oA !== void 0 ? oA : !1,
            onclone: A.onclone,
            ignoreElements: A.ignoreElements,
            inlineImages: n,
            copyStyles: n
          }, B.logger.debug("Starting document clone with size " + a.width + "x" + a.height + " scrolled to " + -a.left + "," + -a.top), u = new zi(B, e, c), l = u.clonedReferenceElement, l ? [4, u.toIFrame(t, a)] : [2, Promise.reject("Unable to find element in cloned iframe")];
        case 1:
          return h = M.sent(), d = ca(l) || aw(l) ? Du(l.ownerDocument) : vn(B, l), p = d.width, Q = d.height, v = d.left, F = d.top, H = ah(B, l, A.backgroundColor), x = {
            canvas: A.canvas,
            backgroundColor: H,
            scale: (HA = (CA = A.scale) !== null && CA !== void 0 ? CA : r.devicePixelRatio) !== null && HA !== void 0 ? HA : 1,
            x: ((vA = A.x) !== null && vA !== void 0 ? vA : 0) + v,
            y: ((EA = A.y) !== null && EA !== void 0 ? EA : 0) + F,
            width: (FA = A.width) !== null && FA !== void 0 ? FA : Math.ceil(p),
            height: (dA = A.height) !== null && dA !== void 0 ? dA : Math.ceil(Q)
          }, n ? (B.logger.debug("Document cloned, using foreign object rendering"), N = new Ah(B, x), [4, N.render(l)]) : [3, 3];
        case 2:
          return O = M.sent(), [3, 5];
        case 3:
          return B.logger.debug("Document cloned, element located at " + v + "," + F + " with size " + p + "x" + Q + " using computed rendering"), B.logger.debug("Starting DOM parsing"), S = js(B, l), H === S.styles.backgroundColor && (S.styles.backgroundColor = cr.TRANSPARENT), B.logger.debug("Starting renderer for element at " + x.x + "," + x.y + " with size " + x.width + "x" + x.height), N = new Ww(B, x), [4, N.render(S)];
        case 4:
          O = M.sent(), M.label = 5;
        case 5:
          return (!((X = A.removeContainer) !== null && X !== void 0) || X) && (zi.destroy(h) || B.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), B.logger.debug("Finished rendering"), [2, O];
      }
    });
  });
}, ah = function(e, A, t) {
  var r = A.ownerDocument, o = r.documentElement ? vt(e, getComputedStyle(r.documentElement).backgroundColor) : cr.TRANSPARENT, i = r.body ? vt(e, getComputedStyle(r.body).backgroundColor) : cr.TRANSPARENT, w = typeof t == "string" ? vt(e, t) : t === null ? cr.TRANSPARENT : 4294967295;
  return A === r.documentElement ? Ur(o) ? Ur(i) ? w : i : o : w;
};
function ch({ key: e, ref: A, initData: t, onDrag: r }) {
  const o = Ht(), i = jA.useModel("dragModel/offset", !1, o)[0], w = jA.useModel("dragModel/scale", !1, o)[0], { state: a } = jA.useModel(`dragModel/drags/${e}`, !1, o)[0] || {}, [B, n] = zr(!1), [c] = zr(`easy-drag-${e}`);
  We(() => {
    if (!a || !B)
      return;
    const [u, l] = jA.get(`dragModel/drags/${e}/data`, o), [h] = jA.get(`dragModel/drags/${e}/polygon`, o), d = a.split("+"), p = d[0], Q = d.slice(-1)[0], v = jA.get(`dragModel/drops/${Q}/data`, o)[0], F = jA.get(`dragModel/drops/${Q}/polygon`, o)[0];
    r && r({
      data: u,
      polygon: h,
      setData: l,
      type: p,
      dropData: v,
      dropPolygon: F
    });
  }, [a, o, e, B]), We(() => {
    const u = jA.get(`dragModel/drags/${e}`, o)[1];
    return u({ data: t }).then(() => {
      n(!0);
    }).catch((l) => {
      n(!1);
    }), () => {
      n(!1);
    };
  }, [e, o]), We(() => {
    const u = A.current;
    if (!u)
      return;
    u.classList.add(c);
    const l = new MutationObserver((d) => {
      d.forEach((p) => {
        p.type === "attributes" && p.attributeName === "class" && !rs(u, "easy-drag-") && u.classList.add(c);
      });
    }), h = { attributes: !0, attributeFilter: ["class"] };
    return u && l.observe(u, h), () => l.disconnect();
  }, [c, A]), We(() => {
    if (!B)
      return;
    const u = A.current;
    if (!u)
      return;
    const l = u.getBoundingClientRect(), h = [
      [l.left - i.x, l.top - i.y],
      [l.right - i.x, l.top - i.y],
      [l.right - i.x, l.bottom - i.y],
      [l.left - i.x, l.bottom - i.y]
    ], d = jA.get(`dragModel/drags/${e}/polygon`, o)[1];
    d(h);
    const p = async (F) => {
      F.preventDefault(), u.setPointerCapture(F.pointerId);
      const { clientX: H, clientY: x } = F, O = jA.get("dragModel/offset", o)[0], S = jA.get("dragModel/scale", o)[0], N = H - O.x, G = x - O.y, b = jA.get(
        `dragModel/drags/${e}/startPosition`,
        o
      )[1], { width: P, height: V, left: k, top: L } = l, D = await nh(u, {
        useCORS: !0,
        backgroundColor: "black"
      }), Y = D.getContext("2d"), iA = Y.getImageData(0, 0, D.width, D.height), oA = iA.data;
      for (var CA = 0; CA < oA.length; CA += 4)
        oA[CA + 3] = oA[CA + 3] * 0.5;
      Y.putImageData(iA, 0, 0);
      const HA = jA.get(`dragModel/drags/${e}/preview`, o)[1], vA = {
        operationType: Be.STARTDRAG,
        key: e,
        class: `${e}-preview`,
        src: D.toDataURL(),
        style: {
          position: "absolute",
          width: P * S.x + "px",
          height: V * S.y + "px",
          left: (k - O.x) * S.x + "px",
          top: (L - O.y) * S.y + "px",
          zIndex: 100
        }
      };
      await HA(vA, { callbacks: "updatePreview" }), await b({ x: N, y: G });
    }, Q = async (F) => {
      F.preventDefault();
      const H = jA.get(
        `dragModel/drags/${e}/startPosition`,
        o
      )[0];
      if (!H)
        return;
      const { clientX: x, clientY: O } = F, S = jA.get("dragModel/offset", o)[0], N = jA.get("dragModel/scale", o)[0], G = x - S.x, b = O - S.y, P = (G - H.x) * N.x, V = (b - H.y) * N.y, k = jA.get(`dragModel/drags/${e}/preview`, o)[1];
      await k(
        {
          operationType: Be.DRAGGING,
          key: e,
          x: G,
          y: b,
          class: `${e}-preview`,
          style: {
            transform: `translate(${P}px,${V}px)`
          }
        },
        { callbacks: "updatePreview" }
      );
    }, v = async (F) => {
      F.preventDefault();
      const { clientX: H, clientY: x } = F, O = H - i.x, S = x - i.y, N = jA.get(`dragModel/drags/${e}/preview`, o)[1];
      await N(
        {
          operationType: Be.DROP,
          key: e,
          x: O,
          y: S,
          class: `${e}-preview`
        },
        { callbacks: "updatePreview" }
      );
      const G = jA.get(
        `dragModel/drags/${e}/startPosition`,
        o
      )[1];
      await G(null);
    };
    return u.addEventListener("pointerdown", p), u.addEventListener("pointermove", Q), u.addEventListener("pointerup", v), u.addEventListener("pointerCancel", v), () => {
      u.removeEventListener("pointerdown", p), u.removeEventListener("pointermove", Q), u.removeEventListener("pointerup", v), u.removeEventListener("pointerCancel", v);
    };
  }, [B, A, e, JSON.stringify(i), JSON.stringify(w), o]);
}
function uh({
  acceptKeys: e = ["*"],
  initData: A,
  ref: t,
  onDrop: r,
  key: o
}) {
  const i = Ht(), w = jA.useModel("dragModel/offset", !1, i)[0], [a] = zr(`easy-drop-${o}`), { state: B } = jA.useModel(`dragModel/drops/${o}`, !1, i)[0] || {}, [n, c] = zr(!1);
  We(() => {
    if (!B || !n)
      return;
    const [u, l] = jA.get(`dragModel/drops/${o}/data`, i), h = jA.get(`dragModel/drops/${o}/polygon`, i)[0], [d, p] = B.split("+"), Q = jA.get(`dragModel/drags/${p}/data`, i)[0], v = jA.get(`dragModel/drags/${p}/polygon`, i)[0];
    r && r({ data: u, polygon: h, setData: l, type: d, dragState: Q, dragPolygon: v });
  }, [B, i, o, n]), We(() => {
    const u = jA.get(`dragModel/drops/${o}`, i)[1];
    return u({ data: A }).then(() => {
      c(!0);
    }).catch((l) => {
      c(!1);
    }), () => {
      c(!1);
    };
  }, [o, i]), We(() => {
    if (!n)
      return;
    if (!Array.isArray(e) || e.length === 0) {
      console.error("acceptKeys must be a non-empty array");
      return;
    }
    const u = jA.get(`dragModel/drops/${o}/acceptKeys`, i)[1];
    u(e);
  }, [n, o, JSON.stringify(e), i]), We(() => {
    const u = t.current;
    if (!u)
      return;
    u.classList.add(a);
    const l = new MutationObserver((d) => {
      d.forEach((p) => {
        p.type === "attributes" && p.attributeName === "class" && !rs(u, "easy-drop-") && u.classList.add(a);
      });
    }), h = { attributes: !0, attributeFilter: ["class"] };
    return u && l.observe(u, h), () => l.disconnect();
  }, [t, a]), We(() => {
    if (!n)
      return;
    const u = t.current;
    if (!u)
      return;
    const l = u.getBoundingClientRect(), h = [
      [l.left - w.x, l.top - w.y],
      [l.right - w.x, l.top - w.y],
      [l.right - w.x, l.bottom - w.y],
      [l.left - w.x, l.bottom - w.y]
    ], d = jA.get(`dragModel/drops/${o}/polygon`, i)[1];
    d(h);
  }, [n, o, t, JSON.stringify(w), i]);
}
function Bh(e) {
  if (!e)
    throw new Error("key is required");
  const A = Ht(), [t, r] = jA.useModel(
    `dragModel/drags/${e}/data`,
    !1,
    A,
    {
      autoCreate: !0,
      defaultValue: null
    }
  ), [o] = jA.useModel(`dragModel/drags/${e}/polygon`, !1, A, {
    autoCreate: !0,
    defaultValue: null
  });
  return {
    data: t,
    setData: r,
    polygon: o
  };
}
function fh(e) {
  if (!e)
    throw new Error("key is required");
  const A = Ht(), [t, r] = jA.useModel(
    `dragModel/drops/${e}/data`,
    !1,
    A,
    {
      autoCreate: !0,
      defaultValue: null
    }
  ), [o] = jA.useModel(`dragModel/drops/${e}/polygon`, !1, A, {
    autoCreate: !0,
    defaultValue: null
  });
  return {
    data: t,
    setData: r,
    polygon: o
  };
}
export {
  sh as default,
  Be as operationType,
  ch as useDrag,
  Bh as useDragState,
  uh as useDrop,
  fh as useDropState
};
