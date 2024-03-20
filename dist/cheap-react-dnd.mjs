import No, { useRef as Hs, useState as Xr, useEffect as nr, createContext as bs, useContext as ni } from "react";
var ft = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function xs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var go = { exports: {} }, lt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oi;
function Ls() {
  if (oi)
    return lt;
  oi = 1;
  var e = No, A = Symbol.for("react.element"), t = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(i, c, n) {
    var a, u = {}, B = null, f = null;
    n !== void 0 && (B = "" + n), c.key !== void 0 && (B = "" + c.key), c.ref !== void 0 && (f = c.ref);
    for (a in c)
      r.call(c, a) && !s.hasOwnProperty(a) && (u[a] = c[a]);
    if (i && i.defaultProps)
      for (a in c = i.defaultProps, c)
        u[a] === void 0 && (u[a] = c[a]);
    return { $$typeof: A, type: i, key: B, ref: f, props: u, _owner: o.current };
  }
  return lt.Fragment = t, lt.jsx = l, lt.jsxs = l, lt;
}
var gt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ii;
function Ss() {
  return ii || (ii = 1, process.env.NODE_ENV !== "production" && function() {
    var e = No, A = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), n = Symbol.for("react.suspense"), a = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), f = Symbol.for("react.offscreen"), w = Symbol.iterator, d = "@@iterator";
    function Q(U) {
      if (U === null || typeof U != "object")
        return null;
      var M = w && U[w] || U[d];
      return typeof M == "function" ? M : null;
    }
    var C = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(U) {
      {
        for (var M = arguments.length, Y = new Array(M > 1 ? M - 1 : 0), sA = 1; sA < M; sA++)
          Y[sA - 1] = arguments[sA];
        m("error", U, Y);
      }
    }
    function m(U, M, Y) {
      {
        var sA = C.ReactDebugCurrentFrame, gA = sA.getStackAddendum();
        gA !== "" && (M += "%s", Y = Y.concat([gA]));
        var VA = Y.map(function(OA) {
          return String(OA);
        });
        VA.unshift("Warning: " + M), Function.prototype.apply.call(console[U], console, VA);
      }
    }
    var b = !1, D = !1, L = !1, N = !1, V = !1, H;
    H = Symbol.for("react.module.reference");
    function j(U) {
      return !!(typeof U == "string" || typeof U == "function" || U === r || U === s || V || U === o || U === n || U === a || N || U === f || b || D || L || typeof U == "object" && U !== null && (U.$$typeof === B || U.$$typeof === u || U.$$typeof === l || U.$$typeof === i || U.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      U.$$typeof === H || U.getModuleId !== void 0));
    }
    function P(U, M, Y) {
      var sA = U.displayName;
      if (sA)
        return sA;
      var gA = M.displayName || M.name || "";
      return gA !== "" ? Y + "(" + gA + ")" : Y;
    }
    function X(U) {
      return U.displayName || "Context";
    }
    function x(U) {
      if (U == null)
        return null;
      if (typeof U.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof U == "function")
        return U.displayName || U.name || null;
      if (typeof U == "string")
        return U;
      switch (U) {
        case r:
          return "Fragment";
        case t:
          return "Portal";
        case s:
          return "Profiler";
        case o:
          return "StrictMode";
        case n:
          return "Suspense";
        case a:
          return "SuspenseList";
      }
      if (typeof U == "object")
        switch (U.$$typeof) {
          case i:
            var M = U;
            return X(M) + ".Consumer";
          case l:
            var Y = U;
            return X(Y._context) + ".Provider";
          case c:
            return P(U, U.render, "ForwardRef");
          case u:
            var sA = U.displayName || null;
            return sA !== null ? sA : x(U.type) || "Memo";
          case B: {
            var gA = U, VA = gA._payload, OA = gA._init;
            try {
              return x(OA(VA));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var T = Object.assign, Z = 0, aA, nA, EA, KA, yA, mA, HA;
    function dA() {
    }
    dA.__reactDisabledLog = !0;
    function R() {
      {
        if (Z === 0) {
          aA = console.log, nA = console.info, EA = console.warn, KA = console.error, yA = console.group, mA = console.groupCollapsed, HA = console.groupEnd;
          var U = {
            configurable: !0,
            enumerable: !0,
            value: dA,
            writable: !0
          };
          Object.defineProperties(console, {
            info: U,
            log: U,
            warn: U,
            error: U,
            group: U,
            groupCollapsed: U,
            groupEnd: U
          });
        }
        Z++;
      }
    }
    function _() {
      {
        if (Z--, Z === 0) {
          var U = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: T({}, U, {
              value: aA
            }),
            info: T({}, U, {
              value: nA
            }),
            warn: T({}, U, {
              value: EA
            }),
            error: T({}, U, {
              value: KA
            }),
            group: T({}, U, {
              value: yA
            }),
            groupCollapsed: T({}, U, {
              value: mA
            }),
            groupEnd: T({}, U, {
              value: HA
            })
          });
        }
        Z < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var W = C.ReactCurrentDispatcher, lA;
    function oA(U, M, Y) {
      {
        if (lA === void 0)
          try {
            throw Error();
          } catch (gA) {
            var sA = gA.stack.trim().match(/\n( *(at )?)/);
            lA = sA && sA[1] || "";
          }
        return `
` + lA + U;
      }
    }
    var bA = !1, NA;
    {
      var eA = typeof WeakMap == "function" ? WeakMap : Map;
      NA = new eA();
    }
    function cA(U, M) {
      if (!U || bA)
        return "";
      {
        var Y = NA.get(U);
        if (Y !== void 0)
          return Y;
      }
      var sA;
      bA = !0;
      var gA = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var VA;
      VA = W.current, W.current = null, R();
      try {
        if (M) {
          var OA = function() {
            throw Error();
          };
          if (Object.defineProperty(OA.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(OA, []);
            } catch (ve) {
              sA = ve;
            }
            Reflect.construct(U, [], OA);
          } else {
            try {
              OA.call();
            } catch (ve) {
              sA = ve;
            }
            U.call(OA.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ve) {
            sA = ve;
          }
          U();
        }
      } catch (ve) {
        if (ve && sA && typeof ve.stack == "string") {
          for (var _A = ve.stack.split(`
`), de = sA.stack.split(`
`), Ae = _A.length - 1, ie = de.length - 1; Ae >= 1 && ie >= 0 && _A[Ae] !== de[ie]; )
            ie--;
          for (; Ae >= 1 && ie >= 0; Ae--, ie--)
            if (_A[Ae] !== de[ie]) {
              if (Ae !== 1 || ie !== 1)
                do
                  if (Ae--, ie--, ie < 0 || _A[Ae] !== de[ie]) {
                    var He = `
` + _A[Ae].replace(" at new ", " at ");
                    return U.displayName && He.includes("<anonymous>") && (He = He.replace("<anonymous>", U.displayName)), typeof U == "function" && NA.set(U, He), He;
                  }
                while (Ae >= 1 && ie >= 0);
              break;
            }
        }
      } finally {
        bA = !1, W.current = VA, _(), Error.prepareStackTrace = gA;
      }
      var ar = U ? U.displayName || U.name : "", _r = ar ? oA(ar) : "";
      return typeof U == "function" && NA.set(U, _r), _r;
    }
    function IA(U, M, Y) {
      return cA(U, !1);
    }
    function SA(U) {
      var M = U.prototype;
      return !!(M && M.isReactComponent);
    }
    function DA(U, M, Y) {
      if (U == null)
        return "";
      if (typeof U == "function")
        return cA(U, SA(U));
      if (typeof U == "string")
        return oA(U);
      switch (U) {
        case n:
          return oA("Suspense");
        case a:
          return oA("SuspenseList");
      }
      if (typeof U == "object")
        switch (U.$$typeof) {
          case c:
            return IA(U.render);
          case u:
            return DA(U.type, M, Y);
          case B: {
            var sA = U, gA = sA._payload, VA = sA._init;
            try {
              return DA(VA(gA), M, Y);
            } catch {
            }
          }
        }
      return "";
    }
    var jA = Object.prototype.hasOwnProperty, we = {}, ne = C.ReactDebugCurrentFrame;
    function PA(U) {
      if (U) {
        var M = U._owner, Y = DA(U.type, U._source, M ? M.type : null);
        ne.setExtraStackFrame(Y);
      } else
        ne.setExtraStackFrame(null);
    }
    function $A(U, M, Y, sA, gA) {
      {
        var VA = Function.call.bind(jA);
        for (var OA in U)
          if (VA(U, OA)) {
            var _A = void 0;
            try {
              if (typeof U[OA] != "function") {
                var de = Error((sA || "React class") + ": " + Y + " type `" + OA + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof U[OA] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw de.name = "Invariant Violation", de;
              }
              _A = U[OA](M, OA, sA, Y, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ae) {
              _A = Ae;
            }
            _A && !(_A instanceof Error) && (PA(gA), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", sA || "React class", Y, OA, typeof _A), PA(null)), _A instanceof Error && !(_A.message in we) && (we[_A.message] = !0, PA(gA), v("Failed %s type: %s", Y, _A.message), PA(null));
          }
      }
    }
    var zA = Array.isArray;
    function te(U) {
      return zA(U);
    }
    function ye(U) {
      {
        var M = typeof Symbol == "function" && Symbol.toStringTag, Y = M && U[Symbol.toStringTag] || U.constructor.name || "Object";
        return Y;
      }
    }
    function fe(U) {
      try {
        return he(U), !1;
      } catch {
        return !0;
      }
    }
    function he(U) {
      return "" + U;
    }
    function le(U) {
      if (fe(U))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ye(U)), he(U);
    }
    var $ = C.ReactCurrentOwner, FA = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, oe, RA, ZA;
    ZA = {};
    function rA(U) {
      if (jA.call(U, "ref")) {
        var M = Object.getOwnPropertyDescriptor(U, "ref").get;
        if (M && M.isReactWarning)
          return !1;
      }
      return U.ref !== void 0;
    }
    function BA(U) {
      if (jA.call(U, "key")) {
        var M = Object.getOwnPropertyDescriptor(U, "key").get;
        if (M && M.isReactWarning)
          return !1;
      }
      return U.key !== void 0;
    }
    function xA(U, M) {
      if (typeof U.ref == "string" && $.current && M && $.current.stateNode !== M) {
        var Y = x($.current.type);
        ZA[Y] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', x($.current.type), U.ref), ZA[Y] = !0);
      }
    }
    function GA(U, M) {
      {
        var Y = function() {
          oe || (oe = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        Y.isReactWarning = !0, Object.defineProperty(U, "key", {
          get: Y,
          configurable: !0
        });
      }
    }
    function WA(U, M) {
      {
        var Y = function() {
          RA || (RA = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        Y.isReactWarning = !0, Object.defineProperty(U, "ref", {
          get: Y,
          configurable: !0
        });
      }
    }
    var kA = function(U, M, Y, sA, gA, VA, OA) {
      var _A = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: A,
        // Built-in properties that belong on the element
        type: U,
        key: M,
        ref: Y,
        props: OA,
        // Record the component responsible for creating this element.
        _owner: VA
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
        value: gA
      }), Object.freeze && (Object.freeze(_A.props), Object.freeze(_A)), _A;
    };
    function Le(U, M, Y, sA, gA) {
      {
        var VA, OA = {}, _A = null, de = null;
        Y !== void 0 && (le(Y), _A = "" + Y), BA(M) && (le(M.key), _A = "" + M.key), rA(M) && (de = M.ref, xA(M, gA));
        for (VA in M)
          jA.call(M, VA) && !FA.hasOwnProperty(VA) && (OA[VA] = M[VA]);
        if (U && U.defaultProps) {
          var Ae = U.defaultProps;
          for (VA in Ae)
            OA[VA] === void 0 && (OA[VA] = Ae[VA]);
        }
        if (_A || de) {
          var ie = typeof U == "function" ? U.displayName || U.name || "Unknown" : U;
          _A && GA(OA, ie), de && WA(OA, ie);
        }
        return kA(U, _A, de, gA, sA, $.current, OA);
      }
    }
    var Pe = C.ReactCurrentOwner, qe = C.ReactDebugCurrentFrame;
    function Me(U) {
      if (U) {
        var M = U._owner, Y = DA(U.type, U._source, M ? M.type : null);
        qe.setExtraStackFrame(Y);
      } else
        qe.setExtraStackFrame(null);
    }
    var $e;
    $e = !1;
    function De(U) {
      return typeof U == "object" && U !== null && U.$$typeof === A;
    }
    function Ar() {
      {
        if (Pe.current) {
          var U = x(Pe.current.type);
          if (U)
            return `

Check the render method of \`` + U + "`.";
        }
        return "";
      }
    }
    function pr(U) {
      {
        if (U !== void 0) {
          var M = U.fileName.replace(/^.*[\\\/]/, ""), Y = U.lineNumber;
          return `

Check your code at ` + M + ":" + Y + ".";
        }
        return "";
      }
    }
    var p = {};
    function E(U) {
      {
        var M = Ar();
        if (!M) {
          var Y = typeof U == "string" ? U : U.displayName || U.name;
          Y && (M = `

Check the top-level render call using <` + Y + ">.");
        }
        return M;
      }
    }
    function y(U, M) {
      {
        if (!U._store || U._store.validated || U.key != null)
          return;
        U._store.validated = !0;
        var Y = E(M);
        if (p[Y])
          return;
        p[Y] = !0;
        var sA = "";
        U && U._owner && U._owner !== Pe.current && (sA = " It was passed a child from " + x(U._owner.type) + "."), Me(U), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Y, sA), Me(null);
      }
    }
    function K(U, M) {
      {
        if (typeof U != "object")
          return;
        if (te(U))
          for (var Y = 0; Y < U.length; Y++) {
            var sA = U[Y];
            De(sA) && y(sA, M);
          }
        else if (De(U))
          U._store && (U._store.validated = !0);
        else if (U) {
          var gA = Q(U);
          if (typeof gA == "function" && gA !== U.entries)
            for (var VA = gA.call(U), OA; !(OA = VA.next()).done; )
              De(OA.value) && y(OA.value, M);
        }
      }
    }
    function S(U) {
      {
        var M = U.type;
        if (M == null || typeof M == "string")
          return;
        var Y;
        if (typeof M == "function")
          Y = M.propTypes;
        else if (typeof M == "object" && (M.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        M.$$typeof === u))
          Y = M.propTypes;
        else
          return;
        if (Y) {
          var sA = x(M);
          $A(Y, U.props, "prop", sA, U);
        } else if (M.PropTypes !== void 0 && !$e) {
          $e = !0;
          var gA = x(M);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", gA || "Unknown");
        }
        typeof M.getDefaultProps == "function" && !M.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function O(U) {
      {
        for (var M = Object.keys(U.props), Y = 0; Y < M.length; Y++) {
          var sA = M[Y];
          if (sA !== "children" && sA !== "key") {
            Me(U), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", sA), Me(null);
            break;
          }
        }
        U.ref !== null && (Me(U), v("Invalid attribute `ref` supplied to `React.Fragment`."), Me(null));
      }
    }
    function k(U, M, Y, sA, gA, VA) {
      {
        var OA = j(U);
        if (!OA) {
          var _A = "";
          (U === void 0 || typeof U == "object" && U !== null && Object.keys(U).length === 0) && (_A += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var de = pr(gA);
          de ? _A += de : _A += Ar();
          var Ae;
          U === null ? Ae = "null" : te(U) ? Ae = "array" : U !== void 0 && U.$$typeof === A ? (Ae = "<" + (x(U.type) || "Unknown") + " />", _A = " Did you accidentally export a JSX literal instead of a component?") : Ae = typeof U, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ae, _A);
        }
        var ie = Le(U, M, Y, gA, VA);
        if (ie == null)
          return ie;
        if (OA) {
          var He = M.children;
          if (He !== void 0)
            if (sA)
              if (te(He)) {
                for (var ar = 0; ar < He.length; ar++)
                  K(He[ar], U);
                Object.freeze && Object.freeze(He);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              K(He, U);
        }
        return U === r ? O(ie) : S(ie), ie;
      }
    }
    function z(U, M, Y) {
      return k(U, M, Y, !0);
    }
    function q(U, M, Y) {
      return k(U, M, Y, !1);
    }
    var J = q, fA = z;
    gt.Fragment = r, gt.jsx = J, gt.jsxs = fA;
  }()), gt;
}
process.env.NODE_ENV === "production" ? go.exports = Ls() : go.exports = Ss();
var un = go.exports;
const Ks = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let yr = (e = 21) => {
  let A = "", t = crypto.getRandomValues(new Uint8Array(e));
  for (; e--; )
    A += Ks[t[e] & 63];
  return A;
};
var wn = { exports: {} };
/*! For license information please see index.js.LICENSE.txt */
wn.exports;
(function(e, A) {
  (function(t, r) {
    e.exports = r(No);
  })(ft, (t) => (() => {
    var r = { 2761: (i) => {
      i.exports = function(c) {
        if (typeof c != "function")
          throw TypeError(c + " is not a function!");
        return c;
      };
    }, 2094: (i, c, n) => {
      var a = n(2190)("unscopables"), u = Array.prototype;
      u[a] == null && n(4216)(u, a, {}), i.exports = function(B) {
        u[a][B] = !0;
      };
    }, 8492: (i, c, n) => {
      var a = n(2070)(!0);
      i.exports = function(u, B, f) {
        return B + (f ? a(u, B).length : 1);
      };
    }, 5824: (i) => {
      i.exports = function(c, n, a, u) {
        if (!(c instanceof n) || u !== void 0 && u in c)
          throw TypeError(a + ": incorrect invocation!");
        return c;
      };
    }, 6365: (i, c, n) => {
      var a = n(7334);
      i.exports = function(u) {
        if (!a(u))
          throw TypeError(u + " is not an object!");
        return u;
      };
    }, 6257: (i, c, n) => {
      var a = n(6033), u = n(8615), B = n(6078);
      i.exports = [].copyWithin || function(f, w) {
        var d = a(this), Q = B(d.length), C = u(f, Q), v = u(w, Q), m = arguments.length > 2 ? arguments[2] : void 0, b = Math.min((m === void 0 ? Q : u(m, Q)) - v, Q - C), D = 1;
        for (v < C && C < v + b && (D = -1, v += b - 1, C += b - 1); b-- > 0; )
          v in d ? d[C] = d[v] : delete d[C], C += D, v += D;
        return d;
      };
    }, 3195: (i, c, n) => {
      var a = n(6033), u = n(8615), B = n(6078);
      i.exports = function(f) {
        for (var w = a(this), d = B(w.length), Q = arguments.length, C = u(Q > 1 ? arguments[1] : void 0, d), v = Q > 2 ? arguments[2] : void 0, m = v === void 0 ? d : u(v, d); m > C; )
          w[C++] = f;
        return w;
      };
    }, 9021: (i, c, n) => {
      var a = n(5703), u = n(6078), B = n(8615);
      i.exports = function(f) {
        return function(w, d, Q) {
          var C, v = a(w), m = u(v.length), b = B(Q, m);
          if (f && d != d) {
            for (; m > b; )
              if ((C = v[b++]) != C)
                return !0;
          } else
            for (; m > b; b++)
              if ((f || b in v) && v[b] === d)
                return f || b || 0;
          return !f && -1;
        };
      };
    }, 8309: (i, c, n) => {
      var a = n(1528), u = n(8467), B = n(6033), f = n(6078), w = n(3531);
      i.exports = function(d, Q) {
        var C = d == 1, v = d == 2, m = d == 3, b = d == 4, D = d == 6, L = d == 5 || D, N = Q || w;
        return function(V, H, j) {
          for (var P, X, x = B(V), T = u(x), Z = a(H, j, 3), aA = f(T.length), nA = 0, EA = C ? N(V, aA) : v ? N(V, 0) : void 0; aA > nA; nA++)
            if ((L || nA in T) && (X = Z(P = T[nA], nA, x), d)) {
              if (C)
                EA[nA] = X;
              else if (X)
                switch (d) {
                  case 3:
                    return !0;
                  case 5:
                    return P;
                  case 6:
                    return nA;
                  case 2:
                    EA.push(P);
                }
              else if (b)
                return !1;
            }
          return D ? -1 : m || b ? b : EA;
        };
      };
    }, 9291: (i, c, n) => {
      var a = n(2761), u = n(6033), B = n(8467), f = n(6078);
      i.exports = function(w, d, Q, C, v) {
        a(d);
        var m = u(w), b = B(m), D = f(m.length), L = v ? D - 1 : 0, N = v ? -1 : 1;
        if (Q < 2)
          for (; ; ) {
            if (L in b) {
              C = b[L], L += N;
              break;
            }
            if (L += N, v ? L < 0 : D <= L)
              throw TypeError("Reduce of empty array with no initial value");
          }
        for (; v ? L >= 0 : D > L; L += N)
          L in b && (C = d(C, b[L], L, m));
        return C;
      };
    }, 1071: (i, c, n) => {
      var a = n(7334), u = n(9141), B = n(2190)("species");
      i.exports = function(f) {
        var w;
        return u(f) && (typeof (w = f.constructor) != "function" || w !== Array && !u(w.prototype) || (w = void 0), a(w) && (w = w[B]) === null && (w = void 0)), w === void 0 ? Array : w;
      };
    }, 3531: (i, c, n) => {
      var a = n(1071);
      i.exports = function(u, B) {
        return new (a(u))(B);
      };
    }, 9337: (i, c, n) => {
      var a = n(2761), u = n(7334), B = n(7757), f = [].slice, w = {}, d = function(Q, C, v) {
        if (!(C in w)) {
          for (var m = [], b = 0; b < C; b++)
            m[b] = "a[" + b + "]";
          w[C] = Function("F,a", "return new F(" + m.join(",") + ")");
        }
        return w[C](Q, v);
      };
      i.exports = Function.bind || function(Q) {
        var C = a(this), v = f.call(arguments, 1), m = function() {
          var b = v.concat(f.call(arguments));
          return this instanceof m ? d(C, b.length, b) : B(C, b, Q);
        };
        return u(C.prototype) && (m.prototype = C.prototype), m;
      };
    }, 106: (i, c, n) => {
      var a = n(6688), u = n(2190)("toStringTag"), B = a(/* @__PURE__ */ function() {
        return arguments;
      }()) == "Arguments";
      i.exports = function(f) {
        var w, d, Q;
        return f === void 0 ? "Undefined" : f === null ? "Null" : typeof (d = function(C, v) {
          try {
            return C[v];
          } catch {
          }
        }(w = Object(f), u)) == "string" ? d : B ? a(w) : (Q = a(w)) == "Object" && typeof w.callee == "function" ? "Arguments" : Q;
      };
    }, 6688: (i) => {
      var c = {}.toString;
      i.exports = function(n) {
        return c.call(n).slice(8, -1);
      };
    }, 5635: (i, c, n) => {
      var a = n(8558).f, u = n(2897), B = n(2243), f = n(1528), w = n(5824), d = n(1891), Q = n(1195), C = n(5038), v = n(9766), m = n(6628), b = n(998).fastKey, D = n(9060), L = m ? "_s" : "size", N = function(V, H) {
        var j, P = b(H);
        if (P !== "F")
          return V._i[P];
        for (j = V._f; j; j = j.n)
          if (j.k == H)
            return j;
      };
      i.exports = { getConstructor: function(V, H, j, P) {
        var X = V(function(x, T) {
          w(x, X, H, "_i"), x._t = H, x._i = u(null), x._f = void 0, x._l = void 0, x[L] = 0, T != null && d(T, j, x[P], x);
        });
        return B(X.prototype, { clear: function() {
          for (var x = D(this, H), T = x._i, Z = x._f; Z; Z = Z.n)
            Z.r = !0, Z.p && (Z.p = Z.p.n = void 0), delete T[Z.i];
          x._f = x._l = void 0, x[L] = 0;
        }, delete: function(x) {
          var T = D(this, H), Z = N(T, x);
          if (Z) {
            var aA = Z.n, nA = Z.p;
            delete T._i[Z.i], Z.r = !0, nA && (nA.n = aA), aA && (aA.p = nA), T._f == Z && (T._f = aA), T._l == Z && (T._l = nA), T[L]--;
          }
          return !!Z;
        }, forEach: function(x) {
          D(this, H);
          for (var T, Z = f(x, arguments.length > 1 ? arguments[1] : void 0, 3); T = T ? T.n : this._f; )
            for (Z(T.v, T.k, this); T && T.r; )
              T = T.p;
        }, has: function(x) {
          return !!N(D(this, H), x);
        } }), m && a(X.prototype, "size", { get: function() {
          return D(this, H)[L];
        } }), X;
      }, def: function(V, H, j) {
        var P, X, x = N(V, H);
        return x ? x.v = j : (V._l = x = { i: X = b(H, !0), k: H, v: j, p: P = V._l, n: void 0, r: !1 }, V._f || (V._f = x), P && (P.n = x), V[L]++, X !== "F" && (V._i[X] = x)), V;
      }, getEntry: N, setStrong: function(V, H, j) {
        Q(V, H, function(P, X) {
          this._t = D(P, H), this._k = X, this._l = void 0;
        }, function() {
          for (var P = this, X = P._k, x = P._l; x && x.r; )
            x = x.p;
          return P._t && (P._l = x = x ? x.n : P._t._f) ? C(0, X == "keys" ? x.k : X == "values" ? x.v : [x.k, x.v]) : (P._t = void 0, C(1));
        }, j ? "entries" : "values", !j, !0), v(H);
      } };
    }, 7611: (i, c, n) => {
      var a = n(8113), u = n(5772), B = n(7738), f = n(2243), w = n(998), d = n(1891), Q = n(5824), C = n(7334), v = n(8625), m = n(3143), b = n(5727), D = n(8938);
      i.exports = function(L, N, V, H, j, P) {
        var X = a[L], x = X, T = j ? "set" : "add", Z = x && x.prototype, aA = {}, nA = function(dA) {
          var R = Z[dA];
          B(Z, dA, dA == "delete" || dA == "has" ? function(_) {
            return !(P && !C(_)) && R.call(this, _ === 0 ? 0 : _);
          } : dA == "get" ? function(_) {
            return P && !C(_) ? void 0 : R.call(this, _ === 0 ? 0 : _);
          } : dA == "add" ? function(_) {
            return R.call(this, _ === 0 ? 0 : _), this;
          } : function(_, W) {
            return R.call(this, _ === 0 ? 0 : _, W), this;
          });
        };
        if (typeof x == "function" && (P || Z.forEach && !v(function() {
          new x().entries().next();
        }))) {
          var EA = new x(), KA = EA[T](P ? {} : -0, 1) != EA, yA = v(function() {
            EA.has(1);
          }), mA = m(function(dA) {
            new x(dA);
          }), HA = !P && v(function() {
            for (var dA = new x(), R = 5; R--; )
              dA[T](R, R);
            return !dA.has(-0);
          });
          mA || ((x = N(function(dA, R) {
            Q(dA, x, L);
            var _ = D(new X(), dA, x);
            return R != null && d(R, j, _[T], _), _;
          })).prototype = Z, Z.constructor = x), (yA || HA) && (nA("delete"), nA("has"), j && nA("get")), (HA || KA) && nA(T), P && Z.clear && delete Z.clear;
        } else
          x = H.getConstructor(N, L, j, T), f(x.prototype, V), w.NEED = !0;
        return b(x, L), aA[L] = x, u(u.G + u.W + u.F * (x != X), aA), P || H.setStrong(x, L, j), x;
      };
    }, 66: (i) => {
      var c = i.exports = { version: "2.6.12" };
      typeof __e == "number" && (__e = c);
    }, 6644: (i, c, n) => {
      var a = n(8558), u = n(6061);
      i.exports = function(B, f, w) {
        f in B ? a.f(B, f, u(0, w)) : B[f] = w;
      };
    }, 1528: (i, c, n) => {
      var a = n(2761);
      i.exports = function(u, B, f) {
        if (a(u), B === void 0)
          return u;
        switch (f) {
          case 1:
            return function(w) {
              return u.call(B, w);
            };
          case 2:
            return function(w, d) {
              return u.call(B, w, d);
            };
          case 3:
            return function(w, d, Q) {
              return u.call(B, w, d, Q);
            };
        }
        return function() {
          return u.apply(B, arguments);
        };
      };
    }, 1622: (i) => {
      i.exports = function(c) {
        if (c == null)
          throw TypeError("Can't call method on  " + c);
        return c;
      };
    }, 6628: (i, c, n) => {
      i.exports = !n(8625)(function() {
        return Object.defineProperty({}, "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }, 5050: (i, c, n) => {
      var a = n(7334), u = n(8113).document, B = a(u) && a(u.createElement);
      i.exports = function(f) {
        return B ? u.createElement(f) : {};
      };
    }, 3603: (i) => {
      i.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    }, 7820: (i, c, n) => {
      var a = n(2912), u = n(7957), B = n(5873);
      i.exports = function(f) {
        var w = a(f), d = u.f;
        if (d)
          for (var Q, C = d(f), v = B.f, m = 0; C.length > m; )
            v.call(f, Q = C[m++]) && w.push(Q);
        return w;
      };
    }, 5772: (i, c, n) => {
      var a = n(8113), u = n(66), B = n(4216), f = n(7738), w = n(1528), d = "prototype", Q = function(C, v, m) {
        var b, D, L, N, V = C & Q.F, H = C & Q.G, j = C & Q.S, P = C & Q.P, X = C & Q.B, x = H ? a : j ? a[v] || (a[v] = {}) : (a[v] || {})[d], T = H ? u : u[v] || (u[v] = {}), Z = T[d] || (T[d] = {});
        for (b in H && (m = v), m)
          L = ((D = !V && x && x[b] !== void 0) ? x : m)[b], N = X && D ? w(L, a) : P && typeof L == "function" ? w(Function.call, L) : L, x && f(x, b, L, C & Q.U), T[b] != L && B(T, b, N), P && Z[b] != L && (Z[b] = L);
      };
      a.core = u, Q.F = 1, Q.G = 2, Q.S = 4, Q.P = 8, Q.B = 16, Q.W = 32, Q.U = 64, Q.R = 128, i.exports = Q;
    }, 6570: (i, c, n) => {
      var a = n(2190)("match");
      i.exports = function(u) {
        var B = /./;
        try {
          "/./"[u](B);
        } catch {
          try {
            return B[a] = !1, !"/./"[u](B);
          } catch {
          }
        }
        return !0;
      };
    }, 8625: (i) => {
      i.exports = function(c) {
        try {
          return !!c();
        } catch {
          return !0;
        }
      };
    }, 8897: (i, c, n) => {
      n(5846);
      var a = n(7738), u = n(4216), B = n(8625), f = n(1622), w = n(2190), d = n(3288), Q = w("species"), C = !B(function() {
        var m = /./;
        return m.exec = function() {
          var b = [];
          return b.groups = { a: "7" }, b;
        }, "".replace(m, "$<a>") !== "7";
      }), v = function() {
        var m = /(?:)/, b = m.exec;
        m.exec = function() {
          return b.apply(this, arguments);
        };
        var D = "ab".split(m);
        return D.length === 2 && D[0] === "a" && D[1] === "b";
      }();
      i.exports = function(m, b, D) {
        var L = w(m), N = !B(function() {
          var x = {};
          return x[L] = function() {
            return 7;
          }, ""[m](x) != 7;
        }), V = N ? !B(function() {
          var x = !1, T = /a/;
          return T.exec = function() {
            return x = !0, null;
          }, m === "split" && (T.constructor = {}, T.constructor[Q] = function() {
            return T;
          }), T[L](""), !x;
        }) : void 0;
        if (!N || !V || m === "replace" && !C || m === "split" && !v) {
          var H = /./[L], j = D(f, L, ""[m], function(x, T, Z, aA, nA) {
            return T.exec === d ? N && !nA ? { done: !0, value: H.call(T, Z, aA) } : { done: !0, value: x.call(Z, T, aA) } : { done: !1 };
          }), P = j[0], X = j[1];
          a(String.prototype, m, P), u(RegExp.prototype, L, b == 2 ? function(x, T) {
            return X.call(x, this, T);
          } : function(x) {
            return X.call(x, this);
          });
        }
      };
    }, 4859: (i, c, n) => {
      var a = n(6365);
      i.exports = function() {
        var u = a(this), B = "";
        return u.global && (B += "g"), u.ignoreCase && (B += "i"), u.multiline && (B += "m"), u.unicode && (B += "u"), u.sticky && (B += "y"), B;
      };
    }, 1891: (i, c, n) => {
      var a = n(1528), u = n(3221), B = n(8908), f = n(6365), w = n(6078), d = n(7107), Q = {}, C = {}, v = i.exports = function(m, b, D, L, N) {
        var V, H, j, P, X = N ? function() {
          return m;
        } : d(m), x = a(D, L, b ? 2 : 1), T = 0;
        if (typeof X != "function")
          throw TypeError(m + " is not iterable!");
        if (B(X)) {
          for (V = w(m.length); V > T; T++)
            if ((P = b ? x(f(H = m[T])[0], H[1]) : x(m[T])) === Q || P === C)
              return P;
        } else
          for (j = X.call(m); !(H = j.next()).done; )
            if ((P = u(j, x, H.value, b)) === Q || P === C)
              return P;
      };
      v.BREAK = Q, v.RETURN = C;
    }, 646: (i, c, n) => {
      i.exports = n(8655)("native-function-to-string", Function.toString);
    }, 8113: (i) => {
      var c = i.exports = typeof window < "u" && window.Math == Math ? window : typeof self < "u" && self.Math == Math ? self : Function("return this")();
      typeof __g == "number" && (__g = c);
    }, 4040: (i) => {
      var c = {}.hasOwnProperty;
      i.exports = function(n, a) {
        return c.call(n, a);
      };
    }, 4216: (i, c, n) => {
      var a = n(8558), u = n(6061);
      i.exports = n(6628) ? function(B, f, w) {
        return a.f(B, f, u(1, w));
      } : function(B, f, w) {
        return B[f] = w, B;
      };
    }, 8954: (i, c, n) => {
      var a = n(8113).document;
      i.exports = a && a.documentElement;
    }, 5100: (i, c, n) => {
      i.exports = !n(6628) && !n(8625)(function() {
        return Object.defineProperty(n(5050)("div"), "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }, 8938: (i, c, n) => {
      var a = n(7334), u = n(6095).set;
      i.exports = function(B, f, w) {
        var d, Q = f.constructor;
        return Q !== w && typeof Q == "function" && (d = Q.prototype) !== w.prototype && a(d) && u && u(B, d), B;
      };
    }, 7757: (i) => {
      i.exports = function(c, n, a) {
        var u = a === void 0;
        switch (n.length) {
          case 0:
            return u ? c() : c.call(a);
          case 1:
            return u ? c(n[0]) : c.call(a, n[0]);
          case 2:
            return u ? c(n[0], n[1]) : c.call(a, n[0], n[1]);
          case 3:
            return u ? c(n[0], n[1], n[2]) : c.call(a, n[0], n[1], n[2]);
          case 4:
            return u ? c(n[0], n[1], n[2], n[3]) : c.call(a, n[0], n[1], n[2], n[3]);
        }
        return c.apply(a, n);
      };
    }, 8467: (i, c, n) => {
      var a = n(6688);
      i.exports = Object("z").propertyIsEnumerable(0) ? Object : function(u) {
        return a(u) == "String" ? u.split("") : Object(u);
      };
    }, 8908: (i, c, n) => {
      var a = n(3988), u = n(2190)("iterator"), B = Array.prototype;
      i.exports = function(f) {
        return f !== void 0 && (a.Array === f || B[u] === f);
      };
    }, 9141: (i, c, n) => {
      var a = n(6688);
      i.exports = Array.isArray || function(u) {
        return a(u) == "Array";
      };
    }, 7334: (i) => {
      i.exports = function(c) {
        return typeof c == "object" ? c !== null : typeof c == "function";
      };
    }, 4587: (i, c, n) => {
      var a = n(7334), u = n(6688), B = n(2190)("match");
      i.exports = function(f) {
        var w;
        return a(f) && ((w = f[B]) !== void 0 ? !!w : u(f) == "RegExp");
      };
    }, 3221: (i, c, n) => {
      var a = n(6365);
      i.exports = function(u, B, f, w) {
        try {
          return w ? B(a(f)[0], f[1]) : B(f);
        } catch (Q) {
          var d = u.return;
          throw d !== void 0 && a(d.call(u)), Q;
        }
      };
    }, 6445: (i, c, n) => {
      var a = n(2897), u = n(6061), B = n(5727), f = {};
      n(4216)(f, n(2190)("iterator"), function() {
        return this;
      }), i.exports = function(w, d, Q) {
        w.prototype = a(f, { next: u(1, Q) }), B(w, d + " Iterator");
      };
    }, 1195: (i, c, n) => {
      var a = n(1422), u = n(5772), B = n(7738), f = n(4216), w = n(3988), d = n(6445), Q = n(5727), C = n(9002), v = n(2190)("iterator"), m = !([].keys && "next" in [].keys()), b = "keys", D = "values", L = function() {
        return this;
      };
      i.exports = function(N, V, H, j, P, X, x) {
        d(H, V, j);
        var T, Z, aA, nA = function(W) {
          if (!m && W in mA)
            return mA[W];
          switch (W) {
            case b:
            case D:
              return function() {
                return new H(this, W);
              };
          }
          return function() {
            return new H(this, W);
          };
        }, EA = V + " Iterator", KA = P == D, yA = !1, mA = N.prototype, HA = mA[v] || mA["@@iterator"] || P && mA[P], dA = HA || nA(P), R = P ? KA ? nA("entries") : dA : void 0, _ = V == "Array" && mA.entries || HA;
        if (_ && (aA = C(_.call(new N()))) !== Object.prototype && aA.next && (Q(aA, EA, !0), a || typeof aA[v] == "function" || f(aA, v, L)), KA && HA && HA.name !== D && (yA = !0, dA = function() {
          return HA.call(this);
        }), a && !x || !m && !yA && mA[v] || f(mA, v, dA), w[V] = dA, w[EA] = L, P)
          if (T = { values: KA ? dA : nA(D), keys: X ? dA : nA(b), entries: R }, x)
            for (Z in T)
              Z in mA || B(mA, Z, T[Z]);
          else
            u(u.P + u.F * (m || yA), V, T);
        return T;
      };
    }, 3143: (i, c, n) => {
      var a = n(2190)("iterator"), u = !1;
      try {
        var B = [7][a]();
        B.return = function() {
          u = !0;
        }, Array.from(B, function() {
          throw 2;
        });
      } catch {
      }
      i.exports = function(f, w) {
        if (!w && !u)
          return !1;
        var d = !1;
        try {
          var Q = [7], C = Q[a]();
          C.next = function() {
            return { done: d = !0 };
          }, Q[a] = function() {
            return C;
          }, f(Q);
        } catch {
        }
        return d;
      };
    }, 5038: (i) => {
      i.exports = function(c, n) {
        return { value: n, done: !!c };
      };
    }, 3988: (i) => {
      i.exports = {};
    }, 1422: (i) => {
      i.exports = !1;
    }, 998: (i, c, n) => {
      var a = n(5078)("meta"), u = n(7334), B = n(4040), f = n(8558).f, w = 0, d = Object.isExtensible || function() {
        return !0;
      }, Q = !n(8625)(function() {
        return d(Object.preventExtensions({}));
      }), C = function(m) {
        f(m, a, { value: { i: "O" + ++w, w: {} } });
      }, v = i.exports = { KEY: a, NEED: !1, fastKey: function(m, b) {
        if (!u(m))
          return typeof m == "symbol" ? m : (typeof m == "string" ? "S" : "P") + m;
        if (!B(m, a)) {
          if (!d(m))
            return "F";
          if (!b)
            return "E";
          C(m);
        }
        return m[a].i;
      }, getWeak: function(m, b) {
        if (!B(m, a)) {
          if (!d(m))
            return !0;
          if (!b)
            return !1;
          C(m);
        }
        return m[a].w;
      }, onFreeze: function(m) {
        return Q && v.NEED && d(m) && !B(m, a) && C(m), m;
      } };
    }, 3492: (i, c, n) => {
      var a = n(8113), u = n(9124).set, B = a.MutationObserver || a.WebKitMutationObserver, f = a.process, w = a.Promise, d = n(6688)(f) == "process";
      i.exports = function() {
        var Q, C, v, m = function() {
          var N, V;
          for (d && (N = f.domain) && N.exit(); Q; ) {
            V = Q.fn, Q = Q.next;
            try {
              V();
            } catch (H) {
              throw Q ? v() : C = void 0, H;
            }
          }
          C = void 0, N && N.enter();
        };
        if (d)
          v = function() {
            f.nextTick(m);
          };
        else if (!B || a.navigator && a.navigator.standalone)
          if (w && w.resolve) {
            var b = w.resolve(void 0);
            v = function() {
              b.then(m);
            };
          } else
            v = function() {
              u.call(a, m);
            };
        else {
          var D = !0, L = document.createTextNode("");
          new B(m).observe(L, { characterData: !0 }), v = function() {
            L.data = D = !D;
          };
        }
        return function(N) {
          var V = { fn: N, next: void 0 };
          C && (C.next = V), Q || (Q = V, v()), C = V;
        };
      };
    }, 8577: (i, c, n) => {
      var a = n(2761);
      function u(B) {
        var f, w;
        this.promise = new B(function(d, Q) {
          if (f !== void 0 || w !== void 0)
            throw TypeError("Bad Promise constructor");
          f = d, w = Q;
        }), this.resolve = a(f), this.reject = a(w);
      }
      i.exports.f = function(B) {
        return new u(B);
      };
    }, 2897: (i, c, n) => {
      var a = n(6365), u = n(7331), B = n(3603), f = n(8034)("IE_PROTO"), w = function() {
      }, d = "prototype", Q = function() {
        var C, v = n(5050)("iframe"), m = B.length;
        for (v.style.display = "none", n(8954).appendChild(v), v.src = "javascript:", (C = v.contentWindow.document).open(), C.write("<script>document.F=Object<\/script>"), C.close(), Q = C.F; m--; )
          delete Q[d][B[m]];
        return Q();
      };
      i.exports = Object.create || function(C, v) {
        var m;
        return C !== null ? (w[d] = a(C), m = new w(), w[d] = null, m[f] = C) : m = Q(), v === void 0 ? m : u(m, v);
      };
    }, 8558: (i, c, n) => {
      var a = n(6365), u = n(5100), B = n(1382), f = Object.defineProperty;
      c.f = n(6628) ? Object.defineProperty : function(w, d, Q) {
        if (a(w), d = B(d, !0), a(Q), u)
          try {
            return f(w, d, Q);
          } catch {
          }
        if ("get" in Q || "set" in Q)
          throw TypeError("Accessors not supported!");
        return "value" in Q && (w[d] = Q.value), w;
      };
    }, 7331: (i, c, n) => {
      var a = n(8558), u = n(6365), B = n(2912);
      i.exports = n(6628) ? Object.defineProperties : function(f, w) {
        u(f);
        for (var d, Q = B(w), C = Q.length, v = 0; C > v; )
          a.f(f, d = Q[v++], w[d]);
        return f;
      };
    }, 4662: (i, c, n) => {
      var a = n(5873), u = n(6061), B = n(5703), f = n(1382), w = n(4040), d = n(5100), Q = Object.getOwnPropertyDescriptor;
      c.f = n(6628) ? Q : function(C, v) {
        if (C = B(C), v = f(v, !0), d)
          try {
            return Q(C, v);
          } catch {
          }
        if (w(C, v))
          return u(!a.f.call(C, v), C[v]);
      };
    }, 5259: (i, c, n) => {
      var a = n(5703), u = n(6604).f, B = {}.toString, f = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
      i.exports.f = function(w) {
        return f && B.call(w) == "[object Window]" ? function(d) {
          try {
            return u(d);
          } catch {
            return f.slice();
          }
        }(w) : u(a(w));
      };
    }, 6604: (i, c, n) => {
      var a = n(5547), u = n(3603).concat("length", "prototype");
      c.f = Object.getOwnPropertyNames || function(B) {
        return a(B, u);
      };
    }, 7957: (i, c) => {
      c.f = Object.getOwnPropertySymbols;
    }, 9002: (i, c, n) => {
      var a = n(4040), u = n(6033), B = n(8034)("IE_PROTO"), f = Object.prototype;
      i.exports = Object.getPrototypeOf || function(w) {
        return w = u(w), a(w, B) ? w[B] : typeof w.constructor == "function" && w instanceof w.constructor ? w.constructor.prototype : w instanceof Object ? f : null;
      };
    }, 5547: (i, c, n) => {
      var a = n(4040), u = n(5703), B = n(9021)(!1), f = n(8034)("IE_PROTO");
      i.exports = function(w, d) {
        var Q, C = u(w), v = 0, m = [];
        for (Q in C)
          Q != f && a(C, Q) && m.push(Q);
        for (; d.length > v; )
          a(C, Q = d[v++]) && (~B(m, Q) || m.push(Q));
        return m;
      };
    }, 2912: (i, c, n) => {
      var a = n(5547), u = n(3603);
      i.exports = Object.keys || function(B) {
        return a(B, u);
      };
    }, 5873: (i, c) => {
      c.f = {}.propertyIsEnumerable;
    }, 468: (i, c, n) => {
      var a = n(5772), u = n(66), B = n(8625);
      i.exports = function(f, w) {
        var d = (u.Object || {})[f] || Object[f], Q = {};
        Q[f] = w(d), a(a.S + a.F * B(function() {
          d(1);
        }), "Object", Q);
      };
    }, 758: (i, c, n) => {
      var a = n(6628), u = n(2912), B = n(5703), f = n(5873).f;
      i.exports = function(w) {
        return function(d) {
          for (var Q, C = B(d), v = u(C), m = v.length, b = 0, D = []; m > b; )
            Q = v[b++], a && !f.call(C, Q) || D.push(w ? [Q, C[Q]] : C[Q]);
          return D;
        };
      };
    }, 6831: (i, c, n) => {
      var a = n(6604), u = n(7957), B = n(6365), f = n(8113).Reflect;
      i.exports = f && f.ownKeys || function(w) {
        var d = a.f(B(w)), Q = u.f;
        return Q ? d.concat(Q(w)) : d;
      };
    }, 9739: (i) => {
      i.exports = function(c) {
        try {
          return { e: !1, v: c() };
        } catch (n) {
          return { e: !0, v: n };
        }
      };
    }, 5151: (i, c, n) => {
      var a = n(6365), u = n(7334), B = n(8577);
      i.exports = function(f, w) {
        if (a(f), u(w) && w.constructor === f)
          return w;
        var d = B.f(f);
        return (0, d.resolve)(w), d.promise;
      };
    }, 6061: (i) => {
      i.exports = function(c, n) {
        return { enumerable: !(1 & c), configurable: !(2 & c), writable: !(4 & c), value: n };
      };
    }, 2243: (i, c, n) => {
      var a = n(7738);
      i.exports = function(u, B, f) {
        for (var w in B)
          a(u, w, B[w], f);
        return u;
      };
    }, 7738: (i, c, n) => {
      var a = n(8113), u = n(4216), B = n(4040), f = n(5078)("src"), w = n(646), d = "toString", Q = ("" + w).split(d);
      n(66).inspectSource = function(C) {
        return w.call(C);
      }, (i.exports = function(C, v, m, b) {
        var D = typeof m == "function";
        D && (B(m, "name") || u(m, "name", v)), C[v] !== m && (D && (B(m, f) || u(m, f, C[v] ? "" + C[v] : Q.join(String(v)))), C === a ? C[v] = m : b ? C[v] ? C[v] = m : u(C, v, m) : (delete C[v], u(C, v, m)));
      })(Function.prototype, d, function() {
        return typeof this == "function" && this[f] || w.call(this);
      });
    }, 2404: (i, c, n) => {
      var a = n(106), u = RegExp.prototype.exec;
      i.exports = function(B, f) {
        var w = B.exec;
        if (typeof w == "function") {
          var d = w.call(B, f);
          if (typeof d != "object")
            throw new TypeError("RegExp exec method returned something other than an Object or null");
          return d;
        }
        if (a(B) !== "RegExp")
          throw new TypeError("RegExp#exec called on incompatible receiver");
        return u.call(B, f);
      };
    }, 3288: (i, c, n) => {
      var a, u, B = n(4859), f = RegExp.prototype.exec, w = String.prototype.replace, d = f, Q = "lastIndex", C = (a = /a/, u = /b*/g, f.call(a, "a"), f.call(u, "a"), a[Q] !== 0 || u[Q] !== 0), v = /()??/.exec("")[1] !== void 0;
      (C || v) && (d = function(m) {
        var b, D, L, N, V = this;
        return v && (D = new RegExp("^" + V.source + "$(?!\\s)", B.call(V))), C && (b = V[Q]), L = f.call(V, m), C && L && (V[Q] = V.global ? L.index + L[0].length : b), v && L && L.length > 1 && w.call(L[0], D, function() {
          for (N = 1; N < arguments.length - 2; N++)
            arguments[N] === void 0 && (L[N] = void 0);
        }), L;
      }), i.exports = d;
    }, 6095: (i, c, n) => {
      var a = n(7334), u = n(6365), B = function(f, w) {
        if (u(f), !a(w) && w !== null)
          throw TypeError(w + ": can't set as prototype!");
      };
      i.exports = { set: Object.setPrototypeOf || ("__proto__" in {} ? function(f, w, d) {
        try {
          (d = n(1528)(Function.call, n(4662).f(Object.prototype, "__proto__").set, 2))(f, []), w = !(f instanceof Array);
        } catch {
          w = !0;
        }
        return function(Q, C) {
          return B(Q, C), w ? Q.__proto__ = C : d(Q, C), Q;
        };
      }({}, !1) : void 0), check: B };
    }, 9766: (i, c, n) => {
      var a = n(8113), u = n(8558), B = n(6628), f = n(2190)("species");
      i.exports = function(w) {
        var d = a[w];
        B && d && !d[f] && u.f(d, f, { configurable: !0, get: function() {
          return this;
        } });
      };
    }, 5727: (i, c, n) => {
      var a = n(8558).f, u = n(4040), B = n(2190)("toStringTag");
      i.exports = function(f, w, d) {
        f && !u(f = d ? f : f.prototype, B) && a(f, B, { configurable: !0, value: w });
      };
    }, 8034: (i, c, n) => {
      var a = n(8655)("keys"), u = n(5078);
      i.exports = function(B) {
        return a[B] || (a[B] = u(B));
      };
    }, 8655: (i, c, n) => {
      var a = n(66), u = n(8113), B = "__core-js_shared__", f = u[B] || (u[B] = {});
      (i.exports = function(w, d) {
        return f[w] || (f[w] = d !== void 0 ? d : {});
      })("versions", []).push({ version: a.version, mode: n(1422) ? "pure" : "global", copyright: "© 2020 Denis Pushkarev (zloirock.ru)" });
    }, 1987: (i, c, n) => {
      var a = n(6365), u = n(2761), B = n(2190)("species");
      i.exports = function(f, w) {
        var d, Q = a(f).constructor;
        return Q === void 0 || (d = a(Q)[B]) == null ? w : u(d);
      };
    }, 225: (i, c, n) => {
      var a = n(8625);
      i.exports = function(u, B) {
        return !!u && a(function() {
          B ? u.call(null, function() {
          }, 1) : u.call(null);
        });
      };
    }, 2070: (i, c, n) => {
      var a = n(3338), u = n(1622);
      i.exports = function(B) {
        return function(f, w) {
          var d, Q, C = String(u(f)), v = a(w), m = C.length;
          return v < 0 || v >= m ? B ? "" : void 0 : (d = C.charCodeAt(v)) < 55296 || d > 56319 || v + 1 === m || (Q = C.charCodeAt(v + 1)) < 56320 || Q > 57343 ? B ? C.charAt(v) : d : B ? C.slice(v, v + 2) : Q - 56320 + (d - 55296 << 10) + 65536;
        };
      };
    }, 465: (i, c, n) => {
      var a = n(4587), u = n(1622);
      i.exports = function(B, f, w) {
        if (a(f))
          throw TypeError("String#" + w + " doesn't accept regex!");
        return String(u(B));
      };
    }, 9124: (i, c, n) => {
      var a, u, B, f = n(1528), w = n(7757), d = n(8954), Q = n(5050), C = n(8113), v = C.process, m = C.setImmediate, b = C.clearImmediate, D = C.MessageChannel, L = C.Dispatch, N = 0, V = {}, H = "onreadystatechange", j = function() {
        var X = +this;
        if (V.hasOwnProperty(X)) {
          var x = V[X];
          delete V[X], x();
        }
      }, P = function(X) {
        j.call(X.data);
      };
      m && b || (m = function(X) {
        for (var x = [], T = 1; arguments.length > T; )
          x.push(arguments[T++]);
        return V[++N] = function() {
          w(typeof X == "function" ? X : Function(X), x);
        }, a(N), N;
      }, b = function(X) {
        delete V[X];
      }, n(6688)(v) == "process" ? a = function(X) {
        v.nextTick(f(j, X, 1));
      } : L && L.now ? a = function(X) {
        L.now(f(j, X, 1));
      } : D ? (B = (u = new D()).port2, u.port1.onmessage = P, a = f(B.postMessage, B, 1)) : C.addEventListener && typeof postMessage == "function" && !C.importScripts ? (a = function(X) {
        C.postMessage(X + "", "*");
      }, C.addEventListener("message", P, !1)) : a = H in Q("script") ? function(X) {
        d.appendChild(Q("script"))[H] = function() {
          d.removeChild(this), j.call(X);
        };
      } : function(X) {
        setTimeout(f(j, X, 1), 0);
      }), i.exports = { set: m, clear: b };
    }, 8615: (i, c, n) => {
      var a = n(3338), u = Math.max, B = Math.min;
      i.exports = function(f, w) {
        return (f = a(f)) < 0 ? u(f + w, 0) : B(f, w);
      };
    }, 1982: (i, c, n) => {
      var a = n(3338), u = n(6078);
      i.exports = function(B) {
        if (B === void 0)
          return 0;
        var f = a(B), w = u(f);
        if (f !== w)
          throw RangeError("Wrong length!");
        return w;
      };
    }, 3338: (i) => {
      var c = Math.ceil, n = Math.floor;
      i.exports = function(a) {
        return isNaN(a = +a) ? 0 : (a > 0 ? n : c)(a);
      };
    }, 5703: (i, c, n) => {
      var a = n(8467), u = n(1622);
      i.exports = function(B) {
        return a(u(B));
      };
    }, 6078: (i, c, n) => {
      var a = n(3338), u = Math.min;
      i.exports = function(B) {
        return B > 0 ? u(a(B), 9007199254740991) : 0;
      };
    }, 6033: (i, c, n) => {
      var a = n(1622);
      i.exports = function(u) {
        return Object(a(u));
      };
    }, 1382: (i, c, n) => {
      var a = n(7334);
      i.exports = function(u, B) {
        if (!a(u))
          return u;
        var f, w;
        if (B && typeof (f = u.toString) == "function" && !a(w = f.call(u)) || typeof (f = u.valueOf) == "function" && !a(w = f.call(u)) || !B && typeof (f = u.toString) == "function" && !a(w = f.call(u)))
          return w;
        throw TypeError("Can't convert object to primitive value");
      };
    }, 7978: (i, c, n) => {
      if (n(6628)) {
        var a = n(1422), u = n(8113), B = n(8625), f = n(5772), w = n(7029), d = n(4972), Q = n(1528), C = n(5824), v = n(6061), m = n(4216), b = n(2243), D = n(3338), L = n(6078), N = n(1982), V = n(8615), H = n(1382), j = n(4040), P = n(106), X = n(7334), x = n(6033), T = n(8908), Z = n(2897), aA = n(9002), nA = n(6604).f, EA = n(7107), KA = n(5078), yA = n(2190), mA = n(8309), HA = n(9021), dA = n(1987), R = n(7680), _ = n(3988), W = n(3143), lA = n(9766), oA = n(3195), bA = n(6257), NA = n(8558), eA = n(4662), cA = NA.f, IA = eA.f, SA = u.RangeError, DA = u.TypeError, jA = u.Uint8Array, we = "ArrayBuffer", ne = "Shared" + we, PA = "BYTES_PER_ELEMENT", $A = "prototype", zA = Array[$A], te = d.ArrayBuffer, ye = d.DataView, fe = mA(0), he = mA(2), le = mA(3), $ = mA(4), FA = mA(5), oe = mA(6), RA = HA(!0), ZA = HA(!1), rA = R.values, BA = R.keys, xA = R.entries, GA = zA.lastIndexOf, WA = zA.reduce, kA = zA.reduceRight, Le = zA.join, Pe = zA.sort, qe = zA.slice, Me = zA.toString, $e = zA.toLocaleString, De = yA("iterator"), Ar = yA("toStringTag"), pr = KA("typed_constructor"), p = KA("def_constructor"), E = w.CONSTR, y = w.TYPED, K = w.VIEW, S = "Wrong length!", O = mA(1, function(uA, CA) {
          return fA(dA(uA, uA[p]), CA);
        }), k = B(function() {
          return new jA(new Uint16Array([1]).buffer)[0] === 1;
        }), z = !!jA && !!jA[$A].set && B(function() {
          new jA(1).set({});
        }), q = function(uA, CA) {
          var TA = D(uA);
          if (TA < 0 || TA % CA)
            throw SA("Wrong offset!");
          return TA;
        }, J = function(uA) {
          if (X(uA) && y in uA)
            return uA;
          throw DA(uA + " is not a typed array!");
        }, fA = function(uA, CA) {
          if (!X(uA) || !(pr in uA))
            throw DA("It is not a typed array constructor!");
          return new uA(CA);
        }, U = function(uA, CA) {
          return M(dA(uA, uA[p]), CA);
        }, M = function(uA, CA) {
          for (var TA = 0, pe = CA.length, YA = fA(uA, pe); pe > TA; )
            YA[TA] = CA[TA++];
          return YA;
        }, Y = function(uA, CA, TA) {
          cA(uA, CA, { get: function() {
            return this._d[TA];
          } });
        }, sA = function(uA) {
          var CA, TA, pe, YA, sr, Jr, MA = x(uA), Xe = arguments.length, gr = Xe > 1 ? arguments[1] : void 0, Wr = gr !== void 0, Cr = EA(MA);
          if (Cr != null && !T(Cr)) {
            for (Jr = Cr.call(MA), pe = [], CA = 0; !(sr = Jr.next()).done; CA++)
              pe.push(sr.value);
            MA = pe;
          }
          for (Wr && Xe > 2 && (gr = Q(gr, arguments[2], 2)), CA = 0, TA = L(MA.length), YA = fA(this, TA); TA > CA; CA++)
            YA[CA] = Wr ? gr(MA[CA], CA) : MA[CA];
          return YA;
        }, gA = function() {
          for (var uA = 0, CA = arguments.length, TA = fA(this, CA); CA > uA; )
            TA[uA] = arguments[uA++];
          return TA;
        }, VA = !!jA && B(function() {
          $e.call(new jA(1));
        }), OA = function() {
          return $e.apply(VA ? qe.call(J(this)) : J(this), arguments);
        }, _A = { copyWithin: function(uA, CA) {
          return bA.call(J(this), uA, CA, arguments.length > 2 ? arguments[2] : void 0);
        }, every: function(uA) {
          return $(J(this), uA, arguments.length > 1 ? arguments[1] : void 0);
        }, fill: function(uA) {
          return oA.apply(J(this), arguments);
        }, filter: function(uA) {
          return U(this, he(J(this), uA, arguments.length > 1 ? arguments[1] : void 0));
        }, find: function(uA) {
          return FA(J(this), uA, arguments.length > 1 ? arguments[1] : void 0);
        }, findIndex: function(uA) {
          return oe(J(this), uA, arguments.length > 1 ? arguments[1] : void 0);
        }, forEach: function(uA) {
          fe(J(this), uA, arguments.length > 1 ? arguments[1] : void 0);
        }, indexOf: function(uA) {
          return ZA(J(this), uA, arguments.length > 1 ? arguments[1] : void 0);
        }, includes: function(uA) {
          return RA(J(this), uA, arguments.length > 1 ? arguments[1] : void 0);
        }, join: function(uA) {
          return Le.apply(J(this), arguments);
        }, lastIndexOf: function(uA) {
          return GA.apply(J(this), arguments);
        }, map: function(uA) {
          return O(J(this), uA, arguments.length > 1 ? arguments[1] : void 0);
        }, reduce: function(uA) {
          return WA.apply(J(this), arguments);
        }, reduceRight: function(uA) {
          return kA.apply(J(this), arguments);
        }, reverse: function() {
          for (var uA, CA = this, TA = J(CA).length, pe = Math.floor(TA / 2), YA = 0; YA < pe; )
            uA = CA[YA], CA[YA++] = CA[--TA], CA[TA] = uA;
          return CA;
        }, some: function(uA) {
          return le(J(this), uA, arguments.length > 1 ? arguments[1] : void 0);
        }, sort: function(uA) {
          return Pe.call(J(this), uA);
        }, subarray: function(uA, CA) {
          var TA = J(this), pe = TA.length, YA = V(uA, pe);
          return new (dA(TA, TA[p]))(TA.buffer, TA.byteOffset + YA * TA.BYTES_PER_ELEMENT, L((CA === void 0 ? pe : V(CA, pe)) - YA));
        } }, de = function(uA, CA) {
          return U(this, qe.call(J(this), uA, CA));
        }, Ae = function(uA) {
          J(this);
          var CA = q(arguments[1], 1), TA = this.length, pe = x(uA), YA = L(pe.length), sr = 0;
          if (YA + CA > TA)
            throw SA(S);
          for (; sr < YA; )
            this[CA + sr] = pe[sr++];
        }, ie = { entries: function() {
          return xA.call(J(this));
        }, keys: function() {
          return BA.call(J(this));
        }, values: function() {
          return rA.call(J(this));
        } }, He = function(uA, CA) {
          return X(uA) && uA[y] && typeof CA != "symbol" && CA in uA && String(+CA) == String(CA);
        }, ar = function(uA, CA) {
          return He(uA, CA = H(CA, !0)) ? v(2, uA[CA]) : IA(uA, CA);
        }, _r = function(uA, CA, TA) {
          return !(He(uA, CA = H(CA, !0)) && X(TA) && j(TA, "value")) || j(TA, "get") || j(TA, "set") || TA.configurable || j(TA, "writable") && !TA.writable || j(TA, "enumerable") && !TA.enumerable ? cA(uA, CA, TA) : (uA[CA] = TA.value, uA);
        };
        E || (eA.f = ar, NA.f = _r), f(f.S + f.F * !E, "Object", { getOwnPropertyDescriptor: ar, defineProperty: _r }), B(function() {
          Me.call({});
        }) && (Me = $e = function() {
          return Le.call(this);
        });
        var ve = b({}, _A);
        b(ve, ie), m(ve, De, ie.values), b(ve, { slice: de, set: Ae, constructor: function() {
        }, toString: Me, toLocaleString: OA }), Y(ve, "buffer", "b"), Y(ve, "byteOffset", "o"), Y(ve, "byteLength", "l"), Y(ve, "length", "e"), cA(ve, Ar, { get: function() {
          return this[y];
        } }), i.exports = function(uA, CA, TA, pe) {
          var YA = uA + ((pe = !!pe) ? "Clamped" : "") + "Array", sr = "get" + uA, Jr = "set" + uA, MA = u[YA], Xe = MA || {}, gr = MA && aA(MA), Wr = !MA || !w.ABV, Cr = {}, Se = MA && MA[$A], Rn = function(Te, ue) {
            cA(Te, ue, { get: function() {
              return function(Ve, er) {
                var Je = Ve._d;
                return Je.v[sr](er * CA + Je.o, k);
              }(this, ue);
            }, set: function(Ve) {
              return function(er, Je, Ke) {
                var We = er._d;
                pe && (Ke = (Ke = Math.round(Ke)) < 0 ? 0 : Ke > 255 ? 255 : 255 & Ke), We.v[Jr](Je * CA + We.o, Ke, k);
              }(this, ue, Ve);
            }, enumerable: !0 });
          };
          Wr ? (MA = TA(function(Te, ue, Ve, er) {
            C(Te, MA, YA, "_d");
            var Je, Ke, We, Rr, Ee = 0, ke = 0;
            if (X(ue)) {
              if (!(ue instanceof te || (Rr = P(ue)) == we || Rr == ne))
                return y in ue ? M(MA, ue) : sA.call(MA, ue);
              Je = ue, ke = q(Ve, CA);
              var Ir = ue.byteLength;
              if (er === void 0) {
                if (Ir % CA || (Ke = Ir - ke) < 0)
                  throw SA(S);
              } else if ((Ke = L(er) * CA) + ke > Ir)
                throw SA(S);
              We = Ke / CA;
            } else
              We = N(ue), Je = new te(Ke = We * CA);
            for (m(Te, "_d", { b: Je, o: ke, l: Ke, e: We, v: new ye(Je) }); Ee < We; )
              Rn(Te, Ee++);
          }), Se = MA[$A] = Z(ve), m(Se, "constructor", MA)) : B(function() {
            MA(1);
          }) && B(function() {
            new MA(-1);
          }) && W(function(Te) {
            new MA(), new MA(null), new MA(1.5), new MA(Te);
          }, !0) || (MA = TA(function(Te, ue, Ve, er) {
            var Je;
            return C(Te, MA, YA), X(ue) ? ue instanceof te || (Je = P(ue)) == we || Je == ne ? er !== void 0 ? new Xe(ue, q(Ve, CA), er) : Ve !== void 0 ? new Xe(ue, q(Ve, CA)) : new Xe(ue) : y in ue ? M(MA, ue) : sA.call(MA, ue) : new Xe(N(ue));
          }), fe(gr !== Function.prototype ? nA(Xe).concat(nA(gr)) : nA(Xe), function(Te) {
            Te in MA || m(MA, Te, Xe[Te]);
          }), MA[$A] = Se, a || (Se.constructor = MA));
          var Yr = Se[De], ut = !!Yr && (Yr.name == "values" || Yr.name == null), Tt = ie.values;
          m(MA, pr, !0), m(Se, y, YA), m(Se, K, !0), m(Se, p, MA), (pe ? new MA(1)[Ar] == YA : Ar in Se) || cA(Se, Ar, { get: function() {
            return YA;
          } }), Cr[YA] = MA, f(f.G + f.W + f.F * (MA != Xe), Cr), f(f.S, YA, { BYTES_PER_ELEMENT: CA }), f(f.S + f.F * B(function() {
            Xe.of.call(MA, 1);
          }), YA, { from: sA, of: gA }), PA in Se || m(Se, PA, CA), f(f.P, YA, _A), lA(YA), f(f.P + f.F * z, YA, { set: Ae }), f(f.P + f.F * !ut, YA, ie), a || Se.toString == Me || (Se.toString = Me), f(f.P + f.F * B(function() {
            new MA(1).slice();
          }), YA, { slice: de }), f(f.P + f.F * (B(function() {
            return [1, 2].toLocaleString() != new MA([1, 2]).toLocaleString();
          }) || !B(function() {
            Se.toLocaleString.call([1, 2]);
          })), YA, { toLocaleString: OA }), _[YA] = ut ? Yr : Tt, a || ut || m(Se, De, Tt);
        };
      } else
        i.exports = function() {
        };
    }, 4972: (i, c, n) => {
      var a = n(8113), u = n(6628), B = n(1422), f = n(7029), w = n(4216), d = n(2243), Q = n(8625), C = n(5824), v = n(3338), m = n(6078), b = n(1982), D = n(6604).f, L = n(8558).f, N = n(3195), V = n(5727), H = "ArrayBuffer", j = "DataView", P = "prototype", X = "Wrong index!", x = a[H], T = a[j], Z = a.Math, aA = a.RangeError, nA = a.Infinity, EA = x, KA = Z.abs, yA = Z.pow, mA = Z.floor, HA = Z.log, dA = Z.LN2, R = "buffer", _ = "byteLength", W = "byteOffset", lA = u ? "_b" : R, oA = u ? "_l" : _, bA = u ? "_o" : W;
      function NA($, FA, oe) {
        var RA, ZA, rA, BA = new Array(oe), xA = 8 * oe - FA - 1, GA = (1 << xA) - 1, WA = GA >> 1, kA = FA === 23 ? yA(2, -24) - yA(2, -77) : 0, Le = 0, Pe = $ < 0 || $ === 0 && 1 / $ < 0 ? 1 : 0;
        for (($ = KA($)) != $ || $ === nA ? (ZA = $ != $ ? 1 : 0, RA = GA) : (RA = mA(HA($) / dA), $ * (rA = yA(2, -RA)) < 1 && (RA--, rA *= 2), ($ += RA + WA >= 1 ? kA / rA : kA * yA(2, 1 - WA)) * rA >= 2 && (RA++, rA /= 2), RA + WA >= GA ? (ZA = 0, RA = GA) : RA + WA >= 1 ? (ZA = ($ * rA - 1) * yA(2, FA), RA += WA) : (ZA = $ * yA(2, WA - 1) * yA(2, FA), RA = 0)); FA >= 8; BA[Le++] = 255 & ZA, ZA /= 256, FA -= 8)
          ;
        for (RA = RA << FA | ZA, xA += FA; xA > 0; BA[Le++] = 255 & RA, RA /= 256, xA -= 8)
          ;
        return BA[--Le] |= 128 * Pe, BA;
      }
      function eA($, FA, oe) {
        var RA, ZA = 8 * oe - FA - 1, rA = (1 << ZA) - 1, BA = rA >> 1, xA = ZA - 7, GA = oe - 1, WA = $[GA--], kA = 127 & WA;
        for (WA >>= 7; xA > 0; kA = 256 * kA + $[GA], GA--, xA -= 8)
          ;
        for (RA = kA & (1 << -xA) - 1, kA >>= -xA, xA += FA; xA > 0; RA = 256 * RA + $[GA], GA--, xA -= 8)
          ;
        if (kA === 0)
          kA = 1 - BA;
        else {
          if (kA === rA)
            return RA ? NaN : WA ? -nA : nA;
          RA += yA(2, FA), kA -= BA;
        }
        return (WA ? -1 : 1) * RA * yA(2, kA - FA);
      }
      function cA($) {
        return $[3] << 24 | $[2] << 16 | $[1] << 8 | $[0];
      }
      function IA($) {
        return [255 & $];
      }
      function SA($) {
        return [255 & $, $ >> 8 & 255];
      }
      function DA($) {
        return [255 & $, $ >> 8 & 255, $ >> 16 & 255, $ >> 24 & 255];
      }
      function jA($) {
        return NA($, 52, 8);
      }
      function we($) {
        return NA($, 23, 4);
      }
      function ne($, FA, oe) {
        L($[P], FA, { get: function() {
          return this[oe];
        } });
      }
      function PA($, FA, oe, RA) {
        var ZA = b(+oe);
        if (ZA + FA > $[oA])
          throw aA(X);
        var rA = $[lA]._b, BA = ZA + $[bA], xA = rA.slice(BA, BA + FA);
        return RA ? xA : xA.reverse();
      }
      function $A($, FA, oe, RA, ZA, rA) {
        var BA = b(+oe);
        if (BA + FA > $[oA])
          throw aA(X);
        for (var xA = $[lA]._b, GA = BA + $[bA], WA = RA(+ZA), kA = 0; kA < FA; kA++)
          xA[GA + kA] = WA[rA ? kA : FA - kA - 1];
      }
      if (f.ABV) {
        if (!Q(function() {
          x(1);
        }) || !Q(function() {
          new x(-1);
        }) || Q(function() {
          return new x(), new x(1.5), new x(NaN), x.name != H;
        })) {
          for (var zA, te = (x = function($) {
            return C(this, x), new EA(b($));
          })[P] = EA[P], ye = D(EA), fe = 0; ye.length > fe; )
            (zA = ye[fe++]) in x || w(x, zA, EA[zA]);
          B || (te.constructor = x);
        }
        var he = new T(new x(2)), le = T[P].setInt8;
        he.setInt8(0, 2147483648), he.setInt8(1, 2147483649), !he.getInt8(0) && he.getInt8(1) || d(T[P], { setInt8: function($, FA) {
          le.call(this, $, FA << 24 >> 24);
        }, setUint8: function($, FA) {
          le.call(this, $, FA << 24 >> 24);
        } }, !0);
      } else
        x = function($) {
          C(this, x, H);
          var FA = b($);
          this._b = N.call(new Array(FA), 0), this[oA] = FA;
        }, T = function($, FA, oe) {
          C(this, T, j), C($, x, j);
          var RA = $[oA], ZA = v(FA);
          if (ZA < 0 || ZA > RA)
            throw aA("Wrong offset!");
          if (ZA + (oe = oe === void 0 ? RA - ZA : m(oe)) > RA)
            throw aA("Wrong length!");
          this[lA] = $, this[bA] = ZA, this[oA] = oe;
        }, u && (ne(x, _, "_l"), ne(T, R, "_b"), ne(T, _, "_l"), ne(T, W, "_o")), d(T[P], { getInt8: function($) {
          return PA(this, 1, $)[0] << 24 >> 24;
        }, getUint8: function($) {
          return PA(this, 1, $)[0];
        }, getInt16: function($) {
          var FA = PA(this, 2, $, arguments[1]);
          return (FA[1] << 8 | FA[0]) << 16 >> 16;
        }, getUint16: function($) {
          var FA = PA(this, 2, $, arguments[1]);
          return FA[1] << 8 | FA[0];
        }, getInt32: function($) {
          return cA(PA(this, 4, $, arguments[1]));
        }, getUint32: function($) {
          return cA(PA(this, 4, $, arguments[1])) >>> 0;
        }, getFloat32: function($) {
          return eA(PA(this, 4, $, arguments[1]), 23, 4);
        }, getFloat64: function($) {
          return eA(PA(this, 8, $, arguments[1]), 52, 8);
        }, setInt8: function($, FA) {
          $A(this, 1, $, IA, FA);
        }, setUint8: function($, FA) {
          $A(this, 1, $, IA, FA);
        }, setInt16: function($, FA) {
          $A(this, 2, $, SA, FA, arguments[2]);
        }, setUint16: function($, FA) {
          $A(this, 2, $, SA, FA, arguments[2]);
        }, setInt32: function($, FA) {
          $A(this, 4, $, DA, FA, arguments[2]);
        }, setUint32: function($, FA) {
          $A(this, 4, $, DA, FA, arguments[2]);
        }, setFloat32: function($, FA) {
          $A(this, 4, $, we, FA, arguments[2]);
        }, setFloat64: function($, FA) {
          $A(this, 8, $, jA, FA, arguments[2]);
        } });
      V(x, H), V(T, j), w(T[P], f.VIEW, !0), c[H] = x, c[j] = T;
    }, 7029: (i, c, n) => {
      for (var a, u = n(8113), B = n(4216), f = n(5078), w = f("typed_array"), d = f("view"), Q = !(!u.ArrayBuffer || !u.DataView), C = Q, v = 0, m = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); v < 9; )
        (a = u[m[v++]]) ? (B(a.prototype, w, !0), B(a.prototype, d, !0)) : C = !1;
      i.exports = { ABV: Q, CONSTR: C, TYPED: w, VIEW: d };
    }, 5078: (i) => {
      var c = 0, n = Math.random();
      i.exports = function(a) {
        return "Symbol(".concat(a === void 0 ? "" : a, ")_", (++c + n).toString(36));
      };
    }, 5822: (i, c, n) => {
      var a = n(8113).navigator;
      i.exports = a && a.userAgent || "";
    }, 9060: (i, c, n) => {
      var a = n(7334);
      i.exports = function(u, B) {
        if (!a(u) || u._t !== B)
          throw TypeError("Incompatible receiver, " + B + " required!");
        return u;
      };
    }, 5660: (i, c, n) => {
      var a = n(8113), u = n(66), B = n(1422), f = n(9669), w = n(8558).f;
      i.exports = function(d) {
        var Q = u.Symbol || (u.Symbol = B ? {} : a.Symbol || {});
        d.charAt(0) == "_" || d in Q || w(Q, d, { value: f.f(d) });
      };
    }, 9669: (i, c, n) => {
      c.f = n(2190);
    }, 2190: (i, c, n) => {
      var a = n(8655)("wks"), u = n(5078), B = n(8113).Symbol, f = typeof B == "function";
      (i.exports = function(w) {
        return a[w] || (a[w] = f && B[w] || (f ? B : u)("Symbol." + w));
      }).store = a;
    }, 7107: (i, c, n) => {
      var a = n(106), u = n(2190)("iterator"), B = n(3988);
      i.exports = n(66).getIteratorMethod = function(f) {
        if (f != null)
          return f[u] || f["@@iterator"] || B[a(f)];
      };
    }, 4434: (i, c, n) => {
      var a = n(5772), u = n(8309)(2);
      a(a.P + a.F * !n(225)([].filter, !0), "Array", { filter: function(B) {
        return u(this, B, arguments[1]);
      } });
    }, 7772: (i, c, n) => {
      var a = n(5772), u = n(8309)(0), B = n(225)([].forEach, !0);
      a(a.P + a.F * !B, "Array", { forEach: function(f) {
        return u(this, f, arguments[1]);
      } });
    }, 5155: (i, c, n) => {
      var a = n(5772), u = n(9021)(!1), B = [].indexOf, f = !!B && 1 / [1].indexOf(1, -0) < 0;
      a(a.P + a.F * (f || !n(225)(B)), "Array", { indexOf: function(w) {
        return f ? B.apply(this, arguments) || 0 : u(this, w, arguments[1]);
      } });
    }, 5867: (i, c, n) => {
      var a = n(5772);
      a(a.S, "Array", { isArray: n(9141) });
    }, 7680: (i, c, n) => {
      var a = n(2094), u = n(5038), B = n(3988), f = n(5703);
      i.exports = n(1195)(Array, "Array", function(w, d) {
        this._t = f(w), this._i = 0, this._k = d;
      }, function() {
        var w = this._t, d = this._k, Q = this._i++;
        return !w || Q >= w.length ? (this._t = void 0, u(1)) : u(0, d == "keys" ? Q : d == "values" ? w[Q] : [Q, w[Q]]);
      }, "values"), B.Arguments = B.Array, a("keys"), a("values"), a("entries");
    }, 286: (i, c, n) => {
      var a = n(5772), u = n(8309)(1);
      a(a.P + a.F * !n(225)([].map, !0), "Array", { map: function(B) {
        return u(this, B, arguments[1]);
      } });
    }, 9399: (i, c, n) => {
      var a = n(5772), u = n(9291);
      a(a.P + a.F * !n(225)([].reduce, !0), "Array", { reduce: function(B) {
        return u(this, B, arguments.length, arguments[1], !1);
      } });
    }, 7209: (i, c, n) => {
      var a = n(5772), u = n(8954), B = n(6688), f = n(8615), w = n(6078), d = [].slice;
      a(a.P + a.F * n(8625)(function() {
        u && d.call(u);
      }), "Array", { slice: function(Q, C) {
        var v = w(this.length), m = B(this);
        if (C = C === void 0 ? v : C, m == "Array")
          return d.call(this, Q, C);
        for (var b = f(Q, v), D = f(C, v), L = w(D - b), N = new Array(L), V = 0; V < L; V++)
          N[V] = m == "String" ? this.charAt(b + V) : this[b + V];
        return N;
      } });
    }, 5105: (i, c, n) => {
      var a = Date.prototype, u = "Invalid Date", B = "toString", f = a[B], w = a.getTime;
      /* @__PURE__ */ new Date(NaN) + "" != u && n(7738)(a, B, function() {
        var d = w.call(this);
        return d == d ? f.call(this) : u;
      });
    }, 8629: (i, c, n) => {
      var a = n(5772);
      a(a.P, "Function", { bind: n(9337) });
    }, 9745: (i, c, n) => {
      var a = n(8558).f, u = Function.prototype, B = /^\s*function ([^ (]*)/, f = "name";
      f in u || n(6628) && a(u, f, { configurable: !0, get: function() {
        try {
          return ("" + this).match(B)[1];
        } catch {
          return "";
        }
      } });
    }, 1239: (i, c, n) => {
      var a = n(5635), u = n(9060), B = "Map";
      i.exports = n(7611)(B, function(f) {
        return function() {
          return f(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      }, { get: function(f) {
        var w = a.getEntry(u(this, B), f);
        return w && w.v;
      }, set: function(f, w) {
        return a.def(u(this, B), f === 0 ? 0 : f, w);
      } }, a, !0);
    }, 9701: (i, c, n) => {
      var a = n(5772);
      a(a.S, "Object", { create: n(2897) });
    }, 8344: (i, c, n) => {
      var a = n(5772);
      a(a.S + a.F * !n(6628), "Object", { defineProperties: n(7331) });
    }, 5843: (i, c, n) => {
      var a = n(5772);
      a(a.S + a.F * !n(6628), "Object", { defineProperty: n(8558).f });
    }, 541: (i, c, n) => {
      var a = n(5703), u = n(4662).f;
      n(468)("getOwnPropertyDescriptor", function() {
        return function(B, f) {
          return u(a(B), f);
        };
      });
    }, 9770: (i, c, n) => {
      n(468)("getOwnPropertyNames", function() {
        return n(5259).f;
      });
    }, 8904: (i, c, n) => {
      var a = n(6033), u = n(9002);
      n(468)("getPrototypeOf", function() {
        return function(B) {
          return u(a(B));
        };
      });
    }, 4978: (i, c, n) => {
      var a = n(6033), u = n(2912);
      n(468)("keys", function() {
        return function(B) {
          return u(a(B));
        };
      });
    }, 6139: (i, c, n) => {
      var a = n(106), u = {};
      u[n(2190)("toStringTag")] = "z", u + "" != "[object z]" && n(7738)(Object.prototype, "toString", function() {
        return "[object " + a(this) + "]";
      }, !0);
    }, 2235: (i, c, n) => {
      var a, u, B, f, w = n(1422), d = n(8113), Q = n(1528), C = n(106), v = n(5772), m = n(7334), b = n(2761), D = n(5824), L = n(1891), N = n(1987), V = n(9124).set, H = n(3492)(), j = n(8577), P = n(9739), X = n(5822), x = n(5151), T = "Promise", Z = d.TypeError, aA = d.process, nA = aA && aA.versions, EA = nA && nA.v8 || "", KA = d[T], yA = C(aA) == "process", mA = function() {
      }, HA = u = j.f, dA = !!function() {
        try {
          var eA = KA.resolve(1), cA = (eA.constructor = {})[n(2190)("species")] = function(IA) {
            IA(mA, mA);
          };
          return (yA || typeof PromiseRejectionEvent == "function") && eA.then(mA) instanceof cA && EA.indexOf("6.6") !== 0 && X.indexOf("Chrome/66") === -1;
        } catch {
        }
      }(), R = function(eA) {
        var cA;
        return !(!m(eA) || typeof (cA = eA.then) != "function") && cA;
      }, _ = function(eA, cA) {
        if (!eA._n) {
          eA._n = !0;
          var IA = eA._c;
          H(function() {
            for (var SA = eA._v, DA = eA._s == 1, jA = 0, we = function(ne) {
              var PA, $A, zA, te = DA ? ne.ok : ne.fail, ye = ne.resolve, fe = ne.reject, he = ne.domain;
              try {
                te ? (DA || (eA._h == 2 && oA(eA), eA._h = 1), te === !0 ? PA = SA : (he && he.enter(), PA = te(SA), he && (he.exit(), zA = !0)), PA === ne.promise ? fe(Z("Promise-chain cycle")) : ($A = R(PA)) ? $A.call(PA, ye, fe) : ye(PA)) : fe(SA);
              } catch (le) {
                he && !zA && he.exit(), fe(le);
              }
            }; IA.length > jA; )
              we(IA[jA++]);
            eA._c = [], eA._n = !1, cA && !eA._h && W(eA);
          });
        }
      }, W = function(eA) {
        V.call(d, function() {
          var cA, IA, SA, DA = eA._v, jA = lA(eA);
          if (jA && (cA = P(function() {
            yA ? aA.emit("unhandledRejection", DA, eA) : (IA = d.onunhandledrejection) ? IA({ promise: eA, reason: DA }) : (SA = d.console) && SA.error && SA.error("Unhandled promise rejection", DA);
          }), eA._h = yA || lA(eA) ? 2 : 1), eA._a = void 0, jA && cA.e)
            throw cA.v;
        });
      }, lA = function(eA) {
        return eA._h !== 1 && (eA._a || eA._c).length === 0;
      }, oA = function(eA) {
        V.call(d, function() {
          var cA;
          yA ? aA.emit("rejectionHandled", eA) : (cA = d.onrejectionhandled) && cA({ promise: eA, reason: eA._v });
        });
      }, bA = function(eA) {
        var cA = this;
        cA._d || (cA._d = !0, (cA = cA._w || cA)._v = eA, cA._s = 2, cA._a || (cA._a = cA._c.slice()), _(cA, !0));
      }, NA = function(eA) {
        var cA, IA = this;
        if (!IA._d) {
          IA._d = !0, IA = IA._w || IA;
          try {
            if (IA === eA)
              throw Z("Promise can't be resolved itself");
            (cA = R(eA)) ? H(function() {
              var SA = { _w: IA, _d: !1 };
              try {
                cA.call(eA, Q(NA, SA, 1), Q(bA, SA, 1));
              } catch (DA) {
                bA.call(SA, DA);
              }
            }) : (IA._v = eA, IA._s = 1, _(IA, !1));
          } catch (SA) {
            bA.call({ _w: IA, _d: !1 }, SA);
          }
        }
      };
      dA || (KA = function(eA) {
        D(this, KA, T, "_h"), b(eA), a.call(this);
        try {
          eA(Q(NA, this, 1), Q(bA, this, 1));
        } catch (cA) {
          bA.call(this, cA);
        }
      }, (a = function(eA) {
        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1;
      }).prototype = n(2243)(KA.prototype, { then: function(eA, cA) {
        var IA = HA(N(this, KA));
        return IA.ok = typeof eA != "function" || eA, IA.fail = typeof cA == "function" && cA, IA.domain = yA ? aA.domain : void 0, this._c.push(IA), this._a && this._a.push(IA), this._s && _(this, !1), IA.promise;
      }, catch: function(eA) {
        return this.then(void 0, eA);
      } }), B = function() {
        var eA = new a();
        this.promise = eA, this.resolve = Q(NA, eA, 1), this.reject = Q(bA, eA, 1);
      }, j.f = HA = function(eA) {
        return eA === KA || eA === f ? new B(eA) : u(eA);
      }), v(v.G + v.W + v.F * !dA, { Promise: KA }), n(5727)(KA, T), n(9766)(T), f = n(66)[T], v(v.S + v.F * !dA, T, { reject: function(eA) {
        var cA = HA(this);
        return (0, cA.reject)(eA), cA.promise;
      } }), v(v.S + v.F * (w || !dA), T, { resolve: function(eA) {
        return x(w && this === f ? KA : this, eA);
      } }), v(v.S + v.F * !(dA && n(3143)(function(eA) {
        KA.all(eA).catch(mA);
      })), T, { all: function(eA) {
        var cA = this, IA = HA(cA), SA = IA.resolve, DA = IA.reject, jA = P(function() {
          var we = [], ne = 0, PA = 1;
          L(eA, !1, function($A) {
            var zA = ne++, te = !1;
            we.push(void 0), PA++, cA.resolve($A).then(function(ye) {
              te || (te = !0, we[zA] = ye, --PA || SA(we));
            }, DA);
          }), --PA || SA(we);
        });
        return jA.e && DA(jA.v), IA.promise;
      }, race: function(eA) {
        var cA = this, IA = HA(cA), SA = IA.reject, DA = P(function() {
          L(eA, !1, function(jA) {
            cA.resolve(jA).then(IA.resolve, SA);
          });
        });
        return DA.e && SA(DA.v), IA.promise;
      } });
    }, 5506: (i, c, n) => {
      var a = n(8113), u = n(8938), B = n(8558).f, f = n(6604).f, w = n(4587), d = n(4859), Q = a.RegExp, C = Q, v = Q.prototype, m = /a/g, b = /a/g, D = new Q(m) !== m;
      if (n(6628) && (!D || n(8625)(function() {
        return b[n(2190)("match")] = !1, Q(m) != m || Q(b) == b || Q(m, "i") != "/a/i";
      }))) {
        Q = function(H, j) {
          var P = this instanceof Q, X = w(H), x = j === void 0;
          return !P && X && H.constructor === Q && x ? H : u(D ? new C(X && !x ? H.source : H, j) : C((X = H instanceof Q) ? H.source : H, X && x ? d.call(H) : j), P ? this : v, Q);
        };
        for (var L = function(H) {
          H in Q || B(Q, H, { configurable: !0, get: function() {
            return C[H];
          }, set: function(j) {
            C[H] = j;
          } });
        }, N = f(C), V = 0; N.length > V; )
          L(N[V++]);
        v.constructor = Q, Q.prototype = v, n(7738)(a, "RegExp", Q);
      }
      n(9766)("RegExp");
    }, 5846: (i, c, n) => {
      var a = n(3288);
      n(5772)({ target: "RegExp", proto: !0, forced: a !== /./.exec }, { exec: a });
    }, 751: (i, c, n) => {
      n(6628) && /./g.flags != "g" && n(8558).f(RegExp.prototype, "flags", { configurable: !0, get: n(4859) });
    }, 9236: (i, c, n) => {
      var a = n(4587), u = n(6365), B = n(1987), f = n(8492), w = n(6078), d = n(2404), Q = n(3288), C = n(8625), v = Math.min, m = [].push, b = "split", D = "length", L = "lastIndex", N = 4294967295, V = !C(function() {
      });
      n(8897)("split", 2, function(H, j, P, X) {
        var x;
        return x = "abbc"[b](/(b)*/)[1] == "c" || "test"[b](/(?:)/, -1)[D] != 4 || "ab"[b](/(?:ab)*/)[D] != 2 || "."[b](/(.?)(.?)/)[D] != 4 || "."[b](/()()/)[D] > 1 || ""[b](/.?/)[D] ? function(T, Z) {
          var aA = String(this);
          if (T === void 0 && Z === 0)
            return [];
          if (!a(T))
            return P.call(aA, T, Z);
          for (var nA, EA, KA, yA = [], mA = (T.ignoreCase ? "i" : "") + (T.multiline ? "m" : "") + (T.unicode ? "u" : "") + (T.sticky ? "y" : ""), HA = 0, dA = Z === void 0 ? N : Z >>> 0, R = new RegExp(T.source, mA + "g"); (nA = Q.call(R, aA)) && !((EA = R[L]) > HA && (yA.push(aA.slice(HA, nA.index)), nA[D] > 1 && nA.index < aA[D] && m.apply(yA, nA.slice(1)), KA = nA[0][D], HA = EA, yA[D] >= dA)); )
            R[L] === nA.index && R[L]++;
          return HA === aA[D] ? !KA && R.test("") || yA.push("") : yA.push(aA.slice(HA)), yA[D] > dA ? yA.slice(0, dA) : yA;
        } : "0"[b](void 0, 0)[D] ? function(T, Z) {
          return T === void 0 && Z === 0 ? [] : P.call(this, T, Z);
        } : P, [function(T, Z) {
          var aA = H(this), nA = T == null ? void 0 : T[j];
          return nA !== void 0 ? nA.call(T, aA, Z) : x.call(String(aA), T, Z);
        }, function(T, Z) {
          var aA = X(x, T, this, Z, x !== P);
          if (aA.done)
            return aA.value;
          var nA = u(T), EA = String(this), KA = B(nA, RegExp), yA = nA.unicode, mA = (nA.ignoreCase ? "i" : "") + (nA.multiline ? "m" : "") + (nA.unicode ? "u" : "") + (V ? "y" : "g"), HA = new KA(V ? nA : "^(?:" + nA.source + ")", mA), dA = Z === void 0 ? N : Z >>> 0;
          if (dA === 0)
            return [];
          if (EA.length === 0)
            return d(HA, EA) === null ? [EA] : [];
          for (var R = 0, _ = 0, W = []; _ < EA.length; ) {
            HA.lastIndex = V ? _ : 0;
            var lA, oA = d(HA, V ? EA : EA.slice(_));
            if (oA === null || (lA = v(w(HA.lastIndex + (V ? 0 : _)), EA.length)) === R)
              _ = f(EA, _, yA);
            else {
              if (W.push(EA.slice(R, _)), W.length === dA)
                return W;
              for (var bA = 1; bA <= oA.length - 1; bA++)
                if (W.push(oA[bA]), W.length === dA)
                  return W;
              _ = R = lA;
            }
          }
          return W.push(EA.slice(R)), W;
        }];
      });
    }, 4321: (i, c, n) => {
      n(751);
      var a = n(6365), u = n(4859), B = n(6628), f = "toString", w = /./[f], d = function(Q) {
        n(7738)(RegExp.prototype, f, Q, !0);
      };
      n(8625)(function() {
        return w.call({ source: "a", flags: "b" }) != "/a/b";
      }) ? d(function() {
        var Q = a(this);
        return "/".concat(Q.source, "/", "flags" in Q ? Q.flags : !B && Q instanceof RegExp ? u.call(Q) : void 0);
      }) : w.name != f && d(function() {
        return w.call(this);
      });
    }, 8392: (i, c, n) => {
      var a = n(5635), u = n(9060);
      i.exports = n(7611)("Set", function(B) {
        return function() {
          return B(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      }, { add: function(B) {
        return a.def(u(this, "Set"), B = B === 0 ? 0 : B, B);
      } }, a);
    }, 427: (i, c, n) => {
      var a = n(5772), u = n(6078), B = n(465), f = "endsWith", w = ""[f];
      a(a.P + a.F * n(6570)(f), "String", { endsWith: function(d) {
        var Q = B(this, d, f), C = arguments.length > 1 ? arguments[1] : void 0, v = u(Q.length), m = C === void 0 ? v : Math.min(u(C), v), b = String(d);
        return w ? w.call(Q, b, m) : Q.slice(m - b.length, m) === b;
      } });
    }, 3777: (i, c, n) => {
      var a = n(5772), u = n(465), B = "includes";
      a(a.P + a.F * n(6570)(B), "String", { includes: function(f) {
        return !!~u(this, f, B).indexOf(f, arguments.length > 1 ? arguments[1] : void 0);
      } });
    }, 7472: (i, c, n) => {
      var a = n(2070)(!0);
      n(1195)(String, "String", function(u) {
        this._t = String(u), this._i = 0;
      }, function() {
        var u, B = this._t, f = this._i;
        return f >= B.length ? { value: void 0, done: !0 } : (u = a(B, f), this._i += u.length, { value: u, done: !1 });
      });
    }, 5942: (i, c, n) => {
      var a = n(5772), u = n(6078), B = n(465), f = "startsWith", w = ""[f];
      a(a.P + a.F * n(6570)(f), "String", { startsWith: function(d) {
        var Q = B(this, d, f), C = u(Math.min(arguments.length > 1 ? arguments[1] : void 0, Q.length)), v = String(d);
        return w ? w.call(Q, v, C) : Q.slice(C, C + v.length) === v;
      } });
    }, 9823: (i, c, n) => {
      var a = n(8113), u = n(4040), B = n(6628), f = n(5772), w = n(7738), d = n(998).KEY, Q = n(8625), C = n(8655), v = n(5727), m = n(5078), b = n(2190), D = n(9669), L = n(5660), N = n(7820), V = n(9141), H = n(6365), j = n(7334), P = n(6033), X = n(5703), x = n(1382), T = n(6061), Z = n(2897), aA = n(5259), nA = n(4662), EA = n(7957), KA = n(8558), yA = n(2912), mA = nA.f, HA = KA.f, dA = aA.f, R = a.Symbol, _ = a.JSON, W = _ && _.stringify, lA = "prototype", oA = b("_hidden"), bA = b("toPrimitive"), NA = {}.propertyIsEnumerable, eA = C("symbol-registry"), cA = C("symbols"), IA = C("op-symbols"), SA = Object[lA], DA = typeof R == "function" && !!EA.f, jA = a.QObject, we = !jA || !jA[lA] || !jA[lA].findChild, ne = B && Q(function() {
        return Z(HA({}, "a", { get: function() {
          return HA(this, "a", { value: 7 }).a;
        } })).a != 7;
      }) ? function(rA, BA, xA) {
        var GA = mA(SA, BA);
        GA && delete SA[BA], HA(rA, BA, xA), GA && rA !== SA && HA(SA, BA, GA);
      } : HA, PA = function(rA) {
        var BA = cA[rA] = Z(R[lA]);
        return BA._k = rA, BA;
      }, $A = DA && typeof R.iterator == "symbol" ? function(rA) {
        return typeof rA == "symbol";
      } : function(rA) {
        return rA instanceof R;
      }, zA = function(rA, BA, xA) {
        return rA === SA && zA(IA, BA, xA), H(rA), BA = x(BA, !0), H(xA), u(cA, BA) ? (xA.enumerable ? (u(rA, oA) && rA[oA][BA] && (rA[oA][BA] = !1), xA = Z(xA, { enumerable: T(0, !1) })) : (u(rA, oA) || HA(rA, oA, T(1, {})), rA[oA][BA] = !0), ne(rA, BA, xA)) : HA(rA, BA, xA);
      }, te = function(rA, BA) {
        H(rA);
        for (var xA, GA = N(BA = X(BA)), WA = 0, kA = GA.length; kA > WA; )
          zA(rA, xA = GA[WA++], BA[xA]);
        return rA;
      }, ye = function(rA) {
        var BA = NA.call(this, rA = x(rA, !0));
        return !(this === SA && u(cA, rA) && !u(IA, rA)) && (!(BA || !u(this, rA) || !u(cA, rA) || u(this, oA) && this[oA][rA]) || BA);
      }, fe = function(rA, BA) {
        if (rA = X(rA), BA = x(BA, !0), rA !== SA || !u(cA, BA) || u(IA, BA)) {
          var xA = mA(rA, BA);
          return !xA || !u(cA, BA) || u(rA, oA) && rA[oA][BA] || (xA.enumerable = !0), xA;
        }
      }, he = function(rA) {
        for (var BA, xA = dA(X(rA)), GA = [], WA = 0; xA.length > WA; )
          u(cA, BA = xA[WA++]) || BA == oA || BA == d || GA.push(BA);
        return GA;
      }, le = function(rA) {
        for (var BA, xA = rA === SA, GA = dA(xA ? IA : X(rA)), WA = [], kA = 0; GA.length > kA; )
          !u(cA, BA = GA[kA++]) || xA && !u(SA, BA) || WA.push(cA[BA]);
        return WA;
      };
      DA || (w((R = function() {
        if (this instanceof R)
          throw TypeError("Symbol is not a constructor!");
        var rA = m(arguments.length > 0 ? arguments[0] : void 0), BA = function(xA) {
          this === SA && BA.call(IA, xA), u(this, oA) && u(this[oA], rA) && (this[oA][rA] = !1), ne(this, rA, T(1, xA));
        };
        return B && we && ne(SA, rA, { configurable: !0, set: BA }), PA(rA);
      })[lA], "toString", function() {
        return this._k;
      }), nA.f = fe, KA.f = zA, n(6604).f = aA.f = he, n(5873).f = ye, EA.f = le, B && !n(1422) && w(SA, "propertyIsEnumerable", ye, !0), D.f = function(rA) {
        return PA(b(rA));
      }), f(f.G + f.W + f.F * !DA, { Symbol: R });
      for (var $ = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), FA = 0; $.length > FA; )
        b($[FA++]);
      for (var oe = yA(b.store), RA = 0; oe.length > RA; )
        L(oe[RA++]);
      f(f.S + f.F * !DA, "Symbol", { for: function(rA) {
        return u(eA, rA += "") ? eA[rA] : eA[rA] = R(rA);
      }, keyFor: function(rA) {
        if (!$A(rA))
          throw TypeError(rA + " is not a symbol!");
        for (var BA in eA)
          if (eA[BA] === rA)
            return BA;
      }, useSetter: function() {
        we = !0;
      }, useSimple: function() {
        we = !1;
      } }), f(f.S + f.F * !DA, "Object", { create: function(rA, BA) {
        return BA === void 0 ? Z(rA) : te(Z(rA), BA);
      }, defineProperty: zA, defineProperties: te, getOwnPropertyDescriptor: fe, getOwnPropertyNames: he, getOwnPropertySymbols: le });
      var ZA = Q(function() {
        EA.f(1);
      });
      f(f.S + f.F * ZA, "Object", { getOwnPropertySymbols: function(rA) {
        return EA.f(P(rA));
      } }), _ && f(f.S + f.F * (!DA || Q(function() {
        var rA = R();
        return W([rA]) != "[null]" || W({ a: rA }) != "{}" || W(Object(rA)) != "{}";
      })), "JSON", { stringify: function(rA) {
        for (var BA, xA, GA = [rA], WA = 1; arguments.length > WA; )
          GA.push(arguments[WA++]);
        if (xA = BA = GA[1], (j(BA) || rA !== void 0) && !$A(rA))
          return V(BA) || (BA = function(kA, Le) {
            if (typeof xA == "function" && (Le = xA.call(this, kA, Le)), !$A(Le))
              return Le;
          }), GA[1] = BA, W.apply(_, GA);
      } }), R[lA][bA] || n(4216)(R[lA], bA, R[lA].valueOf), v(R, "Symbol"), v(Math, "Math", !0), v(a.JSON, "JSON", !0);
    }, 3149: (i, c, n) => {
      n(7978)("Float32", 4, function(a) {
        return function(u, B, f) {
          return a(this, u, B, f);
        };
      });
    }, 4637: (i, c, n) => {
      n(7978)("Float64", 8, function(a) {
        return function(u, B, f) {
          return a(this, u, B, f);
        };
      });
    }, 3958: (i, c, n) => {
      n(7978)("Int16", 2, function(a) {
        return function(u, B, f) {
          return a(this, u, B, f);
        };
      });
    }, 5469: (i, c, n) => {
      n(7978)("Int32", 4, function(a) {
        return function(u, B, f) {
          return a(this, u, B, f);
        };
      });
    }, 6788: (i, c, n) => {
      n(7978)("Int8", 1, function(a) {
        return function(u, B, f) {
          return a(this, u, B, f);
        };
      });
    }, 1592: (i, c, n) => {
      n(7978)("Uint16", 2, function(a) {
        return function(u, B, f) {
          return a(this, u, B, f);
        };
      });
    }, 6471: (i, c, n) => {
      n(7978)("Uint32", 4, function(a) {
        return function(u, B, f) {
          return a(this, u, B, f);
        };
      });
    }, 6780: (i, c, n) => {
      n(7978)("Uint8", 1, function(a) {
        return function(u, B, f) {
          return a(this, u, B, f);
        };
      });
    }, 3620: (i, c, n) => {
      n(7978)("Uint8", 1, function(a) {
        return function(u, B, f) {
          return a(this, u, B, f);
        };
      }, !0);
    }, 8081: (i, c, n) => {
      var a = n(5772), u = n(9021)(!0);
      a(a.P, "Array", { includes: function(B) {
        return u(this, B, arguments.length > 1 ? arguments[1] : void 0);
      } }), n(2094)("includes");
    }, 7453: (i, c, n) => {
      var a = n(5772), u = n(6831), B = n(5703), f = n(4662), w = n(6644);
      a(a.S, "Object", { getOwnPropertyDescriptors: function(d) {
        for (var Q, C, v = B(d), m = f.f, b = u(v), D = {}, L = 0; b.length > L; )
          (C = m(v, Q = b[L++])) !== void 0 && w(D, Q, C);
        return D;
      } });
    }, 27: (i, c, n) => {
      var a = n(5772), u = n(758)(!1);
      a(a.S, "Object", { values: function(B) {
        return u(B);
      } });
    }, 3085: (i, c, n) => {
      for (var a = n(7680), u = n(2912), B = n(7738), f = n(8113), w = n(4216), d = n(3988), Q = n(2190), C = Q("iterator"), v = Q("toStringTag"), m = d.Array, b = { CSSRuleList: !0, CSSStyleDeclaration: !1, CSSValueList: !1, ClientRectList: !1, DOMRectList: !1, DOMStringList: !1, DOMTokenList: !0, DataTransferItemList: !1, FileList: !1, HTMLAllCollection: !1, HTMLCollection: !1, HTMLFormElement: !1, HTMLSelectElement: !1, MediaList: !0, MimeTypeArray: !1, NamedNodeMap: !1, NodeList: !0, PaintRequestList: !1, Plugin: !1, PluginArray: !1, SVGLengthList: !1, SVGNumberList: !1, SVGPathSegList: !1, SVGPointList: !1, SVGStringList: !1, SVGTransformList: !1, SourceBufferList: !1, StyleSheetList: !0, TextTrackCueList: !1, TextTrackList: !1, TouchList: !1 }, D = u(b), L = 0; L < D.length; L++) {
        var N, V = D[L], H = b[V], j = f[V], P = j && j.prototype;
        if (P && (P[C] || w(P, C, m), P[v] || w(P, v, V), d[V] = m, H))
          for (N in a)
            P[N] || B(P, N, a[N], !0);
      }
    }, 927: (i, c, n) => {
      i.exports = function a(u, B, f) {
        function w(C, v) {
          if (!B[C]) {
            if (!u[C]) {
              if (d)
                return d(C, !0);
              var m = new Error("Cannot find module '" + C + "'");
              throw m.code = "MODULE_NOT_FOUND", m;
            }
            var b = B[C] = { exports: {} };
            u[C][0].call(b.exports, function(D) {
              return w(u[C][1][D] || D);
            }, b, b.exports, a, u, B, f);
          }
          return B[C].exports;
        }
        for (var d = void 0, Q = 0; Q < f.length; Q++)
          w(f[Q]);
        return w;
      }({ 1: [function(a, u, B) {
        (function(f) {
          var w, d, Q = f.MutationObserver || f.WebKitMutationObserver;
          if (Q) {
            var C = 0, v = new Q(L), m = f.document.createTextNode("");
            v.observe(m, { characterData: !0 }), w = function() {
              m.data = C = ++C % 2;
            };
          } else if (f.setImmediate || f.MessageChannel === void 0)
            w = "document" in f && "onreadystatechange" in f.document.createElement("script") ? function() {
              var N = f.document.createElement("script");
              N.onreadystatechange = function() {
                L(), N.onreadystatechange = null, N.parentNode.removeChild(N), N = null;
              }, f.document.documentElement.appendChild(N);
            } : function() {
              setTimeout(L, 0);
            };
          else {
            var b = new f.MessageChannel();
            b.port1.onmessage = L, w = function() {
              b.port2.postMessage(0);
            };
          }
          var D = [];
          function L() {
            var N, V;
            d = !0;
            for (var H = D.length; H; ) {
              for (V = D, D = [], N = -1; ++N < H; )
                V[N]();
              H = D.length;
            }
            d = !1;
          }
          u.exports = function(N) {
            D.push(N) !== 1 || d || w();
          };
        }).call(this, n.g !== void 0 ? n.g : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, {}], 2: [function(a, u, B) {
        var f = a(1);
        function w() {
        }
        var d = {}, Q = ["REJECTED"], C = ["FULFILLED"], v = ["PENDING"];
        function m(H) {
          if (typeof H != "function")
            throw new TypeError("resolver must be a function");
          this.state = v, this.queue = [], this.outcome = void 0, H !== w && N(this, H);
        }
        function b(H, j, P) {
          this.promise = H, typeof j == "function" && (this.onFulfilled = j, this.callFulfilled = this.otherCallFulfilled), typeof P == "function" && (this.onRejected = P, this.callRejected = this.otherCallRejected);
        }
        function D(H, j, P) {
          f(function() {
            var X;
            try {
              X = j(P);
            } catch (x) {
              return d.reject(H, x);
            }
            X === H ? d.reject(H, new TypeError("Cannot resolve promise with itself")) : d.resolve(H, X);
          });
        }
        function L(H) {
          var j = H && H.then;
          if (H && (typeof H == "object" || typeof H == "function") && typeof j == "function")
            return function() {
              j.apply(H, arguments);
            };
        }
        function N(H, j) {
          var P = !1;
          function X(Z) {
            P || (P = !0, d.reject(H, Z));
          }
          function x(Z) {
            P || (P = !0, d.resolve(H, Z));
          }
          var T = V(function() {
            j(x, X);
          });
          T.status === "error" && X(T.value);
        }
        function V(H, j) {
          var P = {};
          try {
            P.value = H(j), P.status = "success";
          } catch (X) {
            P.status = "error", P.value = X;
          }
          return P;
        }
        u.exports = m, m.prototype.catch = function(H) {
          return this.then(null, H);
        }, m.prototype.then = function(H, j) {
          if (typeof H != "function" && this.state === C || typeof j != "function" && this.state === Q)
            return this;
          var P = new this.constructor(w);
          return this.state !== v ? D(P, this.state === C ? H : j, this.outcome) : this.queue.push(new b(P, H, j)), P;
        }, b.prototype.callFulfilled = function(H) {
          d.resolve(this.promise, H);
        }, b.prototype.otherCallFulfilled = function(H) {
          D(this.promise, this.onFulfilled, H);
        }, b.prototype.callRejected = function(H) {
          d.reject(this.promise, H);
        }, b.prototype.otherCallRejected = function(H) {
          D(this.promise, this.onRejected, H);
        }, d.resolve = function(H, j) {
          var P = V(L, j);
          if (P.status === "error")
            return d.reject(H, P.value);
          var X = P.value;
          if (X)
            N(H, X);
          else {
            H.state = C, H.outcome = j;
            for (var x = -1, T = H.queue.length; ++x < T; )
              H.queue[x].callFulfilled(j);
          }
          return H;
        }, d.reject = function(H, j) {
          H.state = Q, H.outcome = j;
          for (var P = -1, X = H.queue.length; ++P < X; )
            H.queue[P].callRejected(j);
          return H;
        }, m.resolve = function(H) {
          return H instanceof this ? H : d.resolve(new this(w), H);
        }, m.reject = function(H) {
          var j = new this(w);
          return d.reject(j, H);
        }, m.all = function(H) {
          var j = this;
          if (Object.prototype.toString.call(H) !== "[object Array]")
            return this.reject(new TypeError("must be an array"));
          var P = H.length, X = !1;
          if (!P)
            return this.resolve([]);
          for (var x = new Array(P), T = 0, Z = -1, aA = new this(w); ++Z < P; )
            nA(H[Z], Z);
          return aA;
          function nA(EA, KA) {
            j.resolve(EA).then(function(yA) {
              x[KA] = yA, ++T !== P || X || (X = !0, d.resolve(aA, x));
            }, function(yA) {
              X || (X = !0, d.reject(aA, yA));
            });
          }
        }, m.race = function(H) {
          var j = this;
          if (Object.prototype.toString.call(H) !== "[object Array]")
            return this.reject(new TypeError("must be an array"));
          var P, X = H.length, x = !1;
          if (!X)
            return this.resolve([]);
          for (var T = -1, Z = new this(w); ++T < X; )
            P = H[T], j.resolve(P).then(function(aA) {
              x || (x = !0, d.resolve(Z, aA));
            }, function(aA) {
              x || (x = !0, d.reject(Z, aA));
            });
          return Z;
        };
      }, { 1: 1 }], 3: [function(a, u, B) {
        (function(f) {
          typeof f.Promise != "function" && (f.Promise = a(2));
        }).call(this, n.g !== void 0 ? n.g : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, { 2: 2 }], 4: [function(a, u, B) {
        var f = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(p) {
          return typeof p;
        } : function(p) {
          return p && typeof Symbol == "function" && p.constructor === Symbol && p !== Symbol.prototype ? "symbol" : typeof p;
        }, w = function() {
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
        function d(p, E) {
          p = p || [], E = E || {};
          try {
            return new Blob(p, E);
          } catch (S) {
            if (S.name !== "TypeError")
              throw S;
            for (var y = new (typeof BlobBuilder < "u" ? BlobBuilder : typeof MSBlobBuilder < "u" ? MSBlobBuilder : typeof MozBlobBuilder < "u" ? MozBlobBuilder : WebKitBlobBuilder)(), K = 0; K < p.length; K += 1)
              y.append(p[K]);
            return y.getBlob(E.type);
          }
        }
        typeof Promise > "u" && a(3);
        var Q = Promise;
        function C(p, E) {
          E && p.then(function(y) {
            E(null, y);
          }, function(y) {
            E(y);
          });
        }
        function v(p, E, y) {
          typeof E == "function" && p.then(E), typeof y == "function" && p.catch(y);
        }
        function m(p) {
          return typeof p != "string" && (console.warn(p + " used as a key, but it is not a string."), p = String(p)), p;
        }
        function b() {
          if (arguments.length && typeof arguments[arguments.length - 1] == "function")
            return arguments[arguments.length - 1];
        }
        var D = "local-forage-detect-blob-support", L = void 0, N = {}, V = Object.prototype.toString, H = "readonly", j = "readwrite";
        function P(p) {
          for (var E = p.length, y = new ArrayBuffer(E), K = new Uint8Array(y), S = 0; S < E; S++)
            K[S] = p.charCodeAt(S);
          return y;
        }
        function X(p) {
          return typeof L == "boolean" ? Q.resolve(L) : function(E) {
            return new Q(function(y) {
              var K = E.transaction(D, j), S = d([""]);
              K.objectStore(D).put(S, "key"), K.onabort = function(O) {
                O.preventDefault(), O.stopPropagation(), y(!1);
              }, K.oncomplete = function() {
                var O = navigator.userAgent.match(/Chrome\/(\d+)/), k = navigator.userAgent.match(/Edge\//);
                y(k || !O || parseInt(O[1], 10) >= 43);
              };
            }).catch(function() {
              return !1;
            });
          }(p).then(function(E) {
            return L = E;
          });
        }
        function x(p) {
          var E = N[p.name], y = {};
          y.promise = new Q(function(K, S) {
            y.resolve = K, y.reject = S;
          }), E.deferredOperations.push(y), E.dbReady ? E.dbReady = E.dbReady.then(function() {
            return y.promise;
          }) : E.dbReady = y.promise;
        }
        function T(p) {
          var E = N[p.name].deferredOperations.pop();
          if (E)
            return E.resolve(), E.promise;
        }
        function Z(p, E) {
          var y = N[p.name].deferredOperations.pop();
          if (y)
            return y.reject(E), y.promise;
        }
        function aA(p, E) {
          return new Q(function(y, K) {
            if (N[p.name] = N[p.name] || { forages: [], db: null, dbReady: null, deferredOperations: [] }, p.db) {
              if (!E)
                return y(p.db);
              x(p), p.db.close();
            }
            var S = [p.name];
            E && S.push(p.version);
            var O = w.open.apply(w, S);
            E && (O.onupgradeneeded = function(k) {
              var z = O.result;
              try {
                z.createObjectStore(p.storeName), k.oldVersion <= 1 && z.createObjectStore(D);
              } catch (q) {
                if (q.name !== "ConstraintError")
                  throw q;
                console.warn('The database "' + p.name + '" has been upgraded from version ' + k.oldVersion + " to version " + k.newVersion + ', but the storage "' + p.storeName + '" already exists.');
              }
            }), O.onerror = function(k) {
              k.preventDefault(), K(O.error);
            }, O.onsuccess = function() {
              var k = O.result;
              k.onversionchange = function(z) {
                z.target.close();
              }, y(k), T(p);
            };
          });
        }
        function nA(p) {
          return aA(p, !1);
        }
        function EA(p) {
          return aA(p, !0);
        }
        function KA(p, E) {
          if (!p.db)
            return !0;
          var y = !p.db.objectStoreNames.contains(p.storeName), K = p.version < p.db.version, S = p.version > p.db.version;
          if (K && (p.version !== E && console.warn('The database "' + p.name + `" can't be downgraded from version ` + p.db.version + " to version " + p.version + "."), p.version = p.db.version), S || y) {
            if (y) {
              var O = p.db.version + 1;
              O > p.version && (p.version = O);
            }
            return !0;
          }
          return !1;
        }
        function yA(p) {
          return d([P(atob(p.data))], { type: p.type });
        }
        function mA(p) {
          return p && p.__local_forage_encoded_blob;
        }
        function HA(p) {
          var E = this, y = E._initReady().then(function() {
            var K = N[E._dbInfo.name];
            if (K && K.dbReady)
              return K.dbReady;
          });
          return v(y, p, p), y;
        }
        function dA(p, E, y, K) {
          K === void 0 && (K = 1);
          try {
            var S = p.db.transaction(p.storeName, E);
            y(null, S);
          } catch (O) {
            if (K > 0 && (!p.db || O.name === "InvalidStateError" || O.name === "NotFoundError"))
              return Q.resolve().then(function() {
                if (!p.db || O.name === "NotFoundError" && !p.db.objectStoreNames.contains(p.storeName) && p.version <= p.db.version)
                  return p.db && (p.version = p.db.version + 1), EA(p);
              }).then(function() {
                return function(k) {
                  x(k);
                  for (var z = N[k.name], q = z.forages, J = 0; J < q.length; J++) {
                    var fA = q[J];
                    fA._dbInfo.db && (fA._dbInfo.db.close(), fA._dbInfo.db = null);
                  }
                  return k.db = null, nA(k).then(function(U) {
                    return k.db = U, KA(k) ? EA(k) : U;
                  }).then(function(U) {
                    k.db = z.db = U;
                    for (var M = 0; M < q.length; M++)
                      q[M]._dbInfo.db = U;
                  }).catch(function(U) {
                    throw Z(k, U), U;
                  });
                }(p).then(function() {
                  dA(p, E, y, K - 1);
                });
              }).catch(y);
            y(O);
          }
        }
        var R = { _driver: "asyncStorage", _initStorage: function(p) {
          var E = this, y = { db: null };
          if (p)
            for (var K in p)
              y[K] = p[K];
          var S = N[y.name];
          S || (S = { forages: [], db: null, dbReady: null, deferredOperations: [] }, N[y.name] = S), S.forages.push(E), E._initReady || (E._initReady = E.ready, E.ready = HA);
          var O = [];
          function k() {
            return Q.resolve();
          }
          for (var z = 0; z < S.forages.length; z++) {
            var q = S.forages[z];
            q !== E && O.push(q._initReady().catch(k));
          }
          var J = S.forages.slice(0);
          return Q.all(O).then(function() {
            return y.db = S.db, nA(y);
          }).then(function(fA) {
            return y.db = fA, KA(y, E._defaultConfig.version) ? EA(y) : fA;
          }).then(function(fA) {
            y.db = S.db = fA, E._dbInfo = y;
            for (var U = 0; U < J.length; U++) {
              var M = J[U];
              M !== E && (M._dbInfo.db = y.db, M._dbInfo.version = y.version);
            }
          });
        }, _support: function() {
          try {
            if (!w || !w.open)
              return !1;
            var p = typeof openDatabase < "u" && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform), E = typeof fetch == "function" && fetch.toString().indexOf("[native code") !== -1;
            return (!p || E) && typeof indexedDB < "u" && typeof IDBKeyRange < "u";
          } catch {
            return !1;
          }
        }(), iterate: function(p, E) {
          var y = this, K = new Q(function(S, O) {
            y.ready().then(function() {
              dA(y._dbInfo, H, function(k, z) {
                if (k)
                  return O(k);
                try {
                  var q = z.objectStore(y._dbInfo.storeName).openCursor(), J = 1;
                  q.onsuccess = function() {
                    var fA = q.result;
                    if (fA) {
                      var U = fA.value;
                      mA(U) && (U = yA(U));
                      var M = p(U, fA.key, J++);
                      M !== void 0 ? S(M) : fA.continue();
                    } else
                      S();
                  }, q.onerror = function() {
                    O(q.error);
                  };
                } catch (fA) {
                  O(fA);
                }
              });
            }).catch(O);
          });
          return C(K, E), K;
        }, getItem: function(p, E) {
          var y = this;
          p = m(p);
          var K = new Q(function(S, O) {
            y.ready().then(function() {
              dA(y._dbInfo, H, function(k, z) {
                if (k)
                  return O(k);
                try {
                  var q = z.objectStore(y._dbInfo.storeName).get(p);
                  q.onsuccess = function() {
                    var J = q.result;
                    J === void 0 && (J = null), mA(J) && (J = yA(J)), S(J);
                  }, q.onerror = function() {
                    O(q.error);
                  };
                } catch (J) {
                  O(J);
                }
              });
            }).catch(O);
          });
          return C(K, E), K;
        }, setItem: function(p, E, y) {
          var K = this;
          p = m(p);
          var S = new Q(function(O, k) {
            var z;
            K.ready().then(function() {
              return z = K._dbInfo, V.call(E) === "[object Blob]" ? X(z.db).then(function(q) {
                return q ? E : (J = E, new Q(function(fA, U) {
                  var M = new FileReader();
                  M.onerror = U, M.onloadend = function(Y) {
                    var sA = btoa(Y.target.result || "");
                    fA({ __local_forage_encoded_blob: !0, data: sA, type: J.type });
                  }, M.readAsBinaryString(J);
                }));
                var J;
              }) : E;
            }).then(function(q) {
              dA(K._dbInfo, j, function(J, fA) {
                if (J)
                  return k(J);
                try {
                  var U = fA.objectStore(K._dbInfo.storeName);
                  q === null && (q = void 0);
                  var M = U.put(q, p);
                  fA.oncomplete = function() {
                    q === void 0 && (q = null), O(q);
                  }, fA.onabort = fA.onerror = function() {
                    var Y = M.error ? M.error : M.transaction.error;
                    k(Y);
                  };
                } catch (Y) {
                  k(Y);
                }
              });
            }).catch(k);
          });
          return C(S, y), S;
        }, removeItem: function(p, E) {
          var y = this;
          p = m(p);
          var K = new Q(function(S, O) {
            y.ready().then(function() {
              dA(y._dbInfo, j, function(k, z) {
                if (k)
                  return O(k);
                try {
                  var q = z.objectStore(y._dbInfo.storeName).delete(p);
                  z.oncomplete = function() {
                    S();
                  }, z.onerror = function() {
                    O(q.error);
                  }, z.onabort = function() {
                    var J = q.error ? q.error : q.transaction.error;
                    O(J);
                  };
                } catch (J) {
                  O(J);
                }
              });
            }).catch(O);
          });
          return C(K, E), K;
        }, clear: function(p) {
          var E = this, y = new Q(function(K, S) {
            E.ready().then(function() {
              dA(E._dbInfo, j, function(O, k) {
                if (O)
                  return S(O);
                try {
                  var z = k.objectStore(E._dbInfo.storeName).clear();
                  k.oncomplete = function() {
                    K();
                  }, k.onabort = k.onerror = function() {
                    var q = z.error ? z.error : z.transaction.error;
                    S(q);
                  };
                } catch (q) {
                  S(q);
                }
              });
            }).catch(S);
          });
          return C(y, p), y;
        }, length: function(p) {
          var E = this, y = new Q(function(K, S) {
            E.ready().then(function() {
              dA(E._dbInfo, H, function(O, k) {
                if (O)
                  return S(O);
                try {
                  var z = k.objectStore(E._dbInfo.storeName).count();
                  z.onsuccess = function() {
                    K(z.result);
                  }, z.onerror = function() {
                    S(z.error);
                  };
                } catch (q) {
                  S(q);
                }
              });
            }).catch(S);
          });
          return C(y, p), y;
        }, key: function(p, E) {
          var y = this, K = new Q(function(S, O) {
            p < 0 ? S(null) : y.ready().then(function() {
              dA(y._dbInfo, H, function(k, z) {
                if (k)
                  return O(k);
                try {
                  var q = z.objectStore(y._dbInfo.storeName), J = !1, fA = q.openKeyCursor();
                  fA.onsuccess = function() {
                    var U = fA.result;
                    U ? p === 0 || J ? S(U.key) : (J = !0, U.advance(p)) : S(null);
                  }, fA.onerror = function() {
                    O(fA.error);
                  };
                } catch (U) {
                  O(U);
                }
              });
            }).catch(O);
          });
          return C(K, E), K;
        }, keys: function(p) {
          var E = this, y = new Q(function(K, S) {
            E.ready().then(function() {
              dA(E._dbInfo, H, function(O, k) {
                if (O)
                  return S(O);
                try {
                  var z = k.objectStore(E._dbInfo.storeName).openKeyCursor(), q = [];
                  z.onsuccess = function() {
                    var J = z.result;
                    J ? (q.push(J.key), J.continue()) : K(q);
                  }, z.onerror = function() {
                    S(z.error);
                  };
                } catch (J) {
                  S(J);
                }
              });
            }).catch(S);
          });
          return C(y, p), y;
        }, dropInstance: function(p, E) {
          E = b.apply(this, arguments);
          var y = this.config();
          (p = typeof p != "function" && p || {}).name || (p.name = p.name || y.name, p.storeName = p.storeName || y.storeName);
          var K, S = this;
          if (p.name) {
            var O = p.name === y.name && S._dbInfo.db ? Q.resolve(S._dbInfo.db) : nA(p).then(function(k) {
              var z = N[p.name], q = z.forages;
              z.db = k;
              for (var J = 0; J < q.length; J++)
                q[J]._dbInfo.db = k;
              return k;
            });
            K = p.storeName ? O.then(function(k) {
              if (k.objectStoreNames.contains(p.storeName)) {
                var z = k.version + 1;
                x(p);
                var q = N[p.name], J = q.forages;
                k.close();
                for (var fA = 0; fA < J.length; fA++) {
                  var U = J[fA];
                  U._dbInfo.db = null, U._dbInfo.version = z;
                }
                var M = new Q(function(Y, sA) {
                  var gA = w.open(p.name, z);
                  gA.onerror = function(VA) {
                    gA.result.close(), sA(VA);
                  }, gA.onupgradeneeded = function() {
                    gA.result.deleteObjectStore(p.storeName);
                  }, gA.onsuccess = function() {
                    var VA = gA.result;
                    VA.close(), Y(VA);
                  };
                });
                return M.then(function(Y) {
                  q.db = Y;
                  for (var sA = 0; sA < J.length; sA++) {
                    var gA = J[sA];
                    gA._dbInfo.db = Y, T(gA._dbInfo);
                  }
                }).catch(function(Y) {
                  throw (Z(p, Y) || Q.resolve()).catch(function() {
                  }), Y;
                });
              }
            }) : O.then(function(k) {
              x(p);
              var z = N[p.name], q = z.forages;
              k.close();
              for (var J = 0; J < q.length; J++)
                q[J]._dbInfo.db = null;
              var fA = new Q(function(U, M) {
                var Y = w.deleteDatabase(p.name);
                Y.onerror = function() {
                  var sA = Y.result;
                  sA && sA.close(), M(Y.error);
                }, Y.onblocked = function() {
                  console.warn('dropInstance blocked for database "' + p.name + '" until all open connections are closed');
                }, Y.onsuccess = function() {
                  var sA = Y.result;
                  sA && sA.close(), U(sA);
                };
              });
              return fA.then(function(U) {
                z.db = U;
                for (var M = 0; M < q.length; M++)
                  T(q[M]._dbInfo);
              }).catch(function(U) {
                throw (Z(p, U) || Q.resolve()).catch(function() {
                }), U;
              });
            });
          } else
            K = Q.reject("Invalid arguments");
          return C(K, E), K;
        } }, _ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", W = /^~~local_forage_type~([^~]+)~/, lA = "__lfsc__:", oA = lA.length, bA = "arbf", NA = "blob", eA = "si08", cA = "ui08", IA = "uic8", SA = "si16", DA = "si32", jA = "ur16", we = "ui32", ne = "fl32", PA = "fl64", $A = oA + bA.length, zA = Object.prototype.toString;
        function te(p) {
          var E, y, K, S, O, k = 0.75 * p.length, z = p.length, q = 0;
          p[p.length - 1] === "=" && (k--, p[p.length - 2] === "=" && k--);
          var J = new ArrayBuffer(k), fA = new Uint8Array(J);
          for (E = 0; E < z; E += 4)
            y = _.indexOf(p[E]), K = _.indexOf(p[E + 1]), S = _.indexOf(p[E + 2]), O = _.indexOf(p[E + 3]), fA[q++] = y << 2 | K >> 4, fA[q++] = (15 & K) << 4 | S >> 2, fA[q++] = (3 & S) << 6 | 63 & O;
          return J;
        }
        function ye(p) {
          var E, y = new Uint8Array(p), K = "";
          for (E = 0; E < y.length; E += 3)
            K += _[y[E] >> 2], K += _[(3 & y[E]) << 4 | y[E + 1] >> 4], K += _[(15 & y[E + 1]) << 2 | y[E + 2] >> 6], K += _[63 & y[E + 2]];
          return y.length % 3 == 2 ? K = K.substring(0, K.length - 1) + "=" : y.length % 3 == 1 && (K = K.substring(0, K.length - 2) + "=="), K;
        }
        var fe = { serialize: function(p, E) {
          var y = "";
          if (p && (y = zA.call(p)), p && (y === "[object ArrayBuffer]" || p.buffer && zA.call(p.buffer) === "[object ArrayBuffer]")) {
            var K, S = lA;
            p instanceof ArrayBuffer ? (K = p, S += bA) : (K = p.buffer, y === "[object Int8Array]" ? S += eA : y === "[object Uint8Array]" ? S += cA : y === "[object Uint8ClampedArray]" ? S += IA : y === "[object Int16Array]" ? S += SA : y === "[object Uint16Array]" ? S += jA : y === "[object Int32Array]" ? S += DA : y === "[object Uint32Array]" ? S += we : y === "[object Float32Array]" ? S += ne : y === "[object Float64Array]" ? S += PA : E(new Error("Failed to get type for BinaryArray"))), E(S + ye(K));
          } else if (y === "[object Blob]") {
            var O = new FileReader();
            O.onload = function() {
              var k = "~~local_forage_type~" + p.type + "~" + ye(this.result);
              E(lA + NA + k);
            }, O.readAsArrayBuffer(p);
          } else
            try {
              E(JSON.stringify(p));
            } catch (k) {
              console.error("Couldn't convert value into a JSON string: ", p), E(null, k);
            }
        }, deserialize: function(p) {
          if (p.substring(0, oA) !== lA)
            return JSON.parse(p);
          var E, y = p.substring($A), K = p.substring(oA, $A);
          if (K === NA && W.test(y)) {
            var S = y.match(W);
            E = S[1], y = y.substring(S[0].length);
          }
          var O = te(y);
          switch (K) {
            case bA:
              return O;
            case NA:
              return d([O], { type: E });
            case eA:
              return new Int8Array(O);
            case cA:
              return new Uint8Array(O);
            case IA:
              return new Uint8ClampedArray(O);
            case SA:
              return new Int16Array(O);
            case jA:
              return new Uint16Array(O);
            case DA:
              return new Int32Array(O);
            case we:
              return new Uint32Array(O);
            case ne:
              return new Float32Array(O);
            case PA:
              return new Float64Array(O);
            default:
              throw new Error("Unkown type: " + K);
          }
        }, stringToBuffer: te, bufferToString: ye };
        function he(p, E, y, K) {
          p.executeSql("CREATE TABLE IF NOT EXISTS " + E.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], y, K);
        }
        function le(p, E, y, K, S, O) {
          p.executeSql(y, K, S, function(k, z) {
            z.code === z.SYNTAX_ERR ? k.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [E.storeName], function(q, J) {
              J.rows.length ? O(q, z) : he(q, E, function() {
                q.executeSql(y, K, S, O);
              }, O);
            }, O) : O(k, z);
          }, O);
        }
        function $(p, E, y, K) {
          var S = this;
          p = m(p);
          var O = new Q(function(k, z) {
            S.ready().then(function() {
              E === void 0 && (E = null);
              var q = E, J = S._dbInfo;
              J.serializer.serialize(E, function(fA, U) {
                U ? z(U) : J.db.transaction(function(M) {
                  le(M, J, "INSERT OR REPLACE INTO " + J.storeName + " (key, value) VALUES (?, ?)", [p, fA], function() {
                    k(q);
                  }, function(Y, sA) {
                    z(sA);
                  });
                }, function(M) {
                  if (M.code === M.QUOTA_ERR) {
                    if (K > 0)
                      return void k($.apply(S, [p, q, y, K - 1]));
                    z(M);
                  }
                });
              });
            }).catch(z);
          });
          return C(O, y), O;
        }
        function FA(p) {
          return new Q(function(E, y) {
            p.transaction(function(K) {
              K.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(S, O) {
                for (var k = [], z = 0; z < O.rows.length; z++)
                  k.push(O.rows.item(z).name);
                E({ db: p, storeNames: k });
              }, function(S, O) {
                y(O);
              });
            }, function(K) {
              y(K);
            });
          });
        }
        var oe = { _driver: "webSQLStorage", _initStorage: function(p) {
          var E = this, y = { db: null };
          if (p)
            for (var K in p)
              y[K] = typeof p[K] != "string" ? p[K].toString() : p[K];
          var S = new Q(function(O, k) {
            try {
              y.db = openDatabase(y.name, String(y.version), y.description, y.size);
            } catch (z) {
              return k(z);
            }
            y.db.transaction(function(z) {
              he(z, y, function() {
                E._dbInfo = y, O();
              }, function(q, J) {
                k(J);
              });
            }, k);
          });
          return y.serializer = fe, S;
        }, _support: typeof openDatabase == "function", iterate: function(p, E) {
          var y = this, K = new Q(function(S, O) {
            y.ready().then(function() {
              var k = y._dbInfo;
              k.db.transaction(function(z) {
                le(z, k, "SELECT * FROM " + k.storeName, [], function(q, J) {
                  for (var fA = J.rows, U = fA.length, M = 0; M < U; M++) {
                    var Y = fA.item(M), sA = Y.value;
                    if (sA && (sA = k.serializer.deserialize(sA)), (sA = p(sA, Y.key, M + 1)) !== void 0)
                      return void S(sA);
                  }
                  S();
                }, function(q, J) {
                  O(J);
                });
              });
            }).catch(O);
          });
          return C(K, E), K;
        }, getItem: function(p, E) {
          var y = this;
          p = m(p);
          var K = new Q(function(S, O) {
            y.ready().then(function() {
              var k = y._dbInfo;
              k.db.transaction(function(z) {
                le(z, k, "SELECT * FROM " + k.storeName + " WHERE key = ? LIMIT 1", [p], function(q, J) {
                  var fA = J.rows.length ? J.rows.item(0).value : null;
                  fA && (fA = k.serializer.deserialize(fA)), S(fA);
                }, function(q, J) {
                  O(J);
                });
              });
            }).catch(O);
          });
          return C(K, E), K;
        }, setItem: function(p, E, y) {
          return $.apply(this, [p, E, y, 1]);
        }, removeItem: function(p, E) {
          var y = this;
          p = m(p);
          var K = new Q(function(S, O) {
            y.ready().then(function() {
              var k = y._dbInfo;
              k.db.transaction(function(z) {
                le(z, k, "DELETE FROM " + k.storeName + " WHERE key = ?", [p], function() {
                  S();
                }, function(q, J) {
                  O(J);
                });
              });
            }).catch(O);
          });
          return C(K, E), K;
        }, clear: function(p) {
          var E = this, y = new Q(function(K, S) {
            E.ready().then(function() {
              var O = E._dbInfo;
              O.db.transaction(function(k) {
                le(k, O, "DELETE FROM " + O.storeName, [], function() {
                  K();
                }, function(z, q) {
                  S(q);
                });
              });
            }).catch(S);
          });
          return C(y, p), y;
        }, length: function(p) {
          var E = this, y = new Q(function(K, S) {
            E.ready().then(function() {
              var O = E._dbInfo;
              O.db.transaction(function(k) {
                le(k, O, "SELECT COUNT(key) as c FROM " + O.storeName, [], function(z, q) {
                  var J = q.rows.item(0).c;
                  K(J);
                }, function(z, q) {
                  S(q);
                });
              });
            }).catch(S);
          });
          return C(y, p), y;
        }, key: function(p, E) {
          var y = this, K = new Q(function(S, O) {
            y.ready().then(function() {
              var k = y._dbInfo;
              k.db.transaction(function(z) {
                le(z, k, "SELECT key FROM " + k.storeName + " WHERE id = ? LIMIT 1", [p + 1], function(q, J) {
                  var fA = J.rows.length ? J.rows.item(0).key : null;
                  S(fA);
                }, function(q, J) {
                  O(J);
                });
              });
            }).catch(O);
          });
          return C(K, E), K;
        }, keys: function(p) {
          var E = this, y = new Q(function(K, S) {
            E.ready().then(function() {
              var O = E._dbInfo;
              O.db.transaction(function(k) {
                le(k, O, "SELECT key FROM " + O.storeName, [], function(z, q) {
                  for (var J = [], fA = 0; fA < q.rows.length; fA++)
                    J.push(q.rows.item(fA).key);
                  K(J);
                }, function(z, q) {
                  S(q);
                });
              });
            }).catch(S);
          });
          return C(y, p), y;
        }, dropInstance: function(p, E) {
          E = b.apply(this, arguments);
          var y = this.config();
          (p = typeof p != "function" && p || {}).name || (p.name = p.name || y.name, p.storeName = p.storeName || y.storeName);
          var K, S = this;
          return C(K = p.name ? new Q(function(O) {
            var k;
            k = p.name === y.name ? S._dbInfo.db : openDatabase(p.name, "", "", 0), p.storeName ? O({ db: k, storeNames: [p.storeName] }) : O(FA(k));
          }).then(function(O) {
            return new Q(function(k, z) {
              O.db.transaction(function(q) {
                function J(Y) {
                  return new Q(function(sA, gA) {
                    q.executeSql("DROP TABLE IF EXISTS " + Y, [], function() {
                      sA();
                    }, function(VA, OA) {
                      gA(OA);
                    });
                  });
                }
                for (var fA = [], U = 0, M = O.storeNames.length; U < M; U++)
                  fA.push(J(O.storeNames[U]));
                Q.all(fA).then(function() {
                  k();
                }).catch(function(Y) {
                  z(Y);
                });
              }, function(q) {
                z(q);
              });
            });
          }) : Q.reject("Invalid arguments"), E), K;
        } };
        function RA(p, E) {
          var y = p.name + "/";
          return p.storeName !== E.storeName && (y += p.storeName + "/"), y;
        }
        function ZA() {
          return !function() {
            var p = "_localforage_support_test";
            try {
              return localStorage.setItem(p, !0), localStorage.removeItem(p), !1;
            } catch {
              return !0;
            }
          }() || localStorage.length > 0;
        }
        var rA = { _driver: "localStorageWrapper", _initStorage: function(p) {
          var E = {};
          if (p)
            for (var y in p)
              E[y] = p[y];
          return E.keyPrefix = RA(p, this._defaultConfig), ZA() ? (this._dbInfo = E, E.serializer = fe, Q.resolve()) : Q.reject();
        }, _support: function() {
          try {
            return typeof localStorage < "u" && "setItem" in localStorage && !!localStorage.setItem;
          } catch {
            return !1;
          }
        }(), iterate: function(p, E) {
          var y = this, K = y.ready().then(function() {
            for (var S = y._dbInfo, O = S.keyPrefix, k = O.length, z = localStorage.length, q = 1, J = 0; J < z; J++) {
              var fA = localStorage.key(J);
              if (fA.indexOf(O) === 0) {
                var U = localStorage.getItem(fA);
                if (U && (U = S.serializer.deserialize(U)), (U = p(U, fA.substring(k), q++)) !== void 0)
                  return U;
              }
            }
          });
          return C(K, E), K;
        }, getItem: function(p, E) {
          var y = this;
          p = m(p);
          var K = y.ready().then(function() {
            var S = y._dbInfo, O = localStorage.getItem(S.keyPrefix + p);
            return O && (O = S.serializer.deserialize(O)), O;
          });
          return C(K, E), K;
        }, setItem: function(p, E, y) {
          var K = this;
          p = m(p);
          var S = K.ready().then(function() {
            E === void 0 && (E = null);
            var O = E;
            return new Q(function(k, z) {
              var q = K._dbInfo;
              q.serializer.serialize(E, function(J, fA) {
                if (fA)
                  z(fA);
                else
                  try {
                    localStorage.setItem(q.keyPrefix + p, J), k(O);
                  } catch (U) {
                    U.name !== "QuotaExceededError" && U.name !== "NS_ERROR_DOM_QUOTA_REACHED" || z(U), z(U);
                  }
              });
            });
          });
          return C(S, y), S;
        }, removeItem: function(p, E) {
          var y = this;
          p = m(p);
          var K = y.ready().then(function() {
            var S = y._dbInfo;
            localStorage.removeItem(S.keyPrefix + p);
          });
          return C(K, E), K;
        }, clear: function(p) {
          var E = this, y = E.ready().then(function() {
            for (var K = E._dbInfo.keyPrefix, S = localStorage.length - 1; S >= 0; S--) {
              var O = localStorage.key(S);
              O.indexOf(K) === 0 && localStorage.removeItem(O);
            }
          });
          return C(y, p), y;
        }, length: function(p) {
          var E = this.keys().then(function(y) {
            return y.length;
          });
          return C(E, p), E;
        }, key: function(p, E) {
          var y = this, K = y.ready().then(function() {
            var S, O = y._dbInfo;
            try {
              S = localStorage.key(p);
            } catch {
              S = null;
            }
            return S && (S = S.substring(O.keyPrefix.length)), S;
          });
          return C(K, E), K;
        }, keys: function(p) {
          var E = this, y = E.ready().then(function() {
            for (var K = E._dbInfo, S = localStorage.length, O = [], k = 0; k < S; k++) {
              var z = localStorage.key(k);
              z.indexOf(K.keyPrefix) === 0 && O.push(z.substring(K.keyPrefix.length));
            }
            return O;
          });
          return C(y, p), y;
        }, dropInstance: function(p, E) {
          if (E = b.apply(this, arguments), !(p = typeof p != "function" && p || {}).name) {
            var y = this.config();
            p.name = p.name || y.name, p.storeName = p.storeName || y.storeName;
          }
          var K, S = this;
          return K = p.name ? new Q(function(O) {
            p.storeName ? O(RA(p, S._defaultConfig)) : O(p.name + "/");
          }).then(function(O) {
            for (var k = localStorage.length - 1; k >= 0; k--) {
              var z = localStorage.key(k);
              z.indexOf(O) === 0 && localStorage.removeItem(z);
            }
          }) : Q.reject("Invalid arguments"), C(K, E), K;
        } }, BA = function(p, E) {
          for (var y = p.length, K = 0; K < y; ) {
            if ((S = p[K]) === (O = E) || typeof S == "number" && typeof O == "number" && isNaN(S) && isNaN(O))
              return !0;
            K++;
          }
          var S, O;
          return !1;
        }, xA = Array.isArray || function(p) {
          return Object.prototype.toString.call(p) === "[object Array]";
        }, GA = {}, WA = {}, kA = { INDEXEDDB: R, WEBSQL: oe, LOCALSTORAGE: rA }, Le = [kA.INDEXEDDB._driver, kA.WEBSQL._driver, kA.LOCALSTORAGE._driver], Pe = ["dropInstance"], qe = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(Pe), Me = { description: "", driver: Le.slice(), name: "localforage", size: 4980736, storeName: "keyvaluepairs", version: 1 };
        function $e(p, E) {
          p[E] = function() {
            var y = arguments;
            return p.ready().then(function() {
              return p[E].apply(p, y);
            });
          };
        }
        function De() {
          for (var p = 1; p < arguments.length; p++) {
            var E = arguments[p];
            if (E)
              for (var y in E)
                E.hasOwnProperty(y) && (xA(E[y]) ? arguments[0][y] = E[y].slice() : arguments[0][y] = E[y]);
          }
          return arguments[0];
        }
        var Ar = function() {
          function p(E) {
            for (var y in function(O, k) {
              if (!(O instanceof k))
                throw new TypeError("Cannot call a class as a function");
            }(this, p), kA)
              if (kA.hasOwnProperty(y)) {
                var K = kA[y], S = K._driver;
                this[y] = S, GA[S] || this.defineDriver(K);
              }
            this._defaultConfig = De({}, Me), this._config = De({}, this._defaultConfig, E), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch(function() {
            });
          }
          return p.prototype.config = function(E) {
            if ((E === void 0 ? "undefined" : f(E)) === "object") {
              if (this._ready)
                return new Error("Can't call config() after localforage has been used.");
              for (var y in E) {
                if (y === "storeName" && (E[y] = E[y].replace(/\W/g, "_")), y === "version" && typeof E[y] != "number")
                  return new Error("Database version must be a number.");
                this._config[y] = E[y];
              }
              return !("driver" in E) || !E.driver || this.setDriver(this._config.driver);
            }
            return typeof E == "string" ? this._config[E] : this._config;
          }, p.prototype.defineDriver = function(E, y, K) {
            var S = new Q(function(O, k) {
              try {
                var z = E._driver, q = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
                if (!E._driver)
                  return void k(q);
                for (var J = qe.concat("_initStorage"), fA = 0, U = J.length; fA < U; fA++) {
                  var M = J[fA];
                  if ((!BA(Pe, M) || E[M]) && typeof E[M] != "function")
                    return void k(q);
                }
                (function() {
                  for (var sA = function(_A) {
                    return function() {
                      var de = new Error("Method " + _A + " is not implemented by the current driver"), Ae = Q.reject(de);
                      return C(Ae, arguments[arguments.length - 1]), Ae;
                    };
                  }, gA = 0, VA = Pe.length; gA < VA; gA++) {
                    var OA = Pe[gA];
                    E[OA] || (E[OA] = sA(OA));
                  }
                })();
                var Y = function(sA) {
                  GA[z] && console.info("Redefining LocalForage driver: " + z), GA[z] = E, WA[z] = sA, O();
                };
                "_support" in E ? E._support && typeof E._support == "function" ? E._support().then(Y, k) : Y(!!E._support) : Y(!0);
              } catch (sA) {
                k(sA);
              }
            });
            return v(S, y, K), S;
          }, p.prototype.driver = function() {
            return this._driver || null;
          }, p.prototype.getDriver = function(E, y, K) {
            var S = GA[E] ? Q.resolve(GA[E]) : Q.reject(new Error("Driver not found."));
            return v(S, y, K), S;
          }, p.prototype.getSerializer = function(E) {
            var y = Q.resolve(fe);
            return v(y, E), y;
          }, p.prototype.ready = function(E) {
            var y = this, K = y._driverSet.then(function() {
              return y._ready === null && (y._ready = y._initDriver()), y._ready;
            });
            return v(K, E, E), K;
          }, p.prototype.setDriver = function(E, y, K) {
            var S = this;
            xA(E) || (E = [E]);
            var O = this._getSupportedDrivers(E);
            function k() {
              S._config.driver = S.driver();
            }
            function z(J) {
              return S._extend(J), k(), S._ready = S._initStorage(S._config), S._ready;
            }
            var q = this._driverSet !== null ? this._driverSet.catch(function() {
              return Q.resolve();
            }) : Q.resolve();
            return this._driverSet = q.then(function() {
              var J = O[0];
              return S._dbInfo = null, S._ready = null, S.getDriver(J).then(function(fA) {
                S._driver = fA._driver, k(), S._wrapLibraryMethodsWithReady(), S._initDriver = /* @__PURE__ */ function(U) {
                  return function() {
                    var M = 0;
                    return function Y() {
                      for (; M < U.length; ) {
                        var sA = U[M];
                        return M++, S._dbInfo = null, S._ready = null, S.getDriver(sA).then(z).catch(Y);
                      }
                      k();
                      var gA = new Error("No available storage method found.");
                      return S._driverSet = Q.reject(gA), S._driverSet;
                    }();
                  };
                }(O);
              });
            }).catch(function() {
              k();
              var J = new Error("No available storage method found.");
              return S._driverSet = Q.reject(J), S._driverSet;
            }), v(this._driverSet, y, K), this._driverSet;
          }, p.prototype.supports = function(E) {
            return !!WA[E];
          }, p.prototype._extend = function(E) {
            De(this, E);
          }, p.prototype._getSupportedDrivers = function(E) {
            for (var y = [], K = 0, S = E.length; K < S; K++) {
              var O = E[K];
              this.supports(O) && y.push(O);
            }
            return y;
          }, p.prototype._wrapLibraryMethodsWithReady = function() {
            for (var E = 0, y = qe.length; E < y; E++)
              $e(this, qe[E]);
          }, p.prototype.createInstance = function(E) {
            return new p(E);
          }, p;
        }(), pr = new Ar();
        u.exports = pr;
      }, { 3: 3 }] }, {}, [4])(4);
    }, 8156: (i) => {
      i.exports = t;
    }, 1337: (i, c, n) => {
      var a = n(7501).default;
      function u() {
        i.exports = u = function() {
          return B;
        }, i.exports.__esModule = !0, i.exports.default = i.exports;
        var B = {}, f = Object.prototype, w = f.hasOwnProperty, d = Object.defineProperty || function(R, _, W) {
          R[_] = W.value;
        }, Q = typeof Symbol == "function" ? Symbol : {}, C = Q.iterator || "@@iterator", v = Q.asyncIterator || "@@asyncIterator", m = Q.toStringTag || "@@toStringTag";
        function b(R, _, W) {
          return Object.defineProperty(R, _, { value: W, enumerable: !0, configurable: !0, writable: !0 }), R[_];
        }
        try {
          b({}, "");
        } catch {
          b = function(_, W, lA) {
            return _[W] = lA;
          };
        }
        function D(R, _, W, lA) {
          var oA = _ && _.prototype instanceof V ? _ : V, bA = Object.create(oA.prototype), NA = new mA(lA || []);
          return d(bA, "_invoke", { value: nA(R, W, NA) }), bA;
        }
        function L(R, _, W) {
          try {
            return { type: "normal", arg: R.call(_, W) };
          } catch (lA) {
            return { type: "throw", arg: lA };
          }
        }
        B.wrap = D;
        var N = {};
        function V() {
        }
        function H() {
        }
        function j() {
        }
        var P = {};
        b(P, C, function() {
          return this;
        });
        var X = Object.getPrototypeOf, x = X && X(X(HA([])));
        x && x !== f && w.call(x, C) && (P = x);
        var T = j.prototype = V.prototype = Object.create(P);
        function Z(R) {
          ["next", "throw", "return"].forEach(function(_) {
            b(R, _, function(W) {
              return this._invoke(_, W);
            });
          });
        }
        function aA(R, _) {
          function W(oA, bA, NA, eA) {
            var cA = L(R[oA], R, bA);
            if (cA.type !== "throw") {
              var IA = cA.arg, SA = IA.value;
              return SA && a(SA) == "object" && w.call(SA, "__await") ? _.resolve(SA.__await).then(function(DA) {
                W("next", DA, NA, eA);
              }, function(DA) {
                W("throw", DA, NA, eA);
              }) : _.resolve(SA).then(function(DA) {
                IA.value = DA, NA(IA);
              }, function(DA) {
                return W("throw", DA, NA, eA);
              });
            }
            eA(cA.arg);
          }
          var lA;
          d(this, "_invoke", { value: function(oA, bA) {
            function NA() {
              return new _(function(eA, cA) {
                W(oA, bA, eA, cA);
              });
            }
            return lA = lA ? lA.then(NA, NA) : NA();
          } });
        }
        function nA(R, _, W) {
          var lA = "suspendedStart";
          return function(oA, bA) {
            if (lA === "executing")
              throw new Error("Generator is already running");
            if (lA === "completed") {
              if (oA === "throw")
                throw bA;
              return { value: void 0, done: !0 };
            }
            for (W.method = oA, W.arg = bA; ; ) {
              var NA = W.delegate;
              if (NA) {
                var eA = EA(NA, W);
                if (eA) {
                  if (eA === N)
                    continue;
                  return eA;
                }
              }
              if (W.method === "next")
                W.sent = W._sent = W.arg;
              else if (W.method === "throw") {
                if (lA === "suspendedStart")
                  throw lA = "completed", W.arg;
                W.dispatchException(W.arg);
              } else
                W.method === "return" && W.abrupt("return", W.arg);
              lA = "executing";
              var cA = L(R, _, W);
              if (cA.type === "normal") {
                if (lA = W.done ? "completed" : "suspendedYield", cA.arg === N)
                  continue;
                return { value: cA.arg, done: W.done };
              }
              cA.type === "throw" && (lA = "completed", W.method = "throw", W.arg = cA.arg);
            }
          };
        }
        function EA(R, _) {
          var W = _.method, lA = R.iterator[W];
          if (lA === void 0)
            return _.delegate = null, W === "throw" && R.iterator.return && (_.method = "return", _.arg = void 0, EA(R, _), _.method === "throw") || W !== "return" && (_.method = "throw", _.arg = new TypeError("The iterator does not provide a '" + W + "' method")), N;
          var oA = L(lA, R.iterator, _.arg);
          if (oA.type === "throw")
            return _.method = "throw", _.arg = oA.arg, _.delegate = null, N;
          var bA = oA.arg;
          return bA ? bA.done ? (_[R.resultName] = bA.value, _.next = R.nextLoc, _.method !== "return" && (_.method = "next", _.arg = void 0), _.delegate = null, N) : bA : (_.method = "throw", _.arg = new TypeError("iterator result is not an object"), _.delegate = null, N);
        }
        function KA(R) {
          var _ = { tryLoc: R[0] };
          1 in R && (_.catchLoc = R[1]), 2 in R && (_.finallyLoc = R[2], _.afterLoc = R[3]), this.tryEntries.push(_);
        }
        function yA(R) {
          var _ = R.completion || {};
          _.type = "normal", delete _.arg, R.completion = _;
        }
        function mA(R) {
          this.tryEntries = [{ tryLoc: "root" }], R.forEach(KA, this), this.reset(!0);
        }
        function HA(R) {
          if (R) {
            var _ = R[C];
            if (_)
              return _.call(R);
            if (typeof R.next == "function")
              return R;
            if (!isNaN(R.length)) {
              var W = -1, lA = function oA() {
                for (; ++W < R.length; )
                  if (w.call(R, W))
                    return oA.value = R[W], oA.done = !1, oA;
                return oA.value = void 0, oA.done = !0, oA;
              };
              return lA.next = lA;
            }
          }
          return { next: dA };
        }
        function dA() {
          return { value: void 0, done: !0 };
        }
        return H.prototype = j, d(T, "constructor", { value: j, configurable: !0 }), d(j, "constructor", { value: H, configurable: !0 }), H.displayName = b(j, m, "GeneratorFunction"), B.isGeneratorFunction = function(R) {
          var _ = typeof R == "function" && R.constructor;
          return !!_ && (_ === H || (_.displayName || _.name) === "GeneratorFunction");
        }, B.mark = function(R) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(R, j) : (R.__proto__ = j, b(R, m, "GeneratorFunction")), R.prototype = Object.create(T), R;
        }, B.awrap = function(R) {
          return { __await: R };
        }, Z(aA.prototype), b(aA.prototype, v, function() {
          return this;
        }), B.AsyncIterator = aA, B.async = function(R, _, W, lA, oA) {
          oA === void 0 && (oA = Promise);
          var bA = new aA(D(R, _, W, lA), oA);
          return B.isGeneratorFunction(_) ? bA : bA.next().then(function(NA) {
            return NA.done ? NA.value : bA.next();
          });
        }, Z(T), b(T, m, "Generator"), b(T, C, function() {
          return this;
        }), b(T, "toString", function() {
          return "[object Generator]";
        }), B.keys = function(R) {
          var _ = Object(R), W = [];
          for (var lA in _)
            W.push(lA);
          return W.reverse(), function oA() {
            for (; W.length; ) {
              var bA = W.pop();
              if (bA in _)
                return oA.value = bA, oA.done = !1, oA;
            }
            return oA.done = !0, oA;
          };
        }, B.values = HA, mA.prototype = { constructor: mA, reset: function(R) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(yA), !R)
            for (var _ in this)
              _.charAt(0) === "t" && w.call(this, _) && !isNaN(+_.slice(1)) && (this[_] = void 0);
        }, stop: function() {
          this.done = !0;
          var R = this.tryEntries[0].completion;
          if (R.type === "throw")
            throw R.arg;
          return this.rval;
        }, dispatchException: function(R) {
          if (this.done)
            throw R;
          var _ = this;
          function W(cA, IA) {
            return bA.type = "throw", bA.arg = R, _.next = cA, IA && (_.method = "next", _.arg = void 0), !!IA;
          }
          for (var lA = this.tryEntries.length - 1; lA >= 0; --lA) {
            var oA = this.tryEntries[lA], bA = oA.completion;
            if (oA.tryLoc === "root")
              return W("end");
            if (oA.tryLoc <= this.prev) {
              var NA = w.call(oA, "catchLoc"), eA = w.call(oA, "finallyLoc");
              if (NA && eA) {
                if (this.prev < oA.catchLoc)
                  return W(oA.catchLoc, !0);
                if (this.prev < oA.finallyLoc)
                  return W(oA.finallyLoc);
              } else if (NA) {
                if (this.prev < oA.catchLoc)
                  return W(oA.catchLoc, !0);
              } else {
                if (!eA)
                  throw new Error("try statement without catch or finally");
                if (this.prev < oA.finallyLoc)
                  return W(oA.finallyLoc);
              }
            }
          }
        }, abrupt: function(R, _) {
          for (var W = this.tryEntries.length - 1; W >= 0; --W) {
            var lA = this.tryEntries[W];
            if (lA.tryLoc <= this.prev && w.call(lA, "finallyLoc") && this.prev < lA.finallyLoc) {
              var oA = lA;
              break;
            }
          }
          oA && (R === "break" || R === "continue") && oA.tryLoc <= _ && _ <= oA.finallyLoc && (oA = null);
          var bA = oA ? oA.completion : {};
          return bA.type = R, bA.arg = _, oA ? (this.method = "next", this.next = oA.finallyLoc, N) : this.complete(bA);
        }, complete: function(R, _) {
          if (R.type === "throw")
            throw R.arg;
          return R.type === "break" || R.type === "continue" ? this.next = R.arg : R.type === "return" ? (this.rval = this.arg = R.arg, this.method = "return", this.next = "end") : R.type === "normal" && _ && (this.next = _), N;
        }, finish: function(R) {
          for (var _ = this.tryEntries.length - 1; _ >= 0; --_) {
            var W = this.tryEntries[_];
            if (W.finallyLoc === R)
              return this.complete(W.completion, W.afterLoc), yA(W), N;
          }
        }, catch: function(R) {
          for (var _ = this.tryEntries.length - 1; _ >= 0; --_) {
            var W = this.tryEntries[_];
            if (W.tryLoc === R) {
              var lA = W.completion;
              if (lA.type === "throw") {
                var oA = lA.arg;
                yA(W);
              }
              return oA;
            }
          }
          throw new Error("illegal catch attempt");
        }, delegateYield: function(R, _, W) {
          return this.delegate = { iterator: HA(R), resultName: _, nextLoc: W }, this.method === "next" && (this.arg = void 0), N;
        } }, B;
      }
      i.exports = u, i.exports.__esModule = !0, i.exports.default = i.exports;
    }, 7501: (i) => {
      function c(n) {
        return i.exports = c = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
          return typeof a;
        } : function(a) {
          return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
        }, i.exports.__esModule = !0, i.exports.default = i.exports, c(n);
      }
      i.exports = c, i.exports.__esModule = !0, i.exports.default = i.exports;
    }, 824: (i, c, n) => {
      var a = n(1337)();
      i.exports = a;
      try {
        regeneratorRuntime = a;
      } catch {
        typeof globalThis == "object" ? globalThis.regeneratorRuntime = a : Function("r", "regeneratorRuntime = r")(a);
      }
    } }, o = {};
    function s(i) {
      var c = o[i];
      if (c !== void 0)
        return c.exports;
      var n = o[i] = { exports: {} };
      return r[i](n, n.exports, s), n.exports;
    }
    s.n = (i) => {
      var c = i && i.__esModule ? () => i.default : () => i;
      return s.d(c, { a: c }), c;
    }, s.d = (i, c) => {
      for (var n in c)
        s.o(c, n) && !s.o(i, n) && Object.defineProperty(i, n, { enumerable: !0, get: c[n] });
    }, s.g = function() {
      if (typeof globalThis == "object")
        return globalThis;
      try {
        return this || new Function("return this")();
      } catch {
        if (typeof window == "object")
          return window;
      }
    }(), s.o = (i, c) => Object.prototype.hasOwnProperty.call(i, c), s.r = (i) => {
      typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(i, "__esModule", { value: !0 });
    };
    var l = {};
    return (() => {
      function i(g) {
        return i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(h) {
          return typeof h;
        } : function(h) {
          return h && typeof Symbol == "function" && h.constructor === Symbol && h !== Symbol.prototype ? "symbol" : typeof h;
        }, i(g);
      }
      function c(g, h, F) {
        return (h = function(I) {
          var G = function(AA, iA) {
            if (i(AA) !== "object" || AA === null)
              return AA;
            var hA = AA[Symbol.toPrimitive];
            if (hA !== void 0) {
              var wA = hA.call(AA, "string");
              if (i(wA) !== "object")
                return wA;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(AA);
          }(I);
          return i(G) === "symbol" ? G : String(G);
        }(h)) in g ? Object.defineProperty(g, h, { value: F, enumerable: !0, configurable: !0, writable: !0 }) : g[h] = F, g;
      }
      function n(g, h, F, I, G, AA, iA) {
        try {
          var hA = g[AA](iA), wA = hA.value;
        } catch (QA) {
          return void F(QA);
        }
        hA.done ? h(wA) : Promise.resolve(wA).then(I, G);
      }
      function a(g) {
        return function() {
          var h = this, F = arguments;
          return new Promise(function(I, G) {
            var AA = g.apply(h, F);
            function iA(wA) {
              n(AA, I, G, iA, hA, "next", wA);
            }
            function hA(wA) {
              n(AA, I, G, iA, hA, "throw", wA);
            }
            iA(void 0);
          });
        };
      }
      function u(g, h) {
        (h == null || h > g.length) && (h = g.length);
        for (var F = 0, I = new Array(h); F < h; F++)
          I[F] = g[F];
        return I;
      }
      function B(g, h) {
        if (g) {
          if (typeof g == "string")
            return u(g, h);
          var F = Object.prototype.toString.call(g).slice(8, -1);
          return F === "Object" && g.constructor && (F = g.constructor.name), F === "Map" || F === "Set" ? Array.from(g) : F === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(F) ? u(g, h) : void 0;
        }
      }
      function f(g, h) {
        return function(F) {
          if (Array.isArray(F))
            return F;
        }(g) || function(F, I) {
          var G = F == null ? null : typeof Symbol < "u" && F[Symbol.iterator] || F["@@iterator"];
          if (G != null) {
            var AA, iA, hA, wA, QA = [], tA = !0, LA = !1;
            try {
              if (hA = (G = G.call(F)).next, I === 0) {
                if (Object(G) !== G)
                  return;
                tA = !1;
              } else
                for (; !(tA = (AA = hA.call(G)).done) && (QA.push(AA.value), QA.length !== I); tA = !0)
                  ;
            } catch (UA) {
              LA = !0, iA = UA;
            } finally {
              try {
                if (!tA && G.return != null && (wA = G.return(), Object(wA) !== wA))
                  return;
              } finally {
                if (LA)
                  throw iA;
              }
            }
            return QA;
          }
        }(g, h) || B(g, h) || function() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }();
      }
      function w(g, h) {
        if (g == null)
          return {};
        var F, I, G = function(iA, hA) {
          if (iA == null)
            return {};
          var wA, QA, tA = {}, LA = Object.keys(iA);
          for (QA = 0; QA < LA.length; QA++)
            wA = LA[QA], hA.indexOf(wA) >= 0 || (tA[wA] = iA[wA]);
          return tA;
        }(g, h);
        if (Object.getOwnPropertySymbols) {
          var AA = Object.getOwnPropertySymbols(g);
          for (I = 0; I < AA.length; I++)
            F = AA[I], h.indexOf(F) >= 0 || Object.prototype.propertyIsEnumerable.call(g, F) && (G[F] = g[F]);
        }
        return G;
      }
      s.r(l), s.d(l, { Dynamic: () => ds, connect: () => ys, default: () => ms, get: () => Rt, useAdd: () => Es, useDispatch: () => Xn, useModel: () => ri }), s(4978), s(9823), s(4434), s(541), s(7453), s(8344), s(5843);
      var d = s(824), Q = s.n(d), C = (s(6139), s(5105), s(4321), s(5867), s(7772), s(8156)), v = s.n(C), m = s(927);
      let b = (g = 21) => crypto.getRandomValues(new Uint8Array(g)).reduce((h, F) => h + ((F &= 63) < 36 ? F.toString(36) : F < 62 ? (F - 26).toString(36).toUpperCase() : F > 62 ? "-" : "_"), "");
      const D = function(g, h) {
        return g === h || g != g && h != h;
      }, L = function(g, h) {
        for (var F = g.length; F--; )
          if (D(g[F][0], h))
            return F;
        return -1;
      };
      var N = Array.prototype.splice;
      function V(g) {
        var h = -1, F = g == null ? 0 : g.length;
        for (this.clear(); ++h < F; ) {
          var I = g[h];
          this.set(I[0], I[1]);
        }
      }
      V.prototype.clear = function() {
        this.__data__ = [], this.size = 0;
      }, V.prototype.delete = function(g) {
        var h = this.__data__, F = L(h, g);
        return !(F < 0 || (F == h.length - 1 ? h.pop() : N.call(h, F, 1), --this.size, 0));
      }, V.prototype.get = function(g) {
        var h = this.__data__, F = L(h, g);
        return F < 0 ? void 0 : h[F][1];
      }, V.prototype.has = function(g) {
        return L(this.__data__, g) > -1;
      }, V.prototype.set = function(g, h) {
        var F = this.__data__, I = L(F, g);
        return I < 0 ? (++this.size, F.push([g, h])) : F[I][1] = h, this;
      };
      const H = V, j = typeof ft == "object" && ft && ft.Object === Object && ft;
      var P = typeof self == "object" && self && self.Object === Object && self;
      const X = j || P || Function("return this")(), x = X.Symbol;
      var T = Object.prototype, Z = T.hasOwnProperty, aA = T.toString, nA = x ? x.toStringTag : void 0, EA = Object.prototype.toString, KA = x ? x.toStringTag : void 0;
      const yA = function(g) {
        return g == null ? g === void 0 ? "[object Undefined]" : "[object Null]" : KA && KA in Object(g) ? function(h) {
          var F = Z.call(h, nA), I = h[nA];
          try {
            h[nA] = void 0;
            var G = !0;
          } catch {
          }
          var AA = aA.call(h);
          return G && (F ? h[nA] = I : delete h[nA]), AA;
        }(g) : function(h) {
          return EA.call(h);
        }(g);
      }, mA = function(g) {
        var h = typeof g;
        return g != null && (h == "object" || h == "function");
      }, HA = function(g) {
        if (!mA(g))
          return !1;
        var h = yA(g);
        return h == "[object Function]" || h == "[object GeneratorFunction]" || h == "[object AsyncFunction]" || h == "[object Proxy]";
      }, dA = X["__core-js_shared__"];
      var R, _ = (R = /[^.]+$/.exec(dA && dA.keys && dA.keys.IE_PROTO || "")) ? "Symbol(src)_1." + R : "", W = Function.prototype.toString, lA = /^\[object .+?Constructor\]$/, oA = Function.prototype, bA = Object.prototype, NA = oA.toString, eA = bA.hasOwnProperty, cA = RegExp("^" + NA.call(eA).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
      const IA = function(g) {
        return !(!mA(g) || (h = g, _ && _ in h)) && (HA(g) ? cA : lA).test(function(F) {
          if (F != null) {
            try {
              return W.call(F);
            } catch {
            }
            try {
              return F + "";
            } catch {
            }
          }
          return "";
        }(g));
        var h;
      }, SA = function(g, h) {
        var F = function(I, G) {
          return I == null ? void 0 : I[G];
        }(g, h);
        return IA(F) ? F : void 0;
      }, DA = SA(X, "Map"), jA = SA(Object, "create");
      var we = Object.prototype.hasOwnProperty, ne = Object.prototype.hasOwnProperty;
      function PA(g) {
        var h = -1, F = g == null ? 0 : g.length;
        for (this.clear(); ++h < F; ) {
          var I = g[h];
          this.set(I[0], I[1]);
        }
      }
      PA.prototype.clear = function() {
        this.__data__ = jA ? jA(null) : {}, this.size = 0;
      }, PA.prototype.delete = function(g) {
        var h = this.has(g) && delete this.__data__[g];
        return this.size -= h ? 1 : 0, h;
      }, PA.prototype.get = function(g) {
        var h = this.__data__;
        if (jA) {
          var F = h[g];
          return F === "__lodash_hash_undefined__" ? void 0 : F;
        }
        return we.call(h, g) ? h[g] : void 0;
      }, PA.prototype.has = function(g) {
        var h = this.__data__;
        return jA ? h[g] !== void 0 : ne.call(h, g);
      }, PA.prototype.set = function(g, h) {
        var F = this.__data__;
        return this.size += this.has(g) ? 0 : 1, F[g] = jA && h === void 0 ? "__lodash_hash_undefined__" : h, this;
      };
      const $A = PA, zA = function(g, h) {
        var F, I, G = g.__data__;
        return ((I = typeof (F = h)) == "string" || I == "number" || I == "symbol" || I == "boolean" ? F !== "__proto__" : F === null) ? G[typeof h == "string" ? "string" : "hash"] : G.map;
      };
      function te(g) {
        var h = -1, F = g == null ? 0 : g.length;
        for (this.clear(); ++h < F; ) {
          var I = g[h];
          this.set(I[0], I[1]);
        }
      }
      te.prototype.clear = function() {
        this.size = 0, this.__data__ = { hash: new $A(), map: new (DA || H)(), string: new $A() };
      }, te.prototype.delete = function(g) {
        var h = zA(this, g).delete(g);
        return this.size -= h ? 1 : 0, h;
      }, te.prototype.get = function(g) {
        return zA(this, g).get(g);
      }, te.prototype.has = function(g) {
        return zA(this, g).has(g);
      }, te.prototype.set = function(g, h) {
        var F = zA(this, g), I = F.size;
        return F.set(g, h), this.size += F.size == I ? 0 : 1, this;
      };
      const ye = te;
      function fe(g) {
        var h = this.__data__ = new H(g);
        this.size = h.size;
      }
      fe.prototype.clear = function() {
        this.__data__ = new H(), this.size = 0;
      }, fe.prototype.delete = function(g) {
        var h = this.__data__, F = h.delete(g);
        return this.size = h.size, F;
      }, fe.prototype.get = function(g) {
        return this.__data__.get(g);
      }, fe.prototype.has = function(g) {
        return this.__data__.has(g);
      }, fe.prototype.set = function(g, h) {
        var F = this.__data__;
        if (F instanceof H) {
          var I = F.__data__;
          if (!DA || I.length < 199)
            return I.push([g, h]), this.size = ++F.size, this;
          F = this.__data__ = new ye(I);
        }
        return F.set(g, h), this.size = F.size, this;
      };
      const he = fe, le = function() {
        try {
          var g = SA(Object, "defineProperty");
          return g({}, "", {}), g;
        } catch {
        }
      }(), $ = function(g, h, F) {
        h == "__proto__" && le ? le(g, h, { configurable: !0, enumerable: !0, value: F, writable: !0 }) : g[h] = F;
      }, FA = function(g, h, F) {
        (F !== void 0 && !D(g[h], F) || F === void 0 && !(h in g)) && $(g, h, F);
      }, oe = function(g, h, F) {
        for (var I = -1, G = Object(g), AA = F(g), iA = AA.length; iA--; ) {
          var hA = AA[++I];
          if (h(G[hA], hA, G) === !1)
            break;
        }
        return g;
      };
      var RA = A && !A.nodeType && A, ZA = RA && !0 && e && !e.nodeType && e, rA = ZA && ZA.exports === RA ? X.Buffer : void 0, BA = rA ? rA.allocUnsafe : void 0;
      const xA = X.Uint8Array, GA = function(g, h) {
        var F, I, G = h ? (F = g.buffer, I = new F.constructor(F.byteLength), new xA(I).set(new xA(F)), I) : g.buffer;
        return new g.constructor(G, g.byteOffset, g.length);
      };
      var WA = Object.create;
      const kA = /* @__PURE__ */ function() {
        function g() {
        }
        return function(h) {
          if (!mA(h))
            return {};
          if (WA)
            return WA(h);
          g.prototype = h;
          var F = new g();
          return g.prototype = void 0, F;
        };
      }(), Le = (Pe = Object.getPrototypeOf, qe = Object, function(g) {
        return Pe(qe(g));
      });
      var Pe, qe, Me = Object.prototype;
      const $e = function(g) {
        var h = g && g.constructor;
        return g === (typeof h == "function" && h.prototype || Me);
      }, De = function(g) {
        return g != null && typeof g == "object";
      }, Ar = function(g) {
        return De(g) && yA(g) == "[object Arguments]";
      };
      var pr = Object.prototype, p = pr.hasOwnProperty, E = pr.propertyIsEnumerable;
      const y = Ar(/* @__PURE__ */ function() {
        return arguments;
      }()) ? Ar : function(g) {
        return De(g) && p.call(g, "callee") && !E.call(g, "callee");
      }, K = Array.isArray, S = function(g) {
        return typeof g == "number" && g > -1 && g % 1 == 0 && g <= 9007199254740991;
      }, O = function(g) {
        return g != null && S(g.length) && !HA(g);
      };
      var k = A && !A.nodeType && A, z = k && !0 && e && !e.nodeType && e, q = z && z.exports === k ? X.Buffer : void 0;
      const J = (q ? q.isBuffer : void 0) || function() {
        return !1;
      };
      var fA = Function.prototype, U = Object.prototype, M = fA.toString, Y = U.hasOwnProperty, sA = M.call(Object), gA = {};
      gA["[object Float32Array]"] = gA["[object Float64Array]"] = gA["[object Int8Array]"] = gA["[object Int16Array]"] = gA["[object Int32Array]"] = gA["[object Uint8Array]"] = gA["[object Uint8ClampedArray]"] = gA["[object Uint16Array]"] = gA["[object Uint32Array]"] = !0, gA["[object Arguments]"] = gA["[object Array]"] = gA["[object ArrayBuffer]"] = gA["[object Boolean]"] = gA["[object DataView]"] = gA["[object Date]"] = gA["[object Error]"] = gA["[object Function]"] = gA["[object Map]"] = gA["[object Number]"] = gA["[object Object]"] = gA["[object RegExp]"] = gA["[object Set]"] = gA["[object String]"] = gA["[object WeakMap]"] = !1;
      var VA = A && !A.nodeType && A, OA = VA && !0 && e && !e.nodeType && e, _A = OA && OA.exports === VA && j.process, de = function() {
        try {
          return OA && OA.require && OA.require("util").types || _A && _A.binding && _A.binding("util");
        } catch {
        }
      }(), Ae = de && de.isTypedArray;
      const ie = Ae ? /* @__PURE__ */ function(g) {
        return function(h) {
          return g(h);
        };
      }(Ae) : function(g) {
        return De(g) && S(g.length) && !!gA[yA(g)];
      }, He = function(g, h) {
        if ((h !== "constructor" || typeof g[h] != "function") && h != "__proto__")
          return g[h];
      };
      var ar = Object.prototype.hasOwnProperty;
      const _r = function(g, h, F) {
        var I = g[h];
        ar.call(g, h) && D(I, F) && (F !== void 0 || h in g) || $(g, h, F);
      };
      var ve = /^(?:0|[1-9]\d*)$/;
      const uA = function(g, h) {
        var F = typeof g;
        return !!(h = h ?? 9007199254740991) && (F == "number" || F != "symbol" && ve.test(g)) && g > -1 && g % 1 == 0 && g < h;
      };
      var CA = Object.prototype.hasOwnProperty;
      const TA = function(g, h) {
        var F = K(g), I = !F && y(g), G = !F && !I && J(g), AA = !F && !I && !G && ie(g), iA = F || I || G || AA, hA = iA ? function(tA, LA) {
          for (var UA = -1, ee = Array(tA); ++UA < tA; )
            ee[UA] = LA(UA);
          return ee;
        }(g.length, String) : [], wA = hA.length;
        for (var QA in g)
          !h && !CA.call(g, QA) || iA && (QA == "length" || G && (QA == "offset" || QA == "parent") || AA && (QA == "buffer" || QA == "byteLength" || QA == "byteOffset") || uA(QA, wA)) || hA.push(QA);
        return hA;
      };
      var pe = Object.prototype.hasOwnProperty;
      const YA = function(g) {
        if (!mA(g))
          return function(G) {
            var AA = [];
            if (G != null)
              for (var iA in Object(G))
                AA.push(iA);
            return AA;
          }(g);
        var h = $e(g), F = [];
        for (var I in g)
          (I != "constructor" || !h && pe.call(g, I)) && F.push(I);
        return F;
      }, sr = function(g) {
        return O(g) ? TA(g, !0) : YA(g);
      }, Jr = function(g) {
        return function(h, F, I, G) {
          var AA = !I;
          I || (I = {});
          for (var iA = -1, hA = F.length; ++iA < hA; ) {
            var wA = F[iA], QA = G ? G(I[wA], h[wA], wA, I, h) : void 0;
            QA === void 0 && (QA = h[wA]), AA ? $(I, wA, QA) : _r(I, wA, QA);
          }
          return I;
        }(g, sr(g));
      }, MA = function(g, h, F, I, G, AA, iA) {
        var hA, wA = He(g, F), QA = He(h, F), tA = iA.get(QA);
        if (tA)
          FA(g, F, tA);
        else {
          var LA = AA ? AA(wA, QA, F + "", g, h, iA) : void 0, UA = LA === void 0;
          if (UA) {
            var ee = K(QA), qA = !ee && J(QA), XA = !ee && !qA && ie(QA);
            LA = QA, ee || qA || XA ? K(wA) ? LA = wA : De(hA = wA) && O(hA) ? LA = function(Be, Ce) {
              var ae = -1, be = Be.length;
              for (Ce || (Ce = Array(be)); ++ae < be; )
                Ce[ae] = Be[ae];
              return Ce;
            }(wA) : qA ? (UA = !1, LA = function(Be, Ce) {
              if (Ce)
                return Be.slice();
              var ae = Be.length, be = BA ? BA(ae) : new Be.constructor(ae);
              return Be.copy(be), be;
            }(QA, !0)) : XA ? (UA = !1, LA = GA(QA, !0)) : LA = [] : function(Be) {
              if (!De(Be) || yA(Be) != "[object Object]")
                return !1;
              var Ce = Le(Be);
              if (Ce === null)
                return !0;
              var ae = Y.call(Ce, "constructor") && Ce.constructor;
              return typeof ae == "function" && ae instanceof ae && M.call(ae) == sA;
            }(QA) || y(QA) ? (LA = wA, y(wA) ? LA = Jr(wA) : mA(wA) && !HA(wA) || (LA = function(Be) {
              return typeof Be.constructor != "function" || $e(Be) ? {} : kA(Le(Be));
            }(QA))) : UA = !1;
          }
          UA && (iA.set(QA, LA), G(LA, QA, I, AA, iA), iA.delete(QA)), FA(g, F, LA);
        }
      }, Xe = function g(h, F, I, G, AA) {
        h !== F && oe(F, function(iA, hA) {
          if (AA || (AA = new he()), mA(iA))
            MA(h, F, hA, I, g, G, AA);
          else {
            var wA = G ? G(He(h, hA), iA, hA + "", h, F, AA) : void 0;
            wA === void 0 && (wA = iA), FA(h, hA, wA);
          }
        }, sr);
      }, gr = function(g) {
        return g;
      }, Wr = function(g, h, F) {
        switch (F.length) {
          case 0:
            return g.call(h);
          case 1:
            return g.call(h, F[0]);
          case 2:
            return g.call(h, F[0], F[1]);
          case 3:
            return g.call(h, F[0], F[1], F[2]);
        }
        return g.apply(h, F);
      };
      var Cr = Math.max;
      const Se = le ? function(g, h) {
        return le(g, "toString", { configurable: !0, enumerable: !1, value: (F = h, function() {
          return F;
        }), writable: !0 });
        var F;
      } : gr;
      var Rn = Date.now;
      const Yr = /* @__PURE__ */ function(g) {
        var h = 0, F = 0;
        return function() {
          var I = Rn(), G = 16 - (I - F);
          if (F = I, G > 0) {
            if (++h >= 800)
              return arguments[0];
          } else
            h = 0;
          return g.apply(void 0, arguments);
        };
      }(Se), ut = function(g, h) {
        return Yr(function(F, I, G) {
          return I = Cr(I === void 0 ? F.length - 1 : I, 0), function() {
            for (var AA = arguments, iA = -1, hA = Cr(AA.length - I, 0), wA = Array(hA); ++iA < hA; )
              wA[iA] = AA[I + iA];
            iA = -1;
            for (var QA = Array(I + 1); ++iA < I; )
              QA[iA] = AA[iA];
            return QA[I] = G(wA), Wr(F, this, QA);
          };
        }(g, h, gr), g + "");
      }, Tt = (Te = function(g, h, F, I) {
        Xe(g, h, F, I);
      }, ut(function(g, h) {
        var F = -1, I = h.length, G = I > 1 ? h[I - 1] : void 0, AA = I > 2 ? h[2] : void 0;
        for (G = Te.length > 3 && typeof G == "function" ? (I--, G) : void 0, AA && function(hA, wA, QA) {
          if (!mA(QA))
            return !1;
          var tA = typeof wA;
          return !!(tA == "number" ? O(QA) && uA(wA, QA.length) : tA == "string" && wA in QA) && D(QA[wA], hA);
        }(h[0], h[1], AA) && (G = I < 3 ? void 0 : G, I = 1), g = Object(g); ++F < I; ) {
          var iA = h[F];
          iA && Te(g, iA, F, G);
        }
        return g;
      }));
      var Te;
      s(27);
      var ue = {};
      function Ve() {
        for (var g, h = Object.values(ue).reverse(), F = 0; F < h.length; F += 1) {
          var I = v().useContext(h[F]);
          if (I) {
            g = I;
            break;
          }
        }
        return g;
      }
      const er = ue;
      function Je(g) {
        return function(h) {
          if (Array.isArray(h))
            return u(h);
        }(g) || function(h) {
          if (typeof Symbol < "u" && h[Symbol.iterator] != null || h["@@iterator"] != null)
            return Array.from(h);
        }(g) || B(g) || function() {
          throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }();
      }
      var Ke, We, Rr;
      function Ee(g, h) {
        return h != null && g instanceof h;
      }
      s(427), s(7209), s(9236), s(9745), s(7680), s(3085), s(3777), s(8081), s(5942), s(1239), s(7472), s(8392), s(2235), s(5506), s(3149), s(4637), s(6788), s(3958), s(5469), s(6780), s(3620), s(1592), s(6471), s(9701), s(8904), s(5155), s(9770);
      try {
        Ke = Map;
      } catch {
        Ke = function() {
        };
      }
      try {
        We = Set;
      } catch {
        We = function() {
        };
      }
      try {
        Rr = Promise;
      } catch {
        Rr = function() {
        };
      }
      function ke(g, h, F, I, G) {
        i(h) === "object" && (F = h.depth, I = h.prototype, G = h.includeNonEnumerable, h = h.circular);
        var AA = [], iA = [], hA = !1, wA = typeof Buffer < "u";
        return h === void 0 && (h = !0), F === void 0 && (F = 1 / 0), function QA(tA, LA) {
          if (tA === null)
            return null;
          if (LA === 0)
            return tA;
          var UA, ee;
          if (i(tA) != "object")
            return tA;
          if (Ee(tA, Ke))
            UA = new Ke();
          else if (Ee(tA, We))
            UA = new We();
          else if (Ee(tA, Rr))
            UA = new Rr(function(ur, Mr) {
              tA.then(function(Nr) {
                ur(QA(Nr, LA - 1));
              }, function(Nr) {
                Mr(QA(Nr, LA - 1));
              });
            });
          else if (ke.__isArray(tA))
            UA = [];
          else if (ke.__isRegExp(tA))
            UA = new RegExp(tA.source, Wo(tA)), tA.lastIndex && (UA.lastIndex = tA.lastIndex);
          else if (ke.__isDate(tA))
            UA = new Date(tA.getTime());
          else {
            if (wA && Buffer.isBuffer(tA))
              return Buffer.from ? UA = Buffer.from(tA) : (UA = new Buffer(tA.length), tA.copy(UA)), UA;
            Ee(tA, ArrayBuffer) ? (UA = tA.slice(), hA = !0) : Ee(tA, Float32Array) ? (hA = !0, UA = new Float32Array(tA)) : Ee(tA, Float64Array) ? (hA = !0, UA = new Float64Array(tA)) : Ee(tA, Int8Array) ? (hA = !0, UA = new Int8Array(tA)) : Ee(tA, Int16Array) ? (hA = !0, UA = new Int16Array(tA)) : Ee(tA, Int32Array) ? (hA = !0, UA = new Int32Array(tA)) : Ee(tA, Uint8Array) ? (hA = !0, UA = new Uint8Array(tA)) : Ee(tA, Uint8ClampedArray) ? (hA = !0, UA = new Uint8ClampedArray(tA)) : Ee(tA, Uint16Array) ? (hA = !0, UA = new Uint16Array(tA)) : Ee(tA, Uint32Array) ? (hA = !0, UA = new Uint32Array(tA)) : Ee(tA, Blob) ? (hA = !0, UA = tA.slice()) : Ee(tA, Error) ? UA = Object.create(tA) : I === void 0 ? (ee = Object.getPrototypeOf(tA), UA = Object.create(ee)) : (UA = Object.create(I), ee = I);
          }
          if (h && !hA) {
            var qA = AA.indexOf(tA);
            if (qA != -1)
              return iA[qA];
            AA.push(tA), iA.push(UA);
          }
          if (Ee(tA, Ke) && tA.forEach(function(ur, Mr) {
            var Nr = QA(Mr, LA - 1), vr = QA(ur, LA - 1);
            UA.set(Nr, vr);
          }), Ee(tA, We) && tA.forEach(function(ur) {
            var Mr = QA(ur, LA - 1);
            UA.add(Mr);
          }), !hA)
            for (var XA in tA) {
              Object.getOwnPropertyDescriptor(tA, XA) && (UA[XA] = QA(tA[XA], LA - 1));
              try {
                if (Object.getOwnPropertyDescriptor(tA, XA).set === "undefined")
                  continue;
                UA[XA] = QA(tA[XA], LA - 1);
              } catch (ur) {
                if (ur instanceof TypeError || ur instanceof ReferenceError)
                  continue;
              }
            }
          if (Object.getOwnPropertySymbols && !hA) {
            var Be = Object.getOwnPropertySymbols(tA);
            for (XA = 0; XA < Be.length; XA++) {
              var Ce = Be[XA];
              (!(be = Object.getOwnPropertyDescriptor(tA, Ce)) || be.enumerable || G) && (UA[Ce] = QA(tA[Ce], LA - 1), Object.defineProperty(UA, Ce, be));
            }
          }
          if (G && !hA) {
            var ae = Object.getOwnPropertyNames(tA);
            for (XA = 0; XA < ae.length; XA++) {
              var be, cr = ae[XA];
              (be = Object.getOwnPropertyDescriptor(tA, cr)) && be.enumerable || (UA[cr] = QA(tA[cr], LA - 1), Object.defineProperty(UA, cr, be));
            }
          }
          return UA;
        }(g, F);
      }
      function Ir(g) {
        return Object.prototype.toString.call(g);
      }
      function Wo(g) {
        var h = "";
        return g.global && (h += "g"), g.ignoreCase && (h += "i"), g.multiline && (h += "m"), h;
      }
      ke.clonePrototype = function(g) {
        if (g === null)
          return null;
        var h = function() {
        };
        return h.prototype = g, new h();
      }, ke.__objToStr = Ir, ke.__isDate = function(g) {
        return i(g) === "object" && Ir(g) === "[object Date]";
      }, ke.__isArray = function(g) {
        return i(g) === "object" && Ir(g) === "[object Array]";
      }, ke.__isRegExp = function(g) {
        return i(g) === "object" && Ir(g) === "[object RegExp]";
      }, ke.__getRegExpFlags = Wo;
      const _t = ke;
      function Yo(g, h) {
        var F = Object.keys(g);
        if (Object.getOwnPropertySymbols) {
          var I = Object.getOwnPropertySymbols(g);
          h && (I = I.filter(function(G) {
            return Object.getOwnPropertyDescriptor(g, G).enumerable;
          })), F.push.apply(F, I);
        }
        return F;
      }
      function Mn(g) {
        for (var h = 1; h < arguments.length; h++) {
          var F = arguments[h] != null ? arguments[h] : {};
          h % 2 ? Yo(Object(F), !0).forEach(function(I) {
            c(g, I, F[I]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(g, Object.getOwnPropertyDescriptors(F)) : Yo(Object(F)).forEach(function(I) {
            Object.defineProperty(g, I, Object.getOwnPropertyDescriptor(F, I));
          });
        }
        return g;
      }
      var wr = "/";
      function Zr(g) {
        return g.endsWith(wr) && (g = g.slice(0, -1)), g.split(wr);
      }
      function Bs(g, h) {
        typeof g == "string" && (g = Zr(g));
        for (var F = {}, I = F, G = 0; G < g.length; G++) {
          var AA = g[G];
          I[AA] = G === g.length - 1 ? h : {}, I = I[AA];
        }
        return F;
      }
      function Zo(g, h) {
        return g && Array.isArray(g) ? g.filter(function(F) {
          return Zr(F)[0] === h;
        }) : [];
      }
      function zo(g, h) {
        typeof h == "string" && (h = Zr(h)), h = h.slice(1);
        for (var F, I, G = g, AA = 0; AA < h.length - 1; AA++) {
          var iA = h[AA];
          if (I = i(F = G[iA]), F == null || I !== "object")
            return g;
          G = G[iA];
        }
        return delete G[h[h.length - 1]], g;
      }
      function fs(g, h, F) {
        for (var I = Array.isArray(h) ? h : Zr(h), G = g, AA = 0; AA < I.length; AA++)
          AA === I.length - 1 ? G[I[AA]] = F : G[I[AA]] || (G[I[AA]] = {}), G = G[I[AA]];
        return g;
      }
      function ls(g) {
        return Nn.apply(this, arguments);
      }
      function Nn() {
        return Nn = a(Q().mark(function g(h) {
          var F, I, G, AA, iA, hA, wA, QA, tA, LA, UA, ee;
          return Q().wrap(function(qA) {
            for (; ; )
              switch (qA.prev = qA.next) {
                case 0:
                  if (F = this) {
                    qA.next = 3;
                    break;
                  }
                  throw new Error("strange!! there is no store in reducer, please issue it.");
                case 3:
                  if (h.inner !== F.inner) {
                    qA.next = 33;
                    break;
                  }
                  qA.t0 = h.type, qA.next = qA.t0 === "add" ? 7 : qA.t0 === "modify" ? 20 : 32;
                  break;
                case 7:
                  return I = Zr(h.name), G = Bs(I, h.initdate), F.runtime_state = Mn(Mn({}, F.runtime_state), G), qA.next = 12, F.offlineInstance.keys();
                case 12:
                  if (AA = qA.sent, !F.offline || F.offlineExcludes.includes(I[0]) || AA.includes(I[0])) {
                    qA.next = 19;
                    break;
                  }
                  return iA = Zo(F.offlineExcludes, I[0]), hA = _t(G[I[0]], !0), iA.length > 0 && iA.forEach(function(XA) {
                    hA = zo(hA, XA);
                  }), qA.next = 19, F.offlineInstance.setItem(I[0], hA);
                case 19:
                  return qA.abrupt("return", h.initdate);
                case 20:
                  if (wA = Zr(h.name), QA = fs(F.runtime_state, wA, h.data), F.runtime_state = Mn({}, QA), h.cancelUpdate || (tA = Object.values(F.REFRESH_CACHE), LA = "".concat(wA.join(wr)).concat(wr), tA.forEach(function(XA) {
                    XA && XA._s.startsWith(LA) && XA.set(b());
                    for (var Be = Je(wA); Be.length > 0; )
                      XA && Be.join(wr) === XA._s && XA.set(b()), Be.pop();
                  })), !F.offline) {
                    qA.next = 31;
                    break;
                  }
                  if (!F.offline || F.offlineExcludes.includes(wA[0])) {
                    qA.next = 31;
                    break;
                  }
                  return UA = _t(QA[wA[0]], !0), (ee = Zo(F.offlineExcludes, wA[0])).length > 0 && ee.forEach(function(XA) {
                    UA = zo(UA, XA);
                  }), qA.next = 31, F.offlineInstance.setItem(wA[0], UA);
                case 31:
                  return qA.abrupt("return", h.data);
                case 32:
                  throw new Error("Unhandled action type: ".concat(h.type));
                case 33:
                case "end":
                  return qA.stop();
              }
          }, g, this);
        })), Nn.apply(this, arguments);
      }
      function Gn() {
        return Gn = a(Q().mark(function g(h) {
          var F;
          return Q().wrap(function(I) {
            for (; ; )
              switch (I.prev = I.next) {
                case 0:
                  if (!h.loopRunning) {
                    I.next = 2;
                    break;
                  }
                  return I.abrupt("return");
                case 2:
                  h.loopRunning = !0;
                case 3:
                  if (!(h.dispatch_queue.length > 0)) {
                    I.next = 10;
                    break;
                  }
                  if (!(F = h.dispatch_queue.shift())) {
                    I.next = 8;
                    break;
                  }
                  return I.next = 8, h.REDUCER(F);
                case 8:
                  I.next = 3;
                  break;
                case 10:
                  h.loopRunning = !1;
                case 11:
                case "end":
                  return I.stop();
              }
          }, g);
        })), Gn.apply(this, arguments);
      }
      function gs(g) {
        var h = this;
        if (!h)
          throw new Error("strange!! there is no store in dispatch of utils, please issue it.");
        if (!g)
          throw new Error("Actions must be plain objects.");
        if (g.type === void 0)
          throw new Error('Actions may not have an undefined "type" property.');
        return h.dispatch_queue.push(g), h.loopRunning || function(F) {
          Gn.apply(this, arguments);
        }(h), new Promise(function(F) {
          var I = setInterval(function() {
            h.loopRunning || (clearInterval(I), F(g));
          }, 0);
        });
      }
      function ws(g) {
        return Pn.apply(this, arguments);
      }
      function Pn() {
        return Pn = a(Q().mark(function g(h) {
          var F, I, G, AA;
          return Q().wrap(function(iA) {
            for (; ; )
              switch (iA.prev = iA.next) {
                case 0:
                  if (F = this, !h || i(h) != "object" || Array.isArray(h)) {
                    iA.next = 13;
                    break;
                  }
                  if (!((I = Object.keys(h)).length > 0)) {
                    iA.next = 13;
                    break;
                  }
                  G = 0;
                case 5:
                  if (!(G < I.length)) {
                    iA.next = 13;
                    break;
                  }
                  if (AA = I[G], F.runtime_state.hasOwnProperty(AA)) {
                    iA.next = 10;
                    break;
                  }
                  return iA.next = 10, F.dispatch({ type: "add", name: AA, initdate: h[AA], inner: F.inner });
                case 10:
                  G++, iA.next = 5;
                  break;
                case 13:
                case "end":
                  return iA.stop();
              }
          }, g, this);
        })), Pn.apply(this, arguments);
      }
      function hs(g, h, F) {
        return Vn.apply(this, arguments);
      }
      function Vn() {
        return Vn = a(Q().mark(function g(h, F, I) {
          return Q().wrap(function(G) {
            for (; ; )
              switch (G.prev = G.next) {
                case 0:
                  if (typeof h == "function") {
                    G.next = 2;
                    break;
                  }
                  throw new Error("Expected the reducer to be a function.");
                case 2:
                  if (!I.REDUCER && (I.REDUCER = h.bind(I)), !I.dispatch && (I.dispatch = gs.bind(I)), I.loopRunning = !1, F === void 0) {
                    G.next = 8;
                    break;
                  }
                  return G.next = 8, ws.call(I, F);
                case 8:
                  return G.abrupt("return", [I.runtime_state, I.dispatch]);
                case 9:
                case "end":
                  return G.stop();
              }
          }, g);
        })), Vn.apply(this, arguments);
      }
      s(8629), s(286);
      var Qs = ["models", "renderBefore", "component"];
      function qo(g, h) {
        return kn.apply(this, arguments);
      }
      function kn() {
        return kn = a(Q().mark(function g(h, F) {
          var I;
          return Q().wrap(function(G) {
            for (; ; )
              switch (G.prev = G.next) {
                case 0:
                  if (Object.prototype.toString.call(h) === "[object Object]") {
                    G.next = 2;
                    break;
                  }
                  throw new Error("your model must be an object");
                case 2:
                  if (h.hasOwnProperty("name")) {
                    G.next = 4;
                    break;
                  }
                  throw new Error("please name your model !!!!");
                case 4:
                  if (typeof h.name == "string") {
                    G.next = 6;
                    break;
                  }
                  throw new Error("please make sure your model name is a string");
                case 6:
                  if (h.name.length !== 0) {
                    G.next = 8;
                    break;
                  }
                  throw new Error("name can not be empty");
                case 8:
                  if (F) {
                    G.next = 10;
                    break;
                  }
                  throw new Error("strange!! there is no store, please issue it.");
                case 10:
                  if (F.MODELS[h.name] || (F.MODELS[h.name] = h), F.runtime_state.hasOwnProperty(h.name)) {
                    G.next = 17;
                    break;
                  }
                  return I = {}, h.hasOwnProperty("init") && (I = h.init), typeof h.init == "function" && (I = h.init()), G.next = 17, F.dispatch({ type: "add", name: h.name, initdate: I, inner: F.inner });
                case 17:
                case "end":
                  return G.stop();
              }
          }, g);
        })), kn.apply(this, arguments);
      }
      const ds = function(g) {
        var h = Ve();
        if (!h)
          throw new Error("strange!! there is no store in dynamic, please issue it.");
        var F = f(v().useState({ loaded: !1 }), 2), I = F[0], G = F[1], AA = g.models, iA = g.renderBefore, hA = g.component, wA = w(g, Qs), QA = v().lazy(hA);
        return v().useEffect(function() {
          iA == null || iA();
          var tA = typeof AA == "function" ? [AA()] : Array.isArray(AA) ? AA.map(function(LA) {
            return Promise.resolve(LA);
          }) : [];
          Promise.all(tA).then(function(LA) {
            LA.forEach(function(UA) {
              var ee = UA.default || UA;
              (Array.isArray(ee) ? ee : [ee]).forEach(function(qA) {
                return qo(qA, h);
              });
            }), G({ loaded: !0 });
          });
        }, []), I.loaded ? v().createElement(v().Suspense, { fallback: v().createElement("div", null, "Loading...") }, v().createElement(QA, wA)) : null;
      };
      var ps = ["uniqueKey", "nested", "models", "offlineConfig", "noCached", "children"];
      function $o(g, h) {
        var F = Object.keys(g);
        if (Object.getOwnPropertySymbols) {
          var I = Object.getOwnPropertySymbols(g);
          h && (I = I.filter(function(G) {
            return Object.getOwnPropertyDescriptor(g, G).enumerable;
          })), F.push.apply(F, I);
        }
        return F;
      }
      function Cs(g) {
        for (var h = 1; h < arguments.length; h++) {
          var F = arguments[h] != null ? arguments[h] : {};
          h % 2 ? $o(Object(F), !0).forEach(function(I) {
            c(g, I, F[I]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(g, Object.getOwnPropertyDescriptors(F)) : $o(Object(F)).forEach(function(I) {
            Object.defineProperty(g, I, Object.getOwnPropertyDescriptor(F, I));
          });
        }
        return g;
      }
      function vs(g, h, F) {
        var I = v().createContext(), G = window["dva_react_hook_store_".concat(g)];
        return G || (G = function(AA) {
          if (!window[AA]) {
            var iA = Symbol();
            window[AA] = { offline: !1, offlineInstance: void 0, offlineExcludes: [], dispatch: void 0, inner: iA, MODELS: {}, REFRESH_CACHE: {}, REDUCER: void 0, isDispatching: { dispatching: !1, name: null }, runtime_state: {}, dispatch_queue: [], loopRunning: !1 };
          }
          return window[AA];
        }("dva_react_hook_store_".concat(g))), F === !0 && (er["".concat(g, "_").concat(h)] = I), [G, I];
      }
      function Rt(g, h) {
        (function(G) {
          if (!G)
            throw new Error("strange!! there is no store in utils, please issue it.");
        })(h), function(G) {
          if (typeof G != "string")
            throw new Error("name must be a string");
        }(g);
        var F = g.split(wr), I = function(G, AA) {
          var iA = function(hA, wA) {
            if (!hA || !hA.length)
              throw new Error("Property names array cannot be empty.");
            var QA = hA.reduce(function(tA, LA, UA) {
              var ee = (UA === 0 ? wA.runtime_state : tA)[LA];
              if (hA.length > 1 && UA < hA.length - 1 && Object.prototype.toString.call(ee) !== "[object Object]")
                throw new Error("".concat(LA, " is not an object, so the property['").concat(hA[UA + 1], "'] cannot be reached. Please check your code."));
              return ee;
            }, {});
            return _t(QA, !0);
          }(G, AA);
          return iA;
        }(F, h);
        return [I, Us(F, h, I)];
      }
      function Us(g, h, F) {
        return function() {
          var I = a(Q().mark(function G(AA) {
            var iA, hA, wA, QA, tA = arguments;
            return Q().wrap(function(LA) {
              for (; ; )
                switch (LA.prev = LA.next) {
                  case 0:
                    return iA = tA.length > 1 && tA[1] !== void 0 ? tA[1] : {}, hA = iA.cancelUpdate, wA = iA.callbacks, LA.next = 3, h.dispatch({ type: "modify", name: g.join(wr), data: AA, inner: h.inner, cancelUpdate: hA });
                  case 3:
                    return QA = LA.sent, wA && h.MODELS[g[0]] && Ai(h.MODELS[g[0]].callbacks, wA, { name: g.join(wr), value: { pre: F, current: AA } }, h), LA.abrupt("return", QA);
                  case 6:
                  case "end":
                    return LA.stop();
                }
            }, G);
          }));
          return function(G) {
            return I.apply(this, arguments);
          };
        }();
      }
      function Ai(g, h, F, I) {
        (function(AA) {
          Object.prototype.toString.call(AA) !== "[object Object]" && console.error("the callbacks of model must be an Object type");
        })(g);
        var G = function(AA) {
          return Rt(AA, I);
        };
        typeof h == "string" ? ei(g, h, F, G) : Array.isArray(h) && h.forEach(function(AA) {
          return ei(g, AA, F, G);
        });
      }
      function ei(g, h, F, I) {
        typeof g[h] == "function" ? g[h]({ info: F, select: I }) : console.error("Callback ".concat(h, " is not a function."));
      }
      function jn() {
        return jn = Object.assign ? Object.assign.bind() : function(g) {
          for (var h = 1; h < arguments.length; h++) {
            var F = arguments[h];
            for (var I in F)
              Object.prototype.hasOwnProperty.call(F, I) && (g[I] = F[I]);
          }
          return g;
        }, jn.apply(this, arguments);
      }
      function ri(g, h, F) {
        var I = F || Ve();
        if (!I)
          throw new Error("strange!! there is no store in useModel, please issue it.");
        if (typeof g != "string")
          throw new Error("useModel's argument must be a string");
        var G = v().useState(b())[1];
        return v().useEffect(function() {
          var AA = b();
          return !h && (I.REFRESH_CACHE[AA] = { _s: g, set: G }), function() {
            !h && delete I.REFRESH_CACHE[AA];
          };
        }, [g]), Rt(g, I);
      }
      s(9399);
      var Fs = ["type"];
      function ti(g, h) {
        var F = Object.keys(g);
        if (Object.getOwnPropertySymbols) {
          var I = Object.getOwnPropertySymbols(g);
          h && (I = I.filter(function(G) {
            return Object.getOwnPropertyDescriptor(g, G).enumerable;
          })), F.push.apply(F, I);
        }
        return F;
      }
      function Mt(g) {
        for (var h = 1; h < arguments.length; h++) {
          var F = arguments[h] != null ? arguments[h] : {};
          h % 2 ? ti(Object(F), !0).forEach(function(I) {
            c(g, I, F[I]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(g, Object.getOwnPropertyDescriptors(F)) : ti(Object(F)).forEach(function(I) {
            Object.defineProperty(g, I, Object.getOwnPropertyDescriptor(F, I));
          });
        }
        return g;
      }
      function Xn(g) {
        if (Object.prototype.toString.call(g) !== "[object Object]")
          throw new Error("action in useDispatch must be an Object");
        if (!g.hasOwnProperty("type"))
          throw new Error('action in useDispatch must have a property named "type"');
        if (typeof g.type != "string")
          throw new Error("your must be a string");
        if (g.type.indexOf(wr) === -1)
          throw new Error("you must do some effects in your type");
        var h = g.store || Ve();
        if (!h)
          throw new Error("strange!! there is no store in useDispatch, please issue it.");
        g.store = h;
        var F = g.type, I = w(g, Fs);
        if ((F = F.split(wr))[0].length === 0)
          throw new Error("can not resolve the empty model name");
        var G = h.MODELS[F[0]];
        if (!G)
          throw new Error("can not find the Model named ".concat(F[0]));
        if (!G.hasOwnProperty("effects"))
          throw new Error("can not find the effects in the Model ".concat(F[0]));
        var AA = G.effects;
        if (Object.prototype.toString.call(AA) !== "[object Object]")
          throw new Error("effects must be an Object");
        var iA = AA[F[1]];
        if (typeof iA != "function")
          throw new Error("the effect named ".concat(F[1], " must be a function"));
        var hA = G.callbacks;
        return function() {
          for (var wA, QA = _t(h.runtime_state[F[0]], !0), tA = arguments.length, LA = new Array(tA), UA = 0; UA < tA; UA++)
            LA[UA] = arguments[UA];
          return iA.apply(void 0, LA.concat([Mt(Mt({}, I), {}, { state: QA, setState: (wA = a(Q().mark(function ee(qA) {
            var XA, Be, Ce, ae, be = arguments;
            return Q().wrap(function(cr) {
              for (; ; )
                switch (cr.prev = cr.next) {
                  case 0:
                    return XA = be.length > 1 && be[1] !== void 0 ? be[1] : {}, Be = XA.cancelUpdate, Ce = XA.callbacks, cr.next = 3, h.dispatch({ type: "modify", name: F[0], inner: h.inner, data: qA, cancelUpdate: Be });
                  case 3:
                    Ce && (ae = QA, Ai(hA, Ce, { name: F[0], value: ae }, h));
                  case 4:
                  case "end":
                    return cr.stop();
                }
            }, ee);
          })), function(ee) {
            return wA.apply(this, arguments);
          }), select: function(ee) {
            return Rt(ee, h);
          }, getDispatch: function(ee) {
            return Xn(Mt(Mt({}, ee), {}, { store: h }));
          } })]));
        };
      }
      const ys = function(g, h) {
        return function(F) {
          return function(I) {
            var G, AA = f(typeof g == "string" && g.length !== 0 ? ri(g) : [{ value: null }, null], 2), iA = AA[0].value, hA = AA[1], wA = typeof h.name == "string" && h.name.length !== 0 ? Xn(h.action) : null;
            return v().createElement(F, jn({}, (c(G = {}, hA ? "".concat(g, "State") : "UselessState".concat(b()), iA), c(G, hA ? "set".concat(g) : "UselessSet".concat(b()), hA), c(G, wA ? "".concat(h.name) : "UselessDispatch".concat(b()), wA), G), I));
          };
        };
      };
      function Es(g, h, F) {
        var I = Ve();
        if (!I)
          throw new Error("strange!! there is no store in useAdd, please issue it.");
        if (typeof g != "string")
          throw new Error("name must be a string");
        if (g.length === 0)
          throw new Error("name can not be empty");
        var G = function() {
          var iA = Ve();
          if (!iA)
            throw new Error("strange!! there is no store in useDispatcher, please issue it.");
          if (typeof iA.dispatch != "function")
            throw new Error("make sure you are in a Provider");
          return iA.dispatch;
        }();
        if (I.runtime_state === void 0 || G === void 0)
          throw new Error("useAdd must be used within a Provider");
        I.runtime_state.hasOwnProperty(g) && console.warn("you have already added the state name -- ".concat(g, "  before !"));
        var AA = h;
        typeof h == "function" && (AA = h()), v().useEffect(function() {
          G({ type: "add", name: g, initdate: AA, inner: I.inner });
        }, F ? [] : void 0);
      }
      const ms = function(g) {
        var h = g.uniqueKey, F = g.nested, I = F === void 0 || F, G = g.models, AA = g.offlineConfig, iA = AA === void 0 ? {} : AA, hA = g.noCached, wA = g.children, QA = w(g, ps), tA = f(v().useState({ com: null, store: null }), 2), LA = tA[0], UA = tA[1], ee = v().useRef([]);
        return v().useEffect(function() {
          var qA = b(), XA = h && h.toString() || "default", Be = "".concat(XA, "_").concat(qA);
          ee.current.push(Be);
          var Ce = f(vs(XA, qA, I), 2), ae = Ce[0], be = Ce[1];
          ae.offline = iA.offline === !0, ae.offlineExcludes = iA.excludes || [];
          var cr = iA.customizer;
          ae.offlineInstance = m.createInstance({ name: XA });
          var ur = function() {
            var vr = a(Q().mark(function Bt() {
              var Ye, zr;
              return Q().wrap(function(Br) {
                for (; ; )
                  switch (Br.prev = Br.next) {
                    case 0:
                      return Br.next = 2, hs(ls, Cs({}, QA), ae);
                    case 2:
                      if (!Array.isArray(G)) {
                        Br.next = 11;
                        break;
                      }
                      Ye = 0;
                    case 4:
                      if (!(Ye < G.length)) {
                        Br.next = 11;
                        break;
                      }
                      return zr = G[Ye], Br.next = 8, qo(zr, ae);
                    case 8:
                      Ye++, Br.next = 4;
                      break;
                    case 11:
                    case "end":
                      return Br.stop();
                  }
              }, Bt);
            }));
            return function() {
              return vr.apply(this, arguments);
            };
          }(), Mr = function() {
            var vr = a(Q().mark(function Bt() {
              return Q().wrap(function(Ye) {
                for (; ; )
                  switch (Ye.prev = Ye.next) {
                    case 0:
                      return Ye.next = 2, ur();
                    case 2:
                      ae.offlineInstance.iterate(function(zr, Br) {
                        var Is = Tt(ae.runtime_state[Br] || {}, zr, cr);
                        ae.runtime_state[Br] = Is;
                      }).then(function() {
                        UA({ com: be.Provider, store: ae });
                      }).catch(function(zr) {
                        console.error("recover from offline database failed:".concat(zr));
                      });
                    case 3:
                    case "end":
                      return Ye.stop();
                  }
              }, Bt);
            }));
            return function() {
              return vr.apply(this, arguments);
            };
          }(), Nr = function() {
            var vr = a(Q().mark(function Bt() {
              return Q().wrap(function(Ye) {
                for (; ; )
                  switch (Ye.prev = Ye.next) {
                    case 0:
                      return Ye.next = 2, ur();
                    case 2:
                      UA({ com: be.Provider, store: ae });
                    case 3:
                    case "end":
                      return Ye.stop();
                  }
              }, Bt);
            }));
            return function() {
              return vr.apply(this, arguments);
            };
          }();
          return iA.autoRecover === !0 ? Mr() : Nr(), function() {
            ee.current.forEach(function(vr) {
              delete er[vr];
            }), hA === !0 && delete window["dva_react_hook_store_".concat(XA)], m.dropInstance({ name: h });
          };
        }, [h]), LA.com && console.log("Provider for ".concat(h || "default", " is rendering")), !!LA.com && v().createElement(LA.com, { value: LA.store }, wA);
      };
    })(), l;
  })());
})(wn, wn.exports);
var se = wn.exports;
const Os = /* @__PURE__ */ xs(se);
function Ds(e) {
  const { children: A, scale: t } = e, r = In(), o = Hs(null), s = Xr(`easy-drag-drop-root-${yr()}`)[0];
  return nr(() => {
    const l = se.get("dragModel/root", r)[1];
    l(s);
    function i() {
      const n = se.get("dragModel/scale", r)[1], a = se.get("dragModel/offset", r)[1];
      if (!o.current)
        return;
      const u = o.current.getBoundingClientRect(), { left: B, top: f } = u;
      a({ x: B, y: f }), typeof t == "object" && n(t), typeof t == "function" && n(t());
    }
    const c = new ResizeObserver(i);
    return c.observe(o.current), window.addEventListener("resize", i), () => {
      c.disconnect(), window.removeEventListener("resize", i);
    };
  }, [s, r, t]), /* @__PURE__ */ un.jsx(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        position: "relative"
      },
      id: s,
      ref: o,
      children: A
    }
  );
}
function ai(e, A) {
  if (!e || !A)
    return !1;
  let [t, r] = e, o = !1;
  for (let s = 0, l = A.length - 1; s < A.length; l = s++) {
    let [i, c] = A[s], [n, a] = A[l];
    c > r != a > r && t < (n - i) * (r - c) / (a - c) + i && (o = !o);
  }
  return o;
}
const aa = (e, A) => [...e.classList].filter((t) => t.startsWith(A))[0], hn = (e) => {
  if (!e)
    return console.error("ref is required"), !1;
  const A = e.current;
  return A instanceof HTMLElement ? A : (console.error("ref.current is not a HTMLElement"), !1);
}, me = {
  STARTDRAG: "STARTDRAG",
  DRAGGING: "DRAGGING",
  DROP: "DROP",
  ONSTART: "ONSTART",
  ONENTER: "ONENTER",
  ONHOVER: "ONHOVER",
  ONLEAVE: "ONLEAVE",
  ONDROP: "ONDROP",
  ONEND: "ONEND"
}, Ts = {
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
      const o = r.key, s = t("dragModel/root")[0], [l, i] = t(
        `dragModel/drags/${o}/previewAdded`
      ), c = t(`dragModel/drags/${o}/state`)[1], n = t("dragModel/drops")[0], u = Object.keys(n).filter(
        (B) => n[B] && document.querySelector(`.${B}`) !== document.querySelector(`.easy-drag-${o}`)
      ).filter((B) => {
        const f = n[B].acceptKeys || [];
        return f.includes("*") ? !0 : f.includes(o);
      });
      if (r && r.operationType === me.STARTDRAG && !l) {
        const B = document.createElement("img");
        B.classList.add(r.class), B.src = r.src, Object.keys(r.style).forEach((f) => {
          B.style[f] = r.style[f];
        }), document.querySelector(`#${s}`).appendChild(B), await i(!0), u.forEach((f) => {
          const w = t(`dragModel/drops/${f}/state`)[1];
          w(`${me.ONSTART}+${o}+${yr()}`), c(`${me.ONSTART}+${f}`);
        });
      }
      if (r && r.operationType === me.DRAGGING && l) {
        const B = document.querySelector(`.${r.class}`);
        Object.keys(r.style).forEach((d) => {
          B.style[d] = r.style[d];
        });
        const f = r.x, w = r.y;
        for (let d of u) {
          const Q = n[d], C = ai([f, w], Q.polygon), [v, m] = t(
            `dragModel/drops/${d}/state`
          );
          C ? v.includes(me.ONSTART) ? (m(`${me.ONENTER}+${o}+${yr()}`), c(`${me.ONENTER}+${d}`)) : (m(`${me.ONHOVER}+${o}+${yr()}`), c(`${me.ONHOVER}+${yr()}+${d}`)) : v.includes(me.ONHOVER) && (m(`${me.ONLEAVE}+${o}+${yr()}`), c(`${me.ONLEAVE}+${d}`));
        }
      }
      if (r && r.operationType === me.DROP) {
        let B = document.querySelector(`.${r.class}`);
        if (!B) {
          let d = 0;
          for (; !B && !(d > 10); )
            d++, B = document.querySelector(`.${r.class}`), await new Promise((Q) => setTimeout(Q, 100));
        }
        B == null || B.remove(), await i(!1);
        const f = r.x, w = r.y;
        for (let d of u) {
          const Q = n[d], C = ai([f, w], Q.polygon), v = t(`dragModel/drops/${d}/state`)[1];
          C ? (v(`${me.ONDROP}+${o}+${yr()}`), c(`${me.ONDROP}+${d}`)) : (v(`${me.ONEND}+${o}+${yr()}`), c(`${me.ONEND}+${d}`));
        }
      }
    }
  }
}, wo = {}, _s = "drag_drop_store", In = () => {
  let e;
  const A = Object.values(wo);
  for (let t = 0; t < A.length; t += 1) {
    const r = ni(A[t]) ? ni(A[t])() : null;
    if (r) {
      e = r;
      break;
    }
  }
  return e;
};
function Bg(e) {
  const { uniqueKey: A = _s, scale: t, children: r } = e, [o, s] = Xr(null);
  return nr(() => {
    const l = bs();
    return wo[A] = l, s(l.Provider), () => {
      delete wo[A];
    };
  }, [A]), /* @__PURE__ */ un.jsx(
    Os,
    {
      noCached: !0,
      nested: !1,
      uniqueKey: A,
      models: [Ts],
      children: o && /* @__PURE__ */ un.jsx(
        o,
        {
          value: () => window[`dva_react_hook_store_${A}`],
          children: /* @__PURE__ */ un.jsx(Ds, { scale: t, children: r })
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
var ho = function(e, A) {
  return ho = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var o in r)
      Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
  }, ho(e, A);
};
function lr(e, A) {
  if (typeof A != "function" && A !== null)
    throw new TypeError("Class extends value " + String(A) + " is not a constructor or null");
  ho(e, A);
  function t() {
    this.constructor = e;
  }
  e.prototype = A === null ? Object.create(A) : (t.prototype = A.prototype, new t());
}
var Qo = function() {
  return Qo = Object.assign || function(A) {
    for (var t, r = 1, o = arguments.length; r < o; r++) {
      t = arguments[r];
      for (var s in t)
        Object.prototype.hasOwnProperty.call(t, s) && (A[s] = t[s]);
    }
    return A;
  }, Qo.apply(this, arguments);
};
function je(e, A, t, r) {
  function o(s) {
    return s instanceof t ? s : new t(function(l) {
      l(s);
    });
  }
  return new (t || (t = Promise))(function(s, l) {
    function i(a) {
      try {
        n(r.next(a));
      } catch (u) {
        l(u);
      }
    }
    function c(a) {
      try {
        n(r.throw(a));
      } catch (u) {
        l(u);
      }
    }
    function n(a) {
      a.done ? s(a.value) : o(a.value).then(i, c);
    }
    n((r = r.apply(e, A || [])).next());
  });
}
function Ne(e, A) {
  var t = { label: 0, sent: function() {
    if (s[0] & 1)
      throw s[1];
    return s[1];
  }, trys: [], ops: [] }, r, o, s, l;
  return l = { next: i(0), throw: i(1), return: i(2) }, typeof Symbol == "function" && (l[Symbol.iterator] = function() {
    return this;
  }), l;
  function i(n) {
    return function(a) {
      return c([n, a]);
    };
  }
  function c(n) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (r = 1, o && (s = n[0] & 2 ? o.return : n[0] ? o.throw || ((s = o.return) && s.call(o), 0) : o.next) && !(s = s.call(o, n[1])).done)
          return s;
        switch (o = 0, s && (n = [n[0] & 2, s.value]), n[0]) {
          case 0:
          case 1:
            s = n;
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
            if (s = t.trys, !(s = s.length > 0 && s[s.length - 1]) && (n[0] === 6 || n[0] === 2)) {
              t = 0;
              continue;
            }
            if (n[0] === 3 && (!s || n[1] > s[0] && n[1] < s[3])) {
              t.label = n[1];
              break;
            }
            if (n[0] === 6 && t.label < s[1]) {
              t.label = s[1], s = n;
              break;
            }
            if (s && t.label < s[2]) {
              t.label = s[2], t.ops.push(n);
              break;
            }
            s[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        n = A.call(e, t);
      } catch (a) {
        n = [6, a], o = 0;
      } finally {
        r = s = 0;
      }
    if (n[0] & 5)
      throw n[1];
    return { value: n[0] ? n[1] : void 0, done: !0 };
  }
}
function Nt(e, A, t) {
  if (t || arguments.length === 2)
    for (var r = 0, o = A.length, s; r < o; r++)
      (s || !(r in A)) && (s || (s = Array.prototype.slice.call(A, 0, r)), s[r] = A[r]);
  return e.concat(s || A);
}
var mr = (
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
), Hn = function(e, A) {
  return mr.fromClientRect(e, A.getBoundingClientRect());
}, Rs = function(e) {
  var A = e.body, t = e.documentElement;
  if (!A || !t)
    throw new Error("Unable to get document size");
  var r = Math.max(Math.max(A.scrollWidth, t.scrollWidth), Math.max(A.offsetWidth, t.offsetWidth), Math.max(A.clientWidth, t.clientWidth)), o = Math.max(Math.max(A.scrollHeight, t.scrollHeight), Math.max(A.offsetHeight, t.offsetHeight), Math.max(A.clientHeight, t.clientHeight));
  return new mr(0, 0, r, o);
}, bn = function(e) {
  for (var A = [], t = 0, r = e.length; t < r; ) {
    var o = e.charCodeAt(t++);
    if (o >= 55296 && o <= 56319 && t < r) {
      var s = e.charCodeAt(t++);
      (s & 64512) === 56320 ? A.push(((o & 1023) << 10) + (s & 1023) + 65536) : (A.push(o), t--);
    } else
      A.push(o);
  }
  return A;
}, Fe = function() {
  for (var e = [], A = 0; A < arguments.length; A++)
    e[A] = arguments[A];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, e);
  var t = e.length;
  if (!t)
    return "";
  for (var r = [], o = -1, s = ""; ++o < t; ) {
    var l = e[o];
    l <= 65535 ? r.push(l) : (l -= 65536, r.push((l >> 10) + 55296, l % 1024 + 56320)), (o + 1 === t || r.length > 16384) && (s += String.fromCharCode.apply(String, r), r.length = 0);
  }
  return s;
}, si = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ms = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Gt = 0; Gt < si.length; Gt++)
  Ms[si.charCodeAt(Gt)] = Gt;
var ci = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", pt = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Pt = 0; Pt < ci.length; Pt++)
  pt[ci.charCodeAt(Pt)] = Pt;
var Ns = function(e) {
  var A = e.length * 0.75, t = e.length, r, o = 0, s, l, i, c;
  e[e.length - 1] === "=" && (A--, e[e.length - 2] === "=" && A--);
  var n = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A), a = Array.isArray(n) ? n : new Uint8Array(n);
  for (r = 0; r < t; r += 4)
    s = pt[e.charCodeAt(r)], l = pt[e.charCodeAt(r + 1)], i = pt[e.charCodeAt(r + 2)], c = pt[e.charCodeAt(r + 3)], a[o++] = s << 2 | l >> 4, a[o++] = (l & 15) << 4 | i >> 2, a[o++] = (i & 3) << 6 | c & 63;
  return n;
}, Gs = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 2)
    t.push(e[r + 1] << 8 | e[r]);
  return t;
}, Ps = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 4)
    t.push(e[r + 3] << 24 | e[r + 2] << 16 | e[r + 1] << 8 | e[r]);
  return t;
}, kr = 5, Go = 11, Jn = 2, Vs = Go - kr, sa = 65536 >> kr, ks = 1 << kr, Wn = ks - 1, js = 1024 >> kr, Xs = sa + js, Js = Xs, Ws = 32, Ys = Js + Ws, Zs = 65536 >> Go, zs = 1 << Vs, qs = zs - 1, ui = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint16Array(Array.prototype.slice.call(e, A, t));
}, $s = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint32Array(Array.prototype.slice.call(e, A, t));
}, Ac = function(e, A) {
  var t = Ns(e), r = Array.isArray(t) ? Ps(t) : new Uint32Array(t), o = Array.isArray(t) ? Gs(t) : new Uint16Array(t), s = 24, l = ui(o, s / 2, r[4] / 2), i = r[5] === 2 ? ui(o, (s + r[4]) / 2) : $s(r, Math.ceil((s + r[4]) / 4));
  return new ec(r[0], r[1], r[2], r[3], l, i);
}, ec = (
  /** @class */
  function() {
    function e(A, t, r, o, s, l) {
      this.initialValue = A, this.errorValue = t, this.highStart = r, this.highValueIndex = o, this.index = s, this.data = l;
    }
    return e.prototype.get = function(A) {
      var t;
      if (A >= 0) {
        if (A < 55296 || A > 56319 && A <= 65535)
          return t = this.index[A >> kr], t = (t << Jn) + (A & Wn), this.data[t];
        if (A <= 65535)
          return t = this.index[sa + (A - 55296 >> kr)], t = (t << Jn) + (A & Wn), this.data[t];
        if (A < this.highStart)
          return t = Ys - Zs + (A >> Go), t = this.index[t], t += A >> kr & qs, t = this.index[t], t = (t << Jn) + (A & Wn), this.data[t];
        if (A <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, e;
  }()
), Bi = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", rc = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Vt = 0; Vt < Bi.length; Vt++)
  rc[Bi.charCodeAt(Vt)] = Vt;
var tc = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", fi = 50, nc = 1, ca = 2, ua = 3, oc = 4, ic = 5, li = 7, Ba = 8, gi = 9, Lr = 10, po = 11, wi = 12, Co = 13, ac = 14, Ct = 15, vo = 16, kt = 17, wt = 18, sc = 19, hi = 20, Uo = 21, ht = 22, Yn = 23, qr = 24, ze = 25, vt = 26, Ut = 27, $r = 28, cc = 29, Pr = 30, uc = 31, jt = 32, Xt = 33, Fo = 34, yo = 35, Eo = 36, Lt = 37, mo = 38, Bn = 39, fn = 40, Zn = 41, fa = 42, Bc = 43, fc = [9001, 65288], la = "!", JA = "×", Jt = "÷", Io = Ac(tc), Ur = [Pr, Eo], Ho = [nc, ca, ua, ic], ga = [Lr, Ba], Qi = [Ut, vt], lc = Ho.concat(ga), di = [mo, Bn, fn, Fo, yo], gc = [Ct, Co], wc = function(e, A) {
  A === void 0 && (A = "strict");
  var t = [], r = [], o = [];
  return e.forEach(function(s, l) {
    var i = Io.get(s);
    if (i > fi ? (o.push(!0), i -= fi) : o.push(!1), ["normal", "auto", "loose"].indexOf(A) !== -1 && [8208, 8211, 12316, 12448].indexOf(s) !== -1)
      return r.push(l), t.push(vo);
    if (i === oc || i === po) {
      if (l === 0)
        return r.push(l), t.push(Pr);
      var c = t[l - 1];
      return lc.indexOf(c) === -1 ? (r.push(r[l - 1]), t.push(c)) : (r.push(l), t.push(Pr));
    }
    if (r.push(l), i === uc)
      return t.push(A === "strict" ? Uo : Lt);
    if (i === fa || i === cc)
      return t.push(Pr);
    if (i === Bc)
      return s >= 131072 && s <= 196605 || s >= 196608 && s <= 262141 ? t.push(Lt) : t.push(Pr);
    t.push(i);
  }), [r, t, o];
}, zn = function(e, A, t, r) {
  var o = r[t];
  if (Array.isArray(e) ? e.indexOf(o) !== -1 : e === o)
    for (var s = t; s <= r.length; ) {
      s++;
      var l = r[s];
      if (l === A)
        return !0;
      if (l !== Lr)
        break;
    }
  if (o === Lr)
    for (var s = t; s > 0; ) {
      s--;
      var i = r[s];
      if (Array.isArray(e) ? e.indexOf(i) !== -1 : e === i)
        for (var c = t; c <= r.length; ) {
          c++;
          var l = r[c];
          if (l === A)
            return !0;
          if (l !== Lr)
            break;
        }
      if (i !== Lr)
        break;
    }
  return !1;
}, pi = function(e, A) {
  for (var t = e; t >= 0; ) {
    var r = A[t];
    if (r === Lr)
      t--;
    else
      return r;
  }
  return 0;
}, hc = function(e, A, t, r, o) {
  if (t[r] === 0)
    return JA;
  var s = r - 1;
  if (Array.isArray(o) && o[s] === !0)
    return JA;
  var l = s - 1, i = s + 1, c = A[s], n = l >= 0 ? A[l] : 0, a = A[i];
  if (c === ca && a === ua)
    return JA;
  if (Ho.indexOf(c) !== -1)
    return la;
  if (Ho.indexOf(a) !== -1 || ga.indexOf(a) !== -1)
    return JA;
  if (pi(s, A) === Ba)
    return Jt;
  if (Io.get(e[s]) === po || (c === jt || c === Xt) && Io.get(e[i]) === po || c === li || a === li || c === gi || [Lr, Co, Ct].indexOf(c) === -1 && a === gi || [kt, wt, sc, qr, $r].indexOf(a) !== -1 || pi(s, A) === ht || zn(Yn, ht, s, A) || zn([kt, wt], Uo, s, A) || zn(wi, wi, s, A))
    return JA;
  if (c === Lr)
    return Jt;
  if (c === Yn || a === Yn)
    return JA;
  if (a === vo || c === vo)
    return Jt;
  if ([Co, Ct, Uo].indexOf(a) !== -1 || c === ac || n === Eo && gc.indexOf(c) !== -1 || c === $r && a === Eo || a === hi || Ur.indexOf(a) !== -1 && c === ze || Ur.indexOf(c) !== -1 && a === ze || c === Ut && [Lt, jt, Xt].indexOf(a) !== -1 || [Lt, jt, Xt].indexOf(c) !== -1 && a === vt || Ur.indexOf(c) !== -1 && Qi.indexOf(a) !== -1 || Qi.indexOf(c) !== -1 && Ur.indexOf(a) !== -1 || // (PR | PO) × ( OP | HY )? NU
  [Ut, vt].indexOf(c) !== -1 && (a === ze || [ht, Ct].indexOf(a) !== -1 && A[i + 1] === ze) || // ( OP | HY ) × NU
  [ht, Ct].indexOf(c) !== -1 && a === ze || // NU ×	(NU | SY | IS)
  c === ze && [ze, $r, qr].indexOf(a) !== -1)
    return JA;
  if ([ze, $r, qr, kt, wt].indexOf(a) !== -1)
    for (var u = s; u >= 0; ) {
      var B = A[u];
      if (B === ze)
        return JA;
      if ([$r, qr].indexOf(B) !== -1)
        u--;
      else
        break;
    }
  if ([Ut, vt].indexOf(a) !== -1)
    for (var u = [kt, wt].indexOf(c) !== -1 ? l : s; u >= 0; ) {
      var B = A[u];
      if (B === ze)
        return JA;
      if ([$r, qr].indexOf(B) !== -1)
        u--;
      else
        break;
    }
  if (mo === c && [mo, Bn, Fo, yo].indexOf(a) !== -1 || [Bn, Fo].indexOf(c) !== -1 && [Bn, fn].indexOf(a) !== -1 || [fn, yo].indexOf(c) !== -1 && a === fn || di.indexOf(c) !== -1 && [hi, vt].indexOf(a) !== -1 || di.indexOf(a) !== -1 && c === Ut || Ur.indexOf(c) !== -1 && Ur.indexOf(a) !== -1 || c === qr && Ur.indexOf(a) !== -1 || Ur.concat(ze).indexOf(c) !== -1 && a === ht && fc.indexOf(e[i]) === -1 || Ur.concat(ze).indexOf(a) !== -1 && c === wt)
    return JA;
  if (c === Zn && a === Zn) {
    for (var f = t[s], w = 1; f > 0 && (f--, A[f] === Zn); )
      w++;
    if (w % 2 !== 0)
      return JA;
  }
  return c === jt && a === Xt ? JA : Jt;
}, Qc = function(e, A) {
  A || (A = { lineBreak: "normal", wordBreak: "normal" });
  var t = wc(e, A.lineBreak), r = t[0], o = t[1], s = t[2];
  (A.wordBreak === "break-all" || A.wordBreak === "break-word") && (o = o.map(function(i) {
    return [ze, Pr, fa].indexOf(i) !== -1 ? Lt : i;
  }));
  var l = A.wordBreak === "keep-all" ? s.map(function(i, c) {
    return i && e[c] >= 19968 && e[c] <= 40959;
  }) : void 0;
  return [r, o, l];
}, dc = (
  /** @class */
  function() {
    function e(A, t, r, o) {
      this.codePoints = A, this.required = t === la, this.start = r, this.end = o;
    }
    return e.prototype.slice = function() {
      return Fe.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, e;
  }()
), pc = function(e, A) {
  var t = bn(e), r = Qc(t, A), o = r[0], s = r[1], l = r[2], i = t.length, c = 0, n = 0;
  return {
    next: function() {
      if (n >= i)
        return { done: !0, value: null };
      for (var a = JA; n < i && (a = hc(t, s, o, ++n, l)) === JA; )
        ;
      if (a !== JA || n === i) {
        var u = new dc(t, a, c, n);
        return c = n, { value: u, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, Cc = 1, vc = 2, Ot = 4, Ci = 8, Qn = 10, vi = 47, mt = 92, Uc = 9, Fc = 32, Wt = 34, Qt = 61, yc = 35, Ec = 36, mc = 37, Yt = 39, Zt = 40, dt = 41, Ic = 95, Ze = 45, Hc = 33, bc = 60, xc = 62, Lc = 64, Sc = 91, Kc = 93, Oc = 61, Dc = 123, zt = 63, Tc = 125, Ui = 124, _c = 126, Rc = 128, Fi = 65533, qn = 42, Vr = 43, Mc = 44, Nc = 58, Gc = 59, St = 46, Pc = 0, Vc = 8, kc = 11, jc = 14, Xc = 31, Jc = 127, hr = -1, wa = 48, ha = 97, Qa = 101, Wc = 102, Yc = 117, Zc = 122, da = 65, pa = 69, Ca = 70, zc = 85, qc = 90, Ge = function(e) {
  return e >= wa && e <= 57;
}, $c = function(e) {
  return e >= 55296 && e <= 57343;
}, At = function(e) {
  return Ge(e) || e >= da && e <= Ca || e >= ha && e <= Wc;
}, Au = function(e) {
  return e >= ha && e <= Zc;
}, eu = function(e) {
  return e >= da && e <= qc;
}, ru = function(e) {
  return Au(e) || eu(e);
}, tu = function(e) {
  return e >= Rc;
}, qt = function(e) {
  return e === Qn || e === Uc || e === Fc;
}, dn = function(e) {
  return ru(e) || tu(e) || e === Ic;
}, yi = function(e) {
  return dn(e) || Ge(e) || e === Ze;
}, nu = function(e) {
  return e >= Pc && e <= Vc || e === kc || e >= jc && e <= Xc || e === Jc;
}, xr = function(e, A) {
  return e !== mt ? !1 : A !== Qn;
}, $t = function(e, A, t) {
  return e === Ze ? dn(A) || xr(A, t) : dn(e) ? !0 : !!(e === mt && xr(e, A));
}, $n = function(e, A, t) {
  return e === Vr || e === Ze ? Ge(A) ? !0 : A === St && Ge(t) : Ge(e === St ? A : e);
}, ou = function(e) {
  var A = 0, t = 1;
  (e[A] === Vr || e[A] === Ze) && (e[A] === Ze && (t = -1), A++);
  for (var r = []; Ge(e[A]); )
    r.push(e[A++]);
  var o = r.length ? parseInt(Fe.apply(void 0, r), 10) : 0;
  e[A] === St && A++;
  for (var s = []; Ge(e[A]); )
    s.push(e[A++]);
  var l = s.length, i = l ? parseInt(Fe.apply(void 0, s), 10) : 0;
  (e[A] === pa || e[A] === Qa) && A++;
  var c = 1;
  (e[A] === Vr || e[A] === Ze) && (e[A] === Ze && (c = -1), A++);
  for (var n = []; Ge(e[A]); )
    n.push(e[A++]);
  var a = n.length ? parseInt(Fe.apply(void 0, n), 10) : 0;
  return t * (o + i * Math.pow(10, -l)) * Math.pow(10, c * a);
}, iu = {
  type: 2
  /* LEFT_PARENTHESIS_TOKEN */
}, au = {
  type: 3
  /* RIGHT_PARENTHESIS_TOKEN */
}, su = {
  type: 4
  /* COMMA_TOKEN */
}, cu = {
  type: 13
  /* SUFFIX_MATCH_TOKEN */
}, uu = {
  type: 8
  /* PREFIX_MATCH_TOKEN */
}, Bu = {
  type: 21
  /* COLUMN_TOKEN */
}, fu = {
  type: 9
  /* DASH_MATCH_TOKEN */
}, lu = {
  type: 10
  /* INCLUDE_MATCH_TOKEN */
}, gu = {
  type: 11
  /* LEFT_CURLY_BRACKET_TOKEN */
}, wu = {
  type: 12
  /* RIGHT_CURLY_BRACKET_TOKEN */
}, hu = {
  type: 14
  /* SUBSTRING_MATCH_TOKEN */
}, An = {
  type: 23
  /* BAD_URL_TOKEN */
}, Qu = {
  type: 1
  /* BAD_STRING_TOKEN */
}, du = {
  type: 25
  /* CDO_TOKEN */
}, pu = {
  type: 24
  /* CDC_TOKEN */
}, Cu = {
  type: 26
  /* COLON_TOKEN */
}, vu = {
  type: 27
  /* SEMICOLON_TOKEN */
}, Uu = {
  type: 28
  /* LEFT_SQUARE_BRACKET_TOKEN */
}, Fu = {
  type: 29
  /* RIGHT_SQUARE_BRACKET_TOKEN */
}, yu = {
  type: 31
  /* WHITESPACE_TOKEN */
}, bo = {
  type: 32
  /* EOF_TOKEN */
}, va = (
  /** @class */
  function() {
    function e() {
      this._value = [];
    }
    return e.prototype.write = function(A) {
      this._value = this._value.concat(bn(A));
    }, e.prototype.read = function() {
      for (var A = [], t = this.consumeToken(); t !== bo; )
        A.push(t), t = this.consumeToken();
      return A;
    }, e.prototype.consumeToken = function() {
      var A = this.consumeCodePoint();
      switch (A) {
        case Wt:
          return this.consumeStringToken(Wt);
        case yc:
          var t = this.peekCodePoint(0), r = this.peekCodePoint(1), o = this.peekCodePoint(2);
          if (yi(t) || xr(r, o)) {
            var s = $t(t, r, o) ? vc : Cc, l = this.consumeName();
            return { type: 5, value: l, flags: s };
          }
          break;
        case Ec:
          if (this.peekCodePoint(0) === Qt)
            return this.consumeCodePoint(), cu;
          break;
        case Yt:
          return this.consumeStringToken(Yt);
        case Zt:
          return iu;
        case dt:
          return au;
        case qn:
          if (this.peekCodePoint(0) === Qt)
            return this.consumeCodePoint(), hu;
          break;
        case Vr:
          if ($n(A, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          break;
        case Mc:
          return su;
        case Ze:
          var i = A, c = this.peekCodePoint(0), n = this.peekCodePoint(1);
          if ($n(i, c, n))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          if ($t(i, c, n))
            return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
          if (c === Ze && n === xc)
            return this.consumeCodePoint(), this.consumeCodePoint(), pu;
          break;
        case St:
          if ($n(A, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          break;
        case vi:
          if (this.peekCodePoint(0) === qn)
            for (this.consumeCodePoint(); ; ) {
              var a = this.consumeCodePoint();
              if (a === qn && (a = this.consumeCodePoint(), a === vi))
                return this.consumeToken();
              if (a === hr)
                return this.consumeToken();
            }
          break;
        case Nc:
          return Cu;
        case Gc:
          return vu;
        case bc:
          if (this.peekCodePoint(0) === Hc && this.peekCodePoint(1) === Ze && this.peekCodePoint(2) === Ze)
            return this.consumeCodePoint(), this.consumeCodePoint(), du;
          break;
        case Lc:
          var u = this.peekCodePoint(0), B = this.peekCodePoint(1), f = this.peekCodePoint(2);
          if ($t(u, B, f)) {
            var l = this.consumeName();
            return { type: 7, value: l };
          }
          break;
        case Sc:
          return Uu;
        case mt:
          if (xr(A, this.peekCodePoint(0)))
            return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
          break;
        case Kc:
          return Fu;
        case Oc:
          if (this.peekCodePoint(0) === Qt)
            return this.consumeCodePoint(), uu;
          break;
        case Dc:
          return gu;
        case Tc:
          return wu;
        case Yc:
        case zc:
          var w = this.peekCodePoint(0), d = this.peekCodePoint(1);
          return w === Vr && (At(d) || d === zt) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        case Ui:
          if (this.peekCodePoint(0) === Qt)
            return this.consumeCodePoint(), fu;
          if (this.peekCodePoint(0) === Ui)
            return this.consumeCodePoint(), Bu;
          break;
        case _c:
          if (this.peekCodePoint(0) === Qt)
            return this.consumeCodePoint(), lu;
          break;
        case hr:
          return bo;
      }
      return qt(A) ? (this.consumeWhiteSpace(), yu) : Ge(A) ? (this.reconsumeCodePoint(A), this.consumeNumericToken()) : dn(A) ? (this.reconsumeCodePoint(A), this.consumeIdentLikeToken()) : { type: 6, value: Fe(A) };
    }, e.prototype.consumeCodePoint = function() {
      var A = this._value.shift();
      return typeof A > "u" ? -1 : A;
    }, e.prototype.reconsumeCodePoint = function(A) {
      this._value.unshift(A);
    }, e.prototype.peekCodePoint = function(A) {
      return A >= this._value.length ? -1 : this._value[A];
    }, e.prototype.consumeUnicodeRangeToken = function() {
      for (var A = [], t = this.consumeCodePoint(); At(t) && A.length < 6; )
        A.push(t), t = this.consumeCodePoint();
      for (var r = !1; t === zt && A.length < 6; )
        A.push(t), t = this.consumeCodePoint(), r = !0;
      if (r) {
        var o = parseInt(Fe.apply(void 0, A.map(function(c) {
          return c === zt ? wa : c;
        })), 16), s = parseInt(Fe.apply(void 0, A.map(function(c) {
          return c === zt ? Ca : c;
        })), 16);
        return { type: 30, start: o, end: s };
      }
      var l = parseInt(Fe.apply(void 0, A), 16);
      if (this.peekCodePoint(0) === Ze && At(this.peekCodePoint(1))) {
        this.consumeCodePoint(), t = this.consumeCodePoint();
        for (var i = []; At(t) && i.length < 6; )
          i.push(t), t = this.consumeCodePoint();
        var s = parseInt(Fe.apply(void 0, i), 16);
        return { type: 30, start: l, end: s };
      } else
        return { type: 30, start: l, end: l };
    }, e.prototype.consumeIdentLikeToken = function() {
      var A = this.consumeName();
      return A.toLowerCase() === "url" && this.peekCodePoint(0) === Zt ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === Zt ? (this.consumeCodePoint(), { type: 19, value: A }) : { type: 20, value: A };
    }, e.prototype.consumeUrlToken = function() {
      var A = [];
      if (this.consumeWhiteSpace(), this.peekCodePoint(0) === hr)
        return { type: 22, value: "" };
      var t = this.peekCodePoint(0);
      if (t === Yt || t === Wt) {
        var r = this.consumeStringToken(this.consumeCodePoint());
        return r.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === hr || this.peekCodePoint(0) === dt) ? (this.consumeCodePoint(), { type: 22, value: r.value }) : (this.consumeBadUrlRemnants(), An);
      }
      for (; ; ) {
        var o = this.consumeCodePoint();
        if (o === hr || o === dt)
          return { type: 22, value: Fe.apply(void 0, A) };
        if (qt(o))
          return this.consumeWhiteSpace(), this.peekCodePoint(0) === hr || this.peekCodePoint(0) === dt ? (this.consumeCodePoint(), { type: 22, value: Fe.apply(void 0, A) }) : (this.consumeBadUrlRemnants(), An);
        if (o === Wt || o === Yt || o === Zt || nu(o))
          return this.consumeBadUrlRemnants(), An;
        if (o === mt)
          if (xr(o, this.peekCodePoint(0)))
            A.push(this.consumeEscapedCodePoint());
          else
            return this.consumeBadUrlRemnants(), An;
        else
          A.push(o);
      }
    }, e.prototype.consumeWhiteSpace = function() {
      for (; qt(this.peekCodePoint(0)); )
        this.consumeCodePoint();
    }, e.prototype.consumeBadUrlRemnants = function() {
      for (; ; ) {
        var A = this.consumeCodePoint();
        if (A === dt || A === hr)
          return;
        xr(A, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
      }
    }, e.prototype.consumeStringSlice = function(A) {
      for (var t = 5e4, r = ""; A > 0; ) {
        var o = Math.min(t, A);
        r += Fe.apply(void 0, this._value.splice(0, o)), A -= o;
      }
      return this._value.shift(), r;
    }, e.prototype.consumeStringToken = function(A) {
      var t = "", r = 0;
      do {
        var o = this._value[r];
        if (o === hr || o === void 0 || o === A)
          return t += this.consumeStringSlice(r), { type: 0, value: t };
        if (o === Qn)
          return this._value.splice(0, r), Qu;
        if (o === mt) {
          var s = this._value[r + 1];
          s !== hr && s !== void 0 && (s === Qn ? (t += this.consumeStringSlice(r), r = -1, this._value.shift()) : xr(o, s) && (t += this.consumeStringSlice(r), t += Fe(this.consumeEscapedCodePoint()), r = -1));
        }
        r++;
      } while (!0);
    }, e.prototype.consumeNumber = function() {
      var A = [], t = Ot, r = this.peekCodePoint(0);
      for ((r === Vr || r === Ze) && A.push(this.consumeCodePoint()); Ge(this.peekCodePoint(0)); )
        A.push(this.consumeCodePoint());
      r = this.peekCodePoint(0);
      var o = this.peekCodePoint(1);
      if (r === St && Ge(o))
        for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = Ci; Ge(this.peekCodePoint(0)); )
          A.push(this.consumeCodePoint());
      r = this.peekCodePoint(0), o = this.peekCodePoint(1);
      var s = this.peekCodePoint(2);
      if ((r === pa || r === Qa) && ((o === Vr || o === Ze) && Ge(s) || Ge(o)))
        for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = Ci; Ge(this.peekCodePoint(0)); )
          A.push(this.consumeCodePoint());
      return [ou(A), t];
    }, e.prototype.consumeNumericToken = function() {
      var A = this.consumeNumber(), t = A[0], r = A[1], o = this.peekCodePoint(0), s = this.peekCodePoint(1), l = this.peekCodePoint(2);
      if ($t(o, s, l)) {
        var i = this.consumeName();
        return { type: 15, number: t, flags: r, unit: i };
      }
      return o === mc ? (this.consumeCodePoint(), { type: 16, number: t, flags: r }) : { type: 17, number: t, flags: r };
    }, e.prototype.consumeEscapedCodePoint = function() {
      var A = this.consumeCodePoint();
      if (At(A)) {
        for (var t = Fe(A); At(this.peekCodePoint(0)) && t.length < 6; )
          t += Fe(this.consumeCodePoint());
        qt(this.peekCodePoint(0)) && this.consumeCodePoint();
        var r = parseInt(t, 16);
        return r === 0 || $c(r) || r > 1114111 ? Fi : r;
      }
      return A === hr ? Fi : A;
    }, e.prototype.consumeName = function() {
      for (var A = ""; ; ) {
        var t = this.consumeCodePoint();
        if (yi(t))
          A += Fe(t);
        else if (xr(t, this.peekCodePoint(0)))
          A += Fe(this.consumeEscapedCodePoint());
        else
          return this.reconsumeCodePoint(t), A;
      }
    }, e;
  }()
), Ua = (
  /** @class */
  function() {
    function e(A) {
      this._tokens = A;
    }
    return e.create = function(A) {
      var t = new va();
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
        if (r.type === 32 || mu(r, A))
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
      return typeof A > "u" ? bo : A;
    }, e.prototype.reconsumeToken = function(A) {
      this._tokens.unshift(A);
    }, e;
  }()
), Dt = function(e) {
  return e.type === 15;
}, ct = function(e) {
  return e.type === 17;
}, ce = function(e) {
  return e.type === 20;
}, Eu = function(e) {
  return e.type === 0;
}, xo = function(e, A) {
  return ce(e) && e.value === A;
}, Fa = function(e) {
  return e.type !== 31;
}, st = function(e) {
  return e.type !== 31 && e.type !== 4;
}, Qr = function(e) {
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
}, mu = function(e, A) {
  return A === 11 && e.type === 12 || A === 28 && e.type === 29 ? !0 : A === 2 && e.type === 3;
}, Tr = function(e) {
  return e.type === 17 || e.type === 15;
}, Ie = function(e) {
  return e.type === 16 || Tr(e);
}, ya = function(e) {
  return e.length > 1 ? [e[0], e[1]] : [e[0]];
}, Re = {
  type: 17,
  number: 0,
  flags: Ot
}, Po = {
  type: 16,
  number: 50,
  flags: Ot
}, Sr = {
  type: 16,
  number: 100,
  flags: Ot
}, Ft = function(e, A, t) {
  var r = e[0], o = e[1];
  return [ge(r, A), ge(typeof o < "u" ? o : r, t)];
}, ge = function(e, A) {
  if (e.type === 16)
    return e.number / 100 * A;
  if (Dt(e))
    switch (e.unit) {
      case "rem":
      case "em":
        return 16 * e.number;
      case "px":
      default:
        return e.number;
    }
  return e.number;
}, Ea = "deg", ma = "grad", Ia = "rad", Ha = "turn", xn = {
  name: "angle",
  parse: function(e, A) {
    if (A.type === 15)
      switch (A.unit) {
        case Ea:
          return Math.PI * A.number / 180;
        case ma:
          return Math.PI / 200 * A.number;
        case Ia:
          return A.number;
        case Ha:
          return Math.PI * 2 * A.number;
      }
    throw new Error("Unsupported angle type");
  }
}, ba = function(e) {
  return e.type === 15 && (e.unit === Ea || e.unit === ma || e.unit === Ia || e.unit === Ha);
}, xa = function(e) {
  var A = e.filter(ce).map(function(t) {
    return t.value;
  }).join(" ");
  switch (A) {
    case "to bottom right":
    case "to right bottom":
    case "left top":
    case "top left":
      return [Re, Re];
    case "to top":
    case "bottom":
      return or(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
      return [Re, Sr];
    case "to right":
    case "left":
      return or(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
      return [Sr, Sr];
    case "to bottom":
    case "top":
      return or(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
      return [Sr, Re];
    case "to left":
    case "right":
      return or(270);
  }
  return 0;
}, or = function(e) {
  return Math.PI * e / 180;
}, Or = {
  name: "color",
  parse: function(e, A) {
    if (A.type === 18) {
      var t = Iu[A.name];
      if (typeof t > "u")
        throw new Error('Attempting to parse an unsupported color function "' + A.name + '"');
      return t(e, A.values);
    }
    if (A.type === 5) {
      if (A.value.length === 3) {
        var r = A.value.substring(0, 1), o = A.value.substring(1, 2), s = A.value.substring(2, 3);
        return Kr(parseInt(r + r, 16), parseInt(o + o, 16), parseInt(s + s, 16), 1);
      }
      if (A.value.length === 4) {
        var r = A.value.substring(0, 1), o = A.value.substring(1, 2), s = A.value.substring(2, 3), l = A.value.substring(3, 4);
        return Kr(parseInt(r + r, 16), parseInt(o + o, 16), parseInt(s + s, 16), parseInt(l + l, 16) / 255);
      }
      if (A.value.length === 6) {
        var r = A.value.substring(0, 2), o = A.value.substring(2, 4), s = A.value.substring(4, 6);
        return Kr(parseInt(r, 16), parseInt(o, 16), parseInt(s, 16), 1);
      }
      if (A.value.length === 8) {
        var r = A.value.substring(0, 2), o = A.value.substring(2, 4), s = A.value.substring(4, 6), l = A.value.substring(6, 8);
        return Kr(parseInt(r, 16), parseInt(o, 16), parseInt(s, 16), parseInt(l, 16) / 255);
      }
    }
    if (A.type === 20) {
      var i = Er[A.value.toUpperCase()];
      if (typeof i < "u")
        return i;
    }
    return Er.TRANSPARENT;
  }
}, Dr = function(e) {
  return (255 & e) === 0;
}, Oe = function(e) {
  var A = 255 & e, t = 255 & e >> 8, r = 255 & e >> 16, o = 255 & e >> 24;
  return A < 255 ? "rgba(" + o + "," + r + "," + t + "," + A / 255 + ")" : "rgb(" + o + "," + r + "," + t + ")";
}, Kr = function(e, A, t, r) {
  return (e << 24 | A << 16 | t << 8 | Math.round(r * 255) << 0) >>> 0;
}, Ei = function(e, A) {
  if (e.type === 17)
    return e.number;
  if (e.type === 16) {
    var t = A === 3 ? 1 : 255;
    return A === 3 ? e.number / 100 * t : Math.round(e.number / 100 * t);
  }
  return 0;
}, mi = function(e, A) {
  var t = A.filter(st);
  if (t.length === 3) {
    var r = t.map(Ei), o = r[0], s = r[1], l = r[2];
    return Kr(o, s, l, 1);
  }
  if (t.length === 4) {
    var i = t.map(Ei), o = i[0], s = i[1], l = i[2], c = i[3];
    return Kr(o, s, l, c);
  }
  return 0;
};
function Ao(e, A, t) {
  return t < 0 && (t += 1), t >= 1 && (t -= 1), t < 1 / 6 ? (A - e) * t * 6 + e : t < 1 / 2 ? A : t < 2 / 3 ? (A - e) * 6 * (2 / 3 - t) + e : e;
}
var Ii = function(e, A) {
  var t = A.filter(st), r = t[0], o = t[1], s = t[2], l = t[3], i = (r.type === 17 ? or(r.number) : xn.parse(e, r)) / (Math.PI * 2), c = Ie(o) ? o.number / 100 : 0, n = Ie(s) ? s.number / 100 : 0, a = typeof l < "u" && Ie(l) ? ge(l, 1) : 1;
  if (c === 0)
    return Kr(n * 255, n * 255, n * 255, 1);
  var u = n <= 0.5 ? n * (c + 1) : n + c - n * c, B = n * 2 - u, f = Ao(B, u, i + 1 / 3), w = Ao(B, u, i), d = Ao(B, u, i - 1 / 3);
  return Kr(f * 255, w * 255, d * 255, a);
}, Iu = {
  hsl: Ii,
  hsla: Ii,
  rgb: mi,
  rgba: mi
}, It = function(e, A) {
  return Or.parse(e, Ua.create(A).parseComponentValue());
}, Er = {
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
}, Hu = {
  name: "background-clip",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.map(function(t) {
      if (ce(t))
        switch (t.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
      return 0;
    });
  }
}, bu = {
  name: "background-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, Ln = function(e, A) {
  var t = Or.parse(e, A[0]), r = A[1];
  return r && Ie(r) ? { color: t, stop: r } : { color: t, stop: null };
}, Hi = function(e, A) {
  var t = e[0], r = e[e.length - 1];
  t.stop === null && (t.stop = Re), r.stop === null && (r.stop = Sr);
  for (var o = [], s = 0, l = 0; l < e.length; l++) {
    var i = e[l].stop;
    if (i !== null) {
      var c = ge(i, A);
      c > s ? o.push(c) : o.push(s), s = c;
    } else
      o.push(null);
  }
  for (var n = null, l = 0; l < o.length; l++) {
    var a = o[l];
    if (a === null)
      n === null && (n = l);
    else if (n !== null) {
      for (var u = l - n, B = o[n - 1], f = (a - B) / (u + 1), w = 1; w <= u; w++)
        o[n + w - 1] = f * w;
      n = null;
    }
  }
  return e.map(function(d, Q) {
    var C = d.color;
    return { color: C, stop: Math.max(Math.min(1, o[Q] / A), 0) };
  });
}, xu = function(e, A, t) {
  var r = A / 2, o = t / 2, s = ge(e[0], A) - r, l = o - ge(e[1], t);
  return (Math.atan2(l, s) + Math.PI * 2) % (Math.PI * 2);
}, Lu = function(e, A, t) {
  var r = typeof e == "number" ? e : xu(e, A, t), o = Math.abs(A * Math.sin(r)) + Math.abs(t * Math.cos(r)), s = A / 2, l = t / 2, i = o / 2, c = Math.sin(r - Math.PI / 2) * i, n = Math.cos(r - Math.PI / 2) * i;
  return [o, s - n, s + n, l - c, l + c];
}, fr = function(e, A) {
  return Math.sqrt(e * e + A * A);
}, bi = function(e, A, t, r, o) {
  var s = [
    [0, 0],
    [0, A],
    [e, 0],
    [e, A]
  ];
  return s.reduce(function(l, i) {
    var c = i[0], n = i[1], a = fr(t - c, r - n);
    return (o ? a < l.optimumDistance : a > l.optimumDistance) ? {
      optimumCorner: i,
      optimumDistance: a
    } : l;
  }, {
    optimumDistance: o ? 1 / 0 : -1 / 0,
    optimumCorner: null
  }).optimumCorner;
}, Su = function(e, A, t, r, o) {
  var s = 0, l = 0;
  switch (e.size) {
    case 0:
      e.shape === 0 ? s = l = Math.min(Math.abs(A), Math.abs(A - r), Math.abs(t), Math.abs(t - o)) : e.shape === 1 && (s = Math.min(Math.abs(A), Math.abs(A - r)), l = Math.min(Math.abs(t), Math.abs(t - o)));
      break;
    case 2:
      if (e.shape === 0)
        s = l = Math.min(fr(A, t), fr(A, t - o), fr(A - r, t), fr(A - r, t - o));
      else if (e.shape === 1) {
        var i = Math.min(Math.abs(t), Math.abs(t - o)) / Math.min(Math.abs(A), Math.abs(A - r)), c = bi(r, o, A, t, !0), n = c[0], a = c[1];
        s = fr(n - A, (a - t) / i), l = i * s;
      }
      break;
    case 1:
      e.shape === 0 ? s = l = Math.max(Math.abs(A), Math.abs(A - r), Math.abs(t), Math.abs(t - o)) : e.shape === 1 && (s = Math.max(Math.abs(A), Math.abs(A - r)), l = Math.max(Math.abs(t), Math.abs(t - o)));
      break;
    case 3:
      if (e.shape === 0)
        s = l = Math.max(fr(A, t), fr(A, t - o), fr(A - r, t), fr(A - r, t - o));
      else if (e.shape === 1) {
        var i = Math.max(Math.abs(t), Math.abs(t - o)) / Math.max(Math.abs(A), Math.abs(A - r)), u = bi(r, o, A, t, !1), n = u[0], a = u[1];
        s = fr(n - A, (a - t) / i), l = i * s;
      }
      break;
  }
  return Array.isArray(e.size) && (s = ge(e.size[0], r), l = e.size.length === 2 ? ge(e.size[1], o) : s), [s, l];
}, Ku = function(e, A) {
  var t = or(180), r = [];
  return Qr(A).forEach(function(o, s) {
    if (s === 0) {
      var l = o[0];
      if (l.type === 20 && l.value === "to") {
        t = xa(o);
        return;
      } else if (ba(l)) {
        t = xn.parse(e, l);
        return;
      }
    }
    var i = Ln(e, o);
    r.push(i);
  }), {
    angle: t,
    stops: r,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, en = function(e, A) {
  var t = or(180), r = [];
  return Qr(A).forEach(function(o, s) {
    if (s === 0) {
      var l = o[0];
      if (l.type === 20 && ["top", "left", "right", "bottom"].indexOf(l.value) !== -1) {
        t = xa(o);
        return;
      } else if (ba(l)) {
        t = (xn.parse(e, l) + or(270)) % or(360);
        return;
      }
    }
    var i = Ln(e, o);
    r.push(i);
  }), {
    angle: t,
    stops: r,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, Ou = function(e, A) {
  var t = or(180), r = [], o = 1, s = 0, l = 3, i = [];
  return Qr(A).forEach(function(c, n) {
    var a = c[0];
    if (n === 0) {
      if (ce(a) && a.value === "linear") {
        o = 1;
        return;
      } else if (ce(a) && a.value === "radial") {
        o = 2;
        return;
      }
    }
    if (a.type === 18) {
      if (a.name === "from") {
        var u = Or.parse(e, a.values[0]);
        r.push({ stop: Re, color: u });
      } else if (a.name === "to") {
        var u = Or.parse(e, a.values[0]);
        r.push({ stop: Sr, color: u });
      } else if (a.name === "color-stop") {
        var B = a.values.filter(st);
        if (B.length === 2) {
          var u = Or.parse(e, B[1]), f = B[0];
          ct(f) && r.push({
            stop: { type: 16, number: f.number * 100, flags: f.flags },
            color: u
          });
        }
      }
    }
  }), o === 1 ? {
    angle: (t + or(180)) % or(360),
    stops: r,
    type: o
  } : { size: l, shape: s, stops: r, position: i, type: o };
}, La = "closest-side", Sa = "farthest-side", Ka = "closest-corner", Oa = "farthest-corner", Da = "circle", Ta = "ellipse", _a = "cover", Ra = "contain", Du = function(e, A) {
  var t = 0, r = 3, o = [], s = [];
  return Qr(A).forEach(function(l, i) {
    var c = !0;
    if (i === 0) {
      var n = !1;
      c = l.reduce(function(u, B) {
        if (n)
          if (ce(B))
            switch (B.value) {
              case "center":
                return s.push(Po), u;
              case "top":
              case "left":
                return s.push(Re), u;
              case "right":
              case "bottom":
                return s.push(Sr), u;
            }
          else
            (Ie(B) || Tr(B)) && s.push(B);
        else if (ce(B))
          switch (B.value) {
            case Da:
              return t = 0, !1;
            case Ta:
              return t = 1, !1;
            case "at":
              return n = !0, !1;
            case La:
              return r = 0, !1;
            case _a:
            case Sa:
              return r = 1, !1;
            case Ra:
            case Ka:
              return r = 2, !1;
            case Oa:
              return r = 3, !1;
          }
        else if (Tr(B) || Ie(B))
          return Array.isArray(r) || (r = []), r.push(B), !1;
        return u;
      }, c);
    }
    if (c) {
      var a = Ln(e, l);
      o.push(a);
    }
  }), {
    size: r,
    shape: t,
    stops: o,
    position: s,
    type: 2
    /* RADIAL_GRADIENT */
  };
}, rn = function(e, A) {
  var t = 0, r = 3, o = [], s = [];
  return Qr(A).forEach(function(l, i) {
    var c = !0;
    if (i === 0 ? c = l.reduce(function(a, u) {
      if (ce(u))
        switch (u.value) {
          case "center":
            return s.push(Po), !1;
          case "top":
          case "left":
            return s.push(Re), !1;
          case "right":
          case "bottom":
            return s.push(Sr), !1;
        }
      else if (Ie(u) || Tr(u))
        return s.push(u), !1;
      return a;
    }, c) : i === 1 && (c = l.reduce(function(a, u) {
      if (ce(u))
        switch (u.value) {
          case Da:
            return t = 0, !1;
          case Ta:
            return t = 1, !1;
          case Ra:
          case La:
            return r = 0, !1;
          case Sa:
            return r = 1, !1;
          case Ka:
            return r = 2, !1;
          case _a:
          case Oa:
            return r = 3, !1;
        }
      else if (Tr(u) || Ie(u))
        return Array.isArray(r) || (r = []), r.push(u), !1;
      return a;
    }, c)), c) {
      var n = Ln(e, l);
      o.push(n);
    }
  }), {
    size: r,
    shape: t,
    stops: o,
    position: s,
    type: 2
    /* RADIAL_GRADIENT */
  };
}, Tu = function(e) {
  return e.type === 1;
}, _u = function(e) {
  return e.type === 2;
}, Vo = {
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
      var r = Ma[A.name];
      if (typeof r > "u")
        throw new Error('Attempting to parse an unsupported image function "' + A.name + '"');
      return r(e, A.values);
    }
    throw new Error("Unsupported image type " + A.type);
  }
};
function Ru(e) {
  return !(e.type === 20 && e.value === "none") && (e.type !== 18 || !!Ma[e.name]);
}
var Ma = {
  "linear-gradient": Ku,
  "-moz-linear-gradient": en,
  "-ms-linear-gradient": en,
  "-o-linear-gradient": en,
  "-webkit-linear-gradient": en,
  "radial-gradient": Du,
  "-moz-radial-gradient": rn,
  "-ms-radial-gradient": rn,
  "-o-radial-gradient": rn,
  "-webkit-radial-gradient": rn,
  "-webkit-gradient": Ou
}, Mu = {
  name: "background-image",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    if (A.length === 0)
      return [];
    var t = A[0];
    return t.type === 20 && t.value === "none" ? [] : A.filter(function(r) {
      return st(r) && Ru(r);
    }).map(function(r) {
      return Vo.parse(e, r);
    });
  }
}, Nu = {
  name: "background-origin",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.map(function(t) {
      if (ce(t))
        switch (t.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
      return 0;
    });
  }
}, Gu = {
  name: "background-position",
  initialValue: "0% 0%",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return Qr(A).map(function(t) {
      return t.filter(Ie);
    }).map(ya);
  }
}, Pu = {
  name: "background-repeat",
  initialValue: "repeat",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return Qr(A).map(function(t) {
      return t.filter(ce).map(function(r) {
        return r.value;
      }).join(" ");
    }).map(Vu);
  }
}, Vu = function(e) {
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
}, at;
(function(e) {
  e.AUTO = "auto", e.CONTAIN = "contain", e.COVER = "cover";
})(at || (at = {}));
var ku = {
  name: "background-size",
  initialValue: "0",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return Qr(A).map(function(t) {
      return t.filter(ju);
    });
  }
}, ju = function(e) {
  return ce(e) || Ie(e);
}, Sn = function(e) {
  return {
    name: "border-" + e + "-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color"
  };
}, Xu = Sn("top"), Ju = Sn("right"), Wu = Sn("bottom"), Yu = Sn("left"), Kn = function(e) {
  return {
    name: "border-radius-" + e,
    initialValue: "0 0",
    prefix: !1,
    type: 1,
    parse: function(A, t) {
      return ya(t.filter(Ie));
    }
  };
}, Zu = Kn("top-left"), zu = Kn("top-right"), qu = Kn("bottom-right"), $u = Kn("bottom-left"), On = function(e) {
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
}, AB = On("top"), eB = On("right"), rB = On("bottom"), tB = On("left"), Dn = function(e) {
  return {
    name: "border-" + e + "-width",
    initialValue: "0",
    type: 0,
    prefix: !1,
    parse: function(A, t) {
      return Dt(t) ? t.number : 0;
    }
  };
}, nB = Dn("top"), oB = Dn("right"), iB = Dn("bottom"), aB = Dn("left"), sB = {
  name: "color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, cB = {
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
}, uB = {
  name: "display",
  initialValue: "inline-block",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.filter(ce).reduce(
      function(t, r) {
        return t | BB(r.value);
      },
      0
      /* NONE */
    );
  }
}, BB = function(e) {
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
}, fB = {
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
}, lB = {
  name: "letter-spacing",
  initialValue: "0",
  prefix: !1,
  type: 0,
  parse: function(e, A) {
    return A.type === 20 && A.value === "normal" ? 0 : A.type === 17 || A.type === 15 ? A.number : 0;
  }
}, pn;
(function(e) {
  e.NORMAL = "normal", e.STRICT = "strict";
})(pn || (pn = {}));
var gB = {
  name: "line-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "strict":
        return pn.STRICT;
      case "normal":
      default:
        return pn.NORMAL;
    }
  }
}, wB = {
  name: "line-height",
  initialValue: "normal",
  prefix: !1,
  type: 4
  /* TOKEN_VALUE */
}, xi = function(e, A) {
  return ce(e) && e.value === "normal" ? 1.2 * A : e.type === 17 ? A * e.number : Ie(e) ? ge(e, A) : A;
}, hB = {
  name: "list-style-image",
  initialValue: "none",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    return A.type === 20 && A.value === "none" ? null : Vo.parse(e, A);
  }
}, QB = {
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
}, Lo = {
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
}, Tn = function(e) {
  return {
    name: "margin-" + e,
    initialValue: "0",
    prefix: !1,
    type: 4
    /* TOKEN_VALUE */
  };
}, dB = Tn("top"), pB = Tn("right"), CB = Tn("bottom"), vB = Tn("left"), UB = {
  name: "overflow",
  initialValue: "visible",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.filter(ce).map(function(t) {
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
}, FB = {
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
}, _n = function(e) {
  return {
    name: "padding-" + e,
    initialValue: "0",
    prefix: !1,
    type: 3,
    format: "length-percentage"
  };
}, yB = _n("top"), EB = _n("right"), mB = _n("bottom"), IB = _n("left"), HB = {
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
}, bB = {
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
}, xB = {
  name: "text-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return A.length === 1 && xo(A[0], "none") ? [] : Qr(A).map(function(t) {
      for (var r = {
        color: Er.TRANSPARENT,
        offsetX: Re,
        offsetY: Re,
        blur: Re
      }, o = 0, s = 0; s < t.length; s++) {
        var l = t[s];
        Tr(l) ? (o === 0 ? r.offsetX = l : o === 1 ? r.offsetY = l : r.blur = l, o++) : r.color = Or.parse(e, l);
      }
      return r;
    });
  }
}, LB = {
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
}, SB = {
  name: "transform",
  initialValue: "none",
  prefix: !0,
  type: 0,
  parse: function(e, A) {
    if (A.type === 20 && A.value === "none")
      return null;
    if (A.type === 18) {
      var t = DB[A.name];
      if (typeof t > "u")
        throw new Error('Attempting to parse an unsupported transform function "' + A.name + '"');
      return t(A.values);
    }
    return null;
  }
}, KB = function(e) {
  var A = e.filter(function(t) {
    return t.type === 17;
  }).map(function(t) {
    return t.number;
  });
  return A.length === 6 ? A : null;
}, OB = function(e) {
  var A = e.filter(function(c) {
    return c.type === 17;
  }).map(function(c) {
    return c.number;
  }), t = A[0], r = A[1];
  A[2], A[3];
  var o = A[4], s = A[5];
  A[6], A[7], A[8], A[9], A[10], A[11];
  var l = A[12], i = A[13];
  return A[14], A[15], A.length === 16 ? [t, r, o, s, l, i] : null;
}, DB = {
  matrix: KB,
  matrix3d: OB
}, Li = {
  type: 16,
  number: 50,
  flags: Ot
}, TB = [Li, Li], _B = {
  name: "transform-origin",
  initialValue: "50% 50%",
  prefix: !0,
  type: 1,
  parse: function(e, A) {
    var t = A.filter(Ie);
    return t.length !== 2 ? TB : [t[0], t[1]];
  }
}, RB = {
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
}, Ht;
(function(e) {
  e.NORMAL = "normal", e.BREAK_ALL = "break-all", e.KEEP_ALL = "keep-all";
})(Ht || (Ht = {}));
var MB = {
  name: "word-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "break-all":
        return Ht.BREAK_ALL;
      case "keep-all":
        return Ht.KEEP_ALL;
      case "normal":
      default:
        return Ht.NORMAL;
    }
  }
}, NB = {
  name: "z-index",
  initialValue: "auto",
  prefix: !1,
  type: 0,
  parse: function(e, A) {
    if (A.type === 20)
      return { auto: !0, order: 0 };
    if (ct(A))
      return { auto: !1, order: A.number };
    throw new Error("Invalid z-index number parsed");
  }
}, Na = {
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
}, GB = {
  name: "opacity",
  initialValue: "1",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    return ct(A) ? A.number : 1;
  }
}, PB = {
  name: "text-decoration-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, VB = {
  name: "text-decoration-line",
  initialValue: "none",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.filter(ce).map(function(t) {
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
}, kB = {
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
}, jB = {
  name: "font-size",
  initialValue: "0",
  prefix: !1,
  type: 3,
  format: "length"
}, XB = {
  name: "font-weight",
  initialValue: "normal",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    if (ct(A))
      return A.number;
    if (ce(A))
      switch (A.value) {
        case "bold":
          return 700;
        case "normal":
        default:
          return 400;
      }
    return 400;
  }
}, JB = {
  name: "font-variant",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return A.filter(ce).map(function(t) {
      return t.value;
    });
  }
}, WB = {
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
}, xe = function(e, A) {
  return (e & A) !== 0;
}, YB = {
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
}, ZB = {
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
    for (var r = [], o = A.filter(Fa), s = 0; s < o.length; s++) {
      var l = o[s], i = o[s + 1];
      if (l.type === 20) {
        var c = i && ct(i) ? i.number : 1;
        r.push({ counter: l.value, increment: c });
      }
    }
    return r;
  }
}, zB = {
  name: "counter-reset",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(e, A) {
    if (A.length === 0)
      return [];
    for (var t = [], r = A.filter(Fa), o = 0; o < r.length; o++) {
      var s = r[o], l = r[o + 1];
      if (ce(s) && s.value !== "none") {
        var i = l && ct(l) ? l.number : 0;
        t.push({ counter: s.value, reset: i });
      }
    }
    return t;
  }
}, qB = {
  name: "duration",
  initialValue: "0s",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.filter(Dt).map(function(t) {
      return Na.parse(e, t);
    });
  }
}, $B = {
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
    var r = [], o = A.filter(Eu);
    if (o.length % 2 !== 0)
      return null;
    for (var s = 0; s < o.length; s += 2) {
      var l = o[s].value, i = o[s + 1].value;
      r.push({ open: l, close: i });
    }
    return r;
  }
}, Si = function(e, A, t) {
  if (!e)
    return "";
  var r = e[Math.min(A, e.length - 1)];
  return r ? t ? r.open : r.close : "";
}, Af = {
  name: "box-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return A.length === 1 && xo(A[0], "none") ? [] : Qr(A).map(function(t) {
      for (var r = {
        color: 255,
        offsetX: Re,
        offsetY: Re,
        blur: Re,
        spread: Re,
        inset: !1
      }, o = 0, s = 0; s < t.length; s++) {
        var l = t[s];
        xo(l, "inset") ? r.inset = !0 : Tr(l) ? (o === 0 ? r.offsetX = l : o === 1 ? r.offsetY = l : o === 2 ? r.blur = l : r.spread = l, o++) : r.color = Or.parse(e, l);
      }
      return r;
    });
  }
}, ef = {
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
    return A.filter(ce).forEach(function(o) {
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
}, rf = {
  name: "-webkit-text-stroke-color",
  initialValue: "currentcolor",
  prefix: !1,
  type: 3,
  format: "color"
}, tf = {
  name: "-webkit-text-stroke-width",
  initialValue: "0",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    return Dt(A) ? A.number : 0;
  }
}, nf = (
  /** @class */
  function() {
    function e(A, t) {
      var r, o;
      this.animationDuration = vA(A, qB, t.animationDuration), this.backgroundClip = vA(A, Hu, t.backgroundClip), this.backgroundColor = vA(A, bu, t.backgroundColor), this.backgroundImage = vA(A, Mu, t.backgroundImage), this.backgroundOrigin = vA(A, Nu, t.backgroundOrigin), this.backgroundPosition = vA(A, Gu, t.backgroundPosition), this.backgroundRepeat = vA(A, Pu, t.backgroundRepeat), this.backgroundSize = vA(A, ku, t.backgroundSize), this.borderTopColor = vA(A, Xu, t.borderTopColor), this.borderRightColor = vA(A, Ju, t.borderRightColor), this.borderBottomColor = vA(A, Wu, t.borderBottomColor), this.borderLeftColor = vA(A, Yu, t.borderLeftColor), this.borderTopLeftRadius = vA(A, Zu, t.borderTopLeftRadius), this.borderTopRightRadius = vA(A, zu, t.borderTopRightRadius), this.borderBottomRightRadius = vA(A, qu, t.borderBottomRightRadius), this.borderBottomLeftRadius = vA(A, $u, t.borderBottomLeftRadius), this.borderTopStyle = vA(A, AB, t.borderTopStyle), this.borderRightStyle = vA(A, eB, t.borderRightStyle), this.borderBottomStyle = vA(A, rB, t.borderBottomStyle), this.borderLeftStyle = vA(A, tB, t.borderLeftStyle), this.borderTopWidth = vA(A, nB, t.borderTopWidth), this.borderRightWidth = vA(A, oB, t.borderRightWidth), this.borderBottomWidth = vA(A, iB, t.borderBottomWidth), this.borderLeftWidth = vA(A, aB, t.borderLeftWidth), this.boxShadow = vA(A, Af, t.boxShadow), this.color = vA(A, sB, t.color), this.direction = vA(A, cB, t.direction), this.display = vA(A, uB, t.display), this.float = vA(A, fB, t.cssFloat), this.fontFamily = vA(A, kB, t.fontFamily), this.fontSize = vA(A, jB, t.fontSize), this.fontStyle = vA(A, WB, t.fontStyle), this.fontVariant = vA(A, JB, t.fontVariant), this.fontWeight = vA(A, XB, t.fontWeight), this.letterSpacing = vA(A, lB, t.letterSpacing), this.lineBreak = vA(A, gB, t.lineBreak), this.lineHeight = vA(A, wB, t.lineHeight), this.listStyleImage = vA(A, hB, t.listStyleImage), this.listStylePosition = vA(A, QB, t.listStylePosition), this.listStyleType = vA(A, Lo, t.listStyleType), this.marginTop = vA(A, dB, t.marginTop), this.marginRight = vA(A, pB, t.marginRight), this.marginBottom = vA(A, CB, t.marginBottom), this.marginLeft = vA(A, vB, t.marginLeft), this.opacity = vA(A, GB, t.opacity);
      var s = vA(A, UB, t.overflow);
      this.overflowX = s[0], this.overflowY = s[s.length > 1 ? 1 : 0], this.overflowWrap = vA(A, FB, t.overflowWrap), this.paddingTop = vA(A, yB, t.paddingTop), this.paddingRight = vA(A, EB, t.paddingRight), this.paddingBottom = vA(A, mB, t.paddingBottom), this.paddingLeft = vA(A, IB, t.paddingLeft), this.paintOrder = vA(A, ef, t.paintOrder), this.position = vA(A, bB, t.position), this.textAlign = vA(A, HB, t.textAlign), this.textDecorationColor = vA(A, PB, (r = t.textDecorationColor) !== null && r !== void 0 ? r : t.color), this.textDecorationLine = vA(A, VB, (o = t.textDecorationLine) !== null && o !== void 0 ? o : t.textDecoration), this.textShadow = vA(A, xB, t.textShadow), this.textTransform = vA(A, LB, t.textTransform), this.transform = vA(A, SB, t.transform), this.transformOrigin = vA(A, _B, t.transformOrigin), this.visibility = vA(A, RB, t.visibility), this.webkitTextStrokeColor = vA(A, rf, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = vA(A, tf, t.webkitTextStrokeWidth), this.wordBreak = vA(A, MB, t.wordBreak), this.zIndex = vA(A, NB, t.zIndex);
    }
    return e.prototype.isVisible = function() {
      return this.display > 0 && this.opacity > 0 && this.visibility === 0;
    }, e.prototype.isTransparent = function() {
      return Dr(this.backgroundColor);
    }, e.prototype.isTransformed = function() {
      return this.transform !== null;
    }, e.prototype.isPositioned = function() {
      return this.position !== 0;
    }, e.prototype.isPositionedWithZIndex = function() {
      return this.isPositioned() && !this.zIndex.auto;
    }, e.prototype.isFloating = function() {
      return this.float !== 0;
    }, e.prototype.isInlineLevel = function() {
      return xe(
        this.display,
        4
        /* INLINE */
      ) || xe(
        this.display,
        33554432
        /* INLINE_BLOCK */
      ) || xe(
        this.display,
        268435456
        /* INLINE_FLEX */
      ) || xe(
        this.display,
        536870912
        /* INLINE_GRID */
      ) || xe(
        this.display,
        67108864
        /* INLINE_LIST_ITEM */
      ) || xe(
        this.display,
        134217728
        /* INLINE_TABLE */
      );
    }, e;
  }()
), of = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(A, t) {
      this.content = vA(A, YB, t.content), this.quotes = vA(A, $B, t.quotes);
    }
    return e;
  }()
), Ki = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(A, t) {
      this.counterIncrement = vA(A, ZB, t.counterIncrement), this.counterReset = vA(A, zB, t.counterReset);
    }
    return e;
  }()
), vA = function(e, A, t) {
  var r = new va(), o = t !== null && typeof t < "u" ? t.toString() : A.initialValue;
  r.write(o);
  var s = new Ua(r.read());
  switch (A.type) {
    case 2:
      var l = s.parseComponentValue();
      return A.parse(e, ce(l) ? l.value : A.initialValue);
    case 0:
      return A.parse(e, s.parseComponentValue());
    case 1:
      return A.parse(e, s.parseComponentValues());
    case 4:
      return s.parseComponentValue();
    case 3:
      switch (A.format) {
        case "angle":
          return xn.parse(e, s.parseComponentValue());
        case "color":
          return Or.parse(e, s.parseComponentValue());
        case "image":
          return Vo.parse(e, s.parseComponentValue());
        case "length":
          var i = s.parseComponentValue();
          return Tr(i) ? i : Re;
        case "length-percentage":
          var c = s.parseComponentValue();
          return Ie(c) ? c : Re;
        case "time":
          return Na.parse(e, s.parseComponentValue());
      }
      break;
  }
}, af = "data-html2canvas-debug", sf = function(e) {
  var A = e.getAttribute(af);
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
}, So = function(e, A) {
  var t = sf(e);
  return t === 1 || A === t;
}, dr = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(A, t) {
      if (this.context = A, this.textNodes = [], this.elements = [], this.flags = 0, So(
        t,
        3
        /* PARSE */
      ))
        debugger;
      this.styles = new nf(A, window.getComputedStyle(t, null)), Do(t) && (this.styles.animationDuration.some(function(r) {
        return r > 0;
      }) && (t.style.animationDuration = "0s"), this.styles.transform !== null && (t.style.transform = "none")), this.bounds = Hn(this.context, t), So(
        t,
        4
        /* RENDER */
      ) && (this.flags |= 16);
    }
    return e;
  }()
), cf = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", Oi = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", yt = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var tn = 0; tn < Oi.length; tn++)
  yt[Oi.charCodeAt(tn)] = tn;
var uf = function(e) {
  var A = e.length * 0.75, t = e.length, r, o = 0, s, l, i, c;
  e[e.length - 1] === "=" && (A--, e[e.length - 2] === "=" && A--);
  var n = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A), a = Array.isArray(n) ? n : new Uint8Array(n);
  for (r = 0; r < t; r += 4)
    s = yt[e.charCodeAt(r)], l = yt[e.charCodeAt(r + 1)], i = yt[e.charCodeAt(r + 2)], c = yt[e.charCodeAt(r + 3)], a[o++] = s << 2 | l >> 4, a[o++] = (l & 15) << 4 | i >> 2, a[o++] = (i & 3) << 6 | c & 63;
  return n;
}, Bf = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 2)
    t.push(e[r + 1] << 8 | e[r]);
  return t;
}, ff = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 4)
    t.push(e[r + 3] << 24 | e[r + 2] << 16 | e[r + 1] << 8 | e[r]);
  return t;
}, jr = 5, ko = 11, eo = 2, lf = ko - jr, Ga = 65536 >> jr, gf = 1 << jr, ro = gf - 1, wf = 1024 >> jr, hf = Ga + wf, Qf = hf, df = 32, pf = Qf + df, Cf = 65536 >> ko, vf = 1 << lf, Uf = vf - 1, Di = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint16Array(Array.prototype.slice.call(e, A, t));
}, Ff = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint32Array(Array.prototype.slice.call(e, A, t));
}, yf = function(e, A) {
  var t = uf(e), r = Array.isArray(t) ? ff(t) : new Uint32Array(t), o = Array.isArray(t) ? Bf(t) : new Uint16Array(t), s = 24, l = Di(o, s / 2, r[4] / 2), i = r[5] === 2 ? Di(o, (s + r[4]) / 2) : Ff(r, Math.ceil((s + r[4]) / 4));
  return new Ef(r[0], r[1], r[2], r[3], l, i);
}, Ef = (
  /** @class */
  function() {
    function e(A, t, r, o, s, l) {
      this.initialValue = A, this.errorValue = t, this.highStart = r, this.highValueIndex = o, this.index = s, this.data = l;
    }
    return e.prototype.get = function(A) {
      var t;
      if (A >= 0) {
        if (A < 55296 || A > 56319 && A <= 65535)
          return t = this.index[A >> jr], t = (t << eo) + (A & ro), this.data[t];
        if (A <= 65535)
          return t = this.index[Ga + (A - 55296 >> jr)], t = (t << eo) + (A & ro), this.data[t];
        if (A < this.highStart)
          return t = pf - Cf + (A >> ko), t = this.index[t], t += A >> jr & Uf, t = this.index[t], t = (t << eo) + (A & ro), this.data[t];
        if (A <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, e;
  }()
), Ti = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", mf = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var nn = 0; nn < Ti.length; nn++)
  mf[Ti.charCodeAt(nn)] = nn;
var If = 1, to = 2, no = 3, _i = 4, Ri = 5, Hf = 7, Mi = 8, oo = 9, io = 10, Ni = 11, Gi = 12, Pi = 13, Vi = 14, ao = 15, bf = function(e) {
  for (var A = [], t = 0, r = e.length; t < r; ) {
    var o = e.charCodeAt(t++);
    if (o >= 55296 && o <= 56319 && t < r) {
      var s = e.charCodeAt(t++);
      (s & 64512) === 56320 ? A.push(((o & 1023) << 10) + (s & 1023) + 65536) : (A.push(o), t--);
    } else
      A.push(o);
  }
  return A;
}, xf = function() {
  for (var e = [], A = 0; A < arguments.length; A++)
    e[A] = arguments[A];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, e);
  var t = e.length;
  if (!t)
    return "";
  for (var r = [], o = -1, s = ""; ++o < t; ) {
    var l = e[o];
    l <= 65535 ? r.push(l) : (l -= 65536, r.push((l >> 10) + 55296, l % 1024 + 56320)), (o + 1 === t || r.length > 16384) && (s += String.fromCharCode.apply(String, r), r.length = 0);
  }
  return s;
}, Lf = yf(cf), rr = "×", so = "÷", Sf = function(e) {
  return Lf.get(e);
}, Kf = function(e, A, t) {
  var r = t - 2, o = A[r], s = A[t - 1], l = A[t];
  if (s === to && l === no)
    return rr;
  if (s === to || s === no || s === _i || l === to || l === no || l === _i)
    return so;
  if (s === Mi && [Mi, oo, Ni, Gi].indexOf(l) !== -1 || (s === Ni || s === oo) && (l === oo || l === io) || (s === Gi || s === io) && l === io || l === Pi || l === Ri || l === Hf || s === If)
    return rr;
  if (s === Pi && l === Vi) {
    for (; o === Ri; )
      o = A[--r];
    if (o === Vi)
      return rr;
  }
  if (s === ao && l === ao) {
    for (var i = 0; o === ao; )
      i++, o = A[--r];
    if (i % 2 === 0)
      return rr;
  }
  return so;
}, Of = function(e) {
  var A = bf(e), t = A.length, r = 0, o = 0, s = A.map(Sf);
  return {
    next: function() {
      if (r >= t)
        return { done: !0, value: null };
      for (var l = rr; r < t && (l = Kf(A, s, ++r)) === rr; )
        ;
      if (l !== rr || r === t) {
        var i = xf.apply(null, A.slice(o, r));
        return o = r, { value: i, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, Df = function(e) {
  for (var A = Of(e), t = [], r; !(r = A.next()).done; )
    r.value && t.push(r.value.slice());
  return t;
}, Tf = function(e) {
  var A = 123;
  if (e.createRange) {
    var t = e.createRange();
    if (t.getBoundingClientRect) {
      var r = e.createElement("boundtest");
      r.style.height = A + "px", r.style.display = "block", e.body.appendChild(r), t.selectNode(r);
      var o = t.getBoundingClientRect(), s = Math.round(o.height);
      if (e.body.removeChild(r), s === A)
        return !0;
    }
  }
  return !1;
}, _f = function(e) {
  var A = e.createElement("boundtest");
  A.style.width = "50px", A.style.display = "block", A.style.fontSize = "12px", A.style.letterSpacing = "0px", A.style.wordSpacing = "0px", e.body.appendChild(A);
  var t = e.createRange();
  A.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
  var r = A.firstChild, o = bn(r.data).map(function(c) {
    return Fe(c);
  }), s = 0, l = {}, i = o.every(function(c, n) {
    t.setStart(r, s), t.setEnd(r, s + c.length);
    var a = t.getBoundingClientRect();
    s += c.length;
    var u = a.x > l.x || a.y > l.y;
    return l = a, n === 0 ? !0 : u;
  });
  return e.body.removeChild(A), i;
}, Rf = function() {
  return typeof new Image().crossOrigin < "u";
}, Mf = function() {
  return typeof new XMLHttpRequest().responseType == "string";
}, Nf = function(e) {
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
}, ki = function(e) {
  return e[0] === 0 && e[1] === 255 && e[2] === 0 && e[3] === 255;
}, Gf = function(e) {
  var A = e.createElement("canvas"), t = 100;
  A.width = t, A.height = t;
  var r = A.getContext("2d");
  if (!r)
    return Promise.reject(!1);
  r.fillStyle = "rgb(0, 255, 0)", r.fillRect(0, 0, t, t);
  var o = new Image(), s = A.toDataURL();
  o.src = s;
  var l = Ko(t, t, 0, 0, o);
  return r.fillStyle = "red", r.fillRect(0, 0, t, t), ji(l).then(function(i) {
    r.drawImage(i, 0, 0);
    var c = r.getImageData(0, 0, t, t).data;
    r.fillStyle = "red", r.fillRect(0, 0, t, t);
    var n = e.createElement("div");
    return n.style.backgroundImage = "url(" + s + ")", n.style.height = t + "px", ki(c) ? ji(Ko(t, t, 0, 0, n)) : Promise.reject(!1);
  }).then(function(i) {
    return r.drawImage(i, 0, 0), ki(r.getImageData(0, 0, t, t).data);
  }).catch(function() {
    return !1;
  });
}, Ko = function(e, A, t, r, o) {
  var s = "http://www.w3.org/2000/svg", l = document.createElementNS(s, "svg"), i = document.createElementNS(s, "foreignObject");
  return l.setAttributeNS(null, "width", e.toString()), l.setAttributeNS(null, "height", A.toString()), i.setAttributeNS(null, "width", "100%"), i.setAttributeNS(null, "height", "100%"), i.setAttributeNS(null, "x", t.toString()), i.setAttributeNS(null, "y", r.toString()), i.setAttributeNS(null, "externalResourcesRequired", "true"), l.appendChild(i), i.appendChild(o), l;
}, ji = function(e) {
  return new Promise(function(A, t) {
    var r = new Image();
    r.onload = function() {
      return A(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e));
  });
}, _e = {
  get SUPPORT_RANGE_BOUNDS() {
    var e = Tf(document);
    return Object.defineProperty(_e, "SUPPORT_RANGE_BOUNDS", { value: e }), e;
  },
  get SUPPORT_WORD_BREAKING() {
    var e = _e.SUPPORT_RANGE_BOUNDS && _f(document);
    return Object.defineProperty(_e, "SUPPORT_WORD_BREAKING", { value: e }), e;
  },
  get SUPPORT_SVG_DRAWING() {
    var e = Nf(document);
    return Object.defineProperty(_e, "SUPPORT_SVG_DRAWING", { value: e }), e;
  },
  get SUPPORT_FOREIGNOBJECT_DRAWING() {
    var e = typeof Array.from == "function" && typeof window.fetch == "function" ? Gf(document) : Promise.resolve(!1);
    return Object.defineProperty(_e, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: e }), e;
  },
  get SUPPORT_CORS_IMAGES() {
    var e = Rf();
    return Object.defineProperty(_e, "SUPPORT_CORS_IMAGES", { value: e }), e;
  },
  get SUPPORT_RESPONSE_TYPE() {
    var e = Mf();
    return Object.defineProperty(_e, "SUPPORT_RESPONSE_TYPE", { value: e }), e;
  },
  get SUPPORT_CORS_XHR() {
    var e = "withCredentials" in new XMLHttpRequest();
    return Object.defineProperty(_e, "SUPPORT_CORS_XHR", { value: e }), e;
  },
  get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
    var e = !!(typeof Intl < "u" && Intl.Segmenter);
    return Object.defineProperty(_e, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value: e }), e;
  }
}, bt = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(A, t) {
      this.text = A, this.bounds = t;
    }
    return e;
  }()
), Pf = function(e, A, t, r) {
  var o = jf(A, t), s = [], l = 0;
  return o.forEach(function(i) {
    if (t.textDecorationLine.length || i.trim().length > 0)
      if (_e.SUPPORT_RANGE_BOUNDS) {
        var c = Xi(r, l, i.length).getClientRects();
        if (c.length > 1) {
          var n = jo(i), a = 0;
          n.forEach(function(B) {
            s.push(new bt(B, mr.fromDOMRectList(e, Xi(r, a + l, B.length).getClientRects()))), a += B.length;
          });
        } else
          s.push(new bt(i, mr.fromDOMRectList(e, c)));
      } else {
        var u = r.splitText(i.length);
        s.push(new bt(i, Vf(e, r))), r = u;
      }
    else
      _e.SUPPORT_RANGE_BOUNDS || (r = r.splitText(i.length));
    l += i.length;
  }), s;
}, Vf = function(e, A) {
  var t = A.ownerDocument;
  if (t) {
    var r = t.createElement("html2canvaswrapper");
    r.appendChild(A.cloneNode(!0));
    var o = A.parentNode;
    if (o) {
      o.replaceChild(r, A);
      var s = Hn(e, r);
      return r.firstChild && o.replaceChild(r.firstChild, r), s;
    }
  }
  return mr.EMPTY;
}, Xi = function(e, A, t) {
  var r = e.ownerDocument;
  if (!r)
    throw new Error("Node has no owner document");
  var o = r.createRange();
  return o.setStart(e, A), o.setEnd(e, A + t), o;
}, jo = function(e) {
  if (_e.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var A = new Intl.Segmenter(void 0, { granularity: "grapheme" });
    return Array.from(A.segment(e)).map(function(t) {
      return t.segment;
    });
  }
  return Df(e);
}, kf = function(e, A) {
  if (_e.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var t = new Intl.Segmenter(void 0, {
      granularity: "word"
    });
    return Array.from(t.segment(e)).map(function(r) {
      return r.segment;
    });
  }
  return Jf(e, A);
}, jf = function(e, A) {
  return A.letterSpacing !== 0 ? jo(e) : kf(e, A);
}, Xf = [32, 160, 4961, 65792, 65793, 4153, 4241], Jf = function(e, A) {
  for (var t = pc(e, {
    lineBreak: A.lineBreak,
    wordBreak: A.overflowWrap === "break-word" ? "break-word" : A.wordBreak
  }), r = [], o, s = function() {
    if (o.value) {
      var l = o.value.slice(), i = bn(l), c = "";
      i.forEach(function(n) {
        Xf.indexOf(n) === -1 ? c += Fe(n) : (c.length && r.push(c), r.push(Fe(n)), c = "");
      }), c.length && r.push(c);
    }
  }; !(o = t.next()).done; )
    s();
  return r;
}, Wf = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(A, t, r) {
      this.text = Yf(t.data, r.textTransform), this.textBounds = Pf(A, this.text, r, t);
    }
    return e;
  }()
), Yf = function(e, A) {
  switch (A) {
    case 1:
      return e.toLowerCase();
    case 3:
      return e.replace(Zf, zf);
    case 2:
      return e.toUpperCase();
    default:
      return e;
  }
}, Zf = /(^|\s|:|-|\(|\))([a-z])/g, zf = function(e, A, t) {
  return e.length > 0 ? A + t.toUpperCase() : e;
}, Pa = (
  /** @class */
  function(e) {
    lr(A, e);
    function A(t, r) {
      var o = e.call(this, t, r) || this;
      return o.src = r.currentSrc || r.src, o.intrinsicWidth = r.naturalWidth, o.intrinsicHeight = r.naturalHeight, o.context.cache.addImage(o.src), o;
    }
    return A;
  }(dr)
), Va = (
  /** @class */
  function(e) {
    lr(A, e);
    function A(t, r) {
      var o = e.call(this, t, r) || this;
      return o.canvas = r, o.intrinsicWidth = r.width, o.intrinsicHeight = r.height, o;
    }
    return A;
  }(dr)
), ka = (
  /** @class */
  function(e) {
    lr(A, e);
    function A(t, r) {
      var o = e.call(this, t, r) || this, s = new XMLSerializer(), l = Hn(t, r);
      return r.setAttribute("width", l.width + "px"), r.setAttribute("height", l.height + "px"), o.svg = "data:image/svg+xml," + encodeURIComponent(s.serializeToString(r)), o.intrinsicWidth = r.width.baseVal.value, o.intrinsicHeight = r.height.baseVal.value, o.context.cache.addImage(o.svg), o;
    }
    return A;
  }(dr)
), ja = (
  /** @class */
  function(e) {
    lr(A, e);
    function A(t, r) {
      var o = e.call(this, t, r) || this;
      return o.value = r.value, o;
    }
    return A;
  }(dr)
), Oo = (
  /** @class */
  function(e) {
    lr(A, e);
    function A(t, r) {
      var o = e.call(this, t, r) || this;
      return o.start = r.start, o.reversed = typeof r.reversed == "boolean" && r.reversed === !0, o;
    }
    return A;
  }(dr)
), qf = [
  {
    type: 15,
    flags: 0,
    unit: "px",
    number: 3
  }
], $f = [
  {
    type: 16,
    flags: 0,
    number: 50
  }
], Al = function(e) {
  return e.width > e.height ? new mr(e.left + (e.width - e.height) / 2, e.top, e.height, e.height) : e.width < e.height ? new mr(e.left, e.top + (e.height - e.width) / 2, e.width, e.width) : e;
}, el = function(e) {
  var A = e.type === rl ? new Array(e.value.length + 1).join("•") : e.value;
  return A.length === 0 ? e.placeholder || "" : A;
}, Cn = "checkbox", vn = "radio", rl = "password", Ji = 707406591, Xo = (
  /** @class */
  function(e) {
    lr(A, e);
    function A(t, r) {
      var o = e.call(this, t, r) || this;
      switch (o.type = r.type.toLowerCase(), o.checked = r.checked, o.value = el(r), (o.type === Cn || o.type === vn) && (o.styles.backgroundColor = 3739148031, o.styles.borderTopColor = o.styles.borderRightColor = o.styles.borderBottomColor = o.styles.borderLeftColor = 2779096575, o.styles.borderTopWidth = o.styles.borderRightWidth = o.styles.borderBottomWidth = o.styles.borderLeftWidth = 1, o.styles.borderTopStyle = o.styles.borderRightStyle = o.styles.borderBottomStyle = o.styles.borderLeftStyle = 1, o.styles.backgroundClip = [
        0
        /* BORDER_BOX */
      ], o.styles.backgroundOrigin = [
        0
        /* BORDER_BOX */
      ], o.bounds = Al(o.bounds)), o.type) {
        case Cn:
          o.styles.borderTopRightRadius = o.styles.borderTopLeftRadius = o.styles.borderBottomRightRadius = o.styles.borderBottomLeftRadius = qf;
          break;
        case vn:
          o.styles.borderTopRightRadius = o.styles.borderTopLeftRadius = o.styles.borderBottomRightRadius = o.styles.borderBottomLeftRadius = $f;
          break;
      }
      return o;
    }
    return A;
  }(dr)
), Xa = (
  /** @class */
  function(e) {
    lr(A, e);
    function A(t, r) {
      var o = e.call(this, t, r) || this, s = r.options[r.selectedIndex || 0];
      return o.value = s && s.text || "", o;
    }
    return A;
  }(dr)
), Ja = (
  /** @class */
  function(e) {
    lr(A, e);
    function A(t, r) {
      var o = e.call(this, t, r) || this;
      return o.value = r.value, o;
    }
    return A;
  }(dr)
), Wa = (
  /** @class */
  function(e) {
    lr(A, e);
    function A(t, r) {
      var o = e.call(this, t, r) || this;
      o.src = r.src, o.width = parseInt(r.width, 10) || 0, o.height = parseInt(r.height, 10) || 0, o.backgroundColor = o.styles.backgroundColor;
      try {
        if (r.contentWindow && r.contentWindow.document && r.contentWindow.document.documentElement) {
          o.tree = Za(t, r.contentWindow.document.documentElement);
          var s = r.contentWindow.document.documentElement ? It(t, getComputedStyle(r.contentWindow.document.documentElement).backgroundColor) : Er.TRANSPARENT, l = r.contentWindow.document.body ? It(t, getComputedStyle(r.contentWindow.document.body).backgroundColor) : Er.TRANSPARENT;
          o.backgroundColor = Dr(s) ? Dr(l) ? o.styles.backgroundColor : l : s;
        }
      } catch {
      }
      return o;
    }
    return A;
  }(dr)
), tl = ["OL", "UL", "MENU"], ln = function(e, A, t, r) {
  for (var o = A.firstChild, s = void 0; o; o = s)
    if (s = o.nextSibling, za(o) && o.data.trim().length > 0)
      t.textNodes.push(new Wf(e, o, t.styles));
    else if (it(o))
      if (es(o) && o.assignedNodes)
        o.assignedNodes().forEach(function(i) {
          return ln(e, i, t, r);
        });
      else {
        var l = Ya(e, o);
        l.styles.isVisible() && (nl(o, l, r) ? l.flags |= 4 : ol(l.styles) && (l.flags |= 2), tl.indexOf(o.tagName) !== -1 && (l.flags |= 8), t.elements.push(l), o.slot, o.shadowRoot ? ln(e, o.shadowRoot, l, r) : !Un(o) && !qa(o) && !Fn(o) && ln(e, o, l, r));
      }
}, Ya = function(e, A) {
  return To(A) ? new Pa(e, A) : $a(A) ? new Va(e, A) : qa(A) ? new ka(e, A) : il(A) ? new ja(e, A) : al(A) ? new Oo(e, A) : sl(A) ? new Xo(e, A) : Fn(A) ? new Xa(e, A) : Un(A) ? new Ja(e, A) : As(A) ? new Wa(e, A) : new dr(e, A);
}, Za = function(e, A) {
  var t = Ya(e, A);
  return t.flags |= 4, ln(e, A, t, t), t;
}, nl = function(e, A, t) {
  return A.styles.isPositionedWithZIndex() || A.styles.opacity < 1 || A.styles.isTransformed() || Jo(e) && t.styles.isTransparent();
}, ol = function(e) {
  return e.isPositioned() || e.isFloating();
}, za = function(e) {
  return e.nodeType === Node.TEXT_NODE;
}, it = function(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}, Do = function(e) {
  return it(e) && typeof e.style < "u" && !gn(e);
}, gn = function(e) {
  return typeof e.className == "object";
}, il = function(e) {
  return e.tagName === "LI";
}, al = function(e) {
  return e.tagName === "OL";
}, sl = function(e) {
  return e.tagName === "INPUT";
}, cl = function(e) {
  return e.tagName === "HTML";
}, qa = function(e) {
  return e.tagName === "svg";
}, Jo = function(e) {
  return e.tagName === "BODY";
}, $a = function(e) {
  return e.tagName === "CANVAS";
}, Wi = function(e) {
  return e.tagName === "VIDEO";
}, To = function(e) {
  return e.tagName === "IMG";
}, As = function(e) {
  return e.tagName === "IFRAME";
}, Yi = function(e) {
  return e.tagName === "STYLE";
}, ul = function(e) {
  return e.tagName === "SCRIPT";
}, Un = function(e) {
  return e.tagName === "TEXTAREA";
}, Fn = function(e) {
  return e.tagName === "SELECT";
}, es = function(e) {
  return e.tagName === "SLOT";
}, Zi = function(e) {
  return e.tagName.indexOf("-") > 0;
}, Bl = (
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
      var t = this, r = A.counterIncrement, o = A.counterReset, s = !0;
      r !== null && r.forEach(function(i) {
        var c = t.counters[i.counter];
        c && i.increment !== 0 && (s = !1, c.length || c.push(1), c[Math.max(0, c.length - 1)] += i.increment);
      });
      var l = [];
      return s && o.forEach(function(i) {
        var c = t.counters[i.counter];
        l.push(i.counter), c || (c = t.counters[i.counter] = []), c.push(i.reset);
      }), l;
    }, e;
  }()
), zi = {
  integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
  values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
}, qi = {
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
}, fl = {
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
}, ll = {
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
}, et = function(e, A, t, r, o, s) {
  return e < A || e > t ? Kt(e, o, s.length > 0) : r.integers.reduce(function(l, i, c) {
    for (; e >= i; )
      e -= i, l += r.values[c];
    return l;
  }, "") + s;
}, rs = function(e, A, t, r) {
  var o = "";
  do
    t || e--, o = r(e) + o, e /= A;
  while (e * A >= A);
  return o;
}, Ue = function(e, A, t, r, o) {
  var s = t - A + 1;
  return (e < 0 ? "-" : "") + (rs(Math.abs(e), s, r, function(l) {
    return Fe(Math.floor(l % s) + A);
  }) + o);
}, Gr = function(e, A, t) {
  t === void 0 && (t = ". ");
  var r = A.length;
  return rs(Math.abs(e), r, !1, function(o) {
    return A[Math.floor(o % r)];
  }) + t;
}, nt = 1, Hr = 2, br = 4, Et = 8, Fr = function(e, A, t, r, o, s) {
  if (e < -9999 || e > 9999)
    return Kt(e, 4, o.length > 0);
  var l = Math.abs(e), i = o;
  if (l === 0)
    return A[0] + i;
  for (var c = 0; l > 0 && c <= 4; c++) {
    var n = l % 10;
    n === 0 && xe(s, nt) && i !== "" ? i = A[n] + i : n > 1 || n === 1 && c === 0 || n === 1 && c === 1 && xe(s, Hr) || n === 1 && c === 1 && xe(s, br) && e > 100 || n === 1 && c > 1 && xe(s, Et) ? i = A[n] + (c > 0 ? t[c - 1] : "") + i : n === 1 && c > 0 && (i = t[c - 1] + i), l = Math.floor(l / 10);
  }
  return (e < 0 ? r : "") + i;
}, $i = "十百千萬", Aa = "拾佰仟萬", ea = "マイナス", co = "마이너스", Kt = function(e, A, t) {
  var r = t ? ". " : "", o = t ? "、" : "", s = t ? ", " : "", l = t ? " " : "";
  switch (A) {
    case 0:
      return "•" + l;
    case 1:
      return "◦" + l;
    case 2:
      return "◾" + l;
    case 5:
      var i = Ue(e, 48, 57, !0, r);
      return i.length < 4 ? "0" + i : i;
    case 4:
      return Gr(e, "〇一二三四五六七八九", o);
    case 6:
      return et(e, 1, 3999, zi, 3, r).toLowerCase();
    case 7:
      return et(e, 1, 3999, zi, 3, r);
    case 8:
      return Ue(e, 945, 969, !1, r);
    case 9:
      return Ue(e, 97, 122, !1, r);
    case 10:
      return Ue(e, 65, 90, !1, r);
    case 11:
      return Ue(e, 1632, 1641, !0, r);
    case 12:
    case 49:
      return et(e, 1, 9999, qi, 3, r);
    case 35:
      return et(e, 1, 9999, qi, 3, r).toLowerCase();
    case 13:
      return Ue(e, 2534, 2543, !0, r);
    case 14:
    case 30:
      return Ue(e, 6112, 6121, !0, r);
    case 15:
      return Gr(e, "子丑寅卯辰巳午未申酉戌亥", o);
    case 16:
      return Gr(e, "甲乙丙丁戊己庚辛壬癸", o);
    case 17:
    case 48:
      return Fr(e, "零一二三四五六七八九", $i, "負", o, Hr | br | Et);
    case 47:
      return Fr(e, "零壹貳參肆伍陸柒捌玖", Aa, "負", o, nt | Hr | br | Et);
    case 42:
      return Fr(e, "零一二三四五六七八九", $i, "负", o, Hr | br | Et);
    case 41:
      return Fr(e, "零壹贰叁肆伍陆柒捌玖", Aa, "负", o, nt | Hr | br | Et);
    case 26:
      return Fr(e, "〇一二三四五六七八九", "十百千万", ea, o, 0);
    case 25:
      return Fr(e, "零壱弐参四伍六七八九", "拾百千万", ea, o, nt | Hr | br);
    case 31:
      return Fr(e, "영일이삼사오육칠팔구", "십백천만", co, s, nt | Hr | br);
    case 33:
      return Fr(e, "零一二三四五六七八九", "十百千萬", co, s, 0);
    case 32:
      return Fr(e, "零壹貳參四五六七八九", "拾百千", co, s, nt | Hr | br);
    case 18:
      return Ue(e, 2406, 2415, !0, r);
    case 20:
      return et(e, 1, 19999, ll, 3, r);
    case 21:
      return Ue(e, 2790, 2799, !0, r);
    case 22:
      return Ue(e, 2662, 2671, !0, r);
    case 22:
      return et(e, 1, 10999, fl, 3, r);
    case 23:
      return Gr(e, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
    case 24:
      return Gr(e, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
    case 27:
      return Ue(e, 3302, 3311, !0, r);
    case 28:
      return Gr(e, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", o);
    case 29:
      return Gr(e, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", o);
    case 34:
      return Ue(e, 3792, 3801, !0, r);
    case 37:
      return Ue(e, 6160, 6169, !0, r);
    case 38:
      return Ue(e, 4160, 4169, !0, r);
    case 39:
      return Ue(e, 2918, 2927, !0, r);
    case 40:
      return Ue(e, 1776, 1785, !0, r);
    case 43:
      return Ue(e, 3046, 3055, !0, r);
    case 44:
      return Ue(e, 3174, 3183, !0, r);
    case 45:
      return Ue(e, 3664, 3673, !0, r);
    case 46:
      return Ue(e, 3872, 3881, !0, r);
    case 3:
    default:
      return Ue(e, 48, 57, !0, r);
  }
}, ts = "data-html2canvas-ignore", ra = (
  /** @class */
  function() {
    function e(A, t, r) {
      if (this.context = A, this.options = r, this.scrolledElements = [], this.referenceElement = t, this.counters = new Bl(), this.quoteDepth = 0, !t.ownerDocument)
        throw new Error("Cloned element does not have an owner document");
      this.documentElement = this.cloneNode(t.ownerDocument.documentElement, !1);
    }
    return e.prototype.toIFrame = function(A, t) {
      var r = this, o = gl(A, t);
      if (!o.contentWindow)
        return Promise.reject("Unable to find iframe window");
      var s = A.defaultView.pageXOffset, l = A.defaultView.pageYOffset, i = o.contentWindow, c = i.document, n = Ql(o).then(function() {
        return je(r, void 0, void 0, function() {
          var a, u;
          return Ne(this, function(B) {
            switch (B.label) {
              case 0:
                return this.scrolledElements.forEach(vl), i && (i.scrollTo(t.left, t.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (i.scrollY !== t.top || i.scrollX !== t.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(i.scrollX - t.left, i.scrollY - t.top, 0, 0))), a = this.options.onclone, u = this.clonedReferenceElement, typeof u > "u" ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : c.fonts && c.fonts.ready ? [4, c.fonts.ready] : [3, 2];
              case 1:
                B.sent(), B.label = 2;
              case 2:
                return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, hl(c)] : [3, 4];
              case 3:
                B.sent(), B.label = 4;
              case 4:
                return typeof a == "function" ? [2, Promise.resolve().then(function() {
                  return a(c, u);
                }).then(function() {
                  return o;
                })] : [2, o];
            }
          });
        });
      });
      return c.open(), c.write(pl(document.doctype) + "<html></html>"), Cl(this.referenceElement.ownerDocument, s, l), c.replaceChild(c.adoptNode(this.documentElement), c.documentElement), c.close(), n;
    }, e.prototype.createElementClone = function(A) {
      if (So(
        A,
        2
        /* CLONE */
      ))
        debugger;
      if ($a(A))
        return this.createCanvasClone(A);
      if (Wi(A))
        return this.createVideoClone(A);
      if (Yi(A))
        return this.createStyleClone(A);
      var t = A.cloneNode(!1);
      return To(t) && (To(A) && A.currentSrc && A.currentSrc !== A.src && (t.src = A.currentSrc, t.srcset = ""), t.loading === "lazy" && (t.loading = "eager")), Zi(t) ? this.createCustomElementClone(t) : t;
    }, e.prototype.createCustomElementClone = function(A) {
      var t = document.createElement("html2canvascustomelement");
      return uo(A.style, t), t;
    }, e.prototype.createStyleClone = function(A) {
      try {
        var t = A.sheet;
        if (t && t.cssRules) {
          var r = [].slice.call(t.cssRules, 0).reduce(function(s, l) {
            return l && typeof l.cssText == "string" ? s + l.cssText : s;
          }, ""), o = A.cloneNode(!1);
          return o.textContent = r, o;
        }
      } catch (s) {
        if (this.context.logger.error("Unable to access cssRules property", s), s.name !== "SecurityError")
          throw s;
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
        var s = A.getContext("2d"), l = o.getContext("2d");
        if (l)
          if (!this.options.allowTaint && s)
            l.putImageData(s.getImageData(0, 0, A.width, A.height), 0, 0);
          else {
            var i = (t = A.getContext("webgl2")) !== null && t !== void 0 ? t : A.getContext("webgl");
            if (i) {
              var c = i.getContextAttributes();
              (c == null ? void 0 : c.preserveDrawingBuffer) === !1 && this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", A);
            }
            l.drawImage(A, 0, 0);
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
      (!it(t) || !ul(t) && !t.hasAttribute(ts) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(t))) && (!this.options.copyStyles || !it(t) || !Yi(t)) && A.appendChild(this.cloneNode(t, r));
    }, e.prototype.cloneChildNodes = function(A, t, r) {
      for (var o = this, s = A.shadowRoot ? A.shadowRoot.firstChild : A.firstChild; s; s = s.nextSibling)
        if (it(s) && es(s) && typeof s.assignedNodes == "function") {
          var l = s.assignedNodes();
          l.length && l.forEach(function(i) {
            return o.appendChildNode(t, i, r);
          });
        } else
          this.appendChildNode(t, s, r);
    }, e.prototype.cloneNode = function(A, t) {
      if (za(A))
        return document.createTextNode(A.data);
      if (!A.ownerDocument)
        return A.cloneNode(!1);
      var r = A.ownerDocument.defaultView;
      if (r && it(A) && (Do(A) || gn(A))) {
        var o = this.createElementClone(A);
        o.style.transitionProperty = "none";
        var s = r.getComputedStyle(A), l = r.getComputedStyle(A, ":before"), i = r.getComputedStyle(A, ":after");
        this.referenceElement === A && Do(o) && (this.clonedReferenceElement = o), Jo(o) && yl(o);
        var c = this.counters.parse(new Ki(this.context, s)), n = this.resolvePseudoContent(A, o, l, xt.BEFORE);
        Zi(A) && (t = !0), Wi(A) || this.cloneChildNodes(A, o, t), n && o.insertBefore(n, o.firstChild);
        var a = this.resolvePseudoContent(A, o, i, xt.AFTER);
        return a && o.appendChild(a), this.counters.pop(c), (s && (this.options.copyStyles || gn(A)) && !As(A) || t) && uo(s, o), (A.scrollTop !== 0 || A.scrollLeft !== 0) && this.scrolledElements.push([o, A.scrollLeft, A.scrollTop]), (Un(A) || Fn(A)) && (Un(o) || Fn(o)) && (o.value = A.value), o;
      }
      return A.cloneNode(!1);
    }, e.prototype.resolvePseudoContent = function(A, t, r, o) {
      var s = this;
      if (r) {
        var l = r.content, i = t.ownerDocument;
        if (!(!i || !l || l === "none" || l === "-moz-alt-content" || r.display === "none")) {
          this.counters.parse(new Ki(this.context, r));
          var c = new of(this.context, r), n = i.createElement("html2canvaspseudoelement");
          uo(r, n), c.content.forEach(function(u) {
            if (u.type === 0)
              n.appendChild(i.createTextNode(u.value));
            else if (u.type === 22) {
              var B = i.createElement("img");
              B.src = u.value, B.style.opacity = "1", n.appendChild(B);
            } else if (u.type === 18) {
              if (u.name === "attr") {
                var f = u.values.filter(ce);
                f.length && n.appendChild(i.createTextNode(A.getAttribute(f[0].value) || ""));
              } else if (u.name === "counter") {
                var w = u.values.filter(st), d = w[0], Q = w[1];
                if (d && ce(d)) {
                  var C = s.counters.getCounterValue(d.value), v = Q && ce(Q) ? Lo.parse(s.context, Q.value) : 3;
                  n.appendChild(i.createTextNode(Kt(C, v, !1)));
                }
              } else if (u.name === "counters") {
                var m = u.values.filter(st), d = m[0], b = m[1], Q = m[2];
                if (d && ce(d)) {
                  var D = s.counters.getCounterValues(d.value), L = Q && ce(Q) ? Lo.parse(s.context, Q.value) : 3, N = b && b.type === 0 ? b.value : "", V = D.map(function(P) {
                    return Kt(P, L, !1);
                  }).join(N);
                  n.appendChild(i.createTextNode(V));
                }
              }
            } else if (u.type === 20)
              switch (u.value) {
                case "open-quote":
                  n.appendChild(i.createTextNode(Si(c.quotes, s.quoteDepth++, !0)));
                  break;
                case "close-quote":
                  n.appendChild(i.createTextNode(Si(c.quotes, --s.quoteDepth, !1)));
                  break;
                default:
                  n.appendChild(i.createTextNode(u.value));
              }
          }), n.className = _o + " " + Ro;
          var a = o === xt.BEFORE ? " " + _o : " " + Ro;
          return gn(t) ? t.className.baseValue += a : t.className += a, n;
        }
      }
    }, e.destroy = function(A) {
      return A.parentNode ? (A.parentNode.removeChild(A), !0) : !1;
    }, e;
  }()
), xt;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(xt || (xt = {}));
var gl = function(e, A) {
  var t = e.createElement("iframe");
  return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = A.width.toString(), t.height = A.height.toString(), t.scrolling = "no", t.setAttribute(ts, "true"), e.body.appendChild(t), t;
}, wl = function(e) {
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
}, hl = function(e) {
  return Promise.all([].slice.call(e.images, 0).map(wl));
}, Ql = function(e) {
  return new Promise(function(A, t) {
    var r = e.contentWindow;
    if (!r)
      return t("No window assigned for iframe");
    var o = r.document;
    r.onload = e.onload = function() {
      r.onload = e.onload = null;
      var s = setInterval(function() {
        o.body.childNodes.length > 0 && o.readyState === "complete" && (clearInterval(s), A(e));
      }, 50);
    };
  });
}, dl = [
  "all",
  "d",
  "content"
  // Safari shows pseudoelements if content is set
], uo = function(e, A) {
  for (var t = e.length - 1; t >= 0; t--) {
    var r = e.item(t);
    dl.indexOf(r) === -1 && A.style.setProperty(r, e.getPropertyValue(r));
  }
  return A;
}, pl = function(e) {
  var A = "";
  return e && (A += "<!DOCTYPE ", e.name && (A += e.name), e.internalSubset && (A += e.internalSubset), e.publicId && (A += '"' + e.publicId + '"'), e.systemId && (A += '"' + e.systemId + '"'), A += ">"), A;
}, Cl = function(e, A, t) {
  e && e.defaultView && (A !== e.defaultView.pageXOffset || t !== e.defaultView.pageYOffset) && e.defaultView.scrollTo(A, t);
}, vl = function(e) {
  var A = e[0], t = e[1], r = e[2];
  A.scrollLeft = t, A.scrollTop = r;
}, Ul = ":before", Fl = ":after", _o = "___html2canvas___pseudoelement_before", Ro = "___html2canvas___pseudoelement_after", ta = `{
    content: "" !important;
    display: none !important;
}`, yl = function(e) {
  El(e, "." + _o + Ul + ta + `
         .` + Ro + Fl + ta);
}, El = function(e, A) {
  var t = e.ownerDocument;
  if (t) {
    var r = t.createElement("style");
    r.textContent = A, e.appendChild(r);
  }
}, ns = (
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
), ml = (
  /** @class */
  function() {
    function e(A, t) {
      this.context = A, this._options = t, this._cache = {};
    }
    return e.prototype.addImage = function(A) {
      var t = Promise.resolve();
      return this.has(A) || (fo(A) || xl(A)) && (this._cache[A] = this.loadImage(A)).catch(function() {
      }), t;
    }, e.prototype.match = function(A) {
      return this._cache[A];
    }, e.prototype.loadImage = function(A) {
      return je(this, void 0, void 0, function() {
        var t, r, o, s, l = this;
        return Ne(this, function(i) {
          switch (i.label) {
            case 0:
              return t = ns.isSameOrigin(A), r = !Bo(A) && this._options.useCORS === !0 && _e.SUPPORT_CORS_IMAGES && !t, o = !Bo(A) && !t && !fo(A) && typeof this._options.proxy == "string" && _e.SUPPORT_CORS_XHR && !r, !t && this._options.allowTaint === !1 && !Bo(A) && !fo(A) && !o && !r ? [
                2
                /*return*/
              ] : (s = A, o ? [4, this.proxy(s)] : [3, 2]);
            case 1:
              s = i.sent(), i.label = 2;
            case 2:
              return this.context.logger.debug("Added image " + A.substring(0, 256)), [4, new Promise(function(c, n) {
                var a = new Image();
                a.onload = function() {
                  return c(a);
                }, a.onerror = n, (Ll(s) || r) && (a.crossOrigin = "anonymous"), a.src = s, a.complete === !0 && setTimeout(function() {
                  return c(a);
                }, 500), l._options.imageTimeout > 0 && setTimeout(function() {
                  return n("Timed out (" + l._options.imageTimeout + "ms) loading image");
                }, l._options.imageTimeout);
              })];
            case 3:
              return [2, i.sent()];
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
      return new Promise(function(s, l) {
        var i = _e.SUPPORT_RESPONSE_TYPE ? "blob" : "text", c = new XMLHttpRequest();
        c.onload = function() {
          if (c.status === 200)
            if (i === "text")
              s(c.response);
            else {
              var u = new FileReader();
              u.addEventListener("load", function() {
                return s(u.result);
              }, !1), u.addEventListener("error", function(B) {
                return l(B);
              }, !1), u.readAsDataURL(c.response);
            }
          else
            l("Failed to proxy resource " + o + " with status code " + c.status);
        }, c.onerror = l;
        var n = r.indexOf("?") > -1 ? "&" : "?";
        if (c.open("GET", "" + r + n + "url=" + encodeURIComponent(A) + "&responseType=" + i), i !== "text" && c instanceof XMLHttpRequest && (c.responseType = i), t._options.imageTimeout) {
          var a = t._options.imageTimeout;
          c.timeout = a, c.ontimeout = function() {
            return l("Timed out (" + a + "ms) proxying " + o);
          };
        }
        c.send();
      });
    }, e;
  }()
), Il = /^data:image\/svg\+xml/i, Hl = /^data:image\/.*;base64,/i, bl = /^data:image\/.*/i, xl = function(e) {
  return _e.SUPPORT_SVG_DRAWING || !Sl(e);
}, Bo = function(e) {
  return bl.test(e);
}, Ll = function(e) {
  return Hl.test(e);
}, fo = function(e) {
  return e.substr(0, 4) === "blob";
}, Sl = function(e) {
  return e.substr(-3).toLowerCase() === "svg" || Il.test(e);
}, pA = (
  /** @class */
  function() {
    function e(A, t) {
      this.type = 0, this.x = A, this.y = t;
    }
    return e.prototype.add = function(A, t) {
      return new e(this.x + A, this.y + t);
    }, e;
  }()
), rt = function(e, A, t) {
  return new pA(e.x + (A.x - e.x) * t, e.y + (A.y - e.y) * t);
}, on = (
  /** @class */
  function() {
    function e(A, t, r, o) {
      this.type = 1, this.start = A, this.startControl = t, this.endControl = r, this.end = o;
    }
    return e.prototype.subdivide = function(A, t) {
      var r = rt(this.start, this.startControl, A), o = rt(this.startControl, this.endControl, A), s = rt(this.endControl, this.end, A), l = rt(r, o, A), i = rt(o, s, A), c = rt(l, i, A);
      return t ? new e(this.start, r, l, c) : new e(c, i, s, this.end);
    }, e.prototype.add = function(A, t) {
      return new e(this.start.add(A, t), this.startControl.add(A, t), this.endControl.add(A, t), this.end.add(A, t));
    }, e.prototype.reverse = function() {
      return new e(this.end, this.endControl, this.startControl, this.start);
    }, e;
  }()
), tr = function(e) {
  return e.type === 1;
}, Kl = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(A) {
      var t = A.styles, r = A.bounds, o = Ft(t.borderTopLeftRadius, r.width, r.height), s = o[0], l = o[1], i = Ft(t.borderTopRightRadius, r.width, r.height), c = i[0], n = i[1], a = Ft(t.borderBottomRightRadius, r.width, r.height), u = a[0], B = a[1], f = Ft(t.borderBottomLeftRadius, r.width, r.height), w = f[0], d = f[1], Q = [];
      Q.push((s + c) / r.width), Q.push((w + u) / r.width), Q.push((l + d) / r.height), Q.push((n + B) / r.height);
      var C = Math.max.apply(Math, Q);
      C > 1 && (s /= C, l /= C, c /= C, n /= C, u /= C, B /= C, w /= C, d /= C);
      var v = r.width - c, m = r.height - B, b = r.width - u, D = r.height - d, L = t.borderTopWidth, N = t.borderRightWidth, V = t.borderBottomWidth, H = t.borderLeftWidth, j = ge(t.paddingTop, A.bounds.width), P = ge(t.paddingRight, A.bounds.width), X = ge(t.paddingBottom, A.bounds.width), x = ge(t.paddingLeft, A.bounds.width);
      this.topLeftBorderDoubleOuterBox = s > 0 || l > 0 ? Qe(r.left + H / 3, r.top + L / 3, s - H / 3, l - L / 3, re.TOP_LEFT) : new pA(r.left + H / 3, r.top + L / 3), this.topRightBorderDoubleOuterBox = s > 0 || l > 0 ? Qe(r.left + v, r.top + L / 3, c - N / 3, n - L / 3, re.TOP_RIGHT) : new pA(r.left + r.width - N / 3, r.top + L / 3), this.bottomRightBorderDoubleOuterBox = u > 0 || B > 0 ? Qe(r.left + b, r.top + m, u - N / 3, B - V / 3, re.BOTTOM_RIGHT) : new pA(r.left + r.width - N / 3, r.top + r.height - V / 3), this.bottomLeftBorderDoubleOuterBox = w > 0 || d > 0 ? Qe(r.left + H / 3, r.top + D, w - H / 3, d - V / 3, re.BOTTOM_LEFT) : new pA(r.left + H / 3, r.top + r.height - V / 3), this.topLeftBorderDoubleInnerBox = s > 0 || l > 0 ? Qe(r.left + H * 2 / 3, r.top + L * 2 / 3, s - H * 2 / 3, l - L * 2 / 3, re.TOP_LEFT) : new pA(r.left + H * 2 / 3, r.top + L * 2 / 3), this.topRightBorderDoubleInnerBox = s > 0 || l > 0 ? Qe(r.left + v, r.top + L * 2 / 3, c - N * 2 / 3, n - L * 2 / 3, re.TOP_RIGHT) : new pA(r.left + r.width - N * 2 / 3, r.top + L * 2 / 3), this.bottomRightBorderDoubleInnerBox = u > 0 || B > 0 ? Qe(r.left + b, r.top + m, u - N * 2 / 3, B - V * 2 / 3, re.BOTTOM_RIGHT) : new pA(r.left + r.width - N * 2 / 3, r.top + r.height - V * 2 / 3), this.bottomLeftBorderDoubleInnerBox = w > 0 || d > 0 ? Qe(r.left + H * 2 / 3, r.top + D, w - H * 2 / 3, d - V * 2 / 3, re.BOTTOM_LEFT) : new pA(r.left + H * 2 / 3, r.top + r.height - V * 2 / 3), this.topLeftBorderStroke = s > 0 || l > 0 ? Qe(r.left + H / 2, r.top + L / 2, s - H / 2, l - L / 2, re.TOP_LEFT) : new pA(r.left + H / 2, r.top + L / 2), this.topRightBorderStroke = s > 0 || l > 0 ? Qe(r.left + v, r.top + L / 2, c - N / 2, n - L / 2, re.TOP_RIGHT) : new pA(r.left + r.width - N / 2, r.top + L / 2), this.bottomRightBorderStroke = u > 0 || B > 0 ? Qe(r.left + b, r.top + m, u - N / 2, B - V / 2, re.BOTTOM_RIGHT) : new pA(r.left + r.width - N / 2, r.top + r.height - V / 2), this.bottomLeftBorderStroke = w > 0 || d > 0 ? Qe(r.left + H / 2, r.top + D, w - H / 2, d - V / 2, re.BOTTOM_LEFT) : new pA(r.left + H / 2, r.top + r.height - V / 2), this.topLeftBorderBox = s > 0 || l > 0 ? Qe(r.left, r.top, s, l, re.TOP_LEFT) : new pA(r.left, r.top), this.topRightBorderBox = c > 0 || n > 0 ? Qe(r.left + v, r.top, c, n, re.TOP_RIGHT) : new pA(r.left + r.width, r.top), this.bottomRightBorderBox = u > 0 || B > 0 ? Qe(r.left + b, r.top + m, u, B, re.BOTTOM_RIGHT) : new pA(r.left + r.width, r.top + r.height), this.bottomLeftBorderBox = w > 0 || d > 0 ? Qe(r.left, r.top + D, w, d, re.BOTTOM_LEFT) : new pA(r.left, r.top + r.height), this.topLeftPaddingBox = s > 0 || l > 0 ? Qe(r.left + H, r.top + L, Math.max(0, s - H), Math.max(0, l - L), re.TOP_LEFT) : new pA(r.left + H, r.top + L), this.topRightPaddingBox = c > 0 || n > 0 ? Qe(r.left + Math.min(v, r.width - N), r.top + L, v > r.width + N ? 0 : Math.max(0, c - N), Math.max(0, n - L), re.TOP_RIGHT) : new pA(r.left + r.width - N, r.top + L), this.bottomRightPaddingBox = u > 0 || B > 0 ? Qe(r.left + Math.min(b, r.width - H), r.top + Math.min(m, r.height - V), Math.max(0, u - N), Math.max(0, B - V), re.BOTTOM_RIGHT) : new pA(r.left + r.width - N, r.top + r.height - V), this.bottomLeftPaddingBox = w > 0 || d > 0 ? Qe(r.left + H, r.top + Math.min(D, r.height - V), Math.max(0, w - H), Math.max(0, d - V), re.BOTTOM_LEFT) : new pA(r.left + H, r.top + r.height - V), this.topLeftContentBox = s > 0 || l > 0 ? Qe(r.left + H + x, r.top + L + j, Math.max(0, s - (H + x)), Math.max(0, l - (L + j)), re.TOP_LEFT) : new pA(r.left + H + x, r.top + L + j), this.topRightContentBox = c > 0 || n > 0 ? Qe(r.left + Math.min(v, r.width + H + x), r.top + L + j, v > r.width + H + x ? 0 : c - H + x, n - (L + j), re.TOP_RIGHT) : new pA(r.left + r.width - (N + P), r.top + L + j), this.bottomRightContentBox = u > 0 || B > 0 ? Qe(r.left + Math.min(b, r.width - (H + x)), r.top + Math.min(m, r.height + L + j), Math.max(0, u - (N + P)), B - (V + X), re.BOTTOM_RIGHT) : new pA(r.left + r.width - (N + P), r.top + r.height - (V + X)), this.bottomLeftContentBox = w > 0 || d > 0 ? Qe(r.left + H + x, r.top + D, Math.max(0, w - (H + x)), d - (V + X), re.BOTTOM_LEFT) : new pA(r.left + H + x, r.top + r.height - (V + X));
    }
    return e;
  }()
), re;
(function(e) {
  e[e.TOP_LEFT = 0] = "TOP_LEFT", e[e.TOP_RIGHT = 1] = "TOP_RIGHT", e[e.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", e[e.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
})(re || (re = {}));
var Qe = function(e, A, t, r, o) {
  var s = 4 * ((Math.sqrt(2) - 1) / 3), l = t * s, i = r * s, c = e + t, n = A + r;
  switch (o) {
    case re.TOP_LEFT:
      return new on(new pA(e, n), new pA(e, n - i), new pA(c - l, A), new pA(c, A));
    case re.TOP_RIGHT:
      return new on(new pA(e, A), new pA(e + l, A), new pA(c, n - i), new pA(c, n));
    case re.BOTTOM_RIGHT:
      return new on(new pA(c, A), new pA(c, A + i), new pA(e + l, n), new pA(e, n));
    case re.BOTTOM_LEFT:
    default:
      return new on(new pA(c, n), new pA(c - l, n), new pA(e, A + i), new pA(e, A));
  }
}, yn = function(e) {
  return [e.topLeftBorderBox, e.topRightBorderBox, e.bottomRightBorderBox, e.bottomLeftBorderBox];
}, Ol = function(e) {
  return [
    e.topLeftContentBox,
    e.topRightContentBox,
    e.bottomRightContentBox,
    e.bottomLeftContentBox
  ];
}, En = function(e) {
  return [
    e.topLeftPaddingBox,
    e.topRightPaddingBox,
    e.bottomRightPaddingBox,
    e.bottomLeftPaddingBox
  ];
}, Dl = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(A, t, r) {
      this.offsetX = A, this.offsetY = t, this.matrix = r, this.type = 0, this.target = 6;
    }
    return e;
  }()
), an = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(A, t) {
      this.path = A, this.target = t, this.type = 1;
    }
    return e;
  }()
), Tl = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(A) {
      this.opacity = A, this.type = 2, this.target = 6;
    }
    return e;
  }()
), _l = function(e) {
  return e.type === 0;
}, os = function(e) {
  return e.type === 1;
}, Rl = function(e) {
  return e.type === 2;
}, na = function(e, A) {
  return e.length === A.length ? e.some(function(t, r) {
    return t === A[r];
  }) : !1;
}, Ml = function(e, A, t, r, o) {
  return e.map(function(s, l) {
    switch (l) {
      case 0:
        return s.add(A, t);
      case 1:
        return s.add(A + r, t);
      case 2:
        return s.add(A + r, t + o);
      case 3:
        return s.add(A, t + o);
    }
    return s;
  });
}, is = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(A) {
      this.element = A, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
    }
    return e;
  }()
), as = (
  /** @class */
  function() {
    function e(A, t) {
      if (this.container = A, this.parent = t, this.effects = [], this.curves = new Kl(this.container), this.container.styles.opacity < 1 && this.effects.push(new Tl(this.container.styles.opacity)), this.container.styles.transform !== null) {
        var r = this.container.bounds.left + this.container.styles.transformOrigin[0].number, o = this.container.bounds.top + this.container.styles.transformOrigin[1].number, s = this.container.styles.transform;
        this.effects.push(new Dl(r, o, s));
      }
      if (this.container.styles.overflowX !== 0) {
        var l = yn(this.curves), i = En(this.curves);
        na(l, i) ? this.effects.push(new an(
          l,
          6
          /* CONTENT */
        )) : (this.effects.push(new an(
          l,
          2
          /* BACKGROUND_BORDERS */
        )), this.effects.push(new an(
          i,
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
        var s = r.effects.filter(function(c) {
          return !os(c);
        });
        if (t || r.container.styles.position !== 0 || !r.parent) {
          if (o.unshift.apply(o, s), t = [
            2,
            3
            /* FIXED */
          ].indexOf(r.container.styles.position) === -1, r.container.styles.overflowX !== 0) {
            var l = yn(r.curves), i = En(r.curves);
            na(l, i) || o.unshift(new an(
              i,
              6
              /* CONTENT */
            ));
          }
        } else
          o.unshift.apply(o, s);
        r = r.parent;
      }
      return o.filter(function(c) {
        return xe(c.target, A);
      });
    }, e;
  }()
), Mo = function(e, A, t, r) {
  e.container.elements.forEach(function(o) {
    var s = xe(
      o.flags,
      4
      /* CREATES_REAL_STACKING_CONTEXT */
    ), l = xe(
      o.flags,
      2
      /* CREATES_STACKING_CONTEXT */
    ), i = new as(o, e);
    xe(
      o.styles.display,
      2048
      /* LIST_ITEM */
    ) && r.push(i);
    var c = xe(
      o.flags,
      8
      /* IS_LIST_OWNER */
    ) ? [] : r;
    if (s || l) {
      var n = s || o.styles.isPositioned() ? t : A, a = new is(i);
      if (o.styles.isPositioned() || o.styles.opacity < 1 || o.styles.isTransformed()) {
        var u = o.styles.zIndex.order;
        if (u < 0) {
          var B = 0;
          n.negativeZIndex.some(function(w, d) {
            return u > w.element.container.styles.zIndex.order ? (B = d, !1) : B > 0;
          }), n.negativeZIndex.splice(B, 0, a);
        } else if (u > 0) {
          var f = 0;
          n.positiveZIndex.some(function(w, d) {
            return u >= w.element.container.styles.zIndex.order ? (f = d + 1, !1) : f > 0;
          }), n.positiveZIndex.splice(f, 0, a);
        } else
          n.zeroOrAutoZIndexOrTransformedOrOpacity.push(a);
      } else
        o.styles.isFloating() ? n.nonPositionedFloats.push(a) : n.nonPositionedInlineLevel.push(a);
      Mo(i, a, s ? a : t, c);
    } else
      o.styles.isInlineLevel() ? A.inlineLevel.push(i) : A.nonInlineLevel.push(i), Mo(i, A, t, c);
    xe(
      o.flags,
      8
      /* IS_LIST_OWNER */
    ) && ss(o, c);
  });
}, ss = function(e, A) {
  for (var t = e instanceof Oo ? e.start : 1, r = e instanceof Oo ? e.reversed : !1, o = 0; o < A.length; o++) {
    var s = A[o];
    s.container instanceof ja && typeof s.container.value == "number" && s.container.value !== 0 && (t = s.container.value), s.listValue = Kt(t, s.container.styles.listStyleType, !0), t += r ? -1 : 1;
  }
}, Nl = function(e) {
  var A = new as(e, null), t = new is(A), r = [];
  return Mo(A, t, t, r), ss(A.container, r), t;
}, oa = function(e, A) {
  switch (A) {
    case 0:
      return ir(e.topLeftBorderBox, e.topLeftPaddingBox, e.topRightBorderBox, e.topRightPaddingBox);
    case 1:
      return ir(e.topRightBorderBox, e.topRightPaddingBox, e.bottomRightBorderBox, e.bottomRightPaddingBox);
    case 2:
      return ir(e.bottomRightBorderBox, e.bottomRightPaddingBox, e.bottomLeftBorderBox, e.bottomLeftPaddingBox);
    case 3:
    default:
      return ir(e.bottomLeftBorderBox, e.bottomLeftPaddingBox, e.topLeftBorderBox, e.topLeftPaddingBox);
  }
}, Gl = function(e, A) {
  switch (A) {
    case 0:
      return ir(e.topLeftBorderBox, e.topLeftBorderDoubleOuterBox, e.topRightBorderBox, e.topRightBorderDoubleOuterBox);
    case 1:
      return ir(e.topRightBorderBox, e.topRightBorderDoubleOuterBox, e.bottomRightBorderBox, e.bottomRightBorderDoubleOuterBox);
    case 2:
      return ir(e.bottomRightBorderBox, e.bottomRightBorderDoubleOuterBox, e.bottomLeftBorderBox, e.bottomLeftBorderDoubleOuterBox);
    case 3:
    default:
      return ir(e.bottomLeftBorderBox, e.bottomLeftBorderDoubleOuterBox, e.topLeftBorderBox, e.topLeftBorderDoubleOuterBox);
  }
}, Pl = function(e, A) {
  switch (A) {
    case 0:
      return ir(e.topLeftBorderDoubleInnerBox, e.topLeftPaddingBox, e.topRightBorderDoubleInnerBox, e.topRightPaddingBox);
    case 1:
      return ir(e.topRightBorderDoubleInnerBox, e.topRightPaddingBox, e.bottomRightBorderDoubleInnerBox, e.bottomRightPaddingBox);
    case 2:
      return ir(e.bottomRightBorderDoubleInnerBox, e.bottomRightPaddingBox, e.bottomLeftBorderDoubleInnerBox, e.bottomLeftPaddingBox);
    case 3:
    default:
      return ir(e.bottomLeftBorderDoubleInnerBox, e.bottomLeftPaddingBox, e.topLeftBorderDoubleInnerBox, e.topLeftPaddingBox);
  }
}, Vl = function(e, A) {
  switch (A) {
    case 0:
      return sn(e.topLeftBorderStroke, e.topRightBorderStroke);
    case 1:
      return sn(e.topRightBorderStroke, e.bottomRightBorderStroke);
    case 2:
      return sn(e.bottomRightBorderStroke, e.bottomLeftBorderStroke);
    case 3:
    default:
      return sn(e.bottomLeftBorderStroke, e.topLeftBorderStroke);
  }
}, sn = function(e, A) {
  var t = [];
  return tr(e) ? t.push(e.subdivide(0.5, !1)) : t.push(e), tr(A) ? t.push(A.subdivide(0.5, !0)) : t.push(A), t;
}, ir = function(e, A, t, r) {
  var o = [];
  return tr(e) ? o.push(e.subdivide(0.5, !1)) : o.push(e), tr(t) ? o.push(t.subdivide(0.5, !0)) : o.push(t), tr(r) ? o.push(r.subdivide(0.5, !0).reverse()) : o.push(r), tr(A) ? o.push(A.subdivide(0.5, !1).reverse()) : o.push(A), o;
}, cs = function(e) {
  var A = e.bounds, t = e.styles;
  return A.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
}, mn = function(e) {
  var A = e.styles, t = e.bounds, r = ge(A.paddingLeft, t.width), o = ge(A.paddingRight, t.width), s = ge(A.paddingTop, t.width), l = ge(A.paddingBottom, t.width);
  return t.add(r + A.borderLeftWidth, s + A.borderTopWidth, -(A.borderRightWidth + A.borderLeftWidth + r + o), -(A.borderTopWidth + A.borderBottomWidth + s + l));
}, kl = function(e, A) {
  return e === 0 ? A.bounds : e === 2 ? mn(A) : cs(A);
}, jl = function(e, A) {
  return e === 0 ? A.bounds : e === 2 ? mn(A) : cs(A);
}, lo = function(e, A, t) {
  var r = kl(ot(e.styles.backgroundOrigin, A), e), o = jl(ot(e.styles.backgroundClip, A), e), s = Xl(ot(e.styles.backgroundSize, A), t, r), l = s[0], i = s[1], c = Ft(ot(e.styles.backgroundPosition, A), r.width - l, r.height - i), n = Jl(ot(e.styles.backgroundRepeat, A), c, s, r, o), a = Math.round(r.left + c[0]), u = Math.round(r.top + c[1]);
  return [n, a, u, l, i];
}, tt = function(e) {
  return ce(e) && e.value === at.AUTO;
}, cn = function(e) {
  return typeof e == "number";
}, Xl = function(e, A, t) {
  var r = A[0], o = A[1], s = A[2], l = e[0], i = e[1];
  if (!l)
    return [0, 0];
  if (Ie(l) && i && Ie(i))
    return [ge(l, t.width), ge(i, t.height)];
  var c = cn(s);
  if (ce(l) && (l.value === at.CONTAIN || l.value === at.COVER)) {
    if (cn(s)) {
      var n = t.width / t.height;
      return n < s != (l.value === at.COVER) ? [t.width, t.width / s] : [t.height * s, t.height];
    }
    return [t.width, t.height];
  }
  var a = cn(r), u = cn(o), B = a || u;
  if (tt(l) && (!i || tt(i))) {
    if (a && u)
      return [r, o];
    if (!c && !B)
      return [t.width, t.height];
    if (B && c) {
      var f = a ? r : o * s, w = u ? o : r / s;
      return [f, w];
    }
    var d = a ? r : t.width, Q = u ? o : t.height;
    return [d, Q];
  }
  if (c) {
    var C = 0, v = 0;
    return Ie(l) ? C = ge(l, t.width) : Ie(i) && (v = ge(i, t.height)), tt(l) ? C = v * s : (!i || tt(i)) && (v = C / s), [C, v];
  }
  var m = null, b = null;
  if (Ie(l) ? m = ge(l, t.width) : i && Ie(i) && (b = ge(i, t.height)), m !== null && (!i || tt(i)) && (b = a && u ? m / r * o : t.height), b !== null && tt(l) && (m = a && u ? b / o * r : t.width), m !== null && b !== null)
    return [m, b];
  throw new Error("Unable to calculate background-size for element");
}, ot = function(e, A) {
  var t = e[A];
  return typeof t > "u" ? e[0] : t;
}, Jl = function(e, A, t, r, o) {
  var s = A[0], l = A[1], i = t[0], c = t[1];
  switch (e) {
    case 2:
      return [
        new pA(Math.round(r.left), Math.round(r.top + l)),
        new pA(Math.round(r.left + r.width), Math.round(r.top + l)),
        new pA(Math.round(r.left + r.width), Math.round(c + r.top + l)),
        new pA(Math.round(r.left), Math.round(c + r.top + l))
      ];
    case 3:
      return [
        new pA(Math.round(r.left + s), Math.round(r.top)),
        new pA(Math.round(r.left + s + i), Math.round(r.top)),
        new pA(Math.round(r.left + s + i), Math.round(r.height + r.top)),
        new pA(Math.round(r.left + s), Math.round(r.height + r.top))
      ];
    case 1:
      return [
        new pA(Math.round(r.left + s), Math.round(r.top + l)),
        new pA(Math.round(r.left + s + i), Math.round(r.top + l)),
        new pA(Math.round(r.left + s + i), Math.round(r.top + l + c)),
        new pA(Math.round(r.left + s), Math.round(r.top + l + c))
      ];
    default:
      return [
        new pA(Math.round(o.left), Math.round(o.top)),
        new pA(Math.round(o.left + o.width), Math.round(o.top)),
        new pA(Math.round(o.left + o.width), Math.round(o.height + o.top)),
        new pA(Math.round(o.left), Math.round(o.height + o.top))
      ];
  }
}, Wl = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", ia = "Hidden Text", Yl = (
  /** @class */
  function() {
    function e(A) {
      this._data = {}, this._document = A;
    }
    return e.prototype.parseMetrics = function(A, t) {
      var r = this._document.createElement("div"), o = this._document.createElement("img"), s = this._document.createElement("span"), l = this._document.body;
      r.style.visibility = "hidden", r.style.fontFamily = A, r.style.fontSize = t, r.style.margin = "0", r.style.padding = "0", r.style.whiteSpace = "nowrap", l.appendChild(r), o.src = Wl, o.width = 1, o.height = 1, o.style.margin = "0", o.style.padding = "0", o.style.verticalAlign = "baseline", s.style.fontFamily = A, s.style.fontSize = t, s.style.margin = "0", s.style.padding = "0", s.appendChild(this._document.createTextNode(ia)), r.appendChild(s), r.appendChild(o);
      var i = o.offsetTop - s.offsetTop + 2;
      r.removeChild(s), r.appendChild(this._document.createTextNode(ia)), r.style.lineHeight = "normal", o.style.verticalAlign = "super";
      var c = o.offsetTop - r.offsetTop + 2;
      return l.removeChild(r), { baseline: i, middle: c };
    }, e.prototype.getMetrics = function(A, t) {
      var r = A + " " + t;
      return typeof this._data[r] > "u" && (this._data[r] = this.parseMetrics(A, t)), this._data[r];
    }, e;
  }()
), us = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(A, t) {
      this.context = A, this.options = t;
    }
    return e;
  }()
), Zl = 1e4, zl = (
  /** @class */
  function(e) {
    lr(A, e);
    function A(t, r) {
      var o = e.call(this, t, r) || this;
      return o._activeEffects = [], o.canvas = r.canvas ? r.canvas : document.createElement("canvas"), o.ctx = o.canvas.getContext("2d"), r.canvas || (o.canvas.width = Math.floor(r.width * r.scale), o.canvas.height = Math.floor(r.height * r.scale), o.canvas.style.width = r.width + "px", o.canvas.style.height = r.height + "px"), o.fontMetrics = new Yl(document), o.ctx.scale(o.options.scale, o.options.scale), o.ctx.translate(-r.x, -r.y), o.ctx.textBaseline = "bottom", o._activeEffects = [], o.context.logger.debug("Canvas renderer initialized (" + r.width + "x" + r.height + ") with scale " + r.scale), o;
    }
    return A.prototype.applyEffects = function(t) {
      for (var r = this; this._activeEffects.length; )
        this.popEffect();
      t.forEach(function(o) {
        return r.applyEffect(o);
      });
    }, A.prototype.applyEffect = function(t) {
      this.ctx.save(), Rl(t) && (this.ctx.globalAlpha = t.opacity), _l(t) && (this.ctx.translate(t.offsetX, t.offsetY), this.ctx.transform(t.matrix[0], t.matrix[1], t.matrix[2], t.matrix[3], t.matrix[4], t.matrix[5]), this.ctx.translate(-t.offsetX, -t.offsetY)), os(t) && (this.path(t.path), this.ctx.clip()), this._activeEffects.push(t);
    }, A.prototype.popEffect = function() {
      this._activeEffects.pop(), this.ctx.restore();
    }, A.prototype.renderStack = function(t) {
      return je(this, void 0, void 0, function() {
        var r;
        return Ne(this, function(o) {
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
      return je(this, void 0, void 0, function() {
        return Ne(this, function(r) {
          switch (r.label) {
            case 0:
              if (xe(
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
      var s = this;
      if (r === 0)
        this.ctx.fillText(t.text, t.bounds.left, t.bounds.top + o);
      else {
        var l = jo(t.text);
        l.reduce(function(i, c) {
          return s.ctx.fillText(c, i, t.bounds.top + o), i + s.ctx.measureText(c).width;
        }, t.bounds.left);
      }
    }, A.prototype.createFontStyle = function(t) {
      var r = t.fontVariant.filter(function(l) {
        return l === "normal" || l === "small-caps";
      }).join(""), o = rg(t.fontFamily).join(", "), s = Dt(t.fontSize) ? "" + t.fontSize.number + t.fontSize.unit : t.fontSize.number + "px";
      return [
        [t.fontStyle, r, t.fontWeight, s, o].join(" "),
        o,
        s
      ];
    }, A.prototype.renderTextNode = function(t, r) {
      return je(this, void 0, void 0, function() {
        var o, s, l, i, c, n, a, u, B = this;
        return Ne(this, function(f) {
          return o = this.createFontStyle(r), s = o[0], l = o[1], i = o[2], this.ctx.font = s, this.ctx.direction = r.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", c = this.fontMetrics.getMetrics(l, i), n = c.baseline, a = c.middle, u = r.paintOrder, t.textBounds.forEach(function(w) {
            u.forEach(function(d) {
              switch (d) {
                case 0:
                  B.ctx.fillStyle = Oe(r.color), B.renderTextWithLetterSpacing(w, r.letterSpacing, n);
                  var Q = r.textShadow;
                  Q.length && w.text.trim().length && (Q.slice(0).reverse().forEach(function(C) {
                    B.ctx.shadowColor = Oe(C.color), B.ctx.shadowOffsetX = C.offsetX.number * B.options.scale, B.ctx.shadowOffsetY = C.offsetY.number * B.options.scale, B.ctx.shadowBlur = C.blur.number, B.renderTextWithLetterSpacing(w, r.letterSpacing, n);
                  }), B.ctx.shadowColor = "", B.ctx.shadowOffsetX = 0, B.ctx.shadowOffsetY = 0, B.ctx.shadowBlur = 0), r.textDecorationLine.length && (B.ctx.fillStyle = Oe(r.textDecorationColor || r.color), r.textDecorationLine.forEach(function(C) {
                    switch (C) {
                      case 1:
                        B.ctx.fillRect(w.bounds.left, Math.round(w.bounds.top + n), w.bounds.width, 1);
                        break;
                      case 2:
                        B.ctx.fillRect(w.bounds.left, Math.round(w.bounds.top), w.bounds.width, 1);
                        break;
                      case 3:
                        B.ctx.fillRect(w.bounds.left, Math.ceil(w.bounds.top + a), w.bounds.width, 1);
                        break;
                    }
                  }));
                  break;
                case 1:
                  r.webkitTextStrokeWidth && w.text.trim().length && (B.ctx.strokeStyle = Oe(r.webkitTextStrokeColor), B.ctx.lineWidth = r.webkitTextStrokeWidth, B.ctx.lineJoin = window.chrome ? "miter" : "round", B.ctx.strokeText(w.text, w.bounds.left, w.bounds.top + n)), B.ctx.strokeStyle = "", B.ctx.lineWidth = 0, B.ctx.lineJoin = "miter";
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
        var s = mn(t), l = En(r);
        this.path(l), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(o, 0, 0, t.intrinsicWidth, t.intrinsicHeight, s.left, s.top, s.width, s.height), this.ctx.restore();
      }
    }, A.prototype.renderNodeContent = function(t) {
      return je(this, void 0, void 0, function() {
        var r, o, s, l, i, c, v, v, n, a, u, B, b, f, w, D, d, Q, C, v, m, b, D;
        return Ne(this, function(L) {
          switch (L.label) {
            case 0:
              this.applyEffects(t.getEffects(
                4
                /* CONTENT */
              )), r = t.container, o = t.curves, s = r.styles, l = 0, i = r.textNodes, L.label = 1;
            case 1:
              return l < i.length ? (c = i[l], [4, this.renderTextNode(c, s)]) : [3, 4];
            case 2:
              L.sent(), L.label = 3;
            case 3:
              return l++, [3, 1];
            case 4:
              if (!(r instanceof Pa))
                return [3, 8];
              L.label = 5;
            case 5:
              return L.trys.push([5, 7, , 8]), [4, this.context.cache.match(r.src)];
            case 6:
              return v = L.sent(), this.renderReplacedElement(r, o, v), [3, 8];
            case 7:
              return L.sent(), this.context.logger.error("Error loading image " + r.src), [3, 8];
            case 8:
              if (r instanceof Va && this.renderReplacedElement(r, o, r.canvas), !(r instanceof ka))
                return [3, 12];
              L.label = 9;
            case 9:
              return L.trys.push([9, 11, , 12]), [4, this.context.cache.match(r.svg)];
            case 10:
              return v = L.sent(), this.renderReplacedElement(r, o, v), [3, 12];
            case 11:
              return L.sent(), this.context.logger.error("Error loading svg " + r.svg.substring(0, 255)), [3, 12];
            case 12:
              return r instanceof Wa && r.tree ? (n = new A(this.context, {
                scale: this.options.scale,
                backgroundColor: r.backgroundColor,
                x: 0,
                y: 0,
                width: r.width,
                height: r.height
              }), [4, n.render(r.tree)]) : [3, 14];
            case 13:
              a = L.sent(), r.width && r.height && this.ctx.drawImage(a, 0, 0, r.width, r.height, r.bounds.left, r.bounds.top, r.bounds.width, r.bounds.height), L.label = 14;
            case 14:
              if (r instanceof Xo && (u = Math.min(r.bounds.width, r.bounds.height), r.type === Cn ? r.checked && (this.ctx.save(), this.path([
                new pA(r.bounds.left + u * 0.39363, r.bounds.top + u * 0.79),
                new pA(r.bounds.left + u * 0.16, r.bounds.top + u * 0.5549),
                new pA(r.bounds.left + u * 0.27347, r.bounds.top + u * 0.44071),
                new pA(r.bounds.left + u * 0.39694, r.bounds.top + u * 0.5649),
                new pA(r.bounds.left + u * 0.72983, r.bounds.top + u * 0.23),
                new pA(r.bounds.left + u * 0.84, r.bounds.top + u * 0.34085),
                new pA(r.bounds.left + u * 0.39363, r.bounds.top + u * 0.79)
              ]), this.ctx.fillStyle = Oe(Ji), this.ctx.fill(), this.ctx.restore()) : r.type === vn && r.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(r.bounds.left + u / 2, r.bounds.top + u / 2, u / 4, 0, Math.PI * 2, !0), this.ctx.fillStyle = Oe(Ji), this.ctx.fill(), this.ctx.restore())), ql(r) && r.value.length) {
                switch (B = this.createFontStyle(s), b = B[0], f = B[1], w = this.fontMetrics.getMetrics(b, f).baseline, this.ctx.font = b, this.ctx.fillStyle = Oe(s.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = Ag(r.styles.textAlign), D = mn(r), d = 0, r.styles.textAlign) {
                  case 1:
                    d += D.width / 2;
                    break;
                  case 2:
                    d += D.width;
                    break;
                }
                Q = D.add(d, 0, 0, -D.height / 2 + 1), this.ctx.save(), this.path([
                  new pA(D.left, D.top),
                  new pA(D.left + D.width, D.top),
                  new pA(D.left + D.width, D.top + D.height),
                  new pA(D.left, D.top + D.height)
                ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new bt(r.value, Q), s.letterSpacing, w), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
              }
              if (!xe(
                r.styles.display,
                2048
                /* LIST_ITEM */
              ))
                return [3, 20];
              if (r.styles.listStyleImage === null)
                return [3, 19];
              if (C = r.styles.listStyleImage, C.type !== 0)
                return [3, 18];
              v = void 0, m = C.url, L.label = 15;
            case 15:
              return L.trys.push([15, 17, , 18]), [4, this.context.cache.match(m)];
            case 16:
              return v = L.sent(), this.ctx.drawImage(v, r.bounds.left - (v.width + 10), r.bounds.top), [3, 18];
            case 17:
              return L.sent(), this.context.logger.error("Error loading list-style-image " + m), [3, 18];
            case 18:
              return [3, 20];
            case 19:
              t.listValue && r.styles.listStyleType !== -1 && (b = this.createFontStyle(s)[0], this.ctx.font = b, this.ctx.fillStyle = Oe(s.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", D = new mr(r.bounds.left, r.bounds.top + ge(r.styles.paddingTop, r.bounds.width), r.bounds.width, xi(s.lineHeight, s.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new bt(t.listValue, D), s.letterSpacing, xi(s.lineHeight, s.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), L.label = 20;
            case 20:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderStackContent = function(t) {
      return je(this, void 0, void 0, function() {
        var r, o, C, s, l, C, i, c, C, n, a, C, u, B, C, f, w, C, d, Q, C;
        return Ne(this, function(v) {
          switch (v.label) {
            case 0:
              if (xe(
                t.element.container.flags,
                16
                /* DEBUG_RENDER */
              ))
                debugger;
              return [4, this.renderNodeBackgroundAndBorders(t.element)];
            case 1:
              v.sent(), r = 0, o = t.negativeZIndex, v.label = 2;
            case 2:
              return r < o.length ? (C = o[r], [4, this.renderStack(C)]) : [3, 5];
            case 3:
              v.sent(), v.label = 4;
            case 4:
              return r++, [3, 2];
            case 5:
              return [4, this.renderNodeContent(t.element)];
            case 6:
              v.sent(), s = 0, l = t.nonInlineLevel, v.label = 7;
            case 7:
              return s < l.length ? (C = l[s], [4, this.renderNode(C)]) : [3, 10];
            case 8:
              v.sent(), v.label = 9;
            case 9:
              return s++, [3, 7];
            case 10:
              i = 0, c = t.nonPositionedFloats, v.label = 11;
            case 11:
              return i < c.length ? (C = c[i], [4, this.renderStack(C)]) : [3, 14];
            case 12:
              v.sent(), v.label = 13;
            case 13:
              return i++, [3, 11];
            case 14:
              n = 0, a = t.nonPositionedInlineLevel, v.label = 15;
            case 15:
              return n < a.length ? (C = a[n], [4, this.renderStack(C)]) : [3, 18];
            case 16:
              v.sent(), v.label = 17;
            case 17:
              return n++, [3, 15];
            case 18:
              u = 0, B = t.inlineLevel, v.label = 19;
            case 19:
              return u < B.length ? (C = B[u], [4, this.renderNode(C)]) : [3, 22];
            case 20:
              v.sent(), v.label = 21;
            case 21:
              return u++, [3, 19];
            case 22:
              f = 0, w = t.zeroOrAutoZIndexOrTransformedOrOpacity, v.label = 23;
            case 23:
              return f < w.length ? (C = w[f], [4, this.renderStack(C)]) : [3, 26];
            case 24:
              v.sent(), v.label = 25;
            case 25:
              return f++, [3, 23];
            case 26:
              d = 0, Q = t.positiveZIndex, v.label = 27;
            case 27:
              return d < Q.length ? (C = Q[d], [4, this.renderStack(C)]) : [3, 30];
            case 28:
              v.sent(), v.label = 29;
            case 29:
              return d++, [3, 27];
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
      t.forEach(function(o, s) {
        var l = tr(o) ? o.start : o;
        s === 0 ? r.ctx.moveTo(l.x, l.y) : r.ctx.lineTo(l.x, l.y), tr(o) && r.ctx.bezierCurveTo(o.startControl.x, o.startControl.y, o.endControl.x, o.endControl.y, o.end.x, o.end.y);
      });
    }, A.prototype.renderRepeat = function(t, r, o, s) {
      this.path(t), this.ctx.fillStyle = r, this.ctx.translate(o, s), this.ctx.fill(), this.ctx.translate(-o, -s);
    }, A.prototype.resizeImage = function(t, r, o) {
      var s;
      if (t.width === r && t.height === o)
        return t;
      var l = (s = this.canvas.ownerDocument) !== null && s !== void 0 ? s : document, i = l.createElement("canvas");
      i.width = Math.max(1, r), i.height = Math.max(1, o);
      var c = i.getContext("2d");
      return c.drawImage(t, 0, 0, t.width, t.height, 0, 0, r, o), i;
    }, A.prototype.renderBackgroundImage = function(t) {
      return je(this, void 0, void 0, function() {
        var r, o, s, l, i, c;
        return Ne(this, function(n) {
          switch (n.label) {
            case 0:
              r = t.styles.backgroundImage.length - 1, o = function(a) {
                var u, B, f, j, aA, nA, x, T, V, w, j, aA, nA, x, T, d, Q, C, v, m, b, D, L, N, V, H, j, P, X, x, T, Z, aA, nA, EA, KA, yA, mA, HA, dA, R, _;
                return Ne(this, function(W) {
                  switch (W.label) {
                    case 0:
                      if (a.type !== 0)
                        return [3, 5];
                      u = void 0, B = a.url, W.label = 1;
                    case 1:
                      return W.trys.push([1, 3, , 4]), [4, s.context.cache.match(B)];
                    case 2:
                      return u = W.sent(), [3, 4];
                    case 3:
                      return W.sent(), s.context.logger.error("Error loading background-image " + B), [3, 4];
                    case 4:
                      return u && (f = lo(t, r, [
                        u.width,
                        u.height,
                        u.width / u.height
                      ]), j = f[0], aA = f[1], nA = f[2], x = f[3], T = f[4], V = s.ctx.createPattern(s.resizeImage(u, x, T), "repeat"), s.renderRepeat(j, V, aA, nA)), [3, 6];
                    case 5:
                      Tu(a) ? (w = lo(t, r, [null, null, null]), j = w[0], aA = w[1], nA = w[2], x = w[3], T = w[4], d = Lu(a.angle, x, T), Q = d[0], C = d[1], v = d[2], m = d[3], b = d[4], D = document.createElement("canvas"), D.width = x, D.height = T, L = D.getContext("2d"), N = L.createLinearGradient(C, m, v, b), Hi(a.stops, Q).forEach(function(lA) {
                        return N.addColorStop(lA.stop, Oe(lA.color));
                      }), L.fillStyle = N, L.fillRect(0, 0, x, T), x > 0 && T > 0 && (V = s.ctx.createPattern(D, "repeat"), s.renderRepeat(j, V, aA, nA))) : _u(a) && (H = lo(t, r, [
                        null,
                        null,
                        null
                      ]), j = H[0], P = H[1], X = H[2], x = H[3], T = H[4], Z = a.position.length === 0 ? [Po] : a.position, aA = ge(Z[0], x), nA = ge(Z[Z.length - 1], T), EA = Su(a, aA, nA, x, T), KA = EA[0], yA = EA[1], KA > 0 && yA > 0 && (mA = s.ctx.createRadialGradient(P + aA, X + nA, 0, P + aA, X + nA, KA), Hi(a.stops, KA * 2).forEach(function(lA) {
                        return mA.addColorStop(lA.stop, Oe(lA.color));
                      }), s.path(j), s.ctx.fillStyle = mA, KA !== yA ? (HA = t.bounds.left + 0.5 * t.bounds.width, dA = t.bounds.top + 0.5 * t.bounds.height, R = yA / KA, _ = 1 / R, s.ctx.save(), s.ctx.translate(HA, dA), s.ctx.transform(1, 0, 0, R, 0, 0), s.ctx.translate(-HA, -dA), s.ctx.fillRect(P, _ * (X - dA) + dA, x, T * _), s.ctx.restore()) : s.ctx.fill())), W.label = 6;
                    case 6:
                      return r--, [
                        2
                        /*return*/
                      ];
                  }
                });
              }, s = this, l = 0, i = t.styles.backgroundImage.slice(0).reverse(), n.label = 1;
            case 1:
              return l < i.length ? (c = i[l], [5, o(c)]) : [3, 4];
            case 2:
              n.sent(), n.label = 3;
            case 3:
              return l++, [3, 1];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderSolidBorder = function(t, r, o) {
      return je(this, void 0, void 0, function() {
        return Ne(this, function(s) {
          return this.path(oa(o, r)), this.ctx.fillStyle = Oe(t), this.ctx.fill(), [
            2
            /*return*/
          ];
        });
      });
    }, A.prototype.renderDoubleBorder = function(t, r, o, s) {
      return je(this, void 0, void 0, function() {
        var l, i;
        return Ne(this, function(c) {
          switch (c.label) {
            case 0:
              return r < 3 ? [4, this.renderSolidBorder(t, o, s)] : [3, 2];
            case 1:
              return c.sent(), [
                2
                /*return*/
              ];
            case 2:
              return l = Gl(s, o), this.path(l), this.ctx.fillStyle = Oe(t), this.ctx.fill(), i = Pl(s, o), this.path(i), this.ctx.fill(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderNodeBackgroundAndBorders = function(t) {
      return je(this, void 0, void 0, function() {
        var r, o, s, l, i, c, n, a, u = this;
        return Ne(this, function(B) {
          switch (B.label) {
            case 0:
              return this.applyEffects(t.getEffects(
                2
                /* BACKGROUND_BORDERS */
              )), r = t.container.styles, o = !Dr(r.backgroundColor) || r.backgroundImage.length, s = [
                { style: r.borderTopStyle, color: r.borderTopColor, width: r.borderTopWidth },
                { style: r.borderRightStyle, color: r.borderRightColor, width: r.borderRightWidth },
                { style: r.borderBottomStyle, color: r.borderBottomColor, width: r.borderBottomWidth },
                { style: r.borderLeftStyle, color: r.borderLeftColor, width: r.borderLeftWidth }
              ], l = $l(ot(r.backgroundClip, 0), t.curves), o || r.boxShadow.length ? (this.ctx.save(), this.path(l), this.ctx.clip(), Dr(r.backgroundColor) || (this.ctx.fillStyle = Oe(r.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(t.container)]) : [3, 2];
            case 1:
              B.sent(), this.ctx.restore(), r.boxShadow.slice(0).reverse().forEach(function(f) {
                u.ctx.save();
                var w = yn(t.curves), d = f.inset ? 0 : Zl, Q = Ml(w, -d + (f.inset ? 1 : -1) * f.spread.number, (f.inset ? 1 : -1) * f.spread.number, f.spread.number * (f.inset ? -2 : 2), f.spread.number * (f.inset ? -2 : 2));
                f.inset ? (u.path(w), u.ctx.clip(), u.mask(Q)) : (u.mask(w), u.ctx.clip(), u.path(Q)), u.ctx.shadowOffsetX = f.offsetX.number + d, u.ctx.shadowOffsetY = f.offsetY.number, u.ctx.shadowColor = Oe(f.color), u.ctx.shadowBlur = f.blur.number, u.ctx.fillStyle = f.inset ? Oe(f.color) : "rgba(0,0,0,1)", u.ctx.fill(), u.ctx.restore();
              }), B.label = 2;
            case 2:
              i = 0, c = 0, n = s, B.label = 3;
            case 3:
              return c < n.length ? (a = n[c], a.style !== 0 && !Dr(a.color) && a.width > 0 ? a.style !== 2 ? [3, 5] : [4, this.renderDashedDottedBorder(
                a.color,
                a.width,
                i,
                t.curves,
                2
                /* DASHED */
              )] : [3, 11]) : [3, 13];
            case 4:
              return B.sent(), [3, 11];
            case 5:
              return a.style !== 3 ? [3, 7] : [4, this.renderDashedDottedBorder(
                a.color,
                a.width,
                i,
                t.curves,
                3
                /* DOTTED */
              )];
            case 6:
              return B.sent(), [3, 11];
            case 7:
              return a.style !== 4 ? [3, 9] : [4, this.renderDoubleBorder(a.color, a.width, i, t.curves)];
            case 8:
              return B.sent(), [3, 11];
            case 9:
              return [4, this.renderSolidBorder(a.color, i, t.curves)];
            case 10:
              B.sent(), B.label = 11;
            case 11:
              i++, B.label = 12;
            case 12:
              return c++, [3, 3];
            case 13:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderDashedDottedBorder = function(t, r, o, s, l) {
      return je(this, void 0, void 0, function() {
        var i, c, n, a, u, B, f, w, d, Q, C, v, m, b, D, L, D, L;
        return Ne(this, function(N) {
          return this.ctx.save(), i = Vl(s, o), c = oa(s, o), l === 2 && (this.path(c), this.ctx.clip()), tr(c[0]) ? (n = c[0].start.x, a = c[0].start.y) : (n = c[0].x, a = c[0].y), tr(c[1]) ? (u = c[1].end.x, B = c[1].end.y) : (u = c[1].x, B = c[1].y), o === 0 || o === 2 ? f = Math.abs(n - u) : f = Math.abs(a - B), this.ctx.beginPath(), l === 3 ? this.formatPath(i) : this.formatPath(c.slice(0, 2)), w = r < 3 ? r * 3 : r * 2, d = r < 3 ? r * 2 : r, l === 3 && (w = r, d = r), Q = !0, f <= w * 2 ? Q = !1 : f <= w * 2 + d ? (C = f / (2 * w + d), w *= C, d *= C) : (v = Math.floor((f + d) / (w + d)), m = (f - v * w) / (v - 1), b = (f - (v + 1) * w) / v, d = b <= 0 || Math.abs(d - m) < Math.abs(d - b) ? m : b), Q && (l === 3 ? this.ctx.setLineDash([0, w + d]) : this.ctx.setLineDash([w, d])), l === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = r) : this.ctx.lineWidth = r * 2 + 1.1, this.ctx.strokeStyle = Oe(t), this.ctx.stroke(), this.ctx.setLineDash([]), l === 2 && (tr(c[0]) && (D = c[3], L = c[0], this.ctx.beginPath(), this.formatPath([new pA(D.end.x, D.end.y), new pA(L.start.x, L.start.y)]), this.ctx.stroke()), tr(c[1]) && (D = c[1], L = c[2], this.ctx.beginPath(), this.formatPath([new pA(D.end.x, D.end.y), new pA(L.start.x, L.start.y)]), this.ctx.stroke())), this.ctx.restore(), [
            2
            /*return*/
          ];
        });
      });
    }, A.prototype.render = function(t) {
      return je(this, void 0, void 0, function() {
        var r;
        return Ne(this, function(o) {
          switch (o.label) {
            case 0:
              return this.options.backgroundColor && (this.ctx.fillStyle = Oe(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), r = Nl(t), [4, this.renderStack(r)];
            case 1:
              return o.sent(), this.applyEffects([]), [2, this.canvas];
          }
        });
      });
    }, A;
  }(us)
), ql = function(e) {
  return e instanceof Ja || e instanceof Xa ? !0 : e instanceof Xo && e.type !== vn && e.type !== Cn;
}, $l = function(e, A) {
  switch (e) {
    case 0:
      return yn(A);
    case 2:
      return Ol(A);
    case 1:
    default:
      return En(A);
  }
}, Ag = function(e) {
  switch (e) {
    case 1:
      return "center";
    case 2:
      return "right";
    case 0:
    default:
      return "left";
  }
}, eg = ["-apple-system", "system-ui"], rg = function(e) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? e.filter(function(A) {
    return eg.indexOf(A) === -1;
  }) : e;
}, tg = (
  /** @class */
  function(e) {
    lr(A, e);
    function A(t, r) {
      var o = e.call(this, t, r) || this;
      return o.canvas = r.canvas ? r.canvas : document.createElement("canvas"), o.ctx = o.canvas.getContext("2d"), o.options = r, o.canvas.width = Math.floor(r.width * r.scale), o.canvas.height = Math.floor(r.height * r.scale), o.canvas.style.width = r.width + "px", o.canvas.style.height = r.height + "px", o.ctx.scale(o.options.scale, o.options.scale), o.ctx.translate(-r.x, -r.y), o.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + r.width + "x" + r.height + " at " + r.x + "," + r.y + ") with scale " + r.scale), o;
    }
    return A.prototype.render = function(t) {
      return je(this, void 0, void 0, function() {
        var r, o;
        return Ne(this, function(s) {
          switch (s.label) {
            case 0:
              return r = Ko(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, t), [4, ng(r)];
            case 1:
              return o = s.sent(), this.options.backgroundColor && (this.ctx.fillStyle = Oe(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(o, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
          }
        });
      });
    }, A;
  }(us)
), ng = function(e) {
  return new Promise(function(A, t) {
    var r = new Image();
    r.onload = function() {
      A(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e));
  });
}, og = (
  /** @class */
  function() {
    function e(A) {
      var t = A.id, r = A.enabled;
      this.id = t, this.enabled = r, this.start = Date.now();
    }
    return e.prototype.debug = function() {
      for (var A = [], t = 0; t < arguments.length; t++)
        A[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, Nt([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
    }, e.prototype.getTime = function() {
      return Date.now() - this.start;
    }, e.prototype.info = function() {
      for (var A = [], t = 0; t < arguments.length; t++)
        A[t] = arguments[t];
      this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, Nt([this.id, this.getTime() + "ms"], A));
    }, e.prototype.warn = function() {
      for (var A = [], t = 0; t < arguments.length; t++)
        A[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, Nt([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
    }, e.prototype.error = function() {
      for (var A = [], t = 0; t < arguments.length; t++)
        A[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, Nt([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
    }, e.instances = {}, e;
  }()
), ig = (
  /** @class */
  function() {
    function e(A, t) {
      var r;
      this.windowBounds = t, this.instanceName = "#" + e.instanceCount++, this.logger = new og({ id: this.instanceName, enabled: A.logging }), this.cache = (r = A.cache) !== null && r !== void 0 ? r : new ml(this, A);
    }
    return e.instanceCount = 1, e;
  }()
), ag = function(e, A) {
  return A === void 0 && (A = {}), sg(e, A);
};
typeof window < "u" && ns.setContext(window);
var sg = function(e, A) {
  return je(void 0, void 0, void 0, function() {
    var t, r, o, s, l, i, c, n, a, u, B, f, w, d, Q, C, v, m, b, D, N, L, N, V, H, j, P, X, x, T, Z, aA, nA, EA, KA, yA, mA, HA, dA, R;
    return Ne(this, function(_) {
      switch (_.label) {
        case 0:
          if (!e || typeof e != "object")
            return [2, Promise.reject("Invalid element provided as first argument")];
          if (t = e.ownerDocument, !t)
            throw new Error("Element is not attached to a Document");
          if (r = t.defaultView, !r)
            throw new Error("Document is not attached to a Window");
          return o = {
            allowTaint: (V = A.allowTaint) !== null && V !== void 0 ? V : !1,
            imageTimeout: (H = A.imageTimeout) !== null && H !== void 0 ? H : 15e3,
            proxy: A.proxy,
            useCORS: (j = A.useCORS) !== null && j !== void 0 ? j : !1
          }, s = Qo({ logging: (P = A.logging) !== null && P !== void 0 ? P : !0, cache: A.cache }, o), l = {
            windowWidth: (X = A.windowWidth) !== null && X !== void 0 ? X : r.innerWidth,
            windowHeight: (x = A.windowHeight) !== null && x !== void 0 ? x : r.innerHeight,
            scrollX: (T = A.scrollX) !== null && T !== void 0 ? T : r.pageXOffset,
            scrollY: (Z = A.scrollY) !== null && Z !== void 0 ? Z : r.pageYOffset
          }, i = new mr(l.scrollX, l.scrollY, l.windowWidth, l.windowHeight), c = new ig(s, i), n = (aA = A.foreignObjectRendering) !== null && aA !== void 0 ? aA : !1, a = {
            allowTaint: (nA = A.allowTaint) !== null && nA !== void 0 ? nA : !1,
            onclone: A.onclone,
            ignoreElements: A.ignoreElements,
            inlineImages: n,
            copyStyles: n
          }, c.logger.debug("Starting document clone with size " + i.width + "x" + i.height + " scrolled to " + -i.left + "," + -i.top), u = new ra(c, e, a), B = u.clonedReferenceElement, B ? [4, u.toIFrame(t, i)] : [2, Promise.reject("Unable to find element in cloned iframe")];
        case 1:
          return f = _.sent(), w = Jo(B) || cl(B) ? Rs(B.ownerDocument) : Hn(c, B), d = w.width, Q = w.height, C = w.left, v = w.top, m = cg(c, B, A.backgroundColor), b = {
            canvas: A.canvas,
            backgroundColor: m,
            scale: (KA = (EA = A.scale) !== null && EA !== void 0 ? EA : r.devicePixelRatio) !== null && KA !== void 0 ? KA : 1,
            x: ((yA = A.x) !== null && yA !== void 0 ? yA : 0) + C,
            y: ((mA = A.y) !== null && mA !== void 0 ? mA : 0) + v,
            width: (HA = A.width) !== null && HA !== void 0 ? HA : Math.ceil(d),
            height: (dA = A.height) !== null && dA !== void 0 ? dA : Math.ceil(Q)
          }, n ? (c.logger.debug("Document cloned, using foreign object rendering"), N = new tg(c, b), [4, N.render(B)]) : [3, 3];
        case 2:
          return D = _.sent(), [3, 5];
        case 3:
          return c.logger.debug("Document cloned, element located at " + C + "," + v + " with size " + d + "x" + Q + " using computed rendering"), c.logger.debug("Starting DOM parsing"), L = Za(c, B), m === L.styles.backgroundColor && (L.styles.backgroundColor = Er.TRANSPARENT), c.logger.debug("Starting renderer for element at " + b.x + "," + b.y + " with size " + b.width + "x" + b.height), N = new zl(c, b), [4, N.render(L)];
        case 4:
          D = _.sent(), _.label = 5;
        case 5:
          return (!((R = A.removeContainer) !== null && R !== void 0) || R) && (ra.destroy(f) || c.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), c.logger.debug("Finished rendering"), [2, D];
      }
    });
  });
}, cg = function(e, A, t) {
  var r = A.ownerDocument, o = r.documentElement ? It(e, getComputedStyle(r.documentElement).backgroundColor) : Er.TRANSPARENT, s = r.body ? It(e, getComputedStyle(r.body).backgroundColor) : Er.TRANSPARENT, l = typeof t == "string" ? It(e, t) : t === null ? Er.TRANSPARENT : 4294967295;
  return A === r.documentElement ? Dr(o) ? Dr(s) ? l : s : o : l;
};
function fg({ key: e, ref: A, initData: t, onDrag: r }) {
  const o = In(), s = se.useModel("dragModel/offset", !1, o)[0], l = se.useModel("dragModel/scale", !1, o)[0], { state: i } = se.useModel(`dragModel/drags/${e}`, !1, o)[0] || {}, [c, n] = Xr(!1), [a, u] = Xr(null);
  nr(() => {
    if (!i)
      return;
    const [B, f] = se.get(`dragModel/drags/${e}/data`, o), w = i.split("+"), d = w[0], Q = w.slice(-1)[0], C = se.get(`dragModel/drops/${Q}/data`, o)[0];
    r && r({
      data: B,
      setData: f,
      type: d,
      dropData: C
    });
  }, [i, o, e]), nr(() => {
    const B = se.get(`dragModel/drags/${e}`, o)[1];
    return u(`easy-drag-${e}`), B({ data: t }).then(() => {
      n(!0);
    }).catch((f) => {
      n(!1);
    }), () => {
      n(!1), B(null);
    };
  }, [e, o]), nr(() => {
    if (!c || !a)
      return;
    const B = hn(A);
    if (!B)
      return;
    const f = aa(B, "easy-drag-");
    f && B.classList.remove(f), B.classList.add(a);
  }, [c, a, A, o]), nr(() => {
    if (!c)
      return;
    const B = hn(A);
    if (!B)
      return;
    const f = async (Q) => {
      Q.preventDefault(), B.setPointerCapture(Q.pointerId);
      const { clientX: C, clientY: v } = Q, m = se.get("dragModel/offset", o)[0], b = se.get("dragModel/scale", o)[0], D = C - m.x, L = v - m.y, N = se.get(
        `dragModel/drags/${e}/startPosition`,
        o
      )[1], V = B.getBoundingClientRect(), { width: H, height: j, left: P, top: X } = V, x = await ag(B, {
        useCORS: !0,
        backgroundColor: "black"
      }), T = x.getContext("2d"), Z = T.getImageData(0, 0, x.width, x.height), aA = Z.data;
      for (var nA = 0; nA < aA.length; nA += 4)
        aA[nA + 3] = aA[nA + 3] * 0.5;
      T.putImageData(Z, 0, 0);
      const EA = se.get(`dragModel/drags/${e}/preview`, o)[1], KA = {
        operationType: me.STARTDRAG,
        key: e,
        class: `${e}-preview`,
        src: x.toDataURL(),
        style: {
          position: "absolute",
          width: H * b.x + "px",
          height: j * b.y + "px",
          left: (P - m.x) * b.x + "px",
          top: (X - m.y) * b.y + "px",
          zIndex: 100
        }
      };
      await EA(KA, { callbacks: "updatePreview" }), await N({ x: D, y: L });
    }, w = async (Q) => {
      Q.preventDefault();
      const C = se.get(
        `dragModel/drags/${e}/startPosition`,
        o
      )[0];
      if (!C)
        return;
      const { clientX: v, clientY: m } = Q, b = se.get("dragModel/offset", o)[0], D = se.get("dragModel/scale", o)[0], L = v - b.x, N = m - b.y, V = (L - C.x) * D.x, H = (N - C.y) * D.y, j = se.get(`dragModel/drags/${e}/preview`, o)[1];
      await j(
        {
          operationType: me.DRAGGING,
          key: e,
          x: L,
          y: N,
          class: `${e}-preview`,
          style: {
            transform: `translate(${V}px,${H}px)`
          }
        },
        { callbacks: "updatePreview" }
      );
    }, d = async (Q) => {
      Q.preventDefault();
      const { clientX: C, clientY: v } = Q, m = C - s.x, b = v - s.y, D = se.get(`dragModel/drags/${e}/preview`, o)[1];
      await D(
        {
          operationType: me.DROP,
          key: e,
          x: m,
          y: b,
          class: `${e}-preview`
        },
        { callbacks: "updatePreview" }
      );
      const L = se.get(
        `dragModel/drags/${e}/startPosition`,
        o
      )[1];
      await L(null);
    };
    return B.addEventListener("pointerdown", f), B.addEventListener("pointermove", w), B.addEventListener("pointerup", d), B.addEventListener("pointerCancel", d), () => {
      B.removeEventListener("pointerdown", f), B.removeEventListener("pointermove", w), B.removeEventListener("pointerup", d), B.removeEventListener("pointerCancel", d);
    };
  }, [c, A, e, JSON.stringify(s), JSON.stringify(l), o]);
}
function lg({ acceptKeys: e = ["*"], initData: A, ref: t, onDrop: r }) {
  const o = In(), s = se.useModel("dragModel/offset", !1, o)[0], l = Xr(`easy-drop-${yr()}`)[0], { state: i } = se.useModel(`dragModel/drops/${l}`, !1, o)[0] || {}, [c, n] = Xr(!1);
  nr(() => {
    if (!i)
      return;
    const [a, u] = se.get(`dragModel/drops/${l}/data`, o), [B, f] = i.split("+"), w = se.get(`dragModel/drags/${f}/data`, o)[0];
    r && r({ dragState: w, setData: u, data: a, type: B });
  }, [i, o, l]), nr(() => {
    const a = se.get(`dragModel/drops/${l}`, o)[1];
    return a({ data: A }).then(() => {
      n(!0);
    }).catch((u) => {
      n(!1);
    }), () => {
      n(!1), a(null);
    };
  }, [l, o]), nr(() => {
    if (!c)
      return;
    if (!Array.isArray(e) || e.length === 0) {
      console.error("acceptKeys must be a non-empty array");
      return;
    }
    const a = se.get(
      `dragModel/drops/${l}/acceptKeys`,
      o
    )[1];
    a(e);
  }, [c, l, JSON.stringify(e), o]), nr(() => {
    const a = hn(t);
    if (!a)
      return;
    const u = aa(a, "easy-drop-");
    u && a.classList.remove(u), a.classList.add(l);
  }, [t, l]), nr(() => {
    if (!c)
      return;
    const a = hn(t);
    if (!a)
      return;
    const u = a.getBoundingClientRect(), B = [
      [u.left - s.x, u.top - s.y],
      [u.right - s.x, u.top - s.y],
      [u.right - s.x, u.bottom - s.y],
      [u.left - s.x, u.bottom - s.y]
    ], f = se.get(
      `dragModel/drops/${l}/polygon`,
      o
    )[1];
    f(B);
  }, [c, l, t, JSON.stringify(s), o]);
}
function gg(e) {
  if (!e)
    throw new Error("key is required");
  const A = In(), t = se.useModel(`dragModel/drags/${e}`, !1, A)[0], [r, o] = Xr(null);
  return nr(() => {
    if (!t)
      return;
    const { data: s } = t;
    o(s);
  }, [JSON.stringify(t)]), r;
}
export {
  Bg as default,
  me as operationType,
  gg as useData,
  fg as useDrag,
  lg as useDrop
};
