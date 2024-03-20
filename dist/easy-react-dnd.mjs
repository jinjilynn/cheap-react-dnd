import Jt, { useRef as Os, useDebugValue as la, createElement as Eu, useContext as ui, useState as sr, useEffect as ut, createContext as bu } from "react";
var Rr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Iu(A) {
  return A && A.__esModule && Object.prototype.hasOwnProperty.call(A, "default") ? A.default : A;
}
var fi = { exports: {} }, Mr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ga;
function Hu() {
  if (ga)
    return Mr;
  ga = 1;
  var A = Jt, e = Symbol.for("react.element"), t = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function B(a, c, n) {
    var s, u = {}, f = null, l = null;
    n !== void 0 && (f = "" + n), c.key !== void 0 && (f = "" + c.key), c.ref !== void 0 && (l = c.ref);
    for (s in c)
      r.call(c, s) && !i.hasOwnProperty(s) && (u[s] = c[s]);
    if (a && a.defaultProps)
      for (s in c = a.defaultProps, c)
        u[s] === void 0 && (u[s] = c[s]);
    return { $$typeof: e, type: a, key: f, ref: l, props: u, _owner: o.current };
  }
  return Mr.Fragment = t, Mr.jsx = B, Mr.jsxs = B, Mr;
}
var Nr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ha;
function Su() {
  return ha || (ha = 1, process.env.NODE_ENV !== "production" && function() {
    var A = Jt, e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), B = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), n = Symbol.for("react.suspense"), s = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), l = Symbol.for("react.offscreen"), g = Symbol.iterator, p = "@@iterator";
    function w(U) {
      if (U === null || typeof U != "object")
        return null;
      var P = g && U[g] || U[p];
      return typeof P == "function" ? P : null;
    }
    var Q = A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(U) {
      {
        for (var P = arguments.length, Y = new Array(P > 1 ? P - 1 : 0), cA = 1; cA < P; cA++)
          Y[cA - 1] = arguments[cA];
        y("error", U, Y);
      }
    }
    function y(U, P, Y) {
      {
        var cA = Q.ReactDebugCurrentFrame, hA = cA.getStackAddendum();
        hA !== "" && (P += "%s", Y = Y.concat([hA]));
        var VA = Y.map(function(KA) {
          return String(KA);
        });
        VA.unshift("Warning: " + P), Function.prototype.apply.call(console[U], console, VA);
      }
    }
    var b = !1, O = !1, I = !1, L = !1, N = !1, H;
    H = Symbol.for("react.module.reference");
    function j(U) {
      return !!(typeof U == "string" || typeof U == "function" || U === r || U === i || N || U === o || U === n || U === s || L || U === l || b || O || I || typeof U == "object" && U !== null && (U.$$typeof === f || U.$$typeof === u || U.$$typeof === B || U.$$typeof === a || U.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      U.$$typeof === H || U.getModuleId !== void 0));
    }
    function V(U, P, Y) {
      var cA = U.displayName;
      if (cA)
        return cA;
      var hA = P.displayName || P.name || "";
      return hA !== "" ? Y + "(" + hA + ")" : Y;
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
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case n:
          return "Suspense";
        case s:
          return "SuspenseList";
      }
      if (typeof U == "object")
        switch (U.$$typeof) {
          case a:
            var P = U;
            return X(P) + ".Consumer";
          case B:
            var Y = U;
            return X(Y._context) + ".Provider";
          case c:
            return V(U, U.render, "ForwardRef");
          case u:
            var cA = U.displayName || null;
            return cA !== null ? cA : x(U.type) || "Memo";
          case f: {
            var hA = U, VA = hA._payload, KA = hA._init;
            try {
              return x(KA(VA));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var _ = Object.assign, Z = 0, iA, rA, IA, HA, vA, mA, QA;
    function gA() {
    }
    gA.__reactDisabledLog = !0;
    function M() {
      {
        if (Z === 0) {
          iA = console.log, rA = console.info, IA = console.warn, HA = console.error, vA = console.group, mA = console.groupCollapsed, QA = console.groupEnd;
          var U = {
            configurable: !0,
            enumerable: !0,
            value: gA,
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
    function R() {
      {
        if (Z--, Z === 0) {
          var U = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: _({}, U, {
              value: iA
            }),
            info: _({}, U, {
              value: rA
            }),
            warn: _({}, U, {
              value: IA
            }),
            error: _({}, U, {
              value: HA
            }),
            group: _({}, U, {
              value: vA
            }),
            groupCollapsed: _({}, U, {
              value: mA
            }),
            groupEnd: _({}, U, {
              value: QA
            })
          });
        }
        Z < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var W = Q.ReactCurrentDispatcher, uA;
    function tA(U, P, Y) {
      {
        if (uA === void 0)
          try {
            throw Error();
          } catch (hA) {
            var cA = hA.stack.trim().match(/\n( *(at )?)/);
            uA = cA && cA[1] || "";
          }
        return `
` + uA + U;
      }
    }
    var EA = !1, DA;
    {
      var AA = typeof WeakMap == "function" ? WeakMap : Map;
      DA = new AA();
    }
    function aA(U, P) {
      if (!U || EA)
        return "";
      {
        var Y = DA.get(U);
        if (Y !== void 0)
          return Y;
      }
      var cA;
      EA = !0;
      var hA = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var VA;
      VA = W.current, W.current = null, M();
      try {
        if (P) {
          var KA = function() {
            throw Error();
          };
          if (Object.defineProperty(KA.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(KA, []);
            } catch (ye) {
              cA = ye;
            }
            Reflect.construct(U, [], KA);
          } else {
            try {
              KA.call();
            } catch (ye) {
              cA = ye;
            }
            U.call(KA.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ye) {
            cA = ye;
          }
          U();
        }
      } catch (ye) {
        if (ye && cA && typeof ye.stack == "string") {
          for (var RA = ye.stack.split(`
`), ve = cA.stack.split(`
`), ee = RA.length - 1, se = ve.length - 1; ee >= 1 && se >= 0 && RA[ee] !== ve[se]; )
            se--;
          for (; ee >= 1 && se >= 0; ee--, se--)
            if (RA[ee] !== ve[se]) {
              if (ee !== 1 || se !== 1)
                do
                  if (ee--, se--, se < 0 || RA[ee] !== ve[se]) {
                    var Le = `
` + RA[ee].replace(" at new ", " at ");
                    return U.displayName && Le.includes("<anonymous>") && (Le = Le.replace("<anonymous>", U.displayName)), typeof U == "function" && DA.set(U, Le), Le;
                  }
                while (ee >= 1 && se >= 0);
              break;
            }
        }
      } finally {
        EA = !1, W.current = VA, R(), Error.prepareStackTrace = hA;
      }
      var gt = U ? U.displayName || U.name : "", Yt = gt ? tA(gt) : "";
      return typeof U == "function" && DA.set(U, Yt), Yt;
    }
    function SA(U, P, Y) {
      return aA(U, !1);
    }
    function OA(U) {
      var P = U.prototype;
      return !!(P && P.isReactComponent);
    }
    function TA(U, P, Y) {
      if (U == null)
        return "";
      if (typeof U == "function")
        return aA(U, OA(U));
      if (typeof U == "string")
        return tA(U);
      switch (U) {
        case n:
          return tA("Suspense");
        case s:
          return tA("SuspenseList");
      }
      if (typeof U == "object")
        switch (U.$$typeof) {
          case c:
            return SA(U.render);
          case u:
            return TA(U.type, P, Y);
          case f: {
            var cA = U, hA = cA._payload, VA = cA._init;
            try {
              return TA(VA(hA), P, Y);
            } catch {
            }
          }
        }
      return "";
    }
    var XA = Object.prototype.hasOwnProperty, pe = {}, ie = Q.ReactDebugCurrentFrame;
    function GA(U) {
      if (U) {
        var P = U._owner, Y = TA(U.type, U._source, P ? P.type : null);
        ie.setExtraStackFrame(Y);
      } else
        ie.setExtraStackFrame(null);
    }
    function Ae(U, P, Y, cA, hA) {
      {
        var VA = Function.call.bind(XA);
        for (var KA in U)
          if (VA(U, KA)) {
            var RA = void 0;
            try {
              if (typeof U[KA] != "function") {
                var ve = Error((cA || "React class") + ": " + Y + " type `" + KA + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof U[KA] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ve.name = "Invariant Violation", ve;
              }
              RA = U[KA](P, KA, cA, Y, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ee) {
              RA = ee;
            }
            RA && !(RA instanceof Error) && (GA(hA), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", cA || "React class", Y, KA, typeof RA), GA(null)), RA instanceof Error && !(RA.message in pe) && (pe[RA.message] = !0, GA(hA), v("Failed %s type: %s", Y, RA.message), GA(null));
          }
      }
    }
    var zA = Array.isArray;
    function oe(U) {
      return zA(U);
    }
    function be(U) {
      {
        var P = typeof Symbol == "function" && Symbol.toStringTag, Y = P && U[Symbol.toStringTag] || U.constructor.name || "Object";
        return Y;
      }
    }
    function ge(U) {
      try {
        return Qe(U), !1;
      } catch {
        return !0;
      }
    }
    function Qe(U) {
      return "" + U;
    }
    function he(U) {
      if (ge(U))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", be(U)), Qe(U);
    }
    var q = Q.ReactCurrentOwner, bA = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ae, MA, $A;
    $A = {};
    function nA(U) {
      if (XA.call(U, "ref")) {
        var P = Object.getOwnPropertyDescriptor(U, "ref").get;
        if (P && P.isReactWarning)
          return !1;
      }
      return U.ref !== void 0;
    }
    function BA(U) {
      if (XA.call(U, "key")) {
        var P = Object.getOwnPropertyDescriptor(U, "key").get;
        if (P && P.isReactWarning)
          return !1;
      }
      return U.key !== void 0;
    }
    function xA(U, P) {
      if (typeof U.ref == "string" && q.current && P && q.current.stateNode !== P) {
        var Y = x(q.current.type);
        $A[Y] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', x(q.current.type), U.ref), $A[Y] = !0);
      }
    }
    function PA(U, P) {
      {
        var Y = function() {
          ae || (ae = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", P));
        };
        Y.isReactWarning = !0, Object.defineProperty(U, "key", {
          get: Y,
          configurable: !0
        });
      }
    }
    function YA(U, P) {
      {
        var Y = function() {
          MA || (MA = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", P));
        };
        Y.isReactWarning = !0, Object.defineProperty(U, "ref", {
          get: Y,
          configurable: !0
        });
      }
    }
    var jA = function(U, P, Y, cA, hA, VA, KA) {
      var RA = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: U,
        key: P,
        ref: Y,
        props: KA,
        // Record the component responsible for creating this element.
        _owner: VA
      };
      return RA._store = {}, Object.defineProperty(RA._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(RA, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: cA
      }), Object.defineProperty(RA, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: hA
      }), Object.freeze && (Object.freeze(RA.props), Object.freeze(RA)), RA;
    };
    function De(U, P, Y, cA, hA) {
      {
        var VA, KA = {}, RA = null, ve = null;
        Y !== void 0 && (he(Y), RA = "" + Y), BA(P) && (he(P.key), RA = "" + P.key), nA(P) && (ve = P.ref, xA(P, hA));
        for (VA in P)
          XA.call(P, VA) && !bA.hasOwnProperty(VA) && (KA[VA] = P[VA]);
        if (U && U.defaultProps) {
          var ee = U.defaultProps;
          for (VA in ee)
            KA[VA] === void 0 && (KA[VA] = ee[VA]);
        }
        if (RA || ve) {
          var se = typeof U == "function" ? U.displayName || U.name || "Unknown" : U;
          RA && PA(KA, se), ve && YA(KA, se);
        }
        return jA(U, RA, ve, hA, cA, q.current, KA);
      }
    }
    var Je = Q.ReactCurrentOwner, nt = Q.ReactDebugCurrentFrame;
    function ke(U) {
      if (U) {
        var P = U._owner, Y = TA(U.type, U._source, P ? P.type : null);
        nt.setExtraStackFrame(Y);
      } else
        nt.setExtraStackFrame(null);
    }
    var ot;
    ot = !1;
    function Ne(U) {
      return typeof U == "object" && U !== null && U.$$typeof === e;
    }
    function it() {
      {
        if (Je.current) {
          var U = x(Je.current.type);
          if (U)
            return `

Check the render method of \`` + U + "`.";
        }
        return "";
      }
    }
    function It(U) {
      {
        if (U !== void 0) {
          var P = U.fileName.replace(/^.*[\\\/]/, ""), Y = U.lineNumber;
          return `

Check your code at ` + P + ":" + Y + ".";
        }
        return "";
      }
    }
    var C = {};
    function E(U) {
      {
        var P = it();
        if (!P) {
          var Y = typeof U == "string" ? U : U.displayName || U.name;
          Y && (P = `

Check the top-level render call using <` + Y + ">.");
        }
        return P;
      }
    }
    function m(U, P) {
      {
        if (!U._store || U._store.validated || U.key != null)
          return;
        U._store.validated = !0;
        var Y = E(P);
        if (C[Y])
          return;
        C[Y] = !0;
        var cA = "";
        U && U._owner && U._owner !== Je.current && (cA = " It was passed a child from " + x(U._owner.type) + "."), ke(U), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Y, cA), ke(null);
      }
    }
    function D(U, P) {
      {
        if (typeof U != "object")
          return;
        if (oe(U))
          for (var Y = 0; Y < U.length; Y++) {
            var cA = U[Y];
            Ne(cA) && m(cA, P);
          }
        else if (Ne(U))
          U._store && (U._store.validated = !0);
        else if (U) {
          var hA = w(U);
          if (typeof hA == "function" && hA !== U.entries)
            for (var VA = hA.call(U), KA; !(KA = VA.next()).done; )
              Ne(KA.value) && m(KA.value, P);
        }
      }
    }
    function K(U) {
      {
        var P = U.type;
        if (P == null || typeof P == "string")
          return;
        var Y;
        if (typeof P == "function")
          Y = P.propTypes;
        else if (typeof P == "object" && (P.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        P.$$typeof === u))
          Y = P.propTypes;
        else
          return;
        if (Y) {
          var cA = x(P);
          Ae(Y, U.props, "prop", cA, U);
        } else if (P.PropTypes !== void 0 && !ot) {
          ot = !0;
          var hA = x(P);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", hA || "Unknown");
        }
        typeof P.getDefaultProps == "function" && !P.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function T(U) {
      {
        for (var P = Object.keys(U.props), Y = 0; Y < P.length; Y++) {
          var cA = P[Y];
          if (cA !== "children" && cA !== "key") {
            ke(U), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", cA), ke(null);
            break;
          }
        }
        U.ref !== null && (ke(U), v("Invalid attribute `ref` supplied to `React.Fragment`."), ke(null));
      }
    }
    function k(U, P, Y, cA, hA, VA) {
      {
        var KA = j(U);
        if (!KA) {
          var RA = "";
          (U === void 0 || typeof U == "object" && U !== null && Object.keys(U).length === 0) && (RA += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ve = It(hA);
          ve ? RA += ve : RA += it();
          var ee;
          U === null ? ee = "null" : oe(U) ? ee = "array" : U !== void 0 && U.$$typeof === e ? (ee = "<" + (x(U.type) || "Unknown") + " />", RA = " Did you accidentally export a JSX literal instead of a component?") : ee = typeof U, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ee, RA);
        }
        var se = De(U, P, Y, hA, VA);
        if (se == null)
          return se;
        if (KA) {
          var Le = P.children;
          if (Le !== void 0)
            if (cA)
              if (oe(Le)) {
                for (var gt = 0; gt < Le.length; gt++)
                  D(Le[gt], U);
                Object.freeze && Object.freeze(Le);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              D(Le, U);
        }
        return U === r ? T(se) : K(se), se;
      }
    }
    function $(U, P, Y) {
      return k(U, P, Y, !0);
    }
    function z(U, P, Y) {
      return k(U, P, Y, !1);
    }
    var J = z, lA = $;
    Nr.Fragment = r, Nr.jsx = J, Nr.jsxs = lA;
  }()), Nr;
}
process.env.NODE_ENV === "production" ? fi.exports = Hu() : fi.exports = Su();
var Gn = fi.exports;
const xu = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let Ot = (A = 21) => {
  let e = "", t = crypto.getRandomValues(new Uint8Array(A));
  for (; A--; )
    e += xu[t[A] & 63];
  return e;
};
var tt = function() {
  return tt = Object.assign || function(e) {
    for (var t, r = 1, o = arguments.length; r < o; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, tt.apply(this, arguments);
};
function Er(A, e, t) {
  if (t || arguments.length === 2)
    for (var r = 0, o = e.length, i; r < o; r++)
      (i || !(r in e)) && (i || (i = Array.prototype.slice.call(e, 0, r)), i[r] = e[r]);
  return A.concat(i || Array.prototype.slice.call(e));
}
function Lu(A) {
  var e = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return e[t] === void 0 && (e[t] = A(t)), e[t];
  };
}
var Ou = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ku = /* @__PURE__ */ Lu(
  function(A) {
    return Ou.test(A) || A.charCodeAt(0) === 111 && A.charCodeAt(1) === 110 && A.charCodeAt(2) < 91;
  }
  /* Z+1 */
), de = "-ms-", qr = "-moz-", re = "-webkit-", Ks = "comm", Bo = "rule", ki = "decl", Du = "@import", Ds = "@keyframes", Tu = "@layer", Ts = Math.abs, ji = String.fromCharCode, Bi = Object.assign;
function _u(A, e) {
  return Me(A, 0) ^ 45 ? (((e << 2 ^ Me(A, 0)) << 2 ^ Me(A, 1)) << 2 ^ Me(A, 2)) << 2 ^ Me(A, 3) : 0;
}
function _s(A) {
  return A.trim();
}
function Kt(A, e) {
  return (A = e.exec(A)) ? A[0] : A;
}
function kA(A, e, t) {
  return A.replace(e, t);
}
function Vn(A, e, t) {
  return A.indexOf(e, t);
}
function Me(A, e) {
  return A.charCodeAt(e) | 0;
}
function br(A, e, t) {
  return A.slice(e, t);
}
function mt(A) {
  return A.length;
}
function Rs(A) {
  return A.length;
}
function jr(A, e) {
  return e.push(A), A;
}
function Ru(A, e) {
  return A.map(e).join("");
}
function wa(A, e) {
  return A.filter(function(t) {
    return !Kt(t, e);
  });
}
var lo = 1, Ir = 1, Ms = 0, lt = 0, Se = 0, Or = "";
function go(A, e, t, r, o, i, B, a) {
  return { value: A, root: e, parent: t, type: r, props: o, children: i, line: lo, column: Ir, length: B, return: "", siblings: a };
}
function Rt(A, e) {
  return Bi(go("", null, null, "", null, null, 0, A.siblings), A, { length: -A.length }, e);
}
function hr(A) {
  for (; A.root; )
    A = Rt(A.root, { children: [A] });
  jr(A, A.siblings);
}
function Mu() {
  return Se;
}
function Nu() {
  return Se = lt > 0 ? Me(Or, --lt) : 0, Ir--, Se === 10 && (Ir = 1, lo--), Se;
}
function Ct() {
  return Se = lt < Ms ? Me(Or, lt++) : 0, Ir++, Se === 10 && (Ir = 1, lo++), Se;
}
function nr() {
  return Me(Or, lt);
}
function kn() {
  return lt;
}
function ho(A, e) {
  return br(Or, A, e);
}
function li(A) {
  switch (A) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Pu(A) {
  return lo = Ir = 1, Ms = mt(Or = A), lt = 0, [];
}
function Gu(A) {
  return Or = "", A;
}
function Mo(A) {
  return _s(ho(lt - 1, gi(A === 91 ? A + 2 : A === 40 ? A + 1 : A)));
}
function Vu(A) {
  for (; (Se = nr()) && Se < 33; )
    Ct();
  return li(A) > 2 || li(Se) > 3 ? "" : " ";
}
function ku(A, e) {
  for (; --e && Ct() && !(Se < 48 || Se > 102 || Se > 57 && Se < 65 || Se > 70 && Se < 97); )
    ;
  return ho(A, kn() + (e < 6 && nr() == 32 && Ct() == 32));
}
function gi(A) {
  for (; Ct(); )
    switch (Se) {
      case A:
        return lt;
      case 34:
      case 39:
        A !== 34 && A !== 39 && gi(Se);
        break;
      case 40:
        A === 41 && gi(A);
        break;
      case 92:
        Ct();
        break;
    }
  return lt;
}
function ju(A, e) {
  for (; Ct() && A + Se !== 57; )
    if (A + Se === 84 && nr() === 47)
      break;
  return "/*" + ho(e, lt - 1) + "*" + ji(A === 47 ? A : Ct());
}
function Xu(A) {
  for (; !li(nr()); )
    Ct();
  return ho(A, lt);
}
function Ju(A) {
  return Gu(jn("", null, null, null, [""], A = Pu(A), 0, [0], A));
}
function jn(A, e, t, r, o, i, B, a, c) {
  for (var n = 0, s = 0, u = B, f = 0, l = 0, g = 0, p = 1, w = 1, Q = 1, v = 0, y = "", b = o, O = i, I = r, L = y; w; )
    switch (g = v, v = Ct()) {
      case 40:
        if (g != 108 && Me(L, u - 1) == 58) {
          Vn(L += kA(Mo(v), "&", "&\f"), "&\f", Ts(n ? a[n - 1] : 0)) != -1 && (Q = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        L += Mo(v);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        L += Vu(g);
        break;
      case 92:
        L += ku(kn() - 1, 7);
        continue;
      case 47:
        switch (nr()) {
          case 42:
          case 47:
            jr(Wu(ju(Ct(), kn()), e, t, c), c);
            break;
          default:
            L += "/";
        }
        break;
      case 123 * p:
        a[n++] = mt(L) * Q;
      case 125 * p:
      case 59:
      case 0:
        switch (v) {
          case 0:
          case 125:
            w = 0;
          case 59 + s:
            Q == -1 && (L = kA(L, /\f/g, "")), l > 0 && mt(L) - u && jr(l > 32 ? pa(L + ";", r, t, u - 1, c) : pa(kA(L, " ", "") + ";", r, t, u - 2, c), c);
            break;
          case 59:
            L += ";";
          default:
            if (jr(I = da(L, e, t, n, s, o, a, y, b = [], O = [], u, i), i), v === 123)
              if (s === 0)
                jn(L, e, I, I, b, i, u, a, O);
              else
                switch (f === 99 && Me(L, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    jn(A, I, I, r && jr(da(A, I, I, 0, 0, o, a, y, o, b = [], u, O), O), o, O, u, a, r ? b : O);
                    break;
                  default:
                    jn(L, I, I, I, [""], O, 0, a, O);
                }
        }
        n = s = l = 0, p = Q = 1, y = L = "", u = B;
        break;
      case 58:
        u = 1 + mt(L), l = g;
      default:
        if (p < 1) {
          if (v == 123)
            --p;
          else if (v == 125 && p++ == 0 && Nu() == 125)
            continue;
        }
        switch (L += ji(v), v * p) {
          case 38:
            Q = s > 0 ? 1 : (L += "\f", -1);
            break;
          case 44:
            a[n++] = (mt(L) - 1) * Q, Q = 1;
            break;
          case 64:
            nr() === 45 && (L += Mo(Ct())), f = nr(), s = u = mt(y = L += Xu(kn())), v++;
            break;
          case 45:
            g === 45 && mt(L) == 2 && (p = 0);
        }
    }
  return i;
}
function da(A, e, t, r, o, i, B, a, c, n, s, u) {
  for (var f = o - 1, l = o === 0 ? i : [""], g = Rs(l), p = 0, w = 0, Q = 0; p < r; ++p)
    for (var v = 0, y = br(A, f + 1, f = Ts(w = B[p])), b = A; v < g; ++v)
      (b = _s(w > 0 ? l[v] + " " + y : kA(y, /&\f/g, l[v]))) && (c[Q++] = b);
  return go(A, e, t, o === 0 ? Bo : a, c, n, s, u);
}
function Wu(A, e, t, r) {
  return go(A, e, t, Ks, ji(Mu()), br(A, 2, -2), 0, r);
}
function pa(A, e, t, r, o) {
  return go(A, e, t, ki, br(A, 0, r), br(A, r + 1, -1), r, o);
}
function Ns(A, e, t) {
  switch (_u(A, e)) {
    case 5103:
      return re + "print-" + A + A;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return re + A + A;
    case 4789:
      return qr + A + A;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return re + A + qr + A + de + A + A;
    case 5936:
      switch (Me(A, e + 11)) {
        case 114:
          return re + A + de + kA(A, /[svh]\w+-[tblr]{2}/, "tb") + A;
        case 108:
          return re + A + de + kA(A, /[svh]\w+-[tblr]{2}/, "tb-rl") + A;
        case 45:
          return re + A + de + kA(A, /[svh]\w+-[tblr]{2}/, "lr") + A;
      }
    case 6828:
    case 4268:
    case 2903:
      return re + A + de + A + A;
    case 6165:
      return re + A + de + "flex-" + A + A;
    case 5187:
      return re + A + kA(A, /(\w+).+(:[^]+)/, re + "box-$1$2" + de + "flex-$1$2") + A;
    case 5443:
      return re + A + de + "flex-item-" + kA(A, /flex-|-self/g, "") + (Kt(A, /flex-|baseline/) ? "" : de + "grid-row-" + kA(A, /flex-|-self/g, "")) + A;
    case 4675:
      return re + A + de + "flex-line-pack" + kA(A, /align-content|flex-|-self/g, "") + A;
    case 5548:
      return re + A + de + kA(A, "shrink", "negative") + A;
    case 5292:
      return re + A + de + kA(A, "basis", "preferred-size") + A;
    case 6060:
      return re + "box-" + kA(A, "-grow", "") + re + A + de + kA(A, "grow", "positive") + A;
    case 4554:
      return re + kA(A, /([^-])(transform)/g, "$1" + re + "$2") + A;
    case 6187:
      return kA(kA(kA(A, /(zoom-|grab)/, re + "$1"), /(image-set)/, re + "$1"), A, "") + A;
    case 5495:
    case 3959:
      return kA(A, /(image-set\([^]*)/, re + "$1$`$1");
    case 4968:
      return kA(kA(A, /(.+:)(flex-)?(.*)/, re + "box-pack:$3" + de + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + re + A + A;
    case 4200:
      if (!Kt(A, /flex-|baseline/))
        return de + "grid-column-align" + br(A, e) + A;
      break;
    case 2592:
    case 3360:
      return de + kA(A, "template-", "") + A;
    case 4384:
    case 3616:
      return t && t.some(function(r, o) {
        return e = o, Kt(r.props, /grid-\w+-end/);
      }) ? ~Vn(A + (t = t[e].value), "span", 0) ? A : de + kA(A, "-start", "") + A + de + "grid-row-span:" + (~Vn(t, "span", 0) ? Kt(t, /\d+/) : +Kt(t, /\d+/) - +Kt(A, /\d+/)) + ";" : de + kA(A, "-start", "") + A;
    case 4896:
    case 4128:
      return t && t.some(function(r) {
        return Kt(r.props, /grid-\w+-start/);
      }) ? A : de + kA(kA(A, "-end", "-span"), "span ", "") + A;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return kA(A, /(.+)-inline(.+)/, re + "$1$2") + A;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (mt(A) - 1 - e > 6)
        switch (Me(A, e + 1)) {
          case 109:
            if (Me(A, e + 4) !== 45)
              break;
          case 102:
            return kA(A, /(.+:)(.+)-([^]+)/, "$1" + re + "$2-$3$1" + qr + (Me(A, e + 3) == 108 ? "$3" : "$2-$3")) + A;
          case 115:
            return ~Vn(A, "stretch", 0) ? Ns(kA(A, "stretch", "fill-available"), e, t) + A : A;
        }
      break;
    case 5152:
    case 5920:
      return kA(A, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, B, a, c, n) {
        return de + o + ":" + i + n + (B ? de + o + "-span:" + (a ? c : +c - +i) + n : "") + A;
      });
    case 4949:
      if (Me(A, e + 6) === 121)
        return kA(A, ":", ":" + re) + A;
      break;
    case 6444:
      switch (Me(A, Me(A, 14) === 45 ? 18 : 11)) {
        case 120:
          return kA(A, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + re + (Me(A, 14) === 45 ? "inline-" : "") + "box$3$1" + re + "$2$3$1" + de + "$2box$3") + A;
        case 100:
          return kA(A, ":", ":" + de) + A;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return kA(A, "scroll-", "scroll-snap-") + A;
  }
  return A;
}
function zn(A, e) {
  for (var t = "", r = 0; r < A.length; r++)
    t += e(A[r], r, A, e) || "";
  return t;
}
function Yu(A, e, t, r) {
  switch (A.type) {
    case Tu:
      if (A.children.length)
        break;
    case Du:
    case ki:
      return A.return = A.return || A.value;
    case Ks:
      return "";
    case Ds:
      return A.return = A.value + "{" + zn(A.children, r) + "}";
    case Bo:
      if (!mt(A.value = A.props.join(",")))
        return "";
  }
  return mt(t = zn(A.children, r)) ? A.return = A.value + "{" + t + "}" : "";
}
function Zu(A) {
  var e = Rs(A);
  return function(t, r, o, i) {
    for (var B = "", a = 0; a < e; a++)
      B += A[a](t, r, o, i) || "";
    return B;
  };
}
function $u(A) {
  return function(e) {
    e.root || (e = e.return) && A(e);
  };
}
function zu(A, e, t, r) {
  if (A.length > -1 && !A.return)
    switch (A.type) {
      case ki:
        A.return = Ns(A.value, A.length, t);
        return;
      case Ds:
        return zn([Rt(A, { value: kA(A.value, "@", "@" + re) })], r);
      case Bo:
        if (A.length)
          return Ru(t = A.props, function(o) {
            switch (Kt(o, r = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                hr(Rt(A, { props: [kA(o, /:(read-\w+)/, ":" + qr + "$1")] })), hr(Rt(A, { props: [o] })), Bi(A, { props: wa(t, r) });
                break;
              case "::placeholder":
                hr(Rt(A, { props: [kA(o, /:(plac\w+)/, ":" + re + "input-$1")] })), hr(Rt(A, { props: [kA(o, /:(plac\w+)/, ":" + qr + "$1")] })), hr(Rt(A, { props: [kA(o, /:(plac\w+)/, de + "input-$1")] })), hr(Rt(A, { props: [o] })), Bi(A, { props: wa(t, r) });
                break;
            }
            return "";
          });
    }
}
var qu = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, cr = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Ps = "active", Gs = "data-styled-version", wo = "6.1.8", Xi = `/*!sc*/
`, Ji = typeof window < "u" && "HTMLElement" in window, Af = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Qa = /invalid hook call/i, hn = /* @__PURE__ */ new Set(), ef = function(A, e) {
  if (process.env.NODE_ENV !== "production") {
    var t = e ? ' with the id of "'.concat(e, '"') : "", r = "The component ".concat(A).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, o = console.error;
    try {
      var i = !0;
      console.error = function(B) {
        for (var a = [], c = 1; c < arguments.length; c++)
          a[c - 1] = arguments[c];
        Qa.test(B) ? (i = !1, hn.delete(r)) : o.apply(void 0, Er([B], a, !1));
      }, Os(), i && !hn.has(r) && (console.warn(r), hn.add(r));
    } catch (B) {
      Qa.test(B.message) && hn.delete(r);
    } finally {
      console.error = o;
    }
  }
}, po = Object.freeze([]), Hr = Object.freeze({});
function tf(A, e, t) {
  return t === void 0 && (t = Hr), A.theme !== t.theme && A.theme || e || t.theme;
}
var hi = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), rf = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, nf = /(^-|-$)/g;
function Ca(A) {
  return A.replace(rf, "-").replace(nf, "");
}
var of = /(a)(d)/gi, wn = 52, va = function(A) {
  return String.fromCharCode(A + (A > 25 ? 39 : 97));
};
function wi(A) {
  var e, t = "";
  for (e = Math.abs(A); e > wn; e = e / wn | 0)
    t = va(e % wn) + t;
  return (va(e % wn) + t).replace(of, "$1-$2");
}
var No, Vs = 5381, Ar = function(A, e) {
  for (var t = e.length; t; )
    A = 33 * A ^ e.charCodeAt(--t);
  return A;
}, ks = function(A) {
  return Ar(Vs, A);
};
function af(A) {
  return wi(ks(A) >>> 0);
}
function js(A) {
  return process.env.NODE_ENV !== "production" && typeof A == "string" && A || A.displayName || A.name || "Component";
}
function Po(A) {
  return typeof A == "string" && (process.env.NODE_ENV === "production" || A.charAt(0) === A.charAt(0).toLowerCase());
}
var Xs = typeof Symbol == "function" && Symbol.for, Js = Xs ? Symbol.for("react.memo") : 60115, sf = Xs ? Symbol.for("react.forward_ref") : 60112, cf = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, uf = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Ws = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, ff = ((No = {})[sf] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, No[Js] = Ws, No);
function Ua(A) {
  return ("type" in (e = A) && e.type.$$typeof) === Js ? Ws : "$$typeof" in A ? ff[A.$$typeof] : cf;
  var e;
}
var Bf = Object.defineProperty, lf = Object.getOwnPropertyNames, Fa = Object.getOwnPropertySymbols, gf = Object.getOwnPropertyDescriptor, hf = Object.getPrototypeOf, ya = Object.prototype;
function Ys(A, e, t) {
  if (typeof e != "string") {
    if (ya) {
      var r = hf(e);
      r && r !== ya && Ys(A, r, t);
    }
    var o = lf(e);
    Fa && (o = o.concat(Fa(e)));
    for (var i = Ua(A), B = Ua(e), a = 0; a < o.length; ++a) {
      var c = o[a];
      if (!(c in uf || t && t[c] || B && c in B || i && c in i)) {
        var n = gf(e, c);
        try {
          Bf(A, c, n);
        } catch {
        }
      }
    }
  }
  return A;
}
function Sr(A) {
  return typeof A == "function";
}
function Wi(A) {
  return typeof A == "object" && "styledComponentId" in A;
}
function tr(A, e) {
  return A && e ? "".concat(A, " ").concat(e) : A || e || "";
}
function ma(A, e) {
  if (A.length === 0)
    return "";
  for (var t = A[0], r = 1; r < A.length; r++)
    t += e ? e + A[r] : A[r];
  return t;
}
function xr(A) {
  return A !== null && typeof A == "object" && A.constructor.name === Object.name && !("props" in A && A.$$typeof);
}
function di(A, e, t) {
  if (t === void 0 && (t = !1), !t && !xr(A) && !Array.isArray(A))
    return e;
  if (Array.isArray(e))
    for (var r = 0; r < e.length; r++)
      A[r] = di(A[r], e[r]);
  else if (xr(e))
    for (var r in e)
      A[r] = di(A[r], e[r]);
  return A;
}
function Yi(A, e) {
  Object.defineProperty(A, "toString", { value: e });
}
var wf = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
function df() {
  for (var A = [], e = 0; e < arguments.length; e++)
    A[e] = arguments[e];
  for (var t = A[0], r = [], o = 1, i = A.length; o < i; o += 1)
    r.push(A[o]);
  return r.forEach(function(B) {
    t = t.replace(/%[a-z]/, B);
  }), t;
}
function Kr(A) {
  for (var e = [], t = 1; t < arguments.length; t++)
    e[t - 1] = arguments[t];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(A, " for more information.").concat(e.length > 0 ? " Args: ".concat(e.join(", ")) : "")) : new Error(df.apply(void 0, Er([wf[A]], e, !1)).trim());
}
var pf = function() {
  function A(e) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e;
  }
  return A.prototype.indexOfGroup = function(e) {
    for (var t = 0, r = 0; r < e; r++)
      t += this.groupSizes[r];
    return t;
  }, A.prototype.insertRules = function(e, t) {
    if (e >= this.groupSizes.length) {
      for (var r = this.groupSizes, o = r.length, i = o; e >= i; )
        if ((i <<= 1) < 0)
          throw Kr(16, "".concat(e));
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(r), this.length = i;
      for (var B = o; B < i; B++)
        this.groupSizes[B] = 0;
    }
    for (var a = this.indexOfGroup(e + 1), c = (B = 0, t.length); B < c; B++)
      this.tag.insertRule(a, t[B]) && (this.groupSizes[e]++, a++);
  }, A.prototype.clearGroup = function(e) {
    if (e < this.length) {
      var t = this.groupSizes[e], r = this.indexOfGroup(e), o = r + t;
      this.groupSizes[e] = 0;
      for (var i = r; i < o; i++)
        this.tag.deleteRule(r);
    }
  }, A.prototype.getGroup = function(e) {
    var t = "";
    if (e >= this.length || this.groupSizes[e] === 0)
      return t;
    for (var r = this.groupSizes[e], o = this.indexOfGroup(e), i = o + r, B = o; B < i; B++)
      t += "".concat(this.tag.getRule(B)).concat(Xi);
    return t;
  }, A;
}(), Xn = /* @__PURE__ */ new Map(), qn = /* @__PURE__ */ new Map(), Jn = 1, dn = function(A) {
  if (Xn.has(A))
    return Xn.get(A);
  for (; qn.has(Jn); )
    Jn++;
  var e = Jn++;
  if (process.env.NODE_ENV !== "production" && ((0 | e) < 0 || e > 1073741824))
    throw Kr(16, "".concat(e));
  return Xn.set(A, e), qn.set(e, A), e;
}, Qf = function(A, e) {
  Jn = e + 1, Xn.set(A, e), qn.set(e, A);
}, Cf = "style[".concat(cr, "][").concat(Gs, '="').concat(wo, '"]'), vf = new RegExp("^".concat(cr, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Uf = function(A, e, t) {
  for (var r, o = t.split(","), i = 0, B = o.length; i < B; i++)
    (r = o[i]) && A.registerName(e, r);
}, Ff = function(A, e) {
  for (var t, r = ((t = e.textContent) !== null && t !== void 0 ? t : "").split(Xi), o = [], i = 0, B = r.length; i < B; i++) {
    var a = r[i].trim();
    if (a) {
      var c = a.match(vf);
      if (c) {
        var n = 0 | parseInt(c[1], 10), s = c[2];
        n !== 0 && (Qf(s, n), Uf(A, s, c[3]), A.getTag().insertRules(n, o)), o.length = 0;
      } else
        o.push(a);
    }
  }
};
function yf() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Zs = function(A) {
  var e = document.head, t = A || e, r = document.createElement("style"), o = function(a) {
    var c = Array.from(a.querySelectorAll("style[".concat(cr, "]")));
    return c[c.length - 1];
  }(t), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(cr, Ps), r.setAttribute(Gs, wo);
  var B = yf();
  return B && r.setAttribute("nonce", B), t.insertBefore(r, i), r;
}, mf = function() {
  function A(e) {
    this.element = Zs(e), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet)
        return t.sheet;
      for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
        var B = r[o];
        if (B.ownerNode === t)
          return B;
      }
      throw Kr(17);
    }(this.element), this.length = 0;
  }
  return A.prototype.insertRule = function(e, t) {
    try {
      return this.sheet.insertRule(t, e), this.length++, !0;
    } catch {
      return !1;
    }
  }, A.prototype.deleteRule = function(e) {
    this.sheet.deleteRule(e), this.length--;
  }, A.prototype.getRule = function(e) {
    var t = this.sheet.cssRules[e];
    return t && t.cssText ? t.cssText : "";
  }, A;
}(), Ef = function() {
  function A(e) {
    this.element = Zs(e), this.nodes = this.element.childNodes, this.length = 0;
  }
  return A.prototype.insertRule = function(e, t) {
    if (e <= this.length && e >= 0) {
      var r = document.createTextNode(t);
      return this.element.insertBefore(r, this.nodes[e] || null), this.length++, !0;
    }
    return !1;
  }, A.prototype.deleteRule = function(e) {
    this.element.removeChild(this.nodes[e]), this.length--;
  }, A.prototype.getRule = function(e) {
    return e < this.length ? this.nodes[e].textContent : "";
  }, A;
}(), bf = function() {
  function A(e) {
    this.rules = [], this.length = 0;
  }
  return A.prototype.insertRule = function(e, t) {
    return e <= this.length && (this.rules.splice(e, 0, t), this.length++, !0);
  }, A.prototype.deleteRule = function(e) {
    this.rules.splice(e, 1), this.length--;
  }, A.prototype.getRule = function(e) {
    return e < this.length ? this.rules[e] : "";
  }, A;
}(), Ea = Ji, If = { isServer: !Ji, useCSSOMInjection: !Af }, $s = function() {
  function A(e, t, r) {
    e === void 0 && (e = Hr), t === void 0 && (t = {});
    var o = this;
    this.options = tt(tt({}, If), e), this.gs = t, this.names = new Map(r), this.server = !!e.isServer, !this.server && Ji && Ea && (Ea = !1, function(i) {
      for (var B = document.querySelectorAll(Cf), a = 0, c = B.length; a < c; a++) {
        var n = B[a];
        n && n.getAttribute(cr) !== Ps && (Ff(i, n), n.parentNode && n.parentNode.removeChild(n));
      }
    }(this)), Yi(this, function() {
      return function(i) {
        for (var B = i.getTag(), a = B.length, c = "", n = function(u) {
          var f = function(Q) {
            return qn.get(Q);
          }(u);
          if (f === void 0)
            return "continue";
          var l = i.names.get(f), g = B.getGroup(u);
          if (l === void 0 || g.length === 0)
            return "continue";
          var p = "".concat(cr, ".g").concat(u, '[id="').concat(f, '"]'), w = "";
          l !== void 0 && l.forEach(function(Q) {
            Q.length > 0 && (w += "".concat(Q, ","));
          }), c += "".concat(g).concat(p, '{content:"').concat(w, '"}').concat(Xi);
        }, s = 0; s < a; s++)
          n(s);
        return c;
      }(o);
    });
  }
  return A.registerId = function(e) {
    return dn(e);
  }, A.prototype.reconstructWithOptions = function(e, t) {
    return t === void 0 && (t = !0), new A(tt(tt({}, this.options), e), this.gs, t && this.names || void 0);
  }, A.prototype.allocateGSInstance = function(e) {
    return this.gs[e] = (this.gs[e] || 0) + 1;
  }, A.prototype.getTag = function() {
    return this.tag || (this.tag = (e = function(t) {
      var r = t.useCSSOMInjection, o = t.target;
      return t.isServer ? new bf(o) : r ? new mf(o) : new Ef(o);
    }(this.options), new pf(e)));
    var e;
  }, A.prototype.hasNameForId = function(e, t) {
    return this.names.has(e) && this.names.get(e).has(t);
  }, A.prototype.registerName = function(e, t) {
    if (dn(e), this.names.has(e))
      this.names.get(e).add(t);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(t), this.names.set(e, r);
    }
  }, A.prototype.insertRules = function(e, t, r) {
    this.registerName(e, t), this.getTag().insertRules(dn(e), r);
  }, A.prototype.clearNames = function(e) {
    this.names.has(e) && this.names.get(e).clear();
  }, A.prototype.clearRules = function(e) {
    this.getTag().clearGroup(dn(e)), this.clearNames(e);
  }, A.prototype.clearTag = function() {
    this.tag = void 0;
  }, A;
}(), Hf = /&/g, Sf = /^\s*\/\/.*$/gm;
function zs(A, e) {
  return A.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(e, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(e, " ")), t.props = t.props.map(function(r) {
      return "".concat(e, " ").concat(r);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = zs(t.children, e)), t;
  });
}
function xf(A) {
  var e, t, r, o = A === void 0 ? Hr : A, i = o.options, B = i === void 0 ? Hr : i, a = o.plugins, c = a === void 0 ? po : a, n = function(f, l, g) {
    return g.startsWith(t) && g.endsWith(t) && g.replaceAll(t, "").length > 0 ? ".".concat(e) : f;
  }, s = c.slice();
  s.push(function(f) {
    f.type === Bo && f.value.includes("&") && (f.props[0] = f.props[0].replace(Hf, t).replace(r, n));
  }), B.prefix && s.push(zu), s.push(Yu);
  var u = function(f, l, g, p) {
    l === void 0 && (l = ""), g === void 0 && (g = ""), p === void 0 && (p = "&"), e = p, t = l, r = new RegExp("\\".concat(t, "\\b"), "g");
    var w = f.replace(Sf, ""), Q = Ju(g || l ? "".concat(g, " ").concat(l, " { ").concat(w, " }") : w);
    B.namespace && (Q = zs(Q, B.namespace));
    var v = [];
    return zn(Q, Zu(s.concat($u(function(y) {
      return v.push(y);
    })))), v;
  };
  return u.hash = c.length ? c.reduce(function(f, l) {
    return l.name || Kr(15), Ar(f, l.name);
  }, Vs).toString() : "", u;
}
var Lf = new $s(), pi = xf(), qs = Jt.createContext({ shouldForwardProp: void 0, styleSheet: Lf, stylis: pi });
qs.Consumer;
Jt.createContext(void 0);
function ba() {
  return ui(qs);
}
var Ia = function() {
  function A(e, t) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = pi);
      var B = r.name + i.hash;
      o.hasNameForId(r.id, B) || o.insertRules(r.id, B, i(r.rules, B, "@keyframes"));
    }, this.name = e, this.id = "sc-keyframes-".concat(e), this.rules = t, Yi(this, function() {
      throw Kr(12, String(r.name));
    });
  }
  return A.prototype.getName = function(e) {
    return e === void 0 && (e = pi), this.name + e.hash;
  }, A;
}(), Of = function(A) {
  return A >= "A" && A <= "Z";
};
function Ha(A) {
  for (var e = "", t = 0; t < A.length; t++) {
    var r = A[t];
    if (t === 1 && r === "-" && A[0] === "-")
      return A;
    Of(r) ? e += "-" + r.toLowerCase() : e += r;
  }
  return e.startsWith("ms-") ? "-" + e : e;
}
var Ac = function(A) {
  return A == null || A === !1 || A === "";
}, ec = function(A) {
  var e, t, r = [];
  for (var o in A) {
    var i = A[o];
    A.hasOwnProperty(o) && !Ac(i) && (Array.isArray(i) && i.isCss || Sr(i) ? r.push("".concat(Ha(o), ":"), i, ";") : xr(i) ? r.push.apply(r, Er(Er(["".concat(o, " {")], ec(i), !1), ["}"], !1)) : r.push("".concat(Ha(o), ": ").concat((e = o, (t = i) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || t === 0 || e in qu || e.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return r;
};
function or(A, e, t, r) {
  if (Ac(A))
    return [];
  if (Wi(A))
    return [".".concat(A.styledComponentId)];
  if (Sr(A)) {
    if (!Sr(i = A) || i.prototype && i.prototype.isReactComponent || !e)
      return [A];
    var o = A(e);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof Ia || xr(o) || o === null || console.error("".concat(js(A), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), or(o, e, t, r);
  }
  var i;
  return A instanceof Ia ? t ? (A.inject(t, r), [A.getName(r)]) : [A] : xr(A) ? ec(A) : Array.isArray(A) ? Array.prototype.concat.apply(po, A.map(function(B) {
    return or(B, e, t, r);
  })) : [A.toString()];
}
function Kf(A) {
  for (var e = 0; e < A.length; e += 1) {
    var t = A[e];
    if (Sr(t) && !Wi(t))
      return !1;
  }
  return !0;
}
var Df = ks(wo), Tf = function() {
  function A(e, t, r) {
    this.rules = e, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && Kf(e), this.componentId = t, this.baseHash = Ar(Df, t), this.baseStyle = r, $s.registerId(t);
  }
  return A.prototype.generateAndInjectStyles = function(e, t, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e, t, r) : "";
    if (this.isStatic && !r.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId))
        o = tr(o, this.staticRulesId);
      else {
        var i = ma(or(this.rules, e, t, r)), B = wi(Ar(this.baseHash, i) >>> 0);
        if (!t.hasNameForId(this.componentId, B)) {
          var a = r(i, ".".concat(B), void 0, this.componentId);
          t.insertRules(this.componentId, B, a);
        }
        o = tr(o, B), this.staticRulesId = B;
      }
    else {
      for (var c = Ar(this.baseHash, r.hash), n = "", s = 0; s < this.rules.length; s++) {
        var u = this.rules[s];
        if (typeof u == "string")
          n += u, process.env.NODE_ENV !== "production" && (c = Ar(c, u));
        else if (u) {
          var f = ma(or(u, e, t, r));
          c = Ar(c, f + s), n += f;
        }
      }
      if (n) {
        var l = wi(c >>> 0);
        t.hasNameForId(this.componentId, l) || t.insertRules(this.componentId, l, r(n, ".".concat(l), void 0, this.componentId)), o = tr(o, l);
      }
    }
    return o;
  }, A;
}(), tc = Jt.createContext(void 0);
tc.Consumer;
var Go = {}, Sa = /* @__PURE__ */ new Set();
function _f(A, e, t) {
  var r = Wi(A), o = A, i = !Po(A), B = e.attrs, a = B === void 0 ? po : B, c = e.componentId, n = c === void 0 ? function(b, O) {
    var I = typeof b != "string" ? "sc" : Ca(b);
    Go[I] = (Go[I] || 0) + 1;
    var L = "".concat(I, "-").concat(af(wo + I + Go[I]));
    return O ? "".concat(O, "-").concat(L) : L;
  }(e.displayName, e.parentComponentId) : c, s = e.displayName, u = s === void 0 ? function(b) {
    return Po(b) ? "styled.".concat(b) : "Styled(".concat(js(b), ")");
  }(A) : s, f = e.displayName && e.componentId ? "".concat(Ca(e.displayName), "-").concat(e.componentId) : e.componentId || n, l = r && o.attrs ? o.attrs.concat(a).filter(Boolean) : a, g = e.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var p = o.shouldForwardProp;
    if (e.shouldForwardProp) {
      var w = e.shouldForwardProp;
      g = function(b, O) {
        return p(b, O) && w(b, O);
      };
    } else
      g = p;
  }
  var Q = new Tf(t, f, r ? o.componentStyle : void 0);
  function v(b, O) {
    return function(I, L, N) {
      var H = I.attrs, j = I.componentStyle, V = I.defaultProps, X = I.foldedComponentIds, x = I.styledComponentId, _ = I.target, Z = Jt.useContext(tc), iA = ba(), rA = I.shouldForwardProp || iA.shouldForwardProp;
      process.env.NODE_ENV !== "production" && la(x);
      var IA = tf(L, Z, V) || Hr, HA = function(R, W, uA) {
        for (var tA, EA = tt(tt({}, W), { className: void 0, theme: uA }), DA = 0; DA < R.length; DA += 1) {
          var AA = Sr(tA = R[DA]) ? tA(EA) : tA;
          for (var aA in AA)
            EA[aA] = aA === "className" ? tr(EA[aA], AA[aA]) : aA === "style" ? tt(tt({}, EA[aA]), AA[aA]) : AA[aA];
        }
        return W.className && (EA.className = tr(EA.className, W.className)), EA;
      }(H, L, IA), vA = HA.as || _, mA = {};
      for (var QA in HA)
        HA[QA] === void 0 || QA[0] === "$" || QA === "as" || QA === "theme" && HA.theme === IA || (QA === "forwardedAs" ? mA.as = HA.forwardedAs : rA && !rA(QA, vA) || (mA[QA] = HA[QA], rA || process.env.NODE_ENV !== "development" || Ku(QA) || Sa.has(QA) || !hi.has(vA) || (Sa.add(QA), console.warn('styled-components: it looks like an unknown prop "'.concat(QA, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var gA = function(R, W) {
        var uA = ba(), tA = R.generateAndInjectStyles(W, uA.styleSheet, uA.stylis);
        return process.env.NODE_ENV !== "production" && la(tA), tA;
      }(j, HA);
      process.env.NODE_ENV !== "production" && I.warnTooManyClasses && I.warnTooManyClasses(gA);
      var M = tr(X, x);
      return gA && (M += " " + gA), HA.className && (M += " " + HA.className), mA[Po(vA) && !hi.has(vA) ? "class" : "className"] = M, mA.ref = N, Eu(vA, mA);
    }(y, b, O);
  }
  v.displayName = u;
  var y = Jt.forwardRef(v);
  return y.attrs = l, y.componentStyle = Q, y.displayName = u, y.shouldForwardProp = g, y.foldedComponentIds = r ? tr(o.foldedComponentIds, o.styledComponentId) : "", y.styledComponentId = f, y.target = r ? o.target : A, Object.defineProperty(y, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(b) {
    this._foldedDefaultProps = r ? function(O) {
      for (var I = [], L = 1; L < arguments.length; L++)
        I[L - 1] = arguments[L];
      for (var N = 0, H = I; N < H.length; N++)
        di(O, H[N], !0);
      return O;
    }({}, o.defaultProps, b) : b;
  } }), process.env.NODE_ENV !== "production" && (ef(u, f), y.warnTooManyClasses = /* @__PURE__ */ function(b, O) {
    var I = {}, L = !1;
    return function(N) {
      if (!L && (I[N] = !0, Object.keys(I).length >= 200)) {
        var H = O ? ' with the id of "'.concat(O, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(b).concat(H, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), L = !0, I = {};
      }
    };
  }(u, f)), Yi(y, function() {
    return ".".concat(y.styledComponentId);
  }), i && Ys(y, A, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), y;
}
function xa(A, e) {
  for (var t = [A[0]], r = 0, o = e.length; r < o; r += 1)
    t.push(e[r], A[r + 1]);
  return t;
}
var La = function(A) {
  return Object.assign(A, { isCss: !0 });
};
function Rf(A) {
  for (var e = [], t = 1; t < arguments.length; t++)
    e[t - 1] = arguments[t];
  if (Sr(A) || xr(A))
    return La(or(xa(po, Er([A], e, !0))));
  var r = A;
  return e.length === 0 && r.length === 1 && typeof r[0] == "string" ? or(r) : La(or(xa(r, e)));
}
function Qi(A, e, t) {
  if (t === void 0 && (t = Hr), !e)
    throw Kr(1, e);
  var r = function(o) {
    for (var i = [], B = 1; B < arguments.length; B++)
      i[B - 1] = arguments[B];
    return A(e, t, Rf.apply(void 0, Er([o], i, !1)));
  };
  return r.attrs = function(o) {
    return Qi(A, e, tt(tt({}, t), { attrs: Array.prototype.concat(t.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return Qi(A, e, tt(tt({}, t), o));
  }, r;
}
var rc = function(A) {
  return Qi(_f, A);
}, nc = rc;
hi.forEach(function(A) {
  nc[A] = rc(A);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var pn = "__sc-".concat(cr, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[pn] || (window[pn] = 0), window[pn] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[pn] += 1);
var Ao = { exports: {} };
/*! For license information please see index.js.LICENSE.txt */
Ao.exports;
(function(A, e) {
  (function(t, r) {
    A.exports = r(Jt);
  })(Rr, (t) => (() => {
    var r = { 2761: (a) => {
      a.exports = function(c) {
        if (typeof c != "function")
          throw TypeError(c + " is not a function!");
        return c;
      };
    }, 2094: (a, c, n) => {
      var s = n(2190)("unscopables"), u = Array.prototype;
      u[s] == null && n(4216)(u, s, {}), a.exports = function(f) {
        u[s][f] = !0;
      };
    }, 8492: (a, c, n) => {
      var s = n(2070)(!0);
      a.exports = function(u, f, l) {
        return f + (l ? s(u, f).length : 1);
      };
    }, 5824: (a) => {
      a.exports = function(c, n, s, u) {
        if (!(c instanceof n) || u !== void 0 && u in c)
          throw TypeError(s + ": incorrect invocation!");
        return c;
      };
    }, 6365: (a, c, n) => {
      var s = n(7334);
      a.exports = function(u) {
        if (!s(u))
          throw TypeError(u + " is not an object!");
        return u;
      };
    }, 6257: (a, c, n) => {
      var s = n(6033), u = n(8615), f = n(6078);
      a.exports = [].copyWithin || function(l, g) {
        var p = s(this), w = f(p.length), Q = u(l, w), v = u(g, w), y = arguments.length > 2 ? arguments[2] : void 0, b = Math.min((y === void 0 ? w : u(y, w)) - v, w - Q), O = 1;
        for (v < Q && Q < v + b && (O = -1, v += b - 1, Q += b - 1); b-- > 0; )
          v in p ? p[Q] = p[v] : delete p[Q], Q += O, v += O;
        return p;
      };
    }, 3195: (a, c, n) => {
      var s = n(6033), u = n(8615), f = n(6078);
      a.exports = function(l) {
        for (var g = s(this), p = f(g.length), w = arguments.length, Q = u(w > 1 ? arguments[1] : void 0, p), v = w > 2 ? arguments[2] : void 0, y = v === void 0 ? p : u(v, p); y > Q; )
          g[Q++] = l;
        return g;
      };
    }, 9021: (a, c, n) => {
      var s = n(5703), u = n(6078), f = n(8615);
      a.exports = function(l) {
        return function(g, p, w) {
          var Q, v = s(g), y = u(v.length), b = f(w, y);
          if (l && p != p) {
            for (; y > b; )
              if ((Q = v[b++]) != Q)
                return !0;
          } else
            for (; y > b; b++)
              if ((l || b in v) && v[b] === p)
                return l || b || 0;
          return !l && -1;
        };
      };
    }, 8309: (a, c, n) => {
      var s = n(1528), u = n(8467), f = n(6033), l = n(6078), g = n(3531);
      a.exports = function(p, w) {
        var Q = p == 1, v = p == 2, y = p == 3, b = p == 4, O = p == 6, I = p == 5 || O, L = w || g;
        return function(N, H, j) {
          for (var V, X, x = f(N), _ = u(x), Z = s(H, j, 3), iA = l(_.length), rA = 0, IA = Q ? L(N, iA) : v ? L(N, 0) : void 0; iA > rA; rA++)
            if ((I || rA in _) && (X = Z(V = _[rA], rA, x), p)) {
              if (Q)
                IA[rA] = X;
              else if (X)
                switch (p) {
                  case 3:
                    return !0;
                  case 5:
                    return V;
                  case 6:
                    return rA;
                  case 2:
                    IA.push(V);
                }
              else if (b)
                return !1;
            }
          return O ? -1 : y || b ? b : IA;
        };
      };
    }, 9291: (a, c, n) => {
      var s = n(2761), u = n(6033), f = n(8467), l = n(6078);
      a.exports = function(g, p, w, Q, v) {
        s(p);
        var y = u(g), b = f(y), O = l(y.length), I = v ? O - 1 : 0, L = v ? -1 : 1;
        if (w < 2)
          for (; ; ) {
            if (I in b) {
              Q = b[I], I += L;
              break;
            }
            if (I += L, v ? I < 0 : O <= I)
              throw TypeError("Reduce of empty array with no initial value");
          }
        for (; v ? I >= 0 : O > I; I += L)
          I in b && (Q = p(Q, b[I], I, y));
        return Q;
      };
    }, 1071: (a, c, n) => {
      var s = n(7334), u = n(9141), f = n(2190)("species");
      a.exports = function(l) {
        var g;
        return u(l) && (typeof (g = l.constructor) != "function" || g !== Array && !u(g.prototype) || (g = void 0), s(g) && (g = g[f]) === null && (g = void 0)), g === void 0 ? Array : g;
      };
    }, 3531: (a, c, n) => {
      var s = n(1071);
      a.exports = function(u, f) {
        return new (s(u))(f);
      };
    }, 9337: (a, c, n) => {
      var s = n(2761), u = n(7334), f = n(7757), l = [].slice, g = {}, p = function(w, Q, v) {
        if (!(Q in g)) {
          for (var y = [], b = 0; b < Q; b++)
            y[b] = "a[" + b + "]";
          g[Q] = Function("F,a", "return new F(" + y.join(",") + ")");
        }
        return g[Q](w, v);
      };
      a.exports = Function.bind || function(w) {
        var Q = s(this), v = l.call(arguments, 1), y = function() {
          var b = v.concat(l.call(arguments));
          return this instanceof y ? p(Q, b.length, b) : f(Q, b, w);
        };
        return u(Q.prototype) && (y.prototype = Q.prototype), y;
      };
    }, 106: (a, c, n) => {
      var s = n(6688), u = n(2190)("toStringTag"), f = s(/* @__PURE__ */ function() {
        return arguments;
      }()) == "Arguments";
      a.exports = function(l) {
        var g, p, w;
        return l === void 0 ? "Undefined" : l === null ? "Null" : typeof (p = function(Q, v) {
          try {
            return Q[v];
          } catch {
          }
        }(g = Object(l), u)) == "string" ? p : f ? s(g) : (w = s(g)) == "Object" && typeof g.callee == "function" ? "Arguments" : w;
      };
    }, 6688: (a) => {
      var c = {}.toString;
      a.exports = function(n) {
        return c.call(n).slice(8, -1);
      };
    }, 5635: (a, c, n) => {
      var s = n(8558).f, u = n(2897), f = n(2243), l = n(1528), g = n(5824), p = n(1891), w = n(1195), Q = n(5038), v = n(9766), y = n(6628), b = n(998).fastKey, O = n(9060), I = y ? "_s" : "size", L = function(N, H) {
        var j, V = b(H);
        if (V !== "F")
          return N._i[V];
        for (j = N._f; j; j = j.n)
          if (j.k == H)
            return j;
      };
      a.exports = { getConstructor: function(N, H, j, V) {
        var X = N(function(x, _) {
          g(x, X, H, "_i"), x._t = H, x._i = u(null), x._f = void 0, x._l = void 0, x[I] = 0, _ != null && p(_, j, x[V], x);
        });
        return f(X.prototype, { clear: function() {
          for (var x = O(this, H), _ = x._i, Z = x._f; Z; Z = Z.n)
            Z.r = !0, Z.p && (Z.p = Z.p.n = void 0), delete _[Z.i];
          x._f = x._l = void 0, x[I] = 0;
        }, delete: function(x) {
          var _ = O(this, H), Z = L(_, x);
          if (Z) {
            var iA = Z.n, rA = Z.p;
            delete _._i[Z.i], Z.r = !0, rA && (rA.n = iA), iA && (iA.p = rA), _._f == Z && (_._f = iA), _._l == Z && (_._l = rA), _[I]--;
          }
          return !!Z;
        }, forEach: function(x) {
          O(this, H);
          for (var _, Z = l(x, arguments.length > 1 ? arguments[1] : void 0, 3); _ = _ ? _.n : this._f; )
            for (Z(_.v, _.k, this); _ && _.r; )
              _ = _.p;
        }, has: function(x) {
          return !!L(O(this, H), x);
        } }), y && s(X.prototype, "size", { get: function() {
          return O(this, H)[I];
        } }), X;
      }, def: function(N, H, j) {
        var V, X, x = L(N, H);
        return x ? x.v = j : (N._l = x = { i: X = b(H, !0), k: H, v: j, p: V = N._l, n: void 0, r: !1 }, N._f || (N._f = x), V && (V.n = x), N[I]++, X !== "F" && (N._i[X] = x)), N;
      }, getEntry: L, setStrong: function(N, H, j) {
        w(N, H, function(V, X) {
          this._t = O(V, H), this._k = X, this._l = void 0;
        }, function() {
          for (var V = this, X = V._k, x = V._l; x && x.r; )
            x = x.p;
          return V._t && (V._l = x = x ? x.n : V._t._f) ? Q(0, X == "keys" ? x.k : X == "values" ? x.v : [x.k, x.v]) : (V._t = void 0, Q(1));
        }, j ? "entries" : "values", !j, !0), v(H);
      } };
    }, 7611: (a, c, n) => {
      var s = n(8113), u = n(5772), f = n(7738), l = n(2243), g = n(998), p = n(1891), w = n(5824), Q = n(7334), v = n(8625), y = n(3143), b = n(5727), O = n(8938);
      a.exports = function(I, L, N, H, j, V) {
        var X = s[I], x = X, _ = j ? "set" : "add", Z = x && x.prototype, iA = {}, rA = function(gA) {
          var M = Z[gA];
          f(Z, gA, gA == "delete" || gA == "has" ? function(R) {
            return !(V && !Q(R)) && M.call(this, R === 0 ? 0 : R);
          } : gA == "get" ? function(R) {
            return V && !Q(R) ? void 0 : M.call(this, R === 0 ? 0 : R);
          } : gA == "add" ? function(R) {
            return M.call(this, R === 0 ? 0 : R), this;
          } : function(R, W) {
            return M.call(this, R === 0 ? 0 : R, W), this;
          });
        };
        if (typeof x == "function" && (V || Z.forEach && !v(function() {
          new x().entries().next();
        }))) {
          var IA = new x(), HA = IA[_](V ? {} : -0, 1) != IA, vA = v(function() {
            IA.has(1);
          }), mA = y(function(gA) {
            new x(gA);
          }), QA = !V && v(function() {
            for (var gA = new x(), M = 5; M--; )
              gA[_](M, M);
            return !gA.has(-0);
          });
          mA || ((x = L(function(gA, M) {
            w(gA, x, I);
            var R = O(new X(), gA, x);
            return M != null && p(M, j, R[_], R), R;
          })).prototype = Z, Z.constructor = x), (vA || QA) && (rA("delete"), rA("has"), j && rA("get")), (QA || HA) && rA(_), V && Z.clear && delete Z.clear;
        } else
          x = H.getConstructor(L, I, j, _), l(x.prototype, N), g.NEED = !0;
        return b(x, I), iA[I] = x, u(u.G + u.W + u.F * (x != X), iA), V || H.setStrong(x, I, j), x;
      };
    }, 66: (a) => {
      var c = a.exports = { version: "2.6.12" };
      typeof __e == "number" && (__e = c);
    }, 6644: (a, c, n) => {
      var s = n(8558), u = n(6061);
      a.exports = function(f, l, g) {
        l in f ? s.f(f, l, u(0, g)) : f[l] = g;
      };
    }, 1528: (a, c, n) => {
      var s = n(2761);
      a.exports = function(u, f, l) {
        if (s(u), f === void 0)
          return u;
        switch (l) {
          case 1:
            return function(g) {
              return u.call(f, g);
            };
          case 2:
            return function(g, p) {
              return u.call(f, g, p);
            };
          case 3:
            return function(g, p, w) {
              return u.call(f, g, p, w);
            };
        }
        return function() {
          return u.apply(f, arguments);
        };
      };
    }, 1622: (a) => {
      a.exports = function(c) {
        if (c == null)
          throw TypeError("Can't call method on  " + c);
        return c;
      };
    }, 6628: (a, c, n) => {
      a.exports = !n(8625)(function() {
        return Object.defineProperty({}, "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }, 5050: (a, c, n) => {
      var s = n(7334), u = n(8113).document, f = s(u) && s(u.createElement);
      a.exports = function(l) {
        return f ? u.createElement(l) : {};
      };
    }, 3603: (a) => {
      a.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    }, 7820: (a, c, n) => {
      var s = n(2912), u = n(7957), f = n(5873);
      a.exports = function(l) {
        var g = s(l), p = u.f;
        if (p)
          for (var w, Q = p(l), v = f.f, y = 0; Q.length > y; )
            v.call(l, w = Q[y++]) && g.push(w);
        return g;
      };
    }, 5772: (a, c, n) => {
      var s = n(8113), u = n(66), f = n(4216), l = n(7738), g = n(1528), p = "prototype", w = function(Q, v, y) {
        var b, O, I, L, N = Q & w.F, H = Q & w.G, j = Q & w.S, V = Q & w.P, X = Q & w.B, x = H ? s : j ? s[v] || (s[v] = {}) : (s[v] || {})[p], _ = H ? u : u[v] || (u[v] = {}), Z = _[p] || (_[p] = {});
        for (b in H && (y = v), y)
          I = ((O = !N && x && x[b] !== void 0) ? x : y)[b], L = X && O ? g(I, s) : V && typeof I == "function" ? g(Function.call, I) : I, x && l(x, b, I, Q & w.U), _[b] != I && f(_, b, L), V && Z[b] != I && (Z[b] = I);
      };
      s.core = u, w.F = 1, w.G = 2, w.S = 4, w.P = 8, w.B = 16, w.W = 32, w.U = 64, w.R = 128, a.exports = w;
    }, 6570: (a, c, n) => {
      var s = n(2190)("match");
      a.exports = function(u) {
        var f = /./;
        try {
          "/./"[u](f);
        } catch {
          try {
            return f[s] = !1, !"/./"[u](f);
          } catch {
          }
        }
        return !0;
      };
    }, 8625: (a) => {
      a.exports = function(c) {
        try {
          return !!c();
        } catch {
          return !0;
        }
      };
    }, 8897: (a, c, n) => {
      n(5846);
      var s = n(7738), u = n(4216), f = n(8625), l = n(1622), g = n(2190), p = n(3288), w = g("species"), Q = !f(function() {
        var y = /./;
        return y.exec = function() {
          var b = [];
          return b.groups = { a: "7" }, b;
        }, "".replace(y, "$<a>") !== "7";
      }), v = function() {
        var y = /(?:)/, b = y.exec;
        y.exec = function() {
          return b.apply(this, arguments);
        };
        var O = "ab".split(y);
        return O.length === 2 && O[0] === "a" && O[1] === "b";
      }();
      a.exports = function(y, b, O) {
        var I = g(y), L = !f(function() {
          var x = {};
          return x[I] = function() {
            return 7;
          }, ""[y](x) != 7;
        }), N = L ? !f(function() {
          var x = !1, _ = /a/;
          return _.exec = function() {
            return x = !0, null;
          }, y === "split" && (_.constructor = {}, _.constructor[w] = function() {
            return _;
          }), _[I](""), !x;
        }) : void 0;
        if (!L || !N || y === "replace" && !Q || y === "split" && !v) {
          var H = /./[I], j = O(l, I, ""[y], function(x, _, Z, iA, rA) {
            return _.exec === p ? L && !rA ? { done: !0, value: H.call(_, Z, iA) } : { done: !0, value: x.call(Z, _, iA) } : { done: !1 };
          }), V = j[0], X = j[1];
          s(String.prototype, y, V), u(RegExp.prototype, I, b == 2 ? function(x, _) {
            return X.call(x, this, _);
          } : function(x) {
            return X.call(x, this);
          });
        }
      };
    }, 4859: (a, c, n) => {
      var s = n(6365);
      a.exports = function() {
        var u = s(this), f = "";
        return u.global && (f += "g"), u.ignoreCase && (f += "i"), u.multiline && (f += "m"), u.unicode && (f += "u"), u.sticky && (f += "y"), f;
      };
    }, 1891: (a, c, n) => {
      var s = n(1528), u = n(3221), f = n(8908), l = n(6365), g = n(6078), p = n(7107), w = {}, Q = {}, v = a.exports = function(y, b, O, I, L) {
        var N, H, j, V, X = L ? function() {
          return y;
        } : p(y), x = s(O, I, b ? 2 : 1), _ = 0;
        if (typeof X != "function")
          throw TypeError(y + " is not iterable!");
        if (f(X)) {
          for (N = g(y.length); N > _; _++)
            if ((V = b ? x(l(H = y[_])[0], H[1]) : x(y[_])) === w || V === Q)
              return V;
        } else
          for (j = X.call(y); !(H = j.next()).done; )
            if ((V = u(j, x, H.value, b)) === w || V === Q)
              return V;
      };
      v.BREAK = w, v.RETURN = Q;
    }, 646: (a, c, n) => {
      a.exports = n(8655)("native-function-to-string", Function.toString);
    }, 8113: (a) => {
      var c = a.exports = typeof window < "u" && window.Math == Math ? window : typeof self < "u" && self.Math == Math ? self : Function("return this")();
      typeof __g == "number" && (__g = c);
    }, 4040: (a) => {
      var c = {}.hasOwnProperty;
      a.exports = function(n, s) {
        return c.call(n, s);
      };
    }, 4216: (a, c, n) => {
      var s = n(8558), u = n(6061);
      a.exports = n(6628) ? function(f, l, g) {
        return s.f(f, l, u(1, g));
      } : function(f, l, g) {
        return f[l] = g, f;
      };
    }, 8954: (a, c, n) => {
      var s = n(8113).document;
      a.exports = s && s.documentElement;
    }, 5100: (a, c, n) => {
      a.exports = !n(6628) && !n(8625)(function() {
        return Object.defineProperty(n(5050)("div"), "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }, 8938: (a, c, n) => {
      var s = n(7334), u = n(6095).set;
      a.exports = function(f, l, g) {
        var p, w = l.constructor;
        return w !== g && typeof w == "function" && (p = w.prototype) !== g.prototype && s(p) && u && u(f, p), f;
      };
    }, 7757: (a) => {
      a.exports = function(c, n, s) {
        var u = s === void 0;
        switch (n.length) {
          case 0:
            return u ? c() : c.call(s);
          case 1:
            return u ? c(n[0]) : c.call(s, n[0]);
          case 2:
            return u ? c(n[0], n[1]) : c.call(s, n[0], n[1]);
          case 3:
            return u ? c(n[0], n[1], n[2]) : c.call(s, n[0], n[1], n[2]);
          case 4:
            return u ? c(n[0], n[1], n[2], n[3]) : c.call(s, n[0], n[1], n[2], n[3]);
        }
        return c.apply(s, n);
      };
    }, 8467: (a, c, n) => {
      var s = n(6688);
      a.exports = Object("z").propertyIsEnumerable(0) ? Object : function(u) {
        return s(u) == "String" ? u.split("") : Object(u);
      };
    }, 8908: (a, c, n) => {
      var s = n(3988), u = n(2190)("iterator"), f = Array.prototype;
      a.exports = function(l) {
        return l !== void 0 && (s.Array === l || f[u] === l);
      };
    }, 9141: (a, c, n) => {
      var s = n(6688);
      a.exports = Array.isArray || function(u) {
        return s(u) == "Array";
      };
    }, 7334: (a) => {
      a.exports = function(c) {
        return typeof c == "object" ? c !== null : typeof c == "function";
      };
    }, 4587: (a, c, n) => {
      var s = n(7334), u = n(6688), f = n(2190)("match");
      a.exports = function(l) {
        var g;
        return s(l) && ((g = l[f]) !== void 0 ? !!g : u(l) == "RegExp");
      };
    }, 3221: (a, c, n) => {
      var s = n(6365);
      a.exports = function(u, f, l, g) {
        try {
          return g ? f(s(l)[0], l[1]) : f(l);
        } catch (w) {
          var p = u.return;
          throw p !== void 0 && s(p.call(u)), w;
        }
      };
    }, 6445: (a, c, n) => {
      var s = n(2897), u = n(6061), f = n(5727), l = {};
      n(4216)(l, n(2190)("iterator"), function() {
        return this;
      }), a.exports = function(g, p, w) {
        g.prototype = s(l, { next: u(1, w) }), f(g, p + " Iterator");
      };
    }, 1195: (a, c, n) => {
      var s = n(1422), u = n(5772), f = n(7738), l = n(4216), g = n(3988), p = n(6445), w = n(5727), Q = n(9002), v = n(2190)("iterator"), y = !([].keys && "next" in [].keys()), b = "keys", O = "values", I = function() {
        return this;
      };
      a.exports = function(L, N, H, j, V, X, x) {
        p(H, N, j);
        var _, Z, iA, rA = function(W) {
          if (!y && W in mA)
            return mA[W];
          switch (W) {
            case b:
            case O:
              return function() {
                return new H(this, W);
              };
          }
          return function() {
            return new H(this, W);
          };
        }, IA = N + " Iterator", HA = V == O, vA = !1, mA = L.prototype, QA = mA[v] || mA["@@iterator"] || V && mA[V], gA = QA || rA(V), M = V ? HA ? rA("entries") : gA : void 0, R = N == "Array" && mA.entries || QA;
        if (R && (iA = Q(R.call(new L()))) !== Object.prototype && iA.next && (w(iA, IA, !0), s || typeof iA[v] == "function" || l(iA, v, I)), HA && QA && QA.name !== O && (vA = !0, gA = function() {
          return QA.call(this);
        }), s && !x || !y && !vA && mA[v] || l(mA, v, gA), g[N] = gA, g[IA] = I, V)
          if (_ = { values: HA ? gA : rA(O), keys: X ? gA : rA(b), entries: M }, x)
            for (Z in _)
              Z in mA || f(mA, Z, _[Z]);
          else
            u(u.P + u.F * (y || vA), N, _);
        return _;
      };
    }, 3143: (a, c, n) => {
      var s = n(2190)("iterator"), u = !1;
      try {
        var f = [7][s]();
        f.return = function() {
          u = !0;
        }, Array.from(f, function() {
          throw 2;
        });
      } catch {
      }
      a.exports = function(l, g) {
        if (!g && !u)
          return !1;
        var p = !1;
        try {
          var w = [7], Q = w[s]();
          Q.next = function() {
            return { done: p = !0 };
          }, w[s] = function() {
            return Q;
          }, l(w);
        } catch {
        }
        return p;
      };
    }, 5038: (a) => {
      a.exports = function(c, n) {
        return { value: n, done: !!c };
      };
    }, 3988: (a) => {
      a.exports = {};
    }, 1422: (a) => {
      a.exports = !1;
    }, 998: (a, c, n) => {
      var s = n(5078)("meta"), u = n(7334), f = n(4040), l = n(8558).f, g = 0, p = Object.isExtensible || function() {
        return !0;
      }, w = !n(8625)(function() {
        return p(Object.preventExtensions({}));
      }), Q = function(y) {
        l(y, s, { value: { i: "O" + ++g, w: {} } });
      }, v = a.exports = { KEY: s, NEED: !1, fastKey: function(y, b) {
        if (!u(y))
          return typeof y == "symbol" ? y : (typeof y == "string" ? "S" : "P") + y;
        if (!f(y, s)) {
          if (!p(y))
            return "F";
          if (!b)
            return "E";
          Q(y);
        }
        return y[s].i;
      }, getWeak: function(y, b) {
        if (!f(y, s)) {
          if (!p(y))
            return !0;
          if (!b)
            return !1;
          Q(y);
        }
        return y[s].w;
      }, onFreeze: function(y) {
        return w && v.NEED && p(y) && !f(y, s) && Q(y), y;
      } };
    }, 3492: (a, c, n) => {
      var s = n(8113), u = n(9124).set, f = s.MutationObserver || s.WebKitMutationObserver, l = s.process, g = s.Promise, p = n(6688)(l) == "process";
      a.exports = function() {
        var w, Q, v, y = function() {
          var L, N;
          for (p && (L = l.domain) && L.exit(); w; ) {
            N = w.fn, w = w.next;
            try {
              N();
            } catch (H) {
              throw w ? v() : Q = void 0, H;
            }
          }
          Q = void 0, L && L.enter();
        };
        if (p)
          v = function() {
            l.nextTick(y);
          };
        else if (!f || s.navigator && s.navigator.standalone)
          if (g && g.resolve) {
            var b = g.resolve(void 0);
            v = function() {
              b.then(y);
            };
          } else
            v = function() {
              u.call(s, y);
            };
        else {
          var O = !0, I = document.createTextNode("");
          new f(y).observe(I, { characterData: !0 }), v = function() {
            I.data = O = !O;
          };
        }
        return function(L) {
          var N = { fn: L, next: void 0 };
          Q && (Q.next = N), w || (w = N, v()), Q = N;
        };
      };
    }, 8577: (a, c, n) => {
      var s = n(2761);
      function u(f) {
        var l, g;
        this.promise = new f(function(p, w) {
          if (l !== void 0 || g !== void 0)
            throw TypeError("Bad Promise constructor");
          l = p, g = w;
        }), this.resolve = s(l), this.reject = s(g);
      }
      a.exports.f = function(f) {
        return new u(f);
      };
    }, 2897: (a, c, n) => {
      var s = n(6365), u = n(7331), f = n(3603), l = n(8034)("IE_PROTO"), g = function() {
      }, p = "prototype", w = function() {
        var Q, v = n(5050)("iframe"), y = f.length;
        for (v.style.display = "none", n(8954).appendChild(v), v.src = "javascript:", (Q = v.contentWindow.document).open(), Q.write("<script>document.F=Object<\/script>"), Q.close(), w = Q.F; y--; )
          delete w[p][f[y]];
        return w();
      };
      a.exports = Object.create || function(Q, v) {
        var y;
        return Q !== null ? (g[p] = s(Q), y = new g(), g[p] = null, y[l] = Q) : y = w(), v === void 0 ? y : u(y, v);
      };
    }, 8558: (a, c, n) => {
      var s = n(6365), u = n(5100), f = n(1382), l = Object.defineProperty;
      c.f = n(6628) ? Object.defineProperty : function(g, p, w) {
        if (s(g), p = f(p, !0), s(w), u)
          try {
            return l(g, p, w);
          } catch {
          }
        if ("get" in w || "set" in w)
          throw TypeError("Accessors not supported!");
        return "value" in w && (g[p] = w.value), g;
      };
    }, 7331: (a, c, n) => {
      var s = n(8558), u = n(6365), f = n(2912);
      a.exports = n(6628) ? Object.defineProperties : function(l, g) {
        u(l);
        for (var p, w = f(g), Q = w.length, v = 0; Q > v; )
          s.f(l, p = w[v++], g[p]);
        return l;
      };
    }, 4662: (a, c, n) => {
      var s = n(5873), u = n(6061), f = n(5703), l = n(1382), g = n(4040), p = n(5100), w = Object.getOwnPropertyDescriptor;
      c.f = n(6628) ? w : function(Q, v) {
        if (Q = f(Q), v = l(v, !0), p)
          try {
            return w(Q, v);
          } catch {
          }
        if (g(Q, v))
          return u(!s.f.call(Q, v), Q[v]);
      };
    }, 5259: (a, c, n) => {
      var s = n(5703), u = n(6604).f, f = {}.toString, l = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
      a.exports.f = function(g) {
        return l && f.call(g) == "[object Window]" ? function(p) {
          try {
            return u(p);
          } catch {
            return l.slice();
          }
        }(g) : u(s(g));
      };
    }, 6604: (a, c, n) => {
      var s = n(5547), u = n(3603).concat("length", "prototype");
      c.f = Object.getOwnPropertyNames || function(f) {
        return s(f, u);
      };
    }, 7957: (a, c) => {
      c.f = Object.getOwnPropertySymbols;
    }, 9002: (a, c, n) => {
      var s = n(4040), u = n(6033), f = n(8034)("IE_PROTO"), l = Object.prototype;
      a.exports = Object.getPrototypeOf || function(g) {
        return g = u(g), s(g, f) ? g[f] : typeof g.constructor == "function" && g instanceof g.constructor ? g.constructor.prototype : g instanceof Object ? l : null;
      };
    }, 5547: (a, c, n) => {
      var s = n(4040), u = n(5703), f = n(9021)(!1), l = n(8034)("IE_PROTO");
      a.exports = function(g, p) {
        var w, Q = u(g), v = 0, y = [];
        for (w in Q)
          w != l && s(Q, w) && y.push(w);
        for (; p.length > v; )
          s(Q, w = p[v++]) && (~f(y, w) || y.push(w));
        return y;
      };
    }, 2912: (a, c, n) => {
      var s = n(5547), u = n(3603);
      a.exports = Object.keys || function(f) {
        return s(f, u);
      };
    }, 5873: (a, c) => {
      c.f = {}.propertyIsEnumerable;
    }, 468: (a, c, n) => {
      var s = n(5772), u = n(66), f = n(8625);
      a.exports = function(l, g) {
        var p = (u.Object || {})[l] || Object[l], w = {};
        w[l] = g(p), s(s.S + s.F * f(function() {
          p(1);
        }), "Object", w);
      };
    }, 758: (a, c, n) => {
      var s = n(6628), u = n(2912), f = n(5703), l = n(5873).f;
      a.exports = function(g) {
        return function(p) {
          for (var w, Q = f(p), v = u(Q), y = v.length, b = 0, O = []; y > b; )
            w = v[b++], s && !l.call(Q, w) || O.push(g ? [w, Q[w]] : Q[w]);
          return O;
        };
      };
    }, 6831: (a, c, n) => {
      var s = n(6604), u = n(7957), f = n(6365), l = n(8113).Reflect;
      a.exports = l && l.ownKeys || function(g) {
        var p = s.f(f(g)), w = u.f;
        return w ? p.concat(w(g)) : p;
      };
    }, 9739: (a) => {
      a.exports = function(c) {
        try {
          return { e: !1, v: c() };
        } catch (n) {
          return { e: !0, v: n };
        }
      };
    }, 5151: (a, c, n) => {
      var s = n(6365), u = n(7334), f = n(8577);
      a.exports = function(l, g) {
        if (s(l), u(g) && g.constructor === l)
          return g;
        var p = f.f(l);
        return (0, p.resolve)(g), p.promise;
      };
    }, 6061: (a) => {
      a.exports = function(c, n) {
        return { enumerable: !(1 & c), configurable: !(2 & c), writable: !(4 & c), value: n };
      };
    }, 2243: (a, c, n) => {
      var s = n(7738);
      a.exports = function(u, f, l) {
        for (var g in f)
          s(u, g, f[g], l);
        return u;
      };
    }, 7738: (a, c, n) => {
      var s = n(8113), u = n(4216), f = n(4040), l = n(5078)("src"), g = n(646), p = "toString", w = ("" + g).split(p);
      n(66).inspectSource = function(Q) {
        return g.call(Q);
      }, (a.exports = function(Q, v, y, b) {
        var O = typeof y == "function";
        O && (f(y, "name") || u(y, "name", v)), Q[v] !== y && (O && (f(y, l) || u(y, l, Q[v] ? "" + Q[v] : w.join(String(v)))), Q === s ? Q[v] = y : b ? Q[v] ? Q[v] = y : u(Q, v, y) : (delete Q[v], u(Q, v, y)));
      })(Function.prototype, p, function() {
        return typeof this == "function" && this[l] || g.call(this);
      });
    }, 2404: (a, c, n) => {
      var s = n(106), u = RegExp.prototype.exec;
      a.exports = function(f, l) {
        var g = f.exec;
        if (typeof g == "function") {
          var p = g.call(f, l);
          if (typeof p != "object")
            throw new TypeError("RegExp exec method returned something other than an Object or null");
          return p;
        }
        if (s(f) !== "RegExp")
          throw new TypeError("RegExp#exec called on incompatible receiver");
        return u.call(f, l);
      };
    }, 3288: (a, c, n) => {
      var s, u, f = n(4859), l = RegExp.prototype.exec, g = String.prototype.replace, p = l, w = "lastIndex", Q = (s = /a/, u = /b*/g, l.call(s, "a"), l.call(u, "a"), s[w] !== 0 || u[w] !== 0), v = /()??/.exec("")[1] !== void 0;
      (Q || v) && (p = function(y) {
        var b, O, I, L, N = this;
        return v && (O = new RegExp("^" + N.source + "$(?!\\s)", f.call(N))), Q && (b = N[w]), I = l.call(N, y), Q && I && (N[w] = N.global ? I.index + I[0].length : b), v && I && I.length > 1 && g.call(I[0], O, function() {
          for (L = 1; L < arguments.length - 2; L++)
            arguments[L] === void 0 && (I[L] = void 0);
        }), I;
      }), a.exports = p;
    }, 6095: (a, c, n) => {
      var s = n(7334), u = n(6365), f = function(l, g) {
        if (u(l), !s(g) && g !== null)
          throw TypeError(g + ": can't set as prototype!");
      };
      a.exports = { set: Object.setPrototypeOf || ("__proto__" in {} ? function(l, g, p) {
        try {
          (p = n(1528)(Function.call, n(4662).f(Object.prototype, "__proto__").set, 2))(l, []), g = !(l instanceof Array);
        } catch {
          g = !0;
        }
        return function(w, Q) {
          return f(w, Q), g ? w.__proto__ = Q : p(w, Q), w;
        };
      }({}, !1) : void 0), check: f };
    }, 9766: (a, c, n) => {
      var s = n(8113), u = n(8558), f = n(6628), l = n(2190)("species");
      a.exports = function(g) {
        var p = s[g];
        f && p && !p[l] && u.f(p, l, { configurable: !0, get: function() {
          return this;
        } });
      };
    }, 5727: (a, c, n) => {
      var s = n(8558).f, u = n(4040), f = n(2190)("toStringTag");
      a.exports = function(l, g, p) {
        l && !u(l = p ? l : l.prototype, f) && s(l, f, { configurable: !0, value: g });
      };
    }, 8034: (a, c, n) => {
      var s = n(8655)("keys"), u = n(5078);
      a.exports = function(f) {
        return s[f] || (s[f] = u(f));
      };
    }, 8655: (a, c, n) => {
      var s = n(66), u = n(8113), f = "__core-js_shared__", l = u[f] || (u[f] = {});
      (a.exports = function(g, p) {
        return l[g] || (l[g] = p !== void 0 ? p : {});
      })("versions", []).push({ version: s.version, mode: n(1422) ? "pure" : "global", copyright: "© 2020 Denis Pushkarev (zloirock.ru)" });
    }, 1987: (a, c, n) => {
      var s = n(6365), u = n(2761), f = n(2190)("species");
      a.exports = function(l, g) {
        var p, w = s(l).constructor;
        return w === void 0 || (p = s(w)[f]) == null ? g : u(p);
      };
    }, 225: (a, c, n) => {
      var s = n(8625);
      a.exports = function(u, f) {
        return !!u && s(function() {
          f ? u.call(null, function() {
          }, 1) : u.call(null);
        });
      };
    }, 2070: (a, c, n) => {
      var s = n(3338), u = n(1622);
      a.exports = function(f) {
        return function(l, g) {
          var p, w, Q = String(u(l)), v = s(g), y = Q.length;
          return v < 0 || v >= y ? f ? "" : void 0 : (p = Q.charCodeAt(v)) < 55296 || p > 56319 || v + 1 === y || (w = Q.charCodeAt(v + 1)) < 56320 || w > 57343 ? f ? Q.charAt(v) : p : f ? Q.slice(v, v + 2) : w - 56320 + (p - 55296 << 10) + 65536;
        };
      };
    }, 465: (a, c, n) => {
      var s = n(4587), u = n(1622);
      a.exports = function(f, l, g) {
        if (s(l))
          throw TypeError("String#" + g + " doesn't accept regex!");
        return String(u(f));
      };
    }, 9124: (a, c, n) => {
      var s, u, f, l = n(1528), g = n(7757), p = n(8954), w = n(5050), Q = n(8113), v = Q.process, y = Q.setImmediate, b = Q.clearImmediate, O = Q.MessageChannel, I = Q.Dispatch, L = 0, N = {}, H = "onreadystatechange", j = function() {
        var X = +this;
        if (N.hasOwnProperty(X)) {
          var x = N[X];
          delete N[X], x();
        }
      }, V = function(X) {
        j.call(X.data);
      };
      y && b || (y = function(X) {
        for (var x = [], _ = 1; arguments.length > _; )
          x.push(arguments[_++]);
        return N[++L] = function() {
          g(typeof X == "function" ? X : Function(X), x);
        }, s(L), L;
      }, b = function(X) {
        delete N[X];
      }, n(6688)(v) == "process" ? s = function(X) {
        v.nextTick(l(j, X, 1));
      } : I && I.now ? s = function(X) {
        I.now(l(j, X, 1));
      } : O ? (f = (u = new O()).port2, u.port1.onmessage = V, s = l(f.postMessage, f, 1)) : Q.addEventListener && typeof postMessage == "function" && !Q.importScripts ? (s = function(X) {
        Q.postMessage(X + "", "*");
      }, Q.addEventListener("message", V, !1)) : s = H in w("script") ? function(X) {
        p.appendChild(w("script"))[H] = function() {
          p.removeChild(this), j.call(X);
        };
      } : function(X) {
        setTimeout(l(j, X, 1), 0);
      }), a.exports = { set: y, clear: b };
    }, 8615: (a, c, n) => {
      var s = n(3338), u = Math.max, f = Math.min;
      a.exports = function(l, g) {
        return (l = s(l)) < 0 ? u(l + g, 0) : f(l, g);
      };
    }, 1982: (a, c, n) => {
      var s = n(3338), u = n(6078);
      a.exports = function(f) {
        if (f === void 0)
          return 0;
        var l = s(f), g = u(l);
        if (l !== g)
          throw RangeError("Wrong length!");
        return g;
      };
    }, 3338: (a) => {
      var c = Math.ceil, n = Math.floor;
      a.exports = function(s) {
        return isNaN(s = +s) ? 0 : (s > 0 ? n : c)(s);
      };
    }, 5703: (a, c, n) => {
      var s = n(8467), u = n(1622);
      a.exports = function(f) {
        return s(u(f));
      };
    }, 6078: (a, c, n) => {
      var s = n(3338), u = Math.min;
      a.exports = function(f) {
        return f > 0 ? u(s(f), 9007199254740991) : 0;
      };
    }, 6033: (a, c, n) => {
      var s = n(1622);
      a.exports = function(u) {
        return Object(s(u));
      };
    }, 1382: (a, c, n) => {
      var s = n(7334);
      a.exports = function(u, f) {
        if (!s(u))
          return u;
        var l, g;
        if (f && typeof (l = u.toString) == "function" && !s(g = l.call(u)) || typeof (l = u.valueOf) == "function" && !s(g = l.call(u)) || !f && typeof (l = u.toString) == "function" && !s(g = l.call(u)))
          return g;
        throw TypeError("Can't convert object to primitive value");
      };
    }, 7978: (a, c, n) => {
      if (n(6628)) {
        var s = n(1422), u = n(8113), f = n(8625), l = n(5772), g = n(7029), p = n(4972), w = n(1528), Q = n(5824), v = n(6061), y = n(4216), b = n(2243), O = n(3338), I = n(6078), L = n(1982), N = n(8615), H = n(1382), j = n(4040), V = n(106), X = n(7334), x = n(6033), _ = n(8908), Z = n(2897), iA = n(9002), rA = n(6604).f, IA = n(7107), HA = n(5078), vA = n(2190), mA = n(8309), QA = n(9021), gA = n(1987), M = n(7680), R = n(3988), W = n(3143), uA = n(9766), tA = n(3195), EA = n(6257), DA = n(8558), AA = n(4662), aA = DA.f, SA = AA.f, OA = u.RangeError, TA = u.TypeError, XA = u.Uint8Array, pe = "ArrayBuffer", ie = "Shared" + pe, GA = "BYTES_PER_ELEMENT", Ae = "prototype", zA = Array[Ae], oe = p.ArrayBuffer, be = p.DataView, ge = mA(0), Qe = mA(2), he = mA(3), q = mA(4), bA = mA(5), ae = mA(6), MA = QA(!0), $A = QA(!1), nA = M.values, BA = M.keys, xA = M.entries, PA = zA.lastIndexOf, YA = zA.reduce, jA = zA.reduceRight, De = zA.join, Je = zA.sort, nt = zA.slice, ke = zA.toString, ot = zA.toLocaleString, Ne = vA("iterator"), it = vA("toStringTag"), It = HA("typed_constructor"), C = HA("def_constructor"), E = g.CONSTR, m = g.TYPED, D = g.VIEW, K = "Wrong length!", T = mA(1, function(fA, UA) {
          return lA(gA(fA, fA[C]), UA);
        }), k = f(function() {
          return new XA(new Uint16Array([1]).buffer)[0] === 1;
        }), $ = !!XA && !!XA[Ae].set && f(function() {
          new XA(1).set({});
        }), z = function(fA, UA) {
          var _A = O(fA);
          if (_A < 0 || _A % UA)
            throw OA("Wrong offset!");
          return _A;
        }, J = function(fA) {
          if (X(fA) && m in fA)
            return fA;
          throw TA(fA + " is not a typed array!");
        }, lA = function(fA, UA) {
          if (!X(fA) || !(It in fA))
            throw TA("It is not a typed array constructor!");
          return new fA(UA);
        }, U = function(fA, UA) {
          return P(gA(fA, fA[C]), UA);
        }, P = function(fA, UA) {
          for (var _A = 0, Ue = UA.length, ZA = lA(fA, Ue); Ue > _A; )
            ZA[_A] = UA[_A++];
          return ZA;
        }, Y = function(fA, UA, _A) {
          aA(fA, UA, { get: function() {
            return this._d[_A];
          } });
        }, cA = function(fA) {
          var UA, _A, Ue, ZA, ht, ur, NA = x(fA), $e = arguments.length, Ut = $e > 1 ? arguments[1] : void 0, fr = Ut !== void 0, Ht = IA(NA);
          if (Ht != null && !_(Ht)) {
            for (ur = Ht.call(NA), Ue = [], UA = 0; !(ht = ur.next()).done; UA++)
              Ue.push(ht.value);
            NA = Ue;
          }
          for (fr && $e > 2 && (Ut = w(Ut, arguments[2], 2)), UA = 0, _A = I(NA.length), ZA = lA(this, _A); _A > UA; UA++)
            ZA[UA] = fr ? Ut(NA[UA], UA) : NA[UA];
          return ZA;
        }, hA = function() {
          for (var fA = 0, UA = arguments.length, _A = lA(this, UA); UA > fA; )
            _A[fA] = arguments[fA++];
          return _A;
        }, VA = !!XA && f(function() {
          ot.call(new XA(1));
        }), KA = function() {
          return ot.apply(VA ? nt.call(J(this)) : J(this), arguments);
        }, RA = { copyWithin: function(fA, UA) {
          return EA.call(J(this), fA, UA, arguments.length > 2 ? arguments[2] : void 0);
        }, every: function(fA) {
          return q(J(this), fA, arguments.length > 1 ? arguments[1] : void 0);
        }, fill: function(fA) {
          return tA.apply(J(this), arguments);
        }, filter: function(fA) {
          return U(this, Qe(J(this), fA, arguments.length > 1 ? arguments[1] : void 0));
        }, find: function(fA) {
          return bA(J(this), fA, arguments.length > 1 ? arguments[1] : void 0);
        }, findIndex: function(fA) {
          return ae(J(this), fA, arguments.length > 1 ? arguments[1] : void 0);
        }, forEach: function(fA) {
          ge(J(this), fA, arguments.length > 1 ? arguments[1] : void 0);
        }, indexOf: function(fA) {
          return $A(J(this), fA, arguments.length > 1 ? arguments[1] : void 0);
        }, includes: function(fA) {
          return MA(J(this), fA, arguments.length > 1 ? arguments[1] : void 0);
        }, join: function(fA) {
          return De.apply(J(this), arguments);
        }, lastIndexOf: function(fA) {
          return PA.apply(J(this), arguments);
        }, map: function(fA) {
          return T(J(this), fA, arguments.length > 1 ? arguments[1] : void 0);
        }, reduce: function(fA) {
          return YA.apply(J(this), arguments);
        }, reduceRight: function(fA) {
          return jA.apply(J(this), arguments);
        }, reverse: function() {
          for (var fA, UA = this, _A = J(UA).length, Ue = Math.floor(_A / 2), ZA = 0; ZA < Ue; )
            fA = UA[ZA], UA[ZA++] = UA[--_A], UA[_A] = fA;
          return UA;
        }, some: function(fA) {
          return he(J(this), fA, arguments.length > 1 ? arguments[1] : void 0);
        }, sort: function(fA) {
          return Je.call(J(this), fA);
        }, subarray: function(fA, UA) {
          var _A = J(this), Ue = _A.length, ZA = N(fA, Ue);
          return new (gA(_A, _A[C]))(_A.buffer, _A.byteOffset + ZA * _A.BYTES_PER_ELEMENT, I((UA === void 0 ? Ue : N(UA, Ue)) - ZA));
        } }, ve = function(fA, UA) {
          return U(this, nt.call(J(this), fA, UA));
        }, ee = function(fA) {
          J(this);
          var UA = z(arguments[1], 1), _A = this.length, Ue = x(fA), ZA = I(Ue.length), ht = 0;
          if (ZA + UA > _A)
            throw OA(K);
          for (; ht < ZA; )
            this[UA + ht] = Ue[ht++];
        }, se = { entries: function() {
          return xA.call(J(this));
        }, keys: function() {
          return BA.call(J(this));
        }, values: function() {
          return nA.call(J(this));
        } }, Le = function(fA, UA) {
          return X(fA) && fA[m] && typeof UA != "symbol" && UA in fA && String(+UA) == String(UA);
        }, gt = function(fA, UA) {
          return Le(fA, UA = H(UA, !0)) ? v(2, fA[UA]) : SA(fA, UA);
        }, Yt = function(fA, UA, _A) {
          return !(Le(fA, UA = H(UA, !0)) && X(_A) && j(_A, "value")) || j(_A, "get") || j(_A, "set") || _A.configurable || j(_A, "writable") && !_A.writable || j(_A, "enumerable") && !_A.enumerable ? aA(fA, UA, _A) : (fA[UA] = _A.value, fA);
        };
        E || (AA.f = gt, DA.f = Yt), l(l.S + l.F * !E, "Object", { getOwnPropertyDescriptor: gt, defineProperty: Yt }), f(function() {
          ke.call({});
        }) && (ke = ot = function() {
          return De.call(this);
        });
        var ye = b({}, RA);
        b(ye, se), y(ye, Ne, se.values), b(ye, { slice: ve, set: ee, constructor: function() {
        }, toString: ke, toLocaleString: KA }), Y(ye, "buffer", "b"), Y(ye, "byteOffset", "o"), Y(ye, "byteLength", "l"), Y(ye, "length", "e"), aA(ye, it, { get: function() {
          return this[m];
        } }), a.exports = function(fA, UA, _A, Ue) {
          var ZA = fA + ((Ue = !!Ue) ? "Clamped" : "") + "Array", ht = "get" + fA, ur = "set" + fA, NA = u[ZA], $e = NA || {}, Ut = NA && iA(NA), fr = !NA || !g.ABV, Ht = {}, Te = NA && NA[Ae], So = function(Pe, Be) {
            aA(Pe, Be, { get: function() {
              return function(We, at) {
                var ze = We._d;
                return ze.v[ht](at * UA + ze.o, k);
              }(this, Be);
            }, set: function(We) {
              return function(at, ze, _e) {
                var qe = at._d;
                Ue && (_e = (_e = Math.round(_e)) < 0 ? 0 : _e > 255 ? 255 : 255 & _e), qe.v[ur](ze * UA + qe.o, _e, k);
              }(this, Be, We);
            }, enumerable: !0 });
          };
          fr ? (NA = _A(function(Pe, Be, We, at) {
            Q(Pe, NA, ZA, "_d");
            var ze, _e, qe, Zt, Ie = 0, Ye = 0;
            if (X(Be)) {
              if (!(Be instanceof oe || (Zt = V(Be)) == pe || Zt == ie))
                return m in Be ? P(NA, Be) : cA.call(NA, Be);
              ze = Be, Ye = z(We, UA);
              var _t = Be.byteLength;
              if (at === void 0) {
                if (_t % UA || (_e = _t - Ye) < 0)
                  throw OA(K);
              } else if ((_e = I(at) * UA) + Ye > _t)
                throw OA(K);
              qe = _e / UA;
            } else
              qe = L(Be), ze = new oe(_e = qe * UA);
            for (y(Pe, "_d", { b: ze, o: Ye, l: _e, e: qe, v: new be(ze) }); Ie < qe; )
              So(Pe, Ie++);
          }), Te = NA[Ae] = Z(ye), y(Te, "constructor", NA)) : f(function() {
            NA(1);
          }) && f(function() {
            new NA(-1);
          }) && W(function(Pe) {
            new NA(), new NA(null), new NA(1.5), new NA(Pe);
          }, !0) || (NA = _A(function(Pe, Be, We, at) {
            var ze;
            return Q(Pe, NA, ZA), X(Be) ? Be instanceof oe || (ze = V(Be)) == pe || ze == ie ? at !== void 0 ? new $e(Be, z(We, UA), at) : We !== void 0 ? new $e(Be, z(We, UA)) : new $e(Be) : m in Be ? P(NA, Be) : cA.call(NA, Be) : new $e(L(Be));
          }), ge(Ut !== Function.prototype ? rA($e).concat(rA(Ut)) : rA($e), function(Pe) {
            Pe in NA || y(NA, Pe, $e[Pe]);
          }), NA[Ae] = Te, s || (Te.constructor = NA));
          var Br = Te[Ne], Tr = !!Br && (Br.name == "values" || Br.name == null), fn = se.values;
          y(NA, It, !0), y(Te, m, ZA), y(Te, D, !0), y(Te, C, NA), (Ue ? new NA(1)[it] == ZA : it in Te) || aA(Te, it, { get: function() {
            return ZA;
          } }), Ht[ZA] = NA, l(l.G + l.W + l.F * (NA != $e), Ht), l(l.S, ZA, { BYTES_PER_ELEMENT: UA }), l(l.S + l.F * f(function() {
            $e.of.call(NA, 1);
          }), ZA, { from: cA, of: hA }), GA in Te || y(Te, GA, UA), l(l.P, ZA, RA), uA(ZA), l(l.P + l.F * $, ZA, { set: ee }), l(l.P + l.F * !Tr, ZA, se), s || Te.toString == ke || (Te.toString = ke), l(l.P + l.F * f(function() {
            new NA(1).slice();
          }), ZA, { slice: ve }), l(l.P + l.F * (f(function() {
            return [1, 2].toLocaleString() != new NA([1, 2]).toLocaleString();
          }) || !f(function() {
            Te.toLocaleString.call([1, 2]);
          })), ZA, { toLocaleString: KA }), R[ZA] = Tr ? Br : fn, s || Tr || y(Te, Ne, fn);
        };
      } else
        a.exports = function() {
        };
    }, 4972: (a, c, n) => {
      var s = n(8113), u = n(6628), f = n(1422), l = n(7029), g = n(4216), p = n(2243), w = n(8625), Q = n(5824), v = n(3338), y = n(6078), b = n(1982), O = n(6604).f, I = n(8558).f, L = n(3195), N = n(5727), H = "ArrayBuffer", j = "DataView", V = "prototype", X = "Wrong index!", x = s[H], _ = s[j], Z = s.Math, iA = s.RangeError, rA = s.Infinity, IA = x, HA = Z.abs, vA = Z.pow, mA = Z.floor, QA = Z.log, gA = Z.LN2, M = "buffer", R = "byteLength", W = "byteOffset", uA = u ? "_b" : M, tA = u ? "_l" : R, EA = u ? "_o" : W;
      function DA(q, bA, ae) {
        var MA, $A, nA, BA = new Array(ae), xA = 8 * ae - bA - 1, PA = (1 << xA) - 1, YA = PA >> 1, jA = bA === 23 ? vA(2, -24) - vA(2, -77) : 0, De = 0, Je = q < 0 || q === 0 && 1 / q < 0 ? 1 : 0;
        for ((q = HA(q)) != q || q === rA ? ($A = q != q ? 1 : 0, MA = PA) : (MA = mA(QA(q) / gA), q * (nA = vA(2, -MA)) < 1 && (MA--, nA *= 2), (q += MA + YA >= 1 ? jA / nA : jA * vA(2, 1 - YA)) * nA >= 2 && (MA++, nA /= 2), MA + YA >= PA ? ($A = 0, MA = PA) : MA + YA >= 1 ? ($A = (q * nA - 1) * vA(2, bA), MA += YA) : ($A = q * vA(2, YA - 1) * vA(2, bA), MA = 0)); bA >= 8; BA[De++] = 255 & $A, $A /= 256, bA -= 8)
          ;
        for (MA = MA << bA | $A, xA += bA; xA > 0; BA[De++] = 255 & MA, MA /= 256, xA -= 8)
          ;
        return BA[--De] |= 128 * Je, BA;
      }
      function AA(q, bA, ae) {
        var MA, $A = 8 * ae - bA - 1, nA = (1 << $A) - 1, BA = nA >> 1, xA = $A - 7, PA = ae - 1, YA = q[PA--], jA = 127 & YA;
        for (YA >>= 7; xA > 0; jA = 256 * jA + q[PA], PA--, xA -= 8)
          ;
        for (MA = jA & (1 << -xA) - 1, jA >>= -xA, xA += bA; xA > 0; MA = 256 * MA + q[PA], PA--, xA -= 8)
          ;
        if (jA === 0)
          jA = 1 - BA;
        else {
          if (jA === nA)
            return MA ? NaN : YA ? -rA : rA;
          MA += vA(2, bA), jA -= BA;
        }
        return (YA ? -1 : 1) * MA * vA(2, jA - bA);
      }
      function aA(q) {
        return q[3] << 24 | q[2] << 16 | q[1] << 8 | q[0];
      }
      function SA(q) {
        return [255 & q];
      }
      function OA(q) {
        return [255 & q, q >> 8 & 255];
      }
      function TA(q) {
        return [255 & q, q >> 8 & 255, q >> 16 & 255, q >> 24 & 255];
      }
      function XA(q) {
        return DA(q, 52, 8);
      }
      function pe(q) {
        return DA(q, 23, 4);
      }
      function ie(q, bA, ae) {
        I(q[V], bA, { get: function() {
          return this[ae];
        } });
      }
      function GA(q, bA, ae, MA) {
        var $A = b(+ae);
        if ($A + bA > q[tA])
          throw iA(X);
        var nA = q[uA]._b, BA = $A + q[EA], xA = nA.slice(BA, BA + bA);
        return MA ? xA : xA.reverse();
      }
      function Ae(q, bA, ae, MA, $A, nA) {
        var BA = b(+ae);
        if (BA + bA > q[tA])
          throw iA(X);
        for (var xA = q[uA]._b, PA = BA + q[EA], YA = MA(+$A), jA = 0; jA < bA; jA++)
          xA[PA + jA] = YA[nA ? jA : bA - jA - 1];
      }
      if (l.ABV) {
        if (!w(function() {
          x(1);
        }) || !w(function() {
          new x(-1);
        }) || w(function() {
          return new x(), new x(1.5), new x(NaN), x.name != H;
        })) {
          for (var zA, oe = (x = function(q) {
            return Q(this, x), new IA(b(q));
          })[V] = IA[V], be = O(IA), ge = 0; be.length > ge; )
            (zA = be[ge++]) in x || g(x, zA, IA[zA]);
          f || (oe.constructor = x);
        }
        var Qe = new _(new x(2)), he = _[V].setInt8;
        Qe.setInt8(0, 2147483648), Qe.setInt8(1, 2147483649), !Qe.getInt8(0) && Qe.getInt8(1) || p(_[V], { setInt8: function(q, bA) {
          he.call(this, q, bA << 24 >> 24);
        }, setUint8: function(q, bA) {
          he.call(this, q, bA << 24 >> 24);
        } }, !0);
      } else
        x = function(q) {
          Q(this, x, H);
          var bA = b(q);
          this._b = L.call(new Array(bA), 0), this[tA] = bA;
        }, _ = function(q, bA, ae) {
          Q(this, _, j), Q(q, x, j);
          var MA = q[tA], $A = v(bA);
          if ($A < 0 || $A > MA)
            throw iA("Wrong offset!");
          if ($A + (ae = ae === void 0 ? MA - $A : y(ae)) > MA)
            throw iA("Wrong length!");
          this[uA] = q, this[EA] = $A, this[tA] = ae;
        }, u && (ie(x, R, "_l"), ie(_, M, "_b"), ie(_, R, "_l"), ie(_, W, "_o")), p(_[V], { getInt8: function(q) {
          return GA(this, 1, q)[0] << 24 >> 24;
        }, getUint8: function(q) {
          return GA(this, 1, q)[0];
        }, getInt16: function(q) {
          var bA = GA(this, 2, q, arguments[1]);
          return (bA[1] << 8 | bA[0]) << 16 >> 16;
        }, getUint16: function(q) {
          var bA = GA(this, 2, q, arguments[1]);
          return bA[1] << 8 | bA[0];
        }, getInt32: function(q) {
          return aA(GA(this, 4, q, arguments[1]));
        }, getUint32: function(q) {
          return aA(GA(this, 4, q, arguments[1])) >>> 0;
        }, getFloat32: function(q) {
          return AA(GA(this, 4, q, arguments[1]), 23, 4);
        }, getFloat64: function(q) {
          return AA(GA(this, 8, q, arguments[1]), 52, 8);
        }, setInt8: function(q, bA) {
          Ae(this, 1, q, SA, bA);
        }, setUint8: function(q, bA) {
          Ae(this, 1, q, SA, bA);
        }, setInt16: function(q, bA) {
          Ae(this, 2, q, OA, bA, arguments[2]);
        }, setUint16: function(q, bA) {
          Ae(this, 2, q, OA, bA, arguments[2]);
        }, setInt32: function(q, bA) {
          Ae(this, 4, q, TA, bA, arguments[2]);
        }, setUint32: function(q, bA) {
          Ae(this, 4, q, TA, bA, arguments[2]);
        }, setFloat32: function(q, bA) {
          Ae(this, 4, q, pe, bA, arguments[2]);
        }, setFloat64: function(q, bA) {
          Ae(this, 8, q, XA, bA, arguments[2]);
        } });
      N(x, H), N(_, j), g(_[V], l.VIEW, !0), c[H] = x, c[j] = _;
    }, 7029: (a, c, n) => {
      for (var s, u = n(8113), f = n(4216), l = n(5078), g = l("typed_array"), p = l("view"), w = !(!u.ArrayBuffer || !u.DataView), Q = w, v = 0, y = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); v < 9; )
        (s = u[y[v++]]) ? (f(s.prototype, g, !0), f(s.prototype, p, !0)) : Q = !1;
      a.exports = { ABV: w, CONSTR: Q, TYPED: g, VIEW: p };
    }, 5078: (a) => {
      var c = 0, n = Math.random();
      a.exports = function(s) {
        return "Symbol(".concat(s === void 0 ? "" : s, ")_", (++c + n).toString(36));
      };
    }, 5822: (a, c, n) => {
      var s = n(8113).navigator;
      a.exports = s && s.userAgent || "";
    }, 9060: (a, c, n) => {
      var s = n(7334);
      a.exports = function(u, f) {
        if (!s(u) || u._t !== f)
          throw TypeError("Incompatible receiver, " + f + " required!");
        return u;
      };
    }, 5660: (a, c, n) => {
      var s = n(8113), u = n(66), f = n(1422), l = n(9669), g = n(8558).f;
      a.exports = function(p) {
        var w = u.Symbol || (u.Symbol = f ? {} : s.Symbol || {});
        p.charAt(0) == "_" || p in w || g(w, p, { value: l.f(p) });
      };
    }, 9669: (a, c, n) => {
      c.f = n(2190);
    }, 2190: (a, c, n) => {
      var s = n(8655)("wks"), u = n(5078), f = n(8113).Symbol, l = typeof f == "function";
      (a.exports = function(g) {
        return s[g] || (s[g] = l && f[g] || (l ? f : u)("Symbol." + g));
      }).store = s;
    }, 7107: (a, c, n) => {
      var s = n(106), u = n(2190)("iterator"), f = n(3988);
      a.exports = n(66).getIteratorMethod = function(l) {
        if (l != null)
          return l[u] || l["@@iterator"] || f[s(l)];
      };
    }, 4434: (a, c, n) => {
      var s = n(5772), u = n(8309)(2);
      s(s.P + s.F * !n(225)([].filter, !0), "Array", { filter: function(f) {
        return u(this, f, arguments[1]);
      } });
    }, 7772: (a, c, n) => {
      var s = n(5772), u = n(8309)(0), f = n(225)([].forEach, !0);
      s(s.P + s.F * !f, "Array", { forEach: function(l) {
        return u(this, l, arguments[1]);
      } });
    }, 5155: (a, c, n) => {
      var s = n(5772), u = n(9021)(!1), f = [].indexOf, l = !!f && 1 / [1].indexOf(1, -0) < 0;
      s(s.P + s.F * (l || !n(225)(f)), "Array", { indexOf: function(g) {
        return l ? f.apply(this, arguments) || 0 : u(this, g, arguments[1]);
      } });
    }, 5867: (a, c, n) => {
      var s = n(5772);
      s(s.S, "Array", { isArray: n(9141) });
    }, 7680: (a, c, n) => {
      var s = n(2094), u = n(5038), f = n(3988), l = n(5703);
      a.exports = n(1195)(Array, "Array", function(g, p) {
        this._t = l(g), this._i = 0, this._k = p;
      }, function() {
        var g = this._t, p = this._k, w = this._i++;
        return !g || w >= g.length ? (this._t = void 0, u(1)) : u(0, p == "keys" ? w : p == "values" ? g[w] : [w, g[w]]);
      }, "values"), f.Arguments = f.Array, s("keys"), s("values"), s("entries");
    }, 286: (a, c, n) => {
      var s = n(5772), u = n(8309)(1);
      s(s.P + s.F * !n(225)([].map, !0), "Array", { map: function(f) {
        return u(this, f, arguments[1]);
      } });
    }, 9399: (a, c, n) => {
      var s = n(5772), u = n(9291);
      s(s.P + s.F * !n(225)([].reduce, !0), "Array", { reduce: function(f) {
        return u(this, f, arguments.length, arguments[1], !1);
      } });
    }, 7209: (a, c, n) => {
      var s = n(5772), u = n(8954), f = n(6688), l = n(8615), g = n(6078), p = [].slice;
      s(s.P + s.F * n(8625)(function() {
        u && p.call(u);
      }), "Array", { slice: function(w, Q) {
        var v = g(this.length), y = f(this);
        if (Q = Q === void 0 ? v : Q, y == "Array")
          return p.call(this, w, Q);
        for (var b = l(w, v), O = l(Q, v), I = g(O - b), L = new Array(I), N = 0; N < I; N++)
          L[N] = y == "String" ? this.charAt(b + N) : this[b + N];
        return L;
      } });
    }, 5105: (a, c, n) => {
      var s = Date.prototype, u = "Invalid Date", f = "toString", l = s[f], g = s.getTime;
      /* @__PURE__ */ new Date(NaN) + "" != u && n(7738)(s, f, function() {
        var p = g.call(this);
        return p == p ? l.call(this) : u;
      });
    }, 8629: (a, c, n) => {
      var s = n(5772);
      s(s.P, "Function", { bind: n(9337) });
    }, 9745: (a, c, n) => {
      var s = n(8558).f, u = Function.prototype, f = /^\s*function ([^ (]*)/, l = "name";
      l in u || n(6628) && s(u, l, { configurable: !0, get: function() {
        try {
          return ("" + this).match(f)[1];
        } catch {
          return "";
        }
      } });
    }, 1239: (a, c, n) => {
      var s = n(5635), u = n(9060), f = "Map";
      a.exports = n(7611)(f, function(l) {
        return function() {
          return l(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      }, { get: function(l) {
        var g = s.getEntry(u(this, f), l);
        return g && g.v;
      }, set: function(l, g) {
        return s.def(u(this, f), l === 0 ? 0 : l, g);
      } }, s, !0);
    }, 9701: (a, c, n) => {
      var s = n(5772);
      s(s.S, "Object", { create: n(2897) });
    }, 8344: (a, c, n) => {
      var s = n(5772);
      s(s.S + s.F * !n(6628), "Object", { defineProperties: n(7331) });
    }, 5843: (a, c, n) => {
      var s = n(5772);
      s(s.S + s.F * !n(6628), "Object", { defineProperty: n(8558).f });
    }, 541: (a, c, n) => {
      var s = n(5703), u = n(4662).f;
      n(468)("getOwnPropertyDescriptor", function() {
        return function(f, l) {
          return u(s(f), l);
        };
      });
    }, 9770: (a, c, n) => {
      n(468)("getOwnPropertyNames", function() {
        return n(5259).f;
      });
    }, 8904: (a, c, n) => {
      var s = n(6033), u = n(9002);
      n(468)("getPrototypeOf", function() {
        return function(f) {
          return u(s(f));
        };
      });
    }, 4978: (a, c, n) => {
      var s = n(6033), u = n(2912);
      n(468)("keys", function() {
        return function(f) {
          return u(s(f));
        };
      });
    }, 6139: (a, c, n) => {
      var s = n(106), u = {};
      u[n(2190)("toStringTag")] = "z", u + "" != "[object z]" && n(7738)(Object.prototype, "toString", function() {
        return "[object " + s(this) + "]";
      }, !0);
    }, 2235: (a, c, n) => {
      var s, u, f, l, g = n(1422), p = n(8113), w = n(1528), Q = n(106), v = n(5772), y = n(7334), b = n(2761), O = n(5824), I = n(1891), L = n(1987), N = n(9124).set, H = n(3492)(), j = n(8577), V = n(9739), X = n(5822), x = n(5151), _ = "Promise", Z = p.TypeError, iA = p.process, rA = iA && iA.versions, IA = rA && rA.v8 || "", HA = p[_], vA = Q(iA) == "process", mA = function() {
      }, QA = u = j.f, gA = !!function() {
        try {
          var AA = HA.resolve(1), aA = (AA.constructor = {})[n(2190)("species")] = function(SA) {
            SA(mA, mA);
          };
          return (vA || typeof PromiseRejectionEvent == "function") && AA.then(mA) instanceof aA && IA.indexOf("6.6") !== 0 && X.indexOf("Chrome/66") === -1;
        } catch {
        }
      }(), M = function(AA) {
        var aA;
        return !(!y(AA) || typeof (aA = AA.then) != "function") && aA;
      }, R = function(AA, aA) {
        if (!AA._n) {
          AA._n = !0;
          var SA = AA._c;
          H(function() {
            for (var OA = AA._v, TA = AA._s == 1, XA = 0, pe = function(ie) {
              var GA, Ae, zA, oe = TA ? ie.ok : ie.fail, be = ie.resolve, ge = ie.reject, Qe = ie.domain;
              try {
                oe ? (TA || (AA._h == 2 && tA(AA), AA._h = 1), oe === !0 ? GA = OA : (Qe && Qe.enter(), GA = oe(OA), Qe && (Qe.exit(), zA = !0)), GA === ie.promise ? ge(Z("Promise-chain cycle")) : (Ae = M(GA)) ? Ae.call(GA, be, ge) : be(GA)) : ge(OA);
              } catch (he) {
                Qe && !zA && Qe.exit(), ge(he);
              }
            }; SA.length > XA; )
              pe(SA[XA++]);
            AA._c = [], AA._n = !1, aA && !AA._h && W(AA);
          });
        }
      }, W = function(AA) {
        N.call(p, function() {
          var aA, SA, OA, TA = AA._v, XA = uA(AA);
          if (XA && (aA = V(function() {
            vA ? iA.emit("unhandledRejection", TA, AA) : (SA = p.onunhandledrejection) ? SA({ promise: AA, reason: TA }) : (OA = p.console) && OA.error && OA.error("Unhandled promise rejection", TA);
          }), AA._h = vA || uA(AA) ? 2 : 1), AA._a = void 0, XA && aA.e)
            throw aA.v;
        });
      }, uA = function(AA) {
        return AA._h !== 1 && (AA._a || AA._c).length === 0;
      }, tA = function(AA) {
        N.call(p, function() {
          var aA;
          vA ? iA.emit("rejectionHandled", AA) : (aA = p.onrejectionhandled) && aA({ promise: AA, reason: AA._v });
        });
      }, EA = function(AA) {
        var aA = this;
        aA._d || (aA._d = !0, (aA = aA._w || aA)._v = AA, aA._s = 2, aA._a || (aA._a = aA._c.slice()), R(aA, !0));
      }, DA = function(AA) {
        var aA, SA = this;
        if (!SA._d) {
          SA._d = !0, SA = SA._w || SA;
          try {
            if (SA === AA)
              throw Z("Promise can't be resolved itself");
            (aA = M(AA)) ? H(function() {
              var OA = { _w: SA, _d: !1 };
              try {
                aA.call(AA, w(DA, OA, 1), w(EA, OA, 1));
              } catch (TA) {
                EA.call(OA, TA);
              }
            }) : (SA._v = AA, SA._s = 1, R(SA, !1));
          } catch (OA) {
            EA.call({ _w: SA, _d: !1 }, OA);
          }
        }
      };
      gA || (HA = function(AA) {
        O(this, HA, _, "_h"), b(AA), s.call(this);
        try {
          AA(w(DA, this, 1), w(EA, this, 1));
        } catch (aA) {
          EA.call(this, aA);
        }
      }, (s = function(AA) {
        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1;
      }).prototype = n(2243)(HA.prototype, { then: function(AA, aA) {
        var SA = QA(L(this, HA));
        return SA.ok = typeof AA != "function" || AA, SA.fail = typeof aA == "function" && aA, SA.domain = vA ? iA.domain : void 0, this._c.push(SA), this._a && this._a.push(SA), this._s && R(this, !1), SA.promise;
      }, catch: function(AA) {
        return this.then(void 0, AA);
      } }), f = function() {
        var AA = new s();
        this.promise = AA, this.resolve = w(DA, AA, 1), this.reject = w(EA, AA, 1);
      }, j.f = QA = function(AA) {
        return AA === HA || AA === l ? new f(AA) : u(AA);
      }), v(v.G + v.W + v.F * !gA, { Promise: HA }), n(5727)(HA, _), n(9766)(_), l = n(66)[_], v(v.S + v.F * !gA, _, { reject: function(AA) {
        var aA = QA(this);
        return (0, aA.reject)(AA), aA.promise;
      } }), v(v.S + v.F * (g || !gA), _, { resolve: function(AA) {
        return x(g && this === l ? HA : this, AA);
      } }), v(v.S + v.F * !(gA && n(3143)(function(AA) {
        HA.all(AA).catch(mA);
      })), _, { all: function(AA) {
        var aA = this, SA = QA(aA), OA = SA.resolve, TA = SA.reject, XA = V(function() {
          var pe = [], ie = 0, GA = 1;
          I(AA, !1, function(Ae) {
            var zA = ie++, oe = !1;
            pe.push(void 0), GA++, aA.resolve(Ae).then(function(be) {
              oe || (oe = !0, pe[zA] = be, --GA || OA(pe));
            }, TA);
          }), --GA || OA(pe);
        });
        return XA.e && TA(XA.v), SA.promise;
      }, race: function(AA) {
        var aA = this, SA = QA(aA), OA = SA.reject, TA = V(function() {
          I(AA, !1, function(XA) {
            aA.resolve(XA).then(SA.resolve, OA);
          });
        });
        return TA.e && OA(TA.v), SA.promise;
      } });
    }, 5506: (a, c, n) => {
      var s = n(8113), u = n(8938), f = n(8558).f, l = n(6604).f, g = n(4587), p = n(4859), w = s.RegExp, Q = w, v = w.prototype, y = /a/g, b = /a/g, O = new w(y) !== y;
      if (n(6628) && (!O || n(8625)(function() {
        return b[n(2190)("match")] = !1, w(y) != y || w(b) == b || w(y, "i") != "/a/i";
      }))) {
        w = function(H, j) {
          var V = this instanceof w, X = g(H), x = j === void 0;
          return !V && X && H.constructor === w && x ? H : u(O ? new Q(X && !x ? H.source : H, j) : Q((X = H instanceof w) ? H.source : H, X && x ? p.call(H) : j), V ? this : v, w);
        };
        for (var I = function(H) {
          H in w || f(w, H, { configurable: !0, get: function() {
            return Q[H];
          }, set: function(j) {
            Q[H] = j;
          } });
        }, L = l(Q), N = 0; L.length > N; )
          I(L[N++]);
        v.constructor = w, w.prototype = v, n(7738)(s, "RegExp", w);
      }
      n(9766)("RegExp");
    }, 5846: (a, c, n) => {
      var s = n(3288);
      n(5772)({ target: "RegExp", proto: !0, forced: s !== /./.exec }, { exec: s });
    }, 751: (a, c, n) => {
      n(6628) && /./g.flags != "g" && n(8558).f(RegExp.prototype, "flags", { configurable: !0, get: n(4859) });
    }, 9236: (a, c, n) => {
      var s = n(4587), u = n(6365), f = n(1987), l = n(8492), g = n(6078), p = n(2404), w = n(3288), Q = n(8625), v = Math.min, y = [].push, b = "split", O = "length", I = "lastIndex", L = 4294967295, N = !Q(function() {
      });
      n(8897)("split", 2, function(H, j, V, X) {
        var x;
        return x = "abbc"[b](/(b)*/)[1] == "c" || "test"[b](/(?:)/, -1)[O] != 4 || "ab"[b](/(?:ab)*/)[O] != 2 || "."[b](/(.?)(.?)/)[O] != 4 || "."[b](/()()/)[O] > 1 || ""[b](/.?/)[O] ? function(_, Z) {
          var iA = String(this);
          if (_ === void 0 && Z === 0)
            return [];
          if (!s(_))
            return V.call(iA, _, Z);
          for (var rA, IA, HA, vA = [], mA = (_.ignoreCase ? "i" : "") + (_.multiline ? "m" : "") + (_.unicode ? "u" : "") + (_.sticky ? "y" : ""), QA = 0, gA = Z === void 0 ? L : Z >>> 0, M = new RegExp(_.source, mA + "g"); (rA = w.call(M, iA)) && !((IA = M[I]) > QA && (vA.push(iA.slice(QA, rA.index)), rA[O] > 1 && rA.index < iA[O] && y.apply(vA, rA.slice(1)), HA = rA[0][O], QA = IA, vA[O] >= gA)); )
            M[I] === rA.index && M[I]++;
          return QA === iA[O] ? !HA && M.test("") || vA.push("") : vA.push(iA.slice(QA)), vA[O] > gA ? vA.slice(0, gA) : vA;
        } : "0"[b](void 0, 0)[O] ? function(_, Z) {
          return _ === void 0 && Z === 0 ? [] : V.call(this, _, Z);
        } : V, [function(_, Z) {
          var iA = H(this), rA = _ == null ? void 0 : _[j];
          return rA !== void 0 ? rA.call(_, iA, Z) : x.call(String(iA), _, Z);
        }, function(_, Z) {
          var iA = X(x, _, this, Z, x !== V);
          if (iA.done)
            return iA.value;
          var rA = u(_), IA = String(this), HA = f(rA, RegExp), vA = rA.unicode, mA = (rA.ignoreCase ? "i" : "") + (rA.multiline ? "m" : "") + (rA.unicode ? "u" : "") + (N ? "y" : "g"), QA = new HA(N ? rA : "^(?:" + rA.source + ")", mA), gA = Z === void 0 ? L : Z >>> 0;
          if (gA === 0)
            return [];
          if (IA.length === 0)
            return p(QA, IA) === null ? [IA] : [];
          for (var M = 0, R = 0, W = []; R < IA.length; ) {
            QA.lastIndex = N ? R : 0;
            var uA, tA = p(QA, N ? IA : IA.slice(R));
            if (tA === null || (uA = v(g(QA.lastIndex + (N ? 0 : R)), IA.length)) === M)
              R = l(IA, R, vA);
            else {
              if (W.push(IA.slice(M, R)), W.length === gA)
                return W;
              for (var EA = 1; EA <= tA.length - 1; EA++)
                if (W.push(tA[EA]), W.length === gA)
                  return W;
              R = M = uA;
            }
          }
          return W.push(IA.slice(M)), W;
        }];
      });
    }, 4321: (a, c, n) => {
      n(751);
      var s = n(6365), u = n(4859), f = n(6628), l = "toString", g = /./[l], p = function(w) {
        n(7738)(RegExp.prototype, l, w, !0);
      };
      n(8625)(function() {
        return g.call({ source: "a", flags: "b" }) != "/a/b";
      }) ? p(function() {
        var w = s(this);
        return "/".concat(w.source, "/", "flags" in w ? w.flags : !f && w instanceof RegExp ? u.call(w) : void 0);
      }) : g.name != l && p(function() {
        return g.call(this);
      });
    }, 8392: (a, c, n) => {
      var s = n(5635), u = n(9060);
      a.exports = n(7611)("Set", function(f) {
        return function() {
          return f(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      }, { add: function(f) {
        return s.def(u(this, "Set"), f = f === 0 ? 0 : f, f);
      } }, s);
    }, 427: (a, c, n) => {
      var s = n(5772), u = n(6078), f = n(465), l = "endsWith", g = ""[l];
      s(s.P + s.F * n(6570)(l), "String", { endsWith: function(p) {
        var w = f(this, p, l), Q = arguments.length > 1 ? arguments[1] : void 0, v = u(w.length), y = Q === void 0 ? v : Math.min(u(Q), v), b = String(p);
        return g ? g.call(w, b, y) : w.slice(y - b.length, y) === b;
      } });
    }, 3777: (a, c, n) => {
      var s = n(5772), u = n(465), f = "includes";
      s(s.P + s.F * n(6570)(f), "String", { includes: function(l) {
        return !!~u(this, l, f).indexOf(l, arguments.length > 1 ? arguments[1] : void 0);
      } });
    }, 7472: (a, c, n) => {
      var s = n(2070)(!0);
      n(1195)(String, "String", function(u) {
        this._t = String(u), this._i = 0;
      }, function() {
        var u, f = this._t, l = this._i;
        return l >= f.length ? { value: void 0, done: !0 } : (u = s(f, l), this._i += u.length, { value: u, done: !1 });
      });
    }, 5942: (a, c, n) => {
      var s = n(5772), u = n(6078), f = n(465), l = "startsWith", g = ""[l];
      s(s.P + s.F * n(6570)(l), "String", { startsWith: function(p) {
        var w = f(this, p, l), Q = u(Math.min(arguments.length > 1 ? arguments[1] : void 0, w.length)), v = String(p);
        return g ? g.call(w, v, Q) : w.slice(Q, Q + v.length) === v;
      } });
    }, 9823: (a, c, n) => {
      var s = n(8113), u = n(4040), f = n(6628), l = n(5772), g = n(7738), p = n(998).KEY, w = n(8625), Q = n(8655), v = n(5727), y = n(5078), b = n(2190), O = n(9669), I = n(5660), L = n(7820), N = n(9141), H = n(6365), j = n(7334), V = n(6033), X = n(5703), x = n(1382), _ = n(6061), Z = n(2897), iA = n(5259), rA = n(4662), IA = n(7957), HA = n(8558), vA = n(2912), mA = rA.f, QA = HA.f, gA = iA.f, M = s.Symbol, R = s.JSON, W = R && R.stringify, uA = "prototype", tA = b("_hidden"), EA = b("toPrimitive"), DA = {}.propertyIsEnumerable, AA = Q("symbol-registry"), aA = Q("symbols"), SA = Q("op-symbols"), OA = Object[uA], TA = typeof M == "function" && !!IA.f, XA = s.QObject, pe = !XA || !XA[uA] || !XA[uA].findChild, ie = f && w(function() {
        return Z(QA({}, "a", { get: function() {
          return QA(this, "a", { value: 7 }).a;
        } })).a != 7;
      }) ? function(nA, BA, xA) {
        var PA = mA(OA, BA);
        PA && delete OA[BA], QA(nA, BA, xA), PA && nA !== OA && QA(OA, BA, PA);
      } : QA, GA = function(nA) {
        var BA = aA[nA] = Z(M[uA]);
        return BA._k = nA, BA;
      }, Ae = TA && typeof M.iterator == "symbol" ? function(nA) {
        return typeof nA == "symbol";
      } : function(nA) {
        return nA instanceof M;
      }, zA = function(nA, BA, xA) {
        return nA === OA && zA(SA, BA, xA), H(nA), BA = x(BA, !0), H(xA), u(aA, BA) ? (xA.enumerable ? (u(nA, tA) && nA[tA][BA] && (nA[tA][BA] = !1), xA = Z(xA, { enumerable: _(0, !1) })) : (u(nA, tA) || QA(nA, tA, _(1, {})), nA[tA][BA] = !0), ie(nA, BA, xA)) : QA(nA, BA, xA);
      }, oe = function(nA, BA) {
        H(nA);
        for (var xA, PA = L(BA = X(BA)), YA = 0, jA = PA.length; jA > YA; )
          zA(nA, xA = PA[YA++], BA[xA]);
        return nA;
      }, be = function(nA) {
        var BA = DA.call(this, nA = x(nA, !0));
        return !(this === OA && u(aA, nA) && !u(SA, nA)) && (!(BA || !u(this, nA) || !u(aA, nA) || u(this, tA) && this[tA][nA]) || BA);
      }, ge = function(nA, BA) {
        if (nA = X(nA), BA = x(BA, !0), nA !== OA || !u(aA, BA) || u(SA, BA)) {
          var xA = mA(nA, BA);
          return !xA || !u(aA, BA) || u(nA, tA) && nA[tA][BA] || (xA.enumerable = !0), xA;
        }
      }, Qe = function(nA) {
        for (var BA, xA = gA(X(nA)), PA = [], YA = 0; xA.length > YA; )
          u(aA, BA = xA[YA++]) || BA == tA || BA == p || PA.push(BA);
        return PA;
      }, he = function(nA) {
        for (var BA, xA = nA === OA, PA = gA(xA ? SA : X(nA)), YA = [], jA = 0; PA.length > jA; )
          !u(aA, BA = PA[jA++]) || xA && !u(OA, BA) || YA.push(aA[BA]);
        return YA;
      };
      TA || (g((M = function() {
        if (this instanceof M)
          throw TypeError("Symbol is not a constructor!");
        var nA = y(arguments.length > 0 ? arguments[0] : void 0), BA = function(xA) {
          this === OA && BA.call(SA, xA), u(this, tA) && u(this[tA], nA) && (this[tA][nA] = !1), ie(this, nA, _(1, xA));
        };
        return f && pe && ie(OA, nA, { configurable: !0, set: BA }), GA(nA);
      })[uA], "toString", function() {
        return this._k;
      }), rA.f = ge, HA.f = zA, n(6604).f = iA.f = Qe, n(5873).f = be, IA.f = he, f && !n(1422) && g(OA, "propertyIsEnumerable", be, !0), O.f = function(nA) {
        return GA(b(nA));
      }), l(l.G + l.W + l.F * !TA, { Symbol: M });
      for (var q = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), bA = 0; q.length > bA; )
        b(q[bA++]);
      for (var ae = vA(b.store), MA = 0; ae.length > MA; )
        I(ae[MA++]);
      l(l.S + l.F * !TA, "Symbol", { for: function(nA) {
        return u(AA, nA += "") ? AA[nA] : AA[nA] = M(nA);
      }, keyFor: function(nA) {
        if (!Ae(nA))
          throw TypeError(nA + " is not a symbol!");
        for (var BA in AA)
          if (AA[BA] === nA)
            return BA;
      }, useSetter: function() {
        pe = !0;
      }, useSimple: function() {
        pe = !1;
      } }), l(l.S + l.F * !TA, "Object", { create: function(nA, BA) {
        return BA === void 0 ? Z(nA) : oe(Z(nA), BA);
      }, defineProperty: zA, defineProperties: oe, getOwnPropertyDescriptor: ge, getOwnPropertyNames: Qe, getOwnPropertySymbols: he });
      var $A = w(function() {
        IA.f(1);
      });
      l(l.S + l.F * $A, "Object", { getOwnPropertySymbols: function(nA) {
        return IA.f(V(nA));
      } }), R && l(l.S + l.F * (!TA || w(function() {
        var nA = M();
        return W([nA]) != "[null]" || W({ a: nA }) != "{}" || W(Object(nA)) != "{}";
      })), "JSON", { stringify: function(nA) {
        for (var BA, xA, PA = [nA], YA = 1; arguments.length > YA; )
          PA.push(arguments[YA++]);
        if (xA = BA = PA[1], (j(BA) || nA !== void 0) && !Ae(nA))
          return N(BA) || (BA = function(jA, De) {
            if (typeof xA == "function" && (De = xA.call(this, jA, De)), !Ae(De))
              return De;
          }), PA[1] = BA, W.apply(R, PA);
      } }), M[uA][EA] || n(4216)(M[uA], EA, M[uA].valueOf), v(M, "Symbol"), v(Math, "Math", !0), v(s.JSON, "JSON", !0);
    }, 3149: (a, c, n) => {
      n(7978)("Float32", 4, function(s) {
        return function(u, f, l) {
          return s(this, u, f, l);
        };
      });
    }, 4637: (a, c, n) => {
      n(7978)("Float64", 8, function(s) {
        return function(u, f, l) {
          return s(this, u, f, l);
        };
      });
    }, 3958: (a, c, n) => {
      n(7978)("Int16", 2, function(s) {
        return function(u, f, l) {
          return s(this, u, f, l);
        };
      });
    }, 5469: (a, c, n) => {
      n(7978)("Int32", 4, function(s) {
        return function(u, f, l) {
          return s(this, u, f, l);
        };
      });
    }, 6788: (a, c, n) => {
      n(7978)("Int8", 1, function(s) {
        return function(u, f, l) {
          return s(this, u, f, l);
        };
      });
    }, 1592: (a, c, n) => {
      n(7978)("Uint16", 2, function(s) {
        return function(u, f, l) {
          return s(this, u, f, l);
        };
      });
    }, 6471: (a, c, n) => {
      n(7978)("Uint32", 4, function(s) {
        return function(u, f, l) {
          return s(this, u, f, l);
        };
      });
    }, 6780: (a, c, n) => {
      n(7978)("Uint8", 1, function(s) {
        return function(u, f, l) {
          return s(this, u, f, l);
        };
      });
    }, 3620: (a, c, n) => {
      n(7978)("Uint8", 1, function(s) {
        return function(u, f, l) {
          return s(this, u, f, l);
        };
      }, !0);
    }, 8081: (a, c, n) => {
      var s = n(5772), u = n(9021)(!0);
      s(s.P, "Array", { includes: function(f) {
        return u(this, f, arguments.length > 1 ? arguments[1] : void 0);
      } }), n(2094)("includes");
    }, 7453: (a, c, n) => {
      var s = n(5772), u = n(6831), f = n(5703), l = n(4662), g = n(6644);
      s(s.S, "Object", { getOwnPropertyDescriptors: function(p) {
        for (var w, Q, v = f(p), y = l.f, b = u(v), O = {}, I = 0; b.length > I; )
          (Q = y(v, w = b[I++])) !== void 0 && g(O, w, Q);
        return O;
      } });
    }, 27: (a, c, n) => {
      var s = n(5772), u = n(758)(!1);
      s(s.S, "Object", { values: function(f) {
        return u(f);
      } });
    }, 3085: (a, c, n) => {
      for (var s = n(7680), u = n(2912), f = n(7738), l = n(8113), g = n(4216), p = n(3988), w = n(2190), Q = w("iterator"), v = w("toStringTag"), y = p.Array, b = { CSSRuleList: !0, CSSStyleDeclaration: !1, CSSValueList: !1, ClientRectList: !1, DOMRectList: !1, DOMStringList: !1, DOMTokenList: !0, DataTransferItemList: !1, FileList: !1, HTMLAllCollection: !1, HTMLCollection: !1, HTMLFormElement: !1, HTMLSelectElement: !1, MediaList: !0, MimeTypeArray: !1, NamedNodeMap: !1, NodeList: !0, PaintRequestList: !1, Plugin: !1, PluginArray: !1, SVGLengthList: !1, SVGNumberList: !1, SVGPathSegList: !1, SVGPointList: !1, SVGStringList: !1, SVGTransformList: !1, SourceBufferList: !1, StyleSheetList: !0, TextTrackCueList: !1, TextTrackList: !1, TouchList: !1 }, O = u(b), I = 0; I < O.length; I++) {
        var L, N = O[I], H = b[N], j = l[N], V = j && j.prototype;
        if (V && (V[Q] || g(V, Q, y), V[v] || g(V, v, N), p[N] = y, H))
          for (L in s)
            V[L] || f(V, L, s[L], !0);
      }
    }, 927: (a, c, n) => {
      a.exports = function s(u, f, l) {
        function g(Q, v) {
          if (!f[Q]) {
            if (!u[Q]) {
              if (p)
                return p(Q, !0);
              var y = new Error("Cannot find module '" + Q + "'");
              throw y.code = "MODULE_NOT_FOUND", y;
            }
            var b = f[Q] = { exports: {} };
            u[Q][0].call(b.exports, function(O) {
              return g(u[Q][1][O] || O);
            }, b, b.exports, s, u, f, l);
          }
          return f[Q].exports;
        }
        for (var p = void 0, w = 0; w < l.length; w++)
          g(l[w]);
        return g;
      }({ 1: [function(s, u, f) {
        (function(l) {
          var g, p, w = l.MutationObserver || l.WebKitMutationObserver;
          if (w) {
            var Q = 0, v = new w(I), y = l.document.createTextNode("");
            v.observe(y, { characterData: !0 }), g = function() {
              y.data = Q = ++Q % 2;
            };
          } else if (l.setImmediate || l.MessageChannel === void 0)
            g = "document" in l && "onreadystatechange" in l.document.createElement("script") ? function() {
              var L = l.document.createElement("script");
              L.onreadystatechange = function() {
                I(), L.onreadystatechange = null, L.parentNode.removeChild(L), L = null;
              }, l.document.documentElement.appendChild(L);
            } : function() {
              setTimeout(I, 0);
            };
          else {
            var b = new l.MessageChannel();
            b.port1.onmessage = I, g = function() {
              b.port2.postMessage(0);
            };
          }
          var O = [];
          function I() {
            var L, N;
            p = !0;
            for (var H = O.length; H; ) {
              for (N = O, O = [], L = -1; ++L < H; )
                N[L]();
              H = O.length;
            }
            p = !1;
          }
          u.exports = function(L) {
            O.push(L) !== 1 || p || g();
          };
        }).call(this, n.g !== void 0 ? n.g : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, {}], 2: [function(s, u, f) {
        var l = s(1);
        function g() {
        }
        var p = {}, w = ["REJECTED"], Q = ["FULFILLED"], v = ["PENDING"];
        function y(H) {
          if (typeof H != "function")
            throw new TypeError("resolver must be a function");
          this.state = v, this.queue = [], this.outcome = void 0, H !== g && L(this, H);
        }
        function b(H, j, V) {
          this.promise = H, typeof j == "function" && (this.onFulfilled = j, this.callFulfilled = this.otherCallFulfilled), typeof V == "function" && (this.onRejected = V, this.callRejected = this.otherCallRejected);
        }
        function O(H, j, V) {
          l(function() {
            var X;
            try {
              X = j(V);
            } catch (x) {
              return p.reject(H, x);
            }
            X === H ? p.reject(H, new TypeError("Cannot resolve promise with itself")) : p.resolve(H, X);
          });
        }
        function I(H) {
          var j = H && H.then;
          if (H && (typeof H == "object" || typeof H == "function") && typeof j == "function")
            return function() {
              j.apply(H, arguments);
            };
        }
        function L(H, j) {
          var V = !1;
          function X(Z) {
            V || (V = !0, p.reject(H, Z));
          }
          function x(Z) {
            V || (V = !0, p.resolve(H, Z));
          }
          var _ = N(function() {
            j(x, X);
          });
          _.status === "error" && X(_.value);
        }
        function N(H, j) {
          var V = {};
          try {
            V.value = H(j), V.status = "success";
          } catch (X) {
            V.status = "error", V.value = X;
          }
          return V;
        }
        u.exports = y, y.prototype.catch = function(H) {
          return this.then(null, H);
        }, y.prototype.then = function(H, j) {
          if (typeof H != "function" && this.state === Q || typeof j != "function" && this.state === w)
            return this;
          var V = new this.constructor(g);
          return this.state !== v ? O(V, this.state === Q ? H : j, this.outcome) : this.queue.push(new b(V, H, j)), V;
        }, b.prototype.callFulfilled = function(H) {
          p.resolve(this.promise, H);
        }, b.prototype.otherCallFulfilled = function(H) {
          O(this.promise, this.onFulfilled, H);
        }, b.prototype.callRejected = function(H) {
          p.reject(this.promise, H);
        }, b.prototype.otherCallRejected = function(H) {
          O(this.promise, this.onRejected, H);
        }, p.resolve = function(H, j) {
          var V = N(I, j);
          if (V.status === "error")
            return p.reject(H, V.value);
          var X = V.value;
          if (X)
            L(H, X);
          else {
            H.state = Q, H.outcome = j;
            for (var x = -1, _ = H.queue.length; ++x < _; )
              H.queue[x].callFulfilled(j);
          }
          return H;
        }, p.reject = function(H, j) {
          H.state = w, H.outcome = j;
          for (var V = -1, X = H.queue.length; ++V < X; )
            H.queue[V].callRejected(j);
          return H;
        }, y.resolve = function(H) {
          return H instanceof this ? H : p.resolve(new this(g), H);
        }, y.reject = function(H) {
          var j = new this(g);
          return p.reject(j, H);
        }, y.all = function(H) {
          var j = this;
          if (Object.prototype.toString.call(H) !== "[object Array]")
            return this.reject(new TypeError("must be an array"));
          var V = H.length, X = !1;
          if (!V)
            return this.resolve([]);
          for (var x = new Array(V), _ = 0, Z = -1, iA = new this(g); ++Z < V; )
            rA(H[Z], Z);
          return iA;
          function rA(IA, HA) {
            j.resolve(IA).then(function(vA) {
              x[HA] = vA, ++_ !== V || X || (X = !0, p.resolve(iA, x));
            }, function(vA) {
              X || (X = !0, p.reject(iA, vA));
            });
          }
        }, y.race = function(H) {
          var j = this;
          if (Object.prototype.toString.call(H) !== "[object Array]")
            return this.reject(new TypeError("must be an array"));
          var V, X = H.length, x = !1;
          if (!X)
            return this.resolve([]);
          for (var _ = -1, Z = new this(g); ++_ < X; )
            V = H[_], j.resolve(V).then(function(iA) {
              x || (x = !0, p.resolve(Z, iA));
            }, function(iA) {
              x || (x = !0, p.reject(Z, iA));
            });
          return Z;
        };
      }, { 1: 1 }], 3: [function(s, u, f) {
        (function(l) {
          typeof l.Promise != "function" && (l.Promise = s(2));
        }).call(this, n.g !== void 0 ? n.g : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, { 2: 2 }], 4: [function(s, u, f) {
        var l = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(C) {
          return typeof C;
        } : function(C) {
          return C && typeof Symbol == "function" && C.constructor === Symbol && C !== Symbol.prototype ? "symbol" : typeof C;
        }, g = function() {
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
            for (var m = new (typeof BlobBuilder < "u" ? BlobBuilder : typeof MSBlobBuilder < "u" ? MSBlobBuilder : typeof MozBlobBuilder < "u" ? MozBlobBuilder : WebKitBlobBuilder)(), D = 0; D < C.length; D += 1)
              m.append(C[D]);
            return m.getBlob(E.type);
          }
        }
        typeof Promise > "u" && s(3);
        var w = Promise;
        function Q(C, E) {
          E && C.then(function(m) {
            E(null, m);
          }, function(m) {
            E(m);
          });
        }
        function v(C, E, m) {
          typeof E == "function" && C.then(E), typeof m == "function" && C.catch(m);
        }
        function y(C) {
          return typeof C != "string" && (console.warn(C + " used as a key, but it is not a string."), C = String(C)), C;
        }
        function b() {
          if (arguments.length && typeof arguments[arguments.length - 1] == "function")
            return arguments[arguments.length - 1];
        }
        var O = "local-forage-detect-blob-support", I = void 0, L = {}, N = Object.prototype.toString, H = "readonly", j = "readwrite";
        function V(C) {
          for (var E = C.length, m = new ArrayBuffer(E), D = new Uint8Array(m), K = 0; K < E; K++)
            D[K] = C.charCodeAt(K);
          return m;
        }
        function X(C) {
          return typeof I == "boolean" ? w.resolve(I) : function(E) {
            return new w(function(m) {
              var D = E.transaction(O, j), K = p([""]);
              D.objectStore(O).put(K, "key"), D.onabort = function(T) {
                T.preventDefault(), T.stopPropagation(), m(!1);
              }, D.oncomplete = function() {
                var T = navigator.userAgent.match(/Chrome\/(\d+)/), k = navigator.userAgent.match(/Edge\//);
                m(k || !T || parseInt(T[1], 10) >= 43);
              };
            }).catch(function() {
              return !1;
            });
          }(C).then(function(E) {
            return I = E;
          });
        }
        function x(C) {
          var E = L[C.name], m = {};
          m.promise = new w(function(D, K) {
            m.resolve = D, m.reject = K;
          }), E.deferredOperations.push(m), E.dbReady ? E.dbReady = E.dbReady.then(function() {
            return m.promise;
          }) : E.dbReady = m.promise;
        }
        function _(C) {
          var E = L[C.name].deferredOperations.pop();
          if (E)
            return E.resolve(), E.promise;
        }
        function Z(C, E) {
          var m = L[C.name].deferredOperations.pop();
          if (m)
            return m.reject(E), m.promise;
        }
        function iA(C, E) {
          return new w(function(m, D) {
            if (L[C.name] = L[C.name] || { forages: [], db: null, dbReady: null, deferredOperations: [] }, C.db) {
              if (!E)
                return m(C.db);
              x(C), C.db.close();
            }
            var K = [C.name];
            E && K.push(C.version);
            var T = g.open.apply(g, K);
            E && (T.onupgradeneeded = function(k) {
              var $ = T.result;
              try {
                $.createObjectStore(C.storeName), k.oldVersion <= 1 && $.createObjectStore(O);
              } catch (z) {
                if (z.name !== "ConstraintError")
                  throw z;
                console.warn('The database "' + C.name + '" has been upgraded from version ' + k.oldVersion + " to version " + k.newVersion + ', but the storage "' + C.storeName + '" already exists.');
              }
            }), T.onerror = function(k) {
              k.preventDefault(), D(T.error);
            }, T.onsuccess = function() {
              var k = T.result;
              k.onversionchange = function($) {
                $.target.close();
              }, m(k), _(C);
            };
          });
        }
        function rA(C) {
          return iA(C, !1);
        }
        function IA(C) {
          return iA(C, !0);
        }
        function HA(C, E) {
          if (!C.db)
            return !0;
          var m = !C.db.objectStoreNames.contains(C.storeName), D = C.version < C.db.version, K = C.version > C.db.version;
          if (D && (C.version !== E && console.warn('The database "' + C.name + `" can't be downgraded from version ` + C.db.version + " to version " + C.version + "."), C.version = C.db.version), K || m) {
            if (m) {
              var T = C.db.version + 1;
              T > C.version && (C.version = T);
            }
            return !0;
          }
          return !1;
        }
        function vA(C) {
          return p([V(atob(C.data))], { type: C.type });
        }
        function mA(C) {
          return C && C.__local_forage_encoded_blob;
        }
        function QA(C) {
          var E = this, m = E._initReady().then(function() {
            var D = L[E._dbInfo.name];
            if (D && D.dbReady)
              return D.dbReady;
          });
          return v(m, C, C), m;
        }
        function gA(C, E, m, D) {
          D === void 0 && (D = 1);
          try {
            var K = C.db.transaction(C.storeName, E);
            m(null, K);
          } catch (T) {
            if (D > 0 && (!C.db || T.name === "InvalidStateError" || T.name === "NotFoundError"))
              return w.resolve().then(function() {
                if (!C.db || T.name === "NotFoundError" && !C.db.objectStoreNames.contains(C.storeName) && C.version <= C.db.version)
                  return C.db && (C.version = C.db.version + 1), IA(C);
              }).then(function() {
                return function(k) {
                  x(k);
                  for (var $ = L[k.name], z = $.forages, J = 0; J < z.length; J++) {
                    var lA = z[J];
                    lA._dbInfo.db && (lA._dbInfo.db.close(), lA._dbInfo.db = null);
                  }
                  return k.db = null, rA(k).then(function(U) {
                    return k.db = U, HA(k) ? IA(k) : U;
                  }).then(function(U) {
                    k.db = $.db = U;
                    for (var P = 0; P < z.length; P++)
                      z[P]._dbInfo.db = U;
                  }).catch(function(U) {
                    throw Z(k, U), U;
                  });
                }(C).then(function() {
                  gA(C, E, m, D - 1);
                });
              }).catch(m);
            m(T);
          }
        }
        var M = { _driver: "asyncStorage", _initStorage: function(C) {
          var E = this, m = { db: null };
          if (C)
            for (var D in C)
              m[D] = C[D];
          var K = L[m.name];
          K || (K = { forages: [], db: null, dbReady: null, deferredOperations: [] }, L[m.name] = K), K.forages.push(E), E._initReady || (E._initReady = E.ready, E.ready = QA);
          var T = [];
          function k() {
            return w.resolve();
          }
          for (var $ = 0; $ < K.forages.length; $++) {
            var z = K.forages[$];
            z !== E && T.push(z._initReady().catch(k));
          }
          var J = K.forages.slice(0);
          return w.all(T).then(function() {
            return m.db = K.db, rA(m);
          }).then(function(lA) {
            return m.db = lA, HA(m, E._defaultConfig.version) ? IA(m) : lA;
          }).then(function(lA) {
            m.db = K.db = lA, E._dbInfo = m;
            for (var U = 0; U < J.length; U++) {
              var P = J[U];
              P !== E && (P._dbInfo.db = m.db, P._dbInfo.version = m.version);
            }
          });
        }, _support: function() {
          try {
            if (!g || !g.open)
              return !1;
            var C = typeof openDatabase < "u" && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform), E = typeof fetch == "function" && fetch.toString().indexOf("[native code") !== -1;
            return (!C || E) && typeof indexedDB < "u" && typeof IDBKeyRange < "u";
          } catch {
            return !1;
          }
        }(), iterate: function(C, E) {
          var m = this, D = new w(function(K, T) {
            m.ready().then(function() {
              gA(m._dbInfo, H, function(k, $) {
                if (k)
                  return T(k);
                try {
                  var z = $.objectStore(m._dbInfo.storeName).openCursor(), J = 1;
                  z.onsuccess = function() {
                    var lA = z.result;
                    if (lA) {
                      var U = lA.value;
                      mA(U) && (U = vA(U));
                      var P = C(U, lA.key, J++);
                      P !== void 0 ? K(P) : lA.continue();
                    } else
                      K();
                  }, z.onerror = function() {
                    T(z.error);
                  };
                } catch (lA) {
                  T(lA);
                }
              });
            }).catch(T);
          });
          return Q(D, E), D;
        }, getItem: function(C, E) {
          var m = this;
          C = y(C);
          var D = new w(function(K, T) {
            m.ready().then(function() {
              gA(m._dbInfo, H, function(k, $) {
                if (k)
                  return T(k);
                try {
                  var z = $.objectStore(m._dbInfo.storeName).get(C);
                  z.onsuccess = function() {
                    var J = z.result;
                    J === void 0 && (J = null), mA(J) && (J = vA(J)), K(J);
                  }, z.onerror = function() {
                    T(z.error);
                  };
                } catch (J) {
                  T(J);
                }
              });
            }).catch(T);
          });
          return Q(D, E), D;
        }, setItem: function(C, E, m) {
          var D = this;
          C = y(C);
          var K = new w(function(T, k) {
            var $;
            D.ready().then(function() {
              return $ = D._dbInfo, N.call(E) === "[object Blob]" ? X($.db).then(function(z) {
                return z ? E : (J = E, new w(function(lA, U) {
                  var P = new FileReader();
                  P.onerror = U, P.onloadend = function(Y) {
                    var cA = btoa(Y.target.result || "");
                    lA({ __local_forage_encoded_blob: !0, data: cA, type: J.type });
                  }, P.readAsBinaryString(J);
                }));
                var J;
              }) : E;
            }).then(function(z) {
              gA(D._dbInfo, j, function(J, lA) {
                if (J)
                  return k(J);
                try {
                  var U = lA.objectStore(D._dbInfo.storeName);
                  z === null && (z = void 0);
                  var P = U.put(z, C);
                  lA.oncomplete = function() {
                    z === void 0 && (z = null), T(z);
                  }, lA.onabort = lA.onerror = function() {
                    var Y = P.error ? P.error : P.transaction.error;
                    k(Y);
                  };
                } catch (Y) {
                  k(Y);
                }
              });
            }).catch(k);
          });
          return Q(K, m), K;
        }, removeItem: function(C, E) {
          var m = this;
          C = y(C);
          var D = new w(function(K, T) {
            m.ready().then(function() {
              gA(m._dbInfo, j, function(k, $) {
                if (k)
                  return T(k);
                try {
                  var z = $.objectStore(m._dbInfo.storeName).delete(C);
                  $.oncomplete = function() {
                    K();
                  }, $.onerror = function() {
                    T(z.error);
                  }, $.onabort = function() {
                    var J = z.error ? z.error : z.transaction.error;
                    T(J);
                  };
                } catch (J) {
                  T(J);
                }
              });
            }).catch(T);
          });
          return Q(D, E), D;
        }, clear: function(C) {
          var E = this, m = new w(function(D, K) {
            E.ready().then(function() {
              gA(E._dbInfo, j, function(T, k) {
                if (T)
                  return K(T);
                try {
                  var $ = k.objectStore(E._dbInfo.storeName).clear();
                  k.oncomplete = function() {
                    D();
                  }, k.onabort = k.onerror = function() {
                    var z = $.error ? $.error : $.transaction.error;
                    K(z);
                  };
                } catch (z) {
                  K(z);
                }
              });
            }).catch(K);
          });
          return Q(m, C), m;
        }, length: function(C) {
          var E = this, m = new w(function(D, K) {
            E.ready().then(function() {
              gA(E._dbInfo, H, function(T, k) {
                if (T)
                  return K(T);
                try {
                  var $ = k.objectStore(E._dbInfo.storeName).count();
                  $.onsuccess = function() {
                    D($.result);
                  }, $.onerror = function() {
                    K($.error);
                  };
                } catch (z) {
                  K(z);
                }
              });
            }).catch(K);
          });
          return Q(m, C), m;
        }, key: function(C, E) {
          var m = this, D = new w(function(K, T) {
            C < 0 ? K(null) : m.ready().then(function() {
              gA(m._dbInfo, H, function(k, $) {
                if (k)
                  return T(k);
                try {
                  var z = $.objectStore(m._dbInfo.storeName), J = !1, lA = z.openKeyCursor();
                  lA.onsuccess = function() {
                    var U = lA.result;
                    U ? C === 0 || J ? K(U.key) : (J = !0, U.advance(C)) : K(null);
                  }, lA.onerror = function() {
                    T(lA.error);
                  };
                } catch (U) {
                  T(U);
                }
              });
            }).catch(T);
          });
          return Q(D, E), D;
        }, keys: function(C) {
          var E = this, m = new w(function(D, K) {
            E.ready().then(function() {
              gA(E._dbInfo, H, function(T, k) {
                if (T)
                  return K(T);
                try {
                  var $ = k.objectStore(E._dbInfo.storeName).openKeyCursor(), z = [];
                  $.onsuccess = function() {
                    var J = $.result;
                    J ? (z.push(J.key), J.continue()) : D(z);
                  }, $.onerror = function() {
                    K($.error);
                  };
                } catch (J) {
                  K(J);
                }
              });
            }).catch(K);
          });
          return Q(m, C), m;
        }, dropInstance: function(C, E) {
          E = b.apply(this, arguments);
          var m = this.config();
          (C = typeof C != "function" && C || {}).name || (C.name = C.name || m.name, C.storeName = C.storeName || m.storeName);
          var D, K = this;
          if (C.name) {
            var T = C.name === m.name && K._dbInfo.db ? w.resolve(K._dbInfo.db) : rA(C).then(function(k) {
              var $ = L[C.name], z = $.forages;
              $.db = k;
              for (var J = 0; J < z.length; J++)
                z[J]._dbInfo.db = k;
              return k;
            });
            D = C.storeName ? T.then(function(k) {
              if (k.objectStoreNames.contains(C.storeName)) {
                var $ = k.version + 1;
                x(C);
                var z = L[C.name], J = z.forages;
                k.close();
                for (var lA = 0; lA < J.length; lA++) {
                  var U = J[lA];
                  U._dbInfo.db = null, U._dbInfo.version = $;
                }
                var P = new w(function(Y, cA) {
                  var hA = g.open(C.name, $);
                  hA.onerror = function(VA) {
                    hA.result.close(), cA(VA);
                  }, hA.onupgradeneeded = function() {
                    hA.result.deleteObjectStore(C.storeName);
                  }, hA.onsuccess = function() {
                    var VA = hA.result;
                    VA.close(), Y(VA);
                  };
                });
                return P.then(function(Y) {
                  z.db = Y;
                  for (var cA = 0; cA < J.length; cA++) {
                    var hA = J[cA];
                    hA._dbInfo.db = Y, _(hA._dbInfo);
                  }
                }).catch(function(Y) {
                  throw (Z(C, Y) || w.resolve()).catch(function() {
                  }), Y;
                });
              }
            }) : T.then(function(k) {
              x(C);
              var $ = L[C.name], z = $.forages;
              k.close();
              for (var J = 0; J < z.length; J++)
                z[J]._dbInfo.db = null;
              var lA = new w(function(U, P) {
                var Y = g.deleteDatabase(C.name);
                Y.onerror = function() {
                  var cA = Y.result;
                  cA && cA.close(), P(Y.error);
                }, Y.onblocked = function() {
                  console.warn('dropInstance blocked for database "' + C.name + '" until all open connections are closed');
                }, Y.onsuccess = function() {
                  var cA = Y.result;
                  cA && cA.close(), U(cA);
                };
              });
              return lA.then(function(U) {
                $.db = U;
                for (var P = 0; P < z.length; P++)
                  _(z[P]._dbInfo);
              }).catch(function(U) {
                throw (Z(C, U) || w.resolve()).catch(function() {
                }), U;
              });
            });
          } else
            D = w.reject("Invalid arguments");
          return Q(D, E), D;
        } }, R = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", W = /^~~local_forage_type~([^~]+)~/, uA = "__lfsc__:", tA = uA.length, EA = "arbf", DA = "blob", AA = "si08", aA = "ui08", SA = "uic8", OA = "si16", TA = "si32", XA = "ur16", pe = "ui32", ie = "fl32", GA = "fl64", Ae = tA + EA.length, zA = Object.prototype.toString;
        function oe(C) {
          var E, m, D, K, T, k = 0.75 * C.length, $ = C.length, z = 0;
          C[C.length - 1] === "=" && (k--, C[C.length - 2] === "=" && k--);
          var J = new ArrayBuffer(k), lA = new Uint8Array(J);
          for (E = 0; E < $; E += 4)
            m = R.indexOf(C[E]), D = R.indexOf(C[E + 1]), K = R.indexOf(C[E + 2]), T = R.indexOf(C[E + 3]), lA[z++] = m << 2 | D >> 4, lA[z++] = (15 & D) << 4 | K >> 2, lA[z++] = (3 & K) << 6 | 63 & T;
          return J;
        }
        function be(C) {
          var E, m = new Uint8Array(C), D = "";
          for (E = 0; E < m.length; E += 3)
            D += R[m[E] >> 2], D += R[(3 & m[E]) << 4 | m[E + 1] >> 4], D += R[(15 & m[E + 1]) << 2 | m[E + 2] >> 6], D += R[63 & m[E + 2]];
          return m.length % 3 == 2 ? D = D.substring(0, D.length - 1) + "=" : m.length % 3 == 1 && (D = D.substring(0, D.length - 2) + "=="), D;
        }
        var ge = { serialize: function(C, E) {
          var m = "";
          if (C && (m = zA.call(C)), C && (m === "[object ArrayBuffer]" || C.buffer && zA.call(C.buffer) === "[object ArrayBuffer]")) {
            var D, K = uA;
            C instanceof ArrayBuffer ? (D = C, K += EA) : (D = C.buffer, m === "[object Int8Array]" ? K += AA : m === "[object Uint8Array]" ? K += aA : m === "[object Uint8ClampedArray]" ? K += SA : m === "[object Int16Array]" ? K += OA : m === "[object Uint16Array]" ? K += XA : m === "[object Int32Array]" ? K += TA : m === "[object Uint32Array]" ? K += pe : m === "[object Float32Array]" ? K += ie : m === "[object Float64Array]" ? K += GA : E(new Error("Failed to get type for BinaryArray"))), E(K + be(D));
          } else if (m === "[object Blob]") {
            var T = new FileReader();
            T.onload = function() {
              var k = "~~local_forage_type~" + C.type + "~" + be(this.result);
              E(uA + DA + k);
            }, T.readAsArrayBuffer(C);
          } else
            try {
              E(JSON.stringify(C));
            } catch (k) {
              console.error("Couldn't convert value into a JSON string: ", C), E(null, k);
            }
        }, deserialize: function(C) {
          if (C.substring(0, tA) !== uA)
            return JSON.parse(C);
          var E, m = C.substring(Ae), D = C.substring(tA, Ae);
          if (D === DA && W.test(m)) {
            var K = m.match(W);
            E = K[1], m = m.substring(K[0].length);
          }
          var T = oe(m);
          switch (D) {
            case EA:
              return T;
            case DA:
              return p([T], { type: E });
            case AA:
              return new Int8Array(T);
            case aA:
              return new Uint8Array(T);
            case SA:
              return new Uint8ClampedArray(T);
            case OA:
              return new Int16Array(T);
            case XA:
              return new Uint16Array(T);
            case TA:
              return new Int32Array(T);
            case pe:
              return new Uint32Array(T);
            case ie:
              return new Float32Array(T);
            case GA:
              return new Float64Array(T);
            default:
              throw new Error("Unkown type: " + D);
          }
        }, stringToBuffer: oe, bufferToString: be };
        function Qe(C, E, m, D) {
          C.executeSql("CREATE TABLE IF NOT EXISTS " + E.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], m, D);
        }
        function he(C, E, m, D, K, T) {
          C.executeSql(m, D, K, function(k, $) {
            $.code === $.SYNTAX_ERR ? k.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [E.storeName], function(z, J) {
              J.rows.length ? T(z, $) : Qe(z, E, function() {
                z.executeSql(m, D, K, T);
              }, T);
            }, T) : T(k, $);
          }, T);
        }
        function q(C, E, m, D) {
          var K = this;
          C = y(C);
          var T = new w(function(k, $) {
            K.ready().then(function() {
              E === void 0 && (E = null);
              var z = E, J = K._dbInfo;
              J.serializer.serialize(E, function(lA, U) {
                U ? $(U) : J.db.transaction(function(P) {
                  he(P, J, "INSERT OR REPLACE INTO " + J.storeName + " (key, value) VALUES (?, ?)", [C, lA], function() {
                    k(z);
                  }, function(Y, cA) {
                    $(cA);
                  });
                }, function(P) {
                  if (P.code === P.QUOTA_ERR) {
                    if (D > 0)
                      return void k(q.apply(K, [C, z, m, D - 1]));
                    $(P);
                  }
                });
              });
            }).catch($);
          });
          return Q(T, m), T;
        }
        function bA(C) {
          return new w(function(E, m) {
            C.transaction(function(D) {
              D.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(K, T) {
                for (var k = [], $ = 0; $ < T.rows.length; $++)
                  k.push(T.rows.item($).name);
                E({ db: C, storeNames: k });
              }, function(K, T) {
                m(T);
              });
            }, function(D) {
              m(D);
            });
          });
        }
        var ae = { _driver: "webSQLStorage", _initStorage: function(C) {
          var E = this, m = { db: null };
          if (C)
            for (var D in C)
              m[D] = typeof C[D] != "string" ? C[D].toString() : C[D];
          var K = new w(function(T, k) {
            try {
              m.db = openDatabase(m.name, String(m.version), m.description, m.size);
            } catch ($) {
              return k($);
            }
            m.db.transaction(function($) {
              Qe($, m, function() {
                E._dbInfo = m, T();
              }, function(z, J) {
                k(J);
              });
            }, k);
          });
          return m.serializer = ge, K;
        }, _support: typeof openDatabase == "function", iterate: function(C, E) {
          var m = this, D = new w(function(K, T) {
            m.ready().then(function() {
              var k = m._dbInfo;
              k.db.transaction(function($) {
                he($, k, "SELECT * FROM " + k.storeName, [], function(z, J) {
                  for (var lA = J.rows, U = lA.length, P = 0; P < U; P++) {
                    var Y = lA.item(P), cA = Y.value;
                    if (cA && (cA = k.serializer.deserialize(cA)), (cA = C(cA, Y.key, P + 1)) !== void 0)
                      return void K(cA);
                  }
                  K();
                }, function(z, J) {
                  T(J);
                });
              });
            }).catch(T);
          });
          return Q(D, E), D;
        }, getItem: function(C, E) {
          var m = this;
          C = y(C);
          var D = new w(function(K, T) {
            m.ready().then(function() {
              var k = m._dbInfo;
              k.db.transaction(function($) {
                he($, k, "SELECT * FROM " + k.storeName + " WHERE key = ? LIMIT 1", [C], function(z, J) {
                  var lA = J.rows.length ? J.rows.item(0).value : null;
                  lA && (lA = k.serializer.deserialize(lA)), K(lA);
                }, function(z, J) {
                  T(J);
                });
              });
            }).catch(T);
          });
          return Q(D, E), D;
        }, setItem: function(C, E, m) {
          return q.apply(this, [C, E, m, 1]);
        }, removeItem: function(C, E) {
          var m = this;
          C = y(C);
          var D = new w(function(K, T) {
            m.ready().then(function() {
              var k = m._dbInfo;
              k.db.transaction(function($) {
                he($, k, "DELETE FROM " + k.storeName + " WHERE key = ?", [C], function() {
                  K();
                }, function(z, J) {
                  T(J);
                });
              });
            }).catch(T);
          });
          return Q(D, E), D;
        }, clear: function(C) {
          var E = this, m = new w(function(D, K) {
            E.ready().then(function() {
              var T = E._dbInfo;
              T.db.transaction(function(k) {
                he(k, T, "DELETE FROM " + T.storeName, [], function() {
                  D();
                }, function($, z) {
                  K(z);
                });
              });
            }).catch(K);
          });
          return Q(m, C), m;
        }, length: function(C) {
          var E = this, m = new w(function(D, K) {
            E.ready().then(function() {
              var T = E._dbInfo;
              T.db.transaction(function(k) {
                he(k, T, "SELECT COUNT(key) as c FROM " + T.storeName, [], function($, z) {
                  var J = z.rows.item(0).c;
                  D(J);
                }, function($, z) {
                  K(z);
                });
              });
            }).catch(K);
          });
          return Q(m, C), m;
        }, key: function(C, E) {
          var m = this, D = new w(function(K, T) {
            m.ready().then(function() {
              var k = m._dbInfo;
              k.db.transaction(function($) {
                he($, k, "SELECT key FROM " + k.storeName + " WHERE id = ? LIMIT 1", [C + 1], function(z, J) {
                  var lA = J.rows.length ? J.rows.item(0).key : null;
                  K(lA);
                }, function(z, J) {
                  T(J);
                });
              });
            }).catch(T);
          });
          return Q(D, E), D;
        }, keys: function(C) {
          var E = this, m = new w(function(D, K) {
            E.ready().then(function() {
              var T = E._dbInfo;
              T.db.transaction(function(k) {
                he(k, T, "SELECT key FROM " + T.storeName, [], function($, z) {
                  for (var J = [], lA = 0; lA < z.rows.length; lA++)
                    J.push(z.rows.item(lA).key);
                  D(J);
                }, function($, z) {
                  K(z);
                });
              });
            }).catch(K);
          });
          return Q(m, C), m;
        }, dropInstance: function(C, E) {
          E = b.apply(this, arguments);
          var m = this.config();
          (C = typeof C != "function" && C || {}).name || (C.name = C.name || m.name, C.storeName = C.storeName || m.storeName);
          var D, K = this;
          return Q(D = C.name ? new w(function(T) {
            var k;
            k = C.name === m.name ? K._dbInfo.db : openDatabase(C.name, "", "", 0), C.storeName ? T({ db: k, storeNames: [C.storeName] }) : T(bA(k));
          }).then(function(T) {
            return new w(function(k, $) {
              T.db.transaction(function(z) {
                function J(Y) {
                  return new w(function(cA, hA) {
                    z.executeSql("DROP TABLE IF EXISTS " + Y, [], function() {
                      cA();
                    }, function(VA, KA) {
                      hA(KA);
                    });
                  });
                }
                for (var lA = [], U = 0, P = T.storeNames.length; U < P; U++)
                  lA.push(J(T.storeNames[U]));
                w.all(lA).then(function() {
                  k();
                }).catch(function(Y) {
                  $(Y);
                });
              }, function(z) {
                $(z);
              });
            });
          }) : w.reject("Invalid arguments"), E), D;
        } };
        function MA(C, E) {
          var m = C.name + "/";
          return C.storeName !== E.storeName && (m += C.storeName + "/"), m;
        }
        function $A() {
          return !function() {
            var C = "_localforage_support_test";
            try {
              return localStorage.setItem(C, !0), localStorage.removeItem(C), !1;
            } catch {
              return !0;
            }
          }() || localStorage.length > 0;
        }
        var nA = { _driver: "localStorageWrapper", _initStorage: function(C) {
          var E = {};
          if (C)
            for (var m in C)
              E[m] = C[m];
          return E.keyPrefix = MA(C, this._defaultConfig), $A() ? (this._dbInfo = E, E.serializer = ge, w.resolve()) : w.reject();
        }, _support: function() {
          try {
            return typeof localStorage < "u" && "setItem" in localStorage && !!localStorage.setItem;
          } catch {
            return !1;
          }
        }(), iterate: function(C, E) {
          var m = this, D = m.ready().then(function() {
            for (var K = m._dbInfo, T = K.keyPrefix, k = T.length, $ = localStorage.length, z = 1, J = 0; J < $; J++) {
              var lA = localStorage.key(J);
              if (lA.indexOf(T) === 0) {
                var U = localStorage.getItem(lA);
                if (U && (U = K.serializer.deserialize(U)), (U = C(U, lA.substring(k), z++)) !== void 0)
                  return U;
              }
            }
          });
          return Q(D, E), D;
        }, getItem: function(C, E) {
          var m = this;
          C = y(C);
          var D = m.ready().then(function() {
            var K = m._dbInfo, T = localStorage.getItem(K.keyPrefix + C);
            return T && (T = K.serializer.deserialize(T)), T;
          });
          return Q(D, E), D;
        }, setItem: function(C, E, m) {
          var D = this;
          C = y(C);
          var K = D.ready().then(function() {
            E === void 0 && (E = null);
            var T = E;
            return new w(function(k, $) {
              var z = D._dbInfo;
              z.serializer.serialize(E, function(J, lA) {
                if (lA)
                  $(lA);
                else
                  try {
                    localStorage.setItem(z.keyPrefix + C, J), k(T);
                  } catch (U) {
                    U.name !== "QuotaExceededError" && U.name !== "NS_ERROR_DOM_QUOTA_REACHED" || $(U), $(U);
                  }
              });
            });
          });
          return Q(K, m), K;
        }, removeItem: function(C, E) {
          var m = this;
          C = y(C);
          var D = m.ready().then(function() {
            var K = m._dbInfo;
            localStorage.removeItem(K.keyPrefix + C);
          });
          return Q(D, E), D;
        }, clear: function(C) {
          var E = this, m = E.ready().then(function() {
            for (var D = E._dbInfo.keyPrefix, K = localStorage.length - 1; K >= 0; K--) {
              var T = localStorage.key(K);
              T.indexOf(D) === 0 && localStorage.removeItem(T);
            }
          });
          return Q(m, C), m;
        }, length: function(C) {
          var E = this.keys().then(function(m) {
            return m.length;
          });
          return Q(E, C), E;
        }, key: function(C, E) {
          var m = this, D = m.ready().then(function() {
            var K, T = m._dbInfo;
            try {
              K = localStorage.key(C);
            } catch {
              K = null;
            }
            return K && (K = K.substring(T.keyPrefix.length)), K;
          });
          return Q(D, E), D;
        }, keys: function(C) {
          var E = this, m = E.ready().then(function() {
            for (var D = E._dbInfo, K = localStorage.length, T = [], k = 0; k < K; k++) {
              var $ = localStorage.key(k);
              $.indexOf(D.keyPrefix) === 0 && T.push($.substring(D.keyPrefix.length));
            }
            return T;
          });
          return Q(m, C), m;
        }, dropInstance: function(C, E) {
          if (E = b.apply(this, arguments), !(C = typeof C != "function" && C || {}).name) {
            var m = this.config();
            C.name = C.name || m.name, C.storeName = C.storeName || m.storeName;
          }
          var D, K = this;
          return D = C.name ? new w(function(T) {
            C.storeName ? T(MA(C, K._defaultConfig)) : T(C.name + "/");
          }).then(function(T) {
            for (var k = localStorage.length - 1; k >= 0; k--) {
              var $ = localStorage.key(k);
              $.indexOf(T) === 0 && localStorage.removeItem($);
            }
          }) : w.reject("Invalid arguments"), Q(D, E), D;
        } }, BA = function(C, E) {
          for (var m = C.length, D = 0; D < m; ) {
            if ((K = C[D]) === (T = E) || typeof K == "number" && typeof T == "number" && isNaN(K) && isNaN(T))
              return !0;
            D++;
          }
          var K, T;
          return !1;
        }, xA = Array.isArray || function(C) {
          return Object.prototype.toString.call(C) === "[object Array]";
        }, PA = {}, YA = {}, jA = { INDEXEDDB: M, WEBSQL: ae, LOCALSTORAGE: nA }, De = [jA.INDEXEDDB._driver, jA.WEBSQL._driver, jA.LOCALSTORAGE._driver], Je = ["dropInstance"], nt = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(Je), ke = { description: "", driver: De.slice(), name: "localforage", size: 4980736, storeName: "keyvaluepairs", version: 1 };
        function ot(C, E) {
          C[E] = function() {
            var m = arguments;
            return C.ready().then(function() {
              return C[E].apply(C, m);
            });
          };
        }
        function Ne() {
          for (var C = 1; C < arguments.length; C++) {
            var E = arguments[C];
            if (E)
              for (var m in E)
                E.hasOwnProperty(m) && (xA(E[m]) ? arguments[0][m] = E[m].slice() : arguments[0][m] = E[m]);
          }
          return arguments[0];
        }
        var it = function() {
          function C(E) {
            for (var m in function(T, k) {
              if (!(T instanceof k))
                throw new TypeError("Cannot call a class as a function");
            }(this, C), jA)
              if (jA.hasOwnProperty(m)) {
                var D = jA[m], K = D._driver;
                this[m] = K, PA[K] || this.defineDriver(D);
              }
            this._defaultConfig = Ne({}, ke), this._config = Ne({}, this._defaultConfig, E), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch(function() {
            });
          }
          return C.prototype.config = function(E) {
            if ((E === void 0 ? "undefined" : l(E)) === "object") {
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
          }, C.prototype.defineDriver = function(E, m, D) {
            var K = new w(function(T, k) {
              try {
                var $ = E._driver, z = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
                if (!E._driver)
                  return void k(z);
                for (var J = nt.concat("_initStorage"), lA = 0, U = J.length; lA < U; lA++) {
                  var P = J[lA];
                  if ((!BA(Je, P) || E[P]) && typeof E[P] != "function")
                    return void k(z);
                }
                (function() {
                  for (var cA = function(RA) {
                    return function() {
                      var ve = new Error("Method " + RA + " is not implemented by the current driver"), ee = w.reject(ve);
                      return Q(ee, arguments[arguments.length - 1]), ee;
                    };
                  }, hA = 0, VA = Je.length; hA < VA; hA++) {
                    var KA = Je[hA];
                    E[KA] || (E[KA] = cA(KA));
                  }
                })();
                var Y = function(cA) {
                  PA[$] && console.info("Redefining LocalForage driver: " + $), PA[$] = E, YA[$] = cA, T();
                };
                "_support" in E ? E._support && typeof E._support == "function" ? E._support().then(Y, k) : Y(!!E._support) : Y(!0);
              } catch (cA) {
                k(cA);
              }
            });
            return v(K, m, D), K;
          }, C.prototype.driver = function() {
            return this._driver || null;
          }, C.prototype.getDriver = function(E, m, D) {
            var K = PA[E] ? w.resolve(PA[E]) : w.reject(new Error("Driver not found."));
            return v(K, m, D), K;
          }, C.prototype.getSerializer = function(E) {
            var m = w.resolve(ge);
            return v(m, E), m;
          }, C.prototype.ready = function(E) {
            var m = this, D = m._driverSet.then(function() {
              return m._ready === null && (m._ready = m._initDriver()), m._ready;
            });
            return v(D, E, E), D;
          }, C.prototype.setDriver = function(E, m, D) {
            var K = this;
            xA(E) || (E = [E]);
            var T = this._getSupportedDrivers(E);
            function k() {
              K._config.driver = K.driver();
            }
            function $(J) {
              return K._extend(J), k(), K._ready = K._initStorage(K._config), K._ready;
            }
            var z = this._driverSet !== null ? this._driverSet.catch(function() {
              return w.resolve();
            }) : w.resolve();
            return this._driverSet = z.then(function() {
              var J = T[0];
              return K._dbInfo = null, K._ready = null, K.getDriver(J).then(function(lA) {
                K._driver = lA._driver, k(), K._wrapLibraryMethodsWithReady(), K._initDriver = /* @__PURE__ */ function(U) {
                  return function() {
                    var P = 0;
                    return function Y() {
                      for (; P < U.length; ) {
                        var cA = U[P];
                        return P++, K._dbInfo = null, K._ready = null, K.getDriver(cA).then($).catch(Y);
                      }
                      k();
                      var hA = new Error("No available storage method found.");
                      return K._driverSet = w.reject(hA), K._driverSet;
                    }();
                  };
                }(T);
              });
            }).catch(function() {
              k();
              var J = new Error("No available storage method found.");
              return K._driverSet = w.reject(J), K._driverSet;
            }), v(this._driverSet, m, D), this._driverSet;
          }, C.prototype.supports = function(E) {
            return !!YA[E];
          }, C.prototype._extend = function(E) {
            Ne(this, E);
          }, C.prototype._getSupportedDrivers = function(E) {
            for (var m = [], D = 0, K = E.length; D < K; D++) {
              var T = E[D];
              this.supports(T) && m.push(T);
            }
            return m;
          }, C.prototype._wrapLibraryMethodsWithReady = function() {
            for (var E = 0, m = nt.length; E < m; E++)
              ot(this, nt[E]);
          }, C.prototype.createInstance = function(E) {
            return new C(E);
          }, C;
        }(), It = new it();
        u.exports = It;
      }, { 3: 3 }] }, {}, [4])(4);
    }, 8156: (a) => {
      a.exports = t;
    }, 1337: (a, c, n) => {
      var s = n(7501).default;
      function u() {
        a.exports = u = function() {
          return f;
        }, a.exports.__esModule = !0, a.exports.default = a.exports;
        var f = {}, l = Object.prototype, g = l.hasOwnProperty, p = Object.defineProperty || function(M, R, W) {
          M[R] = W.value;
        }, w = typeof Symbol == "function" ? Symbol : {}, Q = w.iterator || "@@iterator", v = w.asyncIterator || "@@asyncIterator", y = w.toStringTag || "@@toStringTag";
        function b(M, R, W) {
          return Object.defineProperty(M, R, { value: W, enumerable: !0, configurable: !0, writable: !0 }), M[R];
        }
        try {
          b({}, "");
        } catch {
          b = function(R, W, uA) {
            return R[W] = uA;
          };
        }
        function O(M, R, W, uA) {
          var tA = R && R.prototype instanceof N ? R : N, EA = Object.create(tA.prototype), DA = new mA(uA || []);
          return p(EA, "_invoke", { value: rA(M, W, DA) }), EA;
        }
        function I(M, R, W) {
          try {
            return { type: "normal", arg: M.call(R, W) };
          } catch (uA) {
            return { type: "throw", arg: uA };
          }
        }
        f.wrap = O;
        var L = {};
        function N() {
        }
        function H() {
        }
        function j() {
        }
        var V = {};
        b(V, Q, function() {
          return this;
        });
        var X = Object.getPrototypeOf, x = X && X(X(QA([])));
        x && x !== l && g.call(x, Q) && (V = x);
        var _ = j.prototype = N.prototype = Object.create(V);
        function Z(M) {
          ["next", "throw", "return"].forEach(function(R) {
            b(M, R, function(W) {
              return this._invoke(R, W);
            });
          });
        }
        function iA(M, R) {
          function W(tA, EA, DA, AA) {
            var aA = I(M[tA], M, EA);
            if (aA.type !== "throw") {
              var SA = aA.arg, OA = SA.value;
              return OA && s(OA) == "object" && g.call(OA, "__await") ? R.resolve(OA.__await).then(function(TA) {
                W("next", TA, DA, AA);
              }, function(TA) {
                W("throw", TA, DA, AA);
              }) : R.resolve(OA).then(function(TA) {
                SA.value = TA, DA(SA);
              }, function(TA) {
                return W("throw", TA, DA, AA);
              });
            }
            AA(aA.arg);
          }
          var uA;
          p(this, "_invoke", { value: function(tA, EA) {
            function DA() {
              return new R(function(AA, aA) {
                W(tA, EA, AA, aA);
              });
            }
            return uA = uA ? uA.then(DA, DA) : DA();
          } });
        }
        function rA(M, R, W) {
          var uA = "suspendedStart";
          return function(tA, EA) {
            if (uA === "executing")
              throw new Error("Generator is already running");
            if (uA === "completed") {
              if (tA === "throw")
                throw EA;
              return { value: void 0, done: !0 };
            }
            for (W.method = tA, W.arg = EA; ; ) {
              var DA = W.delegate;
              if (DA) {
                var AA = IA(DA, W);
                if (AA) {
                  if (AA === L)
                    continue;
                  return AA;
                }
              }
              if (W.method === "next")
                W.sent = W._sent = W.arg;
              else if (W.method === "throw") {
                if (uA === "suspendedStart")
                  throw uA = "completed", W.arg;
                W.dispatchException(W.arg);
              } else
                W.method === "return" && W.abrupt("return", W.arg);
              uA = "executing";
              var aA = I(M, R, W);
              if (aA.type === "normal") {
                if (uA = W.done ? "completed" : "suspendedYield", aA.arg === L)
                  continue;
                return { value: aA.arg, done: W.done };
              }
              aA.type === "throw" && (uA = "completed", W.method = "throw", W.arg = aA.arg);
            }
          };
        }
        function IA(M, R) {
          var W = R.method, uA = M.iterator[W];
          if (uA === void 0)
            return R.delegate = null, W === "throw" && M.iterator.return && (R.method = "return", R.arg = void 0, IA(M, R), R.method === "throw") || W !== "return" && (R.method = "throw", R.arg = new TypeError("The iterator does not provide a '" + W + "' method")), L;
          var tA = I(uA, M.iterator, R.arg);
          if (tA.type === "throw")
            return R.method = "throw", R.arg = tA.arg, R.delegate = null, L;
          var EA = tA.arg;
          return EA ? EA.done ? (R[M.resultName] = EA.value, R.next = M.nextLoc, R.method !== "return" && (R.method = "next", R.arg = void 0), R.delegate = null, L) : EA : (R.method = "throw", R.arg = new TypeError("iterator result is not an object"), R.delegate = null, L);
        }
        function HA(M) {
          var R = { tryLoc: M[0] };
          1 in M && (R.catchLoc = M[1]), 2 in M && (R.finallyLoc = M[2], R.afterLoc = M[3]), this.tryEntries.push(R);
        }
        function vA(M) {
          var R = M.completion || {};
          R.type = "normal", delete R.arg, M.completion = R;
        }
        function mA(M) {
          this.tryEntries = [{ tryLoc: "root" }], M.forEach(HA, this), this.reset(!0);
        }
        function QA(M) {
          if (M) {
            var R = M[Q];
            if (R)
              return R.call(M);
            if (typeof M.next == "function")
              return M;
            if (!isNaN(M.length)) {
              var W = -1, uA = function tA() {
                for (; ++W < M.length; )
                  if (g.call(M, W))
                    return tA.value = M[W], tA.done = !1, tA;
                return tA.value = void 0, tA.done = !0, tA;
              };
              return uA.next = uA;
            }
          }
          return { next: gA };
        }
        function gA() {
          return { value: void 0, done: !0 };
        }
        return H.prototype = j, p(_, "constructor", { value: j, configurable: !0 }), p(j, "constructor", { value: H, configurable: !0 }), H.displayName = b(j, y, "GeneratorFunction"), f.isGeneratorFunction = function(M) {
          var R = typeof M == "function" && M.constructor;
          return !!R && (R === H || (R.displayName || R.name) === "GeneratorFunction");
        }, f.mark = function(M) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(M, j) : (M.__proto__ = j, b(M, y, "GeneratorFunction")), M.prototype = Object.create(_), M;
        }, f.awrap = function(M) {
          return { __await: M };
        }, Z(iA.prototype), b(iA.prototype, v, function() {
          return this;
        }), f.AsyncIterator = iA, f.async = function(M, R, W, uA, tA) {
          tA === void 0 && (tA = Promise);
          var EA = new iA(O(M, R, W, uA), tA);
          return f.isGeneratorFunction(R) ? EA : EA.next().then(function(DA) {
            return DA.done ? DA.value : EA.next();
          });
        }, Z(_), b(_, y, "Generator"), b(_, Q, function() {
          return this;
        }), b(_, "toString", function() {
          return "[object Generator]";
        }), f.keys = function(M) {
          var R = Object(M), W = [];
          for (var uA in R)
            W.push(uA);
          return W.reverse(), function tA() {
            for (; W.length; ) {
              var EA = W.pop();
              if (EA in R)
                return tA.value = EA, tA.done = !1, tA;
            }
            return tA.done = !0, tA;
          };
        }, f.values = QA, mA.prototype = { constructor: mA, reset: function(M) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(vA), !M)
            for (var R in this)
              R.charAt(0) === "t" && g.call(this, R) && !isNaN(+R.slice(1)) && (this[R] = void 0);
        }, stop: function() {
          this.done = !0;
          var M = this.tryEntries[0].completion;
          if (M.type === "throw")
            throw M.arg;
          return this.rval;
        }, dispatchException: function(M) {
          if (this.done)
            throw M;
          var R = this;
          function W(aA, SA) {
            return EA.type = "throw", EA.arg = M, R.next = aA, SA && (R.method = "next", R.arg = void 0), !!SA;
          }
          for (var uA = this.tryEntries.length - 1; uA >= 0; --uA) {
            var tA = this.tryEntries[uA], EA = tA.completion;
            if (tA.tryLoc === "root")
              return W("end");
            if (tA.tryLoc <= this.prev) {
              var DA = g.call(tA, "catchLoc"), AA = g.call(tA, "finallyLoc");
              if (DA && AA) {
                if (this.prev < tA.catchLoc)
                  return W(tA.catchLoc, !0);
                if (this.prev < tA.finallyLoc)
                  return W(tA.finallyLoc);
              } else if (DA) {
                if (this.prev < tA.catchLoc)
                  return W(tA.catchLoc, !0);
              } else {
                if (!AA)
                  throw new Error("try statement without catch or finally");
                if (this.prev < tA.finallyLoc)
                  return W(tA.finallyLoc);
              }
            }
          }
        }, abrupt: function(M, R) {
          for (var W = this.tryEntries.length - 1; W >= 0; --W) {
            var uA = this.tryEntries[W];
            if (uA.tryLoc <= this.prev && g.call(uA, "finallyLoc") && this.prev < uA.finallyLoc) {
              var tA = uA;
              break;
            }
          }
          tA && (M === "break" || M === "continue") && tA.tryLoc <= R && R <= tA.finallyLoc && (tA = null);
          var EA = tA ? tA.completion : {};
          return EA.type = M, EA.arg = R, tA ? (this.method = "next", this.next = tA.finallyLoc, L) : this.complete(EA);
        }, complete: function(M, R) {
          if (M.type === "throw")
            throw M.arg;
          return M.type === "break" || M.type === "continue" ? this.next = M.arg : M.type === "return" ? (this.rval = this.arg = M.arg, this.method = "return", this.next = "end") : M.type === "normal" && R && (this.next = R), L;
        }, finish: function(M) {
          for (var R = this.tryEntries.length - 1; R >= 0; --R) {
            var W = this.tryEntries[R];
            if (W.finallyLoc === M)
              return this.complete(W.completion, W.afterLoc), vA(W), L;
          }
        }, catch: function(M) {
          for (var R = this.tryEntries.length - 1; R >= 0; --R) {
            var W = this.tryEntries[R];
            if (W.tryLoc === M) {
              var uA = W.completion;
              if (uA.type === "throw") {
                var tA = uA.arg;
                vA(W);
              }
              return tA;
            }
          }
          throw new Error("illegal catch attempt");
        }, delegateYield: function(M, R, W) {
          return this.delegate = { iterator: QA(M), resultName: R, nextLoc: W }, this.method === "next" && (this.arg = void 0), L;
        } }, f;
      }
      a.exports = u, a.exports.__esModule = !0, a.exports.default = a.exports;
    }, 7501: (a) => {
      function c(n) {
        return a.exports = c = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(s) {
          return typeof s;
        } : function(s) {
          return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s;
        }, a.exports.__esModule = !0, a.exports.default = a.exports, c(n);
      }
      a.exports = c, a.exports.__esModule = !0, a.exports.default = a.exports;
    }, 824: (a, c, n) => {
      var s = n(1337)();
      a.exports = s;
      try {
        regeneratorRuntime = s;
      } catch {
        typeof globalThis == "object" ? globalThis.regeneratorRuntime = s : Function("r", "regeneratorRuntime = r")(s);
      }
    } }, o = {};
    function i(a) {
      var c = o[a];
      if (c !== void 0)
        return c.exports;
      var n = o[a] = { exports: {} };
      return r[a](n, n.exports, i), n.exports;
    }
    i.n = (a) => {
      var c = a && a.__esModule ? () => a.default : () => a;
      return i.d(c, { a: c }), c;
    }, i.d = (a, c) => {
      for (var n in c)
        i.o(c, n) && !i.o(a, n) && Object.defineProperty(a, n, { enumerable: !0, get: c[n] });
    }, i.g = function() {
      if (typeof globalThis == "object")
        return globalThis;
      try {
        return this || new Function("return this")();
      } catch {
        if (typeof window == "object")
          return window;
      }
    }(), i.o = (a, c) => Object.prototype.hasOwnProperty.call(a, c), i.r = (a) => {
      typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(a, "__esModule", { value: !0 });
    };
    var B = {};
    return (() => {
      function a(h) {
        return a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(d) {
          return typeof d;
        } : function(d) {
          return d && typeof Symbol == "function" && d.constructor === Symbol && d !== Symbol.prototype ? "symbol" : typeof d;
        }, a(h);
      }
      function c(h, d, F) {
        return (d = function(S) {
          var G = function(eA, sA) {
            if (a(eA) !== "object" || eA === null)
              return eA;
            var dA = eA[Symbol.toPrimitive];
            if (dA !== void 0) {
              var wA = dA.call(eA, "string");
              if (a(wA) !== "object")
                return wA;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(eA);
          }(S);
          return a(G) === "symbol" ? G : String(G);
        }(d)) in h ? Object.defineProperty(h, d, { value: F, enumerable: !0, configurable: !0, writable: !0 }) : h[d] = F, h;
      }
      function n(h, d, F, S, G, eA, sA) {
        try {
          var dA = h[eA](sA), wA = dA.value;
        } catch (pA) {
          return void F(pA);
        }
        dA.done ? d(wA) : Promise.resolve(wA).then(S, G);
      }
      function s(h) {
        return function() {
          var d = this, F = arguments;
          return new Promise(function(S, G) {
            var eA = h.apply(d, F);
            function sA(wA) {
              n(eA, S, G, sA, dA, "next", wA);
            }
            function dA(wA) {
              n(eA, S, G, sA, dA, "throw", wA);
            }
            sA(void 0);
          });
        };
      }
      function u(h, d) {
        (d == null || d > h.length) && (d = h.length);
        for (var F = 0, S = new Array(d); F < d; F++)
          S[F] = h[F];
        return S;
      }
      function f(h, d) {
        if (h) {
          if (typeof h == "string")
            return u(h, d);
          var F = Object.prototype.toString.call(h).slice(8, -1);
          return F === "Object" && h.constructor && (F = h.constructor.name), F === "Map" || F === "Set" ? Array.from(h) : F === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(F) ? u(h, d) : void 0;
        }
      }
      function l(h, d) {
        return function(F) {
          if (Array.isArray(F))
            return F;
        }(h) || function(F, S) {
          var G = F == null ? null : typeof Symbol < "u" && F[Symbol.iterator] || F["@@iterator"];
          if (G != null) {
            var eA, sA, dA, wA, pA = [], oA = !0, LA = !1;
            try {
              if (dA = (G = G.call(F)).next, S === 0) {
                if (Object(G) !== G)
                  return;
                oA = !1;
              } else
                for (; !(oA = (eA = dA.call(G)).done) && (pA.push(eA.value), pA.length !== S); oA = !0)
                  ;
            } catch (yA) {
              LA = !0, sA = yA;
            } finally {
              try {
                if (!oA && G.return != null && (wA = G.return(), Object(wA) !== wA))
                  return;
              } finally {
                if (LA)
                  throw sA;
              }
            }
            return pA;
          }
        }(h, d) || f(h, d) || function() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }();
      }
      function g(h, d) {
        if (h == null)
          return {};
        var F, S, G = function(sA, dA) {
          if (sA == null)
            return {};
          var wA, pA, oA = {}, LA = Object.keys(sA);
          for (pA = 0; pA < LA.length; pA++)
            wA = LA[pA], dA.indexOf(wA) >= 0 || (oA[wA] = sA[wA]);
          return oA;
        }(h, d);
        if (Object.getOwnPropertySymbols) {
          var eA = Object.getOwnPropertySymbols(h);
          for (S = 0; S < eA.length; S++)
            F = eA[S], d.indexOf(F) >= 0 || Object.prototype.propertyIsEnumerable.call(h, F) && (G[F] = h[F]);
        }
        return G;
      }
      i.r(B), i.d(B, { Dynamic: () => wu, connect: () => Uu, default: () => yu, get: () => ln, useAdd: () => Fu, useDispatch: () => Ro, useModel: () => fa }), i(4978), i(9823), i(4434), i(541), i(7453), i(8344), i(5843);
      var p = i(824), w = i.n(p), Q = (i(6139), i(5105), i(4321), i(5867), i(7772), i(8156)), v = i.n(Q), y = i(927);
      let b = (h = 21) => crypto.getRandomValues(new Uint8Array(h)).reduce((d, F) => d + ((F &= 63) < 36 ? F.toString(36) : F < 62 ? (F - 26).toString(36).toUpperCase() : F > 62 ? "-" : "_"), "");
      const O = function(h, d) {
        return h === d || h != h && d != d;
      }, I = function(h, d) {
        for (var F = h.length; F--; )
          if (O(h[F][0], d))
            return F;
        return -1;
      };
      var L = Array.prototype.splice;
      function N(h) {
        var d = -1, F = h == null ? 0 : h.length;
        for (this.clear(); ++d < F; ) {
          var S = h[d];
          this.set(S[0], S[1]);
        }
      }
      N.prototype.clear = function() {
        this.__data__ = [], this.size = 0;
      }, N.prototype.delete = function(h) {
        var d = this.__data__, F = I(d, h);
        return !(F < 0 || (F == d.length - 1 ? d.pop() : L.call(d, F, 1), --this.size, 0));
      }, N.prototype.get = function(h) {
        var d = this.__data__, F = I(d, h);
        return F < 0 ? void 0 : d[F][1];
      }, N.prototype.has = function(h) {
        return I(this.__data__, h) > -1;
      }, N.prototype.set = function(h, d) {
        var F = this.__data__, S = I(F, h);
        return S < 0 ? (++this.size, F.push([h, d])) : F[S][1] = d, this;
      };
      const H = N, j = typeof Rr == "object" && Rr && Rr.Object === Object && Rr;
      var V = typeof self == "object" && self && self.Object === Object && self;
      const X = j || V || Function("return this")(), x = X.Symbol;
      var _ = Object.prototype, Z = _.hasOwnProperty, iA = _.toString, rA = x ? x.toStringTag : void 0, IA = Object.prototype.toString, HA = x ? x.toStringTag : void 0;
      const vA = function(h) {
        return h == null ? h === void 0 ? "[object Undefined]" : "[object Null]" : HA && HA in Object(h) ? function(d) {
          var F = Z.call(d, rA), S = d[rA];
          try {
            d[rA] = void 0;
            var G = !0;
          } catch {
          }
          var eA = iA.call(d);
          return G && (F ? d[rA] = S : delete d[rA]), eA;
        }(h) : function(d) {
          return IA.call(d);
        }(h);
      }, mA = function(h) {
        var d = typeof h;
        return h != null && (d == "object" || d == "function");
      }, QA = function(h) {
        if (!mA(h))
          return !1;
        var d = vA(h);
        return d == "[object Function]" || d == "[object GeneratorFunction]" || d == "[object AsyncFunction]" || d == "[object Proxy]";
      }, gA = X["__core-js_shared__"];
      var M, R = (M = /[^.]+$/.exec(gA && gA.keys && gA.keys.IE_PROTO || "")) ? "Symbol(src)_1." + M : "", W = Function.prototype.toString, uA = /^\[object .+?Constructor\]$/, tA = Function.prototype, EA = Object.prototype, DA = tA.toString, AA = EA.hasOwnProperty, aA = RegExp("^" + DA.call(AA).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
      const SA = function(h) {
        return !(!mA(h) || (d = h, R && R in d)) && (QA(h) ? aA : uA).test(function(F) {
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
        }(h));
        var d;
      }, OA = function(h, d) {
        var F = function(S, G) {
          return S == null ? void 0 : S[G];
        }(h, d);
        return SA(F) ? F : void 0;
      }, TA = OA(X, "Map"), XA = OA(Object, "create");
      var pe = Object.prototype.hasOwnProperty, ie = Object.prototype.hasOwnProperty;
      function GA(h) {
        var d = -1, F = h == null ? 0 : h.length;
        for (this.clear(); ++d < F; ) {
          var S = h[d];
          this.set(S[0], S[1]);
        }
      }
      GA.prototype.clear = function() {
        this.__data__ = XA ? XA(null) : {}, this.size = 0;
      }, GA.prototype.delete = function(h) {
        var d = this.has(h) && delete this.__data__[h];
        return this.size -= d ? 1 : 0, d;
      }, GA.prototype.get = function(h) {
        var d = this.__data__;
        if (XA) {
          var F = d[h];
          return F === "__lodash_hash_undefined__" ? void 0 : F;
        }
        return pe.call(d, h) ? d[h] : void 0;
      }, GA.prototype.has = function(h) {
        var d = this.__data__;
        return XA ? d[h] !== void 0 : ie.call(d, h);
      }, GA.prototype.set = function(h, d) {
        var F = this.__data__;
        return this.size += this.has(h) ? 0 : 1, F[h] = XA && d === void 0 ? "__lodash_hash_undefined__" : d, this;
      };
      const Ae = GA, zA = function(h, d) {
        var F, S, G = h.__data__;
        return ((S = typeof (F = d)) == "string" || S == "number" || S == "symbol" || S == "boolean" ? F !== "__proto__" : F === null) ? G[typeof d == "string" ? "string" : "hash"] : G.map;
      };
      function oe(h) {
        var d = -1, F = h == null ? 0 : h.length;
        for (this.clear(); ++d < F; ) {
          var S = h[d];
          this.set(S[0], S[1]);
        }
      }
      oe.prototype.clear = function() {
        this.size = 0, this.__data__ = { hash: new Ae(), map: new (TA || H)(), string: new Ae() };
      }, oe.prototype.delete = function(h) {
        var d = zA(this, h).delete(h);
        return this.size -= d ? 1 : 0, d;
      }, oe.prototype.get = function(h) {
        return zA(this, h).get(h);
      }, oe.prototype.has = function(h) {
        return zA(this, h).has(h);
      }, oe.prototype.set = function(h, d) {
        var F = zA(this, h), S = F.size;
        return F.set(h, d), this.size += F.size == S ? 0 : 1, this;
      };
      const be = oe;
      function ge(h) {
        var d = this.__data__ = new H(h);
        this.size = d.size;
      }
      ge.prototype.clear = function() {
        this.__data__ = new H(), this.size = 0;
      }, ge.prototype.delete = function(h) {
        var d = this.__data__, F = d.delete(h);
        return this.size = d.size, F;
      }, ge.prototype.get = function(h) {
        return this.__data__.get(h);
      }, ge.prototype.has = function(h) {
        return this.__data__.has(h);
      }, ge.prototype.set = function(h, d) {
        var F = this.__data__;
        if (F instanceof H) {
          var S = F.__data__;
          if (!TA || S.length < 199)
            return S.push([h, d]), this.size = ++F.size, this;
          F = this.__data__ = new be(S);
        }
        return F.set(h, d), this.size = F.size, this;
      };
      const Qe = ge, he = function() {
        try {
          var h = OA(Object, "defineProperty");
          return h({}, "", {}), h;
        } catch {
        }
      }(), q = function(h, d, F) {
        d == "__proto__" && he ? he(h, d, { configurable: !0, enumerable: !0, value: F, writable: !0 }) : h[d] = F;
      }, bA = function(h, d, F) {
        (F !== void 0 && !O(h[d], F) || F === void 0 && !(d in h)) && q(h, d, F);
      }, ae = function(h, d, F) {
        for (var S = -1, G = Object(h), eA = F(h), sA = eA.length; sA--; ) {
          var dA = eA[++S];
          if (d(G[dA], dA, G) === !1)
            break;
        }
        return h;
      };
      var MA = e && !e.nodeType && e, $A = MA && !0 && A && !A.nodeType && A, nA = $A && $A.exports === MA ? X.Buffer : void 0, BA = nA ? nA.allocUnsafe : void 0;
      const xA = X.Uint8Array, PA = function(h, d) {
        var F, S, G = d ? (F = h.buffer, S = new F.constructor(F.byteLength), new xA(S).set(new xA(F)), S) : h.buffer;
        return new h.constructor(G, h.byteOffset, h.length);
      };
      var YA = Object.create;
      const jA = /* @__PURE__ */ function() {
        function h() {
        }
        return function(d) {
          if (!mA(d))
            return {};
          if (YA)
            return YA(d);
          h.prototype = d;
          var F = new h();
          return h.prototype = void 0, F;
        };
      }(), De = (Je = Object.getPrototypeOf, nt = Object, function(h) {
        return Je(nt(h));
      });
      var Je, nt, ke = Object.prototype;
      const ot = function(h) {
        var d = h && h.constructor;
        return h === (typeof d == "function" && d.prototype || ke);
      }, Ne = function(h) {
        return h != null && typeof h == "object";
      }, it = function(h) {
        return Ne(h) && vA(h) == "[object Arguments]";
      };
      var It = Object.prototype, C = It.hasOwnProperty, E = It.propertyIsEnumerable;
      const m = it(/* @__PURE__ */ function() {
        return arguments;
      }()) ? it : function(h) {
        return Ne(h) && C.call(h, "callee") && !E.call(h, "callee");
      }, D = Array.isArray, K = function(h) {
        return typeof h == "number" && h > -1 && h % 1 == 0 && h <= 9007199254740991;
      }, T = function(h) {
        return h != null && K(h.length) && !QA(h);
      };
      var k = e && !e.nodeType && e, $ = k && !0 && A && !A.nodeType && A, z = $ && $.exports === k ? X.Buffer : void 0;
      const J = (z ? z.isBuffer : void 0) || function() {
        return !1;
      };
      var lA = Function.prototype, U = Object.prototype, P = lA.toString, Y = U.hasOwnProperty, cA = P.call(Object), hA = {};
      hA["[object Float32Array]"] = hA["[object Float64Array]"] = hA["[object Int8Array]"] = hA["[object Int16Array]"] = hA["[object Int32Array]"] = hA["[object Uint8Array]"] = hA["[object Uint8ClampedArray]"] = hA["[object Uint16Array]"] = hA["[object Uint32Array]"] = !0, hA["[object Arguments]"] = hA["[object Array]"] = hA["[object ArrayBuffer]"] = hA["[object Boolean]"] = hA["[object DataView]"] = hA["[object Date]"] = hA["[object Error]"] = hA["[object Function]"] = hA["[object Map]"] = hA["[object Number]"] = hA["[object Object]"] = hA["[object RegExp]"] = hA["[object Set]"] = hA["[object String]"] = hA["[object WeakMap]"] = !1;
      var VA = e && !e.nodeType && e, KA = VA && !0 && A && !A.nodeType && A, RA = KA && KA.exports === VA && j.process, ve = function() {
        try {
          return KA && KA.require && KA.require("util").types || RA && RA.binding && RA.binding("util");
        } catch {
        }
      }(), ee = ve && ve.isTypedArray;
      const se = ee ? /* @__PURE__ */ function(h) {
        return function(d) {
          return h(d);
        };
      }(ee) : function(h) {
        return Ne(h) && K(h.length) && !!hA[vA(h)];
      }, Le = function(h, d) {
        if ((d !== "constructor" || typeof h[d] != "function") && d != "__proto__")
          return h[d];
      };
      var gt = Object.prototype.hasOwnProperty;
      const Yt = function(h, d, F) {
        var S = h[d];
        gt.call(h, d) && O(S, F) && (F !== void 0 || d in h) || q(h, d, F);
      };
      var ye = /^(?:0|[1-9]\d*)$/;
      const fA = function(h, d) {
        var F = typeof h;
        return !!(d = d ?? 9007199254740991) && (F == "number" || F != "symbol" && ye.test(h)) && h > -1 && h % 1 == 0 && h < d;
      };
      var UA = Object.prototype.hasOwnProperty;
      const _A = function(h, d) {
        var F = D(h), S = !F && m(h), G = !F && !S && J(h), eA = !F && !S && !G && se(h), sA = F || S || G || eA, dA = sA ? function(oA, LA) {
          for (var yA = -1, te = Array(oA); ++yA < oA; )
            te[yA] = LA(yA);
          return te;
        }(h.length, String) : [], wA = dA.length;
        for (var pA in h)
          !d && !UA.call(h, pA) || sA && (pA == "length" || G && (pA == "offset" || pA == "parent") || eA && (pA == "buffer" || pA == "byteLength" || pA == "byteOffset") || fA(pA, wA)) || dA.push(pA);
        return dA;
      };
      var Ue = Object.prototype.hasOwnProperty;
      const ZA = function(h) {
        if (!mA(h))
          return function(G) {
            var eA = [];
            if (G != null)
              for (var sA in Object(G))
                eA.push(sA);
            return eA;
          }(h);
        var d = ot(h), F = [];
        for (var S in h)
          (S != "constructor" || !d && Ue.call(h, S)) && F.push(S);
        return F;
      }, ht = function(h) {
        return T(h) ? _A(h, !0) : ZA(h);
      }, ur = function(h) {
        return function(d, F, S, G) {
          var eA = !S;
          S || (S = {});
          for (var sA = -1, dA = F.length; ++sA < dA; ) {
            var wA = F[sA], pA = G ? G(S[wA], d[wA], wA, S, d) : void 0;
            pA === void 0 && (pA = d[wA]), eA ? q(S, wA, pA) : Yt(S, wA, pA);
          }
          return S;
        }(h, ht(h));
      }, NA = function(h, d, F, S, G, eA, sA) {
        var dA, wA = Le(h, F), pA = Le(d, F), oA = sA.get(pA);
        if (oA)
          bA(h, F, oA);
        else {
          var LA = eA ? eA(wA, pA, F + "", h, d, sA) : void 0, yA = LA === void 0;
          if (yA) {
            var te = D(pA), qA = !te && J(pA), JA = !te && !qA && se(pA);
            LA = pA, te || qA || JA ? D(wA) ? LA = wA : Ne(dA = wA) && T(dA) ? LA = function(le, Fe) {
              var ce = -1, Oe = le.length;
              for (Fe || (Fe = Array(Oe)); ++ce < Oe; )
                Fe[ce] = le[ce];
              return Fe;
            }(wA) : qA ? (yA = !1, LA = function(le, Fe) {
              if (Fe)
                return le.slice();
              var ce = le.length, Oe = BA ? BA(ce) : new le.constructor(ce);
              return le.copy(Oe), Oe;
            }(pA, !0)) : JA ? (yA = !1, LA = PA(pA, !0)) : LA = [] : function(le) {
              if (!Ne(le) || vA(le) != "[object Object]")
                return !1;
              var Fe = De(le);
              if (Fe === null)
                return !0;
              var ce = Y.call(Fe, "constructor") && Fe.constructor;
              return typeof ce == "function" && ce instanceof ce && P.call(ce) == cA;
            }(pA) || m(pA) ? (LA = wA, m(wA) ? LA = ur(wA) : mA(wA) && !QA(wA) || (LA = function(le) {
              return typeof le.constructor != "function" || ot(le) ? {} : jA(De(le));
            }(pA))) : yA = !1;
          }
          yA && (sA.set(pA, LA), G(LA, pA, S, eA, sA), sA.delete(pA)), bA(h, F, LA);
        }
      }, $e = function h(d, F, S, G, eA) {
        d !== F && ae(F, function(sA, dA) {
          if (eA || (eA = new Qe()), mA(sA))
            NA(d, F, dA, S, h, G, eA);
          else {
            var wA = G ? G(Le(d, dA), sA, dA + "", d, F, eA) : void 0;
            wA === void 0 && (wA = sA), bA(d, dA, wA);
          }
        }, ht);
      }, Ut = function(h) {
        return h;
      }, fr = function(h, d, F) {
        switch (F.length) {
          case 0:
            return h.call(d);
          case 1:
            return h.call(d, F[0]);
          case 2:
            return h.call(d, F[0], F[1]);
          case 3:
            return h.call(d, F[0], F[1], F[2]);
        }
        return h.apply(d, F);
      };
      var Ht = Math.max;
      const Te = he ? function(h, d) {
        return he(h, "toString", { configurable: !0, enumerable: !1, value: (F = d, function() {
          return F;
        }), writable: !0 });
        var F;
      } : Ut;
      var So = Date.now;
      const Br = /* @__PURE__ */ function(h) {
        var d = 0, F = 0;
        return function() {
          var S = So(), G = 16 - (S - F);
          if (F = S, G > 0) {
            if (++d >= 800)
              return arguments[0];
          } else
            d = 0;
          return h.apply(void 0, arguments);
        };
      }(Te), Tr = function(h, d) {
        return Br(function(F, S, G) {
          return S = Ht(S === void 0 ? F.length - 1 : S, 0), function() {
            for (var eA = arguments, sA = -1, dA = Ht(eA.length - S, 0), wA = Array(dA); ++sA < dA; )
              wA[sA] = eA[S + sA];
            sA = -1;
            for (var pA = Array(S + 1); ++sA < S; )
              pA[sA] = eA[sA];
            return pA[S] = G(wA), fr(F, this, pA);
          };
        }(h, d, Ut), h + "");
      }, fn = (Pe = function(h, d, F, S) {
        $e(h, d, F, S);
      }, Tr(function(h, d) {
        var F = -1, S = d.length, G = S > 1 ? d[S - 1] : void 0, eA = S > 2 ? d[2] : void 0;
        for (G = Pe.length > 3 && typeof G == "function" ? (S--, G) : void 0, eA && function(dA, wA, pA) {
          if (!mA(pA))
            return !1;
          var oA = typeof wA;
          return !!(oA == "number" ? T(pA) && fA(wA, pA.length) : oA == "string" && wA in pA) && O(pA[wA], dA);
        }(d[0], d[1], eA) && (G = S < 3 ? void 0 : G, S = 1), h = Object(h); ++F < S; ) {
          var sA = d[F];
          sA && Pe(h, sA, F, G);
        }
        return h;
      }));
      var Pe;
      i(27);
      var Be = {};
      function We() {
        for (var h, d = Object.values(Be).reverse(), F = 0; F < d.length; F += 1) {
          var S = v().useContext(d[F]);
          if (S) {
            h = S;
            break;
          }
        }
        return h;
      }
      const at = Be;
      function ze(h) {
        return function(d) {
          if (Array.isArray(d))
            return u(d);
        }(h) || function(d) {
          if (typeof Symbol < "u" && d[Symbol.iterator] != null || d["@@iterator"] != null)
            return Array.from(d);
        }(h) || f(h) || function() {
          throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }();
      }
      var _e, qe, Zt;
      function Ie(h, d) {
        return d != null && h instanceof d;
      }
      i(427), i(7209), i(9236), i(9745), i(7680), i(3085), i(3777), i(8081), i(5942), i(1239), i(7472), i(8392), i(2235), i(5506), i(3149), i(4637), i(6788), i(3958), i(5469), i(6780), i(3620), i(1592), i(6471), i(9701), i(8904), i(5155), i(9770);
      try {
        _e = Map;
      } catch {
        _e = function() {
        };
      }
      try {
        qe = Set;
      } catch {
        qe = function() {
        };
      }
      try {
        Zt = Promise;
      } catch {
        Zt = function() {
        };
      }
      function Ye(h, d, F, S, G) {
        a(d) === "object" && (F = d.depth, S = d.prototype, G = d.includeNonEnumerable, d = d.circular);
        var eA = [], sA = [], dA = !1, wA = typeof Buffer < "u";
        return d === void 0 && (d = !0), F === void 0 && (F = 1 / 0), function pA(oA, LA) {
          if (oA === null)
            return null;
          if (LA === 0)
            return oA;
          var yA, te;
          if (a(oA) != "object")
            return oA;
          if (Ie(oA, _e))
            yA = new _e();
          else if (Ie(oA, qe))
            yA = new qe();
          else if (Ie(oA, Zt))
            yA = new Zt(function(dt, $t) {
              oA.then(function(zt) {
                dt(pA(zt, LA - 1));
              }, function(zt) {
                $t(pA(zt, LA - 1));
              });
            });
          else if (Ye.__isArray(oA))
            yA = [];
          else if (Ye.__isRegExp(oA))
            yA = new RegExp(oA.source, ra(oA)), oA.lastIndex && (yA.lastIndex = oA.lastIndex);
          else if (Ye.__isDate(oA))
            yA = new Date(oA.getTime());
          else {
            if (wA && Buffer.isBuffer(oA))
              return Buffer.from ? yA = Buffer.from(oA) : (yA = new Buffer(oA.length), oA.copy(yA)), yA;
            Ie(oA, ArrayBuffer) ? (yA = oA.slice(), dA = !0) : Ie(oA, Float32Array) ? (dA = !0, yA = new Float32Array(oA)) : Ie(oA, Float64Array) ? (dA = !0, yA = new Float64Array(oA)) : Ie(oA, Int8Array) ? (dA = !0, yA = new Int8Array(oA)) : Ie(oA, Int16Array) ? (dA = !0, yA = new Int16Array(oA)) : Ie(oA, Int32Array) ? (dA = !0, yA = new Int32Array(oA)) : Ie(oA, Uint8Array) ? (dA = !0, yA = new Uint8Array(oA)) : Ie(oA, Uint8ClampedArray) ? (dA = !0, yA = new Uint8ClampedArray(oA)) : Ie(oA, Uint16Array) ? (dA = !0, yA = new Uint16Array(oA)) : Ie(oA, Uint32Array) ? (dA = !0, yA = new Uint32Array(oA)) : Ie(oA, Blob) ? (dA = !0, yA = oA.slice()) : Ie(oA, Error) ? yA = Object.create(oA) : S === void 0 ? (te = Object.getPrototypeOf(oA), yA = Object.create(te)) : (yA = Object.create(S), te = S);
          }
          if (d && !dA) {
            var qA = eA.indexOf(oA);
            if (qA != -1)
              return sA[qA];
            eA.push(oA), sA.push(yA);
          }
          if (Ie(oA, _e) && oA.forEach(function(dt, $t) {
            var zt = pA($t, LA - 1), St = pA(dt, LA - 1);
            yA.set(zt, St);
          }), Ie(oA, qe) && oA.forEach(function(dt) {
            var $t = pA(dt, LA - 1);
            yA.add($t);
          }), !dA)
            for (var JA in oA) {
              Object.getOwnPropertyDescriptor(oA, JA) && (yA[JA] = pA(oA[JA], LA - 1));
              try {
                if (Object.getOwnPropertyDescriptor(oA, JA).set === "undefined")
                  continue;
                yA[JA] = pA(oA[JA], LA - 1);
              } catch (dt) {
                if (dt instanceof TypeError || dt instanceof ReferenceError)
                  continue;
              }
            }
          if (Object.getOwnPropertySymbols && !dA) {
            var le = Object.getOwnPropertySymbols(oA);
            for (JA = 0; JA < le.length; JA++) {
              var Fe = le[JA];
              (!(Oe = Object.getOwnPropertyDescriptor(oA, Fe)) || Oe.enumerable || G) && (yA[Fe] = pA(oA[Fe], LA - 1), Object.defineProperty(yA, Fe, Oe));
            }
          }
          if (G && !dA) {
            var ce = Object.getOwnPropertyNames(oA);
            for (JA = 0; JA < ce.length; JA++) {
              var Oe, wt = ce[JA];
              (Oe = Object.getOwnPropertyDescriptor(oA, wt)) && Oe.enumerable || (yA[wt] = pA(oA[wt], LA - 1), Object.defineProperty(yA, wt, Oe));
            }
          }
          return yA;
        }(h, F);
      }
      function _t(h) {
        return Object.prototype.toString.call(h);
      }
      function ra(h) {
        var d = "";
        return h.global && (d += "g"), h.ignoreCase && (d += "i"), h.multiline && (d += "m"), d;
      }
      Ye.clonePrototype = function(h) {
        if (h === null)
          return null;
        var d = function() {
        };
        return d.prototype = h, new d();
      }, Ye.__objToStr = _t, Ye.__isDate = function(h) {
        return a(h) === "object" && _t(h) === "[object Date]";
      }, Ye.__isArray = function(h) {
        return a(h) === "object" && _t(h) === "[object Array]";
      }, Ye.__isRegExp = function(h) {
        return a(h) === "object" && _t(h) === "[object RegExp]";
      }, Ye.__getRegExpFlags = ra;
      const Bn = Ye;
      function na(h, d) {
        var F = Object.keys(h);
        if (Object.getOwnPropertySymbols) {
          var S = Object.getOwnPropertySymbols(h);
          d && (S = S.filter(function(G) {
            return Object.getOwnPropertyDescriptor(h, G).enumerable;
          })), F.push.apply(F, S);
        }
        return F;
      }
      function xo(h) {
        for (var d = 1; d < arguments.length; d++) {
          var F = arguments[d] != null ? arguments[d] : {};
          d % 2 ? na(Object(F), !0).forEach(function(S) {
            c(h, S, F[S]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(h, Object.getOwnPropertyDescriptors(F)) : na(Object(F)).forEach(function(S) {
            Object.defineProperty(h, S, Object.getOwnPropertyDescriptor(F, S));
          });
        }
        return h;
      }
      var Ft = "/";
      function lr(h) {
        return h.endsWith(Ft) && (h = h.slice(0, -1)), h.split(Ft);
      }
      function cu(h, d) {
        typeof h == "string" && (h = lr(h));
        for (var F = {}, S = F, G = 0; G < h.length; G++) {
          var eA = h[G];
          S[eA] = G === h.length - 1 ? d : {}, S = S[eA];
        }
        return F;
      }
      function oa(h, d) {
        return h && Array.isArray(h) ? h.filter(function(F) {
          return lr(F)[0] === d;
        }) : [];
      }
      function ia(h, d) {
        typeof d == "string" && (d = lr(d)), d = d.slice(1);
        for (var F, S, G = h, eA = 0; eA < d.length - 1; eA++) {
          var sA = d[eA];
          if (S = a(F = G[sA]), F == null || S !== "object")
            return h;
          G = G[sA];
        }
        return delete G[d[d.length - 1]], h;
      }
      function uu(h, d, F) {
        for (var S = Array.isArray(d) ? d : lr(d), G = h, eA = 0; eA < S.length; eA++)
          eA === S.length - 1 ? G[S[eA]] = F : G[S[eA]] || (G[S[eA]] = {}), G = G[S[eA]];
        return h;
      }
      function fu(h) {
        return Lo.apply(this, arguments);
      }
      function Lo() {
        return Lo = s(w().mark(function h(d) {
          var F, S, G, eA, sA, dA, wA, pA, oA, LA, yA, te;
          return w().wrap(function(qA) {
            for (; ; )
              switch (qA.prev = qA.next) {
                case 0:
                  if (F = this) {
                    qA.next = 3;
                    break;
                  }
                  throw new Error("strange!! there is no store in reducer, please issue it.");
                case 3:
                  if (d.inner !== F.inner) {
                    qA.next = 33;
                    break;
                  }
                  qA.t0 = d.type, qA.next = qA.t0 === "add" ? 7 : qA.t0 === "modify" ? 20 : 32;
                  break;
                case 7:
                  return S = lr(d.name), G = cu(S, d.initdate), F.runtime_state = xo(xo({}, F.runtime_state), G), qA.next = 12, F.offlineInstance.keys();
                case 12:
                  if (eA = qA.sent, !F.offline || F.offlineExcludes.includes(S[0]) || eA.includes(S[0])) {
                    qA.next = 19;
                    break;
                  }
                  return sA = oa(F.offlineExcludes, S[0]), dA = Bn(G[S[0]], !0), sA.length > 0 && sA.forEach(function(JA) {
                    dA = ia(dA, JA);
                  }), qA.next = 19, F.offlineInstance.setItem(S[0], dA);
                case 19:
                  return qA.abrupt("return", d.initdate);
                case 20:
                  if (wA = lr(d.name), pA = uu(F.runtime_state, wA, d.data), F.runtime_state = xo({}, pA), d.cancelUpdate || (oA = Object.values(F.REFRESH_CACHE), LA = "".concat(wA.join(Ft)).concat(Ft), oA.forEach(function(JA) {
                    JA && JA._s.startsWith(LA) && JA.set(b());
                    for (var le = ze(wA); le.length > 0; )
                      JA && le.join(Ft) === JA._s && JA.set(b()), le.pop();
                  })), !F.offline) {
                    qA.next = 31;
                    break;
                  }
                  if (!F.offline || F.offlineExcludes.includes(wA[0])) {
                    qA.next = 31;
                    break;
                  }
                  return yA = Bn(pA[wA[0]], !0), (te = oa(F.offlineExcludes, wA[0])).length > 0 && te.forEach(function(JA) {
                    yA = ia(yA, JA);
                  }), qA.next = 31, F.offlineInstance.setItem(wA[0], yA);
                case 31:
                  return qA.abrupt("return", d.data);
                case 32:
                  throw new Error("Unhandled action type: ".concat(d.type));
                case 33:
                case "end":
                  return qA.stop();
              }
          }, h, this);
        })), Lo.apply(this, arguments);
      }
      function Oo() {
        return Oo = s(w().mark(function h(d) {
          var F;
          return w().wrap(function(S) {
            for (; ; )
              switch (S.prev = S.next) {
                case 0:
                  if (!d.loopRunning) {
                    S.next = 2;
                    break;
                  }
                  return S.abrupt("return");
                case 2:
                  d.loopRunning = !0;
                case 3:
                  if (!(d.dispatch_queue.length > 0)) {
                    S.next = 10;
                    break;
                  }
                  if (!(F = d.dispatch_queue.shift())) {
                    S.next = 8;
                    break;
                  }
                  return S.next = 8, d.REDUCER(F);
                case 8:
                  S.next = 3;
                  break;
                case 10:
                  d.loopRunning = !1;
                case 11:
                case "end":
                  return S.stop();
              }
          }, h);
        })), Oo.apply(this, arguments);
      }
      function Bu(h) {
        var d = this;
        if (!d)
          throw new Error("strange!! there is no store in dispatch of utils, please issue it.");
        if (!h)
          throw new Error("Actions must be plain objects.");
        if (h.type === void 0)
          throw new Error('Actions may not have an undefined "type" property.');
        return d.dispatch_queue.push(h), d.loopRunning || function(F) {
          Oo.apply(this, arguments);
        }(d), new Promise(function(F) {
          var S = setInterval(function() {
            d.loopRunning || (clearInterval(S), F(h));
          }, 0);
        });
      }
      function lu(h) {
        return Ko.apply(this, arguments);
      }
      function Ko() {
        return Ko = s(w().mark(function h(d) {
          var F, S, G, eA;
          return w().wrap(function(sA) {
            for (; ; )
              switch (sA.prev = sA.next) {
                case 0:
                  if (F = this, !d || a(d) != "object" || Array.isArray(d)) {
                    sA.next = 13;
                    break;
                  }
                  if (!((S = Object.keys(d)).length > 0)) {
                    sA.next = 13;
                    break;
                  }
                  G = 0;
                case 5:
                  if (!(G < S.length)) {
                    sA.next = 13;
                    break;
                  }
                  if (eA = S[G], F.runtime_state.hasOwnProperty(eA)) {
                    sA.next = 10;
                    break;
                  }
                  return sA.next = 10, F.dispatch({ type: "add", name: eA, initdate: d[eA], inner: F.inner });
                case 10:
                  G++, sA.next = 5;
                  break;
                case 13:
                case "end":
                  return sA.stop();
              }
          }, h, this);
        })), Ko.apply(this, arguments);
      }
      function gu(h, d, F) {
        return Do.apply(this, arguments);
      }
      function Do() {
        return Do = s(w().mark(function h(d, F, S) {
          return w().wrap(function(G) {
            for (; ; )
              switch (G.prev = G.next) {
                case 0:
                  if (typeof d == "function") {
                    G.next = 2;
                    break;
                  }
                  throw new Error("Expected the reducer to be a function.");
                case 2:
                  if (!S.REDUCER && (S.REDUCER = d.bind(S)), !S.dispatch && (S.dispatch = Bu.bind(S)), S.loopRunning = !1, F === void 0) {
                    G.next = 8;
                    break;
                  }
                  return G.next = 8, lu.call(S, F);
                case 8:
                  return G.abrupt("return", [S.runtime_state, S.dispatch]);
                case 9:
                case "end":
                  return G.stop();
              }
          }, h);
        })), Do.apply(this, arguments);
      }
      i(8629), i(286);
      var hu = ["models", "renderBefore", "component"];
      function aa(h, d) {
        return To.apply(this, arguments);
      }
      function To() {
        return To = s(w().mark(function h(d, F) {
          var S;
          return w().wrap(function(G) {
            for (; ; )
              switch (G.prev = G.next) {
                case 0:
                  if (Object.prototype.toString.call(d) === "[object Object]") {
                    G.next = 2;
                    break;
                  }
                  throw new Error("your model must be an object");
                case 2:
                  if (d.hasOwnProperty("name")) {
                    G.next = 4;
                    break;
                  }
                  throw new Error("please name your model !!!!");
                case 4:
                  if (typeof d.name == "string") {
                    G.next = 6;
                    break;
                  }
                  throw new Error("please make sure your model name is a string");
                case 6:
                  if (d.name.length !== 0) {
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
                  if (F.MODELS[d.name] || (F.MODELS[d.name] = d), F.runtime_state.hasOwnProperty(d.name)) {
                    G.next = 17;
                    break;
                  }
                  return S = {}, d.hasOwnProperty("init") && (S = d.init), typeof d.init == "function" && (S = d.init()), G.next = 17, F.dispatch({ type: "add", name: d.name, initdate: S, inner: F.inner });
                case 17:
                case "end":
                  return G.stop();
              }
          }, h);
        })), To.apply(this, arguments);
      }
      const wu = function(h) {
        var d = We();
        if (!d)
          throw new Error("strange!! there is no store in dynamic, please issue it.");
        var F = l(v().useState({ loaded: !1 }), 2), S = F[0], G = F[1], eA = h.models, sA = h.renderBefore, dA = h.component, wA = g(h, hu), pA = v().lazy(dA);
        return v().useEffect(function() {
          sA == null || sA();
          var oA = typeof eA == "function" ? [eA()] : Array.isArray(eA) ? eA.map(function(LA) {
            return Promise.resolve(LA);
          }) : [];
          Promise.all(oA).then(function(LA) {
            LA.forEach(function(yA) {
              var te = yA.default || yA;
              (Array.isArray(te) ? te : [te]).forEach(function(qA) {
                return aa(qA, d);
              });
            }), G({ loaded: !0 });
          });
        }, []), S.loaded ? v().createElement(v().Suspense, { fallback: v().createElement("div", null, "Loading...") }, v().createElement(pA, wA)) : null;
      };
      var du = ["uniqueKey", "nested", "models", "offlineConfig", "noCached", "children"];
      function sa(h, d) {
        var F = Object.keys(h);
        if (Object.getOwnPropertySymbols) {
          var S = Object.getOwnPropertySymbols(h);
          d && (S = S.filter(function(G) {
            return Object.getOwnPropertyDescriptor(h, G).enumerable;
          })), F.push.apply(F, S);
        }
        return F;
      }
      function pu(h) {
        for (var d = 1; d < arguments.length; d++) {
          var F = arguments[d] != null ? arguments[d] : {};
          d % 2 ? sa(Object(F), !0).forEach(function(S) {
            c(h, S, F[S]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(h, Object.getOwnPropertyDescriptors(F)) : sa(Object(F)).forEach(function(S) {
            Object.defineProperty(h, S, Object.getOwnPropertyDescriptor(F, S));
          });
        }
        return h;
      }
      function Qu(h, d, F) {
        var S = v().createContext(), G = window["dva_react_hook_store_".concat(h)];
        return G || (G = function(eA) {
          if (!window[eA]) {
            var sA = Symbol();
            window[eA] = { offline: !1, offlineInstance: void 0, offlineExcludes: [], dispatch: void 0, inner: sA, MODELS: {}, REFRESH_CACHE: {}, REDUCER: void 0, isDispatching: { dispatching: !1, name: null }, runtime_state: {}, dispatch_queue: [], loopRunning: !1 };
          }
          return window[eA];
        }("dva_react_hook_store_".concat(h))), F === !0 && (at["".concat(h, "_").concat(d)] = S), [G, S];
      }
      function ln(h, d) {
        (function(G) {
          if (!G)
            throw new Error("strange!! there is no store in utils, please issue it.");
        })(d), function(G) {
          if (typeof G != "string")
            throw new Error("name must be a string");
        }(h);
        var F = h.split(Ft), S = function(G, eA) {
          var sA = function(dA, wA) {
            if (!dA || !dA.length)
              throw new Error("Property names array cannot be empty.");
            var pA = dA.reduce(function(oA, LA, yA) {
              var te = (yA === 0 ? wA.runtime_state : oA)[LA];
              if (dA.length > 1 && yA < dA.length - 1 && Object.prototype.toString.call(te) !== "[object Object]")
                throw new Error("".concat(LA, " is not an object, so the property['").concat(dA[yA + 1], "'] cannot be reached. Please check your code."));
              return te;
            }, {});
            return Bn(pA, !0);
          }(G, eA);
          return sA;
        }(F, d);
        return [S, Cu(F, d, S)];
      }
      function Cu(h, d, F) {
        return function() {
          var S = s(w().mark(function G(eA) {
            var sA, dA, wA, pA, oA = arguments;
            return w().wrap(function(LA) {
              for (; ; )
                switch (LA.prev = LA.next) {
                  case 0:
                    return sA = oA.length > 1 && oA[1] !== void 0 ? oA[1] : {}, dA = sA.cancelUpdate, wA = sA.callbacks, LA.next = 3, d.dispatch({ type: "modify", name: h.join(Ft), data: eA, inner: d.inner, cancelUpdate: dA });
                  case 3:
                    return pA = LA.sent, wA && d.MODELS[h[0]] && ca(d.MODELS[h[0]].callbacks, wA, { name: h.join(Ft), value: { pre: F, current: eA } }, d), LA.abrupt("return", pA);
                  case 6:
                  case "end":
                    return LA.stop();
                }
            }, G);
          }));
          return function(G) {
            return S.apply(this, arguments);
          };
        }();
      }
      function ca(h, d, F, S) {
        (function(eA) {
          Object.prototype.toString.call(eA) !== "[object Object]" && console.error("the callbacks of model must be an Object type");
        })(h);
        var G = function(eA) {
          return ln(eA, S);
        };
        typeof d == "string" ? ua(h, d, F, G) : Array.isArray(d) && d.forEach(function(eA) {
          return ua(h, eA, F, G);
        });
      }
      function ua(h, d, F, S) {
        typeof h[d] == "function" ? h[d]({ info: F, select: S }) : console.error("Callback ".concat(d, " is not a function."));
      }
      function _o() {
        return _o = Object.assign ? Object.assign.bind() : function(h) {
          for (var d = 1; d < arguments.length; d++) {
            var F = arguments[d];
            for (var S in F)
              Object.prototype.hasOwnProperty.call(F, S) && (h[S] = F[S]);
          }
          return h;
        }, _o.apply(this, arguments);
      }
      function fa(h, d, F) {
        var S = F || We();
        if (!S)
          throw new Error("strange!! there is no store in useModel, please issue it.");
        if (typeof h != "string")
          throw new Error("useModel's argument must be a string");
        var G = v().useState(b())[1];
        return v().useEffect(function() {
          var eA = b();
          return !d && (S.REFRESH_CACHE[eA] = { _s: h, set: G }), function() {
            !d && delete S.REFRESH_CACHE[eA];
          };
        }, [h]), ln(h, S);
      }
      i(9399);
      var vu = ["type"];
      function Ba(h, d) {
        var F = Object.keys(h);
        if (Object.getOwnPropertySymbols) {
          var S = Object.getOwnPropertySymbols(h);
          d && (S = S.filter(function(G) {
            return Object.getOwnPropertyDescriptor(h, G).enumerable;
          })), F.push.apply(F, S);
        }
        return F;
      }
      function gn(h) {
        for (var d = 1; d < arguments.length; d++) {
          var F = arguments[d] != null ? arguments[d] : {};
          d % 2 ? Ba(Object(F), !0).forEach(function(S) {
            c(h, S, F[S]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(h, Object.getOwnPropertyDescriptors(F)) : Ba(Object(F)).forEach(function(S) {
            Object.defineProperty(h, S, Object.getOwnPropertyDescriptor(F, S));
          });
        }
        return h;
      }
      function Ro(h) {
        if (Object.prototype.toString.call(h) !== "[object Object]")
          throw new Error("action in useDispatch must be an Object");
        if (!h.hasOwnProperty("type"))
          throw new Error('action in useDispatch must have a property named "type"');
        if (typeof h.type != "string")
          throw new Error("your must be a string");
        if (h.type.indexOf(Ft) === -1)
          throw new Error("you must do some effects in your type");
        var d = h.store || We();
        if (!d)
          throw new Error("strange!! there is no store in useDispatch, please issue it.");
        h.store = d;
        var F = h.type, S = g(h, vu);
        if ((F = F.split(Ft))[0].length === 0)
          throw new Error("can not resolve the empty model name");
        var G = d.MODELS[F[0]];
        if (!G)
          throw new Error("can not find the Model named ".concat(F[0]));
        if (!G.hasOwnProperty("effects"))
          throw new Error("can not find the effects in the Model ".concat(F[0]));
        var eA = G.effects;
        if (Object.prototype.toString.call(eA) !== "[object Object]")
          throw new Error("effects must be an Object");
        var sA = eA[F[1]];
        if (typeof sA != "function")
          throw new Error("the effect named ".concat(F[1], " must be a function"));
        var dA = G.callbacks;
        return function() {
          for (var wA, pA = Bn(d.runtime_state[F[0]], !0), oA = arguments.length, LA = new Array(oA), yA = 0; yA < oA; yA++)
            LA[yA] = arguments[yA];
          return sA.apply(void 0, LA.concat([gn(gn({}, S), {}, { state: pA, setState: (wA = s(w().mark(function te(qA) {
            var JA, le, Fe, ce, Oe = arguments;
            return w().wrap(function(wt) {
              for (; ; )
                switch (wt.prev = wt.next) {
                  case 0:
                    return JA = Oe.length > 1 && Oe[1] !== void 0 ? Oe[1] : {}, le = JA.cancelUpdate, Fe = JA.callbacks, wt.next = 3, d.dispatch({ type: "modify", name: F[0], inner: d.inner, data: qA, cancelUpdate: le });
                  case 3:
                    Fe && (ce = pA, ca(dA, Fe, { name: F[0], value: ce }, d));
                  case 4:
                  case "end":
                    return wt.stop();
                }
            }, te);
          })), function(te) {
            return wA.apply(this, arguments);
          }), select: function(te) {
            return ln(te, d);
          }, getDispatch: function(te) {
            return Ro(gn(gn({}, te), {}, { store: d }));
          } })]));
        };
      }
      const Uu = function(h, d) {
        return function(F) {
          return function(S) {
            var G, eA = l(typeof h == "string" && h.length !== 0 ? fa(h) : [{ value: null }, null], 2), sA = eA[0].value, dA = eA[1], wA = typeof d.name == "string" && d.name.length !== 0 ? Ro(d.action) : null;
            return v().createElement(F, _o({}, (c(G = {}, dA ? "".concat(h, "State") : "UselessState".concat(b()), sA), c(G, dA ? "set".concat(h) : "UselessSet".concat(b()), dA), c(G, wA ? "".concat(d.name) : "UselessDispatch".concat(b()), wA), G), S));
          };
        };
      };
      function Fu(h, d, F) {
        var S = We();
        if (!S)
          throw new Error("strange!! there is no store in useAdd, please issue it.");
        if (typeof h != "string")
          throw new Error("name must be a string");
        if (h.length === 0)
          throw new Error("name can not be empty");
        var G = function() {
          var sA = We();
          if (!sA)
            throw new Error("strange!! there is no store in useDispatcher, please issue it.");
          if (typeof sA.dispatch != "function")
            throw new Error("make sure you are in a Provider");
          return sA.dispatch;
        }();
        if (S.runtime_state === void 0 || G === void 0)
          throw new Error("useAdd must be used within a Provider");
        S.runtime_state.hasOwnProperty(h) && console.warn("you have already added the state name -- ".concat(h, "  before !"));
        var eA = d;
        typeof d == "function" && (eA = d()), v().useEffect(function() {
          G({ type: "add", name: h, initdate: eA, inner: S.inner });
        }, F ? [] : void 0);
      }
      const yu = function(h) {
        var d = h.uniqueKey, F = h.nested, S = F === void 0 || F, G = h.models, eA = h.offlineConfig, sA = eA === void 0 ? {} : eA, dA = h.noCached, wA = h.children, pA = g(h, du), oA = l(v().useState({ com: null, store: null }), 2), LA = oA[0], yA = oA[1], te = v().useRef([]);
        return v().useEffect(function() {
          var qA = b(), JA = d && d.toString() || "default", le = "".concat(JA, "_").concat(qA);
          te.current.push(le);
          var Fe = l(Qu(JA, qA, S), 2), ce = Fe[0], Oe = Fe[1];
          ce.offline = sA.offline === !0, ce.offlineExcludes = sA.excludes || [];
          var wt = sA.customizer;
          ce.offlineInstance = y.createInstance({ name: JA });
          var dt = function() {
            var St = s(w().mark(function _r() {
              var At, gr;
              return w().wrap(function(pt) {
                for (; ; )
                  switch (pt.prev = pt.next) {
                    case 0:
                      return pt.next = 2, gu(fu, pu({}, pA), ce);
                    case 2:
                      if (!Array.isArray(G)) {
                        pt.next = 11;
                        break;
                      }
                      At = 0;
                    case 4:
                      if (!(At < G.length)) {
                        pt.next = 11;
                        break;
                      }
                      return gr = G[At], pt.next = 8, aa(gr, ce);
                    case 8:
                      At++, pt.next = 4;
                      break;
                    case 11:
                    case "end":
                      return pt.stop();
                  }
              }, _r);
            }));
            return function() {
              return St.apply(this, arguments);
            };
          }(), $t = function() {
            var St = s(w().mark(function _r() {
              return w().wrap(function(At) {
                for (; ; )
                  switch (At.prev = At.next) {
                    case 0:
                      return At.next = 2, dt();
                    case 2:
                      ce.offlineInstance.iterate(function(gr, pt) {
                        var mu = fn(ce.runtime_state[pt] || {}, gr, wt);
                        ce.runtime_state[pt] = mu;
                      }).then(function() {
                        yA({ com: Oe.Provider, store: ce });
                      }).catch(function(gr) {
                        console.error("recover from offline database failed:".concat(gr));
                      });
                    case 3:
                    case "end":
                      return At.stop();
                  }
              }, _r);
            }));
            return function() {
              return St.apply(this, arguments);
            };
          }(), zt = function() {
            var St = s(w().mark(function _r() {
              return w().wrap(function(At) {
                for (; ; )
                  switch (At.prev = At.next) {
                    case 0:
                      return At.next = 2, dt();
                    case 2:
                      yA({ com: Oe.Provider, store: ce });
                    case 3:
                    case "end":
                      return At.stop();
                  }
              }, _r);
            }));
            return function() {
              return St.apply(this, arguments);
            };
          }();
          return sA.autoRecover === !0 ? $t() : zt(), function() {
            te.current.forEach(function(St) {
              delete at[St];
            }), dA === !0 && delete window["dva_react_hook_store_".concat(JA)], y.dropInstance({ name: d });
          };
        }, [d]), LA.com && console.log("Provider for ".concat(d || "default", " is rendering")), !!LA.com && v().createElement(LA.com, { value: LA.store }, wA);
      };
    })(), B;
  })());
})(Ao, Ao.exports);
var ue = Ao.exports;
const Mf = /* @__PURE__ */ Iu(ue), Nf = nc("div")`
  width: 100%;
  height: 100%;
  position: relative;
`;
function Pf(A) {
  const { children: e, scale: t } = A, r = Qo(), o = Os(null), i = sr(`easy-drag-drop-root-${Ot()}`)[0];
  return ut(() => {
    const B = ue.get("dragModel/root", r)[1];
    B(i);
    function a() {
      const n = ue.get("dragModel/scale", r)[1], s = ue.get("dragModel/offset", r)[1];
      if (!o.current)
        return;
      const u = o.current.getBoundingClientRect(), { left: f, top: l } = u;
      s({ x: f, y: l }), typeof t == "object" && n(t), typeof t == "function" && n(t());
    }
    const c = new ResizeObserver(a);
    return c.observe(o.current), window.addEventListener("resize", a), () => {
      c.disconnect(), window.removeEventListener("resize", a);
    };
  }, [i, r, t]), /* @__PURE__ */ Gn.jsx(Nf, { id: i, ref: o, children: e });
}
function Oa(A, e) {
  if (!A || !e)
    return !1;
  let [t, r] = A, o = !1;
  for (let i = 0, B = e.length - 1; i < e.length; B = i++) {
    let [a, c] = e[i], [n, s] = e[B];
    c > r != s > r && t < (n - a) * (r - c) / (s - c) + a && (o = !o);
  }
  return o;
}
const oc = (A, e) => [...A.classList].filter((t) => t.startsWith(e))[0], eo = (A) => {
  if (!A)
    return console.error("ref is required"), !1;
  const e = A.current;
  return e instanceof HTMLElement ? e : (console.error("ref.current is not a HTMLElement"), !1);
}, He = {
  STARTDRAG: "STARTDRAG",
  DRAGGING: "DRAGGING",
  DROP: "DROP",
  ONSTART: "ONSTART",
  ONENTER: "ONENTER",
  ONHOVER: "ONHOVER",
  ONLEAVE: "ONLEAVE",
  ONDROP: "ONDROP",
  ONEND: "ONEND"
}, Gf = {
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
    updatePreview: async (A) => {
      const { info: e, select: t } = A, {
        value: { current: r }
      } = e;
      if (!r)
        return;
      const o = r.key, i = t("dragModel/root")[0], [B, a] = t(
        `dragModel/drags/${o}/previewAdded`
      ), c = t(`dragModel/drags/${o}/state`)[1], n = t("dragModel/drops")[0], u = Object.keys(n).filter(
        (f) => n[f] && document.querySelector(`.${f}`) !== document.querySelector(`.easy-drag-${o}`)
      ).filter((f) => {
        const l = n[f].acceptKeys || [];
        return l.includes("*") ? !0 : l.includes(o);
      });
      if (r && r.operationType === He.STARTDRAG && !B) {
        const f = document.createElement("img");
        f.classList.add(r.class), f.src = r.src, Object.keys(r.style).forEach((l) => {
          f.style[l] = r.style[l];
        }), document.querySelector(`#${i}`).appendChild(f), await a(!0), u.forEach((l) => {
          const g = t(`dragModel/drops/${l}/state`)[1];
          g(`${He.ONSTART}+${o}+${Ot()}`), c(`${He.ONSTART}+${l}`);
        });
      }
      if (r && r.operationType === He.DRAGGING && B) {
        const f = document.querySelector(`.${r.class}`);
        Object.keys(r.style).forEach((p) => {
          f.style[p] = r.style[p];
        });
        const l = r.x, g = r.y;
        for (let p of u) {
          const w = n[p], Q = Oa([l, g], w.polygon), [v, y] = t(
            `dragModel/drops/${p}/state`
          );
          Q ? v.includes(He.ONSTART) ? (y(`${He.ONENTER}+${o}+${Ot()}`), c(`${He.ONENTER}+${p}`)) : (y(`${He.ONHOVER}+${o}+${Ot()}`), c(`${He.ONHOVER}+${Ot()}+${p}`)) : v.includes(He.ONHOVER) && (y(`${He.ONLEAVE}+${o}+${Ot()}`), c(`${He.ONLEAVE}+${p}`));
        }
      }
      if (r && r.operationType === He.DROP) {
        let f = document.querySelector(`.${r.class}`);
        if (!f) {
          let p = 0;
          for (; !f && !(p > 10); )
            p++, f = document.querySelector(`.${r.class}`), await new Promise((w) => setTimeout(w, 100));
        }
        f == null || f.remove(), await a(!1);
        const l = r.x, g = r.y;
        for (let p of u) {
          const w = n[p], Q = Oa([l, g], w.polygon), v = t(`dragModel/drops/${p}/state`)[1];
          Q ? (v(`${He.ONDROP}+${o}+${Ot()}`), c(`${He.ONDROP}+${p}`)) : (v(`${He.ONEND}+${o}+${Ot()}`), c(`${He.ONEND}+${p}`));
        }
      }
    }
  }
}, Ci = {}, Vf = "drag_drop_store", Qo = () => {
  let A;
  const e = Object.values(Ci);
  for (let t = 0; t < e.length; t += 1) {
    const r = ui(e[t]) ? ui(e[t])() : null;
    if (r) {
      A = r;
      break;
    }
  }
  return A;
};
function wd(A) {
  const { uniqueKey: e = Vf, scale: t, children: r } = A, [o, i] = sr(null);
  return ut(() => {
    const B = bu();
    return Ci[e] = B, i(B.Provider), () => {
      delete Ci[e];
    };
  }, [e]), /* @__PURE__ */ Gn.jsx(
    Mf,
    {
      noCached: !0,
      nested: !1,
      uniqueKey: e,
      models: [Gf],
      children: o && /* @__PURE__ */ Gn.jsx(
        o,
        {
          value: () => window[`dva_react_hook_store_${e}`],
          children: /* @__PURE__ */ Gn.jsx(Pf, { scale: t, children: r })
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
var vi = function(A, e) {
  return vi = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var o in r)
      Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
  }, vi(A, e);
};
function vt(A, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  vi(A, e);
  function t() {
    this.constructor = A;
  }
  A.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var Ui = function() {
  return Ui = Object.assign || function(e) {
    for (var t, r = 1, o = arguments.length; r < o; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, Ui.apply(this, arguments);
};
function Ze(A, e, t, r) {
  function o(i) {
    return i instanceof t ? i : new t(function(B) {
      B(i);
    });
  }
  return new (t || (t = Promise))(function(i, B) {
    function a(s) {
      try {
        n(r.next(s));
      } catch (u) {
        B(u);
      }
    }
    function c(s) {
      try {
        n(r.throw(s));
      } catch (u) {
        B(u);
      }
    }
    function n(s) {
      s.done ? i(s.value) : o(s.value).then(a, c);
    }
    n((r = r.apply(A, e || [])).next());
  });
}
function je(A, e) {
  var t = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, r, o, i, B;
  return B = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (B[Symbol.iterator] = function() {
    return this;
  }), B;
  function a(n) {
    return function(s) {
      return c([n, s]);
    };
  }
  function c(n) {
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
        n = e.call(A, t);
      } catch (s) {
        n = [6, s], o = 0;
      } finally {
        r = i = 0;
      }
    if (n[0] & 5)
      throw n[1];
    return { value: n[0] ? n[1] : void 0, done: !0 };
  }
}
function Qn(A, e, t) {
  if (t || arguments.length === 2)
    for (var r = 0, o = e.length, i; r < o; r++)
      (i || !(r in e)) && (i || (i = Array.prototype.slice.call(e, 0, r)), i[r] = e[r]);
  return A.concat(i || e);
}
var Tt = (
  /** @class */
  function() {
    function A(e, t, r, o) {
      this.left = e, this.top = t, this.width = r, this.height = o;
    }
    return A.prototype.add = function(e, t, r, o) {
      return new A(this.left + e, this.top + t, this.width + r, this.height + o);
    }, A.fromClientRect = function(e, t) {
      return new A(t.left + e.windowBounds.left, t.top + e.windowBounds.top, t.width, t.height);
    }, A.fromDOMRectList = function(e, t) {
      var r = Array.from(t).find(function(o) {
        return o.width !== 0;
      });
      return r ? new A(r.left + e.windowBounds.left, r.top + e.windowBounds.top, r.width, r.height) : A.EMPTY;
    }, A.EMPTY = new A(0, 0, 0, 0), A;
  }()
), Co = function(A, e) {
  return Tt.fromClientRect(A, e.getBoundingClientRect());
}, kf = function(A) {
  var e = A.body, t = A.documentElement;
  if (!e || !t)
    throw new Error("Unable to get document size");
  var r = Math.max(Math.max(e.scrollWidth, t.scrollWidth), Math.max(e.offsetWidth, t.offsetWidth), Math.max(e.clientWidth, t.clientWidth)), o = Math.max(Math.max(e.scrollHeight, t.scrollHeight), Math.max(e.offsetHeight, t.offsetHeight), Math.max(e.clientHeight, t.clientHeight));
  return new Tt(0, 0, r, o);
}, vo = function(A) {
  for (var e = [], t = 0, r = A.length; t < r; ) {
    var o = A.charCodeAt(t++);
    if (o >= 55296 && o <= 56319 && t < r) {
      var i = A.charCodeAt(t++);
      (i & 64512) === 56320 ? e.push(((o & 1023) << 10) + (i & 1023) + 65536) : (e.push(o), t--);
    } else
      e.push(o);
  }
  return e;
}, Ee = function() {
  for (var A = [], e = 0; e < arguments.length; e++)
    A[e] = arguments[e];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, A);
  var t = A.length;
  if (!t)
    return "";
  for (var r = [], o = -1, i = ""; ++o < t; ) {
    var B = A[o];
    B <= 65535 ? r.push(B) : (B -= 65536, r.push((B >> 10) + 55296, B % 1024 + 56320)), (o + 1 === t || r.length > 16384) && (i += String.fromCharCode.apply(String, r), r.length = 0);
  }
  return i;
}, Ka = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", jf = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Cn = 0; Cn < Ka.length; Cn++)
  jf[Ka.charCodeAt(Cn)] = Cn;
var Da = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Xr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var vn = 0; vn < Da.length; vn++)
  Xr[Da.charCodeAt(vn)] = vn;
var Xf = function(A) {
  var e = A.length * 0.75, t = A.length, r, o = 0, i, B, a, c;
  A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
  var n = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), s = Array.isArray(n) ? n : new Uint8Array(n);
  for (r = 0; r < t; r += 4)
    i = Xr[A.charCodeAt(r)], B = Xr[A.charCodeAt(r + 1)], a = Xr[A.charCodeAt(r + 2)], c = Xr[A.charCodeAt(r + 3)], s[o++] = i << 2 | B >> 4, s[o++] = (B & 15) << 4 | a >> 2, s[o++] = (a & 3) << 6 | c & 63;
  return n;
}, Jf = function(A) {
  for (var e = A.length, t = [], r = 0; r < e; r += 2)
    t.push(A[r + 1] << 8 | A[r]);
  return t;
}, Wf = function(A) {
  for (var e = A.length, t = [], r = 0; r < e; r += 4)
    t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
  return t;
}, ir = 5, Zi = 11, Vo = 2, Yf = Zi - ir, ic = 65536 >> ir, Zf = 1 << ir, ko = Zf - 1, $f = 1024 >> ir, zf = ic + $f, qf = zf, AB = 32, eB = qf + AB, tB = 65536 >> Zi, rB = 1 << Yf, nB = rB - 1, Ta = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
}, oB = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
}, iB = function(A, e) {
  var t = Xf(A), r = Array.isArray(t) ? Wf(t) : new Uint32Array(t), o = Array.isArray(t) ? Jf(t) : new Uint16Array(t), i = 24, B = Ta(o, i / 2, r[4] / 2), a = r[5] === 2 ? Ta(o, (i + r[4]) / 2) : oB(r, Math.ceil((i + r[4]) / 4));
  return new aB(r[0], r[1], r[2], r[3], B, a);
}, aB = (
  /** @class */
  function() {
    function A(e, t, r, o, i, B) {
      this.initialValue = e, this.errorValue = t, this.highStart = r, this.highValueIndex = o, this.index = i, this.data = B;
    }
    return A.prototype.get = function(e) {
      var t;
      if (e >= 0) {
        if (e < 55296 || e > 56319 && e <= 65535)
          return t = this.index[e >> ir], t = (t << Vo) + (e & ko), this.data[t];
        if (e <= 65535)
          return t = this.index[ic + (e - 55296 >> ir)], t = (t << Vo) + (e & ko), this.data[t];
        if (e < this.highStart)
          return t = eB - tB + (e >> Zi), t = this.index[t], t += e >> ir & nB, t = this.index[t], t = (t << Vo) + (e & ko), this.data[t];
        if (e <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  }()
), _a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", sB = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Un = 0; Un < _a.length; Un++)
  sB[_a.charCodeAt(Un)] = Un;
var cB = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", Ra = 50, uB = 1, ac = 2, sc = 3, fB = 4, BB = 5, Ma = 7, cc = 8, Na = 9, Gt = 10, Fi = 11, Pa = 12, yi = 13, lB = 14, Jr = 15, mi = 16, Fn = 17, Pr = 18, gB = 19, Ga = 20, Ei = 21, Gr = 22, jo = 23, wr = 24, rt = 25, Wr = 26, Yr = 27, dr = 28, hB = 29, er = 30, wB = 31, yn = 32, mn = 33, bi = 34, Ii = 35, Hi = 36, on = 37, Si = 38, Wn = 39, Yn = 40, Xo = 41, uc = 42, dB = 43, pB = [9001, 65288], fc = "!", WA = "×", En = "÷", xi = iB(cB), xt = [er, Hi], Li = [uB, ac, sc, BB], Bc = [Gt, cc], Va = [Yr, Wr], QB = Li.concat(Bc), ka = [Si, Wn, Yn, bi, Ii], CB = [Jr, yi], vB = function(A, e) {
  e === void 0 && (e = "strict");
  var t = [], r = [], o = [];
  return A.forEach(function(i, B) {
    var a = xi.get(i);
    if (a > Ra ? (o.push(!0), a -= Ra) : o.push(!1), ["normal", "auto", "loose"].indexOf(e) !== -1 && [8208, 8211, 12316, 12448].indexOf(i) !== -1)
      return r.push(B), t.push(mi);
    if (a === fB || a === Fi) {
      if (B === 0)
        return r.push(B), t.push(er);
      var c = t[B - 1];
      return QB.indexOf(c) === -1 ? (r.push(r[B - 1]), t.push(c)) : (r.push(B), t.push(er));
    }
    if (r.push(B), a === wB)
      return t.push(e === "strict" ? Ei : on);
    if (a === uc || a === hB)
      return t.push(er);
    if (a === dB)
      return i >= 131072 && i <= 196605 || i >= 196608 && i <= 262141 ? t.push(on) : t.push(er);
    t.push(a);
  }), [r, t, o];
}, Jo = function(A, e, t, r) {
  var o = r[t];
  if (Array.isArray(A) ? A.indexOf(o) !== -1 : A === o)
    for (var i = t; i <= r.length; ) {
      i++;
      var B = r[i];
      if (B === e)
        return !0;
      if (B !== Gt)
        break;
    }
  if (o === Gt)
    for (var i = t; i > 0; ) {
      i--;
      var a = r[i];
      if (Array.isArray(A) ? A.indexOf(a) !== -1 : A === a)
        for (var c = t; c <= r.length; ) {
          c++;
          var B = r[c];
          if (B === e)
            return !0;
          if (B !== Gt)
            break;
        }
      if (a !== Gt)
        break;
    }
  return !1;
}, ja = function(A, e) {
  for (var t = A; t >= 0; ) {
    var r = e[t];
    if (r === Gt)
      t--;
    else
      return r;
  }
  return 0;
}, UB = function(A, e, t, r, o) {
  if (t[r] === 0)
    return WA;
  var i = r - 1;
  if (Array.isArray(o) && o[i] === !0)
    return WA;
  var B = i - 1, a = i + 1, c = e[i], n = B >= 0 ? e[B] : 0, s = e[a];
  if (c === ac && s === sc)
    return WA;
  if (Li.indexOf(c) !== -1)
    return fc;
  if (Li.indexOf(s) !== -1 || Bc.indexOf(s) !== -1)
    return WA;
  if (ja(i, e) === cc)
    return En;
  if (xi.get(A[i]) === Fi || (c === yn || c === mn) && xi.get(A[a]) === Fi || c === Ma || s === Ma || c === Na || [Gt, yi, Jr].indexOf(c) === -1 && s === Na || [Fn, Pr, gB, wr, dr].indexOf(s) !== -1 || ja(i, e) === Gr || Jo(jo, Gr, i, e) || Jo([Fn, Pr], Ei, i, e) || Jo(Pa, Pa, i, e))
    return WA;
  if (c === Gt)
    return En;
  if (c === jo || s === jo)
    return WA;
  if (s === mi || c === mi)
    return En;
  if ([yi, Jr, Ei].indexOf(s) !== -1 || c === lB || n === Hi && CB.indexOf(c) !== -1 || c === dr && s === Hi || s === Ga || xt.indexOf(s) !== -1 && c === rt || xt.indexOf(c) !== -1 && s === rt || c === Yr && [on, yn, mn].indexOf(s) !== -1 || [on, yn, mn].indexOf(c) !== -1 && s === Wr || xt.indexOf(c) !== -1 && Va.indexOf(s) !== -1 || Va.indexOf(c) !== -1 && xt.indexOf(s) !== -1 || // (PR | PO) × ( OP | HY )? NU
  [Yr, Wr].indexOf(c) !== -1 && (s === rt || [Gr, Jr].indexOf(s) !== -1 && e[a + 1] === rt) || // ( OP | HY ) × NU
  [Gr, Jr].indexOf(c) !== -1 && s === rt || // NU ×	(NU | SY | IS)
  c === rt && [rt, dr, wr].indexOf(s) !== -1)
    return WA;
  if ([rt, dr, wr, Fn, Pr].indexOf(s) !== -1)
    for (var u = i; u >= 0; ) {
      var f = e[u];
      if (f === rt)
        return WA;
      if ([dr, wr].indexOf(f) !== -1)
        u--;
      else
        break;
    }
  if ([Yr, Wr].indexOf(s) !== -1)
    for (var u = [Fn, Pr].indexOf(c) !== -1 ? B : i; u >= 0; ) {
      var f = e[u];
      if (f === rt)
        return WA;
      if ([dr, wr].indexOf(f) !== -1)
        u--;
      else
        break;
    }
  if (Si === c && [Si, Wn, bi, Ii].indexOf(s) !== -1 || [Wn, bi].indexOf(c) !== -1 && [Wn, Yn].indexOf(s) !== -1 || [Yn, Ii].indexOf(c) !== -1 && s === Yn || ka.indexOf(c) !== -1 && [Ga, Wr].indexOf(s) !== -1 || ka.indexOf(s) !== -1 && c === Yr || xt.indexOf(c) !== -1 && xt.indexOf(s) !== -1 || c === wr && xt.indexOf(s) !== -1 || xt.concat(rt).indexOf(c) !== -1 && s === Gr && pB.indexOf(A[a]) === -1 || xt.concat(rt).indexOf(s) !== -1 && c === Pr)
    return WA;
  if (c === Xo && s === Xo) {
    for (var l = t[i], g = 1; l > 0 && (l--, e[l] === Xo); )
      g++;
    if (g % 2 !== 0)
      return WA;
  }
  return c === yn && s === mn ? WA : En;
}, FB = function(A, e) {
  e || (e = { lineBreak: "normal", wordBreak: "normal" });
  var t = vB(A, e.lineBreak), r = t[0], o = t[1], i = t[2];
  (e.wordBreak === "break-all" || e.wordBreak === "break-word") && (o = o.map(function(a) {
    return [rt, er, uc].indexOf(a) !== -1 ? on : a;
  }));
  var B = e.wordBreak === "keep-all" ? i.map(function(a, c) {
    return a && A[c] >= 19968 && A[c] <= 40959;
  }) : void 0;
  return [r, o, B];
}, yB = (
  /** @class */
  function() {
    function A(e, t, r, o) {
      this.codePoints = e, this.required = t === fc, this.start = r, this.end = o;
    }
    return A.prototype.slice = function() {
      return Ee.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, A;
  }()
), mB = function(A, e) {
  var t = vo(A), r = FB(t, e), o = r[0], i = r[1], B = r[2], a = t.length, c = 0, n = 0;
  return {
    next: function() {
      if (n >= a)
        return { done: !0, value: null };
      for (var s = WA; n < a && (s = UB(t, i, o, ++n, B)) === WA; )
        ;
      if (s !== WA || n === a) {
        var u = new yB(t, s, c, n);
        return c = n, { value: u, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, EB = 1, bB = 2, cn = 4, Xa = 8, to = 10, Ja = 47, An = 92, IB = 9, HB = 32, bn = 34, Vr = 61, SB = 35, xB = 36, LB = 37, In = 39, Hn = 40, kr = 41, OB = 95, et = 45, KB = 33, DB = 60, TB = 62, _B = 64, RB = 91, MB = 93, NB = 61, PB = 123, Sn = 63, GB = 125, Wa = 124, VB = 126, kB = 128, Ya = 65533, Wo = 42, rr = 43, jB = 44, XB = 58, JB = 59, an = 46, WB = 0, YB = 8, ZB = 11, $B = 14, zB = 31, qB = 127, yt = -1, lc = 48, gc = 97, hc = 101, Al = 102, el = 117, tl = 122, wc = 65, dc = 69, pc = 70, rl = 85, nl = 90, Xe = function(A) {
  return A >= lc && A <= 57;
}, ol = function(A) {
  return A >= 55296 && A <= 57343;
}, pr = function(A) {
  return Xe(A) || A >= wc && A <= pc || A >= gc && A <= Al;
}, il = function(A) {
  return A >= gc && A <= tl;
}, al = function(A) {
  return A >= wc && A <= nl;
}, sl = function(A) {
  return il(A) || al(A);
}, cl = function(A) {
  return A >= kB;
}, xn = function(A) {
  return A === to || A === IB || A === HB;
}, ro = function(A) {
  return sl(A) || cl(A) || A === OB;
}, Za = function(A) {
  return ro(A) || Xe(A) || A === et;
}, ul = function(A) {
  return A >= WB && A <= YB || A === ZB || A >= $B && A <= zB || A === qB;
}, Pt = function(A, e) {
  return A !== An ? !1 : e !== to;
}, Ln = function(A, e, t) {
  return A === et ? ro(e) || Pt(e, t) : ro(A) ? !0 : !!(A === An && Pt(A, e));
}, Yo = function(A, e, t) {
  return A === rr || A === et ? Xe(e) ? !0 : e === an && Xe(t) : Xe(A === an ? e : A);
}, fl = function(A) {
  var e = 0, t = 1;
  (A[e] === rr || A[e] === et) && (A[e] === et && (t = -1), e++);
  for (var r = []; Xe(A[e]); )
    r.push(A[e++]);
  var o = r.length ? parseInt(Ee.apply(void 0, r), 10) : 0;
  A[e] === an && e++;
  for (var i = []; Xe(A[e]); )
    i.push(A[e++]);
  var B = i.length, a = B ? parseInt(Ee.apply(void 0, i), 10) : 0;
  (A[e] === dc || A[e] === hc) && e++;
  var c = 1;
  (A[e] === rr || A[e] === et) && (A[e] === et && (c = -1), e++);
  for (var n = []; Xe(A[e]); )
    n.push(A[e++]);
  var s = n.length ? parseInt(Ee.apply(void 0, n), 10) : 0;
  return t * (o + a * Math.pow(10, -B)) * Math.pow(10, c * s);
}, Bl = {
  type: 2
  /* LEFT_PARENTHESIS_TOKEN */
}, ll = {
  type: 3
  /* RIGHT_PARENTHESIS_TOKEN */
}, gl = {
  type: 4
  /* COMMA_TOKEN */
}, hl = {
  type: 13
  /* SUFFIX_MATCH_TOKEN */
}, wl = {
  type: 8
  /* PREFIX_MATCH_TOKEN */
}, dl = {
  type: 21
  /* COLUMN_TOKEN */
}, pl = {
  type: 9
  /* DASH_MATCH_TOKEN */
}, Ql = {
  type: 10
  /* INCLUDE_MATCH_TOKEN */
}, Cl = {
  type: 11
  /* LEFT_CURLY_BRACKET_TOKEN */
}, vl = {
  type: 12
  /* RIGHT_CURLY_BRACKET_TOKEN */
}, Ul = {
  type: 14
  /* SUBSTRING_MATCH_TOKEN */
}, On = {
  type: 23
  /* BAD_URL_TOKEN */
}, Fl = {
  type: 1
  /* BAD_STRING_TOKEN */
}, yl = {
  type: 25
  /* CDO_TOKEN */
}, ml = {
  type: 24
  /* CDC_TOKEN */
}, El = {
  type: 26
  /* COLON_TOKEN */
}, bl = {
  type: 27
  /* SEMICOLON_TOKEN */
}, Il = {
  type: 28
  /* LEFT_SQUARE_BRACKET_TOKEN */
}, Hl = {
  type: 29
  /* RIGHT_SQUARE_BRACKET_TOKEN */
}, Sl = {
  type: 31
  /* WHITESPACE_TOKEN */
}, Oi = {
  type: 32
  /* EOF_TOKEN */
}, Qc = (
  /** @class */
  function() {
    function A() {
      this._value = [];
    }
    return A.prototype.write = function(e) {
      this._value = this._value.concat(vo(e));
    }, A.prototype.read = function() {
      for (var e = [], t = this.consumeToken(); t !== Oi; )
        e.push(t), t = this.consumeToken();
      return e;
    }, A.prototype.consumeToken = function() {
      var e = this.consumeCodePoint();
      switch (e) {
        case bn:
          return this.consumeStringToken(bn);
        case SB:
          var t = this.peekCodePoint(0), r = this.peekCodePoint(1), o = this.peekCodePoint(2);
          if (Za(t) || Pt(r, o)) {
            var i = Ln(t, r, o) ? bB : EB, B = this.consumeName();
            return { type: 5, value: B, flags: i };
          }
          break;
        case xB:
          if (this.peekCodePoint(0) === Vr)
            return this.consumeCodePoint(), hl;
          break;
        case In:
          return this.consumeStringToken(In);
        case Hn:
          return Bl;
        case kr:
          return ll;
        case Wo:
          if (this.peekCodePoint(0) === Vr)
            return this.consumeCodePoint(), Ul;
          break;
        case rr:
          if (Yo(e, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(e), this.consumeNumericToken();
          break;
        case jB:
          return gl;
        case et:
          var a = e, c = this.peekCodePoint(0), n = this.peekCodePoint(1);
          if (Yo(a, c, n))
            return this.reconsumeCodePoint(e), this.consumeNumericToken();
          if (Ln(a, c, n))
            return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          if (c === et && n === TB)
            return this.consumeCodePoint(), this.consumeCodePoint(), ml;
          break;
        case an:
          if (Yo(e, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(e), this.consumeNumericToken();
          break;
        case Ja:
          if (this.peekCodePoint(0) === Wo)
            for (this.consumeCodePoint(); ; ) {
              var s = this.consumeCodePoint();
              if (s === Wo && (s = this.consumeCodePoint(), s === Ja))
                return this.consumeToken();
              if (s === yt)
                return this.consumeToken();
            }
          break;
        case XB:
          return El;
        case JB:
          return bl;
        case DB:
          if (this.peekCodePoint(0) === KB && this.peekCodePoint(1) === et && this.peekCodePoint(2) === et)
            return this.consumeCodePoint(), this.consumeCodePoint(), yl;
          break;
        case _B:
          var u = this.peekCodePoint(0), f = this.peekCodePoint(1), l = this.peekCodePoint(2);
          if (Ln(u, f, l)) {
            var B = this.consumeName();
            return { type: 7, value: B };
          }
          break;
        case RB:
          return Il;
        case An:
          if (Pt(e, this.peekCodePoint(0)))
            return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          break;
        case MB:
          return Hl;
        case NB:
          if (this.peekCodePoint(0) === Vr)
            return this.consumeCodePoint(), wl;
          break;
        case PB:
          return Cl;
        case GB:
          return vl;
        case el:
        case rl:
          var g = this.peekCodePoint(0), p = this.peekCodePoint(1);
          return g === rr && (pr(p) || p === Sn) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
        case Wa:
          if (this.peekCodePoint(0) === Vr)
            return this.consumeCodePoint(), pl;
          if (this.peekCodePoint(0) === Wa)
            return this.consumeCodePoint(), dl;
          break;
        case VB:
          if (this.peekCodePoint(0) === Vr)
            return this.consumeCodePoint(), Ql;
          break;
        case yt:
          return Oi;
      }
      return xn(e) ? (this.consumeWhiteSpace(), Sl) : Xe(e) ? (this.reconsumeCodePoint(e), this.consumeNumericToken()) : ro(e) ? (this.reconsumeCodePoint(e), this.consumeIdentLikeToken()) : { type: 6, value: Ee(e) };
    }, A.prototype.consumeCodePoint = function() {
      var e = this._value.shift();
      return typeof e > "u" ? -1 : e;
    }, A.prototype.reconsumeCodePoint = function(e) {
      this._value.unshift(e);
    }, A.prototype.peekCodePoint = function(e) {
      return e >= this._value.length ? -1 : this._value[e];
    }, A.prototype.consumeUnicodeRangeToken = function() {
      for (var e = [], t = this.consumeCodePoint(); pr(t) && e.length < 6; )
        e.push(t), t = this.consumeCodePoint();
      for (var r = !1; t === Sn && e.length < 6; )
        e.push(t), t = this.consumeCodePoint(), r = !0;
      if (r) {
        var o = parseInt(Ee.apply(void 0, e.map(function(c) {
          return c === Sn ? lc : c;
        })), 16), i = parseInt(Ee.apply(void 0, e.map(function(c) {
          return c === Sn ? pc : c;
        })), 16);
        return { type: 30, start: o, end: i };
      }
      var B = parseInt(Ee.apply(void 0, e), 16);
      if (this.peekCodePoint(0) === et && pr(this.peekCodePoint(1))) {
        this.consumeCodePoint(), t = this.consumeCodePoint();
        for (var a = []; pr(t) && a.length < 6; )
          a.push(t), t = this.consumeCodePoint();
        var i = parseInt(Ee.apply(void 0, a), 16);
        return { type: 30, start: B, end: i };
      } else
        return { type: 30, start: B, end: B };
    }, A.prototype.consumeIdentLikeToken = function() {
      var e = this.consumeName();
      return e.toLowerCase() === "url" && this.peekCodePoint(0) === Hn ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === Hn ? (this.consumeCodePoint(), { type: 19, value: e }) : { type: 20, value: e };
    }, A.prototype.consumeUrlToken = function() {
      var e = [];
      if (this.consumeWhiteSpace(), this.peekCodePoint(0) === yt)
        return { type: 22, value: "" };
      var t = this.peekCodePoint(0);
      if (t === In || t === bn) {
        var r = this.consumeStringToken(this.consumeCodePoint());
        return r.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === yt || this.peekCodePoint(0) === kr) ? (this.consumeCodePoint(), { type: 22, value: r.value }) : (this.consumeBadUrlRemnants(), On);
      }
      for (; ; ) {
        var o = this.consumeCodePoint();
        if (o === yt || o === kr)
          return { type: 22, value: Ee.apply(void 0, e) };
        if (xn(o))
          return this.consumeWhiteSpace(), this.peekCodePoint(0) === yt || this.peekCodePoint(0) === kr ? (this.consumeCodePoint(), { type: 22, value: Ee.apply(void 0, e) }) : (this.consumeBadUrlRemnants(), On);
        if (o === bn || o === In || o === Hn || ul(o))
          return this.consumeBadUrlRemnants(), On;
        if (o === An)
          if (Pt(o, this.peekCodePoint(0)))
            e.push(this.consumeEscapedCodePoint());
          else
            return this.consumeBadUrlRemnants(), On;
        else
          e.push(o);
      }
    }, A.prototype.consumeWhiteSpace = function() {
      for (; xn(this.peekCodePoint(0)); )
        this.consumeCodePoint();
    }, A.prototype.consumeBadUrlRemnants = function() {
      for (; ; ) {
        var e = this.consumeCodePoint();
        if (e === kr || e === yt)
          return;
        Pt(e, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
      }
    }, A.prototype.consumeStringSlice = function(e) {
      for (var t = 5e4, r = ""; e > 0; ) {
        var o = Math.min(t, e);
        r += Ee.apply(void 0, this._value.splice(0, o)), e -= o;
      }
      return this._value.shift(), r;
    }, A.prototype.consumeStringToken = function(e) {
      var t = "", r = 0;
      do {
        var o = this._value[r];
        if (o === yt || o === void 0 || o === e)
          return t += this.consumeStringSlice(r), { type: 0, value: t };
        if (o === to)
          return this._value.splice(0, r), Fl;
        if (o === An) {
          var i = this._value[r + 1];
          i !== yt && i !== void 0 && (i === to ? (t += this.consumeStringSlice(r), r = -1, this._value.shift()) : Pt(o, i) && (t += this.consumeStringSlice(r), t += Ee(this.consumeEscapedCodePoint()), r = -1));
        }
        r++;
      } while (!0);
    }, A.prototype.consumeNumber = function() {
      var e = [], t = cn, r = this.peekCodePoint(0);
      for ((r === rr || r === et) && e.push(this.consumeCodePoint()); Xe(this.peekCodePoint(0)); )
        e.push(this.consumeCodePoint());
      r = this.peekCodePoint(0);
      var o = this.peekCodePoint(1);
      if (r === an && Xe(o))
        for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = Xa; Xe(this.peekCodePoint(0)); )
          e.push(this.consumeCodePoint());
      r = this.peekCodePoint(0), o = this.peekCodePoint(1);
      var i = this.peekCodePoint(2);
      if ((r === dc || r === hc) && ((o === rr || o === et) && Xe(i) || Xe(o)))
        for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = Xa; Xe(this.peekCodePoint(0)); )
          e.push(this.consumeCodePoint());
      return [fl(e), t];
    }, A.prototype.consumeNumericToken = function() {
      var e = this.consumeNumber(), t = e[0], r = e[1], o = this.peekCodePoint(0), i = this.peekCodePoint(1), B = this.peekCodePoint(2);
      if (Ln(o, i, B)) {
        var a = this.consumeName();
        return { type: 15, number: t, flags: r, unit: a };
      }
      return o === LB ? (this.consumeCodePoint(), { type: 16, number: t, flags: r }) : { type: 17, number: t, flags: r };
    }, A.prototype.consumeEscapedCodePoint = function() {
      var e = this.consumeCodePoint();
      if (pr(e)) {
        for (var t = Ee(e); pr(this.peekCodePoint(0)) && t.length < 6; )
          t += Ee(this.consumeCodePoint());
        xn(this.peekCodePoint(0)) && this.consumeCodePoint();
        var r = parseInt(t, 16);
        return r === 0 || ol(r) || r > 1114111 ? Ya : r;
      }
      return e === yt ? Ya : e;
    }, A.prototype.consumeName = function() {
      for (var e = ""; ; ) {
        var t = this.consumeCodePoint();
        if (Za(t))
          e += Ee(t);
        else if (Pt(t, this.peekCodePoint(0)))
          e += Ee(this.consumeEscapedCodePoint());
        else
          return this.reconsumeCodePoint(t), e;
      }
    }, A;
  }()
), Cc = (
  /** @class */
  function() {
    function A(e) {
      this._tokens = e;
    }
    return A.create = function(e) {
      var t = new Qc();
      return t.write(e), new A(t.read());
    }, A.parseValue = function(e) {
      return A.create(e).parseComponentValue();
    }, A.parseValues = function(e) {
      return A.create(e).parseComponentValues();
    }, A.prototype.parseComponentValue = function() {
      for (var e = this.consumeToken(); e.type === 31; )
        e = this.consumeToken();
      if (e.type === 32)
        throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
      this.reconsumeToken(e);
      var t = this.consumeComponentValue();
      do
        e = this.consumeToken();
      while (e.type === 31);
      if (e.type === 32)
        return t;
      throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
    }, A.prototype.parseComponentValues = function() {
      for (var e = []; ; ) {
        var t = this.consumeComponentValue();
        if (t.type === 32)
          return e;
        e.push(t), e.push();
      }
    }, A.prototype.consumeComponentValue = function() {
      var e = this.consumeToken();
      switch (e.type) {
        case 11:
        case 28:
        case 2:
          return this.consumeSimpleBlock(e.type);
        case 19:
          return this.consumeFunction(e);
      }
      return e;
    }, A.prototype.consumeSimpleBlock = function(e) {
      for (var t = { type: e, values: [] }, r = this.consumeToken(); ; ) {
        if (r.type === 32 || Ll(r, e))
          return t;
        this.reconsumeToken(r), t.values.push(this.consumeComponentValue()), r = this.consumeToken();
      }
    }, A.prototype.consumeFunction = function(e) {
      for (var t = {
        name: e.value,
        values: [],
        type: 18
        /* FUNCTION */
      }; ; ) {
        var r = this.consumeToken();
        if (r.type === 32 || r.type === 3)
          return t;
        this.reconsumeToken(r), t.values.push(this.consumeComponentValue());
      }
    }, A.prototype.consumeToken = function() {
      var e = this._tokens.shift();
      return typeof e > "u" ? Oi : e;
    }, A.prototype.reconsumeToken = function(e) {
      this._tokens.unshift(e);
    }, A;
  }()
), un = function(A) {
  return A.type === 15;
}, Dr = function(A) {
  return A.type === 17;
}, fe = function(A) {
  return A.type === 20;
}, xl = function(A) {
  return A.type === 0;
}, Ki = function(A, e) {
  return fe(A) && A.value === e;
}, vc = function(A) {
  return A.type !== 31;
}, Lr = function(A) {
  return A.type !== 31 && A.type !== 4;
}, Et = function(A) {
  var e = [], t = [];
  return A.forEach(function(r) {
    if (r.type === 4) {
      if (t.length === 0)
        throw new Error("Error parsing function args, zero tokens for arg");
      e.push(t), t = [];
      return;
    }
    r.type !== 31 && t.push(r);
  }), t.length && e.push(t), e;
}, Ll = function(A, e) {
  return e === 11 && A.type === 12 || e === 28 && A.type === 29 ? !0 : e === 2 && A.type === 3;
}, Wt = function(A) {
  return A.type === 17 || A.type === 15;
}, xe = function(A) {
  return A.type === 16 || Wt(A);
}, Uc = function(A) {
  return A.length > 1 ? [A[0], A[1]] : [A[0]];
}, Ve = {
  type: 17,
  number: 0,
  flags: cn
}, $i = {
  type: 16,
  number: 50,
  flags: cn
}, Vt = {
  type: 16,
  number: 100,
  flags: cn
}, Zr = function(A, e, t) {
  var r = A[0], o = A[1];
  return [we(r, e), we(typeof o < "u" ? o : r, t)];
}, we = function(A, e) {
  if (A.type === 16)
    return A.number / 100 * e;
  if (un(A))
    switch (A.unit) {
      case "rem":
      case "em":
        return 16 * A.number;
      case "px":
      default:
        return A.number;
    }
  return A.number;
}, Fc = "deg", yc = "grad", mc = "rad", Ec = "turn", Uo = {
  name: "angle",
  parse: function(A, e) {
    if (e.type === 15)
      switch (e.unit) {
        case Fc:
          return Math.PI * e.number / 180;
        case yc:
          return Math.PI / 200 * e.number;
        case mc:
          return e.number;
        case Ec:
          return Math.PI * 2 * e.number;
      }
    throw new Error("Unsupported angle type");
  }
}, bc = function(A) {
  return A.type === 15 && (A.unit === Fc || A.unit === yc || A.unit === mc || A.unit === Ec);
}, Ic = function(A) {
  var e = A.filter(fe).map(function(t) {
    return t.value;
  }).join(" ");
  switch (e) {
    case "to bottom right":
    case "to right bottom":
    case "left top":
    case "top left":
      return [Ve, Ve];
    case "to top":
    case "bottom":
      return ft(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
      return [Ve, Vt];
    case "to right":
    case "left":
      return ft(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
      return [Vt, Vt];
    case "to bottom":
    case "top":
      return ft(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
      return [Vt, Ve];
    case "to left":
    case "right":
      return ft(270);
  }
  return 0;
}, ft = function(A) {
  return Math.PI * A / 180;
}, jt = {
  name: "color",
  parse: function(A, e) {
    if (e.type === 18) {
      var t = Ol[e.name];
      if (typeof t > "u")
        throw new Error('Attempting to parse an unsupported color function "' + e.name + '"');
      return t(A, e.values);
    }
    if (e.type === 5) {
      if (e.value.length === 3) {
        var r = e.value.substring(0, 1), o = e.value.substring(1, 2), i = e.value.substring(2, 3);
        return kt(parseInt(r + r, 16), parseInt(o + o, 16), parseInt(i + i, 16), 1);
      }
      if (e.value.length === 4) {
        var r = e.value.substring(0, 1), o = e.value.substring(1, 2), i = e.value.substring(2, 3), B = e.value.substring(3, 4);
        return kt(parseInt(r + r, 16), parseInt(o + o, 16), parseInt(i + i, 16), parseInt(B + B, 16) / 255);
      }
      if (e.value.length === 6) {
        var r = e.value.substring(0, 2), o = e.value.substring(2, 4), i = e.value.substring(4, 6);
        return kt(parseInt(r, 16), parseInt(o, 16), parseInt(i, 16), 1);
      }
      if (e.value.length === 8) {
        var r = e.value.substring(0, 2), o = e.value.substring(2, 4), i = e.value.substring(4, 6), B = e.value.substring(6, 8);
        return kt(parseInt(r, 16), parseInt(o, 16), parseInt(i, 16), parseInt(B, 16) / 255);
      }
    }
    if (e.type === 20) {
      var a = Dt[e.value.toUpperCase()];
      if (typeof a < "u")
        return a;
    }
    return Dt.TRANSPARENT;
  }
}, Xt = function(A) {
  return (255 & A) === 0;
}, Re = function(A) {
  var e = 255 & A, t = 255 & A >> 8, r = 255 & A >> 16, o = 255 & A >> 24;
  return e < 255 ? "rgba(" + o + "," + r + "," + t + "," + e / 255 + ")" : "rgb(" + o + "," + r + "," + t + ")";
}, kt = function(A, e, t, r) {
  return (A << 24 | e << 16 | t << 8 | Math.round(r * 255) << 0) >>> 0;
}, $a = function(A, e) {
  if (A.type === 17)
    return A.number;
  if (A.type === 16) {
    var t = e === 3 ? 1 : 255;
    return e === 3 ? A.number / 100 * t : Math.round(A.number / 100 * t);
  }
  return 0;
}, za = function(A, e) {
  var t = e.filter(Lr);
  if (t.length === 3) {
    var r = t.map($a), o = r[0], i = r[1], B = r[2];
    return kt(o, i, B, 1);
  }
  if (t.length === 4) {
    var a = t.map($a), o = a[0], i = a[1], B = a[2], c = a[3];
    return kt(o, i, B, c);
  }
  return 0;
};
function Zo(A, e, t) {
  return t < 0 && (t += 1), t >= 1 && (t -= 1), t < 1 / 6 ? (e - A) * t * 6 + A : t < 1 / 2 ? e : t < 2 / 3 ? (e - A) * 6 * (2 / 3 - t) + A : A;
}
var qa = function(A, e) {
  var t = e.filter(Lr), r = t[0], o = t[1], i = t[2], B = t[3], a = (r.type === 17 ? ft(r.number) : Uo.parse(A, r)) / (Math.PI * 2), c = xe(o) ? o.number / 100 : 0, n = xe(i) ? i.number / 100 : 0, s = typeof B < "u" && xe(B) ? we(B, 1) : 1;
  if (c === 0)
    return kt(n * 255, n * 255, n * 255, 1);
  var u = n <= 0.5 ? n * (c + 1) : n + c - n * c, f = n * 2 - u, l = Zo(f, u, a + 1 / 3), g = Zo(f, u, a), p = Zo(f, u, a - 1 / 3);
  return kt(l * 255, g * 255, p * 255, s);
}, Ol = {
  hsl: qa,
  hsla: qa,
  rgb: za,
  rgba: za
}, en = function(A, e) {
  return jt.parse(A, Cc.create(e).parseComponentValue());
}, Dt = {
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
}, Kl = {
  name: "background-clip",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.map(function(t) {
      if (fe(t))
        switch (t.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
      return 0;
    });
  }
}, Dl = {
  name: "background-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, Fo = function(A, e) {
  var t = jt.parse(A, e[0]), r = e[1];
  return r && xe(r) ? { color: t, stop: r } : { color: t, stop: null };
}, As = function(A, e) {
  var t = A[0], r = A[A.length - 1];
  t.stop === null && (t.stop = Ve), r.stop === null && (r.stop = Vt);
  for (var o = [], i = 0, B = 0; B < A.length; B++) {
    var a = A[B].stop;
    if (a !== null) {
      var c = we(a, e);
      c > i ? o.push(c) : o.push(i), i = c;
    } else
      o.push(null);
  }
  for (var n = null, B = 0; B < o.length; B++) {
    var s = o[B];
    if (s === null)
      n === null && (n = B);
    else if (n !== null) {
      for (var u = B - n, f = o[n - 1], l = (s - f) / (u + 1), g = 1; g <= u; g++)
        o[n + g - 1] = l * g;
      n = null;
    }
  }
  return A.map(function(p, w) {
    var Q = p.color;
    return { color: Q, stop: Math.max(Math.min(1, o[w] / e), 0) };
  });
}, Tl = function(A, e, t) {
  var r = e / 2, o = t / 2, i = we(A[0], e) - r, B = o - we(A[1], t);
  return (Math.atan2(B, i) + Math.PI * 2) % (Math.PI * 2);
}, _l = function(A, e, t) {
  var r = typeof A == "number" ? A : Tl(A, e, t), o = Math.abs(e * Math.sin(r)) + Math.abs(t * Math.cos(r)), i = e / 2, B = t / 2, a = o / 2, c = Math.sin(r - Math.PI / 2) * a, n = Math.cos(r - Math.PI / 2) * a;
  return [o, i - n, i + n, B - c, B + c];
}, Qt = function(A, e) {
  return Math.sqrt(A * A + e * e);
}, es = function(A, e, t, r, o) {
  var i = [
    [0, 0],
    [0, e],
    [A, 0],
    [A, e]
  ];
  return i.reduce(function(B, a) {
    var c = a[0], n = a[1], s = Qt(t - c, r - n);
    return (o ? s < B.optimumDistance : s > B.optimumDistance) ? {
      optimumCorner: a,
      optimumDistance: s
    } : B;
  }, {
    optimumDistance: o ? 1 / 0 : -1 / 0,
    optimumCorner: null
  }).optimumCorner;
}, Rl = function(A, e, t, r, o) {
  var i = 0, B = 0;
  switch (A.size) {
    case 0:
      A.shape === 0 ? i = B = Math.min(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - o)) : A.shape === 1 && (i = Math.min(Math.abs(e), Math.abs(e - r)), B = Math.min(Math.abs(t), Math.abs(t - o)));
      break;
    case 2:
      if (A.shape === 0)
        i = B = Math.min(Qt(e, t), Qt(e, t - o), Qt(e - r, t), Qt(e - r, t - o));
      else if (A.shape === 1) {
        var a = Math.min(Math.abs(t), Math.abs(t - o)) / Math.min(Math.abs(e), Math.abs(e - r)), c = es(r, o, e, t, !0), n = c[0], s = c[1];
        i = Qt(n - e, (s - t) / a), B = a * i;
      }
      break;
    case 1:
      A.shape === 0 ? i = B = Math.max(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - o)) : A.shape === 1 && (i = Math.max(Math.abs(e), Math.abs(e - r)), B = Math.max(Math.abs(t), Math.abs(t - o)));
      break;
    case 3:
      if (A.shape === 0)
        i = B = Math.max(Qt(e, t), Qt(e, t - o), Qt(e - r, t), Qt(e - r, t - o));
      else if (A.shape === 1) {
        var a = Math.max(Math.abs(t), Math.abs(t - o)) / Math.max(Math.abs(e), Math.abs(e - r)), u = es(r, o, e, t, !1), n = u[0], s = u[1];
        i = Qt(n - e, (s - t) / a), B = a * i;
      }
      break;
  }
  return Array.isArray(A.size) && (i = we(A.size[0], r), B = A.size.length === 2 ? we(A.size[1], o) : i), [i, B];
}, Ml = function(A, e) {
  var t = ft(180), r = [];
  return Et(e).forEach(function(o, i) {
    if (i === 0) {
      var B = o[0];
      if (B.type === 20 && B.value === "to") {
        t = Ic(o);
        return;
      } else if (bc(B)) {
        t = Uo.parse(A, B);
        return;
      }
    }
    var a = Fo(A, o);
    r.push(a);
  }), {
    angle: t,
    stops: r,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, Kn = function(A, e) {
  var t = ft(180), r = [];
  return Et(e).forEach(function(o, i) {
    if (i === 0) {
      var B = o[0];
      if (B.type === 20 && ["top", "left", "right", "bottom"].indexOf(B.value) !== -1) {
        t = Ic(o);
        return;
      } else if (bc(B)) {
        t = (Uo.parse(A, B) + ft(270)) % ft(360);
        return;
      }
    }
    var a = Fo(A, o);
    r.push(a);
  }), {
    angle: t,
    stops: r,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, Nl = function(A, e) {
  var t = ft(180), r = [], o = 1, i = 0, B = 3, a = [];
  return Et(e).forEach(function(c, n) {
    var s = c[0];
    if (n === 0) {
      if (fe(s) && s.value === "linear") {
        o = 1;
        return;
      } else if (fe(s) && s.value === "radial") {
        o = 2;
        return;
      }
    }
    if (s.type === 18) {
      if (s.name === "from") {
        var u = jt.parse(A, s.values[0]);
        r.push({ stop: Ve, color: u });
      } else if (s.name === "to") {
        var u = jt.parse(A, s.values[0]);
        r.push({ stop: Vt, color: u });
      } else if (s.name === "color-stop") {
        var f = s.values.filter(Lr);
        if (f.length === 2) {
          var u = jt.parse(A, f[1]), l = f[0];
          Dr(l) && r.push({
            stop: { type: 16, number: l.number * 100, flags: l.flags },
            color: u
          });
        }
      }
    }
  }), o === 1 ? {
    angle: (t + ft(180)) % ft(360),
    stops: r,
    type: o
  } : { size: B, shape: i, stops: r, position: a, type: o };
}, Hc = "closest-side", Sc = "farthest-side", xc = "closest-corner", Lc = "farthest-corner", Oc = "circle", Kc = "ellipse", Dc = "cover", Tc = "contain", Pl = function(A, e) {
  var t = 0, r = 3, o = [], i = [];
  return Et(e).forEach(function(B, a) {
    var c = !0;
    if (a === 0) {
      var n = !1;
      c = B.reduce(function(u, f) {
        if (n)
          if (fe(f))
            switch (f.value) {
              case "center":
                return i.push($i), u;
              case "top":
              case "left":
                return i.push(Ve), u;
              case "right":
              case "bottom":
                return i.push(Vt), u;
            }
          else
            (xe(f) || Wt(f)) && i.push(f);
        else if (fe(f))
          switch (f.value) {
            case Oc:
              return t = 0, !1;
            case Kc:
              return t = 1, !1;
            case "at":
              return n = !0, !1;
            case Hc:
              return r = 0, !1;
            case Dc:
            case Sc:
              return r = 1, !1;
            case Tc:
            case xc:
              return r = 2, !1;
            case Lc:
              return r = 3, !1;
          }
        else if (Wt(f) || xe(f))
          return Array.isArray(r) || (r = []), r.push(f), !1;
        return u;
      }, c);
    }
    if (c) {
      var s = Fo(A, B);
      o.push(s);
    }
  }), {
    size: r,
    shape: t,
    stops: o,
    position: i,
    type: 2
    /* RADIAL_GRADIENT */
  };
}, Dn = function(A, e) {
  var t = 0, r = 3, o = [], i = [];
  return Et(e).forEach(function(B, a) {
    var c = !0;
    if (a === 0 ? c = B.reduce(function(s, u) {
      if (fe(u))
        switch (u.value) {
          case "center":
            return i.push($i), !1;
          case "top":
          case "left":
            return i.push(Ve), !1;
          case "right":
          case "bottom":
            return i.push(Vt), !1;
        }
      else if (xe(u) || Wt(u))
        return i.push(u), !1;
      return s;
    }, c) : a === 1 && (c = B.reduce(function(s, u) {
      if (fe(u))
        switch (u.value) {
          case Oc:
            return t = 0, !1;
          case Kc:
            return t = 1, !1;
          case Tc:
          case Hc:
            return r = 0, !1;
          case Sc:
            return r = 1, !1;
          case xc:
            return r = 2, !1;
          case Dc:
          case Lc:
            return r = 3, !1;
        }
      else if (Wt(u) || xe(u))
        return Array.isArray(r) || (r = []), r.push(u), !1;
      return s;
    }, c)), c) {
      var n = Fo(A, B);
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
}, Gl = function(A) {
  return A.type === 1;
}, Vl = function(A) {
  return A.type === 2;
}, zi = {
  name: "image",
  parse: function(A, e) {
    if (e.type === 22) {
      var t = {
        url: e.value,
        type: 0
        /* URL */
      };
      return A.cache.addImage(e.value), t;
    }
    if (e.type === 18) {
      var r = _c[e.name];
      if (typeof r > "u")
        throw new Error('Attempting to parse an unsupported image function "' + e.name + '"');
      return r(A, e.values);
    }
    throw new Error("Unsupported image type " + e.type);
  }
};
function kl(A) {
  return !(A.type === 20 && A.value === "none") && (A.type !== 18 || !!_c[A.name]);
}
var _c = {
  "linear-gradient": Ml,
  "-moz-linear-gradient": Kn,
  "-ms-linear-gradient": Kn,
  "-o-linear-gradient": Kn,
  "-webkit-linear-gradient": Kn,
  "radial-gradient": Pl,
  "-moz-radial-gradient": Dn,
  "-ms-radial-gradient": Dn,
  "-o-radial-gradient": Dn,
  "-webkit-radial-gradient": Dn,
  "-webkit-gradient": Nl
}, jl = {
  name: "background-image",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    if (e.length === 0)
      return [];
    var t = e[0];
    return t.type === 20 && t.value === "none" ? [] : e.filter(function(r) {
      return Lr(r) && kl(r);
    }).map(function(r) {
      return zi.parse(A, r);
    });
  }
}, Xl = {
  name: "background-origin",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.map(function(t) {
      if (fe(t))
        switch (t.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
      return 0;
    });
  }
}, Jl = {
  name: "background-position",
  initialValue: "0% 0%",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    return Et(e).map(function(t) {
      return t.filter(xe);
    }).map(Uc);
  }
}, Wl = {
  name: "background-repeat",
  initialValue: "repeat",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return Et(e).map(function(t) {
      return t.filter(fe).map(function(r) {
        return r.value;
      }).join(" ");
    }).map(Yl);
  }
}, Yl = function(A) {
  switch (A) {
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
}, mr;
(function(A) {
  A.AUTO = "auto", A.CONTAIN = "contain", A.COVER = "cover";
})(mr || (mr = {}));
var Zl = {
  name: "background-size",
  initialValue: "0",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return Et(e).map(function(t) {
      return t.filter($l);
    });
  }
}, $l = function(A) {
  return fe(A) || xe(A);
}, yo = function(A) {
  return {
    name: "border-" + A + "-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color"
  };
}, zl = yo("top"), ql = yo("right"), Ag = yo("bottom"), eg = yo("left"), mo = function(A) {
  return {
    name: "border-radius-" + A,
    initialValue: "0 0",
    prefix: !1,
    type: 1,
    parse: function(e, t) {
      return Uc(t.filter(xe));
    }
  };
}, tg = mo("top-left"), rg = mo("top-right"), ng = mo("bottom-right"), og = mo("bottom-left"), Eo = function(A) {
  return {
    name: "border-" + A + "-style",
    initialValue: "solid",
    prefix: !1,
    type: 2,
    parse: function(e, t) {
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
}, ig = Eo("top"), ag = Eo("right"), sg = Eo("bottom"), cg = Eo("left"), bo = function(A) {
  return {
    name: "border-" + A + "-width",
    initialValue: "0",
    type: 0,
    prefix: !1,
    parse: function(e, t) {
      return un(t) ? t.number : 0;
    }
  };
}, ug = bo("top"), fg = bo("right"), Bg = bo("bottom"), lg = bo("left"), gg = {
  name: "color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, hg = {
  name: "direction",
  initialValue: "ltr",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "rtl":
        return 1;
      case "ltr":
      default:
        return 0;
    }
  }
}, wg = {
  name: "display",
  initialValue: "inline-block",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.filter(fe).reduce(
      function(t, r) {
        return t | dg(r.value);
      },
      0
      /* NONE */
    );
  }
}, dg = function(A) {
  switch (A) {
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
}, pg = {
  name: "float",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
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
}, Qg = {
  name: "letter-spacing",
  initialValue: "0",
  prefix: !1,
  type: 0,
  parse: function(A, e) {
    return e.type === 20 && e.value === "normal" ? 0 : e.type === 17 || e.type === 15 ? e.number : 0;
  }
}, no;
(function(A) {
  A.NORMAL = "normal", A.STRICT = "strict";
})(no || (no = {}));
var Cg = {
  name: "line-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "strict":
        return no.STRICT;
      case "normal":
      default:
        return no.NORMAL;
    }
  }
}, vg = {
  name: "line-height",
  initialValue: "normal",
  prefix: !1,
  type: 4
  /* TOKEN_VALUE */
}, ts = function(A, e) {
  return fe(A) && A.value === "normal" ? 1.2 * e : A.type === 17 ? e * A.number : xe(A) ? we(A, e) : e;
}, Ug = {
  name: "list-style-image",
  initialValue: "none",
  type: 0,
  prefix: !1,
  parse: function(A, e) {
    return e.type === 20 && e.value === "none" ? null : zi.parse(A, e);
  }
}, Fg = {
  name: "list-style-position",
  initialValue: "outside",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "inside":
        return 0;
      case "outside":
      default:
        return 1;
    }
  }
}, Di = {
  name: "list-style-type",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
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
}, Io = function(A) {
  return {
    name: "margin-" + A,
    initialValue: "0",
    prefix: !1,
    type: 4
    /* TOKEN_VALUE */
  };
}, yg = Io("top"), mg = Io("right"), Eg = Io("bottom"), bg = Io("left"), Ig = {
  name: "overflow",
  initialValue: "visible",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.filter(fe).map(function(t) {
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
}, Hg = {
  name: "overflow-wrap",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "break-word":
        return "break-word";
      case "normal":
      default:
        return "normal";
    }
  }
}, Ho = function(A) {
  return {
    name: "padding-" + A,
    initialValue: "0",
    prefix: !1,
    type: 3,
    format: "length-percentage"
  };
}, Sg = Ho("top"), xg = Ho("right"), Lg = Ho("bottom"), Og = Ho("left"), Kg = {
  name: "text-align",
  initialValue: "left",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
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
}, Dg = {
  name: "position",
  initialValue: "static",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
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
}, Tg = {
  name: "text-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    return e.length === 1 && Ki(e[0], "none") ? [] : Et(e).map(function(t) {
      for (var r = {
        color: Dt.TRANSPARENT,
        offsetX: Ve,
        offsetY: Ve,
        blur: Ve
      }, o = 0, i = 0; i < t.length; i++) {
        var B = t[i];
        Wt(B) ? (o === 0 ? r.offsetX = B : o === 1 ? r.offsetY = B : r.blur = B, o++) : r.color = jt.parse(A, B);
      }
      return r;
    });
  }
}, _g = {
  name: "text-transform",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "uppercase":
        return 2;
      case "lowercase":
        return 1;
      case "capitalize":
        return 3;
    }
    return 0;
  }
}, Rg = {
  name: "transform",
  initialValue: "none",
  prefix: !0,
  type: 0,
  parse: function(A, e) {
    if (e.type === 20 && e.value === "none")
      return null;
    if (e.type === 18) {
      var t = Pg[e.name];
      if (typeof t > "u")
        throw new Error('Attempting to parse an unsupported transform function "' + e.name + '"');
      return t(e.values);
    }
    return null;
  }
}, Mg = function(A) {
  var e = A.filter(function(t) {
    return t.type === 17;
  }).map(function(t) {
    return t.number;
  });
  return e.length === 6 ? e : null;
}, Ng = function(A) {
  var e = A.filter(function(c) {
    return c.type === 17;
  }).map(function(c) {
    return c.number;
  }), t = e[0], r = e[1];
  e[2], e[3];
  var o = e[4], i = e[5];
  e[6], e[7], e[8], e[9], e[10], e[11];
  var B = e[12], a = e[13];
  return e[14], e[15], e.length === 16 ? [t, r, o, i, B, a] : null;
}, Pg = {
  matrix: Mg,
  matrix3d: Ng
}, rs = {
  type: 16,
  number: 50,
  flags: cn
}, Gg = [rs, rs], Vg = {
  name: "transform-origin",
  initialValue: "50% 50%",
  prefix: !0,
  type: 1,
  parse: function(A, e) {
    var t = e.filter(xe);
    return t.length !== 2 ? Gg : [t[0], t[1]];
  }
}, kg = {
  name: "visible",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "hidden":
        return 1;
      case "collapse":
        return 2;
      case "visible":
      default:
        return 0;
    }
  }
}, tn;
(function(A) {
  A.NORMAL = "normal", A.BREAK_ALL = "break-all", A.KEEP_ALL = "keep-all";
})(tn || (tn = {}));
var jg = {
  name: "word-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "break-all":
        return tn.BREAK_ALL;
      case "keep-all":
        return tn.KEEP_ALL;
      case "normal":
      default:
        return tn.NORMAL;
    }
  }
}, Xg = {
  name: "z-index",
  initialValue: "auto",
  prefix: !1,
  type: 0,
  parse: function(A, e) {
    if (e.type === 20)
      return { auto: !0, order: 0 };
    if (Dr(e))
      return { auto: !1, order: e.number };
    throw new Error("Invalid z-index number parsed");
  }
}, Rc = {
  name: "time",
  parse: function(A, e) {
    if (e.type === 15)
      switch (e.unit.toLowerCase()) {
        case "s":
          return 1e3 * e.number;
        case "ms":
          return e.number;
      }
    throw new Error("Unsupported time type");
  }
}, Jg = {
  name: "opacity",
  initialValue: "1",
  type: 0,
  prefix: !1,
  parse: function(A, e) {
    return Dr(e) ? e.number : 1;
  }
}, Wg = {
  name: "text-decoration-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, Yg = {
  name: "text-decoration-line",
  initialValue: "none",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.filter(fe).map(function(t) {
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
}, Zg = {
  name: "font-family",
  initialValue: "",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    var t = [], r = [];
    return e.forEach(function(o) {
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
}, $g = {
  name: "font-size",
  initialValue: "0",
  prefix: !1,
  type: 3,
  format: "length"
}, zg = {
  name: "font-weight",
  initialValue: "normal",
  type: 0,
  prefix: !1,
  parse: function(A, e) {
    if (Dr(e))
      return e.number;
    if (fe(e))
      switch (e.value) {
        case "bold":
          return 700;
        case "normal":
        default:
          return 400;
      }
    return 400;
  }
}, qg = {
  name: "font-variant",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    return e.filter(fe).map(function(t) {
      return t.value;
    });
  }
}, Ah = {
  name: "font-style",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "oblique":
        return "oblique";
      case "italic":
        return "italic";
      case "normal":
      default:
        return "normal";
    }
  }
}, Ke = function(A, e) {
  return (A & e) !== 0;
}, eh = {
  name: "content",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    if (e.length === 0)
      return [];
    var t = e[0];
    return t.type === 20 && t.value === "none" ? [] : e;
  }
}, th = {
  name: "counter-increment",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(A, e) {
    if (e.length === 0)
      return null;
    var t = e[0];
    if (t.type === 20 && t.value === "none")
      return null;
    for (var r = [], o = e.filter(vc), i = 0; i < o.length; i++) {
      var B = o[i], a = o[i + 1];
      if (B.type === 20) {
        var c = a && Dr(a) ? a.number : 1;
        r.push({ counter: B.value, increment: c });
      }
    }
    return r;
  }
}, rh = {
  name: "counter-reset",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(A, e) {
    if (e.length === 0)
      return [];
    for (var t = [], r = e.filter(vc), o = 0; o < r.length; o++) {
      var i = r[o], B = r[o + 1];
      if (fe(i) && i.value !== "none") {
        var a = B && Dr(B) ? B.number : 0;
        t.push({ counter: i.value, reset: a });
      }
    }
    return t;
  }
}, nh = {
  name: "duration",
  initialValue: "0s",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.filter(un).map(function(t) {
      return Rc.parse(A, t);
    });
  }
}, oh = {
  name: "quotes",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(A, e) {
    if (e.length === 0)
      return null;
    var t = e[0];
    if (t.type === 20 && t.value === "none")
      return null;
    var r = [], o = e.filter(xl);
    if (o.length % 2 !== 0)
      return null;
    for (var i = 0; i < o.length; i += 2) {
      var B = o[i].value, a = o[i + 1].value;
      r.push({ open: B, close: a });
    }
    return r;
  }
}, ns = function(A, e, t) {
  if (!A)
    return "";
  var r = A[Math.min(e, A.length - 1)];
  return r ? t ? r.open : r.close : "";
}, ih = {
  name: "box-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    return e.length === 1 && Ki(e[0], "none") ? [] : Et(e).map(function(t) {
      for (var r = {
        color: 255,
        offsetX: Ve,
        offsetY: Ve,
        blur: Ve,
        spread: Ve,
        inset: !1
      }, o = 0, i = 0; i < t.length; i++) {
        var B = t[i];
        Ki(B, "inset") ? r.inset = !0 : Wt(B) ? (o === 0 ? r.offsetX = B : o === 1 ? r.offsetY = B : o === 2 ? r.blur = B : r.spread = B, o++) : r.color = jt.parse(A, B);
      }
      return r;
    });
  }
}, ah = {
  name: "paint-order",
  initialValue: "normal",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    var t = [
      0,
      1,
      2
      /* MARKERS */
    ], r = [];
    return e.filter(fe).forEach(function(o) {
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
}, sh = {
  name: "-webkit-text-stroke-color",
  initialValue: "currentcolor",
  prefix: !1,
  type: 3,
  format: "color"
}, ch = {
  name: "-webkit-text-stroke-width",
  initialValue: "0",
  type: 0,
  prefix: !1,
  parse: function(A, e) {
    return un(e) ? e.number : 0;
  }
}, uh = (
  /** @class */
  function() {
    function A(e, t) {
      var r, o;
      this.animationDuration = FA(e, nh, t.animationDuration), this.backgroundClip = FA(e, Kl, t.backgroundClip), this.backgroundColor = FA(e, Dl, t.backgroundColor), this.backgroundImage = FA(e, jl, t.backgroundImage), this.backgroundOrigin = FA(e, Xl, t.backgroundOrigin), this.backgroundPosition = FA(e, Jl, t.backgroundPosition), this.backgroundRepeat = FA(e, Wl, t.backgroundRepeat), this.backgroundSize = FA(e, Zl, t.backgroundSize), this.borderTopColor = FA(e, zl, t.borderTopColor), this.borderRightColor = FA(e, ql, t.borderRightColor), this.borderBottomColor = FA(e, Ag, t.borderBottomColor), this.borderLeftColor = FA(e, eg, t.borderLeftColor), this.borderTopLeftRadius = FA(e, tg, t.borderTopLeftRadius), this.borderTopRightRadius = FA(e, rg, t.borderTopRightRadius), this.borderBottomRightRadius = FA(e, ng, t.borderBottomRightRadius), this.borderBottomLeftRadius = FA(e, og, t.borderBottomLeftRadius), this.borderTopStyle = FA(e, ig, t.borderTopStyle), this.borderRightStyle = FA(e, ag, t.borderRightStyle), this.borderBottomStyle = FA(e, sg, t.borderBottomStyle), this.borderLeftStyle = FA(e, cg, t.borderLeftStyle), this.borderTopWidth = FA(e, ug, t.borderTopWidth), this.borderRightWidth = FA(e, fg, t.borderRightWidth), this.borderBottomWidth = FA(e, Bg, t.borderBottomWidth), this.borderLeftWidth = FA(e, lg, t.borderLeftWidth), this.boxShadow = FA(e, ih, t.boxShadow), this.color = FA(e, gg, t.color), this.direction = FA(e, hg, t.direction), this.display = FA(e, wg, t.display), this.float = FA(e, pg, t.cssFloat), this.fontFamily = FA(e, Zg, t.fontFamily), this.fontSize = FA(e, $g, t.fontSize), this.fontStyle = FA(e, Ah, t.fontStyle), this.fontVariant = FA(e, qg, t.fontVariant), this.fontWeight = FA(e, zg, t.fontWeight), this.letterSpacing = FA(e, Qg, t.letterSpacing), this.lineBreak = FA(e, Cg, t.lineBreak), this.lineHeight = FA(e, vg, t.lineHeight), this.listStyleImage = FA(e, Ug, t.listStyleImage), this.listStylePosition = FA(e, Fg, t.listStylePosition), this.listStyleType = FA(e, Di, t.listStyleType), this.marginTop = FA(e, yg, t.marginTop), this.marginRight = FA(e, mg, t.marginRight), this.marginBottom = FA(e, Eg, t.marginBottom), this.marginLeft = FA(e, bg, t.marginLeft), this.opacity = FA(e, Jg, t.opacity);
      var i = FA(e, Ig, t.overflow);
      this.overflowX = i[0], this.overflowY = i[i.length > 1 ? 1 : 0], this.overflowWrap = FA(e, Hg, t.overflowWrap), this.paddingTop = FA(e, Sg, t.paddingTop), this.paddingRight = FA(e, xg, t.paddingRight), this.paddingBottom = FA(e, Lg, t.paddingBottom), this.paddingLeft = FA(e, Og, t.paddingLeft), this.paintOrder = FA(e, ah, t.paintOrder), this.position = FA(e, Dg, t.position), this.textAlign = FA(e, Kg, t.textAlign), this.textDecorationColor = FA(e, Wg, (r = t.textDecorationColor) !== null && r !== void 0 ? r : t.color), this.textDecorationLine = FA(e, Yg, (o = t.textDecorationLine) !== null && o !== void 0 ? o : t.textDecoration), this.textShadow = FA(e, Tg, t.textShadow), this.textTransform = FA(e, _g, t.textTransform), this.transform = FA(e, Rg, t.transform), this.transformOrigin = FA(e, Vg, t.transformOrigin), this.visibility = FA(e, kg, t.visibility), this.webkitTextStrokeColor = FA(e, sh, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = FA(e, ch, t.webkitTextStrokeWidth), this.wordBreak = FA(e, jg, t.wordBreak), this.zIndex = FA(e, Xg, t.zIndex);
    }
    return A.prototype.isVisible = function() {
      return this.display > 0 && this.opacity > 0 && this.visibility === 0;
    }, A.prototype.isTransparent = function() {
      return Xt(this.backgroundColor);
    }, A.prototype.isTransformed = function() {
      return this.transform !== null;
    }, A.prototype.isPositioned = function() {
      return this.position !== 0;
    }, A.prototype.isPositionedWithZIndex = function() {
      return this.isPositioned() && !this.zIndex.auto;
    }, A.prototype.isFloating = function() {
      return this.float !== 0;
    }, A.prototype.isInlineLevel = function() {
      return Ke(
        this.display,
        4
        /* INLINE */
      ) || Ke(
        this.display,
        33554432
        /* INLINE_BLOCK */
      ) || Ke(
        this.display,
        268435456
        /* INLINE_FLEX */
      ) || Ke(
        this.display,
        536870912
        /* INLINE_GRID */
      ) || Ke(
        this.display,
        67108864
        /* INLINE_LIST_ITEM */
      ) || Ke(
        this.display,
        134217728
        /* INLINE_TABLE */
      );
    }, A;
  }()
), fh = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      this.content = FA(e, eh, t.content), this.quotes = FA(e, oh, t.quotes);
    }
    return A;
  }()
), os = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      this.counterIncrement = FA(e, th, t.counterIncrement), this.counterReset = FA(e, rh, t.counterReset);
    }
    return A;
  }()
), FA = function(A, e, t) {
  var r = new Qc(), o = t !== null && typeof t < "u" ? t.toString() : e.initialValue;
  r.write(o);
  var i = new Cc(r.read());
  switch (e.type) {
    case 2:
      var B = i.parseComponentValue();
      return e.parse(A, fe(B) ? B.value : e.initialValue);
    case 0:
      return e.parse(A, i.parseComponentValue());
    case 1:
      return e.parse(A, i.parseComponentValues());
    case 4:
      return i.parseComponentValue();
    case 3:
      switch (e.format) {
        case "angle":
          return Uo.parse(A, i.parseComponentValue());
        case "color":
          return jt.parse(A, i.parseComponentValue());
        case "image":
          return zi.parse(A, i.parseComponentValue());
        case "length":
          var a = i.parseComponentValue();
          return Wt(a) ? a : Ve;
        case "length-percentage":
          var c = i.parseComponentValue();
          return xe(c) ? c : Ve;
        case "time":
          return Rc.parse(A, i.parseComponentValue());
      }
      break;
  }
}, Bh = "data-html2canvas-debug", lh = function(A) {
  var e = A.getAttribute(Bh);
  switch (e) {
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
}, Ti = function(A, e) {
  var t = lh(A);
  return t === 1 || e === t;
}, bt = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      if (this.context = e, this.textNodes = [], this.elements = [], this.flags = 0, Ti(
        t,
        3
        /* PARSE */
      ))
        debugger;
      this.styles = new uh(e, window.getComputedStyle(t, null)), Mi(t) && (this.styles.animationDuration.some(function(r) {
        return r > 0;
      }) && (t.style.animationDuration = "0s"), this.styles.transform !== null && (t.style.transform = "none")), this.bounds = Co(this.context, t), Ti(
        t,
        4
        /* RENDER */
      ) && (this.flags |= 16);
    }
    return A;
  }()
), gh = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", is = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", $r = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Tn = 0; Tn < is.length; Tn++)
  $r[is.charCodeAt(Tn)] = Tn;
var hh = function(A) {
  var e = A.length * 0.75, t = A.length, r, o = 0, i, B, a, c;
  A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
  var n = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), s = Array.isArray(n) ? n : new Uint8Array(n);
  for (r = 0; r < t; r += 4)
    i = $r[A.charCodeAt(r)], B = $r[A.charCodeAt(r + 1)], a = $r[A.charCodeAt(r + 2)], c = $r[A.charCodeAt(r + 3)], s[o++] = i << 2 | B >> 4, s[o++] = (B & 15) << 4 | a >> 2, s[o++] = (a & 3) << 6 | c & 63;
  return n;
}, wh = function(A) {
  for (var e = A.length, t = [], r = 0; r < e; r += 2)
    t.push(A[r + 1] << 8 | A[r]);
  return t;
}, dh = function(A) {
  for (var e = A.length, t = [], r = 0; r < e; r += 4)
    t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
  return t;
}, ar = 5, qi = 11, $o = 2, ph = qi - ar, Mc = 65536 >> ar, Qh = 1 << ar, zo = Qh - 1, Ch = 1024 >> ar, vh = Mc + Ch, Uh = vh, Fh = 32, yh = Uh + Fh, mh = 65536 >> qi, Eh = 1 << ph, bh = Eh - 1, as = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
}, Ih = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
}, Hh = function(A, e) {
  var t = hh(A), r = Array.isArray(t) ? dh(t) : new Uint32Array(t), o = Array.isArray(t) ? wh(t) : new Uint16Array(t), i = 24, B = as(o, i / 2, r[4] / 2), a = r[5] === 2 ? as(o, (i + r[4]) / 2) : Ih(r, Math.ceil((i + r[4]) / 4));
  return new Sh(r[0], r[1], r[2], r[3], B, a);
}, Sh = (
  /** @class */
  function() {
    function A(e, t, r, o, i, B) {
      this.initialValue = e, this.errorValue = t, this.highStart = r, this.highValueIndex = o, this.index = i, this.data = B;
    }
    return A.prototype.get = function(e) {
      var t;
      if (e >= 0) {
        if (e < 55296 || e > 56319 && e <= 65535)
          return t = this.index[e >> ar], t = (t << $o) + (e & zo), this.data[t];
        if (e <= 65535)
          return t = this.index[Mc + (e - 55296 >> ar)], t = (t << $o) + (e & zo), this.data[t];
        if (e < this.highStart)
          return t = yh - mh + (e >> qi), t = this.index[t], t += e >> ar & bh, t = this.index[t], t = (t << $o) + (e & zo), this.data[t];
        if (e <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  }()
), ss = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", xh = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var _n = 0; _n < ss.length; _n++)
  xh[ss.charCodeAt(_n)] = _n;
var Lh = 1, qo = 2, Ai = 3, cs = 4, us = 5, Oh = 7, fs = 8, ei = 9, ti = 10, Bs = 11, ls = 12, gs = 13, hs = 14, ri = 15, Kh = function(A) {
  for (var e = [], t = 0, r = A.length; t < r; ) {
    var o = A.charCodeAt(t++);
    if (o >= 55296 && o <= 56319 && t < r) {
      var i = A.charCodeAt(t++);
      (i & 64512) === 56320 ? e.push(((o & 1023) << 10) + (i & 1023) + 65536) : (e.push(o), t--);
    } else
      e.push(o);
  }
  return e;
}, Dh = function() {
  for (var A = [], e = 0; e < arguments.length; e++)
    A[e] = arguments[e];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, A);
  var t = A.length;
  if (!t)
    return "";
  for (var r = [], o = -1, i = ""; ++o < t; ) {
    var B = A[o];
    B <= 65535 ? r.push(B) : (B -= 65536, r.push((B >> 10) + 55296, B % 1024 + 56320)), (o + 1 === t || r.length > 16384) && (i += String.fromCharCode.apply(String, r), r.length = 0);
  }
  return i;
}, Th = Hh(gh), st = "×", ni = "÷", _h = function(A) {
  return Th.get(A);
}, Rh = function(A, e, t) {
  var r = t - 2, o = e[r], i = e[t - 1], B = e[t];
  if (i === qo && B === Ai)
    return st;
  if (i === qo || i === Ai || i === cs || B === qo || B === Ai || B === cs)
    return ni;
  if (i === fs && [fs, ei, Bs, ls].indexOf(B) !== -1 || (i === Bs || i === ei) && (B === ei || B === ti) || (i === ls || i === ti) && B === ti || B === gs || B === us || B === Oh || i === Lh)
    return st;
  if (i === gs && B === hs) {
    for (; o === us; )
      o = e[--r];
    if (o === hs)
      return st;
  }
  if (i === ri && B === ri) {
    for (var a = 0; o === ri; )
      a++, o = e[--r];
    if (a % 2 === 0)
      return st;
  }
  return ni;
}, Mh = function(A) {
  var e = Kh(A), t = e.length, r = 0, o = 0, i = e.map(_h);
  return {
    next: function() {
      if (r >= t)
        return { done: !0, value: null };
      for (var B = st; r < t && (B = Rh(e, i, ++r)) === st; )
        ;
      if (B !== st || r === t) {
        var a = Dh.apply(null, e.slice(o, r));
        return o = r, { value: a, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, Nh = function(A) {
  for (var e = Mh(A), t = [], r; !(r = e.next()).done; )
    r.value && t.push(r.value.slice());
  return t;
}, Ph = function(A) {
  var e = 123;
  if (A.createRange) {
    var t = A.createRange();
    if (t.getBoundingClientRect) {
      var r = A.createElement("boundtest");
      r.style.height = e + "px", r.style.display = "block", A.body.appendChild(r), t.selectNode(r);
      var o = t.getBoundingClientRect(), i = Math.round(o.height);
      if (A.body.removeChild(r), i === e)
        return !0;
    }
  }
  return !1;
}, Gh = function(A) {
  var e = A.createElement("boundtest");
  e.style.width = "50px", e.style.display = "block", e.style.fontSize = "12px", e.style.letterSpacing = "0px", e.style.wordSpacing = "0px", A.body.appendChild(e);
  var t = A.createRange();
  e.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
  var r = e.firstChild, o = vo(r.data).map(function(c) {
    return Ee(c);
  }), i = 0, B = {}, a = o.every(function(c, n) {
    t.setStart(r, i), t.setEnd(r, i + c.length);
    var s = t.getBoundingClientRect();
    i += c.length;
    var u = s.x > B.x || s.y > B.y;
    return B = s, n === 0 ? !0 : u;
  });
  return A.body.removeChild(e), a;
}, Vh = function() {
  return typeof new Image().crossOrigin < "u";
}, kh = function() {
  return typeof new XMLHttpRequest().responseType == "string";
}, jh = function(A) {
  var e = new Image(), t = A.createElement("canvas"), r = t.getContext("2d");
  if (!r)
    return !1;
  e.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
  try {
    r.drawImage(e, 0, 0), t.toDataURL();
  } catch {
    return !1;
  }
  return !0;
}, ws = function(A) {
  return A[0] === 0 && A[1] === 255 && A[2] === 0 && A[3] === 255;
}, Xh = function(A) {
  var e = A.createElement("canvas"), t = 100;
  e.width = t, e.height = t;
  var r = e.getContext("2d");
  if (!r)
    return Promise.reject(!1);
  r.fillStyle = "rgb(0, 255, 0)", r.fillRect(0, 0, t, t);
  var o = new Image(), i = e.toDataURL();
  o.src = i;
  var B = _i(t, t, 0, 0, o);
  return r.fillStyle = "red", r.fillRect(0, 0, t, t), ds(B).then(function(a) {
    r.drawImage(a, 0, 0);
    var c = r.getImageData(0, 0, t, t).data;
    r.fillStyle = "red", r.fillRect(0, 0, t, t);
    var n = A.createElement("div");
    return n.style.backgroundImage = "url(" + i + ")", n.style.height = t + "px", ws(c) ? ds(_i(t, t, 0, 0, n)) : Promise.reject(!1);
  }).then(function(a) {
    return r.drawImage(a, 0, 0), ws(r.getImageData(0, 0, t, t).data);
  }).catch(function() {
    return !1;
  });
}, _i = function(A, e, t, r, o) {
  var i = "http://www.w3.org/2000/svg", B = document.createElementNS(i, "svg"), a = document.createElementNS(i, "foreignObject");
  return B.setAttributeNS(null, "width", A.toString()), B.setAttributeNS(null, "height", e.toString()), a.setAttributeNS(null, "width", "100%"), a.setAttributeNS(null, "height", "100%"), a.setAttributeNS(null, "x", t.toString()), a.setAttributeNS(null, "y", r.toString()), a.setAttributeNS(null, "externalResourcesRequired", "true"), B.appendChild(a), a.appendChild(o), B;
}, ds = function(A) {
  return new Promise(function(e, t) {
    var r = new Image();
    r.onload = function() {
      return e(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A));
  });
}, Ge = {
  get SUPPORT_RANGE_BOUNDS() {
    var A = Ph(document);
    return Object.defineProperty(Ge, "SUPPORT_RANGE_BOUNDS", { value: A }), A;
  },
  get SUPPORT_WORD_BREAKING() {
    var A = Ge.SUPPORT_RANGE_BOUNDS && Gh(document);
    return Object.defineProperty(Ge, "SUPPORT_WORD_BREAKING", { value: A }), A;
  },
  get SUPPORT_SVG_DRAWING() {
    var A = jh(document);
    return Object.defineProperty(Ge, "SUPPORT_SVG_DRAWING", { value: A }), A;
  },
  get SUPPORT_FOREIGNOBJECT_DRAWING() {
    var A = typeof Array.from == "function" && typeof window.fetch == "function" ? Xh(document) : Promise.resolve(!1);
    return Object.defineProperty(Ge, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: A }), A;
  },
  get SUPPORT_CORS_IMAGES() {
    var A = Vh();
    return Object.defineProperty(Ge, "SUPPORT_CORS_IMAGES", { value: A }), A;
  },
  get SUPPORT_RESPONSE_TYPE() {
    var A = kh();
    return Object.defineProperty(Ge, "SUPPORT_RESPONSE_TYPE", { value: A }), A;
  },
  get SUPPORT_CORS_XHR() {
    var A = "withCredentials" in new XMLHttpRequest();
    return Object.defineProperty(Ge, "SUPPORT_CORS_XHR", { value: A }), A;
  },
  get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
    var A = !!(typeof Intl < "u" && Intl.Segmenter);
    return Object.defineProperty(Ge, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value: A }), A;
  }
}, rn = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      this.text = e, this.bounds = t;
    }
    return A;
  }()
), Jh = function(A, e, t, r) {
  var o = Zh(e, t), i = [], B = 0;
  return o.forEach(function(a) {
    if (t.textDecorationLine.length || a.trim().length > 0)
      if (Ge.SUPPORT_RANGE_BOUNDS) {
        var c = ps(r, B, a.length).getClientRects();
        if (c.length > 1) {
          var n = Aa(a), s = 0;
          n.forEach(function(f) {
            i.push(new rn(f, Tt.fromDOMRectList(A, ps(r, s + B, f.length).getClientRects()))), s += f.length;
          });
        } else
          i.push(new rn(a, Tt.fromDOMRectList(A, c)));
      } else {
        var u = r.splitText(a.length);
        i.push(new rn(a, Wh(A, r))), r = u;
      }
    else
      Ge.SUPPORT_RANGE_BOUNDS || (r = r.splitText(a.length));
    B += a.length;
  }), i;
}, Wh = function(A, e) {
  var t = e.ownerDocument;
  if (t) {
    var r = t.createElement("html2canvaswrapper");
    r.appendChild(e.cloneNode(!0));
    var o = e.parentNode;
    if (o) {
      o.replaceChild(r, e);
      var i = Co(A, r);
      return r.firstChild && o.replaceChild(r.firstChild, r), i;
    }
  }
  return Tt.EMPTY;
}, ps = function(A, e, t) {
  var r = A.ownerDocument;
  if (!r)
    throw new Error("Node has no owner document");
  var o = r.createRange();
  return o.setStart(A, e), o.setEnd(A, e + t), o;
}, Aa = function(A) {
  if (Ge.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var e = new Intl.Segmenter(void 0, { granularity: "grapheme" });
    return Array.from(e.segment(A)).map(function(t) {
      return t.segment;
    });
  }
  return Nh(A);
}, Yh = function(A, e) {
  if (Ge.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var t = new Intl.Segmenter(void 0, {
      granularity: "word"
    });
    return Array.from(t.segment(A)).map(function(r) {
      return r.segment;
    });
  }
  return zh(A, e);
}, Zh = function(A, e) {
  return e.letterSpacing !== 0 ? Aa(A) : Yh(A, e);
}, $h = [32, 160, 4961, 65792, 65793, 4153, 4241], zh = function(A, e) {
  for (var t = mB(A, {
    lineBreak: e.lineBreak,
    wordBreak: e.overflowWrap === "break-word" ? "break-word" : e.wordBreak
  }), r = [], o, i = function() {
    if (o.value) {
      var B = o.value.slice(), a = vo(B), c = "";
      a.forEach(function(n) {
        $h.indexOf(n) === -1 ? c += Ee(n) : (c.length && r.push(c), r.push(Ee(n)), c = "");
      }), c.length && r.push(c);
    }
  }; !(o = t.next()).done; )
    i();
  return r;
}, qh = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t, r) {
      this.text = Aw(t.data, r.textTransform), this.textBounds = Jh(e, this.text, r, t);
    }
    return A;
  }()
), Aw = function(A, e) {
  switch (e) {
    case 1:
      return A.toLowerCase();
    case 3:
      return A.replace(ew, tw);
    case 2:
      return A.toUpperCase();
    default:
      return A;
  }
}, ew = /(^|\s|:|-|\(|\))([a-z])/g, tw = function(A, e, t) {
  return A.length > 0 ? e + t.toUpperCase() : A;
}, Nc = (
  /** @class */
  function(A) {
    vt(e, A);
    function e(t, r) {
      var o = A.call(this, t, r) || this;
      return o.src = r.currentSrc || r.src, o.intrinsicWidth = r.naturalWidth, o.intrinsicHeight = r.naturalHeight, o.context.cache.addImage(o.src), o;
    }
    return e;
  }(bt)
), Pc = (
  /** @class */
  function(A) {
    vt(e, A);
    function e(t, r) {
      var o = A.call(this, t, r) || this;
      return o.canvas = r, o.intrinsicWidth = r.width, o.intrinsicHeight = r.height, o;
    }
    return e;
  }(bt)
), Gc = (
  /** @class */
  function(A) {
    vt(e, A);
    function e(t, r) {
      var o = A.call(this, t, r) || this, i = new XMLSerializer(), B = Co(t, r);
      return r.setAttribute("width", B.width + "px"), r.setAttribute("height", B.height + "px"), o.svg = "data:image/svg+xml," + encodeURIComponent(i.serializeToString(r)), o.intrinsicWidth = r.width.baseVal.value, o.intrinsicHeight = r.height.baseVal.value, o.context.cache.addImage(o.svg), o;
    }
    return e;
  }(bt)
), Vc = (
  /** @class */
  function(A) {
    vt(e, A);
    function e(t, r) {
      var o = A.call(this, t, r) || this;
      return o.value = r.value, o;
    }
    return e;
  }(bt)
), Ri = (
  /** @class */
  function(A) {
    vt(e, A);
    function e(t, r) {
      var o = A.call(this, t, r) || this;
      return o.start = r.start, o.reversed = typeof r.reversed == "boolean" && r.reversed === !0, o;
    }
    return e;
  }(bt)
), rw = [
  {
    type: 15,
    flags: 0,
    unit: "px",
    number: 3
  }
], nw = [
  {
    type: 16,
    flags: 0,
    number: 50
  }
], ow = function(A) {
  return A.width > A.height ? new Tt(A.left + (A.width - A.height) / 2, A.top, A.height, A.height) : A.width < A.height ? new Tt(A.left, A.top + (A.height - A.width) / 2, A.width, A.width) : A;
}, iw = function(A) {
  var e = A.type === aw ? new Array(A.value.length + 1).join("•") : A.value;
  return e.length === 0 ? A.placeholder || "" : e;
}, oo = "checkbox", io = "radio", aw = "password", Qs = 707406591, ea = (
  /** @class */
  function(A) {
    vt(e, A);
    function e(t, r) {
      var o = A.call(this, t, r) || this;
      switch (o.type = r.type.toLowerCase(), o.checked = r.checked, o.value = iw(r), (o.type === oo || o.type === io) && (o.styles.backgroundColor = 3739148031, o.styles.borderTopColor = o.styles.borderRightColor = o.styles.borderBottomColor = o.styles.borderLeftColor = 2779096575, o.styles.borderTopWidth = o.styles.borderRightWidth = o.styles.borderBottomWidth = o.styles.borderLeftWidth = 1, o.styles.borderTopStyle = o.styles.borderRightStyle = o.styles.borderBottomStyle = o.styles.borderLeftStyle = 1, o.styles.backgroundClip = [
        0
        /* BORDER_BOX */
      ], o.styles.backgroundOrigin = [
        0
        /* BORDER_BOX */
      ], o.bounds = ow(o.bounds)), o.type) {
        case oo:
          o.styles.borderTopRightRadius = o.styles.borderTopLeftRadius = o.styles.borderBottomRightRadius = o.styles.borderBottomLeftRadius = rw;
          break;
        case io:
          o.styles.borderTopRightRadius = o.styles.borderTopLeftRadius = o.styles.borderBottomRightRadius = o.styles.borderBottomLeftRadius = nw;
          break;
      }
      return o;
    }
    return e;
  }(bt)
), kc = (
  /** @class */
  function(A) {
    vt(e, A);
    function e(t, r) {
      var o = A.call(this, t, r) || this, i = r.options[r.selectedIndex || 0];
      return o.value = i && i.text || "", o;
    }
    return e;
  }(bt)
), jc = (
  /** @class */
  function(A) {
    vt(e, A);
    function e(t, r) {
      var o = A.call(this, t, r) || this;
      return o.value = r.value, o;
    }
    return e;
  }(bt)
), Xc = (
  /** @class */
  function(A) {
    vt(e, A);
    function e(t, r) {
      var o = A.call(this, t, r) || this;
      o.src = r.src, o.width = parseInt(r.width, 10) || 0, o.height = parseInt(r.height, 10) || 0, o.backgroundColor = o.styles.backgroundColor;
      try {
        if (r.contentWindow && r.contentWindow.document && r.contentWindow.document.documentElement) {
          o.tree = Wc(t, r.contentWindow.document.documentElement);
          var i = r.contentWindow.document.documentElement ? en(t, getComputedStyle(r.contentWindow.document.documentElement).backgroundColor) : Dt.TRANSPARENT, B = r.contentWindow.document.body ? en(t, getComputedStyle(r.contentWindow.document.body).backgroundColor) : Dt.TRANSPARENT;
          o.backgroundColor = Xt(i) ? Xt(B) ? o.styles.backgroundColor : B : i;
        }
      } catch {
      }
      return o;
    }
    return e;
  }(bt)
), sw = ["OL", "UL", "MENU"], Zn = function(A, e, t, r) {
  for (var o = e.firstChild, i = void 0; o; o = i)
    if (i = o.nextSibling, Yc(o) && o.data.trim().length > 0)
      t.textNodes.push(new qh(A, o, t.styles));
    else if (yr(o))
      if (qc(o) && o.assignedNodes)
        o.assignedNodes().forEach(function(a) {
          return Zn(A, a, t, r);
        });
      else {
        var B = Jc(A, o);
        B.styles.isVisible() && (cw(o, B, r) ? B.flags |= 4 : uw(B.styles) && (B.flags |= 2), sw.indexOf(o.tagName) !== -1 && (B.flags |= 8), t.elements.push(B), o.slot, o.shadowRoot ? Zn(A, o.shadowRoot, B, r) : !ao(o) && !Zc(o) && !so(o) && Zn(A, o, B, r));
      }
}, Jc = function(A, e) {
  return Ni(e) ? new Nc(A, e) : $c(e) ? new Pc(A, e) : Zc(e) ? new Gc(A, e) : fw(e) ? new Vc(A, e) : Bw(e) ? new Ri(A, e) : lw(e) ? new ea(A, e) : so(e) ? new kc(A, e) : ao(e) ? new jc(A, e) : zc(e) ? new Xc(A, e) : new bt(A, e);
}, Wc = function(A, e) {
  var t = Jc(A, e);
  return t.flags |= 4, Zn(A, e, t, t), t;
}, cw = function(A, e, t) {
  return e.styles.isPositionedWithZIndex() || e.styles.opacity < 1 || e.styles.isTransformed() || ta(A) && t.styles.isTransparent();
}, uw = function(A) {
  return A.isPositioned() || A.isFloating();
}, Yc = function(A) {
  return A.nodeType === Node.TEXT_NODE;
}, yr = function(A) {
  return A.nodeType === Node.ELEMENT_NODE;
}, Mi = function(A) {
  return yr(A) && typeof A.style < "u" && !$n(A);
}, $n = function(A) {
  return typeof A.className == "object";
}, fw = function(A) {
  return A.tagName === "LI";
}, Bw = function(A) {
  return A.tagName === "OL";
}, lw = function(A) {
  return A.tagName === "INPUT";
}, gw = function(A) {
  return A.tagName === "HTML";
}, Zc = function(A) {
  return A.tagName === "svg";
}, ta = function(A) {
  return A.tagName === "BODY";
}, $c = function(A) {
  return A.tagName === "CANVAS";
}, Cs = function(A) {
  return A.tagName === "VIDEO";
}, Ni = function(A) {
  return A.tagName === "IMG";
}, zc = function(A) {
  return A.tagName === "IFRAME";
}, vs = function(A) {
  return A.tagName === "STYLE";
}, hw = function(A) {
  return A.tagName === "SCRIPT";
}, ao = function(A) {
  return A.tagName === "TEXTAREA";
}, so = function(A) {
  return A.tagName === "SELECT";
}, qc = function(A) {
  return A.tagName === "SLOT";
}, Us = function(A) {
  return A.tagName.indexOf("-") > 0;
}, ww = (
  /** @class */
  function() {
    function A() {
      this.counters = {};
    }
    return A.prototype.getCounterValue = function(e) {
      var t = this.counters[e];
      return t && t.length ? t[t.length - 1] : 1;
    }, A.prototype.getCounterValues = function(e) {
      var t = this.counters[e];
      return t || [];
    }, A.prototype.pop = function(e) {
      var t = this;
      e.forEach(function(r) {
        return t.counters[r].pop();
      });
    }, A.prototype.parse = function(e) {
      var t = this, r = e.counterIncrement, o = e.counterReset, i = !0;
      r !== null && r.forEach(function(a) {
        var c = t.counters[a.counter];
        c && a.increment !== 0 && (i = !1, c.length || c.push(1), c[Math.max(0, c.length - 1)] += a.increment);
      });
      var B = [];
      return i && o.forEach(function(a) {
        var c = t.counters[a.counter];
        B.push(a.counter), c || (c = t.counters[a.counter] = []), c.push(a.reset);
      }), B;
    }, A;
  }()
), Fs = {
  integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
  values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
}, ys = {
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
}, dw = {
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
}, pw = {
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
}, Qr = function(A, e, t, r, o, i) {
  return A < e || A > t ? sn(A, o, i.length > 0) : r.integers.reduce(function(B, a, c) {
    for (; A >= a; )
      A -= a, B += r.values[c];
    return B;
  }, "") + i;
}, Au = function(A, e, t, r) {
  var o = "";
  do
    t || A--, o = r(A) + o, A /= e;
  while (A * e >= e);
  return o;
}, me = function(A, e, t, r, o) {
  var i = t - e + 1;
  return (A < 0 ? "-" : "") + (Au(Math.abs(A), i, r, function(B) {
    return Ee(Math.floor(B % i) + e);
  }) + o);
}, qt = function(A, e, t) {
  t === void 0 && (t = ". ");
  var r = e.length;
  return Au(Math.abs(A), r, !1, function(o) {
    return e[Math.floor(o % r)];
  }) + t;
}, Ur = 1, Mt = 2, Nt = 4, zr = 8, Lt = function(A, e, t, r, o, i) {
  if (A < -9999 || A > 9999)
    return sn(A, 4, o.length > 0);
  var B = Math.abs(A), a = o;
  if (B === 0)
    return e[0] + a;
  for (var c = 0; B > 0 && c <= 4; c++) {
    var n = B % 10;
    n === 0 && Ke(i, Ur) && a !== "" ? a = e[n] + a : n > 1 || n === 1 && c === 0 || n === 1 && c === 1 && Ke(i, Mt) || n === 1 && c === 1 && Ke(i, Nt) && A > 100 || n === 1 && c > 1 && Ke(i, zr) ? a = e[n] + (c > 0 ? t[c - 1] : "") + a : n === 1 && c > 0 && (a = t[c - 1] + a), B = Math.floor(B / 10);
  }
  return (A < 0 ? r : "") + a;
}, ms = "十百千萬", Es = "拾佰仟萬", bs = "マイナス", oi = "마이너스", sn = function(A, e, t) {
  var r = t ? ". " : "", o = t ? "、" : "", i = t ? ", " : "", B = t ? " " : "";
  switch (e) {
    case 0:
      return "•" + B;
    case 1:
      return "◦" + B;
    case 2:
      return "◾" + B;
    case 5:
      var a = me(A, 48, 57, !0, r);
      return a.length < 4 ? "0" + a : a;
    case 4:
      return qt(A, "〇一二三四五六七八九", o);
    case 6:
      return Qr(A, 1, 3999, Fs, 3, r).toLowerCase();
    case 7:
      return Qr(A, 1, 3999, Fs, 3, r);
    case 8:
      return me(A, 945, 969, !1, r);
    case 9:
      return me(A, 97, 122, !1, r);
    case 10:
      return me(A, 65, 90, !1, r);
    case 11:
      return me(A, 1632, 1641, !0, r);
    case 12:
    case 49:
      return Qr(A, 1, 9999, ys, 3, r);
    case 35:
      return Qr(A, 1, 9999, ys, 3, r).toLowerCase();
    case 13:
      return me(A, 2534, 2543, !0, r);
    case 14:
    case 30:
      return me(A, 6112, 6121, !0, r);
    case 15:
      return qt(A, "子丑寅卯辰巳午未申酉戌亥", o);
    case 16:
      return qt(A, "甲乙丙丁戊己庚辛壬癸", o);
    case 17:
    case 48:
      return Lt(A, "零一二三四五六七八九", ms, "負", o, Mt | Nt | zr);
    case 47:
      return Lt(A, "零壹貳參肆伍陸柒捌玖", Es, "負", o, Ur | Mt | Nt | zr);
    case 42:
      return Lt(A, "零一二三四五六七八九", ms, "负", o, Mt | Nt | zr);
    case 41:
      return Lt(A, "零壹贰叁肆伍陆柒捌玖", Es, "负", o, Ur | Mt | Nt | zr);
    case 26:
      return Lt(A, "〇一二三四五六七八九", "十百千万", bs, o, 0);
    case 25:
      return Lt(A, "零壱弐参四伍六七八九", "拾百千万", bs, o, Ur | Mt | Nt);
    case 31:
      return Lt(A, "영일이삼사오육칠팔구", "십백천만", oi, i, Ur | Mt | Nt);
    case 33:
      return Lt(A, "零一二三四五六七八九", "十百千萬", oi, i, 0);
    case 32:
      return Lt(A, "零壹貳參四五六七八九", "拾百千", oi, i, Ur | Mt | Nt);
    case 18:
      return me(A, 2406, 2415, !0, r);
    case 20:
      return Qr(A, 1, 19999, pw, 3, r);
    case 21:
      return me(A, 2790, 2799, !0, r);
    case 22:
      return me(A, 2662, 2671, !0, r);
    case 22:
      return Qr(A, 1, 10999, dw, 3, r);
    case 23:
      return qt(A, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
    case 24:
      return qt(A, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
    case 27:
      return me(A, 3302, 3311, !0, r);
    case 28:
      return qt(A, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", o);
    case 29:
      return qt(A, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", o);
    case 34:
      return me(A, 3792, 3801, !0, r);
    case 37:
      return me(A, 6160, 6169, !0, r);
    case 38:
      return me(A, 4160, 4169, !0, r);
    case 39:
      return me(A, 2918, 2927, !0, r);
    case 40:
      return me(A, 1776, 1785, !0, r);
    case 43:
      return me(A, 3046, 3055, !0, r);
    case 44:
      return me(A, 3174, 3183, !0, r);
    case 45:
      return me(A, 3664, 3673, !0, r);
    case 46:
      return me(A, 3872, 3881, !0, r);
    case 3:
    default:
      return me(A, 48, 57, !0, r);
  }
}, eu = "data-html2canvas-ignore", Is = (
  /** @class */
  function() {
    function A(e, t, r) {
      if (this.context = e, this.options = r, this.scrolledElements = [], this.referenceElement = t, this.counters = new ww(), this.quoteDepth = 0, !t.ownerDocument)
        throw new Error("Cloned element does not have an owner document");
      this.documentElement = this.cloneNode(t.ownerDocument.documentElement, !1);
    }
    return A.prototype.toIFrame = function(e, t) {
      var r = this, o = Qw(e, t);
      if (!o.contentWindow)
        return Promise.reject("Unable to find iframe window");
      var i = e.defaultView.pageXOffset, B = e.defaultView.pageYOffset, a = o.contentWindow, c = a.document, n = Uw(o).then(function() {
        return Ze(r, void 0, void 0, function() {
          var s, u;
          return je(this, function(f) {
            switch (f.label) {
              case 0:
                return this.scrolledElements.forEach(Ew), a && (a.scrollTo(t.left, t.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (a.scrollY !== t.top || a.scrollX !== t.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(a.scrollX - t.left, a.scrollY - t.top, 0, 0))), s = this.options.onclone, u = this.clonedReferenceElement, typeof u > "u" ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : c.fonts && c.fonts.ready ? [4, c.fonts.ready] : [3, 2];
              case 1:
                f.sent(), f.label = 2;
              case 2:
                return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, vw(c)] : [3, 4];
              case 3:
                f.sent(), f.label = 4;
              case 4:
                return typeof s == "function" ? [2, Promise.resolve().then(function() {
                  return s(c, u);
                }).then(function() {
                  return o;
                })] : [2, o];
            }
          });
        });
      });
      return c.open(), c.write(yw(document.doctype) + "<html></html>"), mw(this.referenceElement.ownerDocument, i, B), c.replaceChild(c.adoptNode(this.documentElement), c.documentElement), c.close(), n;
    }, A.prototype.createElementClone = function(e) {
      if (Ti(
        e,
        2
        /* CLONE */
      ))
        debugger;
      if ($c(e))
        return this.createCanvasClone(e);
      if (Cs(e))
        return this.createVideoClone(e);
      if (vs(e))
        return this.createStyleClone(e);
      var t = e.cloneNode(!1);
      return Ni(t) && (Ni(e) && e.currentSrc && e.currentSrc !== e.src && (t.src = e.currentSrc, t.srcset = ""), t.loading === "lazy" && (t.loading = "eager")), Us(t) ? this.createCustomElementClone(t) : t;
    }, A.prototype.createCustomElementClone = function(e) {
      var t = document.createElement("html2canvascustomelement");
      return ii(e.style, t), t;
    }, A.prototype.createStyleClone = function(e) {
      try {
        var t = e.sheet;
        if (t && t.cssRules) {
          var r = [].slice.call(t.cssRules, 0).reduce(function(i, B) {
            return B && typeof B.cssText == "string" ? i + B.cssText : i;
          }, ""), o = e.cloneNode(!1);
          return o.textContent = r, o;
        }
      } catch (i) {
        if (this.context.logger.error("Unable to access cssRules property", i), i.name !== "SecurityError")
          throw i;
      }
      return e.cloneNode(!1);
    }, A.prototype.createCanvasClone = function(e) {
      var t;
      if (this.options.inlineImages && e.ownerDocument) {
        var r = e.ownerDocument.createElement("img");
        try {
          return r.src = e.toDataURL(), r;
        } catch {
          this.context.logger.info("Unable to inline canvas contents, canvas is tainted", e);
        }
      }
      var o = e.cloneNode(!1);
      try {
        o.width = e.width, o.height = e.height;
        var i = e.getContext("2d"), B = o.getContext("2d");
        if (B)
          if (!this.options.allowTaint && i)
            B.putImageData(i.getImageData(0, 0, e.width, e.height), 0, 0);
          else {
            var a = (t = e.getContext("webgl2")) !== null && t !== void 0 ? t : e.getContext("webgl");
            if (a) {
              var c = a.getContextAttributes();
              (c == null ? void 0 : c.preserveDrawingBuffer) === !1 && this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", e);
            }
            B.drawImage(e, 0, 0);
          }
        return o;
      } catch {
        this.context.logger.info("Unable to clone canvas as it is tainted", e);
      }
      return o;
    }, A.prototype.createVideoClone = function(e) {
      var t = e.ownerDocument.createElement("canvas");
      t.width = e.offsetWidth, t.height = e.offsetHeight;
      var r = t.getContext("2d");
      try {
        return r && (r.drawImage(e, 0, 0, t.width, t.height), this.options.allowTaint || r.getImageData(0, 0, t.width, t.height)), t;
      } catch {
        this.context.logger.info("Unable to clone video as it is tainted", e);
      }
      var o = e.ownerDocument.createElement("canvas");
      return o.width = e.offsetWidth, o.height = e.offsetHeight, o;
    }, A.prototype.appendChildNode = function(e, t, r) {
      (!yr(t) || !hw(t) && !t.hasAttribute(eu) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(t))) && (!this.options.copyStyles || !yr(t) || !vs(t)) && e.appendChild(this.cloneNode(t, r));
    }, A.prototype.cloneChildNodes = function(e, t, r) {
      for (var o = this, i = e.shadowRoot ? e.shadowRoot.firstChild : e.firstChild; i; i = i.nextSibling)
        if (yr(i) && qc(i) && typeof i.assignedNodes == "function") {
          var B = i.assignedNodes();
          B.length && B.forEach(function(a) {
            return o.appendChildNode(t, a, r);
          });
        } else
          this.appendChildNode(t, i, r);
    }, A.prototype.cloneNode = function(e, t) {
      if (Yc(e))
        return document.createTextNode(e.data);
      if (!e.ownerDocument)
        return e.cloneNode(!1);
      var r = e.ownerDocument.defaultView;
      if (r && yr(e) && (Mi(e) || $n(e))) {
        var o = this.createElementClone(e);
        o.style.transitionProperty = "none";
        var i = r.getComputedStyle(e), B = r.getComputedStyle(e, ":before"), a = r.getComputedStyle(e, ":after");
        this.referenceElement === e && Mi(o) && (this.clonedReferenceElement = o), ta(o) && Hw(o);
        var c = this.counters.parse(new os(this.context, i)), n = this.resolvePseudoContent(e, o, B, nn.BEFORE);
        Us(e) && (t = !0), Cs(e) || this.cloneChildNodes(e, o, t), n && o.insertBefore(n, o.firstChild);
        var s = this.resolvePseudoContent(e, o, a, nn.AFTER);
        return s && o.appendChild(s), this.counters.pop(c), (i && (this.options.copyStyles || $n(e)) && !zc(e) || t) && ii(i, o), (e.scrollTop !== 0 || e.scrollLeft !== 0) && this.scrolledElements.push([o, e.scrollLeft, e.scrollTop]), (ao(e) || so(e)) && (ao(o) || so(o)) && (o.value = e.value), o;
      }
      return e.cloneNode(!1);
    }, A.prototype.resolvePseudoContent = function(e, t, r, o) {
      var i = this;
      if (r) {
        var B = r.content, a = t.ownerDocument;
        if (!(!a || !B || B === "none" || B === "-moz-alt-content" || r.display === "none")) {
          this.counters.parse(new os(this.context, r));
          var c = new fh(this.context, r), n = a.createElement("html2canvaspseudoelement");
          ii(r, n), c.content.forEach(function(u) {
            if (u.type === 0)
              n.appendChild(a.createTextNode(u.value));
            else if (u.type === 22) {
              var f = a.createElement("img");
              f.src = u.value, f.style.opacity = "1", n.appendChild(f);
            } else if (u.type === 18) {
              if (u.name === "attr") {
                var l = u.values.filter(fe);
                l.length && n.appendChild(a.createTextNode(e.getAttribute(l[0].value) || ""));
              } else if (u.name === "counter") {
                var g = u.values.filter(Lr), p = g[0], w = g[1];
                if (p && fe(p)) {
                  var Q = i.counters.getCounterValue(p.value), v = w && fe(w) ? Di.parse(i.context, w.value) : 3;
                  n.appendChild(a.createTextNode(sn(Q, v, !1)));
                }
              } else if (u.name === "counters") {
                var y = u.values.filter(Lr), p = y[0], b = y[1], w = y[2];
                if (p && fe(p)) {
                  var O = i.counters.getCounterValues(p.value), I = w && fe(w) ? Di.parse(i.context, w.value) : 3, L = b && b.type === 0 ? b.value : "", N = O.map(function(V) {
                    return sn(V, I, !1);
                  }).join(L);
                  n.appendChild(a.createTextNode(N));
                }
              }
            } else if (u.type === 20)
              switch (u.value) {
                case "open-quote":
                  n.appendChild(a.createTextNode(ns(c.quotes, i.quoteDepth++, !0)));
                  break;
                case "close-quote":
                  n.appendChild(a.createTextNode(ns(c.quotes, --i.quoteDepth, !1)));
                  break;
                default:
                  n.appendChild(a.createTextNode(u.value));
              }
          }), n.className = Pi + " " + Gi;
          var s = o === nn.BEFORE ? " " + Pi : " " + Gi;
          return $n(t) ? t.className.baseValue += s : t.className += s, n;
        }
      }
    }, A.destroy = function(e) {
      return e.parentNode ? (e.parentNode.removeChild(e), !0) : !1;
    }, A;
  }()
), nn;
(function(A) {
  A[A.BEFORE = 0] = "BEFORE", A[A.AFTER = 1] = "AFTER";
})(nn || (nn = {}));
var Qw = function(A, e) {
  var t = A.createElement("iframe");
  return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = e.width.toString(), t.height = e.height.toString(), t.scrolling = "no", t.setAttribute(eu, "true"), A.body.appendChild(t), t;
}, Cw = function(A) {
  return new Promise(function(e) {
    if (A.complete) {
      e();
      return;
    }
    if (!A.src) {
      e();
      return;
    }
    A.onload = e, A.onerror = e;
  });
}, vw = function(A) {
  return Promise.all([].slice.call(A.images, 0).map(Cw));
}, Uw = function(A) {
  return new Promise(function(e, t) {
    var r = A.contentWindow;
    if (!r)
      return t("No window assigned for iframe");
    var o = r.document;
    r.onload = A.onload = function() {
      r.onload = A.onload = null;
      var i = setInterval(function() {
        o.body.childNodes.length > 0 && o.readyState === "complete" && (clearInterval(i), e(A));
      }, 50);
    };
  });
}, Fw = [
  "all",
  "d",
  "content"
  // Safari shows pseudoelements if content is set
], ii = function(A, e) {
  for (var t = A.length - 1; t >= 0; t--) {
    var r = A.item(t);
    Fw.indexOf(r) === -1 && e.style.setProperty(r, A.getPropertyValue(r));
  }
  return e;
}, yw = function(A) {
  var e = "";
  return A && (e += "<!DOCTYPE ", A.name && (e += A.name), A.internalSubset && (e += A.internalSubset), A.publicId && (e += '"' + A.publicId + '"'), A.systemId && (e += '"' + A.systemId + '"'), e += ">"), e;
}, mw = function(A, e, t) {
  A && A.defaultView && (e !== A.defaultView.pageXOffset || t !== A.defaultView.pageYOffset) && A.defaultView.scrollTo(e, t);
}, Ew = function(A) {
  var e = A[0], t = A[1], r = A[2];
  e.scrollLeft = t, e.scrollTop = r;
}, bw = ":before", Iw = ":after", Pi = "___html2canvas___pseudoelement_before", Gi = "___html2canvas___pseudoelement_after", Hs = `{
    content: "" !important;
    display: none !important;
}`, Hw = function(A) {
  Sw(A, "." + Pi + bw + Hs + `
         .` + Gi + Iw + Hs);
}, Sw = function(A, e) {
  var t = A.ownerDocument;
  if (t) {
    var r = t.createElement("style");
    r.textContent = e, A.appendChild(r);
  }
}, tu = (
  /** @class */
  function() {
    function A() {
    }
    return A.getOrigin = function(e) {
      var t = A._link;
      return t ? (t.href = e, t.href = t.href, t.protocol + t.hostname + t.port) : "about:blank";
    }, A.isSameOrigin = function(e) {
      return A.getOrigin(e) === A._origin;
    }, A.setContext = function(e) {
      A._link = e.document.createElement("a"), A._origin = A.getOrigin(e.location.href);
    }, A._origin = "about:blank", A;
  }()
), xw = (
  /** @class */
  function() {
    function A(e, t) {
      this.context = e, this._options = t, this._cache = {};
    }
    return A.prototype.addImage = function(e) {
      var t = Promise.resolve();
      return this.has(e) || (si(e) || Dw(e)) && (this._cache[e] = this.loadImage(e)).catch(function() {
      }), t;
    }, A.prototype.match = function(e) {
      return this._cache[e];
    }, A.prototype.loadImage = function(e) {
      return Ze(this, void 0, void 0, function() {
        var t, r, o, i, B = this;
        return je(this, function(a) {
          switch (a.label) {
            case 0:
              return t = tu.isSameOrigin(e), r = !ai(e) && this._options.useCORS === !0 && Ge.SUPPORT_CORS_IMAGES && !t, o = !ai(e) && !t && !si(e) && typeof this._options.proxy == "string" && Ge.SUPPORT_CORS_XHR && !r, !t && this._options.allowTaint === !1 && !ai(e) && !si(e) && !o && !r ? [
                2
                /*return*/
              ] : (i = e, o ? [4, this.proxy(i)] : [3, 2]);
            case 1:
              i = a.sent(), a.label = 2;
            case 2:
              return this.context.logger.debug("Added image " + e.substring(0, 256)), [4, new Promise(function(c, n) {
                var s = new Image();
                s.onload = function() {
                  return c(s);
                }, s.onerror = n, (Tw(i) || r) && (s.crossOrigin = "anonymous"), s.src = i, s.complete === !0 && setTimeout(function() {
                  return c(s);
                }, 500), B._options.imageTimeout > 0 && setTimeout(function() {
                  return n("Timed out (" + B._options.imageTimeout + "ms) loading image");
                }, B._options.imageTimeout);
              })];
            case 3:
              return [2, a.sent()];
          }
        });
      });
    }, A.prototype.has = function(e) {
      return typeof this._cache[e] < "u";
    }, A.prototype.keys = function() {
      return Promise.resolve(Object.keys(this._cache));
    }, A.prototype.proxy = function(e) {
      var t = this, r = this._options.proxy;
      if (!r)
        throw new Error("No proxy defined");
      var o = e.substring(0, 256);
      return new Promise(function(i, B) {
        var a = Ge.SUPPORT_RESPONSE_TYPE ? "blob" : "text", c = new XMLHttpRequest();
        c.onload = function() {
          if (c.status === 200)
            if (a === "text")
              i(c.response);
            else {
              var u = new FileReader();
              u.addEventListener("load", function() {
                return i(u.result);
              }, !1), u.addEventListener("error", function(f) {
                return B(f);
              }, !1), u.readAsDataURL(c.response);
            }
          else
            B("Failed to proxy resource " + o + " with status code " + c.status);
        }, c.onerror = B;
        var n = r.indexOf("?") > -1 ? "&" : "?";
        if (c.open("GET", "" + r + n + "url=" + encodeURIComponent(e) + "&responseType=" + a), a !== "text" && c instanceof XMLHttpRequest && (c.responseType = a), t._options.imageTimeout) {
          var s = t._options.imageTimeout;
          c.timeout = s, c.ontimeout = function() {
            return B("Timed out (" + s + "ms) proxying " + o);
          };
        }
        c.send();
      });
    }, A;
  }()
), Lw = /^data:image\/svg\+xml/i, Ow = /^data:image\/.*;base64,/i, Kw = /^data:image\/.*/i, Dw = function(A) {
  return Ge.SUPPORT_SVG_DRAWING || !_w(A);
}, ai = function(A) {
  return Kw.test(A);
}, Tw = function(A) {
  return Ow.test(A);
}, si = function(A) {
  return A.substr(0, 4) === "blob";
}, _w = function(A) {
  return A.substr(-3).toLowerCase() === "svg" || Lw.test(A);
}, CA = (
  /** @class */
  function() {
    function A(e, t) {
      this.type = 0, this.x = e, this.y = t;
    }
    return A.prototype.add = function(e, t) {
      return new A(this.x + e, this.y + t);
    }, A;
  }()
), Cr = function(A, e, t) {
  return new CA(A.x + (e.x - A.x) * t, A.y + (e.y - A.y) * t);
}, Rn = (
  /** @class */
  function() {
    function A(e, t, r, o) {
      this.type = 1, this.start = e, this.startControl = t, this.endControl = r, this.end = o;
    }
    return A.prototype.subdivide = function(e, t) {
      var r = Cr(this.start, this.startControl, e), o = Cr(this.startControl, this.endControl, e), i = Cr(this.endControl, this.end, e), B = Cr(r, o, e), a = Cr(o, i, e), c = Cr(B, a, e);
      return t ? new A(this.start, r, B, c) : new A(c, a, i, this.end);
    }, A.prototype.add = function(e, t) {
      return new A(this.start.add(e, t), this.startControl.add(e, t), this.endControl.add(e, t), this.end.add(e, t));
    }, A.prototype.reverse = function() {
      return new A(this.end, this.endControl, this.startControl, this.start);
    }, A;
  }()
), ct = function(A) {
  return A.type === 1;
}, Rw = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e) {
      var t = e.styles, r = e.bounds, o = Zr(t.borderTopLeftRadius, r.width, r.height), i = o[0], B = o[1], a = Zr(t.borderTopRightRadius, r.width, r.height), c = a[0], n = a[1], s = Zr(t.borderBottomRightRadius, r.width, r.height), u = s[0], f = s[1], l = Zr(t.borderBottomLeftRadius, r.width, r.height), g = l[0], p = l[1], w = [];
      w.push((i + c) / r.width), w.push((g + u) / r.width), w.push((B + p) / r.height), w.push((n + f) / r.height);
      var Q = Math.max.apply(Math, w);
      Q > 1 && (i /= Q, B /= Q, c /= Q, n /= Q, u /= Q, f /= Q, g /= Q, p /= Q);
      var v = r.width - c, y = r.height - f, b = r.width - u, O = r.height - p, I = t.borderTopWidth, L = t.borderRightWidth, N = t.borderBottomWidth, H = t.borderLeftWidth, j = we(t.paddingTop, e.bounds.width), V = we(t.paddingRight, e.bounds.width), X = we(t.paddingBottom, e.bounds.width), x = we(t.paddingLeft, e.bounds.width);
      this.topLeftBorderDoubleOuterBox = i > 0 || B > 0 ? Ce(r.left + H / 3, r.top + I / 3, i - H / 3, B - I / 3, ne.TOP_LEFT) : new CA(r.left + H / 3, r.top + I / 3), this.topRightBorderDoubleOuterBox = i > 0 || B > 0 ? Ce(r.left + v, r.top + I / 3, c - L / 3, n - I / 3, ne.TOP_RIGHT) : new CA(r.left + r.width - L / 3, r.top + I / 3), this.bottomRightBorderDoubleOuterBox = u > 0 || f > 0 ? Ce(r.left + b, r.top + y, u - L / 3, f - N / 3, ne.BOTTOM_RIGHT) : new CA(r.left + r.width - L / 3, r.top + r.height - N / 3), this.bottomLeftBorderDoubleOuterBox = g > 0 || p > 0 ? Ce(r.left + H / 3, r.top + O, g - H / 3, p - N / 3, ne.BOTTOM_LEFT) : new CA(r.left + H / 3, r.top + r.height - N / 3), this.topLeftBorderDoubleInnerBox = i > 0 || B > 0 ? Ce(r.left + H * 2 / 3, r.top + I * 2 / 3, i - H * 2 / 3, B - I * 2 / 3, ne.TOP_LEFT) : new CA(r.left + H * 2 / 3, r.top + I * 2 / 3), this.topRightBorderDoubleInnerBox = i > 0 || B > 0 ? Ce(r.left + v, r.top + I * 2 / 3, c - L * 2 / 3, n - I * 2 / 3, ne.TOP_RIGHT) : new CA(r.left + r.width - L * 2 / 3, r.top + I * 2 / 3), this.bottomRightBorderDoubleInnerBox = u > 0 || f > 0 ? Ce(r.left + b, r.top + y, u - L * 2 / 3, f - N * 2 / 3, ne.BOTTOM_RIGHT) : new CA(r.left + r.width - L * 2 / 3, r.top + r.height - N * 2 / 3), this.bottomLeftBorderDoubleInnerBox = g > 0 || p > 0 ? Ce(r.left + H * 2 / 3, r.top + O, g - H * 2 / 3, p - N * 2 / 3, ne.BOTTOM_LEFT) : new CA(r.left + H * 2 / 3, r.top + r.height - N * 2 / 3), this.topLeftBorderStroke = i > 0 || B > 0 ? Ce(r.left + H / 2, r.top + I / 2, i - H / 2, B - I / 2, ne.TOP_LEFT) : new CA(r.left + H / 2, r.top + I / 2), this.topRightBorderStroke = i > 0 || B > 0 ? Ce(r.left + v, r.top + I / 2, c - L / 2, n - I / 2, ne.TOP_RIGHT) : new CA(r.left + r.width - L / 2, r.top + I / 2), this.bottomRightBorderStroke = u > 0 || f > 0 ? Ce(r.left + b, r.top + y, u - L / 2, f - N / 2, ne.BOTTOM_RIGHT) : new CA(r.left + r.width - L / 2, r.top + r.height - N / 2), this.bottomLeftBorderStroke = g > 0 || p > 0 ? Ce(r.left + H / 2, r.top + O, g - H / 2, p - N / 2, ne.BOTTOM_LEFT) : new CA(r.left + H / 2, r.top + r.height - N / 2), this.topLeftBorderBox = i > 0 || B > 0 ? Ce(r.left, r.top, i, B, ne.TOP_LEFT) : new CA(r.left, r.top), this.topRightBorderBox = c > 0 || n > 0 ? Ce(r.left + v, r.top, c, n, ne.TOP_RIGHT) : new CA(r.left + r.width, r.top), this.bottomRightBorderBox = u > 0 || f > 0 ? Ce(r.left + b, r.top + y, u, f, ne.BOTTOM_RIGHT) : new CA(r.left + r.width, r.top + r.height), this.bottomLeftBorderBox = g > 0 || p > 0 ? Ce(r.left, r.top + O, g, p, ne.BOTTOM_LEFT) : new CA(r.left, r.top + r.height), this.topLeftPaddingBox = i > 0 || B > 0 ? Ce(r.left + H, r.top + I, Math.max(0, i - H), Math.max(0, B - I), ne.TOP_LEFT) : new CA(r.left + H, r.top + I), this.topRightPaddingBox = c > 0 || n > 0 ? Ce(r.left + Math.min(v, r.width - L), r.top + I, v > r.width + L ? 0 : Math.max(0, c - L), Math.max(0, n - I), ne.TOP_RIGHT) : new CA(r.left + r.width - L, r.top + I), this.bottomRightPaddingBox = u > 0 || f > 0 ? Ce(r.left + Math.min(b, r.width - H), r.top + Math.min(y, r.height - N), Math.max(0, u - L), Math.max(0, f - N), ne.BOTTOM_RIGHT) : new CA(r.left + r.width - L, r.top + r.height - N), this.bottomLeftPaddingBox = g > 0 || p > 0 ? Ce(r.left + H, r.top + Math.min(O, r.height - N), Math.max(0, g - H), Math.max(0, p - N), ne.BOTTOM_LEFT) : new CA(r.left + H, r.top + r.height - N), this.topLeftContentBox = i > 0 || B > 0 ? Ce(r.left + H + x, r.top + I + j, Math.max(0, i - (H + x)), Math.max(0, B - (I + j)), ne.TOP_LEFT) : new CA(r.left + H + x, r.top + I + j), this.topRightContentBox = c > 0 || n > 0 ? Ce(r.left + Math.min(v, r.width + H + x), r.top + I + j, v > r.width + H + x ? 0 : c - H + x, n - (I + j), ne.TOP_RIGHT) : new CA(r.left + r.width - (L + V), r.top + I + j), this.bottomRightContentBox = u > 0 || f > 0 ? Ce(r.left + Math.min(b, r.width - (H + x)), r.top + Math.min(y, r.height + I + j), Math.max(0, u - (L + V)), f - (N + X), ne.BOTTOM_RIGHT) : new CA(r.left + r.width - (L + V), r.top + r.height - (N + X)), this.bottomLeftContentBox = g > 0 || p > 0 ? Ce(r.left + H + x, r.top + O, Math.max(0, g - (H + x)), p - (N + X), ne.BOTTOM_LEFT) : new CA(r.left + H + x, r.top + r.height - (N + X));
    }
    return A;
  }()
), ne;
(function(A) {
  A[A.TOP_LEFT = 0] = "TOP_LEFT", A[A.TOP_RIGHT = 1] = "TOP_RIGHT", A[A.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", A[A.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
})(ne || (ne = {}));
var Ce = function(A, e, t, r, o) {
  var i = 4 * ((Math.sqrt(2) - 1) / 3), B = t * i, a = r * i, c = A + t, n = e + r;
  switch (o) {
    case ne.TOP_LEFT:
      return new Rn(new CA(A, n), new CA(A, n - a), new CA(c - B, e), new CA(c, e));
    case ne.TOP_RIGHT:
      return new Rn(new CA(A, e), new CA(A + B, e), new CA(c, n - a), new CA(c, n));
    case ne.BOTTOM_RIGHT:
      return new Rn(new CA(c, e), new CA(c, e + a), new CA(A + B, n), new CA(A, n));
    case ne.BOTTOM_LEFT:
    default:
      return new Rn(new CA(c, n), new CA(c - B, n), new CA(A, e + a), new CA(A, e));
  }
}, co = function(A) {
  return [A.topLeftBorderBox, A.topRightBorderBox, A.bottomRightBorderBox, A.bottomLeftBorderBox];
}, Mw = function(A) {
  return [
    A.topLeftContentBox,
    A.topRightContentBox,
    A.bottomRightContentBox,
    A.bottomLeftContentBox
  ];
}, uo = function(A) {
  return [
    A.topLeftPaddingBox,
    A.topRightPaddingBox,
    A.bottomRightPaddingBox,
    A.bottomLeftPaddingBox
  ];
}, Nw = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t, r) {
      this.offsetX = e, this.offsetY = t, this.matrix = r, this.type = 0, this.target = 6;
    }
    return A;
  }()
), Mn = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      this.path = e, this.target = t, this.type = 1;
    }
    return A;
  }()
), Pw = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e) {
      this.opacity = e, this.type = 2, this.target = 6;
    }
    return A;
  }()
), Gw = function(A) {
  return A.type === 0;
}, ru = function(A) {
  return A.type === 1;
}, Vw = function(A) {
  return A.type === 2;
}, Ss = function(A, e) {
  return A.length === e.length ? A.some(function(t, r) {
    return t === e[r];
  }) : !1;
}, kw = function(A, e, t, r, o) {
  return A.map(function(i, B) {
    switch (B) {
      case 0:
        return i.add(e, t);
      case 1:
        return i.add(e + r, t);
      case 2:
        return i.add(e + r, t + o);
      case 3:
        return i.add(e, t + o);
    }
    return i;
  });
}, nu = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e) {
      this.element = e, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
    }
    return A;
  }()
), ou = (
  /** @class */
  function() {
    function A(e, t) {
      if (this.container = e, this.parent = t, this.effects = [], this.curves = new Rw(this.container), this.container.styles.opacity < 1 && this.effects.push(new Pw(this.container.styles.opacity)), this.container.styles.transform !== null) {
        var r = this.container.bounds.left + this.container.styles.transformOrigin[0].number, o = this.container.bounds.top + this.container.styles.transformOrigin[1].number, i = this.container.styles.transform;
        this.effects.push(new Nw(r, o, i));
      }
      if (this.container.styles.overflowX !== 0) {
        var B = co(this.curves), a = uo(this.curves);
        Ss(B, a) ? this.effects.push(new Mn(
          B,
          6
          /* CONTENT */
        )) : (this.effects.push(new Mn(
          B,
          2
          /* BACKGROUND_BORDERS */
        )), this.effects.push(new Mn(
          a,
          4
          /* CONTENT */
        )));
      }
    }
    return A.prototype.getEffects = function(e) {
      for (var t = [
        2,
        3
        /* FIXED */
      ].indexOf(this.container.styles.position) === -1, r = this.parent, o = this.effects.slice(0); r; ) {
        var i = r.effects.filter(function(c) {
          return !ru(c);
        });
        if (t || r.container.styles.position !== 0 || !r.parent) {
          if (o.unshift.apply(o, i), t = [
            2,
            3
            /* FIXED */
          ].indexOf(r.container.styles.position) === -1, r.container.styles.overflowX !== 0) {
            var B = co(r.curves), a = uo(r.curves);
            Ss(B, a) || o.unshift(new Mn(
              a,
              6
              /* CONTENT */
            ));
          }
        } else
          o.unshift.apply(o, i);
        r = r.parent;
      }
      return o.filter(function(c) {
        return Ke(c.target, e);
      });
    }, A;
  }()
), Vi = function(A, e, t, r) {
  A.container.elements.forEach(function(o) {
    var i = Ke(
      o.flags,
      4
      /* CREATES_REAL_STACKING_CONTEXT */
    ), B = Ke(
      o.flags,
      2
      /* CREATES_STACKING_CONTEXT */
    ), a = new ou(o, A);
    Ke(
      o.styles.display,
      2048
      /* LIST_ITEM */
    ) && r.push(a);
    var c = Ke(
      o.flags,
      8
      /* IS_LIST_OWNER */
    ) ? [] : r;
    if (i || B) {
      var n = i || o.styles.isPositioned() ? t : e, s = new nu(a);
      if (o.styles.isPositioned() || o.styles.opacity < 1 || o.styles.isTransformed()) {
        var u = o.styles.zIndex.order;
        if (u < 0) {
          var f = 0;
          n.negativeZIndex.some(function(g, p) {
            return u > g.element.container.styles.zIndex.order ? (f = p, !1) : f > 0;
          }), n.negativeZIndex.splice(f, 0, s);
        } else if (u > 0) {
          var l = 0;
          n.positiveZIndex.some(function(g, p) {
            return u >= g.element.container.styles.zIndex.order ? (l = p + 1, !1) : l > 0;
          }), n.positiveZIndex.splice(l, 0, s);
        } else
          n.zeroOrAutoZIndexOrTransformedOrOpacity.push(s);
      } else
        o.styles.isFloating() ? n.nonPositionedFloats.push(s) : n.nonPositionedInlineLevel.push(s);
      Vi(a, s, i ? s : t, c);
    } else
      o.styles.isInlineLevel() ? e.inlineLevel.push(a) : e.nonInlineLevel.push(a), Vi(a, e, t, c);
    Ke(
      o.flags,
      8
      /* IS_LIST_OWNER */
    ) && iu(o, c);
  });
}, iu = function(A, e) {
  for (var t = A instanceof Ri ? A.start : 1, r = A instanceof Ri ? A.reversed : !1, o = 0; o < e.length; o++) {
    var i = e[o];
    i.container instanceof Vc && typeof i.container.value == "number" && i.container.value !== 0 && (t = i.container.value), i.listValue = sn(t, i.container.styles.listStyleType, !0), t += r ? -1 : 1;
  }
}, jw = function(A) {
  var e = new ou(A, null), t = new nu(e), r = [];
  return Vi(e, t, t, r), iu(e.container, r), t;
}, xs = function(A, e) {
  switch (e) {
    case 0:
      return Bt(A.topLeftBorderBox, A.topLeftPaddingBox, A.topRightBorderBox, A.topRightPaddingBox);
    case 1:
      return Bt(A.topRightBorderBox, A.topRightPaddingBox, A.bottomRightBorderBox, A.bottomRightPaddingBox);
    case 2:
      return Bt(A.bottomRightBorderBox, A.bottomRightPaddingBox, A.bottomLeftBorderBox, A.bottomLeftPaddingBox);
    case 3:
    default:
      return Bt(A.bottomLeftBorderBox, A.bottomLeftPaddingBox, A.topLeftBorderBox, A.topLeftPaddingBox);
  }
}, Xw = function(A, e) {
  switch (e) {
    case 0:
      return Bt(A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox, A.topRightBorderBox, A.topRightBorderDoubleOuterBox);
    case 1:
      return Bt(A.topRightBorderBox, A.topRightBorderDoubleOuterBox, A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox);
    case 2:
      return Bt(A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox, A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox);
    case 3:
    default:
      return Bt(A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox, A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox);
  }
}, Jw = function(A, e) {
  switch (e) {
    case 0:
      return Bt(A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox, A.topRightBorderDoubleInnerBox, A.topRightPaddingBox);
    case 1:
      return Bt(A.topRightBorderDoubleInnerBox, A.topRightPaddingBox, A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox);
    case 2:
      return Bt(A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox, A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox);
    case 3:
    default:
      return Bt(A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox, A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox);
  }
}, Ww = function(A, e) {
  switch (e) {
    case 0:
      return Nn(A.topLeftBorderStroke, A.topRightBorderStroke);
    case 1:
      return Nn(A.topRightBorderStroke, A.bottomRightBorderStroke);
    case 2:
      return Nn(A.bottomRightBorderStroke, A.bottomLeftBorderStroke);
    case 3:
    default:
      return Nn(A.bottomLeftBorderStroke, A.topLeftBorderStroke);
  }
}, Nn = function(A, e) {
  var t = [];
  return ct(A) ? t.push(A.subdivide(0.5, !1)) : t.push(A), ct(e) ? t.push(e.subdivide(0.5, !0)) : t.push(e), t;
}, Bt = function(A, e, t, r) {
  var o = [];
  return ct(A) ? o.push(A.subdivide(0.5, !1)) : o.push(A), ct(t) ? o.push(t.subdivide(0.5, !0)) : o.push(t), ct(r) ? o.push(r.subdivide(0.5, !0).reverse()) : o.push(r), ct(e) ? o.push(e.subdivide(0.5, !1).reverse()) : o.push(e), o;
}, au = function(A) {
  var e = A.bounds, t = A.styles;
  return e.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
}, fo = function(A) {
  var e = A.styles, t = A.bounds, r = we(e.paddingLeft, t.width), o = we(e.paddingRight, t.width), i = we(e.paddingTop, t.width), B = we(e.paddingBottom, t.width);
  return t.add(r + e.borderLeftWidth, i + e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth + r + o), -(e.borderTopWidth + e.borderBottomWidth + i + B));
}, Yw = function(A, e) {
  return A === 0 ? e.bounds : A === 2 ? fo(e) : au(e);
}, Zw = function(A, e) {
  return A === 0 ? e.bounds : A === 2 ? fo(e) : au(e);
}, ci = function(A, e, t) {
  var r = Yw(Fr(A.styles.backgroundOrigin, e), A), o = Zw(Fr(A.styles.backgroundClip, e), A), i = $w(Fr(A.styles.backgroundSize, e), t, r), B = i[0], a = i[1], c = Zr(Fr(A.styles.backgroundPosition, e), r.width - B, r.height - a), n = zw(Fr(A.styles.backgroundRepeat, e), c, i, r, o), s = Math.round(r.left + c[0]), u = Math.round(r.top + c[1]);
  return [n, s, u, B, a];
}, vr = function(A) {
  return fe(A) && A.value === mr.AUTO;
}, Pn = function(A) {
  return typeof A == "number";
}, $w = function(A, e, t) {
  var r = e[0], o = e[1], i = e[2], B = A[0], a = A[1];
  if (!B)
    return [0, 0];
  if (xe(B) && a && xe(a))
    return [we(B, t.width), we(a, t.height)];
  var c = Pn(i);
  if (fe(B) && (B.value === mr.CONTAIN || B.value === mr.COVER)) {
    if (Pn(i)) {
      var n = t.width / t.height;
      return n < i != (B.value === mr.COVER) ? [t.width, t.width / i] : [t.height * i, t.height];
    }
    return [t.width, t.height];
  }
  var s = Pn(r), u = Pn(o), f = s || u;
  if (vr(B) && (!a || vr(a))) {
    if (s && u)
      return [r, o];
    if (!c && !f)
      return [t.width, t.height];
    if (f && c) {
      var l = s ? r : o * i, g = u ? o : r / i;
      return [l, g];
    }
    var p = s ? r : t.width, w = u ? o : t.height;
    return [p, w];
  }
  if (c) {
    var Q = 0, v = 0;
    return xe(B) ? Q = we(B, t.width) : xe(a) && (v = we(a, t.height)), vr(B) ? Q = v * i : (!a || vr(a)) && (v = Q / i), [Q, v];
  }
  var y = null, b = null;
  if (xe(B) ? y = we(B, t.width) : a && xe(a) && (b = we(a, t.height)), y !== null && (!a || vr(a)) && (b = s && u ? y / r * o : t.height), b !== null && vr(B) && (y = s && u ? b / o * r : t.width), y !== null && b !== null)
    return [y, b];
  throw new Error("Unable to calculate background-size for element");
}, Fr = function(A, e) {
  var t = A[e];
  return typeof t > "u" ? A[0] : t;
}, zw = function(A, e, t, r, o) {
  var i = e[0], B = e[1], a = t[0], c = t[1];
  switch (A) {
    case 2:
      return [
        new CA(Math.round(r.left), Math.round(r.top + B)),
        new CA(Math.round(r.left + r.width), Math.round(r.top + B)),
        new CA(Math.round(r.left + r.width), Math.round(c + r.top + B)),
        new CA(Math.round(r.left), Math.round(c + r.top + B))
      ];
    case 3:
      return [
        new CA(Math.round(r.left + i), Math.round(r.top)),
        new CA(Math.round(r.left + i + a), Math.round(r.top)),
        new CA(Math.round(r.left + i + a), Math.round(r.height + r.top)),
        new CA(Math.round(r.left + i), Math.round(r.height + r.top))
      ];
    case 1:
      return [
        new CA(Math.round(r.left + i), Math.round(r.top + B)),
        new CA(Math.round(r.left + i + a), Math.round(r.top + B)),
        new CA(Math.round(r.left + i + a), Math.round(r.top + B + c)),
        new CA(Math.round(r.left + i), Math.round(r.top + B + c))
      ];
    default:
      return [
        new CA(Math.round(o.left), Math.round(o.top)),
        new CA(Math.round(o.left + o.width), Math.round(o.top)),
        new CA(Math.round(o.left + o.width), Math.round(o.height + o.top)),
        new CA(Math.round(o.left), Math.round(o.height + o.top))
      ];
  }
}, qw = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", Ls = "Hidden Text", Ad = (
  /** @class */
  function() {
    function A(e) {
      this._data = {}, this._document = e;
    }
    return A.prototype.parseMetrics = function(e, t) {
      var r = this._document.createElement("div"), o = this._document.createElement("img"), i = this._document.createElement("span"), B = this._document.body;
      r.style.visibility = "hidden", r.style.fontFamily = e, r.style.fontSize = t, r.style.margin = "0", r.style.padding = "0", r.style.whiteSpace = "nowrap", B.appendChild(r), o.src = qw, o.width = 1, o.height = 1, o.style.margin = "0", o.style.padding = "0", o.style.verticalAlign = "baseline", i.style.fontFamily = e, i.style.fontSize = t, i.style.margin = "0", i.style.padding = "0", i.appendChild(this._document.createTextNode(Ls)), r.appendChild(i), r.appendChild(o);
      var a = o.offsetTop - i.offsetTop + 2;
      r.removeChild(i), r.appendChild(this._document.createTextNode(Ls)), r.style.lineHeight = "normal", o.style.verticalAlign = "super";
      var c = o.offsetTop - r.offsetTop + 2;
      return B.removeChild(r), { baseline: a, middle: c };
    }, A.prototype.getMetrics = function(e, t) {
      var r = e + " " + t;
      return typeof this._data[r] > "u" && (this._data[r] = this.parseMetrics(e, t)), this._data[r];
    }, A;
  }()
), su = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      this.context = e, this.options = t;
    }
    return A;
  }()
), ed = 1e4, td = (
  /** @class */
  function(A) {
    vt(e, A);
    function e(t, r) {
      var o = A.call(this, t, r) || this;
      return o._activeEffects = [], o.canvas = r.canvas ? r.canvas : document.createElement("canvas"), o.ctx = o.canvas.getContext("2d"), r.canvas || (o.canvas.width = Math.floor(r.width * r.scale), o.canvas.height = Math.floor(r.height * r.scale), o.canvas.style.width = r.width + "px", o.canvas.style.height = r.height + "px"), o.fontMetrics = new Ad(document), o.ctx.scale(o.options.scale, o.options.scale), o.ctx.translate(-r.x, -r.y), o.ctx.textBaseline = "bottom", o._activeEffects = [], o.context.logger.debug("Canvas renderer initialized (" + r.width + "x" + r.height + ") with scale " + r.scale), o;
    }
    return e.prototype.applyEffects = function(t) {
      for (var r = this; this._activeEffects.length; )
        this.popEffect();
      t.forEach(function(o) {
        return r.applyEffect(o);
      });
    }, e.prototype.applyEffect = function(t) {
      this.ctx.save(), Vw(t) && (this.ctx.globalAlpha = t.opacity), Gw(t) && (this.ctx.translate(t.offsetX, t.offsetY), this.ctx.transform(t.matrix[0], t.matrix[1], t.matrix[2], t.matrix[3], t.matrix[4], t.matrix[5]), this.ctx.translate(-t.offsetX, -t.offsetY)), ru(t) && (this.path(t.path), this.ctx.clip()), this._activeEffects.push(t);
    }, e.prototype.popEffect = function() {
      this._activeEffects.pop(), this.ctx.restore();
    }, e.prototype.renderStack = function(t) {
      return Ze(this, void 0, void 0, function() {
        var r;
        return je(this, function(o) {
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
    }, e.prototype.renderNode = function(t) {
      return Ze(this, void 0, void 0, function() {
        return je(this, function(r) {
          switch (r.label) {
            case 0:
              if (Ke(
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
    }, e.prototype.renderTextWithLetterSpacing = function(t, r, o) {
      var i = this;
      if (r === 0)
        this.ctx.fillText(t.text, t.bounds.left, t.bounds.top + o);
      else {
        var B = Aa(t.text);
        B.reduce(function(a, c) {
          return i.ctx.fillText(c, a, t.bounds.top + o), a + i.ctx.measureText(c).width;
        }, t.bounds.left);
      }
    }, e.prototype.createFontStyle = function(t) {
      var r = t.fontVariant.filter(function(B) {
        return B === "normal" || B === "small-caps";
      }).join(""), o = ad(t.fontFamily).join(", "), i = un(t.fontSize) ? "" + t.fontSize.number + t.fontSize.unit : t.fontSize.number + "px";
      return [
        [t.fontStyle, r, t.fontWeight, i, o].join(" "),
        o,
        i
      ];
    }, e.prototype.renderTextNode = function(t, r) {
      return Ze(this, void 0, void 0, function() {
        var o, i, B, a, c, n, s, u, f = this;
        return je(this, function(l) {
          return o = this.createFontStyle(r), i = o[0], B = o[1], a = o[2], this.ctx.font = i, this.ctx.direction = r.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", c = this.fontMetrics.getMetrics(B, a), n = c.baseline, s = c.middle, u = r.paintOrder, t.textBounds.forEach(function(g) {
            u.forEach(function(p) {
              switch (p) {
                case 0:
                  f.ctx.fillStyle = Re(r.color), f.renderTextWithLetterSpacing(g, r.letterSpacing, n);
                  var w = r.textShadow;
                  w.length && g.text.trim().length && (w.slice(0).reverse().forEach(function(Q) {
                    f.ctx.shadowColor = Re(Q.color), f.ctx.shadowOffsetX = Q.offsetX.number * f.options.scale, f.ctx.shadowOffsetY = Q.offsetY.number * f.options.scale, f.ctx.shadowBlur = Q.blur.number, f.renderTextWithLetterSpacing(g, r.letterSpacing, n);
                  }), f.ctx.shadowColor = "", f.ctx.shadowOffsetX = 0, f.ctx.shadowOffsetY = 0, f.ctx.shadowBlur = 0), r.textDecorationLine.length && (f.ctx.fillStyle = Re(r.textDecorationColor || r.color), r.textDecorationLine.forEach(function(Q) {
                    switch (Q) {
                      case 1:
                        f.ctx.fillRect(g.bounds.left, Math.round(g.bounds.top + n), g.bounds.width, 1);
                        break;
                      case 2:
                        f.ctx.fillRect(g.bounds.left, Math.round(g.bounds.top), g.bounds.width, 1);
                        break;
                      case 3:
                        f.ctx.fillRect(g.bounds.left, Math.ceil(g.bounds.top + s), g.bounds.width, 1);
                        break;
                    }
                  }));
                  break;
                case 1:
                  r.webkitTextStrokeWidth && g.text.trim().length && (f.ctx.strokeStyle = Re(r.webkitTextStrokeColor), f.ctx.lineWidth = r.webkitTextStrokeWidth, f.ctx.lineJoin = window.chrome ? "miter" : "round", f.ctx.strokeText(g.text, g.bounds.left, g.bounds.top + n)), f.ctx.strokeStyle = "", f.ctx.lineWidth = 0, f.ctx.lineJoin = "miter";
                  break;
              }
            });
          }), [
            2
            /*return*/
          ];
        });
      });
    }, e.prototype.renderReplacedElement = function(t, r, o) {
      if (o && t.intrinsicWidth > 0 && t.intrinsicHeight > 0) {
        var i = fo(t), B = uo(r);
        this.path(B), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(o, 0, 0, t.intrinsicWidth, t.intrinsicHeight, i.left, i.top, i.width, i.height), this.ctx.restore();
      }
    }, e.prototype.renderNodeContent = function(t) {
      return Ze(this, void 0, void 0, function() {
        var r, o, i, B, a, c, v, v, n, s, u, f, b, l, g, O, p, w, Q, v, y, b, O;
        return je(this, function(I) {
          switch (I.label) {
            case 0:
              this.applyEffects(t.getEffects(
                4
                /* CONTENT */
              )), r = t.container, o = t.curves, i = r.styles, B = 0, a = r.textNodes, I.label = 1;
            case 1:
              return B < a.length ? (c = a[B], [4, this.renderTextNode(c, i)]) : [3, 4];
            case 2:
              I.sent(), I.label = 3;
            case 3:
              return B++, [3, 1];
            case 4:
              if (!(r instanceof Nc))
                return [3, 8];
              I.label = 5;
            case 5:
              return I.trys.push([5, 7, , 8]), [4, this.context.cache.match(r.src)];
            case 6:
              return v = I.sent(), this.renderReplacedElement(r, o, v), [3, 8];
            case 7:
              return I.sent(), this.context.logger.error("Error loading image " + r.src), [3, 8];
            case 8:
              if (r instanceof Pc && this.renderReplacedElement(r, o, r.canvas), !(r instanceof Gc))
                return [3, 12];
              I.label = 9;
            case 9:
              return I.trys.push([9, 11, , 12]), [4, this.context.cache.match(r.svg)];
            case 10:
              return v = I.sent(), this.renderReplacedElement(r, o, v), [3, 12];
            case 11:
              return I.sent(), this.context.logger.error("Error loading svg " + r.svg.substring(0, 255)), [3, 12];
            case 12:
              return r instanceof Xc && r.tree ? (n = new e(this.context, {
                scale: this.options.scale,
                backgroundColor: r.backgroundColor,
                x: 0,
                y: 0,
                width: r.width,
                height: r.height
              }), [4, n.render(r.tree)]) : [3, 14];
            case 13:
              s = I.sent(), r.width && r.height && this.ctx.drawImage(s, 0, 0, r.width, r.height, r.bounds.left, r.bounds.top, r.bounds.width, r.bounds.height), I.label = 14;
            case 14:
              if (r instanceof ea && (u = Math.min(r.bounds.width, r.bounds.height), r.type === oo ? r.checked && (this.ctx.save(), this.path([
                new CA(r.bounds.left + u * 0.39363, r.bounds.top + u * 0.79),
                new CA(r.bounds.left + u * 0.16, r.bounds.top + u * 0.5549),
                new CA(r.bounds.left + u * 0.27347, r.bounds.top + u * 0.44071),
                new CA(r.bounds.left + u * 0.39694, r.bounds.top + u * 0.5649),
                new CA(r.bounds.left + u * 0.72983, r.bounds.top + u * 0.23),
                new CA(r.bounds.left + u * 0.84, r.bounds.top + u * 0.34085),
                new CA(r.bounds.left + u * 0.39363, r.bounds.top + u * 0.79)
              ]), this.ctx.fillStyle = Re(Qs), this.ctx.fill(), this.ctx.restore()) : r.type === io && r.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(r.bounds.left + u / 2, r.bounds.top + u / 2, u / 4, 0, Math.PI * 2, !0), this.ctx.fillStyle = Re(Qs), this.ctx.fill(), this.ctx.restore())), rd(r) && r.value.length) {
                switch (f = this.createFontStyle(i), b = f[0], l = f[1], g = this.fontMetrics.getMetrics(b, l).baseline, this.ctx.font = b, this.ctx.fillStyle = Re(i.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = od(r.styles.textAlign), O = fo(r), p = 0, r.styles.textAlign) {
                  case 1:
                    p += O.width / 2;
                    break;
                  case 2:
                    p += O.width;
                    break;
                }
                w = O.add(p, 0, 0, -O.height / 2 + 1), this.ctx.save(), this.path([
                  new CA(O.left, O.top),
                  new CA(O.left + O.width, O.top),
                  new CA(O.left + O.width, O.top + O.height),
                  new CA(O.left, O.top + O.height)
                ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new rn(r.value, w), i.letterSpacing, g), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
              }
              if (!Ke(
                r.styles.display,
                2048
                /* LIST_ITEM */
              ))
                return [3, 20];
              if (r.styles.listStyleImage === null)
                return [3, 19];
              if (Q = r.styles.listStyleImage, Q.type !== 0)
                return [3, 18];
              v = void 0, y = Q.url, I.label = 15;
            case 15:
              return I.trys.push([15, 17, , 18]), [4, this.context.cache.match(y)];
            case 16:
              return v = I.sent(), this.ctx.drawImage(v, r.bounds.left - (v.width + 10), r.bounds.top), [3, 18];
            case 17:
              return I.sent(), this.context.logger.error("Error loading list-style-image " + y), [3, 18];
            case 18:
              return [3, 20];
            case 19:
              t.listValue && r.styles.listStyleType !== -1 && (b = this.createFontStyle(i)[0], this.ctx.font = b, this.ctx.fillStyle = Re(i.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", O = new Tt(r.bounds.left, r.bounds.top + we(r.styles.paddingTop, r.bounds.width), r.bounds.width, ts(i.lineHeight, i.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new rn(t.listValue, O), i.letterSpacing, ts(i.lineHeight, i.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), I.label = 20;
            case 20:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.renderStackContent = function(t) {
      return Ze(this, void 0, void 0, function() {
        var r, o, Q, i, B, Q, a, c, Q, n, s, Q, u, f, Q, l, g, Q, p, w, Q;
        return je(this, function(v) {
          switch (v.label) {
            case 0:
              if (Ke(
                t.element.container.flags,
                16
                /* DEBUG_RENDER */
              ))
                debugger;
              return [4, this.renderNodeBackgroundAndBorders(t.element)];
            case 1:
              v.sent(), r = 0, o = t.negativeZIndex, v.label = 2;
            case 2:
              return r < o.length ? (Q = o[r], [4, this.renderStack(Q)]) : [3, 5];
            case 3:
              v.sent(), v.label = 4;
            case 4:
              return r++, [3, 2];
            case 5:
              return [4, this.renderNodeContent(t.element)];
            case 6:
              v.sent(), i = 0, B = t.nonInlineLevel, v.label = 7;
            case 7:
              return i < B.length ? (Q = B[i], [4, this.renderNode(Q)]) : [3, 10];
            case 8:
              v.sent(), v.label = 9;
            case 9:
              return i++, [3, 7];
            case 10:
              a = 0, c = t.nonPositionedFloats, v.label = 11;
            case 11:
              return a < c.length ? (Q = c[a], [4, this.renderStack(Q)]) : [3, 14];
            case 12:
              v.sent(), v.label = 13;
            case 13:
              return a++, [3, 11];
            case 14:
              n = 0, s = t.nonPositionedInlineLevel, v.label = 15;
            case 15:
              return n < s.length ? (Q = s[n], [4, this.renderStack(Q)]) : [3, 18];
            case 16:
              v.sent(), v.label = 17;
            case 17:
              return n++, [3, 15];
            case 18:
              u = 0, f = t.inlineLevel, v.label = 19;
            case 19:
              return u < f.length ? (Q = f[u], [4, this.renderNode(Q)]) : [3, 22];
            case 20:
              v.sent(), v.label = 21;
            case 21:
              return u++, [3, 19];
            case 22:
              l = 0, g = t.zeroOrAutoZIndexOrTransformedOrOpacity, v.label = 23;
            case 23:
              return l < g.length ? (Q = g[l], [4, this.renderStack(Q)]) : [3, 26];
            case 24:
              v.sent(), v.label = 25;
            case 25:
              return l++, [3, 23];
            case 26:
              p = 0, w = t.positiveZIndex, v.label = 27;
            case 27:
              return p < w.length ? (Q = w[p], [4, this.renderStack(Q)]) : [3, 30];
            case 28:
              v.sent(), v.label = 29;
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
    }, e.prototype.mask = function(t) {
      this.ctx.beginPath(), this.ctx.moveTo(0, 0), this.ctx.lineTo(this.canvas.width, 0), this.ctx.lineTo(this.canvas.width, this.canvas.height), this.ctx.lineTo(0, this.canvas.height), this.ctx.lineTo(0, 0), this.formatPath(t.slice(0).reverse()), this.ctx.closePath();
    }, e.prototype.path = function(t) {
      this.ctx.beginPath(), this.formatPath(t), this.ctx.closePath();
    }, e.prototype.formatPath = function(t) {
      var r = this;
      t.forEach(function(o, i) {
        var B = ct(o) ? o.start : o;
        i === 0 ? r.ctx.moveTo(B.x, B.y) : r.ctx.lineTo(B.x, B.y), ct(o) && r.ctx.bezierCurveTo(o.startControl.x, o.startControl.y, o.endControl.x, o.endControl.y, o.end.x, o.end.y);
      });
    }, e.prototype.renderRepeat = function(t, r, o, i) {
      this.path(t), this.ctx.fillStyle = r, this.ctx.translate(o, i), this.ctx.fill(), this.ctx.translate(-o, -i);
    }, e.prototype.resizeImage = function(t, r, o) {
      var i;
      if (t.width === r && t.height === o)
        return t;
      var B = (i = this.canvas.ownerDocument) !== null && i !== void 0 ? i : document, a = B.createElement("canvas");
      a.width = Math.max(1, r), a.height = Math.max(1, o);
      var c = a.getContext("2d");
      return c.drawImage(t, 0, 0, t.width, t.height, 0, 0, r, o), a;
    }, e.prototype.renderBackgroundImage = function(t) {
      return Ze(this, void 0, void 0, function() {
        var r, o, i, B, a, c;
        return je(this, function(n) {
          switch (n.label) {
            case 0:
              r = t.styles.backgroundImage.length - 1, o = function(s) {
                var u, f, l, j, iA, rA, x, _, N, g, j, iA, rA, x, _, p, w, Q, v, y, b, O, I, L, N, H, j, V, X, x, _, Z, iA, rA, IA, HA, vA, mA, QA, gA, M, R;
                return je(this, function(W) {
                  switch (W.label) {
                    case 0:
                      if (s.type !== 0)
                        return [3, 5];
                      u = void 0, f = s.url, W.label = 1;
                    case 1:
                      return W.trys.push([1, 3, , 4]), [4, i.context.cache.match(f)];
                    case 2:
                      return u = W.sent(), [3, 4];
                    case 3:
                      return W.sent(), i.context.logger.error("Error loading background-image " + f), [3, 4];
                    case 4:
                      return u && (l = ci(t, r, [
                        u.width,
                        u.height,
                        u.width / u.height
                      ]), j = l[0], iA = l[1], rA = l[2], x = l[3], _ = l[4], N = i.ctx.createPattern(i.resizeImage(u, x, _), "repeat"), i.renderRepeat(j, N, iA, rA)), [3, 6];
                    case 5:
                      Gl(s) ? (g = ci(t, r, [null, null, null]), j = g[0], iA = g[1], rA = g[2], x = g[3], _ = g[4], p = _l(s.angle, x, _), w = p[0], Q = p[1], v = p[2], y = p[3], b = p[4], O = document.createElement("canvas"), O.width = x, O.height = _, I = O.getContext("2d"), L = I.createLinearGradient(Q, y, v, b), As(s.stops, w).forEach(function(uA) {
                        return L.addColorStop(uA.stop, Re(uA.color));
                      }), I.fillStyle = L, I.fillRect(0, 0, x, _), x > 0 && _ > 0 && (N = i.ctx.createPattern(O, "repeat"), i.renderRepeat(j, N, iA, rA))) : Vl(s) && (H = ci(t, r, [
                        null,
                        null,
                        null
                      ]), j = H[0], V = H[1], X = H[2], x = H[3], _ = H[4], Z = s.position.length === 0 ? [$i] : s.position, iA = we(Z[0], x), rA = we(Z[Z.length - 1], _), IA = Rl(s, iA, rA, x, _), HA = IA[0], vA = IA[1], HA > 0 && vA > 0 && (mA = i.ctx.createRadialGradient(V + iA, X + rA, 0, V + iA, X + rA, HA), As(s.stops, HA * 2).forEach(function(uA) {
                        return mA.addColorStop(uA.stop, Re(uA.color));
                      }), i.path(j), i.ctx.fillStyle = mA, HA !== vA ? (QA = t.bounds.left + 0.5 * t.bounds.width, gA = t.bounds.top + 0.5 * t.bounds.height, M = vA / HA, R = 1 / M, i.ctx.save(), i.ctx.translate(QA, gA), i.ctx.transform(1, 0, 0, M, 0, 0), i.ctx.translate(-QA, -gA), i.ctx.fillRect(V, R * (X - gA) + gA, x, _ * R), i.ctx.restore()) : i.ctx.fill())), W.label = 6;
                    case 6:
                      return r--, [
                        2
                        /*return*/
                      ];
                  }
                });
              }, i = this, B = 0, a = t.styles.backgroundImage.slice(0).reverse(), n.label = 1;
            case 1:
              return B < a.length ? (c = a[B], [5, o(c)]) : [3, 4];
            case 2:
              n.sent(), n.label = 3;
            case 3:
              return B++, [3, 1];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.renderSolidBorder = function(t, r, o) {
      return Ze(this, void 0, void 0, function() {
        return je(this, function(i) {
          return this.path(xs(o, r)), this.ctx.fillStyle = Re(t), this.ctx.fill(), [
            2
            /*return*/
          ];
        });
      });
    }, e.prototype.renderDoubleBorder = function(t, r, o, i) {
      return Ze(this, void 0, void 0, function() {
        var B, a;
        return je(this, function(c) {
          switch (c.label) {
            case 0:
              return r < 3 ? [4, this.renderSolidBorder(t, o, i)] : [3, 2];
            case 1:
              return c.sent(), [
                2
                /*return*/
              ];
            case 2:
              return B = Xw(i, o), this.path(B), this.ctx.fillStyle = Re(t), this.ctx.fill(), a = Jw(i, o), this.path(a), this.ctx.fill(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.renderNodeBackgroundAndBorders = function(t) {
      return Ze(this, void 0, void 0, function() {
        var r, o, i, B, a, c, n, s, u = this;
        return je(this, function(f) {
          switch (f.label) {
            case 0:
              return this.applyEffects(t.getEffects(
                2
                /* BACKGROUND_BORDERS */
              )), r = t.container.styles, o = !Xt(r.backgroundColor) || r.backgroundImage.length, i = [
                { style: r.borderTopStyle, color: r.borderTopColor, width: r.borderTopWidth },
                { style: r.borderRightStyle, color: r.borderRightColor, width: r.borderRightWidth },
                { style: r.borderBottomStyle, color: r.borderBottomColor, width: r.borderBottomWidth },
                { style: r.borderLeftStyle, color: r.borderLeftColor, width: r.borderLeftWidth }
              ], B = nd(Fr(r.backgroundClip, 0), t.curves), o || r.boxShadow.length ? (this.ctx.save(), this.path(B), this.ctx.clip(), Xt(r.backgroundColor) || (this.ctx.fillStyle = Re(r.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(t.container)]) : [3, 2];
            case 1:
              f.sent(), this.ctx.restore(), r.boxShadow.slice(0).reverse().forEach(function(l) {
                u.ctx.save();
                var g = co(t.curves), p = l.inset ? 0 : ed, w = kw(g, -p + (l.inset ? 1 : -1) * l.spread.number, (l.inset ? 1 : -1) * l.spread.number, l.spread.number * (l.inset ? -2 : 2), l.spread.number * (l.inset ? -2 : 2));
                l.inset ? (u.path(g), u.ctx.clip(), u.mask(w)) : (u.mask(g), u.ctx.clip(), u.path(w)), u.ctx.shadowOffsetX = l.offsetX.number + p, u.ctx.shadowOffsetY = l.offsetY.number, u.ctx.shadowColor = Re(l.color), u.ctx.shadowBlur = l.blur.number, u.ctx.fillStyle = l.inset ? Re(l.color) : "rgba(0,0,0,1)", u.ctx.fill(), u.ctx.restore();
              }), f.label = 2;
            case 2:
              a = 0, c = 0, n = i, f.label = 3;
            case 3:
              return c < n.length ? (s = n[c], s.style !== 0 && !Xt(s.color) && s.width > 0 ? s.style !== 2 ? [3, 5] : [4, this.renderDashedDottedBorder(
                s.color,
                s.width,
                a,
                t.curves,
                2
                /* DASHED */
              )] : [3, 11]) : [3, 13];
            case 4:
              return f.sent(), [3, 11];
            case 5:
              return s.style !== 3 ? [3, 7] : [4, this.renderDashedDottedBorder(
                s.color,
                s.width,
                a,
                t.curves,
                3
                /* DOTTED */
              )];
            case 6:
              return f.sent(), [3, 11];
            case 7:
              return s.style !== 4 ? [3, 9] : [4, this.renderDoubleBorder(s.color, s.width, a, t.curves)];
            case 8:
              return f.sent(), [3, 11];
            case 9:
              return [4, this.renderSolidBorder(s.color, a, t.curves)];
            case 10:
              f.sent(), f.label = 11;
            case 11:
              a++, f.label = 12;
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
    }, e.prototype.renderDashedDottedBorder = function(t, r, o, i, B) {
      return Ze(this, void 0, void 0, function() {
        var a, c, n, s, u, f, l, g, p, w, Q, v, y, b, O, I, O, I;
        return je(this, function(L) {
          return this.ctx.save(), a = Ww(i, o), c = xs(i, o), B === 2 && (this.path(c), this.ctx.clip()), ct(c[0]) ? (n = c[0].start.x, s = c[0].start.y) : (n = c[0].x, s = c[0].y), ct(c[1]) ? (u = c[1].end.x, f = c[1].end.y) : (u = c[1].x, f = c[1].y), o === 0 || o === 2 ? l = Math.abs(n - u) : l = Math.abs(s - f), this.ctx.beginPath(), B === 3 ? this.formatPath(a) : this.formatPath(c.slice(0, 2)), g = r < 3 ? r * 3 : r * 2, p = r < 3 ? r * 2 : r, B === 3 && (g = r, p = r), w = !0, l <= g * 2 ? w = !1 : l <= g * 2 + p ? (Q = l / (2 * g + p), g *= Q, p *= Q) : (v = Math.floor((l + p) / (g + p)), y = (l - v * g) / (v - 1), b = (l - (v + 1) * g) / v, p = b <= 0 || Math.abs(p - y) < Math.abs(p - b) ? y : b), w && (B === 3 ? this.ctx.setLineDash([0, g + p]) : this.ctx.setLineDash([g, p])), B === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = r) : this.ctx.lineWidth = r * 2 + 1.1, this.ctx.strokeStyle = Re(t), this.ctx.stroke(), this.ctx.setLineDash([]), B === 2 && (ct(c[0]) && (O = c[3], I = c[0], this.ctx.beginPath(), this.formatPath([new CA(O.end.x, O.end.y), new CA(I.start.x, I.start.y)]), this.ctx.stroke()), ct(c[1]) && (O = c[1], I = c[2], this.ctx.beginPath(), this.formatPath([new CA(O.end.x, O.end.y), new CA(I.start.x, I.start.y)]), this.ctx.stroke())), this.ctx.restore(), [
            2
            /*return*/
          ];
        });
      });
    }, e.prototype.render = function(t) {
      return Ze(this, void 0, void 0, function() {
        var r;
        return je(this, function(o) {
          switch (o.label) {
            case 0:
              return this.options.backgroundColor && (this.ctx.fillStyle = Re(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), r = jw(t), [4, this.renderStack(r)];
            case 1:
              return o.sent(), this.applyEffects([]), [2, this.canvas];
          }
        });
      });
    }, e;
  }(su)
), rd = function(A) {
  return A instanceof jc || A instanceof kc ? !0 : A instanceof ea && A.type !== io && A.type !== oo;
}, nd = function(A, e) {
  switch (A) {
    case 0:
      return co(e);
    case 2:
      return Mw(e);
    case 1:
    default:
      return uo(e);
  }
}, od = function(A) {
  switch (A) {
    case 1:
      return "center";
    case 2:
      return "right";
    case 0:
    default:
      return "left";
  }
}, id = ["-apple-system", "system-ui"], ad = function(A) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? A.filter(function(e) {
    return id.indexOf(e) === -1;
  }) : A;
}, sd = (
  /** @class */
  function(A) {
    vt(e, A);
    function e(t, r) {
      var o = A.call(this, t, r) || this;
      return o.canvas = r.canvas ? r.canvas : document.createElement("canvas"), o.ctx = o.canvas.getContext("2d"), o.options = r, o.canvas.width = Math.floor(r.width * r.scale), o.canvas.height = Math.floor(r.height * r.scale), o.canvas.style.width = r.width + "px", o.canvas.style.height = r.height + "px", o.ctx.scale(o.options.scale, o.options.scale), o.ctx.translate(-r.x, -r.y), o.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + r.width + "x" + r.height + " at " + r.x + "," + r.y + ") with scale " + r.scale), o;
    }
    return e.prototype.render = function(t) {
      return Ze(this, void 0, void 0, function() {
        var r, o;
        return je(this, function(i) {
          switch (i.label) {
            case 0:
              return r = _i(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, t), [4, cd(r)];
            case 1:
              return o = i.sent(), this.options.backgroundColor && (this.ctx.fillStyle = Re(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(o, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
          }
        });
      });
    }, e;
  }(su)
), cd = function(A) {
  return new Promise(function(e, t) {
    var r = new Image();
    r.onload = function() {
      e(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A));
  });
}, ud = (
  /** @class */
  function() {
    function A(e) {
      var t = e.id, r = e.enabled;
      this.id = t, this.enabled = r, this.start = Date.now();
    }
    return A.prototype.debug = function() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, Qn([this.id, this.getTime() + "ms"], e)) : this.info.apply(this, e));
    }, A.prototype.getTime = function() {
      return Date.now() - this.start;
    }, A.prototype.info = function() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t];
      this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, Qn([this.id, this.getTime() + "ms"], e));
    }, A.prototype.warn = function() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, Qn([this.id, this.getTime() + "ms"], e)) : this.info.apply(this, e));
    }, A.prototype.error = function() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, Qn([this.id, this.getTime() + "ms"], e)) : this.info.apply(this, e));
    }, A.instances = {}, A;
  }()
), fd = (
  /** @class */
  function() {
    function A(e, t) {
      var r;
      this.windowBounds = t, this.instanceName = "#" + A.instanceCount++, this.logger = new ud({ id: this.instanceName, enabled: e.logging }), this.cache = (r = e.cache) !== null && r !== void 0 ? r : new xw(this, e);
    }
    return A.instanceCount = 1, A;
  }()
), Bd = function(A, e) {
  return e === void 0 && (e = {}), ld(A, e);
};
typeof window < "u" && tu.setContext(window);
var ld = function(A, e) {
  return Ze(void 0, void 0, void 0, function() {
    var t, r, o, i, B, a, c, n, s, u, f, l, g, p, w, Q, v, y, b, O, L, I, L, N, H, j, V, X, x, _, Z, iA, rA, IA, HA, vA, mA, QA, gA, M;
    return je(this, function(R) {
      switch (R.label) {
        case 0:
          if (!A || typeof A != "object")
            return [2, Promise.reject("Invalid element provided as first argument")];
          if (t = A.ownerDocument, !t)
            throw new Error("Element is not attached to a Document");
          if (r = t.defaultView, !r)
            throw new Error("Document is not attached to a Window");
          return o = {
            allowTaint: (N = e.allowTaint) !== null && N !== void 0 ? N : !1,
            imageTimeout: (H = e.imageTimeout) !== null && H !== void 0 ? H : 15e3,
            proxy: e.proxy,
            useCORS: (j = e.useCORS) !== null && j !== void 0 ? j : !1
          }, i = Ui({ logging: (V = e.logging) !== null && V !== void 0 ? V : !0, cache: e.cache }, o), B = {
            windowWidth: (X = e.windowWidth) !== null && X !== void 0 ? X : r.innerWidth,
            windowHeight: (x = e.windowHeight) !== null && x !== void 0 ? x : r.innerHeight,
            scrollX: (_ = e.scrollX) !== null && _ !== void 0 ? _ : r.pageXOffset,
            scrollY: (Z = e.scrollY) !== null && Z !== void 0 ? Z : r.pageYOffset
          }, a = new Tt(B.scrollX, B.scrollY, B.windowWidth, B.windowHeight), c = new fd(i, a), n = (iA = e.foreignObjectRendering) !== null && iA !== void 0 ? iA : !1, s = {
            allowTaint: (rA = e.allowTaint) !== null && rA !== void 0 ? rA : !1,
            onclone: e.onclone,
            ignoreElements: e.ignoreElements,
            inlineImages: n,
            copyStyles: n
          }, c.logger.debug("Starting document clone with size " + a.width + "x" + a.height + " scrolled to " + -a.left + "," + -a.top), u = new Is(c, A, s), f = u.clonedReferenceElement, f ? [4, u.toIFrame(t, a)] : [2, Promise.reject("Unable to find element in cloned iframe")];
        case 1:
          return l = R.sent(), g = ta(f) || gw(f) ? kf(f.ownerDocument) : Co(c, f), p = g.width, w = g.height, Q = g.left, v = g.top, y = gd(c, f, e.backgroundColor), b = {
            canvas: e.canvas,
            backgroundColor: y,
            scale: (HA = (IA = e.scale) !== null && IA !== void 0 ? IA : r.devicePixelRatio) !== null && HA !== void 0 ? HA : 1,
            x: ((vA = e.x) !== null && vA !== void 0 ? vA : 0) + Q,
            y: ((mA = e.y) !== null && mA !== void 0 ? mA : 0) + v,
            width: (QA = e.width) !== null && QA !== void 0 ? QA : Math.ceil(p),
            height: (gA = e.height) !== null && gA !== void 0 ? gA : Math.ceil(w)
          }, n ? (c.logger.debug("Document cloned, using foreign object rendering"), L = new sd(c, b), [4, L.render(f)]) : [3, 3];
        case 2:
          return O = R.sent(), [3, 5];
        case 3:
          return c.logger.debug("Document cloned, element located at " + Q + "," + v + " with size " + p + "x" + w + " using computed rendering"), c.logger.debug("Starting DOM parsing"), I = Wc(c, f), y === I.styles.backgroundColor && (I.styles.backgroundColor = Dt.TRANSPARENT), c.logger.debug("Starting renderer for element at " + b.x + "," + b.y + " with size " + b.width + "x" + b.height), L = new td(c, b), [4, L.render(I)];
        case 4:
          O = R.sent(), R.label = 5;
        case 5:
          return (!((M = e.removeContainer) !== null && M !== void 0) || M) && (Is.destroy(l) || c.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), c.logger.debug("Finished rendering"), [2, O];
      }
    });
  });
}, gd = function(A, e, t) {
  var r = e.ownerDocument, o = r.documentElement ? en(A, getComputedStyle(r.documentElement).backgroundColor) : Dt.TRANSPARENT, i = r.body ? en(A, getComputedStyle(r.body).backgroundColor) : Dt.TRANSPARENT, B = typeof t == "string" ? en(A, t) : t === null ? Dt.TRANSPARENT : 4294967295;
  return e === r.documentElement ? Xt(o) ? Xt(i) ? B : i : o : B;
};
function dd({ key: A, ref: e, initData: t, onDrag: r }) {
  const o = Qo(), i = ue.useModel("dragModel/offset", !1, o)[0], B = ue.useModel("dragModel/scale", !1, o)[0], { state: a } = ue.useModel(`dragModel/drags/${A}`, !1, o)[0] || {}, [c, n] = sr(!1), [s, u] = sr(null);
  ut(() => {
    if (!a)
      return;
    const [f, l] = ue.get(`dragModel/drags/${A}/data`, o), g = a.split("+"), p = g[0], w = g.slice(-1)[0], Q = ue.get(`dragModel/drops/${w}/data`, o)[0];
    r && r({
      data: f,
      setData: l,
      type: p,
      dropData: Q
    });
  }, [a, o, A]), ut(() => {
    const f = ue.get(`dragModel/drags/${A}`, o)[1];
    return u(`easy-drag-${A}`), f({ data: t }).then(() => {
      n(!0);
    }).catch((l) => {
      n(!1);
    }), () => {
      n(!1), f(null);
    };
  }, [A, o]), ut(() => {
    if (!c || !s)
      return;
    const f = eo(e);
    if (!f)
      return;
    const l = oc(f, "easy-drag-");
    l && f.classList.remove(l), f.classList.add(s);
  }, [c, s, e, o]), ut(() => {
    if (!c)
      return;
    const f = eo(e);
    if (!f)
      return;
    const l = async (w) => {
      w.preventDefault(), f.setPointerCapture(w.pointerId);
      const { clientX: Q, clientY: v } = w, y = ue.get("dragModel/offset", o)[0], b = ue.get("dragModel/scale", o)[0], O = Q - y.x, I = v - y.y, L = ue.get(
        `dragModel/drags/${A}/startPosition`,
        o
      )[1], N = f.getBoundingClientRect(), { width: H, height: j, left: V, top: X } = N, x = await Bd(f, {
        useCORS: !0,
        backgroundColor: "black"
      }), _ = x.getContext("2d"), Z = _.getImageData(0, 0, x.width, x.height), iA = Z.data;
      for (var rA = 0; rA < iA.length; rA += 4)
        iA[rA + 3] = iA[rA + 3] * 0.5;
      _.putImageData(Z, 0, 0);
      const IA = ue.get(`dragModel/drags/${A}/preview`, o)[1], HA = {
        operationType: He.STARTDRAG,
        key: A,
        class: `${A}-preview`,
        src: x.toDataURL(),
        style: {
          position: "absolute",
          width: H * b.x + "px",
          height: j * b.y + "px",
          left: (V - y.x) * b.x + "px",
          top: (X - y.y) * b.y + "px",
          zIndex: 100
        }
      };
      await IA(HA, { callbacks: "updatePreview" }), await L({ x: O, y: I });
    }, g = async (w) => {
      w.preventDefault();
      const Q = ue.get(
        `dragModel/drags/${A}/startPosition`,
        o
      )[0];
      if (!Q)
        return;
      const { clientX: v, clientY: y } = w, b = ue.get("dragModel/offset", o)[0], O = ue.get("dragModel/scale", o)[0], I = v - b.x, L = y - b.y, N = (I - Q.x) * O.x, H = (L - Q.y) * O.y, j = ue.get(`dragModel/drags/${A}/preview`, o)[1];
      await j(
        {
          operationType: He.DRAGGING,
          key: A,
          x: I,
          y: L,
          class: `${A}-preview`,
          style: {
            transform: `translate(${N}px,${H}px)`
          }
        },
        { callbacks: "updatePreview" }
      );
    }, p = async (w) => {
      w.preventDefault();
      const { clientX: Q, clientY: v } = w, y = Q - i.x, b = v - i.y, O = ue.get(`dragModel/drags/${A}/preview`, o)[1];
      await O(
        {
          operationType: He.DROP,
          key: A,
          x: y,
          y: b,
          class: `${A}-preview`
        },
        { callbacks: "updatePreview" }
      );
      const I = ue.get(
        `dragModel/drags/${A}/startPosition`,
        o
      )[1];
      await I(null);
    };
    return f.addEventListener("pointerdown", l), f.addEventListener("pointermove", g), f.addEventListener("pointerup", p), f.addEventListener("pointerCancel", p), () => {
      f.removeEventListener("pointerdown", l), f.removeEventListener("pointermove", g), f.removeEventListener("pointerup", p), f.removeEventListener("pointerCancel", p);
    };
  }, [c, e, A, JSON.stringify(i), JSON.stringify(B), o]);
}
function pd({ acceptKeys: A = ["*"], initData: e, ref: t, onDrop: r }) {
  const o = Qo(), i = ue.useModel("dragModel/offset", !1, o)[0], B = sr(`easy-drop-${Ot()}`)[0], { state: a } = ue.useModel(`dragModel/drops/${B}`, !1, o)[0] || {}, [c, n] = sr(!1);
  ut(() => {
    if (!a)
      return;
    const [s, u] = ue.get(`dragModel/drops/${B}/data`, o), [f, l] = a.split("+"), g = ue.get(`dragModel/drags/${l}/data`, o)[0];
    r && r({ dragState: g, setData: u, data: s, type: f });
  }, [a, o, B]), ut(() => {
    const s = ue.get(`dragModel/drops/${B}`, o)[1];
    return s({ data: e }).then(() => {
      n(!0);
    }).catch((u) => {
      n(!1);
    }), () => {
      n(!1), s(null);
    };
  }, [B, o]), ut(() => {
    if (!c)
      return;
    if (!Array.isArray(A) || A.length === 0) {
      console.error("acceptKeys must be a non-empty array");
      return;
    }
    const s = ue.get(
      `dragModel/drops/${B}/acceptKeys`,
      o
    )[1];
    s(A);
  }, [c, B, JSON.stringify(A), o]), ut(() => {
    const s = eo(t);
    if (!s)
      return;
    const u = oc(s, "easy-drop-");
    u && s.classList.remove(u), s.classList.add(B);
  }, [t, B]), ut(() => {
    if (!c)
      return;
    const s = eo(t);
    if (!s)
      return;
    const u = s.getBoundingClientRect(), f = [
      [u.left - i.x, u.top - i.y],
      [u.right - i.x, u.top - i.y],
      [u.right - i.x, u.bottom - i.y],
      [u.left - i.x, u.bottom - i.y]
    ], l = ue.get(
      `dragModel/drops/${B}/polygon`,
      o
    )[1];
    l(f);
  }, [c, B, t, JSON.stringify(i), o]);
}
function Qd(A) {
  if (!A)
    throw new Error("key is required");
  const e = Qo(), t = ue.useModel(`dragModel/drags/${A}`, !1, e)[0], [r, o] = sr(null);
  return ut(() => {
    if (!t)
      return;
    const { data: i } = t;
    o(i);
  }, [JSON.stringify(t)]), r;
}
export {
  wd as default,
  He as operationType,
  Qd as useData,
  dd as useDrag,
  pd as useDrop
};
